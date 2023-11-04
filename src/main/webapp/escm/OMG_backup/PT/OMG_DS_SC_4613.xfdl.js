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
                this.set_name("OMG_DS_SC_4613");
                this.set_titletext("데이터 마트");
                this._setFormPosition(0,0,810,750);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new ImageViewer("ImageViewer00", "absolute", "15", "15", "780", "165", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("URL('theme://images/new/con_img02.png') left middle");
            obj.style.set_border("0 solid #bfbfbfff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "15", "210", "780", "25", null, null, this);
            obj.set_taborder("1");
            obj.set_text("데이터 마트");
            obj.set_cssclass("sta_INFO_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "15", "395", "780", "25", null, null, this);
            obj.set_taborder("2");
            obj.set_text("데이터마트 이용요금(EDI요금제와 동일)");
            obj.set_cssclass("sta_INFO_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "15", "240", "780", "25", null, null, this);
            obj.set_taborder("5");
            obj.set_text("서비스 명 : 데이터 마트");
            obj.set_cssclass("sta_INFO_txt1list");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "15", "265", "780", "25", null, null, this);
            obj.set_taborder("6");
            obj.set_text("서비스 개요 : 검수업무 조회기간 제약(35일)에 따른 불편함을 해소하고자, ＂데이터 마트＂를 통해 데이터를 신청 후 생성된 파일을");
            obj.set_cssclass("sta_INFO_txt1list");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "15", "315", "780", "25", null, null, this);
            obj.set_taborder("7");
            obj.set_text("조회기간의 제약이 최소화된 대용량 전자문서제공");
            obj.set_cssclass("sta_INFO_txt1");
            obj.style.set_font("bold underline 10 맑은 고딕, Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "15", "340", "780", "25", null, null, this);
            obj.set_taborder("8");
            obj.set_text("이용방법 (매뉴얼 참조 : 커뮤니티-> 자료실)");
            obj.set_cssclass("sta_INFO_txt1list");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "15", "290", "780", "25", null, null, this);
            obj.set_taborder("9");
            obj.set_text("다운로드 할 수 있는 서비스로 협력업체의 대용량파일 분할 및 병합에 따른 관리의 불편함을 개선하기 위해 대용량 전자문서에 대해");
            obj.set_cssclass("sta_INFO_txt1");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "15", "425", "780", "25", null, null, this);
            obj.set_taborder("10");
            obj.set_text("18년 01월 ~ 06월 까지의 검수업무_전표별 파일을 6/30일에 요청");
            obj.set_cssclass("sta_INFO_txt1list");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "15", "450", "780", "25", null, null, this);
            obj.set_taborder("11");
            obj.set_text("7/1일 데이터 다운로드시 6개월 데이타량이 12,300KB 일 때,");
            obj.set_cssclass("sta_INFO_txt1");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "15", "685", "780", "25", null, null, this);
            obj.set_taborder("15");
            obj.set_text("기타문의 및 궁금하신 사항은 항상 저희 고객센터(1522-1211)로 연락 주시기 바랍니다.");
            obj.set_cssclass("sta_INFO_txt2list");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "42", "475", "753", "195", null, null, this);
            obj.set_taborder("17");
            obj.style.set_background("#f5f5f5ff");
            obj.style.set_border("1 solid #e6e6e6ff");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "13", "5", "725", "135", null, null, this.Div00);
            obj.set_taborder("0");
            obj.set_text("   1,000KB Ⅹ 60원 = 60,000원 (1천 KB 이하 사용량)\r\n+ 2,000KB Ⅹ 50원 = 100,000원 (1천 KB 초과 ~3천 KB 이하 사용량)\r\n+ 2,000KB Ⅹ 40원 = 80,000원 (3천 KB초과 ~ 5천 KB 이하 사용량)\r\n+ 5,000KB Ⅹ 30원 = 150,000원 (5천 KB초과 ~ 1만 KB 이하 사용량)\r\n+ 2,300KB Ⅹ 20원 = 46,000원 (1만 KB초과 ~ 5만 KB 이하 사용량)");
            obj.style.set_linespace("10");
            obj.style.set_padding("0 0 0 150");
            obj.style.set_font("10 맑은 고딕, Gulim");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "10", "150", "725", "35", null, null, this.Div00);
            obj.set_taborder("1");
            obj.set_text("436,000원 = 7월 31일까지 재수신 가능");
            obj.style.set_border("1 solid #ccccccff,0 none #ccccccff,0 none #ccccccff,0 none #ccccccff");
            obj.style.set_color("#ff5f40ff");
            obj.style.set_padding("5 0 0 80");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 10 맑은 고딕, Gulim");
            this.Div00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 753, 195, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("17");
            		p.style.set_background("#f5f5f5ff");
            		p.style.set_border("1 solid #e6e6e6ff");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 810, 750, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("데이터 마트");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_4613.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_4613.xfdl", function() {
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

        

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/

        
         
        this.Static02_onclick = function(obj,e)
        {
        	
        }

        this.Static47_onclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);

        };

        this.loadIncludeScript("OMG_DS_SC_4613.xfdl");

       
    };
}
)();
