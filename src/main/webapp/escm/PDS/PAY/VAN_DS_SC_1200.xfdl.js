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
                this.set_name("VAN_DS_SC_1200");
                this.set_titletext("외상매출 회수예정");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_sum", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PY_PLA_AM\" type=\"string\" size=\"32\"/><Column id=\"CBAM\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dataM", this);
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TEAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PY_PLA_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_NA_BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_BZPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"ADJ_BZPL_NA_TEAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZ_METH_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_ADJPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_ADJPL_C_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ADJPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"ADJPL_NA_TEAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TRPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"TRPL_NA_TEAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CBAM\" type=\"STRING\" size=\"256\"/><Column id=\"PY_AM\" type=\"STRING\" size=\"256\"/><Column id=\"PPY_AM\" type=\"STRING\" size=\"256\"/><Column id=\"BYNG_DC_AM\" type=\"STRING\" size=\"256\"/><Column id=\"OFS_AM\" type=\"STRING\" size=\"256\"/><Column id=\"ACTL_PY_PLA_AM\" type=\"STRING\" size=\"256\"/><Column id=\"SPY_AM\" type=\"STRING\" size=\"256\"/><Column id=\"TXT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"TXT_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"EXTX_AM\" type=\"STRING\" size=\"256\"/><Column id=\"SMA_AM\" type=\"STRING\" size=\"256\"/><Column id=\"LIQ_SPY_AM\" type=\"STRING\" size=\"256\"/><Column id=\"LIQ_SPY_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"VCBX_AM\" type=\"STRING\" size=\"256\"/><Column id=\"VPLTT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"BYNG_SSDY\" type=\"STRING\" size=\"256\"/><Column id=\"AMN_FEE\" type=\"STRING\" size=\"256\"/><Column id=\"AMN_FEE_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"PHD_FEE\" type=\"STRING\" size=\"256\"/><Column id=\"PHD_FEE_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"PHD_AFF_SSDY\" type=\"STRING\" size=\"256\"/><Column id=\"AFF_SSDY\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_RTU_AM\" type=\"STRING\" size=\"256\"/><Column id=\"VCBX_RTU_AM\" type=\"STRING\" size=\"256\"/><Column id=\"VPLTT_RTU_AM\" type=\"STRING\" size=\"256\"/><Column id=\"RTU_FEE\" type=\"STRING\" size=\"256\"/><Column id=\"RTU_FEE_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"MAD_AM\" type=\"STRING\" size=\"256\"/><Column id=\"DB_CRC_AM\" type=\"STRING\" size=\"256\"/><Column id=\"CR_CRC_AM\" type=\"STRING\" size=\"256\"/><Column id=\"MRG_OCU_AM\" type=\"STRING\" size=\"256\"/><Column id=\"MRG_SBT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"YY_CROV_AM\" type=\"STRING\" size=\"256\"/><Column id=\"YY_CROV_SBT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"CROV_OCU_AM\" type=\"STRING\" size=\"256\"/><Column id=\"CROV_SBT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"NODR_RGD_AM\" type=\"STRING\" size=\"256\"/><Column id=\"CPL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FTR_PY_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LS_PY_DT\" type=\"STRING\" size=\"256\"/><Column id=\"FTR_TR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LS_TR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_AM1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_AM2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_AM3\" type=\"STRING\" size=\"256\"/><Column id=\"RMK_CNTN1\" type=\"STRING\" size=\"256\"/><Column id=\"RMK_CNTN2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "160", null, this);
            obj.set_taborder("0");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear00", "absolute", null, "0", "53", "21", "118", null, this);
            obj.set_taborder("1");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_menu", "absolute", "0", "0", "397", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "69", "15", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("153");
            obj.set_text("조회일자");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_byng_slam_type", "absolute", "94", "10", "180", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_byng_slam_type_innerdataset = new Dataset("rdo_byng_slam_type_innerdataset", this.div_search.rdo_byng_slam_type);
            rdo_byng_slam_type_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">PY_PLA_DT</Col><Col id=\"datacolumn\">예정일별</Col></Row><Row><Col id=\"codecolumn\">BASE_DT</Col><Col id=\"datacolumn\">거래일별</Col></Row></Rows>");
            obj.set_innerdataset(rdo_byng_slam_type_innerdataset);
            obj.set_taborder("154");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("PY_PLA_DT");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Static("Static01", "absolute", "15", "36", "79", "21", null, null, this.div_search);
            obj.set_taborder("155");
            obj.set_text("사업장");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_from", "absolute", "274", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("156");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("sta_date", "absolute", "380", "10", "10", "21", null, null, this.div_search);
            obj.set_taborder("157");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_to", "absolute", "396", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("158");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Radio("rdo_is_na_all", "absolute", "94", "36", "180", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_is_na_all_innerdataset = new Dataset("rdo_is_na_all_innerdataset", this.div_search.rdo_is_na_all);
            rdo_is_na_all_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">정산처</Col></Row></Rows>");
            obj.set_innerdataset(rdo_is_na_all_innerdataset);
            obj.set_taborder("159");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Edit("edt_na_bzplc_code", "absolute", "274", "36", "100", "21", null, null, this.div_search);
            obj.set_taborder("160");
            obj.set_inputtype("number");
            obj.set_readonly("false");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_na_bzplc_name", "absolute", "377", "36", "151", "21", null, null, this.div_search);
            obj.set_taborder("161");
            obj.set_readonly("false");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup", "absolute", "531", "36", "21", "21", null, null, this.div_search);
            obj.set_taborder("162");
            obj.set_cssclass("btn_WF_Searchbtn");
            obj.set_enable("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "582", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("163");
            obj.set_text("조회구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_byng_slam_gubun", "absolute", "661", "10", "209", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_byng_slam_gubun_innerdataset = new Dataset("rdo_byng_slam_gubun_innerdataset", this.div_search.rdo_byng_slam_gubun);
            rdo_byng_slam_gubun_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">미지급</Col></Row></Rows>");
            obj.set_innerdataset(rdo_byng_slam_gubun_innerdataset);
            obj.set_taborder("164");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("0");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.set_index("0");
            obj = new Static("Static07", "absolute", "122", "0", null, "10", "571", null, this.div_search);
            obj.set_taborder("165");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "122", "57", null, "10", "571", null, this.div_search);
            obj.set_taborder("166");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("5");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "97", null, null, "15", "50", this);
            obj.set_taborder("7");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btn_divResize", "absolute", "331", "0", null, "12", "330", null, this.div_list);
            obj.set_taborder("51");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_master", "absolute", "0", "40", null, null, "0", "0", this.div_list);
            obj.set_taborder("52");
            obj.set_binddataset("ds_dataM");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"115\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"169\"/><Column size=\"143\"/><Column size=\"107\"/><Column size=\"114\"/><Column size=\"110\"/><Column size=\"88\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"28\"/><Row size=\"28\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" text=\"지급예정일\"/><Cell col=\"2\" text=\"공급처(정산)\"/><Cell col=\"3\" text=\"사업장(정산)\"/><Cell col=\"4\" text=\"외상매입금\"/><Cell col=\"5\" rowspan=\"2\" text=\"지급금액\"/><Cell col=\"6\" text=\"선지급금액\"/><Cell col=\"7\" rowspan=\"2\" text=\"공급금액\"/><Cell col=\"8\" text=\"과세공급금액\"/><Cell col=\"9\" text=\"면세공급금액\"/><Cell col=\"10\" text=\"주류공급금액\"/><Cell col=\"11\" text=\"공병금액\"/><Cell col=\"12\" text=\"파렛트금액\"/><Cell col=\"13\" rowspan=\"2\" text=\"공제금액\"/><Cell col=\"14\" text=\"매입장려금\"/><Cell col=\"15\" text=\"관리수수료\"/><Cell col=\"16\" text=\"물류수수료\"/><Cell col=\"17\" text=\"공병반환금액\"/><Cell col=\"18\" text=\"물류사후장려금\"/><Cell col=\"19\" text=\"반환수수료금액\"/><Cell col=\"20\" text=\"대변정정금액\"/><Cell col=\"21\" text=\"합병발생금액\"/><Cell col=\"22\" text=\"년도이월발생\"/><Cell col=\"23\" text=\"이월발생금액\"/><Cell col=\"24\" text=\"최초거래일\"/><Cell col=\"25\" rowspan=\"2\" text=\"비고\"/><Cell row=\"1\" col=\"1\" text=\"최종지급일\"/><Cell row=\"1\" col=\"2\" text=\"공급처(매출)\"/><Cell row=\"1\" col=\"3\" text=\"사업장(매입)\"/><Cell row=\"1\" col=\"4\" text=\"지급예정금액\"/><Cell row=\"1\" col=\"6\" text=\"매입할인금액\"/><Cell row=\"1\" col=\"8\" text=\"과세부가세\"/><Cell row=\"1\" col=\"9\" text=\"영세공급금액\"/><Cell row=\"1\" col=\"10\" text=\"주류부가세\"/><Cell row=\"1\" col=\"11\" text=\"공상자금액\"/><Cell row=\"1\" col=\"12\" text=\"저장품금액\"/><Cell row=\"1\" col=\"14\" text=\"사후장려금\"/><Cell row=\"1\" col=\"15\" text=\"관리수수료부가세\"/><Cell row=\"1\" col=\"16\" text=\"물류수수료부가세\"/><Cell row=\"1\" col=\"17\" text=\"공상자반환금액\"/><Cell row=\"1\" col=\"18\" text=\"파렛트반환금액\"/><Cell row=\"1\" col=\"19\" text=\"반환수수료부가세\"/><Cell row=\"1\" col=\"20\" text=\"차변정정금액\"/><Cell row=\"1\" col=\"21\" text=\"합병차감금액\"/><Cell row=\"1\" col=\"22\" text=\"년도이월차감금액\"/><Cell row=\"1\" col=\"23\" text=\"이월차감금액\"/><Cell row=\"1\" col=\"24\" text=\"최종거래일\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" expr=\"expr:currow+1\"/><Cell col=\"1\" expr=\"expr:comp.parent.parent.dateForm(PY_PLA_DT)\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:NA_ADJPL_C_NM\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:NA_BZPLC_NM\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CBAM\" mask=\"#,##0\"/><Cell col=\"5\" rowspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PY_AM\" mask=\"#,##0\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PPY_AM\" mask=\"#,##0\"/><Cell col=\"7\" rowspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SPY_AM\" mask=\"#,##0\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TXT_AM\" mask=\"#,##0\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:EXTX_AM\" mask=\"#,##0\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:LIQ_SPY_AM\" mask=\"#,##0\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:VCBT_AM\" mask=\"#,##0\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:VPLTT_AM\" mask=\"#,##0\"/><Cell col=\"13\" rowspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:MAD_AM\" mask=\"#,##0\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BYNG_SSDY\" mask=\"#,##0\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AMN_FEE\" mask=\"#,##0\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PHD_FEE\" mask=\"#,##0\"/><Cell col=\"17\" displaytype=\"number\" style=\"align:right;\" text=\"bind:VCBT_RTU_AM\" mask=\"#,##0\"/><Cell col=\"18\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PHD_AFF_SSDY\" mask=\"#,##0\"/><Cell col=\"19\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RTU_FEE\" mask=\"#,##0\"/><Cell col=\"20\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CR_CRC_AM\" mask=\"#,##0\"/><Cell col=\"21\" displaytype=\"number\" style=\"align:right;\" text=\"bind:MRG_OCU_AM\" mask=\"#,##0\"/><Cell col=\"22\" displaytype=\"number\" style=\"align:right;\" text=\"bind:YY_CROV_AM\" mask=\"#,##0\"/><Cell col=\"23\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CROV_OCU_AM\" mask=\"#,##0\"/><Cell col=\"24\" displaytype=\"normal\" expr=\"expr:comp.parent.parent.dateForm(FTR_TR_DT)\"/><Cell col=\"25\" rowspan=\"2\" displaytype=\"normal\" text=\"bind:RMK_CNTN1\"/><Cell row=\"1\" col=\"1\" expr=\"expr:comp.parent.parent.dateForm(LS_PY_DT)\"/><Cell row=\"1\" col=\"2\" style=\"align:left;\" text=\"bind:NA_TRPL_C_NM\"/><Cell row=\"1\" col=\"3\" style=\"align:left;\" text=\"bind:ADJ_NA_BZPLC_NM\"/><Cell row=\"1\" col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ACTL_PY_PLA_AM\" mask=\"#,##0\"/><Cell row=\"1\" col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BYNG_DC_AM\" mask=\"#,##0\"/><Cell row=\"1\" col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TXT_VAT\" mask=\"#,##0\"/><Cell row=\"1\" col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SMA_AM\" mask=\"#,##0\"/><Cell row=\"1\" col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:LIQ_SPY_VAT\" mask=\"#,##0\"/><Cell row=\"1\" col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:VCBX_AM\" mask=\"#,##0\"/><Cell row=\"1\" col=\"12\" displaytype=\"number\" style=\"align:right;\" mask=\"#,##0\"/><Cell row=\"1\" col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AFF_SSDY\" mask=\"#,##0\"/><Cell row=\"1\" col=\"15\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AMN_FEE_VAT\" mask=\"#,##0\"/><Cell row=\"1\" col=\"16\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PHD_FEE_VAT\" mask=\"#,##0\"/><Cell row=\"1\" col=\"17\" displaytype=\"number\" style=\"align:right;\" text=\"bind:VCBX_RTU_AM\" mask=\"#,##0\"/><Cell row=\"1\" col=\"18\" displaytype=\"number\" style=\"align:right;\" text=\"bind:VPLTT_RTU_AM\" mask=\"#,##0\"/><Cell row=\"1\" col=\"19\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RTU_FEE_VAT\" mask=\"#,##0\"/><Cell row=\"1\" col=\"20\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DB_CRC_AM\" mask=\"#,##0\"/><Cell row=\"1\" col=\"21\" displaytype=\"number\" style=\"align:right;\" text=\"bind:MRG_SBT_AM\" mask=\"#,##0\"/><Cell row=\"1\" col=\"22\" displaytype=\"number\" style=\"align:right;\" text=\"bind:YY_CROV_SBT_AM\" mask=\"#,##0\"/><Cell row=\"1\" col=\"23\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CROV_SBT_AM\" mask=\"#,##0\"/><Cell row=\"1\" col=\"24\" displaytype=\"normal\" expr=\"expr:comp.parent.parent.dateForm(LS_TR_DT)\"/></Band><Band id=\"summary\"><Cell rowspan=\"2\" colspan=\"4\" style=\"align:center;\" text=\"합계\"/><Cell col=\"4\" displaytype=\"number\" expr=\"expr:dataset.getSum('CBAM')\" mask=\"#,##0\"/><Cell col=\"5\" rowspan=\"2\" displaytype=\"number\" expr=\"expr:dataset.getSum('PY_AM')\" mask=\"#,##0\"/><Cell col=\"6\" displaytype=\"number\" expr=\"expr:dataset.getSum('PPY_AM')\" mask=\"#,##0\"/><Cell col=\"7\" rowspan=\"2\" displaytype=\"number\" expr=\"expr:dataset.getSum('SPY_AM')\" mask=\"#,##0\"/><Cell col=\"8\" displaytype=\"number\" expr=\"expr:dataset.getSum('TXT_AM')\" mask=\"#,##0\"/><Cell col=\"9\" displaytype=\"number\" expr=\"expr:dataset.getSum('EXTX_AM')\" mask=\"#,##0\"/><Cell col=\"10\" displaytype=\"number\" expr=\"expr:dataset.getSum('LIQ_SPY_AM')\" mask=\"#,##0\"/><Cell col=\"11\" displaytype=\"number\" expr=\"expr:dataset.getSum('VCBT_AM')\" mask=\"#,##0\"/><Cell col=\"12\" displaytype=\"number\" expr=\"expr:dataset.getSum('VPLTT_AM')\" mask=\"#,##0\"/><Cell col=\"13\" rowspan=\"2\" displaytype=\"number\" expr=\"expr:dataset.getSum('MAD_AM')\" mask=\"#,##0\"/><Cell col=\"14\" displaytype=\"number\" expr=\"expr:dataset.getSum('BYNG_SSDY')\" mask=\"#,##0\"/><Cell col=\"15\" displaytype=\"number\" expr=\"expr:dataset.getSum('AMN_FEE')\" mask=\"#,##0\"/><Cell col=\"16\" displaytype=\"number\" expr=\"expr:dataset.getSum('PHD_FEE')\" mask=\"#,##0\"/><Cell col=\"17\" displaytype=\"number\" expr=\"expr:dataset.getSum('VCBT_RTU_AM')\" mask=\"#,##0\"/><Cell col=\"18\" displaytype=\"number\" expr=\"expr:dataset.getSum('PHD_AFF_SSDY')\" mask=\"#,##0\"/><Cell row=\"1\" col=\"18\" displaytype=\"number\" expr=\"expr:dataset.getSum('VPLTT_RTU_AM')\" mask=\"#,##0\"/><Cell col=\"19\" displaytype=\"number\" expr=\"expr:dataset.getSum('RTU_FEE')\" mask=\"#,##0\"/><Cell col=\"20\" displaytype=\"number\" expr=\"expr:dataset.getSum('CR_CRC_AM')\" mask=\"#,##0\"/><Cell col=\"21\" displaytype=\"number\" expr=\"expr:dataset.getSum('MRG_OCU_AM')\" mask=\"#,##0\"/><Cell col=\"22\" displaytype=\"number\" expr=\"expr:dataset.getSum('YY_CROV_AM')\" mask=\"#,##0\"/><Cell col=\"23\" displaytype=\"number\" expr=\"expr:dataset.getSum('CROV_OCU_AM')\" mask=\"#,##0\"/><Cell col=\"24\"/><Cell col=\"25\" rowspan=\"2\"/><Cell row=\"1\" col=\"4\" displaytype=\"number\" expr=\"expr:dataset.getSum('ACTL_PY_PLA_AM')\" mask=\"#,##0\"/><Cell row=\"1\" col=\"6\" displaytype=\"number\" expr=\"expr:dataset.getSum('BYNG_DC_AM')\" mask=\"#,##0\"/><Cell row=\"1\" col=\"8\" displaytype=\"number\" expr=\"expr:dataset.getSum('TXT_VAT')\" mask=\"#,##0\"/><Cell row=\"1\" col=\"9\" displaytype=\"number\" expr=\"expr:dataset.getSum('SMA_AM')\" mask=\"#,##0\"/><Cell row=\"1\" col=\"10\" displaytype=\"number\" expr=\"expr:dataset.getSum('LIQ_SPY_VAT')\" mask=\"#,##0\"/><Cell row=\"1\" col=\"11\" displaytype=\"number\" expr=\"expr:dataset.getSum('VCBX_AM')\" mask=\"#,##0\"/><Cell row=\"1\" col=\"12\" displaytype=\"number\" mask=\"#,##0\"/><Cell row=\"1\" col=\"14\" displaytype=\"number\" expr=\"expr:dataset.getSum('AFF_SSDY')\" mask=\"#,##0\"/><Cell row=\"1\" col=\"15\" displaytype=\"number\" expr=\"expr:dataset.getSum('AMN_FEE_VAT')\" mask=\"#,##0\"/><Cell row=\"1\" col=\"16\" displaytype=\"number\" expr=\"expr:dataset.getSum('PHD_FEE_VAT')\" mask=\"#,##0\"/><Cell row=\"1\" col=\"17\" displaytype=\"number\" expr=\"expr:dataset.getSum('VCBX_RTU_AM')\" mask=\"#,##0\"/><Cell row=\"1\" col=\"19\" displaytype=\"number\" expr=\"expr:dataset.getSum('RTU_FEE_VAT')\" mask=\"#,##0\"/><Cell row=\"1\" col=\"20\" displaytype=\"number\" expr=\"expr:dataset.getSum('DB_CRC_AM')\" mask=\"#,##0\"/><Cell row=\"1\" col=\"21\" displaytype=\"number\" expr=\"expr:dataset.getSum('MRG_SBT_AM')\" mask=\"#,##0\"/><Cell row=\"1\" col=\"22\" displaytype=\"number\" expr=\"expr:dataset.getSum('YY_CROV_SBT_AM')\" mask=\"#,##0\"/><Cell row=\"1\" col=\"23\" displaytype=\"number\" expr=\"expr:dataset.getSum('CROV_SBT_AM')\" mask=\"#,##0\"/><Cell row=\"1\" col=\"24\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "936", "-1", null, "15", "2", null, this.div_list);
            obj.set_taborder("53");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "936", "35", null, "5", "2", null, this.div_list);
            obj.set_taborder("54");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new WebBrowser("web_downExcelM", "absolute", "588", "14", "35", "14", null, null, this.div_list);
            obj.set_taborder("55");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", null, null, "40", "15", "5", this);
            obj.set_taborder("8");
            obj.set_text("외상매출회수예정 화면 <b v='true'>기능문의</b>는 <u v='true'>하나로eSCM고객센터(02-1522-1211)</u>로, <b v='true'>금액문의</b>는 <u v='true'>담당 바이어</u>에게로 부탁드립니다.");
            obj.set_wordwrap("char");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 69, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 978, 800, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("7");
            		p.set_text("Div02");
            		p.set_scrollbars("none");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1201");
            		p.set_titletext("외상매출 회수예정");

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
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1200.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1200.xfdl", function() {
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
           this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	this.div_search.cal_from.set_value(this.gfn_today('yyyyMM')+'01');
        	this.div_search.cal_to.set_value(this.gfn_today('yyyyMMdd'));
        	this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        }

        //초기화
        this.btn_clear00_onclick = function(obj,e)
        {
        	this.reload();
        }

        this.div_search_btn_popup_onclick = function(params)
        {
        	if(params == true){	
        		if(this.gfn_nullToEmpty(this.div_search.edt_na_bzplc_code.value).length > 0 && this.gfn_nullToEmpty(this.div_search.edt_na_bzplc_code.value).length < 8){
        			this.gfn_getMessage('alert','msg.van_ds_sc_1302.view.text.between');
        			return;
        		}
        		if(this.gfn_nullToEmpty(this.div_search.edt_na_bzplc_name.value).length == 1){
        			this.gfn_getMessage('alert','msg.van_ds_sc_1302.view.input.bzplcnm');
        			return;
        		}
        	}
        	
        	var param = {
        				autoType:params,
        				searchCode:this.div_search.edt_na_bzplc_code.value,
        				searchText:this.div_search.edt_na_bzplc_name.value
        	};
        	if(typeof params == "boolean"){
        		if(!this.searPopValue(param)){return};
        	}
        	var oArg = {dsArg:this.Dataset00, autoPop:param};
        	var sOption = "autosize=true, titleText=false";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("rvopl_c","POPUP::POPUP_SRC_RVOPL_TRPL.xfdl",oArg,sOption,sPopupCallBack);	
        }

        this.fn_popupAfter = function(svcID,strVal)
        {
        	if(strVal != undefined){
        		if(svcID == "rvopl_c"){
        			this.div_search.edt_na_bzplc_code.set_value(strVal.split(',')[0]);
        			this.div_search.edt_na_bzplc_name.set_value(strVal.split(',')[1]);
        		}
        	}
        }

        this.div_search_edt_na_bzplc_code_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.div_search_btn_popup_onclick(true);
        	}
        }

        this.div_search_edt_na_bzplc_name_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.div_search_btn_popup_onclick(true);
        	}
        }

        this.btn_search_onclick = function(obj,e)
        {
        	this.search();
        }

        //조회
        this.search = function()
        {
        	this.ds_dataM.clearData();
        	this.ds_sum.clearData();	
        	
        	if(this.fn_validationCheck()){
        	
        		//권한사업장 코드
        		var trplC = this.getTrplCode();
        		
        		var DATE_TYPE = this.gfn_nullToEmpty(this.div_search.rdo_byng_slam_type.value); //조회일자 - 기준일자 , 회수예정일자
        		var START_DATE = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        		var END_DATE = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일
        		var NA_BZPLC = "";
        		if(this.div_search.rdo_is_na_all.value == "1"){
        			NA_BZPLC = "1";
        		}else{
        			NA_BZPLC = this.gfn_nullToEmpty(this.div_search.edt_na_bzplc_code.value); //사업장
        		}
        		 
        		var CPL_YN = this.div_search.rdo_byng_slam_gubun.value; //조회구분
        		
        		var param = " DATE_TYPE="+DATE_TYPE+
        					" FROM_DT="+START_DATE+
        					" TO_DT="+END_DATE+
        					" NA_BZPLC="+NA_BZPLC+
        					" CPL_YN="+CPL_YN+
        					" TRPL_C=" + trplC;
        					
        		trace("##MASTER##PARAM##->"+param);
         			
        		var sSvcID        = "getCreditSaleReserveList";//통신아이디
        		var sURL          = "svc::rest/pds/pay/getCreditSaleReserveList";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_dataM=DATASET";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = param;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        /* Validation Check */
        this.fn_validationCheck = function(){

        	if(this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value) < 0){
        	
        		//조회 시작일과 종료일을 다시 확인해 주세요
        		this.gfn_getMessage("alert", "validation.message.fromDate.toDate.reConfirm");
        		return false;
        	}else if(this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value) > 31){
        		//기간을 31일 이내로 선택해 주세요
        		this.gfn_getMessage("alert", "validation.message.selectDateIn31Day");
        		return false;
        	}
        	return true;
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0){
        		this.gfn_getMessage('alert',ErrorMsg);
        		return;
        	}else{
        		if(svcID == "getCreditSaleReserveList"){
        			
        		}
        	}
        }

        //출력
        this.btn_print_onclick = function(obj,e)
        {
        	if(this.div_list.grd_master.rowcount < 1){
        		this.gfn_getMessage('alert','result.message.search.no.exist.data');
        		return;
        	}
        	var bz_code = this.gfn_nullToEmpty(this.div_search.edt_data00.value);
        	var lclc = this.gfn_nullToEmpty(this.div_search.edt_data08.value);
        	var sto_gubun = this.div_search.rdo_store_chk00.value;
        	
        	var titleForm = this.getTrplCodePrint()
        					+" ,조회일자:"+bz_code
        					+" ,조회구분:"+lclc
        					+" ,사업장:"+sto_gubun
        	;
        	
        	var ozParam = {
        		sId: 'VAN_DS_SC_1200',
        		sUrl: '/rest/oz/',
        		paramType: 'param',
        		sParam: {
        			TRPL_C_TEXT:titleForm,
        			TRPL_C:this.getTrplCode(),
        			storesch:bz_code
        		}
        	};
        	this.ozViewer(ozParam);	
        }

        //엑셀 다운로드 버튼
        this.btn_excel_onclick = function(obj,e)
        {
        	//권한사업장 코드
        	var trplC = this.getTrplCode();
        	
        	var DATE_TYPE = this.gfn_nullToEmpty(this.div_search.rdo_byng_slam_type.value); //조회일자 - 기준일자 , 회수예정일자
        	var START_DATE = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        	var END_DATE = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일
        	var NA_BZPLC = "";
        	if(this.div_search.rdo_is_na_all.value == "1"){
        		NA_BZPLC = "1";
        	}else{
        		NA_BZPLC = this.gfn_nullToEmpty(this.div_search.edt_na_bzplc_code.value); //사업장
        	}
        	var CPL_YN = this.div_search.rdo_byng_slam_gubun.value; //조회구분
        	
        	var param = "&DATE_TYPE="+DATE_TYPE+
        				"&FROM_DT="+START_DATE+
        				"&TO_DT="+END_DATE+
        				"&NA_BZPLC="+NA_BZPLC+
        				"&CPL_YN="+CPL_YN+
        				"&TRPL_C=" + trplC;
        	
        	trace("##MASTER##PARAM##->"+param);
        	
        	excelDownHandler(application.gv_server_url+"rest/excel/pds/pay/getCreditSaleReserveList?"+param, this);
        }

        
        this.div_list_btn_divResize_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        this.dateForm = function(obj)
        {
        	var rval = obj.substr(0,4)+"-"+obj.substr(4,2)+"-"+obj.substr(6,2);
        	return rval;
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_clear00.addEventHandler("onclick", this.btn_clear00_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.div_search.edt_na_bzplc_code.addEventHandler("onkeydown", this.div_search_edt_na_bzplc_code_onkeydown, this);
            this.div_search.edt_na_bzplc_name.addEventHandler("onkeydown", this.div_search_edt_na_bzplc_name_onkeydown, this);
            this.div_search.btn_popup.addEventHandler("onclick", this.div_search_btn_popup_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.div_list.btn_divResize.addEventHandler("onclick", this.div_list_btn_divResize_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1200.xfdl");
        this.loadPreloadList();
       
    };
}
)();
