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
                this.set_titletext("Detail");
                this._setFormPosition(0,0,803,782);
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
            obj = new Static("Static85", "absolute", "109", "720", null, "29", "15", null, this);
            obj.set_taborder("287");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static84", "absolute", "109", "692", null, "29", "15", null, this);
            obj.set_taborder("286");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static83", "absolute", "109", "664", null, "29", "15", null, this);
            obj.set_taborder("285");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static58", "absolute", "109", "636", null, "29", "15", null, this);
            obj.set_taborder("179");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "109", "468", null, "29", "15", null, this);
            obj.set_taborder("167");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static57", "absolute", "109", "608", null, "29", "15", null, this);
            obj.set_taborder("178");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static53", "absolute", "109", "552", null, "29", "15", null, this);
            obj.set_taborder("174");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "109", "524", null, "29", "15", null, this);
            obj.set_taborder("171");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "109", "496", null, "29", "15", null, this);
            obj.set_taborder("170");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static50", "absolute", "109", "370", null, "29", "15", null, this);
            obj.set_taborder("284");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static49", "absolute", "109", "314", null, "29", "15", null, this);
            obj.set_taborder("283");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("240");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "109", "118", null, "29", "15", null, this);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "109", "62", null, "29", "15", null, this);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "113", "66", "240", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("99");
            obj.set_text("[29001038000010] (주)도루코리빙");

            obj = new Button("Button07", "absolute", null, "0", "53", "21", "58", null, this);
            obj.set_taborder("36");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button08", "absolute", null, "0", "41", "21", "15", null, this);
            obj.set_taborder("38");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "62", "110", "29", null, null, this);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("거래처");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "0", "90", "110", "29", null, null, this);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("입력구분");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "0", "118", "110", "29", null, null, this);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("적용요청");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "109", "90", null, "29", "15", null, this);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "356", "118", "110", "29", null, null, this);
            obj.set_taborder("60");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Button("Button05", "absolute", "267", "94", "113", "21", null, null, this);
            obj.set_taborder("74");
            obj.set_text("요청거래관계검색");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "0", "37", "135", "21", null, null, this);
            obj.set_taborder("96");
            obj.set_text("거래처 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "21", "803", "20", null, null, this);
            obj.set_taborder("97");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01", "absolute", "113", "94", "151", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("100");
            obj.set_text("공급받는자 입력");
            obj.set_enable("false");

            obj = new Static("Static02", "absolute", "389", "94", "266", "21", null, null, this);
            obj.set_taborder("101");
            obj.set_text("[거래처에서 공급하는 사업장을 입력합니다]");
            obj.set_cssclass("sta_WF_DescriptionE02");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio03", "absolute", "116", "122", "227", "21", null, null, this);
            this.addChild(obj.name, obj);
            var Radio03_innerdataset = new Dataset("Radio03_innerdataset", this.Radio03);
            Radio03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">승인일반영</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">지정일반영</Col></Row></Rows>");
            obj.set_innerdataset(Radio03_innerdataset);
            obj.set_taborder("103");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");

            obj = new Static("Static03", "absolute", "647", "118", "110", "29", null, null, this);
            obj.set_taborder("104");
            obj.set_text("삭제");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo04", "absolute", "469", "122", "175", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("105");
            obj.set_text("[] 신규입력");
            obj.set_enable("false");

            obj = new Static("Static06", "absolute", "0", "163", "184", "21", null, null, this);
            obj.set_taborder("106");
            obj.set_text("거래처 정보 [공급자]");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "109", "188", null, "29", "15", null, this);
            obj.set_taborder("107");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "0", "188", "110", "29", null, null, this);
            obj.set_taborder("108");
            obj.set_text("공급처정산처");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "356", "188", "110", "29", null, null, this);
            obj.set_taborder("109");
            obj.set_text("상위사업장");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "109", "216", null, "29", "15", null, this);
            obj.set_taborder("113");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "0", "216", "110", "29", null, null, this);
            obj.set_taborder("114");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "488", "216", "110", "29", null, null, this);
            obj.set_taborder("115");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03", "absolute", "113", "220", "128", "21", null, null, this);
            obj.set_taborder("119");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "244", "216", "69", "29", null, null, this);
            obj.set_taborder("120");
            obj.set_text("핸드폰");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00", "absolute", "763", "122", "24", "21", null, null, this);
            obj.set_taborder("121");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo02", "absolute", "316", "220", "51", "21", null, null, this);
            this.addChild(obj.name, obj);
            var Combo02_innerdataset = new Dataset("Combo02_innerdataset", this.Combo02);
            Combo02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">010</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">011</Col></Row></Rows>");
            obj.set_innerdataset(Combo02_innerdataset);
            obj.set_taborder("88");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_text("010");
            obj.set_value("1");

            obj = new Static("Static43", "absolute", "428", "220", "9", "21", null, null, this);
            obj.set_taborder("89");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "369", "220", "9", "21", null, null, this);
            obj.set_taborder("90");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04", "absolute", "469", "192", "128", "21", null, null, this);
            obj.set_taborder("122");
            obj.set_cssclass("WF_Readonly");
            obj.set_value("[] 신규입력");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05", "absolute", "600", "192", "182", "21", null, null, this);
            obj.set_taborder("123");
            obj.set_cssclass("WF_Readonly");
            obj.set_value("(주) 도루코리빙");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "0", "261", "184", "21", null, null, this);
            obj.set_taborder("130");
            obj.set_text("사업장 정보 [공급받는 자]");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "109", "286", null, "29", "15", null, this);
            obj.set_taborder("131");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "0", "286", "110", "29", null, null, this);
            obj.set_taborder("132");
            obj.set_text("수요처사업장");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "0", "314", "110", "29", null, null, this);
            obj.set_taborder("133");
            obj.set_text("수요처정산처");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "109", "342", null, "29", "15", null, this);
            obj.set_taborder("135");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "0", "342", "110", "29", null, null, this);
            obj.set_taborder("136");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "488", "342", "110", "29", null, null, this);
            obj.set_taborder("137");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "113", "346", "128", "21", null, null, this);
            obj.set_taborder("138");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "244", "342", "69", "29", null, null, this);
            obj.set_taborder("139");
            obj.set_text("핸드폰");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "0", "370", "110", "29", null, null, this);
            obj.set_taborder("153");
            obj.set_text("바이어");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit15", "absolute", "113", "374", "90", "21", null, null, this);
            obj.set_taborder("154");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit16", "absolute", "206", "374", "172", "21", null, null, this);
            obj.set_taborder("155");
            this.addChild(obj.name, obj);

            obj = new Button("Button67", "absolute", "381", "374", "21", "21", null, null, this);
            obj.set_taborder("156");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "0", "415", "135", "21", null, null, this);
            obj.set_taborder("157");
            obj.set_text("추가정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "405", "290", "148", "21", null, null, this);
            obj.set_taborder("158");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit19", "absolute", "113", "290", "90", "21", null, null, this);
            obj.set_taborder("159");
            obj.set_cssclass("WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit20", "absolute", "206", "290", "172", "21", null, null, this);
            obj.set_taborder("160");
            obj.set_cssclass("WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "381", "290", "21", "21", null, null, this);
            obj.set_taborder("161");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo09", "absolute", "113", "318", "237", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("162");

            obj = new Combo("Combo10", "absolute", "353", "318", "134", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("163");

            obj = new Static("Static04", "absolute", "0", "440", "110", "29", null, null, this);
            obj.set_taborder("164");
            obj.set_text("공급처은행");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "244", "468", "110", "29", null, null, this);
            obj.set_taborder("165");
            obj.set_text("계약유형");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "109", "440", null, "29", "15", null, this);
            obj.set_taborder("166");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "488", "496", "110", "29", null, null, this);
            obj.set_taborder("168");
            obj.set_text("공급유형");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "0", "552", "110", "29", null, null, this);
            obj.set_taborder("169");
            obj.set_text("결제기일기준");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "0", "580", "110", "29", null, null, this);
            obj.set_taborder("172");
            obj.set_text("장려금률기준");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "244", "608", "110", "29", null, null, this);
            obj.set_taborder("173");
            obj.set_text("발주금지사유");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static54", "absolute", "109", "580", null, "29", "15", null, this);
            obj.set_taborder("175");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static55", "absolute", "488", "636", "110", "29", null, null, this);
            obj.set_taborder("176");
            obj.set_text("수주금지사유");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static56", "absolute", "0", "692", "110", "29", null, null, this);
            obj.set_taborder("177");
            obj.set_text("최초등록일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo03", "absolute", "113", "444", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("180");
            obj.set_text("[00] 미입력");
            obj.set_enable("false");

            obj = new Combo("Combo06", "absolute", "357", "472", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("181");
            obj.set_text("[4] 자체계약");
            obj.set_enable("false");

            obj = new Combo("Combo11", "absolute", "601", "500", "183", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("182");
            obj.set_text("[01] 매취");
            obj.set_enable("true");

            obj = new Combo("Combo12", "absolute", "113", "584", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("183");
            obj.set_text("[1] 율");
            obj.set_enable("false");

            obj = new Combo("Combo13", "absolute", "113", "556", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("184");
            obj.set_text("[1] 공급받는 자");
            obj.set_enable("false");

            obj = new Combo("Combo14", "absolute", "601", "640", "183", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("185");
            obj.set_text("[00] 해당없음");
            obj.set_enable("false");

            obj = new Combo("Combo15", "absolute", "357", "612", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("186");
            obj.set_text("[00] 해당없음");
            obj.set_enable("false");

            obj = new Calendar("Calendar00", "absolute", "113", "696", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("188");
            obj.set_enable("false");

            obj = new Static("Static59", "absolute", "244", "440", "110", "29", null, null, this);
            obj.set_taborder("189");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static60", "absolute", "488", "468", "110", "29", null, null, this);
            obj.set_taborder("190");
            obj.set_text("계통탄력가격");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static61", "absolute", "0", "524", "110", "29", null, null, this);
            obj.set_taborder("191");
            obj.set_text("리드타임");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static62", "absolute", "244", "552", "110", "29", null, null, this);
            obj.set_taborder("192");
            obj.set_text("약정과목구분");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static63", "absolute", "244", "580", "110", "29", null, null, this);
            obj.set_taborder("193");
            obj.set_text("장려금율(%)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static64", "absolute", "488", "608", "110", "29", null, null, this);
            obj.set_taborder("194");
            obj.set_text("발주금지일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static65", "absolute", "0", "664", "110", "29", null, null, this);
            obj.set_taborder("195");
            obj.set_text("수주금지일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static66", "absolute", "244", "692", "110", "29", null, null, this);
            obj.set_taborder("196");
            obj.set_text("최종변경일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01", "absolute", "357", "696", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("197");
            obj.set_enable("false");

            obj = new Calendar("Calendar03", "absolute", "113", "668", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("199");

            obj = new Calendar("Calendar04", "absolute", "601", "612", "183", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("200");
            obj.set_enable("true");

            obj = new MaskEdit("MaskEdit00", "absolute", "357", "584", "128", "21", null, null, this);
            obj.set_taborder("201");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo16", "absolute", "357", "556", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("202");
            obj.set_text("[930] 유통");
            obj.set_enable("false");

            obj = new MaskEdit("MaskEdit01", "absolute", "113", "528", "128", "21", null, null, this);
            obj.set_taborder("203");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo17", "absolute", "601", "472", "183", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("204");
            obj.set_text("[] 미적용");

            obj = new Edit("Edit00", "absolute", "357", "444", "128", "21", null, null, this);
            obj.set_taborder("205");
            this.addChild(obj.name, obj);

            obj = new Static("Static67", "absolute", "488", "440", "110", "29", null, null, this);
            obj.set_taborder("206");
            obj.set_text("예금주");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static68", "absolute", "0", "496", "110", "29", null, null, this);
            obj.set_taborder("207");
            obj.set_text("매입단가수정");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static69", "absolute", "244", "524", "110", "29", null, null, this);
            obj.set_taborder("208");
            obj.set_text("계약시작일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static70", "absolute", "488", "552", "110", "29", null, null, this);
            obj.set_taborder("209");
            obj.set_text("장려금지급시점");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static71", "absolute", "488", "580", "110", "29", null, null, this);
            obj.set_taborder("210");
            obj.set_text("장려금기준금액");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static72", "absolute", "0", "636", "110", "29", null, null, this);
            obj.set_taborder("211");
            obj.set_text("거래중지사유");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static73", "absolute", "244", "664", "110", "29", null, null, this);
            obj.set_taborder("212");
            obj.set_text("계약해지사유");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static74", "absolute", "488", "692", "110", "29", null, null, this);
            obj.set_taborder("213");
            obj.set_text("삭제일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar05", "absolute", "601", "696", "183", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("214");
            obj.set_enable("false");

            obj = new Combo("Combo18", "absolute", "357", "668", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("215");
            obj.set_text("[00] 해당없음");
            obj.set_enable("false");

            obj = new Combo("Combo19", "absolute", "113", "640", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("216");
            obj.set_text("[00] 해당없음");
            obj.set_enable("false");

            obj = new MaskEdit("MaskEdit02", "absolute", "601", "584", "183", "21", null, null, this);
            obj.set_taborder("217");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo20", "absolute", "601", "556", "183", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("218");
            obj.set_text("[00] 해당없음");

            obj = new Calendar("Calendar06", "absolute", "357", "528", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("219");
            obj.set_cssclass("WF_Essential");

            obj = new Combo("Combo22", "absolute", "113", "500", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("221");
            obj.set_text("[0] 미적용");

            obj = new Edit("Edit09", "absolute", "601", "444", "183", "21", null, null, this);
            obj.set_taborder("222");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static75", "absolute", "0", "468", "110", "29", null, null, this);
            obj.set_taborder("223");
            obj.set_text("사업방식구분");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static76", "absolute", "244", "496", "110", "29", null, null, this);
            obj.set_taborder("224");
            obj.set_text("반품관리구분");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static77", "absolute", "488", "524", "110", "29", null, null, this);
            obj.set_taborder("225");
            obj.set_text("계약종료일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static79", "absolute", "0", "608", "110", "29", null, null, this);
            obj.set_taborder("227");
            obj.set_text("직송장려금율(%)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static80", "absolute", "244", "636", "110", "29", null, null, this);
            obj.set_taborder("228");
            obj.set_text("거래중지일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static81", "absolute", "488", "664", "110", "29", null, null, this);
            obj.set_taborder("229");
            obj.set_text("계약해지일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static82", "absolute", "0", "720", "110", "29", null, null, this);
            obj.set_taborder("230");
            obj.set_text("최종수정자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar02", "absolute", "357", "640", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("231");

            obj = new Calendar("Calendar07", "absolute", "601", "668", "183", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("232");

            obj = new MaskEdit("MaskEdit03", "absolute", "113", "612", "128", "21", null, null, this);
            obj.set_taborder("233");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar08", "absolute", "601", "528", "183", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("234");
            obj.set_cssclass("WF_Essential");

            obj = new Combo("Combo21", "absolute", "357", "500", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("235");
            obj.set_text("[3] 반품무승인절");

            obj = new Combo("Combo23", "absolute", "113", "472", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("236");
            obj.set_text("[01] 매취");
            obj.set_enable("false");

            obj = new Edit("Edit10", "absolute", "113", "724", "128", "21", null, null, this);
            obj.set_taborder("237");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static78", "absolute", "0", "751", "447", "21", null, null, this);
            obj.set_taborder("238");
            obj.set_text("- 결제 계좌정보등록은 농협사업장으로 문의 바랍니다.");
            obj.set_cssclass("sta_WF_DescriptionE02");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo24", "absolute", "113", "192", "240", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("239");
            obj.set_text("[29001038000010] (주)도루코리빙");

            obj = new Static("Static00", "absolute", "788", "65", "15", "635", null, null, this);
            obj.set_taborder("241");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "0", "147", null, "20", "11", null, this);
            obj.set_taborder("242");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "0", "245", null, "20", "11", null, this);
            obj.set_taborder("243");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "0", "399", null, "20", "11", null, this);
            obj.set_taborder("244");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo05", "absolute", "316", "346", "51", "21", null, null, this);
            this.addChild(obj.name, obj);
            var Combo05_innerdataset = new Dataset("Combo05_innerdataset", this.Combo05);
            Combo05_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">010</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">011</Col></Row></Rows>");
            obj.set_innerdataset(Combo05_innerdataset);
            obj.set_taborder("260");
            obj.set_value("1");
            obj.set_text("010");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");

            obj = new Static("Static17", "absolute", "428", "346", "9", "21", null, null, this);
            obj.set_taborder("261");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "369", "346", "9", "21", null, null, this);
            obj.set_taborder("262");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo07", "absolute", "601", "220", "51", "21", null, null, this);
            this.addChild(obj.name, obj);
            var Combo07_innerdataset = new Dataset("Combo07_innerdataset", this.Combo07);
            Combo07_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">010</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">011</Col></Row></Rows>");
            obj.set_innerdataset(Combo07_innerdataset);
            obj.set_taborder("265");
            obj.set_value("1");
            obj.set_text("010");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");

            obj = new Static("Static31", "absolute", "713", "220", "9", "21", null, null, this);
            obj.set_taborder("266");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "654", "220", "9", "21", null, null, this);
            obj.set_taborder("267");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo08", "absolute", "601", "346", "51", "21", null, null, this);
            this.addChild(obj.name, obj);
            var Combo08_innerdataset = new Dataset("Combo08_innerdataset", this.Combo08);
            Combo08_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">010</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">011</Col></Row></Rows>");
            obj.set_innerdataset(Combo08_innerdataset);
            obj.set_taborder("270");
            obj.set_value("1");
            obj.set_text("010");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");

            obj = new Static("Static42", "absolute", "713", "346", "9", "21", null, null, this);
            obj.set_taborder("271");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "654", "346", "9", "21", null, null, this);
            obj.set_taborder("272");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit04", "absolute", "663", "220", "48", "21", null, null, this);
            obj.set_taborder("275");
            obj.set_value("1234");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit05", "absolute", "722", "220", "48", "21", null, null, this);
            obj.set_taborder("276");
            obj.set_value("1234");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit06", "absolute", "378", "220", "48", "21", null, null, this);
            obj.set_taborder("277");
            obj.set_value("1234");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit07", "absolute", "437", "220", "48", "21", null, null, this);
            obj.set_taborder("278");
            obj.set_value("1234");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit08", "absolute", "378", "346", "48", "21", null, null, this);
            obj.set_taborder("279");
            obj.set_value("1234");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit09", "absolute", "437", "346", "48", "21", null, null, this);
            obj.set_taborder("280");
            obj.set_value("1234");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit10", "absolute", "722", "346", "48", "21", null, null, this);
            obj.set_taborder("281");
            obj.set_value("1234");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit11", "absolute", "663", "346", "48", "21", null, null, this);
            obj.set_taborder("282");
            obj.set_value("1234");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 782, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("Detail");

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

        this.loadIncludeScript("pattern_02.xfdl");
        this.loadPreloadList();
       
    };
}
)();
