package com.nh.escm.tx.doccstd.service;

import java.io.IOException;
import java.io.InputStream;
import java.io.StringReader;
import java.security.KeyStoreException;
import java.security.cert.X509Certificate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.apache.commons.io.IOUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;
import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.service.AbstractService;
import com.esum.appetizer.util.DateUtil;
import com.esum.appetizer.util.excel.ExcelFileMakerResultHandler;
import com.ktnet.security.common.TrustKeyAndCertStore;
import com.nexacro.xapi.data.DataSet;
import com.nh.escm.tx.doccstd.dao.SlTxbilDscDAO;
import com.nh.escm.tx.doccstd.vo.BasSvcVO;
import com.nh.escm.tx.doccstd.vo.ByngMonVO;
import com.nh.escm.tx.doccstd.vo.SlTxbilDscVO;
import com.nh.escm.tx.doccstd.vo.SlTxbilVO;

@Service
public class SlTxbilDscService extends AbstractService {

	@Autowired
	
	private SlTxbilDscDAO documentSalesDao;
	
	public List<Map<String, Object>> retrieveUnissuedTaxbilList(DataSet dsCondition, int start, int end) {
		try {
			return documentSalesDao.retrieveUnissuedTaxbilList(dsCondition, start, end);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public int retrieveUnissuedTaxbilListCount(DataSet dsCondition){
		try {
			return documentSalesDao.retrieveUnissuedTaxbilListCount(dsCondition);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public List<SlTxbilDscVO> retrieveTaxDtl(String pBC_SQNO) {
		try {
			return documentSalesDao.retrieveTaxDtl(pBC_SQNO);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public List<SlTxbilVO> retrieveTaxText(String pBC_SQNO) {
		try {
			return documentSalesDao.retrieveTaxText(pBC_SQNO);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public int insertTxbilElsg(DataSet dsElsg, int i) {
		try {
			return documentSalesDao.insertTxbilElsg(dsElsg, i);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	/*
	 * 서명된 전자세금계산서의 공인인증서 만료여부 체크 기능
	 */
	public int checkElsg(DataSet dsElsg, int i) {
		int isValid = 0;
		X509Certificate SIGN_CERT;
		Date currentDate;
		Date certExpDate; 
		
		
		try {
			
			//세금계산서 내용
			String elsg_cntn =  dsElsg.getString(i, "ELSG_CNTN");
			StringBuffer certSb = new StringBuffer();
			
			currentDate = new Date();
			long daysToExpire = 0;
			
			NodeList certList ;
			Node certNode;
			
			String x509CertString;
			InputStream x509CertInputString;

			
			Document elsgXmlDoc = convertStringToDocument(elsg_cntn);
			certList = elsgXmlDoc.getElementsByTagName("ds:X509Certificate"); // 서명데이터 항목 
			 
			if(certList.getLength() > 0){
				/*
				 * 인증서가 존재하는 경우만 처리
				 */
				certNode = certList.item(0);
				x509CertString = certNode.getTextContent(); // 서명데이터 내용 읽기
				
				certSb.append("-----BEGIN CERTIFICATE-----"); // 시작점과 끝점을 표시해주지 않으면 형식오류가 난다
				certSb.append("\n");                                       // 개행
				certSb.append(x509CertString);                          // 인증서 내용
				certSb.append("\n");                                       // 개행
				certSb.append("-----END CERTIFICATE-----");   // 시작점과 끝점을 표시해주지 않으면 형식오류가 난다
				certSb.append("\n");
				
				x509CertInputString = IOUtils.toInputStream(certSb.toString(), "UTF-8"); // 형식에 맞춘 인증서 검증
				
				SIGN_CERT = TrustKeyAndCertStore.readX509Cert(x509CertInputString); // 인증서 정보
				
				logger.debug("certNode: " + certNode.getNodeType() + ", " + certNode.getNodeName() + ":  x509CertString \n" + certNode.getTextContent() );
				logger.debug("====ds:X509Certificate check=========================================================");
								
				// 서명 인증서 정보
				
				logger.debug("====ds:X509Certificate properties=========================================================");

				certExpDate = SIGN_CERT.getNotAfter();
				logger.debug("yyyy.MM.dd hh:mm: " + DateUtil.convertDateToString("yyyy.MM.dd hh:mm", certExpDate));
				
				daysToExpire = DateUtil.getDifferDate( DateUtil.convertDateToString("yyyyMMdd", currentDate) , DateUtil.convertDateToString("yyyyMMdd", certExpDate));
				logger.debug("만료일까지 남은 일 수 " + daysToExpire);
				
				/*
				 * 인증서 만료 체크 
				 * 하나로 eSCM 국세청 실시간 전송이 아닌 은 30분 단위 배치 전성이어서 당일 만료 인증서 서명은 불허함
				 * 만료 30분 이내로 남은 인증서 서명시 국세청 전송시 국세청에서 거부됨. 
				 * 업무시간 이후 문제발생시 대응이 어려움.  
				 * 당일 만료 인증서는 갱신 후 서명하도록 안내. 
				 */
				if(daysToExpire < 1){
					
					isValid = 0;
					
					throw new AppetizerException("만료된 공인인증서 입니다. 인증서 갱신 후 서명해 주세요.");
					
				}else{
					isValid = 	1;
				}
				

				/*
				 * // 인증서 만료일 체크 로직. 분 초 단위 체크 
					try {
						SIGN_CERT.checkValidity();
					} catch (CertificateNotYetValidException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
				*/
				
			}else{
				// 인증서 없을 경우
				isValid = 0;
			}
		
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		} catch (IOException e) {
			// 인증서 io 예외;
			logger.error(e.getMessage(), e);
			e.printStackTrace();
		} catch (IllegalArgumentException e) {
			// 서명인증서정보
			logger.error(e.getMessage(), e);
			e.printStackTrace();
		} catch (KeyStoreException e) {
			// 
			logger.error(e.getMessage(), e);
			e.printStackTrace();
		}
		
		return isValid;
	}
	
	/*
	 * elsg_cntn 스트링을 org.w3c.dom.Document 로 변환
	 */
    private Document convertStringToDocument(String xmlStr) {
        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();  
        DocumentBuilder builder;  
        try  
        {  
            builder = factory.newDocumentBuilder();  
            Document doc = builder.parse( new InputSource( new StringReader( xmlStr ) ) ); 
            return doc;
        } catch (ParserConfigurationException pce){
        	logger.error(pce.getMessage(), pce);
        } catch (DataAccessException e) {
            //e.printStackTrace();  
            throw new AppetizerException(e);
        } catch (SAXException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		} catch (IOException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		} 
        return null;
    }
	
	public int updateTxBil(DataSet dsElsg, int i) {
		try {
			return documentSalesDao.updateTxBil(dsElsg, i);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public List<SlTxbilVO> retrieveSlTxbilForSvc(String pBC_SQNO) {
		try {
			return documentSalesDao.retrieveSlTxbilForSvc(pBC_SQNO);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	


	public List<SlTxbilVO> retrieveSlTxbilForOz(String pBC_SQNO) {
		try {
			return documentSalesDao.retrieveSlTxbilForOz(pBC_SQNO);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public List<SlTxbilDscVO> retrieveSlTxbilDescForOz(String pBC_SQNO) {
		try {
			return documentSalesDao.retrieveSlTxbilDescForOz(pBC_SQNO);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public List<Map<String, Object>> retrieveTRPL(String searchType, String searchText) {
		try {
			return documentSalesDao.retrieveTRPL(searchType ,searchText);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public List<Map<String, Object>> retrieveBZPLC(String searchType, String searchText) {
		try {
			return documentSalesDao.retrieveBZPLC(searchType ,searchText);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public int retrieveTaxBillModListCount(DataSet dsCondition) {
		try {
			return documentSalesDao.retrieveTaxBillModListCount(dsCondition);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	

	public List<SlTxbilVO> retrieveTaxBillModList(DataSet dsCondition, int start, int end) {
		try {
			return documentSalesDao.retrieveTaxBillModList(dsCondition, start, end);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}


	public Map<String, Object> getXml(String pBC_SQNO) {
		try {
			return documentSalesDao.getXML(pBC_SQNO);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public int insertTaxMod(DataSet ds_taxMod, Date dDate) {
		try {
			return documentSalesDao.insertTaxMod(ds_taxMod, dDate);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	public int insertTaxMod2(DataSet ds_taxMod, Date dDate) {
		try {
			return documentSalesDao.insertTaxMod2(ds_taxMod, dDate);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	public int deleteTaxbilDesc(String pBC_SQNO) {
		try {
			return documentSalesDao.deleteTaxbilDesc(pBC_SQNO);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public int deleteTaxbil(String pBC_SQNO) {
		try {
			return documentSalesDao.deleteTaxbil(pBC_SQNO);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public int insertTaxbil(DataSet ds_tax, Date dDate) {
		try {
			return documentSalesDao.insertTaxbil(ds_tax, dDate);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public int checkDup(String pBC_SQNO) {
		try {
			return documentSalesDao.checkDup(pBC_SQNO);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public int insertTaxDetail(DataSet ds_taxDetailMod, int i, Date dDate, String FS_RGM) {
		try {
			return documentSalesDao.insertTaxDetail(ds_taxDetailMod, i, dDate, FS_RGM);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public int taxCancel(DataSet ds_tax, Date dDate, String userId) {
		try {
			return documentSalesDao.taxCancel(ds_tax,dDate, userId);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public int sendTaxSms(DataSet ds_sms) {
		try {
			return documentSalesDao.sendTaxSms(ds_sms);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public List<Map<String, Object>> retrieveTaxSmsResult(DataSet dsCondition, int start, int end) {
		try {
			return documentSalesDao.retrieveTaxSmsResult(dsCondition, start, end);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public int retrieveTaxSmsResultCount(DataSet dsCondition){
		try {
			return documentSalesDao.retrieveTaxSmsResultCount(dsCondition);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public Map<String, Object> retrieveTaxBillListCount(DataSet dsCondition) {
		try {
			return documentSalesDao.retrieveTaxBillListCount(dsCondition);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public List<Map<String, Object>> retrieveTaxBillList(DataSet dsCondition, int start, int end) {
		try {
			return documentSalesDao.retrieveTaxBillList(dsCondition, start, end);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public List<Map<String, Object>> retrieveBzplcList(String USRID) {
		try {
			return documentSalesDao.retrieveBzplcList(USRID);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public List<Map<String, Object>> retrieveBzplcTeamCodeList(String USRID) {
		try {
			return documentSalesDao.retrieveBzplcTeamCodeList(USRID);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public int retrieveEmailResendListCount(DataSet dsCondition) {
		try {
			return documentSalesDao.retrieveEmailResendListCount(dsCondition);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public List<Map<String, Object>> retrieveEmailResendList(DataSet dsCondition, int start, int end) {
		try {
			return documentSalesDao.retrieveEmailResendList(dsCondition, start, end);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public int updateEmailAddr(String PBC_SQNO, String email) {
		try {
			return documentSalesDao.updateEmailAddr(PBC_SQNO, email);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public int reSend(DataSet ds_reSend) {
		try {
			return documentSalesDao.reSend(ds_reSend);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}	
	}

	public List<Map<String, Object>> retrieveTaxBillForSign(String PBC_SQNO) {
		try {
			return documentSalesDao.retrieveTaxBillForSign(PBC_SQNO);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}	
	}

	public List<Map<String, Object>> retrieveTaxBillDetailForSign(String PBC_SQNO) {
		try {
			return documentSalesDao.retrieveTaxBillDetailForSign(PBC_SQNO);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}	
	}
	
	/**
	 * 월잔액장 조회
	 * @param userId
	 * @param bas_ym
	 * @param adjpl_biz_number
	 * @param na_adjpl_c
	 * @param issue_stat
	 * @param start
	 * @param end
	 * @return
	 */
	public List<ByngMonVO> retrieveByngMon(String userId, String bas_ym, String bas_ym2, String adjpl_biz_number, String na_adjpl_c, String issue_stat, int start, int end) {
		try {
			return documentSalesDao.retrieveByngMon(userId, bas_ym, bas_ym2, adjpl_biz_number, na_adjpl_c, issue_stat, start, end);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/**
	 * 월잔액장 조회 Count
	 * @param userId
	 * @param bas_ym
	 * @param adjpl_biz_number
	 * @param na_adjpl_c
	 * @param issue_stat
	 * @return
	 */
	public int retrieveByngMonCount(String userId, String bas_ym, String bas_ym2, String adjpl_biz_number, String na_adjpl_c, String issue_stat) {
		try {
			return documentSalesDao.retrieveByngMonCount(userId, bas_ym, bas_ym2, adjpl_biz_number, na_adjpl_c, issue_stat);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public long getByngMonSumBacAm(String userId, String bas_ym, String adjpl_biz_number, String na_adjpl_c, String issue_stat) {
		try {
			return documentSalesDao.getByngMonSumBacAm(userId, bas_ym, adjpl_biz_number, na_adjpl_c, issue_stat);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 발행히스토리 저장
	 * 채권채무 데이터 생성
	 */
	public int insertByngHisList(List<Map<String, Object>> list){
		int cnt = 0;
		try {
			for(Map<String, Object> item : list){
				String ADJ_NA_BZPLC = item.get("ADJ_NA_BZPLC").toString();
				String ADJ_BZPL_NA_TEAM_C = item.get("ADJ_BZPL_NA_TEAM_C").toString();
				String BAS_YM = item.get("BAS_YM").toString();
				String NA_BZPLC = item.get("NA_BZPLC").toString();
				String NA_TEAM_C = item.get("NA_TEAM_C").toString();
				String NA_ADJPL_C = item.get("NA_ADJPL_C").toString();
				String ADJPL_NA_TEAM_C = item.get("ADJPL_NA_TEAM_C").toString();
				String BZ_METH_DSC = item.get("BZ_METH_DSC").toString();
				String NA_WRS_LCLC = item.get("NA_WRS_LCLC").toString();
				String NA_WRS_MCLC = item.get("NA_WRS_MCLC").toString();
				String NA_BLB_DFC_DSC = item.get("NA_BLB_DFC_DSC").toString();
				String ISSUE_USER_ID = item.get("ISSUE_USER_ID").toString();
				String ISSUE_STAT = item.get("ISSUE_STAT").toString();
				String ISSUE_DT = item.get("ISSUE_DT").toString();
				documentSalesDao.insertByngHis(ADJ_NA_BZPLC, ADJ_BZPL_NA_TEAM_C, BAS_YM, NA_BZPLC, NA_TEAM_C, NA_ADJPL_C, ADJPL_NA_TEAM_C, 
						BZ_METH_DSC, NA_WRS_LCLC, NA_WRS_MCLC, NA_BLB_DFC_DSC, ISSUE_USER_ID, ISSUE_STAT);
				
				if(StringUtils.equals(ISSUE_STAT, "1")){
					documentSalesDao.insertTxbilBasSvc(ADJ_NA_BZPLC, ADJ_BZPL_NA_TEAM_C, BAS_YM, NA_BZPLC, NA_TEAM_C, NA_ADJPL_C, ADJPL_NA_TEAM_C, BZ_METH_DSC, NA_WRS_LCLC, NA_WRS_MCLC, NA_BLB_DFC_DSC, ISSUE_DT);
				}else if(StringUtils.equals(ISSUE_STAT, "2")){
					BasSvcVO vo = null;
					vo = documentSalesDao.getBasSvc(ADJ_NA_BZPLC, ADJ_BZPL_NA_TEAM_C, BAS_YM, NA_BZPLC, NA_TEAM_C, NA_ADJPL_C, ADJPL_NA_TEAM_C, BZ_METH_DSC, NA_WRS_LCLC, NA_WRS_MCLC, NA_BLB_DFC_DSC, "0");
					if(vo != null){
						documentSalesDao.upadteStatBasSvc(ADJ_NA_BZPLC, ADJ_BZPL_NA_TEAM_C, BAS_YM, NA_BZPLC, NA_TEAM_C, NA_ADJPL_C, ADJPL_NA_TEAM_C, BZ_METH_DSC, NA_WRS_LCLC, NA_WRS_MCLC, NA_BLB_DFC_DSC, ISSUE_STAT);
					}else{
						logger.error("이미 접수된 건이 존재합니다. 다시 조회해 주세요");
						throw new AppetizerException("이미 접수된 건이 존재합니다. 다시 조회해 주세요");
					}
				}
				
				++cnt;
			}
			return cnt;
		} catch (DataAccessException e) {
			e.printStackTrace();
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/*
	 * 채권채무원장 발행
	 */
	public boolean insertTxbilBasSvc(String ADJ_NA_BZPLC, String ADJ_BZPL_NA_TEAM_C, String BAS_YM, String NA_BZPLC, String NA_TEAM_C,String  NA_ADJPL_C, String ADJPL_NA_TEAM_C,
			String BZ_METH_DSC,String NA_WRS_LCLC,String NA_WRS_MCLC,String NA_BLB_DFC_DSC, String ISSUE_DT){
		try {
			return documentSalesDao.insertTxbilBasSvc(ADJ_NA_BZPLC, ADJ_BZPL_NA_TEAM_C, BAS_YM, NA_BZPLC, NA_TEAM_C, NA_ADJPL_C, ADJPL_NA_TEAM_C, BZ_METH_DSC, NA_WRS_LCLC, NA_WRS_MCLC, NA_BLB_DFC_DSC, ISSUE_DT) > 0;
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	
	/*
	 * 채권채무원장 전자서명
	 */
	public boolean updateCnfMSign(List<Map<String, Object>> list){
		int cnt = 0;
		try {
			for(Map<String, Object> item : list){
				String ADJ_NA_BZPLC = item.get("ADJ_NA_BZPLC").toString();
				String ADJ_BZPL_NA_TEAM_C = item.get("ADJ_BZPL_NA_TEAM_C").toString();
				String BAS_YM = item.get("BAS_YM").toString();
				String NA_BZPLC = item.get("NA_BZPLC").toString();
				String NA_TEAM_C = item.get("NA_TEAM_C").toString();
				String NA_ADJPL_C = item.get("NA_ADJPL_C").toString();
				String ADJPL_NA_TEAM_C = item.get("ADJPL_NA_TEAM_C").toString();
				String BZ_METH_DSC = item.get("BZ_METH_DSC").toString();
				String NA_WRS_LCLC = item.get("NA_WRS_LCLC").toString();
				String NA_WRS_MCLC = item.get("NA_WRS_MCLC").toString();
				String NA_BLB_DFC_DSC = item.get("NA_BLB_DFC_DSC").toString();
				String CNFM_SIGN_USER_ID = item.get("CNFM_SIGN_USER_ID").toString();
				String CNFM_SIGN_DATA = item.get("CNFM_SIGN_DATA").toString();
				String BAS_STAT = item.get("BAS_STAT").toString();
				BasSvcVO vo = null;
				
				vo = documentSalesDao.getBasSvc(ADJ_NA_BZPLC, ADJ_BZPL_NA_TEAM_C, BAS_YM, NA_BZPLC, NA_TEAM_C, NA_ADJPL_C, ADJPL_NA_TEAM_C, BZ_METH_DSC, NA_WRS_LCLC, NA_WRS_MCLC, NA_BLB_DFC_DSC, "0");
				
				if(vo == null){
					logger.error("발행상태가 취소가 된 건이 존재합니다. 다시 조회해 주세요");
					throw new AppetizerException("발행상태가 취소가 된 건이 존재합니다. 다시 조회해 주세요");
				}else{
					documentSalesDao.updateCnfMSign(ADJ_NA_BZPLC, ADJ_BZPL_NA_TEAM_C, BAS_YM, NA_BZPLC, NA_TEAM_C, NA_ADJPL_C, ADJPL_NA_TEAM_C, BZ_METH_DSC, NA_WRS_LCLC
							, NA_WRS_MCLC, NA_BLB_DFC_DSC, CNFM_SIGN_USER_ID, CNFM_SIGN_DATA, BAS_STAT);
				}
				
				
				++cnt;
			}
			if(cnt == list.size()){
				return true;
			}else{
				logger.error("접수자 전자서명이 완료되지 못하였습니다.!!");
				throw new AppetizerException("접수자 전자서명이 완료되지 못하였습니다.!!");
			}
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/**
	 * 월잔액장 조회
	 * @param userId
	 * @param bas_ym
	 * @param adjpl_biz_number
	 * @param na_adjpl_c
	 * @param issue_stat
	 * @param start
	 * @param end
	 * @return
	 */
	public List<BasSvcVO> retrieveBasSvc(String bas_ym, String bzplc_corp_no, String adj_na_bzplc, String bas_stat, String[] na_adjpl_c, int start, int end) {
		try {
			return documentSalesDao.retrieveBasSvc(bas_ym, bzplc_corp_no, adj_na_bzplc, bas_stat, na_adjpl_c, start, end);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/**
	 * 월잔액장 조회 Count
	 * @param userId
	 * @param bas_ym
	 * @param adjpl_biz_number
	 * @param na_adjpl_c
	 * @param issue_stat
	 * @return
	 */
	public int retrieveBasSvcCount(String bas_ym, String bzplc_corp_no, String adj_na_bzplc, String bas_stat, String na_adjpl_c[]) {
		try {
			return documentSalesDao.retrieveBasSvcCount(bas_ym, bzplc_corp_no, adj_na_bzplc, bas_stat, na_adjpl_c);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	
	
	public BasSvcVO getBasSvc(String ADJ_NA_BZPLC, String ADJ_BZPL_NA_TEAM_C, String BAS_YM, String NA_BZPLC, String NA_TEAM_C,String  NA_ADJPL_C, String ADJPL_NA_TEAM_C,
			String BZ_METH_DSC,String NA_WRS_LCLC,String NA_WRS_MCLC,String NA_BLB_DFC_DSC, String BAS_STAT){
		try {
			return documentSalesDao.getBasSvc(ADJ_NA_BZPLC, ADJ_BZPL_NA_TEAM_C, BAS_YM, NA_BZPLC, NA_TEAM_C, NA_ADJPL_C, ADJPL_NA_TEAM_C, BZ_METH_DSC, NA_WRS_LCLC, NA_WRS_MCLC, NA_BLB_DFC_DSC, BAS_STAT);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	public List<BasSvcVO> retrieveBasSvcList(List<Map<String, Object>> list) {
		try {
			List<BasSvcVO> voList = new ArrayList<BasSvcVO>();
			for(Map<String, Object> item : list){ 
				String ADJ_NA_BZPLC = item.get("ADJ_NA_BZPLC").toString();
				String ADJ_BZPL_NA_TEAM_C = item.get("ADJ_BZPL_NA_TEAM_C").toString();
				String BAS_YM = item.get("BAS_YM").toString();
				String NA_BZPLC = item.get("NA_BZPLC").toString();
				String NA_TEAM_C = item.get("NA_TEAM_C").toString();
				String NA_ADJPL_C = item.get("NA_ADJPL_C").toString();
				String ADJPL_NA_TEAM_C = item.get("ADJPL_NA_TEAM_C").toString();
				String BZ_METH_DSC = item.get("BZ_METH_DSC").toString();
				String NA_WRS_LCLC = item.get("NA_WRS_LCLC").toString();
				String NA_WRS_MCLC = item.get("NA_WRS_MCLC").toString();
				String NA_BLB_DFC_DSC = item.get("NA_BLB_DFC_DSC").toString();
				String BAS_STAT = "1";
				BasSvcVO vo = null;
				vo = documentSalesDao.getBasSvc(ADJ_NA_BZPLC, ADJ_BZPL_NA_TEAM_C, BAS_YM, NA_BZPLC, NA_TEAM_C, NA_ADJPL_C, ADJPL_NA_TEAM_C, BZ_METH_DSC, NA_WRS_LCLC, NA_WRS_MCLC, NA_BLB_DFC_DSC, BAS_STAT);
				voList.add(vo);
			}
			 return voList;
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
		
	public long getBasSvcSum(String bas_ym, String bzplc_corp_no, String adj_na_bzplc, String bas_stat, String na_adjpl_c[]) {
		try {
			return documentSalesDao.getBasSvcSum(bas_ym, bzplc_corp_no, adj_na_bzplc, bas_stat, na_adjpl_c);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	//IT 세금계산서 조회
	public List<Map<String, Object>> TaxbillListIT(DataSet dsCondition) {
		try{
			return documentSalesDao.TaxbillListIT(dsCondition);
		}catch(DataAccessException e){
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public void downloadExcelByngMon(String userId, String bas_ym, String bas_ym2, String adjpl_biz_number, String na_adjpl_c, String issue_stat, ExcelFileMakerResultHandler handler) {
		try {
			documentSalesDao.downloadExcelByngMon(userId, bas_ym, bas_ym2, adjpl_biz_number, na_adjpl_c, issue_stat, handler);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
	/**
	 * 월잔액장 상태별 건수  조회
	 * @param userId
	 * @param bas_ym
	 * @param na_adjpl_c
	 * @param issue_stat
	 * @return
	 */
	public List<Map<String,Object>>  retrieveBasSvcStatCount(String bas_ym, String bas_ym2, String TRPL_C) {
		try {
			return documentSalesDao.retrieveBasSvcStatCount(bas_ym, bas_ym2, TRPL_C);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	} // retrieveBasSvcStatCount
	
	/**
	 * 월잔액장 상태별 건수  조회
	 * @param userId
	 * @param bas_ym
	 * @param na_adjpl_c
	 * @param issue_stat
	 * @return
	 */
	public Map<String,Object> retrieveBasNoCheckCount(String bas_ym, String bas_ym2, String TRPL_C) {
		try {
			return documentSalesDao.retrieveBasNoCheckCount(bas_ym, bas_ym2, TRPL_C);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	} // retrieveBasSvcStatCount
	
	public List<Map<String, Object>> retrieveHurInf() {
		try {
			return documentSalesDao.retrieveHurInf();
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public void retrieveTaxBillListExcel(DataSet dsCondition, int start, int end, ExcelFileMakerResultHandler handler) {
		try {
			documentSalesDao.retrieveTaxBillListExcel(dsCondition, start, end, handler);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}

	public void retrieveUnissuedTaxbilListExcel(DataSet dsCondition, int start, int end, ExcelFileMakerResultHandler handler) {
		try {
			documentSalesDao.retrieveUnissuedTaxbilListExcel(dsCondition, start, end, handler);
		} catch (DataAccessException e) {
			logger.error(e.getMessage(), e);
			throw new AppetizerException(e);
		}
	}
	
}
