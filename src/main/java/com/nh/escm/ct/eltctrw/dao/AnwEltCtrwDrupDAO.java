package com.nh.escm.ct.eltctrw.dao;

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

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.nh.escm.ct.eltctrw.vo.AddEltCtrwDtlVO;
import com.nh.escm.ct.eltctrw.vo.AnwEltCtrwDrupVO;
import com.nh.escm.ct.eltctrw.vo.CtEtcItemVO;
import com.nh.escm.ct.eltctrw.vo.DlvgCompEmpDspcPmiwVO;
import com.nh.escm.ct.eltctrw.vo.DspcPerWrkPrdPmiwVO;
import com.nh.escm.ct.eltctrw.vo.EltCtrwDcmApdVO;
import com.nh.escm.ct.eltctrw.vo.EltCtrwDtlVO;
import com.nh.escm.ct.eltctrw.vo.EtcEltCtrwVO;
import com.nh.escm.ct.eltctrw.vo.EtcEltNtcVO;
import com.nh.escm.ct.eltctrw.vo.EvtAmPmiwVO;
import com.nh.escm.ct.eltctrw.vo.LgqtTrFeePmiwVO;
import com.nh.escm.ct.eltctrw.vo.PmiwDtlVO;
import com.nh.escm.ct.eltctrw.vo.SctrwAllXpcPmtnCstVO;
import com.nh.escm.ct.eltctrw.vo.SctrwCtrMrgnRtVO;
import com.nh.escm.ct.eltctrw.vo.SctrwDtlVO;
import com.nh.escm.ct.eltctrw.vo.SctrwNmlMrgnRtVO;
import com.nh.escm.ct.eltctrw.vo.SctrwPmtnEmpeDspcBrkVO;
import com.nh.escm.ct.eltctrwamn.vo.EtcEltStylAmnVO;

public class AnwEltCtrwDrupDAO extends AbstractDao {
	
	/* 전자계약서관리 */
	public int insertAnwEltCtrwDrup(AnwEltCtrwDrupVO ncvo){
		if(logger.isDebugEnabled()){
			
			logger.debug("***************************************************************************************");
			logger.debug(">>> insertAnwEltCtrwDrup : " + ncvo.toString());
		}
		return 	getSqlSession().insert("anwEltCtrwDrupDAO.insertAnwEltCtrwDrup",ncvo);

	}
	
	/* 전자계약서관리 */
	public int insertAnwEltCtrwDrupNew(AnwEltCtrwDrupVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug("***************************************************************************************");
			logger.debug(">>> insertAnwEltCtrwDrupNew : " + ncvo.toString());
		}
		return 	getSqlSession().insert("anwEltCtrwDrupDAO.insertAnwEltCtrwDrupNew",ncvo);
	}
	
	
	/* 전자계약서관리 수정 */
	public int updateEltCtrwDrup(AnwEltCtrwDrupVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> updateEltCtrwDrup : " + ncvo.toString());
		}
		return 	getSqlSession().update("anwEltCtrwDrupDAO.updateEltCtrwDrup",ncvo);
	}

	/* 전자계약서관리 첨부 파일  */
	public int updateEltCtrwDrupNew(AnwEltCtrwDrupVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> updateEltCtrwDrupNew : " + ncvo.toString());
		}
		return 	getSqlSession().update("anwEltCtrwDrupDAO.updateEltCtrwDrupNew",ncvo);
	}
	
	
		
	//전자계약서상세
	public int insertEltCtrwDtl(EltCtrwDtlVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> EltCtrwDtlVO : " + ncvo.toString());
		}
		return 	getSqlSession().insert("anwEltCtrwDrupDAO.insertEltCtrwDtl",ncvo);
	}
	
	//전자계약_첨부파일 insert
	public int insertEltCtrwDcmApd(EltCtrwDcmApdVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> EltCtrwDcmApdVO : " + ncvo.toString());
		}
		return 	getSqlSession().insert("anwEltCtrwDrupDAO.insertCtEltCtrwDcmApd",ncvo);
	}
	
	//전자계약_첨부파일 insert
	public int insertEltCtrwDcmApdNew(String ELT_CTRW_NO ,String CHG_SQNO ,String CHG_SQNO_TEMP,String SQNO ,String LS_CHGM){
		
		
		Map<String, Object> param = new HashMap<String, Object>();
	    param.put("ELT_CTRW_NO",     ELT_CTRW_NO);
		param.put("CHG_SQNO",        CHG_SQNO);
		param.put("CHG_SQNO_TEMP",   CHG_SQNO_TEMP);
		param.put("SQNO",            SQNO);
		param.put("LS_CHGM",         LS_CHGM);

		if(logger.isDebugEnabled()){
			logger.debug(">>> insertEltCtrwDcmApdNew params : " + param);
		}
		
		return 	getSqlSession().insert("anwEltCtrwDrupDAO.insertCtEltCtrwDcmApdNew",param);
	}	
	
	
	
	
	
	
	
	
	//전자계약서상세
	public int insertEltCtrwDtlNew(EltCtrwDtlVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> EltCtrwDtlVO New : " + ncvo.toString());
		}
		return 	getSqlSession().insert("anwEltCtrwDrupDAO.insertEltCtrwDtlNew",ncvo);
	}	
	
	
	//전자계약서상세
	public int updateEltCtrwDtl(EltCtrwDtlVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> EltCtrwDtlVO : " + ncvo.toString());
		}
		return 	getSqlSession().update("anwEltCtrwDrupDAO.updateEltCtrwDtl",ncvo);
	}	
	
	//전자계약서상세
		public int updateEltCtrwDtlNew(EltCtrwDtlVO ncvo){
			if(logger.isDebugEnabled()){
				logger.debug(">>> EltCtrwDtlVO  New : " + ncvo.toString());
			}
			return 	getSqlSession().update("anwEltCtrwDrupDAO.updateEltCtrwDtlNew",ncvo);
		}	
	
	//전자계약서상세
	public int deleteEltCtrwDtl(EltCtrwDtlVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> deleteEltCtrwDtl  : " + ncvo.toString());
		}
		return 	getSqlSession().delete("anwEltCtrwDrupDAO.deleteEltCtrwDtl",ncvo);
	}
	
	//부가전자계약서상세
	public int insertAddEltCtrwDtl(AddEltCtrwDtlVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> AddEltCtrwDtlVO : " + ncvo.toString());
		}
		return 	getSqlSession().insert("anwEltCtrwDrupDAO.insertAddEltCtrwDtl",ncvo);
	}		
	//부가전자계약서상세
	public int insertAddEltCtrwDtlNew(AddEltCtrwDtlVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> AddEltCtrwDtlVO New: " + ncvo.toString());
		}
		return 	getSqlSession().insert("anwEltCtrwDrupDAO.insertAddEltCtrwDtlNew",ncvo);
	}	
	
	//부가전자계약서상세
	public int updateAddEltCtrwDtl(AddEltCtrwDtlVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> AddEltCtrwDtlVO : " + ncvo.toString());
		}
		return 	getSqlSession().update("anwEltCtrwDrupDAO.updateAddEltCtrwDtl",ncvo);
	}
	//부가전자계약서상세
	public int updateAddEltCtrwDtlNew(AddEltCtrwDtlVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> AddEltCtrwDtlVO New : " + ncvo.toString());
		}
		return 	getSqlSession().update("anwEltCtrwDrupDAO.updateAddEltCtrwDtlNew",ncvo);
	}	
	//부가전자계약서상세	
	public int deleteAddEltCtrwDtl(AddEltCtrwDtlVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> deleteAddEltCtrwDtl  : " + ncvo.toString());
		}
		return 	getSqlSession().delete("anwEltCtrwDrupDAO.deleteAddEltCtrwDtl",ncvo);
	}
		
	
	//약정서상세
	public int insertPmiwDtl(PmiwDtlVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> PmiwDtlVO : " + ncvo.toString());
		}
		return 	getSqlSession().insert("anwEltCtrwDrupDAO.insertPmiwDtl",ncvo);
	}
	
	//약정서상세
	public int insertPmiwDtlNew(PmiwDtlVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> PmiwDtlVO New: " + ncvo.toString());
		}
		return 	getSqlSession().insert("anwEltCtrwDrupDAO.insertPmiwDtlNew",ncvo);
	}
	
	//약정서상세
	public int updatePmiwDtl(PmiwDtlVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> PmiwDtlVO : " + ncvo.toString());
		}
		return 	getSqlSession().update("anwEltCtrwDrupDAO.updatePmiwDtl",ncvo);
	}
	//약정서상세
	public int updatePmiwDtlNew(PmiwDtlVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> PmiwDtlVO  New: " + ncvo.toString());
		}
		return 	getSqlSession().update("anwEltCtrwDrupDAO.updatePmiwDtlNew",ncvo);
	}
	//약정서상세	
	public int deletePmiwDtl(PmiwDtlVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> deletePmiwDtl  : " + ncvo.toString());
		}
		return 	getSqlSession().delete("anwEltCtrwDrupDAO.deletePmiwDtl",ncvo);
	}
	
	//행사료약정서	
	public int insertEvtAmPmiw(EvtAmPmiwVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> EvtAmPmiwVO : " + ncvo.toString());
		}
		return 	getSqlSession().insert("anwEltCtrwDrupDAO.insertEvtAmPmiw",ncvo);
	}
	//행사료약정서	
	public int insertEvtAmPmiwNew(EvtAmPmiwVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> EvtAmPmiwVO New: " + ncvo.toString());
		}
		return 	getSqlSession().insert("anwEltCtrwDrupDAO.insertEvtAmPmiwNew",ncvo);
	}

	//행사료약정서	
	public int updateEvtAmPmiw(EvtAmPmiwVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> EvtAmPmiwVO : " + ncvo.toString());
		}
		return 	getSqlSession().update("anwEltCtrwDrupDAO.updateEvtAmPmiw",ncvo);
	}
	//행사료약정서	
	public int updateEvtAmPmiwNew(EvtAmPmiwVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> EvtAmPmiwVO New: " + ncvo.toString());
		}
		return 	getSqlSession().update("anwEltCtrwDrupDAO.updateEvtAmPmiwNew",ncvo);
	}
	
	//행사료약정서		
	public int deleteEvtAmPmiw(EvtAmPmiwVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> deleteEvtAmPmiw  : " + ncvo.toString());
		}
		return 	getSqlSession().update("anwEltCtrwDrupDAO.deleteEvtAmPmiw",ncvo);
	}
	
	//대량거래수수료약정서
	public int insertLgqtTrFeePmiw(LgqtTrFeePmiwVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> LgqtTrFeePmiwVO : " + ncvo.toString());
		}
		return 	getSqlSession().insert("anwEltCtrwDrupDAO.insertLgqtTrFeePmiw",ncvo);
	}
	
	//대량거래수수료약정서
	public int insertLgqtTrFeePmiwNew(LgqtTrFeePmiwVO ncvo){

		if(logger.isDebugEnabled()){
			logger.debug(">>> LgqtTrFeePmiwVO New: " + ncvo.toString());
		}
		return 	getSqlSession().insert("anwEltCtrwDrupDAO.insertLgqtTrFeePmiwNew",ncvo);
	}	
	
	//대량거래수수료약정서
	public int updateLgqtTrFeePmiw(LgqtTrFeePmiwVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> LgqtTrFeePmiwVO : " + ncvo.toString());
		}
		return 	getSqlSession().update("anwEltCtrwDrupDAO.updateLgqtTrFeePmiw",ncvo);
	}
	//대량거래수수료약정서
	public int updateLgqtTrFeePmiwNew(LgqtTrFeePmiwVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> LgqtTrFeePmiwVO  New: " + ncvo.toString());
		}
		return 	getSqlSession().update("anwEltCtrwDrupDAO.updateLgqtTrFeePmiwNew",ncvo);
	}	
	
	
	
	
	
	
	
	//납품업체 종업원파견 약정서
	public int insertDlvgCompEmpDspcPmiw(DlvgCompEmpDspcPmiwVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> DlvgCompEmpDspcPmiwVO : " + ncvo.toString());
		}
		return 	getSqlSession().insert("anwEltCtrwDrupDAO.insertDlvgCompEmpDspcPmiw",ncvo);
	}
	
	//납품업체 종업원파견 약정서
	public int insertDlvgCompEmpDspcPmiwNew(DlvgCompEmpDspcPmiwVO ncvo){

		if(logger.isDebugEnabled()){
			logger.debug(">>> DlvgCompEmpDspcPmiwVO New: " + ncvo.toString());
		}
		return 	getSqlSession().insert("anwEltCtrwDrupDAO.insertDlvgCompEmpDspcPmiwNew",ncvo);
	}	
	
	//납품업체 종업원파견 약정서
	public int updateDlvgCompEmpDspcPmiw(DlvgCompEmpDspcPmiwVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> DlvgCompEmpDspcPmiwVO : " + ncvo.toString());
		}
		return 	getSqlSession().update("anwEltCtrwDrupDAO.updateDlvgCompEmpDspcPmiw",ncvo);
	}
	//납품업체 종업원파견 약정서
	public int deleteDlvgCompEmpDspcPmiw(DlvgCompEmpDspcPmiwVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> DlvgCompEmpDspcPmiwVO  : " + ncvo.toString());
		}
		return 	getSqlSession().delete("anwEltCtrwDrupDAO.deleteDlvgCompEmpDspcPmiw",ncvo);
	}
	
	
	
	//파견인원근무기간 약정서
	public int insertDspcPerWrkPrdPmiw(DspcPerWrkPrdPmiwVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> insertDspcPerWrkPrdPmiw : " + ncvo.toString());
		}
		return 	getSqlSession().insert("anwEltCtrwDrupDAO.insertDspcPerWrkPrdPmiw",ncvo);
	}
	
	//납품업체 종업원파견 약정서
	public int insertDspcPerWrkPrdPmiwNew(DspcPerWrkPrdPmiwVO ncvo){

		if(logger.isDebugEnabled()){
			logger.debug(">>> insertDspcPerWrkPrdPmiwNew New: " + ncvo.toString());
		}
		return 	getSqlSession().insert("anwEltCtrwDrupDAO.insertDspcPerWrkPrdPmiwNew",ncvo);
	}	
	
	//납품업체 종업원파견 약정서
	public int updateDspcPerWrkPrdPmiw(DspcPerWrkPrdPmiwVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> updateDspcPerWrkPrdPmiw : " + ncvo.toString());
		}
		return 	getSqlSession().update("anwEltCtrwDrupDAO.updateDspcPerWrkPrdPmiw",ncvo);
	}
	//납품업체 종업원파견 약정서
	public int deleteDspcPerWrkPrdPmiw(DspcPerWrkPrdPmiwVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> deleteDspcPerWrkPrdPmiw  : " + ncvo.toString());
		}
		return 	getSqlSession().delete("anwEltCtrwDrupDAO.deleteDspcPerWrkPrdPmiw",ncvo);
	}	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//대량거래수수료약정서
	public int deleteLgqtTrFeePmiw(LgqtTrFeePmiwVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> deleteLgqtTrFeePmiw  : " + ncvo.toString());
		}
		return 	getSqlSession().update("anwEltCtrwDrupDAO.deleteLgqtTrFeePmiw",ncvo);
	}
	
	
	//특약서상세	
	public int insertSctrwDtl(SctrwDtlVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> SctrwDtlVO : " + ncvo.toString());
		}
		return 	getSqlSession().insert("anwEltCtrwDrupDAO.insertSctrwDtl",ncvo);
	}
	
	//특약서상세	
	public int insertSctrwDtlNew(SctrwDtlVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> SctrwDtlVO New: " + ncvo.toString());
		}
		return 	getSqlSession().insert("anwEltCtrwDrupDAO.insertSctrwDtlNew",ncvo);
	}
	//특약서상세	
	public int updateSctrwDtl(SctrwDtlVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> SctrwDtlVO : " + ncvo.toString());
		}
		return 	getSqlSession().update("anwEltCtrwDrupDAO.updateSctrwDtl",ncvo);
	}
	//특약서상세	
	public int updateSctrwDtlNew(SctrwDtlVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> SctrwDtlVO : New" + ncvo.toString());
		}
		return 	getSqlSession().update("anwEltCtrwDrupDAO.updateSctrwDtlNew",ncvo);
	}	
	//특약서상세
	public int deleteSctrwDtl(SctrwDtlVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> deleteSctrwDtl  : " + ncvo.toString());
		}
		return 	getSqlSession().delete("anwEltCtrwDrupDAO.deleteSctrwDtl",ncvo);
	}
	
	
	

	//특약서_정상_마진율
	public int insertSctrwNmlMrgnRt(SctrwNmlMrgnRtVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> SctrwNmlMrgnRtVO : " + ncvo.toString());
		}
		return 	getSqlSession().insert("anwEltCtrwDrupDAO.insertSctrwNmlMrgnRt",ncvo);
	}		
	//특약서_정상_마진율
	public int insertSctrwNmlMrgnRtNew(SctrwNmlMrgnRtVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> SctrwNmlMrgnRtVO New: " + ncvo.toString());
		}
		return 	getSqlSession().insert("anwEltCtrwDrupDAO.insertSctrwNmlMrgnRtNew",ncvo);
	}	
	//특약서_정상_마진율
	public int updateSctrwNmlMrgnRt(SctrwNmlMrgnRtVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> SctrwNmlMrgnRtVO : " + ncvo.toString());
		}
		return 	getSqlSession().update("anwEltCtrwDrupDAO.updateSctrwNmlMrgnRt",ncvo);
	}
	//특약서_정상_마진율
	public int updateSctrwNmlMrgnRtNew(SctrwNmlMrgnRtVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> SctrwNmlMrgnRtVO New: " + ncvo.toString());
		}
		return 	getSqlSession().update("anwEltCtrwDrupDAO.updateSctrwNmlMrgnRtNew",ncvo);
	}	
	
	
	
	
	//특약서_계약_마진율
	public int deleteSctrwNmlMrgnRt(SctrwNmlMrgnRtVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> deleteSctrwNmlMrgnRt  : " + ncvo.toString());
		}
		return 	getSqlSession().delete("anwEltCtrwDrupDAO.deleteSctrwNmlMrgnRt",ncvo);
	}	
	
	
	

	//특약서_계약_마진율
	public int insertSctrwCtrMrgnRt(SctrwCtrMrgnRtVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> SctrwCtrMrgnRtVO : " + ncvo.toString());
		}
		return 	getSqlSession().insert("anwEltCtrwDrupDAO.insertSctrwCtrMrgnRt",ncvo);
	}			
	//특약서_계약_마진율
	public int insertSctrwCtrMrgnRtNew(SctrwCtrMrgnRtVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> SctrwCtrMrgnRtVO New: " + ncvo.toString());
		}
		return 	getSqlSession().insert("anwEltCtrwDrupDAO.insertSctrwCtrMrgnRtNew",ncvo);
	}
	
	//특약서_계약_마진율
	public int updateSctrwCtrMrgnRt(SctrwCtrMrgnRtVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> updateSctrwCtrMrgnRt : " + ncvo.toString());
		}
		return 	getSqlSession().update("anwEltCtrwDrupDAO.updateSctrwCtrMrgnRt",ncvo);
	}
	
	//특약서_계약_마진율
	public int updateSctrwCtrMrgnRtNew(SctrwCtrMrgnRtVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> updateSctrwCtrMrgnRt New: " + ncvo.toString());
		}
		return 	getSqlSession().update("anwEltCtrwDrupDAO.updateSctrwCtrMrgnRtNew",ncvo);
	}
	
	//특약서_계약_마진율
	public int deleteSctrwCtrMrgnRt(SctrwCtrMrgnRtVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> deleteSctrwCtrMrgnRt  : " + ncvo.toString());
		}
		return 	getSqlSession().delete("anwEltCtrwDrupDAO.deleteSctrwCtrMrgnRt",ncvo);
	}	

	

	//특약서_판촉사원파견내역
	public int insertSctrwPmtnEmpeDspcBrk(SctrwPmtnEmpeDspcBrkVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> SctrwPmtnEmpeDspcBrkVO : " + ncvo.toString());
		}
		return 	getSqlSession().insert("anwEltCtrwDrupDAO.insertSctrwPmtnEmpeDspcBrk",ncvo);
	}
	//특약서_판촉사원파견내역
	public int insertSctrwPmtnEmpeDspcBrkNew(SctrwPmtnEmpeDspcBrkVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> SctrwPmtnEmpeDspcBrkVO New: " + ncvo.toString());
		}
		return 	getSqlSession().insert("anwEltCtrwDrupDAO.insertSctrwPmtnEmpeDspcBrkNew",ncvo);
	}
	
	//특약서_판촉사원파견내역
	public int updateSctrwPmtnEmpeDspcBrk(SctrwPmtnEmpeDspcBrkVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> SctrwPmtnEmpeDspcBrkVO : " + ncvo.toString());
		}
		return 	getSqlSession().update("anwEltCtrwDrupDAO.updateSctrwPmtnEmpeDspcBrk",ncvo);
	}
	//특약서_판촉사원파견내역
	public int updateSctrwPmtnEmpeDspcBrkNew(SctrwPmtnEmpeDspcBrkVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> SctrwPmtnEmpeDspcBrkVO New: " + ncvo.toString());
		}
		return 	getSqlSession().update("anwEltCtrwDrupDAO.updateSctrwPmtnEmpeDspcBrkNew",ncvo);
	}
	
	
	//특약서_판촉사원파견내역
	public int deleteSctrwPmtnEmpeDspcBrk(SctrwPmtnEmpeDspcBrkVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> deleteSctrwPmtnEmpeDspcBrk  : " + ncvo.toString());
		}
		return 	getSqlSession().delete("anwEltCtrwDrupDAO.deleteSctrwPmtnEmpeDspcBrk",ncvo);
	}	
	
	
	
	//특약서_전체예상 판촉비용
	public int insertSctrwAllXpcPmtnCst(SctrwAllXpcPmtnCstVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> SctrwAllXpcPmtnCstVO : " + ncvo.toString());
		}
		return 	getSqlSession().insert("anwEltCtrwDrupDAO.insertSctrwAllXpcPmtnCst",ncvo);
	}
	//특약서_전체예상 판촉비용
	public int insertSctrwAllXpcPmtnCstNew(SctrwAllXpcPmtnCstVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> SctrwAllXpcPmtnCstVO New: " + ncvo.toString());
		}
		return 	getSqlSession().insert("anwEltCtrwDrupDAO.insertSctrwAllXpcPmtnCstNew",ncvo);
	}
	
	//특약서_전체예상 판촉비용
	public int updateSctrwAllXpcPmtnCst(SctrwAllXpcPmtnCstVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> SctrwAllXpcPmtnCstVO : " + ncvo.toString());
		}
		return 	getSqlSession().update("anwEltCtrwDrupDAO.updateSctrwAllXpcPmtnCst",ncvo);
	}
	
	//특약서_전체예상 판촉비용
	public int updateSctrwAllXpcPmtnCstNew(SctrwAllXpcPmtnCstVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> SctrwAllXpcPmtnCstVO New: " + ncvo.toString());
		}
		return 	getSqlSession().update("anwEltCtrwDrupDAO.updateSctrwAllXpcPmtnCstNew",ncvo);
	}	
	
	//특약서_전체예상 판촉비용
	public int deleteSctrwAllXpcPmtnCst(SctrwAllXpcPmtnCstVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> deleteSctrwAllXpcPmtnCst  : " + ncvo.toString());
		}
		return 	getSqlSession().delete("anwEltCtrwDrupDAO.deleteSctrwAllXpcPmtnCst",ncvo);
	}	
	
	

	//기타전자계약서
	public int insertEtcEltCtrw(EtcEltCtrwVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> EtcEltCtrwVO : " + ncvo.toString());
		}
		return 	getSqlSession().insert("anwEltCtrwDrupDAO.insertEtcEltCtrw",ncvo);
	}
	//기타전자계약서
	public int insertEtcEltCtrwNew(EtcEltCtrwVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> EtcEltCtrwVO New: " + ncvo.toString());
		}
		return 	getSqlSession().insert("anwEltCtrwDrupDAO.insertEtcEltCtrwNew",ncvo);
	}	

	//기타전자계약서
	public int updateEtcEltCtrw(EtcEltCtrwVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> EtcEltCtrwVO : " + ncvo.toString());
		}
		return 	getSqlSession().update("anwEltCtrwDrupDAO.updateEtcEltCtrw",ncvo);
	}
	//기타전자계약서
	public int updateEtcEltCtrwNew(EtcEltCtrwVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> EtcEltCtrwVO New: " + ncvo.toString());
		}
		return 	getSqlSession().update("anwEltCtrwDrupDAO.updateEtcEltCtrwNew",ncvo);
	}	
	//기타전자계약서
	public int deleteEtcEltCtrw(EtcEltCtrwVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> deleteEtcEltCtrw  : " + ncvo.toString());
		}
		return 	getSqlSession().delete("anwEltCtrwDrupDAO.deleteEtcEltCtrw",ncvo);
	}	
	
	public List<Map<String, Object>> retrieveContractFormList() {
		Map<String, Object> param = new HashMap<String, Object>();
		return getSqlSession().selectList("anwEltCtrwDrupDAO.retrieveContractFormList",param);
	}
	
	public List<Map<String, Object>> retrieveRegister(String BUYER_ENO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("BUYER_ENO", BUYER_ENO);		
		return getSqlSession().selectList("anwEltCtrwDrupDAO.retrieveRegister",param);
	}
	
	public List<EltCtrwDcmApdVO> retrieveEltCtrwDcmApdList(String ELT_CTRW_NO ,String CHG_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("ELT_CTRW_NO", ELT_CTRW_NO);
		param.put("CHG_SQNO", CHG_SQNO);
//		logger.debug("ELT_CTRW_NO   =>>"  +param.get("ELT_CTRW_NO"));
//		logger.debug("CHG_SQNO   =>>"  +  param.get("CHG_SQNO"));
		
		return getSqlSession().selectList("anwEltCtrwDrupDAO.retrieveEltCtrwDcmApdList",param);
	}
	
	public List<AnwEltCtrwDrupVO> selectSearch(String ELT_CTRW_NO ,String CHG_SQNO) {

		
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("ELT_CTRW_NO", ELT_CTRW_NO);
		param.put("CHG_SQNO", CHG_SQNO);
		
		
		logger.debug("ELT_CTRW_NO   =>>   "  +  ELT_CTRW_NO);
		logger.debug("CHG_SQNO   =>>   "  +  CHG_SQNO);
		
		return getSqlSession().selectList("anwEltCtrwDrupDAO.selectSearchdes",param);
		
		
	}
	
	public List<EtcEltStylAmnVO> selectEtcEltStylAmn(String ELT_CTRW_NO ,String CHG_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("ELT_CTRW_NO", ELT_CTRW_NO);
		param.put("CHG_SQNO", CHG_SQNO);
		return getSqlSession().selectList("anwEltCtrwDrupDAO.selectEtcEltStylAmn",param);

	}
	
	public List<EtcEltStylAmnVO> selectEtcEltStylAmnTest(String CTRW_KDC , String CTRW_STY_VER) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("CTRW_KDC", CTRW_KDC);
		param.put("CTRW_STY_VER", CTRW_STY_VER);
		return getSqlSession().selectList("anwEltCtrwDrupDAO.selectEtcEltStylAmnTest",param);

	}
	
	
	public List<EltCtrwDtlVO> selectEltCtrwDtl(String ELT_CTRW_NO ,String CHG_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("ELT_CTRW_NO", ELT_CTRW_NO);
		param.put("CHG_SQNO", CHG_SQNO);		
		return getSqlSession().selectList("anwEltCtrwDrupDAO.selectEltCtrwDtl",param);
	}
	
	
	public List<AddEltCtrwDtlVO> selectAddEltCtrwDtl(String ELT_CTRW_NO ,String CHG_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("ELT_CTRW_NO", ELT_CTRW_NO);
		param.put("CHG_SQNO", CHG_SQNO);
		return getSqlSession().selectList("anwEltCtrwDrupDAO.selectAddEltCtrwDtl",param);
	}
	public List<PmiwDtlVO> selectPmiwDtl(String ELT_CTRW_NO ,String CHG_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("ELT_CTRW_NO", ELT_CTRW_NO);
		param.put("CHG_SQNO", CHG_SQNO);
		return getSqlSession().selectList("anwEltCtrwDrupDAO.selectPmiwDtl",param);
	}

	public List<EvtAmPmiwVO> selectEvtAmPmiw(String ELT_CTRW_NO ,String CHG_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("ELT_CTRW_NO", ELT_CTRW_NO);
		param.put("CHG_SQNO", CHG_SQNO);
		return getSqlSession().selectList("anwEltCtrwDrupDAO.selectEvtAmPmiw",param);
	}
	public List<LgqtTrFeePmiwVO> selectLgqtTrFeePmiw(String ELT_CTRW_NO ,String CHG_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("ELT_CTRW_NO", ELT_CTRW_NO);
		param.put("CHG_SQNO", CHG_SQNO);
		return getSqlSession().selectList("anwEltCtrwDrupDAO.selectLgqtTrFeePmiw",param);
	}
	
	public List<DlvgCompEmpDspcPmiwVO> selectDlvgCompEmpDspcPmiw(String ELT_CTRW_NO ,String CHG_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("ELT_CTRW_NO", ELT_CTRW_NO);
		param.put("CHG_SQNO", CHG_SQNO);
		return getSqlSession().selectList("anwEltCtrwDrupDAO.selectDlvgCompEmpDspcPmiw",param);
	}
	
	
	public List<DspcPerWrkPrdPmiwVO> selectDspcPerWrkPrdPmiw(String ELT_CTRW_NO ,String CHG_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("ELT_CTRW_NO", ELT_CTRW_NO);
		param.put("CHG_SQNO", CHG_SQNO);
		return getSqlSession().selectList("anwEltCtrwDrupDAO.selectDspcPerWrkPrdPmiw",param);
	}
	
	public List<DspcPerWrkPrdPmiwVO> selectDspcPerWrkPrdPmiwOz(String ELT_CTRW_NO ,String CHG_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("ELT_CTRW_NO", ELT_CTRW_NO);
		param.put("CHG_SQNO", CHG_SQNO);
		return getSqlSession().selectList("anwEltCtrwDrupDAO.selectDspcPerWrkPrdPmiwOz",param);
	}
	
	
	
	public List<SctrwDtlVO> selectSctrwDtl(String ELT_CTRW_NO ,String CHG_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("ELT_CTRW_NO", ELT_CTRW_NO);
		param.put("CHG_SQNO", CHG_SQNO);
		return getSqlSession().selectList("anwEltCtrwDrupDAO.selectSctrwDtl",param);
	}
	public List<SctrwNmlMrgnRtVO> selectSctrwNmlMrgnRt(String ELT_CTRW_NO ,String CHG_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("ELT_CTRW_NO", ELT_CTRW_NO);
		param.put("CHG_SQNO", CHG_SQNO);
		return getSqlSession().selectList("anwEltCtrwDrupDAO.selectSctrwNmlMrgnRt",param);
	}
	public List<SctrwCtrMrgnRtVO> selectSctrwCtrMrgnRt(String ELT_CTRW_NO ,String CHG_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("ELT_CTRW_NO", ELT_CTRW_NO);
		param.put("CHG_SQNO", CHG_SQNO);
		return getSqlSession().selectList("anwEltCtrwDrupDAO.selectSctrwCtrMrgnRt",param);
	}
	public List<SctrwPmtnEmpeDspcBrkVO> selectSctrwPmtnEmpeDspcBrk(String ELT_CTRW_NO ,String CHG_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("ELT_CTRW_NO", ELT_CTRW_NO);
		param.put("CHG_SQNO", CHG_SQNO);
		return getSqlSession().selectList("anwEltCtrwDrupDAO.selectSctrwPmtnEmpeDspcBrk",param);
	}
	public List<SctrwAllXpcPmtnCstVO> selectSctrwAllXpcPmtnCst(String ELT_CTRW_NO ,String CHG_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("ELT_CTRW_NO", ELT_CTRW_NO);
		param.put("CHG_SQNO", CHG_SQNO);
		return getSqlSession().selectList("anwEltCtrwDrupDAO.selectSctrwAllXpcPmtnCst",param);
	}
	
	public List<EtcEltCtrwVO> selectEtcEltCtrw(String ELT_CTRW_NO ,String CHG_SQNO) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("ELT_CTRW_NO", ELT_CTRW_NO);
		param.put("CHG_SQNO", CHG_SQNO);
		return getSqlSession().selectList("anwEltCtrwDrupDAO.selectEtcEltCtrw",param);
	}

	
	/* 미리보기(임시저장) 데이터 삭제 */
	
	public int deleteTempEltCtrw(AnwEltCtrwDrupVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> deleteTempEltCtrw  : " + ncvo.toString());
		}
		return 	getSqlSession().delete("anwEltCtrwDrupDAO.deleteTempEltCtrw",ncvo);
	}
	
	public int deleteTempEltCtrwDcmApdAll(EltCtrwDcmApdVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> deleteTempEltCtrwDcmApdAll  : " + ncvo.toString());
		}
		return 	getSqlSession().delete("anwEltCtrwDrupDAO.deleteTempEltCtrwDcmApdAll",ncvo);
	}
	
	public int deleteEtcItemAll(CtEtcItemVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> deleteEtcItemAll  : " + ncvo.toString());
		}
		return 	getSqlSession().delete("anwEltCtrwDrupDAO.deleteEtcItemAll",ncvo);
	}
	
	public int deleteEltNtc(EtcEltNtcVO ncvo){
		if(logger.isDebugEnabled()){
			logger.debug(">>> deleteEltNtc  : " + ncvo.toString());
		}
		return 	getSqlSession().delete("anwEltCtrwDrupDAO.deleteEltNtc",ncvo);
	}
}