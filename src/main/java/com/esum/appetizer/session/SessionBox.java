package com.esum.appetizer.session;

import java.io.Serializable;
import java.util.Date;

/**
 * 사용자 Session정보
 * @author YunChang.Lee
 *
 */
public class SessionBox implements Serializable{

	private static final long serialVersionUID = 20150611L;

	private String userKey;
	private String userID;
	private String glnCode;
	private String mbcoType;
	private String companyName;
	private String userName;
	private String commanyType;
	private Date lastLoginDt;
	private String userType;
	private String firstLoginYn;	//최초로그인여부
	private String userCvDsc;		//회원종류
	private String userStatus;	    //회원가입진행상태
	private String userAuth;		//회원권한
	private String pwOverTermYn;	//비밀번호변경일 90일 초과 여부
	private String bizNumber;		//사업자번호
	private String hoffApvYn;
	private String naUsrSysKdc;
	private String svcStatus; 
	private String CHANGE_MB;       //미전환 회원 체크
	private String CHANGE_ELT;      //전자 계약서 변경 사항 있을때 
	private String upGlnCode;		//본사 gln코드
	private String billingUserID;   // 빌링권한 사용자ID
	private String billingUserName; // 빌링권한 사용자명
	private String noAuthMenuGroup; // 접근권한이 없는 메뉴그룹
	private String userSystemCode;
	private String weakPwYn;
	private String trplDtlTpc;
	private String corsToken; // CORS 토큰 값
	
	public String getCHANGE_ELT() {
		return CHANGE_ELT;
	}
	public void setCHANGE_ELT(String cHANGE_ELT) {
		CHANGE_ELT = cHANGE_ELT;
	}
	public String getCHANGE_MB() {
		return CHANGE_MB;
	}
	public void setCHANGE_MB(String cHANGE_MB) {
		CHANGE_MB = cHANGE_MB;
	}
	public String getUserKey() {
		return userKey;
	}
	public void setUserKey(String userKey) {
		this.userKey = userKey;
	}
	public String getGlnCode() {
		return glnCode;
	}
	public void setGlnCode(String glnCode) {
		this.glnCode = glnCode;
	}
	public String getMbcoType() {
		return mbcoType;
	}
	public void setMbcoType(String mbcoType) {
		this.mbcoType = mbcoType;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getCommanyType() {
		return commanyType;
	}
	public void setCommanyType(String commanyType) {
		this.commanyType = commanyType;
	}
	public Date getLastLoginDt() {
		return lastLoginDt;
	}
	public void setLastLoginDt(Date lastLoginDt) {
		this.lastLoginDt = lastLoginDt;
	}
	public String getUserType() {
		return userType;
	}
	public void setUserType(String userType) {
		this.userType = userType;
	}
	public String getUserID() {
		return userID;
	}
	public void setUserID(String userID) {
		this.userID = userID;
	}
	public String getFirstLoginYn() {
		return firstLoginYn;
	}
	public void setFirstLoginYn(String firstLoginYn) {
		this.firstLoginYn = firstLoginYn;
	}
	public String getUserCvDsc() {
		return userCvDsc;
	}
	public void setUserCvDsc(String userCvDsc) {
		this.userCvDsc = userCvDsc;
	}	
	public String getUserStatus() {
		return userStatus;
	}
	public void setUserStatus(String userStatus) {
		this.userStatus = userStatus;
	}	
	public String getUserAuth() {
		return userAuth;
	}
	public void setUserAuth(String userAuth) {
		this.userAuth = userAuth;
	}
	public String getPwOverTermYn() {
		return pwOverTermYn;
	}
	public void setPwOverTermYn(String pwOverTermYn) {
		this.pwOverTermYn = pwOverTermYn;
	}
	public String getHoffApvYn() {
		return hoffApvYn;
	}
	public void setHoffApvYn(String hoffApvYn) {
		this.hoffApvYn = hoffApvYn;
	}
	public String getNaUsrSysKdc() {
		return naUsrSysKdc;
	}
	public void setNaUsrSysKdc(String naUsrSysKdc) {
		this.naUsrSysKdc = naUsrSysKdc;
	}
	public String getSvcStatus() {
		return svcStatus;
	}
	public void setSvcStatus(String svcStatus) {
		this.svcStatus = svcStatus;
	}
	public String getBizNumber() {
		return bizNumber;
	}
	public void setBizNumber(String bizNumber) {
		this.bizNumber = bizNumber;
	}
	public String getUpGlnCode() {
		return upGlnCode;
	}
	public void setUpGlnCode(String upGlnCode) {
		this.upGlnCode = upGlnCode;
	}
	public String getBillingUserID() {
		return billingUserID;
	}
	public void setBillingUserID(String billingUserID) {
		this.billingUserID = billingUserID;
	}
	public String getBillingUserName() {
		return billingUserName;
	}
	public void setBillingUserName(String billingUserName) {
		this.billingUserName = billingUserName;
	}
	public String getNoAuthMenuGroup() {
		return noAuthMenuGroup;
	}
	public void setNoAuthMenuGroup(String noAuthMenuGroup) {
		this.noAuthMenuGroup = noAuthMenuGroup;
	}
	public String getUserSystemCode() {
		return userSystemCode;
	}
	public void setUserSystemCode(String userSystemCode) {
		this.userSystemCode = userSystemCode;
	}
	public String getWeakPwYn() {
		return weakPwYn;
	}
	public void setWeakPwYn(String weakPwYn) {
		this.weakPwYn = weakPwYn;
	}
	public String getTrplDtlTpc() {
		return trplDtlTpc;
	}
	public void setTrplDtlTpc(String trplDtlTpc) {
		this.trplDtlTpc = trplDtlTpc;
	}
	public String getCorsToken() {
		return corsToken;
	}
	public void setCorsToken(String corsToken) {
		this.corsToken = corsToken;
	}
}