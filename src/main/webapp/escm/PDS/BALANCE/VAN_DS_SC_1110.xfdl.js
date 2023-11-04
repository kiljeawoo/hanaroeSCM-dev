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
                this.set_name("VAN_DS_SC_1110");
                this.set_titletext("월잔액원장조회");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_master_data", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_ADJPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLIENT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"BZPL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BAS_YM\" type=\"STRING\" size=\"256\"/><Column id=\"YY_CROV_AM\" type=\"STRING\" size=\"256\"/><Column id=\"YY_CROV_DLAY_INT\" type=\"STRING\" size=\"256\"/><Column id=\"TXT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"TXT_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"EXTX_AM\" type=\"STRING\" size=\"256\"/><Column id=\"SMA_AM\" type=\"STRING\" size=\"256\"/><Column id=\"LIQ_SPY_AM\" type=\"STRING\" size=\"256\"/><Column id=\"LIQ_SPY_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"VCBX_AM\" type=\"STRING\" size=\"256\"/><Column id=\"STOG_AM\" type=\"STRING\" size=\"256\"/><Column id=\"CBAM\" type=\"STRING\" size=\"256\"/><Column id=\"CSH_AM\" type=\"STRING\" size=\"256\"/><Column id=\"PPYAM\" type=\"STRING\" size=\"256\"/><Column id=\"PPY_AM\" type=\"STRING\" size=\"256\"/><Column id=\"BYNG_DC_AM\" type=\"STRING\" size=\"256\"/><Column id=\"MAD_AM\" type=\"STRING\" size=\"256\"/><Column id=\"PY_AM\" type=\"STRING\" size=\"256\"/><Column id=\"PY_CAN_AM\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_AM\" type=\"STRING\" size=\"256\"/><Column id=\"BAC\" type=\"STRING\" size=\"256\"/><Column id=\"DLAY_INT_OCU_AM\" type=\"STRING\" size=\"256\"/><Column id=\"DLAY_INT_PY_AM\" type=\"STRING\" size=\"256\"/><Column id=\"MRG_AM\" type=\"STRING\" size=\"256\"/><Column id=\"MRG_DLAY_INT\" type=\"STRING\" size=\"256\"/><Column id=\"SUPL_AM\" type=\"STRING\" size=\"256\"/><Column id=\"SUPL_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"DB_CRC_AM\" type=\"STRING\" size=\"256\"/><Column id=\"CR_CRC_AM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"YY_CROV_AM\" type=\"STRING\" size=\"256\"/><Column id=\"YY_CROV_DLAY_INT\" type=\"STRING\" size=\"256\"/><Column id=\"TXT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"TXT_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"EXTX_AM\" type=\"STRING\" size=\"256\"/><Column id=\"SMA_AM\" type=\"STRING\" size=\"256\"/><Column id=\"LIQ_SPY_AM\" type=\"STRING\" size=\"256\"/><Column id=\"LIQ_SPY_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"VCBX_AM\" type=\"STRING\" size=\"256\"/><Column id=\"STOG_AM\" type=\"STRING\" size=\"256\"/><Column id=\"CBAM\" type=\"STRING\" size=\"256\"/><Column id=\"CSH_AM\" type=\"STRING\" size=\"256\"/><Column id=\"PPYAM\" type=\"STRING\" size=\"256\"/><Column id=\"PPY_AM\" type=\"STRING\" size=\"256\"/><Column id=\"BYNG_DC_AM\" type=\"STRING\" size=\"256\"/><Column id=\"MAD_AM\" type=\"STRING\" size=\"256\"/><Column id=\"PY_AM\" type=\"STRING\" size=\"256\"/><Column id=\"PY_CAN_AM\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_AM\" type=\"STRING\" size=\"256\"/><Column id=\"BAC\" type=\"STRING\" size=\"256\"/><Column id=\"DLAY_INT_OCU_AM\" type=\"STRING\" size=\"256\"/><Column id=\"DLAY_INT_PY_AM\" type=\"STRING\" size=\"256\"/><Column id=\"MRG_AM\" type=\"STRING\" size=\"256\"/><Column id=\"MRG_DLAY_INT\" type=\"STRING\" size=\"256\"/><Column id=\"SUPL_AM\" type=\"STRING\" size=\"256\"/><Column id=\"SUPL_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"DB_CRC_AM\" type=\"STRING\" size=\"256\"/><Column id=\"CR_CRC_AM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_ddl", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DDL_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Plugin("Plugin00", "absolute", "29.23%", "4", null, "24", "65.9%", null, this);
            obj.setProperty("taborder", "3");
            obj.setProperty("classid", "{55D9860A-AB9C-44A1-BB74-75AF7F805333}");
            obj.setProperty("visible", "false");
            this.addChild(obj.name, obj);

            obj = new Div("div_menu", "absolute", "0", "0", "397", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "379", "21", "158", null, this);
            obj.set_taborder("1");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print00", "absolute", null, "0", "41", "21", "118", null, this);
            obj.set_taborder("2");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search00", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "69", "15", null, this);
            obj.set_taborder("5");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("sta_title00", "absolute", "15", "10", "91", "21", null, null, this.div_search);
            obj.set_taborder("6");
            obj.set_text("거래월");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title01", "absolute", "15", "36", "91", "21", null, null, this.div_search);
            obj.set_taborder("8");
            obj.set_text("사업장");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data00", "absolute", "230", "36", "120", "21", null, null, this.div_search);
            obj.set_taborder("9");
            obj.set_inputtype("number");
            obj.set_cssclass("WF_Essential");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data01", "absolute", "352", "36", "200", "21", null, null, this.div_search);
            obj.set_taborder("10");
            obj.set_cssclass("WF_Essential");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup00", "absolute", "554", "36", "21", "21", null, null, this.div_search);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_Searchbtn");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "0", "0", "15", "67", null, null, this.div_search);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "105", "57", "103", "10", null, null, this.div_search);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "105", "31", "103", "5", null, null, this.div_search);
            obj.set_taborder("15");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "105", "0", "103", "10", null, null, this.div_search);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title02", "absolute", "231", "10", "103", "21", null, null, this.div_search);
            obj.set_taborder("18");
            obj.set_text("계통계약구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_rots", "absolute", "334", "10", "130", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_rots_innerdataset = new Dataset("cbo_rots_innerdataset", this.div_search.cbo_rots);
            cbo_rots_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">중앙본부계통계약</Col></Row></Rows>");
            obj.set_innerdataset(cbo_rots_innerdataset);
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("0");
            obj.set_text("중앙본부계통계약");
            obj.set_readonly("true");
            obj = new Div("Div00", "absolute", "106", "10", "100", "21", null, null, this.div_search);
            obj.set_taborder("20");
            obj.set_url("common::calendarMonth.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_store_chk00", "absolute", "106", "36", "124", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_store_chk00_innerdataset = new Dataset("rdo_store_chk00_innerdataset", this.div_search.rdo_store_chk00);
            rdo_store_chk00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">정산처</Col></Row></Rows>");
            obj.set_innerdataset(rdo_store_chk00_innerdataset);
            obj.set_taborder("22");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Static("sta_title03", "absolute", "506", "10", "91", "21", null, null, this.div_search);
            obj.set_taborder("23");
            obj.set_text("마감일자");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_ddl_dt", "absolute", "584", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj.set_readonly("true");
            obj.set_enable("false");

            obj = new Div("div_list", "absolute", "0", "97", null, null, "15", "50", this);
            obj.set_taborder("4");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_main", "absolute", "0", "42", null, null, "0", "0", this.div_list);
            obj.set_taborder("15");
            obj.set_binddataset("ds_master_data");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"28\"/><Row size=\"28\"/><Row size=\"28\" band=\"summ\"/><Row size=\"28\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" text=\"공급업체\"/><Cell col=\"2\" text=\"전월이월잔액\"/><Cell col=\"3\" text=\"과세공급금액\"/><Cell col=\"4\" text=\"면세공급금액\"/><Cell col=\"5\" text=\"주류공급금액\"/><Cell col=\"6\" text=\"공병금액\"/><Cell col=\"7\" rowspan=\"2\" text=\"저장품금액\"/><Cell col=\"8\" rowspan=\"2\" text=\"매출금액(대변)\"/><Cell col=\"9\" text=\"현금금액\"/><Cell col=\"10\" text=\"선지급금액\"/><Cell col=\"11\" rowspan=\"2\" text=\"공제금액\"/><Cell col=\"12\" rowspan=\"2\" text=\"지급금액\"/><Cell col=\"13\" rowspan=\"2\" text=\"지급취소금액\"/><Cell col=\"14\" rowspan=\"2\" text=\"정산금액(차변)\"/><Cell col=\"15\" rowspan=\"2\" text=\"외상매출금잔액\"/><Cell col=\"16\" text=\"지체이자\"/><Cell col=\"17\" text=\"합병금액\"/><Cell col=\"18\" text=\"총공급금액\"/><Cell col=\"19\" text=\"차변정정금액\"/><Cell row=\"1\" col=\"1\" text=\"정산처\"/><Cell row=\"1\" col=\"2\" text=\"전월이월자체이자\"/><Cell row=\"1\" col=\"3\" text=\"부가세\"/><Cell row=\"1\" col=\"4\" text=\"영세공급금액\"/><Cell row=\"1\" col=\"5\" text=\"주류부가세\"/><Cell row=\"1\" col=\"6\" text=\"공상자금액\"/><Cell row=\"1\" col=\"9\" text=\"선수금액\"/><Cell row=\"1\" col=\"10\" text=\"선지급할인\"/><Cell row=\"1\" col=\"16\" text=\"지체이자지급금액\"/><Cell row=\"1\" col=\"17\" text=\"합병지체이자\"/><Cell row=\"1\" col=\"18\" text=\"총부가세\"/><Cell row=\"1\" col=\"19\" text=\"대변정정금액\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" expr=\"expr:currow+1\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:CLIENT_NM\"/><Cell col=\"2\" displaytype=\"number\" text=\"bind:YY_CROV_AM\" mask=\"#,##0\"/><Cell col=\"3\" displaytype=\"number\" text=\"bind:TXT_AM\" mask=\"#,##0\"/><Cell col=\"4\" displaytype=\"number\" text=\"bind:EXTX_AM\" mask=\"#,##0\"/><Cell col=\"5\" displaytype=\"number\" text=\"bind:LIQ_SPY_AM\" mask=\"#,##0\"/><Cell col=\"6\" displaytype=\"number\" text=\"bind:VCBT_AM\" mask=\"#,##0\"/><Cell col=\"7\" rowspan=\"2\" displaytype=\"number\" text=\"bind:STOG_AM\" mask=\"#,##0\"/><Cell col=\"8\" rowspan=\"2\" displaytype=\"number\" text=\"bind:CBAM\" mask=\"#,##0\"/><Cell col=\"9\" displaytype=\"number\" text=\"bind:CSH_AM\" mask=\"#,##0\"/><Cell col=\"10\" displaytype=\"number\" text=\"bind:PPY_AM\" mask=\"#,##0\"/><Cell col=\"11\" rowspan=\"2\" displaytype=\"number\" text=\"bind:MAD_AM\" mask=\"#,##0\"/><Cell col=\"12\" rowspan=\"2\" displaytype=\"number\" text=\"bind:PY_AM\" mask=\"#,##0\"/><Cell col=\"13\" rowspan=\"2\" displaytype=\"number\" text=\"bind:PY_CAN_AM\" mask=\"#,##0\"/><Cell col=\"14\" rowspan=\"2\" displaytype=\"number\" text=\"bind:ADJ_AM\" mask=\"#,##0\"/><Cell col=\"15\" rowspan=\"2\" displaytype=\"number\" text=\"bind:BAC\" mask=\"#,##0\"/><Cell col=\"16\" displaytype=\"number\" text=\"bind:DLAY_INT_OCU_AM\" mask=\"#,##0\"/><Cell col=\"17\" displaytype=\"number\" text=\"bind:MRG_AM\" mask=\"#,##0\"/><Cell col=\"18\" displaytype=\"number\" text=\"bind:SUPL_AM\" mask=\"#,##0\"/><Cell col=\"19\" displaytype=\"number\" text=\"bind:DB_CRC_AM\" mask=\"#,##0\"/><Cell row=\"1\" col=\"1\" style=\"align:left;\" text=\"bind:BZPL_NM\"/><Cell row=\"1\" col=\"2\" displaytype=\"number\" text=\"bind:YY_CROV_DLAY_INT\" mask=\"#,##0\"/><Cell row=\"1\" col=\"3\" displaytype=\"number\" text=\"bind:TXT_VAT\" mask=\"#,##0\"/><Cell row=\"1\" col=\"4\" displaytype=\"number\" text=\"bind:SMA_AM\" mask=\"#,##0\"/><Cell row=\"1\" col=\"5\" displaytype=\"number\" text=\"bind:LIQ_SPY_VAT\" mask=\"#,##0\"/><Cell row=\"1\" col=\"6\" displaytype=\"number\" text=\"bind:VCBX_AM\" mask=\"#,##0\"/><Cell row=\"1\" col=\"9\" displaytype=\"number\" text=\"bind:PPYAM\" mask=\"#,##0\"/><Cell row=\"1\" col=\"10\" displaytype=\"number\" text=\"bind:BYNG_DC_AM\" mask=\"#,##0\"/><Cell row=\"1\" col=\"16\" displaytype=\"number\" text=\"bind:DLAY_INT_PY_AM\" mask=\"#,##0\"/><Cell row=\"1\" col=\"17\" displaytype=\"number\" text=\"bind:MRG_DLAY_INT\" mask=\"#,##0\"/><Cell row=\"1\" col=\"18\" displaytype=\"number\" text=\"bind:SUPL_VAT\" mask=\"#,##0\"/><Cell row=\"1\" col=\"19\" displaytype=\"number\" text=\"bind:CR_CRC_AM\" mask=\"#,##0\"/></Band><Band id=\"summary\"><Cell rowspan=\"2\" colspan=\"2\" style=\"align:center;\" text=\"합계\"/><Cell col=\"2\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'YY_CROV_AM')\" mask=\"#,###\"/><Cell col=\"3\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'TXT_AM')\" mask=\"#,###\"/><Cell col=\"4\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'EXTX_AM')\" mask=\"#,###\"/><Cell col=\"5\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'LIQ_SPY_AM')\" mask=\"#,###\"/><Cell col=\"6\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'VCBT_AM')\" mask=\"#,###\"/><Cell col=\"7\" rowspan=\"2\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'STOG_AM')\" mask=\"#,###\"/><Cell col=\"8\" rowspan=\"2\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'CBAM')\" mask=\"#,###\"/><Cell col=\"9\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'CSH_AM')\" mask=\"#,###\"/><Cell col=\"10\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'PPY_AM')\" mask=\"#,###\"/><Cell col=\"11\" rowspan=\"2\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'MAD_AM')\" mask=\"#,###\"/><Cell col=\"12\" rowspan=\"2\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'PY_AM')\" mask=\"#,###\"/><Cell col=\"13\" rowspan=\"2\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'PY_CAN_AM')\" mask=\"#,###\"/><Cell col=\"14\" rowspan=\"2\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'ADJ_AM')\" mask=\"#,###\"/><Cell col=\"15\" rowspan=\"2\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'BAC')\" mask=\"#,###\"/><Cell col=\"16\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'DLAY_INT_OCU_AM')\" mask=\"#,###\"/><Cell col=\"17\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'MRG_AM')\" mask=\"#,###\"/><Cell col=\"18\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'SUPL_AM')\" mask=\"#,###\"/><Cell col=\"19\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'DB_CRC_AM')\" mask=\"#,###\"/><Cell row=\"1\" col=\"2\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'YY_CROV_DLAY_INT')\" mask=\"#,###\"/><Cell row=\"1\" col=\"3\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'TXT_VAT')\" mask=\"#,###\"/><Cell row=\"1\" col=\"4\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'SMA_AM')\" mask=\"#,###\"/><Cell row=\"1\" col=\"5\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'LIQ_SPY_VAT')\" mask=\"#,###\"/><Cell row=\"1\" col=\"6\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'VCBX_AM')\" mask=\"#,###\"/><Cell row=\"1\" col=\"9\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'PPYAM')\" mask=\"#,###\"/><Cell row=\"1\" col=\"10\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'BYNG_DC_AM')\" mask=\"#,###\"/><Cell row=\"1\" col=\"16\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'DLAY_INT_PY_AM')\" mask=\"#,###\"/><Cell row=\"1\" col=\"17\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'MRG_DLAY_INT')\" mask=\"#,###\"/><Cell row=\"1\" col=\"18\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'SUPL_VAT')\" mask=\"#,###\"/><Cell row=\"1\" col=\"19\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'CR_CRC_AM')\" mask=\"#,###\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_toggle00", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new WebBrowser("web_downExcelM", "absolute", "617", "10", null, "20", "133", null, this.div_list);
            obj.set_taborder("17");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);

            obj = new Button("btn_excel00", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("6");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", null, null, "40", "15", "5", this);
            obj.set_taborder("7");
            obj.set_text("월잔액원장조회 화면 <b v='true'>기능문의</b>는 <u v='true'>하나로eSCM고객센터(02-1522-1211)</u>로, <b v='true'>금액문의</b>는 <u v='true'>담당 바이어</u>에게로 부탁드립니다.");
            obj.set_wordwrap("char");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 69, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_text("Div02");
            		p.set_scrollbars("none");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1110");
            		p.set_titletext("월잔액원장조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
            this._addPreloadList("fdl", "common::AuthorityWorkplace.xfdl");
            this._addPreloadList("fdl", "common::calendarMonth.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1110.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1110.xfdl", function() {
        //include "lib::comLib.xjs";

        this.AUTO_POP = false;
        var sRtn = "";

        this.form_onload = function(obj,e)
        {
           this.gfn_setInitForm(obj, e); //공통
           /**
            var searchParam =
        	{
        		form: this, 
        		param:[
        		{
        			edit: this.div_search.edt_data00, 
        			fnc: 'btn_search00_onclick'
        		}
        		]
        	};
        	this.addEventEnterSearch(searchParam);
        	*/
        }

        this.fn_afterFormOnload = function()
        {
        	//이번달 자동 입력
        	var initdate = this.gfn_today('yyyyMM');
        	this.div_search.Div00._setValue(initdate);
        	this.div_list.grd_main.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	//그리드클릭 이벤트 등록
        	this.div_list.grd_main.addEventHandler("oncellclick", this.grd_afterFnc, this);

        	// 메인에서 미확인건으로 넘어오면 자동 검색
        	var BAS_YM = this.getOwnerFrame().arguments["FORM_PARAM"];
        	if (!this.gfn_isNull(BAS_YM)) {
        		this.AUTO_POP = true;
        		this.div_search.Div00._setValue(BAS_YM);
        		this.div_auth.chk_all.set_value(true);
        		this.btn_search00_onclick();
        	}
        }

        this.fn_postOnLoad = function()
        {
        	// 메인에서 미확인건으로 넘어오면 자동 검색
        	var BAS_YM = this.getOwnerFrame().arguments["FORM_PARAM"];
        	if (!this.gfn_isNull(BAS_YM)) {
        		this.AUTO_POP = true;
        		this.div_search.Div00._setValue(BAS_YM);
        		this.div_auth.chk_all.set_value(true);
        		this.btn_search00_onclick();
        	}
        }

        //조회 조건 숨김 여부 이벤트
        this.div_list_btn_toggle00_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        
        //제조업체 팝업 조회(수요처)
        this.div_search_btn_popup00_onclick = function(params)
        {
        	var param = {
        				autoType:params, 
        				searchCode:this.div_search.edt_data00.value, 
        				searchText:this.div_search.edt_data01.value
        	};
        	if (typeof params == "boolean") {
        		if (!this.searPopValue(param)) {return};
        	}

        	var oArg = {paramMode:"U", dsArg:this.Dataset00, autoPop:param};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("rvopl_trpl", "POPUP::POPUP_SRC_RVOPL_TRPL.xfdl", oArg, sOption, sPopupCallBack);
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	if (strId == "rvopl_trpl") {
        		if (strVal != undefined) {
        			this.div_search.edt_data00.set_value(strVal.split(",")[0]);
        			this.div_search.edt_data01.set_value(strVal.split(",")[1]);
        		}
        	} else if (strId == "detail") {
        		if (!this.gfn_isNull(strVal)) {
        			var moveToMenu = "12006001"; // 채권채무발행관리
        			this.gfn_OpenMenuId(moveToMenu, strVal);
        		}
        	}
        }

        //조회 조건 체크
        this.validation = function()
        {
        	if (this.div_search.Div00._getValue().length < 6) {
        		this.alert("기준월을 확인하십시요. [" + this.div_search.Div00._getValue() + "]");
        		return false;
        	}
        	return true;
        }

        this.btn_search00_onclick = function(obj,e)
        {
        	this.ds_master_data.clearData();
        	this.ds_sum.clearData();

        	if (!this.validation()) {
        		return;
        	}
        	var params = "BAS_YM="+this.div_search.Div00._getValue()
        				 +" TRPL_C="+this.getTrplCode();
        	var trpl = this.gfn_nullToEmpty(this.div_search.edt_data00.value);
        	if (this.div_search.rdo_store_chk00.value == 1) {
        		params += " ADJ_NA_BZPLC=all"
        	} else {
        		if (this.gfn_nullToEmpty(this.div_search.edt_data00.value).length < 8) {
        			this.alert("사업장코드를 입력해주세요.");
        			return;
        		}
        		params += " ADJ_NA_BZPLC="+this.gfn_nullToEmpty(this.div_search.edt_data00.value);
        	}

        	var sSvcID        = "p_search";//통신아이디
        	var sURL          = "svc::rest/pds/balance/getMonthlyBalanceList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_master_data=DATASET ds_sum=DS_SUM ds_ddl=DS_DDL";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        this.fn_callback = function(trId,errCode,errMsg)
        {
        	if (errCode < 0) {
        		this.gfn_getMessage("alert", errMsg);
        		return;
        	}

        	if (trId == "p_search") {
        		this.div_search.cal_ddl_dt.set_value(this.ds_ddl.getColumn(0, "DDL_DT"));
        		if (this.ds_master_data.rowcount > 0) {
        			this.ds_master_data.set_enableevent(false);
        			this.ds_master_data.set_rowposition(1);
        			this.ds_master_data.set_rowposition(0);
        			this.ds_master_data.set_enableevent(true);

        			/**
        			if (this.div_search.edt_data00.value == "8808983000015") {
        				this.alert(
        				"정산처가 하나로마트분사인 경우에는\n\n"+
        				  "월잔액 원장조회(마트분사) 화면에서\n"+
        				  "조회하시면\n"+
        				  "수수료상세내역을 조회가능합니다.");
        			}
        			*/

        			// 상품본부 자동조회 (상품본부 없으면 첫번째 행)
        			if (this.AUTO_POP) {
        				this.AUTO_POP = false;

        				for (var i=0; i<this.ds_master_data.rowcount; i++) {
        					var bzplc = this.ds_master_data.getColumn(i, "NA_BZPLC");
        					if (bzplc == "8808983000015") {
        						this.ds_master_data.set_rowposition(i);
        						this.grd_afterFnc();
        						return;
        					}
        				}
        				this.ds_master_data.set_rowposition(0);
        				this.grd_afterFnc();
        			}
        		} else {
        			//this.gfn_getMessage('alert', 'result.message.search.no.exist.data');
        			this.div_list.grd_main00.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        		}
        	}
        }

        //그리드의 로우를 클릭 했을 때 팝업 생성
        this.grd_afterFnc = function(obj,e)
        {
        /*
        	if (e.reason == 51)
        	{
        		this.ds_master_data.set_enableevent(false);
        		this.ds_master_data.set_rowposition(-1);
        		this.ds_master_data.set_enableevent(true);
        		return;
        	}
        */
        	var oArg = {paramMode:"U", dsArg:this.ds_master_data, dtVal:this.div_search.Div00._getValue()};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("detail", "PDS.BALANCE::VAN_DS_SC_1111.xfdl", oArg, sOption, sPopupCallBack);
        }

        //엑셀 다운로드 버튼
        this.btn_excel00_onclick = function(obj,e)
        {
        	this.fn_exceldown();
        }

        //필수 값 체크
        this.fn_validationCheck = function()
        {
        	if (this.div_list.grd_main.rowcount < 1) {
        		this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        		return;
        	}
        	return true;
        }

        //서버 API 전달
        this.fn_exceldown = function()
        {
        	var params = "BAS_YM="+this.div_search.Div00._getValue()
        				+"&TRPL_C="+this.getTrplCode();
        	if (this.div_search.rdo_store_chk00.value == 1) {
        		params += "&ADJ_NA_BZPLC=all";
        	} else {
        		if (this.gfn_nullToEmpty(this.div_search.edt_data00.value).length < 8) {
        			this.alert("사업장코드를 입력해주세요.");
        			return;
        		}
        		params += "&ADJ_NA_BZPLC="+this.div_search.edt_data00.value;
        	}
        	excelDownHandler(application.gv_server_url+"rest/excel/pds/balance/getMonthlyBalanceList?"+params, this);

        	//this.div_list.web_downExcelM.set_url(application.gv_server_url+"rest/excel/pds/balance/getMonthlyBalanceList?"+params);
        }

        //출력버튼
        this.btn_print00_onclick = function(obj,e)
        {
        	if (!this.validation()) {
        		return;
        	}

        	var bzplc = "all";
        	if (this.div_search.rdo_store_chk00.value != 1) {
        		if (this.gfn_nullToEmpty(this.div_search.edt_data00.value).length < 8) {
        			this.alert("사업장코드를 입력해주세요.");
        			return;
        		}
        		bzplc=this.gfn_nullToEmpty(this.div_search.edt_data00.value);
        	}

        	var searchText = "[거래월]:"+this.div_search.Div00._getValue() +
        					 ", [계통계약구분]:"+this.div_search.cbo_rots.text+
        					 ", [사업장]:"+((bzplc == 'all')?'전체': this.div_search.edt_data00.value+', '+this.div_search.edt_data01.value);

        	// trace(searchText);

        	var param = {
        		TRPL_C_TEXT:searchText, 
        		BAS_YM:this.gfn_nullToEmpty(this.div_search.Div00._getValue()), 
        		ADJ_NA_BZPLC:bzplc, 
        		TRPL_C:this.getTrplCode(), 
        		DS_TYPE:"VAN_DS_SC_1110"
        	};
        	var ozParam = {
        		sId: 'VAN_DS_SC_1110', 
        		sUrl: '/rest/oz/pds/balance/getMonthlyBalanceList', 
        		paramType: 'param', 
        		sParam: param
        	};
        	this.ozViewer(ozParam);

        }
        //농협사업장 라디오버튼
        this.div_search_rdo_store_chk00_onitemchanged = function(obj,e)
        {
        	if (this.div_search.rdo_store_chk00.value == 1) {
        		this.div_search.edt_data00.set_readonly(true);
        		this.div_search.edt_data01.set_readonly(true);
        		this.div_search.btn_popup00.set_enable(false);
        	} else {
        		this.div_search.edt_data00.set_readonly(false);
        		this.div_search.edt_data01.set_readonly(false);
        		this.div_search.btn_popup00.set_enable(true);
        	}

        }
        //초기화 버튼
        this.btn_clear00_onclick = function(obj,e)
        {
        	this.reload();
        }

        this.div_search_edt_data00_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.div_search_btn_popup00_onclick(true);
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_print00.addEventHandler("onclick", this.btn_print00_onclick, this);
            this.btn_search00.addEventHandler("onclick", this.btn_search00_onclick, this);
            this.div_search.sta_title01.addEventHandler("onclick", this.div_search_sta_title01_onclick, this);
            this.div_search.edt_data00.addEventHandler("onkeydown", this.div_search_edt_data00_onkeydown, this);
            this.div_search.edt_data01.addEventHandler("onkeydown", this.div_search_edt_data00_onkeydown, this);
            this.div_search.btn_popup00.addEventHandler("onclick", this.div_search_btn_popup00_onclick, this);
            this.div_search.rdo_store_chk00.addEventHandler("onitemchanged", this.div_search_rdo_store_chk00_onitemchanged, this);
            this.div_search.cal_ddl_dt.addEventHandler("oneditclick", this.div_search_cal_today_oneditclick, this);
            this.div_search.cal_ddl_dt.addEventHandler("onchanged", this.div_search_cal_today_onchanged, this);
            this.div_list.btn_toggle00.addEventHandler("onclick", this.div_list_btn_toggle00_onclick, this);
            this.btn_excel00.addEventHandler("onclick", this.btn_excel00_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1110.xfdl");
        this.loadPreloadList();
       
    };
}
)();
