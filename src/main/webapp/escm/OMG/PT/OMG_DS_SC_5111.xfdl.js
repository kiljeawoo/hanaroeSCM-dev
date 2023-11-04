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
                this.set_name("OMG_DS_SC_5111");
                this.set_titletext("본부회원가입");
                this.set_scrollbars("autovert");
                this._setFormPosition(0,0,750,544);
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
            obj._setContents("<ColumnInfo><Column id=\"TAX_AUTH_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"REPMNM\" type=\"STRING\" size=\"256\"/><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTH\" type=\"STRING\" size=\"256\"/><Column id=\"SEX_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"HP1\" type=\"STRING\" size=\"256\"/><Column id=\"HP2\" type=\"STRING\" size=\"256\"/><Column id=\"HP3\" type=\"STRING\" size=\"256\"/><Column id=\"USR_EMAIL01\" type=\"STRING\" size=\"256\"/><Column id=\"USR_EMAIL02\" type=\"STRING\" size=\"256\"/><Column id=\"MB_PW1\" type=\"STRING\" size=\"256\"/><Column id=\"MB_PW2\" type=\"STRING\" size=\"256\"/><Column id=\"USR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"CHRG_BSNNM\" type=\"STRING\" size=\"256\"/><Column id=\"MP1\" type=\"STRING\" size=\"256\"/><Column id=\"MP2\" type=\"STRING\" size=\"256\"/><Column id=\"MP3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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

            obj = new Dataset("ds_svcInfo", this);
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

            obj = new Static("Static87", "absolute", "728", "1", "17", "1195", null, null, this);
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
            obj = new CheckBox("chk_agr01", "absolute", "675", "254", "19", "21", null, null, this.Div01);
            obj.set_taborder("15");
            this.Div01.addChild(obj.name, obj);
            obj = new CheckBox("chk_agr02", "absolute", "675", "446", "19", "21", null, null, this.Div01);
            obj.set_taborder("17");
            this.Div01.addChild(obj.name, obj);
            obj = new Div("Div02", "absolute", "0", "0", "705", "43", null, null, this.Div01);
            obj.set_taborder("18");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "9", "107", "21", null, null, this.Div01.Div02);
            obj.set_taborder("59");
            obj.set_text("약관동의");
            obj.style.set_font("bold 9 arial");
            this.Div01.Div02.addChild(obj.name, obj);
            obj = new Button("btn_notAgree", "absolute", "590", "9", "65", "21", null, null, this.Div01.Div02);
            obj.set_taborder("60");
            obj.set_text("동의안함");
            obj.set_cssclass("btn_WF_CRUD");
            this.Div01.Div02.addChild(obj.name, obj);
            obj = new Button("btn_agree", "absolute", "657", "9", "41", "21", null, null, this.Div01.Div02);
            obj.set_taborder("61");
            obj.set_text("동의");
            obj.set_cssclass("btn_WF_CRUD");
            this.Div01.Div02.addChild(obj.name, obj);
            obj = new TextArea("argee02", "absolute", "17", "64", null, "36", "17", null, this.Div01);
            obj.set_taborder("19");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "91", "66", "456", "30", null, null, this.Div01);
            obj.set_taborder("20");
            obj.set_text("Static00");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);
            obj = new CheckBox("chk_allAgree", "absolute", "561", "72", "46", "21", null, null, this.Div01);
            obj.set_taborder("21");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "17", "106", "677", "21", null, null, this.Div01);
            obj.set_taborder("22");
            obj.set_text("Static01");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "423", "254", "252", "21", null, null, this.Div01);
            obj.set_taborder("23");
            obj.set_text("하나로eSCM 서비스 이용약관에 동의합니다.");
            obj.set_usedecorate("true");
            obj.style.set_color("red");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "17", "275", "677", "21", null, null, this.Div01);
            obj.set_taborder("24");
            obj.set_text("Static03");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "351", "446", "321", "21", null, null, this.Div01);
            obj.set_taborder("25");
            obj.set_text("하나로eSCM 서비스 개인정보 수집 및 이용에 동의합니다.");
            obj.set_usedecorate("true");
            obj.style.set_color("red");
            this.Div01.addChild(obj.name, obj);
            obj = new TextArea("txa_arr02", "absolute", "2.25%", "296", null, "148", "2.53%", null, this.Div01);
            obj.set_taborder("26");
            obj.set_tabstop("false");
            obj.set_scrollbars("autovert");
            obj.set_wordwrap("char");
            obj.set_readonly("true");
            obj.style.set_padding("5 5 5 5");
            obj.style.set_font("12 Gulim");
            this.Div01.addChild(obj.name, obj);
            obj = new TextArea("txa_arr01", "absolute", "2.39%", "127", null, "117", "2.39%", null, this.Div01);
            obj.set_taborder("27");
            obj.set_tabstop("false");
            obj.set_scrollbars("autovert");
            obj.set_wordwrap("char");
            obj.set_readonly("true");
            obj.style.set_padding("5 5 5 5");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("div_hiddenArea", "absolute", "4", "557", "667", "90", null, null, this);
            obj.set_taborder("4");
            obj.set_text("div_hiddenArea");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Edit("edt_randomNumber", "absolute", "15", "73", "63", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("23");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_sealVal", "absolute", "81", "73", "63", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("24");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_sealName", "absolute", "81", "102", "63", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("25");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_USR_TPC", "absolute", "147", "73", "63", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("26");
            obj.set_value("02");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_finalMbId", "absolute", "147", "102", "63", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("27");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_confirm", "absolute", "15", "102", "63", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("28");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_finalNaTrplC", "absolute", "213", "73", "9.38%", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("29");
            this.div_hiddenArea.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "3", "245", "717", "20", null, null, this);
            obj.set_taborder("6");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("Div05", "absolute", "17", "16", "711", "647", null, null, this);
            obj.set_taborder("8");
            obj.style.set_background("transparent");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Static("Static91", "absolute", "0", "87", "711", "29", null, null, this.Div05);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static103", "absolute", "0", "171", "711", "58", null, null, this.Div05);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static101", "absolute", "0", "143", "711", "29", null, null, this.Div05);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static95", "absolute", "0", "115", "711", "29", null, null, this.Div05);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Div("Div02", "absolute", "0", "0", "711", "43", null, null, this.Div05);
            obj.set_taborder("16");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Button("btn_save", "absolute", "635", "9", "65", "21", null, null, this.Div05.Div02);
            obj.set_taborder("61");
            obj.set_text("가입완료");
            obj.set_cssclass("btn_WF_CRUD");
            this.Div05.Div02.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "9", "143", "21", null, null, this.Div05.Div02);
            obj.set_taborder("62");
            obj.set_text("본부 회원가입");
            obj.style.set_font("bold 9 arial");
            this.Div05.Div02.addChild(obj.name, obj);
            obj = new Static("Static89", "absolute", "0", "63", "135", "21", null, null, this.Div05);
            obj.set_taborder("17");
            obj.set_text("회사 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static92", "absolute", "0", "87", "120", "29", null, null, this.Div05);
            obj.set_taborder("18");
            obj.set_text("사업장코드");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static94", "absolute", "0", "115", "120", "29", null, null, this.Div05);
            obj.set_taborder("19");
            obj.set_text("사업장명");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static100", "absolute", "0", "143", "120", "29", null, null, this.Div05);
            obj.set_taborder("20");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static102", "absolute", "0", "171", "120", "58", null, null, this.Div05);
            obj.set_taborder("21");
            obj.set_text("회사주소");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static93", "absolute", "336", "87", "135", "29", null, null, this.Div05);
            obj.set_taborder("22");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_NA_TRPL_C", "absolute", "123", "91", "122", "21", null, null, this.Div05);
            obj.set_taborder("0");
            obj.set_maxlength("13");
            obj.set_inputtype("number");
            obj.set_enable("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_RZIP", "absolute", "167", "147", "35", "21", null, null, this.Div05);
            obj.set_taborder("23");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static133", "absolute", "160", "146", "9", "21", null, null, this.Div05);
            obj.set_taborder("24");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_FZIP", "absolute", "123", "147", "35", "21", null, null, this.Div05);
            obj.set_taborder("25");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_DONGBW", "absolute", "123", "177", "583", "21", null, null, this.Div05);
            obj.set_taborder("26");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_DONGUP", "absolute", "123", "202", "583", "21", null, null, this.Div05);
            obj.set_taborder("27");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "247", "135", "21", null, null, this.Div05);
            obj.set_taborder("28");
            obj.set_text("회원 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static107", "absolute", "0", "269", "711", "29", null, null, this.Div05);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "297", "711", "29", null, null, this.Div05);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static113", "absolute", "0", "353", "711", "29", null, null, this.Div05);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static115", "absolute", "0", "381", "711", "29", null, null, this.Div05);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static120", "absolute", "0", "409", "711", "29", null, null, this.Div05);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static114", "absolute", "336", "115", "135", "29", null, null, this.Div05);
            obj.set_taborder("35");
            obj.set_text("대표전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0", "353", "120", "29", null, null, this.Div05);
            obj.set_taborder("36");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static109", "absolute", "0", "297", "120", "29", null, null, this.Div05);
            obj.set_taborder("37");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static106", "absolute", "0", "269", "120", "29", null, null, this.Div05);
            obj.set_taborder("38");
            obj.set_text("바이어개인번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static118", "absolute", "0", "545", "711", "58", null, null, this.Div05);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_confirmCertificate", "absolute", "123", "577", "89", "21", null, null, this.Div05);
            obj.set_taborder("12");
            obj.set_inputtype("number");
            obj.set_maxlength("6");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_TEL01", "absolute", "531", "119", "48", "21", null, null, this.Div05);
            obj.set_taborder("42");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_TEL02", "absolute", "588", "119", "48", "21", null, null, this.Div05);
            obj.set_taborder("43");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_USR_EMAIL01", "absolute", "123", "357", "122", "21", null, null, this.Div05);
            obj.set_taborder("7");
            obj.set_maxlength("25");
            obj.set_enable("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_MB_PW01", "absolute", "123", "301", "183", "21", null, null, this.Div05);
            obj.set_taborder("3");
            obj.set_password("true");
            obj.set_maxlength("16");
            obj.set_lengthunit("utf8");
            obj.set_enable("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_MB_ID", "absolute", "123", "273", "122", "21", null, null, this.Div05);
            obj.set_taborder("2");
            obj.set_inputtype("number,english");
            obj.set_maxlength("9");
            obj.set_enable("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_USR_EMAIL02", "absolute", "264", "357", "122", "21", null, null, this.Div05);
            obj.set_taborder("8");
            obj.set_maxlength("25");
            obj.set_enable("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static134", "absolute", "250", "357", "13", "21", null, null, this.Div05);
            obj.set_taborder("44");
            obj.set_text("@");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "336", "269", "135", "29", null, null, this.Div05);
            obj.set_taborder("45");
            obj.set_text("바이어명");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static111", "absolute", "336", "297", "135", "29", null, null, this.Div05);
            obj.set_taborder("46");
            obj.set_text("비밀번호 확인");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_USR_NM", "absolute", "474", "273", "180", "21", null, null, this.Div05);
            obj.set_taborder("47");
            obj.set_maxlength("16");
            obj.set_readonly("false");
            obj.set_enable("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_MB_PW02", "absolute", "474", "301", "180", "21", null, null, this.Div05);
            obj.set_taborder("4");
            obj.set_password("true");
            obj.set_maxlength("16");
            obj.set_enable("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static116", "absolute", "0", "381", "120", "29", null, null, this.Div05);
            obj.set_taborder("48");
            obj.set_text("휴대전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Combo("cbo_HP", "absolute", "123", "385", "51", "21", null, null, this.Div05);
            this.Div05.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_hpNo");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_enable("false");
            obj = new Static("Static125", "absolute", "174", "385", "9", "21", null, null, this.Div05);
            obj.set_taborder("49");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_HP01", "absolute", "183", "385", "48", "21", null, null, this.Div05);
            obj.set_taborder("10");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_enable("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static126", "absolute", "231", "385", "9", "21", null, null, this.Div05);
            obj.set_taborder("50");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_HP02", "absolute", "240", "385", "48", "21", null, null, this.Div05);
            obj.set_taborder("11");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_enable("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "522", "119", "9", "21", null, null, this.Div05);
            obj.set_taborder("51");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "579", "119", "9", "21", null, null, this.Div05);
            obj.set_taborder("52");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static119", "absolute", "0", "409", "120", "29", null, null, this.Div05);
            obj.set_taborder("53");
            obj.set_text("회원권한");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "0", "545", "120", "58", null, null, this.Div05);
            obj.set_taborder("54");
            obj.set_text("휴대전화인증");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Button("btn_sendSms", "absolute", "123", "551", "89", "21", null, null, this.Div05);
            obj.set_taborder("55");
            obj.set_text("인증번호생성");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "223", "551", "297", "21", null, null, this.Div05);
            obj.set_taborder("56");
            obj.set_text("인증번호를 생성하여 등록된 휴대폰으로 전송합니다.");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Button("btn_certificate", "absolute", "221", "577", "41", "21", null, null, this.Div05);
            obj.set_taborder("57");
            obj.set_text("인증");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_CLNTNM", "absolute", "123", "119", "183", "21", null, null, this.Div05);
            obj.set_taborder("58");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Button("btn_cert", "absolute", "249", "91", "41", "21", null, null, this.Div05);
            obj.set_taborder("59");
            obj.set_text("인증");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "0", "325", "711", "29", null, null, this.Div05);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "0", "325", "120", "29", null, null, this.Div05);
            obj.set_taborder("61");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "336", "325", "135", "29", null, null, this.Div05);
            obj.set_taborder("62");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Radio("rdo_SEX_DSC", "absolute", "477", "330", "183", "21", null, null, this.Div05);
            this.Div05.addChild(obj.name, obj);
            var rdo_SEX_DSC_innerdataset = new Dataset("rdo_SEX_DSC_innerdataset", this.Div05.rdo_SEX_DSC);
            rdo_SEX_DSC_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">남</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">여</Col></Row></Rows>");
            obj.set_innerdataset(rdo_SEX_DSC_innerdataset);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("false");
            obj = new CheckBox("chk_WEBHARD_AUTH", "absolute", "125", "414", "174", "21", null, null, this.Div05);
            obj.set_taborder("39");
            obj.set_text("웹하드, 컨설팅, 마트장비");
            obj.set_value("Y");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.Div05.addChild(obj.name, obj);
            obj = new CheckBox("chk_CONTRACT_AUTH", "absolute", "307", "414", "90", "21", null, null, this.Div05);
            obj.set_taborder("65");
            obj.set_text("전자계약");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_readonly("false");
            obj.set_enable("false");
            this.Div05.addChild(obj.name, obj);
            obj = new CheckBox("chk_BUSINESS_TALK_AUTH", "absolute", "397", "414", "90", "21", null, null, this.Div05);
            obj.set_taborder("66");
            obj.set_text("계약상담");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_enable("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Calendar("edt_BIRTH", "absolute", "123", "329", "110", "21", null, null, this.Div05);
            this.Div05.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");
            obj = new Edit("edt_BZNO01", "absolute", "474", "91", "35", "21", null, null, this.Div05);
            obj.set_taborder("68");
            obj.set_maxlength("3");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_value("104");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static129", "absolute", "509", "91", "9", "21", null, null, this.Div05);
            obj.set_taborder("69");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_BZNO02", "absolute", "518", "91", "30", "21", null, null, this.Div05);
            obj.set_taborder("70");
            obj.set_maxlength("2");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_value("86");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "548", "91", "9", "21", null, null, this.Div05);
            obj.set_taborder("71");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_BZNO03", "absolute", "557", "91", "65", "21", null, null, this.Div05);
            obj.set_taborder("72");
            obj.set_maxlength("5");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_value("59132");
            this.Div05.addChild(obj.name, obj);
            obj = new CheckBox("chk_TAX_AUTH", "absolute", "487", "414", "90", "21", null, null, this.Div05);
            obj.set_taborder("73");
            obj.set_text("세금계산서");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_enable("false");
            this.Div05.addChild(obj.name, obj);
            obj = new CheckBox("chk_PRICE", "absolute", "593", "414", "90", "21", null, null, this.Div05);
            obj.set_taborder("9");
            obj.set_text("모바일앱");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_enable("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_TEL00", "absolute", "474", "119", "48", "21", null, null, this.Div05);
            obj.set_taborder("74");
            obj.set_inputtype("number");
            obj.set_readonly("true");
            obj.set_maxlength("4");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "98", "270", "17", "27", null, null, this.Div05);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("사번으로 이루어집니다.");
            obj.style.set_background("#f2f8faff URL('theme://images/btn_LF_Search_D.png') center middle");
            obj.style.set_border("0 solid #ccd3d5ff");
            obj.set_visible("true");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "98", "298", "17", "27", null, null, this.Div05);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("8~16자리 영문,숫자의 조합으로 이루어져야합니다.");
            obj.style.set_background("#f2f8faff URL('theme://images/btn_LF_Search_D.png') center middle");
            obj.style.set_border("0 solid #ccd3d5ff");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "0", "437", "711", "29", null, null, this.Div05);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "0", "437", "120", "29", null, null, this.Div05);
            obj.set_taborder("77");
            obj.set_text("담당업무");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_CHRG_BSNNM", "absolute", "123", "441", "583", "21", null, null, this.Div05);
            obj.set_taborder("79");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("76");
            obj.set_enable("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "124", "248", "563", "21", null, null, this.Div05);
            obj.set_taborder("81");
            obj.set_text("아이디/비밀번호 찾기 및 연락 시 입력된 회원정보를 참고하므로, 정확한 정보 입력 바랍니다.");
            obj.set_visible("true");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "336", "381", "135", "29", null, null, this.Div05);
            obj.set_taborder("82");
            obj.set_text("사무실전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_MP00", "absolute", "475", "385", "48", "21", null, null, this.Div05);
            obj.set_taborder("83");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_enable("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "526", "385", "9", "21", null, null, this.Div05);
            obj.set_taborder("84");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_MP01", "absolute", "536", "385", "48", "21", null, null, this.Div05);
            obj.set_taborder("85");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_enable("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static19", "absolute", "586", "385", "9", "21", null, null, this.Div05);
            obj.set_taborder("86");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_MP02", "absolute", "596", "385", "48", "21", null, null, this.Div05);
            obj.set_taborder("87");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_enable("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Button("btn_usr_cert_by_id_email", "absolute", "591", "9", "41", "21", null, null, this.Div05);
            obj.set_taborder("88");
            obj.set_text("인증");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_CRUD");
            this.Div05.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 705, 43, this.Div01.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("18");
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
            obj = new Layout("default", "", 667, 90, this.div_hiddenArea,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_text("div_hiddenArea");
            		p.set_visible("false");

            	}
            );
            this.div_hiddenArea.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 711, 43, this.Div05.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("16");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.Div05.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 711, 1139, this.Div05,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("8");
            		p.style.set_background("transparent");
            		p.set_visible("false");

            	}
            );
            this.Div05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 750, 544, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("dddd");
            		p.set_titletext("본부회원가입");
            		p.set_scrollbars("autovert");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Div05.edt_CLNTNM","value","ds_officeInfo","CLNTNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div05.edt_FZIP","value","ds_officeInfo","FZIP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Div05.edt_RZIP","value","ds_officeInfo","RZIP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Div05.edt_DONGBW","value","ds_officeInfo","DONGUP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Div05.edt_DONGUP","value","ds_officeInfo","DONGBW");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Div05.edt_NA_TRPL_C","value","ds_officeInfo","NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Div05.edt_MB_ID","value","ds_userInfo","MB_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Div05.edt_MB_PW01","value","ds_userInfo","MB_PW1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","Div05.rdo_SEX_DSC","value","ds_userInfo","SEX_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","Div05.edt_USR_EMAIL01","value","ds_userInfo","USR_EMAIL01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","Div05.edt_USR_EMAIL02","value","ds_userInfo","USR_EMAIL02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","Div05.edt_TEL01","value","ds_officeInfo","TEL2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","Div05.edt_TEL02","value","ds_officeInfo","TEL3");
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
            obj = new BindItem("item12","Div05.edt_BIRTH","value","ds_userInfo","BIRTH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Div05.edt_BZNO01","value","ds_officeInfo","BZNO1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Div05.edt_BZNO02","value","ds_officeInfo","BZNO2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Div05.edt_BZNO03","value","ds_officeInfo","BZNO3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","Div05.edt_TEL00","value","ds_officeInfo","TEL1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","Div05.edt_CHRG_BSNNM","value","ds_userInfo","CHRG_BSNNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","Div05.edt_MP00","value","ds_userInfo","MP1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","Div05.edt_MP01","value","ds_userInfo","MP2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","Div05.edt_MP02","value","ds_userInfo","MP3");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_5111.xfdl", "lib::comLib.xjs");
        this.addIncludeScript("OMG_DS_SC_5111.xfdl", "lib::comPolicy.xjs");
        this.registerScript("OMG_DS_SC_5111.xfdl", function() {
        //include "lib::comLib.xjs";
        //include "lib::comPolicy.xjs";

        /*******************************************************************
        	전역변수 선언                                                     
        	sScrollYn  : 서비스이용약관 스크롤여부	                          
        	sScrollYn2 : 개인정보 스크롤여부	    
        	참고사항 : 본부회원가입 사업자번호는 고정 [104-86-59132]
        	sBzNO1 : 사업자번호 2자리
        	sBzNO2 : 사업자번호 3자리
        	sBzNO3 : 사업자번호 5자리
        *******************************************************************/
        this.sScrollYn = "";                                                
        this.sScrollYn2 = "";         
        this.sBzNO1 = "104";
        this.sBzNO2 = "86";
        this.sBzNO3 = "59132";

        this.form_onload = function(obj,e)
        {	
        	this.gfn_setInitForm(obj, e); //공통
        	this.Div01.Static00.set_text("하나로eSCM 서비스 이용약관, 개인정보 수집 및 이용에 <b v='true'><u v='true'>모두 동의</u></b>합니다.");
        	this.Div01.Static01.set_text("<b v='true'>[필수]하나로eSCM 서비스 이용약관</b>");
        	this.Div01.Static03.set_text("<b v='true'>[필수]하나로eSCM 서비스 개인정보 수집 및 이용동의</b>");
        	/*변경될 데이터*/
        	this.Div01.txa_arr01.set_value(this.policyTerms);
        	this.Div01.txa_arr02.set_value(this.policyPrivacy);
        	this.Div05.chk_PRICE.set_value("N");
        }

        this.fn_afterFormOnload = function()
        {   
        	trace("afterFormOnload");
        	this.fn_checkOpenWebSign();
        	
        	//공통코드콤보가져오기	
        	var param = [   		
         		{code:"HP"	,     dsName:"ds_hpNo", selecttype:"N"}
            ];
        	this.gfn_setPortalCommonCode(param);
        	
        	this.Div01.set_left(17);
        	this.Div01.set_visible(true); // 약관동의
        	this.Div05.set_visible(false);
        	this.Div05.set_height(nexacro.toNumber(this.Div05.Static09.top) + nexacro.toNumber(this.Div05.Static09.height) + 15); // 담당업무
        	
        	this.Div01.txa_arr01.addEventHandler("onvscroll", this.Div01_txa_arr01_onvscroll,this);
        	this.Div01.txa_arr02.addEventHandler("onvscroll", this.Div01_txa_arr02_onvscroll,this);
        }

        
        /*******************************************************************************************************************
         인증
        ********************************************************************************************************************/
        this.Div05_btn_cert_onclick = function(obj,e)
        {
        	if(this.Div05.edt_MB_ID.getLength() < 8 ){
        		alert("사원번호는 8자리 이상 입력바랍니다..");
        		return false;
        	}
        		
        	if(this.gfn_isNull(this.Div05.edt_BZNO01.value) || this.Div05.edt_BZNO01.getLength() !=3){		
        		alert("사업자번호를 확인해주세요.");
        		this.Div05.edt_BZNO01.setFocus();
        		return;
        	}
        	if(this.gfn_isNull(this.Div05.edt_BZNO02.value) || this.Div05.edt_BZNO02.getLength() !=2){		
        		alert("사업자번호를 확인해주세요.");
        		this.Div05.edt_BZNO02.setFocus();
        		return;
        	}
        	if(this.gfn_isNull(this.Div05.edt_BZNO03.value) || this.Div05.edt_BZNO03.getLength() !=5){
        		alert("사업자번호를 확인해주세요.");
        		this.Div05.edt_BZNO03.setFocus();
        		return;
        	}
        	if(this.gfn_isNull(this.Div05.edt_NA_TRPL_C.value) || this.Div05.edt_NA_TRPL_C.getLength() !=13){
        		alert("사업장코드를 확인해주세요.");
        		this.Div05.edt_NA_TRPL_C.setFocus();
        		return;
        	}
        	if(this.gfn_isNull(this.Div05.edt_MB_ID.value)){
        		alert("바이어개인번호를 확인해주세요.");
        		this.Div05.edt_MB_ID.setFocus();
        		return;
        	}
         	if(this.Div05.edt_MB_ID.getLength() < 8){
        		alert("바이어개인번호는 반드시 8자리 이상입니다.");	
        		this.Div05.edt_MB_ID.setFocus();
        		return false;
        	}
        	var param =   "bzNo1="+this.Div05.edt_BZNO01.value 
        				+" bzNo2="+this.Div05.edt_BZNO02.value				
        				+" bzNo3="+this.Div05.edt_BZNO03.value				
        				+" naTrplC="+this.Div05.edt_NA_TRPL_C.value				
        				+" mbId="+this.Div05.edt_MB_ID.value				
        				
        				 ;
        				
        	var sSvcID        = "retrieveBuyerInfo";
        	var sURL          = "svc::rest/pt/usrinf/retrieveBuyerInfo";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_officeInfo=ds_officeInfo ds_userInfo=ds_userInfo";
        	var sArgument     =  param;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회	
        	 
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /*******************************************************************************************************************
         모두동의
        ********************************************************************************************************************/
        this.Div01_chk_allAgree_onclick = function(obj,e)
        {	
        	if(this.Div01.chk_allAgree.value){
        		this.Div01.chk_agr01.set_value(true);
        		this.Div01.chk_agr02.set_value(true);
        	}else{	
        		this.Div01.chk_agr01.set_value(false);
        		this.Div01.chk_agr02.set_value(false);
        	}
        }

        
        /*******************************************************************************************************************
         동의하지 않습니다.
        ********************************************************************************************************************/
        this.Div01_Div02_btn_notAgree_onclick = function(obj,e)
        {
        	this.close();
        }

        /*******************************************************************************************************************
         동의합니다.
        ********************************************************************************************************************/
        //회가인 7. 로컬 스토리지에 저장된 회원 정보를 화면객체에 바인딩하는 코드
        this.Div01_Div02_btn_agree_onclick = function(obj,e)
        {
        	if(!this.Div01.chk_agr01.value){
        		alert("하나로eSCM 서비스 이용약관에 동의해주시기 바랍니다.")
        		return false;
        	}
        	if(!this.Div01.chk_agr02.value){
        		alert("하나로eSCM 서비스 개인정보 수집 및 이용에 동의해주시기 바랍니다.")
        		return false;
        	}
        	if(this.sScrollYn == "N"){
        		alert("하나로eSCM 서비스 이용약관을 끝까지 읽어 주시기 바랍니다.");
        		return false;
        	}
        	if(this.sScrollYn2 == "N"){
        		alert("하나로eSCM 서비스 개인정보 수집 및 이용을 끝까지 읽어 주시기 바랍니다.");
        		return false;
        	}
        	
        	this.Div01.set_visible(false);
        	this.Div05.set_visible(true);	
        	
        	this.Div05.chk_BUSINESS_TALK_AUTH.set_value("N");
        	this.Div05.chk_CONTRACT_AUTH.set_value("N");
        	this.Div05.chk_TAX_AUTH.set_value("N");
        	this.Div05.edt_BZNO01.set_value(this.sBzNO1);
        	this.Div05.edt_BZNO02.set_value(this.sBzNO2);
        	this.Div05.edt_BZNO03.set_value(this.sBzNO3);
        	
        	//Filling blanks with info that it gets from API.
        	let param_obj = JSON.parse(localStorage.getItem('member_join_info'));
        	console.log(localStorage.getItem('member_join_info'));
        	//json으로 받아온 값을 데이터 셋의 컬럼에 맞추어 값을 주입하는 과정
        	//데이터셋에 값을 주면 바인딩된 화면에 값이 들어간다.
        	for(let i=0; i<this.ds_officeInfo.getColCount(); i++){
        		this.ds_officeInfo.setColumn(0,this.ds_officeInfo.getColID(i),param_obj.ds_officeInfo_obj[this.ds_officeInfo.getColID(i)]);
        		console.log(this.ds_officeInfo.getColID(i));
        		//console.log(param_obj.ds_officeInfo_obj[this.ds_officeInfo.getColID(i)]);
        	}
        	console.log(this.ds_officeInfo);

        	//데이터셋에 값을 주면 바인딩된 화면에 값이 들어간다.
        	console.log(param_obj.ds_officeInfo_obj);
        	for(let i=0; i<this.ds_userInfo.getColCount(); i++){
        		this.ds_userInfo.setColumn(0,this.ds_userInfo.getColID(i),param_obj.ds_officeInfo_obj[this.ds_userInfo.getColID(i)]);
        		console.log(this.ds_userInfo.getColID(i));
        		console.log(param_obj.ds_officeInfo_obj[this.ds_userInfo.getColID(i)]);
        	}

        	console.log(this.ds_userInfo);
        	
        	this.Div05.edt_MB_ID.set_enable(true);
        	this.Div05.edt_USR_NM.set_enable(true);
        	this.Div05.edt_MB_PW01.set_enable(true);
        	this.Div05.edt_MB_PW02.set_enable(true);
        	this.Div05.edt_BIRTH.set_enable(true);
        	this.Div05.rdo_SEX_DSC.set_enable(true);
        	this.Div05.edt_USR_EMAIL01.set_enable(true);
        	this.Div05.edt_USR_EMAIL02.set_enable(true);
        	this.Div05.cbo_HP.set_enable(true);
        	this.Div05.edt_HP01.set_enable(true);
        	this.Div05.edt_HP02.set_enable(true);
        	this.Div05.edt_MP00.set_enable(true);
        	this.Div05.edt_MP01.set_enable(true);
        	this.Div05.edt_MP02.set_enable(true);
        	this.Div05.chk_WEBHARD_AUTH.set_enable(true);
        	this.Div05.chk_CONTRACT_AUTH.set_enable(true);
        	this.Div05.chk_BUSINESS_TALK_AUTH.set_enable(true);
        	this.Div05.chk_TAX_AUTH.set_enable(true);
        	this.Div05.chk_PRICE.set_enable(true);
        	this.Div05.edt_CHRG_BSNNM.set_enable(true);

        	this.resetScroll();	
        }

        /*******************************************************************************************************************
         이용약관 스크롤체크
        ********************************************************************************************************************/
        this.Div01_txa_arr01_onvscroll = function(obj,e)
        {
        	if(this.Div01.txa_arr01.vscrollbar.max  == e.pos){			
        		this.sScrollYn = "Y";
        	}else{
        		this.sScrollYn = "N";
        	}
        }
        this.Div01_txa_arr02_onvscroll = function(obj,e)
        {
        	if(this.Div01.txa_arr02.vscrollbar.max  == e.pos){			
        		this.sScrollYn2 = "Y";
        	}else{
        		this.sScrollYn2 = "N";
        	}
        }

        /*******************************************************************************************************************
         저장로직
        ********************************************************************************************************************/
        this.btn_save_onclick = function(obj,e)
        {

        	
        	if(this.fn_validationCheck() == true){
        		
        		if (!confirm("가입하시겠습니까?")) {
        			return;
        		}
        		
        		// 담당업무 컬럼 추가
        		this.ds_userInfo.addColumn("CHRG_BSNNM", "string");
        		this.ds_userInfo.setColumn(0, "CHRG_BSNNM", this.Div05.edt_CHRG_BSNNM.value);
        				 
        		/*서비스권한 세팅*/	
        				
        		this.ds_userInfo.setColumn(0,"MB_CV_DSC","3");		
        		this.ds_userInfo.setColumn(0,"USR_TPC",this.div_hiddenArea.edt_USR_TPC.value);				
        				
        		this.fn_setSvcAuth();
        				
        		var sParam		  = "mbPw="+this.Div05.edt_MB_PW01.value;
        		var sSvcID        = "insertMB";
        		var sURL          = "svc::rest/pt/usrinf/insertMBNot01";
        		var sInDatasets   = "ds_userInfo=ds_userInfo ds_svcAuth=ds_svcAuth ds_officeInfo=ds_officeInfo";
        		var sOutDatasets  =  "";	
        		var sArgument     =  sParam;
        		var sCallbackFunc = "fn_callBack";				
        		var sTranType     = "U"; // U:저장/삭제, S:조회	 
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);		
        	}
        }

        /*******************************************************************************************************************
         유효성검사
        ********************************************************************************************************************/
        this.fn_validationCheck = function(){
        	
        	if(this.gfn_isNull(this.Div05.edt_CLNTNM.value)){
        		alert("사업장코드, 바이어개인번호를 입력 후 인증해주시기 바랍니다.");			
        		return false;
        	} 
        	if(this.gfn_isNull(this.Div05.edt_MB_ID.value)){
        		alert("회원ID를 입력 하세요.");	
        		this.Div05.edt_MB_ID.setFocus();
        		return false;
        	}
        	if(this.gfn_isNull(this.Div05.edt_USR_NM.value)){
        		alert("사용자명을 입력 하세요.");	
        		this.Div05.edt_USR_NM.setFocus();
        		return false;
        	}	
        	if(this.gfn_isNull(this.Div05.edt_MB_PW01.value)){
        		alert("비밀번호를 입력 하세요.");	
        		this.Div05.edt_MB_PW01.setFocus();
        		return false;
        	}
        	if(this.gfn_isNull(this.Div05.edt_MB_PW02.value)){
        		alert("비밀번호확인을 입력 하세요.");	
        		this.Div05.edt_MB_PW02.setFocus();
        		return false;
        	}	
        	if(this.gfn_isNull(this.Div05.edt_BIRTH.value)){
        		alert("생년월일을 입력 하세요 ");	
        		this.Div05.edt_BIRTH.setFocus();
        		return false;
        	}
        	if(this.Div05.edt_BIRTH.text.substring(0,2)  == "00" )  {
        				
        		alert("생년월일을 6자리로 입력시 생년월일은 8자리 형식(19600101)으로 입력하셔야 합니다");		
        		this.Div05.edt_BIRTH.setFocus();
        		return false;			
        								
        	}
        	if(this.gfn_isNull(this.Div05.rdo_SEX_DSC.value)){
        		alert("성별을 선택하세요.");	
        		this.Div05.rdo_SEX_DSC.setFocus();
        		return false;
        	}
        	if(this.gfn_isNull(this.Div05.edt_USR_EMAIL01.value)){
        		alert("이메일을 입력 하세요.");	
        		this.Div05.edt_USR_EMAIL01.setFocus();
        		return false;
        	}
        	if(this.gfn_isNull(this.Div05.edt_USR_EMAIL02.value)){
        		alert("이메일을 입력 하세요.");	
        		this.Div05.edt_USR_EMAIL02.setFocus();
        		return false;
        	}
        	 
        	if(this.gfn_isNull(this.Div05.cbo_HP.value)){
        		alert("휴대전화를 선택 하세요.");	
        		this.Div05.cbo_HP.setFocus();
        		return false;
        	}
        	if(this.gfn_isNull(this.Div05.edt_HP01.value)){
        		alert("휴대전화를 입력 하세요.");	
        		this.Div05.edt_HP01.setFocus();
        		return false;
        	}
        	if(this.gfn_isNull(this.Div05.edt_HP02.value)){
        		alert("휴대전화를 입력 하세요.");	
        		this.Div05.edt_HP02.setFocus();
        		return false;
        	}
        	if(this.gfn_isNull(this.Div05.edt_CHRG_BSNNM.value)){
        		alert("담당업무를 입력 하세요.");
        		this.Div05.edt_CHRG_BSNNM.setFocus();
        		return false;
        	}
        	if(this.Div05.edt_MB_PW01.value != this.Div05.edt_MB_PW02.value){
        		alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
        		return false;
        	}
        	if(!this.gfn_isDate(this.Div05.edt_BIRTH.value)){
        		alert("회원정보의 생년월일 형식이 잘못되었습니다.");
        		return false;
        	}	
        	if(!this.gfn_checkEmail(this.Div05.edt_USR_EMAIL01.value+"@"+this.Div05.edt_USR_EMAIL02.value)){
        		alert("이메일형식이 잘못되었습니다.");
        		return false;
        	}	
        		
        	if(!this.gfn_isNull(this.Div05.edt_MP00.value) || !this.gfn_isNull(this.Div05.edt_MP01.value) || !this.gfn_isNull(this.Div05.edt_MP02.value)){
        		var USR_TELNO = this.Div05.edt_MP00.value + "-" + this.Div05.edt_MP01.value + "-" + this.Div05.edt_MP02.value;
        		
        		//사무실 전화번호 정규식
        		var regExp = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}/;
        		
        		if ( !regExp.test(USR_TELNO) ) {
        			alert("사무실전화번호 형식이 잘못되었습니다.");
        			this.Div05.edt_MP00.setFocus();
        			return false;
        		}
        		
        	}
        	
        // 	if(this.gfn_isNull(this.Div05.edt_confirmCertificate.value)){
        // 		alert("인증번호를 입력 하세요.");	
        // 		this.Div05.edt_confirmCertificate.setFocus();
        // 		return false;
        // 	}
        // 	if(this.div_hiddenArea.edt_confirm.value != "Y"){
        // 		alert("인증버튼으로 인증번호를 인증 하세요");			
        // 		return false;
        // 	}
        		
        	/*비밀번호 validation검사*/
        	if(!this.gfn_pwValidation(this.Div05.edt_MB_PW01.value)){
        		return false;
        	}
        // 	if(this.gfn_isUpdateColumn(this.ds_officeInfo,0,"NA_TRPL_C")){
        // 		alert("사업장코드가 변경되었습니다. 사업장코드, 바이어개인번호를 확인 후 다시 인증해주시기 바랍니다.");		
        // 		return false;
        // 	}
        	
        	/*권한체크 - 세금계산서 권한은 거래처코드당 1개 이상*/
        	if(this.ds_userInfo.getColumn(0,"TAX_AUTH_CNT") == "0" && this.Div05.chk_TAX_AUTH.value == "N"){
        		alert("거래처 번호에 해당하는 세금계산서 권한을 가진 회원이 없습니다.\n 세금계산서 권한을 선택해주세요.");
        		return false;
        	}
        	
        	/*아이디 숫자 대문자 체크*/
        	if(!this.gfn_isNumBig(this.Div05.edt_MB_ID.value)){
        		alert("알파벳은 대문자만 입력 바라며, 사원번호 확인바랍니다.");
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
        	
        	// 7: 전자세금계산서
        	if (this.Div05.chk_TAX_AUTH.value == "Y") {
        		this.ds_svcAuth.addRow();
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "SVC_ID", "7");
        	}
        	
        	// M: 가격할인
        	if (this.Div05.chk_PRICE.value == "Y") {
        		this.ds_svcAuth.addRow();
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "SVC_ID", "M");
        	}
        }
         

        /*******************************************************************************************************************
         인증번호생성 및 SMS전송
        ********************************************************************************************************************/
        this.btn_sendSms_onclick = function(obj,e)
        {	
        	if(this.gfn_isNull(this.Div05.cbo_HP.value)){
        		alert("휴대번호를 선택하세요.");	
        		this.Div05.cbo_HP.setFocus();
        		return false;
        	}
        	if(this.gfn_isNull(this.Div05.edt_HP01.value)){
        		alert("휴대번호를 입력하세요.");	
        		this.Div05.edt_HP01.setFocus();
        		return false;
        	}
        	if(this.gfn_isNull(this.Div05.edt_HP02.value)){
        		alert("휴대번호를 입력하세요.");	
        		this.Div05.edt_HP02.setFocus();
        		return false;
        	}
        	if(this.gfn_isNull(this.Div05.edt_USR_NM.value)){
        		alert("이름을 입력하세요.");	
        		this.Div05.edt_USR_NM.setFocus();
        		return false;
        	}
        		
        	var param 		  = "hp="+this.Div05.cbo_HP.value+this.Div05.edt_HP01.value+this.Div05.edt_HP02.value
        						+" usrNM="+this.Div05.edt_USR_NM.value
        	;
        	var sSvcID        = "sendSms";
        	var sURL          = "svc::rest/pt/sendSms";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_certNum=ds_certNum";	
        	var sArgument     =  param;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회	
        	 
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        
        /*******************************************************************************************************************
         인증번호 확인
        ********************************************************************************************************************/
        this.btn_certificate_onclick = function(obj,e)
        {	
        	this.div_hiddenArea.edt_confirm.set_value("Y");		
        	if(this.gfn_isNull(this.Div05.edt_confirmCertificate.value)){
        		alert("인증번호를 입력 하세요");	
        		this.Div05.edt_confirmCertificate.setFocus();		
        		return false;
        	}
        	
        	if(this.div_hiddenArea.edt_randomNumber.value != this.Div05.edt_confirmCertificate.value){
        		this.div_hiddenArea.edt_confirm.set_value("N");
        		alert("입력하신 인증번호를 확인하시기 바랍니다.");
        		return;
        	}else{		
        		this.Div05.cbo_HP.set_readonly(true);
        		this.Div05.edt_HP01.set_readonly(true);
        		this.Div05.edt_HP02.set_readonly(true);
        		this.Div05.edt_confirmCertificate.set_readonly(true);
        		this.Div05.cbo_HP.style.set_background("#f0f0f0");
        		this.Div05.edt_HP01.style.set_background("#f0f0f0");
        		this.Div05.edt_HP02.style.set_background("#f0f0f0");
        		this.Div05.edt_confirmCertificate.style.set_background("#f0f0f0");
        		this.Div05.btn_certificate.set_enable(false);
        		this.Div05.btn_sendSms.set_enable(false);
        		alert("정상 처리되었습니다.");		
        	}
        }

        
        /******** 공인인증서 서명 프로그램 설치 ***********/
        this.fn_checkOpenWebSign = function()
        {	
        	var obj  = this.lookup("objWeb");
        	if(!this.gfn_isNull(obj))
        	{
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

        /******** 공인인증서 서명 프로그램 설치 ***********/

        /*******************************************************************************************************************
         callback메소드
        ********************************************************************************************************************/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {		
        	//if(svcID =="retrieveBuyerInfo"){
        	if(svcID =="retrieveOfficeInfo"){

        		var naTrplC = this.ds_officeInfo.getColumn(0,"NA_TRPL_C");
        		var mbId  = this.ds_userInfo.getColumn(0,"MB_ID");
        	
        		if(ErrorCode == -2 ){
        			this.gfn_getMessage("alert", "error.message.dupBuyerId");
        			this.ds_userInfo.clearData();
        			this.ds_officeInfo.clearData();			
        			this.ds_userInfo.addRow();
        			this.ds_officeInfo.addRow();			
        			this.Div05.edt_NA_TRPL_C.set_value(naTrplC);
        			this.Div05.edt_MB_ID.set_value(mbId);
        			this.Div05.edt_BZNO01.set_value(this.sBzNO1);
        			this.Div05.edt_BZNO02.set_value(this.sBzNO2);
        			this.Div05.edt_BZNO03.set_value(this.sBzNO3);			
        		}else if(ErrorCode == -1){
        			//this.gfn_getMessage("alert", "error.message.noUserCIF");
        			alert("메신저에 사용자정보가 존재하지 않습니다.\n하나로 톡 메신저에 먼저 등록해 주시기 바랍니다.\n\n[문의] 경제정보화팀 김병훈 과장(02-2126-3021)");
        			this.ds_userInfo.clearData();
        			this.ds_officeInfo.clearData();			
        			this.ds_userInfo.addRow();
        			this.ds_officeInfo.addRow();			
        			this.Div05.edt_NA_TRPL_C.set_value(naTrplC);
        			this.Div05.edt_MB_ID.set_value(mbId);
        			this.Div05.edt_BZNO01.set_value(this.sBzNO1);
        			this.Div05.edt_BZNO02.set_value(this.sBzNO2);
        			this.Div05.edt_BZNO03.set_value(this.sBzNO3);			
        		}else if(ErrorCode >=0){
        			this.Div05.edt_BZNO01.set_value(this.sBzNO1);
        			this.Div05.edt_BZNO02.set_value(this.sBzNO2);
        			this.Div05.edt_BZNO03.set_value(this.sBzNO3);			
        			this.div_hiddenArea.edt_finalNaTrplC.set_value(this.ds_officeInfo.getColumn(0,"NA_TRPL_C"));
        			this.Div05.edt_MB_ID.set_readonly(true);
        			this.Div05.edt_MB_ID.style.set_background("#f0f0f0");
        		}
        	}else if(svcID =="sendSms"){		
        		if(ErrorCode < 0 ){
        			this.gfn_getMessage("alert", "error.message.server.exception");
        		}else{
        			alert("고객님의 휴대전화로 인증번호가 발송되었습니다.");
        			this.div_hiddenArea.edt_randomNumber.set_value(this.ds_certNum.getColumn(0,"CERT_NUM"));
        			//alert("인증번호 :: "+this.div_hiddenArea.edt_randomNumber.value);
        		}
        	}else if(svcID =="insertMB"){
         		if(ErrorCode < 0 ){
         			this.gfn_getMessage("alert", "error.message.server.exception");
         		}else{
        			alert("정상 처리 되었습니다.");
        			this.close();			
        		}
        	}else if(svcID =="retrieveOfficeInfo2"){
        		var naTrplC = this.ds_officeInfo.getColumn(0,"NA_TRPL_C");
        		var mbId  = this.ds_userInfo.getColumn(0,"MB_ID");
        	
        		if(ErrorCode == -2 ){
        			this.gfn_getMessage("alert", "error.message.dupBuyerId");
        			this.ds_userInfo.clearData();
        			this.ds_officeInfo.clearData();			
        			this.ds_userInfo.addRow();
        			this.ds_officeInfo.addRow();			
        			this.Div05.edt_NA_TRPL_C.set_value(naTrplC);
        			this.Div05.edt_MB_ID.set_value(mbId);
        			this.Div05.edt_BZNO01.set_value(this.sBzNO1);
        			this.Div05.edt_BZNO02.set_value(this.sBzNO2);
        			this.Div05.edt_BZNO03.set_value(this.sBzNO3);			
        		}else if(ErrorCode == -1){
        			//this.gfn_getMessage("alert", "error.message.noUserCIF");
        			alert("메신저에 사용자정보가 존재하지 않습니다.\n하나로 톡 메신저에 먼저 등록해 주시기 바랍니다.\n\n[문의] 경제정보화팀 김병훈 과장(02-2126-3021)");
        			this.ds_userInfo.clearData();
        			this.ds_officeInfo.clearData();			
        			this.ds_userInfo.addRow();
        			this.ds_officeInfo.addRow();			
        			this.Div05.edt_NA_TRPL_C.set_value(naTrplC);
        			this.Div05.edt_MB_ID.set_value(mbId);
        			this.Div05.edt_BZNO01.set_value(this.sBzNO1);
        			this.Div05.edt_BZNO02.set_value(this.sBzNO2);
        			this.Div05.edt_BZNO03.set_value(this.sBzNO3);			
        		}else if(ErrorCode >=0){
        			this.Div05.edt_BZNO01.set_value(this.sBzNO1);
        			this.Div05.edt_BZNO02.set_value(this.sBzNO2);
        			this.Div05.edt_BZNO03.set_value(this.sBzNO3);			
        			this.div_hiddenArea.edt_finalNaTrplC.set_value(this.ds_officeInfo.getColumn(0,"NA_TRPL_C"));
        			this.Div05.edt_MB_ID.set_readonly(true);
        			this.Div05.edt_MB_ID.style.set_background("#f0f0f0");
        		}
        	}
        }
        	
        // 회원가입 전 유저를 인증하는 함수
        //input_params = id, email
        this.Div05_btn_usr_cert_by_id_email_onclick_backup = function(obj,e)
        {
        	if(this.Div05.edt_MB_ID.getLength() < 8 ){
        		alert("사원번호는 8자리 이상 입력바랍니다..");
        		return false;
        	}
        		
        	if(this.gfn_isNull(this.Div05.edt_BZNO01.value) || this.Div05.edt_BZNO01.getLength() !=3){		
        		alert("사업자번호를 확인해주세요.");
        		this.Div05.edt_BZNO01.setFocus();
        		return;
        	}
        	if(this.gfn_isNull(this.Div05.edt_BZNO02.value) || this.Div05.edt_BZNO02.getLength() !=2){		
        		alert("사업자번호를 확인해주세요.");
        		this.Div05.edt_BZNO02.setFocus();
        		return;
        	}
        	if(this.gfn_isNull(this.Div05.edt_BZNO03.value) || this.Div05.edt_BZNO03.getLength() !=5){
        		alert("사업자번호를 확인해주세요.");
        		this.Div05.edt_BZNO03.setFocus();
        		return;
        	}
        	if(this.gfn_isNull(this.Div05.edt_MB_ID.value)){
        		alert("바이어개인번호를 확인해주세요.");
        		this.Div05.edt_MB_ID.setFocus();
        		return;
        	}
         	if(this.Div05.edt_MB_ID.getLength() < 8){
        		alert("바이어개인번호는 반드시 8자리 이상입니다.");	
        		this.Div05.edt_MB_ID.setFocus();
        		return false;
        	}
        	console.log(this.ds_userInfo);
        	var param =   "bzNo1="+this.Div05.edt_BZNO01.value 
        				+" bzNo2="+this.Div05.edt_BZNO02.value				
        				+" bzNo3="+this.Div05.edt_BZNO03.value				
        				+" naTrplC="+this.Div05.edt_NA_TRPL_C.value				
        				+" mbId="+this.Div05.edt_MB_ID.value				
        				
        				 ;
        				
        	var sSvcID        = "retrieveOfficeInfo";
        	var sURL          = "svc::rest/pt/usrinf/retrieveOfficeInfo";
        	var sInDatasets   = "ds_userInfo=ds_userInfo";
        	var sOutDatasets  = "ds_officeInfo=ds_officeInfo ds_userInfo=ds_userInfo";
        	var sArgument     =  param;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회	
        	 
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        //인증창 클릭시 인증 팝업을 띄우는 함수
        this.Div05_btn_usr_cert_by_id_email_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"U"};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("wrs_lclc","POPUP::POPUP_SELF_AUTH.xfdl",oArg,sOption,sPopupCallBack);
        }

        //팝업창 이후 후 처리 함수
        this.fn_popupAfter = function(strId,strVal)
        {
        	console.log(strId);
        	console.log(strVal);
        	
        // 	if (strVal != undefined) {
        // 		if (strId == "wrs_lclc") {
        // 			let ds_officeInfo_obj = JSON.parse(strVal);
        // 			console.log(ds_officeInfo_obj);
        // 			//json으로 받아온 값을 데이터 셋의 컬럼에 맞추어 값을 주입하는 과정
        // 			for(let i=0; i<this.ds_officeInfo.getColCount(); i++){
        // 				this.ds_officeInfo.setColumn(0,this.ds_officeInfo.getColID(i),ds_officeInfo_obj[this.ds_officeInfo.getColID(i)]);
        // 				console.log(this.ds_officeInfo.getColID(i));
        // 				console.log(ds_officeInfo_obj[this.ds_officeInfo.getColID(i)]);
        // 			}
        // 			console.log(this.ds_officeInfo);
        // 			
        // 			this.Div05.edt_MB_ID.set_enable(true);
        // 			this.Div05.edt_USR_NM.set_enable(true);
        // 			this.Div05.edt_MB_PW01.set_enable(true);
        // 			this.Div05.edt_MB_PW02.set_enable(true);
        // 			this.Div05.edt_BIRTH.set_enable(true);
        // 			this.Div05.rdo_SEX_DSC.set_enable(true);
        // 			this.Div05.edt_USR_EMAIL01.set_enable(true);
        // 			this.Div05.edt_USR_EMAIL02.set_enable(true);
        // 			this.Div05.cbo_HP.set_enable(true);
        // 			this.Div05.edt_HP01.set_enable(true);
        // 			this.Div05.edt_HP02.set_enable(true);
        // 			this.Div05.edt_MP00.set_enable(true);
        // 			this.Div05.edt_MP01.set_enable(true);
        // 			this.Div05.edt_MP02.set_enable(true);
        // 			this.Div05.chk_WEBHARD_AUTH.set_enable(true);
        // 			this.Div05.chk_CONTRACT_AUTH.set_enable(true);
        // 			this.Div05.chk_BUSINESS_TALK_AUTH.set_enable(true);
        // 			this.Div05.chk_TAX_AUTH.set_enable(true);
        // 			this.Div05.chk_PRICE.set_enable(true);
        // 			this.Div05.edt_CHRG_BSNNM.set_enable(true);
        // 		}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Div01.Div02.btn_notAgree.addEventHandler("onclick", this.Div01_Div02_btn_notAgree_onclick, this);
            this.Div01.Div02.btn_agree.addEventHandler("onclick", this.Div01_Div02_btn_agree_onclick, this);
            this.Div01.argee02.addEventHandler("oneditclick", this.Div01_TextArea00_oneditclick, this);
            this.Div01.chk_allAgree.addEventHandler("onclick", this.Div01_chk_allAgree_onclick, this);
            this.Div01.Static01.addEventHandler("onclick", this.Div01_Static01_onclick, this);
            this.Div01.Static02.addEventHandler("onclick", this.Div01_Static01_onclick, this);
            this.Div01.Static03.addEventHandler("onclick", this.Div01_Static01_onclick, this);
            this.Div01.Static04.addEventHandler("onclick", this.Div01_Static01_onclick, this);
            this.Div01.txa_arr01.addEventHandler("oneditclick", this.Div01_TextArea00_oneditclick, this);
            this.Div05.Div02.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.Div05.Static03.addEventHandler("onclick", this.Div05_Static03_onclick, this);
            this.Div05.edt_MB_ID.addEventHandler("oneditclick", this.Div05_edt_MB_ID_oneditclick, this);
            this.Div05.edt_MB_ID.addEventHandler("onchanged", this.Div05_edt_MB_ID_onchanged, this);
            this.Div05.btn_sendSms.addEventHandler("onclick", this.btn_sendSms_onclick, this);
            this.Div05.btn_certificate.addEventHandler("onclick", this.btn_certificate_onclick, this);
            this.Div05.btn_cert.addEventHandler("onclick", this.Div05_btn_cert_onclick, this);
            this.Div05.Static10.addEventHandler("onclick", this.Div05_Static03_onclick, this);
            this.Div05.rdo_SEX_DSC.addEventHandler("onitemclick", this.Radio00_onitemclick, this);
            this.Div05.Static13.addEventHandler("onclick", this.Div05_Static13_onclick, this);
            this.Div05.Static14.addEventHandler("onclick", this.Div05_Static13_onclick, this);
            this.Div05.btn_usr_cert_by_id_email.addEventHandler("onclick", this.Div05_btn_usr_cert_by_id_email_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_5111.xfdl");

       
    };
}
)();
