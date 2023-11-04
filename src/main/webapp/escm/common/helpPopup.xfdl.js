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
                this.set_name("helpPopup");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,700,500);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_title", "absolute", "0%", "0", null, "32", "66.31%", null, this);
            obj.set_taborder("0");
            obj.set_text("도움말");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "96.39%", "0", null, "32", "0%", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_PopupClose");
            obj.style.set_cursor("hand");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_help", "absolute", "15", "47", null, null, "15", "15", this);
            obj.set_taborder("2");
            obj.style.set_padding("10 10 10 10");
            obj.style.set_font("10 Gulim");
            obj.set_wordwrap("char");
            obj.set_scrollbars("autoboth");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 700, 500, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("helpPopup");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("helpPopup.xfdl", "lib::comLib.xjs");
        this.registerScript("helpPopup.xfdl", function() {
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {	
        	var nRow    = application.gds_menu.findRow("MENU_ID",this.getOwnerFrame().param00);
        	var sMenuNm = application.gds_menu.getColumn(nRow,"MENU_NAME");
        	this.sta_title.set_text("도움말 - "+sMenuNm);
        	this.txa_help.set_value(this.getOwnerFrame().param01);
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);

        };

        this.loadIncludeScript("helpPopup.xfdl");

       
    };
}
)();
