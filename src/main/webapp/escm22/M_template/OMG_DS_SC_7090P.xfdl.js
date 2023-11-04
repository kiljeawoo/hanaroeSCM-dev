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
                this.set_titletext("미납패널티조회 팝업");
                this._setFormPosition(0,0,470,280);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button01", "absolute", "237", "214", "91", "46", null, null, this);
            obj.set_taborder("0");
            obj.set_text("아니오");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "19", "114", "428", "58", null, null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("해당 패널티 내역을 확인처리 하시겠습니까?");
            obj.set_cssclass("sta_POP_Txt");
            this.addChild(obj.name, obj);

            obj = new Button("Button23", "absolute", "162", "214", "70", "46", null, null, this);
            obj.set_taborder("2");
            obj.set_text("예");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "0", "0", "470", "71", null, null, this);
            obj.getSetter("taborder").set("3");
            obj.set_text("미납패널티 확인");
            obj.set_cssclass("sta_POP_Title");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "400", "0", "70", "70", null, null, this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_POP_Closebtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 470, 280, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_7090P");
            		p.set_titletext("미납패널티조회 팝업");

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

        this.loadIncludeScript("OMG_DS_SC_7090P.xfdl");

       
    };
}
)();
