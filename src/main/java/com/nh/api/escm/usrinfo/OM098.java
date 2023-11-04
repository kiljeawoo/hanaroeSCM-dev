package com.nh.api.escm.usrinfo;

import com.nh.api.ApiException;
import com.nh.api.ApiRequest;
import com.nh.api.Utils;

public class OM098 extends ApiRequest {
    private String usrid = ""; 

   @Override
   public String unmarshal() throws ApiException {
      StringBuffer buffer = new StringBuffer();
      buffer.append(super.unmarshal());      
      buffer.append(Utils.writeToString(usrid , 14));
      
      return buffer.toString();
   }
   
   public String getUsrid() {
      return usrid;
   }

   public void setUsrid(String usrid) {
      this.usrid = usrid;
   }

   @Override
   public String toString() {
      StringBuffer buffer = new StringBuffer();
      buffer.append(super.toString());
      buffer.append("usrid            : "+usrid             +"\n"); 
      return buffer.toString();
   }
}
