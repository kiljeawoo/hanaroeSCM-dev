(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("calrendarMonth");
                this._setFormPosition(0,0,100,21);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_enableMonth", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new MaskEdit("mae_monthCal", "absolute", "0", "0", null, "21", "0", null, this);
            obj.set_taborder("3");
            obj.set_mask("9999-99");
            obj.style.set_align("left middle");
            obj.set_limitbymask("integer");
            obj.set_type("string");
            obj.set_autoselect("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_monthCal", "absolute", null, "0", "21", "21", "0", null, this);
            obj.set_taborder("1");
            obj.style.set_background("transparent URL('theme://images/cal_WF_Essential.png') center middle");
            obj.style.set_border("0 solid #aeaeaeff");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_monthCal", "absolute", "5", "34", "168", "181", null, null, this);
            obj.set_visible("false");
            obj.set_cssclass("pdiv_WF_Calendar");
            this.addChild(obj.name, obj);
            obj = new Button("btn_month09", "absolute", "10", "126", "35", "43", null, null, this.pdv_monthCal);
            obj.set_taborder("0");
            obj.set_text("9");
            obj.set_cssclass("btn_WF_Calendarmm");
            this.pdv_monthCal.addChild(obj.name, obj);
            obj = new Button("btn_month10", "absolute", "47", "126", "35", "43", null, null, this.pdv_monthCal);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_cssclass("btn_WF_Calendarmm");
            this.pdv_monthCal.addChild(obj.name, obj);
            obj = new Button("btn_month11", "absolute", "84", "126", "35", "43", null, null, this.pdv_monthCal);
            obj.set_taborder("2");
            obj.set_text("11");
            obj.set_cssclass("btn_WF_Calendarmm");
            this.pdv_monthCal.addChild(obj.name, obj);
            obj = new Button("btn_month12", "absolute", "121", "126", "35", "43", null, null, this.pdv_monthCal);
            obj.set_taborder("3");
            obj.set_text("12");
            obj.set_cssclass("btn_WF_Calendarmm");
            this.pdv_monthCal.addChild(obj.name, obj);
            obj = new Button("btn_month05", "absolute", "10", "81", "35", "43", null, null, this.pdv_monthCal);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_Calendarmm");
            this.pdv_monthCal.addChild(obj.name, obj);
            obj = new Button("btn_month06", "absolute", "47", "81", "35", "43", null, null, this.pdv_monthCal);
            obj.set_taborder("5");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_Calendarmm");
            this.pdv_monthCal.addChild(obj.name, obj);
            obj = new Button("btn_month07", "absolute", "84", "81", "35", "43", null, null, this.pdv_monthCal);
            obj.set_taborder("6");
            obj.set_text("7");
            obj.set_cssclass("btn_WF_Calendarmm");
            this.pdv_monthCal.addChild(obj.name, obj);
            obj = new Button("btn_month08", "absolute", "121", "81", "35", "43", null, null, this.pdv_monthCal);
            obj.set_taborder("7");
            obj.set_text("8");
            obj.set_cssclass("btn_WF_Calendarmm");
            this.pdv_monthCal.addChild(obj.name, obj);
            obj = new Button("btn_month04", "absolute", "121", "36", "35", "43", null, null, this.pdv_monthCal);
            obj.set_taborder("8");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Calendarmm");
            this.pdv_monthCal.addChild(obj.name, obj);
            obj = new Button("btn_month03", "absolute", "84", "36", "35", "43", null, null, this.pdv_monthCal);
            obj.set_taborder("9");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Calendarmm");
            this.pdv_monthCal.addChild(obj.name, obj);
            obj = new Button("btn_month02", "absolute", "47", "36", "35", "43", null, null, this.pdv_monthCal);
            obj.set_taborder("10");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Calendarmm");
            this.pdv_monthCal.addChild(obj.name, obj);
            obj = new Button("btn_month01", "absolute", "10", "36", "35", "43", null, null, this.pdv_monthCal);
            obj.set_taborder("11");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Calendarmm");
            this.pdv_monthCal.addChild(obj.name, obj);
            obj = new Button("Button12", "absolute", "0", "-1", "30", "26", null, null, this.pdv_monthCal);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_CalendarPrev");
            this.pdv_monthCal.addChild(obj.name, obj);
            obj = new Static("sta_calendarYY", "absolute", "0", "-1", "166", "27", null, null, this.pdv_monthCal);
            obj.set_taborder("13");
            obj.set_text("2015");
            obj.set_cssclass("sta_WF_Calendaryy");
            this.pdv_monthCal.addChild(obj.name, obj);
            obj = new Button("btn_next", "absolute", "136", "-1", "30", "26", null, null, this.pdv_monthCal);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_CalendarNext");
            this.pdv_monthCal.addChild(obj.name, obj);
            obj = new Button("btn_pre", "absolute", "8", "-1", "30", "26", null, null, this.pdv_monthCal);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_CalendarPrev");
            this.pdv_monthCal.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 168, 181, this.pdv_monthCal,
            	//-- Layout function
            	function(p) {
            		p.set_visible("false");
            		p.set_cssclass("pdiv_WF_Calendar");

            	}
            );
            this.pdv_monthCal.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 100, 21, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("calrendarMonth");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("calendarMonth.xfdl", "lib::comLib.xjs");
        this.registerScript("calendarMonth.xfdl", function() {
        /**
         * Program ID    : calendarMonth.xfdl
         * Program Name  : monthCalendar User Component
         * Author        : 조경진
         * Created On    : 2015.06.17
         * Desc          : monthCalendar User Component
         *
         ************************************************************************************************
         *     수정일        이  름    사유
         ************************************************************************************************
         *     2015.06.17     조경진   최초 작성
         ************************************************************************************************
         */

        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
         ************************************************************************************************/
        //include "lib::comLib.xjs"; 

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        var v_sCallbackDef = "";
        var v_sBeforeValue = "";
        var strDateNewNew;
        var strDateNewOld;
        var gFunctionName; //값이 변경될때 호출할 함수명
        var sLimitMonth = false;
        this.lockEdt = false;

        /************************************************************************************************
         * FORM EVENT 영역
         ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
            //현재 년월 초기값설정
            //mae_monthCal.value = gfn_toDay().substr(0, 6);
        }

        // function form_onsetfocus(obj:Form, e:SetFocusEventInfo)
        // {
        // 	this.setFocus();
        // }

        /**
         * @desc 달력 띄우기
         * @param obj Button
         * @param e ClickEventInfo
         */
        this.btn_monthCal_onclick = function(obj,e)
        {
        	var sVal = this.mae_monthCal.value;
        	
        	if (!this.gfn_isNull(sVal)) {
        		if (sVal.length > 4) {
        			if (sVal.toString().substr(4) > 12) {
        				alert("1 ~ 12월만 가능합니다.");
        				this.mae_monthCal.set_value(sVal.toString().substr(0,4));
        				
        				this.mae_monthCal.setFocus();
        				this.mae_monthCal.setCaretPos(5);
        				return;
        			}
        		}
        	}
        	
        	var nX = system.clientToScreenX(this.mae_monthCal, 0) - system.clientToScreenX(application.mainframe, 0); 
        	var nY = system.clientToScreenY(this.mae_monthCal, parseInt(this.mae_monthCal.height)) - system.clientToScreenY(application.mainframe, 0); 
        	
        	this._gfn_setCalendar(this._getValue());	
        	var nRtn = this.pdv_monthCal.trackPopup(nX,nY);	
        }

        /**
         * @desc 글자가 완성되었을때 발생하는 이벤트
         * @param obj Edit
         * @param e CharEventInfo
         */
        this.edt_monthCal_onchar = function(obj,e)
        {
        	var strYYMM = e.posttext;
        		
        	if (!this.gfn_isNum(strYYMM))    return false;
        	var strMonth = parseInt(strYYMM.substr(4));
        	
        	if (strYYMM.length == 5) 
        	{
        		if (strMonth != 0 && strMonth != 1) {
        			alert("0과 1만 가능합니다.");
        			return true;
        		}
        	} else if (strYYMM.length == 6) 
        	{
        		if (strMonth <= 0 || strMonth >= 13)    return false;
        	}	
        }

        /**
         * @desc 날짜가 변경되었을때 날짜를 바꿀건지 여부를 확인
         * @param obj Edit
         * @param e ChangeEventInfo
         */
        this.edt_monthCal_canchange = function(obj,e)
        {
        	var nYear;
        	var nMonth;
            
        	if (e.postvalue.toString().trim().length >= 4) 
        	{
        		nYear = e.postvalue.toString().substr(0, 4);
        		nMonth = "01";
        	} else 
        	{
        		nYear = gfn_toDay().toString().substr(0, 4);
        		nMonth = "01";
        	}
        	obj.value = nYear+nMonth;
        	return false;
        	
        }

        this.mae_monthCal_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13 ){
        		this.btn_monthCal_onclick();
        	}	
        	//전체선택이면 초기화
        // 	if (obj.getSelectedText() == obj.text) 
        // 	{
        // 		obj.value = "";
        // 		obj.setCaretPos(0);		
        // 		return true;
        // 	}
        // 	
        // 	var strValue = "";
        // 	if (!this.gfn_isNull(obj.value)) 
        // 	{
        // 		strValue = String(obj.value).trim();
        // 	}
        // 	var nPos = strValue.length;
        // 	 
        // 	if (nPos > 4) nPos++;
        // 	if (nPos > 6) nPos++;
        // 	
        // 	obj.setCaretPos(nPos);
        }

        this.edt_monthCal_ontextchanged = function(obj,e)
        {
        	if (this._getMaskLength(obj.value) == 6 && obj.mask == "######") 
        	{
                if (!this._getIsDate(obj.value)) 
                {
                    obj.value = "";
                    return false;
                }else{
        			this._callBindFunction();
                }
            }
        }

        /**
         * 월 버튼 클릭시 날짜 선택
         * @param obj:nuButton
         * @param e:ClickEventInfo
         */
        this.btn_month_onclick = function (obj,e)
        {	
        	var strYear	= strDateNew.substr(0, 4);
        	var strText	= obj.text; 
        		strText = strText.replace("월","");
        		
        	if (strText.length == 1) 
        	{
        		strDateNew = strYear+"0"+strText;
        	}
        	if( strText =="0 month")
        	{ 
        		strDateNew = strYear+"00";
        	} else if(strText.length > 1)
        	{
        		strDateNew = strYear+strText;
        	} 
        	this.pdv_monthCal.closePopup();
        	
        	this._setValue(strDateNew);
        	if (!this.gfn_isNull(strDateNew) && !this.gfn_isNull(v_sCallbackDef)) 
        	{
        		v_sBeforeValue = this.mae_monthCal.value;
        		this.all[v_sCallbackDef]; //2015
        	}
        	
        	this._callBindFunction(); // 함수호출
        }

        /**
         * 작년으로 이동
         * @param obj:Button
         * @param e:ClickEventInfo
         */
        this.pdv_monthCal_btn_pre_onclick = function(obj,e)
        {
        	var strYear	 = parseInt(strDateNew.substr(0, 4));
        	var strMonth = strDateNew.substr(4, 2);
        	
        	strYear = strYear - 1;

        	this.pdv_monthCal.sta_calendarYY.set_text(strYear);	
        	strDateNew = strYear.toString() + strMonth;
        	
        	if(sLimitMonth){
        		this._gfn_setmonthCal();
        	}
        }

        /**
         * 내년으로 이동
         * @param obj:Button
         * @param e:ClickEventInfo
         */
        this.pdv_monthCal_btn_next_onclick = function(obj,e)
        {
        	var strYear	= parseInt(strDateNew.substr(0, 4));
        	var strMonth = strDateNew.substr(4, 2);
        	
        	strYear = strYear + 1;

        	this.pdv_monthCal.sta_calendarYY.set_text(strYear);
        	strDateNew = strYear.toString() + strMonth;
        	
        	if(sLimitMonth){
        		this._gfn_setMonthCal();
        	}
        }

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/

        /**
         * @desc 년월값이 맞는지 검증
         * @param strYYMM 비교할 값
         * @return 체크한값
         */
        this._checkDate = function (strYYMM)
        {
        	// 년월의 값은 6자리로 제한.
        	if (strYYMM == null) strYYMM = "";
        	if (strYYMM.length != 6) strYYMM = "";
        	
        	var strYear	= strYYMM.substr(0, 4);
        	var strMonth = parseInt(strYYMM.substr(4, 2));
        	
        	if (strMonth < 0 || strMonth >= 13) strYYMM = "";
        	
        	return strYYMM;
        }

        /**
         * @desc 값을 가지고 올때 연동해서 처리할 함수명을 설정
         * @param v_sCallbackInput 콜백함수설정
         */
        this._setCallback = function (v_sCallbackInput)
        {
        	v_sCallbackDef = v_sCallbackInput;
        }

        /**
         * @desc 종료월 초기값 결정
         * @param strDateNew 초기값
         */ 
        this._gfn_setCalendar = function (strDate)
        {
        	strDateNew = strDate;
        	strDateOld = strDate;
        	
        	// 기본값 : 현재년월셋팅
        	if(strDateNew == null || strDateNew.length < 4) strDateNew = this.gfn_today("yyyyMMdd").substr(0, 6);

        	var strYear	= strDateNew.substr(0, 4);
        	var strMonth = parseInt(strDateNew.substr(4, 2));

        	this.pdv_monthCal.sta_calendarYY.set_text(strYear);

        }

        /**
         * @desc 값이 변경될때 호출될 함수명을 지정한다.
         * @param sFunctionName 함수명
         */
        this.setFunctionName = function (sFunctionName) 
        {
        	gFunctionName = sFunctionName;
        }

        /**
         * @desc 값이 변경될때 마다 함수를 호출한다.
         */
        this._callBindFunction = function ()
        {

        	var strDateNew = this._getValue();
        	
        	if (!this.gfn_isNull(gFunctionName)) 
        	{
        		
        		try 
        		{
        // 			var callBackFunc = "this.getOwnerFrame()."+gFunctionName+"(strDateNew)";
        // 			trace("in >> "+ callBackFunc);
        //  			eval(callBackFunc);
         			this.lookupFunc(gFunctionName).call(strDateNew);	
        			
        		} catch(e) 
        		{
        		}
        	}
        }

        /**
         * @desc 달력을 읽기 전용으로 할것인지 여부 설정
         * @param isReadonly
         */
        this._setReadonly = function (isReadonly)
        {
        	if (this.gfn_isNull(isReadonly)) 
        	{
                isReadonly = true;
        	}
        	if (isReadonly) 
        	{
        		this.mae_monthCal.set_cssclass("msk_WF_Readonly");
        		this.mae_monthCal.set_readonly(true);
        		this.btn_monthCal.set_enable(false);
        	} else 
        	{
        		this.mae_monthCal.set_cssclass("");
        		this.mae_monthCal.set_readonly(false);
        		this.btn_monthCal.set_enable(true);
        	}
        }

        /**
         * @desc 달력을 필수 전용으로 할것인지 여부 설정
         * @param isRequired
         */
        this._setRequired = function(isRequired,strMsgKey)
        {
        	if (this.gfn_isNull(isRequired)) 
        	{
                isRequired = true;
            }
        // 	_required = isRequired;
        // 	_msgkey = strMsgKey; 2015
        	if (isRequired) 
        	{
        		this.mae_monthCal.set_cssclass("msk_WF_Essential");
        	} else 
        	{
        		this.mae_monthCal.set_cssclass("");
        	}
        }

        /**
         * calendar 에 focus 를 지정하자.
         */
        this._setFocus = function ()
        {
        	this.mae_monthCal.setFocus();
        }

        /**
         * @desc 달력 날짜 정합성 체크
         * @param strDateNew 입력받은 달력날짜
         */
        this._getIsDate = function(strValue)
        {
            //날짜가 4자리(MMdd), 8자리(yyyyMMdd)가 아닐 경우
        	if (!(String(strValue).trim().length == 6)) return false;
            
            if (String(strValue).trim().length == 6) 
            {
                var nYear =  nexacro.toNumber(strValue.toString().substr(0,4));
                var nMonth = nexacro.toNumber(strValue.toString().substr(4,2));
                
                //입력받은 년월일이 값이 없을 경우
                if (this.gfn_isNull(nYear) || this.gfn_isNull(nMonth)) return false;
                
                //입력받은 월이 범위를 초과할 경우
                if (nMonth > 12 || nMonth < 1) return false;
            }
            
            return true;
        }

        this._getMaskLength = function(strValue)
        {
            var strValue = new String(strValue);
        	strValue = new String(strValue);
            if (strValue == null 
             || strValue == "null" 
             || strValue.trim().length <= 0 
             || escape(strValue) == "undefined")
            {
                return 0;
            } else 
            {
                return strValue.length;
            }
        }

        this._getValue = function()
        {
        	if(!this.gfn_isNull(this.mae_monthCal.value)){	
        		var oParamData = this.mae_monthCal.value;
        		return oParamData;	
        	}else{
        		return "";
        	}	
        }

        this._setValue = function (strYYMM)
        {
        	this.mae_monthCal.set_value(this._checkDate(strYYMM)); 
        }

        this._clearValue = function ()
        {
        	this.mae_monthCal.set_value(""); 
        }

        this._enable = function(obj)
        {
        	if(obj){
        		this.mae_monthCal.set_enable(true); 
        		this.btn_monthCal.set_enable(true); 
        	}else{
        		this.mae_monthCal.set_enable(false); 
        		this.btn_monthCal.set_enable(false);
        	}
        }

        this._readonly = function (obj)
        {
        	if(obj){
        		this.mae_monthCal.set_cssclass("msk_WF_Readonly");
        		this.mae_monthCal.set_readonly(true); 
        		this.btn_monthCal.set_enable(false);
        	}else{
        		this.mae_monthCal.set_cssclass("");
        		this.mae_monthCal.readonly(false); 
        		this.btn_monthCal.set_enable(true); 
        	}
        }

        this._edtLock = function(isLock)
        {
        	this.mae_monthCal.set_readonly(isLock);
        	this.mae_monthCal.set_autoselect(!isLock);
        	this.mae_monthCal.style.set_cursor(isLock ? "pointer" : "auto");
        	this.lockEdt = isLock;
        }

        this._setMonth = function (ds)
        {
        	this.ds_enableMonth.copyData(ds);
        	sLimitMonth = true;
        }

        function pdv_MonthCal_onpopup(obj,e)
        {
        	if(sLimitMonth){	
        		this._gfn_setMonthCal()
        	}	
        }

        this._gfn_setMonthCal = function ()
        {
        	var strYear = strDateNew.substr(0, 4);
        	for(var i=1; i<=12;i++) {
        				
        		var strMonth = this.gfn_lpad(String(i), "0", 2);
        		var sEnableMonth = this.ds_enableMonth.findRow(0,String(strYear+strMonth));
        		var strBtnMonth = this.all["pdv_monthCal.btn_Month"+String(strMonth)];
        				
        		if(sEnableMonth >= 0 ){
        			strBtnMonth.set_enable(true);
        			
        		}else{
        			strBtnMonth.set_enable(false);
        		}
        		
        	}
        }

        this.mae_monthCal_onkillfocus = function(obj,e)
        {
        	if(!this.gfn_isNull(obj.value)){
        		if(obj.value.length == 6){
        			if(obj.value.toString().substr(4) > 12) {
        				alert("1 ~ 12월만 가능합니다.");
        				this.mae_monthCal.set_value(obj.value.toString().substr(0,4));
        				
        				this.mae_monthCal.setFocus();
        				this.mae_monthCal.setCaretPos(5);
        				return;
        			}
        		}
        	}
        }

        this.mae_monthCal_oneditclick = function(obj,e)
        {
        	if (this.lockEdt) {
        		this.btn_monthCal_onclick();
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("onsetfocus", this.calrendarMonth_onsetfocus, this);
            this.mae_monthCal.addEventHandler("onkeydown", this.mae_monthCal_onkeydown, this);
            this.mae_monthCal.addEventHandler("onkillfocus", this.mae_monthCal_onkillfocus, this);
            this.mae_monthCal.addEventHandler("oneditclick", this.mae_monthCal_oneditclick, this);
            this.btn_monthCal.addEventHandler("onclick", this.btn_monthCal_onclick, this);
            this.pdv_monthCal.addEventHandler("onpopup", this.pdv_monthCal_onpopup, this);
            this.pdv_monthCal.btn_month09.addEventHandler("onclick", this.btn_month_onclick, this);
            this.pdv_monthCal.btn_month10.addEventHandler("onclick", this.btn_month_onclick, this);
            this.pdv_monthCal.btn_month11.addEventHandler("onclick", this.btn_month_onclick, this);
            this.pdv_monthCal.btn_month12.addEventHandler("onclick", this.btn_month_onclick, this);
            this.pdv_monthCal.btn_month05.addEventHandler("onclick", this.btn_month_onclick, this);
            this.pdv_monthCal.btn_month06.addEventHandler("onclick", this.btn_month_onclick, this);
            this.pdv_monthCal.btn_month07.addEventHandler("onclick", this.btn_month_onclick, this);
            this.pdv_monthCal.btn_month08.addEventHandler("onclick", this.btn_month_onclick, this);
            this.pdv_monthCal.btn_month04.addEventHandler("onclick", this.btn_month_onclick, this);
            this.pdv_monthCal.btn_month03.addEventHandler("onclick", this.btn_month_onclick, this);
            this.pdv_monthCal.btn_month02.addEventHandler("onclick", this.btn_month_onclick, this);
            this.pdv_monthCal.btn_month01.addEventHandler("onclick", this.btn_month_onclick, this);
            this.pdv_monthCal.btn_next.addEventHandler("onclick", this.pdv_monthCal_btn_next_onclick, this);
            this.pdv_monthCal.btn_pre.addEventHandler("onclick", this.pdv_monthCal_btn_pre_onclick, this);

        };

        this.loadIncludeScript("calendarMonth.xfdl");

       
    };
}
)();
