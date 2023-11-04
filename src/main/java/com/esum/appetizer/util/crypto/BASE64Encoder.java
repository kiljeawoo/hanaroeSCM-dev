package com.esum.appetizer.util.crypto;
/**
 * 각종암호화에서 Encoding 클래스
 * 이 클래스는 Base64 클래스의 encode 메서드를 호출한다.
 *
 * 
 * @author YunChang.Lee
 */

public class BASE64Encoder {
    /**
     * 디코딩 메서드
     * @param   raw  인코딩할 바이트 배열
     * @return  String  인코딩된 문자열
     */
    public static String encode(byte[] raw) {
        return Base64.encode(raw);
    }
}