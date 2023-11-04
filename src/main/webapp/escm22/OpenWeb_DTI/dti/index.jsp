<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="../js/bs-3.3.5/css/bootstrap.css" type="text/css">
    <link rel="stylesheet" href="../js/bs-3.3.5/css/bootstrap-theme.css" type="text/css">
    <script src="../js/jquery/jquery-1.11.3.js"></script>
    <script src="../js/bs-3.3.5/js/bootstrap.js"></script>
    <title>nxTSDTI demo</title>
  </head>
  <body>
    <div class="container">
      <div class="col-sm-12">
        <h3>nxTSToolkit Demo</h3>

        <ul class="list-group">
          <li class="list-group-item"><a href="./signGenXML.jsp">TaxInvoiceXML생성 서명/검증 (sign / verify)</a></li>
          <li class="list-group-item"><a href="./signInputXML.jsp">TaxInvoiceXML 서명/검증 (sign / verify)</a></li>
          <li class="list-group-item"><a href="./multiSignGenXML.jsp">멀티 TaxInvoiceXML생성 서명/검증 (sign / verify)</a></li>
          <li class="list-group-item"><a href="./multiSignInputXML.jsp">멀티 TaxInvoiceXML 서명/검증 (sign / verify)</a></li>
        </ul>
        <ul class="list-group">
          <li class="list-group-item"><a href="./generateTaxInvoiceXML.jsp">TaxInvoiceXML 생성 (generateTaxInvoiceXML)</a></li>
          <li class="list-group-item"><a href="./multiGenerateTaxInvoiceXML.jsp">멀티 TaxInvoiceXML생성 (generateTaxInvoiceXML)</a></li>
        </ul>
        <ul class="list-group">
          <li class="list-group-item"><a href="" onclick="versionInfoTest();return false;">버전 정보 (versionInfo)</a></li>
        </ul>

        <hr>
        <a href="../down/nxtsdtisetup.exe">nxtsdti download</a>

      </div>
    </div>
  <script>
    function versionInfoTest() {
      nxTSDTI.versionInfo(function(res) {
        alert(res.data);
      });
    }
  </script>
  </body>
</html>
