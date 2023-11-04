(function(){var olT=function(){if(this.acd){this.acd();return;}var Rd=olT.prototype;Rd.acd=function(){this.D2L="";this.Pma="";};Rd.setServerURL=function(r6){
this.D2L=r6;};Rd.setServerIP=function(NN5){this.Pma=NN5;};Rd.createSecureOutputStream=function(bW,og){var Eed=new ByteArray();var o5=0;var KRd;
for(KRd in og){o5++;}Eed.writeInt(o5);for(KRd in og){var WVU=og[KRd];this.Au(Eed,KRd);this.Au(Eed,WVU);}var GTa=new ByteArray();var YXu=new this.Bka("forcs@#$",GTa);
YXu.write(bW,0,bW.length);Eed.writeBytes(GTa,0,GTa.length);Eed.position=0;return Eed;};Rd.createSecureInputStream=function(bW,og){var size=bW.readInt();
for(var i=0; i<size; i++){var KRd=this.P3(bW);var WVU=this.P3(bW);og[KRd]=WVU;}var Eed=new ByteArray();var CLK=new this.Xka("forcs@#$",bW);var A2h=new ByteArray();
CLK.Xq(A2h,0,bW.length-bW.position);Eed.writeBytes(A2h,0,A2h.length);Eed.position=0;return Eed;};Rd.Au=function(bW,mj){var i;var Maj=mj.length;
bW.writeInt(Maj);var v;for(i=0; i<Maj; i++){v=mj.charCodeAt(i);bW.writeByte((v>>>8)&255);bW.writeByte((v>>>0)&255);}};Rd.P3=function(bW){var Maj;
var GI5,kR5;Maj=bW.readInt();if(Maj==-1){return "<NULL>";}else{if(Maj<-1){throw new Error("A malformed string has been read in a data input stream.");
}}var mj="";var position=bW.position;for(var i=0; i<Maj; i++){GI5=bW[position+i*2];kR5=bW[position+i*2+1];if((GI5|kR5)<0){throw new Error("A malformed string has been read in a data input stream.");
}mj+=String.fromCharCode((GI5<<8)+(kR5<<0));}bW.position+=Maj*2;return mj;};var Xka=function(RN,PnS){if(this.e2E){this.e2E(RN,PnS);return;}var QPd=Xka.prototype;
QPd.e2E=function(RN,PnS){this.K1F=RN;this.ax=0;this.bx=0;this.cx=0;this.dx=0;this.si=0;this.lj=0;this.gCK=0;this.nhd=0;this.i=0;this.KLd=0;this.CPd=new Array();
this.DKa=0;this.UKa=0;this.DEU=0;this.UR=PnS;this.Sfd=new ByteArray();this.Sfd.setLength(17);var ztd=new ByteArray();ztd.writeMultiByte(RN,"iso-8859-1");
this.Sfd.writeBytes(ztd,0,ztd.length>16?16:ztd.length);this.Sfd.set(16,0);this.clear();};QPd.clear=function(){this.ax=0;this.bx=0;this.cx=0;this.dx=0;
this.si=0;this.lj=0;this.gCK=0;this.nhd=0;this.i=0;this.KLd=0;this.DKa=0;this.UKa=0;this.DEU=0;for(var i=0; i<8; i++){this.CPd[i]=0;}};QPd.kr5=function(){
var c=this.UR.readByte();if(c==-1){return -1;}this.NHa();this.DKa=this.KLd>>>8;this.UKa=this.KLd&255;c=c^(this.DKa^this.UKa);for(this.DEU=0; this.DEU<=15; this.DEU++){
this.Sfd.set(this.DEU,this.Sfd.get(this.DEU)^c);}return c;};QPd.Xq=function(b,off,X5,uLU){if(b===undefined){b=null;}if(off===undefined){off=-1;
}if(X5===undefined){X5=-1;}if(uLU===undefined){uLU=-1;}if((b==null)||this.UR==null){Wad("Null point exception");return -1;}if(X5<1){return 0;
}this.UR.readBytes(b,off,X5);var rt=X5;if(rt<=0){return rt;}var c=0;var i=0;for(i=0; i<rt; i++){this.NHa();this.DKa=this.KLd>>>8;this.UKa=this.KLd&255;
c=b.get(i+off);c=c^(this.DKa^this.UKa);for(var j=0; j<16; j++){this.Sfd.set(j,this.Sfd.get(j)^c);}b.set(i+off,c);}return rt;};QPd.dJ=function(){
return 0;};QPd.FzU=function(){this.dx=this.gCK+this.i;this.ax=this.CPd[this.i];this.cx=346;this.bx=20021;this.lj=this.ax;this.ax=this.si;this.si=this.lj;
this.lj=this.ax;this.ax=this.dx;this.dx=this.lj;this.ax=this.ax*this.bx&65535;this.lj=this.ax;this.ax=this.cx;this.cx=this.lj;if(this.ax!=0){
this.ax=(this.ax*this.si)&65535;this.cx=(this.ax+this.cx)&65535;}this.lj=this.ax;this.ax=this.si;this.si=this.lj;this.ax=(this.ax*this.bx)&65535;
this.dx=(this.cx+this.dx)&65535;this.ax=this.ax+1;this.gCK=this.dx;this.CPd[this.i]=this.ax;this.nhd=this.ax^this.dx;this.i=this.i+1;};QPd.NHa=function(){
this.CPd[0]=(this.Sfd.get(0)*256)+this.Sfd.get(1);this.FzU();this.KLd=this.nhd;this.CPd[1]=this.CPd[0]^((this.Sfd.get(2)*256)+this.Sfd.get(3));
this.FzU();this.KLd=this.KLd^this.nhd;this.CPd[2]=this.CPd[1]^((this.Sfd.get(4)*256)+this.Sfd.get(5));this.FzU();this.KLd=this.KLd^this.nhd;this.CPd[3]=this.CPd[2]^((this.Sfd.get(6)*256)+this.Sfd.get(7));
this.FzU();this.KLd=this.KLd^this.nhd;this.CPd[4]=this.CPd[3]^((this.Sfd.get(8)*256)+this.Sfd.get(9));this.FzU();this.KLd=this.KLd^this.nhd;this.CPd[5]=this.CPd[4]^((this.Sfd.get(10)*256)+this.Sfd.get(11));
this.FzU();this.KLd=this.KLd^this.nhd;this.CPd[6]=this.CPd[5]^((this.Sfd.get(12)*256)+this.Sfd.get(13));this.FzU();this.KLd=this.KLd^this.nhd;
this.CPd[7]=this.CPd[6]^((this.Sfd.get(14)*256)+this.Sfd.get(15));this.FzU();this.KLd=this.KLd^this.nhd;this.i=0;};this.e2E(RN,PnS);};Rd.Xka=Xka;
var Bka=function(RN,cL3){if(this.M2E){this.M2E(RN,cL3);return;}var QPd=Bka.prototype;QPd.M2E=function(RN,cL3){this.ax=0;this.bx=0;this.cx=0;this.dx=0;
this.si=0;this.lj=0;this.gCK=0;this.nhd=0;this.i=0;this.KLd=0;this.CPd=new Array();this.DKa=0;this.UKa=0;this.DEU=0;this.LO=cL3;this.CPd.length=8;
this.Sfd=new ByteArray();this.Sfd.setLength(17);var ztd=new ByteArray();ztd.writeMultiByte(RN,"iso-8859-1");this.Sfd.writeBytes(ztd,0,ztd.length>16?16:ztd.length);
this.Sfd.set(16,0);this.clear();};QPd.clear=function(){this.ax=0;this.bx=0;this.cx=0;this.dx=0;this.si=0;this.lj=0;this.gCK=0;this.nhd=0;this.i=0;
this.KLd=0;this.DKa=0;this.UKa=0;this.DEU=0;for(var i=0; i<8; i++){this.CPd[i]=0;}};QPd.eTd=function(b){this.NHa();this.DKa=this.KLd>>>8;this.UKa=this.KLd&255;
for(this.DEU=0; this.DEU<=15; this.DEU++){this.Sfd.set(this.DEU,this.Sfd.get(this.DEU)^b);}b=b^(this.DKa^this.UKa);this.LO.writeByte(b);};QPd.write=function(b,off,X5){
if(b===undefined){b=null;}if(off===undefined){off=-1;}if(X5===undefined){X5=-1;}if((b==null)||this.LO==null){Wad("Null point exception");return;
}if(X5<1){return;}var c=0;var qsa=new ByteArray();qsa.setLength(X5);for(var i=0; i<X5; i++){this.NHa();this.DKa=this.KLd>>>8;this.UKa=this.KLd&255;
c=b.get(i+off);for(var j=0; j<16; j++){this.Sfd.set(j,this.Sfd.get(j)^c);}c=c^(this.DKa^this.UKa);qsa.set(i,c);}this.LO.writeBytes(qsa,0,X5);
qsa=null;};QPd.flush=function(){};QPd.close=function(){};QPd.FzU=function(){this.dx=this.gCK+this.i;this.ax=this.CPd[this.i];this.cx=346;this.bx=20021;
this.lj=this.ax;this.ax=this.si;this.si=this.lj;this.lj=this.ax;this.ax=this.dx;this.dx=this.lj;this.ax=this.ax*this.bx&65535;this.lj=this.ax;
this.ax=this.cx;this.cx=this.lj;if(this.ax!=0){this.ax=(this.ax*this.si)&65535;this.cx=(this.ax+this.cx)&65535;}this.lj=this.ax;this.ax=this.si;
this.si=this.lj;this.ax=(this.ax*this.bx)&65535;this.dx=(this.cx+this.dx)&65535;this.ax=this.ax+1;this.gCK=this.dx;this.CPd[this.i]=this.ax;this.nhd=this.ax^this.dx;
this.i=this.i+1;};QPd.NHa=function(){this.CPd[0]=(this.Sfd.get(0)*256)+this.Sfd.get(1);this.FzU();this.KLd=this.nhd;this.CPd[1]=this.CPd[0]^((this.Sfd.get(2)*256)+this.Sfd.get(3));
this.FzU();this.KLd=this.KLd^this.nhd;this.CPd[2]=this.CPd[1]^((this.Sfd.get(4)*256)+this.Sfd.get(5));this.FzU();this.KLd=this.KLd^this.nhd;this.CPd[3]=this.CPd[2]^((this.Sfd.get(6)*256)+this.Sfd.get(7));
this.FzU();this.KLd=this.KLd^this.nhd;this.CPd[4]=this.CPd[3]^((this.Sfd.get(8)*256)+this.Sfd.get(9));this.FzU();this.KLd=this.KLd^this.nhd;this.CPd[5]=this.CPd[4]^((this.Sfd.get(10)*256)+this.Sfd.get(11));
this.FzU();this.KLd=this.KLd^this.nhd;this.CPd[6]=this.CPd[5]^((this.Sfd.get(12)*256)+this.Sfd.get(13));this.FzU();this.KLd=this.KLd^this.nhd;
this.CPd[7]=this.CPd[6]^((this.Sfd.get(14)*256)+this.Sfd.get(15));this.FzU();this.KLd=this.KLd^this.nhd;this.i=0;};this.M2E(RN,cL3);};Rd.Bka=Bka;
this.acd();};return olT;})();
