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
                this.set_name("OMG_DS_SC_4620");
                this.set_titletext("서비스가입안내");
                this.set_name("OMG_DS_SC_6120");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static02", "absolute", "11", "23", null, "26", "74.97%", null, this);
            obj.set_taborder("0");
            obj.set_text("서비스 가입안내");
            obj.style.set_font("12 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "11", "72", "777", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_text("회원구분 및 권한");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_border("0 none #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "11", "1154", "777", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_text("회원가입 절차");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "11", "122", "175", "29", null, null, this);
            obj.set_taborder("4");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "11", "150", "175", "57", null, null, this);
            obj.set_taborder("5");
            obj.set_text("협력업체");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "185", "150", "243", "29", null, null, this);
            obj.set_taborder("11");
            obj.set_text("협력업체 (본사/지사)");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "185", "122", "243", "29", null, null, this);
            obj.set_taborder("12");
            obj.set_text("회원구분");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "427", "122", "361", "29", null, null, this);
            obj.set_taborder("30");
            obj.set_text("권한");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "427", "150", "361", "29", null, null, this);
            obj.set_taborder("31");
            obj.set_text("빌링, 전자계약, 세금계산서");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "11", "206", "175", "57", null, null, this);
            obj.set_taborder("6");
            obj.set_text("농협하나로유통");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "185", "206", "243", "29", null, null, this);
            obj.set_taborder("10");
            obj.set_text("본부 (바이어)");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "185", "234", "243", "29", null, null, this);
            obj.set_taborder("34");
            obj.set_text("사업장 (조합)");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "427", "206", "361", "29", null, null, this);
            obj.set_taborder("35");
            obj.set_text("웹하드, 컨설팅, 전자계약, 계약상담, 세금계산서");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "427", "234", "361", "29", null, null, this);
            obj.set_taborder("36");
            obj.set_text("웹하드, 컨설팅, 전자계약, 계약상담, 세금계산서");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "11", "262", "175", "29", null, null, this);
            obj.set_taborder("8");
            obj.set_text("ID생성규칙");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "185", "262", "603", "29", null, null, this);
            obj.set_taborder("9");
            obj.set_text("7~9자리, 첫 두 문자 영문, 영문과 숫자조합");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "11", "290", "175", "71", null, null, this);
            obj.set_taborder("7");
            obj.set_text("비밀번호 생성규칙");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "185", "290", "603", "71", null, null, this);
            obj.set_taborder("40");
            obj.set_text("8~16자리, 영문+숫자+특수문자 조합\r\n연속되는 숫자, 영문 및 동일 숫자 (영문은 3자 이상은 불가)\r\n비밀번호 변경이 90일 지나면 로그인 시 알림");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "11", "382", "777", "21", null, null, this);
            obj.set_taborder("41");
            obj.set_text("협력업체 신규 회원가입");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "11", "775", "777", "21", null, null, this);
            obj.set_taborder("43");
            obj.set_text("본부/사업장 회원가입");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00", "absolute", "11", "408", "777", "350", null, null, this);
            obj.set_taborder("44");
            obj.set_image("URL('theme://images/membership_join1.png')");
            obj.set_stretch("fixaspectratio");
            obj.style.set_border("0 solid #bfbfbfff");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer02", "absolute", "11", "794", "777", "350", null, null, this);
            obj.set_taborder("46");
            obj.set_image("URL('theme://images/membership_join2.png')");
            obj.set_stretch("fixaspectratio");
            obj.style.set_border("0 solid #bfbfbfff");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "11", "54", "777", "1", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Menulist");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "11", "1180", "136", "29", null, null, this);
            obj.set_taborder("48");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "11", "1208", "136", "235", null, null, this);
            obj.set_taborder("49");
            obj.set_text("회원가입");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "11", "1442", "136", "66", null, null, this);
            obj.set_taborder("50");
            obj.set_text("가입승인");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "145", "1180", "643", "29", null, null, this);
            obj.set_taborder("51");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 arial");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "145", "1208", "643", "29", null, null, this);
            obj.set_taborder("52");
            obj.set_text("1) 메인화면에서 회원가입를 누릅니다.");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "145", "1442", "643", "66", null, null, this);
            obj.set_taborder("53");
            obj.set_text("하나로eSCM서비스는 회원가입내용을 확인 후 서비스 가입을 승인합니다.\r\n서비스 가입 승인이 완료되어야 서비스 사용이 가능합니다.");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "145", "1236", "643", "29", null, null, this);
            obj.set_taborder("56");
            obj.set_text("2) 회원가입 중 원하는 회원 종류를 선택한 후 확인을 누릅니다.");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "145", "1264", "643", "29", null, null, this);
            obj.set_taborder("57");
            obj.set_text("3) 서비스 이용약관과 개인정보 수집 및 이용동의에 동의합니다.");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "145", "1292", "643", "106", null, null, this);
            obj.set_taborder("58");
            obj.set_text("4) 각 회원 종류에 따른 정보를 입력한 후 인증합니다.\r\n   - 협력업체: 사업자번호, 거래처코드\r\n   - 본부: 사업장코드 (사업자번호 자동 입력)\r\n   - 사업장: 사업장코드\r\n   - 세금계산서전용: 사업자번호, 거래처코드");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "145", "1397", "643", "46", null, null, this);
            obj.set_taborder("59");
            obj.set_text("5) 회원정보와 권한정보를 입력합니다.\r\n   * 최초 가입자는 권한정보에서 빌링을 선택한 후 납부정보를 입력해야 합니다.");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "787", "0", "15", "490", null, null, this);
            obj.set_taborder("60");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("TextArea00", "absolute", "11", "98", "777", "22", null, null, this);
            obj.set_taborder("3");
            obj.set_text("하나로 eSCM서비스의 회원 구분과 각각의 권한은 아래와 같습니다.");
            obj.set_wordwrap("char");
            obj.getSetter("readonly").set("true");
            obj.style.set_border("1 none #bfbfbfff");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "185", "178", "243", "29", null, null, this);
            obj.set_taborder("61");
            obj.set_text("세금계산서전용");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "427", "178", "361", "29", null, null, this);
            obj.set_taborder("62");
            obj.set_text("빌링, 세금계산서");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "145", "1507", "643", "66", null, null, this);
            obj.set_taborder("63");
            obj.set_text("고객센터(02-1522-1211)로만 접수 가능합니다.");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "11", "1507", "136", "66", null, null, this);
            obj.set_taborder("64");
            obj.set_text("회원탈퇴");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("서비스가입안내");

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
        this.addIncludeScript("OMG_DS_SC_4620.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_4620.xfdl", function() {
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
            this.Static11.addEventHandler("onclick", this.Static11_onclick, this);
            this.Static01.addEventHandler("onclick", this.Static01_onclick, this);
            this.Static22.addEventHandler("onclick", this.Static11_onclick, this);
            this.Static35.addEventHandler("onclick", this.Static11_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_4620.xfdl");

       
    };
}
)();
