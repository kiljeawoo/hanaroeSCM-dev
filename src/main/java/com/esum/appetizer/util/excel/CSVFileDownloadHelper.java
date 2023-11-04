package com.esum.appetizer.util.excel;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.RandomStringUtils;
import org.apache.commons.lang.StringUtils;
import org.supercsv.io.AbstractCsvWriter;
import org.supercsv.io.CsvBeanWriter;
import org.supercsv.io.CsvMapWriter;
import org.supercsv.prefs.CsvPreference;

/**
 * CSV 파일 다운로더
 * @author YunChang.Lee
 *
 */
public class CSVFileDownloadHelper {
	private enum CSVWriterType {
		BEAN, MAP
	}

	private String fileName;
	private HttpServletResponse response;
	private AbstractCsvWriter csvWriter;
	
	public CSVFileDownloadHelper(HttpServletResponse response, String fileName) throws IOException {
		this.response = response;
		this.fileName = fileName;
		
		if (StringUtils.isEmpty(this.fileName)) {
			this.fileName = RandomStringUtils.randomAlphabetic(10) + ".csv";
		}

		String headerKey = "Content-Disposition";
		String headerValue = String.format("attachment; filename=\"%s\"",this.fileName);
		response.setContentType("text/csv; charset=MS949");
		response.setHeader(headerKey, headerValue);
	}

	public String getFileName() {
		return fileName;
	}
	
	public void writer(AbstractModel model) throws IOException {
		if(model == null) {
			return;
		}
		List<?> dataList = model.getDataList();
		if(dataList != null && dataList.size() > 0) {
			CSVWriterType modelType = null;
			if (dataList.get(0) instanceof Map) {
				modelType = CSVWriterType.MAP;
				csvWriter = new CsvMapWriter(response.getWriter(),CsvPreference.STANDARD_PREFERENCE);
			} else {
				modelType = CSVWriterType.BEAN;
				csvWriter = new CsvBeanWriter(response.getWriter(),CsvPreference.STANDARD_PREFERENCE);
			}
			csvWriter.writeHeader(model.getHeader());
			for(Object data : dataList) {
				if(modelType.equals(CSVWriterType.MAP)) {
					((CsvMapWriter)csvWriter).write( (Map<String, ?>)data, model.getKeyIndex());
				} else {
					((CsvBeanWriter)csvWriter).write(data, model.getKeyIndex());
				}
			}
			csvWriter.close();
		}
	}
}
