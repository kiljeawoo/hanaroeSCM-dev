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
                this.set_name("VAN_PS_BS_1020");
                this.set_titletext("채권채무발행관리");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_bas_svc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_NA_BZPLC_N\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_BZPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"BAS_YM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_ADJPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_ADJPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"ADJPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"BZ_METH_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BLB_DFC_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"CROV_AM\" type=\"STRING\" size=\"256\"/><Column id=\"TXT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"TXT_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"EXTX_AM\" type=\"STRING\" size=\"256\"/><Column id=\"SMA_AM\" type=\"STRING\" size=\"256\"/><Column id=\"LIQ_SPY_AM\" type=\"STRING\" size=\"256\"/><Column id=\"LIQ_SPY_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"VCBX_AM\" type=\"STRING\" size=\"256\"/><Column id=\"STOG_AM\" type=\"STRING\" size=\"256\"/><Column id=\"CBAM\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_STL_AM\" type=\"STRING\" size=\"256\"/><Column id=\"PPY_AM\" type=\"STRING\" size=\"256\"/><Column id=\"BYNG_DC_AM\" type=\"STRING\" size=\"256\"/><Column id=\"MAD_AM\" type=\"STRING\" size=\"256\"/><Column id=\"PY_AM\" type=\"STRING\" size=\"256\"/><Column id=\"PY_CAN_AM\" type=\"STRING\" size=\"256\"/><Column id=\"BAC\" type=\"STRING\" size=\"256\"/><Column id=\"DLAY_INT_OCU_AM\" type=\"STRING\" size=\"256\"/><Column id=\"DLAY_INT_PY_AM\" type=\"STRING\" size=\"256\"/><Column id=\"MRG_AM\" type=\"STRING\" size=\"256\"/><Column id=\"MRG_DLAY_INT\" type=\"STRING\" size=\"256\"/><Column id=\"SPY_AM\" type=\"STRING\" size=\"256\"/><Column id=\"DB_CRC_AM\" type=\"STRING\" size=\"256\"/><Column id=\"CR_CRC_AM\" type=\"STRING\" size=\"256\"/><Column id=\"BYNG_SSDY\" type=\"STRING\" size=\"256\"/><Column id=\"AMN_FEE\" type=\"STRING\" size=\"256\"/><Column id=\"AMN_FEE_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"PHD_FEE\" type=\"STRING\" size=\"256\"/><Column id=\"PHD_FEE_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"AFF_SSDY\" type=\"STRING\" size=\"256\"/><Column id=\"PHD_AFF_SSDY\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_RTU_AM\" type=\"STRING\" size=\"256\"/><Column id=\"VCBX_RTU_AM\" type=\"STRING\" size=\"256\"/><Column id=\"VPLTT_RTU_AM\" type=\"STRING\" size=\"256\"/><Column id=\"RTU_FEE\" type=\"STRING\" size=\"256\"/><Column id=\"RTU_FEE_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"MCDBD_AM\" type=\"STRING\" size=\"256\"/><Column id=\"SEL_SSDY\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_FEE_ARG_AM\" type=\"STRING\" size=\"256\"/><Column id=\"DLAYPZ\" type=\"STRING\" size=\"256\"/><Column id=\"PY_ETC_AM\" type=\"STRING\" size=\"256\"/><Column id=\"VPLTT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"TRPL_CORP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TRPL_CORP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TRPL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"TRPL_CHRG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TRPL_NA_TEAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TRPL_CHRG_MPNO\" type=\"STRING\" size=\"256\"/><Column id=\"TRPL_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_CORP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_CORP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_CHRG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NA_TEAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_CHRG_MPNO\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"BAS_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"CNFM_SIGN_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CNFM_SIGN_DATA\" type=\"STRING\" size=\"256\"/><Column id=\"CNFM_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("ds_bas_cd", this);
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SIMP_CNM\">전체</Col></Row><Row><Col id=\"SIMP_C\">0</Col><Col id=\"SIMP_CNM\">발행</Col></Row><Row><Col id=\"SIMP_C\">1</Col><Col id=\"SIMP_CNM\">접수</Col></Row><Row><Col id=\"SIMP_C\">2</Col><Col id=\"SIMP_CNM\">취소</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sum", this);
            obj._setContents("<ColumnInfo><Column id=\"SUM_BAC_AM\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
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

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("44");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Plugin("TSXMLToolkit", "absolute", "812", "0", "120", "21", null, null, this);
            obj.setProperty("classid", "{BBC1A21F-05A2-44ED-B67E-E7C762F0BE23}");
            obj.setProperty("taborder", "45");
            obj.setProperty("visible", "false");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web_downExcelM", "absolute", "812", "31", "120", "20", null, null, this);
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
            obj.set_text("사업장");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "437", "36", "97", "21", null, null, this.div_search);
            obj.set_taborder("120");
            obj.set_text("문서상태");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_bas_stat", "absolute", "534", "36", "113", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("121");
            obj.set_innerdataset("@ds_bas_cd");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_enable("true");
            obj.set_index("-1");
            obj = new Static("Static03", "absolute", "437", "10", "97", "21", null, null, this.div_search);
            obj.set_taborder("122");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_bzplc_corp_no", "absolute", "534", "10", "190", "21", null, null, this.div_search);
            obj.set_taborder("123");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_bzplc_corp_nm", "absolute", "106", "36", "157", "21", null, null, this.div_search);
            obj.set_taborder("131");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup", "absolute", "266", "36", "21", "21", null, null, this.div_search);
            obj.set_taborder("132");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_adj_na_bzplc", "absolute", "290", "36", "117", "21", null, null, this.div_search);
            obj.set_taborder("133");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("cal_bas_ym", "absolute", "106", "10", "100", "21", null, null, this.div_search);
            obj.set_taborder("137");
            obj.set_url("common::calendarMonth.xfdl");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_init", "absolute", null, "0", "53", "21", "161", null, this);
            obj.set_taborder("51");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Plugin("Plugin00", "absolute", "101.12%", "61", "120", "24", null, null, this);
            obj.setProperty("visible", "false");
            obj.setProperty("classid", "{55D9860A-AB9C-44A1-BB74-75AF7F805333}");
            obj.setProperty("taborder", "52");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("53");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "204", null, this);
            obj.set_taborder("54");
            obj.set_text("div_auth");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "118", null, this);
            obj.set_taborder("55");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_byng_excel", "absolute", "0", "505", null, null, "15", "-274", this);
            obj.set_taborder("56");
            obj.set_binddataset("ds_bas_svc");
            obj.set_cellsizingtype("col");
            obj.set_nodatatext("조회된 건수가 없습니다.");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"125\"/><Column size=\"125\"/><Column size=\"108\"/><Column size=\"140\"/><Column size=\"250\"/><Column size=\"140\"/><Column size=\"250\"/><Column size=\"221\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"28\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"기준월\"/><Cell col=\"1\" text=\"발행일자\"/><Cell col=\"2\" text=\"접수일자\"/><Cell col=\"3\" text=\"문서상태\"/><Cell col=\"4\" text=\"공급처코드\"/><Cell col=\"5\" text=\"공급처명\"/><Cell col=\"6\" text=\"사업장코드\"/><Cell col=\"7\" text=\"사업장명\"/><Cell col=\"8\" text=\"잔액\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" text=\"bind:BAS_YM\" mask=\"####-##\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:ISSUE_DT\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"date\" text=\"bind:CNFM_DT\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"normal\" expr=\"expr:BAS_STAT == '0' ? '발행' : BAS_STAT == '1' ? '접수' : '취소'\"/><Cell col=\"4\" text=\"bind:NA_ADJPL_C\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:NA_ADJPL_N\"/><Cell col=\"6\" displaytype=\"normal\" text=\"bind:ADJ_NA_BZPLC\"/><Cell col=\"7\" style=\"align:left;\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:ADJ_NA_BZPLC_N\"/><Cell col=\"8\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:BAC\"/></Band><Band id=\"summary\"><Cell style=\"align:center;\" text=\"합   계\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'SUM_BAC_AM')\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "460", "124", "56", "41", null, null, this);
            obj.set_taborder("57");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

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
            obj.set_binddataset("ds_bas_svc");
            obj.set_cellsizingtype("col");
            obj.set_nodatatext("조회된 건수가 없습니다.");
            obj.set_useselcolor("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"125\"/><Column size=\"125\"/><Column size=\"108\"/><Column size=\"140\"/><Column size=\"250\"/><Column size=\"140\"/><Column size=\"250\"/><Column size=\"221\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"28\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"기준월\"/><Cell col=\"2\" text=\"발행일자\"/><Cell col=\"3\" text=\"접수일자\"/><Cell col=\"4\" text=\"문서상태\"/><Cell col=\"5\" text=\"공급처코드\"/><Cell col=\"6\" text=\"공급처명\"/><Cell col=\"7\" text=\"사업장코드\"/><Cell col=\"8\" text=\"사업장명\"/><Cell col=\"9\" text=\"잔액\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:BAS_STAT=='2'?'none':'checkbox'\" edittype=\"expr:BAS_STAT=='2'?'none':'checkbox'\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" displaytype=\"normal\" text=\"bind:BAS_YM\" mask=\"####-##\"/><Cell col=\"2\" displaytype=\"date\" text=\"bind:ISSUE_DT\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"date\" text=\"bind:CNFM_DT\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"normal\" expr=\"expr:BAS_STAT == '0' ? '발행' : BAS_STAT == '1' ? '접수' : '취소'\"/><Cell col=\"5\" text=\"bind:NA_ADJPL_C\"/><Cell col=\"6\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:NA_ADJPL_N\"/><Cell col=\"7\" displaytype=\"normal\" text=\"bind:ADJ_NA_BZPLC\"/><Cell col=\"8\" style=\"align:left;\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:ADJ_NA_BZPLC_N\"/><Cell col=\"9\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:BAC\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" style=\"align:center;\" text=\"합   계\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'SUM_BAC_AM')\"/></Band></Format></Formats>");
            this.div_grd.addChild(obj.name, obj);
            obj = new Combo("cbo_row", "absolute", null, "38", "100", "20", "0", null, this.div_grd);
            this.div_grd.addChild(obj.name, obj);
            var cbo_row_innerdataset = new Dataset("cbo_row_innerdataset", this.div_grd.cbo_row);
            cbo_row_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row><Row><Col id=\"codecolumn\">300</Col><Col id=\"datacolumn\">300</Col></Row><Row><Col id=\"codecolumn\">500</Col><Col id=\"datacolumn\">500</Col></Row><Row><Col id=\"codecolumn\">1000</Col><Col id=\"datacolumn\">1000</Col></Row><Row><Col id=\"codecolumn\">5000</Col><Col id=\"datacolumn\">5000</Col></Row></Rows>");
            obj.set_innerdataset(cbo_row_innerdataset);
            obj.set_taborder("10");
            obj.set_value("100");
            obj.set_text("100");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj = new Static("Static00", "absolute", null, "38", "58", "21", "105", null, this.div_grd);
            obj.set_taborder("11");
            obj.set_text("조회건수");
            this.div_grd.addChild(obj.name, obj);
            obj = new Button("btn_publish", "absolute", null, "38", "120", "21", "180", null, this.div_grd);
            obj.set_taborder("12");
            obj.set_text("잔액승인(전자서명)");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_background("#dd0000ff");
            this.div_grd.addChild(obj.name, obj);


            
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
            		p.set_titletext("채권채무발행관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item3","div_search.cbo_bas_stat","value","ds_condition","TXBIL_STSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","div_search.edt_bzplc_corp_no","value","ds_condition","NTS_TMS_SQNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","div_search.edt_adj_na_bzplc","value","ds_condition","NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
            this._addPreloadList("fdl", "common::calendarMonth.xfdl");
            this._addPreloadList("fdl", "common::AuthorityWorkplace.xfdl");
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_PS_BS_1020.xfdl", "lib::comLib.xjs");
        this.addIncludeScript("VAN_PS_BS_1020.xfdl", "lib::comTSToolKit.xjs");
        this.registerScript("VAN_PS_BS_1020.xfdl", function(exports) {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comTSToolKit.xjs", null, exports); }	//include "lib::comTSToolKit.xjs";

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
        	this.div_search.cbo_bas_stat.set_index(0);
        	// 페이지 로딩후 실행부분
        	// 월잔액장에서 넘어오면 자동 검색
        	var temp = this.getOwnerFrame().arguments["FORM_PARAM"];
        	var temps = temp.split("|");
        	if (!this.gfn_isNull(temp) && temps.length > 0) {
        		var BAS_YM = temps[0];
        		var NA_ADJPL_C = temps[1];
        		this.div_search.cal_bas_ym._setValue(BAS_YM);
        		this.div_auth.chk_all.set_value(false);
        		this.div_auth.cbo_authorityWorkplace.set_value(NA_ADJPL_C);
        		this.fn_search();
        	} else {
        		var toDay = this.gfn_today("yyyyMMdd");
        		this.div_search.cal_bas_ym._setValue(this.gfn_firstDate(toDay).substr(0, 6));
        	}
        }

        this.fn_postOnLoad = function()
        {
        	// 월잔액장에서 넘어오면 자동 검색
        	var temp = this.getOwnerFrame().arguments["FORM_PARAM"];
        	var temps = temp.split("|");
        	if (!this.gfn_isNull(temp) && temps.length > 0) {
        		var BAS_YM = temps[0];
        		var NA_ADJPL_C = temps[1];
        		this.div_search.cal_bas_ym._setValue(BAS_YM);
        		this.div_auth.chk_all.set_value(false);
        		this.div_auth.cbo_authorityWorkplace.set_value(NA_ADJPL_C);
        		this.fn_search();
        	}
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_retrieveBasSvc = function()
        {
        	var trplC 			= this.getTrplCode();
        	var bas_ym 			= this.gfn_nullToEmpty(this.div_search.cal_bas_ym._getValue());
        	var bzplc_corp_no 	= this.gfn_nullToEmpty(this.div_search.edt_bzplc_corp_no.value);
        	var adj_na_bzplc	= this.gfn_nullToEmpty(this.div_search.edt_adj_na_bzplc.value);
        	var bzplc_corp_nm 	= this.gfn_nullToEmpty(this.div_search.edt_bzplc_corp_nm.value);
        	var bas_stat 		= this.gfn_nullToEmpty(this.div_search.cbo_bas_stat.value);
        	var params = 	"bas_ym=" 			+ bas_ym 		+
        					" bzplc_corp_no=" 	+ bzplc_corp_no	+
        					" adj_na_bzplc=" 	+ adj_na_bzplc 	+
        					" bzplc_corp_nm=" 	+ bzplc_corp_nm +
        					" bas_stat=" 		+ bas_stat		+
        					" trplC=" 		+ trplC;

        	var sSvcID        = "retrieveBasSvc";
        	var sURL          = "svc::rest/tx/retrieveBasSvc";
        	var sInDatasets   = "ds_pageVO=ds_pageVO";
        	var sOutDatasets  = "ds_pageVO=ds_pageVO ds_bas_svc=ds_bas_svc ds_sum=ds_sum";
        	var sArgument     = params;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		trace(">>>>>>>>>>>>>>> svcID ::" +  svcID + ",  ErrorCode :: " + ErrorCode + ",  ErrorMsg :: " + ErrorMsg);
        		switch (svcID) {
        			case "publishBasSvc":
        				this.alert(ErrorMsg);
        				this.fn_search();
        				break;
        		}
         	} else {
        		switch(svcID) {
        			case "retrieveBasSvc":
        				if (this.ds_bas_svc.rowcount > 0) {
        					var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        					var sPagesize = this.ds_pageVO.getColumn(0, "PAGE_SIZE");

        					this.div_grd.div_paging.fn_pageSet(sTotal, sPagesize,"grd_byng,div_paging",lsNowPage);
        				} else if (this.ds_bas_svc.rowcount == 0) {
        					this.div_grd.div_paging.fn_pageSet(0, 0,"grd_byng,div_paging",lsNowPage);//페이징 설정
        				}
        				this.div_grd.grd_byng.redraw();
        				break;
        			case "publishBasSvc":
        				this.fn_search();
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
        			this.fn_openTrpl();
        			break;
        		case "btn_publish"://채권채무원장 접수
        			/*
        			obj : ActiveX PlugIn
        			sVal : 서명할 데이터
        			sBzno : 사용자 본인 인증시 필요한 데이터 - 본인확인 필요없을시 ""
        			callback : 서명 완료시 콜백받을 함수
        			id : 함수구분값
        			*/
        			/* #################################테스트 데이터 삭제 대상 */
        			if (this.fn_validationChk()) {
        				var sVal = application.gv_userKey;
        				var sBzno = application.gv_bizNumber;

        				this.gfn_signTradeSignForBas(this.Plugin00, sVal, sBzno, "fn_signCallback", "signTradeSign");
        			}
        			break;
        		case "btn_print" :
        			for (var i = 0; i < this.ds_bas_svc.rowcount; i++) {
        				if (this.ds_bas_svc.getColumn(i, "ISCHECKED") == "1" && this.ds_bas_svc.getColumn(i, "BAS_STAT") != 1) {
        					alert("접수된 건만 출력 가능합니다.");
        					return false;
        				}
        			}
        			this.fn_print();
        			break;
        		case "btn_excel":
        			this.fn_excel();
        			break;
        	}
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/

        this.fn_signCallback = function(rtnValue,signId)
        {
        	if (rtnValue == "ERROR") {
        		return false;
        	} else {
        		this.fn_publish(rtnValue);
        	}
        }

        this.fn_validationChk = function()
        {
        	if (this.ds_bas_svc.getCaseCount("ISCHECKED=='1'") < 1) {
        		alert("선택된 행이 없습니다.");
        		return false;
        	}

        	for (var i = 0; i < this.ds_bas_svc.rowcount; i++) {
        		if (this.ds_bas_svc.getColumn(i, "ISCHECKED") == "1") {
        			if (this.ds_bas_svc.getColumn(i, "BAS_STAT") == 1) {
        				alert("이미 접수된 건이 존재합니다.");
        				return false;
        			} else if (this.ds_bas_svc.getColumn(i, "BAS_STAT") == 2) {
        				alert("이미 취소된 건이 존재합니다.");
        				return false;
        			}
        		}
        	}
        	return true;
        }

        this.fn_publish = function(signData)
        {
        	var sSvcID        = "publishBasSvc";
        	var sURL          = "svc::rest/tx/publishBasSvc";
        	var sInDatasets   = "ds_bas_svc=ds_bas_svc ds_pageVO=ds_pageVO";
        	var sOutDatasets  = "ds_bas_svc=ds_bas_svc ds_pageVO=ds_pageVO";
        	var sArgument     = "signData=" + signData;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_openTrpl = function()
        {
        	var oArg = {searchWord:this.div_search.edt_bzplc_corp_nm.value};
        	var sOption = "autosize=true,title=false";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("POPUP_TRPL","OMG.TX::POPUP_BZPLC.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.fn_print = function()
        {
        	var params = "";
        	var cnt = 0;
        	for (var i = 0; i < this.ds_bas_svc.rowcount; i++) {
        		if (this.ds_bas_svc.getColumn(i, "ISCHECKED") == 1) {
        			params  = params +
        			this.ds_bas_svc.getColumn(i, "ADJ_NA_BZPLC") 		+ "|" +
        			this.ds_bas_svc.getColumn(i, "ADJ_BZPL_NA_TEAM_C") 	+ "|" +
        			this.ds_bas_svc.getColumn(i, "BAS_YM") 				+ "|" +
        			this.ds_bas_svc.getColumn(i, "NA_BZPLC") 			+ "|" +
        			this.ds_bas_svc.getColumn(i, "NA_TEAM_C") 			+ "|" +
        			this.ds_bas_svc.getColumn(i, "NA_ADJPL_C") 			+ "|" +
        			this.ds_bas_svc.getColumn(i, "ADJPL_NA_TEAM_C") 	+ "|" +
        			this.ds_bas_svc.getColumn(i, "BZ_METH_DSC") 		+ "|" +
        			this.ds_bas_svc.getColumn(i, "NA_WRS_LCLC") 		+ "|" +
        			this.ds_bas_svc.getColumn(i, "NA_WRS_MCLC") 		+ "|" +
        			this.ds_bas_svc.getColumn(i, "NA_BLB_DFC_DSC") 		+ "/"
        			cnt = cnt + 1;
        		}
        	}
        	if (cnt == 0) {
        		this.alert("출력할 대상을 선택해 주세요");
        		return false;
        	}

        	var param = {
        		params:params
        	};

        	var ozParam = {
        		sId: 'VAN_PS_BS_1020',
        		sUrl: '/rest/oz/pbs/bas/printBasSvc',
        		paramType: 'param',
        		sParam: param
        	};
        	this.ozViewer(ozParam);
        }

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
        this.fn_excelDownload_onsuccess = function(obj,e)
        {
        	//trace("excel download : success");
        }

        // 엑셀 다운로드 실패
        this.fn_excelDownload_onerror = function(obj,e)
        {
        	//trace("excel download : error");
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
        	this.ds_bas_svc.clearData();     //Grid에 Binding된 Dataset명
        	this.ds_pageVO.clearData();
        	this.ds_pageVO.addRow();

        	var vPageSize   = this.div_grd.cbo_row.value; 	//Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
        	var vTotalCount = 0; 	//전체건수. 화면조회후 리턴받아 사용

         	this.ds_pageVO.setColumn(0,"CURRENT_PAGE",vPageNum); //현재 페이지
         	this.ds_pageVO.setColumn(0,"PAGE_SIZE",vPageSize);
         	this.ds_pageVO.setColumn(0,"TOTAL_ROW_COUNT",vTotalCount);

        	var argumentObj = "";

        	lsNowPage = vPageNum;//현재페이지 설정
        	this.fn_retrieveBasSvc();
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	// trace(" strId : " + strId + " strVal : " + strVal);
        	if (strId == "POPUP_TRPL") {
        		if (!this.gfn_isNull(strVal)) {
        			var strValNo = strVal.split(',');
        			this.div_search.edt_adj_na_bzplc.set_value(strValNo[0]);
        			this.div_search.edt_bzplc_corp_nm.set_value(strValNo[1]);

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
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.common_onclick, this);
            this.div_search.cbo_bas_stat.addEventHandler("onitemchanged", this.div_search_cbo_stat_onitemchanged, this);
            this.div_search.edt_bzplc_corp_no.addEventHandler("onkeydown", this.div_search_edt_NTS_TMS_SQNO_onkeydown, this);
            this.div_search.edt_bzplc_corp_nm.addEventHandler("onkeydown", this.edt_suppliee_onkeydown, this);
            this.div_search.edt_bzplc_corp_nm.addEventHandler("onchanged", this.div_search_edt_suppliee_onchanged, this);
            this.div_search.btn_popup.addEventHandler("onclick", this.common_onclick, this);
            this.btn_init.addEventHandler("onclick", this.btn_init_onclick, this);
            this.btn_print.addEventHandler("onclick", this.common_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.common_onclick, this);
            this.grd_byng_excel.addEventHandler("oncellclick", this.div_grd_grd_byng_oncellclick, this);
            this.grd_byng_excel.addEventHandler("onheadclick", this.div_grd_grd_byng_onheadclick, this);
            this.div_grd.btn_flag.addEventHandler("onclick", this.btn_flag_onclick, this);
            this.div_grd.grd_byng.addEventHandler("onheadclick", this.div_grd_grd_byng_onheadclick, this);
            this.div_grd.grd_byng.addEventHandler("oncellclick", this.div_grd_grd_byng_oncellclick, this);
            this.div_grd.cbo_row.addEventHandler("onitemchanged", this.div_grd_cbo_row_onitemchanged, this);
            this.div_grd.btn_publish.addEventHandler("onclick", this.common_onclick, this);

        };

        this.loadIncludeScript("VAN_PS_BS_1020.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
