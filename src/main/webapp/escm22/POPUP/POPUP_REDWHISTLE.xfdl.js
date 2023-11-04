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
                this.set_name("POPUP_REDWHISTLE");
                this.set_titletext("부패방지신고센터");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,737,800);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_wrap", "absolute", "0", "0", null, "750", "0", null, this);
            obj.set_taborder("47");
            obj.set_scrollbars("autovert");
            this.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer00", "absolute", "0", "0", "737", "1042", null, null, this.div_wrap);
            obj.set_taborder("0");
            obj.set_stretch("fixaspectratio");
            obj.style.set_background("#ffffffff URL('theme://images/new/redwhistle.jpg') stretch");
            this.div_wrap.addChild(obj.name, obj);

            obj = new Button("btn_link", "absolute", "268", "761", "200", "34", null, null, this);
            obj.set_taborder("48");
            obj.set_text("부패행위신고센터로 이동하기");
            obj.set_cssclass("btn_INTRO_confirm");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 750, this.div_wrap,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("47");
            		p.set_scrollbars("autovert");

            	}
            );
            this.div_wrap.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 737, 800, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_3212");
            		p.set_titletext("부패방지신고센터");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("POPUP_REDWHISTLE.xfdl", "lib::comLib.xjs");
        this.registerScript("POPUP_REDWHISTLE.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs"

        this.OMG_DS_SC_9090_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.btn_link_onclick = function(obj,e)
        {
        	window.open("https://www.redwhistle.org/report/reportNew.asp?organ=7862&RType=1");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.OMG_DS_SC_9090_onload, this);
            this.btn_link.addEventHandler("onclick", this.btn_link_onclick, this);

        };

        this.loadIncludeScript("POPUP_REDWHISTLE.xfdl", true);

       
    };
}
)();
