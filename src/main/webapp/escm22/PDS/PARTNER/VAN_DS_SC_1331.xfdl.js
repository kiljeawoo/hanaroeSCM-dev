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
                this.set_name("VAN_DS_SC_1331");
                this.set_titletext("거래관계 상세조회");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("74");
            obj.set_text("거래관계상세조회");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "14", "49", null, "384", "14", null, this);
            obj.set_taborder("322");
            this.addChild(obj.name, obj);
            obj = new Static("Static83", "absolute", "109", "305", "660", "29", null, null, this.div_list);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static58", "absolute", "109", "277", "660", "29", null, null, this.div_list);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "109", "67", "660", "29", null, null, this.div_list);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static57", "absolute", "109", "249", "660", "29", null, null, this.div_list);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static53", "absolute", "109", "193", "660", "29", null, null, this.div_list);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static40", "absolute", "109", "123", "660", "29", null, null, this.div_list);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static38", "absolute", "109", "95", "660", "29", null, null, this.div_list);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static51", "absolute", "0", "14", "135", "21", null, null, this.div_list);
            obj.set_taborder("7");
            obj.set_text("수요거래처");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "0", "39", "110", "29", null, null, this.div_list);
            obj.set_taborder("8");
            obj.set_text("거래처");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "370", "67", "95", "29", null, null, this.div_list);
            obj.set_taborder("9");
            obj.set_text("팀");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "109", "39", "660", "29", null, null, this.div_list);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "569", "95", "95", "29", null, null, this.div_list);
            obj.set_taborder("11");
            obj.set_text("휴대폰번호");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static24", "absolute", "0", "193", "110", "29", null, null, this.div_list);
            obj.set_taborder("12");
            obj.set_text("거래처");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static45", "absolute", "0", "221", "110", "29", null, null, this.div_list);
            obj.set_taborder("13");
            obj.set_text("본사");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static46", "absolute", "370", "249", "95", "29", null, null, this.div_list);
            obj.set_taborder("14");
            obj.set_text("팀");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static54", "absolute", "109", "221", "660", "29", null, null, this.div_list);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static55", "absolute", "569", "277", "95", "29", null, null, this.div_list);
            obj.set_taborder("16");
            obj.set_text("휴대폰번호");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static59", "absolute", "370", "39", "95", "29", null, null, this.div_list);
            obj.set_taborder("17");
            obj.set_text("팀");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static61", "absolute", "0", "123", "110", "29", null, null, this.div_list);
            obj.set_taborder("18");
            obj.set_text("주관사업장");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static62", "absolute", "370", "193", "95", "29", null, null, this.div_list);
            obj.set_taborder("19");
            obj.set_text("팀");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static65", "absolute", "0", "305", "110", "29", null, null, this.div_list);
            obj.set_taborder("20");
            obj.set_text("은행");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static67", "absolute", "569", "39", "95", "29", null, null, this.div_list);
            obj.set_taborder("21");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static68", "absolute", "0", "95", "110", "29", null, null, this.div_list);
            obj.set_taborder("22");
            obj.set_text("계약담당자");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static69", "absolute", "370", "123", "95", "29", null, null, this.div_list);
            obj.set_taborder("23");
            obj.set_text("주관사업장팀");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static70", "absolute", "569", "193", "95", "29", null, null, this.div_list);
            obj.set_taborder("24");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static72", "absolute", "0", "277", "110", "29", null, null, this.div_list);
            obj.set_taborder("25");
            obj.set_text("계약담당자");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static73", "absolute", "370", "305", "95", "29", null, null, this.div_list);
            obj.set_taborder("26");
            obj.set_text("결재계좌");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static75", "absolute", "0", "67", "110", "29", null, null, this.div_list);
            obj.set_taborder("27");
            obj.set_text("정산처");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static76", "absolute", "370", "95", "95", "29", null, null, this.div_list);
            obj.set_taborder("28");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static77", "absolute", "569", "123", "95", "29", null, null, this.div_list);
            obj.set_taborder("29");
            obj.set_text("주관거래유형");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static79", "absolute", "0", "249", "110", "29", null, null, this.div_list);
            obj.set_taborder("30");
            obj.set_text("정산처");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static80", "absolute", "370", "277", "95", "29", null, null, this.div_list);
            obj.set_taborder("31");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static81", "absolute", "569", "305", "95", "29", null, null, this.div_list);
            obj.set_taborder("32");
            obj.set_text("예금주");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("edt_CSER_NA_TRPL_C", "absolute", "113", "43", "110", "21", null, null, this.div_list);
            obj.set_taborder("34");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit13", "absolute", "667", "99", "98", "21", null, null, this.div_list);
            obj.set_taborder("35");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit18", "absolute", "113", "99", "110", "21", null, null, this.div_list);
            obj.set_taborder("36");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "-1122", "135", "21", null, null, this.div_list);
            obj.set_taborder("37");
            obj.set_text("수요거래처");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "168", "135", "21", null, null, this.div_list);
            obj.set_taborder("38");
            obj.set_text("공급거래처");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "109", "487", "660", "29", null, null, this.div_list);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "109", "459", "660", "29", null, null, this.div_list);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "109", "431", "660", "29", null, null, this.div_list);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "109", "375", "660", "29", null, null, this.div_list);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0", "375", "110", "29", null, null, this.div_list);
            obj.set_taborder("43");
            obj.set_text("공급유형");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "0", "403", "110", "29", null, null, this.div_list);
            obj.set_taborder("44");
            obj.set_text("계약종료일자");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "256", "431", "110", "29", null, null, this.div_list);
            obj.set_taborder("45");
            obj.set_text("거래중지사유");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "109", "403", "660", "29", null, null, this.div_list);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static19", "absolute", "512", "459", "110", "29", null, null, this.div_list);
            obj.set_taborder("47");
            obj.set_text("상품중분류");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "256", "375", "110", "29", null, null, this.div_list);
            obj.set_taborder("48");
            obj.set_text("계약유형");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "256", "403", "110", "29", null, null, this.div_list);
            obj.set_taborder("49");
            obj.set_text("계약중지일자");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "512", "431", "110", "29", null, null, this.div_list);
            obj.set_taborder("50");
            obj.set_text("가격군");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static23", "absolute", "0", "487", "110", "29", null, null, this.div_list);
            obj.set_taborder("51");
            obj.set_text("리드타임일수");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static25", "absolute", "512", "375", "110", "29", null, null, this.div_list);
            obj.set_taborder("52");
            obj.set_text("계약시작일자");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static26", "absolute", "512", "403", "110", "29", null, null, this.div_list);
            obj.set_taborder("53");
            obj.set_text("계약해지일자");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static27", "absolute", "0", "459", "110", "29", null, null, this.div_list);
            obj.set_taborder("54");
            obj.set_text("탄력가격적용");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static28", "absolute", "256", "487", "110", "29", null, null, this.div_list);
            obj.set_taborder("55");
            obj.set_text("반품관리구분");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static29", "absolute", "0", "431", "110", "29", null, null, this.div_list);
            obj.set_taborder("56");
            obj.set_text("계약해지사유");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static30", "absolute", "256", "459", "110", "29", null, null, this.div_list);
            obj.set_taborder("57");
            obj.set_text("상품대분류");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static31", "absolute", "512", "487", "110", "29", null, null, this.div_list);
            obj.set_taborder("58");
            obj.set_text("임의일수");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit44", "absolute", "113", "407", "140", "21", null, null, this.div_list);
            obj.set_taborder("59");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static32", "absolute", "0", "350", "135", "21", null, null, this.div_list);
            obj.set_taborder("60");
            obj.set_text("상세내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static33", "absolute", "109", "627", "660", "29", null, null, this.div_list);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static34", "absolute", "109", "599", "660", "29", null, null, this.div_list);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static35", "absolute", "109", "571", "660", "29", null, null, this.div_list);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static36", "absolute", "109", "515", "660", "29", null, null, this.div_list);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static37", "absolute", "0", "515", "110", "29", null, null, this.div_list);
            obj.set_taborder("65");
            obj.set_text("결제기일구분");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static39", "absolute", "0", "543", "110", "29", null, null, this.div_list);
            obj.set_taborder("66");
            obj.set_text("결제기일유형");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static41", "absolute", "256", "571", "110", "29", null, null, this.div_list);
            obj.set_taborder("67");
            obj.set_text("발주처인수도");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static42", "absolute", "109", "543", "660", "29", null, null, this.div_list);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static43", "absolute", "512", "599", "110", "29", null, null, this.div_list);
            obj.set_taborder("69");
            obj.set_text("수주바이어");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static44", "absolute", "256", "515", "110", "29", null, null, this.div_list);
            obj.set_taborder("70");
            obj.set_text("사업방식");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static47", "absolute", "256", "543", "110", "29", null, null, this.div_list);
            obj.set_taborder("71");
            obj.set_text("발주금지사유");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static48", "absolute", "512", "571", "110", "29", null, null, this.div_list);
            obj.set_taborder("72");
            obj.set_text("발주처파렛트");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static49", "absolute", "0", "627", "110", "29", null, null, this.div_list);
            obj.set_taborder("73");
            obj.set_text("장려금률기준");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static50", "absolute", "512", "515", "110", "29", null, null, this.div_list);
            obj.set_taborder("74");
            obj.set_text("약정과목구분");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static52", "absolute", "512", "543", "110", "29", null, null, this.div_list);
            obj.set_taborder("75");
            obj.set_text("발주금지일자");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static56", "absolute", "0", "599", "110", "29", null, null, this.div_list);
            obj.set_taborder("76");
            obj.set_text("수주금지사유");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static66", "absolute", "256", "627", "110", "29", null, null, this.div_list);
            obj.set_taborder("77");
            obj.set_text("장려금율");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static74", "absolute", "0", "571", "110", "29", null, null, this.div_list);
            obj.set_taborder("78");
            obj.set_text("발주바이어");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static78", "absolute", "256", "599", "110", "29", null, null, this.div_list);
            obj.set_taborder("79");
            obj.set_text("수주금지일자");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static82", "absolute", "512", "627", "110", "29", null, null, this.div_list);
            obj.set_taborder("80");
            obj.set_text("장려금기준");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static84", "absolute", "109", "711", "660", "29", null, null, this.div_list);
            obj.set_taborder("81");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static85", "absolute", "109", "683", "660", "29", null, null, this.div_list);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static86", "absolute", "109", "655", "660", "29", null, null, this.div_list);
            obj.set_taborder("83");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static87", "absolute", "256", "655", "110", "29", null, null, this.div_list);
            obj.set_taborder("84");
            obj.set_text("직송장려금률");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static88", "absolute", "512", "683", "110", "29", null, null, this.div_list);
            obj.set_taborder("85");
            obj.set_text("지연금리1");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static89", "absolute", "512", "655", "110", "29", null, null, this.div_list);
            obj.set_taborder("86");
            obj.set_text("지급시점");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static90", "absolute", "0", "711", "110", "29", null, null, this.div_list);
            obj.set_taborder("87");
            obj.set_text("지연금리2");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static91", "absolute", "0", "683", "110", "29", null, null, this.div_list);
            obj.set_taborder("88");
            obj.set_text("지체상금면제");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static92", "absolute", "256", "711", "110", "29", null, null, this.div_list);
            obj.set_taborder("89");
            obj.set_text("지연금리3");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static93", "absolute", "0", "655", "110", "29", null, null, this.div_list);
            obj.set_taborder("90");
            obj.set_text("매입단가수정");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static94", "absolute", "256", "683", "110", "29", null, null, this.div_list);
            obj.set_taborder("91");
            obj.set_text("지체금리");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static95", "absolute", "512", "711", "110", "29", null, null, this.div_list);
            obj.set_taborder("92");
            obj.set_text("지연금리4");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("edt_SPY_TPC", "absolute", "113", "379", "45", "21", null, null, this.div_list);
            obj.set_taborder("93");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit39", "absolute", "161", "379", "92", "21", null, null, this.div_list);
            obj.set_taborder("94");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit02", "absolute", "700", "43", "65", "21", null, null, this.div_list);
            obj.set_taborder("95");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit05", "absolute", "667", "43", "30", "21", null, null, this.div_list);
            obj.set_taborder("96");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("edt_CSER_NA_TEAM_C", "absolute", "468", "43", "30", "21", null, null, this.div_list);
            obj.set_taborder("97");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit10", "absolute", "501", "43", "65", "21", null, null, this.div_list);
            obj.set_taborder("98");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "226", "43", "141", "21", null, null, this.div_list);
            obj.set_taborder("99");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit03", "absolute", "667", "127", "30", "21", null, null, this.div_list);
            obj.set_taborder("100");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit04", "absolute", "700", "127", "65", "21", null, null, this.div_list);
            obj.set_taborder("101");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit06", "absolute", "468", "71", "30", "21", null, null, this.div_list);
            obj.set_taborder("102");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit07", "absolute", "501", "71", "65", "21", null, null, this.div_list);
            obj.set_taborder("103");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit08", "absolute", "468", "99", "98", "21", null, null, this.div_list);
            obj.set_taborder("104");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit11", "absolute", "468", "127", "30", "21", null, null, this.div_list);
            obj.set_taborder("105");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit12", "absolute", "501", "127", "65", "21", null, null, this.div_list);
            obj.set_taborder("106");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit14", "absolute", "113", "71", "110", "21", null, null, this.div_list);
            obj.set_taborder("107");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit15", "absolute", "226", "71", "141", "21", null, null, this.div_list);
            obj.set_taborder("108");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit16", "absolute", "113", "127", "110", "21", null, null, this.div_list);
            obj.set_taborder("109");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit17", "absolute", "226", "127", "141", "21", null, null, this.div_list);
            obj.set_taborder("110");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("edt_SPLR_NA_TRPL_C", "absolute", "113", "197", "110", "21", null, null, this.div_list);
            obj.set_taborder("111");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit20", "absolute", "113", "281", "110", "21", null, null, this.div_list);
            obj.set_taborder("112");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit21", "absolute", "226", "197", "141", "21", null, null, this.div_list);
            obj.set_taborder("113");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit22", "absolute", "113", "225", "110", "21", null, null, this.div_list);
            obj.set_taborder("114");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit23", "absolute", "226", "225", "141", "21", null, null, this.div_list);
            obj.set_taborder("115");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit24", "absolute", "113", "253", "110", "21", null, null, this.div_list);
            obj.set_taborder("116");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit25", "absolute", "226", "253", "141", "21", null, null, this.div_list);
            obj.set_taborder("117");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit26", "absolute", "113", "309", "110", "21", null, null, this.div_list);
            obj.set_taborder("118");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit27", "absolute", "226", "309", "141", "21", null, null, this.div_list);
            obj.set_taborder("119");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("edt_SPLR_NA_TEAM_C", "absolute", "468", "197", "30", "21", null, null, this.div_list);
            obj.set_taborder("120");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit29", "absolute", "501", "197", "65", "21", null, null, this.div_list);
            obj.set_taborder("121");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit30", "absolute", "667", "197", "30", "21", null, null, this.div_list);
            obj.set_taborder("122");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit31", "absolute", "700", "197", "65", "21", null, null, this.div_list);
            obj.set_taborder("123");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit32", "absolute", "468", "253", "30", "21", null, null, this.div_list);
            obj.set_taborder("124");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit33", "absolute", "501", "253", "65", "21", null, null, this.div_list);
            obj.set_taborder("125");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit34", "absolute", "468", "281", "98", "21", null, null, this.div_list);
            obj.set_taborder("126");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit35", "absolute", "468", "309", "98", "21", null, null, this.div_list);
            obj.set_taborder("127");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit36", "absolute", "667", "281", "98", "21", null, null, this.div_list);
            obj.set_taborder("128");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit37", "absolute", "667", "309", "98", "21", null, null, this.div_list);
            obj.set_taborder("129");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit40", "absolute", "161", "435", "92", "21", null, null, this.div_list);
            obj.set_taborder("130");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit41", "absolute", "113", "435", "45", "21", null, null, this.div_list);
            obj.set_taborder("131");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit42", "absolute", "113", "463", "140", "21", null, null, this.div_list);
            obj.set_taborder("132");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit45", "absolute", "417", "379", "92", "21", null, null, this.div_list);
            obj.set_taborder("133");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("edt_CSER_CTR_TPC", "absolute", "369", "379", "45", "21", null, null, this.div_list);
            obj.set_taborder("134");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit48", "absolute", "625", "379", "140", "21", null, null, this.div_list);
            obj.set_taborder("135");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit49", "absolute", "369", "407", "140", "21", null, null, this.div_list);
            obj.set_taborder("136");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit50", "absolute", "625", "407", "140", "21", null, null, this.div_list);
            obj.set_taborder("137");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit51", "absolute", "417", "435", "92", "21", null, null, this.div_list);
            obj.set_taborder("138");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit52", "absolute", "369", "435", "45", "21", null, null, this.div_list);
            obj.set_taborder("139");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit53", "absolute", "673", "435", "92", "21", null, null, this.div_list);
            obj.set_taborder("140");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit54", "absolute", "625", "435", "45", "21", null, null, this.div_list);
            obj.set_taborder("141");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit55", "absolute", "369", "463", "45", "21", null, null, this.div_list);
            obj.set_taborder("142");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit58", "absolute", "417", "463", "92", "21", null, null, this.div_list);
            obj.set_taborder("143");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit59", "absolute", "625", "463", "45", "21", null, null, this.div_list);
            obj.set_taborder("144");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit60", "absolute", "673", "463", "92", "21", null, null, this.div_list);
            obj.set_taborder("145");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit43", "absolute", "113", "491", "140", "21", null, null, this.div_list);
            obj.set_taborder("146");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit46", "absolute", "625", "491", "140", "21", null, null, this.div_list);
            obj.set_taborder("147");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit56", "absolute", "625", "547", "140", "21", null, null, this.div_list);
            obj.set_taborder("148");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit57", "absolute", "369", "491", "45", "21", null, null, this.div_list);
            obj.set_taborder("149");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit61", "absolute", "417", "491", "92", "21", null, null, this.div_list);
            obj.set_taborder("150");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit62", "absolute", "113", "519", "45", "21", null, null, this.div_list);
            obj.set_taborder("151");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit63", "absolute", "161", "519", "92", "21", null, null, this.div_list);
            obj.set_taborder("152");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit64", "absolute", "369", "519", "45", "21", null, null, this.div_list);
            obj.set_taborder("153");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit65", "absolute", "417", "519", "92", "21", null, null, this.div_list);
            obj.set_taborder("154");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit66", "absolute", "625", "519", "45", "21", null, null, this.div_list);
            obj.set_taborder("155");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit67", "absolute", "673", "519", "92", "21", null, null, this.div_list);
            obj.set_taborder("156");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit68", "absolute", "113", "547", "45", "21", null, null, this.div_list);
            obj.set_taborder("157");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit69", "absolute", "161", "547", "92", "21", null, null, this.div_list);
            obj.set_taborder("158");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit70", "absolute", "369", "547", "45", "21", null, null, this.div_list);
            obj.set_taborder("159");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit71", "absolute", "417", "547", "92", "21", null, null, this.div_list);
            obj.set_taborder("160");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit72", "absolute", "369", "575", "45", "21", null, null, this.div_list);
            obj.set_taborder("161");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit73", "absolute", "417", "575", "92", "21", null, null, this.div_list);
            obj.set_taborder("162");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit74", "absolute", "113", "575", "140", "21", null, null, this.div_list);
            obj.set_taborder("163");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit75", "absolute", "625", "575", "140", "21", null, null, this.div_list);
            obj.set_taborder("164");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit76", "absolute", "113", "603", "45", "21", null, null, this.div_list);
            obj.set_taborder("165");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit77", "absolute", "161", "603", "92", "21", null, null, this.div_list);
            obj.set_taborder("166");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit78", "absolute", "369", "603", "140", "21", null, null, this.div_list);
            obj.set_taborder("167");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit79", "absolute", "625", "603", "140", "21", null, null, this.div_list);
            obj.set_taborder("168");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit80", "absolute", "113", "631", "45", "21", null, null, this.div_list);
            obj.set_taborder("169");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit81", "absolute", "161", "631", "92", "21", null, null, this.div_list);
            obj.set_taborder("170");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit82", "absolute", "369", "631", "140", "21", null, null, this.div_list);
            obj.set_taborder("171");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit83", "absolute", "625", "631", "140", "21", null, null, this.div_list);
            obj.set_taborder("172");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit84", "absolute", "113", "659", "140", "21", null, null, this.div_list);
            obj.set_taborder("173");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit85", "absolute", "369", "659", "140", "21", null, null, this.div_list);
            obj.set_taborder("174");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit86", "absolute", "625", "659", "45", "21", null, null, this.div_list);
            obj.set_taborder("175");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit87", "absolute", "673", "659", "92", "21", null, null, this.div_list);
            obj.set_taborder("176");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit88", "absolute", "113", "687", "140", "21", null, null, this.div_list);
            obj.set_taborder("177");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit89", "absolute", "369", "687", "140", "21", null, null, this.div_list);
            obj.set_taborder("178");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit90", "absolute", "625", "687", "140", "21", null, null, this.div_list);
            obj.set_taborder("179");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit91", "absolute", "625", "715", "140", "21", null, null, this.div_list);
            obj.set_taborder("180");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit92", "absolute", "369", "715", "140", "21", null, null, this.div_list);
            obj.set_taborder("181");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit93", "absolute", "113", "715", "140", "21", null, null, this.div_list);
            obj.set_taborder("182");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static60", "absolute", "109", "739", "660", "29", null, null, this.div_list);
            obj.set_taborder("183");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static63", "absolute", "0", "739", "110", "29", null, null, this.div_list);
            obj.set_taborder("184");
            obj.set_text("최초등록일시");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static64", "absolute", "256", "739", "110", "29", null, null, this.div_list);
            obj.set_taborder("185");
            obj.set_text("최종변경일시");
            obj.set_cssclass("sta_WF_Label");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit95", "absolute", "113", "743", "140", "21", null, null, this.div_list);
            obj.set_taborder("186");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("Edit96", "absolute", "369", "743", "140", "21", null, null, this.div_list);
            obj.set_taborder("187");
            obj.set_readonly("true");
            this.div_list.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "0", "37", "32", "4", null, this);
            obj.set_taborder("323");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "10", "32", "91", "15", null, null, this);
            obj.set_taborder("324");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "699", "434", "91", "10", null, null, this);
            obj.set_taborder("325");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("Button65", "absolute", "679", "444", "54", "29", null, null, this);
            obj.set_taborder("326");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", null, "444", "54", "29", "14", null, this);
            obj.set_taborder("327");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "699", null, "91", "17", null, "0", this);
            obj.set_taborder("328");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 384, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("322");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1331");
            		p.set_titletext("거래관계 상세조회");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1331.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1331.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e) 
        {
        	this.gfn_setInitForm(obj, e); //공통
        };

        this.fn_afterFormOnload = function() //onload
        {
        	var dsmaster = this.parent.dsArg;
        	this.initdata(dsmaster);
        	var searchParam =
        	{
        				form: this,							//고정
        				param:[{
        						edit: '',		//타겟 컴포넌트
        						fnc: 'btn_close_onclick'		//엔터키 눌렀을시 실행할 함수 이름
        				}]
        	};
        	this.addEventEnterSearch(searchParam);
        }

        //데이터를 넣어준다.
        this.initdata = function(dsmaster){
        	this.div_list.edt_CSER_NA_TRPL_C.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"CSER_NA_TRPL_C"));              	//  수요자경제통합거래처코드     -->
        	this.div_list.Edit00.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"CSER_NA_TRPL_N"));								//  수요자경제통합거래처명       -->
        	this.div_list.edt_CSER_NA_TEAM_C.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"CSER_NA_TEAM_C"));              	//  수요자경제통합팀코드         -->
        	this.div_list.Edit10.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"CSER_NA_TEAM_N")); 								//  수요자경제통합팀명           -->
        	this.div_list.edt_SPLR_NA_TRPL_C.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"SPLR_NA_TRPL_C"));              	//  공급자경제통합거래처코드     -->
        	this.div_list.Edit21.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"SPLR_NA_TRPL_N"));								//  공급자경제통합거래처명       -->
        	this.div_list.edt_SPLR_NA_TEAM_C.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"SPLR_NA_TEAM_C"));              	//  공급자경제통합팀코드         -->
        	this.div_list.Edit29.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"SPLR_NA_TEAM_N")); 								//  공급자경제통합팀명           -->
        	this.div_list.edt_CSER_CTR_TPC.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"CSER_CTR_TPC"));                		//  수요자계약유형코드           -->
        	this.div_list.Edit45.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"CSER_CTR_TPNM"));     							//  수요자계약유형코드명         -->
        	this.div_list.edt_SPY_TPC.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"SPY_TPC"));  								//  공급유형코드-->
        	this.div_list.Edit39.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"SPY_TPNM"));               						//  공급유형코드명               -->
        	this.div_list.Edit55.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"NA_WRS_LCLC"));                 				//  경제통합상품대분류코드       -->
        	this.div_list.Edit59.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"NA_WRS_MCLC"));                 				//  경제통합상품중분류코드       -->
        	this.div_list.Edit16.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"MNGT_NA_TRPL_C"));             					//  주관경제통합거래처코드       -->
        	this.div_list.Edit17.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"MNGT_NA_TRPL_N"));								//  주관경제통합거래처명         -->
        	this.div_list.Edit11.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"MNGT_NA_TEAM_C"));              				//  주관경제통합팀코드           -->
        	this.div_list.Edit12.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"MNGT_NA_TEAM_N")); 								//  주관경제통합팀명             -->
        	this.div_list.Edit03.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"MNGT_NA_TR_TPC"));              				//  주관경제통합거래유형코드     -->
        	this.div_list.Edit04.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"MNGT_NA_TR_TPNM")); 							//  주관경제통합거래유형코드명   -->
        	this.div_list.Edit64.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"BZ_METH_DSC")); 								//  사업방식구분코드             -->
        	this.div_list.Edit65.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"BZ_METH_DSC_NM"));     							//  사업방식구분코드명            -->
        	this.div_list.Edit05.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"CSER_NAAC_DSC"));                 				//  수요자중앙회조합구분코드 -->
        	this.div_list.Edit02.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"CSER_NAAC_DSC_NM")); 							//  수요자중앙회조합구분코드명 -->
        	this.div_list.Edit30.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"SPLR_NAAC_DSC"));                 				//  공급자중앙회조합구분코드 -->
        	this.div_list.Edit31.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"SPLR_NAAC_DSC_NM")); 							//  공급자중앙회조합구분코드명 -->
        	this.div_list.Edit14.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"CSER_ADJPL_NA_TRPL_C"));        				//  수요자정산처경제통합거래처코드 -->
        	this.div_list.Edit15.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"CSER_ADJPL_NA_TRPL_NM")); 						//  수요자정산처경제통합거래처명 -->
        	this.div_list.Edit06.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"CSER_ADJPL_NA_TEAM_C"));        				//  수요자정산처경제통합팀코드   -->
        	this.div_list.Edit07.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"CSER_ADJPL_NA_TEAM_NM")); 						//  수요자정산처경제통합팀명     -->
        	this.div_list.Edit18.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"CSER_CTR_CHRRNM"));             				//  수요자계약담당자명           -->
        	this.div_list.Edit08.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"CSER_CTR_CHRR_TELNO"));         				//  수요자계약담당자전화번호     -->
        	this.div_list.Edit18.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"CSER_CTR_CHRR_MPNO"));          				//  수요자계약담당자휴대전화번호 -->
        	this.div_list.Edit24.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"SPLR_ADJPL_NA_TRPL_C"));        				//  공급자정산처경제통합거래처코드 -->
        	this.div_list.Edit25.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"SPLR_ADJPL_NA_TRPL_NM")); 						//  공급자정산처경제통합거래처명 -->
        	this.div_list.Edit32.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"SPLR_ADJPL_NA_TEAM_C"));        				//  공급자정산처경제통합팀코드   -->
        	this.div_list.Edit33.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"SPLR_ADJPL_NA_TEAM_NM")); 						//  공급자정산처경제통합팀명     -->
        	this.div_list.Edit22.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"SPYPL_HOFF_NA_TRPL_C"));        				//  공급처본사경제통합거래처코드 -->
        	this.div_list.Edit23.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"SPYPL_HOFF_NA_TRPL_NM")); 						//  공급처본사경제통합거래처명   -->
        	this.div_list.Edit26.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"SPLR_BNK_C"));                  				//  공급자은행코드               -->
        	this.div_list.Edit27.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"SPLR_BNK_NM"));         						//  공급자은행코드명             -->
        	this.div_list.Edit35.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"SPLR_STL_ACNO"));              					//  공급자결제계좌번호           -->
        	this.div_list.Edit37.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"SPLR_DPRNM"));                  				//  공급자예금주명               -->
        	this.div_list.Edit20.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"SPLR_CTR_CHRRNM"));             				//  공급자계약담당자명           -->
        	this.div_list.Edit34.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"SPLR_CTR_CHRR_TELNO"));         				//  공급자계약담당자전화번호     -->
        	this.div_list.Edit36.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"SPLR_CTR_CHRR_MPNO"));          				//  공급자계약담당자휴대전화번호 -->
        	this.div_list.Edit48.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"CTR_ST_DT"));									//  계약시작일자-->
        	this.div_list.Edit44.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"CTR_ED_DT"));									//  계약종료일자-->
        	this.div_list.Edit49.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"CTR_STOP_DT"));                 				//  계약중지일자-->
        	this.div_list.Edit50.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"CTR_CLO_DT"));                  				//  계약해지일자-->
        	this.div_list.Edit41.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"CTR_CLO_RSNC"));                				//  계약해지사유코드 -->
        	this.div_list.Edit40.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"CTR_CLO_RSNNM"));     							//  계약해지사유코드명           -->
        	this.div_list.Edit52.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"TR_STOP_RSNC"));                				//  거래중지사유코드             -->
        	this.div_list.Edit51.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"TR_STOP_RSNNM"));     							//  거래중지사유코드명           -->
        	this.div_list.Edit54.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"PRGR_C"));										//  가격군코드
        	this.div_list.Edit53.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"PGNM"));										//  가격군코드명
        	this.div_list.Edit42.set_value('부');
        	if(dsmaster.getColumn(this.parent.dsArg.rowposition,"ROTS_FLEX_PR_APL_Y") == "1"){
        		this.div_list.Edit42.set_value('여');
        	}
        	this.div_list.Edit70.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"NA_ODR_FBID_RSNC"));            				//  경제통합발주금지사유코드     -->
        	this.div_list.Edit71.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"NA_ODR_FBID_RSNNM"));     						//  경제통합발주금지사유코드명   -->
        	this.div_list.Edit56.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"ODR_FBID_DT"));                 				//  발주금지일자-->
        	this.div_list.Edit74.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"ODRPL_BUYER_ENO"));             				//  발주처바이어개인번호         -->
        	this.div_list.Edit76.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"NA_RVO_FBID_RSNC"));            				//  경제통합수주금지사유코드     -->
        	this.div_list.Edit77.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"NA_RVO_FBID_RSNNM"));     						//  경제통합수주금지사유코드명   -->
        	this.div_list.Edit78.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"RVO_FBID_DT"));                 				//  수주금지일자-->
        	this.div_list.Edit79.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"RVOPL_BUYER_ENO"));             				//  수주처바이어개인번호         -->
        	this.div_list.Edit43.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"LDTM_DDS")); 									//  리드타임일수-->
        	this.div_list.Edit57.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"RGD_AMN_DSC"));                 				//  반품관리구분코드             -->
        	this.div_list.Edit61.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"RGD_AMN_DSNM"));       							//  반품관리구분코드명           -->
        	this.div_list.Edit66.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"NA_PMI_SBJ_DSC"));              				//  경제통합약정과목구분코드     -->
        	this.div_list.Edit67.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"NA_PMI_SBJ_DSNM")); 							//  경제통합약정과목구분코드명   -->
        	this.div_list.Edit62.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"STL_FDT_BASCD"));                				//  결제기일구분코드             -->
        	this.div_list.Edit63.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"STL_FDT_BASCD_NM")); 							//  결제기일구분코드명            -->
        	this.div_list.Edit80.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"SSDYRT_BASCD"));                  				//  장려금률기준코드             -->
        	this.div_list.Edit81.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"SSDYRT_BASCD_NM"));   							//  장려금률기준코드명            -->
        	this.div_list.Edit82.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"SSDYRT"));   									//  장려금률  -->
        	this.div_list.Edit83.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"SSDY_BAS_AM"));                 				//  장려금기준금액               -->
        	this.div_list.Edit85.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"DDLY_SSDYRT"));                 				//  직송장려금률-->
        	this.div_list.Edit86.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"SSDY_PY_PTM_DSC"));             				//  장려금지급시점구분코드       -->
        	this.div_list.Edit87.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"SSDY_PY_PTM_DSNM")); 							//  장려금지급시점구분코드명     -->
        	this.div_list.Edit95.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"FSRG_DTM")); 									//  최초등록일시-->
        	this.div_list.Edit96.set_value(dsmaster.getColumn(this.parent.dsArg.rowposition,"LSCHG_DTM"));									//  최종변경일시-->
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.Button65.addEventHandler("onclick", this.btn_close_onclick, this);
            this.Button00.addEventHandler("onclick", this.btn_close_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1331.xfdl", true);

       
    };
}
)();
