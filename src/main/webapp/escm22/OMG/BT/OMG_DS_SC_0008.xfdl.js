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
                this.set_name("OMG_DS_SC_0001");
                this.set_titletext("계약의 특징");
                this.set_scrollbars("autovert");
                this._setFormPosition(0,0,993,1100);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div", "absolute", "0", "0", null, null, "0", "0", this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new WebBrowser("WebB", "absolute", "0", "0", null, null, "0", "0", this.div);
            obj.set_taborder("0");
            this.div.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.set_text("Div00");

            	}
            );
            this.div.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 1100, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("계약의 특징");
            		p.set_scrollbars("autovert");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_0008.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_0008.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        
        /* Form Load */
        this.OMG_DS_SC_1110_onload = function(obj,e)
        {
        trace(application.gv_server_url);
        	this.div.WebB.set_url( application.gv_serviceHtml_url+"escm/CTR/OMG_DS_SC_0008.html" );

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.OMG_DS_SC_1110_onload, this);

        };

        this.loadIncludeScript("OMG_DS_SC_0008.xfdl", true);

       
    };
}
)();
