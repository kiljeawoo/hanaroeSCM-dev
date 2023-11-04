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
            obj._setContents("<ColumnInfo><Column id=\"ODRPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SHRT_BZPLNM\" type=\"STRING\" size=\"256\"/><Column id=\"TEAMNM\" type=\"STRING\" size=\"256\"/><Column id=\"DVYAA_C\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_CTR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_RQR_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_VHC_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_VHC\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_VHC_STS\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ODR_AM\" type=\"FLOAT\" size=\"256\"/><Column id=\"TOTAL_ODR_VAT\" type=\"FLOAT\" size=\"256\"/><Column id=\"TOTAL_DVY_AM\" type=\"FLOAT\" size=\"256\"/><Column id=\"TOTAL_DVY_VAT\" type=\"FLOAT\" size=\"256\"/><Column id=\"SPY_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"IS_OD_BE_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"NA_ODR_STS_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"VHCNO\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_PLA_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SLGT_ETR_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_FAR_ASTCS\" type=\"FLOAT\" size=\"256\"/><Column id=\"SPYPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"RVOPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"RVOPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"DVYAA_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"DVYAA_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_VCBT_AM\" type=\"INT\" size=\"256\"/><Column id=\"TOTAL_VCBX_AM\" type=\"INT\" size=\"256\"/><Column id=\"TOTAL_DVY_SSDY\" type=\"FLOAT\" size=\"256\"/><Column id=\"TEMP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"GRS_SOJU_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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

            obj = new Dataset("ds_dqpd_rsnc_c", this);
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

            obj = new Edit("edt_na_dvy_plash_slpno", "absolute", "113", "115", "154", "21", null, null, this);
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

            obj = new Static("sta_treatment00", "absolute", "7", "323", "110", "21", null, null, this);
            obj.set_taborder("106");
            obj.set_text("처리대상건수 :");
            this.addChild(obj.name, obj);

            obj = new Static("sta_grd_master_cnt", "absolute", "119", "323", "25", "21", null, null, this);
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

            obj = new Static("sta_treat_count02", "absolute", "143", "323", "25", "21", null, null, this);
            obj.set_taborder("121");
            obj.set_text("건");
            this.addChild(obj.name, obj);

            obj = new Button("btn_init", "absolute", null, "0", "53", "21", "217", null, this);
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

            obj = new Static("sta_title23", "absolute", "519", "223", "110", "29", null, null, this);
            obj.set_taborder("127");
            obj.set_text("계약유형");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title05", "absolute", "0", "139", "110", "29", null, null, this);
            obj.set_taborder("129");
            obj.set_text("납품요청일자");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title24", "absolute", "294", "139", "110", "29", null, null, this);
            obj.set_taborder("131");
            obj.set_text("배송예정일자");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pup_van_seq", "absolute", "356", "59", "21", "21", null, null, this);
            obj.set_taborder("136");
            obj.set_cssclass("btn_WF_Searchbtn");
            obj.getSetter("titletext").set("배송예정서 직송등록");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "280", "803", "20", null, null, this);
            obj.set_taborder("147");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_na_wrs_c", "absolute", "262", "351", "110", "21", null, null, this);
            obj.set_taborder("182");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_wrsnm", "absolute", "375", "351", "146", "21", null, null, this);
            obj.set_taborder("183");
            obj.set_maxlength("12");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popup00", "absolute", "525", "351", "21", "21", null, null, this);
            obj.set_taborder("185");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "268", null, this);
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

            obj = new Edit("edt_odr_slpno", "absolute", "213", "59", "140", "21", null, null, this);
            obj.set_taborder("223");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_cser_ctr_tpc", "absolute", "632", "227", "149", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("225");
            obj.set_innerdataset("@ds_ctr_tpc");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_codecolumn("SIMP_C");
            obj.set_enable("true");
            obj.set_index("-1");

            obj = new Edit("edt_dvy_rqr_dt", "absolute", "113", "143", "178", "21", null, null, this);
            obj.set_taborder("227");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_dvy_pla_dt", "absolute", "407", "143", "107", "21", null, null, this);
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

            obj = new MaskEdit("mae_dvy_far_astcs", "absolute", "407", "227", "107", "21", null, null, this);
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
            obj.set_enable("true");

            obj = new Static("sta_title29", "absolute", "294", "167", "110", "29", null, null, this);
            obj.set_taborder("266");
            obj.set_text("배송차량및상태");
            obj.set_cssclass("sta_WF_Label");
            obj.set_enable("true");
            obj.style.set_color("crimson");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_master", "absolute", "0", "503", null, "239", "16", null, this);
            obj.set_taborder("70");
            obj.set_binddataset("ds_dataD");
            obj.set_autofittype("none");
            obj.set_enable("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"121\"/><Column size=\"330\"/><Column size=\"57\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"0\"/><Column size=\"90\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"발주처코드\"/><Cell col=\"2\" rowspan=\"2\" text=\"발주처팀코드\"/><Cell col=\"3\" rowspan=\"2\" text=\"발주일자\"/><Cell col=\"4\" rowspan=\"2\" text=\"발주전표번호\"/><Cell col=\"5\" rowspan=\"2\" text=\"발주상세일련번호\"/><Cell col=\"6\" rowspan=\"2\" text=\"상품코드\"/><Cell col=\"7\" rowspan=\"2\" text=\"상품명\"/><Cell col=\"8\" text=\"규격\"/><Cell col=\"9\" rowspan=\"2\" text=\"BOX입수\"/><Cell col=\"10\" text=\"수주량\"/><Cell col=\"11\" text=\"계약단가\"/><Cell col=\"12\" text=\"금액\"/><Cell col=\"13\" text=\"공병단가\"/><Cell col=\"14\" text=\"공상자단가\"/><Cell col=\"15\" text=\"장려금율\"/><Cell col=\"16\" rowspan=\"2\" text=\"결품사유코드\"/><Cell col=\"17\" rowspan=\"2\" text=\"삭제\"/><Cell row=\"1\" col=\"8\" text=\"단위\"/><Cell row=\"1\" col=\"10\" text=\"배송예정량\"/><Cell row=\"1\" col=\"11\" text=\"납품단가\"/><Cell row=\"1\" col=\"12\" text=\"부가세\"/><Cell row=\"1\" col=\"13\" text=\"공병금액\"/><Cell row=\"1\" col=\"14\" text=\"공상자금액\"/><Cell row=\"1\" col=\"15\" text=\"장려금\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" text=\"expr:currow+1\"/><Cell col=\"1\" rowspan=\"2\" text=\"bind:ODRPL_NA_TRPL_C\"/><Cell col=\"2\" rowspan=\"2\" text=\"bind:ODRPL_NA_TEAM_C\"/><Cell col=\"3\" rowspan=\"2\" text=\"bind:ODR_DT\"/><Cell col=\"4\" rowspan=\"2\" text=\"bind:ODR_SLPNO\"/><Cell col=\"5\" rowspan=\"2\" text=\"bind:ODR_DSQNO\"/><Cell col=\"6\" rowspan=\"2\" style=\"align:center;\" text=\"bind:NA_WRS_C\"/><Cell col=\"7\" rowspan=\"2\" style=\"align:left;\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:WRSNM\"/><Cell col=\"8\" text=\"bind:WRS_STDNM\"/><Cell col=\"9\" rowspan=\"2\" displaytype=\"number\" style=\"align: ;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:BOXPE_AQZ\" mask=\"#,##0\"/><Cell col=\"10\" displaytype=\"number\" style=\"align: ;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_QT\" mask=\"#,##0\"/><Cell col=\"11\" displaytype=\"number\" style=\"align: ;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_PCS\" mask=\"#,##0\"/><Cell col=\"12\" displaytype=\"number\" style=\"align: ;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_AM\" mask=\"#,##0\"/><Cell col=\"13\" style=\"align: ;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:VCBT_UPR\" mask=\"#,##0\"/><Cell col=\"14\" style=\"align: ;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:VCBX_UPR\" mask=\"#,##0\"/><Cell col=\"15\" style=\"align: ;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:SSDYRT\"/><Cell col=\"16\" rowspan=\"2\" text=\"bind:DQPD_RSNC\"/><Cell col=\"17\" rowspan=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:DEL_YN\"/><Cell row=\"1\" col=\"8\" text=\"bind:NA_WRS_UNT_C\"/><Cell row=\"1\" col=\"10\" displaytype=\"number\" style=\"align: ;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DVY_PLA_QT\" mask=\"#,##0\"/><Cell row=\"1\" col=\"11\" displaytype=\"number\" style=\"align: ;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_PCS\" mask=\"#,##0\"/><Cell row=\"1\" col=\"12\" displaytype=\"number\" style=\"align: ;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_VAT\" mask=\"#,##0\"/><Cell row=\"1\" col=\"13\" style=\"align: ;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:VCBT_AM\" mask=\"#,##0\"/><Cell row=\"1\" col=\"14\" style=\"align: ;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:VCBX_AM\" mask=\"#,##0\"/><Cell row=\"1\" col=\"15\" style=\"align: ;\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:SSDY_BAS_AM\" mask=\"#,##0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_help", "absolute", null, "0", "53", "21", "16", null, this);
            obj.set_taborder("293");
            obj.set_text("도움말");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button22", "absolute", null, "0", "101", "21", "71", null, this);
            obj.set_taborder("294");
            obj.set_text("거래명세서출력");
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

            obj = new Edit("edt_pre_cd_good", "absolute", "113", "351", "145", "21", null, null, this);
            obj.set_taborder("269");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("true");
            obj.set_enable("false");
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

            obj = new Edit("edt_orpl_na_trpl_c", "absolute", "113", "87", "98", "21", null, null, this);
            obj.set_taborder("305");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_shrt_bzplnm", "absolute", "213", "87", "235", "21", null, null, this);
            obj.set_taborder("306");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_orpl_na_team_c", "absolute", "452", "87", "62", "21", null, null, this);
            obj.set_taborder("308");
            obj.set_maxlength("3");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_teamnm", "absolute", "516", "87", "140", "21", null, null, this);
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

            obj = new Edit("edt_na_odr_sts_dsc_n", "absolute", "516", "171", "78", "21", null, null, this);
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

            obj = new Static("sta_title08", "absolute", "0", "251", "110", "29", null, null, this);
            obj.set_taborder("325");
            obj.set_text("임시저장");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_temp_yn", "absolute", "113", "255", "86", "19", null, null, this);
            obj.set_taborder("326");
            obj.set_text("임시저장");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_total_odr_vat", "absolute", "597", "199", "184", "21", null, null, this);
            obj.set_taborder("255");
            obj.set_value("0");
            obj.set_mask("#,##0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title03", "absolute", "294", "195", "110", "29", null, null, this);
            obj.set_taborder("224");
            obj.set_text("발주총액");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_total_odr_am", "absolute", "407", "199", "188", "21", null, null, this);
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
            obj.set_text("규격");
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
            this.addChild(obj.name, obj);

            obj = new Edit("edt_na_wrs_unt_c", "absolute", "375", "379", "145", "21", null, null, this);
            obj.set_taborder("302");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
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
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_boxpe_aqz", "absolute", "637", "379", "145", "21", null, null, this);
            obj.set_taborder("273");
            obj.set_value("0");
            obj.set_mask("#,##0");
            obj.set_enable("false");
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
            obj.set_mask("#,##0");
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
            obj.set_text("삭제여부");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            obj.set_visible("false");
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
            obj.set_value("0");
            obj.set_mask("#,##0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_del_yn", "absolute", "637", "464", "46", "19", null, null, this);
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

            obj = new Static("Static00", "absolute", "1", "488", "786", "15", null, null, this);
            obj.set_taborder("354");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popup02", "absolute", "492", "115", "21", "21", null, null, this);
            obj.set_taborder("355");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popup", "absolute", "659", "87", "21", "21", null, null, this);
            obj.set_taborder("356");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_vcbt_upr", "absolute", "601", "302", "93", "18", null, null, this);
            obj.set_taborder("357");
            obj.set_displaynulltext("공병단가");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_vcbx_upr", "absolute", "695", "302", "93", "18", null, null, this);
            obj.set_taborder("358");
            obj.set_displaynulltext("공상자단가");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_txt_dsc", "absolute", "482", "302", "118", "18", null, null, this);
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

            obj = new Edit("edt_dvyaa_na_trpl_c", "absolute", "632", "115", "128", "21", null, null, this);
            obj.set_taborder("362");
            obj.set_maxlength("12");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dvyaa_na_team_c", "absolute", "762", "115", "20", "21", null, null, this);
            obj.set_taborder("363");
            obj.set_maxlength("12");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pd_yy_amn_yn", "absolute", "362", "302", "118", "18", null, null, this);
            obj.set_taborder("364");
            obj.set_displaynulltext("생산년도관리여부");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pd_yy", "absolute", "244", "302", "118", "18", null, null, this);
            obj.set_taborder("365");
            obj.set_displaynulltext("생산년도");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mngt_na_trpl_c", "absolute", "631", "59", "103", "21", null, null, this);
            obj.set_taborder("366");
            obj.set_maxlength("12");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mngt_na_team_c", "absolute", "736", "59", "28", "21", null, null, this);
            obj.set_taborder("367");
            obj.set_maxlength("12");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mngt_na_tr_tpc", "absolute", "766", "59", "14", "21", null, null, this);
            obj.set_taborder("368");
            obj.set_maxlength("12");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title15", "absolute", "519", "55", "110", "29", null, null, this);
            obj.set_taborder("369");
            obj.set_text("주관거래처");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cser_adjpl_na_trpl_c", "absolute", "631", "143", "103", "21", null, null, this);
            obj.set_taborder("370");
            obj.set_maxlength("12");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cser_adjpl_na_team_c", "absolute", "736", "143", "28", "21", null, null, this);
            obj.set_taborder("371");
            obj.set_maxlength("12");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title20", "absolute", "519", "139", "110", "29", null, null, this);
            obj.set_taborder("372");
            obj.set_text("수요자정산처");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
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
            obj = new BindItem("item18","edt_mngt_na_trpl_c","value","ds_dataM","MNGT_NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","edt_mngt_na_team_c","value","ds_dataM","MNGT_NA_TEAM_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","edt_mngt_na_tr_tpc","value","ds_dataM","MNGT_NA_TR_TPC");
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
        this.addIncludeScript("VAN_DS_SC_0310_20151030.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0310_20151030.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";
        /*##################################################################################
         화면명	: 직송등록
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
        var var_odrpl_na_trpl_c 		= ""; 		//발주처코드
        var var_odrpl_na_team_c 		= ""; 		//발주처팀코드
        var var_odr_dt 					= ""; 		//발주일자
        var var_odr_slpno 				= ""; 		//발주전표번호
        var var_dlvpnsht_temp_yn 		= "E"; 		//배송예정서 작성여부(X : 미작성, Y : 임시저장, N : 작성완료, E : 무발주)
        var var_spypl_na_trpl_c 		= ""; 		//공급처코드
        var var_spypl_na_team_c 		= ""; 		//공급처팀코드
        var var_dvyaa_na_trpl_c 		= ""; 		//배송처코드
        var var_dvyaa_na_team_c 		= "";		//배송처팀코드
        var var_na_dvy_plash_slpno 		= "";		//배송예정서전표번호
        var var_ddly_yn 				= "";		//직송여부
        var var_prgr_c					= "";		//가격군코드
        var var_cser_na_usr_sys_kdc 	= "";		//발주자시스템코드
        var var_cser_ctr_tpc 			= "";		//계약유형코드(ds_geja)
        var var_spy_tpc					= "";		//공급유형
        var var_mngt_na_trpl_c			= "";		//주관거래처코드
        var var_mngt_na_team_c			= "";		//주관거래처팀코드
        var var_mngt_na_tr_tpc			= "";		//주관거래유형코드
        var var_cser_adjpl_na_trpl_c	= "";		//수요자정산처코드
        var var_cser_adjpl_na_team_c	= "";		//수요자정산처팀코드
        var var_wr_pre_date				= "";		//배송예정일자 가능일자 From
        var	var_next_date				= "";		//배송예정일자 가능일자 To

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
        					"var_cser_ctr_tpc:" + var_cser_ctr_tpc + " \n" 			+ 
        					"var_spy_tpc:" + var_spy_tpc
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
        							,'VCBT_UPR'
        							,'VCBX_UPR'
        							,'ODR_VAT'
        							,'ODR_PCS'
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
         		{code:"DQPD_RSNC",   dsName:"ds_dqpd_rsnc_c",   selecttype:"N"} //결품사유코드
            ];
        	this.gfn_setCommonCode(param);

        };

        this.fn_afterFormOnload = function(){	
        	this.div_auth.set_visible(false);
        	
        	var today = this.gfn_today('yyyyMMdd');
        	this.cal_odr_dt.set_value(today);
        	this.cal_dvy_pla_dt.set_value(today);
        	this.edt_pre_cd_good.set_value((application.gv_glnCode).substr(0, 7));
        	this.fn_setVhcno();//차량번호 Setting
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
        	this.fn_detail_clear();
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
        				 
        	
        	trace("fn_srhOrder params : " + params);
        				
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
        	
        	var sSvcID        = "retrieveVhcno";//통신아이디
        	var sURL          = "svc::/rest/scm/delivery/retrieveVhcno";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_vhcno=ds_vhcno";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = "";// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
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
        	this.mae_dvy_wrs_upr.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"ODR_PCS"));
        	this.mae_vcbt_upr.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"VCBT_UPR"));
        	this.mae_vcbx_upr.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"VCBX_UPR"));
        }

        
        this.btn_rowUpdate_onclick = function(obj,e)
        {
        	
        	if(this.fn_validationDetail()){
        		this.fn_isUpdate();
        		this.fn_detail_clear();
        		this.fn_detail_hidden_clear();
        		this.ds_dataD.set_rowposition(-1);
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
        	
        	if(odr_qt > 0 && (odr_qt < dvy_pla_qt)){
        		alert("수주량보다 배송예정량을 크게 입력하실수 없습니다.");
        		return false;
        	}
        	
        	if ((this.gfn_trim(var_cser_na_usr_sys_kdc) !="52") && (this.gfn_trim(var_cser_na_usr_sys_kdc) !="54")) {
                if ((var_cser_ctr_tpc == "1" ) && (var_ddly_yn == "0")) {
                    alert("일반상품은 일반배송예정서 등록] 화면을 이용하세요");
                    return false;
                }
            }
            
            if(this.gfn_getNum(this.mae_dvy_pla_qt.value) <= 0){
        		alert("배송예정량을 입력해 주세요");
        		return false;
        	}
        	
        	if((dvy_pla_qt % boxpe_aqz) != 0){
        			var msg =	"배송예정수량[" + dvy_pla_qt + "] 이 박스당 입수 [" + boxpe_aqz + "] 와 맞지 않습니다. \n\n" +
        						"박스당 입수의 배수로 수량을 입력하세요";
        			this.alert(msg);
        			return false;
        	}
        	
        	if ((this.gfn_trim(var_cser_na_usr_sys_kdc) =="52") && (this.gfn_trim(var_cser_na_usr_sys_kdc) =="54")) {
        		if(odr_qt > 0){
        			if(odr_qt < dvy_pla_qt){
        				this.alert("배송예정수량[" + dvy_pla_qt + "]이 수주량 [" + odr_qt + "]보다 크면 안됩니다.");
        				return false;
        			}
        		}
        	}
            
            
            if ( pd_yy_amn_yn == "0" && pd_yy != "0000" && pd_yy.length > 0 ) {
                alert("생산년도 오류입니다.생산년도["+pd_yy+"] 관리하지 않는 상품입니다.");
                return false;
            }
            
             if ( pd_yy_amn_yn == "1" && pd_yy == "0000" ) {
                alert("생산년도 오류입니다.생산년도 관리하는 상품입니다.");
                multiFrm.pd_yy.select();
                return(false);
            }
           
            if (txt_dsc == "1" && dvy_pla_qt > 0 && dvy_am > 0 && dvy_vat == 0 ) {
                alert("부가세 오류입니다.부가세가 존재하는 상품인데 부가세가 0 입니다.");
                multiFrm.vamt_tran.select();
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
        	
        	if(this.gfn_isNull(this.edt_wrs_stdnm.value)){
        		alert("상품규격을 확인하세요");
        		return false;
        	}
        	
        	
        	
        	if(this.gfn_getNum(this.mae_odr_pcs.value) <= 0){
        		alert("상품단가를 확인해 주세요");
        		return false;
        	}
        	
        	if(this.gfn_getNum(this.mae_odr_am.value) <= 0){
        		alert("배송예정금액를 확인해 주세요");
        		return false;
        	}
        	
        	
        	if(var_dlvpnsht_temp_yn != "E"){//무발주 작성이 아닌경우
        		if(dvy_pla_qt == undefined){
        			dvy_pla_qt = 0;
        		}
        		
        		if(boxpe_aqz == undefined){
        			boxpe_aqz = 0;
        		}
        		
        		
        		
        		
        		if(odr_qt > dvy_pla_qt && dqpd_rsnc == "" && this.ds_dataD.getColumn(this.ds_dataD.rowposition, "DEL_YN") != '1'){
        			alert("결품사유를 입력해 주세요");
        			return false;
        		}
        		
        		if(dvy_pla_qt == 0 && dqpd_rsnc == "" && this.ds_dataD.getColumn(this.ds_dataD.rowposition, "DEL_YN") != '1'){
        			this.alert("결품사유를 선택해 주세요");
        			return false;
        		}
        		
        		
        	}else{
        		if((dvy_pla_qt % boxpe_aqz) > 0){
        			this.alert("박스당 입수의 정수배로 입력해 주세요");
        			return false;
        		}
        	}
        	

        	
        	return true;
        }

        

        this.fn_isUpdate = function(){
        	var duplicateRowCount = 0;
        	for(var i=0;i<this.grd_master.rowcount;i++){
        		var na_wrs_c = this.ds_dataD.getColumn(i,"NA_WRS_C");
        		if(na_wrs_c == this.edt_na_wrs_c.value){
        			++duplicateRowCount;
        			var bok = application.confirm("[ "+this.edt_na_wrs_c.value+" / "+this.edt_wrsnm.value+" ] 는(은) 이미 등록된 자료입니다. 수정하시겠습니까 ?");
        			if(bok == true){
        				this.fn_rowUpdate();
        			}else{
        				return false;
        			}
        		}
        	}
        	var row = this.ds_dataD.rowposition;
        	if(duplicateRowCount == 0){//상품추가
        		if(var_dlvpnsht_temp_yn != "E"){
        			alert("무발주 배송예정작성 시 상품 추가 가능합니다.");
        			return false;
        		}
        	
        		if(this.gfn_isNull(this.mae_dvy_pla_qt.value)){
        			alert("배송예정량을 입력해 주세요");
        			return false;
        		}
        		row = this.ds_dataD.addRow();
        		this.fn_rowInsert(row);
        	}
        	
        	
        	this.detail_sum(row);//합계 계산
        	this.sta_grd_master_cnt.set_text(this.ds_dataD.rowcount);
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

        
        this.fn_rowInsert = function(row){
        	
        	
        	
        	for(var i = 0; i < dataDArr.length; i++){
        			eval("this.ds_dataD.setColumn("+ row +", '"+dataDArr[i]+"', this."+wrsInfoArr[i]+".value)");
        	}
        	this.ds_dataD.setColumn(row, 'DEL_YN', '0');
        }

        

        

        
        this.detail_sum = function(row){
        	/* sum */
        	this.ds_dataD.setColumn(row, 'SSDYRT', "0");
        	this.ds_dataD.setColumn(row, 'SSDY_BAS_AM', "0");
        	this.ds_dataD.setColumn(row, 'VCBT_AM', (this.mae_vcbt_upr.value * this.mae_dvy_pla_qt.value));
        	this.ds_dataD.setColumn(row, 'VCBX_AM', (this.mae_vcbx_upr.value * this.mae_dvy_pla_qt.value));
        	var dvy_am = 0;
        	var dvy_vat = 0;
        	for(var i = 0; i < this.ds_dataD.rowcount; i++){
        		dvy_am = dvy_am + this.ds_dataD.getColumn(i , "ODR_AM");
        		dvy_vat = dvy_vat + this.ds_dataD.getColumn(i , "ODR_VAT");
        	}
        	
        	this.mae_total_dvy_am.set_value(dvy_am);
        	this.mae_total_dvy_vat.set_value(dvy_vat);
        }

        

        

        
        this.btn_save_onclick = function(obj,e)
        {
        	
        	if(this.fn_validationMaster()){
        		this.fn_save();
        	}
        	
        	
        }

        /* Validtaion Check Master */
        this.fn_validationMaster = function(){
        	/*
            var_dlvpnsht_temp_yn
        		(X : 미작성, Y : 임시저장, N : 작성완료, E : 무발주)
        	*/
        	if(var_dlvpnsht_temp_yn == "X"){
        		this.fn_baljuValidation();
        	}
        	
        	if(var_dlvpnsht_temp_yn == "Y"){
        		this.fn_baesongValidation();
        	}
        	
        	if(var_cser_ctr_tpc == "1" && var_prgr_c == "00"&& var_dlvpnsht_temp_yn == 'E'){
                alert("발주처의 가격군코드[00]이면 무발주로 작성할 수 없습니다.");
                return false;
            }
        	
           
            
            
        	
        	/*
        		0 : 일요일		1 : 월요일		2 : 화요일		
        		3 : 수요일		4 : 목요일		5 : 금요일		
        		6 : 토요일
        	*/
        	var dvy_pla_dt = this.gfn_toString(this.cal_dvy_pla_dt.value);
        	if(this.gfn_isNull(this.cal_dvy_pla_dt.value)){
        		alert("배송예정일자를 입력해주세요");
        		return false;
        	}else{
        	
        		if(var_wr_pre_date > dvy_pla_dt || var_next_date < dvy_pla_dt){
        				alert("배송예정일자는 [ "+ var_wr_pre_date + " ~ " + var_next_date + " ] 기간 안에 입력 가능합니다.");
        				return false;
        		}
        		
        		var yy = dvy_pla_dt.substr(0,4);
        		var mm = dvy_pla_dt.substr(4,2);
        		var dd = dvy_pla_dt.substr(6,2);
        		var date = new Date(yy+"-"+mm+"-"+dd);
        		if(date.getDay() == "0" || date.getDay() == "6" ){
        			alert("배송예정일자는 일요일로 작성할 수 없습니다.");
        			return false;
        		}
        	}
        	
        	if(this.gfn_isNull(this.edt_orpl_na_trpl_c.value)){
        		alert("발주처를 선택해 주세요");
        		return false;
        	}
        	
        	if(this.gfn_isNull(this.edt_dvyaa_na_trpl_c.value)){
        		alert("배송지를 선택해 주세요");
        		return false;
        	}
        	
        	
        	if(this.gfn_isNull(this.cbo_vhcno.value)){
        		alert("배송차량번호를 선택해 주세요");
        		return false;
        	}

        	if(this.rdo_dvy_vhc_dsc.value == "1"){
        		if(this.gfn_isNull(this.mae_dvy_far_astcs.value) || this.gfn_getNum(this.gfn_nullToEmpty(this.mae_dvy_far_astcs.value)) == 0){
        			alert("운임보조비를 입력해 주세요");
        			return false;
        		}
        	}
        	
        	for(var i = 0; i < this.ds_dataD.rowcount; i++){
        		if(this.ds_dataD.getColumn(i, "DEL_YN") != '1' && this.gfn_nullToEmpty(this.ds_dataD.getColumn(i,"DVY_PLA_QT")) == "0" && this.gfn_nullToEmpty(this.ds_dataD.getColumn(i,"DQPD_RSNC")) == ''){
        			alert("배송예정량이 0일 경우 결품사유를 선택해 주세요");
        			return false;
        		}
        	}

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
        	
        	
        	return true;
        }

        /* 저장 */
        this.fn_save = function(){
        	var dsParams = "";
        	var params = "";
        	/*
        	var total_vcbt_am = 0;
        	var total_vcbx_am = 0;
        	var total_dvy_ssdy = 0;
        	
        	for(var i = 0; i < this.ds_dataD.rowcount; i++){
        		total_vcbt_am = total_vcbt_am + this.ds_dataD.getColumn(i, "VCBT_AM");//공병금액
        		total_vcbx_am = total_vcbx_am + this.ds_dataD.getColumn(i, "VCBX_AM");//공상자금액
        		total_dvy_ssdy = total_dvy_ssdy + (this.gfn_getNum(this.ds_dataD.getColumn(i, "SSDY_BAS_AM")) * this.gfn_getNum(this.ds_dataD.getColumn(i, "DVY_PlA_QT")));
        	}
        	
        	this.mae_total_vcbt_am.set_value(total_vcbt_am);
        	this.mae_total_vcbx_am.set_value(total_vcbx_am);
        	this.mae_total_dvy_ssdy.set_value(total_dvy_ssdy);
        	
        	*/		
        		
        	if(var_dlvpnsht_temp_yn == "Y" || var_dlvpnsht_temp_yn == "N"){//임시저장, 작성완료
        		params = " editType="+var_dlvpnsht_temp_yn
        				 + " spypl_na_trpl_c=" + var_spypl_na_trpl_c
        				 + " dvyaa_na_trpl_c=" + var_dvyaa_na_trpl_c
        				 + " na_dvy_plash_slpno=" + var_na_dvy_plash_slpno;
        		
        	}else{
        		params = " editType="+var_dlvpnsht_temp_yn
        				+ " orpl_na_trpl_c=" + this.gfn_nullToEmpty(this.edt_orpl_na_trpl_c.value);
        	}
        	
        	params = params + " isDirectNotcieOrder=Y";
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

        	var oArg = {AuthorityNo:param, ddly_yn:'1'};
        	var sOption = "autosize=true,title=false";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("deliveryNoticePopup","SCM.DELIVERY::VAN_DS_SC_0370_P01.xfdl",oArg,sOption,sPopupCallBack);
        	this.reload();
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
        		var_odrpl_na_trpl_c 	= valueArr[0];
        		var_odrpl_na_team_c 	= valueArr[2];
        		var_prgr_c 				= valueArr[4];//가격군코드
        		var_cser_na_usr_sys_kdc = valueArr[5];//발주처시스템코드
        		var_cser_ctr_tpc 		= valueArr[6]//계약유형코드
        		var_mngt_na_trpl_c			= valueArr[7];
        		var_mngt_na_team_c			= valueArr[8];
        		var_mngt_na_tr_tpc			= valueArr[9];
        		var_cser_adjpl_na_trpl_c	= valueArr[10];
        		var_cser_adjpl_na_team_c	= valueArr[11];
        		this.edt_mngt_na_trpl_c.set_value(var_mngt_na_trpl_c);
        		this.edt_mngt_na_team_c.set_value(var_mngt_na_team_c);
        		this.edt_mngt_na_tr_tpc.set_value(var_mngt_na_tr_tpc);
        		this.edt_cser_adjpl_na_trpl_c.set_value(var_cser_adjpl_na_trpl_c);
        		this.edt_cser_adjpl_na_team_c.set_value(var_cser_adjpl_na_team_c);
        		this.edt_shrt_bzplnm.set_value(valueArr[1]);
        		this.edt_teamnm.set_value(valueArr[3]);
        		this.edt_orpl_na_trpl_c.set_value(var_odrpl_na_trpl_c);
        		this.edt_orpl_na_team_c.set_value(var_odrpl_na_team_c);
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
        			this.fn_rdo_dvy_vhc_dsc();//배송차량구분에 따른 운임보조비활성여부
        			if(this.ds_dataM.rowcount == 0){
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			}
        		}
        		
        		if(svcID == "saveDeliveryNoticeOrder"){
        			var tempYn = this.gfn_nullToEmpty(this.chk_temp_yn.value);
        			if(tempYn == "N"){
        				var strRtn = this.gfn_getMessage("confirm","msg.van_ds_sc_0300.trading.statments.print.yn", var_na_dvy_plash_slpno);
        				if(strRtn == true){
        					alert("Print");
        				}
        			}else{
        				alert("저장되었습니다.");
        			}
        			this.reload();
        		}
        		
        		if(svcID == "getDeliveryNoticeOrder"){
        			this.sta_grd_master_cnt.set_text(this.ds_dataD.rowcount); //Row Count Setting
        			this.fn_rdo_dvy_vhc_dsc();//배송차량구분에 따른 운임보조비활성여부
        		}
        	}
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
        	this.fn_print();
        }

        //거래명세표 출력
        this.fn_print = function(){
        	if(this.gfn_isNull(this.edt_na_dvy_plash_slpno.value)){
        		alert("배송예정서를 입력하세요");
        		return false;
        	}
        	
        	 var param = {
        		naDvyPlashSlpno:this.edt_na_dvy_plash_slpno.value
        	};
        	var ozParam = {
        		sId: 'VAN_DS_SC_0300', //VAN_DS_SC_0310
        		sUrl: '/rest/oz/delivery/printDeliveryNoticeOrder',
        		paramType: 'param',
        		sParam: {naDvyPlashSlpno:var_na_dvy_plash_slpno, spyplNaTrplC:'8801007000145', dvyaaNaTrplC:'8808983620602'}
        	};
        	this.ozViewer(ozParam);
        }
        /* 발주처 조회 */
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
        	var oArg = {form_id:"VAN_DS_SC_0310"};
        	var sOption = "autosize=true,title=false";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("VAN_DS_SC_0100_P01","SCM.ORDER::VAN_DS_SC_0100_P01.xfdl",oArg,sOption,sPopupCallBack);
        }

        
        //상품조회 팝업
        this.btn_popup00_onclick = function(obj,e)
        {
        	
        	if(this.gfn_isNull(this.edt_orpl_na_trpl_c.value)){
        		alert("발주처를 먼저 선택해 주세요");
        		return false;
        		//this.edt_orpl_na_trpl_c.set_value('8808983000015');
        	}
        	var odrpl_na_trpl_c = this.gfn_nullToEmpty(this.edt_orpl_na_trpl_c.value);
        	var odrpl_na_team_c = this.gfn_nullToEmpty(this.ds_dataM.getColumn(0, "ODRPL_NA_TEAM_C"));
        	
        	//상품명 팝업
        	var oArg = {form_id:"VAN_DS_SC_0310", odrpl_na_trpl_c:odrpl_na_trpl_c, ddly_yn:'0', prgr_c:var_prgr_c, odrpl_na_team_c:odrpl_na_team_c};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("wrsSearchPop","SCM.ORDER::VAN_DS_SC_0100_P02.xfdl",oArg,sOption,sPopupCallBack);
        }

        
        //배송예정량수의 금액 계산
        this.mae_dvy_pla_qt_onkeydown = function(obj,e)
        {
        	this.fn_calc_dvy_qt();
        	this.detail_VatCalc();
        }

        //배송예정량수의 금액 계산
        this.mae_dvy_pla_qt_ontextchange = function(obj,e)
        {
        	this.fn_calc_dvy_qt();
        	this.detail_VatCalc();
        }

        //배송예정량수의 금액 계산
        this.mae_dvy_pla_qt_onkeyup = function(obj,e)
        {
        	this.fn_calc_dvy_qt();
        	this.detail_VatCalc();
        }

        //배송금액 계산
        this.fn_calc_dvy_qt = function(){
        	if(this.gfn_isNull(this.edt_na_wrs_c.value)){
        		alert("상품을 선택해 주세요");
        		return false;
        	}
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

            dvy_am   = this.fParseFloat(dvy_am);
            vatRat= this.fParseFloat(vatRat);
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
        this.Button22_onclick = function(obj,e)
        {
        	this.fn_print();
        }

        //거래명세표 출력
        this.fn_print = function(){
        	if(this.gfn_isNull(this.edt_na_dvy_plash_slpno.value)){
        		alert("배송예정서를 입력하세요");
        		return false;
        	}

        	
        	var param = {
        		naDvyPlashSlpno:this.edt_na_dvy_plash_slpno.value
        	};
        	var ozParam = {
        		sId: 'VAN_DS_SC_0300', //VAN_DS_SC_0310
        		sUrl: '/rest/oz/delivery/printDeliveryNoticeOrder',
        		paramType: 'param',
        		sParam: {naDvyPlashSlpno:var_na_dvy_plash_slpno, spyplNaTrplC:'8801007000145', dvyaaNaTrplC:'8808983620602'}
        	};
        	this.ozViewer(ozParam);	
        	
        }

        

        

        
        	

        this.btn_help_onclick = function(obj,e)
        {
        	var systemFileName ="dp2183h0.zip";
        	var fileName = "VAN_DS_SC_0310_SIMPLE.zip";
        	var strDownUrl = application.gv_server_url+"rest/common/fileDownload?systemFileName="+systemFileName+"&fileName="+fileName+"&isSampleFile=Y";
        	var wbs_dw     = this.gfn_createWebBorwserComponent(this);
        	
        	wbs_dw.set_url(strDownUrl);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.btn_clear.addEventHandler("onclick", this.btn_clear_onclick, this);
            this.btn_rowUpdate.addEventHandler("onclick", this.btn_rowUpdate_onclick, this);
            this.btn_init.addEventHandler("onclick", this.btn_init_onclick, this);
            this.btn_pup_van_seq.addEventHandler("onclick", this.btn_pup_van_seq_onclick, this);
            this.btn_popup00.addEventHandler("onclick", this.btn_popup00_onclick, this);
            this.btn_popup01.addEventHandler("onclick", this.btn_popup01_onclick, this);
            this.btn_help.addEventHandler("onclick", this.btn_help_onclick, this);
            this.Button22.addEventHandler("onclick", this.Button22_onclick, this);
            this.mae_dvy_pla_qt.addEventHandler("onkeydown", this.mae_dvy_pla_qt_onkeydown, this);
            this.mae_dvy_pla_qt.addEventHandler("ontextchange", this.mae_dvy_pla_qt_ontextchange, this);
            this.mae_dvy_pla_qt.addEventHandler("onkeyup", this.mae_dvy_pla_qt_onkeyup, this);
            this.cbo_dqpd_rsnc.addEventHandler("onitemchanged", this.cbo_dqpd_rsnc_onitemchanged, this);
            this.btn_popup02.addEventHandler("onclick", this.btn_popup02_onclick, this);
            this.btn_popup.addEventHandler("onclick", this.btn_popup_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0310_20151030.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
