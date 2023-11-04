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

public interface SQLMapNames {
	public enum SubEltctrwNames {
		ISCHECKED,
	    NA_TRPL_C,         /*경제통합거래처코드*/
	    CLNTNM,            /*거래처명*/
	    TRPL_ABR_NM,       /*거래처약어명*/
	    FZIP,              /*앞자리우편번호*/
	    RZIP,              /*뒷자리우편번호*/
	    ZIP_SQNO,          /*우편번호일련번호*/
	    DONGUP,            /*동이상주소*/
	    DONGBW,            /*동이하주소*/
	    ATEL,              /*전화지역번호*/
	    HTEL,              /*전화국번호*/
	    STEL,              /*전화일련번호*/
	    MPSVNO,            /*휴대전화서비스번호*/
	    MPHNO,             /*휴대전화국번호*/
	    MPSQNO,            /*휴대전화일련번호*/
	    TR_STOP_YN,        /*거래중지여부*/
	    TR_STOP_RSNC,      /*거래중지사유코드*/
	    TR_STOP_DT,        /*거래중지일자*/
	    COPNO_CIF_NO,      /*법인등록번호*/
	    REPMNM,            /*대표자명*/
	    BZCCNM,            /*업종코드명*/
	    BZTPNM,            /*업태명*/
	    BIZ_NUMBER         /*사업자등록번호*/
	}
	
	public enum EltCtrwStyNames {
		CTRW_KDC,    
	    CTRW_STY_VER
	}
	
	public enum RegisterNames {
		ELT_CTRW_NO,               /*전자계약서번호*/
		NA_TRPL_C,                 /*경제통합거래처코드*/
		CHG_SQNO,                  /*일련번호*/
		MN_CTRW_KD,                /*메인계약서종류*/
		ADD_CTRW_YN,                  /*부가계약서*/
		PMIW_YN,                      /*약정서*/
		SCTRW_YN,                     /*특약서*/
		ETC_CTRW_YN,                  /*기타계약서*/
		BZNO,                      /*사업자등록번호*/
		TELNO,                     /*전화번호*/
		MPNO,                     /*전화번호*/
		EMAIL,                     /*EMAIL*/
		CTRW_STY_VER,              /*계약서양식버젼*/
		CTR_ST_DT,                 /*계약시작일자*/
		CTR_ED_DT,                 /*계약종료일자*/
		CTRW_DRUP_DT,              /*계약서작성일자*/
		CEO,                       /*대표이사*/
		MTALNM,                    /*상호*/
		FZIP,                      /*앞자리우편번호*/
		RZIP,                      /*뒷자리우편번호*/
		ZIP_SQNO,                  /*우편번호일련번호*/
		DONGUP,                    /*동이상주소*/
		DONGBW,                    /*동이하주소*/
		BUYER_BLG,                 /*바이어소속*/
		BUYER_NM,                  /*바이어성명*/
		BUYER_TELNO,               /*바이어 전화번호*/
		BUYER_MPNO,                /*바이어 핸드폰*/
		BUYER_EMAIL,               /*바이어 이메일*/
		CTR_CHRR_MTALNM,           /*계약담당자 상호*/
		CTR_CHRR_REPMN,            /*계약담당자 대표자*/
		CTR_CHRR_REP_DTYNM,        /*계약담당자 대표자 직책명*/
		CTR_CHRR,            /*계약담당자 대표자*/
		LA_AGNT,                   /*법률상대리인*/
		CTR_CHRR_FZIP,             /*계약담당자 앞자리우편번호*/
		CTR_CHRR_RZIP,             /*계약담당자 뒷자리우편번호*/
		CTR_CHRR_ZIP_SQNO,         /*계약담당자 우편번호일련번호*/
		CTR_CHRR_DONGUP,           /*계약담당자 동이상주소*/
		CTR_CHRR_DONGBW,           /*계약담당자 동이하주소*/
		RMK,                       /*비고*/
		STS,                       /*상태*/
		COLB_COMP_SGNT,        	   /*협력업체서명*/
		BUYER_APV_STS,             /*바이어승인상태*/
		CTR_PRD_AUT_XTN_YN,        /*계약기간 자동 연장여부*/
		FGAT_PRVT_C,               /*위변조방지코드*/
		BF_CTR_NO,                 /*이전계약번호 */
		BF_CTR_SQNO,                 /*이전계약일련번호 */
		LA_AGNT_DTYNM,             /*법률상 대리 직책명 */
		RRNO,                      /*주민등록번호*/
		COPNO,                      /*법인등록번호 */
		CLEAN_YN,			/*청렴계약제시행안내문붙임여부*/
		SEAL_OMIT_YN,			/*직인생략여부*/
		CTR_CHRR_BZNO			/*계약담당자 사업자번호*/
	}
	
	public enum EltCtrwNames {
		   ISCHECKED,
	       ELT_CTRW_NO ,
	       CHG_SQNO,
	       MN_CTRW_KD ,
	       MN_CTRW_KD_NM ,
	       NA_TRPL_C,
	       MTALNM,
	       CTR_ST_DT,
	       CTR_ED_DT,
	       CTR_DT,
	       CTRW_DRUP_DT,
	       COLB_COMP_SGNT_DTM,
	       BUYER_APV_DTM,
	       STS,
	       STS_NM,
	       STS_EXP,
	       CHG_NM,
	       DCM_APD_CHK,  //첨부파일
	       STYL_AMM_CHK,  //양식
	       BUYER_NM,
	       BUYER_ENO,
	       BUYER_BLG,
	       SCTR_SJT,
	       STS_CANCEL,
	       CHG_REQ_STA,
	       CHG_NO,
	       CHG_BUYER_ENO,
	       CHG_BUYER_NM,
	       CHG_REQ_STAT,
	       DONG,
	       TELNO,
	       CEO,
	       BUYER_NA_TRPL_NM,
	       BUYER_BZNO,
	       CHG_NA_TRPL_NM,
	       CTR_CHRR_MTALNM,
	       CTR_CHRR_REPMN,
	       BF_CTR_NO,
	       BF_CTR_SQNO,
	       ATCH_CTR_CNT,
	       ATCH_CTR_NO,
		    FSRG_DTM,
		    LSCHG_DTM,
		    LS_CHGM,
		    SEAL_OMIT_YN,
		    MN_CTRW_DSN
	}
	
	public enum EltCtrwDtlNames {
		ELT_CTRW_NO,
		CEO,
		TELNO,
		MPNO,
		EMAIL,
		BUYER_NM,
		BUYER_TELNO,
		BUYER_MPNO,
		BUYER_EMAIL,
		CTRW_KD_NM,
		CTRW_KDC,
		MN_CTRW_KD,
		SQNO,
		TMP_STS,
		TMP_STS_NM,
		STS_END,
		STS_EXP,
		CANCEL,
		STS,
		TINM,
		CNTN,
		RLTM_NTC_SMS,
		RLTM_NTC_EMAIL,
		CHG_SQNO,
		COLB_COMP_SEAL_APDFLNM,
		COLB_COMP_SEAL_SYS_FLNM,
		BUYER_SEAL_APDFLNM,
		BUYER_SEAL_SYS_FLNM,
		BUYER_NA_TRPL_SEAL_FLNM, // 하나로유통 인감파일
		BUYER_APV_STS,
	    SCTR_SJT,
	    COLB_COMP_SGNT_DTM,
	    COLB_COMP_SGNT,
	    SEAL_OMIT_YN,
	    FSRG_DTM,
	    LSCHG_DTM,
	    LS_CHGM
	}
	
	public enum EltCtrwDtlKdNames {
		CTRW_NM,
		CTRW_KD_NM,
		CTRW_KDC
	}
	
	public enum EltCtrwDtlNtcNames {
		ELT_CTRW_NO,
		MPNO,
		EMAIL,
		BUYER_MPNO,
		BUYER_EMAIL,
		CTRW_KD_NM,
		CTRW_KDC,
		STS_NM,
		TINM,
		CNTN,
		RLTM_NTC_CHK,
		USR_TPC,
		RLTM_NTC_SMS,
		RLTM_NTC_EMAIL,
		SMS_NATV_NO,
		EMAIL_NATV_NO,
		USR_NM,
		FSRG_DTM,
	    SCTR_SJT
	}
	
	public enum EltCtrwDtlFileYn {
		ISCHECKED,
		SQNO,
		ORGFNAME,
		FILESIZE,
		SYSTEMFILENAME,
		BUYER_ENO,
		ELT_CTRW_NO,
		CHG_SQNO,
		MN_CTRW_KD,
		MN_CTRW_KDC,
		DCM_C,
	    DCM_NM,
	    ESS_YN,
	    ESS_YN_NM,
	    CTRW_KD_NM,
	    STS_NM,
	    SEAL,
	    DCM_APD_STS,
        RMK,
        LSCHG_USR_NM,
        LSCHG_DTM,
        FS_RGM,
	    SCTR_SJT,
	    APDFL_STS
	}
	
	public enum CtrwChgHstDscNames {
		MN_CTRW_KDNM
		,STS_NM
		,TINM
		,BUYER_NM
		,ST_DT
		,CHRG_BUYER_NM
		,CNTN
		,RLTM_NTC_SMS
		,SMS_SEND_DATE
		,SMS_READ_TIME
		,SMS_STS
		,RLTM_NTC_EMAIL
		,EMAIL_SEND_DATE
		,EMAIL_READ_DATE
		,EMAIL_STS
		,SCTR_SJT 
	}
	
	public enum ctrwChgObjNames {
		  ISCHECKED
		 ,ELT_CTRW_NO
		 ,CHG_SQNO
		 ,MN_CTRW_KD_NM
		 ,STS
		 ,STS_NM
		 ,MTALNM
		 ,BZNO
		 ,NA_TRPL_C
		 ,CTR_ST_DT
		 ,CTR_ED_DT
		 ,CTR_DT
		 ,CTRW_DRUP_DT
		 ,CHG_NM
		 ,DCM_APD_CHG_CHK
	     ,STYL_AMM_CHG_CHK
	     ,DCM_APD_CHG_CHK_TEMP
	     ,STYL_AMM_CHG_CHK_TEMP
	     ,SCTR_SJT
	}
	
	
	public enum eltCtrwAmnNames {	
	ISCHECKED
	,ELT_CTRW_NO
	,NA_TRPL_C
	,CHG_SQNO
	,MN_CTRW_KD
	,ADD_CTRW_YN
	,PMIW_YN
	,SCTRW_YN
	,ETC_CTRW_YN
	,BZNO
	,BUYER_NA_TRPL_C
	,TELNO
	,MPNO
	,EMAIL
	,CTRW_STY_VER
	,CTR_ST_DT
	,CTR_ED_DT
	,CTRW_DRUP_DT
	,CEO
	,MTALNM
	,FZIP
	,RZIP
	,ZIP_SQNO
	,DONGUP
	,DONGBW
	,BUYER_ENO
	,BUYER_BLG
	,BUYER_NM
	,BUYER_TELNO
	,BUYER_MPNO
	,BUYER_EMAIL
	,CTR_CHRR_MTALNM
	,CTR_CHRR_REPMN
	,CTR_CHRR_REP_DTYNM  
	,CTR_CHRR
	,LA_AGNT
	,CTR_CHRR_FZIP
	,CTR_CHRR_RZIP
	,CTR_CHRR_ZIP_SQNO
	,CTR_CHRR_DONGUP
	,CTR_CHRR_DONGBW
	,RMK
	,STS
	,COLB_COMP_SGNT
	,BUYER_APV_STS
	,CTR_PRD_AUT_XTN_YN
	,FGAT_PRVT_C
	,BF_CTR_NO
	,BF_CTR_SQNO
	,RRNO
	,COPNO
	,LA_AGNT_DTYNM
	,BUYER_SEAL_APDFLNM
	,BUYER_SEAL_SYS_FLNM
	,SCTR_SJT
	}
	
	public enum CtEltCtrwDtlNames {
		ISCHECKED
		,ELT_CTRW_NO
		,CHG_SQNO
		,MN_CTRW_KDC
		,CTRW_STY_VER
		,CNR_DT
		,PSG_MM
		,PSG_DD
		,ETR_FEE
		,PHD_FEERT
		,LIG_PLTPE
		,MEXP_DD
		,WRS_PRM_PY
		,GRMY      
		,BLM_GRMY
		,RT  
		,WRS_SPYAM
		,CTR_CLO  
		,SCTR_SJT
		,CTRW_TINM
		,ETC1
		,ETC2
		,ETC3
		,ETC4
		,ETC5
		,ETC6
		,ETC7
		,ETC8
		,ETC9
		,ETCA
		,ETC10
		,ETC11
		,ETC12
		,ETC13
		,ETC14
		,ETC15
		,ETC16
		,ETC17
		,ETC18
		,ETC19
		,ETC20
		,ETC21
		,ETC22
		,ETC23
		,ETC24
		,ETC25
		,ETC26
		,ETC27
		,ETC28
		,ETC29
		,ETC30
		,ETC31
		,ETC32
		,ETC33
		,ETC34
		,ETC35
		,ETC36
		,ETC37
		,ETC38
		,ETC39
		,ETC40
		,ETC41
		,ETC42
		,ETC43
		,ETC44
		,ETC45
		,ETC46
		,ETC47
		,ETC48
		,ETC49
		,ETC50
		,ETC51
		,ETC52
		,ETC53
		,ETC54
		,ETC55
		,ETC56
		,ETC57
		,ETC58
		,ETC59
		,ETC60
	}
	
	public enum AddEltCtrwDtlNames {
		ISCHECKED
		,ELT_CTRW_NO
		,CHG_SQNO
		,ADD_CTRW_KDC
		,CTRW_STY_VER
		,PB_CTRW_TINM
		,CNR_DT
		,PSG_MM
		,PSG_DD
		,SCTR_SJT
		,ETC1
		,ETC2
		,ETC3
		,ETC4
		,ETC5
		,ETC6
		,ETC7
		,ETC8
		,ETC9
		,ETCA
	}
	
	public enum PmiwDtlNames {
		ISCHECKED
		,ELT_CTRW_NO
		,CHG_SQNO
		,PMIW_KDC
		,CTRW_STY_VER
		,BUY_AM
		,EVT_TINM
		,EVT_PRD_ST_DT
		,EVT_PRD_ED_DT
		,ETC1
		,ETC2
		,ETC3
		,ETC4
		,ETC5
		,ETC6
		,ETC7
		,ETC8
		,ETC9
		,ETC10
		,ETC11
		,ETC12
		,ETC13
		,ETC14
		,ETC15
		,ETC16
		,ETC17
		,ETCA
		,ETCB
		,ETCC
		,ETCD
		,ETCE
		,ETCF
		,ETCG
		,ETCH
		,ETCI
		,ETCJ
		,ETCK
		,ETCL
		,SCTR_SJT
	}
	
	public enum EvtAmPmiwNames {
		ISCHECKED
		,ELT_CTRW_NO
		,PMIW_KDC
		,CHG_SQNO
		,EVT_NM
		,EVT_CNTN
		,EVT_PLCNM
		,EVT_WRS_NM
		,EVT_RTO_CNTN
		,CTR_PATN_AM
		,CTR_CHRR_AM
		,AM_SS
		,CTR_PATN_RTO
		,CTR_CHRR_RTO
		,RTO_SS
		,CTR_PATN_ALOT_RTO
		,CTR_CHRR_ALOT_RTO
		,ALOT_RTO_SS
		,ALL_XPC_PMTN_CST
		,CLCN_BASS
		,SCTR_SJT
	}
	
	public enum DlvgCompEmpDspcPmiwNames {
		ISCHECKED
		,ELT_CTRW_NO
		,PMIW_KDC
		,CHG_SQNO
		,DSPC_BASS
		,LBRCS_DRTCS_CNTN1
		,LBRCS_DRTCS_CNTN2
		,LBRCS_DRTCS_AM1
		,LBRCS_DRTCS_AM2
		,LBRCS_DRTCS_RMK1
		,LBRCS_DRTCS_RMK2
		,LBRCS_OHCS_CNTN1
		,LBRCS_OHCS_CNTN2
		,LBRCS_OHCS_CNTN3
		,LBRCS_OHCS_AM1
		,LBRCS_OHCS_AM2
		,LBRCS_OHCS_AM3
		,LBRCS_OHCS_RMK1
		,LBRCS_OHCS_RMK2
		,LBRCS_OHCS_RMK3
		,FI_BNF_CNTN1
		,FI_BNF_CNTN2
		,FI_BNF_CNTN3
		,FI_BNF_AM1
		,FI_BNF_AM2
		,FI_BNF_AM3
		,FI_BNF_RMK1
		,FI_BNF_RMK2
		,FI_BNF_RMK3
		,ETC_TXPN_CNTN
		,ETC_TXPN_AM
		,ETC_TXPN_RMK
		,CTR_CHRR_RTO
		,CTR_PATN_RTO
		,SCTR_SJT
	}	
	
	public enum DspcPerWrkPrdPmiwNames {
		ISCHECKED
		,ELT_CTRW_NO
		,PMIW_KDC
		,CHG_SQNO
		,SQNO
		,STORNM
		,DSPC_PER
		,WRK_ST_DT
		,WRK_ED_DT
		,WRK_ST_HR
		,WRK_ED_HR
		,RCS_ST_HR
		,RCS_ED_HR
		,SCTR_SJT
	}
	
	
	public enum LgqtTrFeePmiwNames {
		
		ISCHECKED
		,PMIW_KDC
		,CHG_SQNO
		,FEERT_HMW_UNDR
		,FEERT_HMW1_HMW2
		,FEERT_HMW2_HMW3
		,FEERT_HMW3_HMW5
		,FEERT_HMW5_HMW10
		,FEERT_HMW10_OVR
		,FEERT_HMW_UNDR_TINM
		,FEERT_HMW1_HMW2_TINM
		,FEERT_HMW2_HMW3_TINM
		,FEERT_HMW3_HMW5_TINM
		,FEERT_HMW5_HMW10_TINM
		,FEERT_HMW10_OVR_TINM
		,SCTR_SJT
	}
	
	public enum SctrwDtlNames {
		ISCHECKED
		,ELT_CTRW_NO
		,SCTRW_KDC
		,CHG_SQNO
		,CTRW_STY_VER
		,VLD_PRD_ST_DT
		,VLD_PRD_ED_DT
		,DSPC_PRD_ST_DT
		,DSPC_PRD_ED_DT
		,WRK_ST_HR
		,WRK_ED_HR
		,EVT_PRD_ST_DT
		,EVT_PRD_ED_DT
		,PY_NT
		,SEL_SSDY_RTO
		,WRS_SPYAM
		,SCTR_SJT
		,ETC1
		,ETC2
	}

	public enum SctrwCtrMrgnRtNames {
		ISCHECKED
		,ELT_CTRW_NO
		,SCTRW_KDC
		,CHG_SQNO
		,SQNO
		,STORNM1
		,DC_SEL_MRGN_RT10
		,DC_SEL_MRGN_RT20
		,DC_SEL_MRGN_RT30
		,DC_SEL_MRGN_RT40
		,DC_SEL_MRGN_RT50
		,RMK
		,SCTR_SJT
	}

	public enum SctrwNmlMrgnRtNames {
		ISCHECKED
		,ELT_CTRW_NO
		,SCTRW_KDC
		,CHG_SQNO
		,SQNO
		,STORNM1
		,NML_MRGN_RT
		,EVT_MRGN_RT
		,RMK
		,SCTR_SJT
	}

	public enum SctrwPmtnEmpeDspcBrkNames {
		ISCHECKED
		,ELT_CTRW_NO
		,SCTRW_KDC
		,SQNO
		,CHG_SQNO
		,STORNM1
		,PMTN_EMPE1
		,STORNM2
		,PMTN_EMPE2
		,STORNM3
		,PMTN_EMPE3
		,SCTR_SJT
	}	

	public enum SctrwAllXpcPmtnCstNames {
		ISCHECKED
		,ELT_CTRW_NO
		,SCTRW_KDC
		,SQNO
		,CHG_SQNO
		,STORNM1
		,STOR_LY1
		,SELA_AREA_M1
		,SELA_AREA_PCN1
		,STORNM2
		,STOR_LY2
		,SELA_AREA_M2
		,SELA_AREA_PCN2
		,SCTR_SJT
	}

	public enum EtcEltCtrwNames {
		ISCHECKED
		,ELT_CTRW_NO
		,ETC_CTRW_KDC
		,CTRW_STY_VER
		,CHG_SQNO
		,LBRCS
		,LBRCS_CLCN_BASS
		,ETC
		,ETC_CLCN_BASS
		,NED_SS
		,NED_BASS
		,MSLAM
		,MSLAM_PFT
		,RLZ_XPC_PFT
		,SCTR_SJT
		,ETC1
		,ETC2
		,ETC3
		,ETC4
		,ETC5
	}
	
	public enum EltCtrwDcmApdNames {	
		ELT_CTRW_NO
		,MN_CTRW_KDC
		,SQNO
		,BUYER_ENO
		,DCM_C
		,DCM_NM
		,ESS_YN
		,APDFLNM
		,APDFL_PATHNM
		,APDFL_SZE
		,SYS_FLNM
		,FSRG_DTM
		,FS_RGM
		,LSCHG_DTM
		,LS_CHGM
		,SCTR_SJT
	}
	
	public enum CtEtcItem {	
		ISCHECKED
      , ELT_CTRW_NO
      , CHG_SQNO
      , SQNO
      , ITEM_CODE
      , ITEM_NAME
      , STANDARD
      , COUNTRY
      , COMPANY  
	  , BRAND    
	  , QTY    
	  , UPR
      , FSRG_DTM
      , FS_RGM
      , LSCHG_DTM
      , LS_CHGM
      , ETC1
      , ETC2
      , ETC3
      , ETC4
      , ETC5
	}
}