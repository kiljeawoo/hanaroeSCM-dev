package com.nh.api.escm.usrinfo;

import com.nh.api.ApiException;
import com.nh.api.ApiRequest;
import com.nh.api.Utils;
/**
 * 유저정보를 가져오는 객체
 * @author giljeawoo
 */
public class OM097 extends ApiRequest {
    private String usrid = ""; 
    private String emailDpzAdr = "";

   @Override
   public String unmarshal() throws ApiException {
      StringBuffer buffer = new StringBuffer();
      buffer.append(super.unmarshal());      
      buffer.append(Utils.writeToString(usrid , 14));
      buffer.append(Utils.writeToString(emailDpzAdr, 256));
      
      return buffer.toString();
   }
   
   public String getUsrid() {
      return usrid;
   }

   public void setUsrid(String usrid) {
      this.usrid = usrid;
   }

   public String getEmailDpzAdr() {
      return emailDpzAdr;
   }

   public void setEmailDpzAdr(String emailDpzAdr) {
      this.emailDpzAdr = emailDpzAdr;
   }

   @Override
   public String toString() {
      StringBuffer buffer = new StringBuffer();
      buffer.append(super.toString());
      buffer.append("usrid            : "+usrid             +"\n");
      buffer.append("emailDpzAdr        : "+emailDpzAdr         +"\n");      
      return buffer.toString();
   }
}
