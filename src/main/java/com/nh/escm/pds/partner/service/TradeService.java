package com.nh.escm.pds.partner.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.exception.ErrorCode;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nexacro.xapi.data.DataSet;
import com.nh.escm.common.service.SequenceKeyService;
import com.nh.escm.common.vo.SQLNames.SequenceKeyName;
import com.nh.escm.pds.company.dao.CompanyDAO;
import com.nh.escm.pds.company.vo.CompanyVO;
import com.nh.escm.pds.partner.dao.TradeDAO;
import com.nh.escm.pds.partner.vo.TradeOutVO;
import com.nh.escm.pds.partner.vo.TradeTrnrelVO;
import com.nh.escm.pds.partner.vo.TradeVO;

@Service
public class TradeService {
	@Autowired
	private TradeDAO tradedao;
	
	@Autowired
	private CompanyDAO companyDao;
	
	@Autowired
	private SequenceKeyService sequenceKeyService;
	
	/*
	 * 화면ID : VAN_DS_SC_1300,1310,1320
	 * 화면설명 : 상위사업장을 이용한 거래처조회
	*/
	public List<Map<String,Object>> initdata(String trpl_c,String mbco){
		try {
			List<Map<String,Object>> list = new ArrayList<Map<String,Object>>();
			if(mbco.equals("1")){
				list = tradedao.initdata(trpl_c);
			}else if(mbco.equals("2")){
				list = tradedao.initdata_sub(trpl_c);
			}
			return list;
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : 
	 * 화면설명 : 거래처관계 조회
	 */
	public List<Map<String,Object>> retrieveTrnrel(String TRPL_C){
		try {
			return tradedao.retrieveTrnrel(TRPL_C);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1320
	 * 화면설명 : 탄력가격업체거래관계 (계통관계조회)
	*/
	public List<Map<String, Object>> rotsflex(String trpl_c){
		try {
			return tradedao.rotsflex(trpl_c);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1300
	 * 화면설명 : 자체 거래관계 공급자 정보 조회
	*/
	public List<Map<String, Object>> selectcif(String TRPL_C){
		try {
			return tradedao.selectcif(TRPL_C);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1300
	 * 화면설명 : 자체 거래관계 등록 저장
	*/
	public int insertDirectTrade(TradeVO vo,String rqr_dt_today,String hoff_trpl_c,String splr_telno,String splr_mpno,String cser_telno,String cser_mpno){
		try {
			vo.setSPYPL_HOFF_NA_TRPL_C(hoff_trpl_c);
			vo.setCSER_CTR_CHRR_TELNO(cser_telno);
			vo.setCSER_CTR_CHRR_MPNO(cser_mpno);
			vo.setSPLR_CTR_CHRR_TELNO(splr_telno);
			vo.setSPLR_CTR_CHRR_MPNO(splr_mpno);
			vo.setPRC_YN("N");
			vo.setRQR_DT(rqr_dt_today);	// 추가시 오늘날짜를 보내준다.
			return tradedao.insertDirectTrade(vo);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1300
	 * 화면설명 : 자체 거래관계 등록 수정
	*/
	public void updateDirectTrade(List<TradeVO> list,String TR_RQR_SQNO){
		try {
			tradedao.updateDirectTrade(list.get(0),TR_RQR_SQNO);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1300
	 * 화면설명 : 팝업창에서 선택한 데이터를 불러와서 master 화면에 보여준다.
	*/
	public List<Map<String,Object>> selectDirectTrade(String RQR_NA_TRPL_C,String RQR_NA_TEAM_C,String RQR_DT,String TR_RQR_SQNO){
		try {
			return tradedao.selectDirectTrade(RQR_NA_TRPL_C,RQR_NA_TEAM_C,RQR_DT,TR_RQR_SQNO);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1301
	 * 화면설명 : 요청거래관계검색 팝업 데이터 조회
	*/
	public List<Map<String,Object>> popupDirectTrade(String trpl_c,String CSER_CTR_TPC,String SPY_TPC,String CSER_TRPL_C,String CSER_TEAM,String RQR_NA_TRPL_C){
		try {
			return tradedao.popupDirectTrade(trpl_c,CSER_CTR_TPC,SPY_TPC,CSER_TRPL_C,CSER_TEAM,RQR_NA_TRPL_C);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1302
	 * 화면설명 : 거래처조회 팝업
	*/
	public List<Map<String, Object>> retrievePopup(String TRPL_C_KIND,String NAAC_DSC,String searchText){
		try {
			return tradedao.retrievePopup(TRPL_C_KIND,NAAC_DSC,searchText);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1310
	 * 화면설명 : 하나로마트 거래관계(R2) 조회 이벤트
	*/
	public List<Map<String,Object>> selectHanaroTrades(String[] TRPL_C_ARR,String local_code,String ser_na,String cser_na,String cser_team,String rdo_gubun,String UP_TRPL_C){
		try {
			List<Map<String,Object>> listvo = tradedao.selectHanaroTrades(TRPL_C_ARR,local_code,ser_na,cser_na,cser_team,rdo_gubun,UP_TRPL_C);
			return listvo;
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1310
	 * 화면설명 : 하나로마트 거래관계(R2) 거래관계 추가
	*/
	public List<String> insertHanaroTrades(String glncode, String userId, String mbcoType, DataSet dsMain, List<TradeTrnrelVO> list2) {
		try {
			List<String> vanNolist = new ArrayList<String>();

			/*
			 * 오른쪽 거래관계 리스트 체크항목 일괄처리
			 */
			for (int i = 0; i < dsMain.getRowCount(); i++) {
				SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMdd", Locale.KOREA);
				Date currentTime = new Date();
				String dTime = formatter.format(currentTime);
				String fsdtm = list2.get(i).getFSRG_DTM();
				String lsdtm = list2.get(i).getLSCHG_DTM();
				int relCnt = 0;

				/*
				 * 당일변경된 거래관계는 처리하지 않는다.
				 */
				if (!dTime.equals(fsdtm) && !dTime.equals(lsdtm)) {
					int rowType = dsMain.getRowType(i);

					// 변경공급처가 존재 할 경우
					if (rowType == DataSet.ROW_TYPE_UPDATED) {
						list2.get(i).setCRQRTRPL(glncode); // 로그인사업장
						list2.get(i).setCRQRMNENO(userId); // 로그인 아이디
						list2.get(i).setCRQRTEAM("00"); // 요청사업장 팀코드 (임시데이터)
						list2.get(i).setPRC_YN("N"); // 경통전송
						list2.get(i).setWK_DS("I");

						String van_no = sequenceKeyService.getNextHexKey(SequenceKeyName.TB_TR_HANARO_REQ);

						// 수정
						if (list2.get(i).getUPDATE_SPLR_NA_TRPL_CODE() != null) {
							if (list2.get(i).getSPLRN() != null) {
//								String u_van_no = sequenceKeyService.getNextHexKey(SequenceKeyName.TB_TR_HANARO_REQ);
//								list2.get(i).setU_VAN_RQ_NO(u_van_no);
								list2.get(i).setU_VAN_RQ_NO(van_no);
//								list2.get(i).setWK_DS("U");

								// 변경을 위한 기존 거래관계 삭제요청
								tradedao.updateHanaroTradesD(list2.get(i));
								// tradedao.updateHanaroTradesM(list2.get(i));
							}
						}

						vanNolist.add(van_no);
						list2.get(i).setVAN_RQ_NO(van_no); // 임의 코드생성

						/*
						 * 삭제하기전 마트와 업체 전체대리점중 거래관계가 2건이상 존재하는지 체크한다. 마트와 업체의 거래관계가 하나도 없게 되면 다시 거래관계를
						 * 맺을때 경통에서 문제가 생김
						 */
						if (list2.get(i).getDELETE_YN().equals("1")) {
							// 삭제체크된 행의 마트와 전 대리점 거래관계수 체크
							relCnt = checkRelCnt(list2.get(i));

							// 마트와 대리점의 거래관계를 한개 이상 유지하기 위하여 거래관계가 두개 이상인 경우만 삭제를 허용합니다.
							if (relCnt < 2) {
								// throw new AppetizerException(ErrorCode.FAILURE, "Rel count err.");
								// throw new AppetizerException(ErrorCode.SESSION_NO_AUTHORITY, "Rel count
								// err.");
								return null;
							}

							list2.get(i).setUPDATE_SPLR_NA_TRPL_CODE(list2.get(i).getSPLR());
							list2.get(i).setWK_DS("D");
						}

						tradedao.insertHanaroTradesD(list2.get(i)); // 디테일 데이터
						
						if (list2.get(i).getUPDATE_SPLR_NA_TRPL_CODE() != null && list2.get(i).getSPLRN() != null) {
							list2.get(i).setUPDATE_SPLR_NA_TRPL_CODE(list2.get(i).getSPLR());
							tradedao.insertHanaroTradesM(list2.get(i)); // 마스터 데이터
						} else {
							tradedao.insertHanaroTradesM(list2.get(i)); // 마스터 데이터
						}
					}
				} // if(!dTime.equals(fsdtm) && !dTime.equals(lsdtm))
			}
			return vanNolist;
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
			// sendData(response, new PlatformData(), 11, "금일 생성하고 삭제한 거래관계는 다시 수정할 수
			// 없습니다.\n\n익일 이후로 다시 거래관계를 맺을 수 있습니다.");
		}
	}
	
	private int checkRelCnt(TradeTrnrelVO vo){
				
		int relCnt = 0;
		relCnt = tradedao.selectCompRelCnt(vo);
		
		return relCnt;
	}
	/*
	 * 화면ID : VAN_DS_SC_1320
	 * 화면설명 : 탄력가격업체거래관계
	*/
	public List<Map<String, Object>> selectFlexTrades(String trpl_c,String local_code, String gubun, String na_gubun, String schtext){
		try {
			return tradedao.selectFlexTrades(trpl_c,local_code,gubun,na_gubun,schtext);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1320
	 * 화면설명 : 탄력가격업체거래관계 디테일
	*/
	public List<Map<String, Object>> selectFlexTradesD(List<TradeTrnrelVO> list1,String trpl_c,String rowp,String cser_c,String cser_team,String cser_amnno){
		try {
			List<Map<String, Object>> list = tradedao.selectFlexTradesD(trpl_c);
			int row = Integer.parseInt(rowp);
			for(int i=0; i<list.size(); i++){//경통비교
				int reput = tradedao.selectrots(list.get(i),cser_c,cser_team,cser_amnno);
				if(reput == 1){
					list.get(i).put("CSER_NA_TRPL_C", list1.get(row).getCSER_NA_TRPL_C());
					list.get(i).put("CSER_NA_TRPL_N", list1.get(row).getCLNTNM());
					list.get(i).put("CSER_NA_TEAM_C", list1.get(row).getCSER_NA_TEAM_C());
					list.get(i).put("CSER_NA_TEAM_N", list1.get(row).getCSER_NA_TEAM_N());
					list.get(i).put("UPDATE_CSER_CTR_TPC", list1.get(row).getCSER_CTR_TPC());
					list.get(i).put("UPDATE_SPY_TPC", list1.get(row).getSPY_TPC());
					list.get(i).put("MNGT_NA_TR_TPC", list1.get(row).getMNGT_NA_TR_TPC());
					list.get(i).put("NA_WRS_LCLC", list1.get(row).getNA_WRS_LCLC());
					list.get(i).put("SPLR_NA_TRPL_C", list1.get(row).getSPLR_NA_TRPL_C());
					list.get(i).put("SPLR_NA_TEAM_C", list1.get(row).getSPLR_NA_TEAM_C());
					list.get(i).put("MNGT_NA_TRPL_C", list1.get(row).getMNGT_NA_TRPL_C());
					list.get(i).put("MNGT_NA_TEAM_C", list1.get(row).getMNGT_NA_TEAM_C());
					list.get(i).put("CSER_TR_REL_AMNNO", list1.get(row).getCSER_TR_REL_AMNNO());
				}else{
					list.get(i).put("CSER_NA_TRPL_C", "");
					list.get(i).put("CSER_NA_TRPL_N", "");
					list.get(i).put("CSER_NA_TEAM_C", "");
					list.get(i).put("CSER_NA_TEAM_N", "");
				}
			}
			return list;
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1320
	 * 화면설명 : 탄력가격업체거래관계 저장
	*/
	public String insertFlexTrades(List<TradeTrnrelVO> list2,DataSet dsDetail,String trpl_c,String userId){
		
		String van_no = sequenceKeyService.getNextHexKey(SequenceKeyName.TB_TR_FLEX_REQ);
		TradeTrnrelVO master = null;
		
		//디테일 체크 갯수에 따른 for문
		for(int i=0;i<list2.size();i++){
			
			int rowType = dsDetail.getRowType(i);
			
			if (rowType == DataSet.ROW_TYPE_UPDATED
					&& ("1".equals(list2.get(i).getCHECK_YN()) || "1".equals(list2.get(i).getDELETE_YN()))) {
				
				list2.get(i).setVAN_RQ_NO(van_no);
				list2.get(i).setCRQRTRPL(trpl_c);
				list2.get(i).setCRQRTEAM("00");
				list2.get(i).setCRQRMNENO(userId);
				list2.get(i).setCSER_NA_TRPL_C("8808983000015");
				list2.get(i).setCSER_NA_TEAM_C("00");
				list2.get(i).setSPLR_NA_TRPL_C(trpl_c);
				list2.get(i).setSPLR_NA_TEAM_C("00");
				list2.get(i).setPRC_YN("N");
				
				if (master == null) {
					master = list2.get(i);
				}
				
				//저장,수정
				if ("1".equals(list2.get(i).getCHECK_YN())) {
					list2.get(i).setWK_DS("I"); // 저장("I")
					// 수정("U") 사용안함.
				}
				
				//삭제
				if ("1".equals(list2.get(i).getDELETE_YN())) {
					list2.get(i).setMNGT_NA_TR_TPC(null);
					list2.get(i).setNA_WRS_LCLC(null);
					list2.get(i).setNA_WRS_MCLC(null);
					list2.get(i).setCSER_TR_REL_AMNNO(null);
					list2.get(i).setWK_DS("D"); // 삭제("D")
				}
				
				tradedao.insertFlexTradesD(list2.get(i));
				
			}
		}
		
		// 배치처리 문제 때문에, 마스터를 마지막에 insert.
		if (master != null) {
			tradedao.insertFlexTradesM(master);
		}
		
		return van_no;
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1330
	 * 화면설명 : 거래관계조회
	*/
	public List<Map<String, Object>> selectTrades(String rdochoose,String[] TRPL_C_ARR,String inputTRPL_C,String inputTEAM,String combochk1,String combochk2,String combochk3,String combochk4){
		try {
			return tradedao.selectTrade(rdochoose,TRPL_C_ARR,inputTRPL_C,inputTEAM,combochk1,combochk2,combochk3,combochk4);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1340
	 * 화면설명 : 사업장 조회
	*/
	public List<Map<String,Object>> selectStore(String TRPL_C){
		try { 
			return tradedao.selectStore(TRPL_C);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1323
	 * 화면설명 : 지사 출고 거래관계 조회
	*/
	public List<Map<String,Object>> selectNatrplCList(String TRPL_C, String mbcoType, String UP_TRPL_C){
		try { 
			return tradedao.selectNatrplCList(TRPL_C, mbcoType, UP_TRPL_C);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1340
	 * 화면설명 : 사업장 조회 출력
	*/
	public List<CompanyVO> selectPrintStore(String TRPL_C){
		try {
			return tradedao.selectPrintStore(TRPL_C);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
	/*
	 * 화면ID : VAN_DS_SC_1310
	 * 화면설명 : 하나로마트 거래관계(R2) 거래관계 추가
	*/
	public void insertNatrplCList(String glncode, String TRPL_C, String userId, List<TradeOutVO> list2){
		try {
			
			
			for(int i=0; i<list2.size(); i++){
				
				tradedao.insertNatrplCList(glncode, TRPL_C, userId, list2.get(i));
			}
			
			
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
			//sendData(response, new PlatformData(), 11, "금일 생성하고 삭제한 거래관계는 다시 수정할 수 없습니다.\n\n익일 이후로 다시 거래관계를 맺을 수 있습니다.");
		}
	}

	public void downloadExcelTrades(String rdochoose,String[] TRPL_C_ARR,String inputTRPL_C,String inputTEAM,String combochk1,String combochk2,String combochk3,String combochk4, ExcelFileMakerResultHandler handler){
		try {
			tradedao.downloadExcelTrades(rdochoose,TRPL_C_ARR,inputTRPL_C,inputTEAM,combochk1,combochk2,combochk3,combochk4, handler);
		} catch (DataAccessException e) {
			throw new AppetizerException(e);
		}
	}
}
