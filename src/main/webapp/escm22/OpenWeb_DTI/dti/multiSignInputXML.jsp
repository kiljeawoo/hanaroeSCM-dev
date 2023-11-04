<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
  <%@include file="./common.jsp" %>
  <title>전자봉투 데이터 서명/검증</title>

</head>
<body>
<script>
	function sign_complete_callback(res) {
		if(res.code == 0) {
			if(res.data  instanceof Array) {
				for(var i=0;i<res.data.length;i++) {
					var resultItem = $("#multiSignItem").clone();
					$(resultItem).attr("id","");
					$(resultItem).show();

					$("#signedTaxInvoice", resultItem).val(res.data[i].signedTaxInvoice);
					$("#rvalueResult", resultItem).val(res.data[i].RValue);
					$("#certProperties", resultItem).empty().append(objectToTable("인증서 정보",res.data[i].certInfo));
					$("#multiSignRsultTitle",resultItem).text((i+1)+" 번째 서명결과");
					$("#multiSignResultArea").append(resultItem);
				}
			}
			else {
				var resultItem = $("#multiSignItem").clone();
				$(resultItem).show();

				$("#signedTaxInvoice",resultItem).val(res.data.signedTaxInvoice);
				$("#rvalueResult",resultItem).val(res.data.RValue);
				$("#certProperties", resultItem).append(objectToTable("인증서 정보",res.data.certInfo));

				$("#multiSignResultArea").append(resultItem);
			}
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


	function eTaxRValueVerify(obj) {
		var parentForm = $(obj).parent().parent().parent();
		var rvalue =      $("#rvalueResult",parentForm).val();
		var signedTaxInvoice = $("#signedTaxInvoice",parentForm).val();
		nxTSDTI.checkRValue(rvalue,signedTaxInvoice,rvalue_verify_complete_callback);
	}


	function eTaxVerify(obj) {
		var parentForm = $(obj).parent().parent().parent();
		var signedTaxInvoice = $("#signedTaxInvoice",parentForm).val();
		nxTSDTI.verify(signedTaxInvoice,{},verify_complete_callback);
	}

	function eTaxSign() {
		$("#multiSignResultArea").empty();

		var cnt = $("#signCount").val();
		var type = $("#typeSelect").val();
		var taxInvoice =$("#inputData",$("#tabXML"+type)).val();

		if(taxInvoice == "") {
			alert("서명 대상이 없습니다. 입력값을 확인해 주세요.");
			$("#inputData",$("#tabXML"+type)).focus();
			return;
		}

		var signData = [];
		for(var i=0;i<cnt;i++) {
			signData.push({data:taxInvoice,saveToTaxInvoiceFile:""});
		}

		nxTSDTI.sign(type,signData,{},sign_complete_callback);
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
      <div><h3>멀티 DTI 서명/검증</h3></div>
      <div class="panel panel-primary">
        <div class="panel-heading">
          입력 데이터
        </div>
        <div class="panel-body">
          <form onsubmit="return false" class="form-horizontal">
            <div class="form-group">
              <label for="inputData" class="col-sm-2">입력데이터 타입</label>
              <div class="col-sm-8">
                <select id="typeSelect" class="form-control">
                  <option value="1">taxInvoice 사용</option>
                  <option value="2">두번째 파라미터에 XML 사용</option>
                  <option value="3">두번째 파라미터에 파일경로</option>
                </select>
              </div>
            </div>

            <div id="tabXML1" class="form-group">
              <label class="control-label col-sm-2">입력 XML</label>
              <div class="col-sm-9">
                <textarea class="form-control" id="inputData" rows="10"><?xml version="1.0" encoding="UTF-8"?><TaxInvoice xmlns="urn:kr:or:kec:standard:Tax:ReusableAggregateBusinessInformationEntitySchemaModule:1:0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:kr:or:kec:standard:Tax:ReusableAggregateBusinessInformationEntitySchemaModule:1:0 http://www.kec.or.kr/standard/Tax/TaxInvoiceSchemaModule_1.0.xsd">
                  <ExchangedDocument>
                    <ID>String</ID>
                    <IssueDateTime>12345</IssueDateTime>
                    <ReferenceID>
                      <ID>String</ID>
                    </ReferenceID>
                  </ExchangedDocument>
                  <TaxInvoiceDocument>
                    <IssueID>1234567890</IssueID>
                    <TypeCode>0101</TypeCode>
                    <DescriptionText>String</DescriptionText>
                    <IssueDateTime>12345</IssueDateTime>
                    <AmendmentStatusCode>01</AmendmentStatusCode>
                    <PurposeCode>01</PurposeCode>
                    <ImportDocument>
                      <ID>String</ID>
                      <ItemQuantity>12345</ItemQuantity>
                      <AcceptablePeriod>
                        <StartDateTime>12345</StartDateTime>
                        <EndDateTime>12345</EndDateTime>
                      </AcceptablePeriod>
                    </ImportDocument>
                  </TaxInvoiceDocument>
                  <TaxInvoiceTradeSettlement>
                    <InvoicerParty>
                      <ID>0234567890</ID>
                      <TypeCode>String</TypeCode>
                      <NameText>String</NameText>
                      <ClassificationCode>String</ClassificationCode>
                      <SpecifiedOrganization>
                        <TaxRegistrationID>1111</TaxRegistrationID>
                      </SpecifiedOrganization>
                      <SpecifiedPerson>
                        <NameText>String</NameText>
                      </SpecifiedPerson>
                      <DefinedContact>
                        <DepartmentNameText>String</DepartmentNameText>
                        <PersonNameText>String</PersonNameText>
                        <TelephoneCommunication>String</TelephoneCommunication>
                        <URICommunication>String</URICommunication>
                      </DefinedContact>
                      <SpecifiedAddress>
                        <LineOneText>String</LineOneText>
                      </SpecifiedAddress>
                    </InvoicerParty>
                    <InvoiceeParty>
                      <ID>12345</ID>
                      <TypeCode>String</TypeCode>
                      <NameText>String</NameText>
                      <ClassificationCode>String</ClassificationCode>
                      <SpecifiedOrganization>
                        <TaxRegistrationID>1111</TaxRegistrationID>
                        <BusinessTypeCode listID="token" listSchemeURI="http://www.altova.com" listVersionID="token" listName="String" name="String" listURI="http://www.altova.com" listAgencyName="String" listAgencyID="1" languageID="a-a">token</BusinessTypeCode>
                      </SpecifiedOrganization>
                      <SpecifiedPerson>
                        <NameText>String</NameText>
                      </SpecifiedPerson>
                      <PrimaryDefinedContact>
                        <DepartmentNameText>String</DepartmentNameText>
                        <PersonNameText>String</PersonNameText>
                        <TelephoneCommunication>String</TelephoneCommunication>
                        <URICommunication>String</URICommunication>
                      </PrimaryDefinedContact>
                      <SecondaryDefinedContact>
                        <DepartmentNameText>String</DepartmentNameText>
                        <PersonNameText>String</PersonNameText>
                        <TelephoneCommunication>String</TelephoneCommunication>
                        <URICommunication>String</URICommunication>
                      </SecondaryDefinedContact>
                      <SpecifiedAddress>
                        <LineOneText>String</LineOneText>
                      </SpecifiedAddress>
                    </InvoiceeParty>
                    <BrokerParty>
                      <ID>1234567890</ID>
                      <TypeCode>String</TypeCode>
                      <NameText>String</NameText>
                      <ClassificationCode>String</ClassificationCode>
                      <SpecifiedOrganization>
                        <TaxRegistrationID>1111</TaxRegistrationID>
                      </SpecifiedOrganization>
                      <SpecifiedPerson>
                        <NameText>String</NameText>
                      </SpecifiedPerson>
                      <DefinedContact>
                        <DepartmentNameText>String</DepartmentNameText>
                        <PersonNameText>String</PersonNameText>
                        <TelephoneCommunication>String</TelephoneCommunication>
                        <URICommunication>String</URICommunication>
                      </DefinedContact>
                      <SpecifiedAddress>
                        <LineOneText>String</LineOneText>
                      </SpecifiedAddress>
                    </BrokerParty>
                    <PaymentMeans>
                      <TypeCode listID="token" listSchemeURI="http://www.altova.com" listVersionID="token" listName="String" name="String" listURI="http://www.altova.com" listAgencyName="String" listAgencyID="1" languageID="a-a">token</TypeCode>
                      <PaidAmount currencyID="AED">123455</PaidAmount>
                    </PaymentMeans>
                    <MonetarySummation>
                      <ChargeTotalAmount>123455</ChargeTotalAmount>
                      <TaxTotalAmount>123455</TaxTotalAmount>
                      <GrandTotalAmount>123455</GrandTotalAmount>
                    </MonetarySummation>
                  </TaxInvoiceTradeSettlement>
                  <TaxInvoiceTradeLineItem>
                    <SequenceNumeric>01</SequenceNumeric>
                    <DescriptionText>String</DescriptionText>
                    <InvoiceAmount>123455</InvoiceAmount>
                    <ChargeableUnitQuantity>-000000000000</ChargeableUnitQuantity>
                    <InformationText>String</InformationText>
                    <NameText>String</NameText>
                    <PurchaseExpiryDateTime>12345</PurchaseExpiryDateTime>
                    <TotalTax>
                      <CalculatedAmount>123455</CalculatedAmount>
                    </TotalTax>
                    <UnitPrice>
                      <UnitAmount>123455</UnitAmount>
                    </UnitPrice>
                  </TaxInvoiceTradeLineItem>
                </TaxInvoice>
                </textarea>
              </div>
            </div>


            <div id="tabXML2" class="form-group">
              <label class="control-label col-sm-2">입력 XML</label>
              <div class="col-sm-9">
                <textarea class="form-control" id="inputData" rows="10"><?xml version="1.0" encoding="UTF-8"?><TaxInvoice xmlns="urn:kr:or:kec:standard:Tax:ReusableAggregateBusinessInformationEntitySchemaModule:1:0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:kr:or:kec:standard:Tax:ReusableAggregateBusinessInformationEntitySchemaModule:1:0 http://www.kec.or.kr/standard/Tax/TaxInvoiceSchemaModule_1.0.xsd">
                  <ExchangedDocument>
                    <ID>String</ID>
                    <IssueDateTime>12345</IssueDateTime>
                    <ReferenceID>
                      <ID>String</ID>
                    </ReferenceID>
                  </ExchangedDocument>
                  <TaxInvoiceDocument>
                    <IssueID>1234567890</IssueID>
                    <TypeCode>0101</TypeCode>
                    <DescriptionText>String</DescriptionText>
                    <IssueDateTime>12345</IssueDateTime>
                    <AmendmentStatusCode>01</AmendmentStatusCode>
                    <PurposeCode>01</PurposeCode>
                    <ImportDocument>
                      <ID>String</ID>
                      <ItemQuantity>12345</ItemQuantity>
                      <AcceptablePeriod>
                        <StartDateTime>12345</StartDateTime>
                        <EndDateTime>12345</EndDateTime>
                      </AcceptablePeriod>
                    </ImportDocument>
                  </TaxInvoiceDocument>
                  <TaxInvoiceTradeSettlement>
                    <InvoicerParty>
                      <ID>0234567890</ID>
                      <TypeCode>String</TypeCode>
                      <NameText>String</NameText>
                      <ClassificationCode>String</ClassificationCode>
                      <SpecifiedOrganization>
                        <TaxRegistrationID>1111</TaxRegistrationID>
                      </SpecifiedOrganization>
                      <SpecifiedPerson>
                        <NameText>String</NameText>
                      </SpecifiedPerson>
                      <DefinedContact>
                        <DepartmentNameText>String</DepartmentNameText>
                        <PersonNameText>String</PersonNameText>
                        <TelephoneCommunication>String</TelephoneCommunication>
                        <URICommunication>String</URICommunication>
                      </DefinedContact>
                      <SpecifiedAddress>
                        <LineOneText>String</LineOneText>
                      </SpecifiedAddress>
                    </InvoicerParty>
                    <InvoiceeParty>
                      <ID>12345</ID>
                      <TypeCode>String</TypeCode>
                      <NameText>String</NameText>
                      <ClassificationCode>String</ClassificationCode>
                      <SpecifiedOrganization>
                        <TaxRegistrationID>1111</TaxRegistrationID>
                        <BusinessTypeCode listID="token" listSchemeURI="http://www.altova.com" listVersionID="token" listName="String" name="String" listURI="http://www.altova.com" listAgencyName="String" listAgencyID="1" languageID="a-a">token</BusinessTypeCode>
                      </SpecifiedOrganization>
                      <SpecifiedPerson>
                        <NameText>String</NameText>
                      </SpecifiedPerson>
                      <PrimaryDefinedContact>
                        <DepartmentNameText>String</DepartmentNameText>
                        <PersonNameText>String</PersonNameText>
                        <TelephoneCommunication>String</TelephoneCommunication>
                        <URICommunication>String</URICommunication>
                      </PrimaryDefinedContact>
                      <SecondaryDefinedContact>
                        <DepartmentNameText>String</DepartmentNameText>
                        <PersonNameText>String</PersonNameText>
                        <TelephoneCommunication>String</TelephoneCommunication>
                        <URICommunication>String</URICommunication>
                      </SecondaryDefinedContact>
                      <SpecifiedAddress>
                        <LineOneText>String</LineOneText>
                      </SpecifiedAddress>
                    </InvoiceeParty>
                    <BrokerParty>
                      <ID>1234567890</ID>
                      <TypeCode>String</TypeCode>
                      <NameText>String</NameText>
                      <ClassificationCode>String</ClassificationCode>
                      <SpecifiedOrganization>
                        <TaxRegistrationID>1111</TaxRegistrationID>
                      </SpecifiedOrganization>
                      <SpecifiedPerson>
                        <NameText>String</NameText>
                      </SpecifiedPerson>
                      <DefinedContact>
                        <DepartmentNameText>String</DepartmentNameText>
                        <PersonNameText>String</PersonNameText>
                        <TelephoneCommunication>String</TelephoneCommunication>
                        <URICommunication>String</URICommunication>
                      </DefinedContact>
                      <SpecifiedAddress>
                        <LineOneText>String</LineOneText>
                      </SpecifiedAddress>
                    </BrokerParty>
                    <PaymentMeans>
                      <TypeCode listID="token" listSchemeURI="http://www.altova.com" listVersionID="token" listName="String" name="String" listURI="http://www.altova.com" listAgencyName="String" listAgencyID="1" languageID="a-a">token</TypeCode>
                      <PaidAmount currencyID="AED">123455</PaidAmount>
                    </PaymentMeans>
                    <MonetarySummation>
                      <ChargeTotalAmount>123455</ChargeTotalAmount>
                      <TaxTotalAmount>123455</TaxTotalAmount>
                      <GrandTotalAmount>123455</GrandTotalAmount>
                    </MonetarySummation>
                  </TaxInvoiceTradeSettlement>
                  <TaxInvoiceTradeLineItem>
                    <SequenceNumeric>01</SequenceNumeric>
                    <DescriptionText>String</DescriptionText>
                    <InvoiceAmount>123455</InvoiceAmount>
                    <ChargeableUnitQuantity>-000000000000</ChargeableUnitQuantity>
                    <InformationText>String</InformationText>
                    <NameText>String</NameText>
                    <PurchaseExpiryDateTime>12345</PurchaseExpiryDateTime>
                    <TotalTax>
                      <CalculatedAmount>123455</CalculatedAmount>
                    </TotalTax>
                    <UnitPrice>
                      <UnitAmount>123455</UnitAmount>
                    </UnitPrice>
                  </TaxInvoiceTradeLineItem>
                </TaxInvoice>
                </textarea>
              </div>
            </div>

            <div id="tabXML3" class="form-group">
              <label for="inputData" class="col-sm-2">XML File </label>
              <div class="col-sm-10">
                <input type="text" id="inputData" class="form-control" placeholder="XML이 저장되어 있는 파일의 전체 경로">
              </div>
            </div>

            <div class="form-group">
              <label class="control-label col-sm-2">서명 반복 횟수</label>
              <div class="col-sm-3">
                <input id="signCount" type="number" class="form-control" max="10" value="2">
              </div>
            </div>
            <div class="form-group">
              <label class="control-label col-sm-2"></label>
              <div class="col-sm-9">
                <button class= form-control" name="button1"  onclick="eTaxSign();">TaxInvoiceXML 전자서명하기</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div id="multiSignResultArea">

      </div>
    </div>

  </div>
</div>

<!-- ------------ 결과용 --------------------- -->
<div id="multiSignItem" class="panel panel-success" >
  <div class="panel-heading"  id="multiSignRsultTitle">
    sign결과.
  </div>
  <div class="panel-body">
    <form onsubmit="return false;" class="form-horizontal">
      <div class="form-group">
        <label class="control-label col-sm-2" >sign 결과</label>
        <div class="col-sm-10">
          <textarea id="signedTaxInvoice" cols="80" rows="10"></textarea>
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
          <button onclick="eTaxVerify(this);">서명한 TaxInvoiceXML 검증</button>
        </div>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-2"></label>
        <div class="col-sm-8">
          <button onclick="eTaxRValueVerify(this);">RValue 검증</button>
        </div>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-2">Cert Properties</label>
        <div id="certProperties" class="col-sm-8">
        </div>
      </div>
    </form>
  </div>
</div>
<!-- ------------ 결과용 --------------------- -->
<script>
  $(document).ready(function(){
    $("#multiSignItem").hide();
    $("#tabXML2").hide();
    $("#tabXML3").hide();
  });

  $("#typeSelect").change(function(){
    $("#tabXML1").hide();
    $("#tabXML2").hide();
    $("#tabXML3").hide();
    var type = $("#typeSelect").val();
    $("#tabXML"+type).show();

  });
</script>
</body>
</html>
