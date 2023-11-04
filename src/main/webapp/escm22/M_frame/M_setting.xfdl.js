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
                this.set_name("M_setting");
                this.set_classname("M_setting");
                this.set_titletext("설정화면");
                this._setFormPosition(0,0,540,750);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static01", "absolute", "0", "63", "153", "64", null, null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("버전정보");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("st_ver", "absolute", "153", "63", "387", "64", null, null, this);
            obj.getSetter("taborder").set("2");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("1.3");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "0", "540", "65", null, null, this);
            obj.getSetter("taborder").set("0");
            obj.set_cssclass("sta_WF_Toptitle");
            obj.set_text("설정");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0", "126", "153", "64", null, null, this);
            obj.getSetter("taborder").set("4");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "153", "126", "387", "64", null, null, this);
            obj.getSetter("taborder").set("5");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_phone", "absolute", "157", "132", "368", "54", null, null, this);
            obj.set_taborder("6");
            obj.set_value("82102779063");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "0", "189", "153", "64", null, null, this);
            obj.getSetter("taborder").set("7");
            obj.set_text("로그인 ID");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("st_id", "absolute", "153", "189", "387", "64", null, null, this);
            obj.getSetter("taborder").set("8");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_terms", "absolute", "413", "72", "112", "46", null, null, this);
            obj.set_taborder("9");
            obj.set_text("약관보기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_logout", "absolute", "413", "198", "112", "46", null, null, this);
            obj.set_taborder("10");
            obj.set_text("로그아웃");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "0", "307", "540", "64", null, null, this);
            obj.getSetter("taborder").set("12");
            obj.set_text("공지사항 등록시 :");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static63", "absolute", "0", "252", "540", "55", null, null, this);
            obj.getSetter("taborder").set("11");
            obj.set_cssclass("sta_WF_Sattgtlbg");
            obj.set_text("알림서비스 목록");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "0", "370", "540", "64", null, null, this);
            obj.getSetter("taborder").set("13");
            obj.set_text("수주내역 도착시 :");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "433", "540", "64", null, null, this);
            obj.getSetter("taborder").set("14");
            obj.set_text("배송응답서 도착시 :");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "0", "496", "540", "64", null, null, this);
            obj.getSetter("taborder").set("15");
            obj.set_text("검수확정서 도착시 :");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "0", "559", "540", "64", null, null, this);
            obj.getSetter("taborder").set("16");
            obj.set_text("반품예정서 도착시 :");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "0", "622", "540", "64", null, null, this);
            obj.getSetter("taborder").set("17");
            obj.set_text("미납패널티 소명 마감 알림 :");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "0", "685", "540", "64", null, null, this);
            obj.getSetter("taborder").set("18");
            obj.set_text("세금계산서 마감 알림 :");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "413", "316", "112", "46", null, null, this);
            obj.set_taborder("19");
            obj.set_text("OFF");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "413", "379", "112", "46", null, null, this);
            obj.set_taborder("21");
            obj.set_text("OFF");
            this.addChild(obj.name, obj);

            obj = new Button("Button05", "absolute", "413", "442", "112", "46", null, null, this);
            obj.set_taborder("22");
            obj.set_text("OFF");
            this.addChild(obj.name, obj);

            obj = new Button("Button06", "absolute", "413", "505", "112", "46", null, null, this);
            obj.set_taborder("23");
            obj.set_text("OFF");
            this.addChild(obj.name, obj);

            obj = new Button("Button07", "absolute", "413", "568", "112", "46", null, null, this);
            obj.set_taborder("24");
            obj.set_text("OFF");
            this.addChild(obj.name, obj);

            obj = new Button("Button08", "absolute", "413", "631", "112", "46", null, null, this);
            obj.set_taborder("25");
            obj.set_text("OFF");
            this.addChild(obj.name, obj);

            obj = new Button("Button09", "absolute", "413", "694", "112", "46", null, null, this);
            obj.set_taborder("26");
            obj.set_text("OFF");
            this.addChild(obj.name, obj);

            obj = new Button("Button10", "absolute", "583", "316", "112", "46", null, null, this);
            obj.set_taborder("27");
            obj.set_text("ON");
            obj.set_cssclass("btn_WF_Onsettoglbtn");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("cmt_div_terms", "absolute", "725", "0", "540", "820", null, null, this);
            obj.set_taborder("31");
            obj.style.set_background("white");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Static("st_term_title", "absolute", "0", "0", "540", "65", null, null, this.cmt_div_terms);
            obj.getSetter("taborder").set("3");
            obj.set_text("약관보기");
            obj.set_cssclass("sta_WF_Toptitle");
            this.cmt_div_terms.addChild(obj.name, obj);
            obj = new Button("btn_terms", "absolute", "0", "64", "270", "70", null, null, this.cmt_div_terms);
            obj.set_taborder("4");
            obj.set_text("약관");
            obj.set_cssclass("btn_WF_NoticeS");
            this.cmt_div_terms.addChild(obj.name, obj);
            obj = new Button("btn_info", "absolute", "268", "64", "272", "70", null, null, this.cmt_div_terms);
            obj.set_taborder("5");
            obj.set_text("개인정보취급처리");
            obj.set_cssclass("btn_WF_Notice");
            this.cmt_div_terms.addChild(obj.name, obj);
            obj = new TextArea("ta_terms", "absolute", "0", "134", "540", "686", null, null, this.cmt_div_terms);
            obj.set_taborder("6");
            obj.set_value("제 1 조 (목적)\r\n본 약관은 농협 하나로 eSCM 시스템을 이용함에 있어 이용자의 권리의무 및 책임사항을 규정함을 목적으로 한다. \r\n\r\n제 2 조 (용어의 정의)\r\n본 약관에서 사용하는 용어의 정의는 다음과 같다. \r\n 1. 하나로 eSCM 시스템이란 농협과 거래하는 (하고자 하는) 외부 거래처를 위하여 농협이 구축하여 운영하는 시스템을 말한다.\r\n    하나로 eSCM 홈페이지(http://www.nhescm.co.kr) 또는 모바일 앱(안드로이드/iOS) \r\n 2. 이용자란 하나로 eSCM 서비스를 사용하는 상품 공급업체 담당자로서 하나로 eSCM에 접속하여 회원가입절차를 마친 자로\r\n    이 약관에 따라 하나로 eSCM 시스템이 제공하는 서비스를 받는 자를 말한다. \r\n 3. 가입이란 하나로 eSCM 시스템이 제공하는 양식에 해당 정보를 기입하고, 본 약관에 동의하여 서비스 \r\n    이용계약을 완료시키는 행위를 말한다. \r\n 4. 공급업체란 농협과 거래관계를 맺고 농협 사업장에 상품을 공급(구매)하는 협력업체를 말한다. \r\n\r\n제 3 조 (이용 계약의 성립)\r\n 1. 이용계약은 이용자가 본 이용약관 내용에 대한 동의를 함으로 성립한다. \r\n 2. 본 이용약관에 대한 동의는 이용 신청 당시 하나로 eSCM 시스템의 '동의합니다' 버튼을 누름으로써 의사표시를 한다. \r\n 3. 하나로 eSCM 시스템의 상품 공급업체는 해당 농협 사업장의 거래관계에 대한 승인을 얻어야 시스템을 \r\n    원활하게 이용할 수 있다. \r\n\r\n제 4 조 (운영시간)\r\n 1. 서비스 이용시간은 하나로 eSCM 시스템의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴, 1일 24시간을 원칙으로 한다. \r\n 2. 제1항의 이용시간 중 정기점검 등의 필요로 인하여 당 사이트가 정한 날 또는 시간은 예외로 한다. \r\n 3. 하나로 eSCM 시스템은 경제통합시스템과 유기적인 운영시간을 가진다. \r\n\r\n제 5 조 (회원가입)\r\n 1. 회원가입은 신청자가 온라인으로 하나로 eSCM 사이트에서 제공하는 소정의 가입신청 양식에서 요구하는 사항을 \r\n    기록하여 가입을 완료하는 것으로 성립된다. \r\n 2. 회원가입시 경제 CIF 인증이 되어야만 회원가입을 할 수 있다. \r\n 3. 경제 CIF 가입은 농협 경제사업장에서 경제통합시스템의 CIF 등록을 통하여 CIF 가입을 할 수 있다. \r\n 4. 하나로 eSCM 시스템에서 다음 각 호에 해당하는 회원가입에 대하여는 가입을 취소할 수 있다. \r\n  1) 다른 사람의 명의를 사용하여 신청하였을 때 \r\n  2) 회원가입 신청서의 내용을 허위로 기재하였거나 신청하였을 때 \r\n  3) 사회의 안녕 질서 혹은 미풍양속을 저해할 목적으로 신청하였을 때 \r\n  4) 다른 사람의 하나로 eSCM 서비스 이용을 방해하거나 그 정보를 도용하는 등의 행위를 하였을 때 \r\n  5) 하나로 eSCM 시스템을 이용하여 법령과 본 약관이 금지하는 행위를 하는 경우 \r\n  6) 기타 하나로 eSCM 시스템이 정한 회원가입요건이 미비 되었을 때 \r\n 5. 하나로 eSCM 시스템에서 다음 각 항에 해당하는 경우 그 사유가 해소될 때까지 이용계약 성립을 유보할 수 있다. \r\n  1) 서비스 관련 제반 용량이 부족한 경우 \r\n  2) 기술상 장애 사유가 있는 경우 \r\n 6. 회원은 등록사항에 변경이 있는 경우, 즉시 회원정보 수정 등 기타 방법으로 하나로 eSCM 시스템에 \r\n    그 변경사항을 알려야 한다. \r\n\r\n제 6 조 (이용자ID 부여 및 변경 등)\r\n 1. 하나로 eSCM 시스템은 이용고객에 대하여 약관에 정하는 바에 따라 이용자 ID를 부여한다. \r\n 2. 이용자ID는 변경이 불가하며 부득이한 사유로 인하여 변경 하고자 하는 경우에는 해당 ID를 해지하고 재가입해야 한다. \r\n 3. 서비스 이용자ID 및 비밀번호의 관리책임은 이용자에게 있으며 이를 소홀히 관리하여 발생하는 서비스 이용상의 손해 \r\n    또는 제3자에 의한 부정이용 등에 대한 책임은 이용자에게 있으며 하나로 eSCM 사이트는 그에 대한 책임을 일절 지지 않는다. \r\n 4. 기타 이용자 개인정보 관리 및 변경 등에 관한 사항은 하나로 eSCM 시스템에서 정하는 바에 의한다. \r\n\r\n제 7 조 (사용자의 정보 보안)\r\n 1. 사용자가 하나로 eSCM 시스템 가입 절차를 완료하는 순간부터 사용자는 입력한 정보의 비밀을 유지할 책임이 있으며, \r\n    ID와 비밀번호를 사용하여 발생하는 모든 결과에 대한 책임은 사용자에게 있다. \r\n 2. ID와 비밀번호에 관한 모든 관리의 책임은 사용자에게 있으며, 사용자의 ID나 비밀번호가 부정하게 사용되었다는 \r\n    사실을 발견한 경우에는 즉시 하나로 eSCM 사이트에 신고하여야 한다. 신고를 하지 않음으로 인해 발생하는\r\n\t모든 책임은 회원 본인에게 있다. \r\n 3. 이용자는 하나로 eSCM 서비스의 사용 종료시 마다 정확히 로그아웃(Log-out)해야 하며, 로그아웃하지 아니하여 제3자가 \r\n    귀하에 관한 정보를 도용하는 등의 결과로 인해 발생하는 손해 및 손실에 대하여 당 사이트는 책임을 부담하지 아니한다. \r\n\r\n제 8 조 (정보 제공 및 홍보물 게재)\r\n 1. 하나로 eSCM 사이트는 서비스를 운영함에 있어서 각종 정보를 홈페이지에 게재하는 방법, SMS 또는 전자우편이나 \r\n    서신 우편 발송등으로 이용자 본인에게 제공할 수 있다. \r\n 2. 하나로 eSCM 사이트는 서비스에 적절하다고 판단되거나 공익성이 있는 홍보물을 게재할 수 있다. \r\n\r\n제 9 조 (하나로 eSCM 사이트 게시물의 관리 운영)\r\n 1. 게시한 게시물의 내용에 대한 권리는 게시자에게 있다. \r\n 2. 하나로 eSCM 사이트는 게시된 내용을 사전 통지 없이 편집, 이동할 수 있는 권리를 보유하며, \r\n    다음의 경우 사전 통지 없이 삭제할 수 있다. \r\n  1) 본 서비스 약관에 위배되거나 상용 또는 불법, 음란, 저속하다고 판단되는 게시물을 게시한 경우 \r\n  2) 다른 회원 또는 제 3자를 비방하거나 중상 모략으로 명예를 손상시키는 내용인 경우 \r\n  3) 공공질서 및 미풍양속에 위반되는 내용인 경우 \r\n  4) 범죄적 행위에 결부된다고 인정되는 내용일 경우 \r\n  5) 제3자의 저작권 등 기타 권리를 침해하는 내용인 경우 \r\n  6) 기타 관계 법령에 위배되는 경우 \r\n 3. 이용자의 게시물이 타인의 저작권을 침해함으로써 발생하는 민, 형사상의 책임은 전적으로 이용자가 부담하여야 한다. \r\n\r\n제 10 조 (서비스 이용제한)\r\n 1. 이용자가 제공하는 정보의 내용이 허위인 것으로 판명되거나, 허위가 있다고 의심할 만한 합리적인 사유가 발생할 \r\n    경우 하나로 eSCM 사이트는 이용자의 본 서비스 사용을 일부 또는 전부 중지할 수 있으며, 이로 인해 발생하는 \r\n\t불이익에 대해 책임을 부담하지 아니한다. \r\n 2. 하나로 eSCM 사이트는 이용자가 본 약관 제12조(회원의 의무)등 본 약관의 내용에 위배되는 행동을 한 경우, \r\n    임의로 서비스 사용을 제한 및 중지할 수 있다. 이 경우 하나로 eSCM 사이트는 이용자의 접속을 금지할 수 있다. \r\n\r\n제 11 조 (하나로 eSCM 사이트의 의무)\r\n 1. 하나로 eSCM 사이트는 본 약관이 금지하거나 미풍양속에 반하는 행위를 하지 않으며, 지속적 안정적으로 서비스를 \r\n    제공하기 위해 노력할 의무가 있다. \r\n 2. 하나로 eSCM 사이트는 회원의 개인 신상 정보를 본인의 승낙 없이 타인에게 누설, 배포하지 않는다. \r\n    다만, 관계법령등에 의하여 관계 국가기관 등의 요구가 있는 경우에는 그러하지 아니한다. \r\n 3. 하나로 eSCM 사이트는 이용자가 안전하게 당 사이트서비스를 이용할 수 있도록 이용자의 개인정보(신용정보 포함) \r\n    보호를 위한 보안시스템을 갖추어야 한다. \r\n 4. 하나로 eSCM 사이트는 이용자의 귀책사유로 인한 서비스 이용 장애에 대하여 책임을 지지 않는다. \r\n\r\n제 12 조 (회원의 의무)\r\n 1. 회원 가입시에 요구되는 정보는 정확하게 기입하여야 한다. 또한 이미 제공된 귀하에 대한 정보가 정확한 정보가 \r\n    되도록 유지, 갱신하여야 하며, 회원은 자신의 ID 및 비밀번호를 제3자가 이용하게 해서는 안된다. \r\n 2. 회원은 하나로 eSCM 사이트의 사전 승낙 없이 서비스를 이용하여 어떠한 영리행위도 할 수 없다. \r\n 3. 회원은 하나로 eSCM 사이트 서비스를 이용하여 얻은 정보를 당 사이트의 사전승낙 없이 복사, 복제, 변경, 번역, \r\n    출판, 방송 기타의 방법으로 사용하거나 이를 타인에게 제공할 수 없다. \r\n 4. 회원은 당 사이트 서비스 이용과 관련하여 다음 각 호의 행위를 하여서는 안된다. \r\n  1) 다른 회원의 비밀번호와 ID를 도용하여 부정 사용하는 행위 \r\n  2) 저속, 음란, 모욕적, 위협적이거나 타인의 Privacy를 침해할 수 있는 내용을 전송, 게시, 게재, 전자우편 또는 \r\n     기타의 방법으로 전송하는 행위 \r\n  3) 서비스를 통하여 전송된 내용의 출처를 위장하는 행위 \r\n  4) 법률, 계약에 의해 이용할 수 없는 내용을 게시, 게재, 전자우편 또는 기타의 방법으로 전송하는 행위 \r\n  5) 타인의 특허, 상표, 영업비밀, 저작권, 기타 지적재산권을 침해하는 내용을 게시, 게재, 전자우편 또는 기타의 \r\n     방법으로 전송하는 행위 \r\n  6) 당 사이트의 승인을 받지 아니한 광고, 판촉물, 스팸메일, 행운의 편지, 피라미드 조직 기타 다른 형태의 \r\n     권유를 게시, 게재, 전자우편 또는 기타의 방법으로 전송하는 행위 \r\n  7) 다른 사용자의 개인정보를 수립 또는 저장하는 행위 \r\n  8) 범죄행위를 목적으로 하거나 기타 범죄행위와 관련된 행위 \r\n  9) 선량한 풍속, 기타 사회질서를 해하는 행위 \r\n  10) 타인의 명예를 훼손하거나 모욕하는 행위 \r\n  11) 타인의 지적재산권 등의 권리를 침해하는 행위 \r\n  12) 해킹행위 또는 컴퓨터바이러스의 유포행위 \r\n  13) 타인의 의사에 반하여 광고성 정보 등 일정한 내용을 지속적으로 전송하는 행위 \r\n  14) 서비스의 안전적인 운영에 지장을 주거나 줄 우려가 있는 일체의 행위 \r\n  15) 하나로 eSCM 사이트에 게시된 정보의 변경. \r\n  16) 기타 하나로 eSCM 사이트에 적합치 않다고 판단되는 행위 \r\n\r\n제 13 조 (하나로 eSCM 사이트의 소유권)\r\n 1. 하나로 eSCM 사이트가 제공하는 서비스, 그에 필요한 소프트웨어, 이미지, 마크, 로고, 디자인, 서비스명칭, \r\n    정보 및 상표 등과 관련된 지적재산권 및 기타 권리는 당 사이트에 소유권이 있다. \r\n 2. 이용자는 하나로 eSCM 사이트가 명시적으로 승인한 경우를 제외하고는 전항의 소정의 각 재산에 대한 전부 \r\n    또는 일부의 수정, 대여, 대출, 판매, 배포, 제작, 양도, 재라이센스, 담보권 설정 행위, 상업적 이용 행위를 할 수 없으며, 제3자로 하여금 이와 같은 행위를 하도록 허락할 수 없다. \r\n\r\n제 14 조 (양도금지)\r\n 회원이 서비스의 이용권한, 기타 이용계약 상 지위를 타인에게 양도, 증여할 수 없으며, 이를 담보로 제공할 수 없습니다. \r\n\r\n부칙 (시행일 : 2015.11)\r\n   이 약관은 2015년 11월 일부터 시행한다\r\n");
            obj.set_wordwrap("char");
            obj.style.set_padding("10 10 10 10");
            obj.style.set_border("1 solid #bfbfbfff");
            this.cmt_div_terms.addChild(obj.name, obj);
            obj = new TextArea("ta_info", "absolute", "0", "134", "540", "686", null, null, this.cmt_div_terms);
            obj.set_taborder("7");
            obj.set_wordwrap("char");
            obj.style.set_padding("10 10 10 10");
            obj.style.set_border("1 solid #bfbfbfff");
            obj.set_value("개인정보취급처리(방침) \r\n㈜kt, ㈜이썸테크(이하 'kt컨소시엄(이썸테크)'라 합니다)은 「개인정보 보호법」 제30조 제1항 및 동법 시행령 \r\n제31조 제1항의 규정에 따라 정보 주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 \r\n처리할 수 있도록 하기 위하여 다음과 같이 개인정보취급(처리)방침을 수립·공개합니다. \r\n  •\t개인정보란 생존하는 개인에 관한 정보로서 당해 정보에 포함되어 있는 성명, 주민등록 번호 등의 \r\n    사항에 의하여 당해 개인을 식별할 수 있는 정보 (당해 정보만으로는 특정 개인을 식별할 수 없더라도 \r\n\t다른 정보와 용이하게 결합하여 식별할 수 있는 것을 포함합니다)를 말합니다.\r\n  •\t하나로 eSCM 사이트는 귀하의 개인정보보호를 매우 중요시하며, 『정보통신망이용촉진 및 정보보호에관한법률』\r\n    상의 개인정보보호규정 및 정보통신부가 제정한 『개인정보보호지침』을 준수하고 있습니다. 하나로 eSCM 사이트는 \r\n\t개인정보보호정책을 통하여 귀하께서 제공하는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 개인정보보호를 \r\n\t위해 어떠한 조치가 취해지고 있는지 알려드립니다.\r\n\r\n제 1조 (개인정보의 처리목적) \r\n'kt컨소시엄(이썸테크)'은 다음의 목적을 위하여 개인정보를 처리합니다. \r\n처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 \r\n「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다. \r\n\r\n  1. 서비스 제공 \r\n    - 발주 등의 EDI 문서 연계 서비스 제공 및 서비스 사용료 정산, 요금 결제, 채권관리에 활용 \r\n    - 업무와 관련된 통계자료 작성 및 서비스 개발 \r\n    - 금융결제원의 자동이체 출금 서비스를 이용한 서비스 사용료 결제(자동이체)에 활용 \r\n\r\n  2. 고객상담 \r\n    - 서비스 제공을 위한 고객센터 운영의 목적으로 활용 \r\n    - 공지/불만처리 등을 위한 원활한 의사소통의 경로 확보\r\n\r\n제 2조 (개인정보의 처리 및 보유기간) \r\n'kt컨소시엄(이썸테크)'은 법령에 따른 개인정보 보유·이용 기간 또는 정보 주체로부터 개인정보를 수집 시 동의 받은 \r\n개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다. 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다. \r\n\r\n  - 서비스 제공 \r\n    데이터연계 및 부가서비스 제공에 활용 : 서비스 탈퇴 및 보유 데이터 파기 시 까지\r\n\r\n제 3조 (개인정보의 제3자 제공) \r\n'kt컨소시엄(이썸테크)'은 정보주체의 개인정보를 제1조(개인정보의 처리목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, \r\n법률의 특별한 규정 등 「개인정보 보호법」 제17조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다. \r\n\r\n제 4조 (개인정보 처리의 위탁) \r\n  1. 'kt컨소시엄(이썸테크)'는 원활한 개인정보 업무 처리를 위하여 다음과 같이 개인정보 처리 업무를 위탁하고 있습니다. \r\n\r\n  ① 금융결제원 \r\n    - 개인정보를 제공받는 자 : 금융결제원 \r\n    - 제공받는 자의 개인정보 이용목적 : 자동이체(CMS) 은행계좌 등록 및 해지, 사용료 출금 \r\n    - 제공하는 개인정보 항목 : 아이디, 계좌번호, 생년월일 \r\n    - 제공받는 자의 보유 이용기간 : 서비스 탈퇴 시 까지 \r\n\r\n  2. 회사는 위탁계약 체결 시 「개인정보 보호법」제25조에 따라 위탁업무 수행목적 외 개인정보 처리 금지, \r\n     기술적·관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리·감독, 손해배상 등 책임에 관한 사항을 계약서 등 \r\n\t 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다. \r\n\r\n  3. 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체 없이 본 개인정보취급(처리)방침을 통하여 공지하도록 하겠습니다.   \r\n\r\n제 5조 (정보 주체의 권리·의무 및 행사 방법)\r\n  1. 정보 주체는 'kt컨소시엄(이썸테크)'에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다. \r\n\r\n    - 개인정보 열람요구 \r\n    - 오류 등이 있을 경우 정정 요구 \r\n    - 삭제요구 \r\n    - 처리정지 요구 \r\n\r\n  2. 제 1항에 따른 권리 행사는 'kt컨소시엄(이썸테크)'에 대해 서면, 전화, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 \r\n     'kt컨소시엄(이썸테크)'는 이에 대해 지체 없이 조치하겠습니다. \r\n\r\n  3. 정보 주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 'kt컨소시엄(이썸테크)'은 정정 또는 삭제를 완료할 \r\n     때까지 당해 개인정보를 이용하거나 제공하지 않습니다. \r\n\r\n  4. 제 1항에 따른 권리 행사는 정보 주체의 법정 대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. \r\n     이 경우 「개인정보 보호법」 시행규칙 별지 제 11호 서식에 따른 위임장을 제출하셔야 합니다.\r\n \r\n제 6조 (처리하는 개인정보 항목) \r\n'kt컨소시엄(이썸테크)'은 다음과 같은 개인정보 항목을 처리하고 있습니다. \r\n\r\n  1. 필수정보 \r\n    - 아이디, 비밀번호, 성명, 연락처, 이메일 주소 \r\n\r\n  2. 선택정보 (사용료 납부·결제 방식 자동이체 출금서비스 선택 시 또는 모바일 서비스 이용 시) \r\n    - 자동이체 : 계좌번호, 생년월일 \r\n    - 모바일 서비스 : 모바일 디바이스의 기기 고유번호 (단말기 아이디, IMEI 등) \r\n\r\n  3. 서비스 이용 과정에서 아래 개인정보 항목이 자동으로 생성되어 수집될 수 있습니다. \r\n    - 웹사이트 : 서비스 이용 기록, 접속로그, 방문기록, 쿠키, IP정보 등 \r\n    - 모바일앱 : 서비스 이용 기록, 접속로그 등\r\n\r\n제 7조 (개인정보의 파기) \r\n  1. 'kt컨소시엄(이썸테크)'은 개인정보 보유 기간의 경과, 처리 목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 \r\n     해당 개인정보를 파기합니다. \r\n\r\n  2. 정보 주체로부터 동의 받은 개인정보 보유 기간이 경과하거나 처리 목적이 달성되었음에도 불구하고 다른 법령에 \r\n     따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관 장소를 \r\n\t 달리하여 보존합니다. \r\n\r\n  3. 개인정보 파기의 절차 및 방법은 다음과 같습니다. \r\n\r\n    - 파기절차 \r\n      'kt컨소시엄(이썸테크)'은 파기 사유가 발생한 개인정보를 선정하고, 'kt컨소시엄(이썸테크)'의 개인정보 보호책임자의 승인을 받아 \r\n\t  개인정보를 파기합니다. \r\n\r\n    - 파기방법 \r\n      'kt컨소시엄(이썸테크)'은 전자적 파일 형태로 기록·저장된 개인정보는 기록을 재생할 수 없도록 기술적 방법을 이용하여 파기하며, \r\n\t  종이 문서에 기록·저장된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다. \r\n\r\n제 8조 (개인정보의 안정성 확보 조치) \r\n'kt컨소시엄(이썸테크)'은 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다. \r\n\r\n  1. 관리적 조치 : 내부관리계획 수립·시행, 정기적 직원 교육 등 \r\n\r\n  2. 기술적 조치 : 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 모든 개인정보 항목의 암호화, \r\n     보안프로그램 설치 \r\n\r\n  3. 물리적 조치 : 전산실, 자료보관실 등의 접근 통제\r\n \r\n제 9조 (개인정보 보호책임자) \r\n'kt컨소시엄(이썸테크)'은 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보 주체의 불만처리 및 피해구제 등을 \r\n위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다. \r\n\r\n  1. 개인정보 보호책임자 \r\n    - 성명 : OOO/ 소속 : OOOOO사업부 \r\n    - 직책 : 과장 \r\n    - 연락처 : 02-3397-OOOO \r\n\r\n  2. 개인정보 보호 담당부서 \r\n    - 성명 : OOO / 소속 : OOOOO사업팀 \r\n    - 연락처 : 02-3397-OOOO, miok@OOOO.com, <팩스 02-3397-1699> \r\n\r\n   정보 주체는 'kt컨소시엄(이썸테크)'의 서비스를 이용하면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 \r\n   개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. \r\n   'kt컨소시엄'은 정보 주체의 문의에 대해 지체 없이 답변 및 처리합니다. \r\n\r\n제 10조 (개인정보 열람청구) \r\n정보 주체는 「개인정보 보호법」 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다. 'kt컨소시엄'은 \r\n정보 주체의 개인정보 열람청구가 신속하게 처리되도록 노력하겠습니다. \r\n\r\n개인정보 열람청구 접수·처리 부서 \r\n  - 성명 : OOO / 소속 : OOOOO사업팀 \r\n  - 연락처 : 02-3397-OOOO, miok@OOOO.com, <팩스 02-3397-1699>  \r\n\r\n제 11조 (권익침해 구제 방법) \r\n정보주체는 아래의 기관에 대해 개인정보 침해에 대한 피해구제, 상담 등을 문의하실 수 있습니다. \r\n\r\n<아래의 기관은 'kt컨소시엄(이썸테크)'와는 별개의 기관으로서, 'kt컨소시엄'의 자체적인 개인정보 불만처리, \r\n피해구제 결과에 만족하지 못하시거나 보다 자세한 도움이 필요하시면 문의하여 주시기 바랍니다> \r\n\r\n  1. 개인정보 침해신고센터 (한국인터넷진흥원 운영) \r\n    - 소관업무 : 개인정보 침해사실 신고, 상담 신청 \r\n    - 홈페이지 : privacy.kisa.or.kr \r\n    - 전 화 : (국번없이) 118 \r\n    - 주 소 : (138-950) 서울시 송파구 중대로 135 한국인터넷진흥원 개인정보침해신고센터 \r\n\r\n  2. 개인정보 분쟁조정위원회 (한국인터넷진흥원 운영) \r\n    - 소관업무 : 개인정보 분쟁조정신청, 집단분쟁조정 (민사적 해결) \r\n    - 홈페이지 : privacy.kisa.or.kr \r\n    - 전 화 : (국번없이) 118 \r\n    - 주 소 : (138-950) 서울시 송파구 중대로 135 한국인터넷진흥원 개인정보침해신고센터 \r\n\r\n  3. 대검찰청 사이버범죄수사단 : 02-3480-3573 (www.spo.go.kr) \r\n\r\n  4. 경찰청 사이버테러대응센터 : 1566-0112 (www.netan.go.kr) \r\n\r\n제 12조 (고지의 의무) \r\n개인정보취급(처리)방침 내용의 추가, 삭제 및 수정이 있을 시에는 개정 최소 7일 전부터 홈페이지의 공지사항을 \r\n통하여 고지할 것입니다. 다만, 이용자에게 불리하게 개인정보취급(처리)방침 내용을 변경하는 경우에는 \r\n최소한 30일 이상의 사전 유예 기간을 두고 공지하겠습니다. \r\n\t\r\n\r\n개인정보취급(처리)방침 버전번호 : V 1.0 \r\n개인정보취급(처리)방침 시행일자 : 2015년 11월 2일 ");
            this.cmt_div_terms.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 540, 820, this.cmt_div_terms,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("31");
            		p.style.set_background("white");
            		p.set_visible("false");

            	}
            );
            this.cmt_div_terms.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 750, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("M_setting");
            		p.set_titletext("설정화면");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("M_setting.xfdl", "lib::comLib.xjs");
        this.registerScript("M_setting.xfdl", function() {
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj,e);
        	var userId = (application.gv_userId);
        	this.st_id.set_text(userId);
        }

        this.btn_logout_onclick = function(obj,e)
        {
        	var oArg = "";
        	var sOption = "width=400,height=280";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("popId","m_frame::M_confirm.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	trace(" strId : " + strId + " strVal : " + strVal);
        }

        this.fn_afterFormOnload = function()
        {
        	trace("fn_afterFormOnload");
        }

        this.btn_terms_onclick = function(obj,e)
        {
        	var nLeft = 0;
        	var nTop = 0;
        	
        	this.cmt_div_terms.move(nLeft, nTop);
        	this.cmt_div_terms.bringToFront();
        	this.cmt_div_terms.set_visible(true);
        	
        	this.gfn_callDetailMenu("cmt_div_terms", "", "");
        }

        this.cmt_div_terms_btn_terms_onclick = function(obj,e)
        {
        	this.cmt_div_terms.btn_terms.set_cssclass("btn_WF_NoticeS");
        	this.cmt_div_terms.btn_info.set_cssclass("btn_WF_Notice");
        	
        	var nLeft = 0;
        	this.cmt_div_terms.ta_terms.move(nLeft);
        	this.cmt_div_terms.ta_terms.bringToFront();
        	this.cmt_div_terms.ta_terms.set_visible(true);
        	
        	this.cmt_div_terms.ta_info.bringToPrev();
        	this.cmt_div_terms.ta_info.set_visible(false);
        }

        this.cmt_div_terms_btn_info_onclick = function(obj,e)
        {
        	this.cmt_div_terms.btn_terms.set_cssclass("btn_WF_Notice");
        	this.cmt_div_terms.btn_info.set_cssclass("btn_WF_NoticeS");
        	
        	var nLeft = 0;
        	this.cmt_div_terms.ta_info.move(nLeft);
        	this.cmt_div_terms.ta_info.bringToFront();
        	this.cmt_div_terms.ta_info.set_visible(true);
        	
        	this.cmt_div_terms.ta_terms.bringToPrev();
        	this.cmt_div_terms.ta_terms.set_visible(false);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_terms.addEventHandler("onclick", this.btn_terms_onclick, this);
            this.btn_logout.addEventHandler("onclick", this.btn_logout_onclick, this);
            this.cmt_div_terms.btn_terms.addEventHandler("onclick", this.cmt_div_terms_btn_terms_onclick, this);
            this.cmt_div_terms.btn_info.addEventHandler("onclick", this.cmt_div_terms_btn_info_onclick, this);

        };

        this.loadIncludeScript("M_setting.xfdl");

       
    };
}
)();
