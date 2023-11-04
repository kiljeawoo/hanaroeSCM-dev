package com.nh.escm.pt.comn.vo;

import java.io.Serializable;

public class AdrInqVO  implements Serializable {

	private static long serialVersionUID = 182857165908383948L;
	
	private String ISCHECKED    	;//앱 아이디
	private String DTCT_NO	      							 ;//우편번호
	private String PROVNM	      						 ;//시도명
	private String CCWNM	      						 ;//시군구명   
	private String TTVNM	      						 ;//읍면
	private String RODNM_C	      						 ;//도로명코드
	private String RODNM	      						 ;//도로명
	private String BLD_NO_MHZNO	      					 ;//건물번호본번
	private String BLD_NO_SHZNO	      					 ;//건물번호부번
	private String CCWN_BLDNM	      					 ;//시군구용건물명
	private String LWDG_C	      						 ;//법정동코드
	private String LWDGNM	      						 ;//법정동명
	private String LTNO_MHZNO	      					 ;//지번본번
	private String LTNO_SHZNO	      					 ;//지번부번
	private String BLD_AMNNO;							// 건물관리번호
	private String RINM;										// 리 명
	
	public static long getSerialVersionUID() {
		return serialVersionUID;
	}
	public static void setSerialVersionUID(long serialVersionUID) {
		AdrInqVO.serialVersionUID = serialVersionUID;
	}
	public String getISCHECKED() {
		return ISCHECKED;
	}
	public void setISCHECKED(String iSCHECKED) {
		ISCHECKED = iSCHECKED;
	}
	public String getDTCT_NO() {
		return DTCT_NO;
	}
	public void setDTCT_NO(String dTCT_NO) {
		DTCT_NO = dTCT_NO;
	}
	public String getPROVNM() {
		return PROVNM;
	}
	public void setPROVNM(String pROVNM) {
		PROVNM = pROVNM;
	}
	public String getCCWNM() {
		return CCWNM;
	}
	public void setCCWNM(String cCWNM) {
		CCWNM = cCWNM;
	}
	public String getTTVNM() {
		return TTVNM;
	}
	public void setTTVNM(String tTVNM) {
		TTVNM = tTVNM;
	}
	public String getRODNM_C() {
		return RODNM_C;
	}
	public void setRODNM_C(String rODNM_C) {
		RODNM_C = rODNM_C;
	}
	public String getRODNM() {
		return RODNM;
	}
	public void setRODNM(String rODNM) {
		RODNM = rODNM;
	}
	public String getBLD_NO_MHZNO() {
		return BLD_NO_MHZNO;
	}
	public void setBLD_NO_MHZNO(String bLD_NO_MHZNO) {
		BLD_NO_MHZNO = bLD_NO_MHZNO;
	}
	public String getBLD_NO_SHZNO() {
		return BLD_NO_SHZNO;
	}
	public void setBLD_NO_SHZNO(String bLD_NO_SHZNO) {
		BLD_NO_SHZNO = bLD_NO_SHZNO;
	}
	public String getCCWN_BLDNM() {
		return CCWN_BLDNM;
	}
	public void setCCWN_BLDNM(String cCWN_BLDNM) {
		CCWN_BLDNM = cCWN_BLDNM;
	}
	public String getLWDG_C() {
		return LWDG_C;
	}
	public void setLWDG_C(String lWDG_C) {
		LWDG_C = lWDG_C;
	}
	public String getLWDGNM() {
		return LWDGNM;
	}
	public void setLWDGNM(String lWDGNM) {
		LWDGNM = lWDGNM;
	}
	public String getLTNO_MHZNO() {
		return LTNO_MHZNO;
	}
	public void setLTNO_MHZNO(String lTNO_MHZNO) {
		LTNO_MHZNO = lTNO_MHZNO;
	}
	public String getLTNO_SHZNO() {
		return LTNO_SHZNO;
	}
	public void setLTNO_SHZNO(String lTNO_SHZNO) {
		LTNO_SHZNO = lTNO_SHZNO;
	}
	public String getBLD_AMNNO() {
		return BLD_AMNNO;
	}
	public void setBLD_AMNNO(String bLD_AMNNO) {
		BLD_AMNNO = bLD_AMNNO;
	}
	public String getRINM() {
		return RINM;
	}
	public void setRINM(String rINM) {
		RINM = rINM;
	}
}