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
                this.set_name("OMG_DS_SC_3133");
                this.set_titletext("기재사항의착오및정정");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
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

            obj = new Dataset("ds_taxDetail", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PBC_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"DTL_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"TR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LATCNM\" type=\"STRING\" size=\"256\"/><Column id=\"STD\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"QT\" type=\"STRING\" size=\"256\"/><Column id=\"UPR\" type=\"STRING\" size=\"256\"/><Column id=\"SPPR\" type=\"STRING\" size=\"256\"/><Column id=\"TXA\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"PBC_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"NTS_TMS_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CRT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_KD\" type=\"STRING\" size=\"256\"/><Column id=\"RCT_RQS_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_C\" type=\"STRING\" size=\"256\"/><Column id=\"RMK1\" type=\"STRING\" size=\"256\"/><Column id=\"RMK2\" type=\"STRING\" size=\"256\"/><Column id=\"RMK3\" type=\"STRING\" size=\"256\"/><Column id=\"REV_RPT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BAT_ISU_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BAT_ISU_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REV_TTCN\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_MTALNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_REPMNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_ADR\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_BZTPNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_BZC\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_CHRRNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_CHRR_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_CHRR_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_CHRR_MPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_FAXNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_MTALNM\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_REPMNM\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_ADR\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_BZTPNM\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_BZC\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_FAXNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_DEPTNM1\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRRNM1\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRR_TELNO1\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRR_EMAIL1\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRR_MPNO1\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_DEPTNM2\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRRNM2\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRR_TELNO2\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRR_EMAIL2\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRR_MPNO2\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_MTALNM\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_REPMNM\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_ADR\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_BZTPNM\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_BZC\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_CHRRNM\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_CHRR_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_CHRR_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"STL_METHC1\" type=\"STRING\" size=\"256\"/><Column id=\"STL_AM1\" type=\"STRING\" size=\"256\"/><Column id=\"STL_METHC2\" type=\"STRING\" size=\"256\"/><Column id=\"STL_AM2\" type=\"STRING\" size=\"256\"/><Column id=\"STL_METHC3\" type=\"STRING\" size=\"256\"/><Column id=\"STL_AM3\" type=\"STRING\" size=\"256\"/><Column id=\"STL_METHC4\" type=\"STRING\" size=\"256\"/><Column id=\"STL_AM4\" type=\"STRING\" size=\"256\"/><Column id=\"SPRTT\" type=\"STRING\" size=\"256\"/><Column id=\"TXA_TT\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"RQR_STS_C\" type=\"STRING\" size=\"256\"/><Column id=\"RPBC_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BYNG_SL_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"RSP_C\" type=\"STRING\" size=\"256\"/><Column id=\"RSP_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"RQR_CHAN_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_PBC_RQR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SMS_PBC_RQR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_PBC_RQR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_TAX_PBC_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_TAX_NTS_TMS_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"ISTT_PBC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PBC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ERP_REF_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ASP_TMS_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"ASP_RSP_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_C\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"BRC\" type=\"STRING\" size=\"256\"/><Column id=\"BRNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TEAMNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_CLNT_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_CLNT_TEAMNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TOT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TOT_DSNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TOT_DTI_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TOT_DTI_DSNM\" type=\"STRING\" size=\"256\"/><Column id=\"TXBZ_TP_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"TXBZ_TP_PBCNM\" type=\"STRING\" size=\"256\"/><Column id=\"RC_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"HOFC_BAT_RG_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"INPMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"APVMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"ELSG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DCZ_UYN\" type=\"STRING\" size=\"256\"/><Column id=\"ASP_ETR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_R_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"VENDER_C\" type=\"STRING\" size=\"256\"/><Column id=\"ORR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ORR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG1\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG2\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG3\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG4\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG5\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG6\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG7\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG8\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG9\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG10\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG11\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG12\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG13\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG14\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG15\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG16\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG17\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG18\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG19\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG20\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG21\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG22\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG23\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG24\" type=\"STRING\" size=\"256\"/><Column id=\"RSR_HDNG25\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"PKG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"256\"/><Column id=\"LATCNM\" type=\"STRING\" size=\"256\"/><Column id=\"RG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_RZT_C\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_RZT_C_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_ID_TXREG\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_ID_TXREG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column5\">2015-04-04</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">7</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">8</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_modC", this);
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_taxDetailMod", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PBC_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"DTL_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"TR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LATCNM\" type=\"STRING\" size=\"256\"/><Column id=\"STD\" type=\"STRING\" size=\"256\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\"/><Column id=\"QT\" type=\"STRING\" size=\"256\"/><Column id=\"UPR\" type=\"STRING\" size=\"256\"/><Column id=\"SPPR\" type=\"STRING\" size=\"256\"/><Column id=\"TXA\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_taxMod", this);
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


            
            // UI Components Initialize
            obj = new Button("btn_save", "absolute", null, "15", "41", "21", "17", null, this);
            obj.set_taborder("280");
            obj.set_text("발행");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "857", "-18", "1", "490", null, null, this);
            obj.set_taborder("107");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "17", "494", "134", "29", null, null, this);
            obj.set_taborder("331");
            obj.set_text("합계금액");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Gulim");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "477", "494", "134", "29", null, null, this);
            obj.set_taborder("332");
            obj.set_text("외상미수금");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "150", "494", "110", "29", null, null, this);
            obj.set_taborder("333");
            obj.set_text("현금");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "259", "494", "110", "29", null, null, this);
            obj.set_taborder("334");
            obj.set_text("수표");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "368", "494", "110", "29", null, null, this);
            obj.set_taborder("335");
            obj.set_text("어음");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "610", "494", null, "57", "17", null, this);
            obj.set_taborder("340");
            obj.set_text("위 금액을          함       ");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("right middle");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02", "absolute", "17", "332", null, "162", "17", null, this);
            obj.set_taborder("341");
            obj.set_binddataset("ds_taxDetail");
            obj.set_autofittype("col");
            obj.set_enable("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"130\"/><Column size=\"60\"/><Column size=\"40\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"158\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"월\"/><Cell col=\"1\" text=\"일\"/><Cell col=\"2\" text=\"품목\"/><Cell col=\"3\" text=\"규격\"/><Cell col=\"4\" text=\"수량\"/><Cell col=\"5\" text=\"단가\"/><Cell col=\"6\" text=\"공급가액\"/><Cell col=\"7\" text=\"세액\"/><Cell col=\"8\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" text=\"bind:TR_DT_MON\"/><Cell col=\"1\" displaytype=\"normal\" text=\"bind:TR_DT_DAY\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:LATCNM\"/><Cell col=\"3\" style=\"align:center;\" text=\"bind:STD\"/><Cell col=\"4\" style=\"align:center;\" text=\"bind:QT\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:UPR\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SPPR\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TXA\"/><Cell col=\"8\" style=\"align:left;\" text=\"bind:RMK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "17", "44", "47.95%", "229", null, null, this);
            obj.set_taborder("343");
            obj.set_text("Div00");
            obj.style.set_border("2 solid #d11255ff");
            obj.set_enable("true");
            this.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "0", "0", "23", null, null, "0", this.Div01);
            obj.set_taborder("18");
            obj.set_text("공\r\n\r\n급\r\n\r\n자");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#feb6b7ff");
            obj.style.set_border("1 solid #e74449ff");
            obj.style.set_color("#cc0d15ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            obj.set_enable("true");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "23", "0", "63", "57", null, null, this.Div01);
            obj.set_taborder("19");
            obj.set_text("등록\r\n번호");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#ffe1ffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_color("#a75758ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            obj.set_enable("true");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "255", "0", "59", "57", null, null, this.Div01);
            obj.set_taborder("20");
            obj.set_text("종사업장\r\n번호");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#ffe1ffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_color("#a75758ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            obj.set_enable("true");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "23", "56", "63", "29", null, null, this.Div01);
            obj.set_taborder("21");
            obj.set_text("상호");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#ffe1ffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_color("#a75758ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            obj.set_enable("true");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "255", "56", "59", "29", null, null, this.Div01);
            obj.set_taborder("22");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#ffe1ffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_color("#a75758ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            obj.set_enable("true");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "23", "84", "63", "57", null, null, this.Div01);
            obj.set_taborder("23");
            obj.set_text("사업장\r\n주소");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#ffe1ffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_color("#a75758ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            obj.set_enable("true");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "23", "140", "63", "29", null, null, this.Div01);
            obj.set_taborder("24");
            obj.set_text("업태");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#ffe1ffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_color("#a75758ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            obj.set_enable("true");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static36", "absolute", "187", "140", "63", "29", null, null, this.Div01);
            obj.set_taborder("25");
            obj.set_text("종목");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#ffe1ffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_color("#a75758ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            obj.set_enable("true");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static37", "absolute", "23", "168", "63", "57", null, null, this.Div01);
            obj.set_taborder("26");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#ffe1ffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_color("#a75758ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            obj.set_enable("true");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "85", "56", "171", "29", null, null, this.Div01);
            obj.set_taborder("27");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_padding("2 2 2 2");
            obj.set_enable("true");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "85", "84", null, "57", "0", null, this.Div01);
            obj.set_taborder("28");
            obj.set_wordwrap("char");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_padding("2 2 2 2");
            obj.set_enable("true");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "85", "140", "103", "29", null, null, this.Div01);
            obj.set_taborder("29");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_padding("2 2 2 2");
            obj.set_enable("true");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "249", "140", null, "29", "0", null, this.Div01);
            obj.set_taborder("31");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_padding("2 2 2 2");
            obj.set_enable("true");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "313", "56", null, "29", "0", null, this.Div01);
            obj.set_taborder("32");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_padding("2 2 2 2");
            obj.set_enable("true");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "313", "0", null, "57", "0", null, this.Div01);
            obj.set_taborder("33");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_padding("2 2 2 2");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 15 Gulim");
            obj.set_enable("true");
            this.Div01.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit01", "absolute", "85", "0", "171", "57", null, null, this.Div01);
            obj.set_taborder("34");
            obj.set_type("string");
            obj.set_mask("###-##-#####");
            obj.set_maskchar(" ");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 15 Gulim");
            obj.set_enable("true");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("Edit05", "absolute", "85", "168", null, null, "0", "0", this.Div01);
            obj.set_taborder("35");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.set_maxlength("40");
            obj.set_lengthunit("utf8");
            obj.set_imemode("alpha");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid03", "absolute", "17", "273", null, "59", "17", null, this);
            obj.set_taborder("345");
            obj.set_binddataset("ds_tax");
            obj.set_autofittype("col");
            obj.set_enable("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"270\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"작성일자\"/><Cell col=\"1\" text=\"공급가액\"/><Cell col=\"2\" text=\"세액\"/><Cell col=\"3\" text=\"합계금액\"/><Cell col=\"4\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" edittype=\"none\" text=\"bind:CRT_DT\" calendardisplay=\"edit\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SPRTT\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TXA_TT\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TOT_AM\"/><Cell col=\"4\" edittype=\"text\" style=\"align:left;\" text=\"bind:RMK1\" editlimit=\"150\" editdisplay=\"display\" editlengthunit=\"utf8\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01", "absolute", "17", "522", "134", "29", null, null, this);
            obj.set_taborder("346");
            obj.set_mask("#,###,###");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "694", "511", "35", "24", null, null, this);
            obj.set_taborder("347");
            obj.style.set_align("center middle");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "17", "15", "399", "21", null, null, this);
            obj.set_taborder("352");
            obj.set_text("당초교부한 전자세금 계산서 취소");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "0", "44", "17", "73", null, null, this);
            obj.set_taborder("358");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "171", "0", "91", "15", null, null, this);
            obj.set_taborder("359");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00", "absolute", "150", "522", "110", "29", null, null, this);
            obj.set_taborder("365");
            obj.set_mask("#,###,###");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02", "absolute", "259", "522", "110", "29", null, null, this);
            obj.set_taborder("366");
            obj.set_mask("#,###,###");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit03", "absolute", "368", "522", "110", "29", null, null, this);
            obj.set_taborder("367");
            obj.set_mask("#,###,###");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit04", "absolute", "477", "522", "134", "29", null, null, this);
            obj.set_taborder("368");
            obj.set_mask("#,###,###");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "248", "551", "91", "17", null, null, this);
            obj.set_taborder("369");
            obj.style.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "50.06%", "44", null, "229", "17", null, this);
            obj.set_taborder("370");
            obj.set_text("Div00");
            obj.style.set_border("2 solid #0a07c6ff");
            this.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "0", "0", "23", null, null, "0", this.Div02);
            obj.set_taborder("46");
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
            obj.set_taborder("47");
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
            obj.set_taborder("48");
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
            obj.set_taborder("49");
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
            obj.set_taborder("50");
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
            obj.set_taborder("51");
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
            obj.set_taborder("52");
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
            obj.set_taborder("53");
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
            obj.set_taborder("54");
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
            obj.set_taborder("55");
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
            obj.set_taborder("56");
            obj.set_readonly("true");
            obj.set_type("string");
            obj.set_mask("###-##-#####");
            obj.set_maskchar(" ");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 15 Gulim");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "85", "56", "171", "29", null, null, this.Div02);
            obj.set_taborder("58");
            obj.set_readonly("true");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("Edit02", "absolute", "313", "56", null, "29", "0", null, this.Div02);
            obj.set_taborder("59");
            obj.set_readonly("true");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("Edit03", "absolute", "85", "84", null, "57", "0", null, this.Div02);
            obj.set_taborder("60");
            obj.set_readonly("true");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("Edit06", "absolute", "249", "140", null, "29", "0", null, this.Div02);
            obj.set_taborder("61");
            obj.set_readonly("true");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("Edit04", "absolute", "85", "140", "103", "29", null, null, this.Div02);
            obj.set_taborder("62");
            obj.set_readonly("true");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("Edit05", "absolute", "85", "168", null, "29", "0", null, this.Div02);
            obj.set_taborder("63");
            obj.set_readonly("false");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.set_maxlength("40");
            obj.set_lengthunit("utf8");
            obj.set_imemode("alpha");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("Edit07", "absolute", "85", "196", null, null, "0", "0", this.Div02);
            obj.set_taborder("64");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.set_maxlength("40");
            obj.set_lengthunit("utf8");
            obj.set_imemode("alpha");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("btn_buyer", "absolute", "231", "60", "21", "21", null, null, this.Div02);
            obj.set_taborder("65");
            obj.set_cssclass("btn_WF_Searchbtn");
            obj.set_visible("false");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "313", "0", null, "57", "0", null, this.Div02);
            obj.set_taborder("66");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_padding("2 2 2 2");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 15 Gulim");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "17", "1086", "134", "29", null, null, this);
            obj.set_taborder("371");
            obj.set_text("합계금액");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "477", "1086", "134", "29", null, null, this);
            obj.set_taborder("372");
            obj.set_text("외상미수금");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "150", "1086", "110", "29", null, null, this);
            obj.set_taborder("373");
            obj.set_text("현금");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "259", "1086", "110", "29", null, null, this);
            obj.set_taborder("374");
            obj.set_text("수표");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "368", "1086", "110", "29", null, null, this);
            obj.set_taborder("375");
            obj.set_text("어음");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "610", "1086", null, "57", "17", null, this);
            obj.set_taborder("376");
            obj.set_text("위 금액을          함       ");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "17", "596", "47.95%", "229", null, null, this);
            obj.set_taborder("378");
            obj.set_text("Div00");
            obj.style.set_border("2 solid #d11255ff");
            this.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "0", "0", "23", null, null, "0", this.Div00);
            obj.set_taborder("35");
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
            obj.set_taborder("36");
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
            obj.set_taborder("37");
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
            obj.set_taborder("38");
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
            obj.set_taborder("39");
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
            obj.set_taborder("40");
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
            obj.set_taborder("41");
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
            obj.set_taborder("42");
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
            obj.set_taborder("43");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#ffe1ffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_color("#a75758ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "85", "56", "171", "29", null, null, this.Div00);
            obj.set_taborder("44");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_padding("2 2 2 2");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "85", "84", null, "57", "0", null, this.Div00);
            obj.set_taborder("45");
            obj.set_wordwrap("char");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_padding("2 2 2 2");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "85", "140", "103", "29", null, null, this.Div00);
            obj.set_taborder("46");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_padding("2 2 2 2");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "249", "140", null, "29", "0", null, this.Div00);
            obj.set_taborder("48");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_padding("2 2 2 2");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "313", "56", null, "29", "0", null, this.Div00);
            obj.set_taborder("49");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_padding("2 2 2 2");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "313", "0", null, "57", "0", null, this.Div00);
            obj.set_taborder("50");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_padding("2 2 2 2");
            this.Div00.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit01", "absolute", "85", "0", "171", "57", null, null, this.Div00);
            obj.set_taborder("51");
            obj.set_type("string");
            obj.set_mask("###-##-#####");
            obj.set_maskchar(" ");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 15 Gulim");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit05", "absolute", "85", "168", null, null, "0", "0", this.Div00);
            obj.set_taborder("52");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #df9ca4ff");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("40");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "17", "825", null, "59", "17", null, this);
            obj.set_taborder("379");
            obj.set_binddataset("ds_taxMod");
            obj.set_autofittype("col");
            obj.set_autoupdatetype("dateselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"270\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"작성일자\"/><Cell col=\"1\" text=\"공급가액\"/><Cell col=\"2\" text=\"세액\"/><Cell col=\"3\" text=\"합계금액\"/><Cell col=\"4\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" edittype=\"date\" text=\"bind:CRT_DT\" calendardisplay=\"display\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SPRTT\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TXA_TT\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TOT_AM\"/><Cell col=\"4\" edittype=\"text\" style=\"align:left;\" text=\"bind:RMK1\" editlimit=\"150\" editdisplay=\"display\" editlengthunit=\"utf8\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit05", "absolute", "17", "1114", "134", "29", null, null, this);
            obj.set_taborder("380");
            obj.set_readonly("true");
            obj.set_mask("#,###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "694", "1103", "35", "24", null, null, this);
            obj.set_taborder("381");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit06", "absolute", "150", "1114", "110", "29", null, null, this);
            obj.set_taborder("382");
            obj.set_readonly("false");
            obj.set_mask("#,###,###");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit07", "absolute", "259", "1114", "110", "29", null, null, this);
            obj.set_taborder("383");
            obj.set_readonly("false");
            obj.set_mask("#,###,###");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit08", "absolute", "368", "1114", "110", "29", null, null, this);
            obj.set_taborder("384");
            obj.set_readonly("false");
            obj.set_mask("#,###,###");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit09", "absolute", "477", "1114", "134", "29", null, null, this);
            obj.set_taborder("385");
            obj.set_readonly("false");
            obj.set_mask("#,###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "248", "1143", "91", "17", null, null, this);
            obj.set_taborder("386");
            obj.style.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "50.06%", "596", null, "229", "17", null, this);
            obj.set_taborder("387");
            obj.set_text("Div00");
            obj.style.set_border("2 solid #0a07c6ff");
            this.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "0", "0", "23", null, null, "0", this.Div03);
            obj.set_taborder("66");
            obj.set_text("공\r\n\r\n급\r\n\r\n받\r\n\r\n는\r\n\r\n자");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#c1dbecff");
            obj.style.set_border("1 solid #424d9fff");
            obj.style.set_color("#1756b6ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "23", "0", "63", "57", null, null, this.Div03);
            obj.set_taborder("67");
            obj.set_text("등록\r\n번호");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#f2f4ffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_color("#1756b6ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "255", "0", "59", "57", null, null, this.Div03);
            obj.set_taborder("68");
            obj.set_text("종사업장\r\n번호");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#f2f4ffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_color("#1756b6ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "23", "56", "63", "29", null, null, this.Div03);
            obj.set_taborder("69");
            obj.set_text("상호");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#f2f4ffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_color("#1756b6ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "255", "57", "59", "29", null, null, this.Div03);
            obj.set_taborder("70");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#f2f4ffff");
            obj.style.set_border("1 solid #e9f1ffff");
            obj.style.set_color("#1756b6ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "23", "84", "63", "57", null, null, this.Div03);
            obj.set_taborder("71");
            obj.set_text("사업장\r\n주소");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#f2f4ffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_color("#1756b6ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "23", "140", "63", "29", null, null, this.Div03);
            obj.set_taborder("72");
            obj.set_text("업태");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#f2f4ffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_color("#1756b6ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static36", "absolute", "187", "140", "63", "29", null, null, this.Div03);
            obj.set_taborder("73");
            obj.set_text("종목");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#f2f4ffff");
            obj.style.set_border("1 solid #e9f1ffff");
            obj.style.set_color("#1756b6ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static37", "absolute", "23", "168", "63", "29", null, null, this.Div03);
            obj.set_taborder("74");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#f2f4ffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_color("#1756b6ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "23", null, "63", "29", null, "0", this.Div03);
            obj.set_taborder("75");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_background("#f2f4ffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_color("#1756b6ff");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.Div03.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit00", "absolute", "85", "0", "171", "57", null, null, this.Div03);
            obj.set_taborder("76");
            obj.set_readonly("false");
            obj.set_type("string");
            obj.set_mask("###-##-#####");
            obj.set_maskchar(" ");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 15 Gulim");
            this.Div03.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "85", "56", "171", "29", null, null, this.Div03);
            obj.set_taborder("78");
            obj.set_readonly("false");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("70");
            this.Div03.addChild(obj.name, obj);
            obj = new Edit("Edit02", "absolute", "313", "56", null, "29", "0", null, this.Div03);
            obj.set_taborder("79");
            obj.set_readonly("false");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("30");
            this.Div03.addChild(obj.name, obj);
            obj = new Edit("Edit03", "absolute", "85", "84", null, "57", "0", null, this.Div03);
            obj.set_taborder("80");
            obj.set_readonly("false");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("150");
            this.Div03.addChild(obj.name, obj);
            obj = new Edit("Edit06", "absolute", "249", "140", null, "29", "0", null, this.Div03);
            obj.set_taborder("81");
            obj.set_readonly("false");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("40");
            this.Div03.addChild(obj.name, obj);
            obj = new Edit("Edit04", "absolute", "85", "140", "103", "29", null, null, this.Div03);
            obj.set_taborder("82");
            obj.set_readonly("false");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("40");
            this.Div03.addChild(obj.name, obj);
            obj = new Edit("Edit05", "absolute", "85", "168", null, "29", "0", null, this.Div03);
            obj.set_taborder("83");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.set_readonly("false");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("40");
            this.Div03.addChild(obj.name, obj);
            obj = new Edit("Edit07", "absolute", "85", "196", null, null, "0", "0", this.Div03);
            obj.set_taborder("84");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.set_readonly("false");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("40");
            this.Div03.addChild(obj.name, obj);
            obj = new Button("btn_buyer", "absolute", "231", "60", "21", "21", null, null, this.Div03);
            obj.set_taborder("85");
            obj.set_cssclass("btn_WF_Searchbtn");
            obj.set_visible("true");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "313", "0", null, "57", "0", null, this.Div03);
            obj.set_taborder("86");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.style.set_padding("2 2 2 2");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 15 Gulim");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "17", "567", "399", "21", null, null, this);
            obj.set_taborder("388");
            obj.set_text("수정하여 교부하는 전자세금계산서");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "746", "919", null, "5", "12", null, this);
            obj.set_taborder("389");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add", "absolute", null, "898", "53", "21", "72", null, this);
            obj.set_taborder("390");
            obj.set_text("행추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete", "absolute", null, "898", "53", "21", "17", null, this);
            obj.set_taborder("391");
            obj.set_text("행삭제");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "727", "883", "55", "15", null, null, this);
            obj.set_taborder("392");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_taxDetail", "absolute", "17", "924", null, "164", "17", null, this);
            obj.set_taborder("393");
            obj.set_binddataset("ds_taxDetailMod");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("dateselect");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"31\" band=\"left\"/><Column size=\"130\"/><Column size=\"60\"/><Column size=\"40\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"158\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"월\"/><Cell col=\"1\" colspan=\"2\" text=\"일\"/><Cell col=\"3\" text=\"품목\"/><Cell col=\"4\" text=\"규격\"/><Cell col=\"5\" text=\"수량\"/><Cell col=\"6\" text=\"단가\"/><Cell col=\"7\" text=\"공급가액\"/><Cell col=\"8\" text=\"세액\"/><Cell col=\"9\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"bind:TR_DT_MON\" editdisplay=\"edit\" combodisplay=\"display\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"bind:TR_DT_DAY\" editdisplay=\"edit\" combodisplay=\"display\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"date\" style=\"align:right;\" text=\"bind:TR_DT\" editdisplay=\"display\" calendardisplay=\"display\"/><Cell col=\"3\" edittype=\"text\" style=\"align:left;\" text=\"bind:LATCNM\" editdisplay=\"display\"/><Cell col=\"4\" edittype=\"text\" style=\"align:center;\" text=\"bind:STD\" editdisplay=\"display\"/><Cell col=\"5\" edittype=\"text\" editfilter=\"number\" style=\"align:center;\" text=\"bind:QT\" editdisplay=\"display\" editlengthunit=\"utf8\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" style=\"align:right;\" text=\"bind:UPR\" editdisplay=\"display\" editlengthunit=\"utf8\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SPPR\" editdisplay=\"edit\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:TXA\" editdisplay=\"edit\" combodisplay=\"display\"/><Cell col=\"9\" edittype=\"text\" style=\"align:left;\" text=\"bind:RMK\" editdisplay=\"display\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Plugin("TSXMLToolkit", "absolute", "384", "11", null, "21", "326", null, this);
            obj.setProperty("visible", "false");
            obj.setProperty("classid", "{BBC1A21F-05A2-44ED-B67E-E7C762F0BE23}");
            obj.setProperty("taborder", "394");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 229, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("343");
            		p.set_text("Div00");
            		p.style.set_border("2 solid #d11255ff");
            		p.set_enable("true");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 229, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("370");
            		p.set_text("Div00");
            		p.style.set_border("2 solid #0a07c6ff");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 229, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("378");
            		p.set_text("Div00");
            		p.style.set_border("2 solid #d11255ff");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 229, this.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("387");
            		p.set_text("Div00");
            		p.style.set_border("2 solid #0a07c6ff");

            	}
            );
            this.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("기재사항의착오및정정");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item51","MaskEdit01","value","ds_tax","TOT_AM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Static27","text","ds_tax","RCT_RQS_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div01.MaskEdit01","value","ds_tax","SPLR_BZNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Div01.Static01","text","ds_tax","SPLR_MTALNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Div01.Static06","text","ds_tax","SPLR_REPMNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Div01.Static02","text","ds_tax","SPLR_ADR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Div01.Static05","text","ds_tax","SPLR_BZC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Div01.Static03","text","ds_tax","SPLR_BZTPNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Static11","text","ds_tax","STL_METHC1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Static12","text","ds_tax","STL_METHC2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Static15","text","ds_tax","STL_METHC3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Static10","text","ds_tax","STL_METHC4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","MaskEdit00","value","ds_tax","STL_AM1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","MaskEdit02","value","ds_tax","STL_AM2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","MaskEdit03","value","ds_tax","STL_AM3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","MaskEdit04","value","ds_tax","STL_AM4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","Div02.MaskEdit00","value","ds_tax","BUY_BZNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","Div02.Edit02","value","ds_tax","BUY_REPMNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","Div02.Edit01","value","ds_tax","BUY_MTALNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","Div02.Edit03","value","ds_tax","BUY_ADR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","Div02.Edit04","value","ds_tax","BUY_BZTPNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","Div02.Edit06","value","ds_tax","BUY_BZC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","Div02.Edit05","value","ds_tax","BUY_CHRR_EMAIL1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","Div02.Edit07","value","ds_tax","BUY_CHRR_EMAIL2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","Static03","text","ds_taxMod","STL_METHC4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","Static07","text","ds_taxMod","STL_METHC1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","Static08","text","ds_taxMod","STL_METHC2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","Static13","text","ds_taxMod","STL_METHC3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","MaskEdit05","value","ds_taxMod","TOT_AM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","Static16","text","ds_taxMod","RCT_RQS_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","MaskEdit06","value","ds_taxMod","STL_AM1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","MaskEdit07","value","ds_taxMod","STL_AM2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","MaskEdit08","value","ds_taxMod","STL_AM3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","MaskEdit09","value","ds_taxMod","STL_AM4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","Div00.MaskEdit01","value","ds_taxMod","SPLR_BZNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","Div00.Static01","text","ds_taxMod","SPLR_MTALNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","Div00.Static06","text","ds_taxMod","SPLR_REPMNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item38","Div00.Static02","text","ds_taxMod","SPLR_ADR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","Div00.Static05","text","ds_taxMod","SPLR_BZC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item40","Div00.Static03","text","ds_taxMod","SPLR_BZTPNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","Div00.Static04","text","ds_taxMod","SPLR_CHRR_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item42","Div03.MaskEdit00","value","ds_taxMod","BUY_BZNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item44","Div03.Edit02","value","ds_taxMod","BUY_REPMNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item45","Div03.Edit01","value","ds_taxMod","BUY_MTALNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item46","Div03.Edit03","value","ds_taxMod","BUY_ADR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item47","Div03.Edit04","value","ds_taxMod","BUY_BZTPNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item48","Div03.Edit06","value","ds_taxMod","BUY_BZC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item49","Div03.Edit05","value","ds_taxMod","BUY_CHRR_EMAIL1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item50","Div03.Edit07","value","ds_taxMod","BUY_CHRR_EMAIL2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","Div00.Edit05","value","ds_taxMod","SPLR_CHRR_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item53","Div01.Edit05","value","ds_tax","SPLR_CHRR_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","Div02.Static08","text","ds_tax","BUY_ID_TXREG");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item52","Div01.Static08","text","ds_tax","SPLR_ID_TXREG");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item43","Div03.Static08","text","ds_tax","BUY_ID_TXREG");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_3131.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_3131.xfdl", function(exports) {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        this.modC = "";
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
         		{code:"TXBIL_STSC",   dsName:"ds_combo",   selecttype:"N"},
         		{code:"MOD_C",   dsName:"ds_modC",   selecttype:"S"},
         		{code:"STL_METHC",   dsName:"ds_combo2",   selecttype:""}
            ];
            this.gfn_setPortalCommonCode(param); 
        }

        //gfn_setCommonCode처리 후 호출할 함수
        this.fn_commonAfterOnload = function()
        {
        	trace("fn_commonAfterOnload");
        	this.sqNo = this.getOwnerFrame().sqNo;
        	this.modC = this.getOwnerFrame().modC;
        	this.fn_retrieveSlTxbilForMod();
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_insertTaxMod = function()
        {
        	this.ds_tax.setColumn(0, "FS_RGM", application.gv_userId);
        	this.ds_tax.setColumn(0, "MOD_C", this.modC);
        	this.ds_tax.setColumn(0, "MOD_TAX_PBC_SQNO", this.ds_tax.getColumn(0, "PBC_SQNO"));
        	this.ds_tax.setColumn(0, "MOD_TAX_NTS_TMS_SQNO", this.ds_tax.getColumn(0, "NTS_TMS_SQNO"));
        	
        	var sSvcID        = "insertTaxMod";
        	var sURL          = "svc::rest/tx/insertTaxMod";
        	var sInDatasets   = "ds_taxDetailMod=ds_taxDetail ds_taxMod=ds_tax";
        	var sOutDatasets  = "ds_taxCopy=ds_taxMod";	
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_insertTaxMod2 = function()
        {
        	
        	this.ds_taxMod.setColumn(0, "FS_RGM", application.gv_userId);
        	this.ds_taxMod.setColumn(0, "MOD_C", this.modC);
        	this.ds_taxMod.setColumn(0, "MOD_TAX_PBC_SQNO", this.ds_taxMod.getColumn(0, "PBC_SQNO"));
        	this.ds_taxMod.setColumn(0, "MOD_TAX_NTS_TMS_SQNO", this.ds_taxMod.getColumn(0, "NTS_TMS_SQNO"));
        	this.ds_taxMod.setColumn(0, "BUY_BZNO", this.Div03.MaskEdit00.value);
        	this.ds_taxMod.setColumn(0, "BUY_REPMNM", this.Div03.Edit02.value);
        	this.ds_taxMod.setColumn(0, "BUY_MTALNM", this.Div03.Edit01.value);
        	this.ds_taxMod.setColumn(0, "BUY_ADR", this.Div03.Edit03.value);
        	this.ds_taxMod.setColumn(0, "BUY_BZTPNM", this.Div03.Edit04.value);
        	this.ds_taxMod.setColumn(0, "BUY_BZC", this.Div03.Edit06.value);
        	this.ds_taxMod.setColumn(0, "BUY_CHRR_EMAIL1", this.Div03.Edit05.value);
        	
        	var sSvcID        = "insertTaxMod2";
        	var sURL          = "svc::rest/tx/insertTaxMod2";
        	var sInDatasets   = "ds_taxDetailMod=ds_taxDetailMod ds_taxMod=ds_taxMod";
        	var sOutDatasets  = "";	
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_retrieveSlTxbilForMod = function()
        {
        	var sSvcID        = "retrieveSlTxbilForMod";
        	var sURL          = "svc::rest/tx/retrieveSlTxbilForMod";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_taxDetail=ds_taxDetail ds_tax=ds_tax";	
        	var sArgument     = "PBC_SQNO=" + this.sqNo;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
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

        this.fn_deleteTaxbil2 = function()
        {
        	var sSvcID        = "deleteTaxbil2";
        	var sURL          = "svc::rest/tx/deleteTaxbil";
        	var sInDatasets   = "";
        	var sOutDatasets  = "";	
        	var sArgument     = "PBC_SQNO=" + this.ds_taxCopy.getColumn(1,"PBC_SQNO");
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_insertTxbilElsg = function(objDs)
        {
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
        	
        	var sSvcID        = "insertTxbilElsg";
        	var sURL          = "svc::rest/tx/insertTxbilElsg";
        	var sInDatasets   = "ds_elsg=ds_elsg";
        	var sOutDatasets  = "";	
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0) //에러
         	{
        		trace(">>>>>>>>>>>>>>> svcID ::" +  svcID + ",  ErrorCode :: " + ErrorCode + ",  ErrorMsg :: " + ErrorMsg);
        		switch(svcID)
        		{
        			case "insertTaxMod":
        				switch(ErrorCode)
        				{
        					case -3:
        						alert("이미발행한 수정세금계산서가 있습니다.");
        						//this.gfn_getMessage("alert", "error.message.taxbill.duplication");
        						break;
        				}
        				break;
        			case "insertTaxMod2":
        				switch(ErrorCode)
        				{
        					case -3:
        						break;
        					
        					default :
        						this.fn_deleteTaxbil();
        						alert("저장실패하였습니다.");
        						break;
        				}
        				break;
        		}
         	}
         	else 
         	{
        		switch(svcID)
        		{
        			case "retrieveSlTxbilForMod":
        				this.ds_tax.setColumn(0,"TXBIL_KD", "02" + String(this.ds_tax.getColumn(0,"TXBIL_KD")).substr(2,2));
        				this.ds_tax.setColumn(0, "RMK1", "당초 승인번호 : " + this.ds_tax.getColumn(0, "NTS_TMS_SQNO"));
        				
        				this.ds_taxMod.copyData(this.ds_tax);
        				this.ds_taxDetailMod.copyData(this.ds_taxDetail);
        				
        				this.fn_reverseAmt();
        				break;
        				
        			case "insertTaxMod":
        				this.ds_tax.setColumn(0, "PBC_SQNO", this.ds_taxCopy.getColumn(0, "PBC_SQNO"));
        				this.ds_tax.setColumn(0, "NTS_TMS_SQNO", this.ds_taxCopy.getColumn(0, "NTS_TMS_SQNO"));
        				this.fn_insertTaxMod2();
        				break;
        				
        			case "insertTaxMod2":
        				alert("발행되었습니다.");
        				this.close();
        				/*
        				 * 사용료 세금계산서는 전자서명 배치에서 자동서명하므로 여기서는 안함
        				 */
        // 				this.ds_taxCopy.addRow();
        // 				this.ds_taxCopy.copyRow(this.ds_taxCopy.rowposition, this.ds_tax, 0);
        // 				this.ds_taxCopy.addColumn("ELSG_CNTN", "string");
        // 				this.ds_taxCopy.addColumn("SIGN_R_VAL", "string");
        // 				
        // 				trace(this.ds_taxCopy.saveXML());
        // 				var rtnvalue = this.gfn_eTaxSign(this.TSXMLToolkit, this.ds_taxCopy, this.dsTaxForSvc, this.ds_item);
        // 				
        // 				if(rtnvalue)
        // 				{
        // 					this.fn_insertTxbilElsg(this.ds_taxCopy);
        // 				}
        // 				else
        // 				{
        // 					alert("인증실패");
        // 					this.fn_deleteTaxbil();
        // 				}
        				
        				break;
        				
        			case "deleteTaxbil":
        				this.fn_deleteTaxbil2();
        				break;
        			case "deleteTaxbil2":
        				trace("삭제완료");
        				break;
        			case "insertTxbilElsg":
        				alert("발행되었습니다.");
        				this.close();
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
        		case "btn_save":
        			if(this.fn_checkVal())
        			{
        				this.fn_insertTaxMod();
        			}
        			break;
        			
        		case "btn_add":
        			this.ds_taxDetailMod.set_enableevent(false);
        			this.ds_taxDetailMod.addRow();
        			this.ds_taxDetailMod.setColumn(this.ds_taxDetailMod.rowposition, "TR_DT", this.ds_taxMod.getColumn(0, "CRT_DT"));
        			this.ds_taxDetailMod.setColumn(this.ds_taxDetailMod.rowposition, "TR_DT_MON", String(this.ds_taxMod.getColumn(0, "CRT_DT")).substr(4,2));
        			this.ds_taxDetailMod.setColumn(this.ds_taxDetailMod.rowposition, "TR_DT_DAY", String(this.ds_taxMod.getColumn(0, "CRT_DT")).substr(6,2));
        			this.ds_taxDetailMod.setColumn(this.ds_taxDetailMod.rowposition, "QT", 0);
        			this.ds_taxDetailMod.setColumn(this.ds_taxDetailMod.rowposition, "UPR", 0);
        			this.ds_taxDetailMod.setColumn(this.ds_taxDetailMod.rowposition, "TXA", 0);
        			this.ds_taxDetailMod.setColumn(this.ds_taxDetailMod.rowposition, "SPPR", 0);
        			this.ds_taxDetailMod.set_enableevent(true);		
        			break;
        			
        		case "btn_delete":
        			this.ds_taxDetailMod.set_enableevent(false);
        			this.ds_taxMod.set_enableevent(false);
        			
        			this.ds_taxDetailMod.deleteRow(this.ds_taxDetail.rowposition);
        			
        			var sum = 0;
        			var sprtt = 0;
        			var txa_tt = 0;
        			
        			for(var i = 0 ; i < this.ds_taxDetailMod.rowcount ; i++ )
        			{
        				sprtt += this.gfn_nullToEmpty(nexacro.toNumber(this.ds_taxDetailMod.getColumn(i,"SPPR")));
        				txa_tt += this.gfn_nullToEmpty(nexacro.toNumber(this.ds_taxDetailMod.getColumn(i,"TXA")));
        			}
        			sum = nexacro.toNumber(sprtt) + nexacro.toNumber(txa_tt);
        			this.ds_taxMod.setColumn(0, "SPRTT", sprtt);
        			this.ds_taxMod.setColumn(0, "TOT_AM", sum);
        			this.ds_taxMod.setColumn(0, "TXA_TT", txa_tt);
        		
        			this.ds_taxMod.set_enableevent(true);
        			this.ds_taxDetailMod.set_enableevent(true);
        			break;
        		
        		case "btn_buyer":
        			var oArg = {searchWord:""};
        			var sOption = "autosize=true,title=true";
        			var sPopupCallBack = "fn_popupAfter";    
        			this.gfn_openPopup("POPUP_TRPL","OMG.TX::POPUP_TRPL.xfdl",oArg,sOption,sPopupCallBack);
        			break;
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
        		for(var i = 0; i < this.ds_taxDetail.rowcount ; i++)
        		{
        			////작성일자와 품목란에 거래일자가 동일하거나 동일월인지 확인
        			if(String(e.newvalue).substr(0,6) != String(this.ds_taxDetail.getColumn(i, "CRT_DT")).substr(0,6) )
        			{
        				alert("작성일자와 거래일자는 동일월 이어야 합니다.");
        				return false;
        			}
        		}
        	}
        }

        
        this.ds_taxMod_cancolumnchange = function(obj,e)
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
        		for(var i = 0; i < this.ds_taxDetail.rowcount ; i++)
        		{
        			////작성일자와 품목란에 거래일자가 동일하거나 동일월인지 확인
        			if(String(e.newvalue).substr(0,6) != String(this.ds_taxDetailMod.getColumn(i, "CRT_DT")).substr(0,6) )
        			{
        				alert("작성일자와 거래일자는 동일월 이어야 합니다.");
        				return false;
        			}
        		}
        	}
        }

        
        this.ds_taxDetailMod_cancolumnchange = function(obj,e)
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
        		else if(String(e.newvalue).substr(0,6) != String(this.ds_taxMod.getColumn(0, "CRT_DT")).substr(0,6) )//작성일자와 품목란에 거래일자가 동일하거나 동일월인지 확인
        		{
        			alert("작성일자와 거래일자는 동일월 이어야 합니다.");
        			return false;
        		}	
        	}
        }

        this.ds_taxDetailMod_oncolumnchanged = function(obj,e)
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
        			
        			this.ds_taxDetailMod.set_enableevent(false);
        			this.ds_taxMod.set_enableevent(false);
        			
        			if(e.columnid == "QT" || e.columnid == "UPR")//수량과 단가가 변경될때
        			{
        				upr = nexacro.toNumber(this.gfn_nullToEmpty(this.ds_taxDetailMod.getColumn(e.row, "UPR")));
        				qt = nexacro.toNumber(this.gfn_nullToEmpty(this.ds_taxDetailMod.getColumn(e.row, "QT")));
        				obj.setColumn(e.row,"SPPR", upr * qt);
        				if(String(this.ds_taxMod.getColumn(0, "TXBIL_KD")).substr(2, 2) == '01')//일반세금계산서일때01:일반 02:영세율
        				{
        					obj.setColumn(e.row,"TXA",nexacro.round(upr * qt * 0.1));
        				}
        				for(var i = 0 ; i < this.ds_taxDetailMod.rowcount ; i++ )
        				{
        					sprtt += this.gfn_nullToEmpty(nexacro.toNumber(obj.getColumn(i,"SPPR")));
        					txa_tt += this.gfn_nullToEmpty(nexacro.toNumber(obj.getColumn(i,"TXA")));
        				}
        				sum = nexacro.toNumber(sprtt) + nexacro.toNumber(txa_tt);
        				this.ds_taxMod.setColumn(0, "SPRTT", sprtt);
        				this.ds_taxMod.setColumn(0, "TOT_AM", sum);
        				this.ds_taxMod.setColumn(0, "TXA_TT", txa_tt);				
        			}
        		}
        		catch(e)
        		{
        			trace(e);
        		}
        		finally
        		{
        			this.ds_taxDetailMod.set_enableevent(true);
        			this.ds_taxMod.set_enableevent(true);
        		}	
        	}
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_reverseAmt = function()
        {
        	for(var i = 0 ; i < this.ds_taxDetail.rowcount ; i++)
        	{
        		this.ds_taxDetail.setColumn(i, "SPPR", - nexacro.toNumber(this.gfn_nullToEmpty(this.ds_taxDetail.getColumn(i, "SPPR"))));
        		this.ds_taxDetail.setColumn(i, "TXA", - nexacro.toNumber(this.gfn_nullToEmpty(this.ds_taxDetail.getColumn(i, "TXA"))));
        		this.ds_taxDetail.setColumn(i, "QT", "");
        		this.ds_taxDetail.setColumn(i, "UPR", "");
        	}
        	this.ds_tax.setColumn(0, "SPRTT",  - nexacro.toNumber(this.gfn_nullToEmpty(this.ds_tax.getColumn(0, "SPRTT"))));
        	this.ds_tax.setColumn(0, "TXA_TT",  - nexacro.toNumber(this.gfn_nullToEmpty(this.ds_tax.getColumn(0, "TXA_TT"))));
        	this.ds_tax.setColumn(0, "TOT_AM", - nexacro.toNumber(this.gfn_nullToEmpty(this.ds_tax.getColumn(0, "TOT_AM"))));
        	this.ds_tax.setColumn(0, "STL_AM1", - nexacro.toNumber(this.gfn_nullToEmpty(this.ds_tax.getColumn(0, "STL_AM1"))));
        	this.ds_tax.setColumn(0, "STL_AM2", - nexacro.toNumber(this.gfn_nullToEmpty(this.ds_tax.getColumn(0, "STL_AM2"))));
        	this.ds_tax.setColumn(0, "STL_AM3", - nexacro.toNumber(this.gfn_nullToEmpty(this.ds_tax.getColumn(0, "STL_AM3"))));
        	this.ds_tax.setColumn(0, "STL_AM4", - nexacro.toNumber(this.gfn_nullToEmpty(this.ds_tax.getColumn(0, "STL_AM4"))));
        }

        this.fn_checkVal = function()
        {
        	this.ds_taxMod.setColumn(0, "FS_RGM", application.gv_userId);
        	
        	//이메일 주소가 맞는지 체크 당초교부한
        	var eMail1 = this.ds_tax.getColumn(0, "SPLR_CHRR_EMAIL");
        	var eMail2 = this.ds_tax.getColumn(0, "BUY_CHRR_EMAIL1");
        	var eMail3 = this.ds_tax.getColumn(0, "BUY_CHRR_EMAIL2");
        	
        	var regEmail = new RegExp(/^[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{2,5}$/);
        	
        	if(!this.gfn_isNull(eMail1))
        	{
        		if(eMail1.match(regEmail) == null)
        		{
        			alert("취소하는 세금계산서 공급자의 이메일을 올바르게 입력하여 주십시오");
        			return false;
        		}
        	}
        	
        	if(!this.gfn_isNull(eMail2))
        	{
        		if(eMail2.match(regEmail) == null)
        		{
        			alert("취소하는 세금계산서 공급받는자의 이메일을 올바르게 입력하여 주십시오");
        			return false;
        		}
        	}
        	
        	if(!this.gfn_isNull(eMail3))
        	{
        		if(eMail3.match(regEmail) == null)
        		{
        			alert("취소하는 세금계산서 공급자받는자의 이메일(2)을 올바르게 입력하여 주십시오");
        			return false;
        		}
        	}
        	
        	//이메일 주소가 맞는지 체크 수정교부하는
        	eMail1 = this.ds_taxMod.getColumn(0, "SPLR_CHRR_EMAIL");
        	eMail2 = this.ds_taxMod.getColumn(0, "BUY_CHRR_EMAIL1");
        	eMail3 = this.ds_taxMod.getColumn(0, "BUY_CHRR_EMAIL2");
        	
        	var regEmail = new RegExp(/^[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{2,5}$/);
        	
        	if(!this.gfn_isNull(eMail1))
        	{
        		if(eMail1.match(regEmail) == null)
        		{
        			alert("수정교부하는 공급자의 이메일을 올바르게 입력하여 주십시오");
        			return false;
        		}
        	}
        	
        	if(!this.gfn_isNull(eMail2))
        	{
        		if(eMail2.match(regEmail) == null)
        		{
        			alert("수정교부하는 공급받는자의 이메일을 올바르게 입력하여 주십시오");
        			return false;
        		}
        	}
        	
        	if(!this.gfn_isNull(eMail3))
        	{
        		if(eMail3.match(regEmail) == null)
        		{
        			alert("수정교부하는 공급자받는자의 이메일(2)을 올바르게 입력하여 주십시오");
        			return false;
        		}
        	}
        	
        	//품목체크
        	if(this.ds_taxDetailMod.rowcount < 0)
        	{
        		alert("거래항목을 하나 이상 입력하여 주십시오.");
        		return false;
        	}
        	//품목에 빈 row가 있는지 체크
        	//수량과 단가를 모두 입력하였는지 체크
        	for(var i = 0 ; i < this.ds_taxDetailMod.rowcount; i++)
        	{
        		if(this.gfn_isNull(this.ds_taxDetailMod.getColumn(i, "SPPR")) || this.ds_taxDetailMod.getColumn(i, "SPPR") == 0)
        		{
        			alert("수량 및 단가를 입력하여 주십시오.\n[입력하지 않은 항목은 행삭제를 진행해주십시오.]");
        			return false;
        		}
        		if(this.gfn_isNull(this.ds_taxDetailMod.getColumn(i, "LATCNM")))
        		{
        			alert("품목입력은 필수입니다.\n[입력하지 않은 항목은 행삭제를 진행해주십시오.]");
        			return false;
        		}
        	}
        	
        	//공급받는자가 비어있는지 체크
        	if( this.gfn_isNull( this.ds_taxMod.getColumn(0, "BUY_BZNO")))
        	{
        		alert("공급받는자 정보를 입력해주세요.");
        		return false;
        	}
        	
        	return this.confirm("발행하시겠습니까?", "confirm", "question");
        }

        /************************************************************************************************
         * 페이징처리
        ************************************************************************************************/

        

        this.Div03_MaskEdit00_onchanged = function(obj,e)
        {
        	this.Div03.MaskEdit00.updateToDataset();   
        }

        this.Div03_MaskEdit00_oneditclick = function(obj,e)
        {
        	this.Div03.MaskEdit00.updateToDataset();   
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_tax.addEventHandler("oncolumnchanged", this.ds_tax_oncolumnchanged, this);
            this.ds_tax.addEventHandler("cancolumnchange", this.ds_tax_cancolumnchange, this);
            this.ds_taxDetailMod.addEventHandler("cancolumnchange", this.ds_taxDetailMod_cancolumnchange, this);
            this.ds_taxDetailMod.addEventHandler("oncolumnchanged", this.ds_taxDetailMod_oncolumnchanged, this);
            this.ds_taxMod.addEventHandler("cancolumnchange", this.ds_taxMod_cancolumnchange, this);
            this.ds_taxMod.addEventHandler("oncolumnchanged", this.ds_taxMod_oncolumnchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_save.addEventHandler("onclick", this.common_onclick, this);
            this.Static05.addEventHandler("onclick", this.Static05_onclick, this);
            this.Div02.btn_buyer.addEventHandler("onclick", this.common_onclick, this);
            this.Div03.MaskEdit00.addEventHandler("onchanged", this.Div03_MaskEdit00_onchanged, this);
            this.Div03.MaskEdit00.addEventHandler("oneditclick", this.Div03_MaskEdit00_oneditclick, this);
            this.Div03.btn_buyer.addEventHandler("onclick", this.common_onclick, this);
            this.btn_add.addEventHandler("onclick", this.common_onclick, this);
            this.btn_delete.addEventHandler("onclick", this.common_onclick, this);
            this.grd_taxDetail.addEventHandler("ontextchange", this.grd_taxDetail_ontextchange, this);

        };

        this.loadIncludeScript("OMG_DS_SC_3131.xfdl", true);

       
    };
}
)();
