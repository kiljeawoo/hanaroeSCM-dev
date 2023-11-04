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
                this.set_titletext("Alert");
                this._setFormPosition(0,0,400,280);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "30", "114", "340", "58", null, null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("파일용량이 초과되었습니다!");
            obj.set_cssclass("sta_POP_Txt");
            this.addChild(obj.name, obj);

            obj = new Button("Button23", "absolute", "165", "214", "70", "46", null, null, this);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "0", "0", "400", "71", null, null, this);
            obj.getSetter("taborder").set("3");
            obj.set_text("Alert");
            obj.set_cssclass("sta_POP_Title");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "330", "0", "70", "70", null, null, this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_POP_Closebtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 400, 280, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_7090P");
            		p.set_titletext("Alert");

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

        this.loadIncludeScript("M_Alert.xfdl");

       
    };
}
)();
