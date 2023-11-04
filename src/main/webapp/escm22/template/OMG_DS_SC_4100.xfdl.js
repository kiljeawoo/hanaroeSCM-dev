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
                this.set_name("OMG_DS_SC_4100");
                this.set_titletext("신규전자계약서 작성");
                this._setFormPosition(0,0,803,3531);
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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div11", "absolute", "0", "845", "803", "660", null, null, this);
            obj.set_taborder("711");
            obj.set_text("Div11");
            this.addChild(obj.name, obj);
            obj = new Div("Div09", "absolute", "0", "0", "788", "70", null, null, this.Div11);
            obj.set_taborder("0");
            obj.set_text("Div09");
            this.Div11.addChild(obj.name, obj);
            obj = new Static("Static24", "absolute", "0", "16", "467", "21", null, null, this.Div11.Div09);
            obj.set_taborder("5");
            obj.set_text("기타");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Div11.Div09.addChild(obj.name, obj);
            obj = new Static("Static55", "absolute", "0", "41", "110", "29", null, null, this.Div11.Div09);
            obj.set_taborder("6");
            obj.set_text("종류");
            obj.set_cssclass("sta_WF_Label");
            this.Div11.Div09.addChild(obj.name, obj);
            obj = new Static("Static56", "absolute", "109", "41", "679", "29", null, null, this.Div11.Div09);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div11.Div09.addChild(obj.name, obj);
            obj = new CheckBox("CheckBox04", "absolute", "117", "45", "179", "21", null, null, this.Div11.Div09);
            obj.set_taborder("8");
            obj.set_text("판촉사원 매장근무 요청서");
            this.Div11.Div09.addChild(obj.name, obj);
            obj = new CheckBox("CheckBox05", "absolute", "290", "45", "179", "21", null, null, this.Div11.Div09);
            obj.set_taborder("9");
            obj.set_text("품질보증 협정서");
            this.Div11.Div09.addChild(obj.name, obj);
            obj = new Div("Div08", "absolute", "0", "70", "788", "433", null, null, this.Div11);
            obj.set_taborder("1");
            obj.set_text("Div08");
            this.Div11.addChild(obj.name, obj);
            obj = new Static("Static57", "absolute", "0", "17", "467", "21", null, null, this.Div11.Div08);
            obj.set_taborder("33");
            obj.set_text("판촉사원 매장근무 요청서");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Div11.Div08.addChild(obj.name, obj);
            obj = new Button("Button05", "absolute", "711", "15", "77", "21", null, null, this.Div11.Div08);
            obj.set_taborder("34");
            obj.set_text("계약서보기");
            this.Div11.Div08.addChild(obj.name, obj);
            obj = new Static("Static71", "absolute", "0", "42", "788", "115", null, null, this.Div11.Div08);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div11.Div08.addChild(obj.name, obj);
            obj = new WebBrowser("WebBrowser01", "absolute", "4", "46", "781", "108", null, null, this.Div11.Div08);
            obj.set_taborder("36");
            this.Div11.Div08.addChild(obj.name, obj);
            obj = new Static("Static45", "absolute", "154", "196", "205", "29", null, null, this.Div11.Div08);
            obj.set_taborder("37");
            obj.set_text("판촉사원");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div11.Div08.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "0", "196", "155", "29", null, null, this.Div11.Div08);
            obj.set_taborder("38");
            obj.set_text("점포명");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div11.Div08.addChild(obj.name, obj);
            obj = new Static("Static62", "absolute", "358", "196", "430", "29", null, null, this.Div11.Div08);
            obj.set_taborder("39");
            obj.set_text("산출근거(상세히 기입)");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div11.Div08.addChild(obj.name, obj);
            obj = new Static("Static38", "absolute", "0", "224", "155", "29", null, null, this.Div11.Div08);
            obj.set_taborder("40");
            obj.set_text("인건비");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div11.Div08.addChild(obj.name, obj);
            obj = new Static("Static40", "absolute", "0", "252", "155", "29", null, null, this.Div11.Div08);
            obj.set_taborder("41");
            obj.set_text("기타");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div11.Div08.addChild(obj.name, obj);
            obj = new Static("Static46", "absolute", "0", "280", "155", "29", null, null, this.Div11.Div08);
            obj.set_taborder("42");
            obj.set_text("계(A)");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div11.Div08.addChild(obj.name, obj);
            obj = new Static("Static53", "absolute", "710", "175", "78", "21", null, null, this.Div11.Div08);
            obj.set_taborder("43");
            obj.set_text("(단워 : 천원)");
            obj.set_cssclass("sta_WF_GridCount");
            this.Div11.Div08.addChild(obj.name, obj);
            obj = new Static("Static58", "absolute", "154", "224", "205", "29", null, null, this.Div11.Div08);
            obj.set_taborder("44");
            obj.set_text("300");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.Div11.Div08.addChild(obj.name, obj);
            obj = new Static("Static61", "absolute", "154", "252", "205", "29", null, null, this.Div11.Div08);
            obj.set_taborder("45");
            obj.set_text("4500");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.Div11.Div08.addChild(obj.name, obj);
            obj = new Static("Static63", "absolute", "154", "280", "205", "29", null, null, this.Div11.Div08);
            obj.set_taborder("46");
            obj.set_text("4800");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.Div11.Div08.addChild(obj.name, obj);
            obj = new Static("Static64", "absolute", "358", "224", "430", "29", null, null, this.Div11.Div08);
            obj.set_taborder("47");
            obj.set_text("월급여 155*3 / 판촉사원 3명일 경우");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div11.Div08.addChild(obj.name, obj);
            obj = new Static("Static65", "absolute", "358", "252", "430", "29", null, null, this.Div11.Div08);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div11.Div08.addChild(obj.name, obj);
            obj = new Static("Static66", "absolute", "358", "280", "430", "29", null, null, this.Div11.Div08);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div11.Div08.addChild(obj.name, obj);
            obj = new Static("Static68", "absolute", "0", "172", "218", "21", null, null, this.Div11.Div08);
            obj.set_taborder("50");
            obj.set_text("1. 종업원 파견에 따른 소요비용");
            this.Div11.Div08.addChild(obj.name, obj);
            obj = new Static("Static69", "absolute", "0", "324", "218", "21", null, null, this.Div11.Div08);
            obj.set_taborder("51");
            obj.set_text("2. 예상이익 및  산출근거");
            this.Div11.Div08.addChild(obj.name, obj);
            obj = new Static("Static74", "absolute", "0", "348", "249", "29", null, null, this.Div11.Div08);
            obj.set_taborder("52");
            obj.set_text("월매출액");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div11.Div08.addChild(obj.name, obj);
            obj = new Static("Static76", "absolute", "0", "376", "125", "29", null, null, this.Div11.Div08);
            obj.set_taborder("53");
            obj.set_text("인건비");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div11.Div08.addChild(obj.name, obj);
            obj = new Static("Static80", "absolute", "0", "404", "125", "29", null, null, this.Div11.Div08);
            obj.set_taborder("54");
            obj.set_text("4500");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.Div11.Div08.addChild(obj.name, obj);
            obj = new Static("Static82", "absolute", "648", "348", "140", "57", null, null, this.Div11.Div08);
            obj.set_taborder("55");
            obj.set_text("예상이익\r\n(C-B-A)");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div11.Div08.addChild(obj.name, obj);
            obj = new Static("Static77", "absolute", "124", "376", "125", "29", null, null, this.Div11.Div08);
            obj.set_taborder("56");
            obj.set_text("인건비");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div11.Div08.addChild(obj.name, obj);
            obj = new Static("Static78", "absolute", "124", "404", "125", "29", null, null, this.Div11.Div08);
            obj.set_taborder("57");
            obj.set_text("4500");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.Div11.Div08.addChild(obj.name, obj);
            obj = new Static("Static83", "absolute", "248", "348", "249", "29", null, null, this.Div11.Div08);
            obj.set_taborder("58");
            obj.set_text("월매출이익");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div11.Div08.addChild(obj.name, obj);
            obj = new Static("Static84", "absolute", "248", "376", "125", "29", null, null, this.Div11.Div08);
            obj.set_taborder("59");
            obj.set_text("인건비");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div11.Div08.addChild(obj.name, obj);
            obj = new Static("Static85", "absolute", "248", "404", "125", "29", null, null, this.Div11.Div08);
            obj.set_taborder("60");
            obj.set_text("4500");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.Div11.Div08.addChild(obj.name, obj);
            obj = new Static("Static101", "absolute", "372", "376", "125", "29", null, null, this.Div11.Div08);
            obj.set_taborder("61");
            obj.set_text("인건비");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div11.Div08.addChild(obj.name, obj);
            obj = new Static("Static102", "absolute", "372", "404", "125", "29", null, null, this.Div11.Div08);
            obj.set_taborder("62");
            obj.set_text("4500");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.Div11.Div08.addChild(obj.name, obj);
            obj = new Static("Static73", "absolute", "496", "348", "153", "57", null, null, this.Div11.Div08);
            obj.set_taborder("63");
            obj.set_text("매출이익\r\n(증가분 C-B)");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div11.Div08.addChild(obj.name, obj);
            obj = new Static("Static79", "absolute", "496", "404", "153", "29", null, null, this.Div11.Div08);
            obj.set_taborder("64");
            obj.set_text("15000");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.Div11.Div08.addChild(obj.name, obj);
            obj = new Static("Static81", "absolute", "648", "404", "140", "29", null, null, this.Div11.Div08);
            obj.set_taborder("65");
            obj.set_text("10200");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.Div11.Div08.addChild(obj.name, obj);
            obj = new Div("Div10", "absolute", "0", "503", "788", "157", null, null, this.Div11);
            obj.set_taborder("2");
            obj.set_text("Div10");
            this.Div11.addChild(obj.name, obj);
            obj = new Static("Static70", "absolute", "0", "17", "467", "21", null, null, this.Div11.Div10);
            obj.set_taborder("4");
            obj.set_text("품질보증 협정서");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Div11.Div10.addChild(obj.name, obj);
            obj = new Button("Button06", "absolute", "711", "15", "77", "21", null, null, this.Div11.Div10);
            obj.set_taborder("5");
            obj.set_text("계약서보기");
            this.Div11.Div10.addChild(obj.name, obj);
            obj = new Static("Static72", "absolute", "0", "42", "788", "115", null, null, this.Div11.Div10);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div11.Div10.addChild(obj.name, obj);
            obj = new WebBrowser("WebBrowser02", "absolute", "4", "46", "781", "108", null, null, this.Div11.Div10);
            obj.set_taborder("7");
            this.Div11.Div10.addChild(obj.name, obj);

            obj = new Div("Div07", "absolute", "0", "455", "803", "70", null, null, this);
            obj.set_taborder("707");
            obj.set_text("Div07");
            this.addChild(obj.name, obj);
            obj = new Static("Static51", "absolute", "0", "16", "467", "21", null, null, this.Div07);
            obj.set_taborder("0");
            obj.set_text("메인 계약서");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Div07.addChild(obj.name, obj);
            obj = new Static("Static50", "absolute", "0", "41", "110", "29", null, null, this.Div07);
            obj.set_taborder("1");
            obj.set_text("메인계약서종류");
            obj.set_cssclass("sta_WF_Label");
            this.Div07.addChild(obj.name, obj);
            obj = new Static("Static52", "absolute", "109", "41", null, "29", "15", null, this.Div07);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div07.addChild(obj.name, obj);
            obj = new Radio("Radio00", "absolute", "117", "45", "680", "21", null, null, this.Div07);
            this.Div07.addChild(obj.name, obj);
            var Radio00_innerdataset = new Dataset("Radio00_innerdataset", this.Div07.Radio00);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">물품구매(대형) 공급계약서</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">물품센터 이용계약서(일반)</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">물품센터 이용계약서(주류)</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">특약매입거래계약서</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");

            obj = new Div("Div06", "absolute", "0", "525", "803", "320", null, null, this);
            obj.set_taborder("706");
            obj.set_text("Div06");
            this.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "109", "184", null, "29", "15", null, this.Div06);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div06.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "0", "156", "110", "29", null, null, this.Div06);
            obj.set_taborder("1");
            obj.set_text("검수일");
            obj.set_cssclass("sta_WF_Label");
            this.Div06.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "244", "184", "110", "29", null, null, this.Div06);
            obj.set_taborder("2");
            obj.set_text("판매대금");
            obj.set_cssclass("sta_WF_Label");
            this.Div06.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "109", "156", null, "29", "15", null, this.Div06);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div06.addChild(obj.name, obj);
            obj = new Static("Static59", "absolute", "244", "156", "110", "29", null, null, this.Div06);
            obj.set_taborder("4");
            obj.set_text("경과분");
            obj.set_cssclass("sta_WF_Label");
            this.Div06.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "357", "160", "80", "21", null, null, this.Div06);
            obj.set_taborder("5");
            this.Div06.addChild(obj.name, obj);
            obj = new Static("Static75", "absolute", "0", "184", "110", "29", null, null, this.Div06);
            obj.set_taborder("6");
            obj.set_text("수탁사업수수료");
            obj.set_cssclass("sta_WF_Label");
            this.Div06.addChild(obj.name, obj);
            obj = new Static("Static86", "absolute", "0", "17", "467", "21", null, null, this.Div06);
            obj.set_taborder("7");
            obj.set_text("특약매입거래 계약서");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Div06.addChild(obj.name, obj);
            obj = new Static("Static87", "absolute", "109", "212", null, "29", "15", null, this.Div06);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div06.addChild(obj.name, obj);
            obj = new Static("Static90", "absolute", "0", "212", "110", "29", null, null, this.Div06);
            obj.set_taborder("9");
            obj.set_text("판매된상품대금");
            obj.set_cssclass("sta_WF_Label");
            this.Div06.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit12", "absolute", "113", "188", "100", "21", null, null, this.Div06);
            obj.set_taborder("10");
            this.Div06.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit13", "absolute", "113", "216", "100", "21", null, null, this.Div06);
            obj.set_taborder("11");
            this.Div06.addChild(obj.name, obj);
            obj = new Static("Static60", "absolute", "217", "188", "22", "21", null, null, this.Div06);
            obj.set_taborder("12");
            obj.set_text("%");
            this.Div06.addChild(obj.name, obj);
            obj = new Static("Static67", "absolute", "217", "216", "22", "21", null, null, this.Div06);
            obj.set_taborder("13");
            obj.set_text("%");
            this.Div06.addChild(obj.name, obj);
            obj = new Static("Static88", "absolute", "489", "188", "22", "21", null, null, this.Div06);
            obj.set_taborder("14");
            obj.set_text("%");
            this.Div06.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit14", "absolute", "357", "188", "128", "21", null, null, this.Div06);
            obj.set_taborder("15");
            this.Div06.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit15", "absolute", "113", "160", "100", "21", null, null, this.Div06);
            obj.set_taborder("16");
            this.Div06.addChild(obj.name, obj);
            obj = new Static("Static89", "absolute", "441", "160", "22", "21", null, null, this.Div06);
            obj.set_taborder("17");
            obj.set_text("월");
            this.Div06.addChild(obj.name, obj);
            obj = new Static("Static91", "absolute", "217", "160", "22", "21", null, null, this.Div06);
            obj.set_taborder("18");
            obj.set_text("일");
            this.Div06.addChild(obj.name, obj);
            obj = new Static("Static92", "absolute", "545", "160", "22", "21", null, null, this.Div06);
            obj.set_taborder("19");
            obj.set_text("일");
            this.Div06.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "461", "160", "80", "21", null, null, this.Div06);
            obj.set_taborder("20");
            this.Div06.addChild(obj.name, obj);
            obj = new Static("Static93", "absolute", "0", "240", "110", "80", null, null, this.Div06);
            obj.set_taborder("21");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_WF_Label");
            this.Div06.addChild(obj.name, obj);
            obj = new Static("Static94", "absolute", "109", "240", null, "80", "15", null, this.Div06);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div06.addChild(obj.name, obj);
            obj = new TextArea("TextArea00", "absolute", "113", "244", "671", "72", null, null, this.Div06);
            obj.set_taborder("23");
            this.Div06.addChild(obj.name, obj);
            obj = new Button("Button10", "absolute", "711", "15", "77", "21", null, null, this.Div06);
            obj.set_taborder("24");
            obj.set_text("계약서보기");
            this.Div06.addChild(obj.name, obj);
            obj = new Static("Static95", "absolute", "0", "42", "788", "115", null, null, this.Div06);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div06.addChild(obj.name, obj);
            obj = new WebBrowser("WebBrowser00", "absolute", "4", "46", "781", "108", null, null, this.Div06);
            obj.set_taborder("26");
            this.Div06.addChild(obj.name, obj);

            obj = new Div("Div05", "absolute", "0", "1505", "803", "623", null, null, this);
            obj.set_taborder("705");
            obj.set_text("Div05");
            this.addChild(obj.name, obj);
            obj = new Static("Static103", "absolute", "0", "17", "467", "21", null, null, this.Div05);
            obj.set_taborder("0");
            obj.set_text("○○○행사 약정서");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Div05.addChild(obj.name, obj);
            obj = new Button("Button07", "absolute", "711", "15", "77", "21", null, null, this.Div05);
            obj.set_taborder("1");
            obj.set_text("계약서보기");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static104", "absolute", "0", "42", "788", "115", null, null, this.Div05);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new WebBrowser("WebBrowser03", "absolute", "4", "46", "781", "108", null, null, this.Div05);
            obj.set_taborder("3");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static105", "absolute", "0", "167", "110", "29", null, null, this.Div05);
            obj.set_taborder("4");
            obj.set_text("행사제목");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static106", "absolute", "109", "167", "679", "29", null, null, this.Div05);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static107", "absolute", "393", "167", "110", "29", null, null, this.Div05);
            obj.set_taborder("6");
            obj.set_text("행사기간");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("Edit10", "absolute", "113", "171", "277", "21", null, null, this.Div05);
            obj.set_taborder("7");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static108", "absolute", "607", "171", "10", "21", null, null, this.Div05);
            obj.set_taborder("8");
            obj.set_text("~");
            this.Div05.addChild(obj.name, obj);
            obj = new Calendar("Calendar00", "absolute", "506", "171", "100", "21", null, null, this.Div05);
            this.Div05.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("Calendar01", "absolute", "617", "171", "100", "21", null, null, this.Div05);
            this.Div05.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static109", "absolute", "154", "235", "205", "29", null, null, this.Div05);
            obj.set_taborder("11");
            obj.set_text("소요역");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static110", "absolute", "0", "235", "155", "29", null, null, this.Div05);
            obj.set_taborder("12");
            obj.set_text("세부내역");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static111", "absolute", "358", "235", "430", "29", null, null, this.Div05);
            obj.set_taborder("13");
            obj.set_text("산출근거(상세히 기입)");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static112", "absolute", "0", "263", "155", "29", null, null, this.Div05);
            obj.set_taborder("14");
            obj.set_text("광고비");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static113", "absolute", "0", "291", "155", "29", null, null, this.Div05);
            obj.set_taborder("15");
            obj.set_text("경품비");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static114", "absolute", "0", "319", "155", "29", null, null, this.Div05);
            obj.set_taborder("16");
            obj.set_text("아르바이트비용");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static115", "absolute", "154", "263", "205", "29", null, null, this.Div05);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static116", "absolute", "154", "291", "205", "29", null, null, this.Div05);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static117", "absolute", "154", "319", "205", "29", null, null, this.Div05);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static118", "absolute", "358", "263", "430", "29", null, null, this.Div05);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static119", "absolute", "358", "291", "430", "29", null, null, this.Div05);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static121", "absolute", "358", "319", "430", "29", null, null, this.Div05);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static122", "absolute", "0", "211", "218", "21", null, null, this.Div05);
            obj.set_taborder("23");
            obj.set_text("1. 전체예상 판촉비용");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static123", "absolute", "0", "347", "155", "29", null, null, this.Div05);
            obj.set_taborder("24");
            obj.set_text("기타");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static124", "absolute", "0", "375", "155", "29", null, null, this.Div05);
            obj.set_taborder("25");
            obj.set_text("계");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static125", "absolute", "154", "347", "205", "29", null, null, this.Div05);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static126", "absolute", "154", "375", "205", "29", null, null, this.Div05);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static127", "absolute", "358", "347", "430", "29", null, null, this.Div05);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static128", "absolute", "358", "375", "430", "29", null, null, this.Div05);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static129", "absolute", "0", "514", "218", "21", null, null, this.Div05);
            obj.set_taborder("30");
            obj.set_text("2. 판촉비 부담비율");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static130", "absolute", "0", "414", "223", "29", null, null, this.Div05);
            obj.set_taborder("31");
            obj.set_text("공급자");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static132", "absolute", "0", "442", "112", "29", null, null, this.Div05);
            obj.set_taborder("32");
            obj.set_text("예상이익");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static133", "absolute", "0", "470", "112", "29", null, null, this.Div05);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static134", "absolute", "555", "414", "233", "29", null, null, this.Div05);
            obj.set_taborder("34");
            obj.set_text("점유비(%)");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static135", "absolute", "111", "442", "112", "29", null, null, this.Div05);
            obj.set_taborder("35");
            obj.set_text("산출근거");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static136", "absolute", "111", "470", "112", "29", null, null, this.Div05);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static137", "absolute", "222", "414", "223", "29", null, null, this.Div05);
            obj.set_taborder("37");
            obj.set_text("구매자");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static138", "absolute", "222", "442", "112", "29", null, null, this.Div05);
            obj.set_taborder("38");
            obj.set_text("예상이익");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static139", "absolute", "222", "470", "112", "29", null, null, this.Div05);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static140", "absolute", "333", "442", "112", "29", null, null, this.Div05);
            obj.set_taborder("40");
            obj.set_text("산출근거");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static141", "absolute", "333", "470", "112", "29", null, null, this.Div05);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static143", "absolute", "444", "414", "112", "29", null, null, this.Div05);
            obj.set_taborder("42");
            obj.set_text("계");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static144", "absolute", "444", "470", "112", "29", null, null, this.Div05);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static146", "absolute", "0", "538", "249", "57", null, null, this.Div05);
            obj.set_taborder("44");
            obj.set_text("전체예상 판촉비용");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static148", "absolute", "0", "594", "249", "29", null, null, this.Div05);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static152", "absolute", "248", "538", "249", "29", null, null, this.Div05);
            obj.set_taborder("46");
            obj.set_text("안분금액");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static153", "absolute", "248", "566", "125", "29", null, null, this.Div05);
            obj.set_taborder("47");
            obj.set_text("공급자");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static154", "absolute", "248", "594", "125", "29", null, null, this.Div05);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static155", "absolute", "372", "566", "125", "29", null, null, this.Div05);
            obj.set_taborder("49");
            obj.set_text("구매자");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static156", "absolute", "372", "594", "125", "29", null, null, this.Div05);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static157", "absolute", "496", "538", "292", "57", null, null, this.Div05);
            obj.set_taborder("51");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static158", "absolute", "496", "594", "292", "29", null, null, this.Div05);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static147", "absolute", "444", "442", "112", "29", null, null, this.Div05);
            obj.set_taborder("53");
            obj.set_text("예상이익");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static149", "absolute", "555", "442", "112", "29", null, null, this.Div05);
            obj.set_taborder("54");
            obj.set_text("공급자");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static150", "absolute", "555", "470", "112", "29", null, null, this.Div05);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static151", "absolute", "666", "442", "122", "29", null, null, this.Div05);
            obj.set_taborder("56");
            obj.set_text("구매자");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static159", "absolute", "666", "470", "122", "29", null, null, this.Div05);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.Div05.addChild(obj.name, obj);

            obj = new Div("Div04", "absolute", "0", "2140", "803", "98", null, null, this);
            obj.set_taborder("704");
            obj.set_text("Div04");
            this.addChild(obj.name, obj);
            obj = new Static("Static160", "absolute", "0", "16", "467", "21", null, null, this.Div04);
            obj.set_taborder("0");
            obj.set_text("기타");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Div04.addChild(obj.name, obj);
            obj = new Static("Static162", "absolute", "0", "41", "110", "57", null, null, this.Div04);
            obj.set_taborder("1");
            obj.set_text("특약서 종류");
            obj.set_cssclass("sta_WF_Label");
            this.Div04.addChild(obj.name, obj);
            obj = new Static("Static163", "absolute", "109", "41", "679", "29", null, null, this.Div04);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div04.addChild(obj.name, obj);
            obj = new CheckBox("CheckBox06", "absolute", "117", "45", "117", "21", null, null, this.Div04);
            obj.set_taborder("3");
            obj.set_text("특약서(마진율)");
            this.Div04.addChild(obj.name, obj);
            obj = new CheckBox("CheckBox07", "absolute", "232", "45", "169", "21", null, null, this.Div04);
            obj.set_taborder("4");
            obj.set_text("특약서(판촉사원의 파견)");
            this.Div04.addChild(obj.name, obj);
            obj = new Static("Static165", "absolute", "109", "69", "679", "29", null, null, this.Div04);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div04.addChild(obj.name, obj);
            obj = new CheckBox("CheckBox08", "absolute", "117", "73", "169", "21", null, null, this.Div04);
            obj.set_taborder("6");
            obj.set_text("특약서(매장위치 및 면적)");
            this.Div04.addChild(obj.name, obj);
            obj = new CheckBox("CheckBox09", "absolute", "285", "73", "154", "21", null, null, this.Div04);
            obj.set_taborder("7");
            obj.set_text("특약서(매장의 철수 등)");
            this.Div04.addChild(obj.name, obj);
            obj = new CheckBox("CheckBox10", "absolute", "400", "45", "171", "21", null, null, this.Div04);
            obj.set_taborder("8");
            obj.set_text("판촉사원 매장근무 요청서");
            this.Div04.addChild(obj.name, obj);
            obj = new CheckBox("CheckBox11", "absolute", "573", "45", "167", "21", null, null, this.Div04);
            obj.set_taborder("9");
            obj.set_text("특약서(판촉사원의 파견)");
            this.Div04.addChild(obj.name, obj);
            obj = new CheckBox("CheckBox12", "absolute", "478", "73", "127", "21", null, null, this.Div04);
            obj.set_taborder("10");
            obj.set_text("특약서(원산지 등)");
            this.Div04.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "0", "2238", "803", "593", null, null, this);
            obj.set_taborder("703");
            obj.set_text("Div03");
            this.addChild(obj.name, obj);
            obj = new Static("Static164", "absolute", "0", "17", "467", "21", null, null, this.Div03);
            obj.set_taborder("0");
            obj.set_text("특약서(마진율)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Div03.addChild(obj.name, obj);
            obj = new Button("Button09", "absolute", "711", "15", "77", "21", null, null, this.Div03);
            obj.set_taborder("1");
            obj.set_text("계약서보기");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static166", "absolute", "0", "42", "788", "115", null, null, this.Div03);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div03.addChild(obj.name, obj);
            obj = new WebBrowser("WebBrowser04", "absolute", "4", "46", "781", "108", null, null, this.Div03);
            obj.set_taborder("3");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static167", "absolute", "0", "167", "110", "29", null, null, this.Div03);
            obj.set_taborder("4");
            obj.set_text("유효기간");
            obj.set_cssclass("sta_WF_Label");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static168", "absolute", "109", "167", "679", "29", null, null, this.Div03);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static169", "absolute", "214", "171", "10", "21", null, null, this.Div03);
            obj.set_taborder("6");
            obj.set_text("~");
            this.Div03.addChild(obj.name, obj);
            obj = new Calendar("Calendar02", "absolute", "113", "171", "100", "21", null, null, this.Div03);
            this.Div03.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("Calendar03", "absolute", "224", "171", "100", "21", null, null, this.Div03);
            this.Div03.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Grid("Grid00", "absolute", "0", "237", "788", "139", null, null, this.Div03);
            obj.set_taborder("9");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"280\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"254\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"점포명\"/><Cell col=\"1\" text=\"정상마진율(%)\"/><Cell col=\"2\" text=\"행사마진율(%)\"/><Cell col=\"3\" text=\"비고\"/></Band><Band id=\"body\"><Cell cssclass=\"Cellgrd_WF_AlignLeft\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_AlignRight\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_AlignRight\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_AlignLeft\"/></Band></Format></Formats>");
            this.Div03.addChild(obj.name, obj);
            obj = new Button("Button11", "absolute", "680", "211", "53", "21", null, null, this.Div03);
            obj.set_taborder("10");
            obj.set_text("행추가");
            this.Div03.addChild(obj.name, obj);
            obj = new Button("Button12", "absolute", "735", "211", "53", "21", null, null, this.Div03);
            obj.set_taborder("11");
            obj.set_text("행삭제");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static170", "absolute", "0", "213", "218", "21", null, null, this.Div03);
            obj.set_taborder("12");
            obj.set_text("1. 정상마진율 및  행사마진율");
            this.Div03.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "0", "417", "788", "176", null, null, this.Div03);
            obj.set_taborder("13");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"174\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"34\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"점포명\"/><Cell col=\"1\" colspan=\"5\" text=\"할인판매 마진율\"/><Cell col=\"6\" rowspan=\"2\" text=\"비고\"/><Cell row=\"1\" col=\"1\" text=\"10% 할인\"/><Cell row=\"1\" col=\"2\" text=\"20% 할인\"/><Cell row=\"1\" col=\"3\" text=\"30% 할인\"/><Cell row=\"1\" col=\"4\" text=\"40% 할인\"/><Cell row=\"1\" col=\"5\" text=\"50% 할인\"/></Band><Band id=\"body\"><Cell cssclass=\"Cellgrd_WF_AlignLeft\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_AlignRight\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_AlignRight\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_AlignRight\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_AlignRight\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_AlignRight\"/><Cell col=\"6\" cssclass=\"Cellgrd_WF_AlignLeft\"/></Band></Format></Formats>");
            this.Div03.addChild(obj.name, obj);
            obj = new Button("Button13", "absolute", "680", "391", "53", "21", null, null, this.Div03);
            obj.set_taborder("14");
            obj.set_text("행추가");
            this.Div03.addChild(obj.name, obj);
            obj = new Button("Button14", "absolute", "735", "391", "53", "21", null, null, this.Div03);
            obj.set_taborder("15");
            obj.set_text("행삭제");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static171", "absolute", "0", "393", "571", "21", null, null, this.Div03);
            obj.set_taborder("16");
            obj.set_text("2. 계약담당자와 계약상대자 간 협의에 의하여 시행하는할인판매 행사 시 마진율");
            this.Div03.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "0", "2831", "803", "349", null, null, this);
            obj.set_taborder("702");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Static("Static172", "absolute", "0", "17", "467", "21", null, null, this.Div02);
            obj.set_taborder("0");
            obj.set_text("특약서(판촉사원의 파견)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button15", "absolute", "711", "15", "77", null, null, "313", this.Div02);
            obj.set_taborder("1");
            obj.set_text("계약서보기");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static173", "absolute", "0", "42", "788", "115", null, null, this.Div02);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div02.addChild(obj.name, obj);
            obj = new WebBrowser("WebBrowser05", "absolute", "4", "46", "781", "108", null, null, this.Div02);
            obj.set_taborder("3");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static174", "absolute", "0", "167", "110", "29", null, null, this.Div02);
            obj.set_taborder("4");
            obj.set_text("파견기간");
            obj.set_cssclass("sta_WF_Label");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static175", "absolute", "109", "167", "679", "29", null, null, this.Div02);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static176", "absolute", "214", "171", "10", "21", null, null, this.Div02);
            obj.set_taborder("6");
            obj.set_text("~");
            this.Div02.addChild(obj.name, obj);
            obj = new Calendar("Calendar04", "absolute", "113", "171", "100", "21", null, null, this.Div02);
            this.Div02.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("Calendar05", "absolute", "224", "171", "100", "21", null, null, this.Div02);
            this.Div02.addChild(obj.name, obj);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static177", "absolute", "393", "167", "110", "29", null, null, this.Div02);
            obj.set_taborder("9");
            obj.set_text("근무기간");
            obj.set_cssclass("sta_WF_Label");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static178", "absolute", "554", "171", "14", "21", null, null, this.Div02);
            obj.set_taborder("10");
            obj.set_text(":");
            this.Div02.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit00", "absolute", "506", "171", "45", "21", null, null, this.Div02);
            obj.set_taborder("11");
            this.Div02.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit01", "absolute", "562", "171", "45", "21", null, null, this.Div02);
            obj.set_taborder("12");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static179", "absolute", "611", "171", "18", "21", null, null, this.Div02);
            obj.set_taborder("13");
            obj.set_text("~");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static180", "absolute", "672", "171", "14", "21", null, null, this.Div02);
            obj.set_taborder("14");
            obj.set_text(":");
            this.Div02.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit02", "absolute", "624", "171", "45", "21", null, null, this.Div02);
            obj.set_taborder("15");
            this.Div02.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit03", "absolute", "680", "171", "45", "21", null, null, this.Div02);
            obj.set_taborder("16");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static181", "absolute", "0", "211", "218", "21", null, null, this.Div02);
            obj.set_taborder("17");
            obj.set_text("1. 점포별 판촉사원 파견내역");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static183", "absolute", "0", "235", "152", "29", null, null, this.Div02);
            obj.set_taborder("18");
            obj.set_text("점포명");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static184", "absolute", "0", "263", "152", "29", null, null, this.Div02);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static186", "absolute", "151", "235", "112", "29", null, null, this.Div02);
            obj.set_taborder("20");
            obj.set_text("판촉사원");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static187", "absolute", "151", "263", "112", "29", null, null, this.Div02);
            obj.set_taborder("21");
            obj.set_text("명");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static189", "absolute", "262", "235", "152", "29", null, null, this.Div02);
            obj.set_taborder("22");
            obj.set_text("점포명");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static190", "absolute", "262", "263", "152", "29", null, null, this.Div02);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static191", "absolute", "413", "235", "112", "29", null, null, this.Div02);
            obj.set_taborder("24");
            obj.set_text("판촉사원");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static192", "absolute", "413", "263", "112", "29", null, null, this.Div02);
            obj.set_taborder("25");
            obj.set_text("명");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static194", "absolute", "524", "263", "152", "29", null, null, this.Div02);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static195", "absolute", "524", "235", "152", "29", null, null, this.Div02);
            obj.set_taborder("27");
            obj.set_text("점포명");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static196", "absolute", "675", "235", "113", "29", null, null, this.Div02);
            obj.set_taborder("28");
            obj.set_text("판촉사원");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static197", "absolute", "675", "263", "113", "29", null, null, this.Div02);
            obj.set_taborder("29");
            obj.set_text("명");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static182", "absolute", "0", "291", "152", "29", null, null, this.Div02);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static185", "absolute", "151", "291", "112", "29", null, null, this.Div02);
            obj.set_taborder("31");
            obj.set_text("명");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static188", "absolute", "262", "291", "152", "29", null, null, this.Div02);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static193", "absolute", "413", "291", "112", "29", null, null, this.Div02);
            obj.set_taborder("33");
            obj.set_text("명");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static198", "absolute", "524", "291", "152", "29", null, null, this.Div02);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static199", "absolute", "675", "291", "113", "29", null, null, this.Div02);
            obj.set_taborder("35");
            obj.set_text("명");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static200", "absolute", "0", "319", "152", "29", null, null, this.Div02);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static201", "absolute", "151", "319", "112", "29", null, null, this.Div02);
            obj.set_taborder("37");
            obj.set_text("명");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static202", "absolute", "262", "319", "152", "29", null, null, this.Div02);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static203", "absolute", "413", "319", "112", "29", null, null, this.Div02);
            obj.set_taborder("39");
            obj.set_text("명");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static204", "absolute", "524", "319", "152", "29", null, null, this.Div02);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static205", "absolute", "675", "319", "113", "29", null, null, this.Div02);
            obj.set_taborder("41");
            obj.set_text("명");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.Div02.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "0", "3180", "803", "349", null, null, this);
            obj.set_taborder("701");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Static("Static239", "absolute", "693", "291", "96", "29", null, null, this.Div00);
            obj.set_taborder("0");
            obj.set_text("평");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static243", "absolute", "693", "319", "96", "29", null, null, this.Div00);
            obj.set_taborder("1");
            obj.set_text("평");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static244", "absolute", "693", "263", "96", "29", null, null, this.Div00);
            obj.set_taborder("2");
            obj.set_text("평");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static206", "absolute", "0", "17", "467", "21", null, null, this.Div00);
            obj.set_taborder("3");
            obj.set_text("특약서(매장위치 및 면적)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("Button16", "absolute", "711", "15", "77", "21", null, null, this.Div00);
            obj.set_taborder("4");
            obj.set_text("계약서보기");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static207", "absolute", "0", "42", "788", "115", null, null, this.Div00);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div00.addChild(obj.name, obj);
            obj = new WebBrowser("WebBrowser06", "absolute", "4", "46", "781", "108", null, null, this.Div00);
            obj.set_taborder("6");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static208", "absolute", "0", "167", "110", "29", null, null, this.Div00);
            obj.set_taborder("7");
            obj.set_text("유효기간");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static209", "absolute", "109", "167", "679", "29", null, null, this.Div00);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static210", "absolute", "214", "171", "10", "21", null, null, this.Div00);
            obj.set_taborder("9");
            obj.set_text("~");
            this.Div00.addChild(obj.name, obj);
            obj = new Calendar("Calendar06", "absolute", "113", "171", "100", "21", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("Calendar07", "absolute", "224", "171", "100", "21", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static211", "absolute", "393", "167", "110", "29", null, null, this.Div00);
            obj.set_taborder("12");
            obj.set_text("행사기간");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static215", "absolute", "0", "211", "218", "21", null, null, this.Div00);
            obj.set_taborder("13");
            obj.set_text("1. 전체예상 판촉비용");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static216", "absolute", "0", "235", "199", "29", null, null, this.Div00);
            obj.set_taborder("14");
            obj.set_text("점포명");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static217", "absolute", "0", "291", "100", "29", null, null, this.Div00);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static219", "absolute", "99", "291", "100", "29", null, null, this.Div00);
            obj.set_taborder("16");
            obj.set_text("층");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static220", "absolute", "198", "235", "199", "29", null, null, this.Div00);
            obj.set_taborder("17");
            obj.set_text("점포명");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static221", "absolute", "198", "291", "100", "29", null, null, this.Div00);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static223", "absolute", "297", "291", "100", "29", null, null, this.Div00);
            obj.set_taborder("19");
            obj.set_text("평");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static224", "absolute", "396", "291", "100", "29", null, null, this.Div00);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static225", "absolute", "396", "235", "199", "29", null, null, this.Div00);
            obj.set_taborder("21");
            obj.set_text("점포명");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static227", "absolute", "495", "291", "100", "29", null, null, this.Div00);
            obj.set_taborder("22");
            obj.set_text("층");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static228", "absolute", "0", "319", "100", "29", null, null, this.Div00);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static229", "absolute", "99", "319", "100", "29", null, null, this.Div00);
            obj.set_taborder("24");
            obj.set_text("층");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static230", "absolute", "198", "319", "100", "29", null, null, this.Div00);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static231", "absolute", "297", "319", "100", "29", null, null, this.Div00);
            obj.set_taborder("26");
            obj.set_text("평");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static232", "absolute", "396", "319", "100", "29", null, null, this.Div00);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static233", "absolute", "495", "319", "100", "29", null, null, this.Div00);
            obj.set_taborder("28");
            obj.set_text("층");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static212", "absolute", "0", "263", "100", "29", null, null, this.Div00);
            obj.set_taborder("29");
            obj.set_text("명");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static213", "absolute", "99", "263", "100", "29", null, null, this.Div00);
            obj.set_taborder("30");
            obj.set_text("층");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static214", "absolute", "198", "263", "100", "29", null, null, this.Div00);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static240", "absolute", "297", "263", "100", "29", null, null, this.Div00);
            obj.set_taborder("32");
            obj.set_text("평");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static241", "absolute", "396", "263", "100", "29", null, null, this.Div00);
            obj.set_taborder("33");
            obj.set_text("명");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static242", "absolute", "495", "263", "100", "29", null, null, this.Div00);
            obj.set_taborder("34");
            obj.set_text("층");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static234", "absolute", "594", "235", "195", "29", null, null, this.Div00);
            obj.set_taborder("35");
            obj.set_text("판촉사원");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static235", "absolute", "594", "291", "100", "29", null, null, this.Div00);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static236", "absolute", "594", "319", "100", "29", null, null, this.Div00);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static237", "absolute", "594", "263", "100", "29", null, null, this.Div00);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_Label_c");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("240");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("Button08", "absolute", "747", "0", "41", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "0", "37", "467", "21", null, null, this);
            obj.set_taborder("96");
            obj.set_text("신규 전자계약서 작성");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "21", "803", "20", null, null, this);
            obj.set_taborder("97");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "788", "65", "15", "3498", null, null, this);
            obj.set_taborder("241");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffff4f");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "661", "0", "41", "21", null, null, this);
            obj.set_taborder("288");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "704", "0", "41", "21", null, null, this);
            obj.set_taborder("289");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "62", "110", "29", null, null, this);
            obj.set_taborder("290");
            obj.set_text("계약자 GLN코드");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "109", "62", "679", "29", null, null, this);
            obj.set_taborder("291");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "393", "62", "110", "29", null, null, this);
            obj.set_taborder("293");
            obj.set_text("상호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "0", "90", "110", "29", null, null, this);
            obj.set_taborder("295");
            obj.set_text("메인계약서종류");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "109", "90", "679", "29", null, null, this);
            obj.set_taborder("296");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "113", "94", "277", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("297");

            obj = new Static("Static09", "absolute", "393", "90", "110", "29", null, null, this);
            obj.set_taborder("298");
            obj.set_text("계약서종료");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "0", "118", "110", "29", null, null, this);
            obj.set_taborder("300");
            obj.set_text("계약기간");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "109", "118", "679", "29", null, null, this);
            obj.set_taborder("301");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "393", "118", "110", "29", null, null, this);
            obj.set_taborder("303");
            obj.set_text("계약일자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "0", "146", "110", "29", null, null, this);
            obj.set_taborder("305");
            obj.set_text("사업자 등록번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "109", "146", "679", "29", null, null, this);
            obj.set_taborder("306");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "393", "146", "110", "29", null, null, this);
            obj.set_taborder("308");
            obj.set_text("대표이사");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "0", "174", "110", "29", null, null, this);
            obj.set_taborder("310");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "109", "174", "679", "29", null, null, this);
            obj.set_taborder("311");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "393", "174", "110", "29", null, null, this);
            obj.set_taborder("313");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "0", "202", "110", "29", null, null, this);
            obj.set_taborder("315");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "109", "202", "679", "29", null, null, this);
            obj.set_taborder("316");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "0", "230", "110", "29", null, null, this);
            obj.set_taborder("320");
            obj.set_text("회사주소");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "109", "230", "679", "29", null, null, this);
            obj.set_taborder("321");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "0", "258", "110", "29", null, null, this);
            obj.set_taborder("325");
            obj.set_text("바이어소속");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "109", "258", "679", "29", null, null, this);
            obj.set_taborder("326");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "393", "258", "110", "29", null, null, this);
            obj.set_taborder("328");
            obj.set_text("바이어성명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "0", "286", "110", "29", null, null, this);
            obj.set_taborder("330");
            obj.set_text("바이어전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "109", "286", "679", "29", null, null, this);
            obj.set_taborder("331");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "393", "286", "110", "29", null, null, this);
            obj.set_taborder("333");
            obj.set_text("바이어이메일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "0", "314", "110", "29", null, null, this);
            obj.set_taborder("335");
            obj.set_text("계약담당자상호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "109", "314", "679", "29", null, null, this);
            obj.set_taborder("336");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "393", "314", "110", "29", null, null, this);
            obj.set_taborder("338");
            obj.set_text("계약담당자 대...");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "0", "342", "110", "29", null, null, this);
            obj.set_taborder("340");
            obj.set_text("법률상대리인");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "109", "342", "679", "29", null, null, this);
            obj.set_taborder("341");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "0", "370", "110", "29", null, null, this);
            obj.set_taborder("345");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "109", "370", "679", "29", null, null, this);
            obj.set_taborder("346");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "0", "398", "110", "29", null, null, this);
            obj.set_taborder("350");
            obj.set_text("계약담당자주소");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static49", "absolute", "109", "398", "679", "29", null, null, this);
            obj.set_taborder("351");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "0", "426", "110", "29", null, null, this);
            obj.set_taborder("353");
            obj.set_text("계약기간 자동...");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "109", "426", "679", "29", null, null, this);
            obj.set_taborder("354");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "369", "66", "21", "21", null, null, this);
            obj.set_taborder("385");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit20", "absolute", "113", "66", "253", "21", null, null, this);
            obj.set_taborder("386");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static131", "absolute", "214", "122", "10", "21", null, null, this);
            obj.set_taborder("387");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar09", "absolute", "224", "122", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("388");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Calendar("Calendar10", "absolute", "113", "122", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("389");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static142", "absolute", "173", "206", "9", "21", null, null, this);
            obj.set_taborder("390");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit16", "absolute", "113", "206", "58", "21", null, null, this);
            obj.set_taborder("391");
            obj.set_value("123");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit17", "absolute", "182", "206", "58", "21", null, null, this);
            obj.set_taborder("392");
            obj.set_value("456");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "243", "206", "21", "21", null, null, this);
            obj.set_taborder("393");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static96", "absolute", "166", "178", "9", "21", null, null, this);
            obj.set_taborder("394");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static97", "absolute", "225", "178", "9", "21", null, null, this);
            obj.set_taborder("395");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit18", "absolute", "175", "178", "48", "21", null, null, this);
            obj.set_taborder("396");
            obj.set_value("1234");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01", "absolute", "113", "178", "51", "21", null, null, this);
            this.addChild(obj.name, obj);
            var Combo01_innerdataset = new Dataset("Combo01_innerdataset", this.Combo01);
            Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">010</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">011</Col></Row></Rows>");
            obj.set_innerdataset(Combo01_innerdataset);
            obj.set_taborder("397");
            obj.set_value("1");
            obj.set_text("010");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");

            obj = new MaskEdit("MaskEdit19", "absolute", "234", "178", "48", "21", null, null, this);
            obj.set_taborder("398");
            obj.set_value("1234");
            this.addChild(obj.name, obj);

            obj = new Static("Static120", "absolute", "185", "150", "9", "21", null, null, this);
            obj.set_taborder("399");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit20", "absolute", "113", "150", "70", "21", null, null, this);
            obj.set_taborder("400");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit21", "absolute", "194", "150", "70", "21", null, null, this);
            obj.set_taborder("401");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "113", "234", "220", "21", null, null, this);
            obj.set_taborder("402");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03", "absolute", "336", "234", "448", "21", null, null, this);
            obj.set_taborder("403");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar11", "absolute", "506", "122", "151", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("404");

            obj = new Edit("Edit04", "absolute", "506", "66", "278", "21", null, null, this);
            obj.set_taborder("405");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05", "absolute", "506", "150", "278", "21", null, null, this);
            obj.set_taborder("406");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit06", "absolute", "506", "178", "278", "21", null, null, this);
            obj.set_taborder("407");
            this.addChild(obj.name, obj);

            obj = new Static("Static98", "absolute", "173", "374", "9", "21", null, null, this);
            obj.set_taborder("408");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit04", "absolute", "113", "374", "58", "21", null, null, this);
            obj.set_taborder("409");
            obj.set_value("123");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit05", "absolute", "182", "374", "58", "21", null, null, this);
            obj.set_taborder("410");
            obj.set_value("456");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "243", "374", "21", "21", null, null, this);
            obj.set_taborder("411");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit07", "absolute", "113", "262", "277", "21", null, null, this);
            obj.set_taborder("412");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit08", "absolute", "113", "318", "277", "21", null, null, this);
            obj.set_taborder("413");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit09", "absolute", "113", "346", "277", "21", null, null, this);
            obj.set_taborder("414");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit11", "absolute", "113", "402", "220", "21", null, null, this);
            obj.set_taborder("415");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit12", "absolute", "336", "402", "448", "21", null, null, this);
            obj.set_taborder("416");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01", "absolute", "117", "430", "158", "21", null, null, this);
            this.addChild(obj.name, obj);
            var Radio01_innerdataset = new Dataset("Radio01_innerdataset", this.Radio01);
            Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(Radio01_innerdataset);
            obj.set_taborder("417");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_value("1");
            obj.set_index("0");

            obj = new CheckBox("CheckBox00", "absolute", "510", "94", "90", "21", null, null, this);
            obj.set_taborder("418");
            obj.set_text("부가계약서");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02", "absolute", "662", "94", "63", "21", null, null, this);
            obj.set_taborder("420");
            obj.set_text("특약서");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03", "absolute", "726", "94", "54", "21", null, null, this);
            obj.set_taborder("421");
            obj.set_text("기타");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01", "absolute", "598", "94", "63", "21", null, null, this);
            obj.set_taborder("419");
            obj.set_text("약정서");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit13", "absolute", "506", "262", "278", "21", null, null, this);
            obj.set_taborder("422");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit14", "absolute", "506", "290", "278", "21", null, null, this);
            obj.set_taborder("423");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit15", "absolute", "506", "318", "278", "21", null, null, this);
            obj.set_taborder("424");
            this.addChild(obj.name, obj);

            obj = new Static("Static99", "absolute", "166", "290", "9", "21", null, null, this);
            obj.set_taborder("425");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static100", "absolute", "225", "290", "9", "21", null, null, this);
            obj.set_taborder("426");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit06", "absolute", "175", "290", "48", "21", null, null, this);
            obj.set_taborder("427");
            obj.set_value("1234");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit07", "absolute", "234", "290", "48", "21", null, null, this);
            obj.set_taborder("428");
            obj.set_value("1234");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo02", "absolute", "113", "290", "51", "21", null, null, this);
            this.addChild(obj.name, obj);
            var Combo02_innerdataset = new Dataset("Combo02_innerdataset", this.Combo02);
            Combo02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">010</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">011</Col></Row></Rows>");
            obj.set_innerdataset(Combo02_innerdataset);
            obj.set_taborder("429");
            obj.set_value("1");
            obj.set_text("010");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 788, 70, this.Div11.Div09,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div09");

            	}
            );
            this.Div11.Div09.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 788, 433, this.Div11.Div08,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_text("Div08");

            	}
            );
            this.Div11.Div08.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 788, 157, this.Div11.Div10,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.set_text("Div10");

            	}
            );
            this.Div11.Div10.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 660, this.Div11,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("711");
            		p.set_text("Div11");

            	}
            );
            this.Div11.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 70, this.Div07,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("707");
            		p.set_text("Div07");

            	}
            );
            this.Div07.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 320, this.Div06,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("706");
            		p.set_text("Div06");

            	}
            );
            this.Div06.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 623, this.Div05,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("705");
            		p.set_text("Div05");

            	}
            );
            this.Div05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 98, this.Div04,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("704");
            		p.set_text("Div04");

            	}
            );
            this.Div04.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 593, this.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("703");
            		p.set_text("Div03");

            	}
            );
            this.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 349, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("702");
            		p.set_text("Div02");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 349, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("701");
            		p.set_text("Div00");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 3531, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("신규전자계약서 작성");

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

        this.loadIncludeScript("OMG_DS_SC_4100.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
