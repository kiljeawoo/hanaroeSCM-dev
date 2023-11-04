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
                this.set_name("OMG_DS_TX_7001");
                this.set_titletext("마감간소화(관리자)");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_simplify", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CRT_YM\" type=\"STRING\" size=\"256\"/><Column id=\"PBC_SQNO\" type=\"string\" size=\"32\"/><Column id=\"SLP_VAT\" type=\"string\" size=\"32\"/><Column id=\"TAX_SPRTT\" type=\"STRING\" size=\"256\"/><Column id=\"TAX_TXA_TT\" type=\"STRING\" size=\"256\"/><Column id=\"TAX_TOT_AM\" type=\"string\" size=\"32\"/><Column id=\"SLP_BYAM\" type=\"string\" size=\"32\"/><Column id=\"NA_TOT_DSC\" type=\"string\" size=\"32\"/><Column id=\"TXT_DSC\" type=\"string\" size=\"32\"/><Column id=\"TXBIL_KD\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_KDNM\" type=\"string\" size=\"32\"/><Column id=\"NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"NA_BZPLNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_BZNO\" type=\"string\" size=\"32\"/><Column id=\"NA_TOT_DSNM\" type=\"string\" size=\"32\"/><Column id=\"EQ_YN\" type=\"string\" size=\"32\"/><Column id=\"RN\" type=\"string\" size=\"32\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPLNM\" type=\"string\" size=\"32\"/><Column id=\"SLP_TOT_AM\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_combo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_TCP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CURRENT_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TOTAL_ROW_COUNT\">13</Col><Col id=\"PAGE_SIZE\">10</Col><Col id=\"CURRENT_PAGE\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_combo2", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_TCP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_condition", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CRT_YM\" type=\"STRING\" size=\"256\"/><Column id=\"EQUAL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_KD\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"TXT_DSC\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"EQUAL_YN\">all</Col><Col id=\"BZPLC_TPC\">all</Col><Col id=\"TXT_DSC\">all</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_summary", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"STRING\" size=\"256\"/><Column id=\"SLP_BYAM\" type=\"STRING\" size=\"256\"/><Column id=\"SLP_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"SLP_TOT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"TAX_TOT_AM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_simplify_temp", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CRT_YM\" type=\"STRING\" size=\"256\"/><Column id=\"PBC_SQNO\" type=\"string\" size=\"32\"/><Column id=\"SLP_VAT\" type=\"string\" size=\"32\"/><Column id=\"TAX_SPRTT\" type=\"STRING\" size=\"256\"/><Column id=\"TAX_TXA_TT\" type=\"STRING\" size=\"256\"/><Column id=\"TAX_TOT_AM\" type=\"string\" size=\"32\"/><Column id=\"SLP_BYAM\" type=\"string\" size=\"32\"/><Column id=\"NA_TOT_DSC\" type=\"string\" size=\"32\"/><Column id=\"TXT_DSC\" type=\"string\" size=\"32\"/><Column id=\"TXBIL_KD\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_KDNM\" type=\"string\" size=\"32\"/><Column id=\"NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"NA_BZPLNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_BZNO\" type=\"string\" size=\"32\"/><Column id=\"NA_TOT_DSNM\" type=\"string\" size=\"32\"/><Column id=\"EQ_YN\" type=\"string\" size=\"32\"/><Column id=\"RN\" type=\"string\" size=\"32\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPLNM\" type=\"string\" size=\"32\"/><Column id=\"SLP_TOT_AM\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_summary2", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"SLP_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"LINE_CN\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_SZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "118", null, this);
            obj.set_taborder("10");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "70", "15", null, this);
            obj.set_taborder("5");
            obj.set_scrollbars("none");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Edit("edt_bzplc", "absolute", "211", "36", "100", "21", null, null, this.div_search);
            obj.set_taborder("4");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("13");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", "127", "21", null, null, this.div_search);
            obj.set_taborder("10");
            obj.set_text("거래월");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "36", "103", "21", null, null, this.div_search);
            obj.set_taborder("11");
            obj.set_text("사업장");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup", "absolute", "501", "36", "21", "21", null, null, this.div_search);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_Searchbtn");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_bzplcnm", "absolute", "313", "36", "186", "21", null, null, this.div_search);
            obj.set_taborder("5");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "462", "10", "118", "21", null, null, this.div_search);
            obj.set_taborder("13");
            obj.set_text("계산서종류");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_kind", "absolute", "553", "10", "130", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_kind_innerdataset = new Dataset("cbo_kind_innerdataset", this.div_search.cbo_kind);
            cbo_kind_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">all</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">일반 세금계산서</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">영세율 세금계산서</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">일반 계산서</Col></Row></Rows>");
            obj.set_innerdataset(cbo_kind_innerdataset);
            obj.set_taborder("7");
            obj.set_text("전체");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("all");
            obj.set_index("0");
            obj = new Div("cal_crt_dt", "absolute", "85", "10", "100", "21", null, null, this.div_search);
            obj.set_taborder("0");
            obj.set_url("common::calendarMonth.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_is_na_all", "absolute", "85", "36", "120", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_is_na_all_innerdataset = new Dataset("rdo_is_na_all_innerdataset", this.div_search.rdo_is_na_all);
            rdo_is_na_all_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">all</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">each</Col><Col id=\"datacolumn\">정산처</Col></Row></Rows>");
            obj.set_innerdataset(rdo_is_na_all_innerdataset);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("all");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Combo("cbo_equal", "absolute", "312", "10", "113", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_equal_innerdataset = new Dataset("cbo_equal_innerdataset", this.div_search.cbo_equal);
            cbo_equal_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">all</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">일치</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">불일치</Col></Row></Rows>");
            obj.set_innerdataset(cbo_equal_innerdataset);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_text("전체");
            obj = new Static("Static03", "absolute", "221", "10", "101", "21", null, null, this.div_search);
            obj.set_taborder("14");
            obj.set_text("금액일치여부");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_gln", "absolute", "628", "36", "100", "21", null, null, this.div_search);
            obj.set_taborder("15");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("13");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "552", "36", "103", "21", null, null, this.div_search);
            obj.set_taborder("16");
            obj.set_text("업체GLN");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", null, "1", "15", "491", "0", null, this);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Div("div_grd", "absolute", "0", "98", null, null, "15", "0", this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);
            obj = new Button("btn_flag", "absolute", "329", "0", null, "12", "332", null, this.div_grd);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_grd.addChild(obj.name, obj);
            obj = new Grid("grd_tax", "absolute", "0", "50", null, null, "0", "30", this.div_grd);
            obj.set_taborder("1");
            obj.set_binddataset("ds_simplify");
            obj.set_autofittype("none");
            obj.set_enable("true");
            obj.set_cellsizingtype("col");
            obj.set_nodatatext("조회된 건수가 없습니다.");
            obj.set_summarytype("top");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"125\"/><Column size=\"100\"/><Column size=\"125\"/><Column size=\"97\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"28\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"매출사업장\"/><Cell col=\"2\" rowspan=\"2\" text=\"매출사업장명\"/><Cell col=\"3\" rowspan=\"2\" text=\"매입사업장\"/><Cell col=\"4\" rowspan=\"2\" text=\"매입사업장명\"/><Cell col=\"5\" rowspan=\"2\" text=\"집계구분\"/><Cell col=\"6\" rowspan=\"2\" text=\"계산서 구분\"/><Cell col=\"7\" rowspan=\"2\" text=\"과세 구분\"/><Cell col=\"8\" rowspan=\"2\" text=\"금액&#13;&#10;일치&#13;&#10;여부\"/><Cell col=\"9\" colspan=\"2\" text=\"(세금)계산서\"/><Cell col=\"11\" colspan=\"3\" text=\"매입내역\"/><Cell row=\"1\" col=\"9\" text=\"승인번호\"/><Cell row=\"1\" col=\"10\" text=\"합계액\"/><Cell row=\"1\" col=\"11\" text=\"공급금액\"/><Cell row=\"1\" col=\"12\" text=\"부가세\"/><Cell row=\"1\" col=\"13\" text=\"총공급금액\"/></Band><Band id=\"body\"><Cell text=\"bind:RN\"/><Cell col=\"1\" displaytype=\"normal\" text=\"bind:NA_TRPL_C\"/><Cell col=\"2\" text=\"bind:NA_TRPLNM\"/><Cell col=\"3\" text=\"bind:NA_BZPLC\"/><Cell col=\"4\" text=\"bind:NA_BZPLNM\"/><Cell col=\"5\" text=\"expr:'[' + NA_TOT_DSC + ']' + NA_TOT_DSNM\"/><Cell col=\"6\" text=\"bind:TXBIL_KDNM\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" text=\"expr:TXT_DSC == '1' ? '과세' : TXT_DSC == '3' ? '영세' : '면세'\"/><Cell col=\"8\" style=\"color:EXPR(EQ_YN == 'Y' ? '#0000ffff' : '#ff0000ff');color2:EXPR(EQ_YN == 'Y' ? '#0000ffff' : '#ff0000ff');selectcolor:EXPR(EQ_YN == 'Y' ? '#0000ffff' : '#ff0000ff');\" text=\"expr:EQ_YN == 'Y' ? '일치' : '불일치'\"/><Cell col=\"9\" text=\"bind:PBC_SQNO\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:TAX_TOT_AM\" maskchar=\" \"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:SLP_BYAM\"/><Cell col=\"12\" displaytype=\"number\" edittype=\"none\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:SLP_VAT\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;padding:0 10 0 0;\" text=\"bind:SLP_TOT_AM\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" colspan=\"7\" style=\"align:center;\" text=\"합   계\"/><Cell col=\"8\" style=\"align:center;\" expr=\"expr:comp.parent.parent.getEqYn()\"/><Cell col=\"9\" style=\"align:center;\" expr=\"expr:comp.parent.parent.getTaxCnt()\"/><Cell col=\"10\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_summary.getColumn(0,'TAX_TOT_AM')\"/><Cell col=\"11\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_summary.getColumn(0,'SLP_BYAM')\"/><Cell col=\"12\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_summary.getColumn(0,'SLP_VAT')\"/><Cell col=\"13\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" expr=\"expr:comp.parent.parent.ds_summary.getColumn(0,'SLP_TOT_AM')\"/></Band></Format></Formats>");
            this.div_grd.addChild(obj.name, obj);
            obj = new Div("div_paging", "absolute", "225", null, "338", "29", null, "0", this.div_grd);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_grd.addChild(obj.name, obj);
            obj = new Static("sta_result", "absolute", "0", "15", "530", "21", null, null, this.div_grd);
            obj.set_taborder("3");
            obj.set_text("※ (세금)계산서 금액이 매입금액과 <fc v='#0000ffff'><u v='true'>일치</u></fc> 합니다.");
            obj.set_usedecorate("true");
            obj.set_visible("false");
            this.div_grd.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", null, "5", "120", "21", "104", null, this.div_grd);
            obj.set_taborder("5");
            obj.set_text("상세조회 구분 :");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_grd.addChild(obj.name, obj);
            obj = new Radio("rdo_detail", "absolute", null, "5", "120", "21", "0", null, this.div_grd);
            this.div_grd.addChild(obj.name, obj);
            var rdo_detail_innerdataset = new Dataset("rdo_detail_innerdataset", this.div_grd.rdo_detail);
            rdo_detail_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전표별</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">상품별</Col></Row></Rows>");
            obj.set_innerdataset(rdo_detail_innerdataset);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            obj.set_value("1");
            obj = new Static("sta_result01", "absolute", null, "26", "350", "21", "0", null, this.div_grd);
            obj.set_taborder("6");
            obj.set_text("항목을 더블클릭하면 상세내용을 확인하실 수 있습니다.");
            obj.style.set_align("right middle");
            this.div_grd.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("8");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("3");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_init", "absolute", null, "0", "55", "21", "161", null, this);
            obj.set_taborder("1");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00", "absolute", "820", "50", "120", "65", null, null, this);
            obj.style.set_background("azure");
            this.addChild(obj.name, obj);
            obj = new ListBox("ListBox02", "absolute", "0", "0", null, null, "0", "0", this.PopupDiv00);
            this.PopupDiv00.addChild(obj.name, obj);
            var ListBox02_innerdataset = new Dataset("ListBox02_innerdataset", this.PopupDiv00.ListBox02);
            ListBox02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">기본(조회화면)</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">전표별 상세</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">상품별 상세</Col></Row></Rows>");
            obj.set_innerdataset(ListBox02_innerdataset);
            obj.set_taborder("0");
            obj.set_scrollbars("none");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Div("div_bill", "absolute", "750", "34", "327", "60", null, null, this);
            obj.set_taborder("9");
            obj.style.set_border("1 solid #808080ff");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "5", "5", "67", "21", null, null, this.div_bill);
            obj.set_taborder("0");
            obj.set_text("과금예상");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_font("bold 9 Gulim");
            this.div_bill.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "66", "5", "55", "21", null, null, this.div_bill);
            obj.set_taborder("1");
            obj.set_text("전표 수 :");
            obj.style.set_align("right middle");
            this.div_bill.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "199", "6", "55", "19", null, null, this.div_bill);
            obj.set_taborder("2");
            obj.set_text("SKU :");
            obj.style.set_align("right middle");
            this.div_bill.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "9", "31", "112", "21", null, null, this.div_bill);
            obj.set_taborder("3");
            obj.set_text("EDI :");
            obj.style.set_align("right middle");
            this.div_bill.addChild(obj.name, obj);
            obj = new MaskEdit("mae_slp", "absolute", "129", "5", "50", "21", null, null, this.div_bill);
            obj.set_taborder("4");
            obj.set_mask("#,###");
            obj.set_readonly("true");
            obj.style.set_background("transparent");
            obj.style.set_border("1 none #bfbfbfff");
            obj.style.set_align("left middle");
            this.div_bill.addChild(obj.name, obj);
            obj = new MaskEdit("mae_sku", "absolute", "262", "6", "50", "19", null, null, this.div_bill);
            obj.set_taborder("5");
            obj.set_mask("#,###");
            obj.set_readonly("true");
            obj.style.set_background("transparent");
            obj.style.set_border("1 none #bfbfbfff");
            obj.style.set_align("left middle");
            this.div_bill.addChild(obj.name, obj);
            obj = new Static("sta_edi", "absolute", "129", "31", "181", "21", null, null, this.div_bill);
            obj.set_taborder("6");
            this.div_bill.addChild(obj.name, obj);
            obj = new Combo("cbo_edi", "absolute", "5", "31", "78", "21", null, null, this.div_bill);
            this.div_bill.addChild(obj.name, obj);
            var cbo_edi_innerdataset = new Dataset("cbo_edi_innerdataset", this.div_bill.cbo_edi);
            cbo_edi_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">0~</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1,001~</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">3,001~</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">5,001~</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">10,000~</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">50,000~</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">100,001~</Col></Row></Rows>");
            obj.set_innerdataset(cbo_edi_innerdataset);
            obj.set_taborder("7");
            obj.set_text("0~");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("0");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 70, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.set_scrollbars("none");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 788, 367, this.div_grd,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");

            	}
            );
            this.div_grd.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 145, 45, this.PopupDiv00,
            	//-- Layout function
            	function(p) {
            		p.style.set_background("azure");

            	}
            );
            this.PopupDiv00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 327, 60, this.div_bill,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("9");
            		p.style.set_border("1 solid #808080ff");
            		p.set_visible("false");

            	}
            );
            this.div_bill.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("마감간소화(관리자)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item5","div_search.cbo_kind","value","ds_condition","TXT_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","div_search.cbo_equal","value","ds_condition","EQUAL_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_search.edt_bzplc","value","ds_condition","NA_BZPLC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_search.rdo_is_na_all","value","ds_condition","BZPLC_TPC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","div_search.edt_gln","value","ds_condition","NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","div_bill.mae_slp","value","ds_summary2","SLP_CNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","div_bill.mae_sku","value","ds_summary2","LINE_CN");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::calendarMonth.xfdl");
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_TX_7001A.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_TX_7001A.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	var toDay = this.gfn_today("yyyyMMdd");
        	this.div_search.cal_crt_dt.setFunctionName("fn_setCalendar");
        	this.div_search.cal_crt_dt._edtLock(true);
        	
        	this.fn_setCalendar(this.gfn_minusMonth(toDay, 1).substr(0, 6)); // 운영용
        	//this.fn_setCalendar("202101"); // 테스트용
        	
        	//조회된건수가 없습니다.
        	this.div_grd.grd_tax.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	
        	this.div_auth.set_visible(false);
        	this.div_search.Static02.set_visible(true);
        	this.div_search.edt_gln.set_visible(true);
        }

        //gfn_setCommonCode처리 후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	this.gfn_svcDsToggle(svcID, true);
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", ErrorMsg);
        		return;
         	} else {
        		if (svcID == "search") {
        			if (this.ds_simplify.rowcount > 0) {
        				var sTotal = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        				var sPagesize = this.ds_pageVO.getColumn(0, "PAGE_SIZE");
        				this.div_grd.div_paging.fn_pageSet(sTotal, sPagesize, "grd_tax, div_paging", lsNowPage);
        				this.fn_setResultMsg(true);
        			} else {
        				this.div_grd.grd_tax.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        				this.div_grd.div_paging.fn_pageSet(0, 0, "grd_tax, div_paging", lsNowPage); //페이징 설정
        				this.fn_setResultMsg(false);
        			}
        			
         			this.div_bill.set_visible(this.ds_summary2.rowcount > 0);
         			this.fn_calcEdi();
        		}
         	}
        }

        // 관리자용
        this.fn_calcEdi = function()
        {
        	var use = [1000, 2000, 2000, 5000, 40000, 50000, 0];
        	var amt = [60, 50, 40, 30, 20, 15, 10];
        	var edi = this.gfn_getNum(this.ds_summary2.getColumn(0, "DOC_SZE"));
        	var start = Number(this.div_bill.cbo_edi.value); // EDI 요금제 시작 구간
        	
        	if (edi > 0) {
        		var total = 0;
        		var ediKB = Math.round(edi / 1024);
        		var strKB = this.gfn_setComma(ediKB) + " KB (";
        		
        		for (var i=start; i<use.length; i++) {
        			if (ediKB < use[i] || i == 6) {
        				total += ediKB * amt[i];
        				break;
        			} else {
        				total += use[i] * amt[i];
        				ediKB -= use[i];
        			}
        		}
        		this.div_bill.sta_edi.set_text(strKB + "\\ " + this.gfn_setComma(total) + ")");
        	} else {
        		this.div_bill.sta_edi.set_text("0 KB");
        	}
        }

        this.fn_retrieveClosingSimplify = function(page)
        {
        	if (this.fn_vaildation()) {
        		var addOutDs = "";
        		if (page == 1) {
        			addOutDs += " ds_summary=ds_summary";
        			addOutDs += " ds_summary2=ds_summary2";
        		}
        		
        		var sSvcID = "search";
        		var sURL = "svc::rest/tx/simplify/retrieveList";
        		var sInDatasets = "ds_pageVO=ds_pageVO ds_condition=ds_condition"; //보내는데이터셋
        		var sOutDatasets = "ds_simplify=ds_simplify ds_pageVO=ds_pageVO" + addOutDs; //화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument = "";
        		var sCallbackFunc = "fn_callBack";
        		var sTranType = "S"; // U:저장/삭제, S:조회

        		//API 호출
        		this.gfn_registerSvcDS(sSvcID, this.ds_simplify, false);
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        	}
        }

        this.fn_excel = function(obj,e)
        {
        	if (this.fn_vaildation()) {
        		if (e.itemvalue == '1') {
        			excelDownHandler(this.gfn_svcUrl()+"rest/tx/simplify/excel/retrieveList?xml=" + this.fn_makeDsToParam(), this);
        		} else if (e.itemvalue == '2') {
        			excelDownHandler(this.gfn_svcUrl()+"rest/tx/simplify/excel/retrieveList?dsc=all&type=SLP&xml=" + this.fn_makeDsToParam(), this);
        		} else if (e.itemvalue == '3') {
        			excelDownHandler(this.gfn_svcUrl()+"rest/tx/simplify/excel/retrieveList?dsc=all&type=WRS&xml=" + this.fn_makeDsToParam(), this);
        		}
        	}
        }

        this.fn_print = function(obj,e)
        {
        	var ozParam = {
        		sId: 'OMG_DS_TX_7001',
        		sUrl: '/rest/tx/simplify/oz/retrieveList',
        		paramType: 'param',
        		sParam:{
        			xml:this.fn_makeDsToParam()
        		}
        	};
        	this.ozViewer(ozParam);
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.common_onclick = function(obj,e)
        {
        	if (obj.id == "btn_popup") {
        		this.fn_bzplc_popup();
        	} else if (obj.id == "btn_init") {
        		this.reload();
        	} else if (obj.id == "btn_excel") {
        		var nX = system.clientToScreenX(obj, 0) - system.clientToScreenX(application.mainframe, 0); 
        		var nY = system.clientToScreenY(obj, parseInt(obj.height)) - system.clientToScreenY(application.mainframe, 0); 
        		
        		this.PopupDiv00.trackPopup(nX, nY);	
        		//this.fn_excel();
        	} else if (obj.id == "btn_print") {
        		this.fn_print();
        	} else if (obj.id == "btn_search") {
        		this.fn_search();
        	}
        }

        this.div_search_edt_bzplc_onkeyup = function(obj,e)
        {
        	if (e.keycode == '13') {
        		if (obj.id == "edt_bzplc" && this.gfn_length(obj.value) < 6) {
        			this.alert("정산처 코드 6자리 이상 입력해주세요.");
        			return;
        		} else if (obj.id == "edt_bzplcnm" && this.gfn_length(obj.value) < 3) {
        			this.alert("정산처명 3자리 이상 입력해주세요.");
        			return;
        		}
        		this.fn_bzplc_popup(obj.name, obj.value);
        	}
        }

        this.div_grd_grd_tax_oncelldblclick = function(obj,e)
        {
        	var url = "";
        	if (this.div_grd.rdo_detail.value == "1") {
        		// 전표별
        		url = "OMG.TX::OMG_DS_TX_7002_SLP.xfdl";
        	} else {
        		// 상품별
        		url = "OMG.TX::OMG_DS_TX_7002_WRS.xfdl";
        	}
        	
        	this.ds_simplify_temp.clearData();
        	this.ds_simplify_temp.addRow();
        	this.ds_simplify_temp.copyRow(0, this.ds_simplify, this.ds_simplify.rowposition);

        	var oArg = {dsXml:this.ds_simplify_temp.saveXML()};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("detailPop", url, oArg, sOption, sPopupCallBack);
        }

        this.btn_flag_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_grd);
        }

        this.div_search_rdo_is_na_all_onitemchanged = function(obj,e)
        {
        	this.div_search.edt_bzplc.set_enable(obj.value != "all");
        	this.div_search.edt_bzplcnm.set_enable(obj.value != "all");
        	this.div_search.btn_popup.set_enable(obj.value != "all");

        	if (obj.value != "all") {
        		this.div_search.edt_bzplc.setFocus();
        	}
        }

        /************************************************************************************************
         * 페이징처리
        ************************************************************************************************/
        this.fn_search = function()
        {
        	this.fn_paging(1); // 처음조회시 1페이지를 조회한다.
        }

        this.fn_paging = function(vPageNum)
        {
        	this.ds_simplify.clearData(); //Grid에 Binding된 Dataset명
        	this.ds_pageVO.clearData();
        	this.ds_pageVO.addRow();

        	var vPageSize = 20; //Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
        	var vTotalCount = 0; //전체건수. 화면조회후 리턴받아 사용

         	this.ds_pageVO.setColumn(0, "CURRENT_PAGE", vPageNum); //현재 페이지
         	this.ds_pageVO.setColumn(0, "PAGE_SIZE", vPageSize);
         	this.ds_pageVO.setColumn(0, "TOTAL_ROW_COUNT", vTotalCount);

        	lsNowPage = vPageNum; //현재페이지 설정

        	this.fn_retrieveClosingSimplify(vPageNum);
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_vaildation = function()
        {
        	var bzplcTpc = this.ds_condition.getColumn(0, "BZPLC_TPC");
        	var bzplc = this.ds_condition.getColumn(0, "NA_BZPLC");
        	if (bzplcTpc != "all" && this.gfn_nullToEmpty(bzplc) == "") {
        		this.alert("정산처 정보가 입력되지 않았습니다.");
        		return false;
        	}
        	
        	// 관리자는 업체GLN 입력해야 함
        	var gln = this.gfn_nullToEmpty(this.div_search.edt_gln.value);
        	if (this.gfn_isNull(gln)) {
        		this.alert("업체 GLN 코드가 입력되지 않았습니다.");
        		this.div_search.edt_gln.setFocus();
        		return false;
        	} else if (this.gfn_length(gln) < 13) {
        		this.alert("업체 GLN 코드가 올바르지 않습니다. GLN코드 13자리를 입력해주세요.");
        		this.div_search.edt_gln.setFocus();
        		return false;
        	}
        	
        	this.ds_condition.setColumn(0, "NA_TRPL_C", gln);
        	
        	return true;
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	if (strId == "popup_bzplc") {
        		if (!this.gfn_isNull(strVal)) {
        			var temp = strVal.split(',');
        			this.div_search.edt_bzplc.set_value(temp[0]);
        			this.div_search.edt_bzplcnm.set_value(temp[1]);
        		}
        	}
        }

        this.fn_setCalendar = function(strDate)
        {
        	var limitMax = this.gfn_today("yyyyMM");
        	var limitMin = this.gfn_minusMonth(this.gfn_today("yyyyMMdd"), 23).substr(0, 6);
        	if (strDate > limitMax) {
        		strDate = limitMax;
        		this.alert("거래월은 현재월까지만 선택할 수 있습니다.");
        	} else if (strDate < limitMin) {
        		strDate = limitMin;
        		this.alert("거래월은 최대 2년 전까지 선택할 수 있습니다.");
        	}
        	this.ds_condition.setColumn(0, "CRT_YM", strDate);
        	this.div_search.cal_crt_dt._setValue(strDate);
        }

        this.fn_setResultMsg = function(isVisible)
        {
        	if (isVisible) {
        		var msg = "※ (세금)계산서 금액이 매입금액과 <u v='true'>";
        		
        		var neRow = this.ds_simplify.findRow("EQ_YN", "N");
        		if (neRow == -1) {
        			msg += "<fc v='#0000ffff'>일치</fc></u> 합니다.";
        		} else {
        			msg += "<fc v='#ff0000ff'>불일치</fc></u> 합니다. 매입사업장으로 문의해주세요.";
        		}
        		this.div_grd.sta_result.set_text(msg);
        	}
        	
        	this.div_grd.all["div_page_grd_tax"].set_visible(false);
        	this.div_grd.sta_result.set_visible(isVisible);
        	
        	this.btn_excel.set_enable(isVisible);
        	this.btn_print.set_enable(isVisible);
        }

        /**
         * 엑셀 조회 파라매터 생성
         */
        this.fn_makeDsToParam = function()
        {
        	var crtYm = this.gfn_nullToEmpty(this.ds_condition.getColumn(0, "CRT_YM"));
        	var eqYn = this.gfn_nullToEmpty(this.ds_condition.getColumn(0, "EQUAL_YN"));
        	var naTotDsc = this.gfn_nullToEmpty(this.ds_condition.getColumn(0, "NA_TOT_DSC"));
        	var bzplcTpc = this.gfn_nullToEmpty(this.ds_condition.getColumn(0, "BZPLC_TPC"));
        	var naBzplc = this.gfn_nullToEmpty(this.ds_condition.getColumn(0, "NA_BZPLC"));
        	//var txbilKd = this.gfn_nullToEmpty(this.ds_condition.getColumn(0, "TXBIL_KD"));
        	var txtDsc = this.gfn_nullToEmpty(this.ds_condition.getColumn(0, "TXT_DSC"));
        	
        	var param = crtYm + "@" + eqYn + "@" + naTotDsc + "@" + bzplcTpc + "@" + naBzplc + "@" + txtDsc + "@" + this.gfn_nullToEmpty(this.div_search.edt_gln.value);
        	
        	return encodeURIComponent(param);
        }

        /* 정산처 조회 팝업 */
        this.fn_bzplc_popup = function(id,value)
        {
        	var type = "3";
        	if (id == "edt_bzplcnm") {
        		type = "1";
        	}

        	var oArg = {
        		searchType:type,
        		searchWord:value
        	};
        	
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("popup_bzplc","OMG.TX::POPUP_BZPLC.xfdl",oArg,sOption,sPopupCallBack);
        }

        /* Summary 건 수 */
        this.getTaxCnt = function()
        {
        	if (this.ds_summary.rowcount == 0) {
        		return "";
        	}
        	var tax = this.gfn_nullToEmpty(this.ds_summary.getColumn(0, "TAX_TOT_AM"));
        	var slp = this.gfn_nullToEmpty(this.ds_summary.getColumn(0, "SLP_TOT_AM"));
        	
        	if (tax == "" || slp == "") {
        		return "";
        	}
        	return this.ds_summary.getColumn(0, "CNT") + " 건";
        }

        /* Summary 일치 여부 */
        this.getEqYn = function()
        {
        	if (this.ds_summary.rowcount == 0) {
        		return "";
        	}
        	
        	var tax = this.gfn_nullToEmpty(this.ds_summary.getColumn(0, "TAX_TOT_AM"));
        	var slp = this.gfn_nullToEmpty(this.ds_summary.getColumn(0, "SLP_TOT_AM"));
        	
        	if (tax == "" || slp == "") {
        		return "";
        	} else if (tax == slp) {
        		return "일치";
        	}
        	return "불일치";
        }

        this.div_bill_cbo_edi_onitemchanged = function(obj,e)
        {
        	if (this.ds_summary2.rowcount > 0) {
        		this.fn_calcEdi();
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_excel.addEventHandler("onclick", this.common_onclick, this);
            this.div_search.edt_bzplc.addEventHandler("onkeyup", this.div_search_edt_bzplc_onkeyup, this);
            this.div_search.btn_popup.addEventHandler("onclick", this.common_onclick, this);
            this.div_search.edt_bzplcnm.addEventHandler("onkeyup", this.div_search_edt_bzplc_onkeyup, this);
            this.div_search.rdo_is_na_all.addEventHandler("onitemchanged", this.div_search_rdo_is_na_all_onitemchanged, this);
            this.btn_search.addEventHandler("onclick", this.common_onclick, this);
            this.div_grd.btn_flag.addEventHandler("onclick", this.btn_flag_onclick, this);
            this.div_grd.grd_tax.addEventHandler("oncelldblclick", this.div_grd_grd_tax_oncelldblclick, this);
            this.btn_print.addEventHandler("onclick", this.common_onclick, this);
            this.btn_init.addEventHandler("onclick", this.common_onclick, this);
            this.PopupDiv00.ListBox02.addEventHandler("onitemclick", this.fn_excel, this);
            this.div_bill.cbo_edi.addEventHandler("onitemchanged", this.div_bill_cbo_edi_onitemchanged, this);

        };

        this.loadIncludeScript("OMG_DS_TX_7001A.xfdl");
        this.loadPreloadList();
       
    };
}
)();
