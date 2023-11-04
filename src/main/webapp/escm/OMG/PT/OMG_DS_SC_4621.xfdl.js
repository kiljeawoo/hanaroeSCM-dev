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
                this.set_name("OMG_DS_SC_4621");
                this.set_titletext("서비스변경안내");
                this.set_name("OMG_DS_SC_6120");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static01", "absolute", "11", "54", "777", "1", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Menulist");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "11", "23", "777", "26", null, null, this);
            obj.set_taborder("0");
            obj.set_text("서비스변경 안내");
            obj.style.set_font("12 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "11", "72", "777", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_text("회원정보 변경");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "11", "370", "777", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_text("비밀번호 변경");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer02", "absolute", "11", "422", "777", "292", null, null, this);
            obj.set_taborder("5");
            obj.set_image("URL('theme://images/edit_password.png')");
            obj.set_stretch("fixaspectratio");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 double #385d8aff");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea01", "absolute", "11", "396", "777", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_text("회원 비밀번호 변경 경로: 로그인 > 내정보 > 회원정보변경 > 비밀번호변경");
            obj.set_wordwrap("char");
            obj.style.set_border("1 none #bfbfbfff");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "11", "127", "777", "29", null, null, this);
            obj.set_taborder("7");
            obj.set_text("회원정보 변경 가능 내용");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "11", "155", "287", "29", null, null, this);
            obj.set_taborder("8");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#f6f6f6ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "297", "155", "491", "29", null, null, this);
            obj.set_taborder("9");
            obj.set_text("변경 내용");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#f6f6f6ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "297", "183", "491", "29", null, null, this);
            obj.set_taborder("10");
            obj.set_text("업체유형(공급업체/쿠폰관리/위탁업체)");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "11", "183", "287", "29", null, null, this);
            obj.set_taborder("11");
            obj.set_text("회사정보");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea00", "absolute", "11", "103", "777", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_text("회원 비밀번호 변경 경로: 로그인 > 내정보 > 회원정보변경 >회원정보변경");
            obj.set_wordwrap("char");
            obj.style.set_border("1 none #bfbfbfff");
            obj.getSetter("readonly").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "11", "211", "287", "29", null, null, this);
            obj.set_taborder("13");
            obj.set_text("회원정보");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "11", "239", "141", "122", null, null, this);
            obj.set_taborder("14");
            obj.set_text("권한정보");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "297", "211", "491", "29", null, null, this);
            obj.set_taborder("15");
            obj.set_text("이름, 생년월일, 성별, 이메일, 휴대폰번호, 수신서비스(SMS,메일)");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "151", "239", "147", "66", null, null, this);
            obj.set_taborder("16");
            obj.set_text("빌링");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "151", "304", "147", "29", null, null, this);
            obj.set_taborder("17");
            obj.set_text("전자계약");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "151", "332", "147", "29", null, null, this);
            obj.set_taborder("18");
            obj.set_text("세금계산서");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "297", "239", "491", "66", null, null, this);
            obj.set_taborder("19");
            obj.set_text("서비스이용-부가정보(정액제/종량제), 정보분석(BI조회/추이분석/시장분석)\r\n청구정보(회사명, 사업자번호, 대표자명, 회사주소, 업태, 종목)\r\n납부정보(결제방식, 출금일, 거래은행, 계좌번호 등)");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "297", "304", "491", "29", null, null, this);
            obj.set_taborder("20");
            obj.set_text("인감정보");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "297", "332", "491", "29", null, null, this);
            obj.set_taborder("21");
            obj.set_text("전자세금계산서 업무");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "787", "0", "15", "490", null, null, this);
            obj.set_taborder("22");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("서비스변경안내");

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
        this.addIncludeScript("OMG_DS_SC_4621.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_4621.xfdl", function() {
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

        

        this.Static15_onclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Static01.addEventHandler("onclick", this.Static01_onclick, this);
            this.ImageViewer02.addEventHandler("onclick", this.ImageViewer02_onclick, this);
            this.Static15.addEventHandler("onclick", this.Static15_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_4621.xfdl");

       
    };
}
)();
