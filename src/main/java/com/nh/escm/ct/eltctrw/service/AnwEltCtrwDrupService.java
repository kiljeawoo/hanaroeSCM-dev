package com.nh.escm.ct.eltctrw.service;

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

import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.config.Configurer;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.util.DateUtil;
import com.nh.escm.ct.eltctrw.dao.AnwEltCtrwDrupDAO;
import com.nh.escm.ct.eltctrw.dao.EltCtrwDAO;
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
import com.nh.escm.pt.usrinf.dao.MbEntDAO;
import com.nh.escm.util.SeqGenUtil;



/**
 * @author asi
 *
 */
@Service
public class AnwEltCtrwDrupService  extends AbstractService {
	
	@Autowired
	private  AnwEltCtrwDrupDAO anwEltCtrwDrupDAO;
	
	@Autowired
	private  EltCtrwDAO eltCtrwDAO;
	
//	@Autowired
//	private EltCtrwService eltctrwService;
	
	@Autowired
	private MbEntDAO mbEntDAO;
	
//	@Autowired
//	private SendService sendService;
	
	
	/*전자 계약서 신규 저장*/
	public void saveAnwEltCtrwDrup(AnwEltCtrwDrupVO ncvo){
		// try{
		String MAILFROM = "";
		String MAILTO = "";
		String EMAIL_NATV_NO = "";
		String SDATE = DateUtil.getCurrentDate("yyyyMMddHHmmss"); // 메일의 발송 날짜를 나타내는 필드입니다.
		String TDATE = DateUtil.getCurrentDate("yyyyMMddHHmmss"); // 메일의 수신 확인 종료 시각을 나타내는 필드입니다.
		String TINM = "";
		String CNTN = "";

		String ELT_CTRW_NO = "";
		String CHG_SQNO = "";
		String CHG_SQNO_TEMP = "";
		String LS_CHGM = "";

		/* 전자계약서관리 */
		if (!StringUtils.isEmpty(ncvo.getDML_CODE())) {
			int SEQIDX = ncvo.isTemp() ? 0 : SeqGenUtil.getEmailSeq("EMAIL").intValue();

			// 이메일
			String CTRW_KDC = /* "10"+ */ncvo.getMN_CTRW_KD();
			String from_MB_ID_NM = ncvo.getBUYER_NM(); // 보내는 사람
			String to_MB_ID_NM = ncvo.getCEO(); // 받는 사람
			MAILFROM = ncvo.getBUYER_EMAIL();
			MAILTO = ncvo.getEMAIL();

			String REPLYTO = Configurer.getProperty("emailSender.replyTo");
			String ERRORSTO = Configurer.getProperty("emailSender.errorsTo");
			String RNAME = " "; // 참조명에 해당합니다
			String MTYPE = "1"; // 0: 일반메일 1: html + text 메일 2: 보안메일
			String HTML = "1"; // text : 0 , html : 1 기본 1
			String ATC_SET = "0"; // 첨부파일 개수
			String MAILIDX = "0";
			String NEWMAILFROM = "";
			String NEWMAILTO = "";
			String QRY = "SSV:" + MAILTO;
			String NEWCONTENT = "";

			if (!"".equals(MAILFROM) && !"".equals(MAILTO) && !"".equals(from_MB_ID_NM) && !"".equals(to_MB_ID_NM)) {
				/*
				 * NEWMAILTO = "\"" + from_MB_ID_NM + "\"<"+ MAILFROM + ">"; NEWMAILFROM = "\""
				 * + to_MB_ID_NM + "\"<"+ MAILTO + ">";
				 */
				NEWMAILFROM = "\"" + from_MB_ID_NM + "\"<" + MAILFROM + ">";
				NEWMAILTO = "\"" + to_MB_ID_NM + "\"<" + MAILTO + ">";
			} else if (!"".equals(MAILFROM) && !"".equals(MAILTO) && "".equals(from_MB_ID_NM) && "".equals(to_MB_ID_NM)) {
				NEWMAILTO = "\"" + MAILFROM + "\"<" + MAILFROM + ">";
				NEWMAILFROM = "\"" + MAILTO + "\"<" + MAILTO + ">";
			}

			ELT_CTRW_NO = ncvo.getELT_CTRW_NO();
			CHG_SQNO = ncvo.getCHG_SQNO();
			CHG_SQNO_TEMP = ncvo.getCHG_SQNO_TEMP();
			LS_CHGM = ncvo.getLS_CHGM();

			switch (ncvo.getDML_CODE()) {
			case "1":
				// insertEltCtrwAmn(ncvo);
				if (!ncvo.isTemp()) {
					TINM = " 계약 작성이 완료 되었습니다. "; // ncvo.getTINM();
							CNTN =  "사장님의 사업이 날로 번창하시길 바랍니다. \n" 
			   	                   +"귀사와 계약을 위해 계약서를 작성하였습니다.\n" 
								   +"계약서를 검토한 후에 신규거래 신청 여부를 확인 부탁드립니다.\n" 
								   +"감사합니다. \n"
								   +ncvo.getBUYER_NM()+ " 올림  " ;
					// emailRst = sendService.sendEmail(TINM, MAILFROM , MAILTO, SDATE, TDATE, CNTN,"0",from_MB_ID_NM, to_MB_ID_NM );

					NEWCONTENT = CNTN.replaceAll(" ", "&nbsp;");
					NEWCONTENT = NEWCONTENT.replaceAll("\n", "<br/>");
					NEWCONTENT = "<html><body><head></head>" + NEWCONTENT + " </body></html>";

							 mbEntDAO.insertEmailSend(SEQIDX ,TINM ,QRY	,NEWMAILFROM ,NEWMAILTO	,REPLYTO ,ERRORSTO ,SDATE ,TDATE ,ATC_SET                            
										,RNAME ,MTYPE ,MAILIDX ,NEWCONTENT ,HTML);
					EMAIL_NATV_NO = "" + SEQIDX;

					// ELT_CTRW_NO, CTRW_KDC, STS, TINM, CNTN, USR_TPC, RLTM_NTC_SMS, SMS_NATV_NO,
					// RLTM_NTC_EMAIL, EMAIL_NATV_NO,USR_ID);
					// eltctrwService.insertEtcEltNtc(ncvo.getELT_CTRW_NO(), CTRW_KDC, "1", TINM,
					// CNTN, ncvo.getUSR_TPC(), "0", "", "1", EMAIL_NATV_NO,ncvo.getLS_CHGM());
					eltCtrwDAO.insertEtcEltNtc(ncvo.getELT_CTRW_NO(), CTRW_KDC, "1", TINM, CNTN, ncvo.getUSR_TPC(), "0", "", "1", EMAIL_NATV_NO, ncvo.getLS_CHGM());
				}
				anwEltCtrwDrupDAO.insertAnwEltCtrwDrup(ncvo);
				break;
			case "2":
				// updateEltCtrwAmn(ncvo);
				anwEltCtrwDrupDAO.updateEltCtrwDrup(ncvo);
				break;
			case "3":
				logger.debug("BUYER_APV_STS    =>>" + ncvo.getBUYER_APV_STS());
				// insertEltCtrwAmnNew(ncvo);
				TINM = " 계약서가 개별 변경 되었습니다. "; // ncvo.getTINM();
				if ("".equals(ncvo.getCTRW_MOD_CNTN())) {
							CNTN = "사장님의 사업이 날로 번창하시길 바랍니다. \n" 
			   	                 +"귀사와 계약서 내용이 변경 되었습니다 \n"
								 +"계약서를 검토한 후에 전자서명을 부탁드립니다.\n" 
								 +"감사합니다. \n"
								 +ncvo.getBUYER_NM()+ " 올림  " ;

				} else {
							CNTN = "사장님의 사업이 날로 번창하시길 바랍니다. \n" 
				   	                 +"귀사와 계약서 내용이 변경 되었습니다 \n" 
									+ncvo.getCTRW_MOD_CNTN() 
				   	               +"\n 계약서를 검토한 후에 전자서명을 부탁드립니다.\n" 
									 +"감사합니다. \n"
									 +ncvo.getBUYER_NM()+ " 올림  " ;
				}

				// emailRst = sendService.sendEmail(TINM, MAILFROM , MAILTO, SDATE, TDATE, CNTN
				// ,"0",from_MB_ID_NM, to_MB_ID_NM );

				NEWCONTENT = CNTN.replaceAll(" ", "&nbsp;");
				NEWCONTENT = NEWCONTENT.replaceAll("\n", "<br/>");
				NEWCONTENT = "<html><body><head></head>" + NEWCONTENT + " </body></html>";

							 mbEntDAO.insertEmailSend(SEQIDX ,TINM ,QRY	,NEWMAILFROM ,NEWMAILTO	,REPLYTO ,ERRORSTO ,SDATE ,TDATE ,ATC_SET                            
										,RNAME ,MTYPE ,MAILIDX ,NEWCONTENT ,HTML);
				EMAIL_NATV_NO = "" + SEQIDX;

				// ELT_CTRW_NO, CTRW_KDC, STS, TINM, CNTN, USR_TPC, RLTM_NTC_SMS, SMS_NATV_NO,
				// RLTM_NTC_EMAIL, EMAIL_NATV_NO,USR_ID);
				// eltctrwService.insertEtcEltNtc(ncvo.getELT_CTRW_NO(), CTRW_KDC, "7", TINM,
				// CNTN, ncvo.getUSR_TPC(), "0", "", "1", EMAIL_NATV_NO,ncvo.getLS_CHGM());
				eltCtrwDAO.insertEtcEltNtc(ncvo.getELT_CTRW_NO(), CTRW_KDC, "7", TINM, CNTN, ncvo.getUSR_TPC(), "0", "", "1", EMAIL_NATV_NO, ncvo.getLS_CHGM());

				anwEltCtrwDrupDAO.insertAnwEltCtrwDrupNew(ncvo);
				// updateEltCtrwAmnNew(ncvo);
				anwEltCtrwDrupDAO.updateEltCtrwDrupNew(ncvo);
				break;
			default:
				logger.error("EditType of Notice EltCtrw don't existed!! ");
				break;
			}
		}
		
		// 전자계약서상세
		if (ncvo.getEltCtrwDtlVoList() != null && ncvo.getEltCtrwDtlVoList().size() > 0) {
			for (EltCtrwDtlVO ecd : ncvo.getEltCtrwDtlVoList()) {
				switch (ecd.getDML_CODE()) {
				case "1":
					anwEltCtrwDrupDAO.insertEltCtrwDtl(ecd);

					break;
				case "2":
					anwEltCtrwDrupDAO.updateEltCtrwDtl(ecd);
					break;
				case "3":
					// updateEltCtrwDtlNew(ecd);
					anwEltCtrwDrupDAO.insertEltCtrwDtlNew(ecd);
					break;
				case "4":
					anwEltCtrwDrupDAO.deleteEltCtrwDtl(ecd);
					break;
				default:
					logger.error("EditType of Notice EltCtrw don't existed!! ");
					break;
				}
			}
		}
			
		// 첨부 파일
		if (ncvo.getEltCtrwDcmApdVoList() != null && ncvo.getEltCtrwDcmApdVoList().size() > 0) {
			for (EltCtrwDcmApdVO ecd : ncvo.getEltCtrwDcmApdVoList()) {
				switch (ecd.getDML_CODE()) {
				case "1":
					anwEltCtrwDrupDAO.insertEltCtrwDcmApd(ecd);
					break;
//				case "2":
//					updateEltCtrwDcmApd(ecd);
//					break;
				case "3":
					anwEltCtrwDrupDAO.insertEltCtrwDcmApdNew(ELT_CTRW_NO, CHG_SQNO, CHG_SQNO_TEMP, ecd.getSQNO(), LS_CHGM);
					break;
//				case "4":
//					deleteEltCtrwDcmApd(ecd);
//					break;
				default:
					logger.error("EditType of Notice EltCtrw don't existed!! ");
					break;
				}
			}
		}
			
		// 부가전자계약서상세
		if (ncvo.getAddEltCtrwDtlVoList() != null && ncvo.getAddEltCtrwDtlVoList().size() > 0) {
			for (AddEltCtrwDtlVO ecd : ncvo.getAddEltCtrwDtlVoList()) {
				switch (ecd.getDML_CODE()) {
				case "1":
					anwEltCtrwDrupDAO.insertAddEltCtrwDtl(ecd);
					break;
				case "2":
					anwEltCtrwDrupDAO.updateAddEltCtrwDtl(ecd);
					break;
				case "3":
					// updateAddEltCtrwDtlNew(ecd);
					anwEltCtrwDrupDAO.insertAddEltCtrwDtlNew(ecd);
					break;
				case "4":
					anwEltCtrwDrupDAO.deleteAddEltCtrwDtl(ecd);
					break;
				default:
					logger.error("EditType of Notice EltCtrw don't existed!! ");
					break;
				}
			}
		}
			
		// 약정서상세
		if (ncvo.getPmiwDtlVoList() != null && ncvo.getPmiwDtlVoList().size() > 0) {
			for (PmiwDtlVO pd : ncvo.getPmiwDtlVoList()) {
				switch (pd.getDML_CODE()) {
				case "1":
					anwEltCtrwDrupDAO.insertPmiwDtl(pd);
					break;
				case "2":
					anwEltCtrwDrupDAO.updatePmiwDtl(pd);
					break;
				case "3":
					// updatePmiwDtlNew(pd);
					anwEltCtrwDrupDAO.insertPmiwDtlNew(pd);
					break;
				case "4":
					anwEltCtrwDrupDAO.deletePmiwDtl(pd);
					break;
				default:
					logger.error("EditType of Notice EltCtrw don't existed!! ");
					break;
				}
			}
		}
			
		// 행사료약정서
		if (ncvo.getEvtAmPmiwVoList() != null && ncvo.getEvtAmPmiwVoList().size() > 0) {
			for (EvtAmPmiwVO eap : ncvo.getEvtAmPmiwVoList()) {
				switch (eap.getDML_CODE()) {
				case "1":
					anwEltCtrwDrupDAO.insertEvtAmPmiw(eap);
					break;
				case "2":
					anwEltCtrwDrupDAO.updateEvtAmPmiw(eap);
					break;
				case "3":
					// updateEvtAmPmiwNew(eap);
					anwEltCtrwDrupDAO.insertEvtAmPmiwNew(eap);
					break;
				case "4":
					anwEltCtrwDrupDAO.deleteEvtAmPmiw(eap);
					break;
				default:
					logger.error("EditType of Notice EltCtrw don't existed!! ");
					break;
				}
			}
		}
			
		// 대량거래수수료약정서
		if (ncvo.getLgqtTrFeePmiwVoList() != null && ncvo.getLgqtTrFeePmiwVoList().size() > 0) {
			for (LgqtTrFeePmiwVO ltfp : ncvo.getLgqtTrFeePmiwVoList()) {
				switch (ltfp.getDML_CODE()) {
				case "1":
					anwEltCtrwDrupDAO.insertLgqtTrFeePmiw(ltfp);
					break;
				case "2":
					anwEltCtrwDrupDAO.updateLgqtTrFeePmiw(ltfp);
					break;
				case "3":
					// updateLgqtTrFeePmiwNew(ltfp);
					anwEltCtrwDrupDAO.insertLgqtTrFeePmiwNew(ltfp);
					break;
				case "4":
					anwEltCtrwDrupDAO.deleteLgqtTrFeePmiw(ltfp);
					break;
				default:
					logger.error("EditType of Notice EltCtrw don't existed!! ");
					break;
				}
			}
		}

		// 납품업체 종업원파견 약정서 ds_dlvgCompEmpDspcPmiw
		if (ncvo.getDlvgCompEmpDspcPmiwVOList() != null && ncvo.getDlvgCompEmpDspcPmiwVOList().size() > 0) {
			for (DlvgCompEmpDspcPmiwVO dcedp : ncvo.getDlvgCompEmpDspcPmiwVOList()) {
				switch (dcedp.getDML_CODE()) {
				case "1":
					anwEltCtrwDrupDAO.insertDlvgCompEmpDspcPmiw(dcedp);
					break;
				case "2":
					anwEltCtrwDrupDAO.updateDlvgCompEmpDspcPmiw(dcedp);
					break;
				case "3":
					// updateLgqtTrFeePmiwNew(ltfp);
					anwEltCtrwDrupDAO.insertDlvgCompEmpDspcPmiwNew(dcedp);
					break;
				case "4":
					anwEltCtrwDrupDAO.deleteDlvgCompEmpDspcPmiw(dcedp);
					break;
				default:
					logger.error("EditType of Notice EltCtrw don't existed!! ");
					break;
				}
			}
		}

		// 파견인원근무기간 약정서 DspcPerWrkPrdPmiwVO
		if (ncvo.getDspcPerWrkPrdPmiwVOList() != null && ncvo.getDspcPerWrkPrdPmiwVOList().size() > 0) {
			for (DspcPerWrkPrdPmiwVO dpwpp : ncvo.getDspcPerWrkPrdPmiwVOList()) {
				logger.debug("getDspcPerWrkPrdPmiwVOList  .getDML_CODE()   >>>>>" + dpwpp.getDML_CODE());

				switch (dpwpp.getDML_CODE()) {
				case "1":
					anwEltCtrwDrupDAO.insertDspcPerWrkPrdPmiw(dpwpp);
					break;
				case "2":
					anwEltCtrwDrupDAO.updateDspcPerWrkPrdPmiw(dpwpp);
					break;
				case "3":
					// updateLgqtTrFeePmiwNew(ltfp);
					anwEltCtrwDrupDAO.insertDspcPerWrkPrdPmiwNew(dpwpp);
					break;
				case "4":
					anwEltCtrwDrupDAO.deleteDspcPerWrkPrdPmiw(dpwpp);
					break;
				default:
					logger.error("EditType of Notice EltCtrw don't existed!! ");
					break;
				}
			}
		}

		// 특약서상세
		if (ncvo.getSctrwDtlVoList() != null && ncvo.getSctrwDtlVoList().size() > 0) {
			for (SctrwDtlVO sd : ncvo.getSctrwDtlVoList()) {
				logger.debug("getSctrwDtlVoList  .getDML_CODE()   >>>>>" + sd.getDML_CODE());
				switch (sd.getDML_CODE()) {
				case "1":
					anwEltCtrwDrupDAO.insertSctrwDtl(sd);
					break;
				case "2":
					anwEltCtrwDrupDAO.updateSctrwDtl(sd);
					break;
				case "3":
					// updateSctrwDtlNew(sd);
					anwEltCtrwDrupDAO.insertSctrwDtlNew(sd);
					break;
				case "4":
					anwEltCtrwDrupDAO.deleteSctrwDtl(sd);
					break;
				default:
					logger.error("EditType of Notice EltCtrw don't existed!! ");
					break;
				}
			}
		}

		// 특약서_정상_마진율
		if (ncvo.getSctrwNmlMrgnRtVoList() != null && ncvo.getSctrwNmlMrgnRtVoList().size() > 0) {
			for (SctrwNmlMrgnRtVO snmr : ncvo.getSctrwNmlMrgnRtVoList()) {
				logger.debug("getSctrwNmlMrgnRtVoList  .getDML_CODE()   >>>>>" + snmr.getDML_CODE());
				switch (snmr.getDML_CODE()) {
				case "1":
					anwEltCtrwDrupDAO.insertSctrwNmlMrgnRt(snmr);
					break;
				case "2":
					anwEltCtrwDrupDAO.updateSctrwNmlMrgnRt(snmr);
					break;
				case "3":
					// updateSctrwNmlMrgnRtNew(snmr);
					anwEltCtrwDrupDAO.insertSctrwNmlMrgnRtNew(snmr);
					break;
				case "4":
					anwEltCtrwDrupDAO.deleteSctrwNmlMrgnRt(snmr);
					break;
				default:
					logger.error("EditType of Notice EltCtrw don't existed!! ");
					break;
				}
			}
		}

		// 특약서_계약_마진율
		if (ncvo.getSctrwCtrMrgnRtVoList() != null && ncvo.getSctrwCtrMrgnRtVoList().size() > 0) {
			for (SctrwCtrMrgnRtVO scmr : ncvo.getSctrwCtrMrgnRtVoList()) {
				logger.debug("getSctrwCtrMrgnRtVoList  .getDML_CODE()   >>>>>" + scmr.getDML_CODE());
				switch (scmr.getDML_CODE()) {
				case "1":
					anwEltCtrwDrupDAO.insertSctrwCtrMrgnRt(scmr);
					break;
				case "2":
					anwEltCtrwDrupDAO.updateSctrwCtrMrgnRt(scmr);
					break;
				case "3":
					// updateSctrwCtrMrgnRtNew(scmr);
					anwEltCtrwDrupDAO.insertSctrwCtrMrgnRtNew(scmr);
					break;
				case "4":
					anwEltCtrwDrupDAO.deleteSctrwCtrMrgnRt(scmr);
					break;
				default:
					logger.error("EditType of Notice EltCtrw don't existed!! ");
					break;
				}
			}
		}

//			//특약서_판촉사원파견내역			
//			if(ncvo.getSctrwPmtnEmpeDspcBrkVoList() != null && ncvo.getSctrwPmtnEmpeDspcBrkVoList().size() > 0){
//				for(SctrwPmtnEmpeDspcBrkVO spedb : ncvo.getSctrwPmtnEmpeDspcBrkVoList()){
//					switch(spedb.getDML_CODE()){
//						case "1" :
//							anwEltCtrwDrupDAO.insertSctrwPmtnEmpeDspcBrk(spedb);
//							break;
//						case "2" : 
//							anwEltCtrwDrupDAO.updateSctrwPmtnEmpeDspcBrk(spedb);
//							break;
//						case "3" : 
////							updateSctrwPmtnEmpeDspcBrkNew(spedb);
//							anwEltCtrwDrupDAO.insertSctrwPmtnEmpeDspcBrkNew(spedb);
//							break;	
//						case "4" :
//							anwEltCtrwDrupDAO.deleteSctrwPmtnEmpeDspcBrk(spedb);
//							break;
//						default :
//							logger.error("EditType of Notice EltCtrw don't existed!! ");
//							break;	
//					}
//				}
//			}

		// 특약서_전체예상 판촉비용
		if (ncvo.getSctrwAllXpcPmtnCstVoList() != null && ncvo.getSctrwAllXpcPmtnCstVoList().size() > 0) {
			for (SctrwAllXpcPmtnCstVO sapc : ncvo.getSctrwAllXpcPmtnCstVoList()) {
				switch (sapc.getDML_CODE()) {
				case "1":
					anwEltCtrwDrupDAO.insertSctrwAllXpcPmtnCst(sapc);
					break;
				case "2":
					anwEltCtrwDrupDAO.updateSctrwAllXpcPmtnCst(sapc);
					break;
				case "3":
					// updateSctrwAllXpcPmtnCstNew(sapc);
					anwEltCtrwDrupDAO.insertSctrwAllXpcPmtnCstNew(sapc);
					break;
				case "4":
					anwEltCtrwDrupDAO.deleteSctrwAllXpcPmtnCst(sapc);
					break;
				default:
					logger.error("EditType of Notice EltCtrw don't existed!! ");
					break;
				}
			}
		}

		// 기타전자계약서
		if (ncvo.getEtcEltCtrwVoList() != null && ncvo.getEtcEltCtrwVoList().size() > 0) {
			for (EtcEltCtrwVO eec : ncvo.getEtcEltCtrwVoList()) {
				switch (eec.getDML_CODE()) {
				case "1":
					anwEltCtrwDrupDAO.insertEtcEltCtrw(eec);
					break;
				case "2":
					anwEltCtrwDrupDAO.updateEtcEltCtrw(eec);
					break;
				case "3":
					// updateEtcEltCtrwNew(eec);
					anwEltCtrwDrupDAO.insertEtcEltCtrwNew(eec);
					break;
				case "4":
					anwEltCtrwDrupDAO.deleteEtcEltCtrw(eec);
					break;
				default:
					logger.error("EditType of Notice EltCtrw don't existed!! ");
					break;
				}
			}
		}

//			return true;

//		}catch(DataAccessException e){
//			logger.error(e.getMessage(), e);
//			throw new AppetizerException(e);
//		}
	}
	
	/* 전자계약서관리   20151123*/
	public int insertEltCtrwAmn(AnwEltCtrwDrupVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.insertAnwEltCtrwDrup(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/* 전자계약서관리 */
	public int insertEltCtrwAmnNew(AnwEltCtrwDrupVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.insertAnwEltCtrwDrupNew(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/* 전자계약서관리 */
	public int updateEltCtrwAmnNew(AnwEltCtrwDrupVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.updateEltCtrwDrupNew(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	
	
	/* 전자계약서관리 */
	public int updateEltCtrwAmn(AnwEltCtrwDrupVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.updateEltCtrwDrup(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	

	//전자계약서상세
	public int insertEltCtrwDtl(EltCtrwDtlVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.insertEltCtrwDtl(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	//전자계약서상세
	public int insertEltCtrwDtlNew(EltCtrwDtlVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.insertEltCtrwDtlNew(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	//전자계약_첨부파일
	public int insertEltCtrwDcmApd(EltCtrwDcmApdVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.insertEltCtrwDcmApd(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	
	//전자계약_첨부파일
	//public int insertEltCtrwDcmApdNew(EltCtrwDcmApdVO ncvo) {
	public int insertEltCtrwDcmApdNew(String ELT_CTRW_NO ,String CHG_SQNO ,String CHG_SQNO_TEMP ,String SQNO ,String LS_CHGM){	
		//insertEltCtrwDcmApdNew(ELT_CTRW_NO ,CHG_SQNO ,CHG_SQNO_TEMP);
		
		try{
			return anwEltCtrwDrupDAO.insertEltCtrwDcmApdNew( ELT_CTRW_NO , CHG_SQNO , CHG_SQNO_TEMP,SQNO ,LS_CHGM);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}

	}
	
	
	
	
	//전자계약서상세
	public int updateEltCtrwDtl(EltCtrwDtlVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.updateEltCtrwDtl(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	//전자계약서상세
	public int updateEltCtrwDtlNew(EltCtrwDtlVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.updateEltCtrwDtlNew(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	//전자계약서상세
	public int deleteEltCtrwDtl(EltCtrwDtlVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.deleteEltCtrwDtl(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}	
	
	//부가전자계약서상세
	public int insertAddEltCtrwDtl(AddEltCtrwDtlVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.insertAddEltCtrwDtl(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}	
	
	//부가전자계약서상세
	public int insertAddEltCtrwDtlNew(AddEltCtrwDtlVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.insertAddEltCtrwDtlNew(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}	
	//부가전자계약서상세
	public int updateAddEltCtrwDtl(AddEltCtrwDtlVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.updateAddEltCtrwDtl(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}		
	
	//부가전자계약서상세
	public int updateAddEltCtrwDtlNew(AddEltCtrwDtlVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.updateAddEltCtrwDtlNew(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}	
	
	//부가전자계약서상세
	public int deleteAddEltCtrwDtl(AddEltCtrwDtlVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.deleteAddEltCtrwDtl(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}		
	

	//약정서상세	
	public int insertPmiwDtl(PmiwDtlVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.insertPmiwDtl(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}	
	//약정서상세	
	public int insertPmiwDtlNew(PmiwDtlVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.insertPmiwDtlNew(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}	
	//약정서상세	
	public int updatePmiwDtl(PmiwDtlVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.updatePmiwDtl(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}	
	//약정서상세	
	public int updatePmiwDtlNew(PmiwDtlVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.updatePmiwDtlNew(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}	
	//약정서상세	
	public int deletePmiwDtl(PmiwDtlVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.deletePmiwDtl(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}	
	
	
	//행사료약정서	
	public int insertEvtAmPmiw(EvtAmPmiwVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.insertEvtAmPmiw(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}		
	//행사료약정서	
	public int insertEvtAmPmiwNew(EvtAmPmiwVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.insertEvtAmPmiwNew(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}	
	
	
	//행사료약정서	
	public int updateEvtAmPmiw(EvtAmPmiwVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.updateEvtAmPmiw(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}		
	//행사료약정서	
	public int updateEvtAmPmiwNew(EvtAmPmiwVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.updateEvtAmPmiwNew(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}	
	//행사료약정서	
	public int deleteEvtAmPmiw(EvtAmPmiwVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.deleteEvtAmPmiw(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}		
	
	
	//대량거래수수료약정서
	public int insertLgqtTrFeePmiw(LgqtTrFeePmiwVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.insertLgqtTrFeePmiw(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	//대량거래수수료약정서
	public int insertLgqtTrFeePmiwNew(LgqtTrFeePmiwVO ncvo) {
		try{
			
		logger.debug("insertLgqtTrFeePmiwNew   =>> 11");	
			return anwEltCtrwDrupDAO.insertLgqtTrFeePmiwNew(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	//대량거래수수료약정서
	public int updateLgqtTrFeePmiw(LgqtTrFeePmiwVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.updateLgqtTrFeePmiw(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}	
	//대량거래수수료약정서
	public int updateLgqtTrFeePmiwNew(LgqtTrFeePmiwVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.updateLgqtTrFeePmiwNew(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}	
	
	
	//대량거래수수료약정서
	public int deleteLgqtTrFeePmiw(LgqtTrFeePmiwVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.deleteLgqtTrFeePmiw(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}	
	
	

	
	//특약서상세	
	public int insertSctrwDtl(SctrwDtlVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.insertSctrwDtl(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	//특약서상세	
	public int insertSctrwDtlNew(SctrwDtlVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.insertSctrwDtlNew(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	//특약서상세	
	public int updateSctrwDtl(SctrwDtlVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.updateSctrwDtl(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}	
	
	//특약서상세	
	public int updateSctrwDtlNew(SctrwDtlVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.updateSctrwDtlNew(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}	
	//특약서상세	
	public int deleteSctrwDtl(SctrwDtlVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.deleteSctrwDtl(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}	
	
	
	//특약서_정상_마진율
	public int insertSctrwNmlMrgnRt(SctrwNmlMrgnRtVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.insertSctrwNmlMrgnRt(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	//특약서_정상_마진율
	public int insertSctrwNmlMrgnRtNew(SctrwNmlMrgnRtVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.insertSctrwNmlMrgnRtNew(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	//특약서_정상_마진율
	public int updateSctrwNmlMrgnRt(SctrwNmlMrgnRtVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.updateSctrwNmlMrgnRt(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}		
	//특약서_정상_마진율
	public int updateSctrwNmlMrgnRtNew(SctrwNmlMrgnRtVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.updateSctrwNmlMrgnRtNew(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}	
	
	//특약서_계약_마진율
	public int deleteSctrwNmlMrgnRt(SctrwNmlMrgnRtVO ncvo) {
		try{
			
			return anwEltCtrwDrupDAO.deleteSctrwNmlMrgnRt(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	

	//특약서_계약_마진율
	public int insertSctrwCtrMrgnRt(SctrwCtrMrgnRtVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.insertSctrwCtrMrgnRt(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	//특약서_계약_마진율
	public int insertSctrwCtrMrgnRtNew(SctrwCtrMrgnRtVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.insertSctrwCtrMrgnRtNew(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	//특약서_계약_마진율
	public int updateSctrwCtrMrgnRt(SctrwCtrMrgnRtVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.updateSctrwCtrMrgnRt(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	//특약서_계약_마진율
	public int updateSctrwCtrMrgnRtNew(SctrwCtrMrgnRtVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.updateSctrwCtrMrgnRtNew(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	
	
	//특약서_계약_마진율
	public int deleteSctrwCtrMrgnRt(SctrwCtrMrgnRtVO ncvo) {
		try{
			
			return anwEltCtrwDrupDAO.deleteSctrwCtrMrgnRt(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	
	//특약서_판촉사원파견내역
	public int insertSctrwPmtnEmpeDspcBrk(SctrwPmtnEmpeDspcBrkVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.insertSctrwPmtnEmpeDspcBrk(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	//특약서_판촉사원파견내역
	public int insertSctrwPmtnEmpeDspcBrkNew(SctrwPmtnEmpeDspcBrkVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.insertSctrwPmtnEmpeDspcBrkNew(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	
	//특약서_판촉사원파견내역
	public int updateSctrwPmtnEmpeDspcBrk(SctrwPmtnEmpeDspcBrkVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.updateSctrwPmtnEmpeDspcBrk(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	//특약서_판촉사원파견내역
	public int updateSctrwPmtnEmpeDspcBrkNew(SctrwPmtnEmpeDspcBrkVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.updateSctrwPmtnEmpeDspcBrkNew(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}	
	
	//특약서_판촉사원파견내역
	public int deleteSctrwPmtnEmpeDspcBrk(SctrwPmtnEmpeDspcBrkVO ncvo) {
		try{
			
			return anwEltCtrwDrupDAO.deleteSctrwPmtnEmpeDspcBrk(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	
	
	
	
	
	
	//특약서_전체예상 판촉비용
	public int insertSctrwAllXpcPmtnCst(SctrwAllXpcPmtnCstVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.insertSctrwAllXpcPmtnCst(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}				
	//특약서_전체예상 판촉비용
	public int insertSctrwAllXpcPmtnCstNew(SctrwAllXpcPmtnCstVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.insertSctrwAllXpcPmtnCstNew(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}	
	
	//특약서_전체예상 판촉비용
	public int updateSctrwAllXpcPmtnCst(SctrwAllXpcPmtnCstVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.updateSctrwAllXpcPmtnCst(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}		
	//특약서_전체예상 판촉비용
	public int updateSctrwAllXpcPmtnCstNew(SctrwAllXpcPmtnCstVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.updateSctrwAllXpcPmtnCstNew(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}	
	
	//특약서_전체예상 판촉비용
	public int deleteSctrwAllXpcPmtnCst(SctrwAllXpcPmtnCstVO ncvo) {
		try{
			
			return anwEltCtrwDrupDAO.deleteSctrwAllXpcPmtnCst(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	
	
	
	//기타전자계약서
	public int insertEtcEltCtrw(EtcEltCtrwVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.insertEtcEltCtrw(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	//기타전자계약서
	public int insertEtcEltCtrwNew(EtcEltCtrwVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.insertEtcEltCtrwNew(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	
	//기타전자계약서
	public int updateEtcEltCtrw(EtcEltCtrwVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.updateEtcEltCtrw(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	//기타전자계약서
	public int updateEtcEltCtrwNew(EtcEltCtrwVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.updateEtcEltCtrwNew(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	//기타전자계약서
	public int deleteEtcEltCtrw(EtcEltCtrwVO ncvo) {
		try{
			return anwEltCtrwDrupDAO.deleteEtcEltCtrw(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}	
	
	
	public List<Map<String, Object>> retrieveContractFormList() {
		try {
			return anwEltCtrwDrupDAO.retrieveContractFormList();
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}	
	
	public List<Map<String, Object>> retrieveRegister(String BUYER_ENO) {
		try {
			return anwEltCtrwDrupDAO.retrieveRegister(BUYER_ENO);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}
	
	public List<EltCtrwDcmApdVO> retrieveEltCtrwDcmApdList(String ELT_CTRW_NO ,String CHG_SQNO) {
		try {
			return anwEltCtrwDrupDAO.retrieveEltCtrwDcmApdList(ELT_CTRW_NO ,CHG_SQNO);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public List<AnwEltCtrwDrupVO> selectSearch    (String ELT_CTRW_NO  ,String CHG_SQNO) {
		try {
			
			return anwEltCtrwDrupDAO.selectSearch(ELT_CTRW_NO ,CHG_SQNO);
			
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public List<EtcEltStylAmnVO> selectEtcEltStylAmn(String ELT_CTRW_NO,String CHG_SQNO) {
		
		try {
			
			return anwEltCtrwDrupDAO.selectEtcEltStylAmn(ELT_CTRW_NO ,CHG_SQNO );
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public List<EtcEltStylAmnVO> selectEtcEltStylAmnTest(String CTRW_KDC , String CTRW_STY_VER) {
		try {
			
			return anwEltCtrwDrupDAO.selectEtcEltStylAmnTest(CTRW_KDC ,CTRW_STY_VER );
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	
	public List<EltCtrwDtlVO> selectEltCtrwDtl(String ELT_CTRW_NO ,String CHG_SQNO ) {
		try {
			return anwEltCtrwDrupDAO.selectEltCtrwDtl(ELT_CTRW_NO ,CHG_SQNO );
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public List<AddEltCtrwDtlVO> selectAddEltCtrwDtl(String ELT_CTRW_NO ,String CHG_SQNO) {
		try {
			return anwEltCtrwDrupDAO.selectAddEltCtrwDtl(ELT_CTRW_NO ,CHG_SQNO );
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public List<PmiwDtlVO> selectPmiwDtl(String ELT_CTRW_NO ,String CHG_SQNO) {
		try {
			return anwEltCtrwDrupDAO.selectPmiwDtl(ELT_CTRW_NO ,CHG_SQNO);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public List<EvtAmPmiwVO> selectEvtAmPmiw(String ELT_CTRW_NO ,String CHG_SQNO) {
		try {
			return anwEltCtrwDrupDAO.selectEvtAmPmiw(ELT_CTRW_NO ,CHG_SQNO);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public List<LgqtTrFeePmiwVO> selectLgqtTrFeePmiw(String ELT_CTRW_NO ,String CHG_SQNO ) {
		try {
			return anwEltCtrwDrupDAO.selectLgqtTrFeePmiw(ELT_CTRW_NO ,CHG_SQNO);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public List<DlvgCompEmpDspcPmiwVO> selectDlvgCompEmpDspcPmiw(String ELT_CTRW_NO ,String CHG_SQNO ) {
		try {
			return anwEltCtrwDrupDAO.selectDlvgCompEmpDspcPmiw(ELT_CTRW_NO ,CHG_SQNO);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	
	public List<DspcPerWrkPrdPmiwVO> selectDspcPerWrkPrdPmiw(String ELT_CTRW_NO ,String CHG_SQNO ) {
		try {
			return anwEltCtrwDrupDAO.selectDspcPerWrkPrdPmiw(ELT_CTRW_NO ,CHG_SQNO);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public List<DspcPerWrkPrdPmiwVO> selectDspcPerWrkPrdPmiwOz(String ELT_CTRW_NO ,String CHG_SQNO ) {
		try {
			return anwEltCtrwDrupDAO.selectDspcPerWrkPrdPmiwOz(ELT_CTRW_NO ,CHG_SQNO);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	
	
	
	public List<SctrwDtlVO> selectSctrwDtl(String ELT_CTRW_NO ,String CHG_SQNO) {
		try {
			return anwEltCtrwDrupDAO.selectSctrwDtl(ELT_CTRW_NO ,CHG_SQNO);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	public List<SctrwNmlMrgnRtVO> selectSctrwNmlMrgnRt(String ELT_CTRW_NO ,String CHG_SQNO ) {
		try {
			return anwEltCtrwDrupDAO.selectSctrwNmlMrgnRt(ELT_CTRW_NO ,CHG_SQNO);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public List<SctrwCtrMrgnRtVO> selectSctrwCtrMrgnRt(String ELT_CTRW_NO ,String CHG_SQNO) {
		try {
			return anwEltCtrwDrupDAO.selectSctrwCtrMrgnRt(ELT_CTRW_NO ,CHG_SQNO);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	public List<SctrwPmtnEmpeDspcBrkVO> selectSctrwPmtnEmpeDspcBrk(String ELT_CTRW_NO ,String CHG_SQNO) {
		try {
			return anwEltCtrwDrupDAO.selectSctrwPmtnEmpeDspcBrk(ELT_CTRW_NO,CHG_SQNO );
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	public List<SctrwAllXpcPmtnCstVO> selectSctrwAllXpcPmtnCst(String ELT_CTRW_NO ,String CHG_SQNO) {
		try {
			return anwEltCtrwDrupDAO.selectSctrwAllXpcPmtnCst(ELT_CTRW_NO ,CHG_SQNO);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public List<EtcEltCtrwVO> selectEtcEltCtrw(String ELT_CTRW_NO ,String CHG_SQNO) {
		try {
			return anwEltCtrwDrupDAO.selectEtcEltCtrw(ELT_CTRW_NO ,CHG_SQNO);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/**
	 * 1) 미리보기(임시저장) 모든 관련 데이터 삭제
	 * 2) 계약서 작성건 삭제
	 */
	public int deleteTempEltCtrw(AnwEltCtrwDrupVO ncvo) {
		int cnt = 0;
		try{
			// 전자계약상세
			EltCtrwDtlVO ecdVO = new EltCtrwDtlVO();
			ecdVO.setELT_CTRW_NO(ncvo.getELT_CTRW_NO());
			ecdVO.setCHG_SQNO(ncvo.getCHG_SQNO());			
			cnt += anwEltCtrwDrupDAO.deleteEltCtrwDtl(ecdVO);
//			System.out.println("전자계약상세 삭제 => " + cnt);
			
			// 첨부파일
			EltCtrwDcmApdVO ecdaVO = new EltCtrwDcmApdVO();
			ecdaVO.setELT_CTRW_NO(ncvo.getELT_CTRW_NO());
			ecdaVO.setCHG_SQNO(ncvo.getCHG_SQNO());			
			cnt += anwEltCtrwDrupDAO.deleteTempEltCtrwDcmApdAll(ecdaVO);
//			System.out.println("첨부파일 삭제 => " + cnt);
			
			// 부가전자계약
			AddEltCtrwDtlVO aecdVO = new AddEltCtrwDtlVO();
			aecdVO.setELT_CTRW_NO(ncvo.getELT_CTRW_NO());
			cnt += anwEltCtrwDrupDAO.deleteAddEltCtrwDtl(aecdVO);
//			System.out.println("부가전자계약 삭제 => " + cnt);
			
			// 약정서
			PmiwDtlVO pdVO = new PmiwDtlVO();
			pdVO.setELT_CTRW_NO(ncvo.getELT_CTRW_NO());
			pdVO.setCHG_SQNO(ncvo.getCHG_SQNO());
			cnt += anwEltCtrwDrupDAO.deletePmiwDtl(pdVO);
//			System.out.println("약정서 삭제 => " + cnt);
			
			// 행사료약정서
			EvtAmPmiwVO eapVO = new EvtAmPmiwVO();
			eapVO.setELT_CTRW_NO(ncvo.getELT_CTRW_NO());
			eapVO.setCHG_SQNO(ncvo.getCHG_SQNO());
			cnt += anwEltCtrwDrupDAO.deleteEvtAmPmiw(eapVO);
//			System.out.println("행사료약정서 삭제 => " + cnt);
			
			// 대량거래수수료약정서
			LgqtTrFeePmiwVO ltfpVO = new LgqtTrFeePmiwVO();
			ltfpVO.setELT_CTRW_NO(ncvo.getELT_CTRW_NO());
			cnt += anwEltCtrwDrupDAO.deleteLgqtTrFeePmiw(ltfpVO);
//			System.out.println("대량거래수수료약정서 삭제 => " + cnt);
			
			// 납품 업체 종업원 파견 약정서
			DlvgCompEmpDspcPmiwVO dcedpVO = new DlvgCompEmpDspcPmiwVO();
			dcedpVO.setELT_CTRW_NO(ncvo.getELT_CTRW_NO());
			dcedpVO.setCHG_SQNO(ncvo.getCHG_SQNO());
			cnt += anwEltCtrwDrupDAO.deleteDlvgCompEmpDspcPmiw(dcedpVO);
//			System.out.println("납품 업체 종업원 파견 약정서 삭제 => " + cnt);
			
			// 파견인원 근무기간 약정서
			DspcPerWrkPrdPmiwVO dpwppVO = new DspcPerWrkPrdPmiwVO();
			dpwppVO.setELT_CTRW_NO(ncvo.getELT_CTRW_NO());
			dpwppVO.setCHG_SQNO(ncvo.getCHG_SQNO());
			cnt += anwEltCtrwDrupDAO.deleteDspcPerWrkPrdPmiw(dpwppVO);
//			System.out.println("파견인원 근무기간 약정서 삭제 => " + cnt);
			
			// 특약서
			SctrwDtlVO sdVO = new SctrwDtlVO();
			sdVO.setELT_CTRW_NO(ncvo.getELT_CTRW_NO());
			sdVO.setCHG_SQNO(ncvo.getCHG_SQNO());
			cnt += anwEltCtrwDrupDAO.deleteSctrwDtl(sdVO);
//			System.out.println("특약서 삭제 => " + cnt);
			
			// 특약서 정상 마진율
			SctrwNmlMrgnRtVO snmrVO = new SctrwNmlMrgnRtVO();
			snmrVO.setELT_CTRW_NO(ncvo.getELT_CTRW_NO());
			snmrVO.setCHG_SQNO(ncvo.getCHG_SQNO());
			cnt += anwEltCtrwDrupDAO.deleteSctrwNmlMrgnRt(snmrVO);
//			System.out.println("특약서 정상 마진율 삭제 => " + cnt);
			
			// 특약서 계약 마진율
			SctrwCtrMrgnRtVO scmrVO = new SctrwCtrMrgnRtVO();
			scmrVO.setELT_CTRW_NO(ncvo.getELT_CTRW_NO());
			scmrVO.setCHG_SQNO(ncvo.getCHG_SQNO());
			cnt += anwEltCtrwDrupDAO.deleteSctrwCtrMrgnRt(scmrVO);
//			System.out.println("특약서 계약 마진율 삭제 => " + cnt);
			
			// 특약서 전체 예상 판촉 비용
			SctrwAllXpcPmtnCstVO saxpcVO = new SctrwAllXpcPmtnCstVO();
			saxpcVO.setELT_CTRW_NO(ncvo.getELT_CTRW_NO());			
			cnt += anwEltCtrwDrupDAO.deleteSctrwAllXpcPmtnCst(saxpcVO);
//			System.out.println("특약서 전체 예상 판촉 비용 삭제 => " + cnt);
			
			// 기타계약서
			EtcEltCtrwVO eecVO = new EtcEltCtrwVO();
			eecVO.setELT_CTRW_NO(ncvo.getELT_CTRW_NO());
			eecVO.setCHG_SQNO(ncvo.getCHG_SQNO());
			cnt += anwEltCtrwDrupDAO.deleteEtcEltCtrw(eecVO);
//			System.out.println("기타계약서 삭제 => " + cnt);
			
			// 거래품목리스트
			CtEtcItemVO etcVO = new CtEtcItemVO();
			etcVO.setELT_CTRW_NO(ncvo.getELT_CTRW_NO());
			etcVO.setCHG_SQNO(ncvo.getCHG_SQNO());
			cnt += anwEltCtrwDrupDAO.deleteEtcItemAll(etcVO);
//			System.out.println("거래품목리스트 삭제 => " + cnt);
			
			// 전자계약이력
			EtcEltNtcVO ntcVO = new EtcEltNtcVO();
			ntcVO.setELT_CTRW_NO(ncvo.getELT_CTRW_NO());
			cnt += anwEltCtrwDrupDAO.deleteEltNtc(ntcVO);
//			System.out.println("전자계약이력 삭제 => " + cnt);
			
			// 전자계약
			cnt += anwEltCtrwDrupDAO.deleteTempEltCtrw(ncvo);
//			System.out.println("전자계약 삭제 => " + cnt);
			
			return cnt;
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
}