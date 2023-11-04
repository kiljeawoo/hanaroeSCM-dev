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
                this.set_name("OMG_DS_SC_5060");
                this.set_titletext("메뉴관리조회");
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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">가나다라마바아자</Col><Col id=\"Column5\">ABC123456789</Col><Col id=\"Column6\">가나다라마바아자</Col><Col id=\"Column7\">가나다라마바아자</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">가나다라마바아자</Col><Col id=\"Column6\">가나다라마바아자</Col><Col id=\"Column7\">가나다라마바아자</Col><Col id=\"Column5\">ABC123456789</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">가나다라마바아자</Col><Col id=\"Column7\">가나다라마바아자</Col><Col id=\"Column6\">가나다라마바아자</Col><Col id=\"Column5\">ABC123456789</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">가나다라마바아자</Col><Col id=\"Column6\">가나다라마바아자</Col><Col id=\"Column7\">가나다라마바아자</Col><Col id=\"Column5\">ABC123456789</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">가나다라마바아자</Col><Col id=\"Column6\">가나다라마바아자</Col><Col id=\"Column7\">가나다라마바아자</Col><Col id=\"Column5\">ABC123456789</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">가나다라마바아자</Col><Col id=\"Column6\">가나다라마바아자</Col><Col id=\"Column7\">가나다라마바아자</Col><Col id=\"Column5\">ABC123456789</Col></Row><Row><Col id=\"Column0\">7</Col><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">가나다라마바아자</Col><Col id=\"Column6\">가나다라마바아자</Col><Col id=\"Column7\">가나다라마바아자</Col><Col id=\"Column5\">ABC123456789</Col></Row><Row><Col id=\"Column0\">8</Col><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">가나다라마바아자</Col><Col id=\"Column6\">가나다라마바아자</Col><Col id=\"Column7\">가나다라마바아자</Col><Col id=\"Column5\">ABC123456789</Col></Row><Row><Col id=\"Column0\">9</Col><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">가나다라마바아자</Col><Col id=\"Column6\">가나다라마바아자</Col><Col id=\"Column7\">가나다라마바아자</Col><Col id=\"Column5\">ABC123456789</Col></Row><Row><Col id=\"Column0\">10</Col><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">가나다라마바아자</Col><Col id=\"Column6\">가나다라마바아자</Col><Col id=\"Column7\">가나다라마바아자</Col><Col id=\"Column5\">ABC123456789</Col></Row><Row><Col id=\"Column0\">11</Col><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">가나다라마바아자</Col><Col id=\"Column6\">가나다라마바아자</Col><Col id=\"Column7\">가나다라마바아자</Col><Col id=\"Column5\">ABC123456789</Col></Row><Row><Col id=\"Column0\">12</Col><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">가나다라마바아자</Col><Col id=\"Column6\">가나다라마바아자</Col><Col id=\"Column7\">가나다라마바아자</Col><Col id=\"Column5\">ABC123456789</Col></Row><Row><Col id=\"Column0\">13</Col><Col id=\"Column2\">ABC123456789</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button08", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("11");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button09", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", null, "0", "41", "21", "118", null, this);
            obj.set_taborder("37");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("68");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "788", "0", "15", "490", null, null, this);
            obj.set_taborder("71");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "732", "21", "56", "8", null, null, this);
            obj.set_taborder("72");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "0", "29", null, "95", "15", null, this);
            obj.set_taborder("85");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Edit("Edit02", "absolute", "118", "10", "140", "21", null, null, this.Div00);
            obj.set_taborder("76");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", "103", "21", null, null, this.Div00);
            obj.set_taborder("77");
            obj.set_text("메뉴ID");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "36", "103", "21", null, null, this.Div00);
            obj.set_taborder("78");
            obj.set_text("서비스그룹");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "306", "36", "0", "21", null, null, this.Div00);
            obj.set_taborder("79");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "288", "10", "79", "21", null, null, this.Div00);
            obj.set_taborder("82");
            obj.set_text("메뉴LEVEL");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "288", "36", "79", "21", null, null, this.Div00);
            obj.set_taborder("83");
            obj.set_text("파일이름");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "537", "10", "79", "21", null, null, this.Div00);
            obj.set_taborder("85");
            obj.set_text("메뉴이름");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "537", "36", "79", "21", null, null, this.Div00);
            obj.set_taborder("86");
            obj.set_text("파일종류");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit03", "absolute", "616", "10", "140", "21", null, null, this.Div00);
            obj.set_taborder("88");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "15", "62", "103", "21", null, null, this.Div00);
            obj.set_taborder("89");
            obj.set_text("화면표시여부");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit04", "absolute", "306", "62", "0", "21", null, null, this.Div00);
            obj.set_taborder("90");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);
            obj = new Combo("Combo03", "absolute", "118", "62", "140", "21", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            var Combo03_innerdataset = new Dataset("Combo03_innerdataset", this.Div00.Combo03);
            Combo03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">1234</Col></Row></Rows>");
            obj.set_innerdataset(Combo03_innerdataset);
            obj.set_taborder("91");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_text("전체");
            obj.set_index("0");
            obj = new Static("Static07", "absolute", "288", "62", "79", "21", null, null, this.Div00);
            obj.set_taborder("92");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Combo("Combo04", "absolute", "367", "62", "140", "21", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            var Combo04_innerdataset = new Dataset("Combo04_innerdataset", this.Div00.Combo04);
            Combo04_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">가나다</Col></Row></Rows>");
            obj.set_innerdataset(Combo04_innerdataset);
            obj.set_taborder("93");
            obj.set_value("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_text("전체");
            obj.set_index("0");
            obj = new Edit("Edit05", "absolute", "118", "36", "140", "21", null, null, this.Div00);
            obj.set_taborder("94");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit06", "absolute", "367", "36", "140", "21", null, null, this.Div00);
            obj.set_taborder("95");
            this.Div00.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "367", "10", "140", "21", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            var Combo00_innerdataset = new Dataset("Combo00_innerdataset", this.Div00.Combo00);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">가나다</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_taborder("96");
            obj.set_value("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_text("전체");
            obj.set_index("0");
            obj = new Edit("Edit00", "absolute", "616", "36", "140", "21", null, null, this.Div00);
            obj.set_taborder("97");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "0", "123", null, null, "15", "-26", this);
            obj.set_taborder("81");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Button("Button75", "absolute", "363", "0", null, "12", "362", null, this.Div02);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.Div02.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "0", "42", null, null, "0", "26", this.Div02);
            obj.set_taborder("2");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"70\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"No.\"/><Cell col=\"1\" text=\"메뉴ID\"/><Cell col=\"2\" text=\"메뉴LEVEL\"/><Cell col=\"3\" text=\"메뉴이름\"/><Cell col=\"4\" text=\"서비스그룹\"/><Cell col=\"5\" text=\"파일이름\"/><Cell col=\"6\" text=\"파일종류\"/><Cell col=\"7\" text=\"화면표시여부\"/><Cell col=\"8\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "922", "1", "56", "15", null, null, this.Div02);
            obj.set_taborder("5");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "922", "37", "56", "5", null, null, this.Div02);
            obj.set_taborder("6");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "508", "31", "30", "67", null, null, this);
            obj.set_taborder("84");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "1", "30", "15", "67", null, null, this);
            obj.set_taborder("86");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "732", "124", "56", "41", null, null, this);
            obj.set_taborder("87");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "259", "29", "30", "67", null, null, this);
            obj.set_taborder("88");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 95, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("85");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("81");
            		p.set_text("Div02");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("메뉴관리조회");

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

        this.loadIncludeScript("OMG_DS_SC_5060.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
