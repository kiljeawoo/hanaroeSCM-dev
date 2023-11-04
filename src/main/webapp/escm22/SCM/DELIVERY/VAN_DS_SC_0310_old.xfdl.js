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
                this.set_name("VAN_DS_SC_0310");
                this.set_titletext("배송예정서 직송등록");
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
            obj._setContents("<ColumnInfo><Column id=\"ODRPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SHRT_BZPLNM\" type=\"STRING\" size=\"256\"/><Column id=\"TEAMNM\" type=\"STRING\" size=\"256\"/><Column id=\"DVYAA_C\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_CTR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_RQR_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_VHC_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_VHC\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_VHC_STS\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ODR_AM\" type=\"FLOAT\" size=\"256\"/><Column id=\"TOTAL_ODR_VAT\" type=\"FLOAT\" size=\"256\"/><Column id=\"TOTAL_DVY_AM\" type=\"FLOAT\" size=\"256\"/><Column id=\"TOTAL_DVY_VAT\" type=\"FLOAT\" size=\"256\"/><Column id=\"SPY_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"IS_OD_BE_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"NA_ODR_STS_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"VHCNO\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_PLA_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SLGT_ETR_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_FAR_ASTCS\" type=\"FLOAT\" size=\"256\"/><Column id=\"SPYPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"RVOPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"RVOPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"DVYAA_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"DVYAA_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_VCBT_AM\" type=\"INT\" size=\"256\"/><Column id=\"TOTAL_VCBX_AM\" type=\"INT\" size=\"256\"/><Column id=\"TOTAL_DVY_SSDY\" type=\"FLOAT\" size=\"256\"/><Column id=\"MNGT_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"TEMP_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"ODRPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_DSQNO\" type=\"STRING\" size=\"256\"/><Column id=\"VAN_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"BOXPE_AQZ\" type=\"INT\" size=\"256\"/><Column id=\"WRS_STDNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_UNT_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_QT\" type=\"INT\" size=\"256\"/><Column id=\"ODR_PCS\" type=\"INT\" size=\"256\"/><Column id=\"ODR_VAT\" type=\"INT\" size=\"256\"/><Column id=\"ODR_AM\" type=\"INT\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_PLA_QT\" type=\"INT\" size=\"256\"/><Column id=\"DQPD_RSNC\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"DVYAA_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_DVY_PLASH_SLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_PLA_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_UPR\" type=\"INT\" size=\"256\"/><Column id=\"VCBX_UPR\" type=\"INT\" size=\"256\"/><Column id=\"VCBT_AM\" type=\"INT\" size=\"256\"/><Column id=\"VCBX_AM\" type=\"INT\" size=\"256\"/><Column id=\"SSDYRT\" type=\"FLOAT\" size=\"256\"/><Column id=\"SSDY_BAS_AM\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
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


            
            // UI Components Initialize
            obj = new Static("sta_back_bar10", "absolute", "109", "257", null, "29", "15", null, this);
            obj.set_taborder("239");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar03", "absolute", "109", "201", null, "29", "15", null, this);
            obj.set_taborder("128");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "0", "41", "21", "174", null, this);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("div_menu", "absolute", "0", "0", null, "21", "406", null, this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar02", "absolute", "109", "117", null, "29", "15", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title01", "absolute", "0", "61", "110", "29", null, null, this);
            obj.set_taborder("5");
            obj.set_text("발주번호");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title04", "absolute", "0", "117", "110", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_text("배송예정서번호");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_odr_slpno", "absolute", "109", "61", null, "29", "15", null, this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_na_dvy_plash_slpno", "absolute", "113", "121", "154", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_readonly("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pagename01", "absolute", "0", "37", "135", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_text("Master 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_init", "absolute", null, "0", "53", "21", "217", null, this);
            obj.set_taborder("125");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pup_van_seq", "absolute", "356", "65", "21", "21", null, null, this);
            obj.set_taborder("136");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", null, "0", "431", "21", "268", null, this);
            obj.set_taborder("209");
            obj.set_text("Div00");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popup01", "absolute", "270", "121", "21", "21", null, null, this);
            obj.set_taborder("211");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_odr_dt", "absolute", "113", "65", "98", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("222");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Edit("edt_odr_slpno", "absolute", "213", "65", "140", "21", null, null, this);
            obj.set_taborder("223");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar04", "absolute", "109", "229", null, "29", "15", null, this);
            obj.set_taborder("233");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title10", "absolute", "0", "257", "110", "29", null, null, this);
            obj.set_taborder("246");
            obj.set_text("운임보조비");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title12", "absolute", "294", "229", "110", "29", null, null, this);
            obj.set_taborder("247");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            obj.set_text("배송예정금액");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_dvy_far_astcs", "absolute", "113", "261", "178", "21", null, null, this);
            obj.set_taborder("250");
            obj.set_value("0");
            obj.set_mask("#,##0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_total_dvy_am", "absolute", "407", "233", "110", "21", null, null, this);
            obj.set_taborder("252");
            obj.set_value("0");
            obj.set_mask("#,##0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_total_dvy_vat", "absolute", "519", "233", "84", "21", null, null, this);
            obj.set_taborder("253");
            obj.set_value("0");
            obj.set_mask("#,##0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title22", "absolute", "519", "201", "110", "29", null, null, this);
            obj.set_taborder("256");
            obj.set_text("공급유형");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_spy_tpc", "absolute", "631", "205", "151", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_spy_tpc_innerdataset = new Dataset("cbo_spy_tpc_innerdataset", this.cbo_spy_tpc);
            cbo_spy_tpc_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\"/></Row><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">매취</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">수탁</Col></Row><Row><Col id=\"codecolumn\">16</Col><Col id=\"datacolumn\">특약</Col></Row></Rows>");
            obj.set_innerdataset(cbo_spy_tpc_innerdataset);
            obj.set_taborder("257");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");

            obj = new Button("btn_init00", "absolute", null, "0", "53", "21", "16", null, this);
            obj.set_taborder("293");
            obj.set_text("도움말");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button22", "absolute", null, "0", "101", "21", "71", null, this);
            obj.set_taborder("294");
            obj.set_text("거래명세서출력");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title09", "absolute", "294", "201", "110", "29", null, null, this);
            obj.set_taborder("298");
            obj.set_text("배송상태");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar01", "absolute", "109", "89", null, "29", "15", null, this);
            obj.set_taborder("303");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title07", "absolute", "0", "89", "110", "29", null, null, this);
            obj.set_taborder("304");
            obj.set_text("실발주처");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_orpl_na_trpl_c", "absolute", "113", "93", "98", "21", null, null, this);
            obj.set_taborder("305");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_shrt_bzplnm", "absolute", "213", "93", "179", "21", null, null, this);
            obj.set_taborder("306");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_orpl_na_team_c", "absolute", "395", "93", "97", "21", null, null, this);
            obj.set_taborder("308");
            obj.set_maxlength("3");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_teamnm", "absolute", "494", "93", "140", "21", null, null, this);
            obj.set_taborder("309");
            obj.set_maxlength("12");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_h_is_od_be_order", "absolute", "109", "41", "50", "21", null, null, this);
            obj.set_taborder("321");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_na_odr_sts_dsc_n", "absolute", "407", "205", "110", "21", null, null, this);
            obj.set_taborder("322");
            obj.set_maxlength("12");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title08", "absolute", "294", "257", "110", "29", null, null, this);
            obj.set_taborder("325");
            obj.set_text("임시저장");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_temp_yn", "absolute", "407", "262", "86", "19", null, null, this);
            obj.set_taborder("326");
            obj.set_text("임시저장");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_total_odr_vat", "absolute", "203", "233", "88", "21", null, null, this);
            obj.set_taborder("255");
            obj.set_value("0");
            obj.set_mask("#,##0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title03", "absolute", "0", "229", "110", "29", null, null, this);
            obj.set_taborder("224");
            obj.set_text("발주총액");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_total_odr_am", "absolute", "113", "233", "88", "21", null, null, this);
            obj.set_taborder("254");
            obj.set_value("0");
            obj.set_mask("#,##0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar06", "absolute", "109", "145", null, "29", "15", null, this);
            obj.set_taborder("327");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title25", "absolute", "294", "145", "110", "29", null, null, this);
            obj.set_taborder("330");
            obj.set_text("배송지");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title26", "absolute", "0", "201", "110", "29", null, null, this);
            obj.set_taborder("331");
            obj.set_text("계약유형");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_cser_ctr_tpc", "absolute", "113", "205", "178", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("333");
            obj.set_innerdataset("@ds_ctr_tpc");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_enable("false");

            obj = new Edit("edt_dvyaa_n", "absolute", "407", "149", "83", "21", null, null, this);
            obj.set_taborder("334");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title11", "absolute", "0", "145", "110", "29", null, null, this);
            obj.set_taborder("339");
            obj.set_text("납품요청일자");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title23", "absolute", "519", "145", "110", "29", null, null, this);
            obj.set_taborder("340");
            obj.set_text("주관거래처");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mngt_na_trpl_c", "absolute", "631", "149", "103", "21", null, null, this);
            obj.set_taborder("341");
            obj.set_maxlength("12");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mngt_na_team_c", "absolute", "736", "149", "28", "21", null, null, this);
            obj.set_taborder("342");
            obj.set_maxlength("12");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mngt_na_tr_tpc", "absolute", "766", "149", "14", "21", null, null, this);
            obj.set_taborder("343");
            obj.set_maxlength("12");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dvy_rqr_dt", "absolute", "113", "149", "178", "21", null, null, this);
            obj.set_taborder("227");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title28", "absolute", "0", "173", "110", "29", null, null, this);
            obj.set_taborder("344");
            obj.set_text("배송차량구분");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_odr_slpno00", "absolute", "109", "173", null, "29", "15", null, this);
            obj.set_taborder("345");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_dvy_vhc_dsc", "absolute", "113", "176", "180", "21", null, null, this);
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

            obj = new Static("sta_title24", "absolute", "294", "173", "110", "29", null, null, this);
            obj.set_taborder("131");
            obj.set_text("배송예정일자");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_dvy_pla_dt", "absolute", "407", "177", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("228");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("sta_title30", "absolute", "519", "173", "110", "29", null, null, this);
            obj.set_taborder("346");
            obj.set_text("수요자정산처");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cser_adjpl_na_trpl_c", "absolute", "631", "177", "103", "21", null, null, this);
            obj.set_taborder("347");
            obj.set_maxlength("12");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cser_adjpl_na_team_c", "absolute", "736", "177", "28", "21", null, null, this);
            obj.set_taborder("348");
            obj.set_maxlength("12");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "21", "803", "20", null, null, this);
            obj.set_taborder("353");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "286", "803", "20", null, null, this);
            obj.set_taborder("354");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "110", "53", "3", "300", null, null, this);
            obj.set_taborder("355");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "404", "61", "3", "300", null, null, this);
            obj.set_taborder("356");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "628", "61", "3", "300", null, null, this);
            obj.set_taborder("357");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar14", "absolute", "68", "465", null, "29", "16", null, this);
            obj.set_taborder("358");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar08", "absolute", "68", "353", null, "29", "16", null, this);
            obj.set_taborder("359");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pagename03", "absolute", "-1", "302", "180", "21", null, null, this);
            obj.set_taborder("360");
            obj.set_text("상품정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title13", "absolute", "-1", "353", "110", "29", null, null, this);
            obj.set_taborder("361");
            obj.set_text("상품코드");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar07", "absolute", "-1", "325", null, "29", "16", null, this);
            obj.set_taborder("362");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_treatment00", "absolute", "6", "329", "110", "21", null, null, this);
            obj.set_taborder("363");
            obj.set_text("처리대상건수 :");
            this.addChild(obj.name, obj);

            obj = new Static("sta_grd_master_cnt", "absolute", "118", "329", "25", "21", null, null, this);
            obj.set_taborder("364");
            obj.set_text("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear", "absolute", "736", "329", "47", "21", null, null, this);
            obj.set_taborder("365");
            obj.set_text("CLEAR");
            this.addChild(obj.name, obj);

            obj = new Button("btn_rowUpdate", "absolute", "681", "329", "53", "21", null, null, this);
            obj.set_taborder("366");
            obj.set_text("행수정");
            this.addChild(obj.name, obj);

            obj = new Static("sta_treat_count02", "absolute", "142", "329", "25", "21", null, null, this);
            obj.set_taborder("367");
            obj.set_text("건");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_na_wrs_c", "absolute", "261", "357", "110", "21", null, null, this);
            obj.set_taborder("368");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_wrsnm", "absolute", "374", "357", "146", "21", null, null, this);
            obj.set_taborder("369");
            obj.set_maxlength("12");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popup00", "absolute", "524", "357", "21", "21", null, null, this);
            obj.set_taborder("370");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pre_cd_good", "absolute", "112", "357", "145", "21", null, null, this);
            obj.set_taborder("371");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar00", "absolute", "68", "381", null, "29", "16", null, this);
            obj.set_taborder("372");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00", "absolute", "-1", "381", "110", "29", null, null, this);
            obj.set_taborder("373");
            obj.set_text("규격");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_wrs_stdnm", "absolute", "112", "385", "145", "21", null, null, this);
            obj.set_taborder("374");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "108", "410", "154", "20", null, null, this);
            obj.set_taborder("375");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title02", "absolute", "261", "381", "110", "29", null, null, this);
            obj.set_taborder("376");
            obj.set_text("단위");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_na_wrs_unt_c", "absolute", "374", "385", "145", "21", null, null, this);
            obj.set_taborder("377");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "370", "410", "154", "20", null, null, this);
            obj.set_taborder("378");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title18", "absolute", "523", "381", "110", "29", null, null, this);
            obj.set_taborder("379");
            obj.set_text("BOX입수");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_boxpe_aqz", "absolute", "636", "385", "145", "21", null, null, this);
            obj.set_taborder("380");
            obj.set_value("0");
            obj.set_mask("#,##0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar09", "absolute", "68", "409", null, "29", "16", null, this);
            obj.set_taborder("381");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title16", "absolute", "-1", "409", "110", "29", null, null, this);
            obj.set_taborder("382");
            obj.set_text("수주량");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_odr_qt", "absolute", "112", "413", "145", "21", null, null, this);
            obj.set_taborder("383");
            obj.set_value("0");
            obj.set_mask("#,##0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title17", "absolute", "261", "409", "110", "29", null, null, this);
            obj.set_taborder("384");
            obj.set_text("배송예정량");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_dvy_pla_qt", "absolute", "374", "413", "145", "21", null, null, this);
            obj.set_taborder("385");
            obj.set_value("0");
            obj.set_mask("#,##0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title19", "absolute", "523", "409", "110", "29", null, null, this);
            obj.set_taborder("386");
            obj.set_text("계약단가");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_color("firebrick");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_odr_pcs", "absolute", "636", "413", "145", "21", null, null, this);
            obj.set_taborder("387");
            obj.set_value("0");
            obj.set_mask("#,##0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "108", "438", "154", "20", null, null, this);
            obj.set_taborder("388");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "370", "438", "154", "20", null, null, this);
            obj.set_taborder("389");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar13", "absolute", "68", "437", null, "29", "16", null, this);
            obj.set_taborder("390");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title14", "absolute", "-1", "437", "110", "29", null, null, this);
            obj.set_taborder("391");
            obj.set_text("납품단가");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title05", "absolute", "261", "437", "110", "29", null, null, this);
            obj.set_taborder("392");
            obj.set_text("금액");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title15", "absolute", "523", "437", "110", "29", null, null, this);
            obj.set_taborder("393");
            obj.set_text("부가세");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_color("firebrick");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_odr_vat", "absolute", "636", "441", "145", "21", null, null, this);
            obj.set_taborder("394");
            obj.set_value("0");
            obj.set_mask("#,##0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_odr_am", "absolute", "374", "441", "145", "21", null, null, this);
            obj.set_taborder("395");
            obj.set_value("0");
            obj.set_mask("#,##0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title20", "absolute", "523", "465", "110", "29", null, null, this);
            obj.set_taborder("396");
            obj.set_text("삭제여부");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("false");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title21", "absolute", "-1", "465", "110", "29", null, null, this);
            obj.set_taborder("397");
            obj.set_text("결품사유");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_dqpd_rsnc", "absolute", "112", "469", "406", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("398");
            obj.set_innerdataset("@ds_dvy_plash_imp_rsn_dsc");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");

            obj = new MaskEdit("mae_dvy_wrs_upr", "absolute", "112", "441", "145", "21", null, null, this);
            obj.set_taborder("399");
            obj.set_value("0");
            obj.set_mask("#,##0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_del_yn", "absolute", "636", "470", "46", "19", null, null, this);
            obj.set_taborder("400");
            obj.set_text("삭제");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_visible("false");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_master", "absolute", "0", "509", null, "321", "16", null, this);
            obj.set_taborder("401");
            obj.set_binddataset("ds_dataD");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"121\"/><Column size=\"250\"/><Column size=\"57\"/><Column size=\"73\"/><Column size=\"101\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"97\"/><Column size=\"85\"/><Column size=\"116\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"발주처코드\"/><Cell col=\"2\" rowspan=\"2\" text=\"발주처팀코드\"/><Cell col=\"3\" rowspan=\"2\" text=\"발주일자\"/><Cell col=\"4\" rowspan=\"2\" text=\"발주전표번호\"/><Cell col=\"5\" rowspan=\"2\" text=\"발주상세일련번호\"/><Cell col=\"6\" rowspan=\"2\" text=\"상품코드\"/><Cell col=\"7\" rowspan=\"2\" text=\"상품명\"/><Cell col=\"8\" text=\"규격\"/><Cell col=\"9\" rowspan=\"2\" text=\"BOX입수\"/><Cell col=\"10\" text=\"수주량\"/><Cell col=\"11\" text=\"계약단가\"/><Cell col=\"12\" text=\"금액\"/><Cell col=\"13\" rowspan=\"2\" text=\"결품사유코드\"/><Cell col=\"14\" rowspan=\"2\" text=\"삭제\"/><Cell col=\"15\" text=\"공병단가\"/><Cell col=\"16\" text=\"공상자단가\"/><Cell col=\"17\" text=\"장려금율\"/><Cell row=\"1\" col=\"8\" text=\"단위\"/><Cell row=\"1\" col=\"10\" text=\"배송예정량\"/><Cell row=\"1\" col=\"11\" text=\"납품단가\"/><Cell row=\"1\" col=\"12\" text=\"부가세\"/><Cell row=\"1\" col=\"15\" text=\"공병금액\"/><Cell row=\"1\" col=\"16\" text=\"공상자금액\"/><Cell row=\"1\" col=\"17\" text=\"장려금\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" text=\"expr:currow+1\"/><Cell col=\"1\" rowspan=\"2\" text=\"bind:ODRPL_NA_TRPL_C\"/><Cell col=\"2\" rowspan=\"2\" text=\"bind:ODRPL_NA_TEAM_C\"/><Cell col=\"3\" rowspan=\"2\" text=\"bind:ODR_DT\"/><Cell col=\"4\" rowspan=\"2\" text=\"bind:ODR_SLPNO\"/><Cell col=\"5\" rowspan=\"2\" text=\"bind:ODR_DSQNO\"/><Cell col=\"6\" rowspan=\"2\" style=\"align:center;\" text=\"bind:NA_WRS_C\"/><Cell col=\"7\" rowspan=\"2\" style=\"align:left;\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:WRSNM\"/><Cell col=\"8\" text=\"bind:WRS_STDNM\"/><Cell col=\"9\" rowspan=\"2\" displaytype=\"number\" style=\"align: ;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:BOXPE_AQZ\" mask=\"#,##0\"/><Cell col=\"10\" displaytype=\"number\" style=\"align: ;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_QT\" mask=\"#,##0\"/><Cell col=\"11\" displaytype=\"number\" style=\"align: ;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_PCS\" mask=\"#,##0\"/><Cell col=\"12\" displaytype=\"number\" style=\"align: ;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_AM\" mask=\"#,##0\"/><Cell col=\"13\" rowspan=\"2\" text=\"bind:DQPD_RSNC\"/><Cell col=\"14\" rowspan=\"2\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:DEL_YN\"/><Cell col=\"15\" style=\"align: ;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:VCBT_UPR\" mask=\"#,##0\"/><Cell col=\"16\" style=\"align: ;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:VCBX_UPR\" mask=\"#,##0\"/><Cell col=\"17\" style=\"align: ;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:SSDYRT\"/><Cell row=\"1\" col=\"8\" text=\"bind:NA_WRS_UNT_C\"/><Cell row=\"1\" col=\"10\" displaytype=\"number\" style=\"align: ;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DVY_PLA_QT\" mask=\"#,##0\"/><Cell row=\"1\" col=\"11\" displaytype=\"number\" style=\"align: ;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_PCS\" mask=\"#,##0\"/><Cell row=\"1\" col=\"12\" displaytype=\"number\" style=\"align: ;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_VAT\" mask=\"#,##0\"/><Cell row=\"1\" col=\"15\" style=\"align: ;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:VCBT_AM\" mask=\"#,##0\"/><Cell row=\"1\" col=\"16\" style=\"align: ;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:VCBX_AM\" mask=\"#,##0\"/><Cell row=\"1\" col=\"17\" style=\"align: ;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:SSDY_BAS_AM\" mask=\"#,##0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "494", "786", "15", null, null, this);
            obj.set_taborder("402");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popup", "absolute", "637", "93", "21", "21", null, null, this);
            obj.set_taborder("403");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popup02", "absolute", "492", "149", "21", "21", null, null, this);
            obj.set_taborder("404");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title06", "absolute", "519", "117", "110", "29", null, null, this);
            obj.set_taborder("405");
            obj.set_text("배송처/팀");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dvyaa_na_trpl_c", "absolute", "632", "121", "128", "21", null, null, this);
            obj.set_taborder("406");
            obj.set_maxlength("12");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dvyaa_na_team_c", "absolute", "762", "121", "20", "21", null, null, this);
            obj.set_taborder("407");
            obj.set_maxlength("12");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1540");
            		p.set_titletext("배송예정서 직송등록");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
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
            obj = new BindItem("item19","cbo_cser_ctr_tpc","value","ds_dataM","CSER_CTR_TPC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","edt_dvyaa_n","value","ds_dataM","DVYAA_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_mngt_na_trpl_c","value","ds_dataM","MNGT_NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","edt_mngt_na_team_c","value","ds_dataM","MNGT_NA_TEAM_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","edt_mngt_na_tr_tpc","value","ds_dataM","MNGT_NA_TR_TPC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edt_dvyaa_na_trpl_c","value","ds_dataM","DVYAA_NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","edt_dvyaa_na_team_c","value","ds_dataM","DVYAA_NA_TEAM_C");
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
        this.addIncludeScript("VAN_DS_SC_0310_old.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0310_old.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";
        /*##################################################################################
         화면명	: 배송예정 직송등록
         화면ID  	: VAN_DS_SC_0310
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
        var var_odrpl_na_trpl_c 	= ""; 	//발주처코드
        var var_odrpl_na_team_c 	= ""; 	//발주처팀코드
        var var_odr_dt 				= ""; 	//발주일자
        var var_odr_slpno 			= ""; 	//발주전표번호
        var var_dlvpnsht_temp_yn 	= "E"; 	//배송예정서 작성여부(X : 미작성, Y : 임시저장, N : 작성완료, E : 무발주)
        var var_spypl_na_trpl_c 	= ""; 	//공급처코드
        var var_spypl_na_team_c 	= ""; 	//공급처팀코드
        var var_dvyaa_na_trpl_c 	= ""; 	//배송처코드
        var var_dvyaa_na_team_c 	= "";	//배송처팀코드
        var var_na_dvy_plash_slpno 	= "";	//배송예정서전표번호
        var var_ddly_yn 			= "";	//직송여부
        var var_prgr_c				= "";	//가격군코드
        var var_cser_na_usr_sys_kdc = "";	//발주자시스템코드
        var var_cser_ctr_tpc 		= "";	//계약유형코드(ds_geja)
        var var_spy_tpc				= "";	//공급유형
        var var_mngt_na_trpl_c		= "";	//주관거래처코드
        var var_mngt_na_team_c		= "";	//주관거래처팀코드
        var var_mngt_na_tr_tpc		= "";	//주관거래유형코드

        this.fn_varView = function(search){
        	trace(search);
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
        					"var_cser_ctr_tpc:" + var_cser_ctr_tpc 					+ " \n" + 
        					"var_spy_tpc:" + var_spy_tpc							+ " \n" + 
        					"var_mngt_na_trpl_c:" + var_mngt_na_trpl_c				+ " \n" + 
        					"var_mngt_na_team_c:" + var_mngt_na_team_c				+ " \n" + 
        					"var_mngt_na_tr_tpc:" + var_mngt_na_tr_tpc				+ " \n" + 
        					"";
        	trace("varInfo : " + varInfo);
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
        					);
        this.form_onload = function(obj,e) 
        {	
        	//그리드클릭 이벤트 등록
        	this.grd_master.addEventHandler("oncellclick", this.grd_afterFnc, this);
        	this.grd_master.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));

        	
        	this.gfn_setInitForm(obj,e);//공통
        	
        	var param = [  
         		{code:"CTR_TPC",   dsName:"ds_ctr_tpc",   selecttype:"N"},//계약유형
         		{code:"BOX_DSC",   dsName:"ds_box_dsc",   selecttype:"N"}, //박스구분
         		{code:"DVY_PLASH_IMP_RSN_DSC",   dsName:"ds_dvy_plash_imp_rsn_dsc",   selecttype:"N"} //결품사유코드
            ];

        	this.gfn_setCommonCode(param);
        };

        this.fn_afterFormOnload = function(){	
        	var today = this.gfn_today('yyyyMMdd');
        	this.cal_odr_dt.set_value(today);
        	this.edt_pre_cd_good.set_value((application.gv_glnCode).substr(0, 7));
        	
        };

        //공통코드 데이터셋 onload후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        	//trace("fn_commonAfterOnload");
        	//this.div_search.cbo_contract_type.set_index(0);
        	
        	

        }

        this.btn_pup_van_seq_onclick = function(obj,e)
        {

        	var opt_odr_dt = this.gfn_nullToEmpty(this.cal_odr_dt.value);
        	var oArg = {opt_odr_dt:opt_odr_dt, form_id:"VAN_DS_SC_0300", ddly_yn:'1'};
        	var sOption = "autosize=true,title=false";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("retrieveOrdersPopUp","SCM.EVENT::VAN_DS_FN_0204.xfdl",oArg,sOption,sPopupCallBack);	  
        	this.reload();
        }

        

        

        /*Grid Init*/
        this.fn_init = function(){
        	this.btn_clear_onclick(); //wrs init
        }

        this.btn_clear_onclick = function(obj,e)
        {
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
        		}
        	}
        }

        

        /* Search */
        this.fn_search = function(){
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
        	var sURL          = "svc::/rest/scm/delivery/getDeliveryNoticeOrder";// 호출할 서버 페이지 주소
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
        				 
        	
        	//trace("params : " + params);
        				
        	var sSvcID        = "getOrder";//통신아이디
        	var sURL          = "svc::/rest/scm/delivery/getOrder";// 호출할 서버 페이지 주소
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
        	params = " spypl_na_trpl_c="+this.gfn_nullToEmpty(var_spypl_na_trpl_c);
        	var sSvcID        = "retrieveVhcno";//통신아이디
        	var sURL          = "svc::/rest/scm/delivery/retrieveVhcno";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_vhcno=ds_vhcno";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        

        

        this.btn_init_onclick = function(obj,e)
        {
        	this.reload();
        }

        this.grd_afterFnc = function(obj,e)
        {
        	/*
        	if(e.reason == 51)
        	{      
              this.ds_dataD.set_enableevent(false);
              this.ds_dataD.set_rowposition(-1);
              this.ds_dataD.set_enableevent(true);
              return;
        	}
            */
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
        }

        
        this.btn_rowUpdate_onclick = function(obj,e)
        {
        	if(this.fn_validationDetail())
        		this.fn_isUpdate();
        }

        
        this.fn_validationDetail = function(){
        	
        	var dvy_pla_qt = this.gfn_getNum(this.mae_dvy_pla_qt.value);
        	var boxpe_aqz = this.gfn_getNum(this.gfn_nullToEmpty(this.mae_boxpe_aqz.value));
        	var odr_qt = this.gfn_getNum(this.gfn_nullToEmpty(this.mae_odr_qt.value));
        	var dqpd_rsnc = this.gfn_nullToEmpty(this.cbo_dqpd_rsnc.value);
        	
        	if(dvy_pla_qt == undefined){
        		dvy_pla_qt = 0;
        	}
        	
        	if(boxpe_aqz == undefined){
        		boxpe_aqz = 0;
        	}
        	
        	
        	if((dvy_pla_qt % boxpe_aqz) > 0){
        		this.alert("박스당 입수의 정수배로 입력해 주세요");
        		return false;
        	}
        	
        	
        	if(dvy_pla_qt == 0 && dqpd_rsnc == ""){
        		this.alert("결품사유를 선택해 주세요");
        		return false;
        	}
        	
        	if(this.gfn_isNull(this.edt_na_dvy_plash_slpno.value)){
        		if(odr_qt < dvy_pla_qt){
        			this.alert("수주량보다 크게 배송예정량을 입력하였습니다.");
        			return false;
        		}
        	}
        	

        	
        	return true;
        }

        this.fn_rowUpdate = function(){
        	
        	
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

        this.fn_isUpdate = function(){
        	var duplicateRowCount = 0;
        	for(var i=0;i<this.grd_master.rowcount;i++){
        		var na_wrs_c = this.gfn_nullToEmpty(this.ds_dataD.getColumn(i,"NA_WRS_C"));
        		if(na_wrs_c == this.edt_na_wrs_c.value){
        			++duplicateRowCount;
        			var bok = application.confirm("[ "+this.edt_na_wrs_c.value+" / "+this.edt_wrsnm.value+" ] 수정하시겠습니까 ?");
        			if(bok == true){
        				this.fn_rowUpdate();
        			}else{
        				return false;
        			}
        		}
        	}
        }

        

        

        this.btn_save_onclick = function(obj,e)
        {
        	this.fn_save();
        	/*
        	if(this.fn_validationMaster()){
        		this.fn_save();
        	}
        	*/
        }

        /* Validtaion Check Master */
        this.fn_validationMaster = function(){
        	
        	
        	if(this.gfn_isNull(this.edt_odr_slpno.value) && this.gfn_isNull(this.edt_na_dvy_plash_slpno.value)){
        		alert("발주번호 또는 배송예정서 번호를 선택해 주세요");
        		return false;
        	}
        	/*
        		0 : 일요일		1 : 월요일		2 : 화요일		3 : 수요일		4 : 목요일		5 : 금요일
        	*/
        	if(this.gfn_isNull(this.cal_dvy_pla_dt.value)){
        		alert("배송예정일자를 입력해주세요");
        		return false;
        	}else{
        		var dvy_pla_dt = this.gfn_toString(this.cal_dvy_pla_dt.value);
        		var yy = dvy_pla_dt.substr(0,4);
        		var mm = dvy_pla_dt.substr(4,2);
        		var dd = dvy_pla_dt.substr(6,2);
        		var date = new Date(yy+"-"+mm+"-"+dd);
        		if(date.getDay() == "0"){
        			alert("배송예정일자는 일요일로 작성할 수 없습니다.");
        			return false;
        		}
        	}
        	
        	if(this.gfn_isNull(this.cbo_slgt_etr_dsc.value)){
        		alert("매취수탁구분을 선택해 주세요");
        		return false;
        	}
        		
        	
        	if(this.rdo_dvy_vhc_dsc.value == "1"){
        		if(this.gfn_isNull(this.mae_dvy_far_astcs.value) || this.gfn_getNum(this.gfn_nullToEmpty(this.mae_dvy_far_astcs.value)) == 0){
        			alert("운임보조비를 입력해 주 세요");
        			return false;
        		}
        	}
        		
        	for(var i = 0; i < this.ds_dataD.rowcount; i++){
        		if(this.gfn_nullToEmpty(this.ds_dataD.getColumn(i,"DVY_PLA_QT")) == "0" && this.gfn_nullToEmpty(this.ds_dataD.getColumn(i,"DQPD_RSNC")) == ''){
        			alert("배송예정량이 0일 경우 결품사유를 선택해 주세요");
        			return false;
        		}
        	}
        	
        	
        	return true;
        }

        /* 저장 */
        this.fn_save = function(){
        	var dsParams = "";
        	var params = "";
        				
        	if(var_dlvpnsht_temp_yn == "Y" || var_dlvpnsht_temp_yn == "N"){
        		params = " editType="+var_dlvpnsht_temp_yn
        				 + " spypl_na_trpl_c=" + var_spypl_na_trpl_c
        				 + " dvyaa_na_trpl_c=" + var_dvyaa_na_trpl_c
        				 + " na_dvy_plash_slpno=" + var_na_dvy_plash_slpno;
        		
        	}else{
        		params = " editType="+var_dlvpnsht_temp_yn;
        	}
        	
        	params = params + " isDirectNotcieOrder:Y";
        	
        	
        	trace("[ fn_save Params ] >>>>>> " + params);	
        	dsParams = "ds_dataM=ds_dataM:A ds_dataD=ds_dataD:A";
        	
        	
        	
        	var sSvcID        = "saveDeliveryNoticeOrder";//통신아이디
        	var sURL          = "svc::/rest/scm/delivery/saveDeliveryNoticeOrder";// 호출할 서버 페이지 주소
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
        	param = application.gv_glnCode;
        	/*
        		ddly_yn( 0:일반, 1:직송)
        	*/
        	var oArg = {AuthorityNo:param, ddly_yn:"1"};
        	var sOption = "autosize=true,title=false";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("deliveryNoticePopup","SCM.DELIVERY::VAN_DS_SC_0370_P01.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	trace(" strId : " + strId + " strVal : " + strVal);
        	var paramsArr = strVal.split(",");

        	/* 팝업 발주서 조회 */
        	if(strId == "retrieveOrdersPopUp"){
        		var_odrpl_na_trpl_c 	= paramsArr[0];
        		var_odrpl_na_team_c 	= paramsArr[1];
        		var_odr_dt 				= paramsArr[2];
        		var_odr_slpno			= paramsArr[3];
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
        		this.fn_search();
        	}
        	
        	/* 팝업 배송예정서 조회 */
        	if(strId == "deliveryNoticePopup"){
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
        		
        		
        		this.fn_search();
        		
        		
        	}
        	/* 팝업 발주처 조회 */
        	if(strId == "POPUP_TRNREL_ODRPL"){
        	
        		var valueArr = strVal.split(",");
        		var_odrpl_na_trpl_c 		= valueArr[0];
        		var_odrpl_na_team_c 		= valueArr[2];
        		var_prgr_c 					= valueArr[4];//가격군코드
        		var_cser_na_usr_sys_kdc 	= valueArr[5];//발주처시스템코드
        		var_cser_ctr_tpc 			= valueArr[6]//계약유형코드
        		var_mngt_na_trpl_c			= valueArr[7];
        		var_mngt_na_team_c			= valueArr[8];
        		var_mngt_na_tr_tpc			= valueArr[9];
        		var_cser_adjpl_na_trpl_c	= valueArr[10];
        		var_cser_adjpl_na_team_c	= valueArr[11];
        		
        		
        		this.edt_shrt_bzplnm.set_value(valueArr[1]);
        		this.edt_teamnm.set_value(valueArr[3]);
        		this.edt_orpl_na_trpl_c.set_value(var_odrpl_na_trpl_c);
        		this.edt_orpl_na_team_c.set_value(var_odrpl_na_team_c);
        		this.edt_mngt_na_trpl_c.set_value(var_mngt_na_trpl_c);
        		this.edt_mngt_na_team_c.set_value(var_mngt_na_team_c);
        		this.edt_mngt_na_tr_tpc.set_value(var_mngt_na_tr_tpc);
        		this.edt_cser_adjpl_na_trpl_c.set_value(var_cser_adjpl_na_trpl_c);
        		this.edt_cser_adjpl_na_team_c.set_value(var_cser_adjpl_na_team_c);
        		this.fn_varView("발주처 조회");
        		
        	}
        	
        	/* 팝업 배송지 조회 */
        	if(strId == "VAN_DS_SC_0100_P01"){
        		this.edt_dvyaa_n.set_value(paramsArr[0]);
        		this.edt_dvyaa_na_trpl_c.set_value(paramsArr[2]);
        		this.edt_dvyaa_na_team_c.set_value(paramsArr[3]);
        	}
        	
        	// 배송예정서 작성 완료인 경우
        	if((strId == "deliveryNoticePopup") && (var_dlvpnsht_temp_yn == "N")){
        		var objArr = 	[
        							 "btn_rowUpdate"
        							,"btn_clear"
        							,"cal_dvy_pla_dt"
        							,"cbo_slgt_etr_dsc"
        							,"cbo_vhcno"
        							,"mae_dvy_far_astcs"
        							,"chk_temp_yn"
        						];
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
        		var vcbt_upr 			= paramsArr[7];
        		var vcbx_upr 			= paramsArr[8];
        		var txt_dsc 			= paramsArr[9];
        		var pd_yy_amn_yn		= paramsArr[10];
        		var pd_yy				= paramsArr[11];

        		this.edt_na_wrs_c.set_value(na_wrs_c);
        		this.edt_wrsnm.set_value(wrsnm);
        		this.mae_boxpe_aqz.set_value(boxpe_aqz);
        		this.edt_wrs_stdnm.set_value(wrs_stdnm);
        		this.edt_na_wrs_unt_c.set_value(na_wrs_std_unt_c);
        		this.mae_odr_pcs.set_value(odr_pcs);
        		this.mae_vcbt_upr.set_value(vcbt_upr);
        		this.mae_vcbx_upr.set_value(vcbx_upr);
        		this.mae_dvy_wrs_upr.set_value(odr_pcs);
        		this.edt_txt_dsc.set_value(txt_dsc);
        		this.edt_pd_yy_amn_yn.set_value(pd_yy_amn_yn);
        		this.edt_pd_yy.set_value(pd_yy);
        	}
        }

        this.fn_enable = function(objArr,flag){
        	for(var i = 0; i < objArr.length ; i++){
        		eval("this."+objArr[i]+".set_enable("+flag+")");
        	}
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "getOrder"){
        			
        			/* SET */
        			this.sta_grd_master_cnt.set_text(this.ds_dataD.rowcount); //Row Count Setting
        			this.fn_setVhcno();//차량번호 Setting
        			this.fn_rdo_dvy_vhc_dsc();//배송차량구분에 따른 운임보조비활성여부
        			
        			if(this.ds_dataM.rowcount == 0){
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			}
        		}
        		
        		if(svcID == "saveDeliveryNoticeOrder"){
        			alert("저장되었습니다.");
        			this.reload();
        		}
        		
        		if(svcID == "getDeliveryNoticeOrder"){
        			this.sta_grd_master_cnt.set_text(this.ds_dataD.rowcount); //Row Count Setting
        			this.fn_setVhcno();//차량번호 Setting
        			this.fn_rdo_dvy_vhc_dsc();//배송차량구분에 따른 운임보조비활성여부
        		}
        	}
        }

        //배송차량구분에 따른 운임보조비활성여부
        this.fn_rdo_dvy_vhc_dsc = function(){
        	if(this.rdo_dvy_vhc_dsc.value == "1" && var_dlvpnsht_temp_yn == "Y"){
        		this.fn_dvy_far_astcsEnable(true);
        	}else{
        		this.fn_dvy_far_astcsEnable(false);
        	}
        }

        

        
        this.btn_popup00_onclick = function(obj,e)
        {
        	
        }

        this.btn_popup_onclick = function(obj,e)
        {
        	var oArg = {form_id:"VAN_DS_SC_0310"};
        	var sOption = "autosize=true,title=false";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("POPUP_TRNREL_ODRPL","POPUP::POPUP_TRNREL_ODRPL.xfdl",oArg,sOption,sPopupCallBack);
        	this.reload();
        }

        this.btn_popup02_onclick = function(obj,e)
        {
        	var oArg = {form_id:"VAN_DS_SC_0300"};
        	var sOption = "autosize=true,title=false";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("VAN_DS_SC_0100_P01","SCM.ORDER::VAN_DS_SC_0100_P01.xfdl",oArg,sOption,sPopupCallBack);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.btn_init.addEventHandler("onclick", this.btn_init_onclick, this);
            this.btn_pup_van_seq.addEventHandler("onclick", this.btn_pup_van_seq_onclick, this);
            this.btn_popup01.addEventHandler("onclick", this.btn_popup01_onclick, this);
            this.btn_init00.addEventHandler("onclick", this.btn_init_onclick, this);
            this.btn_clear.addEventHandler("onclick", this.btn_clear_onclick, this);
            this.btn_rowUpdate.addEventHandler("onclick", this.btn_rowUpdate_onclick, this);
            this.btn_popup00.addEventHandler("onclick", this.btn_popup00_onclick, this);
            this.cbo_dqpd_rsnc.addEventHandler("onitemchanged", this.cbo_dqpd_rsnc_onitemchanged, this);
            this.btn_popup.addEventHandler("onclick", this.btn_popup_onclick, this);
            this.btn_popup02.addEventHandler("onclick", this.btn_popup02_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0310_old.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
