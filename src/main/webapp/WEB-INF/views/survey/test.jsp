<%@page import="java.util.Date"%>
<%@page import="com.esum.appetizer.session.SessionBox"%>
<%@page import="com.esum.appetizer.session.SessionRepository"%>
<%@page import="com.esum.appetizer.session.UserKeyGenerator"%>
<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>
<%

	if(session.getAttribute("sessionBox") == null) {
		String userKey = UserKeyGenerator.genUserKey("hurukku");
		SessionBox box = new  SessionBox();
		box.setUserKey(userKey);
		box.setUserName("Hurukku");
		box.setLastLoginDt(new Date());
		session.setAttribute("sessionBox", box);				
	}

SessionRepository.printSessionStore();

%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Test JSP</title>
</head>
<body>
<h1>설문조사 JSP </h1>
</body>
</html>