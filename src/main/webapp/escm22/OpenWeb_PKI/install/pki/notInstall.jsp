<html>
<head>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<script src="../../js/jquery/jquery-1.11.3.js"></script>
<script src="../../js/bs-3.3.5/js/bootstrap.js"></script>
<script src="../../js/nxts/nxts.min.js"></script>
<script src="../../js/nxts/nxtspki_config.js"></script>
<script>nxTSConfig.disableInstallConfirmMessage = true;</script>
<script src="../../js/nxts/nxtspki.js"></script>
<script src="../../js/demo.js"></script>
<title>Insert title here</title>
</head>
<body onload ="download_setup();">
<script type="text/javascript" src="../../WebIF.js"></script>
<script>
	function bodyOnload()
	{
		window.NEXACROHTML.Init();
	}
	var checkTimer;
	$(document).ready(function(){	
		alert("jsp");
		function installComplete(res,data) {
			$("#nxVersion").html(res.data.nx);
			$("#pkiVersion").html(res.data.tstoolkit);

			if(res.code == nxTSError.res_success) {
				checkTimer.stop();
				alert("SCORE PKI for OpenWeb 프로그램이 설치 되었습니다.");
				window.location.href = "../../pki/pki.jsp";
				window.NEXACROHTML.FireUserNotify("INSTALLED");
			}
		}
		checkTimer = new nxTSUtil.timer(3000,function(){
			nxTSCommon.installCheck(false,{ajaxto:2500,success:installComplete,versionCheck:[nxTSConfig.TSTOOLKIT]});
		});
		checkTimer.start();

		//updateConfigInfo("configInfo");
		//updateBrowserInfo("browserInfo");
	});
  
	function download_setup() {
		window.location.href = "../../down/nxtspkisetup.exe";
	}

	function updateConfigInfo(target) {
		var ul = $("<ul></ul>");
		ul.append($('<li><span class="key">NX Version</span><span class="val uninstall">'+nxTSPKIConfig.version.nx+'(<span id="nxVersion" class=""></span>)</span></li>'));
		ul.append($('<li><span class="key">TSPKI Version</span><span class="val uninstall">'+nxTSPKIConfig.version.tstoolkit+'(<span id="pkiVersion" class=""></span>)</span></li>'));
		ul.append($('<li><span class="key">Service URL</span><span class="val">'+nxTSConfig.getServiceUrl()+'</span></li>'));
		$("#"+target).append(ul);
	}
	
	function updateBrowserInfo(target) {
		var ul = $("<ul></ul>");
		ul.append($('<li><span class="key">Platform</span><span class="val">'+navigator.platform+'</span></li>'));
		ul.append($('<li><span class="key">AppVersion</span><span class="val">'+navigator.appVersion+'</span></li>'));
		ul.append($('<li><span class="key">UserAgent</span><span class="val">'+navigator.userAgent+'</span></li>'));
		$("#"+target).append(ul);
	}

</script>
</body>
</html>