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
                this.set_name("VAN_DS_SC_1540");
                this.set_titletext("신규상품 등록");
                this._setFormPosition(0,0,803,1437);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input_data", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"VAN_C_RQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"15\"/><Column id=\"NA_TEAM_C\" type=\"STRING\" size=\"2\"/><Column id=\"PRGR_C\" type=\"STRING\" size=\"4\"/><Column id=\"BYNG_UPR\" type=\"STRING\" size=\"25\"/><Column id=\"SEL_UPR\" type=\"STRING\" size=\"25\"/><Column id=\"COMP_FEERT\" type=\"STRING\" size=\"15\"/><Column id=\"PHD_FEERT\" type=\"STRING\" size=\"15\"/><Column id=\"DDLY_PHD_FEERT\" type=\"STRING\" size=\"15\"/><Column id=\"TROT_FEERT\" type=\"STRING\" size=\"15\"/><Column id=\"AMN_FEERT\" type=\"STRING\" size=\"15\"/><Column id=\"PY_FDTCN\" type=\"STRING\" size=\"15\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"15\"/><Column id=\"PRGR_C_TEXT\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sma_apl_tpc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"10\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"50\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_std_unt_c", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"10\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"50\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_store_data", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NUM\" type=\"STRING\" size=\"256\"/><Column id=\"CODE1\" type=\"STRING\" size=\"256\"/><Column id=\"CODE2\" type=\"STRING\" size=\"256\"/><Column id=\"CODE3\" type=\"STRING\" size=\"256\"/><Column id=\"CODE4\" type=\"STRING\" size=\"256\"/><Column id=\"CODE5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_wrs_id_dsc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"10\"/><Column id=\"SIMP_CMN\" type=\"STRING\" size=\"50\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_wrs_rg_req", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"VAN_C_RQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NA_C_RQ_NO\" type=\"STRING\" size=\"10\"/><Column id=\"NA_C_RQ_OBJ_DSC\" type=\"STRING\" size=\"13\"/><Column id=\"CTCPL_TELNO\" type=\"STRING\" size=\"14\"/><Column id=\"RQ_CNTN\" type=\"STRING\" size=\"200\"/><Column id=\"APV_RQ_NA_BZPLC\" type=\"STRING\" size=\"13\"/><Column id=\"FSRGMN_ENO\" type=\"STRING\" size=\"9\"/><Column id=\"FSRGMN_NA_BZPLC\" type=\"STRING\" size=\"25\"/><Column id=\"BUYER_ENO\" type=\"STRING\" size=\"9\"/><Column id=\"RQ_NA_WRS_C\" type=\"STRING\" size=\"25\"/><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_C_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_ABR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_ENM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_SCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_DTCF_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_LCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_MCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_SCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_DTCFNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_ID_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_STDNM\" type=\"STRING\" size=\"256\"/><Column id=\"TXT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"SMA_APL_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"LIQ_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_WRS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MFT_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"WHT\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_UNT_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_PAK_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_SZE_SEX_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_QLT_GRDC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_BRAN_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_PROENV_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"GAP_ATTC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_NACF_QLT_ATTC_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_CSTD_METC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_DSTR_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_UZC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_IPO_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_PDAA_C\" type=\"STRING\" size=\"256\"/><Column id=\"VLD_PRD_CN\" type=\"STRING\" size=\"256\"/><Column id=\"VLD_PRD_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_STD_UNT_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_HGHT\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_LEN_LEN\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_WDTH_LEN\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_SGRT\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_SDL_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_AHL_CN\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_STD_THKN\" type=\"STRING\" size=\"256\"/><Column id=\"CICL_WRS_STD_DMTR_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CICL_WRS_STD_DPTH_CN\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_QT\" type=\"STRING\" size=\"256\"/><Column id=\"VCBX_NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"CVS_QT\" type=\"STRING\" size=\"256\"/><Column id=\"CVS_NA_WRS_UNT_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_DTL_EXPL\" type=\"STRING\" size=\"256\"/><Column id=\"BSC_UNT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BOXPE_AQZ\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_FL_CN\" type=\"STRING\" size=\"256\"/><Column id=\"KNET_WRS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TR_STOP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TR_STOP_RSNC\" type=\"STRING\" size=\"256\"/><Column id=\"TR_STOP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FSRGMN_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CMENO\" type=\"STRING\" size=\"256\"/><Column id=\"LSCGMN_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"TEMP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RFID_UYN\" type=\"STRING\" size=\"256\"/><Column id=\"FOMNM\" type=\"STRING\" size=\"256\"/><Column id=\"SLGT_ETR_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"DSTR_TER_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DSTR_TER_MRK_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_MODIFY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RSP_C_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"CNF_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"CNF_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CNF_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NA_C_RQ_REJ_RSNC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_C_RQ_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"STPL_AMN_NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_SPYPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_SPYPL_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"PLTPE_LYNO\" type=\"STRING\" size=\"256\"/><Column id=\"PLTPE_SGNO\" type=\"STRING\" size=\"256\"/><Column id=\"PLTPE_BOX_CN\" type=\"STRING\" size=\"256\"/><Column id=\"BOX_WT\" type=\"STRING\" size=\"256\"/><Column id=\"BOX_BULK\" type=\"STRING\" size=\"256\"/><Column id=\"BOX_WRS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BYNG_UPR\" type=\"STRING\" size=\"256\"/><Column id=\"SEL_UPR\" type=\"STRING\" size=\"256\"/><Column id=\"CUD_DSC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_vld_prd_dsc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"10\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"50\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_uploadresult", this);
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

            obj = new Dataset("ds_input_add_data", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_TRPL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_uploadsave", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"VAN_C_RQ_NO\" type=\"STRING\" size=\"32\"/><Column id=\"FILE_SEQ\" type=\"STRING\" size=\"32\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"FILE_SIZE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"FILE_SYSTEM_NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_unt_dsc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset00", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column5\">2015-04-04</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\"/><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\"/><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">7</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">8</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_CIF_INFO", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ATEL\" type=\"STRING\" size=\"256\"/><Column id=\"HTEL\" type=\"STRING\" size=\"256\"/><Column id=\"STEL\" type=\"STRING\" size=\"256\"/><Column id=\"MPSVNO\" type=\"STRING\" size=\"256\"/><Column id=\"MPHNO\" type=\"STRING\" size=\"256\"/><Column id=\"MPSQNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_wrs_dsc", this);
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_ATTR_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_ATTNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_wrs_dsc2", this);
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_ATTR_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_ATTNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_wrs_dsc3", this);
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_ATTR_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_ATTNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_wrs_dsc4", this);
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_ATTR_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_ATTNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_Bzplc", this);
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"SHRT_BZPLNM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPL_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"BZPL_DTI_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"BZPL_TPNM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPL_DTI_TPNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_save00", "absolute", null, "0", "41", "21", "15", null, this);
            obj.set_taborder("27");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("div_menu", "absolute", "0", "0", null, "21", "406", null, this);
            obj.set_taborder("28");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar02", "absolute", "109", "164", null, "81", "15", null, this);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar00", "absolute", "109", "66", null, "29", "15", null, this);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00", "absolute", "0", "66", "110", "29", null, null, this);
            obj.set_taborder("31");
            obj.set_text("조회구분");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title04", "absolute", "0", "164", "110", "29", null, null, this);
            obj.set_taborder("32");
            obj.set_text("상품명 *");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar01", "absolute", "109", "136", null, "29", "15", null, this);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pagename00", "absolute", "0", "41", "135", "21", null, null, this);
            obj.set_taborder("35");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title05", "absolute", "0", "192", "110", "53", null, null, this);
            obj.set_taborder("36");
            obj.set_text("상품약어명\r\n영문명 *");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title02", "absolute", "0", "136", "110", "29", null, null, this);
            obj.set_taborder("37");
            obj.set_text("상품코드 *");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar04", "absolute", "109", "244", null, "53", "15", null, this);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title07", "absolute", "0", "244", "110", "53", null, null, this);
            obj.set_taborder("39");
            obj.set_text("상품분류 *");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title09", "absolute", "0", "296", "110", "29", null, null, this);
            obj.set_taborder("40");
            obj.set_text("규격 *");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar05", "absolute", "109", "296", null, "29", "15", null, this);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title08", "absolute", "380", "244", "110", "53", null, null, this);
            obj.set_taborder("42");
            obj.set_text("상품구분코드");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data04", "absolute", "113", "196", "264", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_readonly("false");
            obj.set_cssclass("WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data05", "absolute", "113", "220", "264", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_readonly("false");
            obj.set_cssclass("WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_list_wrs02", "absolute", "493", "140", "90", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_list_wrs02_innerdataset = new Dataset("cbo_list_wrs02_innerdataset", this.cbo_list_wrs02);
            cbo_list_wrs02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">매취</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">수탁</Col></Row></Rows>");
            obj.set_innerdataset(cbo_list_wrs02_innerdataset);
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("2");
            obj.set_text("수탁");
            obj.set_index("1");

            obj = new Combo("cbo_list_wrs00", "absolute", "234", "300", "143", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_innerdataset("@ds_wrs_id_dsc");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_readonly("true");

            obj = new Edit("edt_data12", "absolute", "113", "300", "118", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_readonly("false");
            obj.set_cssclass("WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pagename01", "absolute", "0", "112", "135", "21", null, null, this);
            obj.set_taborder("43");
            obj.set_text("상품공통정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data06", "absolute", "113", "248", "34", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_maxlength("3");
            obj.set_inputtype("number");
            obj.set_enable("true");
            obj.style.setStyleValue("font", "disabled", "9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data07", "absolute", "149", "248", "34", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_maxlength("3");
            obj.set_inputtype("number");
            obj.set_enable("true");
            obj.style.setStyleValue("font", "disabled", "9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data08", "absolute", "185", "248", "34", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_maxlength("3");
            obj.set_inputtype("number");
            obj.set_enable("true");
            obj.style.setStyleValue("font", "disabled", "9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data09", "absolute", "221", "248", "34", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_maxlength("3");
            obj.set_inputtype("number");
            obj.set_enable("true");
            obj.style.setStyleValue("font", "disabled", "9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data10", "absolute", "257", "248", "97", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_maxlength("12");
            obj.set_enable("false");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popup01", "absolute", "356", "248", "21", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data11", "absolute", "113", "272", "264", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title06", "absolute", "380", "164", "110", "81", null, null, this);
            obj.set_taborder("34");
            obj.set_text("상품설명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title10", "absolute", "380", "296", "110", "29", null, null, this);
            obj.set_taborder("44");
            obj.set_text("과세구분 *");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_contents00", "absolute", "493", "168", "291", "73", null, null, this);
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title03", "absolute", "380", "136", "110", "29", null, null, this);
            obj.set_taborder("45");
            obj.set_text("계약구분 *");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data13", "absolute", "113", "140", "142", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_store_code03", "absolute", "493", "300", "166", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_store_code03_innerdataset = new Dataset("rdo_store_code03_innerdataset", this.rdo_store_code03);
            rdo_store_code03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">과세</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">면세</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">영세</Col></Row></Rows>");
            obj.set_innerdataset(rdo_store_code03_innerdataset);
            obj.set_taborder("22");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.style.set_font("9 Gulim");
            obj.set_index("0");

            obj = new Combo("cbo_list_wrs03", "absolute", "659", "300", "125", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("23");
            obj.set_innerdataset("@ds_sma_apl_tpc");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_codecolumn("SIMP_C");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_index("-1");

            obj = new Static("sta_back_bar06", "absolute", "109", "324", null, "53", "15", null, this);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title11", "absolute", "0", "324", "110", "53", null, null, this);
            obj.set_taborder("47");
            obj.set_text("공동상품여부\r\n박스상품구분");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title12", "absolute", "380", "324", "110", "53", null, null, this);
            obj.set_taborder("48");
            obj.set_text("제조처");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data15", "absolute", "493", "340", "110", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_cssclass("WF_Essential");
            obj.set_inputtype("number");
            obj.set_maxlength("25");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popup02", "absolute", "740", "340", "21", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data16", "absolute", "606", "340", "131", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_cssclass("WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data01", "absolute", "359", "70", "103", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("WF_Essential");
            obj.set_maxlength("10");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data02", "absolute", "465", "70", "131", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popup00", "absolute", "599", "70", "21", "21", null, null, this);
            obj.set_taborder("49");
            obj.set_cssclass("btn_WF_Searchbtn");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_TEMP_YN", "absolute", "696", "71", "86", "21", null, null, this);
            obj.set_taborder("50");
            obj.set_text("임시저장");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_list_wrs01", "absolute", "113", "352", "118", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_list_wrs01_innerdataset = new Dataset("cbo_list_wrs01_innerdataset", this.cbo_list_wrs01);
            cbo_list_wrs01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">낱개</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">박스</Col></Row></Rows>");
            obj.set_innerdataset(cbo_list_wrs01_innerdataset);
            obj.set_taborder("17");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_text("낱개");

            obj = new Static("sta_pagename02", "absolute", "0", "394", "180", "21", null, null, this);
            obj.set_taborder("51");
            obj.set_text("2차상품 상세정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_main00", "absolute", "0", "1033", null, "140", "15", null, this);
            obj.set_taborder("53");
            obj.set_binddataset("ds_input_data");
            obj.set_autofittype("none");
            obj.set_cellclickbound("control");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"점포유형\"/><Cell col=\"2\" text=\"매입단가\"/><Cell col=\"3\" text=\"공급단가\"/><Cell col=\"4\" text=\"업체(B+C)\"/><Cell col=\"5\" text=\"관리(B)\"/><Cell col=\"6\" text=\"환급(C)\"/><Cell col=\"7\" text=\"물류(D)\"/><Cell col=\"8\" text=\"직송(E)\"/><Cell col=\"9\" text=\"지급기일\"/><Cell col=\"10\" text=\"삭제여부\"/><Cell col=\"11\" text=\"점포유형명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PRGR_C\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"none\" text=\"bind:BYNG_UPR\" mask=\"#,##0\"/><Cell col=\"3\" displaytype=\"number\" text=\"bind:SEL_UPR\" mask=\"#,##0\"/><Cell col=\"4\" displaytype=\"number\" text=\"bind:COMP_FEERT\" expr=\"expr:AMN_FEERT*1+TROT_FEERT*1\" mask=\"#,##0\"/><Cell col=\"5\" displaytype=\"number\" text=\"bind:AMN_FEERT\" mask=\"#,##0\"/><Cell col=\"6\" displaytype=\"number\" text=\"bind:TROT_FEERT\" mask=\"#,##0\"/><Cell col=\"7\" displaytype=\"number\" text=\"bind:PHD_FEERT\" mask=\"#,##0\"/><Cell col=\"8\" displaytype=\"number\" text=\"bind:DDLY_PHD_FEERT\" mask=\"#,##0\"/><Cell col=\"9\" text=\"bind:PY_FDTCN\"/><Cell col=\"10\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:DEL_YN\"/><Cell col=\"11\" displaytype=\"normal\" text=\"bind:PRGR_C_TEXT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pagename03", "absolute", "0", "921", "180", "21", null, null, this);
            obj.set_taborder("54");
            obj.set_text("입력정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar08", "absolute", "109", "973", null, "29", "15", null, this);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_list_wrs04", "absolute", "113", "977", "80", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_list_wrs04_innerdataset = new Dataset("cbo_list_wrs04_innerdataset", this.cbo_list_wrs04);
            cbo_list_wrs04_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">00</Col><Col id=\"datacolumn\">센터입고</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">DS</Col></Row><Row><Col id=\"codecolumn\">11</Col><Col id=\"datacolumn\">DS2</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">SSM</Col></Row><Row><Col id=\"codecolumn\">40</Col><Col id=\"datacolumn\">SM</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">SMS</Col></Row><Row><Col id=\"codecolumn\">60</Col><Col id=\"datacolumn\">FMS</Col></Row></Rows>");
            obj.set_innerdataset(cbo_list_wrs04_innerdataset);
            obj.set_taborder("57");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            obj.set_index("-1");

            obj = new Static("sta_title14", "absolute", "196", "973", "110", "29", null, null, this);
            obj.set_taborder("58");
            obj.set_text("매입단가");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar09", "absolute", "109", "1001", null, "29", "15", null, this);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title20", "absolute", "392", "1001", "110", "29", null, null, this);
            obj.set_taborder("62");
            obj.set_text("물류수수료");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title15", "absolute", "392", "973", "110", "29", null, null, this);
            obj.set_taborder("64");
            obj.set_text("공급단가");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title16", "absolute", "588", "973", "110", "29", null, null, this);
            obj.set_taborder("65");
            obj.set_text("지급기일수");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_main01", "absolute", "0", "1273", null, "140", "15", null, this);
            obj.set_taborder("66");
            obj.set_autofittype("none");
            obj.set_autosizebandtype("body");
            obj.set_binddataset("ds_input_add_data");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"64\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"물류센터코드\"/><Cell col=\"2\" text=\"매입처코드\"/><Cell col=\"3\" text=\"삭제여부\"/><Cell col=\"4\" text=\"물류센터명\"/><Cell col=\"5\" text=\"매입처명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:NA_BZPLC\"/><Cell col=\"2\" text=\"bind:CSER_TRPL_C\"/><Cell col=\"3\" text=\"bind:DEL_YN\" expr=\"expr:DEL_YN=='1'?'삭제':''\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:NA_BZPLC_NM\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:CSER_TRPL_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title19", "absolute", "196", "1001", "110", "29", null, null, this);
            obj.set_taborder("67");
            obj.set_text("계통탄력가격");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title17", "absolute", "0", "1241", "110", "29", null, null, this);
            obj.set_taborder("68");
            obj.set_text("물류센터코드");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title21", "absolute", "588", "1001", "110", "29", null, null, this);
            obj.set_taborder("69");
            obj.set_text("물류직송");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_all_click00", "absolute", "736", "1006", "46", "19", null, null, this);
            obj.set_taborder("74");
            obj.set_text("일괄");
            obj.style.set_font("8 Gulim");
            obj.set_enable("false");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data19", "absolute", "234", "352", "143", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_inputtype("number");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("false");
            obj.set_maxlength("25");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar07", "absolute", "0", "945", null, "29", "15", null, this);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_treatment00", "absolute", "7", "949", "110", "21", null, null, this);
            obj.set_taborder("76");
            obj.set_text("처리대상건수 :");
            this.addChild(obj.name, obj);

            obj = new Static("sta_treat_count00", "absolute", "119", "949", "25", "21", null, null, this);
            obj.set_taborder("77");
            obj.set_text("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add_modify00", "absolute", "656", "949", "75", "21", null, null, this);
            obj.set_taborder("80");
            obj.set_text("행추가/수정");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear00", "absolute", "734", "949", "47", "21", null, null, this);
            obj.set_taborder("81");
            obj.set_text("CLEAR");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_input_pay00", "absolute", "309", "977", "80", "21", null, null, this);
            obj.set_taborder("84");
            obj.set_mask("#,##0");
            obj.set_value("0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_input_pay01", "absolute", "505", "977", "80", "21", null, null, this);
            obj.set_taborder("85");
            obj.set_value("0");
            obj.set_mask("#,##0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_input_pay02", "absolute", "701", "977", "32", "21", null, null, this);
            obj.set_taborder("86");
            obj.set_value("0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_input_pay03", "absolute", "113", "1005", "80", "21", null, null, this);
            obj.set_taborder("87");
            obj.set_value("0");
            obj.set_mask("#,##0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_input_pay04", "absolute", "309", "1005", "80", "21", null, null, this);
            obj.set_taborder("88");
            obj.set_value("0");
            obj.set_mask("#,##0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_input_pay05", "absolute", "505", "1005", "80", "21", null, null, this);
            obj.set_taborder("89");
            obj.set_value("0");
            obj.set_enable("false");
            obj.set_mask("#,##0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_input_pay06", "absolute", "701", "1005", "32", "21", null, null, this);
            obj.set_taborder("90");
            obj.set_value("0");
            obj.set_enable("false");
            obj.set_mask("#,##0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_treat_count02", "absolute", "143", "949", "25", "21", null, null, this);
            obj.set_taborder("91");
            obj.set_text("건");
            this.addChild(obj.name, obj);

            obj = new Static("sta_input_val00", "absolute", "229", "949", "41", "21", null, null, this);
            obj.set_taborder("93");
            obj.set_text("0");
            obj.set_enable("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "419", null, "485", "15", null, this);
            obj.set_taborder("52");
            obj.style.set_border("0 solid #808080ff");
            obj.style.set_bordertype("normal 0 0");
            this.addChild(obj.name, obj);
            obj = new Static("Static26", "absolute", "109", "0", null, "29", "0", null, this.div_search);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static28", "absolute", "109", "56", null, "29", "0", null, this.div_search);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title00", "absolute", "0", "0", "110", "29", null, null, this.div_search);
            obj.set_taborder("1");
            obj.set_text("상품유형");
            obj.set_cssclass("sta_WF_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title02", "absolute", "0", "28", "110", "29", null, null, this.div_search);
            obj.set_taborder("2");
            obj.set_text("공병코드/수량");
            obj.set_cssclass("sta_WF_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title04", "absolute", "0", "56", "110", "29", null, null, this.div_search);
            obj.set_taborder("3");
            obj.set_text("단량/단위/포장 *");
            obj.style.set_color("#353e41ff");
            obj.set_cssclass("sta_WF_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static27", "absolute", "109", "28", null, "29", "0", null, this.div_search);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title05", "absolute", "380", "56", "110", "29", null, null, this.div_search);
            obj.set_taborder("5");
            obj.set_text("브랜드");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title06", "absolute", "0", "84", "110", "29", null, null, this.div_search);
            obj.set_taborder("6");
            obj.set_text("보관방식 *");
            obj.set_cssclass("sta_WF_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "109", "84", null, "29", "0", null, this.div_search);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title07", "absolute", "380", "84", "110", "29", null, null, this.div_search);
            obj.set_taborder("8");
            obj.set_text("용도 *");
            obj.set_cssclass("sta_WF_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title03", "absolute", "380", "28", "110", "29", null, null, this.div_search);
            obj.set_taborder("9");
            obj.set_text("공상자코드");
            obj.set_cssclass("sta_WF_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_div_data04", "absolute", "113", "60", "70", "21", null, null, this.div_search);
            obj.set_taborder("29");
            obj.set_readonly("false");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "109", "140", null, "53", "0", null, this.div_search);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "0", "112", "110", "29", null, null, this.div_search);
            obj.set_taborder("11");
            obj.set_text("수입여부");
            obj.set_cssclass("sta_WF_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "0", "140", "110", "53", null, null, this.div_search);
            obj.set_taborder("12");
            obj.set_text("유통기한\r\n관리여부");
            obj.set_cssclass("sta_WF_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "109", "112", null, "29", "0", null, this.div_search);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "0", "192", "110", "29", null, null, this.div_search);
            obj.set_taborder("14");
            obj.set_text("박스당입수 *");
            obj.set_cssclass("sta_WF_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "380", "140", "110", "53", null, null, this.div_search);
            obj.set_taborder("15");
            obj.set_text("유통기한\r\n표기방법");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "109", "192", null, "29", "0", null, this.div_search);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "380", "112", "110", "29", null, null, this.div_search);
            obj.set_taborder("17");
            obj.set_text("RFID사용여부");
            obj.set_cssclass("sta_WF_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_div_list00", "absolute", "196", "60", "70", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("30");
            obj.set_innerdataset("@ds_wrs_dsc");
            obj.set_codecolumn("NA_WRS_ATTR_C");
            obj.set_datacolumn("NA_WRS_ATTNM");
            obj.set_index("-1");
            obj = new Combo("cbo_div_list02", "absolute", "113", "88", "151", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("32");
            obj.set_codecolumn("NA_WRS_ATTR_C");
            obj.set_datacolumn("NA_WRS_ATTNM");
            obj.set_innerdataset("@ds_wrs_dsc3");
            obj = new Combo("cbo_div_list04", "absolute", "493", "88", "151", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("45");
            obj.set_codecolumn("NA_WRS_ATTR_C");
            obj.set_datacolumn("NA_WRS_ATTNM");
            obj.set_innerdataset("@ds_wrs_dsc4");
            obj = new Static("sta_title01", "absolute", "380", "0", "110", "29", null, null, this.div_search);
            obj.set_taborder("18");
            obj.set_text("주류상품여부");
            obj.set_cssclass("sta_WF_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "380", "192", "110", "29", null, null, this.div_search);
            obj.set_taborder("19");
            obj.set_text("유효기간 *");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_store_code00", "absolute", "113", "4", "264", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_store_code00_innerdataset = new Dataset("rdo_store_code00_innerdataset", this.div_search.rdo_store_code00);
            rdo_store_code00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">일반상품</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">공병</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">공상자</Col></Row></Rows>");
            obj.set_innerdataset(rdo_store_code00_innerdataset);
            obj.set_taborder("21");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.style.set_font("9 Gulim");
            obj.set_value("1");
            obj.set_index("0");
            obj = new Edit("edt_div_data01", "absolute", "113", "32", "80", "21", null, null, this.div_search);
            obj.set_taborder("22");
            obj.set_inputtype("number");
            obj.set_cssclass("WF_Essential");
            obj.set_maxlength("25");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_div_data02", "absolute", "196", "32", "100", "21", null, null, this.div_search);
            obj.set_taborder("23");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup00", "absolute", "299", "32", "21", "21", null, null, this.div_search);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_div_data03", "absolute", "323", "32", "30", "21", null, null, this.div_search);
            obj.set_taborder("26");
            obj.set_maxlength("3");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "358", "32", "20", "21", null, null, this.div_search);
            obj.set_taborder("25");
            obj.set_text("개");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "186", "60", "10", "21", null, null, this.div_search);
            obj.set_taborder("27");
            obj.set_text("/");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "269", "60", "10", "21", null, null, this.div_search);
            obj.set_taborder("28");
            obj.set_text("/");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_div_list01", "absolute", "279", "60", "98", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("31");
            obj.set_codecolumn("NA_WRS_ATTR_C");
            obj.set_datacolumn("NA_WRS_ATTNM");
            obj.set_innerdataset("@ds_wrs_dsc2");
            obj = new Radio("rdo_store_code01", "absolute", "113", "116", "151", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_store_code01_innerdataset = new Dataset("rdo_store_code01_innerdataset", this.div_search.rdo_store_code01);
            rdo_store_code01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">여</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">부</Col></Row></Rows>");
            obj.set_innerdataset(rdo_store_code01_innerdataset);
            obj.set_taborder("33");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_index("-1");
            obj = new Radio("rdo_store_code02", "absolute", "113", "156", "151", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_store_code02_innerdataset = new Dataset("rdo_store_code02_innerdataset", this.div_search.rdo_store_code02);
            rdo_store_code02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">여</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">부</Col></Row></Rows>");
            obj.set_innerdataset(rdo_store_code02_innerdataset);
            obj.set_taborder("34");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_index("-1");
            obj = new Radio("rdo_store_code03", "absolute", "493", "4", "151", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_store_code03_innerdataset = new Dataset("rdo_store_code03_innerdataset", this.div_search.rdo_store_code03);
            rdo_store_code03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">여</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">부</Col></Row></Rows>");
            obj.set_innerdataset(rdo_store_code03_innerdataset);
            obj.set_taborder("36");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_index("-1");
            obj = new Edit("edt_div_data08", "absolute", "493", "32", "110", "21", null, null, this.div_search);
            obj.set_taborder("37");
            obj.set_inputtype("number");
            obj.set_cssclass("WF_Essential");
            obj.set_maxlength("25");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_div_data09", "absolute", "606", "32", "131", "21", null, null, this.div_search);
            obj.set_taborder("38");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup01", "absolute", "740", "32", "21", "21", null, null, this.div_search);
            obj.set_taborder("39");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_div_data10", "absolute", "493", "60", "110", "21", null, null, this.div_search);
            obj.set_taborder("41");
            obj.set_inputtype("number");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("false");
            obj.set_maxlength("25");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_div_data11", "absolute", "606", "60", "131", "21", null, null, this.div_search);
            obj.set_taborder("43");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_store_code04", "absolute", "493", "116", "151", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_store_code04_innerdataset = new Dataset("rdo_store_code04_innerdataset", this.div_search.rdo_store_code04);
            rdo_store_code04_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">여</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">부</Col></Row></Rows>");
            obj.set_innerdataset(rdo_store_code04_innerdataset);
            obj.set_taborder("40");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_index("-1");
            obj = new Edit("edt_div_data13", "absolute", "113", "196", "100", "21", null, null, this.div_search);
            obj.set_taborder("35");
            obj.set_readonly("false");
            obj.set_cssclass("WF_Essential");
            obj.set_value("1");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_div_list03", "absolute", "493", "156", "151", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_div_list03_innerdataset = new Dataset("cbo_div_list03_innerdataset", this.div_search.cbo_div_list03);
            cbo_div_list03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">유통기한</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">제조일자</Col></Row></Rows>");
            obj.set_innerdataset(cbo_div_list03_innerdataset);
            obj.set_taborder("42");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_visible("false");
            obj.set_index("-1");
            obj = new Static("Static17", "absolute", "0", "228", "110", "29", null, null, this.div_search);
            obj.set_taborder("44");
            obj.set_text("단수");
            obj.set_cssclass("sta_WF_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "109", "228", null, "29", "0", null, this.div_search);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "380", "228", "110", "29", null, null, this.div_search);
            obj.set_taborder("47");
            obj.set_text("박스 수");
            obj.set_cssclass("sta_WF_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "109", "284", null, "29", "0", null, this.div_search);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static23", "absolute", "0", "256", "110", "29", null, null, this.div_search);
            obj.set_taborder("49");
            obj.set_text("박스 중량(Kg)");
            obj.set_cssclass("sta_WF_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static24", "absolute", "0", "284", "110", "29", null, null, this.div_search);
            obj.set_taborder("50");
            obj.set_text("측면이미지");
            obj.set_cssclass("sta_WF_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static25", "absolute", "109", "256", null, "29", "0", null, this.div_search);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static29", "absolute", "380", "284", "110", "29", null, null, this.div_search);
            obj.set_taborder("52");
            obj.set_text("윗면이미지");
            obj.set_cssclass("sta_WF_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static30", "absolute", "0", "312", "110", "29", null, null, this.div_search);
            obj.set_taborder("53");
            obj.set_text("전면이미지");
            obj.set_cssclass("sta_WF_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static31", "absolute", "109", "312", null, "29", "0", null, this.div_search);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static33", "absolute", "380", "256", "110", "29", null, null, this.div_search);
            obj.set_taborder("55");
            obj.set_text("세로(CM)");
            obj.set_cssclass("sta_WF_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static34", "absolute", "380", "312", "110", "29", null, null, this.div_search);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static36", "absolute", "190", "228", "110", "29", null, null, this.div_search);
            obj.set_taborder("57");
            obj.set_text("적수");
            obj.set_cssclass("sta_WF_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static37", "absolute", "190", "256", "110", "29", null, null, this.div_search);
            obj.set_taborder("58");
            obj.set_text("가로(CM)");
            obj.set_cssclass("sta_WF_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static38", "absolute", "583", "228", "110", "29", null, null, this.div_search);
            obj.set_taborder("59");
            obj.set_text("박스 용적");
            obj.set_cssclass("sta_WF_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static39", "absolute", "583", "256", "110", "29", null, null, this.div_search);
            obj.set_taborder("60");
            obj.set_text("상품높이(CM)");
            obj.set_cssclass("sta_WF_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_div_data14", "absolute", "113", "232", "74", "21", null, null, this.div_search);
            obj.set_taborder("61");
            obj.set_readonly("false");
            obj.set_cssclass("WF_Essential");
            obj.set_value("0");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_div_data15", "absolute", "303", "232", "74", "21", null, null, this.div_search);
            obj.set_taborder("62");
            obj.set_readonly("false");
            obj.set_cssclass("WF_Essential");
            obj.set_value("0");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_div_data16", "absolute", "493", "232", "87", "21", null, null, this.div_search);
            obj.set_taborder("63");
            obj.set_readonly("false");
            obj.set_cssclass("WF_Essential");
            obj.set_value("0");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_div_data17", "absolute", "696", "232", "88", "21", null, null, this.div_search);
            obj.set_taborder("64");
            obj.set_readonly("false");
            obj.set_cssclass("WF_Essential");
            obj.set_value("0");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_div_data18", "absolute", "113", "260", "74", "21", null, null, this.div_search);
            obj.set_taborder("65");
            obj.set_readonly("false");
            obj.set_cssclass("WF_Essential");
            obj.set_value("0");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_div_data19", "absolute", "303", "260", "74", "21", null, null, this.div_search);
            obj.set_taborder("66");
            obj.set_readonly("false");
            obj.set_cssclass("WF_Essential");
            obj.set_value("0");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_div_data20", "absolute", "493", "260", "87", "21", null, null, this.div_search);
            obj.set_taborder("67");
            obj.set_readonly("false");
            obj.set_cssclass("WF_Essential");
            obj.set_value("0");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_div_data21", "absolute", "696", "260", "88", "21", null, null, this.div_search);
            obj.set_taborder("68");
            obj.set_readonly("false");
            obj.set_cssclass("WF_Essential");
            obj.set_value("0");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static35", "absolute", "109", "400", null, "29", "0", null, this.div_search);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static40", "absolute", "0", "348", "110", "53", null, null, this.div_search);
            obj.set_taborder("70");
            obj.set_text("기본단위\r\n구분코드");
            obj.set_cssclass("sta_WF_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static41", "absolute", "0", "400", "110", "29", null, null, this.div_search);
            obj.set_taborder("71");
            obj.set_text("바이어 *");
            obj.set_cssclass("sta_WF_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static42", "absolute", "109", "348", null, "53", "0", null, this.div_search);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static43", "absolute", "380", "348", "110", "53", null, null, this.div_search);
            obj.set_taborder("73");
            obj.set_text("신청내용\r\n신청자전화");
            obj.set_cssclass("sta_WF_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static44", "absolute", "0", "428", "110", "29", null, null, this.div_search);
            obj.set_taborder("74");
            obj.set_text("최초등록일시");
            obj.set_cssclass("sta_WF_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static45", "absolute", "109", "428", null, "29", "0", null, this.div_search);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static46", "absolute", "380", "428", "110", "29", null, null, this.div_search);
            obj.set_taborder("76");
            obj.set_text("최종변경일시");
            obj.set_cssclass("sta_WF_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_div_data30", "absolute", "493", "404", "110", "21", null, null, this.div_search);
            obj.set_taborder("77");
            obj.set_readonly("false");
            obj.set_inputtype("number");
            obj.set_maxlength("25");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static47", "absolute", "0", "456", "110", "29", null, null, this.div_search);
            obj.set_taborder("78");
            obj.set_text("최종사용자");
            obj.set_cssclass("sta_WF_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static48", "absolute", "109", "456", null, "29", "0", null, this.div_search);
            obj.set_taborder("79");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static49", "absolute", "380", "456", "110", "29", null, null, this.div_search);
            obj.set_taborder("80");
            obj.set_text("최종사용사업장");
            obj.set_cssclass("sta_WF_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_div_data31", "absolute", "606", "404", "131", "21", null, null, this.div_search);
            obj.set_taborder("81");
            obj.set_readonly("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_div_list06", "absolute", "113", "364", "234", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("82");
            obj.set_innerdataset("@ds_unt_dsc");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_codecolumn("SIMP_C");
            obj.set_readonly("true");
            obj = new Static("Static57", "absolute", "380", "400", "110", "29", null, null, this.div_search);
            obj.set_taborder("83");
            obj.set_text("계약업체 *");
            obj.set_cssclass("sta_WF_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_div_data25", "absolute", "113", "404", "100", "21", null, null, this.div_search);
            obj.set_taborder("84");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.set_maxlength("13");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_div_data26", "absolute", "216", "404", "131", "21", null, null, this.div_search);
            obj.set_taborder("85");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup02", "absolute", "350", "404", "21", "21", null, null, this.div_search);
            obj.set_taborder("86");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_div_data27", "absolute", "113", "432", "234", "21", null, null, this.div_search);
            obj.set_taborder("87");
            obj.set_inputtype("number");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_div_data28", "absolute", "113", "460", "110", "21", null, null, this.div_search);
            obj.set_taborder("88");
            obj.set_inputtype("number");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_div_data29", "absolute", "226", "460", "121", "21", null, null, this.div_search);
            obj.set_taborder("89");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_div_data32", "absolute", "493", "352", "244", "21", null, null, this.div_search);
            obj.set_taborder("90");
            obj.set_readonly("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_div_data33", "absolute", "493", "376", "244", "21", null, null, this.div_search);
            obj.set_taborder("91");
            obj.set_readonly("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_div_data34", "absolute", "493", "432", "244", "21", null, null, this.div_search);
            obj.set_taborder("92");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_div_data35", "absolute", "493", "460", "110", "21", null, null, this.div_search);
            obj.set_taborder("93");
            obj.set_readonly("false");
            obj.set_enable("false");
            obj.set_maxlength("13");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_div_data36", "absolute", "606", "460", "131", "21", null, null, this.div_search);
            obj.set_taborder("94");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_div_list05", "absolute", "544", "196", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("95");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_innerdataset("@ds_vld_prd_dsc");
            obj.set_visible("false");
            obj = new FileUpload("FileUpload00", "absolute", "111", "288", "266", "21", null, null, this.div_search);
            obj.set_taborder("96");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);
            obj = new FileUpload("FileUpload01", "absolute", "111", "316", "266", "21", null, null, this.div_search);
            obj.set_taborder("97");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);
            obj = new FileUpload("FileUpload02", "absolute", "491", "288", "266", "21", null, null, this.div_search);
            obj.set_taborder("98");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_file_data", "absolute", "537", "316", "88", "21", null, null, this.div_search);
            obj.set_taborder("99");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_file2_data", "absolute", "624", "316", "89", "21", null, null, this.div_search);
            obj.set_taborder("100");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_file3_data", "absolute", "695", "316", "85", "21", null, null, this.div_search);
            obj.set_taborder("101");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_day", "absolute", "493", "196", "48", "21", null, null, this.div_search);
            obj.set_taborder("102");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Radio("rdo_store_code01", "absolute", "113", "328", "151", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_store_code01_innerdataset = new Dataset("rdo_store_code01_innerdataset", this.rdo_store_code01);
            rdo_store_code01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">여</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">부</Col></Row></Rows>");
            obj.set_innerdataset(rdo_store_code01_innerdataset);
            obj.set_taborder("16");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.style.set_font("9 Gulim");
            obj.set_value("0");
            obj.set_index("1");

            obj = new Button("btn_clear02", "absolute", null, "0", "53", "21", "59", null, this);
            obj.set_taborder("94");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title13", "absolute", "0", "973", "110", "29", null, null, this);
            obj.set_taborder("55");
            obj.set_text("점포유형");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title18", "absolute", "0", "1001", "110", "29", null, null, this);
            obj.set_taborder("61");
            obj.set_text("관리수수료");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar10", "absolute", "109", "1241", null, "29", "15", null, this);
            obj.set_taborder("95");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar11", "absolute", "0", "1213", null, "29", "15", null, this);
            obj.set_taborder("96");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear01", "absolute", "737", "1217", "47", "21", null, null, this);
            obj.set_taborder("82");
            obj.set_text("CLEAR");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add_modify01", "absolute", "659", "1217", "75", "21", null, null, this);
            obj.set_taborder("83");
            obj.set_text("행추가/수정");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_treat_count03", "absolute", "143", "1217", "25", "21", null, null, this);
            obj.set_taborder("92");
            obj.set_text("건");
            this.addChild(obj.name, obj);

            obj = new Static("sta_treatment01", "absolute", "7", "1217", "110", "21", null, null, this);
            obj.set_taborder("78");
            obj.set_text("처리대상건수 :");
            this.addChild(obj.name, obj);

            obj = new Static("sta_treat_count01", "absolute", "119", "1217", "25", "21", null, null, this);
            obj.set_taborder("79");
            obj.set_text("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title22", "absolute", "392", "1241", "110", "29", null, null, this);
            obj.set_taborder("72");
            obj.set_text("매입처코드");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_list_wrs05", "absolute", "113", "1245", "221", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("59");
            obj.set_enable("false");
            obj.set_datacolumn("SHRT_BZPLNM");
            obj.set_codecolumn("NA_BZPLC");
            obj.set_innerdataset("@ds_Bzplc");
            obj.set_index("-1");

            obj = new CheckBox("chk_del_yn01", "absolute", "340", "1246", "46", "19", null, null, this);
            obj.set_taborder("73");
            obj.set_text("삭제");
            obj.style.set_font("8 Gulim");
            obj.set_enable("false");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data18", "absolute", "611", "1245", "149", "21", null, null, this);
            obj.set_taborder("71");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            obj.set_value("대상에프앤에프(주)");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popup03", "absolute", "763", "1245", "21", "21", null, null, this);
            obj.set_taborder("63");
            obj.set_cssclass("btn_WF_Searchbtn");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data17", "absolute", "505", "1245", "103", "21", null, null, this);
            obj.set_taborder("70");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            obj.set_value("8801099000016");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar03", "absolute", "109", "164", "272", "29", null, null, this);
            obj.set_taborder("97");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data03", "absolute", "113", "168", "264", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pagename04", "absolute", "0", "1189", "180", "21", null, null, this);
            obj.set_taborder("98");
            obj.set_text("추가정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_search_sep", "absolute", "116", "70", "235", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_search_sep_innerdataset = new Dataset("rdo_search_sep_innerdataset", this.rdo_search_sep);
            rdo_search_sep_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">신규상품등록</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">요청상품정보변경</Col></Row></Rows>");
            obj.set_innerdataset(rdo_search_sep_innerdataset);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_value("1");
            obj.set_index("0");

            obj = new Radio("rdo_store_code02", "absolute", "493", "254", "256", "34", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_store_code02_innerdataset = new Dataset("rdo_store_code02_innerdataset", this.rdo_store_code02);
            rdo_store_code02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">1차상품</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">2차공산품</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">2차자재품</Col></Row></Rows>");
            obj.set_innerdataset(rdo_store_code02_innerdataset);
            obj.set_taborder("21");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("6");

            obj = new Edit("edt_WRS_MODIFY_YN", "absolute", null, "5", "84", "21", "172", null, this);
            obj.set_taborder("99");
            obj.set_value("0");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_input_sep", "absolute", "569", "1217", "65", "21", null, null, this);
            obj.set_taborder("100");
            obj.set_text("0");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_DELETE_YN", "absolute", "696", "71", "86", "21", null, null, this);
            obj.set_taborder("101");
            obj.set_text("삭제");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 485, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("52");
            		p.style.set_border("0 solid #808080ff");
            		p.style.set_bordertype("normal 0 0");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 1437, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1540");
            		p.set_titletext("신규상품 등록");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edt_data13","value","ds_wrs_rg_req","RQ_NA_WRS_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edt_data03","value","ds_wrs_rg_req","WRSNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_data04","value","ds_wrs_rg_req","WRS_ABR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edt_data05","value","ds_wrs_rg_req","WRS_ENM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edt_data06","value","ds_wrs_rg_req","NA_WRS_LCLC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","edt_data07","value","ds_wrs_rg_req","NA_WRS_MCLC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","edt_data08","value","ds_wrs_rg_req","NA_WRS_SCLC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","edt_data09","value","ds_wrs_rg_req","NA_WRS_DTCF_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","edt_data12","value","ds_wrs_rg_req","WRS_STDNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","rdo_store_code03","value","ds_wrs_rg_req","TXT_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","div_search.rdo_store_code03","value","ds_wrs_rg_req","LIQ_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","div_search.rdo_store_code00","value","ds_wrs_rg_req","WRS_TPC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","edt_data15","value","ds_wrs_rg_req","MFT_NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","div_search.edt_div_data04","value","ds_wrs_rg_req","WHT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","div_search.cbo_div_list00","value","ds_wrs_rg_req","NA_WRS_UNT_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","rdo_store_code01","value","ds_wrs_rg_req","COMM_WRS_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","div_search.edt_div_data10","value","ds_wrs_rg_req","NA_WRS_BRAN_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","div_search.cbo_div_list02","value","ds_wrs_rg_req","NA_WRS_CSTD_METC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","div_search.cbo_div_list04","value","ds_wrs_rg_req","NA_WRS_UZC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","div_search.rdo_store_code01","value","ds_wrs_rg_req","NA_WRS_IPO_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","div_search.cbo_div_list05","value","ds_wrs_rg_req","VLD_PRD_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","cbo_list_wrs00","value","ds_wrs_rg_req","NA_WRS_STD_UNT_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","div_search.edt_div_data21","value","ds_wrs_rg_req","WRS_HGHT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","div_search.edt_div_data20","value","ds_wrs_rg_req","WRS_LEN_LEN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","div_search.edt_div_data19","value","ds_wrs_rg_req","WRS_WDTH_LEN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","div_search.edt_div_data01","value","ds_wrs_rg_req","VCBT_NA_WRS_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","div_search.edt_div_data03","value","ds_wrs_rg_req","VCBT_QT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","txa_contents00","value","ds_wrs_rg_req","WRS_DTL_EXPL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","div_search.edt_div_data13","value","ds_wrs_rg_req","BOXPE_AQZ");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","div_search.edt_div_data27","value","ds_wrs_rg_req","FSRG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","div_search.edt_div_data34","value","ds_wrs_rg_req","LSCHG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","div_search.edt_div_data35","value","ds_wrs_rg_req","LSCGMN_NA_BZPLC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","div_search.cbo_div_list06","value","ds_wrs_rg_req","BSC_UNT_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","div_search.edt_div_data14","value","ds_wrs_rg_req","PLTPE_SGNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item38","div_search.edt_div_data15","value","ds_wrs_rg_req","PLTPE_LYNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","div_search.edt_div_data16","value","ds_wrs_rg_req","PLTPE_BOX_CN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item40","div_search.edt_div_data17","value","ds_wrs_rg_req","BOX_BULK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","div_search.edt_div_data18","value","ds_wrs_rg_req","BOX_WT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item42","div_search.edt_div_data08","value","ds_wrs_rg_req","VCBX_NA_WRS_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item44","div_search.edt_div_data32","value","ds_wrs_rg_req","RQ_CNTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item43","div_search.edt_div_data33","value","ds_wrs_rg_req","CTCPL_TELNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item45","cbo_list_wrs02","value","ds_wrs_rg_req","SLGT_ETR_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","rdo_store_code02","value","ds_wrs_rg_req","WRS_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item46","div_search.rdo_store_code02","value","ds_wrs_rg_req","DSTR_TER_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item47","div_search.rdo_store_code04","value","ds_wrs_rg_req","RFID_UYN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item48","div_search.cbo_div_list03","value","ds_wrs_rg_req","DSTR_TER_MRK_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item49","edt_WRS_MODIFY_YN","value","ds_wrs_rg_req","WRS_MODIFY_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_search.edt_div_data25","value","ds_wrs_rg_req","BUYER_ENO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item50","div_search.cbo_div_list01","value","ds_wrs_rg_req","NA_WRS_PAK_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item51","edt_data19","value","ds_wrs_rg_req","STPL_AMN_NA_WRS_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","cbo_list_wrs03","value","ds_wrs_rg_req","SMA_APL_TPC");
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
        this.addIncludeScript("VAN_DS_SC_1540.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1540.xfdl", function() {
        //include "lib::comLib.xjs";

        var TRPL_C = application.gv_glnCode; // 로그인 사업장코드
        var TRPL_NM = application.gv_companyName; //로그인 사업장명

        

        this.form_onload = function(obj,e) 
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function() //onload
        {
        	this.ds_wrs_rg_req.addRow();
        	
        	var fileParam = {
        		form:this,		
        		param:[{
        				fileObj: this.div_search.FileUpload00,
        				maxSize:1,										//허용할 파일 사이즈(MB)
        				maxLength:1,									//허용할 파일갯수
        				ext:['jpg','jpeg'],								//허용할 확장자명
        				//valid_after_fail: 'FileUpload_onerror',  		//파일검사 실패후 호출할 함수이름
        				upload_after_succ: 'FileUpload_onsuccess'    	//파일 업로드 성공후 호출할 함수이름
        				//upload_after_fail: 'FileUpload_onerror'  		//파일 업로드 실패후 호출할 함수이름
        			},
        			{
        				fileObj: this.div_search.FileUpload01,
        				maxSize:1,										//허용할 파일 사이즈(MB)
        				maxLength:1,									//허용할 파일갯수
        				ext:['jpg','jpeg'],								//허용할 확장자명
        				upload_after_succ: 'FileUpload_onsuccess'
        			},
        			{
        				fileObj: this.div_search.FileUpload02,
        				maxSize:1,										//허용할 파일 사이즈(MB)
        				maxLength:1,									//허용할 파일갯수
        				ext:['jpg','jpeg'],								//허용할 확장자명
        				upload_after_succ: 'FileUpload_onsuccess'
        			}]
        	};
        	this.gfn_addEventFileUpload(fileParam);
        	
        	var param = [
         		{code:"SMA_APL_TPC", dsName:"ds_sma_apl_tpc", selecttype:"S"}, 	// 0.영세구분코드
         		{code:"NA_WRS_UNT_C", dsName:"ds_std_unt_c", selecttype:"S"}, 	// 1.단위코드
         		{code:"WRS_ID_DSC", dsName:"ds_wrs_id_dsc", selecttype:"S"}, 	// 2.상품식별구분코드
         		{code:"VLD_PRD_DSC", dsName:"ds_vld_prd_dsc", selecttype:"S"}, 	// 3.유통기한표기방법
         		{code:"BSC_UNT_DSC", dsName:"ds_unt_dsc", selecttype:"S"}		// 4.기본단위구분코드
            ];
        	this.gfn_setCommonCode(param);
        	
        	var todays = this.gfn_today('yyyy-MM-dd');
        	
        	this.edt_data15.set_value(TRPL_C);
        	this.edt_data16.set_value(TRPL_NM);
        	this.edt_data17.set_value(TRPL_C);
        	this.edt_data18.set_value(TRPL_NM);
        	this.div_search.edt_div_data27.set_value(todays);
        	this.div_search.edt_div_data28.set_value(application.gv_userId);
        	this.div_search.edt_div_data29.set_value(application.gv_userName);
        	this.div_search.edt_div_data34.set_value(todays);
        	this.div_search.edt_div_data35.set_value(TRPL_C);
        	this.div_search.edt_div_data36.set_value(TRPL_NM);
        	this.rdo_store_code01.set_value(0);
        	this.rdo_store_code02.set_value(6);
        	this.rdo_store_code03.set_value(1);
        	
        	this.cbo_list_wrs03.set_value("");
        	this.div_search.rdo_store_code00.set_value(1);
        	this.div_search.rdo_store_code01.set_value(0);
        	this.div_search.rdo_store_code02.set_value(0);
        	this.div_search.rdo_store_code03.set_value(0);
        	this.div_search.rdo_store_code04.set_value(0);
        	this.div_search.cbo_div_list00.set_value("");
        	this.div_search.cbo_div_list02.set_value("");
        	this.div_search.cbo_div_list04.set_value("");
        	this.div_search.cbo_div_list06.set_value("S");
        	this.cbo_list_wrs02.set_value(2);
        	this.div_search.edt_div_data13.set_value("1");
        	this.div_search.cbo_div_list03.set_index(0);
        	this.cbo_list_wrs05.set_index(0);
        	
        	this.btnDisable(this.btn_save00);
        	
        	this.initcif();
        	this.getBzpl();
        }

        //업체 정보
        this.initcif = function()
        {
        	var params		  = "TRPL_C="+TRPL_C
        						+" separator=0";
        	var sSvcID        = "p_initcif";//통신아이디
        	var sURL          = "svc::rest/pds/partner/Trade/retrieveDirectTrade";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_CIF_INFO=ds_CIF_INFO";
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType 	  = "U"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        //물류센터 조회
        this.getBzpl = function()
        {
        	var params = "TRPL_C="+application.gv_glnCode;
        	
        	var sSvcID        = "getBzpl_code";//통신아이디
        	var sURL          = "svc::rest/pds/stock/getBZPLCode";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_Bzplc=ds_Bzplc";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        
        // 계약구분에 따른 입력정보 enable 옵션
        this.cbo_list_wrs02_onitemchanged = function(obj,e)
        {
        	// 수탁일 경우
        	if(this.cbo_list_wrs02.value == 2){
        		this.cbo_list_wrs04.set_enable(false);
        		this.cbo_list_wrs05.set_enable(false);
        		this.mae_input_pay00.set_enable(false);
        		this.mae_input_pay01.set_enable(false);
        		this.mae_input_pay02.set_enable(false);
        		this.mae_input_pay03.set_enable(false);
        		this.mae_input_pay04.set_enable(false);
        		this.mae_input_pay05.set_enable(false);
        		this.mae_input_pay06.set_enable(false);
        		this.edt_data17.set_enable(false);
        		this.edt_data18.set_enable(false);
        		this.chk_del_yn01.set_enable(false);
        		this.chk_all_click00.set_enable(false);
        		this.btn_popup03.set_enable(false);
        		this.btn_add_modify00.set_enable(false);
        		this.btn_clear00.set_enable(false);
        		this.btn_add_modify01.set_enable(false);
        		this.btn_clear01.set_enable(false);
        		this.div_search.edt_div_data14.set_enable(false);
        		this.div_search.edt_div_data15.set_enable(false);
        		this.div_search.edt_div_data16.set_enable(false);
        		this.div_search.edt_div_data17.set_enable(false);
        		this.div_search.edt_div_data18.set_enable(false);
        		this.div_search.edt_div_data19.set_enable(false);
        		this.div_search.edt_div_data20.set_enable(false);
        		this.div_search.edt_div_data21.set_enable(false);
        	}else{
        	// 매입일 경우
        		this.cbo_list_wrs04.set_enable(true);
        		this.cbo_list_wrs05.set_enable(true);
        		this.mae_input_pay00.set_enable(true);
        		this.mae_input_pay01.set_enable(true);
        		this.mae_input_pay02.set_enable(true);
        		this.mae_input_pay03.set_enable(true);
        		this.mae_input_pay04.set_enable(true);
        		this.mae_input_pay05.set_enable(true);
        		this.mae_input_pay06.set_enable(true);
        		this.edt_data17.set_enable(true);
        		this.edt_data18.set_enable(true);
        		this.chk_del_yn01.set_enable(true);
        		this.chk_all_click00.set_enable(true);
        		this.btn_popup03.set_enable(true);
        		this.btn_add_modify00.set_enable(true);
        		this.btn_clear00.set_enable(true);
        		this.btn_add_modify01.set_enable(true);
        		this.btn_clear01.set_enable(true);
        		this.div_search.edt_div_data14.set_enable(true);
        		this.div_search.edt_div_data15.set_enable(true);
        		this.div_search.edt_div_data16.set_enable(true);
        		this.div_search.edt_div_data17.set_enable(true);
        		this.div_search.edt_div_data18.set_enable(true);
        		this.div_search.edt_div_data19.set_enable(true);
        		this.div_search.edt_div_data20.set_enable(true);
        		this.div_search.edt_div_data21.set_enable(true);
        		this.cbo_list_wrs04.set_value(00);
        	}
        }
        //조회구분
        this.rdo_search_sep_onitemchanged = function(obj,e)
        {
        	if(this.rdo_search_sep.value == "1"){
        		this.chk_TEMP_YN.set_visible(true);
        		this.chk_DELETE_YN.set_value(0);
        		this.chk_DELETE_YN.set_visible(false);
        	}else{
        		this.chk_TEMP_YN.set_visible(false);
        		this.chk_TEMP_YN.set_value(0);
        		this.chk_DELETE_YN.set_visible(true);
        	}
        }

        // 공동상품여부/박스상품구분 Edit visible 여부
        this.cbo_list_wrs01_onitemchanged = function(obj,e)
        {
        	if(this.cbo_list_wrs01.value == 1){
        		this.edt_data19.set_visible(false);
        		this.edt_data19.set_value("");
        	}else{
        		this.edt_data19.set_visible(true);
        	}
        }

        //상품변경(상품기본테이블) 조회 
        // this.search = function()
        // {
        // 	var params 		  = "NA_WRS_C="+this.edt_data20.value
        // 						+" separator=1";
        // 	var sSvcID        = "trpl_c_search";//통신아이디
        // 	var sURL          = "svc::rest/pds/pricat/Product/retrieveNewGoods";// 호출할 서버 페이지 주소
        // 	var sInDatasets   = "";//보내는데이터셋
        // 	var sOutDatasets  = "ds_wrs_rg_req=ds_wrs_rg_req";
        // 	var sArgument     = params;// 파라미터
        // 	var sCallbackFunc = "fn_callback";//콜백
        // 	var tranType 	  = "S"; // U:저장/삭제, S:조회
        // 	
        // 	//API 호출
        // 	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        // }

        this.van_search = function(van_code)
        {
        	var params 		  = "VAN_C="+van_code
        						+" separator=2";
        	var sSvcID        = "van_code_search";//통신아이디
        	var sURL          = "svc::rest/pds/pricat/Product/retrieveNewGoods";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_wrs_rg_req=ds_wrs_rg_req ds_input_data=ds_input_data ds_uploadsave=ds_uploadsave ds_input_add_data=ds_input_add_data";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType 	  = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        //저장 및 수정
        this.btn_save00_onclick = function(obj,e)
        {
        	if(this.validation() !=true){
        		return;
        	}
        	bok = application.confirm('[신규상품 (신규/변경) 요청] 등록을 하시겠습니까? \n\n\n※ 하나로마트분사의 승인처리가 완료되면 상품등록이 됩니다.');
        	if(bok == true){
        		var prgrval = "";
        		for(var i =0;i<this.grd_main00.rowcount;i++){
        			if(i<this.grd_main00.rowcount-1){
        				prgrval = "orgpr="+this.ds_input_data.getOrgColumn(i,"PRGR_C")+"/";
        			}else if(i==this.grd_main00.rowcount-1){
        				prgrval = "orgpr="+this.ds_input_data.getOrgColumn(i,"PRGR_C")
        			}
        		}
        		//상품 기본
        		this.addRowFile();	//이미지 파일 데이터셋에 저장
        		this.ds_wrs_rg_req.setColumn(0,"APV_RQ_NA_BZPLC",TRPL_C);
        		this.ds_wrs_rg_req.setColumn(0,"FSRGMN_NA_BZPLC",TRPL_C);
        		
        		prgrval += " rdo_sep="+this.rdo_search_sep.value
        				  +" chk_temp_yn="+this.chk_TEMP_YN.value
        				  +" chk_del_yn="+this.chk_DELETE_YN.value;
        		
        		var params 		  = prgrval;
        		var sSvcID        = "p_save";//통신아이디
        		var sURL          = "svc::rest/pds/pricat/Product/insertNewGoods";// 호출할 서버 페이지 주소
        		var sInDatasets   = "in_ds=ds_input_data:A in_mainds=ds_wrs_rg_req:A in_upload=ds_uploadsave:A in_ds_wrs=ds_input_add_data:A";//보내는데이터셋
        		var sOutDatasets  = "";
        		var sArgument     = params;// 파라미터
        		var sCallbackFunc = "fn_callback";//콜백
        		var tranType 	  = "U"; // U:저장/삭제, S:조회
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        	}else{
        		return false;
        	}
        }

        //2차상품코드 조회
        this.searchCLC = function(gubuncode)
        {
        	var params = "clc_gubun="+gubuncode
        				+" wrs_dsc=01"
        				+" wrs_dsc2=02"
        				+" wrs_dsc3=09"
        				+" wrs_dsc4=11";
        	var sSvcID        = "search_lclc";//통신아이디
        	var sURL          = "svc::rest/pds/pricat/Product/retrieveCLCGoods";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_wrs_dsc=ds_wrs_dsc ds_wrs_dsc2=ds_wrs_dsc2 ds_wrs_dsc3=ds_wrs_dsc3 ds_wrs_dsc4=ds_wrs_dsc4";
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType 	  = "U"; // U:저장/삭제, S:조회
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        this.fn_callback = function(svcID,nCD,sMSG) //첫번째 인자값은 통신 ID
        {
        	if(nCD < 0)
        	{
        		this.gfn_getMessage("alert", sMSG);
        		return;
        	}else{
        		if(svcID == "getBzpl_code"){
        			if (this.ds_Bzplc.insertRow(0) != -1){
        				this.ds_Bzplc.setColumn(0,"NA_BZPLC","00");
        				this.ds_Bzplc.setColumn(0,"SHRT_BZPLNM","- 선택 -");
        			};
        			this.cbo_list_wrs05.set_index(0);
        		}
        		if(svcID == "trpl_c_search" && sMSG == "completeSearch"){
        			this.edt_data13.set_value(this.edt_data21.value);
        			this.edt_data10.set_value(
        										this.edt_data06.value+"/"+
        										this.edt_data07.value+"/"+
        										this.edt_data08.value+"/"+
        										this.edt_data09.value
        										);
        			this.edt_data11.set_value(
        										this.ds_wrs_rg_req.getColumn(0,"WRS_LCLFNM")+"/"+
        										this.ds_wrs_rg_req.getColumn(0,"WRS_MCLFNM")+"/"+
        										this.ds_wrs_rg_req.getColumn(0,"WRS_SCLFNM")+"/"+
        										this.ds_wrs_rg_req.getColumn(0,"WRS_DTCFNM")
        										);
        			this.cbo_list_wrs00.set_value(this.ds_wrs_rg_req.getColumn(0,"WRS_ID_DSC"));
        		}
        		if(svcID == "van_code_search" && sMSG =="completeSearch"){
        			var ds_wrs = this.ds_wrs_rg_req;
        			var ds_upl = this.ds_uploadsave;
        			this.sta_treat_count00.set_text(this.grd_main00.rowcount);
        			
        			this.edt_data10.set_value(
        									ds_wrs.getColumn(0,"NA_WRS_LCLC")+
        									ds_wrs.getColumn(0,"NA_WRS_MCLC")+
        									ds_wrs.getColumn(0,"NA_WRS_SCLC")+
        									ds_wrs.getColumn(0,"NA_WRS_DTCF_C")
        									);
        			this.cbo_list_wrs02_onitemchanged();
        		}
        		if(svcID == "p_save" && sMSG == "SUCCESS"){
        			this.gfn_getMessage('alert','result.message.save.success');
        		}
        		if(svcID == "p_initcif"){
        			this.div_search.edt_div_data30.set_value(this.ds_CIF_INFO.getColumn(0,"NA_TRPL_C"));
        			this.div_search.edt_div_data31.set_value(this.ds_CIF_INFO.getColumn(0,"CLNTNM"));
        			this.div_search.edt_div_data33.set_value(this.ds_CIF_INFO.getColumn(0,"ATEL")
        													+"-"+this.ds_CIF_INFO.getColumn(0,"HTEL")
        													+"-"+this.ds_CIF_INFO.getColumn(0,"STEL")
        													);
        		}
        		if(svcID == "search_wrs" && sMSG == "SUCCESS"){
        			if(nCD == 1){
        				this.alert('이미 등록된 상품코드 입니다.');
        				return;
        			}
        		}
        		if(svcID == "search_lclc"){
        			if (this.ds_wrs_dsc.insertRow(0) != -1){
        				this.ds_wrs_dsc.setColumn(0,"NA_WRS_ATTR_C","");
        				this.ds_wrs_dsc.setColumn(0,"NA_WRS_ATTNM","[] 선택안됨");
        			};
        			
        			
        			if (this.ds_wrs_dsc2.insertRow(0) != -1){
        				this.ds_wrs_dsc2.setColumn(0,"NA_WRS_ATTR_C","");
        				this.ds_wrs_dsc2.setColumn(0,"NA_WRS_ATTNM","[] 선택안됨");
        			};
        			
        			if (this.ds_wrs_dsc3.insertRow(0) != -1){
        				this.ds_wrs_dsc3.setColumn(0,"NA_WRS_ATTR_C","");
        				this.ds_wrs_dsc3.setColumn(0,"NA_WRS_ATTNM","[] 선택안됨");
        			};

        			if (this.ds_wrs_dsc4.insertRow(0) != -1){
        				this.ds_wrs_dsc4.setColumn(0,"NA_WRS_ATTR_C","");
        				this.ds_wrs_dsc4.setColumn(0,"NA_WRS_ATTNM","[] 선택안됨");
        			};
        			this.div_search.cbo_div_list00.set_index(0);
        			this.div_search.cbo_div_list01.set_index(0);
        			this.div_search.cbo_div_list02.set_index(0);
        			this.div_search.cbo_div_list04.set_index(0);
        		}
        		
        	}
        }

        //상품코드 validation 체크
        this.isValueWrsCode = function()
        {
        	var trcode = this.gfn_nullToEmpty(this.edt_data13.value);
        	if(trcode.length < 8 || trcode.length > 18 || 
        	(trcode.length != 8 && trcode.length !=13 && trcode.length !=14 && trcode.length != 18)){
        		return false;
        	}
        	
        	var lastDigit = Number(trcode.substring(trcode.length -1));
        	var checkSum = 0;
        	if(isNaN(lastDigit)){return false;}
        	
        	var arr = trcode.substring(0,trcode.length-1).split("").reverse();
        	var oddTotal = 0;
        	var evenTotal = 0;
        	
        	for(var i=0; i<arr.length; i++)
        	{
        		if (isNaN(arr[i])) { return false; } 
        		if (i % 2 == 0) { oddTotal += Number(arr[i]) * 3; } 
        		else { evenTotal += Number(arr[i]); } 
        	}
        	checkSum = (10 - ((evenTotal + oddTotal) % 10)) % 10;
        	
        	return checkSum == lastDigit;
        }

        //등록하는 상품코드가 상품기본 테이블에 있는지 체크
        this.wrsCheck = function()
        {
        	var wrs_c = this.edt_data13.value;
        	
        	var params = 'wrs_c='+wrs_c
        				+' separator=0';
        	var sSvcID        = "search_wrs";//통신아이디
        	var sURL          = "svc::rest/pds/pricat/Product/retrieveNewGoods";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "";
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType 	  = "U"; // U:저장/삭제, S:조회
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType, true);
        }

        // 입력정보 단가 행추가/수정 버튼
        this.btn_control00_onclick = function(obj,e)
        {	
        	if(this.validation() !=true)return false;
        	
        	if(this.mae_input_pay00.value == "0" || this.gfn_nullToEmpty(this.mae_input_pay00.value) == ""){
        		this.gfn_getMessage("alert", 'msg.van_ds_sc_1540.view.simple.text5');
        		return false;
        	}else if(this.mae_input_pay02.value == "0" || this.gfn_nullToEmpty(this.mae_input_pay02.value) == ""){
        		this.gfn_getMessage("alert", 'msg.van_ds_sc_1540.view.simple.text6');
        		return false;
        	}
        	
        	var rownum = [];
        	var bok;
        	for(var i=0;i<this.grd_main00.rowcount;i++){	//등록된 수만큼 돌린다.
        		rownum[i] = this.ds_input_data.getColumn(i,"PRGR_C");	//처음부터 끝까지의 점포유형코드
        		if(this.sta_input_val00.text == "0"){
        			if(rownum[i] == this.cbo_list_wrs04.value){
        				bok = application.confirm(this.edt_data13.text+" ["+this.edt_data03.text+"]["+this.cbo_list_wrs04.value+"] 는(은) 이미 등록된 자료입니다. 수정하시겠습니까 ?");
        				if(bok == true){
        					for(var y=0;y<this.grd_main00.rowcount;y++){
        						if(this.ds_input_data.getColumn(y,"PRGR_C") == this.cbo_list_wrs04.value){
        							this.alert("이미 같은 코드가 등록되어있습니다.");
        							this.btn_clear_onclick();
        							return;
        						}
        					}
        					this.sta_input_val00.set_text("1");
        				}else{
        					return false;
        				}
        			}
        		}else if(this.sta_input_val00.text == "1"){
        			if(rownum[i] == this.cbo_list_wrs04.value){
        				if(this.cbo_list_wrs04.value != this.ds_input_data.getColumn(this.ds_input_data.rowposition,"PRGR_C")){
        					this.alert("이미 같은 코드가 등록되어있습니다.");
        					this.btn_clear_onclick();
        					return;					
        				}
        			}		
        		}
        	}
        	var prgr_ch = this.cbo_list_wrs04.value;
        	if(prgr_ch == '0'){
        		prgr_ch = '00';
        	}
        	
        	//추가부분
        	if(this.sta_input_val00.text == "0"){
        		var aRow = this.ds_input_data.addRow();
        		this.ds_input_data.setColumn(aRow,"PRGR_C",prgr_ch); 							// 1.점포유형
        		this.ds_input_data.setColumn(aRow,"PRGR_C_TEXT",this.cbo_list_wrs04.text); 		// 2.점포유형명
        		this.ds_input_data.setColumn(aRow,"BYNG_UPR",this.mae_input_pay00.value);	  	// 3.매입단가
        		this.ds_input_data.setColumn(aRow,"SEL_UPR",this.mae_input_pay01.value);	  	// 4.공급단가
        		this.ds_input_data.setColumn(aRow,"PY_FDTCN",this.mae_input_pay02.value);	  	// 5.지급기일수
        		this.ds_input_data.setColumn(aRow,"AMN_FEERT",this.mae_input_pay03.value);	  	// 6.관리수수료
        		this.ds_input_data.setColumn(aRow,"TROT_FEERT",this.mae_input_pay04.value);	  	// 7.업체수수료
        		this.ds_input_data.setColumn(aRow,"PHD_FEERT",this.mae_input_pay05.value);	  	// 8.물류수수료
        		this.ds_input_data.setColumn(aRow,"DDLY_PHD_FEERT",this.mae_input_pay06.value);	// 9.물류직송
        		this.ds_input_data.setColumn(aRow,"COMP_FEERT",this.mae_input_pay03.value*1+this.mae_input_pay01.value*1);// 10.업체수수료율
        		this.ds_input_data.setColumn(aRow,"DEL_YN","0");								// 11.삭제여부
        	//수정부분
        	}else if(this.sta_input_val00.text == "1"){
        		this.ds_input_data.setColumn(this.ds_input_data.rowposition,"PRGR_C",prgr_ch);
        		this.ds_input_data.setColumn(this.ds_input_data.rowposition,"PRGR_C_TEXT",this.cbo_list_wrs04.text);
        		this.ds_input_data.setColumn(this.ds_input_data.rowposition,"BYNG_UPR",this.mae_input_pay00.value);
        		this.ds_input_data.setColumn(this.ds_input_data.rowposition,"SEL_UPR",this.mae_input_pay01.value);
        		this.ds_input_data.setColumn(this.ds_input_data.rowposition,"PY_FDTCN",this.mae_input_pay02.value);
        		this.ds_input_data.setColumn(this.ds_input_data.rowposition,"AMN_FEERT",this.mae_input_pay03.value);
        		this.ds_input_data.setColumn(this.ds_input_data.rowposition,"TROT_FEERT",this.mae_input_pay04.value);
        		this.ds_input_data.setColumn(this.ds_input_data.rowposition,"PHD_FEERT",this.mae_input_pay05.value);
        		this.ds_input_data.setColumn(this.ds_input_data.rowposition,"DDLY_PHD_FEERT",this.mae_input_pay06.value);
        		this.ds_input_data.setColumn(this.ds_input_data.rowposition,"COMP_FEERT",this.mae_input_pay03.value*1+this.mae_input_pay01.value*1);
        	}
        	this.btn_clear_onclick();
        	this.sta_treat_count00.set_text(this.grd_main00.rowcount);
        }

        //validation check
        this.validation = function()
        {
        	if(this.gfn_nullToEmpty(this.edt_data13.value) == "" || this.gfn_nullToEmpty(this.edt_data13.value).length < 6){ //상품코드
        		this.gfn_getMessage("alert", 'msg.van_ds_sc_1540.view.simple.text2');
        		return false;
        	}
        	if(this.gfn_nullToEmpty(this.edt_data03.value) == ""){	//상품명
        		this.gfn_getMessage("alert", 'msg.van_ds_sc_1540.view.simple.text3');
        		return false;
        	}
        	var str = this.gfn_nullToEmpty(this.edt_data03.value);
        	var totcnt = 0;
        	for(var b=0; b<str.length; b++){
        		if(escape(str.charAt(b)).length > 4){
        			totcnt += 2;
        		}else{
        			totcnt++;
        		}
        	}
        	if(totcnt > 100){
        		this.alert("상품명은 100자 이내로 입력하세요\n 현재 입력 수["+totcnt+"]");
        		return false;
        	}
        	
        	var str = this.gfn_nullToEmpty(this.edt_data04.value);
        	var totcnt = 0;
        	for(var b=0; b<str.length; b++){
        		if(escape(str.charAt(b)).length > 4){
        			totcnt += 2;
        		}else{
        			totcnt++;
        		}
        	}
        	if(totcnt > 50){
        		this.alert("상품약어명은 50자 이내로 입력하세요\n 현재 입력 수["+totcnt+"]");
        		return false;
        	}
        	
        	var str = this.gfn_nullToEmpty(this.txa_contents00.value);
        	var totcnt = 0;
        	for(var b=0; b<str.length; b++){
        		if(escape(str.charAt(b)).length > 4){
        			totcnt += 2;
        		}else{
        			totcnt++;
        		}
        	}
        	if(totcnt > 200){
        		this.alert("상품상세 설명은 200자 이내로 입력하세요\n 현재 입력 수["+totcnt+"]");
        		return false;
        	}
        	if((this.ds_input_data.rowcount > 0) && (this.cbo_list_wrs02.value != '1')){
        		this.gfn_getMessage("alert",'msg.van_ds_sc_1540.view.simple.text19');
        		return false;
        	}
        	if((this.gfn_nullToEmpty(this.edt_data17.value).length > 0) && (this.cbo_list_wrs02.value != '1')){ // 물류센터와 계약구분
        		this.gfn_getMessage("alert",'msg.van_ds_sc_1540.view.simple.text20');
        		return false;
        	}
        	if((this.cbo_list_wrs01.value == "2") && (this.gfn_nullToEmpty(this.edt_data19.value) == "")){ //박스
        		this.gfn_getMessage("alert", 'msg.van_ds_sc_1540.view.simple.text17');
        		return false;
        	}
        	if(this.gfn_nullToEmpty(this.edt_data06.value) == ""){	//대분류코드
        		this.gfn_getMessage("alert", 'msg.van_ds_sc_1540.view.simple.text13');
        		return false;
        	}
        	if(this.gfn_nullToEmpty(this.edt_data07.value) == ""){	//중분류코드
        		this.gfn_getMessage("alert", 'msg.van_ds_sc_1540.view.simple.text14');
        		return false;
        	}
        	if(this.gfn_nullToEmpty(this.edt_data08.value) == ""){	//소분류코드
        		this.gfn_getMessage("alert", 'msg.van_ds_sc_1540.view.simple.text15');
        		return false;
        	}
        	if(this.gfn_nullToEmpty(this.edt_data09.value) == ""){	//세분류코드
        		this.gfn_getMessage("alert", 'msg.van_ds_sc_1540.view.simple.text16');
        		return false;
        	}
        	if(this.gfn_nullToEmpty(this.edt_data12.value) == ""){	//규격
        		this.gfn_getMessage("alert", 'msg.van_ds_sc_1540.view.simple.text4');
        		return false;
        	}
        	if(this.div_search.cbo_div_list06.value != "S"){	//기본단위 구분코드
        		this.gfn_getMessage("alert",'msg.van_ds_sc_1540.view.simple.text18');
        		return false;
        	}
        	if(this.gfn_nullToEmpty(this.div_search.edt_div_data04.value) == ""){
        		this.gfn_getMessage("alert", 'msg.van_ds_sc_1540.view.simple.text11');
        		return false;
        	}
        // 	if(this.div_search.cbo_div_list00.value == ""){
        // 		this.gfn_getMessage("alert", 'msg.van_ds_sc_1540.view.simple.text12');
        // 		return false;
        // 	}
        	return true;
        }

        this.btn_control01_onclick = function(obj,e)
        {
        	if(this.validation() != true){
        		return;
        	}
        	
        	if(this.cbo_list_wrs02.value == 1){
        		if((this.div_search.edt_div_data14.value == 0 || this.div_search.edt_div_data14.value == undefined) &&
        		(this.div_search.edt_div_data15.value == 0 || this.div_search.edt_div_data15.value == undefined) &&
        		(this.div_search.edt_div_data16.value == 0 || this.div_search.edt_div_data16.value == undefined) &&
        		(this.div_search.edt_div_data17.value == 0 || this.div_search.edt_div_data17.value == undefined) &&
        		(this.div_search.edt_div_data18.value == 0 || this.div_search.edt_div_data18.value == undefined) &&
        		(this.div_search.edt_div_data19.value == 0 || this.div_search.edt_div_data19.value == undefined) &&
        		(this.div_search.edt_div_data20.value == 0 || this.div_search.edt_div_data20.value == undefined) &&
        		(this.div_search.edt_div_data21.value == 0 || this.div_search.edt_div_data21.value == undefined)){
        			this.gfn_getMessage("alert", 'msg.van_ds_sc_1540.view.simple.text9');
        			return;
        		}
        	}
        	if(this.cbo_list_wrs05.value == "00"){
        		this.gfn_getMessage('alert', 'msg.van_ds_sc_1540.view.simple.text7');
        		return;
        	}
        	if(this.cbo_list_wrs05.value == "8808983000015" && this.cbo_list_wrs02.value == "1"){
        	
        		this.gfn_getMessage('alert', 'msg.van_ds_sc_1540.view.simple.text10');
        		return;
        	}
        	
        	//추가/수정
        	var aRow = 0;
        	var list_wrs = this.cbo_list_wrs05.value;
        	for(var c=0;c<this.grd_main01.rowcount;c++){
        		if(this.ds_input_add_data.getColumn(c,"NA_BZPLC") == list_wrs){
        			bok = application.confirm(this.edt_data13.value+' ['+list_wrs+']'+' 는(은) 이미 등록된 자료입니다. \n\n 수정하시겠습니까?');
        			if(bok == true){
        				aRow = c;
        				this.sta_input_sep.set_text("1");
        			}
        		}
        	}
        	if(this.sta_input_sep.text == "0"){
        		aRow = this.ds_input_add_data.addRow();
        	}
        	if(this.sta_input_sep.text == "0"){
        		this.ds_input_add_data.setColumn(aRow,"NA_BZPLC",this.cbo_list_wrs05.value);
        		this.ds_input_add_data.setColumn(aRow,"CSER_TRPL_C",this.edt_data17.value);
        		this.ds_input_add_data.setColumn(aRow,"DEL_YN",this.chk_del_yn01.value);
        		this.ds_input_add_data.setColumn(aRow,"NA_BZPLC_NM",this.cbo_list_wrs05.text);
        		this.ds_input_add_data.setColumn(aRow,"CSER_TRPL_NM",this.edt_data18.value);
        	}
        	if(this.sta_input_sep.text == "1"){
        		this.ds_input_add_data.setColumn(this.ds_input_add_data.rowposition,"NA_BZPLC",this.cbo_list_wrs05.value);
        		this.ds_input_add_data.setColumn(this.ds_input_add_data.rowposition,"CSER_TRPL_C",this.edt_data17.value);
        		this.ds_input_add_data.setColumn(this.ds_input_add_data.rowposition,"DEL_YN",this.chk_del_yn01.value);
        		this.ds_input_add_data.setColumn(this.ds_input_add_data.rowposition,"NA_BZPLC_NM",this.cbo_list_wrs05.text);
        		this.ds_input_add_data.setColumn(this.ds_input_add_data.rowposition,"CSER_TRPL_NM",this.edt_data18.value);
        	}
        	
        	
        	this.btn_clear_onclick();
        	this.sta_treat_count01.set_text(this.grd_main01.rowcount);
        }

        //그리드를 클릭 할 경우 입력정보에 데이터를 보내줌
        this.grd_main00_oncellclick = function(obj,e)
        {
        	this.cbo_list_wrs04.set_value(this.ds_input_data.getColumn(this.ds_input_data.rowposition,"PRGR_C"));			// 1.점포유형
        	this.mae_input_pay00.set_value(this.ds_input_data.getColumn(this.ds_input_data.rowposition,"BYNG_UPR"));		// 2.매입단가	
        	this.mae_input_pay01.set_value(this.ds_input_data.getColumn(this.ds_input_data.rowposition,"SEL_UPR"));			// 3.공급단가
        	this.mae_input_pay02.set_value(this.ds_input_data.getColumn(this.ds_input_data.rowposition,"PY_FDTCN"));		// 4.지급기일수
        	this.mae_input_pay03.set_value(this.ds_input_data.getColumn(this.ds_input_data.rowposition,"AMN_FEERT"));		// 5.관리수수료
        	this.mae_input_pay04.set_value(this.ds_input_data.getColumn(this.ds_input_data.rowposition,"TROT_FEERT"));		// 6.계통탄력가격
        	this.mae_input_pay05.set_value(this.ds_input_data.getColumn(this.ds_input_data.rowposition,"PHD_FEERT"));		// 7.물류수수료
        	this.mae_input_pay06.set_value(this.ds_input_data.getColumn(this.ds_input_data.rowposition,"DDLY_PHD_FEERT"));	// 8.물류직송
        	this.sta_input_val00.set_text("1");
        }

        //추가정보 그리드 클릭
        this.grd_main01_oncellclick = function(obj,e)
        {
        	this.cbo_list_wrs05.set_value(this.ds_input_add_data.getColumn(this.ds_input_add_data.rowposition,"NA_BZPLC"));
        	this.sta_input_sep.set_text("1");
        }

        //입력정보 초기화
        this.btn_clear_onclick = function(obj,e)
        {
        	this.sta_input_val00.set_text("0");
        	this.cbo_list_wrs04.set_value(00);
        	this.cbo_list_wrs05.set_value(0);
        	this.mae_input_pay00.set_value("0");
        	this.mae_input_pay01.set_value("0");
        	this.mae_input_pay02.set_value("0");
        	this.mae_input_pay03.set_value("0");
        	this.mae_input_pay04.set_value("0");
        	this.mae_input_pay05.set_value("0");
        	this.mae_input_pay06.set_value("0");
        	this.chk_all_click00.set_value(0);
        	this.chk_del_yn01.set_value(0);
        	this.sta_input_sep.set_text("0");
        }

        this.div_edit_cbo_div_list03_onitemchanged = function(obj,e)
        {
        	if(this.div_search.cbo_div_list03.value == 1){
        		this.div_search.Static10.set_visible(false);
        		this.div_search.cbo_div_list05.set_visible(false);
        		this.div_search.edt_day.set_visible(false);
        	}else{
        		this.div_search.Static10.set_visible(true);
        		this.div_search.cbo_div_list05.set_visible(true);
        		this.div_search.edt_day.set_visible(true);
        	}
        	this.div_search.cbo_div_list05.set_value("");
        }

        this.btn_clear02_onclick = function(obj,e)
        {
        	this.reload();
        }

        
        //측면이미지
        this.div_search_FileUpload00_onitemchanged = function(obj,e)
        {
        	this.gfn_callUpload(obj);
        }
        //전면이미지
        this.div_search_FileUpload01_onitemchanged = function(obj,e)
        {
        	this.gfn_callUpload(obj);
        }
        //윗면이미지
        this.div_search_FileUpload02_onitemchanged = function(obj,e)
        {
        	this.gfn_callUpload(obj);
        }

        this.FileUpload_onsuccess = function(obj,e)
        {
        	this.ds_uploadresult.clear();
        	this.ds_uploadresult.copyData(e.datasets[0]);		
        	this.ds_uploadresult.addColumn("CHK", "string"); //멀티건 인경우 'CHK'컬럼추가
        	var thumbext = this.ds_uploadresult.getColumn(0,"ORGFNAME"); 		// 파일을 추가한 input 박스의 값
        	
        	if(obj.name == "FileUpload00"){
        		var pval = this.div_search.sta_file_data;
        		pval.set_text("");
        		pval.set_text("1"
        					 +"&"+this.ds_uploadresult.getColumn(0,"ORGFNAME")
        					 +"&"+this.ds_uploadresult.getColumn(0,"FILESIZE")
        					 +"&"+this.ds_uploadresult.getColumn(0,"SYSTEMFILENAME"));
        	}else if(obj.name == "FileUpload01"){
        		var pval = this.div_search.sta_file2_data;
        		pval.set_text("");
        		pval.set_text("2"
        					 +"&"+this.ds_uploadresult.getColumn(0,"ORGFNAME")
        					 +"&"+this.ds_uploadresult.getColumn(0,"FILESIZE")
        					 +"&"+this.ds_uploadresult.getColumn(0,"SYSTEMFILENAME"));
        	}else{
        		var pval = this.div_search.sta_file3_data;
        		pval.set_text("");
        		pval.set_text("3"
        					 +"&"+this.ds_uploadresult.getColumn(0,"ORGFNAME")
        					 +"&"+this.ds_uploadresult.getColumn(0,"FILESIZE")
        					 +"&"+this.ds_uploadresult.getColumn(0,"SYSTEMFILENAME"));
        	}
        }

        this.FileUpload_onerror = function(obj,e)
        {
        	trace("FileUpload00_onerror");
        	trace("e.errorcode: "+e.errorcode);
        	trace("e.errormsg: "+e.errormsg);
        }

        //선택한 이미지 파일을 저장하기 위해 데이터셋에 담는다.
        this.addRowFile = function()
        {
        	var imginfo = this.gfn_nullToEmpty(this.div_search.sta_file_data);
        	var imginfo2 = this.gfn_nullToEmpty(this.div_search.sta_file2_data);
        	var imginfo3 = this.gfn_nullToEmpty(this.div_search.sta_file3_data);
        	if(imginfo.text !=""){
        		this.ds_uploadsave.addRow();
        		imginfo.text.split("&");
        		this.ds_uploadsave.setColumn(this.ds_uploadsave.rowcount-1,"FILE_SEQ",imginfo.text.split("&")[0]);
        		this.ds_uploadsave.setColumn(this.ds_uploadsave.rowcount-1,"FILE_NAME",imginfo.text.split("&")[1]);
        		this.ds_uploadsave.setColumn(this.ds_uploadsave.rowcount-1,"FILE_SIZE",imginfo.text.split("&")[2]);
        		this.ds_uploadsave.setColumn(this.ds_uploadsave.rowcount-1,"FILE_SYSTEM_NAME",imginfo.text.split("&")[3]);
        	}
        	if(imginfo2.text !=""){
        		this.ds_uploadsave.addRow();
        		imginfo2.text.split("&");
        		this.ds_uploadsave.setColumn(this.ds_uploadsave.rowcount-1,"FILE_SEQ",imginfo2.text.split("&")[0]);
        		this.ds_uploadsave.setColumn(this.ds_uploadsave.rowcount-1,"FILE_NAME",imginfo2.text.split("&")[1]);
        		this.ds_uploadsave.setColumn(this.ds_uploadsave.rowcount-1,"FILE_SIZE",imginfo2.text.split("&")[2]);
        		this.ds_uploadsave.setColumn(this.ds_uploadsave.rowcount-1,"FILE_SYSTEM_NAME",imginfo2.text.split("&")[3]);
        	}
        	if(imginfo3.text !=""){
        		this.ds_uploadsave.addRow();
        		imginfo3.text.split("&");
        		this.ds_uploadsave.setColumn(this.ds_uploadsave.rowcount-1,"FILE_SEQ",imginfo3.text.split("&")[0]);
        		this.ds_uploadsave.setColumn(this.ds_uploadsave.rowcount-1,"FILE_NAME",imginfo3.text.split("&")[1]);
        		this.ds_uploadsave.setColumn(this.ds_uploadsave.rowcount-1,"FILE_SIZE",imginfo3.text.split("&")[2]);
        		this.ds_uploadsave.setColumn(this.ds_uploadsave.rowcount-1,"FILE_SYSTEM_NAME",imginfo3.text.split("&")[3]);
        	}
        }

        //상품요청 조회
        this.btn_popup00_onclick = function(obj,e)
        {
        	var rdo_sep = this.rdo_search_sep.value;
        	var oArg = {paramMode:"U", dsArg:this.Dataset00, gubun:rdo_sep};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("van_wrs","PDS.PRICAT::VAN_DS_SC_1541.xfdl",oArg,sOption,sPopupCallBack);
        }

        //상품분류 팝업 조회
        this.btn_popup01_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"U", dsArg:this.Dataset00};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("wrs_lclc","POPUP::POPUP_SRC_WRS_CLF.xfdl",oArg,sOption,sPopupCallBack);
        }

        //제조처 조회(거래처)
        this.btn_popup02_onclick = function(params)
        {
        	var code = this.edt_data15.value;
        	var textname = this.edt_data16.value;
        	var param = {
        				autoType:params,
        				searchCode:code,
        				searchText:textname
        	};
        	if(typeof params == "boolean"){
        		if(!this.searPopValue(param)){return};
        	}
        	var sp_code = this.edt_data15.value;
        	var oArg = {paramMode:"U", dsArg:this.Dataset00, spTrpl:sp_code, autoPop:param};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("trpl_search","PDS.PRICAT::VAN_DS_SC_1542.xfdl",oArg,sOption,sPopupCallBack);
        }

        // 바이어 조회
        this.div_search_btn_popup02_onclick = function(params)
        {
        	var code = this.div_search.edt_div_data25.value;
        	var textname = this.div_search.edt_div_data26.value;
        	var param = {
        				autoType:params,
        				searchCode:code,
        				searchText:textname,
        				comboType:"2"
        	};
        	if(typeof params == "boolean"){
        		if(!this.searPopValue(param)){return};
        	}

        	var oArg = {paramMode:"U", dsArg:this.Dataset00, autoPop:param};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("src_buyer","POPUP::POPUP_SRC_BUYER.xfdl",oArg,sOption,sPopupCallBack);
        }

        //공병 조회
        this.div_search_btn_popup00_onclick = function(params)
        {
        	var code = this.div_search.edt_div_data01.value;
        	var textname = this.div_search.edt_div_data02.value;
        	var param = {
        				autoType:params,
        				searchCode:code,
        				searchText:textname,
        				comboType:"2"
        	};
        	if(typeof params == "boolean"){
        		if(!this.searPopValue(param)){return};
        	}
        	var oArg = {paramMode:"U", dsArg:this.Dataset00, autoPop:param};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("src_vcbtbx01","POPUP::POPUP_SRC_VCBTBX.xfdl",oArg,sOption,sPopupCallBack);	
        }

        //공상자 조회
        this.div_search_btn_popup01_onclick = function(params)
        {
        	var code = this.div_search.edt_div_data08.value;
        	var textname = this.div_search.edt_div_data09.value;
        	var param = {
        				autoType:params,
        				searchCode:code,
        				searchText:textname,
        				comboType:"3"
        	};
        	if(typeof params == "boolean"){
        		if(!this.searPopValue(param)){return};
        	}
        	var oArg = {paramMode:"U", dsArg:this.Dataset00, autoPop:param};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("src_vcbtbx02","POPUP::POPUP_SRC_VCBTBX.xfdl",oArg,sOption,sPopupCallBack);	
        }

        
        this.fn_popupAfter = function(strId,strVal)
        {
        	if(strVal != undefined){
        		var arrVal = strVal.split(",");
        		if(strId == "van_wrs"){
        			var van_code = arrVal[0];
        			this.van_search(van_code);
        		}
        		if(strId == "trpl_search"){
        			this.edt_data15.set_value(arrVal[0]);
        			this.edt_data16.set_value(arrVal[1]);
        		}
        		if(strId == "wrs_lclc"){
        			this.edt_data06.set_value(arrVal[0]);
        			this.edt_data07.set_value(arrVal[1]);
        			this.edt_data08.set_value(arrVal[2]);
        			this.edt_data09.set_value(arrVal[3]);
        			this.cbo_list_wrs00.set_value(arrVal[8]);
        			this.edt_data10.set_value(arrVal[0]+arrVal[1]+arrVal[2]+arrVal[3]);
        			this.edt_data11.set_value(arrVal[4]+"/"+arrVal[5]+"/"+arrVal[6]+"/"+arrVal[7]);
        			this.searchCLC(arrVal[8]);
        		}
        		if(strId == "src_buyer"){
        			this.div_search.edt_div_data25.set_value(arrVal[0]);
        			this.div_search.edt_div_data26.set_value(arrVal[1]);
        		}
        		if(strId == "src_wrs"){
        			this.edt_data20.set_value(arrVal[0]);
        			this.edt_data21.set_value(arrVal[1]);
        			this.search();
        		}
        		if(strId == "src_vcbtbx01"){
        			this.div_search.edt_div_data01.set_value(arrVal[0]);
        			this.div_search.edt_div_data02.set_value(arrVal[1]);
        		}
        		if(strId == "src_vcbtbx02"){
        			this.div_search.edt_div_data08.set_value(arrVal[0]);
        			this.div_search.edt_div_data09.set_value(arrVal[1]);
        		}
        	}
        }

        //영세 일 경우 콤보박스 풀림.
        this.rdo_store_code03_onitemchanged = function(obj,e)
        {
        	if(this.rdo_store_code03.value != "3"){
        		this.cbo_list_wrs03.set_readonly(true);
        		this.cbo_list_wrs03.set_value("");
        	}else if(this.rdo_store_code03.value == "3"){
        		this.cbo_list_wrs03.set_readonly(false);
        	}
        }

        this.div_search_rdo_store_code02_onitemchanged = function(obj,e)
        {
        	if(this.div_search.rdo_store_code02.value == "1"){
        		this.div_search.Static11.set_visible(true);
        		this.div_search.cbo_div_list03.set_visible(true);
        	}else{
        		this.div_search.Static11.set_visible(false);
        		this.div_search.cbo_div_list03.set_visible(false);
        		this.div_search.cbo_div_list03.set_value(1);
        		this.div_edit_cbo_div_list03_onitemchanged();
        	}
        }

        //제조처 자동 검색
        this.edt_data15_onkeydown = function(obj,e)
        {
        	if(e.keycode ==13){
        		this.btn_popup02_onclick(true);
        	}
        }

        this.edt_data16_onkeydown = function(obj,e)
        {
        	if(e.keycode ==13){
        		this.btn_popup02_onclick(true);
        	}
        }
        //
        this.div_search_edt_div_data01_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.div_search_btn_popup00_onclick(true);
        	}
        }

        this.div_search_edt_div_data02_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.div_search_btn_popup00_onclick(true);
        	}
        }
        //
        this.div_search_edt_div_data08_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.div_search_btn_popup01_onclick(true);
        	}
        }

        this.div_search_edt_div_data09_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.div_search_btn_popup01_onclick(true);
        	}
        }

        this.edt_data13_onkillfocus = function(obj,e)
        {
        	if(this.isValueWrsCode() !=true){
        		this.alert('상품코드가 형식에 맞지 않습니다. \n\n 다시 입력해주세요.');
        	}else{
        		this.wrsCheck();
        	}
        }

        this.edt_data13_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		if(this.isValueWrsCode() !=true){
        			this.alert('상품코드가 형식에 맞지 않습니다. \n\n 다시 입력해주세요.');
        		}else{
        			this.wrsCheck();
        		}
        	}
        }

        this.div_search_edt_div_data25_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.div_search_btn_popup02_onclick(true);
        	}
        }

        this.div_search_edt_div_data26_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.div_search_btn_popup02_onclick(true);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_save00.addEventHandler("onclick", this.btn_save00_onclick, this);
            this.sta_back_bar04.addEventHandler("onclick", this.Static00_onclick, this);
            this.cbo_list_wrs02.addEventHandler("onitemchanged", this.cbo_list_wrs02_onitemchanged, this);
            this.btn_popup01.addEventHandler("onclick", this.btn_popup01_onclick, this);
            this.edt_data13.addEventHandler("onkillfocus", this.edt_data13_onkillfocus, this);
            this.edt_data13.addEventHandler("onkeydown", this.edt_data13_onkeydown, this);
            this.rdo_store_code03.addEventHandler("onitemchanged", this.rdo_store_code03_onitemchanged, this);
            this.edt_data15.addEventHandler("onkeydown", this.edt_data15_onkeydown, this);
            this.btn_popup02.addEventHandler("onclick", this.btn_popup02_onclick, this);
            this.edt_data16.addEventHandler("onkeydown", this.edt_data16_onkeydown, this);
            this.btn_popup00.addEventHandler("onclick", this.btn_popup00_onclick, this);
            this.cbo_list_wrs01.addEventHandler("onitemchanged", this.cbo_list_wrs01_onitemchanged, this);
            this.grd_main00.addEventHandler("oncellclick", this.grd_main00_oncellclick, this);
            this.grd_main01.addEventHandler("oncellclick", this.grd_main01_oncellclick, this);
            this.btn_add_modify00.addEventHandler("onclick", this.btn_control00_onclick, this);
            this.btn_clear00.addEventHandler("onclick", this.btn_clear_onclick, this);
            this.div_search.Static00.addEventHandler("onclick", this.Static00_onclick, this);
            this.div_search.edt_div_data01.addEventHandler("onkeydown", this.div_search_edt_div_data01_onkeydown, this);
            this.div_search.edt_div_data02.addEventHandler("onkeydown", this.div_search_edt_div_data02_onkeydown, this);
            this.div_search.btn_popup00.addEventHandler("onclick", this.div_search_btn_popup00_onclick, this);
            this.div_search.rdo_store_code02.addEventHandler("onitemchanged", this.div_search_rdo_store_code02_onitemchanged, this);
            this.div_search.edt_div_data08.addEventHandler("onkeydown", this.div_search_edt_div_data08_onkeydown, this);
            this.div_search.edt_div_data09.addEventHandler("onkeydown", this.div_search_edt_div_data09_onkeydown, this);
            this.div_search.btn_popup01.addEventHandler("onclick", this.div_search_btn_popup01_onclick, this);
            this.div_search.cbo_div_list03.addEventHandler("onitemchanged", this.div_edit_cbo_div_list03_onitemchanged, this);
            this.div_search.Static22.addEventHandler("onclick", this.Static00_onclick, this);
            this.div_search.edt_div_data25.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_search.edt_div_data26.addEventHandler("onkeydown", this.div_search_edt_div_data26_onkeydown, this);
            this.div_search.btn_popup02.addEventHandler("onclick", this.div_search_btn_popup02_onclick, this);
            this.div_search.FileUpload00.addEventHandler("onitemchanged", this.div_search_FileUpload00_onitemchanged, this);
            this.div_search.FileUpload00.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.div_search.FileUpload00.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.div_search.FileUpload01.addEventHandler("onitemchanged", this.div_search_FileUpload01_onitemchanged, this);
            this.div_search.FileUpload01.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.div_search.FileUpload01.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.div_search.FileUpload02.addEventHandler("onitemchanged", this.div_search_FileUpload02_onitemchanged, this);
            this.div_search.FileUpload02.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.div_search.FileUpload02.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.btn_clear02.addEventHandler("onclick", this.btn_clear02_onclick, this);
            this.btn_clear01.addEventHandler("onclick", this.btn_clear_onclick, this);
            this.btn_add_modify01.addEventHandler("onclick", this.btn_control01_onclick, this);
            this.rdo_search_sep.addEventHandler("onitemchanged", this.rdo_search_sep_onitemchanged, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1540.xfdl");
        this.loadPreloadList();
       
    };
}
)();
