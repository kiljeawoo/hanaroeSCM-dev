package com.nh.escm.ct.eltctrwamn.vo;


/**
 * <PRE>  
 * 	전자계약 VO
 * </PRE>
 * @author  :강훈복
 * @version : 1.0 
 * @since : 2015.07.10
 * @modified
 * @modifier 
 */

import java.io.Serializable;
import java.util.List;


public class EtcEltStylAmnVO implements Serializable{
	
	private static final long serialVersionUID = 20150818L;
	
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
	private String CTRW_KDC                              ;//계약서종류코드
	private String CTRW_STY_VER                          ;//계약서양식버전
	private String UYN                                   ;//사용여부                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
	private String SQNO                                  ;//일련번호	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
	private String CTRW_CNTN                             ;//계약서내용
	private String CTRW_MOD_CNTN                         ;//계약서내용
	private String FSRG_DTM                              ;//최초등록일시                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
	private String FS_RGM                                ;//최초등록자                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
	private String LSCHG_DTM                             ;//최종변경일시                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
	private String LS_CHGM                               ;//최종변경자  
	
	private String DML_CODE;

	
	private List<EtcEltStylAmnVO>   etcEltStylAmlVoList;
	
	
	
	public List<EtcEltStylAmnVO> getEtcEltStylAmlVoList() {
		return etcEltStylAmlVoList;
	}

	public void setEtcEltStylAmlVoList(List<EtcEltStylAmnVO> etcEltStylAmlVoList) {
		this.etcEltStylAmlVoList = etcEltStylAmlVoList;
	}

	

	public String getCTRW_KDC() {
		return CTRW_KDC;
	}

	public void setCTRW_KDC(String cTRW_KDC) {
		CTRW_KDC = cTRW_KDC;
	}

	public String getCTRW_STY_VER() {
		return CTRW_STY_VER;
	}

	public void setCTRW_STY_VER(String cTRW_STY_VER) {
		CTRW_STY_VER = cTRW_STY_VER;
	}

	public String getUYN() {
		return UYN;
	}

	public void setUYN(String uYN) {
		UYN = uYN;
	}

	public String getSQNO() {
		return SQNO;
	}

	public void setSQNO(String sQNO) {
		SQNO = sQNO;
	}

	public String getCTRW_CNTN() {
		return CTRW_CNTN;
	}

	public void setCTRW_CNTN(String cTRW_CNTN) {
		CTRW_CNTN = cTRW_CNTN;
	}

	public String getFSRG_DTM() {
		return FSRG_DTM;
	}

	public void setFSRG_DTM(String fSRG_DTM) {
		FSRG_DTM = fSRG_DTM;
	}

	public String getFS_RGM() {
		return FS_RGM;
	}

	public void setFS_RGM(String fS_RGM) {
		FS_RGM = fS_RGM;
	}

	public String getLSCHG_DTM() {
		return LSCHG_DTM;
	}

	public void setLSCHG_DTM(String lSCHG_DTM) {
		LSCHG_DTM = lSCHG_DTM;
	}

	public String getLS_CHGM() {
		return LS_CHGM;
	}

	public void setLS_CHGM(String lS_CHGM) {
		LS_CHGM = lS_CHGM;
	}

	public String getDML_CODE() {
		return DML_CODE;
	}

	public void setDML_CODE(String dML_CODE) {
		DML_CODE = dML_CODE;
	}

	public String getCTRW_MOD_CNTN() {
		return CTRW_MOD_CNTN;
	}

	public void setCTRW_MOD_CNTN(String cTRW_MOD_CNTN) {
		CTRW_MOD_CNTN = cTRW_MOD_CNTN;
	}
		
	
}

 