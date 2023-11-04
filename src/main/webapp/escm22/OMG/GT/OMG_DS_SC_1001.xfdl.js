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
                this.set_name("OMG_DS_SC_1001");
                this.set_titletext("계약체결");
                this.set_name("OMG_DS_SC_6120");
                this._setFormPosition(0,0,800,950);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static02", "absolute", "11", "23", null, "26", "74.97%", null, this);
            obj.set_taborder("0");
            obj.set_text("계약체결");
            obj.style.set_font("12 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "11", "54", "777", "1", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Menulist");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00", "absolute", "9", "123", "782", "807", null, null, this);
            obj.set_taborder("6");
            obj.set_tabstop("false");
            obj.set_image("URL('theme://images/gt/fair1.png')");
            obj.set_stretch("fixaspectratio");
            obj.style.set_border("0 solid #bfbfbfff");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "250", "75", "300", "26", null, null, this);
            obj.set_taborder("7");
            obj.set_text("<< 계약 체결 안내도 >>");
            obj.style.set_align("center");
            obj.style.set_font("bold 16 맑은 고딕,Gulim");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "76", "114", "154", "93", null, null, this);
            obj.set_taborder("11");
            obj.style.set_border("2 solid #808080ff");
            obj.style.set_bordertype("round 5 5");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "5", null, "22", "0", null, this.Div00);
            obj.set_taborder("2");
            obj.set_text("바로가기");
            obj.style.set_align("center");
            obj.style.set_font("bold 12 맑은 고딕,Gulim");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btn_move1", "absolute", "10", "34", "130", "21", null, null, this.Div00);
            obj.set_taborder("0");
            obj.set_text("계약체결 상세");
            obj.set_cssclass("btn_WF_CRUD");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btn_move2", "absolute", "10", "58", "130", "21", null, null, this.Div00);
            obj.set_taborder("1");
            obj.set_text("신규계약 상담신청");
            obj.set_cssclass("btn_WF_CRUD");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "229", "159", "68", "3", null, null, this);
            obj.set_taborder("12");
            obj.style.set_background("#4881bdff");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 154, 93, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("11");
            		p.style.set_border("2 solid #808080ff");
            		p.style.set_bordertype("round 5 5");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 800, 950, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("계약체결");

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
        this.addIncludeScript("OMG_DS_SC_1001.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_1001.xfdl", function(exports) {
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
        this.common_onclick = function(obj,e)
        {
        	if (obj.id == "btn_move1") {
        		this.fn_moveMenu("40200000");
        	} else if (obj.id == "btn_move2") {
        		this.fn_moveMenu("30100000");
        	}
        }

        this.fn_moveMenu = function(menuId)
        {
        	application.afrm_PotalFrame.set_formurl("");
        	application.afrm_VFrameSet0.set_separatesize("0, 65, *");
        	application.afrm_HFrameSet0.set_separatesize("190, *, 0");
        	application.afrm_VFrameSet1.set_separatesize("0, *");
        	application.afrm_LeftFrame.set_formurl("frame::LeftFrame_serviceBT.xfdl");
        	application.afrm_TopFrame.set_formurl("frame::TopFrame_serviceBT.xfdl");
        	
        	this.gfn_OpenMenuId(menuId, "", "BT");
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("onactivate", this.OMG_DS_SC_4620_onactivate, this);
            this.Static01.addEventHandler("onclick", this.Static01_onclick, this);
            this.Div00.btn_move1.addEventHandler("onclick", this.common_onclick, this);
            this.Div00.btn_move2.addEventHandler("onclick", this.common_onclick, this);
            this.Static04.addEventHandler("onclick", this.Static01_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_1001.xfdl", true);

       
    };
}
)();
