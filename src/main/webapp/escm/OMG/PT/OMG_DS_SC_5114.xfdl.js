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
                this.set_titletext("협력업체회원정보변경");
                this._setFormPosition(0,0,750,1095);
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
            obj._setContents("<ColumnInfo><Column id=\"BZNO1\" type=\"STRING\" size=\"30\"/><Column id=\"BZNO2\" type=\"STRING\" size=\"30\"/><Column id=\"BZNO3\" type=\"STRING\" size=\"30\"/><Column id=\"BRC_BZNO1\" type=\"STRING\" size=\"256\"/><Column id=\"BRC_BZNO2\" type=\"STRING\" size=\"256\"/><Column id=\"BRC_BZNO3\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"30\"/><Column id=\"COMP_TPC\" type=\"STRING\" size=\"30\"/><Column id=\"MB_ID\" type=\"STRING\" size=\"30\"/><Column id=\"MB_PW\" type=\"STRING\" size=\"256\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"30\"/><Column id=\"USR_TELNO\" type=\"STRING\" size=\"30\"/><Column id=\"USR_EMAIL01\" type=\"STRING\" size=\"30\"/><Column id=\"USR_EMAIL02\" type=\"STRING\" size=\"30\"/><Column id=\"SMS_RMS_YN\" type=\"STRING\" size=\"30\"/><Column id=\"EMAIL_RMS_YN\" type=\"STRING\" size=\"30\"/><Column id=\"USR_HP\" type=\"STRING\" size=\"30\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"30\"/><Column id=\"REPMNM\" type=\"STRING\" size=\"30\"/><Column id=\"DONGUP\" type=\"STRING\" size=\"30\"/><Column id=\"DONGBW\" type=\"STRING\" size=\"30\"/><Column id=\"FZIP\" type=\"STRING\" size=\"30\"/><Column id=\"RZIP\" type=\"STRING\" size=\"30\"/><Column id=\"ATEL\" type=\"STRING\" size=\"30\"/><Column id=\"HTEL\" type=\"STRING\" size=\"30\"/><Column id=\"STEL\" type=\"STRING\" size=\"30\"/><Column id=\"USR_MPNO01\" type=\"STRING\" size=\"30\"/><Column id=\"USR_MPNO02\" type=\"STRING\" size=\"30\"/><Column id=\"USR_MPNO03\" type=\"STRING\" size=\"30\"/><Column id=\"BIRTH\" type=\"STRING\" size=\"30\"/><Column id=\"SEX_DSC\" type=\"STRING\" size=\"30\"/><Column id=\"USR_TPC\" type=\"STRING\" size=\"30\"/><Column id=\"CHRG_BSNNM\" type=\"STRING\" size=\"256\"/><Column id=\"ENT_PRG_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"ENT_PRG_STSC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"USR_AUTH_DSC\" type=\"STRING\" size=\"128\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ENT_PRG_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"RQ_DSC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"32\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"32\"/><Column id=\"FILESIZE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"32\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"32\"/><Column id=\"SEAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("Static87", "absolute", "728", "1", "17", "1293", null, null, this);
            obj.set_taborder("2");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_hiddenArea", "absolute", "786", "537", "484", "453", null, null, this);
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
            obj.set_value("01");
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

            obj = new Div("Div05", "absolute", "17", "16", "711", "1485", null, null, this);
            obj.set_taborder("5");
            obj.set_text("Div01");
            obj.style.set_background("transparent");
            obj.set_scrollbars("autovert");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Static("Static118", "absolute", "0", "560", "711", "58", null, null, this.Div05);
            obj.set_taborder("202");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static120", "absolute", "0", "412", "711", "29", null, null, this.Div05);
            obj.set_taborder("154");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static124", "absolute", "0", "484", "711", "29", null, null, this.Div05);
            obj.set_taborder("120");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static91", "absolute", "0", "87", "711", "29", null, null, this.Div05);
            obj.set_taborder("121");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new CheckBox("chk_CONTRACT_AUTH", "absolute", "201", "488", "90", "21", null, null, this.Div05);
            obj.set_taborder("122");
            obj.set_text("전자계약");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
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
            obj.set_text("업체유형");
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
            obj = new Radio("rdo_COMP_TPC", "absolute", "478", "176", "215", "21", null, null, this.Div05);
            this.Div05.addChild(obj.name, obj);
            var rdo_COMP_TPC_innerdataset = new Dataset("rdo_COMP_TPC_innerdataset", this.Div05.rdo_COMP_TPC);
            rdo_COMP_TPC_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1010</Col><Col id=\"datacolumn\">공급업체</Col></Row><Row><Col id=\"codecolumn\">1020</Col><Col id=\"datacolumn\">쿠폰관리</Col></Row><Row><Col id=\"codecolumn\">1030</Col><Col id=\"datacolumn\">위탁업체</Col></Row></Rows>");
            obj.set_innerdataset(rdo_COMP_TPC_innerdataset);
            obj.set_taborder("146");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
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
            obj = new Static("Static121", "absolute", "0", "460", "135", "21", null, null, this.Div05);
            obj.set_taborder("159");
            obj.set_text("권한 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.Div05.addChild(obj.name, obj);
            obj = new CheckBox("chk_TAX_AUTH", "absolute", "304", "488", "90", "21", null, null, this.Div05);
            obj.set_taborder("160");
            obj.set_text("세금계산서");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.Div05.addChild(obj.name, obj);
            obj = new CheckBox("chk_BILLING_AUTH", "absolute", "125", "488", "58", "21", null, null, this.Div05);
            obj.set_taborder("161");
            obj.set_text("빌링");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_confirmCertificate", "absolute", "123", "593", "89", "21", null, null, this.Div05);
            obj.set_taborder("163");
            obj.set_inputtype("number");
            obj.set_maxlength("6");
            obj.set_visible("false");
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
            obj = new Button("btn_sendSms", "absolute", "123", "566", "89", "21", null, null, this.Div05);
            obj.set_taborder("188");
            obj.set_text("인증번호생성");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "223", "566", "297", "21", null, null, this.Div05);
            obj.set_taborder("189");
            obj.set_text("인증번호를 생성하여 등록된 휴대폰으로 전송합니다.");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Button("btn_certificate", "absolute", "221", "593", "41", "21", null, null, this.Div05);
            obj.set_taborder("190");
            obj.set_text("인증");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_CLNTNM", "absolute", "123", "119", "180", "21", null, null, this.Div05);
            obj.set_taborder("191");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "0", "484", "120", "29", null, null, this.Div05);
            obj.set_taborder("192");
            obj.set_text("회원권한");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Div("Div03", "absolute", "0", "642", "719", "835", null, null, this.Div05);
            obj.set_taborder("194");
            obj.style.set_background("transparent");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static40", "absolute", "0", "137", null, "29", "8", null, this.Div05.Div03);
            obj.set_taborder("310");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0", "109", null, "29", "8", null, this.Div05.Div03);
            obj.set_taborder("212");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static121", "absolute", "0", "0", "135", "21", null, null, this.Div05.Div03);
            obj.set_taborder("213");
            obj.set_text("서비스 이용");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static124", "absolute", "0", "24", "711", "58", null, null, this.Div05.Div03);
            obj.set_taborder("214");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "81", "711", "29", null, null, this.Div05.Div03);
            obj.set_taborder("215");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static123", "absolute", "0", "24", "120", "58", null, null, this.Div05.Div03);
            obj.set_taborder("216");
            obj.set_text("기본서비스 이용");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "81", "120", "29", null, null, this.Div05.Div03);
            obj.set_taborder("217");
            obj.set_text("부가정보 이용");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "109", "120", "29", null, null, this.Div05.Div03);
            obj.set_taborder("218");
            obj.set_text("정보분석 이용");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "123", "30", "537", "46", null, null, this.Div05.Div03);
            obj.set_taborder("219");
            obj.set_text("SCM업무, EDI서비스, 세금계산서는 기본서비스로 제공됩니다. \r\nEDI서비스, SCM업무는 이용량(KB)에 따라 청구됩니다. 상세정보는 <fc v='blue'>서비스이용료</fc>를 참조바랍니다.");
            obj.set_usedecorate("true");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Radio("rdo_SVC_ID", "absolute", "125", "86", "177", "21", null, null, this.Div05.Div03);
            this.Div05.Div03.addChild(obj.name, obj);
            var rdo_SVC_ID_innerdataset = new Dataset("rdo_SVC_ID_innerdataset", this.Div05.Div03.rdo_SVC_ID);
            rdo_SVC_ID_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">22</Col><Col id=\"datacolumn\">종량제</Col></Row><Row><Col id=\"codecolumn\">21</Col><Col id=\"datacolumn\">정액제</Col></Row></Rows>");
            obj.set_innerdataset(rdo_SVC_ID_innerdataset);
            obj.set_taborder("221");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj = new CheckBox("cbk_SVC31", "absolute", "125", "114", "58", "21", null, null, this.Div05.Div03);
            obj.set_taborder("222");
            obj.set_text("BI조회");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_enable("true");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new CheckBox("cbk_SVC32", "absolute", "198", "114", "74", "21", null, null, this.Div05.Div03);
            obj.set_taborder("223");
            obj.set_text("추이분석");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new CheckBox("cbk_SVC33", "absolute", "284", "114", "112", "21", null, null, this.Div05.Div03);
            obj.set_taborder("224");
            obj.set_text("시장분석(자사)");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new CheckBox("cbk_SVC34", "absolute", "405", "114", "132", "21", null, null, this.Div05.Div03);
            obj.set_taborder("225");
            obj.set_text("카테고리 시장분석");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "0", "596", "711", "29", null, null, this.Div05.Div03);
            obj.set_taborder("226");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "0", "624", "711", "29", null, null, this.Div05.Div03);
            obj.set_taborder("227");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static110", "absolute", "0", "652", "711", "29", null, null, this.Div05.Div03);
            obj.set_taborder("228");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "0", "573", "135", "21", null, null, this.Div05.Div03);
            obj.set_taborder("229");
            obj.set_text("납부 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "0", "680", "711", "29", null, null, this.Div05.Div03);
            obj.set_taborder("230");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static111", "absolute", "336", "652", "135", "29", null, null, this.Div05.Div03);
            obj.set_taborder("231");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "336", "680", "135", "29", null, null, this.Div05.Div03);
            obj.set_taborder("232");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "0", "708", "711", "58", null, null, this.Div05.Div03);
            obj.set_taborder("234");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "0", "707", "120", "58", null, null, this.Div05.Div03);
            obj.set_taborder("236");
            obj.set_text("통장사본");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "0", "596", "120", "29", null, null, this.Div05.Div03);
            obj.set_taborder("240");
            obj.set_text("결제방식");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "0", "624", "120", "29", null, null, this.Div05.Div03);
            obj.set_taborder("241");
            obj.set_text("희망출금일");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static109", "absolute", "0", "652", "120", "29", null, null, this.Div05.Div03);
            obj.set_taborder("242");
            obj.set_text("예금주");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static23", "absolute", "0", "680", "120", "29", null, null, this.Div05.Div03);
            obj.set_taborder("243");
            obj.set_text("거래은행");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Radio("rdo_STL_METH_DSC", "absolute", "125", "601", "440", "21", null, null, this.Div05.Div03);
            this.Div05.Div03.addChild(obj.name, obj);
            var rdo_STL_METH_DSC_innerdataset = new Dataset("rdo_STL_METH_DSC_innerdataset", this.Div05.Div03.rdo_STL_METH_DSC);
            rdo_STL_METH_DSC_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">농협자동이체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">자동이체</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">가상계좌</Col></Row></Rows>");
            obj.set_innerdataset(rdo_STL_METH_DSC_innerdataset);
            obj.set_taborder("244");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj = new Radio("rdo_HOP_DRW_DD", "absolute", "125", "629", "295", "21", null, null, this.Div05.Div03);
            this.Div05.Div03.addChild(obj.name, obj);
            var rdo_HOP_DRW_DD_innerdataset = new Dataset("rdo_HOP_DRW_DD_innerdataset", this.Div05.Div03.rdo_HOP_DRW_DD);
            rdo_HOP_DRW_DD_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">15</Col><Col id=\"datacolumn\">15일</Col></Row><Row><Col id=\"codecolumn\">25</Col><Col id=\"datacolumn\">25일</Col></Row></Rows>");
            obj.set_innerdataset(rdo_HOP_DRW_DD_innerdataset);
            obj.set_taborder("245");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj = new Edit("edt_DPRNM", "absolute", "123", "656", "89", "21", null, null, this.Div05.Div03);
            obj.set_taborder("246");
            obj.set_maxlength("100");
            obj.set_lengthunit("utf8");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Edit("edt_AC_NO", "absolute", "474", "684", "180", "21", null, null, this.Div05.Div03);
            obj.set_taborder("248");
            obj.set_inputtype("number");
            obj.set_maxlength("15");
            obj.set_inputfilter("dot,comma,sign,symbol,alpha,space");
            obj.set_lengthunit("utf8");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Combo("cbo_BNK_C", "absolute", "123", "684", "210", "21", null, null, this.Div05.Div03);
            this.Div05.Div03.addChild(obj.name, obj);
            obj.set_taborder("249");
            obj.set_innerdataset("@ds_bankCode");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj = new FileUpload("FileUpload", "absolute", "121", "739", "585", "24", null, null, this.Div05.Div03);
            obj.set_taborder("253");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static122", "absolute", "0", "283", "717", "20", null, null, this.Div05.Div03);
            obj.set_taborder("255");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new MaskEdit("mae_BZNO", "absolute", "474", "656", "90", "21", null, null, this.Div05.Div03);
            obj.set_taborder("258");
            obj.set_type("string");
            obj.set_mask("###-##-#####");
            obj.set_visible("false");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "0", "764", "120", "58", null, null, this.Div05.Div03);
            obj.set_taborder("260");
            obj.set_text("예금주의\r\n출금이체동의서");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0", "764", "711", "58", null, null, this.Div05.Div03);
            obj.set_taborder("262");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "0", "764", "120", "58", null, null, this.Div05.Div03);
            obj.set_taborder("239");
            obj.set_text("사업자등록증 사본");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new FileUpload("FileUpload00", "absolute", "121", "796", "585", "24", null, null, this.Div05.Div03);
            obj.set_taborder("263");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("exist_BB_FLNM", "absolute", "125", "713", "577", "19", null, null, this.Div05.Div03);
            obj.set_taborder("264");
            obj.set_text("통장사본이 존재하지 않습니다.");
            obj.style.set_cursor("hand");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("exist_BZ_RGWRRT_FLNM", "absolute", "125", "770", "577", "19", null, null, this.Div05.Div03);
            obj.set_taborder("265");
            obj.set_text("사업자등록증 사본이 존재하지 않습니다.");
            obj.style.set_cursor("hand");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Radio("rdo_PSCRP_DSC", "absolute", "226", "658", "94", "21", null, null, this.Div05.Div03);
            this.Div05.Div03.addChild(obj.name, obj);
            var rdo_PSCRP_DSC_innerdataset = new Dataset("rdo_PSCRP_DSC_innerdataset", this.Div05.Div03.rdo_PSCRP_DSC);
            rdo_PSCRP_DSC_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">개인</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">법인</Col></Row></Rows>");
            obj.set_innerdataset(rdo_PSCRP_DSC_innerdataset);
            obj.set_taborder("267");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj = new Calendar("mae_BIRTH", "absolute", "474", "656", "110", "21", null, null, this.Div05.Div03);
            this.Div05.Div03.addChild(obj.name, obj);
            obj.set_taborder("268");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static16", "absolute", "1", "327", "110", "29", null, null, this.Div05.Div03);
            obj.set_taborder("269");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("sta_CLNTNM", "absolute", "110", "327", null, "29", "8", null, this.Div05.Div03);
            obj.set_taborder("270");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static24", "absolute", "1", "355", "110", "29", null, null, this.Div05.Div03);
            obj.set_taborder("271");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static25", "absolute", "110", "355", null, "29", "8", null, this.Div05.Div03);
            obj.set_taborder("272");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Edit("edt_B_BZN01_C", "absolute", "115", "359", "40", "21", null, null, this.Div05.Div03);
            obj.set_taborder("273");
            obj.set_inputtype("digit");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("3");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Edit("edt_B_BZN02_C", "absolute", "169", "359", "30", "21", null, null, this.Div05.Div03);
            obj.set_taborder("274");
            obj.set_inputtype("digit");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("2");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Edit("edt_B_BZN03_C", "absolute", "211", "359", "65", "21", null, null, this.Div05.Div03);
            obj.set_taborder("275");
            obj.set_inputtype("digit");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("5");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static26", "absolute", "157", "359", "9", "21", null, null, this.Div05.Div03);
            obj.set_taborder("276");
            obj.set_text("-");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static27", "absolute", "200", "359", "9", "21", null, null, this.Div05.Div03);
            obj.set_taborder("277");
            obj.set_text("-");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static28", "absolute", "1", "383", "110", "29", null, null, this.Div05.Div03);
            obj.set_taborder("278");
            obj.set_text("대표자명");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static29", "absolute", "110", "383", null, "29", "8", null, this.Div05.Div03);
            obj.set_taborder("279");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Edit("edt_REPMNM_C", "absolute", "115", "387", "180", "21", null, null, this.Div05.Div03);
            obj.set_taborder("280");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static30", "absolute", "1", "411", "110", "29", null, null, this.Div05.Div03);
            obj.set_taborder("281");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static31", "absolute", "110", "411", null, "29", "8", null, this.Div05.Div03);
            obj.set_taborder("282");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Edit("edt_ZIP_C", "absolute", "115", "415", "70", "21", null, null, this.Div05.Div03);
            obj.set_taborder("283");
            obj.set_inputtype("digit");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("6");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static32", "absolute", "1", "439", "110", "58", null, null, this.Div05.Div03);
            obj.set_taborder("284");
            obj.set_text("회사주소");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static33", "absolute", "110", "439", null, "58", "8", null, this.Div05.Div03);
            obj.set_taborder("285");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Edit("edt_DONGUP_C", "absolute", "115", "444", null, "21", "14", null, this.Div05.Div03);
            obj.set_taborder("286");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("300");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Edit("edt_DONGBW_C", "absolute", "115", "470", null, "21", "14", null, this.Div05.Div03);
            obj.set_taborder("287");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("100");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static34", "absolute", "1", "496", "110", "29", null, null, this.Div05.Div03);
            obj.set_taborder("288");
            obj.set_text("업태");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static35", "absolute", "110", "496", null, "29", "8", null, this.Div05.Div03);
            obj.set_taborder("289");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Edit("edt_BZTPNM_C", "absolute", "115", "500", null, "21", "14", null, this.Div05.Div03);
            obj.set_taborder("290");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static36", "absolute", "1", "524", "110", "29", null, null, this.Div05.Div03);
            obj.set_taborder("291");
            obj.set_text("종목");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static37", "absolute", "110", "524", null, "29", "8", null, this.Div05.Div03);
            obj.set_taborder("292");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Edit("edt_BZCCNM_C", "absolute", "115", "528", null, "21", "14", null, this.Div05.Div03);
            obj.set_taborder("293");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("60");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static38", "absolute", "32.68%", "415", null, "21", "49.51%", null, this.Div05.Div03);
            obj.set_taborder("294");
            obj.set_text("('-' 제외)");
            obj.style.set_color("gray");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Edit("edt_REPMNM00_C", "absolute", "115", "331", "180", "21", null, null, this.Div05.Div03);
            obj.set_taborder("295");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "-1", "553", "717", "20", null, null, this.Div05.Div03);
            obj.set_taborder("296");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "1", "303", "135", "21", null, null, this.Div05.Div03);
            obj.set_taborder("297");
            obj.set_text("청구 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "0", "166", "717", "20", null, null, this.Div05.Div03);
            obj.set_taborder("299");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "0", "186", "155", "21", null, null, this.Div05.Div03);
            obj.set_taborder("300");
            obj.set_text("자사판매정보 제공동의");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static39", "absolute", "0", "209", null, "74", "8", null, this.Div05.Div03);
            obj.set_taborder("302");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("sta_contents02", "absolute", "12", "212", "634", "21", null, null, this.Div05.Div03);
            obj.set_taborder("303");
            obj.set_text("판매상세정보를 이용하기 위해서는 자사판매정보 제공동의를 체크하셔야 이용이 가능합니다.");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("sta_contents03", "absolute", "20", "258", "634", "21", null, null, this.Div05.Div03);
            obj.set_taborder("304");
            obj.set_text("※ 제공동의 체크시 과금은 발생하지 않으며, 서비스 이용시(엑셀 다운로드) 과금이 SKU당 1,500원/월 부과됩니다.");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new CheckBox("cbk_SVC35", "absolute", "21", "235", "160", "21", null, null, this.Div05.Div03);
            obj.set_taborder("298");
            obj.set_text("자사판매정보 제공동의");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static41", "absolute", "367", "355", "126", "29", null, null, this.Div05.Div03);
            obj.set_taborder("305");
            obj.set_text("종사업자번호(선택)");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Edit("edt_TX_BZN", "absolute", "497", "359", "65", "21", null, null, this.Div05.Div03);
            obj.set_taborder("306");
            obj.set_inputtype("digit");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("4");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new CheckBox("cbk_SVC36", "absolute", "555", "114", "132", "21", null, null, this.Div05.Div03);
            obj.set_taborder("307");
            obj.set_text("신규통계서비스");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_visible("false");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new CheckBox("cbk_SVC38", "absolute", "125", "141", "98", "21", null, null, this.Div05.Div03);
            obj.set_taborder("308");
            obj.set_text("마감간소화");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Static("Static19", "absolute", "0", "137", "120", "29", null, null, this.Div05.Div03);
            obj.set_taborder("309");
            obj.set_text("마감서비스");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Button("btn_info", "absolute", "613", "30", "91", "21", null, null, this.Div05.Div03);
            obj.set_taborder("311");
            obj.set_text("이용료 안내");
            this.Div05.Div03.addChild(obj.name, obj);
            obj = new Button("btn_info2", "absolute", "219", "141", "70", "21", null, null, this.Div05.Div03);
            obj.set_taborder("312");
            obj.set_text("약관보기");
            this.Div05.Div03.addChild(obj.name, obj);
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
            obj = new Static("Static138", "absolute", "1", "521", "447", "21", null, null, this.Div05);
            obj.set_taborder("200");
            obj.set_text("* 업무시간외 회원가입시 익일 업무처리가 됩니다.");
            obj.set_cssclass("sta_WF_DescriptionE02");
            obj.style.set_padding("2 0 0 3");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "0", "560", "120", "58", null, null, this.Div05);
            obj.set_taborder("187");
            obj.set_text("휴대전화인증");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("false");
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
            obj = new Button("btn_pay_rep", "absolute", "511", "10", "150", "21", null, null, this.Div05);
            obj.set_taborder("212");
            obj.set_text("가상계좌 발급확인서 출력");
            obj.set_cssclass("btn_WF_CRUD");
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
            obj = new Layout("default", "", 719, 835, this.Div05.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("194");
            		p.style.set_background("transparent");
            		p.set_visible("false");

            	}
            );
            this.Div05.Div03.addLayout(obj.name, obj);

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
            obj = new Layout("default", "", 750, 1095, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("협력업체회원정보변경");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item32","Div05.Div03.mae_BZNO","visible","ds_payInfo","DPR_NO");
            this.addChild(obj.name, obj);
            obj.bind();
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
            obj = new BindItem("item6","Div05.rdo_COMP_TPC","value","ds_basicInfo","COMP_TPC");
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
            obj = new BindItem("item13","Div05.Div03.rdo_STL_METH_DSC","value","ds_payInfo","STL_METH_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","Div05.Div03.rdo_HOP_DRW_DD","value","ds_payInfo","HOP_DRW_DD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","Div05.Div03.edt_DPRNM","value","ds_payInfo","DPRNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","Div05.Div03.cbo_BNK_C","value","ds_payInfo","BNK_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","Div05.Div03.edt_AC_NO","value","ds_payInfo","ACNO");
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
            obj = new BindItem("item16","Div05.Div03.rdo_PSCRP_DSC","value","ds_payInfo","PSCRP_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","Div05.Div03.mae_BIRTH","value","ds_payInfo","DPR_NO");
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
            obj = new BindItem("item38","Div05.Div03.mae_BZNO","value","ds_payInfo","DPR_NO");
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
            obj = new BindItem("item39","Div05.Div03.edt_REPMNM00_C","value","ds_branch_bzno","CLNTNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","Div05.Div03.edt_TX_BZN","value","ds_branch_bzno","TX_REG");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_5114.xfdl", "lib::comLib.xjs");
        this.addIncludeScript("OMG_DS_SC_5114.xfdl", "lib::comTSToolKit.xjs");
        this.registerScript("OMG_DS_SC_5114.xfdl", function() {
        //include "lib::comLib.xjs";
        //include "lib::comTSToolKit.xjs";
        /*******************************************************************
        	전역변수 선언
        	orgAcNo  : DB에 등록된 계좌번호
        	vrtlAcNo : 가상계좌번호

        *******************************************************************/
        this.orgAcNo = "";
        this.orgDpNo = "";
        this.vrtlAcNo = "";
        this.entPrgStsc_temp ="";

        var nBasicBottom = nexacro.toNumber(this.Div05.Static124.top) + nexacro.toNumber(this.Div05.Static124.height);

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
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

        	this.Div01.mb_id.set_text("  " + application.gv_userId);
        	this.Div01.set_left(17);
        	this.Div01.set_visible(true); // 비밀번호 재확인
        	this.Div05.set_visible(false);
        	this.Div05.set_height(nexacro.toNumber(this.Div05.Static138.top) + nexacro.toNumber(this.Div05.Static138.height) + 15);

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
        this.fn_retriveUsrInfo = function () {

        	var sSvcID        = "retrieveMB";
        	var sURL          = "svc::rest/pt/usrinf/retrieveMB"
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_basicInfo=ds_basicInfo ds_naTrplCAuth=ds_naTrplCAuth ds_usrAuth=ds_usrAuth ds_entSvc=ds_entSvc ds_payInfo=ds_payInfo ds_naTrplCAuthIng=ds_naTrplCAuthIng ds_branch_bzno=ds_branch_bzno";
        	var sArgument     =  "mbPw="+this.Div01.edt_pw.value;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        
        /*******************************************************************************************************************
         회원 재 확인
        ********************************************************************************************************************/
        this.Div01_Div02_btn_confirm_onclick = function(obj,e)
        {

        	if (this.gfn_isNull(this.Div01.edt_pw.value)) {
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
        	if (this.fn_validationCheck()) {
        		this.ds_basicInfo.setColumn(0,"USR_TPC",this.div_hiddenArea.edt_USR_TPC.value);

        		/*수신MSS/EMAIL 사용여부*/
        		if (this.gfn_isNull(this.Div05.chk_SMS_YN.value)) {
        			this.ds_basicInfo.setColumn(0,"SMS_RMS_YN", "N");
        		}
        		if (this.gfn_isNull(this.Div05.chk_MAIL_YN.value)) {
        			this.ds_basicInfo.setColumn(0,"EMAIL_RMS_YN", "N");
        		}

        		if (this.Div05.chk_BILLING_AUTH.value =="Y") {
        			if (this.Div05.Div03.rdo_PSCRP_DSC.value=="1") {
        				this.ds_payInfo.setColumn(0,"DPR_NO",this.Div05.Div03.mae_BIRTH.value);
        			} else if (this.Div05.Div03.rdo_PSCRP_DSC.value=="2") {
        				this.ds_payInfo.setColumn(0,"DPR_NO",this.Div05.Div03.mae_BZNO.value);
        			}
        		}
        		
        		this.fn_setSvcAuth(); /*사용자권한 세팅*/
        		this.fn_setSvcInfo(); /*서비스정보 세팅*/

        		//this.alert("this.Div05.chk_BILLING_AUTH.value="+this.Div05.chk_BILLING_AUTH.value);
        		if (this.Div05.chk_BILLING_AUTH.value == "Y") {
        			var BZNO = this.Div05.Div03.edt_B_BZN01_C.value + this.Div05.Div03.edt_B_BZN02_C.value + this.Div05.Div03.edt_B_BZN03_C.value;
        			this.ds_branch_bzno.setColumn(0, "BZNO", BZNO); // set Dataset

        			if (this.ds_basicInfo.getColumn(0, "NA_MBCO_DSC") == "1") {
        				this.fn_setPayInfo();
        			} else if (this.ds_basicInfo.getColumn(0, "NA_MBCO_DSC") != "1") {
        				var isChange = this.fn_changePayInf();
        				if (this.fn_BZNOCheck()) {
        					 if (isChange || this.gfn_isNull(this.ds_payInfo.getColumn(0, "ELSG_CNTN"))) {
        						this.div_hiddenArea.edt_chgBillingYn.set_value("Y");
        						if (this.Div05.Div03.rdo_STL_METH_DSC.value == '3') {
        							/*현재상태 가입거절 => 등록중*/
        							if (this.ds_basicInfo.getColumn(0, "ENT_PRG_STSC") == "2") {
        								this.ds_basicInfo.setColumn(0, "ENT_PRG_STSC", "0");
        							} else {
        								/*현재상태 수정요청거절 및 완료 => 수정요청*/
        								if (this.ds_basicInfo.getColumn(0,"ENT_PRG_STSC") == "4") {
        									this.entPrgStsc_temp = "4";  //거절 상태
        								}
        								this.ds_basicInfo.setColumn(0,"ENT_PRG_STSC", "3");
        							}

        							if (this.gfn_isNull(this.ds_payInfo.getColumn(0, "ACNO"))) {
        								this.Div05.Div03.edt_AC_NO.updateToDataset();
        							}

        							if (this.ds_payInfo.getColumn(0, "STL_METH_DSC") != '3') {
        								if (this.gfn_isNull(this.ds_payInfo.getColumn(0, "DPR_NO"))) {
        									if (this.Div05.Div03.rdo_PSCRP_DSC.value == "1") {
        										this.Div05.Div03.mae_BIRTH.updateToDataset();
        									} else if (this.Div05.Div03.rdo_PSCRP_DSC.value == "2") {
        										this.Div05.Div03.mae_BZNO.updateToDataset();
        									}
        								}
        							}

        							var Acno1 = this.Div05.Div03.edt_AC_NO.value;
        							var Acno2 = this.ds_payInfo.getColumn(0, "ACNO");

        							var sParam   = "blChgYn="+this.div_hiddenArea.edt_chgBillingYn.value
        										 + " svcChgYn="+this.div_hiddenArea.edt_chgSvcYn.value
        										 + " authChgYn="+this.div_hiddenArea.edt_chgAuthYn.value
        										 + " entPrgStsc_temp="+this.entPrgStsc_temp
        										 + " Acno1="+Acno1
        										 + " Acno2="+Acno2
        										 ;

        							var sSvcID        = "updateMB";
        							var sURL          = "svc::rest/pt/usrinf/updateMB";
        							var sInDatasets   = "ds_basicInfo=ds_basicInfo ds_svcAuth=ds_svcAuth ds_svcInfo=ds_svcInfo ds_payInfo=ds_payInfo ds_branch_bzno=ds_branch_bzno";
        							var sOutDatasets  = "";
        							var sArgument     = sParam;
        							var sCallbackFunc = "fn_callBack";
        							var sTranType     = "U"; // U:저장/삭제, S:조회

        							this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        							return false;
        						} else {
        							this.fn_setPayInfoForJoin();
        						}
        					} else {
        						this.div_hiddenArea.edt_chgBillingYn.set_value("N");
        					}
        				} else {
        					return;
        				}
        			}
        		}

        		if (this.Div05.chk_BILLING_AUTH.value == "N") {
        			if (this.ds_basicInfo.getColumn(0, "ENT_PRG_STSC") == "2") {
        				this.ds_basicInfo.setColumn(0, "ENT_PRG_STSC", "0");
        			} else {
        				if (this.ds_basicInfo.getColumn(0, "ENT_PRG_STSC") == "4") {
        					this.entPrgStsc_temp = "4";  //거절 상태
        				}
        				this.ds_basicInfo.setColumn(0, "ENT_PRG_STSC", "3");
        			}

        			if (this.gfn_isNull(this.ds_payInfo.getColumn(0, "ACNO"))) {
        				this.Div05.Div03.edt_AC_NO.updateToDataset();
        			}

        			var Acno1 = this.Div05.Div03.edt_AC_NO.value;
        			var Acno2 =this.ds_payInfo.getColumn(0, "ACNO");
        			var sParam   = "blChgYn="+this.div_hiddenArea.edt_chgBillingYn.value
                             + " svcChgYn="+this.div_hiddenArea.edt_chgSvcYn.value
                             + " authChgYn="+this.div_hiddenArea.edt_chgAuthYn.value
                             + " entPrgStsc_temp="+this.entPrgStsc_temp
                             + " Acno1="+Acno1
                             + " Acno2="+Acno2
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
         서비스 권한에 따른 이벤트 처리 메소드
        ********************************************************************************************************************/
        this.fn_visibleSvcInfo = function (auth,yn) {

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
         권한에 따른 필수 조건체크
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
        			if (this.Div05.Div03.rdo_PSCRP_DSC.value =="1") {
        				if (this.gfn_isNull(this.Div05.Div03.mae_BIRTH.value)) {
        					alert("납부정보의 예금주 생년월일을 입력 하세요");
        					this.Div05.Div03.mae_BIRTH.setFocus();
        					return false;
        				}

        				if (this.Div05.Div03.mae_BIRTH.text.substring(0,2) == "00") {
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
         권한에 따른 DIV화면 컨트롤
          - 빌링권한을 가지고 있을 경우 선택가능
          - 빌링권한을 가지고 있는 회원이 없고, 진행중인 회원이 없는경우 빌링권한 선택가능
        ********************************************************************************************************************/
        this.CheckBox04_onchanged = function(obj,e)
        {
        	if (this.ds_usrAuth.findRow("USR_AUTH_DSC", "1") >= 0 || (this.ds_naTrplCAuth.findRow("USR_AUTH_DSC", "1") < 0 && this.ds_naTrplCAuthIng.findRow("BILING_ING", "Y") < 0)) {
        		if (e.postvalue == 'Y') {
        			this.Div05.Div03.set_top(nBasicBottom+20)
        			this.Div05.Div03.set_visible(true);
        			var nDiv03Bottom = nexacro.toNumber(this.Div05.Div03.top) + nexacro.toNumber(this.Div05.Div03.height);
        			//맨밑 Static (* 업무시간외 회원가입시 익일 업무처리가 됩니다.)
        			this.Div05.Static138.set_top(nDiv03Bottom);
        			this.Div05.Static138.set_visible(true);
        		} else {
        			alert("빌링 권한을 해지하실 수 없습니다.");
        			this.Div05.chk_BILLING_AUTH.set_value("Y");
        		}
        		this.Div05.set_height(nexacro.toNumber(this.Div05.Static138.top) + nexacro.toNumber(this.Div05.Static138.height) + 15);
        		this.resetScroll();
        	} else {
        		alert("빌링 권한을 선택하실 수 없습니다.");
        		this.Div05.chk_BILLING_AUTH.set_value("N");
        	}
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
        		if (this.ds_naTrplCAuth.findRow("USR_AUTH_DSC", "1") >= 0 && (this.ds_naTrplCAuth.getColumn(this.ds_naTrplCAuth.findRow("USR_AUTH_DSC", "1"),"MB_ID") != this.Div05.edt_MB_ID.value)) {
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
         청구정보 validation 검사
        ********************************************************************************************************************/
        this.fn_saveBranchBzno_validate = function()
        {
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
        	if (this.ds_basicInfo.getColumn(0,"ENT_PRG_STSC") == "3") {
        		alert("수정요청 진행중 입니다. 회원정보 변경을 하실 수 없습니다.");
        		return false;
        	}

        	if (this.gfn_isNull(this.Div05.edt_USR_NM.value)) {
        		alert("사용자명을 입력 하세요.");
        		this.Div05.edt_USR_NM.setFocus();
        		return false;
        	}
        	
        	if (this.gfn_isNull(this.Div05.edt_BIRTH.value)) {
        		alert("생년월일을 입력 하세요 ");
        		this.Div05.edt_BIRTH.setFocus();
        		return false;
        	}

        	if (this.Div05.edt_BIRTH.text.substring(0,2) == "00") {
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

        // 	if (this.ds_basicInfo.getOrgColumn(0,"USR_MPNO01") != this.Div05.cbo_HP.value || this.ds_basicInfo.getOrgColumn(0,"USR_MPNO02") != this.Div05.edt_HP01.value || this.ds_basicInfo.getOrgColumn(0,"USR_MPNO03") != this.Div05.edt_HP02.value) {
        // 		if (this.gfn_isNull(this.Div05.edt_confirmCertificate.value)) {
        // 			alert("인증번호를 입력 하세요.");
        // 			this.Div05.edt_confirmCertificate.setFocus();
        // 			return false;
        // 		}
        // 		if (this.div_hiddenArea.edt_confirm.value != "Y") {
        // 			alert("인증버튼으로 인증번호를 인증 하세요");
        // 			return false;
        // 		}
        // 	}

        	/*권한설정에 따른 이벤트 컨트롤*/
        	if (!this.fn_svcAuthValidation()) {
        		return false;
        	}

        	/*권한조회 API호출*/
        	this.fn_retrieveNaTrplCAuthLst();

        	if (this.Div05.chk_BILLING_AUTH.value == "Y") {
        		this.fn_authValidation();
        	} else {
        		/*빌링권한이 존재하지 않으면서, 진행중인 빌링권한이 없을 경우*/
        		if (this.ds_naTrplCAuth.findRow("USR_AUTH_DSC", "1") < 0 && this.ds_naTrplCAuthIng.findRow("BILING_ING", "Y") < 0) {
        			alert("거래처 번호에 해당하는 빌링 권한을 가진 회원이 없습니다.\n빌링 권한을 선택해주세요.");
        			return false;
        		}
        	}

        	/*권한체크*/
        	if (this.Div05.chk_TAX_AUTH.value == "Y") {
        		if (this.ds_naTrplCAuthIng.findRow("TAX_ING", "Y") >= 0) {
        			alert("세금계산서 권한을 가진 회원이 승인처리 중에 있습니다.\n세금계산서 권한을 선택하실 수 없습니다.");
        			this.Div05.chk_TAX_AUTH.set_value("N");
        			return false;
        		} else if (this.ds_naTrplCAuth.findRow("USR_AUTH_DSC", "3") >= 0 && (this.ds_naTrplCAuth.getColumn(this.ds_naTrplCAuth.findRow("USR_AUTH_DSC", "3"),"MB_ID") != this.Div05.edt_MB_ID.value)) {
        			if (!application.confirm("현재 세금계산서 권한은 "+this.ds_naTrplCAuth.getColumn(this.ds_naTrplCAuth.findRow("USR_AUTH_DSC", "3"),"USR_NM")+"["
        					+this.ds_naTrplCAuth.getColumn(this.ds_naTrplCAuth.findRow("USR_AUTH_DSC", "3"),"MB_ID")+"]님에게 있습니다.\n세금계산서권한을 변경하시겠습니까? ")) {
        				this.Div05.chk_TAX_AUTH.set_value("N");
        				return false;
        			}
        		}
        	} else {
        		if (this.ds_naTrplCAuth.findRow("USR_AUTH_DSC", "3") < 0 && this.ds_naTrplCAuthIng.findRow("TAX_ING", "Y") < 0) {
        			alert("거래처 번호에 해당하는 세금계산서 권한을 가진 회원이 없습니다.\n 세금계산서 권한을 선택해주세요.");
        			return false;
        		} else if (this.ds_naTrplCAuth.getColumn(this.ds_naTrplCAuth.findRow("USR_AUTH_DSC", "3"),"MB_ID") == this.Div05.edt_MB_ID.value) {
        			alert("세금계산서 권한을 가진 회원입니다.\n세금계산서 권한을 해지할 수 없습니다.");
        			this.Div05.chk_TAX_AUTH.set_value("Y");
        			return false;
        		}
        	}
        	return true;
        }

        /*******************************************************************************************************************
         권한 정보 세팅
        ********************************************************************************************************************/
        this.fn_setSvcAuth = function()
        {
        	this.ds_svcAuth.clearData();
        	var chgAuthYn ="N";

        	if (this.ds_usrAuth.rowcount == 0) {
        		if (this.Div05.chk_BILLING_AUTH.value == "Y") {
        			this.ds_svcAuth.addRow();
        			this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition,"USR_AUTH_DSC", "1");
        			this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition,"MB_ID",this.Div05.edt_MB_ID.value);
        			this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition,"RQ_DSC", "1");
        			chgAuthYn ="Y";
        		}
        		if (this.Div05.chk_CONTRACT_AUTH.value == "Y") {
        			this.ds_svcAuth.addRow();
        			this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition,"USR_AUTH_DSC", "2");
        			this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition,"MB_ID",this.Div05.edt_MB_ID.value);
        			this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition,"RQ_DSC", "1");
        			chgAuthYn ="Y";
        		}
        		if (this.Div05.chk_TAX_AUTH.value == "Y") {
        			this.ds_svcAuth.addRow();
        			this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition,"USR_AUTH_DSC", "3");
        			this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition,"MB_ID",this.Div05.edt_MB_ID.value);
        			this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition,"RQ_DSC", "1");
        			chgAuthYn ="Y";
        		}
        	} else {
        		/*기존가입된 권한이 있는 경우*/

        		//전자계약 기존 신청된 이력 존재
        		if (this.ds_usrAuth.findRow("USR_AUTH_DSC", "2") >= 0) {
        			//현재 신청상태
        			if (this.ds_usrAuth.getColumn(this.ds_usrAuth.findRow("USR_AUTH_DSC", "2"),"RQ_DSC") =="1") {
        				if (this.ds_usrAuth.getColumn(this.ds_usrAuth.findRow("USR_AUTH_DSC", "2"),"ENT_PRG_STSC") =="2" || this.ds_usrAuth.getColumn(this.ds_usrAuth.findRow("USR_AUTH_DSC", "2"),"ENT_PRG_STSC") =="4") {
        					//신청한 내역이 거절 되되고 다시 신청 할 경우
        					if (this.Div05.chk_CONTRACT_AUTH.value == "Y") {
        						this.ds_svcAuth.addRow();
        						this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition,"USR_AUTH_DSC", "2");
        						this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition,"MB_ID",this.Div05.edt_MB_ID.value);
        						this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition,"RQ_DSC", "1");
        						chgAuthYn ="Y";
        					}
        				} else {
        					//해지
        					if (this.Div05.chk_CONTRACT_AUTH.value =="N") {
        						this.ds_svcAuth.addRow();
        						this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition,"USR_AUTH_DSC", "2");
        						this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition,"MB_ID",this.Div05.edt_MB_ID.value);
        						this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition,"RQ_DSC", "0");
        						chgAuthYn ="Y";
        					}
        				}

        			}
        			//현재 해지상태
        			else if (this.ds_usrAuth.getColumn(this.ds_usrAuth.findRow("USR_AUTH_DSC", "2"),"RQ_DSC") =="0") {
        				//재신청
        				if (this.Div05.chk_CONTRACT_AUTH.value =="Y") {
        					this.ds_svcAuth.addRow();
        					this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition,"USR_AUTH_DSC", "2");
        					this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition,"MB_ID",this.Div05.edt_MB_ID.value);
        					this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition,"RQ_DSC", "1");
        					chgAuthYn ="Y";
        				}
        			}
        		}
        		//전자계약 신청이력이 없음
        		else {
        			if (this.Div05.chk_CONTRACT_AUTH.value =="Y") {
        				this.ds_svcAuth.addRow();
        				this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition,"USR_AUTH_DSC", "2");
        				this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition,"MB_ID",this.Div05.edt_MB_ID.value);
        				this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition,"RQ_DSC", "1");
        				chgAuthYn ="Y";
        			}
        		}

        		//세금계산서 기존 신청된 이력 존재
        		if (this.ds_usrAuth.findRow("USR_AUTH_DSC", "3") >= 0) {
        			//현재 신청상태
        			if (this.ds_usrAuth.getColumn(this.ds_usrAuth.findRow("USR_AUTH_DSC", "3"),"RQ_DSC") =="1") {
        				//해지
        				if (this.Div05.chk_TAX_AUTH.value =="N") {
        					this.ds_svcAuth.addRow();
        					this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition,"USR_AUTH_DSC", "3");
        					this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition,"MB_ID",this.Div05.edt_MB_ID.value);
        					this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition,"RQ_DSC", "0");
        					chgAuthYn ="Y";
        				}
        			}
        			//현재 해지상태
        			else if (this.ds_usrAuth.getColumn(this.ds_usrAuth.findRow("USR_AUTH_DSC", "3"),"RQ_DSC") =="0") {
        				//재신청
        				if (this.Div05.chk_TAX_AUTH.value =="Y") {
        					this.ds_svcAuth.addRow();
        					this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition,"USR_AUTH_DSC", "3");
        					this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition,"MB_ID",this.Div05.edt_MB_ID.value);
        					this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition,"RQ_DSC", "1");
        					chgAuthYn ="Y";
        				}
        			}
        		}
        		//세금계산서 신청이력이 없음
        		else {
        			if (this.Div05.chk_TAX_AUTH.value =="Y") {
        				this.ds_svcAuth.addRow();
        				this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition,"USR_AUTH_DSC", "3");
        				this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition,"MB_ID",this.Div05.edt_MB_ID.value);
        				this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition,"RQ_DSC", "1");
        				chgAuthYn ="Y";
        			}
        		}
        	}

        	if (chgAuthYn == "Y") {
        		this.div_hiddenArea.edt_chgAuthYn.set_value("Y");
        	}
        }
        /*******************************************************************************************************************
         납부정보 변경 확인
        ********************************************************************************************************************/
        this.fn_changePayInf= function() {
        	var isChange = false;
        	if (this.ds_payInfo.getOrgColumn(0,"STL_METH_DSC") != this.ds_payInfo.getColumn(0,"STL_METH_DSC")) {
        		isChange = true;
        		//trace("종류");
        		return isChange;
        	} else if (this.ds_payInfo.getOrgColumn(0,"HOP_DRW_DD") != this.ds_payInfo.getColumn(0,"HOP_DRW_DD")) {
        		isChange = true;
        		//trace("날짜");
        		return isChange;
        	} else if (this.ds_payInfo.getOrgColumn(0,"PSCRP_DSC") != this.ds_payInfo.getColumn(0,"PSCRP_DSC")) {
        		isChange = true;
        		//trace("개인/법인");
        		return isChange;
        	} else if (this.ds_payInfo.getOrgColumn(0,"DPR_NO") != this.gfn_nullToEmpty(this.ds_payInfo.getColumn(0,"DPR_NO"))) {
        		isChange = true;
        		//trace("번호");
        		return isChange;
        	} else if (this.ds_payInfo.getOrgColumn(0,"BNK_C") != this.ds_payInfo.getColumn(0,"BNK_C")) {
        		isChange = true;
        		//trace("은행");
        		return isChange;
        	} else if (this.ds_payInfo.getOrgColumn(0,"ACNO") != this.ds_payInfo.getColumn(0,"ACNO")) {
        		isChange = true;
        		//trace("계좌번호");
        		return isChange;
        	} else if (this.ds_uploadresult00.rowcount>0) {
        		isChange = true;
        		//trace("통장사본");
        		return isChange;
        	} else if (this.ds_uploadresult01.rowcount>0) {
        		isChange = true;
        		//trace("사업자등록증");
        		return isChange;
        	} else if (this.ds_basicInfo.getColumn(0,"NA_MBCO_DSC" ) == "1") {

        		if (this.ds_basicInfo.getOrgColumn(0,"BRC_BZNO1") != this.ds_basicInfo.getColumn(0,"BRC_BZNO1")) {
        			isChange = true;
        			//trace("사업장 등록번호");
        			return isChange;
        		} else if (this.ds_basicInfo.getOrgColumn(0,"BRC_BZNO2") != this.ds_basicInfo.getColumn(0,"BRC_BZNO2")) {
        			isChange = true;
        			//trace("사업장 등록번호");
        			return isChange;
        		} else if (this.ds_basicInfo.getOrgColumn(0,"BRC_BZNO3") != this.ds_basicInfo.getColumn(0,"BRC_BZNO3")) {
        			isChange = true;
        			//trace("사업장 등록번호");
        			return isChange;
        		}

        	} else {
        		isChange = false;
        		//trace("noChange");
        		return isChange;
        	}
        }
        /*******************************************************************************************************************
         납부정보 세팅
        	1.납부정보 변경여부체크
        	2.납부정보가 변경될경우, 전자서명값을 생성한다.
        ********************************************************************************************************************/
        this.fn_setPayInfo= function() {
        	var isChange = this.fn_changePayInf();

        	if (isChange) {
        		var Elsg  = this.gfn_nullToEmpty(this.Div05.edt_NA_TRPL_C.value) +"|"
        			+ this.gfn_nullToEmpty(this.Div05.Div03.rdo_STL_METH_DSC.value) +"|"
        			+ this.gfn_nullToEmpty(this.Div05.Div03.rdo_HOP_DRW_DD.value)   +"|"
        			+ this.gfn_nullToEmpty(this.Div05.Div03.edt_DPRNM.value  ) 	  +"|"
        			+ this.gfn_nullToEmpty(this.Div05.Div03.rdo_PSCRP_DSC.value )   +"|"
        			+ this.gfn_nullToEmpty(this.ds_payInfo.getColumn(0,"DPR_NO"))   +"|"
        			+ this.gfn_nullToEmpty(this.Div05.Div03.cbo_BNK_C.value )  	  +"|"
        			+ this.gfn_nullToEmpty(this.Div05.Div03.edt_AC_NO.value )
        		;

        		var bzno = this.gfn_nullToEmpty(this.ds_basicInfo.getColumn(0,"BZNO1"))
        				+this.gfn_nullToEmpty(this.ds_basicInfo.getColumn(0,"BZNO2"))
        				+this.gfn_nullToEmpty(this.ds_basicInfo.getColumn(0,"BZNO3")) ;

        		//var sRtn = this.gfn_signTradeSign(this.Div05.Plugin00,Elsg ,bzno);

        		this.gfn_signTradeSign(this.Div05.Plugin00,Elsg, bzno,"fn_signCallback", "setPayInfo");

        		/*
        		if (!sRtn) {
        			return sRtn;
        		} else {
        			this.ds_payInfo.setColumn(0,"ELSG_CNTN",sRtn);
        			this.div_hiddenArea.edt_chgBillingYn.set_value("Y");
        		}
        		*/
        	} else {
        		this.div_hiddenArea.edt_chgBillingYn.set_value("N");
        		this.fn_signCallback("TRUE", "setPayInfo");
        	}
        	return true;
        }

        this.fn_setPayInfoForJoin= function() {

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
        	var bzno = this.gfn_nullToEmpty(this.ds_basicInfo.getColumn(0,"BZNO1"))
        			+this.gfn_nullToEmpty(this.ds_basicInfo.getColumn(0,"BZNO2"))
        			+this.gfn_nullToEmpty(this.ds_basicInfo.getColumn(0,"BZNO3")) ;

        	//var sRtn = this.gfn_signTradeSignForJoin(this.Div05.Plugin00,Elsg, bzno);
        	this.gfn_signTradeSignForJoin(this.Div05.Plugin00,Elsg, "fn_signCallback", "setPayInfoForJoin");

        	/*
        	if (!sRtn) {
        		return sRtn;
        	} else {
        		this.ds_payInfo.setColumn(0,"ELSG_CNTN",sRtn);
        		this.div_hiddenArea.edt_chgBillingYn.set_value("Y");
        		return true;
        	}
        	*/
        }

        

        this.fn_signCallback = function(rtnValue,signId)
        {
        	if (rtnValue == "ERROR")
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
        				/*현재상태 가입거절 => 등록중*/
        				if (this.ds_basicInfo.getColumn(0,"ENT_PRG_STSC") == "2") {
        					this.ds_basicInfo.setColumn(0,"ENT_PRG_STSC", "0");

        				} else {
        				/*현재상태 수정요청거절 및 완료 => 수정요청*/

        					if (this.ds_basicInfo.getColumn(0,"ENT_PRG_STSC") == "4") {
        						this.entPrgStsc_temp = "4";  //거절 상태
        					}
        					this.ds_basicInfo.setColumn(0,"ENT_PRG_STSC", "3");

        				}

        				if (this.gfn_isNull(this.ds_payInfo.getColumn(0, "ACNO")))
        				{
        					this.Div05.Div03.edt_AC_NO.updateToDataset();
        				}

        				if (	this.ds_payInfo.getColumn(0, "STL_METH_DSC") != '3') {
        					if (this.gfn_isNull(this.ds_payInfo.getColumn(0, "DPR_NO")))
        					{
        					   if (this.Div05.Div03.rdo_PSCRP_DSC.value == "1") {
        							this.Div05.Div03.mae_BIRTH.updateToDataset();
        					   } else if (this.Div05.Div03.rdo_PSCRP_DSC.value == "2") {
        							this.Div05.Div03.mae_BZNO.updateToDataset();
        					   }
        					}
        				}

        				var Acno1 = this.Div05.Div03.edt_AC_NO.value;
        				var Acno2 =this.ds_payInfo.getColumn(0, "ACNO");

        				var sParam   = "blChgYn="+this.div_hiddenArea.edt_chgBillingYn.value
        							 + " svcChgYn="+this.div_hiddenArea.edt_chgSvcYn.value
        							 + " authChgYn="+this.div_hiddenArea.edt_chgAuthYn.value
        							 + " entPrgStsc_temp="+this.entPrgStsc_temp
        							 + " Acno1="+Acno1
        							 + " Acno2="+Acno2
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
        this.fn_setSvcInfo = function()
        {
        	this.ds_svcInfo.clearData();
        	/*가입된 서비스가 없을 경우,*/

        	if (this.ds_entSvc.rowcount == 0) {
        		this.ds_svcInfo.addRow();
        		this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID", "10");
        		this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC", "1");

        		/*빌링권한 서비스*/
        		if (this.Div05.chk_BILLING_AUTH.value == "Y") {
        			if (this.Div05.Div03.rdo_SVC_ID.value=="21") {
        				this.ds_svcInfo.addRow();
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID", "21");
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC", "1");
        			}
        			if (this.Div05.Div03.rdo_SVC_ID.value =="22") {
        				this.ds_svcInfo.addRow();
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID", "22");
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC", "1");
        			}

        			if (this.Div05.Div03.cbk_SVC31.value == "Y") {
        				this.ds_svcInfo.addRow();
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID", "31");
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC", "1");
        			}
        			if (this.Div05.Div03.cbk_SVC32.value == "Y") {
        				this.ds_svcInfo.addRow();
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID", "32");
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC", "1");
        			}
        			if (this.Div05.Div03.cbk_SVC33.value == "Y") {
        				this.ds_svcInfo.addRow();
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID", "33");
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC", "1");
        			}
        			if (this.Div05.Div03.cbk_SVC34.value == "Y") {
        				this.ds_svcInfo.addRow();
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID", "34");
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC", "1");
        			}
        			if (this.Div05.Div03.cbk_SVC35.value == "Y") {
        				this.ds_svcInfo.addRow();
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID", "35");
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC", "1");
        			}
        			if (this.Div05.Div03.cbk_SVC36.value == "Y") {
        				this.ds_svcInfo.addRow();
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID", "36");
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC", "1");
        			}
        			// 마감간소화
        			if (this.Div05.Div03.cbk_SVC38.value == "Y") {
        				this.ds_svcInfo.addRow();
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID", "38");
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC", "1");
        			}
        		}
        		this.div_hiddenArea.edt_chgSvcYn.set_value("Y");
        	} else {
        		var chg21Yn = "N";
        		var chg22Yn = "N";
        		var chg31Yn = "N";
        		var chg32Yn = "N";
        		var chg33Yn = "N";
        		var chg34Yn = "N";
        		var chg35Yn = "N";
        		var chg36Yn = "N";
        		var chg38Yn = "N";

        		/*가입된 서비스가 있을 경우*/
        		if (this.Div05.chk_BILLING_AUTH.value == "Y") {

        			//정액제에서 종량제로 변경[정액제 해지, 종량제 신청]
        			 if (this.ds_entSvc.findRow("SVC_ID", "21") >= 0 && this.ds_entSvc.getColumn(this.ds_entSvc.findRow("SVC_ID", "21"),"RQ_DSC") !="0"
        			   && this.Div05.Div03.rdo_SVC_ID.value =="22") {

        				this.ds_svcInfo.addRow();
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID", "21");
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC", "0");
        				this.ds_svcInfo.addRow();
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID", "22");
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC", "1");

        				chg22Yn = "Y";
        			} else if (this.ds_entSvc.findRow("SVC_ID", "21") < 0 && this.Div05.Div03.rdo_SVC_ID.value =="22") {
        			//종량제신청
        				if (this.ds_entSvc.findRow("SVC_ID", "22") <0) {
        					this.ds_svcInfo.addRow();
        					this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID", "22");
        					this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC", "1");
        					chg22Yn = "Y";
        				}
        			}

        			//종량제에서 정액제로 변경[종량제 해지, 정액제 신청]
        			 if (this.ds_entSvc.findRow("SVC_ID", "22") >= 0 && this.ds_entSvc.getColumn(this.ds_entSvc.findRow("SVC_ID", "22"),"RQ_DSC") !="0"
        				&& this.Div05.Div03.rdo_SVC_ID.value =="21") {
        				this.ds_svcInfo.addRow();
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID", "22");
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC", "0");
        				this.ds_svcInfo.addRow();
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID", "21");
        				this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC", "1");
        				chg21Yn = "Y";
        			} else if (this.ds_entSvc.findRow("SVC_ID", "22") < 0 && this.Div05.Div03.rdo_SVC_ID.value =="21") {
        			//정액제신청
        				if (this.ds_entSvc.findRow("SVC_ID", "21") <0) {
        					this.ds_svcInfo.addRow();
        					this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID", "21");
        					this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC", "1");
        					chg21Yn = "Y";
        				}
        			}

        
        			/*####################BI조회 컨트롤##############################*/
        			/*BI조회 신청기록이 있는 경우*/
        			if (this.ds_entSvc.findRow("SVC_ID", "31") >= 0) {
        				if (this.ds_entSvc.getColumn(this.ds_entSvc.findRow("SVC_ID", "31"),"RQ_DSC") =="1") {
        					if (this.Div05.Div03.cbk_SVC31.value =="N") {
        						this.ds_svcInfo.addRow();
        						this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID", "31");
        						this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC", "0");
        						chg31Yn = "Y";
        					}
        				} else if (this.ds_entSvc.getColumn(this.ds_entSvc.findRow("SVC_ID", "31"),"RQ_DSC") =="0") {
        					if (this.Div05.Div03.cbk_SVC31.value =="Y") {
        						this.ds_svcInfo.addRow();
        						this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID", "31");
        						this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC", "1");
        						chg31Yn = "Y";
        					}
        				}
        			} else {
        				if (this.Div05.Div03.cbk_SVC31.value =="Y") {
        					this.ds_svcInfo.addRow();
        					this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID", "31");
        					this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC", "1");
        					chg31Yn = "Y";
        				}
        			}

        			/*####################추이분석 컨트롤##############################*/
        			/*추이분석 신청기록이 있는 경우*/
        			if (this.ds_entSvc.findRow("SVC_ID", "32") >= 0) {
        				if (this.ds_entSvc.getColumn(this.ds_entSvc.findRow("SVC_ID", "32"),"RQ_DSC") =="1") {
        					if (this.Div05.Div03.cbk_SVC32.value =="N") {
        						this.ds_svcInfo.addRow();
        						this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID", "32");
        						this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC", "0");
        						chg32Yn = "Y";
        					}
        				} else if (this.ds_entSvc.getColumn(this.ds_entSvc.findRow("SVC_ID", "32"),"RQ_DSC") =="0") {
        					if (this.Div05.Div03.cbk_SVC32.value =="Y") {
        						this.ds_svcInfo.addRow();
        						this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID", "32");
        						this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC", "1");
        						chg32Yn = "Y";
        					}
        				}
        			} else {
        				if (this.Div05.Div03.cbk_SVC32.value =="Y") {
        					this.ds_svcInfo.addRow();
        					this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID", "32");
        					this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC", "1");
        					chg32Yn = "Y";
        				}
        			}

        			/*####################시장분석 자사 컨트롤##############################*/
        			/*시장분석 자사 신청기록이 있는 경우*/
        			if (this.ds_entSvc.findRow("SVC_ID", "33") >= 0) {
        				if (this.ds_entSvc.getColumn(this.ds_entSvc.findRow("SVC_ID", "33"),"RQ_DSC") =="1") {
        					if (this.Div05.Div03.cbk_SVC33.value =="N") {
        						this.ds_svcInfo.addRow();
        						this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID", "33");
        						this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC", "0");
        						chg33Yn = "Y";
        					}
        				} else if (this.ds_entSvc.getColumn(this.ds_entSvc.findRow("SVC_ID", "33"),"RQ_DSC") =="0") {
        					if (this.Div05.Div03.cbk_SVC33.value =="Y") {
        						this.ds_svcInfo.addRow();
        						this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID", "33");
        						this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC", "1");
        						chg33Yn = "Y";
        					}
        				}
        			} else {
        				if (this.Div05.Div03.cbk_SVC33.value =="Y") {
        					this.ds_svcInfo.addRow();
        					this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID", "33");
        					this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC", "1");
        					chg33Yn = "Y";
        				}
        			}

        			/*####################카테고리 시장분석 컨트롤##############################*/
        			/*카테고리 시장분석 신청기록이 있는 경우*/
        			if (this.ds_entSvc.findRow("SVC_ID", "34") >= 0) {
        				if (this.ds_entSvc.getColumn(this.ds_entSvc.findRow("SVC_ID", "34"),"RQ_DSC") =="1") {
        					if (this.Div05.Div03.cbk_SVC34.value =="N") {
        						this.ds_svcInfo.addRow();
        						this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID", "34");
        						this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC", "0");
        						chg34Yn = "Y";
        					}
        				} else if (this.ds_entSvc.getColumn(this.ds_entSvc.findRow("SVC_ID", "34"),"RQ_DSC") =="0") {
        					if (this.Div05.Div03.cbk_SVC34.value =="Y") {
        						this.ds_svcInfo.addRow();
        						this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID", "34");
        						this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC", "1");
        						chg34Yn = "Y";
        					}
        				}
        			} else {
        				if (this.Div05.Div03.cbk_SVC34.value =="Y") {
        					this.ds_svcInfo.addRow();
        					this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID", "34");
        					this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC", "1");
        					chg34Yn = "Y";
        				}
        			}

        			/*####################판매상세정보 컨트롤##############################*/
        			/*판매상세정보 신청기록이 있는 경우*/
        			if (this.ds_entSvc.findRow("SVC_ID", "35") >= 0) {
        				if (this.ds_entSvc.getColumn(this.ds_entSvc.findRow("SVC_ID", "35"), "RQ_DSC") == "1") {
        					if (this.Div05.Div03.cbk_SVC35.value == "N") {
        						this.ds_svcInfo.addRow();
        						this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "SVC_ID", "35");
        						this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "RQ_DSC", "0");
        						chg35Yn = "Y";
        					}
        				} else {
        					if (this.Div05.Div03.cbk_SVC35.value == "Y") {
        						this.ds_svcInfo.addRow();
        						this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "SVC_ID", "35");
        						this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "RQ_DSC", "1");
        						chg35Yn = "Y";
        					}
        				}
        			} else {
        				if (this.Div05.Div03.cbk_SVC35.value == "Y") {
        					this.ds_svcInfo.addRow();
        					this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "SVC_ID", "35");
        					this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "RQ_DSC", "1");
        					chg35Yn = "Y";
        				}
        			}

        			/*#################### 신규통계서비스  컨트롤##############################*/
        			/* 신규통계서비스 신청기록이 있는 경우*/
        			if (this.ds_entSvc.findRow("SVC_ID", "36") >= 0) {
        				if (this.ds_entSvc.getColumn(this.ds_entSvc.findRow("SVC_ID", "36"),"RQ_DSC") =="1") {
        					if (this.Div05.Div03.cbk_SVC36.value =="N") {
        						this.ds_svcInfo.addRow();
        						this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID", "36");
        						this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC", "0");
        						chg36Yn = "Y";
        					}
        				} else if (this.ds_entSvc.getColumn(this.ds_entSvc.findRow("SVC_ID", "36"),"RQ_DSC") =="0") {
        					if (this.Div05.Div03.cbk_SVC36.value =="Y") {
        						this.ds_svcInfo.addRow();
        						this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID", "36");
        						this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC", "1");
        						chg36Yn = "Y";
        					}
        				}
        			} else {
        				if (this.Div05.Div03.cbk_SVC36.value =="Y") {
        					this.ds_svcInfo.addRow();
        					this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"SVC_ID", "36");
        					this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition,"RQ_DSC", "1");
        					chg36Yn = "Y";
        				}
        			}

        			/*####################마감간소화 컨트롤##############################*/
        			/*마감간소화 신청기록이 있는 경우*/
        			if (this.ds_entSvc.findRow("SVC_ID", "38") >= 0) {
        				if (this.ds_entSvc.getColumn(this.ds_entSvc.findRow("SVC_ID", "38"), "RQ_DSC") == "1") {
        					if (this.Div05.Div03.cbk_SVC38.value == "N") {
        						this.ds_svcInfo.addRow();
        						this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "SVC_ID", "38");
        						this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "RQ_DSC", "0");
        						chg38Yn = "Y";
        					}
        				} else {
        					if (this.Div05.Div03.cbk_SVC38.value == "Y") {
        						this.ds_svcInfo.addRow();
        						this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "SVC_ID", "38");
        						this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "RQ_DSC", "1");
        						chg38Yn = "Y";
        					}
        				}
        			} else {
        				if (this.Div05.Div03.cbk_SVC38.value == "Y") {
        					this.ds_svcInfo.addRow();
        					this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "SVC_ID", "38");
        					this.ds_svcInfo.setColumn(this.ds_svcInfo.rowposition, "RQ_DSC", "1");
        					chg38Yn = "Y";
        				}
        			}
        		} // /*가입된 서비스가 있을 경우 체크 종료*/

        		if (chg21Yn =="N" &&  chg22Yn =="N" && chg31Yn =="N" && chg32Yn =="N" && chg33Yn =="N" && chg34Yn =="N" && chg35Yn =="N" && chg36Yn =="N" && chg38Yn =="N") {
        			if (this.ds_basicInfo.getColumn(0,"SVC_CHG_YN") == "Y") {
        				this.div_hiddenArea.edt_chgSvcYn.set_value("Y");
        				this.ds_svcInfo.copyData(this.ds_entSvc);
        				for (var i =0 ; i < this.ds_svcInfo.rowcount ; i++) {
        					this.ds_svcInfo.setColumn(i,"ENT_PRG_STSC",this.ds_basicInfo.getColumn(0,"ENT_PRG_STSC"));
        				}
        			} else {
        				this.div_hiddenArea.edt_chgSvcYn.set_value("N");
        			}
        		} else {
        			this.div_hiddenArea.edt_chgSvcYn.set_value("Y");
        		}
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
        	if (e.datasets == null) {
        		alert("하나로 eSCM으로 파일전송이 실패하였습니다. \n첨부파일의 이름을 변경한 후 다시 시도해 보십시오.\n");
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
        	if (e.datasets == null) {
        		alert("하나로 eSCM으로 파일전송이 실패하였습니다. \n첨부파일의 이름을 변경한 후 다시 시도해 보십시오.\n");
        	} else {
        		this.ds_uploadresult01.clear();
        		this.ds_uploadresult01.appendData(e.datasets[0],false,false);
        		this.ds_payInfo.setColumn(0,"BZ_RGWRRT_FL_TMPNM"	,this.ds_uploadresult01.getColumn(0,"SYSTEMFILENAME"));
        		this.ds_payInfo.setColumn(0,"BZ_RGWRRT_FLNM"		,this.ds_uploadresult01.getColumn(0,"ORGFNAME"));
        	}
        }

        /***************************************************
        	파일업로드오류
        ****************************************************/

        this.Div05_Div00_FileUpload_onerror = function(obj,e)
        {
        	alert("하나로 eSCM으로 파일전송이 실패하였습니다. \n첨부파일의 크기가 20M 이하인지, 악성파일 차단 보안 프로그램이 설치되어 있는지 확인해주세요.");
        }

        /***************************************************
        	인증번호생성 및 SMS전송
        ****************************************************/
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
        	if (this.gfn_isNull(this.Div05.edt_confirmCertificate.value)) {
        		alert("인증번호를 입력 하세요");
        		this.Div05.edt_confirmCertificate.setFocus();
        		return false;
        	}
        	if (this.div_hiddenArea.edt_randomNumber.value != this.Div05.edt_confirmCertificate.value) {
        		this.div_hiddenArea.edt_confirmCertificate.set_value("N");
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

        
        /***************************************************
        	통장사본 다운로드
        ****************************************************/
        this.Div05_Div03_exist_BB_FLNM_onclick = function(obj,e)
        {
        	if (this.ds_payInfo.rowcount >0 && !this.gfn_isNull(this.ds_payInfo.getColumn(0,"BB_FLNM"))) {
        		this.fn_downloandImg("BB");
        	} else {
        		alert("다운로드 할 통장사본이 존재하지 않습니다.");
        	}
        }
        /***************************************************
        	사업자등록증 다운로드
        ****************************************************/
        this.Div05_Div03_exist_BZ_RGWRRT_FLNM_onclick = function(obj,e)
        {
        	if (this.ds_payInfo.rowcount >0 && !this.gfn_isNull(this.ds_payInfo.getColumn(0,"BZ_RGWRRT_FLNM"))) {
        		this.fn_downloandImg("BZ_RGWRRT");
        	} else {
        		alert("다운로드 할 사업자등록증 사본이 존재하지 않습니다.");
        	}
        }

        
        /***************************************************
        	파일다운로드
        ****************************************************/
        this.fn_downloandImg = function(type)
        {
        	this.ds_download.clearData();
        	this.ds_download.addRow();
        	this.ds_download.setColumn(0, "SEAL", "cmpyPay");
        	this.ds_download.setColumn(0, "CHK", "1");

        	if (type == "BB") {
        		this.ds_download.setColumn(0, "SYSTEMFILENAME", this.ds_payInfo.getColumn(0, "BB_FL_TMPNM"));
        		this.ds_download.setColumn(0, "ORGFNAME", this.ds_payInfo.getColumn(0, "BB_FLNM"));
        	} else if (type == "BZ_RGWRRT") {
        		this.ds_download.setColumn(0, "SYSTEMFILENAME", this.ds_payInfo.getColumn(0, "BZ_RGWRRT_FL_TMPNM"));
        		this.ds_download.setColumn(0, "ORGFNAME", this.ds_payInfo.getColumn(0, "BZ_RGWRRT_FLNM"));
        	}

        	this.gfn_callDownload(this.ds_download, "CHK", this.Div05.edt_NA_TRPL_C.value);
        }

        /*******************************************************************************************************************
         납부방법에 따른 컨드롤 변경 - 버튼
        ********************************************************************************************************************/
        this.Div05_Div03_rdo_STL_METH_DSC_onitemchanged = function(obj,e)
        {
            if (obj.value != "3") {
        		this.Div05.Div03.rdo_PSCRP_DSC.set_index(0);
        		this.Div05.Div03.rdo_HOP_DRW_DD.set_index(0);   //희망출금일
        	}

        	this.fn_stlMethDsc(obj.value);

        }
        /*****************************************************************************
        	납부정보 개인/법인에 따른 정보변경
        *****************************************************************************/
        this.PSCRP_DSC_onitemchanged = function(obj,e)
        {

        
        	this.ds_payInfo.setColumn(0,"DPR_NO", "");
        	//개인
        	if (this.Div05.Div03.rdo_PSCRP_DSC.value == "1") {

        		this.Div05.Div03.Static111.set_text("생년월일");
        		this.Div05.Div03.mae_BIRTH.set_visible(true);
        		this.Div05.Div03.mae_BZNO.set_visible(false);
        		this.Div05.Div03.mae_BIRTH.set_enable(true);			//사업자번호
        	}
        	//법인
        	else if (this.Div05.Div03.rdo_PSCRP_DSC.value == "2") {
        		this.Div05.Div03.Static111.set_text("사업자번호");
        		this.Div05.Div03.mae_BZNO.set_visible(true);
        		this.Div05.Div03.mae_BIRTH.set_visible(false);
        		this.Div05.Div03.mae_BZNO.set_enable(true);			//사업자번호

        	}
        }

        /*******************************************************************************************************************
         납부방법에 따른 컨드롤 변경
        ********************************************************************************************************************/
        this.fn_stlMethDsc= function(type)
        {

        	if (type =="1") {
        		this.Div05.Div03.cbo_BNK_C.set_index(this.ds_bankCode.findRow("SIMP_C", "011"));
        		this.Div05.Div03.cbo_BNK_C.set_enable(true);		//거래은행
        		this.Div05.Div03.edt_DPRNM.set_enable(true);		//예금주
        		this.Div05.Div03.rdo_PSCRP_DSC.set_enable(true);	//개인/법인

        		this.PSCRP_DSC_onitemchanged();

        		this.Div05.Div03.edt_AC_NO.set_enable(true);		//계좌번호
        		this.Div05.Div03.edt_AC_NO.set_value("");			//계좌번호
        		this.Div05.Div03.edt_AC_NO.set_readonly(false);		//계좌번호
        		this.Div05.Div03.FileUpload.set_enable(true);		//통장사본
        		this.Div05.Div03.rdo_HOP_DRW_DD.set_enable(true);	//희망출금일
        		this.Div05.Div03.cbo_BNK_C.set_readonly(true);
        // 		this.Div05.Div03.rdo_PSCRP_DSC.set_index(0);
        //         this.Div05.Div03.rdo_HOP_DRW_DD.set_index(0);   //희망출금일

        

        	} else if (type =="2") {

        
        		this.Div05.Div03.cbo_BNK_C.set_readonly(false);
        		this.Div05.Div03.cbo_BNK_C.set_enable(true);		//거래은행
        		this.Div05.Div03.edt_DPRNM.set_enable(true);		//예금주
        		this.Div05.Div03.rdo_PSCRP_DSC.set_enable(true);	//개인/법인
        		this.PSCRP_DSC_onitemchanged();
        		this.Div05.Div03.edt_AC_NO.set_enable(true);		//계좌번호
        		this.Div05.Div03.edt_AC_NO.set_value("");			//계좌번호
        		this.Div05.Div03.edt_AC_NO.set_readonly(false);		//계좌번호
        		this.Div05.Div03.FileUpload.set_enable(true);		//통장사본
        		this.Div05.Div03.rdo_HOP_DRW_DD.set_enable(true);	//희망출금일
        // 		this.Div05.Div03.rdo_PSCRP_DSC.set_index(0);
        //         this.Div05.Div03.rdo_HOP_DRW_DD.set_index(0);   //희망출금일

        	} else if (type =="3") {

        		if (this.gfn_isNull(this.orgAcNo)) {
        			if (this.Div05.Div03.rdo_STL_METH_DSC.value == "3" && this.gfn_isNull(this.vrtlAcNo)) {
        				this.fn_getVirtualAccount();
        			}
        		} else {
        			/*납부정보*/
        			if (this.ds_payInfo.getOrgColumn(0,"STL_METH_DSC") == "3") {
        				this.vrtlAcNo = this.orgAcNo;
        			} else {
        				if (this.gfn_isNull(this.vrtlAcNo)) {
        					this.fn_getVirtualAccount();
        				}
        			}
        		}

        		this.Div05.Div03.cbo_BNK_C.set_readonly(true);
        		this.Div05.Div03.cbo_BNK_C.set_index(this.ds_bankCode.findRow("SIMP_C", "011"));
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
        		this.Div05.Div03.rdo_HOP_DRW_DD.set_enable(false);	//희망출금일
        		this.ds_payInfo.setColumn(0, "PSCRP_DSC", "");      //개인예금주초기화
        		this.ds_payInfo.setColumn(0, "HOP_DRW_DD", "");		//희망출금일초기화
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
        // 		this.Div05.Div03.rdo_PSCRP_DSC.set_index(0);
        //         this.Div05.Div03.rdo_HOP_DRW_DD.set_index(0);   //희망출금일

        	}

        	if (this.ds_payInfo.getColumn(0,"PSCRP_DSC") =="2") {
        		this.Div05.Div03.Static111.set_text("사업자번호");
        	} else {
        		this.Div05.Div03.Static111.set_text("생년월일");
        	}
        }

        

        

        /*******************************************************************************************************************
         권한이 존재할 경우 화면 dispaly
        ********************************************************************************************************************/
        this.fn_visibleUsrAuthInfo = function()
        {
        	if (this.ds_usrAuth.rowcount > 0) {

        		if (this.ds_usrAuth.findRow("USR_AUTH_DSC", "1") >= 0 && this.ds_usrAuth.getColumn(this.ds_usrAuth.findRow("USR_AUTH_DSC", "1"),"RQ_DSC")=="1"
        			&& (this.ds_usrAuth.getColumn(this.ds_usrAuth.findRow("USR_AUTH_DSC", "1"),"ENT_PRG_STSC")!="2" && this.ds_usrAuth.getColumn(this.ds_usrAuth.findRow("USR_AUTH_DSC", "1"),"ENT_PRG_STSC")!="4")) {
        			this.Div05.chk_BILLING_AUTH.set_value("Y");
        		} else {
        			this.Div05.chk_BILLING_AUTH.set_value("N");
        		}

        		if (this.ds_usrAuth.findRow("USR_AUTH_DSC", "2") >= 0 && this.ds_usrAuth.getColumn(this.ds_usrAuth.findRow("USR_AUTH_DSC", "2"),"RQ_DSC")=="1"
        			&& (this.ds_usrAuth.getColumn(this.ds_usrAuth.findRow("USR_AUTH_DSC", "2"),"ENT_PRG_STSC")!="2" && this.ds_usrAuth.getColumn(this.ds_usrAuth.findRow("USR_AUTH_DSC", "2"),"ENT_PRG_STSC")!="4")) {
        			this.Div05.chk_CONTRACT_AUTH.set_value("Y");
        		} else {
        			this.Div05.chk_CONTRACT_AUTH.set_value("N");
        		}

        		if (this.ds_usrAuth.findRow("USR_AUTH_DSC", "3") >= 0 && this.ds_usrAuth.getColumn(this.ds_usrAuth.findRow("USR_AUTH_DSC", "3"),"RQ_DSC")=="1"
        			&& (this.ds_usrAuth.getColumn(this.ds_usrAuth.findRow("USR_AUTH_DSC", "3"),"ENT_PRG_STSC")!="2" && this.ds_usrAuth.getColumn(this.ds_usrAuth.findRow("USR_AUTH_DSC", "3"),"ENT_PRG_STSC")!="4")) {
        			this.Div05.chk_TAX_AUTH.set_value("Y");
        		} else {
        			this.Div05.chk_TAX_AUTH.set_value("N");
        		}
        	}
        }
        /*******************************************************************************************************************
         가입서비스가 존재할 경우 화면 dispaly
        ********************************************************************************************************************/
        this.fn_entSvcdisplay = function()
        {
        	// 부가정보
        	if (this.ds_entSvc.findRowExpr("SVC_ID == '21' && RQ_DSC == '1'") != -1) {
        		this.Div05.Div03.rdo_SVC_ID.set_value("21"); // 정액제
        	} else {
        		this.Div05.Div03.rdo_SVC_ID.set_value("22"); // 종량제
        	}

        	// BI조회
        	if (this.ds_entSvc.findRowExpr("SVC_ID == '31' && RQ_DSC == '1'") != -1) {
        		this.Div05.Div03.cbk_SVC31.set_value("Y");
        	} else {
        		this.Div05.Div03.cbk_SVC31.set_value("N");
        	}

        	// 추이분석
        	if (this.ds_entSvc.findRowExpr("SVC_ID == '32' && RQ_DSC == '1'") != -1) {
        		this.Div05.Div03.cbk_SVC32.set_value("Y");
        	} else {
        		this.Div05.Div03.cbk_SVC32.set_value("N");
        	}

        	// 시장분석(자사)
        	if (this.ds_entSvc.findRowExpr("SVC_ID == '33' && RQ_DSC == '1'") != -1) {
        		this.Div05.Div03.cbk_SVC33.set_value("Y");
        	} else {
        		this.Div05.Div03.cbk_SVC33.set_value("N");
        	}

        	// 카테고리 시장분석
        	if (this.ds_entSvc.findRowExpr("SVC_ID == '34' && RQ_DSC == '1'") != -1) {
        		this.Div05.Div03.cbk_SVC34.set_value("Y");
        	} else {
        		this.Div05.Div03.cbk_SVC34.set_value("N");
        	}

        	// 자사판매정보 제공동의
        	if (this.ds_entSvc.findRowExpr("SVC_ID == '35' && RQ_DSC == '1'") != -1) {
        		this.Div05.Div03.cbk_SVC35.set_value("Y");
        	} else {
        		this.Div05.Div03.cbk_SVC35.set_value("N");
        	}

        	// 신규통계서비스
        	if (this.ds_entSvc.findRowExpr("SVC_ID == '36' && RQ_DSC == '1'") != -1) {
        		this.Div05.Div03.cbk_SVC36.set_value("Y");
        	} else {
        		this.Div05.Div03.cbk_SVC36.set_value("N");
        	}

        	// 마감간소화
        	if (this.ds_entSvc.findRowExpr("SVC_ID == '38' && RQ_DSC == '1'") != -1) {
        		this.Div05.Div03.cbk_SVC38.set_value("Y");
        	} else {
        		this.Div05.Div03.cbk_SVC38.set_value("N");
        	}
        }

        /*******************************************************************************************************************
         callback메소드
        ********************************************************************************************************************/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {

        	if (ErrorCode < 0) {
        		if (svcID == "checkMBPW") {
        			if (ErrorCode == -2) {
        				alert(" 비밀번호를 다시 확인하세요. \n 비밀번호를 잘못입력 하셨습니다.");
        			} else {
        				this.gfn_getMessage("alert", "error.message.server.exception");
        			}
        		} else {
        			this.gfn_getMessage("alert", "error.message.server.exception");
        		}
        	} else {
        		if (svcID=="retrieveMB") {
        			this.ds_payInfo.addColumn("ACNO_B", "string");
        			if (this.ds_basicInfo.getColumn(0,"ENT_PRG_STSC") =="2" || this.ds_basicInfo.getColumn(0,"ENT_PRG_STSC") =="4") {
        				this.Div05.Div02.sta_ENT_PRG_CNTN.set_text("<fc v='red'>[가입처리내용] "+this.ds_basicInfo.getColumn(0,"ENT_PRG_CNTN")+"</fc>");
        				this.Div05.Div02.sta_ENT_PRG_CNTN.set_visible(true);
        			} else {
        				this.Div05.Div02.sta_ENT_PRG_CNTN.set_visible(false);
        			}

        			/*기존가입서비스가 있을 경우*/
        			if (this.ds_entSvc.rowcount >0) {
        				this.fn_entSvcdisplay();
        			}

        			if (this.ds_basicInfo.rowcount >0) {
        				if (this.ds_basicInfo.getColumn(0,"NA_MBCO_DSC" ) != "1") {
        					this.Div05.edt_B_BZN01.set_visible(true);
        					this.Div05.edt_B_BZN02.set_visible(true);
        					this.Div05.edt_B_BZN03.set_visible(true);
        					this.Div05.Static14.set_visible(true);
        					this.Div05.Static02.set_visible(true);
        					this.Div05.Static13.set_visible(true);
        				}
        		    }

        		    if (this.ds_branch_bzno.rowcount > 0) {
        				var BZNO = this.ds_branch_bzno.getColumn(0, "BZNO");
        				if (BZNO && BZNO.length == 10) {
        					this.Div05.Div03.edt_B_BZN01_C.set_value(BZNO.substring(0, 3)); // 3자리
        					this.Div05.Div03.edt_B_BZN02_C.set_value(BZNO.substring(3, 5)); // 2자리
        					this.Div05.Div03.edt_B_BZN03_C.set_value(BZNO.substring(5, 10)); // 5자리
        				}
        			}

        
        			/*권한정보가 있을 경우*/
        			if (this.ds_usrAuth.rowcount > 0) {
        				this.fn_visibleUsrAuthInfo();
        				if (this.ds_usrAuth.findRow("USR_AUTH_DSC", "1") >= 0) {
        					this.fn_visibleSvcInfo("BILLING_AUTH", "Y");
        				}
        			}

        			/*납부정보가 있을경우*/
        			if (this.ds_payInfo.rowcount >0) {
        				this.orgAcNo = this.ds_payInfo.getColumn(0,"ACNO");
        				this.orgDpNo = this.ds_payInfo.getColumn(0,"DPR_NO");
        				this.fn_stlMethDsc(this.ds_payInfo.getColumn(0,"STL_METH_DSC"));
        				this.Div05.Div03.edt_AC_NO.set_value(this.orgAcNo);

        				if (this.ds_payInfo.getColumn(0,"PSCRP_DSC") == "1") {
        					this.Div05.Div03.mae_BIRTH.set_value(this.orgDpNo);
        					this.Div05.Div03.mae_BIRTH.set_visible(true);
        					this.Div05.Div03.mae_BZNO.set_visible(false);
        					this.Div05.Div03.mae_BIRTH.set_value(this.ds_payInfo.getColumn(0,"DPR_NO"));
        				} else {
        					this.Div05.Div03.mae_BZNO.set_value(this.orgDpNo);
        					this.Div05.Div03.mae_BIRTH.set_visible(false);
        					this.Div05.Div03.mae_BZNO.set_visible(true);
        					this.Div05.Div03.mae_BZNO.set_value(this.ds_payInfo.getColumn(0,"DPR_NO"));
        				}
        				if (!this.gfn_isNull(this.ds_payInfo.getColumn(0,"BZ_RGWRRT_FLNM"))) {
        					this.Div05.Div03.exist_BZ_RGWRRT_FLNM.set_text(this.ds_payInfo.getColumn(0,"BZ_RGWRRT_FLNM"));
        				}
        				if (!this.gfn_isNull(this.ds_payInfo.getColumn(0,"BB_FLNM"))) {
        					this.Div05.Div03.exist_BB_FLNM.set_text(this.ds_payInfo.getColumn(0,"BB_FLNM"));
        				}
        			} else {
        				this.ds_payInfo.addRow();
        				this.Div05.Div03.rdo_SVC_ID.set_value("22");
        			}
        		} else if (svcID == "sendSms") {
        			alert("고객님의 휴대전화로 인증번호가 발송되었습니다.");
        			this.div_hiddenArea.edt_randomNumber.set_value(this.ds_certNum.getColumn(0,"CERT_NUM"));
        		} else if (svcID == "retrieveNaTrplCAuthLst") {

        		} else if (svcID == "updateMB") {
        			alert("정상 신청 되었습니다.");
        			if (this.getOwnerFrame().paramMode == "Y") {
        				this.close();
        			} else {
        				this.fn_retriveUsrInfo();
        				this.resetScroll();
        			}
        		} else if (svcID == "checkMBPW") {
        			/*권한 및 서비스 초기화*/
        			this.Div01.set_visible(false);
        			this.Div05.set_visible(true);
        			this.Div05.chk_BILLING_AUTH.set_value("N");
        			this.Div05.chk_CONTRACT_AUTH.set_value("N");
        			this.Div05.chk_TAX_AUTH.set_value("N");
        			this.Div05.Div03.cbk_SVC31.set_value("N");
        			this.Div05.Div03.cbk_SVC32.set_value("N");
        			this.Div05.Div03.cbk_SVC33.set_value("N");
        			this.Div05.Div03.cbk_SVC34.set_value("N");
        			this.Div05.Div03.cbk_SVC35.set_value("N");
        			this.Div05.Div03.cbk_SVC36.set_value("N");
        			this.Div05.Div03.cbk_SVC38.set_value("N");

        			//회원정보 호출
        			this.fn_retriveUsrInfo();
        			this.resetScroll();
        		} else if (svcID == "getVirtualAccount") {
        			this.vrtlAcNo = this.ds_vrtlAcNo.getColumn(0,"VRTL_ACNO");
        			this.Div05.Div03.edt_AC_NO.set_value(this.vrtlAcNo);
        		}
        	}

        }

        this.fn_BZNOCheck = function()
        {
        	var strNumb = this.ds_basicInfo.getColumn(0, "BRC_BZNO1") +this.ds_basicInfo.getColumn(0, "BRC_BZNO2") + this.ds_basicInfo.getColumn(0, "BRC_BZNO3");
         	if (strNumb == '0000000000') {
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
        		this.Div05.edt_B_BZN01.setFocus();
        		return false;
        	}
        	return true;
        }

        this.Div01_edt_pw_onkeydown = function(obj,e)
        {
        	if (e.keycode == '13') {
        		this.Div01.Div02.btn_confirm.click();
        	}
        }

        this.btn_tr_print_onclick = function(obj,e)
        {
        	if (this.Div05.Div03.rdo_STL_METH_DSC.value != '3') {
        		alert("결제방식이 가상계좌일 경우에만 발급확인서를 출력할 수 있습니다.");
        		return false;
        	}
        	var sParam = {test:'test'};
        	var ozParam = {
        		sId: 'VAN_DS_SC_0900',
        		sUrl: '/rest/oz/pt/vrAcAmn',
        		paramType: 'param',
        		sParam: sParam
        	};
        	//trace("가상계좌발급 출력");
        	this.ozViewer(ozParam);
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
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Div05.chk_CONTRACT_AUTH.addEventHandler("onchanged", this.CheckBox03_onchanged, this);
            this.Div05.Div02.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.Div05.rdo_COMP_TPC.addEventHandler("onitemclick", this.Radio00_onitemclick, this);
            this.Div05.Static03.addEventHandler("onclick", this.Div05_Static03_onclick, this);
            this.Div05.chk_BILLING_AUTH.addEventHandler("onchanged", this.CheckBox04_onchanged, this);
            this.Div05.btn_sendSms.addEventHandler("onclick", this.btn_sendSms_onclick, this);
            this.Div05.btn_certificate.addEventHandler("onclick", this.btn_certificate_onclick, this);
            this.Div05.Div03.Static04.addEventHandler("onclick", this.Div05_Div03_Static04_onclick, this);
            this.Div05.Div03.rdo_STL_METH_DSC.addEventHandler("onitemchanged", this.Div05_Div03_rdo_STL_METH_DSC_onitemchanged, this);
            this.Div05.Div03.rdo_HOP_DRW_DD.addEventHandler("onitemclick", this.Div03_rdo_HOP_DRW_DD_onitemclick, this);
            this.Div05.Div03.FileUpload.addEventHandler("onsuccess", this.Div03_FileUpload_onsuccess, this);
            this.Div05.Div03.FileUpload.addEventHandler("onerror", this.Div05_Div00_FileUpload_onerror, this);
            this.Div05.Div03.FileUpload.addEventHandler("onitemchanged", this.Div03_FileUpload_onitemchanged, this);
            this.Div05.Div03.FileUpload00.addEventHandler("onsuccess", this.Div03_FileUpload00_onsuccess, this);
            this.Div05.Div03.FileUpload00.addEventHandler("onerror", this.Div05_Div00_FileUpload_onerror, this);
            this.Div05.Div03.FileUpload00.addEventHandler("onitemchanged", this.Div03_FileUpload00_onitemchanged, this);
            this.Div05.Div03.exist_BB_FLNM.addEventHandler("onclick", this.Div05_Div03_exist_BB_FLNM_onclick, this);
            this.Div05.Div03.exist_BZ_RGWRRT_FLNM.addEventHandler("onclick", this.Div05_Div03_exist_BZ_RGWRRT_FLNM_onclick, this);
            this.Div05.Div03.rdo_PSCRP_DSC.addEventHandler("onitemchanged", this.PSCRP_DSC_onitemchanged, this);
            this.Div05.Div03.cbk_SVC38.addEventHandler("onchanged", this.fn_confirmSimplifyPolicy, this);
            this.Div05.Div03.btn_info.addEventHandler("onclick", this.fn_simplifyOnClick, this);
            this.Div05.Div03.btn_info2.addEventHandler("onclick", this.fn_simplifyOnClick, this);
            this.Div05.Static10.addEventHandler("onclick", this.Div05_Static03_onclick, this);
            this.Div05.rdo_SEX_DSC.addEventHandler("onitemclick", this.Radio00_onitemclick, this);
            this.Div05.Static138.addEventHandler("onclick", this.Static138_onclick, this);
            this.Div05.btn_pay_rep.addEventHandler("onclick", this.btn_tr_print_onclick, this);
            this.Div01.Div02.btn_confirm.addEventHandler("onclick", this.Div01_Div02_btn_confirm_onclick, this);
            this.Div01.edt_pw.addEventHandler("onkeydown", this.Div01_edt_pw_onkeydown, this);

        };

        this.loadIncludeScript("OMG_DS_SC_5114.xfdl");

       
    };
}
)();
