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
                this.set_name("guide02_new");
                this.set_classname("guide02_new");
                this.set_titletext("Calendar/Popup");
                this._setFormPosition(0,0,1008,1831);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmb", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"lv\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"lv\">0</Col><Col id=\"data\">2015</Col></Row><Row><Col id=\"lv\">1</Col><Col id=\"data\">2014</Col></Row><Row><Col id=\"lv\">2</Col><Col id=\"data\">2013</Col></Row><Row><Col id=\"lv\">3</Col><Col id=\"data\">2012</Col></Row><Row><Col id=\"lv\">4</Col><Col id=\"data\">2011</Col></Row><Row><Col id=\"lv\">5</Col><Col id=\"data\">2010</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Calendar("Calendar00", "absolute", "105", "90", "250", "54", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("69");
            obj.set_value("20150501");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Calendar("Calendar01", "absolute", "105", "149", "250", "54", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("70");
            obj.set_value("20150501");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");

            obj = new Static("Static34", "absolute", "436", "56", "76", "18", null, null, this);
            obj.getSetter("taborder").set("79");
            obj.set_text("Monthonly");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static60", "absolute", "0", "0", "1008", "30", null, null, this);
            obj.getSetter("taborder").set("80");
            obj.set_text("Calendar");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "15", "90", "94", "54", null, null, this);
            obj.getSetter("taborder").set("93");
            obj.set_text("enabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "15", "149", "94", "54", null, null, this);
            obj.getSetter("taborder").set("94");
            obj.set_text("disabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "110", "60", "159", "18", null, null, this);
            obj.getSetter("taborder").set("97");
            obj.set_text("type=<b v='true'>\"normal\"</b>");
            obj.set_cssclass("sta_GID_txt02");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "73", "1379", "355", "392", null, null, this);
            obj.set_taborder("155");
            obj.set_text("Div01");
            obj.set_cssclass("div_Pop_Bg");
            this.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "0", "0", "325", "71", null, null, this.Div01);
            obj.getSetter("taborder").set("1");
            obj.set_text("년월 선택");
            obj.set_cssclass("sta_POP_Title");
            this.Div01.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "255", "0", "70", "70", null, null, this.Div01);
            obj.set_taborder("0");
            obj.set_cssclass("btn_POP_Closebtn");
            this.Div01.addChild(obj.name, obj);
            obj = new ListBox("ListBox02", "absolute", "20", "121", "145", "160", null, null, this.Div01);
            this.Div01.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_innerdataset("@ds_cmb");
            obj.set_codecolumn("lv");
            obj.set_datacolumn("data");
            obj = new ListBox("ListBox01", "absolute", "181", "121", "125", "160", null, null, this.Div01);
            this.Div01.addChild(obj.name, obj);
            var ListBox01_innerdataset = new Dataset("ListBox01_innerdataset", this.Div01.ListBox01);
            ListBox01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">01</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">02</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">03</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">04</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">05</Col></Row></Rows>");
            obj.set_innerdataset(ListBox01_innerdataset);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj = new Static("Static01", "absolute", "15", "72", "118", "54", null, null, this.Div01);
            obj.getSetter("taborder").set("4");
            obj.set_text("년도선택");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "172", "72", "118", "54", null, null, this.Div01);
            obj.getSetter("taborder").set("5");
            obj.set_text("월별");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div01.addChild(obj.name, obj);
            obj = new Button("Button23", "absolute", "128", "296", "70", "46", null, null, this.Div01);
            obj.set_taborder("6");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_CRUD");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "526", "1379", "420", "359", null, null, this);
            obj.set_taborder("156");
            obj.set_text("Div02");
            obj.set_cssclass("div_Pop_Bg");
            this.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "0", "0", "390", "71", null, null, this.Div02);
            obj.getSetter("taborder").set("1");
            obj.set_text("타이틀");
            obj.set_cssclass("sta_POP_Title");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "320", "0", "70", "70", null, null, this.Div02);
            obj.set_taborder("0");
            obj.set_cssclass("btn_POP_Closebtn");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button23", "absolute", "160", "263", "70", "46", null, null, this.Div02);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_CRUD");
            this.Div02.addChild(obj.name, obj);
            obj = new TextArea("TextArea00", "absolute", "20", "91", "350", "157", null, null, this.Div02);
            obj.set_taborder("3");
            obj.getSetter("mask").set("###,###");
            this.Div02.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "426", "683", "540", "622", null, null, this);
            obj.set_taborder("157");
            obj.set_text("Div03");
            obj.set_cssclass("div_Pop_Bg");
            this.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "5", "76", "500", "511", null, null, this.Div03);
            obj.getSetter("taborder").set("3");
            obj.set_cssclass("sta_POP_CalendarYearBg");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "0", "0", "510", "71", null, null, this.Div03);
            obj.getSetter("taborder").set("0");
            obj.set_text("월력캘린더");
            obj.set_cssclass("sta_POP_Title");
            this.Div03.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "440", "0", "70", "70", null, null, this.Div03);
            obj.set_taborder("1");
            obj.set_cssclass("btn_POP_Closebtn");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "5", "76", "500", "85", null, null, this.Div03);
            obj.getSetter("taborder").set("2");
            obj.set_text("2015");
            obj.set_cssclass("sta_POP_Calendaryeartitlebg");
            this.Div03.addChild(obj.name, obj);
            obj = new Button("Button01", "absolute", "5", "76", "85", "85", null, null, this.Div03);
            obj.set_taborder("4");
            obj.set_cssclass("btn_POP_Calendaryearprev");
            this.Div03.addChild(obj.name, obj);
            obj = new Button("Button02", "absolute", "420", "76", "85", "85", null, null, this.Div03);
            obj.set_taborder("5");
            obj.set_cssclass("btn_POP_Calendaryearnext");
            this.Div03.addChild(obj.name, obj);
            obj = new Button("Button03", "absolute", "380", "181", "104", "119", null, null, this.Div03);
            obj.set_taborder("6");
            obj.set_text("04");
            obj.set_cssclass("btn_POP_Calendarmm");
            this.Div03.addChild(obj.name, obj);
            obj = new Button("Button04", "absolute", "262", "181", "104", "119", null, null, this.Div03);
            obj.set_taborder("7");
            obj.set_text("03");
            obj.set_cssclass("btn_POP_Calendarmm");
            this.Div03.addChild(obj.name, obj);
            obj = new Button("Button05", "absolute", "144", "181", "104", "119", null, null, this.Div03);
            obj.set_taborder("8");
            obj.set_text("02");
            obj.set_cssclass("btn_POP_Calendarmm");
            this.Div03.addChild(obj.name, obj);
            obj = new Button("Button06", "absolute", "26", "181", "104", "119", null, null, this.Div03);
            obj.set_taborder("9");
            obj.set_text("01");
            obj.set_cssclass("btn_POP_Calendarmm");
            this.Div03.addChild(obj.name, obj);
            obj = new Button("Button07", "absolute", "26", "314", "104", "119", null, null, this.Div03);
            obj.set_taborder("10");
            obj.set_text("05");
            obj.set_cssclass("btn_POP_Calendarmm");
            this.Div03.addChild(obj.name, obj);
            obj = new Button("Button08", "absolute", "144", "314", "104", "119", null, null, this.Div03);
            obj.set_taborder("11");
            obj.set_text("06");
            obj.set_cssclass("btn_POP_Calendarmm");
            this.Div03.addChild(obj.name, obj);
            obj = new Button("Button09", "absolute", "262", "314", "104", "119", null, null, this.Div03);
            obj.set_taborder("12");
            obj.set_text("07");
            obj.set_cssclass("btn_POP_Calendarmm");
            this.Div03.addChild(obj.name, obj);
            obj = new Button("Button10", "absolute", "380", "314", "104", "119", null, null, this.Div03);
            obj.set_taborder("13");
            obj.set_text("08");
            obj.set_cssclass("btn_POP_Calendarmm");
            this.Div03.addChild(obj.name, obj);
            obj = new Button("Button11", "absolute", "380", "447", "104", "119", null, null, this.Div03);
            obj.set_taborder("14");
            obj.set_text("12");
            obj.set_cssclass("btn_POP_Calendarmm");
            this.Div03.addChild(obj.name, obj);
            obj = new Button("Button12", "absolute", "262", "447", "104", "119", null, null, this.Div03);
            obj.set_taborder("15");
            obj.set_text("11");
            obj.set_cssclass("btn_POP_Calendarmm");
            this.Div03.addChild(obj.name, obj);
            obj = new Button("Button13", "absolute", "144", "447", "104", "119", null, null, this.Div03);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_cssclass("btn_POP_Calendarmm");
            this.Div03.addChild(obj.name, obj);
            obj = new Button("Button14", "absolute", "26", "447", "104", "119", null, null, this.Div03);
            obj.set_taborder("17");
            obj.set_text("09");
            obj.set_cssclass("btn_POP_Calendarmm");
            this.Div03.addChild(obj.name, obj);

            obj = new Calendar("Calendar02", "absolute", "436", "82", "500", "582", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("158");
            obj.set_value("20150501");
            obj.set_type("monthonly");
            obj.set_dateformat("yyyy-MM-dd");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 355, 392, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("155");
            		p.set_text("Div01");
            		p.set_cssclass("div_Pop_Bg");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 420, 359, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("156");
            		p.set_text("Div02");
            		p.set_cssclass("div_Pop_Bg");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 622, this.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("157");
            		p.set_text("Div03");
            		p.set_cssclass("div_Pop_Bg");

            	}
            );
            this.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1008, 1831, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("guide02_new");
            		p.set_titletext("Calendar/Popup");

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

        this.loadIncludeScript("M_Guide_02.xfdl");

       
    };
}
)();
