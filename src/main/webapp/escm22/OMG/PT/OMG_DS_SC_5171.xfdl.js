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
                this.set_titletext("농협몰회원정보변경");
                this._setFormPosition(0,0,750,478);
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
            obj._setContents("<ColumnInfo><Column id=\"BZNO1\" type=\"STRING\" size=\"30\"/><Column id=\"BZNO2\" type=\"STRING\" size=\"30\"/><Column id=\"BZNO3\" type=\"STRING\" size=\"30\"/><Column id=\"BRC_BZNO1\" type=\"STRING\" size=\"256\"/><Column id=\"BRC_BZNO2\" type=\"STRING\" size=\"256\"/><Column id=\"BRC_BZNO3\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"30\"/><Column id=\"COMP_TPC\" type=\"STRING\" size=\"30\"/><Column id=\"MB_ID\" type=\"STRING\" size=\"30\"/><Column id=\"MB_PW\" type=\"STRING\" size=\"256\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"30\"/><Column id=\"USR_TELNO\" type=\"STRING\" size=\"30\"/><Column id=\"USR_EMAIL01\" type=\"STRING\" size=\"30\"/><Column id=\"USR_EMAIL02\" type=\"STRING\" size=\"30\"/><Column id=\"SMS_RMS_YN\" type=\"STRING\" size=\"30\"/><Column id=\"EMAIL_RMS_YN\" type=\"STRING\" size=\"30\"/><Column id=\"USR_HP\" type=\"STRING\" size=\"30\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"30\"/><Column id=\"REPMNM\" type=\"STRING\" size=\"30\"/><Column id=\"DONGUP\" type=\"STRING\" size=\"30\"/><Column id=\"DONGBW\" type=\"STRING\" size=\"30\"/><Column id=\"FZIP\" type=\"STRING\" size=\"30\"/><Column id=\"RZIP\" type=\"STRING\" size=\"30\"/><Column id=\"ATEL\" type=\"STRING\" size=\"30\"/><Column id=\"HTEL\" type=\"STRING\" size=\"30\"/><Column id=\"STEL\" type=\"STRING\" size=\"30\"/><Column id=\"USR_MPNO01\" type=\"STRING\" size=\"30\"/><Column id=\"USR_MPNO02\" type=\"STRING\" size=\"30\"/><Column id=\"USR_MPNO03\" type=\"STRING\" size=\"30\"/><Column id=\"BIRTH\" type=\"STRING\" size=\"30\"/><Column id=\"SEX_DSC\" type=\"STRING\" size=\"30\"/><Column id=\"USR_TPC\" type=\"STRING\" size=\"30\"/><Column id=\"CHRG_BSNNM\" type=\"STRING\" size=\"256\"/><Column id=\"ENT_PRG_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"ENT_PRG_STSC\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"USR_AUTH_DSC\" type=\"STRING\" size=\"128\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ENT_PRG_STSC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_ENT_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"ENT_PRG_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"RQ_DSC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"STL_METH_DSC\" type=\"STRING\" size=\"128\"/><Column id=\"HOP_DRW_DD\" type=\"STRING\" size=\"128\"/><Column id=\"PSCRP_DSC\" type=\"STRING\" size=\"128\"/><Column id=\"DPR_NO\" type=\"STRING\" size=\"128\"/><Column id=\"BNK_C\" type=\"STRING\" size=\"128\"/><Column id=\"ACNO\" type=\"STRING\" size=\"128\"/><Column id=\"BB_FLNM\" type=\"STRING\" size=\"128\"/><Column id=\"BB_FL_TMPNM\" type=\"STRING\" size=\"128\"/><Column id=\"BZ_RGWRRT_FLNM\" type=\"STRING\" size=\"128\"/><Column id=\"BZ_RGWRRT_FL_TMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"FL_PATHNM\" type=\"STRING\" size=\"128\"/><Column id=\"DRW_FTR_AGR_YN\" type=\"STRING\" size=\"128\"/><Column id=\"FNC_TR_INF_OFR_AGR_YN\" type=\"STRING\" size=\"128\"/><Column id=\"DPRNM\" type=\"STRING\" size=\"128\"/><Column id=\"ELSG_CNTN\" type=\"STRING\" size=\"8000\"/><Column id=\"ACNO_B\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"BZNO\" type=\"STRING\" size=\"10\"/><Column id=\"REPMNM\" type=\"STRING\" size=\"50\"/><Column id=\"ZIP\" type=\"STRING\" size=\"6\"/><Column id=\"DONGUP\" type=\"STRING\" size=\"300\"/><Column id=\"DONGBW\" type=\"STRING\" size=\"100\"/><Column id=\"BZCCNM\" type=\"STRING\" size=\"60\"/><Column id=\"BZTPNM\" type=\"STRING\" size=\"50\"/></ColumnInfo><Rows><Row/></Rows>");
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

            obj = new Static("Static87", "absolute", "728", "1", "17", "476", null, null, this);
            obj.set_taborder("2");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_hiddenArea", "absolute", "4", "484", "484", "453", null, null, this);
            obj.set_taborder("4");
            obj.set_text("div_hiddenArea");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Edit("edt_randomNumber", "absolute", "15", "146", "138", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("24");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_confirm", "absolute", "172", "146", "138", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("25");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_USR_TPC", "absolute", "320", "148", "138", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("26");
            obj.set_value("81");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_chgSealAmnYn", "absolute", "320", "204", "28.45%", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("27");
            obj.set_value("N");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_chgBillingYn", "absolute", "320", "175", "28.45%", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("28");
            obj.set_value("N");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_chgAuthYn", "absolute", "172", "175", "28.45%", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("29");
            obj.set_value("N");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_chgSvcYn", "absolute", "15", "175", "28.45%", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("30");
            obj.set_value("N");
            this.div_hiddenArea.addChild(obj.name, obj);

            obj = new Div("Div05", "absolute", "17", "16", "711", "461", null, null, this);
            obj.set_taborder("5");
            obj.set_text("Div01");
            obj.style.set_background("transparent");
            obj.set_scrollbars("autovert");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Static("Static120", "absolute", "0", "412", "711", "29", null, null, this.Div05);
            obj.set_taborder("154");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static91", "absolute", "0", "87", "711", "29", null, null, this.Div05);
            obj.set_taborder("121");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static103", "absolute", "0", "199", "711", "58", null, null, this.Div05);
            obj.set_taborder("123");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static101", "absolute", "0", "171", "711", "29", null, null, this.Div05);
            obj.set_taborder("124");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static98", "absolute", "0", "143", "711", "29", null, null, this.Div05);
            obj.set_taborder("125");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static95", "absolute", "0", "115", "711", "29", null, null, this.Div05);
            obj.set_taborder("126");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Div("Div02", "absolute", "0", "0", "711", "43", null, null, this.Div05);
            obj.set_taborder("127");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Button("btn_save", "absolute", "662", "9", "41", "21", null, null, this.Div05.Div02);
            obj.set_taborder("59");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.Div05.Div02.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "9", "115", "21", null, null, this.Div05.Div02);
            obj.set_taborder("60");
            obj.set_text("회원정보수정");
            obj.style.set_font("bold 9 arial");
            this.Div05.Div02.addChild(obj.name, obj);
            obj = new Static("sta_ENT_PRG_CNTN", "absolute", "122", "9", "533", "21", null, null, this.Div05.Div02);
            obj.set_taborder("61");
            obj.set_usedecorate("true");
            obj.style.set_align("left middle");
            obj.set_visible("false");
            this.Div05.Div02.addChild(obj.name, obj);
            obj = new Static("Static89", "absolute", "0", "63", "135", "21", null, null, this.Div05);
            obj.set_taborder("128");
            obj.set_text("회사 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static92", "absolute", "0", "87", "120", "29", null, null, this.Div05);
            obj.set_taborder("129");
            obj.set_text("본사 사업자번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static94", "absolute", "0", "115", "120", "29", null, null, this.Div05);
            obj.set_taborder("130");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static97", "absolute", "0", "143", "120", "29", null, null, this.Div05);
            obj.set_taborder("131");
            obj.set_text("대표자명");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static100", "absolute", "0", "171", "120", "29", null, null, this.Div05);
            obj.set_taborder("132");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static102", "absolute", "0", "199", "120", "58", null, null, this.Div05);
            obj.set_taborder("133");
            obj.set_text("회사주소");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static93", "absolute", "336", "115", "135", "29", null, null, this.Div05);
            obj.set_taborder("134");
            obj.set_text("거래처코드");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static99", "absolute", "336", "171", "135", "29", null, null, this.Div05);
            obj.set_taborder("135");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static129", "absolute", "160", "91", "9", "21", null, null, this.Div05);
            obj.set_taborder("136");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_BZNO02", "absolute", "167", "91", "30", "21", null, null, this.Div05);
            obj.set_taborder("137");
            obj.set_readonly("true");
            obj.set_maxlength("2");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_BZNO03", "absolute", "206", "91", "65", "21", null, null, this.Div05);
            obj.set_taborder("138");
            obj.set_readonly("true");
            obj.set_maxlength("5");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_NA_TRPL_C", "absolute", "474", "119", "180", "21", null, null, this.Div05);
            obj.set_taborder("139");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_REPMNM", "absolute", "123", "147", "180", "21", null, null, this.Div05);
            obj.set_taborder("140");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_RZIP", "absolute", "167", "175", "35", "21", null, null, this.Div05);
            obj.set_taborder("141");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static133", "absolute", "160", "174", "9", "21", null, null, this.Div05);
            obj.set_taborder("142");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_FZIP", "absolute", "123", "175", "35", "21", null, null, this.Div05);
            obj.set_taborder("143");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_DONGBW", "absolute", "123", "205", "583", "21", null, null, this.Div05);
            obj.set_taborder("144");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_DONGUP", "absolute", "123", "230", "583", "21", null, null, this.Div05);
            obj.set_taborder("145");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "199", "91", "9", "21", null, null, this.Div05);
            obj.set_taborder("147");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "277", "135", "21", null, null, this.Div05);
            obj.set_taborder("148");
            obj.set_text("회원 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static107", "absolute", "0", "301", "711", "29", null, null, this.Div05);
            obj.set_taborder("149");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static113", "absolute", "0", "356", "711", "29", null, null, this.Div05);
            obj.set_taborder("151");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static115", "absolute", "0", "384", "711", "29", null, null, this.Div05);
            obj.set_taborder("152");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static114", "absolute", "336", "143", "135", "29", null, null, this.Div05);
            obj.set_taborder("155");
            obj.set_text("대표전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0", "356", "120", "29", null, null, this.Div05);
            obj.set_taborder("156");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static106", "absolute", "0", "301", "120", "29", null, null, this.Div05);
            obj.set_taborder("158");
            obj.set_text("회원ID");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new CheckBox("chk_SMS_YN", "absolute", "125", "418", "58", "21", null, null, this.Div05);
            obj.set_taborder("164");
            obj.set_text("SMS");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.Div05.addChild(obj.name, obj);
            obj = new CheckBox("chk_MAIL_YN", "absolute", "201", "418", "58", "21", null, null, this.Div05);
            obj.set_taborder("165");
            obj.set_text("메일");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_TEL01", "absolute", "531", "147", "48", "21", null, null, this.Div05);
            obj.set_taborder("167");
            obj.set_inputtype("number");
            obj.set_readonly("true");
            obj.set_maxlength("4");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_TEL02", "absolute", "588", "147", "48", "21", null, null, this.Div05);
            obj.set_taborder("168");
            obj.set_inputtype("number");
            obj.set_readonly("true");
            obj.set_maxlength("4");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_USR_EMAIL01", "absolute", "123", "360", "122", "21", null, null, this.Div05);
            obj.set_taborder("169");
            obj.set_maxlength("25");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_MB_ID", "absolute", "123", "305", "122", "21", null, null, this.Div05);
            obj.set_taborder("171");
            obj.set_inputtype("number,english");
            obj.set_readonly("true");
            obj.set_maxlength("9");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_USR_EMAIL02", "absolute", "264", "360", "122", "21", null, null, this.Div05);
            obj.set_taborder("172");
            obj.set_maxlength("25");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static134", "absolute", "250", "360", "13", "21", null, null, this.Div05);
            obj.set_taborder("173");
            obj.set_text("@");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "336", "301", "135", "29", null, null, this.Div05);
            obj.set_taborder("174");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_USR_NM", "absolute", "474", "305", "180", "21", null, null, this.Div05);
            obj.set_taborder("176");
            obj.set_maxlength("16");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static116", "absolute", "0", "384", "120", "29", null, null, this.Div05);
            obj.set_taborder("178");
            obj.set_text("휴대전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Combo("cbo_HP", "absolute", "123", "388", "51", "21", null, null, this.Div05);
            this.Div05.addChild(obj.name, obj);
            obj.set_taborder("179");
            obj.set_innerdataset("ds_hpNo");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj = new Static("Static125", "absolute", "174", "388", "9", "21", null, null, this.Div05);
            obj.set_taborder("180");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_HP01", "absolute", "183", "388", "48", "21", null, null, this.Div05);
            obj.set_taborder("181");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static126", "absolute", "231", "388", "9", "21", null, null, this.Div05);
            obj.set_taborder("182");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_HP02", "absolute", "240", "388", "48", "21", null, null, this.Div05);
            obj.set_taborder("183");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "522", "147", "9", "21", null, null, this.Div05);
            obj.set_taborder("184");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "579", "147", "9", "21", null, null, this.Div05);
            obj.set_taborder("185");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static119", "absolute", "0", "412", "120", "29", null, null, this.Div05);
            obj.set_taborder("186");
            obj.set_text("수신 서비스");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_CLNTNM", "absolute", "123", "119", "180", "21", null, null, this.Div05);
            obj.set_taborder("191");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "0", "328", "711", "29", null, null, this.Div05);
            obj.set_taborder("195");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "0", "328", "120", "29", null, null, this.Div05);
            obj.set_taborder("196");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "336", "328", "135", "29", null, null, this.Div05);
            obj.set_taborder("197");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Radio("rdo_SEX_DSC", "absolute", "477", "333", "183", "21", null, null, this.Div05);
            this.Div05.addChild(obj.name, obj);
            var rdo_SEX_DSC_innerdataset = new Dataset("rdo_SEX_DSC_innerdataset", this.Div05.rdo_SEX_DSC);
            rdo_SEX_DSC_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">남</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">여</Col></Row></Rows>");
            obj.set_innerdataset(rdo_SEX_DSC_innerdataset);
            obj.set_taborder("198");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj = new Edit("edt_BZNO01", "absolute", "123", "91", "35", "21", null, null, this.Div05);
            obj.set_taborder("199");
            obj.set_readonly("true");
            obj.set_maxlength("3");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Calendar("edt_BIRTH", "absolute", "123", "333", "15.47%", "21", null, null, this.Div05);
            this.Div05.addChild(obj.name, obj);
            obj.set_taborder("203");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Edit("edt_TEL00", "absolute", "474", "147", "48", "21", null, null, this.Div05);
            obj.set_taborder("204");
            obj.set_inputtype("number");
            obj.set_readonly("true");
            obj.set_maxlength("4");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Plugin("Plugin00", "absolute", "62.59%", "9", null, "24", "10.97%", null, this.Div05);
            obj.setProperty("visible", "false");
            obj.setProperty("classid", "{55D9860A-AB9C-44A1-BB74-75AF7F805333}");
            obj.setProperty("taborder", "205");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "512", "91", "9", "21", null, null, this.Div05);
            obj.set_taborder("206");
            obj.set_text("-");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_B_BZN02", "absolute", "519", "91", "30", "21", null, null, this.Div05);
            obj.set_taborder("207");
            obj.set_readonly("false");
            obj.set_maxlength("2");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_B_BZN03", "absolute", "558", "91", "65", "21", null, null, this.Div05);
            obj.set_taborder("208");
            obj.set_readonly("false");
            obj.set_maxlength("5");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "551", "91", "9", "21", null, null, this.Div05);
            obj.set_taborder("209");
            obj.set_text("-");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_B_BZN01", "absolute", "475", "91", "35", "21", null, null, this.Div05);
            obj.set_taborder("210");
            obj.set_readonly("false");
            obj.set_maxlength("3");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "336", "87", "135", "29", null, null, this.Div05);
            obj.set_taborder("211");
            obj.set_text("지사 사업자번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "18", "273", "717", "20", null, null, this);
            obj.set_taborder("6");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "18", "456", "717", "20", null, null, this);
            obj.set_taborder("7");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "775", "56", "711", "461", null, null, this);
            obj.set_taborder("8");
            obj.set_text("Div01");
            obj.style.set_background("white");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Div("Div02", "absolute", "0", "0", "711", "43", null, null, this.Div01);
            obj.set_taborder("63");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "9", "107", "21", null, null, this.Div01.Div02);
            obj.set_taborder("71");
            obj.set_text("비밀번호 재확인");
            obj.style.set_font("bold 9 arial");
            this.Div01.Div02.addChild(obj.name, obj);
            obj = new Button("btn_confirm", "absolute", "662", "9", "41", "21", null, null, this.Div01.Div02);
            obj.set_taborder("72");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_CRUD");
            this.Div01.Div02.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer00", "absolute", "101", "131", "90", "100", null, null, this.Div01);
            obj.set_taborder("64");
            obj.set_image("URL('theme://images/img_PassWord.jpg')");
            obj.style.set_border("0 solid #bfbfbfff");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "209", "116", "292", "44", null, null, this.Div01);
            obj.set_taborder("65");
            obj.set_text("비밀번호 재확인");
            obj.set_usedecorate("true");
            obj.style.set_font("bold 24 Gulim");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "216", "198", "291", "21", null, null, this.Div01);
            obj.set_taborder("66");
            obj.set_text("본인 확인을 위해 한번 더 비밀번호를 입력해주세요.");
            obj.style.set_font("9 Gulim");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "216", "230", "291", "21", null, null, this.Div01);
            obj.set_taborder("67");
            obj.set_text("비밀번호는 타인에게 노출되지 않도록 주의해 주세요.");
            obj.style.set_font("9 Gulim");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "145", "293", "120", "21", null, null, this.Div01);
            obj.set_taborder("68");
            obj.set_text("회원ID");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "145", "333", "120", "21", null, null, this.Div01);
            obj.set_taborder("69");
            obj.set_text("비밀번호");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("mb_id", "absolute", "265", "293", "140", "21", null, null, this.Div01);
            obj.set_taborder("70");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("edt_pw", "absolute", "265", "333", "140", "21", null, null, this.Div01);
            obj.set_taborder("71");
            obj.set_password("true");
            this.Div01.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 484, 453, this.div_hiddenArea,
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
            		p.set_taborder("127");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.Div05.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 711, 1139, this.Div05,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.set_text("Div01");
            		p.style.set_background("transparent");
            		p.set_scrollbars("autovert");
            		p.set_visible("false");

            	}
            );
            this.Div05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 711, 43, this.Div01.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("63");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.Div01.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 711, 461, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("8");
            		p.set_text("Div01");
            		p.style.set_background("white");
            		p.set_visible("false");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 750, 478, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("농협몰회원정보변경");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Div05.edt_BZNO01","value","ds_basicInfo","BZNO1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div05.edt_BZNO02","value","ds_basicInfo","BZNO2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Div05.edt_BZNO03","value","ds_basicInfo","BZNO3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Div05.edt_NA_TRPL_C","value","ds_basicInfo","NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Div05.edt_CLNTNM","value","ds_basicInfo","CLNTNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Div05.edt_REPMNM","value","ds_basicInfo","REPMNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Div05.edt_FZIP","value","ds_basicInfo","FZIP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Div05.edt_RZIP","value","ds_basicInfo","RZIP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Div05.edt_DONGBW","value","ds_basicInfo","DONGUP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Div05.edt_DONGUP","value","ds_basicInfo","DONGBW");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Div05.edt_MB_ID","value","ds_basicInfo","MB_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Div05.edt_USR_NM","value","ds_basicInfo","USR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","Div05.rdo_SEX_DSC","value","ds_basicInfo","SEX_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","Div05.edt_USR_EMAIL01","value","ds_basicInfo","USR_EMAIL01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","Div05.edt_USR_EMAIL02","value","ds_basicInfo","USR_EMAIL02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","Div05.edt_TEL01","value","ds_basicInfo","HTEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","Div05.edt_TEL02","value","ds_basicInfo","STEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","Div05.cbo_HP","value","ds_basicInfo","USR_MPNO01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","Div05.edt_HP01","value","ds_basicInfo","USR_MPNO02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","Div05.edt_HP02","value","ds_basicInfo","USR_MPNO03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","Div05.chk_SMS_YN","value","ds_basicInfo","SMS_RMS_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","Div05.chk_MAIL_YN","value","ds_basicInfo","EMAIL_RMS_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","Div05.edt_BIRTH","value","ds_basicInfo","BIRTH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","Div05.edt_CLNTNM","tooltiptext","ds_basicInfo","CLNTNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","Div05.edt_TEL00","value","ds_basicInfo","ATEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","Div05.Div02.sta_ENT_PRG_CNTN","text","ds_basicInfo","ENT_PRG_CNTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","Div05.edt_B_BZN02","value","ds_basicInfo","BRC_BZNO2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","Div05.edt_B_BZN03","value","ds_basicInfo","BRC_BZNO3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","Div05.edt_B_BZN01","value","ds_basicInfo","BRC_BZNO1");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_5171.xfdl", "lib::comLib.xjs");
        this.addIncludeScript("OMG_DS_SC_5171.xfdl", "lib::comTSToolKit.xjs");
        this.registerScript("OMG_DS_SC_5171.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comTSToolKit.xjs", null, exports); }	//include "lib::comTSToolKit.xjs";
        /*******************************************************************
        	전역변수 선언                                                     
        	orgAcNo  : DB에 등록된 계좌번호	
        	vrtlAcNo : 가상계좌번호
        	
        *******************************************************************/
        this.orgAcNo = "";
        this.orgDpNo = "";
        this.vrtlAcNo = "";
        this.entPrgStsc_temp ="";

        this.form_onload = function(obj,e)
        {	
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {   
        	//공통코드콤보가져오기	
        	var param = [   		
         		{code:"HP"	,     dsName:"ds_hpNo", selecttype:"N"}, 		
         		{code:"BNK_C"	, dsName:"ds_bankCode", selecttype:"N"}
            ];
        	this.gfn_setPortalCommonCode(param);
        		
        	this.Div01.mb_id.set_text("  " + application.gv_userId);		
        	this.Div01.set_left(17);
        	this.Div01.set_visible(true); // 비밀번호 재확인
        	this.Div05.set_visible(false);
        // 	this.Div05.set_height(nexacro.toNumber(this.Div05.Static138.top) + nexacro.toNumber(this.Div05.Static138.height) + 15);
        	
        	this.Div01.edt_pw.setFocus(); // 비밀번호
        }

        /*******************************************************************************************************************
        	회원정보조회 메소드
        	ds_basicInfo : 회사정보 + 회원정보
        	ds_payInfo : 납부 정보
        	ds_svcAuth : 회원 권한
        	ds_svcInfo : 회원 서비스
        	ds_naTrplCAuthIng : 거래처코드에 진행중인 권한회원
        	ds_naTrplCAuth : 거래처코드에 권한회원
        	ds_entSvc : 거래처코드에 가입된 서비스
        ********************************************************************************************************************/
        this.fn_retriveUsrInfo = function (){	
        	
        	var sSvcID        = "retrieveMB";
        	var sURL          = "svc::rest/pt/usrinf/retrieveMB" 
        	var sInDatasets   = "";		
        	var sOutDatasets  = "ds_basicInfo=ds_basicInfo ds_naTrplCAuth=ds_naTrplCAuth ds_usrAuth=ds_usrAuth ds_entSvc=ds_entSvc ds_payInfo=ds_payInfo ds_naTrplCAuthIng=ds_naTrplCAuthIng ds_branch_bzno=ds_branch_bzno";
        	var sArgument     =  "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회		 
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        
        /*******************************************************************************************************************
         회원 재 확인
        ********************************************************************************************************************/
        this.Div01_Div02_btn_confirm_onclick = function(obj,e)
        {
        	
        	if(this.gfn_isNull(this.Div01.edt_pw.value)){
        		alert("비밀번호를 입력해주세요.");		
        		this.Div01.edt_pw.setFocus();
        		return false;
        	}		
        	var sSvcID        = "checkMBPW";
        	var sURL          = "svc::rest/pt/usrinf/checkMBPW"
        	var sInDatasets   = "";
        	var sOutDatasets  = "";
        	var sArgument     = "mbPw="+this.Div01.edt_pw.value;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회		 
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        
        /*******************************************************************************************************************
         저장
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
        		
        		this.fn_setSvcInfo();		/*서비스정보 세팅*/

        		if(this.ds_basicInfo.getColumn(0,"ENT_PRG_STSC") == "2"){
        			this.ds_basicInfo.setColumn(0,"ENT_PRG_STSC","0");
        		}else{
        			if(this.ds_basicInfo.getColumn(0,"ENT_PRG_STSC") == "4"){
        				this.entPrgStsc_temp = "4";  //거절 상태 
        			}
        			this.ds_basicInfo.setColumn(0,"ENT_PRG_STSC","3");
        		}
        		
        		var sParam   = "blChgYn="+this.div_hiddenArea.edt_chgBillingYn.value
        				 + " svcChgYn="+this.div_hiddenArea.edt_chgSvcYn.value
        				 + " authChgYn="+this.div_hiddenArea.edt_chgAuthYn.value
        				 + " entPrgStsc_temp="+this.entPrgStsc_temp
        				 ;
        					   
        		var sSvcID        = "updateMB";
        		var sURL          = "svc::rest/pt/usrinf/updateMB";
        		var sInDatasets   = "ds_basicInfo=ds_basicInfo ds_svcAuth=ds_svcAuth ds_svcInfo=ds_svcInfo ds_payInfo=ds_payInfo ds_branch_bzno=ds_branch_bzno";
        		var sOutDatasets  = "";	
        		var sArgument     = sParam;
        		var sCallbackFunc = "fn_callBack";				
        		var sTranType     = "U"; // U:저장/삭제, S:조회	 			
        	
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        /*******************************************************************************************************************
         거래처코드에 해당하는 빌링, 세금계산서 권한조회
        ********************************************************************************************************************/
        this.fn_retrieveNaTrplCAuthLst = function()
        {
        	var param 		  = "naTrplC="+this.Div05.edt_NA_TRPL_C.value;
        	var sSvcID        = "retrieveNaTrplCAuthLst";
        	var sURL          = "svc::rest/pt/usrinf/retrieveNaTrplCAuthLst";	
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
        this.fn_validationCheck = function(){
        	
        	if(this.ds_basicInfo.getColumn(0,"ENT_PRG_STSC") == "3"){
        		alert("수정요청 진행중 입니다. 회원정보 변경을 하실 수 없습니다.");
        		return false;
        	}
        	
        	if(this.gfn_isNull(this.Div05.edt_USR_NM.value)){
        		alert("사용자명을 입력 하세요.");	
        		this.Div05.edt_USR_NM.setFocus();
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
        	if(!this.gfn_isDate(this.Div05.edt_BIRTH.value)){
        		alert("회원정보의 생년월일 형식이 잘못되었습니다.");
        		return false;
        	}	
        	if(!this.gfn_checkEmail(this.Div05.edt_USR_EMAIL01.value+"@"+this.Div05.edt_USR_EMAIL02.value)){
        		alert("이메일형식이 잘못되었습니다.");
        		return false;
        	}
        	
        // 	if(this.ds_basicInfo.getOrgColumn(0,"USR_MPNO01") != this.Div05.cbo_HP.value || this.ds_basicInfo.getOrgColumn(0,"USR_MPNO02") != this.Div05.edt_HP01.value || this.ds_basicInfo.getOrgColumn(0,"USR_MPNO03") != this.Div05.edt_HP02.value){
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
        		
        	/*권한조회 API호출*/
        	this.fn_retrieveNaTrplCAuthLst();
        	
        	return true;
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
        			case "setPayInfo":
        				/*현재상태 가입거절 => 등록중*/				
        				if(this.ds_basicInfo.getColumn(0,"ENT_PRG_STSC") == "2"){
        					this.ds_basicInfo.setColumn(0,"ENT_PRG_STSC","0");

        				}else{
        				/*현재상태 수정요청거절 및 완료 => 수정요청*/		

        					if(this.ds_basicInfo.getColumn(0,"ENT_PRG_STSC") == "4"){
        						this.entPrgStsc_temp = "4";  //거절 상태 
        					}
        					this.ds_basicInfo.setColumn(0,"ENT_PRG_STSC","3");
        				}
        				
        				var sParam   = "blChgYn="+this.div_hiddenArea.edt_chgBillingYn.value
        							 + " svcChgYn="+this.div_hiddenArea.edt_chgSvcYn.value
        							 + " authChgYn="+this.div_hiddenArea.edt_chgAuthYn.value
        							 + " entPrgStsc_temp="+this.entPrgStsc_temp
        							 ;
        								   
        				var sSvcID        = "updateMB";
        				var sURL          = "svc::rest/pt/usrinf/updateMB";
        				var sInDatasets   = "ds_basicInfo=ds_basicInfo ds_svcAuth=ds_svcAuth ds_svcInfo=ds_svcInfo ds_payInfo=ds_payInfo ds_branch_bzno=ds_branch_bzno";
        				var sOutDatasets  = "";	
        				var sArgument     = sParam;
        				var sCallbackFunc = "fn_callBack";				
        				var sTranType     = "U"; // U:저장/삭제, S:조회	 			
        				
        				this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);		
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
        		this.div_hiddenArea.edt_chgSvcYn.set_value("Y");
        	}else{
        		this.div_hiddenArea.edt_chgSvcYn.set_value("N");
        	}	
        }

        /*******************************************************************************************************************
         callback메소드
        ********************************************************************************************************************/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	
        	if(ErrorCode < 0 ){
        		if(svcID == "checkMBPW"){
        			if(ErrorCode == -2){
        				alert(" 비밀번호를 다시 확인하세요. \n 비밀번호를 잘못입력 하셨습니다.");
        			}else{
        				this.gfn_getMessage("alert", "error.message.server.exception");
        			}
        		}else{
        			this.gfn_getMessage("alert", "error.message.server.exception");
        		}			
        	}else{
        		if(svcID=="retrieveMB"){	
        			this.ds_payInfo.addColumn("ACNO_B", "string");
        			if(this.ds_basicInfo.getColumn(0,"ENT_PRG_STSC") =="2" || this.ds_basicInfo.getColumn(0,"ENT_PRG_STSC") =="4"){				
        				this.Div05.Div02.sta_ENT_PRG_CNTN.set_text("<fc v='red'>[가입처리내용] "+this.ds_basicInfo.getColumn(0,"ENT_PRG_CNTN")+"</fc>");				
        				this.Div05.Div02.sta_ENT_PRG_CNTN.set_visible(true);
        			}else{
        				this.Div05.Div02.sta_ENT_PRG_CNTN.set_visible(false);
        			}
        			
        			if(this.ds_basicInfo.rowcount >0){
        				if(this.ds_basicInfo.getColumn(0,"NA_MBCO_DSC" ) != "1" ){
        					this.Div05.edt_B_BZN01.set_visible(true);
        					this.Div05.edt_B_BZN02.set_visible(true);
        					this.Div05.edt_B_BZN03.set_visible(true);
        					this.Div05.Static14.set_visible(true);
        					this.Div05.Static02.set_visible(true);
        					this.Div05.Static13.set_visible(true);
        				}
        		    }
        		    			
        			/*납부정보가 있을경우*/
        			this.ds_payInfo.addRow();
        		}else if(svcID == "retrieveNaTrplCAuthLst" ){
        			
        		}else if(svcID == "updateMB"){
        			alert("정상 신청 되었습니다.");						
        			if(this.getOwnerFrame().paramMode == "Y"){
        				this.close();			
        			}else{
        				this.fn_retriveUsrInfo();	
        				this.resetScroll();			
        			}
        		}else if(svcID == "checkMBPW"){				
        			/*권한 및 서비스 초기화*/
        			this.Div01.set_visible(false);
        			this.Div05.set_visible(true);
        			
        			//회원정보 호출
        			this.fn_retriveUsrInfo();	
        			this.resetScroll();
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

        
        this.Div01_edt_pw_onkeydown = function(obj,e)
        {
        	if(e.keycode == '13')
        	{
        		this.Div01.Div02.btn_confirm.click();
        	}
        	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Div05.Div02.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.Div05.Static03.addEventHandler("onclick", this.Div05_Static03_onclick, this);
            this.Div05.Static10.addEventHandler("onclick", this.Div05_Static03_onclick, this);
            this.Div05.rdo_SEX_DSC.addEventHandler("onitemclick", this.Radio00_onitemclick, this);
            this.Div01.Div02.btn_confirm.addEventHandler("onclick", this.Div01_Div02_btn_confirm_onclick, this);
            this.Div01.edt_pw.addEventHandler("onkeydown", this.Div01_edt_pw_onkeydown, this);

        };

        this.loadIncludeScript("OMG_DS_SC_5171.xfdl", true);

       
    };
}
)();
