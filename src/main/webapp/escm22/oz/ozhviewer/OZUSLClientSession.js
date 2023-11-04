(function(){var SQT=function(){if(this.acd){this.acd();return;}var Rd=SQT.prototype;Rd.acd=function(){this.D2L="";this.Pma="";};Rd.setServerURL=function(r6){
this.D2L=r6;};Rd.setServerIP=function(NN5){this.Pma=NN5;};Rd.createSecureOutputStream=function(bW,og){var Eed=new ByteArray();var o5=0;var KRd;
for(KRd in og){o5++;}Eed.writeInt(o5);for(KRd in og){var WVU=og[KRd];this.Au(Eed,KRd);this.Au(Eed,WVU);}Eed.writeBytes(bW,0,bW.length);Eed.position=0;
return Eed;};Rd.createSecureInputStream=function(bW,og){var size=bW.readInt();for(var i=0; i<size; i++){var KRd=this.P3(bW);var WVU=this.P3(bW);
og[KRd]=WVU;}var Eed=new ByteArray();Eed.writeBytes(bW,bW.position,bW.length-bW.position);Eed.position=0;return Eed;};Rd.Au=function(bW,mj){var i;
var Maj=mj.length;bW.writeInt(Maj);var v;for(i=0; i<Maj; i++){v=mj.charCodeAt(i);bW.writeByte((v>>>8)&255);bW.writeByte((v>>>0)&255);}};Rd.P3=function(bW){
var Maj;var GI5,kR5;Maj=bW.readInt();if(Maj==-1){return "<NULL>";}else{if(Maj<-1){throw new Error("A malformed string has been read in a data input stream.");
}}var mj="";var position=bW.position;for(var i=0; i<Maj; i++){GI5=bW[position+i*2];kR5=bW[position+i*2+1];if((GI5|kR5)<0){throw new Error("A malformed string has been read in a data input stream.");
}mj+=String.fromCharCode((GI5<<8)+(kR5<<0));}bW.position+=Maj*2;return mj;};this.acd();};return SQT;})();
