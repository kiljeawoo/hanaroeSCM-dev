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
                this.set_name("OMG_DS_SC_5180");
                this.set_titletext("전자계약전용회원가입");
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
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NAAC_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"TRPL_ABR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_MBCO_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"UP_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"FZIP\" type=\"STRING\" size=\"256\"/><Column id=\"RZIP\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"DONGUP\" type=\"STRING\" size=\"256\"/><Column id=\"DONGBW\" type=\"STRING\" size=\"256\"/><Column id=\"NA_RGN_C\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NAT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ATEL\" type=\"STRING\" size=\"256\"/><Column id=\"HTEL\" type=\"STRING\" size=\"256\"/><Column id=\"STEL\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_RGNO\" type=\"STRING\" size=\"256\"/><Column id=\"HFAX\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"MPSVNO\" type=\"STRING\" size=\"256\"/><Column id=\"MPHNO\" type=\"STRING\" size=\"256\"/><Column id=\"MPSQNO\" type=\"STRING\" size=\"256\"/><Column id=\"NA_USR_SYS_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"COPNO_CIF_NO\" type=\"STRING\" size=\"256\"/><Column id=\"REPMNM\" type=\"STRING\" size=\"256\"/><Column id=\"BZCCNM\" type=\"STRING\" size=\"256\"/><Column id=\"BZTPNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TXBZ_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CMENO\" type=\"STRING\" size=\"256\"/><Column id=\"LS_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USR_SYS_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_SEAL_FLNM\" type=\"STRING\" size=\"256\"/><Column id=\"TRPL_DTL_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"STD_COMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_APL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LSCGMN_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"DSTR_TRPL_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"BZNO1\" type=\"STRING\" size=\"30\"/><Column id=\"BZNO2\" type=\"STRING\" size=\"30\"/><Column id=\"BZNO3\" type=\"STRING\" size=\"30\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"30\"/><Column id=\"COMP_TPC\" type=\"STRING\" size=\"30\"/><Column id=\"USR_TELNO\" type=\"STRING\" size=\"30\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"30\"/><Column id=\"REPMNM\" type=\"STRING\" size=\"30\"/><Column id=\"DONGUP\" type=\"STRING\" size=\"30\"/><Column id=\"DONGBW\" type=\"STRING\" size=\"30\"/><Column id=\"FZIP\" type=\"STRING\" size=\"30\"/><Column id=\"RZIP\" type=\"STRING\" size=\"30\"/><Column id=\"TEL1\" type=\"STRING\" size=\"30\"/><Column id=\"TEL2\" type=\"STRING\" size=\"30\"/><Column id=\"TEL3\" type=\"STRING\" size=\"30\"/><Column id=\"NA_MBCO_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BZCCNM\" type=\"STRING\" size=\"60\"/><Column id=\"BZTPNM\" type=\"STRING\" size=\"50\"/><Column id=\"USR_SYS_C\" type=\"STRING\" size=\"2\"/><Column id=\"NAAC_DSC\" type=\"STRING\" size=\"1\"/></ColumnInfo><Rows><Row><Col id=\"BZNO1\"/><Col id=\"BZNO2\"/><Col id=\"BZNO3\"/><Col id=\"NA_TRPL_C\"/><Col id=\"COMP_TPC\"/><Col id=\"USR_TELNO\"/><Col id=\"CLNTNM\"/></Row></Rows>");
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

            obj = new Dataset("ds_regNaTrplC", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NAAC_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"TRPL_ABR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_MBCO_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"UP_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"FZIP\" type=\"STRING\" size=\"256\"/><Column id=\"RZIP\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"DONGUP\" type=\"STRING\" size=\"256\"/><Column id=\"DONGBW\" type=\"STRING\" size=\"256\"/><Column id=\"NA_RGN_C\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NAT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ATEL\" type=\"STRING\" size=\"256\"/><Column id=\"HTEL\" type=\"STRING\" size=\"256\"/><Column id=\"STEL\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_RGNO\" type=\"STRING\" size=\"256\"/><Column id=\"HFAX\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"MPSVNO\" type=\"STRING\" size=\"256\"/><Column id=\"MPHNO\" type=\"STRING\" size=\"256\"/><Column id=\"MPSQNO\" type=\"STRING\" size=\"256\"/><Column id=\"NA_USR_SYS_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"COPNO_CIF_NO\" type=\"STRING\" size=\"256\"/><Column id=\"REPMNM\" type=\"STRING\" size=\"256\"/><Column id=\"BZCCNM\" type=\"STRING\" size=\"256\"/><Column id=\"BZTPNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TXBZ_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CMENO\" type=\"STRING\" size=\"256\"/><Column id=\"LS_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USR_SYS_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_SEAL_FLNM\" type=\"STRING\" size=\"256\"/><Column id=\"TRPL_DTL_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"STD_COMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_APL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LSCGMN_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"DSTR_TRPL_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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

            obj = new Static("Static87", "absolute", "728", "384", "17", "149", null, null, this);
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

            obj = new Div("div_hiddenArea", "absolute", "17", "520", "484", "166", null, null, this);
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
            obj.set_value("05");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_finalMbId", "absolute", "320", "41", "138", "21", null, null, this.div_hiddenArea);
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
            obj = new Edit("edt_chgAuthYn", "absolute", "175", "102", "28.51%", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("27");
            obj.set_value("N");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_chgBillingYn", "absolute", "320", "102", "28.51%", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("28");
            obj.set_value("N");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_chgSealAmnYn", "absolute", "320", "131", "28.51%", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("29");
            obj.set_value("N");
            this.div_hiddenArea.addChild(obj.name, obj);

            obj = new Div("Div05", "absolute", "17", "16", "711", "534", null, null, this);
            obj.set_taborder("100");
            obj.set_text("Div01");
            obj.style.set_background("transparent");
            obj.set_visible("false");
            obj.set_scrollbars("autovert");
            obj.set_dragscrolltype("both");
            this.addChild(obj.name, obj);
            obj = new Static("Static91", "absolute", "0", "87", "711", "29", null, null, this.Div05);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_Labelbg");
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
            obj.set_text("전자계약전용 회원가입");
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
            obj.set_readonly("false");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            obj.style.set_background("#ffffffff");
            obj.set_maxlength("50");
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
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_DONGBW", "absolute", "123", "205", "583", "21", null, null, this.Div05);
            obj.set_taborder("40");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_DONGUP", "absolute", "123", "230", "583", "21", null, null, this.Div05);
            obj.set_taborder("41");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_background("#ffffffff");
            obj.set_maxlength("100");
            this.Div05.addChild(obj.name, obj);
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
            obj.set_readonly("false");
            obj.set_maxlength("4");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_background("#ffffffff");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_TEL03", "absolute", "591", "147", "48", "21", null, null, this.Div05);
            obj.set_taborder("58");
            obj.set_inputtype("number");
            obj.set_readonly("false");
            obj.set_maxlength("4");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_background("#ffffffff");
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
            obj = new Edit("edt_CLNTNM", "absolute", "123", "119", "180", "21", null, null, this.Div05);
            obj.set_taborder("72");
            obj.set_readonly("false");
            obj.set_enable("true");
            obj.style.set_background("#ffffffff");
            obj.set_maxlength("100");
            this.Div05.addChild(obj.name, obj);
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
            obj = new Static("Static138", "absolute", "1", "561", "447", "21", null, null, this.Div05);
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
            obj = new Combo("cbo_NA_TRPL_C", "absolute", "476", "119", "28.55%", "21", null, null, this.Div05);
            this.Div05.addChild(obj.name, obj);
            obj.set_taborder("81");
            obj.set_innerdataset("@ds_naTrplC");
            obj.set_datacolumn("CLNTNM");
            obj.set_codecolumn("NA_TRPL_C");
            obj.set_tooltiptype("default");
            obj = new Edit("edt_TEL1", "absolute", "473", "147", "48", "21", null, null, this.Div05);
            obj.set_taborder("82");
            obj.set_inputtype("number");
            obj.set_readonly("false");
            obj.set_maxlength("4");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_background("#ffffffff");
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
            obj = new Plugin("Plugin00", "absolute", "52.62%", "9", null, "24", "20.85%", null, this.Div05);
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
            obj = new Button("btu_zip", "absolute", "210", "175", "25", "21", null, null, this.Div05);
            obj.set_taborder("92");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_NA_TRPL_C", "absolute", "599", "62", "100", "21", null, null, this.Div05);
            obj.set_taborder("93");
            obj.style.set_background("#ffffffff");
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
            		p.set_titletext("전자계약전용회원가입");
            		p.set_scrollbars("autovert");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item7","Div05.edt_NA_TRPL_C","value","ds_officeInfo","NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Div05.edt_NA_TRPL_C","tooltiptext","ds_officeInfo","NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();
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

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_5180.xfdl", "lib::comLib.xjs");
        this.addIncludeScript("OMG_DS_SC_5180.xfdl", "lib::comPolicy.xjs");
        this.registerScript("OMG_DS_SC_5180.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comPolicy.xjs", null, exports); }	//include "lib::comPolicy.xjs";
        /*******************************************************************
        	전역변수 선언
        	sScrollYn  : 서비스이용약관 스크롤여부
        	sScrollYn2 : 개인정보 스크롤여부
        *******************************************************************/
        this.sScrollYn = "";
        this.sScrollYn2 = "";
        this.orgAcNo = "";
        this.vrtlAcNo = "";
        this.isNewGln  = "N";
        this.JOIN_DATA;
        this.PASS_POLICY;

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        	this.JOIN_DATA = this.gfn_nullToEmpty(this.parent.data);
        	this.PASS_POLICY = this.gfn_nullToEmpty(this.parent.passPolicy);
        	if (this.PASS_POLICY == "Y") {
        		this.Div01.set_visible(false);
        		this.Div05.set_visible(true);
        		this.resetScroll();

        		if (!this.gfn_isNull(this.JOIN_DATA)) {
        			this.Div05.edt_BZNO01.set_value(this.JOIN_DATA.substring(0,3));
        			this.Div05.edt_BZNO02.set_value(this.JOIN_DATA.substring(3,5));
        			this.Div05.edt_BZNO03.set_value(this.JOIN_DATA.substring(5,10));
        			this.Div05.edt_BZNO01.set_enable(false);
        			this.Div05.edt_BZNO02.set_enable(false);
        			this.Div05.edt_BZNO03.set_enable(false);
        			this.Div05.btn_search.click();
        		}
        	} else {
        		this.Div01.Static00.set_text("하나로eSCM 서비스 이용약관, 개인정보 수집 및 이용에 <b v='true'><u v='true'>모두 동의</u></b>합니다.");
        		this.Div01.Static01.set_text("<b v='true'>[필수]하나로eSCM 서비스 이용약관을 끝까지 읽어 주시기 바랍니다.</b>");
        		this.Div01.Static03.set_text("<b v='true'>[필수]하나로eSCM 서비스 개인정보 수집 및 이용동의 끝까지 읽어 주시기 바랍니다.</b>");
        		this.Div01.txa_arr01.set_value(this.policyTerms);
        		this.Div01.txa_arr02.set_value(this.policyPrivacy);
        	}

        	this.ds_userInfo.setColumn(0,"SMS_RMS_YN","N");
        	this.ds_userInfo.setColumn(0,"EMAIL_RMS_YN","N");
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
         회사정보조회
        ********************************************************************************************************************/
        this.fn_regTmpfficeInfo = function(naTrplC)
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
        	if (this.gfn_isNull(this.gfn_trim(this.Div05.cbo_NA_TRPL_C.value) )) {
        		alert("거래처코드를 선택해주세요.");
        		this.Div05.cbo_NA_TRPL_C.setFocus();
        		return;
        	}

        	this.div_hiddenArea.edt_BZNO1.set_value(this.Div05.edt_BZNO01.value);
        	this.div_hiddenArea.edt_BZNO2.set_value(this.Div05.edt_BZNO02.value);
        	this.div_hiddenArea.edt_BZNO3.set_value(this.Div05.edt_BZNO03.value);

        	var param =   "bzNo1="+this.Div05.edt_BZNO01.value
        				+" bzNo2="+this.Div05.edt_BZNO02.value
        				+" bzNo3="+this.Div05.edt_BZNO03.value
        				+" naTrplC="+naTrplC
        				+" usrTpc ="+this.div_hiddenArea.edt_USR_TPC.value
        				;
        	var sSvcID        = "regTmpfficeInfo";
        	var sURL          = "svc::rest/pt/usrinf/regTmpfficeInfo";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_officeInfo=ds_officeInfo ds_naTrplCAuth=ds_naTrplCAuth ds_naTrplCAuthIng=ds_naTrplCAuthIng ds_entSvc=ds_entSvc";
        	var sArgument     =  param;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /*
         * 우편번호 조회
         */
        this.btu_zip_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"S", dsArg:this.ds_register, new_elt:this.new_elt};
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("zipCode","OMG.PT::OMG_DS_SC_9010.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	 if (strId == "naTrplC") {
        		// this.fn_naTrplC(strVal);
        	 } else if (strId == "zipCode") {
        		this.fn_addr(strVal);
        	 }
        }

        //주소 리턴 값 데이터뎃에 입력
        this.fn_addr = function(strVal)
        {
        	var fn_addr = strVal.split(",");

        	for (var i=0; i<fn_addr.length; i++) {
        		var arrAddr = fn_addr[i].split("#");
        		if (arrAddr[0] == "FZIP") {
        			//앞자리우편번호
        			this.ds_officeInfo.setColumn(0, "FZIP", arrAddr[1]);
        		} else if (arrAddr[0] == "RZIP") {
        			//뒷자리우편번호
        			this.ds_officeInfo.setColumn(0, "RZIP", arrAddr[1]);
        		} else if (arrAddr[0] == "ZIP_SQNO") {
        			//우편번호일련번호
        			this.ds_officeInfo.setColumn(0, "ZIP_SQNO",  arrAddr[1]);
        		} else if (arrAddr[0] == "DONGUP") {
        			//동이상주소
        			this.ds_officeInfo.setColumn(0, "DONGUP",  arrAddr[1]);
        		} else if (arrAddr[0] == "DONGBW") {
        			//동이하주소
        			this.ds_officeInfo.setColumn(0, "DONGBW",  arrAddr[1]);
        		}
        	}
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

        /*******************************************************************************************************************
         validation 검사
        ********************************************************************************************************************/
        this.fn_validationCheck = function()
        {
        	if (this.isNewGln == "Y") {
        		// 임시거래처 등록인 경우
        		var tmpBizno = this.ds_officeInfo.getColumn(0 , "BZNO1")
        							+ this.ds_officeInfo.getColumn(0 , "BZNO2")
        							+ this.ds_officeInfo.getColumn(0 , "BZNO3");

        		// 사업자 번호 체크
        		if (tmpBizno == '') {
        			// 임시거래처번호 신규등록이 아닌 경우
        			alert("사업자번호를 입력 후 찾기버튼을 누르시기 바랍니다.");
        			return false;
        		} else if (this.gfn_isNull(this.Div05.edt_NA_TRPL_C.value)) {
        			alert("거래처코드를 확인하세요");
        			return false;
        		}
        	} else {
        	   // 기존 거래처코드 회원가입.
        		if (this.ds_naTrplC.rowcount == 0) {
        			// 임시거래처번호 신규등록이 아닌 경우
        			alert("사업자번호를 입력 후 찾기버튼을 누르시기 바랍니다.");
        			return false;
        		} else if (this.gfn_isNull(this.Div05.cbo_NA_TRPL_C.value)) {
        			alert("거래처코드를 선택하세요");
        			return false;
        		}
        	}

        // 	if (this.gfn_isNull(this.Div05.rdo_COMP_TPC.value)) {
        // 		alert("업체유형을 선택하세요.");
        // 		this.Div05.rdo_COMP_TPC.setFocus();
        // 		return false;
        // 	}
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
        	if (this.Div05.edt_BIRTH.text.substring(0,2)  == "00" )  {
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

        	/*권한조회 API호출*/
        	this.fn_retrieveNaTrplCAuthLst();

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

        		/*
        		 *	MB_CV_DSC	회원전환구분코드
        		 *	1	전환회원
        		 *	2	미전환회원
        		 *	3	신규회원
        		 */
        		this.ds_userInfo.setColumn(0,"MB_CV_DSC","3");

        		// this.ds_userInfo.setColumn(0,"USR_TPC",this.div_hiddenArea.edt_USR_TPC.value); // 05 전자계약전용
        		this.ds_userInfo.setColumn(0,"USR_TPC","05"); // 05 전자계약전용

        		this.fn_setSvcAuth();		/*서비스권한 세팅*/
        		this.fn_setSvcInfo();		/*서비스정보 세팅*/

        		this.fn_signCallback(true, 'setPayInfo');/* 빌링권한 없음 */
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

        	/* 가입된 서비스가 없을 경우 */
        	if (this.ds_entSvc.rowcount == 0) {
        		// 기본 서비스
        		this.ds_svcInfo.addRow();
        		this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "SVC_ID", "10");
        		this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "RQ_DSC", "1");
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

        	// 전자계약 권한정보 세팅
        	this.ds_svcAuth.addRow();
        	this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "SVC_ID", "2");
        	this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "RQ_DSC", "1");

        	// 권한변경정보 세팅
        	this.div_hiddenArea.edt_chgAuthYn.set_value("Y");  // 여로 세팅
        }

        this.fn_signCallback = function(rtnValue,signId)
        {
        	if (rtnValue == "ERROR") {
        		return false;
        	} else {
        		switch(signId) {
        			case "setPayInfo":
        				/*********************************************************************************
        				  가입된 거래처코드의 회원이면서, 권한을 선택하지 않았을 경우,
        				  서비스가입변경, 권한변경,납부정보변경,인감정보 변경 falg는  'N'이다.
        				  전자계약 전용은 무료회원이므로 해당없음.
        				**********************************************************************************/
        				if (this.ds_entSvc.rowcount > 0 ) {
        					this.div_hiddenArea.edt_chgAuthYn.set_value("N");
        					this.div_hiddenArea.edt_chgSvcYn.set_value ("N");
        					this.div_hiddenArea.edt_chgBillingYn.set_value("N");
        				}

        				var sParam 		  = "blChgYn="+this.div_hiddenArea.edt_chgBillingYn.value
        								   + " svcChgYn="+this.div_hiddenArea.edt_chgSvcYn.value
        								   + " authChgYn="+this.div_hiddenArea.edt_chgAuthYn.value
        								   + " isNewGln="+ this.isNewGln

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
        	if (!idReg.test(this.Div05.edt_MB_ID.value)) {
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

        /*****************************************************************************
        	거래처코드변경에 따른 회사정보조회
        *****************************************************************************/
        this.Div05_cbo_NA_TRPL_C_onitemchanged = function(obj,e)
        {
        	var usrTpc = this.ds_naTrplC.getColumn(obj.index, "USR_TPC");

        	if (this.gfn_isNull(usrTpc) || usrTpc == "01" || usrTpc == "04" || usrTpc == "05" || usrTpc == "81") {
        		this.fn_officeInfo(this.ds_naTrplC.getColumn(obj.index,"NA_TRPL_C"));
        	} else {
        		this.alert("해당 GLN은 본부, 사업장 회원으로 가입되어 있어 전자계약 전용업체로 가입하실 수 없습니다.");
        		this.Div05.cbo_NA_TRPL_C.set_index(0);
        		this.fn_initCompany();
        	}
        }

        this.fn_initCompany = function()
        {
        	if (this.ds_officeInfo.rowcount < 1) {
        		// 거래처정보 데이터셋 행추가
        		this.ds_officeInfo.addRow();
        	}

        	// 기존값 초기화
        	this.ds_officeInfo.setColumn(0, "CLNTNM", "");
        	this.ds_officeInfo.setColumn(0, "NA_TRPL_C", "");
        	this.ds_officeInfo.setColumn(0, "REPMNM", "");
        	this.ds_officeInfo.setColumn(0, "TEL1", "");
        	this.ds_officeInfo.setColumn(0, "TEL2", "");
        	this.ds_officeInfo.setColumn(0, "TEL3", "");
        	this.ds_officeInfo.setColumn(0, "FZIP", "");
        	this.ds_officeInfo.setColumn(0, "RZIP", "");
        	this.ds_officeInfo.setColumn(0, "DONGUP", "");
        	this.ds_officeInfo.setColumn(0, "DONGBW", "");
        }

        /***************************************************
        	callback메소드
        ****************************************************/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	 if (svcID=="checkMbIdDup") {
        		if (ErrorCode == 0 ) {
        			alert("사용가능한 회원ID 입니다.");
        			this.div_hiddenArea.edt_finalMbId.set_value(this.Div05.edt_MB_ID.value);
        		} else if (ErrorCode == -2) {
        			this.gfn_getMessage("alert", "error.message.dupUserId");
        			this.Div05.edt_MB_ID.setFocus();
        		} else {
        			this.gfn_getMessage("alert", "error.message.server.exception");
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
        			this.fn_initCompany();  // 기존입력항목 초기화

        			if (this.ds_naTrplC.rowcount > 0 ) {
        				/* 사업자번호로 검색된 GLN 이 있을 경우 */
        				// 거래처코드 리스트 세팅
        				this.ds_naTrplC.insertRow(0);
        				this.ds_naTrplC.setColumn(0,"NA_TRPL_C","");
        				this.ds_naTrplC.setColumn(0,"CLNTNM","=========선택=========");
        				this.Div05.cbo_NA_TRPL_C.set_index(0);
        			} else {
        				/* 사업자번호로 검색된 GLN 이 없을 경우 임시거래처 코드 발급 */
        				// 임시거래처코드 발급
        				var isAgreed = confirm("사업자번호에 해당하는 거래처코드가 존재하지 않습니다. 임시 거래처코드 발급에 동의하십니까?");

        				if (isAgreed) {
        					this.isNewGln = "Y";  // 임시거래처 신규등록 구분

        					// 전자계약 전용 임시 거래처번호: 5 + 사업자번호 + 01
        					var tmpGln    =       "5"
        										+ this.ds_officeInfo.getColumn(0 , "BZNO1")
        										+ this.ds_officeInfo.getColumn(0 , "BZNO2")
        										+ this.ds_officeInfo.getColumn(0 , "BZNO3")
        										+ "01";

        					this.ds_officeInfo.setColumn(0 , "NA_MBCO_DSC", "1")  // 본지사코드는 1로 세팅
        					this.ds_officeInfo.setColumn(0 , "COMP_TPC", "1010")  // 업체유형: 1010 협력업체
        					this.ds_officeInfo.setColumn(0 , "NA_TRPL_C", tmpGln);

        					this.ds_naTrplC.addColumn("NA_TRPL_C");
        					this.ds_naTrplC.addColumn("CLNTNM");

        					// 거래처코드 리스트 세팅
        					this.ds_naTrplC.addRow(0);

        					this.ds_naTrplC.setColumn(0, "NA_TRPL_C",tmpGln);
        					this.ds_naTrplC.setColumn(0, "CLNTNM",tmpGln);
        					this.Div05.cbo_NA_TRPL_C.set_index(0);

        					if (this.ds_officeInfo.rowcount >0) {
        						if (this.ds_officeInfo.getColumn(0 , "NA_MBCO_DSC") != "1") {

        							// 본사가 아닐경우 지사 사업자 번호 보여주기 한다.
        							this.Div05.Static15.set_visible(true) ;
        							this.Div05.Static16.set_visible(true) ;
        							this.Div05.Static17.set_visible(true) ;

        							// 지사 사업자 번호
        							this.Div05.edt_BRC_BZNO1.set_visible(true) ;
        							this.Div05.edt_BRC_BZNO2.set_visible(true) ;
        							this.Div05.edt_BRC_BZNO3.set_visible(true) ;

        							this.Div05.edt_BRC_BZNO1.set_value(this.ds_officeInfo.getColumn(0 , "BZNO1")) ;
        							this.Div05.edt_BRC_BZNO2.set_value(this.ds_officeInfo.getColumn(0 , "BZNO2")) ;
        							this.Div05.edt_BRC_BZNO3.set_value(this.ds_officeInfo.getColumn(0 , "BZNO3")) ;
        						}
        					}
        				} else {
        				    // 비동의
        				}
        			} //if
        		}
        	} else if (svcID == "retrieveOfficeInfo") {
        		if (ErrorCode < 0 ) {
        			this.gfn_getMessage("alert", "error.message.server.exception");
        		} else {
        			if (this.ds_officeInfo.rowcount >0) {
        				if (this.ds_officeInfo.getColumn(0 , "NA_MBCO_DSC") != "1") {
        				    this.isNewGln  = "N";  // 임시거래처 등록여부 부로 업데이트

        					this.Div05.Static15.set_visible(true) ;
        					this.Div05.Static16.set_visible(true) ;
        					this.Div05.Static17.set_visible(true) ;
        					this.Div05.edt_BRC_BZNO1.set_visible(true) ;
        					this.Div05.edt_BRC_BZNO2.set_visible(true) ;
        					this.Div05.edt_BRC_BZNO3.set_visible(true) ;

        					this.Div05.edt_BRC_BZNO1.set_value(this.ds_officeInfo.getColumn(0 , "BZNO1")) ;
        					this.Div05.edt_BRC_BZNO2.set_value(this.ds_officeInfo.getColumn(0 , "BZNO2")) ;
        					this.Div05.edt_BRC_BZNO3.set_value(this.ds_officeInfo.getColumn(0 , "BZNO3")) ;
        				}
        			}
        		}
        	} else if (svcID == "retrieveNaTrplCAuthLst") {
        		if (ErrorCode < 0 ) {
        			this.gfn_getMessage("alert", "error.message.server.exception");
        		} else {
        			//trace(this.ds_naTrplCAuth.saveXML());
        		}
        	}
        }

        this.fn_BZNOCheck = function()
        {
        	var strNumb =  this.ds_userInfo.getColumn(0,"BZNO1" ) +this.ds_userInfo.getColumn(0,"BZNO2" ) + this.ds_userInfo.getColumn(0,"BZNO3" )  ;

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

        /******** 공인인증서 서명 프로그램 설치 ***********/

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
            this.Div05.Static03.addEventHandler("onclick", this.Div05_Static03_onclick, this);
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
            this.Div05.btu_zip.addEventHandler("onclick", this.btu_zip_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_5180.xfdl", true);

       
    };
}
)();
