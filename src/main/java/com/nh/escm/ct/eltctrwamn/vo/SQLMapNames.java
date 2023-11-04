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

public interface SQLMapNames {
	public enum CtrwStylNames
	{
		ISCHECKED
		,CTRW_KDC          //계약서종류코드 
		,CTRW_KDC_NM       //계약서종류명
		,CTRW_STY_VER      //계약서양식버전
		,UYN               //사용여부
		,UYN_NM            //사용여부명 
		,CTRW_CNTN         //계약서 내용
		,CTRW_MOD_CNTN         //계약서 내용
		,SQNO              //일련번호
		,FSRG_DTM          //최초등록일시  
		,FS_RGM            //최초등록자   
		,LSCHG_DTM         //최종변경일시  
		,LS_CHGM           //최종변경자   
	}
	
	public enum CodeNames
	{
		CTRW_KDC         //계약서 종류 코드
		,CTRW_STY_VER    //계약서 버젼 
		,SIMP_CNM        //계약서 종류명
	}
	
	public enum EssDcmAmnNames
	{
		 ISCHECKED
		,MN_CTRW_KDC      //메인계약서종류코드
		,SQNO             //일련번호
		,BUYER_ENO        //바이어개인번호
		,DCM_C            //서류코드
		,DCM_NM           //서류명
		,ESS_YN           //필수여부
		,RMK              //비고
		,STS              //상태
		,USR_NM              //상태
		,LSCHG_DTM              //상태
	}
	
	
	
}
