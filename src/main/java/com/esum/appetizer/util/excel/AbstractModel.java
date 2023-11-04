package com.esum.appetizer.util.excel;

import java.util.List;

public abstract class AbstractModel {
	
	private String name;
	private String[] header;
	private String[] keyIndex;
	private List<?> dataList;
	
	public AbstractModel(String name) {
		this.name = name;
	}
	
	protected abstract String[] makeHeader();
	protected abstract String[] makeKeyIndex();
	protected abstract List<?> makeDataList();
	
	public String[] getHeader() {
		if(header == null)
			header = makeHeader();
		return header.clone();
	}
	
	public String[] getKeyIndex() {
		if(keyIndex == null)
			keyIndex = makeKeyIndex();

		return keyIndex.clone();
	}
	public void setHeader(String[] header) {
		this.header = header.clone();
	}
	public void setKeyIndex(String[] keyIndex) {
		this.keyIndex = keyIndex.clone();
	}
	public List<?> getDataList() {
		if(dataList == null)
			dataList = makeDataList();

		return dataList;
	}
	public void setDataList(List<?> dataList) {
		this.dataList = dataList;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	
}
