<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=8" />
    <title>SCORE PKI for OpenWeb 설치</title>
    <%@ page contentType="text/html;charset=UTF-8" language="java" %>
    <!--<link rel="stylesheet" href="../../js/bs-3.3.5/css/bootstrap.css" type="text/css">-->
    <!--<link rel="stylesheet" href="../../js/bs-3.3.5/css/bootstrap-theme.css" type="text/css">-->
    <!--<link rel="stylesheet" href="../../css/common.css" type="text/css">-->
    <script src="../../js/jquery/jquery-1.11.3.js"></script>
    <script src="../../js/bs-3.3.5/js/bootstrap.js"></script>
    <script src="../../js/nxts/nxts.min.js"></script>
    <script src="../../js/nxts/nxtspki_config.js"></script>
    <script>nxTSConfig.disableInstallConfirmMessage = true;</script>
    <script src="../../js/nxts/nxtspki.js"></script>
    <script src="../../js/demo.js"></script>
	<link rel="stylesheet" href="../../css/nxtsdemo.css" type="text/css">

</head>
<body>
<ul id="nxtsdemoinstall">
  <li> SCORE PKI for OpenWeb 프로그램 설치 </li>
  <li> <img src="../../img/install.png"></li>
  <li>
    <dl>
      <dt>설정정보 </dt>
      <dd>
        <div class="panel-body">
          <div id="configInfo"> </div>
          </div>
      </dd>
    </dl>
  </li>
  <li>
    <dl>
      <dt>브라우저 정보 </dt>
      <dd>
        <div class="panel-body">
          <div id="browserInfo"> </div>
  </div>
      </dd>
    </dl>
  <li> <a class="btn01" onClick="download_setup();" >설치파일 다운로드</a> </li>
  <li> <a class="btn02" href="../../pki/">처음으로</a> <a class="btn02" href="window.history.back();" >뒤로</a> </li>
</ul>


<script>
	var checkTimer;
	$(document).ready(function(){
		function installComplete(res,data) {
			$("#nxVersion").html(res.data.nx);
			$("#pkiVersion").html(res.data.tstoolkit);

			if(res.code == nxTSError.res_success) {
				checkTimer.stop();
				alert("SCORE PKI for OpenWeb 프로그램이 설치 되었습니다.")
				window.location.href = "../../pki/";
			}
		}
		checkTimer = new nxTSUtil.timer(3000,function(){
			nxTSCommon.installCheck(false,{ajaxto:2500,success:installComplete,versionCheck:[nxTSConfig.TSTOOLKIT]});
		});
		checkTimer.start();

		updateConfigInfo("configInfo");
		updateBrowserInfo("browserInfo");
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
