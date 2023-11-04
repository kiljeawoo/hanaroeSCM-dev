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
                this.set_titletext("Detail Data Area");
                this._setFormPosition(0,0,1008,1514);
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
            obj = new Static("Static04", "absolute", "15", "210", "110", "29", null, null, this);
            obj.set_taborder("10");
            obj.set_text("공급처은행");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "15", "238", "110", "29", null, null, this);
            obj.set_taborder("11");
            obj.set_text("계약유형");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "124", "210", null, "29", "205", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "124", "238", null, "29", "205", null, this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "15", "266", "110", "29", null, null, this);
            obj.set_taborder("14");
            obj.set_text("공급유형");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "124", "266", null, "29", "205", null, this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo03", "absolute", "128", "214", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("16");
            obj.set_enable("false");

            obj = new Combo("Combo06", "absolute", "128", "242", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("17");
            obj.set_enable("false");

            obj = new Combo("Combo11", "absolute", "128", "270", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("18");

            obj = new Static("Static59", "absolute", "259", "210", "110", "29", null, null, this);
            obj.set_taborder("19");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static60", "absolute", "259", "238", "110", "29", null, null, this);
            obj.set_taborder("20");
            obj.set_text("계통탄력가격");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static61", "absolute", "259", "266", "110", "29", null, null, this);
            obj.set_taborder("21");
            obj.set_text("계약시작일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01", "absolute", "616", "270", "183", "21", null, null, this);
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo17", "absolute", "372", "242", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("23");

            obj = new Edit("Edit00", "absolute", "372", "214", "128", "21", null, null, this);
            obj.set_taborder("24");
            this.addChild(obj.name, obj);

            obj = new Static("Static67", "absolute", "503", "210", "110", "29", null, null, this);
            obj.set_taborder("25");
            obj.set_text("예금주");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static68", "absolute", "503", "238", "110", "29", null, null, this);
            obj.set_taborder("26");
            obj.set_text("매입단가수정");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static69", "absolute", "503", "266", "110", "29", null, null, this);
            obj.set_taborder("27");
            obj.set_text("리드타임");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar06", "absolute", "372", "270", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("28");
            obj.set_cssclass("WF_Essential");

            obj = new Combo("Combo22", "absolute", "616", "242", "183", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("29");

            obj = new Edit("Edit09", "absolute", "616", "214", "183", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "15", "819", "110", "29", null, null, this);
            obj.set_taborder("37");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "124", "819", "245", "29", null, null, this);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_text("가나다라");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "15", "793", "225", "21", null, null, this);
            obj.set_taborder("40");
            obj.set_text("Output type");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "341", "838", "1", "46", null, null, this);
            obj.set_taborder("42");
            obj.set_text("Static07");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "99", "837", "1", "46", null, null, this);
            obj.set_taborder("44");
            obj.set_text("Static07");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "112", "277", "1", "46", null, null, this);
            obj.set_taborder("46");
            obj.set_text("Static07");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "501", "288", "1", "29", null, null, this);
            obj.set_taborder("48");
            obj.set_text("Static07");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "15", "166", "110", "45", null, null, this);
            obj.set_taborder("49");
            obj.set_text("회원ID\r\n[7~9자리]");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "124", "166", null, "45", "205", null, this);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "503", "166", "110", "45", null, null, this);
            obj.set_taborder("51");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "128", "178", "151", "21", null, null, this);
            obj.set_taborder("53");
            obj.set_cssclass("WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "282", "178", "65", "21", null, null, this);
            obj.set_taborder("54");
            obj.set_text("중복확인");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "351", "178", "128", "21", null, null, this);
            obj.set_taborder("55");
            obj.set_text("(첫2자 영문,영숫조합)");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00", "absolute", "620", "178", "125", "21", null, null, this);
            this.addChild(obj.name, obj);
            var Radio00_innerdataset = new Dataset("Radio00_innerdataset", this.Radio00);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_taborder("56");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");

            obj = new Static("Static29", "absolute", "15", "636", "110", "29", null, null, this);
            obj.set_taborder("82");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "124", "636", null, "29", "205", null, this);
            obj.set_taborder("83");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01", "absolute", "128", "640", "146", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("84");

            obj = new Static("Static31", "absolute", "277", "636", "110", "29", null, null, this);
            obj.set_taborder("85");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02", "absolute", "390", "640", "146", "21", null, null, this);
            obj.set_taborder("86");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "539", "636", "110", "29", null, null, this);
            obj.set_taborder("87");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04", "absolute", "652", "640", "147", "21", null, null, this);
            obj.set_taborder("88");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "15", "518", "110", "29", null, null, this);
            obj.set_taborder("89");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "124", "518", null, "29", "205", null, this);
            obj.set_taborder("90");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo02", "absolute", "128", "522", "277", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("91");

            obj = new Static("Static35", "absolute", "408", "518", "110", "29", null, null, this);
            obj.set_taborder("92");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit03", "absolute", "521", "522", "278", "21", null, null, this);
            obj.set_taborder("93");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "15", "400", "110", "29", null, null, this);
            obj.set_taborder("94");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "124", "400", null, "29", "205", null, this);
            obj.set_taborder("95");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "15", "375", "110", "21", null, null, this);
            obj.set_taborder("97");
            obj.set_text("1단일때");
            obj.set_cssclass("sta_WFSA_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05", "absolute", "128", "404", "671", "21", null, null, this);
            obj.set_taborder("98");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "15", "493", "110", "21", null, null, this);
            obj.set_taborder("99");
            obj.set_text("2단일때");
            obj.set_cssclass("sta_WFSA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "15", "611", "110", "21", null, null, this);
            obj.set_taborder("100");
            obj.set_text("3단일때");
            obj.set_cssclass("sta_WFSA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "0", null, "30", "0", null, this);
            obj.set_taborder("102");
            obj.set_text("Detail Data Area");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "15", "428", "110", "29", null, null, this);
            obj.set_taborder("103");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "124", "428", null, "29", "205", null, this);
            obj.set_taborder("104");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit06", "absolute", "128", "432", "671", "21", null, null, this);
            obj.set_taborder("105");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "15", "546", "110", "29", null, null, this);
            obj.set_taborder("106");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "124", "546", null, "29", "205", null, this);
            obj.set_taborder("107");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo04", "absolute", "128", "550", "277", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("108");

            obj = new Static("Static48", "absolute", "408", "546", "110", "29", null, null, this);
            obj.set_taborder("109");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit04", "absolute", "521", "550", "278", "21", null, null, this);
            obj.set_taborder("110");
            this.addChild(obj.name, obj);

            obj = new Static("Static49", "absolute", "15", "664", "110", "29", null, null, this);
            obj.set_taborder("111");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static50", "absolute", "124", "664", null, "29", "205", null, this);
            obj.set_taborder("112");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo05", "absolute", "128", "668", "146", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("113");

            obj = new Static("Static51", "absolute", "277", "664", "110", "29", null, null, this);
            obj.set_taborder("114");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit05", "absolute", "390", "668", "146", "21", null, null, this);
            obj.set_taborder("115");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "539", "664", "110", "29", null, null, this);
            obj.set_taborder("116");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit07", "absolute", "652", "668", "147", "21", null, null, this);
            obj.set_taborder("117");
            this.addChild(obj.name, obj);

            obj = new Static("Static58", "absolute", "59", "465", "23", "17", null, null, this);
            obj.set_taborder("127");
            obj.set_text("110");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static63", "absolute", "15", "462", "787", "1", null, null, this);
            obj.set_taborder("129");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static64", "absolute", "15", "458", "1", "10", null, null, this);
            obj.set_taborder("130");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static65", "absolute", "802", "458", "1", "10", null, null, this);
            obj.set_taborder("131");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static62", "absolute", "124", "458", "1", "10", null, null, this);
            obj.set_taborder("132");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static66", "absolute", "15", "580", "787", "1", null, null, this);
            obj.set_taborder("133");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static70", "absolute", "15", "576", "1", "10", null, null, this);
            obj.set_taborder("134");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static71", "absolute", "802", "576", "1", "10", null, null, this);
            obj.set_taborder("135");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static72", "absolute", "124", "576", "1", "10", null, null, this);
            obj.set_taborder("136");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static73", "absolute", "408", "576", "1", "10", null, null, this);
            obj.set_taborder("137");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static74", "absolute", "517", "576", "1", "10", null, null, this);
            obj.set_taborder("138");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static78", "absolute", "15", "698", "787", "1", null, null, this);
            obj.set_taborder("139");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static79", "absolute", "15", "694", "1", "10", null, null, this);
            obj.set_taborder("140");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static80", "absolute", "802", "694", "1", "10", null, null, this);
            obj.set_taborder("141");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static81", "absolute", "124", "694", "1", "10", null, null, this);
            obj.set_taborder("142");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static82", "absolute", "277", "694", "1", "10", null, null, this);
            obj.set_taborder("143");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static83", "absolute", "386", "694", "1", "10", null, null, this);
            obj.set_taborder("144");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static84", "absolute", "539", "694", "1", "10", null, null, this);
            obj.set_taborder("145");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static85", "absolute", "648", "694", "1", "10", null, null, this);
            obj.set_taborder("146");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static96", "absolute", "452", "465", "23", "17", null, null, this);
            obj.set_taborder("157");
            obj.set_text("679");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static97", "absolute", "59", "583", "23", "17", null, null, this);
            obj.set_taborder("158");
            obj.set_text("110");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static98", "absolute", "59", "701", "23", "17", null, null, this);
            obj.set_taborder("159");
            obj.set_text("110");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static100", "absolute", "458", "583", "23", "17", null, null, this);
            obj.set_taborder("161");
            obj.set_text("110");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static101", "absolute", "322", "701", "23", "17", null, null, this);
            obj.set_taborder("162");
            obj.set_text("110");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static102", "absolute", "583", "701", "23", "17", null, null, this);
            obj.set_taborder("163");
            obj.set_text("110");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static106", "absolute", "262", "583", "23", "17", null, null, this);
            obj.set_taborder("167");
            obj.set_text("285");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static107", "absolute", "649", "583", "23", "17", null, null, this);
            obj.set_taborder("168");
            obj.set_text("286");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static108", "absolute", "193", "701", "23", "17", null, null, this);
            obj.set_taborder("169");
            obj.set_text("154");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static109", "absolute", "452", "701", "23", "17", null, null, this);
            obj.set_taborder("170");
            obj.set_text("154");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static110", "absolute", "714", "701", "23", "17", null, null, this);
            obj.set_taborder("171");
            obj.set_text("155");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static115", "absolute", "15", "69", "915", "75", null, null, this);
            obj.set_taborder("176");
            obj.set_text("- Input Area에 들어가는 Label Component와 입력 Component 그리고 배경 Component는 한 조합으로 쓰이고 각각 컴포넌트들의  heigt값은 고정이나 width는 가변적임.\r\n- Label Component 의 우측 여백은 Right Padding값을 10px으로 고정함. (ex. padding : 0 10 0 0;)\r\n- 마지막단 배경 Component와 Width값은 짝수단일 때 +1px, 홀수단일 때 +2px임.\r\n- Label Component의 width값은 110px고정이며 7자 이상 일 경우 ... 표시하며. 툴팁 제공.");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static116", "absolute", "613", "267", "3", "37", null, null, this);
            obj.set_taborder("177");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "611", "306", "14", "17", null, null, this);
            obj.set_taborder("178");
            obj.set_text("3");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static117", "absolute", "613", "162", "6", "37", null, null, this);
            obj.set_taborder("179");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static118", "absolute", "612", "144", "14", "17", null, null, this);
            obj.set_taborder("180");
            obj.set_text("7");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "933", "1161", "21", "21", null, null, this);
            obj.set_taborder("188");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit20", "absolute", "803", "1161", "127", "21", null, null, this);
            obj.set_taborder("189");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00", "absolute", "279", "1161", "151", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("195");

            obj = new Spin("Spin00", "absolute", "279", "1187", "151", "21", null, null, this);
            obj.set_taborder("196");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit07", "absolute", "803", "1279", "151", "21", null, null, this);
            obj.set_taborder("197");
            obj.set_value("1800");
            obj.set_mask("##:##");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit08", "absolute", "513", "1279", "151", "21", null, null, this);
            obj.set_taborder("198");
            obj.set_value("12345601******");
            obj.set_type("string");
            obj.set_mask("######-##-######");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit09", "absolute", "279", "1279", "70", "21", null, null, this);
            obj.set_taborder("199");
            obj.set_value("122345");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit10", "absolute", "360", "1279", "70", "21", null, null, this);
            obj.set_taborder("200");
            obj.set_value("1");
            obj.set_mask("#######");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit11", "absolute", "15", "1279", "151", "21", null, null, this);
            obj.set_taborder("201");
            obj.set_value("123456789");
            obj.set_mask("###,###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static120", "absolute", "351", "1279", "9", "21", null, null, this);
            obj.set_taborder("202");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static121", "absolute", "386", "490", "57", "17", null, null, this);
            obj.set_taborder("203");
            obj.set_text("1px 겹침");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static122", "absolute", "408", "504", "1", "20", null, null, this);
            obj.set_taborder("204");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static123", "absolute", "517", "504", "1", "20", null, null, this);
            obj.set_taborder("205");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static124", "absolute", "497", "490", "57", "17", null, null, this);
            obj.set_taborder("206");
            obj.set_text("1px 겹침");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static125", "absolute", "840", "537", "57", "17", null, null, this);
            obj.set_taborder("207");
            obj.set_text("1px 겹침");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static126", "absolute", "796", "546", "41", "1", null, null, this);
            obj.set_taborder("208");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static128", "absolute", "175", "511", "14", "17", null, null, this);
            obj.set_taborder("210");
            obj.set_text("3");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static127", "absolute", "125", "519", "43", "3", null, null, this);
            obj.set_taborder("211");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static129", "absolute", "125", "543", "43", "3", null, null, this);
            obj.set_taborder("212");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static130", "absolute", "175", "536", "14", "17", null, null, this);
            obj.set_taborder("213");
            obj.set_text("3");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static131", "absolute", "614", "1161", "10", "21", null, null, this);
            obj.set_taborder("214");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01", "absolute", "513", "1161", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("215");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Calendar("Calendar02", "absolute", "624", "1161", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("216");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static132", "absolute", "15", "1136", "110", "21", null, null, this);
            obj.set_taborder("217");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static133", "absolute", "279", "1136", "81", "21", null, null, this);
            obj.set_taborder("218");
            obj.set_text("날짜01");
            obj.set_cssclass("sta_WFSA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static134", "absolute", "513", "1136", "81", "21", null, null, this);
            obj.set_taborder("219");
            obj.set_text("날짜02");
            obj.set_cssclass("sta_WFSA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static135", "absolute", "614", "1187", "10", "21", null, null, this);
            obj.set_taborder("220");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar03", "absolute", "513", "1187", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("221");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("spin");

            obj = new Calendar("Calendar05", "absolute", "624", "1187", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("222");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("spin");

            obj = new Static("Static136", "absolute", "15", "1254", "151", "21", null, null, this);
            obj.set_taborder("223");
            obj.set_text("집계치/금액등의 숫자");
            obj.set_cssclass("sta_WFSA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static137", "absolute", "279", "1254", "151", "21", null, null, this);
            obj.set_taborder("224");
            obj.set_text("주민등록번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static138", "absolute", "513", "1254", "151", "21", null, null, this);
            obj.set_taborder("225");
            obj.set_text("계좌/신용카드번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static139", "absolute", "803", "1254", "85", "21", null, null, this);
            obj.set_taborder("226");
            obj.set_text("시간");
            obj.set_cssclass("sta_WFSA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static140", "absolute", "803", "1136", "85", "21", null, null, this);
            obj.set_taborder("227");
            obj.set_text("검색");
            obj.set_cssclass("sta_WFSA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static141", "absolute", "15", "1342", "151", "21", null, null, this);
            obj.set_taborder("228");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit12", "absolute", "15", "1367", "58", "21", null, null, this);
            obj.set_taborder("229");
            obj.set_value("123");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit13", "absolute", "84", "1367", "58", "21", null, null, this);
            obj.set_taborder("230");
            obj.set_value("456");
            this.addChild(obj.name, obj);

            obj = new Static("Static142", "absolute", "75", "1367", "9", "21", null, null, this);
            obj.set_taborder("231");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "145", "1367", "21", "21", null, null, this);
            obj.set_taborder("233");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static143", "absolute", "140", "1347", "15", "17", null, null, this);
            obj.set_taborder("234");
            obj.set_text("3");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static144", "absolute", "142", "1364", "3", "28", null, null, this);
            obj.set_taborder("235");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static145", "absolute", "930", "1157", "3", "28", null, null, this);
            obj.set_taborder("236");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static146", "absolute", "928", "1140", "15", "17", null, null, this);
            obj.set_taborder("237");
            obj.set_text("3");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static147", "absolute", "280", "1209", "1", "10", null, null, this);
            obj.set_taborder("238");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static148", "absolute", "429", "1209", "1", "10", null, null, this);
            obj.set_taborder("239");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static149", "absolute", "343", "1220", "23", "17", null, null, this);
            obj.set_taborder("240");
            obj.set_text("151");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static150", "absolute", "280", "1213", "149", "1", null, null, this);
            obj.set_taborder("241");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static151", "absolute", "15", "1183", "1", "10", null, null, this);
            obj.set_taborder("242");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static152", "absolute", "183", "1183", "1", "10", null, null, this);
            obj.set_taborder("243");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static153", "absolute", "15", "1187", "169", "1", null, null, this);
            obj.set_taborder("244");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static154", "absolute", "136", "1183", "1", "10", null, null, this);
            obj.set_taborder("245");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static155", "absolute", "124", "1183", "1", "10", null, null, this);
            obj.set_taborder("246");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static156", "absolute", "77", "1183", "1", "10", null, null, this);
            obj.set_taborder("247");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static157", "absolute", "65", "1183", "1", "10", null, null, this);
            obj.set_taborder("248");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static158", "absolute", "153", "1194", "18", "17", null, null, this);
            obj.set_taborder("249");
            obj.set_text("48");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static159", "absolute", "93", "1194", "18", "17", null, null, this);
            obj.set_taborder("250");
            obj.set_text("48");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static160", "absolute", "32", "1194", "18", "17", null, null, this);
            obj.set_taborder("251");
            obj.set_text("51");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static161", "absolute", "65", "1194", "18", "17", null, null, this);
            obj.set_taborder("252");
            obj.set_text("11");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static162", "absolute", "124", "1194", "18", "17", null, null, this);
            obj.set_taborder("253");
            obj.set_text("11");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static163", "absolute", "513", "1210", "1", "10", null, null, this);
            obj.set_taborder("254");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static164", "absolute", "723", "1210", "1", "10", null, null, this);
            obj.set_taborder("255");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static165", "absolute", "555", "1220", "23", "17", null, null, this);
            obj.set_taborder("256");
            obj.set_text("100");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static166", "absolute", "513", "1214", "211", "1", null, null, this);
            obj.set_taborder("257");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static167", "absolute", "624", "1209", "1", "10", null, null, this);
            obj.set_taborder("258");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static168", "absolute", "612", "1209", "1", "10", null, null, this);
            obj.set_taborder("259");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static169", "absolute", "666", "1220", "23", "17", null, null, this);
            obj.set_taborder("260");
            obj.set_text("100");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static170", "absolute", "612", "1220", "18", "17", null, null, this);
            obj.set_taborder("261");
            obj.set_text("12");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static171", "absolute", "803", "1183", "1", "10", null, null, this);
            obj.set_taborder("262");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static172", "absolute", "952", "1183", "1", "10", null, null, this);
            obj.set_taborder("263");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static173", "absolute", "864", "1194", "23", "17", null, null, this);
            obj.set_taborder("264");
            obj.set_text("127");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static174", "absolute", "803", "1187", "149", "1", null, null, this);
            obj.set_taborder("265");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static175", "absolute", "15", "1301", "1", "10", null, null, this);
            obj.set_taborder("266");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static176", "absolute", "164", "1301", "1", "10", null, null, this);
            obj.set_taborder("267");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static177", "absolute", "78", "1312", "23", "17", null, null, this);
            obj.set_taborder("268");
            obj.set_text("151");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static178", "absolute", "15", "1305", "149", "1", null, null, this);
            obj.set_taborder("269");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static179", "absolute", "279", "1301", "1", "10", null, null, this);
            obj.set_taborder("270");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static180", "absolute", "429", "1301", "1", "10", null, null, this);
            obj.set_taborder("271");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static181", "absolute", "308", "1312", "23", "17", null, null, this);
            obj.set_taborder("272");
            obj.set_text("70");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static182", "absolute", "279", "1305", "151", "1", null, null, this);
            obj.set_taborder("273");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static183", "absolute", "360", "1301", "1", "10", null, null, this);
            obj.set_taborder("274");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static184", "absolute", "348", "1301", "1", "10", null, null, this);
            obj.set_taborder("275");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static185", "absolute", "390", "1312", "23", "17", null, null, this);
            obj.set_taborder("276");
            obj.set_text("70");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static186", "absolute", "349", "1312", "18", "17", null, null, this);
            obj.set_taborder("277");
            obj.set_text("11");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static187", "absolute", "513", "1301", "1", "10", null, null, this);
            obj.set_taborder("278");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static188", "absolute", "662", "1301", "1", "10", null, null, this);
            obj.set_taborder("279");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static189", "absolute", "576", "1312", "23", "17", null, null, this);
            obj.set_taborder("280");
            obj.set_text("151");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static190", "absolute", "513", "1305", "149", "1", null, null, this);
            obj.set_taborder("281");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static191", "absolute", "803", "1301", "1", "10", null, null, this);
            obj.set_taborder("282");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static192", "absolute", "952", "1301", "1", "10", null, null, this);
            obj.set_taborder("283");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static193", "absolute", "866", "1312", "23", "17", null, null, this);
            obj.set_taborder("284");
            obj.set_text("151");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static194", "absolute", "803", "1305", "149", "1", null, null, this);
            obj.set_taborder("285");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static195", "absolute", "929", "1183", "1", "10", null, null, this);
            obj.set_taborder("286");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static196", "absolute", "936", "1194", "18", "17", null, null, this);
            obj.set_taborder("287");
            obj.set_text("21");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static197", "absolute", "15", "1389", "1", "10", null, null, this);
            obj.set_taborder("288");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static198", "absolute", "165", "1389", "1", "10", null, null, this);
            obj.set_taborder("289");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static199", "absolute", "37", "1400", "23", "17", null, null, this);
            obj.set_taborder("290");
            obj.set_text("58");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static200", "absolute", "15", "1393", "151", "1", null, null, this);
            obj.set_taborder("291");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static201", "absolute", "84", "1389", "1", "10", null, null, this);
            obj.set_taborder("292");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static202", "absolute", "72", "1389", "1", "10", null, null, this);
            obj.set_taborder("293");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static203", "absolute", "108", "1400", "23", "17", null, null, this);
            obj.set_taborder("294");
            obj.set_text("58");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static204", "absolute", "73", "1400", "18", "17", null, null, this);
            obj.set_taborder("295");
            obj.set_text("11");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static205", "absolute", "150", "1400", "18", "17", null, null, this);
            obj.set_taborder("296");
            obj.set_text("21");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static206", "absolute", "15", "1104", "225", "21", null, null, this);
            obj.set_taborder("297");
            obj.set_text("Data pattern");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static207", "absolute", "132", "813", "1", "24", null, null, this);
            obj.set_taborder("298");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static208", "absolute", "125", "813", "1", "24", null, null, this);
            obj.set_taborder("299");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static209", "absolute", "126", "796", "16", "17", null, null, this);
            obj.set_taborder("300");
            obj.set_text("8");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static210", "absolute", "367", "813", "1", "24", null, null, this);
            obj.set_taborder("301");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static211", "absolute", "360", "813", "1", "24", null, null, this);
            obj.set_taborder("302");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static212", "absolute", "361", "796", "16", "17", null, null, this);
            obj.set_taborder("303");
            obj.set_text("8");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static213", "absolute", "551", "632", "1", "24", null, null, this);
            obj.set_taborder("304");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static214", "absolute", "540", "632", "1", "24", null, null, this);
            obj.set_taborder("305");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static215", "absolute", "539", "615", "18", "17", null, null, this);
            obj.set_taborder("306");
            obj.set_text("13");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static216", "absolute", "647", "632", "1", "24", null, null, this);
            obj.set_taborder("307");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static217", "absolute", "635", "632", "1", "24", null, null, this);
            obj.set_taborder("308");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static218", "absolute", "634", "615", "18", "17", null, null, this);
            obj.set_taborder("309");
            obj.set_text("10");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static219", "absolute", "8", "518", "1", "58", null, null, this);
            obj.set_taborder("310");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static220", "absolute", "4", "518", "10", "1", null, null, this);
            obj.set_taborder("311");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static221", "absolute", "4", "575", "10", "1", null, null, this);
            obj.set_taborder("312");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static222", "absolute", "4", "546", "10", "1", null, null, this);
            obj.set_taborder("313");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static223", "absolute", "10", "525", "20", "17", null, null, this);
            obj.set_taborder("314");
            obj.set_text("29");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static224", "absolute", "10", "553", "20", "17", null, null, this);
            obj.set_taborder("315");
            obj.set_text("29");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static225", "absolute", "410", "313", "183", "18", null, null, this);
            obj.set_taborder("316");
            obj.set_text("class : <b v='true'>sta_WF_Labelbg</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "35", "320", "183", "18", null, null, this);
            obj.set_taborder("317");
            obj.set_text("class : <b v='true'>sta_WF_Label</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "262", "881", "172", "18", null, null, this);
            obj.set_taborder("318");
            obj.set_text("class : <b v='true'>sta_WF_Labelbg</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "43", "881", "154", "18", null, null, this);
            obj.set_taborder("319");
            obj.set_text("class : <b v='true'>sta_WF_Label</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo08", "absolute", "15", "1160", "51", "21", null, null, this);
            this.addChild(obj.name, obj);
            var Combo08_innerdataset = new Dataset("Combo08_innerdataset", this.Combo08);
            Combo08_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">010</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">011</Col></Row></Rows>");
            obj.set_innerdataset(Combo08_innerdataset);
            obj.set_taborder("320");
            obj.set_value("1");
            obj.set_text("010");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");

            obj = new Static("Static09", "absolute", "127", "1160", "9", "21", null, null, this);
            obj.set_taborder("321");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "68", "1160", "9", "21", null, null, this);
            obj.set_taborder("322");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static119", "absolute", "0", "766", null, "1", "0", null, this);
            obj.set_taborder("325");
            obj.set_cssclass("sta_GID_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static226", "absolute", "0", "1069", null, "1", "0", null, this);
            obj.set_taborder("326");
            obj.set_cssclass("sta_GID_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static228", "absolute", "15", "46", "225", "21", null, null, this);
            obj.set_taborder("328");
            obj.set_text("Input type");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit14", "absolute", "77", "1160", "48", "21", null, null, this);
            obj.set_taborder("329");
            obj.set_value("1234");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit15", "absolute", "136", "1160", "48", "21", null, null, this);
            obj.set_taborder("330");
            obj.set_value("1234");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "478", "819", "110", "29", null, null, this);
            obj.set_taborder("331");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "587", "819", "245", "29", null, null, this);
            obj.set_taborder("332");
            obj.set_text("123456");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "804", "838", "1", "46", null, null, this);
            obj.set_taborder("333");
            obj.set_text("Static07");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "562", "837", "1", "46", null, null, this);
            obj.set_taborder("334");
            obj.set_text("Static07");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "595", "813", "1", "24", null, null, this);
            obj.set_taborder("335");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "588", "813", "1", "24", null, null, this);
            obj.set_taborder("336");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "589", "796", "16", "17", null, null, this);
            obj.set_taborder("337");
            obj.set_text("8");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "830", "813", "1", "24", null, null, this);
            obj.set_taborder("338");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static53", "absolute", "823", "813", "1", "24", null, null, this);
            obj.set_taborder("339");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static54", "absolute", "824", "796", "16", "17", null, null, this);
            obj.set_taborder("340");
            obj.set_text("8");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static55", "absolute", "725", "881", "172", "18", null, null, this);
            obj.set_taborder("341");
            obj.set_text("class : <b v='true'>sta_WF_Labelbg_R</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static56", "absolute", "506", "881", "154", "18", null, null, this);
            obj.set_taborder("342");
            obj.set_text("class : <b v='true'>sta_WF_Label</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static57", "absolute", "15", "949", "249", "29", null, null, this);
            obj.set_taborder("343");
            obj.set_text("월매출액");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static76", "absolute", "15", "977", "125", "29", null, null, this);
            obj.set_taborder("344");
            obj.set_text("인건비");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static75", "absolute", "15", "1005", "125", "29", null, null, this);
            obj.set_taborder("345");
            obj.set_text("4500");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static86", "absolute", "139", "977", "125", "29", null, null, this);
            obj.set_taborder("347");
            obj.set_text("인건비");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static87", "absolute", "139", "1005", "125", "29", null, null, this);
            obj.set_taborder("348");
            obj.set_text("4500");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static77", "absolute", "300", "952", "172", "18", null, null, this);
            obj.set_taborder("349");
            obj.set_text("class : <b v='true'>sta_WF_Label_c</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            this.addChild(obj.name, obj);

            obj = new Static("Static88", "absolute", "251", "962", "41", "1", null, null, this);
            obj.set_taborder("350");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1008, 1514, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Guide_01");
            		p.set_titletext("Detail Data Area");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Guide_09.xfdl", function(exports) {
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

        this.loadIncludeScript("Guide_09.xfdl", true);

       
    };
}
)();
