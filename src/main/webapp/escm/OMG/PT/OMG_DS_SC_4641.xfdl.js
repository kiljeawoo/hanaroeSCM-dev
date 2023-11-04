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
                this.set_name("OMG_DS_SC_4641");
                this.set_titletext("공동인증서신청방법");
                this.set_name("OMG_DS_SC_6120");
                this._setFormPosition(0,0,803,654);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static05", "absolute", "11", "54", "777", "1", null, null, this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_Menulist");
            obj.style.set_padding("0 0 0 18");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "11", "23", "777", "26", null, null, this);
            obj.set_taborder("0");
            obj.set_text("공동인증서 신청방법");
            obj.style.set_padding("2 0 0 0");
            obj.style.set_font("12 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "11", "72", "777", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("공동인증서 신청절차");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 1 14");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea00", "absolute", "11", "98", "777", "20", null, null, this);
            obj.set_taborder("13");
            obj.set_text("1.배너 클릭");
            obj.set_wordwrap("char");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_border("1 none #bfbfbfff");
            obj.style.set_font("bold 9 arial");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea02", "absolute", "11", "123", "777", "20", null, null, this);
            obj.set_taborder("14");
            obj.set_text("하나로eSCM 공동인증서 발급신청 메뉴의 발급신청 배너를 클릭합니다.");
            obj.set_wordwrap("char");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_border("1 none #bfbfbfff");
            obj.style.set_font("9 굴림");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea03", "absolute", "11", "173", "777", "20", null, null, this);
            obj.set_taborder("15");
            obj.set_text("공인인증기관 사이트에 접속하여 신청서에 정보를 입력합니다.");
            obj.set_wordwrap("char");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_border("1 none #bfbfbfff");
            obj.style.set_font("9 굴림");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea04", "absolute", "11", "148", "777", "20", null, null, this);
            obj.set_taborder("16");
            obj.set_text("2.신청서 작성");
            obj.set_wordwrap("char");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_border("1 none #bfbfbfff");
            obj.style.set_font("bold 9 arial");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea05", "absolute", "11", "223", "777", "20", null, null, this);
            obj.set_taborder("17");
            obj.set_text("공동인증서 발급 수수료를 납부합니다.");
            obj.set_wordwrap("char");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_border("1 none #bfbfbfff");
            obj.style.set_font("9 굴림");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea06", "absolute", "11", "198", "777", "20", null, null, this);
            obj.set_taborder("18");
            obj.set_text("3.수수료 납부");
            obj.set_wordwrap("char");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_border("1 none #bfbfbfff");
            obj.style.set_font("bold 9 arial");
            obj.getSetter("oneditclick").set("TextArea06_oneditclick");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea07", "absolute", "11", "273", "777", "38", null, null, this);
            obj.set_taborder("19");
            obj.set_text("신청서를 포함한 구비 서류를 준비하여 공동인증서 발급기관 및 등록대행기관에 접수합니다.\r\n*자세한 구비 서류 및 서류제출처는 공동인증서 발급신청 메뉴 참조");
            obj.set_wordwrap("char");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_border("1 none #bfbfbfff");
            obj.style.set_font("9 굴림");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea08", "absolute", "11", "248", "777", "20", null, null, this);
            obj.set_taborder("20");
            obj.set_text("4.서류 접수");
            obj.set_wordwrap("char");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_border("1 none #bfbfbfff");
            obj.style.set_font("bold 9 arial");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea11", "absolute", "11", "316", "777", "20", null, null, this);
            obj.set_taborder("23");
            obj.set_text("5.인증서 발급");
            obj.set_wordwrap("char");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_border("1 none #bfbfbfff");
            obj.style.set_font("bold 9 arial");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea12", "absolute", "11", "341", "777", "22", null, null, this);
            obj.set_taborder("24");
            obj.set_text("공동인증서 발급기관 홈페이지에서 인증서를 발급받습니다.");
            obj.set_wordwrap("char");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_border("1 none #bfbfbfff");
            obj.style.set_font("9 굴림");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "11", "391", "259", "29", null, null, this);
            obj.set_taborder("25");
            obj.set_text("발급");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 11");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "11", "419", "259", "119", null, null, this);
            obj.set_taborder("26");
            obj.set_text("-공동인증서를 발급받은 적이 없거나 인증기간 만료, 사업자변호 변경 등의 사유로 신규신청을 해야 하는 경우입니다.\r\n-수수료 납부 및 서류 접수가 필요합니다.");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_padding("2 7 0 7");
            obj.style.set_align("left middle");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "269", "391", "259", "29", null, null, this);
            obj.set_taborder("27");
            obj.set_text("재발급");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "269", "419", "259", "119", null, null, this);
            obj.set_taborder("28");
            obj.set_text("-저장매체 고장, 분실 등의 사유로 인증서를 분실하였거나 암호 분실, 상호명이 변경되어 새 인증서를 신청해야 하는 경우입니다.\r\n-수수료 납부 및 서류 접수가 필요합니다.");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "527", "391", "259", "29", null, null, this);
            obj.set_taborder("29");
            obj.set_text("갱신");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "527", "419", "259", "119", null, null, this);
            obj.set_taborder("30");
            obj.set_text("-현재 사용하고 있는 공동인증서의 유효기간이 만료예정으로 1년 연장하기 위해 신청하는 경우입니다.(만료 1개월전 가능)");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "11", "368", "777", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("공동인증서 신청종류");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 1 14");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "11", "548", "777", "21", null, null, this);
            obj.set_taborder("32");
            obj.set_text("공동인증서 관련 유의사항");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 1 14");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea13", "absolute", "11", "570", "777", "74", null, null, this);
            obj.set_taborder("33");
            obj.set_text("-공동인증서 갱신은 유효기간 만료 1개월 전까지만 가능합니다.\r\n-공동인증서는 PC에 저장하신 후 이동디스크 (USB,디스켓) 등에 백업해 놓는 것이 좋습니다.\r\n-공동인증서를 발급받은 후 회사정보가 변경되었을 때는 재발급 받아야 합니다. (재신청)\r\n-금융권 인터넷뱅킹용 공동인증서는 전자거래 (전자세금계산서/전자계약/전자구매 등)서비스 이용 시 사용할 수 없습니다.");
            obj.set_wordwrap("char");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_border("1 none #bfbfbfff");
            obj.style.set_font("9 굴림");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "787", "0", "15", "490", null, null, this);
            obj.set_taborder("34");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 654, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("공동인증서신청방법");

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
        this.addIncludeScript("OMG_DS_SC_4641.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_4641.xfdl", function() {
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

        
         

        this.TextArea06_oneditclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Static05.addEventHandler("onclick", this.Static01_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_4641.xfdl");

       
    };
}
)();
