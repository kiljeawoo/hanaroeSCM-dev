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
                this.set_titletext("New Form");
                this._setFormPosition(0,0,993,490);
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
            obj = new Div("Div00", "absolute", "0", "29", null, "69", "15", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", "130", "21", null, null, this.Div00);
            obj.set_taborder("0");
            obj.set_text("상품코드 조회구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "36", "130", "21", null, null, this.Div00);
            obj.set_taborder("1");
            obj.set_text("물류센터코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "480", "10", "77", "21", null, null, this.Div00);
            obj.set_taborder("2");
            obj.set_text("적용일자");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "480", "36", "77", "21", null, null, this.Div00);
            obj.set_taborder("3");
            obj.set_text("참조구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Radio("Radio00", "absolute", "557", "36", "157", "21", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            var Radio00_innerdataset = new Dataset("Radio00_innerdataset", this.Div00.Radio00);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">발주전표</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">수기입력</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Radio("Radio01", "absolute", "145", "10", "157", "21", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            var Radio01_innerdataset = new Dataset("Radio01_innerdataset", this.Div00.Radio01);
            Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">상품코드</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">상품명</Col></Row></Rows>");
            obj.set_innerdataset(Radio01_innerdataset);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Edit("Edit00", "absolute", "299", "10", "151", "21", null, null, this.Div00);
            obj.set_taborder("6");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "299", "36", "151", "21", null, null, this.Div00);
            obj.set_taborder("7");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "145", "36", "151", "21", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_text("Combo00");
            obj = new Calendar("Calendar00", "absolute", "557", "10", "100", "21", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("Calendar01", "absolute", "668", "10", "100", "21", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj = new Static("Static04", "absolute", "658", "10", "10", "21", null, null, this.Div00);
            obj.set_taborder("11");
            obj.set_text("~");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", "397", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("Button07", "absolute", null, "0", "53", "21", "161", null, this);
            obj.set_taborder("10");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", null, "0", "67", "21", "519", null, this);
            obj.set_taborder("17");
            obj.set_text("권한사업장");
            obj.set_cssclass("sta_WF_MiniTitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button06", "absolute", null, "0", "41", "21", "118", null, this);
            obj.set_taborder("9");
            obj.set_text("엑셀");
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

            obj = new CheckBox("CheckBox00", "absolute", null, "0", "18", "21", "222", null, this);
            obj.set_taborder("13");
            obj.set_text("CheckBox00");
            obj.set_cssclass("chk_WF_allSlct");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", null, "0", "275", "21", "245", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("18");
            obj.set_value("0");
            obj.set_text("[29001038000010] (주)도루코하나로상사");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("lv");
            obj.set_datacolumn("data");
            obj.set_displayrowcount("5");
            obj.set_cssclass("WF_Essential");
            obj.set_index("0");

            obj = new Static("Static01", "absolute", null, "5", "5", "11", "215", null, this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_Vdash");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "923", "98", "55", "15", null, null, this);
            obj.set_taborder("20");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "923", "21", "55", "8", null, null, this);
            obj.set_taborder("21");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "978", "0", "15", "491", null, null, this);
            obj.set_taborder("22");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "451", "30", "30", "67", null, null, this);
            obj.set_taborder("26");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "1", "30", "15", "67", null, null, this);
            obj.set_taborder("27");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "124", "30", "22", "67", null, null, this);
            obj.set_taborder("28");
            obj.set_text("22");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "538", "30", "20", "67", null, null, this);
            obj.set_taborder("29");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "323", "87", "103", "10", null, null, this);
            obj.set_taborder("30");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "323", "30", "103", "10", null, null, this);
            obj.set_taborder("31");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "323", "61", "103", "5", null, null, this);
            obj.set_taborder("32");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "0%", "97", null, null, "0%", "0", this);
            obj.set_taborder("35");
            obj.set_text("Div02");
            obj.style.set_background("cornflowerblue");
            this.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "78.42%", "20", null, "21", "16.21%", null, this.Div02);
            obj.set_taborder("0");
            obj.set_text("행추가");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button01", "absolute", "83.99%", "20", null, "21", "10.64%", null, this.Div02);
            obj.set_taborder("1");
            obj.set_text("행삭제");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button02", "absolute", "89.56%", "20", null, "21", "1.52%", null, this.Div02);
            obj.set_taborder("2");
            obj.set_text("엑셀다운로드");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button03", "absolute", "78.42%", "233", null, "21", "16.21%", null, this.Div02);
            obj.set_taborder("3");
            obj.set_text("행추가");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button04", "absolute", "83.99%", "233", null, "21", "10.64%", null, this.Div02);
            obj.set_taborder("4");
            obj.set_text("행삭제");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button05", "absolute", "89.56%", "233", null, "21", "1.52%", null, this.Div02);
            obj.set_taborder("5");
            obj.set_text("엑셀다운로드");
            this.Div02.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "0.3%", "46", null, "172", "1.52%", null, this.Div02);
            obj.set_taborder("6");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"136\"/><Column size=\"80\"/><Column size=\"139\"/><Column size=\"145\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"경제통합 공급처모드\"/><Cell col=\"2\" text=\"적용일자\"/><Cell col=\"3\" text=\"경제통합 상품코드\"/><Cell col=\"4\" text=\"경제통합 사업장코드\"/><Cell col=\"5\" text=\"발주일자\"/><Cell col=\"6\" text=\"발주전표번호\"/><Cell col=\"7\" text=\"발주상세 일련번호\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "0.3%", "259", null, null, "1.51%", "2", this.Div02);
            obj.set_taborder("7");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"136\"/><Column size=\"80\"/><Column size=\"139\"/><Column size=\"145\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"경제통합 공급처모드\"/><Cell col=\"2\" text=\"적용일자\"/><Cell col=\"3\" text=\"경제통합 상품코드\"/><Cell col=\"4\" text=\"경제통합 사업장코드\"/><Cell col=\"5\" text=\"발주일자\"/><Cell col=\"6\" text=\"발주전표번호\"/><Cell col=\"7\" text=\"발주상세 일련번호\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "92.75%", "198", null, "15", "1.71%", null, this.Div02);
            obj.set_taborder("8");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "92.75%", "21", null, "5", "1.71%", null, this.Div02);
            obj.set_taborder("9");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "92.75%", "234", null, "5", "1.71%", null, this.Div02);
            obj.set_taborder("10");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button10", "absolute", "46.12%", "0", null, "12", "47.53%", null, this.Div02);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.Div02.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 69, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 393, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("35");
            		p.set_text("Div02");
            		p.style.set_background("cornflowerblue");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
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
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("Sample018_searchDivResize.xfdl", "lib::comLib.xjs");
        this.registerScript("Sample018_searchDivResize.xfdl", function() {
        //include "lib::comLib.xjs";
        /*****************************************************************************************
        조회조건 Resize
        1. 해당버튼 onclick이벤트에 gfn_searchDivResize함수 선언
        2. 인자값으로는 
           - 버튼object
           - 조회조건감싼Div 
           - Grid등 입력단 감싼 Div(파랑색영역)
        3. 주의! 화면에서 버튼의 background를 수정했다면, 공통에서 CSS를 변경해도
           반영이 안되므로 주의. 변경했는지는 Bold체 유무로 확인.
           
        @화살표버튼이 조건조건Div와 떨어져보인다면 아래 참조 
        1. 파랑색영격Div의 Top은 조건조건Div의 Bottom(top+height)의 -1을 준다.
           예) 조건조건Div의 Bottom이 98이면, 파랑색영격Div의 Top은 97
        2. 화살표버튼은 파랑색영격Div에 속해 있어야 하고, 화살표버튼 Top은 0으로 한다.
        ******************************************************************************************/
        this.Button10_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.Div00, this.Div02);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div02.Button10.addEventHandler("onclick", this.Button10_onclick, this);

        };

        this.loadIncludeScript("Sample018_searchDivResize.xfdl");
        this.loadPreloadList();
       
    };
}
)();
