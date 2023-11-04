package com.esum.appetizer.util.crypto;

/**
 * 각종암호화에서 Decoding 클래스
 * 이 클래스는 Base64 클래스의 decode 메서드를 호출한다.
 *
 * @author YunChang.Lee
 */

public class BASE64Decoder {

    /**
     * 디코딩 메서드
     * @param   base64    인코딩된 스트링 문자열
     * @return  byte[]  디코딩된 바이트배열
     */
    public static byte[] decodeBuffer(String base64) {
        return Base64.decode(base64);
    }
}