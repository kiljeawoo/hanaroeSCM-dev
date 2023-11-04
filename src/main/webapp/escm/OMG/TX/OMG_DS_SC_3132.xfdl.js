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
                this.set_name("OMG_DS_SC_3134");
                this.set_titletext("공급가액변경");
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


            
            // UI Components Initialize
            obj = new Button("btn_save", "absolute", null, "15", "41", "21", "17", null, this);
            obj.set_taborder("280");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "857", "-18", "1", "490", null, null, this);
            obj.set_taborder("107");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "17", "535", "134", "29", null, null, this);
            obj.set_taborder("331");
            obj.set_text("합계금액");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.style.set_font("9 Gulim");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "477", "535", "134", "29", null, null, this);
            obj.set_taborder("332");
            obj.set_text("외상미수금");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "150", "535", "110", "29", null, null, this);
            obj.set_taborder("333");
            obj.set_text("현금");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "259", "535", "110", "29", null, null, this);
            obj.set_taborder("334");
            obj.set_text("수표");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "368", "535", "110", "29", null, null, this);
            obj.set_taborder("335");
            obj.set_text("어음");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "610", "535", null, "57", "17", null, this);
            obj.set_taborder("340");
            obj.set_text("위 금액을          함       ");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("right middle");
            obj.set_enable("true");
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
            obj = new Edit("Edit00", "absolute", "85", "168", null, null, "0", "0", this.Div01);
            obj.set_taborder("36");
            obj.set_readonly("false");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("40");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #df9ca4ff");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid03", "absolute", "17", "273", null, "59", "17", null, this);
            obj.set_taborder("345");
            obj.set_binddataset("ds_tax");
            obj.set_autofittype("col");
            obj.set_enable("true");
            obj.set_autoupdatetype("dateselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"270\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"작성일자\"/><Cell col=\"1\" text=\"공급가액\"/><Cell col=\"2\" text=\"세액\"/><Cell col=\"3\" text=\"합계금액\"/><Cell col=\"4\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"date\" edittype=\"date\" text=\"bind:CRT_DT\" calendardisplay=\"display\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SPRTT\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TXA_TT\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TOT_AM\"/><Cell col=\"4\" edittype=\"text\" style=\"align:left;\" text=\"bind:RMK1\" editdisplay=\"display\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01", "absolute", "17", "563", "134", "29", null, null, this);
            obj.set_taborder("346");
            obj.set_mask("#,###,###");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "694", "552", "35", "24", null, null, this);
            obj.set_taborder("347");
            obj.style.set_align("center middle");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "17", "15", "399", "21", null, null, this);
            obj.set_taborder("352");
            obj.set_text("수정하여 교부하는 전자세금계산서");
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

            obj = new MaskEdit("MaskEdit00", "absolute", "150", "563", "110", "29", null, null, this);
            obj.set_taborder("365");
            obj.set_mask("#,###,###");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02", "absolute", "259", "563", "110", "29", null, null, this);
            obj.set_taborder("366");
            obj.set_mask("#,###,###");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit03", "absolute", "368", "563", "110", "29", null, null, this);
            obj.set_taborder("367");
            obj.set_mask("#,###,###");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit04", "absolute", "477", "563", "134", "29", null, null, this);
            obj.set_taborder("368");
            obj.set_mask("#,###,###");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "248", "599", "91", "17", null, null, this);
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
            obj = new Edit("Edit00", "absolute", "313", "0", null, "57", "0", null, this.Div02);
            obj.set_taborder("57");
            obj.set_readonly("true");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
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
            obj.set_lengthunit("utf8");
            obj.set_maxlength("40");
            this.Div02.addChild(obj.name, obj);
            obj = new Edit("Edit07", "absolute", "85", "196", null, null, "0", "0", this.Div02);
            obj.set_taborder("64");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #8684c3ff");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("40");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("btn_buyer", "absolute", "231", "60", "21", "21", null, null, this.Div02);
            obj.set_taborder("65");
            obj.set_cssclass("btn_WF_Searchbtn");
            obj.set_visible("false");
            this.Div02.addChild(obj.name, obj);

            obj = new Grid("grd_taxDetail", "absolute", "17", "372", null, "164", "17", null, this);
            obj.set_taborder("375");
            obj.set_binddataset("ds_taxDetail");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("dateselect");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"31\" band=\"left\"/><Column size=\"130\"/><Column size=\"60\"/><Column size=\"40\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"158\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"월\"/><Cell col=\"1\" colspan=\"2\" text=\"일\"/><Cell col=\"3\" text=\"품목\"/><Cell col=\"4\" text=\"규격\"/><Cell col=\"5\" text=\"수량\"/><Cell col=\"6\" text=\"단가\"/><Cell col=\"7\" text=\"공급가액\"/><Cell col=\"8\" text=\"세액\"/><Cell col=\"9\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"bind:TR_DT_MON\" editdisplay=\"edit\" combodisplay=\"display\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"bind:TR_DT_DAY\" editdisplay=\"edit\" combodisplay=\"display\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"date\" style=\"align:right;\" text=\"bind:TR_DT\" editdisplay=\"display\" calendardisplay=\"display\"/><Cell col=\"3\" edittype=\"text\" style=\"align:left;\" text=\"bind:LATCNM\" editdisplay=\"display\"/><Cell col=\"4\" edittype=\"text\" style=\"align:center;\" text=\"bind:STD\" editdisplay=\"display\"/><Cell col=\"5\" edittype=\"text\" style=\"align:center;\" text=\"bind:QT\" editdisplay=\"display\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"text\" style=\"align:right;\" text=\"bind:UPR\" editdisplay=\"display\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:SPPR\" editdisplay=\"edit\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"none\" style=\"align:right;\" text=\"bind:TXA\" editdisplay=\"edit\" combodisplay=\"display\"/><Cell col=\"9\" edittype=\"text\" style=\"align:left;\" text=\"bind:RMK\" editlimit=\"100\" editdisplay=\"display\" editlengthunit=\"utf8\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "746", "368", null, "5", "12", null, this);
            obj.set_taborder("376");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add", "absolute", null, "347", "53", "21", "72", null, this);
            obj.set_taborder("377");
            obj.set_text("행추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete", "absolute", null, "347", "53", "21", "17", null, this);
            obj.set_taborder("378");
            obj.set_text("행삭제");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "727", "332", "55", "15", null, null, this);
            obj.set_taborder("379");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
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
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("공급가액변경");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item14","MaskEdit01","value","ds_tax","TOT_AM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","Static27","text","ds_tax","RCT_RQS_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Div01.MaskEdit01","value","ds_tax","SPLR_BZNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","Div01.Static01","text","ds_tax","SPLR_MTALNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","Div01.Static06","text","ds_tax","SPLR_REPMNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","Div01.Static02","text","ds_tax","SPLR_ADR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","Div01.Static05","text","ds_tax","SPLR_BZC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","Div01.Static03","text","ds_tax","SPLR_BZTPNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","Static11","text","ds_tax","STL_METHC1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item40","Static12","text","ds_tax","STL_METHC2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","Static15","text","ds_tax","STL_METHC3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item42","Static10","text","ds_tax","STL_METHC4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","MaskEdit00","value","ds_tax","STL_AM1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","MaskEdit02","value","ds_tax","STL_AM2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","MaskEdit03","value","ds_tax","STL_AM3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","MaskEdit04","value","ds_tax","STL_AM4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div02.MaskEdit00","value","ds_tax","BUY_BZNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Div02.Edit00","value","ds_tax","BUY_ID_TXREG");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Div02.Edit02","value","ds_tax","BUY_REPMNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Div02.Edit01","value","ds_tax","BUY_MTALNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Div02.Edit03","value","ds_tax","BUY_ADR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Div02.Edit04","value","ds_tax","BUY_BZTPNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Div02.Edit06","value","ds_tax","BUY_BZC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Div02.Edit05","value","ds_tax","BUY_CHRR_EMAIL1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","Div02.Edit07","value","ds_tax","BUY_CHRR_EMAIL2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","Div01.Edit00","value","ds_tax","SPLR_CHRR_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","Div01.Static08","text","ds_tax","SPLR_ID_TXREG");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_3132.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_3132.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        this.flag = true;
        this.sqNo = "20150504122106nheba18798";
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
         		{code:"STL_METHC",   dsName:"ds_combo2",   selecttype:"S"}
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
        		}
         	}
         	else 
         	{
        		switch(svcID)
        		{
        			case "retrieveSlTxbilForMod":
        				this.ds_tax.setColumn(0,"TXBIL_KD", "02" + String(this.ds_tax.getColumn(0,"TXBIL_KD")).substr(2,2));
        				
        				this.ds_tax.setColumn(0, "RMK1", "당초 작성일자 : " + this.ds_tax.getColumn(0, "CRT_DT") + ", 승인번호 : " + this.ds_tax.getColumn(0, "NTS_TMS_SQNO"));
        						//this.fn_reverseAmt();
        						break;
        				break;
        				
        			case "insertTaxMod":
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
        	}
        	
        }

        this.ds_tax_oncolumnchanged = function(obj,e)
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
        		else if(String(e.newvalue).substr(0,6) != String(this.ds_tax.getColumn(0, "CRT_DT")).substr(0,6) )//작성일자와 품목란에 거래일자가 동일하거나 동일월인지 확인
        		{
        			alert("작성일자와 거래일자는 동일월 이어야 합니다.");
        			return false;
        		}	
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
        				if(String(this.ds_tax.getColumn(0, "TXBIL_KD")).substr(2, 2) == '01')//일반세금계산서일때01:일반 02:영세율
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
        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_checkVal = function()
        {	
        	this.ds_tax.setColumn(0, "FS_RGM", application.gv_userId);
        	
        	//이메일 주소가 맞는지 체크 당초교부한
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
        	
        	return this.confirm("발행하시겠습니까?", "confirm", "question");
        }

        this.Div02_Edit00_oneditclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_taxDetail.addEventHandler("cancolumnchange", this.ds_taxDetail_cancolumnchange, this);
            this.ds_taxDetail.addEventHandler("oncolumnchanged", this.ds_taxDetail_oncolumnchanged, this);
            this.ds_tax.addEventHandler("oncolumnchanged", this.ds_tax_oncolumnchanged, this);
            this.ds_tax.addEventHandler("cancolumnchange", this.ds_tax_cancolumnchange, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_save.addEventHandler("onclick", this.common_onclick, this);
            this.Static05.addEventHandler("onclick", this.Static05_onclick, this);
            this.Div02.Edit00.addEventHandler("oneditclick", this.Div02_Edit00_oneditclick, this);
            this.Div02.btn_buyer.addEventHandler("onclick", this.common_onclick, this);
            this.grd_taxDetail.addEventHandler("ontextchange", this.grd_taxDetail_ontextchange, this);
            this.btn_add.addEventHandler("onclick", this.common_onclick, this);
            this.btn_delete.addEventHandler("onclick", this.common_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_3132.xfdl");

       
    };
}
)();
