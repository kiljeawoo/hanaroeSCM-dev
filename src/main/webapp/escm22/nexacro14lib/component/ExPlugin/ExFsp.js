/**
 * @fileoverview fsp for nexacro Plugin library.
 * @author {J}
 */
if (!JsNamespace.exist("ExFsp") )
{
	/**
	 * @namespace
	 * @name ExFsp
	 * @memberof! <global>
	 */
	JsNamespace.declare("ExFsp", {

		/**
		 * 최초 init fsp mobile 객체생성
		 * @param {object} form
		 * @return n/a
		 * @example
		 * ExFsp.oninit(obj);
		 * @memberOf ExFsp
		 */
		oninit : function(objForm){



			if(!ExFsp.isMobile()) return;

			objForm["biobj"] = new nexacro.FSPMobile();
		    objForm["biobj"].addEventHandler("onsuccess", objForm._biobjon_success, objForm);
			objForm["biobj"].addEventHandler("onerror", objForm._biobjon_error, objForm);

			objForm["utilobj"] = new nexacro.LGUtils();
			objForm["utilobj"].addEventHandler("onsuccess", objForm._utilobjon_success, objForm);
			objForm["utilobj"].addEventHandler("onerror", objForm._utilobjon_error, objForm);


		},

		/**
		 * 모바일 로컬저장소에 저장
		 * @param {object} form
		 * @param {string} 저장될 변수명
		 * @param {string} 저장될 값
		 * @return n/a
		 * @example
		 * ExFsp.setValue(this,"test", 123);
		 * @memberOf ExFsp
		 */
		setValue : function(objForm,variable,arg,strCallback)
		{
			objForm["biobj_callback"] =Eco.isEmpty(strCallback) ? "_callback_setValue" : strCallback ;
		  if(!ExFsp.isMobile()) return;
			objForm["biobj"].setValue(variable, arg);
		},


		/**
		 * 키에 해당하는 데이터들을 저장한다.
		 *

		 * @param {JSON} dataObject 저장할 값
		 { key : value
          , key1 : value1
        }
		 * @param {String}  callback 실행결과를 리턴받을 콜백함수
		 * @returns 처리 성공 여부
		 * @example
		 * ExFsp.setValues(this,{aa:"111",bbb:"222"},"fn_setValuesCallabck")
		 * @memberof ExFsp
		 */
		setValues : function(objForm,dataObject,strCallback)
		{
			objForm["biobj_callback"] =Eco.isEmpty(strCallback) ? "_callback_setValue" : strCallback ;
			if(!ExFsp.isMobile()) return;
			objForm["biobj"].setValue(dataObject);
		},

		/**
		 * 저장된 전체 정보를 가져온다.
		 * @param {String}  callback 실행결과를 리턴받을 콜백함수
		 * @returns 변수 명에 해당하는 저장된 값 배열
		 * @example
		 * ExFsp.getValueAll(this,"callback_getValueAll")
		 * @memberof ExFsp
		 */
		getValueAll : function(objForm,strCallback)
		{


			objForm["biobj_callback"] =Eco.isEmpty(strCallback) ? "_callback_setValue" : strCallback ;
			if(!ExFsp.isMobile()){
				//objForm._setLoginComp("","12109374"); // 개발일때 위한 임시 로그인
				objForm._setLoginComp("",""); // 개발일때 위한 임시 로그인
				return;
			}


			objForm["biobj_callback"] =Eco.isEmpty(strCallback) ? "_setLoginComp" : strCallback ;
			objForm["biobj"].getValueAll();


		},

		/**
		 * 모바일 해당하는 키에 대한 값을 가져온다
		 * @param {object} formobj
		 * @param {string} 가져올 값과
		 * @param {string} 콜백명
		 * @return 가져온 변수명
		 * @example
		 *  ExFsp.getValue(this,"userId","callback_getValue");
		 * @memberOf ExFsp
		 */
		getValue : function(objForm,variable,strCallback)
		{



			if(!ExFsp.isMobile()){
				//objForm._setLoginComp("","12109374"); // 개발일때 위한 임시 로그인
				objForm._setLoginComp("",""); // 개발일때 위한 임시 로그인
				return;
			}


            objForm["biobj_callback"] =Eco.isEmpty(strCallback) ? "_setLoginComp" : strCallback ;
            objForm["biobj"].getValue(variable);


		},

		/**
		 * 해당하는 키에 대한 값들을 가져온다.
		 *

		 * @param {String} dataKeys 저장한 여러 변수 명( ',' 로 구분)
		 * @param {String}  callback 실행결과를 리턴받을 콜백함수
		 * @returns 주어진 키에 대한 저장된 값들의 JSON객체
		 result : {
					key : value
					, key1 : value1
					}
		 }
		 *@example
		 *  ExFsp.getValues(this,"aa,bb","callback_getValues")
		 */
		getValues : function(objForm,variable,strCallback)
		{



			if(!ExFsp.isMobile()){
				//objForm._setLoginComp("","12109374"); // 개발일때 위한 임시 로그인
				objForm._setLoginComp("",""); // 개발일때 위한 임시 로그인
				return;
			}


			objForm["biobj_callback"] =Eco.isEmpty(strCallback) ? "_setLoginComp" : strCallback ;
			objForm["biobj"].getValues(variable);


		},

		/**
		 * 주어진 키에 해당하는 값을 삭제한다.
		 *
		 * @param {object}  현재폼
		 * @param {String} dataKey 값을 저장한 키
		 * @param {String}  callback 실행결과를 리턴받을 콜백함수
		 * @returns 처리 성공 여부
		 * @example
		 * ExFsp.removeValue(this,"aa","callback_removeValue");
		 * @memberof ExFsp
		 */
		removeValue : function(objForm,dataKey,strCallback)
		{
			if(!ExFsp.isMobile()) return;
			objForm["biobj_callback"] =Eco.isEmpty(strCallback) ? "_setLoginComp" : strCallback ;
			objForm["biobj"].removeValue(dataKey);

		},

		/**
		 * 주어진 키에 해당하는 값들을 삭제한다.
		 *
		 * @param {object}  현재폼
		 * @param {String} dataKeys 값을 저장한 키 ( "," 로구분)
		 * @param {String}  callback 실행결과를 리턴받을 콜백함수
		 * @returns 처리 성공 여부
		 * @example
		 * ExFsp.removeValues(this,"aa,bb","callback_removeValue");
		 * @memberof ExFsp
		 *
		 */
		removeValues : function(objForm,dataKey,strCallback)
		{
			if(!ExFsp.isMobile()) return;
		    objForm["biobj_callback"] =Eco.isEmpty(strCallback) ? "_setLoginComp" : strCallback ;
		   objForm["biobj"].removeValues(dataKey);
		},


		/**
		 * 저장된 전체 정보를 삭제한다.
		 * @param {object}  현재폼
		 * @param {String}  callback 실행결과를 리턴받을 콜백함수
		 * @returns 처리 성공 여부
		 * @example
		 * ExFsp.removeAll(this,"callback_removeAll");
		 * @memberof ExFsp
		 */
		removeAll : function(objForm,strCallback)
		{
			if(!ExFsp.isMobile()) return;
			objForm["biobj_callback"] =Eco.isEmpty(strCallback) ? "_setLoginComp" : strCallback ;
			objForm["biobj"].removeAll();
		},

		/**
		 * 앱 설정에 관한 정보를 가져온다.
		 * @param {Object}  현재폼
		 * @param {String}  callback 실행결과를 리턴받을 콜백함수
		 * @example
		 * ExFsp.getAppInfo(this,"callback_getAppInfo");
		 * @memberof ExFsp
		 */
		getAppInfo : function(objForm,strCallback)
		{

			if(!ExFsp.isMobile()) return;
			//alert(" start ");
			objForm["biobj_callback"] =Eco.isEmpty(strCallback) ? "" : strCallback ;
			objForm["biobj"].getAppInfo();
			//alert(" end ");

		},

		/**
		 * 모바일 전화걸기
		 * @param {object} form
		 * @param {number} 번호
		 * @return n/a
		 * @example
		 * ExFsp.dial(this,01099991111);
		 * @memberOf ExFsp
		 */
		dial: function(objForm,nNo)
		{
			if(!ExFsp.isMobile()) return;
			if(Eco.isEmpty(nNo)){
				alert("error!!! nNo null");
				return;

			}

			//if(!Eco.isNumber(nNo)) nNo = nexacro.toNumber(nNo);


		   	  objForm["biobj"].dial(nNo);
		},

		/**
		 * 모바일 문자전송
		 * @param {object} form
		 * @param {number} 번호
		  * @param {string} 보낼메세지
		 * @return n/a
		 * @example
		 * ExFsp.smsSend(this,01045061423, "test");
		 * @memberOf ExFsp
		 */
		smsSend : function(objForm,nNo,strMsg)
		{
			if(!ExFsp.isMobile()) return;
		     objForm["biobj"].smsSend(nNo,strMsg);
		},

		/**
		 * 별도의 프로세스로 웹 브라우저를 실행
		 * @param {object} form
		 * @param {string} 브라우저로 열 url
		 * @return n/a
		 * @example
		 * ExFsp.browser(this,"http://www.google.co.kr");
		 * @memberOf ExFsp
		 */
		browser :function(objForm,strurl)
		{
			if(!ExFsp.isMobile()) return;
			if(Eco.isEmpty(strurl)){
				alert(" url null");
				return;

			}

			system.execBrowser(strurl);
			//if(nexacro.OS == "Android")
			//{
			//	objForm["biobj"].browser(strurl);
			//}
			//else if(nexacro.OS == "iOS")
			//{

   	//		system.execBrowser(strurl);

//			}
		},

		/**
		 * 주어진 이름에 해당하는 APP을 실행
		 * @param {object} form
		 * @param {string} 브라우저로 열 url
		 * @return n/a
		 * @example
		 * ExFsp.run(this,"http://www.google.co.kr");
		 * @memberOf ExFsp
		 */
		run : function(objForm,url){

			if(!ExFsp.isMobile()) return;
			objForm["biobj"].run(url);
		},

		/**
		 * fsp 모바일 파일다운로드
		 * @param {object} form
		 * @param {string} 다운받을 url
		 * @param {string} 다운받을 file명
		 * @return n/a
		 * @example
		 * ExFsp.fileDown(this,"http://172.10.11.205/indExPlugin.jsp", "j.test");
		 * @memberOf ExFsp
		 */
		fileDown : function(objForm,strUrl,downFileNm)
		{
			if(!ExFsp.isMobile()) return;
			objForm["biobj"].fileDown(strUrl , downFileNm);

		},

		/**
		 * 엑티비티 브라우저 함수 호출
		 * @param {object} form
		 * @param {object} 현재폼
		 * @param {string} 브라우저로 열 url
		 * @return n/a
		 * @example
		 * ExFsp.LGE_openURL(this,"http://www.google.co.kr",0);
		 * @memberOf ExFsp
		 */
		callLGE_openURL :function(objForm,strurl,nNo)
		{

			if(!ExFsp.isMobile()) return;

			system.execBrowser(strurl);
			  //objForm["utilobj"].LGE_openURL(strurl,0);
		},

        /**
		 * 기본 activity 브라우저 열기
		 * LGE_execProc 함수로 엑티비티 호출이 종료되면 onsucess 이벤트핸들러를 호출하도록 수정되었습니다.
		 * LGE_execProc 함수의 마지막 아규먼트를 1 등과 같은 1 이상의 정수로 설정하시면
		 * onsucess 이벤트 핸들러 아규먼트 e.returnvalue 에 해당값이 되돌아 옵니다.(PNS호출시 주로 사용)
		 * 만약 마지막 아규먼트가 1이상의 정수가 아니면 기존과 같이 단순 액티비티를 호출하게 되며 이때 발생하는 onsucess 이벤트는 호출이 성공했음을 의미합니다.
		 * PNS 호출시 사용
		 * @param  {object} this form
		 * @param	strproc : 엑티비티이름, 액티비티클래스이름
		 * @param	strArg : 필요한경우 URI 문자열
		 * @param	strxtra : 필요한경우 xtra문자열 ( 엑스트라이름@@값##엑스트라이름1@@값##엑스트라이름2@@값
		 * @param	strtype : 필요한경우 type문자열
		 * @param	{string} "1" :PNSMAIN "2":PNSSETTING "3": PNSLOGIN
		 * @return n/a
		 * @example
		 * ExFsp.callLGE_execProc(this,"android.provider.Settings.ACTION_BLUETOOTH_SETTINGS", "", "", "", "");
		 * ExFsp.callLGE_execProc(this,"Intent.ACTION_VIEW", "geo:0,0?q=역삼역", "", "", "");					// 구글맵
		 * @memberOf ExFsp
		*/
		callLGE_execProc : function(objForm,arg1,arg2,arg3,arg4,arg5)
		{
			if(!ExFsp.isMobile()) return;
			objForm["utilobj"].LGE_execProc(arg1,arg2,arg3,arg4,arg5);

		},

		/**
		 *  nexacro for fspPlugin  공통함수호출
		 *  @param {object} form
		 * @param {string} PNSMAIN  :  PNS
		 *                 SETTING :   설정
		 * @return 	_utilobjon_success handler evnet
		 * @example
		 * =====[ios]====================
		 * MainFeedViewController : 알림톡
		 * PNSSettingController   : 설정
		 * =====[android]================
		 * ac.kr.seoultech.m2.pns.PNSMAIN     : PNSMAIN
		 * ac.kr.seoultech.m2.pns.PNSSETTING  : PNSSETTING
		 * 패키지 클랙스명
		 * ==============================
		 * ExFsp.callPNS(this,"PNSMAIN");  //pns호출
		 * ExFsp.callPNS(this,"PNSSETTING");  //pns setting
		 * ExFsp.callPNS(this,"PNSLOGIN");  //pns setting
		 * @memberOf ExFsp
		 */
		callPNS : function(objForm,isStr)
		{
			if(!ExFsp.isMobile()) return;
			var pThis = application.gv_workForm;
			if(!Eco.isEmpty(objForm)) pThis = objForm;


			switch(nexacro.OS)
			{
				case "Android" :
					ExFsp.callPNSAndroid(objForm,isStr);
					break;
				case "iOS" :
					ExFsp.callPNSiOS(objForm,isStr);
					break;
			}
		},


		/**
		 * PNS android  호출
		 * @param {object} form
		 * @param {object} form object
		 * @param {string} PNSMAIN  :  PNS MAIN
		 *                 PNSSETTING :  PNS셋팅
		 *                 PNSLOGIN :  로그인 화면
		 *
		 * @return 	_utilobjon_success handler evnet
		 * @example
		 * =====[android]================
		 * ac.kr.seoultech.m2.pns.PNSMAIN     : PNSMAIN
		 * ac.kr.seoultech.m2.pns.PNSSETTING  : PNSSETTING
		 * ac.kr.seoultech.m2.pns.PNSLOGIN  : PNSLOGIN
		 * 패키지 클랙스명
		 * @memberOf ExFsp
		 */
		callPNSAndroid : function(objForm,str)
		{
			if(!ExFsp.isMobile()) return;
			if(Eco.isEmpty(objForm)) return;

			switch(str)
			{
				case "PNSMAIN" :
					ExFsp.callLGE_execProc(objForm,"ac.kr.seoultech.m2.pns.PNSMAIN", "", "", "", "1");
					break;
				case "PNSSETTING" :
					ExFsp.callLGE_execProc(objForm,"ac.kr.seoultech.m2.pns.PNSSETTING", "", "", "", "2");
					break;
				case "PNSLOGIN" :
					ExFsp.callLGE_execProc(objForm,"ac.kr.seoultech.m2.pns.PNSLOGIN", "", "", "", "3");
					break;

			}

		},



		/**
		 * PNS iOS  호출
		 * @param {object} form object
		 * @param {string} PNSMAIN  :  PNS MAIN
		 *                 PNSSETTING :  PNS셋팅
		 *                 PNSLOGIN :  로그인 화면
		 *
		 * @return 	_utilobjon_success handler evnet
		 * @example
		 * =====[iOS]================
		 * MainFeedViewController   : PNSMAIN
		 * PNSSettingController     : PNSSETTING
		 * LoginMainViewController  : PNSLOGIN
		 * 패키지 클랙스명
		 * @memberOf ExFsp
		 */
		callPNSiOS : function(objForm,str)
		{
			if(!ExFsp.isMobile()) return;
			if(Eco.isEmpty(objForm)) return;

			switch(str)
			{
				case "PNSMAIN" :
					ExFsp.callLGE_execProc(objForm,"MainFeedViewController", "", "", "", "1");
					break;
				case "PNSSETTING" :
					ExFsp.callLGE_execProc(objForm,"PNSSettingController", "", "", "", "2");
					break;
				case "PNSLOGIN" :
					ExFsp.callLGE_execProc(objForm,"LoginMainViewController", "", "", "", "3");
					break;

			}

		},


		/**
		 * static 성 html페이지 열기
		 * @param {object} form object
		 * @param {object} webBrowser Component
		 * @param {string} 다운받을 file명
		 * @return n/a
		 * @example
		 * ExFsp.setWebPageUrl(this,this.web,"cntInfoAdm");
		 * @memberOf ExFsp
		 */

		setWebPageUrl : function(objForm,objWeb,strFileNm)
		{
		  if(!ExFsp.isMobile()) return;
		  if(Eco.isEmpty(strFileNm)) return;

		  var strUrl = application.services.get_item("svc_webpage").url+  "/" + strFileNm + ".html";//15.05.14(수정)
		  objWeb.set_url(strUrl);
		  objWeb.addEventHandler("onusernotify", objForm._event_Exebbrowser_onusernotify, objForm);


		},

		/**
		 * webbrowser  구글맵  url 연동
		 * @param {string}  연결할 주
	     * @return n/a
		 * @example
		 *  ExFsp.actionMapView("역삼역");
		 * @memberOf ExFsp
		 */
		actionMapView : function(arg)
		{

			if(Eco.isEmpty(arg)) return;

			if(nexacro.OS=="iOS")
			{
				system.execBrowser(encodeURI("http://maps.google.com/maps?q=" +arg));
			}
			else if(nexacro.OS == "Andorid")
			{
				//system.execBrowser(encodeURI("http://maps.google.com/maps?q=" +arg));
				ExFsp.callLGE_execProc(this,"Intent.ACTION_VIEW", "geo:0,0?q='"+arg+"'", "", "", "");
			}

		},

		/**
		 * 모바일 로그
		 * @param
		 * @return n/a
		 * @example
		 *
		 * @memberOf ExFsp
		 */
		log : function(str)
		{

			switch(nexacro.OS){
				case "Android" :
					trace(str);
					break;
				case "iOS" :

					nexacro._nexacroconsole(str);
					break;
				default:
					trace(str);

					break;

			}


		},

		/**
		 * 모바일 시스템 체크
		 * @param
		 * @return  true : 모바일
		 * @example
		 *
		 * @memberOf ExFsp
		 */
		isMobile : function()
		{
			if(nexacro.OS == "Android" || nexacro.OS == "iOS")
			 return true;
			else
			return false;
		},

		/**
		 *	디바이스의 네트워크 연결상태를 가져온다.
		 *	@param	{Object} formObj 호출하는 객체 (일반적으로 this)
		 *	@param	{int} type 네트워크 타입 ( 0 : 3g, 1 : wifi, 2 : 연결 안됨)
		 *	@return	네트워크 연결 여부
		 * @example		 *
		 * ExFsp.getNetworkStatus(this,1,"callback_getNetworStatus");
		 */
		getNetworkStatus : function ( objForm,type,strcallback)
		{
			objForm["biobj_callback"] =Eco.isEmpty(strCallback) ? "" : strCallback ;
		    objForm["biobj"].execute( "network", "getNetworkStatus", [type]);
		},


		/**
		 * 바코드를 읽어들인다.<p>
		 * @param	{Object} formObj 호출하는 객체 (일반적으로 this)
		 * @param {String}  callback 실행결과를 리턴받을 콜백함수
		 * @example
		 * ExFsp.getBarcode(this,"callback_getBarcode");
		 */
		getBarcode : function (objForm,strCallback)
		{
			objForm["biobj_callback"] =Eco.isEmpty(strCallback) ? "" : strCallback ;
			objForm["biobj"].getBarcode();
		},

	/**
	 * 카메라를 실행해서 촬영 후 사진에 대한 경로를 가져온다.
	 * @param	{Object} formObj 호출하는 객체 (일반적으로 this)
	 * @param {JSON} [options] 관련 옵션
	 {
        returnType : 'F' or 'D'   이미지 파일 반환 타입
        , saveType : 'JPEG' or 'PNG'   이미지 파일 저장 타입
        , targetWidth : 반환 이미지 넓이
        , targetHeight : 반환 이미지 높이
        , fileName : 실행결과 타입이 파일일 경우에 파일 명
                    지정하지 않을 경우 기본값은
                    fsp_%yyyyMMddHHmmss% 의 이름을 사용
        , quality : 이미지 저장 품질 ( 1 ~ 100 )
        , deleteFile : 파일을 이미지 바이트 문자열로 제공할 경우에 파일의 삭제여부. Y or N ( 기본값 N , 'N'일 경우 파일로 저장된다.)
        , crop : 'YES' or 'NO'   crop 사용여부 타입
        , cropWidth : 크롭된 사진의 넓이
        , cropHeight : 크롭된 사진의 높이
        , resizeFile : 이미지의 사이즈 변환 여부. Y or N (기본값 Y, 'N'일 경우 원본이미지)
    }
	 * @param {String}  callback 실행결과를 리턴받을 콜백함수
	 * @example
	 * ExFsp.getPicture(this,returnvalue :'F',saveType:'JPEG'},"callback_getPicture");
	 * @memberof ExFsp
	 */
	  getPicture : function (objForm, options,strCallback)
	{
		objForm["biobj_callback"] =Eco.isEmpty(strCallback) ? "" : strCallback ;
		objForm["biobj"].getPicture(options);

	},

	/**
	 * 앨범에서 사진을 선택하여 경로를 가져온다.
	 * @param	{Object} formObj 호출하는 객체 (일반적으로 this)
	 * @param {JSON} [options] 관련 옵션
	 {
        returnType : 'F' or 'D'   이미지 파일 반환 타입
        , targetWidth : 반환 이미지 넓이
        , targetHeight : 반환 이미지 높이
        , quality : 이미지 저장 품질 ( 1 ~ 100 )
        , crop : 'YES' or 'NO'   crop 사용여부 타입
        , cropWidth : 크롭된 사진의 넓이
        , cropHeight : 크롭된 사진의 높이
        , resizeFile : Y or N    이미지의 사이즈 변환 여부. (기본값 Y, 'N'일 경우 원본이미지)
    }
	 * @param {String}  callback 실행결과를 리턴받을 콜백함수
	 * @example ExFsp.getPictureFormAlbum(this,{returnvalue:'F'},"callback_");
	 * @memeberof ExFsp
	 */
	 getPictureFromAlbum : function (objForm, options,strCallback)
	{
		objForm["biobj_callback"] =Eco.isEmpty(strCallback) ? "" : strCallback ;
		objForm["biobj"].getPictureFromAlbum(options);
	},

	/**
	 *	앨범에서 선택한 사진 파일을 이미지 바이트 문자열로 가져온다.
	 * @param	{Object} formObj 호출하는 객체 (일반적으로 this)
	 * @param {JSON} [options] 관련 옵션
	 {
        , targetWidth : 반환 이미지 넓이
        , targetHeight : 반환 이미지 높이
        , fileName : 실행결과 타입이 파일일 경우에 파일 명
                    지정하지 않을 경우 기본값은
                    fsp_%yyyyMMddHHmmss% 의 이름을 사용
        , quality : 이미지 저장 품질 ( 1 ~ 100 )
    }
	 * @param {String}  callback 실행결과를 리턴받을 콜백함수
	 * @example
	 * ExFsp.getPictureByteString(this,{},"callback_getPictureByteString");
	 * @memberof ExFsp
	 */
	getPictureByteString : function (objForm, options,strCallback)
	{
		objForm["biobj_callback"] =Eco.isEmpty(strCallback) ? "" : strCallback ;
		objForm["biobj"].getPictureByteString(options);
	},

	// -------------------------------- fsp.mobile.h.mapp
	/**
	 * 화면에 대한 잠금 처리를 한다.
	 * @param	{Object} formObj 호출하는 객체 (일반적으로 this)
	 * @param {String} password 숫자로되어 있는 비밀번호
	 * @param {String}  callback 실행결과를 리턴받을 콜백함수
	 * @example
	 * ExFsp.lockScreen(this,"1234","lockscreen_callback");
	 */
	lockScreen : function (objForm, password,strCallback)
	{

		objForm["biobj_callback"] =Eco.isEmpty(strCallback) ? "" : strCallback ;
		objForm["biobj"].lockScreen(password);
	},

	/**
	 *	복호화 처리를 한다.
	 *@param	{Object} formObj 호출하는 객체 (일반적으로 this)
	 *@param	{String} message 복호화할 원본 문자열
	 *@param	{String} type 복호화에 사용할 타입 AES (RSA방식의 복호화는 지원하지 않음.)
	 *@param	{String}  callback 실행결과를 리턴받을 콜백함수
	 *@return	복호화된 문자열.
	 *@example
	 * ExFsp.decrypt(this,"1234","AES","callback_decrpty");
	 *@memberof ExFsp
	 */
	decrypt : function (objForm, message, type,strCallback)
	{
		objForm["biobj_callback"] =Eco.isEmpty(strCallback) ? "" : strCallback ;
		objForm["biobj"].decrypt(message,type);
	},

	/**
	 *	암호화 처리를 한다.
	 *@param	{Object} formObj 호출하는 객체 (일반적으로 this)
	 *@param	{String} message 암호화할 원본 문자열
	 *@param	{String} type 암호화에 사용할 타입 (AES or RSA)
	 *@param	{String}  callback 실행결과를 리턴받을 콜백함수
	 *@return	암호화된 문자열.
	 *@example
	 * ExFsp.encrypt(this,"1234","AES","callback_encrypt");
	 *@memeberof ExFsp
	 */
	encrypt : function (objForm, message, type,strCallback)
	{
		objForm["biobj_callback"] =Eco.isEmpty(strCallback) ? "" : strCallback ;
		objForm["biobj"].encrypt(message,type);

	},


		// -------------------------------- fsp.mobile.h.gps
	/**
	 * 현재 위치 정보를 가져온다.
	 * @param {Object} formObj 호출하는 객체 (일반적으로 this)
	 * @param {Integer}  요청할 위치 정보 정확도를 설정합니다.
	 iOS : ACCURACY_0 ~ ACCURACY_4 (5단계로 설정가능)
	 Android : ACCURACY_0 ~ ACCURACY_2 (3단계로 설정가능)
	 * @param {Integer} 응답 제한시간(ms : 200ms ~ 86400000ms)
	 제한시간 초과하는 경우 onrecverror 발생
	 * @example
	 *  typeDefinition  에 컴퍼넌트 추가
	 *   <Component type="JavaScript" id="Geolocation" classname="nexacro.Geolocation"/>
	 * ExFsp.getLocation(this,2, 1000);
	 * @memberof ExFsp
	 */
	getLocation : function (objForm,nAccuracy,nTimeout)
	{


		Geolocation.getCurrentPosition(nAccuracy, nTimeout);
	},

	/**
	 * GPS가 사용 가능한지를 화인한다.
	 * @param {Object} formObj 호출하는 객체 (일반적으로 this)
	 * @param {String}  callback 실행결과를 리턴받을 콜백함수
	 * @example
	 * ExFsp.isGpsUse(this,strCallback);
	 */
	isGpsUse : function (objForm,strCallback)
	{

		objForm["biobj"].isGpsUse();
	},



	/**
	 * GSP 위치 수신을 시작해 놓은 경우 해당하는 수신 이벤트를 중지시킨다.
	 *
	 * @param {Object} formObj 호출하는 객체 (일반적으로 this)
	 * @param {String}  callback 실행결과를 리턴받을 콜백함수
	 */
	gpsStop : function (objForm,strCallback)
	{
		objForm["biobj_callback"] =Eco.isEmpty(strCallback) ? "" : strCallback ;
		objForm["biobj"].gpsStop();




	},

	/**
	 * 로그아웃 처리
	 * @param
	 * @return
	 * @example
	 *
	 * @memberOf ExFsp
	 */
	logout : function(objForm,strCallback)
	{
		var pThis = objForm;
		var pCallback = Eco.isEmpty(strCallback) ? "_setLogoutComp": strCallback;

		if(application.gv_workForm.gfn_confirm("로그아웃 하시겠습니까?"))
		{
			ExFsp.setValue(application.gv_workForm,"userId","",pCallback);
		}
		else
		{
			application.gv_workForm.gfn_alert("로그아웃이 취소되었습니다.");
		}


	},

	/**
	 * each 
	 * @param {Array} 넘길아규먼트값
	 * @param {Function}  콜벡함수명
	 * @return
	 * @example
	 * var test = [ { name : 'a',arg2:"bbb" }, { name : 'b' }, { name : 'c' } ];

	 ExFsp.each(test,function(index){
		   alert(index + " = " + this.name + "arg2 :" + this.arg2 );
		});
	 * @memberOf ExFsp
	 */
	each : function(arr,callback){
		for(var i = 0; i < arr.length; i++) {
			callback.prototype = arr[i];
			new callback(i);
		}

	}



		// End of JsNamespace.declare
	});
	
}

