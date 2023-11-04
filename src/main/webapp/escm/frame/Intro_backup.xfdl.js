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
                this.set_name("Intro");
                this.set_cssclass("frm_INTRO_New");
                this._setFormPosition(0,0,1010,931);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_bbs", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"BLBD_ID\" type=\"string\" size=\"32\"/><Column id=\"BBRD_ID\" type=\"string\" size=\"32\"/><Column id=\"BBRD_TI\" type=\"string\" size=\"32\"/><Column id=\"BBRD_CNTN\" type=\"string\" size=\"32\"/><Column id=\"BLTN_ST_DTM\" type=\"string\" size=\"32\"/><Column id=\"BLTN_ED_DTM\" type=\"string\" size=\"32\"/><Column id=\"CKNL_DSC\" type=\"string\" size=\"32\"/><Column id=\"BBRD_DEL_YN\" type=\"string\" size=\"32\"/><Column id=\"BBRD_INQ_CN\" type=\"string\" size=\"32\"/><Column id=\"BBRD_RGMNM\" type=\"string\" size=\"32\"/><Column id=\"FSRG_DTM\" type=\"string\" size=\"32\"/><Column id=\"FS_RGM\" type=\"string\" size=\"32\"/><Column id=\"LSCHG_DTM\" type=\"string\" size=\"32\"/><Column id=\"LS_CHGM\" type=\"string\" size=\"32\"/><Column id=\"PRET_BBRD_ID\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_login", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"userKey\" type=\"string\" size=\"32\"/><Column id=\"userID\" type=\"string\" size=\"32\"/><Column id=\"glnCode\" type=\"string\" size=\"32\"/><Column id=\"mbcoType\" type=\"string\" size=\"32\"/><Column id=\"companyName\" type=\"string\" size=\"32\"/><Column id=\"userName\" type=\"string\" size=\"32\"/><Column id=\"commanyType\" type=\"string\" size=\"32\"/><Column id=\"lastLoginDt\" type=\"datetime\" size=\"17\"/><Column id=\"userType\" type=\"string\" size=\"32\"/><Column id=\"firstLoginYn\" type=\"string\" size=\"32\"/><Column id=\"userCvDsc\" type=\"string\" size=\"32\"/><Column id=\"userStatus\" type=\"string\" size=\"32\"/><Column id=\"userAuth\" type=\"string\" size=\"32\"/><Column id=\"pwOverTermYn\" type=\"string\" size=\"32\"/><Column id=\"hoffApvYn\" type=\"string\" size=\"32\"/><Column id=\"naUsrSysKdc\" type=\"string\" size=\"32\"/><Column id=\"svcStatus\" type=\"string\" size=\"32\"/><Column id=\"changeElt\" type=\"STRING\" size=\"256\"/><Column id=\"changeMb\" type=\"STRING\" size=\"256\"/><Column id=\"bizNumber\" type=\"STRING\" size=\"256\"/><Column id=\"userSystemCode\" type=\"STRING\" size=\"256\"/><Column id=\"weakPwYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_USR_TPC", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"USR_TPC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_systemAuth", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_popup", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"FRAMENAME\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BBRD_PUP_SYS_FLNM\" type=\"string\" size=\"32\"/><Column id=\"BBRD_CNTN\" type=\"string\" size=\"32\"/><Column id=\"PICTURE\" type=\"BLOB\" size=\"256\"/><Column id=\"BBRD_NAMO_FLNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_popupOfanc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"FRAMENAME\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BBRD_CNTN\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_param", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ENT_PRG_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_REG_USR_TPC", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"USR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"USR_TPNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USR_TPNM\">- 회원유형 선택 -</Col><Col id=\"USR_TPC\">00</Col></Row><Row><Col id=\"USR_TPC\">01</Col><Col id=\"USR_TPNM\">협력업체</Col></Row><Row><Col id=\"USR_TPC\">02</Col><Col id=\"USR_TPNM\">본부</Col></Row><Row><Col id=\"USR_TPNM\">사업장</Col><Col id=\"USR_TPC\">03</Col></Row><Row><Col id=\"USR_TPNM\">세금계산서전용</Col><Col id=\"USR_TPC\">04</Col></Row><Row><Col id=\"USR_TPC\">05</Col><Col id=\"USR_TPNM\">전자계약전용</Col></Row><Row><Col id=\"USR_TPC\">81</Col><Col id=\"USR_TPNM\">농협몰</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_mainbg", "absolute", "0", "0", null, "380", "0", null, this);
            obj.set_taborder("27");
            obj.style.set_background("URL('theme://images/new/main_bg.png') repeat-x left top");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Div("div_main_visual", "absolute", "0", "0", "1010", "380", null, null, this.div_mainbg);
            obj.set_taborder("0");
            obj.style.set_background("URL('theme://images/new/main_visual.png') center middle");
            obj.set_scrollbars("none");
            this.div_mainbg.addChild(obj.name, obj);
            obj = new Div("div_user_tab", "absolute", null, "100", "306", "166", "0", null, this.div_mainbg.div_main_visual);
            obj.set_taborder("0");
            obj.style.set_background("white");
            obj.style.set_border("1 solid #dededeff");
            obj.set_scrollbars("none");
            this.div_mainbg.div_main_visual.addChild(obj.name, obj);
            obj = new Div("div_tab_login", "absolute", "0", "39", "304", "125", null, null, this.div_mainbg.div_main_visual.div_user_tab);
            obj.set_taborder("2");
            obj.style.set_background("white");
            this.div_mainbg.div_main_visual.div_user_tab.addChild(obj.name, obj);
            obj = new Edit("edt_id", "absolute", "15", "13", null, "35", "95", null, this.div_mainbg.div_main_visual.div_user_tab.div_tab_login);
            obj.set_taborder("5");
            obj.set_imemode("alpha");
            obj.set_displaynulltext("아이디");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("9");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_INTRO_Login2");
            this.div_mainbg.div_main_visual.div_user_tab.div_tab_login.addChild(obj.name, obj);
            obj = new Edit("edt_pw", "absolute", "15", "47", null, "35", "95", null, this.div_mainbg.div_main_visual.div_user_tab.div_tab_login);
            obj.set_taborder("6");
            obj.set_password("true");
            obj.set_displaynulltext("비밀번호");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("16");
            obj.set_autoselect("true");
            obj.set_cssclass("edt_INTRO_Login2");
            this.div_mainbg.div_main_visual.div_user_tab.div_tab_login.addChild(obj.name, obj);
            obj = new Button("btn_login", "absolute", null, "13", "80", "69", "15", null, this.div_mainbg.div_main_visual.div_user_tab.div_tab_login);
            obj.set_taborder("7");
            obj.set_text("로그인");
            obj.set_cssclass("btn_INTRO_confirm");
            obj.style.set_cursor("hand");
            this.div_mainbg.div_main_visual.div_user_tab.div_tab_login.addChild(obj.name, obj);
            obj = new CheckBox("CheckBox00", "absolute", "15", "95", "74", null, null, "10", this.div_mainbg.div_main_visual.div_user_tab.div_tab_login);
            obj.set_taborder("8");
            obj.set_text("ID 저장");
            obj.style.set_textpadding("0 0 3 5");
            obj.style.set_color("#272727ff");
            obj.style.set_font("10 맑은 고딕, Gulim");
            obj.style.set_cursor("hand");
            this.div_mainbg.div_main_visual.div_user_tab.div_tab_login.addChild(obj.name, obj);
            obj = new Button("btn_find", "absolute", null, "96", "140", null, "15", "10", this.div_mainbg.div_main_visual.div_user_tab.div_tab_login);
            obj.set_taborder("9");
            obj.set_text("아이디/비밀번호 찾기");
            obj.set_cssclass("btn_INTRO_IDPW2");
            obj.style.set_align("right middle");
            obj.style.set_cursor("hand");
            this.div_mainbg.div_main_visual.div_user_tab.div_tab_login.addChild(obj.name, obj);
            obj = new Button("btn_tab_login", "absolute", "0", "0", "152", "39", null, null, this.div_mainbg.div_main_visual.div_user_tab);
            obj.set_taborder("0");
            obj.set_text("로그인");
            obj.set_cssclass("btn_LOGIN_tab_on");
            this.div_mainbg.div_main_visual.div_user_tab.addChild(obj.name, obj);
            obj = new Button("btn_tab_join", "absolute", null, "0", "152", "39", "0", null, this.div_mainbg.div_main_visual.div_user_tab);
            obj.set_taborder("1");
            obj.set_text("회원가입");
            obj.set_cssclass("btn_LOGIN_tab_off");
            this.div_mainbg.div_main_visual.div_user_tab.addChild(obj.name, obj);
            obj = new Div("div_tab_join", "absolute", "0", "39", "304", "125", null, null, this.div_mainbg.div_main_visual.div_user_tab);
            obj.set_taborder("3");
            obj.style.set_background("white");
            obj.set_visible("false");
            this.div_mainbg.div_main_visual.div_user_tab.addChild(obj.name, obj);
            obj = new Button("btn_cancel", "absolute", "15", null, "134", "60", null, "20", this.div_mainbg.div_main_visual.div_user_tab.div_tab_join);
            obj.set_taborder("19");
            obj.set_text("협력업체");
            obj.set_cssclass("btn_INTRO_confirm2");
            obj.style.set_font("bold 15 맑은 고딕, Gulim");
            this.div_mainbg.div_main_visual.div_user_tab.div_tab_join.addChild(obj.name, obj);
            obj = new Button("btn_confirm", "absolute", null, null, "134", "60", "15", "20", this.div_mainbg.div_main_visual.div_user_tab.div_tab_join);
            obj.set_taborder("20");
            obj.set_text("농협");
            obj.set_cssclass("btn_INTRO_confirm");
            obj.style.set_font("bold 15 맑은 고딕, Gulim");
            this.div_mainbg.div_main_visual.div_user_tab.div_tab_join.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "20", "10", null, "30", "20", null, this.div_mainbg.div_main_visual.div_user_tab.div_tab_join);
            obj.set_taborder("21");
            obj.set_text("<회원구분 선택>");
            obj.style.set_align("center");
            obj.style.set_font("12 맑은 고딕, Gulim");
            this.div_mainbg.div_main_visual.div_user_tab.div_tab_join.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "10", "40", "135", "30", null, null, this.div_mainbg.div_main_visual);
            obj.set_taborder("1");
            obj.style.set_background("URL('theme://images/new/nh_logo.png') center middle");
            this.div_mainbg.div_main_visual.addChild(obj.name, obj);

            obj = new Div("div_footer_bg", "absolute", "0", "781", null, "150", "0", null, this);
            obj.set_taborder("29");
            obj.set_scrollbars("none");
            obj.style.set_background("#f0f0f0ff");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00", "absolute", "0%", "0", null, "0", "0%", null, this);
            obj.set_taborder("40");
            this.addChild(obj.name, obj);

            obj = new Div("div_footer", "absolute", "0", "781", "1010", "150", null, null, this);
            obj.set_taborder("42");
            obj.set_scrollbars("none");
            obj.set_url("frame::main_bottom_new.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_quick_wrap", "absolute", "0", "380", null, "95", "0", null, this);
            obj.set_taborder("43");
            obj.style.set_background("#1385c9ff");
            obj.set_scrollbars("none");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);
            obj = new Div("div_quick", "absolute", "0", "0", "1010", "95", null, null, this.div_quick_wrap);
            obj.set_taborder("0");
            obj.set_scrollbars("none");
            obj.set_tabstop("false");
            this.div_quick_wrap.addChild(obj.name, obj);
            obj = new Button("btn_quick01", "absolute", "0", "0", "126", "95", null, null, this.div_quick_wrap.div_quick);
            obj.set_taborder("0");
            obj.set_text("eSCM 서비스");
            obj.set_cssclass("btn_INTRO_quick01");
            this.div_quick_wrap.div_quick.addChild(obj.name, obj);
            obj = new Button("btn_quick02", "absolute", "126", "0", "126", "95", null, null, this.div_quick_wrap.div_quick);
            obj.set_taborder("1");
            obj.set_text("전자 세금계산서");
            obj.set_cssclass("btn_INTRO_quick02");
            this.div_quick_wrap.div_quick.addChild(obj.name, obj);
            obj = new Button("btn_quick03", "absolute", "252", "0", "126", "95", null, null, this.div_quick_wrap.div_quick);
            obj.set_taborder("2");
            obj.set_text("이용료 안내");
            obj.set_cssclass("btn_INTRO_quick03");
            this.div_quick_wrap.div_quick.addChild(obj.name, obj);
            obj = new Button("btn_quick04", "absolute", "378", "0", "126", "95", null, null, this.div_quick_wrap.div_quick);
            obj.set_taborder("3");
            obj.set_text("공동인증서 안내");
            obj.set_cssclass("btn_INTRO_quick04");
            this.div_quick_wrap.div_quick.addChild(obj.name, obj);
            obj = new Button("btn_quick05", "absolute", "504", "0", "126", "95", null, null, this.div_quick_wrap.div_quick);
            obj.set_taborder("4");
            obj.set_text("판매상세정보 서비스");
            obj.set_cssclass("btn_INTRO_quick05");
            this.div_quick_wrap.div_quick.addChild(obj.name, obj);
            obj = new Button("btn_quick06", "absolute", "630", "0", "126", "95", null, null, this.div_quick_wrap.div_quick);
            obj.set_taborder("5");
            obj.set_text("데이터마트 서비스");
            obj.set_cssclass("btn_INTRO_quick06");
            this.div_quick_wrap.div_quick.addChild(obj.name, obj);
            obj = new Button("btn_quick08", "absolute", "756", "0", "126", "95", null, null, this.div_quick_wrap.div_quick);
            obj.set_taborder("6");
            obj.set_text("모바일 앱");
            obj.set_cssclass("btn_INTRO_quick08");
            this.div_quick_wrap.div_quick.addChild(obj.name, obj);

            obj = new Div("div_related_wrap", "absolute", "0", "730", null, "46", "0", null, this);
            obj.set_taborder("44");
            obj.style.set_background("white");
            obj.style.set_border("1 solid #dbdbdbff,1 solid transparent,1 solid transparent,1 solid transparent");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Div("div_related", "absolute", "0", "1", "1010", "45", null, null, this.div_related_wrap);
            obj.set_taborder("10");
            this.div_related_wrap.addChild(obj.name, obj);
            obj = new ImageViewer("img_related01", "absolute", "182", "0", "162", "45", null, null, this.div_related_wrap.div_related);
            obj.set_taborder("0");
            obj.style.set_background("URL('theme://images/new/family_00.png') center middle");
            obj.style.set_border("0 solid #e5e5e5ff");
            obj.style.set_cursor("hand");
            this.div_related_wrap.div_related.addChild(obj.name, obj);
            obj = new ImageViewer("img_related02", "absolute", "506", "0", "162", "45", null, null, this.div_related_wrap.div_related);
            obj.set_taborder("1");
            obj.style.set_background("URL('theme://images/new/family_03.png') center middle");
            obj.style.set_border("0 solid #e5e5e5ff");
            obj.style.set_cursor("hand");
            this.div_related_wrap.div_related.addChild(obj.name, obj);
            obj = new ImageViewer("img_related04", "absolute", "668", "0", "162", "45", null, null, this.div_related_wrap.div_related);
            obj.set_taborder("3");
            obj.style.set_background("URL('theme://images/new/family_02.png') center middle");
            obj.style.set_border("0 solid #e5e5e5ff");
            obj.style.set_cursor("hand");
            this.div_related_wrap.div_related.addChild(obj.name, obj);
            obj = new ImageViewer("img_related03", "absolute", "344", "0", "162", "45", null, null, this.div_related_wrap.div_related);
            obj.set_taborder("6");
            obj.style.set_background("URL('theme://images/new/family_01.png') center middle");
            obj.style.set_border("0 solid #e5e5e5ff");
            obj.style.set_cursor("hand");
            this.div_related_wrap.div_related.addChild(obj.name, obj);

            obj = new Div("div_content_wrap", "absolute", "0", "475", null, "255", "0", null, this);
            obj.set_taborder("45");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Div("div_content", "absolute", "0", "0", "1010", null, null, "0", this.div_content_wrap);
            obj.set_taborder("0");
            obj.set_scrollbars("none");
            this.div_content_wrap.addChild(obj.name, obj);
            obj = new Div("div_notice_box", "absolute", "0", "30", "320", "195", null, null, this.div_content_wrap.div_content);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_scrollbars("none");
            this.div_content_wrap.div_content.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "0", null, "37", "0", null, this.div_content_wrap.div_content.div_notice_box);
            obj.set_taborder("5");
            obj.set_text("공지사항");
            obj.style.set_border("1 solid transparent,1 solid transparent,1 solid #a7a7a7ff,1 solid transparent");
            obj.style.set_color("#3a3a3aff");
            obj.style.set_padding("0 0 0 5");
            obj.style.set_font("bold 12 맑은 고딕,Gulim");
            this.div_content_wrap.div_content.div_notice_box.addChild(obj.name, obj);
            obj = new Grid("grd_bbs", "absolute", "10", "47", null, null, "0", "10", this.div_content_wrap.div_content.div_notice_box);
            obj.set_taborder("6");
            obj.set_binddataset("ds_bbs");
            obj.set_scrollbars("autovert");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_INTRO_Notice2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"10\"/><Column size=\"190\"/><Column size=\"9\"/><Column size=\"80\"/></Columns><Rows><Row size=\"25\"/></Rows><Band id=\"body\"><Cell displaytype=\"image\" style=\"align:left middle;padding:0 0 0 0;\" text=\"URL('theme://images/new/icon_dot.png')\"/><Cell col=\"1\" style=\":mouseover {cursor:hand;}\" text=\"bind:BBRD_TI\"/><Cell col=\"2\"/><Cell col=\"3\" displaytype=\"normal\" style=\"align:right middle;padding:3 3 3 0;color:#a0a0a0ff;color2:#a0a0a0ff;\" text=\"bind:FSRG_DTM\"/></Band></Format></Formats>");
            this.div_content_wrap.div_content.div_notice_box.addChild(obj.name, obj);
            obj = new Static("sta_notice_more", "absolute", null, "10", "20", "20", "0", null, this.div_content_wrap.div_content.div_notice_box);
            obj.set_taborder("7");
            obj.style.set_background("URL('theme://images/new/icon_more.png') center middle");
            obj.set_visible("false");
            this.div_content_wrap.div_content.div_notice_box.addChild(obj.name, obj);
            obj = new Div("div_help_box", "absolute", "345", "30", "320", "195", null, null, this.div_content_wrap.div_content);
            obj.set_taborder("1");
            this.div_content_wrap.div_content.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "0", null, "37", "0", null, this.div_content_wrap.div_content.div_help_box);
            obj.set_taborder("0");
            obj.set_text("고객센터");
            obj.style.set_color("#3a3a3aff");
            obj.style.set_padding("0 0 0 5");
            obj.style.set_font("bold 12 맑은 고딕,Gulim");
            this.div_content_wrap.div_content.div_help_box.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "15", "47", "46", "45", null, null, this.div_content_wrap.div_content.div_help_box);
            obj.set_taborder("1");
            obj.style.set_background("URL('theme://images/new/icon_call.png') left middle");
            this.div_content_wrap.div_content.div_help_box.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "81", "47", "218", "45", null, null, this.div_content_wrap.div_content.div_help_box);
            obj.set_taborder("2");
            obj.set_text("02) 1522-1211");
            obj.set_cssclass("sta_INTRO_CSNum");
            obj.style.set_color("#ff5e2dff");
            obj.style.set_align("right middle");
            obj.style.set_font("bold 23 맑은 고딕, Arial");
            this.div_content_wrap.div_content.div_help_box.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "35", "105", null, "37", "163", null, this.div_content_wrap.div_content.div_help_box);
            obj.set_taborder("3");
            obj.set_text("평일 09:00 ~ 18:00\r\n점심 12:00 ~ 13:00");
            obj.style.set_linespace("3");
            obj.style.set_color("#717171ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 9 맑은 고딕, Gulim");
            this.div_content_wrap.div_content.div_help_box.addChild(obj.name, obj);
            obj = new Button("btn_remote", "absolute", "185", "105", "114", "37", null, null, this.div_content_wrap.div_content.div_help_box);
            obj.set_taborder("4");
            obj.set_cssclass("btn_INTRO_Remote2");
            obj.style.set_cursor("hand");
            obj.set_text("원격지원");
            this.div_content_wrap.div_content.div_help_box.addChild(obj.name, obj);
            obj = new Button("btn_new", "absolute", "35", "153", "130", "34", null, null, this.div_content_wrap.div_content.div_help_box);
            obj.set_taborder("5");
            obj.set_cssclass("btn_INTRO_confirm");
            obj.style.set_cursor("hand");
            obj.set_text("신규업체 계약상담");
            this.div_content_wrap.div_content.div_help_box.addChild(obj.name, obj);
            obj = new Button("btn_into", "absolute", "169", "153", "130", "34", null, null, this.div_content_wrap.div_content.div_help_box);
            obj.set_taborder("6");
            obj.set_cssclass("btn_INTRO_confirm");
            obj.style.set_cursor("hand");
            obj.set_text("서비스 가입안내");
            this.div_content_wrap.div_content.div_help_box.addChild(obj.name, obj);
            obj = new Div("div_service", "absolute", "690", "30", "320", "195", null, null, this.div_content_wrap.div_content);
            obj.set_taborder("2");
            this.div_content_wrap.div_content.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "0", null, "37", "0", null, this.div_content_wrap.div_content.div_service);
            obj.set_taborder("7");
            obj.set_text("고객만족 서비스");
            obj.style.set_color("#3a3a3aff");
            obj.style.set_padding("0 0 0 5");
            obj.style.set_font("bold 12 맑은 고딕,Gulim");
            this.div_content_wrap.div_content.div_service.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "37", null, "50", "0", null, this.div_content_wrap.div_content.div_service);
            obj.set_taborder("8");
            obj.set_text("카카오톡 상담 - ID : hanaroescm");
            obj.style.set_background("URL('theme://images/new/icon_talk.png') left middle");
            obj.style.set_border("1 solid #ddddddff");
            obj.style.set_padding("0 0 0 65");
            obj.style.set_font("bold 10 맑은 고딕, Gulim");
            this.div_content_wrap.div_content.div_service.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "86", null, "50", "0", null, this.div_content_wrap.div_content.div_service);
            obj.set_taborder("9");
            obj.set_text("긴급 SMS (로그인 후 문자기능 사용)");
            obj.style.set_background("URL('theme://images/new/icon_sms.png') left middle");
            obj.style.set_border("1 solid #ddddddff");
            obj.style.set_padding("0 0 0 65");
            obj.style.set_font("bold 10 맑은 고딕, Gulim");
            this.div_content_wrap.div_content.div_service.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0", "135", null, "50", "0", null, this.div_content_wrap.div_content.div_service);
            obj.set_taborder("10");
            obj.set_text("모바일 앱 다운로드");
            obj.style.set_background("URL('theme://images/new/icon_app.png') left middle");
            obj.style.set_border("1 solid #ddddddff");
            obj.style.set_padding("0 0 0 65");
            obj.style.set_font("bold 10 맑은 고딕, Gulim");
            this.div_content_wrap.div_content.div_service.addChild(obj.name, obj);
            obj = new ImageViewer("img_svc_qr", "absolute", "275", "139", "41", "41", null, null, this.div_content_wrap.div_content.div_service);
            obj.set_taborder("11");
            obj.style.set_background("URL('theme://images/new/icon_qr.png') center middle");
            this.div_content_wrap.div_content.div_service.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "1038", "730", "261", "200", null, null, this);
            obj.set_taborder("46");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            obj.style.set_align("center middle");
            obj.set_text("퀵 배너와 푸터 top값이 변경될 경우\r\nIntro_onsize function의 값도 수정해야 함");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "1013", "730", "22", "46", null, null, this);
            obj.set_taborder("47");
            obj.set_text("퀵\r\n배\r\n너");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "1013", "781", "22", "150", null, null, this);
            obj.set_taborder("48");
            obj.set_text("푸\r\n터");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "1013", "381", "22", "94", null, null, this);
            obj.set_taborder("49");
            obj.set_text("안\r\n내\r\n메\r\n뉴");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 304, 125, this.div_mainbg.div_main_visual.div_user_tab.div_tab_login,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.style.set_background("white");

            	}
            );
            this.div_mainbg.div_main_visual.div_user_tab.div_tab_login.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 304, 125, this.div_mainbg.div_main_visual.div_user_tab.div_tab_join,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.style.set_background("white");
            		p.set_visible("false");

            	}
            );
            this.div_mainbg.div_main_visual.div_user_tab.div_tab_join.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 306, 166, this.div_mainbg.div_main_visual.div_user_tab,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("white");
            		p.style.set_border("1 solid #dededeff");
            		p.set_scrollbars("none");

            	}
            );
            this.div_mainbg.div_main_visual.div_user_tab.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1010, 380, this.div_mainbg.div_main_visual,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.style.set_background("URL('theme://images/new/main_visual.png') center middle");
            		p.set_scrollbars("none");

            	}
            );
            this.div_mainbg.div_main_visual.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 380, this.div_mainbg,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("27");
            		p.style.set_background("URL('theme://images/new/main_bg.png') repeat-x left top");
            		p.set_scrollbars("none");

            	}
            );
            this.div_mainbg.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 150, this.div_footer_bg,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("29");
            		p.set_scrollbars("none");
            		p.style.set_background("#f0f0f0ff");

            	}
            );
            this.div_footer_bg.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1010, 95, this.div_quick_wrap.div_quick,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_scrollbars("none");
            		p.set_tabstop("false");

            	}
            );
            this.div_quick_wrap.div_quick.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 95, this.div_quick_wrap,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("43");
            		p.style.set_background("#1385c9ff");
            		p.set_scrollbars("none");
            		p.set_tabstop("false");

            	}
            );
            this.div_quick_wrap.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1010, 45, this.div_related_wrap.div_related,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("10");

            	}
            );
            this.div_related_wrap.div_related.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1008, 33, this.div_related_wrap,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("44");
            		p.style.set_background("white");
            		p.style.set_border("1 solid #dbdbdbff,1 solid transparent,1 solid transparent,1 solid transparent");
            		p.set_scrollbars("none");

            	}
            );
            this.div_related_wrap.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 320, 156, this.div_content_wrap.div_content.div_notice_box,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div01");
            		p.set_scrollbars("none");

            	}
            );
            this.div_content_wrap.div_content.div_notice_box.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 320, 195, this.div_content_wrap.div_content.div_help_box,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");

            	}
            );
            this.div_content_wrap.div_content.div_help_box.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 320, 195, this.div_content_wrap.div_content.div_service,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");

            	}
            );
            this.div_content_wrap.div_content.div_service.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1010, 0, this.div_content_wrap.div_content,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_scrollbars("none");

            	}
            );
            this.div_content_wrap.div_content.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 255, this.div_content_wrap,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("45");
            		p.set_scrollbars("none");

            	}
            );
            this.div_content_wrap.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1010, 931, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Intro");
            		p.set_cssclass("frm_INTRO_New");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "frame::main_bottom_new.xfdl");
        };
        
        // User Script
        this.addIncludeScript("Intro_backup.xfdl", "lib::comLib.xjs");
        this.registerScript("Intro_backup.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        this.TRANS_YN = ""
        this.sId = "Intro.xfdl";

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.TRANS_YN = "";
        	this.Intro_onsize(this);

        	var tab_login = this.div_mainbg.div_main_visual.div_user_tab.div_tab_login;
        	try {
        		if (!this.gfn_isNull(application.getPrivateProfile("nhUserId"))) {
        			tab_login.edt_id.set_value(application.getPrivateProfile("nhUserId"));
        			tab_login.CheckBox00.set_value(true);
        		}

        		if (!this.gfn_isNull(application.getPrivateProfile("userid"))) {
        			application.afrm_VFrameSet0.set_separatesize("0, 65, *");
        			application.afrm_HFrameSet0.set_separatesize("0, 0, *");

        			tab_login.edt_id.set_value(application.getPrivateProfile("userid"));
        			tab_login.edt_pw.set_value(application.getPrivateProfile("userpw"));

        			this.TRANS_YN = "Y"
        			tab_login.btn_login.click();
        		}
        	} catch(e) {
        		if (!this.gfn_isNull(nexacro._getCookie("nhUserId"))) {
        			tab_login.edt_id.set_value(nexacro._getCookie("nhUserId"));
        			tab_login.CheckBox00.set_value(true);
        		}

        		if (!this.gfn_isNull(nexacro._getCookie("userid"))) {
        			application.afrm_VFrameSet0.set_separatesize("0, 65, *");
        			application.afrm_HFrameSet0.set_separatesize("0, 0, *");

        			tab_login.edt_id.set_value(nexacro._getCookie("userid"));
        			tab_login.edt_pw.set_value(nexacro._getCookie("userpw"));

        			this.TRANS_YN = "Y"
        			tab_login.btn_login.click();
        		}
        	} finally {
        		application.setPrivateProfile("userid", "");
        		application.setPrivateProfile("userpw", "");
        	}

         	// trace("before gfn_setInitForm");
        	this.gfn_setInitForm(obj, e); //공통

        	//Message List
        	this.fn_callMessageList();
        	tab_login.setFocus();
        }

        this.fn_afterFormOnload = function()
        {
        	trace("afterFormOnload");
        	// this.fn_checkOpenWebSign();

        	if (application.gds_session.rowcount > 0) {
        		this.fn_callMenuList();
        		this.fn_callMymenu();
        		this.fn_callAuthorityWorkplace();
        		console.log(application.gds_session);
        		console.log(application.gds_session.getColumn(0,"commanyType"));
        		if(application.gds_session.getColumn(0,"commanyType")=='1040'){
        			this.fn_callAuthorityWorkplaceLiq();
        		}
        		this.fn_callSystemAuth();
        	} else {
        		this.fn_retrieveBlbdOfancMainList();
        	}

        	this.setTimer(1, 100); 
        }

        /************************************************************************************************
         * TRANSACTION FUNCTION
        ************************************************************************************************/
        this.fn_retrieveBlbdOfancMainList = function()
        {
        	var sSvcID        = "retrieveBlbdOfancMainList";
        	var sURL          = "svc::rest/pt/blbd/retrieveBlbdOfancMainList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_bbs=ds_bbs ds_popup=ds_popup ds_popupOfanc=ds_popupOfanc";
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBackIntro";
        	var sTranType     = "S"; // U:수정/저장, S:조회

        	application.set_usewaitcursor(false);

        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        this.fn_callBackIntro = function(svcID,ErrorCode,ErrorMsg)
        {
        	// trace("fn_callBackIntro");
        	application.set_usewaitcursor(true);
        	 //에러
         	if (ErrorCode < 0) {
        		application.gv_userTPC = "";
        		switch(svcID) {
        			case "getUserType":
        				application.gv_userTPC = "";
        				switch(ErrorCode) {
        					case -1:
        						this.gfn_getMessage("alert", "error.message.server.exception");
        						break;
        					case -2: // 아이디와 비밀번호를 확인하세요.
        						this.gfn_getMessage("alert", "error.message.2001.badCredentials");
        						break;
        					case -5:
        						this.gfn_getMessage("alert", "error.message.2000.maxLoginTry");
        						break;
        					case -3: // 미등록 혹은 퇴직임직원(본부, 사업장)
        						this.alert("퇴직한 임·직원 또는 경제통합시스템에 등록된 담당 사업장이 없을 경우 하나로eSCM에 로그인할 수 없습니다.");
        						break;
        				}
        				break;
        				// 아이디와 비밀번호를 확인하세요.
        				this.gfn_getMessage("alert", "error.message.2001.badCredentials");
        				break;
        			case "retrieveSession":
        				switch(ErrorCode) {
        					case -2:	// 아이디와 비밀번호를 확인하세요.
        						this.gfn_getMessage("alert", "error.message.2001.badCredentials");
        						break;
        					case -3:
        						this.gfn_getMessage("alert", ErrorMsg);
        						break;
        					case -1:
        						this.gfn_getMessage("alert", "error.message.server.exception");
        						break;
        					case -9:
        						var blockMsgs = ErrorMsg.split("||");
        						var blockMsg = "<" + blockMsgs[0] + ">\n\n" + blockMsgs[1] + "\n" + blockMsgs[2] + " ~ " + blockMsgs[3];
        						alert(blockMsg);
        						break;
        				}
        				break;
        			default:
        				break;
        		}
         	} else {
        		switch(svcID) {
        			case "getUserType":
        				if (this.ds_USR_TPC.rowcount > 0) {
        					if (this.div_mainbg.div_main_visual.div_user_tab.div_tab_login.CheckBox00.value == true) {
        						//쿠키에 ID를 저장한다.
        						try {
        							application.setPrivateProfile("nhUserId", this.div_mainbg.div_main_visual.div_user_tab.div_tab_login.edt_id.value);
        						} catch(e) {
        							nexacro._setCookie("nhUserId", this.div_mainbg.div_main_visual.div_user_tab.div_tab_login.edt_id.value);
        						}
        					} else {
        						//쿠키에 저장된 ID를 삭제한다.
        						try {
        							application.setPrivateProfile("nhUserId", "");
        						} catch(e) {
        							nexacro._setCookie("nhUserId", "");
        						}
        					}

        					if (this.ds_USR_TPC.getColumn(0, "USR_TPC") == "99") {
        						application.gv_userTPC = "admin";
        						//this.fn_callAdminSite();
        					} else {
        						var EEdif = nexacro.toNumber("20151231") - nexacro.toNumber(this.gfn_today("yyyyMMdd"))

        						if ( EEdif > 0  && this.ds_USR_TPC.getColumn(0, "USR_TPC") == "01") {
        							alert(" 정보분석 서비스 사용을 희망하지 않는 업체는 화면상단의 \n 내정보 > 회원정보변경 > 서비스 이용 > 정보분석 이용에서\n 선택한 서비스 체크해제 후 저장해주세요.\n 미 해지시 1월부터 과금반영 됩니다 ");
        						}
        						application.gv_userTPC = "user"
        					}
        					this.fn_callSession();
        				} else {
        					alert("회원정보가 존재하지 않습니다.");
        				}
        				break;
        				
        			case "retrieveBlbdOfancMainList":
        				this.popup();
        				break;

        			case "retrieveSession":
        				this.TRANS_YN = "";
        				if (this.ds_login.rowcount > 0) {
        					this.fn_setGlobalVariable();

        					this.fn_callMenuList();
        					this.fn_callMymenu();

        					if (application.gv_userTPC == "user") {
        						this.fn_callAuthorityWorkplace(); //권한사업장
        						
        						if(application.gds_session.getColumn(0,"commanyType")=='1040'){
        							this.fn_callAuthorityWorkplaceLiq();
        						}
        						
        						this.fn_callSystemAuth();
        					}
        				} else {
        					alert("회원정보가 존재하지 않습니다.");
        				}
        				break;
        				
        			case "updateReststscout":
        				alert("휴면계정상태에서 승인상태로 풀렸습니다. \n웹서비스의 정상 이용이 가능합니다.");
        				return;
        				
        			case "retrieveMenuList":
        				if (!this.fn_userCheck()) {
        					return;
        				}
        				
        				application.afrm_TopFrame.set_formurl("");
        				application.afrm_LeftFrame.set_formurl("");
        				application.afrm_PotalFrame.set_formurl("");

        				if (application.gv_userTPC == "admin") {
        					application.afrm_TopFrame.set_formurl("frame::TopFrame_portal_admin.xfdl");
        					application.afrm_LeftFrame.set_formurl("frame::LeftFrame_admin.xfdl");
        					application.afrm_PotalFrame.set_formurl("frame::Potal_admin.xfdl");
        				} else {
        					application.afrm_TopFrame.set_formurl("frame::TopFrame.xfdl");
        					application.afrm_LeftFrame.set_formurl("frame::LeftFrame.xfdl");
        					application.afrm_PotalFrame.set_formurl("frame::Potal.xfdl");
        				}
        				application.afrm_VFrameSet0.set_separatesize("0, 65, *");
        				application.afrm_HFrameSet0.set_separatesize("0, 0, *");

        				var Sdif =  nexacro.toNumber(this.gfn_today("yyyyMMdd")) -nexacro.toNumber("20151204")
        				var Edif = nexacro.toNumber("20160120") - nexacro.toNumber(this.gfn_today("yyyyMMdd"))
        				var ASdif =  nexacro.toNumber(this.gfn_today("yyyyMMdd")) -nexacro.toNumber("20151227")
        				var AEdif = nexacro.toNumber("20160120") - nexacro.toNumber(this.gfn_today("yyyyMMdd"))

        				if (application.gv_changeMb == "Y" && Sdif > 0  &&  Edif > 0 ) {
        					var bFlag = confirm("미전환 회원가입신청을 하지 않은 업체입니다. \n유예기간(2016년 01월 19일) 이후에는 로그인이 \n 불가합니다. \n 회원정보변경 페이지에서 가입신청을 해주세요.");

        					if (bFlag) {
        						application.afrm_HFrameSet0.set_separatesize("190, *, 0");

        						var moveMenuId ="";
        						if (application.gv_userType == "01") {
        							moveMenuId = "11001005";
        						}
        						this.gfn_moveMenuId(moveMenuId, "", "INFO");
        						return;
        					}
        				} else if (application.gv_changeMb == "A" && ASdif > 0  &&  AEdif > 0 ) {
        					var bFlag = confirm("결제방식을 자동이체로 선택하신 경우에는 결제계좌의 \n 공동인증서로 전자서명을 하여 자동이체 동의를 해주셔야 \n 합니다(전자금융거래법 15조). \n 회원정보변경 페이지로 이동 후 저장버튼을 클릭하여 \n 전자서명을 해주시기 바랍니다.");

        					if (bFlag) {
        						application.afrm_HFrameSet0.set_separatesize("190, *, 0");

        						var moveMenuId ="";
        						if (application.gv_userType == "01") {
        							moveMenuId = "11001005";
        						}
        						this.gfn_moveMenuId(moveMenuId, "", "INFO");
        						return;
        					}
        				} else if (application.gv_userStatus =="4" && Sdif > 0  &&  Edif > 0 ) {
        					var bFlag = confirm("서비스 회원 승인이 보류되었습니다. \n유예기간(2016년 01월 19일) 이후에는 로그인이 \n 불가합니다. \n회원정보변경으로 이동합니다.");

        					if (bFlag) {
        						application.afrm_HFrameSet0.set_separatesize("190, *, 0");
        						var moveMenuId ="";
        						if (application.gv_userType == "01") {
        							moveMenuId = "11001005";
        						}
        						this.gfn_moveMenuId(moveMenuId, "", "INFO");
        						return;
        					}
        				}
        				
        				/**
        				 *	NH_STS 농협 사용자 소속검사(협력업체는 null)
        				 *	3 : 하나로유통 사용자, 부서코드까지 일치
        				 *	2 : 하나로유통 사용자, 부서코드 불일치
        				 *	1 : 범농협 사용자
        				 *	0 : 하나로유통 사용자 아님
        				 */
        // 				var nhSts = this.ds_login.getColumn(0, "NH_STS");
        // 				if (!this.gfn_isNull(nhSts) && (nhSts == "0" || nhSts == "2")) {
        // 					application.gv_weakPwYn = "X";
        // 				}
        				if (application.gv_weakPwYn == "X") {
        					alert("농협하나로유통에 소속된 사용자가 아닙니다.\n소속사업장 변경 후 하나로eSCM 서비스를 사용하실 수 있습니다.");

        					application.afrm_VFrameSet1.set_separatesize("0, *");
        					application.afrm_HFrameSet0.set_separatesize("0, *, 0");
        					var moveMenuId ="";
        					if (application.gv_userType =="02") {
        						moveMenuId = "21001006";
        					} else if (application.gv_userType =="03") {
        						moveMenuId = "31001007";
        					}

        					this.gfn_moveMenuId(moveMenuId, "", "INFO");
        					return;
        				} else if (application.gv_weakPwYn == "Y") {
        					alert("현재 비밀번호는 보안에 취약합니다.\n다른 비밀번호로 변경하시기 바랍니다.");

        					application.afrm_HFrameSet0.set_separatesize("190, *, 0");
        					var moveMenuId ="";

        					if (application.gv_userType == "01") {
        						moveMenuId = "11001008";
        					} else if (application.gv_userType =="02") {
        						moveMenuId = "21001008";
        					} else if (application.gv_userType =="03") {
        						moveMenuId = "31001008";
        					} else if (application.gv_userType =="04") {
        						moveMenuId = "41001003";
        					} else if (application.gv_userType =="05") {
        						moveMenuId = "51001003";
        					} else if (application.gv_userType =="81") {
        						moveMenuId = "62001003";
        					}

        					this.gfn_moveMenuId(moveMenuId, "", "INFO");
        					return;
        				}

        				if (application.gv_pwOverTermYn == "Y") {
        					var bFlag = confirm("비밀번호 변경일자가 90일이 지났습니다.\n지금 비밀번호를 변경하시겠습니까?");

        					if (bFlag) {
        						application.afrm_HFrameSet0.set_separatesize("190, *, 0");
        						var moveMenuId ="";
        						if (application.gv_userType == "01") {
        							moveMenuId = "11001008";
        						} else if (application.gv_userType =="02") {
        							moveMenuId = "21001008";
        						} else if (application.gv_userType =="03") {
        							moveMenuId = "31001008";
        						} else if (application.gv_userType =="81") {
        							moveMenuId = "62001003";
        						}
        						this.gfn_moveMenuId(moveMenuId, "", "INFO");
        						return;
        					}
        				}

        				if (application.gv_changeElt == "Y") {
        					alert("전자 계약서가 변경되었습니다. \n 확인 부탁드립니다. ");
        				}
        				break;

        			case "retrieveMyMenuList":
        				break;

        			case "getMessageList":
        				break;
        				
        			case "retrieveSystemAuth":
        				application.gv_systemAuth = this.ds_systemAuth.getColumn(0, "CHECK_AUTH");
        				break;
        				
        			default:
        				break;
        		}
         	}
        //  	 주류공급처의 권한매장의 경우 처음에는 commanyType이 null인 상태 이므로 새로고침을
        //  	 한번 해주어 세션값을 글로벌 변수에 담아준다.
         	if(application.gds_session.getColumn(0,"commanyType")==null && application.gv_glnCode!=''){
        		location.reload();
        	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.btn_login_onclick = function(obj,e)
        {
        	var tab_login = this.div_mainbg.div_main_visual.div_user_tab.div_tab_login;

        	var sId = tab_login.edt_id.value;
        	var sPW = tab_login.edt_pw.value;
        	if (this.gfn_isNull(sId)) {
        		alert("아이디를 입력하세요.");
        		tab_login.edt_id.setFocus();
        		return;
        	}

        	if (this.gfn_isNull(sPW)) {
        		alert("비밀번호를 입력하세요.");
        		tab_login.edt_pw.setFocus();
        		return;
        	}

        	var sParam = "MB_ID="+sId+" MB_PW="+sPW + " TRANS_YN="+ this.TRANS_YN;

        	application.gv_userTPC = "";
        	//User Type체크(일반/운영)
        	var sSvcID        = "getUserType";
        	var sURL          = "svc::rest/pt/getUserType";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_USR_TPC=ds_USR_TPC";
        	var sArgument     = sParam;
        	var sCallbackFunc = "fn_callBackIntro";
        	var sTranType     = "U"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        this.fn_callSession = function()
        {
        	var tab_login = this.div_mainbg.div_main_visual.div_user_tab.div_tab_login;
        	var sSId = tab_login.edt_id.value;
        	var sSPW = tab_login.edt_pw.value;

        	var sSParam;

        	if (application.gv_userTPC == "admin") {
        		sSParam = "OPER_MB_ID="+sSId+" MB_PW="+sSPW+ " TRANS_YN="+ this.TRANS_YN;
        	} else {
        		sSParam = "MB_ID="+sSId+" MB_PW="+sSPW+ " TRANS_YN="+ this.TRANS_YN;
        	}
        	var sSvcID        = "retrieveSession";
        	var sURL          = "svc::rest/pt/retrieveSession";		// svc = http://localhost:8080/nhvan/
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_login=ds_session";
        	var sArgument     = sSParam;
        	var sCallbackFunc = "fn_callBackIntro";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        this.fn_callMenuList = function()
        {
        	var sURL;
        	if (application.gv_userTPC == "admin") {
        		sURL = "svc::rest/mg/retrieveMenuListAll";
        	} else {
        		sURL = "svc::rest/mg/retrieveMenuList";
        	}

        	var sGlnCode = this.gfn_nvl(this.ds_login.getColumn(0, "glnCode"), application.gds_session.getColumn(0, "glnCode"));

        	var sSvcID = "retrieveMenuList";
        	var sInDatasets = "";
        	var sOutDatasets = "gds_menu=ds_menu gds_userInfoMenu=ds_my_menu";
        	var sArgument = "glnCode="+sGlnCode;
        	var sCallbackFunc = "fn_callBackIntro";
        	var sTranType = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        this.fn_callMessageList = function()
        {
        	var sSvcID        = "getMessageList";
        	var sURL          = "svc::rest/common/getMessageList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "gds_msg=message_list";
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBackIntro";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType, true);
        }

        this.fn_callAdminSite = function()
        {
        	var tab_login = this.div_mainbg.div_main_visual.div_user_tab.div_tab_login;
        	var pId = tab_login.edt_id.value;
        	var pPW = tab_login.edt_pw.value;
        	this.WebBrowser00.set_url("javascript:window.open('http://121.156.58.242:8080/escm_admin/intro.html?gv_paramID="+pId+"&gv_paramPW="+pPW+"', 'popup', 'top=0px, left=0px, height=768px, width=1024px')");

        	//크롬브라우저 때문에. 런타임에서는 오류남
        	var win = window.open("", "_self");
        	win.close();
        }

        this.button_onclick = function(obj,e)
        {
        	switch(obj.name) {
        		case "btn_quick01":
        			this.gfn_openIntroMenu(10100000);
        			break;

        		case "btn_quick02":
        			this.gfn_openIntroMenu(10200000);
        			break;

        		case "btn_quick03":
        			this.gfn_openIntroMenu(30100000);
        			break;

        		case "btn_quick04":
        			this.gfn_openIntroMenu(40100000);
        			break;

        		case "btn_quick05":
        			this.gfn_openIntroMenu(10300000);
        			break;

        		case "btn_quick06":
        			this.gfn_openIntroMenu(10400000);
        			break;

        		/* // 통계분석서비스
        		case "btn_quick07":
        			this.gfn_openIntroMenu(10500000);
        			break;
        		*/

        		case "btn_quick08":
        			this.gfn_openIntroMenu(10600000);
        			break;

        		case "btn_plus":
        			break;

        		case "btn_find":
        			this.fn_searchIdPw();
        			break;

        		case "btn_remote":
        			window.open("http://939.co.kr/nhescm/");
        			break;

        		case "btn_into":
        			this.gfn_openIntroMenu(20100000);
        			break;

        		case "btn_more":
        			application.afrm_TopFrame.set_formurl("frame::TopFrame.xfdl");
        			application.afrm_LeftFrame.set_formurl("frame::LeftFrame.xfdl");
        			application.afrm_VFrameSet0.set_separatesize("0, 65, *");

        			this.gfn_OpenMenuId("25005000", "INFO");
        			application.afrm_PotalFrame.childFrame.fn_toDoList();
        			break;
        			
        		case "btn_sms" :
        			this.fn_openSMS();
        			break;
        	}
        }

        this.grd_oncellclick = function(obj,e)
        {
        	var objDs = this.lookup(obj.binddataset);
        	switch (obj.name) {
        		case "grd_bbs":
        			this.fn_openBbsNotice(e.row);
        			break;
        	}
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_openSMS = function()
        {
        	var oArg = {};
        	var sOption = "autosize=true, title=true, modeless=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("POP_SMS", "POPUP::POPUP_SMS.xfdl", oArg, sOption, sPopupCallBack);
        }

        this.fn_openBbsNotice = function(nRow)
        {
        	var oArg = {blbdId:this.ds_bbs.getColumn(nRow, "BLBD_ID"), bbrdId:this.ds_bbs.getColumn(nRow, "BBRD_ID")};
        	var sOption = "autosize=true, title=true";
        	var sPopupCallBack = "fn_popupAfter";

        	var view = "OMG_DS_SC_4111"; // 일반 게시판상세
        	if (this.ds_bbs.getColumn(nRow, "NAMO_YN") == "Y") {
        		view = "OMG_DS_SC_4115"; // 나모에디터 작성 게시판상세
        	}
        	this.gfn_openPopup(view, "OMG.PT::"+view+".xfdl", oArg, sOption, sPopupCallBack);
        	//this.gfn_openPopup("OMG_DS_SC_4111", "OMG.PT::OMG_DS_SC_4111.xfdl", oArg, sOption, sPopupCallBack);
        }

        
        this.fn_openRequestCheck = function()
        {
        	var oArg = {paramMode:"S"};
        	var sOption = "autosize=true, title=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("popId", "OMG.BT::OMG_DS_SC_1111.xfdl", oArg, sOption, sPopupCallBack);
        }

        /*신규업체 계약상담 페이지 이동*/
        this.cbo_new_onitemchanged = function(obj,e)
        {
        	if (e.postvalue == 1) {
        		this.fn_openRequestCheck();
        	}
        	if (e.postvalue == 2) {
        		this.div_new.bringToFront();
        		this.div_new.set_visible(true);
        	}
        	var nIndex = -1;
        	obj.set_index(nIndex);
        }

        // 신규업체 계약상담
        this.btn_new_onclick = function(obj,e)
        {
        	this.fn_moveServiceMenu("BT");
        }

        /**
         * 서비스 메뉴 이동
         * BT : 계약상담
         */
        this.fn_moveServiceMenu = function(type)
        {
        	application.afrm_PotalFrame.set_formurl("");
        	application.afrm_VFrameSet0.set_separatesize("0, 65, *");
        	application.afrm_HFrameSet0.set_separatesize("190, *, 0");
        	application.afrm_VFrameSet1.set_separatesize("0, *");

        	if (type == "BT") {
        		application.afrm_LeftFrame.set_formurl("frame::LeftFrame_serviceBT.xfdl");
        		application.afrm_TopFrame.set_formurl("frame::TopFrame_serviceBT.xfdl");	
        	}
        	this.gfn_OpenMenuId("10100000", "", type);
        }

        this.fn_searchIdPw = function()
        {
        	var oArg           = "";
        	var sOption        = "autosize=true, title=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("POP_IDPW", "OMG.PT::OMG_DS_SC_5120.xfdl", oArg, sOption, sPopupCallBack);
        }

        this.fn_setGlobalVariable = function()
        {
        	// trace(this.ds_login.saveXML);
        	application.gv_userKey         = this.gfn_nvl(this.ds_login.getColumn(0, "userKey"), "");
        	application.gv_userId          = this.gfn_nvl(this.ds_login.getColumn(0, "userID"), "");
        	application.gv_glnCode         = this.gfn_nvl(this.ds_login.getColumn(0, "glnCode"), "");
        	application.gv_mbcoType        = this.gfn_nvl(this.ds_login.getColumn(0, "mbcoType"), "");
        	application.gv_companyName     = this.gfn_nvl(this.ds_login.getColumn(0, "companyName"), "");
        	application.gv_userName        = this.gfn_nvl(this.ds_login.getColumn(0, "userName"), "");
        	application.gv_companyType     = this.gfn_nvl(this.ds_login.getColumn(0, "commanyType"), "");
        	application.gv_lastLoginDt     = this.gfn_nvl(this.ds_login.getColumn(0, "lastLoginDt"), "");
        	application.gv_userType        = this.gfn_nvl(this.ds_login.getColumn(0, "userType"), "");
        	application.gv_firstLoginYn    = this.gfn_nvl(this.ds_login.getColumn(0, "firstLoginYn"), "");
        	application.gv_userCvDsc       = this.gfn_nvl(this.ds_login.getColumn(0, "userCvDsc"), "");
        	application.gv_userStatus      = this.gfn_nvl(this.ds_login.getColumn(0, "userStatus"), "");
        	application.gv_userAuth        = this.gfn_nvl(this.ds_login.getColumn(0, "userAuth"), "");
        	application.gv_pwOverTermYn    = this.gfn_nvl(this.ds_login.getColumn(0, "pwOverTermYn"), "");
        	application.gv_hoffApvYn       = this.gfn_nvl(this.ds_login.getColumn(0, "hoffApvYn"), "");
        	application.gv_naUsrSysKdc     = this.gfn_nvl(this.ds_login.getColumn(0, "naUsrSysKdc"), "");
        	application.gv_svcStatus       = this.gfn_nvl(this.ds_login.getColumn(0, "svcStatus"), "");
        	application.gv_bizNumber       = this.gfn_nvl(this.ds_login.getColumn(0, "bizNumber"), "");
        	application.gv_changeMb        = this.gfn_nvl(this.ds_login.getColumn(0, "CHANGE_MB"), "");
        	application.gv_changeElt       = this.gfn_nvl(this.ds_login.getColumn(0, "CHANGE_ELT"), "");
        	application.gv_upGlnCode       = this.gfn_nvl(this.ds_login.getColumn(0, "upGlnCode"), "");
        	application.gv_billingUserID   = this.gfn_nvl(this.ds_login.getColumn(0, "billingUserID"), "");
        	application.gv_billingUserName = this.gfn_nvl(this.ds_login.getColumn(0, "billingUserName"), "");
        	application.gv_noAuthMenuGroup = this.gfn_nvl(this.ds_login.getColumn(0, "noAuthMenuGroup"), "");
        	application.gv_userSystemCode  = this.gfn_nvl(this.ds_login.getColumn(0, "userSystemCode"), "");
        	application.gv_weakPwYn        = this.gfn_nvl(this.ds_login.getColumn(0, "weakPwYn"), "");
        	application.gv_trplDtlTpc      = this.gfn_nvl(this.ds_login.getColumn(0, "trplDtlTpc"), "");
        }

        this.fn_callMymenu = function()
        {
           var sSvcID        = "retrieveMyMenuList";
           var sURL          = "svc::rest/pt/retrieveMyMenuList";
           var sInDatasets   = "";
           var sOutDatasets  = "gds_myMenu=ds_myMenu";
           var sArgument     = "";
           var sCallbackFunc = "fn_callBackIntro";
           var sTranType     = "S"; // U:저장/삭제, S:조회
           this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType)
        }

        this.fn_callSystemAuth = function()
        {
           var sSvcID        = "retrieveSystemAuth";
           var sURL          = "svc::rest/common/getCheckAuth";
           var sInDatasets   = "";
           var sOutDatasets  = "ds_systemAuth=data";
           var sArgument     = "";
           var sCallbackFunc = "fn_callBackIntro";
           var sTranType     = "S"; // U:저장/삭제, S:조회
           this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType)
        }

        this.fn_userCheck = function()
        {
        	/* 최초로그인이면서 전환회원이거나 미전환회원인 경우 */
        	if (application.gv_firstLoginYn == "Y" && (application.gv_userCvDsc == "1" || application.gv_userCvDsc == "2")) {
        		alert("최초로그인이면서 미전환회원인 경우, \n회원정보변경으로 이동합니다.");
        		this.fn_joinPopModify("trans");
        		return false;
        	}

        	/* 가입진행상태 */
        	if (application.gv_userStatus == "0") {
        		alert("회원가입 승인 대기중입니다.\n긴급시 고객센터로 문의해 주시기 바랍니다.");
        		this.gfn_logout();
        		return false;
        	} else if (application.gv_userStatus == "2") {
        		alert("회원가입 승인이 보류되었습니다.\n회원정보변경으로 이동합니다.");
        		this.fn_joinPopModify("mod");
        		return false;
        	} else if (application.gv_userStatus == "5") {
        		alert("해지된 아이디입니다.\n로그인할 수 없습니다.");
        		this.gfn_logout();
        		return false;
        	} else if (application.gv_userStatus == "6") {
        		this.fn_restout();
        	}

        	/* 본사승인여부 */
        	if (application.gv_hoffApvYn == "N") {
        		alert("본사 승인이 되지 않아 로그인할 수 없습니다.");
        		this.gfn_logout();
        		return false;
        	}

        	/*
        	 * [주의] 마지막에 미납중지 여부를 검사를 해야한다.
        	 *   - GNL의 최초 가입회원이 승인 대기 및 보류 중인 경우, BL_COMP_SVC_AMN 에 데이터가 없기 때문.
        	 */
        	if (application.gv_svcStatus == "N") {
        		alert("거래처코드에 대한 서비스가 중지되어 로그인할 수 없습니다."
        			+ "\n"
        			+ "\n1. 서비스 이용료 미납 업체인 경우"
        			+ "\n    - 미납금액 입금완료 후 서비스 사용가능"
        			+ "\n      (중지된 업체의 미납금액은 자동이체로 출금되지 않습니다.)"
        			+ "\n"
        			+ "\n2. 이용료 세금계산서 발행실패 업체인 경우"
        			+ "\n    - 청구정보 수정 후 서비스 사용가능"
        			+ "\n      (폐업 신고된 사업자등록번호는 사용할 수 없습니다.)"
        			+ "\n"
        			+ "\n자세한 내용은 고객센터로 문의해 주시기 바랍니다."
        		);
        		this.gfn_logout();
        		return false;
        	}

        	return true;
        }

        /*휴면계정 품*/
        this.fn_restout = function()
        {
            var id = this.gfn_nvl(this.ds_login.getColumn(0, "userID"), "");
            var name = this.gfn_nvl(this.ds_login.getColumn(0, "userName"), "");
            var ent_prg_stsc = this.gfn_nvl(this.ds_login.getColumn(0, "userStatus"), "");
        	this.ds_param.addRow();
        	this.ds_param.setColumn(0, "MB_ID", id);
        	this.ds_param.setColumn(0, "USR_NM", name);
        	this.ds_param.setColumn(0, "ENT_PRG_STSC", ent_prg_stsc);

        	var sSvcID        = "updateReststscout";
        	var sURL          = "svc::rest/mg/usrinf/updateReststscout";
        	var sInDatasets   = "ds_param=ds_param";
        	var sOutDatasets  = "";
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBackIntro";
        	var sTranType     = "U"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        /* 가입수정(보류) 폼 */
        this.fn_joinPopModify = function(type)
        {
        	var oArg = {paramMode:"Y"};
        	var grp    = application.gds_userInfoMenu.getColumn(1, "SVC_GROUP");
        	var fileNm = application.gds_userInfoMenu.getColumn(1, "FILE_NAME");
        	var sUrl   = grp+"::"+fileNm+".xfdl";

        	if (application.gv_userType == '01') {
        		sUrl ="OMG.PT::OMG_DS_SC_5114.xfdl";
        	} else if (application.gv_userType == '02') {
        		sUrl ="OMG.PT::OMG_DS_SC_5115.xfdl";
        	} else if (application.gv_userType == '03') {
        		sUrl ="OMG.PT::OMG_DS_SC_5116.xfdl";
        	} else if (application.gv_userType == '04') {
        		sUrl ="OMG.PT::OMG_DS_SC_5118.xfdl";
        	} else if (application.gv_userType == '05') {
        		sUrl ="OMG.PT::OMG_DS_SC_5181.xfdl";
        	} else if (application.gv_userType == '81') {
        		sUrl ="OMG.PT::OMG_DS_SC_5171.xfdl";
        	}

        	//전환회원 및 미전환회원인 경우 url은 고정값
        	if (type=='trans') {
        		sUrl ="OMG.PT::OMG_DS_SC_5113.xfdl";
        	}

        	var sOption        = "autosize=true, title=true";
        	var sPopupCallBack = "fn_popupAfter_joinPopModify";
        	this.gfn_openPopup("joinPopModify", sUrl, oArg, sOption, sPopupCallBack);
        }

        this.fn_popupAfter_joinPopModify = function()
        {
        	this.gfn_logout();
        }
        /***************************************************
        	회원종류선택
        ****************************************************/
        this.btn_confirm_onclick = function(obj,e)
        {
        	this.fn_selectJoinType("NH");
        	
        	/*
        	var tab_join = this.div_mainbg.div_main_visual.div_user_tab.div_tab_join;

        	// 회원유형 선택 체크
            var objCombo = this.div_mainbg.div_main_visual.div_user_tab.div_tab_join.cmb_usr_tpc;
            var sVal =  objCombo.value;

        	if (this.gfn_isNull(sVal)) {
        		alert("회원종류를 선택하세요.");
        		return;
        	}

        	if (sVal == "01") {
        		this.fn_joinUser("OMG.PT::OMG_DS_SC_5110.xfdl");
        	} else if (sVal == "02") {
        		this.fn_joinUser("OMG.PT::OMG_DS_SC_5111.xfdl");
        	} else if (sVal == "03") {
        		this.fn_joinUser("OMG.PT::OMG_DS_SC_5112.xfdl");
        	} else if (sVal == "04") {
        		this.fn_joinUser("OMG.PT::OMG_DS_SC_5117.xfdl");// 세금계산서전용 추가
        	} else if (sVal == "05") {
        		this.fn_joinUser("OMG.PT::OMG_DS_SC_5180.xfdl");// 전자계약전용 추가
        	} else if (sVal == "81") {
        		this.fn_joinUser("OMG.PT::OMG_DS_SC_5170.xfdl");// AMARKET 추가
        	}
        	*/
        }

        this.btn_close_onclick = function(obj,e)
        {
        // 	this.div_join.set_visible(false);
        // 	for (var i=1; i<6; i++) {
        // 		this.div_join.all["rdo_userType"+i].set_value("");
        // 	}
        	// this.div_mainbg.div_main_visual.div_user_tab.btn_tab_login.click();
        	this.fn_selectJoinType("CO");
        }

        /***************************************************
        	회원종류에 따른 회원가입 화면 호출
        ****************************************************/
        this.fn_joinUser = function(url)
        {
        	this.div_mainbg.div_main_visual.div_user_tab.btn_tab_login.click();

        	var oArg = {};
        	var sOption = "autosize=true, title=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("popId", url, oArg, sOption, sPopupCallBack);
        }

        this.fn_selectJoinType = function(type)
        {
        	this.div_mainbg.div_main_visual.div_user_tab.btn_tab_login.click();

        	var oArg = {JOIN_TYPE:type, PASS_POLICY:"Y"};
        	var sOption = "autosize=true, title=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("popJoin", "OMG.PT::OMG_DS_SC_5100.xfdl", oArg, sOption, sPopupCallBack);
        }

        /***************************************************
        	후처리
        ****************************************************/
        this.fn_popupAfter = function(strId,strVal)
        {
        	// trace("fn_popupAfter");
        }

        this.fn_callAuthorityWorkplace = function()
        {
        	console.log("fn_callAuthorityWorkplace");
        	var sSvcID        = "getAuthorityWorkplace";
        	var sURL          = "svc::rest/common/getRightsBizPlace";
        	var sInDatasets   = "";
        	var sOutDatasets  = "gds_authorityWorkplace=data";
        	var sArgument     = "";
        	var sCallbackFunc = "gfn_callBackReturn";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        this.fn_callAuthorityWorkplaceLiq = function()
        {
        	console.log("fn_callAuthorityWorkplaceLiq");
        	var sSvcID        = "getAuthorityWorkplaceLiq";
        	var sURL          = "svc::rest/common/getRightsBizPlaceLiq";
        	var sInDatasets   = "";
        	var sOutDatasets  = "gds_authorityWorkplaceLiq=dataLiq";
        	var sArgument     = "";
        	var sCallbackFunc = "gfn_callBackReturn";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        this.div_login_onkeydown = function(obj,e)
        {
        	if (e.keycode==13) {
        		this.btn_login_onclick();
        	}
        }

        this.popup = function()
        {
        	this.popup_W= 0 ;
        	this.popup_H= 0;
        	var today = this.gfn_getClientTime("yyyyMMdd");

            // eSCM공지
        	for (var i = 0 ; i < this.ds_popup.rowcount; i++) {
        	    var framename = this.ds_popup.getColumn(i, "FRAMENAME")  ;
        	    var bbrdId = this.ds_popup.getColumn(i, "BBRD_ID")  ;
        		var bbrd_cntn = this.ds_popup.getColumn(i, "BBRD_CNTN")  ;
        		var namo = this.ds_popup.getColumn(i, "BBRD_NAMO_FLNM"); // Namo file
        		var url = "";

        		if (bbrd_cntn == "N") {
        			url = this.ds_popup.getColumn(i, "PICTURE");
        		}

        		var expire = application.getPrivateProfile(bbrdId); //this.framename
        		if (expire == undefined) {
        			application.setPrivateProfile(bbrdId, "N");
        			this.expire = "N";
        		}

        		if (expire == "N" || expire < today) {
         			application.open(framename + bbrdId, "OMG.PT::OMG_DS_SC_9090.xfdl", this, {
        					URL:url, 
        					FRAME_NAME:framename, 
        					BBRD_CNTN:bbrd_cntn, 
        					BLBD_ID:"", 
        					BBRD_ID:bbrdId, 
        					MHT:namo
        				}, "showtitlebar=false showstatusbar=true autosize=false", this.popup_W, this.popup_H, 600, 640);
         			this.popup_W = this.popup_W  + 40;
        			this.popup_H= this.popup_H + 40;
         		}
        	}

        	// 농협공지
        	for (var i = 0 ; i < this.ds_popupOfanc.rowcount; i++) {
        	    var framename = this.ds_popupOfanc.getColumn(i, "FRAMENAME");
        		var bbrd_cntn = this.ds_popupOfanc.getColumn(i, "BBRD_CNTN");
        		var bbrdId = this.ds_popupOfanc.getColumn(i, "BBRD_ID");

        		var expire = application.getPrivateProfile(bbrdId); //this.framename
        		if (expire == undefined) {
        			application.setPrivateProfile(bbrdId, "N");
        			expire = "N";
        		}

        		if (expire == "N" || expire < today) {
         			application.open(framename + bbrdId, "OMG.PT::OMG_DS_SC_9090.xfdl", this, {
        					URL:"", 
        					FRAME_NAME:framename, 
        					BBRD_CNTN:bbrd_cntn, 
        					BLBD_ID:"", 
        					BBRD_ID:bbrdId
        				}, "showtitlebar=false showstatusbar=true autosize=false", this.popup_W, this.popup_H, 600, 640);
         			this.popup_W = this.popup_W  + 40 ;
        			this.popup_H= this.popup_H + 40;
         		}
        	}
        }

        /******** 공동인증서 서명 프로그램 설치 ***********/
        this.fn_checkOpenWebSign = function()
        {
        	var obj = this.lookup("objWeb");
        	if (!this.gfn_isNull(obj)) {
        		obj.destroy();
        		obj = null;
        	}

        	/******** 동적으로 WebBrowser 생성 ***********/
        	var objWeb = new WebBrowser("objWeb", "absolute", 0, 0, 100, 100, null, null);
        	this.addChild("objWeb", objWeb);
        	objWeb.show();
        	objWeb.set_visible(false);
        	objWeb.set_url(application.gv_serviceHtml_url + "escm/OpenWeb_PKI/pki/pki.html");
        	objWeb.setEventHandler("onloadcompleted", this.fn_onloadcompleted, this);
        }

        this.fn_onloadcompleted = function(obj,e)
        {
        	obj.callMethod("checkInstall");
        }

        this.img_related_onclick = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "img_related01"://농협경제지주
        			window.open("http://www.nhabgroup.com");
        			break;
        		case "img_related03"://농협몰
        			window.open("http://www.nonghyupmall.com");
        			break;
        		case "img_related02"://하나로유통
        			window.open("http://www.nhhanaro.co.kr/mbshome/mbs/nahh002/index.do");
        			break;
        		case "img_related04"://농협유통
        			window.open("http://www.nhhanaro.co.kr/mbshome/mbs/nahh003/index.do");
        			break;
        	}
        }

        /* 로그인/회원가입 탭 전환 */
        this.user_tab_swap = function(obj,e)
        {
        	obj.set_cssclass("btn_LOGIN_tab_on");
        	var tab = this.div_mainbg.div_main_visual.div_user_tab;
        	var tab_login = tab.div_tab_login;
        	var tab_join = tab.div_tab_join;

        	if (obj.id == "btn_tab_login") {
        		// 로그인 탭
        		tab.btn_tab_join.set_cssclass("btn_LOGIN_tab_off");

        		tab_login.set_visible(true); // 로그인 보임
        		tab_join.set_visible(false); // 회원가입 감춤

        		/*
        		tab_join.rdo_userType1.set_value("");
        		tab_join.rdo_userType2.set_value("");
        		tab_join.rdo_userType3.set_value("");
        		tab_join.rdo_userType4.set_value("");
        		tab_join.rdo_userType5.set_value("");
        		*/

        		// tab_join.cmb_usr_tpc.set_value("");
        	} else if (obj.id == "btn_tab_join") {
        		// 회원가입 탭
        		tab.btn_tab_login.set_cssclass("btn_LOGIN_tab_off");
        		tab_login.set_visible(false);
        		tab_join.set_visible(true);

        		//아이디 비번 초기화
        		tab_login.edt_id.set_value("");
        		tab_login.edt_pw.set_value("");
        	}
        }

        /* 화면리사이즈에 따른 레이아웃 유지 */
        var RESIZE_DIV = [ /* 가운데 정렬할 객체 */
        	 this.div_mainbg.div_main_visual
        	, this.div_footer
        	, this.div_quick_wrap.div_quick
        	, this.div_content_wrap.div_content
        	, this.div_related_wrap.div_related
        ];
        var RESIZE_WRAP = [ /* 정렬할 객체의 부모 레이아웃(기본 폭 유지) */
        	 this.div_mainbg
        	, this.div_footer_bg
        	, this.div_quick_wrap
        	, this.div_content_wrap
        	, this.div_related_wrap
        ];
        this.Intro_onsize = function(obj,e)
        {
        	var BASE_WIDTH = 1010; // 기본사이즈(넓이)
        	var BASE_HEIGHT = 931; // 기본사이즈(높이)
        	var diffW = 0, diffH = 0;
        	if (obj.width > BASE_WIDTH) {
        		diffW = (obj.width - BASE_WIDTH) / 2;
        	} else {
        		diffW = 0;
        	}

        	if (obj.height > BASE_HEIGHT) {
        		diffH = obj.height - BASE_HEIGHT;
        	} else {
        		diffH = 0;
        	}

        	// 기본 높이(BASE_HEIGHT)에 따른 하단(Footer) 위치 조절
        	this.div_related_wrap.set_top(730+diffH);
        	this.div_footer.set_top(781+diffH);
        	this.div_footer_bg.set_top(781+diffH);

        	// 기본 넓이(BASE_WIDTH) 보다 넓을 때, 화면 가운데 정렬
        	for (var i=0; i<RESIZE_DIV.length; i++) {
        		RESIZE_DIV[i].set_left(diffW);
        	}

        	// 기본 넓이(BASE_WIDTH)보다 좁을 때, 최소 넓이 유지(스크롤)
        	for (var i=0; i<RESIZE_WRAP.length; i++) {
        		if (diffW == 0) {
        			RESIZE_WRAP[i].set_width(BASE_WIDTH);
        			RESIZE_WRAP[i].set_right("");
        		} else {
        			RESIZE_WRAP[i].set_width("");
        			RESIZE_WRAP[i].set_right(0);
        		}
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("onsize", this.Intro_onsize, this);
            this.div_mainbg.div_main_visual.div_user_tab.div_tab_login.edt_id.addEventHandler("onkeydown", this.div_login_onkeydown, this);
            this.div_mainbg.div_main_visual.div_user_tab.div_tab_login.edt_pw.addEventHandler("onkeydown", this.div_login_onkeydown, this);
            this.div_mainbg.div_main_visual.div_user_tab.div_tab_login.btn_login.addEventHandler("onclick", this.btn_login_onclick, this);
            this.div_mainbg.div_main_visual.div_user_tab.div_tab_login.btn_find.addEventHandler("onclick", this.button_onclick, this);
            this.div_mainbg.div_main_visual.div_user_tab.btn_tab_login.addEventHandler("onclick", this.user_tab_swap, this);
            this.div_mainbg.div_main_visual.div_user_tab.btn_tab_join.addEventHandler("onclick", this.user_tab_swap, this);
            this.div_mainbg.div_main_visual.div_user_tab.div_tab_join.btn_cancel.addEventHandler("onclick", this.btn_close_onclick, this);
            this.div_mainbg.div_main_visual.div_user_tab.div_tab_join.btn_confirm.addEventHandler("onclick", this.btn_confirm_onclick, this);
            this.div_quick_wrap.div_quick.btn_quick01.addEventHandler("onclick", this.button_onclick, this);
            this.div_quick_wrap.div_quick.btn_quick02.addEventHandler("onclick", this.button_onclick, this);
            this.div_quick_wrap.div_quick.btn_quick03.addEventHandler("onclick", this.button_onclick, this);
            this.div_quick_wrap.div_quick.btn_quick04.addEventHandler("onclick", this.button_onclick, this);
            this.div_quick_wrap.div_quick.btn_quick05.addEventHandler("onclick", this.button_onclick, this);
            this.div_quick_wrap.div_quick.btn_quick06.addEventHandler("onclick", this.button_onclick, this);
            this.div_quick_wrap.div_quick.btn_quick08.addEventHandler("onclick", this.button_onclick, this);
            this.div_related_wrap.div_related.img_related01.addEventHandler("onclick", this.img_related_onclick, this);
            this.div_related_wrap.div_related.img_related02.addEventHandler("onclick", this.img_related_onclick, this);
            this.div_related_wrap.div_related.img_related04.addEventHandler("onclick", this.img_related_onclick, this);
            this.div_related_wrap.div_related.img_related03.addEventHandler("onclick", this.img_related_onclick, this);
            this.div_content_wrap.div_content.div_notice_box.grd_bbs.addEventHandler("oncellclick", this.grd_oncellclick, this);
            this.div_content_wrap.div_content.div_help_box.btn_remote.addEventHandler("onclick", this.button_onclick, this);
            this.div_content_wrap.div_content.div_help_box.btn_new.addEventHandler("onclick", this.btn_new_onclick, this);
            this.div_content_wrap.div_content.div_help_box.btn_into.addEventHandler("onclick", this.button_onclick, this);

        };

        this.loadIncludeScript("Intro_backup.xfdl");
        this.loadPreloadList();
       
    };
}
)();
