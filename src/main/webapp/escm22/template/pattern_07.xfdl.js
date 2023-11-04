﻿(function()
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
                this.set_name("pattern_01");
                this.set_titletext("Shuttle01");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">가나다라마바아자</Col><Col id=\"Column5\"/><Col id=\"Column6\"/><Col id=\"Column7\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">가나다라마바아자</Col><Col id=\"Column6\"/><Col id=\"Column7\"/><Col id=\"Column5\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">가나다라마바아자</Col><Col id=\"Column7\"/><Col id=\"Column6\"/><Col id=\"Column5\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">가나다라마바아자</Col><Col id=\"Column6\"/><Col id=\"Column7\"/><Col id=\"Column5\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">가나다라마바아자</Col><Col id=\"Column6\"/><Col id=\"Column7\"/><Col id=\"Column5\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">가나다라마바아자</Col><Col id=\"Column6\"/><Col id=\"Column7\"/><Col id=\"Column5\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">가나다라마바아자</Col><Col id=\"Column6\"/><Col id=\"Column7\"/><Col id=\"Column5\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">가나다라마바아자</Col><Col id=\"Column6\"/><Col id=\"Column7\"/><Col id=\"Column5\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0", "29", null, "69", "15", null, this);
            obj.set_taborder("77");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Edit("Edit02", "absolute", "106", "10", "140", "21", null, null, this.Div00);
            obj.set_taborder("50");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", "91", "21", null, null, this.Div00);
            obj.set_taborder("51");
            obj.set_text("검색텍스트");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "36", "91", "21", null, null, this.Div00);
            obj.set_taborder("52");
            obj.set_text("검색텍스트");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "294", "36", "0", "21", null, null, this.Div00);
            obj.set_taborder("53");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "106", "36", "140", "21", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("54");
            obj.set_text("[1100] 서울");
            obj = new Edit("Edit00", "absolute", "367", "10", "140", "21", null, null, this.Div00);
            obj.set_taborder("55");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "276", "10", "91", "21", null, null, this.Div00);
            obj.set_taborder("56");
            obj.set_text("검색텍스트");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "276", "36", "91", "21", null, null, this.Div00);
            obj.set_taborder("57");
            obj.set_text("검색텍스트");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Combo("Combo01", "absolute", "367", "36", "140", "21", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("58");
            obj.set_text("[1100] 서울");
            obj = new Static("Static03", "absolute", "537", "10", "91", "21", null, null, this.Div00);
            obj.set_taborder("59");
            obj.set_text("검색텍스트");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "537", "36", "91", "21", null, null, this.Div00);
            obj.set_taborder("60");
            obj.set_text("검색텍스트");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Combo("Combo02", "absolute", "628", "36", "140", "21", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("61");
            obj.set_text("[1100] 서울");
            obj = new Edit("Edit03", "absolute", "628", "10", "140", "21", null, null, this.Div00);
            obj.set_taborder("62");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "0", "97", null, null, "15", "0", this);
            obj.set_taborder("78");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", null, "16", "53", "21", "55", null, this.Div02);
            obj.set_taborder("11");
            obj.set_text("행추가");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button01", "absolute", null, "16", "53", "21", "0", null, this.Div02);
            obj.set_taborder("12");
            obj.set_text("행삭제");
            this.Div02.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "417", "42", null, null, "0", "6", this.Div02);
            obj.set_taborder("13");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"그리드타이틀01\"/><Cell col=\"2\" text=\"그리드타이틀02\"/><Cell col=\"3\" text=\"그리드타이틀03\"/><Cell col=\"4\" text=\"그리드타이틀04\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "0", "42", "375", null, null, "0", this.Div02);
            obj.set_taborder("14");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"그리드타이틀01\"/><Cell col=\"2\" text=\"그리드타이틀02\"/><Cell col=\"3\" text=\"그리드타이틀03\"/><Cell col=\"4\" text=\"그리드타이틀04\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "17", "228", "21", null, null, this.Div02);
            obj.set_taborder("15");
            obj.set_text("서브타이틀01");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "417", "17", "228", "21", null, null, this.Div02);
            obj.set_taborder("16");
            obj.set_text("서브타이틀02");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button03", "absolute", "267", "16", "53", "21", null, null, this.Div02);
            obj.set_taborder("17");
            obj.set_text("행추가");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button04", "absolute", "322", "16", "53", "21", null, null, this.Div02);
            obj.set_taborder("18");
            obj.set_text("행삭제");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button42", "absolute", "385", "219", "22", "22", null, null, this.Div02);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_ShuttleL");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button43", "absolute", "385", "192", "22", "22", null, null, this.Div02);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_ShuttleR");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button75", "absolute", "46.07%", "0", "63", "12", null, null, this.Div02);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button07", "absolute", null, "0", "53", "21", "161", null, this);
            obj.set_taborder("10");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button08", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("11");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button09", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "-15", "-15", "0", "0", null, null, this);
            obj.set_taborder("33");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", null, "0", "41", "21", "118", null, this);
            obj.set_taborder("37");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("52");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "731", "21", "56", "8", null, null, this);
            obj.set_taborder("60");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "731", "134", "56", "5", null, null, this);
            obj.set_taborder("70");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "731", "98", "56", "15", null, null, this);
            obj.set_taborder("71");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "407", "249", "10", "131", null, null, this);
            obj.set_taborder("74");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "375", "249", "10", "131", null, null, this);
            obj.set_taborder("75");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "477", "311", null, "5", "479", null, this);
            obj.set_taborder("76");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "788", "0", "15", "490", null, null, this);
            obj.set_taborder("63");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff4f");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 69, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("77");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("78");
            		p.set_text("Div02");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("Shuttle01");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("pattern_07.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
