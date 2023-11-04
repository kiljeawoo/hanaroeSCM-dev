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
                this.set_name("VAN_DS_SC_0340");
                this.set_titletext("배송예정 상품별조회");
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

            obj = new Dataset("ds_dataM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RN\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"RVOPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"RVOPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_STDNM\" type=\"STRING\" size=\"256\"/><Column id=\"CNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DVY_PLA_QT\" type=\"FLOAT\" size=\"256\"/><Column id=\"DVY_AM\" type=\"FLOAT\" size=\"256\"/><Column id=\"DVY_VAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SPYPL_NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"RVOPL_NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"GRS_SOJU_YN\" type=\"STRING\" size=\"256\"/><Column id=\"VHCNO\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_PLASH_STAC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"RN\" type=\"STRING\" size=\"256\"/><Column id=\"RVOPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"RVOPL_NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"NA_DVY_PLASH_SLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"DVYAA_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"DVYAA_NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_PLA_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_WRS_UPR\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_PLA_QT\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_AM\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_FEE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("ds_sum", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DVY_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DVY_VAT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "119", "15", null, this);
            obj.set_taborder("30");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "15", "9", "79", "21", null, null, this.div_search);
            obj.set_taborder("59");
            obj.set_text("조회일자");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "756", "-2", null, "69", "201", null, this.div_search);
            obj.set_taborder("60");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_dvy_pla_dt_fr", "absolute", "94", "9", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("72");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static08", "absolute", "199", "9", "10", "21", null, null, this.div_search);
            obj.set_taborder("73");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_dvy_pla_dt_to", "absolute", "214", "9", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("74");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static00", "absolute", "283", "-1", null, "10", "355", null, this.div_search);
            obj.set_taborder("91");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "15", "87", "103", "21", null, null, this.div_search);
            obj.set_taborder("103");
            obj.set_text("상품코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_wrs_gubun", "absolute", "123", "87", "156", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_wrs_gubun_innerdataset = new Dataset("rdo_wrs_gubun_innerdataset", this.div_search.rdo_wrs_gubun);
            rdo_wrs_gubun_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">상품코드</Col></Row></Rows>");
            obj.set_innerdataset(rdo_wrs_gubun_innerdataset);
            obj.set_taborder("104");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.style.set_font("9 Gulim");
            obj.set_index("0");
            obj = new Edit("edt_na_wrs_c", "absolute", "285", "87", "122", "21", null, null, this.div_search);
            obj.set_taborder("105");
            obj.set_cssclass("WF_Essential");
            obj.set_maxlength("25");
            obj.set_inputtype("number");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_na_wrs_n", "absolute", "409", "87", "169", "21", null, null, this.div_search);
            obj.set_taborder("106");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_pup_van_seq00", "absolute", "580", "87", "21", "21", null, null, this.div_search);
            obj.set_taborder("107");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "344", "9", "102", "21", null, null, this.div_search);
            obj.set_taborder("122");
            obj.set_text("조회구분");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_spypl_type", "absolute", "446", "9", "337", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_spypl_type_innerdataset = new Dataset("rdo_spypl_type_innerdataset", this.div_search.rdo_spypl_type);
            rdo_spypl_type_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">수주처+공급처</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">수주처</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">공급처</Col></Row></Rows>");
            obj.set_innerdataset(rdo_spypl_type_innerdataset);
            obj.set_taborder("123");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_visible("false");
            obj.style.set_font("9 Gulim");
            obj = new Static("Static01", "absolute", "275", "108", null, "10", "363", null, this.div_search);
            obj.set_taborder("124");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "15", "33", "115", "21", null, null, this.div_search);
            obj.set_taborder("125");
            obj.set_text("배송예정서번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_dvy_plash_slpno", "absolute", "123", "33", "156", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_dvy_plash_slpno_innerdataset = new Dataset("rdo_dvy_plash_slpno_innerdataset", this.div_search.rdo_dvy_plash_slpno);
            rdo_dvy_plash_slpno_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">배송예정서</Col></Row></Rows>");
            obj.set_innerdataset(rdo_dvy_plash_slpno_innerdataset);
            obj.set_taborder("126");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.style.set_font("9 Gulim");
            obj.set_index("0");
            obj = new Edit("edt_na_dvy_plash_slpno", "absolute", "285", "33", "148", "21", null, null, this.div_search);
            obj.set_taborder("127");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_pup_deliveryNotice", "absolute", "434", "33", "21", "21", null, null, this.div_search);
            obj.set_taborder("128");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "15", "60", "103", "21", null, null, this.div_search);
            obj.set_taborder("129");
            obj.set_text("발주처");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_odrpl_na_trpl_c", "absolute", "123", "60", "156", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_odrpl_na_trpl_c_innerdataset = new Dataset("rdo_odrpl_na_trpl_c_innerdataset", this.div_search.rdo_odrpl_na_trpl_c);
            rdo_odrpl_na_trpl_c_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">발주처</Col></Row></Rows>");
            obj.set_innerdataset(rdo_odrpl_na_trpl_c_innerdataset);
            obj.set_taborder("130");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.style.set_font("9 Gulim");
            obj.set_index("0");
            obj = new Edit("edt_odrpl_na_trpl_c", "absolute", "285", "59", "122", "21", null, null, this.div_search);
            obj.set_taborder("131");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_odrpl_na_trpl_n", "absolute", "409", "59", "169", "21", null, null, this.div_search);
            obj.set_taborder("132");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_trplO", "absolute", "580", "59", "21", "21", null, null, this.div_search);
            obj.set_taborder("133");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "146", null, null, "15", "2", this);
            obj.set_taborder("0");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            obj = new Div("div_page01", "absolute", "28.55%", "151", "338", "44", null, null, this.div_list);
            obj.set_taborder("40");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("Button10", "absolute", "331", "0", null, "12", "330", null, this.div_list);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_master", "absolute", "0", "20", null, "131", "0", null, this.div_list);
            obj.set_taborder("24");
            obj.set_binddataset("ds_dataM");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"39\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"상품코드\"/><Cell col=\"2\" text=\"상품명\"/><Cell col=\"3\" text=\"규격\"/><Cell col=\"4\" text=\"항목수\"/><Cell col=\"5\" text=\"총수량\"/><Cell col=\"6\" text=\"총금액\"/><Cell col=\"7\" text=\"부가세\"/><Cell col=\"8\" text=\"공급업체코드\"/><Cell col=\"9\" text=\"공급업체명\"/><Cell col=\"10\" text=\"수주처코드\"/><Cell col=\"11\" text=\"수주처명\"/><Cell col=\"12\" text=\"수주처팀\"/><Cell col=\"13\" text=\"지방소주여부\"/><Cell col=\"14\" text=\"차량번호\"/><Cell col=\"15\" text=\"배송예정상태\"/></Band><Band id=\"body\"><Cell text=\"bind:RN\"/><Cell col=\"1\" text=\"bind:NA_WRS_C\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:WRSNM\"/><Cell col=\"3\" text=\"bind:WRS_STDNM\"/><Cell col=\"4\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:CNT\" mask=\"#,##0\"/><Cell col=\"5\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DVY_PLA_QT\" mask=\"#,##0\"/><Cell col=\"6\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DVY_AM\" mask=\"#,##0\"/><Cell col=\"7\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DVY_VAT\" mask=\"#,##0\"/><Cell col=\"8\" text=\"bind:SPYPL_NA_TRPL_C\"/><Cell col=\"9\" text=\"bind:SPYPL_NA_TRPL_N\"/><Cell col=\"10\" text=\"bind:RVOPL_NA_TRPL_C\"/><Cell col=\"11\" text=\"bind:RVOPL_NA_TRPL_N\"/><Cell col=\"12\" expr=\"expr:RVOPL_NA_TEAM_C == '00' ? '팀없음' : RVOPL_NA_TEAM_C\"/><Cell col=\"13\" expr=\"expr:GRS_SOJU_YN == '1' ? '여' : '부'\"/><Cell col=\"14\" text=\"bind:VHCNO\"/><Cell col=\"15\" text=\"bind:DVY_PLASH_STAC\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_detail", "absolute", "0", "202", null, null, "0", "42", this.div_list);
            obj.set_taborder("26");
            obj.set_binddataset("ds_dataD");
            obj.set_useselcolor("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"39\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"수주처\"/><Cell col=\"2\" text=\"수주처명\"/><Cell col=\"3\" text=\"배송예정서번호\"/><Cell col=\"4\" text=\"배송지\"/><Cell col=\"5\" text=\"배송지명\"/><Cell col=\"6\" text=\"발주처\"/><Cell col=\"7\" text=\"발주처명\"/><Cell col=\"8\" text=\"발주처팀\"/><Cell col=\"9\" text=\"배송예정일\"/><Cell col=\"10\" text=\"단가\"/><Cell col=\"11\" text=\"수량\"/><Cell col=\"12\" text=\"배송금액\"/><Cell col=\"13\" text=\"부가세\"/><Cell col=\"14\" text=\"수수료(물류,환급)\"/></Band><Band id=\"body\"><Cell text=\"bind:RN\"/><Cell col=\"1\" text=\"bind:RVOPL_NA_TRPL_C\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:RVOPL_NA_TRPL_N\"/><Cell col=\"3\" text=\"bind:NA_DVY_PLASH_SLPNO\"/><Cell col=\"4\" text=\"bind:DVYAA_NA_TRPL_C\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:DVYAA_NA_TRPL_N\"/><Cell col=\"6\" text=\"bind:ODRPL_NA_TRPL_C\"/><Cell col=\"7\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:ODRPL_NA_TRPL_N\"/><Cell col=\"8\" text=\"bind:ODRPL_NA_TEAM_C\"/><Cell col=\"9\" displaytype=\"date\" text=\"bind:DVY_PLA_DT\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DVY_WRS_UPR\" mask=\"#,##0\"/><Cell col=\"11\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DVY_PLA_QT\" mask=\"#,##0\"/><Cell col=\"12\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DVY_AM\" mask=\"#,##0\"/><Cell col=\"13\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DVY_VAT\" mask=\"#,##0\"/><Cell col=\"14\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DVY_FEE\" mask=\"#,##0\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "936", "-1", null, "15", "2", null, this.div_list);
            obj.set_taborder("32");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "936", "35", null, "5", "2", null, this.div_list);
            obj.set_taborder("34");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "0", null, "20", "0", null, this.div_list);
            obj.set_taborder("42");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_page02", "absolute", "28.55%", null, "338", "29", null, "0", this.div_list);
            obj.set_taborder("41");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_tr_print", "absolute", null, "176", "101", "22", "0", null, this.div_list);
            obj.set_taborder("43");
            obj.set_text("거래명세서출력");
            this.div_list.addChild(obj.name, obj);

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

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "257", null, this);
            obj.set_taborder("49");
            obj.set_text("div_auth");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("50");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web_downExcel", "absolute", "641", "22", "44", "14", null, null, this);
            obj.set_taborder("51");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("ozType", "absolute", "816", "75", "44", "16", null, null, this);
            obj.set_taborder("53");
            obj.set_value("1");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 119, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("30");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 338, 29, this.div_list.div_page02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("41");
            		p.set_url("common::pagingBTN.xfdl");
            		p.style.set_align("center");
            		p.set_visible("false");

            	}
            );
            this.div_list.div_page02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 978, 800, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div02");
            		p.set_scrollbars("none");
            		p.set_visible("true");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("배송예정 상품별조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
            this._addPreloadList("fdl", "common::location.xfdl");
            this._addPreloadList("fdl", "common::AuthorityWorkplace.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_0340.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0340.xfdl", function() {
        //include "lib::comLib.xjs";
        /*##################################################################################
         화면ID 	: VAN_DS_SC_0340
         화면명	: 배송예정 상품별조회
         작성자	: swha
         작성일자	: 2015.08.26 
        ####################################################################################*/
        /***************************************************************************************
        	code        : 호출할 공통코드
        	dsName      : 호출된 공통코드를 담을 Dataset
        	selecttype  : ComboBox 최상단에 추가할 문구( A: -전체-, S:-선택-, N: 빈칸)
        	 
        	selecttype은 추후 변경될 수 있음.
        	this.fn_commonAfterOnload를 화면에 선언하면 gfn_setCommonCode처리후 호출됨.
        *****************************************************************************************/
        /* form load */
        this.form_onload = function(obj,e)
        {		
        	this.gfn_setInitForm(obj,e);
        	
        	var ozParam = {
        				form:this, 						//공통
        				ozBtn:this.div_list.btn_tr_print, 		//출력버튼
        				ozFnc:'btn_tr_print_onclick'	//오즈실행 함수명
        			  };
            this.addOzBtnAdd(ozParam);
            
        	this.authChkDisable();//권한사업장 체크박스 비활성화
        }

        /* Form Init*/
        this.form_init = function(obj,e)
        {	
        	
        }

        //공통코드 데이터셋 onload후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        	trace("fn_commonAfterOnload");

        }

        /* 페이지 로딩후 실행부분 */
        this.fn_afterFormOnload = function()
        {
        	var param = {
        		form: this,										//공통(필수)
        		m_grd: this.div_list.grd_master,  				//마스터 그리드
        		m_pageDiv: this.div_list.div_page01,		    //마스터 페이지DIV
        		m_afterFnc: this.grd_afterFnc,					//마스터 그리드 클릭이벤트
        		d_grd: this.div_list.grd_detail, 				//디테일 그리드
        		d_pageDiv: this.div_list.div_page02		    //디테일 페이지DIV
        	};
        	
        	param.m_pageDiv.addPageEvent(param);
        	
        	//그리드클릭 이벤트 등록
        	//this.div_list.grd_master.addEventHandler("oncellclick", this.grd_afterFnc, this);
        	
        	//그리드 nodata
        	this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	this.div_list.grd_detail.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	
        	
        	var today = this.gfn_today('yyyyMMdd');
        	this.div_search.cal_dvy_pla_dt_fr.set_value(this.gfn_addDate(today, -1));	
        	this.div_search.cal_dvy_pla_dt_to.set_value(this.gfn_addDate(today, 7));
        	
        	
        	//this.div_search.cal_dvy_pla_dt_fr.set_value(this.gfn_minusDate(this.gfn_today("YYYYMMdd"),5));	
        	//this.div_search.cal_dvy_pla_dt_to.set_value(this.gfn_lastDate(this.gfn_today("YYYYMMdd")));
        }

        /* search */
        this.fn_searchFir = function(){
        	//권한사업장 코드
        	var trplC = this.getTrplCode();
        	var dvy_pla_dt_fr		= this.gfn_nullToEmpty(this.div_search.cal_dvy_pla_dt_fr.value);//배송예정일자 from
        	var dvy_pla_dt_to		= this.gfn_nullToEmpty(this.div_search.cal_dvy_pla_dt_to.value);//배송예정일자 to
        	var wrs_gubun			= this.gfn_nullToEmpty(this.div_search.rdo_wrs_gubun.value); //상품코드구분
        	var na_wrs_c			= this.gfn_nullToEmpty(this.div_search.edt_na_wrs_c.value); //상품코드
        	var dvy_plash_slpno_rdo = this.gfn_nullToEmpty(this.div_search.rdo_dvy_plash_slpno.value);//배송예정서번호 구분
        	var na_dvy_plash_slpno	= this.gfn_nullToEmpty(this.div_search.edt_na_dvy_plash_slpno.value);//배송예정서번호
        	var odrpl_na_trpl_rdo	= this.gfn_nullToEmpty(this.div_search.rdo_odrpl_na_trpl_c.value);//발주처구분
        	var odrpl_na_trpl_c		= this.gfn_nullToEmpty(this.div_search.edt_odrpl_na_trpl_c.value);//발주처코드
        	
        	var params = 	" dvy_pla_dt_fr="+dvy_pla_dt_fr
        					+" dvy_pla_dt_to="+dvy_pla_dt_to
        					+" wrs_gubun="+wrs_gubun
        					+" na_wrs_c="+na_wrs_c
        					+" TRPL_C="+trplC
        					+" dvy_plash_slpno_rdo="+dvy_plash_slpno_rdo
        					+" na_dvy_plash_slpno="+na_dvy_plash_slpno
        					+" odrpl_na_trpl_rdo="+odrpl_na_trpl_rdo
        					+" odrpl_na_trpl_c="+odrpl_na_trpl_c;
        					
        					
        					
        	trace("##params >> " + params);
        	
        	var sSvcID        = "retrieveDeliverySkusM";//통신아이디
        	var sURL          = "svc::rest/scm/delivery/retrieveDeliverySkusM";// 호출할 서버 페이지 주소
        	var sInDatasets   = "ds_pageVO01=ds_pageVO01";//보내는데이터셋
        	var sOutDatasets  = "ds_dataM=ds_dataM ds_pageVO01=ds_pageVO01";//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);	
        	
        }

        

        this.btn_search_onclick = function(obj,e)
        {	
        	

        	this.ds_dataM.clearData();
        	this.ds_dataD.clearData();
        	this.div_list.div_page02.set_visible(false);
        	if(this.fn_validationCheck())
        		this.fn_paging(1, "div_page01"); 	
        	

        	
        }

        /* Validation Check */
        this.fn_validationCheck = function(){
        	
        	
        	if(this.gfn_isNull(this.div_search.cal_dvy_pla_dt_fr.value)){
        		alert("조회기간(부터)를 확인하세요.");
        		return false;
            }
            
            if(this.gfn_isNull(this.div_search.cal_dvy_pla_dt_to.value)){
        		alert("조회기간(까지)를 확인하세요.");
        		return false;
            }
            
            
        	if(this.gfn_getDiffDay(this.div_search.cal_dvy_pla_dt_fr.value,this.div_search.cal_dvy_pla_dt_to.value) < 0){
        		//조회 시작일과 종료일을 다시 확인해 주세요
        		this.gfn_getMessage("alert", "validation.message.fromDate.toDate.reConfirm");
        		return false;
        	}else{
        		/*
        		if(this.gfn_getDiffDay(this.div_search.cal_dvy_pla_dt_fr.value,this.div_search.cal_dvy_pla_dt_to.value) > 31){
        			//기간을 31일 이내로 선택해 주세요
        			this.gfn_getMessage("alert", "validation.message.selectDateIn31Day");
        			return false;
        		}
        		*/
        	}
        	
        	if(this.gfn_nullToEmpty(this.div_search.rdo_wrs_gubun.value) == "2" && this.gfn_isNull(this.div_search.edt_na_wrs_c.value)){
        		alert("상품코드를 선택해 주세요");
        		return false;
        	}
        	
        	if (this.gfn_nullToEmpty(this.div_search.rdo_dvy_plash_slpno.value) == "2" && this.gfn_isNull(this.div_search.edt_na_dvy_plash_slpno.value)) {
        		alert("배송예정서를 선택해 주세요");
        		return false;
        	}

        	if (this.gfn_nullToEmpty(this.div_search.rdo_odrpl_na_trpl_c.value) == "2" && this.gfn_isNull(this.div_search.edt_odrpl_na_trpl_c.value)) {
        		alert("발주처를 선택해 주세요");
        		return false;
        	}
        	
        	return true;
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", ErrorMsg);
        		return;
        	}else{
        		if(svcID == "retrieveDeliverySkusM"){		
        			if(this.ds_dataM.rowcount > 0){
        				trace(this.ds_dataM.saveXML());
        				this.ds_dataM.set_enableevent(false);
        				this.ds_dataM.set_rowposition(-1);
        				this.ds_dataM.set_enableevent(true);
        				var sTotal    = this.ds_pageVO01.getColumn(0, "TOTAL_ROW_COUNT");
        				var sPagesize = this.ds_pageVO01.getColumn(0, "PAGE_SIZE");
        				this.div_list.div_page01.fn_pageSet(sTotal, sPagesize,"grd_master,div_page01",lsNowPage);	
        				
        			}else{
        				this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        				this.div_list.div_page01.fn_pageSet(0, 0,"grd_master,div_page01",lsNowPage);//페이징 설정
        			}
        			this.ds_dataD.clearData();
        		}else if(svcID == "retrieveDeliverySkusD"){
        			if(this.ds_dataD.rowcount > 0){
        				var sTotal    = this.ds_pageVO02.getColumn(0, "TOTAL_ROW_COUNT");
        				var sPagesize = this.ds_pageVO02.getColumn(0, "PAGE_SIZE");
        				this.div_list.div_page02.fn_pageSet(sTotal, sPagesize,"grd_detail,div_page02",lsNowPage);	
        				
        			}else{
        				
        				this.div_list.grd_detail.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        				this.div_list.div_page02.fn_pageSet(0, 0,"grd_detail,div_page02",lsNowPage);//페이징 설정
        				
        			}
        		}		
        	}
        }

        //Popupdiv 호출
        this.btn_excel_onclick = function(obj,e)
        {
        	if(this.fn_validationCheck())
        		this.fn_excel();
        }

        this.fn_excel = function(){

        
        	var trplC = this.getTrplCode();
        	var dvy_pla_dt_fr		= this.gfn_nullToEmpty(this.div_search.cal_dvy_pla_dt_fr.value);//배송예정일자 from
        	var dvy_pla_dt_to		= this.gfn_nullToEmpty(this.div_search.cal_dvy_pla_dt_to.value);//배송예정일자 to
        	var wrs_gubun			= this.gfn_nullToEmpty(this.div_search.rdo_wrs_gubun.value); //상품코드구분
        	var na_wrs_c			= this.gfn_nullToEmpty(this.div_search.edt_na_wrs_c.value); //상품코드
        	var dvy_plash_slpno_rdo = this.gfn_nullToEmpty(this.div_search.rdo_dvy_plash_slpno.value);//배송예정서번호 구분
        	var na_dvy_plash_slpno	= this.gfn_nullToEmpty(this.div_search.edt_na_dvy_plash_slpno.value);//배송예정서번호
        	var odrpl_na_trpl_rdo	= this.gfn_nullToEmpty(this.div_search.rdo_odrpl_na_trpl_c.value);//발주처구분
        	var odrpl_na_trpl_c		= this.gfn_nullToEmpty(this.div_search.edt_odrpl_na_trpl_c.value);//발주처코드
        	
        	var FILE_NAME			= "배송예정 상품별 조회.xls";
        	
        	
        	var params = 	"dvy_pla_dt_fr="+dvy_pla_dt_fr
        					+"&dvy_pla_dt_to="+dvy_pla_dt_to
        					+"&wrs_gubun="+wrs_gubun
        					+"&na_wrs_c="+na_wrs_c
        					+"&TRPL_C="+trplC
        					+"&dvy_plash_slpno_rdo="+dvy_plash_slpno_rdo
        					+"&na_dvy_plash_slpno="+na_dvy_plash_slpno
        					+"&odrpl_na_trpl_rdo="+odrpl_na_trpl_rdo
        					+"&odrpl_na_trpl_c="+odrpl_na_trpl_c
        					+"&FILE_NAME="+ FILE_NAME;
        		trace("엑셀 다운로드 params >>> " + params);
        		//this.web_downExcel.set_url(application.gv_server_url+"rest/excel/scm/delivery/downloadExcelDeliverySkus?"+params);
        		excelDownHandler(application.gv_server_url+"rest/excel/scm/delivery/downloadExcelDeliverySkus?"+params, this);
        }

        
        this.div_list_btn_divResize_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        
        this.fn_popupAfter = function(strId,strVal)
        {
        	trace(" strId : " + strId + " strVal : " + strVal);
        	if (this.gfn_isNull(strVal)) { return; }
        	var paramsArr = strVal.split(",");
        	if(strId == "POPUP_SRC_WRS"){
        		this.div_search.edt_na_wrs_c.set_value(paramsArr[0]);
        		this.div_search.edt_wrsnm.set_value(paramsArr[1]);
        	}
        	if (strId == "POPUP_TRNREL_ODRPL") {
        		this.div_search.edt_odrpl_na_trpl_c.set_value(paramsArr[0]);
        		this.div_search.edt_odrpl_na_trpl_n.set_value(paramsArr[1]);
        	}
        	if (strId == "VAN_DS_SC_0370_P01") {
        		this.div_search.edt_na_dvy_plash_slpno.set_value(paramsArr[0]);
        	}
        }

        /*-----------------------------------------------------------------------------------------*/
        // 페이징처리
        /*-----------------------------------------------------------------------------------------*/
        this.fn_paging = function(vPageNum,objDivNm)
        { 	  	 
        	
        	var oDs, oBindDs;
        	var searchLevel;
        	if(this.gfn_isNull(objDivNm)){
        		objDivNm = "div_page";
        	}

        	if(objDivNm == "div_page01"){
        		oDs     = this.ds_pageVO01;
        		oBindDs = this.ds_dataM;
        		searchLevel = "F";//첫번째 그리드
        	}else{
        		oDs     = this.ds_pageVO02;
        		oBindDs = this.ds_dataD;
        		searchLevel = "S";//두번째 그리드
        	}
        	
        	
        	oDs.clearData();  
        	oBindDs.clearData();     //Grid에 Binding된 Dataset명
        	
        	oDs.addRow(); 
        	
        	var vPageSize   = 15; 	//Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
        	var vTotalCount = 0; 	//전체건수. 화면조회후 리턴받아 사용
        	
         	oDs.setColumn(0,"CURRENT_PAGE",vPageNum); //현재 페이지
         	oDs.setColumn(0,"PAGE_SIZE",vPageSize);
         	oDs.setColumn(0,"TOTAL_ROW_COUNT",vTotalCount);	 
        	 
        	var argumentObj = "";
        	
        	lsNowPage = vPageNum;//현재페이지 설정 
        		
        	if(searchLevel == "F"){
        		//oDs.fn_pageSet(vTotalCount, vPageSize,objDivNm, lsNowPage);	
        		this.fn_searchFir();
        	}else{
        		//oDs.fn_pageSet(vTotalCount, vPageSize,objDivNm, lsNowPage);	
        		this.fn_searchScd();
        	}
        	
        	
         
        }

        
        this.fn_searchScd = function(){

        	//권한사업장 코드
        	var trplC = this.getTrplCode();
        	var dvy_pla_dt_fr		= this.gfn_nullToEmpty(this.div_search.cal_dvy_pla_dt_fr.value);//배송예정일자 from
        	var dvy_pla_dt_to		= this.gfn_nullToEmpty(this.div_search.cal_dvy_pla_dt_to.value);//배송예정일자 to
        	var na_wrs_c = this.gfn_nullToEmpty(this.ds_dataM.getColumn(this.ds_dataM.rowposition,"NA_WRS_C"));//상품코드
        	var dvy_plash_slpno_rdo = this.gfn_nullToEmpty(this.div_search.rdo_dvy_plash_slpno.value);//배송예정서번호 구분
        	var na_dvy_plash_slpno	= this.gfn_nullToEmpty(this.div_search.edt_na_dvy_plash_slpno.value);//배송예정서번호
        	var odrpl_na_trpl_rdo	= this.gfn_nullToEmpty(this.div_search.rdo_odrpl_na_trpl_c.value);//발주처구분
        	var odrpl_na_trpl_c		= this.gfn_nullToEmpty(this.div_search.edt_odrpl_na_trpl_c.value);//발주처코드
        	
        	var params = 	" dvy_pla_dt_fr="+dvy_pla_dt_fr
        					+" dvy_pla_dt_to="+dvy_pla_dt_to
        					+" na_wrs_c="+na_wrs_c
        					+" TRPL_C="+trplC					
        					+" dvy_plash_slpno_rdo="+dvy_plash_slpno_rdo
        					+" na_dvy_plash_slpno="+na_dvy_plash_slpno
        					+" odrpl_na_trpl_rdo="+odrpl_na_trpl_rdo
        					+" odrpl_na_trpl_c="+odrpl_na_trpl_c;
        	
        	
        	trace("##PARAM##->"+params);
        	
        	var sSvcID        = "retrieveDeliverySkusD";//통신아이디
        	var sURL          = "svc::rest/scm/delivery/retrieveDeliverySkusD";// 호출할 서버 페이지 주소
        	var sInDatasets   = "ds_pageVO02=ds_pageVO02";//보내는데이터셋
        	var sOutDatasets  = "ds_dataD=ds_dataD ds_pageVO02=ds_pageVO02";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
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
        	this.div_list.div_page02.set_visible(false);
        	this.fn_paging(1, "div_page02"); 	
        }
        this.btn_pup_van_seq_onclick = function(obj,e)
        {
        	this.fn_enterWrs();
        }

        this.btn_print_onclick = function(obj,e)
        {
        	var trplC = this.getTrplCode();
        	
        	var dvy_pla_dt_fr		= this.gfn_nullToEmpty(this.div_search.cal_dvy_pla_dt_fr.value);//배송예정일자 from
        	var dvy_pla_dt_to		= this.gfn_nullToEmpty(this.div_search.cal_dvy_pla_dt_to.value);//배송예정일자 to
        	var wrs_gubun			= this.gfn_nullToEmpty(this.div_search.rdo_wrs_gubun.value); //상품코드구분
        	var na_wrs_c			= this.gfn_nullToEmpty(this.div_search.edt_na_wrs_c.value); //상품코드
        	var dvy_plash_slpno_rdo = this.gfn_nullToEmpty(this.div_search.rdo_dvy_plash_slpno.value);//배송예정서번호 구분
        	var na_dvy_plash_slpno	= this.gfn_nullToEmpty(this.div_search.edt_na_dvy_plash_slpno.value);//배송예정서번호
        	var odrpl_na_trpl_rdo	= this.gfn_nullToEmpty(this.div_search.rdo_odrpl_na_trpl_c.value);//발주처구분
        	var odrpl_na_trpl_c		= this.gfn_nullToEmpty(this.div_search.edt_odrpl_na_trpl_c.value);//발주처코드
        	
        	var searchText = "배송예정일자 ["+dvy_pla_dt_fr+" ~ "+dvy_pla_dt_to+"]";
        	
        	trace(searchText);
        	
        	var param = {
        		TRPL_C_TEXT:searchText,
        		dvyPlaDtFr:dvy_pla_dt_fr,
        		dvyPlaDtTo:dvy_pla_dt_to,
        		wrsGubun:wrs_gubun,
        		naWrsC:na_wrs_c,
        		dvyPlashSlpnoRdo:dvy_plash_slpno_rdo, 
        		naDvyPlashSlpno:na_dvy_plash_slpno, 
        		odrplNaTrplRdo:odrpl_na_trpl_rdo, 
        		odrplNaTrplC:odrpl_na_trpl_c, 
        		TRPL_C:trplC
        	};
        	
        	var ozParam = {
        		sId: 'VAN_DS_SC_0340',
        		sUrl: '/rest/oz/scm/delivery/printDeliverySkus',
        		paramType: 'param',
        		sParam: param
        	};
        	this.ozViewer(ozParam);
        }

        this.div_search_edt_na_wrs_c_onkeyup = function(obj,e)
        {
        	
        	if(e.keycode==13)
        	this.fn_enterWrs(true);
        }

        this.fn_enterWrs = function(param){
        	var params = {
                    autoType:param,
                    searchCode:this.gfn_nullToEmpty(this.div_search.edt_na_wrs_c.value),
                    searchText:this.gfn_nullToEmpty(this.div_search.edt_na_wrs_n.value)
        	}
        	if(typeof param == "boolean"){
              if(!this.searPopValue(params)){return};
        	}
           
        	var oArg = {autoPop:params};
        	var sOption = "autosize=true, titleText=false";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("POPUP_SRC_WRS","POPUP::POPUP_SRC_WRS.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.div_search_btn_pup_deliveryNotice_onclick = function(obj,e)
        {
        	var oArg = {form_id:"VAN_DS_SC_0330", trplC:this.getTrplCode(), temp_yn:'N', sts:'all'};
        	var sOption = "autosize=true, title=false";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("VAN_DS_SC_0370_P01", "SCM.DELIVERY::VAN_DS_SC_0370_P01.xfdl", oArg, sOption, sPopupCallBack);
        }

        this.div_search_btn_trplO_onclick = function(obj,e)
        {
        	var oArg = {form_id:"VAN_DS_SC_0340", trplC:this.getTrplCode()};
        	var sOption = "autosize=true, title=false";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("POPUP_TRNREL_ODRPL", "POPUP::POPUP_TRNREL_ODRPL.xfdl", oArg, sOption, sPopupCallBack);
        }

        this.btn_tr_print_onclick = function(obj,e)
        {						
        	
        	if (this.ds_dataD.rowposition == -1) {
        		alert("배송예정서를 선택해 주세요");
        		return false;
        	}
        	var trplC				= this.gfn_nullToEmpty(this.ds_dataD.getColumn(this.ds_dataD.rowposition, "RVOPL_NA_TRPL_C"));//수주처
        	var dvy_pla_dt			= this.gfn_nullToEmpty(this.ds_dataD.getColumn(this.ds_dataD.rowposition, "DVY_PLA_DT"));//배송예정일자
        	var dvy_plash_slpno_rdo	= "2";
        	var na_dvy_plash_slpno 	= this.gfn_nullToEmpty(this.ds_dataD.getColumn(this.ds_dataD.rowposition, "NA_DVY_PLASH_SLPNO")); //배송예정서번호
        	var odrpl_na_trpl_rdo 	= "2";
        	var odrpl_na_trpl_c 	= this.gfn_nullToEmpty(this.ds_dataD.getColumn(this.ds_dataD.rowposition, "ODRPL_NA_TRPL_C")); //발주처코드
        	var ozType 				= this.ozType.value;
        	
        	var searchText = "배송예정일자 ["+dvy_pla_dt+"]";
        	
        	trace(searchText);
        	
        	var param = {
        		TRPL_C_TEXT:searchText,
        		dvyPlaDt:dvy_pla_dt,
        		dvyPlashSlpnoRdo:dvy_plash_slpno_rdo, 
        		naDvyPlashSlpno:na_dvy_plash_slpno,
        		odrplNaTrplRdo:odrpl_na_trpl_rdo,
        		odrplNaTrplC:odrpl_na_trpl_c, 
        		TRPL_C:trplC, 
        		ozType:ozType
        	};
        	
        	var ozParam = {
        		sId: 'VAN_DS_SC_0300', 
        		sUrl: '/rest/oz/delivery/printDeliveryNoticeSkus', 
        		paramType: 'param', 
        		sParam: param
        	};
        	// trace("거래명세표 출력");
        	this.ozType.set_value('1');
        	this.ozViewer(ozParam);
        }

        this.div_search_edt_odrpl_na_trpl_c_onkeyup = function(obj,e)
        {
        	if (e.keycode == '13') {
        		var trplO = this.gfn_nullToEmpty(this.div_search.edt_odrpl_na_trpl_c.value);
        		if (this.gfn_length(trplO) < 6) {
        			alert("발주처 코드["+trplO+"] 6자리 이상 입력해 주세요");
        			return false;
        		}

        		if (trplO.length == 6) {
        			trplO = '8808983' + trplO;
        		}

        		var idx = "0";
        		var trplC = this.getTrplCode();//권한사업장
        		var oArg = {form_id:"VAN_DS_SC_0340", trplC:trplC, idx:idx, auto:"1", trplO:trplO};
        		var sOption = "autosize=true, title=false";
        		var sPopupCallBack = "fn_popupAfter";
        		this.gfn_openPopup("POPUP_TRNREL_ODRPL", "POPUP::POPUP_TRNREL_ODRPL.xfdl", oArg, sOption, sPopupCallBack);
        	}
        }

        this.div_search_edt_odrpl_na_trpl_n_onkeyup = function(obj,e)
        {
        	if (e.keycode == "13") {
        		var trplON = this.gfn_nullToEmpty(this.div_search.edt_odrpl_na_trpl_n.value);
        		if (this.gfn_length(trplON) < 3) {
        			alert("발주처명["+trplON+"] 3자리 이상 입력해 주세요");
        			return false;
        		}

        		var idx = "1";
        		var trplC = this.getTrplCode();//권한사업장
        		var oArg = {form_id:"VAN_DS_SC_0340", trplC:trplC, idx:idx, auto:"1", trplON:trplON};
        		var sOption = "autosize=true, title=false";
        		var sPopupCallBack = "fn_popupAfter";
        		this.gfn_openPopup("POPUP_TRNREL_ODRPL", "POPUP::POPUP_TRNREL_ODRPL.xfdl", oArg, sOption, sPopupCallBack);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("oninit", this.form_init, this);
            this.div_search.edt_na_wrs_c.addEventHandler("onkeyup", this.div_search_edt_na_wrs_c_onkeyup, this);
            this.div_search.edt_na_wrs_n.addEventHandler("onkeyup", this.div_search_edt_na_wrs_c_onkeyup, this);
            this.div_search.btn_pup_van_seq00.addEventHandler("onclick", this.btn_pup_van_seq_onclick, this);
            this.div_search.rdo_spypl_type.addEventHandler("onitemclick", this.div_search_rdo_spypl_type_onitemclick, this);
            this.div_search.btn_pup_deliveryNotice.addEventHandler("onclick", this.div_search_btn_pup_deliveryNotice_onclick, this);
            this.div_search.edt_odrpl_na_trpl_c.addEventHandler("onkeyup", this.div_search_edt_odrpl_na_trpl_c_onkeyup, this);
            this.div_search.edt_odrpl_na_trpl_n.addEventHandler("onkeyup", this.div_search_edt_odrpl_na_trpl_n_onkeyup, this);
            this.div_search.btn_trplO.addEventHandler("onclick", this.div_search_btn_trplO_onclick, this);
            this.div_list.addEventHandler("onsize", this.Div00_onsize, this);
            this.div_list.Button10.addEventHandler("onclick", this.div_list_btn_divResize_onclick, this);
            this.div_list.grd_master.addEventHandler("onselectchanged", this.div_list_Grid00_onselectchanged, this);
            this.div_list.btn_tr_print.addEventHandler("onclick", this.btn_tr_print_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_print.addEventHandler("onclick", this.btn_print_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0340.xfdl");
        this.loadPreloadList();
       
    };
}
)();
