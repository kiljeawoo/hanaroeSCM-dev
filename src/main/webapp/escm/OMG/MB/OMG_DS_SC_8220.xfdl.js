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
                this.set_name("OMG_DS_SC_8220");
                this.set_classname("OMG_DS_SC_7021");
                this.set_titletext("배송예정서 직송등록");
                this._setFormPosition(0,0,540,1154);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_vhcno", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PHD_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_VHC_PHD_IDVD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"VHCNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dataM", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ODRPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SHRT_BZPLNM\" type=\"STRING\" size=\"256\"/><Column id=\"TEAMNM\" type=\"STRING\" size=\"256\"/><Column id=\"DVYAA_C\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_CTR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_RQR_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_VHC_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_VHC\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_VHC_STS\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ODR_AM\" type=\"FLOAT\" size=\"256\"/><Column id=\"TOTAL_ODR_VAT\" type=\"FLOAT\" size=\"256\"/><Column id=\"TOTAL_DVY_AM\" type=\"FLOAT\" size=\"256\"/><Column id=\"TOTAL_DVY_VAT\" type=\"FLOAT\" size=\"256\"/><Column id=\"SPY_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"IS_OD_BE_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"NA_ODR_STS_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"VHCNO\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_PLA_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SLGT_ETR_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_FAR_ASTCS\" type=\"FLOAT\" size=\"256\"/><Column id=\"SPYPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"RVOPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"RVOPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"DVYAA_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"DVYAA_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_VCBT_AM\" type=\"INT\" size=\"256\"/><Column id=\"TOTAL_VCBX_AM\" type=\"INT\" size=\"256\"/><Column id=\"TOTAL_DVY_SSDY\" type=\"FLOAT\" size=\"256\"/><Column id=\"TEMP_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dataD", this);
            obj.set_firefirstcount("0");
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
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dataS", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RVOPL_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"RVOPL_CLNTNM\" type=\"string\" size=\"32\"/><Column id=\"ODRPL_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"ODRPL_CLNTNM\" type=\"string\" size=\"32\"/><Column id=\"DVYAA_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"DVYAA_CLNTNM\" type=\"string\" size=\"32\"/><Column id=\"NA_DVY_PLASH_SLPNO\" type=\"string\" size=\"32\"/><Column id=\"DVY_AM\" type=\"float\" size=\"8\"/><Column id=\"DVY_PLA_DT\" type=\"string\" size=\"32\"/><Column id=\"CSER_CTR_TPC\" type=\"string\" size=\"32\"/><Column id=\"DVY_PLASH_STSC\" type=\"string\" size=\"32\"/><Column id=\"DVY_PLASH_UGAV_YN\" type=\"string\" size=\"32\"/><Column id=\"SPYPL_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"SPYPL_CLNTNM\" type=\"string\" size=\"32\"/><Column id=\"RMK_CNTN\" type=\"string\" size=\"32\"/><Column id=\"TEMP_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static12", "absolute", "153", "737", "387", "64", null, null, this);
            obj.getSetter("taborder").set("27");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_boxpe_aqz", "absolute", "157", "742", "368", "54", null, null, this);
            obj.set_taborder("36");
            obj.set_tabstop("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "0", "54", "153", "122", null, null, this);
            obj.getSetter("taborder").set("0");
            obj.set_text("발주번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "153", "54", "387", "122", null, null, this);
            obj.getSetter("taborder").set("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "525", "54", "15", "93", null, null, this);
            obj.getSetter("taborder").set("4");
            obj.style.set_background("#00ffff33");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "0", "175", "153", "122", null, null, this);
            obj.getSetter("taborder").set("7");
            obj.set_text("실발주처");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "153", "175", "387", "122", null, null, this);
            obj.getSetter("taborder").set("8");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_orpl_na_trpl_c", "absolute", "157", "180", "368", "54", null, null, this);
            obj.set_taborder("9");
            obj.set_tabstop("false");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "422", "153", "64", null, null, this);
            obj.getSetter("taborder").set("10");
            obj.set_text("배송지");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "153", "422", "387", "64", null, null, this);
            obj.getSetter("taborder").set("11");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0", "485", "153", "64", null, null, this);
            obj.getSetter("taborder").set("13");
            obj.set_text("배송예정일자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "153", "485", "387", "64", null, null, this);
            obj.getSetter("taborder").set("14");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_dvy_pla_dt", "absolute", "157", "490", "368", "54", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("16");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_tabstop("false");
            obj.set_value("null");

            obj = new Static("Static05", "absolute", "0", "548", "153", "64", null, null, this);
            obj.getSetter("taborder").set("17");
            obj.set_text("배송차량구분");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "153", "548", "387", "64", null, null, this);
            obj.getSetter("taborder").set("18");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "0", "611", "153", "64", null, null, this);
            obj.getSetter("taborder").set("20");
            obj.set_text("배송차량 및\r\n상태");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "153", "611", "387", "64", null, null, this);
            obj.getSetter("taborder").set("21");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "674", "153", "64", null, null, this);
            obj.getSetter("taborder").set("23");
            obj.set_text("수주량");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "153", "674", "387", "64", null, null, this);
            obj.getSetter("taborder").set("24");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "0", "737", "153", "64", null, null, this);
            obj.getSetter("taborder").set("26");
            obj.set_text("BOX수량");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "0", "800", "153", "64", null, null, this);
            obj.getSetter("taborder").set("29");
            obj.set_text("수주금액");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "153", "800", "387", "64", null, null, this);
            obj.getSetter("taborder").set("30");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_odr_qt", "absolute", "157", "679", "368", "54", null, null, this);
            obj.set_taborder("32");
            obj.set_tabstop("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "0", "863", "153", "64", null, null, this);
            obj.getSetter("taborder").set("33");
            obj.set_text("공병");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "153", "863", "387", "64", null, null, this);
            obj.getSetter("taborder").set("34");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_odr_am", "absolute", "157", "805", "368", "54", null, null, this);
            obj.set_taborder("37");
            obj.set_tabstop("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_vcbt", "absolute", "157", "868", "368", "54", null, null, this);
            obj.set_taborder("38");
            obj.set_tabstop("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static63", "absolute", "0", "0", "540", "55", null, null, this);
            obj.getSetter("taborder").set("44");
            obj.set_cssclass("sta_WF_CRUDbg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_register", "absolute", "455", "4", "70", "46", null, null, this);
            obj.set_taborder("46");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_odr_dt", "absolute", "157", "59", "368", "54", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("47");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_tabstop("false");
            obj.set_value("null");

            obj = new Edit("edt_shrt_bzplnm", "absolute", "157", "238", "368", "54", null, null, this);
            obj.set_taborder("49");
            obj.set_tabstop("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_vhcno", "absolute", "157", "616", "185", "54", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("51");
            obj.set_text("해당없음");
            obj.set_index("0");
            obj.set_value("1");
            obj.set_innerdataset("@ds_vhcno");
            obj.set_codecolumn("VHCNO");
            obj.set_datacolumn("VHCNO");

            obj = new Edit("Edit05", "absolute", "349", "616", "176", "54", null, null, this);
            obj.set_taborder("52");
            obj.set_value("배송예정");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dlv_dest", "absolute", "157", "427", "368", "54", null, null, this);
            obj.set_taborder("55");
            obj.set_tabstop("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_odr_slpno", "absolute", "157", "117", "312", "54", null, null, this);
            obj.set_taborder("57");
            obj.set_tabstop("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list", "absolute", "0", "926", "540", "352", null, null, this);
            obj.set_taborder("58");
            obj.set_binddataset("ds_dataD");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"57\"/><Column size=\"143\"/><Column size=\"143\"/><Column size=\"143\"/><Column size=\"143\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"50\" band=\"head\"/><Row size=\"63\"/><Row size=\"63\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"순번\"/><Cell col=\"1\" colspan=\"2\" text=\"상품코드\"/><Cell col=\"3\" colspan=\"2\" text=\"상품명\"/><Cell row=\"1\" col=\"1\" text=\"수주량\"/><Cell row=\"1\" col=\"2\" text=\"배송예정량\"/><Cell row=\"1\" col=\"3\" text=\"계약단가\"/><Cell row=\"1\" col=\"4\" text=\"납품단가\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" displaytype=\"normal\" edittype=\"none\" expr=\"expr:currow+1\"/><Cell col=\"1\" colspan=\"2\" displaytype=\"text\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:NA_WRS_C\"/><Cell col=\"3\" colspan=\"2\" displaytype=\"text\" style=\"align:left middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:WRSNM\" wordwrap=\"char\"/><Cell row=\"1\" col=\"1\" text=\"bind:ODR_QT\"/><Cell row=\"1\" col=\"2\" style=\"align:right middle;\" text=\"bind:DVY_PLA_QT\"/><Cell row=\"1\" col=\"3\" text=\"bind:ODR_PCS\"/><Cell row=\"1\" col=\"4\" style=\"align:right middle;\" text=\"bind:ODR_PCS\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_pup_van_seq", "absolute", "548", "0", "540", "1278", null, null, this);
            obj.set_taborder("59");
            obj.set_text("div_pup_van_seq");
            obj.style.set_background("white");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Div("div_search", "absolute", "0", "0", "540", "154", null, null, this.div_pup_van_seq);
            obj.set_taborder("5");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.div_pup_van_seq.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "2.78%", "16", null, "54", "74.63%", null, this.div_pup_van_seq.div_search);
            obj.getSetter("taborder").set("96");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_pup_van_seq.div_search.addChild(obj.name, obj);
            obj = new Button("btn_searchVanSeq", "absolute", "15", "85", "510", "49", null, null, this.div_pup_van_seq.div_search);
            obj.set_taborder("97");
            obj.set_text("조회");
            obj.set_cssclass("btn_WFSA_SearchBtn");
            this.div_pup_van_seq.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_to", "absolute", "63.15%", "16", null, "54", "2.78%", null, this.div_pup_van_seq.div_search);
            this.div_pup_van_seq.div_search.addChild(obj.name, obj);
            obj.set_taborder("98");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static09", "absolute", "58.89%", "16", null, "54", "36.3%", null, this.div_pup_van_seq.div_search);
            obj.getSetter("taborder").set("99");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.div_pup_van_seq.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_from", "absolute", "25.37%", "16", null, "54", "40.56%", null, this.div_pup_van_seq.div_search);
            this.div_pup_van_seq.div_search.addChild(obj.name, obj);
            obj.set_taborder("100");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static00", "absolute", "89.81%", "134", null, "20", "-6.48%", null, this.div_pup_van_seq);
            obj.getSetter("taborder").set("7");
            obj.set_visible("false");
            obj.style.set_background("#dc143c33");
            this.div_pup_van_seq.addChild(obj.name, obj);
            obj = new Div("div_master", "absolute", "0", "154", "540", "1124", null, null, this.div_pup_van_seq);
            obj.set_taborder("8");
            this.div_pup_van_seq.addChild(obj.name, obj);
            obj = new Static("Static66", "absolute", "0%", "5", null, "38", "60%", null, this.div_pup_van_seq.div_master);
            obj.getSetter("taborder").set("3");
            obj.set_text("검색결과 <fc v='#fff44f'><fs v='17'>002</fs></fc>건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_GridCount01");
            this.div_pup_van_seq.div_master.addChild(obj.name, obj);
            obj = new Static("Static65", "absolute", "0", "16", "540", "48", null, null, this.div_pup_van_seq.div_master);
            obj.getSetter("taborder").set("4");
            obj.set_cssclass("sta_WF_Gridbg");
            this.div_pup_van_seq.div_master.addChild(obj.name, obj);
            obj = new Grid("grd_master", "absolute", "0", "64", null, "1060", "0", null, this.div_pup_van_seq.div_master);
            obj.set_taborder("5");
            obj.set_binddataset("ds_dataM");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"300\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"63\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"발주번호\"/><Cell col=\"1\" text=\"발주처명\"/></Band><Band id=\"body\"><Cell style=\"align:center middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:ODR_SLPNO\" wordwrap=\"char\"/><Cell col=\"1\" style=\"align:center middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:SHRT_BZPLNM\"/></Band></Format></Formats>");
            this.div_pup_van_seq.div_master.addChild(obj.name, obj);
            obj = new Button("btn_searchControl00", "absolute", "0", "0", "540", "16", null, null, this.div_pup_van_seq.div_master);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_SearchControlBtn");
            this.div_pup_van_seq.div_master.addChild(obj.name, obj);

            obj = new Button("btn_pup_van_seq", "absolute", "87.59%", "117", null, "54", "2.78%", null, this);
            obj.set_taborder("60");
            obj.set_cssclass("btn_WF_SearchBtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_detail", "absolute", "1096", "0", "540", "1278", null, null, this);
            obj.set_taborder("61");
            obj.set_text("div_detail");
            obj.style.set_background("white");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "0%", "54", null, "122", "62.41%", null, this.div_detail);
            obj.getSetter("taborder").set("0");
            obj.set_text("상품");
            obj.set_cssclass("sta_WF_Label");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "37.59%", "54", null, "122", "0%", null, this.div_detail);
            obj.getSetter("taborder").set("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div_detail.addChild(obj.name, obj);
            obj = new Edit("edt_na_wrs_c", "absolute", "206", "59", null, "54", "15", null, this.div_detail);
            obj.set_taborder("2");
            this.div_detail.addChild(obj.name, obj);
            obj = new Edit("edt_wrsnm", "absolute", "206", "117", null, "54", "15", null, this.div_detail);
            obj.set_taborder("3");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "97.22%", "55", null, "93", "0%", null, this.div_detail);
            obj.getSetter("taborder").set("4");
            obj.set_visible("false");
            obj.style.set_background("#00ffff33");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static44", "absolute", "0%", "175", null, "64", "62.41%", null, this.div_detail);
            obj.getSetter("taborder").set("5");
            obj.set_text("규격/단위");
            obj.set_cssclass("sta_WF_Label");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static45", "absolute", "37.59%", "175", null, "64", "0%", null, this.div_detail);
            obj.getSetter("taborder").set("6");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0%", "238", null, "64", "62.41%", null, this.div_detail);
            obj.getSetter("taborder").set("7");
            obj.set_text("BOX입수");
            obj.set_cssclass("sta_WF_Label");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "37.59%", "238", null, "64", "0%", null, this.div_detail);
            obj.getSetter("taborder").set("8");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0%", "301", null, "64", "62.41%", null, this.div_detail);
            obj.getSetter("taborder").set("9");
            obj.set_text("수주량/배송예정량");
            obj.set_cssclass("sta_WF_Label");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "37.59%", "301", null, "64", "0%", null, this.div_detail);
            obj.getSetter("taborder").set("10");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "0%", "364", null, "64", "62.41%", null, this.div_detail);
            obj.getSetter("taborder").set("11");
            obj.set_text("계약단가/납품단가");
            obj.set_cssclass("sta_WF_Label");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "37.59%", "364", null, "64", "0%", null, this.div_detail);
            obj.getSetter("taborder").set("12");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "0%", "427", null, "64", "62.41%", null, this.div_detail);
            obj.getSetter("taborder").set("13");
            obj.set_text("금액/부가세");
            obj.set_cssclass("sta_WF_Label");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "37.59%", "427", null, "64", "0%", null, this.div_detail);
            obj.getSetter("taborder").set("14");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "0%", "490", null, "64", "62.41%", null, this.div_detail);
            obj.getSetter("taborder").set("15");
            obj.set_text("장려금/장려금율");
            obj.set_cssclass("sta_WF_Label");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "37.59%", "490", null, "64", "0%", null, this.div_detail);
            obj.getSetter("taborder").set("16");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static63", "absolute", "0", "0", "540", "55", null, null, this.div_detail);
            obj.getSetter("taborder").set("17");
            obj.set_cssclass("sta_WF_CRUDbg");
            this.div_detail.addChild(obj.name, obj);
            obj = new Button("btn_save", "absolute", "455", "4", "70", "46", null, null, this.div_detail);
            obj.set_taborder("18");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.div_detail.addChild(obj.name, obj);
            obj = new MaskEdit("mae_odr_pcs", "absolute", "206", "369", null, "54", "187", null, this.div_detail);
            obj.set_taborder("19");
            obj.set_mask("#,##0");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "65.37%", "369", null, "54", "29.81%", null, this.div_detail);
            obj.getSetter("taborder").set("20");
            obj.set_text("/");
            obj.style.set_align("center middle");
            this.div_detail.addChild(obj.name, obj);
            obj = new MaskEdit("mae_snd_pcs", "absolute", "379", "369", null, "54", "15", null, this.div_detail);
            obj.set_taborder("21");
            obj.set_mask("#,##0");
            this.div_detail.addChild(obj.name, obj);
            obj = new MaskEdit("mae_odr_am", "absolute", "206", "432", null, "54", "187", null, this.div_detail);
            obj.set_taborder("22");
            obj.set_mask("#,##0");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "65.37%", "432", null, "54", "29.81%", null, this.div_detail);
            obj.getSetter("taborder").set("23");
            obj.set_text("/");
            obj.style.set_align("center middle");
            this.div_detail.addChild(obj.name, obj);
            obj = new MaskEdit("mae_odr_vat", "absolute", "379", "432", null, "54", "15", null, this.div_detail);
            obj.set_taborder("24");
            obj.set_mask("#,##0");
            this.div_detail.addChild(obj.name, obj);
            obj = new MaskEdit("mse_ssdy_bas_am", "absolute", "206", "495", null, "54", "187", null, this.div_detail);
            obj.set_taborder("25");
            obj.set_mask("#,##0");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "65.37%", "495", null, "54", "29.81%", null, this.div_detail);
            obj.getSetter("taborder").set("26");
            obj.set_text("/");
            obj.style.set_align("center middle");
            this.div_detail.addChild(obj.name, obj);
            obj = new MaskEdit("mae_ssdyrt", "absolute", "379", "495", null, "54", "46", null, this.div_detail);
            obj.set_taborder("27");
            this.div_detail.addChild(obj.name, obj);
            obj = new MaskEdit("mae_odr_qt", "absolute", "206", "306", null, "54", "187", null, this.div_detail);
            obj.set_taborder("28");
            obj.set_mask("#,##0");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "65.37%", "306", null, "54", "29.81%", null, this.div_detail);
            obj.getSetter("taborder").set("29");
            obj.set_text("/");
            obj.style.set_align("center middle");
            this.div_detail.addChild(obj.name, obj);
            obj = new MaskEdit("mae_dvy_pla_qt", "absolute", "379", "306", null, "54", "15", null, this.div_detail);
            obj.set_taborder("30");
            obj.set_mask("#,##0");
            this.div_detail.addChild(obj.name, obj);
            obj = new MaskEdit("mae_boxpe_aqz", "absolute", "206", "243", null, "54", "187", null, this.div_detail);
            obj.set_taborder("31");
            obj.set_mask("#,##0");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "65.37%", "180", null, "54", "29.81%", null, this.div_detail);
            obj.getSetter("taborder").set("32");
            obj.set_text("/");
            obj.style.set_align("center middle");
            this.div_detail.addChild(obj.name, obj);
            obj = new MaskEdit("mae_na_wrs_unt_c", "absolute", "379", "180", null, "54", "15", null, this.div_detail);
            obj.set_taborder("34");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "92.41%", "495", null, "54", "2.78%", null, this.div_detail);
            obj.getSetter("taborder").set("35");
            obj.set_text("%");
            obj.style.set_align("center middle");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "0%", "553", null, "281", "62.41%", null, this.div_detail);
            obj.getSetter("taborder").set("38");
            obj.set_text("미납사유");
            obj.set_cssclass("sta_WF_Label");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "37.59%", "553", null, "281", "0%", null, this.div_detail);
            obj.getSetter("taborder").set("39");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div_detail.addChild(obj.name, obj);
            obj = new Static("Static23", "absolute", "97.22%", "554", null, "93", "0%", null, this.div_detail);
            obj.getSetter("taborder").set("40");
            obj.set_visible("false");
            obj.style.set_background("#00ffff33");
            this.div_detail.addChild(obj.name, obj);
            obj = new Combo("cbo_dqpd_rsnc", "absolute", "206", "558", null, "54", "15", null, this.div_detail);
            this.div_detail.addChild(obj.name, obj);
            obj.set_taborder("41");
            obj.set_value("1");
            obj.set_text("직접입력");
            obj.set_index("0");
            obj.set_innerdataset("@ds_dvy_plash_imp_rsn_dsc");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj = new TextArea("ta_rsn", "absolute", "206", "616", null, "213", "15", null, this.div_detail);
            obj.set_taborder("42");
            this.div_detail.addChild(obj.name, obj);
            obj = new Edit("edt_wrs_stdnm", "absolute", "206", "180", "147", "54", null, null, this.div_detail);
            obj.set_taborder("44");
            obj.style.set_align("right middle");
            this.div_detail.addChild(obj.name, obj);

            obj = new Radio("rdo_dvy_vhc_dsc", "absolute", "157", "553", "286", "54", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_dvy_vhc_dsc_innerdataset = new Dataset("rdo_dvy_vhc_dsc_innerdataset", this.rdo_dvy_vhc_dsc);
            rdo_dvy_vhc_dsc_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">발주처</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">수주처</Col></Row></Rows>");
            obj.set_innerdataset(rdo_dvy_vhc_dsc_innerdataset);
            obj.set_taborder("62");
            obj.set_index("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("2");
            obj.set_direction("vertical");
            obj.set_enable("false");
            obj.style.set_font("9 Gulim");
            obj.style.setStyleValue("font", "disabled", "17 Helvetica");

            obj = new Static("Static19", "absolute", "0%", "359", null, "64", "71.67%", null, this);
            obj.getSetter("taborder").set("63");
            obj.set_text("수주처");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "28.33%", "359", null, "64", "0.19%", null, this);
            obj.getSetter("taborder").set("64");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_rvopl_na_trpl_c", "absolute", "157", "364", "368", "54", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_rvopl_na_trpl_c_innerdataset = new Dataset("cbo_rvopl_na_trpl_c_innerdataset", this.cbo_rvopl_na_trpl_c);
            cbo_rvopl_na_trpl_c_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">8801099000016</Col><Col id=\"datacolumn\">기흥물류센터</Col></Row></Rows>");
            obj.set_innerdataset(cbo_rvopl_na_trpl_c_innerdataset);
            obj.set_taborder("65");
            obj.set_index("-1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Edit("edt_rvopl_na_trpl_c", "absolute", "548", "1292", "362", "54", null, null, this);
            obj.set_taborder("66");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dvyaa_na_trpl_c", "absolute", "548", "1354", "362", "54", null, null, this);
            obj.set_taborder("67");
            obj.set_tabstop("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_sche", "absolute", "1645", "0", "540", "1278", null, null, this);
            obj.set_taborder("68");
            obj.set_text("div_pup_van_seq");
            obj.style.set_background("white");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Div("div_search02", "absolute", "0%", "0", null, "154", "0%", null, this.div_sche);
            obj.set_taborder("17");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.div_sche.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "15", "16", "122", "54", null, null, this.div_sche.div_search02);
            obj.getSetter("taborder").set("111");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_sche.div_search02.addChild(obj.name, obj);
            obj = new Button("btn_searchSche", "absolute", "15", "85", "510", "49", null, null, this.div_sche.div_search02);
            obj.set_taborder("112");
            obj.set_text("조회");
            obj.set_cssclass("btn_WFSA_SearchBtn");
            this.div_sche.div_search02.addChild(obj.name, obj);
            obj = new Calendar("cal_sche_to", "absolute", "63.15%", "16", null, "54", "2.78%", null, this.div_sche.div_search02);
            this.div_sche.div_search02.addChild(obj.name, obj);
            obj.set_taborder("113");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static09", "absolute", "58.89%", "16", null, "54", "36.3%", null, this.div_sche.div_search02);
            obj.getSetter("taborder").set("114");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.div_sche.div_search02.addChild(obj.name, obj);
            obj = new Calendar("cal_sche_from", "absolute", "25.19%", "16", null, "54", "40.56%", null, this.div_sche.div_search02);
            this.div_sche.div_search02.addChild(obj.name, obj);
            obj.set_taborder("115");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static00", "absolute", "89.81%", "134", null, "20", "-5.93%", null, this.div_sche);
            obj.getSetter("taborder").set("19");
            obj.set_visible("false");
            obj.style.set_background("#dc143c33");
            this.div_sche.addChild(obj.name, obj);
            obj = new Div("div_master02", "absolute", "0", "154", "540", "1124", null, null, this.div_sche);
            obj.set_taborder("20");
            this.div_sche.addChild(obj.name, obj);
            obj = new Static("Static66", "absolute", "0%", "5", null, "38", "60%", null, this.div_sche.div_master02);
            obj.getSetter("taborder").set("12");
            obj.set_text("검색결과 <fc v='#fff44f'><fs v='17'>002</fs></fc>건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_GridCount01");
            this.div_sche.div_master02.addChild(obj.name, obj);
            obj = new Static("Static65", "absolute", "0", "16", "540", "48", null, null, this.div_sche.div_master02);
            obj.getSetter("taborder").set("13");
            obj.set_cssclass("sta_WF_Gridbg");
            this.div_sche.div_master02.addChild(obj.name, obj);
            obj = new Grid("grd_sche", "absolute", "0", "64", "540", "1060", null, null, this.div_sche.div_master02);
            obj.set_taborder("14");
            obj.set_binddataset("ds_dataS");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"300\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"63\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"발주번호\"/><Cell col=\"1\" text=\"발주처명\"/></Band><Band id=\"body\"><Cell style=\"align:center middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:ODRPL_NA_TRPL_C\" wordwrap=\"char\"/><Cell col=\"1\" style=\"align:center middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:ODRPL_CLNTNM\"/></Band></Format></Formats>");
            this.div_sche.div_master02.addChild(obj.name, obj);
            obj = new Button("btn_searchControl01", "absolute", "0", "0", "540", "16", null, null, this.div_sche.div_master02);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_SearchControlBtn");
            this.div_sche.div_master02.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "0%", "296", null, "64", "71.67%", null, this);
            obj.getSetter("taborder").set("69");
            obj.set_text("배송예정서\r\n번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "28.33%", "296", null, "64", "0%", null, this);
            obj.getSetter("taborder").set("70");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dvy_plash_slpno", "absolute", "87.59%", "301", null, "54", "2.78%", null, this);
            obj.set_taborder("71");
            obj.set_cssclass("btn_WF_SearchBtn");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dvy_plash_slpno", "absolute", "29.07%", "301", null, "54", "13.15%", null, this);
            obj.set_taborder("72");
            obj.set_tabstop("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 540, 154, this.div_pup_van_seq.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_pup_van_seq.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 1124, this.div_pup_van_seq.div_master,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("8");

            	}
            );
            this.div_pup_van_seq.div_master.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 1278, this.div_pup_van_seq,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("59");
            		p.set_text("div_pup_van_seq");
            		p.style.set_background("white");
            		p.set_visible("false");

            	}
            );
            this.div_pup_van_seq.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 1278, this.div_detail,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("61");
            		p.set_text("div_detail");
            		p.style.set_background("white");
            		p.set_visible("false");

            	}
            );
            this.div_detail.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 154, this.div_sche.div_search02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("17");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_sche.div_search02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 1124, this.div_sche.div_master02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("20");

            	}
            );
            this.div_sche.div_master02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 1278, this.div_sche,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("68");
            		p.set_text("div_pup_van_seq");
            		p.style.set_background("white");
            		p.set_visible("false");

            	}
            );
            this.div_sche.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 1154, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_7021");
            		p.set_titletext("배송예정서 직송등록");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edt_odr_slpno","value","ds_dataM","ODR_SLPNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edt_orpl_na_trpl_c","value","ds_dataM","ODRPL_NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_shrt_bzplnm","value","ds_dataM","SHRT_BZPLNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","div_detail.edt_wrsnm","value","ds_dataD","WRSNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","div_detail.edt_na_wrs_c","value","ds_dataD","NA_WRS_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","div_detail.mae_na_wrs_unt_c","value","ds_dataD","NA_WRS_UNT_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","div_detail.mae_boxpe_aqz","value","ds_dataD","BOXPE_AQZ");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","div_detail.mae_odr_qt","value","ds_dataD","ODR_QT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","div_detail.mae_dvy_pla_qt","value","ds_dataD","DVY_PLA_QT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","div_detail.mae_odr_pcs","value","ds_dataD","ODR_PCS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","div_detail.mae_snd_pcs","value","ds_dataD","ODR_PCS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","div_detail.mae_odr_am","value","ds_dataD","ODR_AM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","div_detail.mae_odr_vat","value","ds_dataD","ODR_VAT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","div_detail.mse_ssdy_bas_am","value","ds_dataD","SSDY_BAS_AM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","div_detail.mae_ssdyrt","value","ds_dataD","SSDYRT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","div_detail.edt_wrs_stdnm","value","ds_dataD","WRS_STDNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","rdo_dvy_vhc_dsc","value","ds_dataM","DVY_VHC_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edt_dvyaa_na_trpl_c","value","ds_dataS","DVYAA_NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_8220.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_8220.xfdl", function() {
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
        	this.div_pup_van_seq.div_master.grd_master.set_nodatatext("데이터가 없습니다.");
        	//this.gfn_setInitForm(obj,e);
        	
        	var param = [  
         		{code:"CTR_TPC",   dsName:"ds_ctr_tpc",   selecttype:"N"},//계약유형
         		{code:"BOX_DSC",   dsName:"ds_box_dsc",   selecttype:"N"}, //박스구분
         		{code:"DVY_PLASH_IMP_RSN_DSC",   dsName:"ds_dvy_plash_imp_rsn_dsc",   selecttype:"N"} //결품사유코드
            ];
            
        	this.gfn_setMobileCommonCode(param);
        	
        	var today = this.gfn_today('yyyyMMdd');
        	this.cal_odr_dt.set_value(today);
        	
        	this.div_pup_van_seq.div_search.cal_from.set_value(this.gfn_minusDate(this.gfn_today("yyyyMMdd"),7));	
        	this.div_pup_van_seq.div_search.cal_to.set_value(today);
        	
        	this.div_sche.div_search02.cal_sche_from.set_value(this.gfn_minusDate(today, 1));
        	this.div_sche.div_search02.cal_sche_to.set_value(this.gfn_addDate(today, 7));
        }

        this.fn_afterFormOnload = function()
        {	
        	
        }

        this.btn_pup_van_seq_onclick = function(obj,e)
        {
        	if(this.gfn_isNull(this.edt_rvopl_na_trpl_c.value)){
        		alert("수주처를 선택해 주세요");
        		return false;
        	}else{
        		var nLeft = 0;
        		var nTop = 0;
        		this.div_pup_van_seq.move(nLeft, nTop);
        		this.div_pup_van_seq.bringToFront();
        		this.div_pup_van_seq.set_visible(true);
        	}
        	this.gfn_callDetailMenu("div_pup_van_seq", "발주번호 조회", "배송예정서 직송등록^배송예정서;일반등록^미입고;패널티");
        }

        /* 발주번호조회 */
        this.searchVanSeq = function()
        {
        	this.ds_dataM.clearData();
        	
        	var dvy_rqr_dt_fr = this.gfn_nullToEmpty(this.div_pup_van_seq.div_search.cal_from.value);
        	var dvy_rqr_dt_to = this.gfn_nullToEmpty(this.div_pup_van_seq.div_search.cal_to.value);
        	
        	//TODO: x 넣는이유? 모바일 기준은?
        	var dlvpnsht_temp_yn = "X";
        	var rvopl_na_trpl_c  = this.edt_rvopl_na_trpl_c.value;
        	
        	var params =  " dvy_rqr_dt_fr=" + dvy_rqr_dt_fr +
        				  " dlvpnsht_temp_yn=" + dlvpnsht_temp_yn +
        				  " dvy_rqr_dt_to=" + dvy_rqr_dt_to
        				  " rvopl_na_trpl_c=" + rvopl_na_trpl_c;
        	
        	trace(">>>> params : " + params);
        				
        	var sSvcID        = "retrieveVanSeq";//통신아이디
        	var sURL          = "svc::/rest/scm/order/retrieveVanSeq";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_dataM=ds_dataM";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", ErrorMsg);
        		return;
        	}else{
        		if(svcID == "retrieveVanSeq"){
        			if(this.ds_dataM.rowcount == 0){				
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");								
        			}
        			trace(this.ds_dataM.saveXML());
        		}else if(svcID == "getOrder"){
        			
        			/* SET */
        			//this.sta_grd_master_cnt.set_text(this.ds_dataD.rowcount); //Row Count Setting
        			this.fn_setVhcno();//차량번호 Setting
        			//this.fn_rdo_dvy_vhc_dsc();//배송차량구분에 따른 운임보조비활성여부
        			
        			if(this.ds_dataM.rowcount == 0){
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			}
        			trace(this.ds_dataD.saveXML());
        		}else if(svcID == "retrieveOdDlvpnshtList"){
        			if(this.ds_dataS.rowcount == 0){				
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			}
        			trace(this.ds_dataS.saveXML());
        		}
        	}
        }

        this.div_pup_van_seq_div_search_btn_searchVanSeq_onclick = function(obj,e)
        {
        	this.searchVanSeq();
        }

        this.div_pup_van_seq_div_master_grd_master_oncellclick = function(obj,e)
        {
        	this.div_pup_van_seq.bringToPrev();
        	this.div_pup_van_seq.set_visible(false);
        	
        	this.fn_srhOrder();
        	
        	this.gfn_topMenuBackMobile();
        }

        /* 발주정보 조회 */
        this.fn_srhOrder = function(){
        	var odrpl_na_trpl_c = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "ODRPL_NA_TRPL_C"); 
        	var odrpl_na_team_c = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "ODRPL_NA_TEAM_C"); 
        	var odr_dt = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "ODR_DT"); 
        	var odr_slpno = this.ds_dataM.getColumn(this.ds_dataM.rowposition, "ODR_SLPNO"); 
        	
        	var params =   " odrpl_na_trpl_c=" + odrpl_na_trpl_c
        				 + " odrpl_na_team_c=" + odrpl_na_team_c
        				 + " odr_dt=" + odr_dt
        				 + " odr_slpno=" + odr_slpno
        				 
        	trace("params : " + params);
        				
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

        /* 차량번호 조회 */
        /* TODO 임시번호는 어디에서?*/
        	var var_dlvpnsht_temp_yn = "Y"; //배송예정시 임시저장여부
        	//var var_spypl_na_team_c = ""; //공급처팀코드
        	var var_dvyaa_na_trpl_c = ""; //배송처코드
        	var var_na_dvy_plash_slpno = "";//배송예정서전표번호
        	var var_spypl_na_trpl_c = "8808983300108"; //공급처코드
        	
        this.fn_setVhcno = function(){
        	
        	params = " spypl_na_trpl_c="+var_spypl_na_trpl_c;
        	
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

        this.btn_register_onclick = function(obj,e)
        {
        	if(this.fn_validationMaster()){
        		this.fn_save();
        	}
        }

        /* Validtaion Check Master */
        this.fn_validationMaster = function(){

        	if(this.gfn_isNull(this.edt_odr_slpno.value)){
        		alert("발주번호를 선택해 주세요");
        		return false;
        	}
        	
        	if(this.gfn_isNull(this.edt_dvy_plash_slpno.value)){
        		alert("배송예정서번호를 선택해 주세요");
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
        	
        	if(this.gfn_isNull(this.cbo_vhcno.value)){
        		alert("배송차량번호를 선택해 주세요");
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
        	var_na_dvy_plash_slpno = this.edt_dvy_plash_slpno.value;
        	var_dvyaa_na_trpl_c = this.edt_dvyaa_na_trpl_c.value;
        	
        	if(var_dlvpnsht_temp_yn == "Y" || var_dlvpnsht_temp_yn == "N"){
        		params = " editType="+var_dlvpnsht_temp_yn
        				 + " spypl_na_trpl_c=" + var_spypl_na_trpl_c
        				 + " dvyaa_na_trpl_c=" + var_dvyaa_na_trpl_c
        				 + " na_dvy_plash_slpno=" + var_na_dvy_plash_slpno;
        		
        	}else{
        		params = " editType="+var_dlvpnsht_temp_yn;
        	}
        	trace("[ fn_save Params ] >>>>>> " + params);	
        	dsParams = "ds_dataM=ds_dataM:A ds_dataD=ds_dataD:A";
        	/*
        	var sSvcID        = "saveDeliveryNoticeOrder";//통신아이디
        	var sURL          = "svc::/rest/scm/delivery/saveDeliveryNoticeOrder";// 호출할 서버 페이지 주소
        	var sInDatasets   = dsParams;//보내는데이터셋
        	var sOutDatasets  = "";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        	*/
        }

        this.grd_list_oncellclick = function(obj,e)
        {
        	var nLeft = 0;
        	var nTop = 0;
        	this.div_detail.move(nLeft, nTop);
        	this.div_detail.bringToFront();
        	this.div_detail.set_visible(true);
        	//this.grd_list.set_visible(false);
        	this.resetScroll();
        	this.vscrollbar.pos = this.vscrollbar.min;
        	application.afrm_WorkFrame.form.div_work.vscrollbar.set_pos(application.afrm_WorkFrame.form.div_work.vscrollbar.min);
        	//this.div_detail.btn_save.setFocus();
        	//alert(application.afrm_HomeFrame.form.vscrollbar.pos);
        	this.gfn_callDetailMenu("div_detail", "배송예정서 직송등록 상세", "배송예정서 직송등록^배송예정서;일반등록^미입고;패널티");
        }

        this.div_detail_btn_save_onclick = function(obj,e)
        {
        	this.div_detail.bringToPrev();
        	this.div_detail.set_visible(false);
        	this.grd_list.set_visible(true);
        	/* TODO: 저장기능? */
        	this.gfn_topMenuBackMobile();
        }

        this.cbo_rvopl_na_trpl_c_onitemchanged = function(obj,e)
        {
        	this.edt_rvopl_na_trpl_c.set_value(this.cbo_rvopl_na_trpl_c.value);
        }

        this.btn_dvy_plash_slpno_onclick = function(obj,e)
        {
        	if(this.gfn_isNull(this.edt_orpl_na_trpl_c.value)){
        		alert("발주처를 선택해 주세요");
        		return false;
        	}else{
        		var nLeft = 0;
        		var nTop = 0;
        		this.div_sche.move(nLeft, nTop);
        		this.div_sche.bringToFront();
        		this.div_sche.set_visible(true);
        	}
        	this.gfn_callDetailMenu("div_sche", "배송예정서번호 조회", "배송예정서 직송등록^배송예정서;일반등록^미입고;패널티");
        }

        this.div_sche_div_search02_btn_searchSche_onclick = function(obj,e)
        {
        	this.fn_searchSche();
        }

        /*배송예정서 조회*/
        this.fn_searchSche = function(){
        	this.ds_dataS.clearData();
        	
        	var sche_from = this.gfn_nullToEmpty(this.div_sche.div_search02.cal_sche_from.value);
        	var sche_to = this.gfn_nullToEmpty(this.div_sche.div_search02.cal_sche_to.value);
        	
        	//var edt_odrpl_na_trpl_c = this.gfn_nullToEmpty(this.div_search.edt_odrpl_na_trpl_c.value);
        	/* TODO edt_odrpl_na_trpl_c 와 authorityNo 매칭 값이 db에 없을때 처리? */
        	var edt_odrpl_na_trpl_c = "8808983120140";
        	
        	var authorityNo = application.gv_glnCode;
        	var ddly_yn = "0";
        	
        	var params =  	" from_date=" + sche_from 
        					+ " to_date=" + sche_to					
        					+ " odrpl_na_trpl_c=" + edt_odrpl_na_trpl_c
        					+ " authorityNo=" + authorityNo
        					+ " ddly_yn=" + ddly_yn;
        	
        	
        	trace("params : " + params);	
        	
        	var sSvcID        = "retrieveOdDlvpnshtList";//통신아이디
        	var sURL          = "svc::/rest/delivery/retrieveOdDlvpnshtList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_dataS=ds_dataM";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        	
        }

        this.div_sche_div_master02_grd_sche_oncellclick = function(obj,e)
        {
        	this.div_sche.bringToPrev();
        	this.div_sche.set_visible(false);
        	
        	var dvy_plash_slpno = this.gfn_nullToEmpty(this.ds_dataS.getColumn(this.ds_dataS.rowposition, "NA_DVY_PLASH_SLPNO"));
        		
        	this.edt_dvy_plash_slpno.set_value(dvy_plash_slpno);
        	
        	this.gfn_topMenuBackMobile();
        }

        this.div_pup_van_seq_div_master_btn_searchControl00_onclick = function(obj,e)
        {
        	this.gfn_mobileSearchDivResize(obj, this.div_pup_van_seq.div_search, this.div_pup_van_seq.div_master);
        }

        this.div_sche_div_master02_btn_searchControl01_onclick = function(obj,e)
        {
        	this.gfn_mobileSearchDivResize(obj, this.div_sche.div_search02, this.div_sche.div_master02);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_dataD.addEventHandler("onrowposchanged", this.ds_dataD_onrowposchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_register.addEventHandler("onclick", this.btn_register_onclick, this);
            this.grd_list.addEventHandler("oncellclick", this.grd_list_oncellclick, this);
            this.div_pup_van_seq.div_search.btn_searchVanSeq.addEventHandler("onclick", this.div_pup_van_seq_div_search_btn_searchVanSeq_onclick, this);
            this.div_pup_van_seq.div_master.grd_master.addEventHandler("oncellclick", this.div_pup_van_seq_div_master_grd_master_oncellclick, this);
            this.div_pup_van_seq.div_master.btn_searchControl00.addEventHandler("onclick", this.div_pup_van_seq_div_master_btn_searchControl00_onclick, this);
            this.btn_pup_van_seq.addEventHandler("onclick", this.btn_pup_van_seq_onclick, this);
            this.div_detail.btn_save.addEventHandler("onclick", this.div_detail_btn_save_onclick, this);
            this.cbo_rvopl_na_trpl_c.addEventHandler("onitemchanged", this.cbo_rvopl_na_trpl_c_onitemchanged, this);
            this.div_sche.div_search02.btn_searchSche.addEventHandler("onclick", this.div_sche_div_search02_btn_searchSche_onclick, this);
            this.div_sche.div_master02.grd_sche.addEventHandler("oncellclick", this.div_sche_div_master02_grd_sche_oncellclick, this);
            this.div_sche.div_master02.btn_searchControl01.addEventHandler("onclick", this.div_sche_div_master02_btn_searchControl01_onclick, this);
            this.btn_dvy_plash_slpno.addEventHandler("onclick", this.btn_dvy_plash_slpno_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_8220.xfdl");

       
    };
}
)();
