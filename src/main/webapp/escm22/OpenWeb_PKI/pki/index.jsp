<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html> 
<html>
  <head>
  	<meta http-equiv="X-UA-Compatible" content="IE=8" />
    <link rel="stylesheet" href="../js/bs-3.3.5/css/bootstrap.css" type="text/css">
    <link rel="stylesheet" href="../js/bs-3.3.5/css/bootstrap-theme.css" type="text/css">
    <script src="../js/jquery/jquery-1.11.3.js"></script>
    <script src="../js/bs-3.3.5/js/bootstrap.js"></script>
    <script src="../js/demo.js"></script>
    <title>SCORE PKI for OpenWeb Demo</title>
  </head>
  <body>
    <div class="container">
      <div class="col-sm-12">
        <h3>SCORE PKI for OpenWeb Demo</h3>

        <ul class="list-group">
          <li class="list-group-item"><a href="./signData.jsp">1. 데이터 서명/검증 (signData / verifySignedData)</a></li>
          <li class="list-group-item"><a href="./signFile.jsp">2. 파일 서명/검증 (signFile / verifySignedFile)</a></li>
        </ul>
        <ul class="list-group">
          <li class="list-group-item"><a href="./loginData.jsp">3. 로그인 데이터 (loginData)</a></li>
        </ul>
		
        <ul class="list-group">
          <li class="list-group-item"><a href="./verifyVID.jsp">4. VID 검사 (verifyVID / verifyVID2)</a></li>
          <li class="list-group-item"><a href="./getCertificateProperties.jsp">5. 인증서 정보 가져오기 (getCertificateProperties)</a></li>
        </ul>
		
        <ul class="list-group">
          <li class="list-group-item"><a href="./addSignInSignedData.jsp">6. 추가 데이터 서명/검증 (addSignInSignedData / verifySignedData)</a></li>
          <li class="list-group-item"><a href="./addSignInSignedFile.jsp">7. 추가 파일 서명/검증 (addSignInSignedFile / verifySignedFile)</a></li>
          <li class="list-group-item"><a href="./generateSignature.jsp">8. 서명 생성/검증 (generateSignature / verifySignature)</a></li>
        </ul>

        <ul class="list-group">
          <li class="list-group-item"><a href="./encryptData.jsp">9. 데이터 암호화/복호화 (encryptData / decryptData)</a></li>
          <li class="list-group-item"><a href="./encryptFile.jsp">10. 파일 암호화/복호화 (encryptFile / decryptFile)</a></li>
        </ul>

        <ul class="list-group">
          <li class="list-group-item"><a href="./envelopData.jsp">11. 데이터 전자봉투 (envelopData / decryptEnvelopedData)</a></li>
          <li class="list-group-item"><a href="./envelopFile.jsp">12. 파일 전자봉투 (envelopFile / decryptEnvelopedFile)</a></li>
        </ul>

        <ul class="list-group">
          <li class="list-group-item"><a href="./base64.jsp">12. base64 인코딩/디코딩 (base64encode / base64encode)</a></li>
          <li class="list-group-item"><a href="./hashData.jsp">13. 해시 데이터 (hashData)</a></li>
          <li class="list-group-item"><a href="./hashFile.jsp">14. 해시 파일 (hashFile)</a></li>
        </ul>

        <ul class="list-group">
          <li class="list-group-item"><a href="./getDataFromLDAP.jsp">15. LDAP에서 데이터 가져오기 (getDataFromLDAP)</a></li>
          <li class="list-group-item"><a href="./generateRandomNumber.jsp">16. 랜덤값 생성 (generateRandomNumber)</a></li>
        </ul>
		
		<ul class="list-group">
		  <li class="list-group-item"><a href="./multiSignData.jsp">1-1. 멀티 데이터 서명 (multiSignData)</a></li>
		  <li class="list-group-item"><a href="./multiSignFile.jsp">2-1. 멀티 파일 서명 (multiSignFile)</a></li>
		  <li class="list-group-item"><a href="./multiGenerateSignature.jsp">8-1. 멀티 서명생성 (multiGenerateSignature)</a></li>
		</ul>

        <ul class="list-group">
          <li class="list-group-item"><a href="./makeSigData.jsp">17. SIG데이터 생성/추가/검증 (makeSigData / addSignInSigData / verifySigData)</a></li>
          <li class="list-group-item"><a href="./makeSigFile.jsp">18. SIG파일 생성/추가/검증 (makeSigFile / addSignInSigFile / verifySigFile)</a></li>
        </ul>
		
        <ul class="list-group">
          <li class="list-group-item"><a href="./signDataWithTimeStampToken.jsp">19. 데이터 서명/검증 (WithTimeStampToken) (signDataWith.. / verifySignedData)</a></li>
			<ul class="list-group">
				<li class="list-group-item"><a href="./multiSignDataWithTimeStampToken.jsp">19-1. 멀티 데이터 서명 (WithTimeStampToken)(multiSignDataWithTimeStampToken)</a></li>
			</ul>
        </ul>

        <ul class="list-group">
          <li class="list-group-item"><a href="./makeBiddingData.jsp">20. Bidding 데이터 생성 (makeBiddingData)</a></li>
        </ul>

        <ul class="list-group">
        </ul>

        <hr>
        <a href="../down/nxtspkisetup.exe">nxts client download</a>

      </div>
    </div>
  <script>
    function setDefaultValue(key) {
      wiz.util.cookie.set(key,$("#"+key).val());
    }
  </script>
  </body>
</html>
