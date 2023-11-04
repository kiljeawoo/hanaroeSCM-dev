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
                this.set_name("OMG_DS_SC_1002");
                this.set_titletext("계약중단");
                this.set_name("OMG_DS_SC_6120");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static02", "absolute", "11", "23", null, "26", "74.97%", null, this);
            obj.set_taborder("0");
            obj.set_text("거래 중단");
            obj.style.set_font("12 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "11", "54", "777", "1", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Menulist");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea00", "absolute", "10", "111", "780", "180", null, null, this);
            obj.set_taborder("2");
            obj.set_text("1. 발행산 어음 수표가 지급 거절되거나, 자신에 의한 회생 파산 절차의 신청이 있거나, 채권자의 신청에 의해 동 절차가 개시된 경우\r\n2. 주요 재산에 대하여 강제경매 등이 실행되어 더 이상의 계약 이행이 곤란해진 경우\r\n3. 계약에 명시된 브랜드나 품목의 생산이 중단 또는 종료된 경우\r\n4. 협력업체가 공급한 상품이 관계법령에 저촉되거나, 협력업체가 라이센스권자와 체결한 계약이 종료되어 해당 상품의 공급 또는 판매가 불가능하게 된 경우");
            obj.set_wordwrap("char");
            obj.style.set_align("left top");
            obj.style.set_font("12 맑은 고딕,Gulim");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "10", "75", "777", "24", null, null, this);
            obj.set_taborder("3");
            obj.set_text("계약에 해지 될 수 있는 사유");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 3 14");
            obj.style.set_font("bold 12 맑은 고딕,Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "10", "307", "777", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_text("갱신계약에 거절 될 수 있는 사유");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 3 14");
            obj.style.set_font("bold 12 맑은 고딕,Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea01", "absolute", "10", "342", "780", "100", null, null, this);
            obj.set_taborder("5");
            obj.set_text("1. 감독관청으로부터 영업허가 및 영업등록의 취소처분을 받은 경우\r\n2. 언론의 부정적인 보도 등 사회적 물의를 야기한 경우\r\n3. 연 단위 계약기간 동안 공급실적이 70백만원 미만인 경우");
            obj.set_wordwrap("char");
            obj.style.set_align("left top");
            obj.style.set_font("12 맑은 고딕,Gulim");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("계약중단");

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
        this.addIncludeScript("OMG_DS_SC_1002.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_1002.xfdl", function(exports) {
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

        this.TextArea00_oneditclick = function(obj,e)
        {
        	
        }

        this.Static11_onclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("onactivate", this.OMG_DS_SC_4620_onactivate, this);
            this.Static01.addEventHandler("onclick", this.Static01_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_1002.xfdl", true);

       
    };
}
)();
