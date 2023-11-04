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
                this.set_name("OMG_DS_SC_4623");
                this.set_titletext("이용약관");
                this.set_name("OMG_DS_SC_6120");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static01", "absolute", "11", "54", "777", "1", null, null, this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_Menulist");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "11", "23", "777", "26", null, null, this);
            obj.set_taborder("0");
            obj.set_text("이용약관");
            obj.style.set_font("12 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "11", "72", "777", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_text("제 1 조 (목적)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea01", "absolute", "11", "98", "777", "46", null, null, this);
            obj.set_taborder("13");
            obj.set_text("본 약관은 농협 하나로 eSCM 시스템을 이용함에 있어 이용자의 권리의무 및 책임사항을 규정함을 목적으로 한다.");
            obj.set_wordwrap("char");
            obj.style.set_padding("4 0 0 0");
            obj.style.set_border("2 dotted #bfbfbfff");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea00", "absolute", "11", "179", "777", "285", null, null, this);
            obj.set_taborder("14");
            obj.set_text("본 약관에서 사용하는 용어의 정의는 다음과 같다.\r\n\r\n 1. 하나로 eSCM 시스템이란 농협과 거래하는 (하고자 하는) 외부 거래처를 위하여 농협이 구축하여 운영하는 시스템을 말한다.\r\n(하나로 eSCM 홈페이지(http://www.nhescm.co.kr) 또는 모바일 앱(안드로이드/iOS))\r\n\r\n 2. 운영자란 농협하나로유통으로부터 하나로eSCM 시스템 위탁운영사업자인 ㈜이썸테크를 말한다. (이하 운영자)\r\n\r\n 3. 이용자란 하나로 eSCM 서비스를 사용하는 상품 공급업체 담당자로서 하나로 eSCM에 접속하여 회원가입절차를 마친자로 이 약관에 따라 하나로 eSCM 시스템이 제공하는 서비스를 받는 자를 말한다. (이하 이용자)\r\n\r\n 4. 가입이란 하나로 eSCM 시스템이 제공하는 양식에 해당 정보를 기입하고, 본 약관에 동의하여 서비스 이용계약을 완료시키는 행위를 말한다.\r\n\r\n 5. 공급업체란 농협과 거래관계를 맺고 농협 사업장에 상품을 공급(구매)하는 협력업체를 말한다.");
            obj.set_wordwrap("char");
            obj.style.set_padding("4 0 0 0");
            obj.style.set_border("2 dotted #bfbfbfff");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "11", "154", "777", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_text("제 2 조 (용어의 정의)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "11", "475", "777", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_text("제 3 조 (이용 계약의 성립)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea02", "absolute", "11", "501", "777", "116", null, null, this);
            obj.set_taborder("17");
            obj.set_text(" 1. 이용계약은 이용자가 본 이용약관 내용에 대한 동의를 함으로 성립한다.\r\n\r\n 2. 본 이용약관에 대한 동의는 이용 신청 당시 하나로 eSCM 시스템의 '동의합니다' 버튼을 누름으로써 의사표시를 한다.\r\n\r\n 3. 하나로 eSCM 시스템의 상품 공급업체는 해당 농협 사업장의 거래관계에 대한 승인을 얻어야 시스템을 원활하게 이용할 수 있다.");
            obj.set_wordwrap("char");
            obj.style.set_padding("4 0 0 0");
            obj.style.set_border("2 dotted #bfbfbfff");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "11", "627", "777", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_text("제 4 조 (운영시간)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea03", "absolute", "11", "653", "777", "108", null, null, this);
            obj.set_taborder("19");
            obj.set_text(" 1. 서비스 이용시간은 하나로 eSCM 시스템의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴, 1일 24시간을 원칙으로 한다.\r\n\r\n 2. 제1항의 이용시간 중 정기점검 등의 필요로 인하여 당 사이트가 정한 날 또는 시간은 예외로 한다.\r\n\r\n 3. 하나로 eSCM 시스템은 경제통합시스템과 유기적인 운영시간을 가진다.");
            obj.set_wordwrap("char");
            obj.style.set_padding("4 0 0 0");
            obj.style.set_border("2 dotted #bfbfbfff");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "11", "771", "777", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_text("제 5 조 (회원가입)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea04", "absolute", "11", "797", "777", "403", null, null, this);
            obj.set_taborder("21");
            obj.set_text(" 1. 회원가입은 신청자가 온라인으로 하나로 eSCM 사이트에서 제공하는 소정의 가입신청 양식에서 요구하는 사항을 기록하여 가입을 완료하는 것으로 성립된다.\r\n\r\n 2. 회원가입시 경제 CIF 인증이 되어야만 회원가입을 할 수 있다.\r\n\r\n 3. 경제 CIF 가입은 농협 경제사업장에서 경제통합시스템의 CIF 등록을 통하여 CIF 가입을 할 수 있다.\r\n\r\n 4. 하나로 eSCM 시스템에서 다음 각 호에 해당하는 회원가입에 대하여는 가입을 취소할 수 있다. \r\n  1) 다른 사람의 명의를 사용하여 신청하였을 때 \r\n  2) 회원가입 신청서의 내용을 허위로 기재하였거나 신청하였을 때 \r\n  3) 사회의 안녕 질서 혹은 미풍양속을 저해할 목적으로 신청하였을 때 \r\n  4) 다른 사람의 하나로 eSCM 서비스 이용을 방해하거나 그 정보를 도용하는 등의 행위를 하였을 때 \r\n  5) 하나로 eSCM 시스템을 이용하여 법령과 본 약관이 금지하는 행위를 하는 경우 \r\n  6) 기타 하나로 eSCM 시스템이 정한 회원가입요건이 미비 되었을 때\r\n\r\n 5. 하나로 eSCM 시스템에서 다음 각 항에 해당하는 경우 그 사유가 해소될 때까지 이용계약 성립을 유보할 수 있다.\r\n  1) 서비스 관련 제반 용량이 부족한 경우 \r\n  2) 기술상 장애 사유가 있는 경우\r\n\r\n 6. 회원은 등록사항에 변경이 있는 경우, 즉시 회원정보 수정 등 기타 방법으로 하나로 eSCM 시스템에 그 변경사항을 알려야 한다.");
            obj.set_wordwrap("char");
            obj.style.set_padding("4 0 0 0");
            obj.style.set_border("2 dotted #bfbfbfff");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea05", "absolute", "11", "1236", "777", "164", null, null, this);
            obj.set_taborder("22");
            obj.set_text(" 1. 하나로 eSCM 시스템은 이용고객에 대하여 약관에 정하는 바에 따라 이용자 ID를 부여한다.\r\n\r\n 2. 이용자ID는 변경이 불가하며 부득이한 사유로 인하여 변경 하고자 하는 경우에는 해당 ID를 해지하고 재가입해야 한다.\r\n\r\n 3. 서비스 이용자ID 및 비밀번호의 관리책임은 이용자에게 있으며 이를 소홀히 관리하여 발생하는 서비스 이용상의 손해 또는 제3자에 의한 부정이용 등에 대한 책임은 이용자에게 있으며 하나로 eSCM 사이트는 그에 대한 책임을 일절 지지 않는다. \r\n\r\n 4. 기타 이용자 개인정보 관리 및 변경 등에 관한 사항은 하나로 eSCM 시스템에서 정하는 바에 의한다.");
            obj.set_wordwrap("char");
            obj.style.set_padding("4 0 0 0");
            obj.style.set_border("2 dotted #bfbfbfff");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "11", "1210", "777", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_text("제 6 조 (이용자ID 부여 및 변경 등)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea07", "absolute", "11", "2351", "777", "84", null, null, this);
            obj.set_taborder("26");
            obj.set_text(" 1. 하나로 eSCM 사이트는 서비스를 운영함에 있어서 각종 정보를 홈페이지에 게재하는 방법, SMS 또는 전자우편이나 서신 우편 발송등으로 이용자 본인에게 제공할 수 있다.\r\n \r\n 2. 하나로 eSCM 사이트는 서비스에 적절하다고 판단되거나 공익성이 있는 홍보물을 게재할 수 있다.");
            obj.set_wordwrap("char");
            obj.style.set_padding("4 0 0 0");
            obj.style.set_border("2 dotted #bfbfbfff");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "11", "2325", "777", "21", null, null, this);
            obj.set_taborder("27");
            obj.set_text("제 12 조 (정보 제공 및 홍보물 게재)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "11", "2445", "777", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_text("제 13 조 (하나로 eSCM 사이트 게시물의 관리 운영)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea08", "absolute", "11", "2471", "777", "220", null, null, this);
            obj.set_taborder("29");
            obj.set_text(" 1. 게시한 게시물의 내용에 대한 권리는 게시자에게 있다.\r\n\r\n 2. 하나로 eSCM 사이트는 게시된 내용을 사전 통지 없이 편집, 이동할 수 있는 권리를 보유하며, 다음의 경우 사전통지 없이 삭제할 수 있다.\r\n  1) 본 서비스 약관에 위배되거나 상용 또는 불법, 음란, 저속하다고 판단되는 게시물을 게시한 경우 \r\n  2) 다른 회원 또는 제 3자를 비방하거나 중상 모략으로 명예를 손상시키는 내용인 경우 \r\n  3) 공공질서 및 미풍양속에 위반되는 내용인 경우 \r\n  4) 범죄적 행위에 결부된다고 인정되는 내용일 경우 \r\n  5) 제3자의 저작권 등 기타 권리를 침해하는 내용인 경우 \r\n  6) 기타 관계 법령에 위배되는 경우\r\n\r\n 3. 이용자의 게시물이 타인의 저작권을 침해함으로써 발생하는 민, 형사상의 책임은 전적으로 이용자가 부담하여야 한다.");
            obj.set_wordwrap("char");
            obj.style.set_padding("4 0 0 0");
            obj.style.set_border("2 dotted #bfbfbfff");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "11", "2117", "777", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_text("제 11 조 (사용자의 정보 보안)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea06", "absolute", "11", "2143", "777", "172", null, null, this);
            obj.set_taborder("31");
            obj.set_text(" 1. 사용자가 하나로 eSCM 시스템 가입 절차를 완료하는 순간부터 사용자는 입력한 정보의 비밀을 유지할 책임이 있으며, ID와 비밀번호를 사용하여 발생하는 모든 결과에 대한 책임은 사용자에게 있다.\r\n\r\n 2. ID와 비밀번호에 관한 모든 관리의 책임은 사용자에게 있으며, 사용자의 ID나 비밀번호가 부정하게 사용되었다는 사실을 발견한 경우에는 즉시 하나로 eSCM 사이트에 신고하여야 한다. 신고를 하지 않음으로 인해 발생하는 모든 책임은 회원 본인에게 있다.\r\n\r\n 3. 이용자는 하나로 eSCM 서비스의 사용 종료시 마다 정확히 로그아웃(Log-out)해야 하며, 로그아웃하지 아니하여 제3자가 귀하에 관한 정보를 도용하는 등의 결과로 인해 발생하는 손해 및 손실에 대하여 당 사이트는 책임을 부담하지 아니한다.");
            obj.set_wordwrap("char");
            obj.style.set_padding("4 0 0 0");
            obj.style.set_border("2 dotted #bfbfbfff");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea09", "absolute", "11", "2727", "777", "116", null, null, this);
            obj.set_taborder("32");
            obj.set_text(" 1. 이용자가 제공하는 정보의 내용이 허위인 것으로 판명되거나, 허위가 있다고 의심할 만한 합리적인 사유가 발생할 경우 하나로 eSCM 사이트는 이용자의 본 서비스 사용을 일부 또는 전부 중지할 수 있으며, 이로 인해 발생하는 불이익에 대해 책임을 부담하지 아니한다.\r\n\r\n 2. 하나로 eSCM 사이트는 이용자가 본 약관 제12조(회원의 의무)등 본 약관의 내용에 위배되는 행동을 한 경우, 임의로 서비스 사용을 제한 및 중지할 수 있다. 이 경우 하나로 eSCM 사이트는 이용자의 접속을 금지할 수 있다.");
            obj.set_wordwrap("char");
            obj.style.set_padding("4 0 0 0");
            obj.style.set_border("2 dotted #bfbfbfff");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "11", "2701", "777", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("제 14 조 (서비스 이용제한)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "11", "2853", "777", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("제 15 조 (하나로 eSCM 사이트의 의무)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea10", "absolute", "11", "2879", "777", "212", null, null, this);
            obj.set_taborder("35");
            obj.set_text(" 1. 하나로 eSCM 사이트는 본 약관이 금지하거나 미풍양속에 반하는 행위를 하지 않으며, 지속적 안정적으로 서비스를 제공하기 위해 노력할 의무가 있다.\r\n \r\n 2. 하나로 eSCM 사이트는 회원의 개인 신상 정보를 본인의 승낙 없이 타인에게 누설, 배포하지 않는다. 다만, 관계법령등에 의하여 관계 국가기관 등의 요구가 있는 경우에는 그러하지 아니한다.\r\n\r\n 3. 하나로 eSCM 사이트는 이용자가 안전하게 당 사이트서비스를 이용할 수 있도록 이용자의 개인정보(신용정보 포함) 보호를 위한 보안시스템을 갖추어야 한다.\r\n\r\n 4. 하나로 eSCM 사이트는 이용자의 귀책사유로 인한 서비스 이용 장애에 대하여 책임을 지지 않는다.");
            obj.set_wordwrap("char");
            obj.style.set_padding("4 0 0 0");
            obj.style.set_border("2 dotted #bfbfbfff");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "11", "3101", "777", "21", null, null, this);
            obj.set_taborder("36");
            obj.set_text("제 16 조 (회원의 의무)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea11", "absolute", "11", "3127", "777", "523", null, null, this);
            obj.set_taborder("37");
            obj.set_text(" 1. 회원 가입시에 요구되는 정보는 정확하게 기입하여야 한다. 또한 이미 제공된 귀하에 대한 정보가 정확한 정보가 되도록 유지, 갱신하여야 하며, 회원은 자신의 ID 및 비밀번호를 제3자가 이용하게 해서는 안된다.\r\n\r\n 2. 회원은 하나로 eSCM 사이트의 사전 승낙 없이 서비스를 이용하여 어떠한 영리행위도 할 수 없다.\r\n\r\n 3. 회원은 하나로 eSCM 사이트 서비스를 이용하여 얻은 정보를 당 사이트의 사전승낙 없이 복사, 복제, 변경, 번역, 출판, 방송 기타의 방법으로 사용하거나 이를 타인에게 제공할 수 없다.\r\n\r\n 4. 회원은 당 사이트 서비스 이용과 관련하여 다음 각 호의 행위를 하여서는 안된다. \r\n  1) 다른 회원의 비밀번호와 ID를 도용하여 부정 사용하는 행위 \r\n  2) 저속, 음란, 모욕적, 위협적이거나 타인의 Privacy를 침해할 수 있는 내용을 전송, 게시, 게재, 전자우편 또는 기타의 방법으로 전송하는 행위 \r\n  3) 서비스를 통하여 전송된 내용의 출처를 위장하는 행위 \r\n  4) 법률, 계약에 의해 이용할 수 없는 내용을 게시, 게재, 전자우편 또는 기타의 방법으로 전송하는 행위 \r\n  5) 타인의 특허, 상표, 영업비밀, 저작권, 기타 지적재산권을 침해하는 내용을 게시, 게재, 전자우편 또는 기타의 방법으로 전송하는 행위 \r\n  6) 당 사이트의 승인을 받지 아니한 광고, 판촉물, 스팸메일, 행운의 편지, 피라미드 조직 기타 다른 형태의 권유를 게시, 게재, 전자우편 또는 기타의 방법으로 전송하는 행위 \r\n  7) 다른 사용자의 개인정보를 수집 또는 저장하는 행위 \r\n  8) 범죄행위를 목적으로 하거나 기타 범죄행위와 관련된 행위 \r\n  9) 선량한 풍속, 기타 사회질서를 해하는 행위 \r\n  10) 타인의 명예를 훼손하거나 모욕하는 행위 \r\n  11) 타인의 지적재산권 등의 권리를 침해하는 행위 \r\n  12) 해킹행위 또는 컴퓨터바이러스의 유포행위 \r\n  13) 타인의 의사에 반하여 광고성 정보 등 일정한 내용을 지속적으로 전송하는 행위 \r\n  14) 서비스의 안전적인 운영에 지장을 주거나 줄 우려가 있는 일체의 행위 \r\n  15) 하나로 eSCM 사이트에 게시된 정보의 변경. \r\n  16) 기타 하나로 eSCM 사이트에 적합치 않다고 판단되는 행위");
            obj.set_wordwrap("char");
            obj.style.set_padding("4 0 0 0");
            obj.style.set_border("2 dotted #bfbfbfff");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea12", "absolute", "11", "3686", "777", "132", null, null, this);
            obj.set_taborder("38");
            obj.set_text(" 1. 하나로 eSCM 사이트가 제공하는 서비스, 그에 필요한 소프트웨어, 이미지, 마크, 로고, 디자인, 서비스명칭, 정보 및 상표 등과 관련된 지적재산권 및 기타 권리는 당 사이트에 소유권이 있다.\r\n\r\n 2. 이용자는 하나로 eSCM 사이트가 명시적으로 승인한 경우를 제외하고는 전항의 소정의 각 재산에 대한 전부 또는 일부의 수정, 대여, 대출, 판매, 배포, 제작, 양도, 재라이센스, 담보권 설정 행위, 상업적 이용 행위를 할 수 없으며, 제3자로 하여금 이와 같은 행위를 하도록 허락할 수 없다.");
            obj.set_wordwrap("char");
            obj.style.set_padding("4 0 0 0");
            obj.style.set_border("2 dotted #bfbfbfff");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "11", "3660", "777", "21", null, null, this);
            obj.set_taborder("39");
            obj.set_text("제 17 조 (하나로 eSCM 사이트의 소유권)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "11", "3828", "777", "21", null, null, this);
            obj.set_taborder("40");
            obj.set_text("제 18 조 (양도금지)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea13", "absolute", "11", "3854", "777", "46", null, null, this);
            obj.set_taborder("41");
            obj.set_text("회원이 서비스의 이용권한, 기타 이용계약 상 지위를 타인에게 양도, 증여할 수 없으며, 이를 담보로 제공할 수 없습니다.");
            obj.set_wordwrap("char");
            obj.style.set_padding("4 0 0 0");
            obj.style.set_border("2 dotted #bfbfbfff");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea14", "absolute", "11", "3913", "777", "44", null, null, this);
            obj.set_taborder("42");
            obj.set_text("부칙 (시행일 : 2015.11.02)\r\n이 약관은 2015년 11월 2일부터 시행한다.");
            obj.set_wordwrap("char");
            obj.style.set_padding("4 0 0 0");
            obj.style.set_border("1 none #bfbfbfff");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "787", "0", "15", "490", null, null, this);
            obj.set_taborder("43");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea15", "absolute", "11", "1436", "777", "134", null, null, this);
            obj.set_taborder("44");
            obj.set_text(" 1. 하나로eSCM 서비스에 대한 서비스 이용요금은 하나로eSCM 홈페이지에 게시된 요금표에 따라 매월 사용량을 산정하여 이용자에게 청구한다.\r\n\r\n 2. 서비스이용료의 변경은 하나로eSCM 공지사항을 통해 변경내역을 사전에 게시한다.\r\n\r\n 3. 서비스 요금 중 회원의 귀책사유로 인해 발생한 요금은 환급되지 않습니다.");
            obj.set_wordwrap("char");
            obj.style.set_padding("4 0 0 0");
            obj.style.set_border("2 dotted #bfbfbfff");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "11", "1410", "777", "21", null, null, this);
            obj.set_taborder("45");
            obj.set_text("제 7 조 (서비스의 요금)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "11", "1580", "777", "21", null, null, this);
            obj.set_taborder("46");
            obj.set_text("제 8 조 (이용요금 납입방법)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea16", "absolute", "11", "1606", "777", "134", null, null, this);
            obj.set_taborder("47");
            obj.set_text(" 1. 요금청구 및 납부: 당사는 이용요금(세금계산서 작성일자 기준)을 사용 월 익월 전자세금계산서로 청구하고 이용자는 청구월 25일까지 이용요금이 자동이체, 가상계좌로 납부하여야 한다.\r\n\r\n 2. 본 약관에 동의함을 납부방식(자동이체, 가상계좌입금)에 대한 승인으로 간주 한다.\r\n\r\n 3. 전 항의 납입방법은 변경 또는 추가 시 사이트 공지사항을 통해 공지하여 시행할 수 있다.");
            obj.set_wordwrap("char");
            obj.style.set_padding("4 0 0 0");
            obj.style.set_border("2 dotted #bfbfbfff");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea17", "absolute", "11", "1776", "777", "154", null, null, this);
            obj.set_taborder("48");
            obj.set_text(" ① 이용요금 납입자는 회사관리자를 원칙으로 한다. 단 당사의 합의하에 타인을 이용요금 납입자로 할 수 있다.\r\n\r\n ② 이용요금 납입자는 이용요금의 납입의무를 충실히 수행하여야 하며, 이용요금의 미납으로 인하여 발생되는 모든 책임은 이용자 및 이용요금 납입자에게 있습니다. 단 운영자의 고의 또는 중과실이 있는 경우에는 그러하지 아니한다.\r\n\r\n ③ 당사는 이용요금 납입자가 청구월 25일까지 이용요금을 납부하지 않을 경우 서비스 이용을 제한 또는 중지할 수 있고, 연이율 10%로 연체일수를 산정하여 연체료를 부과할 수 있다.");
            obj.set_wordwrap("char");
            obj.style.set_padding("4 0 0 0");
            obj.style.set_border("2 dotted #bfbfbfff");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "11", "1750", "777", "21", null, null, this);
            obj.set_taborder("49");
            obj.set_text("제 9 조 (이용요금 납입자)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "11", "1940", "777", "21", null, null, this);
            obj.set_taborder("50");
            obj.set_text("제 10 조 (이용요금에 대한 이의신청)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea18", "absolute", "11", "1966", "777", "140", null, null, this);
            obj.set_taborder("51");
            obj.set_text(" 1. 운영자는 이용요금 청구 등에 오류가 있는 경우 다음과 같이 조치한다.\r\n  1) 원칙적으로 회원이 과다 납입한 요금 등에 대하여는 그 금액을 반환한다.\r\n      다만, 회원이 동의할 경우 다음 회차에 청구할 요금에서 해당금액만큼을 감하여 청구할 수 있다.\r\n  2) 운영자가 회원의 납입요금을 누락하여 청구한 경우 다음 회차에 합산하여 청구한다.\r\n  3) 이용자 또는 이용요금 납입자는 이용요금에 관한 이의신청이 있는 경우\r\n      그 사유 발생을 안 날로부터 1월 이내, 그 사유가 발생한 날로부터 2월 이내에 하여야 합니다.");
            obj.set_wordwrap("char");
            obj.style.set_padding("4 0 0 0");
            obj.style.set_border("2 dotted #bfbfbfff");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("이용약관");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","divSearch.edt_menuId","value","ds_in","MENU_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divSearch.cbo_menuLevel","value","ds_in","MENU_LEVEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divSearch.edt_menuName","value","ds_in","MENU_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divSearch.edt_svcGroup","value","ds_in","SVC_GROUP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divSearch.edt_fileName","value","ds_in","FILE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divSearch.edt_fileType","value","ds_in","FILE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","divSearch.cbo_displayYn","value","ds_in","DISPLAY_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","divSearch.cbo_useYn","value","ds_in","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_4623.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_4623.xfdl", function(exports) {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

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

        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/

        
         

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Static01.addEventHandler("onclick", this.Static01_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_4623.xfdl", true);

       
    };
}
)();
