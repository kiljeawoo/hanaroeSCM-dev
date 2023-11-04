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
                this.set_name("OMG_DS_SC_4610");
                this.set_titletext("eSCM서비스");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static98", "absolute", "11", "601", "85", "225", null, null, this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_text("SCM");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "94", "601", "396", "225", null, null, this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_text("EDI(Electronic Data Interchange)서비스로 협력업체 거래 업무에 필요한 각종 EDI문서를 실시간으로 서비스 제공\r\n");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "489", "601", "298", "29", null, null, this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_text("수주업무 (수주내역조회)");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "489", "629", "298", "29", null, null, this);
            obj.set_taborder("10");
            obj.set_text("행사업무 (예약행사/수주내역/현황조회)");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "489", "657", "298", "29", null, null, this);
            obj.set_taborder("11");
            obj.set_text("배송업무 (배송예정서등록/배송예졍서조회)");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "489", "685", "298", "29", null, null, this);
            obj.set_taborder("12");
            obj.set_text("입고예약업무 (입고예약등록/공급처차량관리)");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "489", "713", "298", "29", null, null, this);
            obj.set_taborder("13");
            obj.set_text("검수업무 (검수실적조회)");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "489", "741", "298", "29", null, null, this);
            obj.set_taborder("14");
            obj.set_text("반품업무 (반품입고조회/반품입고확인등록)");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "11", "825", "85", "314", null, null, this);
            obj.set_taborder("15");
            obj.set_text("부가정보");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "94", "825", "396", "314", null, null, this);
            obj.set_taborder("16");
            obj.set_text("각종 현황정보를 조회할 수 있는 서비스로 주로 일 배치성의 정보이며, 거래관계관리 및 본지사관리, 상품정보관리등의 서비스 제공\r\n");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "489", "797", "298", "29", null, null, this);
            obj.set_taborder("17");
            obj.set_text("결품업무 (결품패널티/결품내역등록/결품내역조회)");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "489", "825", "298", "29", null, null, this);
            obj.set_taborder("18");
            obj.set_text("판매정보 (일자별/기간별/상품별)");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "489", "853", "298", "29", null, null, this);
            obj.set_taborder("19");
            obj.set_text("재고정보 (일자별/기간별/상품별)");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "489", "881", "298", "29", null, null, this);
            obj.set_taborder("20");
            obj.set_text("납품정보 (일자별/기간별/상품별)");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "489", "909", "298", "29", null, null, this);
            obj.set_taborder("21");
            obj.set_text("잔액장정보 (일잔액장/월잔액장/일선수금원장)");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "489", "937", "298", "29", null, null, this);
            obj.set_taborder("22");
            obj.set_text("정산정보 (외상매출/세무매출,매입/장려금)");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "489", "1166", "298", "29", null, null, this);
            obj.set_taborder("23");
            obj.set_text("정보분석 (판매추이, 재고추이)");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "489", "1138", "298", "29", null, null, this);
            obj.set_taborder("24");
            obj.set_text("BI조회 (매출추이, TOP10)");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "489", "1049", "298", "29", null, null, this);
            obj.set_taborder("25");
            obj.set_text("할인쿠폰 (할인쿠폰 등록/조회)");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "489", "1021", "298", "29", null, null, this);
            obj.set_taborder("26");
            obj.set_text("상품정보관리 (기준정보/공급가격)");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "489", "965", "298", "29", null, null, this);
            obj.set_taborder("27");
            obj.set_text("거래관계관리 (거래관계조회/사업장조회)");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "11", "1138", "85", "85", null, null, this);
            obj.set_taborder("28");
            obj.set_text("정보분석");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "94", "1138", "396", "85", null, null, this);
            obj.set_taborder("29");
            obj.set_text(" 요구 상황별 분석능력 향상 가능한 자료 제공 기간별/ 상품별/ 점포별로 매출추이 분석에 따른 시장 동향파악 가능 상위 TOP10 분석을 통해 최근 인기상품에 대한 트랜드 파악");
            obj.set_wordwrap("english");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "489", "1194", "298", "29", null, null, this);
            obj.set_taborder("30");
            obj.set_text("시장분석 (시장점유율/판매순위/경쟁사시장분석)");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "489", "573", "298", "29", null, null, this);
            obj.set_taborder("31");
            obj.set_text("제공서비스");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "94", "573", "396", "29", null, null, this);
            obj.set_taborder("32");
            obj.set_text("업무내용");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "11", "573", "84", "29", null, null, this);
            obj.set_taborder("33");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "11", "547", "777", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_text("제공서비스 내용");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00", "absolute", "11", "228", "777", "314", null, null, this);
            obj.set_image("URL('theme://images/img_eSCMinfo.png')");
            obj.set_stretch("fixaspectratio");
            obj.style.set_border("0 solid #bfbfbfff");
            obj.set_taborder("5");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "11", "72", "777", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_text("서비스 개요");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01", "absolute", "11", "142", "777", "81", null, null, this);
            obj.set_imagealign("left middle");
            obj.set_stretch("fixaspectratio");
            obj.style.set_border("0 solid #bfbfbfff");
            obj.style.set_align("left middle");
            obj.set_image("URL('theme://images/img_sentence1.png')");
            obj.set_taborder("4");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "489", "993", "298", "29", null, null, this);
            obj.set_taborder("34");
            obj.set_text("본지사관리 (자사정보조회/본지사조회/본사승인)");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "11", "54", "777", "1", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Menulist");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "11", "23", "777", "26", null, null, this);
            obj.set_taborder("0");
            obj.set_text("eSCM서비스");
            obj.style.set_font("12 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea00", "absolute", "11", "98", "777", "39", null, null, this);
            obj.set_taborder("3");
            obj.set_text("하나로 eSCM서비스는 다양한 유통환경에 변화에 따른 협력업체의 다양한 요구사항을 수용할 수 있는 시스템으로 SCM정보, 부가정보, 정보분석 등의  다양한 정보를 제공하는 서비스입니다.");
            obj.set_wordwrap("char");
            obj.getSetter("readonly").set("true");
            obj.style.set_border("1 none #bfbfbfff");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "787", "0", "15", "490", null, null, this);
            obj.set_taborder("35");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "489", "769", "298", "29", null, null, this);
            obj.set_taborder("36");
            obj.set_text("출고정보 (물류센터/주류물류센터)");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "489", "1324", "298", "29", null, null, this);
            obj.set_taborder("37");
            obj.set_text("배송업무 (배송예정서 등록/배송예정서 조회)");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "489", "1296", "298", "29", null, null, this);
            obj.set_taborder("38");
            obj.set_text("수주업무 (수주내역 조회)");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "11", "1296", "85", "169", null, null, this);
            obj.set_taborder("39");
            obj.set_text("모바일");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "94", "1296", "396", "169", null, null, this);
            obj.set_taborder("40");
            obj.set_text("모바일에서 기본적인 업무가 가능하도록 서비스 제공");
            obj.set_wordwrap("english");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "489", "1352", "298", "29", null, null, this);
            obj.set_taborder("41");
            obj.set_text("검수업무 (전표별/직송분)");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "489", "1380", "298", "29", null, null, this);
            obj.set_taborder("42");
            obj.set_text("반품업무 (반품입고내역 조회)");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "489", "1408", "298", "29", null, null, this);
            obj.set_taborder("43");
            obj.set_text("회계업무 (세금계산서/잔액장/이용료명세서)");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "489", "1436", "298", "29", null, null, this);
            obj.set_taborder("44");
            obj.set_text("기타업무 (공지사항/설정)");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "11", "1464", "85", "309", null, null, this);
            obj.set_taborder("45");
            obj.set_text("XML/EDI\r\n(EDI 연계)");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "94", "1464", "693", "309", null, null, this);
            obj.set_taborder("46");
            obj.set_text("하나로 eSCM에서는 EDI로 SCM,부가정보 등을 제공하고 있습니다.\r\n희망업체는 아래절차로 신청 하시면 됩니다. (서비스 제공 비용은 서비스이용료 안내 참고)\r\n\r\n1. 하나로유통eSCM_EDI연계약정 sheet를 다운로드하여 작성해 주세요. (첨부파일의 3개 탭의 노란색 컬럼에 내용 기입)\r\n   - 첨부파일은 eSCM공지사항 게시판의 신규 EDI 연계 절차안내 참고\r\n\r\n2. 신규 연계 요청 메일을 작성하여 위 연계약정 sheet를 첨부하여 이메일 주소 'nhescm@esumtech.com'로 발송해 주세요.  신규 연계 요청 메일은 별다른 형식은 없으며, 연계 오픈을 원하는 일자 및 담당자 연락처를 적어주시면 됩니다.\r\n\r\n3. 연계 요청이 접수되면 eSCM 인터페이스 담당자가 영업일 2일 이내에 연락을 드려 차후 일정을 협의하게 됩니다.  이후 일정은 다음과 같이 진행됩니다.\r\n   - eSCM 배포 연계 모듈을 사용하시는 경우 배포 모듈 설치 진행\r\n   - eSCM 개발 시스템과 요청업체 연계 소프트웨어 간 통신 테스트(SFTP)\r\n   - 데이터 연계 테스트 및 요청업체 내부 업무 개발\r\n   - 운영 전환");
            obj.set_wordwrap("english");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "489", "1222", "298", "29", null, null, this);
            obj.set_taborder("47");
            obj.set_text("관심업체 등록 (관심상품등록 업체별/카테고리별)");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "489", "1250", "298", "47", null, null, this);
            obj.set_taborder("48");
            obj.set_text("판매정보조회 (월별 카테고리 판매정보/주별 카테고리 판매정보)");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "11", "1222", "85", "75", null, null, this);
            obj.set_taborder("49");
            obj.set_text("판매상세\r\n정보");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "94", "1222", "396", "75", null, null, this);
            obj.set_taborder("50");
            obj.set_text("자사 및 타사상품의 농협  POS판매현황을 제공함\r\n(현재시점에서 6개월 전까지의 데이터 조회 가능)");
            obj.set_wordwrap("english");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "489", "1077", "298", "62", null, null, this);
            obj.set_taborder("51");
            obj.set_text("데이터마트 (검수 업무의 전표별 및 상품별의 엑셀 자료를 기간 제약 없이 데이터 신청 후 텍스트 파일로 다운로드)\r\n");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("eSCM서비스");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_4610.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_4610.xfdl", function(exports) {
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

        
         
        this.Static02_onclick = function(obj,e)
        {
        	
        }

        this.Static47_onclick = function(obj,e)
        {
        	
        }

        this.Static41_onclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Static03.addEventHandler("onclick", this.Static03_onclick, this);
            this.Static01.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static02.addEventHandler("onclick", this.Static02_onclick, this);
            this.Static41.addEventHandler("onclick", this.Static41_onclick, this);
            this.Static47.addEventHandler("onclick", this.Static47_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_4610.xfdl", true);

       
    };
}
)();
