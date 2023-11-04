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
                this.set_name("OMG_DS_SC_4640");
                this.set_titletext("공동인증서란?");
                this.set_name("OMG_DS_SC_6120");
                this._setFormPosition(0,0,803,880);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static07", "absolute", "11", "23", "777", "26", null, null, this);
            obj.set_taborder("0");
            obj.set_text("공동인증서란?");
            obj.style.set_font("12 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "11", "54", "777", "1", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Menulist");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "11", "72", "777", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_text("공동인증서 개요");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea00", "absolute", "11", "94", "777", "68", null, null, this);
            obj.set_taborder("15");
            obj.set_text("공인인증기관이 전자상거래 시 문서 보안과 사용자 인증을 위해 기존의 인감을 대신하여 발행하는 전자정보입니다.\r\n전자세금계산서를 사용하기 위해서는 기존에 종이세금계산서 발행 시 인감 날인하였던 절차를 대신하여 공동인증서를 통해 전자서명을 해주어야 합니다.");
            obj.set_wordwrap("char");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 none #bfbfbfff");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "11", "164", "777", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_text("공동인증서 내용");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea02", "absolute", "11", "190", "777", "18", null, null, this);
            obj.set_taborder("17");
            obj.set_text("사용자 신원 정보, 발급기관 이름, 인증서 유효 기관, 인증서 일련번호, 인증서 종류 등");
            obj.set_wordwrap("char");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 none #bfbfbfff");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "11", "218", "777", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_text("공동인증서 역할");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea03", "absolute", "11", "244", "777", "18", null, null, this);
            obj.set_taborder("19");
            obj.set_text("사용자 인증, 전자문서 위변조 방지, 전자문서 보안 (제3자에 비공개), 전자문서 발행 및 접수 행위에 대한 부인 방지");
            obj.set_wordwrap("char");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 none #bfbfbfff");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "11", "272", "777", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_text("하나로eSCM 사용 가능한 공동인증서 종류");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "11", "299", "777", "29", null, null, this);
            obj.set_taborder("22");
            obj.set_text("범용공동인증서 (1등급)");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "11", "327", "777", "69", null, null, this);
            obj.set_taborder("23");
            obj.set_text("- 범용공동인증서 (1등급)은 하나로eSCM을 포함한 모든 전자거래시 사용할 수 있는 인증서입니다.\r\n- 범용공동인증서를 가지고 계신 고객사는 하나로eSCM에서도 해당 인증서를 사용할 수 있습니다.\r\n- 범용공동인증서가 없는 고객사는 하나로eSCM을 통해 신규 신청하여 발급받아야 합니다.");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "11", "518", "777", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_text("공동인증서 수수료");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static55", "absolute", "373", "600", "415", "29", null, null, this);
            obj.set_taborder("25");
            obj.set_text("110,000 원 (부가세 포함)");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "11", "600", "363", "29", null, null, this);
            obj.set_taborder("26");
            obj.set_text("한국정보인증");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "11", "572", "363", "29", null, null, this);
            obj.set_taborder("27");
            obj.set_text("발급기관");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#f6f6f6ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "373", "572", "415", "29", null, null, this);
            obj.set_taborder("28");
            obj.set_text("수수료");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#f6f6f6ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "11", "544", "777", "29", null, null, this);
            obj.set_taborder("29");
            obj.set_text("범용공동인증서 (1등급)");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "11", "628", "363", "29", null, null, this);
            obj.set_taborder("32");
            obj.set_text("KOSCOM");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "373", "628", "415", "29", null, null, this);
            obj.set_taborder("33");
            obj.set_text("110,000 원 (부가세 포함)");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "11", "656", "363", "29", null, null, this);
            obj.set_taborder("35");
            obj.set_text("한국전자인증");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "373", "656", "415", "29", null, null, this);
            obj.set_taborder("36");
            obj.set_text("110,000 원 (부가세 포함)");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "11", "409", "777", "29", null, null, this);
            obj.set_taborder("39");
            obj.set_text("전자세금용인증서");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "11", "437", "777", "69", null, null, this);
            obj.set_taborder("40");
            obj.set_text("- 전자세금용 인증서는 전자세금계산서 교부 등 관련 업무에 사용되는 공동인증서입니다.\r\n- 전자세금용 인증서 사용범위\r\n    : 국세청 e세로 사이트, 전자세금계산서 관련 ASP, ERP사이트, 국세청 제공 민원업무");
            obj.set_wordwrap("char");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "373", "751", "415", "115", null, null, this);
            obj.set_taborder("41");
            obj.set_text("4,400 원 (부가세 포함)");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "11", "751", "363", "115", null, null, this);
            obj.set_taborder("42");
            obj.set_text("시중은행\r\n(스탠다드차타드은행, 수협중앙회, 광주은행, 부산은행, 대구은행, 우리은행, 기업은행, 국민은행, 제주은행, 경남은행, 농협중앙회, 전북은행, 신한은행, 하나은행, 신협중앙회, 외환은행, 한국씨티은행, 새마을금고연합회, 산업은행, 산림조합중앙회)");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "11", "723", "363", "29", null, null, this);
            obj.set_taborder("43");
            obj.set_text("발급기관");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#f6f6f6ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "373", "723", "415", "29", null, null, this);
            obj.set_taborder("44");
            obj.set_text("수수료");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#f6f6f6ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "11", "695", "777", "29", null, null, this);
            obj.set_taborder("45");
            obj.set_text("전자세금용인증서");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "787", "0", "15", "490", null, null, this);
            obj.set_taborder("46");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 880, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("공동인증서란?");

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
        this.addIncludeScript("OMG_DS_SC_4640.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_4640.xfdl", function() {
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

        
         

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Static05.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static03.addEventHandler("onclick", this.Static03_onclick, this);
            this.Static00.addEventHandler("onclick", this.Static03_onclick, this);
            this.Static01.addEventHandler("onclick", this.Static03_onclick, this);
            this.Static02.addEventHandler("onclick", this.Static03_onclick, this);
            this.Static04.addEventHandler("onclick", this.Static03_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_4640.xfdl");

       
    };
}
)();
