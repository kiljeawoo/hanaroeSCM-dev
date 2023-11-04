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
                this.set_name("pattern_01");
                this.set_titletext("List Detail(n:n:n)");
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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column5\">2015-04-04</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">7</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">8</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0", "29", null, "151", "15", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", "91", "21", null, null, this.Div00);
            obj.set_taborder("0");
            obj.set_text("기준년도");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "66", "91", "21", null, null, this.Div00);
            obj.set_taborder("1");
            obj.set_text("농협사업장");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "15", "36", "103", "21", null, null, this.Div00);
            obj.set_taborder("2");
            obj.set_text("계통계약구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "15", "118", "102", "21", null, null, this.Div00);
            obj.set_taborder("3");
            obj.set_text("조회구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Radio("Radio00", "absolute", "119", "118", "205", "21", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            var Radio00_innerdataset = new Dataset("Radio00_innerdataset", this.Div00.Radio00);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">조합</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">상품</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Radio("Radio01", "absolute", "119", "66", "204", "21", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            var Radio01_innerdataset = new Dataset("Radio01_innerdataset", this.Div00.Radio01);
            Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">실매업체(마트)</Col></Row></Rows>");
            obj.set_innerdataset(Radio01_innerdataset);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Combo("Combo00", "absolute", "445", "10", "199", "21", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_text("Combo00");
            obj = new Static("Static04", "absolute", "330", "118", "102", "21", null, null, this.Div00);
            obj.set_taborder("9");
            obj.set_text("과세구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Combo("Combo01", "absolute", "118", "36", "214", "21", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_text("전체");
            obj = new Combo("Combo02", "absolute", "445", "118", "199", "21", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_text("전체");
            obj = new Static("Static05", "absolute", "15", "92", "91", "21", null, null, this.Div00);
            obj.set_taborder("12");
            obj.set_text("상품코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Radio("Radio02", "absolute", "119", "92", "204", "21", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            var Radio02_innerdataset = new Dataset("Radio02_innerdataset", this.Div00.Radio02);
            Radio02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">상품코드</Col></Row></Rows>");
            obj.set_innerdataset(Radio02_innerdataset);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Edit("Edit01", "absolute", "118", "10", "50", "21", null, null, this.Div00);
            obj.set_taborder("14");
            obj.set_cssclass("WF_Essential");
            obj.set_value("2015");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "330", "10", "115", "21", null, null, this.Div00);
            obj.set_taborder("15");
            obj.set_text("상품대분류코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("Button67", "absolute", "623", "92", "21", "21", null, null, this.Div00);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit04", "absolute", "445", "92", "175", "21", null, null, this.Div00);
            obj.set_taborder("17");
            obj.set_cssclass("WF_Essential");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit03", "absolute", "332", "92", "110", "21", null, null, this.Div00);
            obj.set_taborder("18");
            obj.set_cssclass("WF_Essential");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "332", "66", "110", "21", null, null, this.Div00);
            obj.set_taborder("20");
            obj.set_cssclass("WF_Essential");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "623", "66", "21", "21", null, null, this.Div00);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit02", "absolute", "445", "66", "175", "21", null, null, this.Div00);
            obj.set_taborder("22");
            obj.set_cssclass("WF_Essential");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("47");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "30", null, "93", "787", null, this);
            obj.set_taborder("48");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "832", "71", null, "122", "-54", null, this);
            obj.set_taborder("53");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "788", "5", "15", "490", null, null, this);
            obj.set_taborder("58");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Button("Button07", "absolute", null, "0", "53", "21", "161", null, this);
            obj.set_taborder("65");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", null, "0", "67", "21", "489", null, this);
            obj.set_taborder("66");
            obj.set_text("권한사업장");
            obj.set_cssclass("sta_WF_MiniTitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button06", "absolute", null, "0", "41", "21", "118", null, this);
            obj.set_taborder("67");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button08", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("68");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button09", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("69");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00", "absolute", null, "0", "18", "21", "222", null, this);
            obj.set_taborder("70");
            obj.set_text("CheckBox00");
            obj.set_cssclass("chk_WF_allSlct");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", null, "5", "5", "11", "215", null, this);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_Vdash");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", null, "0", "244", "21", "245", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("72");
            obj.set_value("0");
            obj.set_text("(주)도루코하나로상사[29001038000010]");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("lv");
            obj.set_datacolumn("data");
            obj.set_displayrowcount("5");
            obj.set_cssclass("WF_Essential");
            obj.set_index("0");

            obj = new Div("Div02", "absolute", "0", "179", null, null, "15", "0", this);
            obj.set_taborder("64");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Button("Button02", "absolute", null, "16", "89", "21", "0", null, this.Div02);
            obj.set_taborder("0");
            obj.set_text("엑셀다운로드");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button05", "absolute", null, "183", "89", "21", "0", null, this.Div02);
            obj.set_taborder("1");
            obj.set_text("엑셀다운로드");
            this.Div02.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "414", "42", null, "126", "0", null, this.Div02);
            obj.set_taborder("2");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"153\"/><Column size=\"176\"/><Column size=\"140\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순서\"/><Cell col=\"1\" text=\"경제통합 사업장코드\"/><Cell col=\"2\" text=\"중앙회경제통합 사업장코드\"/><Cell col=\"3\" text=\"경제통합 상품코드\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "0", "209", null, null, "0", "0", this.Div02);
            obj.set_taborder("3");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"135\"/><Column size=\"135\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순서\"/><Cell col=\"1\" text=\"경제통합 사업장코드\"/><Cell col=\"2\" text=\"중앙회경제통합 사업장코드\"/><Cell col=\"3\" text=\"경제통합상품 대분류코드\"/><Cell col=\"4\" text=\"경제통합 거래처코드\"/><Cell col=\"5\" text=\"경제통합 상품코드\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);
            obj = new Grid("Grid02", "absolute", "0", "42", "398", "126", null, null, this.Div02);
            obj.set_taborder("4");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"200\"/><Column size=\"140\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순서\"/><Cell col=\"1\" text=\"경제통합 거래처코드\"/><Cell col=\"2\" text=\"경제통합 상품코드\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button01", "absolute", "309", "16", "89", "21", null, null, this.Div02);
            obj.set_taborder("5");
            obj.set_text("엑셀다운로드");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button75", "absolute", "46.07%", "0", "63", "12", null, null, this.Div02);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "398", "235", null, "93", "389", null, this);
            obj.set_taborder("73");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "732", "347", "56", "15", null, null, this);
            obj.set_taborder("60");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "732", "180", "56", "15", null, null, this);
            obj.set_taborder("74");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 151, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("64");
            		p.set_text("Div02");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("List Detail(n:n:n)");

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

        this.loadIncludeScript("pattern_05.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
