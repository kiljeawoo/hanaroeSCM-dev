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
                this.set_name("test");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1008,1057);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "61", "45", "22", "215", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("@gradation");
            obj.style.set_border("1 solid #8d8d8dff");
            obj.style.set_gradation("linear 0,0 #ffffffff 100,0 #000000ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "137", "45", "339", "20", null, null, this);
            obj.set_taborder("1");
            obj.style.set_background("@gradation");
            obj.style.set_border("1 solid #8d8d8dff");
            obj.style.set_gradation("linear 0,0 #ffffffff 0,100 #000000ff");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "265", "144", "161", "120", null, null, this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "116", "75", "93", "39", null, null, this.Div00);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "452", "241", "147", "99", null, null, this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "71", "70", "93", "39", null, null, this.Div01);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.Div01.addChild(obj.name, obj);

            obj = new Tab("Tab00", "absolute", "37", "379", "457", "137", null, null, this);
            obj.set_taborder("4");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.style.set_showextrabutton("false");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.Tab00);
            obj.set_text("tabpage1");
            this.Tab00.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "394", "69", "98", "65", null, null, this.Tab00.tabpage1);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.Tab00);
            obj.set_text("tabpage2");
            this.Tab00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage3", this.Tab00);
            obj.set_text("tabpage3");
            this.Tab00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage4", this.Tab00);
            obj.set_text("tabpage4");
            this.Tab00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage5", this.Tab00);
            obj.set_text("tabpage5");
            this.Tab00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage6", this.Tab00);
            obj.set_text("tabpage6");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "656", "10", "10", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00", "absolute", "555", "10", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Calendar("Calendar01", "absolute", "666", "10", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static18", "absolute", "578", "115", null, "21", "353", null, this);
            obj.set_taborder("8");
            obj.set_text("적용일자");
            obj.set_cssclass("sta_WFSA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "635", "115", "20", "20", null, null, this);
            obj.set_taborder("9");
            obj.style.set_background("#00ffff4c");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "775", "81", "19", "17", null, null, this);
            obj.set_taborder("10");
            obj.style.set_background("@gradation");
            obj.style.set_border("1 solid #c3c3c3ff");
            obj.style.set_gradation("linear 0,0 #e0e0e0ff 0,50 #d8d8d8ff");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "690", "307", "168", "181", null, null, this);
            obj.set_taborder("23");
            obj.set_cssclass("div_WF_Calendar");
            this.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "10", "36", "35", "43", null, null, this.Div02);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Calendarmm_S");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button01", "absolute", "47", "36", "35", "43", null, null, this.Div02);
            obj.set_taborder("1");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Calendarmm");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button02", "absolute", "84", "36", "35", "43", null, null, this.Div02);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Calendarmm");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button03", "absolute", "121", "36", "35", "43", null, null, this.Div02);
            obj.set_taborder("3");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Calendarmm");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button04", "absolute", "10", "81", "35", "43", null, null, this.Div02);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_Calendarmm");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button05", "absolute", "47", "81", "35", "43", null, null, this.Div02);
            obj.set_taborder("5");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_Calendarmm");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button06", "absolute", "84", "81", "35", "43", null, null, this.Div02);
            obj.set_taborder("6");
            obj.set_text("7");
            obj.set_cssclass("btn_WF_Calendarmm");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button07", "absolute", "121", "81", "35", "43", null, null, this.Div02);
            obj.set_taborder("7");
            obj.set_text("8");
            obj.set_cssclass("btn_WF_Calendarmm");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button08", "absolute", "10", "126", "35", "43", null, null, this.Div02);
            obj.set_taborder("8");
            obj.set_text("9");
            obj.set_cssclass("btn_WF_Calendarmm");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button09", "absolute", "47", "126", "35", "43", null, null, this.Div02);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("btn_WF_Calendarmm");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button10", "absolute", "84", "126", "35", "43", null, null, this.Div02);
            obj.set_taborder("10");
            obj.set_text("11");
            obj.set_cssclass("btn_WF_Calendarmm");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button11", "absolute", "121", "126", "35", "43", null, null, this.Div02);
            obj.set_taborder("11");
            obj.set_text("12");
            obj.set_cssclass("btn_WF_Calendarmm");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "0", "0", "166", "26", null, null, this.Div02);
            obj.set_taborder("12");
            obj.set_text("2015");
            obj.set_cssclass("sta_WF_Calendaryy");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button12", "absolute", "0", "-1", "30", "26", null, null, this.Div02);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_CalendarPrev");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button13", "absolute", "136", "-1", "30", "26", null, null, this.Div02);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_CalendarNext");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "690", "106", "12", "47", null, null, this);
            obj.set_taborder("24");
            obj.style.set_background("#00ffff4c");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "18.85%", "133", null, "34", "47.52%", null, this);
            obj.set_taborder("25");
            obj.style.set_background("@gradation");
            obj.style.set_border("1 solid #8d8d8dff");
            obj.style.set_gradation("linear 0,0 #ffffffff 0,50 #000000ff");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "431", "634", "272", "372", null, null, this);
            obj.set_taborder("26");
            obj.set_text("Div03");
            obj.set_cssclass("div_WF_MenuList");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "0", "270", "30", null, null, this.Div03);
            obj.set_taborder("0");
            obj.set_text("메뉴검색결과");
            obj.set_cssclass("sta_WF_Menulist");
            this.Div03.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 161, 120, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.set_text("Div00");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 147, 99, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.set_text("Div01");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab00.tabpage1,
            	//-- Layout function
            	function(p) {
            		p.set_text("tabpage1");

            	}
            );
            this.Tab00.tabpage1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 168, 181, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("23");
            		p.set_cssclass("div_WF_Calendar");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 272, 372, this.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("26");
            		p.set_text("Div03");
            		p.set_cssclass("div_WF_MenuList");

            	}
            );
            this.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1008, 1057, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("test");
            		p.set_titletext("New Form");

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

        this.loadIncludeScript("test.xfdl", true);

       
    };
}
)();
