package com.nh.escm.bt.rq.vo;

public interface SQLMapNames {
	public enum CounselingInfoNames {
		CSLT_RQ_NO 
		,CHRR_MPNO  
		,CHRR_EMAIL 
		,CHRRNM
		,STS_NM 
		,STS
		,EVL_HDNGCN
		,BUYER_NM
		,BUYER_ENO
        ,BUYER_EMAIL
        ,BUYER_MPNO
        ,CSLT_DSC
        ,BUYER_OFFICE_TELNO
		 
	}
	
//	public enum CounselingDscInfoNames {
//		CSLT_RQ_NO 
//		,CHRR_MPNO  
//		,CHRR_EMAIL 
//		,STS_NM 
//		,STS
//		,EVL_HDNGCN
//		 
//	}
	
	public enum CounselingSendNames {
		ISCHECKED
		,CSLT_RQ_NO
		,SQNO
		,STS_NM
		,STS
		,TINM
		,RQ_DT
		,CHRG_BUYER_NM
		,USR_TPC
        ,RGM
		,RLTM_NTC_CHK
		,CNTN
        ,BUYER_TELNO 
        ,BUYER_EMAIL
        ,RLTM_NTC_SMS
        ,SMS_NATV_NO
        ,RLTM_NTC_EMAIL
        ,EMAIL_NATV_NO 
        ,BLOCK_YN
		 
	}
	
	public enum CsltRqHstNames {
		STS_NM	
		,TINM
		,RQ_DT
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
		,BLOCK_YN
		 
	}
	
	
		
}
