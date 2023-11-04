<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
  <%@include file="./common.jsp" %>
  <title>전자봉투 데이터 서명/검증</title>
  <style type="text/css">
    .BLine_T{border-bottom: 1px solid #E66464;color:#E66464;}
    .RBLine_T{border-right: 1px solid #E66464;border-bottom: 1px solid #E66464;color:#E66464;}
    .NoLine_T{color:#E66464;}
    .RLine{border-right: 1px solid #E66464;padding:0px 6px 0px 2px;}
    .BLine{border-bottom: 1px solid #E66464;padding:0px 6px 0px 2px;}
    .RBLine{border-right: 1px solid #E66464;border-bottom: 1px solid #E66464;padding:0px 6px 0px 2px;}
    .NoLine{padding:0px 5px 0px 3px;}
    .hideline{border:1px solid #FFFFFF;}
    .input {border:solid 0;border-color:#E66464;border-left-color:#FFFFFF;border-top-color:#FFFFFF;background-color:#FFFFFF}
  </style>
</head>
<body>
<script>
	function sign_complete_callback(res) {
		if(res.code == 0) {
			$("#signedTaxInvoice").val(res.data.signedTaxInvoice);
			$("#rvalueResult").val(res.data.RValue);
			$("#certProperties").append(objectToTable("인증서 정보",res.data.certInfo));
		}
		else {
			alert(res.errorMessage);
		}
	}
	function verify_complete_callback(res) {
		if(res.code == 0) {
			alert("검증 성공.");
		}
		else {
			alert("error : code = "+res.code+", errorMessage = "+res.errorMessage);
		}
	}
	function rvalue_verify_complete_callback(res) {
		if(res.code == 0) {
			alert("RValue 검증 성공.");
		}
		else {
			alert("error : code = "+res.code+", errorMessage = "+res.errorMessage);
		}
	}
	function eTaxRValueVerify() {
		var rvalue =      $("#rvalueResult").val();
		var signedTaxInvoice = $("#signedTaxInvoice").val();
		nxTSDTI.checkRValue(rvalue,signedTaxInvoice,rvalue_verify_complete_callback);
	}

	function eTaxVerify() {
		var data = $("#signedTaxInvoice").val();
		nxTSDTI.verify(data,{},verify_complete_callback);
	}
	
	function eTaxSign(form) {
		$("#signedTaxInvoice").val("");
		$("#rvalueResult").val("");
		$("#certProperties").empty();

		var dtiParam = new nxTSDTIParam();
		dtiParam.exchangedDocument("TESTSEND-090900028", "TESTSEND-090900028", "20091102121023");
		dtiParam.taxInvoiceDocument("200909143900502610018801", "20090914", "0101", "01", "", "");
		dtiParam.invoicerParty(form.InvoicerCorpNum.value, form.invoicercorpName.value,form.invoicerCEOName.value, form.invoicerBizType.value, form.invoicerBizClass.value, "");
		dtiParam.invoicerPartyDefinedContact("", form.invoicerContactName.value, form.invoicerTEL.value, form.InvoicerEmail1.value+"@"+form.InvoicerEmail2.value);
		dtiParam.invoicerPartySpecifiedAddress(form.invoicerAddr.value);

		var name = "무역정보통신";
		dtiParam.invoiceeParty(form.InvoiceeCorpNum.value, "01", name, form.InvoiceeCEOName.value, form.InvoiceeBizType.value,form.InvoiceeBizClass.value, "");
		dtiParam.invoiceePartySpecifiedAddress(form.InvoiceeAddr.value);
		dtiParam.invoiceePartyPrimaryDefinedContact("", form.InvoiceeContactName.value, form.InvoiceeTEL.value, form.InvoiceeEmail1.value+"@"+form.InvoiceeEmail2.value);
		dtiParam.specifiedPaymentMeans("10", "1000");
		dtiParam.specifiedPaymentMeans("40", "2000");
		dtiParam.specifiedMonetarySummation("10000", form.TaxTotal.value, form.AmountTotal.value);
		dtiParam.tradeLineItem(1, form.PurchaseDt2_1.value, form.ItemName_1.value,"", "", "10", "1000", "10000", "");

		var param = dtiParam.getParam();

		var saveToTaxInvoiceFile = $("#saveFileName").val();
		nxTSDTI.sign(0,{data:param,saveToTaxInvoiceFile:saveToTaxInvoiceFile},{},sign_complete_callback);
	}
  
	//초기화 함수 필수
	$(document).ready(function(){
		nxTSDTI.onInit(function(){ 
			//nxTSDTI.init 함수 완료 후 실행해야 하는 함수나 기능 작성 위치
			//alert("Init 완료");
		});

		nxTSDTI.init(true);
	});		
	
</script>

<div style="padding-bottom:20px;">
  <div class="container">
    <div class="col-sm-10">
      <div><h3>DTI sign</h3></div>
      <div class="panel panel-primary">
        <div class="panel-heading">
          입력 데이터
        </div>
        <div class="panel-body">
          <!-- ----------------------------------------------------------------- -->
          <form name="eTaxForm" id="form_demo01" method="POST">
            <div id="dtb_demo_w">

              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;border:3px double #E66464;">
                <tbody><tr>
                  <td width="21" height="0"></td>
                  <td width="22"></td>
                  <td width="22"></td>
                  <td width="22"></td>
                  <td width="22"></td>
                  <td width="22"></td>
                  <td width="22"></td>
                  <td width="22"></td>
                  <td width="22"></td>
                  <td width="22"></td>
                  <td width="22"></td>
                  <td width="22"></td>
                  <td width="22"></td>
                  <td width="22"></td>
                  <td width="22"></td>
                  <td width="22"></td>
                  <td width="21"></td>
                  <td width="22"></td>
                  <td width="22"></td>
                  <td width="22"></td>
                  <td width="22"></td>
                  <td width="22"></td>
                  <td width="22"></td>
                  <td width="22"></td>
                  <td width="22"></td>
                  <td width="22"></td>
                  <td width="22"></td>
                  <td width="22"></td>
                  <td width="22"></td>
                  <td width="22"></td>
                  <td width="22"></td>
                  <td width="22"></td>
                  <td width="22"></td>
                  <td width="20"></td>
                </tr>
                <tr height="25">
                  <td colspan="16" rowspan="2" class="BLine_T" align="center" style="font-size:24px;"><b>세금계산서</b></td>
                  <td colspan="4" rowspan="2" class="BLine_T" align="center" style="line-height:20px;">공 급 자<br>(보 관 용)</td>
                  <td colspan="2" rowspan="2" class="BLine">&nbsp;</td>
                  <td colspan="4" align="right" class="NoLine_T">책번호 :</td>
                  <td colspan="3" align="right" class="NoLine"><input type="text" class="input" name="Kwon" style="width:56px;IME-MODE:disabled;" valtype="NUM" value=""></td>
                  <td colspan="1" align="center" class="NoLine">권</td>
                  <td colspan="3" align="right" class="NoLine"><input type="text" class="input" name="Ho" style="width:56px;IME-MODE:disabled;" valtype="NUM" value=""></td>
                  <td colspan="1" align="center" class="NoLine">호</td>
                </tr>
                <tr height="25">
                  <td colspan="4" align="right" class="BLine_T">일련번호 :</td>
                  <td colspan="8" class="BLine" align="right" style="padding:0px 8px 0px 3px;"><input type="text" class="input" name="SerialNum" style="width:100%;IME-MODE:disabled;" valtype="NUM" maxlength="8" value=""></td>
                </tr>
                <tr height="25">
                  <td colspan="1" rowspan="6" align="center" class="RBLine_T" style="line-height:22px;"><b>공<br>급<br>자</b></td>
                  <td colspan="3" align="center" class="RBLine_T">등록번호</td>
                  <td colspan="13" align="center" class="RBLine">
                    <input type="text" class="input" name="InvoicerCorpNum" value="1234567890" style="border:solid 0;">
                  </td>
                  <td colspan="1" rowspan="6" align="center" class="RBLine_T" style="line-height:22px;"><b>공<br>급<br>받<br>는<br>자</b></td>
                  <td colspan="3" align="center" class="RBLine_T">등록번호</td>
                  <td colspan="13" align="center" class="BLine">
                    <span id="InvoiceeCorpNum"></span>
                    <input type="text" class="input" name="InvoiceeCorpNum" value="9876543210">
                  </td></tr><tr height="35">
                  <td colspan="3" align="center" class="RBLine_T" style="line-height:16px;">상호<br>(법인명)</td>
                  <td colspan="8" align="left" class="RBLine">
                    <input type="text" class="input" name="invoicercorpName" value="(주)가상체험">
                  </td>
                  <td colspan="1" align="center" class="RBLine_T" style="line-height:16px;">성<br>명</td>
                  <td colspan="4" align="left" class="RBLine">
                    <input type="text" class="input" name="invoicerCEOName" value="김가상" size="10">
                  </td>
                  <td colspan="3" align="center" class="RBLine_T" style="line-height:16px;">상호<br>(법인명)</td>
                  <td colspan="8" align="left" class="RBLine">
                    <span id="InvoiceeCorpName"></span>
                    <input type="text" class="input" name="InvoiceeCorpName" value="무역정보통신">
                  </td>
                  <td colspan="1" align="center" class="RBLine_T" style="line-height:16px;">성<br>명</td>
                  <td colspan="4" align="left" class="BLine">
                    <span id="InvoiceeCEOName"></span>
                    <input type="text" class="input" name="InvoiceeCEOName" value="이대표" size="10">
                  </td>
                </tr>
                <tr height="35">
                  <td colspan="3" align="center" class="RBLine_T" style="line-height:16px;">사업장<br>주소</td>
                  <td colspan="13" align="left" class="RBLine">
                    <input type="text" class="input" name="invoicerAddr" size="40" value="광주 광산구 월곡1동 682-3 예흥빌딩 201호">
                  </td>
                  <td colspan="3" align="center" class="RBLine_T" style="line-height:16px;">사업장<br>주소</td>
                  <td colspan="13" align="left" class="BLine">
                    <span id="InvoiceeAddr"></span>
                    <input type="text" class="input" name="InvoiceeAddr" size="40" value="서울시 강남구 삼성동 12번지">
                  </td>
                </tr>
                <tr height="25">
                  <td colspan="3" align="center" class="RBLine_T">업태</td>
                  <td colspan="6" align="left" class="RBLine">
                    <input type="text" class="input" name="invoicerBizType" value="서비스" size="18">
                  </td>
                  <td colspan="2" align="center" class="RBLine_T">종목
                  </td><td colspan="5" align="left" class="RBLine">
                  <input type="text" class="input" name="invoicerBizClass" value="솔루션 관련" size="10">
                </td>
                  <td colspan="3" align="center" class="RBLine_T">업태</td>
                  <td colspan="6" align="left" class="RBLine">
                    <span id="InvoiceeBizType"></span>
                    <input type="text" class="input" name="InvoiceeBizType" value="통신" size="18">
                  </td>
                  <td colspan="2" align="center" class="RBLine_T">종목
                  </td><td colspan="5" align="left" class="BLine">
                  <span id="InvoiceeBizClass"></span>
                  <input type="text" class="input" name="InvoiceeBizClass" value="판매업" size="13">
                </td>
                </tr>
                <tr height="25">
                  <td colspan="3" align="center" class="RBLine_T">담당자</td>
                  <td colspan="6" align="left" class="RBLine">
                    <input type="text" class="input" name="invoicerContactName" value="김체험" size="18">
                  </td>
                  <td colspan="2" align="center" class="RBLine_T" style="padding:0px;">연락처</td>
                  <td colspan="5" align="left" class="RBLine">
                    <input type="text" class="input" name="invoicerTEL" value="1544-8385" size="12">
                  </td>
                  <td colspan="3" align="center" class="RBLine_T">담당자</td>
                  <td colspan="6" align="left" class="RBLine">
                    <span id="InvoiceeContactName"></span>
                    <input type="text" class="input" name="InvoiceeContactName" value="김쫄" size="12">
                  </td>
                  <td colspan="2" align="center" class="RBLine_T" style="padding:0px;">연락처</td>
                  <td colspan="5" align="left" class="BLine">
                    <span id="InvoiceeTEL"></span>
                    <input type="text" class="input" name="InvoiceeTEL" value="1588-1245" size="12">
                  </td>
                </tr>
                <tr height="25">
                  <td colspan="3" align="center" class="RBLine_T">Email</td>
                  <td colspan="13" align="left" class="RBLine">
                    <input type="text" class="input" name="InvoicerEmail1" value="nara" size="8">@<input type="text" class="input" name="InvoicerEmail2" value="gmail.com" size="8">
                  </td>
                  <td colspan="3" align="center" class="RBLine_T">Email</td>
                  <td colspan="13" align="left" class="BLine">
                    <input type="text" class="input" name="InvoiceeEmail1" value="mara" size="8">@<input type="text" class="input" name="InvoiceeEmail2" value="gmail.com" size="8">
                  </td>
                </tr>
                <tr height="1"><td colspan="34"></td></tr>
                <tr height="1"><td colspan="34" bgcolor="#E66464"></td></tr>
                <tr height="25">
                  <td colspan="4" align="center" class="RBLine_T" bgcolor="#F0F0F0"><b>과세형태</b></td>
                  <td colspan="5" align="left" class="BLine" bgcolor="#F0F0F0">
                    <input type="hidden" name="TaxType" value="1">
                    <input type="hidden" name="TaxCalcType" value="2">
                    <input type="radio" name="TaxTypeRadio" value="1" checked=""><a id="TaxTypeText" value="1">&nbsp;과세(10%)</a>
                  </td>
                  <td colspan="8" align="left" class="RBLine" bgcolor="#F0F0F0">
                    <input type="radio" name="TaxTypeRadio" value="2"><a id="TaxTypeText" value="2">&nbsp;영세(0%)</a>
                  </td>
                  <td colspan="4" align="center" class="RBLine_T" bgcolor="#F0F0F0"><b>문서형태</b></td>
                  <td colspan="3" align="left" class="BLine" bgcolor="#F0F0F0">
                    <input type="hidden" name="ModifyType" value="1">
                    <input type="radio" name="ModifyTypeRadio" value="0101" checked=""><a id="ModifyTypeText" value="1">&nbsp;일반</a>
                  </td>
                  <td colspan="10" align="left" class="BLine" bgcolor="#F0F0F0">
                    <input type="radio" name="ModifyTypeRadio" value="0201"><a id="ModifyTypeText" value="2">&nbsp;수정</a>&nbsp;&nbsp;
                    <select name="ModifyCode" class="sb">
                      <option value="">수정사유선택</option>
                      <option value="01">기재사항의 착오/정정</option>
                      <option value="02">공급가액 변동</option>
                      <option value="03">환입</option>
                      <option value="04">계약의 해지</option>
                      <!--option value="05">내국신용장 사후 개설</option-->
                    </select>
                  </td>
                </tr>
                <tr height="25">
                  <td colspan="4" align="center" class="RBLine_T" bgcolor="#F0F0F0"><b>작성방법</b></td>
                  <td colspan="5" align="left" class="BLine" bgcolor="#F0F0F0">
                    <input type="hidden" name="WriteType" value="4">
                    <input type="radio" name="WriteTypeRadio" value="4" checked=""><a id="WriteTypeText" value="4">&nbsp;직접입력</a>
                  </td>
                  <td colspan="5" align="left" class="BLine" bgcolor="#F7F5F4">
                    <input type="radio" name="WriteTypeRadio" value="1"><a id="WriteTypeText" value="1">&nbsp;수량/단가</a>
                  </td>
                  <td colspan="5" align="left" class="BLine" bgcolor="#F7F5F4">
                    <input type="radio" name="WriteTypeRadio" value="2"><a id="WriteTypeText" value="2">&nbsp;공급가액</a>
                  </td>
                  <td colspan="15" align="left" class="BLine" bgcolor="#F7F5F4">
                    <input type="radio" name="WriteTypeRadio" value="3"><a id="WriteTypeText" value="3">&nbsp;합계금액</a>
                  </td>
                </tr>
                <tr height="1"><td colspan="34"></td></tr>
                <tr height="1"><td colspan="34" bgcolor="#E66464"></td></tr>
                <tr height="25">
                  <td colspan="4" align="center" class="RBLine_T"><b>작성</b></td>
                  <td colspan="11" align="center" class="RBLine_T"><b>공급가액</b></td>
                  <td colspan="8" align="center" class="RBLine_T"><b>세액</b></td>
                  <td colspan="11" align="center" class="BLine_T"><b>비고</b></td>
                </tr>
                <tr height="25">
                  <td colspan="4" class="RBLine" style="padding:0px 4px 0px 2px;"><input type="text" name="WriteDt" value="2009-11-02" class="baroCal" style="width:100%;"></td>
                  <td colspan="11" class="RBLine"><input type="text" class="tb" name="AmountTotal" style="width:100%;IME-MODE:disabled;" valtype="NUM" value="11000"></td>
                  <td colspan="8" class="RBLine"><input type="text" class="tb" name="TaxTotal" style="width:100%;IME-MODE:disabled;" valtype="NUM" value="1000"></td>
                  <td colspan="11" class="BLine"><input type="text" class="tb" name="Remark1" style="width:100%;" value=""></td>
                </tr>
                <tr height="1"><td colspan="34"></td></tr>
                <tr height="1"><td colspan="34" bgcolor="#E66464"></td></tr>
                <tr height="25">
                  <td colspan="1" align="center" class="RBLine_T"><b>월</b></td>
                  <td colspan="1" align="center" class="RBLine_T"><b>일</b></td>
                  <td colspan="7" align="center" class="RBLine_T"><b>품목</b></td>
                  <td colspan="3" align="center" class="RBLine_T"><b>규격</b></td>
                  <td colspan="3" align="center" class="RBLine_T"><b>수량</b></td>
                  <td colspan="3" align="center" class="RBLine_T"><b>단가</b></td>
                  <td colspan="5" align="center" class="RBLine_T"><b>공급가액</b></td>
                  <td colspan="4" align="center" class="RBLine_T"><b>세액</b></td>
                  <td colspan="6" align="center" class="RBLine_T"><b>비고</b></td>
                  <td colspan="1" align="center" class="BLine_T">&nbsp;</td>
                </tr>

                <tr height="25">
                  <td colspan="1" align="center" class="RBLine"><input type="text" class="tb" name="PurchaseDt1_1" style="width:100%;IME-MODE:disabled;" maxlength="2" valtype="NUM"></td>
                  <td colspan="1" align="center" class="RBLine"><input type="text" class="tb" name="PurchaseDt2_1" style="width:100%;IME-MODE:disabled;" maxlength="2" valtype="NUM"></td>
                  <td colspan="7" align="center" class="RBLine"><input type="text" class="tb" value="아이템1" name="ItemName_1" style="width:100%;"></td>
                  <td colspan="3" align="center" class="RBLine"><input type="text" class="tb" name="Spec_1" style="width:100%;"></td>
                  <td colspan="3" align="center" class="RBLine"><input type="text" class="tb" value="10" name="Qty_1" style="width:100%;IME-MODE:disabled;" valtype="NUM"></td>
                  <td colspan="3" align="center" class="RBLine"><input type="text" class="tb" value="10" name="UnitCost_1" style="width:100%;IME-MODE:disabled;" valtype="NUM"></td>
                  <td colspan="5" align="center" class="RBLine"><input type="text" class="tb" value="100" name="Amount_1" style="width:100%;IME-MODE:disabled;" valtype="NUM"></td>
                  <td colspan="4" align="center" class="RBLine"><input type="text" class="tb" value="10" name="Tax_1" style="width:100%;IME-MODE:disabled;" valtype="NUM"></td>
                  <td colspan="6" align="center" class="RBLine"><input type="text" class="tb" name="Remark_1" style="width:100%;"></td>
                  <td colspan="1" align="center" class="BLine"></td>
                </tr>

                <tr height="25">
                  <td colspan="1" align="center" class="RBLine"><input type="text" class="tb" name="PurchaseDt1_2" style="width:100%;IME-MODE:disabled;" maxlength="2" valtype="NUM"></td>
                  <td colspan="1" align="center" class="RBLine"><input type="text" class="tb" name="PurchaseDt2_2" style="width:100%;IME-MODE:disabled;" maxlength="2" valtype="NUM"></td>
                  <td colspan="7" align="center" class="RBLine"><input type="text" class="tb" value="아이템2" name="ItemName_2" style="width:100%;"></td>
                  <td colspan="3" align="center" class="RBLine"><input type="text" class="tb" name="Spec_2" style="width:100%;"></td>
                  <td colspan="3" align="center" class="RBLine"><input type="text" class="tb" value="10" name="Qty_2" style="width:100%;IME-MODE:disabled;" valtype="NUM"></td>
                  <td colspan="3" align="center" class="RBLine"><input type="text" class="tb" value="10" name="UnitCost_2" style="width:100%;IME-MODE:disabled;" valtype="NUM"></td>
                  <td colspan="5" align="center" class="RBLine"><input type="text" class="tb" value="10" name="Amount_2" style="width:100%;IME-MODE:disabled;" valtype="NUM"></td>
                  <td colspan="4" align="center" class="RBLine"><input type="text" class="tb" value="10" name="Tax_2" style="width:100%;IME-MODE:disabled;" valtype="NUM"></td>
                  <td colspan="6" align="center" class="RBLine"><input type="text" class="tb" name="Remark_2" style="width:100%;"></td>
                  <td colspan="1" align="center" class="BLine"></td>
                </tr>

                <tr height="25">
                  <td colspan="1" align="center" class="RBLine"><input type="text" class="tb" name="PurchaseDt1_3" style="width:100%;IME-MODE:disabled;" maxlength="2" valtype="NUM"></td>
                  <td colspan="1" align="center" class="RBLine"><input type="text" class="tb" name="PurchaseDt2_3" style="width:100%;IME-MODE:disabled;" maxlength="2" valtype="NUM"></td>
                  <td colspan="7" align="center" class="RBLine"><input type="text" class="tb" name="ItemName_3" style="width:100%;"></td>
                  <td colspan="3" align="center" class="RBLine"><input type="text" class="tb" name="Spec_3" style="width:100%;"></td>
                  <td colspan="3" align="center" class="RBLine"><input type="text" class="tb" name="Qty_3" style="width:100%;IME-MODE:disabled;" valtype="NUM"></td>
                  <td colspan="3" align="center" class="RBLine"><input type="text" class="tb" name="UnitCost_3" style="width:100%;IME-MODE:disabled;" valtype="NUM"></td>
                  <td colspan="5" align="center" class="RBLine"><input type="text" class="tb" name="Amount_3" style="width:100%;IME-MODE:disabled;" valtype="NUM"></td>
                  <td colspan="4" align="center" class="RBLine"><input type="text" class="tb" name="Tax_3" style="width:100%;IME-MODE:disabled;" valtype="NUM"></td>
                  <td colspan="6" align="center" class="RBLine"><input type="text" class="tb" name="Remark_3" style="width:100%;"></td>
                  <td colspan="1" align="center" class="BLine"></td>
                </tr>

                <tr height="25">
                  <td colspan="1" align="center" class="RBLine"><input type="text" class="tb" name="PurchaseDt1_4" style="width:100%;IME-MODE:disabled;" maxlength="2" valtype="NUM"></td>
                  <td colspan="1" align="center" class="RBLine"><input type="text" class="tb" name="PurchaseDt2_4" style="width:100%;IME-MODE:disabled;" maxlength="2" valtype="NUM"></td>
                  <td colspan="7" align="center" class="RBLine"><input type="text" class="tb" name="ItemName_4" style="width:100%;"></td>
                  <td colspan="3" align="center" class="RBLine"><input type="text" class="tb" name="Spec_4" style="width:100%;"></td>
                  <td colspan="3" align="center" class="RBLine"><input type="text" class="tb" name="Qty_4" style="width:100%;IME-MODE:disabled;" valtype="NUM"></td>
                  <td colspan="3" align="center" class="RBLine"><input type="text" class="tb" name="UnitCost_4" style="width:100%;IME-MODE:disabled;" valtype="NUM"></td>
                  <td colspan="5" align="center" class="RBLine"><input type="text" class="tb" name="Amount_4" style="width:100%;IME-MODE:disabled;" valtype="NUM"></td>
                  <td colspan="4" align="center" class="RBLine"><input type="text" class="tb" name="Tax_4" style="width:100%;IME-MODE:disabled;" valtype="NUM"></td>
                  <td colspan="6" align="center" class="RBLine"><input type="text" class="tb" name="Remark_4" style="width:100%;"></td>
                  <td colspan="1" align="center" class="BLine"></td>
                </tr>

                <tr height="25">
                  <td colspan="9" align="center" class="RBLine_T"><b>합계금액</b></td>
                  <td colspan="4" align="center" class="RBLine_T">현금</td>
                  <td colspan="4" align="center" class="RBLine_T">수표</td>
                  <td colspan="4" align="center" class="RBLine_T">어음</td>
                  <td colspan="4" align="center" class="RBLine_T">외상미수금</td>
                  <td colspan="9" rowspan="2" align="center">
                    <input type="hidden" name="PurposeType" value="2">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;">
                      <tbody><tr>
                        <td height="23">이 금액을 </td>
                      </tr>
                      <tr>
                        <td height="23">
                          <input type="radio" name="PurposeTypeRadio" value="1"><a id="PurposeTypeText" value="1">&nbsp;영수</a>
                          <input type="radio" name="PurposeTypeRadio" value="2" checked=""><a id="PurposeTypeText" value="2">&nbsp;청구</a>
                        </td>
                      </tr>
                      </tbody></table>
                  </td>
                </tr>
                <tr height="25">
                  <td colspan="9" align="right" class="RLine"><input type="text" class="tb" name="TotalAmount" style="width:100%;IME-MODE:disabled;" valtype="NUM" value=""></td>
                  <td colspan="4" align="right" class="RLine"><input type="text" class="tb" name="Cash" style="width:100%;IME-MODE:disabled;" valtype="NUM" value=""></td>
                  <td colspan="4" align="right" class="RLine"><input type="text" class="tb" name="ChkBill" style="width:100%;IME-MODE:disabled;" valtype="NUM" value=""></td>
                  <td colspan="4" align="right" class="RLine"><input type="text" class="tb" name="Note" style="width:100%;IME-MODE:disabled;" valtype="NUM" value=""></td>
                  <td colspan="4" align="right" class="RLine"><input type="text" class="tb" name="Credit" style="width:100%;IME-MODE:disabled;" valtype="NUM" value=""></td>
                </tr>
                </tbody></table>


            </div>
          </form>
          <!-- ----------------------------------------------------------------- -->
          <hr/>
          <form class="form-horizontal" onsubmit="return false;">
            <div class="form-group">
              <label class="col-sm-2 control-form">파일 경로</label>
              <div class="col-sm-9">
                <input class="form-control col-sm-10" type="text" id="saveFileName" placeholder="생성된 결과를 저장할 파일의 전체 경로">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-form"></label>
              <div class="col-sm-9">
                <button class= form-control" name="button1"  onclick="eTaxSign(eTaxForm);">TaxInvoiceXML 생성 및 전자서명하기</button>
              </div>
            </div>
          </form>




        </div>
      </div>
      <div class="panel panel-success">
        <div class="panel-heading">
          sign결과.
        </div>
        <div class="panel-body">
          <form onsubmit="return false;" class="form-horizontal">
            <div class="form-group">
              <label class="control-label col-sm-2">sign 결과</label>
              <div class="col-sm-10">
                <textarea id="signedTaxInvoice" cols="80" rows="10"></textarea>
              </div>
            </div>
            <div class="form-group">
              <label class="control-label col-sm-2"></label>
              <div class="col-sm-8">
                <button onclick="eTaxVerify(this);">서명한 TaxInvoiceXML 검증</button>
              </div>
            </div>
            <div class="form-group">
              <label class="control-label col-sm-2">RValue</label>
              <div class="col-sm-8">
                <input type="text" class="form-control" value="" id="rvalueResult">
                </div>
            </div>
            <div class="form-group">
              <label class="control-label col-sm-2"></label>
              <div class="col-sm-8">
                <button onclick="eTaxRValueVerify(this);">RValue 검증</button>
              </div>
            </div>
            <hr/>
            <div class="form-group">
              <label class="control-label col-sm-2">Cert Properties</label>
              <div id="certProperties" class="col-sm-8">

              </div>
            </div>
          </form>
        </div>
      </div>


    </div>

  </div>
</div>


</body>
</html>
