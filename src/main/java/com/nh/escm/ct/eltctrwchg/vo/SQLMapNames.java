package com.nh.escm.ct.eltctrwchg.vo;


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
	
	public enum StyVerNames
	{
		   
		CTRW_STY_VER         //최종변경일시  
		,CTRW_KDC           //최종변경자   
	}
	
	public enum CntnNames
	{
		CTRW_KDC            //계약서종류코드
		,SQNO               //일련번호 
		,CTRW_STY_VER       //계약서양식버전
		,CTRW_CNTN          //계약서내용
	}
	
	public enum CtrwBatChgNames
	{
		 ISCHECKED
		 ,ELT_CTRW_NO	
		 ,NA_TRPL_C	
		 ,MTALNM	
		 ,CTRW_KDC	
		 ,CTRW_STY_VER	
		 ,SIMP_CNM

	}
	
	
	
}
