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
                this.set_name("VAN_DS_SC_0311");
                this.set_titletext("배송예정서 공판장등록");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dataM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ODRPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SHRT_BZPLNM\" type=\"STRING\" size=\"256\"/><Column id=\"TEAMNM\" type=\"STRING\" size=\"256\"/><Column id=\"DVYAA_C\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_CTR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_RQR_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_VHC_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_VHC\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_VHC_STS\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ODR_AM\" type=\"FLOAT\" size=\"256\"/><Column id=\"TOTAL_ODR_VAT\" type=\"FLOAT\" size=\"256\"/><Column id=\"TOTAL_DVY_AM\" type=\"FLOAT\" size=\"256\"/><Column id=\"TOTAL_DVY_VAT\" type=\"FLOAT\" size=\"256\"/><Column id=\"SPY_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"IS_OD_BE_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"NA_ODR_STS_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"VHCNO\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_PLA_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SLGT_ETR_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_FAR_ASTCS\" type=\"FLOAT\" size=\"256\"/><Column id=\"SPYPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"RVOPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"RVOPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"DVYAA_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"DVYAA_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_VCBT_AM\" type=\"INT\" size=\"256\"/><Column id=\"TOTAL_VCBX_AM\" type=\"INT\" size=\"256\"/><Column id=\"TOTAL_DVY_SSDY\" type=\"FLOAT\" size=\"256\"/><Column id=\"TEMP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"GRS_SOJU_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"ADJPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"ADJPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_TR_REL_AMNNO\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_TR_REL_AMNNO\" type=\"STRING\" size=\"256\"/><Column id=\"LDTM_DDS\" type=\"STRING\" size=\"256\"/><Column id=\"DDLY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_PLASH_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_PLASH_STSC_N\" type=\"STRING\" size=\"256\"/><Column id=\"NORDER_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PGNM\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RMK_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"RES_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_RQR_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dataD", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ODRPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_DSQNO\" type=\"STRING\" size=\"256\"/><Column id=\"VAN_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"BOXPE_AQZ\" type=\"INT\" size=\"256\"/><Column id=\"WRS_STDNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_UNT_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_QT\" type=\"INT\" size=\"256\"/><Column id=\"ODR_PCS\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_ODR_PCS\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_VAT\" type=\"INT\" size=\"256\"/><Column id=\"ODR_AM\" type=\"INT\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_PLA_QT\" type=\"INT\" size=\"256\"/><Column id=\"DQPD_RSNC\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"DVYAA_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_DVY_PLASH_SLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_PLA_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_UPR\" type=\"INT\" size=\"256\"/><Column id=\"VCBX_UPR\" type=\"INT\" size=\"256\"/><Column id=\"VCBT_AM\" type=\"INT\" size=\"256\"/><Column id=\"VCBX_AM\" type=\"INT\" size=\"256\"/><Column id=\"SSDYRT\" type=\"FLOAT\" size=\"256\"/><Column id=\"SSDY_BAS_AM\" type=\"FLOAT\" size=\"256\"/><Column id=\"SPY_PSB_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TXT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"SVS_QT\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_SCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_DTCF_C\" type=\"STRING\" size=\"256\"/><Column id=\"DDLY_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DDLY_BAS_QT\" type=\"STRING\" size=\"256\"/><Column id=\"MIN_ODR_QT\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_ODR_QT\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_QT\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_WRS_UPR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_FBID_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_ctr_tpc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"32\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\"/><Column id=\"SIMP_C_EXPL\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_na_stl_tp_dsc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"32\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\"/><Column id=\"SIMP_C_EXPL\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_box_dsc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"32\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\"/><Column id=\"SIMP_C_EXPL\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dvy_plash_imp_rsn_dsc", this);
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

            obj = new Dataset("ds_vhcno", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PHD_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_VHC_PHD_IDVD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"VHCNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dqpd_rsnc_c", this);
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

            obj = new Dataset("ds_bizDtYn", this);
            obj._setContents("<ColumnInfo><Column id=\"BIZDY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BIZDT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_buyer", this);
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_N\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_ENO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("ds_trnrel", this);
            obj._setContents("<ColumnInfo><Column id=\"SPLR_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_CTR_CTR\" type=\"STRING\" size=\"256\"/><Column id=\"SPY_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"PD_YY\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NA_USR_SYS_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_NA_USR_SYS_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_USR_SYS_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"ROTS_FLEX_PR_APL_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("sta_back_bar14", "absolute", "69", "459", null, "29", "15", null, this);
            obj.set_taborder("350");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar08", "absolute", "69", "347", null, "29", "15", null, this);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar10", "absolute", "109", "223", null, "29", "15", null, this);
            obj.set_taborder("239");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar03", "absolute", "109", "139", null, "29", "15", null, this);
            obj.set_taborder("128");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "0", "41", "21", "246", null, this);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("div_menu", "absolute", "0", "0", null, "21", "406", null, this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar02", "absolute", "109", "111", null, "29", "15", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title01", "absolute", "0", "55", "110", "29", null, null, this);
            obj.set_taborder("5");
            obj.set_text("발주번호");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title04", "absolute", "0", "111", "110", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_text("배송예정서번호");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_odr_slpno", "absolute", "109", "55", null, "29", "15", null, this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_na_dvy_plash_slpno", "absolute", "113", "115", "155", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_readonly("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "113", "175", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("25");
            obj.set_text("[00] 미입력");
            obj.set_enable("false");

            obj = new Static("sta_back_bar05", "absolute", "109", "167", null, "29", "15", null, this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pagename01", "absolute", "0", "29", "135", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_text("Master 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pagename03", "absolute", "0", "296", "180", "21", null, null, this);
            obj.set_taborder("71");
            obj.set_text("상품정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title13", "absolute", "0", "347", "110", "29", null, null, this);
            obj.set_taborder("72");
            obj.set_text("상품코드");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar07", "absolute", "0", "319", null, "29", "15", null, this);
            obj.set_taborder("105");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_treatment00", "absolute", "7", "323", "150", "21", null, null, this);
            obj.set_taborder("106");
            obj.set_text("처리대상건수(최대100) :");
            this.addChild(obj.name, obj);

            obj = new Static("sta_grd_master_cnt", "absolute", "143", "323", "25", "21", null, null, this);
            obj.set_taborder("107");
            obj.set_text("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear", "absolute", "741", "323", "47", "21", null, null, this);
            obj.set_taborder("112");
            obj.set_text("CLEAR");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_rowUpdate", "absolute", "664", "323", "75", "21", null, null, this);
            obj.set_taborder("113");
            obj.set_text("행추가/수정");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_treat_count02", "absolute", "167", "323", "25", "21", null, null, this);
            obj.set_taborder("121");
            obj.set_text("건");
            this.addChild(obj.name, obj);

            obj = new Button("btn_init", "absolute", null, "0", "53", "21", "289", null, this);
            obj.set_taborder("125");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title06", "absolute", "294", "111", "110", "29", null, null, this);
            obj.set_taborder("126");
            obj.set_text("배송지");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title05", "absolute", "294", "139", "110", "29", null, null, this);
            obj.set_taborder("129");
            obj.set_text("납품요청일자");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title24", "absolute", "0", "139", "110", "29", null, null, this);
            obj.set_taborder("131");
            obj.set_text("배송예정일자");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pup_van_seq", "absolute", "356", "59", "21", "21", null, null, this);
            obj.set_taborder("136");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "280", "803", "20", null, null, this);
            obj.set_taborder("147");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_na_wrs_c", "absolute", "203", "351", "121", "21", null, null, this);
            obj.set_taborder("182");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_wrsnm", "absolute", "326", "351", "195", "21", null, null, this);
            obj.set_taborder("183");
            obj.set_maxlength("12");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.set_enableevent("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popup00", "absolute", "525", "351", "21", "21", null, null, this);
            obj.set_taborder("185");
            obj.set_cssclass("btn_WF_Searchbtn");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "377", "21", "334", null, this);
            obj.set_taborder("209");
            obj.set_text("Div00");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popup01", "absolute", "270", "115", "21", "21", null, null, this);
            obj.set_taborder("211");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_odr_dt", "absolute", "113", "59", "98", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("222");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");

            obj = new Edit("edt_odr_slpno", "absolute", "213", "59", "140", "21", null, null, this);
            obj.set_taborder("223");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dvy_rqr_dt", "absolute", "407", "143", "98", "21", null, null, this);
            obj.set_taborder("227");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_dvy_pla_dt", "absolute", "113", "143", "105", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("228");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Edit("edt_na_odr_sts_dsc", "absolute", "597", "171", "184", "21", null, null, this);
            obj.set_taborder("230");
            obj.set_maxlength("12");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar04", "absolute", "109", "195", null, "29", "15", null, this);
            obj.set_taborder("233");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar11", "absolute", "109", "251", null, "29", "15", null, this);
            obj.set_taborder("245");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title10", "absolute", "294", "223", "110", "29", null, null, this);
            obj.set_taborder("246");
            obj.set_text("운임보조비");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title12", "absolute", "0", "223", "110", "29", null, null, this);
            obj.set_taborder("247");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            obj.set_text("배송예정금액");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_dvy_far_astcs", "absolute", "407", "227", "98", "21", null, null, this);
            obj.set_taborder("250");
            obj.set_value("0");
            obj.set_mask("#,##0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_total_dvy_am", "absolute", "113", "227", "88", "21", null, null, this);
            obj.set_taborder("252");
            obj.set_value("0");
            obj.set_mask("#,##0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_total_dvy_vat", "absolute", "203", "227", "88", "21", null, null, this);
            obj.set_taborder("253");
            obj.set_value("0");
            obj.set_mask("#,##0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title22", "absolute", "0", "195", "110", "29", null, null, this);
            obj.set_taborder("256");
            obj.set_text("공급유형");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_spy_tpc", "absolute", "113", "199", "178", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_spy_tpc_innerdataset = new Dataset("cbo_spy_tpc_innerdataset", this.cbo_spy_tpc);
            cbo_spy_tpc_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\"/></Row><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">매취</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">수탁</Col></Row><Row><Col id=\"codecolumn\">16</Col><Col id=\"datacolumn\">특약</Col></Row></Rows>");
            obj.set_innerdataset(cbo_spy_tpc_innerdataset);
            obj.set_taborder("257");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");

            obj = new Static("sta_title29", "absolute", "294", "167", "110", "29", null, null, this);
            obj.set_taborder("266");
            obj.set_text("배송차량및상태");
            obj.set_cssclass("sta_WF_Label");
            obj.set_enable("true");
            obj.style.set_color("black");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Button("btn_help", "absolute", null, "0", "53", "21", "16", null, this);
            obj.set_taborder("293");
            obj.set_text("도움말");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button22", "absolute", null, "0", "77", "21", "124", null, this);
            obj.set_taborder("294");
            obj.set_text("거래명세서");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title09", "absolute", "0", "167", "110", "29", null, null, this);
            obj.set_taborder("298");
            obj.set_text("배송차량구분");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_dvy_vhc_dsc", "absolute", "113", "172", "180", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_dvy_vhc_dsc_innerdataset = new Dataset("rdo_dvy_vhc_dsc_innerdataset", this.rdo_dvy_vhc_dsc);
            rdo_dvy_vhc_dsc_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">발주처</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">수주처</Col></Row></Rows>");
            obj.set_innerdataset(rdo_dvy_vhc_dsc_innerdataset);
            obj.set_taborder("299");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("2");
            obj.set_direction("vertical");
            obj.style.set_font("9 Gulim");
            obj.set_enable("false");
            obj.set_index("1");

            obj = new Edit("edt_dvyaa_n", "absolute", "407", "115", "81", "21", null, null, this);
            obj.set_taborder("300");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pre_cd_good", "absolute", "112", "351", "89", "21", null, null, this);
            obj.set_taborder("269");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("true");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar01", "absolute", "109", "83", null, "29", "15", null, this);
            obj.set_taborder("303");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title07", "absolute", "0", "83", "110", "29", null, null, this);
            obj.set_taborder("304");
            obj.set_text("발주처");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_orpl_na_trpl_c", "absolute", "113", "87", "113", "21", null, null, this);
            obj.set_taborder("305");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_shrt_bzplnm", "absolute", "229", "87", "235", "21", null, null, this);
            obj.set_taborder("306");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.set_imemode("hangul");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_orpl_na_team_c", "absolute", "468", "87", "62", "21", null, null, this);
            obj.set_taborder("308");
            obj.set_maxlength("3");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_teamnm", "absolute", "532", "87", "140", "21", null, null, this);
            obj.set_taborder("309");
            obj.set_maxlength("12");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_h_is_od_be_order", "absolute", "109", "35", "123", "21", null, null, this);
            obj.set_taborder("321");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("false");
            obj.set_displaynulltext("배송예정서 작성여부");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_na_odr_sts_dsc_n", "absolute", "517", "171", "78", "21", null, null, this);
            obj.set_taborder("322");
            obj.set_maxlength("12");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            obj.set_value("배송예정");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_vhcno", "absolute", "407", "171", "107", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("323");
            obj.set_codecolumn("VHCNO");
            obj.set_datacolumn("VHCNO");
            obj.set_innerdataset("@ds_vhcno");

            obj = new Static("sta_title08", "absolute", "294", "195", "110", "29", null, null, this);
            obj.set_taborder("325");
            obj.set_text("직인파일");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_temp_yn", "absolute", "232", "36", "86", "19", null, null, this);
            obj.set_taborder("326");
            obj.set_text("임시저장");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.style.set_font("9 Gulim");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_total_odr_vat", "absolute", "303", "255", "184", "21", null, null, this);
            obj.set_taborder("255");
            obj.set_value("0");
            obj.set_mask("#,##0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title03", "absolute", "0", "251", "110", "29", null, null, this);
            obj.set_taborder("224");
            obj.set_text("발주총액");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_total_odr_am", "absolute", "113", "255", "188", "21", null, null, this);
            obj.set_taborder("254");
            obj.set_value("0");
            obj.set_mask("#,##0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar06", "absolute", "69", "375", null, "29", "15", null, this);
            obj.set_taborder("332");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title11", "absolute", "0", "375", "110", "29", null, null, this);
            obj.set_taborder("333");
            obj.set_text("규격 및 단위");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_wrs_stdnm", "absolute", "113", "379", "145", "21", null, null, this);
            obj.set_taborder("301");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "109", "404", "154", "20", null, null, this);
            obj.set_taborder("334");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00", "absolute", "262", "375", "110", "29", null, null, this);
            obj.set_taborder("335");
            obj.set_text("단위");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_na_wrs_unt_c", "absolute", "375", "379", "145", "21", null, null, this);
            obj.set_taborder("302");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "371", "404", "154", "20", null, null, this);
            obj.set_taborder("336");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title18", "absolute", "524", "375", "110", "29", null, null, this);
            obj.set_taborder("81");
            obj.set_text("BOX입수");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_boxpe_aqz", "absolute", "637", "379", "145", "21", null, null, this);
            obj.set_taborder("273");
            obj.set_value("0");
            obj.set_mask("#,##0");
            obj.set_enable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar09", "absolute", "69", "403", null, "29", "15", null, this);
            obj.set_taborder("338");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title16", "absolute", "0", "403", "110", "29", null, null, this);
            obj.set_taborder("190");
            obj.set_text("수주량");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_odr_qt", "absolute", "113", "407", "145", "21", null, null, this);
            obj.set_taborder("272");
            obj.set_value("0");
            obj.set_mask("#,##0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title17", "absolute", "262", "403", "110", "29", null, null, this);
            obj.set_taborder("193");
            obj.set_text("배송예정량");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_dvy_pla_qt", "absolute", "375", "407", "145", "21", null, null, this);
            obj.set_taborder("271");
            obj.set_value("0");
            obj.set_mask("#,##0");
            obj.set_enable("true");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title19", "absolute", "524", "403", "110", "29", null, null, this);
            obj.set_taborder("194");
            obj.set_text("계약단가");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_color("black");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_odr_pcs", "absolute", "637", "407", "145", "21", null, null, this);
            obj.set_taborder("280");
            obj.set_value("0");
            obj.set_mask("#,##0.99");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "109", "432", "154", "20", null, null, this);
            obj.set_taborder("339");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "371", "432", "154", "20", null, null, this);
            obj.set_taborder("340");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar13", "absolute", "69", "431", null, "29", "15", null, this);
            obj.set_taborder("341");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title14", "absolute", "0", "431", "110", "29", null, null, this);
            obj.set_taborder("342");
            obj.set_text("납품단가");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title25", "absolute", "262", "431", "110", "29", null, null, this);
            obj.set_taborder("344");
            obj.set_text("금액");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title26", "absolute", "524", "431", "110", "29", null, null, this);
            obj.set_taborder("346");
            obj.set_text("부가세");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_color("black");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_odr_vat", "absolute", "637", "435", "145", "21", null, null, this);
            obj.set_taborder("278");
            obj.set_value("0");
            obj.set_mask("#,##0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_odr_am", "absolute", "375", "435", "145", "21", null, null, this);
            obj.set_taborder("277");
            obj.set_value("0");
            obj.set_mask("#,##0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title28", "absolute", "524", "459", "110", "29", null, null, this);
            obj.set_taborder("351");
            obj.set_text("공급가능일자");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title30", "absolute", "0", "459", "110", "29", null, null, this);
            obj.set_taborder("352");
            obj.set_text("결품사유");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_dqpd_rsnc", "absolute", "113", "463", "406", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("320");
            obj.set_innerdataset("@ds_dqpd_rsnc_c");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");

            obj = new MaskEdit("mae_dvy_wrs_upr", "absolute", "113", "435", "145", "21", null, null, this);
            obj.set_taborder("274");
            obj.set_mask("#,##0.99");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_del_yn", "absolute", "364", "301", "46", "19", null, null, this);
            obj.set_taborder("207");
            obj.set_text("삭제");
            obj.set_enable("true");
            obj.style.set_font("9 Gulim");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_value("N");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "-3", "50", "50", "5", null, null, this);
            obj.set_taborder("353");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popup02", "absolute", "490", "115", "21", "21", null, null, this);
            obj.set_taborder("355");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popup", "absolute", "674", "87", "21", "21", null, null, this);
            obj.set_taborder("356");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_vcbt_upr", "absolute", "597", "285", "93", "18", null, null, this);
            obj.set_taborder("357");
            obj.set_displaynulltext("공병단가");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_vcbx_upr", "absolute", "690", "285", "93", "18", null, null, this);
            obj.set_taborder("358");
            obj.set_displaynulltext("공상자단가");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_txt_dsc", "absolute", "479", "285", "118", "18", null, null, this);
            obj.set_taborder("359");
            obj.set_displaynulltext("과세구분");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title02", "absolute", "519", "111", "110", "29", null, null, this);
            obj.set_taborder("361");
            obj.set_text("배송처/팀");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dvyaa_na_trpl_c", "absolute", "632", "115", "118", "21", null, null, this);
            obj.set_taborder("362");
            obj.set_maxlength("12");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dvyaa_na_team_c", "absolute", "752", "115", "30", "21", null, null, this);
            obj.set_taborder("363");
            obj.set_maxlength("12");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pd_yy_amn_yn", "absolute", "361", "285", "118", "18", null, null, this);
            obj.set_taborder("364");
            obj.set_displaynulltext("생산년도관리여부");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pd_yy", "absolute", "243", "285", "118", "18", null, null, this);
            obj.set_taborder("365");
            obj.set_displaynulltext("생산년도");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_spy_psb_dt", "absolute", "637", "463", "145", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("366");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static01", "absolute", "788", "-1", "15", "145", null, null, this);
            obj.set_taborder("134");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload00", "absolute", "405", "199", "280", "21", null, null, this);
            obj.set_taborder("135");
            obj.set_multiselect("true");
            obj.getSetter("timeout").set("0");
            obj.getSetter("retry").set("0");
            obj.getSetter("async").set("true");
            obj.getSetter("onload").set("FileUpload00_onload");
            obj.style.set_buttonsize("60");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title27", "absolute", "519", "139", "110", "29", null, null, this);
            obj.set_taborder("368");
            obj.set_text("매취수탁구분");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_slgt_etr_dsc", "absolute", "632", "143", "149", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_slgt_etr_dsc_innerdataset = new Dataset("cbo_slgt_etr_dsc_innerdataset", this.cbo_slgt_etr_dsc);
            cbo_slgt_etr_dsc_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">[ 선택안됨 ]</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">매취</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">수탁</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">기타</Col></Row></Rows>");
            obj.set_innerdataset(cbo_slgt_etr_dsc_innerdataset);
            obj.set_taborder("369");
            obj.set_text("[ 선택안됨 ]");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");

            obj = new Edit("edt_vcbt_na_wrs_c", "absolute", "125", "285", "118", "18", null, null, this);
            obj.set_taborder("370");
            obj.set_displaynulltext("공병상품코드");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_min_odr_qt", "absolute", "125", "302", "118", "18", null, null, this);
            obj.set_taborder("371");
            obj.set_displaynulltext("최소발주수량");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancle", "absolute", null, "0", "41", "21", "203", null, this);
            obj.set_taborder("374");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enableevent("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pgnm", "absolute", "221", "143", "70", "21", null, null, this);
            obj.set_taborder("375");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_vcbt_qt", "absolute", "243", "302", "118", "18", null, null, this);
            obj.set_taborder("376");
            obj.set_visible("false");
            obj.set_displaynulltext("공병수량");
            this.addChild(obj.name, obj);

            obj = new Button("btn_f_cancel", "absolute", "686", "199", "50", "21", null, null, this);
            obj.set_taborder("377");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title23", "absolute", "519", "251", "110", "29", null, null, this);
            obj.set_taborder("127");
            obj.set_text("계약유형");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_cser_ctr_tpc", "absolute", "632", "255", "149", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("225");
            obj.set_innerdataset("@ds_ctr_tpc");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_codecolumn("SIMP_C");
            obj.set_enable("false");
            obj.set_index("-1");

            obj = new Static("sta_title15", "absolute", "519", "223", "66", "29", null, null, this);
            obj.set_taborder("378");
            obj.set_text("비      고");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_rmk_cntn", "absolute", "587", "227", "195", "21", null, null, this);
            obj.set_taborder("379");
            this.addChild(obj.name, obj);

            obj = new Edit("ozType", "absolute", "815", "53", "56", "18", null, null, this);
            obj.set_taborder("380");
            obj.set_visible("false");
            obj.set_value("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_qt", "absolute", "603", "323", "59", "21", null, null, this);
            obj.set_taborder("381");
            obj.set_text("배송량 0");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_master", "absolute", "0", "503", null, "393", "16", null, this);
            obj.set_taborder("383");
            obj.set_binddataset("ds_dataD");
            obj.set_useselcolor("true");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"121\"/><Column size=\"330\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"상품코드\"/><Cell col=\"2\" rowspan=\"2\" text=\"상품명\"/><Cell col=\"3\" rowspan=\"2\" text=\"규격 및 단위\"/><Cell col=\"4\" rowspan=\"2\" text=\"BOX입수\"/><Cell col=\"5\" text=\"수주량\"/><Cell col=\"6\" text=\"계약단가\"/><Cell col=\"7\" text=\"금액\"/><Cell col=\"8\" text=\"장려금율\"/><Cell col=\"9\" rowspan=\"2\" text=\"삭제\"/><Cell row=\"1\" col=\"5\" text=\"배송예정량\"/><Cell row=\"1\" col=\"6\" text=\"납품단가\"/><Cell row=\"1\" col=\"7\" text=\"부가세\"/><Cell row=\"1\" col=\"8\" text=\"장려금\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" text=\"bind:DVY_PLA_SQNO\"/><Cell col=\"1\" rowspan=\"2\" style=\"align:center;\" text=\"bind:NA_WRS_C\"/><Cell col=\"2\" rowspan=\"2\" style=\"align:left;\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:WRSNM\"/><Cell col=\"3\" rowspan=\"2\" style=\"align:left;\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:WRS_STDNM\"/><Cell col=\"4\" rowspan=\"2\" displaytype=\"number\" style=\"align: ;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:BOXPE_AQZ\" mask=\"#,##0\"/><Cell col=\"5\" displaytype=\"number\" style=\"align: ;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_QT\" mask=\"#,##0\"/><Cell col=\"6\" displaytype=\"number\" style=\"align: ;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_PCS\" mask=\"#,##0.99\"/><Cell col=\"7\" displaytype=\"number\" style=\"align: ;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_AM\" mask=\"#,##0\"/><Cell col=\"8\" style=\"align: ;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:SSDYRT\"/><Cell col=\"9\" rowspan=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"cursor:pointer;\" text=\"bind:DEL_YN\"/><Cell row=\"1\" col=\"5\" displaytype=\"number\" style=\"align: ;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DVY_PLA_QT\" mask=\"#,##0\"/><Cell row=\"1\" col=\"6\" displaytype=\"number\" style=\"align: ;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DVY_WRS_UPR\" mask=\"#,##0.99\"/><Cell row=\"1\" col=\"7\" displaytype=\"number\" style=\"align: ;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_VAT\" mask=\"#,##0\"/><Cell row=\"1\" col=\"8\" style=\"align: ;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:SSDY_BAS_AM\" mask=\"#,##0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1540");
            		p.set_titletext("배송예정서 공판장등록");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item18","cbo_slgt_etr_dsc","value","ds_dataM","SLGT_ETR_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edt_orpl_na_trpl_c","value","ds_dataM","ODRPL_NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edt_shrt_bzplnm","value","ds_dataM","SHRT_BZPLNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_orpl_na_team_c","value","ds_dataM","ODRPL_NA_TEAM_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edt_teamnm","value","ds_dataM","TEAMNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_dvyaa_n","value","ds_dataM","DVYAA_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","cbo_cser_ctr_tpc","value","ds_dataM","CSER_CTR_TPC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edt_dvy_rqr_dt","value","ds_dataM","DVY_RQR_CNTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","rdo_dvy_vhc_dsc","value","ds_dataM","DVY_VHC_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","cbo_spy_tpc","value","ds_dataM","SPY_TPC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","mae_total_odr_am","value","ds_dataM","TOTAL_ODR_AM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","mae_total_odr_vat","value","ds_dataM","TOTAL_ODR_VAT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","mae_total_dvy_am","value","ds_dataM","TOTAL_DVY_AM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","mae_total_dvy_vat","value","ds_dataM","TOTAL_DVY_VAT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","edt_h_is_od_be_order","value","ds_dataM","IS_OD_BE_ORDER");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","edt_na_odr_sts_dsc","value","ds_dataM","NA_ODR_STS_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","cbo_vhcno","value","ds_dataM","VHCNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","edt_odr_slpno","value","ds_dataM","ODR_SLPNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","cal_dvy_pla_dt","value","ds_dataM","DVY_PLA_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","mae_dvy_far_astcs","value","ds_dataM","DVY_FAR_ASTCS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","chk_temp_yn","value","ds_dataM","TEMP_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","edt_dvyaa_na_trpl_c","value","ds_dataM","DVYAA_NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","edt_dvyaa_na_team_c","value","ds_dataM","DVYAA_NA_TEAM_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","cal_spy_psb_dt","value","ds_dataM","SPY_PSB_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","cal_odr_dt","value","ds_dataM","ODR_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","edt_pgnm","value","ds_dataM","PGNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","edt_na_odr_sts_dsc_n","value","ds_dataM","DVY_PLASH_STSC_N");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","edt_rmk_cntn","value","ds_dataM","RMK_CNTN");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
            this._addPreloadList("fdl", "common::AuthorityWorkplace.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_0311.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0311.xfdl", function() {
        //include "lib::comLib.xjs";
        /*##################################################################################
         화면명	: 일반등록
         화면ID  	: VAN_DS_SC_0300
         작성자 	: swha
          작성일자 : 2015.07.08
        ####################################################################################*/
        /***************************************************************************************
        	code        : 호출할 공통코드
        	dsName      : 호출된 공통코드를 담을 Dataset
        	selecttype  : ComboBox 최상단에 추가할 문구( A: -전체-, S:-선택-, N: 빈칸)
        	  
        	selecttype은 추후 변경될 수 있음.
        	this.fn_commonAfterOnload를 화면에 선언하면 gfn_setCommonCode처리후 호출됨.
        *****************************************************************************************/
        var var_odrpl_na_trpl_c 	= ""; 		//발주처코드
        var var_odrpl_na_team_c 	= ""; 		//발주처팀코드
        var var_odr_dt 				= ""; 		//발주일자
        var var_odr_slpno 			= ""; 		//발주전표번호
        var var_dlvpnsht_temp_yn 	= "E"; 		//배송예정서 작성여부(X : 미작성, Y : 임시저장, N : 작성완료, E : 무발주)
        var var_spypl_na_trpl_c 	= ""; 		//공급처코드
        var var_spypl_na_team_c 	= ""; 		//공급처팀코드
        var var_dvyaa_na_trpl_c 	= ""; 		//배송처코드
        var var_dvyaa_na_team_c 	= "";		//배송처팀코드
        var var_na_dvy_plash_slpno 	= "";		//배송예정서전표번호
        var var_ddly_yn 			= "";		//직송여부
        var var_prgr_c				= "";		//가격군코드
        var var_cser_na_usr_sys_kdc = "";		//발주자시스템코드
        var var_cser_ctr_tpc 		= "";		//계약유형코드(ds_geja)
        var var_spy_tpc				= "";		//공급유형
        var var_wr_pre_date			= "";		//배송예정일자 가능일자 From
        var	var_next_date			= "";		//배송예정일자 가능일자 To
        var var_na_vcbt_wrs_c		= "";		//공병상품코드
        var var_min_odr_qt			= "";		//최소발주수량
        var var_rots_flex_pr_apl_yn = "";		//탄력가격적용업체여부
        var bizdyYn = "";//휴일여부
        this.fn_varView = function(search){
        	var varInfo = 	"var_odrpl_na_trpl_c:" + var_odrpl_na_trpl_c 			+ " \n" + 
        					"var_odrpl_na_team_c:" + var_odrpl_na_team_c 			+ " \n" + 
        					"var_odr_dt:" + var_odr_dt 								+ " \n" + 
        					"var_odr_slpno:" + var_odr_slpno 						+ " \n" + 
        					"var_dlvpnsht_temp_yn:" + var_dlvpnsht_temp_yn 			+ " \n" + 
        					"var_spypl_na_trpl_c:" + var_spypl_na_trpl_c 			+ " \n" + 
        					"var_spypl_na_team_c:" + var_spypl_na_team_c 			+ " \n" + 
        					"var_dvyaa_na_trpl_c:" + var_dvyaa_na_trpl_c 			+ " \n" + 
        					"var_dvyaa_na_team_c:" + var_dvyaa_na_team_c 			+ " \n" + 
        					"var_na_dvy_plash_slpno:" + var_na_dvy_plash_slpno 		+ " \n" + 
        					"var_ddly_yn:" + var_ddly_yn 							+ " \n" + 
        					"var_prgr_c:" + var_prgr_c 								+ " \n" + 
        					"var_cser_na_usr_sys_kdc:" + var_cser_na_usr_sys_kdc 	+ " \n" + 
        					"var_cser_ctr_tpc:" + var_cser_ctr_tpc + " \n" 			+ 
        					"var_spy_tpc:" + var_spy_tpc
        	//trace("varInfo : " + varInfo);
        }

        var dataDArr = new Array('NA_WRS_C'
        							,'WRSNM'
        							,'BOXPE_AQZ'
        							,'WRS_STDNM'
        							,'NA_WRS_UNT_C'
        							,'ODR_QT'
        							,'ODR_PCS'
        							,'ODR_VAT'
        							,'ODR_AM'
        							,'DEL_YN'
        							,'DVY_PLA_QT'
        							,'DQPD_RSNC'
        							,'VCBT_UPR'
        							,'VCBX_UPR'
        							,'ODR_VAT'
        							,'DVY_WRS_UPR'
        							,'SPY_PSB_DT'
        							,'TXT_DSC'
        							,'VCBT_NA_WRS_C'
        							,'VCBT_QT'
        						);
        var wrsInfoArr = new Array('edt_na_wrs_c'
        						,'edt_wrsnm'
        						,'mae_boxpe_aqz'
        						,'edt_wrs_stdnm'
        						,'edt_na_wrs_unt_c'
        						,'mae_odr_qt'
        						,'mae_odr_pcs'
        						,'mae_odr_vat'
        						,'mae_odr_am'
        						,'chk_del_yn'
        						,'mae_dvy_pla_qt'
        						,'cbo_dqpd_rsnc'
        						,'mae_vcbt_upr'
        						,'mae_vcbx_upr'
        						,'mae_odr_vat'
        						,'mae_dvy_wrs_upr'
        						,'cal_spy_psb_dt'
        						,'edt_txt_dsc'
        						,'edt_vcbt_na_wrs_c'
        						,'edt_vcbt_qt'
        					);
        					
        var postValue = '';
        var preValue = '';

        var objArr = 	[
        							 "btn_rowUpdate"
        							,"btn_clear"
        							,"cal_dvy_pla_dt"
        							,"cbo_slgt_etr_dsc"
        							,"cbo_vhcno"
        							,"mae_dvy_far_astcs"
        							,"chk_temp_yn"
        							,"btn_qt"
        				];

        var trnrelParams;

        //lsh
        /*
        var _state = 0;
        this.stateChk = function(ds, e){
           _state = e.reason;
        };
        this.chkCng = function(ds, e){

           if(_state==12 && e.columnid=='VCBX_AM'){
              _state = 0;
              return;
           }
           if(_state==12) return;
           
           if(e.columnid == "DEL_YN"){
              var msg = '';
              if(e.newvalue == 0) msg = '삭제취소 하시겠습니까?';
              else msg = '삭제하시겠습니까?';
              var result = this.confirm(msg, '', 'warning');
              var chk = 0;
              if(result) chk = e.newvalue;
              else chk = e.oldvalue;
              ds.setColumn(e.row, 'DEL_YN', chk);
              _state = 0;
              
              this.fn_sum();
              
              //백그라운드
              var grid = this.grd_master;
              var color = '#FFD8D8';
              var chkIndex = 'DEL_YN';
              
              var arr = [];
              for(var i=0; i<ds.getRowCount(); i++){
                 var v = ds.getColumn(i,chkIndex);
                 if(v==1 || v==true) arr.push(i);
              }
                
              var expr = '';
              for(var i=0; i<arr.length; i++){
                 expr += "currow == " + arr[i] + "?" + "'"+color+"':";
              }
              expr+= "''";
              var cnt = grid.getCellCount('body');
              for(var i=0 ; i < cnt ; i++){
                 grid.set_enableredraw(false);
                 grid.setCellProperty("Body", i, "style", "background:expr("+expr+")");
                 grid.setCellProperty("Body", i, "style", "background2:expr("+expr+")");
                 grid.set_enableredraw(true);
              }
           }
        }
        */
        this.form_onload = function(obj,e) 
        {
        	if (application.gv_trplDtlTpc == "0005") {
        		//lsh
        		/*
        	   var ds = this.grd_master.getBindDataset();
        	   ds.addEventHandler('oncolumnchanged',this.chkCng,this);
        	   ds.addEventHandler('onrowsetchanged',this.stateChk,this);
        	   */
        	   
        	   this.btnDisable([this.btn_save,this.btn_cancle]);
        	   
        	   var ozParam = {
        						form:this, 						//공통
        						ozBtn:this.Button22, 			//출력버튼 
        						ozFnc:'Button22_onclick'		//오즈실행 함수명
        					  };
        	   this.addOzBtnAdd(ozParam);
        	   
        	   var fileParam = {
        			form:this,													//*필수 - 폼
        			param:[{//필요없는 프로퍼티는 주석처리
        					fileObj: this.FileUpload00,							//*필수 - 파일컴포넌트
        					dataset: this.ds_uploadresult,						//파일정보 데이터셋
        					maxSize:2,											//허용할 파일 사이즈(MB)
        					maxLength:1,										//허용할 파일갯수
        					ext:['jpg','jpeg','png','gif'],						//허용할 확장자명
        					cancelBtn: this.btn_f_cancel,						//취소버튼 컴포넌트
        					cancel_after:function(){							//취소버튼 눌렀을때 실행
        						
        					},
        					//valid_after_fail: 'FileUpload00_onerror',  		//파일검사 실패후 호출할 함수명 또는 함수(업로드전)
        					upload_after_succ: 'FileUpload00_onsuccess'	      	//파일 업로드 성공후 호출할 함수명 또는 함수(업로드후)
        					//upload_after_fail: 'FileUpload00_onerror'  	   	//파일 업로드 실패후 호출할 함수명 또는 함수(업로드후)
        				}]
        		};
        		this.gfn_addEventFileUpload(fileParam);							//이벤트 등록
        		
        		//그리드클릭 이벤트 등록
        		this.grd_master.addEventHandler("oncellclick", this.grd_afterFnc, this);
        		this.authChkDisable();//권한사업장 체크박스 비활성화
        		this.grd_master.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        		this.gfn_setInitForm(obj,e);//공통
        		
        		var param = [  
        			{code:"CTR_TPC",   dsName:"ds_ctr_tpc",   selecttype:"N"},//계약유형
        			{code:"BOX_DSC",   dsName:"ds_box_dsc",   selecttype:"N"}, //박스구분
        			{code:"DQPD_RSNC",   dsName:"ds_dqpd_rsnc_c",   selecttype:"N"} //결품사유코드
        		];
        		this.gfn_setCommonCode(param);
        		
        		this.edt_orpl_na_trpl_c.setFocus();
        	} else {
        		alert("중도매인(공판장)이 아닌 협력업체는 사용할 수 없는 화면입니다.");
        		application.afrm_FrameSet.frames['01003015'].form.close();
        		return;
        	}
        };

        this.fn_afterFormOnload = function(){
        	if (application.gv_trplDtlTpc == "0005") {
        		var today = this.gfn_today('yyyyMMdd');
        		//배송예정일 체크
        		var_wr_pre_date = this.gfn_minusDate(today, 31);
        		var_next_date = this.gfn_addDate(today, 14);
        		 
        		this.cal_odr_dt.set_value(today);
        		//this.cal_dvy_pla_dt.set_value(this.gfn_addDate(today, 1));
        		this.cal_dvy_pla_dt.set_value(today);
        		
        		
        		var trplC = "";
        		trplC = (application.gv_glnCode).substr(0, 7);
        		this.edt_pre_cd_good.set_value(trplC);
        		this.cbo_slgt_etr_dsc.set_index(1);
        		this.fn_setVhcno();//차량번호 Setting
        	}
        	
        };

        //공통코드 데이터셋 onload후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        	//trace("fn_commonAfterOnload");
        	//this.div_search.cbo_contract_type.set_index(0);
        }

        

        //UPLOAD
        this.FileUpload00_onsuccess = function(obj,e)
        {
        	
        	this.ds_uploadresult.clear();
        	this.ds_uploadresult.copyData(e.datasets[0]);		
        	this.ds_uploadresult.addColumn("CHK", "string"); //멀티건 인경우 'CHK'컬럼추가
        	trace("SystemFileName="+this.ds_uploadresult.getColumn(0,"SYSTEMFILENAME"));
        }
        /*
        this.FileUpload00_onitemchanged = function(obj:FileUpload,  e:nexacro.FileUploadItemChangeEventInfo)
        {
        	this.gfn_callUpload(obj);
        }

        this.FileUpload00_onsuccess = function(obj:FileUpload,  e:nexacro.FileUploadEventInfo)
        {
        	if( e.datasets == null )
        	{
        		trace("업로드 실패");
        		//this.div_search.txa_excel00.set_value("업로드 실패");
        	} else {
        		trace("업로드 성공");
        		//this.div_search.txa_excel00.set_value("업로드 성공");
        		
        		//this.edt_data00.set_value("업로드 성공");
        		this.ds_uploadresult.clear();
        		this.ds_uploadresult.copyData(e.datasets[0]);		
        		this.ds_uploadresult.addColumn("CHK", "string"); //멀티건 인경우 'CHK'컬럼추가
        		trace("SystemFileName="+this.ds_uploadresult.getColumn(0,"SYSTEMFILENAME"));
        	}	
        }

        this.FileUpload00_onerror = function(obj:FileUpload,  e:nexacro.FileUploadErrorEventInfo)
        {
        	trace("FileUpload00_onerror");
        	trace("e.errorcode: "+e.errorcode);
        	trace("e.errormsg: "+e.errormsg);
        }
        //Validation Check
        this.fFileOpenValid = function(){
        	return true;
        }
        */

        this.btn_pup_van_seq_onclick = function(obj,e)
        {
        	var trplC = this.getTrplCode();//권한사업장
        	var opt_odr_dt = this.gfn_nullToEmpty(this.cal_odr_dt.value);
        	var oArg = {opt_odr_dt:opt_odr_dt, form_id:"VAN_DS_SC_0300", ddly_yn:'0', trplC:trplC, DSTR_TER_YN:'N'};
        	var sOption = "autosize=true,title=false";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("retrieveOrdersPopUp","SCM.EVENT::VAN_DS_FN_0204.xfdl",oArg,sOption,sPopupCallBack);
        }

        /*Grid Init*/
        this.fn_init = function(){
        	this.btn_clear_onclick(); //wrs init
        }

        this.btn_clear_onclick = function(obj,e)
        {
        	this.fn_detail_clear();
        	//this.edt_na_wrs_c.set_value(this.edt_pre_cd_good.value);
        	this.edt_na_wrs_c.setFocus();
        	this.edt_na_wrs_c.setCaretPos(-1);
        	this.edt_na_wrs_c.set_enable(true);
        	this.edt_wrsnm.set_enable(true);
        }

        this.fn_detail_clear = function(){
        	for(var i = 0; i < wrsInfoArr.length; i++){		
        		var obj = wrsInfoArr[i];
        		if(obj.indexOf('mae') > -1){
        			eval("this."+wrsInfoArr[i]+".set_value(0);");
        		}else if(obj.indexOf('edt') > -1){
        			eval("this."+wrsInfoArr[i]+".set_value('');");
        		}else if(obj.indexOf('chk') > -1){
        			eval("this."+wrsInfoArr[i]+".set_value('N');");
        		}else if(obj.indexOf('cbo') > -1){
        			eval("this."+wrsInfoArr[i]+".set_index(-1);");
        		}else{
        			eval("this."+wrsInfoArr[i]+".set_value('');");
        		}
        	}
        }

        

        /* Search */
        this.fn_search = function(){

        	trace("배송예정서 작성 여부 : " + var_dlvpnsht_temp_yn);
        	
        	
        	if(var_dlvpnsht_temp_yn == "X"){
        		trace("배송예정서 미작성");
        		this.fn_srhOrder();
        	}
        	
        	if(var_dlvpnsht_temp_yn == "Y"){
        		trace("배송예정서 임시저장");
        		this.fn_srhDeliveryNotice();
        	}
        	
        	if(var_dlvpnsht_temp_yn == "" || var_dlvpnsht_temp_yn == "N"){
        		trace("배송예정서 작성완료");
        		this.fn_srhDeliveryNotice();
        	}
        	
        	
        	
        }

        
        /* 배송예정서 조회 */
        this.fn_srhDeliveryNotice = function(){
        	var spypl_na_trpl_c = var_spypl_na_trpl_c;
        	var dvyaa_na_trpl_c = var_dvyaa_na_trpl_c;
        	var na_dvy_plash_slpno = var_na_dvy_plash_slpno;
        	
        	

        	var params =   "spypl_na_trpl_c=" + spypl_na_trpl_c
        				 + " dvyaa_na_trpl_c=" + dvyaa_na_trpl_c
        				 + " na_dvy_plash_slpno=" + na_dvy_plash_slpno;
        	
        	trace("배송예정서 params : " + params);
        	
        	var sSvcID        = "getDeliveryNoticeOrder";//통신아이디
        	var sURL          = "svc::/rest/scm/delivery/brokerageWholesaler/getDeliveryNoticeOrder";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_dataM=ds_dataM ds_dataD=ds_dataD";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        	
        	
        }

        /* 발주정보 조회 */
        this.fn_srhOrder = function(){
        	var odrpl_na_trpl_c = var_odrpl_na_trpl_c;
        	var odrpl_na_team_c = var_odrpl_na_team_c;
        	var odr_dt = var_odr_dt;
        	var odr_slpno = var_odr_slpno;
        	
        	var params =   " odrpl_na_trpl_c=" + odrpl_na_trpl_c
        				 + " odrpl_na_team_c=" + odrpl_na_team_c
        				 + " odr_dt=" + odr_dt
        				 + " odr_slpno=" + odr_slpno
        				 
        	
        	trace("fn_srhOrder params : " + params);
        				
        	var sSvcID        = "getOrder";//통신아이디
        	var sURL          = "svc::/rest/scm/delivery/brokerageWholesaler/getOrder";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_dataM=ds_dataM ds_dataD=ds_dataD";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        

        
        /* User Function */
        //공급처 차량조회
        this.fn_setVhcno = function(){
        	
        	var sSvcID        = "retrieveVhcno";//통신아이디
        	var sURL          = "svc::/rest/scm/delivery/brokerageWholesaler/retrieveVhcno";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_vhcno=ds_vhcno";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = "";// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        
        this.btn_init_onclick = function(obj,e)
        {
        	this.reload();
        }

        

        

        // 상품 Click시 lsh
        this.grd_afterFnc = function(obj,e)
        {
        	if(e.cell == 17){
        		this.fn_sum();
        	}else{
        		this.edt_na_wrs_c.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"NA_WRS_C"));
        		this.edt_wrsnm.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"WRSNM"));
        		this.mae_boxpe_aqz.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"BOXPE_AQZ"));
        		this.edt_wrs_stdnm.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"WRS_STDNM"));
        		this.edt_na_wrs_unt_c.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"NA_WRS_UNT_C"));
        		this.mae_odr_qt.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"ODR_QT"));
        		this.mae_odr_pcs.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"ODR_PCS"));
        		this.mae_odr_vat.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"ODR_VAT"));
        		this.mae_odr_am.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"ODR_AM"));
        		this.chk_del_yn.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"DEL_YN"));
        		this.mae_dvy_pla_qt.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"DVY_PLA_QT"));
        		this.cbo_dqpd_rsnc.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"DQPD_RSNC"));
        		this.mae_dvy_wrs_upr.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"DVY_WRS_UPR"));
        		this.mae_vcbt_upr.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"VCBT_UPR"));
        		this.mae_vcbx_upr.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"VCBX_UPR"));
        		this.cal_spy_psb_dt.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"SPY_PSB_DT"));
        		this.edt_txt_dsc.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"TXT_DSC"));
        		this.edt_vcbt_na_wrs_c.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"VCBT_NA_WRS_C"));
        		this.edt_min_odr_qt.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"MIN_ODR_QT"));
        		this.edt_vcbt_qt.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"VCBT_QT"));
        // 		if(var_rots_flex_pr_apl_yn == "1"){
        // 			this.mae_dvy_wrs_upr.set_enable(true);
        // 		}else if(this.gfn_nullToEmpty(this.cbo_cser_ctr_tpc.value) == '4' || this.gfn_nullToEmpty(this.cbo_cser_ctr_tpc.value) == '5'){
        // 			this.mae_dvy_wrs_upr.set_enable(true);
        // 		}
        		
        		this.edt_na_wrs_c.set_enable(false);
        		this.edt_wrsnm.set_enable(false);
        		this.mae_dvy_pla_qt.setFocus();
        		
        	}
        }

        
        this.btn_rowUpdate_onclick = function(obj,e)
        {
        		
        	
        	if(this.fn_validationDetail()){
        		this.fn_isUpdate();
        		this.fn_detail_clear();
        		this.fn_detail_hidden_clear();
        		//this.ds_dataD.set_rowposition(-1);
        		this.edt_na_wrs_c.setFocus();
        		this.edt_na_wrs_c.setCaretPos(-1);
        		this.edt_na_wrs_c.set_enable(true);
        		this.edt_wrsnm.set_enable(true);		
        	}
        }

        //detail hidden clear
        this.fn_detail_hidden_clear = function(){
        	this.edt_pd_yy.set_value('');
        	this.edt_pd_yy_amn_yn.set_value('');
        	this.edt_txt_dsc.set_value('');
        	this.mae_vcbt_upr.set_value('');
        	this.mae_vcbx_upr.set_value('');
        }

        
        this.fn_validationDetail = function(){
        	/*
        		var_dlvpnsht_temp_yn
        		(X : 미작성, Y : 임시저장, N : 작성완료, E : 무발주)
        	 */
        	var dvy_pla_qt 			= this.gfn_getNum(this.mae_dvy_pla_qt.value);//배송예정량
        	var boxpe_aqz 			= this.gfn_getNum(this.gfn_nullToEmpty(this.mae_boxpe_aqz.value));//박스입수량
        	var odr_qt 				= this.gfn_getNum(this.gfn_nullToEmpty(this.mae_odr_qt.value));//수주량
        	var dvy_am				= this.gfn_getNum(this.gfn_nullToEmpty(this.mae_odr_am.value));//배송예정금액
        	var dvy_vat				= this.gfn_getNum(this.gfn_nullToEmpty(this.mae_odr_vat.value));//배송예정금액
        	var dqpd_rsnc 			= this.gfn_nullToEmpty(this.cbo_dqpd_rsnc.value);//결품사유
        	var pd_yy_amn_yn 		= this.gfn_nullToEmpty(this.edt_pd_yy_amn_yn.value);//생산년도관리여부
            var pd_yy 				= this.gfn_nullToEmpty(this.edt_pd_yy.value);//생산년도
            var txt_dsc 			= this.gfn_nullToEmpty(this.edt_txt_dsc.value);//과세구분
        	var spy_psb_dt 			= this.gfn_nullToEmpty(this.cal_spy_psb_dt.value);//공급가능일자
        	var dvy_pla_dt			= this.gfn_nullToEmpty(this.cal_dvy_pla_dt.value);//배송예정일자
        	var dvy_wrs_upr			= this.gfn_getNum(this.mae_dvy_wrs_upr.value);//상품납품단가
        	var odr_pcs				= this.fParseFloat(this.mae_odr_pcs.value);//상품계약단가
        	var redvy_wrs_upr 		= odr_pcs * 0.3;
        	
        	
        	if ((this.gfn_trim(var_cser_na_usr_sys_kdc) =="52") || (this.gfn_trim(var_cser_na_usr_sys_kdc) =="54") && var_dlvpnsht_temp_yn == 'E') {
        		//alert("발주처가 물류센터이면 무발주 배송예정서를 작성하실 수 없습니다.");
        		//return false;
        	}
        	
        	if(this.gfn_isNull(this.edt_na_wrs_c.value) || this.gfn_isNull(this.edt_wrsnm.value) || this.gfn_isNull(this.edt_na_wrs_unt_c.value)){
        		alert("상품을 검색하여 선택해 주세요");
        		return false;
        	}
        	
        	if((dvy_wrs_upr < redvy_wrs_upr) && (dvy_wrs_upr != redvy_wrs_upr)){
        		alert("납품단가는 탄력가격제한["+redvy_wrs_upr+"]이상 입력 가능합니다.");
        		return false;
        	}
        	
        	
        // 	if(this.fParseFloat(odr_pcs) <= 0){//단가가 없는 경우 바이어 호출
        // 		
        // 		var na_wrs_n		= "";
        // 		var na_wrs_c		= "";
        // 		var na_wrs_lclc 	= "";
        // 		var na_wrs_mclc 	= "";
        // 		var na_wrs_sclc 	= "";
        // 		var na_wrs_dtcf_c 	= "";
        // 			
        // 		var dsWrsCnt = 0;
        // 		for(var i=0; i < this.ds_dataD.rowcount; i++){
        // 			var ds_na_wrs_c = this.ds_dataD.getColumn(this.ds_dataD.rowposition, "NA_WRS_C");
        // 			if(this.edt_na_wrs_c.value == ds_na_wrs_c){
        // 				dsWrsCnt = dsWrsCnt + 1;
        // 			}
        // 		}
        // 		
        // 		if(dsWrsCnt > 0){
        // 			na_wrs_n		= this.ds_dataD.getColumn(this.ds_dataD.rowposition, "WRSNM");
        // 			na_wrs_c		= this.ds_dataD.getColumn(this.ds_dataD.rowposition, "NA_WRS_C");
        // 			na_wrs_lclc 	= this.ds_dataD.getColumn(this.ds_dataD.rowposition, "NA_WRS_LCLC");
        // 			na_wrs_mclc 	= this.ds_dataD.getColumn(this.ds_dataD.rowposition, "NA_WRS_MCLC");
        // 			na_wrs_sclc 	= this.ds_dataD.getColumn(this.ds_dataD.rowposition, "NA_WRS_SCLC");
        // 			na_wrs_dtcf_c 	= this.ds_dataD.getColumn(this.ds_dataD.rowposition, "NA_WRS_DTCF_C");
        // 		}else{
        // 			na_wrs_n = this.edt_wrsnm.value;
        // 			na_wrs_c = this.edt_na_wrs_c.value;
        // 			na_wrs_lclc 	= var_na_wrs_lclc;
        // 			na_wrs_mclc 	= var_na_wrs_mclc;
        // 			na_wrs_sclc 	= var_na_wrs_sclc;
        // 			na_wrs_dtcf_c 	= var_na_wrs_dtcf_c;
        // 		}
        // 		
        // 		
        // 		var params = "";
        // 		params = 	"na_wrs_lclc=" + na_wrs_lclc
        // 					 + " na_wrs_mclc=" + na_wrs_mclc
        // 					 + " na_wrs_sclc=" + na_wrs_sclc
        // 					 + " na_wrs_dtcf_c=" + na_wrs_dtcf_c
        // 					 + " na_wrs_n=" + na_wrs_n
        // 					 + " na_wrs_c=" + na_wrs_c;
        // 					 
        // 					
        // 		trace("getBuyer params : " + params);
        // 		var sSvcID        = "getBuyer";//통신아이디
        // 		var sURL          = "svc::/rest/scm/delivery/brokerageWholesaler/getBuyer";// 호출할 서버 페이지 주소
        // 		var sInDatasets   = "";//보내는데이터셋
        // 		var sOutDatasets  = "ds_buyer=ds_buyer";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        // 		var sArgument     = params;// 파라미터
        // 		var sCallbackFunc = "fn_callBack";//콜백
        // 		var sTranType     = "S"; // U:저장/삭제, S:조회
        // 		
        // 		//API 호출
        // 		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        // 		
        // 		return false;
        // 		//바이어 호출
        // 	}
        	
        	
        	
        	if(odr_qt > 0 && (odr_qt < dvy_pla_qt)){
        		var msg = 		" 배송예정량을 수주량 보다 많이 입력할 수 없습니다. \n "
        					+ 	" 수주량 : [" + odr_qt + "] / 배송예정량 : [" + dvy_pla_qt + "]"; 
        		alert(msg);
        		return false;
        	}
        	
        	if ((this.gfn_trim(var_cser_na_usr_sys_kdc) !="52") && (this.gfn_trim(var_cser_na_usr_sys_kdc) !="54")) {
                if ((var_cser_ctr_tpc == "1" ) && (var_ddly_yn == "1")) {
                    alert("직송상품은 직송배송예정서 등록] 화면을 이용하세요");
                    return false;
                }
            }
            
        	if ((this.gfn_trim(var_cser_na_usr_sys_kdc) =="52") || (this.gfn_trim(var_cser_na_usr_sys_kdc) =="54")) {
        		if(odr_qt > 0){
        			if(odr_qt < dvy_pla_qt){
        				var msg = 		" 배송예정량을 수주량 보다 많이 입력할 수 없습니다. \n "
        					+ 	" 수주량 : [" + odr_qt + "] / 배송예정량 : [" + dvy_pla_qt + "]"; 
        				alert(msg);
        				return false;
        			}
        		}
        		
        		var svc_qt = this.gfn_getNum(this.ds_dataD.getColumn(this.ds_dataD.rowposition, "SVC_QT"));
        		if(svc_qt > 0){
        			boxpe_aqz = svc_qt;
        		}
        		if((dvy_pla_qt % boxpe_aqz) != 0){
        			var trplO = this.edt_orpl_na_trpl_c.value;
        			var trplON = this.edt_shrt_bzplnm.value;
        			
        			var msg =    "물류센터 거래의 경우 배송예정수량은 박스당입수의 배수 값을 입력해야 합니다. \n"
        						+"발주처 : " +  trplON + "[" + trplO + "] \n"
        						+"입수 배송예정량 :["+ dvy_pla_qt +"] \n"
        						+"박스당 입수 : ["+ boxpe_aqz + "]";
        			this.alert(msg);
        			return false;
        		}
        	}
            
            
            if ( pd_yy_amn_yn == "0" && pd_yy != "0000" && pd_yy.length > 0 ) {
                alert("생산년도 오류입니다.생산년도["+pd_yy+"] 관리하지 않는 상품입니다.");
                return false;
            }
            
             if ( pd_yy_amn_yn == "1" && pd_yy == "0000" ) {
                alert("생산년도 오류입니다.생산년도 관리하는 상품입니다.");
                return(false);
            }
           
            if (txt_dsc == "1" && dvy_pla_qt > 0 && dvy_am > 0 && dvy_vat == 0 ) {
                alert("부가세 오류입니다.부가세가 존재하는 상품인데 부가세가 0 입니다.");
                return(false);
            }
            
            
            
        		
        	if(this.gfn_isNull(this.edt_na_wrs_c.value)){
        		alert("상품코드를 확인하세요");
        		return false;
        	}
        	
        	if(this.gfn_isNull(this.edt_wrsnm.value)){
        		alert("상품명을 확인하세요");
        		return false;
        	}
        	
        	
        	if ( dvy_pla_qt > 0 && var_prgr_c == "00" && this.gfn_getNum(boxpe_aqz) > 0 &&
                 (dvy_pla_qt % this.gfn_getNum(boxpe_aqz)) != 0 ) {
                alert("배송예정수량["+dvy_pla_qt+"]이 박스당입수["+boxpe_aqz+"]와 맞지 않습니다");
                return;
            }
        	
        	
        	if(dvy_pla_qt == undefined){
        		dvy_pla_qt = 0;
        	}
        	
        	if(boxpe_aqz == undefined){
        		boxpe_aqz = 0;
        	}
        	
        	if(var_dlvpnsht_temp_yn == "E"){//무발주인경우
        		if(dvy_pla_qt == 0){
        			alert("배송예정량을 입력해 주세요");
        			return false;
        		}
        	}
        	
        	return true;
        }

        

        this.fn_isUpdate = function(){
        	
        	
        	
        	/*if(this.ds_dataD.getColumn(this.ds_dataD.rowposition, "NA_WRS_C") != this.edt_na_wrs_c.value){
        			alert("리스트에서 상품을 선택하신 후 수정해 주세요");
        			return false;
        	}
        	*/
        	
        	var duplicateRowCount = 0;
        	for(var i=0;i<this.grd_master.rowcount;i++){
        		var na_wrs_c = this.ds_dataD.getColumn(i,"NA_WRS_C");
        		
        		
        		if(na_wrs_c == this.edt_na_wrs_c.value){
        			++duplicateRowCount;
        			//var bok = application.confirm("[ "+this.edt_na_wrs_c.value+" / "+this.edt_wrsnm.value+" ] 는(은) 이미 등록된 자료입니다. 수정하시겠습니까 ?");
        			this.fn_rowUpdate();
        			//if(bok == true){
        			//	this.fn_rowUpdate();
        			//}else{
        			//	return false;
        			//}
        		}
        	}
        	var row = this.ds_dataD.rowposition;
        	if(duplicateRowCount == 0){//상품추가
        		if(this.gfn_isNull(this.edt_odr_slpno.value) == false || this.ds_dataM.getColumn(0, "NORDER_YN") == "0"){
        			/*
        				진로 파렛트 추가로직이 필요해 강제로 추가할수 있도록 함
        				2015.12.02
        			alert("발주 배송예정서 등록 시 상품 추가는 불가합니다.");
        			return false;
        			*/
        		}
        	
        		if(this.gfn_isNull(this.mae_dvy_pla_qt.value)){
        			alert("배송예정량을 입력해 주세요");
        			return false;
        		}
        		if(this.ds_dataD.rowcount == 100) {
        			this.alert("상품은 최대 100건 이상 등록하실수 없습니다.");
        			return;
        		}
        		row = this.ds_dataD.addRow();
        		this.fn_rowInsert(row);
        	}
        	
        	
        	this.detail_sum(1, row);//합계 계산
        	this.sta_grd_master_cnt.set_text(this.ds_dataD.rowcount);
        }

        this.fn_rowUpdate = function(row){
        	for(var i = 0; i < dataDArr.length; i++){
        		if(wrsInfoArr[i] == "chk_del_yn"){
        			if(this.chk_del_yn.value != 'N'){
        				eval("this.ds_dataD.setColumn(this.ds_dataD.rowposition, '"+dataDArr[i]+"', '1')");
        			}else{
        				eval("this.ds_dataD.setColumn(this.ds_dataD.rowposition, '"+dataDArr[i]+"', '0')");
        			}
        		}else{
        			eval("this.ds_dataD.setColumn(this.ds_dataD.rowposition, '"+dataDArr[i]+"', this."+wrsInfoArr[i]+".value)");
        		}
        	}
        }

        
        this.fn_rowInsert = function(row){
        	

        
        	for(var i = 0; i < dataDArr.length; i++){
        		eval("this.ds_dataD.setColumn("+ row +", '"+dataDArr[i]+"', this."+wrsInfoArr[i]+".value)");
        	}
        	
        	var seqArr = new Array();
        	for(var j = 0; j < this.ds_dataD.rowcount; j++){
        		seqArr[j] = this.gfn_getNum(this.ds_dataD.getColumn(j, 'DVY_PLA_SQNO'));
        	}
        	var nextSeq = Math.max.apply(null, seqArr) + 1;
        	this.ds_dataD.setColumn(row, 'DVY_PLA_SQNO', nextSeq);
        	this.ds_dataD.setColumn(row, 'DEL_YN', '0');
        }

        

        

        /*
        gubun : 1(상품 클릭시 텍스트 값), 2(DataSet 값)
        */
        this.detail_sum = function(gubun,row){
        	/* sum */
        	this.ds_dataD.setColumn(row, 'SSDYRT', "0");
        	this.ds_dataD.setColumn(row, 'SSDY_BAS_AM', "0");
        	
        	if(gubun == 1){
        		this.ds_dataD.setColumn(row, 'VCBT_AM', (this.mae_vcbt_upr.value * this.mae_dvy_pla_qt.value * this.edt_vcbt_qt.value));
        		this.ds_dataD.setColumn(row, 'VCBX_AM', (this.gfn_getNum(this.mae_dvy_pla_qt.value) / this.gfn_getNum(this.mae_boxpe_aqz.value) * this.gfn_getNum(this.mae_vcbx_upr.value)));
        	}else{
        		var dvy_pla_qt 		= this.gfn_getNum(this.ds_dataD.getColumn(row, "DVY_PLA_QT"));
        		var vcbt_upr 		= this.gfn_getNum(this.ds_dataD.getColumn(row, "VCBT_UPR"));
        		var vcbt_qt 		= this.gfn_getNum(this.ds_dataD.getColumn(row, "VCBT_QT"));
        		var boxpe_aqz		= this.gfn_getNum(this.ds_dataD.getColumn(row, "BOXPE_AQZ"));
        		var vcbx_upr		= this.gfn_getNum(this.ds_dataD.getColumn(row, "VCBX_UPR"));
        		this.ds_dataD.setColumn(row, 'VCBT_AM', (vcbt_upr * dvy_pla_qt * vcbt_qt));
        		this.ds_dataD.setColumn(row, 'VCBX_AM', (dvy_pla_qt / boxpe_aqz * vcbx_upr));
        	}
        	
        	
        	//trace("VCBT_AM : " + (this.mae_vcbt_upr.value * this.mae_dvy_pla_qt.value * this.edt_vcbt_qt.value));
        	//trace("VCBX_AM : " + (this.gfn_getNum(this.mae_dvy_pla_qt.value) / this.gfn_getNum(this.mae_boxpe_aqz.value) * this.gfn_getNum(this.mae_vcbx_upr.value)));
        	var dvy_am = 0;
        	var dvy_vat = 0;
        	for(var i = 0; i < this.ds_dataD.rowcount; i++){
        		dvy_am = dvy_am + this.ds_dataD.getColumn(i , "ODR_AM");
        		dvy_vat = dvy_vat + this.ds_dataD.getColumn(i , "ODR_VAT");
        	}
        	this.mae_total_dvy_am.set_value(dvy_am);
        	this.mae_total_dvy_vat.set_value(dvy_vat);
        }

        
        this.fn_cancelProc = function()
        {
        	var spypl_na_trpl_c = this.ds_dataM.getColumn(0, "SPYPL_NA_TRPL_C");
        	var dvyaa_na_trpl_c = this.ds_dataM.getColumn(0, "DVYAA_NA_TRPL_C");
        	var na_dvy_plash_slpno = this.ds_dataM.getColumn(0, "NA_DVY_PLASH_SLPNO");
        	var dvy_pla_dt = this.ds_dataM.getColumn(0, "DVY_PLA_DT");
        	var params =  	"spypl_na_trpl_c=" + spypl_na_trpl_c
        				 + 	" dvyaa_na_trpl_c=" + dvyaa_na_trpl_c
        				 + 	" na_dvy_plash_slpno=" + na_dvy_plash_slpno
        				 + 	" dvy_pla_dt=" + dvy_pla_dt;
        	
        	var sSvcID        = "deliveryNoticeCancelProc";//통신아이디
        	var sURL          = "svc::/rest/scm/delivery/brokerageWholesaler/deliveryNoticeCancelProc";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        

        this.btn_save_onclick = function(obj,e)
        {
        	if(!this.gfn_isNull(this.edt_na_dvy_plash_slpno.value)){
        		var resDesc = this.ds_dataM.getColumn(0, "RES_DESC");
        		if(resDesc != "" && resDesc != "SUCCESS"){
        			alert("배송예정서는 [" + resDesc +"] 상태로 수정하실 수 없습니다." );
        			return false;
        		}
        		
        	}
        	var dvy_pla_dt = this.gfn_toString(this.cal_dvy_pla_dt.value);
        	if(this.gfn_isNull(this.cal_dvy_pla_dt.value)){
        		alert("배송예정일자를 입력해주세요");
        		return false;
        	}else{
        		var dvy_pla_dt	= this.gfn_nullToEmpty(this.cal_dvy_pla_dt.value);
        		this.fn_BizDtYn("2", "", dvy_pla_dt);
        	}
        }

        var var_chk_part;
        //휴일 체크
        this.fn_BizDtYn = function(chkPart,preDate,date){
        	
        	var dvy_pla_dt 		= this.gfn_nullToEmpty(date);
        	var odrpl_na_trpl_c = this.gfn_nullToEmpty(this.edt_orpl_na_trpl_c.value);
        	var_chk_part = chkPart;
        	
        	
        	var trplO="";
        	var teamO="";
        	var trplR="";
        	var teamR="";
        	
        	if(
        			this.gfn_isNull(this.ds_dataM.getColumn(0, "ODRPL_NA_TRPL_C")) == false
        		&& 	this.gfn_isNull(this.ds_dataM.getColumn(0, "ODRPL_NA_TEAM_C")) == false
        		&& 	this.gfn_isNull(this.ds_dataM.getColumn(0, "RVOPL_NA_TRPL_C")) == false
        		&& 	this.gfn_isNull(this.ds_dataM.getColumn(0, "RVOPL_NA_TEAM_C")) == false
        	 ){
        		trplO = this.gfn_nullToEmpty(this.ds_dataM.getColumn(0, "ODRPL_NA_TRPL_C"));
        		teamO = this.gfn_nullToEmpty(this.ds_dataM.getColumn(0, "ODRPL_NA_TEAM_C"));
        		trplR = this.gfn_nullToEmpty(this.ds_dataM.getColumn(0, "RVOPL_NA_TRPL_C"));
        		teamR = this.gfn_nullToEmpty(this.ds_dataM.getColumn(0, "RVOPL_NA_TEAM_C"));
        	 }else{
        		trplO = this.gfn_nullToEmpty(this.edt_orpl_na_trpl_c.value);
        		teamO = this.gfn_nullToEmpty(this.edt_orpl_na_team_c.value);
        	 }
        	 
        	trace("trplO : " + trplO);
        	trace("teamO : " + teamO);
        	trace("trplR : " + trplR);
        	trace("teamR : " + teamR);
        	
        	var params = 	" dvy_pla_dt="+dvy_pla_dt 
        					+ " odrpl_na_trpl_c=" + odrpl_na_trpl_c 
        					+ " chkPart=" + chkPart
        					+ " trplO=" + trplO
        					+ " teamO=" + teamO
        					+ " trplR=" + trplR
        					+ " teamR=" + teamR;
        	trace("휴일 조회 : " + params);
        	
        	var sSvcID        = "getBizDtYn";//통신아이디
        	var sURL          = "svc::/rest/scm/delivery/brokerageWholesaler/getBizDtYn";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_bizDtYn=ds_bizDtYn";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        	
        }

        
        /* Validtaion Check Master */
        this.fn_validationMaster = function(){
        	/*
            var_dlvpnsht_temp_yn
        		(X : 미작성, Y : 임시저장, N : 작성완료, E : 무발주)
        	*/
        	
        	var odrpl_na_trpl_c = this.gfn_nullToEmpty(this.edt_orpl_na_trpl_c.value);
        	if(odrpl_na_trpl_c == "8808983410142" || odrpl_na_trpl_c == "8808983410159" || odrpl_na_trpl_c == "8808983324388" 
        		|| odrpl_na_trpl_c == "8808983326641" || odrpl_na_trpl_c == "8808983326634"){
        		alert('축산, 수산 배송예정서 등록 및 거래명세서 출력 업무는 축산, 수산 메뉴를 이용해 주시기 바랍니다.');
        		return false;
        	}
        	
        	
        	
        	
        	if(var_dlvpnsht_temp_yn == "X"){
        		this.fn_baljuValidation();
        	}
        	
        	if(var_dlvpnsht_temp_yn == "Y"){
        		this.fn_baesongValidation();
        	}
        	
        	if(this.gfn_trim(var_cser_na_usr_sys_kdc) != "52" && this.gfn_trim(var_cser_na_usr_sys_kdc) != "54"){
        		if(var_cser_ctr_tpc == "1" && var_prgr_c == "00"&& var_dlvpnsht_temp_yn == 'E'){
        			alert("발주처의 가격군코드[00]이면 무발주로 작성할 수 없습니다.");
        			return false;
        		}
        	}
        	
        	
        	if(this.gfn_isNull(this.edt_orpl_na_trpl_c.value)){
        		alert("발주처를 선택해 주세요");
        		return false;
        	}
        	
        	
        	if(this.gfn_isNull(this.cbo_slgt_etr_dsc.value)){
        		alert("매취수탁구분을 선택해 주세요");
        		return false;
        	}
        	
        	/*if(this.gfn_isNull(this.cbo_vhcno.value)){
        		alert("배송차량번호를 선택해 주세요");
        		return false;
        	}*/
        	
        	/* 20151123 경통 확인 불가로 삭제함
        	if(this.rdo_dvy_vhc_dsc.value == "1"){
        		if(this.gfn_isNull(this.mae_dvy_far_astcs.value) || this.gfn_getNum(this.gfn_nullToEmpty(this.mae_dvy_far_astcs.value)) == 0){
        			alert("운임보조비를 입력해 주세요");
        			return false;
        		}
        	}
        	*/
        	
        	
        	
        	
        	var  delCnt = 0;
        	for(var i = 0; i < this.ds_dataD.rowcount; i++){
        		if(this.ds_dataD.getColumn(i, "DEL_YN") == '1'){
        			++delCnt;
        		}
        	}
        	if(this.ds_dataD.rowcount == delCnt){
        		alert("최소 1개 이상 상품이 있어야 합니다.");
        		return false;
        	}
        	
        	var  odrPcsCnt = 0;
        	for(var i = 0; i < this.ds_dataD.rowcount; i++){
        		if((this.ds_dataD.getColumn(i, "ODR_PCS")  == '0') && (this.ds_dataD.getColumn(i, "DEL_YN") != '1')){
        			++odrPcsCnt;
        		}
        	}
        // 	if(odrPcsCnt > 0){
        // 		alert("단가 정보가 없는 상품이 존재합니다.");
        // 		return false;
        // 	}
        	
        	var  dvyPlaQtCnt = 0;
        	if(this.edt_na_dvy_plash_slpno.value != ''){
        		for(var i = 0; i < this.ds_dataD.rowcount; i++){
        			if((this.ds_dataD.getColumn(i, "DVY_PLA_QT")  == '0') && (this.ds_dataD.getColumn(i, "DEL_YN") != '1')){
        				++dvyPlaQtCnt;
        			}
        		}
        		if(dvyPlaQtCnt > 0 && this.ds_dataD.rowcount == dvyPlaQtCnt){
        			alert("전체 상품의 배송 예정량이 0입니다.\n발주처에 문의 바랍니다.");
        			return false;
        		}
        	}

        	
        	return true;
        }

        /* 저장 */
        this.fn_save = function(){
        	var dsParams = "";
        	var params = "";
        	var temp_yn = this.gfn_nullToEmpty(this.chk_temp_yn.value);
        	if(temp_yn == ""){
        		temp_yn = "N";
        	}
        	
        	this.ds_dataM.setColumn(0, "TEMP_YN", temp_yn);
        		
        	if(var_dlvpnsht_temp_yn == "Y" || var_dlvpnsht_temp_yn == "N"){//임시저장, 작성완료
        		params = " editType="+var_dlvpnsht_temp_yn
        				 + " spypl_na_trpl_c=" + var_spypl_na_trpl_c
        				 + " dvyaa_na_trpl_c=" + var_dvyaa_na_trpl_c
        				 + " na_dvy_plash_slpno=" + var_na_dvy_plash_slpno
        				 + " temp_yn=" +  temp_yn;
        		
        	}else{
        		params = " editType="+var_dlvpnsht_temp_yn
        				+ " orpl_na_trpl_c=" + this.gfn_nullToEmpty(this.edt_orpl_na_trpl_c.value)
        				+ " temp_yn=" +  temp_yn
        				+ " trplC=" + this.gfn_nullToEmpty(this.getTrplCode());
        	}
        	
        	this.ds_dataM.addColumn("DDLY_YN", "string", 1);
        	this.ds_dataM.setColumn(0, "DDLY_YN", "0");
        	
        	//trace("[ fn_save Params ] >>>>>> " + params);	
        	dsParams = "ds_dataM=ds_dataM:A ds_dataD=ds_dataD:A";
        	
        	//trace("save : " + this.ds_dataD.saveXML());
        	this.btn_save.set_enable(false);
        	
        	var sSvcID        = "saveDeliveryNoticeOrder";//통신아이디
        	var sURL          = "svc::/rest/scm/delivery/brokerageWholesaler/saveDeliveryNoticeOrder";// 호출할 서버 페이지 주소
        	var sInDatasets   = dsParams;//보내는데이터셋
        	var sOutDatasets  = "";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        /* 배송차량구분에 따른 운임보조비 활성화 여부 */
        this.fn_dvy_far_astcsEnable = function(flag){	
        		this.mae_dvy_far_astcs.set_enable(flag);
        }

        

        this.btn_popup01_onclick = function(obj,e)
        {
        	var param = "";
        	var trplC = this.getTrplCode();//권한사업장

        	var oArg = {AuthorityNo:param, ddly_yn:'0', temp_yn:'', trplC:trplC, DSTR_TER_YN:'N'};
        	var sOption = "autosize=true,title=false";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("deliveryNoticePopup","SCM.DELIVERY::VAN_DS_SC_0370_P01.xfdl",oArg,sOption,sPopupCallBack);
        }

        
        var var_na_wrs_lclc;
        var var_na_wrs_mclc;
        var var_na_wrs_sclc;
        var var_na_wrs_dtcf_c;
        var var_ldtm_dds = 0;
        this.fn_getBizDt = function(trplO,teamO,trplR,teamR,dvy_pla_dt){
        	trace("배송예정일자 리드타임 적용 시작");
        	var params =   " trplO=" + trplO
        				 + " teamO=" + teamO
        				 + " trplR=" + trplR
        				 + " teamR=" + teamR
        				 + " dvy_pla_dt=" + dvy_pla_dt;
        	
        	trace("params : " + params);
        	var sSvcID        = "getBizDt";//통신아이디
        	var sURL          = "svc::/rest/scm/delivery/brokerageWholesaler/getBizDt";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_bizDtYn=ds_bizDtYn";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        

        this.fn_popupAfter = function(strId,strVal)
        {
        	trace(" searchWRS strId : " + strId + " strVal : " + strVal);
        	var paramsArr = '';
        	if(strVal){
        		paramsArr = strVal.split(",");
        	}else{
        		return;
        	}	

        	/* 팝업 발주서 조회 */
        	if(strId == "retrieveOrdersPopUp"){
        		trace("** 발주서 참조 **");
        		var_odrpl_na_trpl_c 	= paramsArr[0];
        		var_odrpl_na_team_c 	= paramsArr[1];
        		var_odr_dt 				= paramsArr[2];
        		var_odr_slpno			= paramsArr[3];
        		
        		this.ds_dataM.setColumn(0, "ODRPL_NA_TRPL_C", var_odrpl_na_trpl_c);
        		this.ds_dataM.setColumn(0, "ODRPL_NA_TEAM_C", var_odrpl_na_team_c);
        		this.ds_dataM.setColumn(0, "ODR_DT", var_odr_dt);
        		this.ds_dataM.setColumn(0, "ODR_SLPNO", var_odr_slpno);
        		
        		var_dlvpnsht_temp_yn	= paramsArr[4];//'X' Fixed 배송예정서 작성여부
        		var_spypl_na_trpl_c		= paramsArr[5];
        		var_spypl_na_team_c		= paramsArr[6];
        		var_dvyaa_na_trpl_c		= paramsArr[7];
        		var_dvyaa_na_team_c		= paramsArr[8];
        		var_ddly_yn 			= paramsArr[9];
        		var_cser_ctr_tpc 		= paramsArr[10];
        		var_prgr_c 				= paramsArr[11];
        		var_cser_na_usr_sys_kdc = paramsArr[12];
        		var_spy_tpc				= paramsArr[13];
        		
        		
        		
        		this.cbo_spy_tpc.set_enable(false);//공급유형
        		this.cbo_cser_ctr_tpc.set_enable(false);//계약유형
        		this.btn_popup01.set_enable(false);//배송예정서 팝업비활성화
        		this.edt_orpl_na_trpl_c.set_enable(false);
        		this.edt_shrt_bzplnm.set_enable(false);
        		this.fn_search();
        	}
        	
        	/* 팝업 배송예정서 조회 */
        	if(strId == "deliveryNoticePopup"){
        		trace("** 배송예정서 참조 **");
        		var_spypl_na_trpl_c 		= paramsArr[0];
        		var_dvyaa_na_trpl_c 		= paramsArr[1];
        		var_na_dvy_plash_slpno 		= paramsArr[2]; 
        		var_dlvpnsht_temp_yn 		= paramsArr[3];//N, Y 배송예정서 작성여부
        		var_ddly_yn 				= paramsArr[4];
        		var_prgr_c 					= paramsArr[5];
        		var_cser_na_usr_sys_kdc 	= paramsArr[6];
        		var_cser_ctr_tpc 			= paramsArr[7];
        		
        		this.fn_varView("배송예정서 조회");
        		this.btn_pup_van_seq.set_enable(false);//발주번호조회 팝업 비활성화
        		this.btn_popup.set_enable(false);//발주처 조회 팝업 비활성화
        		this.cbo_cser_ctr_tpc.set_enable(false);
        		this.btn_popup01.set_enable(false);//배송예정서 조회 팝업 비활성화
        		this.edt_orpl_na_trpl_c.set_enable(false);
        		this.edt_shrt_bzplnm.set_enable(false);
        		this.fn_search();
        	}
        	/* 팝업 발주처 조회 */
        	if(strId == "POPUP_TRNREL_ODRPL"){
        		trace("** 발주처 조회 **");
        		var valueArr = strVal.split(",");
        		
        		if(valueArr[14] != "01" && valueArr[14] != "16"){
        			alert("공급유형이 [ 매취,특약 ]인 경우 배송예정서 작성 가능합니다.");
        			
        			this.edt_shrt_bzplnm.set_value('');
        			this.edt_teamnm.set_value('');
        			this.edt_orpl_na_trpl_c.set_value('');
        			this.edt_orpl_na_team_c.set_value('');
        			return false;
        		}
        		
        		
        		var_odrpl_na_trpl_c 	= valueArr[0];
        		var_odrpl_na_team_c 	= valueArr[2];
        		var_prgr_c 				= valueArr[4];//가격군코드
        		var_cser_na_usr_sys_kdc = valueArr[5];//발주처시스템코드
        		var_cser_ctr_tpc 		= valueArr[6];//계약유형코드
        		var_ldtm_dds			= valueArr[17];//리드타임일수
        		
        		this.edt_pgnm.set_value(valueArr[21]);//가격군명
        		this.edt_shrt_bzplnm.set_value(valueArr[1]);
        		this.edt_teamnm.set_value(valueArr[3]);
        		this.edt_orpl_na_trpl_c.set_value(var_odrpl_na_trpl_c);
        		this.edt_orpl_na_team_c.set_value(var_odrpl_na_team_c);
        		
        		
        		
        		
        		
        		this.ds_dataM.setColumn(0, "ODRPL_NA_TRPL_C", 	var_odrpl_na_trpl_c);
        		this.ds_dataM.setColumn(0, "ODRPL_NA_TEAM_C", 	var_odrpl_na_team_c);
        		this.ds_dataM.setColumn(0, "CSER_CTR_TPC", 		var_cser_ctr_tpc);
        		this.ds_dataM.setColumn(0, "SPY_TPC", 			valueArr[14]);
        		this.ds_dataM.setColumn(0, "NA_WRS_LCLC", 		valueArr[12]);
        		this.ds_dataM.setColumn(0, "NA_WRS_MCLC", 		valueArr[13]);
        		this.ds_dataM.setColumn(0, "MNGT_NA_TRPL_C", 	valueArr[7]);
        		this.ds_dataM.setColumn(0, "MNGT_NA_TEAM_C", 	valueArr[8]);
        		this.ds_dataM.setColumn(0, "MNGT_NA_TR_TPC", 	valueArr[9]);
        		this.ds_dataM.setColumn(0, "ADJPL_NA_TRPL_C", 	valueArr[10]);
        		this.ds_dataM.setColumn(0, "ADJPL_NA_TEAM_C", 	valueArr[11]);
        		this.ds_dataM.setColumn(0, "MNGT_TR_REL_AMNNO", valueArr[18]);
        		this.ds_dataM.setColumn(0, "CSER_TR_REL_AMNNO", valueArr[19]);
        		this.ds_dataM.setColumn(0, "SPYPL_NA_TRPL_C", 	valueArr[15]);
        		this.ds_dataM.setColumn(0, "SPYPL_NA_TEAM_C", 	valueArr[16]);
        		
        		var_rots_flex_pr_apl_yn = valueArr[25];
        		
        		
        		this.fn_trnrelSet(valueArr);//거래관계 Set
        		
        		
        		
        		this.edt_dvyaa_na_trpl_c.set_value(var_odrpl_na_trpl_c);
        		this.edt_dvyaa_na_team_c.set_value(var_odrpl_na_team_c);
        		
        		trace("발주처 팝업 조회 : " + this.ds_dataM.saveXML());
        		
        		//this.fn_getBizDt(valueArr[0], valueArr[2], this.gfn_nullToEmpty(this.getTrplCode()), '00', this.cal_dvy_pla_dt.value);
        		this.div_auth.set_enable(false);
        		this.btn_popup.set_enable(false);
        		this.edt_orpl_na_trpl_c.set_enable(false);
        		this.edt_shrt_bzplnm.set_enable(false);
        		
        		
        		
        		
        	}
        	
        	/* 팝업 배송지 조회 */
        	if(strId == "VAN_DS_SC_0100_P01"){
        		this.edt_dvyaa_n.set_value(paramsArr[0]);
        		this.edt_dvyaa_na_trpl_c.set_value(this.gfn_nullToEmpty(this.edt_orpl_na_trpl_c.value));
        		this.edt_dvyaa_na_team_c.set_value(this.gfn_nullToEmpty(this.edt_orpl_na_team_c.value));
        	}
        	
        	// 배송예정서 작성 완료인 경우
        	if((strId == "deliveryNoticePopup") && (var_dlvpnsht_temp_yn == "N")){
        		this.btn_save.set_enable(false);
        		this.fn_enable(objArr, false);	
        		
        	}
        	
        	if(strId == "wrsSearchPop"){
        		var na_wrs_c 			= paramsArr[0];
        		var wrsnm 				= paramsArr[1];
        		var boxpe_aqz 			= paramsArr[2];
        		var wrs_stdnm 			= paramsArr[3];
        		var na_wrs_std_unt_c 	= paramsArr[4];
        		
        		var odr_pcs 			= paramsArr[5];
        		var odr_vat 			= paramsArr[6];
        		var vcbt_upr 			= paramsArr[7];
        		var vcbx_upr 			= paramsArr[8];
        		var txt_dsc 			= paramsArr[9];
        		var pd_yy_amn_yn		= paramsArr[10];
        		var pd_yy				= paramsArr[11];
        		var_na_wrs_lclc 		= paramsArr[12];
        		var_na_wrs_mclc 		= paramsArr[13];
        		var_na_wrs_sclc 		= paramsArr[14];
        		var_na_wrs_dtcf_c 		= paramsArr[15];
        		var_min_odr_qt			= paramsArr[19];
        		var_vcbt_na_wrs_c		= paramsArr[21];
        		var vcbt_qt				= paramsArr[23];//공병수량
        		trace("vcbt_qt : " + vcbt_qt);
        		trace("var_vcbt_wrs_c : " + var_vcbt_na_wrs_c);
        		
        		this.edt_na_wrs_c.set_value(na_wrs_c);
        		this.edt_wrsnm.set_value(wrsnm);
        		this.mae_boxpe_aqz.set_value(boxpe_aqz);
        		this.edt_wrs_stdnm.set_value(wrs_stdnm);
        		this.edt_na_wrs_unt_c.set_value(na_wrs_std_unt_c);
        		this.mae_odr_pcs.set_value(odr_pcs);
        		this.mae_odr_vat.set_value(odr_vat);
        		this.mae_vcbt_upr.set_value(vcbt_upr);
        		this.mae_vcbx_upr.set_value(vcbx_upr);
        		this.mae_dvy_wrs_upr.set_value(odr_pcs);
        		this.edt_txt_dsc.set_value(txt_dsc);
        		this.edt_pd_yy_amn_yn.set_value(pd_yy_amn_yn);
        		this.edt_pd_yy.set_value(pd_yy);
        		//this.mae_dvy_pla_qt.set_value(0);
        		this.edt_vcbt_na_wrs_c.set_value(var_vcbt_na_wrs_c);
        		this.edt_min_odr_qt.set_value(var_min_odr_qt);
        		this.edt_vcbt_qt.set_value(vcbt_qt);
        		
        		
        		
        		this.mae_dvy_pla_qt.setFocus();
        		this.mae_dvy_pla_qt.setCaretPos(-1);
        		
        // 		if(var_rots_flex_pr_apl_yn == "1"){
        // 			this.mae_dvy_wrs_upr.set_enable(true);
        // 		}else if(this.gfn_nullToEmpty(this.cbo_cser_ctr_tpc.value) == '4' || this.gfn_nullToEmpty(this.cbo_cser_ctr_tpc.value == '5')){
        // 			this.mae_dvy_wrs_upr.set_enable(true);
        // 		}
        		
        		for(var i=0;i<this.grd_master.rowcount;i++){
        			var na_wrs_c = this.ds_dataD.getColumn(i,"NA_WRS_C");
        			if(na_wrs_c == this.edt_na_wrs_c.value){
        				this.fn_rowSet(i);//상품이 있을 경우 text set
        			}
        		}
        	}
        }

        

        this.fn_rowSet = function(row){
        	this.ds_dataD.set_rowposition(row);
        	this.edt_na_wrs_c.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"NA_WRS_C"));
        	this.edt_wrsnm.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"WRSNM"));
        	this.mae_boxpe_aqz.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"BOXPE_AQZ"));
        	this.edt_wrs_stdnm.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"WRS_STDNM"));
        	this.edt_na_wrs_unt_c.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"NA_WRS_UNT_C"));
        	this.mae_odr_qt.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"ODR_QT"));
        	this.mae_odr_pcs.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"ODR_PCS"));
        	this.mae_odr_vat.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"ODR_VAT"));
        	this.mae_odr_am.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"ODR_AM"));
        	this.chk_del_yn.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"DEL_YN"));
        	this.mae_dvy_pla_qt.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"DVY_PLA_QT"));
        	this.cbo_dqpd_rsnc.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"DQPD_RSNC"));
        	this.mae_dvy_wrs_upr.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"DVY_WRS_UPR"));
        	this.mae_vcbt_upr.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"VCBT_UPR"));
        	this.mae_vcbx_upr.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"VCBX_UPR"));
        	this.cal_spy_psb_dt.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"SPY_PSB_DT"));
        	this.edt_txt_dsc.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"TXT_DSC"));
        	this.edt_vcbt_na_wrs_c.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"VCBT_NA_WRS_C"));
        	this.edt_min_odr_qt.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"MIN_ODR_QT"));
        	this.edt_vcbt_qt.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"VCBT_QT"));
        // 	if(var_rots_flex_pr_apl_yn == "1"){
        // 		this.mae_dvy_wrs_upr.set_enable(true);
        // 	}else if(this.gfn_nullToEmpty(this.cbo_cser_ctr_tpc.value == '4') || this.gfn_nullToEmpty(this.cbo_cser_ctr_tpc.value == '5')){
        // 		this.mae_dvy_wrs_upr.set_enable(true);
        // 	}
        	
        	this.edt_na_wrs_c.set_enable(false);
        	this.edt_wrsnm.set_enable(false);
        	this.mae_dvy_pla_qt.setFocus();
        }

        //거래관계 Set
        this.fn_trnrelSet = function(valueArr){
        	trnrelParams = {
        		in_BsDay 	: "",     			//1.기준일자
        		in_TrplR 	: valueArr[15],     // 2.[거래관계]수주처
        		in_TeamR 	: valueArr[16],     // 3.[거래관계]수주처팀
        		in_TrplO  	: valueArr[0 ],    	// 4.[거래관계]발주처
        		in_TeamO  	: valueArr[2 ],    	// 5.[거래관계]발주처팀
        		in_TrplM  	: valueArr[7 ],    	// 5.[거래관계]주관사업장
        		in_TeamM 	: valueArr[8 ],     // 6.[거래관계]주관사업장팀
        		in_CtrTpc 	: valueArr[6],    	// 7.[거래관계]수요자계약유형
        		in_SpyTpc 	: valueArr[14],    	// 8.[거래관계]공급유형코드
        		in_TrTpcM 	: valueArr[9 ],    	// 9.[거래관계]주관경제통합거래유형
        		in_WrsC   	: "",    			//10.상품코드
        		in_Year  	: "0000",  			//11.생산년도      (가공사업/유통양곡)
        		in_UseSysR 	: valueArr[23],   	//12.[수주처]사용시스템
        		in_UseSysO 	: valueArr[5 ],   	//13.[발주처]사용시스템
        		in_UseSysM 	: valueArr[24], 	//14.[주관처]사용시스템
        		in_DdlyYN	: "0"				//15.직송여부
        	}
        }

        //배송예정서 조회 후 거래관계 Set
        this.fn_trnrel = function(){
        	trace("거래관계 Set 시작");
        	var odrpl_na_trpl_c = this.ds_dataM.getColumn(0, "ODRPL_NA_TRPL_C");
        	var odrpl_na_team_c = this.ds_dataM.getColumn(0, "ODRPL_NA_TEAM_C");
        	var spypl_na_trpl_c = this.ds_dataM.getColumn(0, "SPYPL_NA_TRPL_C");
        	var spypl_na_team_c = this.ds_dataM.getColumn(0, "SPYPL_NA_TEAM_C");
        	var cser_ctr_tpc 	= this.ds_dataM.getColumn(0, "CSER_CTR_TPC");
        	
        	var params = "odrpl_na_trpl_c=" + odrpl_na_trpl_c
        				+" odrpl_na_team_c=" + odrpl_na_team_c
        				+" spypl_na_trpl_c=" + spypl_na_trpl_c
        				+" spypl_na_team_c=" + spypl_na_team_c
        				+" cser_ctr_tpc=" + cser_ctr_tpc;
        	trace("거래관계 PARAMS : " + params);
        	
        	var sSvcID        = "getTrnrel";//통신아이디
        	var sURL          = "svc::/rest/scm/order/getTrnrel";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_trnrel=ds_trnrel";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        
        //발주서 Validation
        this.fn_baljuValidation = function(){
        	/*
        	var cbo_cser_ctr_tpc = this.gfn_nullToEmpty(this.cbo_cser_ctr_tpc.value);//계약유형
        	var cbo_spy_tpc = this.gfn_nullToEmpty(this.cbo_spy_tpc.value);//공급유형
        	
        	
        	if ((var_cser_ctr_tpc.length > 0) && (var_cser_ctr_tpc != cbo_cser_ctr_tpc )) {
               alert('발주처에서 선택한 계약유형 ['+var_cser_ctr_tpc+']와 \n'
                    +'발주전표에서 전송한 계약유형 ['+cbo_cser_ctr_tpc+'] \n'
                    +'이 상이합니다.거래관계를 다시 선택하세요.');
               return false;
            }
            
            if ((var_spy_tpc.length > 0) && (var_spy_tpc != cbo_spy_tpc )) {
               alert('발주처에서 선택한 공급유형 ['+var_spy_tpc+']와 \n'
                    +'발주전표에서 전송한 공급유형 ['+cbo_spy_tpc+'] \n'
                    +'이 상이합니다.거래관계를 다시 선택하세요.');
               return (false);
            }
            */
            trace("발주전표 Validtaion OK");
        }

        //배송예정번호 Validation
        this.fn_baesongValidation = function(){
        /*
        	 if ((var_cser_ctr_tpc == "1" ) && (var_ddly_yn == "1" )) {
        			alert("배송예정서 직송인 경우에는 직송 배송예정서 작성에서 하십시오.");
        			return false;
        	}
        */
        	trace("배송예정서 Validtaion OK");
        }

        

        

        

        
        this.fn_enable = function(objArr,flag){
        	for(var i = 0; i < objArr.length ; i++){
        		eval("this."+objArr[i]+".set_enable("+flag+")");
        	}
        }

        //권한사업장 활성여부
        this.fn_chkAuth = function(flag){
        	this.div_auth.set_enable(flag);
        }

        

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0)
        	{
        		if(ErrorCode == "-99"){
        			if(svcID == "getBizDtYn"){
        				alert("입력하신 배송예정일은 휴무 입니다.");
        				return;
        			}
        		}else if (ErrorCode == "-98"){
        			if(svcID == "saveDeliveryNoticeOrder"){
        				alert(ErrorMsg);
        				this.btn_init_onclick();
        				return false;
        			}
        		}else if (ErrorCode == "-97"){
        			if(svcID == "saveDeliveryNoticeOrder"){
        				alert(ErrorMsg);
        				this.btn_init_onclick();
        				return false;
        			}
        		}else{
        			if(ErrorCode == "-999"){
        				this.alert(ErrorMsg);
        			}else{
        				this.gfn_getMessage("alert", "error.message.server.exception");
        			}
        			return;
        		}
        		
        	}else{
        		if(svcID == "getOrder"){
        			this.ds_dataD.set_rowposition(-1);
        			this.fn_trnrel();//거래관계 SET
        			this.grd_master.setRealColSize(9, 90);
        			this.grd_master.setCellProperty('head', 9, 'text', '보류');
        			var today = this.gfn_today('yyyyMMdd');
        			/* #################################### init Set Start ##############################################*/
        			if(this.gfn_isNull(this.ds_dataM.getColumn(0, "DVY_PLA_DT"))){
        				this.ds_dataM.setColumn(0, "DVY_PLA_DT", this.gfn_addDate(today, 1));
        			}
        			if(this.gfn_isNull(this.ds_dataM.getColumn(0, "SLGT_ETR_DSC"))){
        				this.ds_dataM.setColumn(0, "SLGT_ETR_DSC", "1");
        			}
        			
        			/* 중도매인 수주단가와 수주금액 제한(171206) */			 
        			// 마스터 정보
        			this.ds_dataM.setColumn(0, "TOTAL_ODR_AM", 0);
        			this.ds_dataM.setColumn(0, "TOTAL_ODR_VAT", 0);
        			this.ds_dataM.setColumn(0, "TOTAL_DVY_AM", 0);
        			this.ds_dataM.setColumn(0, "TOTAL_DVY_VAT", 0);
        			
        			// 상품정보
        			for (var i = 0 ; i < this.ds_dataD.rowcount; i++) {
        				this.ds_dataD.setColumn(i, "ODR_PCS", 0);
        				this.ds_dataD.setColumn(i, "DVY_WRS_UPR", 0);
        				this.ds_dataD.setColumn(i, "ODR_AM", 0);
        				this.ds_dataD.setColumn(i, "ODR_VAT", 0);
        			}
        			
        			this.sta_grd_master_cnt.set_text(this.ds_dataD.rowcount); //Row Count Setting
        			this.fn_rdo_dvy_vhc_dsc();//배송차량구분에 따른 운임보조비활성여부
        			var_rots_flex_pr_apl_yn = this.ds_dataM.getColumn(0, "ROTS_FLEX_PR_APL_YN");//탄력가격적용여부
        			/* #################################### init Set End ##############################################*/
        			if(this.ds_dataM.rowcount == 0){
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			}else{
        				this.fn_chkAuth(false);
        			}
        			this.fn_init();//상품정보 박스 초기화
        			this.btn_save.set_enable(true);//저장 버튼 활성화
        			//this.btn_popup00.set_enable(false);//상품 조회 비활성화
        			this.edt_orpl_na_trpl_c.set_enable(false);
        			this.edt_shrt_bzplnm.set_enable(false);
        //			this.fn_odr_pcs_change("order");//배송예정일자기준 단가 변경 메세지
        		}
        		
        		if(svcID == "saveDeliveryNoticeOrder"){
        			try{   
        			  //application.afrm_FrameSet[해당메뉴아이디].form.div_work  <-\여기까지 하셔야 form접근하는겁니다.
        			  //application.afrm_FrameSet["01001002"].form.div_work.btn_search.click();
        		   }
        		   catch(e)
        		   {
        		   }
        		
        		
        			/**
        			var tempYn = this.gfn_nullToEmpty(this.chk_temp_yn.value);
        			var msgArr = ErrorMsg.split(',');
        			if(msgArr.length == 3){
        				var_spypl_na_trpl_c 	= msgArr[0];
        				var_dvyaa_na_trpl_c 	= msgArr[1];
        				var_na_dvy_plash_slpno 	= msgArr[2];
        				var strRtn = this.gfn_getMessage("confirm","msg.van_ds_sc_0300.trading.statments.print.yn", var_na_dvy_plash_slpno);
        				if(strRtn == true){
        					this.fn_print();
        				}
        			}else{
        				alert(ErrorMsg);
        			}
        			*/
        			var msgArr = ErrorMsg.split(';');
        			var strRtn = this.confirm(msgArr[0]);
        	
        			var_spypl_na_trpl_c 	= msgArr[1]
        			var_dvyaa_na_trpl_c 	= msgArr[2]
        			var_na_dvy_plash_slpno 	= msgArr[3];
        			if(strRtn == true){
        				trace("============================");
        				this.fn_beForPrint(true);
        				//this.fn_print();
        			} else {
        				this.reload();
        			}
        		}
        		
        		if(svcID == "getDeliveryNoticeOrder"){
        			this.ds_dataD.set_rowposition(-1);
        			this.fn_trnrel();//거래관계 SET
        			this.sta_grd_master_cnt.set_text(this.ds_dataD.rowcount); //Row Count Setting
        			this.fn_rdo_dvy_vhc_dsc();//배송차량구분에 따른 운임보조비활성여부
        			var dvyPlashStsc = this.ds_dataM.getColumn(0, "DVY_PLASH_STSC");
        			var prcYn = this.ds_dataM.getColumn(0, "PRC_YN");
        			var tempYn = this.ds_dataM.getColumn(0, "TEMP_YN");
        			var norderYn = this.gfn_nullToEmpty(this.ds_dataM.getColumn(0, "NORDER_YN"));
        			
        			trace("배송예정서 상태 : " + dvyPlashStsc);
        			trace("PRC_YN : " + prcYn);
        			trace("임시저장여부 : " + tempYn);
        			trace("무발주배송예정서여부 : " + norderYn);
        			this.cal_odr_dt.set_value(this.ds_dataD.getColumn(0, "ODR_DT"));
        			this.edt_odr_slpno.set_value(this.ds_dataD.getColumn(0, "ODR_SLPNO"));
        			
        			
        			if(norderYn == "0" || norderYn == ""){
        				this.grd_master.setRealColSize(9, 0);
        			}
        			
        			this.div_auth.set_enable(false);
        			this.fn_init();//상품정보 박스 초기화
        			this.fn_sum();//Detail Sum
        			
        			if(dvyPlashStsc == "01" && (prcYn == "R" || prcYn == "Y") && tempYn == "N"){
        				this.btn_save.set_enable(true);
        				this.btn_cancle.set_enable(true);
        				this.fn_enable(objArr, true);
        				this.cal_dvy_pla_dt.set_enable(false);
        			}
        		}
        		
        		if(svcID == "getBuyer"){
        			var msg = "N:단가미등록(수) 상품입니다.\n"
        			+ " 해당 상품은 농협하나로마트 담당바이어에게 연락하시기 바랍니다.\n"
        			+ " 상품코드    : " + this.ds_buyer.getColumn(0, "NA_WRS_C") + "\n"
        			+ " 상품코드명 : " + this.ds_buyer.getColumn(0, "NA_WRS_N") + "\n";
        			alert(msg);
        		}
        		
        		if(svcID == "getBizDtYn"){
        			if(ErrorCode == "99"){//저장 클릭한 경우
        				if(this.fn_validationMaster()){
        					this.fn_save();
        				}
        			}else{
        				this.fn_syncBizDtYn();//배송예정일자 변경시 조회
        			}
        		}
        		
        		if(svcID == "getBizDt"){
        			trace("배송예정일자 리드타임 적용 완료");
        			//발주서 조회 후 배송예정서 작성 시 리드타임 적용
        			this.cal_dvy_pla_dt.set_value(this.ds_bizDtYn.getColumn(0, "BIZDT"));
        		}
        		
        		if(svcID == "deliveryNoticeCancelProc"){
        			this.alert(ErrorMsg);
        			this.btn_save.set_enable(false);
        		}
        		
        		if(svcID == "getTrnrel"){
        			if(this.ds_trnrel.rowcount == 0){
        				alert("거래관계가 존재하지 않습니다.");
        				this.reload();
        			}
        			trnrelParams = {
        				in_BsDay 	: "",     													//01.기준일자
        				in_TrplR 	: this.ds_trnrel.getColumn(0, "SPLR_NA_TRPL_C"),     		//02.[거래관계]수주처
        				in_TeamR 	: this.ds_trnrel.getColumn(0, "SPLR_NA_TEAM_C"),     		//03.[거래관계]수주처팀
        				in_TrplO  	: this.ds_trnrel.getColumn(0, "CSER_NA_TRPL_C"),    		//04.[거래관계]발주처
        				in_TeamO  	: this.ds_trnrel.getColumn(0, "CSER_NA_TEAM_C"),    		//05.[거래관계]발주처팀
        				in_TrplM  	: this.ds_trnrel.getColumn(0, "MNGT_NA_TRPL_C"),    		//06.[거래관계]주관사업장
        				in_TeamM 	: this.ds_trnrel.getColumn(0, "MNGT_NA_TEAM_C"),     		//07.[거래관계]주관사업장팀
        				in_CtrTpc 	: this.ds_trnrel.getColumn(0, "CSER_CTR_TPC"),    			//08.[거래관계]수요자계약유형
        				in_SpyTpc 	: this.ds_trnrel.getColumn(0, "SPY_TPC"),    				//09.[거래관계]공급유형코드
        				in_TrTpcM 	: this.ds_trnrel.getColumn(0, "MNGT_NA_TR_TPC"),    		//10.[거래관계]주관경제통합거래유형
        				in_WrsC   	: "",    													//11.상품코드
        				in_Year  	: "0000",  													//12.생산년도      (가공사업/유통양곡)
        				in_UseSysR 	: this.ds_trnrel.getColumn(0, "SPLR_NA_USR_SYS_KDC"),   	//13.[수주처]사용시스템
        				in_UseSysO 	: this.ds_trnrel.getColumn(0, "CSER_NA_USR_SYS_KDC"),   	//14.[발주처]사용시스템
        				in_UseSysM 	: this.ds_trnrel.getColumn(0, "MNGT_NA_USR_SYS_KDC"), 		//15.[주관처]사용시스템
        				in_DdlyYN	: "0"														//16.직송여부
        			}
        			var_rots_flex_pr_apl_yn = this.ds_trnrel.getColumn(0, "ROTS_FLEX_PR_APL_YN");//탄력가격적용여부
        			trace(this.ds_trnrel.saveXML());
        			trace("거래관계 Set 완료");
        			
        			trace("단가 정보 리로드 시작");
        //			this.fn_odr_pcs_change("delivery");
        		}
        		if(svcID == "isOKdlvpnsht"){
        			//alert("잠시만 기다려주세요");
        			//setTimeout("fn_print()", 3000);
        			this.fn_print();
        			if(this.gfn_nullToEmpty(this.edt_na_dvy_plash_slpno.value) == "") {
        				this.reload();
        			}
        		}
        		
        		if(svcID == "getDeliveryNoticeOrderDetail"){
        //			this.fn_odr_pcs_change("delivery");
        			this.sta_grd_master_cnt.set_text(this.ds_dataD.rowcount);
        			this.fn_sum();//Detail Sum
        		}
        		
        		if(svcID == "getOrderDetail"){
        			this.sta_grd_master_cnt.set_text(this.ds_dataD.rowcount);
        		}
        	}
        }

        

        /*휴일 배송가능 체크*/
        this.fn_syncBizDtYn = function(){
        	trace("bizdyYn : " + this.ds_bizDtYn.getColumn(0, "BIZDY_YN"));
        	if(this.ds_bizDtYn.getColumn(0, "BIZDY_YN") == "0"){
        		trace(this.ds_bizDtYn.saveXML());
        		bizdyYn = "0";
        		this.cal_dvy_pla_dt.set_value(preValue);
        		var bizDt = this.ds_bizDtYn.getColumn(0, "BIZDT");
        		alert("[ "+bizDt.substring(4, 6)+"/"+bizDt.substring(6, 8)+" ] 은 해당 사업장의 휴일입니다.");
        	}else{
        		bizdyYn = "1";
        		trace("배송예정가능일자 가능");
        	}
        	
        	
        // 	if(bizdyYn == "1"){
        // 		var tempYn = this.gfn_nullToEmpty(this.ds_dataM.getColumn(0, "TEMP_YN"));
        // 		trace("배송예정일 변경에 따른 단가변경");
        // 	
        // 		if((tempYn == '' || tempYn == 'Y' || tempYn =='N') && (postValue != preValue)){
        // 			if(this.gfn_isNull(this.edt_odr_slpno.value) && this.gfn_isNull(this.edt_na_dvy_plash_slpno.value)){
        // 				//무발주
        // 				if(this.ds_dataD.rowcount > 0){
        // 					var isYn = application.confirm("무발주 배송예정서 작성일 경우 배송예정일자가 변경되면 입력하신 상품은 삭제됩니다. 계속진행하시겠습니까?");
        // 					if(isYn){
        // 						this.ds_dataD.clearData();
        // 						this.fn_detail_clear();
        // 					}else{
        // 						this.cal_dvy_pla_dt.set_value(preValue);
        // 					}
        // 				}
        // 			}else if(
        // 					this.gfn_isNull(this.ds_dataM.getColumn(0, "NA_DVY_PLASH_SLPNO")) == true
        // 				){
        // 				
        // 				//발주참조
        // 				odrpl_na_trpl_c = this.ds_dataM.getColumn(0, "ODRPL_NA_TRPL_C");
        // 				odrpl_na_team_c = this.ds_dataM.getColumn(0, "ODRPL_NA_TEAM_C");
        // 				odr_dt = this.ds_dataM.getColumn(0, "ODR_DT");
        // 				odr_slpno = this.ds_dataM.getColumn(0, "ODR_SLPNO");
        // 							
        // 				
        // 				var params =   " odrpl_na_trpl_c=" + odrpl_na_trpl_c
        // 							 + " odrpl_na_team_c=" + odrpl_na_team_c
        // 							 + " odr_dt=" + odr_dt
        // 							 + " odr_slpno=" + odr_slpno
        // 							 + " dvy_pla_dt=" + postValue;
        // 				var isYn = application.confirm("배송예정일을 변경할 경우 단가정보를 리로드 합니다. 계속 진행하시겠습니까?");					
        // 				if(isYn){
        // 					
        // 					var sSvcID        = "getOrderDetail";//통신아이디
        // 					var sURL          = "svc::/rest/scm/delivery/brokerageWholesaler/getOrderDetail";// 호출할 서버 페이지 주소
        // 					//var sURL          = "svc::/rest/scm/delivery/saveDeliveryNoticeOrder";// 호출할 서버 페이지 주소
        // 					var sInDatasets   = "";//보내는데이터셋
        // 					var sOutDatasets  = "ds_dataD=ds_dataD";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        // 					var sArgument     = params;// 파라미터
        // 					var sCallbackFunc = "fn_callBack";//콜백
        // 					var sTranType     = "S"; // U:저장/삭제, S:조회
        // 					//API 호출
        // 					this.gfn_callService(sSvcID, sURL, sInDatasets, 
        // 					sOutDatasets, sArgument, sCallbackFunc, sTranType);
        // 					this.fn_detail_clear();
        // 				}else{
        // 					this.cal_dvy_pla_dt.set_value(preValue);
        // 				}
        // 				
        // 				trace(">>>>>>>>>>>>>>>>>>>>>>>>>>>>발주서 단가 변경 완료");
        // 				
        // 			}else{
        // 				//배송예정서 참조
        // 				spypl_na_trpl_c = this.ds_dataM.getColumn(0, "SPYPL_NA_TRPL_C");
        // 				dvyaa_na_trpl_c = this.ds_dataM.getColumn(0, "DVYAA_NA_TRPL_C");
        // 				na_dvy_plash_slpno = this.ds_dataM.getColumn(0, "NA_DVY_PLASH_SLPNO");
        // 				var cser_ctr_tpc = this.ds_dataM.getColumn(0, "CSER_CTR_TPC");
        // 				
        // 				var params =      "spypl_na_trpl_c=" + spypl_na_trpl_c
        // 								+ " dvyaa_na_trpl_c=" + dvyaa_na_trpl_c
        // 								+ " na_dvy_plash_slpno=" + na_dvy_plash_slpno
        // 								+ " dvy_pla_dt=" + postValue
        // 								+ " ddly_yn=0"
        // 								+ " cser_ctr_tpc="+cser_ctr_tpc;
        // 		
        // 				var isYn = application.confirm("배송예정일을 변경할 경우 단가정보를 리로드 합니다. 계속 진행하시겠습니까?");	 		
        // 				if(isYn){
        // 					var sSvcID        = "getDeliveryNoticeOrderDetail";//통신아이디
        // 					var sURL          = "svc::/rest/scm/delivery/brokerageWholesaler/getDeliveryNoticeOrderDetail";// 호출할 서버 페이지 주소
        // 					var sInDatasets   = "";//보내는데이터셋
        // 					var sOutDatasets  = "ds_dataD=ds_dataD";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        // 					var sArgument     = params;// 파라미터
        // 					var sCallbackFunc = "fn_callBack";//콜백
        // 					var sTranType     = "S"; // U:저장/삭제, S:조회
        // 					//API 호출
        // 					this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        // 					this.fn_detail_clear();
        // 				}else{
        // 					this.cal_dvy_pla_dt.set_value(preValue);
        // 				}
        // 				
        // 				trace(">>>>>>>>>>>>>>>>>>>>>>>>>>>>배송예정서 단가 변경 완료");
        // 			}
        // 		}
        // 	}			
        }

        
        //배송차량구분에 따른 운임보조비활성여부
        this.fn_rdo_dvy_vhc_dsc = function(){
        	if(this.rdo_dvy_vhc_dsc.value == "1" && var_dlvpnsht_temp_yn == "X"){
        		this.fn_dvy_far_astcsEnable(true);
        	}else if(this.rdo_dvy_vhc_dsc.value == "1" && var_dlvpnsht_temp_yn == "Y"){
        		this.fn_dvy_far_astcsEnable(true);
        	}else{
        		this.fn_dvy_far_astcsEnable(false);
        	}
        }

        

        
        this.Button22_onclick = function(obj,e)
        {
        	var odrpl_na_trpl_c = this.gfn_nullToEmpty(this.edt_orpl_na_trpl_c.value);
        	if(odrpl_na_trpl_c == "8808983410142" || odrpl_na_trpl_c == "8808983410159" || odrpl_na_trpl_c == "8808983324388" 
        		|| odrpl_na_trpl_c == "8808983326641" || odrpl_na_trpl_c == "8808983326634"){
        		alert('축산, 수산 배송예정서 등록 및 거래명세서 출력 업무는 축산, 수산 메뉴를 이용해 주시기 바랍니다.');
        		return false;
        	}
        	this.fn_beForPrint();
        }

        

        //거래명세표 출력
        this.fn_beForPrint = function(){
        	trace("fn_beForPrint");	
        	trace(var_spypl_na_trpl_c)	
        	trace(var_dvyaa_na_trpl_c);
        	trace(var_na_dvy_plash_slpno);

        	if(var_spypl_na_trpl_c == "" && var_dvyaa_na_trpl_c == "" && var_na_dvy_plash_slpno == "" && this.gfn_isNull(this.edt_na_dvy_plash_slpno.value)){
        		alert("배송예정서를 입력하세요");
        		return false;
        	}
        	var spypl_na_trpl_c = var_spypl_na_trpl_c;
        	var dvyaa_na_trpl_c = var_dvyaa_na_trpl_c;
        	var na_dvy_plash_slpno = var_na_dvy_plash_slpno;
        	var ozType = this.ozType.value;
        	
        	var params =  	"spypl_na_trpl_c=" + spypl_na_trpl_c
        				 + 	" dvyaa_na_trpl_c=" + dvyaa_na_trpl_c
        				 + 	" na_dvy_plash_slpno=" + na_dvy_plash_slpno
        				 +  " ozType=" + ozType;
        	
        	var sSvcID        = "isOKdlvpnsht";//통신아이디
        	var sURL          = "svc::/rest/scm/delivery/brokerageWholesaler/isOKdlvpnsht";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);  
        	
        }

        //거래명세표 출력
        this.fn_print = function(){
        	if(var_spypl_na_trpl_c == "" && var_dvyaa_na_trpl_c == "" && var_na_dvy_plash_slpno == "" && this.gfn_isNull(this.edt_na_dvy_plash_slpno.value)){
        		alert("배송예정서를 입력하세요");
        		return false;
        	}
        	trace("print");	
        	trace(var_spypl_na_trpl_c)	
        	trace(var_dvyaa_na_trpl_c);
        	trace(var_na_dvy_plash_slpno);
        	
        	var odrpl_na_trpl_c = this.edt_orpl_na_trpl_c.value;
        	
        	var sFileName = this.gfn_nullToEmpty(this.ds_uploadresult.getColumn(0,"SYSTEMFILENAME")) //직인파일;
        	var ozType = this.ozType.value;
        	var ozParam = {
              sId: 'VAN_DS_SC_0311',
              sUrl: '/rest/oz/delivery/brokerageWholesaler/printDeliveryNoticeOrder',
              paramType: 'param',
              sParam: {naDvyPlashSlpno:var_na_dvy_plash_slpno, spyplNaTrplC:var_spypl_na_trpl_c, dvyaaNaTrplC:var_dvyaa_na_trpl_c, systemFileName:sFileName, ozType:ozType, odrpl_na_trpl_c: odrpl_na_trpl_c}
              /*
              sUrl: '/rest/oz/delivery/printDeliveryNoticeOrder',
              paramType: 'param',
              sParam: {naDvyPlashSlpno:var_na_dvy_plash_slpno, spyplNaTrplC:var_spypl_na_trpl_c, dvyaaNaTrplC:var_dvyaa_na_trpl_c, systemFileName:sFileName}
              */
           };
           this.ozType.set_value('1');
           this.ozViewer(ozParam);   
        		
        }

        /* 발주처 조회 */
        this.btn_popup_onclick = function(obj,e)
        {
        	var trplC = this.getTrplCode();//권한사업장
        	var oArg = {form_id:"VAN_DS_SC_0300", trplC:trplC, DSTR_TER_YN:'N'};
        	var sOption = "autosize=true,title=false";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("POPUP_TRNREL_ODRPL","POPUP::POPUP_TRNREL_ODRPL.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.btn_popup02_onclick = function(obj,e)
        {
        	if(this.gfn_isNull(this.edt_orpl_na_trpl_c.value)){
        		alert("발주처를 먼저 선택해 주세요");
        		return false;
        	}
        	
        	var oArg = {form_id:"VAN_DS_SC_0300", odrpl_na_trpl_c:this.edt_orpl_na_trpl_c.value};
        	var sOption = "autosize=true,title=false";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("VAN_DS_SC_0100_P01","SCM.ORDER::VAN_DS_SC_0100_P01.xfdl",oArg,sOption,sPopupCallBack);
        }

        
        //상품조회 팝업
        this.btn_popup00_onclick = function(obj,e)
        {
        	this.fn_searchWRS("0");
        }

        this.fn_searchWRS = function(auto){
        	var na_wrs_c = this.gfn_nullToEmpty(this.edt_na_wrs_c.value);
        	var wrsnm = this.gfn_nullToEmpty(this.edt_wrsnm.value);
        	var odrpl_na_trpl_c = this.gfn_nullToEmpty(this.edt_orpl_na_trpl_c.value);
        	var odrpl_na_team_c = this.gfn_nullToEmpty(this.ds_dataM.getColumn(0, "ODRPL_NA_TEAM_C"));
        	var chkDate = this.gfn_nullToEmpty(this.ds_dataM.getColumn(0, "DVY_PLA_DT"));
        	var trplC = this.getTrplCode();//권한사업장
        	var idx = "";
        	var searchTxt = "";
        	if(this.gfn_isNull(this.edt_orpl_na_trpl_c.value)){
        		alert("발주처를 먼저 선택해 주세요");
        		return false;
        	}
        	
        	if(this.gfn_isNull(this.cbo_cser_ctr_tpc.value)){
        		alert("발주["+this.edt_orpl_na_trpl_c.value+"] 거래관계를 확인하세요");
        		return false;
        	}
        	
        	if(this.gfn_length(na_wrs_c) == 6){
        		na_wrs_c = this.edt_pre_cd_good.value + na_wrs_c;
        	}
        	
        	if(this.gfn_length(na_wrs_c) == 5){
        		na_wrs_c = this.edt_pre_cd_good.value + na_wrs_c;
        		var naArr = na_wrs_c.substring(0,12).split("");
        		var v1 = 0;
        		var v2 = 0;
        		var v3 = 0;
        		for(var i=0; i<naArr.length; i++){
        			if(i % 2 == 0){
        				v2 += parseInt(naArr[i]);
        			}else{
        				v1 += parseInt(naArr[i]);
        			}
        		}
        		v1 = v1 * 3;
        		v2 = v1 + v2;

        		v3 = 10 - parseInt(v2.toString().substring(v2.toString().length-1));
        		if(v3 == 10){
        			v3 = 0;
        		}
        		na_wrs_c = na_wrs_c + v3;
        	}
        	
        	if(!this.gfn_isNull(this.edt_na_wrs_c.value)){
        		idx = "2"
        		searchTxt = na_wrs_c;
        	}else{
        		idx = "1"
        		searchTxt = this.edt_wrsnm.value;
        	}
        		
        		
        	//거래관계 Set
        	trnrelParams.in_BsDay 	= this.cal_dvy_pla_dt.value;	//1.기준일자
        	var params = this.getParamJsonToString(trnrelParams);
        	//trace("거래관계 : " + params);
        		
        	//상품명 팝업
        	var oArg = {
        					form_id:"VAN_DS_SC_0300", 
        					odrpl_na_trpl_c:odrpl_na_trpl_c, 
        					ddly_yn:'0', prgr_c:var_prgr_c, 
        					odrpl_na_team_c:odrpl_na_team_c,
        					odrpl_na_trpl_n:this.edt_shrt_bzplnm.value,
        					chkDate:chkDate, 
        					cser_ctr_tpc:var_cser_ctr_tpc, 
        					trplC:trplC, 
        					auto:auto, 
        					idx:idx,
        					searchTxt:searchTxt,
        					params:params
        				};
        	trace("거래관계 : " + params);
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("wrsSearchPop","SCM.ORDER::VAN_DS_SC_0100_P02.xfdl",oArg,sOption,sPopupCallBack);
        }

        //배송예정량수의 금액 계산
        this.mae_dvy_pla_qt_onkeydown = function(obj,e)
        {
        	if(e.keycode == "13"){
        		this.btn_rowUpdate_onclick();
        	}else{
        		this.fn_calc_dvy_qt();
        		this.detail_VatCalc();
        	}
        	
        }

        //배송예정량수의 금액 계산
        this.mae_dvy_pla_qt_ontextchange = function(obj,e)
        {
        	if(e.keycode != "13"){
        		this.fn_calc_dvy_qt();
        		this.detail_VatCalc();
        	}
        	
        }

        //배송예정량수의 금액 계산
        this.mae_dvy_pla_qt_onkeyup = function(obj,e)
        {
        	if(e.keycode == "13"){
        		this.btn_rowUpdate_onclick();
        	}else{
        		this.fn_calc_dvy_qt();
        		this.detail_VatCalc();
        	}
        }

        //배송금액 계산
        this.fn_calc_dvy_qt = function(){

        	
        	if(this.gfn_isNull(this.edt_na_wrs_c.value)){
        		//alert("상품을 선택해 주세요");
        		//return false;
        	}
        	
        	trace("공병수량 : " + this.gfn_nullToEmpty(this.edt_vcbt_qt.value));
        	trace("배송예정량 : " + this.gfn_nullToEmpty(this.mae_dvy_pla_qt.value));
        	trace("단가 : " + this.gfn_nullToEmpty(this.mae_dvy_wrs_upr.value));
        	var odr_am = this.gfn_nullToEmpty(this.mae_dvy_pla_qt.value) * this.gfn_nullToEmpty(this.mae_dvy_wrs_upr.value);
        	trace(">> 배송금액 계산 : " + odr_am);
        	this.mae_odr_am.set_value(odr_am);
        }

        //배송부가세 계산
        this.detail_VatCalc = function(){
        	var dvy_am = this.gfn_nullToEmpty(this.mae_dvy_pla_qt.value) * this.gfn_nullToEmpty(this.mae_dvy_wrs_upr.value);
        	if (this.gfn_nullToEmpty(this.edt_txt_dsc.value) == '1' ) {
                var dvy_vat = this.fCalVat02(dvy_am, 10);
            }else{
        		var dvy_vat = 0;
            }
            trace(">> 배송부가세 계산 : " + dvy_vat);
            this.mae_odr_vat.set_value(dvy_vat);
        }
        //배송부가세 계산
        this.fCalVat02 = function(dvy_am,vatRat){
        	 var lVat;

            dvy_am = this.fParseFloat(dvy_am);
            vatRat = this.fParseFloat(vatRat);
            if ( vatRat ==0 || dvy_am <= 10 ) return 0;
            lVat = Math.floor(dvy_am/((100+vatRat)/vatRat));
            return lVat;
        }

        this.fParseFloat = function(txt){
            var tmpflt= 0.0;
            if ( !isNaN(txt) && typeof txt != 'string' ) return( parseFloat(txt,10) );
            if ( isNaN(txt) ) tmpflt = parseFloat(txt.delMask(),10);
            else tmpflt =  parseFloat(txt,10) ;
            if ( isNaN(tmpflt) ) return(0.0)
            else  return( tmpflt);
        }

        

        

        this.btn_help_onclick = function(obj,e)
        {
        	var systemFileName ="DeliveryNoticeA.pdf";
        	var fileName = "HelpManual1.pdf";
        	
        	var strDownUrl = application.gv_server_url+"rest/common/fileDownload?systemFileName="+systemFileName+"&fileName="+fileName+"&isSampleFile=Y";
        	var wbs_dw     = this.gfn_createWebBorwserComponent(this);
        	
        	wbs_dw.set_url(strDownUrl);
        }

        this.cal_dvy_pla_dt_onchanged = function(obj,e)
        {
        	
        	if(this.gfn_isNull(this.edt_orpl_na_trpl_c.value)){
        		alert("발주처가 존재 하지 않습니다. ");
        		return false;
        	}
        	this.fn_detail_clear();
        	var today = this.gfn_today('yyyyMMdd');
        	trace("post : " + e.postvalue);
        	trace("pre : " + e.prevalue);
        	postValue = e.postvalue;
        	preValue = e.prevalue;
        	
        	this.fn_BizDtYn("1", preValue, postValue);
        }

        

        
        /*배송예정일자 기준 단가 변경 메세지 처리*/
        this.fn_odr_pcs_change = function(option){
        	trace("배송예정일자 기준 단가 변경 메세지 시작");
        	var msg = "기준일자 : [ " + this.ds_dataM.getColumn(0, "DVY_PLA_DT") + " ]\n";
        	var changeCnt = 0;
        	for(var row=0; row < this.ds_dataD.rowcount; row++){
        		var dvy_pla_dt = this.ds_dataM.getColumn(0, "DVY_PLA_DT");
        		var yy = dvy_pla_dt.substring(0, 4);
        		var mm = dvy_pla_dt.substring(4, 6);
        		var dd = dvy_pla_dt.substring(6, 8);
        		dvy_pla_dt = yy + "년" + mm + "월" + dd + "일";
        		var na_wrs_c 	= this.ds_dataD.getColumn(row, "NA_WRS_C");
        		var wrsnm 		= this.ds_dataD.getColumn(row, "WRSNM");
        		var odr_pcs 	= this.gfn_getNum(this.ds_dataD.getColumn(row, "ODR_PCS"));
        		var new_odr_pcs = this.gfn_getNum(this.ds_dataD.getColumn(row, "NEW_ODR_PCS"));
        		var txt_dsc 	= this.ds_dataD.getColumn(row, "TXT_DSC"); 
        		var dvy_pla_qt 	= this.gfn_getNum(this.ds_dataD.getColumn(row, "DVY_PLA_QT"));
        		var dvy_wrs_upr = this.gfn_getNum(this.ds_dataD.getColumn(row, "DVY_WRS_UPR"));
        		var dvy_vat 	= 0;
        		var odr_am = 0;
        		if(odr_pcs != new_odr_pcs && new_odr_pcs != "99999999"){
        			++changeCnt;
        			//alert(this.ds_trnrel.getColumn(0, "ROTS_FLEX_PR_APL_YN"));
        			
        			if(option == "order"){
        				//발주서 로딩 시 
        				odr_am = new_odr_pcs * dvy_pla_qt;
        			}else{
        				trace("############### 탄력가격적용여부 : " + this.ds_trnrel.getColumn(0, "ROTS_FLEX_PR_APL_YN"));
        				if(this.ds_trnrel.getColumn(0, "ROTS_FLEX_PR_APL_YN") == "1"){
        					//배송예정서 로딩 시
        					odr_am = dvy_wrs_upr * dvy_pla_qt;
        				}else{
        					odr_am = new_odr_pcs * dvy_pla_qt;
        					this.ds_dataD.setColumn(row, "DVY_WRS_UPR", new_odr_pcs);
        				}
        				
        			}
        			
        			if(txt_dsc == "1"){
        				dvy_vat = this.fCalVat02(odr_am, 10);
        			}else{
        				dvy_vat = 0;
        			}
        			
        			/*
        				2015.12.28
        				swha
        				발주금지여부 추가
        			*/
        			var odrFbidYn = this.gfn_nullToEmpty(this.ds_dataD.getColumn(row, "ODR_FBID_YN"));//발주가능여부 1 : 발주금지, 0 : 발주가능
        			var odrFbidResultTxt = "";
        			if(odrFbidYn == "1"){
        				odrFbidResultTxt = "발주상태 : 발주금지";
        			}
        						
        			trace("NA_WRS_C 	: " + na_wrs_c);
        			trace("NA_WRS_C 	: " + wrsnm);
        			trace("NEW_ODR_PCS 	: " + new_odr_pcs);
        			trace("ODR_AM 		: " + odr_am);
        			trace("ODR_VAT 		: " + dvy_vat);
        			
        			
        			
        			this.ds_dataD.setColumn(row, "ODR_VAT", dvy_vat);
        			this.ds_dataD.setColumn(row, "ODR_AM", odr_am);
        			this.ds_dataD.setColumn(row, "ODR_PCS", new_odr_pcs);
        			//this.ds_dataD.setColumn(row, "DVY_WRS_UPR", new_odr_pcs);
        			
        			this.detail_sum(2, row);//total 
        			msg = 	msg 
        					+ 	"상품명 : [ " + wrsnm 		+ "] \n" 
        					+   "상품코드 : [ " + na_wrs_c 	+ "]\n"
        					+   "기존상품단가 : [ " + odr_pcs 	+ "] -> 변경상품단가 : [ " + new_odr_pcs	+ " ] \n"
        					+ 	odrFbidResultTxt + " \n"
        					+ "=====================================\n";
        		}
        	}
        	if(changeCnt > 0){
        		alert(msg);
        	}
        }

        

        
        //결품사유에 따른 공급가능일자 초기화
        this.cbo_dqpd_rsnc_onitemchanged = function(obj,e)
        {
        	if(this.gfn_isNull(this.cbo_dqpd_rsnc.value)){
        		this.cal_spy_psb_dt.set_value('');
        	}
        }

        

        

        this.fn_sum = function(){
        	
        	var total_am = 0;
        	var total_vat = 0;
        	for(var i = 0; i < this.ds_dataD.rowcount; i++){
        		if(this.gfn_nullToEmpty(this.ds_dataD.getColumn(i, "DEL_YN")) != "1"){
        			total_am 	= total_am + this.gfn_getNum(this.gfn_toString(this.gfn_nullToEmpty(this.ds_dataD.getColumn(i, "ODR_AM"))));
        			total_vat 	= total_vat + this.gfn_getNum(this.gfn_toString(this.gfn_nullToEmpty(this.ds_dataD.getColumn(i, "ODR_VAT"))));
        		}
        		
        	}
        	this.ds_dataM.setColumn(0, "TOTAL_DVY_AM", total_am);
        	this.ds_dataM.setColumn(0, "TOTAL_DVY_VAT", total_vat);
        }

        this.btn_cancle_onclick = function(obj,e)
        {
        	var odrpl_na_trpl_c = this.gfn_nullToEmpty(this.edt_orpl_na_trpl_c.value);
        	if(odrpl_na_trpl_c == "8808983410142" || odrpl_na_trpl_c == "8808983410159" || odrpl_na_trpl_c == "8808983324388" 
        		|| odrpl_na_trpl_c == "8808983326641" || odrpl_na_trpl_c == "8808983326634"){
        		alert('축산, 수산 배송예정서 등록 및 거래명세서 출력 업무는 축산, 수산 메뉴를 이용해 주시기 바랍니다.');
        		return false;
        	}
        	
        	if(this.gfn_nullToEmpty(this.edt_odr_slpno.value) != null){
        		var chk = application.confirm("정말 취소하겠습니까? 취소시 해당 발주서는 배송예정서를 작성할 수 없습니다.");
        		if(chk){
        			this.fn_cancelProc();
        		}
        	}else{
        		this.fn_cancelProc();
        	}
        }

        

        
        this.edt_orpl_na_trpl_c_onkeydown = function(obj,e)
        {
        	
        	
        	if(e.keycode == '13'){
        		var trplO = this.gfn_nullToEmpty(this.edt_orpl_na_trpl_c.value);
        		if(this.gfn_length(trplO) < 6){
        			alert("발주처 코드["+trplO+"] 6자리 이상 입력해 주세요");
        			return false;
        		}
        		
        		var idx = "0";
        		
        		if(trplO.length == 6){
        			trplO = '8808983' + trplO;
        		}
        		
        		var trplC = this.getTrplCode();//권한사업장
        		var oArg = {form_id:"VAN_DS_SC_0300", trplC:trplC, idx:idx, auto:"1", trplO:trplO};
        		var sOption = "autosize=true,title=false";
        		var sPopupCallBack = "fn_popupAfter";    
        		this.gfn_openPopup("POPUP_TRNREL_ODRPL","POPUP::POPUP_TRNREL_ODRPL.xfdl",oArg,sOption,sPopupCallBack);
        	}
        }

        this.edt_shrt_bzplnm_onkeydown = function(obj,e)
        {
        	if(e.keycode == "13"){
        		var trplON = this.edt_shrt_bzplnm.value;
        		if(this.gfn_length(trplON) == 0){
        			alert("발주처명을 입력해 주세요");
        			return false;
        		}
        		
        		var idx = "1";
        		var trplON = this.edt_shrt_bzplnm.value;
        		var trplC = this.getTrplCode();//권한사업장
        		var oArg = {form_id:"VAN_DS_SC_0300", trplC:trplC, idx:idx, auto:"1", trplON:trplON};
        		var sOption = "autosize=true,title=false";
        		var sPopupCallBack = "fn_popupAfter";    
        		this.gfn_openPopup("POPUP_TRNREL_ODRPL","POPUP::POPUP_TRNREL_ODRPL.xfdl",oArg,sOption,sPopupCallBack);
        	}
        }

        this.edt_na_wrs_c_onkeydown = function(obj,e)
        {
        	
        	if(e.keycode == "13"){
        		this.fn_searchWRS("1");
        	}
        }

        
        //수주내역조회에서 배송예정서로 넘어오는 경우 파라미터
        this.searchOrder = function(){
        	trace("** 수주내역조회 > 배송예정서 **");
        	if(application.trplO && application.isPath){
        		var_odrpl_na_trpl_c = application.trplO;
        		var_odrpl_na_team_c = application.teamO;
        		var_odr_dt 			= application.odrDt;
        		var_odr_slpno 		= application.odrSlpno;
        		var trplS 			= application.trplS;
        		var_dlvpnsht_temp_yn = "X";
        		
        		var ds = this.div_auth.ds_authorityWorkplace;
        		var n = ds.findRow('NA_TRPL_C', trplS);
        		this.div_auth.cbo_authorityWorkplace.set_index(n);
        		this.div_auth.set_enable(false);
        		this.fn_srhOrder();
        		
        		//초기화
        		application.trplO		= "";
        		application.teamO		= "";
        		application.odrDt		= "";
        		application.odrSlpno	= "";
        		application.trplS 		= "";
        		application.isPath		= false;
        	}
        }

        

        
        this.btn_qt_onclick = function(obj,e)
        {
        	this.mae_dvy_pla_qt.set_value(0);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("onactivate", this.VAN_DS_SC_0300_onactivate, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.btn_clear.addEventHandler("onclick", this.btn_clear_onclick, this);
            this.btn_rowUpdate.addEventHandler("onclick", this.btn_rowUpdate_onclick, this);
            this.btn_init.addEventHandler("onclick", this.btn_init_onclick, this);
            this.btn_pup_van_seq.addEventHandler("onclick", this.btn_pup_van_seq_onclick, this);
            this.edt_na_wrs_c.addEventHandler("onkeydown", this.edt_na_wrs_c_onkeydown, this);
            this.edt_na_wrs_c.addEventHandler("oneditclick", this.edt_na_wrs_c_oneditclick, this);
            this.edt_wrsnm.addEventHandler("onkeydown", this.edt_na_wrs_c_onkeydown, this);
            this.btn_popup00.addEventHandler("onclick", this.btn_popup00_onclick, this);
            this.btn_popup01.addEventHandler("onclick", this.btn_popup01_onclick, this);
            this.cal_dvy_pla_dt.addEventHandler("ontextchanged", this.cal_dvy_pla_dt_ontextchanged, this);
            this.cal_dvy_pla_dt.addEventHandler("onchanged", this.cal_dvy_pla_dt_onchanged, this);
            this.btn_help.addEventHandler("onclick", this.btn_help_onclick, this);
            this.Button22.addEventHandler("onclick", this.Button22_onclick, this);
            this.sta_back_bar01.addEventHandler("onclick", this.sta_back_bar01_onclick, this);
            this.edt_orpl_na_trpl_c.addEventHandler("onkeydown", this.edt_orpl_na_trpl_c_onkeydown, this);
            this.edt_shrt_bzplnm.addEventHandler("onkeydown", this.edt_shrt_bzplnm_onkeydown, this);
            this.mae_dvy_pla_qt.addEventHandler("onkeyup", this.mae_dvy_pla_qt_onkeyup, this);
            this.cbo_dqpd_rsnc.addEventHandler("onitemchanged", this.cbo_dqpd_rsnc_onitemchanged, this);
            this.mae_dvy_wrs_upr.addEventHandler("onkeyup", this.mae_dvy_pla_qt_onkeyup, this);
            this.btn_popup02.addEventHandler("onclick", this.btn_popup02_onclick, this);
            this.btn_popup.addEventHandler("onclick", this.btn_popup_onclick, this);
            this.FileUpload00.addEventHandler("onsuccess", this.FileUpload00_onsuccess, this);
            this.btn_cancle.addEventHandler("onclick", this.btn_cancle_onclick, this);
            this.btn_f_cancel.addEventHandler("onclick", this.btn_f_cancel_onclick, this);
            this.btn_qt.addEventHandler("onclick", this.btn_qt_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0311.xfdl");
        this.loadPreloadList();
       
    };
}
)();
