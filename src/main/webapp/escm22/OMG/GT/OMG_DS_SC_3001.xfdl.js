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
                this.set_name("OMG_DS_SC_3001");
                this.set_titletext("판촉행사 진행");
                this.set_name("OMG_DS_SC_6120");
                this._setFormPosition(0,0,805,520);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static02", "absolute", "11", "23", null, "26", "74.97%", null, this);
            obj.set_taborder("0");
            obj.set_text("판촉행사 진행");
            obj.style.set_font("12 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "11", "54", "777", "1", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Menulist");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "10", "75", "777", "24", null, null, this);
            obj.set_taborder("61");
            obj.set_text("판촉 행사 협의절차 요약");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 3 14");
            obj.style.set_font("bold 12 맑은 고딕,Gulim");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00", "absolute", "0", "110", "805", "143", null, null, this);
            obj.set_taborder("62");
            obj.set_tabstop("false");
            obj.set_image("URL('theme://images/gt/fair2.png')");
            obj.set_stretch("fixaspectratio");
            obj.style.set_border("0 solid #bfbfbfff");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "18", "293", "777", "24", null, null, this);
            obj.set_taborder("63");
            obj.set_text("판촉행사 진행 기준");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 3 14");
            obj.style.set_font("bold 12 맑은 고딕,Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea00", "absolute", "10", "321", "780", "180", null, null, this);
            obj.set_taborder("64");
            obj.set_text("○ 판촉행사는 하나로유통과 협력업체 공동의 매출 활성화를 목적으로 합니다. \r\n○ 주요 유형 : 전단행사, 카드행사, 프로모션행사 등\r\n○ 비용 분담 기준\r\n  - 하나로유통과 협력회사의 예상이익 비율에 따라 분담하며, 분담비율을 50 : 50을 원칙으로 합니다.\r\n   ※ 단, 행사 요청단계에서 협력회사의 자발적, 차별적 행사 진행 협조 요청에 따라 별도 운영 될 수\r\n      있습니다. \r\n\r\n");
            obj.set_wordwrap("char");
            obj.style.set_align("left top");
            obj.style.set_font("12 맑은 고딕,Gulim");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 805, 520, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("판촉행사 진행");

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
        this.addIncludeScript("OMG_DS_SC_3001.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_3001.xfdl", function(exports) {
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

        this.loadIncludeScript("OMG_DS_SC_3001.xfdl", true);

       
    };
}
)();
