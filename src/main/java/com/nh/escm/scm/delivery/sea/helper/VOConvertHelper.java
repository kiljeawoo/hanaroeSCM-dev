package com.nh.escm.scm.delivery.sea.helper;

import java.math.BigDecimal;
import java.math.MathContext;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.nexacro.xapi.data.DataSet;
import com.nh.escm.common.service.SequenceKeyService;
import com.nh.escm.scm.delivery.sea.service.DeliveryNoticeSeaService;
import com.nh.escm.scm.delivery.sea.vo.DeliveryNoticeOrderDetailVO;
import com.nh.escm.scm.delivery.sea.vo.DeliveryNoticeOrderVO;
import com.nh.escm.scm.delivery.sea.vo.NoticeOrderDetailVO;
import com.nh.escm.scm.delivery.sea.vo.NoticeOrderTempFileDetailVO;
import com.nh.escm.scm.delivery.sea.vo.NoticeOrderTempFileMasterVO;
import com.nh.escm.scm.delivery.sea.vo.NoticeOrderVO;

public class VOConvertHelper {
	
	private final Log logger = LogFactory.getLog(getClass());
	
	private NoticeOrderTempFileMasterVO tmpMvo;
	private DeliveryNoticeOrderVO mvo;
	private String naDvyPlashSlpno;
	private NoticeOrderVO noticeOrderVo;
	private DeliveryNoticeOrderVO deliveryNoticeOrderVo;
	
	private PlatFormRequestHelper requestHelper;
	private DataSet dsM; 
	private DataSet dsD;
	private SequenceKeyService seqKeyService;
	private DeliveryNoticeSeaService deliveryNoticeService;
	private List<DeliveryNoticeOrderVO> deliveryNoticeOrderVoList;
	
	
	public String getNaDvyPlashSlpno() {
		return naDvyPlashSlpno;
	}

	public void setNaDvyPlashSlpno(String naDvyPlashSlpno) {
		this.naDvyPlashSlpno = naDvyPlashSlpno;
	}

	public PlatFormRequestHelper getRequestHelper() {
		return requestHelper;
	}

	public void setRequestHelper(PlatFormRequestHelper requestHelper) {
		this.requestHelper = requestHelper;
	}

	public DataSet getDsM() {
		return dsM;
	}

	public void setDsM(DataSet dsM) {
		this.dsM = dsM;
	}

	public DataSet getDsD() {
		return dsD;
	}

	public void setDsD(DataSet dsD) {
		this.dsD = dsD;
	}

	public SequenceKeyService getSeqKeyService() {
		return seqKeyService;
	}

	public void setSeqKeyService(SequenceKeyService seqKeyService) {
		this.seqKeyService = seqKeyService;
	}

	public Log getLogger() {
		return logger;
	}

	public List<DeliveryNoticeOrderVO> getDeliveryNoticeOrderVoList() {
		return deliveryNoticeOrderVoList;
	}

	public void setDeliveryNoticeOrderVoList(
			List<DeliveryNoticeOrderVO> deliveryNoticeOrderVoList) {
		this.deliveryNoticeOrderVoList = deliveryNoticeOrderVoList;
	}

	public NoticeOrderVO getNoticeOrderVo() {
		return noticeOrderVo;
	}

	public void setNoticeOrderVo(NoticeOrderVO noticeOrderVo) {
		this.noticeOrderVo = noticeOrderVo;
	}

	public DeliveryNoticeOrderVO getDeliveryNoticeOrderVo() {
		return deliveryNoticeOrderVo;
	}

	public void setDeliveryNoticeOrderVo(DeliveryNoticeOrderVO deliveryNoticeOrderVo) {
		this.deliveryNoticeOrderVo = deliveryNoticeOrderVo;
	}

	public NoticeOrderTempFileMasterVO getTmpMvo() {
		return tmpMvo;
	}

	public void setTmpMvo(NoticeOrderTempFileMasterVO tmpMvo) {
		this.tmpMvo = tmpMvo;
	}

	public DeliveryNoticeOrderVO getMvo() {
		return mvo;
	}

	public void setMvo(DeliveryNoticeOrderVO mvo) {
		this.mvo = mvo;
	}

	public static VOConvertHelper newInstance(PlatFormRequestHelper requestHelper, DataSet dsM, DataSet dsD, DeliveryNoticeSeaService deliveryNoticeService, SequenceKeyService seqKeyService, String rogoInfCrtDsc, String editType){
		return new VOConvertHelper(requestHelper, dsM, dsD, deliveryNoticeService, seqKeyService, rogoInfCrtDsc, editType);
	}
	
	public static VOConvertHelper newInstance(DataSet dsM, DataSet dsD){
		return new VOConvertHelper(dsM, dsD);
	}
	
	public static VOConvertHelper newInstance(NoticeOrderTempFileMasterVO tmpMvo, String naDvyPlashSlpno){
		return new VOConvertHelper(tmpMvo, naDvyPlashSlpno);
	}
	
	
	
	//배송예정서 일괄저장
	public VOConvertHelper(NoticeOrderTempFileMasterVO tmpMvo, String naDvyPlashSlpno){
		this.tmpMvo = tmpMvo;
		this.naDvyPlashSlpno = naDvyPlashSlpno;
		mvo = convertDeliveryNoticeOrderMVO();
	}
	
	//배송예정서 일반등록
	public VOConvertHelper(PlatFormRequestHelper requestHelper, DataSet dsM, DataSet dsD, DeliveryNoticeSeaService deliveryNoticeService, SequenceKeyService seqKeyService, String rogoInfCrtDsc, String editType) {
		this.requestHelper = requestHelper;
		this.dsM = dsM;
		this.dsD = dsD;
		this.seqKeyService = seqKeyService;
		this.deliveryNoticeService = deliveryNoticeService;
		makeSaveNoticeOrderVO(requestHelper, dsM, dsD, rogoInfCrtDsc, editType);
	}
	public VOConvertHelper(DataSet dsM, DataSet dsD) {
		this.dsM = dsM;
		this.dsD = dsD;
	}
	
	public List<DataSet>  seperateDataSet(DataSet dsD){
		DataSet dsMetc01 = new DataSet("ds_metc01");
		DataSet dsMetc02= new DataSet("ds_metc02");
		DataSet dsMetc03 = new DataSet("ds_metc03");
		DataSet dsMetc04 = new DataSet("ds_metc04");
		DataSet dsMetc05 = new DataSet("ds_metc05");
		
		
		for(int i = 0; i < dsD.getRowCount(); i++){
			
			String metc = dsD.getString(i, "NA_WRS_CSTD_METC");
			
			if(StringUtils.equals("001", metc)){
					copyRow(dsMetc01, dsD, i);
			}else if(StringUtils.equals("002", metc)){
				copyRow(dsMetc02, dsD, i);
			}else if(StringUtils.equals("003", metc)){
				copyRow(dsMetc03, dsD, i);
			}else if(StringUtils.equals("004", metc)){
				copyRow(dsMetc04, dsD, i);
			}else{
				copyRow(dsMetc05, dsD, i);
			}
		}
		
		List<DataSet> dsList = new ArrayList<DataSet>();
		
		if(logger.isDebugEnabled()){
			logger.debug("01 : " + dsMetc01.getRowCount());
			logger.debug("02 : " + dsMetc02.getRowCount());
			logger.debug("03 : " + dsMetc03.getRowCount());
			logger.debug("04 : " + dsMetc04.getRowCount());
			logger.debug("05 : " + dsMetc05.getRowCount());
		}
		
		
		if(dsMetc01.getRowCount() > 0){
			dsList.add(dsMetc01);
		}
		
		if(dsMetc02.getRowCount() > 0){
			dsList.add(dsMetc02);
		}
		
		if(dsMetc03.getRowCount() > 0){
			dsList.add(dsMetc03);
		}
		
		if(dsMetc04.getRowCount() > 0){
			dsList.add(dsMetc04);
		}
		
		if(dsMetc05.getRowCount() > 0){
			dsList.add(dsMetc05);
		}
		return dsList;
	}
	
	private void copyRow(DataSet targetDataSet, DataSet sourceDataSet, int copyRow) {
		int columnCnt = sourceDataSet.getColumnCount();
		if(targetDataSet.getColumnCount() < 1) {
			for(int i = 0; i < columnCnt; i++) {
				targetDataSet.addColumn(sourceDataSet.getColumn(i).getName(), sourceDataSet.getColumn(i).getDataType());
			}
		}

		int row = targetDataSet.newRow();
		for(int i = 0; i < columnCnt; i++) {
			targetDataSet.set(row, targetDataSet.getColumn(i).getName() , sourceDataSet.getString(copyRow, sourceDataSet.getColumn(i).getName()));
		}
	}

	//배송예정서 일괄저장
	private DeliveryNoticeOrderVO convertDeliveryNoticeOrderMVO(){
		DeliveryNoticeOrderVO vo = new DeliveryNoticeOrderVO();
		List<DeliveryNoticeOrderDetailVO> list = new ArrayList<DeliveryNoticeOrderDetailVO>();
		
		double dvy_am = 0;
		double dvy_vat = 0;
		double dvy_pla_qt = 0;
		
		for(NoticeOrderTempFileDetailVO tmpVo : tmpMvo.getList()){
			DeliveryNoticeOrderDetailVO dvo = new DeliveryNoticeOrderDetailVO();
			dvo.setDML_CODE("INSERT");
			dvo.setWK_DS("I");
			dvo.setSPYPL_NA_TRPL_C(tmpMvo.getSPYPL_NA_TRPL_C());
			dvo.setDVYAA_NA_TRPL_C(tmpMvo.getDVYAA_NA_TRPL_C());
			dvo.setNA_WRS_C(tmpVo.getNA_WRS_C());
			dvo.setNA_DVY_PLASH_SLPNO(naDvyPlashSlpno);
			dvo.setRCPMNM(tmpVo.getRCPMNM());
			dvo.setRCPMN_TELNO(tmpVo.getRCPMN_TELNO());
			dvo.setODR_DT(tmpVo.getODR_DT());
			dvo.setODR_SLPNO(tmpVo.getODR_SLPNO());
			dvo.setODR_DSQNO(tmpVo.getODR_DSQNO());
			dvo.setTXT_DSC(tmpVo.getTXT_DSC());
			dvo.setDVY_WRS_UPR(Double.parseDouble(tmpVo.getDVY_WRS_UPR()));
			dvo.setCTR_UPR(Double.parseDouble(tmpVo.getDVY_WRS_UPR()));
			dvo.setDVY_PLA_QT(Double.parseDouble(tmpVo.getDVY_PLA_QT()));
			dvo.setDVY_AM(Double.parseDouble(tmpVo.getDVY_AM()));
			dvo.setDVY_VAT(Double.parseDouble(tmpVo.getDVY_VAT()));
			dvo.setDVY_VCBT_AM(Long.parseLong(tmpVo.getDVY_VCBT_AM()));
			dvo.setDVY_SSDY(Long.parseLong(tmpVo.getDVY_SSDY()));
			dvo.setDVY_TROT_FEE(Double.parseDouble(tmpVo.getDVY_TROT_FEE()));
			dvo.setDVY_PHD_FEE(Double.parseDouble(tmpVo.getDVY_PHD_FEE()));
			dvo.setDVY_FAR_ASTCS(Double.parseDouble(tmpVo.getDVY_FAR_ASTCS()));
			dvo.setRMK_CNTN(tmpVo.getRMK_CNTN());
			dvo.setDVY_PLA_DT(tmpMvo.getDVY_PLA_DT());
			
			dvy_am = dvy_am + Double.parseDouble(tmpVo.getDVY_AM());
			dvy_vat = dvy_vat + Double.parseDouble(tmpVo.getDVY_VAT());
			dvy_pla_qt = dvy_pla_qt + Double.parseDouble(tmpVo.getDVY_PLA_QT());
			
			list.add(dvo);
		}
		
		vo.setDML_CODE("INSERT");
		vo.setSPYPL_NA_TRPL_C(tmpMvo.getSPYPL_NA_TRPL_C());
		vo.setSPYPL_NA_TEAM_C(tmpMvo.getSPYPL_NA_TEAM_C());
		vo.setNA_DVY_PLASH_SLPNO(naDvyPlashSlpno);
		vo.setODRPL_NA_TRPL_C(tmpMvo.getODRPL_NA_TRPL_C());
		vo.setODRPL_NA_TEAM_C(tmpMvo.getODRPL_NA_TEAM_C());
		vo.setRVOPL_NA_TRPL_C(tmpMvo.getRVOPL_NA_TRPL_C());
		vo.setRVOPL_NA_TEAM_C(tmpMvo.getRVOPL_NA_TEAM_C());
		vo.setADJPL_NA_TRPL_C(tmpMvo.getADJPL_NA_TRPL_C());
		vo.setADJPL_NA_TEAM_C(tmpMvo.getADJPL_NA_TEAM_C());
		vo.setMNGT_NA_TR_TPC(tmpMvo.getMNGT_NA_TR_TPC());
		vo.setMNGT_NA_TRPL_C(tmpMvo.getMNGT_NA_TRPL_C());
		vo.setMNGT_NA_TEAM_C(tmpMvo.getMNGT_NA_TEAM_C());
		vo.setDVYAA_NA_TRPL_C(tmpMvo.getDVYAA_NA_TRPL_C());
		vo.setDVYAA_NA_TEAM_C(tmpMvo.getDVYAA_NA_TEAM_C());
		vo.setDVY_PLASH_KDC(tmpMvo.getDVY_PLASH_KDC());
		vo.setDVYAA_C(tmpMvo.getDVYAA_C());
		vo.setDVY_PLA_DT(tmpMvo.getDVY_PLA_DT());
		vo.setCSER_CTR_TPC(tmpMvo.getCSER_CTR_TPC());
		vo.setSPY_TPC(tmpMvo.getSPY_TPC());
		vo.setSLGT_ETR_DSC(tmpMvo.getSLGT_ETR_DSC());
		vo.setNA_WRS_LCLC(tmpMvo.getNA_WRS_LCLC());
		vo.setNA_WRS_MCLC(tmpMvo.getNA_WRS_MCLC());
		vo.setACCP_C(tmpMvo.getACCP_C());
		vo.setDVY_PLA_QT(dvy_pla_qt);
		vo.setDVY_AM(dvy_am);
		vo.setDVY_VAT(dvy_vat);
		vo.setVCBT_AM(Long.parseLong(tmpMvo.getVCBT_AM()));
		vo.setVCBX_AM(Long.parseLong(tmpMvo.getVCBX_AM()));
		vo.setDVY_SSDY(Double.parseDouble(tmpMvo.getDVY_SSDY()));
		vo.setDVY_TROT_FEE(Double.parseDouble(tmpMvo.getDVY_TROT_FEE()));
		vo.setDVY_PHD_FEE(Double.parseDouble(tmpMvo.getDVY_PHD_FEE()));
		vo.setDVY_FAR_ASTCS(Double.parseDouble(tmpMvo.getDVY_FAR_ASTCS()));
		vo.setWD_PLTT_QT(Integer.parseInt(tmpMvo.getWD_PLTT_QT()));
		vo.setPSC_PLTT_QT(Integer.parseInt(tmpMvo.getPSC_PLTT_QT()));
		vo.setBUY_UPR_DSC(tmpMvo.getBUY_UPR_DSC());
		vo.setBYNG_UPR_GR_C(tmpMvo.getBYNG_UPR_GR_C());
		vo.setDDLY_YN(tmpMvo.getDDLY_YN());
		vo.setCSER_TR_REL_AMNNO(tmpMvo.getCSER_TR_REL_AMNNO());
		vo.setMNGT_TR_REL_AMNNO(tmpMvo.getMNGT_TR_REL_AMNNO());
		vo.setTEMP_YN(tmpMvo.getTEMP_YN());
		vo.setFSRGMN_ENO(tmpMvo.getFSRGMN_ENO());
		vo.setWK_DS("I");
		vo.setPRC_YN("N");
		
		
		vo.setDnodVoList(list);
		return vo;
	}
	
	
	
	public void makeSaveNoticeOrderVO(PlatFormRequestHelper requestHelper, DataSet dsM, DataSet dsD, String rogoInfCrtDsc, String editType){
		List<DeliveryNoticeOrderVO> list = new ArrayList<DeliveryNoticeOrderVO>();
		final String DVY_PLASH_KDC_01 = "01";//일반배송
		final String DVY_PLASH_KDC_02 = "02";//덤배송
		final String DVY_PLASH_KDC_03 = "03";//주류배송
		final String DVY_PLASH_KDC_04 = "04";//농식품수기등록 배송
		final String DVY_PLASH_KDC_99 = "99";//기타
		
		try{
			
			String tempYn 		= requestHelper.getParameter("temp_yn");
			String dvyPlashKdc = "";//배송예정서 종류코드
			String docCrudCode = "INSERT";//문서저장수정 구분코드
			if(StringUtils.equals("X", editType) || StringUtils.equals("E", editType)){
				docCrudCode = "INSERT";
			}else{
				docCrudCode = "UPDATE";
			}
			/*
			 * 배송예정서 종류 코드(DVY_PLASH_KDC)
			 * 01 : 일반배송
			 * 02 : 덤배송
			 * 03 : 주류배송
			 * 04 : 농식품수기등록 배송
			 * 99 : 기타배송
			 */
			
			if(StringUtils.equals(DVY_PLASH_KDC_01, rogoInfCrtDsc)){
				dvyPlashKdc = DVY_PLASH_KDC_01;
			}else if(StringUtils.equals(DVY_PLASH_KDC_02, rogoInfCrtDsc)){
				dvyPlashKdc = DVY_PLASH_KDC_02;
			}else if(StringUtils.equals(DVY_PLASH_KDC_03, rogoInfCrtDsc)){
				dvyPlashKdc = DVY_PLASH_KDC_03;
			}else if(StringUtils.equals(DVY_PLASH_KDC_04, rogoInfCrtDsc)){
				dvyPlashKdc = DVY_PLASH_KDC_04;
			}else{
				dvyPlashKdc = DVY_PLASH_KDC_99;
			}
				
			
			String trplC = "";
			String teamC = "";
			String dvyPlaDt			= dsM.getString(0, "DVY_PLA_DT");
			String ddlyYn				= dsM.getString(0, "DDLY_YN");
			
			/*
			 * 직송여부에 따른 전표번호 생성 조건 파라미터
			 */
			/*
			 * 2015.12.08 
			 * 공급업체에 따른 수주처가 다른 곳이 있는 데이터가 있었음
			 * 최영신 차장과 통화 후 경통 AS-IS는 직송, 일반 상관없이 공급업체 기준으로 채번이 된다고 함
			if(StringUtils.equals("0", ddlyYn)){
				trplC 		= dsM.getString(0, "RVOPL_NA_TRPL_C");
				teamC 	= dsM.getString(0, "RVOPL_NA_TEAM_C");
			}else{
				trplC 		= dsM.getString(0, "SPYPL_NA_TRPL_C");
				teamC	= dsM.getString(0, "SPYPL_NA_TEAM_C");
			}
			*/
			trplC 		= dsM.getString(0, "SPYPL_NA_TRPL_C");
			teamC	= dsM.getString(0, "SPYPL_NA_TEAM_C");
			
			if(StringUtils.equals(docCrudCode, "INSERT")){//입력
				if(StringUtils.equals(tempYn, "N")){//완료
					if(StringUtils.equals(DVY_PLASH_KDC_02, rogoInfCrtDsc)){//02 : 덤발주, 01 : 일반발주
						//행사발주일 경우
						for(int i = 0; i < 2; i++){
							if(i == 0){
								dvyPlashKdc = DVY_PLASH_KDC_01;
							}else{
								dvyPlashKdc = DVY_PLASH_KDC_02;
							}
							naDvyPlashSlpno = deliveryNoticeService.getNaDvyPlashSlpno(trplC, teamC, dvyPlaDt, ddlyYn);
							list.add(insertDeliveryNoticeOrder(requestHelper, dsM, dsD, naDvyPlashSlpno, dvyPlashKdc, editType));
						}
					}else{
						naDvyPlashSlpno = deliveryNoticeService.getNaDvyPlashSlpno(trplC, teamC, dvyPlaDt, ddlyYn);
						list.add(insertDeliveryNoticeOrder(requestHelper, dsM, dsD, naDvyPlashSlpno, dvyPlashKdc, editType));
					}
				}else{
					naDvyPlashSlpno = deliveryNoticeService.getNaDvyPlashSlpno(trplC, teamC, dvyPlaDt, ddlyYn);
					list.add(insertDeliveryNoticeOrder(requestHelper, dsM, dsD, naDvyPlashSlpno, dvyPlashKdc, editType));
				}
			}else{//수정
				if(StringUtils.equals(tempYn, "N")){//완료
					
					if(StringUtils.equals(DVY_PLASH_KDC_02, rogoInfCrtDsc)){
						//행사발주일 경우
						for(int i = 0; i < 2; i++){
							if(i == 0){
								dvyPlashKdc = DVY_PLASH_KDC_01;
								list.add(updateDeliveryNoticeOrder(requestHelper, dsM, dsD));
							}else{
								dvyPlashKdc = DVY_PLASH_KDC_02;
								naDvyPlashSlpno = deliveryNoticeService.getNaDvyPlashSlpno(trplC, teamC, dvyPlaDt, ddlyYn);
								list.add(insertDeliveryNoticeOrder(requestHelper, dsM, dsD, naDvyPlashSlpno, dvyPlashKdc, editType));
							}
						}
					}else{
						list.add(updateDeliveryNoticeOrder(requestHelper, dsM, dsD));
					}
				}else{
					list.add(updateDeliveryNoticeOrder(requestHelper, dsM, dsD));
				}
				naDvyPlashSlpno = dsM.getString(0, "NA_DVY_PLASH_SLPNO");
			}
			
			if(logger.isDebugEnabled()){
				logger.debug("### [ editType       			] : " +  editType				);
				logger.debug("### [ docCrudCode 			] : " +  docCrudCode			);
				logger.debug("### [ naDvyPlashSlpno 		] : " +  naDvyPlashSlpno	);
				logger.debug("### [ dvyPlashKdc 			] : " +  dvyPlashKdc			);
				logger.debug("### [ tempYn 					] : " +  tempYn				);
			}
			
			deliveryNoticeOrderVoList = list;
		}catch(AppetizerException e){
			throw new NullPointerException("###### [ERROR] makeSaveNoticeOrderVO : " + e.getMessage());
		}catch(Exception e){
			throw new NullPointerException("###### [ERROR] makeSaveNoticeOrderVO : " + e.getMessage());
		}
}


	private DeliveryNoticeOrderVO updateDeliveryNoticeOrder(PlatFormRequestHelper requestHelper, DataSet dsM, DataSet dsD){
		
		double totalDvyPlaQt 		= 0;//총배송예정수량
		double totalDvyAm 			= 0;//총배송금액
		double totalDvyVat 			= 0;//총배송부가세
		long totalVcbtAm 			= 0;//총공병금액
		long totalVcbxAm 			= 0;//총공상자금액
		double totalDvySsdy 		= 0;//총배송장려금액
		String dmlCode 				= "";//DML 코드
		String tempYn 				= "";//임시저장여부
		String dvyPlashStsc 		= "";//배송예정서상태
		
		String spyplNaTrplC 		= requestHelper.getParameter("spypl_na_trpl_c");
		String dvyaaNaTrplC 		= requestHelper.getParameter("dvyaa_na_trpl_c");
		String naDvyPlashSlpno 		= requestHelper.getParameter("na_dvy_plash_slpno");
		String isDirectNotcieOrder 	= requestHelper.getParameter("isDirectNotcieOrder");
		
		//배송예정서 기본
		DeliveryNoticeOrderVO dnVo = new DeliveryNoticeOrderVO(); 
		List<DeliveryNoticeOrderVO> deliveryNoticeOrderList = requestHelper.getValueObjects(DeliveryNoticeOrderVO.class, dsM);
		DeliveryNoticeOrderVO mvo = deliveryNoticeOrderList.get(0);
		tempYn = mvo.getTEMP_YN();
		dvyPlashStsc = mvo.getDVY_PLASH_STSC();
		
		
		//배송예정서 상세
		List<NoticeOrderDetailVO> tmpList = requestHelper.getValueObjects(NoticeOrderDetailVO.class, dsD);
		List <DeliveryNoticeOrderDetailVO> dnodVoList = new ArrayList<DeliveryNoticeOrderDetailVO>();
		int hdngcn = 0;//항목수
		for(int i = 0; i < dsD.getRowCount(); i++){
			int rowType = dsD.getRowType(i);
			if(logger.isDebugEnabled()){
				logger.debug("ROW Type : " + dsD.getRowType(i) + " / " + dsD.getString(i, "NA_WRS_C"));
			}
			
			NoticeOrderDetailVO  nodVo = tmpList.get(i);
			DeliveryNoticeOrderDetailVO dnodVo = new DeliveryNoticeOrderDetailVO();
			
			if(StringUtils.equals(dsD.getString(i, "DEL_YN"), "1") == true){
				if(StringUtils.equals("N", tempYn) && StringUtils.equals("01", dvyPlashStsc) && (StringUtils.equals("Y", mvo.getPRC_YN()) || StringUtils.equals("R", mvo.getPRC_YN()))){
					dmlCode="UDELETE";
					dnodVo.setWK_DS("D");
				}else{
					dmlCode = "DELETE";
				}
				
				double boxQt = 0;
				boxQt = Math.ceil(nodVo.getBOXPE_AQZ() / nodVo.getDVY_PLA_QT());
				if(boxQt == 0) boxQt = 1;
				
				dnodVo.setDML_CODE(dmlCode);//CRUD 코드
				dnodVo.setSPYPL_NA_TRPL_C(spyplNaTrplC);//공급처거래처코드
				dnodVo.setDVYAA_NA_TRPL_C(dvyaaNaTrplC);//배송지거래처코드
				dnodVo.setNA_DVY_PLASH_SLPNO(naDvyPlashSlpno);//배송예정서전표번호
				dnodVo.setDVY_PLA_SQNO(nodVo.getDVY_PLA_SQNO());//배송예정일련번호
				dnodVo.setBOX_QT(boxQt);//BOX수량
				dnodVoList.add(i, dnodVo);
				--hdngcn;
			}else if(rowType == 1){
				dmlCode = "INSERT";	
				if(StringUtils.equals("N", tempYn) && StringUtils.equals("01", dvyPlashStsc) && (StringUtils.equals(mvo.getPRC_YN(), "Y") || StringUtils.equals(mvo.getPRC_YN(), "R"))){
					dnodVo.setWK_DS("I");
				}else{
					dnodVo.setWK_DS("I");
				}
				/*
				BigDecimal  upr  = new BigDecimal(nodVo.getDVY_WRS_UPR()); //배송예정금액
				BigDecimal  qt  = new BigDecimal(nodVo.getDVY_PLA_QT()); //배송예정금액
				BigDecimal b_dvyAm = upr.multiply(qt);

				double dvyAm 	= Math.floor(b_dvyAm.doubleValue());
				double dvyVat = 0;
				
				if(StringUtils.equals("1", nodVo.getTXT_DSC())){
					dvyVat =Math.floor(b_dvyAm.divide(new BigDecimal(11), MathContext.DECIMAL32).doubleValue());
				}
				*/
				BigDecimal  upr  = new BigDecimal(nodVo.getDVY_WRS_UPR()+""); //배송예정금액
				BigDecimal  qt  = new BigDecimal(nodVo.getDVY_PLA_QT()+""); //배송예정금액
				BigDecimal b_dvyAm = upr.multiply(qt);

				double dvyAm 	= Math.floor(b_dvyAm.doubleValue());
				double dvyVat = 0;
				if(StringUtils.equals("1", nodVo.getTXT_DSC())){
					dvyVat = Double.valueOf(deliveryNoticeService.getDvyVat(nodVo.getDVY_PLA_QT(), nodVo.getDVY_WRS_UPR(), nodVo.getTXT_DSC()));
				}
				
				
				totalDvyVat 		= totalDvyVat + dvyVat;//총배송부가세
				totalDvyPlaQt 		= totalDvyPlaQt + nodVo.getDVY_PLA_QT(); //배송예정량 합계
				totalDvyAm 			= totalDvyAm + dvyAm;//배송금액 합계
				totalVcbtAm 		= totalVcbtAm + nodVo.getVCBT_AM();//공병금액
				totalVcbxAm 		= totalVcbxAm + nodVo.getVCBX_AM();//공상자금액
				totalDvySsdy 		= totalDvySsdy + nodVo.getSSDY_BAS_AM();//배송장려금액
				
				double boxQt = 0;
				boxQt = Math.ceil(nodVo.getBOXPE_AQZ() / nodVo.getDVY_PLA_QT());
				if(boxQt == 0) boxQt = 1;
				
				dnodVo.setDML_CODE(dmlCode);//CRUD 코드
				dnodVo.setSPYPL_NA_TRPL_C(mvo.getSPYPL_NA_TRPL_C());//공급처거래처코드
				dnodVo.setDVYAA_NA_TRPL_C(mvo.getDVYAA_NA_TRPL_C());//배송지거래처코드
				dnodVo.setNA_DVY_PLASH_SLPNO(naDvyPlashSlpno);//배송예정서전표번호
				dnodVo.setDVY_PLA_SQNO(nodVo.getDVY_PLA_SQNO());//배송예정서 일련번호
				dnodVo.setNA_WRS_C(nodVo.getNA_WRS_C());//상품코드
				dnodVo.setODR_DT(nodVo.getODR_DT());//발주일자
				dnodVo.setODR_SLPNO(nodVo.getODR_SLPNO());//발주전표번호
				dnodVo.setODR_DSQNO(nodVo.getODR_DSQNO());//발주상세일련번호
				dnodVo.setDVY_WRS_UPR(nodVo.getDVY_WRS_UPR());//수주원가
				dnodVo.setCTR_UPR(nodVo.getODR_PCS());//계약단가
				dnodVo.setDVY_PLA_QT(nodVo.getDVY_PLA_QT());//배송예정수량
				dnodVo.setDVY_AM(dvyAm);//배송금액
				dnodVo.setDVY_VAT(dvyVat);//배송부가세
				dnodVo.setDVY_VCBT_AM(nodVo.getVCBT_AM());//배송공병금액
				dnodVo.setDQPD_RSNC(nodVo.getDQPD_RSNC());//결품사유코드
				dnodVo.setDQPD_RSN_CNTN(nodVo.getDQPD_RSN_CNTN());//결품사유
				dnodVo.setDVY_PLA_DT(mvo.getDVY_PLA_DT());//배송예정일자
				dnodVo.setSPY_PSB_DT(nodVo.getSPY_PSB_DT());//공급가능일자
				dnodVo.setTXT_DSC(nodVo.getTXT_DSC());
				dnodVo.setDSTR_TER_MRK_DSC(nodVo.getDSTR_TER_MRK_DSC());//유통기한구분
				dnodVo.setDSTR_TER_DT(nodVo.getDSTR_TER_DT());//유통기한
				dnodVo.setBOX_QT(nodVo.getBOX_QT());//BOX수량
				if(StringUtils.isNotEmpty(nodVo.getVCBT_NA_WRS_C())){
					++hdngcn;
				}
				dnodVo.setVCBT_NA_WRS_C(nodVo.getVCBT_NA_WRS_C());//공병상품코드
				dnodVoList.add(dnodVo);
				++hdngcn;
			}else{
				dmlCode = "UPDATE";
				if(StringUtils.equals("N", tempYn) && StringUtils.equals("01", dvyPlashStsc) && (StringUtils.equals(mvo.getPRC_YN(), "Y") || StringUtils.equals(mvo.getPRC_YN(), "R")) ){
					dnodVo.setWK_DS("U");
				}else{
					dnodVo.setWK_DS("I");
				}
				
				BigDecimal  upr  = new BigDecimal(nodVo.getDVY_WRS_UPR()+""); //배송예정금액
				BigDecimal  qt  = new BigDecimal(nodVo.getDVY_PLA_QT()+""); //배송예정금액
				BigDecimal b_dvyAm = upr.multiply(qt);

				double dvyAm 	= Math.floor(b_dvyAm.doubleValue());
				double dvyVat = 0;
				if(StringUtils.equals("1", nodVo.getTXT_DSC())){
					//dvyVat =Math.floor(b_dvyAm.divide(new BigDecimal(11), MathContext.DECIMAL32).doubleValue());
					dvyVat = Double.valueOf(deliveryNoticeService.getDvyVat(nodVo.getDVY_PLA_QT(), nodVo.getDVY_WRS_UPR(), nodVo.getTXT_DSC()));
				}
				
				/*
				double dvyAm 	= Math.floor(nodVo.getDVY_WRS_UPR() * nodVo.getDVY_PLA_QT()); //배송예정금액
				double dvyVat = 0;
				
				if(StringUtils.equals("1", nodVo.getTXT_DSC())){
					BigDecimal s1 = new BigDecimal(dvyAm / 11);
					 dvyVat =Math.floor(s1.doubleValue());
				}
				*/
				
				
				
				totalDvyVat = totalDvyVat + dvyVat;//총배송부가세
				
				totalDvyPlaQt 		= totalDvyPlaQt + nodVo.getDVY_PLA_QT(); //배송예정량 합계
				totalDvyAm 		= totalDvyAm + dvyAm;//배송금액 합계
				totalVcbtAm 		= totalVcbtAm + nodVo.getVCBT_AM();//공병금액
				totalVcbxAm 		= totalVcbxAm + nodVo.getVCBX_AM();//공상자금액
				totalDvySsdy 		= totalDvySsdy + nodVo.getSSDY_BAS_AM();//배송장려금액
				
				double boxQt = 0;
				boxQt = Math.ceil(nodVo.getBOXPE_AQZ() / nodVo.getDVY_PLA_QT());
				if(boxQt == 0) boxQt = 1;
				
				dnodVo.setDML_CODE(dmlCode);//CRUD 코드
				dnodVo.setSPYPL_NA_TRPL_C(spyplNaTrplC);//공급처거래처코드
				dnodVo.setDVYAA_NA_TRPL_C(dvyaaNaTrplC);//배송지거래처코드
				dnodVo.setNA_DVY_PLASH_SLPNO(naDvyPlashSlpno);//배송예정서전표번호
				dnodVo.setDVY_PLA_SQNO(nodVo.getDVY_PLA_SQNO());//배송예정일련번호
				dnodVo.setDVY_PLA_QT(nodVo.getDVY_PLA_QT());//배송예정수량
				dnodVo.setDVY_AM(dvyAm);//배송금액
				dnodVo.setDVY_VAT(dvyVat);//배송부가세
				dnodVo.setDVY_VCBT_AM(nodVo.getVCBT_AM());//배송공병금액
				dnodVo.setDQPD_RSNC(nodVo.getDQPD_RSNC());//결품사유코드
				dnodVo.setDQPD_RSN_CNTN(nodVo.getDQPD_RSN_CNTN());//결품사유
				dnodVo.setNA_WRS_C(nodVo.getNA_WRS_C());
				dnodVo.setDVY_PLA_DT(mvo.getDVY_PLA_DT());//배송예정일자
				dnodVo.setSPY_PSB_DT(nodVo.getSPY_PSB_DT());//공급가능일자
				dnodVo.setDVY_WRS_UPR(nodVo.getDVY_WRS_UPR());//수주원가
				dnodVo.setCTR_UPR(nodVo.getODR_PCS());//계약단가
				dnodVo.setDSTR_TER_MRK_DSC(nodVo.getDSTR_TER_MRK_DSC());//유통기한구분
				dnodVo.setDSTR_TER_DT(nodVo.getDSTR_TER_DT());//유통기한
				dnodVo.setBOX_QT(nodVo.getBOX_QT());//BOX수량
				if(StringUtils.isNotEmpty(nodVo.getVCBT_NA_WRS_C())){
					++hdngcn;
				}
				dnodVoList.add(i, dnodVo);
				++hdngcn;
			}
			
			if(logger.isDebugEnabled()){
				logger.debug("DML CODE : " + dmlCode);
				logger.debug("NA_WRS_C : " + nodVo.getNA_WRS_C());
			}
		}
		dnVo.setDnodVoList(dnodVoList);
		
		/* 배송예정서 기본 */
		dnVo.setDML_CODE("UPDATE");
		if(StringUtils.equals("N", tempYn) && StringUtils.equals("01", dvyPlashStsc) && (StringUtils.equals(mvo.getPRC_YN(), "Y") || StringUtils.equals(mvo.getPRC_YN(), "R"))){
			dnVo.setWK_DS("U");
		}else{
			dnVo.setWK_DS("I");
		}
		
		//Master Set
		dnVo.setSPYPL_NA_TRPL_C(spyplNaTrplC); //공급처 거래처코드
		dnVo.setDVYAA_NA_TRPL_C(dvyaaNaTrplC); //배송처거래처코드(물건이 도착하는 곳)
		dnVo.setNA_DVY_PLASH_SLPNO(naDvyPlashSlpno); //배송예정서 전표번호
		dnVo.setDVY_PLA_DT(mvo.getDVY_PLA_DT());//배송예정일자
		dnVo.setCSER_CTR_TPC(mvo.getCSER_CTR_TPC());//수요자계약유형코드
		dnVo.setSPY_TPC(mvo.getSPY_TPC()); //공급유형코드
		dnVo.setSLGT_ETR_DSC(mvo.getSLGT_ETR_DSC());//매취수탁구분코드
		dnVo.setVHCNO(mvo.getVHCNO());//차량번호
		dnVo.setDVY_PLA_QT(totalDvyPlaQt); //배송예정수량
		dnVo.setDVY_AM(Math.floor(totalDvyAm));//배송금액
		dnVo.setDVY_VAT(totalDvyVat);//배송부가세
		dnVo.setDVY_FAR_ASTCS(mvo.getDVY_FAR_ASTCS());//운임보조비
		dnVo.setVCBT_AM(totalVcbtAm);//공병금액
		dnVo.setVCBX_AM(totalVcbxAm);//공상자금액
		dnVo.setDVY_SSDY(totalDvySsdy);//배송장려금액	
		dnVo.setMNGT_NA_TRPL_C(mvo.getMNGT_NA_TRPL_C());//주관거래처코드
		dnVo.setMNGT_NA_TEAM_C(mvo.getMNGT_NA_TEAM_C());//주관거래처팀코드
		dnVo.setMNGT_NA_TR_TPC(mvo.getMNGT_NA_TR_TPC());//주관거래유형
		dnVo.setDDLY_YN(mvo.getDDLY_YN()); //직송여부 : 직송=1, 일반=0
		dnVo.setHDNGCN(hdngcn);
		dnVo.setLS_CMENO(requestHelper.getUserID());
		dnVo.setTEMP_YN(mvo.getTEMP_YN());//임시저장여부
		dnVo.setRMK_CNTN(mvo.getRMK_CNTN());//비고(실배송처)
		dnVo.setBYNG_UPR_MOD_YN(mvo.getBYNG_UPR_MOD_YN());//매입단가수정여부
		return dnVo;
	}
	

	private DeliveryNoticeOrderVO insertDeliveryNoticeOrder(PlatFormRequestHelper requestHelper, DataSet dsM, DataSet dsD, String naDvyPlashSlpno, String dvyPlashKdc, String editType) throws Exception{
		try{
			
			double totalDvyPlaQt 		= 0;//배송예정수량
			double totalDvyAm 			= 0;//배송금액
			double totalDvyVat 			= 0;//배송부가세
			long totalVcbtAm 			= 0;//공병금액
			long totalVcbxAm 			= 0;//공상자금액
			double totalDvySsdy 		= 0;//배송장려금액
			String dmlCode 				= "";//DML 코드
			String isDirectNotcieOrder 	= "";//직송여부
			String tempYn 					= "";//임시저장여부
			String dvyPlashStsc 			= "";//배송예정상태
			DeliveryNoticeOrderVO dnVo = new DeliveryNoticeOrderVO(); 
			List<DeliveryNoticeOrderVO> deliveryNoticeOrderList = requestHelper.getValueObjects(DeliveryNoticeOrderVO.class, dsM);
			DeliveryNoticeOrderVO mvo = deliveryNoticeOrderList.get(0);
			List<NoticeOrderDetailVO> tmpList = requestHelper.getValueObjects(NoticeOrderDetailVO.class, dsD);
			List<DeliveryNoticeOrderDetailVO> dnodVoList = new ArrayList<DeliveryNoticeOrderDetailVO>();
			isDirectNotcieOrder= requestHelper.getParameter("isDirectNotcieOrder");
			tempYn = mvo.getTEMP_YN();
			dvyPlashStsc = mvo.getDVY_PLASH_STSC();
			int hdngcn = 0;//항목수
			/* 배송예정서 상세 */
			int wrsCnt = 1;
			for(int i = 0; i < dsD.getRowCount(); i++){
				if(StringUtils.equals(dsD.getString(i, "DEL_YN"), "1") == false){//삭제 대상인 경우를 제외하고 처리됨
					dmlCode = "INSERT";
					DeliveryNoticeOrderDetailVO dnodVo = new DeliveryNoticeOrderDetailVO();
					NoticeOrderDetailVO  nodVo = tmpList.get(i);
					
					/*
					 * Master 정보의 합계 데이터
					 * Insert After the total Value Update
					 */
					
					BigDecimal  upr  = new BigDecimal(nodVo.getDVY_WRS_UPR()+""); //배송예정금액
					BigDecimal  qt  = new BigDecimal(nodVo.getDVY_PLA_QT()+""); //배송예정금액
					BigDecimal b_dvyAm = upr.multiply(qt);

					double dvyAm 	= Math.floor(b_dvyAm.doubleValue());
					double dvyVat = 0;
					if(StringUtils.equals("1", nodVo.getTXT_DSC())){
						//dvyVat =Math.floor(b_dvyAm.divide(new BigDecimal(11), MathContext.DECIMAL32).doubleValue());
						dvyVat = Double.valueOf(deliveryNoticeService.getDvyVat(nodVo.getDVY_PLA_QT(), nodVo.getDVY_WRS_UPR(), nodVo.getTXT_DSC()));
					}
					
					
					totalDvyVat = totalDvyVat + dvyVat;//총배송부가세
					totalDvyPlaQt 		= totalDvyPlaQt + nodVo.getDVY_PLA_QT(); //배송예정량 합계
					totalDvyAm 		= totalDvyAm + dvyAm;//배송금액 합계
					totalVcbtAm 		= totalVcbtAm + nodVo.getVCBT_AM();//공병금액
					totalVcbxAm 		= totalVcbxAm + nodVo.getVCBX_AM();//공상자금액
					totalDvySsdy 		= totalDvySsdy + nodVo.getSSDY_BAS_AM();//배송장려금액
					
					
					dnodVo.setDML_CODE(dmlCode);//CRUD 코드
					if(StringUtils.equals("N", tempYn) && StringUtils.equals("01", dvyPlashStsc) && (StringUtils.equals(mvo.getPRC_YN(), "Y") || StringUtils.equals(mvo.getPRC_YN(), "R"))){
						dnodVo.setWK_DS("U");
					}else{
						dnodVo.setWK_DS("I");
					}
					
					//Detail Set
					dnodVo.setSPYPL_NA_TRPL_C(mvo.getSPYPL_NA_TRPL_C());//공급처거래처코드
					dnodVo.setDVYAA_NA_TRPL_C(mvo.getDVYAA_NA_TRPL_C());//배송지거래처코드
					dnodVo.setNA_DVY_PLASH_SLPNO(naDvyPlashSlpno);//배송예정서전표번호
					dnodVo.setDVY_PLA_SQNO(String.valueOf(wrsCnt));//배송예정서 일련번호
					++wrsCnt;
					dnodVo.setNA_WRS_C(nodVo.getNA_WRS_C());//상품코드
					dnodVo.setODR_DT(nodVo.getODR_DT());//발주일자
					dnodVo.setODR_SLPNO(nodVo.getODR_SLPNO());//발주전표번호
					dnodVo.setODR_DSQNO(nodVo.getODR_DSQNO());//발주상세일련번호
					dnodVo.setDVY_WRS_UPR(nodVo.getDVY_WRS_UPR());//수주원가
					dnodVo.setDVY_PLA_QT(nodVo.getDVY_PLA_QT());//배송예정수량
					dnodVo.setDVY_AM(dvyAm);//배송금액
					dnodVo.setDVY_VAT(dvyVat);//배송부가세
					dnodVo.setDVY_VCBT_AM(nodVo.getVCBT_AM());//배송공병금액
					dnodVo.setDQPD_RSNC(nodVo.getDQPD_RSNC());//결품사유코드
					dnodVo.setDQPD_RSN_CNTN(nodVo.getDQPD_RSN_CNTN());//결품사유
					dnodVo.setDVY_PLA_DT(mvo.getDVY_PLA_DT());//배송예정일자
					dnodVo.setSPY_PSB_DT(nodVo.getSPY_PSB_DT());//공급가능일자
					dnodVo.setTXT_DSC(nodVo.getTXT_DSC());
					dnodVo.setCTR_UPR(nodVo.getODR_PCS());//계약단가
					dnodVo.setDSTR_TER_MRK_DSC(nodVo.getDSTR_TER_MRK_DSC());//유통기한구분
					dnodVo.setDSTR_TER_DT(nodVo.getDSTR_TER_DT());//유통기한
					dnodVo.setBOX_QT(nodVo.getBOX_QT());//BOX수량
					if(logger.isDebugEnabled()){
						logger.debug("공급처거래처코드     	: [ " + dnodVo.getSPYPL_NA_TRPL_C() 		+ " ]");//공급처거래처코드
						logger.debug("배송지거래처코드     	: [ " + dnodVo.getDVYAA_NA_TRPL_C() 		+ " ]");//배송지거래처코드
						logger.debug("배송예정서전표번호  	: [ " + dnodVo.getNA_DVY_PLASH_SLPNO() 	+ " ]");//배송예정서전표번호
						logger.debug("배송예정서일련번호  	: [ " + dnodVo.getDVY_PLA_SQNO() 			+ " ]");//배송예정서 일련번호
						logger.debug("상품코드                  	: [ " + dnodVo.getNA_WRS_C() 					+ " ]");//상품코드
						logger.debug("발주일자                  	: [ " + dnodVo.getODR_DT() 						+ " ]");//발주일자
						logger.debug("발주전표번호            	: [ " + dnodVo.getODR_SLPNO() 					+ " ]");//발주전표번호
						logger.debug("발주상세일련번호      	: [ " + dnodVo.getODR_DSQNO() 				+ " ]");//발주상세일련번호
						logger.debug("수주원가 					: [ " + dnodVo.getDVY_WRS_UPR() 				+ " ]");//수주원가
						logger.debug("배송예정수량 				: [ " + dnodVo.getDVY_PLA_QT() 				+ " ]");//배송예정수량
						logger.debug("배송금액 					: [ " + dnodVo.getDVY_AM() 						+ " ]");//배송금액
						logger.debug("배송부가세 				: [ " + dnodVo.getDVY_VAT() 					+ " ]");//배송부가세
						logger.debug("배송공병금액 				: [ " + dnodVo.getDVY_VCBT_AM() 				+ " ]");//배송공병금액
						logger.debug("결품사유 					: [ " + dnodVo.getDQPD_RSNC() 					+ " ]");//결품사유
						logger.debug("배송예정일자 				: [ " + dnodVo.getDVY_PLA_DT() 				+ " ]");//배송예정일자
						logger.debug("공급가능일자 				: [ " + dnodVo.getSPY_PSB_DT() 				+ " ]");//공급가능일자
						logger.debug("면세구분코드 				: [ " + dnodVo.getTXT_DSC() 					+ " ]");
						logger.debug("계약단가 					: [ " + dnodVo.getCTR_UPR() 						+ " ]");//계약단가
					}
					
					
					if(StringUtils.isNotEmpty(nodVo.getVCBT_NA_WRS_C())){
						++hdngcn;
					}
					dnodVo.setVCBT_NA_WRS_C(nodVo.getVCBT_NA_WRS_C());//공병상품코드
					dnodVoList.add(dnodVo);
					++hdngcn;
				}
			}
			dnVo.setDnodVoList(dnodVoList);
			
			/* 배송예정서 기본 */
			dnVo.setDML_CODE("INSERT");
			if(StringUtils.equals("N", tempYn)){
				dnVo.setWK_DS("I");
				dnVo.setPRC_YN("N");
			}else{
				dnVo.setWK_DS("I");
				dnVo.setPRC_YN("T");
			}
			
			if(StringUtils.equals("E", editType)){
				dnVo.setNORDER_YN("1");
			}else{
				dnVo.setNORDER_YN("0");
			}
			
			//Master Set
			dnVo.setSPYPL_NA_TRPL_C(mvo.getSPYPL_NA_TRPL_C()); //공급처 거래처코드
			dnVo.setDVYAA_NA_TRPL_C(mvo.getODRPL_NA_TRPL_C()); //배송처거래처코드(물건이 도착하는 곳)
			dnVo.setDVYAA_NA_TEAM_C(mvo.getODRPL_NA_TEAM_C());//배송처 팀코드
			dnVo.setNA_DVY_PLASH_SLPNO(naDvyPlashSlpno); //배송예정서 전표번호
			dnVo.setSPYPL_NA_TEAM_C(mvo.getSPYPL_NA_TEAM_C());//공급처팀코드
			dnVo.setODRPL_NA_TRPL_C(mvo.getODRPL_NA_TRPL_C());//발주처코드
			dnVo.setODRPL_NA_TEAM_C(mvo.getODRPL_NA_TEAM_C());//발주처팀코드
			dnVo.setRVOPL_NA_TRPL_C(mvo.getRVOPL_NA_TRPL_C());//수주처코드
			dnVo.setRVOPL_NA_TEAM_C(mvo.getRVOPL_NA_TEAM_C());//수주처팀코드
			dnVo.setDVYAA_C(mvo.getDVYAA_C());//배송지코드
			dnVo.setDVY_PLA_DT(mvo.getDVY_PLA_DT());//배송예정일자
			dnVo.setNA_WRS_LCLC(mvo.getNA_WRS_LCLC());
			dnVo.setNA_WRS_MCLC(mvo.getNA_WRS_MCLC());
			dnVo.setDVY_PLASH_KDC(dvyPlashKdc);//배송예정서종류코드
			dnVo.setCSER_CTR_TPC(mvo.getCSER_CTR_TPC());//수요자계약유형코드
			dnVo.setSPY_TPC(mvo.getSPY_TPC()); //공급유형코드
			dnVo.setSLGT_ETR_DSC(mvo.getSLGT_ETR_DSC());//매취수탁구분코드
			dnVo.setDVY_VHC_DSC(mvo.getDVY_VHC_DSC());//배송차량구분코드
			dnVo.setVHCNO(mvo.getVHCNO());//차량번호
			dnVo.setDVY_PLA_QT(totalDvyPlaQt); //배송예정수량
			dnVo.setDVY_AM(totalDvyAm);//배송금액
			dnVo.setDVY_VAT(totalDvyVat);//배송부가세
			dnVo.setDVY_FAR_ASTCS(mvo.getDVY_FAR_ASTCS());//운임보조비
			dnVo.setVCBT_AM(totalVcbtAm);//공병금액
			dnVo.setVCBX_AM(totalVcbxAm);//공상자금액
			dnVo.setDVY_SSDY(totalDvySsdy);//배송장려금액
			dnVo.setMNGT_NA_TRPL_C(mvo.getMNGT_NA_TRPL_C());//주관거래처코드
			dnVo.setMNGT_NA_TEAM_C(mvo.getMNGT_NA_TEAM_C());//주관거래처팀코드
			dnVo.setMNGT_NA_TR_TPC(mvo.getMNGT_NA_TR_TPC());//주관거래유형
			dnVo.setDDLY_YN(mvo.getDDLY_YN()); //직송여부 : 직송=1, 일반=0
			dnVo.setADJPL_NA_TRPL_C(mvo.getADJPL_NA_TRPL_C());
			dnVo.setADJPL_NA_TEAM_C(mvo.getADJPL_NA_TEAM_C());
			dnVo.setFSRGMN_ENO(requestHelper.getUserID());
			dnVo.setGRS_SOJU_YN(mvo.getGRS_SOJU_YN());
			dnVo.setRMK_CNTN(mvo.getRMK_CNTN());
			dnVo.setDOC_RMS_LOC_DSC("WEB");
			dnVo.setHDNGCN(hdngcn);
			dnVo.setBYNG_UPR_MOD_YN(mvo.getBYNG_UPR_MOD_YN());
			if(StringUtils.equals("1", dnVo.getDDLY_YN()) || StringUtils.equals("0", dnVo.getNORDER_YN()) ||StringUtils.equals("4", mvo.getCSER_CTR_TPC()) || StringUtils.equals("5", mvo.getCSER_CTR_TPC()) ){
				//자체
				dnVo.setCSER_TR_REL_AMNNO(mvo.getCSER_TR_REL_AMNNO());
				dnVo.setMNGT_TR_REL_AMNNO(mvo.getMNGT_TR_REL_AMNNO());
			}else{
				//계통
				dnVo.setCSER_TR_REL_AMNNO(mvo.getMNGT_TR_REL_AMNNO());
				dnVo.setMNGT_TR_REL_AMNNO("0");
			}
			dnVo.setTEMP_YN(mvo.getTEMP_YN());//임시저장여부
			return dnVo;
		}catch(AppetizerException e){
			//TODO : swha : Exception 내용수정
			throw new Exception(e.getMessage());
		}
	}
}

