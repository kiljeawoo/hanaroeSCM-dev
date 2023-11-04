package com.nh.escm.common.service;

import java.util.List;
import java.util.Map;
import java.util.ResourceBundle;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.util.DateUtil;
import com.nh.escm.common.dao.SentCheckDao;
import com.nh.escm.common.exception.NHSentErrorException;
import com.nh.escm.scm.delivery.service.DeliveryNoticeService;

@Service
public class SentCheckService extends AbstractService {

	@Autowired
	private SentCheckDao sentCheckDao;
	
	@Autowired
	private DeliveryNoticeService deliveryNoticeService;
	
	private int limitCnt = 60;
	
	private String defaultMessage = "[ERROR]";
	private String timeOutMessage = "";
	
	@PostConstruct
	public void setDefaultMessage() {
		ResourceBundle bundle =  ResourceBundle.getBundle("message.message");
		defaultMessage = bundle.getString("error.message.nhmca.interface.default.error");
		timeOutMessage = bundle.getString("error.message.nhmca.interface.error");
	}
	
	
	/**
	 * 쿠폰등록
	 * @param TEMP_SEQ
	 * @return
	 * @throws NHSentErrorException
	 */
	public boolean checkSendState(String TEMP_SEQ) throws NHSentErrorException {
		
//		Map<String, Object> map = null;
//		int cnt = 0;
//		int total = 0;
//		int error = 0;
//		int yes = 0;
//		String cntn = "";
//		while (true) {
//			map = sentCheckDao.checkSendState(TEMP_SEQ);
//			if(map != null) {
//				total = NumberUtils.toInt(map.get("TOTAL").toString());
//				error = NumberUtils.toInt(map.get("ERROR").toString());
//				yes = NumberUtils.toInt(map.get("YES").toString());
//				
//				if(total == yes) {
//					break;
//				} else if(error != 0) {
//					if(map.get("RSP_C_CNTN") != null)
//						cntn = map.get("RSP_C_CNTN").toString();
//					else
//						cntn = defaultMessage;
//					throw new NHSentErrorException(cntn);
//				} else if(total != (error+yes)) {
//					try {
//						if(cnt == limitCnt) {
//							throw new NHSentErrorException(timeOutMessage);
//						}
//						Thread.sleep(500);
//						cnt++;
//					} catch (InterruptedException e) {
//						logger.error(e.getMessage(), e);
//					}
//				}
//			} else {
//				break;
//			}
//		}
		return true;
	}	

	
	/**
	 * 쿠폰대금등록
	 * @param ADJ_YM
	 * @param ADJPL_NA_TRPL_C
	 * @param CPN_SC
	 * @return
	 * @throws NHSentErrorException
	 */
	public boolean checkCouponSaleResult(String ADJ_YM, String ADJPL_NA_TRPL_C, int CPN_SC)
			throws NHSentErrorException {
//		Map<String, Object> map = null;
//		int cnt = 0;
//		int total = 0;
//		int error = 0;
//		int yes = 0;
//		String cntn = "";
//		while (true) {
//			map = sentCheckDao.checkCouponSaleResult(ADJ_YM, ADJPL_NA_TRPL_C, CPN_SC);
//			if(map != null) {
//				total = NumberUtils.toInt(map.get("TOTAL").toString());
//				error = NumberUtils.toInt(map.get("ERROR").toString());
//				yes = NumberUtils.toInt(map.get("YES").toString());
//				
//				if(total == yes) {
//					break;
//				} else if(error != 0) {
//					if(map.get("RSP_C_CNTN") != null)
//						cntn = map.get("RSP_C_CNTN").toString();
//					else
//						cntn = defaultMessage;
//					throw new NHSentErrorException(cntn);
//				} else if(total != (error+yes)) {
//					try {
//						if(cnt == (limitCnt*2)) {
//							throw new NHSentErrorException(timeOutMessage);
//						}
//						Thread.sleep(500);
//						cnt++;
//					} catch (InterruptedException e) {
//						logger.error(e.getMessage(), e);
//					}
//				}
//			} else {
//				break;
//			}
//		}
		return true;
	}

	/**
	 * 수주등록
	 * @param ODRPL_NA_TRPL_C
	 * @param ODRPL_NA_TEAM_C
	 * @param ODR_DT
	 * @param ODR_SLPNO
	 * @return
	 * @throws NHSentErrorException
	 */
	public String orderCheckSendState(
			String ODRPL_NA_TRPL_C,
			String ODRPL_NA_TEAM_C,
			String ODR_DT,
			String ODR_SLPNO)
			throws NHSentErrorException {
		Map<String, Object> map = null;
		int cnt = 0;
		String PRC_YN = "";
		String RSP_C_CNTN = "";
		String successMessage = "";
		while (true) {
			map = sentCheckDao.orderCheckSendState(ODRPL_NA_TRPL_C, ODRPL_NA_TEAM_C, ODR_DT, ODR_SLPNO);
			if(map != null) {
				
				PRC_YN = map.get("PRC_YN").toString();
				
				if(PRC_YN.equals("Y") || PRC_YN.equals("R")) {
					break;
				} else if(PRC_YN.equals("E")) {
					if(map.get("RSP_C_CNTN") != null)
						RSP_C_CNTN = map.get("RSP_C_CNTN").toString();
					else
						RSP_C_CNTN = defaultMessage;
					throw new NHSentErrorException(RSP_C_CNTN);
				} else {
					try {
						if(cnt == limitCnt) {
							throw new NHSentErrorException(timeOutMessage);
						}
						Thread.sleep(500);
						cnt++;
					} catch (InterruptedException e) {
						logger.error(e.getMessage(), e);
					}
				}
			} else {
				break;
			}
		}
		
		if(map != null) {
			StringBuilder sb = new StringBuilder();
			sb.append("수주전표번호 ["+map.get("ODR_SLPNO")+"] 정상 처리 되었습니다.\n" );
			sb.append("발주처:"+map.get("ODRPL_NA_TRPL_NM")+" ["+ODRPL_NA_TRPL_C+"]\n");
			sb.append("공급처:"+map.get("SPYPL_NA_TRPL_NM")+" ["+map.get("SPYPL_NA_TRPL_C")+"]\n");
			sb.append("배송요청일:"+DateUtil.convertDateToString("yyyy-MM-dd", DateUtil.convertStringToTimestamp(map.get("DVY_RQR_DT").toString(), "yyyyMMdd")));
			successMessage = sb.toString();
		}
		
		return successMessage;
	}	
	
	/**
	 * 배송예정서
	 * @param SPYPL_NA_TRPL_C
	 * @param DVYAA_NA_TRPL_C
	 * @param NA_DVY_PLASH_SLPNO
	 * @param DVY_PLA_DT
	 * @return
	 * @throws NHSentErrorException
	 */
	public String dlvpnshtCheckSendState(
			String SPYPL_NA_TRPL_C,
			String DVYAA_NA_TRPL_C,
			String NA_DVY_PLASH_SLPNO,
			String DVY_PLA_DT,
			String type,
			String IDU)
			throws NHSentErrorException {
		Map<String, Object> map = null;
		String successMessage = "";

		map = sentCheckDao.dlvpnshtCheckSendState(SPYPL_NA_TRPL_C, DVYAA_NA_TRPL_C, NA_DVY_PLASH_SLPNO, DVY_PLA_DT);
			
		if(map != null) {
			StringBuilder sb = new StringBuilder();
			if ("취소".equals(type)) {
				sb.append("배송예정서번호 ["+map.get("NA_DVY_PLASH_SLPNO")+"] 취소요청 되었습니다.\n" );
			} else {
				sb.append("배송예정서번호 ["+map.get("NA_DVY_PLASH_SLPNO")+"] 정상 "+type+" 되었습니다.\n" );
			}
//			sb.append("배송예정서번호 ["+map.get("NA_DVY_PLASH_SLPNO")+"] 정상 "+type+" 되었습니다.\n" );
			sb.append("발주처:"+map.get("ODRPL_NA_TRPL_NM")+" ["+map.get("ODRPL_NA_TRPL_C")+"]\n");
			sb.append("공급처:"+map.get("SPYPL_NA_TRPL_NM")+" ["+map.get("SPYPL_NA_TRPL_C")+"]\n");
			sb.append("배송예정일:"+DateUtil.convertDateToString("yyyy-MM-dd", DateUtil.convertStringToTimestamp(map.get("DVY_PLA_DT").toString(), "yyyyMMdd")));
			if("처리".equals(type)) {
				sb.append("\n");
				sb.append("\n경제통합시스템 전송 지연으로 거래명세표가 출력되지 않으면 배송예정서 거래처별 또는 상품별조회 화면에서 출력하십시오.");
				sb.append("\n거래명세표를 출력하시겠습니까?");
				sb.append("\n");
				sb.append("\n(* 경제통합시스템 진행 상황에 따라 간혹 "+type+"되지 않을 수 있습니다.");
				sb.append("\n배송예정서 처리결과에 대한 자세한 내용은 배송예정결과조회 화면을 참고해주시기 바랍니다.)");
				sb.append(";"+ SPYPL_NA_TRPL_C + ";" + DVYAA_NA_TRPL_C + ";" + map.get("NA_DVY_PLASH_SLPNO"));
			} else if ("취소".equals(type)) {
				sb.append("\n");
				sb.append("\n(* 경제통합시스템 진행 상황에 따라 간혹 "+type+"되지 않을 수 있습니다.");
				sb.append("\n배송예정서 처리결과에 대한 자세한 내용은 배송예정결과조회 화면을 참고해주시기 바랍니다.)");
			}
			
			successMessage = sb.toString();
		}
		return successMessage;
	}

	/**
	 * 상품등록
	 * @param VAN_C_RQ_NO
	 * @return
	 * @throws NHSentErrorException
	 */
	public boolean WRSREQCheckSendState(
			String VAN_C_RQ_NO)
			throws NHSentErrorException {
//		Map<String, Object> map = null;
//		int cnt = 0;
//		String PRC_YN = "";
//		String RSP_C_CNTN = "";
//		while (true) {
//			map = sentCheckDao.WRSREQCheckSendState(VAN_C_RQ_NO);
//			if(map != null) {
//				
//				PRC_YN = map.get("PRC_YN").toString();
//				
//				if(PRC_YN.equals("Y") || PRC_YN.equals("R")) {
//					break;
//				} else if(PRC_YN.equals("E")) {
//					if(map.get("RSP_C_CNTN") != null)
//						RSP_C_CNTN = map.get("RSP_C_CNTN").toString();
//					else
//						RSP_C_CNTN = defaultMessage;					
//					throw new NHSentErrorException(RSP_C_CNTN);
//				} else {
//					try {
//						if(cnt == limitCnt) {
//							throw new NHSentErrorException(timeOutMessage);
//						}
//						Thread.sleep(500);
//						cnt++;
//					} catch (InterruptedException e) {
//							logger.error(e.getMessage(), e);
//					}
//				}
//			} else {
//				break;
//			}
//		}
		return true;
	}


	/**
	 * 반품확인
	 * @param NA_TRPL_C
	 * @param NA_TEAM_C
	 * @param DRUP_DT
	 * @param RGD_PLA_NO
	 * @return
	 * @throws NHSentErrorException
	 */
	public boolean RTNCNFCheckSendState(
			String NA_TRPL_C,
			String NA_TEAM_C,
			String DRUP_DT,
			String RGD_PLA_NO)
			throws NHSentErrorException {
//		Map<String, Object> map = null;
//		int cnt = 0;
//		String PRC_YN = "";
//		String RSP_C_CNTN = "";
//		while (true) {
//			map = sentCheckDao.RTNCNFCheckSendState(NA_TRPL_C, NA_TEAM_C, DRUP_DT, RGD_PLA_NO);
//			if(map != null) {
//				
//				PRC_YN = map.get("PRC_YN").toString();
//				
//				if(PRC_YN.equals("Y") || PRC_YN.equals("R")) {
//					break;
//				} else if(PRC_YN.equals("E")) {
//					if(map.get("RSP_C_CNTN") != null)
//						RSP_C_CNTN = map.get("RSP_C_CNTN").toString();
//					else
//						RSP_C_CNTN = defaultMessage;
//					throw new NHSentErrorException(RSP_C_CNTN);
//				} else {
//					try {
//						if(cnt == limitCnt) {
//							throw new NHSentErrorException(timeOutMessage);
//						}
//						Thread.sleep(500);
//						cnt++;
//					} catch (InterruptedException e) {
//						logger.error(e.getMessage(), e);
//					}
//				}
//			} else {
//				break;
//			}
//		}
		return true;
	}


	/**
	 * 결품사유
	 * @param NA_BZPLC
	 * @param STR_PLA_DT
	 * @param SLPNO
	 * @param NA_TRPL_C
	 * @param NA_WRS_C
	 * @param NA_TEAM_C
	 * @return
	 * @throws NHSentErrorException
	 */
	public boolean STPNLTCheckSendState(
			String NA_BZPLC,
			String STR_PLA_DT,
			String SLPNO,
			String NA_TRPL_C,
			String NA_WRS_C,
			String NA_TEAM_C)
			throws NHSentErrorException {
//		Map<String, Object> map = null;
//		int cnt = 0;
//		String PRC_YN = "";
//		String RSP_C_CNTN = "";
//		while (true) {
//			map = sentCheckDao.STPNLTCheckSendState(NA_BZPLC, STR_PLA_DT, SLPNO, NA_TRPL_C, NA_WRS_C, NA_TEAM_C);
//			if(map != null) {
//				
//				PRC_YN = map.get("PRC_YN").toString();
//				
//				if(PRC_YN.equals("Y") || PRC_YN.equals("R")) {
//					break;
//				} else if(PRC_YN.equals("E")) {
//					if(map.get("RSP_C_CNTN") != null)
//						RSP_C_CNTN = map.get("RSP_C_CNTN").toString();
//					else
//						RSP_C_CNTN = defaultMessage;
//					throw new NHSentErrorException(RSP_C_CNTN);
//				} else {
//					try {
//						if(cnt == limitCnt) {
//							throw new NHSentErrorException(timeOutMessage);
//						}
//						Thread.sleep(500);
//						cnt++;
//					} catch (InterruptedException e) {
//						logger.error(e.getMessage(), e);
//					}
//				}
//			} else {
//				break;
//			}
//		}
		return true;
	}

	/**
	 * 차량입고예약(미사용)
	 * @param PHD_NA_BZPLC
	 * @param VHC_BKG_PHD_IDVD_NO
	 * @param NA_TRPL_C
	 * @param VHC_BKG_DT
	 * @return
	 * @throws NHSentErrorException
	 */
	public boolean VHCBKGCheckSendState(
			String PHD_NA_BZPLC,
			String VHC_BKG_PHD_IDVD_NO,
			String NA_TRPL_C,
			String VHC_BKG_DT)
			throws NHSentErrorException {
//		Map<String, Object> map = null;
//		int cnt = 0;
//		String PRC_YN = "";
//		String RSP_C_CNTN = "";
//		while (true) {
//			map = sentCheckDao.VHCBKGCheckSendState(PHD_NA_BZPLC, VHC_BKG_PHD_IDVD_NO, NA_TRPL_C, VHC_BKG_DT);
//			if(map != null) {
//				
//				PRC_YN = map.get("PRC_YN").toString();
//				
//				if(PRC_YN.equals("Y") || PRC_YN.equals("R")) {
//					break;
//				} else if(PRC_YN.equals("E")) {
//					if(map.get("RSP_C_CNTN") != null)
//						RSP_C_CNTN = map.get("RSP_C_CNTN").toString();
//					else
//						RSP_C_CNTN = defaultMessage;
//					throw new NHSentErrorException(RSP_C_CNTN);
//				} else {
//					try {
//						if(cnt == limitCnt) {
//							throw new NHSentErrorException(timeOutMessage);
//						}
//						Thread.sleep(500);
//						cnt++;
//					} catch (InterruptedException e) {
//						logger.error(e.getMessage(), e);
//					}
//				}
//			} else {
//				break;
//			}
//		}
		return true;
	}
	
	/**
	 * 배송예정서 일괄등록
	 * @param TEMP_SEQ
	 * @return
	 * @throws NHSentErrorException
	 */
	public boolean DLVPNSHTBATCheckSendState(String TEMP_SEQ) throws NHSentErrorException {
//		Map<String, Object> map = null;
//		int cnt = 0;
//		int total = 0;
//		int error = 0;
//		int yes = 0;
//		String cntn = "";
//		while (true) {
//			map = sentCheckDao.DLVPNSHTBATCheckSendState(TEMP_SEQ);
//			if(map != null) {
//				total = NumberUtils.toInt(map.get("TOTAL").toString());
//				error = NumberUtils.toInt(map.get("ERROR").toString());
//				yes = NumberUtils.toInt(map.get("YES").toString());
//				
//				if(total == (yes+error)) {
//					if(total == yes) {
//						break;
//					} else {
//						cntn = "전체:"+total+",성공:"+yes+",에러:"+error+",에러내용:";
//						if(map.get("RSP_C_CNTN") != null) {
//							cntn = cntn+map.get("RSP_C_CNTN").toString();
//						}else{
//							cntn = cntn+defaultMessage;
//						}
//						throw new NHSentErrorException(cntn);
//					}
//					
//				} else {
//					try {
//						if(cnt == (limitCnt*6)) {
//							throw new NHSentErrorException(timeOutMessage);
//						}
//						Thread.sleep(500);
//						cnt++;
//					} catch (InterruptedException e) {
//						logger.error(e.getMessage(), e);
//					}
//				}
//			} else {
//				break;
//			}
//		}
		return true;
	}

	public boolean TRHARAROCheckSendState(List<String> vanNoList) throws NHSentErrorException {
//		Map<String, Object> map = null;
//		int cnt = 0;
//		int total = 0;
//		int error = 0;
//		int yes = 0;
//		String cntn = "";
//		while (true) {
//			map = sentCheckDao.TRHARAROCheckSendState(vanNoList);
//			if(map != null) {
//				total = NumberUtils.toInt(map.get("TOTAL").toString());
//				error = NumberUtils.toInt(map.get("ERROR").toString());
//				yes = NumberUtils.toInt(map.get("YES").toString());
//				
//				if(total == (yes+error)) {
//					if(total == yes) {
//						break;
//					} else {
//						cntn = "전체:"+total+",성공:"+yes+",에러:"+error+",에러내용:";
//						if(map.get("RSP_C_CNTN") != null) {
//							cntn = cntn+map.get("RSP_C_CNTN").toString();
//						}else{
//							cntn = cntn+defaultMessage;
//						}
//						throw new NHSentErrorException(cntn);
//					}
//					
//				} else {
//					try {
//						if(cnt == (limitCnt*2)) {
//							throw new NHSentErrorException(timeOutMessage);
//						}
//						Thread.sleep(500);
//						cnt++;
//					} catch (InterruptedException e) {
//						logger.error(e.getMessage(), e);
//					}
//				}
//			} else {
//				break;
//			}
//		}
		return true;
	}
	
	public boolean TRFLEXCheckSendState(String vanNO) throws NHSentErrorException {
//		Map<String, Object> map = null;
//		int cnt = 0;
//		String PRC_YN = "";
//		String RSP_C_CNTN = "";
//		while (true) {
//			map = sentCheckDao.TRFLEXCheckSendState(vanNO);
//			if(map != null) {
//				
//				PRC_YN = map.get("PRC_YN").toString();
//				
//				if(PRC_YN.equals("Y") || PRC_YN.equals("R")) {
//					break;
//				} else if(PRC_YN.equals("E")) {
//					if(map.get("RSP_C_CNTN") != null)
//						RSP_C_CNTN = map.get("RSP_C_CNTN").toString();
//					else
//						RSP_C_CNTN = defaultMessage;
//					throw new NHSentErrorException(RSP_C_CNTN);
//				} else {
//					try {
//						if(cnt == limitCnt) {
//							throw new NHSentErrorException(timeOutMessage);
//						}
//						Thread.sleep(500);
//						cnt++;
//					} catch (InterruptedException e) {
//						logger.error(e.getMessage(), e);
//					}
//				}
//			} else {
//				break;
//			}
//		}
		return true;
	}


	public Map<String, Object> isOKdlvpnsht(
			String SPYPL_NA_TRPL_C,
			String DVYAA_NA_TRPL_C,
			String NA_DVY_PLASH_SLPNO ) {
		
		return sentCheckDao.dlvpnshtCheckSendState(SPYPL_NA_TRPL_C, DVYAA_NA_TRPL_C, NA_DVY_PLASH_SLPNO, null);
	}
}
