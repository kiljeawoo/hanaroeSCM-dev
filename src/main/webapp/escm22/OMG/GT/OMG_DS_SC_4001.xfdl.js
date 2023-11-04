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
                this.set_name("OMG_DS_SC_4001");
                this.set_titletext("매장 설비변경 비용 분담기준");
                this.set_name("OMG_DS_SC_6120");
                this._setFormPosition(0,0,805,600);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static02", "absolute", "11", "23", null, "26", "63.11%", null, this);
            obj.set_taborder("0");
            obj.set_text("매장 설비변경 비용 분담기준");
            obj.style.set_font("12 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "11", "54", "777", "1", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Menulist");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "10", "75", "777", "24", null, null, this);
            obj.set_taborder("2");
            obj.set_text("매장설비변경 공사 협의 절차 요약");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 3 14");
            obj.style.set_font("bold 12 맑은 고딕,Gulim");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00", "absolute", "0", "110", "805", "129", null, null, this);
            obj.set_taborder("3");
            obj.set_tabstop("false");
            obj.set_image("URL('theme://images/gt/fair3.png')");
            obj.set_stretch("fixaspectratio");
            obj.style.set_border("0 solid #bfbfbfff");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "18", "273", "777", "24", null, null, this);
            obj.set_taborder("4");
            obj.set_text("매장설비변경 비용분담 기준");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 3 14");
            obj.style.set_font("bold 12 맑은 고딕,Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea00", "absolute", "10", "301", "780", "289", null, null, this);
            obj.set_taborder("5");
            obj.set_text("□ 매장 위치 또는 매장 인테리어를 변경(이하 “설비변경”이라 한다)을 하고자 할 때는 입점업체와\r\n   하나로유통의 협의를 거쳐 진행합니다.\r\n○ 비용분담기준\r\n - 매장바닥, 조명, 벽체 등 기초시설(하나로유통 고유사양) 공사비용은 원칙적으로 하나로유통이\r\n   부담합니다.\r\n ※ 단, 입점업체가 기초시설을 자신의 사양에 따라 변경할 경우 추가되는 비용 부분에 대해 사전 서면\r\n   약정을 체결하여 비용을 분담할 수 있습니다.\r\n ※ 양 당사자 간 분담비율은 100분의 50을 초과하지 않습니다.\r\n - MD개편, 매장 리뉴얼 등 하나로유통의 사유 이외에 입점업체의 개별적인 사유로 인해 설비변경 하는\r\n   경우, 이에 소요되는 비용은 상호협의하여 분담비율을 정합니다.");
            obj.set_wordwrap("char");
            obj.style.set_align("left top");
            obj.style.set_font("12 맑은 고딕,Gulim");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 805, 600, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("매장 설비변경 비용 분담기준");

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
        this.addIncludeScript("OMG_DS_SC_4001.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_4001.xfdl", function(exports) {
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

        this.loadIncludeScript("OMG_DS_SC_4001.xfdl", true);

       
    };
}
)();
