<%@ page language="java" pageEncoding="utf-8" contentType="text/html; charset=utf-8" %>
<%@ page import="java.util.List" %>
<%@ page import="java.util.HashMap" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>대금지급</title>
	<c:set var="scheme" value="<%= request.getScheme()%>"></c:set>
	<c:set var="serverName" value="<%= request.getServerName()%>"></c:set>
	<c:set var="serverPort" value="<%= request.getServerPort()%>"></c:set>
	<c:set var="contextPath" value="<%= request.getContextPath()%>"></c:set>
	<script type="text/javascript" src="<c:url value="/escm/nexacro14lib/component/ExtAPI/jquery-1.10.2.js" />"></script>
	
	<script type="text/javascript">
		window.onload = function() {
//			alert("1");
		}
		
		function trim(str) {
			return str.replace(/^\s+|\s+$/g,"");
		}
		
		function isEmpty(value) {
			var val = trim(value);
			
			if( val == "" || val == null || val == undefined || ( val != null && typeof val == "object" && !Object.keys(val).length ) ) {
				return true
			} else {
				return false
			}
		}
		
		function update() {
			var bnkNm = document.updateForm.bnkNm.value;
			var acno = document.updateForm.acno.value;
			var dprnm = document.updateForm.dprnm.value;
			var chrrnm = document.updateForm.chrrnm.value;
			var ctcplTelno = document.updateForm.ctcplTelno.value;
			var empNo = document.updateForm.empNo.value;
			var mbPw = document.updateForm.mbPw.value;
			
			if (isEmpty(bnkNm)) {
				alert("은행명을 입력하시기 바랍니다.");
				return;
			}
			
			if (isEmpty(acno)) {
				alert("계좌번호를 입력하시기 바랍니다.");
				return;
			}
			
			if (isEmpty(dprnm)) {
				alert("예금주명을 입력하시기 바랍니다.");
				return;
			}
			
			if (isEmpty(chrrnm)) {
				alert("담당자명을 입력하시기 바랍니다.");
				return;
			}
			
			if (isEmpty(ctcplTelno)) {
				alert("연락처를 입력하시기 바랍니다.");
				return;
			}
			
			document.updateForm.bnkNm.value = trim(bnkNm);
			document.updateForm.acno.value = trim(acno);
			document.updateForm.dprnm.value = trim(dprnm);
			document.updateForm.chrrnm.value = trim(chrrnm);
			document.updateForm.ctcplTelno.value = trim(ctcplTelno);
			document.updateForm.empNo.value = trim(empNo);
			document.updateForm.mbPw.value = trim(mbPw);
			
			var url = "${scheme}" + "://" + "${serverName}" + ":" + "${serverPort}" + "${contextPath}" + "/etc/pay/updateEtcPay";
			
			document.updateForm.action = url;
			document.updateForm.submit();
		}
		
		function onlyNumber(event) {
			event = event || window.event;
			
			var keyID = (event.which) ? event.which : event.keyCode;
			
			if ((keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105) || keyID == 8 || keyID == 9 || keyID == 46 || keyID == 37 || keyID == 39) {
				return;
			} else {
				return false;
			}
		}
		
		function removeChar(event) {
			event = event || window.event;
			
			var keyID = (event.which) ? event.which : event.keyCode;
			
			if (keyID == 8 || keyID == 9 || keyID == 46 || keyID == 37 || keyID == 39) {
				return;
			} else {
				event.target.value = event.target.value.replace(/[^0-9]/g, "");
			}
		}
	</script>
</head>
<body>
	<%
		List updateList = (List) request.getAttribute("updateList");
	%>
	<form name="frm" method="post">
		<c:forEach var="item" items="${updateList}" varStatus="loop">
			<input type="hidden" id="gln" name="gln" value="<c:out value='${item.GLN}' />" />
			<input type="hidden" id="kbn" name="kbn" value="<c:out value='${item.KBN}' />" />
			<input type="hidden" id="empNo" name="empNo" value="<c:out value='${item.EMP_NO}' />" />
			<input type="hidden" id="mbPw" name="mbPw" value="<c:out value='${item.MB_PW}' />" />
		</c:forEach>
	</form>
	<%
		if (updateList != null && updateList.size() > 0) {
	%>
			<script type="text/javascript">
				var gln = document.frm.gln.value;
				var kbn = document.frm.kbn.value;
				var empNo = document.frm.empNo.value;
				var mbPw = document.frm.mbPw.value;
				
				opener.search(gln, kbn, empNo, mbPw);	// 부모창 리스트 조회
  				opener.location.reload();				// 부모창 새로고침
				
				window.close();
			</script>
	<%
		}
		
		List list = (List) request.getAttribute("list");
	%>

	<div style="width:300px; margin:0 auto;">
		<div>
			<form name="updateForm" method="post">
				<table style="border-collapse: collapse; border:1px solid #C0C0C0;">
					<c:forEach var="item" items="${list}" varStatus="loop">
					<input type="hidden" id="kbn" name="kbn" value="<c:out value='${item.KBN}' />" />
					<input type="hidden" id="empNo" name="empNo" value="<c:out value='${item.EMP_NO}' />" />
					<input type="hidden" id="mbPw" name="mbPw" value="<c:out value='${item.MB_PW}' />" />
					<tr>
						<td style="width:120px; height:25px; background-color:#F9F9F9; padding-left:10px; font-weight:bold; border:1px solid #C0C0C0;">GLN 코드</td>
						<td><input type="text" id="gln" name="gln" value="<c:out value='${item.NA_BZPLC}' />" maxlength="13" style="border:1px solid #C0C0C0; height:25px;" readonly /></td>
					</tr>
					<tr>
						<td style="width:120px; height:25px; background-color:#F9F9F9; padding-left:10px; font-weight:bold; border:1px solid #C0C0C0;">입금은행</td>
						<td>
							<select id="bnkNm" name="bnkNm">
							<c:choose>
								<c:when test="${item.BNK_NM == '농축협'}">
									<option value="농협은행">농협은행</option>
									<option value="농축협" selected="selected">농축협</option>
								</c:when>
								<c:otherwise>
									<option value="농협은행" selected="selected">농협은행</option>
									<option value="농축협">농축협</option>
								</c:otherwise>
							</c:choose>
							</select>
						</td>
					</tr>
					<tr>
						<td style="width:120px; height:25px; background-color:#F9F9F9; padding-left:10px; font-weight:bold; border:1px solid #C0C0C0;">계좌번호</td>
						<td><input type="text" id="acno" name="acno" value="<c:out value='${item.ACNO}' />" maxlength="20" onkeydown="return onlyNumber(event);" onkeyup="removeChar(event);" style="ime-mode:disabled; border:1px solid #C0C0C0; height:25px;" /></td>
					</tr>
					<tr>
						<td style="width:120px; height:25px; background-color:#F9F9F9; padding-left:10px; font-weight:bold; border:1px solid #C0C0C0;">예금주명</td>
						<td><input type="text" id="dprnm" name="dprnm" value="<c:out value='${item.DPRNM}' />" maxlength="10" style="border:1px solid #C0C0C0; height:25px;" /></td>
					</tr>
					<tr>
						<td style="width:120px; height:25px; background-color:#F9F9F9; padding-left:10px; font-weight:bold; border:1px solid #C0C0C0;">담당자명</td>
						<td><input type="text" id="chrrnm" name="chrrnm" value="<c:out value='${item.CHRRNM}' />" maxlength="10" style="border:1px solid #C0C0C0; height:25px;" /></td>
					</tr>
					<tr>
						<td style="width:120px; height:25px; background-color:#F9F9F9; padding-left:10px; font-weight:bold; border:1px solid #C0C0C0;">연락처</td>
						<td><input type="text" id="ctcplTelno" name="ctcplTelno" value="<c:out value='${item.CTCPL_TELNO}' />" maxlength="11" onkeydown="return onlyNumber(event);" onkeyup="removeChar(event);" style="ime-mode:disabled; border:1px solid #C0C0C0; height:25px;" /></td>
					</tr>
					</c:forEach>
				</table>
			</form>
		</div>
		</br>
		<div>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<input type="button" value="등록" onclick="javascript:update();" style="width:80px;height:25px;font-weight:bold;background-color:#3964C3;color:#ffffff;border:1px solid #3964C3;cursor:pointer;" />
		</div>
	</div>
</body>
</html>
