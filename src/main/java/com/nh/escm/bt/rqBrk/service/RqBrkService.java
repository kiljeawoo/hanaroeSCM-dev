package com.nh.escm.bt.rqBrk.service;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.esum.appetizer.config.Configurer;
import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.util.FileUtil;
import com.nexacro.xapi.data.DataSet;
import com.nh.escm.bt.rq.service.CsltRqService;
import com.nh.escm.bt.rq.vo.CsltRqVO;
import com.nh.escm.bt.rqBrk.dao.RqBrkDAO;
import com.nh.escm.bt.rqBrk.vo.RqBrkVO;
import com.nh.escm.common.vo.SQLNames.PortalSequenceKeySeqName;
import com.nh.escm.util.SeqGenUtil;

/**
 * 계약상담 (신청자용)
 */
@Service
public class RqBrkService extends AbstractService {
	
	@Autowired
	private RqBrkDAO rqBrkDAO;
	
	@Autowired
	private CsltRqService csltRqService;
	
	/**
	 * 상담신청 존재여부
	 * 
	 * @param MAE_BZNO		사업자등록번호
	 * @param EDT_CHRRNM	신청자명
	 * @param CHRR_MPNO		휴대폰
	 * @return
	 */
	public boolean existsCsltRq(String MAE_BZNO, String EDT_CHRRNM, String CHRR_MPNO) {
		
		return rqBrkDAO.existsCsltRq(MAE_BZNO, EDT_CHRRNM, CHRR_MPNO);
	}
	
	/**
	 * 1년이내 상담신청 존재여부
	 * 
	 * @param MAE_BZNO		사업자등록번호
	 * @return
	 */
	public boolean existsCsltRqInOneYear(String MAE_BZNO) {
		
		return rqBrkDAO.existsCsltRqInOneYear(MAE_BZNO);
	}
	

	public Map<String, Object> rejectedInOneYear(String bzno) {
		//  
		return rqBrkDAO.rejectedInOneYear(bzno);
	}
	/**
	 * 상담신청 목록
	 * 
	 * @param MAE_BZNO
	 * @param EDT_CHRRNM
	 * @param CHRR_MPNO
	 * @param CAL_FROM		신청일자 From
	 * @param CAL_TO		신청일자 To
	 * @param CBO_STS		진행상태 목록
	 * @param EDT_BUYER		담당바이어
	 * @return
	 */
	public List<RqBrkVO> retrieveRqBrkList(String MAE_BZNO, String EDT_CHRRNM, String CHRR_MPNO, String CAL_FROM,
			String CAL_TO, String CBO_STS, String EDT_BUYER, String CBO_DSC) {
		
		return rqBrkDAO.retrieveRqBrkList(MAE_BZNO, EDT_CHRRNM, CHRR_MPNO, CAL_FROM, CAL_TO, CBO_STS, EDT_BUYER, CBO_DSC);
	}
	
	/**
	 * 상담신청 등록
	 * 
	 * @param rc		기본정보 및 평가정보
	 * @param dsUR		평가 첨부파일
	 * @param dsUR00	회사설명 첨부파일
	 * @param USR_TPC	사용자유형
	 * @param USR_ID	사용자ID
	 */
	public void insertCsltRq(CsltRqVO rc, DataSet dsUR, DataSet dsUR00, String USR_TPC, String USR_ID) {
		String CSLT_RQ_NO = SeqGenUtil.getSeq(PortalSequenceKeySeqName.SQ_CSLT.name()); // 상담신청번호 채번
		rc.setCSLT_RQ_NO(CSLT_RQ_NO); // 상담신청번호 설정
		
		// 기본정보
		csltRqService.insertCsltRq(rc);
		
		// 평가정보
		csltRqService.insertCsltRqEvl(rc);
		
		// 파일경로
		String srcDir = Configurer.getProperty("file.temp.path");
		String dstDir = Configurer.getProperty("file.realClt.path");
		
		// 평가 첨부파일
		for (int i = 0; i < dsUR.getRowCount(); i++) {
			CsltRqVO vo = new CsltRqVO();
			vo.setCSLT_RQ_NO(CSLT_RQ_NO); // 상담신청번호 설정
			vo.setDCM_C(dsUR.getString(i, "DCM_C"));
			vo.setDCM_NM(dsUR.getString(i, "FILENAME"));
			vo.setFLNM(dsUR.getString(i, "ORGFNAME"));
			vo.setFL_SZE(dsUR.getString(i, "FILESIZE"));
			vo.setSYS_FLNM(dsUR.getString(i, "SYSTEMFILENAME"));
			
			csltRqService.insertCsltRqFile(vo);
			
			try {
				FileUtil.moveFile(srcDir, dstDir, vo.getSYS_FLNM());
			} catch (IOException e) {
				logger.error(e.getMessage(), e); // ignore
			}
		}
		
		// 회사설명 첨부파일
		for (int i = 0; i < dsUR00.getRowCount(); i++) {
			CsltRqVO vo = new CsltRqVO();
			vo.setCSLT_RQ_NO(CSLT_RQ_NO); // 상담신청번호 설정
			vo.setDCM_NM(dsUR00.getString(i, "FILENAME"));
			vo.setFLNM(dsUR00.getString(i, "ORGFNAME"));
			vo.setFL_SZE(dsUR00.getString(i, "FILESIZE"));
			vo.setSYS_FLNM(dsUR00.getString(i, "SYSTEMFILENAME"));
			
			csltRqService.insertCsltRqFileComp(vo);
			
			try {
				FileUtil.moveFile(srcDir, dstDir, vo.getSYS_FLNM());
			} catch (IOException e) {
				logger.error(e.getMessage(), e); // ignore
			}
		}
		
		String TINM = "상담신청 요청"; // 제목
		String CNTN = rc.getCSLT_RQ_CNTN(); // 내용
		
		// 이력추가
		addCtrCsltNtc(CSLT_RQ_NO, TINM, CNTN, USR_TPC, USR_ID);
	}
	
	/**
	 * 상담신청 저장
	 * 
	 * @param rc		기본정보 및 평가정보
	 * @param dsUR		평가 첨부파일
	 * @param dsUR00	회사설명 첨부파일
	 * @param USR_TPC	사용자유형
	 * @param USR_ID	사용자ID
	 */
	public void saveCsltRq(CsltRqVO rc, DataSet dsUR, DataSet dsUR00, String USR_TPC, String USR_ID) {
		
		String CSLT_RQ_NO = rc.getCSLT_RQ_NO(); // 상담신청번호
		
		// 기본정보
		csltRqService.updateCsltRq(rc);
		
		// 파일경로
		String srcDir = Configurer.getProperty("file.temp.path");
		String dstDir = Configurer.getProperty("file.realClt.path");
		
		// 평가 첨부파일 (삭제)
		for (int i = 0; i < dsUR.getRemovedRowCount(); i++) { // 화면단에서 삭제된 Row
			String delFileName = dsUR.getRemovedData(i, "SYSTEMFILENAME").toString();
			
			FileUtil.deleteFile(dstDir + File.separator + delFileName);
		}
		// 평가 첨부파일 (추가)
		for (int i = 0; i < dsUR.getRowCount(); i++) {
			if (dsUR.getRowType(i) != DataSet.ROW_TYPE_INSERTED) { // 추가
				continue;
			}
			
			CsltRqVO vo = new CsltRqVO();
			vo.setCSLT_RQ_NO(CSLT_RQ_NO); // 상담신청번호 설정
			vo.setDCM_C(dsUR.getString(i, "DCM_C"));
			vo.setDCM_NM(dsUR.getString(i, "FILENAME"));
			vo.setFLNM(dsUR.getString(i, "ORGFNAME"));
			vo.setFL_SZE(dsUR.getString(i, "FILESIZE"));
			vo.setSYS_FLNM(dsUR.getString(i, "SYSTEMFILENAME"));
			
			if (StringUtils.isEmpty(vo.getSYS_FLNM())) {
				// 파일명 누락 시 업로드 X
				continue;
			}
			
			csltRqService.updateCsltRqFile(vo);
			
			try {
				FileUtil.moveFile(srcDir, dstDir, vo.getSYS_FLNM());
			} catch (IOException e) {
				logger.error(e.getMessage(), e); // ignore
			}
		}
		
		// 회사설명 첨부파일 (삭제)
		for (int i = 0; i < dsUR00.getRemovedRowCount(); i++) { // 화면단에서 삭제된 Row
			String delFileName = dsUR00.getRemovedData(i, "SYSTEMFILENAME").toString();
			
			csltRqService.deleteCsltRqFileComp(CSLT_RQ_NO, delFileName); // 상담신청번호 설정
			
			FileUtil.deleteFile(dstDir + File.separator + delFileName);
		}
		// 회사설명 첨부파일 (추가)
		for (int i = 0; i < dsUR00.getRowCount(); i++) {
			if (dsUR00.getRowType(i) != DataSet.ROW_TYPE_INSERTED) { // 추가
				continue;
			}
			
			CsltRqVO vo = new CsltRqVO();
			vo.setCSLT_RQ_NO(CSLT_RQ_NO); // 상담신청번호 설정
			vo.setDCM_NM(dsUR00.getString(i, "FILENAME"));
			vo.setFLNM(dsUR00.getString(i, "ORGFNAME"));
			vo.setFL_SZE(dsUR00.getString(i, "FILESIZE"));
			vo.setSYS_FLNM(dsUR00.getString(i, "SYSTEMFILENAME"));
			
			if (StringUtils.isEmpty(vo.getSYS_FLNM())) {
				// 파일명 누락 시 업로드 X
				continue;
			}
			
			csltRqService.insertCsltRqFileComp(vo);
			
			try {
				FileUtil.moveFile(srcDir, dstDir, vo.getSYS_FLNM());
			} catch (IOException e) {
				logger.error(e.getMessage(), e); // ignore
			}
		}
	}
	
	/**
	 * 이력추가
	 * 
	 * @param CSLT_RQ_NO	상담신청번호
	 * @param TINM			제목
	 * @param CNTN			내용
	 * @param USR_TPC		사용자유형
	 * @param USR_ID		사용자ID
	 */
	public void addCtrCsltNtc(String CSLT_RQ_NO, String TINM, String CNTN, String USR_TPC, String USR_ID) {
		
		// 계약상담 기본 정보
		Map<String, Object> map = csltRqService.retrieveCounselingDsc(CSLT_RQ_NO);
		
		String STS = (String) map.get("STS");
		
		String RLTM_NTC_SMS = "1"; // SMS 전송여부
		String SMS_NATV_NO = ""; // SMS고유번호
		String RLTM_NTC_EMAIL = "0";
		String EMAIL_NATV_NO = ""; // 이메일고유번호
		
		// 이력추가
		csltRqService.insertCtrCsltNtc(CSLT_RQ_NO, STS, TINM, CNTN, USR_TPC,
				RLTM_NTC_SMS, SMS_NATV_NO, RLTM_NTC_EMAIL, EMAIL_NATV_NO, USR_ID);
	}

	
}
