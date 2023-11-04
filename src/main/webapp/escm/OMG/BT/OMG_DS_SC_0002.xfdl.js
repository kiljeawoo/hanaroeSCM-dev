﻿(function()
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
                this.set_name("OMG_DS_SC_0002");
                this.set_titletext("계약의 특징2");
                this.set_scrollbars("autovert");
                this._setFormPosition(0,0,800,1100);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div", "absolute", "0", "0", "800", null, null, "0", this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);
            obj = new WebBrowser("WebB", "absolute", "0", "0", "800", null, null, "0", this.div);
            obj.set_taborder("0");
            this.div.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 800, 0, this.div,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.set_text("Div00");
            		p.style.set_align("left middle");

            	}
            );
            this.div.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 800, 1100, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("계약의 특징2");
            		p.set_scrollbars("autovert");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("OMG_DS_SC_0002.xfdl", function() {
        /* Form Load */
        this.OMG_DS_SC_1110_onload = function(obj,e)
        {
        	this.div.WebB.set_url(application.gv_serviceHtml_url  +"escm/CTR/OMG_DS_SC_0002.html");
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.OMG_DS_SC_1110_onload, this);

        };

        this.loadIncludeScript("OMG_DS_SC_0002.xfdl");

       
    };
}
)();
