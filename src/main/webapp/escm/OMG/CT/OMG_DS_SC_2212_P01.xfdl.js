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
                this.set_name("POPUP_RGN");
                this.set_cssclass("frm_WF_PopupBg");
                this.set_titletext("계약서최종서명 안내메일 내용 확인");
                this._setFormPosition(0,0,686,564);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_body", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CTRW_CNTN\" type=\"STRING\" size=\"4000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_close", "absolute", null, "0", "29", "32", "0", null, this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("16");
            obj.set_text("계약서최종서명 안내메일 내용 확인");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00", "absolute", "5", "35", "676", "521", null, null, this);
            obj.set_taborder("26");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 686, 564, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_cssclass("frm_WF_PopupBg");
            		p.set_titletext("계약서최종서명 안내메일 내용 확인");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_2212_P01.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_2212_P01.xfdl", function() {
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
        	this.WebBrowser00.set_url(application.gv_serviceHtml_url + "escm/CTMail/ct_mail.html");
        	this.search();
        }

        
        /*조회*/
        this.search = function()
        {
        	var sSvcID        = "search";//통신아이디
        	var sURL          = "svc::rest/ct/eltctrw/retrieveEltCtrwMailList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_body=ds_body";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = "";// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID == "search") {
        			var vHtml = this.WebBrowser00.getProperty("document").getProperty("body");
        			this.xmlData = this.ds_body.getColumn(0, "CTRW_CNTN");	
        			vHtml.setProperty( "innerHTML", this.xmlData );
        		}		
        	}
        }

        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close("N");
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_close.addEventHandler("onclick", this.btn_cancel_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_2212_P01.xfdl");

       
    };
}
)();
