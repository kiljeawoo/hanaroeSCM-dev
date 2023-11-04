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
                this.set_name("OMG_DS_SC_4630");
                this.set_titletext("서비스이용료안내");
                this.set_name("OMG_DS_SC_6120");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static01", "absolute", "11", "23", "777", "26", null, null, this);
            obj.set_taborder("17");
            obj.set_text("서비스이용료안내");
            obj.style.set_font("12 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "11", "54", "777", "1", null, null, this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_Menulist");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "787", "80", "15", "490", null, null, this);
            obj.set_taborder("24");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Div("div_01", "absolute", "11", "79", "777", "95", null, null, this);
            obj.set_taborder("13");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            obj.style.set_background("transparent");
            this.addChild(obj.name, obj);
            obj = new Static("st_icon", "absolute", "709", "0", null, "29", "0", null, this.div_01);
            obj.set_taborder("4");
            obj.getSetter("state").set("open");
            obj.style.set_background("URL('theme://images/btn_WF_ShuttleU.png') right middle");
            obj.set_cssclass("U");
            obj.set_text("접기");
            this.div_01.addChild(obj.name, obj);
            obj = new Static("st_title", "absolute", "0", "0", null, "29", "0", null, this.div_01);
            obj.set_taborder("3");
            obj.set_text("요금체계");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.getSetter("state").set("open");
            obj.style.set_padding("0 0 0 14");
            this.div_01.addChild(obj.name, obj);
            obj = new Div("div", "absolute", "0", "28", "777", "67", null, null, this.div_01);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            obj.style.set_background("#f6f6f6ff");
            obj.style.set_border("1 none #bfbfbfff");
            this.div_01.addChild(obj.name, obj);
            obj = new Static("TextArea01", "absolute", "0", "0", "777", null, null, "0", this.div_01.div);
            obj.set_taborder("1");
            obj.set_text("하나로 eSCM의 요금체계는 기본료와 SCM업무의 EDI 문서 송수신 사용량에 대한 EDI서비스 이용요금, 부가정보의 매출현황 조회건수에 대한 부가정보 이용요금, 기타 부가서비스 이용요금으로 구성되어 있습니다.");
            obj.set_wordwrap("char");
            obj.style.set_border("1 none #bfbfbfff");
            obj.style.set_padding("10 10 20 10");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.div_01.div.addChild(obj.name, obj);

            obj = new Div("div_02", "absolute", "11", "169", "777", "119", null, null, this);
            obj.set_taborder("25");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("st_icon", "absolute", "709", "0", null, "29", "0", null, this.div_02);
            obj.set_taborder("7");
            obj.set_cssclass("U");
            obj.style.set_background("URL('theme://images/btn_WF_ShuttleU.png') right middle");
            obj.getSetter("state").set("open");
            obj.set_text("접기");
            this.div_02.addChild(obj.name, obj);
            obj = new Static("st_title", "absolute", "0", "0", null, "29", "0", null, this.div_02);
            obj.set_taborder("6");
            obj.set_text("기본료 ");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.getSetter("state").set("open");
            obj.style.set_padding("0 0 0 14");
            this.div_02.addChild(obj.name, obj);
            obj = new Div("div", "absolute", "0", "28", "777", "90", null, null, this.div_02);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            obj.style.set_background("#f6f6f6ff");
            obj.style.set_padding("10 10 10 10");
            this.div_02.addChild(obj.name, obj);
            obj = new Static("TextArea01", "absolute", "0", "0", "777", null, null, "0", this.div_02.div);
            obj.set_taborder("1");
            obj.set_text("월 20,000원 (본사만 부과 / VAT 별도), 전자세금계산서 전용업체 : 건당 1,000원 (VAT별도) , 월 5,000원 (VAT 별도)\r\n - EDI사용량이 없는 지사인 경우 : 세금계산서 발행건수가 있는 경우 세금계산서 전용업체 기준으로 청구 (월 5,000원 VAT별도)\r\n - 자동이체 신청 업체 중 이용료 5,000원 미만인 업체는 격월 출금");
            obj.set_wordwrap("char");
            obj.style.set_background("transparent");
            obj.style.set_border("1 none #bfbfbfff");
            obj.style.set_padding("10 10 20 10");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.div_02.div.addChild(obj.name, obj);

            obj = new Div("div_03", "absolute", "11", "287", "777", "569", null, null, this);
            obj.set_taborder("26");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("st_icon", "absolute", "709", "0", null, "29", "0", null, this.div_03);
            obj.set_taborder("6");
            obj.set_cssclass("U");
            obj.style.set_background("URL('theme://images/btn_WF_ShuttleU.png') right middle");
            obj.getSetter("state").set("open");
            obj.set_text("접기");
            this.div_03.addChild(obj.name, obj);
            obj = new Static("st_title", "absolute", "0", "0", null, "29", "-8", null, this.div_03);
            obj.set_taborder("5");
            obj.set_text("EDI서비스 이용요금 ");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.getSetter("state").set("open");
            obj.style.set_padding("0 0 0 14");
            this.div_03.addChild(obj.name, obj);
            obj = new Div("div", "absolute", "0", "28", "777", "540", null, null, this.div_03);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            obj.style.set_background("#f6f6f6ff");
            this.div_03.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "167", "172", "75", "29", null, null, this.div_03.div);
            obj.set_taborder("8");
            obj.set_text("40원");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_03.div.addChild(obj.name, obj);
            obj = new Static("st_11", "absolute", "167", "144", "75", "29", null, null, this.div_03.div);
            obj.set_taborder("9");
            obj.set_text("50원");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_03.div.addChild(obj.name, obj);
            obj = new Static("st_08", "absolute", "167", "116", "75", "29", null, null, this.div_03.div);
            obj.set_taborder("10");
            obj.set_text("60원");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_03.div.addChild(obj.name, obj);
            obj = new Static("st_07", "absolute", "54", "116", "115", "29", null, null, this.div_03.div);
            obj.set_taborder("11");
            obj.set_text("0~1,000");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_03.div.addChild(obj.name, obj);
            obj = new Static("st_10", "absolute", "54", "144", "115", "29", null, null, this.div_03.div);
            obj.set_taborder("12");
            obj.set_text("1,001~3,000");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_03.div.addChild(obj.name, obj);
            obj = new Static("st_13", "absolute", "54", "172", "115", "29", null, null, this.div_03.div);
            obj.set_taborder("13");
            obj.set_text("3,001~5,000");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_03.div.addChild(obj.name, obj);
            obj = new Static("st_16", "absolute", "54", "200", "115", "29", null, null, this.div_03.div);
            obj.set_taborder("14");
            obj.set_text("5,001~10,000");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_03.div.addChild(obj.name, obj);
            obj = new Static("st_19", "absolute", "54", "228", "115", "29", null, null, this.div_03.div);
            obj.set_taborder("15");
            obj.set_text("10,001~50,000");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_03.div.addChild(obj.name, obj);
            obj = new Static("st_22", "absolute", "54", "256", "115", "29", null, null, this.div_03.div);
            obj.set_taborder("16");
            obj.set_text("50,001~100,000");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_03.div.addChild(obj.name, obj);
            obj = new Static("st_25", "absolute", "54", "284", "115", "29", null, null, this.div_03.div);
            obj.set_taborder("17");
            obj.set_text("100,000 KB초과");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_03.div.addChild(obj.name, obj);
            obj = new Static("st_24", "absolute", "10", "284", "45", "29", null, null, this.div_03.div);
            obj.set_taborder("18");
            obj.set_text("7");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_03.div.addChild(obj.name, obj);
            obj = new Static("st_21", "absolute", "10", "256", "45", "29", null, null, this.div_03.div);
            obj.set_taborder("19");
            obj.set_text("6");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_03.div.addChild(obj.name, obj);
            obj = new Static("st_18", "absolute", "10", "228", "45", "29", null, null, this.div_03.div);
            obj.set_taborder("20");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_03.div.addChild(obj.name, obj);
            obj = new Static("st_15", "absolute", "10", "200", "45", "29", null, null, this.div_03.div);
            obj.set_taborder("21");
            obj.set_text("4");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_03.div.addChild(obj.name, obj);
            obj = new Static("st_12", "absolute", "10", "172", "45", "29", null, null, this.div_03.div);
            obj.set_taborder("22");
            obj.set_text("3");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_03.div.addChild(obj.name, obj);
            obj = new Static("st_09", "absolute", "10", "144", "45", "29", null, null, this.div_03.div);
            obj.set_taborder("23");
            obj.set_text("2");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_03.div.addChild(obj.name, obj);
            obj = new Static("st_06", "absolute", "10", "116", "45", "29", null, null, this.div_03.div);
            obj.set_taborder("24");
            obj.set_text("1");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_03.div.addChild(obj.name, obj);
            obj = new Static("st_02", "absolute", "10", "79", "45", "38", null, null, this.div_03.div);
            obj.set_taborder("25");
            obj.set_text("구간");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#f2f8faff");
            obj.style.set_color("#353e41ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.div_03.div.addChild(obj.name, obj);
            obj = new Static("st_03", "absolute", "54", "79", "115", "38", null, null, this.div_03.div);
            obj.set_taborder("26");
            obj.set_text("사용량\r\n(단위 : Kbyte)");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#f2f8faff");
            obj.style.set_color("#353e41ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.div_03.div.addChild(obj.name, obj);
            obj = new Static("st_04", "absolute", "167", "79", "75", "38", null, null, this.div_03.div);
            obj.set_taborder("27");
            obj.set_text("Kbyte당 단위 요금");
            obj.set_wordwrap("english");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#f2f8faff");
            obj.style.set_color("#353e41ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.div_03.div.addChild(obj.name, obj);
            obj = new Static("st_05", "absolute", "241", "79", "526", "38", null, null, this.div_03.div);
            obj.set_taborder("28");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#f2f8faff");
            obj.style.set_color("#353e41ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.div_03.div.addChild(obj.name, obj);
            obj = new Static("st_27", "absolute", "241", "116", "526", "197", null, null, this.div_03.div);
            obj.set_taborder("29");
            obj.set_text(" 청구대상 : 수주업무, 검수업무, 출고정보, 배송업무(등록업무), 데이터마트, 마감간소화 서비스\r\n 지사의 경우 사용량 기준으로 산정한 EDI 이용요금이 5천원 미만일 경우, 최저 요금인 5천원 적용\r\n 해당 메뉴 조회, 출력, 다운로드 시 사용량 발생\r\n 배송예정서 등록업무 청구제외대상\r\n - 농협 발주서 기반 배송예정서 작성문서\r\n - 농협 협력업체 내부시스템에서 배송예정서를 작성하는 XML/EDI업체\r\n   (단, 하나로eSCM웹화면에서 무발주배송예정서 Excel 다운로드시 사용량 청구)");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_linespace("5");
            obj.style.set_background("#ffffffff");
            obj.style.set_padding("2 0 0 0");
            obj.style.set_font("9 Gulim");
            this.div_03.div.addChild(obj.name, obj);
            obj = new Static("st_26", "absolute", "167", "284", "75", "29", null, null, this.div_03.div);
            obj.set_taborder("4");
            obj.set_text("10원");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_03.div.addChild(obj.name, obj);
            obj = new Static("st_23", "absolute", "167", "256", "75", "29", null, null, this.div_03.div);
            obj.set_taborder("5");
            obj.set_text("15원");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_03.div.addChild(obj.name, obj);
            obj = new Static("st_20", "absolute", "167", "228", "75", "29", null, null, this.div_03.div);
            obj.set_taborder("6");
            obj.set_text("20원");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_03.div.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "167", "200", "75", "29", null, null, this.div_03.div);
            obj.set_taborder("7");
            obj.set_text("30원");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_03.div.addChild(obj.name, obj);
            obj = new Static("TextArea01", "absolute", "0", "0", "777", "46", null, null, this.div_03.div);
            obj.set_taborder("30");
            obj.set_text("SCM업무에서 주문서, 납품확인서 등 EDI 문서를 송수신한 데이터량을 기준으로 구간별 요금이 부과됩니다.\r\n사용량이 증가할 수록 구간 단위 요금이 줄어드는 슬라이딩 할인 방식입니다.");
            obj.set_wordwrap("char");
            obj.style.set_border("1 none #bfbfbfff");
            obj.style.set_padding("10 10 0 10");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.div_03.div.addChild(obj.name, obj);
            obj = new Static("TextArea00", "absolute", "0", "312", "777", null, null, "0", this.div_03.div);
            obj.set_taborder("31");
            obj.set_text("EDI 문서 최초 수신일 기준 D+2일까지 재수신 데이터에 대해 청구하지 않고, D+3일부터 재수신 시 사용량 기준 50% 할인이 적용됩니다.\r\nex) 12월 1일 오후 4시 최초 수신 후 12월 3일 24시 이전 재수신 시 : 청구 제외 / 12월 4일 0시 이후 재수신 시 : 청구 대상 (50% 할인)\r\n\t\t\r\nEDI 이용요금 슬라이딩 요금체계 계산 예시\r\n당월 총 사용량 3,800 KB일 때,\r\n  1,000KB X 60원 =  60,000원 (1천 KB 이하 사용량)\r\n+ 2,000KB X 50원 = 100,000원 (1천KB 초과 ~ 3천 KB이하 사용량)\r\n+   800KB X 40원 =   32,000원 (3천 KB 초과 ~ 5천 KB 이하 사용량)\r\n〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓\r\n                          192,000원 (VAT 별도)");
            obj.set_wordwrap("char");
            obj.style.set_border("1 none #bfbfbfff");
            obj.style.set_padding("0 10 20 10");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.div_03.div.addChild(obj.name, obj);
            obj = new Static("TextArea02", "absolute", "0", "55", "777", "18", null, null, this.div_03.div);
            obj.set_taborder("32");
            obj.set_text("(VAT 별도)");
            obj.set_wordwrap("char");
            obj.style.set_border("1 none #bfbfbfff");
            obj.style.set_padding("0 10 0 0");
            obj.style.set_align("right middle");
            obj.getSetter("readonly").set("true");
            this.div_03.div.addChild(obj.name, obj);

            obj = new Div("div_04", "absolute", "11", "863", "777", "850", null, null, this);
            obj.set_taborder("27");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("st_icon", "absolute", "709", "0", null, "29", "0", null, this.div_04);
            obj.set_taborder("8");
            obj.style.set_background("URL('theme://images/btn_WF_ShuttleD.png') right middle");
            obj.getSetter("state").set("open");
            obj.set_cssclass("D");
            obj.set_text("펼치기");
            this.div_04.addChild(obj.name, obj);
            obj = new Static("st_title", "absolute", "0", "0", null, "29", "-8", null, this.div_04);
            obj.set_taborder("7");
            obj.set_text("부가정보 이용요금");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.getSetter("state").set("close");
            obj.style.set_padding("0 0 0 14");
            this.div_04.addChild(obj.name, obj);
            obj = new Div("div", "absolute", "0", "28", "777", "821", null, null, this.div_04);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            obj.style.set_background("#f6f6f6ff");
            this.div_04.addChild(obj.name, obj);
            obj = new Static("st_06", "absolute", "320", "113", "447", "38", null, null, this.div_04.div);
            obj.set_taborder("31");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#f2f8faff");
            obj.style.set_color("#353e41ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("st_05", "absolute", "236", "113", "85", "38", null, null, this.div_04.div);
            obj.set_taborder("32");
            obj.set_text("종량제\r\n(SKU건당)");
            obj.set_wordwrap("english");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#f2f8faff");
            obj.style.set_color("#353e41ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("st_04", "absolute", "167", "113", "70", "38", null, null, this.div_04.div);
            obj.set_taborder("33");
            obj.set_text("정액제\r\n(월정액)");
            obj.set_wordwrap("english");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#f2f8faff");
            obj.style.set_color("#353e41ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("st_03", "absolute", "53", "113", "115", "38", null, null, this.div_04.div);
            obj.set_taborder("34");
            obj.set_text("매출액 (월)");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#f2f8faff");
            obj.style.set_color("#353e41ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("st_02", "absolute", "10", "113", "45", "38", null, null, this.div_04.div);
            obj.set_taborder("35");
            obj.set_text("구간");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#f2f8faff");
            obj.style.set_color("#353e41ff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("st_08", "absolute", "53", "150", "115", "29", null, null, this.div_04.div);
            obj.set_taborder("37");
            obj.set_text("10억이상");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("st_09", "absolute", "167", "150", "70", "29", null, null, this.div_04.div);
            obj.set_taborder("38");
            obj.set_text("90만원");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("st_10", "absolute", "236", "150", "85", "29", null, null, this.div_04.div);
            obj.set_taborder("39");
            obj.set_text("10원");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("st_35", "absolute", "320", "150", "447", "197", null, null, this.div_04.div);
            obj.set_taborder("40");
            obj.set_text(" 정액제 할증\t\r\n 기본 500,000건 제공\t\r\n -     500,001 건 ~ 1,000,000 건 (추가 100,000 건당 5% 할증)\r\n -   1,000,001 건 ~ 2,000,000 건 (추가 100,000 건당 4% 할증)\r\n -   2,000,001 건 ~ 3,000,000 건 (추가 100,000 건당 3% 할증)\r\n -   3,000,001 건 ~ 5,000,000 건 (추가 100,000 건당 2% 할증)\r\n -   5,000,001 건 이상               (추가 100,000 건당 1% 할증)");
            obj.set_wordwrap("english");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_linespace("5");
            obj.style.set_background("#ffffffff");
            obj.style.set_padding("2 7 0 7");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("st_14", "absolute", "236", "178", "85", "29", null, null, this.div_04.div);
            obj.set_taborder("41");
            obj.set_text("10원");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("st_18", "absolute", "236", "206", "85", "29", null, null, this.div_04.div);
            obj.set_taborder("42");
            obj.set_text("7원");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("st_22", "absolute", "236", "234", "85", "29", null, null, this.div_04.div);
            obj.set_taborder("43");
            obj.set_text("7원");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("st_26", "absolute", "236", "262", "85", "29", null, null, this.div_04.div);
            obj.set_taborder("44");
            obj.set_text("4원");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("st_30", "absolute", "236", "290", "85", "29", null, null, this.div_04.div);
            obj.set_taborder("45");
            obj.set_text("4원");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("st_34", "absolute", "236", "318", "85", "29", null, null, this.div_04.div);
            obj.set_taborder("46");
            obj.set_text("무료");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("st_33", "absolute", "167", "318", "70", "29", null, null, this.div_04.div);
            obj.set_taborder("47");
            obj.set_text("무료");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("st_32", "absolute", "53", "318", "115", "29", null, null, this.div_04.div);
            obj.set_taborder("48");
            obj.set_text("0.3억 미만");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("st_31", "absolute", "10", "318", "45", "29", null, null, this.div_04.div);
            obj.set_taborder("49");
            obj.set_text("7");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("st_28", "absolute", "53", "290", "115", "29", null, null, this.div_04.div);
            obj.set_taborder("51");
            obj.set_text("0.3억 ~ 0.5억");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("st_29", "absolute", "167", "290", "70", "29", null, null, this.div_04.div);
            obj.set_taborder("52");
            obj.set_text("3만원");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("st_25", "absolute", "167", "262", "70", "29", null, null, this.div_04.div);
            obj.set_taborder("53");
            obj.set_text("9만원");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("st_21", "absolute", "167", "234", "70", "29", null, null, this.div_04.div);
            obj.set_taborder("54");
            obj.set_text("15만원");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("st_17", "absolute", "167", "206", "70", "29", null, null, this.div_04.div);
            obj.set_taborder("55");
            obj.set_text("30만원");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("st_13", "absolute", "167", "178", "70", "29", null, null, this.div_04.div);
            obj.set_taborder("56");
            obj.set_text("45만원");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("st_12", "absolute", "53", "178", "115", "29", null, null, this.div_04.div);
            obj.set_taborder("57");
            obj.set_text("5억 ~ 10억");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("st_16", "absolute", "53", "206", "115", "29", null, null, this.div_04.div);
            obj.set_taborder("58");
            obj.set_text("3억 ~ 5억");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("st_20", "absolute", "53", "234", "115", "29", null, null, this.div_04.div);
            obj.set_taborder("59");
            obj.set_text("1억 ~ 3억");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("st_24", "absolute", "53", "262", "115", "29", null, null, this.div_04.div);
            obj.set_taborder("60");
            obj.set_text("0.5억 ~ 1억");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("st_23", "absolute", "10", "262", "45", "29", null, null, this.div_04.div);
            obj.set_taborder("61");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("st_19", "absolute", "10", "234", "45", "29", null, null, this.div_04.div);
            obj.set_taborder("62");
            obj.set_text("4");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("st_15", "absolute", "10", "206", "45", "29", null, null, this.div_04.div);
            obj.set_taborder("63");
            obj.set_text("3");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("st_11", "absolute", "10", "178", "45", "29", null, null, this.div_04.div);
            obj.set_taborder("64");
            obj.set_text("2");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("TextArea01", "absolute", "0", "29", "777", "56", null, null, this.div_04.div);
            obj.set_taborder("93");
            obj.set_wordwrap("char");
            obj.style.set_border("1 none #bfbfbfff");
            obj.style.set_padding("0 10 0 10");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            obj.set_text("매출현황 상세를 다운로드 할 경우 청구되며, 요금제는 종량제와 정액제로 구분됩니다. \r\n종량제는 조회하는 해당 일자에 마트별 조회되는 모든 SKU 건당 하기 요금표의 단위 요금이 적용 됩니다.\r\n단, 매출 수량과 금액이 0인 SKU는 청구되지 않습니다.");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("TextArea32", "absolute", "0", "0", "777", "28", null, null, this.div_04.div);
            obj.set_taborder("94");
            obj.set_text("○ 판매정보");
            obj.set_wordwrap("char");
            obj.style.set_border("1 none #bfbfbfff");
            obj.style.set_padding("10 10 0 10");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 Gulim");
            obj.getSetter("readonly").set("true");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("TextArea00", "absolute", "0", "352", "777", "98", null, null, this.div_04.div);
            obj.set_taborder("95");
            obj.set_text("정액제 할증요금 예시\r\n매출액 10억이상 업체 (월 정액제 900,000원, VAT 별도)\r\n530,000건 다운로드 → 월 정액 (900,000원) + 할증 (45,000원) = 945,000원 부과 (VAT 별도)\r\n\r\n종량제 이용요금 예시");
            obj.set_wordwrap("char");
            obj.style.set_border("1 none #bfbfbfff");
            obj.style.set_padding("0 10 0 10");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("st_07", "absolute", "10", "150", "45", "29", null, null, this.div_04.div);
            obj.set_taborder("96");
            obj.set_text("1");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("st_27", "absolute", "10", "290", "45", "29", null, null, this.div_04.div);
            obj.set_taborder("97");
            obj.set_text("6");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "10", "451", "160", "32", null, null, this.div_04.div);
            obj.set_taborder("98");
            obj.set_text("수신년월");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "10", "482", "160", "29", null, null, this.div_04.div);
            obj.set_taborder("99");
            obj.set_text("201810");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("Static24", "absolute", "10", "510", "160", "29", null, null, this.div_04.div);
            obj.set_taborder("100");
            obj.set_text("201810");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("Static30", "absolute", "10", "538", "160", "29", null, null, this.div_04.div);
            obj.set_taborder("101");
            obj.set_text("201810");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("Static38", "absolute", "10", "566", "160", "29", null, null, this.div_04.div);
            obj.set_taborder("102");
            obj.set_text("201810");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("Static39", "absolute", "10", "594", "160", "29", null, null, this.div_04.div);
            obj.set_taborder("103");
            obj.set_text("201810");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("Static80", "absolute", "169", "451", "170", "32", null, null, this.div_04.div);
            obj.set_taborder("104");
            obj.set_text("자료수신업체");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("Static40", "absolute", "169", "482", "170", "29", null, null, this.div_04.div);
            obj.set_taborder("105");
            obj.set_text("A");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("Static41", "absolute", "169", "510", "170", "29", null, null, this.div_04.div);
            obj.set_taborder("106");
            obj.set_text("A");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("Static42", "absolute", "169", "538", "170", "29", null, null, this.div_04.div);
            obj.set_taborder("107");
            obj.set_text("A");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("Static43", "absolute", "169", "566", "170", "29", null, null, this.div_04.div);
            obj.set_taborder("108");
            obj.set_text("A");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("Static79", "absolute", "169", "594", "170", "29", null, null, this.div_04.div);
            obj.set_taborder("109");
            obj.set_text("A");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("Static106", "absolute", "10", "622", "498", "32", null, null, this.div_04.div);
            obj.set_taborder("110");
            obj.set_text("총 수신 상품 수");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("Static97", "absolute", "338", "594", "170", "29", null, null, this.div_04.div);
            obj.set_taborder("111");
            obj.set_text("20180905");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("Static89", "absolute", "338", "566", "170", "29", null, null, this.div_04.div);
            obj.set_taborder("112");
            obj.set_text("20180904");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("Static87", "absolute", "338", "538", "170", "29", null, null, this.div_04.div);
            obj.set_taborder("113");
            obj.set_text("20180903");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("Static86", "absolute", "338", "510", "170", "29", null, null, this.div_04.div);
            obj.set_taborder("114");
            obj.set_text("20180902");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("Static82", "absolute", "338", "482", "170", "29", null, null, this.div_04.div);
            obj.set_taborder("115");
            obj.set_text("20180901");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("Static99", "absolute", "338", "451", "170", "32", null, null, this.div_04.div);
            obj.set_taborder("116");
            obj.set_text("매출일자");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("Static105", "absolute", "507", "451", "260", "32", null, null, this.div_04.div);
            obj.set_taborder("117");
            obj.set_text("수신상품 수(SKU)");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("Static100", "absolute", "507", "482", "260", "29", null, null, this.div_04.div);
            obj.set_taborder("118");
            obj.set_text("4,256");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("Static101", "absolute", "507", "510", "260", "29", null, null, this.div_04.div);
            obj.set_taborder("119");
            obj.set_text("3,692");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("Static102", "absolute", "507", "538", "260", "29", null, null, this.div_04.div);
            obj.set_taborder("120");
            obj.set_text("3,891");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("Static103", "absolute", "507", "566", "260", "29", null, null, this.div_04.div);
            obj.set_taborder("121");
            obj.set_text("4,109");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("Static104", "absolute", "507", "594", "260", "29", null, null, this.div_04.div);
            obj.set_taborder("122");
            obj.set_text("4,154");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("Static107", "absolute", "507", "622", "260", "32", null, null, this.div_04.div);
            obj.set_taborder("123");
            obj.set_text("20,102");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("TextArea02", "absolute", "0", "656", "777", null, null, "0", this.div_04.div);
            obj.set_taborder("124");
            obj.set_text("1. A업체의 전월 매출액 5억 ~ 10억 이상일 경우 SKU 건당 10원\r\n총 수신 상품 수 : 20,102 X 10원 = 201,020원 (VAT 별도)\r\n2. A업체의 전월 매출액 1억 ~ 5억 미만일 경우 SKU 건당 7원\r\n총 수신 상품 수 : 20,102 X 7원 = 140,714원 (VAT 별도)\r\n3. A업체의 전월 매출액 3천만원 ~ 1억 미만일 경우 SKU 건당 4원\r\n총 수신 상품 수 : 20,102 X 4원 = 80,408원 (VAT 별도)\r\n4. A업체의 전월 매출액 3천만원 미만인 경우 무료");
            obj.set_wordwrap("char");
            obj.style.set_border("1 none #bfbfbfff");
            obj.style.set_padding("0 10 20 10");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.div_04.div.addChild(obj.name, obj);
            obj = new Static("TextArea03", "absolute", "0", "87", "777", "18", null, null, this.div_04.div);
            obj.set_taborder("125");
            obj.set_text("(VAT 별도)");
            obj.set_wordwrap("char");
            obj.style.set_border("1 none #bfbfbfff");
            obj.style.set_padding("0 10 0 0");
            obj.style.set_align("right middle");
            obj.getSetter("readonly").set("true");
            this.div_04.div.addChild(obj.name, obj);

            obj = new Div("div_05", "absolute", "11", "1735", "777", "29", null, null, this);
            obj.set_taborder("28");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("st_icon", "absolute", "709", "0", null, "29", "0", null, this.div_05);
            obj.set_taborder("5");
            obj.set_cssclass("D");
            obj.style.set_background("URL('theme://images/btn_WF_ShuttleD.png') right middle");
            obj.getSetter("state").set("open");
            obj.set_text("펼치기");
            this.div_05.addChild(obj.name, obj);
            obj = new Static("st_title", "absolute", "0", "0", null, "29", "-8", null, this.div_05);
            obj.getSetter("uname").set("additional01");
            obj.set_taborder("4");
            obj.set_text("부가서비스");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.getSetter("state").set("close");
            obj.style.set_padding("0 0 0 14");
            this.div_05.addChild(obj.name, obj);

            obj = new Div("div_06", "absolute", "11", "1783", "777", "340", null, null, this);
            obj.set_taborder("29");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            obj.style.set_background("transparent");
            this.addChild(obj.name, obj);
            obj = new Static("st_icon", "absolute", "709", "0", null, "29", "0", null, this.div_06);
            obj.set_taborder("30");
            obj.set_cssclass("D");
            obj.style.set_background("URL('theme://images/btn_WF_ShuttleD.png') right middle");
            obj.getSetter("state").set("open");
            obj.set_text("펼치기");
            this.div_06.addChild(obj.name, obj);
            obj = new Static("st_title", "absolute", "0", "0", null, "29", "-8", null, this.div_06);
            obj.getSetter("uname").set("additional02");
            obj.set_taborder("29");
            obj.set_text("정보분석 이용요금");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.getSetter("state").set("close");
            obj.style.set_background("URL('theme://images/btn_WF_ShuttleR_O.png') 2 50");
            obj.style.set_padding("0 10 0 30");
            this.div_06.addChild(obj.name, obj);
            obj = new Div("div", "absolute", "0", "28", "777", "311", null, null, this.div_06);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            obj.style.set_background("#f6f6f6ff");
            this.div_06.addChild(obj.name, obj);
            obj = new Static("TextArea01", "absolute", "0", "0", "777", "28", null, null, this.div_06.div);
            obj.set_taborder("2");
            obj.set_text("서비스 이용 신청을 통해 서비스를 이용할 수 있으며, 취급하지 않은 상품의 카테고리도 신청하여 서비스를 이용할 수 있습니다.");
            obj.set_wordwrap("char");
            obj.style.set_border("1 none #bfbfbfff");
            obj.style.set_padding("10 10 0 10");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.div_06.div.addChild(obj.name, obj);
            obj = new Static("st_37", "absolute", "10", "60", "160", "32", null, null, this.div_06.div);
            obj.set_taborder("3");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#f2f8faff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.div_06.div.addChild(obj.name, obj);
            obj = new Static("st_38", "absolute", "169", "60", "340", "32", null, null, this.div_06.div);
            obj.set_taborder("4");
            obj.set_text("상세내역");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#f2f8faff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.div_06.div.addChild(obj.name, obj);
            obj = new Static("st_40", "absolute", "507", "60", "260", "32", null, null, this.div_06.div);
            obj.set_taborder("5");
            obj.set_text("요금");
            obj.set_wordwrap("english");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#f2f8faff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.div_06.div.addChild(obj.name, obj);
            obj = new Static("st_44", "absolute", "507", "91", "260", "29", null, null, this.div_06.div);
            obj.set_taborder("6");
            obj.set_text("10,000원 / 월");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_06.div.addChild(obj.name, obj);
            obj = new Static("st_48", "absolute", "507", "119", "260", "29", null, null, this.div_06.div);
            obj.set_taborder("7");
            obj.set_text("10,000원 / 월");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_06.div.addChild(obj.name, obj);
            obj = new Static("st_52", "absolute", "507", "147", "260", "86", null, null, this.div_06.div);
            obj.set_taborder("8");
            obj.set_text("10,000원 / 월");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_06.div.addChild(obj.name, obj);
            obj = new Static("st_56", "absolute", "507", "231", "260", "56", null, null, this.div_06.div);
            obj.set_taborder("9");
            obj.set_text("20,000원 / 월\r\n(1개 소분류당)");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_06.div.addChild(obj.name, obj);
            obj = new Static("st_41", "absolute", "10", "91", "160", "29", null, null, this.div_06.div);
            obj.set_taborder("10");
            obj.set_text("BI조회");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_06.div.addChild(obj.name, obj);
            obj = new Static("st_45", "absolute", "10", "119", "160", "29", null, null, this.div_06.div);
            obj.set_taborder("11");
            obj.set_text("추이분석");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_06.div.addChild(obj.name, obj);
            obj = new Static("st_49", "absolute", "10", "147", "160", "86", null, null, this.div_06.div);
            obj.set_taborder("12");
            obj.set_text("자사 시장분석");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_06.div.addChild(obj.name, obj);
            obj = new Static("st_53", "absolute", "10", "231", "160", "56", null, null, this.div_06.div);
            obj.set_taborder("13");
            obj.set_text("카테고리 시장분석");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_06.div.addChild(obj.name, obj);
            obj = new Static("st_58", "absolute", "169", "203", "340", "29", null, null, this.div_06.div);
            obj.set_taborder("14");
            obj.set_text("사업장별 ABC 분석");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_06.div.addChild(obj.name, obj);
            obj = new Static("st_54", "absolute", "169", "175", "340", "29", null, null, this.div_06.div);
            obj.set_taborder("15");
            obj.set_text("주별 시장 점유율");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_06.div.addChild(obj.name, obj);
            obj = new Static("st_50", "absolute", "169", "147", "340", "29", null, null, this.div_06.div);
            obj.set_taborder("16");
            obj.set_text("월별 시장점유율");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_06.div.addChild(obj.name, obj);
            obj = new Static("st_46", "absolute", "169", "119", "340", "29", null, null, this.div_06.div);
            obj.set_taborder("17");
            obj.set_text("판매 / 재고추이");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_06.div.addChild(obj.name, obj);
            obj = new Static("st_42", "absolute", "169", "91", "340", "29", null, null, this.div_06.div);
            obj.set_taborder("18");
            obj.set_text("판매추이 / TOP 10");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_06.div.addChild(obj.name, obj);
            obj = new Static("st_00", "absolute", "169", "231", "340", "29", null, null, this.div_06.div);
            obj.set_taborder("19");
            obj.set_text("월별 카테고리 판매순위 / 시장분석");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_06.div.addChild(obj.name, obj);
            obj = new Static("st_01", "absolute", "169", "258", "340", "29", null, null, this.div_06.div);
            obj.set_taborder("20");
            obj.set_text("주별 카테고리 판매순위 / 시장분석");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_06.div.addChild(obj.name, obj);
            obj = new Static("TextArea03", "absolute", "0", "31", "777", "18", null, null, this.div_06.div);
            obj.set_taborder("21");
            obj.set_text("(VAT 별도)");
            obj.set_wordwrap("char");
            obj.style.set_border("1 none #bfbfbfff");
            obj.style.set_padding("0 10 0 0");
            obj.style.set_align("right middle");
            obj.getSetter("readonly").set("true");
            this.div_06.div.addChild(obj.name, obj);

            obj = new Div("div_07", "absolute", "11", "2159", "777", "244", null, null, this);
            obj.set_taborder("30");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("st_icon", "absolute", "709", "0", null, "29", "0", null, this.div_07);
            obj.set_taborder("50");
            obj.set_cssclass("D");
            obj.style.set_background("URL('theme://images/btn_WF_ShuttleD.png') right middle");
            obj.getSetter("state").set("open");
            obj.set_text("펼치기");
            this.div_07.addChild(obj.name, obj);
            obj = new Static("st_title", "absolute", "0", "0", null, "29", "-8", null, this.div_07);
            obj.getSetter("uname").set("additional03");
            obj.set_taborder("49");
            obj.set_text("판매상세정보 이용요금");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("URL('theme://images/btn_WF_ShuttleR_O.png') 2 50");
            obj.style.set_padding("0 10 0 30");
            obj.getSetter("state").set("close");
            this.div_07.addChild(obj.name, obj);
            obj = new Div("div", "absolute", "0", "28", "777", "215", null, null, this.div_07);
            obj.set_taborder("32");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            obj.style.set_background("#f6f6f6ff");
            this.div_07.addChild(obj.name, obj);
            obj = new Static("TextArea01", "absolute", "0", "0", "777", "90", null, null, this.div_07.div);
            obj.set_taborder("0");
            obj.set_text("[내정보] - \"자사판매정보 제공동의\"를 체크해야만 서비스를 이용할 수 있으며, 주별/월별 카테고리 판매정보에서 엑셀 다운로드시 서비스 이용료가 발생 합니다.\r\n최초자료 다운일로 부터 30일간은 동일 SKU에 대해 중복으로 청구되지 않으며, D+29일 이후 부터는 동일한 요금체계로 청구됩니다.\r\n(빌링 권한을 갖는 ID만 SKU 등록이 가능하며, 일반 ID는 조회 및 다운로드만 가능합니다.");
            obj.set_wordwrap("char");
            obj.style.set_border("1 none #bfbfbfff");
            obj.style.set_padding("10 10 0 10");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.div_07.div.addChild(obj.name, obj);
            obj = new Static("st_37", "absolute", "10", "111", "160", "32", null, null, this.div_07.div);
            obj.set_taborder("2");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#f2f8faff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.div_07.div.addChild(obj.name, obj);
            obj = new Static("st_53", "absolute", "10", "142", "160", "56", null, null, this.div_07.div);
            obj.set_taborder("6");
            obj.set_text("판매상세정보");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_07.div.addChild(obj.name, obj);
            obj = new Static("st_01", "absolute", "169", "169", "340", "29", null, null, this.div_07.div);
            obj.set_taborder("7");
            obj.set_text("월별 카테고리 판매정보");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_07.div.addChild(obj.name, obj);
            obj = new Static("st_00", "absolute", "169", "142", "340", "29", null, null, this.div_07.div);
            obj.set_taborder("8");
            obj.set_text("주별 카테고리 판매정보");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_07.div.addChild(obj.name, obj);
            obj = new Static("st_56", "absolute", "507", "142", "260", "56", null, null, this.div_07.div);
            obj.set_taborder("9");
            obj.set_text("월별 / 업체별 SKU건당 1,500원\r\n최대 500만원만 과금하는 상한 요금제 서비스)");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.div_07.div.addChild(obj.name, obj);
            obj = new Static("st_38", "absolute", "169", "111", "340", "32", null, null, this.div_07.div);
            obj.set_taborder("18");
            obj.set_text("상세내역");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#f2f8faff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.div_07.div.addChild(obj.name, obj);
            obj = new Static("st_40", "absolute", "507", "111", "260", "32", null, null, this.div_07.div);
            obj.set_taborder("19");
            obj.set_text("요금");
            obj.set_wordwrap("english");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#f2f8faff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.div_07.div.addChild(obj.name, obj);
            obj = new Static("TextArea03", "absolute", "0", "89", "777", "18", null, null, this.div_07.div);
            obj.set_taborder("20");
            obj.set_text("(VAT 별도)");
            obj.set_wordwrap("char");
            obj.style.set_border("1 none #bfbfbfff");
            obj.style.set_padding("0 10 0 0");
            obj.style.set_align("right middle");
            obj.getSetter("readonly").set("true");
            this.div_07.div.addChild(obj.name, obj);

            obj = new Div("div_08", "absolute", "11", "2439", "777", "349", null, null, this);
            obj.set_taborder("31");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("st_icon", "absolute", "709", "0", null, "29", "0", null, this.div_08);
            obj.set_taborder("52");
            obj.set_cssclass("D");
            obj.style.set_background("URL('theme://images/btn_WF_ShuttleD.png') right middle");
            obj.getSetter("state").set("open");
            obj.set_text("펼치기");
            this.div_08.addChild(obj.name, obj);
            obj = new Static("st_title", "absolute", "0", "0", null, "29", "-8", null, this.div_08);
            obj.getSetter("uname").set("additional04");
            obj.set_taborder("51");
            obj.set_text("데이터 마트");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("URL('theme://images/btn_WF_ShuttleR_O.png') 2 50");
            obj.style.set_padding("0 10 0 30");
            obj.getSetter("state").set("close");
            this.div_08.addChild(obj.name, obj);
            obj = new Div("div", "absolute", "0", "28", "777", "320", null, null, this.div_08);
            obj.set_taborder("50");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            obj.style.set_background("#f6f6f6ff");
            this.div_08.addChild(obj.name, obj);
            obj = new Static("TextArea01", "absolute", "0", "0", "777", null, null, "0", this.div_08.div);
            obj.set_taborder("20");
            obj.set_text("데이터 신청하고 진행 상태부터 서비스 이용료가 발생하며, 서비스 이용료는 EDI 서비스 요금으로 책정됩니다.\r\n최초 자료 다운일로부터 30일간은 동일 데이터에 대해 중복으로 청구되지 않으며, 31일 이후에는 데이터가 삭제됩니다.\r\n\r\n이용요금 예시\r\n18년 01월 ~ 06월까지의 검수업무_전표별 파일을 6월 30일에 요청\r\n7월 1일 데이터 다운로드 시 6개월 데이터량이 12,300KB 일 때,\r\n 1,000KB X 60원 =  60,000원 (1천 KB 이하 사용량)\r\n+2,000KB X 50원 = 100,000원 (1천KB 초과 ~ 3천 KB이하 사용량)\r\n+2,000KB X 40원 =  80,000원 (3천 KB 초과 ~ 5천 KB 이하 사용량)\r\n+5,000KB X 30원 = 150,000원 (5천 KB 초과 ~ 1만 KB 이하 사용량)\r\n+2,300KB X 20원 =  46,000원 (1만 KB 초과 ~ 5만 KB 이하 사용량)\r\n〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓〓\r\n                        436,000원 (VAT 별도) = 7월 31일까지 재수신 가능\r\n\r\n문서 최초 수신일 기준으로 D+30일까지 재수신 데이터에 대해 청구하지 않고, D+31일 이후 데이터 자동 삭제");
            obj.set_wordwrap("char");
            obj.style.set_border("1 none #bfbfbfff");
            obj.style.set_padding("10 10 20 10");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.div_08.div.addChild(obj.name, obj);

            obj = new Div("div_09", "absolute", "11", "2815", "777", "139", null, null, this);
            obj.set_taborder("32");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("st_icon", "absolute", "709", "0", null, "29", "0", null, this.div_09);
            obj.set_taborder("6");
            obj.set_cssclass("D");
            obj.style.set_background("URL('theme://images/btn_WF_ShuttleD.png') right middle");
            obj.getSetter("state").set("open");
            obj.set_text("펼치기");
            this.div_09.addChild(obj.name, obj);
            obj = new Static("st_title", "absolute", "0", "0", null, "29", "0", null, this.div_09);
            obj.set_taborder("5");
            obj.set_text("마감 간소화 서비스 이용요금");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.getSetter("state").set("close");
            obj.style.set_background("URL('theme://images/btn_WF_ShuttleR_O.png') 2 50");
            obj.style.set_padding("0 10 0 30");
            obj.getSetter("uname").set("additional05");
            this.div_09.addChild(obj.name, obj);
            obj = new Div("div", "absolute", "0", "28", "777", "110", null, null, this.div_09);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            obj.style.set_background("#f6f6f6ff");
            this.div_09.addChild(obj.name, obj);
            obj = new Static("TextArea01", "absolute", "0", "0", "777", null, null, "0", this.div_09.div);
            obj.set_taborder("0");
            obj.set_text("서비스 신청으로 이용할 수 있으며, 이용료는 조회 시 해당 월의 모든 납품확인서(검수 확정서 및 반품 확인서)에 대한 데이터량으로 EDI 서비스 요금이 책정됩니다.\r\n마감간소화에서 조회한 납품확인서 문서는 최초 1회만 EDI 요금이 청구되며, 이후 동일 문서를 마감간소화 서비스에서 재조회 시 EDI 요금이 청구되지 않습니다.");
            obj.set_wordwrap("char");
            obj.style.set_background("transparent");
            obj.style.set_border("1 none #bfbfbfff");
            obj.style.set_padding("10 10 20 10");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.div_09.div.addChild(obj.name, obj);

            obj = new Div("div_10", "absolute", "11", "2975", "777", "95", null, null, this);
            obj.set_taborder("33");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("st_icon", "absolute", "709", "0", null, "29", "0", null, this.div_10);
            obj.set_taborder("8");
            obj.set_cssclass("D");
            obj.style.set_background("URL('theme://images/btn_WF_ShuttleD.png') right middle");
            obj.getSetter("state").set("open");
            obj.set_text("펼치기");
            this.div_10.addChild(obj.name, obj);
            obj = new Static("st_title", "absolute", "0", "0", null, "29", "0", null, this.div_10);
            obj.set_taborder("7");
            obj.set_text("XML/EDI 이용요금");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("URL('theme://images/btn_WF_ShuttleR_O.png') 2 50");
            obj.style.set_padding("0 10 0 30");
            obj.getSetter("state").set("close");
            obj.getSetter("uname").set("additional06");
            this.div_10.addChild(obj.name, obj);
            obj = new Div("div", "absolute", "0", "28", "777", "67", null, null, this.div_10);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            obj.style.set_background("#f6f6f6ff");
            this.div_10.addChild(obj.name, obj);
            obj = new Static("TextArea01", "absolute", "0", "0", "777", null, null, "0", this.div_10.div);
            obj.set_taborder("0");
            obj.set_text("하나로eSCM과 자사 시스템과의 직접 연계를 통해 주문, 납품, 매출 등의 데이터를 송수신 할 수 있는 서비스 입니다.\r\n월 이용료 : 20만원(VAT별도, 하나로eSCM 이용료와 합산청구)");
            obj.set_wordwrap("char");
            obj.style.set_border("1 none #bfbfbfff");
            obj.style.set_padding("10 10 20 10");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.div_10.div.addChild(obj.name, obj);

            obj = new Div("div_11", "absolute", "11", "3127", "777", "95", null, null, this);
            obj.set_taborder("34");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("st_icon", "absolute", "709", "0", null, "29", "0", null, this.div_11);
            obj.set_taborder("10");
            obj.set_cssclass("D");
            obj.style.set_background("URL('theme://images/btn_WF_ShuttleD.png') right middle");
            obj.getSetter("state").set("open");
            obj.set_text("펼치기");
            this.div_11.addChild(obj.name, obj);
            obj = new Static("st_title", "absolute", "0", "0", null, "29", "0", null, this.div_11);
            obj.set_taborder("9");
            obj.set_text("기타 이용요금 (SMS)");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("URL('theme://images/btn_WF_ShuttleR_O.png') 2 50");
            obj.style.set_padding("0 10 0 30");
            obj.getSetter("state").set("close");
            obj.getSetter("uname").set("additional07");
            this.div_11.addChild(obj.name, obj);
            obj = new Div("div", "absolute", "0", "28", "777", "67", null, null, this.div_11);
            obj.set_taborder("8");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            obj.style.set_background("#f6f6f6ff");
            this.div_11.addChild(obj.name, obj);
            obj = new Static("TextArea01", "absolute", "0", "0", "777", null, null, "0", this.div_11.div);
            obj.set_taborder("0");
            obj.set_text("SMS 수신 서비스 신청을 통해 서비스를 이용할 수 있으며, SMS 수신 건당 20원이 부과됩니다. (VAT별도)\r\n청구 대상 : 매출세금계산서(역발행) 관련 알림 메시지");
            obj.set_wordwrap("char");
            obj.style.set_border("1 none #bfbfbfff");
            obj.style.set_padding("10 10 20 10");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.div_11.div.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 777, 67, this.div_01.div,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.set_text("Div00");
            		p.set_scrollbars("none");
            		p.style.set_background("#f6f6f6ff");
            		p.style.set_border("1 none #bfbfbfff");

            	}
            );
            this.div_01.div.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 777, 95, this.div_01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("13");
            		p.set_text("Div00");
            		p.set_scrollbars("none");
            		p.style.set_background("transparent");

            	}
            );
            this.div_01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 777, 90, this.div_02.div,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_text("Div00");
            		p.set_scrollbars("none");
            		p.style.set_background("#f6f6f6ff");
            		p.style.set_padding("10 10 10 10");

            	}
            );
            this.div_02.div.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 777, 119, this.div_02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("25");
            		p.set_text("Div00");
            		p.set_scrollbars("none");

            	}
            );
            this.div_02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 777, 540, this.div_03.div,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_text("Div00");
            		p.set_scrollbars("none");
            		p.style.set_background("#f6f6f6ff");

            	}
            );
            this.div_03.div.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 777, 569, this.div_03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("26");
            		p.set_text("Div00");
            		p.set_scrollbars("none");

            	}
            );
            this.div_03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 777, 821, this.div_04.div,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.set_text("Div00");
            		p.set_scrollbars("none");
            		p.style.set_background("#f6f6f6ff");

            	}
            );
            this.div_04.div.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 777, 850, this.div_04,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("27");
            		p.set_text("Div00");
            		p.set_scrollbars("none");

            	}
            );
            this.div_04.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 777, 29, this.div_05,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("28");
            		p.set_text("Div00");
            		p.set_scrollbars("none");

            	}
            );
            this.div_05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 777, 311, this.div_06.div,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_text("Div00");
            		p.set_scrollbars("none");
            		p.style.set_background("#f6f6f6ff");

            	}
            );
            this.div_06.div.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 777, 340, this.div_06,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("29");
            		p.set_text("Div00");
            		p.set_scrollbars("none");
            		p.style.set_background("transparent");

            	}
            );
            this.div_06.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 777, 215, this.div_07.div,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("32");
            		p.set_text("Div00");
            		p.set_scrollbars("none");
            		p.style.set_background("#f6f6f6ff");

            	}
            );
            this.div_07.div.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 777, 244, this.div_07,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("30");
            		p.set_text("Div00");
            		p.set_scrollbars("none");

            	}
            );
            this.div_07.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 777, 320, this.div_08.div,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("50");
            		p.set_text("Div00");
            		p.set_scrollbars("none");
            		p.style.set_background("#f6f6f6ff");

            	}
            );
            this.div_08.div.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 777, 349, this.div_08,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("31");
            		p.set_text("Div00");
            		p.set_scrollbars("none");

            	}
            );
            this.div_08.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 777, 110, this.div_09.div,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_text("Div00");
            		p.set_scrollbars("none");
            		p.style.set_background("#f6f6f6ff");

            	}
            );
            this.div_09.div.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 777, 139, this.div_09,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("32");
            		p.set_text("Div00");
            		p.set_scrollbars("none");

            	}
            );
            this.div_09.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 777, 67, this.div_10.div,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.set_text("Div00");
            		p.set_scrollbars("none");
            		p.style.set_background("#f6f6f6ff");

            	}
            );
            this.div_10.div.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 777, 95, this.div_10,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("33");
            		p.set_text("Div00");
            		p.set_scrollbars("none");

            	}
            );
            this.div_10.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 777, 67, this.div_11.div,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("8");
            		p.set_text("Div00");
            		p.set_scrollbars("none");
            		p.style.set_background("#f6f6f6ff");

            	}
            );
            this.div_11.div.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 777, 95, this.div_11,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("34");
            		p.set_text("Div00");
            		p.set_scrollbars("none");

            	}
            );
            this.div_11.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("서비스이용료안내");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_4630.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_4630.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        	
        }
        this.fn_afterFormOnload = function()
        {
        	//static FAQ
        	var num;
        	var txtSt;
        	var preNum;
        	var preObj;
        	for(com in this.components)
        	{
        		if(this.lookup(com) instanceof Div)
        		{
        			num = String(com).substr(4,2);
        			if(nexacro.toNumber(num) > 3)
        			{
        				if(String(this.lookup(com).st_title.uname).substr(0,10) == "additional"){
        					if(nexacro.toNumber(String(this.lookup(com).st_title.uname).substr(10,2)) > 1){
        						this.lookup(com).set_height(0);
        					}
        				}else{
        					this.lookup(com).set_height(this.lookup(com).st_title.height);
        				}	
        			}
        			if(num != "01")
        			{
        				preNum = nexacro.toNumber(num) - 1;
        				preObj = "div_" + String(preNum).padLeft(2, "0");
        				this.lookup(com).set_top(nexacro.toNumber(this.lookup(preObj).top) + nexacro.toNumber(this.lookup(preObj).height)-1);
        			}
        		}
        	}
        	this.resetScroll();
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/

        
         

        

        this.Grid03_ontreestatuschanged = function(obj,e)
        {
        	
        	obj.set_height(obj.getRealRowFullSize());
        }

        this.Button_onclick = function(obj,e)
        {
        	var num;
        	var txtSt;
        	var preNum;
        	var preObj;
        	
        	
        	//DIV높이 변경
        	if(obj.state == 'close')
        	{
        		obj.state = 'open';
        		obj.parent.st_icon.set_text('접기');
        		obj.parent.st_icon.style.set_background_image("URL('theme://images/btn_WF_ShuttleU.png')");
        		obj.parent.set_height(nexacro.toNumber(obj.height) + nexacro.toNumber(obj.parent.div.height) - 1);
        	}
        	else
        	{
        		obj.state = 'close';
        		obj.parent.st_icon.set_text('펼치기');
        		obj.parent.st_icon.style.set_background_image("URL('theme://images/btn_WF_ShuttleD.png')");
        		obj.parent.set_height(nexacro.toNumber(obj.height));
        	}
        	
        	//DIV 위치(TOP)변경
        	for(com in this.components)
        	{
        		if(this.lookup(com) instanceof Div)
        		{
        			num = String(com).substr(4,2);
        			if(num != "01")
        			{
        				preNum = nexacro.toNumber(num) - 1;
        				preObj = "div_" + String(preNum).padLeft(2, "0");
        				this.lookup(com).set_top(nexacro.toNumber(this.lookup(preObj).top) + nexacro.toNumber(this.lookup(preObj).height)-1);
        			}
        		}
        	}
        	
        	this.resetScroll();
        }

        this.Button_additional_onclick = function(obj,e)
        {
        	var num;
        	var txtSt;
        	var preNum;
        	var preObj;
        	
        	
        	//DIV높이 변경
        	if(obj.state == 'close')
        	{
        		obj.state = 'open';
        		obj.parent.st_icon.set_text('접기');
        		obj.parent.st_icon.style.set_background_image("URL('theme://images/btn_WF_ShuttleU.png')");
        		for(com in this.components)
        		{
        			if(this.lookup(com) instanceof Div)
        			{
        				num = String(com).substr(4,2);
        				if(String(this.lookup(com).st_title.uname).substr(0,10) == "additional"){
        					if(nexacro.toNumber(String(this.lookup(com).st_title.uname).substr(10,2)) > 1){
        						this.lookup(com).set_height(this.lookup(com).st_title.height);
        						if(this.lookup(com).st_icon.cssclass == "U"){
        							this.lookup(com).st_icon.set_cssclass("D");
        							this.lookup(com).st_icon.set_text('펼치기');
        							this.lookup(com).st_icon.style.set_background_image("URL('theme://images/btn_WF_ShuttleD.png')");							
        						}
        					}
        				}	
        				
        			}
        		}
        	}
        	else
        	{
        		obj.state = 'close';
        		obj.parent.st_icon.set_text('펼치기');
        		obj.parent.st_icon.style.set_background_image("URL('theme://images/btn_WF_ShuttleD.png')");
        		for(com in this.components)
        		{
        			if(this.lookup(com) instanceof Div)
        			{
        				num = String(com).substr(4,2);
        				if(String(this.lookup(com).st_title.uname).substr(0,10) == "additional"){
        					if(nexacro.toNumber(String(this.lookup(com).st_title.uname).substr(10,2)) > 1){
        						this.lookup(com).set_height(0);
        						this.lookup(com).st_title.state = 'close';
        						if(this.lookup(com).st_icon.cssclass == "D"){
        							this.lookup(com).st_icon.set_cssclass("U");
        							this.lookup(com).st_icon.set_text('접기');
        							this.lookup(com).st_icon.style.set_background_image("URL('theme://images/btn_WF_ShuttleU.png')");							
        						}
        					}
        				}
        			}
        		}
        	}
        	
        	//DIV 위치(TOP)변경
        	for(com in this.components)
        	{
        		if(this.lookup(com) instanceof Div)
        		{
        			num = String(com).substr(4,2);
        			if(num != "01")
        			{
        				preNum = nexacro.toNumber(num) - 1;
        				preObj = "div_" + String(preNum).padLeft(2, "0");
        				this.lookup(com).set_top(nexacro.toNumber(this.lookup(preObj).top) + nexacro.toNumber(this.lookup(preObj).height)-1);
        			}
        		}
        	}
        	
        	this.resetScroll();
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_01.st_title.addEventHandler("onclick", this.Button_onclick, this);
            this.div_02.st_title.addEventHandler("onclick", this.Button_onclick, this);
            this.div_03.st_title.addEventHandler("onclick", this.Button_onclick, this);
            this.div_04.st_title.addEventHandler("onclick", this.Button_onclick, this);
            this.div_05.st_title.addEventHandler("onclick", this.Button_additional_onclick, this);
            this.div_06.st_title.addEventHandler("onclick", this.Button_onclick, this);
            this.div_07.st_title.addEventHandler("onclick", this.Button_onclick, this);
            this.div_08.st_title.addEventHandler("onclick", this.Button_onclick, this);
            this.div_09.st_title.addEventHandler("onclick", this.Button_onclick, this);
            this.div_10.st_title.addEventHandler("onclick", this.Button_onclick, this);
            this.div_11.st_title.addEventHandler("onclick", this.Button_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_4630.xfdl");

       
    };
}
)();
