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
                this.set_name("OMG_DS_SC_4615");
                this.set_titletext("마감간소화");
                this._setFormPosition(0,0,810,1100);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "15", "300", "780", "25", null, null, this);
            obj.set_taborder("1");
            obj.set_text("마감간소화");
            obj.set_cssclass("sta_INFO_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "15", "510", "780", "25", null, null, this);
            obj.set_taborder("2");
            obj.set_text("마감간소화 이용요금");
            obj.set_cssclass("sta_INFO_title");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "15", "330", "780", "25", null, null, this);
            obj.set_taborder("5");
            obj.set_text("서비스 명 : 마감간소화");
            obj.set_cssclass("sta_INFO_txt1list");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "15", "355", "780", "25", null, null, this);
            obj.set_taborder("6");
            obj.set_text("서비스 개요 : 월말 마감 시 납품확인서(검수 확정서 및 반품 확인서), 세금계산서 등을 각각 확인하여 대사해야");
            obj.set_cssclass("sta_INFO_txt1list");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "15", "405", "780", "25", null, null, this);
            obj.set_taborder("7");
            obj.set_text("등의 상세내역을 확인 할 수 있어 수월하고 정확하게 마감 업무를 진행 할 수 있습니다.");
            obj.set_cssclass("sta_INFO_txt1");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "15", "380", "780", "25", null, null, this);
            obj.set_taborder("9");
            obj.set_text("했던 번거로움을 해소하고자 \" 마감간소화 “ 를 통해 세금계산서 금액 대비 납품, 매입정정, 반품");
            obj.set_cssclass("sta_INFO_txt1");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "15", "540", "780", "25", null, null, this);
            obj.set_taborder("10");
            obj.set_text("서비스 이용 신청을 통해 서비스를 이용할 수 있으며, 서비스 이용료는 조회 시점의 해당 납품확인서(검수 확정서 및");
            obj.set_cssclass("sta_INFO_txt1list");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "15", "590", "780", "25", null, null, this);
            obj.set_taborder("11");
            obj.set_text("※ 마감간소화에서 조회 시점의 해당 납품확인서에 대해 1회만 청구되며, 이후 마감간소화 서비스에서 재조회하여도");
            obj.set_cssclass("sta_INFO_txt1");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("bold 10 맑은 고딕, Gulim");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "15", "455", "780", "25", null, null, this);
            obj.set_taborder("15");
            obj.set_text("조회 기간은 현재 월로부터 과거 2년까지의 납품확인서를 제공합니다.");
            obj.set_cssclass("sta_INFO_txt1list");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "15", "565", "780", "25", null, null, this);
            obj.set_taborder("16");
            obj.set_text("반품 확인서)에 대한 데이터량 기준으로 EDI 서비스 요금으로 책정됩니다.");
            obj.set_cssclass("sta_INFO_txt1");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "15", "650", "780", "25", null, null, this);
            obj.set_taborder("17");
            obj.set_text("기타문의 및 궁금하신 사항은 저희 고객센터(02-1522-1211)로 연락 주시기 바랍니다.");
            obj.set_cssclass("sta_INFO_txt2list");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "15", "430", "780", "25", null, null, this);
            obj.set_taborder("18");
            obj.set_text("이용방법 (매뉴얼 참조 : 커뮤니티-> 자료실)");
            obj.set_cssclass("sta_INFO_txt1list");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "15", "615", "780", "25", null, null, this);
            obj.set_taborder("19");
            obj.set_text("EDI 요금이 청구되지 않습니다.");
            obj.set_cssclass("sta_INFO_txt2");
            obj.style.set_color("#ff0000ff");
            obj.style.set_font("bold 10 맑은 고딕, Gulim");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00", "absolute", "1", "15", "809", "266", null, null, this);
            obj.set_taborder("20");
            obj.style.set_background("URL('theme://images/new/con_img04.png') left middle");
            obj.style.set_border("0 solid #bfbfbfff");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01", "absolute", "119", "710", "572", "356", null, null, this);
            obj.set_taborder("21");
            obj.style.set_background("URL('theme://images/new/simplify_sample.jpg') left middle");
            obj.style.set_border("0 solid #bfbfbfff");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 810, 1100, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("마감간소화");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_4616.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_4616.xfdl", function() {
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
        this.btn_ios_onclick = function(obj,e)
        {
        	window.open("https://www.nhescm.co.kr/mobile/app.html"); // 제정 내용
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);

        };

        this.loadIncludeScript("OMG_DS_SC_4616.xfdl");

       
    };
}
)();
