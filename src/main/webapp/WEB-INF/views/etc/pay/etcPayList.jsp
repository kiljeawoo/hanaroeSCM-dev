<%@ page language="java" pageEncoding="utf-8" contentType="text/html; charset=utf-8" %>
<%@ page import="java.util.List" %>
<%@ page import="org.apache.commons.lang.StringUtils" %>
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
		function openPopup(gln, kbn, empNo, mbPw) {
			var url = "${scheme}" + "://" + "${serverName}" + ":" + "${serverPort}" + "${contextPath}" + "/etc/pay/etcPayPopup";
			var etcPay = "etcPay";
			
			window.open("", etcPay, "resizable=no,width=350,height=260,top=400,left=800");
			
			document.frm.gln.value = gln;
			document.frm.kbn.value = kbn;
			document.frm.empNo.value = empNo;
			document.frm.mbPw.value = mbPw;
			
			document.frm.target = etcPay;
			document.frm.action = url;
			document.frm.submit();
		}
		
		function search(gln, kbn, empNo, mbPw) {
			var url = "${scheme}" + "://" + "${serverName}" + ":" + "${serverPort}" + "${contextPath}" + "/etc/pay/etcPayList";
			
			document.frm.gln.value = gln;
			document.frm.kbn.value = kbn;
			document.frm.empNo.value = empNo;
			document.frm.mbPw.value = mbPw;
			
			document.frm.action = url;
			document.frm.submit();
		}
	</script>
</head>
<body>
	<form name="frm" method="post">
		<input type="hidden" name="gln">
		<input type="hidden" name="kbn">
		<input type="hidden" name="empNo">
		<input type="hidden" name="mbPw">
	</form>
	
	<%
		List list = (List) request.getAttribute("list");
		String emp = (String) request.getAttribute("emp");
		String empNo = (String) request.getAttribute("empNo");
		String mbPw = (String) request.getAttribute("mbPw");
		
		if (list != null && list.size() > 0) {
	%>
	</br></br>
	<div style="width:300px; color:#444444; font-size:14px; margin:0 auto;">
		<img style="width:35px; height:35px" src="http://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory&fname=http%3A%2F%2Fcfile23.uf.tistory.com%2Fimage%2F23720A3358102B7C2F1BF7">
		<span style="font-weight:bold; font-size:29px; position:relative; bottom:1px;">&nbsp;대금지급 정보조회</span>
	</div>
	</br></br>
	<div style="width:1300px; color:#444444; font-size:14px; margin:0 auto;">
		<form name="updateForm" method="post">
			<input type="hidden" id="gln" name="gln">
		</form>
		</br>
		
		<div>
			<table style="border-collapse: collapse; border:1px solid #C0C0C0;">
				<col width="120">
				<col width="130">
				<col width="100">
				<col width="200">
				<col width="100">
				<col width="200">
				<col width="500">
				<col width="100">
				<thead>
					<tr style="height:35px; background-color:#C0C0C0; padding-left:10px; border:1px solid #C0C0C0;">
						<th scope="col">GLN</th>
						<th scope="col">입급예정금액</th>
						<th scope="col">승인건수</th>
						<th scope="col">계좌번호</th>
						<th scope="col">예금주명</th>
						<th scope="col">조합명</th>
						<th scope="col">주소</th>
						<th scope="col">등록여부</th>
					</tr>
				</thead>
				<tbody>
				<c:forEach var="item" items="${list}" varStatus="loop">
					<tr <c:choose><c:when test="${loop.count % 2 == 0}"> style="height:30px; background-color:#F9F9F9; padding-left:10px;"</c:when><c:otherwise>style="height:30px;"</c:otherwise></c:choose> >
						<td align="center"><a href="javascript:openPopup('${item.NA_BZPLC}','${item.KBN}','${item.EMP_NO}', '${item.MB_PW}');"><c:out value="${item.NA_BZPLC}" /></a></td>
						<td align="center"><fmt:formatNumber value="${item.PAY_AMT}" pattern="#,###" /></td>
						<td align="center"><fmt:formatNumber value="${item.APV_CNT}" pattern="#,###" /></td>
						<td align="center"><c:out value="${item.ACNO}" /></td>
						<td align="center"><c:out value="${item.DPRNM}" /></td>
						<td align="center"><c:out value="${item.UP_NA_BZPL_NM}" /></td>
						<td align="center"><c:out value="${item.ADR}" /></td>
						<td align="center"><c:out value="${item.UDP_YN}" /></td>
					</tr>
				</c:forEach>
				</tbody>
			</table>
		</div>
	</div>
	<%
		} else {
			if (StringUtils.isNotEmpty(emp) && !emp.equals(empNo)) {
				emp = emp.replaceAll("&", "&amp;");
				emp = emp.replaceAll("\"", "&quot;");
				emp = emp.replaceAll("'", "&apos;");
				emp = emp.replaceAll("<", "&lt;");
				emp = emp.replaceAll(">", "&gt;");
				emp = emp.replaceAll("\r", "<br>");
				emp = emp.replaceAll("\n", "<p>");
				
				out.println("<script>alert('이미 사번 [" + emp + "] 로 등록된 사업장입니다.');</script>");
			} else {
				out.println("<script>alert('GLN코드, 사업자번호, 사번, 비밀번호를 확인하시기 바랍니다.');</script>");
			}
	%>
			<script>
				document.location.href = "${scheme}" + "://" + "${serverName}" + ":" + "${serverPort}" + "${contextPath}" + "/etc/pay/etcPayLogin";
			</script>
	<%
		}
	%>
</body>
</html>
