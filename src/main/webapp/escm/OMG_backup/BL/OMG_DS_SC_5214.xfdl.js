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
                this.set_name("OMG_DS_SC_5214");
                this.set_titletext("부가정보일별사용량");
                this._setFormPosition(0,0,730,520);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_naTrplc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_result", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RMS_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DLY_UGQT\" type=\"STRING\" size=\"256\"/><Column id=\"BL_DLY_UGQT\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static29", "absolute", "1.51%", "0", null, "20", "-22.47%", null, this);
            obj.set_taborder("117");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "1.51%", "499", null, null, "-26.85%", "0", this);
            obj.set_taborder("138");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "1.49%", "685", null, "20", "-22.42%", null, this);
            obj.set_taborder("140");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_result", "absolute", "11", "20", "705", null, null, "20", this);
            obj.set_taborder("148");
            obj.set_autofittype("col");
            obj.set_useselcolor("false");
            obj.set_readonly("true");
            obj.set_binddataset("ds_result");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/><Column size=\"316\"/><Column size=\"130\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"사용월\"/><Cell col=\"1\" text=\"사업장\"/><Cell col=\"2\" text=\"사용량(건)\"/></Band><Band id=\"body\"><Cell style=\"align:center middle;\" text=\"bind:RMS_DT\" mask=\"####-##\"/><Cell col=\"1\" style=\"align:left middle;\" text=\"bind:CLNTNM\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right middle;padding:2 5 0 5;\" text=\"bind:BL_DLY_UGQT\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합계\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(BL_DLY_UGQT)&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static87", "absolute", "716", "1", "14", "1195", null, null, this);
            obj.set_taborder("149");
            obj.set_text("14");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "0", "1", "1.49%", "1195", null, null, this);
            obj.set_taborder("150");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 730, 520, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("부가정보일별사용량");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","divSearch.edt_menuId","value","ds_in","MENU_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divSearch.cbo_menuLevel","value","ds_in","MENU_LEVEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divSearch.edt_menuName","value","ds_in","MENU_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divSearch.edt_svcGroup","value","ds_in","SVC_GROUP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divSearch.edt_fileName","value","ds_in","FILE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divSearch.edt_fileType","value","ds_in","FILE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","divSearch.cbo_displayYn","value","ds_in","DISPLAY_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","divSearch.cbo_useYn","value","ds_in","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_5214.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_5214.xfdl", function() {
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {   
        	this.gfn_setInitForm(obj, e); // 공통
        	this.grd_result.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        }

        /***************************************************
        	부가정보사용량조회
        ****************************************************/
        this.fn_retrieveAdinfDtpBrk = function(RMS_MM,RMS_TRPL_C)
        {
        	var sParam = "RMS_MM=" + RMS_MM
        			   + " RMS_TRPL_C=" + RMS_TRPL_C;
        	
        	var sSvcID        = "retrieveAdinfDtpBrkList";
        	var sURL          = "svc::rest/pt/myinf/retrieveAdinfDtpBrkList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_result=ds_result";
        	var sArgument     = sParam;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }
         
        /***************************************************
        	callback메소드
        ****************************************************/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}
        	
        	if (svcID == "retrieveAdinfDtpBrkList") {
        		if (this.ds_result.rowcount == 0) {
        			//this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			return;
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_naTrplc.addEventHandler("onrowposchanged", this.ds_naTrplc_onrowposchanged, this);
            this.addEventHandler("onload", this.form_onload, this);

        };

        this.loadIncludeScript("OMG_DS_SC_5214.xfdl");

       
    };
}
)();
