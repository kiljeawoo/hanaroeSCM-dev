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
                this.set_name("OMG_DS_SC_7090P");
                this.set_classname("OMG_DS_SC_7090P");
                this.set_titletext("confirm");
                this._setFormPosition(0,0,400,280);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "30", "114", "340", "58", null, null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("로그아웃 하시겠습니까?");
            obj.set_cssclass("sta_POP_Txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "0", "0", "400", "71", null, null, this);
            obj.getSetter("taborder").set("3");
            obj.set_text("confirm");
            obj.set_cssclass("sta_POP_Title");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "330", "0", "70", "70", null, null, this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_POP_Closebtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_no", "absolute", "203", "214", "91", "46", null, null, this);
            obj.set_taborder("5");
            obj.set_text("아니오");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_yes", "absolute", "128", "214", "70", "46", null, null, this);
            obj.set_taborder("6");
            obj.set_text("예");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 400, 280, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_7090P");
            		p.set_titletext("confirm");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("M_confirm.xfdl", "lib::comLib.xjs");
        this.registerScript("M_confirm.xfdl", function() {
        //include "lib::comLib.xjs"

        this.btn_yes_onclick = function(obj,e)
        {
        	this.gfn_mobilelogout();
        	this.close();
        }

        this.btn_no_onclick = function(obj,e)
        {
        	this.close();
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_no.addEventHandler("onclick", this.btn_no_onclick, this);
            this.btn_yes.addEventHandler("onclick", this.btn_yes_onclick, this);

        };

        this.loadIncludeScript("M_confirm.xfdl");

       
    };
}
)();
