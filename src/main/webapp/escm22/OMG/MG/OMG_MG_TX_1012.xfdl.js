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
                this.set_name("OMG_DS_TX_1012");
                this.set_titletext("사용료세금계산서발행");
                this.set_enable("true");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_taxDetail", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PBC_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"DTL_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"TR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LATCNM\" type=\"STRING\" size=\"256\"/><Column id=\"STD\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"QT\" type=\"STRING\" size=\"256\"/><Column id=\"UPR\" type=\"STRING\" size=\"256\"/><Column id=\"SPPR\" type=\"STRING\" size=\"256\"/><Column id=\"TXA\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"TR_DT_MON\" type=\"STRING\" size=\"256\"/><Column id=\"TR_DT_DAY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_tax", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PBC_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"NTS_TMS_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CRT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_KD\" type=\"STRING\" size=\"256\"/><Column id=\"RCT_RQS_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_C\" type=\"STRING\" size=\"256\"/><Column id=\"RMK1\" type=\"STRING\" size=\"256\"/><Column id=\"RMK2\" type=\"STRING\" size=\"256\"/><Column id=\"RMK3\" type=\"STRING\" size=\"256\"/><Column id=\"REV_RPT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BAT_ISU_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BAT_ISU_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REV_TTCN\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_MTALNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_REPMNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_ADR\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_BZTPNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_BZC\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_CHRRNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_CHRR_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_CHRR_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_CHRR_MPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_FAXNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_MTALNM\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_REPMNM\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_ADR\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_BZTPNM\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_BZC\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_FAXNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_DEPTNM1\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRRNM1\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRR_TELNO1\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRR_EMAIL1\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRR_MPNO1\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_DEPTNM2\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRRNM2\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRR_TELNO2\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRR_EMAIL2\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRR_MPNO2\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_MTALNM\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_REPMNM\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_ADR\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_BZTPNM\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_BZC\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_CHRRNM\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_CHRR_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_CHRR_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"STL_METHC1\" type=\"STRING\" size=\"256\"/><Column id=\"STL_AM1\" type=\"STRING\" size=\"256\"/><Column id=\"STL_METHC2\" type=\"STRING\" size=\"256\"/><Column id=\"STL_AM2\" type=\"STRING\" size=\"256\"/><Column id=\"STL_METHC3\" type=\"STRING\" size=\"256\"/><Column id=\"STL_AM3\" type=\"STRING\" size=\"256\"/><Column id=\"STL_METHC4\" type=\"STRING\" size=\"256\"/><Column id=\"STL_AM4\" type=\"STRING\" size=\"256\"/><Column id=\"SPRTT\" type=\"STRING\" size=\"256\"/><Column id=\"TXA_TT\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"RQR_STS_C\" type=\"STRING\" size=\"256\"/><Column id=\"RPBC_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BYNG_SL_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"RSP_C\" type=\"STRING\" size=\"256\"/><Column id=\"RSP_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"RQR_CHAN_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_PBC_RQR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SMS_PBC_RQR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_PBC_RQR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_TAX_PBC_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_TAX_NTS_TMS_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"ISTT_PBC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PBC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ERP_REF_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ASP_TMS_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"ASP_RSP_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_C\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"BRC\" type=\"STRING\" size=\"256\"/><Column id=\"BRNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TEAMNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_CLNT_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_CLNT_TEAMNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TOT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TOT_DSNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TOT_DTI_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TOT_DTI_DSNM\" type=\"STRING\" size=\"256\"/><Column id=\"TXBZ_TP_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"TXBZ_TP_PBCNM\" type=\"STRING\" size=\"256\"/><Column id=\"RC_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"HOFC_BAT_RG_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"INPMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"APVMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"ELSG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DCZ_UYN\" type=\"STRING\" size=\"256\"/><Column id=\"ASP_ETR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_R_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"VENDER_C\" type=\"STRING\" size=\"256\"/><Column id=\"ORR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ORR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG1\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG2\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG3\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG4\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG5\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG6\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG7\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG8\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG9\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG10\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG11\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG12\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG13\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG14\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG15\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG16\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG17\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG18\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG19\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG20\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG21\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG22\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG23\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG24\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG25\" type=\"STRING\" size=\"256\"/><Column id=\"SOAC_PBC_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"256\"/><Column id=\"NTS_PRC_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"PKG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_CHRR_MPNO_ENCR\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_BZNO_ENCR\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_BZNO_ENCR\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_ID_TXREG\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_ID_TXREG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column5\">2015-04-04</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">7</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">8</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_supplier", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_buyer", this);
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

            obj = new Dataset("ds_taxCopy", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"PBC_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"NTS_TMS_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CRT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_KD\" type=\"STRING\" size=\"256\"/><Column id=\"RCT_RQS_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_C\" type=\"STRING\" size=\"256\"/><Column id=\"RMK1\" type=\"STRING\" size=\"256\"/><Column id=\"RMK2\" type=\"STRING\" size=\"256\"/><Column id=\"RMK3\" type=\"STRING\" size=\"256\"/><Column id=\"REV_RPT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BAT_ISU_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BAT_ISU_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REV_TTCN\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_MTALNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_REPMNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_ADR\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_BZTPNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_BZC\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_CHRRNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_CHRR_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_CHRR_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_CHRR_MPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_FAXNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"MTAL\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_REPMNM\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_ADR\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_BZTPNM\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_BZC\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_FAXNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_DEPTNM1\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRRNM1\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRR_TELNO1\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRR_EMAIL1\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRR_MPNO1\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_DEPTNM2\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRRNM2\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRR_TELNO2\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRR_EMAIL2\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRR_MPNO2\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_MTALNM\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_REPMNM\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_ADR\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_BZTPNM\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_BZC\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_CHRRNM\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_CHRR_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_CHRR_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"STL_METHC1\" type=\"STRING\" size=\"256\"/><Column id=\"STL_AM1\" type=\"STRING\" size=\"256\"/><Column id=\"STL_METHC2\" type=\"STRING\" size=\"256\"/><Column id=\"STL_AM2\" type=\"STRING\" size=\"256\"/><Column id=\"STL_METHC3\" type=\"STRING\" size=\"256\"/><Column id=\"STL_AM3\" type=\"STRING\" size=\"256\"/><Column id=\"STL_METHC4\" type=\"STRING\" size=\"256\"/><Column id=\"STL_AM4\" type=\"STRING\" size=\"256\"/><Column id=\"SPRTT\" type=\"STRING\" size=\"256\"/><Column id=\"TXA_TT\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"RQR_STS_C\" type=\"STRING\" size=\"256\"/><Column id=\"RPBC_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BYNG_SL_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"RSP_C\" type=\"STRING\" size=\"256\"/><Column id=\"RSP_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"RQR_CHAN_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_PBC_RQR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SMS_PBC_RQR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_PBC_RQR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_TAX_PBC_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_TAX_NTS_TMS_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"ISTT_PBC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PBC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ERP_REF_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ASP_TMS_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"ASP_RSP_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_C\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"BRC\" type=\"STRING\" size=\"256\"/><Column id=\"BRNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TEAMNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_CLNT_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_CLNT_TEAMNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TOT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TOT_DSNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TOT_DTI_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TOT_DTI_DSNM\" type=\"STRING\" size=\"256\"/><Column id=\"TXBZ_TP_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"TXBZ_TP_PBCNM\" type=\"STRING\" size=\"256\"/><Column id=\"RC_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"HOFC_BAT_RG_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"INPMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"APVMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"ELSG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DCZ_UYN\" type=\"STRING\" size=\"256\"/><Column id=\"ASP_ETR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_R_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"VENDER_C\" type=\"STRING\" size=\"256\"/><Column id=\"ORR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ORR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_01\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_02\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_03\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_04\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_05\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_06\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_07\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_08\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_09\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_10\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_11\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_12\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_13\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_14\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_15\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_16\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_17\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_18\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_19\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_20\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_21\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_22\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_23\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_24\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG_25\" type=\"STRING\" size=\"256\"/><Column id=\"SOAC_PBC_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"ELSG_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_ID_TXREG\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_ID_TXREG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_bill", this);
            obj._setContents("<ColumnInfo><Column id=\"SPPR\" type=\"STRING\" size=\"256\"/><Column id=\"VAT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_RQS_AM\" type=\"STRING\" size=\"256\"/><Column id=\"REMARKS\" type=\"STRING\" size=\"256\"/><Column id=\"PBC_SQNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static69", "absolute", "0", "628", "134", "29", null, null, this);
            obj.set_taborder("130");
            obj.set_text("합계금액");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static71", "absolute", "494", "628", "115", "29", null, null, this);
            obj.set_taborder("131");
            obj.set_text("외상미수금");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static66", "absolute", "131", "628", "127", "29", null, null, this);
            obj.set_taborder("132");
            obj.set_text("현금");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static56", "absolute", "257", "628", "124", "29", null, null, this);
            obj.set_taborder("133");
            obj.set_text("수표");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static74", "absolute", "380", "628", "115", "29", null, null, this);
            obj.set_taborder("134");
            obj.set_text("어음");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static73", "absolute", "608", "628", null, "57", "15", null, this);
            obj.set_taborder("140");
            obj.set_text("위 금액을                      함 ");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_taxDetail", "absolute", "0", "441", null, "187", "15", null, this);
            obj.set_taborder("178");
            obj.set_binddataset("ds_taxDetail");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_selectchangetype("down");
            obj.set_selecttype("row");
            obj.set_autoupdatetype("dateselect");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"31\" band=\"left\"/><Column size=\"130\"/><Column size=\"60\"/><Column size=\"40\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"158\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"월\"/><Cell col=\"1\" colspan=\"2\" text=\"일\"/><Cell col=\"3\" text=\"품목\"/><Cell col=\"4\" text=\"규격\"/><Cell col=\"5\" text=\"수량\"/><Cell col=\"6\" text=\"단가\"/><Cell col=\"7\" text=\"공급가액\"/><Cell col=\"8\" text=\"세액\"/><Cell col=\"9\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"bind:TR_DT_MON\" editdisplay=\"edit\" combodisplay=\"display\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"bind:TR_DT_DAY\" editdisplay=\"edit\" combodisplay=\"display\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"date\" style=\"align:right;\" text=\"bind:TR_DT\" editdisplay=\"display\" calendardisplay=\"display\"/><Cell col=\"3\" edittype=\"text\" style=\"align:left;\" text=\"bind:LATCNM\" editdisplay=\"display\"/><Cell col=\"4\" edittype=\"text\" style=\"align:center;\" text=\"bind:STD\" editdisplay=\"display\"/><Cell col=\"5\" edittype=\"text\" editfilter=\"number\" style=\"align:center;\" text=\"bind:QT\" editdisplay=\"display\" editlengthunit=\"utf8\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:UPR\" editdisplay=\"display\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SPPR\" editdisplay=\"edit\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:TXA\" editdisplay=\"edit\" combodisplay=\"display\"/><Cell col=\"9\" edittype=\"text\" style=\"align:left;\" text=\"bind:RMK\" editdisplay=\"display\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "-16", "602", "737", "20", null, null, this);
            obj.set_taborder("282");
            obj.set_visible("true");
            obj.style.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "0", "113", "49.07%", "229", null, null, this);
            obj.set_taborder("288");
            obj.set_text("Div00");
            obj.style.set_border("2 solid #d11255ff");
            this.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "0", "0", "23", null, null, "0", this.Div00);
            obj.set_taborder("0");
            obj.set_text("공\r\n\r\n급\r\n\r\n자");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#feb6b7ff");
            obj.style.set_border("1 solid #e74449ff");
            obj.style.set_color("#cc0d15ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "23", "0", "63", "57", null, null, this.Div00);
            obj.set_taborder("1");
            obj.set_text("등록\r\n번호");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#ffe1ffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_color("#a75758ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "255", "0", "59", "57", null, null, this.Div00);
            obj.set_taborder("2");
            obj.set_text("종사업장\r\n번호");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#ffe1ffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_color("#a75758ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "23", "56", "63", "29", null, null, this.Div00);
            obj.set_taborder("3");
            obj.set_text("상호");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#ffe1ffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_color("#a75758ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "255", "56", "59", "29", null, null, this.Div00);
            obj.set_taborder("4");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#ffe1ffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_color("#a75758ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "23", "84", "63", "57", null, null, this.Div00);
            obj.set_taborder("5");
            obj.set_text("사업장\r\n주소");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#ffe1ffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_color("#a75758ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "23", "140", "63", "29", null, null, this.Div00);
            obj.set_taborder("6");
            obj.set_text("업태");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#ffe1ffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_color("#a75758ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static36", "absolute", "187", "140", "63", "29", null, null, this.Div00);
            obj.set_taborder("7");
            obj.set_text("종목");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#ffe1ffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_color("#a75758ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static37", "absolute", "23", "168", "63", "57", null, null, this.Div00);
            obj.set_taborder("8");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#ffe1ffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_color("#a75758ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div00.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit01", "absolute", "85", "0", "171", "57", null, null, this.Div00);
            obj.set_taborder("18");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 15 Gulim");
            obj.set_type("string");
            obj.set_mask("###-##-#####");
            obj.set_maskchar(" ");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "313", "0", null, "57", "0", null, this.Div00);
            obj.set_taborder("19");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_font("bold 15 Gulim");
            obj.set_readonly("false");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "85", "56", "171", "29", null, null, this.Div00);
            obj.set_taborder("20");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit02", "absolute", "313", "56", null, "29", "0", null, this.Div00);
            obj.set_taborder("21");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit03", "absolute", "85", "84", null, "57", "0", null, this.Div00);
            obj.set_taborder("22");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit04", "absolute", "85", "140", "103", "29", null, null, this.Div00);
            obj.set_taborder("23");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit05", "absolute", "85", "168", null, null, "0", "0", this.Div00);
            obj.set_taborder("24");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit06", "absolute", "249", "140", null, "29", "0", null, this.Div00);
            obj.set_taborder("25");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "49.07%", "113", null, "229", "15", null, this);
            obj.set_taborder("290");
            obj.set_text("Div00");
            obj.style.set_border("2 solid #0a07c6ff");
            this.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "0", "0", "23", null, null, "0", this.Div02);
            obj.set_taborder("17");
            obj.set_text("공\r\n\r\n급\r\n\r\n받\r\n\r\n는\r\n\r\n자");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#c1dbecff");
            obj.style.set_border("1 solid #424d9fff");
            obj.style.set_color("#1756b6ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "23", "0", "63", "57", null, null, this.Div02);
            obj.set_taborder("18");
            obj.set_text("등록\r\n번호");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#f2f4ffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_color("#1756b6ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "255", "0", "59", "57", null, null, this.Div02);
            obj.set_taborder("19");
            obj.set_text("종사업장\r\n번호");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#f2f4ffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_color("#1756b6ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "23", "56", "63", "29", null, null, this.Div02);
            obj.set_taborder("20");
            obj.set_text("상호");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#f2f4ffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_color("#1756b6ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "255", "57", "59", "29", null, null, this.Div02);
            obj.set_taborder("21");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#f2f4ffff");
            obj.style.set_border("1 solid #e9f1ffff");
            obj.style.set_color("#1756b6ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "23", "84", "63", "57", null, null, this.Div02);
            obj.set_taborder("22");
            obj.set_text("사업장\r\n주소");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#f2f4ffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_color("#1756b6ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "23", "140", "63", "29", null, null, this.Div02);
            obj.set_taborder("23");
            obj.set_text("업태");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#f2f4ffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_color("#1756b6ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static36", "absolute", "187", "140", "63", "29", null, null, this.Div02);
            obj.set_taborder("24");
            obj.set_text("종목");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#f2f4ffff");
            obj.style.set_border("1 solid #e9f1ffff");
            obj.style.set_color("#1756b6ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static37", "absolute", "23", "168", "63", "29", null, null, this.Div02);
            obj.set_taborder("25");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#f2f4ffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_color("#1756b6ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "23", null, "63", "29", null, "0", this.Div02);
            obj.set_taborder("34");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#f2f4ffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_color("#1756b6ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div02.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit00", "absolute", "85", "0", "171", "57", null, null, this.Div02);
            obj.set_taborder("36");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 15 Gulim");
            obj.set_type("string");
            obj.set_mask("###-##-#####");
            obj.set_maskchar(" ");
            obj.set_readonly("false");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "313", "0", null, "57", "0", null, this.Div02);
            obj.set_taborder("37");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_font("bold 15 Gulim");
            obj.set_readonly("false");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "85", "56", "171", "29", null, null, this.Div02);
            obj.set_taborder("38");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.set_readonly("false");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("Edit02", "absolute", "313", "56", null, "29", "0", null, this.Div02);
            obj.set_taborder("39");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.set_readonly("false");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("Edit03", "absolute", "85", "84", null, "57", "0", null, this.Div02);
            obj.set_taborder("40");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.set_readonly("false");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("Edit06", "absolute", "249", "140", null, "29", "0", null, this.Div02);
            obj.set_taborder("41");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.set_readonly("false");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("Edit04", "absolute", "85", "140", "103", "29", null, null, this.Div02);
            obj.set_taborder("42");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.set_readonly("false");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("Edit05", "absolute", "85", "168", null, "29", "0", null, this.Div02);
            obj.set_taborder("43");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.set_readonly("false");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("Edit07", "absolute", "85", "196", null, null, "0", "0", this.Div02);
            obj.set_taborder("44");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.set_readonly("false");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("btn_popup", "absolute", "231", "60", "21", "21", null, null, this.Div02);
            obj.set_taborder("45");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.Div02.addChild(obj.name, obj);

            obj = new Grid("grd_tax", "absolute", "0", "342", null, "59", "15", null, this);
            obj.set_taborder("291");
            obj.set_binddataset("ds_tax");
            obj.set_autofittype("col");
            obj.set_autoupdatetype("dateselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\" band=\"left\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"230\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"작성일자\"/><Cell col=\"1\" text=\"공급가액\"/><Cell col=\"2\" text=\"세액\"/><Cell col=\"3\" text=\"합계금액\"/><Cell col=\"4\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" edittype=\"date\" text=\"bind:CRT_DT\" calendardisplay=\"display\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"text\" style=\"align:right;\" text=\"bind:SPRTT\" editdisplay=\"edit\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"text\" style=\"align:right;\" text=\"bind:TXA_TT\" editdisplay=\"edit\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"text\" style=\"align:right;\" text=\"bind:TOT_AM\" editdisplay=\"edit\"/><Cell col=\"4\" edittype=\"text\" style=\"align:left;\" text=\"bind:RMK1\" editdisplay=\"display\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00", "absolute", "0", "656", "134", "29", null, null, this);
            obj.set_taborder("292");
            obj.set_mask("#,###,###");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01", "absolute", "257", "656", "124", "29", null, null, this);
            obj.set_taborder("296");
            obj.set_mask("#,###,###");
            obj.set_value("0");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02", "absolute", "380", "656", "115", "29", null, null, this);
            obj.set_taborder("297");
            obj.set_mask("#,###,###");
            obj.set_value("0");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit03", "absolute", "494", "656", "115", "29", null, null, this);
            obj.set_taborder("298");
            obj.set_mask("#,###,###");
            obj.set_value("0");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit04", "absolute", "131", "656", "127", "29", null, null, this);
            obj.set_taborder("299");
            obj.set_mask("#,###,###");
            obj.set_value("0");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("300");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "109", "41", null, "29", "15", null, this);
            obj.set_taborder("302");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "41", "110", "29", null, null, this);
            obj.set_taborder("304");
            obj.set_text("종류");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "0", "69", "110", "29", null, null, this);
            obj.set_taborder("305");
            obj.set_text("책번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "109", "69", null, "29", "15", null, this);
            obj.set_taborder("307");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_text("              권                  호");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "411", "41", "110", "29", null, null, this);
            obj.set_taborder("318");
            obj.set_text("공급받는자구분");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00", "absolute", "527", "45", "227", "21", null, null, this);
            this.addChild(obj.name, obj);
            var Radio00_innerdataset = new Dataset("Radio00_innerdataset", this.Radio00);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">사업자</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">개인</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">외국인</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_taborder("319");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_enable("false");
            obj.set_index("0");

            obj = new Radio("rdo_kd", "absolute", "119", "45", "227", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_kd_innerdataset = new Dataset("rdo_kd_innerdataset", this.rdo_kd);
            rdo_kd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0101</Col><Col id=\"datacolumn\">과세</Col></Row><Row><Col id=\"codecolumn\">0102</Col><Col id=\"datacolumn\">영세</Col></Row></Rows>");
            obj.set_innerdataset(rdo_kd_innerdataset);
            obj.set_taborder("321");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("01");
            obj.set_direction("vertical");
            obj.set_index("0");

            obj = new Combo("cbo_rct", "absolute", null, "646", "61", "21", "44", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("322");
            obj.set_text("Combo00");
            obj.set_innerdataset("@ds_combo");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");

            obj = new Button("btn_delete", "absolute", null, "415", "53", "21", "15", null, this);
            obj.set_taborder("324");
            obj.set_text("행삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add", "absolute", null, "415", "53", "21", "70", null, this);
            obj.set_taborder("325");
            obj.set_text("행추가");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "411", "69", "110", "29", null, null, this);
            obj.set_taborder("329");
            obj.set_text("일련번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "113", "73", "58", "21", null, null, this);
            obj.set_taborder("331");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "194", "73", "58", "21", null, null, this);
            obj.set_taborder("332");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "524", "73", "191", "21", null, null, this);
            obj.set_taborder("333");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "15", "41", "21", "15", null, this);
            obj.set_taborder("334");
            obj.set_text("발행");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Plugin("TSXMLToolkit", "absolute", "384", "11", null, "21", "326", null, this);
            obj.setProperty("visible", "false");
            obj.setProperty("classid", "{BBC1A21F-05A2-44ED-B67E-E7C762F0BE23}");
            obj.setProperty("taborder", "335");
            obj.setProperty("codebase", "http://testca.tradesign.net/certification/dd/TSXMLToolkit.cab#version=3.0.1.3");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 229, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("288");
            		p.set_text("Div00");
            		p.style.set_border("2 solid #d11255ff");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 229, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("290");
            		p.set_text("Div00");
            		p.style.set_border("2 solid #0a07c6ff");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("사용료세금계산서발행");
            		p.set_enable("true");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item8","MaskEdit00","value","ds_tax","TOT_AM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Div00.MaskEdit01","value","ds_tax","SPLR_BZNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Div02.MaskEdit00","value","ds_tax","BUY_BZNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","Static56","text"," ","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","Static74","text"," ","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","Static71","text"," ","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","MaskEdit01","value","ds_tax","STL_AM2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","MaskEdit02","value","ds_tax","STL_AM3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","MaskEdit03","value","ds_tax","STL_AM4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","MaskEdit04","value","ds_tax","STL_AM1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Static66","text"," ","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div00.Edit00","value","ds_tax","SPLR_ID_TXREG");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Div00.Edit02","value","ds_tax","SPLR_REPMNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Div00.Edit01","value","ds_tax","SPLR_MTALNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Div00.Edit03","value","ds_tax","SPLR_ADR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Div00.Edit04","value","ds_tax","SPLR_BZTPNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Div00.Edit06","value","ds_tax","SPLR_BZC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Div00.Edit05","value","ds_tax","SPLR_CHRR_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Div02.Edit07","value","ds_tax","BUY_CHRR_EMAIL2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","Div02.Edit05","value","ds_tax","BUY_CHRR_EMAIL1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","Div02.Edit04","value","ds_tax","BUY_BZTPNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","Div02.Edit06","value","ds_tax","BUY_BZC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","Div02.Edit03","value","ds_tax","BUY_ADR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","Div02.Edit02","value","ds_tax","BUY_REPMNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","Div02.Edit01","value","ds_tax","BUY_MTALNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","Div02.Edit00","value","ds_tax","BUY_ID_TXREG");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","Edit02","value","ds_tax","TXBIL_SQNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","Edit01","value","ds_tax","TXBIL_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","Edit00","value","ds_tax","TXBIL_CNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","cbo_rct","value","ds_tax","RCT_RQS_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","rdo_kd","value","ds_tax","TXBIL_KD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","Radio00","value","ds_tax","BUY_DSC");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_MG_TX_1012.xfdl", "lib::comLib.xjs");
        this.addIncludeScript("OMG_MG_TX_1012.xfdl", "lib::comTSToolKit.xjs");
        this.registerScript("OMG_MG_TX_1012.xfdl", function(exports) {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comTSToolKit.xjs", null, exports); }	//include "lib::comTSToolKit.xjs";
        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	//TAX
        	this.ds_tax.setColumn(0, "SPLR_BZNO", "1148164826");// 
        	this.ds_tax.setColumn(0, "SPLR_NA_TRPL_C", "");
        	this.ds_tax.setColumn(0, "SPLR_MTALNM", "주식회사이썸테크");
        	this.ds_tax.setColumn(0, "SPLR_REPMNM", "곽화섭");
        	this.ds_tax.setColumn(0, "SPLR_ADR", "서울특별시 강남구 도산대로 24길 4, 2층(논현동 ES힐스)");
        	this.ds_tax.setColumn(0, "SPLR_BZTPNM", "서비스 제조 도매");
        	this.ds_tax.setColumn(0, "SPLR_BZC", "소프트웨어자문 개발");
        	this.ds_tax.setColumn(0, "SPLR_DEPTNM", "");
        	this.ds_tax.setColumn(0, "SPLR_CHRRNM", "백종엽");
        	this.ds_tax.setColumn(0, "SPLR_CHRR_TELNO", "0234512337");
        	this.ds_tax.setColumn(0, "SPLR_CHRR_EMAIL", "bjy@esumtech.com");
        	this.ds_tax.setColumn(0, "SPLR_CHRR_MPNO", "");
        	
        	this.ds_tax.setColumn(0, "NA_BZPLC", "1148164826000");
        	this.ds_tax.setColumn(0, "NA_BZPLNM", "이썸테크");
        	this.ds_tax.setColumn(0, "NA_TEAM_C", "");
        	this.ds_tax.setColumn(0, "NA_TEAMNM", "");

        	//
        	this.ds_tax.setColumn(0, "CRT_DT", this.gfn_today("yyyyMMdd"));
        	this.ds_tax.setColumn(0, "TXBIL_KD", "0101");
        	this.ds_tax.setColumn(0, "BUY_DSC", "01");
        	this.ds_tax.setColumn(0, "OCU_DSC", "02"); // 01 경제통합 02 하나로eSCM

        	//TAX_DETAIL
        	this.ds_taxDetail.addRow();
        	this.ds_taxDetail.setColumn(this.ds_taxDetail.rowposition, "TR_DT", this.ds_tax.getColumn(0, "CRT_DT"));
        	this.ds_taxDetail.setColumn(this.ds_taxDetail.rowposition, "QT", 0);
        	this.ds_taxDetail.setColumn(this.ds_taxDetail.rowposition, "UPR", 0);

           //페이지 로딩후 실행부분
           var param = [  
         		{code:"RCT_RQS_DSC",   dsName:"ds_combo",   selecttype:"N"},  /*청구영수*/
            ];
            this.gfn_setPortalCommonCode(param);   
        }

        //gfn_setCommonCode처리 후 호출할 함수
        this.fn_commonAfterOnload = function()
        {
        	trace("fn_commonAfterOnload");
        	this.ds_combo.deleteRow(0);
        	this.cbo_rct.set_index(0);
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_insertTaxbil = function()
        {
        // trace("this.ds_tax.rowcount : " +  this.ds_tax.rowcount);
        // trace("BUY_ID_TXREG.BUY_ID_TXREG : " +  this.ds_tax.getColumn(0, "BUY_ID_TXREG"));
        	var sSvcID        = "insertTaxbil";
        	var sURL          = "svc::rest/tx/insertTaxbilForBill";  // 사용료 세금계산서 발행
        	var sInDatasets   = "ds_tax=ds_tax ds_taxDetail=ds_taxDetail";
        	var sOutDatasets  = "ds_taxCopy=ds_tax";	
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_insertTxbilElsg = function(objDs)
        {
        	/*
        	this.ds_elsg.clearData();
        	
        	for(var j = 0 ; j < objDs.rowcount; j++)
        	{
        		this.ds_elsg.addRow();
        		this.ds_elsg.setColumn(j, "ELSG_CNTN", objDs.getColumn(j, "ELSG_CNTN"));
        		this.ds_elsg.setColumn(j, "PBC_SQNO", objDs.getColumn(j, "PBC_SQNO"));
        		this.ds_elsg.setColumn(j, "SIGN_R_VAL", objDs.getColumn(j, "SIGN_R_VAL"));
        		this.ds_elsg.setColumn(j, "FS_RGM", application.gv_userId);
        		this.ds_elsg.setColumn(j, "LS_CHGM", application.gv_userId);
        	}
        	*/
        	
        	var sSvcID        = "insertTxbilElsg";
        	var sURL          = "svc::rest/tx/insertTxbilElsg";
        	var sInDatasets   = "ds_elsg=ds_elsg";
        	var sOutDatasets  = "";	
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_deleteTaxbil = function()
        {
        	var sSvcID        = "deleteTaxbil";
        	var sURL          = "svc::rest/tx/deleteTaxbil";
        	var sInDatasets   = "";
        	var sOutDatasets  = "";	
        	var sArgument     = "PBC_SQNO=" + this.ds_taxCopy.getColumn(0,"PBC_SQNO");
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
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
        			case "insertTaxbil":
        				this.ds_taxCopy.addColumn("ELSG_CNTN", "string");
        				this.ds_taxCopy.addColumn("SIGN_R_VAL", "string");
        				
        				this.gfn_eTaxSignOpenWeb(this.ds_taxCopy, "fn_callbackDti");
        				
        				/*
        				// 전자서명
        				var rtnvalue = this.gfn_eTaxSign(this.TSXMLToolkit, this.ds_taxCopy, this.dsTaxForSvc, this.ds_item);
        				
        				if(rtnvalue)
        				{
        trace("callback: this.fn_insertTxbilElsg");
        					this.fn_insertTxbilElsg(this.ds_taxCopy);
        				}
        				else
        				{
        					alert("인증실패");
        					this.fn_deleteTaxbil();
        				}
        				*/
        				break;
        				
        			case "insertTxbilElsg":
        				alert("발행되었습니다.");
        				this.reload();
        				break;
        				
        			case "retrieveBill":
        				
        				// this.reload();
        				
        				this.ds_tax.getColumn(0, "TXBIL_STSC");
        				this.ds_taxDetail.setColumn(0, "LATCNM", "사용료 세금계산서 " + this.ds_bill.getColumn(0, "RMS_MM"));
        				this.ds_taxDetail.setColumn(0, "QT","1");                                   // 수량
        				this.ds_taxDetail.setColumn(0, "UPR", this.ds_bill.getColumn(0, "SPPR"));   // 단가
        				this.ds_taxDetail.setColumn(0, "SPPR", this.ds_bill.getColumn(0, "SPPR"));  // 공급가액
        				this.ds_taxDetail.setColumn(0, "TXA", this.ds_bill.getColumn(0, "VAT_AM")); // 부가세
        				
        				
        				
        				
        				break;
        				
        				
        				//
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
        		case "btn_add":
        			this.ds_taxDetail.set_enableevent(false);
        			this.ds_taxDetail.addRow();
        			this.ds_taxDetail.setColumn(this.ds_taxDetail.rowposition, "TR_DT", this.ds_tax.getColumn(0, "CRT_DT"));
        			this.ds_taxDetail.setColumn(this.ds_taxDetail.rowposition, "TR_DT_MON", String(this.ds_tax.getColumn(0, "CRT_DT")).substr(4,2));
        			this.ds_taxDetail.setColumn(this.ds_taxDetail.rowposition, "TR_DT_DAY", String(this.ds_tax.getColumn(0, "CRT_DT")).substr(6,2));
        			this.ds_taxDetail.setColumn(this.ds_taxDetail.rowposition, "QT", 0);
        			this.ds_taxDetail.setColumn(this.ds_taxDetail.rowposition, "UPR", 0);
        			this.ds_taxDetail.setColumn(this.ds_taxDetail.rowposition, "TXA", 0);
        			this.ds_taxDetail.setColumn(this.ds_taxDetail.rowposition, "SPPR", 0);
        			this.ds_taxDetail.set_enableevent(true);		
        			break;
        			
        		case "btn_delete":
        			this.ds_taxDetail.set_enableevent(false);
        			this.ds_tax.set_enableevent(false);
        			
        			this.ds_taxDetail.deleteRow(this.ds_taxDetail.rowposition);
        			
        			var sum = 0;
        			var sprtt = 0;
        			var txa_tt = 0;
        			
        			for(var i = 0 ; i < this.ds_taxDetail.rowcount ; i++ )
        			{
        				sprtt += this.gfn_nullToEmpty(nexacro.toNumber(this.ds_taxDetail.getColumn(i,"SPPR")));
        				txa_tt += this.gfn_nullToEmpty(nexacro.toNumber(this.ds_taxDetail.getColumn(i,"TXA")));
        			}
        			sum = nexacro.toNumber(sprtt) + nexacro.toNumber(txa_tt);
        			this.ds_tax.setColumn(0, "SPRTT", sprtt);
        			this.ds_tax.setColumn(0, "TOT_AM", sum);
        			this.ds_tax.setColumn(0, "TXA_TT", txa_tt);
        		
        			this.ds_tax.set_enableevent(true);
        			this.ds_taxDetail.set_enableevent(true);	
        			break;
        			
        		case "btn_popup":
        			var oArg = {searchWord:""};
        			var sOption = "autosize=true,title=true";
        			var sPopupCallBack = "fn_popupAfter";    
        			this.gfn_openPopup("POPUP_TRPL","OMG.TX::POPUP_TRPL.xfdl",oArg,sOption,sPopupCallBack);
        			break;
        			
        		case "btn_save":
        			if(this.fn_checkVal())
        			{
        				this.fn_insertTaxbil();
        			}
        			break;
        	}
        	
        }

        this.ds_taxDetail_oncolumnchanged = function(obj,e)
        {
        	if(e.col == 2)
        	{
        		obj.set_enableevent(false);
        		obj.setColumn(e.row, "TR_DT_MON", String(e.newvalue).substr(4,2));
        		obj.setColumn(e.row, "TR_DT_DAY", String(e.newvalue).substr(6,2));
        		obj.set_enableevent(true);
        	}
        	else
        	{
        		try
        		{
        			var sum = 0;
        			var upr = 0;
        			var qt = 0;
        			var sprtt = 0;
        			var txa_tt = 0;
        			
        			this.ds_taxDetail.set_enableevent(false);
        			this.ds_tax.set_enableevent(false);
        			
        			if(e.columnid == "QT" || e.columnid == "UPR")//수량과 단가가 변경될때
        			{
        				upr = nexacro.toNumber(this.gfn_nullToEmpty(this.ds_taxDetail.getColumn(e.row, "UPR")));
        				qt = nexacro.toNumber(this.gfn_nullToEmpty(this.ds_taxDetail.getColumn(e.row, "QT")));
        				obj.setColumn(e.row,"SPPR", upr * qt);
        				if(this.rdo_kd.value == '0101')//일반세금계산서일때
        				{
        					obj.setColumn(e.row,"TXA",nexacro.round(upr * qt * 0.1));
        				}
        				for(var i = 0 ; i < this.ds_taxDetail.rowcount ; i++ )
        				{
        					sprtt += this.gfn_nullToEmpty(nexacro.toNumber(obj.getColumn(i,"SPPR")));
        					txa_tt += this.gfn_nullToEmpty(nexacro.toNumber(obj.getColumn(i,"TXA")));
        				}
        				sum = nexacro.toNumber(sprtt) + nexacro.toNumber(txa_tt);
        				this.ds_tax.setColumn(0, "SPRTT", sprtt);
        				this.ds_tax.setColumn(0, "TOT_AM", sum);
        				this.ds_tax.setColumn(0, "TXA_TT", txa_tt);
        			}
        		}
        		catch(e)
        		{
        			trace(e);
        		}
        		finally
        		{
        			this.ds_taxDetail.set_enableevent(true);
        			this.ds_tax.set_enableevent(true);
        		}	
        	}
        }

        this.ds_taxDetail_cancolumnchange = function(obj,e)
        {	
        	if(e.col == 2)
        	{
        		if(e.newvalue == undefined)
        		{
        			return false;
        		}
        		if(String(e.newvalue) > this.gfn_today("yyyyMMdd"))//작성일자가 미래날자이면 안된다.
        		{
        			alert("오늘 이후의 날짜는 선택할 수 없습니다.");
        			return false;
        		}
        		else if(String(e.newvalue) > this.ds_tax.getColumn(0, "CRT_DT"))//품목란의 거래일자가 작성일자보다 이전날자이어야 한다.
        		{
        			alert("거래일자는 작성일자보다 이후일 수 없습니다.");
        			return false;
        		}
        		else if(String(e.newvalue).substr(0,6) != String(this.ds_tax.getColumn(0, "CRT_DT")).substr(0,6) )//작성일자와 품목란에 거래일자가 동일하거나 동일월인지 확인
        		{
        			alert("작성일자와 거래일자는 동일월 이어야 합니다.");
        			return false;
        		}	
        	}
        }

        
        this.ds_tax_cancolumnchange = function(obj,e)
        {
        	if(e.columnid == "CRT_DT")
        	{
        		//작성일과 품목란의 거래일자가 동일월이어야 한다.
        		if(e.newvalue == undefined)
        		{
        			return false;
        		}
        		if(String(e.newvalue) > this.gfn_today("yyyyMMdd"))//작성일은 미래일이면 안된다.
        		{
        			alert("오늘 이후의 날짜는 선택할 수 없습니다.");
        			return false;
        		}
        		else 
        		{
        			for(var i = 0 ; i < this.ds_taxDetail.rowcount; i++)
        			{	
        				this.ds_taxDetail.setColumn(i, "TR_DT", e.newvalue);
        			}
        		}
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
        		case "POPUP_TRPL":
        			if(!this.gfn_isNull(strVal))
        			{
        				var strValNo = strVal.split('$');
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
        				
        				//this.ds_tax.setColumn(0, "BUY_DSC", this.ds_buyer.getColumn(0, "NA_TRPL_DSC")); // 경제통합사업자 구분코드는 아님. 01 법인. 02 개인
        				this.ds_tax.setColumn(0, "BUY_DSC", "01");  // 무조건 01을 입력함. 01: 사업자번호, 02 주민번호: 주민번호 발행은 없음. 
        				this.ds_tax.setColumn(0, "BUY_BZNO", this.ds_buyer.getColumn(0, "BIZ_NUMBER"));
        				this.ds_tax.setColumn(0, "BUY_NA_TRPL_C", '');
        				this.ds_tax.setColumn(0, "BUY_MTALNM", this.ds_buyer.getColumn(0, "CLNTNM"));
        				this.ds_tax.setColumn(0, "BUY_REPMNM", this.ds_buyer.getColumn(0, "REPMNM"));
        				this.ds_tax.setColumn(0, "BUY_ADR", this.ds_buyer.getColumn(0, "DONGUP"));
        				this.ds_tax.setColumn(0, "BUY_BZTPNM", this.ds_buyer.getColumn(0, "BZTPNM"));
        				this.ds_tax.setColumn(0, "BUY_BZC", this.ds_buyer.getColumn(0, "BZCCNM"));
        				this.ds_tax.setColumn(0, "BUY_FAXNO", this.ds_buyer.getColumn(0, "FAX_SQNO"));
        				this.ds_tax.setColumn(0, "BUY_DEPTNM1", "");
        				this.ds_tax.setColumn(0, "BUY_CHRRNM1", this.ds_buyer.getColumn(0, "USR_NM"));
        				this.ds_tax.setColumn(0, "BUY_CHRR_TELNO1", this.ds_buyer.getColumn(0, "TEL"));
        				this.ds_tax.setColumn(0, "BUY_CHRR_EMAIL1", this.ds_buyer.getColumn(0, "USR_EMAIL"));
        				this.ds_tax.setColumn(0, "BUY_CHRR_MPNO1", this.ds_buyer.getColumn(0, "USR_MPNO"));
        				this.ds_tax.setColumn(0, "BUY_DEPTNM2", "");
        				this.ds_tax.setColumn(0, "BUY_CHRRNM2", "");
        				this.ds_tax.setColumn(0, "BUY_CHRR_TELNO2", "");
        				this.ds_tax.setColumn(0, "BUY_CHRR_EMAIL2", "");
        				this.ds_tax.setColumn(0, "BUY_CHRR_MPNO2", "");
        				
        				this.ds_tax.setColumn(0, "NA_TRPL_C", this.ds_buyer.getColumn(0, "NA_TRPL_C"));
        				
        trace("NA_TRPL_C  " + this.ds_tax.getColumn(0, "NA_TRPL_C"));

        				this.ds_tax.setColumn(0, "NA_CLNTNM", this.ds_buyer.getColumn(0, "CLNTNM"));
        				this.ds_tax.setColumn(0, "NA_CLNT_TEAM_C", "");
        				this.ds_tax.setColumn(0, "NA_CLNT_TEAMNM", "");
        				
        				// 청구금액 가져오기
        				this.fn_retrieveBill();
        			}
        			break;
        	}
        	 
        }

        this.fn_retrieveBill = function()
        {
            var NA_TRPL_C = this.ds_buyer.getColumn(0, "NA_TRPL_C");
            
        trace("NA_TRPL_C  " + NA_TRPL_C);

        	var sSvcID        = "retrieveBill";
        	var sURL          = "svc::rest/tx/retrieveBlMmRqs";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_bill=ds_bill";	
        	var sArgument     = "NA_TRPL_C=" + this.ds_tax.getColumn(0, "NA_TRPL_C");
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        
        this.fn_checkVal = function()
        {	
        	this.ds_tax.setColumn(0, "FS_RGM", application.gv_userId);
        	
        	//이메일 주소가 맞는지 체크
        	var eMail1 = this.ds_tax.getColumn(0, "SPLR_CHRR_EMAIL");
        	var eMail2 = this.ds_tax.getColumn(0, "BUY_CHRR_EMAIL1");
        	var eMail3 = this.ds_tax.getColumn(0, "BUY_CHRR_EMAIL2");
        	
        	var regEmail = new RegExp(/^[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{2,5}$/);
        	
        	if(!this.gfn_isNull(eMail1))
        	{
        		if(eMail1.match(regEmail) == null)
        		{
        			alert("공급자의 이메일을 올바르게 입력하여 주십시오");
        			return false;
        		}
        	}
        	
        	if(!this.gfn_isNull(eMail2))
        	{
        		if(eMail2.match(regEmail) == null)
        		{
        			alert("공급받는자의 이메일을 올바르게 입력하여 주십시오");
        			return false;
        		}
        	}
        	else
        	{	
        		alert("공급받는자의 이메일은 하나이상 입력해주세요.");
        		return false;
        	}
        	
        	if(!this.gfn_isNull(eMail3))
        	{
        		if(eMail3.match(regEmail) == null)
        		{
        			alert("공급자받는자의 이메일(2)을 올바르게 입력하여 주십시오");
        			return false;
        		}
        	}
        	
        	if(this.ds_taxDetail.rowcount < 0)
        	{
        		alert("거래항목을 하나 이상 입력하여 주십시오.");
        		return false;
        	}
        	//품목에 빈 row가 있는지 체크
        	//수량과 단가를 모두 입력하였는지 체크
        	for(var i = 0 ; i < this.ds_taxDetail.rowcount; i++)
        	{
        		if(this.gfn_isNull(this.ds_taxDetail.getColumn(i, "SPPR")) || this.ds_taxDetail.getColumn(i, "SPPR") == 0)
        		{
        			alert("수량 및 단가를 입력하여 주십시오.\n[입력하지 않은 항목은 행삭제를 진행해주십시오.]");
        			return false;
        		}
        		if(this.gfn_isNull(this.ds_taxDetail.getColumn(i, "LATCNM")))
        		{
        			alert("품목입력은 필수입니다.\n[입력하지 않은 항목은 행삭제를 진행해주십시오.]");
        			return false;
        		}
        	}
        	
        	//공급받는자가 비어있는지 체크
        	if( this.gfn_isNull( this.ds_tax.getColumn(0, "BUY_BZNO")))
        	{
        		alert("공급받는자 정보를 입력해주세요.");
        		return false;
        	}
        	
        	//공급받는자 종사업장번호가 비어있는지 체크
        	if( String(this.ds_tax.getColumn(0, "BUY_ID_TXREG")).trim(' ').length > 4 )
        	{
        		//alert("공급받는자 종사업장번호는 4자리 입니다.");
        		// if( String(this.ds_tax.getColumn(0, "SPLR_BZNO")).trim(' ').length > 10)
        		
        		//return false;
        	}
        	
        	if( this.gfn_isNull( this.ds_tax.getColumn(0, "NA_TRPL_C")))
        	{
        		alert("공급자 GLN 코드가 존재하지 않습니다. \n 시스템 담당자에게 문의해 주세요");
        		return false;
        	}
        	
        	
        	return this.confirm("발행하시겠습니까?", "confirm", "question");
        }

        this.rdo_kd_onitemchanged = function(obj,e)
        {
        	//0101:과세 0102:영세
        	var sum = 0;
        	var upr = 0;
        	var qt = 0;
        	var sprtt = 0;
        	var txa_tt = 0;
        	
        	this.ds_taxDetail.set_enableevent(false);
        	this.ds_tax.set_enableevent(false);
        	
        	
        	for(var i = 0 ; i < this.ds_taxDetail.rowcount ; i++ )
        	{
        		upr = nexacro.toNumber(this.gfn_nullToEmpty(this.ds_taxDetail.getColumn(i, "UPR")));
        		qt = nexacro.toNumber(this.gfn_nullToEmpty(this.ds_taxDetail.getColumn(i, "QT")));
        		this.ds_taxDetail.setColumn(i,"SPPR", upr * qt);
        		
        		if(this.rdo_kd.value == '0101')//일반세금계산서일때
        		{
        			this.ds_taxDetail.setColumn(i,"TXA",nexacro.round(upr * qt * 0.1));
        		}
        		else
        		{
        			this.ds_taxDetail.setColumn(i,"TXA", 0);
        		}
        		sprtt += this.gfn_nullToEmpty(nexacro.toNumber(this.ds_taxDetail.getColumn(i,"SPPR")));
        		txa_tt += this.gfn_nullToEmpty(nexacro.toNumber(this.ds_taxDetail.getColumn(i,"TXA")));
        		
        		sum = nexacro.toNumber(sprtt) + nexacro.toNumber(txa_tt);
        	}
        	
        	this.ds_tax.setColumn(0, "SPRTT", sprtt);
        	this.ds_tax.setColumn(0, "TOT_AM", sum);
        	this.ds_tax.setColumn(0, "TXA_TT", txa_tt);	
        		
        	this.ds_taxDetail.set_enableevent(true);
        	this.ds_tax.set_enableevent(true); 
        }

        this.fn_callbackDti = function(rValue,srValue,invoice)
        {
        	var taxInvoice;//Array
        	var objDs = this.ds_tax;
        	taxInvoice = invoice.split("#$");
        	var taxSrValue;//Array
        	taxSrValue = srValue.split("#$");
        	this.ds_elsg.clearData();
        	
        	var objDs = this.ds_taxCopy;
        	
        	if (rValue == "SUC") {
        		for(var j = 0 ; j < objDs.rowcount ; j++)
        		{
        			this.ds_elsg.addRow();
        			this.ds_elsg.setColumn(j, "ELSG_CNTN", taxInvoice[j]);
        			this.ds_elsg.setColumn(j, "PBC_SQNO", objDs.getColumn(j, "PBC_SQNO"));
        			this.ds_elsg.setColumn(j, "SIGN_R_VAL", taxSrValue[j]);
        			this.ds_elsg.setColumn(j, "FS_RGM", application.gv_userId);
        			this.ds_elsg.setColumn(j, "LS_CHGM", application.gv_userId);
        		}
        		this.fn_insertTxbilElsg(this.ds_taxCopy);
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_taxDetail.addEventHandler("oncolumnchanged", this.ds_taxDetail_oncolumnchanged, this);
            this.ds_taxDetail.addEventHandler("cancolumnchange", this.ds_taxDetail_cancolumnchange, this);
            this.ds_tax.addEventHandler("oncolumnchanged", this.ds_tax_oncolumnchanged, this);
            this.ds_tax.addEventHandler("cancolumnchange", this.ds_tax_cancolumnchange, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.grd_taxDetail.addEventHandler("ontextchange", this.grd_taxDetail_ontextchange, this);
            this.Div02.btn_popup.addEventHandler("onclick", this.common_onclick, this);
            this.rdo_kd.addEventHandler("onitemchanged", this.rdo_kd_onitemchanged, this);
            this.btn_delete.addEventHandler("onclick", this.common_onclick, this);
            this.btn_add.addEventHandler("onclick", this.common_onclick, this);
            this.btn_save.addEventHandler("onclick", this.common_onclick, this);

        };

        this.loadIncludeScript("OMG_MG_TX_1012.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
