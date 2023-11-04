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
                this.set_name("Alert");
                this.set_classname("Alert");
                this.set_titletext("Alert");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,280,150);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button01", "absolute", "243", "0", "37", "32", null, null, this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "159", "32", null, null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("Alert");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "112", "105", "54", "29", null, null, this);
            obj.set_taborder("8");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "40", "59", "32", "32", null, null, this);
            obj.getSetter("taborder").set("9");
            obj.style.set_background("URL('theme://images/ico_Alert_Warning.png') center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "81", "65", "172", "21", null, null, this);
            obj.getSetter("taborder").set("10");
            obj.set_text("파일 용량이 초과 되었습니다!");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "40", "168", "32", "32", null, null, this);
            obj.getSetter("taborder").set("11");
            obj.style.set_background("URL('theme://images/ico_Alert_Default.png') center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "90", "168", "32", "32", null, null, this);
            obj.getSetter("taborder").set("12");
            obj.style.set_background("URL('theme://images/ico_Alert_Error.png') center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "140", "168", "32", "32", null, null, this);
            obj.getSetter("taborder").set("13");
            obj.style.set_background("URL('theme://images/ico_Alert_Information.png') center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "190", "168", "32", "32", null, null, this);
            obj.getSetter("taborder").set("14");
            obj.style.set_background("URL('theme://images/ico_Alert_Question.png') center middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 280, 150, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Alert");
            		p.set_titletext("Alert");
            		p.set_cssclass("frm_WF_PopupBg");

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

        this.loadIncludeScript("Alert.xfdl");

       
    };
}
)();
