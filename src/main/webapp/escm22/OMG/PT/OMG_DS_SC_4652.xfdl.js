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
                this.set_name("OMG_DS_SC_4652");
                this.set_titletext("오시는길(eSCM)");
                this.set_name("OMG_DS_SC_6120");
                this.set_scrollbars("autoboth");
                this._setFormPosition(0,0,900,1077);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static13", "absolute", "11", "54", "777", "1", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Menulist");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "11", "23", "777", "26", null, null, this);
            obj.set_taborder("0");
            obj.set_text("오시는길");
            obj.style.set_font("12 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "11", "72", "777", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "11", "141", "777", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_text("대표번호");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "11", "191", "777", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_text("팩스번호");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "11", "793", "777", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_text("지하철 이용 시");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "11", "912", "777", "21", null, null, this);
            obj.set_taborder("27");
            obj.set_text("버스 이용 시");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea00", "absolute", "11", "91", "777", "24", null, null, this);
            obj.set_taborder("29");
            obj.set_wordwrap("char");
            obj.style.set_border("1 none #bfbfbfff");
            obj.getSetter("readonly").set("true");
            obj.set_text("서울특별시 서대문구 통일로 81(미근동)");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea01", "absolute", "11", "163", "777", "18", null, null, this);
            obj.set_taborder("30");
            obj.set_text("02-1522-1211");
            obj.set_wordwrap("char");
            obj.style.set_border("1 none #bfbfbfff");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea02", "absolute", "11", "213", "777", "18", null, null, this);
            obj.set_taborder("31");
            obj.set_text("02-318-3456");
            obj.set_wordwrap("char");
            obj.style.set_border("1 none #bfbfbfff");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea03", "absolute", "11", "819", "777", "18", null, null, this);
            obj.set_taborder("32");
            obj.set_text("2호선/5호선 충정로역 3번 출구 도보로 5분 소요");
            obj.set_wordwrap("char");
            obj.style.set_border("1 none #bfbfbfff");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea05", "absolute", "11", "939", "595", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("간선 : 101, 370, 700, 701, 702A, 702B, 704, 705, 707, 708, 750A, 750B, 751, 752");
            obj.set_wordwrap("char");
            obj.style.set_border("1 none #bfbfbfff");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00", "absolute", "15", "245", "875", "533", null, null, this);
            obj.set_taborder("38");
            obj.set_tabstop("false");
            obj.set_image("URL('theme://images/info_map2.png')");
            obj.set_stretch("fixaspectratio");
            obj.style.set_border("1 solid #008080ff");
            obj.style.set_color("aqua");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea06", "absolute", "10", "110", "777", "24", null, null, this);
            obj.set_taborder("39");
            obj.set_text("NH농협생명빌딩 서관 8층");
            obj.set_wordwrap("char");
            obj.style.set_border("1 none #bfbfbfff");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea07", "absolute", "11", "962", "595", "21", null, null, this);
            obj.set_taborder("40");
            obj.set_text("지선 : 7019, 7021, 7024");
            obj.set_wordwrap("char");
            obj.style.set_border("1 none #bfbfbfff");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea08", "absolute", "11", "985", "595", "21", null, null, this);
            obj.set_taborder("41");
            obj.set_text("광역 : 9701, 9703, 9709, 9714, M7119, M7129");
            obj.set_wordwrap("char");
            obj.style.set_border("1 none #bfbfbfff");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea09", "absolute", "11", "844", "777", "18", null, null, this);
            obj.set_taborder("42");
            obj.set_text("1호선/2호선 시청역 10번 출구 도보로 9분 소요");
            obj.set_wordwrap("char");
            obj.style.set_border("1 none #bfbfbfff");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea11", "absolute", "11", "869", "777", "18", null, null, this);
            obj.set_taborder("44");
            obj.set_text("5호선 서대문역 7번 출구 도보로 7분 소요");
            obj.set_wordwrap("char");
            obj.style.set_border("1 none #bfbfbfff");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 900, 1077, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("오시는길(eSCM)");
            		p.set_scrollbars("autoboth");

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
        this.addIncludeScript("OMG_DS_SC_4652.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_4652.xfdl", function(exports) {
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

        
        this.ImageViewer00_onclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Static13.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static07.addEventHandler("onclick", this.Static03_onclick, this);
            this.Static00.addEventHandler("onclick", this.Static03_onclick, this);
            this.Static02.addEventHandler("onclick", this.Static03_onclick, this);
            this.Static04.addEventHandler("onclick", this.Static03_onclick, this);
            this.Static15.addEventHandler("onclick", this.Static03_onclick, this);
            this.ImageViewer00.addEventHandler("onclick", this.ImageViewer00_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_4652.xfdl", true);

       
    };
}
)();
