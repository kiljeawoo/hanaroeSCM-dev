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
                this._setFormPosition(0,0,1355,931);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_usrConsentCount", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CONSENT_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_survey", this);
            obj._setContents("<ColumnInfo><Column id=\"BSN_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBTITLE\" type=\"STRING\" size=\"256\"/><Column id=\"INTRO\" type=\"STRING\" size=\"256\"/><Column id=\"APL_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"APL_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RMK_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRGMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CMENO\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_DSC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cnt04", this);
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

            obj = new Dataset("ds_cnt05", this);
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

            obj = new Dataset("ds_cnt06", this);
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

            obj = new Dataset("ds_usrConsent", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BSN_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSENT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cnt07", this);
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

            obj = new Dataset("ds_cnt01", this);
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

            obj = new Dataset("ds_cnt02", this);
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

            obj = new Dataset("ds_cnt03", this);
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

            obj = new Dataset("ds_bbs", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"BLBD_ID\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"BBRD_ID\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"BBRD_TI\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"BBRD_CNTN\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"BLTN_ST_DTM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"BLTN_ED_DTM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CKNL_DSC\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"BBRD_DEL_YN\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"BBRD_INQ_CN\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"BBRD_RGMNM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"FSRG_DTM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"FS_RGM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"LSCHG_DTM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"LS_CHGM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"PRET_BBRD_ID\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_notice", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BBRD_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"BLTN_ST_DTM\" type=\"string\" size=\"32\"/><Column id=\"BLTN_ED_DTM\" type=\"string\" size=\"32\"/><Column id=\"OFANC_TINM\" type=\"STRING\" size=\"256\"/><Column id=\"OFANC_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"OFANC_PRU_NT\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CKNL_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_tax", this);
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

            obj = new Dataset("ds_bas_svc", this);
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
            obj.style.set_font("9 맑은 고딕, Gulim");
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
            obj = new Button("btn_quick09", "absolute", "881", "0", "126", "95", null, null, this.div_quick_wrap.div_quick);
            obj.set_taborder("7");
            obj.set_text("동영상 교육");
            obj.set_cssclass("btn_INTRO_quick09");
            obj.set_visible("false");
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
            obj = new ImageViewer("img_related03", "absolute", "344", "0", "162", "45", null, null, this.div_related_wrap.div_related);
            obj.set_taborder("1");
            obj.style.set_background("URL('theme://images/new/family_01.png') center middle");
            obj.style.set_border("0 solid #e5e5e5ff");
            obj.style.set_cursor("hand");
            this.div_related_wrap.div_related.addChild(obj.name, obj);
            obj = new ImageViewer("img_related02", "absolute", "506", "0", "162", "45", null, null, this.div_related_wrap.div_related);
            obj.set_taborder("2");
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

            obj = new Div("div_content_wrap", "absolute", "0", "475", null, "255", "0", null, this);
            obj.set_taborder("45");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Div("div_content", "absolute", "0", "0", "1355", null, null, "0", this.div_content_wrap);
            obj.set_taborder("0");
            obj.set_scrollbars("none");
            this.div_content_wrap.addChild(obj.name, obj);
            obj = new Div("div_notice_box", "absolute", "345", "30", "320", "195", null, null, this.div_content_wrap.div_content);
            obj.set_taborder("0");
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
            obj = new Static("btn_more", "absolute", null, "10", "20", "20", "0", null, this.div_content_wrap.div_content.div_notice_box);
            obj.set_taborder("7");
            obj.style.set_background("URL('theme://images/new/icon_more.png') center middle");
            obj.set_visible("true");
            this.div_content_wrap.div_content.div_notice_box.addChild(obj.name, obj);
            obj = new Div("div_help_box", "absolute", "690", "30", "320", "195", null, null, this.div_content_wrap.div_content);
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
            obj = new Button("btn_sms", "absolute", "169", "153", "130", "34", null, null, this.div_content_wrap.div_content.div_help_box);
            obj.set_taborder("6");
            obj.set_cssclass("btn_INTRO_confirm");
            obj.style.set_cursor("hand");
            obj.set_text("긴급 SMS");
            this.div_content_wrap.div_content.div_help_box.addChild(obj.name, obj);
            obj = new Div("div_service", "absolute", "1035", "30", "320", "195", null, null, this.div_content_wrap.div_content);
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
            obj = new Div("div_nhnotice_box", "absolute", "0", "30", "320", "195", null, null, this.div_content_wrap.div_content);
            obj.set_taborder("3");
            obj.set_scrollbars("none");
            this.div_content_wrap.div_content.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "0", null, "37", "0", null, this.div_content_wrap.div_content.div_nhnotice_box);
            obj.set_taborder("12");
            obj.set_text("농협 공지사항");
            obj.style.set_border("1 solid transparent,1 solid transparent,1 solid #a7a7a7ff,1 solid transparent");
            obj.style.set_color("#3a3a3aff");
            obj.style.set_padding("0 0 0 5");
            obj.style.set_font("bold 12 맑은 고딕,Gulim");
            this.div_content_wrap.div_content.div_nhnotice_box.addChild(obj.name, obj);
            obj = new Static("btn_NHmore", "absolute", null, "10", "20", "20", "0", null, this.div_content_wrap.div_content.div_nhnotice_box);
            obj.set_taborder("10");
            obj.set_visible("true");
            obj.style.set_background("URL('theme://images/new/icon_more.png') center middle");
            this.div_content_wrap.div_content.div_nhnotice_box.addChild(obj.name, obj);
            obj = new Grid("grd_notice", "absolute", "10", "47", null, null, "0", "10", this.div_content_wrap.div_content.div_nhnotice_box);
            obj.set_cssclass("grd_INTRO_Notice2");
            obj.set_taborder("11");
            obj.set_binddataset("ds_notice");
            obj.set_scrollbars("autovert");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"10\"/><Column size=\"190\"/><Column size=\"9\"/><Column size=\"80\"/></Columns><Rows><Row size=\"25\"/></Rows><Band id=\"body\"><Cell displaytype=\"image\" style=\"align:left middle;padding:0 0 0 0;\" text=\"URL('theme://images/new/icon_dot.png')\"/><Cell col=\"1\" style=\":mouseover {cursor:hand;}\" text=\"bind:OFANC_TINM\"/><Cell col=\"2\"/><Cell col=\"3\" displaytype=\"normal\" style=\"align:right middle;padding:3 3 3 0;color:#a0a0a0ff;color2:#a0a0a0ff;\" text=\"bind:FSRG_DTM\"/></Band></Format></Formats>");
            this.div_content_wrap.div_content.div_nhnotice_box.addChild(obj.name, obj);

            obj = new Div("div_checklist", "absolute", "625", "180", "720", "190", null, null, this);
            obj.set_taborder("46");
            obj.set_scrollbars("none");
            obj.set_cssclass("div_PORTAL_TodoBg");
            this.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "140", "10", "185", "21", null, null, this.div_checklist);
            obj.set_taborder("67");
            obj.set_cssclass("sta_PORTAL_TodoDate");
            this.div_checklist.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "15", "12", "99", "16", null, null, this.div_checklist);
            obj.set_taborder("68");
            obj.set_cssclass("sta_PORTAL_TodoTitle");
            this.div_checklist.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "56", "250", "21", null, null, this.div_checklist);
            obj.set_taborder("69");
            obj.set_text("수주 미확인 건수");
            obj.set_cssclass("sta_PORTAL_TodoCountTitle");
            obj.style.set_font("9 맑은 고딕, Gulim");
            this.div_checklist.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "359", "55", "2", "120", null, null, this.div_checklist);
            obj.set_taborder("70");
            obj.set_cssclass("sta_PORTAL_TodoLine");
            this.div_checklist.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "15", "86", "250", "21", null, null, this.div_checklist);
            obj.set_taborder("71");
            obj.set_text("배송예정서 미작성 건수");
            obj.set_cssclass("sta_PORTAL_TodoCountTitle");
            obj.style.set_font("9 맑은 고딕, Gulim");
            this.div_checklist.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "15", "116", "250", "21", null, null, this.div_checklist);
            obj.set_taborder("72");
            obj.set_text("반품 미확인 건수");
            obj.set_cssclass("sta_PORTAL_TodoCountTitle");
            obj.style.set_font("9 맑은 고딕, Gulim");
            this.div_checklist.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", null, "56", "250", "21", "94", null, this.div_checklist);
            obj.set_taborder("73");
            obj.set_text("반품확인서 미작성 건수");
            obj.set_cssclass("sta_PORTAL_TodoCountTitle");
            obj.style.set_font("9 맑은 고딕, Gulim");
            this.div_checklist.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", null, "86", "250", "21", "94", null, this.div_checklist);
            obj.set_taborder("74");
            obj.set_text("검수 미확인 건수");
            obj.set_cssclass("sta_PORTAL_TodoCountTitle");
            obj.style.set_font("9 맑은 고딕, Gulim");
            this.div_checklist.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", null, "116", "250", "21", "94", null, this.div_checklist);
            obj.set_taborder("75");
            obj.set_text("세금계산서 역발행 미발행 건수");
            obj.set_cssclass("sta_PORTAL_TodoCountTitle");
            obj.style.set_font("9 맑은 고딕, Gulim");
            this.div_checklist.addChild(obj.name, obj);
            obj = new Button("btn03", "absolute", "264", "112", "80", "30", null, null, this.div_checklist);
            obj.set_taborder("76");
            obj.set_cssclass("btn_PORTAL_TodoCount");
            obj.style.set_cursor("hand");
            this.div_checklist.addChild(obj.name, obj);
            obj = new Button("btn02", "absolute", "264", "82", "80", "30", null, null, this.div_checklist);
            obj.set_taborder("77");
            obj.set_cssclass("btn_PORTAL_TodoCount");
            obj.style.set_cursor("hand");
            this.div_checklist.addChild(obj.name, obj);
            obj = new Button("btn06", "absolute", null, "112", "80", "30", "15", null, this.div_checklist);
            obj.set_taborder("78");
            obj.set_cssclass("btn_PORTAL_TodoCount");
            obj.style.set_cursor("hand");
            this.div_checklist.addChild(obj.name, obj);
            obj = new Button("btn04", "absolute", null, "51", "80", "30", "15", null, this.div_checklist);
            obj.set_taborder("79");
            obj.set_cssclass("btn_PORTAL_TodoCount");
            obj.style.set_cursor("hand");
            this.div_checklist.addChild(obj.name, obj);
            obj = new Button("btn05", "absolute", null, "82", "80", "30", "15", null, this.div_checklist);
            obj.set_taborder("80");
            obj.set_cssclass("btn_PORTAL_TodoCount");
            obj.style.set_cursor("hand");
            this.div_checklist.addChild(obj.name, obj);
            obj = new Button("btn01", "absolute", "264", "51", "80", "30", null, null, this.div_checklist);
            obj.set_taborder("81");
            obj.set_cssclass("btn_PORTAL_TodoCount");
            obj.style.set_cursor("hand");
            this.div_checklist.addChild(obj.name, obj);
            obj = new Button("btn07", "absolute", "264", "142", "80", "30", null, null, this.div_checklist);
            obj.set_taborder("83");
            obj.set_cssclass("btn_PORTAL_TodoCount");
            obj.style.set_cursor("hand");
            this.div_checklist.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "15", "146", "250", "21", null, null, this.div_checklist);
            obj.set_taborder("84");
            obj.set_text("마트장비 배송예정서 미작성 건수");
            obj.set_cssclass("sta_PORTAL_TodoCountTitle");
            obj.style.set_font("9 맑은 고딕, Gulim");
            this.div_checklist.addChild(obj.name, obj);
            obj = new Button("btn_popupClose", "absolute", null, "3", "32", "32", "3", null, this.div_checklist);
            obj.set_taborder("82");
            obj.set_cssclass("btn_WF_PopupClose");
            obj.style.set_cursor("hand");
            this.div_checklist.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "1383", "380", "136", "551", null, null, this);
            obj.set_taborder("47");
            obj.set_text("각 영역이 가이드 DIV 위치값(top, height)과 차이가 발생 할 때\r\nIntro_onsize의 값도 수정해야 함");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            obj.style.set_padding("2 10 0 10");
            obj.style.set_align("center middle");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "1358", "730", "22", "46", null, null, this);
            obj.set_taborder("48");
            obj.set_text("퀵\r\n배\r\n너");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "1358", "781", "22", "150", null, null, this);
            obj.set_taborder("49");
            obj.set_text("푸\r\n터");
            obj.set_visible("false");
            obj.style.set_background("#3c24cc5b");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "1358", "380", "22", "95", null, null, this);
            obj.set_taborder("50");
            obj.set_text("서\r\n비\r\n스\r\n안\r\n내");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "1358", "475", "22", "255", null, null, this);
            obj.set_taborder("51");
            obj.set_text("주\r\n컨\r\n텐\r\n츠");
            obj.set_visible("false");
            obj.style.set_background("#3c24cc5b");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
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
            obj = new Layout("default", "", 320, 156, this.div_content_wrap.div_content.div_nhnotice_box,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.set_scrollbars("none");

            	}
            );
            this.div_content_wrap.div_content.div_nhnotice_box.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1010, 255, this.div_content_wrap.div_content,
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
            obj = new Layout("default", "", 720, 190, this.div_checklist,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("46");
            		p.set_scrollbars("none");
            		p.set_cssclass("div_PORTAL_TodoBg");

            	}
            );
            this.div_checklist.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1355, 931, this,
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
        this.addIncludeScript("Potal.xfdl", "lib::comLib.xjs");
        this.registerScript("Potal.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        var xPos,yPos, Xscreen, Yscreen;

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.Intro_onsize(this);
        	this.div_checklist.set_left(this.width - 754); // 724(DIV넓이) + 30(여백)
        	
        	this.gfn_setInitForm(obj, e); //공통
        	if (application.gv_userType == '01') {
        		this.div_quick_wrap.div_quick.btn_quick09.set_visible(true);
        	}
        }

        this.fn_afterFormOnload = function()
        {
        	var ut = application.gv_userType;
        	var today = this.gfn_today('yyyyMMdd');
        	
        	// 협력업체 본사일 때 설문조사 체크
        	if (ut == '01' && application.gv_mbcoType == '1') {
        		// 설문조사 체크 (01/본사)
        		this.surveyCheck();

        		// TRPL_DTL_TPC : 0002, 0003, 0004 농업인생산기업 팝업 (01/본사)
        		var dtlTpc = application.gv_trplDtlTpc;
        		if (dtlTpc == '0002' || dtlTpc == '0003' || dtlTpc == '0004') {
        			this.gfn_popupMsg(
        				"NAHHJOIN", // id
        				"농협하나로앱을 통하여 농협에서의 판매실적이나 재고현황을\n실시간으로 편리하게 확인하실 수 있습니다.\n농협하나로앱 가입화면으로 이동하시겠습니까?", // msg
        				"LINK", // type
        				"https://www.nhhanaro.co.kr/nahh_join.jsp" // action
        			);
        		}
        	}
        	
        	// 신규계약상담 (01, 04, 05, 81)
        	if (ut == '02' || ut == '03') {
        		this.div_content_wrap.div_content.div_help_box.btn_new.set_visible(false);
        	}
        	
        	// 공지사항
        	this.fn_retrieveBlbdOfancMainList();
        	if (ut == '05') {
        		this.div_content_wrap.div_content.div_nhnotice_box.set_visible(false);
        	} else {
        		// 농협공지 (01, 02, 03, 04, 81)
        		this.fn_retrieveNacfOfancMainList();
        	}
        	
        	// 미확인건수 (01, 04)
        	if (ut == '01' || ut == '04') {
        		var dayBefore = this.gfn_minusDate(today, 2);
        		this.div_checklist.Static01.set_text("("+ this.gfn_getFormat(dayBefore, "@@@@-@@-@@")+" ~ "+ this.gfn_getFormat(today, "@@@@-@@-@@")+")");
        		
        		if (ut == "04") {
        			this.div_checklist.btn01.set_visible(false);
        			this.div_checklist.btn02.set_visible(false);
        			this.div_checklist.btn03.set_visible(false);
        			this.div_checklist.btn04.set_visible(false);
        			this.div_checklist.btn05.set_visible(false);
        			this.div_checklist.btn07.set_visible(false);
        			this.div_checklist.Static00.set_visible(false);
        			this.div_checklist.Static03.set_visible(false);
        			this.div_checklist.Static04.set_visible(false);
        			this.div_checklist.Static05.set_visible(false);
        			this.div_checklist.Static06.set_visible(false);
        			this.div_checklist.Static07.set_visible(false);
        			this.div_checklist.Static09.set_visible(false);
        			
        			this.div_checklist.set_width(360);
        			this.div_checklist.set_height(90);
        			this.div_checklist.set_top(270);
        			this.div_checklist.set_left(this.div_checklist.left+110);
        			this.div_checklist.Static08.set_top(56);
        			this.div_checklist.btn06.set_top(51);
        		}
        		
        		this.fn_retrieveUnCnfCnInqCnt();
        	} else {
        		this.div_checklist.set_visible(false);
        	}
        	
        	// 잔액장 확인 (01, 04)
        	if (ut == '01' || ut == '04') {
        		this.fn_retrieveBasNoCheckCount();
        	}
        	
        	// this.fn_retrieveUsrConsent(); // 사용자 정보 제공 동의
        	
        	// 임시팝업
        	/*
        	if (today <= "20211227") {
        		var doNotShow = this.gfn_nullToEmpty(application.getPrivateProfile("elt_211217"));
        		if (doNotShow != "Y") {
        			this.gfn_openPopup("POPUP_TEMP_ELT", "POPUP::POPUP_TEMP.xfdl", {}, "autosize=true,title=true", "fn_popupAfter");
        		}
        	}
        	*/
        }

        /*
         * 자사 판매정보 제공동의 
         */
        this.consentPopup = function()
        {
        	var oArg = {paramMode:"U", dsArg:this.ds_notice};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";    
           	this.gfn_openPopup("popId", "OMG.PT::OMG_DS_SC_4513.xfdl", oArg, sOption, sPopupCallBack);	    
        }

        /*
         * 사용자 만족도 설문조사 (협력업체 해당)
         */
        this.surveyCheck = function()
        {
        	var sSvcID        = "retrievePopupsurvey";
        	var sURL          = "svc::rest/pt/survey/retrievePopupsurvey";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_survey=ds_survey";
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }
        /*
         * 월잔액장 미확인 팝업
         */
        this.basNoCheckPopup = function()
        {
        	var oArg = {searchWord:""};
        	var sOption = "autosize=true,title=false";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("POPUP_BAS_NO_CHECK","PDS.BAS::popup_balanceCheck.xfdl",oArg,sOption,sPopupCallBack);
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/

        /*
         * eSCM 공지사항
         */
        this.fn_retrieveBlbdOfancMainList = function()
        {
        	var sSvcID        = "retrieveBlbdOfancMainList";
        	var sURL          = "svc::rest/pt/blbd/retrieveBlbdOfancMainList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_bbs=ds_bbs";	
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	application.set_usewaitcursor(false);
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        /*
         * 농협 공지사항
         */
        this.fn_retrieveNacfOfancMainList = function()
        {
        	var sSvcID        = "retrieveNacfOfancMainList";
        	var sURL          = "svc::rest/pt/blbd/retrieveNacfOfancMainList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_notice=ds_notice";	
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	application.set_usewaitcursor(false);
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        /*
         * 미확인 건수
         */
        this.fn_retrieveUnCnfCnInqCnt = function() 
        {
        	var today = this.gfn_today('yyyyMMdd');
        	var dayBefore = this.gfn_minusDate(today, 2);
        	var glnCode = application.gv_glnCode;
        	
        	var params = "to=" + today
        					+" from=" + dayBefore
        					+" glnCode2=" + glnCode
        					+" userTPC=" + application.gv_userType;
        	
        	var sSvcID        = "retrieveUnCnfCnInqCnt";
        	var sURL          = "svc::rest/pt/comn/retrieveUnCnfCnInqCnt";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_cnt01=ds_cnt01 ds_cnt02=ds_cnt02 ds_cnt03=ds_cnt03 ds_cnt04=ds_cnt04 ds_cnt05=ds_cnt05 ds_cnt06=ds_cnt06 ds_cnt07=ds_cnt07";
        	var sArgument     = params;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S";
        	
        	application.set_usewaitcursor(false);
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        this.fn_retrieveUsrConsent = function() 
        {
        	var bsnDsc = "sales_price";
        	var glnCode = application.gv_glnCode;
        	
        	var params =  "bsnDsc=" + bsnDsc
        				 + " naTrplC=" + glnCode 
        				 ;
        	
        	var sSvcID        = "retrieveUsrConsentCount";
        	var sURL          = "svc::rest/pt/usrinf/retrieveUsrConsentCount";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_usrConsentCount=ds_usrConsentCount";	
        	var sArgument     = params;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // 
        	
        	application.set_usewaitcursor(false);
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        this.fn_retrieveBasNoCheckCount = function()
        {
        	var trplC = application.gv_glnCode; // 로그인 사업장코드
        	var toDay = this.gfn_today("yyyyMMdd");	
        	var oneMonthAgo = this.gfn_minusMonth(toDay, 1);
        	
        	var bas_ym = oneMonthAgo.substr(0, 6);
        	var bas_ym2 = oneMonthAgo.substr(0, 6);
        	var params = "bas_ym=" + bas_ym +
        	                " bas_ym2=" + bas_ym2 +
        					" trplC=" + trplC;
        	
        	var sSvcID        = "retrieveBasNoCheckCount";
        	var sURL          = "svc::rest/tx/retrieveBasNoCheckCount";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_bas_svc=ds_bas_svc";	
        	var sArgument     = params;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
         	if (ErrorCode > -1) {
        		application.set_usewaitcursor(true);
        		
        		if (svcID == "retrieveBlbdOfancMainList") {
        		} else if (svcID == "retrieveNacfOfancMainList") {
        		} else if (svcID == "retrieveUnCnfCnInqCnt") {
        			if (application.gv_userType != '04') {
        				this.div_checklist.btn01.set_text(this.ds_cnt01.getColumn(0, "CNT"));
        				this.div_checklist.btn02.set_text(this.ds_cnt02.getColumn(0, "CNT"));
        				this.div_checklist.btn03.set_text(this.ds_cnt03.getColumn(0, "CNT"));
        				this.div_checklist.btn04.set_text(this.ds_cnt04.getColumn(0, "CNT"));
        				this.div_checklist.btn05.set_text(this.ds_cnt05.getColumn(0, "CNT"));
        				this.div_checklist.btn06.set_text(this.ds_cnt06.getColumn(0, "CNT"));
        				this.div_checklist.btn07.set_text(this.ds_cnt07.getColumn(0, "CNT"));
        			} else if (application.gv_userType == '04') {
        				this.div_checklist.btn06.set_text(this.ds_cnt06.getColumn(0, "CNT"));
        			}
        		} else if (svcID == "retrieveUsrConsentCount") {
        			var CONSENT_COUNT = this.ds_usrConsentCount.getColumn(0,"CONSENT_COUNT");
        			if (application.gv_userType == '01' && application.gv_mbcoType == '1' && CONSENT_COUNT == '0') {
        				this.consentPopup();
        			}
        		} else if (svcID == "retrievePopupsurvey") {
        			this.fn_surveyProcess();
        		} else if (svcID == "retrieveBasNoCheckCount") {
        			var noChkCnt = this.ds_bas_svc.getColumn(0, "CNT");
        			    
        			// 미확인 건수가 있을 경우 팝업 띄운다. 
        			if (noChkCnt * 1 > 0) {
        				this.basNoCheckPopup();
        			}
        		}
         	}
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	if (this.gfn_isNull(strVal)) {
        		return;
        	}
        	if (strId == "POPUP_BAS_NO_CHECK") {
        		var moveToMenu = "02005002"; // 월잔액장
        		// var moveToMenu = "12006001"; // 채권채무발행관리
        		
        		if (application.gv_userType == '04') {
        			moveToMenu = "42006001"; // 채권채무발행관리(세금계산서전용)
        			strVal += "|" + application.gv_glnCode;
        		}
        		this.fn_openMenu(moveToMenu, strVal);
        	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.button_onclick = function(obj,e)
        {
        	if (obj.name == "btn_quick01") {
        		this.gfn_openIntroMenu(10100000);
        	} else if (obj.name == "btn_quick02") {
        		this.gfn_openIntroMenu(10200000);
        	} else if (obj.name == "btn_quick03") {
        		this.gfn_openIntroMenu(30100000);
        	} else if (obj.name == "btn_quick04") {
        		this.gfn_openIntroMenu(40100000);
        	} else if (obj.name == "btn_quick05") {
        		this.gfn_openIntroMenu(10300000);
        	} else if (obj.name == "btn_quick06") {
        		this.gfn_openIntroMenu(10400000);
        // 	} else if (obj.name == "btn_quick07") {
        // 		this.gfn_openIntroMenu(10500000);
        	} else if (obj.name == "btn_quick08") {
        		this.gfn_openIntroMenu(10600000);
        	} else if (obj.name == "btn_quick09") {
        		if (application.gv_userType == '01') {
        			this.fn_openMenu("16008002"); //26007001
        		}
        	} else if (obj.name == "btn_more") {
        		if (application.gv_userType == '01') {
        			this.fn_openMenu("16004003");
        		} else if (application.gv_userType == '02') {
        			this.fn_openMenu("26004003");
        		} else if (application.gv_userType == '03') {
        			this.fn_openMenu("36004003");
        		}
        	} else if (obj.name == "btn_NHmore") {
        		if (application.gv_userType == '01') {
        			this.fn_openMenu("16004001");
        		} else if (application.gv_userType == '02') {
        			this.fn_openMenu("26004001");
        		} else if (application.gv_userType == '03') {
        			this.fn_openMenu("36004001");
        		}
        	} else if (obj.name == "btn_remote") {
        		window.open("http://939.co.kr/nhescm/");
        	} else if (obj.name == "btn_sms") {
        		this.fn_openSMS();
        	}
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
        	this.gfn_OpenMenuId("98010000", "", type);
        }

        /* 관련사이트 링크 */
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

        /**
         * 설문조사 데이터 처리
         */
        this.fn_surveyProcess = function()
        {
            var today = this.gfn_getClientTime("yyyyMMdd");
                
        	for (var i = 0; i < this.ds_survey.rowcount; i++) {
        	    var SRV_SEQ = this.ds_survey.getColumn(i, "SRV_SEQ");
        	    var param = {
        			TITLE: this.ds_survey.getColumn(i, "TITLE"),
        			SUBTITLE: this.ds_survey.getColumn(i, "SUBTITLE"),
        			INTRO: this.ds_survey.getColumn(i, "INTRO"),
        			SRV_SEQ: SRV_SEQ
        	    };
        	    
        	    var POPUP_WIDTH = 800;
        		var PATH = "";
        		
        		if (application.gv_serverType != "ADMIN") { //로컬,개발
        			if(SRV_SEQ == "8") {
        				PATH = "OMG.MG::OMG_DS_SC_8331.xfdl";
        				POPUP_WIDTH = 800;
        			} else if(SRV_SEQ == "9") {
        				PATH = "OMG.MG::OMG_DS_SC_8333.xfdl";
        				POPUP_WIDTH = 1150;
        			}
        		} else { //운영
        			if(SRV_SEQ == "10") {
        				PATH = "OMG.MG::OMG_DS_SC_8333.xfdl";
        				POPUP_WIDTH = 1150;
        			} else {
        				PATH = "OMG.MG::OMG_DS_SC_8331.xfdl";
        				POPUP_WIDTH = 800;
        			}
        		}
        		
        		var expire = application.getPrivateProfile(SRV_SEQ); //this.framename
        		if (expire == undefined) {
        			application.setPrivateProfile(SRV_SEQ, "N");
        			expire = "N";
        		}
        		if (expire == "N" || expire < today) {
        			//application.open("SPOPUP"+SRV_SEQ, PATH, this, param, "showtitlebar=false showstatusbar=true autosize=false resizable=true", (40*i), (40*i), POPUP_WIDTH, 740);
        			application.open("SPOPUP"+SRV_SEQ, PATH, this, param, "showtitlebar=false showstatusbar=true autosize=false resizable=false", (40*i), (40*i), POPUP_WIDTH, 740);
        		}
        	}
        }

        /* 미확인건수 클릭(협력업체, 세금계산서전용(역발행) */
        this.common_cnt_onclick = function(obj,e)
        {
        	var moveToMenu = "";
        	var docName = "";
        	
        	if (obj.name == "btn01") {
        		moveToMenu = "01001002"; //수주미확인건수:수주내역조회
        	} else if (obj.name == "btn02") {
        		moveToMenu = "01001002"; //배송예정서:수주내역조회
        	} else if (obj.name == "btn03") {
        		docName = "CONRET";
        		moveToMenu = "01005001"; //반품미확인:검수실적_전표별
        	} else if (obj.name == "btn04") {
        		moveToMenu = "01006002"; //반품확인서미작성:반품입고확인등록
        	} else if (obj.name == "btn05") {
        		docName = "CONADV";
        		moveToMenu = "01005001"; //검수미확인건수:검수실적_전표별
        	} else if (obj.name == "btn06") {
        		//세금계산서역발행:매출세금계산서(역발행)
        		if (application.gv_userType == '01') {
        			moveToMenu = "12002002";
        		} else {
        			moveToMenu = "42002002";
        		}
        	} else if (obj.name == "btn07") {
        		moveToMenu = "01003017"; //마트장비 배송예정서
        	}
        	
        	this.fn_openMenu(moveToMenu, docName);
        }

        this.grd_oncellclick = function(obj,e)
        {
        	if (obj.name == "grd_notice") {
        		this.fn_openNhNotice(e.row);
        	} else if (obj.name == "grd_bbs") {
        		this.fn_openBbsNotice(e.row);
        	}
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_openSMS = function()
        {
        	var oArg = {};
        	var sOption = "autosize=true,title=true,modeless=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("POP_SMS","POPUP::POPUP_SMS.xfdl",oArg,sOption,sPopupCallBack);	
        }

        this.fn_openNhNotice = function(nRow)
        {
        	var oArg = {noticeSeq:this.ds_notice.getColumn(nRow, "BBRD_SQNO")};
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("OMG_DS_SC_4511","OMG.PT::OMG_DS_SC_4511.xfdl",oArg,sOption,sPopupCallBack);	
        }

        this.fn_openBbsNotice = function(nRow)
        {
        	var oArg = {blbdId:this.ds_bbs.getColumn(nRow, "BLBD_ID"), bbrdId:this.ds_bbs.getColumn(nRow, "BBRD_ID")};
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("OMG_DS_SC_4111","OMG.PT::OMG_DS_SC_4111.xfdl",oArg,sOption,sPopupCallBack);	
        }

        this.div_checklist_ondragmove = function(obj,e)
        {
        	Xscreen = e.screenX;
        	Yscreen = e.screenY;
        }

        this.div_checklist_ondrag = function(obj,e)
        {
        	xPos = obj.left - e.screenX;
        	yPos = obj.top - e.screenY;

        	this.setTimer(1,5);
        	return true;
        }

        this.Intro_ontimer = function(obj,e)
        {
        	this.div_checklist.move(Xscreen + xPos, Yscreen + yPos);
        }

        this.div_checklist_ondrop = function(obj,e)
        {
        	this.killTimer(1);
        }

        this.div_checklist_btn_popupClose_onclick = function(obj,e)
        {
        	this.div_checklist.set_visible(false);
        }

        this.common_onclick = function(obj,e)
        {
        	if (obj.name == "Button03") {
        		this.fn_openMenu("22001001");
        	}
        }

        this.fn_openMenu = function(menuId,paObjList) //26004003
        {
        	var sMenuId = menuId.substr(0,2);//26
        	application.afrm_HFrameSet0.set_separatesize("190,*,0");
        	application.afrm_VFrameSet1.set_separatesize("32,*");
        	application.afrm_LeftFrame.form.ds_menu.filter("MENU_LEVEL >= 1 && MENU_ID.substr(0,2)=='"+sMenuId+"' && DISPLAY_YN!='N'");
        	
        	var nRow = application.afrm_LeftFrame.form.ds_menu.findRow("MENU_ID",menuId);
        	var objGrid = application.afrm_LeftFrame.form.div_menu.grd_menu;
        	var nTopRow = application.gds_menu.findRow("MENU_ID", sMenuId+"000000");
        	var sLFTitleText = application.gds_menu.getColumn(nTopRow,"MENU_NAME");
        	
        	application.afrm_LeftFrame.form.btn_menuList.set_text(sLFTitleText);
        	
        	//중메뉴의 첫번째 소메뉴 선택
        	var nRow2 = application.afrm_LeftFrame.form.ds_menu.findRow("MENU_ID",menuId.substr(0,5) + '000');
        	objGrid.setTreeStatus(objGrid.getTreeRow(nRow2),true);//26004000
        	application.afrm_LeftFrame.form.ds_menu.set_rowposition(nRow);
        	
        	var sMId = application.afrm_LeftFrame.form.ds_menu.getColumn(nRow,"MENU_ID");
        	
        	//해당Grid visible처리
        	application.afrm_LeftFrame.form.div_menu.grd_menu.set_visible(true);
        	application.afrm_LeftFrame.form.div_menu.grd_myInfo.set_visible(false);
        	
        	this.gfn_OpenMenuId(sMId, paObjList);
        }

        /* 화면리사이즈에 따른 레이아웃 유지 */
        var RESIZE_DIV = [ /* 가운데 정렬할 객체 */
        	 this.div_mainbg.div_main_visual
        	,this.div_footer
        	,this.div_quick_wrap.div_quick
        // 	,this.div_content_wrap.div_content // 별도 처리
        	,this.div_related_wrap.div_related
        ];
        var RESIZE_WRAP = [ /* 정렬할 객체의 부모 레이아웃(기본 폭 유지) */
        	 this.div_mainbg
        	,this.div_footer_bg
        	,this.div_quick_wrap
         	,this.div_content_wrap
        	,this.div_related_wrap
        ];

        this.Intro_onsize = function(obj,e)
        {
        	var BASE_WIDTH = 1010; // 기본사이즈(넓이)
        	var BASE_HEIGHT = 931; // 기본사이즈(높이)
        	var CONT_WIDTH = BASE_WIDTH + 345;
        	var diffW = 0, diffH = 0, diffCW = 0;
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
        	
        	if (obj.width > CONT_WIDTH) {
        		diffCW = (obj.width - CONT_WIDTH) / 2;
        	} else {
        		diffCW = 0;
        	}
        	
        	// 기본 높이(BASE_HEIGHT)에 따른 하단(Footer) 위치 조절
        	this.div_related_wrap.set_top(730+diffH);
        	this.div_footer.set_top(781+diffH);
        	this.div_footer_bg.set_top(781+diffH);
        	
        	// 기본 넓이(BASE_WIDTH) 보다 넓을 때, 화면 가운데 정렬
        	for (var i=0; i<RESIZE_DIV.length; i++) {
        		RESIZE_DIV[i].set_left(diffW);
        	}
        	this.div_content_wrap.div_content.set_left(diffCW); // 서비스 영역 별도 처리(로그인 전 화면과 넓이가 다름)
        	
        	// 서비스 넓이(CONT_WIDTH)보다 좁을 때, 최소 넓이 유지(스크롤)
        	for (var i=0; i<RESIZE_WRAP.length; i++) {
        		if (diffCW == 0) {
        			RESIZE_WRAP[i].set_width(CONT_WIDTH);
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
            this.addEventHandler("ontimer", this.Intro_ontimer, this);
            this.addEventHandler("onsize", this.Intro_onsize, this);
            this.div_quick_wrap.div_quick.btn_quick01.addEventHandler("onclick", this.button_onclick, this);
            this.div_quick_wrap.div_quick.btn_quick02.addEventHandler("onclick", this.button_onclick, this);
            this.div_quick_wrap.div_quick.btn_quick03.addEventHandler("onclick", this.button_onclick, this);
            this.div_quick_wrap.div_quick.btn_quick04.addEventHandler("onclick", this.button_onclick, this);
            this.div_quick_wrap.div_quick.btn_quick05.addEventHandler("onclick", this.button_onclick, this);
            this.div_quick_wrap.div_quick.btn_quick06.addEventHandler("onclick", this.button_onclick, this);
            this.div_quick_wrap.div_quick.btn_quick08.addEventHandler("onclick", this.button_onclick, this);
            this.div_quick_wrap.div_quick.btn_quick09.addEventHandler("onclick", this.button_onclick, this);
            this.div_related_wrap.div_related.img_related01.addEventHandler("onclick", this.img_related_onclick, this);
            this.div_related_wrap.div_related.img_related03.addEventHandler("onclick", this.img_related_onclick, this);
            this.div_related_wrap.div_related.img_related02.addEventHandler("onclick", this.img_related_onclick, this);
            this.div_related_wrap.div_related.img_related04.addEventHandler("onclick", this.img_related_onclick, this);
            this.div_content_wrap.div_content.div_notice_box.grd_bbs.addEventHandler("oncellclick", this.grd_oncellclick, this);
            this.div_content_wrap.div_content.div_notice_box.btn_more.addEventHandler("onclick", this.button_onclick, this);
            this.div_content_wrap.div_content.div_help_box.btn_remote.addEventHandler("onclick", this.button_onclick, this);
            this.div_content_wrap.div_content.div_help_box.btn_new.addEventHandler("onclick", this.btn_new_onclick, this);
            this.div_content_wrap.div_content.div_help_box.btn_sms.addEventHandler("onclick", this.button_onclick, this);
            this.div_content_wrap.div_content.div_nhnotice_box.btn_NHmore.addEventHandler("onclick", this.button_onclick, this);
            this.div_content_wrap.div_content.div_nhnotice_box.grd_notice.addEventHandler("oncellclick", this.grd_oncellclick, this);
            this.div_checklist.addEventHandler("ondrag", this.div_checklist_ondrag, this);
            this.div_checklist.addEventHandler("ondragmove", this.div_checklist_ondragmove, this);
            this.div_checklist.addEventHandler("ondrop", this.div_checklist_ondrop, this);
            this.div_checklist.btn03.addEventHandler("onclick", this.common_cnt_onclick, this);
            this.div_checklist.btn02.addEventHandler("onclick", this.common_cnt_onclick, this);
            this.div_checklist.btn06.addEventHandler("onclick", this.common_cnt_onclick, this);
            this.div_checklist.btn04.addEventHandler("onclick", this.common_cnt_onclick, this);
            this.div_checklist.btn05.addEventHandler("onclick", this.common_cnt_onclick, this);
            this.div_checklist.btn01.addEventHandler("onclick", this.common_cnt_onclick, this);
            this.div_checklist.btn07.addEventHandler("onclick", this.common_cnt_onclick, this);
            this.div_checklist.btn_popupClose.addEventHandler("onclick", this.div_checklist_btn_popupClose_onclick, this);

        };

        this.loadIncludeScript("Potal.xfdl");
        this.loadPreloadList();
       
    };
}
)();
