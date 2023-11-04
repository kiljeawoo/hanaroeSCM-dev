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
                this.set_name("OMG_DS_SC_4622");
                this.set_titletext("개인정보처리방침");
                this.set_name("OMG_DS_SC_6120");
                this._setFormPosition(0,0,803,2000);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static01", "absolute", "11", "54", "777", "1", null, null, this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_Menulist");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "11", "23", "777", "26", null, null, this);
            obj.set_taborder("0");
            obj.set_text("개인정보처리방침");
            obj.style.set_font("12 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea00", "absolute", "11", "70", "777", "192", null, null, this);
            obj.set_taborder("12");
            obj.set_text("(주)이썸테크(이하 ‘이썸테크’라 합니다)는 「개인정보 보호법」 제30조 제1항 및 동법 시행령 제31조 제1항의 규정에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보취급(처리)방침을 수립 공개합니다.\r\n\r\n ∙ 개인정보란 생존하는 개인에 관한 정보로서 당해 정보에 포함되어 있는 성명, 주민등록 번호 등의 사항에 의하여 당해 개인을 식별할 수 있는 정보 (당해 정보만으로는 특정 개인을 식별할 수 없더라도 다른 정보와 용이하게 결합하여 식별할 수 있는 것을 포함합니다)를 말합니다.\r\n\r\n  ∙ 하나로 eSCM 사이트는 귀하의 개인정보보호를 매우 중요시하며, 『정보통신망이용촉진 및 정보보호에 관한법률』 상의 개인정보보호규정 및 정보통신부가 제정한 『개인정보보호지침』 을 준수하고 있습니다.\r\n 하나로 eSCM 사이트는 개인정보보호정책을 통하여 귀하께서 제공하는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.");
            obj.set_wordwrap("char");
            obj.style.set_border("1 none #bfbfbfff");
            obj.style.set_padding("2 0 0 0");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "11", "278", "777", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_text("제 1 조 (개인정보의 처리목적) ");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea01", "absolute", "11", "304", "777", "260", null, null, this);
            obj.set_taborder("14");
            obj.set_text("‘이썸테크’는 다음의 목적을 위하여 개인정보를 처리합니다.\r\n처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.\r\n\r\n 1. 서비스 제공\r\n  - 발주 등의 EDI문서 연계 서비스 제공 및 서비스 사용료 정산, 요금 결제, 채권관리에 활용\r\n  - 업무와 관련된 통계자료 작성 및 서비스 개발\r\n  - 금융결제원의 자동이체 출금 서비스를 이용한 서비스 사용료 결제(자동이체)에 활용\r\n  - 계약상담 시 담당자와 바이어 간 상담진행을 위한 연락에 활용\r\n\r\n 2. 고객상담\r\n  - 서비스 제공을 위한 고객센터 운영의 목적으로 활용\r\n  - 공지/불만처리 등을 위한 원활한 의사소통의 경로 확보");
            obj.set_wordwrap("char");
            obj.style.set_padding("4 0 0 0");
            obj.style.set_border("2 dotted #bfbfbfff");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            obj.getSetter("scrollbars").set("autoboth");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea02", "absolute", "11", "604", "777", "104", null, null, this);
            obj.set_taborder("15");
            obj.set_text("‘이썸테크’는 법령에 따른 개인정보 보유 이용 기간 또는 정보 주체로부터 개인정보를 수집 시 동의 받은 개인정보 보유 이용기간 내에서 개인정보를 처리 보유합니다. 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.\r\n\r\n - 서비스 제공\r\n   데이터연계 및 부가서비스 제공에 활용 : 서비스 탈퇴 및 보유 데이터 파기 시 까지");
            obj.set_wordwrap("char");
            obj.style.set_padding("4 0 0 0");
            obj.style.set_border("2 dotted #bfbfbfff");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "11", "578", "777", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_text("제 2 조 (개인정보의 처리 및 보유기간)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea03", "absolute", "11", "744", "777", "66", null, null, this);
            obj.set_taborder("17");
            obj.set_text("‘이썸테크’는 정보주체의 개인정보를 제1조(개인정보의 처리목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 「개인정보 보호법」 제17조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.");
            obj.set_wordwrap("char");
            obj.style.set_padding("4 0 0 0");
            obj.style.set_border("2 dotted #bfbfbfff");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "11", "718", "777", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_text("제 3 조 (개인정보의 제3자 제공)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea04", "absolute", "11", "846", "777", "300", null, null, this);
            obj.set_taborder("19");
            obj.set_text(" 1. ‘이썸테크’는 원활한 개인정보 업무 처리를 위하여 다음과 같이 개인정보 처리 업무를 위탁하고 있습니다.\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n 2. 회사는 위탁계약 체결 시 「개인정보 보호법」 제25조에 따라 위탁업무 수행목적 외 개인정보 처리 금지, 기술적∙관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리∙감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.\r\n\r\n 3. 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체 없이 본 개인정보취급(처리)방침을 통하여 공지하도록 하겠습니다.");
            obj.set_wordwrap("char");
            obj.style.set_padding("4 0 0 0");
            obj.style.set_border("2 dotted #bfbfbfff");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "11", "820", "777", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_text("제 4 조 (개인정보 처리의 위탁)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea05", "absolute", "11", "1184", "777", "293", null, null, this);
            obj.set_taborder("21");
            obj.set_text(" 1. 정보 주체는 ‘이썸테크’에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.\r\n  - 개인정보 열람요구\r\n  - 오류 등이 있을 경우 정정 요구\r\n  - 삭제요구\r\n  - 처리정지 요구\r\n\r\n 2. 제 1항에 따른 권리 행사는 ‘이썸테크’에 대해 서면, 전화,전자우편,모사전송(FAX) 등을 통하여 하실 수 있으며, ‘이썸테크’는 이에 대해 지체 없이 조치하겠습니다.\r\n\r\n 3. 정보 주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 ‘이썸테크’는 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다.\r\n\r\n 4. 제 1항에 따른 권리 행사는 정보 주체의 법정 대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다.\r\n    이 경우 「개인정보 보호법」 시행규칙 별지 제 11호 서식에 따른 위임장을 제출하셔야 합니다.");
            obj.set_wordwrap("char");
            obj.style.set_padding("4 0 0 0");
            obj.style.set_border("2 dotted #bfbfbfff");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "11", "1158", "777", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_text("제 5 조 (정보 주체의 권리·의무 및 행사 방법)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea06", "absolute", "11", "1510", "777", "238", null, null, this);
            obj.set_taborder("23");
            obj.set_text("‘이썸테크’는 다음과 같은 개인정보 항목을 처리하고 있습니다.\r\n\r\n 1. 필수정보\r\n  - 아이디,비밀번호,성명,연락처,이메일 주소\r\n\r\n 2. 선택정보 (사용료 납부∙결제 방식 자동이체 출금서비스 선택 시 또는 모바일 서비스 이용 시)\r\n  - 자동이체 : 계좌번호, 생년월일\r\n  - 모바일 서비스 : 모바일 디바이스의 기기 고유번호 (단말기 아이디,IMEI 등)\r\n\r\n 3. 서비스 이용 과정에서 아래 개인정보 항목이 자동으로 생성되어 수집될 수 있습니다.\r\n  - 웹사이트 : 서비스 이용 기록, 접속로그, 방문기록, 쿠키, IP정보 등\r\n  - 모바일앱 : 서비스 이용 기록, 접속로그 등");
            obj.set_wordwrap("char");
            obj.style.set_padding("4 0 0 0");
            obj.style.set_border("2 dotted #bfbfbfff");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "11", "1484", "777", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_text("제 6 조 (처리하는 개인정보 항목)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea07", "absolute", "11", "1781", "777", "316", null, null, this);
            obj.set_taborder("25");
            obj.set_text(" 1. ‘이썸테크’는 개인정보 보유 기간의 경과, 처리 목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.\r\n\r\n 2. 정보 주체로부터 동의 받은 개인정보 보유 기간이 경과하거나 처리 목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관 장소를 달리하여 보존합니다.\r\n\r\n 3. 개인정보 파기의 절차 및 방법은 다음과 같습니다.\r\n \r\n   - 파기절차\r\n    ‘이썸테크’는 파기 사유가 발생한 개인정보를 선정하고, ‘이썸테크’의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.\r\n\r\n   - 파기방법\r\n    ‘이썸테크’는 전자적 파일 형태로 기록∙저장된 개인정보는 기록을 재생할 수 없도록 기술적 방법을 이용하여 파기하며, 종이 문서에 기록∙저장된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.\r\n\r\n 4. 개인정보 정정·삭제 요구에 대한 결과의 통지, 법 제37조제5항과 영 제44조제2항에 따른 개인정보 처리정지 요구에 대한 결과의 통지는 별지 제10호 서식의 개인정보 정정·삭제, 처리정지 요구에 대한 결과 통지서에 따릅니다.");
            obj.set_wordwrap("char");
            obj.style.set_padding("4 0 0 0");
            obj.style.set_border("2 dotted #bfbfbfff");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "11", "1755", "777", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_text("제 7 조 (개인정보의 파기)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea08", "absolute", "11", "2133", "777", "124", null, null, this);
            obj.set_taborder("27");
            obj.set_text("‘이썸테크’는 개인정보의 안정성 확보를 위해 다음과 같은 조치를 취하고 있습니다.\r\n\r\n 1. 관리적 조치 : 내부관리계획 수립∙시행, 정기적 직원 교육 등\r\n 2. 기술적 조치 :  개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 모든 개인정보 항목의 암호화, 보안프로그램 설치\r\n 3. 물리적 조치 :  전산실, 자료보관실 등의 접근 통제");
            obj.set_wordwrap("char");
            obj.style.set_padding("4 0 0 0");
            obj.style.set_border("2 dotted #bfbfbfff");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "11", "2107", "777", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_text("제 8 조 (개인정보의 안정성 확보 조치)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "11", "2267", "777", "21", null, null, this);
            obj.set_taborder("29");
            obj.set_text("제 9 조 (개인정보 보호책임자)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea09", "absolute", "11", "2293", "777", "272", null, null, this);
            obj.set_taborder("30");
            obj.set_text("‘이썸테크’는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보 주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.\r\n\r\n 1. 개인정보 보호 책임자\r\n  - 성명 : 이종률 / 소속 : 이썸테크\r\n  - 직책 : 상무\r\n  - 연락처 : 02-1522-1211\r\n\r\n 2. 개인정보 보호 담당자\r\n  - 성명 : 백종엽 / 소속 : 이썸테크\r\n  - 연락처 : 02-1522-1211, bjy@esumtech.com, <팩스 02-318-3456>\r\n\r\n정보 주체는 ‘이썸테크’의 서비스를 이용하면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다.");
            obj.set_wordwrap("char");
            obj.style.set_padding("4 0 0 0");
            obj.style.set_border("2 dotted #bfbfbfff");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "11", "2573", "777", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("제 10 조 (개인정보 열람청구)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea10", "absolute", "11", "2599", "777", "132", null, null, this);
            obj.set_taborder("32");
            obj.set_text("정보 주체는 「개인정보 보호법」 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다. ‘이썸테크’는 정보 주체의 개인정보 열람청구가 신속하게 처리되도록 노력하겠습니다.\r\n\r\n개인정보 열람청구 접수∙처리 부서\r\n  - 성명 : 백종엽 / 소속 : 이썸테크\r\n  - 연락처 : 02-1522-1211, bjy@esumtech.com, <팩스 02-318-3456>");
            obj.set_wordwrap("char");
            obj.style.set_padding("4 0 0 0");
            obj.style.set_border("2 dotted #bfbfbfff");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "11", "2737", "777", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("제 11 조 (권익침해 구제 방법)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea11", "absolute", "11", "2763", "777", "323", null, null, this);
            obj.set_taborder("34");
            obj.set_text("정보주체는 아래의 기관에 대해 개인정보 침해에 대한 피해구제, 상담 등을 문의하실 수 있습니다.\r\n\r\n<아래의 기관은 ‘이썸테크’와는 별개의 기관으로서, ‘이썸테크’의 자체적인 개인정보 불만처리, 피해구제 결과에 만족하지 못하시거나 보다 자세한 도움이 필요하시면 문의하여 주시기 바랍니다>\r\n\r\n 1. 개인정보 침해신고센터 (한국인터넷진흥원 운영)\r\n  - 소관업무 : 개인정보 침해사실 신고, 상담 신청\r\n  - 홈페이지 : privacy.kisa.or.kr\r\n  - 전화 : (국번없이) 118\r\n  - 주소 : (138-950) 서울시 송파구 중대로 135 한국인터넷진흥원 개인정보침해신고센터\r\n\r\n 2. 개인정보 분쟁조정위원회 (한국인터넷진흥원 운영)\r\n  - 소관업무 : 개인정보 분쟁조정신청, 집단분쟁조정 (민사적 해결)\r\n  - 홈페이지 : privacy.kisa.or.kr\r\n  - 전화 : (국번없이) 118\r\n  - 주소 : (138-950) 서울시 송파구 중대로 135 한국인터넷진흥원 개인정보침해신고센터");
            obj.set_wordwrap("char");
            obj.style.set_padding("4 0 0 0");
            obj.style.set_border("2 dotted #bfbfbfff");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "11", "3093", "777", "21", null, null, this);
            obj.set_taborder("35");
            obj.set_text("제 12 조 (고지의 의무)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea12", "absolute", "11", "3119", "777", "60", null, null, this);
            obj.set_taborder("36");
            obj.set_text("개인정보취급(처리)방침 내용의 추가, 삭제 및 수정이 있을 시에는 개정 최소 7일 전부터 홈페이지의 공지사항을 통하여 고지할 것입니다. 다만, 이용자에게 불리하게 개인정보취급(처리)방침 내용을 변경하는 경우에는 최소한 30일 이상의 사전 유예 기간을 두고 공지하겠습니다.");
            obj.set_wordwrap("char");
            obj.style.set_padding("4 0 0 0");
            obj.style.set_border("2 dotted #bfbfbfff");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea13", "absolute", "11", "3205", "150", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_text("2015년 11월 2일 제정");
            obj.set_wordwrap("char");
            obj.style.set_padding("4 0 0 0");
            obj.style.set_border("1 none #bfbfbfff");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "787", "0", "15", "490", null, null, this);
            obj.set_taborder("38");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("st_title", "absolute", "30", "880", "200", "29", null, null, this);
            obj.set_taborder("39");
            obj.set_text("수탁업체");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("state").set("close");
            this.addChild(obj.name, obj);

            obj = new Static("st_content", "absolute", "30", "908", "200", "60", null, null, this);
            obj.set_taborder("40");
            obj.set_text("금융결제원,\r\n쿠콘(구KIBNET)");
            obj.set_wordwrap("english");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("st_title00", "absolute", "229", "880", "200", "29", null, null, this);
            obj.set_taborder("41");
            obj.set_text("위탁업무 내용");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("state").set("close");
            this.addChild(obj.name, obj);

            obj = new Static("st_content00", "absolute", "229", "908", "200", "60", null, null, this);
            obj.set_taborder("42");
            obj.set_text("자동이체(CMS) 은행계좌\r\n등록 및 해지, 사용료 출금");
            obj.set_wordwrap("english");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("st_title01", "absolute", "428", "880", "200", "29", null, null, this);
            obj.set_taborder("43");
            obj.set_text("보유/이용 기간");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("state").set("close");
            this.addChild(obj.name, obj);

            obj = new Static("st_content01", "absolute", "428", "908", "200", "60", null, null, this);
            obj.set_taborder("44");
            obj.set_text("CMS 출금이체 신청일로부터\r\n종료(해지) 일 후 5년까지");
            obj.set_wordwrap("english");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("st_content02", "absolute", "30", "967", "200", "60", null, null, this);
            obj.set_taborder("45");
            obj.set_text("농협 중앙회, 경제지주, 금융지주 및 계열사와 관계사, 신세계아이앤씨");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("st_content03", "absolute", "428", "967", "200", "60", null, null, this);
            obj.set_taborder("46");
            obj.set_text("가입 일로부터 회원 탈퇴 시까지");
            obj.set_wordwrap("english");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("st_content04", "absolute", "229", "967", "200", "60", null, null, this);
            obj.set_taborder("47");
            obj.set_text("문자, 알림톡 전송");
            obj.set_wordwrap("english");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea18", "absolute", "11", "3230", "150", "21", null, null, this);
            obj.set_taborder("52");
            obj.set_text("2019년 8월 19일 개정");
            obj.set_wordwrap("char");
            obj.style.set_padding("4 0 0 0");
            obj.style.set_border("1 none #bfbfbfff");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_history01", "absolute", "165", "3205", "150", "21", null, null, this);
            obj.set_taborder("53");
            obj.set_text("제정 내용 보기 >");
            obj.set_wordwrap("char");
            obj.style.set_border("1 none #bfbfbfff");
            obj.style.set_color("#40b3ccff");
            obj.style.set_padding("4 0 0 0");
            obj.style.set_align("left middle");
            obj.style.set_cursor("pointer");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_history02", "absolute", "165", "3230", "150", "21", null, null, this);
            obj.set_taborder("58");
            obj.set_text("개정사항 비교표 보기 >");
            obj.set_wordwrap("char");
            obj.style.set_border("1 none #bfbfbfff");
            obj.style.set_color("#40b3ccff");
            obj.style.set_padding("4 0 0 0");
            obj.style.set_align("left middle");
            obj.style.set_cursor("pointer");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea14", "absolute", "11", "3255", "150", "21", null, null, this);
            obj.set_taborder("59");
            obj.set_text("2021년 11월 1일 개정");
            obj.set_wordwrap("char");
            obj.style.set_padding("4 0 0 0");
            obj.style.set_border("1 none #bfbfbfff");
            obj.style.set_align("left middle");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_history03", "absolute", "165", "3255", "150", "21", null, null, this);
            obj.set_taborder("60");
            obj.set_text("개정사항 비교표 보기 >");
            obj.set_wordwrap("char");
            obj.style.set_border("1 none #bfbfbfff");
            obj.style.set_color("#40b3ccff");
            obj.style.set_padding("4 0 0 0");
            obj.style.set_align("left middle");
            obj.style.set_cursor("pointer");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 2000, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("개인정보처리방침");

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
        this.addIncludeScript("OMG_DS_SC_4622.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_4622.xfdl", function() {
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

        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.history_onclick = function(obj,e)
        {
        	if (obj.id == "sta_history01") {
        		window.open("https://www.nhescm.co.kr/escm/privacy/20151102.html"); // 제정 내용
        	} else if (obj.id == "sta_history02") {
        		this.fn_openHistoryPopup("20190819");
        	} else if (obj.id == "sta_history03") {
        		this.fn_openHistoryPopup("20211101");
        	}
        }

        this.fn_openHistoryPopup = function(hdate)
        {
        	var oArg = {hdate:hdate};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("POPUP_PRIVACY","POPUP::POPUP_PRIVACY.xfdl",oArg,sOption,sPopupCallBack);	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.st_title.addEventHandler("onclick", this.Button_onclick, this);
            this.st_title00.addEventHandler("onclick", this.Button_onclick, this);
            this.st_title01.addEventHandler("onclick", this.Button_onclick, this);
            this.sta_history01.addEventHandler("onclick", this.history_onclick, this);
            this.sta_history02.addEventHandler("onclick", this.history_onclick, this);
            this.sta_history03.addEventHandler("onclick", this.history_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_4622.xfdl");

       
    };
}
)();
