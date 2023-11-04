package com.esum.appetizer.vo;

import java.io.Serializable;
import java.util.LinkedHashMap;

import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;

public class DeduplicationObject implements Serializable {

	private static final long serialVersionUID = 20151014L;
	
	private LinkedHashMap<String, Object> values;
	public DeduplicationObject(LinkedHashMap<String, Object> values) {
		this.values = values;
	}
	
	public LinkedHashMap<String, Object> getValues() {
		return values;
	}
	
	@Override
	  public int hashCode() {
		return new HashCodeBuilder().append(values).toHashCode();
	  }

	  @Override
	  public boolean equals(Object obj) {
	    if (obj instanceof DeduplicationObject) {
	    	DeduplicationObject rhs = (DeduplicationObject) obj;
	    	return new EqualsBuilder().append(values, rhs.getValues()).isEquals();
	    }
	    return false;
	  }
	
}
