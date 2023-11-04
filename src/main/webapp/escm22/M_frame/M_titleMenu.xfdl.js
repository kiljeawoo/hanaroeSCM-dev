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
                this.set_name("M_titleMenu");
                this.set_classname("M_titleMenu");
                this.set_titletext("타이틀&메뉴");
                this._setFormPosition(0,0,540,71);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_subMenu", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAY_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("sta_title", "absolute", "0", "0", "540", "71", null, null, this);
            obj.getSetter("taborder").set("0");
            obj.set_text("반품입고의뢰조회");
            obj.set_cssclass("sta_WF_Titlebg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_preMenu", "absolute", "10", "5", "125", "61", null, null, this);
            obj.set_taborder("1");
            obj.set_text("마트별/상품별\r\n재고정보");
            obj.set_cssclass("btn_WF_MenuPrev");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_nextMenu", "absolute", "405", "5", "125", "61", null, null, this);
            obj.set_taborder("2");
            obj.set_text("상품별/마트별\r\n판매정보");
            obj.set_cssclass("btn_WF_MenuNext");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 540, 71, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("M_titleMenu");
            		p.set_titletext("타이틀&메뉴");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("M_titleMenu.xfdl", "lib::comLib.xjs");
        this.registerScript("M_titleMenu.xfdl", function() {
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
        	//this.ds_subMenu.copyData(application.gds_mobileMenu);
        }

        this.fn_nextMenu = function(obj,e)
        {
        	var oDs     = application.gds_mobileMenu;
        	var nRow    = nexacro.toNumber(oDs.rowposition)+1;
        	var sMenuID = oDs.getColumn(oDs.rowposition+1,"MENU_ID");
        	var sMenuNM = oDs.getColumn(oDs.rowposition+1,"MENU_NAME");
        	
        	this.gfn_MopenMenuId(sMenuID);
        	
        	oDs.set_rowposition(nRow);
        	
        }

        this.fn_preMenu = function(obj,e)
        {
        	var oDs     = application.gds_mobileMenu;
        	var nRow    = nexacro.toNumber(oDs.rowposition)-1;
        	var sMenuID = oDs.getColumn(nRow,"MENU_ID");
        	this.gfn_MopenMenuId(sMenuID);
        	
        	oDs.set_rowposition(nRow);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_preMenu.addEventHandler("onclick", this.fn_preMenu, this);
            this.btn_nextMenu.addEventHandler("onclick", this.fn_nextMenu, this);

        };

        this.loadIncludeScript("M_titleMenu.xfdl");

       
    };
}
)();
