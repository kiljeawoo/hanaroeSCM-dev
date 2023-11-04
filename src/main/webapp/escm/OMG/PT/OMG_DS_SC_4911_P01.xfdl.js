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
                this.set_titletext("부서 조회");
                this._setFormPosition(0,0,387,474);
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
            obj._setContents("<ColumnInfo><Column id=\"DEPT_ID\" type=\"STRING\" size=\"64\"/><Column id=\"DEPT_HIGH\" type=\"STRING\" size=\"64\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"128\"/><Column id=\"DEPT_SORT\" type=\"STRING\" size=\"32\"/><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"13\"/><Column id=\"DEPT_LEVEL\" type=\"STRING\" size=\"1\"/><Column id=\"LEVEL_ID\" type=\"STRING\" size=\"30\"/><Column id=\"DEPT_U_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("Static01", "absolute", "295", "456", "91", "17", null, null, this);
            obj.set_taborder("10");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "295", "417", "91", "10", null, null, this);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "288", "33", "91", "15", null, null, this);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "419", "0", "37", "32", null, null, this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "3", "3", "345", "32", null, null, this);
            obj.set_taborder("16");
            obj.set_text("부서 조회");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "39", "80", null, "336", "39", null, this);
            obj.set_taborder("17");
            obj.set_binddataset("ds_dept");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"218\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"조직도\"/></Band><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" text=\"expr:DEPT_U_NAME ==null ? DEPT_NAME : DEPT_U_NAME + &quot; &gt; &quot;+ DEPT_NAME\" treelevel=\"bind:DEPT_LEVEL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "40", "54", "29", "39", null, this);
            obj.set_taborder("18");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_search", "absolute", "39", "40", null, "29", "26.36%", null, this);
            obj.set_taborder("19");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 387, 474, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_cssclass("frm_WF_PopupBg");
            		p.set_titletext("부서 조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_4911_P01.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_4911_P01.xfdl", function() {
        //include "lib::comLib.xjs";

        this.objRtnArr = new Array(2); //팝업창 close시 전달할 값을 위한 배열 선언
        var dept_sort = "";
        var dept_name = "";
        var dept_level = "";
        this.form_onload = function(obj,e)
        {
        //	dept_sort=this.getOwnerFrame().dept_sort;
        //	dept_level = this.getOwnerFrame().dept_level;
        	this.call_dept();
        //	this.ds_dept.copyData(this.parent.dsdepArg);
        	
        }

        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        this.btn_ok_onclick = function(obj,e)
        {
        	this.objRtnArr[0] = this.ds_dept.getColumn(this.ds_dept.rowposition,"DEPT_ID");
        	this.objRtnArr[1] = this.ds_dept.getColumn(this.ds_dept.rowposition,"DEPT_NAME");
        	trace(this.objRtnArr.toString());

        	this.close(this.objRtnArr.toString());
        	
        }

        /*조직도 불러오기*/
        this.call_dept = function()
        {

        //	trace("조직도 불러오기");
        //	var sParams = "dept_sort=" + dept_sort + " " + "dept_level=" + dept_level;

        	var sParams = "deptName=" + this.gfn_nullToEmpty(this.edt_search.value);
        	
        //	trace("검색어 : "+ sParams);
        	
        	var sCallbackFunc = "fn_callBack";
        	var sSvcID        = "retrieveEmpeAmnList";
        	var sURL          = "svc::rest/pt/retrieveEmpeAmnListpop";	
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_dept=ds_dept";	
        	var sArgument     = sParams;
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        	// trace(this.ds_codeData.saveXML());
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "retrieveEmpeAmnList") {
        			this.gfn_selectTreePos(this.Grid00, "DEPT_ID", dept_id);

        			
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
        	
        	if(e.keycode == 13)
        	{
        		this.call_dept();
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_dept.addEventHandler("onrowposchanged", this.ds_dept_onrowposchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_ok.addEventHandler("onclick", this.btn_ok_onclick, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_cancel_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.Static06.addEventHandler("onclick", this.Static06_onclick, this);
            this.Grid00.addEventHandler("oncellclick", this.Div02_Grid00_oncellclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.edt_search.addEventHandler("onkeydown", this.edt_search_onkeydown, this);

        };

        this.loadIncludeScript("OMG_DS_SC_4911_P01.xfdl");

       
    };
}
)();
