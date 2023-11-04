﻿(function()
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
                this.set_name("VAN_DS_SC_1543");
                this.set_titletext("신규상품 등록(신규)");
                this._setFormPosition(0,0,900,1930);
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
            obj.getSetter("firenextcount").set("0");
            obj._setContents("<ColumnInfo><Column id=\"RN\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_C\" type=\"string\" size=\"32\"/><Column id=\"WRS_C_DSC\" type=\"string\" size=\"32\"/><Column id=\"WRS_DSC\" type=\"string\" size=\"32\"/><Column id=\"WRSNM\" type=\"string\" size=\"32\"/><Column id=\"WRS_ABR_NM\" type=\"string\" size=\"32\"/><Column id=\"WRS_ENM\" type=\"string\" size=\"32\"/><Column id=\"WRS_TPC\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_LCLC\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_MCLC\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_SCLC\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_DTCF_C\" type=\"string\" size=\"32\"/><Column id=\"WRS_LCLFNM\" type=\"string\" size=\"32\"/><Column id=\"WRS_MCLFNM\" type=\"string\" size=\"32\"/><Column id=\"WRS_SCLFNM\" type=\"string\" size=\"32\"/><Column id=\"WRS_DTCFNM\" type=\"string\" size=\"32\"/><Column id=\"WRS_ID_DSC\" type=\"string\" size=\"32\"/><Column id=\"WRS_STDNM\" type=\"string\" size=\"32\"/><Column id=\"TXT_DSC\" type=\"string\" size=\"32\"/><Column id=\"SMA_APL_TPC\" type=\"string\" size=\"32\"/><Column id=\"LIQ_YN\" type=\"string\" size=\"32\"/><Column id=\"LIQ_UZ_DSC\" type=\"string\" size=\"32\"/><Column id=\"COMM_WRS_YN\" type=\"string\" size=\"32\"/><Column id=\"MFT_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"MFT_NA_TRPL_NM\" type=\"string\" size=\"32\"/><Column id=\"WHT\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_UNT_C\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_PAK_C\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_SZE_SEX_C\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_QLT_GRDC\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_BRAN_C\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_PROENV_DSC\" type=\"string\" size=\"32\"/><Column id=\"GAP_ATTC_YN\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_NACF_QLT_ATTC_C\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_CSTD_METC\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_DSTR_STSC\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_UZC\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_IPO_DSC\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_PDAA_C\" type=\"string\" size=\"32\"/><Column id=\"VLD_PRD_CN\" type=\"string\" size=\"32\"/><Column id=\"VLD_PRD_DSC\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_STD_UNT_C\" type=\"string\" size=\"32\"/><Column id=\"WRS_HGHT\" type=\"string\" size=\"32\"/><Column id=\"WRS_LEN_LEN\" type=\"string\" size=\"32\"/><Column id=\"WRS_WDTH_LEN\" type=\"string\" size=\"32\"/><Column id=\"WRS_SGRT\" type=\"string\" size=\"32\"/><Column id=\"WRS_SDL_DSC\" type=\"string\" size=\"32\"/><Column id=\"WRS_AHL_CN\" type=\"string\" size=\"32\"/><Column id=\"MTRL_STD_THKN\" type=\"string\" size=\"32\"/><Column id=\"CICL_WRS_STD_DMTR_CN\" type=\"string\" size=\"32\"/><Column id=\"CICL_WRS_STD_DPTH_CN\" type=\"string\" size=\"32\"/><Column id=\"VCBT_NA_WRS_C\" type=\"string\" size=\"32\"/><Column id=\"VCBT_QT\" type=\"string\" size=\"32\"/><Column id=\"VCBX_NA_WRS_C\" type=\"string\" size=\"32\"/><Column id=\"CVS_QT\" type=\"string\" size=\"32\"/><Column id=\"CVS_NA_WRS_UNT_C\" type=\"string\" size=\"32\"/><Column id=\"WRS_DTL_EXPL\" type=\"string\" size=\"32\"/><Column id=\"BSC_UNT_DSC\" type=\"string\" size=\"32\"/><Column id=\"BOXPE_AQZ\" type=\"string\" size=\"32\"/><Column id=\"WRS_FL_CN\" type=\"string\" size=\"32\"/><Column id=\"KNET_WRS_NO\" type=\"string\" size=\"32\"/><Column id=\"TR_STOP_YN\" type=\"string\" size=\"32\"/><Column id=\"TR_STOP_RSNC\" type=\"string\" size=\"32\"/><Column id=\"TR_STOP_DT\" type=\"string\" size=\"32\"/><Column id=\"DEL_YN\" type=\"string\" size=\"32\"/><Column id=\"FSRG_DTM\" type=\"string\" size=\"32\"/><Column id=\"FSRGMN_ENO\" type=\"string\" size=\"32\"/><Column id=\"FSRGMN_NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"LSCHG_DTM\" type=\"string\" size=\"32\"/><Column id=\"LS_CMENO\" type=\"string\" size=\"32\"/><Column id=\"LSCGMN_NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_CLNM\" type=\"string\" size=\"32\"/><Column id=\"VAN_C_RQ_NO\" type=\"string\" size=\"32\"/><Column id=\"NA_C_RQ_NO\" type=\"string\" size=\"32\"/><Column id=\"NA_C_RQ_OBJ_DSC\" type=\"string\" size=\"32\"/><Column id=\"CTCPL_TELNO\" type=\"string\" size=\"32\"/><Column id=\"RQ_CNTN\" type=\"string\" size=\"32\"/><Column id=\"BUYER_ENO\" type=\"string\" size=\"32\"/><Column id=\"RQ_NA_WRS_C\" type=\"string\" size=\"32\"/><Column id=\"RFID_UYN\" type=\"string\" size=\"32\"/><Column id=\"FOMNM\" type=\"string\" size=\"32\"/><Column id=\"SLGT_ETR_DSC\" type=\"string\" size=\"32\"/><Column id=\"DSTR_TER_YN\" type=\"string\" size=\"32\"/><Column id=\"DSTR_TER_MRK_DSC\" type=\"string\" size=\"32\"/><Column id=\"WRS_MODIFY_YN\" type=\"string\" size=\"32\"/><Column id=\"PRC_YN\" type=\"string\" size=\"32\"/><Column id=\"RSP_C_CNTN\" type=\"string\" size=\"32\"/><Column id=\"REQ_RESULT\" type=\"string\" size=\"32\"/><Column id=\"CNF_ENO\" type=\"string\" size=\"32\"/><Column id=\"CNF_DATE\" type=\"string\" size=\"32\"/><Column id=\"CNF_NAME\" type=\"string\" size=\"32\"/><Column id=\"NA_C_RQ_REJ_RSNC\" type=\"string\" size=\"32\"/><Column id=\"NA_C_RQ_STSC\" type=\"string\" size=\"32\"/><Column id=\"STPL_AMN_NA_WRS_C\" type=\"string\" size=\"32\"/><Column id=\"NA_SPYPL_C\" type=\"string\" size=\"32\"/><Column id=\"NA_SPYPL_TEAM_C\" type=\"string\" size=\"32\"/><Column id=\"PLTPE_LYNO\" type=\"string\" size=\"32\"/><Column id=\"PLTPE_SGNO\" type=\"string\" size=\"32\"/><Column id=\"PLTPE_BOX_CN\" type=\"string\" size=\"32\"/><Column id=\"BOX_WT\" type=\"string\" size=\"32\"/><Column id=\"BOX_BULK\" type=\"string\" size=\"32\"/><Column id=\"BOX_WRS_YN\" type=\"string\" size=\"32\"/><Column id=\"BYNG_UPR\" type=\"string\" size=\"32\"/><Column id=\"SEL_UPR\" type=\"string\" size=\"32\"/><Column id=\"TEMP_YN\" type=\"string\" size=\"32\"/><Column id=\"APV_RQ_NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"CUD_DSC\" type=\"string\" size=\"32\"/><Column id=\"LWCRBN_ATTC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PR_MRK_WHT\" type=\"STRING\" size=\"256\"/><Column id=\"PR_MRK_STD_BAS_WHT\" type=\"STRING\" size=\"256\"/><Column id=\"PR_MRK_BAS_UNIT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("ds_kornet_wrs", this);
            obj._setContents("<ColumnInfo><Column id=\"INFORMATION\" type=\"string\" size=\"32\"/><Column id=\"VOLUME_UNIT\" type=\"string\" size=\"32\"/><Column id=\"RRP_HGT\" type=\"string\" size=\"32\"/><Column id=\"RRP_DTH_UNIT\" type=\"string\" size=\"32\"/><Column id=\"EXPIRYDAY_UNIT\" type=\"string\" size=\"32\"/><Column id=\"PACKWGT_UNIT\" type=\"string\" size=\"32\"/><Column id=\"EXPIRYDAY\" type=\"string\" size=\"32\"/><Column id=\"GENRE\" type=\"string\" size=\"32\"/><Column id=\"RECV_DT\" type=\"string\" size=\"32\"/><Column id=\"RRP_DTH\" type=\"string\" size=\"32\"/><Column id=\"MADEIN\" type=\"string\" size=\"32\"/><Column id=\"IMPORTER\" type=\"string\" size=\"32\"/><Column id=\"ALCOLDEGREE\" type=\"string\" size=\"32\"/><Column id=\"PRNMENG\" type=\"string\" size=\"32\"/><Column id=\"STARTDATE\" type=\"string\" size=\"32\"/><Column id=\"PFANDOBJYN\" type=\"string\" size=\"32\"/><Column id=\"KANCLASS_CODE\" type=\"string\" size=\"32\"/><Column id=\"KBN\" type=\"string\" size=\"32\"/><Column id=\"COLOR\" type=\"string\" size=\"32\"/><Column id=\"HOMEPAGE\" type=\"string\" size=\"32\"/><Column id=\"SIZE_CODE\" type=\"string\" size=\"32\"/><Column id=\"DTH\" type=\"string\" size=\"32\"/><Column id=\"BARCODETYPE\" type=\"string\" size=\"32\"/><Column id=\"BFHSTRTRCMGTOBJYN\" type=\"string\" size=\"32\"/><Column id=\"HFHSTRTRCMGTOBJYN\" type=\"string\" size=\"32\"/><Column id=\"PIECEPRICEUNIT\" type=\"string\" size=\"32\"/><Column id=\"RRP_HGT_UNIT\" type=\"string\" size=\"32\"/><Column id=\"PRGUBUN\" type=\"string\" size=\"32\"/><Column id=\"DTH_UNIT\" type=\"string\" size=\"32\"/><Column id=\"PRNM\" type=\"string\" size=\"32\"/><Column id=\"EDI_IF_ID\" type=\"string\" size=\"32\"/><Column id=\"RSP_C_CNTN\" type=\"string\" size=\"32\"/><Column id=\"SEASON\" type=\"string\" size=\"32\"/><Column id=\"MANUFACT\" type=\"string\" size=\"32\"/><Column id=\"ISBN\" type=\"string\" size=\"32\"/><Column id=\"HGT_UNIT\" type=\"string\" size=\"32\"/><Column id=\"PRC_YN\" type=\"string\" size=\"32\"/><Column id=\"STORAGETYPE\" type=\"string\" size=\"32\"/><Column id=\"TAXTYPE\" type=\"string\" size=\"32\"/><Column id=\"GTIN\" type=\"string\" size=\"32\"/><Column id=\"RRP_YN\" type=\"string\" size=\"32\"/><Column id=\"GROSSWGT_UNIT\" type=\"string\" size=\"32\"/><Column id=\"WDT\" type=\"string\" size=\"32\"/><Column id=\"WDT_UNIT\" type=\"string\" size=\"32\"/><Column id=\"COLOR_CODE\" type=\"string\" size=\"32\"/><Column id=\"RRP_WDT\" type=\"string\" size=\"32\"/><Column id=\"VOLUME\" type=\"string\" size=\"32\"/><Column id=\"GROSSWGT\" type=\"string\" size=\"32\"/><Column id=\"STOPDATE\" type=\"string\" size=\"32\"/><Column id=\"GLN\" type=\"string\" size=\"32\"/><Column id=\"ALCOLDEGREE_UNIT\" type=\"string\" size=\"32\"/><Column id=\"P_SIZE\" type=\"string\" size=\"32\"/><Column id=\"RRP_WDT_UNIT\" type=\"string\" size=\"32\"/><Column id=\"HGT\" type=\"string\" size=\"32\"/><Column id=\"PACKWGT\" type=\"string\" size=\"32\"/><Column id=\"BRAND\" type=\"string\" size=\"32\"/><Column id=\"KANCLASS\" type=\"string\" size=\"32\"/><Column id=\"DOCID\" type=\"STRING\" size=\"32\"/><Column id=\"ANCIGRADE\" type=\"STRING\" size=\"32\"/><Column id=\"CREATEDDATE\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_gd_wrs", this);
            obj._setContents("<ColumnInfo><Column id=\"VAN_C_RQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NA_C_RQ_NO\" type=\"STRING\" size=\"10\"/><Column id=\"NA_C_RQ_OBJ_DSC\" type=\"STRING\" size=\"13\"/><Column id=\"CTCPL_TELNO\" type=\"STRING\" size=\"14\"/><Column id=\"RQ_CNTN\" type=\"STRING\" size=\"200\"/><Column id=\"APV_RQ_NA_BZPLC\" type=\"STRING\" size=\"13\"/><Column id=\"FSRGMN_ENO\" type=\"STRING\" size=\"9\"/><Column id=\"FSRGMN_NA_BZPLC\" type=\"STRING\" size=\"25\"/><Column id=\"BUYER_ENO\" type=\"STRING\" size=\"9\"/><Column id=\"RQ_NA_WRS_C\" type=\"STRING\" size=\"25\"/><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_C_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_ABR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_ENM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_SCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_DTCF_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_LCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_MCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_SCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_DTCFNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_ID_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_STDNM\" type=\"STRING\" size=\"256\"/><Column id=\"TXT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"SMA_APL_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"LIQ_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_WRS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MFT_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"WHT\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_UNT_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_PAK_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_SZE_SEX_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_QLT_GRDC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_BRAN_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_PROENV_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"GAP_ATTC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_NACF_QLT_ATTC_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_CSTD_METC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_DSTR_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_UZC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_IPO_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_PDAA_C\" type=\"STRING\" size=\"256\"/><Column id=\"VLD_PRD_CN\" type=\"STRING\" size=\"256\"/><Column id=\"VLD_PRD_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_STD_UNT_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_HGHT\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_LEN_LEN\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_WDTH_LEN\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_SGRT\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_SDL_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_AHL_CN\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_STD_THKN\" type=\"STRING\" size=\"256\"/><Column id=\"CICL_WRS_STD_DMTR_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CICL_WRS_STD_DPTH_CN\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_QT\" type=\"STRING\" size=\"256\"/><Column id=\"VCBX_NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"CVS_QT\" type=\"STRING\" size=\"256\"/><Column id=\"CVS_NA_WRS_UNT_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_DTL_EXPL\" type=\"STRING\" size=\"256\"/><Column id=\"BSC_UNT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BOXPE_AQZ\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_FL_CN\" type=\"STRING\" size=\"256\"/><Column id=\"KNET_WRS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TR_STOP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TR_STOP_RSNC\" type=\"STRING\" size=\"256\"/><Column id=\"TR_STOP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FSRGMN_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CMENO\" type=\"STRING\" size=\"256\"/><Column id=\"LSCGMN_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"TEMP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RFID_UYN\" type=\"STRING\" size=\"256\"/><Column id=\"FOMNM\" type=\"STRING\" size=\"256\"/><Column id=\"SLGT_ETR_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"DSTR_TER_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DSTR_TER_MRK_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_MODIFY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RSP_C_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"CNF_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"CNF_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CNF_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NA_C_RQ_REJ_RSNC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_C_RQ_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"STPL_AMN_NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_SPYPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_SPYPL_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"PLTPE_LYNO\" type=\"STRING\" size=\"256\"/><Column id=\"PLTPE_SGNO\" type=\"STRING\" size=\"256\"/><Column id=\"PLTPE_BOX_CN\" type=\"STRING\" size=\"256\"/><Column id=\"BOX_WT\" type=\"STRING\" size=\"256\"/><Column id=\"BOX_BULK\" type=\"STRING\" size=\"256\"/><Column id=\"BOX_WRS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BYNG_UPR\" type=\"STRING\" size=\"256\"/><Column id=\"SEL_UPR\" type=\"STRING\" size=\"256\"/><Column id=\"CUD_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"LIQ_UZ_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"PR_MRK_WHT\" type=\"STRING\" size=\"256\"/><Column id=\"PR_MRK_STD_BAS_WHT\" type=\"STRING\" size=\"256\"/><Column id=\"PR_MRK_BAS_UNIT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_wrs_in", this);
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_C\" type=\"string\" size=\"32\"/><Column id=\"WRS_C_DSC\" type=\"string\" size=\"32\"/><Column id=\"WRS_DSC\" type=\"string\" size=\"32\"/><Column id=\"WRSNM\" type=\"string\" size=\"32\"/><Column id=\"WRS_ABR_NM\" type=\"string\" size=\"32\"/><Column id=\"WRS_ENM\" type=\"string\" size=\"32\"/><Column id=\"WRS_TPC\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_LCLC\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_MCLC\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_SCLC\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_DTCF_C\" type=\"string\" size=\"32\"/><Column id=\"WRS_LCLFNM\" type=\"string\" size=\"32\"/><Column id=\"WRS_MCLFNM\" type=\"string\" size=\"32\"/><Column id=\"WRS_SCLFNM\" type=\"string\" size=\"32\"/><Column id=\"WRS_DTCFNM\" type=\"string\" size=\"32\"/><Column id=\"WRS_ID_DSC\" type=\"string\" size=\"32\"/><Column id=\"WRS_STDNM\" type=\"string\" size=\"32\"/><Column id=\"TXT_DSC\" type=\"string\" size=\"32\"/><Column id=\"SMA_APL_TPC\" type=\"string\" size=\"32\"/><Column id=\"LIQ_YN\" type=\"string\" size=\"32\"/><Column id=\"COMM_WRS_YN\" type=\"string\" size=\"32\"/><Column id=\"MFT_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"MFT_NA_TRPL_NM\" type=\"string\" size=\"32\"/><Column id=\"WHT\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_UNT_C\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_PAK_C\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_SZE_SEX_C\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_QLT_GRDC\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_BRAN_C\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_PROENV_DSC\" type=\"string\" size=\"32\"/><Column id=\"GAP_ATTC_YN\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_NACF_QLT_ATTC_C\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_CSTD_METC\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_DSTR_STSC\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_UZC\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_IPO_DSC\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_PDAA_C\" type=\"string\" size=\"32\"/><Column id=\"VLD_PRD_CN\" type=\"string\" size=\"32\"/><Column id=\"VLD_PRD_DSC\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_STD_UNT_C\" type=\"string\" size=\"32\"/><Column id=\"WRS_HGHT\" type=\"string\" size=\"32\"/><Column id=\"WRS_LEN_LEN\" type=\"string\" size=\"32\"/><Column id=\"WRS_WDTH_LEN\" type=\"string\" size=\"32\"/><Column id=\"WRS_SGRT\" type=\"string\" size=\"32\"/><Column id=\"WRS_SDL_DSC\" type=\"string\" size=\"32\"/><Column id=\"WRS_AHL_CN\" type=\"string\" size=\"32\"/><Column id=\"MTRL_STD_THKN\" type=\"string\" size=\"32\"/><Column id=\"CICL_WRS_STD_DMTR_CN\" type=\"string\" size=\"32\"/><Column id=\"CICL_WRS_STD_DPTH_CN\" type=\"string\" size=\"32\"/><Column id=\"VCBT_NA_WRS_C\" type=\"string\" size=\"32\"/><Column id=\"VCBT_QT\" type=\"string\" size=\"32\"/><Column id=\"VCBX_NA_WRS_C\" type=\"string\" size=\"32\"/><Column id=\"CVS_QT\" type=\"string\" size=\"32\"/><Column id=\"CVS_NA_WRS_UNT_C\" type=\"string\" size=\"32\"/><Column id=\"WRS_DTL_EXPL\" type=\"string\" size=\"32\"/><Column id=\"BSC_UNT_DSC\" type=\"string\" size=\"32\"/><Column id=\"BOXPE_AQZ\" type=\"string\" size=\"32\"/><Column id=\"WRS_FL_CN\" type=\"string\" size=\"32\"/><Column id=\"KNET_WRS_NO\" type=\"string\" size=\"32\"/><Column id=\"TR_STOP_YN\" type=\"string\" size=\"32\"/><Column id=\"TR_STOP_RSNC\" type=\"string\" size=\"32\"/><Column id=\"TR_STOP_DT\" type=\"string\" size=\"32\"/><Column id=\"DEL_YN\" type=\"string\" size=\"32\"/><Column id=\"FSRG_DTM\" type=\"string\" size=\"32\"/><Column id=\"FSRGMN_ENO\" type=\"string\" size=\"32\"/><Column id=\"FSRGMN_NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"LSCHG_DTM\" type=\"string\" size=\"32\"/><Column id=\"LS_CMENO\" type=\"string\" size=\"32\"/><Column id=\"LSCGMN_NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_CLNM\" type=\"string\" size=\"32\"/><Column id=\"VAN_C_RQ_NO\" type=\"string\" size=\"32\"/><Column id=\"NA_C_RQ_NO\" type=\"string\" size=\"32\"/><Column id=\"NA_C_RQ_OBJ_DSC\" type=\"string\" size=\"32\"/><Column id=\"CTCPL_TELNO\" type=\"string\" size=\"32\"/><Column id=\"RQ_CNTN\" type=\"string\" size=\"32\"/><Column id=\"BUYER_ENO\" type=\"string\" size=\"32\"/><Column id=\"RQ_NA_WRS_C\" type=\"string\" size=\"32\"/><Column id=\"RFID_UYN\" type=\"string\" size=\"32\"/><Column id=\"FOMNM\" type=\"string\" size=\"32\"/><Column id=\"SLGT_ETR_DSC\" type=\"string\" size=\"32\"/><Column id=\"DSTR_TER_YN\" type=\"string\" size=\"32\"/><Column id=\"DSTR_TER_MRK_DSC\" type=\"string\" size=\"32\"/><Column id=\"WRS_MODIFY_YN\" type=\"string\" size=\"32\"/><Column id=\"PRC_YN\" type=\"string\" size=\"32\"/><Column id=\"RSP_C_CNTN\" type=\"string\" size=\"32\"/><Column id=\"REQ_RESULT\" type=\"string\" size=\"32\"/><Column id=\"CNF_ENO\" type=\"string\" size=\"32\"/><Column id=\"CNF_DATE\" type=\"string\" size=\"32\"/><Column id=\"CNF_NAME\" type=\"string\" size=\"32\"/><Column id=\"NA_C_RQ_REJ_RSNC\" type=\"string\" size=\"32\"/><Column id=\"NA_C_RQ_STSC\" type=\"string\" size=\"32\"/><Column id=\"STPL_AMN_NA_WRS_C\" type=\"string\" size=\"32\"/><Column id=\"NA_SPYPL_C\" type=\"string\" size=\"32\"/><Column id=\"NA_SPYPL_TEAM_C\" type=\"string\" size=\"32\"/><Column id=\"PLTPE_LYNO\" type=\"string\" size=\"32\"/><Column id=\"PLTPE_SGNO\" type=\"string\" size=\"32\"/><Column id=\"PLTPE_BOX_CN\" type=\"string\" size=\"32\"/><Column id=\"BOX_WT\" type=\"string\" size=\"32\"/><Column id=\"BOX_BULK\" type=\"string\" size=\"32\"/><Column id=\"BOX_WRS_YN\" type=\"string\" size=\"32\"/><Column id=\"BYNG_UPR\" type=\"string\" size=\"32\"/><Column id=\"SEL_UPR\" type=\"string\" size=\"32\"/><Column id=\"TEMP_YN\" type=\"string\" size=\"32\"/><Column id=\"APV_RQ_NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"CUD_DSC\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_liq_uz_dsc", this);
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

            obj = new Dataset("ds_proenv_dsc", this);
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

            obj = new Dataset("ds_wrs_rg_req_filter", this);
            obj.getSetter("firenextcount").set("0");
            obj._setContents("<ColumnInfo><Column id=\"RN\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_C\" type=\"string\" size=\"32\"/><Column id=\"WRS_C_DSC\" type=\"string\" size=\"32\"/><Column id=\"WRS_DSC\" type=\"string\" size=\"32\"/><Column id=\"WRSNM\" type=\"string\" size=\"32\"/><Column id=\"WRS_ABR_NM\" type=\"string\" size=\"32\"/><Column id=\"WRS_ENM\" type=\"string\" size=\"32\"/><Column id=\"WRS_TPC\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_LCLC\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_MCLC\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_SCLC\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_DTCF_C\" type=\"string\" size=\"32\"/><Column id=\"WRS_LCLFNM\" type=\"string\" size=\"32\"/><Column id=\"WRS_MCLFNM\" type=\"string\" size=\"32\"/><Column id=\"WRS_SCLFNM\" type=\"string\" size=\"32\"/><Column id=\"WRS_DTCFNM\" type=\"string\" size=\"32\"/><Column id=\"WRS_ID_DSC\" type=\"string\" size=\"32\"/><Column id=\"WRS_STDNM\" type=\"string\" size=\"32\"/><Column id=\"TXT_DSC\" type=\"string\" size=\"32\"/><Column id=\"SMA_APL_TPC\" type=\"string\" size=\"32\"/><Column id=\"LIQ_YN\" type=\"string\" size=\"32\"/><Column id=\"LIQ_UZ_DSC\" type=\"string\" size=\"32\"/><Column id=\"COMM_WRS_YN\" type=\"string\" size=\"32\"/><Column id=\"MFT_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"MFT_NA_TRPL_NM\" type=\"string\" size=\"32\"/><Column id=\"WHT\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_UNT_C\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_PAK_C\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_SZE_SEX_C\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_QLT_GRDC\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_BRAN_C\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_PROENV_DSC\" type=\"string\" size=\"32\"/><Column id=\"GAP_ATTC_YN\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_NACF_QLT_ATTC_C\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_CSTD_METC\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_DSTR_STSC\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_UZC\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_IPO_DSC\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_PDAA_C\" type=\"string\" size=\"32\"/><Column id=\"VLD_PRD_CN\" type=\"string\" size=\"32\"/><Column id=\"VLD_PRD_DSC\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_STD_UNT_C\" type=\"string\" size=\"32\"/><Column id=\"WRS_HGHT\" type=\"string\" size=\"32\"/><Column id=\"WRS_LEN_LEN\" type=\"string\" size=\"32\"/><Column id=\"WRS_WDTH_LEN\" type=\"string\" size=\"32\"/><Column id=\"WRS_SGRT\" type=\"string\" size=\"32\"/><Column id=\"WRS_SDL_DSC\" type=\"string\" size=\"32\"/><Column id=\"WRS_AHL_CN\" type=\"string\" size=\"32\"/><Column id=\"MTRL_STD_THKN\" type=\"string\" size=\"32\"/><Column id=\"CICL_WRS_STD_DMTR_CN\" type=\"string\" size=\"32\"/><Column id=\"CICL_WRS_STD_DPTH_CN\" type=\"string\" size=\"32\"/><Column id=\"VCBT_NA_WRS_C\" type=\"string\" size=\"32\"/><Column id=\"VCBT_QT\" type=\"string\" size=\"32\"/><Column id=\"VCBX_NA_WRS_C\" type=\"string\" size=\"32\"/><Column id=\"CVS_QT\" type=\"string\" size=\"32\"/><Column id=\"CVS_NA_WRS_UNT_C\" type=\"string\" size=\"32\"/><Column id=\"WRS_DTL_EXPL\" type=\"string\" size=\"32\"/><Column id=\"BSC_UNT_DSC\" type=\"string\" size=\"32\"/><Column id=\"BOXPE_AQZ\" type=\"string\" size=\"32\"/><Column id=\"WRS_FL_CN\" type=\"string\" size=\"32\"/><Column id=\"KNET_WRS_NO\" type=\"string\" size=\"32\"/><Column id=\"TR_STOP_YN\" type=\"string\" size=\"32\"/><Column id=\"TR_STOP_RSNC\" type=\"string\" size=\"32\"/><Column id=\"TR_STOP_DT\" type=\"string\" size=\"32\"/><Column id=\"DEL_YN\" type=\"string\" size=\"32\"/><Column id=\"FSRG_DTM\" type=\"string\" size=\"32\"/><Column id=\"FSRGMN_ENO\" type=\"string\" size=\"32\"/><Column id=\"FSRGMN_NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"LSCHG_DTM\" type=\"string\" size=\"32\"/><Column id=\"LS_CMENO\" type=\"string\" size=\"32\"/><Column id=\"LSCGMN_NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_CLNM\" type=\"string\" size=\"32\"/><Column id=\"VAN_C_RQ_NO\" type=\"string\" size=\"32\"/><Column id=\"NA_C_RQ_NO\" type=\"string\" size=\"32\"/><Column id=\"NA_C_RQ_OBJ_DSC\" type=\"string\" size=\"32\"/><Column id=\"CTCPL_TELNO\" type=\"string\" size=\"32\"/><Column id=\"RQ_CNTN\" type=\"string\" size=\"32\"/><Column id=\"BUYER_ENO\" type=\"string\" size=\"32\"/><Column id=\"RQ_NA_WRS_C\" type=\"string\" size=\"32\"/><Column id=\"RFID_UYN\" type=\"string\" size=\"32\"/><Column id=\"FOMNM\" type=\"string\" size=\"32\"/><Column id=\"SLGT_ETR_DSC\" type=\"string\" size=\"32\"/><Column id=\"DSTR_TER_YN\" type=\"string\" size=\"32\"/><Column id=\"DSTR_TER_MRK_DSC\" type=\"string\" size=\"32\"/><Column id=\"WRS_MODIFY_YN\" type=\"string\" size=\"32\"/><Column id=\"PRC_YN\" type=\"string\" size=\"32\"/><Column id=\"RSP_C_CNTN\" type=\"string\" size=\"32\"/><Column id=\"REQ_RESULT\" type=\"string\" size=\"32\"/><Column id=\"CNF_ENO\" type=\"string\" size=\"32\"/><Column id=\"CNF_DATE\" type=\"string\" size=\"32\"/><Column id=\"CNF_NAME\" type=\"string\" size=\"32\"/><Column id=\"NA_C_RQ_REJ_RSNC\" type=\"string\" size=\"32\"/><Column id=\"NA_C_RQ_STSC\" type=\"string\" size=\"32\"/><Column id=\"STPL_AMN_NA_WRS_C\" type=\"string\" size=\"32\"/><Column id=\"NA_SPYPL_C\" type=\"string\" size=\"32\"/><Column id=\"NA_SPYPL_TEAM_C\" type=\"string\" size=\"32\"/><Column id=\"PLTPE_LYNO\" type=\"string\" size=\"32\"/><Column id=\"PLTPE_SGNO\" type=\"string\" size=\"32\"/><Column id=\"PLTPE_BOX_CN\" type=\"string\" size=\"32\"/><Column id=\"BOX_WT\" type=\"string\" size=\"32\"/><Column id=\"BOX_BULK\" type=\"string\" size=\"32\"/><Column id=\"BOX_WRS_YN\" type=\"string\" size=\"32\"/><Column id=\"BYNG_UPR\" type=\"string\" size=\"32\"/><Column id=\"SEL_UPR\" type=\"string\" size=\"32\"/><Column id=\"TEMP_YN\" type=\"string\" size=\"32\"/><Column id=\"APV_RQ_NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"CUD_DSC\" type=\"string\" size=\"32\"/><Column id=\"LWCRBN_ATTC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PR_MRK_WHT\" type=\"STRING\" size=\"256\"/><Column id=\"PR_MRK_STD_BAS_WHT\" type=\"STRING\" size=\"256\"/><Column id=\"PR_MRK_BAS_UNIT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_na_wrs_qlt_grdc", this);
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

            obj = new Dataset("ds_na_wrs_sze_sex_c", this);
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

            obj = new Dataset("ds_na_wrs_dstr_stsc", this);
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

            obj = new Dataset("ds_bas_pr_unt_dsc", this);
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


            
            // UI Components Initialize
            obj = new Static("sta_back_bar00", "absolute", "109", "147", null, "29", "15", null, this);
            obj.set_taborder("85");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title08", "absolute", "0", "343", "110", "29", null, null, this);
            obj.set_taborder("46");
            obj.set_text("공동상품여부");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar04", "absolute", "109", "343", null, "29", "15", null, this);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar03", "absolute", "109", "231", "328", "29", null, null, this);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar13", "absolute", "109", "259", "328", "29", null, null, this);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar14", "absolute", "109", "287", "328", "29", null, null, this);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar12", "absolute", "109", "175", null, "29", "15", null, this);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save00", "absolute", null, "0", "41", "21", "15", null, this);
            obj.set_taborder("22");
            obj.set_text("신청");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_menu", "absolute", "0", "0", null, "21", "406", null, this);
            obj.set_taborder("23");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar02", "absolute", "489", "231", null, "85", "15", null, this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title04", "absolute", "0", "231", "110", "29", null, null, this);
            obj.set_taborder("25");
            obj.set_text("상품명");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar01", "absolute", "109", "203", null, "29", "15", null, this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title05", "absolute", "0", "259", "110", "29", null, null, this);
            obj.set_taborder("28");
            obj.set_text("상품약어명");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title07", "absolute", "0", "203", "110", "29", null, null, this);
            obj.set_taborder("30");
            obj.set_text("상품분류");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title09", "absolute", "0", "315", "110", "29", null, null, this);
            obj.set_taborder("31");
            obj.set_text("규격");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar05", "absolute", "109", "315", null, "29", "15", null, this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data04", "absolute", "113", "263", "264", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_cssclass("WF_Essential");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("100");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data05", "absolute", "113", "291", "264", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_cssclass("WF_Essential");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("100");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_list_wrs00", "absolute", "911", "319", "143", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_innerdataset("@ds_wrs_id_dsc");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.set_index("-1");

            obj = new Edit("edt_data12", "absolute", "113", "319", "264", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_cssclass("WF_Essential");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pagename01", "absolute", "0", "126", "135", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("상품공통정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data06", "absolute", "113", "207", "34", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_maxlength("3");
            obj.set_inputtype("number");
            obj.set_enable("false");
            obj.style.setStyleValue("font", "disabled", "9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data07", "absolute", "149", "207", "34", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_maxlength("3");
            obj.set_inputtype("number");
            obj.set_enable("false");
            obj.style.setStyleValue("font", "disabled", "9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data08", "absolute", "185", "207", "34", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_maxlength("3");
            obj.set_inputtype("number");
            obj.set_enable("false");
            obj.style.setStyleValue("font", "disabled", "9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data09", "absolute", "221", "207", "34", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_maxlength("3");
            obj.set_inputtype("number");
            obj.set_enable("false");
            obj.style.setStyleValue("font", "disabled", "9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data10", "absolute", "257", "207", "218", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_maxlength("12");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popup01", "absolute", "477", "207", "21", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title06", "absolute", "435", "231", "110", "85", null, null, this);
            obj.set_taborder("27");
            obj.set_text("상품설명");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title10", "absolute", "435", "315", "110", "29", null, null, this);
            obj.set_taborder("34");
            obj.set_text("과세구분");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_contents00", "absolute", "548", "237", "291", "73", null, null, this);
            obj.set_taborder("11");
            obj.set_wordwrap("char");
            obj.set_scrollbars("autovert");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("4000");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_search_wrs", "absolute", "113", "151", "142", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_maxlength("14");
            obj.set_cssclass("WF_Essential");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_store_code03", "absolute", "548", "319", "166", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_store_code03_innerdataset = new Dataset("rdo_store_code03_innerdataset", this.rdo_store_code03);
            rdo_store_code03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">과세</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">면세</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">영세</Col></Row></Rows>");
            obj.set_innerdataset(rdo_store_code03_innerdataset);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.style.set_font("9 Gulim");
            obj.set_index("-1");

            obj = new Combo("cbo_list_wrs03", "absolute", "714", "319", "125", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.set_innerdataset("@ds_sma_apl_tpc");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_codecolumn("SIMP_C");
            obj.set_enable("false");
            obj.set_index("-1");

            obj = new Static("sta_title12", "absolute", "435", "343", "110", "29", null, null, this);
            obj.set_taborder("35");
            obj.set_text("제조처");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data15", "absolute", "548", "347", "110", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_cssclass("WF_Essential");
            obj.set_inputtype("number");
            obj.set_maxlength("25");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popup02", "absolute", "795", "347", "21", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_Searchbtn");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data16", "absolute", "661", "347", "131", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pagename02", "absolute", "0", "400", "140", "21", null, null, this);
            obj.set_taborder("36");
            obj.set_text("2차상품 상세정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "424", null, "350", "15", null, this);
            obj.set_taborder("37");
            obj.style.set_border("0 solid #808080ff");
            obj.style.set_padding("2 7 0 7");
            obj.style.set_bordertype("normal 0 0");
            this.addChild(obj.name, obj);
            obj = new Static("sta_back_bar01", "absolute", "109", "308", null, "29", "0", null, this.div_search);
            obj.set_taborder("137");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_back_bar00", "absolute", "109", "280", null, "29", "0", null, this.div_search);
            obj.set_taborder("129");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static19", "absolute", "109", "196", null, "29", "0", null, this.div_search);
            obj.set_taborder("112");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "109", "112", null, "29", "0", null, this.div_search);
            obj.set_taborder("107");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "109", "168", null, "29", "0", null, this.div_search);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "109", "84", null, "29", "0", null, this.div_search);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static26", "absolute", "109", "0", null, "29", "0", null, this.div_search);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static28", "absolute", "109", "56", null, "29", "0", null, this.div_search);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title00", "absolute", "0", "0", "110", "29", null, null, this.div_search);
            obj.set_taborder("41");
            obj.set_text("상품유형");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title02", "absolute", "0", "28", "110", "29", null, null, this.div_search);
            obj.set_taborder("42");
            obj.set_text("공병코드/수량");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title04", "absolute", "0", "56", "110", "29", null, null, this.div_search);
            obj.set_taborder("43");
            obj.set_text("단량/단위/포장");
            obj.style.set_color("#353e41ff");
            obj.style.set_padding("2 7 0 7");
            obj.set_cssclass("sta_WF_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static27", "absolute", "109", "28", null, "29", "0", null, this.div_search);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title05", "absolute", "435", "56", "110", "29", null, null, this.div_search);
            obj.set_taborder("45");
            obj.set_text("브랜드");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title06", "absolute", "0", "112", "110", "29", null, null, this.div_search);
            obj.set_taborder("46");
            obj.set_text("보관방식");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title07", "absolute", "435", "196", "110", "29", null, null, this.div_search);
            obj.set_taborder("48");
            obj.set_text("주류용도");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title03", "absolute", "435", "28", "110", "29", null, null, this.div_search);
            obj.set_taborder("49");
            obj.set_text("공상자코드");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_div_data04", "absolute", "113", "60", "70", "21", null, null, this.div_search);
            obj.set_taborder("9");
            obj.set_readonly("false");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "0", "84", "110", "29", null, null, this.div_search);
            obj.set_taborder("50");
            obj.set_text("수입여부");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "0", "140", "110", "29", null, null, this.div_search);
            obj.set_taborder("51");
            obj.set_text("유통기한관리여부");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "109", "140", null, "29", "0", null, this.div_search);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "0", "196", "110", "29", null, null, this.div_search);
            obj.set_taborder("53");
            obj.set_text("박스당입수");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "435", "84", "110", "29", null, null, this.div_search);
            obj.set_taborder("55");
            obj.set_text("RFID사용여부");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_div_list00", "absolute", "196", "60", "70", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_innerdataset("@ds_wrs_dsc");
            obj.set_codecolumn("NA_WRS_ATTR_C");
            obj.set_datacolumn("NA_WRS_ATTNM");
            obj.set_index("-1");
            obj = new Combo("cbo_div_list02", "absolute", "113", "116", "151", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("17");
            obj.set_codecolumn("NA_WRS_ATTR_C");
            obj.set_datacolumn("NA_WRS_ATTNM");
            obj.set_innerdataset("@ds_wrs_dsc3");
            obj = new Static("sta_title01", "absolute", "435", "0", "110", "29", null, null, this.div_search);
            obj.set_taborder("56");
            obj.set_text("주류상품여부");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_store_code00", "absolute", "113", "4", "317", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_store_code00_innerdataset = new Dataset("rdo_store_code00_innerdataset", this.div_search.rdo_store_code00);
            rdo_store_code00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">일반상품</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">공병</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">공상자</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">공파렛트</Col></Row></Rows>");
            obj.set_innerdataset(rdo_store_code00_innerdataset);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.style.set_font("9 Gulim");
            obj.set_value("1");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_index("0");
            obj = new Edit("edt_div_data01", "absolute", "113", "32", "80", "21", null, null, this.div_search);
            obj.set_taborder("2");
            obj.set_inputtype("number");
            obj.set_cssclass("WF_Essential");
            obj.set_maxlength("25");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_div_data02", "absolute", "196", "32", "100", "21", null, null, this.div_search);
            obj.set_taborder("3");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup00", "absolute", "299", "32", "21", "21", null, null, this.div_search);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_div_data03", "absolute", "323", "32", "30", "21", null, null, this.div_search);
            obj.set_taborder("5");
            obj.set_maxlength("3");
            obj.set_cssclass("WF_Essential");
            obj.set_inputtype("number");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "358", "32", "20", "21", null, null, this.div_search);
            obj.set_taborder("58");
            obj.set_text("개");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "186", "60", "10", "21", null, null, this.div_search);
            obj.set_taborder("59");
            obj.set_text("/");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "269", "60", "10", "21", null, null, this.div_search);
            obj.set_taborder("60");
            obj.set_text("/");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_div_list01", "absolute", "279", "60", "98", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_codecolumn("NA_WRS_ATTR_C");
            obj.set_datacolumn("NA_WRS_ATTNM");
            obj.set_innerdataset("@ds_wrs_dsc2");
            obj = new Radio("rdo_store_code01", "absolute", "113", "88", "151", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_store_code01_innerdataset = new Dataset("rdo_store_code01_innerdataset", this.div_search.rdo_store_code01);
            rdo_store_code01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">여</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">부</Col></Row></Rows>");
            obj.set_innerdataset(rdo_store_code01_innerdataset);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_value("0");
            obj.set_index("1");
            obj = new Radio("rdo_store_code02", "absolute", "113", "144", "151", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_store_code02_innerdataset = new Dataset("rdo_store_code02_innerdataset", this.div_search.rdo_store_code02);
            rdo_store_code02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">여</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">부</Col></Row></Rows>");
            obj.set_innerdataset(rdo_store_code02_innerdataset);
            obj.set_taborder("21");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_value("0");
            obj.set_index("1");
            obj = new Radio("rdo_store_code03", "absolute", "548", "4", "151", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_store_code03_innerdataset = new Dataset("rdo_store_code03_innerdataset", this.div_search.rdo_store_code03);
            rdo_store_code03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">여</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">부</Col></Row></Rows>");
            obj.set_innerdataset(rdo_store_code03_innerdataset);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_value("0");
            obj.set_index("1");
            obj = new Edit("edt_div_data08", "absolute", "548", "32", "110", "21", null, null, this.div_search);
            obj.set_taborder("6");
            obj.set_inputtype("number");
            obj.set_cssclass("WF_Essential");
            obj.set_maxlength("25");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_div_data09", "absolute", "661", "32", "131", "21", null, null, this.div_search);
            obj.set_taborder("7");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup01", "absolute", "795", "32", "21", "21", null, null, this.div_search);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_div_data10", "absolute", "548", "60", "110", "21", null, null, this.div_search);
            obj.set_taborder("12");
            obj.set_inputtype("number");
            obj.set_cssclass("WF_Essential");
            obj.set_maxlength("25");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_div_data11", "absolute", "661", "60", "131", "21", null, null, this.div_search);
            obj.set_taborder("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_store_code04", "absolute", "548", "88", "151", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_store_code04_innerdataset = new Dataset("rdo_store_code04_innerdataset", this.div_search.rdo_store_code04);
            rdo_store_code04_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">여</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">부</Col></Row></Rows>");
            obj.set_innerdataset(rdo_store_code04_innerdataset);
            obj.set_taborder("16");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_value("0");
            obj.set_index("1");
            obj = new Edit("edt_div_data13", "absolute", "113", "200", "100", "21", null, null, this.div_search);
            obj.set_taborder("27");
            obj.set_readonly("false");
            obj.set_cssclass("WF_Essential");
            obj.set_value("1");
            obj.set_inputtype("number");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup03", "absolute", "795", "60", "21", "21", null, null, this.div_search);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_Searchbtn");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_liq_uz_dsc", "absolute", "548", "200", "151", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("28");
            obj.set_innerdataset("@ds_liq_uz_dsc");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_enable("false");
            obj = new Static("sta_title24", "absolute", "435", "112", "110", "29", null, null, this.div_search);
            obj.set_taborder("105");
            obj.set_text("용도");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            obj.style.set_font("9 Gulim");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_div_list04", "absolute", "548", "116", "151", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("19");
            obj.set_innerdataset("@ds_wrs_dsc4");
            obj.set_codecolumn("NA_WRS_ATTR_C");
            obj.set_datacolumn("NA_WRS_ATTNM");
            obj = new Static("sta_title08", "absolute", "435", "168", "110", "29", null, null, this.div_search);
            obj.set_taborder("108");
            obj.set_text("친환경인증");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            obj.style.set_font("9 Gulim");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_proenv_dsc", "absolute", "548", "172", "151", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("25");
            obj.set_innerdataset("@ds_proenv_dsc");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj = new Static("Static24", "absolute", "109", "252", null, "29", "0", null, this.div_search);
            obj.set_taborder("110");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "109", "224", null, "29", "0", null, this.div_search);
            obj.set_taborder("111");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_na_wrs_sze_sex_c", "absolute", "548", "228", "151", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("30");
            obj.set_innerdataset("@ds_na_wrs_sze_sex_c");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_visible("false");
            obj = new Static("Static20", "absolute", "0", "224", "110", "29", null, null, this.div_search);
            obj.set_taborder("114");
            obj.set_text("품질(등급)");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title14", "absolute", "435", "224", "110", "29", null, null, this.div_search);
            obj.set_taborder("115");
            obj.set_text("크기(성별)");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_na_wrs_qlt_grdc", "absolute", "113", "228", "151", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("29");
            obj.set_innerdataset("@ds_na_wrs_qlt_grdc");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_visible("false");
            obj = new Combo("cbo_na_wrs_dstr_stsc", "absolute", "548", "256", "151", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("32");
            obj.set_innerdataset("@ds_na_wrs_dstr_stsc");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_visible("false");
            obj = new Static("Static21", "absolute", "0", "252", "110", "29", null, null, this.div_search);
            obj.set_taborder("118");
            obj.set_text("농협관리구분");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title15", "absolute", "435", "252", "110", "29", null, null, this.div_search);
            obj.set_taborder("119");
            obj.set_text("유통상태");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_liq_uz_dsc03", "absolute", "113", "256", "151", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("31");
            obj.set_readonly("true");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_visible("false");
            obj = new Edit("edt_day", "absolute", "113", "172", "48", "21", null, null, this.div_search);
            obj.set_taborder("23");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_div_list05", "absolute", "164", "172", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("24");
            obj.set_innerdataset("@ds_vld_prd_dsc");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_enable("false");
            obj = new Static("Static23", "absolute", "0", "168", "110", "29", null, null, this.div_search);
            obj.set_taborder("123");
            obj.set_text("유효기간");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title16", "absolute", "435", "140", "110", "29", null, null, this.div_search);
            obj.set_taborder("124");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("유통기한표기방법");
            obj.style.set_padding("2 7 0 7");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_div_list03", "absolute", "548", "144", "151", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_div_list03_innerdataset = new Dataset("cbo_div_list03_innerdataset", this.div_search.cbo_div_list03);
            cbo_div_list03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">유통기한</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">제조일자</Col></Row></Rows>");
            obj.set_innerdataset(cbo_div_list03_innerdataset);
            obj.set_taborder("22");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            obj = new CheckBox("chk_wrsnm00", "absolute", "703", "172", "87", "21", null, null, this.div_search);
            obj.set_taborder("26");
            obj.set_text("상품명표시");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title11", "absolute", "0", "280", "110", "29", null, null, this.div_search);
            obj.set_taborder("127");
            obj.set_text("GAP인증");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            obj.style.set_font("9 Gulim");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_store_code05", "absolute", "113", "284", "151", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_store_code05_innerdataset = new Dataset("rdo_store_code05_innerdataset", this.div_search.rdo_store_code05);
            rdo_store_code05_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">여</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">부</Col></Row></Rows>");
            obj.set_innerdataset(rdo_store_code05_innerdataset);
            obj.set_taborder("34");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("0");
            obj.set_direction("vertical");
            obj.style.set_font("9 Gulim");
            obj.set_visible("false");
            obj.set_index("1");
            obj = new Static("sta_title09", "absolute", "0", "308", "110", "29", null, null, this.div_search);
            obj.set_taborder("130");
            obj.set_text("저탄소인증여부");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_store_code06", "absolute", "112", "312", "151", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_store_code06_innerdataset = new Dataset("rdo_store_code06_innerdataset", this.div_search.rdo_store_code06);
            rdo_store_code06_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">여</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">부</Col></Row></Rows>");
            obj.set_innerdataset(rdo_store_code06_innerdataset);
            obj.set_taborder("39");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("0");
            obj.set_direction("vertical");
            obj.style.set_font("9 Gulim");
            obj.set_visible("false");
            obj.set_index("1");
            obj = new CheckBox("chk_wrsnm01", "absolute", "703", "256", "87", "21", null, null, this.div_search);
            obj.set_taborder("33");
            obj.set_text("상품명표시");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new CheckBox("chk_wrsnm02", "absolute", "268", "256", "87", "21", null, null, this.div_search);
            obj.set_taborder("133");
            obj.set_text("상품명표시");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new CheckBox("chk_wrsnm03", "absolute", "703", "116", "87", "21", null, null, this.div_search);
            obj.set_taborder("20");
            obj.set_text("상품명표시");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new CheckBox("chk_wrsnm04", "absolute", "268", "284", "87", "21", null, null, this.div_search);
            obj.set_taborder("35");
            obj.set_text("상품명표시");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new CheckBox("chk_wrsnm05", "absolute", "268", "116", "87", "21", null, null, this.div_search);
            obj.set_taborder("18");
            obj.set_text("상품명표시");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title10", "absolute", "435", "280", "110", "29", null, null, this.div_search);
            obj.set_taborder("138");
            obj.set_text("산지코드");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_na_wrs_pdaa_c", "absolute", "548", "284", "110", "21", null, null, this.div_search);
            obj.set_taborder("36");
            obj.set_inputtype("number");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_na_wrs_pdaa_c", "absolute", "795", "284", "21", "21", null, null, this.div_search);
            obj.set_taborder("38");
            obj.set_cssclass("btn_WF_Searchbtn");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_na_wrs_pdaa_nm", "absolute", "661", "284", "131", "21", null, null, this.div_search);
            obj.set_taborder("37");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Radio("rdo_store_code01", "absolute", "113", "347", "151", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_store_code01_innerdataset = new Dataset("rdo_store_code01_innerdataset", this.rdo_store_code01);
            rdo_store_code01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">여</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">부</Col></Row></Rows>");
            obj.set_innerdataset(rdo_store_code01_innerdataset);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.style.set_font("9 Gulim");
            obj.set_value("1");
            obj.set_index("0");

            obj = new Button("btn_clear02", "absolute", null, "0", "53", "21", "59", null, this);
            obj.set_taborder("38");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data03", "absolute", "113", "235", "264", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("200");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_store_code02", "absolute", "528", "207", "206", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_store_code02_innerdataset = new Dataset("rdo_store_code02_innerdataset", this.rdo_store_code02);
            rdo_store_code02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1차상품</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2차공산품</Col></Row></Rows>");
            obj.set_innerdataset(rdo_store_code02_innerdataset);
            obj.set_taborder("4");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Button("btn_search_wrs", "absolute", "258", "151", "106", "21", null, null, this);
            obj.set_taborder("2");
            obj.style.set_imagealign("center middle");
            obj.set_text("코리안넷상품검색");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title01", "absolute", "0", "175", "110", "29", null, null, this);
            obj.set_taborder("40");
            obj.set_text("신청코드구분");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_search_sep00", "absolute", "116", "179", "314", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_search_sep00_innerdataset = new Dataset("rdo_search_sep00_innerdataset", this.rdo_search_sep00);
            rdo_search_sep00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">표준 (상품코드 존재)</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">비표준 (상품코드 미존재)</Col></Row></Rows>");
            obj.set_innerdataset(rdo_search_sep00_innerdataset);
            obj.set_taborder("42");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("2");
            obj.set_direction("vertical");
            obj.set_enable("false");
            obj.set_index("0");

            obj = new Static("sta_title02", "absolute", "0", "147", "110", "29", null, null, this);
            obj.set_taborder("29");
            obj.set_text("상품코드");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title23", "absolute", "0", "287", "110", "29", null, null, this);
            obj.set_taborder("43");
            obj.set_text("상품영문명");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_div_list06", "absolute", "133", "762", "177", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("86");
            obj.set_readonly("true");
            obj.set_innerdataset("@ds_unt_dsc");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_enable("false");

            obj = new Static("sta_pagename05", "absolute", "0", "763", "129", "21", null, null, this);
            obj.set_taborder("48");
            obj.set_text("가격표시제 단위 :");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_load_kornet", "absolute", null, "0", "163", "21", "115", null, this);
            obj.set_taborder("49");
            obj.set_text("코리안넷 상품정보 불러오기");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_result", "absolute", "443", "151", "61", "21", null, null, this);
            obj.set_taborder("50");
            obj.set_text("조회결과 :");
            this.addChild(obj.name, obj);

            obj = new Static("sta_result00", "absolute", "509", "151", "141", "21", null, null, this);
            obj.set_taborder("51");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "787", "110", "29", null, null, this);
            obj.set_taborder("52");
            obj.set_text("내용량");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "109", "787", null, "29", "15", null, this);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "295", "787", "110", "29", null, null, this);
            obj.set_taborder("54");
            obj.set_text("기준량");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "590", "787", "110", "29", null, null, this);
            obj.set_taborder("55");
            obj.set_text("표시단위");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_div_data01", "absolute", "114", "791", "137", "21", null, null, this);
            obj.set_taborder("87");
            obj.getSetter("inputtype").set("number");
            obj.getSetter("maxlength").set("25");
            obj.set_cssclass("WF_Essential");
            obj.set_mask("9990.##");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_div_data02", "absolute", "409", "791", "137", "21", null, null, this);
            obj.set_taborder("88");
            obj.getSetter("inputtype").set("number");
            obj.getSetter("maxlength").set("25");
            obj.set_cssclass("WF_Essential");
            obj.set_mask("9990.##");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pagename07", "absolute", "0", "1653", "129", "21", null, null, this);
            obj.set_taborder("56");
            obj.set_text("첨부서류");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_result01", "absolute", "0", "1674", "842", "21", null, null, this);
            obj.set_taborder("57");
            obj.set_text("※ 농협 양식은 \"공지사항 > 농협공지사항 게시판\" 또는 \"하나로 eSCM시스템 > 커뮤니티 > 자료실\"에서 검색 후 다운로드 받으시길 바랍니다.");
            this.addChild(obj.name, obj);

            obj = new Div("div_atch_new", "absolute", "0", "1708", null, "212", "15", null, this);
            obj.set_taborder("58");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "0", "120", "21", null, null, this.div_atch_new);
            obj.set_taborder("19");
            obj.set_text("신상품정보");
            obj.style.set_font("bold 9 Gulim");
            this.div_atch_new.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "59", "160", "29", null, null, this.div_atch_new);
            obj.set_taborder("20");
            obj.set_text("상품소개서");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.div_atch_new.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "159", "59", null, "29", "0", null, this.div_atch_new);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_atch_new.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0", "87", "160", "29", null, null, this.div_atch_new);
            obj.set_taborder("22");
            obj.set_text("계약요청품목 제시 가격표");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.div_atch_new.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "159", "87", null, "29", "0", null, this.div_atch_new);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_atch_new.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "0", "115", "160", "29", null, null, this.div_atch_new);
            obj.set_taborder("24");
            obj.set_text("R1 거래 조건표");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.div_atch_new.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "159", "115", null, "29", "0", null, this.div_atch_new);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_atch_new.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "0", "31", "160", "29", null, null, this.div_atch_new);
            obj.set_taborder("28");
            obj.set_text("구 분");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.div_atch_new.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "159", "31", null, "29", "0", null, this.div_atch_new);
            obj.set_taborder("29");
            obj.set_text("파 일");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.div_atch_new.addChild(obj.name, obj);
            obj = new FileUpload("FileUpload07", "absolute", "163", "63", "431", "21", null, null, this.div_atch_new);
            obj.set_taborder("30");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            this.div_atch_new.addChild(obj.name, obj);
            obj = new FileUpload("FileUpload08", "absolute", "163", "91", "431", "21", null, null, this.div_atch_new);
            obj.set_taborder("31");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            this.div_atch_new.addChild(obj.name, obj);
            obj = new FileUpload("FileUpload09", "absolute", "163", "119", "431", "21", null, null, this.div_atch_new);
            obj.set_taborder("32");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            this.div_atch_new.addChild(obj.name, obj);
            obj = new Button("btn_atch_del07", "absolute", "598", "63", "51", "21", null, null, this.div_atch_new);
            obj.set_taborder("34");
            obj.set_text("삭제");
            obj.style.set_imagealign("center middle");
            this.div_atch_new.addChild(obj.name, obj);
            obj = new Button("btn_atch_del08", "absolute", "598", "91", "51", "21", null, null, this.div_atch_new);
            obj.set_taborder("35");
            obj.set_text("삭제");
            obj.style.set_imagealign("center middle");
            this.div_atch_new.addChild(obj.name, obj);
            obj = new Button("btn_atch_del09", "absolute", "598", "119", "51", "21", null, null, this.div_atch_new);
            obj.set_taborder("36");
            obj.set_text("삭제");
            obj.style.set_imagealign("center middle");
            this.div_atch_new.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "159", "143", null, "29", "0", null, this.div_atch_new);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_atch_new.addChild(obj.name, obj);
            obj = new Button("btn_atch_del10", "absolute", "598", "147", "51", "21", null, null, this.div_atch_new);
            obj.set_taborder("38");
            obj.set_text("삭제");
            obj.style.set_imagealign("center middle");
            this.div_atch_new.addChild(obj.name, obj);
            obj = new FileUpload("FileUpload10", "absolute", "163", "147", "431", "21", null, null, this.div_atch_new);
            obj.set_taborder("39");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            this.div_atch_new.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "0", "143", "160", "29", null, null, this.div_atch_new);
            obj.set_taborder("40");
            obj.set_text("입점행사 제안서");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.div_atch_new.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "159", "171", null, "29", "0", null, this.div_atch_new);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_atch_new.addChild(obj.name, obj);
            obj = new Button("btn_atch_del11", "absolute", "598", "175", "51", "21", null, null, this.div_atch_new);
            obj.set_taborder("42");
            obj.set_text("삭제");
            obj.style.set_imagealign("center middle");
            this.div_atch_new.addChild(obj.name, obj);
            obj = new FileUpload("FileUpload11", "absolute", "163", "175", "431", "21", null, null, this.div_atch_new);
            obj.set_taborder("43");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            this.div_atch_new.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "0", "171", "160", "29", null, null, this.div_atch_new);
            obj.set_taborder("44");
            obj.set_text("기타서류");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.div_atch_new.addChild(obj.name, obj);
            obj = new Static("sta_file_data7", "absolute", "672", "63", "88", "21", null, null, this.div_atch_new);
            obj.set_taborder("45");
            obj.set_visible("false");
            this.div_atch_new.addChild(obj.name, obj);
            obj = new Static("sta_file_data8", "absolute", "672", "91", "88", "21", null, null, this.div_atch_new);
            obj.set_taborder("46");
            obj.set_visible("false");
            this.div_atch_new.addChild(obj.name, obj);
            obj = new Static("sta_file_data9", "absolute", "672", "118", "88", "21", null, null, this.div_atch_new);
            obj.set_taborder("47");
            obj.set_visible("false");
            this.div_atch_new.addChild(obj.name, obj);
            obj = new Static("sta_file_data10", "absolute", "672", "145", "88", "21", null, null, this.div_atch_new);
            obj.set_taborder("48");
            obj.set_visible("false");
            this.div_atch_new.addChild(obj.name, obj);
            obj = new Static("sta_file_data11", "absolute", "672", "174", "88", "21", null, null, this.div_atch_new);
            obj.set_taborder("49");
            obj.set_visible("false");
            this.div_atch_new.addChild(obj.name, obj);

            obj = new Div("div_atch_old", "absolute", "0", "1923", null, "177", "15", null, this);
            obj.set_taborder("59");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "0", "120", "21", null, null, this.div_atch_old);
            obj.set_taborder("37");
            obj.set_text("기존 상품 정보 수정");
            obj.style.set_font("bold 9 Gulim");
            this.div_atch_old.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "59", "160", "29", null, null, this.div_atch_old);
            obj.set_taborder("38");
            obj.set_text("상품정보 변경요청서");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.div_atch_old.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "159", "59", null, "29", "0", null, this.div_atch_old);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_atch_old.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0", "87", "160", "29", null, null, this.div_atch_old);
            obj.set_taborder("40");
            obj.set_text("거래조건 변경요청서");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.div_atch_old.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "159", "87", null, "29", "0", null, this.div_atch_old);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_atch_old.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "0", "115", "160", "29", null, null, this.div_atch_old);
            obj.set_taborder("42");
            obj.set_text("기타 서류");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.div_atch_old.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "159", "115", null, "29", "0", null, this.div_atch_old);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_atch_old.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "0", "31", "160", "29", null, null, this.div_atch_old);
            obj.set_taborder("44");
            obj.set_text("구 분");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.div_atch_old.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "159", "31", null, "29", "0", null, this.div_atch_old);
            obj.set_taborder("45");
            obj.set_text("파 일");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 9 Gulim");
            this.div_atch_old.addChild(obj.name, obj);
            obj = new FileUpload("FileUpload04", "absolute", "163", "63", "431", "21", null, null, this.div_atch_old);
            obj.set_taborder("0");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            this.div_atch_old.addChild(obj.name, obj);
            obj = new FileUpload("FileUpload05", "absolute", "163", "91", "431", "21", null, null, this.div_atch_old);
            obj.set_taborder("2");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            this.div_atch_old.addChild(obj.name, obj);
            obj = new FileUpload("FileUpload06", "absolute", "163", "119", "431", "21", null, null, this.div_atch_old);
            obj.set_taborder("4");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            this.div_atch_old.addChild(obj.name, obj);
            obj = new Button("btn_atch_del04", "absolute", "598", "63", "51", "21", null, null, this.div_atch_old);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.style.set_imagealign("center middle");
            this.div_atch_old.addChild(obj.name, obj);
            obj = new Button("btn_atch_del05", "absolute", "598", "91", "51", "21", null, null, this.div_atch_old);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.style.set_imagealign("center middle");
            this.div_atch_old.addChild(obj.name, obj);
            obj = new Button("btn_atch_del06", "absolute", "598", "119", "51", "21", null, null, this.div_atch_old);
            obj.set_taborder("5");
            obj.set_text("삭제");
            obj.style.set_imagealign("center middle");
            this.div_atch_old.addChild(obj.name, obj);
            obj = new Static("sta_file_data4", "absolute", "672", "63", "88", "21", null, null, this.div_atch_old);
            obj.set_taborder("52");
            obj.set_visible("false");
            this.div_atch_old.addChild(obj.name, obj);
            obj = new Static("sta_file_data5", "absolute", "672", "92", "88", "21", null, null, this.div_atch_old);
            obj.set_taborder("53");
            obj.set_visible("false");
            this.div_atch_old.addChild(obj.name, obj);
            obj = new Static("sta_file_data6", "absolute", "672", "119", "88", "21", null, null, this.div_atch_old);
            obj.set_taborder("54");
            obj.set_visible("false");
            this.div_atch_old.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "1519", "160", "29", null, null, this);
            obj.set_taborder("60");
            obj.set_text("대표 이미지");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "159", "1519", null, "29", "15", null, this);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "0", "1547", "160", "29", null, null, this);
            obj.set_taborder("62");
            obj.set_text("부가 이미지 1");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "159", "1547", null, "29", "15", null, this);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "1575", "160", "29", null, null, this);
            obj.set_taborder("64");
            obj.set_text("부가 이미지 2");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "159", "1575", null, "29", "15", null, this);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "0", "1603", "160", "29", null, null, this);
            obj.set_taborder("66");
            obj.set_text("부가 이미지 3");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "159", "1603", null, "29", "15", null, this);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "0", "1491", "160", "29", null, null, this);
            obj.set_taborder("68");
            obj.set_text("구 분");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "159", "1491", null, "29", "15", null, this);
            obj.set_taborder("69");
            obj.set_text("파 일");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload00", "absolute", "163", "1523", "431", "21", null, null, this);
            obj.set_taborder("90");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload01", "absolute", "163", "1551", "431", "21", null, null, this);
            obj.set_taborder("92");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload02", "absolute", "163", "1579", "431", "21", null, null, this);
            obj.set_taborder("94");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload03", "absolute", "163", "1607", "431", "21", null, null, this);
            obj.set_taborder("96");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_atch_del00", "absolute", "598", "1523", "51", "21", null, null, this);
            obj.set_taborder("91");
            obj.set_text("삭제");
            obj.style.set_imagealign("center middle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_atch_del01", "absolute", "598", "1551", "51", "21", null, null, this);
            obj.set_taborder("93");
            obj.set_text("삭제");
            obj.style.set_imagealign("center middle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_atch_del02", "absolute", "598", "1579", "51", "21", null, null, this);
            obj.set_taborder("95");
            obj.set_text("삭제");
            obj.style.set_imagealign("center middle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_atch_del03", "absolute", "598", "1607", "51", "21", null, null, this);
            obj.set_taborder("97");
            obj.set_text("삭제");
            obj.style.set_imagealign("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pagename00", "absolute", "0", "1461", "129", "21", null, null, this);
            obj.set_taborder("70");
            obj.set_text("상품이미지 파일");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_file_data0", "absolute", "677", "1523", "88", "21", null, null, this);
            obj.set_taborder("71");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_file_data1", "absolute", "677", "1550", "88", "21", null, null, this);
            obj.set_taborder("72");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_file_data2", "absolute", "677", "1579", "88", "21", null, null, this);
            obj.set_taborder("73");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_file_data3", "absolute", "677", "1607", "88", "21", null, null, this);
            obj.set_taborder("74");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pagename08", "absolute", "0", "45", "135", "21", null, null, this);
            obj.set_taborder("75");
            obj.set_text("신청자 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00", "absolute", "0", "70", "110", "29", null, null, this);
            obj.set_taborder("76");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data00", "absolute", "113", "74", "151", "21", null, null, this);
            obj.set_taborder("77");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "109", "70", null, "29", "15", null, this);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title03", "absolute", "435", "70", "110", "29", null, null, this);
            obj.set_taborder("79");
            obj.set_text("연락처");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fsrgmn_nm", "absolute", "113", "74", "151", "21", null, null, this);
            obj.set_taborder("80");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ctcpl_telno", "absolute", "548", "74", "151", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_inputtype("number");
            obj.set_maxlength("14");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear00", "absolute", null, "0", "107", "21", "311", null, this);
            obj.set_taborder("81");
            obj.set_text("데이터 셋 검사");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title13", "absolute", "435", "175", "110", "29", null, null, this);
            obj.set_taborder("82");
            obj.set_text("상품코드구분");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_store_code05", "absolute", "548", "179", "330", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_store_code05_innerdataset = new Dataset("rdo_store_code05_innerdataset", this.rdo_store_code05);
            rdo_store_code05_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">13자리(수량형,금액형)</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">6자리(중량형,금액형)</Col></Row></Rows>");
            obj.set_innerdataset(rdo_store_code05_innerdataset);
            obj.set_taborder("83");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_readonly("false");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.set_index("-1");

            obj = new Combo("cbo_div_list00", "absolute", "704", "791", "151", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("89");
            obj.set_innerdataset("@ds_bas_pr_unt_dsc");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");

            obj = new Div("div_kornet", "absolute", "0", "849", null, "599", "0", null, this);
            obj.set_taborder("84");
            this.addChild(obj.name, obj);
            obj = new Static("Static29", "absolute", "109", "165", null, "29", "15", null, this.div_kornet);
            obj.set_taborder("199");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "109", "137", null, "29", "15", null, this.div_kornet);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("Static26", "absolute", "199", "501", null, "86", "15", null, this.div_kornet);
            obj.set_taborder("145");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("Static23", "absolute", "79", "333", null, "29", "15", null, this.div_kornet);
            obj.set_taborder("92");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "79", "305", null, "29", "15", null, this.div_kornet);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "79", "277", null, "29", "15", null, this.div_kornet);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "79", "473", null, "29", "15", null, this.div_kornet);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("sta_pagename06", "absolute", "0", "0", "178", "21", null, null, this.div_kornet);
            obj.set_taborder("0");
            obj.set_text("부가정보 (코리안넷 정보)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0", "25", "110", "29", null, null, this.div_kornet);
            obj.set_taborder("1");
            obj.set_text("업체식별코드");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "109", "25", null, "29", "15", null, this.div_kornet);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("sta_title17", "absolute", "294", "25", "110", "29", null, null, this.div_kornet);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("사업자등록번호");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "81", "110", "29", null, null, this.div_kornet);
            obj.set_taborder("5");
            obj.set_text("바코드타입");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "109", "81", null, "29", "15", null, this.div_kornet);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "109", "110", "29", null, null, this.div_kornet);
            obj.set_taborder("8");
            obj.set_text("KAN상품분류코드");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "109", "109", null, "29", "15", null, this.div_kornet);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("sta_title01", "absolute", "294", "109", "110", "29", null, null, this.div_kornet);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("KAN상품분류명칭");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "294", "137", "110", "29", null, null, this.div_kornet);
            obj.set_taborder("11");
            obj.set_text("상품명");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "220", "305", "100", "29", null, null, this.div_kornet);
            obj.set_taborder("14");
            obj.set_text("높이명칭");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("sta_title03", "absolute", "0", "305", "100", "29", null, null, this.div_kornet);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("높이값");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "220", "277", "100", "29", null, null, this.div_kornet);
            obj.set_taborder("17");
            obj.set_text("가로명칭");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("sta_title04", "absolute", "0", "277", "100", "29", null, null, this.div_kornet);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("가로값");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("sta_title05", "absolute", "590", "25", "110", "29", null, null, this.div_kornet);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("상품바코드번호");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("sta_title02", "absolute", "0", "137", "110", "29", null, null, this.div_kornet);
            obj.set_taborder("25");
            obj.set_text("상품구분");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("sta_title06", "absolute", "294", "165", "110", "29", null, null, this.div_kornet);
            obj.set_taborder("27");
            obj.set_text("상품명영문");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("sta_title00", "absolute", "590", "81", "110", "29", null, null, this.div_kornet);
            obj.set_taborder("29");
            obj.set_text("브랜드");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("sta_title07", "absolute", "294", "81", "110", "29", null, null, this.div_kornet);
            obj.set_taborder("31");
            obj.set_text("제조사");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("sta_title08", "absolute", "660", "305", "100", "29", null, null, this.div_kornet);
            obj.set_taborder("36");
            obj.set_text("세로명칭");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("sta_title09", "absolute", "660", "277", "100", "29", null, null, this.div_kornet);
            obj.set_taborder("37");
            obj.set_text("용량명칭");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("sta_title10", "absolute", "440", "277", "100", "29", null, null, this.div_kornet);
            obj.set_taborder("38");
            obj.set_text("용량값");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("sta_title11", "absolute", "440", "305", "100", "29", null, null, this.div_kornet);
            obj.set_taborder("39");
            obj.set_text("세로값");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "220", "333", "100", "29", null, null, this.div_kornet);
            obj.set_taborder("48");
            obj.set_text("내용물중량명칭");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("sta_title12", "absolute", "0", "333", "100", "29", null, null, this.div_kornet);
            obj.set_taborder("50");
            obj.set_text("내용물중량값");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("sta_title13", "absolute", "660", "333", "100", "29", null, null, this.div_kornet);
            obj.set_taborder("51");
            obj.set_text("총중량명칭");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("sta_title14", "absolute", "440", "333", "100", "29", null, null, this.div_kornet);
            obj.set_taborder("52");
            obj.set_text("총중량값");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "79", "361", null, "29", "15", null, this.div_kornet);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "79", "389", null, "29", "15", null, this.div_kornet);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "220", "389", "100", "29", null, null, this.div_kornet);
            obj.set_taborder("59");
            obj.set_text("RRP높이명칭");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("sta_title15", "absolute", "0", "389", "100", "29", null, null, this.div_kornet);
            obj.set_taborder("60");
            obj.set_text("RRP높이값");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("sta_title16", "absolute", "660", "361", "100", "29", null, null, this.div_kornet);
            obj.set_taborder("61");
            obj.set_text("RRP가로명칭");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("sta_title18", "absolute", "440", "361", "100", "29", null, null, this.div_kornet);
            obj.set_taborder("62");
            obj.set_text("RRP가로값");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "660", "389", "100", "29", null, null, this.div_kornet);
            obj.set_taborder("66");
            obj.set_text("RRP세로명칭");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("sta_title19", "absolute", "440", "389", "100", "29", null, null, this.div_kornet);
            obj.set_taborder("67");
            obj.set_text("RRP세로값");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("sta_title20", "absolute", "0", "361", "100", "29", null, null, this.div_kornet);
            obj.set_taborder("68");
            obj.set_text("시즌명칭");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("sta_title21", "absolute", "0", "165", "110", "29", null, null, this.div_kornet);
            obj.set_taborder("69");
            obj.set_text("단위가격표시단위");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "0", "193", "110", "29", null, null, this.div_kornet);
            obj.set_taborder("75");
            obj.set_text("제조국가");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("Static19", "absolute", "109", "193", null, "29", "15", null, this.div_kornet);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("sta_title22", "absolute", "220", "361", "100", "29", null, null, this.div_kornet);
            obj.set_taborder("78");
            obj.set_text("RRP 유무");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("sta_title23", "absolute", "0", "221", "110", "29", null, null, this.div_kornet);
            obj.set_taborder("80");
            obj.set_text("과세형태");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "79", "417", null, "29", "15", null, this.div_kornet);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "220", "417", "100", "29", null, null, this.div_kornet);
            obj.set_taborder("83");
            obj.set_text("사이즈코드");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("sta_title24", "absolute", "0", "417", "100", "29", null, null, this.div_kornet);
            obj.set_taborder("84");
            obj.set_text("사이즈");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("sta_title25", "absolute", "660", "417", "100", "29", null, null, this.div_kornet);
            obj.set_taborder("85");
            obj.set_text("컬러코드");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("sta_title26", "absolute", "440", "417", "100", "29", null, null, this.div_kornet);
            obj.set_taborder("86");
            obj.set_text("컬러");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "0", "473", "200", "29", null, null, this.div_kornet);
            obj.set_taborder("91");
            obj.set_text("공병보증금반환대상여부");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("sta_title27", "absolute", "590", "473", "200", "29", null, null, this.div_kornet);
            obj.set_taborder("94");
            obj.set_text("영유아식품이력추적관리대상여부");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("sta_title28", "absolute", "294", "473", "200", "29", null, null, this.div_kornet);
            obj.set_taborder("97");
            obj.set_text("건강식품이력추적관리대상여부");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("Static24", "absolute", "294", "193", "110", "29", null, null, this.div_kornet);
            obj.set_taborder("98");
            obj.set_text("홈페이지");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("Static25", "absolute", "109", "221", null, "29", "15", null, this.div_kornet);
            obj.set_taborder("99");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("sta_title29", "absolute", "590", "221", "110", "29", null, null, this.div_kornet);
            obj.set_taborder("101");
            obj.set_text("저장매체");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("sta_title30", "absolute", "294", "221", "110", "29", null, null, this.div_kornet);
            obj.set_taborder("103");
            obj.set_text("장르");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new TextArea("txa_contents00", "absolute", "203", "507", "670", "73", null, null, this.div_kornet);
            obj.set_taborder("126");
            obj.set_readonly("true");
            obj.set_scrollbars("autovert");
            obj.style.set_background("beige");
            obj.set_wordwrap("char");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("Static32", "absolute", "79", "249", null, "29", "15", null, this.div_kornet);
            obj.set_taborder("127");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("sta_title37", "absolute", "220", "249", "100", "29", null, null, this.div_kornet);
            obj.set_taborder("128");
            obj.set_text("유통기한");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("sta_title38", "absolute", "440", "249", "100", "29", null, null, this.div_kornet);
            obj.set_taborder("129");
            obj.set_text("알콜도수단위");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("sta_title39", "absolute", "660", "249", "100", "29", null, null, this.div_kornet);
            obj.set_taborder("130");
            obj.set_text("알콜도수");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("Static33", "absolute", "0", "249", "100", "29", null, null, this.div_kornet);
            obj.set_taborder("135");
            obj.set_text("유통기한단위");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("Static28", "absolute", "79", "445", null, "29", "15", null, this.div_kornet);
            obj.set_taborder("136");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("sta_title31", "absolute", "220", "445", "100", "29", null, null, this.div_kornet);
            obj.set_taborder("137");
            obj.set_text("수입원");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("sta_title32", "absolute", "440", "445", "100", "29", null, null, this.div_kornet);
            obj.set_taborder("138");
            obj.set_text("최초출시일자");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("sta_title34", "absolute", "660", "445", "100", "29", null, null, this.div_kornet);
            obj.set_taborder("139");
            obj.set_text("단종일자");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("Static34", "absolute", "0", "445", "100", "29", null, null, this.div_kornet);
            obj.set_taborder("144");
            obj.set_text("ISBN/ISSN");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("Static27", "absolute", "0", "501", "200", "86", null, null, this.div_kornet);
            obj.set_taborder("146");
            obj.set_text("상품정보");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data40", "absolute", "203", "477", "80", "21", null, null, this.div_kornet);
            obj.set_taborder("147");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data38", "absolute", "497", "477", "80", "21", null, null, this.div_kornet);
            obj.set_taborder("148");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data39", "absolute", "793", "477", "80", "21", null, null, this.div_kornet);
            obj.set_taborder("149");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data60", "absolute", "763", "449", "110", "21", null, null, this.div_kornet);
            obj.set_taborder("150");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data35", "absolute", "543", "421", "110", "21", null, null, this.div_kornet);
            obj.set_taborder("151");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data28", "absolute", "113", "169", "172", "21", null, null, this.div_kornet);
            obj.set_taborder("152");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data25", "absolute", "543", "365", "110", "21", null, null, this.div_kornet);
            obj.set_taborder("153");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data21", "absolute", "543", "337", "110", "21", null, null, this.div_kornet);
            obj.set_taborder("154");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data17", "absolute", "543", "309", "110", "21", null, null, this.div_kornet);
            obj.set_taborder("155");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data18", "absolute", "543", "281", "110", "21", null, null, this.div_kornet);
            obj.set_taborder("156");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data56", "absolute", "763", "253", "110", "21", null, null, this.div_kornet);
            obj.set_taborder("157");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data55", "absolute", "543", "253", "110", "21", null, null, this.div_kornet);
            obj.set_taborder("158");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data16", "absolute", "763", "281", "110", "21", null, null, this.div_kornet);
            obj.set_taborder("159");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data15", "absolute", "763", "309", "110", "21", null, null, this.div_kornet);
            obj.set_taborder("160");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data20", "absolute", "763", "337", "110", "21", null, null, this.div_kornet);
            obj.set_taborder("161");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data24", "absolute", "763", "365", "110", "21", null, null, this.div_kornet);
            obj.set_taborder("162");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data27", "absolute", "103", "365", "110", "21", null, null, this.div_kornet);
            obj.set_taborder("163");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data34", "absolute", "763", "421", "110", "21", null, null, this.div_kornet);
            obj.set_taborder("164");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data59", "absolute", "543", "449", "110", "21", null, null, this.div_kornet);
            obj.set_taborder("165");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data58", "absolute", "323", "449", "110", "21", null, null, this.div_kornet);
            obj.set_taborder("166");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data37", "absolute", "103", "421", "110", "21", null, null, this.div_kornet);
            obj.set_taborder("167");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data26", "absolute", "543", "393", "110", "21", null, null, this.div_kornet);
            obj.set_taborder("168");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data23", "absolute", "103", "393", "110", "21", null, null, this.div_kornet);
            obj.set_taborder("169");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data19", "absolute", "103", "337", "110", "21", null, null, this.div_kornet);
            obj.set_taborder("170");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data13", "absolute", "103", "309", "110", "21", null, null, this.div_kornet);
            obj.set_taborder("171");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data14", "absolute", "103", "281", "110", "21", null, null, this.div_kornet);
            obj.set_taborder("172");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data54", "absolute", "323", "253", "110", "21", null, null, this.div_kornet);
            obj.set_taborder("173");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data41", "absolute", "407", "225", "172", "21", null, null, this.div_kornet);
            obj.set_taborder("174");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data31", "absolute", "113", "225", "172", "21", null, null, this.div_kornet);
            obj.set_taborder("175");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data03", "absolute", "407", "169", "468", "21", null, null, this.div_kornet);
            obj.set_taborder("176");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data42", "absolute", "703", "225", "172", "21", null, null, this.div_kornet);
            obj.set_taborder("177");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data32", "absolute", "323", "365", "110", "21", null, null, this.div_kornet);
            obj.set_taborder("178");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data04", "absolute", "113", "141", "172", "21", null, null, this.div_kornet);
            obj.set_taborder("179");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data07", "absolute", "407", "113", "468", "21", null, null, this.div_kornet);
            obj.set_taborder("180");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data06", "absolute", "703", "85", "172", "21", null, null, this.div_kornet);
            obj.set_taborder("181");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data02", "absolute", "703", "29", "172", "21", null, null, this.div_kornet);
            obj.set_taborder("182");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data05", "absolute", "407", "85", "172", "21", null, null, this.div_kornet);
            obj.set_taborder("183");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data01", "absolute", "407", "29", "172", "21", null, null, this.div_kornet);
            obj.set_taborder("184");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data00", "absolute", "113", "29", "172", "21", null, null, this.div_kornet);
            obj.set_taborder("185");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data08", "absolute", "113", "85", "172", "21", null, null, this.div_kornet);
            obj.set_taborder("186");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data09", "absolute", "113", "113", "172", "21", null, null, this.div_kornet);
            obj.set_taborder("187");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data10", "absolute", "407", "141", "468", "21", null, null, this.div_kornet);
            obj.set_taborder("188");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data33", "absolute", "112", "197", "172", "21", null, null, this.div_kornet);
            obj.set_taborder("189");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data43", "absolute", "407", "197", "468", "21", null, null, this.div_kornet);
            obj.set_taborder("190");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data53", "absolute", "103", "253", "110", "21", null, null, this.div_kornet);
            obj.set_taborder("191");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data12", "absolute", "323", "281", "110", "21", null, null, this.div_kornet);
            obj.set_taborder("192");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data11", "absolute", "323", "309", "110", "21", null, null, this.div_kornet);
            obj.set_taborder("193");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data22", "absolute", "323", "337", "110", "21", null, null, this.div_kornet);
            obj.set_taborder("194");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data30", "absolute", "323", "393", "110", "21", null, null, this.div_kornet);
            obj.set_taborder("195");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data29", "absolute", "763", "393", "110", "21", null, null, this.div_kornet);
            obj.set_taborder("196");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data36", "absolute", "323", "421", "110", "21", null, null, this.div_kornet);
            obj.set_taborder("197");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data57", "absolute", "103", "449", "110", "21", null, null, this.div_kornet);
            obj.set_taborder("198");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("Static30", "absolute", "109", "53", null, "29", "15", null, this.div_kornet);
            obj.set_taborder("200");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("sta_title33", "absolute", "294", "53", "110", "29", null, null, this.div_kornet);
            obj.set_taborder("201");
            obj.set_text("검증결과등급");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("sta_title35", "absolute", "590", "53", "110", "29", null, null, this.div_kornet);
            obj.set_taborder("202");
            obj.set_text("검증서생성일");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data44", "absolute", "703", "57", "172", "21", null, null, this.div_kornet);
            obj.set_taborder("203");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data45", "absolute", "407", "57", "172", "21", null, null, this.div_kornet);
            obj.set_taborder("204");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Edit("edt_div_data46", "absolute", "113", "57", "172", "21", null, null, this.div_kornet);
            obj.set_taborder("205");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            obj.style.set_background("beige");
            this.div_kornet.addChild(obj.name, obj);
            obj = new Static("Static31", "absolute", "0", "53", "110", "29", null, null, this.div_kornet);
            obj.set_taborder("206");
            obj.set_text("바코드검증서번호");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 5");
            this.div_kornet.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 350, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("37");
            		p.style.set_border("0 solid #808080ff");
            		p.style.set_padding("2 7 0 7");
            		p.style.set_bordertype("normal 0 0");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 212, this.div_atch_new,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("58");
            		p.set_visible("true");

            	}
            );
            this.div_atch_new.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 177, this.div_atch_old,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("59");
            		p.set_visible("false");

            	}
            );
            this.div_atch_old.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 599, this.div_kornet,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("84");

            	}
            );
            this.div_kornet.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 900, 1930, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1540");
            		p.set_titletext("신규상품 등록(신규)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item125","div_kornet.edt_div_data57","value","ds_kornet_wrs","ISBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item143","div_kornet.edt_div_data36","value","ds_kornet_wrs","SIZE_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item144","div_kornet.edt_div_data29","value","ds_kornet_wrs","RRP_DTH_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item145","div_kornet.edt_div_data30","value","ds_kornet_wrs","RRP_HGT_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item146","div_kornet.edt_div_data22","value","ds_kornet_wrs","PACKWGT_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item142","div_kornet.edt_div_data11","value","ds_kornet_wrs","HGT_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item147","div_kornet.edt_div_data12","value","ds_kornet_wrs","WDT_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item148","div_kornet.edt_div_data53","value","ds_kornet_wrs","EXPIRYDAY_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item112","div_kornet.edt_div_data43","value","ds_kornet_wrs","HOMEPAGE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item107","div_kornet.edt_div_data33","value","ds_kornet_wrs","MADEIN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item104","div_kornet.edt_div_data10","value","ds_kornet_wrs","PRNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item102","div_kornet.edt_div_data09","value","ds_kornet_wrs","KANCLASS_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item101","div_kornet.edt_div_data08","value","ds_kornet_wrs","BARCODETYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item96","div_kornet.edt_div_data00","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item97","div_kornet.edt_div_data01","value","ds_kornet_wrs","KBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item100","div_kornet.edt_div_data05","value","ds_kornet_wrs","MANUFACT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item98","div_kornet.edt_div_data02","value","ds_kornet_wrs","GTIN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item99","div_kornet.edt_div_data06","value","ds_kornet_wrs","BRAND");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item103","div_kornet.edt_div_data07","value","ds_kornet_wrs","KANCLASS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item106","div_kornet.edt_div_data04","value","ds_kornet_wrs","PRGUBUN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item109","div_kornet.edt_div_data32","value","ds_kornet_wrs","RRP_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item110","div_kornet.edt_div_data42","value","ds_kornet_wrs","STORAGETYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item105","div_kornet.edt_div_data03","value","ds_kornet_wrs","PRNMENG");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item108","div_kornet.edt_div_data31","value","ds_kornet_wrs","TAXTYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item111","div_kornet.edt_div_data41","value","ds_kornet_wrs","GENRE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item135","div_kornet.edt_div_data54","value","ds_kornet_wrs","EXPIRYDAY");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item136","div_kornet.edt_div_data14","value","ds_kornet_wrs","WDT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item141","div_kornet.edt_div_data13","value","ds_kornet_wrs","HGT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item137","div_kornet.edt_div_data19","value","ds_kornet_wrs","PACKWGT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item138","div_kornet.edt_div_data23","value","ds_kornet_wrs","RRP_HGT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item139","div_kornet.edt_div_data26","value","ds_kornet_wrs","RRP_DTH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item140","div_kornet.edt_div_data37","value","ds_kornet_wrs","P_SIZE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item126","div_kornet.edt_div_data58","value","ds_kornet_wrs","IMPORTER");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item127","div_kornet.edt_div_data59","value","ds_kornet_wrs","STARTDATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item129","div_kornet.edt_div_data34","value","ds_kornet_wrs","COLOR_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item130","div_kornet.edt_div_data27","value","ds_kornet_wrs","SEASON");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item131","div_kornet.edt_div_data24","value","ds_kornet_wrs","RRP_WDT_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item132","div_kornet.edt_div_data20","value","ds_kornet_wrs","GROSSWGT_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item128","div_kornet.edt_div_data15","value","ds_kornet_wrs","DTH_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item133","div_kornet.edt_div_data16","value","ds_kornet_wrs","VOLUME_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item134","div_kornet.edt_div_data55","value","ds_kornet_wrs","ALCOLDEGREE_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item120","div_kornet.edt_div_data56","value","ds_kornet_wrs","ALCOLDEGREE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item114","div_kornet.edt_div_data18","value","ds_kornet_wrs","VOLUME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item113","div_kornet.edt_div_data17","value","ds_kornet_wrs","DTH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item115","div_kornet.edt_div_data21","value","ds_kornet_wrs","GROSSWGT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item116","div_kornet.edt_div_data25","value","ds_kornet_wrs","RRP_WDT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item117","div_kornet.edt_div_data28","value","ds_kornet_wrs","PIECEPRICEUNIT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item118","div_kornet.edt_div_data35","value","ds_kornet_wrs","COLOR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item121","div_kornet.edt_div_data60","value","ds_kornet_wrs","STOPDATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item119","div_kornet.edt_div_data39","value","ds_kornet_wrs","BFHSTRTRCMGTOBJYN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item122","div_kornet.edt_div_data38","value","ds_kornet_wrs","HFHSTRTRCMGTOBJYN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item124","div_kornet.edt_div_data40","value","ds_kornet_wrs","PFANDOBJYN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edt_search_wrs","value","ds_wrs_rg_req","RQ_NA_WRS_C");
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
            obj = new BindItem("item21","div_search.rdo_store_code01","value","ds_wrs_rg_req","NA_WRS_IPO_DSC");
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
            obj = new BindItem("item42","div_search.edt_div_data08","value","ds_wrs_rg_req","VCBX_NA_WRS_C");
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
            obj = new BindItem("item50","div_search.cbo_div_list01","value","ds_wrs_rg_req","NA_WRS_PAK_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","cbo_list_wrs03","value","ds_wrs_rg_req","SMA_APL_TPC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","div_search.cbo_liq_uz_dsc","value","ds_wrs_rg_req","LIQ_UZ_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","div_search.cbo_div_list04","value","ds_wrs_rg_req","NA_WRS_UZC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item52","div_search.cbo_proenv_dsc","value","ds_wrs_rg_req","NA_WRS_PROENV_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","cbo_div_list06","value","ds_wrs_rg_req","BSC_UNT_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item57","edt_data00","value","ds_infodata","NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","rdo_store_code05","value","ds_wrs_rg_req","WRS_C_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item53","Div00.edt_div_data00","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","Div00.edt_div_data01","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","Div00.edt_div_data02","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","Div00.edt_div_data03","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item38","Div00.edt_div_data04","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","Div00.edt_div_data05","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item40","Div00.edt_div_data06","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","Div00.edt_div_data07","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item43","Div00.edt_div_data08","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item44","Div00.edt_div_data09","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item45","Div00.edt_div_data10","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item48","Div00.edt_div_data11","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item49","Div00.edt_div_data12","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item51","Div00.edt_div_data13","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item54","Div00.edt_div_data14","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item55","Div00.edt_div_data15","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item56","Div00.edt_div_data16","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item60","Div00.edt_div_data17","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item61","Div00.edt_div_data18","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item62","Div00.edt_div_data19","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item63","Div00.edt_div_data20","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item64","Div00.edt_div_data21","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item65","Div00.edt_div_data22","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item66","Div00.edt_div_data23","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item67","Div00.edt_div_data24","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item68","Div00.edt_div_data25","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item69","Div00.edt_div_data26","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item70","Div00.edt_div_data27","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item71","Div00.edt_div_data28","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item72","Div00.edt_div_data29","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item73","Div00.edt_div_data30","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item74","Div00.edt_div_data31","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item75","Div00.edt_div_data32","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item76","Div00.edt_div_data33","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item77","Div00.edt_div_data34","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item78","Div00.edt_div_data35","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item79","Div00.edt_div_data36","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item80","Div00.edt_div_data37","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item81","Div00.edt_div_data38","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item82","Div00.edt_div_data39","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item83","Div00.edt_div_data40","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item84","Div00.edt_div_data41","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item85","Div00.edt_div_data42","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item86","Div00.edt_div_data43","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item87","Div00.edt_div_data44","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item88","Div00.edt_div_data45","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item89","Div00.edt_div_data46","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item90","Div00.edt_div_data47","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item91","Div00.edt_div_data48","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item92","Div00.edt_div_data49","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item93","Div00.edt_div_data50","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item94","Div00.edt_div_data51","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item95","Div00.edt_div_data52","value","ds_kornet_wrs","GLN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item123","div_kornet.txa_contents00","value","ds_kornet_wrs","INFORMATION");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","div_search.cbo_na_wrs_sze_sex_c","value","ds_wrs_rg_req","NA_WRS_SZE_SEX_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","div_search.cbo_na_wrs_qlt_grdc","value","ds_wrs_rg_req","NA_WRS_QLT_GRDC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","div_search.cbo_na_wrs_dstr_stsc","value","ds_wrs_rg_req","NA_WRS_DSTR_STSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","div_search.edt_day","value","ds_wrs_rg_req","VLD_PRD_CN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","div_search.cbo_div_list05","value","ds_wrs_rg_req","VLD_PRD_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item149","div_search.cbo_div_list03","value","ds_wrs_rg_req","DSTR_TER_MRK_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item150","div_kornet.edt_div_data44","value","ds_kornet_wrs","CREATEDDATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item151","div_kornet.edt_div_data45","value","ds_kornet_wrs","ANCIGRADE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item152","div_kornet.edt_div_data46","value","ds_kornet_wrs","DOCID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item58","div_search.rdo_store_code05","value","ds_wrs_rg_req","GAP_ATTC_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item59","div_search.rdo_store_code06","value","ds_wrs_rg_req","LWCRBN_ATTC_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item153","div_search.edt_na_wrs_pdaa_c","value","ds_wrs_rg_req","NA_WRS_PDAA_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item154","edt_div_data01","value","ds_wrs_rg_req","PR_MRK_WHT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item155","edt_div_data02","value","ds_wrs_rg_req","PR_MRK_STD_BAS_WHT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item156","cbo_div_list00","value","ds_wrs_rg_req","PR_MRK_BAS_UNIT");
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
        this.addIncludeScript("VAN_DS_SC_1543(원본).xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1543(원본).xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";
        ////////////////////////////////////////////////////////////////////////////////////
        /* 상품등록화면 기능제한 START */
        var ALLOW_PRIMARY = false; // 1차상품 허용여부
        var ALLOW_NSTD = false; // 비표준 허용여부
        var ALLOW_MODIFY = true; // 상품수정 허용여부
        var CHECK_WRS_VALID = false; // 상품코드 검증여부(비표준일 때)
        ////////////////////////////////////////////////////////////////////////////////////

        var TRPL_C = application.gv_glnCode; // 로그인 사업장코드
        var TRPL_NM = application.gv_companyName; //로그인 사업장명
        var reg_dsc = ""; // 등록구분
        var AUTO_WRS_NM; // 1차상품명

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
        				fileObj: this.FileUpload00,					//대표이미지
        				maxSize:1,										//허용할 파일 사이즈(MB)
        				maxLength:1,									//허용할 파일갯수
        				ext:['jpg','jpeg'],								//허용할 확장자명
        				//valid_after_fail: 'FileUpload_onerror',  		//파일검사 실패후 호출할 함수이름
        				upload_after_succ: 'FileUpload_onsuccess'    	//파일 업로드 성공후 호출할 함수이름
        				//upload_after_fail: 'FileUpload_onerror'  		//파일 업로드 실패후 호출할 함수이름
        			},
        			{
        				fileObj: this.FileUpload01,					//부가이미지1
        				maxSize:1,										//허용할 파일 사이즈(MB)
        				maxLength:1,									//허용할 파일갯수
        				ext:['jpg','jpeg'],								//허용할 확장자명
        				upload_after_succ: 'FileUpload_onsuccess'
        			},
        			{
        				fileObj: this.FileUpload02,					//부가이미지2
        				maxSize:1,										//허용할 파일 사이즈(MB)
        				maxLength:1,									//허용할 파일갯수
        				ext:['jpg','jpeg'],								//허용할 확장자명
        				upload_after_succ: 'FileUpload_onsuccess'
        			},
        			{
        				fileObj: this.FileUpload03,					//부가이미지3
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
         		//{code:"WRS_ID_DSC", dsName:"ds_wrs_id_dsc", selecttype:"S"}, 	// 2.상품식별구분코드
         		{code:"VLD_PRD_DSC", dsName:"ds_vld_prd_dsc", selecttype:"S"}, 	// 3.유통기한표기방법
         		{code:"BSC_UNT_DSC", dsName:"ds_unt_dsc", selecttype:"S"},		// 4.기본단위구분코드
         		{code:"LIQ_UZ_DSC", dsName:"ds_liq_uz_dsc", selecttype:"S"},		// 5.주류용도구분코드
         		{code:"NA_WRS_PROENV_DSC", dsName:"ds_proenv_dsc", selecttype:"S"},		// 6.친환경구분코드
         		{code:"NA_WRS_QLT_GRDC", dsName:"ds_na_wrs_qlt_grdc", selecttype:"S"},		// 7.품질등급코드
         		{code:"NA_WRS_SZE_SEX_C", dsName:"ds_na_wrs_sze_sex_c", selecttype:"S"},		// 8.크기성별코드
         		{code:"NA_WRS_DSTR_STSC", dsName:"ds_na_wrs_dstr_stsc", selecttype:"S"},		// 9.유통상태
         		{code:"BAS_PR_UNT_DSC", dsName:"ds_bas_pr_unt_dsc", selecttype:"S"}		// 10.기준가격단위구분코드
            ];
        	this.gfn_setCommonCode(param);

        	var todays = this.gfn_today('yyyy-MM-dd');

        // 	this.edt_data15.set_value(TRPL_C); // 제조처 코드
        // 	this.edt_data16.set_value(TRPL_NM); // 제조처 명
        // 	this.edt_data17.set_value(TRPL_C); // 매입처 코드
        // 	this.edt_data18.set_value(TRPL_NM); // 매입처 명
        // 	this.div_search.edt_div_data27.set_value(todays); // 최초등록일시
        // 	this.div_search.edt_div_data28.set_value(application.gv_userId); // 최종사용자ID
        // 	this.div_search.edt_div_data29.set_value(application.gv_userName); // 최종사용자명
        // 	this.div_search.edt_div_data34.set_value(todays); // 최종등록일시
        // 	this.div_search.edt_div_data35.set_value(TRPL_C); // 최종사업장 코드
        // 	this.div_search.edt_div_data36.set_value(TRPL_NM); // 최종사업장 명
        	this.rdo_store_code01.set_value(1); // 공동상품여부
        	//this.rdo_store_code02.set_value(2); // 상품분류 (2차상품)
        	this.rdo_store_code03.set_value(1); // 과세구분

        	this.cbo_list_wrs03.set_value(""); // 과세구분 콤보
        // 	this.div_search.rdo_store_code00.set_value(1); // 상품유형
        // 	this.div_search.rdo_store_code01.set_value(0); // 수입여부
        // 	this.div_search.rdo_store_code02.set_value(0); // 유통기한관리여부
        // 	this.div_search.rdo_store_code03.set_value(0); // 주류상품여부
        // 	this.div_search.rdo_store_code04.set_value(0); // RFID사용여부
        // 	this.div_search.cbo_liq_uz_dsc.set_enable(false);
        	this.div_search.cbo_div_list00.set_value(""); // 단위
        	this.div_search.cbo_div_list02.set_value(""); // 보관방식
        	this.div_search.cbo_div_list04.set_value(""); // 용도
        	this.cbo_div_list06.set_value("S"); // 가격표시제 단위
        // 	this.cbo_list_wrs02.set_value(2); // 계약구분
        	this.div_search.edt_div_data13.set_value("1"); // 박스당입수
        // 	this.div_search.cbo_div_list03.set_index(0); // 유통기한표기방법
        // 	this.cbo_list_wrs05.set_index(0); // 물류센터코드
        	this.edt_fsrgmn_nm.set_value(application.gv_userName);

        	this.initcif();
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

        //저장 및 수정
        this.btn_save00_onclick = function(obj,e)
        {
        	if (!this.validation()) {
        		return;
        	}
        	
        	var type = "신규상품 등록";
        	if (reg_dsc == "2") {
        		type = "기존상품 수정";
        	}
        	var msg = type + " 요청을 하시겠습니까? \n\n\n※ 하나로마트분사의 승인처리가 완료되면 상품등록이 됩니다.";
        	
        	
        	if (application.confirm(msg)) {
        		var params = "";

        		//상품 기본
        		this.addRowFile();	//이미지 파일 데이터셋에 저장
        		this.ds_wrs_rg_req_filter.setColumn(0,"APV_RQ_NA_BZPLC",TRPL_C);
        		this.ds_wrs_rg_req_filter.setColumn(0,"FSRGMN_NA_BZPLC",TRPL_C);
        		if (reg_dsc == "1") {
        			this.ds_wrs_rg_req_filter.setColumn(0, "WRS_C_DSC", "1"); // 상품코드구분코드 = 1 (외부제조표준코드)
        		} else if (reg_dsc == "0") {
        			//this.ds_wrs_rg_req_filter.setColumn(0, "RQ_NA_WRS_C", ""); // 비표준(상품코드 없음)
        		}

        		if (this.rdo_store_code02.value == "3") {
        			this.ds_wrs_rg_req_filter.setColumn(0, "WRS_DSC", "2"); // 2차 자재품일 때 WRS_DSC의 값을 2로 셋팅(2차 자재품 관련 확인 필요)
        		}

        		params += " rdo_sep="+reg_dsc //this.rdo_search_sep.value
        				  +" chk_temp_yn=0"//+this.chk_TEMP_YN.value
        				  +" chk_del_yn=0"//+this.chk_DELETE_YN.value;
        				  +" CTCPL=" + this.edt_ctcpl_telno.value;

        		var sSvcID        = "p_save";//통신아이디
        		var sURL          = "svc::rest/pds/pricat/Product/insertNewGoodsbyKornet";// 호출할 서버 페이지 주소
        		var sInDatasets   = "in_mainds=ds_wrs_rg_req_filter:A in_upload=ds_uploadsave:A";//보내는데이터셋
        		var sOutDatasets  = "";
        		var sArgument     = params;// 파라미터
        		var sCallbackFunc = "fn_callback";//콜백
        		var tranType 	  = "U"; // U:저장/삭제, S:조회
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
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
        	if (nCD < 0) {
        		if (svcID == "searchProduct" && nCD == -2) {
        			this.alert("이미 신청 중인 상품코드입니다.");
        			this.btn_search_wrs.set_enable(true);
        			this.edt_search_wrs.set_enable(true);
        			this.edt_search_wrs.set_value("");
        			this.edt_search_wrs.setFocus();
        			return;
        		}
        		this.gfn_getMessage("alert", sMSG);
        		return;
        	} else {
        		if (svcID == "getBzpl_code") {
        			if (this.ds_Bzplc.insertRow(0) != -1) {
        				this.ds_Bzplc.setColumn(0,"NA_BZPLC","00");
        				this.ds_Bzplc.setColumn(0,"SHRT_BZPLNM","- 선택 -");
        			};
        			this.cbo_list_wrs05.set_index(0);
        		}
        		if (svcID == "van_code_search" && sMSG =="completeSearch") {
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
        		if (svcID == "p_save" && sMSG == "SUCCESS") {
        			this.gfn_getMessage('alert','result.message.save.success');
        			this.reload();
        		}
        		if (svcID == "p_initcif") {
        			this.edt_ctcpl_telno.set_value(this.ds_CIF_INFO.getColumn(0,"ATEL")
        													+"-"+this.ds_CIF_INFO.getColumn(0,"HTEL")
        													+"-"+this.ds_CIF_INFO.getColumn(0,"STEL"));
        		}
        		if (svcID == "search_lclc") {
        			if (this.ds_wrs_dsc.insertRow(0) != -1){
        				this.ds_wrs_dsc.setColumn(0,"NA_WRS_ATTR_C","");
        				this.ds_wrs_dsc.setColumn(0,"NA_WRS_ATTNM","- 선택 -");
        			};

        			if (this.ds_wrs_dsc2.insertRow(0) != -1) {
        				this.ds_wrs_dsc2.setColumn(0,"NA_WRS_ATTR_C","");
        				this.ds_wrs_dsc2.setColumn(0,"NA_WRS_ATTNM","- 선택 -");
        			};

        			if (this.ds_wrs_dsc3.insertRow(0) != -1) {
        				this.ds_wrs_dsc3.setColumn(0,"NA_WRS_ATTR_C","");
        				this.ds_wrs_dsc3.setColumn(0,"NA_WRS_ATTNM","- 선택 -");
        			};

        			if (this.ds_wrs_dsc4.insertRow(0) != -1) {
        				this.ds_wrs_dsc4.setColumn(0,"NA_WRS_ATTR_C","");
        				this.ds_wrs_dsc4.setColumn(0,"NA_WRS_ATTNM","- 선택 -");
        			};

        			if (this.ds_gd_wrs.getRowCount() == 0) {
        				this.div_search.cbo_div_list00.set_index(0);
        				this.div_search.cbo_div_list01.set_index(0);
        				this.div_search.cbo_div_list02.set_index(0);
        				this.div_search.cbo_div_list04.set_index(0);
        			}
        		}
        		if (svcID == "searchProduct") {
        			var kor = this.ds_kornet_wrs.getRowCount();
        			var nh = this.ds_gd_wrs.getRowCount();

        			if (kor == 1) {
        				if (nh == 0) {
        					// 등록 (코리안넷 정보)
        					reg_dsc = "1";
        					this.sta_result00.set_text("신청가능(등록)");
        					this.sta_result00.style.set_color("#0000ffff");
         					this.div_atch_new.set_visible(true);
         					this.div_atch_old.set_visible(false);
        					this.btn_load_kornet.set_enable(true);
        					this.btn_save00.set_enable(true);
        					this.rdo_store_code02.set_value(2); // 상품분류 (2차상품) - 기본값
        					this.rdo_store_code05.set_enable(false);
        					this.rdo_search_sep00.set_value(2); // 표준상품

        					// 공동상품여부 기본 '부'
        					this.edt_data15.set_enable(true);
        					this.btn_popup02.set_enable(true);
        					this.rdo_store_code01.set_value(0);
        					this.edt_data15.set_value(TRPL_C);
        					this.btn_popup02_onclick(true);
        					
        					// 기본값
        					this.div_search.rdo_store_code01.set_value(0); // 수입여부
        					this.div_search.rdo_store_code04.set_value(0); // RFID사용여부

        					this.selectWrsDsc();
        					this.fn_applyProductInfo(true);
        					//this.btn_popup01.click(); // 상품분류선택 팝업(필요시)
        				} else {
        					// 수정 (경통 정보, 코리안넷 상품정보 불러오기 클릭시 코리안넷 정보)
        					if (ALLOW_MODIFY) {
        						reg_dsc = "2";
        						this.sta_result00.set_text("신청가능(수정)");
        						this.sta_result00.style.set_color("#0000ffff");
        						this.div_atch_new.set_visible(false);
        						this.div_atch_old.set_visible(true);
        						this.btn_load_kornet.set_enable(true);
        						this.btn_save00.set_enable(true);
        						this.rdo_store_code02.set_value(2); // 상품분류 (2차상품) - 기본값
        						this.rdo_store_code05.set_enable(false);
        						this.rdo_search_sep00.set_value(2); // 표준상품
        						this.selectWrsDsc();
        						this.searchCLC(this.ds_gd_wrs.getColumn(0,"WRS_ID_DSC"));
        						this.ds_gd_wrs.setColumn(0, "RQ_NA_WRS_C", this.ds_gd_wrs.getColumn(0, "NA_WRS_C"));
        						this.ds_wrs_rg_req.copyRow(0, this.ds_gd_wrs, 0);
        						this.fn_setDefaultByCLC();
        						this.edt_data10.set_value(
        							this.ds_wrs_rg_req.getColumn(0,"WRS_LCLFNM")+"/"+
        							this.ds_wrs_rg_req.getColumn(0,"WRS_MCLFNM")+"/"+
        							this.ds_wrs_rg_req.getColumn(0,"WRS_SCLFNM")+"/"+
        							this.ds_wrs_rg_req.getColumn(0,"WRS_DTCFNM")
        						);
        						
        						// 유통기한 관리여부
        						if (this.div_search.rdo_store_code02.value == "1") {
        							this.div_search.cbo_div_list03.set_enable(true);
        							this.div_search.edt_day.set_enable(true);
        							this.div_search.cbo_div_list05.set_enable(true);
        						}
        					} else {
        						this.sta_result00.set_text("신청불가(등록된 상품)");
        						this.sta_result00.style.set_color("#ff0000ff");
        						this.alert("이미 등록된 상품코드 입니다.");
        						this.btn_search_wrs.set_enable(true);
        						this.edt_search_wrs.set_enable(true);
        						this.edt_search_wrs.set_value("");
        						this.edt_search_wrs.setFocus();
        						return;
        					}
        				}
        			} else {
        				if (ALLOW_NSTD) {
        					if (nh == 0) {
        						// 신청(비표준)
        						this.sta_result00.set_text("신청가능(비표준)");
        						this.sta_result00.style.set_color("#0000ffff");

        						reg_dsc = "0";
        						this.rdo_search_sep00.set_value(1); //비표준상품
        						this.btn_save00.set_enable(true);
        						this.rdo_store_code02.set_enable(true);
        						this.rdo_store_code05.set_enable(true);
        						this.cbo_div_list06.set_value("S"); // 가격표시제 단위
        						this.rdo_store_code02.set_value(2); // 상품분류 (2차상품)
        						this.selectWrsDsc();
        					} else {
        						// 신청불가
        						this.sta_result00.set_text("신청불가(등록된 상품)");
        						this.sta_result00.style.set_color("#ff0000ff");
        						this.alert("이미 등록된 상품코드 입니다.");
        						this.btn_search_wrs.set_enable(true);
        						this.edt_search_wrs.set_enable(true);
        						this.edt_search_wrs.set_value("");
        						this.edt_search_wrs.setFocus();
        						return;
        					}
        				} else {
        					this.sta_result00.set_text("신청불가(비표준)");
        					this.sta_result00.style.set_color("#ff0000ff");
        					this.btn_search_wrs.set_enable(true);
        					this.edt_search_wrs.set_enable(true);
        					this.edt_search_wrs.set_value("");
        					this.edt_search_wrs.setFocus();
        					return;
        				}
        			}
        		}
        	}
        }

        //상품코드 validation 체크
        this.isValueWrsCode = function()
        {
        	if (CHECK_WRS_VALID) {
        		var trcode = this.gfn_nullToEmpty(this.edt_search_wrs.value);
        		if (trcode.length < 8 || trcode.length > 18 ||
        			(trcode.length != 8 && trcode.length !=13 && trcode.length !=14 && trcode.length != 18)) {
        			return false;
        		}

        		var lastDigit = Number(trcode.substring(trcode.length -1));
        		var checkSum = 0;
        		if (isNaN(lastDigit)) { return false; }

        		var arr = trcode.substring(0,trcode.length-1).split("").reverse();
        		var oddTotal = 0;
        		var evenTotal = 0;

        		for (var i=0; i<arr.length; i++) {
        			if (isNaN(arr[i])) { return false; }
        			if (i % 2 == 0) { oddTotal += Number(arr[i]) * 3; }
        			else { evenTotal += Number(arr[i]); }
        		}
        		checkSum = (10 - ((evenTotal + oddTotal) % 10)) % 10;
        		return checkSum == lastDigit;
        	}
        	return true;
        }

        //validation check
        this.validation = function()
        {
        	if (this.gfn_isNull(this.edt_ctcpl_telno.value)) {
        		this.alert("신청하는 분의 연락처를 입력해주세요.");
        		this.edt_ctcpl_telno.setFocus();
        		return false;
        	}
        	if (this.rdo_search_sep00.value == "1") { // 상품코드구분 (비표준일 때)
        		if(this.gfn_nullToEmpty(this.rdo_store_code05.value) == ""){
        			this.alert("상품구분코드를 선택해주세요.");
        			return false;
        		}
        	} else if (this.rdo_search_sep00.value == "2") { // 표준일 때 상품코드 검사, 비표준은 상품코드 없음 (190211)
        		if(this.gfn_nullToEmpty(this.edt_search_wrs.value) == "" || this.gfn_nullToEmpty(this.edt_search_wrs.value).length < 6){ //상품코드
        			this.gfn_getMessage("alert", 'msg.van_ds_sc_1540.view.simple.text2');
        			return false;
        		}
        	}

        	if (this.gfn_nullToEmpty(this.edt_data03.value) == "") {	//상품명
        		this.gfn_getMessage("alert", 'msg.van_ds_sc_1540.view.simple.text3');
        		return false;
        	}
        	var str = this.gfn_nullToEmpty(this.edt_data03.value);
        	var totcnt = 0;
        	for (var b=0; b<str.length; b++) {
        		if (escape(str.charAt(b)).length > 4) {
        			totcnt += 2;
        		} else {
        			totcnt++;
        		}
        	}
        	if (totcnt > 100) {
        		this.alert("상품명은 100자 이내로 입력하세요\n 현재 입력 수["+totcnt+"]");
        		return false;
        	}

        	var str = this.gfn_nullToEmpty(this.edt_data04.value);
        	var totcnt = 0;
        	for (var b=0; b<str.length; b++) {
        		if (escape(str.charAt(b)).length > 4) {
        			totcnt += 2;
        		} else {
        			totcnt++;
        		}
        	}
        	if (totcnt > 50) {
        		this.alert("상품약어명은 50자 이내로 입력하세요\n 현재 입력 수["+totcnt+"]");
        		return false;
        	}

        	var str = this.gfn_nullToEmpty(this.txa_contents00.value);
        	var totcnt = 0;
        	for (var b=0; b<str.length; b++) {
        		if (escape(str.charAt(b)).length > 4) {
        			totcnt += 2;
        		} else {
        			totcnt++;
        		}
        	}
        	if (totcnt > 200) {
        		this.alert("상품상세 설명은 200자 이내로 입력하세요\n 현재 입력 수["+totcnt+"]");
        		return false;
        	}
        	if ((this.ds_input_data.rowcount > 0) && (this.cbo_list_wrs02.value != '1')) {
        		this.gfn_getMessage("alert",'msg.van_ds_sc_1540.view.simple.text19');
        		return false;
        	}
        	/* 확인 후 변경
        	if((this.gfn_nullToEmpty(this.edt_data17.value).length > 0) && (this.cbo_list_wrs02.value != '1')){ // 물류센터와 계약구분
        		this.gfn_getMessage("alert",'msg.van_ds_sc_1540.view.simple.text20');
        		return false;
        	}
        	if((this.cbo_list_wrs01.value == "2") && (this.gfn_nullToEmpty(this.edt_data19.value) == "")){ //박스
        		this.gfn_getMessage("alert", 'msg.van_ds_sc_1540.view.simple.text17');
        		return false;
        	}
        	*/
        	if (this.gfn_nullToEmpty(this.edt_data06.value) == "") {	//대분류코드
        		this.gfn_getMessage("alert", 'msg.van_ds_sc_1540.view.simple.text13');
        		return false;
        	}
        	if (this.gfn_nullToEmpty(this.edt_data07.value) == "") {	//중분류코드
        		this.gfn_getMessage("alert", 'msg.van_ds_sc_1540.view.simple.text14');
        		return false;
        	}
        	if (this.gfn_nullToEmpty(this.edt_data08.value) == "") {	//소분류코드
        		this.gfn_getMessage("alert", 'msg.van_ds_sc_1540.view.simple.text15');
        		return false;
        	}
        	if (this.gfn_nullToEmpty(this.edt_data09.value) == "") {	//세분류코드
        		this.gfn_getMessage("alert", 'msg.van_ds_sc_1540.view.simple.text16');
        		return false;
        	}
        	if (this.gfn_nullToEmpty(this.edt_data12.value) == "") {	//규격
        		this.gfn_getMessage("alert", 'msg.van_ds_sc_1540.view.simple.text4');
        		return false;
        	}
        	if (this.cbo_div_list06.value != "S") {	//기본단위 구분코드
        		this.gfn_getMessage("alert",'msg.van_ds_sc_1540.view.simple.text18');
        		return false;
        	}
        // 	if (this.gfn_nullToEmpty(this.div_search.edt_div_data04.value) == "") {
        // 		this.gfn_getMessage("alert", 'msg.van_ds_sc_1540.view.simple.text11');
        // 		return false;
        // 	}
        // 	if (this.div_search.cbo_div_list00.value == "") {
        // 		this.gfn_getMessage("alert", 'msg.van_ds_sc_1540.view.simple.text12');
        // 		return false;
        // 	}

        	/* 추가사항 검증 */
        	if (this.rdo_store_code03.value == "3") { // 영세적용유형(과세구분 '영세'일때)
        		if (this.gfn_nullToEmpty(this.cbo_list_wrs03.value) == "") {
        			this.alert("영세적용유형을 선택해주세요.");
        			return false;
        		}
        	}
        	if (this.rdo_store_code01.value == "0") { // 제조처(공동상품여부 '부'일때)
        		if (this.gfn_nullToEmpty(this.edt_data15.value) == "") {
        			this.alert("제조처를 입력해주세요.");
        			return false;
        		}
        	}

        	/* 1,2차 공통	*/
        	
        	// 수입여부
        	if (this.gfn_nullToEmpty(this.div_search.rdo_store_code01.value) == "") {
        		this.alert("수입여부를 선택해주세요.");
        		return false;
        	}
        	
        	// 용도
        	if (this.gfn_nullToEmpty(this.div_search.cbo_div_list04.value) == "") {
        		this.alert("용도를 선택해주세요.");
        		return false;
        	}
        	
        	// 보관방식
        	if (this.gfn_nullToEmpty(this.div_search.cbo_div_list02.value) == "") {
        		this.alert("보관방식을 선택해주세요.");
        		return false;
        	}

        	// 유통기한관리여부, 유통기한표기방법
        	if (this.gfn_nullToEmpty(this.div_search.rdo_store_code02.value) == "1") {
        		if (this.gfn_nullToEmpty(this.div_search.cbo_div_list03.value) == "") {
        			this.alert("유통기한표기방법을 선택해주세요.");
        			return false;
        		}
        	}

        	// 유효기간단위, 유효기간(입력시 둘 다)
        	if (this.gfn_nullToEmpty(this.div_search.edt_day.value) == "" && this.gfn_nullToEmpty(this.div_search.cbo_div_list05.value) == "") {
        	} else {
        		if (this.gfn_nullToEmpty(this.div_search.edt_day.value) == "") {
        			this.alert("유효기간을 입력해주세요.");
        			return false;
        		} else if (this.gfn_nullToEmpty(this.div_search.cbo_div_list05.value) == "") {
        			this.alert("유효기간단위를 입력해주세요.");
        			return false;
        		}
        	}

        	// 박스당입수( 1+ )
        	if (this.gfn_getNum(this.div_search.edt_div_data13.value) < 1) {
        		this.alert("박스당입수는 1이상 입력해주세요.");
        		return false;
        	}

        	// 가격표시제 단위
        	if (this.gfn_getNum(this.edt_div_data01.value) < 1) {
        		this.alert("[가격표시제 단위] 내용량을 입력해주세요.");
        		return false;
        	}
        	if (this.gfn_getNum(this.edt_div_data02.value) < 1) {
        		this.alert("[가격표시제 단위] 기준량을 입력해주세요.");
        		return false;
        	}
        	if (this.gfn_nullToEmpty(this.cbo_div_list00.value) == "") {
        		this.alert("[가격표시제 단위] 표시단위를 선택해주세요.");
        		return false;
        	}

        	if (this.rdo_store_code02.value == "1") {
        		/* 1차상품 양식 검증 */

        		// 수량형 금액형 일 때
        		if (this.rdo_store_code05.value == "3") {
        			if(this.gfn_nullToEmpty(this.div_search.edt_div_data04.value) == ""){ // 단량
        				this.alert("단량을 입력해주세요.");
        				return false;
        			}
        			if(this.gfn_nullToEmpty(this.div_search.cbo_div_list00.value) == ""){ // 단위
        				this.alert("단위를 선택해주세요.");
        				return false;
        			}
        			if(this.gfn_nullToEmpty(this.div_search.cbo_div_list01.value) == ""){ // 포장
        				this.alert("포장을 선택해주세요.");
        				return false;
        			}
        		}

        		// 상품등록, 과일(002), 채소류(003), 수산류(041) 일 때
        		if (reg_dsc != "2" && (this.edt_data06.value == "002" || this.edt_data06.value == "003" || this.edt_data06.value == "041")) {
        			if(this.gfn_nullToEmpty(this.div_search.cbo_div_list01.value) == ""){ // 포장
        				this.alert("포장을 선택해주세요.");
        				return false;
        			}
        		}

        		// 유통상태(041 수산류 일 때)
        		if (this.edt_data06.value == "041") {
        			if(this.gfn_nullToEmpty(this.div_search.cbo_na_wrs_dstr_stsc.value) == ""){ // 유통상태
        				this.alert("유통상태를 선택해주세요.");
        				return false;
        			}
        		}
        	} else {
        		/* 2차상품 양식 검증 */
        		if (this.gfn_nullToEmpty(this.div_search.edt_div_data04.value) == "") { // 단량
        			this.alert("단량을 입력해주세요.");
        			return false;
        		}
        		if (this.gfn_nullToEmpty(this.div_search.cbo_div_list00.value) == "") { // 단위
        			this.alert("단위를 선택해주세요.");
        			return false;
        		}
        		if (this.gfn_nullToEmpty(this.div_search.cbo_div_list01.value) == "") { // 포장
        			this.alert("포장을 선택해주세요.");
        			return false;
        		}

        		if (this.edt_data06.value == "120") { // 대구분-가공식품 일 때
        			if (this.gfn_nullToEmpty(this.div_search.cbo_div_list02.value) == "") { // 보관방식
        				this.alert("보관방식을 선택해주세요.");
        				return false;
        			} else if (this.div_search.cbo_div_list02.value == "000") {
        				this.alert("가공식품은 보관방식을 '없음'으로 선택할 수 없습니다.");
        				return false;
        			}
        			if (this.edt_data07.value == "018") { // 중구분-주류 일 때
        				if (this.gfn_nullToEmpty(this.div_search.rdo_store_code03.value) == "") { // 주류상품여부
        					this.alert("주류상품여부를 선택해주세요.");
        					return false;
        				}
        				if (this.gfn_nullToEmpty(this.div_search.edt_div_data01.value) == "") { // 공병코드
        					this.alert("공병코드를 입력해주세요.");
        					return false;
        				}
        			}
        		}

        		if (this.gfn_nullToEmpty(this.div_search.edt_div_data03.value) != "" && this.gfn_nullToEmpty(this.div_search.edt_div_data03.value) != "0") { // 공병수량이 있는 경우
        			if (this.gfn_nullToEmpty(this.div_search.edt_div_data01.value) == "") { // 공병코드
        				this.alert("공병코드를 입력해주세요.");
        				return false;
        			}
        		}

        		if (this.gfn_nullToEmpty(this.div_search.edt_div_data01.value) != "") { // 공병코드가 있는 경우
        			if (this.gfn_getNum(this.div_search.edt_div_data03.value) < 1) { // 공병수량
        				this.alert("공병수량을 입력해주세요.");
        				return false;
        			}
        		}
        	}

        	// 상품이미지
        	if (this.gfn_nullToEmpty(this.sta_file_data0.text) == "") {
        		this.alert("대표 이미지 필수 등록 바랍니다.");
        		return false;
        	}

        	// 수정시에만 업데이트 체크함
        	if (!this.fn_checkUpdateRow()) {
        		this.alert("변경된 정보가 없습니다.");
        		return false;
        	}
        	return true;
        }

        // 데이터셋 검사(0:신청(비표준), 1:신청(표준), 2:수정)
        this.fn_checkUpdateRow = function()
        {
        	var BASIC_COL = [ "RQ_NA_WRS_C", "WRS_C_DSC", "WRS_DSC", "NA_WRS_LCLC", "NA_WRS_MCLC", "NA_WRS_SCLC", "NA_WRS_DTCF_C" ];
        	var cnt = 0;
        	var bChanged = false;
        	this.ds_wrs_rg_req_filter.clearData();
        	this.ds_wrs_rg_req_filter.addRow();
        	if (reg_dsc == "2") {
        		for (var i=0; i<this.ds_gd_wrs.colcount; i++) {
        			var col = this.ds_gd_wrs.getColumnInfo(i);
        			var before = this.ds_gd_wrs.getColumn(0, i);
        			var after = this.ds_wrs_rg_req.getColumn(0, col.name);
        			
        			if (BASIC_COL.indexOf(col.name) != -1) {
        				this.ds_wrs_rg_req_filter.setColumn(0, col.name, after);
        			} else if (before != after) {
        				bChanged = true;
        				this.ds_wrs_rg_req_filter.setColumn(0, col.name, after);
        				//trace(col.name + " : " + before + " => " + after);
        				cnt++;
        			}
        		}
        		
        		//trace("데이터 셋 변화 : " + bChanged);
        		/*
        		for (var i=0; i<this.ds_wrs_rg_req_filter.colcount; i++) {
        			var col = this.ds_wrs_rg_req_filter.getColumnInfo(i);
        			var before = this.ds_wrs_rg_req_filter.getColumn(0, col.name);
        			trace(col.name + " : " + before);
        		}
        		*/
        	} else {
        		this.ds_wrs_rg_req_filter.copyRow(0, this.ds_wrs_rg_req, 0);
        		bChanged = true;
        	}
        	//trace("변경된 컬럼 : "+cnt);
        	return bChanged;
        }

        this.div_edit_cbo_div_list03_onitemchanged = function(obj,e)
        {
        	/*
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
        	*/
        }

        this.btn_clear02_onclick = function(obj,e)
        {
        	this.reload();
        }

        
        //파일업로드
        this.div_search_FileUpload00_onitemchanged = function(obj,e)
        {
        	this.gfn_callUpload(obj);
        }

        this.FileUpload_onsuccess = function(obj,e)
        {
        	this.ds_uploadresult.clear();
        	this.ds_uploadresult.copyData(e.datasets[0]);
        	this.ds_uploadresult.addColumn("CHK", "string"); //멀티건 인경우 'CHK'컬럼추가
        	var thumbext = this.ds_uploadresult.getColumn(0,"ORGFNAME"); // 파일을 추가한 input 박스의 값

        	if (obj.name == "FileUpload00") {
        		var name = this.addFileNumber("1", this.ds_uploadresult.getColumn(0,"ORGFNAME"));
        		var pval = this.sta_file_data0;
        		pval.set_text("");
        		pval.set_text("1"
        					 +"&"+name
        					 +"&"+this.ds_uploadresult.getColumn(0,"FILESIZE")
        					 +"&"+this.ds_uploadresult.getColumn(0,"SYSTEMFILENAME"));
        	} else if (obj.name == "FileUpload01") {
        		var name = this.addFileNumber("2", this.ds_uploadresult.getColumn(0,"ORGFNAME"));
        		var pval = this.sta_file_data1;
        		pval.set_text("");
        		pval.set_text("2"
        					 +"&"+name
        					 +"&"+this.ds_uploadresult.getColumn(0,"FILESIZE")
        					 +"&"+this.ds_uploadresult.getColumn(0,"SYSTEMFILENAME"));
        	} else if (obj.name == "FileUpload02") {
        		var name = this.addFileNumber("3", this.ds_uploadresult.getColumn(0,"ORGFNAME"));
        		var pval = this.sta_file_data2;
        		pval.set_text("");
        		pval.set_text("3"
        					 +"&"+name
        					 +"&"+this.ds_uploadresult.getColumn(0,"FILESIZE")
        					 +"&"+this.ds_uploadresult.getColumn(0,"SYSTEMFILENAME"));
        	} else if (obj.name == "FileUpload03") {
        		var name = this.addFileNumber("4", this.ds_uploadresult.getColumn(0,"ORGFNAME"));
        		var pval = this.sta_file_data3;
        		pval.set_text("");
        		pval.set_text("4"
        					 +"&"+name
        					 +"&"+this.ds_uploadresult.getColumn(0,"FILESIZE")
        					 +"&"+this.ds_uploadresult.getColumn(0,"SYSTEMFILENAME"));
        	} else if (obj.name == "FileUpload04") {
        		var name = this.addFileNumber("5", this.ds_uploadresult.getColumn(0,"ORGFNAME")); // 수정
        		var pval = this.div_atch_old.sta_file_data4;
        		pval.set_text("");
        		pval.set_text("5"
        					 +"&"+name
        					 +"&"+this.ds_uploadresult.getColumn(0,"FILESIZE")
        					 +"&"+this.ds_uploadresult.getColumn(0,"SYSTEMFILENAME"));
        	} else if (obj.name == "FileUpload05") {
        		var name = this.addFileNumber("6", this.ds_uploadresult.getColumn(0,"ORGFNAME")); // 수정
        		var pval = this.div_atch_old.sta_file_data5;
        		pval.set_text("");
        		pval.set_text("6"
        					 +"&"+name
        					 +"&"+this.ds_uploadresult.getColumn(0,"FILESIZE")
        					 +"&"+this.ds_uploadresult.getColumn(0,"SYSTEMFILENAME"));
        	} else if (obj.name == "FileUpload06") {
        		var name = this.addFileNumber("7", this.ds_uploadresult.getColumn(0,"ORGFNAME")); // 수정
        		var pval = this.div_atch_old.sta_file_data6;
        		pval.set_text("");
        		pval.set_text("7"
        					 +"&"+name
        					 +"&"+this.ds_uploadresult.getColumn(0,"FILESIZE")
        					 +"&"+this.ds_uploadresult.getColumn(0,"SYSTEMFILENAME"));
        	} else if (obj.name == "FileUpload07") {
        		var name = this.addFileNumber("5", this.ds_uploadresult.getColumn(0,"ORGFNAME")); // 신규
        		var pval = this.div_atch_new.sta_file_data7;
        		pval.set_text("");
        		pval.set_text("8"
        					 +"&"+name
        					 +"&"+this.ds_uploadresult.getColumn(0,"FILESIZE")
        					 +"&"+this.ds_uploadresult.getColumn(0,"SYSTEMFILENAME"));
        	} else if (obj.name == "FileUpload08") {
        		var name = this.addFileNumber("6", this.ds_uploadresult.getColumn(0,"ORGFNAME")); // 신규
        		var pval = this.div_atch_new.sta_file_data8;
        		pval.set_text("");
        		pval.set_text("9"
        					 +"&"+name
        					 +"&"+this.ds_uploadresult.getColumn(0,"FILESIZE")
        					 +"&"+this.ds_uploadresult.getColumn(0,"SYSTEMFILENAME"));
        	} else if (obj.name == "FileUpload09") {
        		var name = this.addFileNumber("7", this.ds_uploadresult.getColumn(0,"ORGFNAME")); // 신규
        		var pval = this.div_atch_new.sta_file_data9;
        		pval.set_text("");
        		pval.set_text("10"
        					 +"&"+name
        					 +"&"+this.ds_uploadresult.getColumn(0,"FILESIZE")
        					 +"&"+this.ds_uploadresult.getColumn(0,"SYSTEMFILENAME"));
        	} else if (obj.name == "FileUpload10") {
        		var name = this.addFileNumber("8", this.ds_uploadresult.getColumn(0,"ORGFNAME")); // 신규
        		var pval = this.div_atch_new.sta_file_data10;
        		pval.set_text("");
        		pval.set_text("11"
        					 +"&"+name
        					 +"&"+this.ds_uploadresult.getColumn(0,"FILESIZE")
        					 +"&"+this.ds_uploadresult.getColumn(0,"SYSTEMFILENAME"));
        	} else if (obj.name == "FileUpload11") {
        		var name = this.addFileNumber("9", this.ds_uploadresult.getColumn(0,"ORGFNAME"));
        		var pval = this.div_atch_new.sta_file_data11;
        		pval.set_text("");
        		pval.set_text("12"
        					 +"&"+name
        					 +"&"+this.ds_uploadresult.getColumn(0,"FILESIZE")
        					 +"&"+this.ds_uploadresult.getColumn(0,"SYSTEMFILENAME"));
        	}
        }

        this.FileUpload_onerror = function(obj,e)
        {
        	trace("파일 업로드에 실패하였습니다.");
        // 	trace("FileUpload_onerror");
        // 	trace("e.errorcode: "+e.errorcode);
        // 	trace("e.errormsg: "+e.errormsg);
        }

        this.addFileNumber = function(seq,fileValue)
        {
        	if (seq == undefined) {
        		return fileValue;
        	} else if (this.gfn_isNull(fileValue)) {
        		return "";
        	}
        	var fileExt = fileValue.substr(fileValue.lastIndexOf(".") + 1).toLowerCase();
        	var fileName = fileValue.substr(0, fileValue.lastIndexOf("."));
        	//trace(fileExt);
        	//trace(fileName);
        	
        	return fileName + "_" + seq + "." + fileExt;
        }

        //이미지삭제
        this.btn_atch_del_onclick = function(obj,e)
        {
        	if (obj.name == "btn_atch_del00") {
        		this.fn_atch_delete(this.FileUpload00, this.sta_file_data0);
        	} else if (obj.name == "btn_atch_del01") {
        		this.fn_atch_delete(this.FileUpload01, this.sta_file_data1);
        	} else if (obj.name == "btn_atch_del02") {
        		this.fn_atch_delete(this.FileUpload02, this.sta_file_data2);
        	} else if (obj.name == "btn_atch_del03") {
        		this.fn_atch_delete(this.FileUpload03, this.sta_file_data3);
        	} else if (obj.name == "btn_atch_del04") {
        		this.fn_atch_delete(this.div_atch_old.FileUpload04, this.div_atch_old.sta_file_data4);
        	} else if (obj.name == "btn_atch_del05") {
        		this.fn_atch_delete(this.div_atch_old.FileUpload05, this.div_atch_old.sta_file_data5);
        	} else if (obj.name == "btn_atch_del06") {
        		this.fn_atch_delete(this.div_atch_old.FileUpload06, this.div_atch_old.sta_file_data6);
        	} else if (obj.name == "btn_atch_del07") {
        		this.fn_atch_delete(this.div_atch_new.FileUpload07, this.div_atch_new.sta_file_data7);
        	} else if (obj.name == "btn_atch_del08") {
        		this.fn_atch_delete(this.div_atch_new.FileUpload08, this.div_atch_new.sta_file_data8);
        	} else if (obj.name == "btn_atch_del09") {
        		this.fn_atch_delete(this.div_atch_new.FileUpload09, this.div_atch_new.sta_file_data9);
        	} else if (obj.name == "btn_atch_del10") {
        		this.fn_atch_delete(this.div_atch_new.FileUpload10, this.div_atch_new.sta_file_data10);
        	} else if (obj.name == "btn_atch_del11") {
        		this.fn_atch_delete(this.div_atch_new.FileUpload11, this.div_atch_new.sta_file_data11);
        	}
        }

        //업로드 항목 제거
        this.fn_atch_delete = function(upload,sta)
        {
        	sta.set_text("");
        	upload.deleteItem(0);
        	upload.appendItem();
        }

        //선택한 이미지 파일을 저장하기 위해 데이터셋에 담는다.
        this.addRowFile = function(seq,name,size,sysname)
        {
        	var imginfo0 = this.gfn_nullToEmpty(this.sta_file_data0);
        	var imginfo1 = this.gfn_nullToEmpty(this.sta_file_data1);
        	var imginfo2 = this.gfn_nullToEmpty(this.sta_file_data2);
        	var imginfo3 = this.gfn_nullToEmpty(this.sta_file_data3);
        	var imginfo4 = this.gfn_nullToEmpty(this.div_atch_old.sta_file_data4);
        	var imginfo5 = this.gfn_nullToEmpty(this.div_atch_old.sta_file_data5);
        	var imginfo6 = this.gfn_nullToEmpty(this.div_atch_old.sta_file_data6);
        	var imginfo7 = this.gfn_nullToEmpty(this.div_atch_new.sta_file_data7);
        	var imginfo8 = this.gfn_nullToEmpty(this.div_atch_new.sta_file_data8);
        	var imginfo9 = this.gfn_nullToEmpty(this.div_atch_new.sta_file_data9);
        	var imginfo10 = this.gfn_nullToEmpty(this.div_atch_new.sta_file_data10);
        	var imginfo11 = this.gfn_nullToEmpty(this.div_atch_new.sta_file_data11);

        	if (imginfo0.text !="") { this.addRowFileDs(imginfo0.text); }
        	if (imginfo1.text !="") { this.addRowFileDs(imginfo1.text); }
        	if (imginfo2.text !="") { this.addRowFileDs(imginfo2.text); }
        	if (imginfo3.text !="") { this.addRowFileDs(imginfo3.text); }
        	if (imginfo4.text !="") { this.addRowFileDs(imginfo4.text); }
        	if (imginfo5.text !="") { this.addRowFileDs(imginfo5.text); }
        	if (imginfo6.text !="") { this.addRowFileDs(imginfo6.text); }
        	if (imginfo7.text !="") { this.addRowFileDs(imginfo7.text); }
        	if (imginfo8.text !="") { this.addRowFileDs(imginfo8.text); }
        	if (imginfo9.text !="") { this.addRowFileDs(imginfo9.text); }
        	if (imginfo10.text !="") { this.addRowFileDs(imginfo10.text); }
        	if (imginfo11.text !="") { this.addRowFileDs(imginfo11.text); }
        }

        this.addRowFileDs = function(str)
        {
        	this.ds_uploadsave.addRow();
        	var text = str.split("&");
        	this.ds_uploadsave.setColumn(this.ds_uploadsave.rowcount-1,"FILE_SEQ",text[0]);
        	this.ds_uploadsave.setColumn(this.ds_uploadsave.rowcount-1,"FILE_NAME",text[1]);
        	this.ds_uploadsave.setColumn(this.ds_uploadsave.rowcount-1,"FILE_SIZE",text[2]);
        	this.ds_uploadsave.setColumn(this.ds_uploadsave.rowcount-1,"FILE_SYSTEM_NAME",text[3]);
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
        	if (typeof params == "boolean") {
        		if (!this.searPopValue(param)) { return; }
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
        	if (typeof params == "boolean") {
        		if (!this.searPopValue(param)) { return; }
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
        	if (typeof params == "boolean") {
        		if (!this.searPopValue(param)) { return; }
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
        	if (typeof params == "boolean") {
        		if (!this.searPopValue(param)) { return; }
        	}
        	var oArg = {paramMode:"U", dsArg:this.Dataset00, autoPop:param};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("src_vcbtbx02","POPUP::POPUP_SRC_VCBTBX.xfdl",oArg,sOption,sPopupCallBack);
        }

        //산지 조회
        this.div_search_btn_na_wrs_pdaa_c_onclick = function(params)
        {
        	var code = this.div_search.edt_na_wrs_pdaa_c.value;
        	var param = {
        				autoType:params,
        				searchCode:code
        	};
        	if (typeof params == "boolean") {
        		if (!this.searPopValue(param)) { return; }
        	}
        	var oArg = {paramMode:"U", autoPop:param};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("src_pdaa","POPUP::POPUP_SRC_PDAA.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	if (strVal != undefined) {
        		var arrVal = strVal.split(",");
        		if (strId == "van_wrs") {
        			var van_code = arrVal[0];
        			this.van_search(van_code);
        		}
        		if (strId == "trpl_search") {
        			this.edt_data15.set_value(arrVal[0]);
        			this.edt_data16.set_value(arrVal[1]);
        		}
        		if (strId == "wrs_lclc") {
        			this.edt_data06.set_value(arrVal[0]); // 대분류
        			this.edt_data07.set_value(arrVal[1]); // 중분류
        			this.edt_data08.set_value(arrVal[2]); // 소분류
        			this.edt_data09.set_value(arrVal[3]); // 세분류
        			this.edt_data10.set_value(arrVal[4]+"/"+arrVal[5]+"/"+arrVal[6]+"/"+arrVal[7]); // 대+중+소+세 분류명
        			//this.cbo_list_wrs00.set_value(arrVal[8]);
        			this.searchCLC(arrVal[8]);

        			AUTO_WRS_NM = arrVal[6]+"("+arrVal[7] + ")";

        			this.fn_setDefaultByCLC();
        		}
        		if (strId == "src_buyer") {
        			this.div_search.edt_div_data25.set_value(arrVal[0]);
        			this.div_search.edt_div_data26.set_value(arrVal[1]);
        		}
        		if (strId == "src_wrs") {
        			this.edt_data20.set_value(arrVal[0]);
        			this.edt_data21.set_value(arrVal[1]);
        			this.search();
        		}
        		if (strId == "src_vcbtbx01") {
        			this.div_search.edt_div_data01.set_value(arrVal[0]);
        			this.div_search.edt_div_data02.set_value(arrVal[1]);
        		}
        		if (strId == "src_vcbtbx02") {
        			this.div_search.edt_div_data08.set_value(arrVal[0]);
        			this.div_search.edt_div_data09.set_value(arrVal[1]);
        		}
        		if (strId == "src_pdaa") {
        			this.div_search.edt_na_wrs_pdaa_c.set_value(arrVal[0]);
        			this.div_search.edt_na_wrs_pdaa_nm.set_value(arrVal[1]);
        		}
        	}
        }

        this.fn_setDefaultByCLC = function()
        {
        	// 상품유형
        	if (this.edt_data06.value == "199" && this.edt_data07.value == "020" && this.edt_data08.value == "010") {
        		if (this.edt_data09.value == "010") {
        			this.div_search.rdo_store_code00.set_value("2"); // 공병
        		} else if (this.edt_data09.value == "020") {
        			this.div_search.rdo_store_code00.set_value("3"); // 공상자
        		} else if (this.edt_data09.value == "030") {
        			this.div_search.rdo_store_code00.set_value("4"); // 공파레트
        		} else {
        			this.div_search.rdo_store_code00.set_value("1"); // 일반상품
        		}
        	} else {
        		this.div_search.rdo_store_code00.set_value("1"); // 일반상품
        	}

        	// 주류(018) 일 때 주류여부 '여' 고정
        	if (this.edt_data06.value == "120" && this.edt_data07.value == "018") {
        		if (this.edt_data08.value == "010" // 소주
        		 || this.edt_data08.value == "011" // 맥주
        		 || (this.edt_data08.value == "012" && (this.edt_data09.value == "010" || this.edt_data09.value == "011" || this.edt_data09.value == "012")) // 양주(국산,수입,브랜디/꼬냑)
        		) {
        			this.div_search.cbo_liq_uz_dsc.set_value("01"); // 할인매장용
        		} else {
        			this.div_search.cbo_liq_uz_dsc.set_value("02"); // 가정용
        		}
        		this.div_search.rdo_store_code03.set_value(1);
        		this.div_search.rdo_store_code03.set_enable(false);
        		this.div_search.cbo_liq_uz_dsc.set_enable(true);
        	} else {
        		this.div_search.rdo_store_code03.set_value(0);
        		this.div_search.rdo_store_code03.set_enable(true);
        		this.div_search.cbo_liq_uz_dsc.set_enable(false);
        		this.div_search.cbo_liq_uz_dsc.set_value("00"); // 해당없음
        	}
        	
        	// 친환경인증 구분 필터
        	var envFilter = "SIMP_C == '000'"; // 없음(일반) 기본
        	if (this.edt_data06.value == "001" || this.edt_data06.value == "004") {
        		envFilter += " || SIMP_C == '001'";
        		envFilter += " || SIMP_C == '002'";
        		envFilter += " || SIMP_C == '003'";
        		envFilter += " || SIMP_C == '004'";
        	} else if (this.edt_data06.value == "002" || this.edt_data06.value == "003") {
        		envFilter += " || SIMP_C == '001'";
        		envFilter += " || SIMP_C == '002'";
        		envFilter += " || SIMP_C == '003'";
        		envFilter += " || SIMP_C == '004'";
        		envFilter += " || SIMP_C == '013'";
        		envFilter += " || SIMP_C == '014'";
        // 	} else if (this.edt_data06.value == "011") {
        	} else if (this.edt_data06.value == "021" || this.edt_data06.value == "022" || this.edt_data06.value == "023" || this.edt_data06.value == "024" || this.edt_data06.value == "025" || this.edt_data06.value == "027") {
        		envFilter += " || SIMP_C == '005'";
        		envFilter += " || SIMP_C == '006'";
        // 	} else if (this.edt_data06.value == "026") {
        	} else if (this.edt_data06.value == "041") {
        		envFilter += " || SIMP_C == '012'";
        // 	} else if (this.edt_data06.value == "101") {
        	} else if (this.edt_data06.value == "120") {
        		envFilter += " || SIMP_C == '001'";
        		envFilter += " || SIMP_C == '007'";
        		envFilter += " || SIMP_C == '011'";
        // 	} else if (this.edt_data06.value == "130") {
        // 	} else if (this.edt_data06.value == "140") {
        // 	} else if (this.edt_data06.value == "150") {
        // 	} else if (this.edt_data06.value == "160") {
        	} else if (this.edt_data06.value == "199") {
        		envFilter += " || SIMP_C == '001'";
        		envFilter += " || SIMP_C == '002'";
        		envFilter += " || SIMP_C == '003'";
        		envFilter += " || SIMP_C == '004'";
        		envFilter += " || SIMP_C == '005'";
        		envFilter += " || SIMP_C == '006'";
        	}

        	this.ds_proenv_dsc.filter(envFilter);
        }

        //영세 일 경우 콤보박스 풀림.
        this.rdo_store_code03_onitemchanged = function(obj,e)
        {
        	this.fn_selectTaxDsc(obj.value);
        }

        /* 과세구분선택 */
        this.fn_selectTaxDsc = function(type)
        {
        	if (type != "3") {
        		this.cbo_list_wrs03.set_enable(false);
        		this.cbo_list_wrs03.set_value("");
        	} else if (type == "3") {
        		this.cbo_list_wrs03.set_enable(true);
        	}
        }

        /* 유통기한관리여부 */
        this.div_search_rdo_store_code02_onitemchanged = function(obj,e)
        {
        	if (obj.value == "1") {
        		this.div_search.cbo_div_list03.set_enable(true);
        		this.div_search.edt_day.set_enable(true);
        		this.div_search.cbo_div_list05.set_enable(true);
        	} else {
        		this.div_search.cbo_div_list03.set_enable(false);
        		this.div_search.edt_day.set_enable(false);
        		this.div_search.cbo_div_list05.set_enable(false);

        		this.div_search.cbo_div_list03.set_value("");
        		this.div_search.edt_day.set_value("");
        		this.div_search.cbo_div_list05.set_value("");
        	}
        }

        //제조처 자동 검색
        this.edt_data15_onkeydown = function(obj,e)
        {
        	if (e.keycode ==13) {
        		this.btn_popup02_onclick(true);
        	}
        }

        this.edt_data16_onkeydown = function(obj,e)
        {
        	if (e.keycode ==13) {
        		this.btn_popup02_onclick(true);
        	}
        }
        //
        this.div_search_edt_div_data01_onkeydown = function(obj,e)
        {
        	if (e.keycode ==13) {
        		this.div_search_btn_popup00_onclick(true);
        	}
        }

        this.div_search_edt_div_data02_onkeydown = function(obj,e)
        {
        	if (e.keycode ==13) {
        		this.div_search_btn_popup00_onclick(true);
        	}
        }
        //
        this.div_search_edt_div_data08_onkeydown = function(obj,e)
        {
        	if (e.keycode ==13) {
        		this.div_search_btn_popup01_onclick(true);
        	}
        }

        this.div_search_edt_div_data09_onkeydown = function(obj,e)
        {
        	if (e.keycode ==13) {
        		this.div_search_btn_popup01_onclick(true);
        	}
        }

        this.div_search_edt_div_data25_onkeydown = function(obj,e)
        {
        	if (e.keycode ==13) {
        		this.div_search_btn_popup02_onclick(true);
        	}
        }

        this.div_search_edt_div_data26_onkeydown = function(obj,e)
        {
        	if (e.keycode ==13) {
        		this.div_search_btn_popup02_onclick(true);
        	}
        }

        // 상품조회
        this.btn_search_wrs_onclick = function(obj,e)
        {
        	if (this.gfn_isNull(this.edt_search_wrs.value)) {
        		this.alert("상품코드를 입력해주세요.");
        		this.edt_search_wrs.setFocus();
        		return;
        	}

        	if (!this.isValueWrsCode()) {
        		this.alert('상품코드가 형식에 맞지 않습니다. \n\n 다시 입력해주세요.');
        		return;
        	}

        	this.edt_search_wrs.set_enable(false);
        	obj.set_enable(false);

        	var params = "gln="+TRPL_C
        				+" na_wrs_c=" + this.edt_search_wrs.value;
        	var sSvcID        = "searchProduct";//통신아이디
        	var sURL          = "svc::rest/pds/pricat/Product/retrieveProductInfForReg";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_kornet_wrs=ds_kornet_wrs ds_gd_wrs=ds_gd_wrs";
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType 	  = "S"; // U:저장/삭제, S:조회
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        this.fn_applyProductInfo = function(isKornet) {
        	if (isKornet) {
        		if (this.ds_kornet_wrs.getRowCount() == 0) {
        			this.alert("코리안넷 상품정보가 없습니다.");
        			return;
        		}

        		this.ds_wrs_rg_req.setColumn(0, "WRSNM", this.ds_kornet_wrs.getColumn(0, "PRNM")); // 상품명
        		this.ds_wrs_rg_req.setColumn(0, "WRS_ABR_NM", this.ds_kornet_wrs.getColumn(0, "PRNM")); // 상품약어명
        		this.ds_wrs_rg_req.setColumn(0, "WRS_ENM", this.ds_kornet_wrs.getColumn(0, "PRNMENG")); // 상품영문명
        		this.ds_wrs_rg_req.setColumn(0, "WRS_STDNM", this.ds_kornet_wrs.getColumn(0, "PRNMENG")); // 규격

        		//this.edt_data15.set_value(this.ds_kornet_wrs.getColumn(0, "GLN")); // 제조처
        		//this.edt_data16.set_value(this.ds_kornet_wrs.getColumn(0, "MANUFACT")); // 제조처명

        		this.txa_contents00.set_value(this.ds_kornet_wrs.getColumn(0, "INFORMATION")); // 상품설명

        		var taxType;
        		switch (this.ds_kornet_wrs.getColumn(0, "TAXTYPE")) {
        			case "과세" : taxType = "1"; break;
        			case "면세" : taxType = "2"; break;
        			case "영세" : taxType = "3"; break;
        			default : taxType = "1"; break;
        		}

        		this.rdo_store_code03.set_value(taxType); // 과세구분코드
        		this.fn_selectTaxDsc(taxType); // 과세구분에 따른 영세구분 활성/비활성

        		this.edt_div_data01.set_value(this.ds_kornet_wrs.getColumn(0, "VOLUME")); // 내용량(용량값)
        		this.edt_data12.set_value(this.ds_kornet_wrs.getColumn(0, "VOLUME") + this.ds_kornet_wrs.getColumn(0, "VOLUME_UNIT")); // 규격(용량값+용량명칭)

        		// 코리안넷 PIECEPRICEUNIT의 값으로 표시단위, 기준량 구함
        		var piece = this.ds_kornet_wrs.getColumn(0, "PIECEPRICEUNIT");
        		if (!this.gfn_isNull(piece) && piece != "없음") {
        			var pieces = piece.split(" ");
        			if (this.gfn_isNum(pieces[0])) {
        				this.edt_div_data02.set_value(pieces[0]); // 기준량
        			}

        			if (!this.gfn_isNull(pieces[1])) {
        				for (var i=0; i<this.ds_bas_pr_unt_dsc.getRowCount(); i++) {
        					if (pieces[1] == this.ds_bas_pr_unt_dsc.getColumn(i, "SIMP_CNM")) {
        						this.cbo_div_list00.set_value(this.ds_bas_pr_unt_dsc.getColumn(i, "SIMP_C")); // 표시단위
        						break;
        					}
        				}
        			}
        		}
        	} else {
        		if (this.ds_gd_wrs.getRowCount() == 0) {
        			this.alert("농협 경제통합시스템 상품정보가 없습니다.");
        			return;
        		}
        	}
        }

        // 코리안넷 상품정보 불러오기
        this.btn_load_kornet_onclick = function(obj,e)
        {
        	this.fn_applyProductInfo(true);
        }

        this.edt_search_wrs_onkeyup = function(obj,e)
        {
        	if (e.keycode ==13) {
        		if (!this.isValueWrsCode()) {
        			this.alert('상품코드가 형식에 맞지 않습니다. \n\n 다시 입력해주세요.');
        			return;
        		}
        		this.btn_search_wrs.click();
        	}
        }
        this.btn_clear00_onclick = function(obj,e)
        {
        	//trace(this.gfn_getNum(this.div_search.edt_div_data13.value));

        	//this.fn_checkUpdateRow();
        }

        /* 1차/2차 상품 선택(변경전 이벤트) */
        this.rdo_store_code02_canitemchange = function(obj,e)
        {
        	if (!ALLOW_PRIMARY && e.postvalue == "1") {
        		// 1차 상품불가
        		this.alert("1차 상품은 신청하실 수 없습니다.");
        		return false;
        	}
        }

        /* 1차/2차 상품 선택(변경후 이벤트) */
        this.rdo_store_code02_onitemchanged = function(obj,e)
        {
        	this.selectWrsDsc();
        }

        /* 1차/2차 상품 선택 */
        this.selectWrsDsc = function()
        {
        	if (this.rdo_store_code02.value == "1") {
        		if (ALLOW_PRIMARY) {
        			this.sta_pagename02.set_text("1차상품 상세정보");
        			//this.div_search.rdo_store_code00.set_enable(false); // 상품유형
        			this.div_search.rdo_store_code03.set_enable(false); // 주류상품여부
        			this.div_search.edt_div_data01.set_enable(false); // 공병코드
        			this.div_search.edt_div_data03.set_enable(false); // 공병수량
        			this.div_search.edt_div_data08.set_enable(false); // 공상자코드
        			this.div_search.cbo_liq_uz_dsc.set_enable(false); // 주류용도
        			this.div_search.btn_popup00.set_enable(false); // 공병코드검색
        			this.div_search.btn_popup01.set_enable(false); // 공상자코드검색
        			trace()
        			
        			this.div_search.cbo_liq_uz_dsc03.set_enable(true); // 농협관리구분
        			this.div_search.cbo_na_wrs_sze_sex_c.set_enable(true); // 크기(성별)
        			this.div_search.cbo_na_wrs_dstr_stsc.set_enable(true); // 유통상태
        			this.div_search.cbo_na_wrs_qlt_grdc.set_enable(true); // 품질(등급)
        			this.div_search.rdo_store_code05.set_enable(true); // GAP인증
        			this.div_search.rdo_store_code06.set_enable(true); // 저탄소인증여부
        			this.div_search.edt_na_wrs_pdaa_c.set_enable(true); // 산지코드
        			this.div_search.btn_na_wrs_pdaa_c.set_enable(true); // 산지코드검색

        			this.div_search.rdo_store_code00.set_value(""); // 상품유형
        			this.div_search.rdo_store_code03.set_value(""); // 주류상품여부
        			this.div_search.edt_div_data01.set_value(""); // 공병코드
        			this.div_search.edt_div_data03.set_value(""); // 공병수량
        			this.div_search.edt_div_data08.set_value(""); // 공상자코드
        			this.div_search.cbo_liq_uz_dsc.set_value(""); // 주류용도

        			this.div_search.sta_title24.set_text("용도(부위)");
        			this.div_search.chk_wrsnm00.set_visible(true);
        			this.div_search.chk_wrsnm01.set_visible(true);
        			this.div_search.chk_wrsnm02.set_visible(true);
        			this.div_search.chk_wrsnm03.set_visible(true);
        			this.div_search.chk_wrsnm04.set_visible(true);
        			this.div_search.chk_wrsnm05.set_visible(true);
        		} else {
        			return;
        		}
        	} else {
        		this.sta_pagename02.set_text("2차상품 상세정보");
        		//this.div_search.rdo_store_code00.set_enable(true); // 상품유형
        		this.div_search.rdo_store_code03.set_enable(true); // 주류상품여부
        		this.div_search.edt_div_data01.set_enable(true); // 공병코드
        		this.div_search.edt_div_data03.set_enable(true); // 공병수량
        		this.div_search.edt_div_data08.set_enable(true); // 공상자코드
        		this.div_search.cbo_liq_uz_dsc.set_enable(true); // 주류용도
        		this.div_search.btn_popup00.set_enable(true); // 공병코드검색
        		this.div_search.btn_popup01.set_enable(true); // 공상자코드검색

        		this.div_search.cbo_liq_uz_dsc03.set_enable(false); // 농협관리구분
        		this.div_search.cbo_na_wrs_sze_sex_c.set_enable(false); // 크기(성별)
        		this.div_search.cbo_na_wrs_dstr_stsc.set_enable(false); // 유통상태
        		this.div_search.cbo_na_wrs_qlt_grdc.set_enable(false); // 품질(등급)
        		this.div_search.rdo_store_code05.set_enable(false); // GAP인증
        		this.div_search.rdo_store_code06.set_enable(false); // 저탄소인증여부
        		this.div_search.edt_na_wrs_pdaa_c.set_enable(false); // 산지코드
        		this.div_search.btn_na_wrs_pdaa_c.set_enable(false); // 산지코드검색

        		this.div_search.cbo_liq_uz_dsc03.set_value(""); // 농협관리구분
        		this.div_search.cbo_na_wrs_sze_sex_c.set_value(""); // 크기(성별)
        		this.div_search.cbo_na_wrs_dstr_stsc.set_value("000"); // 유통상태
        		this.div_search.cbo_na_wrs_qlt_grdc.set_value(""); // 품질(등급)
        		this.div_search.rdo_store_code05.set_value("0"); // GAP인증
        		this.div_search.rdo_store_code06.set_value("0"); // 저탄소인증여부
        		this.div_search.edt_na_wrs_pdaa_c.set_value(""); // 산지코드

        		this.div_search.sta_title24.set_text("용도");
        		this.div_search.chk_wrsnm00.set_visible(false);
        		this.div_search.chk_wrsnm01.set_visible(false);
        		this.div_search.chk_wrsnm02.set_visible(false);
        		this.div_search.chk_wrsnm03.set_visible(false);
        		this.div_search.chk_wrsnm04.set_visible(false);
        		this.div_search.chk_wrsnm05.set_visible(false);
        		this.div_search.chk_wrsnm00.set_value(false);
        		this.div_search.chk_wrsnm01.set_value(false);
        		this.div_search.chk_wrsnm02.set_value(false);
        		this.div_search.chk_wrsnm03.set_value(false);
        		this.div_search.chk_wrsnm04.set_value(false);
        		this.div_search.chk_wrsnm05.set_value(false);
        	}
        }

        /* 주류상품여부 */
        this.div_search_rdo_store_code03_onitemchanged = function(obj,e)
        {
        	if (obj.value == "0") {
        		this.div_search.cbo_liq_uz_dsc.set_enable(false);
        		this.div_search.cbo_liq_uz_dsc.set_value("00");
        	} else {
        		this.div_search.cbo_liq_uz_dsc.set_enable(true);
        	}
        }

        /* 표준/비표준 구분(비표준 불가로 이벤트 제거, 필요시 이벤트 부여) */
        this.rdo_search_sep00_onitemchanged = function(obj,e)
        {
        	if (obj.value == "1") {
        		// 비표준(1)
        		this.rdo_store_code05.set_enable(true);
        		this.rdo_store_code05.set_visible(true);
        		this.sta_title13.set_visible(true);

        		this.edt_search_wrs.set_enable(false);
        		this.btn_search_wrs.set_enable(false);
        		this.edt_search_wrs.set_value("");
        		this.btn_search_wrs.set_value("");
        		this.btn_save00.set_enable(true);

        // 		this.rdo_store_code02.set_value(2); // 상품분류 (2차상품)
        // 		this.selectWrsDsc();
        		reg_dsc = "0";
        	} else {
        		// 표준(2)
        		this.rdo_store_code05.set_enable(false);
        		this.rdo_store_code05.set_visible(false);
        		this.rdo_store_code05.set_value("");
        		this.sta_title13.set_visible(false);

        		this.edt_search_wrs.set_enable(true);
        		this.btn_search_wrs.set_enable(true);
        		this.btn_save00.set_enable(false);
        	}
        }

        /* 공동상품여부 선택 */
        this.rdo_store_code01_onitemchanged = function(obj,e)
        {
        	if (obj.value == "1") {
        		this.edt_data15.set_enable(false);
        		this.btn_popup02.set_enable(false);
        		this.edt_data15.set_value("");
        		this.edt_data16.set_value("");
        	} else {
        		this.edt_data15.set_enable(true);
        		this.btn_popup02.set_enable(true);
        	}
        }

        this.div_search_chk_wrsnm_onchanged = function(obj,e)
        {
        	this.fn_makeWrsName();
        }

        /* 1차상품 - 상품명 생성 */
        this.fn_makeWrsName = function()
        {
        	if (this.rdo_store_code02.value != "1") {
        		return;
        	}

        	var name = AUTO_WRS_NM;
        	var fullname = "";

        	// 단량
        	if (!this.gfn_isNull(this.div_search.edt_div_data04.value) && !this.gfn_isNull(this.div_search.cbo_div_list00.value)) {
        		name += "/" + this.div_search.edt_div_data04.text + this.div_search.cbo_div_list00.text;
        	}

        	// 포장
        	if (!this.gfn_isNull(this.div_search.cbo_div_list01.value)) {
        		name += "/" + this.div_search.cbo_div_list01.text;
        	}

        	// 크기(성별)
        	if (!this.gfn_isNull(this.div_search.cbo_na_wrs_sze_sex_c.value)) {
        		name += "/" + this.div_search.cbo_na_wrs_sze_sex_c.text;
        	}

        	// 품질(등급)
        	if (!this.gfn_isNull(this.div_search.cbo_na_wrs_qlt_grdc.value)) {
        		name += "/" + this.div_search.cbo_na_wrs_qlt_grdc.text;
        	}

        	// 친환경인증
        	if (this.div_search.chk_wrsnm00.value && !this.gfn_isNull(this.div_search.cbo_proenv_dsc.value)) {
        		fullname += "/" + this.div_search.cbo_proenv_dsc.text;
        	}

        	// GAP인증
        	if (this.div_search.chk_wrsnm04.value && this.div_search.rdo_store_code05.value == "1") {
        		fullname += "/GAP인증";
        	}

        	// 농협관리구분
        	if (this.div_search.chk_wrsnm02.value && !this.gfn_isNull(this.div_search.cbo_liq_uz_dsc03.value)) {
        		fullname += "/" + this.div_search.cbo_liq_uz_dsc03.text;
        	}

        	// 보관방식
        	if (this.div_search.chk_wrsnm05.value && !this.gfn_isNull(this.div_search.cbo_div_list02.value)) {
        		fullname += "/" + this.div_search.cbo_div_list02.text;
        	}

        	// 유통상태
        	if (this.div_search.chk_wrsnm01.value && !this.gfn_isNull(this.div_search.cbo_na_wrs_dstr_stsc.value)) {
        		fullname += "/" + this.div_search.cbo_na_wrs_dstr_stsc.text;
        	}

        	// 용도(부위)
        	if (this.div_search.chk_wrsnm03.value && !this.gfn_isNull(this.div_search.cbo_div_list04.value)) {
        		fullname += "/" + this.div_search.cbo_div_list04.text;
        	}

        	this.edt_data03.set_value(name+fullname);
        	this.edt_data04.set_value(name);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_save00.addEventHandler("onclick", this.btn_save00_onclick, this);
            this.btn_popup01.addEventHandler("onclick", this.btn_popup01_onclick, this);
            this.edt_search_wrs.addEventHandler("onkeyup", this.edt_search_wrs_onkeyup, this);
            this.rdo_store_code03.addEventHandler("onitemchanged", this.rdo_store_code03_onitemchanged, this);
            this.edt_data15.addEventHandler("onkeydown", this.edt_data15_onkeydown, this);
            this.btn_popup02.addEventHandler("onclick", this.btn_popup02_onclick, this);
            this.edt_data16.addEventHandler("onkeydown", this.edt_data16_onkeydown, this);
            this.div_search.edt_div_data04.addEventHandler("onkillfocus", this.fn_makeWrsName, this);
            this.div_search.cbo_div_list00.addEventHandler("onitemchanged", this.fn_makeWrsName, this);
            this.div_search.edt_div_data01.addEventHandler("onkeydown", this.div_search_edt_div_data01_onkeydown, this);
            this.div_search.edt_div_data02.addEventHandler("onkeydown", this.div_search_edt_div_data02_onkeydown, this);
            this.div_search.btn_popup00.addEventHandler("onclick", this.div_search_btn_popup00_onclick, this);
            this.div_search.cbo_div_list01.addEventHandler("onitemchanged", this.fn_makeWrsName, this);
            this.div_search.rdo_store_code02.addEventHandler("onitemchanged", this.div_search_rdo_store_code02_onitemchanged, this);
            this.div_search.rdo_store_code03.addEventHandler("onitemchanged", this.div_search_rdo_store_code03_onitemchanged, this);
            this.div_search.edt_div_data08.addEventHandler("onkeydown", this.div_search_edt_div_data08_onkeydown, this);
            this.div_search.edt_div_data09.addEventHandler("onkeydown", this.div_search_edt_div_data09_onkeydown, this);
            this.div_search.btn_popup01.addEventHandler("onclick", this.div_search_btn_popup01_onclick, this);
            this.div_search.btn_popup03.addEventHandler("onclick", this.div_search_btn_popup01_onclick, this);
            this.div_search.cbo_na_wrs_sze_sex_c.addEventHandler("onitemchanged", this.fn_makeWrsName, this);
            this.div_search.cbo_na_wrs_qlt_grdc.addEventHandler("onitemchanged", this.fn_makeWrsName, this);
            this.div_search.cbo_div_list03.addEventHandler("onitemchanged", this.div_edit_cbo_div_list03_onitemchanged, this);
            this.div_search.chk_wrsnm00.addEventHandler("onchanged", this.div_search_chk_wrsnm_onchanged, this);
            this.div_search.chk_wrsnm01.addEventHandler("onchanged", this.div_search_chk_wrsnm_onchanged, this);
            this.div_search.chk_wrsnm02.addEventHandler("onchanged", this.div_search_chk_wrsnm_onchanged, this);
            this.div_search.chk_wrsnm03.addEventHandler("onchanged", this.div_search_chk_wrsnm_onchanged, this);
            this.div_search.chk_wrsnm04.addEventHandler("onchanged", this.div_search_chk_wrsnm_onchanged, this);
            this.div_search.chk_wrsnm05.addEventHandler("onchanged", this.div_search_chk_wrsnm_onchanged, this);
            this.div_search.btn_na_wrs_pdaa_c.addEventHandler("onclick", this.div_search_btn_na_wrs_pdaa_c_onclick, this);
            this.rdo_store_code01.addEventHandler("onitemchanged", this.rdo_store_code01_onitemchanged, this);
            this.btn_clear02.addEventHandler("onclick", this.btn_clear02_onclick, this);
            this.rdo_store_code02.addEventHandler("onitemchanged", this.rdo_store_code02_onitemchanged, this);
            this.rdo_store_code02.addEventHandler("canitemchange", this.rdo_store_code02_canitemchange, this);
            this.btn_search_wrs.addEventHandler("onclick", this.btn_search_wrs_onclick, this);
            this.rdo_search_sep00.addEventHandler("onitemchanged", this.rdo_search_sep00_onitemchanged, this);
            this.btn_load_kornet.addEventHandler("onclick", this.btn_load_kornet_onclick, this);
            this.edt_div_data01.addEventHandler("onkeydown", this.div_search_edt_div_data01_onkeydown, this);
            this.edt_div_data02.addEventHandler("onkeydown", this.div_search_edt_div_data01_onkeydown, this);
            this.div_atch_new.FileUpload07.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.div_atch_new.FileUpload07.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.div_atch_new.FileUpload07.addEventHandler("onitemchanged", this.div_search_FileUpload00_onitemchanged, this);
            this.div_atch_new.FileUpload08.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.div_atch_new.FileUpload08.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.div_atch_new.FileUpload08.addEventHandler("onitemchanged", this.div_search_FileUpload00_onitemchanged, this);
            this.div_atch_new.FileUpload09.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.div_atch_new.FileUpload09.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.div_atch_new.FileUpload09.addEventHandler("onitemchanged", this.div_search_FileUpload00_onitemchanged, this);
            this.div_atch_new.btn_atch_del07.addEventHandler("onclick", this.btn_atch_del_onclick, this);
            this.div_atch_new.btn_atch_del08.addEventHandler("onclick", this.btn_atch_del_onclick, this);
            this.div_atch_new.btn_atch_del09.addEventHandler("onclick", this.btn_atch_del_onclick, this);
            this.div_atch_new.btn_atch_del10.addEventHandler("onclick", this.btn_atch_del_onclick, this);
            this.div_atch_new.FileUpload10.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.div_atch_new.FileUpload10.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.div_atch_new.FileUpload10.addEventHandler("onitemchanged", this.div_search_FileUpload00_onitemchanged, this);
            this.div_atch_new.btn_atch_del11.addEventHandler("onclick", this.btn_atch_del_onclick, this);
            this.div_atch_new.FileUpload11.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.div_atch_new.FileUpload11.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.div_atch_new.FileUpload11.addEventHandler("onitemchanged", this.div_search_FileUpload00_onitemchanged, this);
            this.div_atch_old.FileUpload04.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.div_atch_old.FileUpload04.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.div_atch_old.FileUpload04.addEventHandler("onitemchanged", this.div_search_FileUpload00_onitemchanged, this);
            this.div_atch_old.FileUpload05.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.div_atch_old.FileUpload05.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.div_atch_old.FileUpload05.addEventHandler("onitemchanged", this.div_search_FileUpload00_onitemchanged, this);
            this.div_atch_old.FileUpload06.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.div_atch_old.FileUpload06.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.div_atch_old.FileUpload06.addEventHandler("onitemchanged", this.div_search_FileUpload00_onitemchanged, this);
            this.div_atch_old.btn_atch_del04.addEventHandler("onclick", this.btn_atch_del_onclick, this);
            this.div_atch_old.btn_atch_del05.addEventHandler("onclick", this.btn_atch_del_onclick, this);
            this.div_atch_old.btn_atch_del06.addEventHandler("onclick", this.btn_atch_del_onclick, this);
            this.FileUpload00.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload00.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload00.addEventHandler("onitemchanged", this.div_search_FileUpload00_onitemchanged, this);
            this.FileUpload01.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload01.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload01.addEventHandler("onitemchanged", this.div_search_FileUpload00_onitemchanged, this);
            this.FileUpload02.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload02.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload02.addEventHandler("onitemchanged", this.div_search_FileUpload00_onitemchanged, this);
            this.FileUpload03.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload03.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload03.addEventHandler("onitemchanged", this.div_search_FileUpload00_onitemchanged, this);
            this.btn_atch_del00.addEventHandler("onclick", this.btn_atch_del_onclick, this);
            this.btn_atch_del01.addEventHandler("onclick", this.btn_atch_del_onclick, this);
            this.btn_atch_del02.addEventHandler("onclick", this.btn_atch_del_onclick, this);
            this.btn_atch_del03.addEventHandler("onclick", this.btn_atch_del_onclick, this);
            this.edt_data00.addEventHandler("oneditclick", this.edt_GLN_oneditclick, this);
            this.btn_clear00.addEventHandler("onclick", this.btn_clear00_onclick, this);
            this.div_kornet.edt_div_data40.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data38.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data39.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data60.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data35.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data28.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data25.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data21.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data17.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data18.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data56.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data55.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data16.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data15.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data20.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data24.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data27.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data34.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data59.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data58.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data37.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data26.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data23.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data19.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data13.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data14.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data54.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data41.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data31.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data03.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data42.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data32.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data04.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data07.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data06.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data02.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data05.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data01.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data00.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data08.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data09.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data10.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data33.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data43.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data53.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data12.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data11.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data22.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data30.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data29.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data36.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data57.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data44.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data45.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);
            this.div_kornet.edt_div_data46.addEventHandler("onkeydown", this.div_search_edt_div_data25_onkeydown, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1543(원본).xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
