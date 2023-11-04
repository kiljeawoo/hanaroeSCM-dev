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
                this.set_name("OMG_DS_SC_4614");
                this.set_titletext("통계분석 서비스");
                this._setFormPosition(0,0,810,505);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new ImageViewer("ImageViewer00", "absolute", "15", "15", "780", "165", null, null, this);
            obj.set_taborder("0");
            obj.style.set_background("URL('theme://images/new/con_img03.png') left middle");
            obj.style.set_border("0 solid #bfbfbfff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "15", "210", "780", "25", null, null, this);
            obj.set_taborder("1");
            obj.set_text("통계분석 서비스");
            obj.set_cssclass("sta_INFO_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "15", "345", "780", "25", null, null, this);
            obj.set_taborder("2");
            obj.set_text("통계분석 서비스 이용요금");
            obj.set_cssclass("sta_INFO_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "15", "240", "780", "25", null, null, this);
            obj.set_taborder("5");
            obj.set_text("납품율분석 : 발주량 vs 배송예정량 vs 매입량 비교분석");
            obj.set_cssclass("sta_INFO_txt1list");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "15", "265", "780", "25", null, null, this);
            obj.set_taborder("6");
            obj.set_text("결품율분석 : 사업장별 재고 수량 “0” 인 상품조회 (전일자 마감)");
            obj.set_cssclass("sta_INFO_txt1list");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "15", "290", "780", "25", null, null, this);
            obj.set_taborder("9");
            obj.set_text("재고회전율(상품별) : 재고량 / 판매량 *100");
            obj.set_cssclass("sta_INFO_txt1list");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "15", "375", "780", "25", null, null, this);
            obj.set_taborder("10");
            obj.set_text("납품율분석 : 20,000원/월 (VAT별도)");
            obj.set_cssclass("sta_INFO_txt1list");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "15", "400", "780", "25", null, null, this);
            obj.set_taborder("11");
            obj.set_text("결품율분석 : 20,000원/월 (VAT별도)");
            obj.set_cssclass("sta_INFO_txt1list");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "15", "440", "780", "25", null, null, this);
            obj.set_taborder("15");
            obj.set_text("현재 서비스 개발중입니다.(18년 12월 서비스 제공예정)");
            obj.set_cssclass("sta_INFO_txt2list");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "15", "465", "780", "25", null, null, this);
            obj.set_taborder("16");
            obj.set_text("기타문의 및 궁금하신 사항은 항상 저희 고객센터(1522-1211)로 연락 주시기 바랍니다.");
            obj.set_cssclass("sta_INFO_txt2list");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 810, 505, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("통계분석 서비스");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_4614.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_4614.xfdl", function(exports) {
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

        this.loadIncludeScript("OMG_DS_SC_4614.xfdl", true);

       
    };
}
)();
