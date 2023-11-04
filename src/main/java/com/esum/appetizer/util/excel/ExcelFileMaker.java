package com.esum.appetizer.util.excel;

import java.io.FileOutputStream;
import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.RandomStringUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.math.NumberUtils;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.CreationHelper;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.slf4j.Logger;
import org.supercsv.util.MethodCache;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.util.LoggerUtil;

public class ExcelFileMaker {
	private Logger logger = LoggerUtil.getServerLogger(this.getClass());
	
	private Workbook workbook = new SXSSFWorkbook(1000); // 대용량 xlsx - 1000 row 마다 파일로 flush
	private final MethodCache cache = new MethodCache();
	private Sheet dataSheet;
	private CellStyle cs = null;
	
	public ExcelFileMaker() {
	}
	
	public void createSearchSheet(Map<String, Object> searchMap) {
		Sheet searchSheet = workbook.createSheet("검색조건");
		int rownumber = 0;
		if(searchMap != null) {
			Set<String> keys = searchMap.keySet();
			for(String key : keys) {
				Row row = searchSheet.createRow(rownumber++);
				Cell keyCell = row.createCell(1);
				Cell valueCell = row.createCell(2);
				
				setCellData(keyCell, key);
				setCellData(valueCell, searchMap.get(key));
				
			}
		}
		
	}
	private void createDataSheetHeader(String[] header, Sheet dataSheet, int rownumber) {
		Row row = dataSheet.createRow(rownumber);
		int cellnum = 0;

		for(String cellName : header) {
			Cell cell = row.createCell(cellnum++);
			cell.setCellValue(cellName);
		}
	}
	
	public void setColumnWidth(Sheet dataSheet, int  index, int size){
		dataSheet.setColumnWidth(index, size);
	}
	
	private void setCellData(Cell cell, Object obj) {
		if(obj == null) {
			return;
		}
		
		if(obj instanceof Date) {
			if (cs == null) {
				// 날짜형식 기본 포맷 설정
				CreationHelper ch = workbook.getCreationHelper();
				cs = workbook.createCellStyle();
				cs.setDataFormat(ch.createDataFormat().getFormat("yyyy-mm-dd h:mm"));
			}
			
            cell.setCellValue((Date)obj);
            cell.setCellStyle(cs);
		}
        else if(obj instanceof Boolean) {
            cell.setCellValue((Boolean)obj);
        }
        else if(obj instanceof String) {
            cell.setCellValue((String)obj);
        }
        else if((obj instanceof Double) ||
        		(obj instanceof Long) ||
        		(obj instanceof BigDecimal) || 
        		(obj instanceof Short) || 
        		(obj instanceof Integer) || 
        		(obj instanceof Float)) {
            cell.setCellValue(NumberUtils.toDouble(obj.toString()));
        } else {
        	cell.setCellValue(obj.toString());
        }
		
	}
	
	@SuppressWarnings("unchecked")
	public void createDataSheet(AbstractModel dataModel) throws AppetizerException {
		dataSheet = workbook.createSheet(dataModel.getName());
		int rownumber = 0;
		createDataSheetHeader(dataModel.getHeader(), dataSheet, rownumber++);
		
		List<?> dataList = dataModel.getDataList();
		String[] keyIndex = dataModel.getKeyIndex();
		
		if(dataList != null && dataList.size() > 0) {
			for(Object data : dataList) {
				Row row = dataSheet.createRow(rownumber++);
				int cellnum = 0;
				if (data instanceof Map) {
					Map<String, Object> mapData = (Map<String, Object>)data;
					for(String key : keyIndex) {
						Cell cell = row.createCell(cellnum++);
						setCellData(cell,mapData.get(key));
					}
					
				} else if(data instanceof List) {
					List<Object> listData = (List<Object>)data;
					for(Object obj : listData) {
						Cell cell = row.createCell(cellnum++);
						setCellData(cell,obj);
					}
				} else {
					List<Object> listData = extractBeanValues(data, keyIndex);
					for(Object obj : listData) {
						Cell cell = row.createCell(cellnum++);
						setCellData(cell,obj);
					}
				}
			}
		}		
	}
	
	private List<Object> extractBeanValues(final Object source, final String[] nameMapping) {
		List<Object> beanValues = new ArrayList<Object>();
 		if( source == null ) {
			throw new AppetizerException("the bean to write should not be null");
		} else if( nameMapping == null ) {
			throw new AppetizerException(
				"the nameMapping array can't be null as it's used to map from fields to columns");
		}
		
		beanValues.clear();
		
		for( int i = 0; i < nameMapping.length; i++ ) {
			
			final String fieldName = nameMapping[i];
			
			if( fieldName == null ) {
				beanValues.add(null); // assume they always want a blank column
				
			} else {
				Method getMethod = cache.getGetMethod(source, fieldName);
				try {
					beanValues.add(getMethod.invoke(source));
				} catch (IllegalAccessException e) {
					throw new AppetizerException(String.format("error extracting bean value for field %s", fieldName));
				} catch (IllegalArgumentException e) {
					throw new AppetizerException(String.format("error extracting bean value for field %s", fieldName));
				} catch (InvocationTargetException e) {
					throw new AppetizerException(String.format("error extracting bean value for field %s", fieldName));
				}
			}
			
		}
		return beanValues;
	}
	
	public void write(HttpServletResponse response, String downloadFileName) throws AppetizerException {
		String fileName;
		try {
			if (StringUtils.isEmpty(downloadFileName)) {
				fileName = RandomStringUtils.randomAlphabetic(10) + ".xls";
			} else {
				fileName = downloadFileName;
			}
			
			if ((workbook instanceof SXSSFWorkbook || workbook instanceof XSSFWorkbook) && fileName.endsWith(".xls")) {
				fileName += "x";
			}
			
			response.setContentType("application/vnd.ms-excel; charset=MS949");
			response.setHeader("Content-disposition", "attachment; filename=" + fileName);
			response.setHeader("Set-Cookie", "fileDownload=true; path=/");			
			workbook.write(response.getOutputStream());
		} catch (IOException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException("엑셀파일 생성중 오류가 발생하였습니다.");
		} finally {
			try {
				if (workbook instanceof SXSSFWorkbook) {
					((SXSSFWorkbook) workbook).dispose(); // temp 파일 삭제
				}
				workbook.close();
			} catch (IOException ie) {
				logger.error(ie.getMessage(), ie);
			} catch (AppetizerException e) {
				logger.error(e.getMessage(), e);
			} // ignore
		}
	}
	
	public void write(FileOutputStream fileOut) throws AppetizerException {
		try {
			workbook.write(fileOut);
		} catch (IOException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException("엑셀파일 생성중 오류가 발생하였습니다.");
		} finally {
			try {
				if (workbook instanceof SXSSFWorkbook) {
					((SXSSFWorkbook) workbook).dispose(); // temp 파일 삭제
				}
				workbook.close();
			} catch (IOException ie) {
				logger.error(ie.getMessage(), ie);
			} catch (AppetizerException e) {
				logger.error(e.getMessage(), e);
			} // ignore
		}
	}

	public Sheet getDataSheet() {
		return dataSheet;
	}

	public void setDataSheet(Sheet dataSheet) {
		this.dataSheet = dataSheet;
	}


}
