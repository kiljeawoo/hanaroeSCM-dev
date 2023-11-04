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
                this.set_name("OMG_DS_SC_5061");
                this.set_titletext("신규상품등록 상세조회");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,880,742);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_detail", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BOXPE_AQZ\" type=\"string\" size=\"32\"/><Column id=\"BSC_UNT_DSC\" type=\"string\" size=\"32\"/><Column id=\"BSC_UNT_DSC_NM\" type=\"string\" size=\"32\"/><Column id=\"COMM_WRS_YN\" type=\"STRING\" size=\"32\"/><Column id=\"DSTR_TER_YN\" type=\"string\" size=\"32\"/><Column id=\"GAP_ATTC_YN\" type=\"string\" size=\"32\"/><Column id=\"GBN\" type=\"string\" size=\"32\"/><Column id=\"LIQ_UZ_DSC\" type=\"string\" size=\"32\"/><Column id=\"LIQ_YN\" type=\"string\" size=\"32\"/><Column id=\"LWCRBN_ATTC_YN\" type=\"string\" size=\"32\"/><Column id=\"MFT_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"MFT_NA_TRPL_NM\" type=\"string\" size=\"32\"/><Column id=\"NA_C_RQ_OBJ_DSC_NM\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_CSTD_METC\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_CSTD_METC_NM\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_DSTR_STSC\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_DSTR_STSC_NM\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_DTCF_C\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_IPO_DSC_NM\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_LCLC\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_MCLC\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_PAK_C\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_PAK_NM\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_PROENV_DSC\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_QLT_GRDC\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_QLT_GRDC_NM\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_SCLC\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_SZE_SEX_C\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_SZE_SEX_C_NM\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_UNT_C\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_UNT_NM\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_UZC\" type=\"string\" size=\"32\"/><Column id=\"RFID_UYN\" type=\"string\" size=\"32\"/><Column id=\"RQ_NA_WRS_C\" type=\"string\" size=\"32\"/><Column id=\"SMA_APL_TPC\" type=\"string\" size=\"32\"/><Column id=\"SMA_APL_TPC_NM\" type=\"string\" size=\"32\"/><Column id=\"TXT_DSC\" type=\"string\" size=\"32\"/><Column id=\"TXT_DSC_NM\" type=\"string\" size=\"32\"/><Column id=\"VCBT_NA_WRS_C\" type=\"string\" size=\"32\"/><Column id=\"VCBT_QT\" type=\"string\" size=\"32\"/><Column id=\"VCBX_NA_WRS_C\" type=\"string\" size=\"32\"/><Column id=\"VLD_PRD_CN\" type=\"string\" size=\"32\"/><Column id=\"VLD_PRD_DSC\" type=\"string\" size=\"32\"/><Column id=\"VLD_PRD_DSC_NM\" type=\"string\" size=\"32\"/><Column id=\"WHT\" type=\"string\" size=\"32\"/><Column id=\"WRS_ABR_NM\" type=\"string\" size=\"32\"/><Column id=\"WRS_C_DSC\" type=\"string\" size=\"32\"/><Column id=\"WRS_C_DSC_NM\" type=\"string\" size=\"32\"/><Column id=\"WRS_DSC\" type=\"string\" size=\"32\"/><Column id=\"WRS_DSC_NM\" type=\"string\" size=\"32\"/><Column id=\"WRS_DTCFNM\" type=\"string\" size=\"32\"/><Column id=\"WRS_DTL_EXPL\" type=\"string\" size=\"32\"/><Column id=\"WRS_ENM\" type=\"string\" size=\"32\"/><Column id=\"WRS_LCLFNM\" type=\"string\" size=\"32\"/><Column id=\"WRS_MCLFNM\" type=\"string\" size=\"32\"/><Column id=\"WRS_SCLFNM\" type=\"string\" size=\"32\"/><Column id=\"WRS_STDNM\" type=\"string\" size=\"32\"/><Column id=\"WRS_TPC\" type=\"string\" size=\"32\"/><Column id=\"WRS_TPC_NM\" type=\"string\" size=\"32\"/><Column id=\"WRSNM\" type=\"string\" size=\"32\"/><Column id=\"DSTR_TER_MRK_DSC\" type=\"string\" size=\"32\"/><Column id=\"DSTR_TER_MRK_DSC_NM\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_IPO_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_PROENV_DSC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LIQ_UZ_DSC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PR_MRK_WHT\" type=\"STRING\" size=\"256\"/><Column id=\"PR_MRK_STD_BAS_WHT\" type=\"STRING\" size=\"256\"/><Column id=\"PR_MRK_BAS_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PR_MRK_BAS_UNIT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_detail_org", this);
            obj._setContents("<ColumnInfo><Column id=\"VAN_C_RQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NA_C_RQ_NO\" type=\"STRING\" size=\"10\"/><Column id=\"NA_C_RQ_OBJ_DSC\" type=\"STRING\" size=\"13\"/><Column id=\"CTCPL_TELNO\" type=\"STRING\" size=\"14\"/><Column id=\"RQ_CNTN\" type=\"STRING\" size=\"200\"/><Column id=\"APV_RQ_NA_BZPLC\" type=\"STRING\" size=\"13\"/><Column id=\"FSRGMN_ENO\" type=\"STRING\" size=\"9\"/><Column id=\"FSRGMN_NA_BZPLC\" type=\"STRING\" size=\"25\"/><Column id=\"BUYER_ENO\" type=\"STRING\" size=\"9\"/><Column id=\"RQ_NA_WRS_C\" type=\"STRING\" size=\"25\"/><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_C_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_ABR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_ENM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_SCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_DTCF_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_LCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_MCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_SCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_DTCFNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_ID_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_STDNM\" type=\"STRING\" size=\"256\"/><Column id=\"TXT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"SMA_APL_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"LIQ_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_WRS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MFT_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"WHT\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_UNT_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_PAK_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_SZE_SEX_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_QLT_GRDC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_BRAN_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_PROENV_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"GAP_ATTC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_NACF_QLT_ATTC_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_CSTD_METC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_DSTR_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_UZC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_IPO_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_PDAA_C\" type=\"STRING\" size=\"256\"/><Column id=\"VLD_PRD_CN\" type=\"STRING\" size=\"256\"/><Column id=\"VLD_PRD_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_STD_UNT_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_HGHT\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_LEN_LEN\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_WDTH_LEN\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_SGRT\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_SDL_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_AHL_CN\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_STD_THKN\" type=\"STRING\" size=\"256\"/><Column id=\"CICL_WRS_STD_DMTR_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CICL_WRS_STD_DPTH_CN\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_QT\" type=\"STRING\" size=\"256\"/><Column id=\"VCBX_NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"CVS_QT\" type=\"STRING\" size=\"256\"/><Column id=\"CVS_NA_WRS_UNT_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_DTL_EXPL\" type=\"STRING\" size=\"256\"/><Column id=\"BSC_UNT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BOXPE_AQZ\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_FL_CN\" type=\"STRING\" size=\"256\"/><Column id=\"KNET_WRS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TR_STOP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TR_STOP_RSNC\" type=\"STRING\" size=\"256\"/><Column id=\"TR_STOP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FSRGMN_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CMENO\" type=\"STRING\" size=\"256\"/><Column id=\"LSCGMN_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"TEMP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RFID_UYN\" type=\"STRING\" size=\"256\"/><Column id=\"FOMNM\" type=\"STRING\" size=\"256\"/><Column id=\"SLGT_ETR_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"DSTR_TER_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DSTR_TER_MRK_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_MODIFY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RSP_C_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"CNF_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"CNF_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CNF_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NA_C_RQ_REJ_RSNC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_C_RQ_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"STPL_AMN_NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_SPYPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_SPYPL_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"PLTPE_LYNO\" type=\"STRING\" size=\"256\"/><Column id=\"PLTPE_SGNO\" type=\"STRING\" size=\"256\"/><Column id=\"PLTPE_BOX_CN\" type=\"STRING\" size=\"256\"/><Column id=\"BOX_WT\" type=\"STRING\" size=\"256\"/><Column id=\"BOX_BULK\" type=\"STRING\" size=\"256\"/><Column id=\"BOX_WRS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BYNG_UPR\" type=\"STRING\" size=\"256\"/><Column id=\"SEL_UPR\" type=\"STRING\" size=\"256\"/><Column id=\"CUD_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"LIQ_UZ_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"LIQ_UZ_DSC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_PROENV_DSC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PR_MRK_WHT\" type=\"STRING\" size=\"256\"/><Column id=\"PR_MRK_STD_BAS_WHT\" type=\"STRING\" size=\"256\"/><Column id=\"PR_MRK_BAS_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PR_MRK_BAS_UNIT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("74");
            obj.set_text("신규상품등록 상세조회");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Button("brn_cls", "absolute", "839", "0", "37", "32", null, null, this);
            obj.set_taborder("75");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "15", "47", null, null, "15", "15", this);
            obj.set_taborder("110");
            obj.style.set_border("0 solid #808080ff");
            obj.style.set_bordertype("normal 0 0");
            obj.set_scrollbars("autovert");
            this.addChild(obj.name, obj);
            obj = new Static("Static19", "absolute", "109", "493", null, "29", "0", null, this.div_search);
            obj.set_taborder("174");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "109", "409", null, "29", "0", null, this.div_search);
            obj.set_taborder("125");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "109", "465", null, "29", "0", null, this.div_search);
            obj.set_taborder("126");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "109", "381", null, "29", "0", null, this.div_search);
            obj.set_taborder("127");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static26", "absolute", "109", "297", null, "29", "0", null, this.div_search);
            obj.set_taborder("128");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static28", "absolute", "109", "353", null, "29", "0", null, this.div_search);
            obj.set_taborder("129");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title00", "absolute", "0", "297", "110", "29", null, null, this.div_search);
            obj.set_taborder("130");
            obj.set_text("상품유형");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title02", "absolute", "0", "325", "110", "29", null, null, this.div_search);
            obj.set_taborder("131");
            obj.set_text("공병코드/수량");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title04", "absolute", "0", "353", "110", "29", null, null, this.div_search);
            obj.set_taborder("132");
            obj.set_text("단량/단위/포장");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_color("#353e41ff");
            obj.style.set_padding("2 7 0 7");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static27", "absolute", "109", "325", null, "29", "0", null, this.div_search);
            obj.set_taborder("133");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title05", "absolute", "435", "353", "110", "29", null, null, this.div_search);
            obj.set_taborder("134");
            obj.set_text("브랜드");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("false");
            obj.style.set_padding("2 7 0 7");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title06", "absolute", "0", "409", "110", "29", null, null, this.div_search);
            obj.set_taborder("135");
            obj.set_text("보관방식");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title07", "absolute", "435", "493", "110", "29", null, null, this.div_search);
            obj.set_taborder("136");
            obj.set_text("주류용도");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title03", "absolute", "435", "325", "110", "29", null, null, this.div_search);
            obj.set_taborder("137");
            obj.set_text("공상자코드");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_div_data04", "absolute", "113", "357", "70", "21", null, null, this.div_search);
            obj.set_taborder("138");
            obj.set_cssclass("WF_Essential");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "0", "381", "110", "29", null, null, this.div_search);
            obj.set_taborder("139");
            obj.set_text("수입여부");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "0", "437", "110", "29", null, null, this.div_search);
            obj.set_taborder("140");
            obj.set_text("유통기한관리여부");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "109", "437", null, "29", "0", null, this.div_search);
            obj.set_taborder("141");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "0", "493", "110", "29", null, null, this.div_search);
            obj.set_taborder("142");
            obj.set_text("박스당입수");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "435", "381", "110", "29", null, null, this.div_search);
            obj.set_taborder("143");
            obj.set_text("RFID사용여부");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title01", "absolute", "435", "297", "110", "29", null, null, this.div_search);
            obj.set_taborder("146");
            obj.set_text("주류상품여부");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_store_code00", "absolute", "113", "301", "317", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_store_code00_innerdataset = new Dataset("rdo_store_code00_innerdataset", this.div_search.rdo_store_code00);
            rdo_store_code00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">일반상품</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">공병</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">공상자</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">공파렛트</Col></Row></Rows>");
            obj.set_innerdataset(rdo_store_code00_innerdataset);
            obj.set_taborder("147");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.style.set_font("9 Gulim");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj = new Edit("edt_div_data01", "absolute", "113", "329", "80", "21", null, null, this.div_search);
            obj.set_taborder("148");
            obj.set_inputtype("number");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_div_data02", "absolute", "196", "329", "100", "21", null, null, this.div_search);
            obj.set_taborder("149");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_div_data03", "absolute", "323", "329", "30", "21", null, null, this.div_search);
            obj.set_taborder("151");
            obj.set_inputtype("number");
            obj.set_maxlength("3");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "358", "329", "20", "21", null, null, this.div_search);
            obj.set_taborder("152");
            obj.set_text("개");
            obj.set_enable("false");
            obj.style.setStyleValue("color", "disabled", "#353e41ff");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "186", "357", "10", "21", null, null, this.div_search);
            obj.set_taborder("153");
            obj.set_text("/");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "269", "357", "10", "21", null, null, this.div_search);
            obj.set_taborder("154");
            obj.set_text("/");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_store_code01", "absolute", "113", "385", "200", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_store_code01_innerdataset = new Dataset("rdo_store_code01_innerdataset", this.div_search.rdo_store_code01);
            rdo_store_code01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">여</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">부</Col></Row></Rows>");
            obj.set_innerdataset(rdo_store_code01_innerdataset);
            obj.set_taborder("156");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj = new Radio("rdo_store_code02", "absolute", "113", "441", "200", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_store_code02_innerdataset = new Dataset("rdo_store_code02_innerdataset", this.div_search.rdo_store_code02);
            rdo_store_code02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">여</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">부</Col></Row></Rows>");
            obj.set_innerdataset(rdo_store_code02_innerdataset);
            obj.set_taborder("157");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj = new Radio("rdo_store_code03", "absolute", "548", "301", "200", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_store_code03_innerdataset = new Dataset("rdo_store_code03_innerdataset", this.div_search.rdo_store_code03);
            rdo_store_code03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">여</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">부</Col></Row></Rows>");
            obj.set_innerdataset(rdo_store_code03_innerdataset);
            obj.set_taborder("158");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_readonly("true");
            obj = new Edit("edt_div_data08", "absolute", "548", "329", "110", "21", null, null, this.div_search);
            obj.set_taborder("159");
            obj.set_inputtype("number");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_div_data09", "absolute", "661", "329", "131", "21", null, null, this.div_search);
            obj.set_taborder("160");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_div_data10", "absolute", "548", "357", "110", "21", null, null, this.div_search);
            obj.set_taborder("162");
            obj.set_inputtype("number");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("false");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_div_data11", "absolute", "661", "357", "131", "21", null, null, this.div_search);
            obj.set_taborder("163");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.set_visible("false");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_store_code04", "absolute", "548", "385", "200", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_store_code04_innerdataset = new Dataset("rdo_store_code04_innerdataset", this.div_search.rdo_store_code04);
            rdo_store_code04_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">여</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">부</Col></Row></Rows>");
            obj.set_innerdataset(rdo_store_code04_innerdataset);
            obj.set_taborder("164");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj = new Edit("edt_div_data13", "absolute", "113", "497", "100", "21", null, null, this.div_search);
            obj.set_taborder("165");
            obj.set_inputtype("number");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title24", "absolute", "435", "409", "110", "29", null, null, this.div_search);
            obj.set_taborder("168");
            obj.set_text("용도");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            obj.style.set_font("9 Gulim");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title08", "absolute", "435", "465", "110", "29", null, null, this.div_search);
            obj.set_taborder("170");
            obj.set_text("친환경인증");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            obj.style.set_font("9 Gulim");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static24", "absolute", "109", "549", null, "29", "0", null, this.div_search);
            obj.set_taborder("172");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "109", "521", null, "29", "0", null, this.div_search);
            obj.set_taborder("173");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "0", "521", "110", "29", null, null, this.div_search);
            obj.set_taborder("176");
            obj.set_text("품질(등급)");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title14", "absolute", "435", "521", "110", "29", null, null, this.div_search);
            obj.set_taborder("177");
            obj.set_text("크기(성별)");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "0", "549", "110", "29", null, null, this.div_search);
            obj.set_taborder("180");
            obj.set_text("농협관리구분");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title15", "absolute", "435", "549", "110", "29", null, null, this.div_search);
            obj.set_taborder("181");
            obj.set_text("유통상태");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_day", "absolute", "113", "469", "48", "21", null, null, this.div_search);
            obj.set_taborder("183");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static23", "absolute", "0", "465", "110", "29", null, null, this.div_search);
            obj.set_taborder("185");
            obj.set_text("유효기간");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_pagename02", "absolute", "0", "272", "140", "21", null, null, this.div_search);
            obj.set_taborder("187");
            obj.set_text("상품 상세정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_pagename05", "absolute", "0", "608", "129", "21", null, null, this.div_search);
            obj.set_taborder("188");
            obj.set_text("가격표시제 단위 :");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "634", "110", "29", null, null, this.div_search);
            obj.set_taborder("190");
            obj.set_text("내용량");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "109", "634", null, "29", "0", null, this.div_search);
            obj.set_taborder("191");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "280", "634", "110", "29", null, null, this.div_search);
            obj.set_taborder("192");
            obj.set_text("기준량");
            obj.set_cssclass("sta_WF_Label");
            obj.set_enable("false");
            obj.style.set_padding("2 7 0 7");
            obj.style.setStyleValue("color", "disabled", "#353e41ff");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "557", "634", "110", "29", null, null, this.div_search);
            obj.set_taborder("193");
            obj.set_text("표시단위");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_div_data00", "absolute", "114", "638", "137", "21", null, null, this.div_search);
            obj.set_taborder("194");
            obj.set_inputtype("number");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_div_data05", "absolute", "394", "638", "137", "21", null, null, this.div_search);
            obj.set_taborder("195");
            obj.set_inputtype("number");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title09", "absolute", "0", "192", "110", "29", null, null, this.div_search);
            obj.set_taborder("197");
            obj.set_text("공동상품여부");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            obj.style.set_font("9 Gulim");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_back_bar04", "absolute", "109", "192", null, "29", "0", null, this.div_search);
            obj.set_taborder("198");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_back_bar03", "absolute", "109", "80", "328", "29", null, null, this.div_search);
            obj.set_taborder("199");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_back_bar13", "absolute", "109", "108", "328", "29", null, null, this.div_search);
            obj.set_taborder("200");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_back_bar14", "absolute", "109", "136", "328", "29", null, null, this.div_search);
            obj.set_taborder("201");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_back_bar12", "absolute", "109", "24", null, "29", "0", null, this.div_search);
            obj.set_taborder("202");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_back_bar02", "absolute", "489", "80", null, "85", "0", null, this.div_search);
            obj.set_taborder("203");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title10", "absolute", "0", "80", "110", "29", null, null, this.div_search);
            obj.set_taborder("204");
            obj.set_text("상품명");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_back_bar01", "absolute", "109", "52", null, "29", "0", null, this.div_search);
            obj.set_taborder("205");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title11", "absolute", "0", "108", "110", "29", null, null, this.div_search);
            obj.set_taborder("206");
            obj.set_text("상품약어명");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title12", "absolute", "0", "52", "110", "29", null, null, this.div_search);
            obj.set_taborder("207");
            obj.set_text("상품분류");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title13", "absolute", "0", "164", "110", "29", null, null, this.div_search);
            obj.set_taborder("208");
            obj.set_text("규격");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_back_bar05", "absolute", "109", "164", null, "29", "0", null, this.div_search);
            obj.set_taborder("209");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data04", "absolute", "113", "112", "264", "21", null, null, this.div_search);
            obj.set_taborder("210");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data05", "absolute", "113", "140", "264", "21", null, null, this.div_search);
            obj.set_taborder("211");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data12", "absolute", "113", "168", "264", "21", null, null, this.div_search);
            obj.set_taborder("213");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_pagename01", "absolute", "0", "0", "135", "21", null, null, this.div_search);
            obj.set_taborder("214");
            obj.set_text("상품공통정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data06", "absolute", "113", "56", "34", "21", null, null, this.div_search);
            obj.set_taborder("215");
            obj.set_inputtype("number");
            obj.set_maxlength("3");
            obj.set_enable("true");
            obj.style.setStyleValue("font", "disabled", "9 Gulim");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data07", "absolute", "149", "56", "34", "21", null, null, this.div_search);
            obj.set_taborder("216");
            obj.set_inputtype("number");
            obj.set_maxlength("3");
            obj.set_enable("true");
            obj.style.setStyleValue("font", "disabled", "9 Gulim");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data08", "absolute", "185", "56", "34", "21", null, null, this.div_search);
            obj.set_taborder("217");
            obj.set_inputtype("number");
            obj.set_maxlength("3");
            obj.set_enable("true");
            obj.style.setStyleValue("font", "disabled", "9 Gulim");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data09", "absolute", "221", "56", "34", "21", null, null, this.div_search);
            obj.set_taborder("218");
            obj.set_inputtype("number");
            obj.set_maxlength("3");
            obj.set_enable("true");
            obj.style.setStyleValue("font", "disabled", "9 Gulim");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data10", "absolute", "257", "56", "218", "21", null, null, this.div_search);
            obj.set_taborder("219");
            obj.set_inputtype("number");
            obj.set_maxlength("12");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title17", "absolute", "435", "80", "110", "85", null, null, this.div_search);
            obj.set_taborder("220");
            obj.set_text("상품설명");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title18", "absolute", "435", "164", "110", "29", null, null, this.div_search);
            obj.set_taborder("221");
            obj.set_text("과세구분");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.div_search.addChild(obj.name, obj);
            obj = new TextArea("txa_contents00", "absolute", "548", "86", "291", "73", null, null, this.div_search);
            obj.set_taborder("222");
            obj.set_scrollbars("autovert");
            obj.set_wordwrap("char");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_store_code05", "absolute", "548", "168", "166", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_store_code05_innerdataset = new Dataset("rdo_store_code05_innerdataset", this.div_search.rdo_store_code05);
            rdo_store_code05_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">과세</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">면세</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">영세</Col></Row></Rows>");
            obj.set_innerdataset(rdo_store_code05_innerdataset);
            obj.set_taborder("223");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.style.set_font("9 Gulim");
            obj.set_readonly("true");
            obj = new Static("sta_title19", "absolute", "435", "192", "110", "29", null, null, this.div_search);
            obj.set_taborder("225");
            obj.set_text("제조처");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data15", "absolute", "548", "196", "110", "21", null, null, this.div_search);
            obj.set_taborder("226");
            obj.set_inputtype("number");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data16", "absolute", "661", "196", "131", "21", null, null, this.div_search);
            obj.set_taborder("227");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_store_code06", "absolute", "113", "196", "200", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_store_code06_innerdataset = new Dataset("rdo_store_code06_innerdataset", this.div_search.rdo_store_code06);
            rdo_store_code06_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">여</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">부</Col></Row></Rows>");
            obj.set_innerdataset(rdo_store_code06_innerdataset);
            obj.set_taborder("228");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.style.set_font("9 Gulim");
            obj.set_readonly("true");
            obj = new Edit("edt_data03", "absolute", "113", "84", "264", "21", null, null, this.div_search);
            obj.set_taborder("229");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_store_code07", "absolute", "528", "56", "206", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_store_code07_innerdataset = new Dataset("rdo_store_code07_innerdataset", this.div_search.rdo_store_code07);
            rdo_store_code07_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1차상품</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2차공산품</Col></Row></Rows>");
            obj.set_innerdataset(rdo_store_code07_innerdataset);
            obj.set_taborder("230");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj = new Static("sta_title20", "absolute", "0", "24", "110", "29", null, null, this.div_search);
            obj.set_taborder("231");
            obj.set_text("신청코드구분");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title23", "absolute", "0", "136", "110", "29", null, null, this.div_search);
            obj.set_taborder("233");
            obj.set_text("상품영문명");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title21", "absolute", "0", "220", "110", "29", null, null, this.div_search);
            obj.set_taborder("234");
            obj.set_text("GAP인증");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            obj.style.set_font("9 Gulim");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_back_bar00", "absolute", "109", "220", null, "29", "0", null, this.div_search);
            obj.set_taborder("235");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title22", "absolute", "435", "220", "110", "29", null, null, this.div_search);
            obj.set_taborder("236");
            obj.set_text("저탄소인증여부");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_store_code08", "absolute", "113", "224", "200", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_store_code08_innerdataset = new Dataset("rdo_store_code08_innerdataset", this.div_search.rdo_store_code08);
            rdo_store_code08_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">여</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">부</Col></Row></Rows>");
            obj.set_innerdataset(rdo_store_code08_innerdataset);
            obj.set_taborder("237");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.style.set_font("9 Gulim");
            obj.set_readonly("true");
            obj.set_visible("false");
            obj = new Radio("rdo_store_code09", "absolute", "547", "224", "200", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_store_code09_innerdataset = new Dataset("rdo_store_code09_innerdataset", this.div_search.rdo_store_code09);
            rdo_store_code09_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">여</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">부</Col></Row></Rows>");
            obj.set_innerdataset(rdo_store_code09_innerdataset);
            obj.set_taborder("238");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.style.set_font("9 Gulim");
            obj.set_readonly("true");
            obj.set_visible("false");
            obj = new Edit("edt_data00", "absolute", "113", "28", "80", "21", null, null, this.div_search);
            obj.set_taborder("241");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title26", "absolute", "435", "24", "110", "29", null, null, this.div_search);
            obj.set_taborder("242");
            obj.set_text("상품코드구분");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data01", "absolute", "691", "28", "42", "21", null, null, this.div_search);
            obj.set_taborder("243");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data02", "absolute", "548", "28", "141", "21", null, null, this.div_search);
            obj.set_taborder("244");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data11", "absolute", "717", "168", "110", "21", null, null, this.div_search);
            obj.set_taborder("245");
            obj.set_inputtype("number");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data13", "absolute", "113", "413", "264", "21", null, null, this.div_search);
            obj.set_taborder("246");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data14", "absolute", "548", "413", "264", "21", null, null, this.div_search);
            obj.set_taborder("247");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data17", "absolute", "548", "469", "264", "21", null, null, this.div_search);
            obj.set_taborder("248");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data18", "absolute", "548", "497", "264", "21", null, null, this.div_search);
            obj.set_taborder("249");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data19", "absolute", "113", "525", "264", "21", null, null, this.div_search);
            obj.set_taborder("250");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data20", "absolute", "113", "553", "264", "21", null, null, this.div_search);
            obj.set_taborder("251");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data21", "absolute", "548", "553", "264", "21", null, null, this.div_search);
            obj.set_taborder("252");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data22", "absolute", "548", "525", "264", "21", null, null, this.div_search);
            obj.set_taborder("253");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_day00", "absolute", "164", "469", "130", "21", null, null, this.div_search);
            obj.set_taborder("254");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_day01", "absolute", "126", "608", "168", "21", null, null, this.div_search);
            obj.set_taborder("255");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_div_data06", "absolute", "196", "357", "70", "21", null, null, this.div_search);
            obj.set_taborder("256");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_div_data07", "absolute", "279", "357", "98", "21", null, null, this.div_search);
            obj.set_taborder("257");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title25", "absolute", "435", "437", "110", "29", null, null, this.div_search);
            obj.set_taborder("259");
            obj.set_text("유통기한표기방법");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data24", "absolute", "548", "441", "264", "21", null, null, this.div_search);
            obj.set_taborder("260");
            obj.set_readonly("true");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data25", "absolute", "314", "28", "108", "21", null, null, this.div_search);
            obj.set_taborder("261");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title16", "absolute", "201", "24", "110", "29", null, null, this.div_search);
            obj.set_taborder("262");
            obj.set_text("상품코드");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 7 0 7");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_div_data12", "absolute", "671", "638", "137", "21", null, null, this.div_search);
            obj.set_taborder("263");
            obj.set_inputtype("number");
            obj.set_readonly("true");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("110");
            		p.style.set_border("0 solid #808080ff");
            		p.style.set_bordertype("normal 0 0");
            		p.set_scrollbars("autovert");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 880, 742, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("신규상품등록 상세조회");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item12","div_search.rdo_store_code03","value","ds_detail","LIQ_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","div_search.rdo_store_code00","value","ds_detail","WRS_TPC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","div_search.edt_div_data04","value","ds_detail","WHT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","div_search.edt_div_data10","value","ds_detail","NA_WRS_BRAN_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","div_search.rdo_store_code01","value","ds_detail","NA_WRS_IPO_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","div_search.edt_div_data01","value","ds_detail","VCBT_NA_WRS_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","div_search.edt_div_data03","value","ds_detail","VCBT_QT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","div_search.edt_div_data13","value","ds_detail","BOXPE_AQZ");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item42","div_search.edt_div_data08","value","ds_detail","VCBX_NA_WRS_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item46","div_search.rdo_store_code02","value","ds_detail","DSTR_TER_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item47","div_search.rdo_store_code04","value","ds_detail","RFID_UYN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","div_search.edt_day","value","ds_detail","VLD_PRD_CN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","div_search.edt_data00","value","ds_detail","GBN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","div_search.edt_data01","value","ds_detail","WRS_C_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","div_search.edt_data02","value","ds_detail","WRS_C_DSC_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","div_search.edt_data06","value","ds_detail","NA_WRS_LCLC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item38","div_search.edt_data07","value","ds_detail","NA_WRS_MCLC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","div_search.edt_data08","value","ds_detail","NA_WRS_SCLC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item40","div_search.edt_data09","value","ds_detail","NA_WRS_DTCF_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","div_search.rdo_store_code07","value","ds_detail","WRS_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item43","div_search.edt_data03","value","ds_detail","WRSNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item44","div_search.edt_data04","value","ds_detail","WRS_ABR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item45","div_search.edt_data05","value","ds_detail","WRS_ENM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item48","div_search.txa_contents00","value","ds_detail","WRS_DTL_EXPL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item49","div_search.rdo_store_code05","value","ds_detail","TXT_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item51","div_search.edt_data15","value","ds_detail","MFT_NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item53","div_search.edt_data16","value","ds_detail","MFT_NA_TRPL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item54","div_search.edt_data12","value","ds_detail","WRS_STDNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item55","div_search.edt_data11","value","ds_detail","SMA_APL_TPC_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item56","div_search.rdo_store_code06","value","ds_detail","COMM_WRS_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item57","div_search.rdo_store_code08","value","ds_detail","GAP_ATTC_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item60","div_search.rdo_store_code09","value","ds_detail","LWCRBN_ATTC_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","div_search.edt_data13","value","ds_detail","NA_WRS_CSTD_METC_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","div_search.edt_data14","value","ds_detail","NA_WRS_UZC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","div_search.edt_data17","value","ds_detail","NA_WRS_PROENV_DSC_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item52","div_search.edt_data18","value","ds_detail","LIQ_UZ_DSC_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","div_search.edt_data19","value","ds_detail","NA_WRS_QLT_GRDC_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","div_search.edt_data21","value","ds_detail","NA_WRS_DSTR_STSC_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","div_search.edt_data22","value","ds_detail","NA_WRS_SZE_SEX_C_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","div_search.edt_day00","value","ds_detail","VLD_PRD_DSC_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","div_search.edt_day01","value","ds_detail","BSC_UNT_DSC_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","div_search.edt_div_data06","value","ds_detail","NA_WRS_UNT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item50","div_search.edt_div_data07","value","ds_detail","NA_WRS_PAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item62","div_search.edt_data24","value","ds_detail","DSTR_TER_MRK_DSC_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item63","div_search.edt_data25","value","ds_detail","RQ_NA_WRS_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_search.edt_div_data00","value","ds_detail","PR_MRK_WHT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_search.edt_div_data05","value","ds_detail","PR_MRK_STD_BAS_WHT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","div_search.edt_div_data12","value","ds_detail","PR_MRK_BAS_UNIT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1561_P01.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1561_P01.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        	if (this.parent.gbn == "U") {
        		this.Static06.set_text("상품수정신청 상세조회");
        	}
        };

        this.fn_afterFormOnload = function()
        {
        	this.search();
        }

         /*조회*/
        this.search = function()
        {
        	var sSvcID        = "search";
        	var sURL          = "svc::rest/pds/pricat/Product/retrieveNewGoodsDetailByKornet";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_detail=ds_detail ds_detail_org=ds_detail_org";	
        	var sArgument     = "VAN_C_RQ_NO=" + this.parent.rqno
        								+ " FSRGMN_NA_BZPLC=" + this.parent.trplc
        								+ " GBN=" + this.parent.gbn;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /*창닫기*/
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        } 
         
        //callback메소드
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		this.close();
        	} else {
        		if (svcID == "search") {
        			this.div_search.edt_data10.set_value(
        				this.ds_detail.getColumn(0,"WRS_LCLFNM")+"/"+
        				this.ds_detail.getColumn(0,"WRS_MCLFNM")+"/"+
        				this.ds_detail.getColumn(0,"WRS_SCLFNM")+"/"+
        				this.ds_detail.getColumn(0,"WRS_DTCFNM")
        			);
        			
        // 			if (this.ds_detail.getColumn(0, "TXT_DSC") != "3") {
        // 				this.div_search.edt_data11.set_enable(false);
        // 			}
        			
        // 			if (this.ds_detail.getColumn(0, "LIQ_YN") != "1") {
        // 				this.div_search.edt_data18.set_enable(false);
        // 			}
        			
        // 			if (this.ds_detail.getColumn(0, "DSTR_TER_YN") != "1") {
        // 				this.div_search.edt_day.set_enable(false);
        // 				this.div_search.edt_day00.set_enable(false);
        // 				this.div_search.edt_data24.set_enable(false);
        // 			}
        			
        			if (this.ds_detail.getColumn(0, "WRS_DSC") == "1") {
        				// 1차상품
        				this.div_search.sta_pagename02.set_text("1차상품 상세정보");
        				this.div_search.rdo_store_code00.set_enable(false); // 상품유형
        				this.div_search.rdo_store_code03.set_enable(false); // 주류상품여부
        				this.div_search.edt_div_data01.set_enable(false); // 공병코드
        				this.div_search.edt_div_data02.set_enable(false); // 공병수량
        				this.div_search.edt_div_data08.set_enable(false); // 공상자코드
        				this.div_search.edt_data18.set_enable(false); // 주류용도
        			} else {
        				// 2차상품
        				this.div_search.sta_pagename02.set_text("2차상품 상세정보");
        				this.div_search.edt_data20.set_enable(false); // 농협관리구분
        				this.div_search.edt_data22.set_enable(false); // 크기(성별)
        				this.div_search.edt_data21.set_enable(false); // 유통상태
        				this.div_search.edt_data19.set_enable(false); // 품질(등급)
        			}
        			
        			if (this.parent.gbn == "U") {
        				this.fn_checkModifyInfo();
        			}
        		}
        	}	
        }

        // 변경된 정보 강조
        this.fn_checkModifyInfo = function()
        {
        	try {
        	var changeInfos = new Array();
        	for (var i=0; i<this.ds_detail_org.colcount; i++) {
        		var col = this.ds_detail_org.getColumnInfo(i);
        		var before = this.ds_detail_org.getColumn(0, i);
        		var after = this.ds_detail.getColumn(0, col.name);
        		
        		//trace(col.name + " : " + before + " → " + after);
        		
        		// 필수값은 값 변화 체크
        		// 선택값은 널 체크
        		if (this.gfn_nullToEmpty(after) != "") {
        			if (col.name == "LIQ_YN") {
        				changeInfos.push(this.div_search.rdo_store_code03);
        			} else if (col.name == "WRS_TPC") {
        				changeInfos.push(this.div_search.rdo_store_code00);
        			} else if (col.name == "WHT") {
        				changeInfos.push(this.div_search.edt_div_data04);
        			} else if (col.name == "NA_WRS_BRAN_C") {
        				changeInfos.push(this.div_search.edt_div_data10);
        			} else if (col.name == "NA_WRS_IPO_DSC") {
        				changeInfos.push(this.div_search.rdo_store_code01);
        			} else if (col.name == "VCBT_NA_WRS_C") {
        				changeInfos.push(this.div_search.edt_div_data01);
        			} else if (col.name == "VCBT_QT") {
        				changeInfos.push(this.div_search.edt_div_data03);
        			} else if (col.name == "BOXPE_AQZ") {
        				changeInfos.push(this.div_search.edt_div_data13);
        			} else if (col.name == "VCBX_NA_WRS_C") {
        				changeInfos.push(this.div_search.edt_div_data08);
        			} else if (col.name == "DSTR_TER_YN") {
        				changeInfos.push(this.div_search.rdo_store_code02);
        			} else if (col.name == "RFID_UYN") {
        				changeInfos.push(this.div_search.rdo_store_code04);
        			} else if (col.name == "VLD_PRD_CN") {
        				changeInfos.push(this.div_search.edt_day);
        			} else if (col.name == "GBN" && before != after) {
        				changeInfos.push(this.div_search.edt_data00);
        			} else if (col.name == "WRS_C_DSC" && before != after) {
        				changeInfos.push(this.div_search.edt_data01);
        			} else if (col.name == "WRS_C_DSC_NM" && before != after) {
        				changeInfos.push(this.div_search.edt_data02);
        			} else if (col.name == "NA_WRS_LCLC" && before != after) {
        				changeInfos.push(this.div_search.edt_data06);
        			} else if (col.name == "NA_WRS_MCLC" && before != after) {
        				changeInfos.push(this.div_search.edt_data07);
        			} else if (col.name == "NA_WRS_SCLC" && before != after) {
        				changeInfos.push(this.div_search.edt_data08);
        			} else if (col.name == "NA_WRS_DTCF_C" && before != after) {
        				changeInfos.push(this.div_search.edt_data09);
        			} else if (col.name == "WRS_DSC" && before != after) {
        				changeInfos.push(this.div_search.rdo_store_code07);
        			} else if (col.name == "WRSNM" && before != after) {
        				changeInfos.push(this.div_search.edt_data03);
        			} else if (col.name == "WRS_ABR_NM") {
        				changeInfos.push(this.div_search.edt_data04);
        			} else if (col.name == "WRS_ENM") {
        				changeInfos.push(this.div_search.edt_data05);
        			} else if (col.name == "WRS_DTL_EXPL") {
        				changeInfos.push(this.div_search.txa_contents00);
        			} else if (col.name == "TXT_DSC") {
        				changeInfos.push(this.div_search.rdo_store_code05);
        			} else if (col.name == "MFT_NA_TRPL_C") {
        				changeInfos.push(this.div_search.edt_data15);
        			} else if (col.name == "MFT_NA_TRPL_NM") {
        				changeInfos.push(this.div_search.edt_data16);
        			} else if (col.name == "WRS_STDNM") {
        				changeInfos.push(this.div_search.edt_data12);
        			} else if (col.name == "SMA_APL_TPC_NM") {
        				changeInfos.push(this.div_search.edt_data11);
        			} else if (col.name == "COMM_WRS_YN") {
        				changeInfos.push(this.div_search.rdo_store_code06);
        			} else if (col.name == "GAP_ATTC_YN") {
        				changeInfos.push(this.div_search.rdo_store_code08);
        			} else if (col.name == "LWCRBN_ATTC_YN") {
        				changeInfos.push(this.div_search.rdo_store_code09);
        			} else if (col.name == "NA_WRS_CSTD_METC_NM") {
        				changeInfos.push(this.div_search.edt_data13);
        			} else if (col.name == "NA_WRS_UZC") {
        				changeInfos.push(this.div_search.edt_data14);
        			} else if (col.name == "NA_WRS_PROENV_DSC_NM") {
        				changeInfos.push(this.div_search.edt_data17);
        			} else if (col.name == "LIQ_UZ_DSC_NM") {
        				changeInfos.push(this.div_search.edt_data18);
        			} else if (col.name == "NA_WRS_QLT_GRDC_NM") {
        				changeInfos.push(this.div_search.edt_data19);
        			} else if (col.name == "NA_WRS_DSTR_STSC_NM") {
        				changeInfos.push(this.div_search.edt_data21);
        			} else if (col.name == "NA_WRS_SZE_SEX_C_NM") {
        				changeInfos.push(this.div_search.edt_data22);
        			} else if (col.name == "VLD_PRD_DSC_NM") {
        				changeInfos.push(this.div_search.edt_day00);
        			} else if (col.name == "BSC_UNT_DSC_NM") {
        				changeInfos.push(this.div_search.edt_day01);
        			} else if (col.name == "NA_WRS_UNT_NM") {
        				changeInfos.push(this.div_search.edt_div_data06);
        			} else if (col.name == "NA_WRS_PAK_NM") {
        				changeInfos.push(this.div_search.edt_div_data07);
        			} else if (col.name == "DSTR_TER_MRK_DSC_NM") {
        				changeInfos.push(this.div_search.edt_data24);
        			} else if (col.name == "RQ_NA_WRS_C") {
        				changeInfos.push(this.div_search.edt_data25);
        			} else if (col.name == "PR_MRK_WHT") {
        				changeInfos.push(this.div_search.edt_div_data00);
        			} else if (col.name == "PR_MRK_STD_BAS_WHT") {
        				changeInfos.push(this.div_search.edt_div_data05);
        			} else if (col.name == "PR_MRK_BAS_UNIT_NM") {
        				changeInfos.push(this.div_search.edt_div_data12);
        			}
        		} else {
        			this.ds_detail.setColumn(0, col.name, before);
        		}
        	}
        	
        	for (var i in changeInfos) {
        		changeInfos[i].style.set_color("#0000ffff");
        	}
        	} catch(e) { trace(e); }
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Static06.addEventHandler("onclick", this.Static06_onclick, this);
            this.brn_cls.addEventHandler("onclick", this.btn_close_onclick, this);
            this.div_search.rdo_store_code00.addEventHandler("onitemclick", this.div_search_rdo_store_code00_onitemclick, this);
            this.div_search.edt_div_data01.addEventHandler("onkeydown", this.div_search_edt_div_data01_onkeydown, this);
            this.div_search.edt_div_data02.addEventHandler("onkeydown", this.div_search_edt_div_data02_onkeydown, this);
            this.div_search.rdo_store_code02.addEventHandler("onitemchanged", this.div_search_rdo_store_code02_onitemchanged, this);
            this.div_search.rdo_store_code03.addEventHandler("onitemchanged", this.div_search_rdo_store_code03_onitemchanged, this);
            this.div_search.edt_div_data08.addEventHandler("onkeydown", this.div_search_edt_div_data08_onkeydown, this);
            this.div_search.edt_div_data09.addEventHandler("onkeydown", this.div_search_edt_div_data09_onkeydown, this);
            this.div_search.edt_div_data00.addEventHandler("onkeydown", this.div_search_edt_div_data01_onkeydown, this);
            this.div_search.edt_div_data05.addEventHandler("onkeydown", this.div_search_edt_div_data01_onkeydown, this);
            this.div_search.rdo_store_code05.addEventHandler("onitemchanged", this.rdo_store_code03_onitemchanged, this);
            this.div_search.edt_data15.addEventHandler("onkeydown", this.edt_data15_onkeydown, this);
            this.div_search.edt_data16.addEventHandler("onkeydown", this.edt_data16_onkeydown, this);
            this.div_search.rdo_store_code07.addEventHandler("onitemchanged", this.rdo_store_code02_onitemchanged, this);
            this.div_search.edt_data11.addEventHandler("onkeydown", this.edt_data15_onkeydown, this);
            this.div_search.edt_div_data12.addEventHandler("onkeydown", this.div_search_edt_div_data01_onkeydown, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1561_P01.xfdl", true);

       
    };
}
)();
