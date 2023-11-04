package com.nh.escm.scm.delivery.vo;

/******************************************************************************************************
 * 2019.06.14 최영신
 * 
 * 배송예정서 타입 정보 Value Object
 ******************************************************************************************************/

public class DeliveryNoticeTypeVO {

	private boolean isR1 = false;							// R1 여부
	private boolean isR2 = false;							// R2 여부
	private boolean isDirectDelivery = false;	// 직송배송예정서 여부
	private boolean isCold = false;						// 저온배송예정서 여부
	private boolean isSea = false;						// 수산배송예정서 여부
	private boolean isLiveStock = false;			// 축산배송예정서 여부
	private boolean isRenovShop = false;		// 혁신점보 여부
	private boolean isPbddlyYn = false;			// PB직송

	public boolean isR1() {
		return isR1;
	}

	public void setR1(boolean isR1) {
		this.isR1 = isR1;
	}

	public boolean isR2() {
		return isR2;
	}

	public void setR2(boolean isR2) {
		this.isR2 = isR2;
	}

	public boolean isDirectDelivery() {
		return isDirectDelivery;
	}

	public void setDirectDelivery(boolean isDirectDelivery) {
		this.isDirectDelivery = isDirectDelivery;
	}

	public boolean isCold() {
		return isCold;
	}

	public void setCold(boolean isCold) {
		this.isCold = isCold;
	}

	public boolean isRenovShop() {
		return isRenovShop;
	}

	public void setRenovShop(boolean isRenovShop) {
		this.isRenovShop = isRenovShop;
	}

	public boolean isPbddlyYn() {
		return isPbddlyYn;
	}

	public void setPbddlyYn(boolean isPbddlyYn) {
		this.isPbddlyYn = isPbddlyYn;
	}

	public boolean isSea() {
		return isSea;
	}

	public void setSea(boolean isSea) {
		this.isSea = isSea;
	}

	public boolean isLiveStock() {
		return isLiveStock;
	}

	public void setLiveStock(boolean isLiveStock) {
		this.isLiveStock = isLiveStock;
	}
}
