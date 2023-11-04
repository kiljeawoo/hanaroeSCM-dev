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
import org.apache.ibatis.session.ResultContext;
import org.apache.ibatis.session.ResultHandler;
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

public class ExcelFileMakerResultHandler implements ResultHandler{
	private Logger logger = LoggerUtil.getServerLogger(this.getClass());
	
	
	private final MethodCache cache = new MethodCache();
	private Sheet dataSheet;
	private AbstractModel dataModel;
	int rownumber = 0;
	private Workbook workbook;
	private CellStyle cs = null;
	
	public ExcelFileMakerResultHandler() {
	}
	
	public ExcelFileMakerResultHandler(Workbook workbook, AbstractModel dataModel) {
		this.workbook = workbook;
		this.dataModel = dataModel;
		dataSheet = this.workbook.createSheet(this.dataModel.getName());
		//rownumber = 0;
		createDataSheetHeader(this.dataModel.getHeader(), dataSheet, rownumber++);
	}
	
	@Override
	public void handleResult(ResultContext resultContext) {
		
		Map data = (Map)resultContext.getResultObject();
		
		createDataSheet(data, rownumber++);
	}
	
	public void createSearchSheet(Map<String, Object> searchMap) {
		Sheet searchSheet = this.workbook.createSheet("검색조건");
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
			setColumnWidth(dataSheet, cellnum, 5000);
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
	public void createDataSheet(Map data, int rownumber) throws AppetizerException {
		int cellnum = 0;
		Row row = dataSheet.createRow(rownumber);
		String[] keyIndex = this.dataModel.getKeyIndex();
		
		if(keyIndex != null && keyIndex.length > 0) {
			for(int j = 0; j < keyIndex.length; j++){
				Cell cell = row.createCell(cellnum++);
				setCellData(cell,data.get(keyIndex[j]));
			}
		}
		
	}
	
	public void write(HttpServletResponse response, String downloadFileName) throws AppetizerException {
		String fileName;
		try {
			if (StringUtils.isEmpty(downloadFileName)) {
				fileName = RandomStringUtils.randomAlphabetic(10) + ".xls";
			} else {
				fileName = downloadFileName;
			}
			
			if ((this.workbook instanceof SXSSFWorkbook || this.workbook instanceof XSSFWorkbook) && fileName.endsWith(".xls")) {
				fileName += "x";
			}
			
			response.setContentType("application/vnd.ms-excel; charset=MS949");
			response.setHeader("Content-disposition", "attachment; filename=" + fileName);
			response.setHeader("Set-Cookie", "fileDownload=true; path=/");			
			this.workbook.write(response.getOutputStream());
		} catch (IOException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException("엑셀파일 생성중 오류가 발생하였습니다.");
		} finally {
			try {
				if (this.workbook instanceof SXSSFWorkbook) {
					((SXSSFWorkbook) this.workbook).dispose(); // temp 파일 삭제
				}
				this.workbook.close();
			} catch (IOException ie) {
				logger.error(ie.getMessage(), ie);
			} catch (AppetizerException e) {
				logger.error(e.getMessage(), e);
			} // ignore
		}
	}
	
	public void write(FileOutputStream fileOut) throws AppetizerException {
		try {
			this.workbook.write(fileOut);
		} catch (IOException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException("엑셀파일 생성중 오류가 발생하였습니다.");
		} finally {
			try {
				if (this.workbook instanceof SXSSFWorkbook) {
					((SXSSFWorkbook) this.workbook).dispose(); // temp 파일 삭제
				}
				this.workbook.close();
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
