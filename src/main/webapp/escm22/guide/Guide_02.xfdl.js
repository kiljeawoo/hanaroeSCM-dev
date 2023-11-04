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
                this.set_titletext("Calendar/CheckBox/Radio/FileUpload/FileDownload");
                this._setFormPosition(0,0,1008,920);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmb", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"lv\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"lv\">0</Col><Col id=\"data\">농협유통eSCM</Col></Row><Row><Col id=\"lv\">1</Col><Col id=\"data\">농협유통eSCM</Col></Row><Row><Col id=\"lv\">2</Col><Col id=\"data\">농협유통eSCM</Col></Row><Row><Col id=\"lv\">3</Col><Col id=\"data\">농협유통eSCM</Col></Row><Row><Col id=\"lv\">4</Col><Col id=\"data\">농협유통eSCM</Col></Row><Row><Col id=\"lv\">5</Col><Col id=\"data\">.</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new CheckBox("CheckBox00", "absolute", "30", "607", "120", "21", null, null, this);
            obj.set_taborder("35");
            obj.set_text("None Check");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("tklhytyty");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01", "absolute", "195", "607", "120", "21", null, null, this);
            obj.set_taborder("36");
            obj.set_text("None Check");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02", "absolute", "30", "630", "120", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_text("Check");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03", "absolute", "195", "630", "120", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_text("Check");
            obj.set_value("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00", "absolute", "541", "607", "133", "21", null, null, this);
            this.addChild(obj.name, obj);
            var Radio00_innerdataset = new Dataset("Radio00_innerdataset", this.Radio00);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_taborder("39");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("-1");

            obj = new Radio("Radio01", "absolute", "719", "607", "133", "21", null, null, this);
            this.addChild(obj.name, obj);
            var Radio01_innerdataset = new Dataset("Radio01_innerdataset", this.Radio01);
            Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(Radio01_innerdataset);
            obj.set_taborder("40");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_enable("false");
            obj.set_index("0");

            obj = new Div("Div02", "absolute", "110", "285", "168", "181", null, null, this);
            obj.set_taborder("54");
            obj.set_cssclass("div_WF_Calendar");
            this.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "10", "36", "35", "43", null, null, this.Div02);
            obj.set_taborder("15");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_Calendarmm");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button01", "absolute", "47", "36", "35", "43", null, null, this.Div02);
            obj.set_taborder("16");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_Calendarmm");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button02", "absolute", "84", "36", "35", "43", null, null, this.Div02);
            obj.set_taborder("17");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_Calendarmm");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button03", "absolute", "121", "36", "35", "43", null, null, this.Div02);
            obj.set_taborder("18");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_Calendarmm");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button04", "absolute", "10", "81", "35", "43", null, null, this.Div02);
            obj.set_taborder("19");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_Calendarmm");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button05", "absolute", "47", "81", "35", "43", null, null, this.Div02);
            obj.set_taborder("20");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_Calendarmm");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button06", "absolute", "84", "81", "35", "43", null, null, this.Div02);
            obj.set_taborder("21");
            obj.set_text("7");
            obj.set_cssclass("btn_WF_Calendarmm");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button07", "absolute", "121", "81", "35", "43", null, null, this.Div02);
            obj.set_taborder("22");
            obj.set_text("8");
            obj.set_cssclass("btn_WF_Calendarmm");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button08", "absolute", "10", "126", "35", "43", null, null, this.Div02);
            obj.set_taborder("23");
            obj.set_text("9");
            obj.set_cssclass("btn_WF_Calendarmm");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button09", "absolute", "47", "126", "35", "43", null, null, this.Div02);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_cssclass("btn_WF_Calendarmm");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button10", "absolute", "84", "126", "35", "43", null, null, this.Div02);
            obj.set_taborder("25");
            obj.set_text("11");
            obj.set_cssclass("btn_WF_Calendarmm");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button11", "absolute", "121", "126", "35", "43", null, null, this.Div02);
            obj.set_taborder("26");
            obj.set_text("12");
            obj.set_cssclass("btn_WF_Calendarmm_S");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "0", "-1", "166", "27", null, null, this.Div02);
            obj.set_taborder("27");
            obj.set_text("2015");
            obj.set_cssclass("sta_WF_Calendaryy");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button12", "absolute", "0", "-1", "30", "26", null, null, this.Div02);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_CalendarPrev");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button13", "absolute", "136", "-1", "30", "26", null, null, this.Div02);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WF_CalendarNext");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "310", "449", "198", "18", null, null, this);
            obj.set_taborder("56");
            obj.set_text("class : <b v='true'>div_WF_Calendar</b>");
            obj.style.set_color("#0385adff");
            obj.style.set_align("left middle");
            obj.style.set_font("8 Gulim");
            obj.set_cssclass("sta_GID_txt");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "271", "458", "39", "1", null, null, this);
            obj.set_taborder("57");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "298", "367", "198", "18", null, null, this);
            obj.set_taborder("58");
            obj.set_text("class : <b v='true'>btn_WF_Calendarmm</b>");
            obj.style.set_color("#0385adff");
            obj.style.set_align("left middle");
            obj.style.set_font("8 Gulim");
            obj.set_cssclass("sta_GID_txt");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "259", "376", "39", "1", null, null, this);
            obj.set_taborder("59");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "301", "413", "198", "18", null, null, this);
            obj.set_taborder("60");
            obj.set_text("class :<b v='true'>btn_WF_Calendarmm_S</b>");
            obj.style.set_color("#0385adff");
            obj.style.set_align("left middle");
            obj.style.set_font("8 Gulim");
            obj.set_cssclass("sta_GID_txt");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "261", "422", "39", "1", null, null, this);
            obj.set_taborder("61");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "306", "288", "198", "18", null, null, this);
            obj.set_taborder("62");
            obj.set_text("class : <b v='true'>btn_WF_CalendarNext</b>");
            obj.style.set_color("#0385adff");
            obj.style.set_align("left middle");
            obj.style.set_font("8 Gulim");
            obj.set_cssclass("sta_GID_txt");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "267", "297", "39", "1", null, null, this);
            obj.set_taborder("63");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "86", "233", "198", "18", null, null, this);
            obj.set_taborder("64");
            obj.set_text("class : <b v='true'>btn_WF_CalendarPrev</b>");
            obj.style.set_color("#0385adff");
            obj.style.set_align("left middle");
            obj.style.set_font("8 Gulim");
            obj.set_cssclass("sta_GID_txt");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "194", "267", "86", "1", null, null, this);
            obj.set_taborder("66");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "193", "267", "1", "25", null, null, this);
            obj.set_taborder("67");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "282", "258", "198", "18", null, null, this);
            obj.set_taborder("68");
            obj.set_text("class : <b v='true'>sta_WF_Calendaryy</b>");
            obj.style.set_color("#0385adff");
            obj.style.set_align("left middle");
            obj.style.set_font("8 Gulim");
            obj.set_cssclass("sta_GID_txt");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00", "absolute", "110", "90", "151", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("69");
            obj.set_value("20150401");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Calendar("Calendar01", "absolute", "110", "116", "151", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("70");
            obj.set_value("20150401");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");

            obj = new Calendar("Calendar02", "absolute", "110", "142", "151", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("71");
            obj.set_value("20150401");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Readonly");
            obj.set_readonly("true");

            obj = new Calendar("Calendar03", "absolute", "281", "116", "151", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("72");
            obj.set_value("20150401");
            obj.set_type("spin");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");

            obj = new Calendar("Calendar04", "absolute", "281", "142", "151", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("73");
            obj.set_value("20150401");
            obj.set_type("spin");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Readonly");
            obj.set_readonly("true");

            obj = new Calendar("Calendar05", "absolute", "281", "90", "151", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("74");
            obj.set_value("20150401");
            obj.set_type("spin");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Calendar("Calendar07", "absolute", "110", "168", "151", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("75");
            obj.set_value("20150401");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Essential");

            obj = new Calendar("Calendar06", "absolute", "693", "79", "182", "184", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("78");
            obj.set_value("20150401");
            obj.set_type("monthonly");
            obj.set_dateformat("yyyy-MM-dd");
            obj.style.set_daysize("24 22");
            obj.style.set_border("0 none #808080ff");

            obj = new Static("Static34", "absolute", "693", "56", "76", "18", null, null, this);
            obj.set_taborder("79");
            obj.set_text("Monthonly");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static60", "absolute", "0", "0", null, "30", "0", null, this);
            obj.set_taborder("80");
            obj.set_text("Calendar");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "503", "521", null, "30", "0", null, this);
            obj.set_taborder("81");
            obj.set_text("Radio");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "521", "504", "30", null, null, this);
            obj.set_taborder("82");
            obj.set_text("CheckBox");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "30", "574", "62", "18", null, null, this);
            obj.set_taborder("85");
            obj.set_text("enabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "195", "574", "65", "18", null, null, this);
            obj.set_taborder("86");
            obj.set_text("disabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "444", "170", "177", "18", null, null, this);
            obj.set_taborder("89");
            obj.set_text("class : <b v='true'>cal_WF_Essential</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "444", "144", "177", "18", null, null, this);
            obj.set_taborder("90");
            obj.set_text("class : <b v='true'>cal_WF_Readonly</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "30", "91", "61", "18", null, null, this);
            obj.set_taborder("93");
            obj.set_text("enabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "30", "117", "65", "18", null, null, this);
            obj.set_taborder("94");
            obj.set_text("disabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "30", "143", "61", "18", null, null, this);
            obj.set_taborder("95");
            obj.set_text("읽기전용");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "30", "169", "61", "18", null, null, this);
            obj.set_taborder("96");
            obj.set_text("필수");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "110", "60", "159", "18", null, null, this);
            obj.set_taborder("97");
            obj.set_text("type=<b v='true'>\"normal\"</b>");
            obj.set_cssclass("sta_GID_txt02");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "281", "60", "109", "18", null, null, this);
            obj.set_taborder("98");
            obj.set_text("type=<b v='true'>\"spin\"</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "541", "574", "62", "18", null, null, this);
            obj.set_taborder("99");
            obj.set_text("enabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "719", "574", "65", "18", null, null, this);
            obj.set_taborder("100");
            obj.set_text("disabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar08", "absolute", "281", "168", "151", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("101");
            obj.set_value("20150401");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Essential");
            obj.set_type("spin");

            obj = new FileUpload("FileUpload00", "absolute", "30", "787", "266", "24", null, null, this);
            obj.set_taborder("103");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00", "absolute", "541", "788", "93", "21", null, null, this);
            obj.set_taborder("104");
            obj.getSetter("retry").set("0");
            obj.set_text("파일다운로드");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "0", "704", "504", "30", null, null, this);
            obj.set_taborder("105");
            obj.set_text("FileUpload");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "503", "704", null, "30", "0", null, this);
            obj.set_taborder("106");
            obj.set_text("FileDownload");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "30", "764", "62", "18", null, null, this);
            obj.set_taborder("107");
            obj.set_text("enabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "30", "838", "65", "18", null, null, this);
            obj.set_taborder("108");
            obj.set_text("disabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload01", "absolute", "30", "861", "266", "24", null, null, this);
            obj.set_taborder("109");
            obj.getSetter("retry").set("0");
            obj.set_enable("false");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload01", "absolute", "541", "862", "93", "21", null, null, this);
            obj.set_taborder("110");
            obj.getSetter("retry").set("0");
            obj.set_text("파일다운로드");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "541", "767", "62", "18", null, null, this);
            obj.set_taborder("111");
            obj.set_text("enabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "541", "841", "65", "18", null, null, this);
            obj.set_taborder("112");
            obj.set_text("disabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "232", "322", "35", "43", null, null, this);
            obj.set_taborder("113");
            obj.style.set_background("#dc143c33");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "30", "290", "45", "18", null, null, this);
            obj.set_taborder("114");
            obj.set_text("월력");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "264", "336", "15", "17", null, null, this);
            obj.set_taborder("115");
            obj.set_text("43");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "244", "309", "16", "17", null, null, this);
            obj.set_taborder("116");
            obj.set_text("35");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "130", "248", "1", "44", null, null, this);
            obj.set_taborder("117");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "102", "285", "1", "181", null, null, this);
            obj.set_taborder("118");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "98", "465", "10", "1", null, null, this);
            obj.set_taborder("119");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "98", "312", "10", "1", null, null, this);
            obj.set_taborder("120");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "98", "284", "10", "1", null, null, this);
            obj.set_taborder("121");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static78", "absolute", "432", "110", "10", "1", null, null, this);
            obj.set_taborder("122");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static79", "absolute", "432", "90", "10", "1", null, null, this);
            obj.set_taborder("123");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static80", "absolute", "437", "91", "1", "20", null, null, this);
            obj.set_taborder("124");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static88", "absolute", "443", "92", "15", "17", null, null, this);
            obj.set_taborder("125");
            obj.set_text("21");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "77", "378", "23", "17", null, null, this);
            obj.set_taborder("126");
            obj.set_text("154");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "186", "474", "25", "17", null, null, this);
            obj.set_taborder("127");
            obj.set_text("168");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "82", "292", "18", "17", null, null, this);
            obj.set_taborder("128");
            obj.set_text("27");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "110", "472", "168", "1", null, null, this);
            obj.set_taborder("129");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "110", "467", "1", "10", null, null, this);
            obj.set_taborder("130");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "277", "467", "1", "10", null, null, this);
            obj.set_taborder("131");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "688", "80", "1", "183", null, null, this);
            obj.set_taborder("132");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static49", "absolute", "684", "262", "10", "1", null, null, this);
            obj.set_taborder("133");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "663", "163", "23", "17", null, null, this);
            obj.set_taborder("136");
            obj.set_text("184");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static54", "absolute", "772", "271", "25", "17", null, null, this);
            obj.set_taborder("138");
            obj.set_text("182");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static55", "absolute", "694", "269", "180", "1", null, null, this);
            obj.set_taborder("139");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static56", "absolute", "694", "264", "1", "10", null, null, this);
            obj.set_taborder("140");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static57", "absolute", "874", "264", "1", "10", null, null, this);
            obj.set_taborder("141");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "684", "79", "10", "1", null, null, this);
            obj.set_taborder("143");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static50", "absolute", "110", "286", "30", "26", null, null, this);
            obj.set_taborder("144");
            obj.set_visible("false");
            obj.style.set_background("#dc143c33");
            this.addChild(obj.name, obj);

            obj = new Static("Static53", "absolute", "115", "271", "16", "17", null, null, this);
            obj.set_taborder("145");
            obj.set_text("30");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static58", "absolute", "141", "291", "16", "17", null, null, this);
            obj.set_taborder("146");
            obj.set_text("26");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static59", "absolute", "503", "521", "1", "399", null, null, this);
            obj.set_taborder("147");
            obj.set_cssclass("sta_GID_line");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox04", "absolute", "30", "653", "120", "21", null, null, this);
            obj.set_taborder("148");
            obj.set_text("Check");
            obj.set_value("true");
            obj.set_cssclass("chk_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox05", "absolute", "195", "653", "120", "21", null, null, this);
            obj.set_taborder("149");
            obj.set_text("Check");
            obj.set_value("true");
            obj.set_enable("false");
            obj.set_cssclass("chk_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio02", "absolute", "541", "630", "133", "21", null, null, this);
            this.addChild(obj.name, obj);
            var Radio02_innerdataset = new Dataset("Radio02_innerdataset", this.Radio02);
            Radio02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(Radio02_innerdataset);
            obj.set_taborder("150");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_cssclass("rdo_WF_Essential");
            obj.set_index("0");

            obj = new Radio("Radio03", "absolute", "719", "630", "133", "21", null, null, this);
            this.addChild(obj.name, obj);
            var Radio03_innerdataset = new Dataset("Radio03_innerdataset", this.Radio03);
            Radio03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(Radio03_innerdataset);
            obj.set_taborder("151");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_enable("false");
            obj.set_cssclass("rdo_WF_Essential");
            obj.set_index("0");

            obj = new Static("Static61", "absolute", "280", "655", "198", "18", null, null, this);
            obj.set_taborder("152");
            obj.set_text("class : <b v='true'>chk_WF_Essential</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            obj.style.set_color("#0385adff");
            obj.style.set_align("left middle");
            obj.style.set_font("8 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static62", "absolute", "860", "631", "185", "18", null, null, this);
            obj.set_taborder("153");
            obj.set_text("class : <b v='true'>rdo_WF_Essential</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            obj.style.set_color("#0385adff");
            obj.style.set_align("left middle");
            obj.style.set_font("8 Gulim");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 168, 181, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("54");
            		p.set_cssclass("div_WF_Calendar");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1008, 920, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("guide02_new");
            		p.set_titletext("Calendar/CheckBox/Radio/FileUpload/FileDownload");

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
            this.Radio00.addEventHandler("onitemclick", this.Radio00_onitemclick, this);
            this.Radio01.addEventHandler("onitemclick", this.Radio00_onitemclick, this);
            this.Radio02.addEventHandler("onitemclick", this.Radio00_onitemclick, this);
            this.Radio03.addEventHandler("onitemclick", this.Radio00_onitemclick, this);

        };

        this.loadIncludeScript("Guide_02.xfdl", true);

       
    };
}
)();
