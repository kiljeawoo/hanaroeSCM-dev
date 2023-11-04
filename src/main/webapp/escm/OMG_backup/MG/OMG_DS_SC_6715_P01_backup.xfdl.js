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
                this.set_name("OMG_DS_SC_5161");
                this.set_titletext("하나로유통임직원추가");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,767,210);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_user", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"POS\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_POS\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static14", "absolute", "126", "160", null, "29", "17", null, this);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "126", "132", null, "29", "17", null, this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "126", "76", null, "29", "17", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "126", "104", null, "29", "17", null, this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "47", "41", "21", "13", null, this);
            obj.set_taborder("8");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("text_title", "absolute", "17", "51", "198", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_text("임·직원 정보");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "17", "132", "160", "29", null, null, this);
            obj.set_taborder("10");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "750", "76", "17", "67", null, null, this);
            obj.set_taborder("13");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "673", "32", "91", "15", null, null, this);
            obj.set_taborder("14");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "99", "17", "67", null, null, this);
            obj.set_taborder("15");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "674", "68", "91", "8", null, null, this);
            obj.set_taborder("16");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("17");
            obj.set_text("하나로유통 임·직원 관리");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Button("brn_cls", "absolute", "729", "0", "37", "32", null, null, this);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "47", "43", "21", "55", null, this);
            obj.set_taborder("7");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "17", "76", "160", "29", null, null, this);
            obj.set_taborder("19");
            obj.set_text("개인번호(사원번호)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "17", "104", "160", "29", null, null, this);
            obj.set_taborder("20");
            obj.set_text("사무소코드");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", "331", "80", "69", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("중복검사");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_DEPT_ID", "absolute", "181", "108", "148", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_maxlength("20");
            obj.set_lengthunit("ascii");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_POS", "absolute", "181", "136", "148", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_maxlength("64");
            obj.set_lengthunit("ascii");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_USER_ID", "absolute", "181", "80", "148", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_DEPT_NAME", "absolute", "539", "108", "148", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("64");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "375", "104", "160", "29", null, null, this);
            obj.set_taborder("58");
            obj.set_text("사무소명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_GRADE", "absolute", "539", "136", "148", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("64");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "375", "132", "160", "29", null, null, this);
            obj.set_taborder("60");
            obj.set_text("직명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "17", "160", "160", "29", null, null, this);
            obj.set_taborder("61");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_USER_NAME", "absolute", "181", "164", "148", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search_high", "absolute", "331", "108", "21", "21", null, null, this);
            obj.set_taborder("64");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 767, 210, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("하나로유통임직원추가");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edt_DEPT_ID","value","ds_user","DEPT_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_POS","value","ds_user","POS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edt_USER_ID","value","ds_user","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edt_DEPT_NAME","value","ds_user","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_GRADE","value","ds_user","GRADE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edt_USER_NAME","value","ds_user","USER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_6715_P01_backup.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_6715_P01_backup.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.DUP_CHECK; // 등록가능하면 ID 기록

        this.form_onload = function(obj,e) //공통
        {
           this.gfn_setInitForm(obj, e);
        }

        this.fn_afterFormOnload = function() //페이지 로딩후 실행부분
        {
        	this.ds_user.clearData();
        	this.ds_user.addRow();
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        /*저장 버튼 이벤트*/
        this.btn_save_onclick = function(obj,e)
        {
        	if (this.fn_validationCheck()) {
        		this.ds_user.setColumn(0, "STATE", "NEW");
        		this.insert();
        	} else {
        		this.ds_user.setColumn(0, "STATE", "NONE");
        	}
        }

        /*창닫기 버튼 이벤트*/
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        //사업자번호로 거래처 정보조회하기
        this.btn_search_onclick = function(obj,e)
        {	
        	if (this.gfn_isNull(this.edt_USER_ID.value)) {
        		alert("개인번호를 입력해주세요.");
        		this.edt_USER_ID.setFocus();
        		return;
        	}
        	
        	var param = "t=U id="+this.edt_USER_ID.value;
        	
        	var sSvcID        = "checkHanaroDataExist";
        	var sURL          = "svc::rest/mg/nh/checkHanaroDataExist";
        	var sInDatasets   = "";
        	var sOutDatasets  = "";
        	var sArgument     =  param;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회	
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /* 등록시 사용되는 Validation Check */
        this.fn_validationCheck = function()
        {
        	if (this.gfn_isNull(this.DUP_CHECK)) {
        		this.alert("개인번호 중복검사를 먼저 진행해주세요.");
        		return false;
        	} else if (this.DUP_CHECK != this.edt_USER_ID.value) {
        		this.alert("입력한 개인번호가 변경되어 다시 중복검사를 진행해주세요.");
        		return false;
        	}
        	if (this.gfn_isNull(this.edt_USER_ID.value)) {
        		alert("개인번호를 입력해주세요.");	
        		this.edt_USER_ID.setFocus();
        		return false;
        	}
        	if (this.gfn_isNull(this.edt_DEPT_ID.value)) {
        		alert("사무소코드를 선택해주세요.");	
        		this.edt_DEPT_ID.setFocus();
        		return false;
        	}
        // 	if (this.gfn_isNull(this.edt_DEPT_NAME.value)) {
        // 		alert("사무소명을 입력해주세요.");
        // 		this.edt_DEPT_NAME.setFocus();
        // 		return false;
        // 	}
        	if (this.gfn_isNull(this.edt_POS.value)) {
        		alert("직급을 입력해주세요.");	
        		this.edt_POS.setFocus();
        		return false;
        	}
        	if (this.gfn_isNull(this.edt_GRADE.value)) {
        		alert("직명을 입력해주세요.");	
        		this.edt_GRADE.setFocus();
        		return false;
        	}
        	if (this.gfn_isNull(this.edt_USER_NAME.value)) {
        		alert("성명을 입력해주세요.");	
        		this.edt_USER_NAME.setFocus();
        		return false;
        	}
            return true;
        }

        /* 추가등록 */
        this.insert = function()
        {
        	var sSvcID        = "p_save";
        	var sURL          = "svc::rest/mg/nh/insertHanaroUserData";
        	var sInDatasets   = "ds_hanaro=ds_user";
        	var sOutDatasets  = "";
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        //callback메소드
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		if (svcID =="checkHanaroDataExist" && ErrorCode == -2) {
        			this.alert("이미 등록된 개인번호입니다.");
        			this.edt_USER_ID.set_value("");
        			this.edt_USER_ID.setFocus();
        			this.DUP_CHECK = "";
        		} else {
        			this.gfn_getMessage("alert", "error.message.server.exception");
        		}
        	} else {
        		if (svcID =="p_save") {
        			if (ErrorCode == 0) {
        				this.gfn_getMessage("alert", "result.message.save.success");
        				this.close("I");
        			}
        		} else if (svcID =="checkHanaroDataExist") {
        			this.alert("등록 가능한 개인번호입니다.");
        			this.DUP_CHECK = this.edt_USER_ID.value;
        			this.edt_DEPT_ID.setFocus();
        		}
        	}
        }

        this.btn_search_high_onclick = function(obj,e)
        {
        	var oArg = {};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("popDeptHigh","OMG.MG::OMG_DS_SC_6716_P02.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	if (!this.gfn_isNull(strVal)) {
        		this.edt_DEPT_ID.set_value(strVal.split("#")[0]);
        		this.edt_DEPT_NAME.set_value(strVal.split("#")[1]);
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_user.addEventHandler("oncolumnchanged", this.ds_user_oncolumnchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.Static07.addEventHandler("onclick", this.Static07_onclick, this);
            this.Static06.addEventHandler("onclick", this.Static06_onclick, this);
            this.brn_cls.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.Static01.addEventHandler("onclick", this.Static07_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.Static02.addEventHandler("onclick", this.Static07_onclick, this);
            this.Static10.addEventHandler("onclick", this.Static07_onclick, this);
            this.Static11.addEventHandler("onclick", this.Static07_onclick, this);
            this.btn_search_high.addEventHandler("onclick", this.btn_search_high_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_6715_P01_backup.xfdl");

       
    };
}
)();
