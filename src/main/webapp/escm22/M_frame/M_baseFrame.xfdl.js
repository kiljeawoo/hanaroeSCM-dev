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
                this.set_name("M_baseFrame");
                this.set_classname("M_baseFrame");
                this.set_titletext("모바일 기본프레임");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,540,960);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_base", "absolute", "0", "0", "540", "960", null, null, this);
            obj.set_taborder("0");
            obj.set_text("div_base");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 540, 960, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("M_baseFrame");
            		p.set_titletext("모바일 기본프레임");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("M_baseFrame.xfdl", function() {

        this.M_baseFrame_onload = function(obj,e)
        {
        	this.fn_init();
        }

        this.fn_init = function()
        {
        	//this.div_base.set_url("M_frame::M_workFrame.xfdl");
        	this.div_base.set_url("m_frame::M_login.xfdl");
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.M_baseFrame_onload, this);

        };

        this.loadIncludeScript("M_baseFrame.xfdl");

       
    };
}
)();
