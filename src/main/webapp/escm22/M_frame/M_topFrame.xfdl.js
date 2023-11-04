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
                this.set_name("M_topFrame");
                this.set_classname("M_topFrame");
                this.set_titletext("모바일_topFrame");
                this._setFormPosition(0,0,540,75);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "0", "0", "540", "75", null, null, this);
            obj.getSetter("taborder").set("0");
            obj.set_cssclass("sta_TF_Bg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_prev", "absolute", "0", "0", "70", "75", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_TF_Return");
            obj.set_visible("false");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popMenu", "absolute", "470", "0", "70", "75", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_TF_Menu");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title", "absolute", "190", "23", "169", "29", null, null, this);
            obj.getSetter("taborder").set("3");
            obj.set_cssclass("sta_TF_Title");
            this.addChild(obj.name, obj);

            obj = new Div("div_popupMenu", "absolute", null, "0", "370", "922", "-378", null, this);
            obj.set_taborder("4");
            obj.set_url("m_frame::M_rightFrame.xfdl");
            obj.set_text("div_popupMenu");
            obj.style.set_accessibility("disable all '' '' ''");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv_popupMenu", "absolute", "170", "64", "370", "922", null, null, this);
            obj.set_visible("true");
            obj.set_url("m_frame::M_rightFrame.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 540, 75, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("M_topFrame");
            		p.set_titletext("모바일_topFrame");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "m_frame::M_rightFrame.xfdl");
            this._addPreloadList("fdl", "m_frame::M_rightFrame.xfdl");
        };
        
        // User Script
        this.addIncludeScript("M_topFrame.xfdl", "lib::comLib.xjs");
        this.registerScript("M_topFrame.xfdl", function() {
        //include "lib::comLib.xjs";

        this.Static01_onclick = function(obj,e)
        {
        // 	this.parent.div_work.set_visible(false);
        // 	this.parent.div_main.set_visible(true);
        // 	this.parent.div_main.set_url("m_frame::M_main.xfdl");
        	//this.go("m_frame::M_main.xfdl");
        }

        this.Button01_onclick = function(obj,e)
        {
        // 	this.div_popupMenu.set_visible(true);
        // 	this.div_popupMenu.bringToFront();
        // 	this.div_popupMenu.move(null, 0, null, null, 0, null);
        }

        this.btn_popMenu_onclick = function(obj,e)
        {
        	var nX = system.clientToScreenX(this.btn_popMenu, 0) - system.clientToScreenX(application.mainframe, 0); 
        	var nY = system.clientToScreenY(this.btn_popMenu, parseInt(this.btn_popMenu.height)) - system.clientToScreenY(application.mainframe, 0); 

        	var nRtn = this.pdiv_popupMenu.trackPopupByComponent(this.btn_popMenu,-300,0);
        }

        this.btn_prev_onclick = function(obj,e)
        {
        	this.gfn_topMenuBackMobile();
        }

        this.sta_title_onclick = function(obj,e)
        {
        	application.afrm_VFrameSet2.set_separatesize("0,*");
        	application.afrm_HomeFrame.set_formurl("m_frame::M_main.xfdl");
        	application.gds_mobileOpenMenu.clearData();
        	this.btn_prev.set_visible(false);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_prev.addEventHandler("onclick", this.btn_prev_onclick, this);
            this.btn_popMenu.addEventHandler("onclick", this.btn_popMenu_onclick, this);
            this.sta_title.addEventHandler("onclick", this.sta_title_onclick, this);

        };

        this.loadIncludeScript("M_topFrame.xfdl");
        this.loadPreloadList();
       
    };
}
)();
