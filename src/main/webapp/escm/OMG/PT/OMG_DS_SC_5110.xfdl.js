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
                this.set_name("OMG_DS_SC_5110");
                this.set_titletext("협력업체회원가입");
                this.set_scrollbars("autovert");
                this._setFormPosition(0,0,750,512);
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

            obj = new Dataset("ds_uploadresult00", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"32\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"32\"/><Column id=\"FILESIZE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"32\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_uploadresult01", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"32\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"32\"/><Column id=\"FILESIZE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"32\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"MB_ID\" type=\"STRING\" size=\"30\"/><Column id=\"MB_PW\" type=\"STRING\" size=\"256\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"30\"/><Column id=\"USR_TELNO\" type=\"STRING\" size=\"30\"/><Column id=\"USR_EMAIL01\" type=\"STRING\" size=\"30\"/><Column id=\"USR_EMAIL02\" type=\"STRING\" size=\"30\"/><Column id=\"SMS_RMS_YN\" type=\"STRING\" size=\"30\"/><Column id=\"EMAIL_RMS_YN\" type=\"STRING\" size=\"30\"/><Column id=\"USR_HP\" type=\"STRING\" size=\"30\"/><Column id=\"HP1\" type=\"STRING\" size=\"30\"/><Column id=\"HP2\" type=\"STRING\" size=\"30\"/><Column id=\"HP3\" type=\"STRING\" size=\"30\"/><Column id=\"BIRTH\" type=\"STRING\" size=\"30\"/><Column id=\"SEX_DSC\" type=\"STRING\" size=\"30\"/><Column id=\"MB_CV_DSC\" type=\"STRING\" size=\"30\"/><Column id=\"BZNO1\" type=\"STRING\" size=\"256\"/><Column id=\"BZNO2\" type=\"STRING\" size=\"256\"/><Column id=\"BZNO3\" type=\"STRING\" size=\"256\"/><Column id=\"USR_TPC\" type=\"STRING\" size=\"30\"/><Column id=\"HOFF_APV_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_payInfo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"STL_METH_DSC\" type=\"STRING\" size=\"128\"/><Column id=\"HOP_DRW_DD\" type=\"STRING\" size=\"128\"/><Column id=\"PSCRP_DSC\" type=\"STRING\" size=\"128\"/><Column id=\"DPR_NO\" type=\"STRING\" size=\"128\"/><Column id=\"BNK_C\" type=\"STRING\" size=\"128\"/><Column id=\"ACNO\" type=\"STRING\" size=\"128\"/><Column id=\"BB_FLNM\" type=\"STRING\" size=\"128\"/><Column id=\"BB_FL_TMPNM\" type=\"STRING\" size=\"128\"/><Column id=\"BZ_RGWRRT_FLNM\" type=\"STRING\" size=\"128\"/><Column id=\"BZ_RGWRRT_FL_TMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"FL_PATHNM\" type=\"STRING\" size=\"128\"/><Column id=\"DRW_FTR_AGR_YN\" type=\"STRING\" size=\"128\"/><Column id=\"FNC_TR_INF_OFR_AGR_YN\" type=\"STRING\" size=\"128\"/><Column id=\"DPRNM\" type=\"STRING\" size=\"128\"/><Column id=\"ELSG_CNTN\" type=\"STRING\" size=\"8000\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_bankCode", this);
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

            obj = new Dataset("ds_entSvc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" type=\"STRING\" size=\"128\"/><Column id=\"MB_ID\" type=\"STRING\" size=\"128\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" type=\"STRING\" size=\"128\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RQ_DSC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_download", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"32\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"32\"/><Column id=\"FILESIZE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"32\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"USR_TPC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"BZNO1\" type=\"STRING\" size=\"30\"/><Column id=\"BZNO2\" type=\"STRING\" size=\"30\"/><Column id=\"BZNO3\" type=\"STRING\" size=\"30\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"30\"/><Column id=\"COMP_TPC\" type=\"STRING\" size=\"30\"/><Column id=\"USR_TELNO\" type=\"STRING\" size=\"30\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"30\"/><Column id=\"REPMNM\" type=\"STRING\" size=\"30\"/><Column id=\"DONGUP\" type=\"STRING\" size=\"30\"/><Column id=\"DONGBW\" type=\"STRING\" size=\"30\"/><Column id=\"FZIP\" type=\"STRING\" size=\"30\"/><Column id=\"RZIP\" type=\"STRING\" size=\"30\"/><Column id=\"TEL1\" type=\"STRING\" size=\"30\"/><Column id=\"TEL2\" type=\"STRING\" size=\"30\"/><Column id=\"TEL3\" type=\"STRING\" size=\"30\"/><Column id=\"NA_MBCO_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BZCCNM\" type=\"STRING\" size=\"60\"/><Column id=\"BZTPNM\" type=\"STRING\" size=\"50\"/><Column id=\"USR_SYS_C\" type=\"STRING\" size=\"2\"/><Column id=\"NAAC_DSC\" type=\"STRING\" size=\"1\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_naTrplCAuth", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USR_AUTH_DSC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" type=\"STRING\" size=\"128\"/><Column id=\"RQ_DSC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_naTrplCAuthIng", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BILING_ING\" type=\"STRING\" size=\"256\"/><Column id=\"TAX_ING\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_vrtlAcNo", this);
            obj._setContents("<ColumnInfo><Column id=\"VRTL_ACNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_branch_bzno", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"BZNO\" type=\"STRING\" size=\"10\"/><Column id=\"REPMNM\" type=\"STRING\" size=\"50\"/><Column id=\"ZIP\" type=\"STRING\" size=\"6\"/><Column id=\"DONGUP\" type=\"STRING\" size=\"300\"/><Column id=\"DONGBW\" type=\"STRING\" size=\"100\"/><Column id=\"BZCCNM\" type=\"STRING\" size=\"60\"/><Column id=\"BZTPNM\" type=\"STRING\" size=\"50\"/><Column id=\"TX_REG\" type=\"STRING\" size=\"4\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static90", "absolute", "18", "60", "717", "20", null, null, this);
            obj.set_taborder("98");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static86", "absolute", "3", "0", "737", "15", null, null, this);
            obj.set_taborder("0");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static87", "absolute", "728", "384", "17", "1178", null, null, this);
            obj.set_taborder("1");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "777", "16", "711", "465", null, null, this);
            obj.set_taborder("95");
            obj.set_text("Div01");
            obj.style.set_background("white");
            obj.set_scrollbars("none");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new TextArea("txa_arr01", "absolute", "17", "127", "677", "117", null, null, this.Div01);
            obj.set_taborder("0");
            obj.set_scrollbars("autovert");
            obj.set_wordwrap("char");
            obj.style.set_padding("5 5 5 5");
            obj.set_readonly("true");
            obj.set_enable("true");
            obj.set_autoselect("false");
            obj.set_tabstop("false");
            this.Div01.addChild(obj.name, obj);
            obj = new CheckBox("chk_agr01", "absolute", "675", "254", "19", "21", null, null, this.Div01);
            obj.set_taborder("1");
            this.Div01.addChild(obj.name, obj);
            obj = new TextArea("txa_arr02", "absolute", "17", "296", "680", "148", null, null, this.Div01);
            obj.set_taborder("2");
            obj.set_scrollbars("autovert");
            obj.set_wordwrap("char");
            obj.set_readonly("true");
            obj.style.set_padding("5 5 5 5");
            obj.style.set_font("12 Gulim");
            obj.set_tabstop("false");
            this.Div01.addChild(obj.name, obj);
            obj = new CheckBox("chk_agr02", "absolute", "675", "446", "19", "21", null, null, this.Div01);
            obj.set_taborder("3");
            this.Div01.addChild(obj.name, obj);
            obj = new Div("Div02", "absolute", "0", "0", "705", "43", null, null, this.Div01);
            obj.set_taborder("6");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "9", "107", "21", null, null, this.Div01.Div02);
            obj.set_taborder("56");
            obj.set_text("약관동의");
            obj.style.set_font("bold 9 arial");
            this.Div01.Div02.addChild(obj.name, obj);
            obj = new Button("btn_notAgree", "absolute", "590", "9", "65", "21", null, null, this.Div01.Div02);
            obj.set_taborder("57");
            obj.set_text("동의안함");
            obj.set_cssclass("btn_WF_CRUD");
            this.Div01.Div02.addChild(obj.name, obj);
            obj = new Button("btn_agree", "absolute", "657", "9", "41", "21", null, null, this.Div01.Div02);
            obj.set_taborder("58");
            obj.set_text("동의");
            obj.set_cssclass("btn_WF_CRUD");
            this.Div01.Div02.addChild(obj.name, obj);
            obj = new TextArea("argee02", "absolute", "17", "64", null, "36", "17", null, this.Div01);
            obj.set_taborder("7");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "91", "66", "456", "30", null, null, this.Div01);
            obj.set_taborder("8");
            obj.set_text("Static00");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);
            obj = new CheckBox("chk_allAgree", "absolute", "577", "72", "46", "21", null, null, this.Div01);
            obj.set_taborder("9");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "17", "106", "542", "21", null, null, this.Div01);
            obj.set_taborder("10");
            obj.set_text("Static01");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "423", "254", "252", "21", null, null, this.Div01);
            obj.set_taborder("11");
            obj.set_text("하나로eSCM 서비스 이용약관에 동의합니다.");
            obj.set_usedecorate("true");
            obj.style.set_color("red");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "17", "275", "677", "21", null, null, this.Div01);
            obj.set_taborder("12");
            obj.set_text("Static03");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "351", "446", "321", "21", null, null, this.Div01);
            obj.set_taborder("13");
            obj.set_text("하나로eSCM 서비스 개인정보 수집 및 이용에 동의합니다.");
            obj.set_usedecorate("true");
            obj.style.set_color("red");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("div_hiddenArea", "absolute", "777", "520", "484", "166", null, null, this);
            obj.set_taborder("99");
            obj.set_text("div_hiddenArea");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Edit("edt_randomNumber", "absolute", "15", "9", "138", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("16");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_sealVal", "absolute", "174", "9", "138", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("18");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_sealName", "absolute", "174", "41", "138", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("19");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_USR_TPC", "absolute", "320", "9", "138", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("20");
            obj.set_value("01");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_finalMbId", "absolute", "318", "41", "138", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("21");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_confirm", "absolute", "15", "38", "138", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("22");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_BZNO1", "absolute", "15", "70", "28.51%", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("23");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_BZNO2", "absolute", "175", "70", "28.51%", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("24");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_BZNO3", "absolute", "320", "70", "28.51%", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("25");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_chgSvcYn", "absolute", "15", "102", "28.51%", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("26");
            obj.set_value("N");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_chgAuthYn", "absolute", "167", "102", "28.51%", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("27");
            obj.set_value("N");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_chgBillingYn", "absolute", "319", "102", "28.51%", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("28");
            obj.set_value("N");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_chgSealAmnYn", "absolute", "320", "131", "28.51%", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("29");
            obj.set_value("N");
            this.div_hiddenArea.addChild(obj.name, obj);

            obj = new Div("Div05", "absolute", "17", "16", "711", "1750", null, null, this);
            obj.set_taborder("100");
            obj.set_text("Div01");
            obj.style.set_background("transparent");
            obj.set_visible("false");
            obj.set_scrollbars("autovert");
            obj.set_dragscrolltype("both");
            this.addChild(obj.name, obj);
            obj = new Static("Static124", "absolute", "0", "512", "711", "29", null, null, this.Div05);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static91", "absolute", "0", "87", "711", "29", null, null, this.Div05);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new CheckBox("chk_CONTRACT_AUTH", "absolute", "201", "516", "90", "21", null, null, this.Div05);
            obj.set_taborder("20");
            obj.set_text("전자계약");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static103", "absolute", "0", "199", "711", "58", null, null, this.Div05);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static101", "absolute", "0", "171", "711", "29", null, null, this.Div05);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static98", "absolute", "0", "143", "711", "29", null, null, this.Div05);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static95", "absolute", "0", "115", "711", "29", null, null, this.Div05);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Div("Div02", "absolute", "0", "0", "711", "43", null, null, this.Div05);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Button("btn_save", "absolute", "634", "9", "65", "21", null, null, this.Div05.Div02);
            obj.set_taborder("57");
            obj.set_text("가입신청");
            obj.set_cssclass("btn_WF_CRUD");
            this.Div05.Div02.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "9", "143", "21", null, null, this.Div05.Div02);
            obj.set_taborder("58");
            obj.set_text("협력업체 회원가입");
            obj.style.set_font("bold 9 arial");
            this.Div05.Div02.addChild(obj.name, obj);
            obj = new Button("btn_prev", "absolute", "564", "9", "65", "21", null, null, this.Div05.Div02);
            obj.set_taborder("59");
            obj.set_text("이전화면");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.Div05.Div02.addChild(obj.name, obj);
            obj = new Static("Static89", "absolute", "0", "63", "135", "21", null, null, this.Div05);
            obj.set_taborder("22");
            obj.set_text("회사 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static92", "absolute", "0", "87", "120", "29", null, null, this.Div05);
            obj.set_taborder("23");
            obj.set_text("본사 사업자번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static94", "absolute", "0", "115", "120", "29", null, null, this.Div05);
            obj.set_taborder("24");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static97", "absolute", "0", "143", "120", "29", null, null, this.Div05);
            obj.set_taborder("25");
            obj.set_text("대표자명");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static100", "absolute", "0", "171", "120", "29", null, null, this.Div05);
            obj.set_taborder("26");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static102", "absolute", "0", "199", "120", "58", null, null, this.Div05);
            obj.set_taborder("27");
            obj.set_text("회사주소");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static93", "absolute", "336", "115", "135", "29", null, null, this.Div05);
            obj.set_taborder("32");
            obj.set_text("거래처코드");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static99", "absolute", "336", "171", "135", "29", null, null, this.Div05);
            obj.set_taborder("33");
            obj.set_text("업체유형");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static129", "absolute", "158", "91", "9", "21", null, null, this.Div05);
            obj.set_taborder("35");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_BZNO02", "absolute", "167", "91", "30", "21", null, null, this.Div05);
            obj.set_taborder("2");
            obj.set_readonly("false");
            obj.set_maxlength("2");
            obj.set_enable("true");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_REPMNM", "absolute", "123", "147", "180", "21", null, null, this.Div05);
            obj.set_taborder("36");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_RZIP", "absolute", "167", "175", "35", "21", null, null, this.Div05);
            obj.set_taborder("37");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static133", "absolute", "160", "174", "9", "21", null, null, this.Div05);
            obj.set_taborder("38");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_FZIP", "absolute", "123", "175", "35", "21", null, null, this.Div05);
            obj.set_taborder("39");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_DONGBW", "absolute", "123", "205", "583", "21", null, null, this.Div05);
            obj.set_taborder("40");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_DONGUP", "absolute", "123", "230", "583", "21", null, null, this.Div05);
            obj.set_taborder("41");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            this.Div05.addChild(obj.name, obj);
            obj = new Radio("rdo_COMP_TPC", "absolute", "478", "176", "226", "21", null, null, this.Div05);
            this.Div05.addChild(obj.name, obj);
            var rdo_COMP_TPC_innerdataset = new Dataset("rdo_COMP_TPC_innerdataset", this.Div05.rdo_COMP_TPC);
            rdo_COMP_TPC_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1010</Col><Col id=\"datacolumn\">공급업체</Col></Row><Row><Col id=\"codecolumn\">1020</Col><Col id=\"datacolumn\">쿠폰관리</Col></Row><Row><Col id=\"codecolumn\">1030</Col><Col id=\"datacolumn\">위탁업체</Col></Row></Rows>");
            obj.set_innerdataset(rdo_COMP_TPC_innerdataset);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_value("1010");
            obj.style.set_textpadding("0 0 0 5");
            obj.style.set_padding("2 0 0 0");
            obj.set_index("0");
            obj = new Static("Static00", "absolute", "197", "91", "9", "21", null, null, this.Div05);
            obj.set_taborder("42");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "277", "135", "21", null, null, this.Div05);
            obj.set_taborder("43");
            obj.set_text("회원 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static107", "absolute", "0", "301", "711", "29", null, null, this.Div05);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "329", "711", "29", null, null, this.Div05);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static113", "absolute", "0", "385", "711", "29", null, null, this.Div05);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static115", "absolute", "0", "413", "711", "29", null, null, this.Div05);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static120", "absolute", "0", "441", "711", "29", null, null, this.Div05);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static114", "absolute", "336", "143", "135", "29", null, null, this.Div05);
            obj.set_taborder("50");
            obj.set_text("대표전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0", "385", "120", "29", null, null, this.Div05);
            obj.set_taborder("51");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static109", "absolute", "0", "329", "120", "29", null, null, this.Div05);
            obj.set_taborder("52");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static106", "absolute", "0", "301", "120", "29", null, null, this.Div05);
            obj.set_taborder("53");
            obj.set_text("회원ID");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptype("default");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static121", "absolute", "1", "489", "135", "21", null, null, this.Div05);
            obj.set_taborder("54");
            obj.set_text("권한 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.Div05.addChild(obj.name, obj);
            obj = new CheckBox("chk_TAX_AUTH", "absolute", "300", "516", "98", "21", null, null, this.Div05);
            obj.set_taborder("21");
            obj.set_text("세금계산서");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.Div05.addChild(obj.name, obj);
            obj = new CheckBox("chk_BILLING_AUTH", "absolute", "125", "516", "58", "21", null, null, this.Div05);
            obj.set_taborder("19");
            obj.set_text("빌링");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static118", "absolute", "0", "583", "711", "58", null, null, this.Div05);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_confirmCertificate", "absolute", "123", "615", "89", "21", null, null, this.Div05);
            obj.set_taborder("16");
            obj.set_inputtype("number");
            obj.set_maxlength("6");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);
            obj = new CheckBox("chk_SMS_YN", "absolute", "125", "447", "58", "21", null, null, this.Div05);
            obj.set_taborder("17");
            obj.set_text("SMS");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.Div05.addChild(obj.name, obj);
            obj = new CheckBox("chk_MAIL_YN", "absolute", "201", "447", "58", "21", null, null, this.Div05);
            obj.set_taborder("18");
            obj.set_text("메일");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_TEL02", "absolute", "532", "147", "48", "21", null, null, this.Div05);
            obj.set_taborder("57");
            obj.set_inputtype("number");
            obj.set_readonly("true");
            obj.set_maxlength("4");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_TEL03", "absolute", "591", "147", "48", "21", null, null, this.Div05);
            obj.set_taborder("58");
            obj.set_inputtype("number");
            obj.set_readonly("true");
            obj.set_maxlength("4");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_USR_EMAIL01", "absolute", "123", "389", "122", "21", null, null, this.Div05);
            obj.set_taborder("11");
            obj.set_maxlength("25");
            obj.set_enable("true");
            obj.set_imemode("alpha");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_MB_PW01", "absolute", "123", "333", "183", "21", null, null, this.Div05);
            obj.set_taborder("7");
            obj.set_maxlength("16");
            obj.set_password("true");
            obj.set_tabstop("true");
            obj.set_lengthunit("utf8");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_MB_ID", "absolute", "123", "305", "122", "21", null, null, this.Div05);
            obj.set_taborder("5");
            obj.set_inputtype("number,english");
            obj.set_maxlength("9");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_USR_EMAIL02", "absolute", "264", "389", "122", "21", null, null, this.Div05);
            obj.set_taborder("12");
            obj.set_maxlength("25");
            obj.set_enable("true");
            obj.set_imemode("alpha");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static134", "absolute", "250", "389", "13", "21", null, null, this.Div05);
            obj.set_taborder("59");
            obj.set_text("@");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "336", "301", "135", "29", null, null, this.Div05);
            obj.set_taborder("60");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static111", "absolute", "336", "329", "135", "29", null, null, this.Div05);
            obj.set_taborder("61");
            obj.set_text("비밀번호 확인");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_USR_NM", "absolute", "474", "305", "180", "21", null, null, this.Div05);
            obj.set_taborder("6");
            obj.set_maxlength("16");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_MB_PW02", "absolute", "474", "333", "180", "21", null, null, this.Div05);
            obj.set_taborder("8");
            obj.set_maxlength("16");
            obj.set_password("true");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static116", "absolute", "0", "413", "120", "29", null, null, this.Div05);
            obj.set_taborder("62");
            obj.set_text("휴대전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Combo("cbo_HP", "absolute", "123", "417", "51", "21", null, null, this.Div05);
            this.Div05.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.set_innerdataset("ds_hpNo");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_readonly("false");
            obj.set_index("-1");
            obj = new Static("Static125", "absolute", "174", "417", "9", "21", null, null, this.Div05);
            obj.set_taborder("63");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_HP01", "absolute", "183", "417", "48", "21", null, null, this.Div05);
            obj.set_taborder("14");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_readonly("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static126", "absolute", "231", "417", "9", "21", null, null, this.Div05);
            obj.set_taborder("64");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_HP02", "absolute", "240", "417", "48", "21", null, null, this.Div05);
            obj.set_taborder("15");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_readonly("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "522", "147", "9", "21", null, null, this.Div05);
            obj.set_taborder("65");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "581", "147", "9", "21", null, null, this.Div05);
            obj.set_taborder("66");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static119", "absolute", "0", "441", "120", "29", null, null, this.Div05);
            obj.set_taborder("67");
            obj.set_text("수신 서비스");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "0", "583", "120", "58", null, null, this.Div05);
            obj.set_taborder("68");
            obj.set_text("휴대전화인증");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Button("btn_sendSms", "absolute", "123", "589", "89", "21", null, null, this.Div05);
            obj.set_taborder("69");
            obj.set_text("인증번호생성");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "223", "589", "297", "21", null, null, this.Div05);
            obj.set_taborder("70");
            obj.set_text("인증번호를 생성하여 등록된 휴대폰으로 전송합니다.");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Button("btn_certificate", "absolute", "221", "615", "41", "21", null, null, this.Div05);
            obj.set_taborder("71");
            obj.set_text("인증");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_CLNTNM", "absolute", "123", "119", "180", "21", null, null, this.Div05);
            obj.set_taborder("72");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "0", "512", "120", "29", null, null, this.Div05);
            obj.set_taborder("73");
            obj.set_text("회원권한");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Div("Div03", "absolute", "0", "665", "719", "1070", null, null, this.Div05);
            obj.set_taborder("74");
            obj.style.set_background("transparent");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static44", "absolute", "0", "136", null, "29", "8", null, this.Div05.Div03);
            obj.set_taborder("94");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0", "108", null, "29", "8", null, this.Div05.Div03);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static121", "absolute", "1", "0", "135", "21", null, null, this.Div05.Div03);
            obj.set_taborder("2");
            obj.set_text("서비스 이용");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static124", "absolute", "0", "23", "711", "58", null, null, this.Div05.Div03);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "80", "711", "29", null, null, this.Div05.Div03);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static123", "absolute", "0", "23", "120", "58", null, null, this.Div05.Div03);
            obj.set_taborder("5");
            obj.set_text("SCM서비스 이용");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "80", "120", "29", null, null, this.Div05.Div03);
            obj.set_taborder("6");
            obj.set_text("부가정보 이용");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "108", "120", "29", null, null, this.Div05.Div03);
            obj.set_taborder("7");
            obj.set_text("정보분석 이용");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new CheckBox("cbk_SVC31", "absolute", "125", "113", "58", "21", null, null, this.Div05.Div03);
            obj.set_taborder("31");
            obj.set_text("BI조회");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new CheckBox("cbk_SVC32", "absolute", "198", "113", "74", "21", null, null, this.Div05.Div03);
            obj.set_taborder("32");
            obj.set_text("추이분석");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new CheckBox("cbk_SVC33", "absolute", "284", "113", "112", "21", null, null, this.Div05.Div03);
            obj.set_taborder("33");
            obj.set_text("시장분석(자사)");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new CheckBox("cbk_SVC34", "absolute", "405", "113", "132", "21", null, null, this.Div05.Div03);
            obj.set_taborder("34");
            obj.set_text("카테고리 시장분석");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "0", "604", "711", "29", null, null, this.Div05.Div03);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "0", "632", "711", "29", null, null, this.Div05.Div03);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static110", "absolute", "0", "660", "711", "29", null, null, this.Div05.Div03);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "1", "581", "135", "21", null, null, this.Div05.Div03);
            obj.set_taborder("12");
            obj.set_text("납부 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "0", "688", "711", "29", null, null, this.Div05.Div03);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static111", "absolute", "336", "660", "135", "29", null, null, this.Div05.Div03);
            obj.set_taborder("14");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "336", "688", "135", "29", null, null, this.Div05.Div03);
            obj.set_taborder("15");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0", "772", "711", "145", null, null, this.Div05.Div03);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "0", "772", "120", "145", null, null, this.Div05.Div03);
            obj.set_taborder("17");
            obj.set_text("예금주의\r\n출금이체동의서");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "0", "604", "120", "29", null, null, this.Div05.Div03);
            obj.set_taborder("18");
            obj.set_text("결제방식");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "0", "632", "120", "29", null, null, this.Div05.Div03);
            obj.set_taborder("19");
            obj.set_text("희망출금일");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static109", "absolute", "0", "660", "120", "29", null, null, this.Div05.Div03);
            obj.set_taborder("20");
            obj.set_text("예금주");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static23", "absolute", "0", "688", "120", "29", null, null, this.Div05.Div03);
            obj.set_taborder("21");
            obj.set_text("거래은행");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Radio("rdo_STL_METH_DSC", "absolute", "125", "609", "440", "21", null, null, this.Div05.Div03);
            this.Div05.Div03.addChild(obj.name, obj);
            var rdo_STL_METH_DSC_innerdataset = new Dataset("rdo_STL_METH_DSC_innerdataset", this.Div05.Div03.rdo_STL_METH_DSC);
            rdo_STL_METH_DSC_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">농협자동이체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">자동이체</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">가상계좌</Col></Row></Rows>");
            obj.set_innerdataset(rdo_STL_METH_DSC_innerdataset);
            obj.set_taborder("35");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj = new Radio("rdo_HOP_DRW_DD", "absolute", "125", "638", "293", "21", null, null, this.Div05.Div03);
            this.Div05.Div03.addChild(obj.name, obj);
            var rdo_HOP_DRW_DD_innerdataset = new Dataset("rdo_HOP_DRW_DD_innerdataset", this.Div05.Div03.rdo_HOP_DRW_DD);
            rdo_HOP_DRW_DD_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">15</Col><Col id=\"datacolumn\">15일</Col></Row><Row><Col id=\"codecolumn\">25</Col><Col id=\"datacolumn\">25일</Col></Row></Rows>");
            obj.set_innerdataset(rdo_HOP_DRW_DD_innerdataset);
            obj.set_taborder("36");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj = new Edit("edt_DPRNM", "absolute", "123", "664", "89", "21", null, null, this.Div05.Div03);
            obj.set_taborder("37");
            obj.set_maxlength("100");
            obj.set_lengthunit("utf8");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Radio("rdo_PSCRP_DSC", "absolute", "218", "664", "107", "21", null, null, this.Div05.Div03);
            this.Div05.Div03.addChild(obj.name, obj);
            var rdo_PSCRP_DSC_innerdataset = new Dataset("rdo_PSCRP_DSC_innerdataset", this.Div05.Div03.rdo_PSCRP_DSC);
            rdo_PSCRP_DSC_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">개인</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">법인</Col></Row></Rows>");
            obj.set_innerdataset(rdo_PSCRP_DSC_innerdataset);
            obj.set_taborder("38");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_index("-1");
            obj = new Edit("edt_AC_NO", "absolute", "474", "692", "180", "21", null, null, this.Div05.Div03);
            obj.set_taborder("41");
            obj.set_inputtype("number");
            obj.set_maxlength("15");
            obj.set_inputfilter("dot,comma,sign,symbol,alpha,space");
            obj.set_lengthunit("utf8");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Combo("cbo_BNK_C", "absolute", "123", "692", "210", "21", null, null, this.Div05.Div03);
            this.Div05.Div03.addChild(obj.name, obj);
            obj.set_taborder("40");
            obj.set_innerdataset("@ds_bankCode");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj = new TextArea("txt_contents1", "absolute", "123", "776", "583", "83", null, null, this.Div05.Div03);
            obj.set_taborder("22");
            obj.set_readonly("true");
            obj.style.set_padding("5 5 5 5");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new CheckBox("chk_DRW_FTR_AGR_YN", "absolute", "648", "865", "47", "43", null, null, this.Div05.Div03);
            obj.set_taborder("42");
            obj.set_text("동의");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static122", "absolute", "0", "165", "717", "20", null, null, this.Div05.Div03);
            obj.set_taborder("23");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new MaskEdit("mae_BZNO", "absolute", "475", "664", "90", "21", null, null, this.Div05.Div03);
            obj.set_taborder("24");
            obj.set_type("string");
            obj.set_mask("###-##-#####");
            obj.set_visible("false");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Calendar("mae_BIRTH", "absolute", "475", "664", "110", "21", null, null, this.Div05.Div03);
            this.Div05.Div03.addChild(obj.name, obj);
            obj.set_taborder("39");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static13", "absolute", "0", "716", "711", "29", null, null, this.Div05.Div03);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "0", "744", "711", "29", null, null, this.Div05.Div03);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "0", "716", "120", "29", null, null, this.Div05.Div03);
            obj.set_taborder("27");
            obj.set_text("통장사본");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new FileUpload("FileUpload", "absolute", "121", "720", "585", "24", null, null, this.Div05.Div03);
            obj.set_taborder("28");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new FileUpload("FileUpload00", "absolute", "121", "748", "585", "24", null, null, this.Div05.Div03);
            obj.set_taborder("29");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "0", "744", "120", "29", null, null, this.Div05.Div03);
            obj.set_taborder("30");
            obj.set_text("사업자등록증 사본");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("sta_contents01", "absolute", "126", "865", "71.21%", "43", null, null, this.Div05.Div03);
            obj.set_taborder("43");
            obj.set_text("본사는 상기 자동이체 약관을 준수하여 자동이체를 신청하며 본사가 개설한 결제 계좌를 통한 \r\n자동이체 출금처리에 동의 합니다.");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "0", "916", "98.89%", "145", null, null, this.Div05.Div03);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "0", "916", "16.69%", "145", null, null, this.Div05.Div03);
            obj.set_taborder("45");
            obj.set_text("금융거래 정보의\r\n제공동의서");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new TextArea("txt_contents2", "absolute", "123", "921", "81.08%", "83", null, null, this.Div05.Div03);
            obj.set_taborder("46");
            obj.set_readonly("true");
            obj.style.set_padding("5 5 5 5");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("sta_contents00", "absolute", "126", "1010", "71.21%", "43", null, null, this.Div05.Div03);
            obj.set_taborder("48");
            obj.set_text("본사는 상기 기술된 내용에 대해 상세히 읽어 보았으며, 이를 이해하여 자발적인 의사로\r\n동의합니다.");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new CheckBox("chk_FNC_TR_INF_OFR_AGR_YN", "absolute", "648", "1010", "6.54%", "43", null, null, this.Div05.Div03);
            obj.set_taborder("49");
            obj.set_text("동의");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Radio("rdo_SVC_ID", "absolute", "123", "84", "177", "21", null, null, this.Div05.Div03);
            this.Div05.Div03.addChild(obj.name, obj);
            var rdo_SVC_ID_innerdataset = new Dataset("rdo_SVC_ID_innerdataset", this.Div05.Div03.rdo_SVC_ID);
            rdo_SVC_ID_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">22</Col><Col id=\"datacolumn\">종량제</Col></Row><Row><Col id=\"codecolumn\">21</Col><Col id=\"datacolumn\">정액제</Col></Row></Rows>");
            obj.set_innerdataset(rdo_SVC_ID_innerdataset);
            obj.set_taborder("50");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("22");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Static("Static07", "absolute", "1", "312", "135", "21", null, null, this.Div05.Div03);
            obj.set_taborder("51");
            obj.set_text("청구 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "1", "335", "110", "29", null, null, this.Div05.Div03);
            obj.set_taborder("52");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("sta_CLNTNM", "absolute", "110", "335", null, "29", "9", null, this.Div05.Div03);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static24", "absolute", "1", "363", "110", "29", null, null, this.Div05.Div03);
            obj.set_taborder("56");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static25", "absolute", "110", "363", null, "29", "9", null, this.Div05.Div03);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Edit("edt_B_BZN01_C", "absolute", "115", "367", "40", "21", null, null, this.Div05.Div03);
            obj.set_taborder("58");
            obj.set_inputtype("digit");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("3");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Edit("edt_B_BZN02_C", "absolute", "171", "367", "30", "21", null, null, this.Div05.Div03);
            obj.set_taborder("59");
            obj.set_inputtype("digit");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("2");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Edit("edt_B_BZN03_C", "absolute", "216", "367", "65", "21", null, null, this.Div05.Div03);
            obj.set_taborder("60");
            obj.set_inputtype("digit");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("5");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static26", "absolute", "158", "367", "9", "21", null, null, this.Div05.Div03);
            obj.set_taborder("61");
            obj.set_text("-");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static27", "absolute", "202", "367", "9", "21", null, null, this.Div05.Div03);
            obj.set_taborder("62");
            obj.set_text("-");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static28", "absolute", "1", "391", "110", "29", null, null, this.Div05.Div03);
            obj.set_taborder("63");
            obj.set_text("대표자명");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static29", "absolute", "110", "391", null, "29", "9", null, this.Div05.Div03);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Edit("edt_REPMNM_C", "absolute", "115", "395", "180", "21", null, null, this.Div05.Div03);
            obj.set_taborder("65");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static30", "absolute", "1", "419", "110", "29", null, null, this.Div05.Div03);
            obj.set_taborder("66");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static31", "absolute", "110", "419", null, "29", "9", null, this.Div05.Div03);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Edit("edt_ZIP_C", "absolute", "115", "423", "70", "21", null, null, this.Div05.Div03);
            obj.set_taborder("68");
            obj.set_inputtype("digit");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("6");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static32", "absolute", "1", "447", "110", "58", null, null, this.Div05.Div03);
            obj.set_taborder("69");
            obj.set_text("회사주소");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static33", "absolute", "110", "447", null, "58", "9", null, this.Div05.Div03);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Edit("edt_DONGUP_C", "absolute", "115", "452", null, "21", "14", null, this.Div05.Div03);
            obj.set_taborder("71");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("300");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Edit("edt_DONGBW_C", "absolute", "115", "478", null, "21", "14", null, this.Div05.Div03);
            obj.set_taborder("72");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("100");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static34", "absolute", "1", "504", "110", "29", null, null, this.Div05.Div03);
            obj.set_taborder("73");
            obj.set_text("업태");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static35", "absolute", "110", "504", null, "29", "9", null, this.Div05.Div03);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Edit("edt_BZTPNM_C", "absolute", "115", "508", null, "21", "14", null, this.Div05.Div03);
            obj.set_taborder("75");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static36", "absolute", "1", "532", "110", "29", null, null, this.Div05.Div03);
            obj.set_taborder("76");
            obj.set_text("종목");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static37", "absolute", "110", "532", null, "29", "9", null, this.Div05.Div03);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Edit("edt_BZCCNM_C", "absolute", "115", "536", null, "21", "14", null, this.Div05.Div03);
            obj.set_taborder("78");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("60");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static38", "absolute", "32.68%", "423", null, "21", "49.51%", null, this.Div05.Div03);
            obj.set_taborder("79");
            obj.set_text("('-' 제외)");
            obj.style.set_color("gray");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Edit("edt_REPMNM00_C", "absolute", "115", "339", "180", "21", null, null, this.Div05.Div03);
            obj.set_taborder("80");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static19", "absolute", "2", "561", "717", "20", null, null, this.Div05.Div03);
            obj.set_taborder("81");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new CheckBox("chk_BRANCH_BZBO", "absolute", "562", "312", "139", "21", null, null, this.Div05.Div03);
            obj.set_taborder("82");
            obj.set_text("회사정보와 동일");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static39", "absolute", "0", "292", "717", "20", null, null, this.Div05.Div03);
            obj.set_taborder("84");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static40", "absolute", "1", "185", "155", "21", null, null, this.Div05.Div03);
            obj.set_taborder("85");
            obj.set_text("자사판매정보 제공동의");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static42", "absolute", "0", "208", null, "74", "8", null, this.Div05.Div03);
            obj.set_taborder("87");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("sta_contents02", "absolute", "12", "212", "634", "21", null, null, this.Div05.Div03);
            obj.set_taborder("88");
            obj.set_text("판매상세정보를 이용하기 위해서는 자사판매정보 제공동의를 체크하셔야 이용이 가능합니다.");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("sta_contents03", "absolute", "20", "258", "634", "21", null, null, this.Div05.Div03);
            obj.set_taborder("89");
            obj.set_text("※ 제공동의 체크시 과금은 발생하지 않으며, 서비스 이용시(엑셀 다운로드) 과금이 SKU당 1,500원/월 부과됩니다.");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new CheckBox("cbk_SVC35", "absolute", "21", "235", "160", "21", null, null, this.Div05.Div03);
            obj.set_taborder("83");
            obj.set_text("자사판매정보 제공동의");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static41", "absolute", "367", "363", "126", "29", null, null, this.Div05.Div03);
            obj.set_taborder("90");
            obj.set_text("종사업자번호(선택)");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Edit("edt_TX_BZN", "absolute", "497", "367", "65", "21", null, null, this.Div05.Div03);
            obj.set_taborder("91");
            obj.set_inputtype("digit");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("4");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static43", "absolute", "0", "136", "120", "29", null, null, this.Div05.Div03);
            obj.set_taborder("93");
            obj.set_text("마감서비스");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new CheckBox("cbk_SVC38", "absolute", "125", "140", "98", "21", null, null, this.Div05.Div03);
            obj.set_taborder("92");
            obj.set_text("마감간소화");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "123", "30", "537", "46", null, null, this.Div05.Div03);
            obj.set_taborder("96");
            obj.set_text("SCM업무, EDI서비스, 세금계산서는 기본서비스로 제공됩니다. \r\nEDI서비스, SCM업무는 이용량(KB)에 따라 청구됩니다. 상세정보는 <fc v='blue'>서비스이용료</fc>를 참조바랍니다.");
            obj.set_usedecorate("true");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Button("btn_info2", "absolute", "219", "140", "70", "21", null, null, this.Div05.Div03);
            obj.set_taborder("97");
            obj.set_text("약관보기");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Button("btn_info", "absolute", "613", "29", "91", "21", null, null, this.Div05.Div03);
            obj.set_taborder("95");
            obj.set_text("이용료 안내");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "0", "357", "711", "29", null, null, this.Div05);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "0", "357", "120", "29", null, null, this.Div05);
            obj.set_taborder("75");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "336", "357", "135", "29", null, null, this.Div05);
            obj.set_taborder("77");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Radio("rdo_SEX_DSC", "absolute", "478", "362", "183", "21", null, null, this.Div05);
            this.Div05.addChild(obj.name, obj);
            var rdo_SEX_DSC_innerdataset = new Dataset("rdo_SEX_DSC_innerdataset", this.Div05.rdo_SEX_DSC);
            rdo_SEX_DSC_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">남</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">여</Col></Row></Rows>");
            obj.set_innerdataset(rdo_SEX_DSC_innerdataset);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_value("1");
            obj.set_index("0");
            obj = new Button("btn_checkMbIdDup", "absolute", "248", "305", "65", "21", null, null, this.Div05);
            obj.set_taborder("78");
            obj.set_text("중복확인");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_BZNO01", "absolute", "123", "91", "35", "21", null, null, this.Div05);
            obj.set_taborder("1");
            obj.set_maxlength("3");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static138", "absolute", "1", "549", "447", "21", null, null, this.Div05);
            obj.set_taborder("79");
            obj.set_text("* 업무시간외 회원가입시 익일 업무처리가 됩니다.");
            obj.set_cssclass("sta_WF_DescriptionE02");
            obj.style.set_padding("2 0 0 3");
            this.Div05.addChild(obj.name, obj);
            obj = new Calendar("edt_BIRTH", "absolute", "123", "361", "110", "21", null, null, this.Div05);
            this.Div05.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Edit("edt_BZNO03", "absolute", "206", "91", "65", "21", null, null, this.Div05);
            obj.set_taborder("3");
            obj.set_maxlength("5");
            this.Div05.addChild(obj.name, obj);
            obj = new Button("btn_search", "absolute", "286", "91", "41", "21", null, null, this.Div05);
            obj.set_taborder("80");
            obj.set_text("찾기");
            this.Div05.addChild(obj.name, obj);
            obj = new Combo("cbo_NA_TRPL_C", "absolute", "473", "119", "32.35%", "21", null, null, this.Div05);
            this.Div05.addChild(obj.name, obj);
            obj.set_taborder("81");
            obj.set_innerdataset("@ds_naTrplC");
            obj.set_datacolumn("CLNTNM");
            obj.set_codecolumn("NA_TRPL_C");
            obj.set_tooltiptype("default");
            obj = new Edit("edt_TEL1", "absolute", "473", "147", "48", "21", null, null, this.Div05);
            obj.set_taborder("82");
            obj.set_inputtype("number");
            obj.set_readonly("true");
            obj.set_maxlength("4");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "87", "302", "29", "27", null, null, this.Div05);
            obj.set_taborder("83");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#f2f8faff URL('theme://images/btn_LF_Search_D.png') center middle");
            obj.style.set_border("0 solid #ccd3d5ff");
            obj.set_tooltiptext("7~9자리, 첫2자 영문, 영 숫자조합으로 이루어집니다.");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "87", "330", "29", "27", null, null, this.Div05);
            obj.set_taborder("84");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#f2f8faff URL('theme://images/btn_LF_Search_D.png') center middle");
            obj.style.set_border("0 solid #ccd3d5ff");
            obj.set_tooltiptext("8~16자리 영문,숫자의 조합으로 이루어져야합니다.");
            this.Div05.addChild(obj.name, obj);
            obj = new Plugin("Plugin00", "absolute", "35.72%", "9", null, "24", "37.83%", null, this.Div05);
            obj.setProperty("visible", "false");
            obj.setProperty("classid", "{55D9860A-AB9C-44A1-BB74-75AF7F805333}");
            obj.setProperty("taborder", "85");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "336", "87", "135", "29", null, null, this.Div05);
            obj.set_taborder("86");
            obj.set_text("지사 사업자번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "510", "91", "9", "21", null, null, this.Div05);
            obj.set_taborder("87");
            obj.set_text("-");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_BRC_BZNO2", "absolute", "519", "91", "30", "21", null, null, this.Div05);
            obj.set_taborder("88");
            obj.set_maxlength("2");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "549", "91", "9", "21", null, null, this.Div05);
            obj.set_taborder("89");
            obj.set_text("-");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_BRC_BZNO1", "absolute", "475", "91", "35", "21", null, null, this.Div05);
            obj.set_taborder("90");
            obj.set_maxlength("3");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_BRC_BZNO3", "absolute", "558", "91", "65", "21", null, null, this.Div05);
            obj.set_taborder("91");
            obj.set_maxlength("5");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "18", "273", "717", "20", null, null, this);
            obj.set_taborder("101");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "18", "486", "717", "20", null, null, this);
            obj.set_taborder("102");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 705, 43, this.Div01.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.Div01.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 711, 465, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("95");
            		p.set_text("Div01");
            		p.style.set_background("white");
            		p.set_scrollbars("none");
            		p.set_visible("false");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 484, 166, this.div_hiddenArea,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("99");
            		p.set_text("div_hiddenArea");
            		p.set_visible("false");

            	}
            );
            this.div_hiddenArea.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 711, 43, this.Div05.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.Div05.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 719, 997, this.Div05.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("74");
            		p.style.set_background("transparent");
            		p.set_visible("false");

            	}
            );
            this.Div05.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 711, 1139, this.Div05,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("100");
            		p.set_text("Div01");
            		p.style.set_background("transparent");
            		p.set_visible("false");
            		p.set_scrollbars("autovert");
            		p.set_dragscrolltype("both");

            	}
            );
            this.Div05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 750, 512, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("dddd");
            		p.set_titletext("협력업체회원가입");
            		p.set_scrollbars("autovert");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item5","Div05.edt_BZNO03","value","ds_officeInfo","BZNO3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Div05.edt_BZNO01","value","ds_officeInfo","BZNO1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Div05.edt_BZNO02","value","ds_officeInfo","BZNO2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","Div05.edt_REPMNM","value","ds_officeInfo","REPMNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","Div05.edt_RZIP","value","ds_officeInfo","RZIP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","Div05.edt_FZIP","value","ds_officeInfo","FZIP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div05.edt_DONGBW","value","ds_officeInfo","DONGUP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Div05.edt_DONGUP","value","ds_officeInfo","DONGBW");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","Div05.chk_TAX_AUTH","value","ds_userInfo","TAX_AUTH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","Div05.chk_CONTRACT_AUTH","value","ds_userInfo","CONTRACT_AUTH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","Div05.chk_SMS_YN","value","ds_userInfo","SMS_RMS_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","Div05.chk_MAIL_YN","value","ds_userInfo","EMAIL_RMS_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","Div05.edt_MB_ID","value","ds_userInfo","MB_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Div05.edt_CLNTNM","value","ds_officeInfo","CLNTNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Div05.edt_USR_NM","value","ds_userInfo","USR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Div05.edt_USR_EMAIL01","value","ds_userInfo","USR_EMAIL01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Div05.edt_USR_EMAIL02","value","ds_userInfo","USR_EMAIL02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Div05.Div03.chk_DRW_FTR_AGR_YN","value","ds_payInfo","DRW_FTR_AGR_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Div05.Div03.rdo_STL_METH_DSC","value","ds_payInfo","STL_METH_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","Div05.Div03.rdo_HOP_DRW_DD","value","ds_payInfo","HOP_DRW_DD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","Div05.Div03.edt_DPRNM","value","ds_payInfo","DPRNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","Div05.Div03.rdo_PSCRP_DSC","value","ds_payInfo","PSCRP_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","Div05.Div03.cbo_BNK_C","value","ds_payInfo","BNK_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","Div05.Div03.edt_AC_NO","value","ds_payInfo","ACNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","Div05.rdo_SEX_DSC","value","ds_userInfo","SEX_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","Div05.edt_TEL02","value","ds_officeInfo","TEL2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","Div05.edt_TEL03","value","ds_officeInfo","TEL3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","Div05.cbo_HP","value","ds_userInfo","HP1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","Div05.edt_HP01","value","ds_userInfo","HP2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","Div05.edt_HP02","value","ds_userInfo","HP3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","Div05.edt_MB_PW01","value","ds_userInfo","MB_PW");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","Div05.edt_BIRTH","value","ds_userInfo","BIRTH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Div05.Div03.chk_FNC_TR_INF_OFR_AGR_YN","value","ds_payInfo","FNC_TR_INF_OFR_AGR_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Div05.edt_CLNTNM","tooltiptext","ds_officeInfo","CLNTNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","Div05.edt_TEL01","value","ds_officeInfo","TEL2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","Div05.edt_TEL1","value","ds_officeInfo","TEL1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","Div05.edt_BRC_BZNO2","value","ds_userInfo","BZNO2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","Div05.edt_BRC_BZNO1","value","ds_userInfo","BZNO1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","Div05.edt_BRC_BZNO3","value","ds_userInfo","BZNO3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item38","Div05.Div03.edt_REPMNM00_C","value","ds_branch_bzno","CLNTNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item40","Div05.Div03.edt_REPMNM_C","value","ds_branch_bzno","REPMNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item42","Div05.Div03.edt_ZIP_C","value","ds_branch_bzno","ZIP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item43","Div05.Div03.edt_DONGUP_C","value","ds_branch_bzno","DONGUP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item44","Div05.Div03.edt_DONGBW_C","value","ds_branch_bzno","DONGBW");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item45","Div05.Div03.edt_BZTPNM_C","value","ds_branch_bzno","BZTPNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item46","Div05.Div03.edt_BZCCNM_C","value","ds_branch_bzno","BZCCNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","Div05.Div03.edt_TX_BZN","value","ds_branch_bzno","TX_REG");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_5110.xfdl", "lib::comLib.xjs");
        this.addIncludeScript("OMG_DS_SC_5110.xfdl", "lib::comTSToolKit.xjs");
        this.addIncludeScript("OMG_DS_SC_5110.xfdl", "lib::comPolicy.xjs");
        this.registerScript("OMG_DS_SC_5110.xfdl", function() {
        //include "lib::comLib.xjs";
        //include "lib::comTSToolKit.xjs";
        //include "lib::comPolicy.xjs";
        /*******************************************************************
        	전역변수 선언
        	sScrollYn  : 서비스이용약관 스크롤여부
        	sScrollYn2 : 개인정보 스크롤여부
        *******************************************************************/
        this.sScrollYn = "";
        this.sScrollYn2 = "";
        this.orgAcNo = "";
        this.vrtlAcNo = "";

        this.JOIN_DATA;
        this.PASS_POLICY;
        var nBasicBottom = nexacro.toNumber(this.Div05.Static124.top) + nexacro.toNumber(this.Div05.Static124.height);

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통

        	this.JOIN_DATA = this.gfn_nullToEmpty(this.parent.data);
        	this.PASS_POLICY = this.gfn_nullToEmpty(this.parent.passPolicy);
        	
        	if (this.PASS_POLICY == "Y") {
        		// 신규 회원가입 화면 통해서 넘어올 때
        		this.Div01.set_visible(false);
        		this.Div05.set_visible(true);
        		this.resetScroll();

        		// 회원가입 화면별 처리
        		this.Div05.edt_BZNO01.set_value(this.JOIN_DATA.substring(0,3));
        		this.Div05.edt_BZNO02.set_value(this.JOIN_DATA.substring(3,5));
        		this.Div05.edt_BZNO03.set_value(this.JOIN_DATA.substring(5,10));
        		this.Div05.edt_BZNO01.set_enable(false);
        		this.Div05.edt_BZNO02.set_enable(false);
        		this.Div05.edt_BZNO03.set_enable(false);
        		this.Div05.btn_search.click();
        	} else {
        		// 기존 회원가입 화면
        		this.Div01.Static00.set_text("하나로eSCM 서비스 이용약관, 개인정보 수집 및 이용에 <b v='true'><u v='true'>모두 동의</u></b>합니다.");
        		this.Div01.Static01.set_text("<b v='true'>[필수]하나로eSCM 서비스 이용약관을 끝까지 읽어 주시기 바랍니다.</b>");
        		this.Div01.Static03.set_text("<b v='true'>[필수]하나로eSCM 서비스 개인정보 수집 및 이용동의 끝까지 읽어 주시기 바랍니다.</b>");
        		this.Div01.txa_arr01.set_value(this.policyTerms);
        		this.Div01.txa_arr02.set_value(this.policyPrivacy);
        	}
        	this.Div05.Div03.txt_contents1.set_value(this.policyWithdraw);
        	this.Div05.Div03.txt_contents2.set_value(this.policyFinancial);

        	this.ds_userInfo.setColumn(0,"SMS_RMS_YN", "N");
        	this.ds_userInfo.setColumn(0,"EMAIL_RMS_YN", "N");

        	this.Div05.Div03.chk_DRW_FTR_AGR_YN.set_value("N");
        	this.Div05.Div03.chk_FNC_TR_INF_OFR_AGR_YN.set_value("N");
        }

        this.fn_afterFormOnload = function()
        {
        	this.fn_checkOpenWebSign();

        	//공통코드콤보가져오기
        	var param = [
         		{code:"HP"	,     dsName:"ds_hpNo", selecttype:"N"},
         		{code:"BNK_C"	, dsName:"ds_bankCode", selecttype:"N"}
            ];
        	this.gfn_setPortalCommonCode(param);

        	this.Div05.set_height(nexacro.toNumber(this.Div05.Static138.top) + nexacro.toNumber(this.Div05.Static138.height) + 15);
        	
        	if (!this.checkParent(true)) {
        		this.Div01.set_left(17);
        		this.Div01.set_visible(true); // 약관동의
        		this.Div05.set_visible(false);
        		this.Div01.txa_arr01.addEventHandler("onvscroll", this.Div01_txa_arr01_onvscroll,this);
        		this.Div01.txa_arr02.addEventHandler("onvscroll", this.Div01_txa_arr02_onvscroll,this);
        	}
        }

        // gfn_setCommonCode, gfn_setPortalCommonCode처리 후 호출하는 함수
        this.fn_commonAfterOnload= function()
        {
        	this.Div05.edt_BIRTH._setValue('19700101');
        	this.Div05.cbo_HP.set_index(1);
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
        	this.Div05.edt_BZNO01.set_value(this.JOIN_DATA.substring(0,3));
        	this.Div05.edt_BZNO02.set_value(this.JOIN_DATA.substring(3,5));
        	this.Div05.edt_BZNO03.set_value(this.JOIN_DATA.substring(5,10));
        	this.Div05.edt_BZNO01.set_enable(false);
        	this.Div05.edt_BZNO02.set_enable(false);
        	this.Div05.edt_BZNO03.set_enable(false);
        	this.Div05.btn_search.click();
        	this.Div05.btn_search.set_enable(false);
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

        /*******************************************************************************************************************
         동의서 스크롤체크1
        ********************************************************************************************************************/
        this.Div01_txa_arr01_onvscroll = function(obj,e)
        {
        	if (this.Div01.txa_arr01.vscrollbar.max == e.pos) {
        		this.sScrollYn = "Y";
        	} else {
        		this.sScrollYn = "N";
        	}
        }

        /*******************************************************************************************************************
         동의서 스크롤체크2
        ********************************************************************************************************************/
        this.Div01_txa_arr02_onvscroll = function(obj,e)
        {
        	if (this.Div01.txa_arr02.vscrollbar.max == e.pos) {
        		this.sScrollYn2 = "Y";
        	} else {
        		this.sScrollYn2 = "N";
        	}
        }

        /*******************************************************************************************************************
         창닫기
        ********************************************************************************************************************/
        this.Div02_btn_close_onclick = function(obj,e)
        {
        	this.close();
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
        this.Div01_Div02_btn_agree_onclick = function(obj,e)
        {
        	if (!this.Div01.chk_agr01.value) {
        		alert("하나로eSCM 서비스 이용약관에 동의해주시기 바랍니다.")
        		return false;
        	}
        	if (!this.Div01.chk_agr02.value) {
        		alert("하나로eSCM 서비스 개인정보 수집 및 이용에 동의해주시기 바랍니다.")
        		return false;
        	}
        	if (this.sScrollYn == "N") {
        		alert("하나로eSCM 서비스 이용약관을 끝까지 읽어 주시기 바랍니다.");
        		return false;
        	}
        	if (this.sScrollYn2 == "N") {
        		alert("하나로eSCM 서비스 개인정보 수집 및 이용을 끝까지 읽어 주시기 바랍니다.");
        		return false;
        	}
        	this.Div01.set_visible(false);
        	this.Div05.set_visible(true);

        	this.resetScroll();
        }

        /*******************************************************************************************************************
         모두 동의
        ********************************************************************************************************************/
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

        /*******************************************************************************************************************
         사업자번호로 거래처 정보조회하기
        ********************************************************************************************************************/
        this.Div05_btn_search_onclick = function(obj,e)
        {
        	if (this.gfn_isNull(this.Div05.edt_BZNO01.value) || this.Div05.edt_BZNO01.getLength() !=3) {
        		alert("사업자번호를 확인해주세요.");
        		this.Div05.edt_BZNO01.setFocus();
        		return;
        	}
        	if (this.gfn_isNull(this.Div05.edt_BZNO02.value) || this.Div05.edt_BZNO02.getLength() !=2) {
        		alert("사업자번호를 확인해주세요.");
        		this.Div05.edt_BZNO02.setFocus();
        		return;
        	}
        	if (this.gfn_isNull(this.Div05.edt_BZNO03.value) || this.Div05.edt_BZNO03.getLength() !=5) {
        		alert("사업자번호를 확인해주세요.");
        		this.Div05.edt_BZNO03.setFocus();
        		return;
        	}

        	this.div_hiddenArea.edt_BZNO1.set_value(this.Div05.edt_BZNO01.value);
        	this.div_hiddenArea.edt_BZNO2.set_value(this.Div05.edt_BZNO02.value);
        	this.div_hiddenArea.edt_BZNO3.set_value(this.Div05.edt_BZNO03.value);

        	var param = "bzNo1="+this.Div05.edt_BZNO01.value
        				+" bzNo2="+this.Div05.edt_BZNO02.value
        				+" bzNo3="+this.Div05.edt_BZNO03.value
        				+" usrTpc="+this.div_hiddenArea.edt_USR_TPC.value
        				;
        	var sSvcID        = "retriveNaTrplCList";
        	var sURL          = "svc::rest/pt/usrinf/retriveNaTrplCList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_naTrplC=ds_naTrplC";
        	var sArgument     =  param;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /*******************************************************************************************************************
         회사정보조회
        ********************************************************************************************************************/
        this.fn_officeInfo = function(naTrplC)
        {

        	if (this.gfn_isNull(this.Div05.edt_BZNO01.value) || this.Div05.edt_BZNO01.getLength() !=3) {
        		alert("사업자번호를 확인해주세요.");
        		this.Div05.edt_BZNO01.setFocus();
        		return;
        	}
        	if (this.gfn_isNull(this.Div05.edt_BZNO02.value) || this.Div05.edt_BZNO02.getLength() !=2) {
        		alert("사업자번호를 확인해주세요.");
        		this.Div05.edt_BZNO02.setFocus();
        		return;
        	}
        	if (this.gfn_isNull(this.Div05.edt_BZNO03.value) || this.Div05.edt_BZNO03.getLength() !=5) {
        		alert("사업자번호를 확인해주세요.");
        		this.Div05.edt_BZNO03.setFocus();
        		return;
        	}
        	if (this.gfn_isNull(this.gfn_trim(this.Div05.cbo_NA_TRPL_C.value))) {
        		alert("거래처코드를 선택해주세요.");
        		this.Div05.cbo_NA_TRPL_C.setFocus();
        		return;
        	}

        	this.div_hiddenArea.edt_BZNO1.set_value(this.Div05.edt_BZNO01.value);
        	this.div_hiddenArea.edt_BZNO2.set_value(this.Div05.edt_BZNO02.value);
        	this.div_hiddenArea.edt_BZNO3.set_value(this.Div05.edt_BZNO03.value);

        	var param = "bzNo1="+this.Div05.edt_BZNO01.value
        				+" bzNo2="+this.Div05.edt_BZNO02.value
        				+" bzNo3="+this.Div05.edt_BZNO03.value
        				+" naTrplC="+naTrplC
        				+" usrTpc ="+this.div_hiddenArea.edt_USR_TPC.value
        				;
        	var sSvcID        = "retrieveOfficeInfo";
        	var sURL          = "svc::rest/pt/usrinf/retrieveOfficeInfo";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_officeInfo=ds_officeInfo ds_naTrplCAuth=ds_naTrplCAuth ds_naTrplCAuthIng=ds_naTrplCAuthIng ds_entSvc=ds_entSvc";
        	var sArgument     =  param;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /*******************************************************************************************************************
         회원ID중복체크
        ********************************************************************************************************************/
        this.Div05_btn_checkMbIdDup_onclick = function(obj,e)
        {
        	if (!this.fn_idValidation()) {
        		return;
        	}

        	var param 		  = "mbId="+this.Div05.edt_MB_ID.value +" usrTpc=01";
        	var sSvcID        = "checkMbIdDup";
        	var sURL          = "svc::rest/pt/usrinf/checkMbIdDup";
        	var sInDatasets   = "";
        	var sOutDatasets  = "";
        	var sArgument     =  param;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /*******************************************************************************************************************
         빌링정보조회
        ********************************************************************************************************************/
        this.fn_retriveBilingInfo = function()
        {
        	var param 		  = "naTrplC="+this.Div05.cbo_NA_TRPL_C.value;
        	var sSvcID        = "retriveBilingInfo";
        	var sURL          = "svc::rest/pt/usrinf/retriveBilingInfo";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_payInfo=ds_payInfo";
        	var sArgument     =  param;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /*******************************************************************************************************************
         가입서비스가 존재할 경우 화면 dispaly
        ********************************************************************************************************************/
        this.fn_entSvcdisplay = function()
        {
        	// 부가정보
        	if (this.ds_entSvc.findRowExpr("SVC_ID == '21' && RQ_DSC == '1' && ENT_PRG_STSC != '2'") != -1) {
        		this.Div05.Div03.rdo_SVC_ID.set_value("21"); // 정액제
        	} else {
        		this.Div05.Div03.rdo_SVC_ID.set_value("22"); // 종량제
        	}
        	
        	// BI조회
        	if (this.ds_entSvc.findRowExpr("SVC_ID == '31' && RQ_DSC == '1' && ENT_PRG_STSC != '2'") != -1) {
        		this.Div05.Div03.cbk_SVC31.set_value("Y");
        	} else {
        		this.Div05.Div03.cbk_SVC31.set_value("N");
        	}
        	
        	// 추이분석
        	if (this.ds_entSvc.findRowExpr("SVC_ID == '32' && RQ_DSC == '1' && ENT_PRG_STSC != '2'") != -1) {
        		this.Div05.Div03.cbk_SVC32.set_value("Y");
        	} else {
        		this.Div05.Div03.cbk_SVC32.set_value("N");
        	}
        	
        	// 시장분석(자사)
        	if (this.ds_entSvc.findRowExpr("SVC_ID == '33' && RQ_DSC == '1' && ENT_PRG_STSC != '2'") != -1) {
        		this.Div05.Div03.cbk_SVC33.set_value("Y");
        	} else {
        		this.Div05.Div03.cbk_SVC33.set_value("N");
        	}
        	
        	// 카테고리 시장분석
        	if (this.ds_entSvc.findRowExpr("SVC_ID == '34' && RQ_DSC == '1' && ENT_PRG_STSC != '2'") != -1) {
        		this.Div05.Div03.cbk_SVC34.set_value("Y");
        	} else {
        		this.Div05.Div03.cbk_SVC34.set_value("N");
        	}
        	
        	// 자사판매정보 제공동의
        	if (this.ds_entSvc.findRowExpr("SVC_ID == '35' && RQ_DSC == '1' && ENT_PRG_STSC != '2'") != -1) {
        		this.Div05.Div03.cbk_SVC35.set_value("Y");
        	} else {
        		this.Div05.Div03.cbk_SVC35.set_value("N");
        	}

        	// 마감간소화
        	if (this.ds_entSvc.findRowExpr("SVC_ID == '38' && RQ_DSC == '1' && ENT_PRG_STSC != '2'") != -1) {
        		this.Div05.Div03.cbk_SVC38.set_value("Y");
        	} else {
        		this.Div05.Div03.cbk_SVC38.set_value("N");
        	}
        }

        /*******************************************************************************************************************
         거래처코드에 해당하는 빌링, 세금계산서 권한조회
        ********************************************************************************************************************/
        this.fn_retrieveNaTrplCAuthLst = function()
        {
        	var param 		  = "naTrplC="+this.Div05.cbo_NA_TRPL_C.value;
        	var sSvcID        = "retrieveNaTrplCAuthLst";
        	var sURL          = "svc::rest/pt/usrinf/retriveBilingInfo";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_naTrplCAuth=ds_naTrplCAuth";
        	var sArgument     =  param;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /***************************************************
        	권한체크
        	- 빌링권한이 존재 할 경우
        		1) 빌링 권한 신청불가
        	- 빌링권한이 존재 하지 않을 경우
        		1-1)가입 진행중인 빌링 권한이 존재 할 경우
        			1-1-1) 빌링권한 신청 불가
        		1-2) 가입 진행중인 빌링 권한이 존재 하지 않을 경우
        			1-2-1) 빌링권한 신청 가능
        ****************************************************/
        this.fn_authValidation = function()
        {
        	if (this.Div05.chk_BILLING_AUTH.value == "Y") {
        		if (this.ds_naTrplCAuth.findRow("USR_AUTH_DSC", "1") >= 0) {
        			alert("빌링 권한이 존재합니다. 선택하실 수 없습니다.");
        			this.Div05.chk_BILLING_AUTH.set_value("N");
        			return false;
        		} else {
        			if (this.ds_naTrplCAuthIng.findRow("BILING_ING", "Y") >= 0) {
        				alert("가입처리중인 빌링 권한이 존재합니다. 선택하실 수 없습니다.");
        				this.Div05.chk_BILLING_AUTH.set_value("N");
        				return false;
        			} else {
        				return true;
        			}
        		}
        	}
        }
        /*******************************************************************************************************************
         권한에 따른 DIV화면 컨트롤
        ********************************************************************************************************************/
        this.CheckBox04_onchanged = function(obj,e)
        {
        	if (this.gfn_isNull(this.Div05.cbo_NA_TRPL_C.value)) {
        		alert("거래처코드를 선택해 주세요.");
        		this.Div05.chk_BILLING_AUTH.set_value("N");
        		this.Div05.cbo_NA_TRPL_C.setFocus();
        		return false;
        	}

        	if (this.fn_authValidation()) {
        		if (e.postvalue == 'Y') {
        			this.fn_retriveBilingInfo();
        			this.Div05.Div03.set_top(nBasicBottom+20)
        			this.Div05.Div03.set_visible(true);
        			var nDiv03Bottom = nexacro.toNumber(this.Div05.Div03.top) + nexacro.toNumber(this.Div05.Div03.height);
        			//맨밑 Static (* 업무시간외 회원가입시 익일 업무처리가 됩니다.)
        			this.Div05.Static138.set_top(nDiv03Bottom);
        			this.Div05.Static138.set_visible(true);
        		} else {
        			this.Div05.Div03.set_visible(false);
        			this.Div05.Static138.set_top(nBasicBottom);
        		}

        		this.Div05.set_height(nexacro.toNumber(this.Div05.Static138.top) + nexacro.toNumber(this.Div05.Static138.height) + 15);
        		this.resetScroll();
        	 }
        }

        /*******************************************************************************************************************
         권한정보validation
        ********************************************************************************************************************/
        this.fn_svcAuthValidation = function()
        {
        	/*빌링선택시 체크로직*/
        	if (this.Div05.chk_BILLING_AUTH.value =="Y") {
        		if (this.gfn_isNull(this.Div05.Div03.rdo_STL_METH_DSC.value)) {
        			alert("결제방식코드를 입력 선택하세요");
        			this.Div05.Div03.rdo_STL_METH_DSC.setFocus();
        			return false;
        		}
        		/*납부 방법이 계좌이체일 경우*/
        		if (this.Div05.Div03.rdo_STL_METH_DSC.value == "1" || this.Div05.Div03.rdo_STL_METH_DSC.value == "2") {
        			if (this.gfn_isNull(this.Div05.Div03.rdo_HOP_DRW_DD.value)) {
        				alert("희망출금일을 입력 선택하세요");
        				this.Div05.rDiv03.rdo_HOP_DRW_DD.setFocus();
        				return false;
        			}
        			if (this.gfn_isNull(this.Div05.Div03.edt_DPRNM.value)) {
        				alert("예금주명을 입력 하세요");
        				this.Div05.Div03.edt_DPRNM.setFocus();
        				return false;
        			}
        			if (this.gfn_isNull(this.Div05.Div03.rdo_PSCRP_DSC.value)) {
        				alert("예금주의 개인 및 법인 구분을 선택하시기 바랍니다. ");
        				this.Div05.Div03.rdo_PSCRP_DSC.setFocus();
        				return false;
        			}
        			if (this.Div05.Div03.rdo_PSCRP_DSC.value =="1") {
        				if (this.gfn_isNull(this.Div05.Div03.mae_BIRTH.value)) {
        					alert("납부정보의 예금주 생년월일을 입력 하세요");
        					this.Div05.Div03.mae_BIRTH.setFocus();
        					return false;
        				}
        				if (this.Div05.Div03.mae_BIRTH.text.substring(0,2) == "00")  {
        					alert("납부정보의 예금주 생년월일을 6자리로 입력시 생년월일은 8자리 형식(19600101)으로 입력하셔야 합니다");
        					this.Div05.Div03.mae_BIRTH.setFocus();
        					return false;
        				}
        			}
        			if (this.Div05.Div03.rdo_PSCRP_DSC.value =="2") {
        				if (this.gfn_isNull(this.Div05.Div03.mae_BZNO.value)) {
        					alert("사업자번호를 입력 하세요");
        					this.Div05.Div03.mae_BZNO.setFocus();
        					return false;
        				}
        			}
        			if (this.gfn_isNull(this.ds_payInfo.getColumn(0,"BB_FLNM"))) {
        				alert("통장사본을 등록해 주세요");
        				return false;
        			}
        			if (this.Div05.Div03.chk_DRW_FTR_AGR_YN.value != 'Y') {
        				alert("예금주의 출금이체동의서를 동의해 주세요.");
        				return false;
        			}
        			if (this.Div05.Div03.chk_FNC_TR_INF_OFR_AGR_YN.value != 'Y') {
        				alert("금융거래 정보의 제공동의서를 동의해 주세요.");
        				return false;
        			}
        		}

        		if (this.gfn_isNull(this.Div05.Div03.cbo_BNK_C.value)) {
        				alert("거래은행을 선택 하세요");
        				this.Div05.Div03.cbo_BNK_C.setFocus();
        				return false;
        		}
        		if (this.gfn_isNull(this.Div05.Div03.edt_AC_NO.value)) {
        				alert("계좌번호를 입력 하세요");
        				this.Div05.Div03.edt_AC_NO.setFocus();
        				return false;
        		}
        		if (this.gfn_isNull(this.ds_payInfo.getColumn(0,"BZ_RGWRRT_FLNM"))) {
        			alert("사업자등록증 사본을 등록해 주세요");
        			return false;
        		}
        	}
        	return true;
        }

        /*******************************************************************************************************************
         청구정보 validation 검사
        ********************************************************************************************************************/
        this.fn_saveBranchBzno_validate = function() {

        	if (this.gfn_isNull(this.Div05.Div03.edt_REPMNM00_C.value)) {
        		alert("회사명을 입력 하세요.");
        		this.Div05.Div03.edt_REPMNM00_C.setFocus();
        		return false;
        	}
        	if (this.gfn_isNull(this.Div05.Div03.edt_B_BZN01_C.value) || this.Div05.Div03.edt_B_BZN01_C.getLength() !=3) {
        		alert("사업자번호를 확인해주세요.");
        		this.Div05.Div03.edt_B_BZN01_C.setFocus();
        		return false;
        	}
        	if (this.gfn_isNull(this.Div05.Div03.edt_B_BZN02_C.value) || this.Div05.Div03.edt_B_BZN02_C.getLength() !=2) {
        		alert("사업자번호를 확인해주세요.");
        		this.Div05.Div03.edt_B_BZN02_C.setFocus();
        		return false;
        	}
        	if (this.gfn_isNull(this.Div05.Div03.edt_B_BZN03_C.value) || this.Div05.Div03.edt_B_BZN03_C.getLength() !=5) {
        		alert("사업자번호를 확인해주세요.");
        		this.Div05.Div03.edt_B_BZN03_C.setFocus();
        		return false;
        	}
        	if (this.gfn_isNull(this.Div05.Div03.edt_REPMNM_C.value)) {
        		alert("대표자명을 입력 하세요.");
        		this.Div05.Div03.edt_REPMNM_C.setFocus();
        		return false;
        	}
        	//if (this.gfn_isNull(this.Div05.Div03.edt_ZIP_C.value)) {
        	//	alert("우편번호를 입력 하세요.");
        	//	this.Div05.Div03.edt_ZIP_C.setFocus();
        	//	return false;
        	//}
        	if (this.gfn_isNull(this.Div05.Div03.edt_DONGUP_C.value)) {
        		alert("회사주소를 입력 하세요.");
        		this.Div05.Div03.edt_DONGUP_C.setFocus();
        		return false;
        	}
        	//if (this.gfn_isNull(this.Div05.Div03.edt_DONGBW_C.value)) {
        	//	alert("회사주소를 입력 하세요.");
        	//	this.Div05.Div03.edt_DONGBW_C.setFocus();
        	//	return false;
        	//}
        	if (this.gfn_isNull(this.Div05.Div03.edt_BZTPNM_C.value)) {
        		alert("업태를 입력 하세요.");
        		this.Div05.Div03.edt_BZTPNM_C.setFocus();
        		return false;
        	}
        	if (this.gfn_isNull(this.Div05.Div03.edt_BZCCNM_C.value)) {
        		alert("종목을 입력 하세요.");
        		this.Div05.Div03.edt_BZCCNM_C.setFocus();
        		return false;
        	}

        	// 종사업자번호에 값이 존재하면
        	if (!this.gfn_isNull(this.Div05.Div03.edt_TX_BZN.value)) {
        		if (this.Div05.Div03.edt_TX_BZN.getLength() != 4) {
        			alert("종사업자번호는 4자리 숫자 입니다.");
        			this.Div05.Div03.edt_TX_BZN.setFocus();
        			return false;
        		}
        	}
        	return true;
        }

        /*******************************************************************************************************************
         validation 검사
        ********************************************************************************************************************/
        this.fn_validationCheck = function()
        {
        	if (this.ds_naTrplC.rowcount == 0) {
        		alert("사업자번호를 입력 후 찾기버튼을 누르시기 바랍니다.");
        		return false;
        	}
        	if (this.gfn_isNull(this.Div05.cbo_NA_TRPL_C.value)) {
        		alert("거래처코드를 선택하세요");
        		return false;
        	}
        	if (this.gfn_isNull(this.Div05.rdo_COMP_TPC.value)) {
        		alert("업체유형을 선택하세요.");
        		this.Div05.rdo_COMP_TPC.setFocus();
        		return false;
        	}
        	if (this.gfn_isNull(this.Div05.edt_MB_ID.value)) {
        		alert("회원ID를 입력 하세요.");
        		this.Div05.edt_MB_ID.setFocus();
        		return false;
        	}
        	if (this.gfn_isNull(this.Div05.edt_USR_NM.value)) {
        		alert("사용자명을 입력 하세요.");
        		this.Div05.edt_USR_NM.setFocus();
        		return false;
        	}
        	if (this.gfn_isNull(this.Div05.edt_MB_PW01.value)) {
        		alert("비밀번호를 입력 하세요.");
        		this.Div05.edt_MB_PW01.setFocus();
        		return false;
        	}
        	if (this.gfn_isNull(this.Div05.edt_MB_PW02.value)) {
        		alert("비밀번호확인을 입력 하세요.");
        		this.Div05.edt_MB_PW02.setFocus();
        		return false;
        	}
        	if (this.gfn_isNull(this.Div05.edt_BIRTH.value)) {
        		alert("생년월일을 입력 하세요 ");
        		this.Div05.edt_BIRTH.setFocus();
        		return false;
        	}
        	if (this.Div05.edt_BIRTH.text.substring(0,2)  == "00")  {
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
        		alert("휴대전화를 선택 하세요.");
        		this.Div05.cbo_HP.setFocus();
        		return false;
        	}
        	if (this.gfn_isNull(this.Div05.edt_HP01.value)) {
        		alert("휴대전화를 입력 하세요.");
        		this.Div05.edt_HP01.setFocus();
        		return false;
        	}
        	if (this.gfn_isNull(this.Div05.edt_HP02.value)) {
        		alert("휴대전화를 입력 하세요.");
        		this.Div05.edt_HP02.setFocus();
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

        	/*청구정보 체크*/
        	/*빌링선택시 체크로직*/
        	if (this.Div05.chk_BILLING_AUTH.value =="Y") {
        		if (!this.fn_saveBranchBzno_validate()) {
        			return false;
        		}
        	}

        // 	if (this.gfn_isNull(this.Div05.edt_confirmCertificate.value)) {
        // 		alert("인증번호를 입력 하세요.");
        // 		this.Div05.edt_confirmCertificate.setFocus();
        // 		return false;
        // 	}
        // 	if (this.div_hiddenArea.edt_confirm.value != "Y") {
        // 		alert("인증버튼으로 인증번호를 인증 하세요");
        // 		return false;
        // 	}
        	/*회원ID validation검사*/
        	if (!this.fn_idValidation()) {
        		return false;
        	}

        	/*비밀번호 validation검사*/
        	if (!this.gfn_pwValidation(this.Div05.edt_MB_PW01.value)) {
        		return false;
        	}
        	if (this.Div05.edt_BZNO01.value != this.div_hiddenArea.edt_BZNO1.value) {
        		alert("사업자번호가 변경되었습니다. 찾기버튼으로 거래처정보를 재조회 해주시기 바랍니다.");
        		return false;
        	}
        	if (this.Div05.edt_BZNO02.value != this.div_hiddenArea.edt_BZNO2.value) {
        		alert("사업자번호가 변경되었습니다. 찾기버튼으로 거래처정보를 재조회 해주시기 바랍니다.");
        		return false;
        	}
        	if (this.Div05.edt_BZNO03.value != this.div_hiddenArea.edt_BZNO3.value) {
        		alert("사업자번호가 변경되었습니다. 찾기버튼으로 거래처정보를 재조회 해주시기 바랍니다.");
        		return false;
        	}
        	if (this.gfn_isNull(this.div_hiddenArea.edt_finalMbId.value)) {
        		alert("회원ID 중복확인을 해주시기 바랍니다.");
        		return false;
        	}
        	if (this.Div05.edt_MB_ID.value != this.div_hiddenArea.edt_finalMbId.value) {
        		alert("회원ID가 변경되었습니다. 중복확인을 해주시기 바랍니다.");
        		return false;
        	}
        	/*권한설정에 따른 이벤트 컨트롤*/
        	if (!this.fn_svcAuthValidation()) {
        		return false;
        	}

        	/*권한조회 API호출*/
        	this.fn_retrieveNaTrplCAuthLst();

        	/*권한체크 validation*/
        	if (this.ds_naTrplCAuth.findRow("USR_AUTH_DSC", "1") < 0 && this.ds_naTrplCAuthIng.findRow("BILING_ING", "Y") >= 0) {
        		alert("빌링 권한을 가진 회원이 가입승인 처리중에 있습니다.\n빌링 권한을 가진 회원이 가입완료 된 후 재신청 부탁드립니다.");
        		return false;
        	}

        	if (this.Div05.chk_BILLING_AUTH.value == "Y") {
        		this.fn_authValidation();
        	} else {
        		/*빌링권한이 존재하지 않으면서, 진행중인 빌링권한이 없을 경우*/
        		if (this.ds_naTrplCAuth.findRow("USR_AUTH_DSC", "1") < 0 && this.ds_naTrplCAuthIng.findRow("BILING_ING", "Y") < 0 ) {
        			alert("거래처 번호에 해당하는 빌링 권한을 가진 회원이 없습니다.\n빌링 권한을 선택해주세요.");
        			return false;
        		}
        	}

        	if (this.Div05.chk_TAX_AUTH.value == "Y") {
        		if (this.ds_naTrplCAuthIng.findRow("TAX_ING", "Y") >= 0) {
        			alert("세금계산서 권한을 가진 회원이 승인처리 중에 있습니다.\n세금계산서 권한을 선택하실 수 없습니다.");
        			this.Div05.chk_TAX_AUTH.set_value("N");
        			return false;
        		} else if (this.ds_naTrplCAuth.findRow("USR_AUTH_DSC", "3") >=  0) {
        			if (!application.confirm("현재 세금계산서 권한은 "+this.ds_naTrplCAuth.getColumn(this.ds_naTrplCAuth.findRow("USR_AUTH_DSC", "3"),"USR_NM")+"["
        					+this.ds_naTrplCAuth.getColumn(this.ds_naTrplCAuth.findRow("USR_AUTH_DSC", "3"),"MB_ID")+"]님에게 있습니다.\n세금계산서권한을 변경하시겠습니까? ")) {
        				this.Div05.chk_TAX_AUTH.set_value("N");
        				return false;
        			}
        		}
        	} else {
        		if (this.ds_naTrplCAuth.findRow("USR_AUTH_DSC", "3") < 0 && this.ds_naTrplCAuthIng.findRow("TAX_ING", "Y") < 0 ) {
        			alert("거래처 번호에 해당하는 세금계산서 권한을 가진 회원이 없습니다.\n세금계산서 권한을 선택해주세요.");
        			return false;
        		}
        	}
        	return true;
        }

        /*******************************************************************************************************************
         저장로직
        ********************************************************************************************************************/
        this.btn_save_onclick = function(obj,e)
        {
        	if (this.fn_validationCheck()) {
        		if (!confirm("가입하시겠습니까?")) {
        			return;
        		}

        		this.ds_userInfo.setColumn(0,"MB_CV_DSC", "3");
        		this.ds_userInfo.setColumn(0,"USR_TPC",this.div_hiddenArea.edt_USR_TPC.value);
        		this.ds_officeInfo.setColumn(0,"COMP_TPC",this.Div05.rdo_COMP_TPC.value);

        		if (this.Div05.chk_BILLING_AUTH.value =="Y") {
        			if (this.Div05.Div03.rdo_PSCRP_DSC.value=="1") {
        				this.ds_payInfo.setColumn(0,"DPR_NO",this.Div05.Div03.mae_BIRTH.value);
        			} else if (this.Div05.Div03.rdo_PSCRP_DSC.value=="2") {
        				this.ds_payInfo.setColumn(0,"DPR_NO",this.Div05.Div03.mae_BZNO.value);
        			}
        			if(this.gfn_isNull(this.ds_payInfo.getColumn(0, "ACNO"))){
        				this.Div05.Div03.edt_AC_NO.updateToDataset();   
        			}
        		}

        		this.fn_setSvcAuth();		/*서비스권한 세팅*/
        		this.fn_setSvcInfo();		/*서비스정보 세팅*/
        		if (this.Div05.chk_BILLING_AUTH.value == "Y") {	/* 빌링권한 있음 */
        			if (this.ds_officeInfo.getColumn(0,"NA_MBCO_DSC") == "1") {//본사
        				this.fn_setPayInfo();
        				/*
        				if (!this.fn_setPayInfo()) {
        					return ;
        				}
        				*/
        			} else if (this.ds_officeInfo.getColumn(0,"NA_MBCO_DSC") != "1") {//지사
        				if (this.fn_BZNOCheck()) {
        					this.div_hiddenArea.edt_chgBillingYn.set_value("Y");
        					if (this.gfn_isNull(this.ds_payInfo.getColumn(0, "ELSG_CNTN"))) {
        						this.fn_setPayInfoForJoin();
        					}
        				} else {
        					return ;
        				}
        			}

        		}
        		if (this.Div05.chk_BILLING_AUTH.value == "N") {	/* 빌링권한 없음 */
        			this.fn_signCallback(true, 'setPayInfo');
        		}
        	}
        }

        /*******************************************************************************************************************
         서비스정보 세팅
        ********************************************************************************************************************/
        this.fn_setSvcInfo = function ()
        {
        	this.ds_svcInfo.clear();
        	this.ds_svcInfo.addColumn("SVC_ID", "string");
        	this.ds_svcInfo.addColumn("RQ_DSC", "string");

        	if (this.Div05.chk_BILLING_AUTH.value != "Y") {
        		this.div_hiddenArea.edt_chgSvcYn.set_value("N"); // 빌링권한이 없는 경우, 서비스정보를 세팅하지 않는다.
        		return;
        	}

        	/* 가입된 서비스가 없을 경우 */
        	if (this.ds_entSvc.rowcount == 0) {
        		// 기본 서비스
        		this.ds_svcInfo.addRow();
        		this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "SVC_ID", "10");
        		this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "RQ_DSC", "1");

        		// 부가정보
        		if (this.Div05.Div03.rdo_SVC_ID.value == "21") {
        			this.ds_svcInfo.addRow();
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "SVC_ID", "21");
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "RQ_DSC", "1");
        		} else if (this.Div05.Div03.rdo_SVC_ID.value =="22") {
        			this.ds_svcInfo.addRow();
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "SVC_ID", "22");
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "RQ_DSC", "1");
        		}

        		// 정보분석
        		if (this.Div05.Div03.cbk_SVC31.value == "Y") {
        			this.ds_svcInfo.addRow();
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "SVC_ID", "31");
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "RQ_DSC", "1");
        		}
        		if (this.Div05.Div03.cbk_SVC32.value == "Y") {
        			this.ds_svcInfo.addRow();
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "SVC_ID", "32");
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "RQ_DSC", "1");
        		}
        		if (this.Div05.Div03.cbk_SVC33.value == "Y") {
        			this.ds_svcInfo.addRow();
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "SVC_ID", "33");
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "RQ_DSC", "1");
        		}
        		if (this.Div05.Div03.cbk_SVC34.value == "Y") {
        			this.ds_svcInfo.addRow();
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "SVC_ID", "34");
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "RQ_DSC", "1");
        		}
        		if (this.Div05.Div03.cbk_SVC35.value == "Y") {
        			this.ds_svcInfo.addRow();
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "SVC_ID", "35");
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "RQ_DSC", "1");
        		}
        		if (this.Div05.Div03.cbk_SVC38.value == "Y") {
        			this.ds_svcInfo.addRow();
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "SVC_ID", "38");
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "RQ_DSC", "1");
        		}
        	} else { /* 가입된 서비스가 있을 경우 */
        		// 부가정보
        		if (this.Div05.Div03.rdo_SVC_ID.value == "21") { // [정액제 신청, 종량제 해지]
        			this.ds_svcInfo.addRow();
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "SVC_ID", "21");
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "RQ_DSC", "1");
        			this.ds_svcInfo.addRow();
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "SVC_ID", "22");
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "RQ_DSC", "0");
        		} else if (this.Div05.Div03.rdo_SVC_ID.value == "22") { // [정액제 해지, 종량제 신청]
        			this.ds_svcInfo.addRow();
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "SVC_ID", "21");
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "RQ_DSC", "0");
        			this.ds_svcInfo.addRow();
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "SVC_ID", "22");
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "RQ_DSC", "1");
        		}

        		// 정보분석
        		// BI조회
        		if (this.ds_entSvc.findRow("SVC_ID", "31") >= 0 && this.Div05.Div03.cbk_SVC31.value == "N") {
        			this.ds_svcInfo.addRow();
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "SVC_ID", "31");
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "RQ_DSC", "0"); // 해지
        		} else if (this.ds_entSvc.findRow("SVC_ID", "31") < 0 && this.Div05.Div03.cbk_SVC31.value == "Y") {
        			this.ds_svcInfo.addRow();
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "SVC_ID", "31");
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "RQ_DSC", "1"); // 신청
        		}
        		// 추이분석
        		if (this.ds_entSvc.findRow("SVC_ID", "32") >= 0 && this.Div05.Div03.cbk_SVC32.value == "N") {
        			this.ds_svcInfo.addRow();
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "SVC_ID", "32");
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "RQ_DSC", "0"); // 해지
        		} else if (this.ds_entSvc.findRow("SVC_ID", "32") < 0 && this.Div05.Div03.cbk_SVC32.value == "Y") {
        			this.ds_svcInfo.addRow();
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "SVC_ID", "32");
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "RQ_DSC", "1"); // 신청
        		}
        		// 시장분석(자사)
        		if (this.ds_entSvc.findRow("SVC_ID", "33") >= 0 && this.Div05.Div03.cbk_SVC33.value == "N") {
        			this.ds_svcInfo.addRow();
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "SVC_ID", "33");
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "RQ_DSC", "0"); // 해지
        		} else if (this.ds_entSvc.findRow("SVC_ID", "33") < 0 && this.Div05.Div03.cbk_SVC33.value == "Y") {
        			this.ds_svcInfo.addRow();
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "SVC_ID", "33");
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "RQ_DSC", "1"); // 신청
        		}
        		// 카테고리 시장분석
        		if (this.ds_entSvc.findRow("SVC_ID", "34") >= 0 && this.Div05.Div03.cbk_SVC34.value == "N") {
        			this.ds_svcInfo.addRow();
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "SVC_ID", "34");
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "RQ_DSC", "0"); // 해지
        		} else if (this.ds_entSvc.findRow("SVC_ID", "34") < 0 && this.Div05.Div03.cbk_SVC34.value == "Y") {
        			this.ds_svcInfo.addRow();
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "SVC_ID", "34");
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "RQ_DSC", "1"); // 신청
        		}
        		// 카테고리 판매정보
        		if (this.ds_entSvc.findRow("SVC_ID", "35") >= 0 && this.Div05.Div03.cbk_SVC35.value == "N") {
        			this.ds_svcInfo.addRow();
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "SVC_ID", "35");
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "RQ_DSC", "0"); // 해지
        		} else if (this.ds_entSvc.findRow("SVC_ID", "35") < 0 && this.Div05.Div03.cbk_SVC35.value == "Y") {
        			this.ds_svcInfo.addRow();
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "SVC_ID", "35");
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "RQ_DSC", "1"); // 신청
        		}
        		// 마감간소화
        		if (this.ds_entSvc.findRow("SVC_ID", "38") >= 0 && this.Div05.Div03.cbk_SVC38.value == "N") {
        			this.ds_svcInfo.addRow();
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "SVC_ID", "38");
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "RQ_DSC", "0"); // 해지
        		} else if (this.ds_entSvc.findRow("SVC_ID", "38") < 0 && this.Div05.Div03.cbk_SVC38.value == "Y") {
        			this.ds_svcInfo.addRow();
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "SVC_ID", "38");
        			this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "RQ_DSC", "1"); // 신청
        		}
        	}

        	this.div_hiddenArea.edt_chgSvcYn.set_value("Y"); // 빌링권한이 있는 경우, 서비스정보를 무조건 세팅한다.
        }

        /*******************************************************************************************************************
         권한 정보 세팅
        ********************************************************************************************************************/
        this.fn_setSvcAuth = function ()
        {
        	this.ds_svcAuth.clear();
        	this.ds_svcAuth.addColumn("SVC_ID", "string");
        	this.ds_svcAuth.addColumn("RQ_DSC", "string");

        	var chgAuthYn = "N";

        	if (this.Div05.chk_BILLING_AUTH.value == "Y") {
        		this.ds_svcAuth.addRow();
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "SVC_ID", "1");
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "RQ_DSC", "1");
        		chgAuthYn = "Y";
        	}
        	if (this.Div05.chk_CONTRACT_AUTH.value == "Y") {
        		this.ds_svcAuth.addRow();
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "SVC_ID", "2");
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "RQ_DSC", "1");
        		chgAuthYn = "Y";
        	}
        	if (this.Div05.chk_TAX_AUTH.value == "Y") {
        		this.ds_svcAuth.addRow();
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "SVC_ID", "3");
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "RQ_DSC", "1");
        		chgAuthYn = "Y";
        	}

        	this.div_hiddenArea.edt_chgAuthYn.set_value(chgAuthYn);
        }

        /*******************************************************************************************************************
         납부정보 세팅
        	1.납부정보 변경여부체크
        	2.납부정보가 변경될경우, 전자서명값을 생성한다.
        ********************************************************************************************************************/
        this.fn_setPayInfoForJoin= function()
        {
        	// 지사이면서 가상계좌인 경우는 공인인증서 체크 안함.
        	if (this.Div05.Div03.rdo_STL_METH_DSC.value == '3'  && this.ds_officeInfo.getColumn(0,"NA_MBCO_DSC") != "1") {
        		this.fn_signCallback(true,'setPayInfoForJoin');
        	} else {
        		var str = "결제방식을 자동이체로 선택하신 경우에는 결제계좌의 공인인증서로 전자서명을 하여 자동이체 동의를 해주셔야 합니다.\n"
        				+ "(전자금융거래법 15조).\n"
        				+ "납부정보의 계좌번호에 대한 은행 또는 인터넷뱅킹용 공인인증서로\n"
        				+ "전자서명을 해주세요.";

        		alert(str);

        		var Elsg  = this.gfn_nullToEmpty(this.Div05.cbo_NA_TRPL_C.value) +"|"
        			+ this.gfn_nullToEmpty(this.Div05.Div03.rdo_STL_METH_DSC.value) +"|"
        			+ this.gfn_nullToEmpty(this.Div05.Div03.rdo_HOP_DRW_DD.value)   +"|"
        			+ this.gfn_nullToEmpty(this.Div05.Div03.edt_DPRNM.value  ) 	  +"|"
        			+ this.gfn_nullToEmpty(this.Div05.Div03.rdo_PSCRP_DSC.value )   +"|"
        			+ this.gfn_nullToEmpty(this.ds_payInfo.getColumn(0,"DPR_NO"))   +"|"
        			+ this.gfn_nullToEmpty(this.Div05.Div03.cbo_BNK_C.value )  	  +"|"
        			+ this.gfn_nullToEmpty(this.Div05.Div03.edt_AC_NO.value )
        		;
        		var sBzno = this.Div05.edt_BZNO01.value + this.Div05.edt_BZNO02.value + this.Div05.edt_BZNO03.value;
        		this.gfn_signTradeSignForJoin(this.Div05.Plugin00,Elsg, "fn_signCallback", "setPayInfoForJoin");
        	}
        }

        this.fn_setPayInfo= function()
        {
        	var Elsg  = this.gfn_nullToEmpty(this.Div05.cbo_NA_TRPL_C.value) +"|"
        		+ this.gfn_nullToEmpty(this.Div05.Div03.rdo_STL_METH_DSC.value) +"|"
        		+ this.gfn_nullToEmpty(this.Div05.Div03.rdo_HOP_DRW_DD.value)   +"|"
        		+ this.gfn_nullToEmpty(this.Div05.Div03.edt_DPRNM.value  ) 	  +"|"
        		+ this.gfn_nullToEmpty(this.Div05.Div03.rdo_PSCRP_DSC.value )   +"|"
        		+ this.gfn_nullToEmpty(this.ds_payInfo.getColumn(0,"DPR_NO"))   +"|"
        		+ this.gfn_nullToEmpty(this.Div05.Div03.cbo_BNK_C.value )  	  +"|"
        		+ this.gfn_nullToEmpty(this.Div05.Div03.edt_AC_NO.value )
        	;
        	var sBzno = this.Div05.edt_BZNO01.value + this.Div05.edt_BZNO02.value + this.Div05.edt_BZNO03.value;

        	this.gfn_signTradeSign(this.Div05.Plugin00,Elsg, sBzno, "fn_signCallback", "setPayInfo");
        //	this.fn_signCallback("SUCCESS", "setPayInfo");
        }

        this.fn_signCallback = function(rtnValue,signId)
        {
        	if (rtnValue == "ERROR") {
        		return false;
        	} else {
        		this.ds_payInfo.setColumn(0,"ELSG_CNTN",rtnValue);
        		this.div_hiddenArea.edt_chgBillingYn.set_value("Y");

        		switch(signId) {
        			case "setPayInfoForJoin":
        				/*********************************************************************************
        				  가입된 거래처코드의 회원이면서, 권한을 선택하지 않았을 경우,
        				  서비스가입변경, 권한변경,납부정보변경,인감정보 변경 falg는  'N'이다.
        				**********************************************************************************/
        				if (this.ds_entSvc.rowcount > 0 ) {
        					if (this.Div05.chk_BILLING_AUTH.value == "N" && this.Div05.chk_CONTRACT_AUTH.value == "N" && this.Div05.chk_TAX_AUTH.value == "N") {
        						this.div_hiddenArea.edt_chgAuthYn.set_value("N");
        						this.div_hiddenArea.edt_chgBillingYn.set_value("N");
        						this.div_hiddenArea.edt_chgSvcYn.set_value ("N");
        					}
        				}

        				if (this.Div05.chk_BILLING_AUTH.value =="Y") {
        					var BZNO = this.Div05.Div03.edt_B_BZN01_C.value + this.Div05.Div03.edt_B_BZN02_C.value + this.Div05.Div03.edt_B_BZN03_C.value;
        					this.ds_branch_bzno.setColumn(0, "BZNO", BZNO); // set Dataset
        				}

        				var sParam 		  = "blChgYn="+this.div_hiddenArea.edt_chgBillingYn.value
        								   + " svcChgYn="+this.div_hiddenArea.edt_chgSvcYn.value
        								   + " authChgYn="+this.div_hiddenArea.edt_chgAuthYn.value
        								   ;
        				var sSvcID        = "insertMB";
        				var sURL          = "svc::rest/pt/usrinf/insertMB";
        				var sInDatasets   = "ds_officeInfo=ds_officeInfo ds_userInfo=ds_userInfo ds_svcAuth=ds_svcAuth ds_svcInfo=ds_svcInfo ds_payInfo=ds_payInfo ds_branch_bzno=ds_branch_bzno";
        				var sOutDatasets  = "";
        				var sArgument     = sParam;
        				var sCallbackFunc = "fn_callBack";
        				var sTranType     = "U"; // U:저장/삭제, S:조회

        				this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        				break;

        			case "setPayInfo":
        				/*********************************************************************************
        				  가입된 거래처코드의 회원이면서, 권한을 선택하지 않았을 경우,
        				  서비스가입변경, 권한변경,납부정보변경,인감정보 변경 falg는  'N'이다.
        				**********************************************************************************/
        				if (this.ds_entSvc.rowcount > 0 ) {
        					if (this.Div05.chk_BILLING_AUTH.value == "N" && this.Div05.chk_CONTRACT_AUTH.value == "N" && this.Div05.chk_TAX_AUTH.value == "N") {
        						this.div_hiddenArea.edt_chgAuthYn.set_value("N");
        						this.div_hiddenArea.edt_chgBillingYn.set_value("N");
        						this.div_hiddenArea.edt_chgSvcYn.set_value ("N");
        					}
        				}

        				if (this.Div05.chk_BILLING_AUTH.value =="Y") {
        					var BZNO = this.Div05.Div03.edt_B_BZN01_C.value + this.Div05.Div03.edt_B_BZN02_C.value + this.Div05.Div03.edt_B_BZN03_C.value;
        					this.ds_branch_bzno.setColumn(0, "BZNO", BZNO); // set Dataset
        				}

        				var sParam 		  = "blChgYn="+this.div_hiddenArea.edt_chgBillingYn.value
        								   + " svcChgYn="+this.div_hiddenArea.edt_chgSvcYn.value
        								   + " authChgYn="+this.div_hiddenArea.edt_chgAuthYn.value
        								   ;
        				var sSvcID        = "insertMB";
        				var sURL          = "svc::rest/pt/usrinf/insertMB";
        				var sInDatasets   = "ds_officeInfo=ds_officeInfo ds_userInfo=ds_userInfo ds_svcAuth=ds_svcAuth ds_svcInfo=ds_svcInfo ds_payInfo=ds_payInfo ds_branch_bzno=ds_branch_bzno";
        				var sOutDatasets  = "";
        				var sArgument     = sParam;
        				var sCallbackFunc = "fn_callBack";
        				var sTranType     = "U"; // U:저장/삭제, S:조회

        				this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);

        				break;
        		}
        	}
        }

        /*******************************************************************************************************************
         인증번호생성 및 SMS전송
        ********************************************************************************************************************/
        this.btn_sendSms_onclick = function(obj,e)
        {
        	if (this.gfn_isNull(this.Div05.cbo_HP.value)) {
        		alert("휴대번호를 선택하세요.");
        		this.Div05.cbo_HP.setFocus();
        		return false;
        	}
        	if (this.gfn_isNull(this.Div05.edt_HP01.value)) {
        		alert("휴대번호를 입력하세요.");
        		this.Div05.edt_HP01.setFocus();
        		return false;
        	}
        	if (this.gfn_isNull(this.Div05.edt_HP02.value)) {
        		alert("휴대번호를 입력하세요.");
        		this.Div05.edt_HP02.setFocus();
        		return false;
        	}
        	if (this.gfn_isNull(this.Div05.edt_USR_NM.value)) {
        		alert("이름을 입력하세요.");
        		this.Div05.edt_USR_NM.setFocus();
        		return false;
        	}

        	var param = "hp="+this.Div05.cbo_HP.value+this.Div05.edt_HP01.value+this.Div05.edt_HP02.value
        				+ " usrNM="+this.Div05.edt_USR_NM.value;
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
        	if (this.gfn_isNull(this.Div05.edt_confirmCertificate.value)) {
        		alert("인증번호를 입력 하세요");
        		this.Div05.edt_confirmCertificate.setFocus();
        		return false;
        	}

        	if (this.div_hiddenArea.edt_randomNumber.value != this.Div05.edt_confirmCertificate.value) {
        		this.div_hiddenArea.edt_confirm.set_value("N");
        		alert("입력하신 인증번호를 확인하시기 바랍니다.");
        		return;
        	} else {
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

        /*******************************************************************************************************************
         서비스 권한에 따른 이벤트 처리 메소드
        ********************************************************************************************************************/
        this.fn_visibleSvcInfo = function (auth,yn)
        {
        	if (auth =="BILLING_AUTH") {
        		if (yn == 'Y') {
        			this.Div05.Div03.set_top(nBasicBottom+20)
        			this.Div05.Div03.set_visible(true);
        			var nDiv03Bottom = nexacro.toNumber(this.Div05.Div03.top) + nexacro.toNumber(this.Div05.Div03.height);
        			//맨밑 Static (* 업무시간외 회원가입시 익일 업무처리가 됩니다.)
        			this.Div05.Static138.set_top(nDiv03Bottom);
        			this.Div05.Static138.set_visible(true);
        		} else {
        			this.Div05.Div03.set_visible(false);
        			this.Div05.Static138.set_top(nBasicBottom);
        		}
        		this.Div05.set_height(nexacro.toNumber(this.Div05.Static138.top) + nexacro.toNumber(this.Div05.Static138.height) + 15);
        		this.resetScroll();
        	}
        }

        /*******************************************************************************************************************
         회원ID유효성검사
        ********************************************************************************************************************/
        this.fn_idValidation = function()
        {
        	if (this.gfn_isNull(this.Div05.edt_MB_ID.value)) {
        		alert("회원ID를 입력 하세요");
        		this.Div05.edt_MB_ID.setFocus();
        		return false;
        	}

            /*ID체크로직*/
        	var idReg = /^[[a-zA-Z]{2}[[a-zA-Z0-9+]{5,7}$/g;
        	if ( !idReg.test(this.Div05.edt_MB_ID.value)) {
        		alert("회원ID는 영문자 두자리로 시작하는 7-9자 영문자 또는 숫자이어야 합니다.\n 예) aa14780 ");
        		return false;
        	}

        	var id_chk_num = this.Div05.edt_MB_ID.value.search(/[0-9]/g);
        	var id_chk_eng = this.Div05.edt_MB_ID.value.search(/[a-z]/ig);
        	if (id_chk_num < 0 || id_chk_eng < 0) {
        		alert("회원ID는 숫자와 영문자를 혼용하여야 합니다.\n 예) aa14780 ");
        		return false;
        	}
        	return true;
        }

        /***************************************************
        	통장사본파일업로드
        ****************************************************/
        this.Div03_FileUpload_onitemchanged = function(obj,e)
        {
        	this.gfn_callUpload(obj);
        }

        this.Div03_FileUpload_onsuccess = function(obj,e)
        {
        	if (e.datasets == null) {
        	} else {
        		this.ds_uploadresult00.clear();
        		this.ds_uploadresult00.appendData(e.datasets[0],false,false);
        		this.ds_payInfo.setColumn(0,"BB_FL_TMPNM"	,this.ds_uploadresult00.getColumn(0,"SYSTEMFILENAME"));
        		this.ds_payInfo.setColumn(0,"BB_FLNM"		,this.ds_uploadresult00.getColumn(0,"ORGFNAME"));
        	}
        }

        /***************************************************
        	사업자등록증파일업로드
        ****************************************************/
        this.Div03_FileUpload00_onitemchanged = function(obj,e)
        {
        	this.gfn_callUpload(obj);
        }

        this.Div03_FileUpload00_onsuccess = function(obj,e)
        {
        	if (e.datasets == null) {
        	} else {
        		this.ds_uploadresult01.clear();
        		this.ds_uploadresult01.appendData(e.datasets[0],false,false);

        
        		this.ds_payInfo.setColumn(0,"BZ_RGWRRT_FL_TMPNM"	,this.ds_uploadresult01.getColumn(0,"SYSTEMFILENAME"));
        		this.ds_payInfo.setColumn(0,"BZ_RGWRRT_FLNM"		,this.ds_uploadresult01.getColumn(0,"ORGFNAME"));

        		this.ds_uploadresult00.clearData();
        		this.ds_payInfo.setColumn(0,"", "");
        	}
        }

        /***************************************************
        	파일업로드오류
        ****************************************************/

        this.Div05_Div00_FileUpload_onerror = function(obj,e)
        {
        	trace("FileUpload_onerror");
        	trace("e.errorcode: "+e.errorcode);
        	trace("e.errormsg: "+e.errormsg);
        }

        /*****************************************************************************
        	거래처코드변경에 따른 회사정보조회
        *****************************************************************************/
        this.Div05_cbo_NA_TRPL_C_onitemchanged = function(obj,e)
        {
        	var usrTpc = this.ds_naTrplC.getColumn(obj.index, "USR_TPC");

        	if (this.gfn_isNull(usrTpc) || usrTpc == "01" || usrTpc == "03" || usrTpc == "05" || usrTpc == '81') {
        		this.fn_officeInfo(this.ds_naTrplC.getColumn(obj.index,"NA_TRPL_C"));
        	} else {
        		this.alert("해당 업체는 세금계산서전용으로 가입되어 있어 협력업체로 가입하실 수 없습니다.");
        		this.Div05.cbo_NA_TRPL_C.set_index(0);
        	}
        }

        /*****************************************************************************
        	납부정보 개인/법인에 따른 정보변경
        *****************************************************************************/
        this.PSCRP_DSC_onitemchanged = function(obj,e)
        {
        	if (this.Div05.Div03.rdo_PSCRP_DSC.value == "1") {
        		//개인
        		this.Div05.Div03.Static111.set_text("생년월일");
        		this.Div05.Div03.mae_BIRTH.set_visible(true);
        		this.Div05.Div03.mae_BZNO.set_visible(false);
        	} else if (this.Div05.Div03.rdo_PSCRP_DSC.value == "2") {
        		//법인
        		this.Div05.Div03.Static111.set_text("사업자번호");
        		this.Div05.Div03.mae_BZNO.set_visible(true);
        		this.Div05.Div03.mae_BIRTH.set_visible(false);
        	}
        }

        /*****************************************************************************
        	납부방법에 따른 컨드롤 변경
        *****************************************************************************/
        this.fn_stlMethDsc= function(type)
        {
        	if (type =="1") {
        		this.Div05.Div03.cbo_BNK_C.set_index(this.ds_bankCode.findRow("SIMP_C", "011"));
        		this.Div05.Div03.cbo_BNK_C.set_enable(true);		//거래은행
        		this.Div05.Div03.edt_DPRNM.set_enable(true);		//예금주
        		this.Div05.Div03.rdo_PSCRP_DSC.set_enable(true);	//개인/법인
        		this.Div05.Div03.mae_BIRTH.set_enable(true);		//생년월일
        		this.Div05.Div03.mae_BZNO.set_enable(true);			//사업자번호
        		this.Div05.Div03.edt_AC_NO.set_enable(true);		//계좌번호
        		this.Div05.Div03.edt_AC_NO.set_value("");			//계좌번호
        		this.Div05.Div03.edt_AC_NO.set_readonly(false);		//계좌번호
        		this.Div05.Div03.FileUpload.set_enable(true);		//통장사본
        		this.Div05.Div03.cbo_BNK_C.set_readonly(true);
        		this.Div05.Div03.rdo_HOP_DRW_DD.set_enable(true);	//희망출금일
        		this.Div05.Div03.chk_DRW_FTR_AGR_YN.set_enable(true);
        		this.Div05.Div03.chk_DRW_FTR_AGR_YN.set_readonly(false);
        		this.Div05.Div03.chk_FNC_TR_INF_OFR_AGR_YN.set_enable(true);
        		this.Div05.Div03.chk_FNC_TR_INF_OFR_AGR_YN.set_readonly(false);
        		this.Div05.Div03.txt_contents1.style.set_background("#ffffff");
        		this.Div05.Div03.txt_contents2.style.set_background("#ffffff");
        	} else if (type =="2") {
        		this.Div05.Div03.cbo_BNK_C.set_readonly(false);
        		this.Div05.Div03.cbo_BNK_C.set_enable(true);		//거래은행
        		this.Div05.Div03.edt_DPRNM.set_enable(true);		//예금주
        		this.Div05.Div03.rdo_PSCRP_DSC.set_enable(true);	//개인/법인
        		this.Div05.Div03.mae_BIRTH.set_enable(true);		//생년월일
        		this.Div05.Div03.mae_BZNO.set_enable(true);			//사업자번호
        		this.Div05.Div03.edt_AC_NO.set_enable(true);		//계좌번호
        		this.Div05.Div03.edt_AC_NO.set_value("");			//계좌번호
        		this.Div05.Div03.edt_AC_NO.set_readonly(false);		//계좌번호
        		this.Div05.Div03.FileUpload.set_enable(true);		//통장사본
        		this.Div05.Div03.rdo_HOP_DRW_DD.set_enable(true);	//희망출금일
        		this.Div05.Div03.chk_DRW_FTR_AGR_YN.set_enable(true);
        		this.Div05.Div03.chk_DRW_FTR_AGR_YN.set_readonly(false);
        		this.Div05.Div03.chk_FNC_TR_INF_OFR_AGR_YN.set_enable(true);
        		this.Div05.Div03.chk_FNC_TR_INF_OFR_AGR_YN.set_readonly(false);
        		this.Div05.Div03.txt_contents1.style.set_background("#ffffff");
        		this.Div05.Div03.txt_contents2.style.set_background("#ffffff");
        	} else if (type =="3") {
        		/*가상계좌 선택시
        		 - 기존 계좌가 존재하지 않으며, 가상계좌가 존재하지 않을 경우*/

        		if (this.gfn_isNull(this.orgAcNo)) {
        			if (this.Div05.Div03.rdo_STL_METH_DSC.value == "3" && this.gfn_isNull(this.vrtlAcNo)) {
        				this.fn_getVirtualAccount();
        			}
        		} else {
        			if (this.Div05.Div03.rdo_STL_METH_DSC.value == "3" && this.gfn_isNull(this.vrtlAcNo)) {
        				this.fn_getVirtualAccount();
        			}
        		}
        		this.Div05.Div03.cbo_BNK_C.set_readonly(true);
        		this.Div05.Div03.cbo_BNK_C.set_index(this.ds_bankCode.findRow("SIMP_C", "011"));
        		this.Div05.Div03.rdo_HOP_DRW_DD.set_enable(false);
        		this.Div05.Div03.edt_DPRNM.set_value("");
        		this.Div05.Div03.rdo_PSCRP_DSC.set_value("");
        		this.Div05.Div03.mae_BIRTH.set_value("");
        		this.Div05.Div03.mae_BZNO.set_value("");
        		this.Div05.Div03.edt_AC_NO.set_value(this.vrtlAcNo);
        		this.ds_uploadresult00.clearData();
        		this.ds_payInfo.setColumn(0,"BB_FL_TMPNM"	,"");
        		this.ds_payInfo.setColumn(0,"BB_FLNM"		,"");
        		this.Div05.Div03.cbo_BNK_C.set_enable(true);		//거래은행
        		this.Div05.Div03.edt_AC_NO.set_enable(true);		//계좌번호
        		this.Div05.Div03.edt_AC_NO.set_readonly(true);		//계좌번호
        		this.Div05.Div03.edt_DPRNM.set_enable(false);		//예금주
        		this.Div05.Div03.rdo_PSCRP_DSC.set_enable(false);	//개인/법인
        		this.Div05.Div03.mae_BIRTH.set_enable(false);		//생년월일
        		this.Div05.Div03.mae_BZNO.set_enable(false);		//사업자번호
        		this.Div05.Div03.FileUpload.set_enable(false);		//통장사본
        		/*파일처리 S*/
        		if (this.Div05.Div03.FileUpload.index > -1) {
        			this.Div05.Div03.FileUpload.deleteItem(this.Div05.Div03.FileUpload.index);
        		}
        		this.Div05.Div03.FileUpload.set_itemcount(1);
        		/*파일처리 E*/
        		this.Div05.Div03.rdo_HOP_DRW_DD.set_enable(false);	//희망출금일
        		this.Div05.Div03.chk_DRW_FTR_AGR_YN.set_enable(false);
        		this.Div05.Div03.chk_FNC_TR_INF_OFR_AGR_YN.set_enable(false);
        		this.Div05.Div03.txt_contents1.style.set_background("#f0f0f0");
        		this.Div05.Div03.txt_contents2.style.set_background("#f0f0f0");
        	} else {
        		this.Div05.Div03.cbo_BNK_C.set_readonly(false);
        		this.Div05.Div03.cbo_BNK_C.set_enable(true);		//거래은행
        		this.Div05.Div03.edt_DPRNM.set_enable(true);		//예금주
        		this.Div05.Div03.rdo_PSCRP_DSC.set_enable(true);	//개인/법인
        		this.Div05.Div03.mae_BIRTH.set_enable(true);		//생년월일
        		this.Div05.Div03.mae_BZNO.set_enable(true);			//사업자번호
        		this.Div05.Div03.edt_AC_NO.set_enable(true);		//계좌번호
        		this.Div05.Div03.edt_AC_NO.set_readonly(false);		//계좌번호
        		this.Div05.Div03.FileUpload.set_enable(true);		//통장사본
        		this.Div05.Div03.rdo_HOP_DRW_DD.set_enable(true);	//희망출금일
        		this.Div05.Div03.chk_DRW_FTR_AGR_YN.set_enable(true);
        		this.Div05.Div03.chk_DRW_FTR_AGR_YN.set_readonly(false);
        		this.Div05.Div03.chk_FNC_TR_INF_OFR_AGR_YN.set_enable(true);
        		this.Div05.Div03.chk_FNC_TR_INF_OFR_AGR_YN.set_readonly(false);
        		this.Div05.Div03.txt_contents1.style.set_background("#ffffff");
        		this.Div05.Div03.txt_contents2.style.set_background("#ffffff");
        	}
        }

        /*******************************************************************************************************************
         가상계좌번호생성
        ********************************************************************************************************************/
        this.fn_getVirtualAccount = function()
        {
        	var param 		  = "";
        	var sSvcID        = "getVirtualAccount";
        	var sURL          = "svc::rest/pt/usrinf/getVirtualAccount";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_vrtlAcNo=ds_vrtlAcNo";
        	var sArgument     =  param;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /*****************************************************************************
        	납부방법에 따른 컨드롤 변경 - 버튼
        *****************************************************************************/
        this.Div05_Div03_rdo_STL_METH_DSC_onitemchanged = function(obj,e)
        {
        	this.fn_stlMethDsc(obj.value);
        }

        /***************************************************
        	callback메소드
        ****************************************************/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	 if (svcID=="checkMbIdDup") {
        		if (ErrorCode == 0 ) {
        			alert("입력하신 회원ID는 사용할 수 있습니다.");
        			this.div_hiddenArea.edt_finalMbId.set_value(this.Div05.edt_MB_ID.value);
        		} else if (ErrorCode == -2) {
        			this.gfn_getMessage("alert", "error.message.dupUserId");
        			this.Div05.edt_MB_ID.setFocus();
        		} else {
        			this.gfn_getMessage("alert", "error.message.server.exception");
        		}
        	} else if (svcID =="sendSms") {
        		if (ErrorCode < 0 ) {
        			this.gfn_getMessage("alert", "error.message.server.exception");
        		} else {
        			alert("고객님의 휴대전화로 인증번호가 발송되었습니다.");
        			this.div_hiddenArea.edt_randomNumber.set_value(this.ds_certNum.getColumn(0,"CERT_NUM"));
        			//alert("인증번호 ["+this.div_hiddenArea.edt_randomNumber.value+"]");
        		}
        	} else if (svcID =="insertMB") {
        		if (ErrorCode < 0 ) {
        			this.gfn_getMessage("alert", "error.message.server.exception");
        		} else {
        			alert("정상 신청 되었습니다.");
        			this.fn_close();
        		}
        	} else if (svcID =="retriveNaTrplCList") {
        		if (ErrorCode < 0 ) {
        			this.gfn_getMessage("alert", "error.message.server.exception");
        		} else {
        			if (this.ds_naTrplC.rowcount == 0 ) {
        				alert("사업자번호에 해당하는 거래처코드가 존재하지 않습니다.사업자번호를 확인하시기 바랍니다.");
        				this.ds_officeInfo.clearData();
        				this.ds_officeInfo.addRow();f
        				this.ds_officeInfo.setColumn(0,"BZNO1",this.div_hiddenArea.edt_BZNO1.value);
        				this.ds_officeInfo.setColumn(0,"BZNO2",this.div_hiddenArea.edt_BZNO2.value);
        				this.ds_officeInfo.setColumn(0,"BZNO3",this.div_hiddenArea.edt_BZNO3.value);
        			} else {
        				this.ds_naTrplC.insertRow(0);
        				this.ds_naTrplC.setColumn(0,"NA_TRPL_C", "");
        				this.ds_naTrplC.setColumn(0,"CLNTNM", "=========선택=========");
        				this.Div05.cbo_NA_TRPL_C.set_index(0);

        			}
        		}
        	} else if (svcID == "retrieveOfficeInfo") {
        		if (ErrorCode < 0 ) {
        			this.gfn_getMessage("alert", "error.message.server.exception");
        		} else {
        			if (this.ds_entSvc.rowcount >0) {
        				this.fn_entSvcdisplay();
        			}

        			if (this.ds_officeInfo.rowcount >0) {
        				if (this.ds_officeInfo.getColumn(0 , "NA_MBCO_DSC") != "1") {
        					this.Div05.Static15.set_visible(true) ;
        					this.Div05.Static16.set_visible(true) ;
        					this.Div05.Static17.set_visible(true) ;
        					this.Div05.edt_BRC_BZNO1.set_visible(true) ;
        					this.Div05.edt_BRC_BZNO2.set_visible(true) ;
        					this.Div05.edt_BRC_BZNO3.set_visible(true) ;

        					this.Div05.edt_BRC_BZNO1.set_value(this.ds_officeInfo.getColumn(0 , "BZNO1")) ;
        					this.Div05.edt_BRC_BZNO2.set_value(this.ds_officeInfo.getColumn(0 , "BZNO2")) ;
        					this.Div05.edt_BRC_BZNO3.set_value(this.ds_officeInfo.getColumn(0 , "BZNO3")) ;
        				} else {
        					this.Div05.Static15.set_visible(false) ;
        					this.Div05.Static16.set_visible(false) ;
        					this.Div05.Static17.set_visible(false) ;
        					this.Div05.edt_BRC_BZNO1.set_visible(false) ;
        					this.Div05.edt_BRC_BZNO2.set_visible(false) ;
        					this.Div05.edt_BRC_BZNO3.set_visible(false) ;
        					
        				}
        			}
        		}
        	} else if (svcID == "retriveBilingInfo") {
        		if (ErrorCode < 0 ) {
        			this.gfn_getMessage("alert", "error.message.server.exception");
        		} else {
        			this.orgAcNo = this.gfn_nullToEmpty(this.ds_payInfo.getColumn(0,"ACNO"));
        			if (this.ds_payInfo.rowcount >0) {
        				this.fn_stlMethDsc(this.ds_payInfo.getColumn(0,"STL_METH_DSC"));
        				this.Div05.Div03.edt_AC_NO.set_value(this.gfn_nullToEmpty(this.ds_payInfo.getColumn(0,"ACNO")));
        				if (this.ds_payInfo.getColumn(0,"PSCRP_DSC") == "1") {
        					this.Div05.Div03.mae_BIRTH.set_value(this.ds_payInfo.getColumn(0,"DPR_NO"));
        				} else {
        					this.Div05.Div03.mae_BZNO.set_value(this.ds_payInfo.getColumn(0,"DPR_NO"));
        				}
        			} else {
        				this.ds_payInfo.addRow();
        			}
        		}
        	} else if (svcID == "retrieveNaTrplCAuthLst") {
        		if (ErrorCode < 0 ) {
        			this.gfn_getMessage("alert", "error.message.server.exception");
        		} else {
        			//trace(this.ds_naTrplCAuth.saveXML());
        		}
        	} else if (svcID == "getVirtualAccount") {
        		this.vrtlAcNo = this.ds_vrtlAcNo.getColumn(0,"VRTL_ACNO");
        		this.Div05.Div03.edt_AC_NO.set_value(this.vrtlAcNo);
        	}
        }

        this.fn_BZNOCheck = function()
        {
        	var strNumb =  this.ds_userInfo.getColumn(0,"BZNO1") +this.ds_userInfo.getColumn(0,"BZNO2") + this.ds_userInfo.getColumn(0,"BZNO3")  ;

        	if (strNumb =='0000000000') {
        		alert("지사 사업자등록번호가 잘못되었습니다.");
        		return false;
        	}
        	var sumMod = 0 ;
        	sumMod += nexacro.toNumber(strNumb.substring(0,1));
        	sumMod += nexacro.toNumber(strNumb.substring(1,2)) * 3 % 10;
        	sumMod += nexacro.toNumber(strNumb.substring(2,3)) * 7 % 10;
        	sumMod += nexacro.toNumber(strNumb.substring(3,4)) * 1 % 10;
        	sumMod += nexacro.toNumber(strNumb.substring(4,5)) * 3 % 10;
        	sumMod += nexacro.toNumber(strNumb.substring(5,6)) * 7 % 10;
        	sumMod += nexacro.toNumber(strNumb.substring(6,7)) * 1 % 10;
        	sumMod += nexacro.toNumber(strNumb.substring(7,8)) * 3 % 10;
        	sumMod += Math.floor(parseInt(strNumb.substring(8,9)) * 5 / 10);
        	sumMod += nexacro.toNumber(strNumb.substring(8,9)) * 5 % 10;
        	sumMod += nexacro.toNumber(strNumb.substring(9,10));

        	if (sumMod % 10 != 0) {
        		alert("지사 사업자등록번호가 잘못되었습니다.");
        		this.Div05.edt_BRC_BZNO1.setFocus();
        		return false;
        	}
        	return true;
        }

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

        this.CheckBox_BRANCH_BZBO_onchanged = function(obj,e)
        {
        	if (e.postvalue == 'Y') {
        		if (this.gfn_isNull(this.Div05.cbo_NA_TRPL_C.value)) {
        			alert("거래처코드를 선택해 주세요.");
        			this.Div05.chk_BILLING_AUTH.set_value("N");
        			this.Div05.cbo_NA_TRPL_C.setFocus();
        			return false;
        		}

        		if (this.Div05.chk_BILLING_AUTH.value == "Y") {
        			this.Div05.Div03.edt_REPMNM00_C.set_value(this.Div05.edt_CLNTNM.value);

        			if (this.ds_officeInfo.getColumn(0,"NA_MBCO_DSC") == "1") {//본사
        				this.Div05.Div03.edt_B_BZN01_C.set_value(this.Div05.edt_BZNO01.value);
        				this.Div05.Div03.edt_B_BZN02_C.set_value(this.Div05.edt_BZNO02.value);
        				this.Div05.Div03.edt_B_BZN03_C.set_value(this.Div05.edt_BZNO03.value);
        			}

        			if (this.ds_officeInfo.getColumn(0,"NA_MBCO_DSC") != "1") {//지사
        				this.Div05.Div03.edt_B_BZN01_C.set_value(this.Div05.edt_BRC_BZNO1.value);
        				this.Div05.Div03.edt_B_BZN02_C.set_value(this.Div05.edt_BRC_BZNO2.value);
        				this.Div05.Div03.edt_B_BZN03_C.set_value(this.Div05.edt_BRC_BZNO3.value);
        			}

        			this.Div05.Div03.edt_REPMNM_C.set_value(this.Div05.edt_REPMNM.value);
        			this.Div05.Div03.edt_ZIP_C.set_value(this.Div05.edt_FZIP.value + this.Div05.edt_RZIP.value);
        			this.Div05.Div03.edt_DONGUP_C.set_value(this.Div05.edt_DONGBW.value);
        			this.Div05.Div03.edt_DONGBW_C.set_value(this.Div05.edt_DONGUP.value);

        			this.Div05.Div03.edt_BZTPNM_C.set_value(this.ds_officeInfo.getColumn(0,"BZTPNM"));
        			this.Div05.Div03.edt_BZCCNM_C.set_value(this.ds_officeInfo.getColumn(0,"BZCCNM"));
        		}
        	}

        	if (e.postvalue == 'N') {
        		if (this.Div05.chk_BILLING_AUTH.value == "Y") {
        			this.Div05.Div03.edt_REPMNM00_C.set_value("");

        			if (this.ds_officeInfo.getColumn(0,"NA_MBCO_DSC") == "1") {//본사
        				this.Div05.Div03.edt_B_BZN01_C.set_value("");
        				this.Div05.Div03.edt_B_BZN02_C.set_value("");
        				this.Div05.Div03.edt_B_BZN03_C.set_value("");
        			}

        			if (this.ds_officeInfo.getColumn(0,"NA_MBCO_DSC") != "1") {//지사
        				this.Div05.Div03.edt_B_BZN01_C.set_value("");
        				this.Div05.Div03.edt_B_BZN02_C.set_value("");
        				this.Div05.Div03.edt_B_BZN03_C.set_value("");
        			}

        			this.Div05.Div03.edt_REPMNM_C.set_value("");
        			this.Div05.Div03.edt_ZIP_C.set_value("");
        			this.Div05.Div03.edt_DONGUP_C.set_value("");
        			this.Div05.Div03.edt_DONGBW_C.set_value("");
        			this.Div05.Div03.edt_BZTPNM_C.set_value("");
        			this.Div05.Div03.edt_BZCCNM_C.set_value("");
        		}
        	}
        }

        /******** 공인인증서 서명 프로그램 설치 ***********/
        this.fn_checkOpenWebSign = function()
        {
        	var obj  = this.lookup("objWeb");
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

        this.fn_popupAfter = function(strId,strVal)
        {
        	if (strId == "popupAgree") {
        		if (this.gfn_nullToEmpty(strVal) == "Y") {
        			this.Div05.Div03.cbk_SVC38.set_value("Y");
        		} else {
        			this.Div05.Div03.cbk_SVC38.set_value("N");
        		}
        	}
        }

        /**
         * 마감간소화 약관동의
         */
        this.fn_confirmSimplifyPolicy = function(obj,e)
        {
        	if (e.prevalue == "N") {
        		this.fn_showSimplifyPolicy("Y");
        	}
        }

        /**
         * 마감간소화 이용 약관 팝업
         * isJoin : Y면 동의버튼 표시(서비스 신청)
         */
        this.fn_showSimplifyPolicy = function(isJoin)
        {
        	var pId = this.gfn_isNull(isJoin) ? "popupInfo" : "popupAgree";
        	var sOption = "title=true, autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup(pId, "OMG.PT::OMG_DS_SC_4623_P01.xfdl", {isJoin:this.gfn_nullToEmpty(isJoin)}, sOption, sPopupCallBack);
        }

        /**
         * 마감간소화/이용료 클릭이벤트
         */
        this.fn_simplifyOnClick = function(obj,e)
        {
        	if (obj.id == "btn_info") {
        		var sOption = "title=true, width=1000, height=600";
        		var sPopupCallBack = "fn_popupAfter";
        		this.gfn_openPopup("popupFee", "OMG.PT::OMG_DS_SC_4630.xfdl", {}, sOption, sPopupCallBack);
        	} else if (obj.id == "btn_info2") {
        		this.fn_showSimplifyPolicy();
        	}
        }

        this.fn_autofocus = function(obj,e)
        {
        	if (e.altKey || e.ctrlKey || e.shiftKey) { return; }
        	else if (e.keycode > 15 && e.keycode < 47) { return; }
        	
        	if (obj.id == "edt_BZNO01") {
        		if (obj.getLength() == 3) {
        			this.Div05.edt_BZNO02.setFocus();
        		}
        	} else if (obj.id == "edt_BZNO02") {
        		if (obj.getLength() == 2) {
        			this.Div05.edt_BZNO03.setFocus();
        		}
        	} else if (obj.id == "edt_BZNO03" && e.keycode == 13) {
        		this.Div05_btn_search_onclick();
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Div01.txa_arr01.addEventHandler("oneditclick", this.Div01_TextArea00_oneditclick, this);
            this.Div01.Div02.btn_notAgree.addEventHandler("onclick", this.Div01_Div02_btn_notAgree_onclick, this);
            this.Div01.Div02.btn_agree.addEventHandler("onclick", this.Div01_Div02_btn_agree_onclick, this);
            this.Div01.argee02.addEventHandler("oneditclick", this.Div01_TextArea00_oneditclick, this);
            this.Div01.chk_allAgree.addEventHandler("onclick", this.Div01_chk_allAgree_onclick, this);
            this.Div01.Static01.addEventHandler("onclick", this.Div01_chk_allAgree_onclick, this);
            this.Div01.Static02.addEventHandler("onclick", this.Div01_Static01_onclick, this);
            this.Div01.Static03.addEventHandler("onclick", this.Div01_Static01_onclick, this);
            this.Div01.Static04.addEventHandler("onclick", this.Div01_Static01_onclick, this);
            this.Div05.Div02.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.Div05.Div02.btn_prev.addEventHandler("onclick", this.btn_prev_onclick, this);
            this.Div05.edt_BZNO02.addEventHandler("onkeyup", this.fn_autofocus, this);
            this.Div05.rdo_COMP_TPC.addEventHandler("onitemclick", this.Radio00_onitemclick, this);
            this.Div05.Static03.addEventHandler("onclick", this.Div05_Static03_onclick, this);
            this.Div05.chk_BILLING_AUTH.addEventHandler("onchanged", this.CheckBox04_onchanged, this);
            this.Div05.btn_sendSms.addEventHandler("onclick", this.btn_sendSms_onclick, this);
            this.Div05.btn_certificate.addEventHandler("onclick", this.btn_certificate_onclick, this);
            this.Div05.Div03.rdo_STL_METH_DSC.addEventHandler("onitemchanged", this.Div05_Div03_rdo_STL_METH_DSC_onitemchanged, this);
            this.Div05.Div03.rdo_HOP_DRW_DD.addEventHandler("onitemclick", this.Div03_rdo_HOP_DRW_DD_onitemclick, this);
            this.Div05.Div03.rdo_PSCRP_DSC.addEventHandler("onitemchanged", this.PSCRP_DSC_onitemchanged, this);
            this.Div05.Div03.FileUpload.addEventHandler("onsuccess", this.Div03_FileUpload_onsuccess, this);
            this.Div05.Div03.FileUpload.addEventHandler("onerror", this.Div05_Div00_FileUpload_onerror, this);
            this.Div05.Div03.FileUpload.addEventHandler("onitemchanged", this.Div03_FileUpload_onitemchanged, this);
            this.Div05.Div03.FileUpload00.addEventHandler("onsuccess", this.Div03_FileUpload00_onsuccess, this);
            this.Div05.Div03.FileUpload00.addEventHandler("onerror", this.Div05_Div00_FileUpload_onerror, this);
            this.Div05.Div03.FileUpload00.addEventHandler("onitemchanged", this.Div03_FileUpload00_onitemchanged, this);
            this.Div05.Div03.chk_BRANCH_BZBO.addEventHandler("onchanged", this.CheckBox_BRANCH_BZBO_onchanged, this);
            this.Div05.Div03.cbk_SVC38.addEventHandler("onchanged", this.fn_confirmSimplifyPolicy, this);
            this.Div05.Div03.btn_info2.addEventHandler("onclick", this.fn_simplifyOnClick, this);
            this.Div05.Div03.btn_info.addEventHandler("onclick", this.fn_simplifyOnClick, this);
            this.Div05.Static10.addEventHandler("onclick", this.Div05_Static03_onclick, this);
            this.Div05.rdo_SEX_DSC.addEventHandler("onitemclick", this.Radio00_onitemclick, this);
            this.Div05.btn_checkMbIdDup.addEventHandler("onclick", this.Div05_btn_checkMbIdDup_onclick, this);
            this.Div05.edt_BZNO01.addEventHandler("onkeyup", this.fn_autofocus, this);
            this.Div05.Static138.addEventHandler("onclick", this.Static138_onclick, this);
            this.Div05.edt_BZNO03.addEventHandler("onkeyup", this.fn_autofocus, this);
            this.Div05.btn_search.addEventHandler("onclick", this.Div05_btn_search_onclick, this);
            this.Div05.cbo_NA_TRPL_C.addEventHandler("onitemchanged", this.Div05_cbo_NA_TRPL_C_onitemchanged, this);
            this.Div05.Static13.addEventHandler("onclick", this.Div05_Static13_onclick, this);
            this.Div05.Static14.addEventHandler("onclick", this.Div05_Static13_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_5110.xfdl");

       
    };
}
)();
