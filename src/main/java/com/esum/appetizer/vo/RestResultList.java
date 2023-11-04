package com.esum.appetizer.vo;

import java.util.List;

import com.esum.appetizer.exception.ErrorCode;

public class RestResultList extends RestResult {
	
	private int totalCount;
	
	public RestResultList(ErrorCode code, String message, List<?> data, int totalCount) {
		super(code, message, data);
		this.totalCount = totalCount;
	}
	
	public int getTotalCount() {
		return totalCount;
	}

}
