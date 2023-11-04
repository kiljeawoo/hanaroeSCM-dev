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
                this.set_name("OMG_DS_TX_2002");
                this.set_titletext("매출세금계산서결과");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_tax", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PBC_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"NTS_TMS_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CRT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_KD\" type=\"STRING\" size=\"256\"/><Column id=\"RCT_RQS_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_C\" type=\"STRING\" size=\"256\"/><Column id=\"RMK1\" type=\"STRING\" size=\"256\"/><Column id=\"RMK2\" type=\"STRING\" size=\"256\"/><Column id=\"RMK3\" type=\"STRING\" size=\"256\"/><Column id=\"REV_RPT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BAT_ISU_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BAT_ISU_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REV_TTCN\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_MTALNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_REPMNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_ADR\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_BZTPNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_BZC\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_CHRRNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_CHRR_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_CHRR_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_CHRR_MPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_FAXNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"MTAL\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_REPMNM\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_ADR\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_BZTPNM\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_BZC\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_FAXNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_DEPTNM1\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRRNM1\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRR_TELNO1\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRR_EMAIL1\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRR_MPNO1\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_DEPTNM2\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRRNM2\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRR_TELNO2\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRR_EMAIL2\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRR_MPNO2\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_MTALNM\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_REPMNM\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_ADR\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_BZTPNM\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_BZC\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_CHRRNM\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_CHRR_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_CHRR_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"STL_METHC1\" type=\"STRING\" size=\"256\"/><Column id=\"STL_AM1\" type=\"STRING\" size=\"256\"/><Column id=\"STL_METHC2\" type=\"STRING\" size=\"256\"/><Column id=\"STL_AM2\" type=\"STRING\" size=\"256\"/><Column id=\"STL_METHC3\" type=\"STRING\" size=\"256\"/><Column id=\"STL_AM3\" type=\"STRING\" size=\"256\"/><Column id=\"STL_METHC4\" type=\"STRING\" size=\"256\"/><Column id=\"STL_AM4\" type=\"STRING\" size=\"256\"/><Column id=\"SPRTT\" type=\"STRING\" size=\"256\"/><Column id=\"TXA_TT\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"RQR_STS_C\" type=\"STRING\" size=\"256\"/><Column id=\"RPBC_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BYNG_SL_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"RSP_C\" type=\"STRING\" size=\"256\"/><Column id=\"RSP_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"RQR_CHAN_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_PBC_RQR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SMS_PBC_RQR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_PBC_RQR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_TAX_PBC_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_TAX_NTS_TMS_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"ISTT_PBC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PBC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ERP_REF_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ASP_TMS_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"ASP_RSP_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_C\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"BRC\" type=\"STRING\" size=\"256\"/><Column id=\"BRNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TEAMNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_CLNT_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_CLNT_TEAMNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TOT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TOT_DSNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TOT_DTI_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TOT_DTI_DSNM\" type=\"STRING\" size=\"256\"/><Column id=\"TXBZ_TP_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"TXBZ_TP_PBCNM\" type=\"STRING\" size=\"256\"/><Column id=\"RC_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"HOFC_BAT_RG_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"INPMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"APVMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"ELSG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DCZ_UYN\" type=\"STRING\" size=\"256\"/><Column id=\"ASP_ETR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_R_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"VENDER_C\" type=\"STRING\" size=\"256\"/><Column id=\"ORR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ORR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_01\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_02\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_03\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_04\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_05\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_06\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_07\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_08\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_09\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_10\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_11\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_12\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_13\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_14\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_15\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_16\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_17\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_18\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_19\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_20\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_21\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_22\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_23\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_24\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_25\" type=\"STRING\" size=\"256\"/><Column id=\"SOAC_PBC_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_TCP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/></Rows>");
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

            obj = new Dataset("ds_combo3", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"codecolumn\" type=\"STRING\" size=\"256\"/><Column id=\"datacolumn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">작성일</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">등록일</Col></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"DT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STARTDT\" type=\"STRING\" size=\"256\"/><Column id=\"ENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"NTS_TMS_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_KD\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"CODE01\" type=\"STRING\" size=\"256\"/><Column id=\"CODE02\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"RPBC_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_CLNT_TEAM_C\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"STARTDT\"/><Col id=\"ENDDT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "95", "15", null, this);
            obj.set_taborder("49");
            obj.set_scrollbars("none");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", "127", "21", null, null, this.div_search);
            obj.set_taborder("68");
            obj.set_text("일자");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "36", "103", "21", null, null, this.div_search);
            obj.set_taborder("69");
            obj.set_text("공급받는자");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_suppliee", "absolute", "106", "36", "157", "21", null, null, this.div_search);
            obj.set_taborder("70");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "420", "62", "139", "21", null, null, this.div_search);
            obj.set_taborder("71");
            obj.set_text("사업자번호(공급자)");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_start", "absolute", "176", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("72");
            obj.set_value("20150504");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static06", "absolute", "278", "10", "13", "21", null, null, this.div_search);
            obj.set_taborder("73");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_end", "absolute", "290", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("74");
            obj.set_value("20150716");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Combo("cbo_dt", "absolute", "106", "10", "67", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_dt_innerdataset = new Dataset("cbo_dt_innerdataset", this.div_search.cbo_dt);
            cbo_dt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">작성일</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">등록일</Col></Row></Rows>");
            obj.set_innerdataset(cbo_dt_innerdataset);
            obj.set_taborder("75");
            obj.set_value("1");
            obj.set_text("작성일");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj = new Button("btn_popup", "absolute", "266", "36", "21", "21", null, null, this.div_search);
            obj.set_taborder("78");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_suppliee2", "absolute", "290", "36", "100", "21", null, null, this.div_search);
            obj.set_taborder("79");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "420", "36", "74", "21", null, null, this.div_search);
            obj.set_taborder("80");
            obj.set_text("승인번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_NTS_TMS_SQNO", "absolute", "556", "36", "215", "21", null, null, this.div_search);
            obj.set_taborder("81");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_BizNo", "absolute", "556", "62", "215", "21", null, null, this.div_search);
            obj.set_taborder("88");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "15", "62", "118", "21", null, null, this.div_search);
            obj.set_taborder("89");
            obj.set_text("계산서종류");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_kind", "absolute", "106", "62", "113", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_kind_innerdataset = new Dataset("cbo_kind_innerdataset", this.div_search.cbo_kind);
            cbo_kind_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">일반세금계산서</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">수정세금계산서</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">일반계산서</Col></Row><Row><Col id=\"codecolumn\">04</Col><Col id=\"datacolumn\">수정일반계산서</Col></Row></Rows>");
            obj.set_innerdataset(cbo_kind_innerdataset);
            obj.set_taborder("90");
            obj.set_text("전체");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj = new CheckBox("chk_01", "absolute", "226", "62", "57", "21", null, null, this.div_search);
            obj.set_taborder("91");
            obj.set_text("일반");
            obj.set_value("01");
            obj.set_truevalue("01");
            obj.set_falsevalue("99");
            this.div_search.addChild(obj.name, obj);
            obj = new CheckBox("chk_02", "absolute", "288", "62", "59", "21", null, null, this.div_search);
            obj.set_taborder("92");
            obj.set_text("영세");
            obj.set_value("99");
            obj.set_truevalue("02");
            obj.set_falsevalue("99");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "420", "10", "55", "21", null, null, this.div_search);
            obj.set_taborder("93");
            obj.set_text("상태");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_stat", "absolute", "556", "10", "113", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("94");
            obj.set_innerdataset("@ds_combo");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj = new Combo("cbo_num", "absolute", "702", "10", "54", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_num_innerdataset = new Dataset("cbo_num_innerdataset", this.div_search.cbo_num);
            cbo_num_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row><Row><Col id=\"codecolumn\">150</Col><Col id=\"datacolumn\">150</Col></Row><Row><Col id=\"codecolumn\">200</Col><Col id=\"datacolumn\">200</Col></Row><Row><Col id=\"codecolumn\">250</Col><Col id=\"datacolumn\">250</Col></Row><Row><Col id=\"codecolumn\">300</Col><Col id=\"datacolumn\">300</Col></Row></Rows>");
            obj.set_innerdataset(cbo_num_innerdataset);
            obj.set_taborder("96");
            obj.set_value("100");
            obj.set_text("100");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj = new Static("Static07", "absolute", "690", "10", "20", "21", null, null, this.div_search);
            obj.set_taborder("97");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "759", "10", "20", "21", null, null, this.div_search);
            obj.set_taborder("98");
            obj.set_text("건");
            this.div_search.addChild(obj.name, obj);

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

            obj = new Div("div_grd", "absolute", "0", "123", null, null, "15", "0", this);
            obj.set_taborder("39");
            this.addChild(obj.name, obj);
            obj = new Button("btn_flag", "absolute", "329", "0", null, "12", "332", null, this.div_grd);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_grd.addChild(obj.name, obj);
            obj = new Button("btn_excel", "absolute", null, "16", "89", "21", "0", null, this.div_grd);
            obj.set_taborder("4");
            obj.set_text("엑셀다운로드");
            this.div_grd.addChild(obj.name, obj);
            obj = new Button("btn_publish", "absolute", null, "16", "77", "21", "228", null, this.div_grd);
            obj.set_taborder("5");
            obj.set_text("발행및신고");
            obj.set_visible("false");
            this.div_grd.addChild(obj.name, obj);
            obj = new Div("div_paging", "absolute", "225", null, "338", "29", null, "0", this.div_grd);
            obj.set_taborder("6");
            obj.set_text("Div03");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_grd.addChild(obj.name, obj);
            obj = new Button("btn_print", "absolute", null, "16", "137", "21", "92", null, this.div_grd);
            obj.set_taborder("8");
            obj.set_text("매출(세금)계산서출력");
            obj.set_visible("true");
            this.div_grd.addChild(obj.name, obj);
            obj = new Grid("grd_tax", "absolute", "0", "42", null, null, "0", "29", this.div_grd);
            obj.set_taborder("10");
            obj.set_binddataset("ds_tax");
            obj.set_cellsizingtype("col");
            obj.set_nodatatext("조회된 건수가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"125\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"170\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"발행상태\"/><Cell col=\"2\" text=\"세금계산서종류\"/><Cell col=\"3\" text=\"작성일자\"/><Cell col=\"4\" text=\"등록일자\"/><Cell col=\"5\" text=\"공급받는자상호\"/><Cell col=\"6\" text=\"공급받는자&#13;&#10;사업자번호\"/><Cell col=\"7\" text=\"공급자상호\"/><Cell col=\"8\" text=\"공급자&#13;&#10;사업자번호\"/><Cell col=\"9\" text=\"품목\"/><Cell col=\"10\" text=\"공급가액\"/><Cell col=\"11\" text=\"세액\"/><Cell col=\"12\" text=\"합계액\"/><Cell col=\"13\" text=\"매출사업장/팀코드\"/><Cell col=\"14\" text=\"매출사업장명\"/><Cell col=\"15\" text=\"매입사업장/팀코드\"/><Cell col=\"16\" text=\"매입사업자명\"/><Cell col=\"17\" text=\"승인번호\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" displaytype=\"normal\" text=\"bind:TXBIL_STSC\"/><Cell col=\"2\" text=\"bind:TXBIL_KD\"/><Cell col=\"3\" displaytype=\"date\" text=\"bind:CRT_DT\"/><Cell col=\"4\" displaytype=\"date\" text=\"bind:RG_DT\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:BUY_MTALNM\"/><Cell col=\"6\" text=\"bind:BUY_BZNO\"/><Cell col=\"7\" style=\"align:left;\" text=\"bind:SPLR_MTALNM\" maskchar=\" \"/><Cell col=\"8\" text=\"bind:SPLR_BZNO\"/><Cell col=\"9\" edittype=\"none\" style=\"align:left;selectfont: ;\" text=\"bind:LATCNM\" tooltiptext=\"bind:LATCNM\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SPRTT\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TXA_TT\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TOT_AM\"/><Cell col=\"13\" text=\"bind:NA_TRPL_C_TEAM_C\"/><Cell col=\"14\" style=\"align:left;\" text=\"bind:NA_CLNTNM\"/><Cell col=\"15\" text=\"bind:NA_BZPLC_TEAM_C\"/><Cell col=\"16\" style=\"align:left;\" text=\"bind:NA_BZPLNM\"/><Cell col=\"17\" text=\"bind:NTS_TMS_SQNO\"/></Band></Format></Formats>");
            this.div_grd.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("44");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Plugin("TSXMLToolkit", "absolute", "384", "139", null, "21", "326", null, this);
            obj.setProperty("classid", "{BBC1A21F-05A2-44ED-B67E-E7C762F0BE23}");
            obj.setProperty("taborder", "45");
            obj.setProperty("visible", "false");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web_downExcelM", "absolute", "326", "139", null, "20", "424", null, this);
            obj.set_taborder("46");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "72", null, this);
            obj.set_taborder("47");
            obj.set_text("div_auth");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 95, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("49");
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
            		p.set_titletext("매출세금계산서결과");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item4","div_search.cbo_num","value","ds_condition","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","div_search.cbo_stat","value","ds_condition","TXBIL_STSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","div_search.chk_02","value","ds_condition","CODE02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","div_search.chk_01","value","ds_condition","CODE01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","div_search.cbo_kind","value","ds_condition","TXBIL_KD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","div_search.cbo_dt","value","ds_condition","DT_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_search.cal_start","value","ds_condition","STARTDT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_search.cal_end","value","ds_condition","ENDDT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","div_search.edt_NTS_TMS_SQNO","value","ds_condition","NTS_TMS_SQNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","div_search.edt_BizNo","value","ds_condition","SPLR_BZNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","div_search.edt_suppliee","value","ds_condition","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","div_search.edt_suppliee2","value","ds_condition","NA_BZPLC");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
            this._addPreloadList("fdl", "common::location.xfdl");
            this._addPreloadList("fdl", "common::AuthorityWorkplace.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_TX_2002.xfdl", "lib::comLib.xjs");
        this.addIncludeScript("OMG_DS_TX_2002.xfdl", "lib::comTSToolKit.xjs");
        this.registerScript("OMG_DS_TX_2002.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";
        //include "lib::comTSToolKit.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/

        this.enter = false;
        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
           //페이지 로딩후 실행부분
           var param = [  
         		{code:"TXBIL_STSC",   dsName:"ds_combo",   selecttype:"A"}
            ];
            
        	this.gfn_setPortalCommonCode(param);
        	this.div_auth.setFunctionName("fn_setAuthorityWorkplace");
        }

        //gfn_setCommonCode처리 후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        	trace("fn_commonAfterOnload");
        	//조회된건수가 없습니다.
        	this.div_grd.grd_tax.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	
        	
        	//세금계산서발행상태코드 설정
        	//this.ds_combo.deleteRow(this.ds_combo.findRow("SIMP_C", "01"));//수신상태는 제외한다.
        	
            var nRow = this.ds_combo.findRow("SIMP_C", "all");
            
            if(nRow > -1)
            {
        		this.ds_combo.setColumn(nRow, "SIMP_C", "01,02,04,05,07,99,00");
            }
        	
        	//조회설정
            this.ds_condition.setColumn(0, "DT_TYPE", "1");//1:작성일 2:등록일
            this.ds_condition.setColumn(0, "STARTDT", this.gfn_firstDate(this.gfn_addMonth(this.gfn_today("yyyyMMdd"),-1)));
            this.ds_condition.setColumn(0, "ENDDT", this.gfn_today("yyyyMMdd"));
            
            this.ds_condition.setColumn(0, "TXBIL_KD", "");//01:일반세금02:일반수정03:일반04수정
            this.ds_condition.setColumn(0, "CODE01", "01");//01:일반02:영세율99:검색안함
            this.ds_condition.setColumn(0, "CODE02", "99");
            
            this.ds_condition.setColumn(0, "TXBIL_STSC", "00");//02:미발행04:발행05:발행취소07:국세청접수99:발행오류00:국세청신고완료
            this.ds_condition.setColumn(0, "RPBC_DSC", "2");//1:순발행  2:역발행
            this.ds_condition.setColumn(0, "NA_BZPLC", "");//사업장코드
            this.ds_condition.setColumn(0, "NA_TRPL_C", application.gv_glnCode);//거래처코드
            
            this.ds_condition.setColumn(0, "SPLR_BZNO", application.gv_bizNumber);
            this.ds_condition.setColumn(0, "BUY_BZNO", "");
            this.ds_condition.setColumn(0, "NTS_TMS_SQNO", "");
           
            this.btn_search.click();
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_retrieveTaxBillList = function()
        {
        	if(this.div_auth.chk_all.value == true)
        	{
        		//권한사업장 코드
        		this.ds_condition.setColumn(0,"NA_TRPL_C", this.getTrplCode());
        	}
        	else
        	{
        		if(this.div_auth.visible == true)
        		{
        			this.ds_condition.setColumn(0,"NA_TRPL_C", this.div_auth.cbo_authorityWorkplace.value);
        		}
        	}
        	if(this.fn_chkDatePeriod())
        	{
        		var sSvcID        = "retrieveTaxBillList";
        		var sURL          = "svc::rest/tx/retrieveTaxBillList";
        		var sInDatasets   = "ds_condition=ds_condition ds_pageVO=ds_pageVO";
        		var sOutDatasets  = "ds_tax=ds_tax ds_pageVO=ds_pageVO";	
        		var sArgument     = "";
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {

        

        	if(ErrorCode < 0) //에러
         	{
        		trace(">>>>>>>>>>>>>>> svcID ::" +  svcID + ",  ErrorCode :: " + ErrorCode + ",  ErrorMsg :: " + ErrorMsg);
         	}
         	else 
         	{
        		switch(svcID)
        		{
        			case "retrieveTaxBillList":
        				if(this.ds_tax.rowcount > 0)
        				{ 
        					var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        					var sPagesize = this.ds_pageVO.getColumn(0, "PAGE_SIZE");
        								
        					this.div_grd.div_paging.fn_pageSet(sTotal, sPagesize,"grd_tax,div_paging",lsNowPage);	
        									  
        				}
        				else if(this.ds_tax.rowcount == 0)
        				{
        					this.div_grd.div_paging.fn_pageSet(0, 0,"grd_tax,div_paging",lsNowPage);//페이징 설정			
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
        	switch(obj.name)
        	{
        		case "btn_search":	
        			this.fn_search();
        			break;
        			
        		case "btn_excel": 
        			if(this.ds_tax.rowcount < 1)
        			{
        				alert("조회내용이 없습니다.");
        				return;
        			}

        			var params = "DT_TYPE=" + this.gfn_nullToEmpty(this.ds_condition.getColumn(0,"DT_TYPE"))
        						+ "&STARTDT=" + this.gfn_nullToEmpty(this.ds_condition.getColumn(0,"STARTDT"))
        						+ "&ENDDT=" + this.gfn_nullToEmpty(this.ds_condition.getColumn(0,"ENDDT"))
        						+ "&NA_BZPLC=" + this.gfn_nullToEmpty(this.ds_condition.getColumn(0,"NA_BZPLC"))
        						+ "&NA_TRPL_C=" + this.gfn_nullToEmpty(this.ds_condition.getColumn(0,"NA_TRPL_C"))
        						+ "&TXBIL_STSC=" + this.gfn_nullToEmpty(this.ds_condition.getColumn(0,"TXBIL_STSC"))
        						+ "&NTS_TMS_SQNO=" + this.gfn_nullToEmpty(this.ds_condition.getColumn(0,"NTS_TMS_SQNO"))
        						+ "&TXBIL_KD=" + this.gfn_nullToEmpty(this.ds_condition.getColumn(0,"TXBIL_KD"))
        						+ "&SPLR_BZNO=" + this.gfn_nullToEmpty(this.ds_condition.getColumn(0,"SPLR_BZNO"))
        						+ "&CODE01=" + this.gfn_nullToEmpty(this.ds_condition.getColumn(0,"CODE01"))
        						+ "&CODE02=" + this.gfn_nullToEmpty(this.ds_condition.getColumn(0,"CODE02"))
        						+ "&BUY_BZNO=" + this.gfn_nullToEmpty(this.ds_condition.getColumn(0,"BUY_BZNO"))
        						+ "&RPBC_DSC=" + this.gfn_nullToEmpty(this.ds_condition.getColumn(0,"RPBC_DSC"))
        						+ "&NA_TEAM_C=" + this.gfn_nullToEmpty(this.ds_condition.getColumn(0,"NA_TEAM_C"))
        						+ "&NA_CLNT_TEAM_C=" + this.gfn_nullToEmpty(this.ds_condition.getColumn(0,"NA_CLNT_TEAM_C"))
        						+ "&TOTAL_ROW_COUNT=" + this.gfn_nullToEmpty(this.ds_pageVO.getColumn(0,"TOTAL_ROW_COUNT"))
        						+ "&FORM_ID=" + this.gfn_nullToEmpty(this.getOwnerFrame().arguments["FORM_ID"])
        						+ "&FORM_NM=" + this.gfn_nullToEmpty(this.getOwnerFrame().arguments["FORM_NM"]);
        						
        		    //this.web_downExcelM.set_url(application.gv_server_url+"rest/excel/tx/retrieveTaxBillListExcel?"+params);
        			excelDownHandler(application.gv_server_url+"rest/excel/tx/retrieveTaxBillListExcel?"+params, this);
        			break;
        			
        		case "btn_print":
        			var nRow;
        			var pbcSqno = "";
        			if(this.ds_tax.getCaseCount("ISCHECKED=='1'") > 0)
        			{
        				for(var i = 0 ; i < this.ds_tax.rowcount ; i++)
        				{
        					if(this.ds_tax.getColumn(i, "ISCHECKED") == 1)
        					{
        						pbcSqno = pbcSqno + this.ds_tax.getColumn(i, "PBC_SQNO") + ".";
        					}
        				}
        				var param = {
        					PBC_SQNO:pbcSqno
        				}
        				var ozParam = {
        				sId: 'OMG_DS_TX_SELLER',
        				sUrl: '/rest/oz/tx/retrieveSlTxbilForOz',
        				paramType: 'param',
        				sParam: param
        				}; 
        				this.ozViewer(ozParam ,"ozViewerPotal");
        			}
        			else
        			{
        				alert("하나 이상의 행을 선택해 주십시오.");
        			}
        			break;
        			
        		case "btn_popup":
        			var oArg = {searchWord:this.div_search.edt_suppliee.value};
        			var sOption = "autosize=true,title=true";
        			var sPopupCallBack = "fn_popupAfter";    
        			this.gfn_openPopup("POPUP_BZPLC","OMG.TX::POPUP_BZPLC.xfdl",oArg,sOption,sPopupCallBack);
        			break;
        	}
        }

        this.btn_flag_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_grd);
        }

        this.div_grd_grd_tax_onheadclick = function(obj,e)
        {
        	if(e.cell == 0)
        	{
        		//전체선택
        		this.gfn_setGridCheckAll(obj,e);
        	}
        }

        this.div_grd_grd_tax_oncelldblclick = function(obj,e)
        {
        	if(e.col != 0)
        	{
        		var oArg = {sqNo:this.ds_tax.getColumn(e.row, "PBC_SQNO")};
        		var sOption = "autosize=true, title=true";
        		var sPopupCallBack = "fn_popupAfter";    
        		this.gfn_openPopup("OMG_DS_TX_5001","OMG.TX::OMG_DS_TX_5001.xfdl",oArg,sOption,sPopupCallBack);	
        	}
        }

        this.Calendar_onkeydown = function(obj,e)
        {
        	if(e.keycode == '13')
        	{
        		this.enter = true;
        	}
        }

        this.Calendar_onchanged = function(obj,e)
        {
        	if(this.enter)
        	{
        		obj.updateToDataset();
        		this.btn_search.click();
        	}
        	this.enter = false;
        }

        this.edt_suppliee_onkeydown = function(obj,e)
        {
        	if(e.keycode == '13')
        	{
        		this.div_search.btn_popup.click();
        	}
        }

        this.div_search_edt_suppliee_onchanged = function(obj,e)
        {
        	this.div_search.edt_suppliee2.set_value("");
        }

        this.fn_setAuthorityWorkplace = function()
        {
        	this.ds_condition.setColumn(0,"NA_TRPL_C", this.div_auth.cbo_authorityWorkplace.value);
        }
        this.div_search_edt_NTS_TMS_SQNO_onkeydown = function(obj,e)
        {
        	if(e.keycode == '13')
        	{
        		obj.updateToDataset();
        		this.btn_search.click();
        	}
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_popupAfter = function(strId,strVal)
        {
        	trace(" strId : " + strId + " strVal : " + strVal);
        	switch(strId)
        	{
        		case "OMG_DS_TX_5001":
        			this.fn_retrieveTaxBillList();
        			break;
        			
        		case "POPUP_BZPLC":
        			if(!this.gfn_isNull(strVal))
        			{
        				var strValNo = strVal.split(',');
        				this.div_search.edt_suppliee.set_value(strValNo[1]);
        				this.div_search.edt_suppliee2.set_value(strValNo[0]);
        			}
        			break;
        	}
        }

        
        this.fn_chkDatePeriod = function() 
        {
        	if(this.div_search.cal_start.value > this.div_search.cal_end.value)
        	{
        		alert("조회기간을 확인하여 주십시오.");
        		return false;
        	}
        	return true;
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
        	this.ds_pageVO.clearData();  
        	this.ds_tax.clearData();     //Grid에 Binding된 Dataset명
        	
        	this.ds_pageVO.addRow(); 
        	
        	var vPageSize   = this.div_search.cbo_num.value; 	//Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
        	var vTotalCount = 0; 	//전체건수. 화면조회후 리턴받아 사용
        	
         	this.ds_pageVO.setColumn(0,"CURRENT_PAGE",vPageNum); //현재 페이지
         	this.ds_pageVO.setColumn(0,"PAGE_SIZE",vPageSize);
         	this.ds_pageVO.setColumn(0,"TOTAL_ROW_COUNT",vTotalCount);	 
        	 
        	var argumentObj = "";
        		
        	lsNowPage = vPageNum;//현재페이지 설정 
        	
        	this.fn_retrieveTaxBillList();
         
        }

        

        this.web_downExcelM_onusernotify = function(obj,e)
        {
        	
        }

        this.Static01_onclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("ontimer", this.UxForm_ontimer, this);
            this.div_search.edt_suppliee.addEventHandler("onkeydown", this.edt_suppliee_onkeydown, this);
            this.div_search.edt_suppliee.addEventHandler("onchanged", this.div_search_edt_suppliee_onchanged, this);
            this.div_search.cal_start.addEventHandler("onkeydown", this.Calendar_onkeydown, this);
            this.div_search.cal_start.addEventHandler("onchanged", this.Calendar_onchanged, this);
            this.div_search.cal_end.addEventHandler("onkeydown", this.Calendar_onkeydown, this);
            this.div_search.cal_end.addEventHandler("onchanged", this.Calendar_onchanged, this);
            this.div_search.btn_popup.addEventHandler("onclick", this.common_onclick, this);
            this.div_search.edt_NTS_TMS_SQNO.addEventHandler("onkeydown", this.div_search_edt_NTS_TMS_SQNO_onkeydown, this);
            this.div_search.edt_BizNo.addEventHandler("onkeydown", this.div_search_edt_NTS_TMS_SQNO_onkeydown, this);
            this.div_search.cbo_stat.addEventHandler("onitemchanged", this.div_search_cbo_stat_onitemchanged, this);
            this.btn_search.addEventHandler("onclick", this.common_onclick, this);
            this.div_grd.btn_flag.addEventHandler("onclick", this.btn_flag_onclick, this);
            this.div_grd.btn_excel.addEventHandler("onclick", this.common_onclick, this);
            this.div_grd.btn_publish.addEventHandler("onclick", this.common_onclick, this);
            this.div_grd.btn_print.addEventHandler("onclick", this.common_onclick, this);
            this.div_grd.grd_tax.addEventHandler("onheadclick", this.div_grd_grd_tax_onheadclick, this);
            this.div_grd.grd_tax.addEventHandler("oncelldblclick", this.div_grd_grd_tax_oncelldblclick, this);
            this.web_downExcelM.addEventHandler("onusernotify", this.web_downExcelM_onusernotify, this);

        };

        this.loadIncludeScript("OMG_DS_TX_2002.xfdl");
        this.loadPreloadList();
       
    };
}
)();
