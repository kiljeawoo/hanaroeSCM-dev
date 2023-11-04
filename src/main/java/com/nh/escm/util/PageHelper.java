package com.nh.escm.util;

import org.apache.commons.lang.StringUtils;

import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataTypes;

public class PageHelper {
	
	private static final String CURRENT_PAGE = "CURRENT_PAGE";
	private static final String PAGE_SIZE = "PAGE_SIZE";
	
	private int currentPage;
	private int pageSize;
	private int start;
	private int end;
	private int totalRowCount;
	private String dataSetNm;
	private DataSet dsPageVo;
	
	
	public static PageHelper newInstance(DataSet dsPageVo, int totalRowCount) {
		return new PageHelper(dsPageVo, totalRowCount);
	}
	
	public static PageHelper newInstance(DataSet dsPageVo, int totalRowCount, String dataSetNm) {
		return new PageHelper(dsPageVo, totalRowCount, dataSetNm);
	}
	
	
	public PageHelper(DataSet dsPageVo, int totalRowCount){
		this.currentPage = Integer.parseInt(dsPageVo.getString(0, CURRENT_PAGE));
		this.pageSize = Integer.parseInt(dsPageVo.getString(0, PAGE_SIZE));
		this.totalRowCount = totalRowCount;
		this.start = (currentPage - 1) * pageSize + 1;
		this.end = currentPage * pageSize;
		this.dataSetNm = "ds_pageVO";
		this.dsPageVo = makePgDataSet();
	}
	
	public PageHelper(DataSet dsPageVo, int totalRowCount, String dataSetNm){
		this.currentPage = Integer.parseInt(dsPageVo.getString(0, CURRENT_PAGE));
		this.pageSize = Integer.parseInt(dsPageVo.getString(0, PAGE_SIZE));
		this.totalRowCount = totalRowCount;
		this.start = (currentPage - 1) * pageSize + 1;
		this.end = currentPage * pageSize;
		this.dataSetNm = dataSetNm;
		this.dsPageVo = makePgDataSet();
		
	}
	
	
	
	public int getCurrentPage() {
		return currentPage;
	}


	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}


	public int getPageSize() {
		return pageSize;
	}


	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}


	public int getStart() {
		return start;
	}


	public void setStart(int start) {
		this.start = start;
	}


	public int getEnd() {
		return end;
	}


	public void setEnd(int end) {
		this.end = end;
	}


	public int getTotalRowCount() {
		return totalRowCount;
	}


	public void setTotalRowCount(int totalRowCount) {
		this.totalRowCount = totalRowCount;
	}


	public DataSet getDsPageVo() {
		return dsPageVo;
	}


	public void setDsPageVo(DataSet dsPageVo) {
		this.dsPageVo = dsPageVo;
	}
	
	

	public String getDataSetNm() {
		return dataSetNm;
	}

	public void setDataSetNm(String dataSetNm) {
		this.dataSetNm = dataSetNm;
	}

	/*
	 * 2015.08.03
	 * swha
	 * add option for page data set Dynamic
	 * Before : DataSet pgDataSet = new DataSet("ds_pageVO");
	 * After : DataSet pgDataSet = new DataSet(StringUtils.defaultString(pageDataSetNm, "ds_pageVO"));
	 */
	private DataSet makePgDataSet(){
		DataSet pgDataSet = new DataSet(dataSetNm);
		pgDataSet.addColumn("TOTAL_ROW_COUNT" ,DataTypes.STRING);
		pgDataSet.addColumn("PAGE_SIZE" ,DataTypes.STRING);
		pgDataSet.addColumn("CURRENT_PAGE" ,DataTypes.STRING);
		
		int row = pgDataSet.newRow();
		pgDataSet.set(row, "TOTAL_ROW_COUNT" , totalRowCount);		//total row count
		pgDataSet.set(row, "PAGE_SIZE" , pageSize);	// page size
		pgDataSet.set(row, "CURRENT_PAGE" , currentPage);		//current size
		
		return pgDataSet;
		
	}
	
	
	
	
	
}
