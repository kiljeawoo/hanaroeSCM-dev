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
                this.set_name("OMG_DS_SC_9080");
                this.set_titletext("계약서 확인");
                this.set_visible("true");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,458,129);
            }
            this.style.set_border("2 solid #067394ff");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("btn_newTop", "absolute", "0", "0", "456", "30", null, null, this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_Menulist");
            obj.set_text("계약서 확인");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close", "absolute", "416", "0", "37", "30", null, null, this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "17", "40", null, "39", "17", null, this);
            obj.set_taborder("18");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "15", "8", "120", "21", null, null, this.div_search);
            obj.set_taborder("1");
            obj.set_text("계약서 확인번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0", "-4", "15", "800", null, null, this.div_search);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_eltCtrwNo", "absolute", "138", "8", null, "21", "46", null, this.div_search);
            obj.set_taborder("11");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "213", "69", "103", "10", null, null, this);
            obj.set_taborder("32");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "347", "79", "91", "10", null, null, this);
            obj.set_taborder("33");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "344", "118", "91", "10", null, null, this);
            obj.set_taborder("34");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel", "absolute", null, "89", "42", "29", "17", null, this);
            obj.set_taborder("35");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok", "absolute", null, "89", "54", "29", "61", null, this);
            obj.set_taborder("36");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "355", "30", "91", "10", null, null, this);
            obj.set_taborder("37");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 39, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("18");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 458, 129, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_3212");
            		p.set_titletext("계약서 확인");
            		p.style.set_border("2 solid #067394ff");
            		p.set_visible("true");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_9080.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_9080.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs"

        this.OMG_DS_SC_9080_onload = function(obj,e)
        {

        	this.gfn_setInitForm(obj, e); //공통

        }

        

        this.fn_popupAfter = function(strId,strVal)
        {

        }

        this.fn_afterFormOnload = function()
        {

        }

        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        	
        }

        this.btn_Close_onclick = function(obj,e)
        {
        	this.close();
        }

        
        this.btn_confirm_onclick = function(obj,e)
        {
        	var edtEltCtrwNo=  this.div_search.edt_eltCtrwNo.value ;
        	
        	if( edtEltCtrwNo.length == 19) {
        		
        		var nh =  edtEltCtrwNo.substring(0,2);
        		var chgSqNo =    edtEltCtrwNo.substring(2,5);
        		var eltCtrwNo =  edtEltCtrwNo.substring(5);
        	
        		if(nh == "NH"){
        			var ozParam = {
        			sId: 'OMG_DS_SC_211301',
        			sUrl: '/rest/oz/ct/eltctrw/osEltctrw',
        			paramType: 'param',
        			sParam: {ELT_CTRW_NO:eltCtrwNo, CHG_SQNO:chgSqNo}
        			};

        			this.ozViewer(ozParam ,"ozViewerPotal");	
        	}else{
        		alert("전자 계약서확인 번호를 잘못되었습니다. ");
        		return false;
        	}
        		
        		
        		

        	}else{
        		alert("전자 계약서확인 번호 자리수가 잘못 되었습니다.  ");
        		return false;
        	}
        		
        }

        this.OMG_DS_SC_9080_onkeydown = function(obj,e)
        {
        	if (e.keycode==13  ){
         		this.btn_ok.click() ;
         	}
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.OMG_DS_SC_9080_onload, this);
            this.addEventHandler("onkeydown", this.OMG_DS_SC_9080_onkeydown, this);
            this.btn_Close.addEventHandler("onclick", this.btn_Close_onclick, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_cancel_onclick, this);
            this.btn_ok.addEventHandler("onclick", this.btn_confirm_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_9080.xfdl", true);

       
    };
}
)();
