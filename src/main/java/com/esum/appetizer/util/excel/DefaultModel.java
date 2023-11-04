package com.esum.appetizer.util.excel;

import java.util.List;

import com.esum.appetizer.exception.AppetizerException;

public class DefaultModel extends AbstractModel {
	
	public DefaultModel(String name, String[] header, String[] keyIndex,List<?> dataList) {
		super(name);
		setHeader(header);
		setKeyIndex(keyIndex);
		setDataList(dataList);
	}

	@Override
	protected String[] makeHeader() {
		throw new AppetizerException("Do not Run MakeHeader");

	}

	@Override
	protected String[] makeKeyIndex() {
		throw new AppetizerException("Do not Run makeKeyIndex");
	}

	@Override
	protected List<?> makeDataList() {
		throw new AppetizerException("Do not Run makeDataList");
	}
}
