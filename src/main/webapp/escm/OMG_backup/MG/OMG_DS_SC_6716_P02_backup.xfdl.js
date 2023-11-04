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
                this._setFormPosition(0,0,387,474);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_hanaro", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_HIGH\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"CHIEF_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_DEPT_HIGH\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_DEPT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_BIZ_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CHIEF_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_ok", "absolute", null, "427", "54", "29", "72", null, this);
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
            obj.set_text("사무소 조회");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "15", "80", null, "336", "15", null, this);
            obj.set_taborder("17");
            obj.set_binddataset("ds_hanaro");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사무소코드\"/><Cell col=\"1\" text=\"사무소명\"/><Cell col=\"2\" text=\"상위사무소코드\"/></Band><Band id=\"body\"><Cell text=\"bind:ORG_DEPT_ID\"/><Cell col=\"1\" text=\"bind:ORG_DEPT_NAME\"/><Cell col=\"2\" text=\"bind:ORG_DEPT_HIGH\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_deptid", "absolute", "15", "40", null, "29", "257", null, this);
            obj.set_taborder("18");
            obj.set_displaynulltext("사무소코드");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "40", "60", "29", "15", null, this);
            obj.set_taborder("19");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_deptnm", "absolute", "136", "40", null, "29", "80", null, this);
            obj.set_taborder("20");
            obj.set_displaynulltext("사무소명");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 387, 474, this,
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
        this.addIncludeScript("OMG_DS_SC_6716_P02_backup.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_6716_P02_backup.xfdl", function() {
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
        	this.call_dept();
        }

        /*조직도 불러오기*/
        this.call_dept = function()
        {
        	var di = this.gfn_nullToEmpty(this.edt_deptid.value);
        	var dn = this.gfn_nullToEmpty(this.edt_deptnm.value);
        	
        	var param = "t=D"
        		 + " di="+di
        		 + " dn="+dn;

        	var sSvcID        = "p_search";//통신아이디
        	var sURL          = "svc::rest/mg/nh/retrieveOrgNhData";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_hanaro=ds_hanaro";
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var tranType 	  = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        	// trace(this.ds_codeData.saveXML());
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID == "p_search") {
        			this.ds_hanaro.filter("ORG_USE_YN == 'Y'");
        		}
        	}
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
        	var id = this.ds_hanaro.getColumn(this.ds_hanaro.rowposition, "ORG_DEPT_ID");
        	var nm = this.ds_hanaro.getColumn(this.ds_hanaro.rowposition, "ORG_DEPT_NAME");

        	this.close(id+"#"+nm);
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
            this.ds_hanaro.addEventHandler("oncolumnchanged", this.ds_dept_oncolumnchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_ok.addEventHandler("onclick", this.btn_ok_onclick, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_cancel_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.Static06.addEventHandler("onclick", this.Static06_onclick, this);
            this.Grid00.addEventHandler("oncelldblclick", this.Grid00_oncelldblclick, this);
            this.edt_deptid.addEventHandler("onkeydown", this.edt_search_onkeydown, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.edt_deptnm.addEventHandler("onkeydown", this.edt_search_onkeydown, this);

        };

        this.loadIncludeScript("OMG_DS_SC_6716_P02_backup.xfdl");

       
    };
}
)();
