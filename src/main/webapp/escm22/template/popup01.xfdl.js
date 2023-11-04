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
                this.set_name("popup01");
                this.set_titletext("조회팝업");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,456,353);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("grd01", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">가나다라마</Col><Col id=\"Column1\">123456789</Col><Col id=\"Column2\">abcdefgh</Col><Col id=\"Column3\">가나다라마</Col></Row><Row><Col id=\"Column0\">가나다라마</Col><Col id=\"Column1\">123456789</Col><Col id=\"Column2\">abcdefgh</Col><Col id=\"Column3\">가나다라마</Col></Row><Row><Col id=\"Column0\">가나다라마</Col><Col id=\"Column1\">123456789</Col><Col id=\"Column2\">abcdefgh</Col><Col id=\"Column3\">가나다라마</Col></Row><Row><Col id=\"Column0\">가나다라마</Col><Col id=\"Column1\">123456789</Col><Col id=\"Column2\">abcdefgh</Col><Col id=\"Column3\">가나다라마</Col></Row><Row><Col id=\"Column0\">가나다라마</Col><Col id=\"Column1\">123456789</Col><Col id=\"Column2\">abcdefgh</Col><Col id=\"Column3\">가나다라마</Col></Row><Row><Col id=\"Column0\">가나다라마</Col><Col id=\"Column1\">123456789</Col><Col id=\"Column2\">abcdefgh</Col><Col id=\"Column3\">가나다라마</Col></Row><Row><Col id=\"Column0\">가나다라마</Col><Col id=\"Column1\">123456789</Col><Col id=\"Column2\">abcdefgh</Col><Col id=\"Column3\">가나다라마</Col></Row><Row><Col id=\"Column0\">가나다라마</Col><Col id=\"Column1\">123456789</Col><Col id=\"Column2\">abcdefgh</Col><Col id=\"Column3\">가나다라마</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button07", "absolute", null, "47", "53", "21", "161", null, this);
            obj.set_taborder("0");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button06", "absolute", null, "47", "41", "21", "118", null, this);
            obj.set_taborder("1");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button08", "absolute", null, "47", "41", "21", "75", null, this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button09", "absolute", null, "47", "58", "21", "15", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "17", "76", null, "43", "17", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "148", "10", "257", "21", null, null, this.Div00);
            obj.set_taborder("18");
            this.Div00.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "15", "10", "130", "21", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("20");
            obj.set_text("조건선택");

            obj = new Grid("Grid00", "absolute", "17", "134", null, "163", "17", null, this);
            obj.set_taborder("5");
            obj.set_binddataset("grd01");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"106\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button65", "absolute", "329", "307", "54", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "385", "307", "54", "29", null, null, this);
            obj.set_taborder("7");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "76", "17", "73", null, null, this);
            obj.set_taborder("8");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "439", "76", "17", "67", null, null, this);
            obj.set_taborder("9");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "363", "336", "91", "17", null, null, this);
            obj.set_taborder("10");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "363", "297", "91", "10", null, null, this);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "363", "68", "91", "8", null, null, this);
            obj.set_taborder("12");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "242", "32", "91", "15", null, null, this);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "363", "119", "76", "15", null, null, this);
            obj.set_taborder("14");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "419", "0", "37", "32", null, null, this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("16");
            obj.set_text("팝업타이틀");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "441", "36", "23", "17", null, null, this);
            obj.set_taborder("18");
            obj.set_text("37");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "0", "8", "16", "17", null, null, this);
            obj.set_taborder("19");
            obj.set_text("32");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static79", "absolute", "419", "35", "37", "1", null, null, this);
            obj.set_taborder("20");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static81", "absolute", "455", "32", "1", "8", null, null, this);
            obj.set_taborder("22");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static82", "absolute", "10", "31", "9", "1", null, null, this);
            obj.set_taborder("23");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static83", "absolute", "10", "0", "9", "1", null, null, this);
            obj.set_taborder("24");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static88", "absolute", "14", "1", "1", "31", null, null, this);
            obj.set_taborder("25");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "465", "8", "16", "17", null, null, this);
            obj.set_taborder("26");
            obj.set_text("32");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "456", "31", "9", "1", null, null, this);
            obj.set_taborder("27");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "456", "0", "9", "1", null, null, this);
            obj.set_taborder("28");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "460", "1", "1", "31", null, null, this);
            obj.set_taborder("29");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "492", "6", "210", "18", null, null, this);
            obj.set_taborder("30");
            obj.set_text("class : <b v='true'>btn_WF_PopupClose</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "6", "37", "188", "18", null, null, this);
            obj.set_taborder("31");
            obj.set_text("class : <b v='true'>sta_WF_PopupTitle</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "63", "22", "1", "23", null, null, this);
            obj.set_taborder("32");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "92", "372", "183", "18", null, null, this);
            obj.set_taborder("34");
            obj.set_text("class : <b v='true'>frm_WF_PopupBg</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static80", "absolute", "419", "32", "1", "8", null, null, this);
            obj.set_taborder("35");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "172", "334", "1", "40", null, null, this);
            obj.set_taborder("36");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 456, 353, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("조회팝업");
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

        this.loadIncludeScript("popup01.xfdl", true);

       
    };
}
)();
