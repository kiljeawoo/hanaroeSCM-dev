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
                this.set_name("frm_VAN_DS_SC_0700");
                this.set_titletext("물류센터 출고 실적");
                this._setFormPosition(0,0,803,1007);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_gridMaster", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RN\" type=\"STRING\" size=\"8\"/><Column id=\"PHD_NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"SHRT_BZPLNM\" type=\"string\" size=\"32\"/><Column id=\"NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"CLNTNM\" type=\"string\" size=\"32\"/><Column id=\"PHD_RVO_QT\" type=\"float\" size=\"8\"/><Column id=\"PHD_RVO_PER_QT\" type=\"float\" size=\"8\"/><Column id=\"PHD_PCK_QT\" type=\"float\" size=\"8\"/><Column id=\"PHD_PCK_PER_QT\" type=\"float\" size=\"8\"/><Column id=\"PHD_OUT_QT\" type=\"float\" size=\"8\"/><Column id=\"PHD_OUT_PER_QT\" type=\"float\" size=\"8\"/><Column id=\"CUS_CNR_QT\" type=\"float\" size=\"8\"/><Column id=\"CUS_CNR_PER_QT\" type=\"float\" size=\"8\"/><Column id=\"CUS_CNR_AMT\" type=\"float\" size=\"8\"/><Column id=\"PHD_CNR_QT\" type=\"float\" size=\"8\"/><Column id=\"PHD_CNR_PER_QT\" type=\"float\" size=\"8\"/><Column id=\"PHD_CNR_AMT\" type=\"float\" size=\"8\"/><Column id=\"NA_WRS_C\" type=\"string\" size=\"32\"/><Column id=\"WRSNM\" type=\"string\" size=\"32\"/><Column id=\"PHD_DLR_DSC\" type=\"string\" size=\"32\"/><Column id=\"WRS_STDNM\" type=\"string\" size=\"32\"/><Column id=\"INPD_QT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"PHD_SELPR\" type=\"float\" size=\"8\"/><Column id=\"SVS_YN\" type=\"string\" size=\"32\"/><Column id=\"PRGR_C\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_trade_type", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"string\" size=\"13\"/><Column id=\"name\" type=\"string\" size=\"13\"/></ColumnInfo><Rows><Row><Col id=\"code\"/><Col id=\"name\">선택안함</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"name\">출고</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"name\">입고반품</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_PHD_DLR_DSC", this);
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

            obj = new Dataset("ds_PRGR_C", this);
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
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"SHRT_BZPLNM\" type=\"string\" size=\"32\"/><Column id=\"BZPL_TPC\" type=\"string\" size=\"32\"/><Column id=\"BZPL_DTI_TPC\" type=\"string\" size=\"32\"/><Column id=\"BZPL_TPNM\" type=\"string\" size=\"32\"/><Column id=\"BZPL_DTI_TPNM\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_gridDetail", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RN\" type=\"STRING\" size=\"8\"/><Column id=\"PHD_NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"SHRT_BZPLNM\" type=\"string\" size=\"32\"/><Column id=\"NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"CLNTNM\" type=\"string\" size=\"32\"/><Column id=\"PHD_RVO_QT\" type=\"float\" size=\"8\"/><Column id=\"PHD_RVO_PER_QT\" type=\"float\" size=\"8\"/><Column id=\"PHD_PCK_QT\" type=\"float\" size=\"8\"/><Column id=\"PHD_PCK_PER_QT\" type=\"float\" size=\"8\"/><Column id=\"PHD_OUT_QT\" type=\"float\" size=\"8\"/><Column id=\"PHD_OUT_PER_QT\" type=\"float\" size=\"8\"/><Column id=\"CUS_CNR_QT\" type=\"float\" size=\"8\"/><Column id=\"CUS_CNR_PER_QT\" type=\"float\" size=\"8\"/><Column id=\"CUS_CNR_AMT\" type=\"float\" size=\"8\"/><Column id=\"PHD_CNR_QT\" type=\"float\" size=\"8\"/><Column id=\"PHD_CNR_PER_QT\" type=\"float\" size=\"8\"/><Column id=\"PHD_CNR_AMT\" type=\"float\" size=\"8\"/><Column id=\"NA_WRS_C\" type=\"string\" size=\"32\"/><Column id=\"WRSNM\" type=\"string\" size=\"32\"/><Column id=\"PHD_DLR_DSC\" type=\"string\" size=\"32\"/><Column id=\"WRS_STDNM\" type=\"string\" size=\"32\"/><Column id=\"INPD_QT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"PHD_SELPR\" type=\"float\" size=\"8\"/><Column id=\"SVS_YN\" type=\"string\" size=\"32\"/><Column id=\"PRGR_C\" type=\"string\" size=\"32\"/><Column id=\"WRS_MRK_PHD_UNT_C\" type=\"string\" size=\"32\"/><Column id=\"INPD_QT2\" type=\"string\" size=\"32\"/><Column id=\"DVY_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"DVY_NA_TRPL_C_NM\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_date", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"string\" size=\"13\"/><Column id=\"name\" type=\"string\" size=\"13\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"name\">수주일자</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"name\">출고일자</Col></Row></Rows>");
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

            obj = new Dataset("ds_sum", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PHD_RVO_QT\" type=\"string\" size=\"32\"/><Column id=\"PHD_RVO_PER_QT\" type=\"string\" size=\"32\"/><Column id=\"PHD_PCK_QT\" type=\"string\" size=\"32\"/><Column id=\"PHD_PCK_PER_QT\" type=\"string\" size=\"32\"/><Column id=\"PHD_OUT_QT\" type=\"string\" size=\"32\"/><Column id=\"PHD_OUT_PER_QT\" type=\"string\" size=\"32\"/><Column id=\"CUS_CNR_QT\" type=\"string\" size=\"32\"/><Column id=\"CUS_CNR_PER_QT\" type=\"string\" size=\"32\"/><Column id=\"CUS_CNR_AMT\" type=\"string\" size=\"32\"/><Column id=\"PHD_CNR_QT\" type=\"string\" size=\"32\"/><Column id=\"PHD_CNR_PER_QT\" type=\"string\" size=\"32\"/><Column id=\"PHD_CNR_AMT\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "200", null, this);
            obj.set_taborder("49");
            obj.set_text("Div00");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "95", "15", null, this);
            obj.set_taborder("30");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", "91", "21", null, null, this.div_search);
            obj.set_taborder("23");
            obj.set_text("일자구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "36", "91", "21", null, null, this.div_search);
            obj.set_taborder("24");
            obj.set_text("사업장");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "454", "62", "91", "21", null, null, this.div_search);
            obj.set_taborder("26");
            obj.set_text("다매가유형");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_from", "absolute", "214", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("50");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static131", "absolute", "314", "10", "10", "21", null, null, this.div_search);
            obj.set_taborder("51");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_nacode", "absolute", "118", "36", "306", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("53");
            obj.set_innerdataset("@ds_NABizPlace");
            obj.set_codecolumn("NA_BZPLC");
            obj.set_datacolumn("SHRT_BZPLNM");
            obj.set_displayrowcount("20");
            obj.set_text("전체");
            obj.set_index("0");
            obj = new Static("Static04", "absolute", "454", "10", "103", "21", null, null, this.div_search);
            obj.set_taborder("59");
            obj.set_text("거래구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "756", "-2", null, "69", "201", null, this.div_search);
            obj.set_taborder("60");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_phd_dlr_dsc", "absolute", "557", "36", "128", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("61");
            obj.set_innerdataset("@ds_PHD_DLR_DSC");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_index("-1");
            obj = new Combo("cbo_prgr_c", "absolute", "557", "62", "128", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("63");
            obj.set_innerdataset("@ds_PRGR_C");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj = new Calendar("cal_to", "absolute", "324", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("65");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Combo("cbo_date", "absolute", "118", "10", "93", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("66");
            obj.set_innerdataset("@ds_date");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_index("-1");
            obj = new Static("Static02", "absolute", "454", "36", "103", "21", null, null, this.div_search);
            obj.set_taborder("67");
            obj.set_text("물류출고구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_trade_type", "absolute", "557", "10", "128", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_trade_type_innerdataset = new Dataset("cbo_trade_type_innerdataset", this.div_search.cbo_trade_type);
            cbo_trade_type_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">선택안됨</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">출고</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">입고반품</Col></Row></Rows>");
            obj.set_innerdataset(cbo_trade_type_innerdataset);
            obj.set_taborder("68");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("-1");
            obj = new Static("Static05", "absolute", "15", "62", "91", "21", null, null, this.div_search);
            obj.set_taborder("69");
            obj.set_text("상품");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_na_wrs_c", "absolute", "118", "62", "97", "21", null, null, this.div_search);
            obj.set_taborder("70");
            obj.set_inputtype("number");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_wrsnm", "absolute", "217", "62", "139", "21", null, null, this.div_search);
            obj.set_taborder("71");
            obj.set_maxlength("12");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup", "absolute", "359", "62", "21", "21", null, null, this.div_search);
            obj.set_taborder("72");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "123", null, null, "15", "13", this);
            obj.set_taborder("0");
            obj.set_text("Div02");
            obj.set_scrollbars("autoboth");
            this.addChild(obj.name, obj);
            obj = new Button("btn_divResize", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_master", "absolute", "0", "41", null, "300", "0", null, this.div_list);
            obj.set_taborder("24");
            obj.set_binddataset("ds_gridMaster");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"39\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"98\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"105\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"28\"/><Row size=\"28\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"사업장코드\"/><Cell col=\"2\" text=\"단축사업장명\"/><Cell col=\"3\" text=\"거래처코드\"/><Cell col=\"4\" text=\"거래처명\"/><Cell col=\"5\" text=\"물류수주수량&#13;&#10;(낱개)\"/><Cell col=\"6\" text=\"물류수주수량&#13;&#10;(표시단위)\"/><Cell col=\"7\" text=\"물류피킹수량&#13;&#10;(낱개)\"/><Cell col=\"8\" text=\"물류피킹수량&#13;&#10;(표시단위)\"/><Cell col=\"9\" text=\"물류출고수량&#13;&#10;(낱개)\"/><Cell col=\"10\" text=\"물류출고수량&#13;&#10;(표시단위)\"/><Cell col=\"11\" text=\"고객검수수량&#13;&#10;(낱개)\"/><Cell col=\"12\" text=\"고객검수수량&#13;&#10;(표시단위)\"/><Cell col=\"13\" text=\"고객검수금액\"/><Cell col=\"14\" text=\"물류검수수량&#13;&#10;(낱개)\"/><Cell col=\"15\" text=\"물류검수수량&#13;&#10;(표시단위)\"/><Cell col=\"16\" text=\"물류검수금액\"/></Band><Band id=\"body\"><Cell text=\"bind:RN\"/><Cell col=\"1\" text=\"bind:PHD_NA_BZPLC\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:SHRT_BZPLNM\"/><Cell col=\"3\" text=\"bind:NA_TRPL_C\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:CLNTNM\"/><Cell col=\"5\" style=\"align:right;\" text=\"bind:PHD_RVO_QT\"/><Cell col=\"6\" style=\"align:right;\" text=\"bind:PHD_RVO_PER_QT\"/><Cell col=\"7\" style=\"align:right;\" text=\"bind:PHD_PCK_QT\"/><Cell col=\"8\" style=\"align:right;\" text=\"bind:PHD_PCK_PER_QT\"/><Cell col=\"9\" style=\"align:right;\" text=\"bind:PHD_OUT_QT\"/><Cell col=\"10\" style=\"align:right;\" text=\"bind:PHD_OUT_PER_QT\"/><Cell col=\"11\" style=\"align:right;\" text=\"bind:CUS_CNR_QT\"/><Cell col=\"12\" style=\"align:right;\" text=\"bind:CUS_CNR_PER_QT\"/><Cell col=\"13\" style=\"align:right;\" text=\"bind:CUS_CNR_AMT\"/><Cell col=\"14\" style=\"align:right;\" text=\"bind:PHD_CNR_QT\"/><Cell col=\"15\" style=\"align:right;\" text=\"bind:PHD_CNR_PER_QT\"/><Cell col=\"16\" style=\"align:right;\" text=\"bind:PHD_CNR_AMT\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'PHD_RVO_QT')\" mask=\"###,##0\"/><Cell col=\"6\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'PHD_RVO_PER_QT')\" mask=\"###,##0\"/><Cell col=\"7\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'PHD_PCK_QT')\" mask=\"###,##0\"/><Cell col=\"8\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'PHD_PCK_PER_QT')\" mask=\"###,##0\"/><Cell col=\"9\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'PHD_OUT_QT')\" mask=\"###,##0\"/><Cell col=\"10\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'PHD_OUT_PER_QT')\" mask=\"###,##0\"/><Cell col=\"11\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'CUS_CNR_QT')\" mask=\"###,##0\"/><Cell col=\"12\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'CUS_CNR_PER_QT')\" mask=\"###,##0\"/><Cell col=\"13\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'CUS_CNR_AMT')\" mask=\"###,##0\"/><Cell col=\"14\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'PHD_CNR_QT')\" mask=\"###,##0\"/><Cell col=\"15\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'PHD_CNR_PER_QT')\" mask=\"###,##0\"/><Cell col=\"16\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'PHD_CNR_AMT')\" mask=\"###,##0\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_detail", "absolute", "0", "384", null, "468", "0", null, this.div_list);
            obj.set_taborder("26");
            obj.set_binddataset("ds_gridDetail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"39\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"250\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"28\"/><Row size=\"28\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"사업장코드\"/><Cell col=\"2\" text=\"단축사업장명\"/><Cell col=\"3\" text=\"물류출고&#13;&#10;구분코드\"/><Cell col=\"4\" text=\"배송지코드\"/><Cell col=\"5\" text=\"배송지명\"/><Cell col=\"6\" text=\"거래처코드\"/><Cell col=\"7\" text=\"거래처명\"/><Cell col=\"8\" text=\"상품코드\"/><Cell col=\"9\" text=\"단축상품명\"/><Cell col=\"10\" text=\"상품규격명\"/><Cell col=\"11\" text=\"상품표시&#13;&#10;물류단위코드\"/><Cell col=\"12\" text=\"내품수량\"/><Cell col=\"13\" text=\"내품수량(입수)\"/><Cell col=\"14\" text=\"물류판매가\"/><Cell col=\"15\" text=\"물류출고수량&#13;&#10;(낱개)\"/><Cell col=\"16\" text=\"물류출고수량&#13;&#10;(표시단위)\"/><Cell col=\"17\" text=\"고객검수수량&#13;&#10;(낱개)\"/><Cell col=\"18\" text=\"고객검수수량&#13;&#10;(표시단위)\"/><Cell col=\"19\" text=\"고객검수금액\"/><Cell col=\"20\" text=\"물류검수수량&#13;&#10;(낱개)\"/><Cell col=\"21\" text=\"물류검수수량&#13;&#10;(표시단위)\"/><Cell col=\"22\" text=\"물류검수금액\"/><Cell col=\"23\" text=\"소분여부\"/></Band><Band id=\"body\"><Cell/><Cell/><Cell text=\"bind:RN\"/><Cell col=\"1\" text=\"bind:PHD_NA_BZPLC\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:SHRT_BZPLNM\"/><Cell col=\"3\" text=\"bind:PHD_DLR_DSC\"/><Cell col=\"4\" text=\"bind:DVY_NA_TRPL_C\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:DVY_NA_TRPL_C_NM\"/><Cell col=\"6\" text=\"bind:NA_TRPL_C\"/><Cell col=\"7\" style=\"align:left;\" text=\"bind:CLNTNM\"/><Cell col=\"8\" text=\"bind:NA_WRS_C\"/><Cell col=\"9\" style=\"align:left;\" text=\"bind:WRSNM\"/><Cell col=\"10\" style=\"align:left;\" text=\"bind:WRS_STDNM\"/><Cell col=\"11\" text=\"bind:WRS_MRK_PHD_UNT_C\"/><Cell col=\"12\" style=\"align:right;\" text=\"bind:INPD_QT\"/><Cell col=\"13\" style=\"align:right;\" text=\"bind:INPD_QT2\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PHD_SELPR\" mask=\"#,##0.00\"/><Cell col=\"15\" style=\"align:right;\" text=\"bind:PHD_OUT_QT\"/><Cell col=\"16\" style=\"align:right;\" text=\"bind:PHD_OUT_PER_QT\"/><Cell col=\"17\" style=\"align:right;\" text=\"bind:CUS_CNR_QT\"/><Cell col=\"18\" style=\"align:right;\" text=\"bind:CUS_CNR_PER_QT\"/><Cell col=\"19\" displaytype=\"number\" style=\"align:right;\" text=\"expr:nexacro.floor(CUS_CNR_AMT)\" mask=\"#,##0.00\"/><Cell col=\"20\" style=\"align:right;\" text=\"bind:PHD_CNR_QT\"/><Cell col=\"21\" style=\"align:right;\" text=\"bind:PHD_CNR_PER_QT\"/><Cell col=\"22\" displaytype=\"number\" style=\"align:right;\" text=\"expr:nexacro.floor(PHD_CNR_AMT)\" mask=\"#,##0.00\"/><Cell col=\"23\" text=\"bind:SVS_YN\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" style=\"align:center;\" text=\"센터별소계\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\" displaytype=\"number\" expr=\"expr:dataset.getSum('PHD_OUT_QT')\" mask=\"###,###\"/><Cell col=\"16\" displaytype=\"number\" expr=\"expr:dataset.getSum('PHD_OUT_PER_QT')\" mask=\"###,###\"/><Cell col=\"17\" displaytype=\"number\" expr=\"expr:dataset.getSum('CUS_CNR_QT')\" mask=\"###,###\"/><Cell col=\"18\" displaytype=\"number\" expr=\"expr:dataset.getSum('CUS_CNR_PER_QT')\" mask=\"###,###\"/><Cell col=\"19\" displaytype=\"number\" text=\"expr:nexacro.floor(dataset.getSum('CUS_CNR_AMT'))\" mask=\"#,###.00\"/><Cell col=\"20\" displaytype=\"number\" expr=\"expr:dataset.getSum('PHD_CNR_QT')\" mask=\"###,###\"/><Cell col=\"21\" displaytype=\"number\" expr=\"expr:dataset.getSum('PHD_CNR_PER_QT')\" mask=\"###,###\"/><Cell col=\"22\" displaytype=\"number\" text=\"expr:nexacro.floor(dataset.getSum('PHD_CNR_AMT'))\" mask=\"#,###.00\"/><Cell col=\"23\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_gradD_excel", "absolute", null, "358", "41", "21", "0", null, this.div_list);
            obj.set_taborder("31");
            obj.set_text("엑셀");
            obj.set_visible("true");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "936", "-1", null, "15", "2", null, this.div_list);
            obj.set_taborder("32");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_gradM_excel", "absolute", null, "15", "41", "21", "0", null, this.div_list);
            obj.set_taborder("33");
            obj.set_text("엑셀");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "936", "35", null, "5", "2", null, this.div_list);
            obj.set_taborder("34");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("edt_h01", "absolute", "516", "6", "57", "15", null, null, this.div_list);
            obj.set_taborder("35");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("edt_h02", "absolute", "660", "21", "76", "15", null, null, this.div_list);
            obj.set_taborder("36");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("edt_h03", "absolute", "564", "21", "76", "15", null, null, this.div_list);
            obj.set_taborder("37");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("edt_h04", "absolute", "591", "3", "57", "15", null, null, this.div_list);
            obj.set_taborder("38");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("edt_h05", "absolute", "811", "18", "136", "15", null, null, this.div_list);
            obj.set_taborder("39");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("edt_h06", "absolute", "447", "18", "57", "15", null, null, this.div_list);
            obj.set_taborder("40");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new WebBrowser("web_downExcelM", "absolute", "648", "1", "64", "17", null, null, this.div_list);
            obj.set_taborder("41");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new WebBrowser("web_downExcelD", "absolute", "596", "340", "57", "21", null, null, this.div_list);
            obj.set_taborder("42");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_page", "absolute", "28.55%", "340", "338", "44", null, null, this.div_list);
            obj.set_taborder("43");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list.addChild(obj.name, obj);
            obj = new WebBrowser("web_downExcelMaster", "absolute", "711", "6", "33", "12", null, null, this.div_list);
            obj.set_taborder("44");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "42.64%", "19", null, "17", "6.22%", null, this.div_list);
            obj.set_taborder("45");
            obj.set_text("※ 조회 후 데이터를 선택하시면 하단에 상세 정보(간선 포함)가 표시됩니다.");
            obj.style.set_align("left");
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

            obj = new Static("Static03", "absolute", "922", "21", "56", "8", null, null, this);
            obj.set_taborder("14");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
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

            obj = new Button("btn_excel", "absolute", null, "0", "80", "21", "75", null, this);
            obj.set_taborder("47");
            obj.set_text("엑셀(상세)");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel00", "absolute", null, "0", "41", "21", "157", null, this);
            obj.set_taborder("50");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 95, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("30");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 788, 367, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
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
            		p.set_titletext("물류센터 출고 실적");

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
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_0700.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0700.xfdl", function() {
        //include "lib::comLib.xjs";

        /* form load */
        this.form_onload = function(obj,e)
        {	

            var sFormID = this.getOwnerFrame().arguments["FORM_ID"];
        	//시스템코드
        	trace("application.gv_naUsrSysKdc=>"+application.gv_naUsrSysKdc);
        	
        	trace("application.gv_glnCode=>"+application.gv_glnCode);
        	
        	//테스트데이터
        	/*
        	application.gv_naUsrSysKdc="92";
        	application.gv_glnCode="8801037000016";
        	*/
        	
        	
        	// 95 :	외부업체-전자구매조달
        	// 96 :	외부업체-XML/EDI사용업체
        	if (
        	(!"8805522000017"==(application.gv_glnCode))  //(주)동아에스에프
        	&& (!"8801083000015"==(application.gv_glnCode))  //농심켈로그
        	&& (!"8801178000012"==(application.gv_glnCode))  //대정농산㈜
        	&& (!"8801199000015"==(application.gv_glnCode))  //대한제당
        	&& (!"8801176000014"==(application.gv_glnCode))  //대한제분
        	&& (!"8809055040014"==(application.gv_glnCode))  //동방산업
        	&& (!"8801027020017"==(application.gv_glnCode))  //디아지오코리아㈜
        	&& (!"8803733000017"==(application.gv_glnCode))  //락앤락
        	&& (!"8801056020019"==(application.gv_glnCode))  //롯데칠성주류
        	&& (!"8801236000015"==(application.gv_glnCode))  //모나리자
        	&& (!"8801173000017"==(application.gv_glnCode))  //무궁화
        	&& (!"8804904000010"==(application.gv_glnCode))  //미래생활
        	&& (!"8801350000014"==(application.gv_glnCode))  //별표수세미
        	&& (!"8801092000013"==(application.gv_glnCode))  //보령메디앙스
        	&& (!"8801013000016"==(application.gv_glnCode))  //삼양사
        	&& (!"8801005000017"==(application.gv_glnCode))  //샘표식품㈜
        	//&& (!"8801005000109"==(application.gv_glnCode))  //샘표식품㈜
        	&& (!"8809172920015"==(application.gv_glnCode))  //쌍용씨앤비
        	&& (!"8801096000019"==(application.gv_glnCode))  //아니코
        	&& (!"8809308850018"==(application.gv_glnCode))  //아니코  2010.10.06
        	&& (!"8801042000018"==(application.gv_glnCode))  //아모레퍼시픽
        	&& (!"8801042050013"==(application.gv_glnCode))  //아모레퍼시픽(건강)
        	&& (!"8809015210013"==(application.gv_glnCode))  //아진상사
        	&& (!"8808021020012"==(application.gv_glnCode))  //에너자이저코리아
        	&& (!"8809104290018"==(application.gv_glnCode))  //예지미인
        	&& (!"8801154000012"==(application.gv_glnCode))  //옥시
        	&& (!"8806006000011"==(application.gv_glnCode))  //유한양행
        	&& (!"8801038000015"==(application.gv_glnCode))  //㈜도루코
        	&& (!"8809031520011"==(application.gv_glnCode))  //㈜배상면주가
        	&& (!"8801422000010"==(application.gv_glnCode))  //㈜삼아알미늄상사
        	&& (!"8809126780016"==(application.gv_glnCode))  //㈜삼일
        	&& (!"8809005710011"==(application.gv_glnCode))  //㈜아트종합상사
        	&& (!"8809042090015"==(application.gv_glnCode))  //㈜애런
        	&& (!"2900077500015"==(application.gv_glnCode))  //㈜에프엘코리아
        	&& (!"8809105300013"==(application.gv_glnCode))  //㈜은성식품
        	&& (!"8809192880016"==(application.gv_glnCode))  //㈜파나블루
        	&& (!"8801389000016"==(application.gv_glnCode))  //진미식품
        	&& (!"8801441000015"==(application.gv_glnCode))  //크리오
        	&& (!"8801252000013"==(application.gv_glnCode))  //크린N
        	&& (!"8803903000014"==(application.gv_glnCode))  //크린피아
        	&& (!"8801222000012"==(application.gv_glnCode))  //테이팩스
        	&& (!"8802214000010"==(application.gv_glnCode))  //한국에어졸㈜
        	&& (!"8809206990014"==(application.gv_glnCode))  //해피존
        	&& (!"8809004770016"==(application.gv_glnCode))  //헨켈홈케어코리아(유)
        	&& (!"8809176300011"==(application.gv_glnCode))  //허밍바이오
        	&& (!"8806011000013"==(application.gv_glnCode))  //동아제약(주)
        	&& (!"8801478000019"==(application.gv_glnCode))  //태양산업
        	&& (!"8809026820010"==(application.gv_glnCode))  //수석무역(주)
        	&& (!"8809136180011"==(application.gv_glnCode))  //(주)천년약속
        	&& (!"8807225000011"==(application.gv_glnCode))  //(주)금양인터내셔날

        	&& (!"8803733000017"==(application.gv_glnCode))  //(주)락앤락
        	&& (!"8809267860011"==(application.gv_glnCode))  //(주)금송무역
        	&& (!"8809126785011"==(application.gv_glnCode))  //(주)삼일쇼핑
        	&& (!"8809108600011"==(application.gv_glnCode))  //(주)현대제지
        	&& (!"8809047230010"==(application.gv_glnCode))  //(주)기림상사

        	&& (!"8809278230018"==(application.gv_glnCode))  //(주)레벵드매일
        	&& (!"8801038000015"==(application.gv_glnCode))  //(주)도로코

        	&& (!"8801119000019"==(application.gv_glnCode))  //하이트
        	&& (!"8801021000015"==(application.gv_glnCode))  //오비
        	&& (!"8801048000012"==(application.gv_glnCode))  //진로
        	&& (!"8801147000012"==(application.gv_glnCode))  //보해
        	&& (!"8801030000013"==(application.gv_glnCode))  //롯데
        	&& (!"8801798000010"==(application.gv_glnCode))  //한라산

        
        	&& (!"2900071100013"==(application.gv_glnCode))  //페르노리카 코리아
        	&& (!"8809035250105"==(application.gv_glnCode))  //페르노리카코리아임페리얼 대전
        	&& (!"8809035250099"==(application.gv_glnCode))  //페르노리카코리아임페리얼 수입

        	&& (!"8801901000012"==(application.gv_glnCode))  //주식회사 맥선
        	&& (!"8801901000555"==(application.gv_glnCode))  //주식회사 맥선
        	&& (!"8801901000753"==(application.gv_glnCode))  //주식회사 맥선
        	&& (!"8801901000654"==(application.gv_glnCode))  //주식회사 맥선

        	&& (!"8801161000012"==(application.gv_glnCode))  //신송식품 (주) - 업무연락

        	&& (!"8800901296012"==(application.gv_glnCode))  //한산피앤지
        	&& (!"8809056510011"==(application.gv_glnCode))  //참고을
        	&& (!"8802896000018"==(application.gv_glnCode))  //(주)한진식품 2010.06.21
        	&& (!"8809107600012"==(application.gv_glnCode))  //슈가버블 2010.08.17 정우식
        	&& (!"8801069000015"==(application.gv_glnCode))  //남양유업 2010.11.08 황용연

        	&& (!"8809161170018"==(application.gv_glnCode))  //(주)해피콜 2010.11.15 장민근 마트28101-1026
        	&& (!"8803120000019"==(application.gv_glnCode))  //(주)남선   2010.11.15 장민근 마트28101-1026
        	&& (!"8809129100019"==(application.gv_glnCode))  //(주)클래드 2010.11.15 장민근 마트28101-1026
        	&& (!"8801324000019"==(application.gv_glnCode))  //(주)불스원 2010.11.15 장민근 마트28101-1026

        	&& (!"8801149000010"==(application.gv_glnCode))  //썬푸드 2010.12.21 장민근 마트28101-1175

        	&& (!"8804645000010"==(application.gv_glnCode))  //한국 맥널티 2011.02.15 황용연
        	&& (!"8801069030012"==(application.gv_glnCode))  //남양 유업 2011.02.15 황용연
        	&& (!"8807779000017"==(application.gv_glnCode))  //두리화장품(주) 2013.06.28
        	&& (!"8809199290016"==(application.gv_glnCode))  //(주)아스텝 2013.07.08
        	&& (!"8809394030011"==(application.gv_glnCode))  //주식회사 서학 2013.07.23
        	&& (!"8809384350013"==(application.gv_glnCode))  //(주)에스케이피 2013.07.25
        	&& (!"8808990300665"==(application.gv_glnCode))  //한삼인 2013.09.27
        	&& (!"8801441000015"==(application.gv_glnCode))  //크리오 2013.09.27
        	&& (!"8809294010014"==(application.gv_glnCode))  //미래통상 2013.10.08
        	&& (!"8809359520014"==(application.gv_glnCode))  //키친플라워NH 2013.11.11
        	&& (!"8809334000012"==(application.gv_glnCode))  //해피콜NH 2013.11.11

        	&& (!"2900077500015"==(application.gv_glnCode))  //에프엘코리아 2014.01.23
        	&& (!"8809267520014"==(application.gv_glnCode))  //신세계엘앤비 2014.01.23

        	&& (!"8809187890013"==(application.gv_glnCode))  //에이치씨바이오텍(주) 2014.02.11

        	&& (!"8809313920010"==(application.gv_glnCode))  //(사)에덴복지재단  2014.03.17
        	)
        	{
        		trace("??????????????");
        		
        		if (application.gv_naUsrSysKdc == "96" && application.gv_glnCode == "8801037000016") {
        			//동서식품(주) : 8801037000016
        			return;
        		} else if (application.gv_naUsrSysKdc != "96" && application.gv_glnCode.trim().length > 0) {
        			if (application.gv_naUsrSysKdc != "95" && application.gv_glnCode.trim().length > 0) {
        				//alert("경제통합사용자시스템코드["+application.gv_naUsrSysKdc+"]인 공급업체는 사용불가합니다.\n권한이 없습니다.\n하나로마트분사에 문의하세요");
        				alert(this.gfn_getTextMessage("msg.van_ds_sc_0700.view.text1")+application.gv_naUsrSysKdc+this.gfn_getTextMessage("msg.van_ds_sc_0700.view.text2"));
        			} else {
        				//alert("경제통합사용자시스템코드["+application.gv_naUsrSysKdc+"]가 XML공급업체[96]인 경우만 사용가능합니다.");
        				alert(this.gfn_getTextMessage("msg.van_ds_sc_0700.view.text3")+application.gv_naUsrSysKdc+this.gfn_getTextMessage("msg.van_ds_sc_0700.view.text4"));            
        			}
        			
        			application.afrm_FrameSet.frames[sFormID].form.close();
        			return;
        		}
            }
        	
        	this.gfn_setInitForm(obj,e);
        	
        	var param = [  
         		{code:"QSLPR_TPC",   dsName:"ds_PRGR_C",   selecttype:"A"},
         		{code:"PHD_DLR_DSC",   dsName:"ds_PHD_DLR_DSC",   selecttype:"A"}
            ];

        	this.gfn_setCommonCode(param);
        	
        	//권한사업장 콤보박스 변경시 농협사업장 조회
        	this.div_auth.setFunctionName("fn_afterCall");	
        }

        /* Form Init*/
        this.form_init = function(obj,e)
        {
        }

        //권한사업장 콤보박스 변경시 농협사업장 조회
        this.fn_afterCall = function(sVal)
        {
        	this.fn_getNABizPlace(sVal);
        }

        //공통코드 데이터셋 onload후 호출할 함수
        this.fn_commonAfterOnload= function()
        {		
        	this.div_search.cbo_phd_dlr_dsc.set_index(0);
        	this.div_search.cbo_prgr_c.set_index(0);
        	
        	this.div_search.cbo_date.set_index(0);
        	this.div_search.cbo_trade_type.set_index(0);	
        	
        	
        	for (var i=0; i < this.ds_PHD_DLR_DSC.rowcount ;i++)			
        	{		
        		//출고 - 반품출고 삭제
        		if (this.ds_PHD_DLR_DSC.getColumn(i,0) == '05'){					
        			this.ds_PHD_DLR_DSC.deleteRow(i);					
        		}	
        	};			

        }

        /* 페이지 로딩후 실행부분 */
        this.fn_afterFormOnload = function()
        {	
        	
        	//그리드 nodata
        	this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	this.div_list.grd_detail.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));

        	this.authChkDisable();	
        	this.div_search.cal_from.set_value(this.gfn_minusDate(this.gfn_today("yyyyMMdd"),1));	
        	this.div_search.cal_to.set_value(this.gfn_today("yyyyMMdd"));
        	
        	//마스터 그리드클릭 이벤트 등록
        	this.div_list.grd_master.addEventHandler("oncellclick", this.grd_afterFnc, this);
        	
        //	var param = {
        //		form: this,										//공통(필수)
        //		m_grd: this.div_list.grd_master,  				//마스터 그리드
        //		m_pageDiv: this.div_list.div_page,			    //마스터 페이지DIV
        //		m_afterFnc: this.grd_afterFnc					//마스터 그리드 클릭이벤트		
        //	};
        	
        //	param.m_pageDiv.addPageEvent(param);
        	
        	this.fn_getNABizPlace(application.gv_glnCode);
        				
        }

        /*농협사업장 조회*/
        this.fn_getNABizPlace = function(v_nacode){
        	
        	var nacode = v_nacode;
        	var search_type = "added";
        	
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

        /* Validation Check */
        this.fn_validationCheck = function(){
        	
        	/*
        	trace("from--------->"+this.div_search.cal_from.value);
        	trace("to--------->"+this.div_search.cal_to.value);
        	trace("gfn_getDiffDay--------->"+this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value));
        	*/

        	if(this.gfn_isNull(this.div_search.cbo_trade_type.value)){
        		//거래구분을 선택 하세요.
        		this.gfn_getMessage("alert", "validation.message.select.tradetype");
        		return false;
        	}		
        	
        	if(this.gfn_isNull(this.div_search.cbo_nacode.value)){
        		//농협사업장을 선택 하세요.
        		this.gfn_getMessage("alert", "validation.message.select.nacode");
        		return false;
        	}	
        	
        	
        	if(this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value) < 0){
        	
        		//조회 시작일과 종료일을 다시 확인해 주세요
        		this.gfn_getMessage("alert", "validation.message.fromDate.toDate.reConfirm");
        		return false;
        	}
        	
        	var tmpCnt = this.getAuthComp().combo.getInnerDataset().getRowCount();
        	
        	if(application.gv_mbcoType == '1' && tmpCnt > 1){
        		if(this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value) > 35){

        			//기간을 31일 이내로 선택해 주세요
        			this.gfn_getMessage("alert", "validation.message.selectDateIn35Day");
        			return false;
        		}
        	}else{
        		if(this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value) > 365){

        			//기간을 31일 이내로 선택해 주세요
        			alert("조회 기간을 1년 이내로 선택해주세요.");
        			return false;
        		}
        	}
        	/*
        	if(this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value) > 7){

        	//기간을 31일 이내로 선택해 주세요
        	alert("조회기간을 7일 이내로 선택해 주세요");
        	return false;
        	}
        	*/
        		
        	
        	
        	return true;
        }

        
        /* search */
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_paging(1,"div_page");// 처음조회시 1페이지를 조회한다.			
        }

        this.fn_search = function(){
        	this.ds_gridMaster.clearData();
        	this.ds_gridDetail.clearData();
        	this.ds_sum.clearData();
        	//this.ds_pageVO.clearData();	
        	
        	//히든값 초기화
        	this.div_list.edt_h01.set_value("");
        	this.div_list.edt_h02.set_value("");
        	this.div_list.edt_h03.set_value("");
        	this.div_list.edt_h04.set_value("");
        	this.div_list.edt_h05.set_value("");
        	this.div_list.edt_h06.set_value("");
        	
        	if(this.fn_validationCheck()){
        		
        		//권한사업장 코드
        		var trplC = this.getTrplCode();
        		var upTrplC = application.gv_upGlnCode;
        		
        		var trade_type = this.gfn_nullToEmpty(this.div_search.cbo_trade_type.value);	//거래구분
        		var dateCode = this.gfn_nullToEmpty(this.div_search.cbo_date.value);  //일자구분
        		var cal_from = this.gfn_nullToEmpty(this.div_search.cal_from.value);  //조회시작일
        		var cal_to = this.gfn_nullToEmpty(this.div_search.cal_to.value);  //조회종료일
        		var phd_dlr_dsc = this.gfn_nullToEmpty(this.div_search.cbo_phd_dlr_dsc.value);  //물류출고구분
        		var prgr_c = this.gfn_nullToEmpty(this.div_search.cbo_prgr_c.value);  //다매가유형
        		var na_bzplc = this.gfn_nullToEmpty(this.div_search.cbo_nacode.value);  //농협사업장
        		var na_wrs_c = this.gfn_nullToEmpty(this.div_search.edt_na_wrs_c.value); //상품코드	
        		
        		param = "trade_type="+trade_type+
        				" dateCode="+dateCode+
        				" cal_from="+cal_from+
        				" cal_to="+cal_to+
        				" phd_dlr_dsc="+phd_dlr_dsc+
        				" prgr_c="+prgr_c+		
        				" na_bzplc="+na_bzplc+
        				" TRPL_C="+trplC+
        				" upTrplC=" +upTrplC+
        				" na_wrs_c=" + na_wrs_c;
        						
        		trace("##MASTER##PARAM##->"+param);
        		
        		var sSvcID        = "retrieveWrsMasterList";//통신아이디
        		var sURL          = "svc::rest/center/retrieveWrsMasterList";// 호출할 서버 페이지 주소
        		var sInDatasets   = "ds_pageVO=ds_pageVO";//보내는데이터셋
        		var sOutDatasets  = "ds_gridMaster=ds_TB_LG_OUT ds_pageVO=ds_pageVO ds_sum=DS_SUM";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
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
        		if(svcID == "retrieveWrsMasterList"){
        						
        			//조회했을 경우만 히든값 셋팅
        			this.div_list.edt_h01.set_value(this.gfn_nullToEmpty(this.div_search.cbo_date.value));//일자구분
        			this.div_list.edt_h02.set_value(this.gfn_nullToEmpty(this.div_search.cal_from.value));//조회시작일
        			this.div_list.edt_h03.set_value(this.gfn_nullToEmpty(this.div_search.cal_to.value));//조회종료일
        			this.div_list.edt_h04.set_value(this.gfn_nullToEmpty(this.div_search.cbo_phd_dlr_dsc.value));//물류출고구분
        			this.div_list.edt_h05.set_value(this.gfn_nullToEmpty(this.div_search.cbo_nacode.value));//농협사업장
        			this.div_list.edt_h06.set_value(this.gfn_nullToEmpty(this.div_search.cbo_prgr_c.value));//다매가유형	
        			
        			if(this.ds_gridMaster.rowcount > 0){
        					
        				this.ds_gridMaster.set_rowposition(1);
        				this.ds_gridMaster.set_rowposition(0);
        				
        				// 페이지 셋팅
        				var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        				var sPagesize = this.ds_pageVO.getColumn(0, "PAGE_SIZE");

        				this.div_list.div_page.fn_pageSet(sTotal, sPagesize,"grd_master,div_page",lsNowPage);
        			}else{	
        				this.div_list.div_page.fn_pageSet(0, 0,"grd_master,div_page",lsNowPage);//페이징 설정
        			}
        		}else if(svcID == "retrieveWrsDetailList"){			

        		}else if(svcID == "getNABizPlace") {
        			
        			if(this.ds_NABizPlace.rowcount != 0){
        			
        			for (var i=0; i < this.ds_NABizPlace.rowcount ;i++)			
        			{
        				//공급유형이 전체/매취/수탁이(00,01,02) 아니면 선택못하게 리스트에서 제거
        				
        				if (this.ds_NABizPlace.getColumn(i,0) == '8808983000015'){					
        					this.ds_NABizPlace.deleteRow(i);					
        				}
        				
        					
        				this.ds_NABizPlace.setColumn(i,"SHRT_BZPLNM","["+this.ds_NABizPlace.getColumn(i,0)+"] "+this.ds_NABizPlace.getColumn(i,1));
        			}	
        			
        			if (this.ds_NABizPlace.insertRow(0) != -1){
        				this.ds_NABizPlace.setColumn(0,"NA_BZPLC","");
        				this.ds_NABizPlace.setColumn(0,"SHRT_BZPLNM","- 선택 -");
        				};
        			
        			this.div_search.cbo_nacode.set_index(0);
        			}
        		}
        	}
        }

        this.div_list_Grid00_onselectchanged = function(obj,e)
        {
        	//alert("123");
        }

        this.grd_afterFnc = function(obj,e)
        {	
        	//this.fn_paging(1, "div_page2");// 처음조회시 1페이지를 조회한다.
        		
        	this.fn_searchScd();
        }

        //user function
        this.fn_searchScd = function(){
        	/*
        	var phd_na_bzplc = this.gfn_nullToEmpty(this.ds_gridMaster.getColumn(this.ds_gridMaster.rowposition,"PHD_NA_BZPLC"));	//물류경제통합사업장코드 	
            var econ_stdv_dsc = this.gfn_nullToEmpty(this.ds_gridMaster.getColumn(this.ds_gridMaster.rowposition,"ECON_STDV_DSC"));  //입출고구분코드
            var phd_dlr_dsc = this.gfn_nullToEmpty(this.ds_gridMaster.getColumn(this.ds_gridMaster.rowposition,"PHD_DLR_DSC"));  //출고구분코드	      	
            var prgr_c = this.gfn_nullToEmpty(this.ds_gridMaster.getColumn(this.ds_gridMaster.rowposition,"PRGR_C"));  //가격군코드
        	var na_trpl_c = this.gfn_nullToEmpty(this.ds_gridMaster.getColumn(this.ds_gridMaster.rowposition,"NA_TRPL_C"));  //경제통합거래처코드
            var na_wrs_c = this.gfn_nullToEmpty(this.ds_gridMaster.getColumn(this.ds_gridMaster.rowposition,"NA_WRS_C"));  //경제통합상품코드
            var phd_rvo_dt = this.gfn_nullToEmpty(this.ds_gridMaster.getColumn(this.ds_gridMaster.rowposition,"PHD_RVO_DT"));  //수주일자	      	
            var dlr_dt = this.gfn_nullToEmpty(this.ds_gridMaster.getColumn(this.ds_gridMaster.rowposition,"DLR_DT"));  //출고일자
            */
            
            //권한사업장 코드
        	var trplC = this.getTrplCode();
        	var upTrplC = application.gv_upGlnCode;
        	
        	var trade_type = this.gfn_nullToEmpty(this.div_search.cbo_trade_type.value);	//거래구분
            var phd_na_bzplc = this.gfn_nullToEmpty(this.ds_gridMaster.getColumn(this.ds_gridMaster.rowposition,"PHD_NA_BZPLC"));	//물류경제통합사업장코드 	
            var phd_dlr_dsc = this.gfn_nullToEmpty(this.div_list.edt_h04.value);  //물류출고구분
            var prgr_c = this.gfn_nullToEmpty(this.div_list.edt_h06.value);  //다매가유형
        	var na_trpl_c = this.gfn_nullToEmpty(this.ds_gridMaster.getColumn(this.ds_gridMaster.rowposition,"NA_TRPL_C"));  //경제통합거래처코드   
            var dateCode = this.gfn_nullToEmpty(this.div_list.edt_h01.value);  //일자구분
            var cal_from = this.gfn_nullToEmpty(this.div_list.edt_h02.value);  //조회시작일
            var cal_to = this.gfn_nullToEmpty(this.div_list.edt_h03.value);  //조회종료일
        	var na_wrs_c = this.gfn_nullToEmpty(this.div_search.edt_na_wrs_c.value); //상품코드
        		
        	param = "trade_type="+trade_type+
        			" phd_na_bzplc="+phd_na_bzplc+
        			" phd_dlr_dsc="+phd_dlr_dsc+
        			" prgr_c="+prgr_c+
        			" na_trpl_c="+na_trpl_c+		 
        			" dateCode="+dateCode+
        			" cal_from="+cal_from+
        			" cal_to="+cal_to+
        			" TRPL_C="+trplC+
        			" upTrplC="+upTrplC+
        			" na_wrs_c=" + na_wrs_c;
        	
        	trace("##DETAIL##PARAM##->"+param);
        				
        	var sSvcID        = "retrieveWrsDetailList";//통신아이디
        	var sURL          = "svc::rest/center/retrieveWrsDetailList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_gridDetail=ds_TB_LG_OUT_DETAIL";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc , "S");
        	
        }

        this.div_list_btn_divResize_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        /* 첫번째 그리드 엑셀 다운로드*/
        this.div_list_btn_gradM_excel_onclick = function(obj,e)
        {
        	//this.fn_excel();
        	
        	//gfn_exportExcel(Export할 Grid, 생성될 Excel파일명)
        	//파일명은 뒤에 "_년월일분초" 추가됨 (런쳐실행시만)
        	this.gfn_exportExcel(this.div_list.grd_master,"dp2226n0");
        }

        this.fn_excel = function(){
        	if(this.fn_validationCheck()){
        		//권한사업장 코드
        		var trplC = this.getTrplCode();
        		var upTrplC = application.gv_upGlnCode;
        		
        		var trade_type = this.gfn_nullToEmpty(this.div_search.cbo_trade_type.value);	//거래구분
        		var dateCode = this.gfn_nullToEmpty(this.div_search.cbo_date.value);  //일자구분
        		var cal_from = this.gfn_nullToEmpty(this.div_search.cal_from.value);  //조회시작일
        		var cal_to = this.gfn_nullToEmpty(this.div_search.cal_to.value);  //조회종료일
        		var phd_dlr_dsc = this.gfn_nullToEmpty(this.div_search.cbo_phd_dlr_dsc.value);  //물류출고구분
        		var prgr_c = this.gfn_nullToEmpty(this.div_search.cbo_prgr_c.value);  //다매가유형
        		var na_bzplc = this.gfn_nullToEmpty(this.div_search.cbo_nacode.value);  //농협사업장
        		var na_wrs_c = this.gfn_nullToEmpty(this.div_search.edt_na_wrs_c.value); //상품코드
        			
        		//엑셀명
        		var title = this.parent.sNm;
        		title = title.replace(/ /gi, '');
        		var fileName = title + "_상세_" + this.getDate() + ".xls";	
        		
        		param = "trade_type="+trade_type+
        				"&dateCode="+dateCode+
        				"&cal_from="+cal_from+
        				"&cal_to="+cal_to+
        				"&phd_dlr_dsc="+phd_dlr_dsc+
        				"&prgr_c="+prgr_c+		
        				"&na_bzplc="+na_bzplc+		
        				"&TRPL_C=" + trplC+
        				"&fileName="+fileName+
        				"&upTrplC="+upTrplC+
        				"&na_wrs_c=" + na_wrs_c;
        				
        		trace("##MASTER##PARAM##->"+param);
        		
        		param = encodeURI(encodeURI(param));

        		//this.div_list.web_downExcelM.set_url(application.gv_server_url+"rest/excel/downloadExcelWrsMasterList?"+param);
        		excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelWrsMasterList?"+param, this);
        	}
        }

        this.div_list_btn_gradD_excel_onclick = function(obj,e)
        {
        	//파일명은 뒤에 "_년월일분초" 추가됨 (런쳐실행시만)
        	//this.gfn_exportExcel(this.div_list.grd_master,"dp2226n0");

        	if(this.fn_validationCheck()){
        		//권한사업장 코드
        		var trplC = this.getTrplCode();
        		var upTrplC = application.gv_upGlnCode;
        		
        		var trade_type = this.gfn_nullToEmpty(this.div_search.cbo_trade_type.value);	//거래구분
        		var dateCode = this.gfn_nullToEmpty(this.div_search.cbo_date.value);  //일자구분
        		var cal_from = this.gfn_nullToEmpty(this.div_search.cal_from.value);  //조회시작일
        		var cal_to = this.gfn_nullToEmpty(this.div_search.cal_to.value);  //조회종료일
        		var phd_dlr_dsc = this.gfn_nullToEmpty(this.div_search.cbo_phd_dlr_dsc.value);  //물류출고구분
        		var prgr_c = this.gfn_nullToEmpty(this.div_search.cbo_prgr_c.value);  //다매가유형
        		var phd_na_bzplc = this.gfn_nullToEmpty(this.div_search.cbo_nacode.value);  //농협사업장
        		var na_wrs_c = this.gfn_nullToEmpty(this.div_search.edt_na_wrs_c.value); //상품코드
        		
        		//엑셀명
        		var title = this.parent.sNm;
        		title = title.replace(/ /gi, '');
        		var fileName = title + "_상세정보_" + this.getDate() + ".xls";	
        			
        		param = "trade_type="+trade_type+
        				"&dateCode="+dateCode+
        				"&cal_from="+cal_from+
        				"&cal_to="+cal_to+
        				"&phd_dlr_dsc="+phd_dlr_dsc+
        				"&prgr_c="+prgr_c+		
        				"&phd_na_bzplc="+phd_na_bzplc+		
        				"&TRPL_C=" + trplC+
        				"&fileName="+fileName+
        				"&upTrplC="+upTrplC+
        				"&na_wrs_c="+na_wrs_c;
        		// 출고실적 엑셀(↓주석처리하면 기존 쿼리)
        		param += "&flag=2";

        		var phd_na_bzplc = this.gfn_nullToEmpty(this.ds_gridMaster.getColumn(this.ds_gridMaster.rowposition,"PHD_NA_BZPLC"));	//물류경제통합사업장코드 	
        		var phd_dlr_dsc = this.gfn_nullToEmpty(this.div_list.edt_h04.value);  //물류출고구분
        		var prgr_c = this.gfn_nullToEmpty(this.div_list.edt_h06.value);  //다매가유형
        		var na_trpl_c = this.gfn_nullToEmpty(this.ds_gridMaster.getColumn(this.ds_gridMaster.rowposition,"NA_TRPL_C"));  //경제통합거래처코드   
        		var dateCode = this.gfn_nullToEmpty(this.div_list.edt_h01.value);  //일자구분
        		var cal_from = this.gfn_nullToEmpty(this.div_list.edt_h02.value);  //조회시작일
        		var cal_to = this.gfn_nullToEmpty(this.div_list.edt_h03.value);  //조회종료일
        		
        		param2 = "&phd_na_bzplc="+phd_na_bzplc+
        				"&phd_dlr_dsc="+phd_dlr_dsc+
        				"&prgr_c="+prgr_c+
        				"&na_trpl_c="+na_trpl_c+		 
        				"&dateCode="+dateCode+
        				"&cal_from="+cal_from+
        				"&cal_to="+cal_to;
        					
        		//trace("##DETAIL##PARAM##->"+param+param2);
        		
        		param = encodeURI(encodeURI(param));
        		param2 = encodeURI(encodeURI(param2));
        		
        		//this.div_list.web_downExcelD.set_url(application.gv_server_url+"rest/excel/downloadExcelWrsDetailList?"+param+param2);
        		excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelWrsDetailList?"+param+param2, this);
        	}
        }

        this.btn_excel_onclick = function(obj,e)
        {
        	this.fn_excel();
        }

        /* 엑셀 상세 다운로드 전표_상세(상품)내역 */
        this.btn_excelDetail_onclick = function(obj,e)
        {
        	var param = "";
        	
        	this.div_list.web_downExcelD.set_url(application.gv_server_url+"rest/excel/downloadExcelDetail?"+param);
        }

        /*-----------------------------------------------------------------------------------------*/
        // 페이징처리
        /*-----------------------------------------------------------------------------------------*/
        this.fn_paging = function(vPageNum,objDivNm)
        { 		
        	if(objDivNm == "div_page"){
        		this.ds_pageVO.clearData();  
        		this.ds_gridMaster.clearData();     //Grid에 Binding된 Dataset명	
        		
        		this.ds_pageVO.addRow(); 
        		
        		var vPageSize   = 10; 	//Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
        		var vTotalCount = 1; 	//전체건수. 화면조회후 리턴받아 사용
        		this.ds_pageVO.setColumn(0,"CURRENT_PAGE",vPageNum); //현재 페이지
        		this.ds_pageVO.setColumn(0,"PAGE_SIZE",vPageSize);
        		this.ds_pageVO.setColumn(0,"TOTAL_ROW_COUNT",vTotalCount);
        		 
        		var argumentObj = "";
        		
        		lsNowPage = vPageNum;//현재페이지 설정 
        		
        		this.fn_search();
        	} else if (objDivNm == "div_page2"){
        		this.ds_pageVO02.clearData();  
        		this.ds_gridDetail.clearData();     //Grid에 Binding된 Dataset명	
        		
        		this.ds_pageVO02.addRow(); 
        		
        		var vPageSize2   = 5; 	//Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
        		var vTotalCount2 = 1; 	//전체건수. 화면조회후 리턴받아 사용
        		this.ds_pageVO02.setColumn(0,"CURRENT_PAGE",vPageNum); //현재 페이지
        		this.ds_pageVO02.setColumn(0,"PAGE_SIZE",vPageSize2);
        		this.ds_pageVO02.setColumn(0,"TOTAL_ROW_COUNT",vTotalCount2);
        		 
        		var argumentObj = "";
        		
        		lsNowPage = vPageNum;//현재페이지 설정 	
        		
        		this.fn_searchScd();
        	}
         
        }

        

        this.div_list_onsize = function(obj,e)
        {
        	/* 페이지 숫자 위치 설정*/
        	
        	//마스터
        	var nLeft = (e.cx/2)-(this.div_list.div_page.width/2);
        	this.div_list.div_page.set_left(nLeft);
        	
        }

        /*거래구분 선택시*/
        this.div_search_cbo_PHD_DLR_DSC_onitemchanged = function(obj,e)
        {
        	if(this.div_search.cbo_trade_type.value == 2){
        		//입고반품
        		this.div_search.cbo_phd_dlr_dsc.set_enable(false);		
        		this.div_search.cbo_phd_dlr_dsc.set_value("all");
        	}else{		
        		//출고
        		this.div_search.cbo_phd_dlr_dsc.set_enable(true);
        		this.div_search.cbo_phd_dlr_dsc.set_value("all");	
        	}
        }

        /*엑셀 버튼(마스터)*/
        this.btn_excel00_onclick = function(obj,e)
        {
        	if(this.fn_validationCheck()){
        		
        		//권한사업장 코드
        		var trplC = this.getTrplCode();
        		var upTrplC = application.gv_upGlnCode;
        		
        		var trade_type = this.gfn_nullToEmpty(this.div_search.cbo_trade_type.value);	//거래구분
        		var dateCode = this.gfn_nullToEmpty(this.div_search.cbo_date.value);  //일자구분
        		var cal_from = this.gfn_nullToEmpty(this.div_search.cal_from.value);  //조회시작일
        		var cal_to = this.gfn_nullToEmpty(this.div_search.cal_to.value);  //조회종료일
        		var phd_dlr_dsc = this.gfn_nullToEmpty(this.div_search.cbo_phd_dlr_dsc.value);  //물류출고구분
        		var prgr_c = this.gfn_nullToEmpty(this.div_search.cbo_prgr_c.value);  //다매가유형
        		var na_bzplc = this.gfn_nullToEmpty(this.div_search.cbo_nacode.value);  //농협사업장
        		var na_wrs_c = this.gfn_nullToEmpty(this.div_search.edt_na_wrs_c.value); //상품코드
        		
        		//엑셀명
        		var title = this.parent.sNm;
        		title = title.replace(/ /gi, '');
        		var fileName = title + "_" + this.getDate() + ".xls";			
        		
        		param = "trade_type="+trade_type+
        				"&dateCode="+dateCode+
        				"&cal_from="+cal_from+
        				"&cal_to="+cal_to+
        				"&phd_dlr_dsc="+phd_dlr_dsc+
        				"&prgr_c="+prgr_c+		
        				"&na_bzplc="+na_bzplc+		
        				"&TRPL_C=" + trplC+
        				"&fileName="+fileName+
        				"&upTrplC="+upTrplC+
        				"&na_wrs_c=" + na_wrs_c;
        				
        		trace("##MASTER##PARAM##->"+param);
        		
        		param = encodeURI(encodeURI(param));

        		//this.div_list.web_downExcelMaster.set_url(application.gv_server_url+"rest/excel/downloadExcelWrsMasterOnly?"+param);
        		excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelWrsMasterOnly?"+param, this);
        	}
        }

        this.div_search_edt_na_wrs_c_onkeyup = function(obj,e)
        {
        	if(e.keycode==13)
        	this.fn_enterWrs(true, "edt");
        }

        this.fn_enterWrs = function(param,type){
        	
        	var params = {
                    autoType:param,
                    searchCode:this.gfn_nullToEmpty(this.div_search.edt_na_wrs_c.value),
                    searchText:this.gfn_nullToEmpty(this.div_search.edt_wrsnm.value)
        	}
        	if(typeof param == "boolean" && typeof type == "edt" ){
              if(!this.searPopValue(params)){return};
        	}
           
        	var oArg = {autoPop:params};
        	var sOption = "autosize=true, titleText=false";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("POPUP_SRC_WRS","POPUP::POPUP_SRC_WRS.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.div_search_btn_popup_onclick = function(obj,e)
        {
        	this.fn_enterWrs(true, "btn");
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	if(strVal != undefined){
        		var valueArr = strVal.split(",");	
        		this.div_search.edt_na_wrs_c.set_value(valueArr[0]);
        		this.div_search.edt_wrsnm.set_value(valueArr[1]);
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("oninit", this.form_init, this);
            this.div_search.cbo_prgr_c.addEventHandler("onitemchanged", this.div_search_cbo_PRGR_C_onitemchanged, this);
            this.div_search.cbo_date.addEventHandler("onitemchanged", this.Div01_Combo02_onitemchanged, this);
            this.div_search.cbo_trade_type.addEventHandler("onitemchanged", this.div_search_cbo_PHD_DLR_DSC_onitemchanged, this);
            this.div_search.edt_na_wrs_c.addEventHandler("onkeyup", this.div_search_edt_na_wrs_c_onkeyup, this);
            this.div_search.edt_wrsnm.addEventHandler("onkeyup", this.div_search_edt_na_wrs_c_onkeyup, this);
            this.div_search.btn_popup.addEventHandler("onclick", this.div_search_btn_popup_onclick, this);
            this.div_list.addEventHandler("onsize", this.div_list_onsize, this);
            this.div_list.btn_divResize.addEventHandler("onclick", this.div_list_btn_divResize_onclick, this);
            this.div_list.grd_master.addEventHandler("onselectchanged", this.div_list_Grid00_onselectchanged, this);
            this.div_list.btn_gradD_excel.addEventHandler("onclick", this.div_list_btn_gradD_excel_onclick, this);
            this.div_list.btn_gradM_excel.addEventHandler("onclick", this.div_list_btn_gradM_excel_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_excel00.addEventHandler("onclick", this.btn_excel00_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0700.xfdl");
        this.loadPreloadList();
       
    };
}
)();
