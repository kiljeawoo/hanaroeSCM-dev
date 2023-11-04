package com.nh.escm.scm.reserve.controller;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sourceforge.barbecue.Barcode;
import net.sourceforge.barbecue.BarcodeException;
import net.sourceforge.barbecue.BarcodeFactory;
import net.sourceforge.barbecue.BarcodeImageHandler;
import net.sourceforge.barbecue.output.OutputException;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.Base64Utils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.exception.ErrorCode;
import com.esum.appetizer.util.StringUtil;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.esum.appetizer.util.nexacro.ValueObjectSetUtil;
import com.esum.appetizer.vo.RestResult;
import com.esum.appetizer.vo.RestResultList;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.common.service.SequenceKeyService;
import com.nh.escm.common.vo.SQLNames.SequenceKeyName;
import com.nh.escm.scm.reserve.service.ReserveCenterService;
import com.nh.escm.scm.reserve.vo.ReserveCenterDetailVO;
import com.nh.escm.scm.reserve.vo.ReserveCenterPrintVO;
import com.nh.escm.scm.reserve.vo.ReserveCenterVO;

@RestController
public class ReserveCenterController extends AbstractController {
	
	
	@Autowired
	private SequenceKeyService seqKeyService;	
	
	@Autowired
	private ReserveCenterService reserveCenterService;
	
	/*
	 * 화면ID : VAN_DS_SC_0400
	 * 화면설명 : 입고 예약 조회
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/reserve/retrieveReserveCenterList")
	public void retrieveReserveCenterList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String vhcBkgDt = requestHelper.getParameter("vhc_bkg_dt");  //예약일자
		String dvyPlashSlpno = requestHelper.getParameter("dvy_plash_slpno");  //배송예정서번호
		String vhcno = requestHelper.getParameter("vhcno");  //차량번호
		
		String srhTrplC =	requestHelper.getParameter("TRPL_C");//거래처코드
		String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
		
		try {
			
			PlatformData platformData = new PlatformData();
			
			DataSetHelper dsHelper = new DataSetHelper("ds_reserveCenter");
			dsHelper.addColumns(ReserveCenterVO.class);
			List<ReserveCenterVO> list = reserveCenterService.retrieveReserveCenterList(vhcBkgDt, dvyPlashSlpno, vhcno, TRPL_C_ARR);
			
			for(ReserveCenterVO vo : list) {				
				dsHelper.setData(vo);
			}
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}	
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0400
	 * 화면설명 : 배송예정서 그리드 조회
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/reserve/retrieveReserveSlpnoList")
	public void retrieveReserveSlpnoList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String vhcBkgDt = requestHelper.getParameter("vhc_bkg_dt");  //예약일자
		String dvyPlashSlpno = requestHelper.getParameter("dvy_plash_slpno");  //배송예정서번호
		String vhcno = requestHelper.getParameter("vhcno");  //차량번호
		
		String srhTrplC =	requestHelper.getParameter("TRPL_C");//거래처코드
		String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);
		
		try {
			
			PlatformData platformData = new PlatformData();
			
			DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
			dsHelper.addColumns(ReserveCenterVO.class);
			List<ReserveCenterVO> list = reserveCenterService.retrieveReserveSlpnoList(vhcBkgDt, dvyPlashSlpno, vhcno, TRPL_C_ARR);
			
			for(ReserveCenterVO vo : list) {
				dsHelper.setData(vo);
			}
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}	
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0400
	 * 화면설명 : 배송예정서 목록 조회
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/reserve/retrieveReserveSlpnoVhcBkgList")
	public void retrieveReserveSlpnoVhcBkgList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String vhcBkgDt = requestHelper.getParameter("vhc_bkg_dt");  //예약일자
		String vhcBkgPhdIdvdNo = requestHelper.getParameter("vhc_bkg_phd_idvd_no");  //차량예약물류개별번호
		String vhcno = requestHelper.getParameter("vhcno");  //차량번호		
		String naTrplC =	requestHelper.getParameter("na_trpl_c");//거래처코드			
		
		try {
			
			PlatformData platformData = new PlatformData();
			
			DataSetHelper dsHelper = new DataSetHelper("ds_dataM");
			dsHelper.addColumns(ReserveCenterVO.class);
			List<ReserveCenterVO> list = reserveCenterService.retrieveReserveSlpnoVhcBkgList(vhcBkgDt, vhcBkgPhdIdvdNo, vhcno, naTrplC);
			
			for(ReserveCenterVO vo : list) {
				dsHelper.setData(vo);
			}
			platformData.addDataSet(dsHelper.getDataSet());
			sendData(response, platformData);
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, "error.message.server.exception");
		}	
	}
	
	/*
	 * 화면ID : VAN_DS_SC_0400
	 * 화면설명 : 입고예약등록 저장
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/reserve/saveReserveCenter")
	public void saveReserveCenter(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			PlatformData out_PlatformData = new PlatformData();
			
			DataSet dsM = requestHelper.getDataSet("ds_reserveCenter");
			DataSet dsD = requestHelper.getDataSet("ds_cbo_slpno");
			ReserveCenterVO mvo = new ReserveCenterVO();
			String dmlCode = ""; //CRUD코드			
			String userID = requestHelper.getUserID(); // 개인번호
			
			List<ReserveCenterVO> list =ValueObjectSetUtil.dataSetToVO(dsM, ReserveCenterVO.class);			
			//Master	
			if(dsM != null){				
				for(int i = 0; i < dsM.getRowCount(); i++){
					mvo = list.get(i);
					
					
					//입고 예약 가능한 일자 체크					
					int pDt = reserveCenterService.getReservePossibleDt("8808983300108",mvo.getVHC_BKG_DT());					
					if(pDt>0){
						throw new AppetizerException("msg.van_ds_sc_0400.view.possibleDate");
								}					
					
					//현재시간 + 30 이후 부터 예약할 수 있음.(단, 동일일자인  경우)
					int pTime = reserveCenterService.getReservePossibleTime(mvo.getPHD_PAS_SRTR_BKG_TMI(), mvo.getPHD_PAS_BLK_BKG_TMI(),
																									mvo.getSTPL_CSTD_GEN_BKG_TMI(),mvo.getVHC_BKG_DT());
					if(pTime>0){
						throw new AppetizerException("msg.van_ds_sc_0400.view.possibleTime");
								}					
					
					if(dsM.getRowType(i) == DataSet.ROW_TYPE_INSERTED){
						
						String seq = seqKeyService.getNextHexKey(SequenceKeyName.TB_LG_VHCBKG_M);
						//long seq = sequenceKeyService.getNextKey(SequenceKeyName.TB_LG_VHCBKG_M);						
						//String seq_k = StringUtils.leftPad(String.valueOf(seq), 13, "0");
						
						//채번된 차량예약물류개별번호
						//Map<String, Object> map = reserveCenterService.getReservePhdIdvdNo(mvo.getVHC_BKG_DT());
						//String no = String.valueOf(map.get("VHC_BKG_PHD_IDVD_NO"));
						
						dmlCode = "I";
						mvo.setVHC_BKG_PHD_IDVD_NO(seq);			
						mvo.setFSRGMN_ENO(userID);
						mvo.setLS_CMENO(userID);
					}else if(dsM.getRowType(i) == DataSet.ROW_TYPE_UPDATED){						
						
						if(StringUtils.equals("D", dsM.getString(i, "CRUD_DSC"))){							
							dmlCode = "D";
							mvo.setLS_CMENO(userID);
						}else{
							dmlCode = "U";
							mvo.setLS_CMENO(userID);
						}				
					}else{
						logger.error("CRUD DSC Setting Error");
						sendData(response, new PlatformData(), -1, "error.message.server.exception");
					}				
					mvo.setCRUD_DSC(dmlCode);				
				}
				
				//Detail
				if(dsD != null){
						List<ReserveCenterDetailVO> tmpList =ValueObjectSetUtil.dataSetToVO(dsD, ReserveCenterDetailVO.class);
						List<ReserveCenterDetailVO> listDetail =new ArrayList<ReserveCenterDetailVO>();
						for(int j = 0; j < dsD.getRowCount(); j++){
							if(dsD.getRowType(j) == DataSet.ROW_TYPE_INSERTED){
								dmlCode = "I";
							}else if(dsD.getRowType(j) == DataSet.ROW_TYPE_UPDATED){
								dmlCode = "U";
							}else{
								logger.error("CRUD DSC Setting Error");
								sendData(response, new PlatformData(), -1, "error.message.server.exception");
							}
							
							ReserveCenterDetailVO dvo = tmpList.get(j);
							dvo.setCRUD_DSC(dmlCode);
							dvo.setVHC_BKG_PHD_IDVD_NO(mvo.getVHC_BKG_PHD_IDVD_NO());
							dvo.setNA_TRPL_C(mvo.getNA_TRPL_C());
							dvo.setVHC_BKG_DT(mvo.getVHC_BKG_DT());							
							
							listDetail.add(j,dvo);						
						}
						mvo.setDetailVoList(listDetail);
					}			
				}
			
			reserveCenterService.saveReserveCenter(list);	
			sendData(response, out_PlatformData);			
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, e.getMessage());
		}
	}
	
	/** 출력
	 *  화면ID : VAN_DS_SC_0400
	 *  화면설명 : 입고예약등록
	 */
	
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/reserve/printReserveCenterList")
	public RestResult printReserveCenterList(HttpServletRequest request, HttpServletResponse response,
			String TRPL_C, String vhc_bkg_dt, String dvy_plash_slpno, String vhcno, String sName){
			
		try{			
			PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
			String TRPL_C_ARR[] = requestHelper.getTrplCodeToArr(TRPL_C, requestHelper);
		
			//리스트(필요한것만 필터링)
			
			List<ReserveCenterPrintVO> volist = reserveCenterService.printReserveCenterList(vhc_bkg_dt, dvy_plash_slpno, vhcno, TRPL_C_ARR);
			List<Map<String,Object>> list = new ArrayList<Map<String,Object>>();
			
			for(ReserveCenterPrintVO vo : volist){
				Map<String,Object> map = new HashMap<String, Object>();			
				
				/*
				 배송예정서번호
				차량예약일자
				공급업체코드				
				공급업체명
				차량번호
				운전자명
				연락처
				TC(소터)
				TC(벌크)
				DC(일반)				
				주소
				연락처
				*/
				
				String VHC_BKG_DT = vo.getVHC_BKG_DT();  //차량예약일자
				String PHD_PAS_SRTR_BKG_TMI = vo.getPHD_PAS_SRTR_BKG_TMI();  // TC(소터) 예약시간
				String PHD_PAS_BLK_BKG_TMI = vo.getPHD_PAS_BLK_BKG_TMI();  //TC(벌크) 예약시간
				String STPL_CSTD_GEN_BKG_TMI = vo.getSTPL_CSTD_GEN_BKG_TMI();  //TC(일반)예약시간
				
				if(StringUtils.isNotEmpty(VHC_BKG_DT)) VHC_BKG_DT = VHC_BKG_DT.substring(0,4)+"-"+VHC_BKG_DT.substring(4,6)+"-"+VHC_BKG_DT.substring(6,8);  //차량예약일자
				else VHC_BKG_DT = "";
				if(StringUtils.isNotEmpty(PHD_PAS_SRTR_BKG_TMI)) PHD_PAS_SRTR_BKG_TMI = PHD_PAS_SRTR_BKG_TMI.substring(0,2)+":"+PHD_PAS_SRTR_BKG_TMI.substring(2,4);  // TC(소터) 예약시간
				else PHD_PAS_SRTR_BKG_TMI = "";
				if(StringUtils.isNotEmpty(PHD_PAS_BLK_BKG_TMI)) PHD_PAS_BLK_BKG_TMI = PHD_PAS_BLK_BKG_TMI.substring(0,2)+":"+PHD_PAS_BLK_BKG_TMI.substring(2,4);  //TC(벌크) 예약시간
				else PHD_PAS_BLK_BKG_TMI = "";
				if(StringUtils.isNotEmpty(STPL_CSTD_GEN_BKG_TMI)) STPL_CSTD_GEN_BKG_TMI = STPL_CSTD_GEN_BKG_TMI.substring(0,2)+":"+STPL_CSTD_GEN_BKG_TMI.substring(2,4);  //TC(일반)예약시간
				else STPL_CSTD_GEN_BKG_TMI = "";
												
				map.put("VHC_BKG_PHD_IDVD_NO",StringUtil.toString(vo.getVHC_BKG_PHD_IDVD_NO()));
				map.put("VHC_BKG_DT",VHC_BKG_DT);
				map.put("NA_TRPL_C",StringUtil.toString(vo.getNA_TRPL_C()));
				map.put("CLNTNM",StringUtil.toString(vo.getCLNTNM()));
				map.put("VHCNO",StringUtil.toString(vo.getVHCNO()));
				map.put("PHD_DVY_CAFFNM",StringUtil.toString(vo.getPHD_DVY_CAFFNM()));
				map.put("TELNO",StringUtil.toString(vo.getTELNO()));
				map.put("PHD_PAS_SRTR_BKG_TMI",PHD_PAS_SRTR_BKG_TMI);
				map.put("PHD_PAS_BLK_BKG_TMI",PHD_PAS_BLK_BKG_TMI);
				map.put("STPL_CSTD_GEN_BKG_TMI",STPL_CSTD_GEN_BKG_TMI);				
				map.put("ADDRESS",StringUtil.toString(vo.getADDRESS()));
				map.put("TEL",StringUtil.toString(vo.getTEL()));
				//바코드
				String barcode = (String)map.get("VHC_BKG_PHD_IDVD_NO");
				Barcode bar = null;
				try{
					bar = BarcodeFactory.createCode128(barcode);
					bar.setBarWidth(2);
					bar.setDrawingText(false);
					
					BufferedImage img = BarcodeImageHandler.getImage(bar);
					ByteArrayOutputStream baos = new ByteArrayOutputStream();
					try {
						ImageIO.write(img, "jpg", baos);
					} catch (IOException e) {
						logger.error(e.getMessage(), e);
					}
					byte[] bytes = baos.toByteArray();
					String barcodeImage = Base64Utils.encodeToString(bytes);
					map.put("barcodeBase64", "data:;base64,"+barcodeImage);//바코드 이미지
				}catch(BarcodeException e){
					logger.error(e.getMessage(), e);
				}			
				map.put("barcode", barcode);//바코드
				
				list.add(map);
			}
			
			List<List<?>> all_list = new ArrayList<List<?>>();
			//all_list.add(title);			
			all_list.add(list);
			return new RestResultList(ErrorCode.SUCCESS, "", all_list, 0);
			
		} catch (OutputException e) {
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		} catch (AppetizerException e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
	

}
