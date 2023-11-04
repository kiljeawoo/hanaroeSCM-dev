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
                this.set_name("M_workFrame");
                this.set_classname("M_workFrame");
                this.set_titletext("모바일 메인프레임");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,540,712);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_work", "absolute", "0", "0", "540", null, null, "0", this);
            obj.set_taborder("6");
            obj.set_scrollbars("autovert");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 540, 712, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("M_workFrame");
            		p.set_titletext("모바일 메인프레임");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("M_workFrame.xfdl", function() {

        this.form_onload = function(obj,e)
        {

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);

        };

        this.loadIncludeScript("M_workFrame.xfdl");

       
    };
}
)();
