package com.nh.escm.scm.order.vo;

import java.io.Serializable;

import com.esum.appetizer.util.JsonUtil;

/**
 * 수주내역조회
 * 소속사업장별 조회 Second
 * @author swha
 *
 */
public class OrderOrdersRvoplScdVO  implements Serializable{
	private static final long serialVersionUID = 20150805L;
	
	private String ISCHECKED                             ;//check여부
	private long RN;
	private String ODR_DT;
	private String ODR_SLPNO;
	private String ODRPL_NA_TRPL_C;
	private String ODRPL_NA_TRPL_N;
	private String ODRPL_NA_TEAM_C;
	private String ODRPL_NA_TEAM_N;
	private String DVY_RQR_DT;
	private String EDIRG_DTM;//배달일
	private String FS_RMS_DTM;//수신일
	private long ODR_QT;//수주수량
	private long ODR_AM;//수주금액
	private long VCBT_AM;//공병금액
	private String DLVPNSHT_TEMP_YN;//배송예정서 작성여부 Y : 작성, X : 미작성
	private String NA_ODR_STS_DSC;//발주상태
	private String DDLY_YN;//직송여부
	private String SPY_TPC;//수주유형
	private String NA_RGN_N;//지역코드
	private String DLVST_EDIT_PSB_YN;//납품서 편집 가능여부
	private String XML_CHANGE_NM;//XML 변경서 번호
	private String XML_ODR_NO;//XML 발주서 번호
	private String XML_SEND_DT;//XML 문서전송일자
	private String XML_OFFER_ODR_NO;//XML제안주문번호
	private String FSRGMN_ENO;//최초등록자 개인번호
	private String FSRG_DTM;//최종등록일시
	private String LSCHG_DTM;//최종변경일시
	private String ELS_CMENO;//최종변경자개인번호
	private String DEL_TEM;//삭제일시
	private String DVYAA_NA_TRPL_C;//배송처거래처코드;
	private String DVYAA_NA_TRPL_N;//배송처명;
	private String DVYAA_NA_TEAM_C;//배송처팀코드
	private String DVYAA_NA_TEAM_N;//배송처팀명
	private String GRS_SOJU_YN;//직방소주여부
	private String ROGO_INF_CRT_DSC;//수발주정보생성구분코드(명칭)
	private String ROGO_INF_CRT_C;//수발주정보생성구분코드(코드) *기존 쿼리 수정을 피하고자 이름을 달리함 (180327)
	private String VHCNO;//차량번호
	private String SPYPL_NA_TRPL_C;// 공급처
	private String XML_CHDOC_NO;//XML 변경서번호
	private String XML_ODRW_NO;//XML 발주서번호
	private String XML_DOC_TMS_DT;//XML 문서전송일자
	private String SRA_WRS_DSC;//축산상품코드
	private String DDL_WRS_KDC;//마감종류코드
	private String PRGR_C;//가격군코드
	
	


	public long getRN() {
		return RN;
	}




	public void setRN(long rN) {
		RN = rN;
	}




	public String getODR_DT() {
		return ODR_DT;
	}




	public void setODR_DT(String oDR_DT) {
		ODR_DT = oDR_DT;
	}




	public String getODR_SLPNO() {
		return ODR_SLPNO;
	}




	public void setODR_SLPNO(String oDR_SLPNO) {
		ODR_SLPNO = oDR_SLPNO;
	}




	public String getODRPL_NA_TRPL_C() {
		return ODRPL_NA_TRPL_C;
	}




	public void setODRPL_NA_TRPL_C(String oDRPL_NA_TRPL_C) {
		ODRPL_NA_TRPL_C = oDRPL_NA_TRPL_C;
	}




	public String getODRPL_NA_TRPL_N() {
		return ODRPL_NA_TRPL_N;
	}




	public void setODRPL_NA_TRPL_N(String oDRPL_NA_TRPL_N) {
		ODRPL_NA_TRPL_N = oDRPL_NA_TRPL_N;
	}




	public String getODRPL_NA_TEAM_C() {
		return ODRPL_NA_TEAM_C;
	}




	public void setODRPL_NA_TEAM_C(String oDRPL_NA_TEAM_C) {
		ODRPL_NA_TEAM_C = oDRPL_NA_TEAM_C;
	}




	public String getODRPL_NA_TEAM_N() {
		return ODRPL_NA_TEAM_N;
	}




	public void setODRPL_NA_TEAM_N(String oDRPL_NA_TEAM_N) {
		ODRPL_NA_TEAM_N = oDRPL_NA_TEAM_N;
	}




	public String getDVY_RQR_DT() {
		return DVY_RQR_DT;
	}




	public void setDVY_RQR_DT(String dVY_RQR_DT) {
		DVY_RQR_DT = dVY_RQR_DT;
	}




	public String getEDIRG_DTM() {
		return EDIRG_DTM;
	}




	public void setEDIRG_DTM(String eDIRG_DTM) {
		EDIRG_DTM = eDIRG_DTM;
	}




	public String getFS_RMS_DTM() {
		return FS_RMS_DTM;
	}




	public void setFS_RMS_DTM(String fS_RMS_DTM) {
		FS_RMS_DTM = fS_RMS_DTM;
	}




	public long getODR_QT() {
		return ODR_QT;
	}




	public void setODR_QT(long oDR_QT) {
		ODR_QT = oDR_QT;
	}




	public long getODR_AM() {
		return ODR_AM;
	}




	public void setODR_AM(long oDR_AM) {
		ODR_AM = oDR_AM;
	}




	public long getVCBT_AM() {
		return VCBT_AM;
	}




	public void setVCBT_AM(long vCBT_AM) {
		VCBT_AM = vCBT_AM;
	}




	public String getDLVPNSHT_TEMP_YN() {
		return DLVPNSHT_TEMP_YN;
	}




	public void setDLVPNSHT_TEMP_YN(String dLVPNSHT_TEMP_YN) {
		DLVPNSHT_TEMP_YN = dLVPNSHT_TEMP_YN;
	}




	public String getNA_ODR_STS_DSC() {
		return NA_ODR_STS_DSC;
	}




	public void setNA_ODR_STS_DSC(String nA_ODR_STS_DSC) {
		NA_ODR_STS_DSC = nA_ODR_STS_DSC;
	}




	public String getDDLY_YN() {
		return DDLY_YN;
	}




	public void setDDLY_YN(String dDLY_YN) {
		DDLY_YN = dDLY_YN;
	}




	public String getSPY_TPC() {
		return SPY_TPC;
	}




	public void setSPY_TPC(String sPY_TPC) {
		SPY_TPC = sPY_TPC;
	}




	public String getNA_RGN_N() {
		return NA_RGN_N;
	}




	public void setNA_RGN_N(String nA_RGN_N) {
		NA_RGN_N = nA_RGN_N;
	}




	public String getDLVST_EDIT_PSB_YN() {
		return DLVST_EDIT_PSB_YN;
	}




	public void setDLVST_EDIT_PSB_YN(String dLVST_EDIT_PSB_YN) {
		DLVST_EDIT_PSB_YN = dLVST_EDIT_PSB_YN;
	}




	public String getXML_CHANGE_NM() {
		return XML_CHANGE_NM;
	}




	public void setXML_CHANGE_NM(String xML_CHANGE_NM) {
		XML_CHANGE_NM = xML_CHANGE_NM;
	}




	public String getXML_ODR_NO() {
		return XML_ODR_NO;
	}




	public void setXML_ODR_NO(String xML_ODR_NO) {
		XML_ODR_NO = xML_ODR_NO;
	}




	public String getXML_SEND_DT() {
		return XML_SEND_DT;
	}




	public void setXML_SEND_DT(String xML_SEND_DT) {
		XML_SEND_DT = xML_SEND_DT;
	}




	public String getXML_OFFER_ODR_NO() {
		return XML_OFFER_ODR_NO;
	}




	public void setXML_OFFER_ODR_NO(String xML_OFFER_ODR_NO) {
		XML_OFFER_ODR_NO = xML_OFFER_ODR_NO;
	}




	public String getFSRGMN_ENO() {
		return FSRGMN_ENO;
	}




	public void setFSRGMN_ENO(String fSRGMN_ENO) {
		FSRGMN_ENO = fSRGMN_ENO;
	}




	public String getFSRG_DTM() {
		return FSRG_DTM;
	}




	public void setFSRG_DTM(String fSRG_DTM) {
		FSRG_DTM = fSRG_DTM;
	}




	public String getLSCHG_DTM() {
		return LSCHG_DTM;
	}




	public void setLSCHG_DTM(String lSCHG_DTM) {
		LSCHG_DTM = lSCHG_DTM;
	}




	public String getELS_CMENO() {
		return ELS_CMENO;
	}




	public void setELS_CMENO(String eLS_CMENO) {
		ELS_CMENO = eLS_CMENO;
	}




	public String getDEL_TEM() {
		return DEL_TEM;
	}




	public void setDEL_TEM(String dEL_TEM) {
		DEL_TEM = dEL_TEM;
	}




	public String getDVYAA_NA_TRPL_C() {
		return DVYAA_NA_TRPL_C;
	}




	public void setDVYAA_NA_TRPL_C(String dVYAA_NA_TRPL_C) {
		DVYAA_NA_TRPL_C = dVYAA_NA_TRPL_C;
	}




	public String getDVYAA_NA_TRPL_N() {
		return DVYAA_NA_TRPL_N;
	}




	public void setDVYAA_NA_TRPL_N(String dVYAA_NA_TRPL_N) {
		DVYAA_NA_TRPL_N = dVYAA_NA_TRPL_N;
	}




	public String getDVYAA_NA_TEAM_C() {
		return DVYAA_NA_TEAM_C;
	}




	public void setDVYAA_NA_TEAM_C(String dVYAA_NA_TEAM_C) {
		DVYAA_NA_TEAM_C = dVYAA_NA_TEAM_C;
	}




	public String getDVYAA_NA_TEAM_N() {
		return DVYAA_NA_TEAM_N;
	}




	public void setDVYAA_NA_TEAM_N(String dVYAA_NA_TEAM_N) {
		DVYAA_NA_TEAM_N = dVYAA_NA_TEAM_N;
	}




	public String getGRS_SOJU_YN() {
		return GRS_SOJU_YN;
	}




	public void setGRS_SOJU_YN(String gRS_SOJU_YN) {
		GRS_SOJU_YN = gRS_SOJU_YN;
	}




	public String getROGO_INF_CRT_DSC() {
		return ROGO_INF_CRT_DSC;
	}




	public void setROGO_INF_CRT_DSC(String rOGO_INF_CRT_DSC) {
		ROGO_INF_CRT_DSC = rOGO_INF_CRT_DSC;
	}




	public String getVHCNO() {
		return VHCNO;
	}




	public void setVHCNO(String vHCNO) {
		VHCNO = vHCNO;
	}




	public String getSPYPL_NA_TRPL_C() {
		return SPYPL_NA_TRPL_C;
	}




	public void setSPYPL_NA_TRPL_C(String sPYPL_NA_TRPL_C) {
		SPYPL_NA_TRPL_C = sPYPL_NA_TRPL_C;
	}




	public String getXML_CHDOC_NO() {
		return XML_CHDOC_NO;
	}




	public void setXML_CHDOC_NO(String xML_CHDOC_NO) {
		XML_CHDOC_NO = xML_CHDOC_NO;
	}




	public String getXML_ODRW_NO() {
		return XML_ODRW_NO;
	}




	public void setXML_ODRW_NO(String xML_ODRW_NO) {
		XML_ODRW_NO = xML_ODRW_NO;
	}




	public String getXML_DOC_TMS_DT() {
		return XML_DOC_TMS_DT;
	}




	public void setXML_DOC_TMS_DT(String xML_DOC_TMS_DT) {
		XML_DOC_TMS_DT = xML_DOC_TMS_DT;
	}




	public String getSRA_WRS_DSC() {
		return SRA_WRS_DSC;
	}




	public void setSRA_WRS_DSC(String sRA_WRS_DSC) {
		SRA_WRS_DSC = sRA_WRS_DSC;
	}




	public String getDDL_WRS_KDC() {
		return DDL_WRS_KDC;
	}




	public void setDDL_WRS_KDC(String dDL_WRS_KDC) {
		DDL_WRS_KDC = dDL_WRS_KDC;
	}




	public String getROGO_INF_CRT_C() {
		return ROGO_INF_CRT_C;
	}




	public void setROGO_INF_CRT_C(String rOGO_INF_CRT_C) {
		ROGO_INF_CRT_C = rOGO_INF_CRT_C;
	}

	public String getPRGR_C() {
		return PRGR_C;
	}

	public void setPRGR_C(String pRGR_C) {
		PRGR_C = pRGR_C;
	}




	@Override
	public String toString(){
		return JsonUtil.toString(this);
	}




	public String getISCHECKED() {
		return ISCHECKED;
	}


	public void setISCHECKED(String iSCHECKED) {
		ISCHECKED = iSCHECKED;
	}
	
	
}
