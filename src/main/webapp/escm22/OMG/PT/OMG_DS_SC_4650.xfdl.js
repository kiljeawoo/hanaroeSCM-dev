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
                this.set_name("OMG_DS_SC_4650");
                this.set_titletext("FAQ");
                this.set_name("OMG_DS_SC_6120");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static01", "absolute", "11", "23", "777", "26", null, null, this);
            obj.set_taborder("17");
            obj.set_text("자주묻는질문(FAQ)");
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

            obj = new Div("div_01", "absolute", "11", "79", "777", "84", null, null, this);
            obj.set_taborder("13");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("st_title", "absolute", "0", "0", null, "29", "0", null, this.div_01);
            obj.set_taborder("0");
            obj.set_text("회원가입 ");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("state").set("close");
            this.div_01.addChild(obj.name, obj);
            obj = new Static("st_content", "absolute", "0", "28", null, "38", "0", null, this.div_01);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_text("하나로 eSCM 상단의 가입안내 > 서비스가입안내 메뉴를 참조하시기 바랍니다.");
            obj.set_wordwrap("english");
            this.div_01.addChild(obj.name, obj);

            obj = new Div("div_02", "absolute", "11", "169", "777", "84", null, null, this);
            obj.set_taborder("14");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("st_title", "absolute", "0", "0", null, "29", "0", null, this.div_02);
            obj.set_taborder("2");
            obj.set_text("회원탈퇴");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("state").set("close");
            this.div_02.addChild(obj.name, obj);
            obj = new Static("st_content", "absolute", "0", "28", null, "38", "0", null, this.div_02);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_text("고객센터(02-1522-1211)로만 접수 가능합니다.");
            obj.set_wordwrap("english");
            this.div_02.addChild(obj.name, obj);

            obj = new Div("div_03", "absolute", "11", "259", "777", "236", null, null, this);
            obj.set_taborder("15");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("st_title", "absolute", "0", "0", null, "29", "0", null, this.div_03);
            obj.set_taborder("2");
            obj.set_text("수주내역 조회 방법");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("state").set("close");
            this.div_03.addChild(obj.name, obj);
            obj = new Static("st_content", "absolute", "0", "28", null, "190", "0", null, this.div_03);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_text("SCM > 수주업무 > 수주내역조회 메뉴를 클릭합니다.\r\n\r\n1) 권한사업장을 선택합니다. 체크박스는 본지사 통합검색 여부를 의미합니다.\r\n2) 조회할 조건을 입력합니다.\r\n    - 조회구분: 일자별, 발주처별, 소속사업장별, 상품별 중 선택\r\n    - 조회기간: 수주일, 배송요청일 중 선택\r\n3) 조회 버튼을 클릭합니다.\r\n4) 화면 중간에 조건에 맞는 수주내역이 출력됩니다.\r\n5) 수주내역을 클릭하면, 화면 하단에 상세수주내역이 출력됩니다.");
            obj.set_wordwrap("english");
            this.div_03.addChild(obj.name, obj);

            obj = new Div("div_04", "absolute", "11", "501", "777", "336", null, null, this);
            obj.set_taborder("18");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("st_title", "absolute", "0", "0", null, "29", "0", null, this.div_04);
            obj.set_taborder("5");
            obj.set_text("배송예정서 등록 방법");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("state").set("close");
            this.div_04.addChild(obj.name, obj);
            obj = new Static("st_content", "absolute", "0", "28", null, "280", "0", null, this.div_04);
            obj.set_taborder("6");
            obj.set_text("방법1. 발주참조등록: SCM > 수주업무 > 수주내역조회 메뉴를 클릭합니다.\r\n\r\n    1) 조회구분을 소속사업장별로 선택한 후 조회 버튼을 클릭합니다.\r\n    2) 화면 중간에 출력된 수주내역을 클릭하면, 화면 하단에 상세수주내역이 출력됩니다.\r\n    3) 상세수주내역에서 배송예정서작성 항목의 미작성 버튼을 클릭합니다.\r\n    4) 배송예정서일반등록 화면으로 이동되면, 배송예정일자와 상품수, 배송예정금액이 맞는지 확인 후 저장 버튼을 누릅니다.\r\n\r\n방법2. 무발주등록: SCM > 배송업무 > 배송예정서일반등록 메뉴를 클릭합니다.\r\n\r\n    1) Master 정보에서 발주처를 선택합니다.\r\n        - 발주처의 첫 번째 입력란에 발주처코드 입력 후 엔터 또는 돋보기 버튼을 클릭하여 검색\r\n    2) 상품정보에서 상품을 선택합니다.\r\n        - 상품코드의 돋보기 버튼을 클릭하여 검색\r\n    3) 상품 선택 후 배송예정량을 입력하고 행추가/수정 버튼을 클릭한 다음 저장 버튼을 누릅니다.");
            obj.set_wordwrap("english");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_04.addChild(obj.name, obj);

            obj = new Div("div_05", "absolute", "11", "833", "777", "196", null, null, this);
            obj.set_taborder("18");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("st_title", "absolute", "0", "0", null, "29", "0", null, this.div_05);
            obj.set_taborder("5");
            obj.set_text("배송예정서 수정 방법");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("state").set("close");
            this.div_05.addChild(obj.name, obj);
            obj = new Static("st_content", "absolute", "0", "28", null, "150", "0", null, this.div_05);
            obj.set_taborder("6");
            obj.set_text("SCM > 배송업무 > 배송예정서일반등록 메뉴를 클릭합니다.\r\n\r\n1) Master 정보에서 배송예정서번호의 돋보기 버튼을 클릭합니다.\r\n2) 배송예정서가 조회되면, 수정할 배송예정서를 선택한 다음 화면 하단 상품을 클릭합니다.\r\n3) 상품정보에서 배송예정량 등을 수정하고 행추가/수정 버튼을 클릭한 다음 저장 버튼을 누릅니다.\r\n\r\n※ 전표상태가 배송예정인 경우에만 수정이 가능합니다.");
            obj.set_wordwrap("english");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_05.addChild(obj.name, obj);

            obj = new Div("div_06", "absolute", "11", "1035", "777", "176", null, null, this);
            obj.set_taborder("18");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("st_title", "absolute", "0", "0", null, "29", "0", null, this.div_06);
            obj.set_taborder("5");
            obj.set_text("배송예정서 삭제 방법");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("state").set("close");
            this.div_06.addChild(obj.name, obj);
            obj = new Static("st_content", "absolute", "0", "28", null, "130", "0", null, this.div_06);
            obj.set_taborder("6");
            obj.set_text("SCM > 배송업무 > 배송예정서일반등록 메뉴를 클릭합니다.\r\n\r\n1) 배송예정서번호의 돋보기 버튼을 클릭합니다.\r\n2) 배송예정서가 조회되면, 삭제할 배송예정서를 선택한 다음 오른쪽 상단의 취소 버튼을 누릅니다.\r\n\r\n※ 전표상태가 배송예정인 경우에만 삭제가 가능합니다.");
            obj.set_wordwrap("english");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_06.addChild(obj.name, obj);

            obj = new Div("div_07", "absolute", "11", "1217", "777", "259", null, null, this);
            obj.set_taborder("19");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("st_title", "absolute", "0", "0", null, "29", "0", null, this.div_07);
            obj.set_taborder("9");
            obj.set_text("검수실적 조회 방법");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("state").set("close");
            this.div_07.addChild(obj.name, obj);
            obj = new Static("st_content", "absolute", "0", "28", null, "213", "0", null, this.div_07);
            obj.set_taborder("10");
            obj.set_text("SCM > 검수업무 > 검수실적_전표별 메뉴를 클릭합니다.\r\n\r\n1) 권한사업장을 선택합니다. 체크박스는 본지사 통합검색 여부를 의미합니다.\r\n2) 조회할 조건을 입력합니다.\r\n    - 사업장: 전체, 실매입처(실매입처 코드입력) 중 선택\r\n    - 일자구분: 매출일, 검수일, 지급예정일 중 선택하여 날짜지정\r\n    - 거래구분, 계통계약구분 선택\r\n3) 조회 버튼을 클릭합니다.\r\n4) 화면 중간에 조건에 맞는 데이터가 출력됩니다.\r\n5) 데이터를 클릭하면, 화면 하단에 상세내역이 출력됩니다.");
            obj.set_wordwrap("english");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_07.addChild(obj.name, obj);

            obj = new Div("div_08", "absolute", "11", "1482", "777", "349", null, null, this);
            obj.set_taborder("19");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("st_title", "absolute", "0", "0", null, "29", "0", null, this.div_08);
            obj.set_taborder("9");
            obj.set_text("거래관계관리 등록");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("state").set("close");
            this.div_08.addChild(obj.name, obj);
            obj = new Static("st_content", "absolute", "0", "28", null, "303", "0", null, this.div_08);
            obj.set_taborder("10");
            obj.set_text("방법1. 하나로마트거래관계등록(R2): 부가정보 > 거래관계관리 > 하나로마트거래관계등록 메뉴를 클릭합니다.\r\n\r\n    1) 수요처 첫 번째 입력란에 수요처코드 입력 또는 돋보기 버튼으로 검색합니다.\r\n    2) 조회 버튼을 클릭합니다.\r\n    3) 화면 왼쪽의 거래처 목록에서 거래관계를 등록할 거래처의 체크박스를 선택합니다.\r\n    4) 화면 오른쪽의 수요처 목록에서 하나로마트 확인 후 순번 옆에 있는 체크박스를 선택하고 저장 버튼을 누릅니다.\r\n\r\n방법2. 탄력가격업체거래관계등록(R3) : 부가정보 > 거래관계관리 > 탄력가격업체거래관계등록 메뉴를 클릭합니다.\r\n\r\n    1) 수요처 입력란에 수요처명을 2자리 이상 입력합니다.\r\n    2) 조회 버튼을 클릭합니다.\r\n    3) 화면 왼쪽의 수요처 목록에서 거래관계를 등록할 하나로마트의 체크박스를 선택합니다.\r\n    4) 화면 오른쪽의 순번 옆에 있는 체크박스를 선택하고 저장 버튼을 누릅니다.\r\n\r\n※ 거래관계등록은 등록/삭제가 하루에 한 번만 가능하며 저장 후 승인/반영까지 시간이 소요될 수 있습니다.");
            obj.set_wordwrap("english");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_08.addChild(obj.name, obj);

            obj = new Div("div_09", "absolute", "11", "1837", "777", "169", null, null, this);
            obj.set_taborder("19");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("st_title", "absolute", "0", "0", null, "29", "0", null, this.div_09);
            obj.set_taborder("9");
            obj.set_text("본사승인");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("state").set("close");
            this.div_09.addChild(obj.name, obj);
            obj = new Static("st_content", "absolute", "0", "28", null, "123", "0", null, this.div_09);
            obj.set_taborder("10");
            obj.set_text("협력업체 회원가입 시, 지사 거래처코드로 가입한 경우에는 본사의 승인이 필요합니다.\r\n\r\n1) 본사 회원ID로 로그인 후 부가정보 > 본지사관리 > 자사사용자관리 메뉴를 클릭합니다.\r\n2) 회원ID 또는 사용자명을 입력하고 조회 버튼을 클릭합니다.\r\n3) 조회된 사용자의 승인 체크박스를 선택하고 저장 버튼을 누릅니다.");
            obj.set_wordwrap("english");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_09.addChild(obj.name, obj);

            obj = new Div("div_10", "absolute", "11", "2012", "777", "219", null, null, this);
            obj.set_taborder("19");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("st_title", "absolute", "0", "0", null, "29", "0", null, this.div_10);
            obj.set_taborder("9");
            obj.set_text("세금계산서 역발행 승인, 출력");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("state").set("close");
            this.div_10.addChild(obj.name, obj);
            obj = new Static("st_content", "absolute", "0", "28", null, "173", "0", null, this.div_10);
            obj.set_taborder("10");
            obj.set_text("세금계산서 > 문서보관함 > 매출세금계산서(역발행) 메뉴를 클릭합니다.\r\n\r\n1) 조회된 미발행 세금계산서의 체크박스를 선택하고 발행을 누릅니다.\r\n2) 공인인증서 창이 뜨면, 기업용 범용공인인증서1등급 또는 전자세금계산서용 공인인증서로 인증을 합니다.\r\n3) 매출세금계산서결과 메뉴에서 조회된 세금계산서의 체크박스를 선택하고 매출(세금)계산서출력 버튼을 누릅니다.\r\n\r\n※ 세금계산서 출력 시, 매출세금계산서결과 화면의 상태값이 국세청신고완료로 선택되어있기 때문에,\r\n    세금계산서 승인 직후에는 조회가 안 됩니다. 상태값을 전체로 변경하고 조회하시면 됩니다.");
            obj.set_wordwrap("english");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_10.addChild(obj.name, obj);

            obj = new Div("div_11", "absolute", "11", "2237", "777", "199", null, null, this);
            obj.set_taborder("19");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("st_title", "absolute", "0", "0", null, "29", "0", null, this.div_11);
            obj.set_taborder("9");
            obj.set_text("하나로eSCM 이용료명세서, 세금계산서 확인");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("state").set("close");
            this.div_11.addChild(obj.name, obj);
            obj = new Static("st_content", "absolute", "0", "28", null, "153", "0", null, this.div_11);
            obj.set_taborder("10");
            obj.set_text("1) 하나로eSCM 이용료는 실제 사용이 발생된 당월에 대한 이용료를 당사 정책에 따라 익월 청구하게 됩니다.\r\n2) 이용료명세서에서 월별이용료 확인. 상세내역은 월별이용료명세서에서 확인가능합니다.\r\n3) 이용료 세금계산서는 매월 11일 발행됩니다. (11일이 휴일인 경우, 다음 영업일)\r\n4) 세금계산서 > 문서보관함 > 매입세금계산서(이용료) 메뉴에서 확인. 맨앞의 체크박스를 선택하고 매입(세금)계산서출력 버튼을 누릅니다.\r\n\r\n※ 당월 요금은 전일까지 사용분에 대한 미확정된 금액으로 보여지며, 익월요금 확정시 금액은 상이할 수 있습니다.\r\n    수정세금계산서는 익월 10일까지 접수가능하며, 이후 접수건의 경우 수정발행이 어렵습니다.");
            obj.set_wordwrap("english");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_11.addChild(obj.name, obj);

            obj = new Div("div_12", "absolute", "11", "2436", "777", "100", null, null, this);
            obj.set_taborder("25");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("st_title", "absolute", "0", "0", null, "29", "0", null, this.div_12);
            obj.set_taborder("11");
            obj.set_text("입금표 조회가 안됩니다.");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("state").set("close");
            this.div_12.addChild(obj.name, obj);
            obj = new Static("st_content", "absolute", "0", "28", null, "59", "0", null, this.div_12);
            obj.set_taborder("12");
            obj.set_text("1) 입금표는 담당 바이어가 농협 전산을 통해 등록을 해줘야만 저희 하나로eSCM에서 조회가 가능합니다.\r\n   따라서, 입금표 조회가 안될때는 담당 바이어에게 입금표 등록 여부를 확인하시면 되겠습니다.");
            obj.set_wordwrap("english");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_12.addChild(obj.name, obj);

            obj = new Div("div_13", "absolute", "11", "2540", "777", "140", null, null, this);
            obj.set_taborder("26");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("st_title", "absolute", "0", "0", null, "29", "0", null, this.div_13);
            obj.set_taborder("13");
            obj.set_text("판매정보의 상세정보 엑셀 다운로드 방법");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("state").set("close");
            this.div_13.addChild(obj.name, obj);
            obj = new Static("st_content", "absolute", "0", "28", null, "92", "0", null, this.div_13);
            obj.set_taborder("14");
            obj.set_text("판매정보 > 판매자료수신 > 일일자료 체크 후 엑셀 클릭하여 다운로드\r\n\r\n 1)일일자료 다운로드 시 조회되는 내용\r\n '매출일자', '사업장코드', '사업장명', '상품코드', '상품명', '판매수량', '판매금액', '간선여부'");
            obj.set_wordwrap("english");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_13.addChild(obj.name, obj);

            obj = new Div("div_14", "absolute", "11", "2676", "777", "124", null, null, this);
            obj.set_taborder("27");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("st_title", "absolute", "0", "0", null, "29", "0", null, this.div_14);
            obj.set_taborder("15");
            obj.set_text("역발행 세금계산서 조회가 안됩니다.");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("state").set("close");
            this.div_14.addChild(obj.name, obj);
            obj = new Static("st_content", "absolute", "0", "28", null, "76", "0", null, this.div_14);
            obj.set_taborder("16");
            obj.set_text("1) 역발행 세금계산서는 농협하나로유통 상품본부 또는마트에서 발행합니다.\r\n2) 농협하나로유통 상품본부의 역발행 세금계산서 발행 일정은 커뮤니티 > 공지사항 > 농협공지사항에서 마감 및 전자(세금)계산서 발행 일정 공지로 확인 할 수 있으며, 마트에서 발행하는 역발행 세금계산서는 해당 마트로 직접 문의하시면 되겠습니다.");
            obj.set_wordwrap("english");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_14.addChild(obj.name, obj);

            obj = new Div("div_15", "absolute", "11", "2804", "777", "184", null, null, this);
            obj.set_taborder("28");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("st_title", "absolute", "0", "0", null, "29", "0", null, this.div_15);
            obj.set_taborder("17");
            obj.set_text("수주 및 역발행 세금계산서 알람설정 방법이 있습니까?");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("state").set("close");
            this.div_15.addChild(obj.name, obj);
            obj = new Static("st_content", "absolute", "0", "28", null, "126", "0", null, this.div_15);
            obj.set_taborder("18");
            obj.set_text("모바일 앱 다운로드 하여 PUSH기능(공지사항, 수주내역, 배송예정결과오류, 반품입고내역, 매출세금계산서(역발행)) 설정 하시면 됩니다.\r\n 1) 안드로이드 : 플레이 스토어에서 \"하나로eSCM\" 으로 검색하여 설치\r\n 2) ios : ios앱 설치 링크선택 > Install을 선택하여 앱 설치 > 설정 앱 실행 - 일반 - 기기관리 - Ultari INC > 'Ultari INC'를 신뢰함 항목을터치\r\n   - 하나로eSCM 앱 실행 또는 메인화면의 모바일 앱 > QR코드로 설치");
            obj.set_wordwrap("english");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_15.addChild(obj.name, obj);

            obj = new Div("div_16", "absolute", "11", "2996", "777", "92", null, null, this);
            obj.set_taborder("29");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("st_title", "absolute", "0", "0", null, "29", "0", null, this.div_16);
            obj.set_taborder("19");
            obj.set_text("한개의 마트에 두개 이상의 지사 등록을 하고 싶습니다.");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("state").set("close");
            this.div_16.addChild(obj.name, obj);
            obj = new Static("st_content", "absolute", "0", "28", null, "38", "0", null, this.div_16);
            obj.set_taborder("20");
            obj.set_text("거래관계등록은 1:1 등록이 원칙이므로 한개의 마트에 두개 이상의 지사는 등록 할 수 없습니다.");
            obj.set_wordwrap("english");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_16.addChild(obj.name, obj);

            obj = new Div("div_17", "absolute", "11", "3084", "777", "92", null, null, this);
            obj.set_taborder("30");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("st_title", "absolute", "0", "0", null, "29", "0", null, this.div_17);
            obj.set_taborder("21");
            obj.set_text("자동 로그아웃 시간이 늘어났으면 좋겠습니다.");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("state").set("close");
            this.div_17.addChild(obj.name, obj);
            obj = new Static("st_content", "absolute", "0", "28", null, "38", "0", null, this.div_17);
            obj.set_taborder("22");
            obj.set_text("농협 표준보안정책에 의해 1시간 동안 미사용 시 자동로그아웃이 설정되어 있어 시간 연장을 할 수 없습니다.");
            obj.set_wordwrap("english");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_17.addChild(obj.name, obj);

            obj = new Div("div_18", "absolute", "11", "3180", "777", "212", null, null, this);
            obj.set_taborder("31");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("st_title", "absolute", "0", "0", null, "29", "0", null, this.div_18);
            obj.set_taborder("23");
            obj.set_text("역발행 세금계산서 발행 금액과 정산 금액이 상이합니다.");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("state").set("close");
            this.div_18.addChild(obj.name, obj);
            obj = new Static("st_content", "absolute", "0", "28", null, "157", "0", null, this.div_18);
            obj.set_taborder("24");
            obj.set_text("역발행 세금계산서 발행 금액은 전월 1일 부터 말일까지 농협으로 납품한 매출 금액이고, 정산 금액은 농협과의 계약에 따른 지급기일에 지급되는 금액이므로 상이 할 수 있습니다.\r\n\r\n 1) SCM > 검수업무에서 검색조건 일자구분을 매출일로 선택하고 전월 1일부터 말일까지 지정 후 조회 하시어 총 공급금액으로 역발행 세금계산서 발행 금액을 확인 하실 수 있습니다.\r\n 2) SCM > 검수업무에서 검색조건 일자구분을 지급예정일로 선택하고 지급일로 지정 후 조회 하시어 순공급금액으로 지급받은 금액을 확인 하실 수 있습니다.");
            obj.set_wordwrap("english");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_18.addChild(obj.name, obj);

            obj = new Div("div_19", "absolute", "11", "3396", "777", "236", null, null, this);
            obj.set_taborder("32");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("st_title", "absolute", "0", "0", null, "29", "0", null, this.div_19);
            obj.set_taborder("25");
            obj.set_text("메인창에 있는 미확인 건수가 무엇입니까?");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("state").set("close");
            this.div_19.addChild(obj.name, obj);
            obj = new Static("st_content", "absolute", "0", "28", null, "187", "0", null, this.div_19);
            obj.set_taborder("26");
            obj.set_text("미확인 건수는 농협에서 등록한 수주, 매입, 반품 등에 대해 확인하는 당일포함 전전일 기간동안 협력업체에서 확인하지 않은 건수를 나타내는 정보성 화면이며, 항목별 정보는 아래 경로로 이동하여 확인 할 수 있습니다.\r\n 1) 수주 미확인 건수 - 농협으로부터 받은 전산 수주를 확인하지 않은 건수 → 수주내역조회 화면에서 확인\r\n 2) 배송예정서 미작성 건수 - 수주내역은 확인했으나 배송예정서를 작성하지 않은 건수 → 배송예정서일반등록에서 등록\r\n 3) 반품 미확인 건수 - 농협에서 반품 등록한 건을 확인하지 않은 건수 → 검수실적_전표별 화면에서 확인\r\n 4) 반품확인서 미작성 건수 - 농협이 등록한 반품내역 중 승인이 필요한 반품 중 미승인한 건수 → 반품입고확인 등록에서 승인\r\n 5) 검수 미확인 건수 - 농협에서 검수확정하여 매입 등록한 내역을 확인하지 않은 건수 → 검수실적_전표별에서 확인\r\n 6) 세금계산서 역발행 미발행 건수 - 농협에서 역발행 등록한 세금계산서 중 승인을 하지 않은 건수 → 매출세금계산서(역발행)에서 승인\r\n");
            obj.set_wordwrap("english");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_19.addChild(obj.name, obj);

            obj = new Div("div_20", "absolute", "11", "3644", "777", "108", null, null, this);
            obj.set_taborder("33");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("st_title", "absolute", "0", "0", null, "29", "0", null, this.div_20);
            obj.set_taborder("23");
            obj.set_text("미확인 건수 클릭 시 MENU_ID를 입력하라고 나옵니다.");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("state").set("close");
            this.div_20.addChild(obj.name, obj);
            obj = new Static("st_content", "absolute", "0", "28", null, "55", "0", null, this.div_20);
            obj.set_taborder("24");
            obj.set_text("미확인 건수는 협력업체 가입회원분들에게 제공중인 서비스 입니다.\r\n가입유형을 확인 하신 후 협력업체 회원가입이 아니라면 상단의 메뉴명을 선택하여 이용하시면 됩니다.");
            obj.set_wordwrap("english");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_20.addChild(obj.name, obj);

            obj = new Div("div_21", "absolute", "11", "3756", "777", "180", null, null, this);
            obj.set_taborder("34");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("st_title", "absolute", "0", "0", null, "29", "0", null, this.div_21);
            obj.set_taborder("25");
            obj.set_text("공인인증서가 있는데 조회가 되질 않습니다. 따로 등록을 해야 하나요?");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("state").set("close");
            this.div_21.addChild(obj.name, obj);
            obj = new Static("st_content", "absolute", "0", "28", null, "127", "0", null, this.div_21);
            obj.set_taborder("26");
            obj.set_text("하나로eSCM에서는 공인인증서를 등록하는 절차는 없습니다.\r\n사용자 PC 또는 USB에 공인인증서가 있다면 자동인식 됩니다.\r\n 1) 세금계산서 역발행 시 필요한 인증서는 전자세금용 공인인증서 또는 기업용 범용 공인인증서(1등급)\r\n 2) 전자계약 시 필요한 인증서는 특수목적용 공인인증서 또는 기업용 범용 공인인증서(1등급)입니다.\r\n 3) 은행/신용카드/보험용 또는 범용개인 이면 인식이 안되므로, 보유하고 있는 인증서를 먼저 확인 하시길 바랍니다.");
            obj.set_wordwrap("english");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_21.addChild(obj.name, obj);

            obj = new Div("div_22", "absolute", "11", "3940", "777", "308", null, null, this);
            obj.set_taborder("35");
            obj.set_text("Div00");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("st_title", "absolute", "0", "0", null, "29", "0", null, this.div_22);
            obj.set_taborder("27");
            obj.set_text("배송예정서 및 하나로eSCM 각 화면의 출력이 안될 때의 조치 방법");
            obj.set_cssclass("sta_WF_Label");
            obj.getSetter("state").set("close");
            this.div_22.addChild(obj.name, obj);
            obj = new Static("st_content", "absolute", "0", "28", null, "243", "0", null, this.div_22);
            obj.set_taborder("28");
            obj.set_wordwrap("english");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_text("20년 12월 31일 이후 어도비社에서 플래시 플레이어 서비스 지원을 종료하게 되어 하나로eSCM 거래명세표를 비롯한\r\n각 화면의 출력 및 인쇄 방식이 플래시 플레이어 프로그램에서 어도비 아크로뱃 리더 프로그램으로 변경하였습니다.\r\n\r\n1. 어도비 아크로뱃 리더 프로그램 다운\r\n   https://get2.adobe.com/kr/reader/ 사이트 접속 > 다운로드 버튼 클릭하여 설치\r\n  (오퍼(옵션) 전부 체크 해제 후 다운로드 하시길 바랍니다.)\r\n\r\n2. Acrobat Reader DC 설치를 하였는데도 출력이 안될 때에는\r\n   Acrobat Reader DC 실행 > 편집 > 기본설정(기본설정이 안보일 때에는 키보드에서 Ctrl+K 단축키 사용) > 보안(고급)\r\n   > Sandbox 보호 ‘시작할 때 보호 모드 사용’ 체크 해제 > 확인 후 출력하시면 됩니다.\r\n\r\n3. 아크로뱃 리더 설정 후에도 출력이 안되시면 저희 고객센터 (02-1522-1211)로 연락 주시길 바랍니다.");
            this.div_22.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 777, 84, this.div_01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("13");
            		p.set_text("Div00");
            		p.set_scrollbars("none");

            	}
            );
            this.div_01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 777, 84, this.div_02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("14");
            		p.set_text("Div00");
            		p.set_scrollbars("none");

            	}
            );
            this.div_02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 777, 236, this.div_03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("15");
            		p.set_text("Div00");
            		p.set_scrollbars("none");

            	}
            );
            this.div_03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 777, 336, this.div_04,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("18");
            		p.set_text("Div00");
            		p.set_scrollbars("none");

            	}
            );
            this.div_04.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 777, 196, this.div_05,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("18");
            		p.set_text("Div00");
            		p.set_scrollbars("none");

            	}
            );
            this.div_05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 777, 176, this.div_06,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("18");
            		p.set_text("Div00");
            		p.set_scrollbars("none");

            	}
            );
            this.div_06.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 777, 259, this.div_07,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("19");
            		p.set_text("Div00");
            		p.set_scrollbars("none");

            	}
            );
            this.div_07.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 777, 349, this.div_08,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("19");
            		p.set_text("Div00");
            		p.set_scrollbars("none");

            	}
            );
            this.div_08.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 777, 169, this.div_09,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("19");
            		p.set_text("Div00");
            		p.set_scrollbars("none");

            	}
            );
            this.div_09.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 777, 219, this.div_10,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("19");
            		p.set_text("Div00");
            		p.set_scrollbars("none");

            	}
            );
            this.div_10.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 777, 199, this.div_11,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("19");
            		p.set_text("Div00");
            		p.set_scrollbars("none");

            	}
            );
            this.div_11.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 777, 100, this.div_12,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("25");
            		p.set_text("Div00");
            		p.set_scrollbars("none");

            	}
            );
            this.div_12.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 777, 140, this.div_13,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("26");
            		p.set_text("Div00");
            		p.set_scrollbars("none");

            	}
            );
            this.div_13.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 777, 124, this.div_14,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("27");
            		p.set_text("Div00");
            		p.set_scrollbars("none");

            	}
            );
            this.div_14.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 777, 184, this.div_15,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("28");
            		p.set_text("Div00");
            		p.set_scrollbars("none");

            	}
            );
            this.div_15.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 777, 92, this.div_16,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("29");
            		p.set_text("Div00");
            		p.set_scrollbars("none");

            	}
            );
            this.div_16.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 777, 92, this.div_17,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("30");
            		p.set_text("Div00");
            		p.set_scrollbars("none");

            	}
            );
            this.div_17.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 777, 212, this.div_18,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("31");
            		p.set_text("Div00");
            		p.set_scrollbars("none");

            	}
            );
            this.div_18.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 777, 236, this.div_19,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("32");
            		p.set_text("Div00");
            		p.set_scrollbars("none");

            	}
            );
            this.div_19.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 777, 108, this.div_20,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("33");
            		p.set_text("Div00");
            		p.set_scrollbars("none");

            	}
            );
            this.div_20.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 777, 180, this.div_21,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("34");
            		p.set_text("Div00");
            		p.set_scrollbars("none");

            	}
            );
            this.div_21.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 777, 308, this.div_22,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("35");
            		p.set_text("Div00");
            		p.set_scrollbars("none");

            	}
            );
            this.div_22.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("FAQ");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_4650.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_4650.xfdl", function(exports) {
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
        			this.lookup(com).set_height(this.lookup(com).st_title.height);
        			
        			if(num != "01")
        			{
        				preNum = nexacro.toNumber(num) - 1;
        				preObj = "div_" + String(preNum).padLeft(2, "0");
        				this.lookup(com).set_top(nexacro.toNumber(this.lookup(preObj).top) + nexacro.toNumber(this.lookup(preObj).height));
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
        		obj.parent.set_height(nexacro.toNumber(obj.height) + nexacro.toNumber(obj.parent.st_content.height) - 1);
        	}
        	else
        	{
        		obj.state = 'close';
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
        				this.lookup(com).set_top(nexacro.toNumber(this.lookup(preObj).top) + nexacro.toNumber(this.lookup(preObj).height));
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
            this.div_03.st_content.addEventHandler("onclick", this.div_03_st_content_onclick, this);
            this.div_04.st_title.addEventHandler("onclick", this.Button_onclick, this);
            this.div_05.st_title.addEventHandler("onclick", this.Button_onclick, this);
            this.div_06.st_title.addEventHandler("onclick", this.Button_onclick, this);
            this.div_07.st_title.addEventHandler("onclick", this.Button_onclick, this);
            this.div_08.st_title.addEventHandler("onclick", this.Button_onclick, this);
            this.div_09.st_title.addEventHandler("onclick", this.Button_onclick, this);
            this.div_10.st_title.addEventHandler("onclick", this.Button_onclick, this);
            this.div_11.st_title.addEventHandler("onclick", this.Button_onclick, this);
            this.div_12.st_title.addEventHandler("onclick", this.Button_onclick, this);
            this.div_13.st_title.addEventHandler("onclick", this.Button_onclick, this);
            this.div_14.st_title.addEventHandler("onclick", this.Button_onclick, this);
            this.div_15.st_title.addEventHandler("onclick", this.Button_onclick, this);
            this.div_16.st_title.addEventHandler("onclick", this.Button_onclick, this);
            this.div_17.st_title.addEventHandler("onclick", this.Button_onclick, this);
            this.div_18.st_title.addEventHandler("onclick", this.Button_onclick, this);
            this.div_19.st_title.addEventHandler("onclick", this.Button_onclick, this);
            this.div_20.st_title.addEventHandler("onclick", this.Button_onclick, this);
            this.div_21.st_title.addEventHandler("onclick", this.Button_onclick, this);
            this.div_21.st_content.addEventHandler("onclick", this.div_21_st_content_onclick, this);
            this.div_22.st_title.addEventHandler("onclick", this.Button_onclick, this);
            this.div_22.st_content.addEventHandler("onclick", this.div_22_st_content_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_4650.xfdl", true);

       
    };
}
)();
