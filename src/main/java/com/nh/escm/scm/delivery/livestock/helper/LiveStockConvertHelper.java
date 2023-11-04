package com.nh.escm.scm.delivery.livestock.helper;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.TreeSet;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.math.NumberUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.esum.appetizer.util.nexacro.PlatFormRequestHelper;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataTypes;
import com.nh.escm.common.service.SequenceKeyService;
import com.nh.escm.common.vo.SQLNames.SequenceKeyName;
import com.nh.escm.scm.delivery.livestock.vo.NoticeOrderTempFileDetailVO;
import com.nh.escm.scm.delivery.livestock.vo.NoticeOrderTempFileMasterVO;

public class LiveStockConvertHelper {
	
	private final Log logger = LogFactory.getLog(getClass());
	
	private DataSet inDs;
	private String tempSeqArr[];

	public static LiveStockConvertHelper newInstance(DataSet inDs){
		return new LiveStockConvertHelper(inDs);
	}
	
	public LiveStockConvertHelper(DataSet inDs){
		this.inDs = inDs;
	}
	
	/*
	 * 그룹추가
	 */
	public DataSet addGroupIdx(){
		
		int groupIdx = 0;
		//inDs.set(0, "GROUP_IDX", groupIdx);
		for(int i = 0; i < inDs.getRowCount(); i++){
			 String preDetailCount = StringUtils.defaultString(String.valueOf(inDs.getObject(i, 1)));
			 String nextDetailCount = StringUtils.defaultString(String.valueOf(inDs.getObject(i+1, 1)));
			 
			 String preNadvySlpnoSeq = StringUtils.defaultString(String.valueOf(inDs.getObject(i, 39)));
			 String nextNadvySlpnoSeq = StringUtils.defaultString(String.valueOf(inDs.getObject(i+1, 39)));
			 if(StringUtils.equals("1", StringUtils.defaultString(String.valueOf(inDs.getObject(i, 39))))){
				 ++groupIdx;
			 }
			 
			 /*
			 if(StringUtils.isNotEmpty(preDetailCount) && StringUtils.isNotEmpty(nextDetailCount) && StringUtils.isNotEmpty(preNadvySlpnoSeq) && StringUtils.isNotEmpty(nextNadvySlpnoSeq)){
				 if(!StringUtils.equals(preDetailCount, nextDetailCount) && !StringUtils.equals(preNadvySlpnoSeq, nextNadvySlpnoSeq)){
					 ++groupIdx;
				 }else if(!StringUtils.equals(preDetailCount, nextDetailCount) && StringUtils.equals("1", preNadvySlpnoSeq) && StringUtils.equals("1", preNadvySlpnoSeq)){
					 ++groupIdx;
				 }else if(StringUtils.equals("1", preDetailCount) && StringUtils.equals("1", nextDetailCount) && StringUtils.equals("1", preNadvySlpnoSeq) && StringUtils.equals("1", preNadvySlpnoSeq)){
					 ++groupIdx;
				 }else{
					 //skip
				 }
				 
				 if(i + 1 < inDs.getRowCount()){
					 inDs.set(i+1, "GROUP_IDX", groupIdx);
				 }
				
			 	
			 }
			 */
			 inDs.set(i, "GROUP_IDX", groupIdx);
			 if(logger.isDebugEnabled()){
				 logger.debug(" 그룹번호 : " + inDs.getObject(i, "GROUP_IDX") + " / 일련번호 : " +  inDs.getObject(i, 0) );
			 }
			 
		}
		
		
		return inDs;
	}

	public DataSet getInDs() {
		return inDs;
	}

	public void setInDs(DataSet inDs) {
		this.inDs = inDs;
	}
	
	/*
	 * DataSet TO VO
	 */
	public List<NoticeOrderTempFileMasterVO> getNoticeOrderTempMasterVO(SequenceKeyService seqKeyService, PlatFormRequestHelper requestHelper, DataSet inDs){
		List<NoticeOrderTempFileMasterVO> tempMList = new ArrayList<NoticeOrderTempFileMasterVO>();
		List<NoticeOrderTempFileDetailVO> tempDList = new ArrayList<NoticeOrderTempFileDetailVO>();
		
		NoticeOrderTempFileMasterVO mvo = null;
		NoticeOrderTempFileDetailVO dvo = null;
		
	
		int nextItemCnt = 0;
		int rowSeq = 1;
		int detailSeq= 1;
		tempSeqArr = new String[100];
		String tempSeq = "";
		String groupIdx = "";
		for(int i = 0; i < inDs.getRowCount(); i++){
			
			
			if(i == 0){
				tempSeq = seqKeyService.getNextHexKey(SequenceKeyName.TB_OD_DLVPNSHT_TEMP_M);
				groupIdx = inDs.getString(i, "GROUP_IDX");
			}else{
				
				if(StringUtils.equals(groupIdx, inDs.getString(i, "GROUP_IDX")) == false){
					tempSeq = seqKeyService.getNextHexKey(SequenceKeyName.TB_OD_DLVPNSHT_TEMP_M);
					groupIdx = inDs.getString(i, "GROUP_IDX");
				}else{
					//skip
				}
			}
			
			
			
			for(int j=0; j < 64;j++){
				String val = StringUtils.replace(String.valueOf(inDs.getObject(i, j)), "null", "");//columnValue
				if(j >=0 && j < 39){
					if(j == 0) {
						mvo = new NoticeOrderTempFileMasterVO();
						mvo.setROW_SEQ(Integer.toString(rowSeq));//일련번호 자동증가
						mvo.setTEMP_SEQ(tempSeq);
						++rowSeq;
					}
					else if(j == 1) {
						mvo.setITEM_CNT(val);
						if(inDs.getObject(i+1, j) != null){
							nextItemCnt = Integer.parseInt(StringUtils.split(StringUtils.defaultString(String.valueOf(inDs.getObject(i+1, j)), "0"), ".")[0]);//다음행의  Detail Count
						}else{
							nextItemCnt = 99999;//Next Row가 없는 경우
						}
					}
					else if(j == 2) mvo.setSPYPL_NA_TRPL_C(val);
					else if(j == 3) mvo.setSPYPL_NA_TEAM_C(val);
					else if(j == 4) mvo.setDVY_PLA_DT(val);
					else if(j == 5) mvo.setNA_DVY_PLASH_SLPNO(val);
					else if(j == 6) mvo.setODRPL_NA_TRPL_C(val);
					else if(j == 7) mvo.setODRPL_NA_TEAM_C(val);
					else if(j == 8) mvo.setRVOPL_NA_TRPL_C(val);
					else if(j == 9) mvo.setRVOPL_NA_TEAM_C(val);
					else if(j == 10) mvo.setADJPL_NA_TRPL_C(val);
					else if(j == 11) mvo.setADJPL_NA_TEAM_C(val);
					else if(j == 12) mvo.setMNGT_NA_TR_TPC(val);
					else if(j == 13) mvo.setMNGT_NA_TRPL_C(val);
					else if(j == 14) mvo.setMNGT_NA_TEAM_C(val);
					else if(j == 15) mvo.setDVYAA_NA_TRPL_C(val);
					else if(j == 16) mvo.setDVYAA_NA_TEAM_C(val);
					else if(j == 17) mvo.setDVYAA_C(val);
					else if(j == 18) mvo.setCSER_CTR_TPC(val);
					else if(j == 19) mvo.setSPY_TPC(val);
					else if(j == 20) mvo.setSLGT_ETR_DSC(val);
					else if(j == 21) mvo.setNA_WRS_LCLC(val);
					else if(j == 22) mvo.setNA_WRS_MCLC(val);
					else if(j == 23) mvo.setACCP_C(val);
					else if(j == 24) mvo.setDVY_PLA_QT(val);
					else if(j == 25) mvo.setDVY_AM(val);
					else if(j == 26) mvo.setDVY_VAT(val);
					else if(j == 27) mvo.setVCBT_AM(val);
					else if(j == 28) mvo.setVCBX_AM(val);
					else if(j == 29) mvo.setDVY_SSDY(val);
					else if(j == 30) mvo.setDVY_TROT_FEE(val);
					else if(j == 31) mvo.setDVY_PHD_FEE(val);
					else if(j == 32) mvo.setDVY_FAR_ASTCS(val);
					else if(j == 33) mvo.setWD_PLTT_QT(val);
					else if(j == 34) mvo.setPSC_PLTT_QT(val);
					else if(j == 35) mvo.setPRGR_C(val);
					else if(j == 36) mvo.setBUY_UPR_DSC(val);
					else if(j == 37) mvo.setBYNG_UPR_GR_C(val);
					else {
						mvo.setRMK_CNTN(val);
						mvo.setFSRGMN_NA_BZPLC(requestHelper.getGlnCode());
					}
				}else{
					if(j == 39){
						dvo = new NoticeOrderTempFileDetailVO();
						dvo.setTEMP_SEQ(tempSeq);
						dvo.setROW_SEQ(mvo.getROW_SEQ());
						dvo.setITEM_SEQ(detailSeq+"");
					}  
					else if(j == 40) dvo.setNA_WRS_C(val);
					else if(j == 41) dvo.setNA_SOGMN_C(val);
					else if(j == 42) dvo.setPDAA_NA_TRPL_C(val);
					else if(j == 43) dvo.setPDAA_NA_TEAM_C(val);
					else if(j == 44) dvo.setRCPMNM(val);
					else if(j == 45) dvo.setRCPMN_TELNO(val);
					else if(j == 46) dvo.setODR_DT(val);
					else if(j == 47) dvo.setODR_SLPNO(val);
					else if(j == 48) dvo.setODR_DSQNO(val);
					else if(j == 49) dvo.setTXT_DSC(val);
					else if(j == 50) dvo.setDVY_WRS_UPR(val);
					else if(j == 51) dvo.setDVY_PLA_QT(val);
					else if(j == 52) dvo.setDVY_AM(val);
					else if(j == 53) dvo.setDVY_VAT(val);
					else if(j == 54) dvo.setDVY_VCBT_AM(val);
					else if(j == 55) dvo.setDVY_SSDY(val);
					else if(j == 56) dvo.setDVY_TROT_FEE(val);
					else if(j == 57) dvo.setDVY_PHD_FEE(val);
					else if(j == 58) dvo.setDVY_FAR_ASTCS(val);
					else if(j == 59) dvo.setRMK_CNTN(val);
					else if(j == 60) dvo.setSL_UPR_TPC(val);
					else if(j == 61) dvo.setCSER_CTR_TPC(val);
					else{
						dvo.setBUY_BZ_METC(val);
					} 
				}
			}
			
			if(nextItemCnt == 99999){//다음줄이 마지막인 경우
				tempSeqArr[i] = tempSeq;
				tempDList.add(dvo);
				List<NoticeOrderTempFileDetailVO> copyTempDVo = new ArrayList<NoticeOrderTempFileDetailVO>(tempDList);
				mvo.setList(copyTempDVo);
				tempMList.add(mvo);
				tempDList.clear();
			}else{
				if(StringUtils.equals(String.valueOf(inDs.getObject(i, "GROUP_IDX")), String.valueOf(inDs.getObject(i+1, "GROUP_IDX"))) == false ){//Detail Count Of Next Row 변경은  다른 배송예정서건으로 판단함
					tempSeqArr[i] = tempSeq;
					detailSeq = 1;
					rowSeq = 1;
					tempDList.add(dvo);	
					List<NoticeOrderTempFileDetailVO> copyTempDVo = new ArrayList<NoticeOrderTempFileDetailVO>(tempDList);
					mvo.setList(copyTempDVo);
					tempMList.add(mvo);
					tempDList.clear();
				}else{
					++detailSeq;
					tempDList.add(dvo);
				}
			}
		}
		
		
		if(logger.isDebugEnabled()){
			logger.debug("MVO Count : " + tempMList.size());
			for(NoticeOrderTempFileMasterVO vo: tempMList){
				logger.debug("NoticeOrderTempFileMasterVO  : " + vo.toString());
				logger.debug( "ROW_SEQ : [ " + vo.getROW_SEQ() + " ] DVO Count : " + vo.getList().size());
				List<NoticeOrderTempFileDetailVO> dList = vo.getList();
				for(NoticeOrderTempFileDetailVO d : dList){
					logger.debug(d.toString());
				}
			}
		}
		return tempMList;
	}
	
	/*
	 * EXCEL Column Validation Check
	 */
	public  List<DataSet> excelValidationChk(PlatFormRequestHelper requestHelper, DataSet inDs){
		List<DataSet> list = new ArrayList<DataSet>();
		String msg = "";
		DataSet ds = new DataSet("ds_excel_result");
		ds.addColumn("ROW_NUMBER" ,DataTypes.STRING);
		ds.addColumn("COLUMN_NUMBER" ,DataTypes.STRING);
		ds.addColumn("MSG" ,DataTypes.STRING);
		String[] groupIdx = new String[inDs.getRowCount()];
		
		int row = 0;
		
		
		for(int i = 0; i < inDs.getRowCount(); i++){
			for(int j = 0; j < inDs.getColumnCount(); j++){
				String currentVal = (inDs.getObject(i, j) == null) ? "" : StringUtils.defaultString(String.valueOf(inDs.getObject(i, j)));
				if(j == 0 && StringUtils.length(currentVal) > 4){//일련번호
					row = ds.newRow();
					msg = "라인번호[" + (i + 1) + "] "+ (j + 1)+"번째 Cell 값 [" + currentVal + "] 은 자리수를 4자리 이하로 작성하세요.";
					ds.set(row, "ROW_NUMBER" , i + 1);		
					ds.set(row, "COLUMN_NUMBER" , j + 1);	
					ds.set(row, "MSG" , msg);
					groupIdx[i] = StringUtils.defaultString(String.valueOf(inDs.getObject(i, 63)));
				}else if(j == 0 && StringUtils.isNumeric(currentVal) == false){
					row = ds.newRow();
					msg = "라인번호[" + (i + 1) + "] "+ (j + 1)+"번째 Cell 값 [" + currentVal + "] 은 숫자 형태로 작성하세요.";
					ds.set(row, "ROW_NUMBER" , i + 1);		
					ds.set(row, "COLUMN_NUMBER" , j + 1);	
					ds.set(row, "MSG" , msg);
					groupIdx[i] = StringUtils.defaultString(String.valueOf(inDs.getObject(i, 63)));
				}else if(j == 0 && Integer.parseInt(StringUtils.defaultString(String.valueOf(inDs.getObject(i, 0)), "0")) > Integer.parseInt(currentVal)){
					row = ds.newRow();
					msg = "라인번호[" + (i + 1) + "] "+ (j + 1)+"번째 Cell 값 [" + currentVal + "] 은 0번째 Cell 값 [ " + StringUtils.defaultString(String.valueOf(inDs.getObject(i, 0)), "0") + "] 보다 커야 합니다.";
					ds.set(row, "ROW_NUMBER" , i + 1);		
					ds.set(row, "COLUMN_NUMBER" , j + 1);	
					ds.set(row, "MSG" , msg);
					groupIdx[i] = StringUtils.defaultString(String.valueOf(inDs.getObject(i, 63)));
				}else if(j == 0 && i > 0){
					String preVal = (inDs.getObject(i-1, j) == null) ? "" : StringUtils.defaultString(String.valueOf(inDs.getObject(i-1, j)));
					if(Integer.parseInt(preVal) > Integer.parseInt(currentVal)){
						row = ds.newRow();
						msg = "라인번호[" + (i + 1) + "] "+ (j + 1)+"번째 Cell 값 [" + currentVal + "] 은 이전 Cell 값 [ " + preVal + "] 보다 커야 합니다.";
						ds.set(row, "ROW_NUMBER" , i + 1);		
						ds.set(row, "COLUMN_NUMBER" , j + 1);	
						ds.set(row, "MSG" , msg);
						groupIdx[i] = StringUtils.defaultString(String.valueOf(inDs.getObject(i, 63)));
					}
				}else if(j == 1 && StringUtils.isNumeric(currentVal) == false){//detail 건수
					row = ds.newRow();
					msg = "라인번호[" + (i + 1) + "] "+ (j + 1)+"번째 Cell 값 [" + currentVal + "] 은 숫자 형태로 작성하세요.";
					ds.set(row, "ROW_NUMBER" , i + 1);		
					ds.set(row, "COLUMN_NUMBER" , j + 1);	
					ds.set(row, "MSG" , msg);
					groupIdx[i] = StringUtils.defaultString(String.valueOf(inDs.getObject(i, 63)));
				
				}else if(j == 1 && NumberUtils.toInt(currentVal) > 100){//detail 건수
					row = ds.newRow();
					msg = "라인번호[" + (i + 1) + "] 의 배송예정서의 상품수는 100건을 초과 할수 없습니다."+ (j + 1)+"번째 Cell 값 [" + currentVal + "].";
					ds.set(row, "ROW_NUMBER" , i + 1);		
					ds.set(row, "COLUMN_NUMBER" , j + 1);	
					ds.set(row, "MSG" , msg);
					groupIdx[i] = StringUtils.defaultString(String.valueOf(inDs.getObject(i, 63)));
				}else if(j == 1 && Integer.parseInt(currentVal) > 1 && Integer.parseInt(StringUtils.defaultString(String.valueOf(inDs.getObject(i, 39)), "0")) == 1){
					int kk = Integer.parseInt(currentVal); //2
					if((i + kk) < inDs.getRowCount()){
						for(int k = 0; k < kk; k++){
							String spyplNaTrplCA = StringUtils.defaultString(String.valueOf(inDs.getObject(i, 2)));
							String spyplNaTrplCB = StringUtils.defaultString(String.valueOf(inDs.getObject(i + k, 2)));
							if(!StringUtils.equals(spyplNaTrplCA, spyplNaTrplCB)){
								
								msg = "라인번호[" + (i + 1) + "] "+ (j + 2)+"번째 Cell 값 [" + spyplNaTrplCA + "] 은 동일한 공급업체코드로 등록해야 합니다. enter";
								msg = msg + "라인번호[" + (i + 1) + "] 의 공급업체코드 값[ " + spyplNaTrplCA + " ] enter";
								msg = msg + "라인번호[" + (i + k + 1) + "] 의 공급업체코드 값[ " + spyplNaTrplCB + " ] ";
								row = ds.newRow();
								ds.set(row, "ROW_NUMBER" , i + 1);		
								ds.set(row, "COLUMN_NUMBER" , j + 1);	
								ds.set(row, "MSG" , msg);
								groupIdx[i] = StringUtils.defaultString(String.valueOf(inDs.getObject(i, 63)));
							}
						}
					}
				}else if(j == 1 && StringUtils.equals("1", currentVal)&& Integer.parseInt(StringUtils.defaultString(String.valueOf(inDs.getObject(i, 39)), "0")) != 1){
					row = ds.newRow();
					msg = "라인번호[" + (i + 1) + "] 의 배송예정일련번호의 순서가 일치하지 않습니다.";
					ds.set(row, "ROW_NUMBER" , i + 1);		
					ds.set(row, "COLUMN_NUMBER" , j + 1);	
					ds.set(row, "MSG" , msg);
					groupIdx[i] = StringUtils.defaultString(String.valueOf(inDs.getObject(i, 63)));
				}else if(j == 2 && !StringUtils.equals(requestHelper.getGlnCode(), currentVal)){
					row = ds.newRow();
					msg = "라인번호[" + (i + 1) + "] "+ (j + 1)+"번째 Cell 값 [" + currentVal + "] 은 로그인한 사업장 [ " + requestHelper.getGlnCode() + " ]과 일치해야 합니다.";
					ds.set(row, "ROW_NUMBER" , i + 1);		
					ds.set(row, "COLUMN_NUMBER" , j + 1);	
					ds.set(row, "MSG" , msg);
					groupIdx[i] = StringUtils.defaultString(String.valueOf(inDs.getObject(i, 63)));
				}else if(j == 2 && StringUtils.length(currentVal) != 13){
					row = ds.newRow();
					msg = "라인번호[" + (i + 1) + "] "+ (j + 1)+"번째 Cell 값 [" + currentVal + "] 은 자리수를 13자리로 작성하세요.";
					ds.set(row, "ROW_NUMBER" , i + 1);		
					ds.set(row, "COLUMN_NUMBER" , j + 1);	
					ds.set(row, "MSG" , msg);
					groupIdx[i] = StringUtils.defaultString(String.valueOf(inDs.getObject(i, 63)));
				}else if(j == 2 && !StringUtils.isNumeric(currentVal)){
					row = ds.newRow();
					msg = "라인번호[" + (i + 1) + "] "+ (j + 1)+"번째 Cell 값 [" + currentVal + "] 은 숫자 형태로 작성하세요.";
					ds.set(row, "ROW_NUMBER" , i + 1);		
					ds.set(row, "COLUMN_NUMBER" , j + 1);	
					ds.set(row, "MSG" , msg);
					groupIdx[i] = StringUtils.defaultString(String.valueOf(inDs.getObject(i, 63)));
				}else if(j == 3 && StringUtils.length(currentVal) != 2){
					row = ds.newRow();
					msg = "라인번호[" + (i + 1) + "] "+ (j + 1)+"번째 Cell 값 [" + currentVal + "] 은 자리수를 2자리로 작성하세요.";
					ds.set(row, "ROW_NUMBER" , i + 1);		
					ds.set(row, "COLUMN_NUMBER" , j + 1);	
					ds.set(row, "MSG" , msg);
					groupIdx[i] = StringUtils.defaultString(String.valueOf(inDs.getObject(i, 63)));
				}else if(j == 3 && !StringUtils.isNumeric(currentVal)){
					row = ds.newRow();
					msg = "라인번호[" + (i + 1) + "] "+ (j + 1)+"번째 Cell 값 [" + currentVal + "] 은 숫자 형태로 작성하세요.";
					ds.set(row, "ROW_NUMBER" , i + 1);		
					ds.set(row, "COLUMN_NUMBER" , j + 1);	
					ds.set(row, "MSG" , msg);
					groupIdx[i] = StringUtils.defaultString(String.valueOf(inDs.getObject(i, 63)));
				}else if(j == 4 && StringUtils.length(currentVal) != 8){
					row = ds.newRow();
					msg = "라인번호[" + (i + 1) + "] "+ (j + 1)+"번째 Cell 값 [" + currentVal + "] 은 자리수를 8자리로 작성하세요.";
					ds.set(row, "ROW_NUMBER" , i + 1);		
					ds.set(row, "COLUMN_NUMBER" , j + 1);	
					ds.set(row, "MSG" , msg);
					groupIdx[i] = StringUtils.defaultString(String.valueOf(inDs.getObject(i, 63)));
				}else if(j == 4 && !StringUtils.isNumeric(currentVal)){
					row = ds.newRow();
					msg = "라인번호[" + (i + 1) + "] "+ (j + 1)+"번째 Cell 값 [" + currentVal + "] 은 숫자 형태로 작성하세요.";
					ds.set(row, "ROW_NUMBER" , i + 1);		
					ds.set(row, "COLUMN_NUMBER" , j + 1);	
					ds.set(row, "MSG" , msg);
					groupIdx[i] = StringUtils.defaultString(String.valueOf(inDs.getObject(i, 63)));
				}else if(j == 4 && Integer.parseInt(StringUtils.defaultString(String.valueOf(inDs.getObject(i, 1)), "0")) > 1 && Integer.parseInt(StringUtils.defaultString(String.valueOf(inDs.getObject(i, 39)), "0")) == 1){
					int kk = Integer.parseInt(StringUtils.defaultString(String.valueOf(inDs.getObject(i, 1)), "0"));
					if((i + kk) < inDs.getRowCount()){
						for(int k = 0; k < kk; k++){
							String dvyPlaDtA = StringUtils.defaultString(String.valueOf(inDs.getObject(i, 4)));
							String dvyPlaDtB = StringUtils.defaultString(String.valueOf(inDs.getObject(i + k, 4)));
							if(!StringUtils.equals(dvyPlaDtA, dvyPlaDtB)){
								row = ds.newRow();
								msg = "라인번호[" + (i + 1) + "] "+ (j + 1)+"번째 Cell 값 [" + dvyPlaDtA + "] 은 동일한 배송예정일자로 등록해야 합니다. enter";
								msg = msg + "라인번호[" + (i + 1) + "] 의 배송예정일자 값[ " + dvyPlaDtA + " ] enter";
								msg = msg + "라인번호[" + (i + k + 1) + "] 의 배송예정일자 값[ " + dvyPlaDtB + " ] ";
								ds.set(row, "ROW_NUMBER" , i + 1);		
								ds.set(row, "COLUMN_NUMBER" , j + 1);	
								ds.set(row, "MSG" , msg);
								groupIdx[i] = StringUtils.defaultString(String.valueOf(inDs.getObject(i, 63)));
							}
						}
					}
				}else if(j == 5 && StringUtils.length(StringUtils.trim(currentVal)) > 0){
					row = ds.newRow();
					msg = "라인번호[" + (i + 1) + "] "+ (j + 1)+"번째 Cell 값 [" + currentVal + "] 은  공백으로 작성하세요.";
					ds.set(row, "ROW_NUMBER" , i + 1);		
					ds.set(row, "COLUMN_NUMBER" , j + 1);	
					ds.set(row, "MSG" , msg);
					groupIdx[i] = StringUtils.defaultString(String.valueOf(inDs.getObject(i, 63)));
				}else if(j == 6 && Integer.parseInt(StringUtils.defaultString(String.valueOf(inDs.getObject(i, 1)), "0")) > 1 && Integer.parseInt(StringUtils.defaultString(String.valueOf(inDs.getObject(i, 39)), "0")) == 1){
					int kk = Integer.parseInt(StringUtils.defaultString(String.valueOf(inDs.getObject(i, 1)), "0"));
					if((i + kk) < inDs.getRowCount()){
						for(int k = 0; k < kk; k++){
							String odrplNaTrplCA = StringUtils.defaultString(String.valueOf(inDs.getObject(i, j)));
							String odrplNaTrplCB = StringUtils.defaultString(String.valueOf(inDs.getObject(i + k, j)));
							if(!StringUtils.equals(odrplNaTrplCA, odrplNaTrplCB)){
								row = ds.newRow();
								msg = "라인번호[" + (i + 1) + "] "+ (j + 1)+"번째 Cell 값 [" + odrplNaTrplCA + "] 은 동일한 발주처로 등록해야 합니다. enter";
								msg = msg + "라인번호[" + (i + 1) + "] 의 발주처 값[ " + odrplNaTrplCA + " ] enter";
								msg = msg + "라인번호[" + (i + k + 1) + "] 의 발주처 값[ " + odrplNaTrplCB + " ] ";
								ds.set(row, "ROW_NUMBER" , i + 1);		
								ds.set(row, "COLUMN_NUMBER" , j + 1);	
								ds.set(row, "MSG" , msg);
								groupIdx[i] = StringUtils.defaultString(String.valueOf(inDs.getObject(i, 63)));
							}
						}
					}
				}else if(j == 39 && StringUtils.length(StringUtils.trim(currentVal)) <= 0){
					row = ds.newRow();
					msg = "라인번호[" + (i + 1) + "] "+ (j + 1)+"번째 Cell 값 [" + currentVal + "] 은  공백이면 안됩니다.";
					ds.set(row, "ROW_NUMBER" , i + 1);		
					ds.set(row, "COLUMN_NUMBER" , j + 1);	
					ds.set(row, "MSG" , msg);
					groupIdx[i] = StringUtils.defaultString(String.valueOf(inDs.getObject(i, 63)));
				}else if(j == 39 && StringUtils.isNumeric(currentVal) == false){
					row = ds.newRow();
					msg = "라인번호[" + (i + 1) + "] "+ (j + 1)+"번째 Cell 값 [" + currentVal + "] 은 숫자 형태로 작성하세요";
					ds.set(row, "ROW_NUMBER" , i + 1);		
					ds.set(row, "COLUMN_NUMBER" , j + 1);	
					ds.set(row, "MSG" , msg);
					groupIdx[i] = StringUtils.defaultString(String.valueOf(inDs.getObject(i, 63)));
				}else if(j == 39 && Integer.parseInt(currentVal) > Integer.parseInt(StringUtils.defaultString(String.valueOf(inDs.getObject(i, 1)), "0"))){
					row = ds.newRow();
					msg = "라인번호[" + (i + 1) + "] "+ (j + 1)+"번째 Cell 값 [" + currentVal + "] 은 두번째 Cell 값 [ " +StringUtils.defaultString(String.valueOf(inDs.getObject(i, 1)), "0")+ "] 보다 클 수 없습니다.";
					ds.set(row, "ROW_NUMBER" , i + 1);		
					ds.set(row, "COLUMN_NUMBER" , j + 1);	
					ds.set(row, "MSG" , msg);
					groupIdx[i] = StringUtils.defaultString(String.valueOf(inDs.getObject(i, 63)));
				}else if(j == 52 && StringUtils.isNumeric(currentVal) == false){
					row = ds.newRow();
					msg = "라인번호[" + (i + 1) + "] "+ (j + 1)+"번째 Cell 값 [" + currentVal + "] 은 숫자 형태로 작성하세요";
					ds.set(row, "ROW_NUMBER" , i + 1);		
					ds.set(row, "COLUMN_NUMBER" , j + 1);	
					ds.set(row, "MSG" , msg);
					groupIdx[i] = StringUtils.defaultString(String.valueOf(inDs.getObject(i, 63)));
				}else if(j == 61 && StringUtils.length(StringUtils.trim(currentVal)) <= 0){
					/*
					row = ds.newRow();
					msg = "라인번호[" + (i + 1) + "] "+ (j + 1)+"번째 Cell 값 [" + currentVal + "] 은  공백이면 안됩니다.";
					ds.set(row, "ROW_NUMBER" , i + 1);		
					ds.set(row, "COLUMN_NUMBER" , j + 1);	
					ds.set(row, "MSG" , msg);
					groupIdx[i] = StringUtils.defaultString(String.valueOf(inDs.getObject(i, 63)));
					*/
				}else if(j == 62 && StringUtils.length(StringUtils.trim(currentVal)) <= 0){
					/*
					row = ds.newRow();
					msg = "라인번호[" + (i + 1) + "] "+ (j + 1)+"번째 Cell 값 [" + currentVal + "] 은  공백이면 안됩니다.";
					ds.set(row, "ROW_NUMBER" , i + 1);		
					ds.set(row, "COLUMN_NUMBER" , j + 1);	
					ds.set(row, "MSG" , msg);
					groupIdx[i] = StringUtils.defaultString(String.valueOf(inDs.getObject(i, 63)));
					*/					
				}else{
					row = -1;//정상
					msg = "";
				}
			}
		}
		
		//logger.debug("###### Validation Porcessing DataSet : " + inDs.saveXml());
		//logger.debug("###### error msg DataSet : " + ds.saveXml());
		list.add(0, ds);//error msg
		list.add(1, cleanDataset(groupIdx, inDs));
		
		/*
		boolean isGroupIdx =false;
		for(int i = 0; i < groupIdx.length; i++){
			if(StringUtils.isNotEmpty(groupIdx[i]) ){
				isGroupIdx =true;
				break;
			}
		}
		if(isGroupIdx){
			list.add(1, cleanDataset(groupIdx, inDs));// DataSet after validation check
		}
		*/
		return list;
	}
	
	
	//오류에 대한 배송예정서 건 삭제 
	private DataSet cleanDataset(String[] groupIdx, DataSet inDs){//삭제 그룹 : groupIdx
		
		TreeSet<String> tSet = new TreeSet<String>();
        for( int i = 0; i < groupIdx.length; i++ ) {
        	if(groupIdx[i] != null){
        		tSet.add(groupIdx[i]);
        	}
        }       
       Iterator<String> it = tSet.iterator();
       int cnt = 0;
       String[] reGroupIdx = new String[tSet.size()];
        while ( it.hasNext() ) {
            reGroupIdx[cnt] = it.next().toString();
            ++cnt;
        }
        
		
		DataSet tmpDs = new DataSet("copy_data");
		tmpDs.copyFrom(inDs);
		for(int i = inDs.getRowCount() - 1; i >= 0; i--){
			for(int z1 = 0; z1 < reGroupIdx.length; z1++){
				if(reGroupIdx[z1] != null){
					if(StringUtils.equals(reGroupIdx[z1], StringUtils.defaultString(String.valueOf(inDs.getObject(i, "GROUP_IDX"))))){
						tmpDs.removeRow(i);
					}
				}
			}
		}
		
		if(logger.isDebugEnabled()){
			for(int i = 0; i < tmpDs.getRowCount(); i++){
				logger.debug("[ Delete After Group IDX ] : Group IDX" + StringUtils.defaultString(String.valueOf(tmpDs.getObject(i, "GROUP_IDX"))));
			}
		}
		
		return tmpDs;
	}

	public String[] getTempSeqArr() {
		return tempSeqArr;
	}

	public void setTempSeqArr(String[] tempSeqArr) {
		this.tempSeqArr = tempSeqArr;
	}
	
	
	
	
	

	
	
}

