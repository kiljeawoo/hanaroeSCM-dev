package com.nh.escm.ct.eltctrw.controller;

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
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.esum.appetizer.config.Configurer;
import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.util.FileUtil;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.common.vo.SQLNames.PortalSequenceKeySeqName;
import com.nh.escm.ct.eltctrw.service.AnwEltCtrwDrupService;
import com.nh.escm.ct.eltctrw.service.EltCtrwService;
import com.nh.escm.ct.eltctrw.vo.AddEltCtrwDtlVO;
import com.nh.escm.ct.eltctrw.vo.AnwEltCtrwDrupVO;
import com.nh.escm.ct.eltctrw.vo.CtEtcItemVO;
import com.nh.escm.ct.eltctrw.vo.DlvgCompEmpDspcPmiwVO;
import com.nh.escm.ct.eltctrw.vo.DspcPerWrkPrdPmiwVO;
import com.nh.escm.ct.eltctrw.vo.EltCtrwDcmApdVO;
import com.nh.escm.ct.eltctrw.vo.EltCtrwDtlVO;
import com.nh.escm.ct.eltctrw.vo.EtcEltCtrwVO;
import com.nh.escm.ct.eltctrw.vo.EvtAmPmiwVO;
import com.nh.escm.ct.eltctrw.vo.LgqtTrFeePmiwVO;
import com.nh.escm.ct.eltctrw.vo.PmiwDtlVO;
import com.nh.escm.ct.eltctrw.vo.SQLMapNames.EltCtrwStyNames;
import com.nh.escm.ct.eltctrw.vo.SQLMapNames.RegisterNames;
import com.nh.escm.ct.eltctrw.vo.SctrwAllXpcPmtnCstVO;
import com.nh.escm.ct.eltctrw.vo.SctrwCtrMrgnRtVO;
import com.nh.escm.ct.eltctrw.vo.SctrwDtlVO;
import com.nh.escm.ct.eltctrw.vo.SctrwNmlMrgnRtVO;
import com.nh.escm.ct.eltctrw.vo.SctrwPmtnEmpeDspcBrkVO;
import com.nh.escm.pt.blbd.vo.BlbdApdflVO;
import com.nh.escm.util.SeqGenUtil;


@Controller
public class AnwEltCtrwDrupController extends AbstractController {
	
	@Autowired
	private EltCtrwService eltctrwService;
	
	@Autowired
	private AnwEltCtrwDrupService anwEltCtrwDrupService;
	
	@RequestMapping(value = "/rest/ct/eltctrw/insertAnwEltCtrwDrup")
	public void insertAnwEltCtrwDrup(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		PlatformData platformData = new PlatformData();

		try {
			AnwEltCtrwDrupVO ncvo = new AnwEltCtrwDrupVO();
			String dmlCode = "";
		
			DataSet dsR              = requestHelper.getDataSet("ds_register");
			DataSet dsECD            = requestHelper.getDataSet("ds_eltCtrwDtl");
			DataSet dsAECD        	 = requestHelper.getDataSet("ds_addEltCtrwDtl");
			DataSet dsPD             = requestHelper.getDataSet("ds_pmiwDtl");
			DataSet dsEAP            = requestHelper.getDataSet("ds_evtAmPmiw");
			DataSet dsLTFP         	 = requestHelper.getDataSet("ds_lgqtTrFeePmiw");
			DataSet dsDCEDP        	 = requestHelper.getDataSet("ds_dlvgCompEmpDspcPmiw");  // 납품업체 종업원파견 약정서
			DataSet dsDPWPP        	 = requestHelper.getDataSet("ds_dspcPerWrkPrdPmiw");    // 파견인원근무기간 약정서
			                         
			DataSet dsSNMR        	 = requestHelper.getDataSet("ds_sctrwNmlMrgnRt");
			DataSet dsSCMR        	 = requestHelper.getDataSet("ds_sctrwCtrMrgnRt");
			//DataSet dsSPEDB   	 	= requestHelper.getDataSet("ds_sctrwPmtnEmpeDspcBrk");
			DataSet dsSAPC    		 = requestHelper.getDataSet("ds_sctrwAllXpcPmtnCst");
			DataSet dsEEC            = requestHelper.getDataSet("ds_etcEltCtrw");
			DataSet dsSD             = requestHelper.getDataSet("ds_sctrwDtl");
			
			DataSet ds_ctEtcItemList = requestHelper.getDataSet("ds_ctEtcItemList");
//			DataSet dsFile           = requestHelper.getDataSet("ds_file");
			
			// 미리보기(임시저장) 여부_180626
			String tempYn = requestHelper.getParameter("tempYn");
			
			String planFileName = "";
			
			// 전자 계약 번호
			String EltCtrwNo = "";
			
			String mnCtrwKdc = "";
			
			// 전자계약서관리
			if (dsR != null) {
				// logger.debug(dsR.saveXml());
				dmlCode = "";

				// 전자계약서 일련번호 구함.
				EltCtrwNo = SeqGenUtil.getSeq(PortalSequenceKeySeqName.SQ_ELT.name());

				List<AnwEltCtrwDrupVO> listR = requestHelper.getValueObjects(AnwEltCtrwDrupVO.class, dsR);
				ncvo = listR.get(0);
				mnCtrwKdc = ncvo.getMN_CTRW_KD();
				ncvo.setLS_CHGM(requestHelper.getUserID());

				// 1 == INSERT
				// 2 == UPDATE
				// 3 == INSERT/UPDATE
				// 4 == delete

				ncvo.setELT_CTRW_NO(EltCtrwNo);
				ncvo.setBUYER_NA_TRPL_C(requestHelper.getGlnCode());
				ncvo.setBUYER_ENO(requestHelper.getUserID());
				dmlCode = "1";
				ncvo.setFS_RGM(requestHelper.getUserID());
				ncvo.setUSR_TPC(requestHelper.getUserType());
				ncvo.setLS_CHGM(requestHelper.getUserID());
				ncvo.setDML_CODE(dmlCode);

				/*
				 * System.out.println("가져온값 : "+ncvo.getMN_CTRW_KD()); String mntemp = ncvo.getMN_CTRW_KD();
				 * if(mntemp.equals("101")){ mntemp="1"; } System.out.println("방출 값 : " +mntemp);
				 * ncvo.setMN_CTRW_KD(mntemp);
				 */
				if (tempYn == null || "".equals(tempYn)) {
					tempYn = "N";
				}
				ncvo.setTEMP_YN(tempYn);
			}

			// 전자계약서상세
			if (dsECD != null) {
				dmlCode = "";
				// logger.debug(dsECD.saveXml());
				List<EltCtrwDtlVO> tmpECDList = requestHelper.getValueObjects(EltCtrwDtlVO.class, dsECD);
				List<EltCtrwDtlVO> dsECDList = new ArrayList<EltCtrwDtlVO>();
				EltCtrwDtlVO ecdvo;

				for (int i = 0; i < dsECD.getRowCount(); i++) {
					ecdvo = tmpECDList.get(i);
					dmlCode = "1";
					ecdvo.setELT_CTRW_NO(EltCtrwNo);
					ecdvo.setFS_RGM(requestHelper.getUserID());
					ecdvo.setLS_CHGM(requestHelper.getUserID());
					ecdvo.setDML_CODE(dmlCode);
					dsECDList.add(i, ecdvo);

					// 도면파일 이동
					// 상세저장시에 도면파일 이동
					planFileName = ecdvo.getETC49();
					if (planFileName == null) {
						planFileName = "";
					}

					// 도면 파일등록 : temp 폴더에 이미 저장된 파일 이동 . 전자계약서 상세에 별도 등록

					String srcFileName;
					String srcDir = Configurer.getProperty("file.temp.path");
					String dstDir = Configurer.getProperty("file.realElt.path");

					// 파일 위치만 옮기면 된다. 하나만 저장한다
					if (planFileName.length() > 0 && planFileName.equals("") == false) {
						srcFileName = ecdvo.getETC50(); //
						try {
							// 도면파일은 선택하는 순간 temp 폴더로 업로드 되므로 파일만 이동시킨다.
							// 첨부파일명 ETC49 ORGFNAME, 시스템파일명은 ETC50 SYSTEMFILENAME // 매장위치: 시스템파일명
							FileUtil.moveFile(srcDir, dstDir, srcFileName);
						} catch (IOException e) {
							logger.error(e.getMessage(), e);
						}
					}
					// 도면파일 이동 끝
				}
				ncvo.setEltCtrwDtlVoList(dsECDList);

				// 첨부 파일 테이블 생성
				List<EltCtrwDcmApdVO> tmpECDAList = requestHelper.getValueObjects(EltCtrwDcmApdVO.class, dsECD);
				List<EltCtrwDcmApdVO> ecdaList = new ArrayList<EltCtrwDcmApdVO>();
				EltCtrwDcmApdVO ecdavo;

				ecdavo = tmpECDAList.get(0);
				dmlCode = "1";
				ecdavo.setELT_CTRW_NO(EltCtrwNo);
				// ecdavo.setMN_CTRW_KDC(MnCtrwKdc);
				ecdavo.setBUYER_ENO(requestHelper.getUserID());
				ecdavo.setLS_CHGM(requestHelper.getUserID());
				ecdavo.setDML_CODE(dmlCode);
				ecdaList.add(0, ecdavo);

				ncvo.setEltCtrwDcmApdVoList(ecdaList);
			}

			if (ds_ctEtcItemList != null) {
				/*
				 * 판매상품리스트
				 */
				System.out.println("######   " + ds_ctEtcItemList);
				List<CtEtcItemVO> ctEtcItemVoList = requestHelper.getValueObjects(CtEtcItemVO.class, ds_ctEtcItemList);
//				int rowType;
//				String rType;
				CtEtcItemVO ctEtcItemVo;
				String sqno;
				String ischecked;

				for (int i = 0; i < ds_ctEtcItemList.getRowCount(); i++) {
					ctEtcItemVo = ctEtcItemVoList.get(i);
					ctEtcItemVo.setELT_CTRW_NO(EltCtrwNo); // 전자계약번호 저장
					ctEtcItemVo.setFS_RGM(requestHelper.getUserID());
					ctEtcItemVo.setLS_CHGM(requestHelper.getUserID());

//					rowType = ds_ctEtcItemList.getRowType(i);
//					rType = ds_ctEtcItemList.getRowTypeName(i);

					sqno = ds_ctEtcItemList.getString(i, "SQNO");
					ischecked = ds_ctEtcItemList.getString(i, "ISCHECKED");
					if (sqno == null || ischecked.equals("")) {
						if("152".indexOf(mnCtrwKdc) != -1){
							if (ctEtcItemVo.getITEM_CODE().equals("A")){
								// 도면파일 이동
								// 상세저장시에 도면파일 이동
								planFileName = ctEtcItemVo.getQTY();
								if (planFileName == null) {
									planFileName = "";
								}
								
								// 도면 파일등록 : temp 폴더에 이미 저장된 파일 이동 . 전자계약서 상세에 별도 등록
	
								String srcFileName;
								String srcDir = Configurer.getProperty("file.temp.path");
								String dstDir = Configurer.getProperty("file.realElt.path");
								
								// 파일 위치만 옮기면 된다. 하나만 저장한다
								if (planFileName.length() > 0 && planFileName.equals("") == false) {
									srcFileName = ctEtcItemVo.getUPR(); //
									try {
										// 도면파일은 선택하는 순간 temp 폴더로 업로드 되므로 파일만 이동시킨다.
										// 첨부파일명 QTY ORGFNAME, 시스템파일명은 UPR SYSTEMFILENAME
										FileUtil.moveFile(srcDir, dstDir, srcFileName);
									} catch (IOException e) {
										logger.error(e.getMessage(), e);
									}
								}
								// 도면파일 이동 끝
							}	
						}

						// 입력
						eltctrwService.insertEtcItem(ctEtcItemVo);
					} else if (sqno.length() > 0) {
						// 수정
						if (ischecked.equals("1")) {
							if("152".indexOf(mnCtrwKdc) != -1){
								if (ctEtcItemVo.getITEM_CODE().equals("A")){
									// 도면파일 이동
									// 상세저장시에 도면파일 이동
									planFileName = ctEtcItemVo.getQTY();
									if (planFileName == null) {
										planFileName = "";
									}
									
									// 도면 파일등록 : temp 폴더에 이미 저장된 파일 이동 . 전자계약서 상세에 별도 등록
	
									String srcFileName;
									String dstDir = Configurer.getProperty("file.realElt.path");
	
									// 파일 위치만 옮기면 된다. 하나만 저장한다
									if (planFileName.length() > 0 && planFileName.equals("") == false) {
										srcFileName = ctEtcItemVo.getUPR(); //
										try {
											// 도면파일은 선택하는 순간 temp 폴더로 업로드 되므로 파일만 이동시킨다.
											// 첨부파일명 QTY ORGFNAME, 시스템파일명은 UPR SYSTEMFILENAME
											FileUtil.deleteFile(dstDir, srcFileName);
										} catch (IOException e) {
											logger.error(e.getMessage(), e);
										}
									}
									// 도면파일 이동 끝
								}	
							}
							eltctrwService.deleteEtcItem(ctEtcItemVo);
						} else if (ischecked.equals("0")) {
							if("152".indexOf(mnCtrwKdc) != -1){
								if (ctEtcItemVo.getITEM_CODE().equals("A")){
									// 도면파일 이동
									// 상세저장시에 도면파일 이동
									planFileName = ctEtcItemVo.getQTY();
									if (planFileName == null) {
										planFileName = "";
									}
									
									// 도면 파일등록 : temp 폴더에 이미 저장된 파일 이동 . 전자계약서 상세에 별도 등록
	
									String srcFileName;
									String srcDir = Configurer.getProperty("file.temp.path");
									String dstDir = Configurer.getProperty("file.realElt.path");
	
									// 파일 위치만 옮기면 된다. 하나만 저장한다
									if (planFileName.length() > 0 && planFileName.equals("") == false) {
										srcFileName = ctEtcItemVo.getUPR(); //
										try {
											// 도면파일은 선택하는 순간 temp 폴더로 업로드 되므로 파일만 이동시킨다.
											// 첨부파일명 QTY ORGFNAME, 시스템파일명은 UPR SYSTEMFILENAME
											FileUtil.moveFile(srcDir, dstDir, srcFileName);
										} catch (IOException e) {
											logger.error(e.getMessage(), e);
										}
									}
									// 도면파일 이동 끝
								}	
							}
							eltctrwService.updateEtcItem(ctEtcItemVo);
						} else {
							logger.debug("saveEtcItemList  = >> 수정삭제 예외" + "");
						}
					} else {
						logger.debug("saveEtcItemList  = >> Row 수정상태 예외." + "");
					}
				} // for
			}

			System.out.println("######   " + dsAECD);
			// 부가전자계약서상세
			if (dsAECD != null) {
				dmlCode = "";
				List<AddEltCtrwDtlVO> tmpAECDList = requestHelper.getValueObjects(AddEltCtrwDtlVO.class, dsAECD);
				List<AddEltCtrwDtlVO> dsAECDList = new ArrayList<AddEltCtrwDtlVO>();
				AddEltCtrwDtlVO aecdvo;

				for (int i = 0; i < dsAECD.getRowCount(); i++) {
					dmlCode = "1";
					aecdvo = tmpAECDList.get(i);
					aecdvo.setELT_CTRW_NO(EltCtrwNo);
					aecdvo.setFS_RGM(requestHelper.getUserID());
					aecdvo.setLS_CHGM(requestHelper.getUserID());

					aecdvo.setDML_CODE(dmlCode);
					dsAECDList.add(i, aecdvo);
				}
				ncvo.setAddEltCtrwDtlVoList(dsAECDList);
			}

			// 약정서상세
			if (dsPD != null) {
				dmlCode = "";
				// logger.debug(dsPD.saveXml());

				List<PmiwDtlVO> tmpPDList = requestHelper.getValueObjects(PmiwDtlVO.class, dsPD);
				List<PmiwDtlVO> dsPDList = new ArrayList<PmiwDtlVO>();
				PmiwDtlVO pdvo;

				for (int i = 0; i < dsPD.getRowCount(); i++) {
					pdvo = tmpPDList.get(i);
					dmlCode = "1";
					pdvo.setELT_CTRW_NO(EltCtrwNo);
					pdvo.setFS_RGM(requestHelper.getUserID());
					pdvo.setLS_CHGM(requestHelper.getUserID());
					pdvo.setDML_CODE(dmlCode);
					dsPDList.add(i, pdvo);
				}
				ncvo.setPmiwDtlVoList(dsPDList);
			}

			// 행사료약정서
			if (dsEAP != null) {
				dmlCode = "";

				int dsEAPcnt = 0;
				// logger.debug(dsEAP.saveXml());
				List<EvtAmPmiwVO> tmpEAPList = requestHelper.getValueObjects(EvtAmPmiwVO.class, dsEAP);
				List<EvtAmPmiwVO> dsEAPList = new ArrayList<EvtAmPmiwVO>();
				EvtAmPmiwVO eapvo;

				for (int i = 0; i < dsEAP.getRowCount(); i++) {
					eapvo = tmpEAPList.get(i);
					dmlCode = "1";
					eapvo.setELT_CTRW_NO(EltCtrwNo);
					eapvo.setFS_RGM(requestHelper.getUserID());
					eapvo.setLS_CHGM(requestHelper.getUserID());
					eapvo.setDML_CODE(dmlCode);
					dsEAPList.add(i, eapvo);

					if (dsEAPcnt != 0) {
						i = dsEAPcnt;
					}
				}
				ncvo.setEvtAmPmiwVoList(dsEAPList);
			}

			// 대량거래수수료약정서
			if (dsLTFP != null) {
				// logger.debug(dsLTFP.saveXml());
				dmlCode = "";

				List<LgqtTrFeePmiwVO> tmpLTFPList = requestHelper.getValueObjects(LgqtTrFeePmiwVO.class, dsLTFP);
				List<LgqtTrFeePmiwVO> dsLTFPList = new ArrayList<LgqtTrFeePmiwVO>();
				LgqtTrFeePmiwVO ltfpvo;

				for (int i = 0; i < dsLTFP.getRowCount(); i++) {
					ltfpvo = tmpLTFPList.get(i);
					dmlCode = "1";
					ltfpvo.setELT_CTRW_NO(EltCtrwNo);
					ltfpvo.setFS_RGM(requestHelper.getUserID());
					ltfpvo.setLS_CHGM(requestHelper.getUserID());
					ltfpvo.setDML_CODE(dmlCode);
					dsLTFPList.add(i, ltfpvo);
				}
				ncvo.setLgqtTrFeePmiwVoList(dsLTFPList);
			}

			// 납품업체 종업원파견 약정서 dsdcedp ds_dlvgCompEmpDspcPmiw
			if (dsDCEDP != null) {
				// logger.debug(dsDCEDP.saveXml());
				dmlCode = "";
				List<DlvgCompEmpDspcPmiwVO> tmpDCEDPList = requestHelper.getValueObjects(DlvgCompEmpDspcPmiwVO.class, dsDCEDP);
				List<DlvgCompEmpDspcPmiwVO> dsDCEDPList = new ArrayList<DlvgCompEmpDspcPmiwVO>();
				DlvgCompEmpDspcPmiwVO dcedpvo;

				for (int i = 0; i < dsDCEDP.getRowCount(); i++) {
					dcedpvo = tmpDCEDPList.get(i);
					dmlCode = "1";
					dcedpvo.setELT_CTRW_NO(EltCtrwNo);
					dcedpvo.setFS_RGM(requestHelper.getUserID());
					dcedpvo.setLS_CHGM(requestHelper.getUserID());
					dcedpvo.setDML_CODE(dmlCode);
					dsDCEDPList.add(i, dcedpvo);
				}
				ncvo.setDlvgCompEmpDspcPmiwVOList(dsDCEDPList);
			}

			// 파견인원근무기간 약정서 dsDPWPP ds_dlvgCompEmpDspcPmiw
			if (dsDPWPP != null) {
				// logger.debug(dsDPWPP.saveXml());
				dmlCode = "";
				List<DspcPerWrkPrdPmiwVO> tmpDPWPPList = requestHelper.getValueObjects(DspcPerWrkPrdPmiwVO.class, dsDPWPP);
				List<DspcPerWrkPrdPmiwVO> dsDPWPPList = new ArrayList<DspcPerWrkPrdPmiwVO>();
				DspcPerWrkPrdPmiwVO dpwppvo;

				for (int i = 0; i < dsDPWPP.getRowCount(); i++) {
					dpwppvo = tmpDPWPPList.get(i);
					dmlCode = "1";
					dpwppvo.setELT_CTRW_NO(EltCtrwNo);
					dpwppvo.setFS_RGM(requestHelper.getUserID());
					dpwppvo.setLS_CHGM(requestHelper.getUserID());
					dpwppvo.setDML_CODE(dmlCode);
					dsDPWPPList.add(i, dpwppvo);
				}
				ncvo.setDspcPerWrkPrdPmiwVOList(dsDPWPPList);
			}

			// 특약서상세
			if (dsSD != null) {
				dmlCode = "";
				// logger.debug(dsSD.saveXml());

				List<SctrwDtlVO> tmpSDList = requestHelper.getValueObjects(SctrwDtlVO.class, dsSD);
				List<SctrwDtlVO> dsSDList = new ArrayList<SctrwDtlVO>();
				SctrwDtlVO sdvo;

				for (int i = 0; i < dsSD.getRowCount(); i++) {
					sdvo = tmpSDList.get(i);
					dmlCode = "1";
					sdvo.setELT_CTRW_NO(EltCtrwNo);
					sdvo.setFS_RGM(requestHelper.getUserID());
					sdvo.setLS_CHGM(requestHelper.getUserID());
					sdvo.setDML_CODE(dmlCode);
					dsSDList.add(i, sdvo);
				}
				ncvo.setSctrwDtlVoList(dsSDList);
			}

			// 특약서_정상_마진율
			if (dsSNMR != null) {
				dmlCode = "";
				// logger.debug(dsSNMR.saveXml());
				List<SctrwNmlMrgnRtVO> tmpSNMRList = requestHelper.getValueObjects(SctrwNmlMrgnRtVO.class, dsSNMR);
				List<SctrwNmlMrgnRtVO> dsSNMRList = new ArrayList<SctrwNmlMrgnRtVO>();
				SctrwNmlMrgnRtVO snmrvo;

				for (int i = 0; i < dsSNMR.getRowCount(); i++) {
					snmrvo = tmpSNMRList.get(i);
					snmrvo.setELT_CTRW_NO(EltCtrwNo);
					dmlCode = "1";
					snmrvo.setLS_CHGM(requestHelper.getUserID());
					snmrvo.setDML_CODE(dmlCode);
					dsSNMRList.add(i, snmrvo);
				}
				ncvo.setSctrwNmlMrgnRtVoList(dsSNMRList);
			}

			// 특약서_계약_마진율
			if (dsSCMR != null) {
				// logger.debug(dsSCMR.saveXml());
				dmlCode = "";

				List<SctrwCtrMrgnRtVO> tmpSCMRList = requestHelper.getValueObjects(SctrwCtrMrgnRtVO.class, dsSCMR);
				List<SctrwCtrMrgnRtVO> dsSCMRList = new ArrayList<SctrwCtrMrgnRtVO>();
				SctrwCtrMrgnRtVO scmrvo;

				for (int i = 0; i < dsSCMR.getRowCount(); i++) {
					scmrvo = tmpSCMRList.get(i);
					dmlCode = "1";
					scmrvo.setELT_CTRW_NO(EltCtrwNo);
					scmrvo.setFS_RGM(requestHelper.getUserID());
					scmrvo.setLS_CHGM(requestHelper.getUserID());
					scmrvo.setDML_CODE(dmlCode);
					dsSCMRList.add(i, scmrvo);
				}
				ncvo.setSctrwCtrMrgnRtVoList(dsSCMRList);
			}

			// //특약서_판촉사원파견내역
			// if(dsSPEDB != null){
			// dmlCode = "";
			// List<SctrwPmtnEmpeDspcBrkVO> tmpSPEDBList = requestHelper.getValueObjects(SctrwPmtnEmpeDspcBrkVO.class,
			// dsSPEDB);
			// List<SctrwPmtnEmpeDspcBrkVO> dsSPEDBList = new ArrayList<SctrwPmtnEmpeDspcBrkVO>();
			// SctrwPmtnEmpeDspcBrkVO spedbvo ;
			//
			//
			// for(int i = 0; i < dsSPEDB.getRowCount(); i++){
			//
			// spedbvo = tmpSPEDBList.get(i);
			// dmlCode = "1";
			// spedbvo.setELT_CTRW_NO(EltCtrwNo);
			// spedbvo.setFS_RGM(requestHelper.getUserID());
			// spedbvo.setLS_CHGM(requestHelper.getUserID());
			// spedbvo.setDML_CODE(dmlCode);
			// dsSPEDBList.add(i, spedbvo);
			//
			// }
			// ncvo.setSctrwPmtnEmpeDspcBrkVoList(dsSPEDBList);
			// }

			// 특약서_전체예상 판촉비용
			if (dsSAPC != null) {
				dmlCode = "";
				List<SctrwAllXpcPmtnCstVO> tmpSAPCList = requestHelper.getValueObjects(SctrwAllXpcPmtnCstVO.class, dsSAPC);
				List<SctrwAllXpcPmtnCstVO> dsSAPCList = new ArrayList<SctrwAllXpcPmtnCstVO>();
				SctrwAllXpcPmtnCstVO sapcbvo;

				for (int i = 0; i < dsSAPC.getRowCount(); i++) {
					sapcbvo = tmpSAPCList.get(i);
					dmlCode = "1";
					sapcbvo.setELT_CTRW_NO(EltCtrwNo);
					sapcbvo.setFS_RGM(requestHelper.getUserID());
					sapcbvo.setLS_CHGM(requestHelper.getUserID());
					sapcbvo.setDML_CODE(dmlCode);
					dsSAPCList.add(i, sapcbvo);
				}
				ncvo.setSctrwAllXpcPmtnCstVoList(dsSAPCList);
			}

			// 기타전자계약서
			if (dsEEC != null) {
				// logger.debug(dsEEC.saveXml());
				dmlCode = "";
				List<EtcEltCtrwVO> tmpEECList = requestHelper.getValueObjects(EtcEltCtrwVO.class, dsEEC);
				List<EtcEltCtrwVO> dsEECList = new ArrayList<EtcEltCtrwVO>();
				EtcEltCtrwVO eecvo;

				for (int i = 0; i < dsEEC.getRowCount(); i++) {
					eecvo = tmpEECList.get(i);
					logger.debug("getETC_CTRW_KDC : " + eecvo.getETC_CTRW_KDC());

					dmlCode = "1";
					eecvo.setFS_RGM(requestHelper.getUserID());
					eecvo.setELT_CTRW_NO(EltCtrwNo);
					eecvo.setLS_CHGM(requestHelper.getUserID());
					eecvo.setDML_CODE(dmlCode);
					dsEECList.add(i, eecvo);
				}
				ncvo.setEtcEltCtrwVoList(dsEECList);
			}
			
			anwEltCtrwDrupService.saveAnwEltCtrwDrup(ncvo);

			// 미리보기(임시저장) 일 경우 리포트 출력을 위한 정보를 리턴
			if (ncvo.isTemp()) {
				DataSetHelper dsHelper = new DataSetHelper("ds_temp");
				dsHelper.addColumns(AnwEltCtrwDrupVO.class);
				dsHelper.setData(ncvo);
				platformData.addDataSet(dsHelper.getDataSet());
			}
			sendData(response, platformData, 1, "result.message.save.success");
		} catch (AppetizerException e) {
			e.printStackTrace();
			sendData(response, platformData, -1, "error.message.server.exception");
		}
	}
	
	@RequestMapping(value = "/rest/ct/eltctrw/saveAnwEltCtrwDrup")
	public void saveAnwEltCtrwDrup(HttpServletRequest request, HttpServletResponse response) {
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

		try {
			// 기본 = 0
			// 재검토 요청상태일때 = 1
			// 전자 계약 개별변경 대상 = 2

			String CtrwChg = requestHelper.getParameter("CtrwChg");
			logger.debug("CtrwChg   =>>    " + CtrwChg);

			String CTRW_MOD_CNTN = requestHelper.getParameter("CTRW_MOD_CNTN");

			PlatformData platformData = new PlatformData();

			AnwEltCtrwDrupVO ncvo = new AnwEltCtrwDrupVO();
			String dmlCode = "";

			DataSet dsR = requestHelper.getDataSet("ds_register");
			DataSet dsECD = requestHelper.getDataSet("ds_eltCtrwDtl");
			DataSet dsAECD = requestHelper.getDataSet("ds_addEltCtrwDtl");
			DataSet dsPD = requestHelper.getDataSet("ds_pmiwDtl");
			DataSet dsEAP = requestHelper.getDataSet("ds_evtAmPmiw");

			DataSet dsDCEDP = requestHelper.getDataSet("ds_dlvgCompEmpDspcPmiw");
			DataSet dsDPWPP = requestHelper.getDataSet("ds_dspcPerWrkPrdPmiw");

			DataSet dsLTFP = requestHelper.getDataSet("ds_lgqtTrFeePmiw");
			DataSet dsSNMR = requestHelper.getDataSet("ds_sctrwNmlMrgnRt");
			DataSet dsSCMR = requestHelper.getDataSet("ds_sctrwCtrMrgnRt");
			DataSet dsSPEDB = requestHelper.getDataSet("ds_sctrwPmtnEmpeDspcBrk");
			DataSet dsSAPC = requestHelper.getDataSet("ds_sctrwAllXpcPmtnCst");
			DataSet dsEEC = requestHelper.getDataSet("ds_etcEltCtrw");
			DataSet dsSD = requestHelper.getDataSet("ds_sctrwDtl");
//			DataSet dsfyn = requestHelper.getDataSet("ds_fyn");

			DataSet ds_ctEtcItemList = requestHelper.getDataSet("ds_ctEtcItemList"); // 판매상품리스트, 납품상품내역

			// 전자 계약 번호
			String EltCtrwNo = "";
			String ChgSqNo = "";

			String TmpChgSqNo = "";
			// String TmpEltCtrwNo = "";

			String PMIW_YN = "0";
			String SCTRW_YN = "0";
			String ETC_CTRW_YN = "0";
			
			String planFileName = "";
			
			String mnCtrwKdc = "";
			// 전자계약서관리
			if (dsR != null) {
				dmlCode = "";
				// logger.debug("dsR.getString    :"+ dsR.getString(0, "ELT_CTRW_NO").toString());

				EltCtrwNo = dsR.getString(0, "ELT_CTRW_NO").toString();
				// logger.debug("ColbCompSgntSts    :"+ ColbCompSgntSts);
				if (!"".equals(EltCtrwNo)) {
					EltCtrwNo = dsR.getString(0, "ELT_CTRW_NO").toString();
					ChgSqNo = dsR.getString(0, "CHG_SQNO").toString();
					PMIW_YN = dsR.getString(0, "PMIW_YN").toString();
					SCTRW_YN = dsR.getString(0, "SCTRW_YN").toString();
					ETC_CTRW_YN = dsR.getString(0, "ETC_CTRW_YN").toString();
					// logger.debug("EltCtrwNo old :" + EltCtrwNo);
				} else {
					EltCtrwNo = SeqGenUtil.getSeq(PortalSequenceKeySeqName.SQ_ELT.name());
					// logger.debug("EltCtrwNo new  :" + EltCtrwNo);
				}

				List<AnwEltCtrwDrupVO> listR = requestHelper.getValueObjects(AnwEltCtrwDrupVO.class, dsR);
				ncvo = listR.get(0);
				mnCtrwKdc = ncvo.getMN_CTRW_KD();
				ncvo.setLS_CHGM(requestHelper.getUserID());

				// logger.debug( "dsR.getRowType [" + dsR.getRowTypeName(0) +"]" );
				// logger.debug( "DataSet.ROW_TYPE_UPDATED [" + DataSet.ROW_TYPE_UPDATED +"]" ); //2
				// logger.debug( "DataSet.ROW_TYPE_INSERTED [" + DataSet.ROW_TYPE_INSERTED +"]" ); //1

				// 1 == INSERT
				// 2 == UPDATE
				// 3 == INSERT/UPDATE (개별 변경일때만 사용)
				// 4 == delete

				if ("2".equals(CtrwChg)) {
					logger.debug("test" + dsR.getString(0, "ELT_CTRW_NO").toString());

					TmpChgSqNo = "" + (Integer.parseInt(ChgSqNo) + 1);

					logger.debug("TmpChgSqNo = >>  " + TmpChgSqNo);
					// TmpEltCtrwNo = SeqGenUtil.getSeq(PortalSequenceKeySeqName.SQ_ELT.name());
					dmlCode = "3";

					ncvo.setSTS("1"); // 개별 변경 상태값
					ncvo.setCTRW_MOD_CNTN(CTRW_MOD_CNTN);
					ncvo.setCOLB_COMP_SGNT("");
					ncvo.setCHG_SQNO_TEMP(TmpChgSqNo);
					ncvo.setCTRW_IDVD_CHG_CHK("1");
					ncvo.setFGAT_PRVT_C("");
					ncvo.setFS_RGM(requestHelper.getUserID());

					logger.debug("getSTS   =>>" + ncvo.getSTS());

					// 수정해야함 아주 중요함 ***********************************************************
					List<EltCtrwDcmApdVO> eltCtrwDcmApdList = anwEltCtrwDrupService.retrieveEltCtrwDcmApdList(EltCtrwNo, ChgSqNo);
					List<EltCtrwDcmApdVO> ecdaList = new ArrayList<EltCtrwDcmApdVO>();
					EltCtrwDcmApdVO ecdavo;
					// logger.debug(eltCtrwDcmApdList.toString());
					// logger.debug(eltCtrwDcmApdList.size());
					// logger.debug(eltCtrwDcmApdList.get(0).getAPDFL_SZE());

					// if(eltCtrwDcmApdList != null )
					for (int i = 0; i < eltCtrwDcmApdList.size(); i++) {
						ecdavo = eltCtrwDcmApdList.get(i);
						ecdavo.setELT_CTRW_NO(EltCtrwNo);
						ecdavo.setCHG_SQNO(TmpChgSqNo);
						ecdavo.setFS_RGM(requestHelper.getUserID());
						ecdavo.setLS_CHGM(requestHelper.getUserID());
						ecdavo.setDML_CODE("3");

						ecdaList.add(i, ecdavo);
					}
					ncvo.setEltCtrwDcmApdVoList(ecdaList);
				} else {
					if (dsR.getRowType(0) == DataSet.ROW_TYPE_INSERTED) {
						ncvo.setELT_CTRW_NO(EltCtrwNo);
						ncvo.setBUYER_NA_TRPL_C(requestHelper.getGlnCode());
						ncvo.setBUYER_ENO(requestHelper.getUserID());
						dmlCode = "1";
						ncvo.setFS_RGM(requestHelper.getUserID());
					} else if (StringUtils.equals("Y", dsR.getString(0, "ISCHECKED"))) {
						logger.debug("test" + dsR.getString(0, "ELT_CTRW_NO").toString());
						dmlCode = "4";
					} else {
						dmlCode = "2";
					}
				}
				ncvo.setLS_CHGM(requestHelper.getUserID());
				ncvo.setDML_CODE(dmlCode);

			}

			// 전자계약서상세
			if (dsECD != null) {
				dmlCode = "";
//				logger.debug(dsECD.saveXml());

				List<EltCtrwDtlVO> tmpECDList = requestHelper.getValueObjects(EltCtrwDtlVO.class, dsECD);
				List<EltCtrwDtlVO> dsECDList = new ArrayList<EltCtrwDtlVO>();
				EltCtrwDtlVO ecdvo = null;

				if ("2".equals(CtrwChg)) {
					for (int i = 0; i < dsECD.getRowCount(); i++) {
						ecdvo = tmpECDList.get(i);
						dmlCode = "3";
						// ecdvo.setTMP_ELT_CTRW_NO(TmpEltCtrwNo); //신규 계약 번호
						ncvo.setELT_CTRW_NO(EltCtrwNo);
						ecdvo.setCHG_SQNO(TmpChgSqNo);
						ecdvo.setFS_RGM(requestHelper.getUserID());
						ecdvo.setLS_CHGM(requestHelper.getUserID());
						ecdvo.setDML_CODE(dmlCode);
						if (!StringUtils.equals("Y", dsECD.getString(i, "ISCHECKED"))) {
							dsECDList.add(i, ecdvo);
						}
					}
				} else {
					for (int i = 0; i < dsECD.getRowCount(); i++) {
						ecdvo = tmpECDList.get(i);
						if (dsECD.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
							dmlCode = "1";
							ecdvo.setELT_CTRW_NO(EltCtrwNo);
						} else if (dsECD.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
							if (StringUtils.equals("Y", dsECD.getString(i, "ISCHECKED"))) {
								logger.debug("test" + dsECD.getString(i, "ELT_CTRW_NO").toString());
								dmlCode = "4";
							} else {
								dmlCode = "2";
							}
						}
						logger.debug("######################################################################  dmlCode  :" + dmlCode);
						ecdvo.setFS_RGM(requestHelper.getUserID());
						ecdvo.setLS_CHGM(requestHelper.getUserID());
						ecdvo.setDML_CODE(dmlCode);
						dsECDList.add(i, ecdvo);
					}
				}
				
				if (ecdvo != null) {
					// 도면파일 이동
					// 상세저장시에 도면파일 이동
					planFileName = ecdvo.getETC49();
					if (planFileName == null) {
						planFileName = "";
					}
					
					// 도면 파일등록 : temp 폴더에 이미 저장된 파일 이동 . 전자계약서 상세에 별도 등록
					
					String srcFileName;
					String srcDir = Configurer.getProperty("file.temp.path");
					String dstDir = Configurer.getProperty("file.realElt.path");
					
					// 파일 위치만 옮기면 된다. 하나만 저장한다
					if (planFileName.length() > 0 && planFileName.equals("") == false) {
						srcFileName = ecdvo.getETC50(); //
						try {
							// 도면파일은 선택하는 순간 temp 폴더로 업로드 되므로 파일만 이동시킨다.
							// 첨부파일명 ETC49 ORGFNAME, 시스템파일명은 ETC50 SYSTEMFILENAME // 매장위치: 시스템파일명
							FileUtil.moveFile(srcDir, dstDir, srcFileName);
						} catch (IOException e) {
							logger.error(e.getMessage(), e);
						}
					}
					// 도면파일 이동 끝
				}
				
				ncvo.setEltCtrwDtlVoList(dsECDList);
			}
				
			/*
			 * 판매상품리스트
			 */
			if (ds_ctEtcItemList != null) {
				List<CtEtcItemVO> ctEtcItemVoList = requestHelper.getValueObjects(CtEtcItemVO.class, ds_ctEtcItemList);
//				int rowType;
//				String rType;
				CtEtcItemVO ctEtcItemVo;
				String sqno;
				String ischecked;
	
				for (int i = 0; i < ds_ctEtcItemList.getRowCount(); i++) {
					ctEtcItemVo = ctEtcItemVoList.get(i);
					ctEtcItemVo.setELT_CTRW_NO(EltCtrwNo); // 전자계약번호 저장
					ctEtcItemVo.setFS_RGM(requestHelper.getUserID());
					ctEtcItemVo.setLS_CHGM(requestHelper.getUserID());
	
//					rowType = ds_ctEtcItemList.getRowType(i);
//					rType = ds_ctEtcItemList.getRowTypeName(i);
	
					sqno = ds_ctEtcItemList.getString(i, "SQNO");
					ischecked = ds_ctEtcItemList.getString(i, "ISCHECKED");
	
					if (sqno == null || ischecked.equals("")) {
						if("152".indexOf(mnCtrwKdc) != -1){
							if (ctEtcItemVo.getITEM_CODE().equals("A")){
								// 도면파일 이동
								// 상세저장시에 도면파일 이동
								planFileName = ctEtcItemVo.getQTY();
								if (planFileName == null) {
									planFileName = "";
								}
								
								// 도면 파일등록 : temp 폴더에 이미 저장된 파일 이동 . 전자계약서 상세에 별도 등록
	
								String srcFileName;
								String srcDir = Configurer.getProperty("file.temp.path");
								String dstDir = Configurer.getProperty("file.realElt.path");
								
								// 파일 위치만 옮기면 된다. 하나만 저장한다
								if (planFileName.length() > 0 && planFileName.equals("") == false) {
									srcFileName = ctEtcItemVo.getUPR(); //
									try {
										// 도면파일은 선택하는 순간 temp 폴더로 업로드 되므로 파일만 이동시킨다.
										// 첨부파일명 QTY ORGFNAME, 시스템파일명은 UPR SYSTEMFILENAME
										FileUtil.moveFile(srcDir, dstDir, srcFileName);
									} catch (IOException e) {
										logger.error(e.getMessage(), e);
									}
								}
								// 도면파일 이동 끝
							}	
						}
						// 입력
						eltctrwService.insertEtcItem(ctEtcItemVo);
					} else if (sqno.length() > 0) {
						// 수정
						if (ischecked.equals("1")) {
							if("152".indexOf(mnCtrwKdc) != -1){
								if (ctEtcItemVo.getITEM_CODE().equals("A")){
									// 도면파일 이동
									// 상세저장시에 도면파일 이동
									planFileName = ctEtcItemVo.getQTY();
									if (planFileName == null) {
										planFileName = "";
									}
									
									// 도면 파일등록 : temp 폴더에 이미 저장된 파일 이동 . 전자계약서 상세에 별도 등록
		
									String srcFileName;
									String srcDir = Configurer.getProperty("file.temp.path");
									String dstDir = Configurer.getProperty("file.realElt.path");
									
									// 파일 위치만 옮기면 된다. 하나만 저장한다
									if (planFileName.length() > 0 && planFileName.equals("") == false) {
										srcFileName = ctEtcItemVo.getUPR(); //
										try {
											// 도면파일은 선택하는 순간 temp 폴더로 업로드 되므로 파일만 이동시킨다.
											// 첨부파일명 QTY ORGFNAME, 시스템파일명은 UPR SYSTEMFILENAME
											FileUtil.deleteFile(dstDir, srcFileName);
										} catch (IOException e) {
											logger.error(e.getMessage(), e);
										}
									}
									// 도면파일 이동 끝
								}	
							}
							eltctrwService.deleteEtcItem(ctEtcItemVo);
						} else if (ischecked.equals("0")) {
							if("152".indexOf(mnCtrwKdc) != -1){
								if (ctEtcItemVo.getITEM_CODE().equals("A")){
									// 도면파일 이동
									// 상세저장시에 도면파일 이동
									planFileName = ctEtcItemVo.getQTY();
									if (planFileName == null) {
										planFileName = "";
									}
									
									// 도면 파일등록 : temp 폴더에 이미 저장된 파일 이동 . 전자계약서 상세에 별도 등록
		
									String srcFileName;
									String srcDir = Configurer.getProperty("file.temp.path");
									String dstDir = Configurer.getProperty("file.realElt.path");
									
									// 파일 위치만 옮기면 된다. 하나만 저장한다
									if (planFileName.length() > 0 && planFileName.equals("") == false) {
										srcFileName = ctEtcItemVo.getUPR(); //
										try {
											// 도면파일은 선택하는 순간 temp 폴더로 업로드 되므로 파일만 이동시킨다.
											// 첨부파일명 QTY ORGFNAME, 시스템파일명은 UPR SYSTEMFILENAME
											FileUtil.moveFile(srcDir, dstDir, srcFileName);
										} catch (IOException e) {
											logger.error(e.getMessage(), e);
										}
									}
									// 도면파일 이동 끝
								}	
							}
							eltctrwService.updateEtcItem(ctEtcItemVo);
						} else {
							logger.debug("saveEtcItemList  = >> 수정삭제 예외" + "");
						}
					} else {
						logger.debug("saveEtcItemList  = >> Row 수정상태 예외." + "");
					}
				}
			}
				
			// 부가전자계약서상세
			if (dsAECD != null) {
				dmlCode = "";
				List<AddEltCtrwDtlVO> tmpAECDList = requestHelper.getValueObjects(AddEltCtrwDtlVO.class, dsAECD);
				List<AddEltCtrwDtlVO> dsAECDList = new ArrayList<AddEltCtrwDtlVO>();
				AddEltCtrwDtlVO aecdvo;

				if ("2".equals(CtrwChg)) {
					for (int i = 0; i < dsAECD.getRowCount(); i++) {
						aecdvo = tmpAECDList.get(i);
						dmlCode = "3";
						aecdvo.setELT_CTRW_NO(EltCtrwNo);
						aecdvo.setCHG_SQNO(TmpChgSqNo);
						aecdvo.setFS_RGM(requestHelper.getUserID());
						aecdvo.setLS_CHGM(requestHelper.getUserID());
						aecdvo.setDML_CODE(dmlCode);
						if (!StringUtils.equals("Y", dsAECD.getString(i, "ISCHECKED"))) {
							dsAECDList.add(i, aecdvo);
						}
					}

				} else {

					for (int i = 0; i < dsAECD.getRowCount(); i++) {
						if (dsAECD.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
							dmlCode = "1";
						} else if (dsAECD.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
							if (StringUtils.equals("Y", dsAECD.getString(i, "ISCHECKED"))) {
								logger.debug("test" + dsAECD.getString(i, "ELT_CTRW_NO").toString());
								dmlCode = "4";
							} else {
								dmlCode = "2";
							}
						}
						aecdvo = tmpAECDList.get(i);

						aecdvo.setELT_CTRW_NO(EltCtrwNo);
						aecdvo.setFS_RGM(requestHelper.getUserID());
						aecdvo.setLS_CHGM(requestHelper.getUserID());
						aecdvo.setDML_CODE(dmlCode);
						dsAECDList.add(i, aecdvo);
					}
				}
				ncvo.setAddEltCtrwDtlVoList(dsAECDList);
			}

			// 약정서상세
			if (dsPD != null) {
				dmlCode = "";
				int dsPDcnt = 0;

//				logger.debug(dsPD.saveXml());

				List<PmiwDtlVO> tmpPDList = requestHelper.getValueObjects(PmiwDtlVO.class, dsPD);
				List<PmiwDtlVO> dsPDList = new ArrayList<PmiwDtlVO>();
				PmiwDtlVO pdvo;

				if ("2".equals(CtrwChg)) {
					for (int i = 0; i < dsPD.getRowCount(); i++) {
						pdvo = tmpPDList.get(i);
						dmlCode = "3";
						pdvo.setELT_CTRW_NO(EltCtrwNo);
						pdvo.setCHG_SQNO(TmpChgSqNo);
						pdvo.setFS_RGM(requestHelper.getUserID());
						pdvo.setLS_CHGM(requestHelper.getUserID());
						pdvo.setDML_CODE(dmlCode);
						if (!StringUtils.equals("Y", dsPD.getString(i, "ISCHECKED"))) {
							dsPDList.add(i, pdvo);
						}
					}
				} else {
					logger.debug("dsPD.getRowCount()" + dsPD.getRowCount());

					for (int i = 0; i < dsPD.getRowCount(); i++) {
						pdvo = tmpPDList.get(i);

						if ("0".equals(PMIW_YN)) {
							dmlCode = "4";
							pdvo.setELT_CTRW_NO(EltCtrwNo); // 기존 계약 번호
							pdvo.setPMIW_KDC("");

							// 삭제 일때 한번만 for문 돌림
							dsPDcnt = dsPD.getRowCount();
						} else {
							if (dsPD.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
								dmlCode = "1";
							} else if (dsPD.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
								if (StringUtils.equals("Y", dsPD.getString(i, "ISCHECKED"))) {
									logger.debug("test" + dsPD.getString(i, "ELT_CTRW_NO").toString());
									dmlCode = "4";
								} else {
									dmlCode = "2";
								}
							}
						}
						pdvo.setELT_CTRW_NO(EltCtrwNo);
						pdvo.setFS_RGM(requestHelper.getUserID());
						pdvo.setLS_CHGM(requestHelper.getUserID());
						pdvo.setDML_CODE(dmlCode);
						dsPDList.add(i, pdvo);

						if (dsPDcnt != 0) {
							i = dsPDcnt;
						}
					}
				}
				ncvo.setPmiwDtlVoList(dsPDList);
			}

			// 행사료약정서
			if (dsEAP != null) {
				dmlCode = "";

				int dsEAPcnt = 0;
//				logger.debug(dsEAP.saveXml());
				List<EvtAmPmiwVO> tmpEAPList = requestHelper.getValueObjects(EvtAmPmiwVO.class, dsEAP);
				List<EvtAmPmiwVO> dsEAPList = new ArrayList<EvtAmPmiwVO>();
				EvtAmPmiwVO eapvo;

				if ("2".equals(CtrwChg)) {
					for (int i = 0; i < dsEAP.getRowCount(); i++) {
						eapvo = tmpEAPList.get(i);
						dmlCode = "3";
						eapvo.setELT_CTRW_NO(EltCtrwNo);
						eapvo.setCHG_SQNO(TmpChgSqNo);
						eapvo.setFS_RGM(requestHelper.getUserID());
						eapvo.setLS_CHGM(requestHelper.getUserID());
						eapvo.setDML_CODE(dmlCode);
						if (!StringUtils.equals("Y", dsEAP.getString(i, "ISCHECKED"))) {
							dsEAPList.add(i, eapvo);
						}
					}
				} else {
					for (int i = 0; i < dsEAP.getRowCount(); i++) {
						eapvo = tmpEAPList.get(i);
						if ("0".equals(PMIW_YN)) {
							dmlCode = "4";
							eapvo.setELT_CTRW_NO(EltCtrwNo); // 기존 계약 번호
							eapvo.setPMIW_KDC("");

							// 삭제 일때 한번만 for문 돌림
							dsEAPcnt = dsEAP.getRowCount();
						} else {
							if (dsEAP.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
								dmlCode = "1";
							} else if (dsEAP.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
								if (StringUtils.equals("Y", dsEAP.getString(i, "ISCHECKED"))) {
									logger.debug("test" + dsEAP.getString(i, "ELT_CTRW_NO").toString());
									dmlCode = "4";
								} else {
									dmlCode = "2";
								}
							}
						}
						eapvo.setELT_CTRW_NO(EltCtrwNo);
						eapvo.setFS_RGM(requestHelper.getUserID());
						eapvo.setLS_CHGM(requestHelper.getUserID());
						eapvo.setDML_CODE(dmlCode);
						dsEAPList.add(i, eapvo);

						if (dsEAPcnt != 0) {
							i = dsEAPcnt;
						}
					}
				}
				ncvo.setEvtAmPmiwVoList(dsEAPList);
			}

			// 납품업체 종업원 파견약정서
			if (dsDCEDP != null) {
				dmlCode = "";

				int dsDCEDPcnt = 0;
//				logger.debug(dsDCEDP.saveXml());
				List<DlvgCompEmpDspcPmiwVO> tmpDCEDPList = requestHelper.getValueObjects(DlvgCompEmpDspcPmiwVO.class, dsDCEDP);
				List<DlvgCompEmpDspcPmiwVO> dsDCEDPList = new ArrayList<DlvgCompEmpDspcPmiwVO>();
				DlvgCompEmpDspcPmiwVO dcedpvo;

				if ("2".equals(CtrwChg)) {
					for (int i = 0; i < dsDCEDP.getRowCount(); i++) {
						dcedpvo = tmpDCEDPList.get(i);
						dmlCode = "3";
						dcedpvo.setELT_CTRW_NO(EltCtrwNo);
						dcedpvo.setCHG_SQNO(TmpChgSqNo);
						dcedpvo.setFS_RGM(requestHelper.getUserID());
						dcedpvo.setLS_CHGM(requestHelper.getUserID());
						dcedpvo.setDML_CODE(dmlCode);
						if (!StringUtils.equals("Y", dsEAP.getString(i, "ISCHECKED"))) {
							dsDCEDPList.add(i, dcedpvo);
						}
					}
				} else {
					for (int i = 0; i < dsDCEDP.getRowCount(); i++) {
						dcedpvo = tmpDCEDPList.get(i);
						if ("0".equals(PMIW_YN)) {
							dmlCode = "4";
							dcedpvo.setELT_CTRW_NO(EltCtrwNo); // 기존 계약 번호
							dcedpvo.setPMIW_KDC("");

							// 삭제 일때 한번만 for문 돌림
							dsDCEDPcnt = dsDCEDP.getRowCount();
						} else {
							if (dsDCEDP.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
								dmlCode = "1";
							} else if (dsDCEDP.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
								if (StringUtils.equals("Y", dsDCEDP.getString(i, "ISCHECKED"))) {
									logger.debug("test" + dsDCEDP.getString(i, "ELT_CTRW_NO").toString());
									dmlCode = "4";
								} else {
									dmlCode = "2";
								}
							}
						}
						dcedpvo.setELT_CTRW_NO(EltCtrwNo);
						dcedpvo.setFS_RGM(requestHelper.getUserID());
						dcedpvo.setLS_CHGM(requestHelper.getUserID());
						dcedpvo.setDML_CODE(dmlCode);
						dsDCEDPList.add(i, dcedpvo);

						if (dsDCEDPcnt != 0) {
							i = dsDCEDPcnt;
						}
					}
				}
				ncvo.setDlvgCompEmpDspcPmiwVOList(dsDCEDPList);
			}

			// 파견인원 근무 기간 약정서
			if (dsDPWPP != null) {
				dmlCode = "";
				int dsDPWPPcnt = 0;
//				logger.debug(dsDPWPP.saveXml());

				List<DspcPerWrkPrdPmiwVO> tmpDPWPPList = requestHelper.getValueObjects(DspcPerWrkPrdPmiwVO.class, dsDPWPP);
				List<DspcPerWrkPrdPmiwVO> dsDPWPPList = new ArrayList<DspcPerWrkPrdPmiwVO>();
				DspcPerWrkPrdPmiwVO dpwppvo;

				if ("2".equals(CtrwChg)) {
					for (int i = 0; i < dsDPWPP.getRowCount(); i++) {
						dpwppvo = tmpDPWPPList.get(i);
						dmlCode = "3";
						dpwppvo.setELT_CTRW_NO(EltCtrwNo);
						dpwppvo.setCHG_SQNO(TmpChgSqNo);
						dpwppvo.setFS_RGM(requestHelper.getUserID());
						dpwppvo.setLS_CHGM(requestHelper.getUserID());
						dpwppvo.setDML_CODE(dmlCode);
						if (!StringUtils.equals("Y", dsDPWPP.getString(i, "ISCHECKED"))) {
							dsDPWPPList.add(i, dpwppvo);
						}
					}
				} else {
					for (int i = 0; i < dsDPWPP.getRowCount(); i++) {
						dpwppvo = tmpDPWPPList.get(i);

						if ("0".equals(PMIW_YN)) {
							dmlCode = "4";
							dpwppvo.setELT_CTRW_NO(EltCtrwNo); // 기존 계약 번호
							dpwppvo.setPMIW_KDC("");
							dpwppvo.setSQNO("");

							dsDPWPPcnt = dsDPWPP.getRowCount();
						} else {
							if (dsDPWPP.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
								dmlCode = "1";
								dpwppvo.setELT_CTRW_NO(EltCtrwNo);
								dpwppvo.setCHG_SQNO(ChgSqNo);
								dpwppvo.setFS_RGM(requestHelper.getUserID());
							} else if (dsDPWPP.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
								if (StringUtils.equals("Y", dsDPWPP.getString(i, "ISCHECKED"))) {
									logger.debug("test" + dsDPWPP.getString(i, "ELT_CTRW_NO").toString());
									dmlCode = "4";
								} else {
									dmlCode = "2";
								}
							}
						}
						dpwppvo.setLS_CHGM(requestHelper.getUserID());
						dpwppvo.setDML_CODE(dmlCode);
						dsDPWPPList.add(i, dpwppvo);
						if (dsDPWPPcnt != 0) {
							i = dsDPWPPcnt;
						}
					}
				}
				ncvo.setDspcPerWrkPrdPmiwVOList(dsDPWPPList);
			}

			// 대량거래수수료약정서
			if (dsLTFP != null) {
//				logger.debug(dsLTFP.saveXml());

				dmlCode = "";
				int dsLTFPcnt = 0;

				List<LgqtTrFeePmiwVO> tmpLTFPList = requestHelper.getValueObjects(LgqtTrFeePmiwVO.class, dsLTFP);
				List<LgqtTrFeePmiwVO> dsLTFPList = new ArrayList<LgqtTrFeePmiwVO>();

				LgqtTrFeePmiwVO ltfpvo;

				if ("2".equals(CtrwChg)) {
					for (int i = 0; i < dsLTFP.getRowCount(); i++) {
						ltfpvo = tmpLTFPList.get(i);
						dmlCode = "3";
						ltfpvo.setELT_CTRW_NO(EltCtrwNo);
						ltfpvo.setCHG_SQNO(TmpChgSqNo);
						ltfpvo.setFS_RGM(requestHelper.getUserID());
						ltfpvo.setLS_CHGM(requestHelper.getUserID());
						ltfpvo.setDML_CODE(dmlCode);
						if (!StringUtils.equals("Y", dsLTFP.getString(i, "ISCHECKED"))) {
							dsLTFPList.add(i, ltfpvo);
						}
					}
				} else {
					for (int i = 0; i < dsLTFP.getRowCount(); i++) {
						ltfpvo = tmpLTFPList.get(i);
						if ("0".equals(PMIW_YN)) {
							dmlCode = "4";
							ltfpvo.setELT_CTRW_NO(EltCtrwNo); // 기존 계약 번호
							ltfpvo.setPMIW_KDC("");

							// 삭제 일때 한번만 for문 돌림
							dsLTFPcnt = dsLTFP.getRowCount();
						} else {
							if (dsLTFP.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
								dmlCode = "1";
								ltfpvo.setCHG_SQNO(ChgSqNo);
							} else if (dsLTFP.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
								if (StringUtils.equals("Y", dsLTFP.getString(i, "ISCHECKED"))) {
									dmlCode = "4";
								} else {
									dmlCode = "2";
								}
							}
						}
						ltfpvo.setELT_CTRW_NO(EltCtrwNo);
						ltfpvo.setFS_RGM(requestHelper.getUserID());
						ltfpvo.setLS_CHGM(requestHelper.getUserID());
						ltfpvo.setDML_CODE(dmlCode);
						dsLTFPList.add(i, ltfpvo);
						if (dsLTFPcnt != 0) {
							i = dsLTFPcnt;
						}
					}
				}
				ncvo.setLgqtTrFeePmiwVoList(dsLTFPList);
			}

			// 특약서상세
			if (dsSD != null) {
				dmlCode = "";
				int dsSDcnt = 0;
//				logger.debug(dsSD.saveXml());

				List<SctrwDtlVO> tmpSDList = requestHelper.getValueObjects(SctrwDtlVO.class, dsSD);
				List<SctrwDtlVO> dsSDList = new ArrayList<SctrwDtlVO>();
				SctrwDtlVO sdvo;

				if ("2".equals(CtrwChg)) {
					for (int i = 0; i < dsSD.getRowCount(); i++) {
						sdvo = tmpSDList.get(i);
						dmlCode = "3";
						sdvo.setELT_CTRW_NO(EltCtrwNo);
						sdvo.setCHG_SQNO(TmpChgSqNo);
						sdvo.setFS_RGM(requestHelper.getUserID());
						sdvo.setLS_CHGM(requestHelper.getUserID());
						sdvo.setDML_CODE(dmlCode);
						if (!StringUtils.equals("Y", dsSD.getString(i, "ISCHECKED"))) {
							dsSDList.add(i, sdvo);
						}
					}
				} else {
					for (int i = 0; i < dsSD.getRowCount(); i++) {
						sdvo = tmpSDList.get(i);

						if ("0".equals(SCTRW_YN)) {
							dmlCode = "4";
							sdvo.setELT_CTRW_NO(EltCtrwNo); // 기존 계약 번호
							sdvo.setSCTRW_KDC("");
							dsSDcnt = dsSD.getRowCount(); // 삭제 일때 한번만 for문 돌림
						} else {
							if (dsSD.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
								dmlCode = "1";
								sdvo.setCHG_SQNO(ChgSqNo);
							} else if (dsSD.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
								if (StringUtils.equals("Y", dsSD.getString(i, "ISCHECKED"))) {
									logger.debug("test" + dsSD.getString(i, "ELT_CTRW_NO").toString());
									dmlCode = "4";
								} else {
									dmlCode = "2";
								}
							}
						}
						sdvo.setELT_CTRW_NO(EltCtrwNo);
						sdvo.setFS_RGM(requestHelper.getUserID());
						sdvo.setLS_CHGM(requestHelper.getUserID());
						sdvo.setDML_CODE(dmlCode);
						dsSDList.add(i, sdvo);
						if (dsSDcnt != 0) {
							i = dsSDcnt;
						}
					}
				}
				ncvo.setSctrwDtlVoList(dsSDList);
			}

			// 특약서_정상_마진율
			if (dsSNMR != null) {
				dmlCode = "";
				int dsSNMRcnt = 0;
//				logger.debug(dsSNMR.saveXml());

				List<SctrwNmlMrgnRtVO> tmpSNMRList = requestHelper.getValueObjects(SctrwNmlMrgnRtVO.class, dsSNMR);
				List<SctrwNmlMrgnRtVO> dsSNMRList = new ArrayList<SctrwNmlMrgnRtVO>();
				SctrwNmlMrgnRtVO snmrvo;

				if ("2".equals(CtrwChg)) {
					for (int i = 0; i < dsSNMR.getRowCount(); i++) {
						snmrvo = tmpSNMRList.get(i);
						dmlCode = "3";
						snmrvo.setELT_CTRW_NO(EltCtrwNo);
						snmrvo.setCHG_SQNO(TmpChgSqNo);
						snmrvo.setFS_RGM(requestHelper.getUserID());
						snmrvo.setLS_CHGM(requestHelper.getUserID());
						snmrvo.setDML_CODE(dmlCode);
						if (!StringUtils.equals("Y", dsSNMR.getString(i, "ISCHECKED"))) {
							dsSNMRList.add(i, snmrvo);
						}
					}
				} else {
					for (int i = 0; i < dsSNMR.getRowCount(); i++) {
						snmrvo = tmpSNMRList.get(i);

						if ("0".equals(SCTRW_YN)) {
							dmlCode = "4";
							snmrvo.setELT_CTRW_NO(EltCtrwNo); // 기존 계약 번호
							snmrvo.setSCTRW_KDC("");
							snmrvo.setSQNO("");

							dsSNMRcnt = dsSNMR.getRowCount();
						} else {
							logger.debug("dsSNMR.getRowType" + i + "  :   " + dsSNMR.getRowType(i));
							if (dsSNMR.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
								dmlCode = "1";
								snmrvo.setELT_CTRW_NO(EltCtrwNo);
								snmrvo.setCHG_SQNO(ChgSqNo);
								snmrvo.setFS_RGM(requestHelper.getUserID());
							} else if (dsSNMR.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
								if (StringUtils.equals("Y", dsSNMR.getString(i, "ISCHECKED"))) {
									logger.debug("test" + dsSNMR.getString(i, "ELT_CTRW_NO").toString());
									dmlCode = "4";
								} else {
									dmlCode = "2";
								}
							}
						}
						logger.debug("dsSNMR.dmlCode" + i + "  :   " + dmlCode);

						snmrvo.setLS_CHGM(requestHelper.getUserID());
						snmrvo.setDML_CODE(dmlCode);
						dsSNMRList.add(i, snmrvo);
						if (dsSNMRcnt != 0) {
							i = dsSNMRcnt;
						}
					}
				}
				ncvo.setSctrwNmlMrgnRtVoList(dsSNMRList);
			}

			// 특약서_계약_마진율
			if (dsSCMR != null) {
//				logger.debug(dsSCMR.saveXml());
				dmlCode = "";

				int dsSCMRcnt = 0;

				List<SctrwCtrMrgnRtVO> tmpSCMRList = requestHelper.getValueObjects(SctrwCtrMrgnRtVO.class, dsSCMR);
				List<SctrwCtrMrgnRtVO> dsSCMRList = new ArrayList<SctrwCtrMrgnRtVO>();
				SctrwCtrMrgnRtVO scmrvo;

				if ("2".equals(CtrwChg)) {
					for (int i = 0; i < dsSCMR.getRowCount(); i++) {
						scmrvo = tmpSCMRList.get(i);
						dmlCode = "3";
						scmrvo.setELT_CTRW_NO(EltCtrwNo);
						scmrvo.setCHG_SQNO(TmpChgSqNo);
						scmrvo.setFS_RGM(requestHelper.getUserID());
						scmrvo.setLS_CHGM(requestHelper.getUserID());
						scmrvo.setDML_CODE(dmlCode);
						if (!StringUtils.equals("Y", dsSCMR.getString(i, "ISCHECKED"))) {
							dsSCMRList.add(i, scmrvo);
						}
					}
				} else {
					for (int i = 0; i < dsSCMR.getRowCount(); i++) {
						scmrvo = tmpSCMRList.get(i);
						if ("0".equals(SCTRW_YN)) {
							dmlCode = "4";
							scmrvo.setELT_CTRW_NO(EltCtrwNo); // 기존 계약 번호
							scmrvo.setSCTRW_KDC("");

							dsSCMRcnt = dsSCMR.getRowCount();
						} else {
							logger.debug("dsSCMR.getRowType" + i + "  :   " + dsSCMR.getRowType(i));
							if (dsSCMR.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
								dmlCode = "1";
								scmrvo.setELT_CTRW_NO(EltCtrwNo);
								scmrvo.setCHG_SQNO(ChgSqNo);
								scmrvo.setFS_RGM(requestHelper.getUserID());
							} else if (dsSCMR.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
								if (StringUtils.equals("Y", dsSCMR.getString(i, "ISCHECKED"))) {
									dmlCode = "4";
								} else {
									dmlCode = "2";
								}

							}
						}
						logger.debug("dsSCMR.dmlCode" + i + "  :   " + dmlCode);
						scmrvo.setLS_CHGM(requestHelper.getUserID());
						scmrvo.setDML_CODE(dmlCode);
						dsSCMRList.add(i, scmrvo);
						if (dsSCMRcnt != 0) {
							i = dsSCMRcnt;
						}
					}
				}
				ncvo.setSctrwCtrMrgnRtVoList(dsSCMRList);
			}

			// 특약서_판촉사원파견내역
			if (dsSPEDB != null) {
				dmlCode = "";
				int dsSPEDBcnt = 0;
				List<SctrwPmtnEmpeDspcBrkVO> tmpSPEDBList = requestHelper.getValueObjects(SctrwPmtnEmpeDspcBrkVO.class, dsSPEDB);
				List<SctrwPmtnEmpeDspcBrkVO> dsSPEDBList = new ArrayList<SctrwPmtnEmpeDspcBrkVO>();
				SctrwPmtnEmpeDspcBrkVO spedbvo;

				if ("2".equals(CtrwChg)) {
					for (int i = 0; i < dsSPEDB.getRowCount(); i++) {
						spedbvo = tmpSPEDBList.get(i);
						dmlCode = "3";
						spedbvo.setELT_CTRW_NO(EltCtrwNo);
						spedbvo.setCHG_SQNO(TmpChgSqNo);
						spedbvo.setFS_RGM(requestHelper.getUserID());
						spedbvo.setLS_CHGM(requestHelper.getUserID());
						spedbvo.setDML_CODE(dmlCode);
						if (!StringUtils.equals("Y", dsSPEDB.getString(i, "ISCHECKED"))) {
							dsSPEDBList.add(i, spedbvo);
						}
					}
				} else {
					for (int i = 0; i < dsSPEDB.getRowCount(); i++) {
						spedbvo = tmpSPEDBList.get(i);
						if ("0".equals(SCTRW_YN)) {
							dmlCode = "4";
							spedbvo.setELT_CTRW_NO(EltCtrwNo);
							spedbvo.setSCTRW_KDC("");
							dsSPEDBcnt = dsSPEDB.getRowCount();
						} else {

							if (dsSPEDB.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
								dmlCode = "1";

								spedbvo.setELT_CTRW_NO(EltCtrwNo);
								spedbvo.setCHG_SQNO(ChgSqNo);
								spedbvo.setFS_RGM(requestHelper.getUserID());
							} else if (dsSPEDB.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
								if (StringUtils.equals("Y", dsSPEDB.getString(i, "ISCHECKED"))) {
									logger.debug("test" + dsSPEDB.getString(i, "ELT_CTRW_NO").toString());
									dmlCode = "4";
								} else {
									dmlCode = "2";
								}
							}
						}

						spedbvo.setLS_CHGM(requestHelper.getUserID());
						spedbvo.setDML_CODE(dmlCode);
						dsSPEDBList.add(i, spedbvo);

						if (dsSPEDBcnt != 0) {
							i = dsSPEDBcnt;
						}
					}
				}
				ncvo.setSctrwPmtnEmpeDspcBrkVoList(dsSPEDBList);
			}

			// 특약서_전체예상 판촉비용
			if (dsSAPC != null) {
				dmlCode = "";
				int dsSAPCcnt = 0;
				List<SctrwAllXpcPmtnCstVO> tmpSAPCList = requestHelper.getValueObjects(SctrwAllXpcPmtnCstVO.class, dsSAPC);
				List<SctrwAllXpcPmtnCstVO> dsSAPCList = new ArrayList<SctrwAllXpcPmtnCstVO>();
				SctrwAllXpcPmtnCstVO sapcbvo;

				if ("2".equals(CtrwChg)) {
					for (int i = 0; i < dsSAPC.getRowCount(); i++) {
						sapcbvo = tmpSAPCList.get(i);
						dmlCode = "3";
						sapcbvo.setELT_CTRW_NO(EltCtrwNo);
						sapcbvo.setCHG_SQNO(TmpChgSqNo);
						sapcbvo.setFS_RGM(requestHelper.getUserID());
						sapcbvo.setLS_CHGM(requestHelper.getUserID());
						sapcbvo.setDML_CODE(dmlCode);
						if (!StringUtils.equals("Y", dsSAPC.getString(i, "ISCHECKED"))) {
							dsSAPCList.add(i, sapcbvo);
						}
					}
				} else {
					for (int i = 0; i < dsSAPC.getRowCount(); i++) {
						sapcbvo = tmpSAPCList.get(i);
						if ("0".equals(SCTRW_YN)) {
							dmlCode = "4";
							sapcbvo.setELT_CTRW_NO(EltCtrwNo);
							sapcbvo.setSCTRW_KDC("");
							dsSAPCcnt = dsSAPC.getRowCount();
						} else {
							if (dsSAPC.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
								dmlCode = "1";
								sapcbvo.setELT_CTRW_NO(EltCtrwNo);
								sapcbvo.setCHG_SQNO(ChgSqNo);
								sapcbvo.setFS_RGM(requestHelper.getUserID());
							} else if (dsSAPC.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {

								if (StringUtils.equals("Y", dsSAPC.getString(i, "ISCHECKED"))) {
									logger.debug("test" + dsSAPC.getString(i, "ELT_CTRW_NO").toString());
									dmlCode = "4";
								} else {
									dmlCode = "2";
								}
							}
						}
						sapcbvo.setLS_CHGM(requestHelper.getUserID());
						sapcbvo.setDML_CODE(dmlCode);
						dsSAPCList.add(i, sapcbvo);

						if (dsSAPCcnt != 0) {
							i = dsSAPCcnt;
						}
					}
				}
				ncvo.setSctrwAllXpcPmtnCstVoList(dsSAPCList);
			}

			// 기타전자계약서
			if (dsEEC != null) {
//				logger.debug(dsEEC.saveXml());
				dmlCode = "";
				int dsEECcnt = 0;
				List<EtcEltCtrwVO> tmpEECList = requestHelper.getValueObjects(EtcEltCtrwVO.class, dsEEC);
				List<EtcEltCtrwVO> dsEECList = new ArrayList<EtcEltCtrwVO>();

				EtcEltCtrwVO eecvo;

				if ("2".equals(CtrwChg)) {
					for (int i = 0; i < dsEEC.getRowCount(); i++) {
						eecvo = tmpEECList.get(i);
						dmlCode = "3";
						eecvo.setELT_CTRW_NO(EltCtrwNo);
						eecvo.setCHG_SQNO(TmpChgSqNo);
						eecvo.setFS_RGM(requestHelper.getUserID());
						eecvo.setLS_CHGM(requestHelper.getUserID());
						eecvo.setDML_CODE(dmlCode);
						if (!StringUtils.equals("Y", dsEEC.getString(i, "ISCHECKED"))) {
							dsEECList.add(i, eecvo);
						}
					}

				} else {
					for (int i = 0; i < dsEEC.getRowCount(); i++) {
						eecvo = tmpEECList.get(i);
						if ("0".equals(ETC_CTRW_YN)) {
							dmlCode = "4";
							eecvo.setETC_CTRW_KDC("");
							dsEECcnt = dsEEC.getRowCount();
						} else {
							if (dsEEC.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
								dmlCode = "1";
								eecvo.setCHG_SQNO(ChgSqNo);
								eecvo.setFS_RGM(requestHelper.getUserID());
							} else if (dsEEC.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
								if (StringUtils.equals("Y", dsEEC.getString(i, "ISCHECKED"))) {
									logger.debug("test" + dsEEC.getString(i, "ELT_CTRW_NO").toString());
									dmlCode = "4";
								} else {
									dmlCode = "2";
								}
							}
						}

						eecvo.setELT_CTRW_NO(EltCtrwNo);
						eecvo.setLS_CHGM(requestHelper.getUserID());
						eecvo.setDML_CODE(dmlCode);
						dsEECList.add(i, eecvo);

						if (dsEECcnt != 0)
							i = dsEECcnt;
					}
				}
				ncvo.setEtcEltCtrwVoList(dsEECList);
			}
			anwEltCtrwDrupService.saveAnwEltCtrwDrup(ncvo);
			sendData(response, platformData, 1, "result.message.save.success");
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}


	
	/* 초기 데이터 세팅 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/ct/eltctrw/retrieveInitEltctrwList")
	public void retrieveInitEltctrwList(HttpServletRequest request, HttpServletResponse response) {
		
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		logger.debug( "***********************************************************************************************" );
		logger.debug( "["  + requestHelper.getUserID() +"]" );
		logger.debug( "["  + requestHelper.getUserName() +"]" );
		logger.debug( "["  + requestHelper.getGlnCode() +"]" );
		logger.debug( "["  + requestHelper.getMbcoType() +"]" );
		logger.debug( "["  + requestHelper.getCompanyName()+"]" );
		logger.debug( "["  + requestHelper.getCommanyType() +"]" );
		logger.debug( "["  + requestHelper.getLastLoginDt() +"]" );
		logger.debug( "["  + requestHelper.getUserType() +"]" );

		
		try {
		
			
				PlatformData platformData = new PlatformData();
	
				//String buyer_eno = requestHelper.getParameter("BUYER_ENO"); //사업자번호, 업체명 선택
				String buyer_eno = requestHelper.getUserID();
				
				
				
				logger.debug( "***********************************************************************************************" );
				logger.debug( "["  + buyer_eno+"]" );
				
				List<Map<String, Object>> RegisterList = null;
				
				DataSetHelper dsHelper_re = new DataSetHelper("ds_register");
				
				dsHelper_re.addColumns(RegisterNames.class);
						
				RegisterList = anwEltCtrwDrupService.retrieveRegister(buyer_eno);
					for(Map<String, Object> map_re : RegisterList) {
						dsHelper_re.setData(map_re);
					}
					
//					logger.debug("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
//					logger.debug(dsHelper_re.getDataSet().saveXml());
//					logger.debug("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
					
			    platformData.addDataSet(dsHelper_re.getDataSet());

				List<Map<String, Object>> ContractFormlist = null;			
				/**권한별서비스메뉴*/
				DataSetHelper dsHelper = new DataSetHelper("ds_etcEltStylAmm");
				dsHelper.addColumns(EltCtrwStyNames.class);
				ContractFormlist = anwEltCtrwDrupService.retrieveContractFormList();
				for(Map<String, Object> map : ContractFormlist) {
					dsHelper.setData(map);
				}
				
//				logger.debug("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
//				logger.debug(dsHelper.getDataSet().saveXml());
//				logger.debug("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
				
				platformData.addDataSet(dsHelper.getDataSet());	
				
				sendData(response, platformData);

			}  catch (AppetizerException e) {
				logger.error(e.getMessage(), e);
				sendData(response, new PlatformData(), -1, "error.message.server.exception");
			}
                
	}
	
	/**
	 * 계약서 삭제
	 * @param request
	 * @param response
	 */
	@RequestMapping(method = RequestMethod.POST, value = "/rest/ct/eltctrw/deleteEltCtrw")
	public void deleteEltCtrw(HttpServletRequest request, HttpServletResponse response) {
		try {
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);

			String eltCtrwNo = requestHelper.getParameter("eltCtrwNo");
			String chgSqno = requestHelper.getParameter("chgSqno");
			
			if (StringUtils.isEmpty(eltCtrwNo) || StringUtils.isEmpty(chgSqno)) {
				sendData(response, new PlatformData(), -1, "error.message.server.exception");
				return;
			}

			AnwEltCtrwDrupVO deleteVO = new AnwEltCtrwDrupVO();
			deleteVO.setELT_CTRW_NO(eltCtrwNo);
			deleteVO.setCHG_SQNO(chgSqno);
			anwEltCtrwDrupService.deleteTempEltCtrw(deleteVO);
			
			sendData(response, new PlatformData(), 1, "result.message.save.success");
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}
	}
}