package com.nh.escm.pt.comn.vo;


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
	
	public enum SubEltctrwNames
 {
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
	
	
	
}
