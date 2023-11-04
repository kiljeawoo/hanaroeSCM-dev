package com.nh.escm.scm.order.vo;

import java.io.Serializable;

import com.esum.appetizer.util.JsonUtil;

/**
 * 수주내역조회
 * 일자별 조회 Master
 * @author swha
 *
 */
public class OrderOrdersDailyFstVO  implements Serializable{
	private static final long serialVersionUID = 20150730L;
	
	private long RN;
	private String ODR_DT;
	private double ODR_QT; 
	private String BOXPE_AQZ;
	private long TXT_AM;
	private long EXTX_AM;
	private long ODR_AM;
	private long VCBT_AM;
	
	
	
	public long getRN() {
		return RN;
	}



	public void setRN(long rN) {
		RN = rN;
	}



	public String getODR_DT() {
		return ODR_DT;
	}



	public void setODR_DT(String oDR_DT) {
		ODR_DT = oDR_DT;
	}



	public double getODR_QT() {
		return ODR_QT;
	}



	public void setODR_QT(double oDR_QT) {
		ODR_QT = oDR_QT;
	}



	public String getBOXPE_AQZ() {
		return BOXPE_AQZ;
	}



	public void setBOXPE_AQZ(String bOXPE_AQZ) {
		BOXPE_AQZ = bOXPE_AQZ;
	}



	public long getTXT_AM() {
		return TXT_AM;
	}



	public void setTXT_AM(long tXT_AM) {
		TXT_AM = tXT_AM;
	}



	public long getEXTX_AM() {
		return EXTX_AM;
	}



	public void setEXTX_AM(long eXTX_AM) {
		EXTX_AM = eXTX_AM;
	}



	public long getODR_AM() {
		return ODR_AM;
	}



	public void setODR_AM(long oDR_AM) {
		ODR_AM = oDR_AM;
	}



	public long getVCBT_AM() {
		return VCBT_AM;
	}



	public void setVCBT_AM(long vCBT_AM) {
		VCBT_AM = vCBT_AM;
	}



	@Override
	public String toString() {
		return JsonUtil.toString(this);
	}
	
	
	
	
	
	
}
