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
                this.set_name("VAN_DS_SC_0600");
                this.set_titletext("반품 입고 의뢰 조회");
                this._setFormPosition(0,0,803,1007);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_na_rgd_sts_dsc", this);
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

            obj = new Dataset("ds_retannRqtM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RTNCNF_DTM\" type=\"datetime\" size=\"17\"/><Column id=\"NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"RGD_RG_DT\" type=\"string\" size=\"32\"/><Column id=\"RGD_PLA_NO\" type=\"string\" size=\"32\"/><Column id=\"NA_RGD_STS_DSC\" type=\"string\" size=\"32\"/><Column id=\"OGN_SLPNO\" type=\"string\" size=\"32\"/><Column id=\"OSLIP_DT\" type=\"string\" size=\"32\"/><Column id=\"NA_TEAM_C\" type=\"string\" size=\"32\"/><Column id=\"RGD_QT\" type=\"int\" size=\"4\"/><Column id=\"ITEM_CNT\" type=\"float\" size=\"8\"/><Column id=\"RGD_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"BYNG_DFN_QT\" type=\"float\" size=\"8\"/><Column id=\"BYNG_DFN_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"RGD_VAT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"VCBT_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"BYNG_DFN_TROT_FEE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"BYNG_DFN_PHD_FEE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"WDR_PLA_DT\" type=\"string\" size=\"32\"/><Column id=\"SPY_TPC\" type=\"string\" size=\"32\"/><Column id=\"CSER_CTR_TPC\" type=\"string\" size=\"32\"/><Column id=\"XML_RGD_PLA_NO\" type=\"string\" size=\"32\"/><Column id=\"RMK_CNTN\" type=\"string\" size=\"32\"/><Column id=\"LSCHG_DTM\" type=\"datetime\" size=\"17\"/><Column id=\"LS_CMENO\" type=\"string\" size=\"32\"/><Column id=\"DEL_DTM\" type=\"datetime\" size=\"17\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_retannRqtSumM_back", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_RGD_STS_DSC\" type=\"string\" size=\"32\"/><Column id=\"NA_TEAM_C\" type=\"string\" size=\"32\"/><Column id=\"RGD_RG_DT\" type=\"string\" size=\"32\"/><Column id=\"RVOPL_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"RVOPL_CLNTNM\" type=\"string\" size=\"32\"/><Column id=\"NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"CLNTNM\" type=\"string\" size=\"32\"/><Column id=\"TEL\" type=\"string\" size=\"32\"/><Column id=\"RGD_QT\" type=\"float\" size=\"8\"/><Column id=\"BYNG_DFN_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"RGD_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"RGD_VAT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"VCBT_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"BYNG_DFN_TROT_FEE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"BYNG_DFN_PHD_FEE\" type=\"bigdecimal\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_retannRqtD", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_C\" type=\"string\" size=\"32\"/><Column id=\"WRSNM\" type=\"string\" size=\"32\"/><Column id=\"RGD_UPR\" type=\"float\" size=\"8\"/><Column id=\"RGD_QT\" type=\"float\" size=\"8\"/><Column id=\"RGD_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"BYNG_DFN_AM\" type=\"float\" size=\"8\"/><Column id=\"BYNG_DFN_QT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"RGD_VAT\" type=\"float\" size=\"8\"/><Column id=\"BYNG_DFN_TROT_FEE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"BYNG_DFN_PHD_FEE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"VCBT_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"NA_RGD_RSN_DSC\" type=\"string\" size=\"32\"/><Column id=\"AJ_UPR\" type=\"float\" size=\"8\"/><Column id=\"NA_WRS_UNT\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_UNT_C\" type=\"string\" size=\"32\"/><Column id=\"BYNG_DFN_UPR\" type=\"bigdecimal\" size=\"8\"/><Column id=\"RGD_SQNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_retannRqtSumM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_RGD_STS_DSC\" type=\"string\" size=\"32\"/><Column id=\"NA_TEAM_C\" type=\"string\" size=\"32\"/><Column id=\"RGD_RG_DT\" type=\"string\" size=\"32\"/><Column id=\"RVOPL_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"RVOPL_CLNTNM\" type=\"string\" size=\"32\"/><Column id=\"NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"CLNTNM\" type=\"string\" size=\"32\"/><Column id=\"TEL\" type=\"string\" size=\"32\"/><Column id=\"RTNCNF_DTM\" type=\"datetime\" size=\"17\"/><Column id=\"RGD_PLA_NO\" type=\"string\" size=\"32\"/><Column id=\"OGN_SLPNO\" type=\"string\" size=\"32\"/><Column id=\"OSLIP_DT\" type=\"string\" size=\"32\"/><Column id=\"ITEM_CNT\" type=\"int\" size=\"4\"/><Column id=\"RGD_QT\" type=\"float\" size=\"8\"/><Column id=\"RGD_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"BYNG_DFN_QT\" type=\"float\" size=\"8\"/><Column id=\"BYNG_DFN_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"RGD_VAT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"VCBT_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"BYNG_DFN_TROT_FEE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"BYNG_DFN_PHD_FEE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"WDR_PLA_DT\" type=\"string\" size=\"32\"/><Column id=\"WDRPL_CLNTNM\" type=\"string\" size=\"32\"/><Column id=\"SPY_TPC\" type=\"string\" size=\"32\"/><Column id=\"CSER_CTR_TPC\" type=\"string\" size=\"32\"/><Column id=\"XML_RGD_PLA_NO\" type=\"string\" size=\"32\"/><Column id=\"RMK_CNTN\" type=\"string\" size=\"32\"/><Column id=\"LSCHG_DTM\" type=\"datetime\" size=\"17\"/><Column id=\"LS_CMENO\" type=\"string\" size=\"32\"/><Column id=\"DEL_DTM\" type=\"datetime\" size=\"17\"/><Column id=\"PRC_YN\" type=\"string\" size=\"32\"/><Column id=\"RSP_C_CNTN\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "95", "15", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Div("div_m2", "absolute", "114", "33", "522", "28", null, null, this.div_search);
            obj.set_taborder("57");
            obj.style.set_background("transparent");
            this.div_search.addChild(obj.name, obj);
            obj = new MaskEdit("msk_rgd_code", "absolute", "4", "3", "110", "21", null, null, this.div_search.div_m2);
            obj.set_taborder("0");
            obj.set_mask("#############");
            obj.set_clipmode("excludespace");
            obj.set_enable("false");
            this.div_search.div_m2.addChild(obj.name, obj);
            obj = new Edit("edt_rgd_name", "absolute", "117", "3", "367", "21", null, null, this.div_search.div_m2);
            obj.set_taborder("1");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.div_search.div_m2.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "36", "89", "21", null, null, this.div_search);
            obj.set_taborder("35");
            obj.set_text("본/지사");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_na_rgd_sts_dsc", "absolute", "485", "10", "113", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("37");
            obj.set_innerdataset("@ds_na_rgd_sts_dsc");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_index("-1");
            obj = new Static("Static05", "absolute", "15", "62", "89", "21", null, null, this.div_search);
            obj.set_taborder("38");
            obj.set_text("조회구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_search_type", "absolute", "118", "62", "210", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_search_type_innerdataset = new Dataset("rdo_search_type_innerdataset", this.div_search.rdo_search_type);
            rdo_search_type_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">반품의뢰처</Col></Row></Rows>");
            obj.set_innerdataset(rdo_search_type_innerdataset);
            obj.set_taborder("39");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Button("btn_rgd_rqt", "absolute", "601", "62", "21", "21", null, null, this.div_search);
            obj.set_taborder("40");
            obj.set_cssclass("btn_WF_Searchbtn");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_rgd_rqt_name", "absolute", "447", "62", "151", "21", null, null, this.div_search);
            obj.set_taborder("41");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "15", "10", "103", "21", null, null, this.div_search);
            obj.set_taborder("48");
            obj.set_text("반품의뢰기간");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "358", "10", "127", "21", null, null, this.div_search);
            obj.set_taborder("49");
            obj.set_text("반품상태구분코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_from", "absolute", "118", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("51");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static131", "absolute", "218", "10", "10", "21", null, null, this.div_search);
            obj.set_taborder("52");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_to", "absolute", "228", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("53");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Div("div_m1", "absolute", "101", "29", "573", "33", null, null, this.div_search);
            obj.set_taborder("56");
            obj.style.set_background("transparent");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_rpt", "absolute", "17", "7", "210", "21", null, null, this.div_search.div_m1);
            this.div_search.div_m1.addChild(obj.name, obj);
            var rdo_rpt_innerdataset = new Dataset("rdo_rpt_innerdataset", this.div_search.div_m1.rdo_rpt);
            rdo_rpt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">반품처</Col></Row></Rows>");
            obj.set_innerdataset(rdo_rpt_innerdataset);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Edit("edt_rgd_name", "absolute", "346", "7", "151", "21", null, null, this.div_search.div_m1);
            obj.set_taborder("3");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.div_search.div_m1.addChild(obj.name, obj);
            obj = new Button("btn_rgd", "absolute", "500", "7", "21", "21", null, null, this.div_search.div_m1);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_Searchbtn");
            obj.set_visible("false");
            this.div_search.div_m1.addChild(obj.name, obj);
            obj = new Edit("msk_rgd_code", "absolute", "227", "7", "116", "21", null, null, this.div_search.div_m1);
            obj.set_taborder("2");
            obj.set_enable("false");
            obj.set_maxlength("13");
            obj.set_inputtype("number");
            this.div_search.div_m1.addChild(obj.name, obj);
            obj = new Edit("msk_rgd_rqt_code", "absolute", "328", "62", "116", "21", null, null, this.div_search);
            obj.set_taborder("58");
            obj.set_maxlength("13");
            obj.set_inputtype("number");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "1", "30", null, "69", "977", null, this);
            obj.set_taborder("6");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "123", "30", null, "10", "790", null, this);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "123", "113", null, "10", "790", null, this);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "338", "61", null, "5", "575", null, this);
            obj.set_taborder("10");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "788", "0", "15", "490", null, null, this);
            obj.set_taborder("11");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "732", "21", "56", "8", null, null, this);
            obj.set_taborder("12");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "118", null, this);
            obj.set_taborder("22");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("23");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "36", "408", null, this);
            obj.set_taborder("25");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "123", null, null, "15", "0", this);
            obj.set_taborder("14");
            obj.set_text("Div02");
            obj.set_scrollbars("autoboth");
            this.addChild(obj.name, obj);
            obj = new Button("btn_divResize", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_detail01", "absolute", "0", "392", null, "468", "0", null, this.div_list);
            obj.set_taborder("26");
            obj.set_binddataset("ds_retannRqtD");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"135\"/><Column size=\"210\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"상품코드\"/><Cell col=\"2\" text=\"상품명\"/><Cell col=\"3\" text=\"반품일련번호\"/><Cell col=\"4\" text=\"단위\"/><Cell col=\"5\" text=\"단가\" mask=\"단가\"/><Cell col=\"6\" text=\"반품수량\"/><Cell col=\"7\" text=\"반품금액\"/><Cell col=\"8\" text=\"매입확정수량\"/><Cell col=\"9\" text=\"매입확정금액\"/><Cell col=\"10\" text=\"부가세액\"/><Cell col=\"11\" text=\"환급수수료액\"/><Cell col=\"12\" text=\"물류수수료액\"/><Cell col=\"13\" text=\"공병금액\"/><Cell col=\"14\" text=\"반품사유\"/><Cell col=\"15\" text=\"조정단가\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:NA_WRS_C\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:WRSNM\"/><Cell col=\"3\" text=\"bind:RGD_SQNO\"/><Cell col=\"4\" text=\"bind:NA_WRS_UNT_C\"/><Cell col=\"5\" style=\"align:right;\" text=\"bind:RGD_UPR\"/><Cell col=\"6\" style=\"align:right;\" text=\"bind:RGD_QT\"/><Cell col=\"7\" style=\"align:right;\" text=\"bind:RGD_AM\"/><Cell col=\"8\" style=\"align:right;\" text=\"bind:BYNG_DFN_QT\"/><Cell col=\"9\" style=\"align:right;\" text=\"bind:BYNG_DFN_AM\"/><Cell col=\"10\" style=\"align:right;\" text=\"bind:RGD_VAT\"/><Cell col=\"11\" style=\"align:right;\" text=\"bind:BYNG_DFN_TROT_FEE\"/><Cell col=\"12\" style=\"align:right;\" text=\"bind:BYNG_DFN_PHD_FEE\"/><Cell col=\"13\" style=\"align:right;\" text=\"bind:VCBT_AM\"/><Cell col=\"14\" style=\"align:left;\" text=\"bind:NA_RGD_RSN_DSC\"/><Cell col=\"15\" style=\"align:right;\" text=\"bind:AJ_UPR\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_master", "absolute", "0", "42", null, "314", "0", null, this.div_list);
            obj.set_taborder("27");
            obj.set_binddataset("ds_retannRqtSumM");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"240\"/><Column size=\"120\"/><Column size=\"240\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"240\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"145\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"145\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"반품처\"/><Cell col=\"2\" text=\"반품처명\"/><Cell col=\"3\" text=\"반품의뢰처\"/><Cell col=\"4\" text=\"반품의뢰처명\"/><Cell col=\"5\" text=\"전화번호\"/><Cell col=\"6\" text=\"반품등록일\"/><Cell col=\"7\" text=\"반품번호\"/><Cell col=\"8\" text=\"상태\"/><Cell col=\"9\" text=\"반품확인일시\"/><Cell col=\"10\" text=\"매입전표일자\"/><Cell col=\"11\" text=\"매입전표번호\"/><Cell col=\"12\" text=\"의뢰처팀\"/><Cell col=\"13\" text=\"품목수\"/><Cell col=\"14\" text=\"반품수량\"/><Cell col=\"15\" text=\"반품금액\"/><Cell col=\"16\" text=\"매입확정수량\"/><Cell col=\"17\" text=\"매입확정금액\"/><Cell col=\"18\" text=\"부가세액\"/><Cell col=\"19\" text=\"공병금액\"/><Cell col=\"20\" text=\"환급수수료액\"/><Cell col=\"21\" text=\"물류수수료액\"/><Cell col=\"22\" text=\"회수예정일자\"/><Cell col=\"23\" text=\"회수처명\"/><Cell col=\"24\" text=\"공급유형\"/><Cell col=\"25\" text=\"수요자계약유형\"/><Cell col=\"26\" text=\"XML반품예정번호\"/><Cell col=\"27\" text=\"비고\"/><Cell col=\"28\" text=\"최종변경일시\"/><Cell col=\"29\" text=\"최종변경자개인번호\"/><Cell col=\"30\" text=\"삭제일시\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:RVOPL_NA_TRPL_C\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:RVOPL_CLNTNM\"/><Cell col=\"3\" text=\"bind:NA_TRPL_C\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:CLNTNM\"/><Cell col=\"5\" text=\"bind:TEL\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:RGD_RG_DT\" mask=\"yyyy-MM-dd\"/><Cell col=\"7\" text=\"bind:RGD_PLA_NO\"/><Cell col=\"8\" text=\"bind:NA_RGD_STS_DSC\"/><Cell col=\"9\" displaytype=\"date\" text=\"bind:RTNCNF_DTM\" mask=\"yyyy-MM-dd HH\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" displaytype=\"date\" text=\"bind:OSLIP_DT\" calendardisplaynulltype=\"none\"/><Cell col=\"11\" text=\"bind:OGN_SLPNO\"/><Cell col=\"12\" text=\"bind:NA_TEAM_C\"/><Cell col=\"13\" style=\"align:right;\" text=\"bind:ITEM_CNT\"/><Cell col=\"14\" style=\"align:right;\" text=\"bind:RGD_QT\"/><Cell col=\"15\" style=\"align:right;\" text=\"bind:RGD_AM\"/><Cell col=\"16\" style=\"align:right;\" text=\"bind:BYNG_DFN_QT\"/><Cell col=\"17\" style=\"align:right;\" text=\"bind:BYNG_DFN_AM\"/><Cell col=\"18\" style=\"align:right;\" text=\"bind:RGD_VAT\"/><Cell col=\"19\" style=\"align:right;\" text=\"bind:VCBT_AM\"/><Cell col=\"20\" style=\"align:right;\" text=\"bind:BYNG_DFN_TROT_FEE\"/><Cell col=\"21\" style=\"align:right;\" text=\"bind:BYNG_DFN_PHD_FEE\"/><Cell col=\"22\" displaytype=\"date\" text=\"bind:WDR_PLA_DT\" mask=\"yyyy-MM-dd\"/><Cell col=\"23\" style=\"align:left;\" text=\"bind:WDRPL_CLNTNM\"/><Cell col=\"24\" text=\"bind:SPY_TPC\"/><Cell col=\"25\" text=\"bind:CSER_CTR_TPC\"/><Cell col=\"26\" text=\"bind:XML_RGD_PLA_NO\"/><Cell col=\"27\" text=\"bind:RMK_CNTN\"/><Cell col=\"28\" displaytype=\"date\" text=\"bind:LSCHG_DTM\" mask=\"yyyy-MM-dd HH\" calendardisplaynulltype=\"none\"/><Cell col=\"29\" text=\"bind:LS_CMENO\"/><Cell col=\"30\" displaytype=\"date\" text=\"bind:DEL_DTM\" mask=\"yyyy-MM-dd HH\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_printD", "absolute", null, "16", "41", "21", "0", null, this.div_list);
            obj.set_taborder("34");
            obj.set_text("출력");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_gradM_excel", "absolute", null, "16", "41", "21", "43", null, this.div_list);
            obj.set_taborder("35");
            obj.set_text("엑셀");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_gradD_excel", "absolute", null, "366", "41", "21", "0", null, this.div_list);
            obj.set_taborder("36");
            obj.set_text("엑셀");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "638", "1", null, "15", "0", null, this.div_list);
            obj.set_taborder("40");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "637", "37", null, "5", "0", null, this.div_list);
            obj.set_taborder("41");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "641", "354", null, "12", "-3", null, this.div_list);
            obj.set_taborder("42");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);

            obj = new WebBrowser("web_downExcel", "absolute", "483", "12", "91", "14", null, null, this);
            obj.set_taborder("26");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web_downExcel2", "absolute", "383", "11", "65", "10", null, null, this);
            obj.set_taborder("27");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 522, 28, this.div_search.div_m2,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("57");
            		p.style.set_background("transparent");

            	}
            );
            this.div_search.div_m2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 573, 33, this.div_search.div_m1,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("56");
            		p.style.set_background("transparent");

            	}
            );
            this.div_search.div_m1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 95, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("14");
            		p.set_text("Div02");
            		p.set_scrollbars("autoboth");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 1007, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("반품 입고 의뢰 조회");

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
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_0600.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0600.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        /* form load */
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj,e);
        	
        	var param = [  
         		{code:"NA_RGD_STS_DSC",   dsName:"ds_na_rgd_sts_dsc",	selecttype:"A"}
            ];

        	this.gfn_setCommonCode(param);	
        }

        
        this.form_init = function(obj,e)
        {	
        }

        //공통코드 데이터셋 onload후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        	this.div_search.cbo_na_rgd_sts_dsc.set_index(0);
        }

        /* 페이지 로딩후 실행부분 */
        this.fn_afterFormOnload = function()
        {		
        	this.div_search.cal_from.set_value(this.gfn_minusDate(this.gfn_today("yyyyMMdd"),7));	
        	this.div_search.cal_to.set_value(this.gfn_today("yyyyMMdd"));
        		
        	//그리드 nodata
        	this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	this.div_list.grd_detail01.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	//마스터 그리드클릭 이벤트 등록
        	this.div_list.grd_master.addEventHandler("oncellclick", this.grd_afterFnc, this);
        	
        	
        	if(application.gv_mbcoType == 1){
        		//본사
        		this.div_search.div_m1.set_visible(true);	
        		this.div_search.div_m2.set_visible(false);
        		
        		this.div_search.div_m1.rdo_rpt.set_value("1");
        		this.div_search.div_m1.msk_rgd_code.set_value("");
        		this.div_search.div_m1.edt_rgd_name.set_value("");
        		
        	}else{
        		//지사
        		this.div_search.div_m1.set_visible(false);
        		this.div_search.div_m2.set_visible(true);
        		
        		this.div_search.div_m2.msk_rgd_code.set_value(application.gv_glnCode);
        		this.div_search.div_m2.edt_rgd_name.set_value(application.gv_companyName);
        		
        	}
        	
        }

        /* Validation Check */
        this.fn_validationCheck = function(){

        	if(this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value) < 0){
        	
        		//조회 시작일과 종료일을 다시 확인해 주세요
        		this.gfn_getMessage("alert", "validation.message.fromDate.toDate.reConfirm");
        		return false;
        	}else{
        		if(this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value) > 93){

        		//기간을 93일 이내로 선택해 주세요
        		this.gfn_getMessage("alert", "msg.van_ds_sc_0600.view.text3");
        		return false;
        		}
        	}	
        	
        	//반품처를 입력해주세요
        	if(this.div_search.div_m1.rdo_rpt.value == "2"){
        		if(this.gfn_isEmpty(this.div_search.div_m1.msk_rgd_code.value) == "" && this.gfn_isEmpty(this.div_search.div_m1.edt_rgd_name.value) == ""){
        				
        		this.gfn_getMessage("alert", "validation.message.needs.action",this.gfn_getTextMessage("msg.van_ds_sc_0600.view.text1"),this.gfn_getTextMessage("input.name"));
        		return false;		
        		}
        	}
        	
        	//반품의뢰처를 확인해주세요.
        	if(this.div_search.rdo_search_type.value == "2"){
        		if(this.gfn_isEmpty(this.div_search.msk_rgd_rqt_code.value) == "" && this.gfn_isEmpty(this.div_search.edt_rgd_rqt_name.value) == ""){
        				
        		this.gfn_getMessage("alert", "validation.message.needs.action",this.gfn_getTextMessage("msg.van_ds_sc_0600.view.text2"),this.gfn_getTextMessage("confirm.name"));
        		return false;		
        		}
        	}
        	
        	return true;
        }

        /* search */
        this.btn_search_onclick = function(obj,e)
        {	
        	this.ds_retannRqtSumM.clearData();
        	this.ds_retannRqtM.clearData();
        	this.ds_retannRqtD.clearData();
        		
        	if(this.fn_validationCheck()){
        		
        		var rpt = "";
        		var rgd = "";
        		
        		if(application.gv_mbcoType == 1){
        			//본사
        			rpt = this.gfn_nullToEmpty(this.div_search.div_m1.rdo_rpt.value); //본/지사구분코드		
        			rgd = this.gfn_nullToEmpty(this.div_search.div_m1.msk_rgd_code.value); //반품처코드
        		
        		}else{
        			//지사			
        			rpt = "2";
        			rgd = this.gfn_nullToEmpty(this.div_search.div_m2.msk_rgd_code.value);			
        		}		
        		
        		var rgd_rqt = this.gfn_nullToEmpty(this.div_search.msk_rgd_rqt_code.value); //반품의뢰처코드		
        		var from_date = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        		var to_date = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일	
        		var na_rgd_sts_dsc = this.gfn_nullToEmpty(this.div_search.cbo_na_rgd_sts_dsc.value); //반품상태구분코드
        		
        		//테스트 데이터
        		//from_date = "20150504"
        		//to_date = "20150504"
        		
        		
        		// 반품처 - 8801094001100
        		// 반품의뢰처 - 8808983622910
        		
        		
        		var param = " rpt="+rpt+
        					" rgd="+rgd+
        					" rgd_rqt="+rgd_rqt+
        					" from_date="+from_date+
        					" to_date="+to_date+				
        					" na_rgd_sts_dsc="+na_rgd_sts_dsc;
        					
        		trace("##MASTER##PARAM##->"+param);
        		
        		var sSvcID        = "retrieveRqtMasterSumList";//통신아이디
        		var sURL          = "svc::rest/retann/retrieveRqtMasterSumList";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_retannRqtSumM=ds_retannRqtSumM";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = param;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", ErrorMsg);
        		return;
        	}else{
        		if(svcID == "retrieveRqtMasterSumList"){
        			
        			//trace(this.ds_Rcv_M.saveXML());							
        							
        			if(this.ds_retannRqtSumM.rowcount == 0){				
        				//this.gfn_getMessage("alert", "result.message.search.no.exist.data");								
        			}else{							
        			}			
        		}else if(svcID == "retrieveRqtMasterList") {
        			if(this.ds_retannRqtM.rowcount == 0){				
        				//this.gfn_getMessage("alert", "result.message.search.no.exist.data");								
        			}
        		}else if(svcID == "retrieveRqtDetailList") {
        			if(this.ds_retannRqtD.rowcount == 0){				
        				//this.gfn_getMessage("alert", "result.message.search.no.exist.data");								
        			}
        		}
        	}
        }
        this.div_search_rdo_search_type_onitemchanged = function(obj,e)
        {
        	if (this.div_search.rdo_search_type.value == "1"){
        	
        		this.div_search.msk_rgd_rqt_code.set_value("");
        		this.div_search.edt_rgd_rqt_name.set_value("");
        	
        		this.div_search.msk_rgd_rqt_code.set_enable(false);
        		this.div_search.edt_rgd_rqt_name.set_enable(false);
        		this.div_search.btn_rgd_rqt.set_visible(false);
        	
        	}else if (this.div_search.rdo_search_type.value == "2"){
        	
        		this.div_search.msk_rgd_rqt_code.set_enable(true);
        		this.div_search.edt_rgd_rqt_name.set_enable(true);
        		this.div_search.btn_rgd_rqt.set_visible(true);
        	}
        	
        }

        this.div_search_rdo_rpt_onitemchanged = function(obj,e)
        {
        	//전체
        	if (this.div_search.div_m1.rdo_rpt.value == "1"){
        	
        		this.div_search.div_m1.msk_rgd_code.set_value("");
        		this.div_search.div_m1.edt_rgd_name.set_value("");
        		
        		this.div_search.div_m1.msk_rgd_code.set_enable(false);
        		this.div_search.div_m1.edt_rgd_name.set_enable(false);
        		this.div_search.div_m1.btn_rgd.set_visible(false);
        	
        	}else{
        	
        		this.div_search.div_m1.msk_rgd_code.set_enable(true);
        		this.div_search.div_m1.edt_rgd_name.set_enable(true);
        		this.div_search.div_m1.btn_rgd.set_visible(true);	
        	}
        }

        /*본/지사 에디트박스에 코드 입력시*/
        this.div_search_msk_rgd_code_onkeydown = function(obj,e)
        {
        	this.div_search.div_m1.rdo_rpt.set_value("2");
        }

        /*본/지사 에디트박스에 이름 입력시*/
        this.div_search_edt_rgd_name_onkeydown = function(obj,e)
        {
        	this.div_search.div_m1.rdo_rpt.set_value("2");
        	
        	if(e.keycode==13)
        	{	
        		this.div_search_btn_rgd_onclick(true);
        	}
        }

        /* 본/지사 반품처 돋보기버튼 클릭시 팝업*/
        this.div_search_btn_rgd_onclick = function(params)
        {
        	
        	var rgd = this.gfn_nullToEmpty(this.div_search.div_m1.msk_rgd_code.value); //반품처코드
        	var rgd_name = this.gfn_nullToEmpty(this.div_search.div_m1.edt_rgd_name.value); //반품처이름	
        	
        	trace("=================");
        	trace("팝업의 파라미터");
        	trace("오토타입  --> " + params);
        	trace("반품처코드  --> " + rgd);
        	trace("반품처이름  --> " + rgd_name);
        	trace("=================");		
        	
        	var param = {
                    autoType:params,
                    searchCode:rgd,
                    searchText:rgd_name
        	};
        	
        	
        	if(typeof params == "boolean"){
        		
        		if(!this.searPopValue(param)){return};
              
           };   
           
        	var oArg = {autoPop:param};
        	var sOption = "autosize=true,title=false";
        	var sPopupCallBack = "fn_popupAfter_P00";
        	this.gfn_openPopup("VAN_DS_SC_0600_P00","SCM.RETANN::VAN_DS_SC_0600_P00.xfdl",oArg,sOption,sPopupCallBack);
        	
        	/*
        	//var rgd = this.gfn_nullToEmpty(this.div_search.msk_rgd_code.value); //반품처코드
        	//var rgd_name = this.gfn_nullToEmpty(this.div_search.edt_rgd_name.value); //반품처이름	
        	
        	var oArg = {code:this.div_search.msk_rgd_code.value, name:this.div_search.edt_rgd_name.value};
        	var sOption = "autosize=true,title=false";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("ABC","SCM.RETANN::VAN_DS_SC_0600_P00.xfdl",oArg,sOption,sPopupCallBack);
        	*/
        }

        

        this.grd_afterFnc = function(obj,e)
        {		
        	this.ds_retannRqtM.clearData();
        	this.ds_retannRqtD.clearData();
        /*	
        	if(e.reason == 51)
        	{		
        		this.ds_retannRqtSumM.set_enableevent(false);
        		this.ds_retannRqtSumM.set_rowposition(-1);
        		this.ds_retannRqtSumM.set_enableevent(true);
        		return;
        	}
        */	
        	/*
        	var rgd = this.gfn_nullToEmpty(this.ds_retannRqtSumM.getColumn(this.ds_retannRqtSumM.rowposition,"RVOPL_NA_TRPL_C"));	//반품처코드
            var rgd_rqt = this.gfn_nullToEmpty(this.ds_retannRqtSumM.getColumn(this.ds_retannRqtSumM.rowposition,"NA_TRPL_C"));  //반품의뢰처코드
            var na_team_c = this.gfn_nullToEmpty(this.ds_retannRqtSumM.getColumn(this.ds_retannRqtSumM.rowposition,"NA_TEAM_C"));  //경제통합팀코드
            var rgd_rg_dt = this.gfn_nullToEmpty(this.ds_retannRqtSumM.getColumn(this.ds_retannRqtSumM.rowposition,"RGD_RG_DT"));  //반품등록일자    
            
            var na_rgd_sts_dsc = this.gfn_nullToEmpty(this.ds_retannRqtSumM.getColumn(this.ds_retannRqtSumM.rowposition,"NA_RGD_STS_DSC"));  //반품상태구분코드
        				
        	param = "rgd="+rgd+
        			" rgd_rqt="+rgd_rqt+
        			" na_team_c="+na_team_c+
        			" na_rgd_sts_dsc="+na_rgd_sts_dsc+
        			" rgd_rg_dt="+rgd_rg_dt;			 
        	
        	trace("##DETAIL 01##PARAM##->"+param);	
        	
        	var sSvcID        = "retrieveRqtMasterList";//통신아이디
        	var sURL          = "svc::rest/retann/retrieveRqtMasterList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_retannRqtM=ds_retannRqtM";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc , "S");
        	*/
        	
        	var rgd_rqt = this.gfn_nullToEmpty(this.ds_retannRqtSumM.getColumn(this.ds_retannRqtSumM.rowposition,"NA_TRPL_C"));  //반품의뢰처코드
            var na_team_c = this.gfn_nullToEmpty(this.ds_retannRqtSumM.getColumn(this.ds_retannRqtSumM.rowposition,"NA_TEAM_C"));  //경제통합팀코드
            var rgd_rg_dt = this.gfn_nullToEmpty(this.ds_retannRqtSumM.getColumn(this.ds_retannRqtSumM.rowposition,"RGD_RG_DT"));  //반품등록일자
        	var rgd_pla_no = this.gfn_nullToEmpty(this.ds_retannRqtSumM.getColumn(this.ds_retannRqtSumM.rowposition,"RGD_PLA_NO"));  //반품예정번호
        	
        	param = "rgd_rqt="+rgd_rqt+
        			" na_team_c="+na_team_c+
        			" rgd_rg_dt="+rgd_rg_dt+
        			" rgd_pla_no="+rgd_pla_no;			 
        	
        	trace("##DETAIL 02##PARAM##->"+param);	
        	
        	var sSvcID        = "retrieveRqtDetailList";//통신아이디
        	var sURL          = "svc::rest/retann/retrieveRqtDetailList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_retannRqtD=ds_retannRqtD";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc , "S");
        	
        }

        this.ds_retannRqtM_onrowposchanged = function(obj,e)
        {	
        	this.ds_retannRqtD.clearData();
        	
        	if(e.reason == 51)
        	{		
        		this.ds_retannRqtM.set_enableevent(false);
        		this.ds_retannRqtM.set_rowposition(-1);
        		this.ds_retannRqtM.set_enableevent(true);
        		return;
        	}
        		
            var rgd_rqt = this.gfn_nullToEmpty(this.ds_retannRqtM.getColumn(this.ds_retannRqtM.rowposition,"NA_TRPL_C"));  //반품의뢰처코드
            var na_team_c = this.gfn_nullToEmpty(this.ds_retannRqtM.getColumn(this.ds_retannRqtM.rowposition,"NA_TEAM_C"));  //경제통합팀코드
            var rgd_rg_dt = this.gfn_nullToEmpty(this.ds_retannRqtM.getColumn(this.ds_retannRqtM.rowposition,"RGD_RG_DT"));  //반품등록일자
        	var rgd_pla_no = this.gfn_nullToEmpty(this.ds_retannRqtM.getColumn(this.ds_retannRqtM.rowposition,"RGD_PLA_NO"));  //반품예정번호
        	
        	/*
        	
        	param = "rgd_rqt="+rgd_rqt+
        			" na_team_c="+na_team_c+
        			" rgd_rg_dt="+rgd_rg_dt+
        			" rgd_pla_no="+rgd_pla_no;			 
        	
        	trace("##DETAIL 02##PARAM##->"+param);	
        	
        	var sSvcID        = "retrieveRqtDetailList";//통신아이디
        	var sURL          = "svc::rest/retann/retrieveRqtDetailList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_retannRqtD=ds_retannRqtD";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc , "S");
        	
        	*/
        	
        	/*세번째 그리드 새창*/	
        	var oArg = {p_rgd_rqt:rgd_rqt, p_na_team_c:na_team_c, p_rgd_rg_dt:rgd_rg_dt, p_rgd_pla_no:rgd_pla_no};
        	var sOption = "autosize=true,title=false";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("popId","SCM.RETANN::VAN_DS_SC_0600_P01.xfdl",oArg,sOption,sPopupCallBack);	
        	
        }

        
        /* 반품의뢰처 돋보기 클릭시*/
        this.div_search_btn_rgd_rqt_onclick = function(params)
        {	
        	
        	var param = {
        				autoType:params,
        				searchCode:this.div_search.msk_rgd_rqt_code.value,
        				searchText:this.div_search.edt_rgd_rqt_name.value
        	};
        	
        	trace("=================");
        	trace("팝업의 파라미터");
        	trace("오토타입  --> " + params);	
        	trace("=================");	
        	
        	if(typeof params == "boolean"){
        		if(!this.searPopValue(param)){return};
        	}
        	//수요처
        	//var oArg = {paramMode:"U", dsArg:this.Dataset00};
        	var oArg = {autoPop:param};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("POPUP_SRC_RVOPL_TRPL","POPUP::POPUP_SRC_RVOPL_TRPL.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.fn_popupAfter = function(strId,strVal)
        {	
        	trace(" strId : " + strId + " strVal : " + strVal);
        		
        	//반품의뢰처 넘어온값
        	if(strId == 'POPUP_SRC_RVOPL_TRPL' && strVal != null){
        		var strValNo = strVal.split(',');
        		this.div_search.msk_rgd_rqt_code.set_value(strValNo[0]); //수요처코드
        		this.div_search.edt_rgd_rqt_name.set_value(strValNo[1]); //수요처명
        	}	
        }

        this.fn_popupAfter_P00 = function(strId,strVal)
        {		
        	if(strVal != null){
        		var strValNo = strVal.split(',');
        		this.div_search.div_m1.msk_rgd_code.set_value(strValNo[0]); //반품처코드
        		this.div_search.div_m1.edt_rgd_name.set_value(strValNo[1]); //반품처명		
        		this.div_search.div_m1.rdo_rpt.set_value("2");
        	}
        }

        this.div_list_btn_divResize_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        this.fn_excel = function(){
        	
        	if(!this.fn_validationCheck()) return;
        	
        	var rpt = "";
        	var rgd = "";
        	
        	if(application.gv_mbcoType == 1){
        		//본사
        		rpt = this.gfn_nullToEmpty(this.div_search.div_m1.rdo_rpt.value); //본/지사구분코드		
        		rgd = this.gfn_nullToEmpty(this.div_search.div_m1.msk_rgd_code.value); //반품처코드
        	
        	}else{
        		//지사			
        		rpt = "2";
        		rgd = this.gfn_nullToEmpty(this.div_search.div_m2.msk_rgd_code.value);			
        	}
        	
        	var rgd_rqt = this.gfn_nullToEmpty(this.div_search.msk_rgd_rqt_code.value); //반품의뢰처코드		
        	var from_date = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        	var to_date = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일	
        	var na_rgd_sts_dsc = this.gfn_nullToEmpty(this.div_search.cbo_na_rgd_sts_dsc.value); //반품상태구분코드
        		
        	//엑셀명
        	var title = this.parent.sNm;
        	title = title.replace(/ /gi, '');
        	var fileName = title + "_기준정보_" + this.getDate() + ".xls";	
        	
        	var param = "rpt="+rpt+
        				"&rgd="+rgd+
        				"&rgd_rqt="+rgd_rqt+
        				"&from_date="+from_date+
        				"&to_date="+to_date+				
        				"&na_rgd_sts_dsc="+na_rgd_sts_dsc+
        				"&fileName="+fileName;
        				
        	trace("##MASTER##PARAM##->"+param);
        	
        	param = encodeURI(encodeURI(param));

        	//this.web_downExcel.set_url(application.gv_server_url+"rest/excel/downloadExcelRqtMaster?"+param);
        	excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelRqtMaster?"+param, this);
        }

        /* 첫번째 그리드 엑셀 다운로드 */
        this.div_list_btn_gradM_excel_onclick = function(obj,e)
        {	
        	this.fn_excel();
        }

        /* 두번째 그리드 엑셀 다운로드 */
        this.div_list_btn_gradD_excel_onclick = function(obj,e)
        {	
        		
        	var rpt = "";
        	var rgd = "";
        	
        	if(application.gv_mbcoType == 1){
        		//본사
        		rpt = this.gfn_nullToEmpty(this.div_search.div_m1.rdo_rpt.value); //본/지사구분코드		
        		rgd = this.gfn_nullToEmpty(this.div_search.div_m1.msk_rgd_code.value); //반품처코드
        	
        	}else{
        		//지사			
        		rpt = "2";
        		rgd = this.gfn_nullToEmpty(this.div_search.div_m2.msk_rgd_code.value);			
        	}
        	
        	var rgd_rqt = this.gfn_nullToEmpty(this.div_search.msk_rgd_rqt_code.value); //반품의뢰처코드		
        	var from_date = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        	var to_date = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일	
        	var na_rgd_sts_dsc = this.gfn_nullToEmpty(this.div_search.cbo_na_rgd_sts_dsc.value); //반품상태구분코드
        	
        	var param = "rpt="+rpt+
        				"&rgd="+rgd+
        				"&rgd_rqt="+rgd_rqt+
        				"&from_date="+from_date+
        				"&to_date="+to_date+				
        				"&na_rgd_sts_dsc="+na_rgd_sts_dsc;			
        	
        	var rgd_rqt_d = this.gfn_nullToEmpty(this.ds_retannRqtSumM.getColumn(this.ds_retannRqtSumM.rowposition,"NA_TRPL_C"));  //반품의뢰처코드
            var na_team_c_d = this.gfn_nullToEmpty(this.ds_retannRqtSumM.getColumn(this.ds_retannRqtSumM.rowposition,"NA_TEAM_C"));  //경제통합팀코드
            var rgd_rg_dt_d = this.gfn_nullToEmpty(this.ds_retannRqtSumM.getColumn(this.ds_retannRqtSumM.rowposition,"RGD_RG_DT"));  //반품등록일자
        	var rgd_pla_no_d = this.gfn_nullToEmpty(this.ds_retannRqtSumM.getColumn(this.ds_retannRqtSumM.rowposition,"RGD_PLA_NO"));  //반품예정번호
        	
        	//엑셀명
        	var title = this.parent.sNm;
        	title = title.replace(/ /gi, '');
        	var fileName = title + "_상세정보_" + this.getDate() + ".xls";	
        	
        	param2 = "&rgd_rqt_d="+rgd_rqt_d+
        			"&na_team_c_d="+na_team_c_d+
        			"&rgd_rg_dt_d="+rgd_rg_dt_d+
        			"&rgd_pla_no_d="+rgd_pla_no_d+
        			"&fileName="+fileName;
        				
        	trace("##DETAIL##PARAM##->"+param+param2);
        	
        	param = encodeURI(encodeURI(param));
        	param2 = encodeURI(encodeURI(param2));
        	
        	//this.web_downExcel2.set_url(application.gv_server_url+"rest/excel/downloadExcelRqtDetail?"+param+param2);
        	excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelRqtDetail?"+param+param2, this);
        }

        this.btn_excel_onclick = function(obj,e)
        {
        	this.fn_excel();
        }

        /* 최상단 출력버튼 */
        this.btn_print_onclick = function(obj,e)
        {	
        	var rpt = "";
        	var rgd = "";
        	
        	if(application.gv_mbcoType == 1){
        		//본사
        		rpt = this.gfn_nullToEmpty(this.div_search.div_m1.rdo_rpt.value); //본/지사구분코드		
        		rgd = this.gfn_nullToEmpty(this.div_search.div_m1.msk_rgd_code.value); //반품처코드
        	
        	}else{
        		//지사			
        		rpt = "2";
        		rgd = this.gfn_nullToEmpty(this.div_search.div_m2.msk_rgd_code.value);			
        	}
        	
        	var rgd_rqt = this.gfn_nullToEmpty(this.div_search.msk_rgd_rqt_code.value); //반품의뢰처코드		
        	var from_date = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        	var to_date = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일	
        	var na_rgd_sts_dsc = this.gfn_nullToEmpty(this.div_search.cbo_na_rgd_sts_dsc.value); //반품상태구분코드
        					
        	var param = {
        	TRPL_C:this.getTrplCode(),
        	rpt:rpt,
        	rgd:rgd,
        	rgd_rqt:rgd_rqt,
        	from_date:from_date,
        	to_date:to_date,
        	na_rgd_sts_dsc:na_rgd_sts_dsc
        	}
        	
        	var ozParam = {
        	sId: 'VAN_DS_SC_0600',
        	sUrl: '/rest/oz/retann/printRqtListAll',
        	paramType: 'param',
        	sParam: param
        	};
        	this.ozViewer(ozParam); 
        }

        /* 마스터 그리드 위 출력버튼 */
        this.div_list_btn_printD_onclick = function(obj,e)
        {	
        	var rpt = "";
        	var rgd = "";
        	
        	if(application.gv_mbcoType == 1){
        		//본사
        		rpt = this.gfn_nullToEmpty(this.div_search.div_m1.rdo_rpt.value); //본/지사구분코드		
        		rgd = this.gfn_nullToEmpty(this.div_search.div_m1.msk_rgd_code.value); //반품처코드
        	
        	}else{
        		//지사			
        		rpt = "2";
        		rgd = this.gfn_nullToEmpty(this.div_search.div_m2.msk_rgd_code.value);			
        	}
        	
        	var rgd_rqt = this.gfn_nullToEmpty(this.div_search.msk_rgd_rqt_code.value); //반품의뢰처코드		
        	var from_date = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        	var to_date = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일	
        	var na_rgd_sts_dsc = this.gfn_nullToEmpty(this.div_search.cbo_na_rgd_sts_dsc.value); //반품상태구분코드
        					
        	var param = {
        	TRPL_C:this.getTrplCode(),
        	rpt:rpt,
        	rgd:rgd,
        	rgd_rqt:rgd_rqt,
        	from_date:from_date,
        	to_date:to_date,
        	na_rgd_sts_dsc:na_rgd_sts_dsc
        	}
        	
        	var ozParam = {
        	sId: 'VAN_DS_SC_0600_D',
        	sUrl: '/rest/oz/retann/printRqtListMaster',
        	paramType: 'param',
        	sParam: param
        	};
        	this.ozViewer(ozParam); 
        }

        /*본지사 코드 엔터시*/
        this.div_search_div_m1_msk_rgd_code_onkeydown = function(obj,e)
        {
        	this.div_search.div_m1.rdo_rpt.set_value("2");
        	if(e.keycode==13)
        	{	
        		this.div_search_btn_rgd_onclick(true);
        	}
        }

        /*본지사 돋보기 버튼클릭시*/
        this.div_search_btn_rgd_button_onclick = function(obj,e)
        {
        	this.div_search_btn_rgd_onclick();
        }

        this.div_search_msk_rgd_rqt_code_onkeydown = function(obj,e)
        {	
        	if(e.keycode == 13){
        		this.div_search_btn_rgd_rqt_onclick(true);
        	}
        }

        this.div_search_edt_rgd_rqt_name_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.div_search_btn_rgd_rqt_onclick(true);
        	}	
        }

        this.VAN_DS_SC_0600_onkeydown = function(obj,e)
        {
        	var key = this.gfn_onkeydown(e);
        	
        	if(key=="F")
        	{
        		this.btn_search_onclick();
        	}
        	
        	if(key=="E")
        	{
        		this.btn_excel_onclick();
        	}
        	
        	if(key=="P")
        	{
        		this.btn_print_onclick();
        	}
        }

        this.btn_search_onmousemove = function(obj,e)
        {
        	this.gfn_onmousemove(obj, "F");
        }

        this.btn_print_onmousemove = function(obj,e)
        {
        	this.gfn_onmousemove(obj, "P");
        }

        this.btn_excel_onmousemove = function(obj,e)
        {
        	this.gfn_onmousemove(obj, "E");
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.form_init, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("onkeydown", this.VAN_DS_SC_0600_onkeydown, this);
            this.div_search.div_m2.msk_rgd_code.addEventHandler("onkeydown", this.div_search_msk_rgd_code_onkeydown, this);
            this.div_search.div_m2.edt_rgd_name.addEventHandler("onkeydown", this.div_search_edt_rgd_name_onkeydown, this);
            this.div_search.rdo_search_type.addEventHandler("onitemchanged", this.div_search_rdo_search_type_onitemchanged, this);
            this.div_search.btn_rgd_rqt.addEventHandler("onclick", this.div_search_btn_rgd_rqt_onclick, this);
            this.div_search.edt_rgd_rqt_name.addEventHandler("onkeydown", this.div_search_edt_rgd_rqt_name_onkeydown, this);
            this.div_search.div_m1.rdo_rpt.addEventHandler("onitemchanged", this.div_search_rdo_rpt_onitemchanged, this);
            this.div_search.div_m1.edt_rgd_name.addEventHandler("onkeydown", this.div_search_edt_rgd_name_onkeydown, this);
            this.div_search.div_m1.btn_rgd.addEventHandler("onclick", this.div_search_btn_rgd_button_onclick, this);
            this.div_search.div_m1.msk_rgd_code.addEventHandler("onkeydown", this.div_search_div_m1_msk_rgd_code_onkeydown, this);
            this.div_search.msk_rgd_rqt_code.addEventHandler("onkeydown", this.div_search_msk_rgd_rqt_code_onkeydown, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_excel.addEventHandler("onmousemove", this.btn_excel_onmousemove, this);
            this.btn_print.addEventHandler("onclick", this.btn_print_onclick, this);
            this.btn_print.addEventHandler("onmousemove", this.btn_print_onmousemove, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_search.addEventHandler("onmousemove", this.btn_search_onmousemove, this);
            this.div_list.btn_divResize.addEventHandler("onclick", this.div_list_btn_divResize_onclick, this);
            this.div_list.btn_printD.addEventHandler("onclick", this.div_list_btn_printD_onclick, this);
            this.div_list.btn_gradM_excel.addEventHandler("onclick", this.div_list_btn_gradM_excel_onclick, this);
            this.div_list.btn_gradD_excel.addEventHandler("onclick", this.div_list_btn_gradD_excel_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0600.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
