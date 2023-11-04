<html>
<head>
<%@include file="./common.jsp" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<title>Insert title here</title>
</head>
<body onload ="bodyOnload();">
<script type="text/javascript" src="../WebIF.js"></script>
<script>
	function bodyOnload()
 	{	
		window.NEXACROHTML.Init();
		/*
		setTimeout(function(){
			if(nxTSSession.isInit() == false)
			{
				window.NEXACROHTML.FireUserNotify("FAIL");
			}
			else
			{
				nxTSPKI.callPostInit();
			}
		}, 50);
		*/
		
		
 	}
	
	function SetConfig(siteName, ldapInfo, policies)
	{
		nxTSPKIConfig.options.siteName = siteName;
		nxTSPKIConfig.options.ldapInfo = ldapInfo;//인증기관 관련 정보 모음
		nxTSPKIConfig.options.ctlInfo = "";
		nxTSPKIConfig.options.initPolicies = policies;//인증서 oid모음
		nxTSPKIConfig.options.includeCertPath = false;// 서명 생성시 인증서 포함 여부, false : 서명자 인증서만 포함.(기본), true : 서명자 & CA 인증서 포함
		nxTSPKIConfig.options.includeSigningTime = true;// 서명 생성시 서명시간 포함 여부, false : 미포함, true : 포함(기본)
		nxTSPKIConfig.options.includeCRL = false;// 서명 생성시 CRL 인증서 포함 여부, false : 미포함 (기본), true : 포함, 
		nxTSPKIConfig.options.includeContent = true;  // 서명 생성시 원본데이타 포함 여부 , false : 미포함, true : 포함(기본)
		nxTSPKIConfig.options.crlCheckOption = true; // 사용자 인증서 검증 조건, false : CRL 체크 안함. true : 현재시간기준으로 유효한 CRL 사용(기본), 2 : 현재 시간기준으로 유효한 CRL 못 구할 시 이전 CRL 사용.
		nxTSPKIConfig.options.arlCheckOption = true; // CA 인증서 검증 조건, 0 : ARL 체크 안함. 1 : 현재시간기준으로 유효한 ARL 사용(기본), 2 : 현재 시간기준으로 유효한 CRL 못 구할 시 이전 ARL 사용.
		nxTSPKIConfig.options.selectCertFirstButton = "HDD";//// 하드디스크를 첫 번째 버튼으로 설정
	}
	
	//초기화 함수 필수
    $(document).ready(function(){
		function installComplete(res,data) {
			$("#nxVersion").html(res.data.nx);
			$("#pkiVersion").html(res.data.tstoolkit);
			
			if(res.code == nxTSError.res_success) {
				window.NEXACROHTML.FireUserNotify("INSTALLED");
				checkTimer.stop();
			}
			else
			{
				checkTimer.stop();
				window.NEXACROHTML.FireUserNotify("FAIL");
			}
		}
		
		
		checkTimer = new nxTSUtil.timer(500,function(){
			nxTSCommon.installCheck(false,{ajaxto:120,success:installComplete,versionCheck:[nxTSConfig.TSTOOLKIT]});
		});
		checkTimer.start();
    });
	
 	function signTradeSign(signData, bzno)
 	{
 		nxTSPKIConfig.options.siteName = "농협하나로유통";
 		nxTSPKI.signData(signData, {ssn:bzno}, sign_complete_callback);
 	}
 	
 	function sign_complete_callback(res) {
		if (res.code == 0) {
        	$("#signedData").val(res.data.signedData);
           // $("#signCertInfo").append(objectToTable("",res.data.certInfo));
            window.NEXACROHTML.FireUserNotify("SUC");
        }
        else {
            alert("error code = " + res.code + ", message = " + res.errorMessage);
        }
    }
</script>
	<input type="text" id="signedData" value="" ></input>
	<input type="text" id="signCertInfo" value="" ></input>
  </body>
</html>
