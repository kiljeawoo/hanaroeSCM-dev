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
                this.set_name("OMG_DS_SC_4611");
                this.set_titletext("전자세금계산서서비스");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static03", "absolute", "11", "278", "777", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_text("서비스개요");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00", "absolute", "11", "379", "777", "350", null, null, this);
            obj.set_taborder("20");
            obj.set_image("URL('theme://images/img_tax1.png')");
            obj.set_stretch("fixaspectratio");
            obj.style.set_border("0 solid #bfbfbfff");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "11", "739", "301", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_text("정발행 세금계산서");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "11", "1125", "777", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_text("제공서비스내용");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static98", "absolute", "11", "1173", "162", "57", null, null, this);
            obj.set_taborder("30");
            obj.set_text("문서보관함");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "172", "1173", "219", "29", null, null, this);
            obj.set_taborder("31");
            obj.set_text("매출보관함");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "390", "1173", "398", "29", null, null, this);
            obj.set_taborder("32");
            obj.set_text("농협에서 협력업체에 보내는 역발행 세금계산서");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "390", "1201", "398", "29", null, null, this);
            obj.set_taborder("33");
            obj.set_text("하나로eSCM 서비스 이용료 청구 세금계산서");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "390", "1229", "398", "70", null, null, this);
            obj.set_taborder("34");
            obj.set_text("매출세금계산서 총합계\r\n국세청에 신고된 전자세금계산서 현황\r\n국세청에 미신고된 전자세금계산서 현황");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "390", "1298", "398", "70", null, null, this);
            obj.set_taborder("35");
            obj.set_text("매입세금계산서 총합계\r\n국세청에 신고된 전자세금계산서 현황\r\n국세청에 미신고된 전자세금계산서 현황");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "390", "1367", "398", "29", null, null, this);
            obj.set_taborder("36");
            obj.set_text("국세청에 신고된 현황조회");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "390", "1395", "398", "29", null, null, this);
            obj.set_taborder("37");
            obj.set_text("국세청 신고 실패문서 재서명");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "11", "1229", "162", "139", null, null, this);
            obj.set_taborder("38");
            obj.set_text("매출/매입 합계표");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "172", "1367", "219", "29", null, null, this);
            obj.set_taborder("39");
            obj.set_text("신고현황");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "390", "1145", "398", "29", null, null, this);
            obj.set_taborder("55");
            obj.set_text("주요기능");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "172", "1145", "219", "29", null, null, this);
            obj.set_taborder("56");
            obj.set_text("중분류");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "11", "1145", "162", "29", null, null, this);
            obj.set_taborder("57");
            obj.set_text("대분류");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "172", "1201", "219", "29", null, null, this);
            obj.set_taborder("58");
            obj.set_text("매입보관함");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "172", "1229", "219", "70", null, null, this);
            obj.set_taborder("59");
            obj.set_text("매출합계표");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "172", "1298", "219", "70", null, null, this);
            obj.set_taborder("60");
            obj.set_text("매입합계표");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "11", "1367", "162", "57", null, null, this);
            obj.set_taborder("61");
            obj.set_text("국세청 신고관리");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "172", "1395", "219", "29", null, null, this);
            obj.set_taborder("62");
            obj.set_text("신고실패문서 재서명");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "11", "353", "211", "21", null, null, this);
            obj.set_taborder("65");
            obj.set_text("역발행 세금계산서");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea00", "absolute", "11", "304", "777", "39", null, null, this);
            obj.set_taborder("4");
            obj.set_text("하나로 eSCM 전자세금계산서 시스템은 농협경제통합시스템에서 전송된 역발행 세금계산서의 처리와 서비스이용료에 대한 정발행 세금계산서 처리를 지원합니다.");
            obj.set_wordwrap("char");
            obj.style.set_border("1 none #bfbfbfff");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "11", "54", "777", "1", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Menulist");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "11", "23", "777", "26", null, null, this);
            obj.set_taborder("0");
            obj.set_text("전자세금계산서서비스");
            obj.style.set_font("12 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01", "absolute", "11", "765", "777", "350", null, null, this);
            obj.set_taborder("69");
            obj.set_image("URL('theme://images/img_tax2.png')");
            obj.set_stretch("fixaspectratio");
            obj.style.set_border("0 solid #bfbfbfff");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "11", "72", "777", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_text("국세청 전자세금계산서 관련 주요 법령");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "11", "98", "164", "29", null, null, this);
            obj.set_taborder("3");
            obj.set_text("구분");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "174", "98", "614", "29", null, null, this);
            obj.set_taborder("72");
            obj.set_text("내용");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "11", "126", "164", "29", null, null, this);
            obj.set_taborder("73");
            obj.set_text("의무발행대상자");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "174", "126", "614", "29", null, null, this);
            obj.set_taborder("74");
            obj.set_text("법인사업자, 직전연도 공급가액 합계 3억원 이상 개인사업자");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "174", "154", "614", "58", null, null, this);
            obj.set_taborder("75");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            obj.set_text("전자세금계산서 미발급시 2%(수취자: 과세기간 경과후 수취시 매입세액 불공제), 지연발급시 1%(수취자:0.5%)\r\n미전송시 법인 0.5% / 개인 0.5%, 지연전송시 법인 0.3% / 개인 0.3%  가산세 부과");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "11", "154", "164", "58", null, null, this);
            obj.set_taborder("76");
            obj.set_text("가산세 부과");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "11", "211", "164", "29", null, null, this);
            obj.set_taborder("77");
            obj.set_text("보관의무 면제");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "174", "211", "614", "29", null, null, this);
            obj.set_taborder("78");
            obj.set_text("전자세금계산서를 국세청장에게 전송하는 경우 보관의무 면제");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "11", "239", "164", "29", null, null, this);
            obj.set_taborder("79");
            obj.set_text("발행세액 면제");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "174", "239", "614", "29", null, null, this);
            obj.set_taborder("80");
            obj.set_text("전자세금계산서 발행 건당 200원 (연간 100만원 한도, 법인제외)");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "787", "0", "15", "490", null, null, this);
            obj.set_taborder("81");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("전자세금계산서서비스");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_4611.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_4611.xfdl", function() {
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
        	//테스트
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
            this.Static30.addEventHandler("onclick", this.Static10_onclick, this);
            this.Static33.addEventHandler("onclick", this.Static10_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_4611.xfdl");

       
    };
}
)();
