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

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.RandomStringUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.config.Configurer;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.exception.ErrorCode;
import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.util.DateUtil;
import com.esum.appetizer.util.FileUtil;
import com.esum.appetizer.util.StringUtil;
import com.nh.escm.ct.eltctrw.dao.EltCtrwDAO;
import com.nh.escm.ct.eltctrw.vo.CtEtcItemVO;
import com.nh.escm.ct.eltctrw.vo.EltCtrwDcmApdVO;
import com.nh.escm.ct.eltctrw.vo.EltCtrwVO;
import  com.nh.escm.pt.usrinf.dao.MbEntDAO;
import com.nh.escm.pt.usrinf.service.SendService;
import com.nh.escm.util.SeqGenUtil;


@Service
public class EltCtrwService  extends AbstractService {
	
	@Autowired
	private  EltCtrwDAO eltCtrwDAO;
	
	@Autowired
	private  MbEntDAO mbEntDAO;
	
	
	@Autowired
	private SendService sendService;
	
	// approveEltCtrwList
	/*
	 * 서명파일 카피, 
	 */
	public boolean approveEltCtrwList(List<EltCtrwVO> listEltCtrwVO, String BUYER_SGNT, String NA_TRPL_SEAL_FLNM, String USER_ID, String USR_TPC) {
		String ischecked;
//		String sqno ;
//		BUYER_SGNT           = mecvo.getBUYER_SGNT(); // 바이어 전자서명. 상태가 9일때만 세팅한다
		
		/*
		 * 바이어 완료처리시 미리 등록된 하나로 유통 직인 파일 참조
		 * file.seal.path=/NHVANDATA/seal
		 * srcDir = Configurer.getProperty("file.temp.path");
		 */
		
		String BUYER_APV_STS = "Y"    ; // 바이어 승인상태
		//FGAT_PRVT_C =  SHA2Maker.encrypt(ELT_CTRW_NO)  ;
		String FGAT_PRVT_C ;

		String COLB_COMP_SEAL_SYS_FLNM 	= "";  // 협력회사 인감 시스템파일 
		// String COLB_COMP_SEAL_APDFLNM 	= "";   // 인감 첨부파일명
		
		// 직인 시스템파일명 임의 생성
		String systemFileName ;
		String STS = "A"; // 완료 (전자서명)
		
		for(EltCtrwVO eltCtrwVO : listEltCtrwVO) {
			// 계약서별 바이어 직인파일명 생성
			systemFileName = RandomStringUtils.randomAlphabetic(10)+System.currentTimeMillis();
			
			eltCtrwVO.setFS_RGM(USER_ID);
			eltCtrwVO.setLS_CHGM(USER_ID);

			ischecked = eltCtrwVO.getISCHECKED();
			
			FGAT_PRVT_C = "NH" + eltCtrwVO.getCHG_SQNO() + eltCtrwVO.getELT_CTRW_NO() ;   // 54	위변조방지코드
			
			String BUYER_NA_TRPL_SEAL_FLNM = NA_TRPL_SEAL_FLNM;  // 등록직인파일명
			String BUYER_SEAL_APDFLNM = "하나로유통 등록직인";
			String srcDirHanaro = Configurer.getProperty("file.seal.path");
			String dstDir = Configurer.getProperty("file.realElt.path");
			
			if ("1".equals(ischecked)){
				// 체크된 경우 승인
				logger.debug("승인  " + ischecked );
				logger.debug("BUYER_SGNT  " + BUYER_SGNT );
				
				if (!"Y".equals(eltCtrwVO.getSEAL_OMIT_YN())) {
					// 서명파일 카피
					copySealFile(srcDirHanaro, BUYER_NA_TRPL_SEAL_FLNM, dstDir, systemFileName, BUYER_SGNT);
				} else {
					BUYER_NA_TRPL_SEAL_FLNM = null;
					BUYER_SEAL_APDFLNM = null;
					systemFileName = null;
				}
				
				// 이력 등록
				insertEtcEltNtc(eltCtrwVO.getELT_CTRW_NO(), eltCtrwVO.getMN_CTRW_KD(), STS, "계약서 최종서명", "계약서가 최종서명 되었습니다.", USR_TPC, "0", null, "0", null, USER_ID);
				
				// BUYER_SGNT
				// 전자서명 업데이트, 상태코드, 인감파일, 전자서명 
				int rstUpdate = updateEltCtrwDcmApd(
						     eltCtrwVO.getELT_CTRW_NO()
							, COLB_COMP_SEAL_SYS_FLNM // COLB_COMP_SGNT
							, BUYER_APV_STS  //BUYER_APV_STS
							, FGAT_PRVT_C //  위변조 발지코드
							, eltCtrwVO.getCHG_SQNO()  
							, STS  // 9  바이어승인
							, USER_ID
							, ""    //COLB_COMP_SEAL_SYS_FLNM
							, ""    //COLB_COMP_SEAL_APDFLNM
							, BUYER_SEAL_APDFLNM // 바이어직인파일명
							, systemFileName             // 계약서명 직인파일 저장명칭  eltCtrwVO.getBUYER_SEAL_SYS_FLNM()  
							, BUYER_SGNT                // 바이어 전자서명
						) ;
				
				// 상품본부 계약서일 때 이메일 및 문자 발송
				String mnCtrwKd = eltCtrwVO.getMN_CTRW_KD();
				if (("1".equals(mnCtrwKd) || "12".equals(mnCtrwKd) || "51".equals(mnCtrwKd)) && rstUpdate > 0) {
					List<Map<String, Object>> eltCtrwInfoList = eltCtrwDAO.retrieveEltCtrwInfoList(eltCtrwVO.getELT_CTRW_NO(), eltCtrwVO.getCHG_SQNO());

					String EMAIL = StringUtil.toString(eltCtrwInfoList.get(0).get("EMAIL"));
					if (EMAIL != null && EMAIL.length() > 0) {
						int SEQIDX = SeqGenUtil.getEmailSeq("EMAIL").intValue();
						String BUYER_EMAIL = StringUtil.toString(eltCtrwInfoList.get(0).get("BUYER_EMAIL"));
						if (BUYER_EMAIL == null || BUYER_EMAIL.length() == 0) {
							BUYER_EMAIL = "dearmrhyun@nonghyup.com";
						}
							
						String BUYER_NM = StringUtil.toString(eltCtrwInfoList.get(0).get("BUYER_NM"));
						
						String CTR_CHRR = StringUtil.toString(eltCtrwInfoList.get(0).get("CTR_CHRR"));					
						String CTR_ST_DT = DateUtil.getYYYYMMDD(StringUtil.toString(eltCtrwInfoList.get(0).get("CTR_ST_DT"))+"000000");
						String CTR_ED_DT = DateUtil.getYYYYMMDD(StringUtil.toString(eltCtrwInfoList.get(0).get("CTR_ED_DT"))+"000000");
						
						String TINM = "㈜농협하나로유통 전자계약 완료 안내";
						String QRY = "SSV:" + EMAIL;
						String NEWMAILFROM = "\"" + BUYER_NM + "\"<" + BUYER_EMAIL + ">";
						String NEWMAILTO = "\"" + CTR_CHRR + "\"<" + EMAIL + ">";
						String REPLYTO = Configurer.getProperty("emailSender.replyTo");
						String ERRORSTO = Configurer.getProperty("emailSender.errorsTo");
						String SDATE = DateUtil.getCurrentDate("yyyyMMddHHmmss"); // 메일의 발송 날짜를 나타내는 필드입니다.
						String TDATE = DateUtil.getCurrentDate("yyyyMMddHHmmss"); // 메일의 수신 확인 종료 시각을 나타내는 필드입니다.
						
						List<Map<String, Object>> mailList=  eltCtrwDAO.retrieveEltCtrwMailList();
						
						String CTRW_CNTN = StringUtil.toString(mailList.get(0).get("CTRW_CNTN"));
						String CTR_DT = CTR_ST_DT+" ~ "+CTR_ED_DT;
						CTRW_CNTN = CTRW_CNTN.replace("00.00.00 ~ 00.00.00", CTR_DT);
						CTRW_CNTN = CTRW_CNTN.replace("계약 협력사", eltCtrwInfoList.get(0).get("MTALNM").toString());
						
						mbEntDAO.insertEmailSend(SEQIDX ,TINM ,QRY	,NEWMAILFROM ,NEWMAILTO	,REPLYTO ,ERRORSTO ,SDATE ,TDATE ,"0" ," " ,"1" ,"0" ,CTRW_CNTN ,"1");
					}	
					
					String BUYER_HP = StringUtil.toString(eltCtrwInfoList.get(0).get("BUYER_MPNO"));
					if (BUYER_HP != null && BUYER_HP.length() > 0) {
						if (isInteger(BUYER_HP)) {
							String SUBJECT = "";
							String MTALNM = StringUtil.toString(eltCtrwInfoList.get(0).get("MTALNM"));
							String SMS_MSG = MTALNM + "에 대한 전자계약이 완료되었습니다. 2영업일 내 계약체결보고를 진행하시기 바랍니다.";
							String CALLBACK = Configurer.getProperty("smsSender.callback");

							sendService.sendMms(BUYER_HP, SMS_MSG, SUBJECT, CALLBACK);
						}
					}
				}
				// 첨부파일 테이블 이동 (IN_PRG => CPL)
				// 스레드 처리를 위해 controller의 senddata 이후로 옮김
				/*
				final EltCtrwDcmApdVO dcmVo = new EltCtrwDcmApdVO();
				dcmVo.setELT_CTRW_NO(eltCtrwVO.getELT_CTRW_NO());
				dcmVo.setCHG_SQNO(eltCtrwVO.getCHG_SQNO());
				dcmVo.setAPDFL_STS("C");
				
				updateDcmApdPosition(dcmVo); // 상태값 변경(I => C)
				moveDcmApdToCpl(dcmVo); // 완료테이블 복사
				deleteDcmApdIng(dcmVo); // 진행테이블 삭제
				*/
			}else{
				logger.debug("approveEltCtrwList  = >> 바이어승인 제외" +  ""    );
			}

		} // for
		
		return true;
	}
	
	/*전자 계약서 신규 저장*/
	public boolean saveEltCtrw(EltCtrwVO mecvo){
		try {
			String ELT_CTRW_NO = mecvo.getELT_CTRW_NO();
			String CTRW_KDC = mecvo.getCTRW_KDC();

			if (CTRW_KDC.length() == 1) {
				CTRW_KDC = "10" + CTRW_KDC;
			} else {
				CTRW_KDC = "1" + CTRW_KDC;
			}

			String SMS_NATV_NO = "";
			String EMAIL_NATV_NO = "";
			String MPNO = "";
			String STS = mecvo.getSTS();
			String TMPSTS = mecvo.getTMP_STS();
			String CHG_SQNO = mecvo.getCHG_SQNO();
			String TINM = mecvo.getTINM();
			String CNTN = mecvo.getCNTN();
			
			String RLTM_NTC_SMS = mecvo.getRLTM_NTC_SMS();
			String RLTM_NTC_EMAIL = mecvo.getRLTM_NTC_EMAIL();

			String COLB_COMP_SEAL_SYS_FLNM = mecvo.getCOLB_COMP_SEAL_SYS_FLNM();
			String COLB_COMP_SEAL_APDFLNM = mecvo.getCOLB_COMP_SEAL_APDFLNM();
			
			// String BUYER_SEAL_APDFLNM 	= mecvo.getBUYER_SEAL_APDFLNM() ;
			// String BUYER_SEAL_SYS_FLNM 	= mecvo.getBUYER_SEAL_SYS_FLNM() ;
			// String BUYER_SGNT           =  ""; // mecvo.getBUYER_SGNT(); // 바이어 전자서명. 상태가 9일때만 세팅한다
			// String BUYER_NA_TRPL_SEAL_FLNM = mecvo.getBUYER_NA_TRPL_SEAL_FLNM(); // 등록된 직인파일명

			String USR_TPC = mecvo.getUSR_TPC();
			String USR_ID = mecvo.getLS_CHGM();
			String COLB_COMP_SGNT = "";
			String BUYER_APV_STS = mecvo.getBUYER_APV_STS();
			String FGAT_PRVT_C = ""; // 위변조 방지 코드
		
			String CALLBACK = "";
			String from_MB_ID_NM = "";
			String to_MB_ID_NM = "";

			String srcDir = Configurer.getProperty("file.temp.path");
			String dstDir = Configurer.getProperty("file.realElt.path");
			String sep = File.separator;
			
			if ("1".equals(STS)) {
				// 1 계약서작성
				COLB_COMP_SGNT = mecvo.getCOLB_COMP_SGNT();

				if ("Y".equals(BUYER_APV_STS) && "2".equals(TMPSTS)) {
					STS = "9";
					FGAT_PRVT_C = "NH" + CHG_SQNO + ELT_CTRW_NO;
				} else {
					// BUYER_SEAL_APDFLNM = "" ;
					// BUYER_SEAL_SYS_FLNM = "" ;
				}

				if (!StringUtils.isEmpty(mecvo.getCOLB_COMP_SEAL_SYS_FLNM())) {
					try {
						logger.debug("업데이트 srcDir [" + srcDir + "] dstDir [" + dstDir + "] ecda.getSYS_FLNM() [" + mecvo.getCOLB_COMP_SEAL_SYS_FLNM() + "]");
						FileUtil.moveFile(srcDir, dstDir, mecvo.getCOLB_COMP_SEAL_SYS_FLNM());
					} catch (IOException e) {
						logger.error(e.getMessage(), e);
					}
				}

				// 계약 기간 일관변결, 계약문구 일괄변경일 문구 변경 경우 협력업체 서명만으로 계약이 완료된다.
				// if ("5".equals(TMPSTS) || "6".equals(TMPSTS) || "7".equals(TMPSTS)){
				// STS = "9";
				// }
			} else if ("2".equals(STS)) {
				// 2 협력업체서명
				COLB_COMP_SGNT = mecvo.getCOLB_COMP_SGNT(); // 공인인증서 서명 데이

				if ("Y".equals(BUYER_APV_STS)) {
					STS = "9";
					FGAT_PRVT_C = "NH" + CHG_SQNO + ELT_CTRW_NO;
				} else {
					// BUYER_SEAL_APDFLNM = "" ;
					// BUYER_SEAL_SYS_FLNM = "" ;
				}

				if (!StringUtils.isEmpty(mecvo.getCOLB_COMP_SEAL_SYS_FLNM())) {
					try {
						logger.debug("업데이트 srcDir [" + srcDir + "] dstDir [" + dstDir + "] ecda.getSYS_FLNM() [" + mecvo.getCOLB_COMP_SEAL_SYS_FLNM() + "]");
						FileUtil.moveFile(srcDir, dstDir, mecvo.getCOLB_COMP_SEAL_SYS_FLNM());
					} catch (IOException e) {
						logger.error(e.getMessage(), e);
					}
				}

				// 계약 기간 일관변결, 계약문구 일괄변경일 문구 변경 경우 협력업체 서명만으로 계약이 완료된다.
				if ("5".equals(TMPSTS) || "6".equals(TMPSTS) || "7".equals(TMPSTS)) {
					STS = "9";
				}
			} else if ("9".equals(STS)) {
				// 9 바이어승인
				/*
				 * 바이어 완료처리시 미리 등록된 하나로 유통 직인 파일 참조
				 * file.seal.path=/NHVANDATA/seal
				 * srcDir = Configurer.getProperty("file.temp.path");
				 */

				BUYER_APV_STS = "Y";
				FGAT_PRVT_C = "NH" + CHG_SQNO + ELT_CTRW_NO;

				COLB_COMP_SEAL_SYS_FLNM = ""; // 협력회사 인감 시스템파일
				COLB_COMP_SEAL_APDFLNM = ""; // 인감 첨부파일명

				/*
				 * 전자서명 및 직인이미지 파일 등록은 일괄 서명 화면에서 한다.
				 *  
				BUYER_SGNT           = mecvo.getBUYER_SGNT(); // 바이어 전자서명. 상태가 9일때만 세팅한다

				try {
					logger.debug("업데이트 srcDirHanaro ["+  srcDirHanaro +"] BUYER_NA_TRPL_SEAL_FLNM [" + BUYER_NA_TRPL_SEAL_FLNM + "] dstDir ["+  dstDir +"] ecda.getSYS_FLNM() ["+  mecvo.getBUYER_SEAL_SYS_FLNM() + "]"  );
					logger.debug("BUYER_SGNT ===================== \n" + BUYER_SGNT);
					
					// 하나로 유통의 직인파일명을   TB_TR_TRPL_CIF 테이블의 NA_TRPL_SEAL_FLNM 로 파꾼다. 수산부 축산부 고려 
					FileUtil.copyFile(srcDirHanaro, BUYER_NA_TRPL_SEAL_FLNM, dstDir, mecvo.getBUYER_SEAL_SYS_FLNM()); 

				} catch (IOException e) {
					logger.error(e.getMessage(), e);
				}
				*/
			}else if("3".equals(STS)  || "4".equals(STS)  ||  "8".equals(STS)){
				// 3 재검토요청, 4 보완, 8 거절
				COLB_COMP_SGNT = "";
				BUYER_APV_STS = "";
				FGAT_PRVT_C = "";
			}
			
			/*
			 * 문자전송 (MMS)
			 * 화면에서 전자서명시 SMS 체크해야 날아감. 협력업체는 막혀있음. 
			 */
			if ("1".equals(mecvo.getRLTM_NTC_SMS())) {
				if ("01".equals(USR_TPC) || "05".equals(USR_TPC)) {
					MPNO = mecvo.getBUYER_MPNO();
				} else if ("02".equals(USR_TPC) || "03".equals(USR_TPC)) {
					MPNO = mecvo.getMPNO();
				}
				int mmsRST = sendService.sendMms(MPNO, CNTN, TINM, CALLBACK);
				SMS_NATV_NO = "" + mmsRST;
			}

			// 이메일 			
			if ("1".equals(mecvo.getRLTM_NTC_EMAIL())) {
				String MAILFROM = "";
				String MAILTO = "";

				if ("01".equals(USR_TPC) || "05".equals(USR_TPC)) {
					from_MB_ID_NM = mecvo.getCEO(); // 받는 사람
					MAILFROM = mecvo.getEMAIL(); // 받는 사람에 해당하는 필드입니다. 형식 : "이름"<이메일>

					to_MB_ID_NM = mecvo.getBUYER_NM(); // 보내는 사람
					MAILTO = mecvo.getBUYER_EMAIL(); // 보내는 사람에 해당하는 필드입니다. 형식 : "이름"<이메일>

					// MAILFROM = "\"" + mecvo.getBUYER_NM() +"\"<"+ mecvo.getBUYER_EMAIL() + ">";  //보내는 사람에 해당하는 필드입니다. 형식 : "이름"<이메일>
				    // MAILTO   = "\"" + mecvo.getCEO() +"\"<"+ mecvo.getEMAIL() + ">";                 //받는 사람에 해당하는 필드입니다.  형식 : "이름"<이메일>
				} else if ("02".equals(USR_TPC) || "03".equals(USR_TPC)) {
					MAILFROM = mecvo.getBUYER_EMAIL(); // 보내는 사람에 해당하는 필드입니다. 형식 : "이름"<이메일>
					from_MB_ID_NM = mecvo.getBUYER_NM(); // 보내는 사람

					to_MB_ID_NM = mecvo.getCEO(); // 받는 사람
					MAILTO = mecvo.getEMAIL(); // 받는 사람에 해당하는 필드입니다. 형식 : "이름"<이메일>
				}

				String SDATE = DateUtil.getCurrentDate("yyyyMMddHHmmss"); // 메일의 발송 날짜를 나타내는 필드입니다.
				String TDATE = DateUtil.getCurrentDate("yyyyMMddHHmmss"); // 메일의 수신 확인 종료 시각을 나타내는 필드입니다.
				String TYPE = "0"; // 0: 일반메일 1: html + text 메일 2: 보안메일

				int emailRst = sendService.sendEltCtrwEmail(TINM, MAILFROM, MAILTO, SDATE, TDATE, CNTN, TYPE, from_MB_ID_NM, to_MB_ID_NM);
				EMAIL_NATV_NO = "" + emailRst;
			}
			
			// 전자 계약 상담 통보 Insert
			insertEtcEltNtc(ELT_CTRW_NO, CTRW_KDC, STS, TINM, CNTN, USR_TPC, RLTM_NTC_SMS, SMS_NATV_NO, RLTM_NTC_EMAIL, EMAIL_NATV_NO, USR_ID);
						
			/* 메인 상태값 업데이트 */
			// logger.debug("FGAT_PRVT_C 3  =>>   " + FGAT_PRVT_C);
			
			// 전자서명, 인감파일 업데이트
			updateEltCtrwDcmApd(ELT_CTRW_NO
					            , COLB_COMP_SGNT
					            , BUYER_APV_STS
					            , FGAT_PRVT_C
					            , CHG_SQNO
					            , STS
					            , USR_ID 
					            , COLB_COMP_SEAL_SYS_FLNM 
					            , COLB_COMP_SEAL_APDFLNM
					            , "" // BUYER_SEAL_APDFLNM 
					            , "" //BUYER_SEAL_SYS_FLNM
					            , "" //BUYER_SGNT
					            );
			
			// 문자전송(바이어승인 시 업무담당자 발송)
			if ("9".equals(STS)) {
				String buyerDsc = eltCtrwDAO.retrieveEltBuyerDsc(mecvo.getCTRW_KDC());
				
				// 상품본부 한정(BUYER_DSC 11)
				if ("11".equals(buyerDsc)) {
					int cnt = eltCtrwDAO.retrieveNotAprvEltCtrwCount(buyerDsc, true);
					if (cnt > 0) {
						String approveMsg = String.format("바이어승인이 완료된 계약서가 %d건 있습니다.", cnt);
						
						List<Map<String, Object>> mngList = eltCtrwDAO.retrieveAprvSmsManagerList(buyerDsc);
						if (mngList.size() > 0) {
							for (Map<String, Object> vo : mngList) {
								String temp = (String) vo.get("RMK");
								if (!StringUtils.isEmpty(temp)) {
									String[] list = temp.split(","); // 콤마로 구분된 대상자 목록
									for (String s : list) {
										String[] info = s.split("#"); // #으로 구분된 대상자 정보 이름#연락처
										if (info.length == 2) {
//											sendService.sendMms(info[1], approveMsg, "전자계약 바이어승인 알림", CALLBACK); // MMS
											sendService.sendSms(info[1], approveMsg, info[0]); // SMS
										}
									}
								}
							}
						}
					}
				}
			}

			//첨부파일 등록
			if (mecvo.getEltCtrwDcmApdVOList() != null && mecvo.getEltCtrwDcmApdVOList().size() > 0) {
				for (EltCtrwDcmApdVO ecda : mecvo.getEltCtrwDcmApdVOList()) {
					switch (ecda.getDML_CODE()) {
					case "1":
						try {
							logger.debug("입력 srcDir [" + srcDir + "] dstDir [" + dstDir + "] ecda.getSYS_FLNM() [" + ecda.getSYS_FLNM() + "]");
							FileUtil.moveFile(srcDir, dstDir, ecda.getSYS_FLNM() /* (SYSTEMFILENAME) */ );
						} catch (IOException e) {
							logger.error(e.getMessage(), e);
						}
						insertDcmStylAmn(ecda);
						break;
					case "2":
						try {
							logger.debug("업데이트 srcDir [" + srcDir + "] dstDir [" + dstDir + "] ecda.getSYS_FLNM() [" + ecda.getSYS_FLNM() + "]");
							
							// 스레드 처리를 위해 controller의 senddata 이후로 옮김
//							byte[] blob = FileUtil.readToByte(srcDir + File.separator + ecda.getSYS_FLNM());
//							System.out.println("[ELT_TEST] File for BLOB Size : " + blob.length);
//							ecda.setAPDFL_DATA(blob);
							
							FileUtil.moveFile(srcDir, dstDir, ecda.getSYS_FLNM());
							updateDcmStylAmn(ecda);
//							int exist = existDcmApd(ecda);
//							if (exist == 0) {
//								insertDcmApdIng(ecda);
//							} else {
//								updateDcmApdIng(ecda);
//							}
						} catch (IOException e) {
							logger.error(e.getMessage(), e);
						}
						break;
					case "4":
						FileUtil.deleteFile(dstDir + sep + ecda.getSYS_FLNM());
						deleteDcmStylAmn(ecda);
//						deleteDcmApdIng(ecda);
						break;
					default:
						// logger.error("EditType of Notice EltCtrw don't existed!! ");
						break;
					} // switch
				} // for
			} // if
			return true;
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/*전자 계약서 신규 저장*/
	public boolean saveEltCtrwApd(EltCtrwVO mecvo){
		try{
			String ELT_CTRW_NO		= mecvo.getELT_CTRW_NO();
			String BIGO				= mecvo.getBIGO();
			String LS_CHGM			= mecvo.getLS_CHGM();
			String FS_RGM			= mecvo.getFS_RGM();
			
			String srcDir = Configurer.getProperty("file.temp.path");
			String dstDir = Configurer.getProperty("file.realElt.path");
			String sep = File.separator;
			
			updateEltCtrwApd(ELT_CTRW_NO,BIGO, LS_CHGM, FS_RGM);
			//첨부파일 삭제 후 일괄 등록한다.			
			deleteEltCtrwApd(ELT_CTRW_NO);

			//첨부파일 등록			
			if(mecvo.getEltCtrwDcmApdVOList() != null && mecvo.getEltCtrwDcmApdVOList().size() > 0){
				for(EltCtrwDcmApdVO ecda : mecvo.getEltCtrwDcmApdVOList()){
					
					insertEltCtrwApd(ecda);
					
					try {
						File f = new File(dstDir + sep + ecda.getSYS_FLNM());
						if(!f.exists()){
							
							FileUtil.moveFile(srcDir, dstDir, ecda.getSYS_FLNM());
						}
						
					} catch (IOException e) {
						logger.error(e.getMessage(), e);
					}

					//FileUtil.deleteFile(dstDir + sep + ecda.getSYS_FLNM());
				}
			}
			
			return true;
			
			
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/**
	 * 전자계약 첨부파일 중간 저장
	 * @param mecvo
	 */
	public void saveEltCtrwAtch(EltCtrwVO mecvo) {
		String srcDir = Configurer.getProperty("file.temp.path");
		String dstDir = Configurer.getProperty("file.realElt.path");
		String sep = File.separator;

		if (mecvo.getEltCtrwDcmApdVOList() != null && mecvo.getEltCtrwDcmApdVOList().size() > 0) {
			for (EltCtrwDcmApdVO ecda : mecvo.getEltCtrwDcmApdVOList()) {
				switch (ecda.getDML_CODE()) {
				case "1":
					try {
						FileUtil.moveFile(srcDir, dstDir, ecda.getSYS_FLNM());
					} catch (IOException e) {
						logger.error(e.getMessage(), e);
					}
					insertDcmStylAmn(ecda);
					break;
				case "2":
					try {
						FileUtil.moveFile(srcDir, dstDir, ecda.getSYS_FLNM());
						updateDcmStylAmn(ecda);
					} catch (IOException e) {
						logger.error(e.getMessage(), e);
					}
					break;
				case "4":
					FileUtil.deleteFile(dstDir + sep + ecda.getSYS_FLNM());
					deleteDcmStylAmn(ecda);
					break;
				default:
					break;
				}
			}
		}
	}
	
	/* 전자계약_첨부파일 등록 (파일추가) */
	public int insertDcmStylAmn(EltCtrwDcmApdVO ncvo) {
		try{
			return eltCtrwDAO.insertDcmStylAmn(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/* 전자계약_첨부파일 updae */
	public int updateDcmStylAmn(EltCtrwDcmApdVO ncvo) {
		try{
			return eltCtrwDAO.updateDcmStylAmn(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	
	/* 전자계약_첨부파일 삭제 */
	public int deleteDcmStylAmn(EltCtrwDcmApdVO ncvo) {
		try{
			return eltCtrwDAO.deleteDcmStylAmn(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	
	
	
	
	
	
	public List<EltCtrwVO> retrieveSubEltCtrwList(String CBO_CTRW, String CAL_FROM, String CAL_TO, String CBO_STS, String CBO_CONTDAY, String EDT_BUYER_BLG  ,String NA_TRPL_C) {
		try {
			List<EltCtrwVO> rscList =  eltCtrwDAO.retrieveSubEltCtrwList(CBO_CTRW, CAL_FROM, CAL_TO, CBO_STS, CBO_CONTDAY, EDT_BUYER_BLG,NA_TRPL_C);			
			return rscList;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public List<EltCtrwVO> retrieveSubEltCtrwPrgStsList(String CBO_CTRW, String CAL_FROM, String CAL_TO, String CBO_STS, String CBO_CONTDAY, String EDT_BUYER_BLG  ,String NA_TRPL_C) {
		try {
			List<EltCtrwVO> rscList =  eltCtrwDAO.retrieveSubEltCtrwPrgStsList(CBO_CTRW, CAL_FROM, CAL_TO, CBO_STS, CBO_CONTDAY, EDT_BUYER_BLG,NA_TRPL_C);
			return rscList;
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public int retrieveEltCtrwListCount(String CBO_CONTDAY, String CAL_FROM, String CAL_TO, String EDT_KD, String CBO_KD, String FV_STS, String FV_MNCTRWKD , String BUYER_NA_TRPL_C ,String BUYER_ENO,String BUYER_ID,String BUYER_NM,String BUYER_DSC, String APV_STS, String USR_TPC, String ELT_AUTH_DSC, String MN_CTRW_DSN, String BUYER_GLN) {
		try {
			return eltCtrwDAO.retrieveEltCtrwListCount(CBO_CONTDAY ,CAL_FROM,CAL_TO,EDT_KD,CBO_KD, FV_STS, FV_MNCTRWKD ,BUYER_NA_TRPL_C, BUYER_ENO,BUYER_ID,BUYER_NM,BUYER_DSC,APV_STS,USR_TPC,ELT_AUTH_DSC,MN_CTRW_DSN,BUYER_GLN);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public List<Map<String, Object>> retrieveEltCtrwList(String CBO_CONTDAY, String CAL_FROM, String CAL_TO, String EDT_KD, String CBO_KD, String FV_STS, String FV_MNCTRWKD , String BUYER_NA_TRPL_C ,String BUYER_ENO,String BUYER_ID,String BUYER_NM,String BUYER_DSC, String APV_STS, String USR_TPC, String ELT_AUTH_DSC, String MN_CTRW_DSN, String BUYER_GLN, int start, int end) {
		try {
			return eltCtrwDAO.retrieveEltCtrwList(CBO_CONTDAY ,CAL_FROM,CAL_TO,EDT_KD,CBO_KD, FV_STS, FV_MNCTRWKD ,BUYER_NA_TRPL_C, BUYER_ENO,BUYER_ID,BUYER_NM,BUYER_DSC,APV_STS,USR_TPC,ELT_AUTH_DSC, MN_CTRW_DSN, BUYER_GLN, start, end);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}
	
	//전자계약통지 
	public int insertEtcEltNtc(String ELT_CTRW_NO, String CTRW_KDC,  String STS, String TINM,
			String CNTN, String USR_TPC, String RLTM_NTC_SMS, String SMS_NATV_NO, String RLTM_NTC_EMAIL, String EMAIL_NATV_NO,String USR_ID) {
		
	int rst = eltCtrwDAO.insertEtcEltNtc(
			ELT_CTRW_NO,
			CTRW_KDC,
			STS,
			TINM,
			CNTN,
			USR_TPC,
			RLTM_NTC_SMS,
			SMS_NATV_NO,
			RLTM_NTC_EMAIL,
			EMAIL_NATV_NO,
			USR_ID
			);

	return rst;
	}
	
	// 전자서명 업데이트, 상태코드, 인감파일, 전자서명 
	public int updateEltCtrwDcmApd(
				  String ELT_CTRW_NO
				, String COLB_COMP_SGNT
				, String BUYER_APV_STS
				, String FGAT_PRVT_C
				, String CHG_SQNO
				, String STS
				, String USR_ID
				, String COLB_COMP_SEAL_SYS_FLNM
				, String COLB_COMP_SEAL_APDFLNM
				, String BUYER_SEAL_APDFLNM
				, String BUYER_SEAL_SYS_FLNM
				, String BUYER_SGNT
			) 
	{
		
		int rstUp = eltCtrwDAO.updateEltCtrwDcmApd(
				ELT_CTRW_NO,
				COLB_COMP_SGNT,
				BUYER_APV_STS,
				FGAT_PRVT_C,
				CHG_SQNO,
				STS,
				USR_ID,
				COLB_COMP_SEAL_SYS_FLNM,
				COLB_COMP_SEAL_APDFLNM,
				BUYER_SEAL_APDFLNM,
				BUYER_SEAL_SYS_FLNM,
				BUYER_SGNT
				);
		
		return rstUp;
	}
	
	//전자 계약 상담 통보 Update 2
	public int updateEtcEltNtcB(String ELT_CTRW_NO, String SQNO, String STS, String USR_ID) {
		
		int rstUpB = eltCtrwDAO.updateEtcEltNtcB(
				ELT_CTRW_NO,
				SQNO,
				STS,
				USR_ID
				);
		
		return rstUpB;
	}
	
	//전자 계약 상담 통보 파일업로드
	public int insertEtcEltNtcFyn(String ELT_CTRW_NO, String MN_CTRW_KDC,  String BUYER_ENO, String DCM_C,
			String DCM_NM, String ESS_YN, String APDFLNM, String APDFL_SZE, String SYS_FLNM, String USR_ID) {
		
	int rstFyn = eltCtrwDAO.insertEtcEltNtcFyn(
			ELT_CTRW_NO, MN_CTRW_KDC, BUYER_ENO, DCM_C, DCM_NM, ESS_YN, APDFLNM, APDFL_SZE, SYS_FLNM, USR_ID);

	return rstFyn;
	}
	
	//전자 계약 상담 통보 파일업로드 수정
		public int updateEtcEltNtcFyn(String ELT_CTRW_NO, String FSQNO, String APDFLNM, String APDFL_SZE, String SYS_FLNM, String USR_ID) {
			
		int upFyn = eltCtrwDAO.updateEtcEltNtcFyn(ELT_CTRW_NO, FSQNO, APDFLNM, APDFL_SZE, SYS_FLNM, USR_ID);

		return upFyn;
		}
	
	//전자 계약 상담 통보 파일삭제
	public int deleteEtcEltNtcFyn(String ELT_CTRW_NO, String FSQNO,  String DELFILENAME) {
		
	int delFyn = eltCtrwDAO.deleteEtcEltNtcFyn(ELT_CTRW_NO, FSQNO, DELFILENAME);

	return delFyn;
	}
	
	public List<Map<String, Object>> retrieveEltCtrw(String ELT_CTRW_NO  ,String CHG_SQNO) {
		try {
			return eltCtrwDAO.retrieveEltCtrw(ELT_CTRW_NO ,CHG_SQNO );
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}
	
	public List<Map<String, Object>> retrieveEltCtrwKd(String ELT_CTRW_NO , String CHG_SQNO) {
		try {
			return eltCtrwDAO.retrieveEltCtrwKd(ELT_CTRW_NO ,CHG_SQNO );
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}
	
	public List<Map<String, Object>> retrieveEltCtrwNtc(String ELT_CTRW_NO, String CHG_SQNO) {
		try {
			return eltCtrwDAO.retrieveEltCtrwNtc(ELT_CTRW_NO ,  CHG_SQNO);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}
	
	public List<Map<String, Object>> retrieveEltCtrwFileYn(String ELT_CTRW_NO , String CHG_SQNO) {
		try {
			return eltCtrwDAO.retrieveEltCtrwFileYn(ELT_CTRW_NO ,CHG_SQNO );
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}
	
	
	public List<Map<String, Object>> retrieveEltCtrwAmnList(String ELT_CTRW_NO ,String CHG_SQNO) {
		try {
			return eltCtrwDAO.retrieveEltCtrwAmnList(ELT_CTRW_NO ,CHG_SQNO);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}
	
	public List<Map<String, Object>> retrieveEltCtrwDtlList(String ELT_CTRW_NO ,String CHG_SQNO) {
		try {
			return eltCtrwDAO.retrieveEltCtrwDtlList(ELT_CTRW_NO ,CHG_SQNO);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}
	
	public List<Map<String, Object>> retrieveAddEltCtrwDtlList(String ELT_CTRW_NO ,String CHG_SQNO) {
		try {
			return eltCtrwDAO.retrieveAddEltCtrwDtlList(ELT_CTRW_NO ,CHG_SQNO);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}
	
	public List<Map<String, Object>> retrievePmiwDtlList(String ELT_CTRW_NO ,String CHG_SQNO) {
		try {
			return eltCtrwDAO.retrievePmiwDtlList(ELT_CTRW_NO ,CHG_SQNO);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}
	
	public List<Map<String, Object>> retrieveEvtAmPmiwList(String ELT_CTRW_NO ,String CHG_SQNO) {
		try {
			return eltCtrwDAO.retrieveEvtAmPmiwList(ELT_CTRW_NO ,CHG_SQNO);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}	
	
	public List<Map<String, Object>> retrieveLgqtTrFeePmiwList(String ELT_CTRW_NO ,String CHG_SQNO) {
		try {
			return eltCtrwDAO.retrieveLgqtTrFeePmiwList(ELT_CTRW_NO ,CHG_SQNO);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}
	public List<Map<String, Object>> retrieveDlvgCompEmpDspcPmiwList(String ELT_CTRW_NO ,String CHG_SQNO) {
		try {
			return eltCtrwDAO.retrieveDlvgCompEmpDspcPmiwList(ELT_CTRW_NO ,CHG_SQNO);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}	
	
	public List<Map<String, Object>> retrieveDspcPerWrkPrdPmiwList(String ELT_CTRW_NO ,String CHG_SQNO) {
		try {
			return eltCtrwDAO.retrieveDspcPerWrkPrdPmiwList(ELT_CTRW_NO ,CHG_SQNO);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}	
	
	public List<Map<String, Object>> retrieveSctrwDtlList(String ELT_CTRW_NO  ,String CHG_SQNO) {
		try {
			return eltCtrwDAO.retrieveSctrwDtlList(ELT_CTRW_NO ,CHG_SQNO);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}

	public List<Map<String, Object>> retrieveSctrwCtrMrgnRtList(String ELT_CTRW_NO ,String CHG_SQNO) {
		try {
			return eltCtrwDAO.retrieveSctrwCtrMrgnRtList(ELT_CTRW_NO ,CHG_SQNO);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}
	
	public List<Map<String, Object>> retrieveSctrwNmlMrgnRtList(String ELT_CTRW_NO ,String CHG_SQNO) {
		try {
			return eltCtrwDAO.retrieveSctrwNmlMrgnRtList(ELT_CTRW_NO ,CHG_SQNO);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}
	
	public List<Map<String, Object>> retrieveSctrwPmtnEmpeDspcBrkList(String ELT_CTRW_NO ,String CHG_SQNO) {
		try {
			return eltCtrwDAO.retrieveSctrwPmtnEmpeDspcBrkList(ELT_CTRW_NO ,CHG_SQNO);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}	
	
	public List<Map<String, Object>> retrieveSctrwAllXpcPmtnCstList(String ELT_CTRW_NO ,String CHG_SQNO) {
		try {
			return eltCtrwDAO.retrieveSctrwAllXpcPmtnCstList(ELT_CTRW_NO ,CHG_SQNO);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}	
	
	public List<Map<String, Object>> retrieveEtcEltCtrwList(String ELT_CTRW_NO ,String CHG_SQNO) {
		try {
			return eltCtrwDAO.retrieveEtcEltCtrwList(ELT_CTRW_NO ,CHG_SQNO);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}	
	//기존계약 정보 업데이트 
	public int updateEltCtrwApd(String ELT_CTRW_NO, String BIGO, String LS_CHGM, String FS_RGM) {
		int rstUp = eltCtrwDAO.updateEltCtrwApd(ELT_CTRW_NO, BIGO, LS_CHGM, FS_RGM);
	return rstUp;
	}
	//기존계약 파일 삭제 
	public int deleteEltCtrwApd(String ELT_CTRW_NO) {
		int rstUp = eltCtrwDAO.deleteEltCtrwApd(ELT_CTRW_NO);
	return rstUp;
	}
	/* 기존계약_첨부파일 등록 */
	public int insertEltCtrwApd(EltCtrwDcmApdVO ncvo) {
		try{
			return eltCtrwDAO.insertEltCtrwApd(ncvo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public Map<String, Object> retrieveEltCtrwApd(String eltCtrwNo) {
		try {
			Map<String, Object> hm =  eltCtrwDAO.retrieveEltCtrwApd(eltCtrwNo);
			return hm;
			
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public List<EltCtrwDcmApdVO> retrieveEltCtrwApdFileList(String eltCtrwNo) {
		try {
			List<EltCtrwDcmApdVO> flieList =  eltCtrwDAO.retrieveEltCtrwApdFileList(eltCtrwNo);
			return flieList;
			
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	public void updateCancelElt(String eltCtrwNo, String chgSqno, String lsChgm) {
		try {
				eltCtrwDAO.updateCancelElt(eltCtrwNo, chgSqno, lsChgm);
			
		} catch (EmptyResultDataAccessException e) {
			throw new AppetizerException(ErrorCode.NOT_FOUND_DATA, e);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public List<Map<String, Object>> retrievetEtcItemList(String eltCtrwNo, String chgSqno) {
		try {
			return eltCtrwDAO.retrievetEtcItemList(eltCtrwNo, chgSqno);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}

	/*
	 * 거래품목리스트 입력
	 */
	public int insertEtcItem(CtEtcItemVO ctEtcItemVO) {
		// 
		try{
			return eltCtrwDAO.insertEtcItem(ctEtcItemVO);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
		
	}

	/*
	 * 거래품목리스트 주정
	 */

	public int updateEtcItem(CtEtcItemVO ctEtcItemVO) {
		// 
		try{
			return eltCtrwDAO.updateEtcItem(ctEtcItemVO);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public int deleteEtcItem(CtEtcItemVO ctEtcItemVo) {
		// 
		try{
			return eltCtrwDAO.deleteEtcItem(ctEtcItemVo);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public List<Map<String, Object>> retrievePrintItemList(String eltCtrwNo, String chgSqno) {
		try {
			return eltCtrwDAO.retrievePrintItemList(eltCtrwNo, chgSqno);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public List<Map<String, Object>> retrievetPrintItemHeader(String eltCtrwNo, String chgSqno) {
		try {
			return eltCtrwDAO.retrievePrintItemHeader(eltCtrwNo, chgSqno);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}


	public Map<String, Object> retrieveTrplCif(String TRPL_C) {
		
		try {
			return eltCtrwDAO.retrieveTrplCif(TRPL_C);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
		
		
	}

	public boolean copySealFile(String srcDirHanaro, String BUYER_NA_TRPL_SEAL_FLNM, String dstDir, String DIST_SEAL_FLNM, String BUYER_SGNT) {
		/*
		 * 바이어 완료처리시 미리 등록된 하나로 유통 직인 파일 참조
		 * file.seal.path=/NHVANDATA/seal
		 * srcDir = Configurer.getProperty("file.temp.path");
		 */

		// BUYER_APV_STS = "Y" ;
		// FGAT_PRVT_C = SHA2Maker.encrypt(ELT_CTRW_NO) ;
		// FGAT_PRVT_C = "NH" +CHG_SQNO+ ELT_CTRW_NO ;

		// BUYER_SGNT = mecvo.getBUYER_SGNT(); // 바이어 전자서명. 상태가 9일때만 세팅한다

		try {
			logger.debug("업데이트 srcDirHanaro [" + srcDirHanaro + "] BUYER_NA_TRPL_SEAL_FLNM [" + BUYER_NA_TRPL_SEAL_FLNM + "] dstDir [" + dstDir + "] ecda.getSYS_FLNM() [" + DIST_SEAL_FLNM + "]");
			logger.debug("BUYER_SGNT ===================== \n" + BUYER_SGNT);

			// 하나로 유통의 직인파일명을 TB_TR_TRPL_CIF 테이블의 NA_TRPL_SEAL_FLNM 로 파꾼다. 수산부 축산부 고려
			FileUtil.copyFile(srcDirHanaro, BUYER_NA_TRPL_SEAL_FLNM, dstDir, DIST_SEAL_FLNM);
		} catch (IOException e) {
			logger.error(e.getMessage(), e);
			return false;
		}
		return true;
	}
	
	//바이어상태에서 보완으로 변경
	public void supuadate(String eltCtrwNo, String lsChgm) {
		try {
			eltCtrwDAO.supuadate(eltCtrwNo, lsChgm);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
		
	}
	// 전자계약 바이어 변경 신청상태UPDATE
	public int EltupdateStat(EltCtrwVO eltvo) {
		try {
			return eltCtrwDAO.EltupdateStat(eltvo);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
	//변경이력테이블에 저장
	public int insertCtrwchg(EltCtrwVO eltvo) {
		try {
			return eltCtrwDAO.insertCtrwchg(eltvo);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
	//전자계약서 바이어 변경
	public int updateBuyerStat(EltCtrwVO eltvo) {
		try {
			return eltCtrwDAO.updateBuyerStat(eltvo);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
	//변경할 이관테이블의 CHG_NO 조회
	public int searchChgno(EltCtrwVO eltvo) {
		try {
			return eltCtrwDAO.searchChgno(eltvo);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
	//변경완료된 전자계약 이관테이블 update
	public int updateBuyerCtrwchg(EltCtrwVO eltvo) {
		try {
			return eltCtrwDAO.updateBuyerCtrwchg(eltvo);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}

	public List<Map<String, Object>> retrieveChgelt(String BUYER_ENO, String CHECK, String FV_MNCTRWKD, String USR_TPC, String ELT_AUTH_DSC) {
		try {
			return eltCtrwDAO.retrieveChgelt(BUYER_ENO, CHECK, FV_MNCTRWKD, USR_TPC, ELT_AUTH_DSC);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public int deleteCtrwchg(EltCtrwVO eltvo) {
		try {
			return eltCtrwDAO.deleteCtrwchg(eltvo);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}

	public List<Map<String, Object>> retrieveEltCtrwListCh(String CBO_CONTDAY, String CAL_FROM, String CAL_TO, String EDT_KD, String CBO_KD, String FV_STS, String FV_MNCTRWKD , String BUYER_NA_TRPL_C ,String BUYER_INFO,String BUYER_ID,String BUYER_DSC, String BUYER_KD) {
		try {
			return eltCtrwDAO.retrieveEltCtrwListCh(CBO_CONTDAY ,CAL_FROM,CAL_TO,EDT_KD,CBO_KD, FV_STS, FV_MNCTRWKD ,BUYER_NA_TRPL_C, BUYER_INFO,BUYER_ID,BUYER_DSC,BUYER_KD);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}
	
	public List<EltCtrwVO> retrievePopupEltCtrwList(Map<String, Object> param) {
		try {
			return eltCtrwDAO.retrievePopupEltCtrwList(param);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	public List<EltCtrwVO> retrieveRelatedEltCtrw(Map<String, Object> param) {
		try {
			return eltCtrwDAO.retrieveRelatedEltCtrw(param);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	//히스토리에 로그남김
	public int insertEltHst(EltCtrwVO eltvo) {
		try {
			return eltCtrwDAO.insertEltHst(eltvo);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
	
	// 전자계약 신청 페이지 로드시에 바이어 소속 구분
	public List<Map<String, Object>> retrieveEltctrwCDList(String SIMP_TPC, String USR_TPC) {
		try {
			return eltCtrwDAO.retrieveEltctrwCDList(SIMP_TPC, USR_TPC);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
	
	// 모든 계약서들의 데이터셋 가져오기
	public List<Map<String, Object>> retrieveEltctrwDSList(String CD_TYPE, String BUYER_DSC) {
		try {
			return eltCtrwDAO.retrieveEltctrwDSList(CD_TYPE, BUYER_DSC);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}
	
	// 직영점 목록 가져오기
	public List<Map<String, Object>> retrieveEltBranchBzplcList(String type) {
		try {
			return eltCtrwDAO.retrieveEltBranchBzplcList(type);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}
	}

	public void updateColbCompEltSts(String eltCtrwNo, String chgSqno, String lsChgm) {
		try {
			eltCtrwDAO.updateColbCompEltSts(eltCtrwNo, chgSqno, lsChgm);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}

	public List<Map<String, Object>> downloadEltCtrwReport(String CBO_CONTDAY, String CAL_FROM, String CAL_TO, String EDT_KD, String CBO_KD, String FV_STS, String FV_MNCTRWKD , String BUYER_NA_TRPL_C ,String BUYER_ENO,String BUYER_ID,String BUYER_NM,String BUYER_DSC, String APV_STS, String USR_TPC, String ELT_AUTH_DSC) {
		try {
			return eltCtrwDAO.downloadEltCtrwReport(CBO_CONTDAY ,CAL_FROM,CAL_TO,EDT_KD,CBO_KD, FV_STS, FV_MNCTRWKD ,BUYER_NA_TRPL_C, BUYER_ENO,BUYER_ID,BUYER_NM,BUYER_DSC,APV_STS,USR_TPC,ELT_AUTH_DSC);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}

	public List<Map<String, Object>> downloadExcelReportEltDetail(String CBO_CONTDAY, String CAL_FROM, String CAL_TO, String EDT_KD, String CBO_KD, String FV_STS, String FV_MNCTRWKD ,String BUYER_NA_TRPL_C ,String BUYER_ENO,String BUYER_ID,String BUYER_NM, String BUYER_DSC, String APV_STS, String USR_TPC, String ELT_AUTH_DSC) {
		try {
			return eltCtrwDAO.downloadExcelReportEltDetail(CBO_CONTDAY ,CAL_FROM,CAL_TO,EDT_KD,CBO_KD, FV_STS, FV_MNCTRWKD ,BUYER_NA_TRPL_C, BUYER_ENO,BUYER_ID,BUYER_NM,BUYER_DSC,APV_STS,USR_TPC,ELT_AUTH_DSC);
		} catch (DataAccessException e) {			
			throw new AppetizerException(e);
		}	
	}
	
	public int existDcmApd(EltCtrwDcmApdVO ncvo) {
		try {
			return eltCtrwDAO.existDcmApd(ncvo);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public int insertDcmApdIng(EltCtrwDcmApdVO ncvo) {
		try {
			return eltCtrwDAO.insertDcmApdIng(ncvo);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public int updateDcmApdIng(EltCtrwDcmApdVO ncvo) {
		try {
			return eltCtrwDAO.updateDcmApdIng(ncvo);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public int deleteDcmApdIng(EltCtrwDcmApdVO ncvo) {
		try {
			if (StringUtils.isEmpty(ncvo.getELT_CTRW_NO()) || StringUtils.isEmpty(ncvo.getCHG_SQNO())) {
				return -1;
			}
			return eltCtrwDAO.deleteDcmApdIng(ncvo);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public int updateDcmApdPosition(EltCtrwDcmApdVO ncvo) {
		try {
			return eltCtrwDAO.updateDcmApdPosition(ncvo);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public int moveDcmApdToCpl(EltCtrwDcmApdVO ncvo) {
		try {
			return eltCtrwDAO.moveDcmApdToCpl(ncvo);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public List<EltCtrwDcmApdVO> retrieveDcmApdData(EltCtrwDcmApdVO ncvo) {
		try {
			if (StringUtils.isEmpty(ncvo.getELT_CTRW_NO()) || StringUtils.isEmpty(ncvo.getCHG_SQNO())) {
				return null;
			}
			return eltCtrwDAO.retrieveDcmApdData(ncvo);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public static boolean isInteger(String s) { //정수 판별 함수
		try {
	     	Integer.parseInt(s);
	    	return true;
	    } catch(NumberFormatException e) {  //문자열이 나타내는 숫자와 일치하지 않는 타입의 숫자로 변환 시 발생
	    	return false;
	    }
	}
	
	public List<Map<String, Object>> retrieveEltCtrwMailList() {
		try {
			return eltCtrwDAO.retrieveEltCtrwMailList();
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
}