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
                this.set_name("OMG_DS_SC_5113");
                this.set_titletext("미전환회원가입");
                this.set_scrollbars("autoboth");
                this._setFormPosition(0,0,750,513);
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

            obj = new Dataset("ds_basicInfo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BZNO1\" type=\"STRING\" size=\"30\"/><Column id=\"BZNO2\" type=\"STRING\" size=\"30\"/><Column id=\"BZNO3\" type=\"STRING\" size=\"30\"/><Column id=\"BRC_BZNO1\" type=\"STRING\" size=\"256\"/><Column id=\"BRC_BZNO2\" type=\"STRING\" size=\"256\"/><Column id=\"BRC_BZNO3\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"30\"/><Column id=\"COMP_TPC\" type=\"STRING\" size=\"30\"/><Column id=\"MB_ID\" type=\"STRING\" size=\"30\"/><Column id=\"MB_PW\" type=\"STRING\" size=\"256\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"30\"/><Column id=\"USR_TELNO\" type=\"STRING\" size=\"30\"/><Column id=\"USR_EMAIL01\" type=\"STRING\" size=\"30\"/><Column id=\"USR_EMAIL02\" type=\"STRING\" size=\"30\"/><Column id=\"SMS_RMS_YN\" type=\"STRING\" size=\"30\"/><Column id=\"EMAIL_RMS_YN\" type=\"STRING\" size=\"30\"/><Column id=\"USR_HP\" type=\"STRING\" size=\"30\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"30\"/><Column id=\"REPMNM\" type=\"STRING\" size=\"30\"/><Column id=\"DONGUP\" type=\"STRING\" size=\"30\"/><Column id=\"DONGBW\" type=\"STRING\" size=\"30\"/><Column id=\"FZIP\" type=\"STRING\" size=\"30\"/><Column id=\"RZIP\" type=\"STRING\" size=\"30\"/><Column id=\"ATEL\" type=\"STRING\" size=\"30\"/><Column id=\"HTEL\" type=\"STRING\" size=\"30\"/><Column id=\"STEL\" type=\"STRING\" size=\"30\"/><Column id=\"USR_MPNO01\" type=\"STRING\" size=\"30\"/><Column id=\"USR_MPNO02\" type=\"STRING\" size=\"30\"/><Column id=\"USR_MPNO03\" type=\"STRING\" size=\"30\"/><Column id=\"BIRTH\" type=\"STRING\" size=\"30\"/><Column id=\"SEX_DSC\" type=\"STRING\" size=\"30\"/><Column id=\"USR_TPC\" type=\"STRING\" size=\"30\"/><Column id=\"CHRG_BSNNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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

            obj = new Dataset("ds_vrtlAcNo", this);
            obj._setContents("<ColumnInfo><Column id=\"VRTL_ACNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_usrAuth", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USR_AUTH_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"ENT_PRG_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"RQ_DSC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("Static87", "absolute", "728", "1", "17", "1195", null, null, this);
            obj.set_taborder("1");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "17", "16", "711", "475", null, null, this);
            obj.set_taborder("95");
            obj.set_text("Div01");
            obj.style.set_background("white");
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
            obj = new CheckBox("chk_allAgree", "absolute", "561", "72", "46", "21", null, null, this.Div01);
            obj.set_taborder("9");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "17", "106", "677", "21", null, null, this.Div01);
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
            obj = new TextArea("txa_arr02", "absolute", "2.25%", "296", "677", "148", null, null, this.Div01);
            obj.set_taborder("14");
            obj.set_tabstop("false");
            obj.set_scrollbars("autovert");
            obj.set_wordwrap("char");
            obj.set_readonly("true");
            obj.style.set_padding("5 5 5 5");
            obj.style.set_font("12 Gulim");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("div_hiddenArea", "absolute", "4", "1509", "484", "283", null, null, this);
            obj.set_taborder("99");
            obj.set_text("div_hiddenArea");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Edit("edt_randomNumber", "absolute", "15", "9", "138", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("16");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_confirm", "absolute", "172", "9", "138", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("22");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_USR_TPC", "absolute", "320", "11", "138", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("23");
            obj.set_value("01");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_chgSvcYn", "absolute", "15", "38", "28.51%", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("24");
            obj.set_value("N");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_chgAuthYn", "absolute", "172", "38", "28.51%", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("25");
            obj.set_value("N");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_chgBillingYn", "absolute", "320", "38", "28.51%", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("26");
            obj.set_value("N");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_chgSealAmnYn", "absolute", "320", "67", "28.51%", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("27");
            obj.set_value("N");
            this.div_hiddenArea.addChild(obj.name, obj);

            obj = new Div("Div05", "absolute", "17", "16", "711", "2000", null, null, this);
            obj.set_taborder("100");
            obj.set_text("Div01");
            obj.style.set_background("transparent");
            obj.set_visible("false");
            obj.set_scrollbars("autovert");
            obj.set_dragscrolltype("both");
            this.addChild(obj.name, obj);
            obj = new Static("Static124", "absolute", "0", "567", "711", "29", null, null, this.Div05);
            obj.set_taborder("90");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static91", "absolute", "0", "87", "711", "29", null, null, this.Div05);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static103", "absolute", "0", "199", "711", "58", null, null, this.Div05);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static101", "absolute", "0", "171", "711", "29", null, null, this.Div05);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static98", "absolute", "0", "143", "711", "29", null, null, this.Div05);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static95", "absolute", "0", "115", "711", "29", null, null, this.Div05);
            obj.set_taborder("28");
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
            obj.set_defaultbutton("true");
            this.Div05.Div02.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "9", "353", "21", null, null, this.Div05.Div02);
            obj.set_taborder("58");
            obj.set_text("미전환회원가입");
            obj.style.set_font("bold 9 arial");
            this.Div05.Div02.addChild(obj.name, obj);
            obj = new Static("Static89", "absolute", "0", "63", "135", "21", null, null, this.Div05);
            obj.set_taborder("19");
            obj.set_text("회사 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static92", "absolute", "0", "87", "120", "29", null, null, this.Div05);
            obj.set_taborder("20");
            obj.set_text("본사 사업자번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static94", "absolute", "0", "115", "120", "29", null, null, this.Div05);
            obj.set_taborder("21");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static97", "absolute", "0", "143", "120", "29", null, null, this.Div05);
            obj.set_taborder("22");
            obj.set_text("대표자명");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static100", "absolute", "0", "171", "120", "29", null, null, this.Div05);
            obj.set_taborder("23");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static102", "absolute", "0", "199", "120", "58", null, null, this.Div05);
            obj.set_taborder("24");
            obj.set_text("회사주소");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static93", "absolute", "336", "115", "135", "29", null, null, this.Div05);
            obj.set_taborder("29");
            obj.set_text("거래처코드");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static99", "absolute", "336", "171", "135", "29", null, null, this.Div05);
            obj.set_taborder("30");
            obj.set_text("업체유형");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static129", "absolute", "160", "91", "9", "21", null, null, this.Div05);
            obj.set_taborder("32");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_BZNO02", "absolute", "167", "91", "30", "21", null, null, this.Div05);
            obj.set_taborder("16");
            obj.set_readonly("true");
            obj.set_maxlength("2");
            obj.set_enable("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_BZNO03", "absolute", "206", "91", "65", "21", null, null, this.Div05);
            obj.set_taborder("17");
            obj.set_readonly("true");
            obj.set_maxlength("5");
            obj.set_enable("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_NA_TRPL_C", "absolute", "474", "119", "180", "21", null, null, this.Div05);
            obj.set_taborder("18");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_enable("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_REPMNM", "absolute", "123", "147", "180", "21", null, null, this.Div05);
            obj.set_taborder("33");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_RZIP", "absolute", "167", "175", "35", "21", null, null, this.Div05);
            obj.set_taborder("34");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static133", "absolute", "160", "174", "9", "21", null, null, this.Div05);
            obj.set_taborder("35");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_FZIP", "absolute", "123", "175", "35", "21", null, null, this.Div05);
            obj.set_taborder("36");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_DONGBW", "absolute", "123", "205", "583", "21", null, null, this.Div05);
            obj.set_taborder("37");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_DONGUP", "absolute", "123", "230", "583", "21", null, null, this.Div05);
            obj.set_taborder("38");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            this.Div05.addChild(obj.name, obj);
            obj = new Radio("rdo_COMP_TPC", "absolute", "477", "176", "183", "21", null, null, this.Div05);
            this.Div05.addChild(obj.name, obj);
            var rdo_COMP_TPC_innerdataset = new Dataset("rdo_COMP_TPC_innerdataset", this.Div05.rdo_COMP_TPC);
            rdo_COMP_TPC_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1010</Col><Col id=\"datacolumn\">공급업체</Col></Row><Row><Col id=\"codecolumn\">1020</Col><Col id=\"datacolumn\">쿠폰관리</Col></Row></Rows>");
            obj.set_innerdataset(rdo_COMP_TPC_innerdataset);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj = new Static("Static00", "absolute", "199", "91", "9", "21", null, null, this.Div05);
            obj.set_taborder("39");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "277", "135", "21", null, null, this.Div05);
            obj.set_taborder("40");
            obj.set_text("회원 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static107", "absolute", "0", "299", "711", "29", null, null, this.Div05);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "327", "711", "29", null, null, this.Div05);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static113", "absolute", "0", "383", "711", "29", null, null, this.Div05);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static115", "absolute", "0", "411", "711", "29", null, null, this.Div05);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static135", "absolute", "223", "448", "297", "21", null, null, this.Div05);
            obj.set_taborder("45");
            obj.set_text("인증번호를 생성하여 등록된 휴대폰으로 전송합니다.");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static120", "absolute", "0", "496", "711", "29", null, null, this.Div05);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static114", "absolute", "336", "143", "135", "29", null, null, this.Div05);
            obj.set_taborder("47");
            obj.set_text("대표전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0", "383", "120", "29", null, null, this.Div05);
            obj.set_taborder("48");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static109", "absolute", "0", "327", "120", "29", null, null, this.Div05);
            obj.set_taborder("49");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static106", "absolute", "0", "299", "120", "29", null, null, this.Div05);
            obj.set_taborder("50");
            obj.set_text("회원ID");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static118", "absolute", "0", "439", "711", "58", null, null, this.Div05);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_visible("true");
            this.Div05.addChild(obj.name, obj);
            obj = new CheckBox("chk_SMS_YN", "absolute", "123", "502", "58", "21", null, null, this.Div05);
            obj.set_taborder("13");
            obj.set_text("SMS");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_value("N");
            this.Div05.addChild(obj.name, obj);
            obj = new CheckBox("chk_MAIL_YN", "absolute", "201", "502", "58", "21", null, null, this.Div05);
            obj.set_taborder("14");
            obj.set_text("메일");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_TEL01", "absolute", "534", "147", "48", "21", null, null, this.Div05);
            obj.set_taborder("58");
            obj.set_inputtype("number");
            obj.set_readonly("true");
            obj.set_maxlength("4");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_TEL02", "absolute", "591", "147", "48", "21", null, null, this.Div05);
            obj.set_taborder("59");
            obj.set_inputtype("number");
            obj.set_readonly("true");
            obj.set_maxlength("4");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_USR_EMAIL01", "absolute", "123", "387", "122", "21", null, null, this.Div05);
            obj.set_taborder("7");
            obj.set_maxlength("25");
            obj.set_enable("true");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_MB_PW01", "absolute", "123", "331", "183", "21", null, null, this.Div05);
            obj.set_taborder("3");
            obj.set_maxlength("16");
            obj.set_password("true");
            obj.set_lengthunit("utf8");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_MB_ID", "absolute", "123", "303", "122", "21", null, null, this.Div05);
            obj.set_taborder("60");
            obj.set_inputtype("number,english");
            obj.set_maxlength("9");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_USR_EMAIL02", "absolute", "264", "387", "122", "21", null, null, this.Div05);
            obj.set_taborder("8");
            obj.set_maxlength("25");
            obj.set_enable("true");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static134", "absolute", "250", "387", "13", "21", null, null, this.Div05);
            obj.set_taborder("61");
            obj.set_text("@");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "336", "299", "135", "29", null, null, this.Div05);
            obj.set_taborder("62");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static111", "absolute", "336", "327", "135", "29", null, null, this.Div05);
            obj.set_taborder("63");
            obj.set_text("비밀번호 확인");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_USR_NM", "absolute", "474", "303", "180", "21", null, null, this.Div05);
            obj.set_taborder("2");
            obj.set_maxlength("16");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_MB_PW02", "absolute", "474", "331", "180", "21", null, null, this.Div05);
            obj.set_taborder("4");
            obj.set_maxlength("16");
            obj.set_password("true");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static116", "absolute", "0", "411", "120", "29", null, null, this.Div05);
            obj.set_taborder("64");
            obj.set_text("휴대전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Combo("cbo_HP", "absolute", "123", "415", "51", "21", null, null, this.Div05);
            this.Div05.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_hpNo");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_readonly("false");
            obj = new Static("Static125", "absolute", "174", "415", "9", "21", null, null, this.Div05);
            obj.set_taborder("65");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_HP01", "absolute", "183", "415", "48", "21", null, null, this.Div05);
            obj.set_taborder("10");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_readonly("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static126", "absolute", "231", "415", "9", "21", null, null, this.Div05);
            obj.set_taborder("66");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_HP02", "absolute", "240", "415", "48", "21", null, null, this.Div05);
            obj.set_taborder("11");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_readonly("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "525", "147", "9", "21", null, null, this.Div05);
            obj.set_taborder("67");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "582", "147", "9", "21", null, null, this.Div05);
            obj.set_taborder("68");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static119", "absolute", "0", "496", "120", "29", null, null, this.Div05);
            obj.set_taborder("69");
            obj.set_text("수신 서비스");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "0", "439", "120", "58", null, null, this.Div05);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("false");
            obj.set_text("휴대전화인증");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_CLNTNM", "absolute", "123", "119", "180", "21", null, null, this.Div05);
            obj.set_taborder("74");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_enable("true");
            this.Div05.addChild(obj.name, obj);
            obj = new Div("Div03", "absolute", "0", "633", "719", "635", null, null, this.Div05);
            obj.set_taborder("77");
            obj.style.set_background("transparent");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0", "339", "98.89%", "145", null, null, this.Div05.Div03);
            obj.set_taborder("212");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new CheckBox("chk_DRW_FTR_AGR_YN", "absolute", "648", "432", "6.54%", "43", null, null, this.Div05.Div03);
            obj.set_taborder("215");
            obj.set_text("동의");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("sta_contents01", "absolute", "126", "432", "71.21%", "43", null, null, this.Div05.Div03);
            obj.set_taborder("216");
            obj.set_text("본사는 상기 자동이체 약관을 준수하여 자동이체를 신청하며 본사가 개설한 결제 계좌를 통한 \r\n자동이체 출금처리에 동의 합니다.");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "0", "483", "98.89%", "145", null, null, this.Div05.Div03);
            obj.set_taborder("217");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "0", "483", "16.69%", "145", null, null, this.Div05.Div03);
            obj.set_taborder("218");
            obj.set_text("금융거래 정보의\r\n제공동의서");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new TextArea("txt_contents2", "absolute", "123", "488", "81.08%", "83", null, null, this.Div05.Div03);
            obj.set_taborder("219");
            obj.set_readonly("true");
            obj.style.set_padding("5 5 5 5");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("sta_contents00", "absolute", "126", "577", "71.21%", "43", null, null, this.Div05.Div03);
            obj.set_taborder("220");
            obj.set_text("본사는 상기 기술된 내용에 대해 상세히 읽어 보았으며, 이를 이해하여 자발적인 의사로\r\n동의합니다.");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new CheckBox("chk_FNC_TR_INF_OFR_AGR_YN", "absolute", "648", "577", "6.54%", "43", null, null, this.Div05.Div03);
            obj.set_taborder("221");
            obj.set_text("동의");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "0", "339", "16.69%", "145", null, null, this.Div05.Div03);
            obj.set_taborder("213");
            obj.set_text("예금주의\r\n출금이체동의서");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new TextArea("txt_contents1", "absolute", "123", "343", "81.08%", "83", null, null, this.Div05.Div03);
            obj.set_taborder("214");
            obj.set_readonly("true");
            obj.style.set_padding("5 5 5 5");
            obj.set_scrollbars("autovert");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0", "106", null, "29", "8", null, this.Div05.Div03);
            obj.set_taborder("159");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static121", "absolute", "1", "0", "135", "21", null, null, this.Div05.Div03);
            obj.set_taborder("160");
            obj.set_text("서비스 이용");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static124", "absolute", "0", "21", "711", "58", null, null, this.Div05.Div03);
            obj.set_taborder("161");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "78", "711", "29", null, null, this.Div05.Div03);
            obj.set_taborder("162");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static123", "absolute", "0", "21", "120", "58", null, null, this.Div05.Div03);
            obj.set_taborder("163");
            obj.set_text("기본서비스 이용");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "78", "120", "29", null, null, this.Div05.Div03);
            obj.set_taborder("164");
            obj.set_text("부가정보 이용");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "106", "120", "29", null, null, this.Div05.Div03);
            obj.set_taborder("165");
            obj.set_text("정보분석 이용");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "123", "27", "537", "46", null, null, this.Div05.Div03);
            obj.set_taborder("166");
            obj.set_text("SCM업무, EDI서비스, 세금계산서는 기본서비스로 제공됩니다.\r\nEDI서비스, SCM업무는 이용량(KB)에 따라 청구됩니다. 상세정보는 <fc v='blue'>서비스이용료</fc>를 참조바랍니다.");
            obj.set_usedecorate("true");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Radio("rdo_SVC_ID", "absolute", "125", "83", "177", "21", null, null, this.Div05.Div03);
            this.Div05.Div03.addChild(obj.name, obj);
            var rdo_SVC_ID_innerdataset = new Dataset("rdo_SVC_ID_innerdataset", this.Div05.Div03.rdo_SVC_ID);
            rdo_SVC_ID_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">22</Col><Col id=\"datacolumn\">종량제</Col></Row><Row><Col id=\"codecolumn\">21</Col><Col id=\"datacolumn\">정액제</Col></Row></Rows>");
            obj.set_innerdataset(rdo_SVC_ID_innerdataset);
            obj.set_taborder("168");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.set_value("22");
            obj.set_index("0");
            obj = new CheckBox("cbk_SVC31", "absolute", "125", "111", "58", "21", null, null, this.Div05.Div03);
            obj.set_taborder("170");
            obj.set_text("BI조회");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_enable("true");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new CheckBox("cbk_SVC32", "absolute", "202", "111", "74", "21", null, null, this.Div05.Div03);
            obj.set_taborder("171");
            obj.set_text("추이분석");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new CheckBox("cbk_SVC33", "absolute", "287", "111", "112", "21", null, null, this.Div05.Div03);
            obj.set_taborder("172");
            obj.set_text("시장분석(자사)");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new CheckBox("cbk_SVC34", "absolute", "407", "111", "132", "21", null, null, this.Div05.Div03);
            obj.set_taborder("173");
            obj.set_text("시장분석(경쟁사)");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "0", "171", "711", "29", null, null, this.Div05.Div03);
            obj.set_taborder("176");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "0", "199", "711", "29", null, null, this.Div05.Div03);
            obj.set_taborder("177");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static110", "absolute", "0", "227", "711", "29", null, null, this.Div05.Div03);
            obj.set_taborder("178");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "1", "151", "135", "21", null, null, this.Div05.Div03);
            obj.set_taborder("179");
            obj.set_text("납부 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "0", "255", "711", "29", null, null, this.Div05.Div03);
            obj.set_taborder("180");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static111", "absolute", "336", "227", "135", "29", null, null, this.Div05.Div03);
            obj.set_taborder("181");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "336", "255", "135", "29", null, null, this.Div05.Div03);
            obj.set_taborder("182");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "0", "311", "711", "29", null, null, this.Div05.Div03);
            obj.set_taborder("183");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "0", "283", "711", "29", null, null, this.Div05.Div03);
            obj.set_taborder("184");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "0", "283", "120", "29", null, null, this.Div05.Div03);
            obj.set_taborder("187");
            obj.set_text("통장사본");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "0", "311", "120", "29", null, null, this.Div05.Div03);
            obj.set_taborder("190");
            obj.set_text("사업자등록증 사본");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "0", "171", "120", "29", null, null, this.Div05.Div03);
            obj.set_taborder("191");
            obj.set_text("결제방식");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "0", "199", "120", "29", null, null, this.Div05.Div03);
            obj.set_taborder("192");
            obj.set_text("희망출금일");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static109", "absolute", "0", "227", "120", "29", null, null, this.Div05.Div03);
            obj.set_taborder("193");
            obj.set_text("예금주");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static23", "absolute", "0", "255", "120", "29", null, null, this.Div05.Div03);
            obj.set_taborder("194");
            obj.set_text("거래은행");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Radio("rdo_STL_METH_DSC", "absolute", "125", "176", "440", "21", null, null, this.Div05.Div03);
            this.Div05.Div03.addChild(obj.name, obj);
            var rdo_STL_METH_DSC_innerdataset = new Dataset("rdo_STL_METH_DSC_innerdataset", this.Div05.Div03.rdo_STL_METH_DSC);
            rdo_STL_METH_DSC_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">농협자동이체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">자동이체</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">가상계좌</Col></Row></Rows>");
            obj.set_innerdataset(rdo_STL_METH_DSC_innerdataset);
            obj.set_taborder("195");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj = new Radio("rdo_HOP_DRW_DD", "absolute", "125", "204", "293", "21", null, null, this.Div05.Div03);
            this.Div05.Div03.addChild(obj.name, obj);
            var rdo_HOP_DRW_DD_innerdataset = new Dataset("rdo_HOP_DRW_DD_innerdataset", this.Div05.Div03.rdo_HOP_DRW_DD);
            rdo_HOP_DRW_DD_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">15</Col><Col id=\"datacolumn\">15일</Col></Row><Row><Col id=\"codecolumn\">25</Col><Col id=\"datacolumn\">25일</Col></Row></Rows>");
            obj.set_innerdataset(rdo_HOP_DRW_DD_innerdataset);
            obj.set_taborder("196");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj = new Edit("edt_DPRNM", "absolute", "123", "231", "89", "21", null, null, this.Div05.Div03);
            obj.set_taborder("197");
            obj.set_maxlength("100");
            obj.set_lengthunit("utf8");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Radio("rdo_PSCRP_DSC", "absolute", "218", "231", "107", "21", null, null, this.Div05.Div03);
            this.Div05.Div03.addChild(obj.name, obj);
            var rdo_PSCRP_DSC_innerdataset = new Dataset("rdo_PSCRP_DSC_innerdataset", this.Div05.Div03.rdo_PSCRP_DSC);
            rdo_PSCRP_DSC_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">개인</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">법인</Col></Row></Rows>");
            obj.set_innerdataset(rdo_PSCRP_DSC_innerdataset);
            obj.set_taborder("198");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_index("-1");
            obj = new Edit("edt_AC_NO", "absolute", "474", "259", "180", "21", null, null, this.Div05.Div03);
            obj.set_taborder("200");
            obj.set_inputtype("number");
            obj.set_maxlength("15");
            obj.set_inputfilter("dot,comma,sign,symbol,alpha,space");
            obj.set_lengthunit("utf8");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Combo("cbo_BNK_C", "absolute", "123", "259", "210", "21", null, null, this.Div05.Div03);
            this.Div05.Div03.addChild(obj.name, obj);
            obj.set_taborder("201");
            obj.set_innerdataset("@ds_bankCode");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj = new FileUpload("FileUpload", "absolute", "121", "287", "585", "24", null, null, this.Div05.Div03);
            obj.set_taborder("205");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static122", "absolute", "0", "135", "717", "20", null, null, this.Div05.Div03);
            obj.set_taborder("207");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new FileUpload("FileUpload00", "absolute", "121", "315", "585", "24", null, null, this.Div05.Div03);
            obj.set_taborder("208");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new MaskEdit("mae_BZNO", "absolute", "474", "231", "90", "21", null, null, this.Div05.Div03);
            obj.set_taborder("210");
            obj.set_mask("###-##-#####");
            obj.set_visible("false");
            obj.set_type("string");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Calendar("mae_BIRTH", "absolute", "474", "231", "15.44%", "21", null, null, this.Div05.Div03);
            this.Div05.Div03.addChild(obj.name, obj);
            obj.set_taborder("211");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static12", "absolute", "0", "355", "711", "29", null, null, this.Div05);
            obj.set_taborder("79");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "0", "355", "120", "29", null, null, this.Div05);
            obj.set_taborder("78");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "336", "355", "135", "29", null, null, this.Div05);
            obj.set_taborder("80");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Radio("rdo_SEX_DSC", "absolute", "477", "360", "183", "21", null, null, this.Div05);
            this.Div05.addChild(obj.name, obj);
            var rdo_SEX_DSC_innerdataset = new Dataset("rdo_SEX_DSC_innerdataset", this.Div05.rdo_SEX_DSC);
            rdo_SEX_DSC_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">남</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">여</Col></Row></Rows>");
            obj.set_innerdataset(rdo_SEX_DSC_innerdataset);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj = new Edit("edt_BZNO01", "absolute", "123", "91", "35", "21", null, null, this.Div05);
            obj.set_taborder("15");
            obj.set_maxlength("3");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static138", "absolute", "1", "602", "447", "21", null, null, this.Div05);
            obj.set_taborder("81");
            obj.set_text("* 업무시간외 회원가입시 익일 업무처리가 됩니다.");
            obj.set_cssclass("sta_WF_DescriptionE02");
            obj.style.set_padding("2 0 0 3");
            this.Div05.addChild(obj.name, obj);
            obj = new Calendar("edt_BIRTH", "absolute", "123", "359", "15.47%", "21", null, null, this.Div05);
            this.Div05.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Edit("edt_FZIP00", "absolute", "474", "147", "48", "21", null, null, this.Div05);
            obj.set_taborder("82");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "87", "328", "29", "27", null, null, this.Div05);
            obj.set_taborder("84");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("회원비밀번호는 8~16자리 영문,숫자의 조합으로 이루어져야합니다.");
            obj.style.set_background("#f2f8faff URL('theme://images/btn_LF_Search_D.png') center middle");
            obj.style.set_border("0 solid #ccd3d5ff");
            this.Div05.addChild(obj.name, obj);
            obj = new CheckBox("chk_TAX_AUTH", "absolute", "304", "571", "90", "21", null, null, this.Div05);
            obj.set_taborder("85");
            obj.set_text("세금계산서");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_readonly("true");
            this.Div05.addChild(obj.name, obj);
            obj = new CheckBox("chk_CONTRACT_AUTH", "absolute", "201", "571", "90", "21", null, null, this.Div05);
            obj.set_taborder("86");
            obj.set_text("전자계약");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_readonly("true");
            this.Div05.addChild(obj.name, obj);
            obj = new CheckBox("chk_BILLING_AUTH", "absolute", "125", "571", "58", "21", null, null, this.Div05);
            obj.set_taborder("87");
            obj.set_text("빌링");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_readonly("true");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static121", "absolute", "1", "546", "135", "21", null, null, this.Div05);
            obj.set_taborder("88");
            obj.set_text("권한 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "0", "567", "120", "29", null, null, this.Div05);
            obj.set_taborder("89");
            obj.set_text("회원권한");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Plugin("Plugin00", "absolute", "62.59%", "9", null, "24", "10.97%", null, this.Div05);
            obj.setProperty("classid", "{55D9860A-AB9C-44A1-BB74-75AF7F805333}");
            obj.setProperty("taborder", "91");
            obj.setProperty("visible", "false");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "223", "445", "297", "21", null, null, this.Div05);
            obj.set_taborder("92");
            obj.set_text("인증번호를 생성하여 등록된 휴대폰으로 전송합니다.");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Button("btn_certificate", "absolute", "221", "471", "41", "21", null, null, this.Div05);
            obj.set_taborder("93");
            obj.set_text("인증");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_confirmCertificate", "absolute", "123", "471", "89", "21", null, null, this.Div05);
            obj.set_taborder("94");
            obj.set_inputtype("number");
            obj.set_maxlength("6");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Button("btn_sendSms", "absolute", "123", "445", "89", "21", null, null, this.Div05);
            obj.set_taborder("95");
            obj.set_text("인증번호생성");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "336", "87", "135", "29", null, null, this.Div05);
            obj.set_taborder("96");
            obj.set_text("지사 사업자번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "512", "91", "9", "21", null, null, this.Div05);
            obj.set_taborder("97");
            obj.set_text("-");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_B_BZN02", "absolute", "519", "91", "30", "21", null, null, this.Div05);
            obj.set_taborder("98");
            obj.set_readonly("false");
            obj.set_maxlength("2");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_B_BZN03", "absolute", "558", "91", "65", "21", null, null, this.Div05);
            obj.set_taborder("99");
            obj.set_readonly("false");
            obj.set_maxlength("5");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "551", "91", "9", "21", null, null, this.Div05);
            obj.set_taborder("100");
            obj.set_text("-");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_B_BZN01", "absolute", "475", "91", "35", "21", null, null, this.Div05);
            obj.set_taborder("101");
            obj.set_readonly("false");
            obj.set_maxlength("3");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "18", "273", "717", "20", null, null, this);
            obj.set_taborder("101");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "18", "543", "717", "20", null, null, this);
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
            obj = new Layout("default", "", 711, 475, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("95");
            		p.set_text("Div01");
            		p.style.set_background("white");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 484, 283, this.div_hiddenArea,
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
            obj = new Layout("default", "", 719, 635, this.Div05.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("77");
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
            obj = new Layout("default", "", 750, 513, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("dddd");
            		p.set_titletext("미전환회원가입");
            		p.set_scrollbars("autoboth");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item16","Div05.chk_CONTRACT_AUTH","value","ds_userInfo","CONTRACT_AUTH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","Div05.chk_TAX_AUTH","value","ds_userInfo","TAX_AUTH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Div05.edt_BZNO01","value","ds_basicInfo","BZNO1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Div05.edt_BZNO02","value","ds_basicInfo","BZNO2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Div05.edt_BZNO03","value","ds_basicInfo","BZNO3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Div05.edt_NA_TRPL_C","value","ds_basicInfo","NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","Div05.edt_REPMNM","value","ds_basicInfo","REPMNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","Div05.edt_RZIP","value","ds_basicInfo","RZIP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","Div05.edt_FZIP","value","ds_basicInfo","FZIP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div05.edt_DONGBW","value","ds_basicInfo","DONGUP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Div05.edt_DONGUP","value","ds_basicInfo","DONGBW");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","Div05.rdo_COMP_TPC","value","ds_basicInfo","COMP_TPC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","Div05.chk_SMS_YN","value","ds_basicInfo","SMS_RMS_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","Div05.chk_MAIL_YN","value","ds_basicInfo","EMAIL_RMS_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","Div05.edt_MB_ID","value","ds_basicInfo","MB_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Div05.edt_CLNTNM","value","ds_basicInfo","CLNTNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Div05.edt_USR_NM","value","ds_basicInfo","USR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Div05.edt_USR_EMAIL01","value","ds_basicInfo","USR_EMAIL01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Div05.edt_USR_EMAIL02","value","ds_basicInfo","USR_EMAIL02");
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
            obj = new BindItem("item20","Div05.rdo_SEX_DSC","value","ds_basicInfo","SEX_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","Div05.edt_TEL01","value","ds_basicInfo","HTEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","Div05.edt_TEL02","value","ds_basicInfo","STEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","Div05.cbo_HP","value","ds_basicInfo","USR_MPNO01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","Div05.edt_HP01","value","ds_basicInfo","USR_MPNO02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","Div05.edt_HP02","value","ds_basicInfo","USR_MPNO03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","Div05.edt_MB_PW01","value","ds_userInfo","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","Div05.edt_BIRTH","value","ds_basicInfo","BIRTH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","Div05.Div03.mae_BIRTH","value","ds_payInfo","DPR_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Div05.Div03.chk_DRW_FTR_AGR_YN","value","ds_payInfo","DRW_FTR_AGR_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Div05.Div03.chk_FNC_TR_INF_OFR_AGR_YN","value","ds_payInfo","FNC_TR_INF_OFR_AGR_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","Div05.edt_FZIP00","value","ds_basicInfo","ATEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","Div05.edt_CLNTNM","tooltiptext","ds_basicInfo","CLNTNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","Div05.edt_B_BZN02","value","ds_basicInfo","BRC_BZNO2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item38","Div05.edt_B_BZN03","value","ds_basicInfo","BRC_BZNO3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","Div05.edt_B_BZN01","value","ds_basicInfo","BRC_BZNO1");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_5113.xfdl", "lib::comLib.xjs");
        this.addIncludeScript("OMG_DS_SC_5113.xfdl", "lib::comTSToolKit.xjs");
        this.addIncludeScript("OMG_DS_SC_5113.xfdl", "lib::comPolicy.xjs");
        this.registerScript("OMG_DS_SC_5113.xfdl", function() {
        //include "lib::comLib.xjs";
        //include "lib::comTSToolKit.xjs";
        //include "lib::comPolicy.xjs";

        /*******************************************************************
        	전역변수 선언                                                     
        	sScrollYn  : 서비스이용약관 스크롤여부	                          
        	sScrollYn2 : 개인정보 스크롤여부	                                
        	sDisplayYn : 가오픈기간동안 SMS발송 체크 여부 (2015.12.07이후에는 SMS보내도록 확인)
        *******************************************************************/
        this.sScrollYn = "";                                                
        this.sScrollYn2 = "";                                               
        this.orgAcNo = "";                                                
        this.vrtlAcNo = "";
        this.sDisplayYn = "";
         
        var nBasicBottom = nexacro.toNumber(this.Div05.Static124.top) + nexacro.toNumber(this.Div05.Static124.height);

        this.form_onload = function(obj,e)
        {   
        	this.Div05.Plugin00;
           this.gfn_setInitForm(obj, e); //공통
            this.Div01.Static00.set_text("하나로eSCM 서비스 이용약관, 개인정보 수집 및 이용에 <b v='true'><u v='true'>모두 동의</u></b>합니다.");
        	this.Div01.Static01.set_text("<b v='true'>[필수]하나로eSCM 서비스 이용약관</b>");
        	this.Div01.Static03.set_text("<b v='true'>[필수]하나로eSCM 서비스 개인정보 수집 및 이용동의</b>");
        	/*변경될 데이터*/
        	this.Div01.txa_arr01.set_value(this.policyTerms);
        	this.Div01.txa_arr02.set_value(this.policyPrivacy);
        	this.Div05.Div03.txt_contents1.set_value(this.policyWithdraw);
        	this.Div05.Div03.txt_contents2.set_value(this.policyFinancial);
        	
        	this.Div05.Div03.chk_DRW_FTR_AGR_YN.set_value("N");
        	this.Div05.Div03.chk_FNC_TR_INF_OFR_AGR_YN.set_value("N");	
        	//this.fn_getDisplayYn();
        }

        this.fn_afterFormOnload = function()
        {   	
        	trace("afterFormOnload");
        	this.fn_checkOpenWebSign();
        	
        	//공통코드콤보가져오기	
        	var param = [   		
         		{code:"HP"	,     dsName:"ds_hpNo", selecttype:"N"}, 		
         		{code:"BNK_C"	, dsName:"ds_bankCode", selecttype:"N"}
            ];
        	this.gfn_setPortalCommonCode(param);
        			
        	
        	/*화면 TITLE 세팅*/		
        	this.Div05.Div02.Static00.set_text("미전환 협력업체 회원가입");
        	this.Div01.set_visible(true);
        	this.Div05.set_visible(false);	 
        	/*스크롤확인*/		
        	this.Div01.txa_arr01.addEventHandler("onvscroll", this.Div01_txa_arr01_onvscroll,this);
        	this.Div01.txa_arr02.addEventHandler("onvscroll", this.Div01_txa_arr02_onvscroll,this);	
        	
        	
        	
        // 	/* 파일 */
        // 	var fileParam = {
        // 		form:this,													//*필수 - 폼
        // 		param:[{//필요없는 프로퍼티는 주석처리
        // 				fileObj: this.Div05.Div03.FileUpload,				//*필수 - 파일컴포넌트
        // 				dataset: this.ds_uploadresult00,						//파일정보 데이터셋
        // 				//maxSize:1,											//허용할 파일 사이즈(MB)
        // 				//maxLength:1,										//허용할 파일갯수
        // 				//ext:['xls','xlsx'],									//허용할 확장자명
        // 				//cancelBtn: this.div_search.btn_f_cancel,			//취소버튼 컴포넌트
        // // 				cancel_after:function(){							//취소버튼 눌렀을때 실행
        // // 					this.form.ds_excel_bind.clearData();
        // // 					this.form.ds_uploadresult.clearData();
        // // 					this.form.div_search.FileUpload00.set_text("");
        // // 					this.form.div_list.grd_main00.set_visible(false);
        // // 					this.form.div_search.txa_excel00.set_value(""); //this대신 this.form으로 접근
        // // 				},
        // 				valid_after_fail: 'Div05_Div00_FileUpload_onerror',  			//파일검사 실패후 호출할 함수명 또는 함수(업로드전)
        // 				upload_after_succ: 'Div03_FileUpload_onsuccess',    	//파일 업로드 성공후 호출할 함수명 또는 함수(업로드후)
        // 				upload_after_fail: 'Div05_Div00_FileUpload_onerror'  	    	//파일 업로드 실패후 호출할 함수명 또는 함수(업로드후)
        // 			}]
        // 	};
        // 	this.gfn_addEventFileUpload(fileParam);							//이벤트 등록
        }
        /*******************************************************************************************************************
         SMS인증 보임/보이지않음
         - 12/07 이전에는 SMS인증버튼화면 보이지 않게 설정
        				   SMS인증과 관련된 validation 건너띔
        ********************************************************************************************************************/ 
        this.fn_getDisplayYn = function()
        {
        	var dif = parseInt("20151207") - parseInt(this.gfn_today("yyyyMMdd"))
        	
        	if(dif > 0){
        		this.sDisplayYn ='N';
        		this.Div05.Static07.set_text("");
        		this.Div05.Static08.set_visible(false);
        		this.Div05.btn_sendSms.set_visible(false);
        		this.Div05.edt_confirmCertificate.set_visible(false);
        		this.Div05.btn_certificate.set_visible(false);
        	}else{
        		this.sDisplayYn ='Y';
        		this.Div05.Static07.set_text("휴대전화인증");
        		this.Div05.Static08.set_visible(true);
        		this.Div05.btn_sendSms.set_visible(true);
        		this.Div05.edt_confirmCertificate.set_visible(true);
        		this.Div05.btn_certificate.set_visible(true);
        	}
        }

        
        /*******************************************************************************************************************
        권한에 따른 DIV화면 컨트롤
        ********************************************************************************************************************/ 
        this.CheckBox04_onchanged = function(obj,e)
        {	
        	if(this.fn_authValidation()){
        		if(e.postvalue == 'Y'){				
        			this.Div05.Div03.set_top(nBasicBottom+20)						
        			this.Div05.Div03.set_visible(true);
        			var nDiv03Bottom = nexacro.toNumber(this.Div05.Div03.top) + nexacro.toNumber(this.Div05.Div03.height);
        			//맨밑 Static (* 업무시간외 회원가입시 익일 업무처리가 됩니다.)
        			this.Div05.Static138.set_top(nDiv03Bottom);
        			this.Div05.Static138.set_visible(true);
        		}else{		
        			this.Div05.Div03.set_visible(false);		
        			ithis.Div05.Static138.set_top(nBasicBottom);
        		}		
        		
        		this.Div05.set_height(nexacro.toNumber(this.Div05.Static138.top) + nexacro.toNumber(this.Div05.Static138.height) + 15);	
        		this.resetScroll();
        	}
        }
        /***************************************************
        	권한체크
        	- 빌링권한을 가지고 있지 않는 회원이 빌링권한을 체크 할경우 > 빌링 권한을 선택하실 수 없습니다.
        	- 빌링권한을 가지고 있지 있는 회원이 빌링권한을 해지 할경우 > 빌링 권한을 해지하실 수 없습니다.
        ****************************************************/
        this.fn_authValidation = function(){
        	if(this.Div05.chk_BILLING_AUTH.value == "Y"){
        		if(this.ds_naTrplCAuth.getColumn(this.ds_naTrplCAuth.findRow("USR_AUTH_DSC","1"),"MB_ID") != this.Div05.edt_MB_ID.value){
        			alert("빌링 권한을 선택하실 수 없습니다.");
        			this.Div05.chk_BILLING_AUTH.set_value("N");
        			return false;
        		}
        	}else{		
        		if(this.ds_naTrplCAuth.getColumn(this.ds_naTrplCAuth.findRow("USR_AUTH_DSC","1"),"MB_ID") == this.Div05.edt_MB_ID.value){
        			alert("빌링 권한을 해지하실 수 없습니다.");
        			this.Div05.chk_BILLING_AUTH.set_value("Y");
        			return false;
        		}
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
        	모두 동의
        ****************************************************/
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

        
        /***************************************************
        	동의합니다.
        ****************************************************/
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
        	
        	this.Div05.Div03.cbk_SVC31.set_value("N");
        	this.Div05.Div03.cbk_SVC32.set_value("N");
        	this.Div05.Div03.cbk_SVC33.set_value("N");
        	this.Div05.Div03.cbk_SVC34.set_value("N");
        	
        	this.fn_retriveUsrInfo();		
        	this.resetScroll();		
        }

        
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

        /***************************************************
        	회원정보조회 메소드
        	ds_basicInfo : 회사정보 + 회원정보
        	ds_payInfo : 납부 정보
        	ds_svcAuth : 회원 권한
        	ds_svcInfo : 회원 서비스
        	ds_naTrplCAuthIng : 거래처코드에 진행중인 권한회원
        	ds_naTrplCAuth : 거래처코드에 권한회원
        	ds_entSvc : 거래처코드에 가입된 서비스
        ****************************************************/
        this.fn_retriveUsrInfo = function (){	
        	
        	var sSvcID        = "retrieveMB";
        	var sURL          = "svc::rest/pt/usrinf/retrieveMB"
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_basicInfo=ds_basicInfo ds_naTrplCAuth=ds_naTrplCAuth ds_entSvc=ds_entSvc ds_payInfo=ds_payInfo ds_naTrplCAuthIng=ds_naTrplCAuthIng ds_usrAuth=ds_usrAuth";
        	var sArgument     =  "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회		 
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        

        /*******************************************************************************************************************
         권한정보validation	
        ********************************************************************************************************************/
        this.fn_svcAuthValidation = function(){ 
        	/*빌링선택시 체크로직*/		
        	if(this.Div05.chk_BILLING_AUTH.value =="Y"){			
        		if(this.gfn_isNull(this.Div05.Div03.rdo_STL_METH_DSC.value)){
        			alert("결제방식코드를 입력 선택하세요");		
        			this.Div05.Div03.rdo_STL_METH_DSC.setFocus();
        			return false;
        		}	
        		/*납부 방법이 계좌이체일 경우*/
        		if(this.Div05.Div03.rdo_STL_METH_DSC.value == "1" || this.Div05.Div03.rdo_STL_METH_DSC.value == "2"){
        			if(this.gfn_isNull(this.Div05.Div03.rdo_HOP_DRW_DD.value)){
        				alert("희망출금일을 입력 선택하세요");		
        				this.Div05.rDiv03.rdo_HOP_DRW_DD.setFocus();
        				return false;
        			}
        			if(this.gfn_isNull(this.Div05.Div03.edt_DPRNM.value)){
        				alert("예금주명을 입력 하세요");		
        				this.Div05.Div03.edt_DPRNM.setFocus();
        				return false;
        			}		
        			if(this.gfn_isNull(this.Div05.Div03.rdo_PSCRP_DSC.value)){
        				alert("예금주의 개인 및 법인 구분을 선택하시기 바랍니다. ");		
        				this.Div05.Div03.rdo_PSCRP_DSC.setFocus();
        				return false;
        			}
        			if(this.Div05.Div03.rdo_PSCRP_DSC.value =="1"){
        				if(this.gfn_isNull(this.Div05.Div03.mae_BIRTH.value)){
        					alert("납부정보의 예금주 생년월일을 입력 하세요");		
        					this.Div05.Div03.mae_BIRTH.setFocus();
        					return false;
        				}
        				if(this.Div05.Div03.mae_BIRTH.text.substring(0,2) == "00" )  {
        				
        					alert("납부정보의 예금주 생년월일을 6자리로 입력시 생년월일은 8자리 형식(19600101)으로 입력하셔야 합니다");		
        					this.Div05.Div03.mae_BIRTH.setFocus();
        					return false;				
        								
        				}				
        			}
        			if(this.Div05.Div03.rdo_PSCRP_DSC.value =="2"){
        				if(this.gfn_isNull(this.Div05.Div03.mae_BZNO.value)){
        					alert("사업자번호를 입력 하세요");		
        					this.Div05.Div03.mae_BZNO.setFocus();
        				return false;
        				}
        			}								
        			if(this.gfn_isNull(this.ds_payInfo.getColumn(0,"BB_FLNM"))){
        				alert("통장사본을 등록해 주세요");			
        				return false;
        			}
        			if(this.Div05.Div03.chk_DRW_FTR_AGR_YN.value != 'Y'){
        				alert("예금주의 출금이체동의서를 동의해 주세요.");	
        				return false;
        			}
        			if(this.Div05.Div03.chk_FNC_TR_INF_OFR_AGR_YN.value != 'Y'){
        				alert("금융거래 정보의 제공동의서를 동의해 주세요.");	
        				return false;
        			}			
        		}
        		
        		if(this.gfn_isNull(this.Div05.Div03.cbo_BNK_C.value)){
        				alert("거래은행을 선택 하세요");
        				this.Div05.Div03.cbo_BNK_C.setFocus();
        				return false;
        		}		
        		if(this.gfn_isNull(this.Div05.Div03.edt_AC_NO.value)){
        				alert("계좌번호를 입력 하세요");
        				this.Div05.Div03.edt_AC_NO.setFocus();
        				return false;
        		}		
        		if(this.gfn_isNull(this.ds_payInfo.getColumn(0,"BZ_RGWRRT_FLNM"))){
        			alert("사업자등록증 사본을 등록해 주세요");			
        			return false;
        		}						
        	}	
        	return true;
        }

        /*******************************************************************************************************************
         validation 검사
        ********************************************************************************************************************/
        this.fn_validationCheck = function(){
        	
        	
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
        	/* Grand Open이후로 체크*/
        // 	if(this.sDisplayYn == "Y"){
        // 		if(this.gfn_isNull(this.Div05.edt_confirmCertificate.value)){
        // 			alert("인증번호를 입력 하세요.");	
        // 			this.Div05.edt_confirmCertificate.setFocus();
        // 			return false;
        // 		}
        // 		if(this.div_hiddenArea.edt_confirm.value != "Y"){
        // 			alert("인증버튼으로 인증번호를 인증 하세요");			
        // 			return false;
        // 		}		
        // 	}
        	/*비밀번호 validation검사*/
        	if(!this.gfn_pwValidation(this.Div05.edt_MB_PW01.value)){
        		return false;
        	}			
        	/*권한설정에 따른 이벤트 컨트롤*/	
        	if(!this.fn_svcAuthValidation()){	
        		return false;
        	}
        	
        	/*권한조회 API호출*/
        	this.fn_retrieveNaTrplCAuthLst();
        	
        	/*권한체크*/	
        	if(this.Div05.chk_TAX_AUTH.value == "Y"){
        		if(this.ds_naTrplCAuthIng.findRow("TAX_ING","Y") >= 0){
        			alert("세금계산서 권한을 가진 회원이 승인처리 중에 있습니다.\n세금계산서 권한을 선택하실 수 없습니다.");
        			this.Div05.chk_TAX_AUTH.set_value("N");
        			return false;	
        		}else if(this.ds_naTrplCAuth.findRow("USR_AUTH_DSC","3") >=  0 ){
        			if((this.ds_naTrplCAuth.getColumn(this.ds_naTrplCAuth.findRow("USR_AUTH_DSC","3"),"MB_ID") == this.Div05.edt_MB_ID.value) && this.Div05.chk_TAX_AUTH.value == "N" ){
        				alert("세금계산서 권한을 가진 회원입니다.\n세금계산서 권한을 해지할 수 없습니다.");
        				this.Div05.chk_TAX_AUTH.set_value("Y");								
        				return false;
        			}
        			if(this.ds_naTrplCAuth.getColumn(this.ds_naTrplCAuth.findRow("USR_AUTH_DSC","3"),"MB_ID") != this.Div05.edt_MB_ID.value) {
        				if(!application.confirm("현재 세금계산서 권한은 "+this.ds_naTrplCAuth.getColumn(this.ds_naTrplCAuth.findRow("USR_AUTH_DSC","3"),"USR_NM")+"["
        						+this.ds_naTrplCAuth.getColumn(this.ds_naTrplCAuth.findRow("USR_AUTH_DSC","3"),"MB_ID")+"]님에게 있습니다.\n세금계산서권한을 변경하시겠습니까? ")){
        					this.Div05.chk_TAX_AUTH.set_value("N");								
        					return false;
        				}
        			}			
        		}
        	}else{
        		if(this.ds_naTrplCAuth.findRow("USR_AUTH_DSC","3") < 0 && this.ds_naTrplCAuthIng.findRow("TAX_ING","Y") < 0 ){			
        			alert("거래처 번호에 해당하는 세금계산서 권한을 가진 회원이 없습니다.\n 세금계산서 권한을 선택해주세요.");
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
        	if(this.fn_validationCheck() == true){		
        		this.ds_basicInfo.setColumn(0,"USR_TPC",this.div_hiddenArea.edt_USR_TPC.value);			
        		/*수신MSS/EMAIL 사용여부*/
        		if(this.gfn_isNull(this.Div05.chk_SMS_YN.value)){
        			this.ds_basicInfo.setColumn(0,"SMS_RMS_YN","N"); 
        		}
        		if(this.gfn_isNull(this.Div05.chk_MAIL_YN.value)){
        			this.ds_basicInfo.setColumn(0,"EMAIL_RMS_YN","N");
        		}
        		if(this.Div05.chk_BILLING_AUTH.value =="Y"){
        			if(this.Div05.Div03.rdo_PSCRP_DSC.value=="1"){ 
        				this.ds_payInfo.setColumn(0,"DPR_NO",this.Div05.Div03.mae_BIRTH.value);
        			}else if(this.Div05.Div03.rdo_PSCRP_DSC.value=="2"){
        				this.ds_payInfo.setColumn(0,"DPR_NO",this.Div05.Div03.mae_BZNO.value);
        			}
        		}

        		this.fn_setSvcInfo();	/* 서비스정보 세팅 */
        		if(this.Div05.chk_BILLING_AUTH.value == "Y" ){	/* 빌링권한을 가진 관리자회원 일시에 납부정보 세팅 */
        			if(this.ds_basicInfo.getColumn(0,"NA_MBCO_DSC" ) == "1" ){
        				this.fn_setPayInfo();
        				/*
        				if(!this.fn_setPayInfo()){
        					return ;
        				}
        				*/
        			}else if(this.ds_basicInfo.getColumn(0,"NA_MBCO_DSC" ) != "1" ){
        				if(this.fn_BZNOCheck() == true  || this.gfn_isNull(this.ds_payInfo.getColumn(0, "ELSG_CNTN")))
        				{
        					this.div_hiddenArea.edt_chgBillingYn.set_value("Y");
        					if(this.Div05.Div03.rdo_STL_METH_DSC.value == '3')
        					{
        						if(this.gfn_isNull(this.ds_payInfo.getColumn(0, "ACNO")))
        						{
        							this.Div05.Div03.edt_AC_NO.updateToDataset();   
        						}
        						if(	this.ds_payInfo.getColumn(0, "STL_METH_DSC") != '3'){
        							if(this.gfn_isNull(this.ds_payInfo.getColumn(0, "DPR_NO")))
        							{
        								this.Div05.Div03.rdo_PSCRP_DSC.updateToDataset();   
        							}
        						}	
        						
        						//2016.01.20 bok 가상계좌일때 출금일 정보를 삭제한다.
        						try
        						{
        							if(this.ds_payInfo.getColumn(0, "STL_METH_DSC") == '3')
        							{
        								this.ds_payInfo.setColumn(0, "HOP_DRW_DD", "");
        							}
        						}
        						catch(e)
        						{
        							trace("Error :: 2016.01.20 bok 가상계좌일때 출금일 정보를 삭제한다." );
        						}
        						
        						
        						 var sParam 		= "blChgYn="+this.div_hiddenArea.edt_chgBillingYn.value
        										   + " svcChgYn="+this.div_hiddenArea.edt_chgSvcYn.value
        										   + " authChgYn=N"
        										   + " mbPW="+this.Div05.edt_MB_PW01.value						   
        										   ;
        										   
        						var sSvcID        = "updateMB";
        						var sURL          = "svc::rest/pt/usrinf/updateMB";
        						var sInDatasets   = "ds_basicInfo=ds_basicInfo ds_svcInfo=ds_svcInfo ds_payInfo=ds_payInfo";
        						var sOutDatasets  = "";	
        						var sArgument     = sParam;
        						var sCallbackFunc = "fn_callBack";				
        						var sTranType     = "U"; // U:저장/삭제, S:조회

        						this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);		
        						
        						return false;
        					}
        					else
        					{
        						this.fn_setPayInfoForJoin();
        						return ;
        					}
        					/*
        					if(!this.fn_setPayInfoForJoin())
        					{
        						return ;
        					}
        					*/
        				}else{
        					return ;
        				}
        			}
        			
        		}
        		else {	/* 빌링권한이 없는 일반회원 일시에 저장 */
        			 var sParam 		= "blChgYn="+this.div_hiddenArea.edt_chgBillingYn.value
        							   + " svcChgYn="+this.div_hiddenArea.edt_chgSvcYn.value
        							   + " authChgYn=N"
        							   + " mbPW="+this.Div05.edt_MB_PW01.value						   
        							   ;
        							   
        			var sSvcID        = "updateMB";
        			var sURL          = "svc::rest/pt/usrinf/updateMB";
        			var sInDatasets   = "ds_basicInfo=ds_basicInfo ds_svcInfo=ds_svcInfo ds_payInfo=ds_payInfo";
        			var sOutDatasets  = "";	
        			var sArgument     = sParam;
        			var sCallbackFunc = "fn_callBack";				
        			var sTranType     = "U"; // U:저장/삭제, S:조회

        			this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        		}	
        	}
        }

        /**************************************************************************************************************************
         납부정보 세팅 
        	1.납부정보 변경여부체크
        	2.납부정보가 변경될경우, 전자서명값을 생성한다.
        	3.개발서버테스트시 KTNET 인증서에 등록된 사업자번호는 1234567890이므로 개발시에는 사업자번호 변경되도록 세팅
        ***************************************************************************************************************************/
        this.fn_setPayInfo= function(){	
        	var Elsg  = this.gfn_nullToEmpty(this.Div05.edt_NA_TRPL_C.value) +"|"
        		+ this.gfn_nullToEmpty(this.Div05.Div03.rdo_STL_METH_DSC.value) +"|"
        		+ this.gfn_nullToEmpty(this.Div05.Div03.rdo_HOP_DRW_DD.value)   +"|"
        		+ this.gfn_nullToEmpty(this.Div05.Div03.edt_DPRNM.value  ) 	  +"|"
        		+ this.gfn_nullToEmpty(this.Div05.Div03.rdo_PSCRP_DSC.value )   +"|"
        		+ this.gfn_nullToEmpty(this.ds_payInfo.getColumn(0,"DPR_NO"))   +"|"
        		+ this.gfn_nullToEmpty(this.Div05.Div03.cbo_BNK_C.value )  	  +"|" 
        		+ this.gfn_nullToEmpty(this.Div05.Div03.edt_AC_NO.value )  	  
        	;	
        	
        	var bzno = this.ds_basicInfo.getColumn(0,"BRC_BZNO1") + this.ds_basicInfo.getColumn(0,"BRC_BZNO2")  +this.ds_basicInfo.getColumn(0,"BRC_BZNO3") ;
        	
        	if(application.gv_serverType != "ADMIN"){
        		bzno ="1234567890";
        	}
        	//var sRtn = this.gfn_signTradeSign(this.Div05.Plugin00,Elsg , bzno);				
        	this.gfn_signTradeSign(this.Div05.Plugin00,Elsg, bzno,"fn_signCallback", "setPayInfo");	
        	
        	/*
        //	trace("sRtn =>>"  +  sRtn) ;
        	if(!sRtn){
        		return sRtn;
        	}else{
        		this.ds_payInfo.setColumn(0,"ELSG_CNTN",sRtn);
        		this.div_hiddenArea.edt_chgBillingYn.set_value("Y");
        		return true;
        	}
        	*/
        }

        this.fn_setPayInfoForJoin= function(){	
        	
        	var str = "결제방식을 자동이체로 선택하신 경우에는 결제계좌의 공인인증서로 전자서명을 하여 자동이체 동의를 해주셔야 합니다.\n"
        			+ "(전자금융거래법 15조).\n"
        	        + "납부정보의 계좌번호에 대한 은행 또는 인터넷뱅킹용 공인인증서로\n"
        	        + "전자서명을 해주세요.";
        	
        	alert(str);
        	var Elsg  = this.gfn_nullToEmpty(this.Div05.edt_NA_TRPL_C.value) +"|"
        		+ this.gfn_nullToEmpty(this.Div05.Div03.rdo_STL_METH_DSC.value) +"|"
        		+ this.gfn_nullToEmpty(this.Div05.Div03.rdo_HOP_DRW_DD.value)   +"|"
        		+ this.gfn_nullToEmpty(this.Div05.Div03.edt_DPRNM.value  ) 	  +"|"
        		+ this.gfn_nullToEmpty(this.Div05.Div03.rdo_PSCRP_DSC.value )   +"|"
        		+ this.gfn_nullToEmpty(this.ds_payInfo.getColumn(0,"DPR_NO"))   +"|"
        		+ this.gfn_nullToEmpty(this.Div05.Div03.cbo_BNK_C.value )  	  +"|" 
        		+ this.gfn_nullToEmpty(this.Div05.Div03.edt_AC_NO.value )  	  
        	;	
        	
        	var bzno = this.ds_basicInfo.getColumn(0,"BRC_BZNO1") + this.ds_basicInfo.getColumn(0,"BRC_BZNO2")  +this.ds_basicInfo.getColumn(0,"BRC_BZNO3") ;
        	if(application.gv_serverType != "ADMIN"){
        		bzno ="1234567890";
        	}
        	//var sRtn = this.gfn_signTradeSignForJoin(this.Div05.Plugin00,Elsg , bzno);
        	//this.gfn_signTradeSignForJoin = function(obj, sVal, callback, id)
        	this.gfn_signTradeSignForJoin(this.Div05.Plugin00,Elsg, "fn_signCallback", "setPayInfoForJoin");				
        	/*
        	if(!sRtn){
        		return sRtn;
        	}else{
        		this.ds_payInfo.setColumn(0,"ELSG_CNTN",sRtn);
        		this.div_hiddenArea.edt_chgBillingYn.set_value("Y");
        		return true;
        	}
        	*/
        }

        
        this.fn_signCallback = function(rtnValue,signId)
        {
        	if(rtnValue == "ERROR")
        	{
        		return false;
        	}
        	else
        	{
        		this.ds_payInfo.setColumn(0,"ELSG_CNTN",rtnValue);
        		this.div_hiddenArea.edt_chgBillingYn.set_value("Y");
        		
        		switch(signId)
        		{
        			case "setPayInfoForJoin":
        			case "setPayInfo":
        				if(this.gfn_isNull(this.ds_payInfo.getColumn(0, "ACNO")))
        				{
        					this.Div05.Div03.edt_AC_NO.updateToDataset();   
        				}
        				if(	this.ds_payInfo.getColumn(0, "STL_METH_DSC") != '3'){
        					if(this.gfn_isNull(this.ds_payInfo.getColumn(0, "DPR_NO")))
        					{
        						this.Div05.Div03.rdo_PSCRP_DSC.updateToDataset();   
        					}
        				}	
        				
        				//2016.01.20 bok 가상계좌일때 출금일 정보를 삭제한다.
        				try
        				{
        					if(this.ds_payInfo.getColumn(0, "STL_METH_DSC") == '3')
        					{
        						this.ds_payInfo.setColumn(0, "HOP_DRW_DD", "");
        					}
        				}
        				catch(e)
        				{
        					trace("Error :: 2016.01.20 bok 가상계좌일때 출금일 정보를 삭제한다." );
        				}
        				
        				
        				 var sParam 		= "blChgYn="+this.div_hiddenArea.edt_chgBillingYn.value
        								   + " svcChgYn="+this.div_hiddenArea.edt_chgSvcYn.value
        								   + " authChgYn=N"
        								   + " mbPW="+this.Div05.edt_MB_PW01.value						   
        								   ;
        								   
        				var sSvcID        = "updateMB";
        				var sURL          = "svc::rest/pt/usrinf/updateMB";
        				var sInDatasets   = "ds_basicInfo=ds_basicInfo ds_svcInfo=ds_svcInfo ds_payInfo=ds_payInfo";
        				var sOutDatasets  = "";	
        				var sArgument     = sParam;
        				var sCallbackFunc = "fn_callBack";				
        				var sTranType     = "U"; // U:저장/삭제, S:조회	 			
        				
        				//trace("5113 = >>"+this.ds_basicInfo.saveXML());
        				
        				//hoon
        				this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);	
        				
        				break;
        		}
        	}
        }
        /*******************************************************************************************************************
         서비스정보 세팅
        ********************************************************************************************************************/
        this.fn_setSvcInfo = function (){	 
        	
        	this.ds_svcInfo.clearData();	
        	/*가입된 서비스가 없을 경우,*/
        		
        	if(this.ds_entSvc.rowcount == 0){		 		
        		this.ds_svcInfo.addRow();
        		this.ds_svcInfo.addColumn("SVC_ID","string");		
        		this.ds_svcInfo.addColumn("RQ_DSC","string");			
        		this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID","10");		
        		this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC","1");		
        				
        		/*빌링권한 서비스*/	
        		if(this.Div05.chk_BILLING_AUTH.value == "Y"){
        			if(this.Div05.Div03.rdo_SVC_ID.value=="21"){				
        				this.ds_svcInfo.addRow();
        				this.ds_svcInfo.addColumn("SVC_ID","string");		
        				this.ds_svcInfo.addColumn("RQ_DSC","string");			
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID","21");		
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC","1");
        			}
        			if(this.Div05.Div03.rdo_SVC_ID.value =="22"){
        				this.ds_svcInfo.addRow();		
        				this.ds_svcInfo.addColumn("SVC_ID","string");		
        				this.ds_svcInfo.addColumn("RQ_DSC","string");		
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID","22");				
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC","1");
        			}	
        			
        			if(this.Div05.Div03.cbk_SVC31.value == "Y"){
        				this.ds_svcInfo.addRow();		
        				this.ds_svcInfo.addColumn("SVC_ID","string");
        				this.ds_svcInfo.addColumn("RQ_DSC","string");		
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID","31");			
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC","1");
        			}
        			if(this.Div05.Div03.cbk_SVC32.value == "Y"){
        				this.ds_svcInfo.addRow();		
        				this.ds_svcInfo.addColumn("SVC_ID","string");			
        				this.ds_svcInfo.addColumn("RQ_DSC","string");		
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID","32");				
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC","1");
        			}
        			if(this.Div05.Div03.cbk_SVC33.value == "Y"){
        				this.ds_svcInfo.addRow();		
        				this.ds_svcInfo.addColumn("SVC_ID","string");
        				this.ds_svcInfo.addColumn("RQ_DSC","string");		
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID","33");
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC","1");
        			}
        			if(this.Div05.Div03.cbk_SVC34.value == "Y"){
        				this.ds_svcInfo.addRow();
        				this.ds_svcInfo.addColumn("SVC_ID","string");
        				this.ds_svcInfo.addColumn("RQ_DSC","string");		
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID","34");
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC","1");
        			}			
        		}		 
        		this.div_hiddenArea.edt_chgSvcYn.set_value("Y");
        	}else{		
        		var chg21Yn = "N";
        		var chg22Yn = "N";
        		var chg31Yn = "N";
        		var chg32Yn = "N";
        		var chg33Yn = "N";
        		var chg34Yn = "N";
        		
        		
        		/*가입된 서비스가 있을 경우*/
        		if(this.Div05.chk_BILLING_AUTH.value == "Y"){
        			
        			//정액제에서 종량제로 변경[종량제 신청]
        			 if(this.Div05.Div03.rdo_SVC_ID.value =="22"){			
        				this.ds_svcInfo.addRow();		
        				this.ds_svcInfo.addColumn("SVC_ID","string");
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID","22");
        				this.ds_svcInfo.addColumn("RQ_DSC","string");		
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC","1");
        				chg21Yn = "Y";
        			}
        			
        			//정액제[ 정액제 신청] 
        			 if(this.Div05.Div03.rdo_SVC_ID.value =="21"){
        				this.ds_svcInfo.addRow();		
        				this.ds_svcInfo.addColumn("SVC_ID","string");
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID","21");
        				this.ds_svcInfo.addColumn("RQ_DSC","string");		
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC","1");
        				chg22Yn = "Y";
        			}
        			/*BI조회 해지*/
        			 if(this.ds_entSvc.findRow("SVC_ID","31") >= 0 && this.Div05.Div03.cbk_SVC31.value =="N"){
        				this.ds_svcInfo.addRow();		
        				this.ds_svcInfo.addColumn("SVC_ID","string");
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID","31");
        				this.ds_svcInfo.addColumn("RQ_DSC","string");					
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC","0");
        				chg31Yn = "Y";
        			 }
        			 /*BI조회 신청*/
        			 if(this.ds_entSvc.findRow("SVC_ID","31") < 0 && this.Div05.Div03.cbk_SVC31.value =="Y"){
        				this.ds_svcInfo.addRow();		
        				this.ds_svcInfo.addColumn("SVC_ID","string");
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID","31");
        				this.ds_svcInfo.addColumn("RQ_DSC","string");					
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC","1");
        				chg31Yn = "Y";
        			 }
        			 
        			 /*추이분석 해지*/
        			 if(this.ds_entSvc.findRow("SVC_ID","32") >= 0 && this.Div05.Div03.cbk_SVC32.value =="N"){
        				this.ds_svcInfo.addRow();		
        				this.ds_svcInfo.addColumn("SVC_ID","string");
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID","32");
        				this.ds_svcInfo.addColumn("RQ_DSC","string");					
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC","0");
        				chg32Yn = "Y";
        			 }
        			 /*추이분석 신청*/
        			 if(this.ds_entSvc.findRow("SVC_ID","32") < 0 && this.Div05.Div03.cbk_SVC32.value =="Y"){
        				this.ds_svcInfo.addRow();		
        				this.ds_svcInfo.addColumn("SVC_ID","string");
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID","32");
        				this.ds_svcInfo.addColumn("RQ_DSC","string");					
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC","1");
        				chg32Yn = "Y";
        			 }
        			 
        			 /*시장분석 (자사)해지*/
        			 if(this.ds_entSvc.findRow("SVC_ID","33") >= 0 && this.Div05.Div03.cbk_SVC33.value =="N"){
        				this.ds_svcInfo.addRow();		
        				this.ds_svcInfo.addColumn("SVC_ID","string");
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID","33");
        				this.ds_svcInfo.addColumn("RQ_DSC","string");					
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC","0");
        				chg33Yn = "Y";
        			 }
        			 /*시장분석 (자사)신청*/
        			 if(this.ds_entSvc.findRow("SVC_ID","33") < 0 && this.Div05.Div03.cbk_SVC33.value =="Y"){
        				this.ds_svcInfo.addRow();		
        				this.ds_svcInfo.addColumn("SVC_ID","string");
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID","33");
        				this.ds_svcInfo.addColumn("RQ_DSC","string");					
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC","1");
        				chg33Yn = "Y";
        			 }
        			 
        			 /*시장분석 (타사)해지*/
        			 if(this.ds_entSvc.findRow("SVC_ID","34") >= 0 && this.Div05.Div03.cbk_SVC34.value =="N"){
        				this.ds_svcInfo.addRow();		
        				this.ds_svcInfo.addColumn("SVC_ID","string");
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID","34");
        				this.ds_svcInfo.addColumn("RQ_DSC","string");					
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC","0");
        				chg34Yn = "Y";
        			 }
        			 /*시장분석 (자사)신청*/
        			 if(this.ds_entSvc.findRow("SVC_ID","34") < 0 && this.Div05.Div03.cbk_SVC34.value =="Y"){
        				this.ds_svcInfo.addRow();		
        				this.ds_svcInfo.addColumn("SVC_ID","string");
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID","34");
        				this.ds_svcInfo.addColumn("RQ_DSC","string");					
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC","1");
        				chg34Yn = "Y";
        			 }		 
        		} 		
        		
        		if(chg21Yn =="N" &&  chg22Yn =="N" && chg31Yn =="N" && chg32Yn =="N" && chg33Yn =="N" && chg34Yn =="N" ){
        			this.div_hiddenArea.edt_chgSvcYn.set_value("N");
        		}else{
        			this.div_hiddenArea.edt_chgSvcYn.set_value("Y");
        		}		 
        	}	
        		
        	/*회원ID가 변경되었을 경우가 존재하므로, 마지막에 최종적으로 변경한다.*/	
        	for(var i =0 ; i < this.ds_svcInfo.rowcount ; i++){		
        		this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"MB_ID",this.Div05.edt_MB_ID.value);		
        	}	
        }
         

        /*******************************************************************************************************************
         거래처코드에 해당하는 빌링, 세금계산서 권한조회
        ********************************************************************************************************************/
        this.fn_retrieveNaTrplCAuthLst = function()
        {
        	var param 		  = "naTrplC="+this.Div05.edt_NA_TRPL_C.value;
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
        	인증번호생성 및 SMS전송
        ****************************************************/
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

        /***************************************************
        	인증번호 확인
        ****************************************************/
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
        		this.Div05.cbo_HP.style.set_background("#f0f0f0");
        		this.Div05.edt_HP01.style.set_background("#f0f0f0");
        		this.Div05.edt_HP02.style.set_background("#f0f0f0");
        		this.Div05.edt_confirmCertificate.style.set_background("#f0f0f0");
        		this.Div05.edt_confirmCertificate.set_readonly(true);
        		this.Div05.btn_certificate.set_enable(false);
        		this.Div05.btn_sendSms.set_enable(false);
        		alert("정상 처리되었습니다.");		
        	}
        }

        /*******************************************************************************************************************
         통장사본파일업로드
        ********************************************************************************************************************/
        this.Div03_FileUpload_onitemchanged = function(obj,e)
        {
        		this.gfn_callUpload(obj);
        }

        this.Div03_FileUpload_onsuccess = function(obj,e)
        {
        	if( e.datasets == null ){		
        	} else {	
        		this.ds_uploadresult00.clear();
        		this.ds_uploadresult00.appendData(e.datasets[0],false,false);
        		this.ds_payInfo.setColumn(0,"BB_FL_TMPNM"	,this.ds_uploadresult00.getColumn(0,"SYSTEMFILENAME"));
        		this.ds_payInfo.setColumn(0,"BB_FLNM"		,this.ds_uploadresult00.getColumn(0,"ORGFNAME"));					
        	}
        }

        /*******************************************************************************************************************
         사업자등록증파일업로드
        ********************************************************************************************************************/
        this.Div03_FileUpload00_onitemchanged = function(obj,e)
        {
        	this.gfn_callUpload(obj);
        }

        this.Div03_FileUpload00_onsuccess = function(obj,e)
        {
        	if( e.datasets == null ){
        	} else {				
        		this.ds_uploadresult01.clear();
        		this.ds_uploadresult01.appendData(e.datasets[0],false,false);
        		this.ds_payInfo.setColumn(0,"BZ_RGWRRT_FL_TMPNM"	,this.ds_uploadresult01.getColumn(0,"SYSTEMFILENAME"));
        		this.ds_payInfo.setColumn(0,"BZ_RGWRRT_FLNM"		,this.ds_uploadresult01.getColumn(0,"ORGFNAME"));		
        	}
        }
         
         
        /*******************************************************************************************************************
         서비스 권한에 따른 이벤트 처리 메소드 
        ********************************************************************************************************************/
        this.fn_visibleSvcInfo = function (auth,yn){			
        	
        	if(auth =="BILLING_AUTH"){
        		if(yn == 'Y'){						
        			this.Div05.Div03.set_top(nBasicBottom+20)						
        			this.Div05.Div03.set_visible(true);
        			var nDiv03Bottom = nexacro.toNumber(this.Div05.Div03.top) + nexacro.toNumber(this.Div05.Div03.height);
        			//맨밑 Static (* 업무시간외 회원가입시 익일 업무처리가 됩니다.)
        			this.Div05.Static138.set_top(nDiv03Bottom);
        			this.Div05.Static138.set_visible(true);
        		}else{		
        			this.Div05.Div03.set_visible(false);		
        			this.Div05.Static138.set_top(nBasicBottom);
        		}				
        		this.Div05.set_height(nexacro.toNumber(this.Div05.Static138.top) + nexacro.toNumber(this.Div05.Static138.height) + 15);	
        		this.resetScroll();			
        	} 	
        }
         
        /*****************************************************************************
        	납부정보 개인/법인에 따른 정보변경
        *****************************************************************************/	
        this.PSCRP_DSC_onitemchanged = function(obj,e)
        {
        	this.ds_payInfo.setColumn(0,"DPR_NO","");		
        	//개인
        	if(this.Div05.Div03.rdo_PSCRP_DSC.value == "1"){
        		this.Div05.Div03.Static111.set_text("생년월일");
        		this.Div05.Div03.mae_BIRTH.set_visible(true);
        		this.Div05.Div03.mae_BZNO.set_visible(false);
        	}
        	//법인
        	else if(this.Div05.Div03.rdo_PSCRP_DSC.value == "2"){
        		this.Div05.Div03.Static111.set_text("사업자번호");
        		this.Div05.Div03.mae_BIRTH.set_visible(false);
        		this.Div05.Div03.mae_BZNO.set_visible(true);
        	}
        }

        
        /*******************************************************************************************************************
         가입서비스가 존재할 경우 화면 dispaly
        ********************************************************************************************************************/
        this.fn_entSvcdisplay = function()
        {	
        	if(this.ds_entSvc.findRow("SVC_ID","21") >= 0 ){
        		this.Div05.Div03.rdo_SVC_ID.set_value("21");
        	}
        	if(this.ds_entSvc.findRow("SVC_ID","22") >= 0 ){
        		this.Div05.Div03.rdo_SVC_ID.set_value("22");
        	}
        	if(this.ds_entSvc.findRow("SVC_ID","31") >= 0 ){
        		this.Div05.Div03.cbk_SVC31.set_value("Y");
        	}else{
        		this.Div05.Div03.cbk_SVC31.set_value("N");
        	}
        	if(this.ds_entSvc.findRow("SVC_ID","32") >= 0 ){
        		this.Div05.Div03.cbk_SVC32.set_value("Y");
        	}else{
        		this.Div05.Div03.cbk_SVC32.set_value("N");
        	}
        	if(this.ds_entSvc.findRow("SVC_ID","33") >= 0 ){
        		this.Div05.Div03.cbk_SVC33.set_value("Y");
        	}else{
        		this.Div05.Div03.cbk_SVC33.set_value("N");
        	}
        	if(this.ds_entSvc.findRow("SVC_ID","34") >= 0 ){
        		this.Div05.Div03.cbk_SVC34.set_value("Y");
        	}else{
        		this.Div05.Div03.cbk_SVC34.set_value("N");
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
        /*******************************************************************************************************************
         납부방법에 따른 컨드롤 변경 - 버튼
        ********************************************************************************************************************/
        this.Div05_Div03_rdo_STL_METH_DSC_onitemchanged = function(obj,e)
        {

        	if(obj.value != "3"){
        		this.Div05.Div03.rdo_PSCRP_DSC.set_index(0);
        		this.Div05.Div03.rdo_HOP_DRW_DD.set_index(0);   //희망출금일
        	}
        	this.fn_stlMethDsc(obj.value);
        }

        /*******************************************************************************************************************
         납부방법에 따른 컨드롤 변경
        ********************************************************************************************************************/
        this.fn_stlMethDsc= function(type)
        { 
        	if(type =="1"){		
        		this.Div05.Div03.cbo_BNK_C.set_index(this.ds_bankCode.findRow("SIMP_C","011"));		
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
        		this.Div05.Div03.cbo_BNK_C.set_readonly(true);		
        		this.Div05.Div03.chk_DRW_FTR_AGR_YN.set_enable(true);
        		this.Div05.Div03.chk_DRW_FTR_AGR_YN.set_readonly(false);
        		this.Div05.Div03.chk_FNC_TR_INF_OFR_AGR_YN.set_enable(true);
        		this.Div05.Div03.chk_FNC_TR_INF_OFR_AGR_YN.set_readonly(false);		
        		this.Div05.Div03.txt_contents1.style.set_background("#ffffff");
        		this.Div05.Div03.txt_contents2.style.set_background("#ffffff");
        	}else if(type =="2"){
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
        	}else if(type =="3"){
        		
        		/*가상계좌 선택시
        		 - 기존 계좌가 존재하지 않으며, 가상계좌가 존재하지 않을 경우*/		
        		if(this.gfn_isNull(this.orgAcNo)){
        			if(this.Div05.Div03.rdo_STL_METH_DSC.value == "3" && this.gfn_isNull(this.vrtlAcNo)){
        				this.fn_getVirtualAccount();
        			}
        		}else{
        			/*납부정보*/
        			if(this.ds_payInfo.getOrgColumn(0,"STL_METH_DSC") == "3"){			
        				this.vrtlAcNo = this.orgAcNo;
        			} 
        		}
        		
        		this.Div05.Div03.cbo_BNK_C.set_readonly(true);
        		this.Div05.Div03.cbo_BNK_C.set_index(this.ds_bankCode.findRow("SIMP_C","011"));				
        		this.Div05.Div03.edt_DPRNM.set_value("");
        		this.Div05.Div03.rdo_PSCRP_DSC.set_value("");
        		this.Div05.Div03.mae_BIRTH.set_value("");
        		this.Div05.Div03.mae_BZNO.set_value("");
        		this.Div05.Div03.edt_AC_NO.set_value(this.vrtlAcNo);		
        		this.Div05.Div03.edt_AC_NO.set_readonly(true);		//계좌번호		
        		this.ds_uploadresult00.clearData();				
        		this.ds_payInfo.setColumn(0,"BB_FL_TMPNM"	,"");
        		this.ds_payInfo.setColumn(0,"BB_FLNM"		,"");		
        		this.Div05.Div03.cbo_BNK_C.set_enable(true);		//거래은행
        		this.Div05.Div03.edt_AC_NO.set_enable(true);		//계좌번호
        		this.Div05.Div03.edt_DPRNM.set_enable(false);		//예금주
        		this.Div05.Div03.rdo_PSCRP_DSC.set_enable(false);	//개인/법인
        		this.Div05.Div03.mae_BIRTH.set_enable(false);		//생년월일
        		this.Div05.Div03.mae_BZNO.set_enable(false);		//사업자번호		
        		this.Div05.Div03.FileUpload.set_enable(false);		//통장사본
        		/*파일처리 S*/
        		if(this.Div05.Div03.FileUpload.index > -1) {
        			this.Div05.Div03.FileUpload.deleteItem(this.Div05.Div03.FileUpload.index);
        		}
        		this.Div05.Div03.FileUpload.set_itemcount(1);
        		/*파일처리 E*/
        		this.Div05.Div03.rdo_HOP_DRW_DD.set_enable(false);	//희망출금일
        		this.Div05.Div03.chk_DRW_FTR_AGR_YN.set_enable(false);		
        		this.Div05.Div03.chk_FNC_TR_INF_OFR_AGR_YN.set_enable(false);				
        		this.Div05.Div03.txt_contents1.style.set_background("#f0f0f0");
        		this.Div05.Div03.txt_contents2.style.set_background("#f0f0f0");
        	}else{
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
         미전환회원권한 클릭시 호출 메소드
        ********************************************************************************************************************/
        this.alertMsg = function(obj,e)
        {
        	alert("미전환 회원 가입시, 권한을 변경 하실 수 없습니다.");
        }
        /*******************************************************************************************************************
         callback메소드
        ********************************************************************************************************************/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	
        	if(ErrorCode < 0 ){
        		this.gfn_getMessage("alert", "error.message.server.exception");
        	}else{
        		if(svcID=="retrieveMB"){
        		
        	//	trace("ds_basicInfo" + this.ds_basicInfo.saveXML()) ;
        		
        		if(this.ds_basicInfo.rowcount >0){
        			if(this.ds_basicInfo.getColumn(0,"NA_MBCO_DSC" ) != "1" ){
        				this.Div05.edt_B_BZN01.set_visible(true);
        				this.Div05.edt_B_BZN02.set_visible(true);
        				this.Div05.edt_B_BZN03.set_visible(true);
        				this.Div05.Static13.set_visible(true);
        				this.Div05.Static15.set_visible(true);
        				this.Div05.Static16.set_visible(true);
        			}
        		}
        		
        		
        				
        			/*기존가입서비스가 있을 경우*/
        			if(this.ds_entSvc.rowcount >0){
        				this.fn_entSvcdisplay();
        			}
        			/*권한정보가 있을 경우*/					
        			if(this.ds_usrAuth.rowcount > 0){
        				if(this.ds_usrAuth.findRow("USR_AUTH_DSC","1") >= 0 && (this.ds_usrAuth.getColumn(this.ds_usrAuth.findRow("USR_AUTH_DSC","1"),"MB_ID") == this.Div05.edt_MB_ID.value)){
        					this.Div05.chk_BILLING_AUTH.set_value("Y");
        					this.fn_visibleSvcInfo("BILLING_AUTH","Y");
        				}
        					
        				if(this.ds_usrAuth.findRow("USR_AUTH_DSC","2") >= 0 && (this.ds_usrAuth.getColumn(this.ds_usrAuth.findRow("USR_AUTH_DSC","2"),"MB_ID") == this.Div05.edt_MB_ID.value)){
        				
        				
        					this.Div05.chk_CONTRACT_AUTH.set_value("Y");
        					
        										
        										
        				}
        				if(this.ds_usrAuth.findRow("USR_AUTH_DSC","3") >= 0 && (this.ds_usrAuth.getColumn(this.ds_usrAuth.findRow("USR_AUTH_DSC","3"),"MB_ID") == this.Div05.edt_MB_ID.value)){
        					this.Div05.chk_TAX_AUTH.set_value("Y");					
        				}
        			}else{
        				this.Div05.chk_BILLING_AUTH.set_value("N");
        				this.Div05.chk_CONTRACT_AUTH.set_value("N");
        				this.Div05.chk_TAX_AUTH.set_value("N");
        			}
        			
        			this.orgAcNo = this.gfn_nullToEmpty(this.ds_payInfo.getColumn(0,"ACNO"));						
        			/*납부정보가 있을경우*/
        			if(this.ds_payInfo.rowcount >0){				
        				this.fn_stlMethDsc(this.ds_payInfo.getColumn(0,"STL_METH_DSC"));
        				this.Div05.Div03.edt_AC_NO.set_value(this.orgAcNo);
        				if(this.ds_payInfo.getColumn(0,"PSCRP_DSC") == "1"){
        					this.Div05.Div03.mae_BIRTH.set_value(this.ds_payInfo.getColumn(0,"DPR_NO"));
        				}else{
        					this.Div05.Div03.mae_BZNO.set_value(this.ds_payInfo.getColumn(0,"DPR_NO"));
        				}
        			}else{
        				this.ds_payInfo.addRow();
        			}
        		}else if(svcID == "sendSms"){
        			alert("고객님의 휴대전화로 인증번호가 발송되었습니다.");
        			this.div_hiddenArea.edt_randomNumber.set_value(this.ds_certNum.getColumn(0,"CERT_NUM"));						
        		}else if(svcID == "retrieveNaTrplCAuthLst" ){
        			
        		}else if(svcID == "updateMB"){
        			alert("정상 신청 되었습니다.");
        			this.close();			
        		}else if(svcID == "getVirtualAccount"){						
        			this.vrtlAcNo = this.ds_vrtlAcNo.getColumn(0,"VRTL_ACNO");			
        			this.Div05.Div03.edt_AC_NO.set_value(this.vrtlAcNo);					
        		}
        	}
        	 
        }

        this.fn_BZNOCheck = function(){

         var strNumb =  this.ds_basicInfo.getColumn(0,"BRC_BZNO1" ) +this.ds_basicInfo.getColumn(0,"BRC_BZNO2" ) + this.ds_basicInfo.getColumn(0,"BRC_BZNO3" )  ;
         
         	if(strNumb =='0000000000'){
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
                
                if(sumMod % 10 != 0){ 
                
        			alert("지사 사업자등록번호가 잘못되었습니다."); 
        			this.Div05.edt_B_BZN01.setFocus();
        			return false; 
                } 
               return true; 
        }

        this.Div05_Div00_FileUpload_onerror = function(obj,e)
        {
        	alert("하나로 eSCM으로 파일전송이 실패하였습니다. \n첨부파일의 크기가 20M 이하인지, 악성파일 차단 보안 프로그램이 설치되어 있는지 확인해주세요.");
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
            this.Div01.Static01.addEventHandler("onclick", this.Div01_Static01_onclick, this);
            this.Div01.Static02.addEventHandler("onclick", this.Div01_Static01_onclick, this);
            this.Div01.Static03.addEventHandler("onclick", this.Div01_Static01_onclick, this);
            this.Div01.Static04.addEventHandler("onclick", this.Div01_Static01_onclick, this);
            this.Div05.Div02.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.Div05.rdo_COMP_TPC.addEventHandler("onitemclick", this.Radio00_onitemclick, this);
            this.Div05.Static03.addEventHandler("onclick", this.Div05_Static03_onclick, this);
            this.Div05.Div03.Static04.addEventHandler("onclick", this.Div05_Div03_Static04_onclick, this);
            this.Div05.Div03.rdo_STL_METH_DSC.addEventHandler("onitemchanged", this.Div05_Div03_rdo_STL_METH_DSC_onitemchanged, this);
            this.Div05.Div03.rdo_HOP_DRW_DD.addEventHandler("onitemclick", this.Div03_rdo_HOP_DRW_DD_onitemclick, this);
            this.Div05.Div03.rdo_PSCRP_DSC.addEventHandler("onitemchanged", this.PSCRP_DSC_onitemchanged, this);
            this.Div05.Div03.FileUpload.addEventHandler("onsuccess", this.Div03_FileUpload_onsuccess, this);
            this.Div05.Div03.FileUpload.addEventHandler("onitemchanged", this.Div03_FileUpload_onitemchanged, this);
            this.Div05.Div03.FileUpload.addEventHandler("onerror", this.Div05_Div00_FileUpload_onerror, this);
            this.Div05.Div03.FileUpload00.addEventHandler("onsuccess", this.Div03_FileUpload00_onsuccess, this);
            this.Div05.Div03.FileUpload00.addEventHandler("onitemchanged", this.Div03_FileUpload00_onitemchanged, this);
            this.Div05.Div03.FileUpload00.addEventHandler("onerror", this.Div05_Div00_FileUpload_onerror, this);
            this.Div05.Static10.addEventHandler("onclick", this.Div05_Static03_onclick, this);
            this.Div05.rdo_SEX_DSC.addEventHandler("onitemclick", this.Radio00_onitemclick, this);
            this.Div05.Static138.addEventHandler("onclick", this.Static138_onclick, this);
            this.Div05.Static14.addEventHandler("onclick", this.Div05_Static13_onclick, this);
            this.Div05.chk_TAX_AUTH.addEventHandler("onclick", this.alertMsg, this);
            this.Div05.chk_CONTRACT_AUTH.addEventHandler("onclick", this.alertMsg, this);
            this.Div05.chk_BILLING_AUTH.addEventHandler("onclick", this.alertMsg, this);
            this.Div05.btn_certificate.addEventHandler("onclick", this.btn_certificate_onclick, this);
            this.Div05.btn_sendSms.addEventHandler("onclick", this.btn_sendSms_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_5113.xfdl");

       
    };
}
)();
