<%@page import="com.esum.appetizer.session.SessionRepository"%>
<%@page import="com.esum.appetizer.session.UserKeyGenerator"%>
<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>
<%
	session.invalidate();
	SessionRepository.printSessionStore();
%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>logout</title>
</head>
<body>
<h1>LogOut, Development WAS for NH Hanaro eSCM </h1>
</body>
</html>