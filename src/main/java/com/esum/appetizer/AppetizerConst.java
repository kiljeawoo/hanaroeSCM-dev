package com.esum.appetizer;

public enum AppetizerConst {
	LOCALE_KEY("LOCALE_KEY"), // 언어 키 - request.parameter, session.attribute
	TIMEZONE_KEY("TIMEZONE_KEY"), // 타임존 키 - request.parameter, session.attribute
	SYSTEM_ADMIN("admin"), // 시스템 관리자 ID
	AUTH_SYSTEM_ADMIN("A"); // 사용자 권한 - A: 시스템 관리자

	public final String value;
	private AppetizerConst(String value) {
		this.value=value;
	}
	
	public String toString() {
		return value;
	}
}
