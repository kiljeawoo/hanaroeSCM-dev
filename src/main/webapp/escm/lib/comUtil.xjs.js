//XJS=comUtil.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /*
         ===============================================================================
         == Util관련 공통함수들은 여기에 작성한다.
         ===============================================================================
         ● gfn_isHTML5           : 실행되는 환경을 체크(Runtime/HTML5)
         ● gfn_decode            : 그리드에서 expression으로 표현할때 decode 문처럼 사용할 수 있는 기능.
         ● gfn_iif               : 조건에 따른 Value 처리
         ● gfn_checkURL          : 입력값이 URL Type인지 체크하는 함수
         ● gfn_checkEmail        : 입력값이 e-mail Type인지 체크하는 함수
         ● gfn_checkPhone        : 입력값이 전화번호 format 인지 체크하는 함수
         ● gfn_isNum             : 문자열이 숫자형식에 맞는지 여부 체크
         ● gfn_isAlpha           : 문자열이 알파벳(a~z, A~Z)만으로 구성되어 있는지 체크
         ● gfn_isAlNum           : 문자열이 알파벳(a~z, A~Z), 숫자만으로 구성되어 있는지 체크
         ● gfn_isKor             : 문자열이 한글로만 구성되어 있는지 체크 
         ● gfn_getRandom         : 정수인 nStart ~ nEnd의 범위에 있는 숫자에 대하여 random값을 return한다.
         ● gfn_setDistinct       : Array에 있는 값들을 Distinct(중복제거)한다.
         ● gfn_checkDate8        : 입력값이 날짜 형태인지 체크하는 함수(8자리)
         ● gfn_checkDate10       : 입력값이 날짜 형태인지 체크하는 함수(10자리)
         ● gfn_getFileExt        : 파일 확장자를 가져온다.
         ● gfn_htmlToChars       : html형식의 문자열에서 태그문자를 특수문자로 변형
         ● gfn_specToChars       : 특수문자가 들어있는 문자열에서 html형식의 문자로 변형
         ● gfn_getDomainText     : 메세지 값을 문자열 치환하여 메세지 내용을 조회
         ● gfn_getObjFont        : Font Object 생성 반환
         ● gfn_isNull            : 입력값이 null에 해당하는 경우 모두를 한번에 체크한다.
         ★ gfn_nvl               : 입력값이 null인 경우에 지정한 값으로 반환.
         ● gfn_isEmpty           : 입력값이 Null이거나 빈값인지 체크한다.
         ● gfn_getNum            : 문자열이 숫자형식에 맞으면 숫자값을 반환
         ● gfn_nullToEmpty       : NULL 일 경우 빈 값을 리턴한다.
         ● gfn_toString          : 입력값을 String으로 변경한다.
         ● gfn_length            : 입력값 형태에 따라서 길이 또는 범위를 구하는 함수
         ● gfn_getByteLength     : 스트링의 자릿수를 Byte 단위로 환산하여 알려준다 영문, 숫자는 1Byte이고 한글은 3Byte이다.(자/모 중에 하나만 있는 글자도 3Byte이다.)
         ● gfn_lengthByte        : 문자 전체 길이를 계산(문자,숫자,특수문자 : 1 로 Count, 그외 한글/한자 : 2 로 count 되어 합산한다.
         ● gfn_isMaxLengh        : 스트링자릿수를 체크하여 제한한다.
         ● gfn_right             : 문자열의 오른쪽부분을 지정한 길이만큼 Return 한다.
         ● gfn_left              : 문자열의 왼쪽부분을 지정한 길이만큼 Return 한다.
         ● gfn_replace           : 입력된 문자열의 일부분을 다른 문자열로 치환하는 함수
         ● gfn_indexOf           : 전체 문자열 중 특정 문자열이 포함된 위치를 반납
         ● gfn_numFormat         : 입력된 실수를 문자열 표현법으로 표현하는 함수
         ● gfn_getFormat         : 문자 포맷 형식 변환 ( 해당 문자는 포맷에서 @ 사용)
         ● gfn_setComma          : 숫자에 ","를 집어넣기
         ● gfn_stripBlank        : 문자열 중 "=" 좌우의 빈공백을 제거하는 함수(Transaction 에서 사용)
         ● gfn_split             : 특정 문자열을 기준으로 전체 문자열을 나누어서 하나의 배열(Array)로 만들어 반납하는 함수
         ● gfn_split2            : 입력된 문자열을 strDelimiter1과 strDelimiter2로 2 번 Parsing 한 2차원 배열을 Return
         ● gfn_findArray         : 1차원 배열에서 입력된 문자열이 있는 index를 반환
         ● gfn_findArray2        : 2차원 배열에서 입력된 문자열이 있는 index를 반환
         ★ gfn_getCamel          : 대문자 "_"로 구분된 문자를 카멜타입으로 반환
         ★ gfn_isValidObject     : 객체가 있는지 없는지 여부 판단하여 반환
         ● gfn_lpad              : 왼쪽 채우기 함수
         ● gfn_rpad              : 오른쪽 채우기 함수
         ● gfn_setComboValue     : 콤보에 값 추가 (전체,빈값 등)
         ● gfn_getUserId         : 사용자아이디 가져오기
         ● gfn_getUserIp         : 사용자아이피 가져오기
         ● gfn_getUserName       : 사용자명 가져오기
         ● gfn_getUserLoginConst : 사용자 로그인상수 가져오기
         ● gfn_getUserSystemCode : 사용자 시스템코드 가져오기
         ● gfn_setUserSystemCode : 시스템코드콤보에 사용자 시스템코드 기본 세팅
         ● gfn_stringFormat      : 문자열에서 포맷된 부분를 파라메타로 치환한다.
         ● gfn_trim              : 입력된 문자열의 좌우측 공백을 제거한 문자열을 구함.
         ● gfn_bachScheSearch    : 기간관리 COMM710 테이블정보조회(현재날짜가 STDT, EDDT 날짜 사이에 있는 YMST를 리턴)
         ● gfn_cookieSet         : 쿠키 저장
         ● gfn_cookieGet         : 쿠키 불러오기
         ● gfn_cookieDel         : 쿠키 삭제
         ● gfn_callAdminSite     : ID와 PW로 새창로그인
         ● gfn_isNumBig          : 문자열이 숫자와 알파벳 대문자로만 구성되어있는지 확인.
         ● gfn_allNum            : 문자열이 자연수로만 구성되어있는지 확인.
         ● gfn_pwValidation     : 농협하나로마트 PW체크로직
         */

        /**
         * @class 실행되는 환경을 체크
         * @param None
         * @return Boolean
         */  
        this.gfn_isHTML5 = function ()
        {
        	return true;
        }

        /**
         * @class Grid에서 expression으로  표현할때 decode 문처럼 사용할 수 있는 기능.
         * @param decode(strVal, "test", true, false);
         * @return varRtnValue 로 decode 조건에 맞는 값 리턴.
         */  
        this.gfn_decode = function ()
        {
        	var varRtnValue = null;
        	var arrArgument = this.lookup("decode").arguments;
        	var varValue = arrArgument[0];
        	var bIsDefault = false;
        	var nCount = 0;
        	
        	if ((arrArgument.length % 2) == 0){
        		nCount = arrArgument.length - 1;
        		bIsDefault = true;
        	} else {
        		nCount = arrArgument.length;
        		bIsDefault = false;
        	}
        	
        	for (var i=1; i<nCount; i+=2){
        		if (varValue == arrArgument[i]){
        			varRtnValue = arrArgument[i + 1];
        			i = nCount;
        		}
        	}
        	
        	if (varRtnValue == null && bIsDefault){
        		varRtnValue = arrArgument[arrArgument.length - 1];
        	}
        	
        	return varRtnValue;
        }

        /**
         * @class 조건에 따른 Value 처리
         * @param iif(strVal=="test", true, false);
         * @return iif 조건에 맞는 값 리턴.
         */  
        this.gfn_iif = function ()
        {
        	var varRtnValue = null;
        	var arrArgument = this.lookup("iif").arguments;
        	
        	if (arrArgument[0]){
        		return arrArgument[1];
        	} else {
        		return arrArgument[2];
        	}
        }

        /**
         * @class 입력값이 URL Type인지 체크하는 함수
         * @param strValue(String)
         * @return true = 입력값이 URL형태일 경우
         */  
        this.gfn_checkURL = function (strValue)
        {
        	if (this.gfn_isNull(strValue)){
        		return false;
        	} else if (strValue.indexOf(".") == -1){
        		return false;
        	} else {
        		return true;
        	}
        }

        /**
         * @class 입력값이 e-mail Type인지 체크하는 함수
         * @param strValue(String)
         * @return true = 입력값이 email형태일 경우
         */  
        this.gfn_checkEmail = function (strValue)
        {
        	if (this.gfn_isNull(strValue)){
        		return false;
        	}

        	var nIndexOfAt = strValue.indexOf("@");
        	var nIndexOfDot = strValue.indexOf(".");
        	var nLength = strValue.length;
        	
        	// "@" 이 하나도 없거나 맨 끝에 위치한  경우
        	if (nIndexOfAt <= 0 || nIndexOfAt == nLength){
        		return false;
        	}
        	// "." 이 하나도 없거나 맨 끝에 위치한 경우
        	if (nIndexOfDot <= 0 || nIndexOfDot == nLength){
        		return false;
        	}
        	// "@"이 두개 이상 존재하는 경우
        	if (strValue.indexOf("@", nIndexOfAt + 1) != -1){
        		return false;
        	}
        	// ".@" 인 경우 또는 "@."인 경우
        	if (strValue.substr(nIndexOfAt - 1, 1) == "." || strValue.substr(nIndexOfAt + 1, 1) == "."){
        		return false;
        	}
        	// "@" 이후에 "."이 존재하지 않는 경우
        	if (strValue.indexOf(".", (nIndexOfAt + 2)) == -1){
        		return false;
        	}
        	// 공백문자가 존재하는 경우
        	if (strValue.indexOf(" ") != -1){
        		return false;
        	}
        	return true;
        }

        /**
         * @class 입력값이 전화번호 format인지 체크하는 함수
         * @param strValue(String)
         * @return true = 입력값이 전화번호 형태일 경우
         */  
        this.gfn_checkPhone = function (strValue)
        {
        	// null 이거나 "-"이 존재하지 않는 경우
        	if (this.gfn_isNull(strValue) || (!this.gfn_isNull(strValue) && strValue.indexOf("-") == -1)){
        		return false;
        	} else if (strValue.indexOf(".") >= 0){
        		return false;
        	} else {
        		// "-" 사이의 값이 숫자가 아닌 경우
        		var arrNumbers = strValue.split("-");
        		for (var i=0; i<arrNumbers.length; i++){
        			if (!nexacro.isNumeric(arrNumbers[i])){
        				return false;
        			}
        		}
        	}
        	return true;
        }

        /**
         * @class 문자열이 숫자형식에 맞는지 여부 체크
         * @param sNum: 체크할 문자열숫자 (예 : "-1234.56") (단, ","가 들어있으면 안 됨)
         * @return - 숫자형식에 맞는경우 = true
         *		   - 숫자형식에 맞지않는 경우 = false
         */  
        this.gfn_isNum = function (sNum)
        {
        	var c;
        	var point_cnt = 0;
        	var ret = true;

        	if (this.gfn_isNull(sNum)){
        		return false;
        	}

        	for (var i=0; i<sNum.length; i++){
        		c = sNum.charAt(i);
        		if (i == 0 && (c == "+" || c == "-")){
        		} else if (c >= "0" && c <= "9"){
        		} else if (c == "."){
        			point_cnt++;
        			if (point_cnt > 1){
        				ret = false;
        				break;
        			}
        		} else {
        			ret = false;
        			break;
        		}
        	}
        	return ret;
        }

        /**
         * @class 문자열이 알파벳(a~z, A~Z)만으로 구성되어 있는지 체크
         * @param sVal: 체크할 문자열 (예 : "aAzZ")
         * @return - 알파벳만 있는경우 = true
         *		   - 알파벳이 아닌 글자가 하나라도 있는 경우 = false
         */  
        this.gfn_isAlpha = function (sVal)
        {
        	if (this.gfn_isNull(sVal)){
        		return false;
        	}
        	
        	if (sVal.search("[^A-Za-z]") >= 0){
        		return false;
        	} else {
        		return true;
        	}
        }

        /**
         * @class 문자열이 알파벳(a~z, A~Z), 숫자만으로 구성되어 있는지 체크
         * @param sVal: 체크할 문자열 (예 : "aAzZ09")
         * @return - 알파벳, 숫자만 있는경우 = true
         *		   - 알파벳, 숫자가 아닌 글자가 하나라도 있는 경우 = false
         */  
        this.gfn_isAlNum = function (sVal)
        {
        	if (this.gfn_isNull(sVal)){
        		return false;
        	}
        	
        	if (sVal.search("[^A-Za-z0-9]") >= 0){
        		return false;
        	} else {
        		return true;
        	}
        }

        /**
         * @class 문자열이 대문자(a~z, A~Z), 숫자만으로 구성되어 있는지 체크
         * @param sVal: 체크할 문자열 (예 : "AZ09")
         * @return - 대문자, 숫자만 있는경우 = true
         *		   - 대문자, 숫자가 아닌 글자가 하나라도 있는 경우 = false
         */  
        this.gfn_isNumBig = function (sVal)
        {
        	if (this.gfn_isNull(sVal)){
        		return false;
        	}
        	
        	if (sVal.search("[^A-Z0-9]") >= 0){
        		return false;
        	} else {
        		return true;
        	}
        }
        /**
         * @class 숫자만으로 구성되어 있는지 체크
         * @param sVal: 체크할 문자열 (예 : "09")
         * @return - 대문자, 숫자만 있는경우 = true
         *		   - 대문자, 숫자가 아닌 글자가 하나라도 있는 경우 = false
         */  
        this.gfn_allNum= function (sVal)
        {
        	if (this.gfn_isNull(sVal)){
        		return false;
        	}
        	
        	if (sVal.search("[^0-9]") >= 0){
        		return false;
        	} else {
        		return true;
        	}
        }

        
        /**
         * @class 문자열이 한글로만 구성되어 있는지 체크
         * @param sVal: 체크할 문자열 (예 : "가나다")
         * @return - 한글만 있는경우 = true
         *		   - 한글이 아닌 글자가 하나라도 있는 경우 = false
         */  
        this.gfn_isKor = function (sVal)
        {
        	if (this.gfn_isNull(sVal)){
        		return false;
        	}
        	for (var i=0; i<sVal.length; i++){
        		if (!((sVal.charCodeAt(i) > 0x3130 && sVal.charCodeAt(i) < 0x318F) 
        		   || (sVal.charCodeAt(i) >= 0xAC00 && sVal.charCodeAt(i) <= 0xD7A3))){
        			return false;
        		}
        	}
        	return true;
        }

        /**
         * @class 정수인 nStart ~ nEnd의 범위에 있는 숫자에 대하여 random값을 return한다.
         * @param nStart: 시작숫자 (단, 정수, 만일 정수가 아니면 Math.floor(nStart)를 적용함)
         * @param nEnd  : 끝숫자 ( 단, 정수, 만일 정수가 아니면 Math.floor(nStart)를 적용함)
         * @return - 성공 = nStart ~ nEnd범위 중 random숫자 (단, nStart, nEnd도 포함됨)
         *		   - 실패 = -1
         * ★ 목적
         * 1. Math.random()이 0 ~ 1사이만 나와서 불편해서 만들었음
         * 2. Math.random()은 처음에 0.5근처만 나와서 만들었음
         * ★ 주의사항
         * nStart, nEnd는 정수임에 주의 
         */  
        this.gfn_getRandom = function (nStart,nEnd)
        {
        	var range_unit,rand,tmp;

        	if (this.gfn_isNull(nStart) 
        	 || this.gfn_isNull(nEnd)){
        		return -1;
        	}
        	
        	nStart = Math.floor(nStart);
        	nEnd = Math.floor(nEnd);
        	if (nStart > nEnd){
        		tmp = nStart;
        		nStart = nEnd;
        		nEnd = tmp;
        	}
        	range_unit = nEnd - nStart + 1;

        	var dt = new Date();
        	rand = (dt.getMilliseconds() + (Math.random() * 2000)) / 3000;

        	return Math.floor(rand * range_unit * 2) % range_unit + nStart;
        }

        /**
         * @class Array에 있는 값들을 Distinct(중복제거)한다.
         * @param aOrg: 중복을 제거할 원래 Array (예 : (1,1,2,2,3,4,5))
         * @return - 성공 = 중복이 제거된 Array ( 예 : (1,2,3,4,5) )
         *		   - 실패 = 빈 Array()
         */  
        this.gfn_setDistinct = function (aOrg)
        {
        	var i,j;
        	var flag;
        	var aDist = new Array();
        	var vDist;

        	if (this.gfn_isNull(aOrg)){
        		return aDist;
        	}

        	for (i=0; i<aOrg.length; i++){
        		vDist = aOrg[i];
        		flag = false;
        		for (j=0; j<aDist.length; j++){
        			if ("x" + aDist[j] == "x" + vDist){
        				flag = true;
        				break;
        			}
        		}
        		if (flag == false){
        			aDist.getSetter(aDist.length).set(vDist);
        		}
        	}
        	return aDist;
        }

        /**
         * @class 입력값이 날짜 형태인지 체크하는 함수(8자리)
         * @param strValue(String)
         * @return true = 입력값이 8자리 날짜(yyyyMMdd) 형태일 경우
         */  
        this.gfn_checkDate8 = function (strValue)
        {
        	if (this.gfn_length(strValue) != 8){
        		return false;
        	} else if (!this.gfn_DateCheck(strValue)){
        		return false;
        	}
        	return true;
        }

        /**
         * @class 입력값이 날짜 형태인지 체크하는 함수(10자리)
         * @param strValue(String)
         * @return true = 입력값이 10자리 날짜 형태일 경우/ 허용입력타입(yyyy-MM-dd, yyyy/MM/dd, yyyy.MM.dd)
         */  
        this.gfn_checkDate10 = function (strValue)
        {
        	return this.gfn_checkDate8(this.gfn_replace(this.gfn_replace(this.gfn_replace(strValue, "/", ""), "-", ""), ".", ""));
        }

        /**
         * @class 파일 확장자를 가져온다.
         * @param 파일명
         * @return String, 파일 확장자
         */  
        this.gfn_getFileExt = function (strFileName)
        {
        	strFileName = "" + strFileName;
        	var arrFileName = strFileName.split(".");
        	var strFileExt = arrFileName[arrFileName.length - 1];
        	
        	return strFileExt.trim();
        }

        /**
         * @class 파일 경로에서 파일명만 가져온다.
         * @param 파일명
         * @return String, 파일명
         */  
        this.gfn_getFileName = function (strFilePath)
        {
        	var strFileName = "";
        	strFilePath = this.gfn_toString(strFilePath);
        	for (var i=0; i<strFilePath.length; i++){
        		if (this.gfn_right(strFilePath, i + 1).indexOf("\\") > -1){
        			break;
        		}
        		if (this.gfn_right(strFilePath, i + 1).indexOf("\/") > -1){
        			break;
        		}
        		strFileName = this.gfn_right(strFilePath, i + 1);
        	}
        	return strFileName;
        }

        /**
         * @class html형식의 문자열에서 태그문자를 특수문자로 변형
         * @param html형식 문자열
         * @return String, 변형문자열
         */  
        this.gfn_htmlToChars = function (str)
        {
        	str = "" + str;
        	if (this.gfn_isNull(str)){
        		return "";
        	}
        	str = this.gfn_replace(str, "\&", '&amp;');
        	str = this.gfn_replace(str, "\'", '&apos;');
        	str = this.gfn_replace(str, "\"", '&quot;');
        	str = this.gfn_replace(str, "\'", '&#39;');
        	str = this.gfn_replace(str, "<", '&lt;');
        	str = this.gfn_replace(str, ">", '&gt;');
        	return str;
        }

        /**
         * @class 특수문자가 들어있는 문자열에서 html형식의 문자로 변형
         * @param 특수문자 형식 문자열
         * @return String, 파일 확장자
         */  
        this.gfn_specToChars = function (str)
        {
        	str = "" + str;
        	if (this.gfn_isNull(str)){
        		return "";
        	}
        	str = this.gfn_replace(str, "\&amp;", '&');
        	str = this.gfn_replace(str, "\&quot;", '"');
        	str = this.gfn_replace(str, "\&#39;", '\'');
        	str = this.gfn_replace(str, "\&lt;", '<');
        	str = this.gfn_replace(str, "\&gt;", '>');
        	return str;
        }

        /**
         * @class 메세지 값을 문자열 치환하여 메세지 내용을 조회한다.
         * @param TextID: 메세지ID
         * @param aArgs: 토큰문자배열
         * @return 처리 메시지
         */  
        this.gfn_getDomainText = function (TextID,aArgs)
        {
        	// alert("Util 256 " + TextID);
        	if (this.gfn_isNull(TextID)){
        		return "";
        	}
        	var sRtnMsg = application.gds_domainText.lookup(ct_domainIdCol,TextID,ct_domainTextCol+"_"+application.gv_locale);
            if (this.gfn_isNull(sRtnMsg)){
        		return TextID;
            }
        	if (this.gfn_isNull(aArgs)){
        		return sRtnMsg;
        	}

        	var sType = typeof (aArgs);
        	switch (sType){
        		case "object":
        			if (aArgs.length > 0){
        				for (var i=0; i<aArgs.length; i++){
        					var strVal  = aArgs[i];
        					sRtnMsg = sRtnMsg.replace(ct_txtPrefixFr + (i + 1) + ct_txtPrefixTo,  this.gfn_getDomainText(strVal));
        				}
        			} else {
        				for (var strName; ; ){
        					var strVal  = aArgs[strName];
        					sRtnMsg = sRtnMsg.replace(ct_txtPrefixFr + strName + ct_txtPrefixTo, this.gfn_getDomainText(strVal));
        				}
        			}
        			break;
        		default:
        			sRtnMsg = sRtnMsg.replace(ct_txtPrefixFr + "1" + ct_txtPrefixTo, this.gfn_getDomainText(aArgs));
        			break;
        	}
        	return sRtnMsg;
        }

        /**
         * @class Font Object 생성 반환
         * @param iFontSize: Font size
         * @param sFontName: Font Name
         * @param bBold: Font Bold여부
         * @return Font Object
         */  
        this.gfn_getObjFont = function (iFontSize,sFontName,bBold)
        {
        	var strFont = sFontName + "," + iFontSize;
        	if (bBold == true){
        		strFont += ",bold";
        	}
        	return strFont;
        }

        /**
         * @class 입력값이 null에 해당하는 경우 모두를 한번에 체크한다.
         * @param Val : 체크할 문자열(예 : null 또는 undefined 또는 "" 또는 "abc")
         * @return Boolean,	Val이 undefined, null, NaN, "", Array.length = 0인 경우 = true
         *					이외의 경우 = false
         */  
        this.gfn_isNull = function (val)
        {
        	if (new String(val).valueOf() == "undefined"){
        		return true;
        	}
        	if (val == null){
        		return true;
        	}
        	if (("x" + val == "xNaN") && (new String(val.length).valueOf() == "undefined")){
        		return true;
        	}
        	if (val.length == 0){
        		return true;
        	}
        	return false;
        }

        /**
         * @class 입력값이 null에 해당하는 경우 모두를 한번에 체크한다.
         * @param Val : 체크할 문자열(예 : null 또는 undefined 또는 "" 또는 "abc")
         * @return Boolean,	Val이 undefined, null, NaN, "", Array.length = 0인 경우 = true
         *					이외의 경우 = false
         */  
        this.gfn_nvl = function(val,val2)
        {
            var rtnVal = (this.gfn_isNull(val)) ? val2 : val;
            return rtnVal;
        }

        /**
         * @class 입력값이 Null이거나 빈값인지 체크한다.
         * @param sValue
         * @return null 또는 undefined 또는 "" 이면 "", 값이 있으면 값 리턴
         */  
        this.gfn_isEmpty = function (val)
        {
            var rtnVal = (this.gfn_isNull(val)) ? "" : val;
        	return rtnVal;
        }

        /**
         * @class 문자열이 숫자형식에 맞으면 숫자값을 반환
         * @param sNum 체크할 문자열
         * @return int
         */  
        this.gfn_getNum = function(sNum)
        {
        	if (this.gfn_isNum(sNum)){
        		return parseInt( sNum );
        	} else {
        		return 0;
        	}
        }

        this.gfn_isAlpha = function(sValue) 
        {
            if (this.gfn_isNull(sValue)) 
            {
                return false;
            }
            if (sValue.search("[^A-Za-z]") >= 0) 
            {
                return false;
            } else 
            {
                return true;
            }
        }

        this.gfn_checkDuplication_org =function(sVal)
        {
        	sVal = sVal.toString();
        	var nCnt = sVal.length;
        	
        	for(var i=0;i<nCnt;i++)
        	{
        		var sW1   = sVal.substr(i,1);		
        		var n1    = 0;
        		var nDCnt = 0;
        		var sType;
        		
        		//문자체크
        		if(this.gfn_isAlpha(sW1)){
        			sType = "A";
        		}else if(this.gfn_isNum(sW1)){
        			sType = "N";	
        		}else{
        			sType = "E";
        		}
        		
        		if(sType =="E") continue;
        				
        		var nMaxCnt = 0;
         		if(sType=="A"){
        			nMaxCnt = 2; //문자			
         		}else if(sType=="N"){
        			nMaxCnt = 1; //숫자등 그외 
         		}else{
         		}
         		
         		var sCompare = sVal.substr(i+1, nMaxCnt);
         		
         		if(sType == "A"){
        			n1 = sCompare.indexOf(sW1,i+1);
        		}else{
        			n1 = sCompare.indexOf(sW1);
        		}
         		
         		if(n1 != -1){
        			var nVCnt = nexacro.toNumber(nMaxCnt+1);
        			//alert("'"+sW1+"' 이(가) "+nVCnt+"개 이상 있습니다.");
        			alert("'"+sW1+"' 이(가) "+nVCnt+"개 이상 있습니다.");
        			return false;
         		}else{ 
        			return true;
         		}
        	}
        }

        
        this.gfn_checkDuplication =function(sVal)
        {
        	sVal = sVal.toString();
        	var nCnt = sVal.length;
        	
        	for(var i=0;i<nCnt;i++)
        	{
        		var sW1   = sVal.substr(i,1);		
        		var n1    = 0;
        		var nDCnt = 0;
        		
        		//문자체크
        		var bYn = this.gfn_isAlpha(sW1);//gfn_isNum
        		
        		var nMaxCnt = 0;
         		if(bYn){
        			nMaxCnt= 3; //문자			
         		}else{
        			if(this.gfn_isNum(sW1))//숫자체크
        			{
        				nMaxCnt= 2; //숫자등 그외 
        			}
         		}
         		
         		if(nMaxCnt == 0) continue;
         		
        		for(var j=0;j<nMaxCnt;j++){
        			if(j==0){
        				n1 = sVal.indexOf(sW1);				
        			}else{
        				n1 = sVal.indexOf(sW1,n1+1);
        			}
        			
        			if(n1==-1) break;
        		
        			if(j==nMaxCnt-1) {
        				if(bYn){
        					alert("같은 영문 대/소문자를 3자이상 사용하실 수 없습니다.");	
        				}else{
        					alert("같은 숫자를 2자이상 사용하실 수 없습니다.");	
        				}
        				//alert("'"+sW1+"' 이(가) "+nMaxCnt+"개 이상 있습니다.");
        				//alert("동일문자 "+nMaxCnt+"개 있음");
        				return false;
        			}			
        		}	
        	}
        	return true;
        }

        /**
         * @class NULL 일 경우 빈 값을 리턴한다.
         * @param sValue 체크할 문자열(String)
         * @param sEmptyVal 공백문자(default "")
         * @return 입력값이 null = "", Not Null = 원래의 값
         */  
        this.gfn_nullToEmpty = function(sValue,sEmptyVal)
        {
        	if (this.gfn_isNull(sEmptyVal)){
        		sEmptyVal = "";
        	}
            if (this.gfn_isNull(sValue)){
                return sEmptyVal;
            }
            return sValue;
        }

        /**
         * @class 입력값을 String으로 변경한다.
         * @param Val
         * @return String
         */  
        this.gfn_toString = function (val)
        {
        	if (this.gfn_isNull(val)){
        		return new String();
        	}
        	return new String(val);
        }

        /**
         * @class 입력값 형태에 따라서 길이 또는 범위를 구하는 함수
         * @param Val(객체,문자열,배열)
         * @return Type에 따라 구해진 길이 또는 범위
         */  
        this.gfn_length = function (val)
        {
        	return this.gfn_toString(val).length;
        }

        /**
         * @class 스트링의 자릿수를 Byte 단위로 환산하여 알려준다 영문, 숫자는 1Byte이고 한글은 3Byte이다.(자/모 중에 하나만 있는 글자도 3Byte이다.)
         * @param sValue(스트링)
         * @return 문자열의 byte 길이
         */  
        this.gfn_getByteLength = function(sValue) 
        {
        	var byteLength = 0;
        	if (this.gfn_isNull(sValue)){
        		return 0;
        	}
        	var c;
        	for (var i=0; i<sValue.length; i++){
        		c = escape(sValue.charAt(i));
        		if (c.length == 1){ // when English then 1byte
        			byteLength++;
        		} else if (c.indexOf("%u") != -1){ // when Korean then 3byte
        			byteLength += 2; 				// utf-8 : 3
        		} else if (c.indexOf("%") != -1){ 	// else 3byte
        			byteLength += c.length/3;
        		}
        	}
        	return byteLength;
        }

        /**
         * @class 스트링의 자릿수를 Byte 단위로 환산하여 알려준다 영문, 숫자는 1Byte이고 한글은 3Byte이다.(자/모 중에 하나만 있는 글자도 3Byte이다.)
         * @param sValue(스트링)
         * @return 문자열의 byte 길이
         */  
        this.gfn_getByteLength3 = function(sValue)
        {
            var byteLength = 0;
            var charCode = "";
        	
            for (var i=0; i<sValue.length; i++){
                charCode = sValue.charCodeAt(i);
                if (charCode <= "0x00007F") {
                    byteLength += 1;
                } else if (charCode <= "0x0007FF") {
                    byteLength += 2;
                } else if (charCode <= "0x00FFFF") {
                    byteLength += 3;
                } else {
                    byteLength += 4;
                }
            }
        	return byteLength;
        }

        /**
         * @class 문자 전체 길이를 계산(문자,숫자,특수문자 : 1 로 Count, 그외 한글/한자 : 2 로 count 되어 합산한다.
         * @param sValue(스트링) - 입력받은 문자열 (예 : "a1\n한韓")
         * @return 성공 = 문자열의 byte 길이(예 : 7), 실패 = -1
         */  
        this.gfn_lengthByte = function (sValue)
        {
        	var byteLength = 0;

        	if (this.gfn_isNull(sValue)){
        		return -1;
        	}

        	for (var i=0; i<sValue.length; i++){
        		if (sValue.charCodeAt(i) > 127){
        			byteLength += 2;
        		} else {
        			byteLength += 1;
        		}
        	}
        	
        	return byteLength;
        }

        /**
         * @class 스트링자릿수를 체크하여 제한한다.
         * @param val(스트링)
         * @param nLimit - 제한글자수
         * @return 문자열의 byte 길이
         */  
        this.gfn_isMaxLengh = function(val,nLimit)
        {
            var nLength = this.gfn_getByteLength(val);
            var bRtn = (nLength > nLimit) ? false:true;

            return bRtn;
        }

        /**
         * @class 문자열의 오른쪽부분을 지정한 길이만큼 Return 한다.
         * @param val(오른부분을 얻어올 원본 문자열)
         * @param nSize - 얻어올 크기. [Default Value = 0]
         * @return String 오른쪽 부분이 얻어진 문자열.
         */  
        this.gfn_right = function (val,nSize)
        {
        	var nStart = this.gfn_toString(val).length;
        	var nEnd = Number(nStart) - Number(nSize);
        	var rtnVal = val.substring(nStart, nEnd);
        	
        	return rtnVal;
        }

        /**
         * @class 문자열의 왼쪽부분을 지정한 길이만큼 Return 한다.
         * @param val(왼쪽부분을 얻어올 원본 문자열)
         * @param nSize - 얻어올 크기. [Default Value = 0]
         * @return String 왼쪽 부분이 얻어진 문자열.
         */  
        this.gfn_left = function (val,nSize)
        {
        	return this.gfn_toString(val).substr(0, nSize);
        }

        /**
         * @class 입력된 문자열의 일부분을 다른 문자열로 치환하는 함수
         * @param strString 원본 문자열.
         * @param strOld    원본 문자열에서 찾을 문자열.
         * @param strNew    새로 바꿀 문자열.
         * @return String 대체된 문자열
         */  
        this.gfn_replace = function (val,strOld,strNew)
        {
        	val = this.gfn_toString(val);
        	val = val.split(this.all["/" + strOld + "/g"]).join(strNew);
        	val = val.split(strOld).join(strNew);
        	return val;
        }

        /**
         * @class 전체 문자열 중 특정 문자열이 포함된 위치를 반납
         *		  ex) gfn_IndexOf("abc", "b")
         * @param Val 원본 문자열.
         * @param strOld 검사할 문자열
         * @param index  시작순서
         * @return 문자열이 포함된 위치의 index값
         */  
        this.gfn_indexOf = function (val,strOld,index)
        {
        	if (this.gfn_isNull(index)){
        		index = 0;
        	}
        	return this.gfn_toString(val).indexOf(strOld, index);
        }

        /**
         * @class 입력된 실수를 문자열 표현법으로 표현하는 함수
         * @param dNumber 문자열로 출력할 실수
         * @param nDetail 출력시 소숫점 이하의 자릿수(Default : 0)
         * @return 문자열로 바뀐 실수(출력되는 실수는 정수부분에 3자리마다 ',' 가 삽입)
         *		   gfn_numFormat(12345.66)
         */  
        this.gfn_numFormat = function (dNumber,nDetail)
        {
        	var strVal = "" + dNumber;
        	var rtnStr;
        	var arrStr;
        	
        	if (this.gfn_isNull(nDetail) == false){
        		strVal = nexacro.round(nexacro.toNumber(dNumber),nDetail);
        	}
        	return this.gfn_setComma(strVal);
        }

        /**
         * @class 문자 포맷 형식 변환(해당 문자는 포맷에서 @ 사용)
         * @param Val: 문자열
         * @param strMask: 문자열 포맷, (@:문자, 포맷스트링("-", ",", ".")등
         * @return 포맷된 문자
         */  
        this.gfn_getFormat = function (val,strMask)
        {
        	var strRetVal = "";
        	var sUnit;

        	if (this.gfn_isNull(val)){
        		return "";
        	}

        	val = this.gfn_toString(val);
        	for (var i=0; i<strMask.length; i++){
        		sUnit = strMask.substr(i, 1);
        		if (sUnit == "@"){
        			strRetVal += val.substr(0, 1);
        			val = val.substr(1);
        		} else {
        			strRetVal += sUnit;
        		}
        	}
        	return strRetVal;
        }

        /**
         * @class 숫자에 ","를 집어넣기
         * @param sNum: 문자열
         * @return 포맷된 문자
         */  
        this.gfn_setComma = function (sNum)
        {
        	sNum = this.gfn_replace(sNum, ",", "");
        	var ppos,sDigit,nEnd,nStart = 0,sRet = "";
        	if (sNum.charAt(0) == "+" || sNum.charAt(0) == "-"){
        		sRet += sNum.charAt(0);
        		nStart = 1;
        	}

        	ppos = sNum.indexOf(".", nStart);
        	if (ppos < 0){
        		nEnd = sNum.length;
        	} else {
        		nEnd = ppos;
        	}

        	sDigit = sNum.substr(nStart, nEnd - nStart);
        	for (this.getSetter("pos").set(0); this.lookup("pos") < sDigit.length; this.lookupSetter("pos", "set_pos").postInc()){
        		if (this.lookup("pos") != 0 && (sDigit.length - this.lookup("pos")) % 3 == 0){
        			sRet += ",";
        		}
        		sRet += sDigit.charAt(this.lookup("pos"));
        	}
        	sRet += sNum.substr(nEnd);

        	return sRet;
        }

        /**
         * @class 문자열 중 "=" 좌우의 빈공백을 제거하는 함수(Transaction 에서 사용)
         * @param strArg: 문자열
         * @return String "=" 좌우의 빈공백 제거된 문자열
         * ★ gfn_stripBlank("a = \" b = d \" c='1'  d = \"b = d\" e =  " + wrapQuote("qqqqqq\"eeeee=eeee\"ffffffff"))
         *    a=" b = d " c='1'  d="b = d" e="qqqqqq\"eeeee=eeee\"ffffffff"
         */  
        this.gfn_stripBlank = function (strArg) 
        {
            var nChrPos;
            var strLeft;
            var strRight = strArg;
            var strChr;
            var retVal = "";

            while (true){
                nChrPos = strRight.indexOf("=");
                if (nChrPos == -1){ 
                    retVal += strRight;
                    break;
                }
                strLeft  = strRight.substr(0, nChrPos).trimRight();
                strRight = strRight.substr(nChrPos + 1).trimLeft();
                strChr   = strRight.charAt(0);
                retVal += strLeft + "=";
                if (strChr != "\"" && strChr != "'"){
                    strChr = " ";
                }
                nChrPos = strRight.indexOf(strChr, 1);
                if (nChrPos > -1){
                    retVal  += strRight.slice(0, nChrPos + 1);
                    strRight = strRight.substr(nChrPos + 1);
                } else {
                    retVal  += strRight;
                    strRight = "";
                }
            }
            return retVal;
        }

        /**
         * @class 특정 문자열을 기준으로 전체 문자열을 나누어서 하나의 배열(Array)로 만들어 반납하는 함수
         * @param Val: Parsing 할 원본 문자열
         * @param strString: 원본 문자열
         * @param strChar: 나눌 기준이 되는 문자
         * @return Array
         */  
        this.gfn_split = function()
        {
        	var rtnArr = new Array();
        	var arrArgument = this.gfn_split.arguments;

        	if (arrArgument.length < 1) {
        	} else if (arrArgument.length < 2) {
        		if (!this.gfn_isNull(arrArgument[0])) {
        			rtnArr[0] = arrArgument[0];
        		}
        	} else if (arrArgument.length == 2) {
        		if (!this.gfn_isNull(arrArgument[0])) {
        			rtnArr = arrArgument[0].toString().split(arrArgument[1]);
        		}
        	}
        	
        	return rtnArr;
        }

        /**
         * @class 입력된 문자열을 strDelimiter1과 strDelimiter2로 2 번 Parsing 한 2차원 배열을 Return
         * @param Val: Parsing 할 원본 문자열
         * @param strDelimiter1: 첫번째로 잘라낼 구분 문자열
         * @param strDelimiter2: 두번째로 잘라낼 구분 문자열
         * @return Array(2번 Parsing된 2차원배열)
         */  
        this.gfn_split2 = function (val,strDelimiter1,strDelimiter2)
        {
        	var split2Arr = new Array();
        	val = this.gfn_toString(val);
        	
        	var splitArr = val.split(strDelimiter1);
        	for (var i=0; i<splitArr.length; i++){
        		split2Arr.getSetter(i).set(splitArr[i].split(strDelimiter2));
        	}
        	return split2Arr;
        }

        /**
         * @class 1차원 배열에서 입력된 문자열이 있는 index를 반환
         * @param ArrObj: 1차원 배열
         * @param strKey: 검색할 문자열
         * @return 찾은 배열 index
         */  
        this.gfn_findArray = function (ArrObj,strKey)
        {
        	for (var i=0; i=ArrObj.length; i++){
        		if (strKey == ArrObj[i]){
        			return i;
        		}
        	}
        	return -1;
        }

        /**
         * @class 2차원 배열에서 입력된 문자열이 있는 index를 반환
         * @param Arr2Obj: 2차원 배열
         * @param strKey: 검색할 문자열
         * @param index: 검색할 차원
         * @return 찾은 배열 index
         */  
        this.gfn_findArray2 = function (Arr2Obj,strKey,index)
        {
        	for (var i=0; i<Arr2Obj.length; i++){
        		if (strKey == Arr2Obj[i][index]){
        			return i;
        		}
        	}
        	return -1;
        }

        /**
         * @class 대문자 "_"로 구분된 문자를 카멜타입으로 반환
         * @param sVal(문자열) ex) ITEM_CD
         * @return 카멜타입으로 변경된 문자열
         */  
        this.gfn_getCamel = function(sVal)
        {
            var sRtnVal;
            if (this.gfn_isNull(sVal)) return sVal;
            if (typeof(sVal) != "string") return sVal;
            sVal =  sVal.toLowerCase();
            sVal = sVal.replace("_","-");
            sRtnVal = Eco.string.camelize(sVal);
            return sRtnVal;  
        }

        /**
         * @class 객체가 있는지 없는지 여부 판단하여 반환
         * @param sObjNm:
         * @param oThis:
         * @return 
         */  
        this.gfn_isValidObject = function(sObjNm,oThis)
        {
            var oItem = Eco.XComp.query(oThis, "prop[name] == '"+sElement+"'", 0)[0];
            
            return this.gfn_isNull(oItem);
        }
         
        /**
         * @class 왼쪽 채우기 함수
         * @param sValue 	- 대상문자열
         * @param nLength 	- 자리수
         * @param Char 		- 채울 문자
         * @return String
         * @memberOf commString
         */
        this.gfn_lpad = function (sValue,nLength,sChar)
        {
            if (new String(sValue).valueOf() == "undefined") sValue = "";
            if (this.gfn_isNull(sValue)) sValue = "";

            var strRetVal = new String(sValue);
            var strChar = "";
            var nIteration = nLength - this.gfn_getByteLength(strRetVal);
            for (var i=0; i<nIteration; i++){
                strChar = sChar + strChar;
            }
            return (strChar + strRetVal);
        }

        /**
         * @class 오른쪽 채우기 함수
         * @param sValue 	- 대상문자열
         * @param nLength 	- 자리수
         * @param Char 		- 채울 문자
         * @return String
         * @memberOf commString
         */
        this.gfn_rpad = function(sValue,nLength,Char) 
        {
            if (new String(sValue).valueOf() == "undefined") sValue = "";
            if (this.gfn_isNull(sValue)) sValue = "";
        	
            var strRetVal  = new String(sValue);
            var nIteration = nLength - this.gfn_getByteLength(strRetVal);
        	
            for (var i=0; i<nIteration; i++){
                strRetVal = strRetVal + Char;
            }
            return strRetVal;
        }

        /**
         * @class 콤보에 값 추가 (전체,빈값 등)
         * @param obj 	-  콤보
         * @param sAddType 	- 추가할 값
         * @param idx 		- 인덱스 변경
         * @return N/A
         */
        this.gfn_setComboValue = function(obj,sAddType,idx)
        {
        	var ds = obj.getInnerDataset();
        // 	if (typeof(ds) == "string")
        // 		ds = eval(ds);
        	
        	if (Eco.isEmpty(ds)){
        		return;
        	}
        	if (!Eco.isUndefined(sAddType)){	
        		ds.insertRow(0);
        		ds.setColumn(0, obj.codecolumn, "");
        		ds.setColumn(0, obj.datacolumn, sAddType);
        	}
        	if (!Eco.isUndefined(idx)){
        		obj.set_index(idx);
        	}
        }

        /**
         * @class 사용자아이디 가져오기
         * @param N/A
         * @return string 사용자아이디
         */
        this.gfn_getUserId = function()
        {
        	return application.gds_user.getColumn(0, "USER_ID");
        }

        /**
         * @class 사용자아이피 가져오기
         * @param N/A
         * @return string 사용자아이피
         */
        this.gfn_getUserIp = function()
        {
        	return application.gds_user.getColumn(0, "IP");
        }

        /**
         * @class 사용자명 가져오기
         * @param N/A
         * @return string 사용자명
         */
        this.gfn_getUserName = function()
        {
        	return application.gds_user.getColumn(0, "NAME");
        }

        /**
         * @class 사용자 로그인상수 가져오기
         * @param N/A
         * @return string 사용자 로그인상수
         */
        this.gfn_getUserLoginConst = function()
        {
        	return application.gds_user.getColumn(0, "LOGIN_CONST");
        }

        /**
         * @class 사용자 시스템코드 가져오기
         * @param N/A
         * @return string 사용자 시스템코드
         */
        this.gfn_getUserSystemCode = function()
        {
        	//return application.gds_user.getColumn(0, "SYSTEM_CODE");
        	return application.gv_system;
        }

        /**
         * @class 시스템코드콤보에 사용자 시스템코드 기본 세팅
         * @param N/A
         * @return string 사용자 시스템코드
         */
        this.gfn_setUserSystemCode = function(obj)
        {
        	//obj.set_value(this.gfn_getUserSystemCode());
        	obj.set_value(application.gv_system);
        }

        /**
         * @class 문자열에서 포맷된 부분를 파라메타로 치환한다.
         * @param strFormat
         * @param arrFormat
         * @return {String} 변환된 문자열
         * @since  2014.08.11
         * @example
         */
        this.gfn_stringFormat = function(strFormat,arrFormat)
        {
        	if (!Eco.isEmpty(arrFormat)){
        		for(var i = 0; i < arrFormat.length; i++){
        			strFormat = strFormat.replace("\{" + i + "\}", this.gfn_nullToEmpty(arrFormat[i]));
        		}
        	}
        	
        	// 치환되지 않은 포맷이 있으면 빈 값으로 치환한다.
        	strFormat = strFormat.replace(/\{[0-9]*\}/g, "");
        	return strFormat;
        }

        /**
         * @class 입력된 문자열의 좌우측 공백을 제거한 문자열을 구함.
         * @param arg(좌우측 공백문자를 제거하려는 문자열)
         * @return {String} 입력된 문자열에서 좌우측 공백이 제거된 문자열
         * @example
         */
        this.gfn_trim = function(sValue)
        {
            if (sValue == null) return "";
            if (new String(sValue).valueOf() == "undefined") return "";
            if (new String(sValue) == null) return "";
        	
            var retVal = (new String(sValue)).replace(/^\s+|\s+$/g, '');

            return retVal;
        }

        /**
         * @class 기간관리 COMM710 테이블정보조회(현재날짜가 STDT, EDDT 날짜 사이에 있는 YMST를 리턴)
         * @param strSqlMapId - SQLMAP ID
         * @param strBachScheDivCd - 학사일정구분코드
         * @param strBachScheCd - 학사일정코드
         * @return {String} YMST
         */
        this.gfn_bachScheSearch = function(strSqlMapId,strBachScheDivCd,strBachScheCd)
        {
        	var dsInputName = "dsInput";
        	var dsOutputName = "dsOutput";
        	
        	var dsInput = this.getDataSet(dsInputName);
        	var dsOutput = this.getDataSet(dsOutputName);
        	
        	dsInput.addColumn("BACH_SCHE_DIV_CD","STRING",8);
        	dsInput.addColumn("BACH_SCHE_CD","STRING",8);
        	
        	dsInput.deleteAll();
        	var nRow = dsInput.addRow();
        	dsInput.setColumn(nRow,"BACH_SCHE_DIV_CD",strBachScheDivCd);
        	dsInput.setColumn(nRow,"BACH_SCHE_CD",strBachScheCd);
        	
        	this.fsp_clear();
        	this.fsp_addSearch("common:"+strSqlMapId, false);
        	// 서버호출
        	this.fsp_callService(
        		""
        		,""
        		,"dsInput=dsInput"	// inDs
        		,"dsOutput=dsOutput"// outDs
        		,""	// args
        		,""
        		,true
        		,true
        		,true
        		,strSqlMapId
        	);
        	
        	//서버시간에서 일자를 가져온다.
        	//var strToday = application.gv_serverTime.substr(0,8);
        	var strToday = this.gfn_getServerTime().substr(0,8);
        	
        	nRow = dsOutput.findRowExpr("STDT <= '"+strToday+"' && EDDT >= '"+strToday+"'");
        	if (nRow != -1){
        		var strYMST = dsOutput.getColumn(nRow,"YMST");
        		//this.alert(strYMST);
        		return strYMST;
        	}
        }

        /**
         * @class 첨부파일삭제
         * @param strApndFileId - 첨부파일ID
         * @param strApndFilePath - 첨부파일경로
         * @param strSvrApndFileNm - 첨부파일명
         * @return N/A
         */
        this.gfn_fileDelete = function(strApndFileId,strApndFilePath,strSvrApndFileNm)
        {
        	strApndFilePath = String(strApndFilePath).substr(strApndFilePath.lastIndexOf("/")+1);

        	var sUrl = application.gv_serverUrl+"FileUploader?mode=delete&subDir="+strApndFilePath;
        		sUrl += "&fileName="+encodeURI(strSvrApndFileNm);
        	//this.transaction("",sUrl,"","","","fn_callback",false);
        	
        	if (this.WebBrowser00 == undefined){
        		var WebBrowser00 = new WebBrowser();
        		WebBrowser00.init("WebBrowser00","absolute",0,0,0,0,null,null);
        		this.addChild("WebBrowser00", WebBrowser00);
        		
        		//this.WebBrowser00.addEventHandler("onloadcompleted",this.WebBrowser00_onloadcompleted,this);
        		this.WebBrowser00.show();
        		
        		this.WebBrowser00.set_visible(false);
        		this.WebBrowser00.set_url("");
        		this.WebBrowser00.set_url(sUrl);
        	} else {
        		this.WebBrowser00.set_visible(false);
        		this.WebBrowser00.set_url(sUrl);
        	}
        	
        	//첨부파일 테이블 데이터삭제
        	var dsInputName = "ds_cond";
        	var dsInput = this.getDataSet(dsInputName);
        	
        	dsInput.addColumn("APND_FILE_ID","STRING",10);
        	
        	dsInput.deleteAll();
        	var nRow = dsInput.addRow();
        	dsInput.setColumn(nRow,"APND_FILE_ID",strApndFileId);
        	
        	this.fsp_clear();
        	this.fsp_addSingle("common:COM_FILEUPLOAD_D01", "", 0, "");
        	// 서버 호출
        	this.fsp_callService(
        		""
        		,""
        		,"ds_cond=ds_cond"	// inDs
        		,""	// outDs
        		,""	// args 
        		,"gfn_callback"
        		,true
        		,true
        		,true
        		,"delete"
        	);
        	//this.gfn_msg("0013");
        	return this.gfn_callback("delete");
        }

        this.gfn_callback = function(strServiceId,strErrorCode,strErrorMsg)
        {
        	if (strErrorCode < 0){
        		return false;
        	}
        	return true;
        }

        /**
         * @class 쿠키 저장
         * @param name - 쿠키 이름
         * @param val - 쿠키값
         * @return N/A
         * @since  2014.08.11
         * @example
         */
        this.gfn_cookieSet = function(name,val)
        {
        	this.gfn_cookieInit();
        	if (this.gfn_cookieReady){
        		this.gfn_cookieSet_(name, val);
        	} else {
        		this.gfn_cookieSets[name] = val;
        	}
        }

        /**
         * @class 쿠키 불러오기
         * @param name - 쿠키 이름
         * @return N/A
         * @since  
         * @example
         */
        this.gfn_cookieGet = function(name)
        {
        	this.gfn_cookieInit();
        	if (this.gfn_cookieReady){
        		this.gfn_cookieGet_(name);
        	} else {
        		this.gfn_cookieGets.push(name);
        	}
        }

        /**
         * @class 쿠키 삭제
         * @param name - 쿠키 이름
         * @return N/A
         * @since  
         * @example
         */
        this.gfn_cookieDel = function(name)
        {
        	this.gfn_cookieInit();
        	if (this.gfn_cookieReady){
        		this.gfn_cookieDel_(name);
        	} else {
        		this.gfn_cookieDels.push(name);
        	}
        }

        this.gfn_cookieReady = false;
        this.gfn_cookieSets = {};
        this.gfn_cookieGets = [];
        this.gfn_cookieDels = [];

        this.gfn_cookieInit = function()
        {
        	if (this.web_cookie == undefined){
        		var web_cookie = new WebBrowser();
        		web_cookie.init("web_cookie", "absolute", 0, 0, 0, 0, null, null);
        		this.addChild("web_cookie", web_cookie);
        		
        		this.web_cookie.addEventHandler("onloadcompleted", this.web_cookie_onloadcompleted, this);
        		this.web_cookie.show();
        		//this.web_cookie.set_visible(false);
        		
        		this.web_cookie.set_url("");
        		//this.web_cookie.set_url(application.gv_serverUrl);
        		this.web_cookie.set_url(application.gv_serverUrl+"STECH/html/saveCookie.html");
        		//this.web_cookie.set_visible(false);
        	}
        }

        this.web_cookie_onloadcompleted = function(obj,e)
        {
        	for (var s in this.gfn_cookieSets){
        		this.gfn_cookieSet_(s, this.gfn_cookieSets[s]);
        	}
        	
        	for (var i=0; i<this.gfn_cookieGets.length; i++){
        		this.gfn_cookieGet_(this.gfn_cookieGets[i]);
        	}
        	
        	for (var i=0; i<this.gfn_cookieDels.length; i++){
        		this.gfn_cookieDel_(this.gfn_cookieDels[i]);
        	}
        	this.gfn_cookieReady = true;
        	this.web_cookie.set_visible(false);
        }

        this.gfn_cookieGet_ = function(name)
        {
        	var cookie = this.web_cookie.getProperty("document").getProperty("cookie");
        	if (cookie.length != 0){
        		var arrCookie = cookie.split("; ");
        		for (var i=0; i<arrCookie.length; i++){
        			var arrCookieItem = arrCookie[i].split("=");
        			if (arrCookieItem[0] == name){
        				this.cookie(name, arrCookieItem[1] == null ? "" : arrCookieItem[1]);
        				return;
        			}
        		}
        	}
        	this.cookie(name, "");
        }

        this.gfn_cookieSet_ = function(name,val)
        {
        	this.gfn_cookieSet__(name, val, 20);
        }

        this.gfn_cookieDel_ = function(name,val)
        {
        	this.gfn_cookieSet__(name, "", -1);
        }

        this.gfn_cookieSet__ = function(name,val,term)
        {
        	var date = new Date();
        	date.setDate(date.getDate()+term);
        	this.web_cookie.getProperty("document").setProperty("cookie", name+"="+escape(val)+"; path=/; expires=" + date.toGMTString()+";");
        }

        /*********************************************************************************************
         * Function   : gfn_IsVacant
         * Parameter  : strValue  체크할 문자열 (예 : null 또는 undefined 또는 문자열 또는 숫자)
         * Return     : boolean
         *
         * 입력값이 null 또는 비어있는지 체크한다.
        *********************************************************************************************/
        this.gfn_IsVacant = function(strValue){
            if (strValue == null){
                return true;
            } else if (strValue.length == 0){
                return true;
            }
            return false;
        }

        //LABEL 개행처리
        this.gfn_AddNewLine = function(arrVal)
        {
        	var sValue="";
        	
        	for(var i=0 ; arrVal.length > i ; i++){ 
        		if(i != arrVal.length-1){ 
        			sValue += arrVal[i] + String.fromCharCode(13) + String.fromCharCode(10);
        		}else{ 
        			sValue += arrVal[i];
        		}
        	}
        			
        	return sValue;
        }

        /*********************************************************************************************
         * Function   : gfn_IsUpdate()
         * Parameter  : poDataset  체크할Dataset
         * Return     : boolean(변경여부)
         *
         * Dataset의 변경 유무를 리턴한다.
        *********************************************************************************************/
        this.gfn_IsUpdate = function(poDataset) 
        {
            // 삭제 여부
            if (poDataset.getDeletedRowCount() > 0) 
            {
                return true;
            }
            
            // 입력/수정 여부
            for (var i=0; i<poDataset.rowcount; i++) 
            {
                if (poDataset.getRowType(i) == 2  //insert 
                 || poDataset.getRowType(i) == 4  //modify
                 || poDataset.getRowType(i) == 8) //delete
                {
                    return true;
                }
            }
            return false;
        }

        /*********************************************************************************************
         * Function   : gfn_callAdminSite()
         * Parameter  : pId  로그인 ID
         * Return     : pPw  로그인 PW
         *
         * 넘겨받은 ID와 PW 새창 로그인 한다.
        *********************************************************************************************/
        this.gfn_callAdminSite = function(pId,pPW)
        {
        	var adlUrl = application.xadl;	

        	if(adlUrl.indexOf('localhost') > 0 || adlUrl.indexOf('121.0.0.1') > 0)
        	{//로컬
        		system.execBrowser("http://localhost:8080/nhvan/escm/index.html");
        	}
        	else if(adlUrl.indexOf('121.156.58.242') != -1)
        	{ 
        		system.execBrowser("http://121.156.58.242/escm/index.html");
        	}
        	else if(adlUrl.indexOf("https://www.nhescm.co.kr") != -1)
        	{ 
        		system.execBrowser("https://www.nhescm.co.kr/escm/index.html");
        	}
        	system.exit();
        }

        
        /*********************************************************************************************
         * Function   : gfn_pwValidation(sPw)
         * Parameter  :	검증할 패스워드(string)
         * Return     : true/false
         *
         * 넘겨받은 패스워드를 검증한다.
        *********************************************************************************************/
        this.gfn_pwValidation = function(sPw){

           /*PW체크로직*/    
            //var pwReg = /^.*(?=.{8,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*+=.,]).*$/;
            var pwReg = /^.*(?=.{8,10})(?=.*\d)(?=.*[a-zA-Z]).*$/;
            
            if(!pwReg.test(sPw)){
            	alert("회원비밀번호는 8~16자리 영문,숫자의 조합으로 이루어져야합니다.");
        		return false;
            }    
            /*
        	var SamePass_0 = 0; //동일문자 카운트
        	var SamePass_1 = 0; //연속성(+) 카운드
        	var SamePass_2 = 0; //연속성(-) 카운드
         
        	var chr_pass_0;
        	var chr_pass_1;
          
        	  for(var i=0; i < sPw.length; i++) {
        		chr_pass_0 = sPw.substring(i,i+1);
        		chr_pass_1 = sPw.substring(i+1,i+2);
        	  
        		 //동일문자 카운트
        		if(chr_pass_0 == chr_pass_1) {
        			SamePass_0 = SamePass_0 + 1
        		} // if
        		  
        		//연속성(+) 카운드
        		 if(chr_pass_0.charCodeAt(0) - chr_pass_1.charCodeAt(0) == 1) {
        			SamePass_1 = SamePass_1 + 1
        		} 
        		  
        		//연속성(-) 카운드
        		if(chr_pass_0.charCodeAt(0) - chr_pass_1.charCodeAt(0) == -1) {
        			SamePass_2 = SamePass_2 + 1
        		} 
        	  } // for
          
        	  if(SamePass_0 > 1) {
        	   alert("동일문자를 3번 이상 사용할 수 없습니다.");
        	   return false;
        	  }
        	  
        	  if(SamePass_1 > 1 || SamePass_2 > 1 )  {
        	   alert("연속된 문자열(123 또는 321, abc, cba 등)을\n 3자 이상 사용 할 수 없습니다.");
        	   return false;
        	  } // if
        	  
        	  if(!this.gfn_checkDuplication(sPw)){
        		return false;
        	  }
        	  */
        	  return true
        	  
        }

        // ask alcoholic drink direct outlet list
        // no parameter at now.(we should add parameter later)
        this.make_gds_alcoholic_drink_biz_place = function (){
        	console.log('make_gds_alcoholic_drink_biz_place start')
        	var params = ""
        	var sSvcID        = "make_gds_alcoholic_drink_biz_place";//통신아이디
        	var sURL          = "svc::rest/common/ask_gds_alcoholic_drink_biz_place";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "gds_alcoholic_drink_biz_place=gds_alcoholic_drink_biz_place";
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType 	  = "U"; // U:저장/삭제, S:조회
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }
        });


    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
