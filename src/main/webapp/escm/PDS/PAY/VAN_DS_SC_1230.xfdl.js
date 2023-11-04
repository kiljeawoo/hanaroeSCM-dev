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
                this.set_name("VAN_DS_SC_1230");
                this.set_titletext("세무 매입 실적");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_date", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"string\" size=\"13\"/><Column id=\"name\" type=\"string\" size=\"13\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"name\">일별</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"name\">월별</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_total_type", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"32\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\"/><Column id=\"SIMP_C_EXPL\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"SIMP_C\">01</Col><Col id=\"SIMP_CNM\">전산월집계분</Col></Row><Row><Col id=\"SIMP_C\">02</Col><Col id=\"SIMP_CNM\">전산월집계이외분</Col></Row><Row><Col id=\"SIMP_C\">03</Col><Col id=\"SIMP_CNM\">수기등록분</Col></Row><Row><Col id=\"SIMP_C\">04</Col><Col id=\"SIMP_CNM\">계통사업자승인분</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_contract_type", this);
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

            obj = new Dataset("ds_tax_byng", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHECK_BOX\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"CLNTNM\" type=\"string\" size=\"32\"/><Column id=\"BZPL_BZNO\" type=\"string\" size=\"32\"/><Column id=\"NA_TEAM_C\" type=\"string\" size=\"32\"/><Column id=\"NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"CUSNM\" type=\"string\" size=\"32\"/><Column id=\"TRPL_RLNO\" type=\"string\" size=\"32\"/><Column id=\"TRPL_NA_TEAM_C\" type=\"string\" size=\"32\"/><Column id=\"TR_DT\" type=\"string\" size=\"32\"/><Column id=\"NA_SOAC_DSC\" type=\"string\" size=\"32\"/><Column id=\"SPY_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"VAT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"PUC\" type=\"bigdecimal\" size=\"8\"/><Column id=\"NA_TOT_DSC\" type=\"string\" size=\"32\"/><Column id=\"NA_TOT_DTI_DSC\" type=\"string\" size=\"32\"/><Column id=\"TXBZ_TP_DSC\" type=\"string\" size=\"32\"/><Column id=\"LATCNM\" type=\"string\" size=\"32\"/><Column id=\"BLB_SPY_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"BLB_VAT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"CRC_BLB_SPY_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"CRC_BLB_VAT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"DFC_SPY_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"DFC_VAT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"CRC_DFC_SPY_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"CRC_DFC_VAT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"BZ_METH_DSC\" type=\"string\" size=\"32\"/><Column id=\"ROTS_CTR_DSC\" type=\"string\" size=\"32\"/><Column id=\"NA_LLED_C\" type=\"string\" size=\"32\"/><Column id=\"NA_MLED_C\" type=\"string\" size=\"32\"/><Column id=\"PBC_RMK_CNTN\" type=\"string\" size=\"32\"/><Column id=\"RMK_CNTN\" type=\"string\" size=\"32\"/><Column id=\"TXBZ_TOT_RG_SQNO\" type=\"string\" size=\"32\"/><Column id=\"DSPC_INCD_YN\" type=\"string\" size=\"32\"/></ColumnInfo>");
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

            obj = new Dataset("DS_SUM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"TOTAL_SPY_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"TOTAL_VAT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"TOTAL_PUC\" type=\"bigdecimal\" size=\"8\"/><Column id=\"TOTAL_BLB_SPY_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"TOTAL_BLB_VAT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"TOTAL_CRC_BLB_SPY_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"TOTAL_CRC_BLB_VAT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"TOTAL_DFC_SPY_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"TOTAL_DFC_VAT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"TOTAL_CRC_DFC_SPY_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"TOTAL_CRC_DFC_VAT\" type=\"bigdecimal\" size=\"8\"/></ColumnInfo>");
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


            
            // UI Components Initialize
            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "159", null, this);
            obj.set_taborder("37");
            obj.set_text("Div00");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "36", "408", null, this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "788", "1", "15", "490", null, null, this);
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

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "118", null, this);
            obj.set_taborder("23");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "95", "15", null, this);
            obj.set_taborder("32");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", "91", "21", null, null, this.div_search);
            obj.set_taborder("64");
            obj.set_text("일자구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "62", "91", "21", null, null, this.div_search);
            obj.set_taborder("65");
            obj.set_text("농협사업장");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "456", "36", "121", "21", null, null, this.div_search);
            obj.set_taborder("66");
            obj.set_text("세무유형구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "456", "11", "79", "21", null, null, this.div_search);
            obj.set_taborder("74");
            obj.set_text("집계구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "426", "0", null, "95", "521", null, this.div_search);
            obj.set_taborder("80");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "120", "82", null, "5", "776", null, this.div_search);
            obj.set_taborder("85");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "15", "36", "91", "21", null, null, this.div_search);
            obj.set_taborder("87");
            obj.set_text("증빙서 서류");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_voucher_type", "absolute", "118", "36", "284", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_voucher_type_innerdataset = new Dataset("rdo_voucher_type_innerdataset", this.div_search.rdo_voucher_type);
            rdo_voucher_type_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">입금표</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">세금계산서</Col></Row></Rows>");
            obj.set_innerdataset(rdo_voucher_type_innerdataset);
            obj.set_taborder("88");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("0");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Static("Static09", "absolute", "120", "135", null, "10", "776", null, this.div_search);
            obj.set_taborder("89");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "456", "62", "103", "21", null, null, this.div_search);
            obj.set_taborder("90");
            obj.set_text("계통계약구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_contract_type", "absolute", "571", "62", "156", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("91");
            obj.set_innerdataset("ds_contract_type");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_index("-1");
            obj = new Static("Static07", "absolute", "120", "31", null, "5", "776", null, this.div_search);
            obj.set_taborder("92");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "120", "56", null, "5", "776", null, this.div_search);
            obj.set_taborder("93");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "120", "108", null, "5", "776", null, this.div_search);
            obj.set_taborder("94");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_tx_type", "absolute", "571", "36", "156", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_tx_type_innerdataset = new Dataset("cbo_tx_type_innerdataset", this.div_search.cbo_tx_type);
            cbo_tx_type_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">- 전체 -</Col></Row><Row><Col id=\"codecolumn\">103</Col><Col id=\"datacolumn\">관리수수료</Col></Row><Row><Col id=\"codecolumn\">101</Col><Col id=\"datacolumn\">물류수수료</Col></Row><Row><Col id=\"codecolumn\">105</Col><Col id=\"datacolumn\">매입장려금</Col></Row><Row><Col id=\"codecolumn\">107</Col><Col id=\"datacolumn\">판매장려금</Col></Row></Rows>");
            obj.set_innerdataset(cbo_tx_type_innerdataset);
            obj.set_taborder("95");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("-1");
            obj = new Combo("cbo_date", "absolute", "118", "10", "71", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("98");
            obj.set_innerdataset("ds_date");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_index("-1");
            obj = new Calendar("cal_from", "absolute", "192", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("99");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("sta_date", "absolute", "292", "10", "10", "21", null, null, this.div_search);
            obj.set_taborder("100");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_to", "absolute", "302", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("101");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Combo("cbo_total_type", "absolute", "571", "11", "156", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("102");
            obj.set_innerdataset("ds_total_type");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj = new Div("cal_search_month", "absolute", "192", "10", "100", "21", null, null, this.div_search);
            obj.set_taborder("106");
            obj.set_url("common::calendarMonth.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("div_combo", "absolute", "118", "51", "339", "41", null, null, this.div_search);
            obj.set_taborder("107");
            obj.set_text("Div00");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_nacode", "absolute", "0", "11", "285", "21", null, null, this.div_search.div_combo);
            this.div_search.div_combo.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_NABizPlace");
            obj.set_codecolumn("NA_BZPLC");
            obj.set_datacolumn("SHRT_BZPLNM");
            obj.set_displayrowcount("20");
            obj = new Div("div_edt", "absolute", "85", "51", "363", "41", null, null, this.div_search);
            obj.set_taborder("108");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_nacode00", "absolute", "33", "11", "116", "21", null, null, this.div_search.div_edt);
            obj.set_taborder("3");
            obj.set_cssclass("WF_Essential");
            obj.set_maxlength("13");
            obj.set_inputtype("number");
            this.div_search.div_edt.addChild(obj.name, obj);
            obj = new Edit("edt_nacode01", "absolute", "152", "11", "147", "21", null, null, this.div_search.div_edt);
            obj.set_taborder("4");
            obj.set_cssclass("WF_Essential");
            this.div_search.div_edt.addChild(obj.name, obj);
            obj = new Button("btn_popup", "absolute", "302", "11", "21", "21", null, null, this.div_search.div_edt);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.div_edt.addChild(obj.name, obj);
            obj = new Edit("edt_na_team", "absolute", "326", "11", "35", "21", null, null, this.div_search.div_edt);
            obj.set_taborder("6");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("false");
            this.div_search.div_edt.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "319", "30", null, "10", "594", null, this);
            obj.set_taborder("33");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "319", "61", null, "5", "594", null, this);
            obj.set_taborder("34");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "1", "30", null, "95", "977", null, this);
            obj.set_taborder("36");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "123", null, null, "15", "50", this);
            obj.set_taborder("38");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btn_divResize", "absolute", "331", "0", null, "12", "330", null, this.div_list);
            obj.set_taborder("45");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd", "absolute", "0", "43", null, null, "0", "44", this.div_list);
            obj.set_taborder("46");
            obj.set_binddataset("ds_tax_byng");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"68\"/><Column size=\"120\"/><Column size=\"180\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"180\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"108\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"81\"/><Column size=\"82\"/><Column size=\"83\"/><Column size=\"84\"/><Column size=\"85\"/><Column size=\"86\"/><Column size=\"87\"/><Column size=\"88\"/><Column size=\"89\"/><Column size=\"90\"/><Column size=\"91\"/><Column size=\"92\"/><Column size=\"93\"/><Column size=\"94\"/><Column size=\"95\"/><Column size=\"96\"/><Column size=\"97\"/><Column size=\"98\"/><Column size=\"150\"/><Column size=\"100\"/></Columns><Rows><Row size=\"47\" band=\"head\"/><Row size=\"28\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"text\" text=\"expr:0\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"사업장코드\"/><Cell col=\"3\" text=\"거래처명\"/><Cell col=\"4\" text=\"사업장&#13;&#10;사업자등록번호\"/><Cell col=\"5\" text=\"사업장&#13;&#10;팀명\"/><Cell col=\"6\" text=\"거래처코드\"/><Cell col=\"7\" text=\"고객명\"/><Cell col=\"8\" text=\"거래처&#13;&#10;실명번호\"/><Cell col=\"9\" text=\"거래처&#13;&#10;팀명\"/><Cell col=\"10\" text=\"거래일자\"/><Cell col=\"11\" text=\"계산서구분코드\"/><Cell col=\"12\" text=\"순공급금액\"/><Cell col=\"13\" text=\"순부가세\"/><Cell col=\"14\" text=\"매수\"/><Cell col=\"15\" text=\"집계구분\"/><Cell col=\"16\" text=\"집계상세구분\"/><Cell col=\"17\" text=\"세무유형구분\"/><Cell col=\"18\" text=\"품목명\"/><Cell col=\"19\" text=\"흑자&#13;&#10;공급금액\"/><Cell col=\"20\" text=\"흑자&#13;&#10;부가세\"/><Cell col=\"21\" text=\"정정흑자&#13;&#10;공급금액\"/><Cell col=\"22\" text=\"정정흑자&#13;&#10;부가세\"/><Cell col=\"23\" text=\"적자&#13;&#10;공급금액\"/><Cell col=\"24\" text=\"적자&#13;&#10;부가세\"/><Cell col=\"25\" text=\"정정적자&#13;&#10;공급금액\"/><Cell col=\"26\" text=\"정정적자&#13;&#10;부가세\"/><Cell col=\"27\" text=\"사업방식\"/><Cell col=\"28\" text=\"계통계약구분\"/><Cell col=\"29\" text=\"대분류\"/><Cell col=\"30\" text=\"중분류\"/><Cell col=\"31\" text=\"발행비&#13;&#10;비고내용\"/><Cell col=\"32\" text=\"비고내용\"/><Cell col=\"33\" text=\"세무집계&#13;&#10;등록일련번호\"/><Cell col=\"34\" text=\"상세내역&#13;&#10;포함여부\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECK_BOX\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:NA_BZPLC\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:CLNTNM\"/><Cell col=\"4\" text=\"expr:BZPL_BZNO.substr(0,3)+'-'+BZPL_BZNO.substr(3,2)+'-'+BZPL_BZNO.substr(5)\"/><Cell col=\"5\" text=\"bind:NA_TEAM_C\"/><Cell col=\"6\" text=\"bind:NA_TRPL_C\"/><Cell col=\"7\" style=\"align:left;\" text=\"bind:CUSNM\"/><Cell col=\"8\" text=\"expr:TRPL_RLNO.substr(0,3)+'-'+TRPL_RLNO.substr(3,2)+'-'+TRPL_RLNO.substr(5)\"/><Cell col=\"9\" text=\"bind:TRPL_NA_TEAM_C\"/><Cell col=\"10\" displaytype=\"date\" text=\"bind:TR_DT\" mask=\"yyyy-MM-dd\"/><Cell col=\"11\" text=\"bind:NA_SOAC_DSC\"/><Cell col=\"12\" style=\"align:right;\" text=\"bind:SPY_AM\"/><Cell col=\"13\" style=\"align:right;\" text=\"bind:VAT\"/><Cell col=\"14\" style=\"align:right;\" text=\"bind:PUC\"/><Cell col=\"15\" text=\"bind:NA_TOT_DSC\"/><Cell col=\"16\" text=\"bind:NA_TOT_DTI_DSC\"/><Cell col=\"17\" text=\"bind:TXBZ_TP_DSC\"/><Cell col=\"18\" text=\"bind:LATCNM\"/><Cell col=\"19\" style=\"align:right;\" text=\"bind:BLB_SPY_AM\"/><Cell col=\"20\" style=\"align:right;\" text=\"bind:BLB_VAT\"/><Cell col=\"21\" style=\"align:right;\" text=\"bind:CRC_BLB_SPY_AM\"/><Cell col=\"22\" style=\"align:right;\" text=\"bind:CRC_BLB_VAT\"/><Cell col=\"23\" style=\"align:right;\" text=\"bind:DFC_SPY_AM\"/><Cell col=\"24\" style=\"align:right;\" text=\"bind:DFC_VAT\"/><Cell col=\"25\" style=\"align:right;\" text=\"bind:CRC_DFC_SPY_AM\"/><Cell col=\"26\" style=\"align:right;\" text=\"bind:CRC_DFC_VAT\"/><Cell col=\"27\" text=\"bind:BZ_METH_DSC\"/><Cell col=\"28\" text=\"bind:ROTS_CTR_DSC\"/><Cell col=\"29\" text=\"bind:NA_LLED_C\"/><Cell col=\"30\" text=\"bind:NA_MLED_C\"/><Cell col=\"31\" style=\"align:left;\" text=\"bind:PBC_RMK_CNTN\"/><Cell col=\"32\" style=\"align:left;\" text=\"bind:RMK_CNTN\"/><Cell col=\"33\" text=\"bind:TXBZ_TOT_RG_SQNO\"/><Cell col=\"34\" text=\"bind:DSPC_INCD_YN\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\" style=\"align:center;\" text=\"합계\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:comp.parent.parent.DS_SUM.getColumn(0,'TOTAL_SPY_AM')\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:comp.parent.parent.DS_SUM.getColumn(0,'TOTAL_VAT')\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:comp.parent.parent.DS_SUM.getColumn(0,'TOTAL_PUC')\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:comp.parent.parent.DS_SUM.getColumn(0,'TOTAL_BLB_SPY_AM')\"/><Cell col=\"20\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:comp.parent.parent.DS_SUM.getColumn(0,'TOTAL_BLB_VAT')\"/><Cell col=\"21\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:comp.parent.parent.DS_SUM.getColumn(0,'TOTAL_CRC_BLB_SPY_AM')\"/><Cell col=\"22\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:comp.parent.parent.DS_SUM.getColumn(0,'TOTAL_CRC_BLB_VAT')\"/><Cell col=\"23\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:comp.parent.parent.DS_SUM.getColumn(0,'TOTAL_DFC_SPY_AM')\"/><Cell col=\"24\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:comp.parent.parent.DS_SUM.getColumn(0,'TOTAL_DFC_VAT')\"/><Cell col=\"25\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:comp.parent.parent.DS_SUM.getColumn(0,'TOTAL_CRC_DFC_SPY_AM')\"/><Cell col=\"26\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:comp.parent.parent.DS_SUM.getColumn(0,'TOTAL_CRC_DFC_VAT')\"/><Cell col=\"27\"/><Cell col=\"28\"/><Cell col=\"29\"/><Cell col=\"30\"/><Cell col=\"31\" style=\"align:right;\"/><Cell col=\"32\" style=\"align:right;\"/><Cell col=\"33\"/><Cell col=\"34\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "936", "-1", null, "15", "2", null, this.div_list);
            obj.set_taborder("47");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", null, "13", "41", "21", "0", null, this.div_list);
            obj.set_taborder("48");
            obj.set_text("엑셀");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "936", "35", null, "5", "2", null, this.div_list);
            obj.set_taborder("49");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_page", "absolute", "205", null, "379", "44", null, "0", this.div_list);
            obj.set_taborder("50");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list.addChild(obj.name, obj);

            obj = new WebBrowser("web_downExcel", "absolute", "652", "22", "27", "13", null, null, this);
            obj.set_taborder("39");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("40");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", null, null, "40", "15", "5", this);
            obj.set_taborder("41");
            obj.set_text("세무매입실적 화면 <b v='true'>기능문의</b>는 <u v='true'>하나로eSCM고객센터(02-1522-1211)</u>로, <b v='true'>금액문의</b>는 <u v='true'>담당 바이어</u>에게로 부탁드립니다.");
            obj.set_wordwrap("char");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 339, 41, this.div_search.div_combo,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("107");
            		p.set_text("Div00");

            	}
            );
            this.div_search.div_combo.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 363, 41, this.div_search.div_edt,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("108");

            	}
            );
            this.div_search.div_edt.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 95, this.div_search,
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
            		p.set_taborder("38");
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
            		p.set_titletext("세무 매입 실적");

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
            this._addPreloadList("fdl", "common::calendarMonth.xfdl");
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1230.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1230.xfdl", function() {
        //include "lib::comLib.xjs";

        /* form load */
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj,e);	
        	
        	var param = [  
         		{code:"CSER_CTR_TPC",   dsName:"ds_contract_type"}
         		//,{code:"NA_TOT_DSC",   dsName:"ds_total_type" }
            ];

        	this.gfn_setCommonCode(param);
        	
        	//권한사업장 콤보박스 변경시 농협사업장 조회
        	this.div_auth.setFunctionName("fn_afterCall");	
        }

        /* Form Init*/
        this.form_init = function(obj,e)
        {
        }

        //공통코드 데이터셋 onload후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        	trace("fn_commonAfterOnload");
        	
        	this.div_search.cbo_contract_type.set_index(0);
        	this.div_search.cbo_total_type.set_index(0);
        	
        	this.div_search.cbo_tx_type.set_index(0);
        	this.div_search.cbo_date.set_index(0);

        }

        //권한사업장 콤보박스 변경시 농협사업장 조회
        this.fn_afterCall = function(sVal)
        {
        	this.fn_getNABizPlace(sVal);
        }

        /* 페이지 로딩후 실행부분 */
        this.fn_afterFormOnload = function()
        {	
        	//그리드 nodata
        	this.div_list.grd.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	
        	this.div_search.cal_from.set_value(this.gfn_today("yyyyMMdd"));	
        	this.div_search.cal_to.set_value(this.gfn_today("yyyyMMdd"));
        	
        	this.gridCheckboxInit(); //체크박스 이벤트 등록	
        	
        	this.div_search.div_combo.set_visible(true);
        	this.div_search.div_edt.set_visible(false);
        	
        	this.div_search.cal_search_month.set_visible(false);
        	
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

        this.div_search_cbo_date_onitemchanged = function(obj,e)
        {	
        	if(this.div_search.cbo_date.value == 1){
        	//일별
        	this.div_search.cal_from.set_visible(true);
        	this.div_search.sta_date.set_visible(true);
        	this.div_search.cal_to.set_visible(true);
        	
        	this.div_search.cal_search_month.set_visible(false);
        	
        	this.div_search.cal_from.set_value(this.gfn_today("yyyyMMdd"));	
        	this.div_search.cal_to.set_value(this.gfn_today("yyyyMMdd"));
        	}else{
        	//월별
        	this.div_search.cal_from.set_visible(false);
        	this.div_search.sta_date.set_visible(false);
        	this.div_search.cal_to.set_visible(false);
        	
        	this.div_search.cal_search_month.set_visible(true);
        	
        	//지난달
        	var lastMonth = this.gfn_minusMonth(this.gfn_today("yyyyMMdd"),1).substr(0,6);
        		
        	this.div_search.cal_search_month._setValue(lastMonth);	
        	}
        }

        this.div_search_cbo_nacode_onitemchanged = function(obj,e)
        {
        	//this.div_search.div_combo.edt_nacode00.set_value(this.div_search.div_combo.cbo_nacode.value);
        	//this.div_search.div_combo.edt_nacode01.set_value(this.div_search.div_combo.cbo_nacode.text);
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
        	
            if(this.div_search.cbo_contract_type.value == 1){
        		if(this.gfn_isNull(this.div_search.div_combo.cbo_nacode.value)){
        			//this.alert('농협사업장을 선택 하세요');
        			//return false;
        		}
        	}
        	
        	return true;
        }

        /* search */
        this.btn_search_onclick = function(obj,e)
        {	
        	this.fn_paging(1);// 처음조회시 1페이지를 조회한다.		
        }

        this.fn_search = function(){	
        	this.ds_tax_byng.clearData();
        	
        	if(this.fn_validationCheck()){
        	
        	//권한사업장 코드
        	var trplC = this.getTrplCode();
        	
        	var search_date_type = this.gfn_nullToEmpty(this.div_search.cbo_date.value); //일자구분(일/월)

        	if(search_date_type == 1){
        		var from_date = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        		var to_date = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일
        	}else{
        		var from_date = this.gfn_nullToEmpty(this.gfn_firstDate(this.div_search.cal_search_month._getValue())); //조회시작일
        		var to_date = this.gfn_nullToEmpty(this.gfn_lastDate(this.div_search.cal_search_month._getValue())); //조회종료일
        	}

        	var total_type = this.gfn_nullToEmpty(this.div_search.cbo_total_type.value); //집계구분
        	var rots_ctr_dsc =this.gfn_nullToEmpty(this.div_search.cbo_contract_type.value); //계통계약구분
        		
        	var center_na_bzplc = this.gfn_nullToEmpty(this.div_search.div_combo.cbo_nacode.value); //중앙본부 농협사업장
        	var na_bzplc = this.gfn_nullToEmpty(this.div_search.div_edt.edt_nacode00.value); //농협사업장
        	
        	var na_team = this.gfn_nullToEmpty(this.div_search.div_edt.edt_na_team.value); //농협사업장팀
        		
        	var tx_type = this.gfn_nullToEmpty(this.div_search.cbo_tx_type.value); //세무유형구분
        	var voucher_type = this.gfn_nullToEmpty(this.div_search.rdo_voucher_type.value); //증빙서 서류	
        	//var byng_slam_type = this.gfn_nullToEmpty(this.div_search.rdo_byng_slam_type.value); //매입-매출구분
        	
        	
        	var param = " search_date_type="+search_date_type+
        				" from_date="+from_date+
        				" to_date="+to_date+
        				" total_type="+total_type+		
        				" rots_ctr_dsc="+rots_ctr_dsc+
        				" center_na_bzplc="+center_na_bzplc+
        				" na_bzplc="+na_bzplc+
        				" na_team="+na_team+				
        				" tx_type="+tx_type+
        				" voucher_type="+voucher_type+				
        				//" byng_slam_type="+byng_slam_type+
        				" TRPL_C=" + trplC;
        				
        	trace("##MASTER##PARAM##->"+param);
        		
        	var sSvcID        = "retrieveByngList";//통신아이디
        	var sURL          = "svc::rest/tax/retrieveByngList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "ds_pageVO=ds_pageVO";//보내는데이터셋
        	var sOutDatasets  = "ds_tax_byng=ds_taxByng ds_pageVO=ds_pageVO DS_SUM=DS_SUM";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
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
        		if(svcID == "retrieveByngList"){
        				
        			if(this.ds_tax_byng.rowcount > 0){				
        			
        				this.ds_tax_byng.set_rowposition(1);
        				this.ds_tax_byng.set_rowposition(0);
        			
        				// 페이지 셋팅
        				
        				/*
        				var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        				var sPagesize = this.ds_pageVO.getColumn(0, "PAGE_SIZE");
        				
        				trace("sTotal : " + sTotal);
        				trace("sPagesize : " + sPagesize);				

        				this.div_list.div_page.fn_pageSet(sTotal, sPagesize,"grd,div_page",lsNowPage);
        				*/
        			}else{	
        				//this.div_list.div_page.fn_pageSet(0, 0,"grd,div_page",lsNowPage);//페이징 설정
        			}
        			
        		}else if(svcID == "getNABizPlace") {
        			
        			if(this.ds_NABizPlace.rowcount != 0){
        			
        			for (var i=0; i < this.ds_NABizPlace.rowcount ;i++)			
        			{				
        				this.ds_NABizPlace.setColumn(i,"SHRT_BZPLNM","["+this.ds_NABizPlace.getColumn(i,0)+"] "+this.ds_NABizPlace.getColumn(i,1));
        			}	
        			
        			if (this.ds_NABizPlace.insertRow(0) != -1){
        				this.ds_NABizPlace.setColumn(0,"NA_BZPLC","");
        				this.ds_NABizPlace.setColumn(0,"SHRT_BZPLNM","- 선택 -");
        				};
        			
        			this.div_search.div_combo.cbo_nacode.set_index(0);
        			}
        		}
        	}
        }
        this.div_search_cbo_contract_type_onitemchanged = function(obj,e)
        {
        	if(this.div_search.cbo_contract_type.value == 1){
        		this.div_search.div_combo.set_visible(true);
        		this.div_search.div_edt.set_visible(false);
        		
        		this.div_search.div_combo.cbo_nacode.set_value(""); //수요처코드
        		
        		this.div_search.div_edt.edt_nacode00.set_value(""); //수요처코드
        		this.div_search.div_edt.edt_nacode01.set_value(""); //수요처명
        		this.div_search.div_edt.edt_na_team.set_value(""); //수요처팀명
        		
        	}else{
        		this.div_search.div_combo.set_visible(false);
        		this.div_search.div_edt.set_visible(true);
        		
        		this.div_search.div_combo.cbo_nacode.set_value(""); //수요처코드
        		
        		this.div_search.div_edt.edt_nacode00.set_value(""); //수요처코드
        		this.div_search.div_edt.edt_nacode01.set_value(""); //수요처명
        		this.div_search.div_edt.edt_na_team.set_value(""); //수요처팀명		
        		
        	}
        }

        this.div_list_btn_divResize_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        /* 농협사업장 돋보기 클릭시*/
        this.div_search_div_edt_btn_popup_onclick = function(params)
        {
        	var param = {
        				autoType:params,
        				searchCode:this.div_search.div_edt.edt_nacode00.value,
        				searchText:this.div_search.div_edt.edt_nacode01.value
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

        this.fn_popupAfter = function(strId,strVal)
        {	
        	trace(" strId : " + strId + " strVal : " + strVal);
        		
        	
        	if(strId == 'POPUP_SRC_RVOPL_TRPL' && strVal != null){
        		//농협사업장
        		var strValNo = strVal.split(',');		
        		this.div_search.div_edt.edt_nacode00.set_value(strValNo[0]); //수요처코드
        		this.div_search.div_edt.edt_nacode01.set_value(strValNo[1]); //수요처명
        		this.div_search.div_edt.edt_na_team.set_value(strValNo[2]); //수요처팀명
        		
        	}	
        }

        /*-----------------------------------------------------------------------------------------*/
        // 페이징처리
        /*-----------------------------------------------------------------------------------------*/
        this.fn_paging = function(vPageNum)
        { 	  	 
        	this.ds_pageVO.clearData();  
        	this.ds_tax_byng.clearData();     //Grid에 Binding된 Dataset명	
        	
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
        	
        	/*
        	trace("div_list_onsize");
        	var nLeft = (e.cx/2)-(this.div_list.div_page.width/2);
        	this.div_list.div_page.set_left(nLeft);
        	*/
        	
        }

        //엑셀버튼 클릭시
        this.btn_excel_onclick = function(obj,e)
        {	
        	if(this.fn_validationCheck()){
        		//권한사업장 코드
        		var trplC = this.getTrplCode();
        		
        		var search_date_type = this.gfn_nullToEmpty(this.div_search.cbo_date.value); //일자구분(일/월)

        		if(search_date_type == 1){
        			var from_date = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        			var to_date = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일
        		}else{
        			var from_date = this.gfn_nullToEmpty(this.gfn_firstDate(this.div_search.cal_search_month._getValue())); //조회시작일
        			var to_date = this.gfn_nullToEmpty(this.gfn_lastDate(this.div_search.cal_search_month._getValue())); //조회종료일
        		}

        		var total_type = this.gfn_nullToEmpty(this.div_search.cbo_total_type.value); //집계구분
        		var rots_ctr_dsc =this.gfn_nullToEmpty(this.div_search.cbo_contract_type.value); //계통계약구분
        			
        		var center_na_bzplc = this.gfn_nullToEmpty(this.div_search.div_combo.cbo_nacode.value); //중앙본부 농협사업장
        		var na_bzplc = this.gfn_nullToEmpty(this.div_search.div_edt.edt_nacode00.value); //농협사업장
        		
        		var na_team = this.gfn_nullToEmpty(this.div_search.div_edt.edt_na_team.value); //농협사업장팀
        			
        		var tx_type = this.gfn_nullToEmpty(this.div_search.cbo_tx_type.value); //세무유형구분
        		var voucher_type = this.gfn_nullToEmpty(this.div_search.rdo_voucher_type.value); //증빙서 서류	
        		//var byng_slam_type = this.gfn_nullToEmpty(this.div_search.rdo_byng_slam_type.value); //매입-매출구분
        		
        		var title = this.parent.sNm;
        		title = title.replace(/ /gi, '');
        		var fileName = title + "_" + this.getDate() + ".xls";
        			
        		var param = "search_date_type="+search_date_type+
        				"&from_date="+from_date+
        				"&to_date="+to_date+
        				"&total_type="+total_type+		
        				"&rots_ctr_dsc="+rots_ctr_dsc+
        				"&center_na_bzplc="+center_na_bzplc+
        				"&na_bzplc="+na_bzplc+
        				"&na_team="+na_team+				
        				"&tx_type="+tx_type+
        				"&voucher_type="+voucher_type+
        				"&TRPL_C=" + trplC+
        				"&fileName=" + fileName;

        		trace(">>>>>>> params : " +  param);
        			
        		param = encodeURI(encodeURI(param));
        		
        		//this.web_downExcel.set_url(application.gv_server_url+"rest/excel/downloadByngList?"+param);
        		excelDownHandler(application.gv_server_url+"rest/excel/downloadByngList?"+param, this);
        	}
        }

        //출력버튼 클릭시
        this.btn_print_onclick = function(obj,e)
        {

        	if(this.div_search.rdo_voucher_type.value !== "3") { // 입금표
        		alert("증빙서 서류-입금표만 출력 가능합니다.");
        		return;
        	}
        	
        	//조회결과 없을시 출력 안됨.
        	if(this.ds_tax_byng.rowcount == 0){
        		alert("출력할 결과가 없습니다. 조회버튼을 눌러주세요.");
        		return;
        	}else{
        		for (var i=0; i < this.ds_tax_byng.rowcount ;i++)			
        		{
        			if (this.ds_tax_byng.getColumn(i,'NA_SOAC_DSC') != '입금표'){					
        				alert("증빙서 서류-입금표만 출력 가능합니다.");
        				return;
        			}
        		}
        	}

        	var NA_BZPLC = '';	
        	var TXBZ_TOT_RG_SQNO = '';	
        	
        	var checkIndex = this.checkColIndex(this.div_list.grd);
        	trace(checkIndex)
        	
        	if(this.gfn_isNull(checkIndex)){
        		alert("출력할 결과가 없습니다. 체크박스를 선택해 주세요.");
        		return;
        	}
        	
        	var lstTelNo = checkIndex.split(',');
        	trace(lstTelNo.length);
        	for (var i=0; i < lstTelNo.length ;i++)			
        	{		
        		//trace(this.ds_tax_byng.getColumn(i,"NA_BZPLC")); //사업장코드
        		//trace(this.ds_tax_byng.getColumn(i,"TXBZ_TOT_RG_SQNO")); //세무일련번호		
        		
        		NA_BZPLC += this.ds_tax_byng.getColumn(lstTelNo[i],"NA_BZPLC") + ',';		
        		
        		TXBZ_TOT_RG_SQNO += this.ds_tax_byng.getColumn(lstTelNo[i],"TXBZ_TOT_RG_SQNO") + ',';
        				
        		//trace(NA_BZPLC);
        		//trace(TXBZ_TOT_RG_SQNO);
        		
        	};
        		
        	/*
        	for (var i=0; i < this.ds_tax_byng.rowcount ;i++)			
        	{		
        		//trace(this.ds_tax_byng.getColumn(i,"NA_BZPLC")); //사업장코드
        		//trace(this.ds_tax_byng.getColumn(i,"TXBZ_TOT_RG_SQNO")); //세무일련번호		
        		
        		NA_BZPLC += this.ds_tax_byng.getColumn(i,"NA_BZPLC") + ',';		
        		
        		TXBZ_TOT_RG_SQNO += this.ds_tax_byng.getColumn(i,"TXBZ_TOT_RG_SQNO") + ',';
        				
        		//trace(NA_BZPLC);
        		//trace(TXBZ_TOT_RG_SQNO);
        		
        	};
        	*/
        		
        	
        	if(NA_BZPLC.indexOf(',') != -1){
        			NA_BZPLC = NA_BZPLC.substring(0, NA_BZPLC.length-1);
        	};
        	if(TXBZ_TOT_RG_SQNO.indexOf(',') != -1){
        			TXBZ_TOT_RG_SQNO = TXBZ_TOT_RG_SQNO.substring(0, TXBZ_TOT_RG_SQNO.length-1);
        	};
        		
        	trace(NA_BZPLC);
        	trace(TXBZ_TOT_RG_SQNO);
        		
        	var param = {
        	NA_BZPLC:NA_BZPLC,
        	TXBZ_TOT_RG_SQNO:TXBZ_TOT_RG_SQNO
        	}
        	var ozParam = {
        	sId: 'VAN_DS_SC_1230',
        	sUrl: '/rest/oz/tax/printByngList',
        	paramType: 'param',
        	sParam: param
        	};
        	this.ozViewer(ozParam);
        }

        this.div_search_div_edt_edt_nacode00_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.div_search_div_edt_btn_popup_onclick(true);
        	}
        }

        this.div_search_div_edt_edt_nacode01_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.div_search_div_edt_btn_popup_onclick(true);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.form_init, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.div_search.cbo_contract_type.addEventHandler("onitemchanged", this.div_search_cbo_contract_type_onitemchanged, this);
            this.div_search.cbo_date.addEventHandler("onitemchanged", this.div_search_cbo_date_onitemchanged, this);
            this.div_search.div_edt.edt_nacode00.addEventHandler("onkeydown", this.div_search_div_edt_edt_nacode00_onkeydown, this);
            this.div_search.div_edt.edt_nacode01.addEventHandler("onkeydown", this.div_search_div_edt_edt_nacode01_onkeydown, this);
            this.div_search.div_edt.btn_popup.addEventHandler("onclick", this.div_search_div_edt_btn_popup_onclick, this);
            this.div_list.addEventHandler("onsize", this.div_list_onsize, this);
            this.div_list.btn_divResize.addEventHandler("onclick", this.div_list_btn_divResize_onclick, this);
            this.btn_print.addEventHandler("onclick", this.btn_print_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1230.xfdl");
        this.loadPreloadList();
       
    };
}
)();
