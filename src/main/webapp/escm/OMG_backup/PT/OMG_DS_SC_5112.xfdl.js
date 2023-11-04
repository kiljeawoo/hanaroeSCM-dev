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
                this.set_name("pattern_01");
                this.set_titletext("사업장 회원가입");
                this.set_scrollbars("autovert");
                this._setFormPosition(0,0,750,549);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_hpNo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"30\" value=\"\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"30\" value=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_certNum", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CERT_NUM\" type=\"STRING\" size=\"30\" value=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_userInfo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"USR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTH\" type=\"STRING\" size=\"256\"/><Column id=\"SEX_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"HP1\" type=\"STRING\" size=\"256\"/><Column id=\"HP2\" type=\"STRING\" size=\"256\"/><Column id=\"HP3\" type=\"STRING\" size=\"256\"/><Column id=\"USR_EMAIL01\" type=\"STRING\" size=\"256\"/><Column id=\"USR_EMAIL02\" type=\"STRING\" size=\"256\"/><Column id=\"MB_PW1\" type=\"STRING\" size=\"256\"/><Column id=\"MB_PW2\" type=\"STRING\" size=\"256\"/><Column id=\"USR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"CHRG_BSNNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_svcAuth", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" type=\"STRING\" size=\"128\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_officeInfo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BZNO1\" type=\"STRING\" size=\"30\"/><Column id=\"BZNO2\" type=\"STRING\" size=\"30\"/><Column id=\"BZNO3\" type=\"STRING\" size=\"30\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"30\"/><Column id=\"COMP_TPC\" type=\"STRING\" size=\"30\"/><Column id=\"MB_ID\" type=\"STRING\" size=\"30\"/><Column id=\"MB_PW\" type=\"STRING\" size=\"256\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"30\"/><Column id=\"USR_TELNO\" type=\"STRING\" size=\"30\"/><Column id=\"USR_EMAIL01\" type=\"STRING\" size=\"30\"/><Column id=\"USR_EMAIL02\" type=\"STRING\" size=\"30\"/><Column id=\"SMS_RMS_YN\" type=\"STRING\" size=\"30\"/><Column id=\"EMAIL_RMS_YN\" type=\"STRING\" size=\"30\"/><Column id=\"USR_HP\" type=\"STRING\" size=\"30\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"30\"/><Column id=\"REPMNM\" type=\"STRING\" size=\"30\"/><Column id=\"DONGUP\" type=\"STRING\" size=\"30\"/><Column id=\"DONGBW\" type=\"STRING\" size=\"30\"/><Column id=\"FZIP\" type=\"STRING\" size=\"30\"/><Column id=\"RZIP\" type=\"STRING\" size=\"30\"/><Column id=\"TEL1\" type=\"STRING\" size=\"30\"/><Column id=\"TEL2\" type=\"STRING\" size=\"30\"/><Column id=\"TEL3\" type=\"STRING\" size=\"30\"/><Column id=\"HP1\" type=\"STRING\" size=\"30\"/><Column id=\"HP2\" type=\"STRING\" size=\"30\"/><Column id=\"HP3\" type=\"STRING\" size=\"30\"/><Column id=\"BIRTH\" type=\"STRING\" size=\"30\"/><Column id=\"SEX_DSC\" type=\"STRING\" size=\"30\"/><Column id=\"MB_CV_DSC\" type=\"STRING\" size=\"30\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_naTrplC", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_taxCnt", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"TAX_AUTH_CNT\" type=\"STRING\" size=\"30\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj = new Static("Static90", "absolute", "18", "60", "717", "20", null, null, this);
            obj.set_taborder("0");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static86", "absolute", "3", "0", "737", "15", null, null, this);
            obj.set_taborder("1");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static87", "absolute", "728", "1", "17", "581", null, null, this);
            obj.set_taborder("2");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "777", "16", "711", "475", null, null, this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.style.set_background("white");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new TextArea("txa_arr01", "absolute", "17", "127", "677", "117", null, null, this.Div01);
            obj.set_taborder("26");
            obj.set_tabstop("false");
            obj.set_scrollbars("autovert");
            obj.set_wordwrap("char");
            obj.set_readonly("true");
            obj.style.set_padding("5 5 5 5");
            this.Div01.addChild(obj.name, obj);
            obj = new CheckBox("chk_agr01", "absolute", "675", "254", "19", "21", null, null, this.Div01);
            obj.set_taborder("27");
            this.Div01.addChild(obj.name, obj);
            obj = new CheckBox("chk_agr02", "absolute", "675", "446", "19", "21", null, null, this.Div01);
            obj.set_taborder("29");
            this.Div01.addChild(obj.name, obj);
            obj = new Div("Div02", "absolute", "0", "0", "705", "43", null, null, this.Div01);
            obj.set_taborder("30");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "9", "107", "21", null, null, this.Div01.Div02);
            obj.set_taborder("62");
            obj.set_text("약관동의");
            obj.style.set_font("bold 9 arial");
            this.Div01.Div02.addChild(obj.name, obj);
            obj = new Button("btn_notAgree", "absolute", "590", "9", "65", "21", null, null, this.Div01.Div02);
            obj.set_taborder("63");
            obj.set_text("동의안함");
            obj.set_cssclass("btn_WF_CRUD");
            this.Div01.Div02.addChild(obj.name, obj);
            obj = new Button("btn_agree", "absolute", "657", "9", "41", "21", null, null, this.Div01.Div02);
            obj.set_taborder("64");
            obj.set_text("동의");
            obj.set_cssclass("btn_WF_CRUD");
            this.Div01.Div02.addChild(obj.name, obj);
            obj = new TextArea("argee02", "absolute", "17", "64", null, "36", "17", null, this.Div01);
            obj.set_taborder("31");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "91", "66", "456", "30", null, null, this.Div01);
            obj.set_taborder("32");
            obj.set_text("Static00");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);
            obj = new CheckBox("chk_allAgree", "absolute", "561", "72", "46", "21", null, null, this.Div01);
            obj.set_taborder("33");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "17", "106", "677", "21", null, null, this.Div01);
            obj.set_taborder("34");
            obj.set_text("Static01");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "423", "254", "252", "21", null, null, this.Div01);
            obj.set_taborder("35");
            obj.set_text("하나로eSCM 서비스 이용약관에 동의합니다.");
            obj.set_usedecorate("true");
            obj.style.set_color("red");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "17", "275", "677", "21", null, null, this.Div01);
            obj.set_taborder("36");
            obj.set_text("Static03");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "351", "446", "321", "21", null, null, this.Div01);
            obj.set_taborder("37");
            obj.set_text("하나로eSCM 서비스 개인정보 수집 및 이용에 동의합니다.");
            obj.set_usedecorate("true");
            obj.style.set_color("red");
            this.Div01.addChild(obj.name, obj);
            obj = new TextArea("txa_arr02", "absolute", "2.25%", "296", "677", "148", null, null, this.Div01);
            obj.set_taborder("38");
            obj.set_tabstop("false");
            obj.set_scrollbars("autovert");
            obj.set_wordwrap("char");
            obj.set_readonly("true");
            obj.style.set_padding("5 5 5 5");
            obj.style.set_font("12 Gulim");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("div_hiddenArea", "absolute", "4", "557", "331", "43", null, null, this);
            obj.set_taborder("4");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Edit("edt_USR_TPC", "absolute", "150", "9", "138", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("32");
            obj.set_value("03");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_finalMbId", "absolute", "10", "9", "138", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("33");
            this.div_hiddenArea.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "3", "273", "717", "20", null, null, this);
            obj.set_taborder("5");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("Div05", "absolute", "17", "16", "711", "530", null, null, this);
            obj.set_taborder("7");
            obj.style.set_background("transparent");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "0", "143", "711", "29", null, null, this.Div05);
            obj.set_taborder("83");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static103", "absolute", "0", "199", "711", "58", null, null, this.Div05);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static101", "absolute", "0", "171", "711", "29", null, null, this.Div05);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static95", "absolute", "0", "115", "711", "29", null, null, this.Div05);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Div("Div02", "absolute", "0", "0", "711", "43", null, null, this.Div05);
            obj.set_taborder("19");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "9", "143", "21", null, null, this.Div05.Div02);
            obj.set_taborder("64");
            obj.set_text("사업장 회원가입");
            obj.style.set_font("bold 9 arial");
            this.Div05.Div02.addChild(obj.name, obj);
            obj = new Button("btn_save", "absolute", "635", "9", "65", "21", null, null, this.Div05.Div02);
            obj.set_taborder("65");
            obj.set_text("가입완료");
            obj.set_cssclass("btn_WF_CRUD");
            this.Div05.Div02.addChild(obj.name, obj);
            obj = new Button("btn_prev", "absolute", "564", "9", "65", "21", null, null, this.Div05.Div02);
            obj.set_taborder("66");
            obj.set_text("이전화면");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.Div05.Div02.addChild(obj.name, obj);
            obj = new Static("Static89", "absolute", "0", "63", "135", "21", null, null, this.Div05);
            obj.set_taborder("20");
            obj.set_text("사업장 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static94", "absolute", "0", "115", "120", "29", null, null, this.Div05);
            obj.set_taborder("21");
            obj.set_text("사업장명");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static100", "absolute", "0", "171", "120", "29", null, null, this.Div05);
            obj.set_taborder("22");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static102", "absolute", "0", "199", "120", "58", null, null, this.Div05);
            obj.set_taborder("23");
            obj.set_text("회사주소");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_RZIP", "absolute", "167", "175", "35", "21", null, null, this.Div05);
            obj.set_taborder("24");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static133", "absolute", "160", "174", "9", "21", null, null, this.Div05);
            obj.set_taborder("25");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_FZIP", "absolute", "123", "175", "35", "21", null, null, this.Div05);
            obj.set_taborder("26");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_DONGBW", "absolute", "123", "205", "583", "21", null, null, this.Div05);
            obj.set_taborder("27");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_DONGUP", "absolute", "123", "230", "583", "21", null, null, this.Div05);
            obj.set_taborder("28");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "275", "135", "21", null, null, this.Div05);
            obj.set_taborder("29");
            obj.set_text("회원 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static107", "absolute", "0", "297", "711", "29", null, null, this.Div05);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "325", "711", "29", null, null, this.Div05);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static113", "absolute", "0", "381", "711", "29", null, null, this.Div05);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static115", "absolute", "0", "409", "711", "29", null, null, this.Div05);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static120", "absolute", "0", "437", "711", "58", null, null, this.Div05);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static114", "absolute", "336", "115", "135", "29", null, null, this.Div05);
            obj.set_taborder("35");
            obj.set_text("대표전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0", "381", "120", "29", null, null, this.Div05);
            obj.set_taborder("36");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static109", "absolute", "0", "325", "120", "29", null, null, this.Div05);
            obj.set_taborder("37");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static106", "absolute", "0", "297", "120", "29", null, null, this.Div05);
            obj.set_taborder("38");
            obj.set_text("회원ID(사번)");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_TEL01", "absolute", "531", "119", "48", "21", null, null, this.Div05);
            obj.set_taborder("41");
            obj.set_inputtype("number");
            obj.set_readonly("true");
            obj.set_maxlength("4");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_TEL02", "absolute", "588", "119", "48", "21", null, null, this.Div05);
            obj.set_taborder("42");
            obj.set_inputtype("number");
            obj.set_readonly("true");
            obj.set_maxlength("4");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_USR_EMAIL01", "absolute", "123", "385", "122", "21", null, null, this.Div05);
            obj.set_taborder("12");
            obj.set_maxlength("25");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_MB_PW01", "absolute", "123", "329", "183", "21", null, null, this.Div05);
            obj.set_taborder("8");
            obj.set_password("true");
            obj.set_maxlength("16");
            obj.set_lengthunit("utf8");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_MB_ID", "absolute", "123", "301", "122", "21", null, null, this.Div05);
            obj.set_taborder("6");
            obj.set_inputtype("number,english");
            obj.set_maxlength("9");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_USR_EMAIL02", "absolute", "264", "385", "122", "21", null, null, this.Div05);
            obj.set_taborder("13");
            obj.set_maxlength("25");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static134", "absolute", "250", "385", "13", "21", null, null, this.Div05);
            obj.set_taborder("43");
            obj.set_text("@");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "336", "297", "135", "29", null, null, this.Div05);
            obj.set_taborder("44");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static111", "absolute", "336", "325", "135", "29", null, null, this.Div05);
            obj.set_taborder("45");
            obj.set_text("비밀번호 확인");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_USR_NM", "absolute", "474", "301", "180", "21", null, null, this.Div05);
            obj.set_taborder("7");
            obj.set_readonly("false");
            obj.set_maxlength("16");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_MB_PW02", "absolute", "474", "329", "180", "21", null, null, this.Div05);
            obj.set_taborder("9");
            obj.set_password("true");
            obj.set_maxlength("16");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static116", "absolute", "0", "409", "120", "29", null, null, this.Div05);
            obj.set_taborder("46");
            obj.set_text("휴대전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Combo("cbo_HP", "absolute", "123", "413", "51", "21", null, null, this.Div05);
            this.Div05.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj.set_innerdataset("ds_hpNo");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj = new Static("Static125", "absolute", "174", "413", "9", "21", null, null, this.Div05);
            obj.set_taborder("47");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_HP01", "absolute", "183", "413", "48", "21", null, null, this.Div05);
            obj.set_taborder("15");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static126", "absolute", "231", "413", "9", "21", null, null, this.Div05);
            obj.set_taborder("48");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_HP02", "absolute", "240", "413", "48", "21", null, null, this.Div05);
            obj.set_taborder("16");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "522", "119", "9", "21", null, null, this.Div05);
            obj.set_taborder("49");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "579", "119", "9", "21", null, null, this.Div05);
            obj.set_taborder("50");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static119", "absolute", "0", "437", "120", "58", null, null, this.Div05);
            obj.set_taborder("51");
            obj.set_text("회원권한");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_CLNTNM", "absolute", "123", "119", "183", "21", null, null, this.Div05);
            obj.set_taborder("56");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "0", "353", "711", "29", null, null, this.Div05);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "0", "353", "120", "29", null, null, this.Div05);
            obj.set_taborder("58");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "336", "353", "135", "29", null, null, this.Div05);
            obj.set_taborder("59");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Radio("rdo_SEX_DSC", "absolute", "477", "358", "183", "21", null, null, this.Div05);
            this.Div05.addChild(obj.name, obj);
            var rdo_SEX_DSC_innerdataset = new Dataset("rdo_SEX_DSC_innerdataset", this.Div05.rdo_SEX_DSC);
            rdo_SEX_DSC_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">남</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">여</Col></Row></Rows>");
            obj.set_innerdataset(rdo_SEX_DSC_innerdataset);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj = new CheckBox("chk_WEBHARD_AUTH", "absolute", "125", "442", "173", "21", null, null, this.Div05);
            obj.set_taborder("60");
            obj.set_text("웹하드, 컨설팅, 마트장비");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_readonly("true");
            obj.set_value("Y");
            this.Div05.addChild(obj.name, obj);
            obj = new CheckBox("chk_CONTRACT_AUTH", "absolute", "307", "442", "90", "21", null, null, this.Div05);
            obj.set_taborder("61");
            obj.set_text("전자계약");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.Div05.addChild(obj.name, obj);
            obj = new CheckBox("chk_BUSINESS_TALK_AUTH", "absolute", "397", "442", "90", "21", null, null, this.Div05);
            obj.set_taborder("62");
            obj.set_text("계약상담");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.Div05.addChild(obj.name, obj);
            obj = new Calendar("edt_BIRTH", "absolute", "123", "357", "110", "21", null, null, this.Div05);
            this.Div05.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new CheckBox("chk_TAX_AUTH", "absolute", "487", "442", "90", "21", null, null, this.Div05);
            obj.set_taborder("63");
            obj.set_text("세금계산서");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_TEL00", "absolute", "474", "119", "48", "21", null, null, this.Div05);
            obj.set_taborder("64");
            obj.set_inputtype("number");
            obj.set_readonly("true");
            obj.set_maxlength("4");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "0", "87", "711", "29", null, null, this.Div05);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "0", "87", "120", "29", null, null, this.Div05);
            obj.set_taborder("66");
            obj.set_text("사업장코드");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "336", "87", "135", "29", null, null, this.Div05);
            obj.set_taborder("67");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "509", "91", "9", "21", null, null, this.Div05);
            obj.set_taborder("68");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_BZNO02", "absolute", "518", "91", "30", "21", null, null, this.Div05);
            obj.set_taborder("3");
            obj.set_maxlength("2");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_tabstop("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "548", "91", "9", "21", null, null, this.Div05);
            obj.set_taborder("69");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_BZNO01", "absolute", "474", "91", "35", "21", null, null, this.Div05);
            obj.set_taborder("1");
            obj.set_maxlength("3");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_tabstop("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_BZNO03", "absolute", "557", "91", "65", "21", null, null, this.Div05);
            obj.set_taborder("4");
            obj.set_maxlength("5");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_tabstop("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Button("btn_search", "absolute", "262", "64", "41", "21", null, null, this.Div05);
            obj.set_taborder("70");
            obj.set_text("조회");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Button("btn_checkMbIdDup", "absolute", "248", "301", "65", "21", null, null, this.Div05);
            obj.set_taborder("71");
            obj.set_text("중복확인");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "0", "494", "711", "29", null, null, this.Div05);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "494", "120", "29", null, null, this.Div05);
            obj.set_taborder("72");
            obj.set_text("담당업무");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_CHRG_BSNNM", "absolute", "123", "498", "583", "21", null, null, this.Div05);
            obj.set_taborder("73");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("76");
            this.Div05.addChild(obj.name, obj);
            obj = new CheckBox("chk_PDA_AUTH", "absolute", "590", "442", "90", "21", null, null, this.Div05);
            obj.set_taborder("77");
            obj.set_text("PDA 검수");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_NA_TRPL_C", "absolute", "123", "91", "122", "21", null, null, this.Div05);
            obj.set_taborder("0");
            obj.set_inputtype("number");
            obj.set_maxlength("13");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.Div05.addChild(obj.name, obj);
            obj = new CheckBox("chk_PRICE", "absolute", "125", "469", "90", "21", null, null, this.Div05);
            obj.set_taborder("78");
            obj.set_text("모바일앱");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_DEPT_ID", "absolute", "123", "147", "60", "21", null, null, this.Div05);
            obj.set_taborder("79");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Button("btn_search_bzplc", "absolute", "249", "91", "52", "21", null, null, this.Div05);
            obj.set_taborder("80");
            obj.set_cssclass("btn_WF_Searchbtn");
            obj.style.set_imagealign("lefttext");
            obj.set_text(" 선택");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "0", "143", "120", "29", null, null, this.Div05);
            obj.set_taborder("81");
            obj.set_text("사무소정보");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_DEPT_NAME", "absolute", "187", "147", "183", "21", null, null, this.Div05);
            obj.set_taborder("82");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 705, 43, this.Div01.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("30");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.Div01.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 711, 475, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.set_text("Div01");
            		p.style.set_background("white");
            		p.set_visible("false");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 331, 43, this.div_hiddenArea,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_visible("false");

            	}
            );
            this.div_hiddenArea.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 711, 43, this.Div05.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("19");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.Div05.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 711, 1139, this.Div05,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("7");
            		p.style.set_background("transparent");
            		p.set_visible("false");

            	}
            );
            this.Div05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 750, 549, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("사업장 회원가입");
            		p.set_scrollbars("autovert");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item4","Div05.edt_BZNO02","value","ds_officeInfo","BZNO2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Div05.edt_BZNO01","value","ds_officeInfo","BZNO1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Div05.edt_BZNO03","value","ds_officeInfo","BZNO3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div05.edt_CLNTNM","value","ds_officeInfo","CLNTNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Div05.edt_TEL00","value","ds_officeInfo","TEL1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Div05.edt_TEL01","value","ds_officeInfo","TEL2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Div05.edt_TEL02","value","ds_officeInfo","TEL3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Div05.edt_FZIP","value","ds_officeInfo","FZIP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Div05.edt_RZIP","value","ds_officeInfo","RZIP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Div05.edt_DONGBW","value","ds_officeInfo","DONGUP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Div05.edt_DONGUP","value","ds_officeInfo","DONGBW");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Div05.edt_MB_ID","value","ds_userInfo","MB_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","Div05.edt_USR_NM","value","ds_userInfo","USR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","Div05.edt_MB_PW01","value","ds_userInfo","MB_PW1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","Div05.edt_BIRTH","value","ds_userInfo","BIRTH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","Div05.rdo_SEX_DSC","value","ds_userInfo","SEX_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","Div05.edt_USR_EMAIL01","value","ds_userInfo","USR_EMAIL01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","Div05.edt_USR_EMAIL02","value","ds_userInfo","USR_EMAIL02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","Div05.cbo_HP","value","ds_userInfo","HP1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","Div05.edt_HP01","value","ds_userInfo","HP2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","Div05.edt_HP02","value","ds_userInfo","HP3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","Div05.edt_CHRG_BSNNM","value","ds_userInfo","CHRG_BSNNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","Div05.edt_DEPT_ID","value","ds_userInfo","DEPT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_5112.xfdl", "lib::comLib.xjs");
        this.addIncludeScript("OMG_DS_SC_5112.xfdl", "lib::comPolicy.xjs");
        this.registerScript("OMG_DS_SC_5112.xfdl", function() {
        //include "lib::comLib.xjs";
        //include "lib::comPolicy.xjs";

        /*******************************************************************
        	전역변수 선언
        	sScrollYn  : 서비스이용약관 스크롤여부
        	sScrollYn2 : 개인정보 스크롤여부
        *******************************************************************/
        this.sScrollYn = "";
        this.sScrollYn2 = "";
        this.JOIN_DATA;
        this.PASS_POLICY;

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	this.JOIN_DATA = this.gfn_nullToEmpty(this.parent.data);
        	this.PASS_POLICY = this.gfn_nullToEmpty(this.parent.passPolicy);
        	if (this.PASS_POLICY == "Y") {
        		this.Div01.set_visible(false);
        		this.Div05.set_visible(true);
        		this.resetScroll();

        		this.Div05.edt_MB_ID.set_value(this.JOIN_DATA);
        		//this.Div05.edt_MB_ID.set_enable(false);
        		this.Div05.edt_NA_TRPL_C.setFocus();
        	} else {
        		this.Div01.Static00.set_text("하나로eSCM 서비스 이용약관, 개인정보 수집 및 이용에 <b v='true'><u v='true'>모두 동의</u></b>합니다.");
        		this.Div01.Static01.set_text("<b v='true'>[필수]하나로eSCM 서비스 이용약관</b>");
        		this.Div01.Static03.set_text("<b v='true'>[필수]하나로eSCM 서비스 개인 정보 수집 및 이용동의</b>");
        		this.Div01.txa_arr01.set_value(this.policyTerms);
        		this.Div01.txa_arr02.set_value(this.policyPrivacy);
        	}
        	this.Div05.chk_PRICE.set_value("N");
        	
        	//공통코드콤보가져오기
        	var param = [
         		{code:"HP", dsName:"ds_hpNo", selecttype:"N"}
            ];
        	this.gfn_setPortalCommonCode(param);

        	this.Div05.set_height(nexacro.toNumber(this.Div05.Static00.top) + nexacro.toNumber(this.Div05.Static00.height) + 15); // 담당업무

        	if (!this.checkParent(true)) {
        		this.Div01.set_left(17);
        		this.Div01.set_visible(true); // 약관동의
        		this.Div05.set_visible(false);
        		this.Div01.txa_arr01.addEventHandler("onvscroll", this.Div01_txa_arr01_onvscroll, this);
        		this.Div01.txa_arr02.addEventHandler("onvscroll", this.Div01_txa_arr02_onvscroll, this);
        	}
        }

        /*******************************************************************************************************************
         신규 회원가입 화면 통해서 넘어올 때
        ********************************************************************************************************************/
        this._setJoinData = function(data)
        {
        	this.JOIN_DATA = this.gfn_nullToEmpty(data);
        	this.PASS_POLICY = "Y";

        	this.Div01.set_visible(false);
        	this.Div05.set_visible(true);
        	this.Div05.Div02.btn_prev.set_visible(true);
        	this.resetScroll();

        	// 회원가입 화면별 처리
        	this.Div05.edt_MB_ID.set_value(this.JOIN_DATA);
        	//this.Div05.edt_MB_ID.set_enable(false);
        	this.Div05.edt_NA_TRPL_C.setFocus();
        	this.Div05.btn_checkMbIdDup.set_visible(false);
        	this.div_hiddenArea.edt_finalMbId.set_value(this.JOIN_DATA);
        }

        /**
         * 부모창 검사
         */
        this.checkParent = function(init)
        {
        	if (this.parent.name == "OMG_DS_SC_5100") {
        		if (init) {
        			// 초기 실행시에 데이터 가져옴
        			this.parent._getParentData();
        			this.ds_bzplc.copyData(this.parent.ds_bzplc);
        		}
        		return true;
        	}
        	return false;
        }

        this.fn_close = function()
        {
        	if (this.checkParent()) {
        		this.parent._closeParent();
        	} else {
        		this.close();
        	}
        }

        this.btn_prev_onclick = function(obj,e)
        {
        	this.parent.changeStep(2);
        }

        /***************************************************
        	모두 동의
        ****************************************************/
        this.Div01_chk_allAgree_onclick = function(obj,e)
        {
        	if (this.Div01.chk_allAgree.value) {
        		this.Div01.chk_agr01.set_value(true);
        		this.Div01.chk_agr02.set_value(true);
        	} else {
        		this.Div01.chk_agr01.set_value(false);
        		this.Div01.chk_agr02.set_value(false);
        	}
        }

        
        /***************************************************
        	동의하지 않습니다.
        ****************************************************/
        this.Div01_Div02_btn_notAgree_onclick = function(obj,e)
        {
        	this.close();
        }

        /***************************************************
        	동의합니다.
        ****************************************************/
        this.Div01_Div02_btn_agree_onclick = function(obj,e)
        {
        	if (!this.Div01.chk_agr01.value) {
        		alert("하나로eSCM 서비스 이용약관에 동의해 주시기 바랍니다.")
        		return false;
        	}
        	if (!this.Div01.chk_agr02.value) {
        		alert("하나로eSCM 서비스 개인 정보 수집 및 이용에 동의해 주시기 바랍니다.")
        		return false;
        	}

        	if (this.sScrollYn == "N") {
        		alert("하나로eSCM 서비스 이용약관을 끝까지 읽어 주시기 바랍니다.");
        		return false;
        	}
        	if (this.sScrollYn2 == "N") {
        		alert("하나로eSCM 서비스 개인 정보 수집 및 이용을 끝까지 읽어 주시기 바랍니다.");
        		return false;
        	}
        	this.Div01.set_visible(false);
        	this.Div05.set_visible(true);

        	this.resetScroll();
        }

        
        this.Div01_txa_arr01_onvscroll = function(obj,e)
        {
        	if (this.Div01.txa_arr01.vscrollbar.max  == e.pos) {
        		this.sScrollYn = "Y";
        	} else {
        		this.sScrollYn = "N";
        	}
        }

        this.Div01_txa_arr02_onvscroll = function(obj,e)
        {
        	if (this.Div01.txa_arr02.vscrollbar.max  == e.pos) {
        		this.sScrollYn2 = "Y";
        	} else {
        		this.sScrollYn2 = "N";
        	}
        }

        /*******************************************************************************************************************
         저장로직
        ********************************************************************************************************************/
        this.btn_save_onclick = function(obj,e)
        {
        	if (this.fn_validationCheck() == true) {
        		if (!confirm("가입하시겠습니까?")) {
        			return;
        		}

        		/*서비스권한 세팅*/
        		this.ds_userInfo.setColumn(0, "MB_CV_DSC", "3");
        		this.ds_userInfo.setColumn(0, "USR_TPC", this.div_hiddenArea.edt_USR_TPC.value);

        		this.fn_setSvcAuth();

        		var sParam		  = "mbPw="+this.Div05.edt_MB_PW01.value;
        		var sSvcID        = "insertMB";
        		var sURL          = "svc::rest/pt/usrinf/insertMBNot01";
        		var sInDatasets   = "ds_userInfo=ds_userInfo ds_svcAuth=ds_svcAuth ds_officeInfo=ds_officeInfo";
        		var sOutDatasets  = "";
        		var sArgument     = sParam;
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회

        		this.gfn_callService(sSvcID, sURL, sInDatasets , sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        /*******************************************************************************************************************
         유효성검사
        ********************************************************************************************************************/
        this.fn_validationCheck = function()
        {
        	if (this.gfn_isNull(this.Div05.edt_MB_ID.value)) {
        		alert("회원ID를 입력하세요.");
        		this.Div05.edt_MB_ID.setFocus();
        		return false;
        	}
        	if (this.gfn_isNull(this.Div05.edt_USR_NM.value)) {
        		alert("이름을 입력하세요.");
        		this.Div05.edt_USR_NM.setFocus();
        		return false;
        	}
        	if (this.gfn_isNull(this.Div05.edt_MB_PW01.value)) {
        		alert("비밀번호를 입력하세요.");
        		this.Div05.edt_MB_PW01.setFocus();
        		return false;
        	}
        	if (this.gfn_isNull(this.Div05.edt_MB_PW02.value)) {
        		alert("비밀번호확인을 입력하세요.");
        		this.Div05.edt_MB_PW02.setFocus();
        		return false;
        	}
        	if (this.gfn_isNull(this.Div05.edt_BIRTH.value)) {
        		alert("생년월일을 입력하세요 ");
        		this.Div05.edt_BIRTH.setFocus();
        		return false;
        	}
        	if (this.Div05.edt_BIRTH.text.substring(0, 2)  == "00")  {
        		alert("생년월일을 6자리로 입력시 생년월일은 8자리 형식(19600101)으로 입력하셔야 합니다");
        		this.Div05.edt_BIRTH.setFocus();
        		return false;
        	}
        	if (this.gfn_isNull(this.Div05.rdo_SEX_DSC.value)) {
        		alert("성별을 선택하세요.");
        		this.Div05.rdo_SEX_DSC.setFocus();
        		return false;
        	}
        	if (this.gfn_isNull(this.Div05.edt_USR_EMAIL01.value)) {
        		alert("이메일을 입력 하세요.");
        		this.Div05.edt_USR_EMAIL01.setFocus();
        		return false;
        	}
        	if (this.gfn_isNull(this.Div05.edt_USR_EMAIL02.value)) {
        		alert("이메일을 입력 하세요.");
        		this.Div05.edt_USR_EMAIL02.setFocus();
        		return false;
        	}
        	if (this.gfn_isNull(this.Div05.cbo_HP.value)) {
        		alert("휴대전화번호(앞자리)를 선택하세요.");
        		this.Div05.cbo_HP.setFocus();
        		return false;
        	}
        	if (this.gfn_isNull(this.Div05.edt_HP01.value)) {
        		alert("휴대전화번호(가운뎃자리)를 입력하세요.");
        		this.Div05.edt_HP01.setFocus();
        		return false;
        	}
        	if (this.gfn_isNull(this.Div05.edt_HP02.value)) {
        		alert("휴대전화번호(뒷자리)를 입력하세요.");
        		this.Div05.edt_HP02.setFocus();
        		return false;
        	}
        	if (this.gfn_isNull(this.Div05.edt_CHRG_BSNNM.value)) {
        		alert("담당업무를 입력 하세요.");
        		this.Div05.edt_CHRG_BSNNM.setFocus();
        		return false;
        	}
        	if (this.Div05.edt_MB_PW01.value != this.Div05.edt_MB_PW02.value) {
        		alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
        		return false;
        	}
        	if (!this.gfn_isDate(this.Div05.edt_BIRTH.value)) {
        		alert("회원정보의 생년월일 형식이 잘못되었습니다.");
        		return false;
        	}
        	if (!this.gfn_checkEmail(this.Div05.edt_USR_EMAIL01.value+"@"+this.Div05.edt_USR_EMAIL02.value)) {
        		alert("이메일형식이 잘못되었습니다.");
        		return false;
        	}

        	/*비밀번호 validation검사*/
        	if (!this.gfn_pwValidation(this.Div05.edt_MB_PW01.value)) {
        		return false;
        	}
        	if (this.Div05.edt_NA_TRPL_C.value != this.ds_officeInfo.getColumn(0, "NA_TRPL_C")) {
        		alert("사업장코드가 변경되었습니다. 사업장코드 찾기버튼으로 재조회 해주시기 바랍니다.");
        		this.Div05.edt_NA_TRPL_C.setFocus();
        		return false;
        	}
        	if (this.gfn_isNull(this.div_hiddenArea.edt_finalMbId.value)) {
        		alert("회원ID 중복확인을 해주시기 바랍니다.");
        		this.Div05.edt_MB_ID.setFocus();
        		return false;
        	}
        	if (this.Div05.edt_MB_ID.value != this.div_hiddenArea.edt_finalMbId.value) {
        		alert("회원ID가 변경되었습니다. 중복확인을 해주시기 바랍니다.");
        		this.Div05.edt_MB_ID.setFocus();
        		return false;
        	}

        	/*권한체크 - 세금계산서 권한은 사업장코드당 1개 이상*/
        	if (this.ds_taxCnt.getColumn(0, "TAX_AUTH_CNT") == "0" && this.Div05.chk_TAX_AUTH.value == "N") {
        		alert("거래처 번호에 해당하는 세금계산서 권한을 가진 회원이 없습니다.\n 세금계산서 권한을 선택해주세요.");
        		return false;
        	}
        	return true;
        }

        /*******************************************************************************************************************
         서비스 권한세팅 메소드
        ********************************************************************************************************************/
        this.fn_setSvcAuth = function ()
        {
        	this.ds_svcAuth.clear();
        	this.ds_svcAuth.addColumn("SVC_ID", "string");

        	// 4: 웹하드, 컨설팅
        	this.ds_svcAuth.addRow();
        	this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "SVC_ID", "4");

        	// 5: 계약상담
        	if (this.Div05.chk_BUSINESS_TALK_AUTH.value == "Y") {
        		this.ds_svcAuth.addRow();
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "SVC_ID", "5");
        	}

        	// 6: 전자계약
        	if (this.Div05.chk_CONTRACT_AUTH.value == "Y") {
        		this.ds_svcAuth.addRow();
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "SVC_ID", "6");
        	}

        	// 7: 세금계산서
        	if (this.Div05.chk_TAX_AUTH.value == "Y") {
        		this.ds_svcAuth.addRow();
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "SVC_ID", "7");
        	}

        	// P: PDA 검수
        	if (this.Div05.chk_PDA_AUTH.value == "Y") {
        		this.ds_svcAuth.addRow();
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "SVC_ID", "P");
        	}

        	// R: 가격할인
        	if (this.Div05.chk_PRICE.value == "Y") {
        		this.ds_svcAuth.addRow();
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "SVC_ID", "M");
        	}
        }

        /*******************************************************************************************************************
         회원ID중복체크
        ********************************************************************************************************************/
        this.Div05_btn_checkMbIdDup_onclick = function(obj,e)
        {
        	var naTrplC = this.Div05.edt_NA_TRPL_C.value;

        	if (this.gfn_isNull(naTrplC) || naTrplC.length != 13) {
        		alert("사업장코드를 확인해주세요.");
        		this.Div05.edt_NA_TRPL_C.setFocus();
        		return;
        	} else if (this.gfn_isNull(this.Div05.edt_MB_ID.value)) {
        		alert("회원ID를 입력해 주세요.");
        		this.Div05.edt_MB_ID.setFocus();
        		return;
        	}

        	var param = "naTrplc=" + naTrplC
        			  + " mbId=" + this.Div05.edt_MB_ID.value
        			  + " usrTpc=" + this.div_hiddenArea.edt_USR_TPC.value;

        	var sSvcID        = "checkMbIdDup";
        	var sURL          = "svc::rest/pt/usrinf/checkMbIdDup";
        	var sInDatasets   = "";
        	var sOutDatasets  = "";
        	var sArgument     =  param;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	this.gfn_callService(sSvcID, sURL, sInDatasets , sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        
        /*******************************************************************************************************************
         사업자번호로 거래처 정보조회하기
        ********************************************************************************************************************/
        this.Div05_btn_search_onclick = function(obj,e)
        {
        	this.fn_officeInfo(this.Div05.edt_NA_TRPL_C.value);
        }

        /*******************************************************************************************************************
         회사정보조회
        ********************************************************************************************************************/
        this.fn_officeInfo = function(naTrplC)
        {
        	if (this.gfn_isNull(naTrplC) || naTrplC.length != 13) {
        		alert("사업장코드를 확인해주세요.");
        		this.Div05.edt_NA_TRPL_C.setFocus();
        		return;
        	}

        	// 사업장코드가 변경된 경우
        	/*
        	if (this.Div05.edt_NA_TRPL_C.value != this.ds_officeInfo.getColumn(0, "NA_TRPL_C")) {
        		this.div_hiddenArea.edt_finalMbId.set_value(null); // 중복확인 초기화
        	}
        	*/

        	// 사업자번호를 전달하지 않는다.
        	var param = "bzNo1="
        				+" bzNo2="
        				+" bzNo3="
        				+" naTrplC="+naTrplC
        				+" usrTpc ="+this.div_hiddenArea.edt_USR_TPC.value
        				;

        	var sSvcID        = "retrieveOfficeInfo";
        	var sURL          = "svc::rest/pt/usrinf/retrieveOfficeInfo";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_officeInfo=ds_officeInfo ds_taxCnt=ds_taxCnt";
        	var sArgument     =  param;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        /*******************************************************************************************************************
         콜백
        ********************************************************************************************************************/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (svcID =="retrieveOfficeInfo") {
        		if (ErrorCode < 0) {
        			this.gfn_getMessage("alert", "error.message.server.exception");
        			return;
        		} else if (this.ds_officeInfo.rowcount == 0) {
        			alert("입력하신 사업장코드가 존재하지 않습니다.");
        		}
        	} else if (svcID=="checkMbIdDup") {
        		if (ErrorCode == 0) {
        			alert("입력하신 회원ID는 사용할 수 있습니다.");
        			this.div_hiddenArea.edt_finalMbId.set_value(this.Div05.edt_MB_ID.value);
        		} else if (ErrorCode == -2) {
        			this.gfn_getMessage("alert", "error.message.dupUserId");
        			this.Div05.edt_MB_ID.setFocus();
        		} else if (ErrorCode == -3) {
        			this.gfn_getMessage("alert", "error.message.noUserCIF");
        			this.Div05.edt_MB_ID.setFocus();
        		} else {
        			this.gfn_getMessage("alert", "error.message.server.exception");
        		}
        	} else if (svcID =="insertMB") {
        		if (ErrorCode < 0) {
        			this.gfn_getMessage("alert", "error.message.server.exception");
        		} else {
        			alert("정상 처리 되었습니다.");
        			this.fn_close();
        		}
        	}
        }

        this.Div05_chk_PDA_AUTH_onchanged = function(obj,e)
        {
        	var msg = "마트 검수 담당자만 사용할 수 있는 권한입니다.\nPDA 검수 권한을 선택하시겠습니까?";

        	if (e.postvalue == "Y" && !confirm(msg)) {
        		obj.set_value(e.prevalue); // 변경 전 value 값으로 설정
        		return;
        	}
        }

        this.Div05_btn_search_bzplc_onclick = function(obj,e)
        {
        	if (this.gfn_isNull(this.Div05.edt_MB_ID.value)) {
        		this.alert("소속사업장을 보려면 아이디(사번)를 입력해주세요.");
        		return;
        	}
        	var oArg = {USR_TPC:"03", MB_ID:this.Div05.edt_MB_ID.value};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("popMyBzplc", "OMG.PT::OMG_DS_SC_5115_P01.xfdl", oArg, sOption, sPopupCallBack);
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	if (strId == "popMyBzplc") {
        		if (!this.gfn_isNull(strVal)) {
        			var temp = strVal.split("#");
        			this.Div05.edt_NA_TRPL_C.set_value(temp[0]);
        			this.Div05.edt_DEPT_ID.set_value(temp[5]);
        			this.Div05.edt_DEPT_NAME.set_value(temp[6]);
        			this.Div05.edt_BZNO01.set_value(temp[4].substring(0, 3));
        			this.Div05.edt_BZNO02.set_value(temp[4].substring(3, 5));
        			this.Div05.edt_BZNO03.set_value(temp[4].substring(5, 10));
        			this.Div05.btn_search.click();
        		}
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_bzplc.addEventHandler("oncolumnchanged", this.ds_dept_oncolumnchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.Div01.txa_arr01.addEventHandler("oneditclick", this.Div01_TextArea00_oneditclick, this);
            this.Div01.Div02.btn_notAgree.addEventHandler("onclick", this.Div01_Div02_btn_notAgree_onclick, this);
            this.Div01.Div02.btn_agree.addEventHandler("onclick", this.Div01_Div02_btn_agree_onclick, this);
            this.Div01.argee02.addEventHandler("oneditclick", this.Div01_TextArea00_oneditclick, this);
            this.Div01.chk_allAgree.addEventHandler("onclick", this.Div01_chk_allAgree_onclick, this);
            this.Div01.Static01.addEventHandler("onclick", this.Div01_Static01_onclick, this);
            this.Div01.Static02.addEventHandler("onclick", this.Div01_Static01_onclick, this);
            this.Div01.Static03.addEventHandler("onclick", this.Div01_Static01_onclick, this);
            this.Div01.Static04.addEventHandler("onclick", this.Div01_Static01_onclick, this);
            this.Div05.Div02.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.Div05.Div02.btn_prev.addEventHandler("onclick", this.btn_prev_onclick, this);
            this.Div05.Static03.addEventHandler("onclick", this.Div05_Static03_onclick, this);
            this.Div05.Static10.addEventHandler("onclick", this.Div05_Static03_onclick, this);
            this.Div05.rdo_SEX_DSC.addEventHandler("onitemclick", this.Radio00_onitemclick, this);
            this.Div05.btn_search.addEventHandler("onclick", this.Div05_btn_search_onclick, this);
            this.Div05.btn_checkMbIdDup.addEventHandler("onclick", this.Div05_btn_checkMbIdDup_onclick, this);
            this.Div05.chk_PDA_AUTH.addEventHandler("onchanged", this.Div05_chk_PDA_AUTH_onchanged, this);
            this.Div05.btn_search_bzplc.addEventHandler("onclick", this.Div05_btn_search_bzplc_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_5112.xfdl");

       
    };
}
)();
