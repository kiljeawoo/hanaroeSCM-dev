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
                this.set_name("M_topMenu");
                this.set_classname("M_topMenu");
                this.set_titletext("모바일_탑메뉴");
                this._setFormPosition(0,0,540,64);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "0", "0", "540", "64", null, null, this);
            obj.getSetter("taborder").set("0");
            obj.set_cssclass("sta_MAIN_User");
            this.addChild(obj.name, obj);

            obj = new Button("btn_topMenu00", "absolute", "14", "5", "77", "54", null, null, this);
            obj.set_taborder("1");
            obj.set_text("수주");
            obj.set_cssclass("btn_WF_Topmenu");
            obj.style.set_background("#ffffff00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_topMenu06", "absolute", "10", "91", "94", "54", null, null, this);
            obj.set_taborder("6");
            obj.set_text("수주관리");
            obj.set_cssclass("btn_WF_TopmenuS");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "526", "1", "14", "149", null, null, this);
            obj.getSetter("taborder").set("8");
            obj.set_text("Static01");
            obj.style.set_background("hotpink");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_topMenu01", "absolute", "100", "5", "77", "54", null, null, this);
            obj.set_taborder("9");
            obj.set_text("배송");
            obj.set_cssclass("btn_WF_Topmenu");
            obj.style.set_background("#ffffff00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_topMenu02", "absolute", "187", "5", "77", "54", null, null, this);
            obj.set_taborder("10");
            obj.set_text("검수");
            obj.set_cssclass("btn_WF_Topmenu");
            obj.style.set_background("#ffffff00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_topMenu03", "absolute", "275", "5", "77", "54", null, null, this);
            obj.set_taborder("11");
            obj.set_text("판매");
            obj.set_cssclass("btn_WF_Topmenu");
            obj.style.set_background("#ffffff00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_topMenu04", "absolute", "362", "5", "77", "54", null, null, this);
            obj.set_taborder("12");
            obj.set_text("재고");
            obj.set_cssclass("btn_WF_Topmenu");
            obj.style.set_background("#ffffff00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_topMenu05", "absolute", "449", "5", "77", "54", null, null, this);
            obj.set_taborder("13");
            obj.set_text("회계");
            obj.set_cssclass("btn_WF_Topmenu");
            obj.style.set_background("#ffffff00");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0%", "2", null, "149", "97.59%", null, this);
            obj.getSetter("taborder").set("14");
            obj.set_text("Static01");
            obj.style.set_background("hotpink");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 540, 64, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("M_topMenu");
            		p.set_titletext("모바일_탑메뉴");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("M_topMenu.xfdl", "lib::comLib.xjs");
        this.registerScript("M_topMenu.xfdl", function() {
        //include "lib::comLib.xjs";

        this.fn_callSubMenu = function(obj,e)
        {
        	/*
        	for(var i=0; i<6; i++){
        		this.all["btn_topMenu0"+i].set_cssclass("btn_WF_Topmenu");
        	}
        	*/
        	
        	var sObjNm = obj.name.substr(12,1);
        	var sMenuID;
        	
        	switch (sObjNm){
        	
        			case "0":				
        				sMenuID = "01000000";
        				break;
        			case "1":				
        				sMenuID = "02000000";
        				break;
        			case "2":				
        				sMenuID = "03000000";
        				break;
        			case "3":				
        				sMenuID = "04000000";
        				break;
        			case "4":				
        				sMenuID = "05000000";
        				break;
        			case "5":				
        				sMenuID = "06000000";
        				break;
        			default:				
        				
        				break;
        	}
        	
        	var subMenuID = "";
        	var oDs  = application.gds_mobileMenu;
        	var nRow = oDs.findRow("MENU_ID",sMenuID);
        	
        	var nLvl = oDs.getColumn(nRow+1,"MENU_LEVEL");
        	
        	if(nLvl == 1){
        		subMenuID = oDs.getColumn(nRow+1,"MENU_ID");
        	}else{
        		return;
        	}
        	
        	this.gfn_MopenMenuId(subMenuID);	
        	
        	oDs.set_rowposition(nRow+1);
        	obj.set_cssclass("btn_WF_TopmenuS");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_topMenu00.addEventHandler("onclick", this.fn_callSubMenu, this);
            this.btn_topMenu01.addEventHandler("onclick", this.fn_callSubMenu, this);
            this.btn_topMenu02.addEventHandler("onclick", this.fn_callSubMenu, this);
            this.btn_topMenu03.addEventHandler("onclick", this.fn_callSubMenu, this);
            this.btn_topMenu04.addEventHandler("onclick", this.fn_callSubMenu, this);
            this.btn_topMenu05.addEventHandler("onclick", this.fn_callSubMenu, this);

        };

        this.loadIncludeScript("M_topMenu.xfdl");

       
    };
}
)();
