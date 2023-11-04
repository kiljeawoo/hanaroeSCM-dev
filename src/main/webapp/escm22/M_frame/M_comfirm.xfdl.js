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
            obj.set_text("수정을 저장 하시겠습니까?");
            obj.set_cssclass("sta_POP_Txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "0", "0", "400", "71", null, null, this);
            obj.getSetter("taborder").set("3");
            obj.set_text("confirm");
            obj.set_cssclass("sta_POP_Title");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "330", "0", "70", "70", null, null, this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_POP_Closebtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "203", "214", "91", "46", null, null, this);
            obj.set_taborder("5");
            obj.set_text("아니오");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button23", "absolute", "128", "214", "70", "46", null, null, this);
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("M_comfirm.xfdl");

       
    };
}
)();
