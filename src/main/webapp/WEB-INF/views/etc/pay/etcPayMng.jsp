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
		function search() {
			var url = "${scheme}" + "://" + "${serverName}" + ":" + "${serverPort}" + "${contextPath}" + "/etc/pay/etcPayMng";
			
			document.frm.action = url;
			document.frm.submit();
		}
		
		function initUser(gln) {
			var url = "${scheme}" + "://" + "${serverName}" + ":" + "${serverPort}" + "${contextPath}" + "/etc/pay/initEtcPayUser";
			
			document.frm.gln.value = gln;
			
			document.frm.action = url;
			document.frm.submit();
		}
	</script>
</head>
<body>
	<form name="frm" method="post">
		GLN : <input type="text" name="gln">
		<input type="button" value="조회" onclick="javascript:search()">
	</form>
	
	<%
		List list = (List) request.getAttribute("list");
		
		if (list != null && list.size() > 0) {
	%>
	</br></br>
	<div style="width:300px; color:#444444; font-size:14px; margin:0 auto;">
		<img style="width:35px; height:35px" src="http://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory&fname=http%3A%2F%2Fcfile23.uf.tistory.com%2Fimage%2F23720A3358102B7C2F1BF7">
		<span style="font-weight:bold; font-size:29px; position:relative; bottom:1px;">&nbsp;대금지급 정보조회</span>
	</div>
	</br></br>
	<div style="width:400px; color:#444444; font-size:14px; margin:0 auto;">
		<div>
			<table style="border-collapse: collapse; border:1px solid #C0C0C0;">
				<col width="100">
				<col width="100">
				<col width="100">
				<col width="100">
				<col width="100">
				<thead>
					<tr style="height:35px; background-color:#C0C0C0; padding-left:10px; border:1px solid #C0C0C0;">
						<th scope="col">GLN</th>
						<th scope="col">사업자번호</th>
						<th scope="col">사번</th>
						<th scope="col">비밀번호</th>
						<th scope="col"></th>
					</tr>
				</thead>
				<tbody>
				<c:forEach var="item" items="${list}" varStatus="loop">
					<tr <c:choose><c:when test="${loop.count % 2 == 0}"> style="height:30px; background-color:#F9F9F9; padding-left:10px;"</c:when><c:otherwise>style="height:30px;"</c:otherwise></c:choose> >
						<td align="center"><c:out value="${item.NA_BZPLC}" /></td>
						<td align="center"><c:out value="${item.KBN}" /></td>
						<td align="center"><c:out value="${item.EMP_NO}" /></td>
						<td align="center"><c:out value="${item.MB_PW}" /></td>
						<td align="center"><a href="javascript:initUser('${item.NA_BZPLC}');"><c:out value="초기화" /></a></td>
					</tr>
				</c:forEach>
				</tbody>
			</table>
		</div>
	</div>
	<%
		}
	%>
</body>
</html>
