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
                this.set_name("frm_VAN_DS_SC_0110");
                this.set_titletext("축산수주내역조회");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pageVO01", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CURRENT_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TOTAL_ROW_COUNT\">0</Col><Col id=\"PAGE_SIZE\">10</Col><Col id=\"CURRENT_PAGE\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pageVO02", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CURRENT_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TOTAL_ROW_COUNT\">0</Col><Col id=\"PAGE_SIZE\">10</Col><Col id=\"CURRENT_PAGE\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rgn_c00", this);
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

            obj = new Dataset("ds_phd_fclt_c", this);
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

            obj = new Dataset("ds_dataM01", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ODR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_QT\" type=\"FLOAT\" size=\"256\"/><Column id=\"BOXPE_AQZ\" type=\"INT\" size=\"256\"/><Column id=\"TXT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EXTX_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ODR_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"VCBT_AM\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dataD01", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ODRPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SHRT_BZPLNM\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_RQR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BOXPE_AQZ\" type=\"INT\" size=\"256\"/><Column id=\"ODR_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"VCBT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SPY_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_ODR_STS_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"FSRGMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"TEAMNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_RGN_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"RVOPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"RVOPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"EDIRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RMS_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_QTTT\" type=\"FLOAT\" size=\"256\"/><Column id=\"DEL_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dataM02", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ODRPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TEAM_N\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_NA_TEAM_N\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_CNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ODR_QT\" type=\"FLOAT\" size=\"256\"/><Column id=\"BOXPE_AQZ\" type=\"INT\" size=\"256\"/><Column id=\"ODR_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"VCBT_AM\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dataD02", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ODRPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"EDIRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RMS_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_RQR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"VCBT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SPY_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_ODR_STS_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"FSRGMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"DDLY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CMENO\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dataM03", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RVOPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"RVOPL_NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"RVOPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_WRS_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_QT\" type=\"STRING\" size=\"256\"/><Column id=\"BOXPE_AQZ\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_AM\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"VHCNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dataD03", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ODR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TEAM_N\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_RQR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"EDIRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RMS_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_QT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_AM\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"DLVPNSHT_TEMP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NA_ODR_STS_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"DDLY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SPY_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_RGN_N\" type=\"STRING\" size=\"256\"/><Column id=\"DLVST_EDIT_PSB_YN\" type=\"STRING\" size=\"256\"/><Column id=\"XML_CHANGE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"XML_ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"XML_SEND_DT\" type=\"STRING\" size=\"256\"/><Column id=\"XML_OFFER_ODR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FSRGMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"ELS_CMENO\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_TEM\" type=\"STRING\" size=\"256\"/><Column id=\"DVYAA_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"DVYAA_NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"DVYAA_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"DVYAA_NA_TEAM_N\" type=\"STRING\" size=\"256\"/><Column id=\"GRS_SOJU_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ROGO_INF_CRT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"VHCNO\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"XML_CHDOC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"XML_ODRW_NO\" type=\"STRING\" size=\"256\"/><Column id=\"XML_DOC_TMS_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SRA_WRS_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"DDL_WRS_KDC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dataM04", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_STDNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_UNT_C\" type=\"STRING\" size=\"256\"/><Column id=\"BOXPE_AQZ\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_PCS\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_QT\" type=\"STRING\" size=\"256\"/><Column id=\"BOX_QT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_AM\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"VHCNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dataD04", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ODRPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TEAM_N\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_QT\" type=\"FLOAT\" size=\"256\"/><Column id=\"BOXPE_AQZ\" type=\"INT\" size=\"256\"/><Column id=\"ODR_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ODR_VAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"VCBT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"VHCNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rgn_c01", this);
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

            obj = new Dataset("ds_dataD03_total", this);
            obj._setContents("<ColumnInfo><Column id=\"TOTAL_ODR_QT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ODR_AM\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_VCBT_AM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dataD04_total", this);
            obj._setContents("<ColumnInfo><Column id=\"TOTAL_ODR_QT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ODR_AM\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_VCBT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_BOX_QT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_odr_sts", this);
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
            obj = new Div("div_search", "absolute", "0", "29", null, "99", "15", null, this);
            obj.set_taborder("30");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "9", "91", "21", null, null, this.div_search);
            obj.set_taborder("23");
            obj.set_text("조회구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "15", "35", "103", "21", null, null, this.div_search);
            obj.set_taborder("59");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "756", "-2", null, "69", "201", null, this.div_search);
            obj.set_taborder("60");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_search_period", "absolute", "120", "35", "227", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_search_period_innerdataset = new Dataset("rdo_search_period_innerdataset", this.div_search.rdo_search_period);
            rdo_search_period_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">수주일</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">배송요청일</Col></Row></Rows>");
            obj.set_innerdataset(rdo_search_period_innerdataset);
            obj.set_taborder("71");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.style.set_font("9 Gulim");
            obj.set_index("0");
            obj = new Calendar("cal_from", "absolute", "326", "35", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("72");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static08", "absolute", "428", "35", "10", "21", null, null, this.div_search);
            obj.set_taborder("73");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_to", "absolute", "438", "35", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("74");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Radio("rdo_search_type02", "absolute", "233", "9", "86", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_search_type02_innerdataset = new Dataset("rdo_search_type02_innerdataset", this.div_search.rdo_search_type02);
            rdo_search_type02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">발주처별</Col></Row></Rows>");
            obj.set_innerdataset(rdo_search_type02_innerdataset);
            obj.set_taborder("76");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.style.set_font("9 Gulim");
            obj.set_index("-1");
            obj = new Edit("edt_wrsnm", "absolute", "620", "9", "139", "21", null, null, this.div_search);
            obj.set_taborder("77");
            obj.set_maxlength("12");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_na_wrs_c", "absolute", "521", "9", "97", "21", null, null, this.div_search);
            obj.set_taborder("78");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            obj.set_visible("false");
            obj.set_inputtype("number");
            obj.set_maxlength("25");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup", "absolute", "762", "9", "21", "21", null, null, this.div_search);
            obj.set_taborder("79");
            obj.set_cssclass("btn_WF_Searchbtn");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "15", "61", "103", "21", null, null, this.div_search);
            obj.set_taborder("82");
            obj.set_text("물류기능코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_phd_fclt_c", "absolute", "120", "61", "97", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("83");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_innerdataset("@ds_phd_fclt_c");
            obj.set_index("-1");
            obj = new Static("Static07", "absolute", "247", "61", "79", "21", null, null, this.div_search);
            obj.set_taborder("84");
            obj.set_text("지역코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_wmc_loc_rgn_dsc", "absolute", "326", "61", "81", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("85");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_innerdataset("@ds_rgn_c00");
            obj.set_index("-1");
            obj = new Combo("cbo_ht_lov_rgn_c", "absolute", "409", "61", "85", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("86");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_innerdataset("@ds_rgn_c01");
            obj.set_index("-1");
            obj = new Radio("rdo_search_type01", "absolute", "120", "9", "86", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_search_type01_innerdataset = new Dataset("rdo_search_type01_innerdataset", this.div_search.rdo_search_type01);
            rdo_search_type01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">일자별</Col></Row></Rows>");
            obj.set_innerdataset(rdo_search_type01_innerdataset);
            obj.set_taborder("87");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.style.set_font("9 Gulim");
            obj.set_index("-1");
            obj = new Radio("rdo_search_type03", "absolute", "347", "9", "99", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_search_type03_innerdataset = new Dataset("rdo_search_type03_innerdataset", this.div_search.rdo_search_type03);
            rdo_search_type03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">소속사업장별</Col></Row></Rows>");
            obj.set_innerdataset(rdo_search_type03_innerdataset);
            obj.set_taborder("88");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.style.set_font("9 Gulim");
            obj.set_value("3");
            obj.set_index("0");
            obj = new Radio("rdo_search_type04", "absolute", "460", "9", "86", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_search_type04_innerdataset = new Dataset("rdo_search_type04_innerdataset", this.div_search.rdo_search_type04);
            rdo_search_type04_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">상품별</Col></Row></Rows>");
            obj.set_innerdataset(rdo_search_type04_innerdataset);
            obj.set_taborder("89");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.style.set_font("9 Gulim");
            obj.set_enable("false");
            obj.set_index("-1");
            obj = new Static("Static01", "absolute", "245", "56", null, "5", "393", null, this.div_search);
            obj.set_taborder("90");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "117", "82", null, "5", "521", null, this.div_search);
            obj.set_taborder("91");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "217", "30", "30", "67", null, null, this.div_search);
            obj.set_taborder("92");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "67", "88", null, "10", "571", null, this.div_search);
            obj.set_taborder("93");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "524", "61", "99", "21", null, null, this.div_search);
            obj.set_taborder("94");
            obj.set_text("발주상태구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "494", "30", "30", "67", null, null, this.div_search);
            obj.set_taborder("95");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_na_odr_sts_dsc", "absolute", "620", "61", "161", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("96");
            obj.set_innerdataset("ds_odr_sts");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj = new Edit("edt_splr_trpl_c", "absolute", "521", "9", "103", "21", null, null, this.div_search);
            obj.set_taborder("97");
            obj.set_inputtype("number");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_splr_trpl_nm", "absolute", "627", "9", "133", "21", null, null, this.div_search);
            obj.set_taborder("98");
            obj.set_maxlength("12");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup01", "absolute", "762", "9", "21", "21", null, null, this.div_search);
            obj.set_taborder("99");
            obj.set_cssclass("btn_WF_Searchbtn");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_splr_team_c", "absolute", "786", "9", "30", "21", null, null, this.div_search);
            obj.set_taborder("100");
            obj.set_inputtype("number");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_splr_team_nm", "absolute", "819", "9", "50", "21", null, null, this.div_search);
            obj.set_taborder("101");
            obj.set_inputtype("number");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_ddly_yn", "absolute", "548", "36", "73", "21", null, null, this.div_search);
            obj.set_taborder("102");
            obj.set_text("직송구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cdo_r2_ddly_yn", "absolute", "620", "35", "98", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cdo_r2_ddly_yn_innerdataset = new Dataset("cdo_r2_ddly_yn_innerdataset", this.div_search.cdo_r2_ddly_yn);
            cdo_r2_ddly_yn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">일반</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">직송</Col></Row></Rows>");
            obj.set_innerdataset(cdo_r2_ddly_yn_innerdataset);
            obj.set_taborder("103");
            obj.set_value("0");
            obj.set_text("일반");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");

            obj = new Div("div_list01", "absolute", "0", "127", null, null, "15", "0", this);
            obj.set_taborder("0");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Button("Button10", "absolute", "331", "0", null, "12", "330", null, this.div_list01);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list01.addChild(obj.name, obj);
            obj = new Grid("grd_master", "absolute", "0", "21", null, "221", "0", null, this.div_list01);
            obj.set_taborder("1");
            obj.set_binddataset("ds_dataM01");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"39\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"수주일\"/><Cell col=\"2\" text=\"수주량\"/><Cell col=\"3\" text=\"BOX수량\"/><Cell col=\"4\" text=\"과세금액\"/><Cell col=\"5\" text=\"면세금액\"/><Cell col=\"6\" text=\"수주금액\"/><Cell col=\"7\" text=\"공병금액\"/></Band><Band id=\"body\"><Cell text=\"bind:RN\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:ODR_DT\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" displaytype=\"normal\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_QT\" mask=\"#,##0\"/><Cell col=\"3\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:BOXPE_AQZ\" mask=\"#,##9.90\" editlimitbymask=\"both\"/><Cell col=\"4\" displaytype=\"normal\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:TXT_AM\" mask=\"#,##0\"/><Cell col=\"5\" displaytype=\"normal\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:EXTX_AM\" mask=\"#,##0\"/><Cell col=\"6\" displaytype=\"normal\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_AM\" mask=\"#,##0\"/><Cell col=\"7\" displaytype=\"normal\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:VCBT_AM\" mask=\"#,##0\"/></Band></Format></Formats>");
            this.div_list01.addChild(obj.name, obj);
            obj = new Grid("grd_detail", "absolute", "0", "300", null, null, "0", "41", this.div_list01);
            obj.set_taborder("2");
            obj.set_binddataset("ds_dataD01");
            obj.set_useselcolor("false");
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"39\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"200\"/><Column size=\"90\"/><Column size=\"0\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"85\"/><Column size=\"99\"/><Column size=\"106\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"수주일자\"/><Cell col=\"2\" text=\"발주번호\"/><Cell col=\"3\" text=\"발주상태\"/><Cell col=\"4\" text=\"발주처\"/><Cell col=\"5\" text=\"발주처명\"/><Cell col=\"6\" text=\"발주처팀\"/><Cell col=\"7\" text=\"발주상태\"/><Cell col=\"8\" text=\"수주량\"/><Cell col=\"9\" text=\"BOX수량\"/><Cell col=\"10\" text=\"수주금액\"/><Cell col=\"11\" text=\"공병\"/><Cell col=\"12\" text=\"수주유형\"/><Cell col=\"13\" text=\"발주자\"/><Cell col=\"14\" text=\"지역코드\"/><Cell col=\"15\" text=\"수주처\"/><Cell col=\"16\" text=\"수주처명\"/><Cell col=\"17\" text=\"수주처팀\"/><Cell col=\"18\" text=\"배달일시\"/><Cell col=\"19\" text=\"수신일시\"/><Cell col=\"20\" text=\"삭제일시\"/></Band><Band id=\"body\"><Cell text=\"bind:RN\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:ODR_DT\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" text=\"bind:ODR_SLPNO\"/><Cell col=\"3\" text=\"bind:NA_ODR_STS_DSC\"/><Cell col=\"4\" text=\"bind:ODRPL_NA_TRPL_C\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:SHRT_BZPLNM\"/><Cell col=\"6\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:TEAMNM\"/><Cell col=\"7\" text=\"bind:NA_ODR_STS_DSC\"/><Cell col=\"8\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_QTTT\" mask=\"#,##0\"/><Cell col=\"9\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:BOXPE_AQZ\" mask=\"9,999.99\" editlimitbymask=\"both\"/><Cell col=\"10\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_AM\" mask=\"#,##0\"/><Cell col=\"11\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:VCBT_AM\" mask=\"#,##0\"/><Cell col=\"12\" text=\"bind:SPY_TPC\"/><Cell col=\"13\" text=\"bind:FSRGMN_ENO\"/><Cell col=\"14\" text=\"bind:NA_RGN_C\"/><Cell col=\"15\" text=\"bind:RVOPL_NA_TRPL_C\"/><Cell col=\"16\" style=\"align:left;\" text=\"bind:CLNTNM\"/><Cell col=\"17\" style=\"align:center;\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:RVOPL_NA_TEAM_C\"/><Cell col=\"18\" text=\"bind:EDIRG_DTM\"/><Cell col=\"19\" text=\"bind:FS_RMS_DTM\"/><Cell col=\"20\" text=\"bind:DEL_DTM\"/></Band></Format></Formats>");
            this.div_list01.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "936", "-1", null, "15", "2", null, this.div_list01);
            obj.set_taborder("3");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list01.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "936", "35", null, "5", "2", null, this.div_list01);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list01.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "638", "1", null, "20", "0", null, this.div_list01);
            obj.set_taborder("5");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list01.addChild(obj.name, obj);
            obj = new Div("div_page01_02", "absolute", "28.48%", null, "340", "30", null, "5", this.div_list01);
            obj.set_taborder("6");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list01.addChild(obj.name, obj);
            obj = new Div("div_page01_01", "absolute", "28.43%", "242", "340", "30", null, null, this.div_list01);
            obj.set_taborder("7");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list01.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", "397", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "1", "30", null, "69", "977", null, this);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "85", "30", null, "69", "886", null, this);
            obj.set_taborder("8");
            obj.set_text("22");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "788", "0", "15", "490", null, null, this);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "923", "308", null, "15", "15", null, this);
            obj.set_taborder("15");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "923", "344", null, "5", "15", null, this);
            obj.set_taborder("16");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("41");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", null, "5", "5", "11", "215", null, this);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_Vdash");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "118", null, this);
            obj.set_taborder("47");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "161", null, this);
            obj.set_taborder("49");
            obj.set_text("Div00");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("50");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("div_list02", "absolute", "0", "618", null, null, "15", "-480", this);
            obj.set_taborder("54");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Div("div_page02_01", "absolute", "28.43%", "242", "340", "30", null, null, this.div_list02);
            obj.set_taborder("6");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list02.addChild(obj.name, obj);
            obj = new Div("div_page02_02", "absolute", "28.48%", null, "340", "30", null, "5", this.div_list02);
            obj.set_taborder("7");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list02.addChild(obj.name, obj);
            obj = new Grid("grd_detail", "absolute", "0", "300", null, null, "0", "41", this.div_list02);
            obj.set_taborder("1");
            obj.set_binddataset("ds_dataD02");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"39\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"0\"/><Column size=\"110\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"76\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"133\"/><Column size=\"140\"/><Column size=\"140\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"수주일자\"/><Cell col=\"2\" text=\"발주번호\"/><Cell col=\"3\" text=\"발주상태\"/><Cell col=\"4\" text=\"정산처\"/><Cell col=\"5\" text=\"정산처명\"/><Cell col=\"6\" text=\"배송요청일\"/><Cell col=\"7\" text=\"수주금액\"/><Cell col=\"8\" text=\"공병금액\"/><Cell col=\"9\" text=\"수주유형\"/><Cell col=\"10\" text=\"직송여부\"/><Cell col=\"11\" text=\"최초등록일시\"/><Cell col=\"12\" text=\"최종변경일시\"/><Cell col=\"13\" text=\"최종변경자 개인번호\"/><Cell col=\"14\" text=\"배달일시\"/><Cell col=\"15\" text=\"수신일시\"/></Band><Band id=\"body\"><Cell text=\"bind:RN\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:ODR_DT\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" text=\"bind:ODR_SLPNO\"/><Cell col=\"3\" text=\"bind:NA_ODR_STS_DSC\"/><Cell col=\"4\" text=\"bind:MNGT_NA_TRPL_C\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:MNGT_NA_TRPL_N\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:DVY_RQR_DT\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_AM\" mask=\"#,##0\"/><Cell col=\"8\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:VCBT_AM\" mask=\"#,##0\"/><Cell col=\"9\" text=\"bind:SPY_TPC\"/><Cell col=\"10\" text=\"expr:DDLY_YN == '0' ? '일반' : '직송'\"/><Cell col=\"11\" text=\"bind:FSRG_DTM\"/><Cell col=\"12\" text=\"bind:LSCHG_DTM\"/><Cell col=\"13\" text=\"bind:LS_CMENO\"/><Cell col=\"14\" text=\"bind:EDIRG_DTM\"/><Cell col=\"15\" text=\"bind:FS_RMS_DTM\"/></Band></Format></Formats>");
            this.div_list02.addChild(obj.name, obj);
            obj = new Button("Button10", "absolute", "331", "0", null, "12", "330", null, this.div_list02);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list02.addChild(obj.name, obj);
            obj = new Grid("grd_master", "absolute", "0", "21", null, "221", "0", null, this.div_list02);
            obj.set_taborder("0");
            obj.set_binddataset("ds_dataM02");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"39\"/><Column size=\"110\"/><Column size=\"200\"/><Column size=\"90\"/><Column size=\"110\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"발주처\"/><Cell col=\"2\" text=\"발주처명\"/><Cell col=\"3\" text=\"발주처팀\"/><Cell col=\"4\" text=\"공급처\"/><Cell col=\"5\" text=\"공급처명\"/><Cell col=\"6\" text=\"공급처팀\"/><Cell col=\"7\" text=\"발주상품건수\"/><Cell col=\"8\" text=\"수주량\"/><Cell col=\"9\" text=\"BOX수량\"/><Cell col=\"10\" text=\"수주금액\"/><Cell col=\"11\" text=\"공병금액\"/></Band><Band id=\"body\"><Cell text=\"bind:RN\"/><Cell col=\"1\" text=\"bind:ODRPL_NA_TRPL_C\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:ODRPL_NA_TRPL_N\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:ODRPL_NA_TEAM_N\"/><Cell col=\"4\" text=\"bind:SPYPL_NA_TRPL_C\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:SPYPL_NA_TRPL_N\"/><Cell col=\"6\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:SPYPL_NA_TEAM_N\"/><Cell col=\"7\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_CNT\" mask=\"#,##0\"/><Cell col=\"8\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_QT\" mask=\"#,##0\"/><Cell col=\"9\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:BOXPE_AQZ\" mask=\"9,999.99\" editlimitbymask=\"both\"/><Cell col=\"10\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_AM\" mask=\"#,##0\"/><Cell col=\"11\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:VCBT_AM\" mask=\"#,##0\"/></Band></Format></Formats>");
            this.div_list02.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "936", "-1", null, "15", "2", null, this.div_list02);
            obj.set_taborder("3");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list02.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "936", "35", null, "5", "2", null, this.div_list02);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list02.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "638", "1", null, "20", "0", null, this.div_list02);
            obj.set_taborder("5");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list02.addChild(obj.name, obj);

            obj = new Div("div_list03", "absolute", "0", "1095", null, "353", "15", null, this);
            obj.set_taborder("55");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Div("div_page03_01", "absolute", "28.48%", "242", "340", "30", null, null, this.div_list03);
            obj.set_taborder("76");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list03.addChild(obj.name, obj);
            obj = new Div("div_page03_02", "absolute", "28.48%", null, "340", "30", null, "5", this.div_list03);
            obj.set_taborder("77");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list03.addChild(obj.name, obj);
            obj = new Button("Button10", "absolute", "331", "0", null, "12", "330", null, this.div_list03);
            obj.set_taborder("69");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list03.addChild(obj.name, obj);
            obj = new Grid("grd_master", "absolute", "0", "21", null, "221", "0", null, this.div_list03);
            obj.set_taborder("70");
            obj.set_binddataset("ds_dataM03");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"39\"/><Column size=\"110\"/><Column size=\"200\"/><Column size=\"110\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"수주처\"/><Cell col=\"2\" text=\"수주처명\"/><Cell col=\"3\" text=\"공급처\"/><Cell col=\"4\" text=\"공급처명\"/><Cell col=\"5\" text=\"수주상품건수\"/><Cell col=\"6\" text=\"수주수량\"/><Cell col=\"7\" text=\"BOX수량\"/><Cell col=\"8\" text=\"수주금액\"/><Cell col=\"9\" text=\"부가세액\"/><Cell col=\"10\" text=\"공병금액\"/><Cell col=\"11\" text=\"수주건수\"/><Cell col=\"12\" text=\"차량번호\"/></Band><Band id=\"body\"><Cell text=\"bind:RN\"/><Cell col=\"1\" text=\"bind:RVOPL_NA_TRPL_C\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:RVOPL_NA_TRPL_N\"/><Cell col=\"3\" text=\"bind:SPYPL_NA_TRPL_C\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:SPYPL_NA_TRPL_N\"/><Cell col=\"5\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_WRS_CNT\"/><Cell col=\"6\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_QT\"/><Cell col=\"7\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:BOXPE_AQZ\" mask=\"9,999.99\" editlimitbymask=\"both\"/><Cell col=\"8\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_AM\"/><Cell col=\"9\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_VAT\"/><Cell col=\"10\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:VCBT_AM\"/><Cell col=\"11\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_CNT\"/><Cell col=\"12\" text=\"bind:VHCNO\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" style=\"align:center;\" text=\"합계\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\" displaytype=\"number\" text=\"expr:dataset.getSum('ODR_WRS_CNT')\"/><Cell col=\"6\" displaytype=\"number\" text=\"expr:dataset.getSum('ODR_QT')\"/><Cell col=\"7\" displaytype=\"number\" text=\"expr:dataset.getSum('BOXPE_AQZ')\" mask=\"9,999.99\"/><Cell col=\"8\" displaytype=\"number\" text=\"expr:dataset.getSum('ODR_AM')\"/><Cell col=\"9\" displaytype=\"number\" text=\"expr:dataset.getSum('ODR_VAT')\"/><Cell col=\"10\" displaytype=\"number\" text=\"expr:dataset.getSum('VCBT_AM')\"/><Cell col=\"11\" displaytype=\"number\" text=\"expr:dataset.getSum('ODR_CNT')\"/><Cell col=\"12\"/></Band></Format></Formats>");
            this.div_list03.addChild(obj.name, obj);
            obj = new Grid("grd_detail", "absolute", "0", "300", null, null, "0", "41", this.div_list03);
            obj.set_taborder("71");
            obj.set_binddataset("ds_dataD03");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"39\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"0\"/><Column size=\"110\"/><Column size=\"200\"/><Column size=\"121\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"140\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"110\"/><Column size=\"200\"/><Column size=\"90\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"85\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"140\"/></Columns><Rows><Row size=\"41\" band=\"head\"/><Row size=\"28\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"수주일자\"/><Cell col=\"2\" text=\"발주번호\"/><Cell col=\"3\" text=\"발주상태\"/><Cell col=\"4\" text=\"배송처\"/><Cell col=\"5\" text=\"배송처명\"/><Cell col=\"6\" text=\"배송처팀\"/><Cell col=\"7\" text=\"배송요청일\"/><Cell col=\"8\" text=\"수주수량\"/><Cell col=\"9\" text=\"수주금액\"/><Cell col=\"10\" text=\"공병금액\"/><Cell col=\"11\" text=\"배송예정서작성\"/><Cell col=\"12\" text=\"직송여부\"/><Cell col=\"13\" text=\"수주유형\"/><Cell col=\"14\" text=\"지역명\"/><Cell col=\"15\" text=\"XML변경서번호\"/><Cell col=\"16\" text=\"XML발주서번호\"/><Cell col=\"17\" text=\"XML문서전송일자\"/><Cell col=\"18\" text=\"발주처\"/><Cell col=\"19\" text=\"발주처명\"/><Cell col=\"20\" text=\"발주처팀\"/><Cell col=\"21\" text=\"최초등록일시\"/><Cell col=\"22\" text=\"최종변경일시\"/><Cell col=\"23\" text=\"최종변경자&#13;&#10;개인번호\"/><Cell col=\"24\" text=\"삭제일시\"/><Cell col=\"25\" text=\"지방소주여부\"/><Cell col=\"26\" text=\"수발주정보생성&#13;&#10;구분코드\"/><Cell col=\"27\" text=\"차량번호\"/><Cell col=\"28\" text=\"축산상품코드\"/><Cell col=\"29\" text=\"마감상품종류\"/><Cell col=\"30\" text=\"배달일시\"/><Cell col=\"31\" text=\"수신일시\"/></Band><Band id=\"body\"><Cell text=\"bind:RN\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:ODR_DT\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" text=\"bind:ODR_SLPNO\"/><Cell col=\"3\" text=\"bind:NA_ODR_STS_DSC\"/><Cell col=\"4\" text=\"bind:DVYAA_NA_TRPL_C\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:DVYAA_NA_TRPL_N\"/><Cell col=\"6\" style=\"align:center;\" text=\"bind:DVYAA_NA_TEAM_N\"/><Cell col=\"7\" displaytype=\"date\" text=\"bind:DVY_RQR_DT\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ODR_QT\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ODR_AM\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:VCBT_AM\"/><Cell col=\"11\" displaytype=\"expr:DLVPNSHT_TEMP_YN == '직송' ? '' : DLVPNSHT_TEMP_YN == '작성' ? 'none':'button'\" edittype=\"expr:DLVPNSHT_TEMP_YN == '직송' ? '' : DLVPNSHT_TEMP_YN == '작성 '? 'none':'button'\" style=\"align:center;\" text=\"bind:DLVPNSHT_TEMP_YN\"/><Cell col=\"12\" text=\"expr:(ROGO_INF_CRT_C == '462' || ROGO_INF_CRT_C == '463') ? '직송' : '일반'\"/><Cell col=\"13\" text=\"bind:SPY_TPC\"/><Cell col=\"14\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:NA_RGN_N\"/><Cell col=\"15\" text=\"bind:XML_CHDOC_NO\"/><Cell col=\"16\" text=\"bind:XML_ODRW_NO\"/><Cell col=\"17\" text=\"bind:XML_DOC_TMS_DT\"/><Cell col=\"18\" text=\"bind:ODRPL_NA_TRPL_C\"/><Cell col=\"19\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:ODRPL_NA_TRPL_N\"/><Cell col=\"20\" style=\"align:left;\" text=\"bind:ODRPL_NA_TEAM_N\"/><Cell col=\"21\" text=\"bind:FSRG_DTM\"/><Cell col=\"22\" text=\"bind:LSCHG_DTM\"/><Cell col=\"23\" text=\"bind:ELS_CMENO\"/><Cell col=\"24\" text=\"bind:DEL_TEM\"/><Cell col=\"25\" text=\"expr:GRS_SOJU_YN == '0' ? '부' : '여'\"/><Cell col=\"26\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:ROGO_INF_CRT_DSC\"/><Cell col=\"27\" text=\"bind:VHCNO\"/><Cell col=\"28\" text=\"bind:SRA_WRS_DSC\"/><Cell col=\"29\" text=\"bind:DDL_WRS_KDC\"/><Cell col=\"30\" text=\"bind:EDIRG_DTM\"/><Cell col=\"31\" text=\"bind:FS_RMS_DTM\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" style=\"align:center;\" text=\"합계\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"0\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"0\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"0\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/><Cell col=\"27\"/><Cell col=\"28\"/><Cell col=\"29\"/><Cell col=\"30\"/><Cell col=\"31\"/></Band></Format></Formats>");
            this.div_list03.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "936", "-1", null, "15", "2", null, this.div_list03);
            obj.set_taborder("72");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list03.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "936", "35", null, "5", "2", null, this.div_list03);
            obj.set_taborder("73");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list03.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "638", "1", null, "20", "0", null, this.div_list03);
            obj.set_taborder("75");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list03.addChild(obj.name, obj);

            obj = new Div("div_list04", "absolute", "0", "1566", null, "372", "15", null, this);
            obj.set_taborder("56");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Div("div_page04_01", "absolute", "28.48%", "242", "340", "30", null, null, this.div_list04);
            obj.set_taborder("98");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list04.addChild(obj.name, obj);
            obj = new Div("div_page04_02", "absolute", "28.48%", null, "340", "30", null, "5", this.div_list04);
            obj.set_taborder("99");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list04.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "936", "-1", null, "15", "2", null, this.div_list04);
            obj.set_taborder("81");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list04.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "936", "35", null, "5", "2", null, this.div_list04);
            obj.set_taborder("82");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list04.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "635", "36", null, "5", "3", null, this.div_list04);
            obj.set_taborder("88");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list04.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "635", "-7", null, "15", "3", null, this.div_list04);
            obj.set_taborder("89");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list04.addChild(obj.name, obj);
            obj = new Button("btn_excelDown01", "absolute", null, "7", "89", "21", "1", null, this.div_list04);
            obj.set_taborder("90");
            obj.set_text("엑셀다운로드");
            obj.set_visible("false");
            this.div_list04.addChild(obj.name, obj);
            obj = new Grid("grd_master", "absolute", "0", "21", null, "221", "0", null, this.div_list04);
            obj.set_taborder("91");
            obj.set_binddataset("ds_dataM04");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"39\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"0\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"상품코드\"/><Cell col=\"2\" text=\"상품명\"/><Cell col=\"3\" text=\"규격\"/><Cell col=\"4\" text=\"단위\"/><Cell col=\"5\" text=\"입수\"/><Cell col=\"6\" text=\"단가\"/><Cell col=\"7\" text=\"수주량\"/><Cell col=\"8\" text=\"BOX수량\"/><Cell col=\"9\" text=\"수주금액\"/><Cell col=\"10\" text=\"부가세액\"/><Cell col=\"11\" text=\"공병금액\"/><Cell col=\"12\" text=\"수주건수\"/><Cell col=\"13\" text=\"차량번호\"/></Band><Band id=\"body\"><Cell text=\"bind:RN\"/><Cell col=\"1\" text=\"bind:NA_WRS_C\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:WRSNM\"/><Cell col=\"3\" text=\"bind:WRS_STDNM\"/><Cell col=\"4\" text=\"bind:NA_WRS_UNT_C\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:BOXPE_AQZ\"/><Cell col=\"6\" displaytype=\"normal\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_PCS\" mask=\"#,##0.99\"/><Cell col=\"7\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_QT\"/><Cell col=\"8\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:BOX_QT\" mask=\"9,999.99\" editlimitbymask=\"both\"/><Cell col=\"9\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_AM\"/><Cell col=\"10\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_VAT\"/><Cell col=\"11\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:VCBT_AM\"/><Cell col=\"12\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_CNT\"/><Cell col=\"12\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_CNT\"/></Band></Format></Formats>");
            this.div_list04.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "631", "210", null, "5", "7", null, this.div_list04);
            obj.set_taborder("94");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list04.addChild(obj.name, obj);
            obj = new Button("btn_excelDown00", "absolute", null, "259", "89", "21", "2", null, this.div_list04);
            obj.set_taborder("95");
            obj.set_text("엑셀다운로드");
            obj.set_visible("false");
            this.div_list04.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "632", "171", null, "15", "6", null, this.div_list04);
            obj.set_taborder("96");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list04.addChild(obj.name, obj);
            obj = new Grid("grd_detail", "absolute", "0", "300", null, null, "0", "41", this.div_list04);
            obj.set_taborder("97");
            obj.set_binddataset("ds_dataD04");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"39\"/><Column size=\"110\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"발주처\"/><Cell col=\"2\" text=\"발주처명\"/><Cell col=\"3\" style=\"align:center;\" text=\"발주처팀\"/><Cell col=\"4\" text=\"발주량\"/><Cell col=\"5\" text=\"BOX수량\"/><Cell col=\"6\" text=\"발주금액\"/><Cell col=\"7\" text=\"부가세액\"/><Cell col=\"8\" text=\"공병금액\"/><Cell col=\"9\" text=\"차량번호\"/></Band><Band id=\"body\"><Cell text=\"bind:RN\"/><Cell col=\"1\" text=\"bind:ODRPL_NA_TRPL_C\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:ODRPL_NA_TRPL_N\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:ODRPL_NA_TEAM_N\"/><Cell col=\"4\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_QT\"/><Cell col=\"5\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:BOXPE_AQZ\" mask=\"9,999.99\" editlimitbymask=\"both\"/><Cell col=\"6\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_AM\"/><Cell col=\"7\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_VAT\"/><Cell col=\"8\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:VCBT_AM\"/><Cell col=\"9\" text=\"bind:VHCNO\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" style=\"align:center;\" text=\"합계\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" displaytype=\"number\" mask=\"#,##0\"/><Cell col=\"5\" displaytype=\"normal\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/></Band></Format></Formats>");
            this.div_list04.addChild(obj.name, obj);
            obj = new Button("Button10", "absolute", "331", "0", null, "12", "330", null, this.div_list04);
            obj.set_taborder("78");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list04.addChild(obj.name, obj);

            obj = new WebBrowser("web_downExcel", "absolute", "643", "21", "44", "14", null, null, this);
            obj.set_taborder("57");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 99, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("30");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 978, 800, this.div_list01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div02");
            		p.set_scrollbars("none");
            		p.set_visible("false");

            	}
            );
            this.div_list01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 978, 800, this.div_list02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("54");
            		p.set_text("Div02");
            		p.set_scrollbars("none");
            		p.set_visible("false");

            	}
            );
            this.div_list02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 978, 800, this.div_list03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("55");
            		p.set_text("Div02");
            		p.set_scrollbars("none");
            		p.set_visible("false");

            	}
            );
            this.div_list03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 978, 800, this.div_list04,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("56");
            		p.set_text("Div02");
            		p.set_scrollbars("none");
            		p.set_visible("false");

            	}
            );
            this.div_list04.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("축산수주내역조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item8","div_search.rdo_search_period","value","ds_dataM","DVY_VHC_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_search.rdo_search_type02","value","ds_dataM","DVY_VHC_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_search.rdo_search_type01","value","ds_dataM","DVY_VHC_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","div_search.rdo_search_type03","value","ds_dataM","DVY_VHC_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","div_search.rdo_search_type04","value","ds_dataM","DVY_VHC_DSC");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
            this._addPreloadList("fdl", "common::location.xfdl");
            this._addPreloadList("fdl", "common::AuthorityWorkplace.xfdl");
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_0140.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0140.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";
        /***************************************************************************************
        	code        : 호출할 공통코드
        	dsName      : 호출된 공통코드를 담을 Dataset
        	selecttype  : ComboBox 최상단에 추가할 문구( A: -전체-, S:-선택-, N: 빈칸)

        	selecttype은 추후 변경될 수 있음.
        	this.fn_commonAfterOnload를 화면에 선언하면 gfn_setCommonCode처리후 호출됨.
        *****************************************************************************************/
        var selectRdoIdx= "3";
        var chkAll = '';
        var rdoArr = ["", this.div_search.rdo_search_type01, this.div_search.rdo_search_type02, this.div_search.rdo_search_type03, this.div_search.rdo_search_type04];
        var divPageFirArr = ["", "div_page01_01", "div_page02_01", "div_page03_01", "div_page04_01"];
        var divPageScdArr = ["", "div_page01_02", "div_page02_02", "div_page03_02", "div_page04_02"];

        var divPageObjFirArr = ["", this.div_list01.div_page01_01, this.div_list02.div_page02_01, this.div_list03.div_page03_01, this.div_list04.div_page04_01];
        var divPageObjScdArr = ["", this.div_list01.div_page01_02, this.div_list02.div_page02_02, this.div_list03.div_page03_02, this.div_list04.div_page04_02];

        var dsFirArr = ["", this.ds_dataM01, this.ds_dataM02, this.ds_dataM03, this.ds_dataM04];
        var dsScdArr = ["", this.ds_dataD01, this.ds_dataD02, this.ds_dataD03, this.ds_dataD04];

        var grdFirArr = ["", this.div_list01.grd_master, this.div_list02.grd_master, this.div_list03.grd_master, this.div_list04.grd_master];
        var grdScdArr = ["", this.div_list01.grd_detail, this.div_list02.grd_detail, this.div_list03.grd_detail, this.div_list04.grd_detail];

        /* form load */
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e);//공통
        	var param = [
         		{code:"PHD_FCLT_C", dsName:"ds_phd_fclt_c", selecttype:"A"}, //물류기능코드
         		{code:"NA_ODR_STS_DSC", dsName:"ds_odr_sts", selecttype:"A"}    //발주상태코드
            ];
        	this.gfn_setCommonCode(param);
        	this.div_search_cbo_wmc_loc_rgn_dsc();
        }

        //공통코드 데이터셋 onload후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        	this.ds_phd_fclt_c.deleteRow(1);
        	this.div_search.cbo_phd_fclt_c.set_index(0);
        	this.div_search.cbo_wmc_loc_rgn_dsc.set_index(0);
        	this.div_search.cbo_na_odr_sts_dsc.set_index(0);
        }

        /* 페이지 로딩후 실행부분 */
        this.fn_afterFormOnload = function()
        {
        	for (var i=1; i < grdFirArr.length; i++) {
        		grdFirArr[i].set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        		grdScdArr[i].set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	}

        	//날짜 SET
        	//this.div_search.cal_from.set_value(this.gfn_today("yyyyMMdd"));
        	//this.div_search.cal_to.set_value(this.gfn_today("yyyyMMdd"));
        	this.div_search.cal_from.set_value(this.gfn_minusDate(this.gfn_today("yyyyMMdd"), 3));
        	this.div_search.cal_to.set_value(this.gfn_today("yyyyMMdd"));
        	this.fn_searchType_view(selectRdoIdx);
        	this.div_search.cbo_ht_lov_rgn_c.set_enable(false);

        	var param1 = {
        		form: this, 
        		m_grd: this.div_list01.grd_master, 
        		m_pageDiv: this.div_list01.div_page01_01, 
        		m_afterFnc: this.grd_afterFnc1, 
        		d_grd: this.div_list01.grd_detail, 
        		d_pageDiv: this.div_list01.div_page01_02, 
        		d_afterFnc: this.grd_afterFnc2
        	};
        	var param2 = {
        		form: this, 
        		m_grd: this.div_list02.grd_master, 
        		m_pageDiv: this.div_list02.div_page02_01, 
        		m_afterFnc: this.grd_afterFnc1, 
        		d_grd: this.div_list02.grd_detail, 
        		d_pageDiv: this.div_list02.div_page02_02, 
        		d_afterFnc: this.grd_afterFnc2
        	};

        	var param3 = {
        		form: this, 
        		m_grd: this.div_list03.grd_master, 
        		m_pageDiv: this.div_list03.div_page03_01, 
        		m_afterFnc: this.grd_afterFnc1, 
        		d_grd: this.div_list03.grd_detail, 
        		d_pageDiv: this.div_list03.div_page03_02, 
        		d_afterFnc: this.grd_afterFnc2
        	};
        	var param4 = {
        		form: this, 
        		m_grd: this.div_list04.grd_master, 
        		m_pageDiv: this.div_list04.div_page04_01, 
        		m_afterFnc: this.grd_afterFnc1, 
        		d_grd: this.div_list04.grd_detail, 
        		d_pageDiv: this.div_list04.div_page04_02, 
        		d_afterFnc: this.grd_afterFnc2
        	};

        	param1.m_pageDiv.addPageEvent(param1);
        	param2.m_pageDiv.addPageEvent(param2);
        	param3.m_pageDiv.addPageEvent(param3);
        	param4.m_pageDiv.addPageEvent(param4);
        }

        /* User Function*/
        this.fn_searchType_view = function(idx)
        {
        	this.clearPageInfo();
        	this.fn_dsPageInit();//page data set 초기화
        	for (var i = 1; i < rdoArr.length; i++) {
        		if (this.gfn_nullToEmpty(rdoArr[i].value) == this.gfn_nullToEmpty(idx)) {
        			this.fn_initGrid(i);//그리드 초기화
        			if (i == 4) {
        				this.div_search.edt_na_wrs_c.set_visible(true);
        				this.div_search.edt_wrsnm.set_visible(true);
        				this.div_search.btn_popup.set_visible(true);
        			} else {
        				this.div_search.edt_na_wrs_c.set_value('');
        				this.div_search.edt_wrsnm.set_value('');
        				this.div_search.edt_na_wrs_c.set_visible(false);
        				this.div_search.edt_wrsnm.set_visible(false);
        				this.div_search.btn_popup.set_visible(false);
        			}
        			this.fn_initPage(i, true);
        		} else {
        			rdoArr[i].set_index(-1);
        			this.fn_initPage(i, false);
        		}
        	}
        	if (idx == "2") {
        		this.div_search.edt_splr_trpl_c.set_visible(true);
        		this.div_search.edt_splr_trpl_nm.set_visible(true);
        		this.div_search.btn_popup01.set_visible(true);
        		this.div_search.edt_splr_team_c.set_visible(true);
        		this.div_search.edt_splr_team_nm.set_visible(true);

        		this.div_search.rdo_search_period.set_readonly(false);
        		this.div_search.rdo_search_period.set_readonly(false);
        		this.div_search.cal_from.set_readonly(false);
        		this.div_search.cal_to.set_readonly(false);
        	} else {
        		if (idx=="4") {
        			this.div_search.rdo_search_period.set_readonly(true);
        			this.div_search.cal_from.set_readonly(true);
        			this.div_search.cal_to.set_readonly(true);
        		} else {
        			this.div_search.rdo_search_period.set_readonly(false);
        			this.div_search.cal_from.set_readonly(false);
        			this.div_search.cal_to.set_readonly(false);
        		}
        		this.div_search.edt_splr_trpl_c.set_visible(false);
        		this.div_search.edt_splr_trpl_nm.set_visible(false);
        		this.div_search.btn_popup01.set_visible(false);
        		this.div_search.edt_splr_team_c.set_visible(false);
        		this.div_search.edt_splr_team_nm.set_visible(false);

        	}
        	this.div_search.cdo_r2_ddly_yn.set_value("0");
        	this.div_search.cdo_r2_ddly_yn.set_visible(idx == "3");
        	this.div_search.sta_ddly_yn.set_visible(idx == "3");

        	selectRdoIdx = this.gfn_nullToEmpty(idx);
        	this.fn_divListView(selectRdoIdx);
        }

        /* Event 조회구분에 따른 화면 변경 */
        this.div_search_rdo_search_type_onitemchanged = function(obj,e)
        {
        	this.fn_searchType_view(obj.value);
        }

        this.fn_divListView  = function(idx) {

        	//var divArray = new Array("", 'div_list01', 'div_list02', 'div_list03', 'div_list04');
        	var divArray = [this.div_list01, this.div_list02, this.div_list03, this.div_list04];
        	for (var i = 0; i < divArray.length; i++) {
        		if (idx == i+1) {
        			//eval("this."+divArray[i]+".set_visible(true)");
        			//eval("this."+divArray[i]+".set_top(127)");
        			//eval("this."+divArray[i]+".set_bottom(0)");
        			divArray[i].set_visible(true);
        			divArray[i].set_top(127);
        			divArray[i].set_bottom(0);
        		} else {
        			//eval("this."+divArray[i]+".set_visible(false)");
        			divArray[i].set_visible(false);
        		}
        	}
        }

        //지역코드
        this.div_search_cbo_wmc_loc_rgn_dsc = function()
        {
        	var sSvcID        = "retrieveRgnCM";//통신아이디
        	var sURL          = "svc::/rest/common/getRgnCode";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_rgn_c00=ds_rgn_c00";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = "";// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        //상세지역코드
        this.div_search_cbo_wmc_loc_rgn_dsc_onitemchanged = function(obj,e)
        {

        	var wmc_loc_rgn_dsc = this.div_search.cbo_wmc_loc_rgn_dsc.value;

        	var params = " simpC="+wmc_loc_rgn_dsc;

        	var sSvcID        = "retrieveRgnC";//통신아이디
        	var sURL          = "svc::/rest/common/getRgnCodeD";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_rgn_c01=ds_rgn_c01";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        	this.div_search.cbo_ht_lov_rgn_c.set_enable(true);
        }

        
        //엑셀
        this.btn_excel_onclick = function(obj,e)
        {
        	//권한사업장 표시 여부(1:본사)
        	/**
        	if (application.gv_mbcoType == '5') {
        		alert('위탁대리점은 배송예정서위탁등록 메뉴를 이용해주십시오.');
        		return;
        	}
        	**/
        	this.div_search.rdo_search_type04.set_enable(true);
        	if (this.fn_validationChk()) {
        		this.fn_excel(selectRdoIdx);
        	}
        }

        this.fn_excel = function(flag)
        {
        	if (flag == "1") {
        		var fileName = this.getExcelFileName("수주현황조회_일자별");
        		var params = this.searchParamSet("get") + "&fileName="+fileName;
        		//trace("Master 엑셀 다운로드 params >>> " + params);
        		//this.web_downExcel.set_url(application.gv_server_url+"rest/excel/scm/order/downloadExcelDaily?"+params);
        		excelDownHandler(application.gv_server_url+"rest/excel/scm/order/downloadExcelDaily?"+params, this);
        	} else if (flag == "2") {
        		var fileName = this.getExcelFileName("수주현황조회_발주처별");
        		var params = this.searchParamSet("get") + "&fileName="+fileName;
        		//trace("Master 엑셀 다운로드 params >>> " + params);
        		//this.web_downExcel.set_url(application.gv_server_url+"rest/excel/scm/order/downloadExcelOdrpl?"+params);
        		excelDownHandler(application.gv_server_url+"rest/excel/scm/order/downloadExcelOdrpl?"+params, this);
        	} else if (flag == "3") {
        		var fileName = this.getExcelFileName("수주현황조회_소속사업장별");
        		var params = this.searchParamSet("get") + "&fileName="+fileName;
        		//trace("Master 엑셀 다운로드 params >>> " + params);
        		//this.web_downExcel.set_url(application.gv_server_url+"rest/excel/scm/order/downloadExcelRvopl?"+params);
        		excelDownHandler(application.gv_server_url+"rest/excel/scm/order/downloadExcelRvopl?"+params, this);
        	} else {
        		var fileName = this.getExcelFileName("수주현황조회_상품별");
        		var params = this.searchParamSet("get") + "&fileName="+fileName;
        		//trace("Master 엑셀 다운로드 params >>> " + params);
        		//this.web_downExcel.set_url(application.gv_server_url+"rest/excel/scm/order/downloadExcelWrs?"+params);
        		excelDownHandler(application.gv_server_url+"rest/excel/scm/order/downloadExcelWrs?"+params, this);
        	}
        }

        //출력
        this.btn_print_onclick = function(obj,e)
        {
        	//권한사업장 표시 여부(1:본사)
        	/**
        	if (application.gv_mbcoType == '5') {
        		alert('위탁대리점은 배송예정서위탁등록 메뉴를 이용해주십시오.');
        		return;
        	}
        	**/
        	this.div_search.rdo_search_type04.set_enable(true);
        	if (this.fn_validationChk()) {
        		this.fn_print(selectRdoIdx);
        	}
        }

        this.fn_print = function(flag) {
        	var params = this.searchParamSet("print");
        	var searchText = "";
        	var url = "";
        	var name = "";
        	var sId = "";

        	if (flag == "1") {
        		sId = 'VAN_DS_SC_0110_1';
        		searchText = "사업장:["+application.gv_glnCode+"] "+application.gv_companyName+
        					 ", 조회구분:일자별"+
        					 ", 조회기간:"+this.div_search.cal_from.value+" - "+this.div_search.cal_to.value;

        		url="/rest/oz/scm/order/printDaily";
        		name="수주내역조회(일자별)";
        		params.TRPL_C_TEXT=searchText;
        		//trace(params.TRPL_C_TEXT);

        	} else if (flag == "2") {
        		sId = 'VAN_DS_SC_0110_2';
        		searchText = "사업장:["+application.gv_glnCode+"] "+application.gv_companyName+
        					 ", 조회구분:발주처별"+
        					 ", 조회기간:"+this.div_search.cal_from.value+" - "+this.div_search.cal_to.value+
        					 ", 발주처코드:"+this.gfn_nullToEmpty(this.div_search.edt_splr_trpl_c.value);

        		url="/rest/oz/scm/order/printOdrpl";
        		name="수주내역조회(발주처별)";
        		params.TRPL_C_TEXT=searchText;
        		//trace(params.TRPL_C_TEXT);

        	} else if (flag == "3") {
        		sId = 'VAN_DS_SC_0140_3';
        		searchText = "사업장:["+application.gv_glnCode+"] "+application.gv_companyName+
        					 ", 조회구분:소속사업장별"+
        					 ", 조회기간:"+this.div_search.cal_from.value+" - "+this.div_search.cal_to.value;

        		url="/rest/oz/scm/order/printRvoplOgn";
        		name="수주내역조회(소속사업장별)";
        		params.TRPL_C_TEXT=searchText;
        		//trace(params.TRPL_C_TEXT);

        	} else {
        		sId = 'VAN_DS_SC_0110_4';
        		searchText = "사업장:["+application.gv_glnCode+"] "+application.gv_companyName+
        					 ", 조회구분:상품별"+
        					 ", 조회기간:"+this.div_search.cal_from.value+" - "+this.div_search.cal_to.value;

        		url="/rest/oz/scm/order/printWrs";
        		name="수주내역조회(상품별)";
        		params.TRPL_C_TEXT=searchText;
        		//trace(params.TRPL_C_TEXT);
        	}

        	var ozParam = {
        		sId: sId, 
        		sUrl: url, 
        		paramType: 'param', 
        		sName:name, 
        		sParam: params
        	};
        	this.ozViewer(ozParam);
        }

        this.fn_validationChk = function() {
        	if (selectRdoIdx == "") {
        		alert('조회구분을 선택해 주세요');
        		return false;
        	}

        	/*
        	else {
        		if (selectRdoIdx == "4") {
        			var na_wrs_c = this.gfn_nullToEmpty(this.div_search.edt_na_wrs_c.value);
        			var wrsnm = this.gfn_nullToEmpty(this.div_search.edt_wrsnm.value);
        			if (na_wrs_c == "") {
        				alert("상품을 선택해 주세요");
        				return false;
        			}
        		}
        	}
        	*/

        	var cal_from  	= this.gfn_nullToEmpty(this.div_search.cal_from.value);
        	var cal_to  	= this.gfn_nullToEmpty(this.div_search.cal_to.value);

        	if (cal_from == "" || cal_to == "") {
        		alert("조회기간을 선택해 주세요");
        		return false;
        	}

        	if ((cal_to - cal_from) <= -1) {
        		alert("조회기간을 확인해 주세요");
        		return false;
        	}

        	return true;
        }

        //조회
        this.btn_search_onclick = function(obj,e)
        {
        	//권한사업장 표시 여부(1:본사)
        	/**
        	if (application.gv_mbcoType == '5') {
        		alert('위탁대리점은 배송예정서위탁등록 메뉴를 이용해주십시오.');
        		return;
        	}
        	**/
        	if (this.fn_validationChk()) {
        		this.fn_paging(1, divPageFirArr[selectRdoIdx]);// 처음조회시 1페이지를 조회한다.
        		divPageObjScdArr[selectRdoIdx].set_visible(false);
        	}
        }

        //grid init
        this.fn_initGrid = function(idx)
        {
        	dsFirArr[idx].clearData();
        	dsScdArr[idx].clearData();

        	this.setClearSum();

        	//eval("this.ds_dataM0"+idx+".clearData()");
        	//eval("this.ds_dataD0"+idx+".clearData()");

        	//eval('this.div_list0'+idx+'.grd_master.set_nodatatext("데이터가 없습니다.");');
        	//eval('this.div_list0'+idx+'.grd_detail.set_nodatatext("데이터가 없습니다.");');
        }

        //ds_page init
        this.fn_dsPageInit = function()
        {
        	this.ds_pageVO01.clearData();
        	this.ds_pageVO02.clearData();

        	this.ds_pageVO01.addRow();
        	this.ds_pageVO02.addRow();
        	//lsh
        	var vPageNum = 1;
        	var vPageSize   = 5; 	//Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
        	var vTotalCount = 0; 	//전체건수. 화면조회후 리턴받아 사용

         	this.ds_pageVO01.setColumn(0, "CURRENT_PAGE", vPageNum); //현재 페이지
         	this.ds_pageVO01.setColumn(0, "PAGE_SIZE", vPageSize);
         	this.ds_pageVO01.setColumn(0, "TOTAL_ROW_COUNT", vTotalCount);

         	this.ds_pageVO02.setColumn(0, "CURRENT_PAGE", vPageNum); //현재 페이지
         	this.ds_pageVO02.setColumn(0, "PAGE_SIZE", vPageSize);
         	this.ds_pageVO02.setColumn(0, "TOTAL_ROW_COUNT", vTotalCount);
        }

        //page init
        this.fn_initPage = function(idx,visibleFlag)
        {
        	if (!visibleFlag) {
        		//divPageObjFirArr[idx].set_url("");
        		//divPageObjScdArr[idx].set_url("");
        	} else {
        		//divPageObjFirArr[idx].set_url("common::pagingBTN.xfdl");
        		//divPageObjScdArr[idx].set_url("common::pagingBTN.xfdl");
        		divPageObjFirArr[idx].set_visible(false);
        		divPageObjScdArr[idx].set_visible(false);
        	}
        }

        //user function
        this.fn_searchFir = function()
        {
        	this.fn_initGrid(selectRdoIdx);//Grid Init

        	var params = this.searchParamSet();
        	var outDataSets = " ds_pageVO01=ds_pageVO01 ";
        	switch(selectRdoIdx) {
        		case "1" :
        					outDataSets = outDataSets + "ds_dataM01=ds_dataM01";
        					break;
        		case "2" :
        					outDataSets = outDataSets + "ds_dataM02=ds_dataM02";
        					break;
        		case "3" :
        					outDataSets = outDataSets + "ds_dataM03=ds_dataM03";
        					break;
        		case "4" :
        					outDataSets = outDataSets + "ds_dataM04=ds_dataM04";
        					break;
        		default :
        					alert("조회구분을 선택해 주세요");
        					return false;
        					break;
        	}

        	var sSvcID        = "retrieveOrderFst";//통신아이디
        	var sURL          = "svc::/rest/scm/order/retrieveOrderFst";// 호출할 서버 페이지 주소
        	var sInDatasets   = "ds_pageVO01=ds_pageVO01";//보내는데이터셋
        	var sOutDatasets  = outDataSets;	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID == "retrieveRgnCM") {
        			if (this.ds_rgn_c00.insertRow(0) != -1) {
        				this.ds_rgn_c00.setColumn(0, "SIMP_C", "");
        				this.ds_rgn_c00.setColumn(0, "SIMP_CNM", "- 전체 -");
        			};
        			this.div_search.cbo_wmc_loc_rgn_dsc.set_index(0);
        		}

        		if (svcID == "retrieveRgnC") {
        			if (this.ds_rgn_c01.insertRow(0) != -1) {
        				this.ds_rgn_c01.setColumn(0, "SIMP_C", "");
        				this.ds_rgn_c01.setColumn(0, "SIMP_CNM", "- 전체 -");
        			};
        			this.div_search.cbo_ht_lov_rgn_c.set_index(0);
        		}

        		//Fisrt List
        		if (svcID == "retrieveOrderFst") {
        			var grdId = grdFirArr[selectRdoIdx];
        			if (dsFirArr[selectRdoIdx].rowcount > 0) {
        				var sTotal    = this.ds_pageVO01.getColumn(0, "TOTAL_ROW_COUNT");
        				var sPagesize = this.ds_pageVO01.getColumn(0, "PAGE_SIZE");
        				divPageObjFirArr[selectRdoIdx].fn_pageSet(sTotal, sPagesize, grdId.id+', '+divPageFirArr[selectRdoIdx], lsNowPage);
        			} else {
        				divPageObjFirArr[selectRdoIdx].fn_pageSet(sTotal, sPagesize, grdId.id+', '+divPageFirArr[selectRdoIdx], lsNowPage);
        			}
        		}

        		//Second List
        		if (svcID == "retrieveOrderScd") {
        			var grdId = grdScdArr[selectRdoIdx];

        			//var sTotal    = this.ds_pageVO02.getColumn(0, "TOTAL_ROW_COUNT");
        			//var sPagesize = this.ds_pageVO02.getColumn(0, "PAGE_SIZE");

        			var sTotal    = this.ds_pageVO02.getColumn(0, "TOTAL_ROW_COUNT");
        			var sPagesize = this.ds_pageVO02.getColumn(0, "PAGE_SIZE");

        			if (dsScdArr[selectRdoIdx].rowcount > 0) {
        				divPageObjScdArr[selectRdoIdx].fn_pageSetText(sTotal, sPagesize, grdId.id+', '+divPageScdArr[selectRdoIdx], lsNowPage);
        				//this.div_list.div_page.fn_pageSet(sTotal, sPagesize, "div_page", lsNowPage);
        				this.setSumData();
        			} else {
        				divPageObjScdArr[selectRdoIdx].fn_pageSetText(sTotal, sPagesize, grdId.id+', '+divPageScdArr[selectRdoIdx], lsNowPage);
        			}
        		}
        	}
        }

        /*-----------------------------------------------------------------------------------------*/
        // 페이징처리
        /*-----------------------------------------------------------------------------------------*/
        this.fn_paging = function(vPageNum,objDivNm)
        {
        	var oDs, oBindDs;
        	var searchLevel;
        	if (this.gfn_isNull(objDivNm)) {
        		objDivNm = "div_page";
        	}

        	if (objDivNm == "div_page01_01" || objDivNm == "div_page02_01" || objDivNm == "div_page03_01" || objDivNm == "div_page04_01") {
        		oDs     = this.ds_pageVO01;
        		oBindDs = dsFirArr[selectRdoIdx];
        		searchLevel = "F";//첫번째 그리드
        	} else {
        		oDs     = this.ds_pageVO02;
        		oBindDs = dsScdArr[selectRdoIdx];
        		searchLevel = "S";//두번째 그리드
        	}

        	oDs.clearData();
        	oBindDs.clearData(); //Grid에 Binding된 Dataset명
        	oDs.addRow();
        	
        	//lsh
        	var vPageSize   = 5; 	//Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
        	var vTotalCount = 0; 	//전체건수. 화면조회후 리턴받아 사용

         	oDs.setColumn(0, "CURRENT_PAGE", vPageNum); //현재 페이지
         	oDs.setColumn(0, "PAGE_SIZE", vPageSize);
         	oDs.setColumn(0, "TOTAL_ROW_COUNT", vTotalCount);

        	var argumentObj = "";

        	lsNowPage = vPageNum;//현재페이지 설정

        	if (searchLevel == "F") {
        		var grdId = grdFirArr[selectRdoIdx];
        		divPageObjFirArr[selectRdoIdx].fn_pageSet(vTotalCount, vPageSize, grdId.id+', '+objDivNm, lsNowPage);
        		this.fn_searchFir();
        	} else {
        		var grdId = grdScdArr[selectRdoIdx];
        		divPageObjScdArr[selectRdoIdx].fn_pageSet(vTotalCount, vPageSize, grdId.id+', '+objDivNm, lsNowPage);
        		this.fn_searchScd();
        	}
        }

        /* user function */
        this.searchParamSet = function(flag)
        {
        	//권한 사업장 코드
        	var trplC 				= this.getTrplCode();
        	var search_type 	= selectRdoIdx;
        	var na_wrs_c 		= this.gfn_nullToEmpty(this.div_search.edt_na_wrs_c.value);
        	var search_period 	= this.gfn_nullToEmpty(this.div_search.rdo_search_period.value);
        	var cal_from 		= this.gfn_nullToEmpty(this.div_search.cal_from.value);
        	var cal_to 			= this.gfn_nullToEmpty(this.div_search.cal_to.value);
        	var phd_fclt_c 		= this.gfn_nullToEmpty(this.div_search.cbo_phd_fclt_c.value);
        	var wmc_loc_rgn_dsc = this.gfn_nullToEmpty(this.div_search.cbo_wmc_loc_rgn_dsc.value);
        	var ht_lov_rgn_c		= this.gfn_nullToEmpty(this.div_search.cbo_ht_lov_rgn_c.value);
        	var na_odr_sts_dsc	= this.gfn_nullToEmpty(this.div_search.cbo_na_odr_sts_dsc.value);
        	var splr_trpl_c		= this.gfn_nullToEmpty(this.div_search.edt_splr_trpl_c.value);
        	var splr_team_c		= this.gfn_nullToEmpty(this.div_search.edt_splr_team_c.value);
        	var r2_ddly_yn		= this.gfn_nullToEmpty(this.div_search.cdo_r2_ddly_yn.value); // 20210712, 축산 R2직송용(DDLY_YN과 다름)

        	if (wmc_loc_rgn_dsc == 'all') {
        		wmc_loc_rgn_dsc = '';
        	}

        	if (ht_lov_rgn_c == 'all') {
        		ht_lov_rgn_c = '';
        	}

        	if (na_odr_sts_dsc == 'all') {
        		na_odr_sts_dsc = '';
        	}

        	if (flag == "get") { //엑셀 다운로드 인 경우
        		return params = "search_type=" + search_type
        				+ 	"&na_wrs_c=" + na_wrs_c
        				+ 	"&search_period=" + search_period
        				+	"&cal_from=" + cal_from
        				+	"&cal_to=" + cal_to
        				+	"&phd_fclt_c=" + phd_fclt_c
        				+	"&wmc_loc_rgn_dsc=" + wmc_loc_rgn_dsc
        				+	"&ht_lov_rgn_c=" + ht_lov_rgn_c
        				+	"&na_odr_sts_dsc=" + na_odr_sts_dsc
        				+	"&splr_trpl_c=" + splr_trpl_c
        				+	"&splr_team_c=" + splr_team_c
        				+	"&r2_ddly_yn=" + r2_ddly_yn
        				+	"&trplC=" + trplC;
        	} else if (flag == "print") { //출력
        		return params = {
        				TRPL_C_TEXT:"", 
        				searchType:search_type, 
        				naWrsC:na_wrs_c, 
        				searchPeriod:search_period, 
        				calFrom:cal_from, 
        				calTo:cal_to, 
        				phdFcltC:phd_fclt_c, 
        				wmcLocRgnDsc:wmc_loc_rgn_dsc, 
        				htLovRgnC:ht_lov_rgn_c, 
        				naOdrStsDsc:na_odr_sts_dsc, 
        				splrTrplC:splr_trpl_c, 
        				splrTeamC:splr_team_c, 
        				r2_ddly_yn:r2_ddly_yn,
        				trplC:trplC
        			}
        	} else {
        		return params = " search_type=" + search_type
        				+ 	" na_wrs_c=" + na_wrs_c
        				+ 	" search_period=" + search_period
        				+	" cal_from=" + cal_from
        				+	" cal_to=" + cal_to
        				+	" phd_fclt_c=" + phd_fclt_c
        				+	" wmc_loc_rgn_dsc=" + wmc_loc_rgn_dsc
        				+	" ht_lov_rgn_c=" + ht_lov_rgn_c
        				+	" na_odr_sts_dsc=" + na_odr_sts_dsc
        				+	" chkAll=" + chkAll
        				+	" splr_trpl_c=" + splr_trpl_c
        				+	" splr_team_c=" + splr_team_c
        				+	" r2_ddly_yn=" + r2_ddly_yn
        				+	" trplC=" + trplC;
        	}
        }

        //user function
        this.fn_searchScd = function()
        {
        	var grd = grdScdArr[selectRdoIdx];

        	if (selectRdoIdx == 3 || selectRdoIdx ==4) {//합계초기화
        		this.setClearSum();
        	}

        	if (selectRdoIdx == "4") {//합계초기화
        		//trace("초기화 : " + this.ds_dataD04_total.saveXML());
        		//this.ds_dataD04_total.clearData();
        	}

        	var params = this.searchParamSet();//search option
        	var outDataSet = "ds_dataD0"+selectRdoIdx+"=ds_dataD0"+selectRdoIdx+" ds_pageVO02=ds_pageVO02";

        	if (selectRdoIdx == 1) {
        		params = params + " odr_dt=" + this.ds_dataM01.getColumn(this.ds_dataM01.rowposition, "ODR_DT");
        	} else if (selectRdoIdx == 2) {
        		params = params + " odrpl_na_trpl_c=" + this.gfn_nullToEmpty(this.ds_dataM02.getColumn(this.ds_dataM02.rowposition, "ODRPL_NA_TRPL_C"))
        						+ " odrpl_na_team_c=" + this.gfn_nullToEmpty(this.ds_dataM02.getColumn(this.ds_dataM02.rowposition, "ODRPL_NA_TEAM_C"))
        						+ " spypl_na_trpl_c=" + this.gfn_nullToEmpty(this.ds_dataM02.getColumn(this.ds_dataM02.rowposition, "SPYPL_NA_TRPL_C"))
        						+ " spypl_na_team_c=" + this.gfn_nullToEmpty(this.ds_dataM02.getColumn(this.ds_dataM02.rowposition, "SPYPL_NA_TEAM_C"));
        	} else if (selectRdoIdx == 3) {
        		params = params + " rvopl_na_trpl_c=" + this.gfn_nullToEmpty(this.ds_dataM03.getColumn(this.ds_dataM03.rowposition, "RVOPL_NA_TRPL_C"))
        						+ " spypl_na_trpl_c=" + this.gfn_nullToEmpty(this.ds_dataM03.getColumn(this.ds_dataM03.rowposition, "SPYPL_NA_TRPL_C"))
        						+ " vhcno=" + this.gfn_nullToEmpty(this.ds_dataM03.getColumn(this.ds_dataM03.rowposition, "VHCNO"));
        	} else {
        		params = params + " vhcno=" 	+ this.gfn_nullToEmpty(this.ds_dataM04.getColumn(this.ds_dataM04.rowposition, "VHCNO"))
        						+ " odr_pcs=" 	+ this.gfn_nullToEmpty(this.ds_dataM04.getColumn(this.ds_dataM04.rowposition, "ODR_PCS"))
        						+ " na_wrs_c=" 	+ this.gfn_nullToEmpty(this.ds_dataM04.getColumn(this.ds_dataM04.rowposition, "NA_WRS_C"));
        	}

        	if (selectRdoIdx == 3) {
        		outDataSet = outDataSet + " ds_dataD03_total=ds_dataD03_total";
        	}

        	if (selectRdoIdx == 4) {
        		outDataSet = outDataSet + " ds_dataD04_total=ds_dataD04_total";
        	}

        	//trace("SCD Search Params : " + params);
        	//trace("outDataSet : " + outDataSet);

        	var sSvcID        = "retrieveOrderScd";//통신아이디
        	var sURL          = "svc::/rest/scm/order/retrieveOrderScd";// 호출할 서버 페이지 주소
        	var sInDatasets   = "ds_pageVO02=ds_pageVO02";//보내는데이터셋
        	var sOutDatasets  = outDataSet;
        	//var sOutDatasets  = "ds_dataD0"+selectRdoIdx+"=ds_dataD0"+selectRdoIdx+" ds_pageVO02=ds_pageVO02";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        //event
        this.grd_afterFnc1 = function(obj,e)
        {
        	this.fn_paging(1, divPageScdArr[selectRdoIdx]);// 처음조회시 1페이지를 조회한다.
        }

        this.fn_billingMarkUpOrder = function(ODRPL_NA_TRPL_C,ODRPL_NA_TEAM_C,ODR_DT,ODR_SLPNO)
        {
        	var params =   "ODRPL_NA_TRPL_C=" + ODRPL_NA_TRPL_C
        				 + " ODRPL_NA_TEAM_C=" + ODRPL_NA_TEAM_C
        				 + " ODR_DT=" + ODR_DT
        				 + " ODR_SLPNO=" + ODR_SLPNO;

        	//trace("params : " + params);
        	var sSvcID        = "";//통신아이디
        	var sURL          = "svc::/rest/scm/order/billingMarkUpOrder";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        //event
        this.grd_afterFnc2 = function(obj,e)
        {
        	if (e.eventid=="oncellclick" && obj.binddataset=="ds_dataD03" && this.gfn_nullToEmpty(this.ds_dataD03.getColumn(e.row, "DEL_TEM")) != '')  {
        		//this.ds_coupon.getColumn(e.row, "CPN_KDC");
        		//trace("DS03 "+this.ds_dataD03.getColumn(e.row, "DEL_TEM"));
        		this.alert("삭제된 수주내역입니다.");
        		return;
        	}

        	if (e.eventid=="oncellclick" && obj.binddataset=="ds_dataD01" && this.gfn_nullToEmpty(this.ds_dataD01.getColumn(e.row, "DEL_DTM")) != '')  {
        		//trace("DS01 "+this.ds_dataD01.getColumn(e.row, "DEL_DTM"));
        		this.alert("삭제된 수주내역입니다.");
        		return;
        	}

        	if (e.eventid=="oncellclick" && obj.binddataset=="ds_dataD02" && this.gfn_nullToEmpty(this.ds_dataD02.getColumn(e.row, "DEL_DTM")) != '')  {
        		//trace("DS02 "+this.ds_dataD02.getColumn(e.row, "DEL_DTM"));
        		this.alert("삭제된 수주내역입니다.");
        		return;
        	}

        	if (e.eventid=="oncellclick" && obj.binddataset=="ds_dataD03" && e.cell == 11 && (obj.getCellValue(e.row, e.cell) == '미작성')) {
        		application.trplO 		= this.ds_dataD03.getColumn(this.ds_dataD03.rowposition, "ODRPL_NA_TRPL_C");
        		application.teamO 		= this.ds_dataD03.getColumn(this.ds_dataD03.rowposition, "ODRPL_NA_TEAM_C");
        		application.odrDt 		= this.ds_dataD03.getColumn(this.ds_dataD03.rowposition, "ODR_DT");
        		application.odrSlpno 	= this.ds_dataD03.getColumn(this.ds_dataD03.rowposition, "ODR_SLPNO");
        		application.trplS 		= this.ds_dataD03.getColumn(this.ds_dataD03.rowposition, "SPYPL_NA_TRPL_C");
        		application.isPath 		= true;
        		this.fn_billingMarkUpOrder(application.trplO, application.teamO, application.odrDt, application.odrSlpno);

        		if (this.ds_dataD03.getColumn(e.row, "DDLY_YN") == "1") {
        			this.gfn_moveMenuId("01003002", "", "");//직송이동
        		} else if (application.trplO == "8808983322353" || application.trplO == "8808983324562" || application.trplO == "8808983325958" || application.trplO == "8808983326375" || application.trplO == "8808983332277") {
        			this.gfn_moveMenuId("01003003");//신선이동
        		} else if (application.trplO == "8808983410159") {
        			this.gfn_moveMenuId("01003011");//축산이동
        		} else if (application.trplO == "8808983410142" || application.trplO == '8808983324388' || application.trplO == '8808983326641' || application.trplO == '8808983326634') {
        			this.gfn_moveMenuId("01003012");//수산이동
        		} else {
        			this.gfn_moveMenuId("01003001");//일반이동
        		}
        		return;
        	}

        	var divListArr = ["", this.div_list01, this.div_list02, this.div_list03, this.div_list04];
        /*
        	if (e.reason == 51)
        	{
        		divListArr[selectRdoIdx].grd_detail.set_useselcolor(false);
        		dsScdArr[selectRdoIdx].set_enableevent(false);
        		dsScdArr[selectRdoIdx].set_rowposition(-1);
        		dsScdArr[selectRdoIdx].set_enableevent(true);
        		return;
        	}
        */
        	divListArr[selectRdoIdx].grd_detail.set_useselcolor(true);

        	if (selectRdoIdx == "1") {
        		var odrpl_na_trpl_c 	= this.gfn_nullToEmpty(dsScdArr[selectRdoIdx].getColumn(this.ds_dataD01.rowposition, "ODRPL_NA_TRPL_C"));
        		var odrpl_na_team_c 	= this.gfn_nullToEmpty(dsScdArr[selectRdoIdx].getColumn(this.ds_dataD01.rowposition, "ODRPL_NA_TEAM_C"));
        		var odr_dt 				= this.gfn_nullToEmpty(dsScdArr[selectRdoIdx].getColumn(this.ds_dataD01.rowposition, "ODR_DT"));
        		var odr_slpno 			= this.gfn_nullToEmpty(dsScdArr[selectRdoIdx].getColumn(this.ds_dataD01.rowposition, "ODR_SLPNO"));

        		var oArg = {odrpl_na_trpl_c:odrpl_na_trpl_c, odrpl_na_team_c:odrpl_na_team_c, odr_dt:odr_dt, odr_slpno:odr_slpno};
        		var sOption = "autosize=true";
        		var sPopupCallBack = "fn_popupAfter";
        		this.gfn_openPopup("dailyPopup", "SCM.ORDER::VAN_DS_SC_0110_P01.xfdl", oArg, sOption, sPopupCallBack);
        	} else if (selectRdoIdx == "2") {
        		var odrpl_na_trpl_c 	= this.gfn_nullToEmpty(dsScdArr[selectRdoIdx].getColumn(this.ds_dataD02.rowposition, "ODRPL_NA_TRPL_C"));
        		var odrpl_na_team_c 	= this.gfn_nullToEmpty(dsScdArr[selectRdoIdx].getColumn(this.ds_dataD02.rowposition, "ODRPL_NA_TEAM_C"));
        		var odr_dt 				= this.gfn_nullToEmpty(dsScdArr[selectRdoIdx].getColumn(this.ds_dataD02.rowposition, "ODR_DT"));
        		var odr_slpno 			= this.gfn_nullToEmpty(dsScdArr[selectRdoIdx].getColumn(this.ds_dataD02.rowposition, "ODR_SLPNO"));

        		var oArg = {odrpl_na_trpl_c:odrpl_na_trpl_c, odrpl_na_team_c:odrpl_na_team_c, odr_dt:odr_dt, odr_slpno:odr_slpno};
        		var sOption = "autosize=true";
        		var sPopupCallBack = "fn_popupAfter";
        		this.gfn_openPopup("odrplPopup", "SCM.ORDER::VAN_DS_SC_0110_P02.xfdl", oArg, sOption, sPopupCallBack);
        	} else if (selectRdoIdx == "3") {
        		var odrpl_na_trpl_c 	= this.gfn_nullToEmpty(dsScdArr[selectRdoIdx].getColumn(this.ds_dataD03.rowposition, "ODRPL_NA_TRPL_C"));
        		var odrpl_na_team_c 	= this.gfn_nullToEmpty(dsScdArr[selectRdoIdx].getColumn(this.ds_dataD03.rowposition, "ODRPL_NA_TEAM_C"));
        		var odr_dt 				= this.gfn_nullToEmpty(dsScdArr[selectRdoIdx].getColumn(this.ds_dataD03.rowposition, "ODR_DT"));
        		var odr_slpno 			= this.gfn_nullToEmpty(dsScdArr[selectRdoIdx].getColumn(this.ds_dataD03.rowposition, "ODR_SLPNO"));

        		var oArg = {odrpl_na_trpl_c:odrpl_na_trpl_c, odrpl_na_team_c:odrpl_na_team_c, odr_dt:odr_dt, odr_slpno:odr_slpno};
        		var sOption = "autosize=true";
        		var sPopupCallBack = "fn_popupAfter";
        		this.gfn_openPopup("rvoplPopup", "SCM.ORDER::VAN_DS_SC_0140_P03.xfdl", oArg, sOption, sPopupCallBack);
        	} else {
        		var odrpl_na_trpl_c 	= this.gfn_nullToEmpty(dsScdArr[selectRdoIdx].getColumn(this.ds_dataD04.rowposition, "ODRPL_NA_TRPL_C"));
        		var odrpl_na_team_c 	= this.gfn_nullToEmpty(dsScdArr[selectRdoIdx].getColumn(this.ds_dataD04.rowposition, "ODRPL_NA_TEAM_C"));
        		var search_period 		= this.gfn_nullToEmpty(this.div_search.rdo_search_period.value);
        		var cal_from 			= this.gfn_nullToEmpty(this.div_search.cal_from.value);
        		var cal_to 				= this.gfn_nullToEmpty(this.div_search.cal_to.value);
        		var na_wrs_c 			= this.gfn_nullToEmpty(this.ds_dataM04.getColumn(this.ds_dataM04.rowposition, "NA_WRS_C"));
        		var vhcno 				= this.gfn_nullToEmpty(dsScdArr[selectRdoIdx].getColumn(this.ds_dataD04.rowposition, "VHCNO"));
        		var trplC 				= this.getTrplCode();

        		var oArg = {
        						odrpl_na_trpl_c:odrpl_na_trpl_c, 
        						odrpl_na_team_c:odrpl_na_team_c, 
        						search_period:search_period, 
        						cal_from:cal_from, 
        						cal_to:cal_to, 
        						na_wrs_c:na_wrs_c, 
        						vhcno:vhcno, 
        						trplC:trplC
        					};
        		var sOption = "autosize=true";
        		var sPopupCallBack = "fn_popupAfter";
        		this.gfn_openPopup("VAN_DS_SC_0110_P04", "SCM.ORDER::VAN_DS_SC_0110_P04.xfdl", oArg, sOption, sPopupCallBack);
        	}
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	//trace(" strId : " + strId + " strVal : " + strVal);
        	if (strVal != undefined) {
        		var valueArr = strVal.split(",");
        		if (strId == "wrsSearchPop") {
        			var na_wrs_c = valueArr[0];
        			var wrsnm = valueArr[1];
        			this.div_search.edt_na_wrs_c.set_value(na_wrs_c);
        			this.div_search.edt_wrsnm.set_value(wrsnm);
        		}
        		if (strId == "POPUP_SRC_WRS") {
        			this.div_search.edt_na_wrs_c.set_value(valueArr[0]);
        			this.div_search.edt_wrsnm.set_value(valueArr[1]);
        		}
        		if (strId == "POPUP_SRC_RVOPL") {
        			this.div_search.edt_splr_trpl_c.set_value(valueArr[0]);
        			this.div_search.edt_splr_trpl_nm.set_value(valueArr[1]);
        			this.div_search.edt_splr_team_c.set_value(valueArr[2]);
        			this.div_search.edt_splr_team_nm.set_value(valueArr[3]);
        		}
        	}
        }

        this.div_search_btn_popup_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"U", dsArg:this.Dataset00};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("wrsSearchPop", "POPUP::POPUP_SRC_WRS.xfdl", oArg, sOption, sPopupCallBack);
        }

        this.Div00_onsize = function(obj,e)
        {
        	var obj01;
        	var obj02;
        	switch(selectRdoIdx) {
        		case "1" :
        					obj01 = this.div_list01.div_page01_01;
        					obj02 = this.div_list01.div_page01_02;
        					break;
        		case "2" :
        					obj01 = this.div_list02.div_page02_01;
        					obj02 = this.div_list02.div_page02_02;
        					break;
        		case "3" :
        					obj01 = this.div_list03.div_page03_01;
        					obj02 = this.div_list03.div_page03_02;
        					break;
        		case "4" :
        					obj01 = this.div_list04.div_page04_01;
        					obj02 = this.div_list04.div_page04_02;
        					break;
        		default :
        					alert(" onsize Script error");
        					return false;
        					break;
        	}
        	var nLeft = (e.cx/2)-(obj01.width/2);
        	obj01.set_left(nLeft);

        	var nLeft = (e.cx/2)-(obj02.width/2);
        	obj02.set_left(nLeft);
        }

        this.Button10_onclick = function(obj,e)
        {
        	switch(selectRdoIdx) {
        		case "1" :
        					this.gfn_searchDivResize(obj, this.div_search, this.div_list01);
        					break;
        		case "2" :
        					this.gfn_searchDivResize(obj, this.div_search, this.div_list02);
        					break;
        		case "3" :
        					this.gfn_searchDivResize(obj, this.div_search, this.div_list03);
        					break;
        		case "4" :
        					this.gfn_searchDivResize(obj, this.div_search, this.div_list04);
        					break;
        		default :
        					alert("화면 접기  Script error");
        					return false;
        					break;
        	}
        }

        this.clearPageInfo = function()
        {
        	var divArr = [this.div_list01, this.div_list02, this.div_list03, this.div_list04];
        	for (var i=0; i < divArr.length; i++) {
        		var mDiv = divArr[i].div_page_grd_master;
        		var dDiv = divArr[i].div_page_grd_detail;
        		if (mDiv) mDiv.set_text('');
        		if (dDiv) dDiv.set_text('');
        	}
        };

        this.setSumData = function()
        {
        	var grd = grdScdArr[selectRdoIdx];

        	if (selectRdoIdx == 3) {
        		var ds = this.ds_dataD03_total;
        		var TOTAL_ODR_QT = ds.getColumn(0, 'TOTAL_ODR_QT');
        		var TOTAL_ODR_AM = ds.getColumn(0, 'TOTAL_ODR_AM');
        		var TOTAL_VCBT_AM = ds.getColumn(0, 'TOTAL_VCBT_AM');
        		if (!TOTAL_ODR_QT) TOTAL_ODR_QT = 0;
        		if (!TOTAL_ODR_AM) TOTAL_ODR_AM = 0;
        		if (!TOTAL_VCBT_AM) TOTAL_VCBT_AM = 0;
        		grd.setCellProperty("Summ", 8, "text", TOTAL_ODR_QT);
        		grd.setCellProperty("Summ", 9, "text", TOTAL_ODR_AM);
        		grd.setCellProperty("Summ", 10, "text", TOTAL_VCBT_AM);
        	}

        	if (selectRdoIdx == 4) {
        		var ds = this.ds_dataD04_total;
        		var TOTAL_ODR_QT = ds.getColumn(0, 'TOTAL_ODR_QT');
        		if (!TOTAL_ODR_QT) TOTAL_ODR_QT = 0;
        		grd.setCellProperty("Summary", 4, "text", TOTAL_ODR_QT);
        	}
        };

        this.setClearSum = function()
        {
        	if (selectRdoIdx == 3 || selectRdoIdx == 4) { //합계 초기화
        		var grd = grdScdArr[selectRdoIdx];
        		var cnt = grd.getCellCount("Summary");
        		for (var i=0; i < cnt; i++) {
        			var text = grd.getCellProperty("Summary", i, "displaytype").toString();
        			if (text == 'number') {
        				grd.setCellProperty("Summary", i, "text", "0");
        			}
        		}
        	}
        };

        this.div_search_edt_na_wrs_c_onkeyup = function(obj,e)
        {
        	if (e.keycode==13)
        	this.fn_enterWrs(true);
        }

        this.fn_enterWrs = function(param)
        {
        	var params = {
                    autoType:param, 
                    searchCode:this.gfn_nullToEmpty(this.div_search.edt_na_wrs_c.value), 
                    searchText:this.gfn_nullToEmpty(this.div_search.edt_wrsnm.value)
        	}
        	if (typeof param == "boolean") {
              if (!this.searPopValue(params)) {return};
        	}

        	var oArg = {autoPop:params};
        	var sOption = "autosize=true, titleText=false";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("POPUP_SRC_WRS", "POPUP::POPUP_SRC_WRS.xfdl", oArg, sOption, sPopupCallBack);
        }

        this.div_search_edt_splr_trpl_c_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.div_search_btn_popup01_onclick(true);
        	}
        }

        this.div_search_edt_splr_trpl_nm_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.div_search_btn_popup01_onclick(true);
        	}
        }

        this.div_search_btn_popup01_onclick = function(param)
        {
        	var params = {
                    autoType:param, 
                    searchCode:this.gfn_nullToEmpty(this.div_search.edt_splr_trpl_c.value), 
                    searchText:this.gfn_nullToEmpty(this.div_search.edt_splr_trpl_nm.value)
        	}
        	if (typeof param == "boolean") {
              if (!this.searPopValue(params)) {return};
        	}

        	var oArg = {autoPop:params};
        	var sOption = "autosize=true, titleText=false";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("POPUP_SRC_RVOPL", "POPUP::POPUP_SRC_RVOPL_TRPL.xfdl", oArg, sOption, sPopupCallBack);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("oninit", this.form_init, this);
            this.div_search.rdo_search_type02.addEventHandler("onitemchanged", this.div_search_rdo_search_type_onitemchanged, this);
            this.div_search.edt_wrsnm.addEventHandler("onkeyup", this.div_search_edt_na_wrs_c_onkeyup, this);
            this.div_search.edt_na_wrs_c.addEventHandler("onkeyup", this.div_search_edt_na_wrs_c_onkeyup, this);
            this.div_search.btn_popup.addEventHandler("onclick", this.div_search_btn_popup_onclick, this);
            this.div_search.cbo_phd_fclt_c.addEventHandler("onitemchanged", this.Div00_Combo01_onitemchanged, this);
            this.div_search.cbo_wmc_loc_rgn_dsc.addEventHandler("onitemchanged", this.div_search_cbo_wmc_loc_rgn_dsc_onitemchanged, this);
            this.div_search.cbo_ht_lov_rgn_c.addEventHandler("onitemchanged", this.Div00_Combo01_onitemchanged, this);
            this.div_search.rdo_search_type01.addEventHandler("onitemchanged", this.div_search_rdo_search_type_onitemchanged, this);
            this.div_search.rdo_search_type03.addEventHandler("onitemchanged", this.div_search_rdo_search_type_onitemchanged, this);
            this.div_search.rdo_search_type04.addEventHandler("onitemchanged", this.div_search_rdo_search_type_onitemchanged, this);
            this.div_search.edt_splr_trpl_c.addEventHandler("onkeydown", this.div_search_edt_splr_trpl_c_onkeydown, this);
            this.div_search.edt_splr_trpl_nm.addEventHandler("onkeydown", this.div_search_edt_splr_trpl_nm_onkeydown, this);
            this.div_search.btn_popup01.addEventHandler("onclick", this.div_search_btn_popup01_onclick, this);
            this.div_search.edt_splr_team_c.addEventHandler("onkeydown", this.div_search_edt_splr_trpl_c_onkeydown, this);
            this.div_search.edt_splr_team_nm.addEventHandler("onkeydown", this.div_search_edt_splr_trpl_c_onkeydown, this);
            this.div_list01.addEventHandler("onsize", this.Div00_onsize, this);
            this.div_list01.Button10.addEventHandler("onclick", this.Button10_onclick, this);
            this.div_list01.grd_master.addEventHandler("onselectchanged", this.div_list_Grid00_onselectchanged, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_print.addEventHandler("onclick", this.btn_print_onclick, this);
            this.div_list02.addEventHandler("onsize", this.Div00_onsize, this);
            this.div_list02.Button10.addEventHandler("onclick", this.Button10_onclick, this);
            this.div_list02.grd_master.addEventHandler("onselectchanged", this.div_list_Grid00_onselectchanged, this);
            this.div_list03.addEventHandler("onsize", this.Div00_onsize, this);
            this.div_list03.Button10.addEventHandler("onclick", this.Button10_onclick, this);
            this.div_list04.addEventHandler("onsize", this.Div00_onsize, this);
            this.div_list04.btn_excelDown01.addEventHandler("onclick", this.div_list04_btn_excelDown01_onclick, this);
            this.div_list04.grd_master.addEventHandler("onselectchanged", this.div_list_Grid00_onselectchanged, this);
            this.div_list04.Button10.addEventHandler("onclick", this.Button10_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0140.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
