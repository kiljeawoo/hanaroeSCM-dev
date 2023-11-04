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
                this.set_name("Guide_08");
                this.set_titletext("Search Area");
                this._setFormPosition(0,0,1070,1200);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_radio", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">전체검사 신청서</Col></Row><Row><Col id=\"Column0\">완료검사 신청서</Col></Row><Row><Col id=\"Column0\">미완료검사 신청서</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static02", "absolute", "15", "472", "297", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_text("1줄  [조회영역사이즈 : W 788 * H 43 ] ");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "15", "596", null, "69", "267", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", "130", "21", null, null, this.Div00);
            obj.set_taborder("12");
            obj.set_text("상품코드 조회구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "36", "130", "21", null, null, this.Div00);
            obj.set_taborder("13");
            obj.set_text("물류센터코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "480", "10", "79", "21", null, null, this.Div00);
            obj.set_taborder("14");
            obj.set_text("적용일자");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "480", "36", "79", "21", null, null, this.Div00);
            obj.set_taborder("15");
            obj.set_text("참조구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Radio("Radio00", "absolute", "557", "36", "157", "21", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            var Radio00_innerdataset = new Dataset("Radio00_innerdataset", this.Div00.Radio00);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">발주전표</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">수기입력</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_taborder("16");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Radio("Radio01", "absolute", "145", "10", "157", "21", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            var Radio01_innerdataset = new Dataset("Radio01_innerdataset", this.Div00.Radio01);
            Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">상품코드</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">상품명</Col></Row></Rows>");
            obj.set_innerdataset(Radio01_innerdataset);
            obj.set_taborder("17");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Edit("Edit00", "absolute", "299", "10", "151", "21", null, null, this.Div00);
            obj.set_taborder("18");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "299", "36", "151", "21", null, null, this.Div00);
            obj.set_taborder("19");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);
            obj = new Calendar("Calendar00", "absolute", "559", "10", "100", "21", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("21");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("Calendar01", "absolute", "670", "10", "100", "21", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("22");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static04", "absolute", "660", "10", "10", "21", null, null, this.Div00);
            obj.set_taborder("23");
            obj.set_text("~");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit02", "absolute", "145", "36", "152", "21", null, null, this.Div00);
            obj.set_taborder("24");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "15", "721", null, "95", "267", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Edit("Edit02", "absolute", "105", "10", "151", "21", null, null, this.Div01);
            obj.set_taborder("24");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", "91", "21", null, null, this.Div01);
            obj.set_taborder("25");
            obj.set_text("검색텍스트");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "36", "91", "21", null, null, this.Div01);
            obj.set_taborder("26");
            obj.set_text("검색텍스트");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "378", "10", "175", "21", null, null, this.Div01);
            obj.set_taborder("29");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "287", "10", "91", "21", null, null, this.Div01);
            obj.set_taborder("30");
            obj.set_text("검색텍스트");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "287", "36", "91", "21", null, null, this.Div01);
            obj.set_taborder("31");
            obj.set_text("검색텍스트");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "15", "62", "91", "21", null, null, this.Div01);
            obj.set_taborder("37");
            obj.set_text("검색텍스트");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "287", "62", "91", "21", null, null, this.Div01);
            obj.set_taborder("40");
            obj.set_text("검색텍스트");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("Edit05", "absolute", "105", "36", "152", "21", null, null, this.Div01);
            obj.set_taborder("44");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("Edit06", "absolute", "105", "62", "152", "21", null, null, this.Div01);
            obj.set_taborder("45");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("Edit07", "absolute", "378", "36", "175", "21", null, null, this.Div01);
            obj.set_taborder("46");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("Edit08", "absolute", "378", "62", "175", "21", null, null, this.Div01);
            obj.set_taborder("47");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "15", "497", null, "43", "267", null, this);
            obj.set_taborder("5");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Edit("Edit02", "absolute", "106", "10", "151", "21", null, null, this.Div02);
            obj.set_taborder("44");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", "91", "21", null, null, this.Div02);
            obj.set_taborder("45");
            obj.set_text("검색텍스트");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "378", "10", "175", "21", null, null, this.Div02);
            obj.set_taborder("49");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "287", "10", "91", "21", null, null, this.Div02);
            obj.set_taborder("50");
            obj.set_text("검색텍스트");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div02.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "15", "872", null, "121", "267", null, this);
            obj.set_taborder("7");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Edit("Edit02", "absolute", "106", "10", "151", "21", null, null, this.Div03);
            obj.set_taborder("44");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", "91", "21", null, null, this.Div03);
            obj.set_taborder("45");
            obj.set_text("검색텍스트");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "36", "91", "21", null, null, this.Div03);
            obj.set_taborder("46");
            obj.set_text("검색텍스트");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div03.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "378", "10", "175", "21", null, null, this.Div03);
            obj.set_taborder("49");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "287", "10", "91", "21", null, null, this.Div03);
            obj.set_taborder("50");
            obj.set_text("검색텍스트");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "287", "36", "91", "21", null, null, this.Div03);
            obj.set_taborder("51");
            obj.set_text("검색텍스트");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "15", "62", "91", "21", null, null, this.Div03);
            obj.set_taborder("57");
            obj.set_text("검색텍스트");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "287", "62", "91", "21", null, null, this.Div03);
            obj.set_taborder("60");
            obj.set_text("검색텍스트");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "15", "88", "91", "21", null, null, this.Div03);
            obj.set_taborder("64");
            obj.set_text("검색텍스트");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "287", "88", "91", "21", null, null, this.Div03);
            obj.set_taborder("67");
            obj.set_text("검색텍스트");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div03.addChild(obj.name, obj);
            obj = new Edit("Edit06", "absolute", "105", "36", "152", "21", null, null, this.Div03);
            obj.set_taborder("71");
            this.Div03.addChild(obj.name, obj);
            obj = new Edit("Edit07", "absolute", "105", "62", "152", "21", null, null, this.Div03);
            obj.set_taborder("72");
            this.Div03.addChild(obj.name, obj);
            obj = new Edit("Edit08", "absolute", "105", "88", "152", "21", null, null, this.Div03);
            obj.set_taborder("73");
            this.Div03.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "378", "36", "175", "21", null, null, this.Div03);
            obj.set_taborder("74");
            this.Div03.addChild(obj.name, obj);
            obj = new Edit("Edit04", "absolute", "378", "62", "175", "21", null, null, this.Div03);
            obj.set_taborder("75");
            this.Div03.addChild(obj.name, obj);
            obj = new Edit("Edit05", "absolute", "378", "88", "175", "21", null, null, this.Div03);
            obj.set_taborder("76");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "378", "539", null, "12", "629", null, this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "378", "992", null, "12", "629", null, this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.addChild(obj.name, obj);

            obj = new Button("Button75", "absolute", "378", "664", null, "12", "629", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "378", "815", null, "12", "629", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "15", "571", "297", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_text("2줄  [조회영역사이즈 : W 788 * H 69 ] ");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "15", "696", "297", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_text("3줄  [조회영역사이즈 : W 788 * H 95 ] ");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "15", "847", "297", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_text("4줄  [조회영역사이즈 : W 788 * H 121 ] ");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "752", "974", "1", "46", null, null, this);
            obj.set_taborder("16");
            obj.set_text("Static07");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "80", "974", "1", "46", null, null, this);
            obj.set_taborder("18");
            obj.set_text("Static07");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static60", "absolute", "0", "0", null, "30", "0", null, this);
            obj.set_taborder("25");
            obj.set_text("Search Area");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Div("Div04", "absolute", "15", "423", null, "1", "267", null, this);
            obj.set_taborder("26");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "378", "424", null, "12", "629", null, this);
            obj.set_taborder("27");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "15", "398", "225", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_text("조회영역 접혔을때");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button74", "absolute", "15", "1109", "63", "12", null, null, this);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WFSA_SearchOpen");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "15", "1147", "63", "12", null, null, this);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "95", "1104", "217", "18", null, null, this);
            obj.set_taborder("31");
            obj.set_text("class : <b v='true'>btn_WFSA_SearchOpen</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "95", "1142", "217", "18", null, null, this);
            obj.set_taborder("32");
            obj.set_text("class : <b v='true'>btn_WFSA_SearchClose</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static78", "absolute", "397", "607", "10", "1", null, null, this);
            obj.set_taborder("33");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static79", "absolute", "397", "596", "10", "1", null, null, this);
            obj.set_taborder("34");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static80", "absolute", "402", "597", "1", "11", null, null, this);
            obj.set_taborder("35");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static88", "absolute", "408", "594", "15", "17", null, null, this);
            obj.set_taborder("36");
            obj.set_text("10");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "397", "664", "10", "1", null, null, this);
            obj.set_taborder("41");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "397", "653", "10", "1", null, null, this);
            obj.set_taborder("42");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "402", "654", "1", "11", null, null, this);
            obj.set_taborder("43");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "408", "651", "15", "17", null, null, this);
            obj.set_taborder("44");
            obj.set_text("10");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "397", "633", "10", "1", null, null, this);
            obj.set_taborder("45");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "397", "627", "10", "1", null, null, this);
            obj.set_taborder("46");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "402", "628", "1", "6", null, null, this);
            obj.set_taborder("47");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "412", "623", "15", "17", null, null, this);
            obj.set_taborder("48");
            obj.set_text("5");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "495", "610", "1", "15", null, null, this);
            obj.set_taborder("49");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "466", "610", "1", "15", null, null, this);
            obj.set_taborder("50");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "467", "616", "28", "1", null, null, this);
            obj.set_taborder("51");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "476", "594", "15", "17", null, null, this);
            obj.set_taborder("52");
            obj.set_text("30");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "310", "651", "13", "17", null, null, this);
            obj.set_taborder("56");
            obj.set_text("3");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "312", "633", "3", "17", null, null, this);
            obj.set_taborder("57");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "15", "1072", "521", "22", null, null, this);
            obj.set_taborder("60");
            obj.set_text("두단 이상일때 접기버튼사용 / 접기버튼 버튼 사용시 div박스(세로) 2px만 노출");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "15", "1015", "178", "18", null, null, this);
            obj.set_taborder("61");
            obj.set_text("class : <b v='true'>sta_WFSA_Label</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "633", "1017", "200", "18", null, null, this);
            obj.set_taborder("62");
            obj.set_text("class : <b v='true'>div_WFSA_Searchbg</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Div("Div05", "absolute", "15", "211", "270", "159", null, null, this);
            obj.set_taborder("63");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Edit("Edit02", "absolute", "70", "10", "140", "21", null, null, this.Div05);
            obj.set_taborder("57");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", "55", "21", null, null, this.Div05);
            obj.set_taborder("58");
            obj.set_text("가나");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "46", "67", "21", null, null, this.Div05);
            obj.set_taborder("59");
            obj.set_text("가나다");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "82", "46", "140", "21", null, null, this.Div05);
            obj.set_taborder("60");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "15", "82", "79", "21", null, null, this.Div05);
            obj.set_taborder("61");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "94", "82", "140", "21", null, null, this.Div05);
            obj.set_taborder("62");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "15", "118", "91", "21", null, null, this.Div05);
            obj.set_taborder("63");
            obj.set_text("가나다라마");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("Edit03", "absolute", "106", "118", "140", "21", null, null, this.Div05);
            obj.set_taborder("64");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "15", "10", "55", "21", null, null, this.Div05);
            obj.set_taborder("65");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "15", "46", "67", "21", null, null, this.Div05);
            obj.set_taborder("66");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "15", "82", "79", "21", null, null, this.Div05);
            obj.set_taborder("67");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "15", "118", "91", "21", null, null, this.Div05);
            obj.set_taborder("68");
            obj.set_visible("false");
            obj.style.set_background("#fb7b7b7a");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "226", "242", "10", "1", null, null, this);
            obj.set_taborder("65");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "226", "222", "10", "1", null, null, this);
            obj.set_taborder("66");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "231", "223", "1", "19", null, null, this);
            obj.set_taborder("67");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "237", "225", "15", "17", null, null, this);
            obj.set_taborder("68");
            obj.set_text("21");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "225", "213", "1", "10", null, null, this);
            obj.set_taborder("69");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "86", "213", "1", "10", null, null, this);
            obj.set_taborder("70");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "66", "217", "160", "1", null, null, this);
            obj.set_taborder("71");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "66", "213", "1", "10", null, null, this);
            obj.set_taborder("72");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "141", "197", "27", "17", null, null, this);
            obj.set_taborder("73");
            obj.set_text("140");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "15", "140", "225", "21", null, null, this);
            obj.set_taborder("74");
            obj.set_text("Label width 정의");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "74", "182", "35", "1", null, null, this);
            obj.set_taborder("76");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "74", "182", "1", "36", null, null, this);
            obj.set_taborder("77");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "110", "171", "138", "21", null, null, this);
            obj.set_taborder("78");
            obj.set_text("right padding : 20px");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "97", "249", "1", "10", null, null, this);
            obj.set_taborder("79");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static49", "absolute", "31", "249", "1", "10", null, null, this);
            obj.set_taborder("80");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static50", "absolute", "109", "285", "1", "10", null, null, this);
            obj.set_taborder("81");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "31", "285", "1", "10", null, null, this);
            obj.set_taborder("82");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "121", "321", "1", "10", null, null, this);
            obj.set_taborder("83");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static53", "absolute", "31", "321", "1", "10", null, null, this);
            obj.set_taborder("84");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static54", "absolute", "32", "325", "90", "1", null, null, this);
            obj.set_taborder("85");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static55", "absolute", "31", "289", "78", "1", null, null, this);
            obj.set_taborder("86");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static56", "absolute", "31", "253", "67", "1", null, null, this);
            obj.set_taborder("87");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static57", "absolute", "64", "238", "27", "17", null, null, this);
            obj.set_taborder("88");
            obj.set_text("+12");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static58", "absolute", "64", "274", "27", "17", null, null, this);
            obj.set_taborder("89");
            obj.set_text("+12");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static59", "absolute", "64", "310", "27", "17", null, null, this);
            obj.set_taborder("90");
            obj.set_text("+12");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static61", "absolute", "305", "223", "143", "21", null, null, this);
            obj.set_taborder("91");
            obj.set_text("Label width : 55");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static62", "absolute", "305", "258", "143", "21", null, null, this);
            obj.set_taborder("92");
            obj.set_text("Label width : 67");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static63", "absolute", "305", "295", "143", "21", null, null, this);
            obj.set_taborder("93");
            obj.set_text("Label width : 79");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static64", "absolute", "305", "331", "143", "21", null, null, this);
            obj.set_taborder("94");
            obj.set_text("Label width : 91");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static65", "absolute", "801", "618", "1", "10", null, null, this);
            obj.set_taborder("95");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static66", "absolute", "788", "618", "1", "10", null, null, this);
            obj.set_taborder("96");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static67", "absolute", "789", "622", "13", "1", null, null, this);
            obj.set_taborder("97");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static68", "absolute", "788", "604", "15", "17", null, null, this);
            obj.set_taborder("98");
            obj.set_text("15");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static69", "absolute", "31", "614", "1", "10", null, null, this);
            obj.set_taborder("99");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static70", "absolute", "16", "614", "1", "10", null, null, this);
            obj.set_taborder("100");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static71", "absolute", "17", "618", "15", "1", null, null, this);
            obj.set_taborder("101");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static72", "absolute", "18", "585", "15", "17", null, null, this);
            obj.set_taborder("102");
            obj.set_text("15");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static115", "absolute", "15", "49", "915", "75", null, null, this);
            obj.set_taborder("103");
            obj.set_text("- Search Area에 들어가는 Label Component와 입력 Component는 한 조합으로 쓰이고 둘의  heigt값은 21px로 고정이나 width는 가변적임.\r\n- Label Component는 두 글자를 기준 w55 으로 한 글자씩 늘어날 때마다 12px이 들어남.\r\n- 입력컴포넌트의 경우 최소 width값 140px으로하며 이 후  글자 수가 많아질 경우 글자수에 맞게 가변적으로 함.\r\n- 한 조합 (Title 컴포넌트 + 입력 컴포넌트) 간의 간격은 30px로 고정.");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "1017", "225", "62", "70", null, null, this);
            obj.set_taborder("104");
            obj.set_text("6 - 103\r\n7 - 115\r\n8 - 127\r\n9 - 139");
            obj.set_cssclass("sta_GID_txt02");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 69, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 95, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 121, this.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("7");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 1, this.Div04,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("26");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.Div04.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 270, 159, this.Div05,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("63");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.Div05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1070, 1200, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Guide_01");
            		p.set_titletext("Search Area");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Guide_08.xfdl", function() {
        this.Button00_onclick = function(obj,e)
        {
        	var nX   = system.clientToScreenX(obj, 0);
            var nY   = system.clientToScreenY(obj, 21);
        	this.PopupMenu00.trackPopup(nX, nY);
        }

        this.Button01_onclick = function(obj,e)
        {
        	var i, j;
        	this.ProgressBar02.pos = 0;
        	for( i = 0 ; i < 200 ; i+=2 )
        	{
        		this.ProgressBar02.stepIt();
        		this.updateWindow();
        	}
        }

        this.Div02_Static03_onclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("Guide_08.xfdl");

       
    };
}
)();
