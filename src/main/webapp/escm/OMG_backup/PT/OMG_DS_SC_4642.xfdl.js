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
                this.set_name("OMG_DS_SC_4642");
                this.set_titletext("공동인증서발급신청");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static05", "absolute", "11", "54", "777", "1", null, null, this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_Menulist");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "11", "23", "777", "26", null, null, this);
            obj.set_taborder("13");
            obj.set_text("공동인증서 발급신청");
            obj.style.set_font("12 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "11", "72", "777", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_text("발급안내");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_bordertype("normal 0 0");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea02", "absolute", "11", "98", "777", "36", null, null, this);
            obj.set_taborder("15");
            obj.set_text("저희 농협하나로유통에서는 공인인증기관과 협력하여 고객사 여러분께 전자거래에 사용하실 수 있는 인증서를 발급해 드리고 있습니다. 아래 공동인증서 발급업체 배너를 클릭하여 안내된 절차에 따라 공동인증서를 발급받으시길 바랍니다.");
            obj.set_wordwrap("char");
            obj.style.set_border("1 none #bfbfbfff");
            obj.style.set_font("9 굴림");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00", "absolute", "213", "248", "360", "50", null, null, this);
            obj.set_taborder("22");
            obj.set_stretch("fixaspectratio");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #bfbfbfff");
            obj.style.set_padding("10 10 10 20");
            obj.set_imagealign("center middle");
            obj.set_image("URL('theme://images/cert_link1.png')");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "33", "171", "181", "29", null, null, this);
            obj.set_taborder("31");
            obj.set_text("기관명");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "33", "248", "181", "50", null, null, this);
            obj.set_taborder("32");
            obj.set_text("KOSCOM");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "213", "171", "360", "29", null, null, this);
            obj.set_taborder("33");
            obj.set_text("사이트 연결 (아래 배너 클릭)");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "33", "199", "181", "50", null, null, this);
            obj.set_taborder("35");
            obj.set_text("한국정보인증");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "33", "297", "181", "50", null, null, this);
            obj.set_taborder("37");
            obj.set_text("한국전자인증");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01", "absolute", "213", "199", "360", "50", null, null, this);
            obj.set_taborder("39");
            obj.set_stretch("fixaspectratio");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #bfbfbfff");
            obj.style.set_padding("5 70 10 90");
            obj.set_image("URL('theme://images/cert_link2.png')");
            obj.set_imagealign("center middle");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer02", "absolute", "213", "297", "360", "50", null, null, this);
            obj.set_taborder("40");
            obj.set_stretch("fixaspectratio");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #bfbfbfff");
            obj.set_image("URL('theme://images/cert_link3.png')");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "787", "0", "15", "490", null, null, this);
            obj.set_taborder("41");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "572", "171", "181", "29", null, null, this);
            obj.set_taborder("42");
            obj.set_text("고객센터");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "572", "248", "181", "50", null, null, this);
            obj.set_taborder("43");
            obj.set_text("1577-7337");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "572", "199", "181", "50", null, null, this);
            obj.set_taborder("44");
            obj.set_text("1577-8787");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "572", "297", "181", "50", null, null, this);
            obj.set_taborder("45");
            obj.set_text("1566-0566");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea09", "absolute", "11", "144", "777", "18", null, null, this);
            obj.set_taborder("46");
            obj.set_text("※ 범용공동인증서 발급처");
            obj.set_wordwrap("char");
            obj.style.set_border("1 none #bfbfbfff");
            obj.style.set_color("red");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 Gulim");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea00", "absolute", "11", "365", "777", "18", null, null, this);
            obj.set_taborder("47");
            obj.set_text("※ 특수목적용(농협용)공동인증서 발급처 => 사이트 연결 후 사업자용도제한용 배너 클릭");
            obj.set_wordwrap("char");
            obj.style.set_border("1 none #bfbfbfff");
            obj.style.set_color("red");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 Gulim");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "33", "394", "181", "29", null, null, this);
            obj.set_taborder("48");
            obj.set_text("기관명");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "213", "394", "360", "29", null, null, this);
            obj.set_taborder("49");
            obj.set_text("사이트 연결 (아래 배너 클릭)");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "571", "394", "181", "29", null, null, this);
            obj.set_taborder("50");
            obj.set_text("고객센터");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "33", "422", "181", "50", null, null, this);
            obj.set_taborder("51");
            obj.set_text("한국정보인증");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer03", "absolute", "213", "422", "360", "50", null, null, this);
            obj.set_taborder("52");
            obj.set_image("URL('theme://images/cert_link2.png')");
            obj.set_stretch("fixaspectratio");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #bfbfbfff");
            obj.style.set_padding("5 70 10 90");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "571", "422", "181", "50", null, null, this);
            obj.set_taborder("53");
            obj.set_text("1577-8787");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("공동인증서발급신청");

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
        this.addIncludeScript("OMG_DS_SC_4642.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_4642.xfdl", function() {
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
        this.ImageViewer00_onclick = function(obj,e)
        {
        	system.execBrowser("http://www.signkorea.com/service/eSCM.htm");
        }
        this.ImageViewer00_onmouseenter = function(obj,e)
        {
        	this.ImageViewer00.style.set_cursor("hand");
        }

        this.ImageViewer01_onclick = function(obj,e)
        {
        	system.execBrowser("http://hanaroescm.signra.com");
        }
        this.ImageViewer01_onmouseenter = function(obj,e)
        {
        	this.ImageViewer01.style.set_cursor("hand");
        }

        this.ImageViewer02_onclick = function(obj,e)
        {
        	system.execBrowser("https://raadmin.crosscert.com/customer/nhescm/index.html");
        }
        this.ImageViewer02_onmouseenter = function(obj,e)
        {
        	this.ImageViewer02.style.set_cursor("hand");
        }

        this.ImageViewer03_onclick = function(obj,e)
        {
        	system.execBrowser("http://hanaroescm.signra.com");
        }
        this.ImageViewer03_onmouseenter = function(obj,e)
        {
        	this.ImageViewer03.style.set_cursor("hand");
        }

        
        this.Static18_onclick = function(obj,e)
        {
        	system.execBrowser("http://www.crosscert.com/glca/01_4_01.jsp")
        }

        this.Static16_onclick = function(obj,e)
        {
        	system.execBrowser("https://www.signgate.com/paperspresentninstt/formPapersPresentnInstt.sg")
        	
        }

        this.Static16_onmouseenter = function(obj,e)
        {
        	this.Static16.style.set_color("blue");
        	this.Static16.style.set_cursor("hand");
        }

        this.Static16_onmouseleave = function(obj,e)
        {
        	this.Static16.style.set_color("black");
        }

        this.Static18_onmouseenter = function(obj,e)
        {
        	this.Static18.style.set_color("blue");
        	this.Static18.style.set_cursor("hand");
        }

        this.Static18_onmouseleave = function(obj,e)
        {
        	this.Static18.style.set_color("black");
        }
        this.Static01_onclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Static05.addEventHandler("onclick", this.Static01_onclick, this);
            this.ImageViewer00.addEventHandler("onclick", this.ImageViewer00_onclick, this);
            this.ImageViewer00.addEventHandler("onmouseenter", this.ImageViewer00_onmouseenter, this);
            this.ImageViewer01.addEventHandler("onclick", this.ImageViewer01_onclick, this);
            this.ImageViewer01.addEventHandler("onmouseenter", this.ImageViewer01_onmouseenter, this);
            this.ImageViewer02.addEventHandler("onclick", this.ImageViewer02_onclick, this);
            this.ImageViewer02.addEventHandler("onmouseenter", this.ImageViewer02_onmouseenter, this);
            this.ImageViewer03.addEventHandler("onclick", this.ImageViewer03_onclick, this);
            this.ImageViewer03.addEventHandler("onmouseenter", this.ImageViewer03_onmouseenter, this);

        };

        this.loadIncludeScript("OMG_DS_SC_4642.xfdl");

       
    };
}
)();
