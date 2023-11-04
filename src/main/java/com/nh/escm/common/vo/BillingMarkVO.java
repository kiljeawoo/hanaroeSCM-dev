package com.nh.escm.common.vo;

import java.io.Serializable;
import java.util.HashSet;

import com.esum.appetizer.vo.DeduplicationObject;
import com.nh.escm.common.service.BillingMarkUpService.BillingMarkUpTableName;

public class BillingMarkVO implements Serializable {
	private static final long serialVersionUID = 20151014L;
	
	private BillingMarkUpTableName markTableName;
	private String GLN;
	private String MD_ID;
	private HashSet<DeduplicationObject> hashSet;
	
	public BillingMarkVO(BillingMarkUpTableName markTableName, String gLN,
			String mD_ID, HashSet<DeduplicationObject> hashSet) {
		super();
		this.markTableName = markTableName;
		this.GLN = gLN;
		this.MD_ID = mD_ID;
		this.hashSet = hashSet;
	}
	
	public BillingMarkUpTableName getMarkTableName() {
		return markTableName;
	}
	public void setMarkTableName(BillingMarkUpTableName markTableName) {
		this.markTableName = markTableName;
	}
	public String getGLN() {
		return GLN;
	}
	public void setGLN(String gLN) {
		GLN = gLN;
	}
	public String getMD_ID() {
		return MD_ID;
	}
	public void setMD_ID(String mD_ID) {
		MD_ID = mD_ID;
	}
	public HashSet<DeduplicationObject> getHashSet() {
		return hashSet;
	}
	public void setHashSet(HashSet<DeduplicationObject> hashSet) {
		this.hashSet = hashSet;
	}
}
