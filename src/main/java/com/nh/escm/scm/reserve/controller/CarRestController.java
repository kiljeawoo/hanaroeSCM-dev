package com.nh.escm.scm.reserve.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.util.nexacro.DataSetHelper;
import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.esum.appetizer.util.nexacro.ValueObjectSetUtil;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.PlatformData;
import com.nh.escm.common.service.SequenceKeyService;
import com.nh.escm.common.vo.SQLNames.SequenceKeyName;
import com.nh.escm.scm.reserve.service.CarService;
import com.nh.escm.scm.reserve.vo.CarVO;

@RestController
public class CarRestController extends AbstractController {
	
	@Autowired
	private CarService carService;
	
	@Autowired
	private SequenceKeyService sequenceKeyService;
	
	/*
	 * 화면ID : VAN_DS_SC_0410
	 * 화면설명 : 공급처차량관리 조회
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/reserve/retrieveCarList")
	public void retrieveCarList(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		String searchType = requestHelper.getParameter("searchType");  //조회구분(1.차량명, 2:기사명)
		String searchWord = requestHelper.getParameter("searchWord");  //조회단어
		
		String srhTrplC =	requestHelper.getParameter("TRPL_C");//거래처코드
		String[] TRPL_C_ARR = requestHelper.getTrplCodeToArr(srhTrplC,requestHelper);

		try {
			
			PlatformData platformData = new PlatformData();
			
			DataSetHelper dsHelper = new DataSetHelper("ds_car");
			dsHelper.addColumns(CarVO.class);
			List<CarVO> list = carService.retrieveCarList(searchType, searchWord, TRPL_C_ARR);
			
			for(CarVO vo : list) {
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
	 * 화면ID : VAN_DS_SC_0410
	 * 화면설명 : 공급처차량관리 저장
	 */
	@RequestMapping(method=RequestMethod.POST, value = "/rest/reserve/saveCar")
	public void saveCar(HttpServletRequest request, HttpServletResponse response) {
		
		PlatFormRequestHelper requestHelper = PlatFormRequestHelper.newInstance(request);
		
		try {
			PlatformData out_PlatformData = new PlatformData();
			
			DataSet ds = requestHelper.getDataSet("ds_car");
			String dmlCode = ""; //CRUD코드			
			String userID = requestHelper.getUserID(); // 삭제자개인번호
			
			List<CarVO> list =ValueObjectSetUtil.dataSetToVO(ds, CarVO.class);
			
			for(int i = 0; i < ds.getRowCount(); i++){
				CarVO dvo = list.get(i);
				
				if(ds.getRowType(i) == DataSet.ROW_TYPE_INSERTED){
					String seq = sequenceKeyService.getNextHexKey(SequenceKeyName.TB_LG_SPYPLVHC);
					dmlCode = "INSERT";
					dvo.setSPYPL_VHC_PHD_IDVD_NO(seq);
				}else if(ds.getRowType(i) == DataSet.ROW_TYPE_UPDATED){
					dmlCode = "UPDATE";
					dvo.setLS_CMENO(userID);
					if(StringUtils.equals("1", ds.getString(i, "DEL_YN"))){
						dmlCode = "DELETE";			
						dvo.setDLMN_ENO(userID);						
					}						
				}				
				dvo.setDML_CODE(dmlCode);		
			}			
			carService.saveCar(list);			
			sendData(response, out_PlatformData);			
		} catch (AppetizerException e) {
			logger.error(e.getMessage(), e);
			sendData(response, new PlatformData(), -1, e.getMessage());
		}
	}
	
}
