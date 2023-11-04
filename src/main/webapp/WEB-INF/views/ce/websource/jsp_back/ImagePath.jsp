<%
//*
String namoFileKind = request.getParameter("imageKind");

//filelink
String namoFilePhysicalPath = "C:\\NHVANDATA\\namo\\f";
String namoFileUPath = "/ce3/namofile";

//movie
String namoFlashPhysicalPath = "C:\\NHVANDATA\\namo\\m";
String namoFlashUPath = "/ce3/namomovie";

//image
String namoImagePhysicalPath = "C:\\NHVANDATA\\namo\\i";
String namoImageUPath = "/ce3/namoimage";

System.out.println("namoFileKind: "+ namoFileKind);

if(namoFileKind != null && "file".equals(namoFileKind)){
	imagePhysicalPath = namoFilePhysicalPath;
	imageUPath = namoFileUPath;
}else if(namoFileKind != null && "flash".equals(namoFileKind)){
	imagePhysicalPath = namoFlashPhysicalPath;
	imageUPath = namoFlashUPath;
}else{
	imagePhysicalPath = namoImagePhysicalPath;
	imageUPath = namoImageUPath;
}

//*/

//imagePhysicalPath = "C:\\cejava\\htdocs\\uploadfile";
//imageUPath = "/uploadfile";
%>