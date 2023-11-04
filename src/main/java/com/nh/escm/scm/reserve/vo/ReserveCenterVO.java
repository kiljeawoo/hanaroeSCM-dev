package com.nh.escm.scm.reserve.vo;

import java.io.Serializable;
import java.util.List;

/**
 * 입고 예약 등록 VO
 * @author HyeRim.Oh
 *
 */
public class ReserveCenterVO implements Serializable{
	
	private static final long serialVersionUID = 20150730L;
	
	private String VHCNO;  //차량번호
	private String PHD_DVY_CAFFNM;  //운전자명
	private String TELNO;  //연락처
	private String PHD_PAS_SRTR_BKG_TMI;  //TC(소터)
	private String PHD_PAS_BLK_BKG_TMI;  //TC(벌크)
	private String STPL_CSTD_ELT_TAG_BKG_TMI;  //DC(RFID)
	private String STPL_CSTD_GEN_BKG_TMI;  //DC(일반)
	private String NA_TRPL_C;  //공급업체코드
	private String CLNTNM;  //공급업체명
	private String CRUD_DSC; //CUD처리구분
	private String NA_DVY_PLASH_SLPNO; //배송예정서번호
	private String VHC_BKG_PHD_IDVD_NO;  //차량예약물류개별번호	
	private String VHC_BKG_DT;  //차량예약일자
	
	private String FSRGMN_ENO; //최초등록자개인번호
	private String LS_CMENO; //최종변경자개인번호
	
	private String STR_PHD_IDVD_NO; //입고물류개별번호
	
	private String PRC_YN; //경통전송여부
	private String RSP_C_CNTN; //결과수신
	
	private String VHC_ENTRUK_BKG_TMI; //차량입차예약시분
		
	private List<ReserveCenterDetailVO> detailVoList;
		
	public String getVHC_ENTRUK_BKG_TMI() {
		return VHC_ENTRUK_BKG_TMI;
	}
	public void setVHC_ENTRUK_BKG_TMI(String vHC_ENTRUK_BKG_TMI) {
		VHC_ENTRUK_BKG_TMI = vHC_ENTRUK_BKG_TMI;
	}
	public String getPRC_YN() {
		return PRC_YN;
	}
	public void setPRC_YN(String pRC_YN) {
		PRC_YN = pRC_YN;
	}
	public String getRSP_C_CNTN() {
		return RSP_C_CNTN;
	}
	public void setRSP_C_CNTN(String rSP_C_CNTN) {
		RSP_C_CNTN = rSP_C_CNTN;
	}
	public String getVHCNO() {
		return VHCNO;
	}
	public void setVHCNO(String vHCNO) {
		VHCNO = vHCNO;
	}
	public String getPHD_DVY_CAFFNM() {
		return PHD_DVY_CAFFNM;
	}
	public void setPHD_DVY_CAFFNM(String pHD_DVY_CAFFNM) {
		PHD_DVY_CAFFNM = pHD_DVY_CAFFNM;
	}
	public String getTELNO() {
		return TELNO;
	}
	public void setTELNO(String tELNO) {
		TELNO = tELNO;
	}
	public String getPHD_PAS_SRTR_BKG_TMI() {
		return PHD_PAS_SRTR_BKG_TMI;
	}
	public void setPHD_PAS_SRTR_BKG_TMI(String pHD_PAS_SRTR_BKG_TMI) {
		PHD_PAS_SRTR_BKG_TMI = pHD_PAS_SRTR_BKG_TMI;
	}
	public String getPHD_PAS_BLK_BKG_TMI() {
		return PHD_PAS_BLK_BKG_TMI;
	}
	public void setPHD_PAS_BLK_BKG_TMI(String pHD_PAS_BLK_BKG_TMI) {
		PHD_PAS_BLK_BKG_TMI = pHD_PAS_BLK_BKG_TMI;
	}
	public String getSTPL_CSTD_ELT_TAG_BKG_TMI() {
		return STPL_CSTD_ELT_TAG_BKG_TMI;
	}
	public void setSTPL_CSTD_ELT_TAG_BKG_TMI(String sTPL_CSTD_ELT_TAG_BKG_TMI) {
		STPL_CSTD_ELT_TAG_BKG_TMI = sTPL_CSTD_ELT_TAG_BKG_TMI;
	}
	public String getSTPL_CSTD_GEN_BKG_TMI() {
		return STPL_CSTD_GEN_BKG_TMI;
	}
	public void setSTPL_CSTD_GEN_BKG_TMI(String sTPL_CSTD_GEN_BKG_TMI) {
		STPL_CSTD_GEN_BKG_TMI = sTPL_CSTD_GEN_BKG_TMI;
	}
	public String getNA_TRPL_C() {
		return NA_TRPL_C;
	}
	public void setNA_TRPL_C(String nA_TRPL_C) {
		NA_TRPL_C = nA_TRPL_C;
	}
	public String getCLNTNM() {
		return CLNTNM;
	}
	public void setCLNTNM(String cLNTNM) {
		CLNTNM = cLNTNM;
	}
	public String getNA_DVY_PLASH_SLPNO() {
		return NA_DVY_PLASH_SLPNO;
	}
	public void setNA_DVY_PLASH_SLPNO(String nA_DVY_PLASH_SLPNO) {
		NA_DVY_PLASH_SLPNO = nA_DVY_PLASH_SLPNO;
	}
	public String getCRUD_DSC() {
		return CRUD_DSC;
	}
	public void setCRUD_DSC(String cRUD_DSC) {
		CRUD_DSC = cRUD_DSC;
	}
	public String getVHC_BKG_PHD_IDVD_NO() {
		return VHC_BKG_PHD_IDVD_NO;
	}
	public void setVHC_BKG_PHD_IDVD_NO(String vHC_BKG_PHD_IDVD_NO) {
		VHC_BKG_PHD_IDVD_NO = vHC_BKG_PHD_IDVD_NO;
	}
	public String getVHC_BKG_DT() {
		return VHC_BKG_DT;
	}
	public void setVHC_BKG_DT(String vHC_BKG_DT) {
		VHC_BKG_DT = vHC_BKG_DT;
	}
	public String getLS_CMENO() {
		return LS_CMENO;
	}
	public void setLS_CMENO(String lS_CMENO) {
		LS_CMENO = lS_CMENO;
	}
	public String getFSRGMN_ENO() {
		return FSRGMN_ENO;
	}
	public void setFSRGMN_ENO(String fSRGMN_ENO) {
		FSRGMN_ENO = fSRGMN_ENO;
	}
	public String getSTR_PHD_IDVD_NO() {
		return STR_PHD_IDVD_NO;
	}
	public void setSTR_PHD_IDVD_NO(String sTR_PHD_IDVD_NO) {
		STR_PHD_IDVD_NO = sTR_PHD_IDVD_NO;
	}
	public List<ReserveCenterDetailVO> getDetailVoList() {
		return detailVoList;
	}
	public void setDetailVoList(List<ReserveCenterDetailVO> detailVoList) {
		this.detailVoList = detailVoList;
	}	
	
}
