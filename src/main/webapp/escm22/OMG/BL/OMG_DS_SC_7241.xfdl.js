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
                this.set_titletext("서비스중지재개이력");
                this._setFormPosition(0,0,530,353);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_comp_svc_amn_hst", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_STS_RG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_STS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_cancel", "absolute", null, null, "54", "29", "17", "17", this);
            obj.set_taborder("7");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "76", "17", "73", null, null, this);
            obj.set_taborder("8");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", null, "76", "17", "67", "0", null, this);
            obj.set_taborder("9");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "363", "336", "91", "17", null, null, this);
            obj.set_taborder("10");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "363", "297", "91", "10", null, null, this);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "242", "32", "91", "15", null, null, this);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "0", "37", "32", "0", null, this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("16");
            obj.set_text("서비스중지재개이력");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_amn_hst", "absolute", "17", "47", "496", null, null, "56", this);
            obj.set_taborder("17");
            obj.set_binddataset("ds_comp_svc_amn_hst");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"170\"/><Column size=\"110\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"거래처코드\"/><Cell col=\"1\" text=\"거래처명\"/><Cell col=\"2\" text=\"변경일\"/><Cell col=\"3\" text=\"서비스상태\"/></Band><Band id=\"body\"><Cell text=\"bind:NA_TRPL_C\"/><Cell col=\"1\" text=\"bind:CLNTNM\"/><Cell col=\"2\" text=\"bind:SVC_STS_RG_DTM\" mask=\"####-##-## ##:##\"/><Cell col=\"3\" text=\"bind:SVC_STS_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_NA_TRPL_C", "absolute", "0", null, "10", "21", null, "0", this);
            obj.set_taborder("18");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 530, 353, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_cssclass("frm_WF_PopupBg");
            		p.set_titletext("서비스중지재개이력");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_7241.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_7241.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.objRtnArr = new Array(2); //팝업창 close시 전달할 값을 위한 배열 선언

        this.form_onload = function(obj,e)
        {
        	trace("NA_TRPL_C : "+this.getOwnerFrame().NA_TRPL_C);
        	//trace("dsArg : "+this.parent.dsArg.rowcount);
        	this.edt_NA_TRPL_C.set_value(this.getOwnerFrame().NA_TRPL_C);
        	trace("NA_TRPL_C=" + this.edt_NA_TRPL_C.value);
        	this.fn_search();
        }

        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        this.fn_search = function()
        {
        		var sParams = "NA_TRPL_C=" + this.edt_NA_TRPL_C.value;

        		var sSvcID        = "retrieve";
        		var sURL          = "svc::rest/bl/retrieveCompSvcAmnHst"
        		var sInDatasets   = "";
        		var sOutDatasets  = "ds_comp_svc_amn_hst=ds_comp_svc_amn_hst";
        		var sArgument     = sParams;
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "S"; // U:저장/삭제, S:조회

        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        // 콜백 함수
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        	 	if(svcID == "retrieve"){
        	 	trace("this.ds_comp_svc_amn_hst.rowcount" + this.ds_comp_svc_amn_hst.rowcount);
        	 		if(this.ds_comp_svc_amn_hst.rowcount > 0)
        			{ 		
        			}	
        	 		else if(this.ds_comp_svc_amn_hst.rowcount == 0){
        	 			this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        	 		}
        	 	}
        	 	else{
        	 		if(this.ds_comp_svc_amn_hst.rowcount == 0){
        	 			this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        	 		}
        	 	}
        	 }	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_cancel_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_7241.xfdl", true);

       
    };
}
)();
