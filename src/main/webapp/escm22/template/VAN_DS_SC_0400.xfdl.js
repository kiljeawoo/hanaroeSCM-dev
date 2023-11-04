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
                this.set_name("VAN_DS_SC_0400");
                this.set_titletext("입고예약관리");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0", "29", null, "43", "15", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", "79", "21", null, null, this.Div00);
            obj.set_taborder("0");
            obj.set_text("예약일자");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Calendar("Calendar00", "absolute", "94", "10", "100", "21", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static01", "absolute", "528", "10", "79", "21", null, null, this.Div00);
            obj.set_taborder("8");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "224", "10", "115", "21", null, null, this.Div00);
            obj.set_taborder("9");
            obj.set_text("배송예정서번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit20", "absolute", "339", "10", "135", "21", null, null, this.Div00);
            obj.set_taborder("10");
            obj.set_positionstep("1");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "477", "10", "21", "21", null, null, this.Div00);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "607", "10", "127", "21", null, null, this.Div00);
            obj.set_taborder("12");
            obj.set_positionstep("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "0", "71", null, null, "15", "0", this);
            obj.set_taborder("129");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "327", "42", null, "29", "0", null, this.Div02);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "327", "98", null, "29", "0", null, this.Div02);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "327", "70", null, "29", "0", null, this.Div02);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "218", "42", "110", "29", null, null, this.Div02);
            obj.set_taborder("2");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "512", "42", "110", "29", null, null, this.Div02);
            obj.set_taborder("4");
            obj.set_text("운전자명");
            obj.set_cssclass("sta_WF_Label");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static36", "absolute", "218", "154", "110", "29", null, null, this.Div02);
            obj.set_taborder("17");
            obj.set_text("전자태그번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button75", "absolute", "363", "0", null, "12", "362", null, this.Div02);
            obj.set_taborder("49");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.Div02.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "0", "298", null, null, "0", "0", this.Div02);
            obj.set_taborder("53");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"차량번호\"/><Cell col=\"2\" text=\"운전자명\"/><Cell col=\"3\" text=\"연락처\"/><Cell col=\"4\" text=\"회차\"/><Cell col=\"5\" text=\"전자태그\"/><Cell col=\"6\" text=\"TC(소터)\"/><Cell col=\"7\" text=\"TC(벌크)\"/><Cell col=\"8\" text=\"DC(RFID)\"/><Cell col=\"9\" text=\"DC(일반)\"/><Cell col=\"10\" text=\"공급업체코드\"/><Cell col=\"11\" text=\"공급업체명\"/><Cell col=\"12\" text=\"일자\"/><Cell col=\"13\" text=\"삭제..\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "328", "100", "7", "28", null, null, this.Div02);
            obj.set_taborder("59");
            obj.set_text("7");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static47", "absolute", "218", "17", "203", "21", null, null, this.Div02);
            obj.set_taborder("60");
            obj.set_text("차량정보입력");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("Edit02", "absolute", "625", "46", "159", "21", null, null, this.Div02);
            obj.set_taborder("63");
            obj.set_positionstep("1");
            this.Div02.addChild(obj.name, obj);
            obj = new Radio("Radio00", "absolute", "335", "102", "258", "21", null, null, this.Div02);
            this.Div02.addChild(obj.name, obj);
            var Radio00_innerdataset = new Dataset("Radio00_innerdataset", this.Div02.Radio00);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">TC(소터)</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2.TC(벌크)</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">DC(일반)</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_taborder("64");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Static("Static02", "absolute", "218", "98", "110", "29", null, null, this.Div02);
            obj.set_taborder("65");
            obj.set_text("DOCK구분");
            obj.set_cssclass("sta_WF_Label");
            this.Div02.addChild(obj.name, obj);
            obj = new Combo("Combo08", "absolute", "331", "74", "51", "21", null, null, this.Div02);
            this.Div02.addChild(obj.name, obj);
            var Combo08_innerdataset = new Dataset("Combo08_innerdataset", this.Div02.Combo08);
            Combo08_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">010</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">011</Col></Row></Rows>");
            obj.set_innerdataset(Combo08_innerdataset);
            obj.set_taborder("67");
            obj.set_value("1");
            obj.set_text("010");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj = new Static("Static42", "absolute", "443", "74", "9", "21", null, null, this.Div02);
            obj.set_taborder("68");
            obj.set_text("-");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static48", "absolute", "384", "74", "9", "21", null, null, this.Div02);
            obj.set_taborder("69");
            obj.set_text("-");
            this.Div02.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit10", "absolute", "452", "74", "48", "21", null, null, this.Div02);
            obj.set_taborder("70");
            obj.set_value("1234");
            this.Div02.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit11", "absolute", "393", "74", "48", "21", null, null, this.Div02);
            obj.set_taborder("71");
            obj.set_value("1234");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("Edit20", "absolute", "331", "46", "154", "21", null, null, this.Div02);
            obj.set_taborder("61");
            obj.set_positionstep("1");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "488", "46", "21", "21", null, null, this.Div02);
            obj.set_taborder("62");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.Div02.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "0", "42", "203", "215", null, null, this.Div02);
            obj.set_taborder("73");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"배송예정서번호\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "0", "17", "203", "21", null, null, this.Div02);
            obj.set_taborder("74");
            obj.set_text("배송예정서 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "218", "70", "110", "29", null, null, this.Div02);
            obj.set_taborder("75");
            obj.set_text("연락처");
            obj.set_cssclass("sta_WF_Label");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "327", "126", null, "29", "0", null, this.Div02);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "218", "126", "110", "29", null, null, this.Div02);
            obj.set_taborder("77");
            obj.set_text("예약시간");
            obj.set_cssclass("sta_WF_Label");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "512", "126", "110", "29", null, null, this.Div02);
            obj.set_taborder("78");
            obj.set_text("삭제여부");
            obj.set_cssclass("sta_WF_Label");
            this.Div02.addChild(obj.name, obj);
            obj = new CheckBox("CheckBox00", "absolute", "629", "130", "56", "21", null, null, this.Div02);
            obj.set_taborder("79");
            obj.set_text("삭제");
            this.Div02.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "331", "130", "178", "21", null, null, this.Div02);
            this.Div02.addChild(obj.name, obj);
            var Combo00_innerdataset = new Dataset("Combo00_innerdataset", this.Div02.Combo00);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택안됨</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">가나다</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_taborder("80");
            obj.set_text("선택안됨");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_index("0");
            obj = new Static("Static12", "absolute", "327", "154", null, "29", "0", null, this.Div02);
            obj.set_taborder("81");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div02.addChild(obj.name, obj);
            obj = new Combo("Combo01", "absolute", "331", "158", "178", "21", null, null, this.Div02);
            this.Div02.addChild(obj.name, obj);
            var Combo01_innerdataset = new Dataset("Combo01_innerdataset", this.Div02.Combo01);
            Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택안됨</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">가나다</Col></Row></Rows>");
            obj.set_innerdataset(Combo01_innerdataset);
            obj.set_taborder("82");
            obj.set_value("1");
            obj.set_text("선택안됨");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj = new Static("Static13", "absolute", "218", "182", "110", "75", null, null, this.Div02);
            obj.set_taborder("83");
            obj.set_text("전자태그번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "327", "182", null, "75", "0", null, this.Div02);
            obj.set_taborder("84");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div02.addChild(obj.name, obj);
            obj = new TextArea("TextArea00", "absolute", "331", "186", "453", "50", null, null, this.Div02);
            obj.set_taborder("85");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "331", "236", null, "21", "62", null, this.Div02);
            obj.set_taborder("86");
            obj.set_text("* 좌측(배송예정서정보)에서 해당 차량에 배정된 항목을 선택하십시요.");
            obj.set_cssclass("sta_WF_DescriptionB02");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button43", "absolute", null, "272", "22", "21", "25", null, this.Div02);
            obj.set_taborder("87");
            obj.set_cssclass("btn_WF_Grdexpand");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button42", "absolute", null, "272", "22", "21", "1", null, this.Div02);
            obj.set_taborder("88");
            obj.set_cssclass("btn_WF_Grdreduce");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static41", "absolute", null, "272", "114", "21", "50", null, this.Div02);
            obj.set_taborder("89");
            obj.set_text("[처리대상건수 <fc v='#0084ab'><b v='true'>0</b></fc>건]");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_GridCount");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "310", "30", "95", "10", null, null, this);
            obj.set_taborder("31");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("105");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "310", "61", "95", "10", null, null, this);
            obj.set_taborder("106");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "788", "-18", "15", "490", null, null, this);
            obj.set_taborder("107");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "92.53%", "21", null, "8", "1.87%", null, this);
            obj.set_taborder("108");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "92.53%", "72", null, "15", "1.87%", null, this);
            obj.set_taborder("111");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "0.12%", "30", null, "41", "98.01%", null, this);
            obj.set_taborder("115");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "92.53%", "328", null, "15", "1.87%", null, this);
            obj.set_taborder("114");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("Button06", "absolute", null, "0", "41", "21", "118", null, this);
            obj.set_taborder("132");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button08", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("133");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button09", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("134");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00", "absolute", null, "0", "18", "21", "167", null, this);
            obj.set_taborder("135");
            obj.set_text("CheckBox00");
            obj.set_cssclass("chk_WF_allSlct");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", null, "5", "5", "11", "160", null, this);
            obj.set_taborder("136");
            obj.set_cssclass("sta_WF_Vdash");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", null, "0", "270", "21", "190", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("138");
            obj.set_value("0");
            obj.set_text("(주)도루코하나로상사[29001038000010]");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("lv");
            obj.set_datacolumn("data");
            obj.set_displayrowcount("5");
            obj.set_cssclass("WF_Essential");
            obj.set_index("0");

            obj = new Static("Static04", "absolute", "195", "16", "30", "67", null, null, this);
            obj.set_taborder("139");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "499", "20", "30", "67", null, null, this);
            obj.set_taborder("140");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", null, "0", "67", "21", "460", null, this);
            obj.set_taborder("131");
            obj.set_text("권한사업장");
            obj.set_cssclass("sta_WF_MiniTitle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.Div00,
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
            		p.set_taborder("129");
            		p.set_text("Div02");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("입고예약관리");

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

        this.loadIncludeScript("VAN_DS_SC_0400.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
