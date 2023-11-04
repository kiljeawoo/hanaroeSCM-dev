package com.nh.escm.scm.order.vo;

import java.io.Serializable;

import com.esum.appetizer.util.JsonUtil;

/**
 * 수주내역조회 검색 항목
 * @author swha
 */
public class OrderOrdersSrhConditonVO implements Serializable {
	private static final long serialVersionUID = 20150730L;

	private String searchType;// 조회구분
	private String naWrsC;// 상품코드
	private String searchPeriod;// 조회기간
	private String calFrom;// From Date
	private String calTo;// To Date
	private String spyplType;// 공급처 구분
	private String phdFcltC;// 물류기능코드
	private String wmcLocRgnDsc;// 지역코드00 (시)
	private String htLovRgnC;// 지역코드01(구)
	private String trplC[];// 권한사업장
	private String odrDt;// 발주일자
	private String odrplNaTrplC;// 발주처코드
	private String odrplNaTeamC;// 발주처팀코드
	private String spyplNaTrplC;// 공급처코드
	private String spyplNaTeamC;// 공급처팀코드
	private String rvoplNaTrplC;// 수주처코드
	private String rvoplNaTeamC;// 수주처팀코드
	private String vhcno;// 차량번호
	private String odrPcs;// 상품단가
	private String naOdrStsDsc;// 발주상태구분
	private String ddlyYn;// 직송여부
	private String r2DdlyYn;// 축산R2 직송여부

	private int start;// 첫페이지
	private int end;// 마지막 페이지
	private String[] decrypt;

	public String getSearchType() {
		return searchType;
	}

	public void setSearchType(String searchType) {
		this.searchType = searchType;
	}

	public String getNaWrsC() {
		return naWrsC;
	}

	public void setNaWrsC(String naWrsC) {
		this.naWrsC = naWrsC;
	}

	public String getSearchPeriod() {
		return searchPeriod;
	}

	public void setSearchPeriod(String searchPeriod) {
		this.searchPeriod = searchPeriod;
	}

	public String getCalFrom() {
		return calFrom;
	}

	public void setCalFrom(String calFrom) {
		this.calFrom = calFrom;
	}

	public String getCalTo() {
		return calTo;
	}

	public void setCalTo(String calTo) {
		this.calTo = calTo;
	}

	public String getSpyplType() {
		return spyplType;
	}

	public void setSpyplType(String spyplType) {
		this.spyplType = spyplType;
	}

	public String getPhdFcltC() {
		return phdFcltC;
	}

	public void setPhdFcltC(String phdFcltC) {
		this.phdFcltC = phdFcltC;
	}

	public String getWmcLocRgnDsc() {
		return wmcLocRgnDsc;
	}

	public void setWmcLocRgnDsc(String wmcLocRgnDsc) {
		this.wmcLocRgnDsc = wmcLocRgnDsc;
	}

	public String getHtLovRgnC() {
		return htLovRgnC;
	}

	public void setHtLovRgnC(String htLovRgnC) {
		this.htLovRgnC = htLovRgnC;
	}

	public String[] getTrplC() {
		return trplC;
	}

	public void setTrplC(String[] trplC) {
		this.trplC = trplC;
	}

	public String getOdrDt() {
		return odrDt;
	}

	public void setOdrDt(String odrDt) {
		this.odrDt = odrDt;
	}

	public String getOdrplNaTrplC() {
		return odrplNaTrplC;
	}

	public void setOdrplNaTrplC(String odrplNaTrplC) {
		this.odrplNaTrplC = odrplNaTrplC;
	}

	public String getOdrplNaTeamC() {
		return odrplNaTeamC;
	}

	public void setOdrplNaTeamC(String odrplNaTeamC) {
		this.odrplNaTeamC = odrplNaTeamC;
	}

	public String getSpyplNaTrplC() {
		return spyplNaTrplC;
	}

	public void setSpyplNaTrplC(String spyplNaTrplC) {
		this.spyplNaTrplC = spyplNaTrplC;
	}

	public String getSpyplNaTeamC() {
		return spyplNaTeamC;
	}

	public void setSpyplNaTeamC(String spyplNaTeamC) {
		this.spyplNaTeamC = spyplNaTeamC;
	}

	public String getRvoplNaTrplC() {
		return rvoplNaTrplC;
	}

	public void setRvoplNaTrplC(String rvoplNaTrplC) {
		this.rvoplNaTrplC = rvoplNaTrplC;
	}

	public String getRvoplNaTeamC() {
		return rvoplNaTeamC;
	}

	public void setRvoplNaTeamC(String rvoplNaTeamC) {
		this.rvoplNaTeamC = rvoplNaTeamC;
	}

	public String getVhcno() {
		return vhcno;
	}

	public void setVhcno(String vhcno) {
		this.vhcno = vhcno;
	}

	public String getOdrPcs() {
		return odrPcs;
	}

	public void setOdrPcs(String odrPcs) {
		this.odrPcs = odrPcs;
	}

	public int getStart() {
		return start;
	}

	public void setStart(int start) {
		this.start = start;
	}

	public int getEnd() {
		return end;
	}

	public void setEnd(int end) {
		this.end = end;
	}

	public String getNaOdrStsDsc() {
		return naOdrStsDsc;
	}

	public void setNaOdrStsDsc(String naOdrStsDsc) {
		this.naOdrStsDsc = naOdrStsDsc;
	}

	@Override
	public String toString() {
		return JsonUtil.toString(this);
	}

	public String[] getDecrypt() {
		return decrypt;
	}

	public void setDecrypt(String[] decrypt) {
		this.decrypt = decrypt;
	}

	public String getDdlyYn() {
		return ddlyYn;
	}

	public void setDdlyYn(String ddlyYn) {
		this.ddlyYn = ddlyYn;
	}

	public String getR2DdlyYn() {
		return r2DdlyYn;
	}

	public void setR2DdlyYn(String r2DdlyYn) {
		this.r2DdlyYn = r2DdlyYn;
	}
}