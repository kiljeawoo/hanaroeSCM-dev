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
                this.set_name("Sample008_AuthorityWorkplace");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "46", "45", "431", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "486", "45", "120", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Get");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Sample008_AuthorityWorkplace");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::AuthorityWorkplace.xfdl");
        };
        
        // User Script
        this.addIncludeScript("Sample008_AuthorityWorkplace.xfdl", "lib::comLib.xjs");
        this.registerScript("Sample008_AuthorityWorkplace.xfdl", function() {
        /*************************************************************************
        * Combo ID    : cbo_authorityWorkplace
        * Checkbox ID : chk_all
        *
        * 1.화면에 Div생성(Width/Height = 431/21)
        * 2.Div의 url에 common::AuthorityWorkplace.xfdl 입력
        * 3.Combo값 -> 생성한 Div ID.cbo_authorityWorkplace.value
        * 4.Checkbox값 -> 생성한 Div ID.chk_all.value
        **************************************************************************/
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj,e);	
        	this.Div00.setFunctionName("fn_afterCall");	
        }

        this.fn_afterCall = function(sVal)
        {
        	alert("sVal>> "+sVal);
        }

        this.Button00_onclick = function(obj,e)
        {
        	trace(this.Div00.cbo_authorityWorkplace.value);
        	trace(this.Div00.chk_all.value);
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("Sample008_AuthorityWorkplace.xfdl");
        this.loadPreloadList();
       
    };
}
)();
