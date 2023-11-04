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
                this.set_name("VAN_DS_SC_1220");
                this.set_titletext("세무 매출 실적");
                this._setFormPosition(0,0,803,1030);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
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

            obj = new Dataset("ds_tax_slam_m", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"BYNG_YM\" type=\"string\" size=\"32\"/><Column id=\"TXBZ_DFN_DT\" type=\"string\" size=\"32\"/><Column id=\"TXBZ_TOT_RG_SQNO\" type=\"string\" size=\"32\"/><Column id=\"CUSNM\" type=\"string\" size=\"32\"/><Column id=\"TRPL_RLNO\" type=\"string\" size=\"32\"/><Column id=\"NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"PUC\" type=\"bigdecimal\" size=\"8\"/><Column id=\"SPY_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"BYNG_VAT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"SMA_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"EXTX_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"TOTALAM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"VAT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"RCCNT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"RCAM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"RCVAT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"RCNCNT\" type=\"bigdecimal\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_tax_slam_d", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"BYNG_YM\" type=\"string\" size=\"32\"/><Column id=\"TXBZ_DFN_DT\" type=\"string\" size=\"32\"/><Column id=\"TXBZ_TOT_RG_SQNO\" type=\"string\" size=\"32\"/><Column id=\"BZPL_BZNO\" type=\"string\" size=\"32\"/><Column id=\"CLNTNM\" type=\"string\" size=\"32\"/><Column id=\"NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"TRPL_RLNO\" type=\"string\" size=\"32\"/><Column id=\"CUSNM\" type=\"string\" size=\"32\"/><Column id=\"NA_TEAM_C\" type=\"string\" size=\"32\"/><Column id=\"TRPL_NA_TEAM_C\" type=\"string\" size=\"32\"/><Column id=\"TR_DT\" type=\"string\" size=\"32\"/><Column id=\"NA_SOAC_DSC\" type=\"string\" size=\"32\"/><Column id=\"NA_TOT_DSC\" type=\"string\" size=\"32\"/><Column id=\"NA_TOT_DTI_DSC\" type=\"string\" size=\"32\"/><Column id=\"TXBZ_TP_DSC\" type=\"string\" size=\"32\"/><Column id=\"LATCNM\" type=\"string\" size=\"32\"/><Column id=\"SPY_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"VAT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"NA_SLPNO\" type=\"string\" size=\"32\"/><Column id=\"NA_TR_DSC\" type=\"string\" size=\"32\"/><Column id=\"BZ_METH_DSC\" type=\"string\" size=\"32\"/><Column id=\"ROTS_CTR_DSC\" type=\"string\" size=\"32\"/><Column id=\"NA_LLED_C\" type=\"string\" size=\"32\"/><Column id=\"NA_MLED_C\" type=\"string\" size=\"32\"/><Column id=\"TXBZ_PBC_NT\" type=\"string\" size=\"32\"/><Column id=\"TXBZ_PBC_DTM\" type=\"string\" size=\"32\"/><Column id=\"TXBZ_PBCMN_ENO\" type=\"string\" size=\"32\"/><Column id=\"PBC_RMK_CNTN\" type=\"string\" size=\"32\"/><Column id=\"RMK_CNTN\" type=\"string\" size=\"32\"/><Column id=\"RC_YN\" type=\"string\" size=\"32\"/><Column id=\"RC_TYPE\" type=\"string\" size=\"32\"/><Column id=\"BLB_SPY_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"BLB_VAT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"DFC_SPY_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"DFC_VAT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"CRC_BLB_SPY_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"CRC_BLB_VAT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"CRC_DFC_SPY_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"CRC_DFC_VAT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"TRPL_CLNTNM\" type=\"string\" size=\"32\"/><Column id=\"TRPL_ADR\" type=\"string\" size=\"32\"/><Column id=\"TRPL_BZTPNM\" type=\"string\" size=\"32\"/><Column id=\"TRPL_BZCCNM\" type=\"string\" size=\"32\"/><Column id=\"TRPL_REPMNM\" type=\"string\" size=\"32\"/><Column id=\"TRPL_TEL\" type=\"string\" size=\"32\"/><Column id=\"BZPL_CLNTNM\" type=\"string\" size=\"32\"/><Column id=\"BZPL_ADR\" type=\"string\" size=\"32\"/><Column id=\"BZPL_BZTPNM\" type=\"string\" size=\"32\"/><Column id=\"BZPL_BZCCNM\" type=\"string\" size=\"32\"/><Column id=\"BZPL_REPMNM\" type=\"string\" size=\"32\"/><Column id=\"BZPL_TEL\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "116", null, this);
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

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("23");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "95", "15", null, this);
            obj.set_taborder("32");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Radio("rdo_voucher_type", "absolute", "118", "62", "275", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_voucher_type_innerdataset = new Dataset("rdo_voucher_type_innerdataset", this.div_search.rdo_voucher_type);
            rdo_voucher_type_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">세금계산서</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">계산서</Col></Row></Rows>");
            obj.set_innerdataset(rdo_voucher_type_innerdataset);
            obj.set_taborder("88");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("1");
            obj = new Static("Static00", "absolute", "15", "10", "91", "21", null, null, this.div_search);
            obj.set_taborder("64");
            obj.set_text("일자구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "36", "91", "21", null, null, this.div_search);
            obj.set_taborder("65");
            obj.set_text("농협사업장");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "432", "62", "121", "21", null, null, this.div_search);
            obj.set_taborder("66");
            obj.set_text("접수여부");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "432", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("74");
            obj.set_text("집계구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_total_type", "absolute", "535", "10", "174", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("75");
            obj.set_innerdataset("@ds_total_type");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj = new Static("Static05", "absolute", "426", "0", null, "95", "521", null, this.div_search);
            obj.set_taborder("80");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_receipt_type", "absolute", "535", "62", "192", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_receipt_type_innerdataset = new Dataset("rdo_receipt_type_innerdataset", this.div_search.rdo_receipt_type);
            rdo_receipt_type_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">미접수</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">접수</Col></Row></Rows>");
            obj.set_innerdataset(rdo_receipt_type_innerdataset);
            obj.set_taborder("83");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("0");
            obj.set_direction("vertical");
            obj.set_index("1");
            obj = new Static("Static10", "absolute", "120", "82", null, "5", "776", null, this.div_search);
            obj.set_taborder("85");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "15", "62", "91", "21", null, null, this.div_search);
            obj.set_taborder("87");
            obj.set_text("증빙서 서류");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "120", "135", null, "10", "776", null, this.div_search);
            obj.set_taborder("89");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "432", "35", "103", "21", null, null, this.div_search);
            obj.set_taborder("90");
            obj.set_text("계통계약구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_contract_type", "absolute", "535", "35", "174", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("91");
            obj.set_innerdataset("ds_contract_type");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
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
            obj = new Combo("cbo_date", "absolute", "118", "10", "71", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("95");
            obj.set_innerdataset("@ds_date");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_index("-1");
            obj = new Calendar("cal_from", "absolute", "192", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("96");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("sta_date", "absolute", "292", "10", "10", "21", null, null, this.div_search);
            obj.set_taborder("97");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_to", "absolute", "302", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("98");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Div("cal_search_month", "absolute", "192", "10", "100", "21", null, null, this.div_search);
            obj.set_taborder("104");
            obj.set_url("common::calendarMonth.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("div_combo", "absolute", "118", "24", "300", "41", null, null, this.div_search);
            obj.set_taborder("102");
            obj.set_text("Div00");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_nacode", "absolute", "0", "11", "284", "21", null, null, this.div_search.div_combo);
            this.div_search.div_combo.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_NABizPlace");
            obj.set_codecolumn("NA_BZPLC");
            obj.set_datacolumn("SHRT_BZPLNM");
            obj.set_displayrowcount("20");
            obj = new Div("div_edt", "absolute", "85", "24", "356", "41", null, null, this.div_search);
            obj.set_taborder("103");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_nacode00", "absolute", "33", "11", "116", "21", null, null, this.div_search.div_edt);
            obj.set_taborder("0");
            obj.set_cssclass("WF_Essential");
            obj.set_maxlength("13");
            obj.set_inputtype("number");
            this.div_search.div_edt.addChild(obj.name, obj);
            obj = new Edit("edt_nacode01", "absolute", "152", "11", "142", "21", null, null, this.div_search.div_edt);
            obj.set_taborder("1");
            obj.set_cssclass("WF_Essential");
            this.div_search.div_edt.addChild(obj.name, obj);
            obj = new Button("btn_popup", "absolute", "297", "11", "21", "21", null, null, this.div_search.div_edt);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.div_edt.addChild(obj.name, obj);
            obj = new Edit("edt_na_team", "absolute", "321", "11", "18", "21", null, null, this.div_search.div_edt);
            obj.set_taborder("3");
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
            obj.set_taborder("0");
            obj.set_scrollbars("autoboth");
            this.addChild(obj.name, obj);
            obj = new Button("btn_divResize", "absolute", "331", "0", null, "12", "330", null, this.div_list);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_master", "absolute", "0", "42", null, "378", "0", null, this.div_list);
            obj.set_taborder("24");
            obj.set_binddataset("ds_tax_slam_m");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/><Row size=\"28\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"상호명\"/><Cell col=\"2\" text=\"사업자번호\"/><Cell col=\"3\" text=\"거래처\"/><Cell col=\"4\" text=\"매입매수\"/><Cell col=\"5\" text=\"과세매입(A)\"/><Cell col=\"6\" text=\"매입부가세\"/><Cell col=\"7\" text=\"영세율매입(B)\"/><Cell col=\"8\" text=\"면세매입(C)\"/><Cell col=\"9\" text=\"총매입액(A+B+C)\"/><Cell col=\"10\" text=\"부가세\"/><Cell col=\"11\" text=\"접수매수\"/><Cell col=\"12\" text=\"접수금액\"/><Cell col=\"13\" text=\"접수세액\"/><Cell col=\"14\" text=\"미접수매수\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:CUSNM\"/><Cell col=\"2\" text=\"bind:TRPL_RLNO\"/><Cell col=\"3\" text=\"bind:NA_TRPL_C\"/><Cell col=\"4\" style=\"align:right;\" text=\"bind:PUC\"/><Cell col=\"5\" style=\"align:right;\" text=\"bind:SPY_AM\"/><Cell col=\"6\" style=\"align:right;\" text=\"bind:BYNG_VAT\"/><Cell col=\"7\" style=\"align:right;\" text=\"bind:SMA_AM\"/><Cell col=\"8\" style=\"align:right;\" text=\"bind:EXTX_AM\"/><Cell col=\"9\" style=\"align:right;\" text=\"bind:TOTALAM\"/><Cell col=\"10\" style=\"align:right;\" text=\"bind:VAT\"/><Cell col=\"11\" style=\"align:right;\" text=\"bind:RCCNT\"/><Cell col=\"12\" style=\"align:right;\" text=\"bind:RCAM\"/><Cell col=\"13\" style=\"align:right;\" text=\"bind:RCVAT\"/><Cell col=\"14\" style=\"align:right;\" text=\"bind:RCNCNT\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" displaytype=\"number\" expr=\"expr:dataset.getSum('PUC')\" mask=\"###,##0\"/><Cell col=\"5\" displaytype=\"number\" expr=\"expr:dataset.getSum('SPY_AM')\" mask=\"###,##0\"/><Cell col=\"6\" displaytype=\"number\" expr=\"expr:dataset.getSum('BYNG_VAT')\" mask=\"###,##0\"/><Cell col=\"7\" displaytype=\"number\" expr=\"expr:dataset.getSum('SMA_AM')\" mask=\"###,##0\"/><Cell col=\"8\" displaytype=\"number\" expr=\"expr:dataset.getSum('EXTX_AM')\" mask=\"###,##0\"/><Cell col=\"9\" displaytype=\"number\" expr=\"expr:dataset.getSum('TOTALAM')\" mask=\"###,##0\"/><Cell col=\"10\" displaytype=\"number\" expr=\"expr:dataset.getSum('VAT')\" mask=\"###,##0\"/><Cell col=\"11\" displaytype=\"number\" expr=\"expr:dataset.getSum('RCCNT')\" mask=\"###,##0\"/><Cell col=\"12\" displaytype=\"number\" expr=\"expr:dataset.getSum('RCAM')\" mask=\"###,##0\"/><Cell col=\"13\" displaytype=\"number\" expr=\"expr:dataset.getSum('RCVAT')\" mask=\"###,##0\"/><Cell col=\"14\" displaytype=\"number\" expr=\"expr:dataset.getSum('RCNCNT')\" mask=\"###,##0\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "936", "-1", null, "15", "2", null, this.div_list);
            obj.set_taborder("32");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "638", "37", null, "5", "0", null, this.div_list);
            obj.set_taborder("34");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "936", "209", null, "15", "2", null, this.div_list);
            obj.set_taborder("35");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "935", "246", null, "5", "3", null, this.div_list);
            obj.set_taborder("36");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "733", "1", "55", "15", null, null, this.div_list);
            obj.set_taborder("37");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "733", "419", "55", "15", null, null, this.div_list);
            obj.set_taborder("38");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "758", "454", null, "5", "0", null, this.div_list);
            obj.set_taborder("39");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_detail", "absolute", "1", "459", null, "398", "0", null, this.div_list);
            obj.set_taborder("26");
            obj.set_binddataset("ds_tax_slam_d");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"300\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"300\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"200\"/><Column size=\"300\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"130\"/><Column size=\"130\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"28\"/><Row size=\"28\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"사업장코드\"/><Cell col=\"2\" text=\"사업장&#13;&#10;사업자등록번호\"/><Cell col=\"3\" text=\"거래처명\"/><Cell col=\"4\" text=\"거래처코드\"/><Cell col=\"5\" text=\"거래처&#13;&#10;실명번호\"/><Cell col=\"6\" text=\"고객명\"/><Cell col=\"7\" text=\"사업장팀명\"/><Cell col=\"8\" text=\"거래처팀명\"/><Cell col=\"9\" text=\"거래일자\"/><Cell col=\"10\" text=\"계산서구분명\"/><Cell col=\"11\" text=\"집계구분\"/><Cell col=\"12\" text=\"집계상세구분\"/><Cell col=\"13\" text=\"세무유형구분\"/><Cell col=\"14\" text=\"품목명\"/><Cell col=\"15\" text=\"순공급금액\"/><Cell col=\"16\" text=\"순부가세\"/><Cell col=\"17\" text=\"전표번호\"/><Cell col=\"18\" text=\"거래구분명\"/><Cell col=\"19\" text=\"사업방식\"/><Cell col=\"20\" text=\"계통계약구분\"/><Cell col=\"21\" text=\"대분류\"/><Cell col=\"22\" text=\"중분류\"/><Cell col=\"23\" text=\"세무발행횟수\"/><Cell col=\"24\" text=\"발행일시\"/><Cell col=\"25\" text=\"발행자\"/><Cell col=\"26\" text=\"접수비고내용\"/><Cell col=\"27\" text=\"참조\"/><Cell col=\"28\" text=\"접수여부\"/><Cell col=\"29\" text=\"접수구분명\"/><Cell col=\"30\" text=\"흑자&#13;&#10;공급금액\"/><Cell col=\"31\" text=\"흑자&#13;&#10;부가세\"/><Cell col=\"32\" text=\"적자&#13;&#10;공급금액\"/><Cell col=\"33\" text=\"적자&#13;&#10;부가세\"/><Cell col=\"34\" text=\"정정흑자&#13;&#10;공급금액\"/><Cell col=\"35\" text=\"정정흑자&#13;&#10;부가세\"/><Cell col=\"36\" text=\"정정적자&#13;&#10;공급금액\"/><Cell col=\"37\" text=\"정정적자&#13;&#10;부가세\"/><Cell col=\"38\" text=\"거래처명\"/><Cell col=\"39\" text=\"거래처&#13;&#10;주소\"/><Cell col=\"40\" text=\"거래처&#13;&#10;업태명\"/><Cell col=\"41\" text=\"거래처&#13;&#10;종목명\"/><Cell col=\"42\" text=\"거래처&#13;&#10;대표자명\"/><Cell col=\"43\" text=\"거래처&#13;&#10;전화번호\"/><Cell col=\"44\" text=\"사업장명\"/><Cell col=\"45\" text=\"사업장&#13;&#10;주소\"/><Cell col=\"46\" text=\"사업장&#13;&#10;업태명\"/><Cell col=\"47\" text=\"사업장&#13;&#10;종목명\"/><Cell col=\"48\" text=\"사업장&#13;&#10;대표자명\"/><Cell col=\"49\" text=\"사업장&#13;&#10;전화번호\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:NA_BZPLC\"/><Cell col=\"2\" text=\"bind:BZPL_BZNO\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:CLNTNM\"/><Cell col=\"4\" text=\"bind:NA_TRPL_C\"/><Cell col=\"5\" text=\"bind:TRPL_RLNO\"/><Cell col=\"6\" style=\"align:left;\" text=\"bind:CUSNM\"/><Cell col=\"7\" text=\"bind:NA_TEAM_C\"/><Cell col=\"8\" text=\"bind:TRPL_NA_TEAM_C\"/><Cell col=\"9\" text=\"bind:TR_DT\"/><Cell col=\"10\" text=\"bind:NA_SOAC_DSC\"/><Cell col=\"11\" text=\"bind:NA_TOT_DSC\"/><Cell col=\"12\" text=\"bind:NA_TOT_DTI_DSC\"/><Cell col=\"13\" text=\"bind:TXBZ_TP_DSC\"/><Cell col=\"14\" style=\"align:left;\" text=\"bind:LATCNM\"/><Cell col=\"15\" style=\"align:right;\" text=\"bind:SPY_AM\"/><Cell col=\"16\" style=\"align:right;\" text=\"bind:VAT\"/><Cell col=\"17\" text=\"bind:NA_SLPNO\"/><Cell col=\"18\" text=\"bind:NA_TR_DSC\"/><Cell col=\"19\" text=\"bind:BZ_METH_DSC\"/><Cell col=\"20\" text=\"bind:ROTS_CTR_DSC\"/><Cell col=\"21\" text=\"bind:NA_LLED_C\"/><Cell col=\"22\" text=\"bind:NA_MLED_C\"/><Cell col=\"23\" text=\"bind:TXBZ_PBC_NT\"/><Cell col=\"24\" text=\"bind:TXBZ_PBC_DTM\"/><Cell col=\"25\" text=\"bind:TXBZ_PBCMN_ENO\"/><Cell col=\"26\" text=\"bind:PBC_RMK_CNTN\"/><Cell col=\"27\" text=\"bind:RMK_CNTN\"/><Cell col=\"28\" text=\"bind:RC_YN\"/><Cell col=\"29\" text=\"bind:RC_TYPE\"/><Cell col=\"30\" style=\"align:right;\" text=\"bind:BLB_SPY_AM\"/><Cell col=\"31\" style=\"align:right;\" text=\"bind:BLB_VAT\"/><Cell col=\"32\" style=\"align:right;\" text=\"bind:DFC_SPY_AM\"/><Cell col=\"33\" style=\"align:right;\" text=\"bind:DFC_VAT\"/><Cell col=\"34\" style=\"align:right;\" text=\"bind:CRC_BLB_SPY_AM\"/><Cell col=\"35\" style=\"align:right;\" text=\"bind:CRC_BLB_VAT\"/><Cell col=\"36\" style=\"align:right;\" text=\"bind:CRC_DFC_SPY_AM\"/><Cell col=\"37\" style=\"align:right;\" text=\"bind:CRC_DFC_VAT\"/><Cell col=\"38\" style=\"align:left;\" text=\"bind:TRPL_CLNTNM\"/><Cell col=\"39\" style=\"align:left;\" text=\"bind:TRPL_ADR\"/><Cell col=\"40\" style=\"align:left;\" text=\"bind:TRPL_BZTPNM\"/><Cell col=\"41\" style=\"align:left;\" text=\"bind:TRPL_BZCCNM\"/><Cell col=\"42\" style=\"align:left;\" text=\"bind:TRPL_REPMNM\"/><Cell col=\"43\" style=\"align:left;\" text=\"bind:TRPL_TEL\"/><Cell col=\"44\" style=\"align:left;\" text=\"bind:BZPL_CLNTNM\"/><Cell col=\"45\" style=\"align:left;\" text=\"bind:BZPL_ADR\"/><Cell col=\"46\" style=\"align:left;\" text=\"bind:BZPL_BZTPNM\"/><Cell col=\"47\" style=\"align:left;\" text=\"bind:BZPL_BZCCNM\"/><Cell col=\"48\" style=\"align:left;\" text=\"bind:BZPL_REPMNM\"/><Cell col=\"49\" style=\"align:left;\" text=\"bind:BZPL_TEL\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\" displaytype=\"number\" expr=\"expr:dataset.getSum('SPY_AM')\" mask=\"###,###\"/><Cell col=\"16\" displaytype=\"number\" expr=\"expr:dataset.getSum('VAT')\" mask=\"###,###\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/><Cell col=\"27\"/><Cell col=\"28\"/><Cell col=\"29\"/><Cell col=\"30\" displaytype=\"number\" expr=\"expr:dataset.getSum('BLB_SPY_AM')\" mask=\"###,##0\"/><Cell col=\"31\" displaytype=\"number\" expr=\"expr:dataset.getSum('BLB_VAT')\" mask=\"###,##0\"/><Cell col=\"32\" displaytype=\"number\" expr=\"expr:dataset.getSum('DFC_SPY_AM')\" mask=\"###,##0\"/><Cell col=\"33\" displaytype=\"number\" expr=\"expr:dataset.getSum('DFC_VAT')\" mask=\"###,##0\"/><Cell col=\"34\" displaytype=\"number\" expr=\"expr:dataset.getSum('CRC_BLB_SPY_AM')\" mask=\"###,##0\"/><Cell col=\"35\" displaytype=\"number\" expr=\"expr:dataset.getSum('CRC_BLB_VAT')\" mask=\"###,##0\"/><Cell col=\"36\" displaytype=\"number\" expr=\"expr:dataset.getSum('CRC_DFC_SPY_AM')\" mask=\"###,##0\"/><Cell col=\"37\" displaytype=\"number\" expr=\"expr:dataset.getSum('CRC_DFC_VAT')\" mask=\"###,##0\"/><Cell col=\"38\"/><Cell col=\"39\"/><Cell col=\"40\"/><Cell col=\"41\"/><Cell col=\"42\"/><Cell col=\"43\"/><Cell col=\"44\"/><Cell col=\"45\"/><Cell col=\"46\"/><Cell col=\"47\"/><Cell col=\"48\"/><Cell col=\"49\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("Button01", "absolute", null, "433", "41", "21", "0", null, this.div_list);
            obj.set_taborder("40");
            obj.set_text("엑셀");
            this.div_list.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", null, null, "40", "15", "5", this);
            obj.set_taborder("40");
            obj.set_text("세무매출실적 화면 <b v='true'>기능문의</b>는 <u v='true'>하나로eSCM고객센터(02-1522-1211)</u>로, <b v='true'>금액문의</b>는 <u v='true'>담당 바이어</u>에게로 부탁드립니다.");
            obj.set_wordwrap("char");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 300, 41, this.div_search.div_combo,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("102");
            		p.set_text("Div00");

            	}
            );
            this.div_search.div_combo.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 356, 41, this.div_search.div_edt,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("103");

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
            		p.set_taborder("0");
            		p.set_scrollbars("autoboth");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 1030, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("세무 매출 실적");

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
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1220.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1220.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        /* form load */
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e);

        	var param = [
         		{code:"CSER_CTR_TPC", dsName:"ds_contract_type"}
         		//, {code:"NA_TOT_DSC", dsName:"ds_total_type"}
            ];

        	this.gfn_setCommonCode(param);

        	//권한사업장 콤보박스 변경시 농협사업장 조회
        	this.div_auth.setFunctionName("fn_afterCall");
        }

        //권한사업장 콤보박스 변경시 농협사업장 조회
        this.fn_afterCall = function(sVal)
        {
        	this.fn_getNABizPlace(sVal);
        }

        //공통코드 데이터셋 onload후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        	this.div_search.cbo_contract_type.set_index(0);
        	this.div_search.cbo_total_type.set_index(0);

        	this.div_search.cbo_date.set_index(0);
        }

        /* 페이지 로딩후 실행부분 */
        this.fn_afterFormOnload = function()
        {
        	//그리드클릭 이벤트 등록
        	this.div_list.grd_master.addEventHandler("oncellclick", this.grd_afterFnc, this);

        	//그리드 nodata
        	this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	this.div_list.grd_detail.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));

        	this.div_search.cal_from.set_value(this.gfn_today("yyyyMMdd"));
        	this.div_search.cal_to.set_value(this.gfn_today("yyyyMMdd"));
        	this.div_search.cal_search_month.set_visible(false);

        	this.div_search.div_combo.set_visible(true);
        	this.div_search.div_edt.set_visible(false);

        	this.fn_getNABizPlace(application.gv_glnCode);
        }

        /*농협사업장 조회*/
        this.fn_getNABizPlace = function(v_nacode)
        {
        	var nacode = v_nacode;
        	var search_type = "added";

        	var param = "search_type="+search_type+
        				" splr_na_trpl_c="+nacode;

        	var sSvcID        = "getNABizPlace";//통신아이디
        	var sURL          = "svc::rest/common/getNABizPlace";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_NABizPlace=data";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets , sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.div_search_cbo_date_onitemchanged = function(obj,e)
        {
        	if (this.div_search.cbo_date.value == 1) {
        		//일별
        		this.div_search.cal_from.set_visible(true);
        		this.div_search.sta_date.set_visible(true);
        		this.div_search.cal_to.set_visible(true);
        		this.div_search.cal_search_month.set_visible(false);
        		this.div_search.cal_from.set_value(this.gfn_today("yyyyMMdd"));
        		this.div_search.cal_to.set_value(this.gfn_today("yyyyMMdd"));
        	} else {
        		//월별
        		this.div_search.cal_from.set_visible(false);
        		this.div_search.sta_date.set_visible(false);
        		this.div_search.cal_to.set_visible(false);
        		this.div_search.cal_search_month.set_visible(true);

        		//지난달
        		var lastMonth = this.gfn_minusMonth(this.gfn_today("yyyyMMdd"), 1).substr(0, 6);

        		this.div_search.cal_search_month._setValue(lastMonth);
        	}
        }

        /* Validation Check */
        this.fn_validationCheck = function()
        {
        	if (this.gfn_getDiffDay(this.div_search.cal_from.value, this.div_search.cal_to.value) < 0) {

        		//조회 시작일과 종료일을 다시 확인해 주세요
        		this.gfn_getMessage("alert", "validation.message.fromDate.toDate.reConfirm");
        		return false;
        	} else {
        		if (this.gfn_getDiffDay(this.div_search.cal_from.value, this.div_search.cal_to.value) > 31) {

        		//기간을 31일 이내로 선택해 주세요
        		this.gfn_getMessage("alert", "validation.message.selectDateIn31Day");
        		return false;
        		}
        	}

        	if (this.div_search.cbo_contract_type.value == '4') {
        		if (this.gfn_isNull(this.div_search.div_edt.edt_nacode00.value)) {
        			this.alert('농협사업장을 선택 하세요');
        			return false;
        		}
        	} else {
        		if (this.gfn_isNull(this.div_search.div_combo.cbo_nacode.value)) {
        			this.alert('농협사업장을 선택 하세요');
        			return false;
        		}
        	}

        	//집계구분이 전산월집계분일경우
        	//if (this.div_search.cbo_total_type.value == '02') {
        	//	alert("집계구분이 전산월집계분이외분일 경우 2015년 10월 이전 데이터만 조회가능합니다.");
        	//}
        	return true;
        }

        /* search */
        this.btn_search_onclick = function(obj,e)
        {
        	this.ds_tax_slam_m.clearData();
        	this.ds_tax_slam_d.clearData();

        	if (this.fn_validationCheck()) {
        		//권한사업장 코드
        		var trplC = this.getTrplCode();

        		var search_date_type = this.gfn_nullToEmpty(this.div_search.cbo_date.value); //일자구분(일/월)

        		if (search_date_type == 1) {
        			var from_date = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        			var to_date = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일
        		} else {
        			var from_date = this.gfn_nullToEmpty(this.gfn_firstDate(this.div_search.cal_search_month._getValue())); //조회시작일
        			var to_date = this.gfn_nullToEmpty(this.gfn_lastDate(this.div_search.cal_search_month._getValue())); //조회종료일
        		}

        		var total_type = this.gfn_nullToEmpty(this.div_search.cbo_total_type.value); //집계구분
        		var rots_ctr_dsc =this.gfn_nullToEmpty(this.div_search.cbo_contract_type.value); //계통계약구분

        		var center_na_bzplc = this.gfn_nullToEmpty(this.div_search.div_combo.cbo_nacode.value); //중앙본부 농협사업장
        		var na_bzplc = this.gfn_nullToEmpty(this.div_search.div_edt.edt_nacode00.value); //농협사업장

        		var na_team = this.gfn_nullToEmpty(this.div_search.div_edt.edt_na_team.value); //농협사업장팀

        		var receipt_type = this.gfn_nullToEmpty(this.div_search.rdo_receipt_type.value); //접수여부
        		var voucher_type = this.gfn_nullToEmpty(this.div_search.rdo_voucher_type.value); //증빙서 서류 구분

        		var param = " search_date_type="+search_date_type+
        					" from_date="+from_date+
        					" to_date="+to_date+
        					" total_type="+total_type+
        					" rots_ctr_dsc="+rots_ctr_dsc+
        					" center_na_bzplc="+center_na_bzplc+
        					" na_bzplc="+na_bzplc+
        					" na_team="+na_team+
        					" receipt_type="+receipt_type+
        					" voucher_type="+voucher_type+
        					" TRPL_C=" + trplC;

        		var sSvcID        = "retrieveSlamMasterList";//통신아이디
        		var sURL          = "svc::rest/tax/retrieveSlamMasterList";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_tax_slam_m=ds_taxSlamM";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = param;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회

        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets , sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", ErrorMsg);
        		return;
        	} else {
        		if (svcID == "retrieveSlamMasterList") {
        			if (this.ds_tax_slam_m.rowcount == 0) {
        				//this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			}
        		} else if (svcID == "retrieveSlamDetailList") {
        			if (this.ds_tax_slam_d.rowcount == 0) {
        				//this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			}
        		} else if (svcID == "getNABizPlace") {
        			if (this.ds_NABizPlace.rowcount != 0) {
        				for (var i=0; i < this.ds_NABizPlace.rowcount;i++) {
        					this.ds_NABizPlace.setColumn(i, "SHRT_BZPLNM", "["+this.ds_NABizPlace.getColumn(i, 0)+"] "+this.ds_NABizPlace.getColumn(i, 1));
        				}

        				if (this.ds_NABizPlace.insertRow(0) != -1) {
        					this.ds_NABizPlace.setColumn(0, "NA_BZPLC", "");
        					this.ds_NABizPlace.setColumn(0, "SHRT_BZPLNM", "- 선택 -");
        				};

        				this.div_search.div_combo.cbo_nacode.set_index(0);
        			}
        		}
        	}
        }

        this.div_search_cbo_contract_type_onitemchanged = function(obj,e)
        {
        	if (this.div_search.cbo_contract_type.value == 1) {
        		this.div_search.div_combo.set_visible(true);
        		this.div_search.div_edt.set_visible(false);

        		this.div_search.div_combo.cbo_nacode.set_value(""); //수요처코드

        		this.div_search.div_edt.edt_nacode00.set_value(""); //수요처코드
        		this.div_search.div_edt.edt_nacode01.set_value(""); //수요처명
        		this.div_search.div_edt.edt_na_team.set_value(""); //수요처팀명
        	} else {
        		this.div_search.div_combo.set_visible(false);
        		this.div_search.div_edt.set_visible(true);

        		this.div_search.div_combo.cbo_nacode.set_value(""); //수요처코드

        		this.div_search.div_edt.edt_nacode00.set_value(""); //수요처코드
        		this.div_search.div_edt.edt_nacode01.set_value(""); //수요처명
        		this.div_search.div_edt.edt_na_team.set_value(""); //수요처팀명
        	}
        }

        this.grd_afterFnc = function(obj,e)
        {
        	//권한사업장 코드
        	var trplC = this.getTrplCode();

        	var search_date_type = this.gfn_nullToEmpty(this.div_search.cbo_date.value); //일자구분(일/월)

        	if (search_date_type == 1) {
        		var from_date = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        		var to_date = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일
        	} else {
        		var from_date = this.gfn_nullToEmpty(this.gfn_firstDate(this.div_search.cal_search_month._getValue())); //조회시작일
        		var to_date = this.gfn_nullToEmpty(this.gfn_lastDate(this.div_search.cal_search_month._getValue())); //조회종료일
        	}

        	var total_type = this.gfn_nullToEmpty(this.div_search.cbo_total_type.value); //집계구분
        	var rots_ctr_dsc =this.gfn_nullToEmpty(this.div_search.cbo_contract_type.value); //계통계약구분

        	var center_na_bzplc = this.gfn_nullToEmpty(this.div_search.div_combo.cbo_nacode.value); //중앙본부 농협사업장
        	var na_bzplc = this.gfn_nullToEmpty(this.div_search.div_edt.edt_nacode00.value); //농협사업장

        	var na_team = this.gfn_nullToEmpty(this.div_search.div_edt.edt_na_team.value); //농협사업장팀

        	var receipt_type = this.gfn_nullToEmpty(this.div_search.rdo_receipt_type.value); //접수여부
        	var voucher_type = this.gfn_nullToEmpty(this.div_search.rdo_voucher_type.value); //증빙서 서류 구분
        	
        	var trpl_rlno = this.gfn_nullToEmpty(this.ds_tax_slam_m.getColumn(this.ds_tax_slam_m.rowposition, "TRPL_RLNO")); // 거래처실명번호

        	//var na_bzplc = this.gfn_nullToEmpty(this.ds_tax_slam_m.getColumn(this.ds_tax_slam_m.rowposition, "NA_BZPLC"));	//경제통합사업장코드
            //var byng_ym = this.gfn_nullToEmpty(this.ds_tax_slam_m.getColumn(this.ds_tax_slam_m.rowposition, "BYNG_YM")); //매입년월
            //var txbz_dfn_dt = this.gfn_nullToEmpty(this.ds_tax_slam_m.getColumn(this.ds_tax_slam_m.rowposition, "TXBZ_DFN_DT")); //세무확정일자
            //var txbz_tot_rg_sqno = this.gfn_nullToEmpty(this.ds_tax_slam_m.getColumn(this.ds_tax_slam_m.rowposition, "TXBZ_TOT_RG_SQNO")); //세무집계등록일련번호

        	var param = " search_date_type="+search_date_type+
        			" from_date="+from_date+
        			" to_date="+to_date+
        			" total_type="+total_type+
        			" rots_ctr_dsc="+rots_ctr_dsc+
        			" center_na_bzplc="+center_na_bzplc+
        			" na_bzplc="+na_bzplc+
        			" na_team="+na_team+
        			" receipt_type="+receipt_type+
        			" voucher_type="+voucher_type+
        			" trpl_rlno="+trpl_rlno+
        			" TRPL_C=" + trplC;

        	//param = "na_bzplc="+na_bzplc+
        	//		" byng_ym="+byng_ym+
        	//		" txbz_dfn_dt="+txbz_dfn_dt+
        	//		" txbz_tot_rg_sqno="+txbz_tot_rg_sqno;

        	var sSvcID        = "retrieveSlamDetailList";//통신아이디
        	var sURL          = "svc::rest/tax/retrieveSlamDetailList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_tax_slam_d=ds_taxSlamD";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets , sOutDatasets , sArgument , sCallbackFunc , "S");
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

        	if (typeof params == "boolean") {
        		if (!this.searPopValue(param)) {return};
        	}

        	//수요처
        	var oArg = {autoPop:param};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("POPUP_SRC_RVOPL_TRPL", "POPUP::POPUP_SRC_RVOPL_TRPL.xfdl", oArg, sOption, sPopupCallBack);
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	if (strId == 'POPUP_SRC_RVOPL_TRPL' && strVal != null) {
        		//농협사업장
        		var strValNo = strVal.split(',');
        		this.div_search.div_edt.edt_nacode00.set_value(strValNo[0]); //수요처코드
        		this.div_search.div_edt.edt_nacode01.set_value(strValNo[1]); //수요처명
        		this.div_search.div_edt.edt_na_team.set_value(strValNo[2]); //수요처팀명
        	}
        }

        /* 엑셀버튼 클릭시*/
        this.btn_excel_onclick = function(obj,e)
        {
        	if (this.fn_validationCheck()) {
        		//권한사업장 코드
        		var trplC = this.getTrplCode();

        		var search_date_type = this.gfn_nullToEmpty(this.div_search.cbo_date.value); //일자구분(일/월)

        		if (search_date_type == 1) {
        			var from_date = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        			var to_date = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일
        		} else {
        			var from_date = this.gfn_nullToEmpty(this.gfn_firstDate(this.div_search.cal_search_month._getValue())); //조회시작일
        			var to_date = this.gfn_nullToEmpty(this.gfn_lastDate(this.div_search.cal_search_month._getValue())); //조회종료일
        		}

        		var total_type = this.gfn_nullToEmpty(this.div_search.cbo_total_type.value); //집계구분
        		var rots_ctr_dsc =this.gfn_nullToEmpty(this.div_search.cbo_contract_type.value); //계통계약구분

        		var center_na_bzplc = this.gfn_nullToEmpty(this.div_search.div_combo.cbo_nacode.value); //중앙본부 농협사업장
        		var na_bzplc = this.gfn_nullToEmpty(this.div_search.div_edt.edt_nacode00.value); //농협사업장

        		var na_team = this.gfn_nullToEmpty(this.div_search.div_edt.edt_na_team.value); //농협사업장팀

        		var receipt_type = this.gfn_nullToEmpty(this.div_search.rdo_receipt_type.value); //접수여부
        		var voucher_type = this.gfn_nullToEmpty(this.div_search.rdo_voucher_type.value); //증빙서 서류 구분

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
        				"&receipt_type="+receipt_type+
        				"&voucher_type="+voucher_type+
        				"&TRPL_C=" + trplC+
        				"&fileName=" + fileName;

        		param = encodeURI(encodeURI(param));

        		excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelSlamMaster?"+param, this);
        	}
        }

        /* 디테일 엑셀 다운로드*/
        this.div_list_Button01_onclick = function(obj,e)
        {
        	//권한사업장 코드
        	var trplC = this.getTrplCode();

        	var search_date_type = this.gfn_nullToEmpty(this.div_search.cbo_date.value); //일자구분(일/월)

        	if (search_date_type == 1) {
        		var from_date = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        		var to_date = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일
        	} else {
        		var from_date = this.gfn_nullToEmpty(this.gfn_firstDate(this.div_search.cal_search_month._getValue())); //조회시작일
        		var to_date = this.gfn_nullToEmpty(this.gfn_lastDate(this.div_search.cal_search_month._getValue())); //조회종료일
        	}

        	var total_type = this.gfn_nullToEmpty(this.div_search.cbo_total_type.value); //집계구분
        	var rots_ctr_dsc =this.gfn_nullToEmpty(this.div_search.cbo_contract_type.value); //계통계약구분

        	var center_na_bzplc = this.gfn_nullToEmpty(this.div_search.div_combo.cbo_nacode.value); //중앙본부 농협사업장
        	var na_bzplc = this.gfn_nullToEmpty(this.div_search.div_edt.edt_nacode00.value); //농협사업장

        	var na_team = this.gfn_nullToEmpty(this.div_search.div_edt.edt_na_team.value); //농협사업장팀

        	var receipt_type = this.gfn_nullToEmpty(this.div_search.rdo_receipt_type.value); //접수여부
        	var voucher_type = this.gfn_nullToEmpty(this.div_search.rdo_voucher_type.value); //증빙서 서류 구분
        	
        	var trpl_rlno = this.gfn_nullToEmpty(this.ds_tax_slam_m.getColumn(this.ds_tax_slam_m.rowposition, "TRPL_RLNO")); // 거래처실명번호

        	var title = this.parent.sNm;
        	title = title.replace(/ /gi, '');
        	var fileName = title + "_디테일" + this.getDate() + ".xls";

        	var param = "search_date_type="+search_date_type+
        			"&from_date="+from_date+
        			"&to_date="+to_date+
        			"&total_type="+total_type+
        			"&rots_ctr_dsc="+rots_ctr_dsc+
        			"&center_na_bzplc="+center_na_bzplc+
        			"&na_bzplc="+na_bzplc+
        			"&na_team="+na_team+
        			"&receipt_type="+receipt_type+
        			"&voucher_type="+voucher_type+
        			"&trpl_rlno="+trpl_rlno+
        			"&TRPL_C=" + trplC+
        			"&fileName=" + fileName;

        	param = encodeURI(encodeURI(param));

        	excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelSlamDetail?"+param, this);
        }

        this.div_search_div_edt_edt_nacode00_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.div_search_div_edt_btn_popup_onclick(true);
        	}
        }

        this.div_search_div_edt_edt_nacode01_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.div_search_div_edt_btn_popup_onclick(true);
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.div_search.cbo_contract_type.addEventHandler("onitemchanged", this.div_search_cbo_contract_type_onitemchanged, this);
            this.div_search.cbo_date.addEventHandler("onitemchanged", this.div_search_cbo_date_onitemchanged, this);
            this.div_search.div_edt.edt_nacode00.addEventHandler("onkeydown", this.div_search_div_edt_edt_nacode00_onkeydown, this);
            this.div_search.div_edt.edt_nacode01.addEventHandler("onkeydown", this.div_search_div_edt_edt_nacode01_onkeydown, this);
            this.div_search.div_edt.btn_popup.addEventHandler("onclick", this.div_search_div_edt_btn_popup_onclick, this);
            this.div_list.btn_divResize.addEventHandler("onclick", this.div_list_btn_divResize_onclick, this);
            this.div_list.Button01.addEventHandler("onclick", this.div_list_Button01_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1220.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
