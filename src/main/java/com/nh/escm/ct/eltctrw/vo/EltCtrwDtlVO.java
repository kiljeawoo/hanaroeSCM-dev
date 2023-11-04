package com.nh.escm.ct.eltctrw.vo;


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

public class EltCtrwDtlVO implements Serializable{
	
	private static final long serialVersionUID = 20150818L;
	
	private String ELT_CTRW_NO;		//전자계약서번호                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
	private String MN_CTRW_KDC;		//메인계약서종류코드                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
	private String CTRW_STY_VER;	//계약서양식버젼                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
	
	private String CNR_DT;			//검수일                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
	private String PSG_MM;			//경과분월                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
	private String PSG_DD;			//경과분일                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
	private String ETR_FEE;			//수탁수수료                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
	private String PHD_FEERT;		//점별 통과상품율       
	private String PHD_FEERT1;		//보관 풀고상품율  
	private String PHD_FEERT2;		//물류 대행상품율                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
	private String LIG_PLTPE;		//주류파렛트당                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
	private String MEXP_DD;			//관리비일                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
	private String RT;				//마진율                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
	private String BLM_GRMY;		//하자보증금                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
	private String SCTR_SJT;		//특약사항    
	
	private String WRS_PRM_PY;		//상품대금 지금                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
	private String GRMY;			//보증금  
	
	private String WRS_SPYAM;		//상품공급액                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
	private String CTR_CLO;			//계약해지  
	
	private String CTRW_TINM;		//계약서제목
	
	private String FSRG_DTM;		//최초등록일시                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
	private String FS_RGM;			//최초등록자                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
	private String LSCHG_DTM;		//최종변경일시                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
	private String LS_CHGM;			//최종변경자

	private String DML_CODE;
	
	private String TMP_ELT_CTRW_NO;	//임시전자계약서번호

	private String CHG_SQNO;		//변경일련번호
	private String CTRW_STY_CHG_VER;//계약서양식변경버젼
	private String BIGO;			// 특약사항		
	private String BRAND_N;			//브랜드명
	private String RETURN_DATE;		//반품일자
	
	private String ETC1;		//예비컬럼
	private String ETC2;		
	private String ETC3;		
	private String ETC4;	
	private String ETC5;	
	private String ETC6;
	private String ETC7;
	private String ETC8;
	private String ETC9;
	private String ETCA;
	
	private String ETC10; // 우편번호1                      
	private String ETC11; // 우편번호2                      
	private String ETC12; // 주소1                          
	private String ETC13; // 주소2                          
	private String ETC14; // 점유면적                       
	private String ETC15; // 공유면적                       
	private String ETC16; // 면적 계                        
	private String ETC17; // 임대차기간 시작일              
	private String ETC18; // 임대차기간 종료일              
	private String ETC19; // 임대보증금                     
	private String ETC20; // 월임대료 금액                  
	private String ETC21; // 월임대료 %                     
	private String ETC22; // 업종                           
	private String ETC23; // 매장명                         
	private String ETC24; // 주요판매상품 1000 바이트       
	private String ETC25; // 주요판매상품 1000 바이트       
	private String ETC26; // 주요판매상품 1000 바이트       
	private String ETC27; // 주요판매상품 1000 바이트       
	private String ETC28; // 주요판매상품 1000 바이트       
	private String ETC29; // 임대보증금 납부일자	          
	private String ETC30; // 임대보증금 연체료율	          
	private String ETC31; // 보증금 공제	                  
	private String ETC32; // 임대료 납부일	                
	private String ETC33; // 임대료 연체료율	              
	private String ETC34; // 판매대금 지급일	제9조         
	private String ETC35; // 관리비 및 시설 이용료 납부	    
	private String ETC36; // 비밀유지기간	제16조            
	private String ETC37; // 임대보증금  위약벌 비율	      
	private String ETC38; // 지연이자 	                    
	private String ETC39; // 임대료 위약벌	                
	private String ETC40; // 판매장소	별지                  
	private String ETC41; // 판매기간	     
	private String ETC42; // 
	private String ETC43; // 
	private String ETC44; // 
	private String ETC45; // 
	private String ETC46; // 
	private String ETC47; // 
	private String ETC48; // 
	private String ETC49; // 첨부파일명 
	private String ETC50; // 시스템파일명
	private String ETC51; // 매장면적 
	private String ETC52; // 기타특약사항
	private String ETC53; //
	private String ETC54; //
	private String ETC55; //
	private String ETC56; //
	private String ETC57; //
	private String ETC58; //
	private String ETC59; //
	private String ETC60; //

	public String getCTRW_TINM() {
		return CTRW_TINM;
	}

	public void setCTRW_TINM(String cTRW_TINM) {
		CTRW_TINM = cTRW_TINM;
	}

	public String getCHG_SQNO() {
		return CHG_SQNO;
	}

	public void setCHG_SQNO(String cHG_SQNO) {
		CHG_SQNO = cHG_SQNO;
	}
	


	
	public String getCTRW_STY_CHG_VER() {
		return CTRW_STY_CHG_VER;
	}

	public void setCTRW_STY_CHG_VER(String cTRW_STY_CHG_VER) {
		CTRW_STY_CHG_VER = cTRW_STY_CHG_VER;
	}

	public String getTMP_ELT_CTRW_NO() {
		return TMP_ELT_CTRW_NO;
	}

	public void setTMP_ELT_CTRW_NO(String tMP_ELT_CTRW_NO) {
		TMP_ELT_CTRW_NO = tMP_ELT_CTRW_NO;
	}



	public String getELT_CTRW_NO() {
		return ELT_CTRW_NO;
	}

	public void setELT_CTRW_NO(String eLT_CTRW_NO) {
		ELT_CTRW_NO = eLT_CTRW_NO;
	}

	public String getMN_CTRW_KDC() {
		return MN_CTRW_KDC;
	}

	public void setMN_CTRW_KDC(String mN_CTRW_KDC) {
		MN_CTRW_KDC = mN_CTRW_KDC;
	}

	public String getCTRW_STY_VER() {
		return CTRW_STY_VER;
	}

	public void setCTRW_STY_VER(String cTRW_STY_VER) {
		CTRW_STY_VER = cTRW_STY_VER;
	}

	public String getCNR_DT() {
		return CNR_DT;
	}

	public void setCNR_DT(String cNR_DT) {
		CNR_DT = cNR_DT;
	}

	public String getPSG_MM() {
		return PSG_MM;
	}

	public void setPSG_MM(String pSG_MM) {
		PSG_MM = pSG_MM;
	}

	public String getPSG_DD() {
		return PSG_DD;
	}

	public void setPSG_DD(String pSG_DD) {
		PSG_DD = pSG_DD;
	}

	public String getETR_FEE() {
		return ETR_FEE;
	}

	public void setETR_FEE(String eTR_FEE) {
		ETR_FEE = eTR_FEE;
	}

	public String getPHD_FEERT() {
		return PHD_FEERT;
	}

	public void setPHD_FEERT(String pHD_FEERT) {
		PHD_FEERT = pHD_FEERT;
	}

	public String getLIG_PLTPE() {
		return LIG_PLTPE;
	}

	public void setLIG_PLTPE(String lIG_PLTPE) {
		LIG_PLTPE = lIG_PLTPE;
	}

	public String getMEXP_DD() {
		return MEXP_DD;
	}

	public void setMEXP_DD(String mEXP_DD) {
		MEXP_DD = mEXP_DD;
	}

	
	
	
	
	public String getRT() {
		return RT;
	}

	public void setRT(String rT) {
		RT = rT;
	}

	public String getBLM_GRMY() {
		return BLM_GRMY;
	}

	public void setBLM_GRMY(String bLM_GRMY) {
		BLM_GRMY = bLM_GRMY;
	}

	public String getWRS_PRM_PY() {
		return WRS_PRM_PY;
	}

	public void setWRS_PRM_PY(String wRS_PRM_PY) {
		WRS_PRM_PY = wRS_PRM_PY;
	}

	public String getGRMY() {
		return GRMY;
	}

	public void setGRMY(String gRMY) {
		GRMY = gRMY;
	}

	public String getWRS_SPYAM() {
		return WRS_SPYAM;
	}

	public void setWRS_SPYAM(String wRS_SPYAM) {
		WRS_SPYAM = wRS_SPYAM;
	}

	public String getCTR_CLO() {
		return CTR_CLO;
	}

	public void setCTR_CLO(String cTR_CLO) {
		CTR_CLO = cTR_CLO;
	}

	public String getSCTR_SJT() {
		return SCTR_SJT;
	}

	public void setSCTR_SJT(String sCTR_SJT) {
		SCTR_SJT = sCTR_SJT;
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

	public String getBIGO() {
		return BIGO;
	}

	public void setBIGO(String bIGO) {
		BIGO = bIGO;
	}

	public String getBRAND_N() {
		return BRAND_N;
	}

	public void setBRAND_N(String bRAND_N) {
		BRAND_N = bRAND_N;
	}

	public String getRETURN_DATE() {
		return RETURN_DATE;
	}

	public void setRETURN_DATE(String rETURN_DATE) {
		RETURN_DATE = rETURN_DATE;
	}

	public String getPHD_FEERT1() {
		return PHD_FEERT1;
	}

	public void setPHD_FEERT1(String pHD_FEERT1) {
		PHD_FEERT1 = pHD_FEERT1;
	}

	public String getPHD_FEERT2() {
		return PHD_FEERT2;
	}

	public void setPHD_FEERT2(String pHD_FEERT2) {
		PHD_FEERT2 = pHD_FEERT2;
	}

	public String getETC1() {
		return ETC1;
	}

	public void setETC1(String eTC1) {
		ETC1 = eTC1;
	}

	public String getETC2() {
		return ETC2;
	}

	public void setETC2(String eTC2) {
		ETC2 = eTC2;
	}

	public String getETC3() {
		return ETC3;
	}

	public void setETC3(String eTC3) {
		ETC3 = eTC3;
	}

	public String getETC4() {
		return ETC4;
	}

	public void setETC4(String eTC4) {
		ETC4 = eTC4;
	}

	public String getETC5() {
		return ETC5;
	}

	public void setETC5(String eTC5) {
		ETC5 = eTC5;
	}

	public String getETC6() {
		return ETC6;
	}

	public void setETC6(String eTC6) {
		ETC6 = eTC6;
	}

	public String getETC7() {
		return ETC7;
	}

	public void setETC7(String eTC7) {
		ETC7 = eTC7;
	}

	public String getETC8() {
		return ETC8;
	}

	public void setETC8(String eTC8) {
		ETC8 = eTC8;
	}

	public String getETC9() {
		return ETC9;
	}

	public void setETC9(String eTC9) {
		ETC9 = eTC9;
	}

	public String getETCA() {
		return ETCA;
	}

	public void setETCA(String eTCA) {
		ETCA = eTCA;
	}

	public String getETC10() {
		return ETC10;
	}

	public void setETC10(String eTC10) {
		ETC10 = eTC10;
	}

	public String getETC11() {
		return ETC11;
	}

	public void setETC11(String eTC11) {
		ETC11 = eTC11;
	}

	public String getETC12() {
		return ETC12;
	}

	public void setETC12(String eTC12) {
		ETC12 = eTC12;
	}

	public String getETC13() {
		return ETC13;
	}

	public void setETC13(String eTC13) {
		ETC13 = eTC13;
	}

	public String getETC14() {
		return ETC14;
	}

	public void setETC14(String eTC14) {
		ETC14 = eTC14;
	}

	public String getETC15() {
		return ETC15;
	}

	public void setETC15(String eTC15) {
		ETC15 = eTC15;
	}

	public String getETC16() {
		return ETC16;
	}

	public void setETC16(String eTC16) {
		ETC16 = eTC16;
	}

	public String getETC17() {
		return ETC17;
	}

	public void setETC17(String eTC17) {
		ETC17 = eTC17;
	}

	public String getETC18() {
		return ETC18;
	}

	public void setETC18(String eTC18) {
		ETC18 = eTC18;
	}

	public String getETC19() {
		return ETC19;
	}

	public void setETC19(String eTC19) {
		ETC19 = eTC19;
	}

	public String getETC20() {
		return ETC20;
	}

	public void setETC20(String eTC20) {
		ETC20 = eTC20;
	}

	public String getETC21() {
		return ETC21;
	}

	public void setETC21(String eTC21) {
		ETC21 = eTC21;
	}

	public String getETC22() {
		return ETC22;
	}

	public void setETC22(String eTC22) {
		ETC22 = eTC22;
	}

	public String getETC23() {
		return ETC23;
	}

	public void setETC23(String eTC23) {
		ETC23 = eTC23;
	}

	public String getETC24() {
		return ETC24;
	}

	public void setETC24(String eTC24) {
		ETC24 = eTC24;
	}

	public String getETC25() {
		return ETC25;
	}

	public void setETC25(String eTC25) {
		ETC25 = eTC25;
	}

	public String getETC26() {
		return ETC26;
	}

	public void setETC26(String eTC26) {
		ETC26 = eTC26;
	}

	public String getETC27() {
		return ETC27;
	}

	public void setETC27(String eTC27) {
		ETC27 = eTC27;
	}

	public String getETC28() {
		return ETC28;
	}

	public void setETC28(String eTC28) {
		ETC28 = eTC28;
	}

	public String getETC29() {
		return ETC29;
	}

	public void setETC29(String eTC29) {
		ETC29 = eTC29;
	}

	public String getETC30() {
		return ETC30;
	}

	public void setETC30(String eTC30) {
		ETC30 = eTC30;
	}

	public String getETC31() {
		return ETC31;
	}

	public void setETC31(String eTC31) {
		ETC31 = eTC31;
	}

	public String getETC32() {
		return ETC32;
	}

	public void setETC32(String eTC32) {
		ETC32 = eTC32;
	}

	public String getETC33() {
		return ETC33;
	}

	public void setETC33(String eTC33) {
		ETC33 = eTC33;
	}

	public String getETC34() {
		return ETC34;
	}

	public void setETC34(String eTC34) {
		ETC34 = eTC34;
	}

	public String getETC35() {
		return ETC35;
	}

	public void setETC35(String eTC35) {
		ETC35 = eTC35;
	}

	public String getETC36() {
		return ETC36;
	}

	public void setETC36(String eTC36) {
		ETC36 = eTC36;
	}

	public String getETC37() {
		return ETC37;
	}

	public void setETC37(String eTC37) {
		ETC37 = eTC37;
	}

	public String getETC38() {
		return ETC38;
	}

	public void setETC38(String eTC38) {
		ETC38 = eTC38;
	}

	public String getETC39() {
		return ETC39;
	}

	public void setETC39(String eTC39) {
		ETC39 = eTC39;
	}

	public String getETC40() {
		return ETC40;
	}

	public void setETC40(String eTC40) {
		ETC40 = eTC40;
	}

	public String getETC41() {
		return ETC41;
	}

	public void setETC41(String eTC41) {
		ETC41 = eTC41;
	}

	public String getETC42() {
		return ETC42;
	}

	public void setETC42(String eTC42) {
		ETC42 = eTC42;
	}

	public String getETC43() {
		return ETC43;
	}

	public void setETC43(String eTC43) {
		ETC43 = eTC43;
	}

	public String getETC44() {
		return ETC44;
	}

	public void setETC44(String eTC44) {
		ETC44 = eTC44;
	}

	public String getETC45() {
		return ETC45;
	}

	public void setETC45(String eTC45) {
		ETC45 = eTC45;
	}

	public String getETC46() {
		return ETC46;
	}

	public void setETC46(String eTC46) {
		ETC46 = eTC46;
	}

	public String getETC47() {
		return ETC47;
	}

	public void setETC47(String eTC47) {
		ETC47 = eTC47;
	}

	public String getETC48() {
		return ETC48;
	}

	public void setETC48(String eTC48) {
		ETC48 = eTC48;
	}

	public String getETC49() {
		return ETC49;
	}

	public void setETC49(String eTC49) {
		ETC49 = eTC49;
	}

	public String getETC50() {
		return ETC50;
	}

	public void setETC50(String eTC50) {
		ETC50 = eTC50;
	}

	public String getETC51() {
		return ETC51;
	}

	public void setETC51(String eTC51) {
		ETC51 = eTC51;
	}

	public String getETC52() {
		return ETC52;
	}

	public void setETC52(String eTC52) {
		ETC52 = eTC52;
	}

	public String getETC53() {
		return ETC53;
	}

	public void setETC53(String eTC53) {
		ETC53 = eTC53;
	}

	public String getETC54() {
		return ETC54;
	}

	public void setETC54(String eTC54) {
		ETC54 = eTC54;
	}

	public String getETC55() {
		return ETC55;
	}

	public void setETC55(String eTC55) {
		ETC55 = eTC55;
	}

	public String getETC56() {
		return ETC56;
	}

	public void setETC56(String eTC56) {
		ETC56 = eTC56;
	}

	public String getETC57() {
		return ETC57;
	}

	public void setETC57(String eTC57) {
		ETC57 = eTC57;
	}

	public String getETC58() {
		return ETC58;
	}

	public void setETC58(String eTC58) {
		ETC58 = eTC58;
	}

	public String getETC59() {
		return ETC59;
	}

	public void setETC59(String eTC59) {
		ETC59 = eTC59;
	}

	public String getETC60() {
		return ETC60;
	}

	public void setETC60(String eTC60) {
		ETC60 = eTC60;
	}
}