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
                this.set_cssclass("frm_WF_PopupBg");
                this.set_titletext("사무소 조회");
                this._setFormPosition(0,0,900,474);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dept", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOIN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_my", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"POS\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_DSC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_ok", "absolute", null, "427", "54", "29", "77", null, this);
            obj.set_taborder("6");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel", "absolute", null, "427", "54", "29", "16", null, this);
            obj.set_taborder("7");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "0", "38", "32", "0", null, this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("16");
            obj.set_text("소속사업장 조회");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "15", "115", null, null, "15", "58", this);
            obj.set_taborder("17");
            obj.set_binddataset("ds_dept");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"180\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"68\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"사업장코드\"/><Cell col=\"1\" text=\"사업장명\"/><Cell col=\"2\" text=\"사업자번호\"/><Cell col=\"3\" text=\"사업장유형\"/><Cell col=\"4\" text=\"사무소코드\"/><Cell col=\"5\" text=\"사무소명\"/><Cell col=\"6\" text=\"선택\"/></Band><Band id=\"body\" style=\"selectcolor:EXPR(MY == 'Y' ? '#3333ffff' : '#333333ff');cellcolor:EXPR(MY == 'Y' ? '#3333ffff' : '#333333ff');cellcolor2:EXPR(MY == 'Y' ? '#3333ffff' : '#333333ff');\"><Cell text=\"bind:NA_BZPLC\"/><Cell col=\"1\" text=\"bind:CLNTNM\"/><Cell col=\"2\" text=\"bind:BIZ_NUMBER\" mask=\"@@@-@@-@@@@@\"/><Cell col=\"3\" text=\"expr:DEPT_DSC == '01' ? '본부' : DEPT_DSC == '02' ? '사업장(직영점)' : '사업장(범농협)'\"/><Cell col=\"4\" text=\"expr:DEPT_DSC == '03' ? '없음' : DEPT_ID\"/><Cell col=\"5\" text=\"expr:DEPT_DSC == '03' ? '없음' : DEPT_NAME\"/><Cell col=\"6\" style=\"color:EXPR(comp.parent.fn_getJoinState(DEPT_ID, DEPT_DSC, NA_BZPLC, JOIN_YN, 'CLR'));color2:EXPR(comp.parent.fn_getJoinState(DEPT_ID, DEPT_DSC, NA_BZPLC, JOIN_YN, 'CLR'));selectcolor:EXPR(comp.parent.fn_getJoinState(DEPT_ID, DEPT_DSC, NA_BZPLC, JOIN_YN, 'CLR'));\" expr=\"expr:comp.parent.fn_getJoinState(DEPT_ID, DEPT_DSC, NA_BZPLC, JOIN_YN)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "47", "60", "29", "-80", null, this);
            obj.set_taborder("19");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Popup");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_info", "absolute", "15", "427", "691", "35", null, null, this);
            obj.set_taborder("22");
            obj.set_text("※ 소속사업장 관련 문의는 경제통합시스템에 문의바랍니다.\r\n※ 선택한 사업장이 하나로유통사무소(사업장유형-본부 or 직영점)일 경우 하나로유통 사용자 등록이 필요합니다.");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "15", "45", null, "60", "15", null, this);
            obj.set_taborder("24");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("sta_type", "absolute", "15", "5", "165", "21", null, null, this.div_search);
            obj.set_taborder("55");
            obj.set_text("소속사업장 조회 유형");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "32", "165", "21", null, null, this.div_search);
            obj.set_taborder("61");
            obj.set_text("하나로유통 사용자 정보");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_userid", "absolute", null, "5", "141", "21", "15", null, this.div_search);
            obj.set_taborder("64");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_my", "absolute", "175", "32", "430", "21", null, null, this.div_search);
            obj.set_taborder("62");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_font("bold 9 Gulim");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_user", "absolute", "175", "5", "430", "21", null, null, this.div_search);
            obj.set_taborder("63");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_font("bold 9 Gulim");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_type00", "absolute", null, "5", "80", "21", "156", null, this.div_search);
            obj.set_taborder("65");
            obj.set_text("사원번호 :");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_type01", "absolute", "155", "5", "15", "21", null, null, this.div_search);
            obj.set_taborder("66");
            obj.set_text(":");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_type02", "absolute", "154", "32", "15", "21", null, null, this.div_search);
            obj.set_taborder("67");
            obj.set_text(":");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center");
            this.div_search.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 60, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("24");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 900, 474, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_cssclass("frm_WF_PopupBg");
            		p.set_titletext("사무소 조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_5115_P01_backup.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_5115_P01_backup.xfdl", function() {
        //include "lib::comLib.xjs";

        this.MODE;

        this.form_onload = function(obj,e)
        {
        	if (this.gfn_isNull(application.gv_userId)) {
        		this.div_search.edt_userid.set_value(this.parent.MB_ID);
        		this.div_search.sta_type.set_text("소속사업장 조회 유형");
        		this.div_search.sta_user.set_text(this.parent.USR_TPC == "02" ? "본부" : "사업장(직영점, 범농협)");
        		this.MODE = "JOIN";
        	} else {
        		this.div_search.sta_type.set_text("현소속 정보");
        		this.div_search.sta_user.set_text(application.gv_glnCode + " / " + application.gv_companyName + " / " + (application.gv_userType == "02" ? "본부" : "사업장") + " 회원");
        		this.div_search.edt_userid.set_value(application.gv_userId);
        		this.MODE = "CHG";
        	}
        	this.call_dept();
        }

        /*조직도 불러오기*/
        this.call_dept = function()
        {
        	var param = "userId=" + this.div_search.edt_userid.value;
        	var sSvcID = "p_search"; //통신아이디
        	var sURL = "svc::rest/pt/usrinf/retriveNhUserBzplc";
        	var sInDatasets = ""; //보내는데이터셋
        	var sOutDatasets = "ds_dept=ds_bzplc ds_my=ds_my";
        	var sArgument = param; // 파라미터
        	var sCallbackFunc = "fn_callBack" ;//콜백
        	var tranType = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID == "p_search") {
        			if (this.parent.USR_TPC == "02") {
        				this.ds_dept.filter("DEPT_DSC == '01'");
        			} else if (this.parent.USR_TPC == "03") {
        				this.ds_dept.filter("DEPT_DSC != '01'");
        			}
        			
        			// 하나로유통 사용자 등록정보
        			var myDept;
        			if (this.ds_my.rowcount > 0) {
        				this.div_search.sta_my.set_text("등록됨 / " + this.ds_my.getColumn(0, "DEPT_ID") + " / " + this.ds_my.getColumn(0, "DEPT_NAME"));
        				myDept = this.ds_my.getColumn(0, "DEPT_ID");
        			} else {
        				this.div_search.sta_my.set_text("등록안됨");
        			}
        			
        			var dept = this.parent.DEPT_ID;
        			if (!this.gfn_isNull(application.gv_userId)) {
        				var curDsc = this.ds_dept.getColumn(this.ds_dept.findRow("NA_BZPLC", application.gv_glnCode), "DEPT_DSC"); // 현사업장 구분(01:본부,02:직영점,03:범농협)
        				
        				this.ds_dept.addColumn("MY", "string");
        				var row = -1;
        				if (curDsc == "03" || (this.gfn_isNull(dept) && this.gfn_isNull(myDept))) {
        					// 하나로유통X, 범농협O
        					row = this.ds_dept.findRow("NA_BZPLC", application.gv_glnCode);
        				} else {
        					if (this.gfn_isNull(dept)) {
        						dept = myDept;
        						this.alert("하나로유통 사용자에 등록되어 있으나, 회원정보에 소속부서 정보가 누락되어 있습니다.\n현소속으로 조회되는 소속부서로 변경해주시기 바랍니다.");
        					}
        					row = this.ds_dept.findRow("DEPT_ID", dept);
        				}
        				this.ds_dept.setColumn(row, "MY", "Y");
        			}
        		}
        	}
        }

        /*
         * 가입상태에 따른 데이터
         * expr:comp.parent.parent.fn_getJoinState(DEPT_ID, DEPT_DSC, NA_BZPLC, JOIN_YN, @type)
         * @type : 메시지 MSG, 색상 CLR, 행 ROW
         */
        this.fn_getJoinState = function(deptId,deptDsc,gln,joinYn,type)
        {
        	var curDept = this.parent.DEPT_ID;
        	if (this.gfn_isNull(curDept) && deptDsc != "03" && this.ds_my.rowcount > 0) {
        		curDept = this.ds_my.getColumn(0, "DEPT_ID");
        	}
        	
        	if (deptId == curDept || this.gfn_isNull(curDept) && application.gv_glnCode == gln) {
        		return type == "CLR" ? "#3333ffff" : "현소속";
        	} else if (joinYn == "Y" || (joinYn == "P" && this.MODE == "CHG")) {
        		return type == "CLR" ? "#333333ff" : "선택가능";
        	}
        	return type == "CLR" ? "#ff0000ff" : "선택불가";
        }

        /* 부서 검색기능 */
        this.btn_search_onclick = function(obj,e)
        {
        	this.call_dept();
        }

        this.edt_search_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.call_dept();
        	}
        }

        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        this.fn_sendResult = function()
        {
        	var my = this.gfn_nullToEmpty(this.ds_dept.getColumn(this.ds_dept.rowposition, "MY"));
        	var dsc = this.ds_dept.getColumn(this.ds_dept.rowposition, "DEPT_DSC");
        	if (my == "Y" && !this.gfn_isNull(this.parent.DEPT_ID)) {
        		if ((dsc == "01" && application.gv_userType == "03") || (dsc == "02" && application.gv_userType == "02")) {
        			this.alert("현재 소속된 사업장과 동일하므로, 회원유형만 변경됩니다.");
        		} else {
        			this.alert("현재 소속된 사업장입니다.");
        			return;
        		}
        	}
        	
        	var joinYn = this.ds_dept.getColumn(this.ds_dept.rowposition, "JOIN_YN");
        	if (joinYn == "N") {
        		this.alert("하나로유통 사용자로 등록되어 있지 않아 선택하실 수 없습니다.");
        		return;
        	} else if (this.MODE == "JOIN" && joinYn == "P") {
        		this.alert("하나로유통 사용자 정보에 등록된 사무소코드와 일치하지 않아 선택하실 수 없습니다.");
        		return;
        	}
        	
        	if (!this.gfn_isNull(this.parent.USR_TPC)) {
        		if (this.parent.USR_TPC == "02" && dsc != "01") {
        			this.alert("본부 회원으로 가입할 수 없는 사업장입니다.\n회원가입 구분 선택 시 '사업장'을 선택하여 진행하시기 바랍니다.");
        			return;
        		} else if (this.parent.USR_TPC == "03" && dsc == "01") {
        			this.alert("사업장 회원으로 가입할 수 없는 사업장입니다.\n회원가입 구분 선택 시 '본부'를 선택하여 진행하시기 바랍니다.");
        			return;
        		}
        	}
        	
        	var dept = this.gfn_nullToEmpty(this.ds_dept.getColumn(this.ds_dept.rowposition, "DEPT_ID")); // 5
        	var gln = this.gfn_nullToEmpty(this.ds_dept.getColumn(this.ds_dept.rowposition, "NA_BZPLC")); // 0
        	var nm = this.gfn_nullToEmpty(this.ds_dept.getColumn(this.ds_dept.rowposition, "CLNTNM")); // 1
        	var bzno = this.gfn_nullToEmpty(this.ds_dept.getColumn(this.ds_dept.rowposition, "BIZ_NUMBER")); // 2
        	var deptNm = this.gfn_nullToEmpty(this.ds_dept.getColumn(this.ds_dept.rowposition, "DEPT_NAME")); // 3
        	
        	var dscNm;
        	if (dsc == '01') {
        		dscNm = "본부"; // 4
        	} else if (dsc == '02') {
        		dscNm = "사업장((주)농협하나로유통 직영점)"; // 4
        	} else {
        		dscNm = "사업장(범농협)"; // 4
        		dept = ""; // 5
        		deptNm = "없음(범농협)"; // 6
        	}

        	this.close(gln+"#"+nm+"#"+dsc+"#"+dscNm+"#"+bzno+"#"+dept+"#"+deptNm);
        }

        this.btn_ok_onclick = function(obj,e)
        {
        	this.fn_sendResult();
        }

        this.Grid00_oncelldblclick = function(obj,e)
        {
        	this.fn_sendResult();
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_dept.addEventHandler("oncolumnchanged", this.ds_dept_oncolumnchanged, this);
            this.ds_my.addEventHandler("oncolumnchanged", this.ds_dept_oncolumnchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_ok.addEventHandler("onclick", this.btn_ok_onclick, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_cancel_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.Static06.addEventHandler("onclick", this.Static06_onclick, this);
            this.Grid00.addEventHandler("oncelldblclick", this.Grid00_oncelldblclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_5115_P01_backup.xfdl");

       
    };
}
)();
