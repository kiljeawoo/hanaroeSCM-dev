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
                this.set_name("OMG_DS_SC_0009");
                this.set_titletext("신규 계약업체 선정기준표");
                this._setFormPosition(0,0,950,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dsc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"string\" size=\"13\"/><Column id=\"name\" type=\"string\" size=\"13\"/></ColumnInfo><Rows><Row><Col id=\"code\">101</Col><Col id=\"name\">마트상품부</Col></Row><Row><Col id=\"code\">201</Col><Col id=\"name\">[수산] 선어/활어</Col></Row><Row><Col id=\"code\">202</Col><Col id=\"name\">[수산] 건어/가공</Col></Row><Row><Col id=\"code\">203</Col><Col id=\"name\">[수산] 냉동</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static01", "absolute", "15", "0", "871", "20", null, null, this);
            obj.set_taborder("97");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "15", "16", "301", "21", null, null, this);
            obj.set_taborder("338");
            obj.set_text("신규 계약 업체 선정기준표");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static214", "absolute", "404", "16", "110", "21", null, null, this);
            obj.set_taborder("576");
            obj.set_text("항목구분");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_dsc", "absolute", "514", "16", "270", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("577");
            obj.set_innerdataset("ds_dsc");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_displayrowcount("-1");
            obj.set_index("-1");

            obj = new Div("div01", "absolute", "0", "40", "800", "986", null, null, this);
            obj.set_taborder("578");
            obj.set_text("div01");
            obj.set_visible("true");
            obj.set_enable("true");
            this.addChild(obj.name, obj);
            obj = new Static("Static45", "absolute", "133", "5", "246", "29", null, null, this.div01);
            obj.set_taborder("1");
            obj.set_text("평가기준");
            obj.set_cssclass("sta_WF_Label_c");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static47", "absolute", "133", "117", "246", "141", null, null, this.div01);
            obj.set_taborder("3");
            obj.set_text("매출규모\r\n(직전년)");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static48", "absolute", "133", "33", "246", "85", null, null, this.div01);
            obj.set_taborder("4");
            obj.set_text("업  력");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static55", "absolute", "14", "5", "120", "29", null, null, this.div01);
            obj.set_taborder("5");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label_c");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static57", "absolute", "14", "117", "120", "141", null, null, this.div01);
            obj.set_taborder("6");
            obj.set_text("2. 실적");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static58", "absolute", "14", "33", "120", "85", null, null, this.div01);
            obj.set_taborder("7");
            obj.set_text("1. 업력");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static62", "absolute", "378", "5", "290", "29", null, null, this.div01);
            obj.set_taborder("8");
            obj.set_text("구  분");
            obj.set_cssclass("sta_WF_Label_c");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static63", "absolute", "667", "5", "119", "29", null, null, this.div01);
            obj.set_taborder("9");
            obj.set_text("배점");
            obj.set_cssclass("sta_WF_Label_c");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static65", "absolute", "378", "33", "290", "29", null, null, this.div01);
            obj.set_taborder("11");
            obj.set_text("개업 1년 이상 ~ 3년 미만");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static66", "absolute", "667", "33", "119", "29", null, null, this.div01);
            obj.set_taborder("12");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static69", "absolute", "378", "61", "290", "29", null, null, this.div01);
            obj.set_taborder("14");
            obj.set_text("3년 이상 ~ 10년 미만");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static70", "absolute", "667", "61", "119", "29", null, null, this.div01);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static72", "absolute", "378", "89", "290", "29", null, null, this.div01);
            obj.set_taborder("17");
            obj.set_text("10년 이상");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static73", "absolute", "667", "89", "119", "29", null, null, this.div01);
            obj.set_taborder("18");
            obj.set_text("15");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static56", "absolute", "378", "117", "290", "29", null, null, this.div01);
            obj.set_taborder("23");
            obj.set_text("1억원 미만");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static79", "absolute", "667", "117", "119", "29", null, null, this.div01);
            obj.set_taborder("24");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static81", "absolute", "378", "145", "290", "29", null, null, this.div01);
            obj.set_taborder("26");
            obj.set_text("1억원 이상 ~ 3억원 미만");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static82", "absolute", "667", "145", "119", "29", null, null, this.div01);
            obj.set_taborder("27");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static84", "absolute", "378", "173", "290", "29", null, null, this.div01);
            obj.set_taborder("29");
            obj.set_text("3억원 이상 ~ 10억원 미만");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static85", "absolute", "667", "173", "119", "29", null, null, this.div01);
            obj.set_taborder("30");
            obj.set_text("10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static87", "absolute", "378", "201", "290", "29", null, null, this.div01);
            obj.set_taborder("32");
            obj.set_text("10억원 이상 ~ 50억원 미만");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static88", "absolute", "667", "201", "119", "29", null, null, this.div01);
            obj.set_taborder("33");
            obj.set_text("15");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static90", "absolute", "378", "229", "290", "29", null, null, this.div01);
            obj.set_taborder("35");
            obj.set_text("50억원 이상");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static91", "absolute", "667", "229", "119", "29", null, null, this.div01);
            obj.set_taborder("36");
            obj.set_text("20");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static102", "absolute", "133", "453", "246", "29", null, null, this.div01);
            obj.set_taborder("43");
            obj.set_text("오프라인 거래");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static103", "absolute", "378", "453", "290", "29", null, null, this.div01);
            obj.set_taborder("44");
            obj.set_text("백화점, 대형마트, 편의점");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static104", "absolute", "667", "453", "119", "29", null, null, this.div01);
            obj.set_taborder("45");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static106", "absolute", "378", "481", "290", "29", null, null, this.div01);
            obj.set_taborder("47");
            obj.set_text("온라인몰, 홈쇼핑");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static107", "absolute", "667", "481", "119", "29", null, null, this.div01);
            obj.set_taborder("48");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static113", "absolute", "14", "453", "120", "57", null, null, this.div01);
            obj.set_taborder("50");
            obj.set_text("5. 상품력");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static115", "absolute", "133", "257", "246", "141", null, null, this.div01);
            obj.set_taborder("52");
            obj.set_text("기업신용등급");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static116", "absolute", "14", "257", "120", "141", null, null, this.div01);
            obj.set_taborder("53");
            obj.set_text("3. 신용평가");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static117", "absolute", "378", "257", "290", "29", null, null, this.div01);
            obj.set_taborder("54");
            obj.set_text("D ~ CCC");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static118", "absolute", "667", "257", "119", "29", null, null, this.div01);
            obj.set_taborder("55");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static120", "absolute", "378", "285", "290", "29", null, null, this.div01);
            obj.set_taborder("57");
            obj.set_text("CCC+ ~ B");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static121", "absolute", "667", "285", "119", "29", null, null, this.div01);
            obj.set_taborder("58");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static123", "absolute", "378", "313", "290", "29", null, null, this.div01);
            obj.set_taborder("60");
            obj.set_text("B+ ~ BB+");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static124", "absolute", "667", "313", "119", "29", null, null, this.div01);
            obj.set_taborder("61");
            obj.set_text("10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static126", "absolute", "378", "341", "290", "29", null, null, this.div01);
            obj.set_taborder("63");
            obj.set_text("BBB- ~ BBB+");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static127", "absolute", "667", "341", "119", "29", null, null, this.div01);
            obj.set_taborder("64");
            obj.set_text("20");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static129", "absolute", "378", "397", "290", "29", null, null, this.div01);
            obj.set_taborder("68");
            obj.set_text("공장등록증");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static130", "absolute", "667", "397", "119", "29", null, null, this.div01);
            obj.set_taborder("69");
            obj.set_text("20");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static133", "absolute", "133", "397", "246", "29", null, null, this.div01);
            obj.set_taborder("71");
            obj.set_text("제조공장 보유");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static134", "absolute", "14", "397", "120", "57", null, null, this.div01);
            obj.set_taborder("72");
            obj.set_text("4. 제조여부");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static136", "absolute", "133", "574", "246", "50", null, null, this.div01);
            obj.set_taborder("76");
            obj.set_text("공인인증 I\r\n(개당 5점)");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static137", "absolute", "14", "574", "120", "99", null, null, this.div01);
            obj.set_taborder("77");
            obj.set_text("6. 품질관리");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static140", "absolute", "378", "574", "290", "50", null, null, this.div01);
            obj.set_taborder("78");
            obj.set_text("ISO9001, ISO22000, FSSC22000, 일반HACCP,\r\nGMP(건강식품), 축산물 HACCP");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static141", "absolute", "667", "574", "119", "99", null, null, this.div01);
            obj.set_taborder("79");
            obj.set_text("10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static161", "absolute", "378", "672", "290", "50", null, null, this.div01);
            obj.set_taborder("94");
            obj.set_text("유통계열사ㆍ조합\r\n하나로마트ㆍ농협경제 판매사업");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static162", "absolute", "667", "672", "119", "50", null, null, this.div01);
            obj.set_taborder("95");
            obj.set_text("3");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static167", "absolute", "133", "672", "246", "50", null, null, this.div01);
            obj.set_taborder("97");
            obj.set_text("농협 경제\r\n사업 참여");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static174", "absolute", "14", "672", "120", "134", null, null, this.div01);
            obj.set_taborder("98");
            obj.set_text("7. 기타");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static195", "absolute", "378", "369", "290", "29", null, null, this.div01);
            obj.set_taborder("105");
            obj.set_text("A- ~ AAA");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static196", "absolute", "667", "369", "119", "29", null, null, this.div01);
            obj.set_taborder("106");
            obj.set_text("25");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "13", "522", null, "21", "4.38%", null, this.div01);
            obj.set_taborder("121");
            obj.set_text("□ 가점 및 감점");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 arial");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static208", "absolute", "14", "547", "120", "29", null, null, this.div01);
            obj.set_taborder("124");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label_c");
            obj.style.set_padding("2 7 0 7");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static209", "absolute", "133", "547", "246", "29", null, null, this.div01);
            obj.set_taborder("125");
            obj.set_text("평가기준");
            obj.set_cssclass("sta_WF_Label_c");
            obj.style.set_padding("2 7 0 7");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static210", "absolute", "378", "547", "290", "29", null, null, this.div01);
            obj.set_taborder("126");
            obj.set_text("구  분");
            obj.set_cssclass("sta_WF_Label_c");
            obj.style.set_padding("2 7 0 7");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static211", "absolute", "667", "547", "119", "29", null, null, this.div01);
            obj.set_taborder("127");
            obj.set_text("배점");
            obj.set_cssclass("sta_WF_Label_c");
            obj.style.set_padding("2 7 0 7");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static139", "absolute", "378", "425", "290", "29", null, null, this.div01);
            obj.set_taborder("129");
            obj.set_text("타사와의 제조하도급 거래증빙");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static152", "absolute", "667", "425", "119", "29", null, null, this.div01);
            obj.set_taborder("130");
            obj.set_text("10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static220", "absolute", "133", "425", "246", "29", null, null, this.div01);
            obj.set_taborder("137");
            obj.set_text("OEM거래");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static221", "absolute", "133", "481", "246", "29", null, null, this.div01);
            obj.set_taborder("138");
            obj.set_text("온라인 거래");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static59", "absolute", "378", "623", "290", "50", null, null, this.div01);
            obj.set_taborder("141");
            obj.set_text("전통식품품질인증, 특허증, 소규모 HACCP,\r\n실용신안");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static95", "absolute", "133", "623", "246", "50", null, null, this.div01);
            obj.set_taborder("142");
            obj.set_text("공인인증 II\r\n(개당 1점)");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static94", "absolute", "378", "721", "290", "29", null, null, this.div01);
            obj.set_taborder("147");
            obj.set_text("사회적 기업, 중소기업");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static96", "absolute", "667", "721", "119", "29", null, null, this.div01);
            obj.set_taborder("148");
            obj.set_text("2");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static100", "absolute", "133", "721", "246", "29", null, null, this.div01);
            obj.set_taborder("155");
            obj.set_text("동반성장");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static101", "absolute", "133", "749", "246", "57", null, null, this.div01);
            obj.set_taborder("156");
            obj.set_text("기타평가");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static110", "absolute", "667", "749", "119", "29", null, null, this.div01);
            obj.set_taborder("157");
            obj.set_text("△10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static111", "absolute", "378", "749", "290", "29", null, null, this.div01);
            obj.set_taborder("158");
            obj.set_text("카테고리 포화도");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static147", "absolute", "667", "777", "119", "29", null, null, this.div01);
            obj.set_taborder("159");
            obj.set_text("△10");
            obj.set_cssclass("sta_WF_Labelbg_R");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static148", "absolute", "378", "777", "290", "29", null, null, this.div01);
            obj.set_taborder("160");
            obj.set_text("하향 카테고리 계약검토");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static188", "absolute", "13", "815", null, "21", "20", null, this.div01);
            obj.set_taborder("163");
            obj.set_text("신용등급(상 →하) : AAA, AA, A+, A, A-, BBB+, BBB, BBB-, BB+, BB, B+,B, B-, CCC+, CCC, CCC-, CC, C, D");
            obj.set_cssclass("sta_WF_DescriptionB01");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "13", "840", null, "21", "20", null, this.div01);
            obj.set_taborder("164");
            obj.set_text("계약 종료 후 2년 내 계약상담 불가, 식품업체 70점이상, 비식품업체 60점이상 획득시 계약 가능");
            obj.set_cssclass("sta_WF_DescriptionB01");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "13", "865", null, "21", "20", null, this.div01);
            obj.set_taborder("165");
            obj.set_text("(OEM거래) 보유 공장을 활용하여 타사의 상품을 제조하는 거래증빙 必");
            obj.set_cssclass("sta_WF_DescriptionB01");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "13", "940", null, "21", "20", null, this.div01);
            obj.set_taborder("166");
            obj.set_text("(농협 경제사업 참여) 연간 거래실적 1억원 이상일 때 가점");
            obj.set_cssclass("sta_WF_DescriptionB01");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "13", "915", null, "21", "20", null, this.div01);
            obj.set_taborder("167");
            obj.set_text("(공인인증) Ⅰ+Ⅱ 합산하여 최대 10점, 공인인증Ⅰ 개당 5점, 공인인증Ⅱ 개당 1점 인정");
            obj.set_cssclass("sta_WF_DescriptionB01");
            this.div01.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "13", "890", null, "21", "20", null, this.div01);
            obj.set_taborder("168");
            obj.set_text("(온ㆍ오프라인거래) 건당 1점씩, 최대 5점 단, 판매장이 5개 이하인 유통채널 제외");
            obj.set_cssclass("sta_WF_DescriptionB01");
            this.div01.addChild(obj.name, obj);

            obj = new Div("div02", "absolute", "0", "1038", "800", "94", null, null, this);
            obj.set_taborder("579");
            obj.set_enable("true");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 800, 986, this.div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("578");
            		p.set_text("div01");
            		p.set_visible("true");
            		p.set_enable("true");

            	}
            );
            this.div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 950, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("신규 계약업체 선정기준표");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Div01.cbo_b01","value","ds_rcev","EVL_HDNG_B1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div01.rdo_a01","value","ds_rcev","EVL_HDNG_A1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Div01.rdo_a02","value","ds_rcev","EVL_HDNG_A2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Div01.rdo_a05","value","ds_rcev","EVL_HDNG_A5");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Div01.rdo_a03","value","ds_rcev","EVL_HDNG_A3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Div01.rdo_a04","value","ds_rcev","EVL_HDNG_A4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Div01.chk_a06","value","ds_rcev","EVL_HDNG_A6");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Div01.chk_b11","value","ds_rcev","EVL_HDNG_B11");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Div01.chk_b02","value","ds_rcev","EVL_HDNG_B2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Div01.rdo_b03","value","ds_rcev","EVL_HDNG_B3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Div01.rdo_b04","value","ds_rcev","EVL_HDNG_B4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Div01.rdo_b05","value","ds_rcev","EVL_HDNG_B5");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("OMG_DS_SC_0009.xfdl", function(exports) {
        this.Button05_onclick = function(obj,e)
        {
        	system.execBrowser("http://www.kedkorea.com/ci/CIINT01R0.do");
        }

        this.Button06_onclick = function(obj,e)
        {
        	system.execBrowser("http://www.clipq.co.kr//");
        }

        this.Button07_onclick = function(obj,e)
        {
        	system.execBrowser("https://www.srms.co.kr/srms/zsrms/mems/a200_MemberIns.jsp");
        }

        this.cbo_dsc_onitemchanged = function(obj,e)
        {	
        	if (this.cbo_dsc.value == "101") {
        		this.div01.set_visible(true);
        		this.div02.set_visible(false);
        	}else{
        		this.div01.set_visible(false);
        		this.div02.set_visible(true);
        		if (this.cbo_dsc.value == "201") {
        			this.div02.set_url("OMG.BT::OMG_DS_SC_21111.xfdl");
        			this.div02.set_top(40);
        			this.div02.set_height(950);
        		}else if (this.cbo_dsc.value == "202") {
        			this.div02.set_url("OMG.BT::OMG_DS_SC_21112.xfdl");
        			this.div02.set_top(40);
        			this.div02.set_height(950);
        		}else if (this.cbo_dsc.value == "203") {
        			this.div02.set_url("OMG.BT::OMG_DS_SC_21113.xfdl");
        			this.div02.set_top(40);
        			this.div02.set_height(1060);
        		}
        	}
        	this.resetScroll() ;
        }

        this.OMG_DS_SC_0009_onload = function(obj,e)
        {
        	this.cbo_dsc.set_index(0);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.OMG_DS_SC_0009_onload, this);
            this.cbo_dsc.addEventHandler("onitemchanged", this.cbo_dsc_onitemchanged, this);

        };

        this.loadIncludeScript("OMG_DS_SC_0009.xfdl", true);

       
    };
}
)();
