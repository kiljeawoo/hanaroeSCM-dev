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
                this.set_name("frm_van_ds_sc_0840");
                this.set_titletext("주류실적 조회");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_prgr_c", this);
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

            obj = new Dataset("ds_NABizPlace", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"SHRT_BZPLNM\" type=\"string\" size=\"32\"/><Column id=\"BZPL_TPC\" type=\"string\" size=\"32\"/><Column id=\"BZPL_DTI_TPC\" type=\"string\" size=\"32\"/><Column id=\"BZPL_TPNM\" type=\"string\" size=\"32\"/><Column id=\"BZPL_DTI_TPNM\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"SHRT_BZPLNM\">-전체-</Col></Row><Row><Col id=\"NA_BZPLC\">8808983323329</Col><Col id=\"SHRT_BZPLNM\">안성농식품물류센터(a</Col></Row><Row><Col id=\"NA_BZPLC\">8808983464152</Col><Col id=\"SHRT_BZPLNM\">구매본부(옴니채널)</Col></Row><Row><Col id=\"NA_BZPLC\">8808983463674</Col><Col id=\"SHRT_BZPLNM\">농협중앙회 밀양물류</Col></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"RN\" type=\"STRING\" size=\"8\"/><Column id=\"NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"SHRT_BZPLNM\" type=\"string\" size=\"32\"/><Column id=\"NA_RGN_C\" type=\"string\" size=\"32\"/><Column id=\"RGN_CNM\" type=\"string\" size=\"32\"/><Column id=\"TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"CLNTNM\" type=\"string\" size=\"32\"/><Column id=\"WRS_C\" type=\"string\" size=\"32\"/><Column id=\"WRSNM\" type=\"string\" size=\"32\"/><Column id=\"SL_YM\" type=\"string\" size=\"32\"/><Column id=\"SQWW\" type=\"string\" size=\"32\"/><Column id=\"SL_QT\" type=\"float\" size=\"8\"/><Column id=\"BOXPE_AQZ\" type=\"float\" size=\"8\"/><Column id=\"BOX_QT\" type=\"float\" size=\"8\"/><Column id=\"PRGR_C\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_SCLC\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_DTCF_C\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_local", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_RGN_C\" type=\"string\" size=\"32\"/><Column id=\"RGN_CNM\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_local2", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_RGN_C\" type=\"string\" size=\"32\"/><Column id=\"RGN_CNM\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mrCenter", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"CLNTNM\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pageVO", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CURRENT_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_liquor_yn", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"LIQUOR_YN\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("DS_SUM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<Row><Col id=\"TOTAL_ROW_COUNT\">0</Col><Col id=\"PAGE_SIZE\">10</Col><Col id=\"CURRENT_PAGE\">1</Col></Row><ColumnInfo><Column id=\"TOTAL_SL_QT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"TOTAL_BOXPE_AQZ\" type=\"float\" size=\"8\"/><Column id=\"TOTAL_BOX_QT\" type=\"float\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "159", null, this);
            obj.set_taborder("38");
            obj.set_text("Div00");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "788", "0", "15", "490", null, null, this);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "732", "21", "56", "8", null, null, this);
            obj.set_taborder("14");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "118", null, this);
            obj.set_taborder("23");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "121", "15", null, this);
            obj.set_taborder("32");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "523", "10", "91", "21", null, null, this.div_search);
            obj.set_taborder("64");
            obj.set_text("조회구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "36", "91", "21", null, null, this.div_search);
            obj.set_taborder("65");
            obj.set_text("사업장");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "523", "36", "120", "21", null, null, this.div_search);
            obj.set_taborder("77");
            obj.set_text("경쟁사코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "411", "0", null, "95", "536", null, this.div_search);
            obj.set_taborder("80");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_search_type", "absolute", "614", "10", "121", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_search_type_innerdataset = new Dataset("rdo_search_type_innerdataset", this.div_search.rdo_search_type);
            rdo_search_type_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">자사</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">경쟁사</Col></Row></Rows>");
            obj.set_innerdataset(rdo_search_type_innerdataset);
            obj.set_taborder("83");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("3");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.set_index("0");
            obj = new Static("Static10", "absolute", "106", "83", null, "5", "790", null, this.div_search);
            obj.set_taborder("85");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "15", "62", "91", "21", null, null, this.div_search);
            obj.set_taborder("87");
            obj.set_text("상품코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "106", "109", null, "10", "790", null, this.div_search);
            obj.set_taborder("91");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("cal_month", "absolute", "225", "10", "100", "21", null, null, this.div_search);
            obj.set_taborder("101");
            obj.set_url("common::calendarMonth.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_from", "absolute", "225", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("102");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("cal_to", "absolute", "337", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("103");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Combo("cbo_srh_date_type", "absolute", "130", "10", "92", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_srh_date_type_innerdataset = new Dataset("cbo_srh_date_type_innerdataset", this.div_search.cbo_srh_date_type);
            cbo_srh_date_type_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">일별</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">월별</Col></Row></Rows>");
            obj.set_innerdataset(cbo_srh_date_type_innerdataset);
            obj.set_taborder("104");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("-1");
            obj = new Static("Static02", "absolute", "15", "10", "91", "21", null, null, this.div_search);
            obj.set_taborder("105");
            obj.set_text("일자구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_wrs_name", "absolute", "249", "62", "188", "21", null, null, this.div_search);
            obj.set_taborder("108");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_na_name", "absolute", "249", "36", "188", "21", null, null, this.div_search);
            obj.set_taborder("109");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_rgd", "absolute", "440", "36", "21", "21", null, null, this.div_search);
            obj.set_taborder("110");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_wrs", "absolute", "440", "62", "21", "21", null, null, this.div_search);
            obj.set_taborder("111");
            obj.set_cssclass("btn_WF_Searchbtn");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_nacode00", "absolute", "464", "36", "48", "21", null, null, this.div_search);
            obj.set_taborder("112");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "15", "88", "130", "21", null, null, this.div_search);
            obj.set_taborder("113");
            obj.set_text("지역코드(발주처)");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "523", "88", "76", "21", null, null, this.div_search);
            obj.set_taborder("114");
            obj.set_text("가격군");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "523", "62", "91", "21", null, null, this.div_search);
            obj.set_taborder("115");
            obj.set_text("본지점포함");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_prgr_c", "absolute", "614", "88", "121", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("116");
            obj.set_innerdataset("ds_prgr_c");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj = new Radio("rdo_mbco_type", "absolute", "614", "62", "121", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_mbco_type_innerdataset = new Dataset("rdo_mbco_type_innerdataset", this.div_search.rdo_mbco_type);
            rdo_mbco_type_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">본사</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">지사</Col></Row></Rows>");
            obj.set_innerdataset(rdo_mbco_type_innerdataset);
            obj.set_taborder("117");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("0");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Combo("cbo_mr_center", "absolute", "614", "36", "121", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("118");
            obj.set_enable("false");
            obj.set_codecolumn("NA_TRPL_C");
            obj.set_datacolumn("CLNTNM");
            obj.set_value("222");
            obj.set_text("222");
            obj.set_innerdataset("@ds_mrCenter");
            obj.set_index("0");
            obj = new Combo("cbo_weak", "absolute", "337", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_weak_innerdataset = new Dataset("cbo_weak_innerdataset", this.div_search.cbo_weak);
            cbo_weak_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">0주</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1주</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2주</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3주</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4주</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5주</Col></Row></Rows>");
            obj.set_innerdataset(cbo_weak_innerdataset);
            obj.set_taborder("119");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_visible("false");
            obj.set_index("-1");
            obj = new Static("sta_date", "absolute", "326", "10", "11", "21", null, null, this.div_search);
            obj.set_taborder("120");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_na_rgn_c", "absolute", "130", "88", "92", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("121");
            obj.set_enable("true");
            obj.set_innerdataset("@ds_local");
            obj.set_datacolumn("RGN_CNM");
            obj.set_codecolumn("NA_RGN_C");
            obj.set_index("-1");
            obj = new Combo("cbo_na_rgn_c2", "absolute", "225", "88", "151", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("122");
            obj.set_codecolumn("NA_RGN_C");
            obj.set_datacolumn("RGN_CNM");
            obj.set_innerdataset("@ds_local2");
            obj = new Edit("msk_na_code", "absolute", "130", "36", "116", "21", null, null, this.div_search);
            obj.set_taborder("123");
            obj.set_maxlength("13");
            obj.set_inputtype("number");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("msk_wrs_code", "absolute", "130", "62", "116", "21", null, null, this.div_search);
            obj.set_taborder("124");
            obj.set_maxlength("25");
            obj.set_inputtype("number");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "199", "30", null, "10", "494", null, this);
            obj.set_taborder("33");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "1", "30", null, "95", "977", null, this);
            obj.set_taborder("36");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "36", "408", null, this);
            obj.set_taborder("37");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "149", null, null, "15", "0", this);
            obj.set_taborder("0");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btn_divResize", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_master", "absolute", "0", "42", null, null, "0", "49", this.div_list);
            obj.set_taborder("24");
            obj.set_binddataset("ds_dataM");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"113\"/><Column size=\"173\"/><Column size=\"90\"/><Column size=\"91\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"220\"/><Column size=\"76\"/><Column size=\"77\"/><Column size=\"78\"/><Column size=\"79\"/><Column size=\"80\"/><Column size=\"81\"/><Column size=\"82\"/><Column size=\"83\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"사업장코드\"/><Cell col=\"2\" text=\"사업장명\"/><Cell col=\"3\" text=\"지역코드\"/><Cell col=\"4\" text=\"지역명\"/><Cell col=\"5\" text=\"거래처코드\"/><Cell col=\"6\" text=\"거래처코드명\"/><Cell col=\"7\" text=\"상품코드\"/><Cell col=\"8\" text=\"상품코드명\"/><Cell col=\"9\" text=\"거래년월\"/><Cell col=\"10\" text=\"거래주수\"/><Cell col=\"11\" text=\"판매수량\"/><Cell col=\"12\" text=\"박스당입수\"/><Cell col=\"13\" text=\"박스수량\"/><Cell col=\"14\" text=\"가격군\"/><Cell col=\"15\" text=\"소분류\"/><Cell col=\"16\" text=\"세분류\"/></Band><Band id=\"body\"><Cell text=\"bind:RN\"/><Cell col=\"1\" text=\"bind:NA_BZPLC\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:SHRT_BZPLNM\"/><Cell col=\"3\" text=\"bind:NA_RGN_C\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:RGN_CNM\"/><Cell col=\"5\" text=\"bind:TRPL_C\"/><Cell col=\"6\" style=\"align:left;\" text=\"bind:CLNTNM\"/><Cell col=\"7\" text=\"bind:WRS_C\"/><Cell col=\"8\" style=\"align:left;\" text=\"bind:WRSNM\"/><Cell col=\"9\" text=\"bind:SL_YM\"/><Cell col=\"10\" text=\"bind:SQWW\"/><Cell col=\"11\" style=\"align:right;\" text=\"bind:SL_QT\"/><Cell col=\"12\" style=\"align:right;\" text=\"bind:BOXPE_AQZ\"/><Cell col=\"13\" style=\"align:right;\" text=\"bind:BOX_QT\"/><Cell col=\"14\" text=\"bind:PRGR_C\"/><Cell col=\"15\" text=\"bind:NA_WRS_SCLC\"/><Cell col=\"16\" text=\"bind:NA_WRS_DTCF_C\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" style=\"align:center;\" text=\"합계\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\" displaytype=\"number\" expr=\"expr:dataset.getSum('SL_QT')\" mask=\"###,##0\"/><Cell col=\"12\" displaytype=\"number\" expr=\"expr:dataset.getSum('BOXPE_AQZ')\" mask=\"###,##0\"/><Cell col=\"13\" displaytype=\"number\" expr=\"expr:dataset.getSum('BOX_QT')\" mask=\"###,##0.00\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", null, "16", "41", "21", "0", null, this.div_list);
            obj.set_taborder("33");
            obj.set_text("엑셀");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "675", "1", null, "15", "-7", null, this.div_list);
            obj.set_taborder("36");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "653", "37", null, "5", "0", null, this.div_list);
            obj.set_taborder("37");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new WebBrowser("web_downExcel", "absolute", "525", "11", "59", "21", null, null, this.div_list);
            obj.set_taborder("38");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_page", "absolute", "28.55%", null, "338", "44", null, "5", this.div_list);
            obj.set_taborder("39");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list.addChild(obj.name, obj);

            obj = new Button("btn_print", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("39");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 121, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("32");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 978, 800, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div02");
            		p.set_scrollbars("none");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("주류실적 조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::AuthorityWorkplace.xfdl");
            this._addPreloadList("fdl", "common::calendarMonth.xfdl");
            this._addPreloadList("fdl", "common::location.xfdl");
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_0840.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0840.xfdl", function() {
        //include "lib::comLib.xjs";

        var closeCheck = false;

        /* form load */
        this.form_onload = function(obj,e)
        {	
        	//세션 gnl코드로 주류업체 체크
        	this.fn_getLiquorYn();
        	if(!closeCheck){
        		this.gfn_getMessage("alert", "msg.van_ds_sc_0840.view.liquorYn");
        		application.afrm_FrameSet.frames['02002007'].form.close();
        		return;
        	}
        	
        	this.gfn_setInitForm(obj,e);
        		
        	var param = [  
         		{code:"QSLPR_TPC",   dsName:"ds_prgr_c",   selecttype:"A"}
            ];
            
        	this.gfn_setCommonCode(param);	
        	
        }

        /* Form Init*/
        this.form_init = function(obj,e)
        {
        }

        //공통코드 데이터셋 onload후 호출할 함수
        this.fn_commonAfterOnload= function()
        {	
        	this.div_search.cbo_prgr_c.set_index(0);
        	this.div_search.cbo_weak.set_index(0);
        	this.div_search.cbo_srh_date_type.set_index(0);
        	
        	
        }

        /* 페이지 로딩후 실행부분 */
        this.fn_afterFormOnload = function()
        {		
        	// 그리드 내 조회 데이터가 없습니다.
        	this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));	

        	//trace("gv_userKey --->"+application.gv_userKey);
        	//trace("gv_userName --->"+application.gv_userName);
        	//trace("gv_userId --->"+application.gv_userId);
        	

        	//일별 데이터 설정
        	this.div_search.cal_from.set_value(this.gfn_minusDate(this.gfn_today("yyyyMMdd"),7));	
        	this.div_search.cal_to.set_value(this.gfn_today("yyyyMMdd"));
        	
        	this.div_search.cbo_mr_center.set_value('');
        	
        	//월 숨기기
        	this.div_search.cal_month.set_visible(false);
        	
        	//주 숨기기
        	this.div_search.cbo_weak.set_visible(false);
        	
        	//지역코드 셋팅
        	this.fn_localList();
        }

        
        /*농협사업장 조회*/
        this.fn_getNABizPlace = function(v_nacode){
        	
        	var nacode = v_nacode;
        	var search_type = "default";
        	
        	var param = "search_type="+search_type+
        				" splr_na_trpl_c="+nacode;
        	
        	trace("##### fn_getNABizPlace PARAM ################"+param);
        		
        	var sSvcID        = "getNABizPlace";//통신아이디
        	var sURL          = "svc::rest/common/getNABizPlace";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_NABizPlace=data";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);

        }

        /*주류업체 여부 체크 */
        this.fn_getLiquorYn = function(){

        	var sSvcID        = "getLiquorYn";//통신아이디
        	var sURL          = "svc::rest/pds/getLiquorYn";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_liquor_yn=DATASET";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = "";// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType,true);
        }

        
        /* Validation Check */
        this.fn_validationCheck = function(){

        	if(this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value) < 0){
        	
        		//조회 시작일과 종료일을 다시 확인해 주세요
        		this.gfn_getMessage("alert", "validation.message.fromDate.toDate.reConfirm");
        		return false;
        	}else{
        		if(this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value) > 31){

        		//기간을 31일 이내로 선택해 주세요
        		this.gfn_getMessage("alert", "validation.message.selectDateIn31Day");
        		return false;
        		}
        	}
        	
        	if(this.div_search.rdo_search_type.value == '4'){
        		if(this.gfn_isNull(this.div_search.cbo_mr_center.value)){
        			//경쟁사코드를 선택하세요
        			this.gfn_getMessage("alert", "msg.van_ds_sc_0840.view.search.validation.mr_center");
        			return false;
        		}
        	}
        		
        	
        	return true;
        }

        
        this.fn_search = function(){
        	
        	this.ds_dataM.clearData();	
        	
        	if(this.fn_validationCheck()){
        		
        	var trplC = this.getTrplCode();
        	
        	var search_type = this.gfn_nullToEmpty(this.div_search.rdo_search_type.value); //조회구분 (자사:3, 경쟁사:4)
        	var mbco_type = this.gfn_nullToEmpty(this.div_search.rdo_mbco_type.value); //본지점포함 (본사:0, 지사:1)
        	
        	if(application.gv_mbcoType == '1') //1:본사 2:지사
        	{
        		var authorityCode = this.gfn_nullToEmpty(this.div_auth.cbo_authorityWorkplace.value); //권한사업장 코드
        	}
        	
        	var srh_date_type = this.gfn_nullToEmpty(this.div_search.cbo_srh_date_type.value); //일자구분	
        	/*일별*/
        	var from_date = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        	var to_date = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일
        	/*월별*/
        	var srh_month = this.gfn_nullToEmpty(this.div_search.cal_month._getValue()); //월 조회	
        	/*주별*/
        	var srh_weak =this.gfn_nullToEmpty(this.div_search.cbo_weak.value); //주 조회
        	var prgr_c = this.gfn_nullToEmpty(this.div_search.cbo_prgr_c.value); //가격군코드
        	
        	var na_code = this.gfn_nullToEmpty(this.div_search.msk_na_code.value); //농협사업장코드
        	var wrs_code = this.gfn_nullToEmpty(this.div_search.msk_wrs_code.value); //상품코드
        		
        	var mr_center = this.gfn_nullToEmpty(this.div_search.cbo_mr_center.value); //경쟁사코드
        	var na_rgn_c = this.gfn_nullToEmpty(this.div_search.cbo_na_rgn_c.value); //지역코드	
        	var na_rgn_c2 = this.gfn_nullToEmpty(this.div_search.cbo_na_rgn_c2.value); //지역코드2	
        		
        	var param =	"search_type="+search_type+
        				" mbco_type="+mbco_type+
        				" authorityCode="+authorityCode+
        				" srh_date_type="+srh_date_type+
        				" from_date="+from_date+
        				" to_date="+to_date+
        				" srh_month="+srh_month+
        				" srh_weak="+srh_weak+
        				" prgr_c="+prgr_c+				
        				" na_code="+na_code+
        				" wrs_code="+wrs_code+				
        				" mr_center="+mr_center+
        				" na_rgn_c="+na_rgn_c+
        				" na_rgn_c2="+na_rgn_c2+
        				" TRPL_C=" + trplC;
        				
        	trace("##MASTER##PARAM##->"+param);	
        	
        	var sSvcID        = "retrieveSalesLiquorList";//통신아이디
        	var sURL          = "svc::rest/pds/retrieveSalesLiquorList";// 호출할 서버 페이지 주소
        	
        	//var sInDatasets   = "ds_pageVO=ds_pageVO";//보내는데이터셋
        	//var sOutDatasets  = "ds_dataM=ds_dataM ds_pageVO=ds_pageVO DS_SUM=DS_SUM";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_dataM=ds_dataM";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	
        	
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}

        }

        

        
        /* search */
        this.btn_search_onclick = function(obj,e)
        {
        	//this.fn_paging(1);// 처음조회시 1페이지를 조회한다.	
        	this.fn_search();
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", errMsg);
        		return;
        	}else{
        		if(svcID == "retrieveSalesLiquorList"){						
        			if(this.ds_dataM.rowcount > 0){
        				
        				this.ds_dataM.set_rowposition(1);
        				this.ds_dataM.set_rowposition(0);
        				
        				// 페이지 셋팅
        				/*
        				var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        				var sPagesize = this.ds_pageVO.getColumn(0, "PAGE_SIZE");
        				
        				trace("sTotal : " + sTotal);
        				trace("sPagesize : " + sPagesize);				

        				this.div_list.div_page.fn_pageSet(sTotal, sPagesize,"grd_master,div_page",lsNowPage);
        				*/
        				
        				
        				//this.div_list.grd_master.setCellProperty("Summ",1,"text",this.ds_dataTotal.getColumn(0,"TOTAL_SL_QT"));
        				//this.div_list.grd_master.setCellProperty("Summ",2,"text",this.ds_dataTotal.getColumn(0,"TOTAL_BOXPE_AQZ"));
        				//this.div_list.grd_master.setCellProperty("Summ",3,"text",this.ds_dataTotal.getColumn(0,"TOTAL_BOX_QT"));
            
        			}else{	
        				//this.div_list.div_page.fn_pageSet(0, 0,"grd_master,div_page",lsNowPage);//페이징 설정
        			}			
        		}else if(svcID == "retrieveAffSsdyDetailList") {
        			if(this.ds_paymentAffSsdyD.rowcount == 0){				
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");								
        			}
        		}else if(svcID == "getNABizPlace") {
        			
        			if(this.ds_NABizPlace.rowcount != 0){
        			if (this.ds_NABizPlace.insertRow(0) != -1){
        				this.ds_NABizPlace.setColumn(0,"NA_BZPLC","");
        				this.ds_NABizPlace.setColumn(0,"SHRT_BZPLNM","- 전체 -");
        				};
        			this.div_search.cbo_nacode.set_index(0);
        			}
        		}else if(svcID == "retrieveRgnCList") {
        			if (this.ds_local.insertRow(0) != -1){
        				this.ds_local.setColumn(0,"NA_RGN_C","");
        				this.ds_local.setColumn(0,"RGN_CNM","해당없음");
        				};
        			this.div_search.cbo_na_rgn_c.set_index(0);
        			
        		}else if(svcID == "retrieveRgnC2List") {
        								
        			if(this.ds_local2.rowcount != 0){  
        				if (this.ds_local2.insertRow(0) != -1){
        					this.ds_local2.setColumn(0,"NA_RGN_C","");
        					this.ds_local2.setColumn(0,"RGN_CNM","- 전체 -");
        					};
        				this.div_search.cbo_na_rgn_c2.set_index(0);
        			}			
        			
        		}else if(svcID == "retrieveMrCenterList") {			
        			
        			this.div_search.cbo_mr_center.set_index(0);
        			
        			if(this.ds_mrCenter.rowcount != 0){			
        				for (var i=0; i < this.ds_mrCenter.rowcount ;i++)			
        				{				  
        					this.ds_mrCenter.setColumn(i,"CLNTNM","["+this.ds_mrCenter.getColumn(i,0)+"] "+this.ds_mrCenter.getColumn(i,1));
        				}	
        			}
        			
        		}else if(svcID == "getLiquorYn") {
        			
        			trace(this.ds_liquor_yn.getColumn(0, "LIQUOR_YN"));			
        			//주류업체 권한 체크
        			if ( this.ds_liquor_yn.getColumn(0, "LIQUOR_YN") == "0" ) {
        				//alert("거래처관리_거래처별가격군기본["+this.ds_liquor_yn.getColumn(0, "LIQUOR_YN")+"]인 경우만 사용가능합니다.");
        				//주류업체만 가능합니다.				
        				closeCheck = false;
        			}else{
        				closeCheck = true;
        			}
        		}	
        		
        	}
        }

        /*일자구분 초기화*/
        this.dateInit = function(){

        	this.div_search.cal_from.set_value('');	
        	this.div_search.cal_to.set_value('');
        	this.div_search.cal_month._setValue('');
        	this.div_search.cbo_weak.set_value('');
        }

        this.div_search_cbo_srh_date_type_onitemchanged = function(obj,e)
        {
        	this.dateInit();
        	
        	if(this.div_search.cbo_srh_date_type.value == 1){
        		//일별
        		this.div_search.cal_from.set_visible(true);
        		this.div_search.sta_date.set_visible(true);
        		this.div_search.cal_to.set_visible(true);
        		
        		this.div_search.cal_month.set_visible(false);
        		this.div_search.cbo_weak.set_visible(false);
        		
        		this.div_search.cal_from.set_value(this.gfn_today("yyyyMMdd"));	
        		this.div_search.cal_to.set_value(this.gfn_today("yyyyMMdd"));
        	}else if(this.div_search.cbo_srh_date_type.value == 2){
        		//월별
        		this.div_search.cal_from.set_visible(false);
        		this.div_search.sta_date.set_visible(false);
        		this.div_search.cal_to.set_visible(false);		
        		
        		this.div_search.cal_month.set_visible(true);
        		this.div_search.cbo_weak.set_visible(false);
        		
        		this.div_search.cal_month._setValue(this.gfn_today("yyyyMM"));
        	}else{
        		/*
        		//주별
        		this.div_search.cal_from.set_visible(false);
        		this.div_search.sta_date.set_visible(false);
        		this.div_search.cal_to.set_visible(false);		
        		this.div_search.cal_month.set_visible(false);
        		
        		this.div_search.cbo_weak.set_visible(true);		
        		*/
        	}
        }

        /* 조회구분 선택시 */
        this.div_search_rdo_search_type_onitemchanged = function(obj,e)
        {	
        	
        	if(this.div_search.rdo_search_type.value == 3){
        		//자사선택		
        		
        		//경쟁사코드 disable
        		this.div_search.cbo_mr_center.set_enable(false);
        		this.div_search.cbo_mr_center.set_value('');
        		
        	}else if(this.div_search.rdo_search_type.value == 4){
        		//경쟁사선택
        		
        		//경쟁사코드 enable
        		this.div_search.cbo_mr_center.set_enable(true);
        		this.fn_mrCenterList();
        	}else{
        		
        	}
        }

        /*
         * 경쟁사코드 
         */
        this.onMbcoDscChange = function(){

            if(keyFrm.ds_view.value == "4"){
                keyFrm.mr_center.setAttribute('disabled', false);
                fDynComboClear(keyFrm.mr_center);
                if(keyFrm.mbco_dsc_2[0].checked == true){
                  sDynparam = makeParameter("본사코드","","","","","","","","","");
                  
                }else{
                  sDynparam = makeParameter("지사포함코드","","","","","","","","","");
                }
              fDynComboG(keyFrm.mr_center,'DPON2733R1', sDynparam, 1, 0, 1, 0, "", "선택");
            }
        }

        
        /*
        var mbco_type = this.gfn_nullToEmpty(this.div_search.rdo_mbco_type.value); //본지점포함
        " mbco_type="+mbco_type+
        */

        /* 지역코드 가져오기*/
        this.fn_localList = function(){
        	
        	var sSvcID        = "retrieveRgnCList";//통신아이디
        	var sURL          = "svc::rest/pds/retrieveRgnCList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_local=ds_dataM";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = "";// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        
        this.div_search_cbo_na_rgn_c_onitemchanged = function(obj,e)
        {	
        	if(this.div_search.cbo_na_rgn_c.value != ''){
        	
        		var na_rgn_c = this.gfn_nullToEmpty(this.div_search.cbo_na_rgn_c.value); //지역코드
        		
        		var param = "na_rgn_c="+na_rgn_c;

        		var sSvcID        = "retrieveRgnC2List";//통신아이디
        		var sURL          = "svc::rest/pds/retrieveRgnC2List";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_local2=ds_dataM";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = param;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        			
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}else{
        		this.ds_local2.clearData();
        		this.div_search.cbo_na_rgn_c2.value = "";
        	}
        }

        /* 경쟁사코드 가져오기*/
        this.fn_mrCenterList = function(){
        	
        	var mbco_type = this.gfn_nullToEmpty(this.div_search.rdo_mbco_type.value); //본지점포함
        			
        	var param = "mbco_type="+mbco_type;

        	var sSvcID        = "retrieveMrCenterList";//통신아이디
        	var sURL          = "svc::rest/pds/retrieveMrCenterList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_mrCenter=ds_dataM";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.div_search_rdo_mbco_type_onitemchanged = function(obj,e)
        {
        	if(this.div_search.rdo_search_type.value == 4){
        		//경쟁사선택	
        		this.fn_mrCenterList();
        	}
        }

        this.div_list_btn_divResize_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        /* 농협사업장 돋보기 클릭시*/
        this.div_search_btn_rgd_onclick = function(params)
        {
        	var param = {
        				autoType:params,
        				searchCode:this.div_search.msk_na_code.value,
        				searchText:this.div_search.edt_na_name.value
        	};
        	
        	trace("=================");
        	trace("팝업의 파라미터");
        	trace("오토타입  --> " + params);	
        	trace("=================");	
        	
        	if(typeof params == "boolean"){
        		if(!this.searPopValue(param)){return};
        	}
        	
        	//수요처
        	var oArg = {autoPop:param};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("POPUP_SRC_RVOPL_TRPL","POPUP::POPUP_SRC_RVOPL_TRPL.xfdl",oArg,sOption,sPopupCallBack);
        }

        /* 상품코드 돋보기 클릭시*/
        this.div_search_btn_wrs_onclick = function(params)
        {
        	var param = {
        				autoType:params,
        				searchCode:this.div_search.msk_wrs_code.value,
        				searchText:this.div_search.edt_wrs_name.value
        	};
        	if(typeof params == "boolean"){
        		if(!this.searPopValue(param)){return};
        	}
        	
        	var oArg = {autoPop:param};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("POPUP_SRC_WRS","POPUP::POPUP_SRC_WRS.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.fn_popupAfter = function(strId,strVal)
        {	
        	trace(" strId : " + strId + " strVal : " + strVal);
        		
        	
        	if(strId == 'POPUP_SRC_RVOPL_TRPL' && strVal != null){
        		//농협사업장
        		var strValNo = strVal.split(',');		
        		this.div_search.msk_na_code.set_value(strValNo[0]); //수요처코드
        		this.div_search.edt_na_name.set_value(strValNo[1]); //수요처명
        		//this.div_search.edt_nacode00.set_value(strValNo[2]); //수요처팀코드			
        	}else if(strId == 'POPUP_SRC_WRS' && strVal != null){		
        		var strValNo = strVal.split(',');
        		this.div_search.msk_wrs_code.set_value(strValNo[0]); //상품코드
        		this.div_search.edt_wrs_name.set_value(strValNo[1]); //상품명
        	}	
        }

        this.div_list_grd_master_onheadclick = function(obj,e)
        {
        	
        		this.gfn_gridSort(obj,e);
        	
        }

        this.btn_excel_onclick = function(obj,e)
        {
        	
        	if(!this.fn_validationCheck()) return;
        	
        	var trplC = this.getTrplCode();
        	
        	var search_type = this.gfn_nullToEmpty(this.div_search.rdo_search_type.value); //조회구분 (자사:3, 경쟁사:4)
        	var mbco_type = this.gfn_nullToEmpty(this.div_search.rdo_mbco_type.value); //본지점포함 (본사:0, 지사:1)
        	
        	var srh_date_type = this.gfn_nullToEmpty(this.div_search.cbo_srh_date_type.value); //일자구분	
        	/*일별*/
        	var from_date = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        	var to_date = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일
        	/*월별*/
        	var srh_month = this.gfn_nullToEmpty(this.div_search.cal_month._getValue()); //월 조회	
        	/*주별*/
        	var srh_weak =this.gfn_nullToEmpty(this.div_search.cbo_weak.value); //주 조회
        	var prgr_c = this.gfn_nullToEmpty(this.div_search.cbo_prgr_c.value); //가격군코드
        	
        	var na_code = this.gfn_nullToEmpty(this.div_search.msk_na_code.value); //농협사업장코드
        	var wrs_code = this.gfn_nullToEmpty(this.div_search.msk_wrs_code.value); //상품코드
        		
        	var mr_center = this.gfn_nullToEmpty(this.div_search.cbo_mr_center.value); //경쟁사코드
        	var na_rgn_c = this.gfn_nullToEmpty(this.div_search.cbo_na_rgn_c.value); //지역코드	
        	var na_rgn_c2 = this.gfn_nullToEmpty(this.div_search.cbo_na_rgn_c2.value); //지역코드2	
        	
        	var title = '판매정보_'+this.parent.sNm;
        	title = title.replace(/ /gi, '');
        	var fileName = title + "_" + this.getDate() + ".xls";
        	
        	var param = "search_type="+search_type+
        				"&mbco_type="+mbco_type+
        				"&srh_date_type="+srh_date_type+
        				"&from_date="+from_date+
        				"&to_date="+to_date+
        				"&srh_month="+srh_month+
        				"&srh_weak="+srh_weak+
        				"&prgr_c="+prgr_c+				
        				"&na_code="+na_code+
        				"&wrs_code="+wrs_code+				
        				"&mr_center="+mr_center+
        				"&na_rgn_c="+na_rgn_c+
        				"&na_rgn_c2="+na_rgn_c2+
        				"&TRPL_C=" + trplC+
        				"&fileName=" + fileName;		

        	trace(">>>>>>> params : " +  param);
        	
        	param = encodeURI(encodeURI(param));
        	
        	//this.div_list.web_downExcel.set_url(application.gv_server_url+"rest/excel/downloadExcelSalesLiquorList?"+param);
        	excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelSalesLiquorList?"+param, this);
        }

        /*-----------------------------------------------------------------------------------------*/
        // 페이징처리
        /*-----------------------------------------------------------------------------------------*/
        this.fn_paging = function(vPageNum)
        { 	  	 
        	this.ds_pageVO.clearData();  
        	this.ds_dataM.clearData();     //Grid에 Binding된 Dataset명	
        	
        	this.ds_pageVO.addRow(); 
        	
        	var vPageSize   = 10; 	//Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
        	var vTotalCount = 1; 	//전체건수. 화면조회후 리턴받아 사용
         	this.ds_pageVO.setColumn(0,"CURRENT_PAGE",vPageNum); //현재 페이지
         	this.ds_pageVO.setColumn(0,"PAGE_SIZE",vPageSize);
         	this.ds_pageVO.setColumn(0,"TOTAL_ROW_COUNT",vTotalCount);
        	 
        	var argumentObj = "";
        	
        	lsNowPage = vPageNum;//현재페이지 설정 
        	
        	this.fn_search();
         
        }

        

        this.div_list_onsize = function(obj,e)
        {
        	/* 페이지 숫자 위치 설정*/
        	
        	trace("div_list_onsize");
        	var nLeft = (e.cx/2)-(this.div_list.div_page.width/2);
        	this.div_list.div_page.set_left(nLeft);
        	
        }

        
        /* 출력 버튼 */
        this.btn_print_onclick = function(obj,e)
        {
        	
        	var search_type = this.gfn_nullToEmpty(this.div_search.rdo_search_type.value); //조회구분 (자사:3, 경쟁사:4)
        	var mbco_type = this.gfn_nullToEmpty(this.div_search.rdo_mbco_type.value); //본지점포함 (본사:0, 지사:1)
        	
        	var srh_date_type = this.gfn_nullToEmpty(this.div_search.cbo_srh_date_type.value); //일자구분	
        	var srh_date_type_text = this.gfn_nullToEmpty(this.div_search.cbo_srh_date_type.text); //일자구분_text
        		
        	/*일별*/
        	var from_date = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        	var to_date = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일
        	/*월별*/
        	var srh_month = this.gfn_nullToEmpty(this.div_search.cal_month._getValue()); //월 조회	
        	/*주별*/
        	var srh_weak =this.gfn_nullToEmpty(this.div_search.cbo_weak.value); //주 조회

        	var prgr_c = this.gfn_nullToEmpty(this.div_search.cbo_prgr_c.value); //가격군코드
        	var prgr_c_text = this.gfn_nullToEmpty(this.div_search.cbo_prgr_c.text); //가격군코드_text
        	
        	var na_code = this.gfn_nullToEmpty(this.div_search.msk_na_code.value); //농협사업장코드
        	var wrs_code = this.gfn_nullToEmpty(this.div_search.msk_wrs_code.value); //상품코드
        		
        	var mr_center = this.gfn_nullToEmpty(this.div_search.cbo_mr_center.value); //경쟁사코드
        	var mr_center_text = this.gfn_nullToEmpty(this.div_search.cbo_mr_center.text); //경쟁사코드_text
        	
        	var na_rgn_c = this.gfn_nullToEmpty(this.div_search.cbo_na_rgn_c.value); //지역코드
        	var na_rgn_c_text = this.gfn_nullToEmpty(this.div_search.cbo_na_rgn_c.text); //지역코드_text
        	
        	var na_rgn_c2 = this.gfn_nullToEmpty(this.div_search.cbo_na_rgn_c2.value); //지역코드2
        	var na_rgn_c2_text = this.gfn_nullToEmpty(this.div_search.cbo_na_rgn_c2.text); //지역코드2_text
        		
        	var param = {
        	TRPL_C:this.getTrplCode(),
        	TRPL_C_TEXT:this.getTrplCodePrint(),
        	search_type:search_type,
        	mbco_type:mbco_type,
        	srh_date_type:srh_date_type,
        	srh_date_type_text:srh_date_type_text,
        	from_date:from_date,
        	to_date:to_date,
        	srh_month:srh_month,
        	srh_weak:srh_weak,
        	prgr_c:prgr_c,
        	prgr_c_text:prgr_c_text,
        	na_code:na_code,
        	wrs_code:wrs_code,
        	mr_center:mr_center,
        	mr_center_text:mr_center_text,
        	na_rgn_c:na_rgn_c,
        	na_rgn_c_text:na_rgn_c_text,
        	na_rgn_c2:na_rgn_c2,
        	na_rgn_c2_text:na_rgn_c2_text
        	}
        	var ozParam = {
        	sId: 'VAN_DS_SC_0840',
        	sUrl: '/rest/oz/pds/retrieveSalesLiquorList',
        	paramType: 'param',
        	sParam: param
        	};
        	this.ozViewer(ozParam);
        }

        this.div_search_msk_na_code_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.div_search_btn_rgd_onclick(true);
        	}
        }

        
        this.div_search_edt_rgd_name_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.div_search_btn_rgd_onclick(true);
        	}
        }

        this.div_search_msk_wrs_code_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.div_search_btn_wrs_onclick(true);
        	}	
        }

        
        this.div_search_edt_wrs_name_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.div_search_btn_wrs_onclick(true);
        	}	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_dataM.addEventHandler("onrowposchanged", this.ds_etcCaAsetM_onrowposchanged, this);
            this.addEventHandler("oninit", this.form_init, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.div_search.rdo_search_type.addEventHandler("onitemchanged", this.div_search_rdo_search_type_onitemchanged, this);
            this.div_search.cbo_srh_date_type.addEventHandler("onitemchanged", this.div_search_cbo_srh_date_type_onitemchanged, this);
            this.div_search.edt_wrs_name.addEventHandler("onkeydown", this.div_search_edt_wrs_name_onkeydown, this);
            this.div_search.edt_na_name.addEventHandler("onkeydown", this.div_search_edt_rgd_name_onkeydown, this);
            this.div_search.btn_rgd.addEventHandler("onclick", this.div_search_btn_rgd_onclick, this);
            this.div_search.btn_wrs.addEventHandler("onclick", this.div_search_btn_wrs_onclick, this);
            this.div_search.rdo_mbco_type.addEventHandler("onitemclick", this.div_search_rdo_search_type_onitemclick, this);
            this.div_search.rdo_mbco_type.addEventHandler("onitemchanged", this.div_search_rdo_mbco_type_onitemchanged, this);
            this.div_search.cbo_na_rgn_c.addEventHandler("onitemchanged", this.div_search_cbo_na_rgn_c_onitemchanged, this);
            this.div_search.msk_na_code.addEventHandler("onkeydown", this.div_search_msk_na_code_onkeydown, this);
            this.div_search.msk_wrs_code.addEventHandler("onkeydown", this.div_search_msk_wrs_code_onkeydown, this);
            this.div_list.addEventHandler("onsize", this.div_list_onsize, this);
            this.div_list.btn_divResize.addEventHandler("onclick", this.div_list_btn_divResize_onclick, this);
            this.div_list.grd_master.addEventHandler("onheadclick", this.div_list_grd_master_onheadclick, this);
            this.btn_print.addEventHandler("onclick", this.btn_print_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0840.xfdl");
        this.loadPreloadList();
       
    };
}
)();
