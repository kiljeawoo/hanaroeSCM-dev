package com.nh.escm.common.controller;

import java.io.File;
import java.io.IOException;
import java.util.HashSet;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.esum.appetizer.config.Configurer;
import com.esum.appetizer.controller.AbstractController;
import com.esum.appetizer.exception.AppetizerException;
import com.esum.appetizer.exception.ErrorCode;
import com.esum.appetizer.util.FileUtil;
import com.esum.appetizer.vo.DeduplicationObject;
import com.esum.appetizer.vo.RestResult;
import com.esum.appetizer.vo.RestResultList;
import com.nh.escm.common.service.BillingMarkUpService;
import com.nh.escm.common.service.BillingMarkUpService.BillingMarkUpTableName;
import com.nh.escm.common.vo.BillingMarkVO;

@RestController
public class BillingMarkUpController extends AbstractController {
	
	@Autowired
	private BillingMarkUpService billingMarkUpService;
	
	@RequestMapping(method=RequestMethod.POST, value = "/rest/oz/billingMark")
	public RestResult billingMark(HttpServletRequest request, HttpServletResponse response) {		
		
		try {
			
			String billingKey = request.getParameter("billingKey");
			if(StringUtils.isEmpty(billingKey)) {
				throw new AppetizerException("billingKey is empty!");
			}
			Object obj = FileUtil.readObject(Configurer.getProperty("file.temp.path")+File.separator+billingKey);
			if(obj != null) {
				BillingMarkVO billingVO = (BillingMarkVO)obj;
				
				BillingMarkUpTableName tableName = billingVO.getMarkTableName();
				String GLN = billingVO.getGLN();
				String MD_ID = billingVO.getMD_ID();
				if(BillingMarkUpTableName.TB_OD_ORDER_M.equals(tableName)) {
									
					HashSet<DeduplicationObject> billingSet = billingVO.getHashSet();
					
					billingMarkUpService.markUpForOrders(tableName, GLN, MD_ID, billingSet);
				}
				else if(BillingMarkUpTableName.TB_BY_BYNG_M.equals(tableName)) {
								
					HashSet<DeduplicationObject> billingSet = billingVO.getHashSet();
					
					billingMarkUpService.markUpForRecadv(tableName, GLN, MD_ID, billingSet);
				}
			}
			
			return new RestResultList(ErrorCode.SUCCESS, "", null, 0);
		} catch (IOException e) {
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		} catch (ClassNotFoundException e) {
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		} catch (AppetizerException e) {			
			return new RestResult(ErrorCode.FAILURE, e.getMessage());
		}
	}
	
}
