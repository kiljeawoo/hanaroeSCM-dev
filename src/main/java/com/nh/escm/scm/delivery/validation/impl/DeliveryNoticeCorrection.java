package com.nh.escm.scm.delivery.validation.impl;

import com.nexacro.xapi.data.DataSet;
import com.nh.escm.scm.delivery.validation.DataCorrection;
import com.nh.escm.scm.delivery.validation.Report;
import com.nh.escm.scm.delivery.vo.DeliveryNoticeTypeVO;

/****************************************************************************************************** 
 * 2019.07.02 최영신
 * 배송예정서 데이터 보정 인터페이스
 * 
 ******************************************************************************************************/

public class DeliveryNoticeCorrection implements DataCorrection {
	
	public DeliveryNoticeCorrection(DataSet dsM, DataSet dsD, DeliveryNoticeTypeVO deliveryNoticeTypeVO) {

	}
	
	@Override
	public Report correct() {
		
		Report correctionReport = new Report();

		return correctionReport;
	}

}
