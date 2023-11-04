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
                this.set_name("Sample012_");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "384", "54", "120", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("_getValue");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "384", "94", "120", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_text("_setValue");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "384", "134", "120", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_text("_clearValue");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "384", "174", "120", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_text("_enable");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "384", "214", "120", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_text("_setFocus");
            this.addChild(obj.name, obj);

            obj = new Button("Button05", "absolute", "384", "254", "120", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_text("_setRequired");
            this.addChild(obj.name, obj);

            obj = new Button("Button06", "absolute", "384", "294", "120", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_text("_setReadonly");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "11.72%", "111", null, "21", "74.61%", null, this);
            obj.set_taborder("8");
            obj.set_url("common::calendarMonth.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Sample012_");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::calendarMonth.xfdl");
        };
        
        // User Script
        this.registerScript("Sample012_CalendarMonth.xfdl", function() {

        this.form_onload = function(obj,e)
        {
        	this.Div00.setFunctionName("fn_afterCall");
        }

        this.fn_afterCall = function (sVal)
        {
        	trace("sVal11 >> "+sVal);
        }

        this.Button00_onclick = function(obj,e)
        {
        	alert(this.Div00._getValue());
        }

        this.Button01_onclick = function(obj,e)
        {
        	this.Div00._setValue("201502");
        }

        
        this.Button02_onclick = function(obj,e)
        {
        	this.Div00._clearValue();
        }

        this.Button03_onclick = function(obj,e)
        {
        	this.Div00._enable(false); // true / false
        }

        this.Button04_onclick = function(obj,e)
        {
        	this.Div00._setFocus();
        }

        this.Button05_onclick = function(obj,e)
        {
        	this.Div00._setRequired();
        }

        this.Button06_onclick = function(obj,e)
        {
        	this.Div00._setReadonly(true); // true/false
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);
            this.Button03.addEventHandler("onclick", this.Button03_onclick, this);
            this.Button04.addEventHandler("onclick", this.Button04_onclick, this);
            this.Button05.addEventHandler("onclick", this.Button05_onclick, this);
            this.Button06.addEventHandler("onclick", this.Button06_onclick, this);

        };

        this.loadIncludeScript("Sample012_CalendarMonth.xfdl");
        this.loadPreloadList();
       
    };
}
)();
