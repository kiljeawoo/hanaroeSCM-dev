package com.nh.escm.scm.delivery.brokerageWholesaler.vo;

import java.io.Serializable;
import java.util.List;

import com.esum.appetizer.util.JsonUtil;
/**
 * 배송예정 거래처별 검색조건
 * @author swha
 *
 */
public class DeliveryTradingPatnersSrhVO  implements Serializable {
	
	private static final long serialVersionUID = 20150827L;
	
	private String dvy_plash_slpno_rdo;//배송예정서구분
	private String na_dvy_plash_slpno;//배송예정서번호
	private String odrpl_na_trpl_rdo;//발주처구분
	private String odrpl_na_trpl_c;//발주처코드
	private String dvy_pla_dt_from;//배송예정일자 From
	private String dvy_pla_dt_to;//배송예정일자 To
	private String cser_ctr_tpc;//계약유형
	private String dvy_pla_sts_rdo;//배송예정서 상태
	private String ddly_yn;//배송구분
	private String sort;//정렬기준
	private String ngrs_soju_yn;//지방소주여부
	private String spypl_type;//조회구분
	private String mbcoType;//본지사구분
	private String truAgcyNaTrplC;//위탁대리점경제코드
	/*
	 * Master Grid 선택 시 
	 */
	private String g_spypl_na_trpl_c;//공급처
	private String g_dvyaa_na_trpl_c;//배송처
	private String g_na_dvy_plash_slpno;//배송예정전표번호 
	private String trpl[];
	
	private int start;
	private int end;
	private String[] decrypt;

	private String MBCO_TYPE;
	
	public String getDvy_plash_slpno_rdo() {
		return dvy_plash_slpno_rdo;
	}

	public void setDvy_plash_slpno_rdo(String dvy_plash_slpno_rdo) {
		this.dvy_plash_slpno_rdo = dvy_plash_slpno_rdo;
	}


	public String getNa_dvy_plash_slpno() {
		return na_dvy_plash_slpno;
	}





	public void setNa_dvy_plash_slpno(String na_dvy_plash_slpno) {
		this.na_dvy_plash_slpno = na_dvy_plash_slpno;
	}





	public String getOdrpl_na_trpl_rdo() {
		return odrpl_na_trpl_rdo;
	}





	public void setOdrpl_na_trpl_rdo(String odrpl_na_trpl_rdo) {
		this.odrpl_na_trpl_rdo = odrpl_na_trpl_rdo;
	}





	public String getOdrpl_na_trpl_c() {
		return odrpl_na_trpl_c;
	}





	public void setOdrpl_na_trpl_c(String odrpl_na_trpl_c) {
		this.odrpl_na_trpl_c = odrpl_na_trpl_c;
	}





	public String getDvy_pla_dt_from() {
		return dvy_pla_dt_from;
	}





	public void setDvy_pla_dt_from(String dvy_pla_dt_from) {
		this.dvy_pla_dt_from = dvy_pla_dt_from;
	}





	public String getDvy_pla_dt_to() {
		return dvy_pla_dt_to;
	}





	public void setDvy_pla_dt_to(String dvy_pla_dt_to) {
		this.dvy_pla_dt_to = dvy_pla_dt_to;
	}





	public String getCser_ctr_tpc() {
		return cser_ctr_tpc;
	}





	public void setCser_ctr_tpc(String cser_ctr_tpc) {
		this.cser_ctr_tpc = cser_ctr_tpc;
	}





	public String getDvy_pla_sts_rdo() {
		return dvy_pla_sts_rdo;
	}





	public void setDvy_pla_sts_rdo(String dvy_pla_sts_rdo) {
		this.dvy_pla_sts_rdo = dvy_pla_sts_rdo;
	}





	public String getDdly_yn() {
		return ddly_yn;
	}





	public void setDdly_yn(String ddly_yn) {
		this.ddly_yn = ddly_yn;
	}





	public String getSort() {
		return sort;
	}





	public void setSort(String sort) {
		this.sort = sort;
	}





	public String getNgrs_soju_yn() {
		return ngrs_soju_yn;
	}





	public void setNgrs_soju_yn(String ngrs_soju_yn) {
		this.ngrs_soju_yn = ngrs_soju_yn;
	}





	public String getSpypl_type() {
		return spypl_type;
	}





	public void setSpypl_type(String spypl_type) {
		this.spypl_type = spypl_type;
	}





	public String getG_spypl_na_trpl_c() {
		return g_spypl_na_trpl_c;
	}





	public void setG_spypl_na_trpl_c(String g_spypl_na_trpl_c) {
		this.g_spypl_na_trpl_c = g_spypl_na_trpl_c;
	}





	public String getG_dvyaa_na_trpl_c() {
		return g_dvyaa_na_trpl_c;
	}





	public void setG_dvyaa_na_trpl_c(String g_dvyaa_na_trpl_c) {
		this.g_dvyaa_na_trpl_c = g_dvyaa_na_trpl_c;
	}





	public String getG_na_dvy_plash_slpno() {
		return g_na_dvy_plash_slpno;
	}





	public void setG_na_dvy_plash_slpno(String g_na_dvy_plash_slpno) {
		this.g_na_dvy_plash_slpno = g_na_dvy_plash_slpno;
	}





	public String[] getTrpl() {
		return trpl;
	}





	public void setTrpl(String[] trpl) {
		this.trpl = trpl;
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





	@Override
	public String toString(){
		return JsonUtil.toString(this);
	}





	public String[] getDecrypt() {
		return decrypt;
	}





	public void setDecrypt(String[] decrypt) {
		this.decrypt = decrypt;
	}

	public String getMbcoType() {
		return mbcoType;
	}

	public void setMbcoType(String mbcoType) {
		this.mbcoType = mbcoType;
	}

	public String getTruAgcyNaTrplC() {
		return truAgcyNaTrplC;
	}

	public void setTruAgcyNaTrplC(String truAgcyNaTrplC) {
		this.truAgcyNaTrplC = truAgcyNaTrplC;
	}

	public String getMBCO_TYPE() {
		return MBCO_TYPE;
	}

	public void setMBCO_TYPE(String mBCO_TYPE) {
		MBCO_TYPE = mBCO_TYPE;
	}
}