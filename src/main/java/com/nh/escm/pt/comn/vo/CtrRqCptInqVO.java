package com.nh.escm.pt.comn.vo;

import java.io.Serializable;

public class CtrRqCptInqVO  implements Serializable {

	private static long serialVersionUID = 182857165908383948L;
	
	private String CSLT_RQ_NO    	;//앱 아이디
	private String BZNO          	;//사업자 번호
	private String CHRRNM        	;//신청자이름
	private String CHRR_MPNO     	;//신청자 핸드폰
	private String RQ_DT          	;//신청일자
	private String MAJ_LATC        	;//주요품목
	private String CONM     	    ;//업체명
	
	
	
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public static void setSerialversionuid(long serialversionuid) {
		serialVersionUID = serialversionuid;
	}
	public String getCSLT_RQ_NO() {
		return CSLT_RQ_NO;
	}
	public void setCSLT_RQ_NO(String cSLT_RQ_NO) {
		CSLT_RQ_NO = cSLT_RQ_NO;
	}
	public String getBZNO() {
		return BZNO;
	}
	public void setBZNO(String bZNO) {
		BZNO = bZNO;
	}
	public String getCHRRNM() {
		return CHRRNM;
	}
	public void setCHRRNM(String cHRRNM) {
		CHRRNM = cHRRNM;
	}
	public String getCHRR_MPNO() {
		return CHRR_MPNO;
	}
	public void setCHRR_MPNO(String cHRR_MPNO) {
		CHRR_MPNO = cHRR_MPNO;
	}
	public String getRQ_DT() {
		return RQ_DT;
	}
	public void setRQ_DT(String rQ_DT) {
		RQ_DT = rQ_DT;
	}
	public String getMAJ_LATC() {
		return MAJ_LATC;
	}
	public void setMAJ_LATC(String mAJ_LATC) {
		MAJ_LATC = mAJ_LATC;
	}
	public String getCONM() {
		return CONM;
	}
	public void setCONM(String cONM) {
		CONM = cONM;
	}
	
	
}
