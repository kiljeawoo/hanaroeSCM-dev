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
                this.set_name("VAN_PS_BS_1010");
                this.set_titletext("잔액장발행관리");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_byng", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_BZPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"BAS_YM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_ADJPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"ADJPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"BZ_METH_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BLB_DFC_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"ADJPL_NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"TXT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"ADJPL_BIZ_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"BAS_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"BAC\" type=\"STRING\" size=\"256\"/><Column id=\"ISSUE_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ISSUE_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ISSUE_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"ISSUE_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DRUP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ISSUE_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_combo", this);
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

            obj = new Dataset("ds_pageVO", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CURRENT_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TOTAL_ROW_COUNT\">13</Col><Col id=\"PAGE_SIZE\">10</Col><Col id=\"CURRENT_PAGE\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_taxCopy", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"PBC_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"NTS_TMS_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CRT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_KD\" type=\"STRING\" size=\"256\"/><Column id=\"RCT_RQS_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_C\" type=\"STRING\" size=\"256\"/><Column id=\"RMK1\" type=\"STRING\" size=\"256\"/><Column id=\"RMK2\" type=\"STRING\" size=\"256\"/><Column id=\"RMK3\" type=\"STRING\" size=\"256\"/><Column id=\"REV_RPT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BAT_ISU_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BAT_ISU_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REV_TTCN\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_MTALNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_REPMNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_ADR\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_BZTPNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_BZC\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_CHRRNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_CHRR_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_CHRR_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_CHRR_MPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_FAXNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"MTAL\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_REPMNM\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_ADR\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_BZTPNM\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_BZC\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_FAXNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_DEPTNM1\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRRNM1\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRR_TELNO1\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRR_EMAIL1\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRR_MPNO1\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_DEPTNM2\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRRNM2\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRR_TELNO2\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRR_EMAIL2\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRR_MPNO2\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_MTALNM\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_REPMNM\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_ADR\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_BZTPNM\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_BZC\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_CHRRNM\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_CHRR_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_CHRR_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"STL_METHC1\" type=\"STRING\" size=\"256\"/><Column id=\"STL_AM1\" type=\"STRING\" size=\"256\"/><Column id=\"STL_METHC2\" type=\"STRING\" size=\"256\"/><Column id=\"STL_AM2\" type=\"STRING\" size=\"256\"/><Column id=\"STL_METHC3\" type=\"STRING\" size=\"256\"/><Column id=\"STL_AM3\" type=\"STRING\" size=\"256\"/><Column id=\"STL_METHC4\" type=\"STRING\" size=\"256\"/><Column id=\"STL_AM4\" type=\"STRING\" size=\"256\"/><Column id=\"SPRTT\" type=\"STRING\" size=\"256\"/><Column id=\"TXA_TT\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"RQR_STS_C\" type=\"STRING\" size=\"256\"/><Column id=\"RPBC_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BYNG_SL_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"RSP_C\" type=\"STRING\" size=\"256\"/><Column id=\"RSP_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"RQR_CHAN_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_PBC_RQR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SMS_PBC_RQR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_PBC_RQR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_TAX_PBC_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_TAX_NTS_TMS_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"ISTT_PBC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PBC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ERP_REF_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ASP_TMS_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"ASP_RSP_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_C\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"BRC\" type=\"STRING\" size=\"256\"/><Column id=\"BRNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TEAMNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_CLNT_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_CLNT_TEAMNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TOT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TOT_DSNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TOT_DTI_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TOT_DTI_DSNM\" type=\"STRING\" size=\"256\"/><Column id=\"TXBZ_TP_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"TXBZ_TP_PBCNM\" type=\"STRING\" size=\"256\"/><Column id=\"RC_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"HOFC_BAT_RG_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"INPMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"APVMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"ELSG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DCZ_UYN\" type=\"STRING\" size=\"256\"/><Column id=\"ASP_ETR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_R_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"VENDER_C\" type=\"STRING\" size=\"256\"/><Column id=\"ORR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ORR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_01\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_02\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_03\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_04\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_05\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_06\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_07\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_08\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_09\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_10\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_11\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_12\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_13\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_14\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_15\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_16\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_17\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_18\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_19\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_20\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_21\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_22\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_23\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_24\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_25\" type=\"STRING\" size=\"256\"/><Column id=\"SOAC_PBC_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"ELSG_CNTN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_elsg", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PBC_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"ELSG_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_R_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_combo2", this);
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

            obj = new Dataset("ds_item", this);
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

            obj = new Dataset("dsTaxForSvc", this);
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

            obj = new Dataset("ds_buyer", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_condition", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STARTDT\" type=\"STRING\" size=\"256\"/><Column id=\"ENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"NTS_TMS_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_KD\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"CODE01\" type=\"STRING\" size=\"256\"/><Column id=\"CODE02\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"RPBC_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_CLNT_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_BZNO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"STARTDT\"/><Col id=\"ENDDT\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_stat_cd", this);
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SIMP_C\">0</Col><Col id=\"SIMP_CNM\">미발행</Col></Row><Row><Col id=\"SIMP_C\">1</Col><Col id=\"SIMP_CNM\">발행</Col></Row><Row><Col id=\"SIMP_C\">2</Col><Col id=\"SIMP_CNM\">취소</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sum", this);
            obj._setContents("<ColumnInfo><Column id=\"SUM_BAC_AM\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SUM_BAC_AM\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_hurMb", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", null, "1", "15", "491", "0", null, this);
            obj.set_taborder("22");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "460", "124", "56", "41", null, null, this);
            obj.set_taborder("40");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("44");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Plugin("TSXMLToolkit", "absolute", "0", "104", null, "21", "710", null, this);
            obj.setProperty("classid", "{BBC1A21F-05A2-44ED-B67E-E7C762F0BE23}");
            obj.setProperty("taborder", "45");
            obj.setProperty("visible", "false");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web_downExcelM", "absolute", "96", "104", null, "20", "654", null, this);
            obj.set_taborder("47");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "75", "15", null, this);
            obj.set_taborder("48");
            obj.set_scrollbars("none");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", "127", "21", null, null, this.div_search);
            obj.set_taborder("113");
            obj.set_text("기준월");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "36", "103", "21", null, null, this.div_search);
            obj.set_taborder("114");
            obj.set_text("공급업체");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "437", "36", "97", "21", null, null, this.div_search);
            obj.set_taborder("120");
            obj.set_text("발행상태");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_issue_stat", "absolute", "534", "36", "113", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("121");
            obj.set_innerdataset("ds_stat_cd");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_enable("true");
            obj.set_index("-1");
            obj = new Static("Static03", "absolute", "437", "10", "97", "21", null, null, this.div_search);
            obj.set_taborder("122");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_trpl_corp_no", "absolute", "534", "10", "190", "21", null, null, this.div_search);
            obj.set_taborder("123");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_trpl_corp_nm", "absolute", "106", "36", "157", "21", null, null, this.div_search);
            obj.set_taborder("131");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup", "absolute", "266", "36", "21", "21", null, null, this.div_search);
            obj.set_taborder("132");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_na_trpl_c", "absolute", "290", "36", "117", "21", null, null, this.div_search);
            obj.set_taborder("133");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("cal_bas_ym", "absolute", "106", "10", "100", "21", null, null, this.div_search);
            obj.set_taborder("137");
            obj.set_url("common::calendarMonth.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("cal_bas_ym2", "absolute", "218", "10", "100", "21", null, null, this.div_search);
            obj.set_taborder("138");
            obj.set_url("common::calendarMonth.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "207", "11", "10", "21", null, null, this.div_search);
            obj.set_taborder("139");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_grd", "absolute", "0", "103", null, null, "15", "20", this);
            obj.set_taborder("39");
            this.addChild(obj.name, obj);
            obj = new Button("btn_flag", "absolute", "329", "0", null, "12", "332", null, this.div_grd);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_grd.addChild(obj.name, obj);
            obj = new Div("div_paging", "absolute", "28.68%", null, "338", "29", null, "17", this.div_grd);
            obj.set_taborder("6");
            obj.set_text("Div03");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_grd.addChild(obj.name, obj);
            obj = new Grid("grd_byng", "absolute", "0", "62", null, null, "0", "46", this.div_grd);
            obj.set_taborder("9");
            obj.set_binddataset("ds_byng");
            obj.set_cellsizingtype("col");
            obj.set_nodatatext("조회된 건수가 없습니다.");
            obj.set_useselcolor("true");
            obj.set_summarytype("default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"125\"/><Column size=\"108\"/><Column size=\"177\"/><Column size=\"140\"/><Column size=\"181\"/><Column size=\"250\"/><Column size=\"221\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"28\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"기준월\"/><Cell col=\"2\" text=\"발행일자\"/><Cell col=\"3\" text=\"발행상태\"/><Cell col=\"4\" text=\"채권채무원장접수상태\"/><Cell col=\"5\" text=\"공급거래처코드\"/><Cell col=\"6\" text=\"공급거래처 사업자번호\"/><Cell col=\"7\" text=\"공급거래처명\"/><Cell col=\"8\" text=\"잔액\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:ISSUE_STAT=='취소'?'none':'checkbox'\" edittype=\"expr:ISSUE_STAT=='취소'?'none':'checkbox'\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" displaytype=\"normal\" text=\"bind:BAS_YM\" mask=\"####-##\"/><Cell col=\"2\" displaytype=\"date\" text=\"bind:ISSUE_DT\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"normal\" text=\"bind:ISSUE_STAT\"/><Cell col=\"4\" expr=\"expr:BAS_STAT == '1' ? '접수' : ''\"/><Cell col=\"5\" displaytype=\"normal\" text=\"bind:NA_ADJPL_C\"/><Cell col=\"6\" text=\"bind:ADJPL_BIZ_NUMBER\"/><Cell col=\"7\" style=\"align:left;\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:ADJPL_NA_TRPL_N\"/><Cell col=\"8\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:BAC\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" style=\"align:center;\" text=\"합   계\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'SUM_BAC_AM')\"/></Band></Format></Formats>");
            this.div_grd.addChild(obj.name, obj);
            obj = new Combo("cbo_row", "absolute", null, "39", "100", "20", "4", null, this.div_grd);
            this.div_grd.addChild(obj.name, obj);
            var cbo_row_innerdataset = new Dataset("cbo_row_innerdataset", this.div_grd.cbo_row);
            cbo_row_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row><Row><Col id=\"codecolumn\">300</Col><Col id=\"datacolumn\">300</Col></Row><Row><Col id=\"codecolumn\">500</Col><Col id=\"datacolumn\">500</Col></Row><Row><Col id=\"codecolumn\">1000</Col><Col id=\"datacolumn\">1000</Col></Row><Row><Col id=\"codecolumn\">5000</Col><Col id=\"datacolumn\">5000</Col></Row></Rows>");
            obj.set_innerdataset(cbo_row_innerdataset);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("100");
            obj.set_text("100");
            obj.set_index("0");
            obj = new Static("Static00", "absolute", null, "38", "60", "21", "105", null, this.div_grd);
            obj.set_taborder("11");
            obj.set_text("조회건수");
            this.div_grd.addChild(obj.name, obj);

            obj = new Button("btn_publish", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("49");
            obj.set_text("발행");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancle", "absolute", null, "0", "41", "21", "217", null, this);
            obj.set_taborder("50");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_init", "absolute", null, "0", "53", "21", "161", null, this);
            obj.set_taborder("51");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_byng_excel", "absolute", "0", "502", null, null, "15", "-271", this);
            obj.set_taborder("52");
            obj.set_binddataset("ds_byng");
            obj.set_cellsizingtype("col");
            obj.set_nodatatext("조회된 건수가 없습니다.");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"125\"/><Column size=\"108\"/><Column size=\"177\"/><Column size=\"140\"/><Column size=\"181\"/><Column size=\"250\"/><Column size=\"221\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"28\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"기준월\"/><Cell col=\"1\" text=\"발행일자\"/><Cell col=\"2\" text=\"발행상태\"/><Cell col=\"3\" text=\"채권채무원장접수상태\"/><Cell col=\"4\" text=\"공급거래처코드\"/><Cell col=\"5\" text=\"공급거래처 사업자번호\"/><Cell col=\"6\" text=\"공급거래처명\"/><Cell col=\"7\" text=\"잔액\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" text=\"bind:BAS_YM\" mask=\"####-##\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:ISSUE_DT\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"normal\" text=\"bind:ISSUE_STAT\"/><Cell col=\"3\" expr=\"expr:BAS_STAT == '1' ? '접수' : ''\"/><Cell col=\"4\" displaytype=\"normal\" text=\"bind:NA_ADJPL_C\"/><Cell col=\"5\" text=\"bind:ADJPL_BIZ_NUMBER\"/><Cell col=\"6\" style=\"align:left;\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:ADJPL_NA_TRPL_N\"/><Cell col=\"7\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:BAC\"/></Band><Band id=\"summary\"><Cell style=\"align:center;\" text=\"합   계\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'SUM_BAC_AM')\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "118", null, this);
            obj.set_taborder("53");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 75, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("48");
            		p.set_scrollbars("none");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 788, 367, this.div_grd,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("39");

            	}
            );
            this.div_grd.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("잔액장발행관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item3","div_search.cbo_issue_stat","value","ds_condition","TXBIL_STSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","div_search.edt_trpl_corp_no","value","ds_condition","NTS_TMS_SQNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","div_search.edt_na_trpl_c","value","ds_condition","NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
            this._addPreloadList("fdl", "common::calendarMonth.xfdl");
            this._addPreloadList("fdl", "common::calendarMonth.xfdl");
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_PS_BS_1010.xfdl", "lib::comLib.xjs");
        this.addIncludeScript("VAN_PS_BS_1010.xfdl", "lib::comTSToolKit.xjs");
        this.registerScript("VAN_PS_BS_1010.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";
        //include "lib::comTSToolKit.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        this.flag = true;
        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	/*본부 담당자 조회*/
            this.fn_retrieveHurInf();
        	
        	var toDay = this.gfn_today("yyyyMMdd");
        	this.div_search.cal_bas_ym._setValue(this.gfn_firstDate(toDay).substr(0, 6));
        	this.div_search.cal_bas_ym2._setValue(this.gfn_firstDate(toDay).substr(0, 6));
        	
        	this.div_search.cbo_issue_stat.set_index(0);
           //페이지 로딩후 실행부분
            this.gfn_setPortalCommonCode(param);
        }

        //gfn_setCommonCode처리 후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        	trace("fn_commonAfterOnload");
        	//조회된건수가 없습니다.
        	this.div_grd.grd_tax.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_retrieveByngMon = function()
        {
        	var bas_ym 			= this.gfn_nullToEmpty(this.div_search.cal_bas_ym._getValue());
        	var bas_ym2  		= this.gfn_nullToEmpty(this.div_search.cal_bas_ym2._getValue());
        	
        	var trpl_corp_no 	= this.gfn_nullToEmpty(this.div_search.edt_trpl_corp_no.value);
        	var na_trpl_c	 	= this.gfn_nullToEmpty(this.div_search.edt_na_trpl_c.value);
        	var trpl_corp_nm 	= this.gfn_nullToEmpty(this.div_search.edt_trpl_corp_nm.value);
        	var issue_stat 		= this.gfn_nullToEmpty(this.div_search.cbo_issue_stat.value);
        	
        	var params = 	"bas_ym=" 			+ bas_ym 	+ 
        	                " bas_ym2=" 			+ bas_ym2 	+ 
        					" trpl_corp_no=" 	+ trpl_corp_no + 
        					" na_trpl_c=" 		+ na_trpl_c + 
        					" trpl_corp_nm=" 	+ trpl_corp_nm + 
        					" issue_stat=" 		+ issue_stat;
        	
        	var sSvcID        = "retrieveByngMon";
        	var sURL          = "svc::rest/tx/retrieveByngMon";
        	var sInDatasets   = "ds_pageVO=ds_pageVO";
        	var sOutDatasets  = "ds_sum=ds_sum ds_byng=ds_byng ds_pageVO=ds_pageVO";	
        	var sArgument     = params;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0) { //에러
        		trace(">>>>>>>>>>>>>>> svcID ::" +  svcID + ",  ErrorCode :: " + ErrorCode + ",  ErrorMsg :: " + ErrorMsg);
        		switch(svcID) {
        			case "cancleBasSvc" :
        				this.alert(ErrorMsg);
        				this.fn_search();
        				break;	
        				
        			case "publishByngMon" :
        				this.alert(ErrorMsg);
        				this.fn_search();
        				break;
        			case "retrieveHurInf" :
        				this.alert(ErrorMsg);
        				break;
        		}
         	} else  {
        		switch(svcID) {
        			case "retrieveByngMon":
        				if (this.ds_byng.rowcount > 0) { 
        					var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        					var sPagesize = this.ds_pageVO.getColumn(0, "PAGE_SIZE");			
        					this.div_grd.div_paging.fn_pageSet(sTotal, sPagesize,"grd_byng,div_paging",lsNowPage);
        				} else if (this.ds_byng.rowcount == 0) {
        					this.div_grd.div_paging.fn_pageSet(0, 0,"grd_byng,div_paging",lsNowPage);//페이징 설정			
        				}
        				this.div_grd.grd_byng.redraw();
        				
        				break;
        			case "publishByngMon":	
        				this.alert(ErrorMsg + "건이 발행되었습니다.");
        				this.fn_search();
        				break;	
        			case "cancleBasSvc" :
        				this.fn_search();
        				break;
        			case "retrieveHurInf" :
        				if(this.ds_hurMb.getColumn(0, "MB_ID") == application.gv_userId){
        					this.btn_publish.set_enable(true);
        				}
        				break;
        		}
         	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.common_onclick = function(obj,e)
        {
        	switch(obj.name) {
        		case "btn_search":	
        			this.fn_search();
        			break;
        		case "btn_popup":
        			//var codes = this.gfn_nullToEmpty(this.div_search.edt_data02.value);
        			var codes="";
        			var texts = this.gfn_nullToEmpty(this.div_search.edt_trpl_corp_nm.value);
        			
        			var param = {
        						autoType:false,
        						searchCode:codes,
        						searchText:texts
        			};
        			if (typeof params == "boolean") {
        				if(!this.searPopValue(param)){return};
        			}
        			this.fn_openTrpl();
        			break;
        		case "btn_publish"://채권채무 발행
        			if (this.ds_byng.getCaseCount("ISCHECKED=='1'") < 1) {
        				alert("하나의 행을 선택해주세요.");
        				return false;
        			}
        			if (this.fn_validationChk()) {
        				this.fn_publish();
        			} else {
        				return false;
        			}		
        			break;
        		case "btn_cancle":
        			if (this.ds_byng.getCaseCount("ISCHECKED=='1'") < 1) {
        				alert("하나의 행을 선택해주세요.");
        				return false;
        			}
        			if (this.fn_cancleVlidationChk()) {
        				this.fn_cancle();
        			} else {
        				return false;
        			}		
        			break;
        		case "btn_excel":
        			this.fn_excel();
        			break;
        	} 
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_cancleVlidationChk = function()
        {	
        	for (var i = 0; i < this.ds_byng.rowcount; i++) {
        		trace("ISSUE_STAT_CD : " + this.ds_byng.getColumn(i, "ISSUE_STAT_CD"));
        		
        		if (this.ds_byng.getColumn(i, "ISCHECKED") == 1) {
        			if (this.ds_byng.getColumn(i, "ISSUE_STAT_CD") == 2) {
        				alert("기존 취소건이 존재합니다.");
        				return false;
        			} else if (this.ds_byng.getColumn(i, "BAS_STAT") == 1) {
        				alert("이미 접수된 건은 취소할 수 없습니다.");
        				return false;
        			} else if (this.ds_byng.getColumn(i, "BAS_STAT") == 2) {
        				alert("이미 접수된 건은 취소할 수 없습니다.");
        				return false;
        			}
        		}
        	}
        	return true;
        }

        this.fn_validationChk = function()
        {
        	var existZero = false;
        	
        	for (var i = 0; i < this.ds_byng.rowcount; i++) {
        		//trace("ISSUE_STAT_CD : " + this.ds_byng.getColumn(i, "ISSUE_STAT_CD"));
        		if (this.ds_byng.getColumn(i, "ISCHECKED") == 1) {
        			if (this.ds_byng.getColumn(i, "ISSUE_STAT_CD") == 1 || this.ds_byng.getColumn(i, "ISSUE_STAT_CD") == 2) {
        				alert("기존 발행 또는 취소건이 존재합니다.");
        				return false;
        			} else if (this.ds_byng.getColumn(i, "BAC") == "0") {
        				existZero = true;
        				this.ds_byng.setColumn(i, "ISCHECKED", 0);
        				//alert("잔액이 0인것은 발행할 수 없습니다.");
        				//return false;
        			} else if (this.ds_byng.getColumn(i, "BAC")*1 < 0) {
        				//alert("음수금액이 존재합니다. \n 농협하나로유통 담당자에게 확인바랍니다.  ");
        				//return false;
        			}
        		}
        	}
        	
        	if (existZero) {
        		alert("잔액이 0인 건은 발행할 수 없으므로 선택에서 제외하였습니다.");
        	}
        	
        	return true;
        }

        this.fn_publish = function()
        {	
        	var bas_ym 			= this.gfn_nullToEmpty(this.div_search.cal_bas_ym._getValue());
        	var trpl_corp_no 	= this.gfn_nullToEmpty(this.div_search.edt_trpl_corp_no.value);
        	var na_trpl_c	 	= this.gfn_nullToEmpty(this.div_search.edt_na_trpl_c.value);
        	var trpl_corp_nm 	= this.gfn_nullToEmpty(this.div_search.edt_trpl_corp_nm.value);
        	var issue_stat 		= this.gfn_nullToEmpty(this.div_search.cbo_issue_stat.value);
        		
        	var params = 	"bas_ym=" 			+ bas_ym 	+ 
        					" trpl_corp_no=" 	+ trpl_corp_no + 
        					" na_trpl_c=" 		+ na_trpl_c + 
        					" trpl_corp_nm=" 	+ trpl_corp_nm + 
        					" issue_stat=" 			+ issue_stat;
        					
        	var sSvcID        = "publishByngMon";
        	var sURL          = "svc::rest/tx/publishByngMon";
        	var sInDatasets   = "ds_pageVO=ds_pageVO ds_byng=ds_byng ";
        	var sOutDatasets  = "ds_pageVO=ds_pageVO";	
        	var sArgument     = params;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_openTrpl = function()
        {
        	var oArg = {searchWord:this.div_search.edt_trpl_corp_nm.value};
        	var sOption = "autosize=true,title=false";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("POPUP_TRPL","POPUP::POPUP_SRC_RVOPL_TRPL.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.fn_cancle = function()
        {
        	var bas_ym 			= this.gfn_nullToEmpty(this.div_search.cal_bas_ym._getValue());
        	var trpl_corp_no 	= this.gfn_nullToEmpty(this.div_search.edt_trpl_corp_no.value);
        	var na_trpl_c	 	= this.gfn_nullToEmpty(this.div_search.edt_na_trpl_c.value);
        	var trpl_corp_nm 	= this.gfn_nullToEmpty(this.div_search.edt_trpl_corp_nm.value);
        	var issue_stat 		= this.gfn_nullToEmpty(this.div_search.cbo_issue_stat.value);
        		
        	var params = 	"bas_ym=" 			+ bas_ym 	+ 
        					" trpl_corp_no=" 	+ trpl_corp_no + 
        					" na_trpl_c=" 		+ na_trpl_c + 
        					" trpl_corp_nm=" 	+ trpl_corp_nm + 
        					" issue_stat=" 		+ issue_stat;
        					
        					
        	var sSvcID        = "cancleBasSvc";
        	var sURL          = "svc::rest/tx/cancleBasSvc";
        	var sInDatasets   = "ds_pageVO=ds_pageVO ds_byng=ds_byng ";
        	var sOutDatasets  = "ds_pageVO=ds_pageVO";	
        	var sArgument     = params;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }
        /*
        this.fn_excel = function()
        {
        	var today = this.gfn_today("yyyyMMdd");

        	this.exportObj = new ExcelExportObject("Export00", this);
        	this.exportObj.addEventHandler("onsuccess" , this.fn_excelDownload_onsuccess , this);
        	this.exportObj.addEventHandler("onerror", this.fn_excelDownload_onerror, this);

        	this.exportObj.set_exportfilename("excelBas"+today);
        	this.exportObj.set_exporturl(application.gv_server_url + "XExportImport");
        	this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.grd_byng_excel, "Sheet1!A1");
        	this.exportObj.exportData();
        }

        // 엑셀 다운로드 성공
        this.fn_excelDownload_onsuccess = function(obj:ExcelExportObject, e:nexacro.ExcelExportEventInfo)
        {
        	trace("excel download : success");
        }

        // 엑셀 다운로드 실패
        this.fn_excelDownload_onerror = function(obj:ExcelExportObject, e:nexacro.ExcelExportEventInfo)
        {
        	trace("excel download : error");
        }
        */

        this.btn_excel_onclick = function(obj,e)
        {
        	var bas_ym 			= this.gfn_nullToEmpty(this.div_search.cal_bas_ym._getValue());
        	var bas_ym2  		= this.gfn_nullToEmpty(this.div_search.cal_bas_ym2._getValue());
        	
        	var trpl_corp_no 	= this.gfn_nullToEmpty(this.div_search.edt_trpl_corp_no.value);
        	var na_trpl_c	 	= this.gfn_nullToEmpty(this.div_search.edt_na_trpl_c.value);
        	var trpl_corp_nm 	= this.gfn_nullToEmpty(this.div_search.edt_trpl_corp_nm.value);
        	var issue_stat 		= this.gfn_nullToEmpty(this.div_search.cbo_issue_stat.value);
        	

        	var params = "bas_ym="    + this.gfn_nullToEmpty(bas_ym)		                    // From
        				+"&bas_ym2="  + bas_ym2 						                        // To
        				+"&trpl_corp_no="  +  this.gfn_nullToEmpty(trpl_corp_no)	            // 
        				+"&na_trpl_c="     +  this.gfn_nullToEmpty(na_trpl_c)	                // 
        				+"&trpl_corp_nm="  +  this.gfn_nullToEmpty(trpl_corp_nm)		        // 
        				+"&issue_stat="    +  this.gfn_nullToEmpty(issue_stat)		            // 

        	// this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelByngMon?"+params, this);
        }

        /************************************************************************************************
         * 페이징처리
        ************************************************************************************************/
        this.fn_search = function()
        {
        	this.fn_paging(1);// 처음조회시 1페이지를 조회한다.
        }

        this.fn_paging = function(vPageNum)
        { 	  	 
        	this.ds_byng.clearData();     //Grid에 Binding된 Dataset명
        	this.ds_pageVO.clearData();  
        	this.ds_pageVO.addRow(); 
        	var vPageSize   = this.div_grd.cbo_row.value; 	//Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
        	var vTotalCount = 0; 	//전체건수. 화면조회후 리턴받아 사용
        	
         	this.ds_pageVO.setColumn(0,"CURRENT_PAGE",vPageNum); //현재 페이지
         	this.ds_pageVO.setColumn(0,"PAGE_SIZE",vPageSize);
         	this.ds_pageVO.setColumn(0,"TOTAL_ROW_COUNT",vTotalCount);	 
        	 
        	var argumentObj = "";
        		
        	lsNowPage = vPageNum;//현재페이지 설정 
        	this.fn_retrieveByngMon();
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	//trace(" strId : " + strId + " strVal : " + strVal);
        	switch(strId) {
        		case "POPUP_TRPL":
        			if (!this.gfn_isNull(strVal)) {
        				var strValNo = strVal.split(',');
        				this.div_search.edt_na_trpl_c.set_value(strValNo[0]);
        				this.div_search.edt_trpl_corp_nm.set_value(strValNo[1]);
        				
        				/*
        				this.ds_buyer.clear();
        				
        				for(var i = 0 ; i < strValNo.length ; i++ )
        				{
        					this.ds_buyer.addColumn(strValNo[i].substr(0,strValNo[i].indexOf(":")), "string");
        				}
        				this.ds_buyer.addRow();
        				for(var i = 0 ; i < strValNo.length ; i++ )
        				{
        					this.ds_buyer.setColumn(0, i, strValNo[i].substr(strValNo[i].indexOf(":")+1));
        				}
        				this.div_search.edt_na_trpl_c.set_value(this.ds_buyer.getColumn(0, "NA_TRPL_C"));
        				this.div_search.edt_trpl_corp_nm.set_value(this.ds_buyer.getColumn(0, "CLNTNM"));
        				*/
        			}
        			break;	
        	}
        }

        this.div_grd_grd_byng_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		//전체선택
        		this.gfn_setGridCheckAll(obj,e);
        	}
        }

        this.btn_init_onclick = function(obj,e)
        {
        	this.reload();
        }

        /*본부 담당자 조회*/
        this.fn_retrieveHurInf = function()
        {
        	var sSvcID        = "retrieveHurInf";
        	var sURL          = "svc::rest/tx/retrieveHurInf";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_hurMb=ds_hurMb";	
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.common_onclick, this);
            this.div_search.cbo_issue_stat.addEventHandler("onitemchanged", this.div_search_cbo_stat_onitemchanged, this);
            this.div_search.edt_trpl_corp_no.addEventHandler("onkeydown", this.div_search_edt_NTS_TMS_SQNO_onkeydown, this);
            this.div_search.edt_trpl_corp_nm.addEventHandler("onkeydown", this.edt_suppliee_onkeydown, this);
            this.div_search.edt_trpl_corp_nm.addEventHandler("onchanged", this.div_search_edt_suppliee_onchanged, this);
            this.div_search.btn_popup.addEventHandler("onclick", this.common_onclick, this);
            this.div_grd.btn_flag.addEventHandler("onclick", this.btn_flag_onclick, this);
            this.div_grd.grd_byng.addEventHandler("onheadclick", this.div_grd_grd_byng_onheadclick, this);
            this.div_grd.cbo_row.addEventHandler("onitemchanged", this.div_grd_cbo_row_onitemchanged, this);
            this.btn_publish.addEventHandler("onclick", this.common_onclick, this);
            this.btn_cancle.addEventHandler("onclick", this.common_onclick, this);
            this.btn_init.addEventHandler("onclick", this.btn_init_onclick, this);
            this.grd_byng_excel.addEventHandler("onheadclick", this.div_grd_grd_byng_onheadclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);

        };

        this.loadIncludeScript("VAN_PS_BS_1010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
