package com.esum.appetizer.vo;

import java.io.Serializable;

public class KeyValueVO implements Serializable {

	private static final long serialVersionUID = 20150601L;
	private String key;
	private Object value;
	
	public String getKey() {
		return key;
	}
	public void setKey(String key) {
		this.key = key;
	}
	public Object getValue() {
		return value;
	}
	public void setValue(Object value) {
		this.value = value;
	}

	
}
