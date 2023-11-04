package com.esum.appetizer.util.excel;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.nexacro.xapi.data.DataSet;

public class DataSetModel extends AbstractModel {
	private DataSet ds;
	public DataSetModel(DataSet ds, String[] header) {
		super(ds.getName());
		this.ds = ds;
		setHeader(header);
	}
	@Override
	protected String[] makeHeader() {
		return makeKeyIndex();
	}
	@Override
	protected String[] makeKeyIndex() {
		int cmnCnt = ds.getColumnCount();
		List<String> list = new ArrayList<String>();
		for(int i = 0; i < cmnCnt; i++) {
			list.add(ds.getColumn(i).getName());
		}
		
		return list.toArray(new String[cmnCnt]);
	}
	@Override
	protected List<?> makeDataList() {
		int rowNum = ds.getRowCount();
		List<Map<String, Object>> dataList = new ArrayList<Map<String,Object>>();
		for(int i=0; i<rowNum; i++) {
			Map<String, Object> map = new HashMap<String, Object>();
			for(String name : getKeyIndex()) {
				map.put(name, ds.getObject(i, name));
			}
			
			dataList.add(map);
			
		}
		return dataList;
	}	
}
