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
                this.set_name("OMG_DS_SC_4612");
                this.set_titletext("판매상세정보 서비스");
                this._setFormPosition(0,0,810,1490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new ImageViewer("ImageViewer00", "absolute", "15", "15", "780", "185", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("URL('theme://images/new/con_img01.png') left middle");
            obj.style.set_border("0 solid #bfbfbfff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "15", "230", "780", "25", null, null, this);
            obj.set_taborder("1");
            obj.set_text("판매상세정보 안내");
            obj.set_cssclass("sta_INFO_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "15", "415", "780", "25", null, null, this);
            obj.set_taborder("2");
            obj.set_text("판매상세정보 이용요금");
            obj.set_cssclass("sta_INFO_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "15", "650", "780", "25", null, null, this);
            obj.set_taborder("3");
            obj.set_text("판매상세정보 이용요금 예시");
            obj.set_cssclass("sta_INFO_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "15", "835", "780", "25", null, null, this);
            obj.set_taborder("4");
            obj.set_text("판매상세정보 엑셀 다운로드 예시(월별/주별 동일)");
            obj.set_cssclass("sta_INFO_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "15", "260", "780", "25", null, null, this);
            obj.set_taborder("5");
            obj.set_text("서비스 명 : 판매상세정보");
            obj.set_cssclass("sta_INFO_txt1list");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "15", "285", "780", "25", null, null, this);
            obj.set_taborder("6");
            obj.set_text("서비스 개요 : 사업장별 POS 판매정보(자사 판매정보 제공 동의시, 비동의시 판매수량만 제공)를 SKU단위로 제공합니다.");
            obj.set_cssclass("sta_INFO_txt1list");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "15", "335", "780", "25", null, null, this);
            obj.set_taborder("7");
            obj.set_text("이용방법 (매뉴얼 참조 : 커뮤니티-> 자료실)");
            obj.set_cssclass("sta_INFO_txt1list");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "15", "360", "780", "25", null, null, this);
            obj.set_taborder("8");
            obj.set_text("자사 및 타사상품의 농협 POS 판매현황을 제공함(현재시점에서 6개월 전까지의 데이터 조회 가능)");
            obj.set_cssclass("sta_INFO_txt1list");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "15", "310", "780", "25", null, null, this);
            obj.set_taborder("9");
            obj.set_text("타사의 판매정보를 사업장별 수량, 판매액(원) 등을 상세하게 확인할 수 있습니다.");
            obj.set_cssclass("sta_INFO_txt1");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "15", "445", "780", "25", null, null, this);
            obj.set_taborder("10");
            obj.set_text("[내정보] – “자사판매정보 제공동의＂를 체크해야만 서비스를 이용할 수 있습니다.(동의시에는 과금 부과 없음)");
            obj.set_cssclass("sta_INFO_txt1list");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "15", "470", "780", "25", null, null, this);
            obj.set_taborder("11");
            obj.set_text("주별/월별 카테고리 판매정보에서 엑셀 다운로드 서비스 이용료가 발생합니다.");
            obj.set_cssclass("sta_INFO_txt1");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "15", "495", "780", "25", null, null, this);
            obj.set_taborder("12");
            obj.set_text("최초자료 다운로드로 부터 30일간은 동일 SKU에 대해 중복으로 과금이 청구되지 않으며, 이 후 부터는 동일한 요금체계로");
            obj.set_cssclass("sta_INFO_txt1list");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "15", "520", "780", "25", null, null, this);
            obj.set_taborder("13");
            obj.set_text("청구됩니다.");
            obj.set_cssclass("sta_INFO_txt1");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "15", "545", "780", "25", null, null, this);
            obj.set_taborder("14");
            obj.set_text("빌링 권한을 갖는 ID만 관심상품(SKU)등록이 가능하며, 일반 ID는 조회 및 다운로드만 가능합니다.");
            obj.set_cssclass("sta_INFO_txt1list");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "15", "570", "780", "25", null, null, this);
            obj.set_taborder("15");
            obj.set_text("비동의 업체의 관심 상품은 판매수량 정보만 제공되고 있습니다.");
            obj.set_cssclass("sta_INFO_txt1");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "15", "595", "780", "25", null, null, this);
            obj.set_taborder("16");
            obj.set_text("비 동의 업체의 경우 본 서비스를 이용하실 수 없습니다.");
            obj.set_cssclass("sta_INFO_txt1list");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "15", "730", "780", "25", null, null, this);
            obj.set_taborder("17");
            obj.set_text("최초 다운로드 후 동일정보 다운로드 시 D+29까지는 중복 과금 안됨.)");
            obj.set_cssclass("sta_INFO_txt1list");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "15", "755", "780", "25", null, null, this);
            obj.set_taborder("18");
            obj.set_text("40건 * 1,500원 + 30건 * 1,500원 = 105,000원(VAT 별도)");
            obj.set_cssclass("sta_INFO_txt1");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "15", "680", "780", "25", null, null, this);
            obj.set_taborder("19");
            obj.set_text("관심상품등록 : 총 SKU 50건(빌링권한 ID만 가능)");
            obj.set_cssclass("sta_INFO_txt1list");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "15", "705", "780", "25", null, null, this);
            obj.set_taborder("20");
            obj.set_text("다운로드 SKU : 12월분(40건), 11월분(30건)");
            obj.set_cssclass("sta_INFO_txt1list");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "15", "780", "780", "25", null, null, this);
            obj.set_taborder("21");
            obj.set_text("최대 550만원(VAT포함)만 과금하는 상한요금제를 적용함.");
            obj.set_cssclass("sta_INFO_txt1list");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01", "absolute", "34", "875", "724", "593", null, null, this);
            obj.set_taborder("22");
            obj.style.set_background("URL('theme://images/new/sales_sample.JPG') left middle");
            obj.style.set_border("0 solid #bfbfbfff");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 810, 1490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("판매상세정보 서비스");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_4612.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_4612.xfdl", function(exports) {
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
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);

        };

        this.loadIncludeScript("OMG_DS_SC_4612.xfdl", true);

       
    };
}
)();
