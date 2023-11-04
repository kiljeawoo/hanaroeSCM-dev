package com.nh.escm.vo;

public class DashboardSet {
	
	private String type;
	private String prop;
	private String value;
	
	public DashboardSet() {
	}
	public DashboardSet(String type, String prop, String value) {
		this.type = type;
		this.prop = prop;
		this.value = value;
	}
	
	public String getType() {
		return type;
	}
	
	public void setType(String type) {
		this.type = type;
	}
	
	public String getProp() {
		return prop;
	}
	
	public void setProp(String prop) {
		this.prop = prop;
	}
	
	public String getValue() {
		return value;
	}
	
	public void setValue(String value) {
		this.value = value;
	}
	
}
