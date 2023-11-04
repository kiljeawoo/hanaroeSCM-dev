package com.nh.escm.pds.partner.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.esum.appetizer.dao.AbstractDao;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.nh.escm.pds.company.vo.CompanyVO;
import com.nh.escm.pds.partner.vo.TradeOutVO;
import com.nh.escm.pds.partner.vo.TradeTrnrelVO;
import com.nh.escm.pds.partner.vo.TradeVO;

public class TradeDAO extends AbstractDao{
	
	/*
	 * 화면ID : VAN_DS_SC_1300,1310,1320
	 * 화면설명 : 상위사업장을 이용한 거래처조회 (본사)
	*/
	public List<Map<String,Object>> initdata(String trpl_c){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("TRPL_C", trpl_c);
		return getSqlSession().selectList("tradeDAO.initdata",map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1300,1310,1320
	 * 화면설명 : 상위사업장을 이용한 거래처조회 (지사)
	*/
	public List<Map<String,Object>> initdata_sub(String trpl_c){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("TRPL_C", trpl_c);
		return getSqlSession().selectList("tradeDAO.initdata_sub",map);
	}

	/*
	 * 화면ID : 
	 * 화면설명 : 거래처관계 조회
	 */
	public List<Map<String,Object>> retrieveTrnrel(String TRPL_C){
		return getSqlSession().selectList("tradeDAO.trnrel",TRPL_C);
	}
	
	/*
	 * 화면설명 : 계통탄력가격적용 거래처일 경우 본 화면 이용불가 처리
	*/
	public List<Map<String,Object>> rotsflex(String trpl_c){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("TRPL_C", trpl_c);
		return getSqlSession().selectList("tradeDAO.rotsflex",map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1300
	 * 화면설명 : 자체 거래관계 공급자 정보 조회
	*/
	public List<Map<String, Object>> selectcif(String TRPL_C){
		return getSqlSession().selectList("tradeDAO.selectcif",TRPL_C);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1300
	 * 화면설명 : 자체 거래관계 등록 
	*/
	public int insertDirectTrade(TradeVO vo){
		return getSqlSession().insert("tradeDAO.insertDirectTrade",vo);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1300
	 * 화면설명 : 자체 거래관계 수정
	*/
	public int updateDirectTrade(TradeVO vo,String TR_RQR_SQNO){
		vo.setTR_RQR_SQNO(TR_RQR_SQNO);
		return getSqlSession().update("tradeDAO.updateTrade", vo);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1300
	 * 화면설명 : 팝업창에서 선택한 데이터를 불러와서 master 화면에 보여준다.
	*/
	public List<Map<String,Object>> selectDirectTrade(String RQR_NA_TRPL_C,String RQR_NA_TEAM_C,String RQR_DT,String TR_RQR_SQNO){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("RQR_NA_TRPL_C", RQR_NA_TRPL_C);
		map.put("RQR_NA_TEAM_C", RQR_NA_TEAM_C);
		map.put("RQR_DT", RQR_DT);
		map.put("TR_RQR_SQNO", TR_RQR_SQNO);
		return getSqlSession().selectList("tradeDAO.selectDirectTrade",map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1301
	 * 화면설명 : 요청거래관계검색 팝업 데이터 조회 
	*/
	public List<Map<String,Object>> popupDirectTrade(String trpl_c,String CSER_CTR_TPC,String SPY_TPC,String CSER_TRPL_C,String CSER_TEAM,String RQR_NA_TRPL_C){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("TRPL_C", trpl_c);
		map.put("CSER_CTR_TPC", CSER_CTR_TPC);
		map.put("SPY_TPC", SPY_TPC);
		map.put("CSER_TRPL_C", CSER_TRPL_C);
		map.put("CSER_TEAM", CSER_TEAM);
		map.put("RQR_NA_TRPL_C", RQR_NA_TRPL_C);
		return getSqlSession().selectList("tradeDAO.popupDirect",map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1302
	 * 화면설명 : 거래처조회 팝업
	*/
	public List<Map<String,Object>> retrievePopup(String TRPL_C_KIND,String NAAC_DSC,String searchText){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("TRPL_C_KIND", TRPL_C_KIND);
		map.put("NAAC_DSC", NAAC_DSC);
		map.put("searchText", searchText);
		return getSqlSession().selectList("tradeDAO.tradesPop",map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1310
	 * 화면설명 : 하나로마트 거래관계(R2) 조회 이벤트
	*/
	public List<Map<String,Object>> selectHanaroTrades(String[] TRPL_C_ARR,String local_code,String ser_na,String cser_na,String cser_team,String rdo_gubun,String UP_TRPL_C){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("TRPL_C", TRPL_C_ARR);
		map.put("LOCAL_CODE", local_code);
		map.put("SERTR", ser_na);
		map.put("CSERTR", cser_na);
		map.put("CSERTEAM", cser_team);
		map.put("GUBUN",rdo_gubun);
		map.put("UP_TRPL_C", UP_TRPL_C);
		return getSqlSession().selectList("tradeDAO.selectHanaroTrades",map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1310
	 * 화면설명 : 하나로마트 거래관계(R2) 거래관계 마스터 추가
	*/
	public int insertHanaroTradesM(TradeTrnrelVO vo){
		return getSqlSession().insert("tradeDAO.insertHanaroTradesM",vo);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1310
	 * 화면설명 : 하나로마트 거래관계(R2) 거래관계 디테일 추가
	*/
	public int insertHanaroTradesD(TradeTrnrelVO vo){
		return getSqlSession().insert("tradeDAO.insertHanaroTradesD",vo);
	}
	/*
	 * 화면ID : VAN_DS_SC_1310
	 * 화면설명 : 하나로마트 거래관계(R2) 거래관계 수정요청 삭제(마스터)
	*/
	public int updateHanaroTradesM(TradeTrnrelVO vo){
		return getSqlSession().insert("tradeDAO.updateHanaroTradesM",vo);
	}
	/*
	 * 화면ID : VAN_DS_SC_1310
	 * 화면설명 : 하나로마트 거래관계(R2) 거래관계 수정요청 삭제(디테일)
	*/
	public int updateHanaroTradesD(TradeTrnrelVO vo){
		return getSqlSession().insert("tradeDAO.updateHanaroTradesD",vo);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1320
	 * 화면설명 : 탄력가격업체거래관계 마스터 조회
	*/
	public List<Map<String, Object>> selectFlexTrades(String trpl_c,String local_code,String gubun,String na_gubun,String schtext){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("GUBUN", gubun);				//조회검색 구분
		map.put("MNGT_C", "8808983000015");		//주관사업장 마트분사 (고정)
		map.put("TEAM_C", "00");				//권한사업장 팀 (로그인)
		map.put("NA_RGN_C", local_code);		//지역코드
		map.put("NA_GUBUN", na_gubun);			//거래처구분
		map.put("SCHTEXT", schtext);			//검색명
		return getSqlSession().selectList("tradeDAO.selectFlexTrades", map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1320
	 * 화면설명 : 탄력가격업체거래관계 디테일 조회
	*/
	public List<Map<String, Object>> selectFlexTradesD(String trpl_c){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("TRPL_C", trpl_c);
		return getSqlSession().selectList("tradeDAO.selectFlexTradesD",map);
	}
	/*
	 * 화면ID : 1310,1320
	 * 화면설명 : 거래관계 탄력 조회
	*/
	public int selectrots(Map<String, Object> map,String cser_c,String cser_team,String cser_amnno){
		map.put("CSER_NA_TRPL_C", cser_c);	//수요사업장
		map.put("CSER_NA_TEAM_C", cser_team);	//수요사업장팀
		map.put("SPLR_NA_TRPL_C", map.get("NA_TRPL_C"));		//공급처코드
		map.put("MNGT_NA_TRPL_C", "8808983000015");				//하나로마트분사
		map.put("MNGT_NA_TEAM_C", "00");						//하나로마트분사팀
		map.put("CSER_AMNNO", cser_amnno);
		return getSqlSession().selectOne("tradeDAO.selectrots", map);
	}
	
	/*
	 * 화면ID : 1310,1320
	 * 화면설명 : 거래관계 탄력 조회
	*/
	public int selectRelCnt(Map<String, Object> map,String cser_c,String cser_team,String cser_amnno){
		map.put("CSER_NA_TRPL_C", cser_c);	//수요사업장
		map.put("CSER_NA_TEAM_C", cser_team);	//수요사업장팀
		map.put("SPLR_NA_TRPL_C", map.get("NA_TRPL_C"));		//공급처코드
		map.put("MNGT_NA_TRPL_C", "8808983000015");				//하나로마트분사
		map.put("MNGT_NA_TEAM_C", "00");						//하나로마트분사팀
		map.put("CSER_AMNNO", cser_amnno);
		return getSqlSession().selectOne("tradeDAO.selectRelCnt", map);
	}
	
	public int selectCompRelCnt(TradeTrnrelVO vo) {
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("CSER_NA_TRPL_C", vo.getCSER_NA_TRPL_C());     //수요사업장
		map.put("CSER_NA_TEAM_C", vo.getCSER_NA_TEAM_C());	   //수요사업장팀
		map.put("SPLR_NA_TRPL_C", vo.getSPLR());		       // 공급처코드
		
		return getSqlSession().selectOne("tradeDAO.selectCompRelCnt", map);

	}
	/*
	 * 화면ID : VAN_DS_SC_1320
	 * 화면설명 : 탄력가격업체거래관계 마스터 추가
	*/
	public int insertFlexTradesM(TradeTrnrelVO vo){
		return getSqlSession().insert("tradeDAO.insertFlexTradesM",vo);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1320
	 * 화면설명 : 탄력가격업체거래관계 디테일 추가
	*/
	public int insertFlexTradesD(TradeTrnrelVO vo){
		String na_trpl_c = vo.getNA_TRPL_C();
		vo.setCngTrpl(na_trpl_c); 	//체크된 공급처
		vo.setCngTeam("00");		//고정 팀코드
		return getSqlSession().insert("tradeDAO.insertFlexTradesD",vo);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1330
	 * 화면설명 : 거래관계조회
	*/
	public List<Map<String, Object>> selectTrade(String rdochoose,String[] TRPL_C_ARR,String inputTRPL_C,String inputTEAM,String combochk1,String combochk2,String combochk3,String combochk4){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("SEPARATOR", rdochoose);		// 조회구분코드
		map.put("TRPL_C", TRPL_C_ARR);			// 사업장코드
		map.put("InTRPL_C", inputTRPL_C);		// 공급자,수요자 입력 사업장코드
		map.put("InTEAM", inputTEAM);			// 공급자,수요자 입력 사업장코드(팀코드)
		map.put("CSER_CTR_TPC", combochk1);		// 계약유형
		map.put("SPY_TPC", combochk2);			// 공급유형
		map.put("NA_WRS_LCLC", combochk3);		// 상품대분류
		map.put("NA_WRS_MCLC", combochk4);		// 상품중분류
		return getSqlSession().selectList("tradeDAO.selectTrade",map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1340
	 * 화면설명 : 사업장 조회
	*/
	public List<Map<String,Object>> selectStore(String TRPL_C){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("TRPL_C", TRPL_C);
		return getSqlSession().selectList("tradeDAO.selectStore",map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1323
	 * 화면설명 : 지사 출고 거래관계 조회
	*/
	public List<Map<String,Object>> selectNatrplCList(String TRPL_C, String mbcoType, String UP_TRPL_C){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("TRPL_C", TRPL_C);
		map.put("MBCO_TYPE", mbcoType);
		map.put("UP_TRPL_C", UP_TRPL_C);
		return getSqlSession().selectList("tradeDAO.selectNatrplCList",map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1340
	 * 화면설명 : 사업장 조회 출력
	*/
	public List<CompanyVO> selectPrintStore(String TRPL_C){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("TRPL_C", TRPL_C);
		return getSqlSession().selectList("tradeDAO.selectPrintStore",map);
	}
	
	/*
	 * 화면ID : VAN_DS_SC_1310
	 * 화면설명 : 하나로마트 거래관계(R2) 거래관계 마스터 추가
	*/
	public void insertNatrplCList(String glncode, String TRPL_C, String userId,TradeOutVO vo){
		HashMap hm = new HashMap();
		hm.put("UP_NA_TRPL_C", glncode);
		hm.put("NA_TRPL_C", TRPL_C);
		hm.put("userId", userId);
		hm.put("CSER_NA_TRPL_C", vo.getCSER_NA_TRPL_C());
		hm.put("CSER_NA_TEAM_C", vo.getCSER_NA_TEAM_C());
		hm.put("USE_YN", vo.getUSE_YN());
		System.out.println("######  "+ vo.getUSE_YN());
		getSqlSession().insert("tradeDAO.insertNatrplCList",hm);
	}

	public void downloadExcelTrades(String rdochoose,String[] TRPL_C_ARR,String inputTRPL_C,String inputTEAM,String combochk1,String combochk2,String combochk3,String combochk4,ExcelFileMakerResultHandler handler){
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("SEPARATOR", rdochoose);		// 조회구분코드
		map.put("TRPL_C", TRPL_C_ARR);			// 사업장코드
		map.put("InTRPL_C", inputTRPL_C);		// 공급자,수요자 입력 사업장코드
		map.put("InTEAM", inputTEAM);			// 공급자,수요자 입력 사업장코드(팀코드)
		map.put("CSER_CTR_TPC", combochk1);		// 계약유형
		map.put("SPY_TPC", combochk2);			// 공급유형
		map.put("NA_WRS_LCLC", combochk3);		// 상품대분류
		map.put("NA_WRS_MCLC", combochk4);		// 상품중분류
		getSqlSession().select("tradeDAO.downloadExcelTrades",map, handler);
	}


}

