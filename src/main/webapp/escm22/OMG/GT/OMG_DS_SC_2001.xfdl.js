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
                this.set_name("OMG_DS_SC_2001");
                this.set_titletext("판매장려금 결정");
                this.set_name("OMG_DS_SC_6120");
                this._setFormPosition(0,0,803,600);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static02", "absolute", "11", "23", null, "26", "74.97%", null, this);
            obj.set_taborder("0");
            obj.set_text("판매장려금 결정");
            obj.style.set_font("12 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "11", "297", "175", "34", null, null, this);
            obj.set_taborder("4");
            obj.set_text("장려금명");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 12 맑은 고딕,Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "185", "297", "603", "34", null, null, this);
            obj.set_taborder("12");
            obj.set_text("관련설명");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 12 맑은 고딕,Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "185", "330", "603", "100", null, null, this);
            obj.set_taborder("9");
            obj.set_text("○ 공급업체에서 등록한 신상품을 대상으로 발생되는 장려금입니다. \r\n○ 신상품 등록일 익월부터 6개월간의 구매금액을 바탕으로 발생됩니다. \r\n○ 신상품 입점 후 최초 1회 발생");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            obj.style.set_font("12 맑은 고딕,Gulim");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "185", "429", "603", "100", null, null, this);
            obj.set_taborder("40");
            obj.set_text("○ 매출증가 가능성이 큰 자리에 상품을 진열해 주는 서비스에 대한 대가로\r\n   공급업체로부터 수취하는 장려금입니다.\r\n○ 매출액에 따라 월 1회 발생");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            obj.style.set_font("12 맑은 고딕,Gulim");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "11", "54", "777", "1", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Menulist");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "10", "75", "777", "24", null, null, this);
            obj.set_taborder("65");
            obj.set_text("판매장려금의 약정");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 3 14");
            obj.style.set_font("bold 12 맑은 고딕,Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea00", "absolute", "10", "111", "780", "130", null, null, this);
            obj.set_taborder("66");
            obj.set_text("○ 판매장려금은 연간계약 체결 및 갱신과정에서 판매장려금에 대하여 MD와 협력회사 협의 후\r\n   약정 체결합니다.\r\n○ 연도 중 주요계약내용 변경에 따라 추가약정 협의 및 체결을 할 수 있습니다. \r\n○ 약정서 체결 시 즉시교부의 의무가 있습니다.");
            obj.set_wordwrap("char");
            obj.style.set_align("left top");
            obj.style.set_font("12 맑은 고딕,Gulim");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "10", "255", "777", "24", null, null, this);
            obj.set_taborder("67");
            obj.set_text("판매장려금의 종류");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 3 14");
            obj.style.set_font("bold 12 맑은 고딕,Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "11", "330", "175", "100", null, null, this);
            obj.set_taborder("68");
            obj.set_text("신상품\r\n입점장려금");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 12 맑은 고딕,Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "11", "429", "175", "100", null, null, this);
            obj.set_taborder("69");
            obj.set_text("매대진열 장려금");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 12 맑은 고딕,Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea01", "absolute", "10", "538", "780", "32", null, null, this);
            obj.set_taborder("70");
            obj.set_text("  ※ 본 장려금은 연간계약시 판매장려금 약정을 체결 한 협력업체에 적용 및 발생됩니다. ");
            obj.set_wordwrap("char");
            obj.style.set_align("left top");
            obj.style.set_font("12 맑은 고딕,Gulim");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 600, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("판매장려금 결정");

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
        this.addIncludeScript("OMG_DS_SC_2001.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_2001.xfdl", function(exports) {
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

        this.loadIncludeScript("OMG_DS_SC_2001.xfdl", true);

       
    };
}
)();
