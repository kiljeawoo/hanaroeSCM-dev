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
                this.set_name("CHUCK");
                this.set_titletext("happy❤️❤️");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,740,400);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("0");
            obj.set_text("본인인증");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_MB_ID", "absolute", "136", "62", "122", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_inputtype("number,english");
            obj.set_maxlength("9");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "0", "37", "32", "0", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "2.16%", "62", null, "20", "83.38%", null, this);
            obj.set_taborder("3");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_MB_ID00", "absolute", "136", "102", "122", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_inputtype("number,english");
            obj.set_maxlength("9");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "2.16%", "102", null, "20", "83.38%", null, this);
            obj.set_taborder("5");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "34.86%", "100", null, "20", "61.62%", null, this);
            obj.set_taborder("6");
            obj.set_text("@");
            obj.style.set_font("bold 14 Gulim");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_MB_ID01", "absolute", "288", "102", "122", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_inputtype("number,english");
            obj.set_maxlength("9");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 740, 400, this,
            	//-- Layout function
            	function(p) {
            		p.set_titletext("happy❤️❤️");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item10","edt_MB_ID","value","ds_userInfo","MB_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edt_MB_ID00","value","ds_userInfo","MB_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edt_MB_ID01","value","ds_userInfo","MB_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.edt_MB_ID.addEventHandler("oneditclick", this.Div05_edt_MB_ID_oneditclick, this);
            this.edt_MB_ID.addEventHandler("onchanged", this.Div05_edt_MB_ID_onchanged, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.edt_MB_ID00.addEventHandler("oneditclick", this.Div05_edt_MB_ID_oneditclick, this);
            this.edt_MB_ID00.addEventHandler("onchanged", this.Div05_edt_MB_ID_onchanged, this);
            this.edt_MB_ID01.addEventHandler("oneditclick", this.Div05_edt_MB_ID_oneditclick, this);
            this.edt_MB_ID01.addEventHandler("onchanged", this.Div05_edt_MB_ID_onchanged, this);

        };

        this.loadIncludeScript("CHUCK.xfdl");

       
    };
}
)();
