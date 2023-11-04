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
                this.set_name("popup01");
                this.set_titletext("청구 미적용업체등록/수정");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,767,214);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_unapl", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"13\"/><Column id=\"PAY_COMP_NM\" type=\"STRING\" size=\"50\"/><Column id=\"BZNO\" type=\"STRING\" size=\"10\"/><Column id=\"UYN\" type=\"STRING\" size=\"3\"/><Column id=\"UNAPL_RSNCTT\" type=\"STRING\" size=\"500\"/><Column id=\"ST_DT\" type=\"STRING\" size=\"8\"/><Column id=\"ED_DT\" type=\"STRING\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_save", "absolute", null, "47", "41", "21", "56", null, this);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close2", "absolute", null, "47", "41", "21", "13", null, this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "17", "51", "135", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_text("청구 미적용업체");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "17", "76", "111", "29", null, null, this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("미적용 업체정보");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "17", "104", "111", "29", null, null, this);
            obj.set_taborder("4");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "127", "76", null, "29", "7", null, this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "127", "104", null, "29", "7", null, this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_compname", "absolute", "307", "80", "211", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_cssclass("edt_WF_Essential");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "673", "32", "91", "15", null, null, this);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "99", "17", "67", null, null, this);
            obj.set_taborder("8");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_PopupTitle");
            obj.set_text("청구 미적용업체 등록/수정");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "729", "0", "37", "32", null, null, this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_gln", "absolute", "130", "80", "174", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_cssclass("edt_WF_Essential");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Radio("radio_use", "absolute", "130", "106", "147", "23", null, null, this);
            this.addChild(obj.name, obj);
            var radio_use_innerdataset = new Dataset("radio_use_innerdataset", this.radio_use);
            radio_use_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">사용안함</Col></Row></Rows>");
            obj.set_innerdataset(radio_use_innerdataset);
            obj.set_taborder("15");
            obj.set_direction("vertical");
            obj.set_cssclass("rdo_WF_Essentia");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("Y");
            obj.set_index("0");

            obj = new Button("btn_comname", "absolute", "521", "80", "21", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_comnameCheck", "absolute", "545", "80", "65", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_text("중복확인");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "17", "160", "111", "29", null, null, this);
            obj.set_taborder("18");
            obj.set_text("미적용사유");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "127", "160", null, "29", "7", null, this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_unapl_rsnctt", "absolute", "130", "164", "454", "21", null, null, this);
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "17", "132", "111", "29", null, null, this);
            obj.set_taborder("22");
            obj.set_text("시작월");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "127", "132", null, "29", "7", null, this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "407", "132", "111", "29", null, null, this);
            obj.set_taborder("24");
            obj.set_text("종료월");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Div("cal_st", "absolute", "130", "137", "79", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_url("common::calendarMonth.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("cal_ed", "absolute", "521", "137", "79", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_url("common::calendarMonth.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 767, 214, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("청구 미적용업체등록/수정");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::calendarMonth.xfdl");
            this._addPreloadList("fdl", "common::calendarMonth.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_7131.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_7131.xfdl", function(exports) {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        var btn_save_enable = false;
        var paraMode = "";
        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.popup01_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        	paraMode = this.getOwnerFrame().paramMode;
        	if(paraMode == "I"){
        		this.cal_st._setValue(this.fn_Today());
        		this.cal_ed._setValue(this.fn_Today());
        	}else if(paraMode == "U"){
        		this.ds_unapl.clearData();
        		this.ds_unapl.insertRow(0);
        		this.ds_unapl.copyRow(0,this.parent.dsArg,0);
        		
        		this.edit_compname.set_value(this.ds_unapl.getColumn(0, "PAY_COMP_NM"));
        		this.edit_compname.set_readonly("true");
        		this.edit_compname.set_cssclass("edt_WF_Readonly");
        		
        		this.edit_gln.set_value(this.ds_unapl.getColumn(0, "NA_TRPL_C"));
        		this.edit_gln.set_readonly("true");
        		this.edit_gln.set_cssclass("edt_WF_Readonly");
        		
        		this.btn_comname.set_visible("false");
        		this.btn_comnameCheck.set_visible("false");
        		
        		this.cal_st._setValue(this.ds_unapl.getColumn(0, "ST_DT"));
        		this.cal_ed._setValue(this.ds_unapl.getColumn(0, "ED_DT"));

        		this.edit_unapl_rsnctt.set_value(this.ds_unapl.getColumn(0, "UNAPL_RSNCTT"));
        		
        		this.radio_use.set_value(this.ds_unapl.getColumn(0, "UYN"));
        		
        		btn_save_enable = true;
        	}
        	
        }

        this.fn_afterFormOnload = function()
        {
        	
        }

        this.fn_Today = function()
        {
        	var objDate = new Date();
        	var sToday = objDate.getFullYear().toString();
        		sToday += (objDate.getMonth()+1).toString().padLeft(2, "0");
        //		sToday += objDate.getDate().toString().padLeft(2, "0");
        	
        	return sToday;
        }

        this.fn_check_date = function()
        {
        	var curDate = new Date();
        	var newYYYYMMDD = this.cal_ed._getValue() + curDate.getDate(); // 종료일 가져옴

        	var nextYear = (curDate.getFullYear()+1).toString();
        	var nextMonth = (curDate.getMonth()+1).toString().padLeft(2, "0");;
        	var nextDate = curDate.getDate().toString().padLeft(2, "0");
        	
        	var nextYYYYMMDD = nextYear + nextMonth + nextDate;

        	
        	if(newYYYYMMDD > nextYYYYMMDD){
        		alert("종료일은 현재로부터 1년 까지 입니다.");
        		return false;
        	}
        	
        	return true;
        }

        
        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        /*콜백 함수*/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "checkRqsUnaplCompGln"){
        			if(this.ds_unapl.rowcount==0){
        				this.alert("사용 가능합니다.");
        				btn_save_enable = true;
        			}
        			else {
        				this.alert("이미 사용중입니다.");
        			}
        		}
        		else if(svcID == "insertServiceRqsUnaplComp") {
        			this.gfn_getMessage("alert", "result.message.save.success");
        			btn_save_enable = false;
        			this.close();
        		}
        		else if(svcID == "updateServiceRqsUnaplComp") {
        			this.gfn_getMessage("alert", "result.message.save.success");
        			btn_save_enable = false;
        			this.close();
        		}
        	}	

        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        /*추가등록 시 사용되는 Validation Check */
        this.fn_validationCheck = function() {
        	
        	if(this.gfn_isNull(this.edit_gln.value)){
        		this.alert("GLN 계정을 입력해주세요");
        		this.edit_gln.setFocus();
        		return false;
        	}
        	
        	if(this.gfn_isNull(this.edit_compname.value)){
        		this.alert("회사명을 입력해주세요");
        		this.edit_compname.setFocus();
        		return false;
        	}
        	
        //	if(this.gfn_isNull(this.edit_compnum.value)){
        //		this.alert("사업자 번호를 입력해주세요");
        //		this.edit_compnum.setFocus();
        //		return false;
        //	}

        	if(this.gfn_isNull(this.cal_st._getValue())){
        		this.alert("시작월을 입력해주세요");
        		return false;
        	}
        	
        		if(this.gfn_isNull(this.cal_ed._getValue())){
        		this.alert("종료월을 입력해주세요");
        		return false;
        	}
        	
        	// 종료월 체크
        	var curDate = new Date();
        	var newYYYYMMDD = this.cal_ed._getValue() + curDate.getDate(); // 종료일 가져옴

        	var nextYear = (curDate.getFullYear()+1).toString();
        	var nextMonth = (curDate.getMonth()+1).toString().padLeft(2, "0");;
        	var nextDate = curDate.getDate().toString().padLeft(2, "0");
        	
        	var nextYYYYMMDD = nextYear + nextMonth + nextDate;
        	
        	if(newYYYYMMDD > nextYYYYMMDD){
        		alert("종료일은 현재로부터 1년까지 입니다.");
        		return false;
        	}

        	return true;
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
        /*닫기*/
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        /*저장*/
        this.btn_save_onclick = function(obj,e)
        {	
        	if(btn_save_enable){
        		if(this.fn_validationCheck()){
        			this.ds_unapl.addRow();
        			this.ds_unapl.setColumn(0,"NA_TRPL_C",this.edit_gln.value);
        			this.ds_unapl.setColumn(0,"PAY_COMP_NM",this.edit_compname.value);
        //			this.ds_unapl.setColumn(0,"BZNO",this.edit_compnum.value);
        			this.ds_unapl.setColumn(0,"UYN",this.radio_use.value);
        			this.ds_unapl.setColumn(0,"UNAPL_RSNCTT",this.edit_unapl_rsnctt.value);
        			this.ds_unapl.setColumn(0,"ST_DT",this.cal_st._getValue());
        			this.ds_unapl.setColumn(0,"ED_DT",this.cal_ed._getValue());
        			
        			if(paraMode == "I"){
        				var sParams = "";
        				var sSvcID        = "insertServiceRqsUnaplComp";
        				var sURL          = "svc::rest/bl/insertServiceRqsUnaplComp";	
        				var sInDatasets   = "ds_unapl=ds_unapl";
        				var sOutDatasets  = "";	
        				var sArgument     = sParams;
        				var sCallbackFunc = "fn_callBack";
        				var sTranType     = "U"; // U:저장/삭제, S:조회
        			}else if(paraMode == "U"){
        				var sParams = "";
        				var sSvcID        = "updateServiceRqsUnaplComp";
        				var sURL          = "svc::rest/bl/updateServiceRqsUnaplComp";	
        				var sInDatasets   = "ds_unapl=ds_unapl";
        				var sOutDatasets  = "";	
        				var sArgument     = sParams;
        				var sCallbackFunc = "fn_callBack";
        				var sTranType     = "U"; // U:저장/삭제, S:조회
        			}
        			
        			this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        			btn_save_enable = false;
        		}
        	}
        	else {
        		this.alert("중복확인을 해주세요.");
        	}
        }

        /*중복확인*/
        this.btn_comnameCheck_onclick = function(obj,e)
        {
        	if(this.gfn_isNull(this.edit_gln.value)){
        		this.alert("GLN 계정을 입력해주세요");
        		this.edit_gln.setFocus();
        		return false;
        	}
        	
        	if(this.gfn_isNull(this.edit_compname.value)){
        		this.alert("회사명을 입력해주세요");
        		this.edit_compname.setFocus();
        		return false;
        	}
        	
        	var sParams = "COMPGLN="+this.gfn_nullToEmpty(this.edit_gln.value);
        	var sSvcID        = "checkRqsUnaplCompGln";
        	var sURL          = "svc::rest/bl/checkRqsUnaplCompGln";	
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_unapl=ds_unapl";	
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회  
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.edit_gln_ontextchange = function(obj,e)
        {
        	btn_save_enable = false;
        }

        this.edit_compname_ontextchange = function(obj,e)
        {
        	btn_save_enable = false;
        }

        this.btn_comname_onclick = function(obj,e)
        {
        	var oArg = "";
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_compopupAfter";    
        	this.gfn_openPopup("trplSearchPopup","OMG.BL::OMG_DS_SC_7230_P01.xfdl",oArg,sOption,sPopupCallBack);
        }

        /*업체조회 팝업콜백 함수*/
        this.fn_compopupAfter = function(strId,strVal)
        {
        	if(strVal != ''){
        		var paramsArr = strVal.split(",");
        	
        		if(strId == "trplSearchPopup"){
        			this.edit_gln.set_value(paramsArr[0]);
        			this.edit_compname.set_value(paramsArr[1]);
        		}
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.popup01_onload, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.btn_close2.addEventHandler("onclick", this.btn_close_onclick, this);
            this.edit_compname.addEventHandler("ontextchange", this.edit_compname_ontextchange, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.edit_gln.addEventHandler("ontextchange", this.edit_gln_ontextchange, this);
            this.btn_comname.addEventHandler("onclick", this.btn_comname_onclick, this);
            this.btn_comnameCheck.addEventHandler("onclick", this.btn_comnameCheck_onclick, this);
            this.Static05.addEventHandler("onclick", this.Static05_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_7131.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
