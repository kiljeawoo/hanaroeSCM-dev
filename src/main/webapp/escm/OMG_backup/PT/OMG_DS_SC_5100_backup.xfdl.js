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
                this.set_name("OMG_DS_SC_5100");
                this.set_titletext("회원가입");
                this._setFormPosition(0,0,750,512);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_naTrplC", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"USR_TPC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_bzplc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_DSC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_step2", "absolute", "0", "525", null, "512", "0", null, this);
            obj.set_taborder("8");
            obj.style.set_background("white");
            obj.set_scrollbars("none");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new TextArea("txa_arr01", "absolute", "10", "117", null, "100", "10", null, this.div_step2);
            obj.set_taborder("14");
            obj.set_tabstop("false");
            obj.set_scrollbars("autovert");
            obj.set_wordwrap("char");
            obj.set_readonly("true");
            obj.style.set_padding("5 5 5 5");
            obj.set_cssclass("txt_modern");
            this.div_step2.addChild(obj.name, obj);
            obj = new CheckBox("chk_agr01", "absolute", "668", "219", "19", "21", null, null, this.div_step2);
            obj.set_taborder("15");
            this.div_step2.addChild(obj.name, obj);
            obj = new TextArea("txa_arr02", "absolute", "10", "271", null, "140", "10", null, this.div_step2);
            obj.set_taborder("16");
            obj.set_tabstop("false");
            obj.set_scrollbars("autovert");
            obj.set_wordwrap("char");
            obj.set_readonly("true");
            obj.style.set_padding("5 5 5 5");
            obj.style.set_font("12 Gulim");
            obj.set_cssclass("txt_modern");
            this.div_step2.addChild(obj.name, obj);
            obj = new CheckBox("chk_agr02", "absolute", "668", "413", "19", "21", null, null, this.div_step2);
            obj.set_taborder("17");
            this.div_step2.addChild(obj.name, obj);
            obj = new Div("Div02", "absolute", "0", "0", null, "43", "0", null, this.div_step2);
            obj.set_taborder("18");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.div_step2.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "9", "107", "21", null, null, this.div_step2.Div02);
            obj.set_taborder("59");
            obj.set_text("약관동의");
            obj.style.set_font("bold 9 arial");
            this.div_step2.Div02.addChild(obj.name, obj);
            obj = new Button("btn_prev", "absolute", null, "9", "65", "21", "10", null, this.div_step2.Div02);
            obj.set_taborder("60");
            obj.set_text("이전화면");
            obj.set_cssclass("btn_WF_CRUD");
            this.div_step2.Div02.addChild(obj.name, obj);
            obj = new TextArea("argee02", "absolute", "10", "49", null, "36", "24", null, this.div_step2);
            obj.set_taborder("19");
            obj.set_readonly("true");
            this.div_step2.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "84", "51", "456", "30", null, null, this.div_step2);
            obj.set_taborder("20");
            obj.set_text("하나로eSCM 서비스 이용약관, 개인정보 수집 및 이용에 <b v='true'><u v='true'>모두 동의</u></b>합니다.");
            obj.set_usedecorate("true");
            this.div_step2.addChild(obj.name, obj);
            obj = new CheckBox("chk_allAgree", "absolute", "570", "57", "46", "21", null, null, this.div_step2);
            obj.set_taborder("21");
            this.div_step2.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "10", "96", "542", "21", null, null, this.div_step2);
            obj.set_taborder("22");
            obj.set_text("<b v='true'><fc v='#ff0000ff'>[필수]</fc>하나로eSCM 서비스 이용약관을 끝까지 읽어 주시기 바랍니다.</b>");
            obj.set_usedecorate("true");
            this.div_step2.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "416", "219", "252", "21", null, null, this.div_step2);
            obj.set_taborder("23");
            obj.set_text("하나로eSCM 서비스 이용약관에 동의합니다.");
            obj.set_usedecorate("true");
            obj.style.set_color("red");
            this.div_step2.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "10", "250", "677", "21", null, null, this.div_step2);
            obj.set_taborder("24");
            obj.set_text("<b v='true'><fc v='#ff0000ff'>[필수]</fc>하나로eSCM 서비스 개인정보 수집 및 이용동의 끝까지 읽어 주시기 바랍니다.</b>");
            obj.set_usedecorate("true");
            this.div_step2.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "344", "413", "321", "21", null, null, this.div_step2);
            obj.set_taborder("25");
            obj.set_text("하나로eSCM 서비스 개인정보 수집 및 이용에 동의합니다.");
            obj.set_usedecorate("true");
            obj.style.set_color("red");
            this.div_step2.addChild(obj.name, obj);
            obj = new Button("btn_agree", "absolute", "363", "447", "70", "40", null, null, this.div_step2);
            obj.set_taborder("26");
            obj.set_text("동의");
            obj.set_cssclass("btn_WF_CRUD");
            this.div_step2.addChild(obj.name, obj);
            obj = new Button("btn_notAgree", "absolute", "276", "447", "70", "40", null, null, this.div_step2);
            obj.set_taborder("27");
            obj.set_text("동의안함");
            obj.set_cssclass("btn_WF_CRUD");
            this.div_step2.addChild(obj.name, obj);

            obj = new Div("div_step1", "absolute", "0", "0", null, "512", "0", null, this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "10", "89", null, "50", "10", null, this.div_step1);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_step1.addChild(obj.name, obj);
            obj = new Edit("edt_join_usrid", "absolute", "135", "99", "196", "30", null, null, this.div_step1);
            obj.set_taborder("19");
            obj.style.set_align("center");
            obj.style.set_font("12 맑은 고딕, Gulim");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("9");
            obj.set_visible("false");
            obj.set_enable("false");
            this.div_step1.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "10", "60", "250", "21", null, null, this.div_step1);
            obj.set_taborder("1");
            obj.set_text("회원가입 가능 유형 확인");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.div_step1.addChild(obj.name, obj);
            obj = new Static("sta_chk_input", "absolute", "10", "89", "120", "50", null, null, this.div_step1);
            obj.set_taborder("2");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WF_Label");
            this.div_step1.addChild(obj.name, obj);
            obj = new Button("btn_join_chk", "absolute", "341", "99", "60", "30", null, null, this.div_step1);
            obj.set_taborder("4");
            obj.set_text("확인");
            this.div_step1.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "10", "172", "250", "21", null, null, this.div_step1);
            obj.set_taborder("5");
            obj.set_text("세부 가입유형 선택");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.div_step1.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "0", "0", null, "43", "0", null, this.div_step1);
            obj.set_taborder("10");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.div_step1.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "9", "107", "21", null, null, this.div_step1.Div00);
            obj.set_taborder("0");
            obj.set_text("가입정보 확인");
            obj.style.set_font("bold 9 arial");
            this.div_step1.Div00.addChild(obj.name, obj);
            obj = new Div("div_type_nh", "absolute", "0", "207", null, "80", "0", null, this.div_step1);
            obj.set_taborder("18");
            obj.set_visible("false");
            this.div_step1.addChild(obj.name, obj);
            obj = new Button("btn_join_02", "absolute", "4%", "5", "45%", "30", null, null, this.div_step1.div_type_nh);
            obj.set_taborder("4");
            obj.set_text("본 부");
            obj.set_enable("false");
            obj.style.set_font("10 맑은 고딕, Gulim");
            obj.style.setStyleValue("padding", "disabled", "0 0 0 0");
            this.div_step1.div_type_nh.addChild(obj.name, obj);
            obj = new Button("btn_join_03", "absolute", null, "5", "45%", "30", "4%", null, this.div_step1.div_type_nh);
            obj.set_taborder("7");
            obj.set_text("사업장");
            obj.set_enable("false");
            obj.style.set_font("10 맑은 고딕, Gulim");
            obj.style.setStyleValue("padding", "disabled", "0 0 0 0");
            this.div_step1.div_type_nh.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "4%", "47", "527", "21", null, null, this.div_step1.div_type_nh);
            obj.set_taborder("8");
            obj.set_text("- 하나로유통 사무소에 등록된 사용자만 본부회원 가입이 가능합니다.");
            this.div_step1.div_type_nh.addChild(obj.name, obj);
            obj = new Button("btn_next", "absolute", "300", "440", "100", "40", null, null, this.div_step1);
            obj.set_taborder("15");
            obj.set_text("다 음");
            obj.set_cssclass("btn_WF_CRUD");
            this.div_step1.addChild(obj.name, obj);
            obj = new Edit("edt_hidden_tpc", "absolute", null, "173", "65", "17", "15", null, this.div_step1);
            obj.set_taborder("16");
            obj.style.set_align("center");
            obj.style.set_font("12 맑은 고딕, Gulim");
            obj.set_enable("false");
            obj.set_visible("false");
            this.div_step1.addChild(obj.name, obj);
            obj = new Div("div_type_co", "absolute", "0", "207", null, "80", "0", null, this.div_step1);
            obj.set_taborder("17");
            this.div_step1.addChild(obj.name, obj);
            obj = new Button("btn_join_01", "absolute", "4%", "5", "20%", "30", null, null, this.div_step1.div_type_co);
            obj.set_taborder("0");
            obj.set_text("협력업체");
            obj.set_enable("false");
            obj.style.set_font("10 맑은 고딕, Gulim");
            obj.style.setStyleValue("padding", "disabled", "0 0 0 0");
            this.div_step1.div_type_co.addChild(obj.name, obj);
            obj = new Button("btn_join_04", "absolute", "28%", "5", "20%", "30", null, null, this.div_step1.div_type_co);
            obj.set_taborder("1");
            obj.set_text("세금계산서전용");
            obj.set_enable("false");
            obj.style.set_font("10 맑은 고딕, Gulim");
            obj.style.setStyleValue("padding", "disabled", "0 0 0 0");
            this.div_step1.div_type_co.addChild(obj.name, obj);
            obj = new Button("btn_join_81", "absolute", null, "5", "20%", "30", "28%", null, this.div_step1.div_type_co);
            obj.set_taborder("2");
            obj.set_text("농협몰");
            obj.set_enable("false");
            obj.style.set_font("10 맑은 고딕, Gulim");
            obj.style.setStyleValue("padding", "disabled", "0 0 0 0");
            this.div_step1.div_type_co.addChild(obj.name, obj);
            obj = new Button("btn_join_05", "absolute", null, "5", "20%", "30", "4%", null, this.div_step1.div_type_co);
            obj.set_taborder("3");
            obj.set_text("전자계약전용");
            obj.style.set_font("10 맑은 고딕, Gulim");
            obj.style.setStyleValue("padding", "disabled", "0 0 0 0");
            obj.set_enable("false");
            this.div_step1.div_type_co.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "4%", "47", "527", "21", null, null, this.div_step1.div_type_co);
            obj.set_taborder("4");
            obj.set_text("- 사업자번호로 등록된 GLN이 없을 경우 전자계약전용 회원만 가능합니다. ");
            this.div_step1.div_type_co.addChild(obj.name, obj);
            obj = new Div("div_check_co", "absolute", "135", "99", "196", "30", null, null, this.div_step1);
            obj.set_taborder("20");
            obj.set_scrollbars("none");
            this.div_step1.addChild(obj.name, obj);
            obj = new Edit("edt_join_bzno1", "absolute", "0", "0", "50", "30", null, null, this.div_step1.div_check_co);
            obj.set_taborder("0");
            obj.set_inputtype("number");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("3");
            obj.style.set_align("center");
            obj.style.set_font("12 맑은 고딕, Gulim");
            this.div_step1.div_check_co.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "53", "0", "15", "30", null, null, this.div_step1.div_check_co);
            obj.set_taborder("1");
            obj.set_text("-");
            obj.style.set_align("center");
            this.div_step1.div_check_co.addChild(obj.name, obj);
            obj = new Edit("edt_join_bzno2", "absolute", "71", "0", "40", "30", null, null, this.div_step1.div_check_co);
            obj.set_taborder("2");
            obj.set_inputtype("number");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("2");
            obj.style.set_align("center");
            obj.style.set_font("12 맑은 고딕, Gulim");
            this.div_step1.div_check_co.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "113", "0", "15", "30", null, null, this.div_step1.div_check_co);
            obj.set_taborder("3");
            obj.set_text("-");
            obj.style.set_align("center");
            this.div_step1.div_check_co.addChild(obj.name, obj);
            obj = new Edit("edt_join_bzno3", "absolute", "131", "0", "65", "30", null, null, this.div_step1.div_check_co);
            obj.set_taborder("4");
            obj.set_inputtype("number");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("5");
            obj.style.set_align("center");
            obj.style.set_font("12 맑은 고딕, Gulim");
            this.div_step1.div_check_co.addChild(obj.name, obj);
            obj = new Edit("edt_hidden_input", "absolute", null, "62", "65", "17", "15", null, this.div_step1);
            obj.set_taborder("21");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.style.set_align("center");
            obj.style.set_font("12 맑은 고딕, Gulim");
            this.div_step1.addChild(obj.name, obj);
            obj = new Static("sta_info", "absolute", "4%", "300", null, null, "4%", "80", this.div_step1);
            obj.set_taborder("22");
            obj.style.set_padding("5 5 5 5");
            obj.style.set_align("left top");
            obj.set_usedecorate("true");
            this.div_step1.addChild(obj.name, obj);
            obj = new Button("btn_info", "absolute", null, null, "91", "21", "5.07%", "90", this.div_step1);
            obj.set_taborder("23");
            obj.set_text("이용료 안내");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.div_step1.addChild(obj.name, obj);
            obj = new Edit("edt_hidden_dept", "absolute", null, "173", "65", "17", "85", null, this.div_step1);
            obj.set_taborder("24");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.style.set_align("center");
            obj.style.set_font("12 맑은 고딕, Gulim");
            this.div_step1.addChild(obj.name, obj);
            obj = new Edit("edt_hidden_bzplc", "absolute", null, "173", "65", "17", "155", null, this.div_step1);
            obj.set_taborder("25");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.style.set_align("center");
            obj.style.set_font("12 맑은 고딕, Gulim");
            this.div_step1.addChild(obj.name, obj);

            obj = new Div("div_step3", "absolute", "0", "1056", null, "512", "0", null, this);
            obj.set_taborder("18");
            obj.style.set_background("white");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_step2.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("18");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_step2.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 512, this.div_step2,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("8");
            		p.style.set_background("white");
            		p.set_scrollbars("none");
            		p.set_visible("false");

            	}
            );
            this.div_step2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_step1.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("10");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_step1.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 80, this.div_step1.div_type_nh,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("18");
            		p.set_visible("false");

            	}
            );
            this.div_step1.div_type_nh.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 80, this.div_step1.div_type_co,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("17");

            	}
            );
            this.div_step1.div_type_co.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 196, 30, this.div_step1.div_check_co,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("20");
            		p.set_scrollbars("none");

            	}
            );
            this.div_step1.div_check_co.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 700, 500, this.div_step1,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("17");

            	}
            );
            this.div_step1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 512, this.div_step3,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("18");
            		p.style.set_background("white");
            		p.set_visible("false");

            	}
            );
            this.div_step3.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 750, 512, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("회원가입");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_5100_backup.xfdl", "lib::comLib.xjs");
        this.addIncludeScript("OMG_DS_SC_5100_backup.xfdl", "lib::comPolicy.xjs");
        this.registerScript("OMG_DS_SC_5100_backup.xfdl", function() {
        //include "lib::comLib.xjs";
        //include "lib::comPolicy.xjs";

        this.JOIN_TYPE; // 가입구분(CO:협력업체, NH:농협)
        this.sScrollYn = "";
        this.sScrollYn2 = "";

        var arrBtnCO = [this.div_step1.div_type_co.btn_join_01, this.div_step1.div_type_co.btn_join_04, this.div_step1.div_type_co.btn_join_81, this.div_step1.div_type_co.btn_join_05];
        var arrBtnNH = [this.div_step1.div_type_nh.btn_join_02, this.div_step1.div_type_nh.btn_join_03];

        this.form_onload = function(obj,e)
        {
        	this.JOIN_TYPE = this.parent.JOIN_TYPE;
        	this.gfn_setInitForm(obj, e);
        	
        	this.div_step2.set_top(0);
        	this.div_step3.set_top(0);
        }

        this.fn_afterFormOnload = function()
        {
        	// 가입구분에 따른 화면 구성
        	this.fn_initForm(this.JOIN_TYPE == "NH");
        	
        	// 약관 데이터 입력
        	this.div_step2.txa_arr01.set_value(this.policyTerms);
        	this.div_step2.txa_arr02.set_value(this.policyPrivacy);
        	this.div_step2.txa_arr01.addEventHandler("onvscroll", this.Div01_txa_arr01_onvscroll,this);
        	this.div_step2.txa_arr02.addEventHandler("onvscroll", this.Div01_txa_arr02_onvscroll,this);
        }

        /***************************************************
        	메뉴(화면) 관련 코드
        ****************************************************/
        this.fn_initForm = function(isNH)
        {
        	this.div_step1.sta_chk_input.set_text(isNH ? "사원번호" : "사업자번호");
        	this.div_step1.edt_join_usrid.set_visible(isNH);
        	this.div_step1.edt_join_usrid.set_enable(isNH);
        	this.div_step1.div_check_co.set_visible(!isNH);
        	this.div_step1.div_check_co.edt_join_bzno1.set_enable(!isNH);
        	this.div_step1.div_check_co.edt_join_bzno2.set_enable(!isNH);
        	this.div_step1.div_check_co.edt_join_bzno3.set_enable(!isNH);
        	
        	this.div_step1.div_type_nh.set_visible(isNH);
        	this.div_step1.div_type_co.set_visible(!isNH);
        	
        	if (isNH) {
        		this.div_step1.edt_join_usrid.setFocus();
        	} else {
        		this.div_step1.div_check_co.edt_join_bzno1.setFocus();
        	}
        }

        /* 가입유형 버튼 활성/비활성화 */
        this.fn_changeBtnEnable = function(id)
        {
        	var arrList;
        	if (this.JOIN_TYPE == "NH") {
        		arrList = arrBtnNH;
        	} else {
        		arrList = arrBtnCO;
        	}

        	for (var i in arrList) {
        		if (arrList[i].id == id) {
        			arrList[i].style.set_color("#FFFFFFFF");
        			arrList[i].style.set_background("#1385C9FF");
        			arrList[i].style.set_border("1 solid #0d78b8ff");
        		} else {
        			arrList[i].style.set_color("");
        			arrList[i].style.set_background("");
        			arrList[i].style.set_border("");
        		}
        	}
        }

        /* 사업자번호 체크(GLN검사) */
        this.fn_checkBzno = function()
        {
        	var bzno1 = this.gfn_nullToEmpty(this.div_step1.div_check_co.edt_join_bzno1.value);
        	var bzno2 = this.gfn_nullToEmpty(this.div_step1.div_check_co.edt_join_bzno2.value);
        	var bzno3 = this.gfn_nullToEmpty(this.div_step1.div_check_co.edt_join_bzno3.value);
        	
        	if (bzno1.length != 3 || bzno2.length != 2 || bzno3.length != 5) {
        		this.alert("사업자번호를 확인해주세요.");
        		this.div_step1.div_check_co.edt_join_bzno1.setFocus();
        		return;
        	}
        	this.ds_naTrplC.clearData();
        	this.div_step1.sta_info.set_text("");
        	this.div_step1.sta_info.style.set_border("0 none #808080");
        	this.div_step1.edt_hidden_input.set_value(bzno1+bzno2+bzno3);
        	this.div_step1.edt_hidden_tpc.set_value("");
        	this.fn_changeBtnEnable();

        	var param = "bzNo1="+bzno1
        		+" bzNo2="+bzno2
        		+" bzNo3="+bzno3
        		+" usrTpc=01";

        	var sSvcID        = "retriveNaTrplCList";
        	var sURL          = "svc::rest/pt/usrinf/retriveNaTrplCList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_naTrplC=ds_naTrplC";
        	var sArgument     =  param;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /* 사원번호 체크(ID검사) */
        this.fn_checkNhUser = function()
        {
        	var usrId = this.gfn_nullToEmpty(this.div_step1.edt_join_usrid.value);
        	
        	if (this.gfn_isNull(usrId)) {
        		this.alert("사원번호를 입력해주세요.");
        		this.div_step1.edt_join_usrid.setFocus();
        		return;
        	}
        	this.div_step1.sta_info.set_text("");
        	this.div_step1.sta_info.style.set_border("0 none #808080");
        	this.div_step1.edt_hidden_input.set_value(usrId);
        	this.div_step1.edt_hidden_tpc.set_value("");
        	this.div_step1.edt_hidden_dept.set_value("");
        	this.div_step1.edt_hidden_bzplc.set_value("");
        	this.fn_changeBtnEnable();

        	this.ds_bzplc.clearData();
        	var param = "userId="+usrId;

        	var sSvcID        = "retriveNhUserBzplc";
        	var sURL          = "svc::rest/pt/usrinf/retriveNhUserBzplc";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_bzplc=ds_bzplc";
        	var sArgument     =  param;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /***************************************************
        	컴포넌트 이벤트 처리
        ****************************************************/
        this.btn_join_chk_onclick = function(obj,e)
        {
        	if (this.JOIN_TYPE == "NH") {
        		this.fn_checkNhUser();
        	} else {
        		this.fn_checkBzno();
        	}
        }

        this.edt_join_bzno_onkeyup = function(obj,e)
        {
        	if (e.altKey || e.ctrlKey || e.shiftKey) { return; }
        	else if (e.keycode > 15 && e.keycode < 47) { return; }
        	
        	if (obj.id == "edt_join_bzno1") {
        		if (obj.getLength() == 3) {
        			this.div_step1.div_check_co.edt_join_bzno2.setFocus();
        		}
        	} else if (obj.id == "edt_join_bzno2") {
        		if (obj.getLength() == 2) {
        			this.div_step1.div_check_co.edt_join_bzno3.setFocus();
        		}
        	} else {
        		if (e.keycode == 13) {
        			if (this.JOIN_TYPE == "NH") {
        				this.fn_checkNhUser();
        			} else {
        				this.fn_checkBzno();
        			}
        		}
        	}
        }

        this.Div02_btn_next_onclick = function(obj,e)
        {
        	if (this.gfn_isNull(this.div_step1.edt_hidden_tpc.value)) {
        		this.alert("세부 가입유형을 선택해주세요.");
        		return;
        	} else if (this.div_step1.edt_hidden_tpc.value == "02") {
        		// 본부 가입시에는 해당 사번이 하나로유통 사용자(PT_NH_USR_INF)에 등록이 되있어야 함
        		var row = this.ds_bzplc.findRowExpr("DEPT_DSC == '01' && JOIN_YN == 'Y'");
        		if (row == -1) {
        			this.alert("본 사번은 하나로유통 사용자로 등록되어 있지 않아 본부 유형으로 회원가입하실 수 없습니다.");
        			return;
        		} else {
        			this.div_step1.edt_hidden_dept.set_value(this.ds_bzplc.getColumn(row, "DEPT_ID") + "#" + this.ds_bzplc.getColumn(row, "DEPT_NAME"));
        			this.div_step1.edt_hidden_bzplc.set_value(this.ds_bzplc.getColumn(row, "NA_BZPLC"));
        		}
        	}
        	
        	this.changeStep(2);
        }

        this.div_step2_Div02_btn_prev_onclick = function(obj,e)
        {
        	this.changeStep(1);
        }

        this.changeStep = function(step)
        {
        	this.div_step1.set_visible(step == 1);
        	this.div_step2.set_visible(step == 2);
        	this.div_step3.set_visible(step == 3);
        	
        	// 약관동의 화면 진입 시 초기화
        	if (step == 2) {
        		this.div_step2.chk_allAgree.set_value(false);
        		this.div_step2.chk_agr01.set_value(false);
        		this.div_step2.chk_agr02.set_value(false);
        		
        		this.div_step2.txa_arr01.vscrollbar.set_pos(0);
        		this.div_step2.txa_arr02.vscrollbar.set_pos(0);
        		this.div_step3.set_url("");
        	}
        }

        this.loadJoinForm = function()
        {
        	var tpc = this.div_step1.edt_hidden_tpc.value;
        	var url = "";
        	if (tpc == "01") {
        		url = "OMG.PT::OMG_DS_SC_5110.xfdl";
        	} else if (tpc == "02") {
        		url = "OMG.PT::OMG_DS_SC_5111.xfdl";
        	} else if (tpc == "03") {
        		url = "OMG.PT::OMG_DS_SC_5112.xfdl";
        	} else if (tpc == "04") {
        		url = "OMG.PT::OMG_DS_SC_5117.xfdl";
        	} else if (tpc == "05") {
        		url = "OMG.PT::OMG_DS_SC_5180.xfdl";
        	} else if (tpc == "81") {
        		url = "OMG.PT::OMG_DS_SC_5170.xfdl";
        	} else {
        		this.alert("회원유형 선택에 오류가 발생하였습니다.");
        		this.changeStep(1);
        		return;
        	}
        	this.div_step3.set_url(url);
        }

        this._getParentData = function()
        {
        	var data = this.gfn_nullToEmpty(this.div_step1.edt_hidden_input.value); // id
        	if (this.div_step1.edt_hidden_tpc.value == "02") {
        		data += "#" + this.gfn_nullToEmpty(this.div_step1.edt_hidden_dept.value); // + dept(id#name)
        		data += "#" + this.gfn_nullToEmpty(this.div_step1.edt_hidden_bzplc.value); // + bzplc
        	}
        	this.div_step3._setJoinData(data);
        }

        this._closeParent = function()
        {
        	this.close();
        }

        /* 가입유형 선택 */
        this.btn_select_join = function(obj,e)
        {
        	var isNh = false;
        	var info = "";
        	var fare = "무료";
        	if (obj.id == "btn_join_01") {
        		this.div_step1.edt_hidden_tpc.set_value("01");
        		fare = "월 20,000원 (본사만 부과, 부가세 별도)";
        		info =	"  ○ SCM업무(수주내역조회, 배송예정서작성 등)\n"+
        				"  ○ 전자계약\n"+
        				"  ○ 세금계산서";
        	} else if (obj.id == "btn_join_04") {
        		this.div_step1.edt_hidden_tpc.set_value("04");
        		fare = "세금계산서 건당 1,000원, 최대 월 5,000원 (부가세 별도)";
        		info =	"  ○ 세금계산서";
        	} else if (obj.id == "btn_join_81") {
        		this.div_step1.edt_hidden_tpc.set_value("81");
        		info =	"  ○ 농협몰 상품정보등록";
        	} else if (obj.id == "btn_join_05") {
        		this.div_step1.edt_hidden_tpc.set_value("05");
        		info =	"  ○ 전자계약";
        	} else if (obj.id == "btn_join_02") {
        		this.div_step1.edt_hidden_tpc.set_value("02");
        		this.div_step1.edt_hidden_dept.set_value("");
        		this.div_step1.edt_hidden_bzplc.set_value("");
        		isNh = true;
        		info =	"  ○ 계약상담\n" +
        				"  ○ 전자계약\n" +
        				"  ○ 세금계산서";
        	} else if (obj.id == "btn_join_03") {
        		this.div_step1.edt_hidden_tpc.set_value("03");
        		this.div_step1.edt_hidden_dept.set_value("");
        		this.div_step1.edt_hidden_bzplc.set_value("");
        		isNh = true;
        		info =	"  ○ 전자계약\n" +
        				"  ○ 세금계산서\n" +
        				"  ○ PDA검수";
        	}
        	
        	var msg = (isNh ? "" : "- 기본료 : <b v='true'>" + fare) + "</b>\n" + "- 주요 서비스 :\n"+ info;
        	this.div_step1.sta_info.set_text(msg);
        	this.div_step1.sta_info.style.set_border("1 solid #808080");
        	this.div_step1.btn_info.set_visible(fare != "무료");
        	this.fn_changeBtnEnable(obj.id);
        }

        /* 모두 동의 */
        this.Div01_chk_allAgree_onclick = function(obj,e)
        {	
        	if (this.div_step2.chk_allAgree.value) {
        		this.div_step2.chk_agr01.set_value(true);
        		this.div_step2.chk_agr02.set_value(true);
        	} else {
        		this.div_step2.chk_agr01.set_value(false);
        		this.div_step2.chk_agr02.set_value(false);
        	}
        }

        /* 동의함 */
        this.Div01_Div02_btn_agree_onclick = function(obj,e)
        {
        	if (!this.div_step2.chk_agr01.value) {
        		alert("하나로eSCM 서비스 이용약관에 동의해주시기 바랍니다.")
        		return false;
        	} else if (!this.div_step2.chk_agr02.value) {
        		alert("하나로eSCM 서비스 개인정보 수집 및 이용에 동의해주시기 바랍니다.")
        		return false;
        	} else if (this.sScrollYn == "N") {
        		alert("하나로eSCM 서비스 이용약관을 끝까지 읽어 주시기 바랍니다.");
        		return false;
        	} else if (this.sScrollYn2 == "N") {
        		alert("하나로eSCM 서비스 개인정보 수집 및 이용을 끝까지 읽어 주시기 바랍니다.");
        		return false;
        	}
        	
        	//var str = this.div_step1.edt_hidden_tpc.value + "#" + this.gfn_nullToEmpty(this.div_step1.edt_hidden_input.value);
        	//this.close(str);
        	
        	this.changeStep(3);
        	this.loadJoinForm();
        }

        this.Div01_Div02_btn_notAgree_onclick = function(obj,e)
        {
        	this.close();
        }

        /* 동의서 스크롤체크1 */
        this.Div01_txa_arr01_onvscroll = function(obj,e)
        {
        	if (this.div_step2.txa_arr01.vscrollbar.max  == e.pos) {
        		this.sScrollYn = "Y";
        	} else {
        		this.sScrollYn = "N";
        	}
        }

        /* 동의서 스크롤체크2 */
        this.Div01_txa_arr02_onvscroll = function(obj,e)
        {
        	if (this.div_step2.txa_arr02.vscrollbar.max  == e.pos) {
        		this.sScrollYn2 = "Y";
        	} else {
        		this.sScrollYn2 = "N";
        	}
        }

        /***************************************************
        	후처리(콜백)
        ****************************************************/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        	} else {
        		if (svcID == "retriveNaTrplCList") {
        			if (this.ds_naTrplC.rowcount > 0) {				
        				this.div_step1.div_type_co.btn_join_01.set_enable(true);
        				this.div_step1.div_type_co.btn_join_04.set_enable(true);
        				this.div_step1.div_type_co.btn_join_81.set_enable(true);
        			}
        			this.div_step1.div_type_co.btn_join_05.set_enable(true);
        		} else if (svcID == "retriveNhUserBzplc") {
        			if (ErrorCode > 0) {
        				this.alert("이미 회원가입되어 있는 사원번호입니다.");
        				this.div_step1.edt_join_usrid.set_value("");
        				this.div_step1.edt_join_usrid.setFocus();
        				return;
        			}
        			this.div_step1.div_type_nh.btn_join_02.set_enable(this.ds_bzplc.findRow("DEPT_DSC", "01") != -1);
        			this.div_step1.div_type_nh.btn_join_03.set_enable(this.ds_bzplc.findRow("DEPT_DSC", "02") != -1 || this.ds_bzplc.findRow("DEPT_DSC", "03") != -1);
        		}
        	}
        }

        /* 이용료 안내 */
        this.div_step1_btn_info_onclick = function(obj,e)
        {
        	var sOption = "title=true, width=810, height=600";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("popupFee", "OMG.PT::OMG_DS_SC_4630.xfdl", {}, sOption, sPopupCallBack);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_bzplc.addEventHandler("oncolumnchanged", this.ds_dept_oncolumnchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.div_step2.txa_arr01.addEventHandler("oneditclick", this.Div01_TextArea00_oneditclick, this);
            this.div_step2.Div02.btn_prev.addEventHandler("onclick", this.div_step2_Div02_btn_prev_onclick, this);
            this.div_step2.argee02.addEventHandler("oneditclick", this.Div01_TextArea00_oneditclick, this);
            this.div_step2.chk_allAgree.addEventHandler("onclick", this.Div01_chk_allAgree_onclick, this);
            this.div_step2.Static01.addEventHandler("onclick", this.Div01_chk_allAgree_onclick, this);
            this.div_step2.Static02.addEventHandler("onclick", this.Div01_Static01_onclick, this);
            this.div_step2.Static03.addEventHandler("onclick", this.Div01_Static01_onclick, this);
            this.div_step2.Static04.addEventHandler("onclick", this.Div01_Static01_onclick, this);
            this.div_step2.btn_agree.addEventHandler("onclick", this.Div01_Div02_btn_agree_onclick, this);
            this.div_step2.btn_notAgree.addEventHandler("onclick", this.Div01_Div02_btn_notAgree_onclick, this);
            this.div_step1.edt_join_usrid.addEventHandler("onkeyup", this.edt_join_bzno_onkeyup, this);
            this.div_step1.btn_join_chk.addEventHandler("onclick", this.btn_join_chk_onclick, this);
            this.div_step1.div_type_nh.btn_join_02.addEventHandler("onclick", this.btn_select_join, this);
            this.div_step1.div_type_nh.btn_join_03.addEventHandler("onclick", this.btn_select_join, this);
            this.div_step1.btn_next.addEventHandler("onclick", this.Div02_btn_next_onclick, this);
            this.div_step1.div_type_co.btn_join_01.addEventHandler("onclick", this.btn_select_join, this);
            this.div_step1.div_type_co.btn_join_04.addEventHandler("onclick", this.btn_select_join, this);
            this.div_step1.div_type_co.btn_join_81.addEventHandler("onclick", this.btn_select_join, this);
            this.div_step1.div_type_co.btn_join_05.addEventHandler("onclick", this.btn_select_join, this);
            this.div_step1.div_check_co.edt_join_bzno1.addEventHandler("onkeyup", this.edt_join_bzno_onkeyup, this);
            this.div_step1.div_check_co.edt_join_bzno2.addEventHandler("onkeyup", this.edt_join_bzno_onkeyup, this);
            this.div_step1.div_check_co.edt_join_bzno3.addEventHandler("onkeyup", this.edt_join_bzno_onkeyup, this);
            this.div_step1.btn_info.addEventHandler("onclick", this.div_step1_btn_info_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_5100_backup.xfdl");

       
    };
}
)();
