package com.nh.escm.scm.retann.vo;

import java.io.Serializable;

/**
 * 반품입고 확인 등록 그리드 VO
 * @author HyeRim.Oh
 *
 */
public class RetannCnfVO implements Serializable {

	private static final long serialVersionUID = 20150714L;
	
	private String AJ_DT;  //조정일자
	private String AJMN_ENO;  //조정자개인번호
	private String DML_CODE;  //삽입,수정 여부	
	
	private String NA_TRPL_C;  //경제통합거래처코드
	private String NA_TEAM_C;  //경제통합팀코드
	private String RGD_RG_DT;  //반품등록일자
	private String RGD_PLA_NO;  //반품예정번호
	private long RGD_SQNO;  //반품일련번호
	
	private String NA_WRS_C;  //상품코드
	private String WRSNM;  //상품명
	private String NA_WRS_UNT_C;  //단위
	private int BOXPE_AQZ;  //입수
	private double RGD_UPR;  //단가
	private double AJ_UPR;  //조정단가
	private double RGD_AM;  //반품수량
	private long RGD_QT;  //반품금액
	private double RGD_VAT;  //부가세액
	private double BOX_QT;  //박스수량
	private String PD_YY;  //생산년도
	private String NA_RGD_RSN_DSC;  //반품사유
	private String NA_RGD_RSN_DSC_NAME;  //반품사유명
	private String RMK_CNTN;  //비고
	private long BYNG_DFN_TROT_FEE;  //매입확정환급수수료
	
	private int dsRowType;
	private String NA_RGD_STS_DSC;  //반품상태구분코드
	private String ADD_NA_RGD_STS_DSC;  // 업데이트 위한 dummy코드
	
	public int getDsRowType() {
		return dsRowType;
	}
	public void setDsRowType(int dsRowType) {
		this.dsRowType = dsRowType;
	}
	public String getAJ_DT() {
		return AJ_DT;
	}
	public void setAJ_DT(String aJ_DT) {
		AJ_DT = aJ_DT;
	}
	public String getAJMN_ENO() {
		return AJMN_ENO;
	}
	public void setAJMN_ENO(String aJMN_ENO) {
		AJMN_ENO = aJMN_ENO;
	}
	public String getDML_CODE() {
		return DML_CODE;
	}
	public void setDML_CODE(String dML_CODE) {
		DML_CODE = dML_CODE;
	}
	public String getNA_TRPL_C() {
		return NA_TRPL_C;
	}
	public void setNA_TRPL_C(String nA_TRPL_C) {
		NA_TRPL_C = nA_TRPL_C;
	}
	public String getNA_TEAM_C() {
		return NA_TEAM_C;
	}
	public void setNA_TEAM_C(String nA_TEAM_C) {
		NA_TEAM_C = nA_TEAM_C;
	}
	public String getRGD_RG_DT() {
		return RGD_RG_DT;
	}
	public void setRGD_RG_DT(String rGD_RG_DT) {
		RGD_RG_DT = rGD_RG_DT;
	}
	public String getRGD_PLA_NO() {
		return RGD_PLA_NO;
	}
	public void setRGD_PLA_NO(String rGD_PLA_NO) {
		RGD_PLA_NO = rGD_PLA_NO;
	}
	public long getRGD_SQNO() {
		return RGD_SQNO;
	}
	public void setRGD_SQNO(long rGD_SQNO) {
		RGD_SQNO = rGD_SQNO;
	}
	public String getNA_WRS_C() {
		return NA_WRS_C;
	}
	public void setNA_WRS_C(String nA_WRS_C) {
		NA_WRS_C = nA_WRS_C;
	}
	public String getWRSNM() {
		return WRSNM;
	}
	public void setWRSNM(String wRSNM) {
		WRSNM = wRSNM;
	}
	public String getNA_WRS_UNT_C() {
		return NA_WRS_UNT_C;
	}
	public void setNA_WRS_UNT_C(String nA_WRS_UNT_C) {
		NA_WRS_UNT_C = nA_WRS_UNT_C;
	}
	public int getBOXPE_AQZ() {
		return BOXPE_AQZ;
	}
	public void setBOXPE_AQZ(int bOXPE_AQZ) {
		BOXPE_AQZ = bOXPE_AQZ;
	}
	public double getRGD_UPR() {
		return RGD_UPR;
	}
	public void setRGD_UPR(double rGD_UPR) {
		RGD_UPR = rGD_UPR;
	}
	public double getAJ_UPR() {
		return AJ_UPR;
	}
	public void setAJ_UPR(double aJ_UPR) {
		AJ_UPR = aJ_UPR;
	}
	public double getRGD_AM() {
		return RGD_AM;
	}
	public void setRGD_AM(double rGD_AM) {
		RGD_AM = rGD_AM;
	}
	public long getRGD_QT() {
		return RGD_QT;
	}
	public void setRGD_QT(long rGD_QT) {
		RGD_QT = rGD_QT;
	}
	public double getRGD_VAT() {
		return RGD_VAT;
	}
	public void setRGD_VAT(double rGD_VAT) {
		RGD_VAT = rGD_VAT;
	}
	public double getBOX_QT() {
		return BOX_QT;
	}
	public void setBOX_QT(double bOX_QT) {
		BOX_QT = bOX_QT;
	}
	public String getPD_YY() {
		return PD_YY;
	}
	public void setPD_YY(String pD_YY) {
		PD_YY = pD_YY;
	}
	public String getNA_RGD_RSN_DSC() {
		return NA_RGD_RSN_DSC;
	}
	public void setNA_RGD_RSN_DSC(String nA_RGD_RSN_DSC) {
		NA_RGD_RSN_DSC = nA_RGD_RSN_DSC;
	}
	public String getNA_RGD_RSN_DSC_NAME() {
		return NA_RGD_RSN_DSC_NAME;
	}
	public void setNA_RGD_RSN_DSC_NAME(String nA_RGD_RSN_DSC_NAME) {
		NA_RGD_RSN_DSC_NAME = nA_RGD_RSN_DSC_NAME;
	}
	public String getRMK_CNTN() {
		return RMK_CNTN;
	}
	public void setRMK_CNTN(String rMK_CNTN) {
		RMK_CNTN = rMK_CNTN;
	}
	public long getBYNG_DFN_TROT_FEE() {
		return BYNG_DFN_TROT_FEE;
	}
	public void setBYNG_DFN_TROT_FEE(long bYNG_DFN_TROT_FEE) {
		BYNG_DFN_TROT_FEE = bYNG_DFN_TROT_FEE;
	}
	public String getNA_RGD_STS_DSC() {
		return NA_RGD_STS_DSC;
	}
	public void setNA_RGD_STS_DSC(String nA_RGD_STS_DSC) {
		NA_RGD_STS_DSC = nA_RGD_STS_DSC;
	}
	public String getADD_NA_RGD_STS_DSC() {
		return ADD_NA_RGD_STS_DSC;
	}
	public void setADD_NA_RGD_STS_DSC(String aDD_NA_RGD_STS_DSC) {
		ADD_NA_RGD_STS_DSC = aDD_NA_RGD_STS_DSC;
	}	
	
}
