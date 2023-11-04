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
                this.set_name("VAN_DS_SC_1240");
                this.set_titletext("사후장려금 실적");
                this._setFormPosition(0,0,803,1032);
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
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"string\" size=\"13\"/><Column id=\"name\" type=\"string\" size=\"13\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"name\">거래일자</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"name\">지급예정일자</Col></Row></Rows>");
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

            obj = new Dataset("ds_can_type", this);
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

            obj = new Dataset("ds_paymentAffSsdyM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RN\" type=\"string\" size=\"8\"/><Column id=\"PHD_SLP_DT\" type=\"string\" size=\"32\"/><Column id=\"SLP_SQNO\" type=\"bigdecimal\" size=\"8\"/><Column id=\"PHD_NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"NA_TR_DSC\" type=\"string\" size=\"32\"/><Column id=\"NA_BLB_DFC_DSC\" type=\"string\" size=\"32\"/><Column id=\"TR_DT\" type=\"string\" size=\"32\"/><Column id=\"NA_TEAM_C\" type=\"string\" size=\"32\"/><Column id=\"SLPL_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"SLPL_NA_TEAM_C\" type=\"string\" size=\"32\"/><Column id=\"BUYPL_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"BUYPL_NA_TEAM_C\" type=\"string\" size=\"32\"/><Column id=\"NA_ADJPL_C\" type=\"string\" size=\"32\"/><Column id=\"ADJPL_NA_TEAM_C\" type=\"string\" size=\"32\"/><Column id=\"PY_PLA_DT\" type=\"string\" size=\"32\"/><Column id=\"NA_CRC_CAN_DSC\" type=\"string\" size=\"32\"/><Column id=\"SPY_QT\" type=\"float\" size=\"8\"/><Column id=\"SPY_AM\" type=\"float\" size=\"8\"/><Column id=\"VAT\" type=\"float\" size=\"8\"/><Column id=\"AFF_SSDY\" type=\"float\" size=\"8\"/><Column id=\"PHD_AFF_FEERT\" type=\"float\" size=\"8\"/><Column id=\"PHD_SEL_AM\" type=\"float\" size=\"8\"/><Column id=\"CNR_DS_AM\" type=\"float\" size=\"8\"/><Column id=\"AFF_SSDY_SUM\" type=\"float\" size=\"8\"/><Column id=\"PHD_NA_BZPLC_NM\" type=\"string\" size=\"32\"/><Column id=\"NA_TR_DSC_NM\" type=\"string\" size=\"32\"/><Column id=\"SLPL_NA_TRPL_C_NM\" type=\"string\" size=\"32\"/><Column id=\"BUYPL_NA_TRPL_C_NM\" type=\"string\" size=\"32\"/><Column id=\"BUYPL_NA_TEAM_C_NM\" type=\"string\" size=\"32\"/><Column id=\"NA_ADJPL_C_NM\" type=\"string\" size=\"32\"/><Column id=\"NA_CRC_CAN_DSC_NM\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_paymentAffSsdyD", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PHD_NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"PHD_SLP_DT\" type=\"string\" size=\"32\"/><Column id=\"NA_TR_DSC\" type=\"string\" size=\"32\"/><Column id=\"NA_SLPNO\" type=\"string\" size=\"32\"/><Column id=\"NA_BLB_DFC_DSC\" type=\"string\" size=\"32\"/><Column id=\"SLP_SQNO\" type=\"bigdecimal\" size=\"8\"/><Column id=\"TR_DT\" type=\"string\" size=\"32\"/><Column id=\"NA_TEAM_C\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_C\" type=\"string\" size=\"32\"/><Column id=\"WRS_SBJC\" type=\"string\" size=\"32\"/><Column id=\"NA_LLED_C\" type=\"string\" size=\"32\"/><Column id=\"NA_MLED_C\" type=\"string\" size=\"32\"/><Column id=\"SLPL_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"SLPL_NA_TEAM_C\" type=\"string\" size=\"32\"/><Column id=\"BUYPL_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"BUYPL_NA_TEAM_C\" type=\"string\" size=\"32\"/><Column id=\"NA_ADJPL_C\" type=\"string\" size=\"32\"/><Column id=\"ADJPL_NA_TEAM_C\" type=\"string\" size=\"32\"/><Column id=\"NAAC_DSC\" type=\"string\" size=\"32\"/><Column id=\"PY_PLA_DT\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_LCLC\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_MCLC\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_SCLC\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_DTCF_C\" type=\"string\" size=\"32\"/><Column id=\"NA_CRC_CAN_DSC\" type=\"string\" size=\"32\"/><Column id=\"OSLIP_DT\" type=\"string\" size=\"32\"/><Column id=\"OGN_NA_SLPNO\" type=\"string\" size=\"32\"/><Column id=\"SPY_QT\" type=\"float\" size=\"8\"/><Column id=\"SPY_AM\" type=\"float\" size=\"8\"/><Column id=\"VAT\" type=\"float\" size=\"8\"/><Column id=\"AFF_SSDY\" type=\"float\" size=\"8\"/><Column id=\"PHD_AFF_FEERT\" type=\"float\" size=\"8\"/><Column id=\"RMK_CNTN\" type=\"string\" size=\"32\"/><Column id=\"PHD_SEL_AM\" type=\"float\" size=\"8\"/><Column id=\"TMS_YN\" type=\"string\" size=\"32\"/><Column id=\"LSCHG_DTM\" type=\"date\" size=\"6\"/><Column id=\"LS_CMENO\" type=\"string\" size=\"32\"/><Column id=\"CNR_DS_AM\" type=\"float\" size=\"8\"/><Column id=\"NA_DVY_PLASH_SLPNO\" type=\"string\" size=\"32\"/><Column id=\"PHD_NA_BZPLC_NM\" type=\"string\" size=\"32\"/><Column id=\"NA_TR_DSC_NM\" type=\"string\" size=\"32\"/><Column id=\"SLPL_NA_TRPL_C_NM\" type=\"string\" size=\"32\"/><Column id=\"BUYPL_NA_TRPL_C_NM\" type=\"string\" size=\"32\"/><Column id=\"BUYPL_NA_TEAM_C_NM\" type=\"string\" size=\"32\"/><Column id=\"NA_ADJPL_C_NM\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_C_NM\" type=\"string\" size=\"32\"/></ColumnInfo>");
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

            obj = new Dataset("ds_paymentAffSsdySum", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RN\" type=\"string\" size=\"8\"/><Column id=\"PHD_SLP_DT\" type=\"string\" size=\"32\"/><Column id=\"SLP_SQNO\" type=\"bigdecimal\" size=\"8\"/><Column id=\"PHD_NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"NA_TR_DSC\" type=\"string\" size=\"32\"/><Column id=\"NA_BLB_DFC_DSC\" type=\"string\" size=\"32\"/><Column id=\"TR_DT\" type=\"string\" size=\"32\"/><Column id=\"NA_TEAM_C\" type=\"string\" size=\"32\"/><Column id=\"SLPL_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"SLPL_NA_TEAM_C\" type=\"string\" size=\"32\"/><Column id=\"BUYPL_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"BUYPL_NA_TEAM_C\" type=\"string\" size=\"32\"/><Column id=\"NA_ADJPL_C\" type=\"string\" size=\"32\"/><Column id=\"ADJPL_NA_TEAM_C\" type=\"string\" size=\"32\"/><Column id=\"PY_PLA_DT\" type=\"string\" size=\"32\"/><Column id=\"NA_CRC_CAN_DSC\" type=\"string\" size=\"32\"/><Column id=\"SPY_QT\" type=\"float\" size=\"8\"/><Column id=\"SPY_AM\" type=\"float\" size=\"8\"/><Column id=\"VAT\" type=\"float\" size=\"8\"/><Column id=\"AFF_SSDY\" type=\"float\" size=\"8\"/><Column id=\"PHD_AFF_FEERT\" type=\"float\" size=\"8\"/><Column id=\"PHD_SEL_AM\" type=\"float\" size=\"8\"/><Column id=\"CNR_DS_AM\" type=\"float\" size=\"8\"/><Column id=\"AFF_SSDY_SUM\" type=\"float\" size=\"8\"/><Column id=\"PHD_NA_BZPLC_NM\" type=\"string\" size=\"32\"/><Column id=\"NA_TR_DSC_NM\" type=\"string\" size=\"32\"/><Column id=\"SLPL_NA_TRPL_C_NM\" type=\"string\" size=\"32\"/><Column id=\"BUYPL_NA_TRPL_C_NM\" type=\"string\" size=\"32\"/><Column id=\"BUYPL_NA_TEAM_C_NM\" type=\"string\" size=\"32\"/><Column id=\"NA_ADJPL_C_NM\" type=\"string\" size=\"32\"/><Column id=\"NA_CRC_CAN_DSC_NM\" type=\"string\" size=\"32\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"SPY_QT\" type=\"string\" size=\"32\"/><Column id=\"SPY_AM\" type=\"string\" size=\"32\"/><Column id=\"VAT\" type=\"string\" size=\"32\"/><Column id=\"AFF_SSDY\" type=\"string\" size=\"32\"/><Column id=\"PHD_SEL_AM\" type=\"string\" size=\"32\"/><Column id=\"AFF_SSDY_SUM\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_total_sum", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SPY_QT\" type=\"string\" size=\"32\"/><Column id=\"SPY_AM\" type=\"string\" size=\"32\"/><Column id=\"VAT\" type=\"string\" size=\"32\"/><Column id=\"AFF_SSDY\" type=\"string\" size=\"32\"/><Column id=\"PHD_SEL_AM\" type=\"string\" size=\"32\"/><Column id=\"AFF_SSDY_SUM\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sum_D", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SPY_QT\" type=\"string\" size=\"32\"/><Column id=\"SPY_AM\" type=\"string\" size=\"32\"/><Column id=\"VAT\" type=\"string\" size=\"32\"/><Column id=\"AFF_SSDY\" type=\"string\" size=\"32\"/><Column id=\"PHD_SEL_AM\" type=\"string\" size=\"32\"/><Column id=\"AFF_SSDY_SUM\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "282", null, this);
            obj.set_taborder("23");
            obj.set_text("Div00");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "36", "408", null, this);
            obj.set_taborder("22");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "69", "14", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "36", "100", "21", null, null, this.div_search);
            obj.set_taborder("61");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "15", "10", "91", "21", null, null, this.div_search);
            obj.set_taborder("62");
            obj.set_text("사업장");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "410", "-2", null, "69", "536", null, this.div_search);
            obj.set_taborder("63");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "498", "-1", null, "69", "459", null, this.div_search);
            obj.set_taborder("64");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "480", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("72");
            obj.set_text("거래구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_trade_type", "absolute", "583", "10", "131", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_trade_type_innerdataset = new Dataset("cbo_trade_type_innerdataset", this.div_search.cbo_trade_type);
            cbo_trade_type_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">- 전체 -</Col></Row><Row><Col id=\"codecolumn\">OB</Col><Col id=\"datacolumn\">출고</Col></Row><Row><Col id=\"codecolumn\">OS</Col><Col id=\"datacolumn\">매출</Col></Row></Rows>");
            obj.set_innerdataset(cbo_trade_type_innerdataset);
            obj.set_taborder("73");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_text("전체");
            obj.set_index("0");
            obj = new Static("Static02", "absolute", "480", "36", "103", "21", null, null, this.div_search);
            obj.set_taborder("74");
            obj.set_text("정정취소구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_can_type", "absolute", "583", "36", "131", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("75");
            obj.set_innerdataset("@ds_can_type");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_codecolumn("SIMP_C");
            obj = new Combo("cbo_date", "absolute", "106", "36", "131", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("76");
            obj.set_innerdataset("ds_date");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_index("-1");
            obj = new Calendar("cal_from", "absolute", "240", "36", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("77");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static131", "absolute", "340", "36", "10", "21", null, null, this.div_search);
            obj.set_taborder("78");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_to", "absolute", "350", "36", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("79");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Combo("cbo_nacode", "absolute", "106", "10", "344", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("80");
            obj.set_innerdataset("ds_NABizPlace");
            obj.set_codecolumn("NA_BZPLC");
            obj.set_datacolumn("SHRT_BZPLNM");
            obj.set_displayrowcount("20");
            obj.set_index("-1");

            obj = new Static("Static09", "absolute", "1", "30", null, "69", "977", null, this);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "319", "30", null, "10", "594", null, this);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "97", null, null, "15", "50", this);
            obj.set_taborder("1");
            obj.set_text("Div02");
            obj.set_scrollbars("autoboth");
            this.addChild(obj.name, obj);
            obj = new Button("btn_divResize", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("36");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "653", "37", null, "5", "0", null, this.div_list);
            obj.set_taborder("38");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_detail", "absolute", "1", "411", null, "468", "0", null, this.div_list);
            obj.set_taborder("40");
            obj.set_binddataset("ds_paymentAffSsdyD");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"145\"/><Column size=\"140\"/><Column size=\"136\"/><Column size=\"140\"/><Column size=\"139\"/><Column size=\"145\"/><Column size=\"100\"/><Column size=\"145\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"145\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"145\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"145\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"79\"/><Column size=\"107\"/><Column size=\"155\"/><Column size=\"115\"/><Column size=\"68\"/><Column size=\"112\"/><Column size=\"119\"/><Column size=\"98\"/><Column size=\"110\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"28\"/><Row size=\"28\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"사업장코드\"/><Cell col=\"2\" text=\"물류전표일자\"/><Cell col=\"3\" text=\"거래구분코드\"/><Cell col=\"4\" text=\"전표번호\"/><Cell col=\"5\" text=\"흑자적자구분코드\"/><Cell col=\"6\" text=\"전표&#13;&#10;일련번호\"/><Cell col=\"7\" text=\"거래일자\"/><Cell col=\"8\" text=\"팀코드\"/><Cell col=\"9\" text=\"상품코드\"/><Cell col=\"10\" text=\"상품과목코드\"/><Cell col=\"11\" text=\"대원장코드\"/><Cell col=\"12\" text=\"중원장코드\"/><Cell col=\"13\" text=\"매출처&#13;&#10;거래처코드\"/><Cell col=\"14\" text=\"매출처&#13;&#10;팀코드\"/><Cell col=\"15\" text=\"매입처&#13;&#10;거래처코드\"/><Cell col=\"16\" text=\"매입처&#13;&#10;팀코드\"/><Cell col=\"17\" text=\"정산처코드\"/><Cell col=\"18\" text=\"정산처&#13;&#10;팀코드\"/><Cell col=\"19\" text=\"중앙회조합&#13;&#10;구분코드\"/><Cell col=\"20\" text=\"지급예정일자\"/><Cell col=\"21\" text=\"상품대분류코드\"/><Cell col=\"22\" text=\"상품중분류코드\"/><Cell col=\"23\" text=\"상품소분류코드\"/><Cell col=\"24\" text=\"상품세분류코드\"/><Cell col=\"25\" text=\"정정취소구분코드\"/><Cell col=\"26\" text=\"원전표일자\"/><Cell col=\"27\" text=\"원전표번호\"/><Cell col=\"28\" text=\"공급수량\"/><Cell col=\"29\" text=\"공급금액\"/><Cell col=\"30\" text=\"부가세\"/><Cell col=\"31\" text=\"사후장려금\"/><Cell col=\"32\" text=\"물류&#13;&#10;사후수수료율\"/><Cell col=\"33\" text=\"비고내용\"/><Cell col=\"34\" text=\"물류판매금액\"/><Cell col=\"35\" text=\"전송여부\"/><Cell col=\"36\" text=\"최종변경일시\"/><Cell col=\"37\" text=\"최종변경자&#13;&#10;개인번호\"/><Cell col=\"38\" text=\"검수구분금액\"/><Cell col=\"39\" text=\"배송예정서번호\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:PHD_NA_BZPLC_NM\"/><Cell col=\"2\" displaytype=\"date\" text=\"bind:PHD_SLP_DT\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:NA_TR_DSC_NM\"/><Cell col=\"4\" text=\"bind:NA_SLPNO\"/><Cell col=\"5\" text=\"bind:NA_BLB_DFC_DSC\"/><Cell col=\"6\" text=\"bind:SLP_SQNO\"/><Cell col=\"7\" displaytype=\"date\" text=\"bind:TR_DT\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" text=\"bind:NA_TEAM_C\"/><Cell col=\"9\" style=\"align:left;\" text=\"bind:NA_WRS_C_NM\"/><Cell col=\"10\" text=\"bind:WRS_SBJC\"/><Cell col=\"11\" text=\"bind:NA_LLED_C\"/><Cell col=\"12\" text=\"bind:NA_MLED_C\"/><Cell col=\"13\" style=\"align:left;\" text=\"bind:SLPL_NA_TRPL_C_NM\"/><Cell col=\"14\" text=\"bind:SLPL_NA_TEAM_C\"/><Cell col=\"15\" style=\"align:left;\" text=\"bind:BUYPL_NA_TRPL_C_NM\"/><Cell col=\"16\" style=\"align:left;\" text=\"bind:BUYPL_NA_TEAM_C_NM\"/><Cell col=\"17\" style=\"align:left;\" text=\"bind:NA_ADJPL_C_NM\"/><Cell col=\"18\" text=\"bind:ADJPL_NA_TEAM_C\"/><Cell col=\"19\" text=\"bind:NAAC_DSC\"/><Cell col=\"20\" displaytype=\"date\" text=\"bind:PY_PLA_DT\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"21\" text=\"bind:NA_WRS_LCLC\"/><Cell col=\"22\" text=\"bind:NA_WRS_MCLC\"/><Cell col=\"23\" text=\"bind:NA_WRS_SCLC\"/><Cell col=\"24\" text=\"bind:NA_WRS_DTCF_C\"/><Cell col=\"25\" text=\"bind:NA_CRC_CAN_DSC\"/><Cell col=\"26\" text=\"bind:OSLIP_DT\"/><Cell col=\"27\" text=\"bind:OGN_NA_SLPNO\"/><Cell col=\"28\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SPY_QT\" mask=\"#,###.00\"/><Cell col=\"29\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SPY_AM\" mask=\"#,###.00\"/><Cell col=\"30\" displaytype=\"number\" style=\"align:right;\" text=\"bind:VAT\" mask=\"#,###.00\"/><Cell col=\"31\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AFF_SSDY\" mask=\"#,###.00\"/><Cell col=\"32\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PHD_AFF_FEERT\" mask=\"#,###.#0\"/><Cell col=\"33\" style=\"align:left;\" text=\"bind:RMK_CNTN\"/><Cell col=\"34\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PHD_SEL_AM\" mask=\"#,###.00\"/><Cell col=\"35\" text=\"bind:TMS_YN\"/><Cell col=\"36\" displaytype=\"date\" text=\"bind:LSCHG_DTM\" mask=\"yyyy-MM-dd HH:mm:ss\" calendardisplaynulltype=\"none\"/><Cell col=\"37\" text=\"bind:LS_CMENO\"/><Cell col=\"38\" style=\"align:right;\" text=\"bind:CNR_DS_AM\"/><Cell col=\"39\" text=\"bind:NA_DVY_PLASH_SLPNO\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/><Cell col=\"27\"/><Cell col=\"28\" displaytype=\"number\" mask=\"###,##0\"/><Cell col=\"29\" displaytype=\"number\" mask=\"###,##0\"/><Cell col=\"30\" displaytype=\"number\" mask=\"###,##0\"/><Cell col=\"31\" displaytype=\"number\" mask=\"###,##0\"/><Cell col=\"32\"/><Cell col=\"33\"/><Cell col=\"34\" displaytype=\"number\" mask=\"###,##0\"/><Cell col=\"35\"/><Cell col=\"36\"/><Cell col=\"37\"/><Cell col=\"38\"/><Cell col=\"39\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_master", "absolute", "306", "42", null, "300", "0", null, this.div_list);
            obj.set_taborder("45");
            obj.set_binddataset("ds_paymentAffSsdyM");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"136\"/><Column size=\"80\"/><Column size=\"139\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"28\"/><Row size=\"28\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"사업장코드\"/><Cell col=\"2\" text=\"거래구분코드\"/><Cell col=\"3\" text=\"흑자적자구분코드\"/><Cell col=\"4\" text=\"거래일자\"/><Cell col=\"5\" text=\"팀코드\"/><Cell col=\"6\" text=\"매출처&#13;&#10; 거래처코드\"/><Cell col=\"7\" text=\"매출처&#13;&#10; 팀코드\"/><Cell col=\"8\" text=\"매입처&#13;&#10; 거래처코드\"/><Cell col=\"9\" text=\"매입처&#13;&#10; 팀코드\"/><Cell col=\"10\" text=\"정산처코드\"/><Cell col=\"11\" text=\"정산처&#13;&#10; 팀코드\"/><Cell col=\"12\" text=\"지급예정일자\"/><Cell col=\"13\" text=\"정정취소구분코드\"/><Cell col=\"14\" text=\"공급수량\"/><Cell col=\"15\" text=\"공급금액\"/><Cell col=\"16\" text=\"부가세\"/><Cell col=\"17\" text=\"사후장려금&#13;&#10; (A)\"/><Cell col=\"18\" text=\"물류(평균)&#13;&#10; 사후수수료율\"/><Cell col=\"19\" text=\"물류&#13;&#10; 판매금액\"/><Cell col=\"20\" text=\"검수구분금액&#13;&#10; (B)\"/><Cell col=\"21\" text=\"사후장려금(계산)&#13;&#10; (C=A*B)\"/></Band><Band id=\"body\"><Cell text=\"bind:RN\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:PHD_NA_BZPLC_NM\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:NA_TR_DSC_NM\"/><Cell col=\"3\" text=\"bind:NA_BLB_DFC_DSC\"/><Cell col=\"4\" displaytype=\"date\" text=\"bind:TR_DT\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" text=\"bind:NA_TEAM_C\"/><Cell col=\"6\" style=\"align:left;\" text=\"bind:SLPL_NA_TRPL_C_NM\"/><Cell col=\"7\" text=\"bind:SLPL_NA_TEAM_C\"/><Cell col=\"8\" style=\"align:left;\" text=\"bind:BUYPL_NA_TRPL_C_NM\"/><Cell col=\"9\" text=\"bind:BUYPL_NA_TEAM_C_NM\"/><Cell col=\"10\" style=\"align:left;\" text=\"bind:NA_ADJPL_C_NM\"/><Cell col=\"11\" text=\"bind:ADJPL_NA_TEAM_C\"/><Cell col=\"12\" displaytype=\"date\" text=\"bind:PY_PLA_DT\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"13\" style=\"align:left;\" text=\"bind:NA_CRC_CAN_DSC_NM\"/><Cell col=\"14\" style=\"align:right;\" text=\"bind:SPY_QT\"/><Cell col=\"15\" style=\"align:right;\" text=\"bind:SPY_AM\"/><Cell col=\"16\" style=\"align:right;\" text=\"bind:VAT\"/><Cell col=\"17\" style=\"align:right;\" text=\"bind:AFF_SSDY\"/><Cell col=\"18\" style=\"align:right;\" text=\"bind:PHD_AFF_FEERT\"/><Cell col=\"19\" style=\"align:right;\" text=\"bind:PHD_SEL_AM\"/><Cell col=\"20\" style=\"align:right;\" text=\"bind:CNR_DS_AM\"/><Cell col=\"21\" style=\"align:right;\" text=\"bind:AFF_SSDY_SUM\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\" displaytype=\"number\" mask=\"###,##0\"/><Cell col=\"15\" displaytype=\"number\" mask=\"###,##0\"/><Cell col=\"16\" displaytype=\"number\" mask=\"###,##0\"/><Cell col=\"17\" displaytype=\"number\" mask=\"###,##0\"/><Cell col=\"18\"/><Cell col=\"19\" displaytype=\"number\" mask=\"###,##0\"/><Cell col=\"20\"/><Cell col=\"21\" displaytype=\"number\" expr=\"expr:dataset.getSum('AFF_SSDY_SUM')\" mask=\"###,##0\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "923", "1", null, "15", "0", null, this.div_list);
            obj.set_taborder("47");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "653", "1", null, "15", "-2", null, this.div_list);
            obj.set_taborder("48");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_gradM_excel", "absolute", null, "16", "41", "21", "0", null, this.div_list);
            obj.set_taborder("51");
            obj.set_text("엑셀");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_gradD_excel", "absolute", null, "384", "41", "21", "0", null, this.div_list);
            obj.set_taborder("55");
            obj.set_text("엑셀");
            this.div_list.addChild(obj.name, obj);
            obj = new WebBrowser("web_downExcelM", "absolute", "600", "19", "44", "12", null, null, this.div_list);
            obj.set_taborder("56");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new WebBrowser("web_downExcelD", "absolute", "531", "386", "57", "21", null, null, this.div_list);
            obj.set_taborder("57");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_page", "absolute", "45.05%", "342", "338", "44", null, null, this.div_list);
            obj.set_taborder("58");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_masterSum", "absolute", "0", "42", "298", "300", null, null, this.div_list);
            obj.set_taborder("59");
            obj.set_binddataset("ds_paymentAffSsdySum");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"136\"/><Column size=\"80\"/><Column size=\"139\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"28\"/><Row size=\"28\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"사업장코드\"/><Cell col=\"2\" text=\"거래구분코드\"/><Cell col=\"3\" text=\"흑자적자구분코드\"/><Cell col=\"4\" text=\"거래일자\"/><Cell col=\"5\" text=\"팀코드\"/><Cell col=\"6\" text=\"매출처&#13;&#10; 거래처코드\"/><Cell col=\"7\" text=\"매출처&#13;&#10; 팀코드\"/><Cell col=\"8\" text=\"매입처&#13;&#10; 거래처코드\"/><Cell col=\"9\" text=\"매입처&#13;&#10; 팀코드\"/><Cell col=\"10\" text=\"정산처코드\"/><Cell col=\"11\" text=\"정산처&#13;&#10; 팀코드\"/><Cell col=\"12\" text=\"지급예정일자\"/><Cell col=\"13\" text=\"정정취소구분코드\"/><Cell col=\"14\" text=\"공급수량\"/><Cell col=\"15\" text=\"공급금액\"/><Cell col=\"16\" text=\"부가세\"/><Cell col=\"17\" text=\"사후장려금&#13;&#10; (A)\"/><Cell col=\"18\" text=\"물류(평균)&#13;&#10; 사후수수료율\"/><Cell col=\"19\" text=\"물류&#13;&#10; 판매금액\"/><Cell col=\"20\" text=\"검수구분금액&#13;&#10; (B)\"/><Cell col=\"21\" text=\"사후장려금(계산)&#13;&#10; (C=A*B)\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PHD_NA_BZPLC_NM\"/><Cell col=\"2\" text=\"bind:NA_TR_DSC_NM\"/><Cell col=\"3\" text=\"bind:NA_BLB_DFC_DSC\"/><Cell col=\"4\" displaytype=\"date\" text=\"bind:TR_DT\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" text=\"bind:NA_TEAM_C\"/><Cell col=\"6\" text=\"bind:SLPL_NA_TRPL_C_NM\"/><Cell col=\"7\" text=\"bind:SLPL_NA_TEAM_C\"/><Cell col=\"8\" text=\"bind:BUYPL_NA_TRPL_C_NM\"/><Cell col=\"9\" text=\"bind:BUYPL_NA_TEAM_C\"/><Cell col=\"10\" text=\"bind:NA_ADJPL_C_NM\"/><Cell col=\"11\" text=\"bind:ADJPL_NA_TEAM_C\"/><Cell col=\"12\" text=\"bind:PY_PLA_DT\"/><Cell col=\"13\" text=\"bind:NA_CRC_CAN_DSC_NM\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SPY_QT\" mask=\"#,###.00\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SPY_AM\" mask=\"#,###.00\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right;\" text=\"bind:VAT\" mask=\"#,###.00\"/><Cell col=\"17\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AFF_SSDY\" mask=\"#,###.00\"/><Cell col=\"18\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PHD_AFF_FEERT\" mask=\"#,###.00\"/><Cell col=\"19\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PHD_SEL_AM\" mask=\"#,###.00\"/><Cell col=\"20\" style=\"align:right;\" text=\"bind:CNR_DS_AM\"/><Cell col=\"21\" style=\"align:right;\" text=\"bind:AFF_SSDY_SUM\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\" displaytype=\"number\" text=\"0\" mask=\"###,###\"/><Cell col=\"15\" displaytype=\"number\" text=\"0\" mask=\"###,###\"/><Cell col=\"16\" displaytype=\"number\" text=\"0\" mask=\"###,###\"/><Cell col=\"17\" displaytype=\"number\" text=\"0\" mask=\"###,###\"/><Cell col=\"18\"/><Cell col=\"19\" displaytype=\"number\" text=\"0\" mask=\"###,###\"/><Cell col=\"20\"/><Cell col=\"21\" displaytype=\"number\" text=\"0\" expr=\"expr:dataset.getSum('AFF_SSDY_SUM')\" mask=\"###,###\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "319", "113", null, "10", "594", null, this);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "319", "61", null, "5", "594", null, this);
            obj.set_taborder("11");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "788", "0", "15", "490", null, null, this);
            obj.set_taborder("12");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "732", "21", "56", "8", null, null, this);
            obj.set_taborder("13");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "80", "21", "157", null, this);
            obj.set_taborder("19");
            obj.set_text("엑셀(상세)");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search_sum", "absolute", null, "0", "80", "21", "75", null, this);
            obj.set_taborder("25");
            obj.set_text("조회(합계)");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelM", "absolute", null, "0", "41", "21", "239", null, this);
            obj.set_taborder("26");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", null, null, "40", "15", "5", this);
            obj.set_taborder("27");
            obj.set_text("사후장려금실적 화면 <b v='true'>기능문의</b>는 <u v='true'>하나로eSCM고객센터(02-1522-1211)</u>로, <b v='true'>금액문의</b>는 <u v='true'>담당 바이어</u>에게로 부탁드립니다.");
            obj.set_wordwrap("char");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 69, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_text("Div02");
            		p.set_scrollbars("autoboth");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 1032, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("사후장려금 실적");

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
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1240.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1240.xfdl", function() {
        //include "lib::comLib.xjs";

        /* form load */
        this.form_onload = function(obj,e)
        {		
        	this.gfn_setInitForm(obj,e);
        		
        	var param = [  
         		{code:"NA_CRC_CAN_DSC",   dsName:"ds_can_type",   selecttype:"A"}
            ];

        	this.gfn_setCommonCode(param);	
        }

        /* Form Init*/
        this.form_init = function(obj,e)
        {
        	//권한사업장 콤보박스 변경시 농협사업장 조회
        	//this.Div00.setFunctionName("fn_afterCall");
        }

        //권한사업장 콤보박스 변경시 농협사업장 조회
        this.fn_afterCall = function(sVal)
        {
        	this.fn_getNABizPlace(sVal);
        }

        //공통코드 데이터셋 onload후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        	trace("fn_commonAfterOnload");
        	
        	this.div_search.cbo_can_type.set_index(0);
        	this.div_search.cbo_date.set_index(0);
        	

        }

        /* 페이지 로딩후 실행부분 */
        this.fn_afterFormOnload = function()
        {	
        	
        	/*
        	var param = {
        		form: this,										//공통(필수)
        		m_grd: this.div_list.grd_masterSum,  				//마스터 그리드
        		m_afterFnc: this.grd_afterFncSum,					//마스터 그리드 클릭이벤트
        		d_grd: this.div_list.grd_master, 				//디테일 그리드
        		d_pageDiv: this.div_list.div_page,			    //디테일 페이지DIV
        		d_afterFnc: this.grd_afterFnc				//디테일 그리드 클릭이벤트
        	};
        	
        	param.d_pageDiv.addPageEvent(param);
        	*/
        	
        	//조회 합계 마스터 그리드클릭 이벤트 등록
        	this.div_list.grd_masterSum.addEventHandler("oncellclick", this.grd_afterFncSum, this);
        	//마스터 그리드클릭 이벤트 등록
        	this.div_list.grd_master.addEventHandler("oncellclick", this.grd_afterFnc, this);

        	//그리드 nodata
        	this.div_list.grd_masterSum.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	this.div_list.grd_detail.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	
        	this.div_search.cal_from.set_value(this.gfn_minusDate(this.gfn_today("yyyyMMdd"),7));	
        	this.div_search.cal_to.set_value(this.gfn_today("yyyyMMdd"));

        	this.fn_getNABizPlace(application.gv_glnCode);
        	
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
        	
        	/*
        	if(this.gfn_isNull(this.div_search.cbo_nacode.value)){
        		//농협사업장을 선택 하세요.
        		this.gfn_getMessage("alert", "validation.message.select.nacode");
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

        
        this.btn_click = function(){
        	this.fn_search(0);
        }

        this.grd_click = function(){
        	this.fn_search(1);
        }

        this.fn_search = function(searchType){
        	//this.ds_paymentAffSsdySum.clearData();
        	this.ds_paymentAffSsdyM.clearData();
        	this.ds_paymentAffSsdyD.clearData();
        	this.ds_sum.deleteAll();
        	this.ds_sum_D.deleteAll();
        	
        	//그리드 합계 초기화
        	this.div_list.grd_masterSum.setCellProperty("Summ",14,"text","0");								
        	this.div_list.grd_masterSum.setCellProperty("Summ",15,"text","0");
        	this.div_list.grd_masterSum.setCellProperty("Summ",16,"text","0");
        	this.div_list.grd_masterSum.setCellProperty("Summ",17,"text","0");
        	this.div_list.grd_masterSum.setCellProperty("Summ",19,"text","0");
        		
        	this.div_list.grd_detail.setCellProperty("Summ",28,"text","0");								
        	this.div_list.grd_detail.setCellProperty("Summ",29,"text","0");
        	this.div_list.grd_detail.setCellProperty("Summ",30,"text","0");
        	this.div_list.grd_detail.setCellProperty("Summ",31,"text","0");
        	this.div_list.grd_detail.setCellProperty("Summ",34,"text","0");
        	
        	var eSvcID = "";
        	
        	if(!this.fn_validationCheck()) return;	
        	
        	if(searchType == 0){
        	this.ds_paymentAffSsdySum.clearData();
        		
        	//권한사업장 코드
        	var trplC = this.getTrplCode();	
        	var search_date_type = this.gfn_nullToEmpty(this.div_search.cbo_date.value); //조회기간
        	var from_date = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        	var to_date = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일
        	var trade_type = this.gfn_nullToEmpty(this.div_search.cbo_trade_type.value); //거래구분
        	var can_type =this.gfn_nullToEmpty(this.div_search.cbo_can_type.value); //정정취소구분
        	var na_bzplc = this.gfn_nullToEmpty(this.div_search.cbo_nacode.value); //농협사업장
        	
        	eSvcID = "retrieveAffSsdyMasterList_btn";
        		
        	}
        	if(searchType == 1){	
        	var trplC = this.gfn_nullToEmpty(this.ds_paymentAffSsdySum.getColumn(this.ds_paymentAffSsdySum.rowposition,"SLPL_NA_TRPL_C"));  //거래처코드	
        	var search_date_type = "1"; //거래일자
        	var from_date = this.gfn_nullToEmpty(this.ds_paymentAffSsdySum.getColumn(this.ds_paymentAffSsdySum.rowposition,"TR_DT")); //조회시작일
        	var to_date = this.gfn_nullToEmpty(this.ds_paymentAffSsdySum.getColumn(this.ds_paymentAffSsdySum.rowposition,"TR_DT")); //조회종료일	
        	var trade_type = this.gfn_nullToEmpty(this.ds_paymentAffSsdySum.getColumn(this.ds_paymentAffSsdySum.rowposition,"NA_TR_DSC"));  //경제통합거래구분코드	
        	var can_type = this.gfn_nullToEmpty(this.ds_paymentAffSsdySum.getColumn(this.ds_paymentAffSsdySum.rowposition,"NA_CRC_CAN_DSC")); //정정취소구분	
        	var na_bzplc = this.gfn_nullToEmpty(this.ds_paymentAffSsdySum.getColumn(this.ds_paymentAffSsdySum.rowposition,"PHD_NA_BZPLC")); //농협사업장
        	
        	eSvcID = "retrieveAffSsdyMasterList_grd";
        	}
        		
        	var param = " search_date_type="+search_date_type+
        				" from_date="+from_date+
        				" to_date="+to_date+
        				" trade_type="+trade_type+		
        				" can_type="+can_type+
        				" na_bzplc="+na_bzplc+
        				" TRPL_C=" + trplC;
        				
        	trace("##MASTER##PARAM##->"+param);
        	
        	
        	var sSvcID        = eSvcID;//통신아이디
        	var sURL          = "svc::rest/payment/retrieveAffSsdyMasterList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "ds_pageVO=ds_pageVO";//보내는데이터셋
        	var sOutDatasets  = "ds_paymentAffSsdyM=ds_paymentAffSsdyM ds_pageVO=ds_pageVO";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	
        	
        }
        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", ErrorMsg);
        		return;
        	}else{
        	
        		if(svcID == "retrieveAffSsdyMasterList_btn"){			
        			if(this.ds_paymentAffSsdyM.rowcount > 0){
        				
        				
        				//trace("retrieveAffSsdyMasterList_btn---------->");
        				
        				var SPY_QT = 0;
        				var SPY_AM = 0;
        				var VAT = 0;
        				var AFF_SSDY = 0;
        				var PHD_SEL_AM = 0;	
        				
        				//trace(this.ds_paymentAffSsdyM.rowcount);
        			
        				for (var i=0; i < this.ds_paymentAffSsdyM.rowcount ;i++)			
        				{				
        					
        					if(this.ds_paymentAffSsdyM.getColumn(i,"NA_CRC_CAN_DSC") == 1){						
        						//정상
        						SPY_QT += this.ds_paymentAffSsdyM.getColumn(i,"SPY_QT");						
        						SPY_AM += this.ds_paymentAffSsdyM.getColumn(i,"SPY_AM");
        						VAT += this.ds_paymentAffSsdyM.getColumn(i,"VAT");
        						AFF_SSDY += this.ds_paymentAffSsdyM.getColumn(i,"AFF_SSDY");
        						PHD_SEL_AM += this.ds_paymentAffSsdyM.getColumn(i,"PHD_SEL_AM");						
        					
        					}else{						
        						//정정,취소
        						SPY_QT -= this.ds_paymentAffSsdyM.getColumn(i,"SPY_QT");
        						SPY_AM -= this.ds_paymentAffSsdyM.getColumn(i,"SPY_AM");
        						VAT -= this.ds_paymentAffSsdyM.getColumn(i,"VAT");
        						AFF_SSDY -= this.ds_paymentAffSsdyM.getColumn(i,"AFF_SSDY");
        						PHD_SEL_AM -= this.ds_paymentAffSsdyM.getColumn(i,"PHD_SEL_AM");						
        					}				
        				}
        				/*				
        				this.ds_sum.insertRow(0);
        				this.ds_sum.setColumn(0,"SPY_QT",SPY_QT);				
        				this.ds_sum.setColumn(0,"SPY_AM",SPY_AM);
        				this.ds_sum.setColumn(0,"VAT",VAT);
        				this.ds_sum.setColumn(0,"AFF_SSDY",AFF_SSDY);
        				this.ds_sum.setColumn(0,"PHD_SEL_AM",PHD_SEL_AM);
        				*/	
        				
        				this.div_list.grd_master.setCellProperty("Summ",14,"text",SPY_QT);
        				this.div_list.grd_master.setCellProperty("Summ",15,"text",SPY_AM);
        				this.div_list.grd_master.setCellProperty("Summ",16,"text",VAT);
        				this.div_list.grd_master.setCellProperty("Summ",17,"text",AFF_SSDY);
        				this.div_list.grd_master.setCellProperty("Summ",19,"text",PHD_SEL_AM);
        				
        				
        				/*
        				// 페이지 셋팅
        				var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        				var sPagesize = this.ds_pageVO.getColumn(0, "PAGE_SIZE");				

        				this.div_list.div_page.fn_pageSet(sTotal, sPagesize,"grd_master,div_page",lsNowPage);
        				*/
        			}else{	
        				/*
        				this.div_list.div_page.fn_pageSet(0, 0,"grd_master,div_page",lsNowPage);//페이징 설정
        				*/
        			}
        		}else if(svcID == "retrieveAffSsdyMasterList_grd"){			
        			if(this.ds_paymentAffSsdyM.rowcount > 0){								
        			
        				var SPY_QT = 0;
        				var SPY_AM = 0;
        				var VAT = 0;
        				var AFF_SSDY = 0;
        				var PHD_SEL_AM = 0;	

        							
        				for (var i=0; i < this.ds_paymentAffSsdyM.rowcount ;i++)			
        				{				
        					
        					if(this.ds_paymentAffSsdyM.getColumn(i,"NA_CRC_CAN_DSC") == 1){
        						//정상
        						SPY_QT += this.ds_paymentAffSsdyM.getColumn(i,"SPY_QT");						
        						SPY_AM += this.ds_paymentAffSsdyM.getColumn(i,"SPY_AM");
        						VAT += this.ds_paymentAffSsdyM.getColumn(i,"VAT");
        						AFF_SSDY += this.ds_paymentAffSsdyM.getColumn(i,"AFF_SSDY");
        						PHD_SEL_AM += this.ds_paymentAffSsdyM.getColumn(i,"PHD_SEL_AM");						
        					
        					}else{
        						//정정,취소
        						SPY_QT -= this.ds_paymentAffSsdyM.getColumn(i,"SPY_QT");
        						SPY_AM -= this.ds_paymentAffSsdyM.getColumn(i,"SPY_AM");
        						VAT -= this.ds_paymentAffSsdyM.getColumn(i,"VAT");
        						AFF_SSDY -= this.ds_paymentAffSsdyM.getColumn(i,"AFF_SSDY");
        						PHD_SEL_AM -= this.ds_paymentAffSsdyM.getColumn(i,"PHD_SEL_AM");						
        					}				
        				}
        				/*
        				this.ds_sum.insertRow(0);
        				this.ds_sum.setColumn(0,"SPY_QT",SPY_QT);				
        				this.ds_sum.setColumn(0,"SPY_AM",SPY_AM);
        				this.ds_sum.setColumn(0,"VAT",VAT);
        				this.ds_sum.setColumn(0,"AFF_SSDY",AFF_SSDY);
        				this.ds_sum.setColumn(0,"PHD_SEL_AM",PHD_SEL_AM);
        				*/
        				
        				this.div_list.grd_master.setCellProperty("Summ",14,"text",SPY_QT);								
        				this.div_list.grd_master.setCellProperty("Summ",15,"text",SPY_AM);
        				this.div_list.grd_master.setCellProperty("Summ",16,"text",VAT);
        				this.div_list.grd_master.setCellProperty("Summ",17,"text",AFF_SSDY);
        				this.div_list.grd_master.setCellProperty("Summ",19,"text",PHD_SEL_AM);
        				
        				/*
        				// 페이지 셋팅
        				var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        				var sPagesize = this.ds_pageVO.getColumn(0, "PAGE_SIZE");				

        				this.div_list.div_page.fn_pageSet(sTotal, sPagesize,"grd_master,div_page_sum",lsNowPage);
        				*/
        			}else{
        				/*
        				this.div_list.div_page.fn_pageSet(0, 0,"grd_master,div_page_sum",lsNowPage);//페이징 설정
        				*/
        			}
        		}else if(svcID == "retrieveAffSsdyDetailList") {
        			if(this.ds_paymentAffSsdyD.rowcount > 0){
        			
        					
        				var na_crc_can_dsc = this.gfn_nullToEmpty(this.ds_paymentAffSsdyM.getColumn(this.ds_paymentAffSsdyM.rowposition,"NA_CRC_CAN_DSC"));  //경제통합정정취소구분코드
        				//trace("na_crc_can_dsc-->"+na_crc_can_dsc);
        				
        				var SPY_QT = 0;
        				var SPY_AM = 0;
        				var VAT = 0;
        				var AFF_SSDY = 0;
        				var PHD_SEL_AM = 0;	

        							
        				for (var i=0; i < this.ds_paymentAffSsdyD.rowcount ;i++)			
        				{				
        					
        					if(na_crc_can_dsc == 1){
        						//정상
        						SPY_QT += this.ds_paymentAffSsdyD.getColumn(i,"SPY_QT");						
        						SPY_AM += this.ds_paymentAffSsdyD.getColumn(i,"SPY_AM");
        						VAT += this.ds_paymentAffSsdyD.getColumn(i,"VAT");
        						AFF_SSDY += this.ds_paymentAffSsdyD.getColumn(i,"AFF_SSDY");
        						PHD_SEL_AM += this.ds_paymentAffSsdyD.getColumn(i,"PHD_SEL_AM");						
        					
        					}else{
        						//정정(2),취소(3)
        						SPY_QT -= this.ds_paymentAffSsdyD.getColumn(i,"SPY_QT");
        						SPY_AM -= this.ds_paymentAffSsdyD.getColumn(i,"SPY_AM");
        						VAT -= this.ds_paymentAffSsdyD.getColumn(i,"VAT");
        						AFF_SSDY -= this.ds_paymentAffSsdyD.getColumn(i,"AFF_SSDY");
        						PHD_SEL_AM -= this.ds_paymentAffSsdyD.getColumn(i,"PHD_SEL_AM");						
        					}				
        				}
        				
        				/*
        				this.ds_sum_D.insertRow(0);
        				this.ds_sum_D.setColumn(0,"SPY_QT",SPY_QT);				
        				this.ds_sum_D.setColumn(0,"SPY_AM",SPY_AM);
        				this.ds_sum_D.setColumn(0,"VAT",VAT);
        				this.ds_sum_D.setColumn(0,"AFF_SSDY",AFF_SSDY);
        				this.ds_sum_D.setColumn(0,"PHD_SEL_AM",PHD_SEL_AM);
        				*/
        				
        				this.div_list.grd_detail.setCellProperty("Summ",28,"text",SPY_QT);								
        				this.div_list.grd_detail.setCellProperty("Summ",29,"text",SPY_AM);
        				this.div_list.grd_detail.setCellProperty("Summ",30,"text",VAT);
        				this.div_list.grd_detail.setCellProperty("Summ",31,"text",AFF_SSDY);
        				this.div_list.grd_detail.setCellProperty("Summ",34,"text",PHD_SEL_AM);
        				
        				//trace(this.ds_sum_D.saveXML());
        				
        			}
        		}else if(svcID == "getNABizPlace") {
        			
        			if(this.ds_NABizPlace.rowcount != 0){
        			
        				for (var i=0; i < this.ds_NABizPlace.rowcount ;i++)			
        				{					
        					this.ds_NABizPlace.setColumn(i,"SHRT_BZPLNM","["+this.ds_NABizPlace.getColumn(i,0)+"] "+this.ds_NABizPlace.getColumn(i,1));
        				}				
        				if (this.ds_NABizPlace.insertRow(0) != -1){
        					this.ds_NABizPlace.setColumn(0,"NA_BZPLC","");
        					this.ds_NABizPlace.setColumn(0,"SHRT_BZPLNM","- 전체 -");
        					};
        				this.div_search.cbo_nacode.set_index(0);				
        			}
        		}else if(svcID == "retrieveAffSsdySum") {		
        	
        			var SPY_QT = 0;
        			var SPY_AM = 0;
        			var VAT = 0;
        			var AFF_SSDY = 0;
        			var PHD_SEL_AM = 0;			
        			
        			if(this.ds_paymentAffSsdySum.rowcount > 0){			
        			
        				for (var i=0; i < this.ds_paymentAffSsdySum.rowcount ;i++)			
        				{				
        					
        					if(this.ds_paymentAffSsdySum.getColumn(i,"NA_CRC_CAN_DSC") == 1){
        						//정상
        						SPY_QT += this.ds_paymentAffSsdySum.getColumn(i,"SPY_QT");						
        						SPY_AM += this.ds_paymentAffSsdySum.getColumn(i,"SPY_AM");
        						VAT += this.ds_paymentAffSsdySum.getColumn(i,"VAT");
        						AFF_SSDY += this.ds_paymentAffSsdySum.getColumn(i,"AFF_SSDY");
        						PHD_SEL_AM += this.ds_paymentAffSsdySum.getColumn(i,"PHD_SEL_AM");						
        					
        					}else{
        						//정정-2,취소-3
        						SPY_QT -= this.ds_paymentAffSsdySum.getColumn(i,"SPY_QT");
        						SPY_AM -= this.ds_paymentAffSsdySum.getColumn(i,"SPY_AM");
        						VAT -= this.ds_paymentAffSsdySum.getColumn(i,"VAT");
        						AFF_SSDY -= this.ds_paymentAffSsdySum.getColumn(i,"AFF_SSDY");
        						PHD_SEL_AM -= this.ds_paymentAffSsdySum.getColumn(i,"PHD_SEL_AM");						
        					}				
        				}
        				
        				/*
        				this.ds_total_sum.insertRow(0);
        				this.ds_total_sum.setColumn(0,"SPY_QT",SPY_QT);				
        				this.ds_total_sum.setColumn(0,"SPY_AM",SPY_AM);
        				this.ds_total_sum.setColumn(0,"VAT",VAT);
        				this.ds_total_sum.setColumn(0,"AFF_SSDY",AFF_SSDY);
        				this.ds_total_sum.setColumn(0,"PHD_SEL_AM",PHD_SEL_AM);				
        				*/
        				//trace(this.ds_total_sum.saveXML());
        				
        				this.div_list.grd_masterSum.setCellProperty("Summ",14,"text",SPY_QT);								
        				this.div_list.grd_masterSum.setCellProperty("Summ",15,"text",SPY_AM);
        				this.div_list.grd_masterSum.setCellProperty("Summ",16,"text",VAT);
        				this.div_list.grd_masterSum.setCellProperty("Summ",17,"text",AFF_SSDY);
        				this.div_list.grd_masterSum.setCellProperty("Summ",19,"text",PHD_SEL_AM);				
        			
        			}
        		
        		}
        		
        	}
        }

        this.div_search_cbo_nacode_onitemchanged = function(obj,e)
        {
        	//this.div_search.edt_nacode00.set_value(this.div_search.cbo_nacode.value);
        	//this.div_search.edt_nacode01.set_value(this.div_search.cbo_nacode.text);
        }

        /*조회합계*/
        this.grd_afterFncSum = function(obj,e)
        {	
        	this.fn_paging(1,"div_page_sum");// 처음조회시 1페이지를 조회한다.		
        }

        this.grd_afterFnc = function(obj,e)
        {
        /*
        	if(e.reason == 51)
        	{		
        		this.ds_paymentAffSsdyM.set_enableevent(false);
        		this.ds_paymentAffSsdyM.set_rowposition(-1);
        		this.ds_paymentAffSsdyM.set_enableevent(true);
        		return;
        	}
        */	
        	var phd_na_bzplc = this.gfn_nullToEmpty(this.ds_paymentAffSsdyM.getColumn(this.ds_paymentAffSsdyM.rowposition,"PHD_NA_BZPLC"));	//물류경제통합사업장코드      	
            var na_tr_dsc = this.gfn_nullToEmpty(this.ds_paymentAffSsdyM.getColumn(this.ds_paymentAffSsdyM.rowposition,"NA_TR_DSC"));  //경제통합거래구분코드    
            var na_blb_dfc_dsc = this.gfn_nullToEmpty(this.ds_paymentAffSsdyM.getColumn(this.ds_paymentAffSsdyM.rowposition,"NA_BLB_DFC_DSC"));  //경제통합흑자적자구분코드
            var tr_dt = this.gfn_nullToEmpty(this.ds_paymentAffSsdyM.getColumn(this.ds_paymentAffSsdyM.rowposition,"TR_DT"));  //거래일자
            var py_pla_dt = this.gfn_nullToEmpty(this.ds_paymentAffSsdyM.getColumn(this.ds_paymentAffSsdyM.rowposition,"PY_PLA_DT"));  //지급예정일자
            var na_crc_can_dsc = this.gfn_nullToEmpty(this.ds_paymentAffSsdyM.getColumn(this.ds_paymentAffSsdyM.rowposition,"NA_CRC_CAN_DSC"));  //경제통합정정취소구분코드
            
            var NA_TEAM_C = this.gfn_nullToEmpty(this.ds_paymentAffSsdyM.getColumn(this.ds_paymentAffSsdyM.rowposition,"NA_TEAM_C"));	//경제통합팀코드      	
            var SLPL_NA_TRPL_C = this.gfn_nullToEmpty(this.ds_paymentAffSsdyM.getColumn(this.ds_paymentAffSsdyM.rowposition,"SLPL_NA_TRPL_C"));  //매출처경제통합거래처코드    
            var SLPL_NA_TEAM_C = this.gfn_nullToEmpty(this.ds_paymentAffSsdyM.getColumn(this.ds_paymentAffSsdyM.rowposition,"SLPL_NA_TEAM_C"));  //매출처경제통합팀코드
            var BUYPL_NA_TRPL_C = this.gfn_nullToEmpty(this.ds_paymentAffSsdyM.getColumn(this.ds_paymentAffSsdyM.rowposition,"BUYPL_NA_TRPL_C"));  //매입처경제통합거래처코드
            var BUYPL_NA_TEAM_C = this.gfn_nullToEmpty(this.ds_paymentAffSsdyM.getColumn(this.ds_paymentAffSsdyM.rowposition,"BUYPL_NA_TEAM_C"));  //매입처경제통합팀코드
            var NA_ADJPL_C = this.gfn_nullToEmpty(this.ds_paymentAffSsdyM.getColumn(this.ds_paymentAffSsdyM.rowposition,"NA_ADJPL_C"));  //경제통합정산처코드
            var ADJPL_NA_TEAM_C = this.gfn_nullToEmpty(this.ds_paymentAffSsdyM.getColumn(this.ds_paymentAffSsdyM.rowposition,"ADJPL_NA_TEAM_C"));  //정산처경제통합팀코드
            

        	param = "phd_na_bzplc="+phd_na_bzplc+
        			" na_tr_dsc="+na_tr_dsc+			
        			" na_blb_dfc_dsc="+na_blb_dfc_dsc+
        			" tr_dt="+tr_dt+
        			" py_pla_dt="+py_pla_dt+
        			" na_crc_can_dsc="+na_crc_can_dsc+
        			
        			" NA_TEAM_C="+NA_TEAM_C+
        			" SLPL_NA_TRPL_C="+SLPL_NA_TRPL_C+
        			" SLPL_NA_TEAM_C="+SLPL_NA_TEAM_C+
        			" BUYPL_NA_TRPL_C="+BUYPL_NA_TRPL_C+
        			" BUYPL_NA_TEAM_C="+BUYPL_NA_TEAM_C+
        			" NA_ADJPL_C="+NA_ADJPL_C+
        			" ADJPL_NA_TEAM_C="+ADJPL_NA_TEAM_C
        			;
        	
        	trace("##DETAIL##PARAM##->"+param);
        	
        	var sSvcID        = "retrieveAffSsdyDetailList";//통신아이디
        	var sURL          = "svc::rest/payment/retrieveAffSsdyDetailList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_paymentAffSsdyD=ds_paymentAffSsdyD";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc , "S");
        }

        this.div_list_btn_divResize_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        /* 마스터 그리드 엑셀 다운로드*/
        this.div_list_btn_gradM_excel_onclick = function(obj,e)
        {
        	this.fn_excel();
        }

        this.fn_excel = function(){
        	
        	if(!this.fn_validationCheck()) return;
        	
        	//권한사업장 코드
        	var trplC = this.getTrplCode();
        	
        	var search_date_type = this.gfn_nullToEmpty(this.div_search.cbo_date.value); //조회기간
        	var from_date = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        	var to_date = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일
        	var trade_type = this.gfn_nullToEmpty(this.div_search.cbo_trade_type.value); //거래구분
        	var can_type =this.gfn_nullToEmpty(this.div_search.cbo_can_type.value); //정정취소구분
        	var na_bzplc = this.gfn_nullToEmpty(this.div_search.cbo_nacode.value); //농협사업장
        		
        	//엑셀명
        	var title = this.parent.sNm;
        	title = title.replace(/ /gi, '');
        	var fileName = title + "_상세정보_" + this.getDate() + ".xls";	
        	
        	var param = "search_date_type="+search_date_type+
        				"&from_date="+from_date+
        				"&to_date="+to_date+
        				"&trade_type="+trade_type+		
        				"&can_type="+can_type+
        				"&na_bzplc="+na_bzplc+
        				"&TRPL_C=" + trplC+
        				"&fileName="+fileName;
        			
        	trace("##MASTER##PARAM##->"+param);
        	
        	param = encodeURI(encodeURI(param));

        	//this.div_list.web_downExcelM.set_url(application.gv_server_url+"rest/excel/downloadExcelAffSsdyMaster?"+param);
        	excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelAffSsdyMaster?"+param, this);
        }

        /* 맨 위 엑셀 버튼*/
        this.btn_excel_onclick = function(obj,e)
        {
        	this.fn_excel();
        }

        /* 디테일 그리드 엑셀 다운로드 */
        this.div_list_btn_gradD_excel_onclick = function(obj,e)
        {
        	//권한사업장 코드
        	var trplC = this.getTrplCode();
        	
        	var search_date_type = this.gfn_nullToEmpty(this.div_search.cbo_date.value); //조회기간
        	var from_date = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        	var to_date = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일
        	var trade_type = this.gfn_nullToEmpty(this.div_search.cbo_trade_type.value); //거래구분
        	var can_type =this.gfn_nullToEmpty(this.div_search.cbo_can_type.value); //정정취소구분
        	var na_bzplc = this.gfn_nullToEmpty(this.div_search.cbo_nacode.value); //농협사업장
        		
        	//엑셀명
        	var title = this.parent.sNm;
        	title = title.replace(/ /gi, '');
        	var fileName = title + "_상세정보_" + this.getDate() + ".xls";
        	
        	var param = "search_date_type="+search_date_type+
        				"&from_date="+from_date+
        				"&to_date="+to_date+
        				"&trade_type="+trade_type+		
        				"&can_type="+can_type+
        				"&na_bzplc="+na_bzplc+
        				"&TRPL_C=" + trplC+
        				"&fileName="+fileName;
        	
        	var phd_na_bzplc = this.gfn_nullToEmpty(this.ds_paymentAffSsdyM.getColumn(this.ds_paymentAffSsdyM.rowposition,"PHD_NA_BZPLC"));	//물류경제통합사업장코드      	
            var na_tr_dsc = this.gfn_nullToEmpty(this.ds_paymentAffSsdyM.getColumn(this.ds_paymentAffSsdyM.rowposition,"NA_TR_DSC"));  //경제통합거래구분코드    
            var na_blb_dfc_dsc = this.gfn_nullToEmpty(this.ds_paymentAffSsdyM.getColumn(this.ds_paymentAffSsdyM.rowposition,"NA_BLB_DFC_DSC"));  //경제통합흑자적자구분코드
            var tr_dt = this.gfn_nullToEmpty(this.ds_paymentAffSsdyM.getColumn(this.ds_paymentAffSsdyM.rowposition,"TR_DT"));  //거래일자
            var py_pla_dt = this.gfn_nullToEmpty(this.ds_paymentAffSsdyM.getColumn(this.ds_paymentAffSsdyM.rowposition,"PY_PLA_DT"));  //지급예정일자
            var na_crc_can_dsc = this.gfn_nullToEmpty(this.ds_paymentAffSsdyM.getColumn(this.ds_paymentAffSsdyM.rowposition,"NA_CRC_CAN_DSC"));  //경제통합정정취소구분코드
            
            var NA_TEAM_C = this.gfn_nullToEmpty(this.ds_paymentAffSsdyM.getColumn(this.ds_paymentAffSsdyM.rowposition,"NA_TEAM_C"));	//경제통합팀코드      	
            var SLPL_NA_TRPL_C = this.gfn_nullToEmpty(this.ds_paymentAffSsdyM.getColumn(this.ds_paymentAffSsdyM.rowposition,"SLPL_NA_TRPL_C"));  //매출처경제통합거래처코드    
            var SLPL_NA_TEAM_C = this.gfn_nullToEmpty(this.ds_paymentAffSsdyM.getColumn(this.ds_paymentAffSsdyM.rowposition,"SLPL_NA_TEAM_C"));  //매출처경제통합팀코드
            var BUYPL_NA_TRPL_C = this.gfn_nullToEmpty(this.ds_paymentAffSsdyM.getColumn(this.ds_paymentAffSsdyM.rowposition,"BUYPL_NA_TRPL_C"));  //매입처경제통합거래처코드
            var BUYPL_NA_TEAM_C = this.gfn_nullToEmpty(this.ds_paymentAffSsdyM.getColumn(this.ds_paymentAffSsdyM.rowposition,"BUYPL_NA_TEAM_C"));  //매입처경제통합팀코드
            var NA_ADJPL_C = this.gfn_nullToEmpty(this.ds_paymentAffSsdyM.getColumn(this.ds_paymentAffSsdyM.rowposition,"NA_ADJPL_C"));  //경제통합정산처코드
            var ADJPL_NA_TEAM_C = this.gfn_nullToEmpty(this.ds_paymentAffSsdyM.getColumn(this.ds_paymentAffSsdyM.rowposition,"ADJPL_NA_TEAM_C"));  //정산처경제통합팀코드
            

        	param2 = "&phd_na_bzplc="+phd_na_bzplc+
        			"&na_tr_dsc="+na_tr_dsc+			
        			"&na_blb_dfc_dsc="+na_blb_dfc_dsc+
        			"&tr_dt="+tr_dt+
        			"&py_pla_dt="+py_pla_dt+
        			"&na_crc_can_dsc="+na_crc_can_dsc+			
        			"&NA_TEAM_C="+NA_TEAM_C+
        			"&SLPL_NA_TRPL_C="+SLPL_NA_TRPL_C+
        			"&SLPL_NA_TEAM_C="+SLPL_NA_TEAM_C+
        			"&BUYPL_NA_TRPL_C="+BUYPL_NA_TRPL_C+
        			"&BUYPL_NA_TEAM_C="+BUYPL_NA_TEAM_C+
        			"&NA_ADJPL_C="+NA_ADJPL_C+
        			"&ADJPL_NA_TEAM_C="+ADJPL_NA_TEAM_C
        			;
        				
        	trace("##DETAIL##PARAM##->"+param+param2);
        	
        	param = encodeURI(encodeURI(param));
        	param2 = encodeURI(encodeURI(param2));
        	
        	//this.div_list.web_downExcelD.set_url(application.gv_server_url+"rest/excel/downloadExcelAffSsdyDetail?"+param+param2);
        	excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelAffSsdyDetail?"+param+param2, this);
        }

        /* 최상단 엑셀(상세) 버튼 -> 없어짐 */
        this.btn_excelDetail_onclick = function(obj,e)
        {
        	var param = '';
        	
        	this.div_list.web_downExcelD.set_url(application.gv_server_url+"rest/excel/downloadExcelAffSsdyWrsSum?"+param);	
        }

        

        /*-----------------------------------------------------------------------------------------*/
        // 페이징처리
        /*-----------------------------------------------------------------------------------------*/
        this.fn_paging = function(vPageNum,objDivNm)
        { 	
          	if(objDivNm == "div_page"){
        		this.ds_pageVO.clearData();  
        		this.ds_paymentAffSsdyM.clearData();     //Grid에 Binding된 Dataset명	
        		
        		/*

        		this.ds_pageVO.addRow(); 

        		var vPageSize   = 5; 	//Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
        		var vTotalCount = 1; 	//전체건수. 화면조회후 리턴받아 사용
        		this.ds_pageVO.setColumn(0,"CURRENT_PAGE",vPageNum); //현재 페이지
        		this.ds_pageVO.setColumn(0,"PAGE_SIZE",vPageSize);
        		this.ds_pageVO.setColumn(0,"TOTAL_ROW_COUNT",vTotalCount);
        		 
        		var argumentObj = "";

        		lsNowPage = vPageNum;//현재페이지 설정 
        		*/

        		this.btn_click();
        		
        	}else if (objDivNm == "div_page_sum"){
        		this.ds_pageVO.clearData();  
        		this.ds_paymentAffSsdyM.clearData();     //Grid에 Binding된 Dataset명	
        		
        		/*

        		this.ds_pageVO.addRow(); 

        		var vPageSize   = 10; 	//Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
        		var vTotalCount = 1; 	//전체건수. 화면조회후 리턴받아 사용
        		this.ds_pageVO.setColumn(0,"CURRENT_PAGE",vPageNum); //현재 페이지
        		this.ds_pageVO.setColumn(0,"PAGE_SIZE",vPageSize);
        		this.ds_pageVO.setColumn(0,"TOTAL_ROW_COUNT",vTotalCount);
        		 
        		var argumentObj = "";

        		lsNowPage = vPageNum;//현재페이지 설정 
        		*/
        		
        		this.grd_click();		
        	}
         
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

        /* 조회 합계 버튼*/
        this.btn_search_sum_onclick = function(obj,e)
        {	
        	if(!this.fn_validationCheck()) return;
        	
        	this.ds_pageVO.clearData();
        	this.ds_paymentAffSsdySum.clearData();
        	this.ds_paymentAffSsdyM.clearData();
        	this.ds_paymentAffSsdyD.clearData();	
        	
        	//그리드 내 합계 초기화
        	this.div_list.grd_master.setCellProperty("Summ",14,"text","0");								
        	this.div_list.grd_master.setCellProperty("Summ",15,"text","0");
        	this.div_list.grd_master.setCellProperty("Summ",16,"text","0");
        	this.div_list.grd_master.setCellProperty("Summ",17,"text","0");
        	this.div_list.grd_master.setCellProperty("Summ",19,"text","0");
        	
        	this.div_list.grd_detail.setCellProperty("Summ",28,"text","0");								
        	this.div_list.grd_detail.setCellProperty("Summ",29,"text","0");
        	this.div_list.grd_detail.setCellProperty("Summ",30,"text","0");
        	this.div_list.grd_detail.setCellProperty("Summ",31,"text","0");
        	this.div_list.grd_detail.setCellProperty("Summ",34,"text","0");
        	
        	//권한사업장 코드
        	var trplC = this.getTrplCode();
        	
        	var search_date_type = this.gfn_nullToEmpty(this.div_search.cbo_date.value); //조회기간
        	var from_date = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        	var to_date = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일
        	var trade_type = this.gfn_nullToEmpty(this.div_search.cbo_trade_type.value); //거래구분
        	var can_type =this.gfn_nullToEmpty(this.div_search.cbo_can_type.value); //정정취소구분
        	var na_bzplc = this.gfn_nullToEmpty(this.div_search.cbo_nacode.value); //농협사업장
        	
        	var param = " search_date_type="+search_date_type+
        				" from_date="+from_date+
        				" to_date="+to_date+
        				" trade_type="+trade_type+		
        				" can_type="+can_type+
        				" na_bzplc="+na_bzplc+
        				" TRPL_C=" + trplC;
        				
        	trace("##MASTER##PARAM##->"+param);
        	
        	
        	var sSvcID        = "retrieveAffSsdySum";//통신아이디
        	var sURL          = "svc::rest/payment/retrieveAffSsdySum";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	//var sOutDatasets  = "ds_paymentAffSsdySum=ds_paymentAffSsdySum ds_total_sum=DS_SUM";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sOutDatasets  = "ds_paymentAffSsdySum=ds_paymentAffSsdySum";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /*사후장려금 마스터 엑셀 다운로드*/
        this.btn_excelM_onclick = function(obj,e)
        {
        	//권한사업장 코드
        	var trplC = this.getTrplCode();	
        	var search_date_type = this.gfn_nullToEmpty(this.div_search.cbo_date.value); //조회기간
        	var from_date = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        	var to_date = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일
        	var trade_type = this.gfn_nullToEmpty(this.div_search.cbo_trade_type.value); //거래구분
        	var can_type =this.gfn_nullToEmpty(this.div_search.cbo_can_type.value); //정정취소구분
        	var na_bzplc = this.gfn_nullToEmpty(this.div_search.cbo_nacode.value); //농협사업장
        	
        	//엑셀명
        	var title = this.parent.sNm;
        	title = title.replace(/ /gi, '');
        	var fileName = title + "_기준정보_" + this.getDate() + ".xls";	
        	
        	var param = "search_date_type="+search_date_type+
        				"&from_date="+from_date+
        				"&to_date="+to_date+
        				"&trade_type="+trade_type+
        				"&can_type="+can_type+
        				"&na_bzplc="+na_bzplc+
        				"&TRPL_C=" + trplC+
        				"&fileName="+fileName;
        			
        	trace("##MASTER##PARAM##->"+param);
        	
        	param = encodeURI(encodeURI(param));

        	excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelAffSsdyMM?"+param, this);	
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("oninit", this.form_init, this);
            this.div_search.cbo_date.addEventHandler("onitemchanged", this.Div01_Combo02_onitemchanged, this);
            this.div_search.cbo_nacode.addEventHandler("onitemchanged", this.div_search_cbo_nacode_onitemchanged, this);
            this.div_list.addEventHandler("onsize", this.div_list_onsize, this);
            this.div_list.btn_divResize.addEventHandler("onclick", this.div_list_btn_divResize_onclick, this);
            this.div_list.btn_gradM_excel.addEventHandler("onclick", this.div_list_btn_gradM_excel_onclick, this);
            this.div_list.btn_gradD_excel.addEventHandler("onclick", this.div_list_btn_gradD_excel_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_search_sum.addEventHandler("onclick", this.btn_search_sum_onclick, this);
            this.btn_excelM.addEventHandler("onclick", this.btn_excelM_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1240.xfdl");
        this.loadPreloadList();
       
    };
}
)();
