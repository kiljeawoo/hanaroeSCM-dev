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
                this.set_name("frm_VAN_DS_SC_0500");
                this.set_titletext("검수실적_전표별");
                this._setFormPosition(0,0,803,1007);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Rcv_M", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RN\" type=\"string\" size=\"8\"/><Column id=\"NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"NA_TEAM_C\" type=\"string\" size=\"32\"/><Column id=\"SLP_DT\" type=\"string\" size=\"32\"/><Column id=\"NA_SLPNO\" type=\"string\" size=\"32\"/><Column id=\"NA_CRC_CAN_DSC\" type=\"string\" size=\"32\"/><Column id=\"BCLNTNM\" type=\"string\" size=\"32\"/><Column id=\"NA_DVY_PLASH_SLPNO\" type=\"string\" size=\"32\"/><Column id=\"CCLNTNM\" type=\"string\" size=\"32\"/><Column id=\"CNR_DT\" type=\"string\" size=\"32\"/><Column id=\"TRSLPNO\" type=\"string\" size=\"32\"/><Column id=\"RPY_PLA_DT\" type=\"string\" size=\"32\"/><Column id=\"GAM_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"BYNG_VAT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"TOT_GAM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"CHRG_TOT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"VCBT_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"VCBX_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"CBAM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"NA_TR_DSC\" type=\"string\" size=\"32\"/><Column id=\"ROTS_CTR_DSC\" type=\"string\" size=\"32\"/><Column id=\"MNGT_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"ACTL_BUYPL_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"COMP_FEE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"BYNG_SSDY\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ETR_AMN_FEE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ETR_AMN_VAT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"SLGT_AMN_FEE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"PHD_FEE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"PHD_FEE_VAT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"TRP_SVC_CST\" type=\"bigdecimal\" size=\"8\"/><Column id=\"TRP_SVCOS_VAT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ETC_FEE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ETC_FEE_VAT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ADJ_NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"ADJ_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"FSRGMN_ENO\" type=\"string\" size=\"32\"/><Column id=\"EDIRG_DTM\" type=\"datetime\" size=\"17\"/><Column id=\"FS_RMS_DT\" type=\"string\" size=\"32\"/><Column id=\"APPLICATION_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PBDDLY_YN\" type=\"STRING\" size=\"20\"/><Column id=\"DVY_PLASH_CRT_DSC\" type=\"STRING\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_Rcv_D", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RN\" type=\"string\" size=\"8\"/><Column id=\"NA_WRS_C\" type=\"string\" size=\"32\"/><Column id=\"WRSNM\" type=\"string\" size=\"32\"/><Column id=\"TXT_DSC\" type=\"string\" size=\"32\"/><Column id=\"BYAM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"BYNG_UPR\" type=\"float\" size=\"8\"/><Column id=\"BYNG_QT\" type=\"float\" size=\"8\"/><Column id=\"GAM_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"BYNG_VAT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"WRS_STDNM\" type=\"string\" size=\"32\"/><Column id=\"VCBT_NA_WRS_C\" type=\"string\" size=\"32\"/><Column id=\"VCBT_QT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"VCBT_UPR\" type=\"bigdecimal\" size=\"8\"/><Column id=\"INPD_QT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"PD_YY\" type=\"string\" size=\"32\"/><Column id=\"BYNG_WT\" type=\"float\" size=\"8\"/><Column id=\"RPY_PLA_DT\" type=\"string\" size=\"32\"/><Column id=\"NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"NA_TEAM_C\" type=\"string\" size=\"32\"/><Column id=\"SLP_DT\" type=\"string\" size=\"32\"/><Column id=\"NA_SLPNO\" type=\"string\" size=\"32\"/><Column id=\"SLP_SQNO\" type=\"bigdecimal\" size=\"8\"/><Column id=\"NA_WRS_UNT_C\" type=\"string\" size=\"32\"/><Column id=\"CNR_DS_AM\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_commission", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SLP_SQNO\" type=\"string\" size=\"32\"/><Column id=\"NA_FEE_C\" type=\"string\" size=\"32\"/><Column id=\"FEENM\" type=\"string\" size=\"32\"/><Column id=\"SPY_AM_VAT\" type=\"string\" size=\"32\"/><Column id=\"TXT_VAT\" type=\"string\" size=\"32\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"string\" size=\"13\"/><Column id=\"name\" type=\"string\" size=\"13\"/></ColumnInfo><Rows><Row><Col id=\"code\"/><Col id=\"name\">- 전체 -</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"name\">매출정상</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"name\">반품정상</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"name\">매출정상 + 반품정정 + 반품취소</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"name\">반품정상 + 매출정정 + 매출취소</Col></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"string\" size=\"13\"/><Column id=\"name\" type=\"string\" size=\"13\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"name\">매출일</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"name\">검수일</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"name\">지급예정일</Col></Row></Rows>");
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

            obj = new Dataset("ds_excelBtnList", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">엑셀</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">전표_상품_수수료합계</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">전표_상품_수수료상세</Col></Row></Rows>");
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

            obj = new Dataset("ds_dataTotal", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"TOTAL_GAM_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"TOTAL_BYNG_VAT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"TOTAL_TOT_GAM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"TOTAL_CHRG_TOT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"TOTAL_VCBT_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"TOTAL_VCBX_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"TOTAL_CBAM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"TOTAL_COMP_FEE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"TOTAL_BYNG_SSDY\" type=\"bigdecimal\" size=\"8\"/><Column id=\"TOTAL_ETR_AMN_FEE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"TOTAL_ETR_AMN_VAT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"TOTAL_SLGT_AMN_FEE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"TOTAL_PHD_FEE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"TOTAL_PHD_FEE_VAT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"TOTAL_TRP_SVC_CST\" type=\"bigdecimal\" size=\"8\"/><Column id=\"TOTAL_TRP_SVCOS_VAT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"TOTAL_ETC_FEE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"TOTAL_ETC_FEE_VAT\" type=\"bigdecimal\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_blb_spy_am", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SUM_BLB_SPY_AM\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cnfm_yn", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"string\" size=\"13\"/><Column id=\"name\" type=\"string\" size=\"13\"/></ColumnInfo><Rows><Row><Col id=\"code\"/><Col id=\"name\">- 전체 -</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"name\">검수미확인</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"name\">반품미확인</Col></Row><Row><Col id=\"name\">반품검수미확인</Col><Col id=\"code\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "171", null, this);
            obj.set_taborder("35");
            obj.set_text("Div00");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", "397", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "95", "15", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "36", "89", "21", null, null, this.div_search);
            obj.set_taborder("32");
            obj.set_text("일자구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "10", "91", "21", null, null, this.div_search);
            obj.set_taborder("33");
            obj.set_text("사업장");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "443", "62", "103", "21", null, null, this.div_search);
            obj.set_taborder("34");
            obj.set_text("계통계약구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_is_na_all", "absolute", "106", "10", "209", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_is_na_all_innerdataset = new Dataset("rdo_is_na_all_innerdataset", this.div_search.rdo_is_na_all);
            rdo_is_na_all_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">실매입처(마트)</Col></Row></Rows>");
            obj.set_innerdataset(rdo_is_na_all_innerdataset);
            obj.set_taborder("35");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Combo("cbo_trade_type", "absolute", "106", "62", "115", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("36");
            obj.set_innerdataset("@ds_trade_type");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_displayrowcount("-1");
            obj.set_index("-1");
            obj = new Combo("cbo_contract_type", "absolute", "570", "62", "151", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("37");
            obj.set_innerdataset("@ds_contract_type");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_index("-1");
            obj = new Static("Static06", "absolute", "15", "62", "82", "21", null, null, this.div_search);
            obj.set_taborder("38");
            obj.set_text("거래구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_date", "absolute", "106", "36", "93", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("45");
            obj.set_innerdataset("ds_date");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_index("-1");
            obj = new Static("Static05", "absolute", "443", "36", "127", "21", null, null, this.div_search);
            obj.set_taborder("49");
            obj.set_text("사(전)후장려금");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_na_bzplc_code", "absolute", "313", "10", "116", "21", null, null, this.div_search);
            obj.set_taborder("51");
            obj.set_cssclass("WF_Essential");
            obj.set_maxlength("13");
            obj.set_inputtype("number");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_na_bzplc_name", "absolute", "432", "10", "265", "21", null, null, this.div_search);
            obj.set_taborder("52");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup", "absolute", "700", "10", "21", "21", null, null, this.div_search);
            obj.set_taborder("53");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static131", "absolute", "302", "36", "11", "21", null, null, this.div_search);
            obj.set_taborder("54");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_from", "absolute", "202", "36", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("55");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("true");
            obj = new Calendar("cal_to", "absolute", "313", "36", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("56");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static14", "absolute", "121", "31", null, "5", "538", null, this.div_search);
            obj.set_taborder("57");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "122", "0", null, "10", "571", null, this.div_search);
            obj.set_taborder("60");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit00", "absolute", "570", "36", "151", "21", null, null, this.div_search);
            obj.set_taborder("61");
            obj.set_enable("false");
            obj.set_mask("#,###");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "229", "62", "82", "21", null, null, this.div_search);
            obj.set_taborder("62");
            obj.set_text("확인여부");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_cnfm_yn", "absolute", "320", "62", "93", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("63");
            obj.set_innerdataset("@ds_cnfm_yn");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");

            obj = new Static("Static09", "absolute", "1", "30", null, "69", "977", null, this);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "83", "30", null, "69", "888", null, this);
            obj.set_taborder("8");
            obj.set_text("22");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "319", "30", null, "10", "594", null, this);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "319", "61", null, "5", "594", null, this);
            obj.set_taborder("10");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "410", "30", null, "69", "553", null, this);
            obj.set_taborder("11");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "319", "87", null, "10", "594", null, this);
            obj.set_taborder("12");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "788", "1", "15", "490", null, null, this);
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

            obj = new Button("btn_print", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("21");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "123", null, null, "15", "0", this);
            obj.set_taborder("0");
            obj.set_text("Div02");
            obj.set_scrollbars("autoboth");
            this.addChild(obj.name, obj);
            obj = new Button("btn_divResize", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_master", "absolute", "0", "41", null, "284", "0", null, this.div_list);
            obj.set_taborder("24");
            obj.set_binddataset("ds_Rcv_M");
            obj.set_summarytype("default");
            obj.set_autosizingtype("both");
            obj.set_autofittype("none");
            obj.set_cellsizingtype("both");
            obj.set_extendsizetype("row");
            obj.set_cellsizebandtype("body");
            obj.set_autosizebandtype("body");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"111\"/><Column size=\"200\"/><Column size=\"108\"/><Column size=\"73\"/><Column size=\"86\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"127\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"107\"/><Column size=\"106\"/><Column size=\"108\"/><Column size=\"110\"/><Column size=\"91\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"28\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\" autosizecol=\"default\"/><Cell col=\"1\" text=\"정정취소구분\" autosizecol=\"default\"/><Cell col=\"2\" text=\"본/지사명\"/><Cell col=\"3\" text=\"배송예정서번호\" autosizecol=\"default\"/><Cell col=\"4\" text=\"혁신구분\"/><Cell col=\"5\" text=\"PB직송여부\"/><Cell col=\"6\" text=\"실매입처명\"/><Cell col=\"7\" text=\"검수일자\"/><Cell col=\"8\" text=\"매출일자-번호\"/><Cell col=\"9\" text=\"지급예정일\"/><Cell col=\"10\" text=\"공급금액&#13;&#10;A\"/><Cell col=\"11\" text=\"부가세&#13;&#10;B\"/><Cell col=\"12\" text=\"총공급금액&#13;&#10;C = A+B+E+F\"/><Cell col=\"13\" text=\"총공제금액&#13;&#10;D = P ~ Y\"/><Cell col=\"14\" text=\"공병금액&#13;&#10;E\"/><Cell col=\"15\" text=\"공상자금액&#13;&#10;F\"/><Cell col=\"16\" text=\"순공급금액&#13;&#10;G = C - D\"/><Cell col=\"17\" text=\"거래구분\"/><Cell col=\"18\" text=\"계통구분\"/><Cell col=\"19\" text=\"본/지사코드\"/><Cell col=\"20\" text=\"실매입처(농협)\"/><Cell col=\"21\" text=\"업체수수료&#13;&#10;O = P+Q+R+S\"/><Cell col=\"22\" text=\"매입장려금&#13;&#10;P\"/><Cell col=\"23\" text=\"관리수수료(R2)&#13;&#10;Q\"/><Cell col=\"24\" text=\"관리부가세(R2)&#13;&#10;R\"/><Cell col=\"25\" text=\"관리수수료(R1)&#13;&#10;S\"/><Cell col=\"26\" text=\"물류수수료&#13;&#10;T\"/><Cell col=\"27\" text=\"물류부가세&#13;&#10;U\"/><Cell col=\"28\" text=\"운송용역비&#13;&#10;V\"/><Cell col=\"29\" text=\"운송부가세&#13;&#10;W\"/><Cell col=\"30\" text=\"기타수수료&#13;&#10;X\"/><Cell col=\"31\" text=\"기타부가세&#13;&#10;Y\"/><Cell col=\"32\" text=\"배송예정작성자\"/><Cell col=\"33\" text=\"정산사업장코드\"/><Cell col=\"34\" text=\"정산처코드\"/><Cell col=\"35\" text=\"XML 문서번호\"/><Cell col=\"36\" text=\"확인여부\"/></Band><Band id=\"body\"><Cell celltype=\"body\" text=\"bind:RN\" autosizerow=\"limitmin\" autosizecol=\"limitmin\"/><Cell col=\"1\" text=\"bind:NA_CRC_CAN_DSC\" autosizerow=\"limitmin\" autosizecol=\"limitmax\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:CCLNTNM\"/><Cell col=\"3\" text=\"bind:NA_DVY_PLASH_SLPNO\"/><Cell col=\"4\" text=\"bind:DVY_PLASH_CRT_DSC\"/><Cell col=\"5\" text=\"bind:PBDDLY_YN\"/><Cell col=\"6\" style=\"align:left;\" text=\"bind:BCLNTNM\"/><Cell col=\"7\" displaytype=\"date\" text=\"bind:CNR_DT\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" text=\"bind:TRSLPNO\"/><Cell col=\"9\" displaytype=\"date\" text=\"bind:RPY_PLA_DT\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" style=\"align:right;\" text=\"bind:GAM_AM\"/><Cell col=\"11\" style=\"align:right;\" text=\"bind:BYNG_VAT\"/><Cell col=\"12\" style=\"align:right;\" text=\"bind:TOT_GAM\"/><Cell col=\"13\" style=\"align:right;\" text=\"bind:CHRG_TOT\"/><Cell col=\"14\" style=\"align:right;\" text=\"bind:VCBT_AM\"/><Cell col=\"15\" style=\"align:right;\" text=\"bind:VCBX_AM\"/><Cell col=\"16\" style=\"align:right;\" text=\"bind:CBAM\"/><Cell col=\"17\" text=\"bind:NA_TR_DSC\"/><Cell col=\"18\" text=\"bind:ROTS_CTR_DSC\"/><Cell col=\"19\" text=\"bind:ACTL_BUYPL_NA_TRPL_C\"/><Cell col=\"20\" text=\"bind:MNGT_NA_TRPL_C\"/><Cell col=\"21\" style=\"align:right;\" text=\"bind:COMP_FEE\"/><Cell col=\"22\" style=\"align:right;\" text=\"bind:BYNG_SSDY\"/><Cell col=\"23\" style=\"align:right;\" text=\"bind:ETR_AMN_FEE\"/><Cell col=\"24\" style=\"align:right;\" text=\"bind:ETR_AMN_VAT\"/><Cell col=\"25\" style=\"align:right;\" text=\"bind:SLGT_AMN_FEE\"/><Cell col=\"26\" style=\"align:right;\" text=\"bind:PHD_FEE\"/><Cell col=\"27\" style=\"align:right;\" text=\"bind:PHD_FEE_VAT\"/><Cell col=\"28\" style=\"align:right;\" text=\"bind:TRP_SVC_CST\"/><Cell col=\"29\" style=\"align:right;\" text=\"bind:TRP_SVCOS_VAT\"/><Cell col=\"30\" style=\"align:right;\" text=\"bind:ETC_FEE\"/><Cell col=\"31\" style=\"align:right;\" text=\"bind:ETC_FEE_VAT\"/><Cell col=\"32\" text=\"bind:FSRGMN_ENO\"/><Cell col=\"33\" text=\"bind:ADJ_NA_BZPLC\"/><Cell col=\"34\" text=\"bind:ADJ_NA_TRPL_C\"/><Cell col=\"35\" text=\"bind:APPLICATION_ID\"/><Cell col=\"36\" text=\"bind:CNFM_YN\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" style=\"align:center;\" text=\"합계\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('GAM_AM');\" mask=\"###,##0\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BYNG_VAT');\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('TOT_GAM');\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('CHRG_TOT');\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('VCBT_AM');\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('VCBX_AM');\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('CBAM');\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('COMP_FEE');\"/><Cell col=\"22\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BYNG_SSDY');\"/><Cell col=\"23\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('ETR_AMN_FEE');\"/><Cell col=\"24\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('ETR_AMN_VAT');\"/><Cell col=\"25\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('SLGT_AMN_FEE');\"/><Cell col=\"26\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('PHD_FEE');\"/><Cell col=\"27\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('PHD_FEE_VAT');\"/><Cell col=\"28\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('TRP_SVC_CST');\"/><Cell col=\"29\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('TRP_SVCOS_VAT');\"/><Cell col=\"30\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('ETC_FEE');\"/><Cell col=\"31\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('ETC_FEE_VAT');\"/><Cell col=\"32\"/><Cell col=\"33\"/><Cell col=\"34\"/><Cell col=\"35\"/><Cell col=\"36\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_detail", "absolute", "0", "372", null, "468", "0", null, this.div_list);
            obj.set_taborder("26");
            obj.set_binddataset("ds_Rcv_D");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"109\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"105\"/><Column size=\"0\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"상품코드\"/><Cell col=\"2\" text=\"상품명\"/><Cell col=\"3\" text=\"과세구분\"/><Cell col=\"4\" text=\"총공급금액\"/><Cell col=\"5\" text=\"매입단가\"/><Cell col=\"6\" text=\"매입수량\"/><Cell col=\"7\" text=\"공급금액\"/><Cell col=\"8\" text=\"매입부가세\"/><Cell col=\"9\" text=\"상품규격\"/><Cell col=\"10\" text=\"공병상품코드\"/><Cell col=\"11\" text=\"공병수량\"/><Cell col=\"12\" text=\"공병단가\"/><Cell col=\"13\" text=\"내품수량\"/><Cell col=\"14\" text=\"생산년도\"/><Cell col=\"15\" text=\"입고중량\"/><Cell col=\"16\" text=\"상환예정일자\"/><Cell col=\"17\" text=\"단위\"/><Cell col=\"18\"/></Band><Band id=\"body\"><Cell text=\"bind:RN\"/><Cell col=\"1\" text=\"bind:NA_WRS_C\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:WRSNM\"/><Cell col=\"3\" text=\"bind:TXT_DSC\"/><Cell col=\"4\" style=\"align:right;\" text=\"bind:BYAM\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BYNG_UPR\" mask=\"#,###.00\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BYNG_QT\" mask=\"#,###.00\"/><Cell col=\"7\" style=\"align:right;\" text=\"bind:GAM_AM\"/><Cell col=\"8\" style=\"align:right;\" text=\"bind:BYNG_VAT\"/><Cell col=\"9\" text=\"bind:WRS_STDNM\"/><Cell col=\"10\" text=\"bind:VCBT_NA_WRS_C\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:VCBT_QT\" mask=\"#,##0.00\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:VCBT_UPR\" mask=\"#,##0.00\"/><Cell col=\"13\" style=\"align:right;\" text=\"bind:INPD_QT\"/><Cell col=\"14\" text=\"bind:PD_YY\" calendardisplaynulltype=\"none\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BYNG_WT\" mask=\"#,##0.00\"/><Cell col=\"16\" displaytype=\"date\" text=\"bind:RPY_PLA_DT\" mask=\"yyyy-MM-dd\"/><Cell col=\"17\" text=\"bind:NA_WRS_UNT_C\"/><Cell col=\"18\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "613", "279", null, "69", "350", null, this.div_list);
            obj.set_taborder("29");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_printD", "absolute", null, "346", "41", "21", "43", null, this.div_list);
            obj.set_taborder("30");
            obj.set_text("출력");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_gradD_excel", "absolute", null, "346", "41", "21", "0", null, this.div_list);
            obj.set_taborder("31");
            obj.set_text("엑셀");
            this.div_list.addChild(obj.name, obj);
            obj = new WebBrowser("web_downExcelM", "absolute", "617", "10", "38", "20", null, null, this.div_list);
            obj.set_taborder("33");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new WebBrowser("web_downExcelD", "absolute", "587", "336", "31", "15", null, null, this.div_list);
            obj.set_taborder("34");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new WebBrowser("web_downExcelComSum", "absolute", "524", "13", "20", "14", null, null, this.div_list);
            obj.set_taborder("35");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new WebBrowser("web_downExcelComDetail", "absolute", "567", "13", "25", "14", null, null, this.div_list);
            obj.set_taborder("36");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_page", "absolute", "28.55%", "328", "338", "44", null, null, this.div_list);
            obj.set_taborder("37");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_page2", "absolute", "28.55%", "840", "338", "44", null, null, this.div_list);
            obj.set_taborder("38");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "0", "330", "460", "21", null, null, this.div_list);
            obj.set_taborder("32");
            obj.set_text("수수료 자료는 상품 클릭시 조회됩니다.");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_list.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "53", "21", "118", null, this);
            obj.set_taborder("34");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_Group");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00", "absolute", "608", "60", "145", "66", null, null, this);
            obj.set_text("PopupDiv00");
            obj.style.set_background("azure");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new ListBox("ListBox02", "absolute", "0", "0", "145", "66", null, null, this.PopupDiv00);
            this.PopupDiv00.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_scrollbars("autovert");
            obj.set_innerdataset("@ds_excelBtnList");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 431, 21, this.div_auth,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("35");
            		p.set_url("common::AuthorityWorkplace.xfdl");
            		p.set_text("Div00");

            	}
            );
            this.div_auth.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 95, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
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
            		p.set_scrollbars("autoboth");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 145, 66, this.PopupDiv00,
            	//-- Layout function
            	function(p) {
            		p.set_text("PopupDiv00");
            		p.style.set_background("azure");
            		p.set_visible("false");

            	}
            );
            this.PopupDiv00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 1007, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("검수실적_전표별");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_search.MaskEdit00","value","ds_blb_spy_am","SUM_BLB_SPY_AM");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::AuthorityWorkplace.xfdl");
            this._addPreloadList("fdl", "common::location.xfdl");
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_0500.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0500.xfdl", function() {
        //include "lib::comLib.xjs";

        var docName;
        var cnfm_yn;
        /* form load */
        this.form_onload = function(obj,e)
        {		
        	this.gfn_setInitForm(obj,e);
        		
        	var param = [  
         		{code:"CSER_CTR_TPC",   dsName:"ds_contract_type",   selecttype:"A"} 		
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
        	trace("fn_commonAfterOnload");
        	
        	this.div_search.cbo_contract_type.set_index(0);
        	this.div_search.cbo_trade_type.set_index(0);
        	this.div_search.cbo_date.set_index(0);
        	
        	if(docName == "CONRET"){
        		this.div_search.cbo_cnfm_yn.set_index(2);
        		this.fn_search();
        	} else if(docName == "CONADV") {
        		this.div_search.cbo_cnfm_yn.set_index(1);
        		this.fn_search();
        	} else {
        		this.div_search.cbo_cnfm_yn.set_index(0);
        	}
        }

        /* 페이지 로딩후 실행부분 */
        this.fn_afterFormOnload = function()
        {
        		docName = this.getOwnerFrame().arguments["FORM_PARAM"];	
        		if(docName == "CONRET"){
        			this.div_search.cal_from.set_value(this.gfn_minusDate(this.gfn_today("yyyyMMdd"),2));	
        			this.div_search.cal_to.set_value(this.gfn_today("yyyyMMdd"));			
        		} else if(docName == "CONADV") {
        			this.div_search.cal_from.set_value(this.gfn_minusDate(this.gfn_today("yyyyMMdd"),2));	
        			this.div_search.cal_to.set_value(this.gfn_today("yyyyMMdd"));
        		} else {
        			//그리드 nodata
        			this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        			this.div_list.grd_detail.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        			
        			this.div_search.cal_from.set_value(this.gfn_minusDate(this.gfn_today("yyyyMMdd"),7));	
        			this.div_search.cal_to.set_value(this.gfn_today("yyyyMMdd"));

        			/* 마스터, 디테일 구조의 그리드시에 이벤트 등록
        			- 기능
        			 1.마스터 데이터 로드시, 디테일의 데이터가 없다면, 디테일그리드의 페이지DIV와 페이지정보 초기화
        			 2.마스터, 디테일 그리드 클릭 이벤트 등록
        			*/

        			
        			var param = {
        				form: this,										//공통(필수)
        				m_grd: this.div_list.grd_master,  				//마스터 그리드
        				m_pageDiv: this.div_list.div_page,			    //마스터 페이지DIV
        				m_afterFnc: this.grd_afterFnc1,					//마스터 그리드 클릭이벤트
        				d_grd: this.div_list.grd_detail, 				//디테일 그리드
        				d_pageDiv: this.div_list.div_page2,			    //디테일 페이지DIV
        				d_afterFnc: this.grd_afterFnc2					//디테일 그리드 클릭이벤트
        			};
        			param.m_pageDiv.addPageEvent(param);				//이벤트 등록

        	

        			//var ozParam = {form:this, ozBtn:this.btn_print, ozFnc:'btn_print_onclick'};

        			//this.addOzBtn(ozParam);
        		}
        };

        this.grd_afterFnc1 = function(obj,e){
        	this.fn_paging(1, "div_page2");// 처음조회시 1페이지를 조회한다.	
        };

        /* 메인에서 미확인건으로 넘어오면 자동 검색 4 */
         this.fn_postOnLoad = function()
         {
        	docName = this.getOwnerFrame().arguments["FORM_PARAM"];
        	
        	this.div_search.rdo_is_na_all.set_value(1);
        	this.div_search.edt_na_bzplc_code.set_value('');
        	this.div_search.edt_na_bzplc_name.set_value('');	
        	this.div_search.cbo_contract_type.set_index(0);
        	this.div_search.cbo_trade_type.set_index(0);
        	this.div_search.cbo_date.set_index(0);
        		
         	if(docName == "CONRET"){
         		this.div_search.cal_from.set_value(this.gfn_minusDate(this.gfn_today("yyyyMMdd"),2));	
         		this.div_search.cal_to.set_value(this.gfn_today("yyyyMMdd"));
        		this.div_search.cbo_cnfm_yn.set_index(2);
        		this.fn_search();
         	} else if(docName == "CONADV") {	
         		this.div_search.cal_from.set_value(this.gfn_minusDate(this.gfn_today("yyyyMMdd"),2));	
         		this.div_search.cal_to.set_value(this.gfn_today("yyyyMMdd"));
         		this.div_search.cbo_cnfm_yn.set_index(1);
         		this.fn_search();
         	}
         }

        /** search */
        this.btn_search_onclick = function(obj,e)
        {	
        	//this.fn_paging(1,"div_page");

        	// 처음조회시 1페이지를 조회한다.
        	
        	this.fn_search();
        }

        this.fn_search = function(){
        	this.ds_dataTotal.clearData();
        	this.ds_Rcv_M.clearData();
        	this.ds_Rcv_D.clearData();		
        	
        	if(this.fn_validationCheck()){	
        	
        	//권한사업장 코드
        	var trplC = this.getTrplCode();
        	
        	var search_date_type = this.gfn_nullToEmpty(this.div_search.cbo_date.value); //매출일			
        	var from_date = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        	var to_date = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일		
        	var trade_type = this.gfn_nullToEmpty(this.div_search.cbo_trade_type.value); //거래구분
        	var cnfm_yn = this.gfn_nullToEmpty(this.div_search.cbo_cnfm_yn.value); //확인여부
        	var is_na_all = this.gfn_nullToEmpty(this.div_search.rdo_is_na_all.value); //농협사업장전체
        	var na_bzplc = this.gfn_nullToEmpty(this.div_search.edt_na_bzplc_code.value); //실매입처
        	var rots_ctr_dsc =this.gfn_nullToEmpty(this.div_search.cbo_contract_type.value); //계통계약구분
        	
        	var param = "TRPL_C=" + trplC+				
        				" search_date_type="+search_date_type+
        				" from_date="+from_date+
        				" to_date="+to_date+
        				" trade_type="+trade_type+		
        				" cnfm_yn="+cnfm_yn+
        				" rots_ctr_dsc="+rots_ctr_dsc+
        				" is_na_all="+is_na_all+
        				" na_bzplc="+na_bzplc;
        				
        	trace("##MASTER##PARAM##->"+param);	
        	
        	var sSvcID        = "retrieveRecadvSlpMasterList";//통신아이디
        	var sURL          = "svc::rest/recadv/retrieveRecadvSlpMasterList";// 호출할 서버 페이지 주소

        	
        	//var sInDatasets   = "ds_pageVO=ds_pageVO";//보내는데이터셋
        	//var sOutDatasets  = "ds_Rcv_M=ds_rcvM ds_pageVO=ds_pageVO ds_dataTotal=ds_dataTotal ds_blb_spy_am=ds_blb_spy_am";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)\

        	var sInDatasets   = "";//보내는데이터셋

        	var sOutDatasets  = "ds_Rcv_M=ds_rcvM ds_dataTotal=ds_dataTotal ds_blb_spy_am=ds_blb_spy_am";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)

        	
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);	
        	
        	}
        }

        /* Validation Check */
        this.fn_validationCheck = function(){

        	var cal_from  	= this.gfn_nullToEmpty(this.div_search.cal_from.value);
        	var cal_to  	= this.gfn_nullToEmpty(this.div_search.cal_to.value);
        	
        	if(cal_from == "" || cal_to == ""){
        		alert("조회기간을 선택해 주세요");
        		return false;
        	}	
        	
        	if(this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value) < 0){
        	
        		//조회 시작일과 종료일을 다시 확인해 주세요
        		this.gfn_getMessage("alert", "validation.message.fromDate.toDate.reConfirm");
        		return false;
        	}else{
        		if(this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value) > 35){
        			//기간을 35일 이내로 선택해 주세요
        			// this.gfn_getMessage("alert", "validation.message.selectDateIn35Day");
        			alert("조회기간 35일 이상은 데이터마트 화면을 이용해 주세요.");
        			
        			this.gfn_OpenMenuId("02011001");
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

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", ErrorMsg);
        		return;
        	}else{
        		if(svcID == "retrieveRecadvSlpMasterList"){
        			if(this.ds_Rcv_M.rowcount > 0){
        				this.ds_Rcv_M.set_rowposition(1);
        				this.ds_Rcv_M.set_rowposition(0);
        				
        				// 페이지 셋팅
        				var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        				var sPagesize = this.ds_pageVO.getColumn(0, "PAGE_SIZE");

        				//this.div_list.div_page.fn_pageSet(sTotal, sPagesize,"grd_master,div_page",lsNowPage);		
        				
        				//trace(this.ds_dataTotal.saveXML());
        				
        			}else{	
        				this.div_list.div_page.fn_pageSet(0, 0,"grd_master,div_page",lsNowPage);		
        			}						
        		}else if(svcID == "retrieveRecadvSlpDetailList"){			
        			if(this.ds_Rcv_D.rowcount > 0){				
        				// 페이지 셋팅
        				var sTotal    = this.ds_pageVO02.getColumn(0, "TOTAL_ROW_COUNT");
        				var sPagesize = this.ds_pageVO02.getColumn(0, "PAGE_SIZE");
        								
        				this.div_list.div_page2.fn_pageSet(sTotal, sPagesize,"grd_detail,div_page2",lsNowPage);
        			}else{	
        				this.div_list.div_page2.fn_pageSet(0, 0,"grd_detail,div_page2",lsNowPage);
        			}
        		}		
        	}
        }

        //Popupdiv 호출
        this.btn_excel_onclick = function(obj,e)
        {
        	var nX = system.clientToScreenX(obj, 0) - system.clientToScreenX(application.mainframe, 0); 
        	var nY = system.clientToScreenY(obj, parseInt(obj.height)) - system.clientToScreenY(application.mainframe, 0); 
        	
        	this.PopupDiv00.trackPopup(nX, nY);	
        }

        //엑셀 콤보박스 ListBox 선택값 확인후, Popupdiv close
        this.PopupDiv00_ListBox02_onitemchanged = function(obj,e)
        {
        	trace(e.postvalue);
        	
        	if(!this.fn_validationCheck()) return;
        	
        	//권한사업장 코드
        	var trplC = this.getTrplCode();
        	
        	var search_date_type = this.gfn_nullToEmpty(this.div_search.cbo_date.value); //매출일			
        	var from_date = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        	var to_date = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일		
        	var trade_type = this.gfn_nullToEmpty(this.div_search.cbo_trade_type.value); //거래구분
        	var is_na_all = this.gfn_nullToEmpty(this.div_search.rdo_is_na_all.value); //농협사업장전체
        	var na_bzplc = this.gfn_nullToEmpty(this.div_search.edt_na_bzplc_code.value); //실매입처
        	var rots_ctr_dsc =this.gfn_nullToEmpty(this.div_search.cbo_contract_type.value); //계통계약구분
        		
        	var param = "TRPL_C=" + trplC+				
        				"&search_date_type="+search_date_type+
        				"&from_date="+from_date+
        				"&to_date="+to_date+
        				"&trade_type="+trade_type+		
        				"&rots_ctr_dsc="+rots_ctr_dsc+
        				"&is_na_all="+is_na_all+
        				"&na_bzplc="+na_bzplc;					
        			
        	trace("##MASTER##PARAM##->"+param);
        	
        	if(e.postvalue == '1'){		
        		this.fn_excel();
        	}else if(e.postvalue == '2'){
        		//전표_상품_수수료합계
        		
        		if (this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value) > 11) {
        			//Excel 상품내역 전환시 실적자료가 많은 관계로 조회 일자 기간을 11일 이내로 선택하셔야 합니다.			
        			this.gfn_getMessage("alert", "msg.van_ds_sc_0500.view.excel.validation.text1");
        			
                    if (this.div_search.cal_from.enable == true) this.div_search.cal_from.setFocus(true);
                    return(false);
                }
                //전표 - 상품 - 수수료합계의 형태로 엑셀 문서를 작성합니다.\n\n수수료가 없는 전표도 전표 헤더 및 상세 내역이 작성됩니다.
                this.gfn_getMessage("alert", "msg.van_ds_sc_0500.view.excel.validation.text2");
                
        		//var fileName = "COMMISION_SUM.xls";//엑셀 파일 이름		
        		
        		//엑셀명
        		var title = this.parent.sNm;
        		title = title.replace(/ /gi, '');
        		var fileName = title + "_상품_수수료합계_" + this.getDate() + ".xls";	
        		
        		fileName = encodeURI(encodeURI(fileName));
        		
        		//this.div_list.web_downExcelComSum.set_url(application.gv_server_url+"rest/excel/downloadExcelRecadvSlpCommisionSum?"+param+"&fileName="+fileName);
        		excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelRecadvSlpCommisionSum?"+param+"&fileName="+fileName, this);
        		
        	}else if(e.postvalue == '3'){
        		//전표_상품_수수료상세
        		
        		if (this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value) > 11) {
        		//"Excel 상세 전환시 실적자료가 많은 관계로 조회 일자 기간을 11일 이내로 선택하셔야 합니다.
                    this.gfn_getMessage("alert", "msg.van_ds_sc_0500.view.excel.validation.text3");
                    if (this.div_search.cal_from.enable == true) this.div_search.cal_from.setFocus(true);
                    return(false);
                }
                //전표 - 상품 - 수수료의 형태로 엑셀 문서를 작성합니다.\n\n수수료가 없는 전표도 전표 헤더 및 상세 내역이 작성됩니다.
                this.gfn_getMessage("alert", "msg.van_ds_sc_0500.view.excel.validation.text2");
        	
        		//var fileName = "COMMISION_DETAIL.xls";//엑셀 파일 이름
        		//엑셀명
        		var title = this.parent.sNm;
        		title = title.replace(/ /gi, '');
        		var fileName = title + "_상품_수수료상세_" + this.getDate() + ".xls";	
        		
        		fileName = encodeURI(encodeURI(fileName));
        		
        		//this.div_list.web_downExcelComDetail.set_url(application.gv_server_url+"rest/excel/downloadExcelRecadvSlpCommisionDetail?"+param+"&fileName="+fileName);
        		excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelRecadvSlpCommisionDetail?"+param+"&fileName="+fileName, this);
        	}
        	this.PopupDiv00.closePopup();
        }

        this.fn_excel = function(){
        	//권한사업장 코드
        	var trplC = this.getTrplCode();
        	
        	var search_date_type = this.gfn_nullToEmpty(this.div_search.cbo_date.value); //매출일			
        	var from_date = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        	var to_date = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일		
        	var trade_type = this.gfn_nullToEmpty(this.div_search.cbo_trade_type.value); //거래구분
        	var is_na_all = this.gfn_nullToEmpty(this.div_search.rdo_is_na_all.value); //농협사업장전체
        	var na_bzplc = this.gfn_nullToEmpty(this.div_search.edt_na_bzplc_code.value); //실매입처
        	var rots_ctr_dsc =this.gfn_nullToEmpty(this.div_search.cbo_contract_type.value); //계통계약구분
        	var cnfm_yn = this.gfn_nullToEmpty(this.div_search.cbo_cnfm_yn.value); //확인여부
        	
        	//var fileName = "VAN_DS_SC_0500.xls";//엑셀 파일 이름
        	
        	//엑셀명
        	var title = this.parent.sNm;
        	title = title.replace(/ /gi, '');
        	var fileName = title + "_기준정보_" + this.getDate() + ".xls";	
        	
        	var param = "TRPL_C=" + trplC+				
        				"&search_date_type="+search_date_type+
        				"&from_date="+from_date+
        				"&to_date="+to_date+
        				"&trade_type="+trade_type+		
        				"&rots_ctr_dsc="+rots_ctr_dsc+
        				"&is_na_all="+is_na_all+
        				"&na_bzplc="+na_bzplc+
        				"&cnfm_yn="+cnfm_yn+
        				"&fileName="+fileName;			
        			
        	trace("##MASTER##PARAM##->"+param);
        	
        	param = encodeURI(encodeURI(param));

        	//this.div_list.web_downExcelM.set_url(application.gv_server_url+"rest/excel/downloadExcelRecadvSlpMaster?"+param);
        	excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelRecadvSlpMaster?"+param, this);
        }

        //user function
        this.fn_searchScd = function(){
        	//var userKey = application.gv_userKey;
        	
        	
        	var rpy_pla_dt = this.gfn_nullToEmpty(this.ds_Rcv_M.getColumn(this.ds_Rcv_M.rowposition,"RPY_PLA_DT")); //지급예정일
        	
        	var na_bzplc = this.gfn_nullToEmpty(this.ds_Rcv_M.getColumn(this.ds_Rcv_M.rowposition,"NA_BZPLC")); //경제통합사업장코드
        	var na_team_c = this.gfn_nullToEmpty(this.ds_Rcv_M.getColumn(this.ds_Rcv_M.rowposition,"NA_TEAM_C")); //경제통합팀코드
        	var slp_dt = this.gfn_nullToEmpty(this.ds_Rcv_M.getColumn(this.ds_Rcv_M.rowposition,"SLP_DT")); //전표일자
        	var na_slpno = this.gfn_nullToEmpty(this.ds_Rcv_M.getColumn(this.ds_Rcv_M.rowposition,"NA_SLPNO")); //경제통합전표번호
        	/*	
        	na_bzplc="1000000000001";
        	na_team_c="00"
        	slp_dt="20150610"
        	na_slpno="10000001"
        	*/
        	var param = "na_bzplc="+na_bzplc+
        				" na_team_c="+na_team_c+
        				" slp_dt="+slp_dt+
        				" na_slpno="+na_slpno+
        				" rpy_pla_dt="+rpy_pla_dt;
        				
        	trace("##DETAIL##PARAM##->"+param);
        		
        	var sSvcID        = "retrieveRecadvSlpDetailList";//통신아이디
        	var sURL          = "svc::rest/recadv/retrieveRecadvSlpDetailList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "ds_pageVO02=ds_pageVO02";//보내는데이터셋
        	var sOutDatasets  = "ds_Rcv_D=ds_rcvD ds_pageVO02=ds_pageVO02";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.grd_afterFnc2 = function(obj,e)
        {	
        	//var userKey = application.gv_userKey;
        	var na_bzplc = this.gfn_nullToEmpty(this.ds_Rcv_D.getColumn(this.ds_Rcv_D.rowposition,"NA_BZPLC")); //경제통합사업장코드
        	var na_team_c = this.gfn_nullToEmpty(this.ds_Rcv_D.getColumn(this.ds_Rcv_D.rowposition,"NA_TEAM_C")); //경제통합팀코드
        	var slp_dt = this.gfn_nullToEmpty(this.ds_Rcv_D.getColumn(this.ds_Rcv_D.rowposition,"SLP_DT")); //전표일자
        	var na_slpno = this.gfn_nullToEmpty(this.ds_Rcv_D.getColumn(this.ds_Rcv_D.rowposition,"NA_SLPNO")); //경제통합전표번호
        	var slp_sqno = this.gfn_nullToEmpty(this.ds_Rcv_D.getColumn(this.ds_Rcv_D.rowposition,"SLP_SQNO")); //전표일련번호
        	
        	var search_date_type = this.gfn_nullToEmpty(this.div_search.cbo_date.value); //매출일			
        	var search_date_type_name = this.gfn_nullToEmpty(this.div_search.cbo_date.text); //매출일_텍스트
        	var trade_type = this.gfn_nullToEmpty(this.div_search.cbo_trade_type.value); //거래구분
        	var trade_type_name = this.gfn_nullToEmpty(this.div_search.cbo_trade_type.text); //거래구분_텍스트
        	var rots_ctr_dsc =this.gfn_nullToEmpty(this.div_search.cbo_contract_type.value); //계통계약구분	
        	var rots_ctr_dsc_name =this.gfn_nullToEmpty(this.div_search.cbo_contract_type.text); //계통계약구분_텍스트	
        	var from_date = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        	var to_date = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일
        		
        	var ACTL_BUYPL_NA_TRPL_C = this.gfn_nullToEmpty(this.ds_Rcv_M.getColumn(this.ds_Rcv_M.rowposition,"ACTL_BUYPL_NA_TRPL_C")); //농협사업장(실매입처)
        	var CCLNTNM = this.gfn_nullToEmpty(this.ds_Rcv_M.getColumn(this.ds_Rcv_M.rowposition,"CCLNTNM")); //농협사업장명(실매입처명)	
        	var TRSLPNO = this.gfn_nullToEmpty(this.ds_Rcv_M.getColumn(this.ds_Rcv_M.rowposition,"TRSLPNO")); //매출일자-전표번호	
        	var NA_DVY_PLASH_SLPNO = this.gfn_nullToEmpty(this.ds_Rcv_M.getColumn(this.ds_Rcv_M.rowposition,"NA_DVY_PLASH_SLPNO")); //배송예정서번호	
        		
        	var na_bzplc = this.gfn_nullToEmpty(this.ds_Rcv_M.getColumn(this.ds_Rcv_M.rowposition,"NA_BZPLC")); //경제통합사업장코드
        	var na_team_c = this.gfn_nullToEmpty(this.ds_Rcv_M.getColumn(this.ds_Rcv_M.rowposition,"NA_TEAM_C")); //경제통합팀코드
        	var slp_dt = this.gfn_nullToEmpty(this.ds_Rcv_M.getColumn(this.ds_Rcv_M.rowposition,"SLP_DT")); //전표일자
        	var na_slpno = this.gfn_nullToEmpty(this.ds_Rcv_M.getColumn(this.ds_Rcv_M.rowposition,"NA_SLPNO")); //경제통합전표번호
        	
        	var WRSNM = this.gfn_nullToEmpty(this.ds_Rcv_D.getColumn(this.ds_Rcv_D.rowposition,"WRSNM")); //상품명
        	var NA_WRS_C = this.gfn_nullToEmpty(this.ds_Rcv_D.getColumn(this.ds_Rcv_D.rowposition,"NA_WRS_C")); //상품코드	
        	
        	var TXT_DSC = this.gfn_nullToEmpty(this.ds_Rcv_D.getColumn(this.ds_Rcv_D.rowposition,"TXT_DSC")); //과세구분
        	
        	
        	var CNR_DS_AM = this.gfn_nullToEmpty(this.ds_Rcv_D.getColumn(this.ds_Rcv_D.rowposition,"CNR_DS_AM")); //검수구분금액
        	
        	trace("검수구분금액---->"+CNR_DS_AM);		
        	
        	var param = {
        	p_na_bzplc:na_bzplc, p_na_team_c:na_team_c, p_slp_dt:slp_dt, p_na_slpno:na_slpno, p_slp_sqno:slp_sqno,	
        	TRPL_C:this.getTrplCode(),
        	TRPL_C_TEXT:this.getTrplCodePrint(),
        	search_date_type:search_date_type,
        	search_date_type_name:search_date_type_name,
        	trade_type_name:trade_type_name,
        	rots_ctr_dsc_name:rots_ctr_dsc_name,
        	from_date:from_date,
        	to_date:to_date,
        	trade_type:trade_type,
        	rots_ctr_dsc:rots_ctr_dsc,
        	ACTL_BUYPL_NA_TRPL_C:ACTL_BUYPL_NA_TRPL_C,
        	CCLNTNM:CCLNTNM,
        	TRSLPNO:TRSLPNO,
        	NA_DVY_PLASH_SLPNO:NA_DVY_PLASH_SLPNO,
        	na_bzplc:na_bzplc,
        	na_team_c:na_team_c,
        	slp_dt:slp_dt,
        	na_slpno:na_slpno,
        	WRSNM:WRSNM,
        	NA_WRS_C:NA_WRS_C,
        	TXT_DSC:TXT_DSC,
        	CNR_DS_AM:CNR_DS_AM
        	}

        	
        	
        	/*
        	var param = "userKey="+userKey+
        				" na_bzplc="+na_bzplc+
        				" na_team_c="+na_team_c+
        				" slp_dt="+slp_dt+
        				" na_slpno="+na_slpno+
        				" slp_sqno="+slp_sqno;
        	
        	trace("##COMMISITON##PARAM##->"+param);
        	
        	var sSvcID        = "retrieveCommissionList";//통신아이디
        	var sURL          = "svc::rest/recadv/retrieveCommissionList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_commission=data";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	*/
        	
        	/*세번째 그리드 새창*/	
        	var oArg = param;
        	var sOption = "autosize=true,title=false";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("popId","SCM.RECADV::VAN_DS_SC_0500_P01.xfdl",oArg,sOption,sPopupCallBack);	
        }

        this.div_list_btn_divResize_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        
        /* 실 매입처 마트 돋보기 클릭시*/
        this.div_search_btn_popup_onclick = function(params)
        {
        	var param = {
        				autoType:params,
        				searchCode:this.div_search.edt_na_bzplc_code.value,
        				searchText:this.div_search.edt_na_bzplc_name.value
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
        	
        	//실매입처(마트)
        	if(strId == 'POPUP_SRC_RVOPL_TRPL' && strVal != null){
        		var strValNo = strVal.split(',');		
        		this.div_search.edt_na_bzplc_code.set_value(strValNo[0]); //수요처코드
        		this.div_search.edt_na_bzplc_name.set_value(strValNo[1]); //수요처명
        		
        		this.div_search.rdo_is_na_all.set_value(2); //농협사업장 라디오 박스 변경	
        	}	
        }

        this.div_search_edt_na_bzplc_code_onkeyup = function(obj,e)
        {
        	//코드에 값이 있으면 라디오박스 실매입처(마트)체크
        	
        	var code = this.gfn_nullToEmpty(this.div_search.edt_na_bzplc_code.value);	
        	
        	if(code != null){
        		this.div_search.rdo_is_na_all.set_value(2);
        	}
        	
        	if(e.keycode == 13){
        		this.div_search_btn_popup_onclick(true);
        	}
        }

        /* 디테일 그리드 엑셀 다운로드 */
        this.div_list_btn_gradD_excel_onclick = function(obj,e)
        {
        	//권한사업장 코드
        	var trplC = this.getTrplCode();
        	
        	var search_date_type = this.gfn_nullToEmpty(this.div_search.cbo_date.value); //매출일			
        	var from_date = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        	var to_date = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일		
        	var trade_type = this.gfn_nullToEmpty(this.div_search.cbo_trade_type.value); //거래구분
        	var is_na_all = this.gfn_nullToEmpty(this.div_search.rdo_is_na_all.value); //농협사업장전체
        	//var na_bzplc = this.gfn_nullToEmpty(this.div_search.edt_na_bzplc_name.value); //실매입처
        	var rots_ctr_dsc =this.gfn_nullToEmpty(this.div_search.cbo_contract_type.value); //계통계약구분
        		
        	//var fileName = "검수실적 전표별 디테일 다운로드.xls";//엑셀 파일 이름
        	//엑셀명
        	var title = this.parent.sNm;
        	title = title.replace(/ /gi, '');
        	var fileName = title + "_상세정보_" + this.getDate() + ".xls";	
        	
        	var param = "TRPL_C=" + trplC+				
        				"&search_date_type="+search_date_type+
        				"&from_date="+from_date+
        				"&to_date="+to_date+
        				"&trade_type="+trade_type+		
        				"&rots_ctr_dsc="+rots_ctr_dsc+
        				"&is_na_all="+is_na_all+
        	//			"&na_bzplc="+na_bzplc+
        				"&fileName="+fileName;			
        				
        	var na_bzplc = this.gfn_nullToEmpty(this.ds_Rcv_M.getColumn(this.ds_Rcv_M.rowposition,"NA_BZPLC")); //경제통합사업장코드
        	var na_team_c = this.gfn_nullToEmpty(this.ds_Rcv_M.getColumn(this.ds_Rcv_M.rowposition,"NA_TEAM_C")); //경제통합팀코드
        	var slp_dt = this.gfn_nullToEmpty(this.ds_Rcv_M.getColumn(this.ds_Rcv_M.rowposition,"SLP_DT")); //전표일자
        	var na_slpno = this.gfn_nullToEmpty(this.ds_Rcv_M.getColumn(this.ds_Rcv_M.rowposition,"NA_SLPNO")); //경제통합전표번호
        	var rpy_pla_dt = this.gfn_nullToEmpty(this.ds_Rcv_M.getColumn(this.ds_Rcv_M.rowposition,"RPY_PLA_DT")); //지급예정일
        		
        	var param2 = "&na_bzplc="+na_bzplc+
        				"&na_team_c="+na_team_c+
        				"&slp_dt="+slp_dt+
        				"&na_slpno="+na_slpno+
        				"&rpy_pla_dt="+rpy_pla_dt;
        			
        	trace("##MASTER##PARAM##->"+param+param2);
        	
        	param = encodeURI(encodeURI(param));
        	param2 = encodeURI(encodeURI(param2));

        	//this.div_list.web_downExcelD.set_url(application.gv_server_url+"rest/excel/downloadExcelRecadvSlpDetail?"+param+param2);
        	excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelRecadvSlpDetail?"+param+param2, this);
        	
        }

        /*-----------------------------------------------------------------------------------------*/
        // 페이징처리
        /*-----------------------------------------------------------------------------------------*/
        this.fn_paging = function(vPageNum,objDivNm)
        { 		
        	if(objDivNm == "div_page"){
        		this.ds_pageVO.clearData();  
        		this.ds_Rcv_M.clearData();     //Grid에 Binding된 Dataset명	
        		
        		this.ds_pageVO.addRow(); 
        		
        		var vPageSize   = 50; 	//Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
        		var vTotalCount = 1; 	//전체건수. 화면조회후 리턴받아 사용
        		this.ds_pageVO.setColumn(0,"CURRENT_PAGE",vPageNum); //현재 페이지
        		this.ds_pageVO.setColumn(0,"PAGE_SIZE",vPageSize);
        		this.ds_pageVO.setColumn(0,"TOTAL_ROW_COUNT",vTotalCount);
        		 
        		var argumentObj = "";
        		
        		lsNowPage = vPageNum;//현재페이지 설정 
        		
        		this.fn_search();
        	} else if (objDivNm == "div_page2"){
        		this.ds_pageVO02.clearData();  
        		this.ds_Rcv_D.clearData();     //Grid에 Binding된 Dataset명	
        		
        		this.ds_pageVO02.addRow(); 
        		
        		var vPageSize2   = 20; 	//Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
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
        	
        	//디테일
        	var nLeft = (e.cx/2)-(this.div_list.div_page2.width/2);
        	this.div_list.div_page2.set_left(nLeft);
        	
        }

        
        // 최상단 출력버튼
        this.btn_print_onclick = function(obj,e)
        {
        	var search_date_type = this.gfn_nullToEmpty(this.div_search.cbo_date.value); //매출일			
        	var from_date = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        	var to_date = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일		
        	var trade_type = this.gfn_nullToEmpty(this.div_search.cbo_trade_type.value); //거래구분
        	var is_na_all = this.gfn_nullToEmpty(this.div_search.rdo_is_na_all.value); //농협사업장전체
        	var na_bzplc = this.gfn_nullToEmpty(this.div_search.edt_na_bzplc_code.value); //실매입처	
        	var rots_ctr_dsc =this.gfn_nullToEmpty(this.div_search.cbo_contract_type.value); //계통계약구분	
        	
        	var search_date_type_name = this.gfn_nullToEmpty(this.div_search.cbo_date.text); //매출일_텍스트
        	var trade_type_name = this.gfn_nullToEmpty(this.div_search.cbo_trade_type.text); //거래구분_텍스트
        	var rots_ctr_dsc_name =this.gfn_nullToEmpty(this.div_search.cbo_contract_type.text); //계통계약구분_텍스트
        	
        	var cnfm_yn = this.gfn_nullToEmpty(this.div_search.cbo_cnfm_yn.value); //확인여부
        	var cnfm_yn_name = this.gfn_nullToEmpty(this.div_search.cbo_cnfm_yn.text); //확인여부_텍스트
        	
        	trace(rots_ctr_dsc_name);
        	trace(this.getTrplCodePrint());
        	
        	var param = {
        	TRPL_C:this.getTrplCode(),
        	TRPL_C_TEXT:this.getTrplCodePrint(),
        	search_date_type:search_date_type,
        	search_date_type_name:search_date_type_name,
        	trade_type_name:trade_type_name,
        	rots_ctr_dsc_name:rots_ctr_dsc_name,
        	from_date:from_date,
        	to_date:to_date,
        	trade_type:trade_type,
        	rots_ctr_dsc:rots_ctr_dsc,
        	is_na_all:is_na_all,
        	na_bzplc:na_bzplc,
        	cnfm_yn:cnfm_yn,
        	cnfm_yn_name:cnfm_yn_name	
        	}
        	var ozParam = {
        	sId: 'VAN_DS_SC_0500',
        	sUrl: '/rest/oz/recadv/printRecadvSlpMasterList',
        	paramType: 'param',
        	sParam: param
        	};
        	this.ozViewer(ozParam);	
        }

        /* 디테일 그리드 위 출력 버튼 */
        this.div_list_btn_printD_onclick = function(obj,e)
        {

        	if(this.ds_Rcv_D.rowcount > 0){
        	var search_date_type = this.gfn_nullToEmpty(this.div_search.cbo_date.value); //매출일			
        	var search_date_type_name = this.gfn_nullToEmpty(this.div_search.cbo_date.text); //매출일_텍스트
        	var trade_type = this.gfn_nullToEmpty(this.div_search.cbo_trade_type.value); //거래구분
        	var trade_type_name = this.gfn_nullToEmpty(this.div_search.cbo_trade_type.text); //거래구분_텍스트
        	var rots_ctr_dsc =this.gfn_nullToEmpty(this.div_search.cbo_contract_type.value); //계통계약구분	
        	var rots_ctr_dsc_name =this.gfn_nullToEmpty(this.div_search.cbo_contract_type.text); //계통계약구분_텍스트	
        	var from_date = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        	var to_date = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일
        		
        	var ACTL_BUYPL_NA_TRPL_C = this.gfn_nullToEmpty(this.ds_Rcv_M.getColumn(this.ds_Rcv_M.rowposition,"MNGT_NA_TRPL_C")); //농협사업장(실매입처)
        	var CCLNTNM = this.gfn_nullToEmpty(this.ds_Rcv_M.getColumn(this.ds_Rcv_M.rowposition,"BCLNTNM")); //농협사업장명(실매입처명)	
        	var TRSLPNO = this.gfn_nullToEmpty(this.ds_Rcv_M.getColumn(this.ds_Rcv_M.rowposition,"TRSLPNO")); //매출일자-전표번호	
        	var NA_DVY_PLASH_SLPNO = this.gfn_nullToEmpty(this.ds_Rcv_M.getColumn(this.ds_Rcv_M.rowposition,"NA_DVY_PLASH_SLPNO")); //배송예정서번호	
        	
        	var na_bzplc = this.gfn_nullToEmpty(this.ds_Rcv_M.getColumn(this.ds_Rcv_M.rowposition,"NA_BZPLC")); //경제통합사업장코드
        	var na_team_c = this.gfn_nullToEmpty(this.ds_Rcv_M.getColumn(this.ds_Rcv_M.rowposition,"NA_TEAM_C")); //경제통합팀코드
        	var slp_dt = this.gfn_nullToEmpty(this.ds_Rcv_M.getColumn(this.ds_Rcv_M.rowposition,"SLP_DT")); //전표일자
        	var na_slpno = this.gfn_nullToEmpty(this.ds_Rcv_M.getColumn(this.ds_Rcv_M.rowposition,"NA_SLPNO")); //경제통합전표번호
        	var rpy_pla_dt = this.gfn_nullToEmpty(this.ds_Rcv_M.getColumn(this.ds_Rcv_M.rowposition,"RPY_PLA_DT")); //지급예정일
        	
        	var param = {
        	TRPL_C:this.getTrplCode(),
        	TRPL_C_TEXT:this.getTrplCodePrint(),
        	search_date_type:search_date_type,
        	search_date_type_name:search_date_type_name,
        	trade_type_name:trade_type_name,
        	rots_ctr_dsc_name:rots_ctr_dsc_name,
        	from_date:from_date,
        	to_date:to_date,
        	trade_type:trade_type,
        	rots_ctr_dsc:rots_ctr_dsc,
        	ACTL_BUYPL_NA_TRPL_C:ACTL_BUYPL_NA_TRPL_C,
        	CCLNTNM:CCLNTNM,
        	TRSLPNO:TRSLPNO,
        	NA_DVY_PLASH_SLPNO:NA_DVY_PLASH_SLPNO,
        	na_bzplc:na_bzplc,
        	na_team_c:na_team_c,
        	slp_dt:slp_dt,
        	na_slpno:na_slpno,
        	rpy_pla_dt:rpy_pla_dt
        	}
        	var ozParam = {
        	sId: 'VAN_DS_SC_0500_D',
        	sUrl: '/rest/oz/recadv/printRecadvSlpDetailList',
        	paramType: 'param',
        	sParam: param
        	};
        	this.ozViewer(ozParam);
        	}else{
        		//출력할 상품내역이 없습니다. 전표를 선택해주세요.
        		this.gfn_getMessage("alert", "msg.van_ds_sc_0500.view.print.validation.nodata");		
        	}
        	
        }

        this.div_search_rdo_is_na_all_onitemchanged = function(obj,e)
        {
        	//전체
        	if(this.div_search.rdo_is_na_all.value=='1'){
        		this.div_search.edt_na_bzplc_code.set_value('');
        		this.div_search.edt_na_bzplc_name.set_value('');		
        	}
        }

        this.PopupDiv00_ListBox02_onitemclick = function(obj,e)
        {
        	//trace(e.postvalue);
        	
        	trace(e.itemvalue);
        	
        	//권한사업장 코드
        	var trplC = this.getTrplCode();
        	
        	var search_date_type = this.gfn_nullToEmpty(this.div_search.cbo_date.value); //매출일			
        	var from_date = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        	var to_date = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일		
        	var trade_type = this.gfn_nullToEmpty(this.div_search.cbo_trade_type.value); //거래구분
        	var is_na_all = this.gfn_nullToEmpty(this.div_search.rdo_is_na_all.value); //농협사업장전체
        	var na_bzplc = this.gfn_nullToEmpty(this.div_search.edt_na_bzplc_code.value); //실매입처
        	var rots_ctr_dsc =this.gfn_nullToEmpty(this.div_search.cbo_contract_type.value); //계통계약구분
        	var cnfm_yn = this.gfn_nullToEmpty(this.div_search.cbo_cnfm_yn.value); //확인여부
        	
        	var param = "TRPL_C=" + trplC+				
        				"&search_date_type="+search_date_type+
        				"&from_date="+from_date+
        				"&to_date="+to_date+
        				"&trade_type="+trade_type+		
        				"&rots_ctr_dsc="+rots_ctr_dsc+
        				"&is_na_all="+is_na_all+
        				"&cnfm_yn="+cnfm_yn+
        				"&na_bzplc="+na_bzplc;
        			
        	trace("##MASTER##PARAM##->"+param);
        	
        	param = encodeURI(encodeURI(param));
        	
        	if(e.itemvalue == '1'){		
        		this.fn_excel();
        	}else if(e.itemvalue == '2'){
        		//전표_상품_수수료합계
        		
        		if (this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value) > 11) {
        			//Excel 상품내역 전환시 실적자료가 많은 관계로 조회 일자 기간을 11일 이내로 선택하셔야 합니다.			
        			this.gfn_getMessage("alert", "msg.van_ds_sc_0500.view.excel.validation.text1");
        			
                    if (this.div_search.cal_from.enable == true) this.div_search.cal_from.setFocus(true);
                    return(false);
                }
                //전표 - 상품 - 수수료합계의 형태로 엑셀 문서를 작성합니다.\n\n수수료가 없는 전표도 전표 헤더 및 상세 내역이 작성됩니다.
                this.gfn_getMessage("alert", "msg.van_ds_sc_0500.view.excel.validation.text2");
                
        		//var fileName = "COMMISION_SUM.xls";//엑셀 파일 이름		
        		
        		//엑셀명
        		var title = this.parent.sNm;
        		title = title.replace(/ /gi, '');
        		var fileName = title + "_상품_수수료합계_" + this.getDate() + ".xls";	
        		
        		fileName = encodeURI(encodeURI(fileName));
        		
        		//this.div_list.web_downExcelComSum.set_url(application.gv_server_url+"rest/excel/downloadExcelRecadvSlpCommisionSum?"+param+"&fileName="+fileName);
        		excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelRecadvSlpCommisionSum?"+param+"&fileName="+fileName, this);
        	}else if(e.itemvalue == '3'){
        		//전표_상품_수수료상세
        		
        		if (this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value) > 11) {
        		//"Excel 상세 전환시 실적자료가 많은 관계로 조회 일자 기간을 11일 이내로 선택하셔야 합니다.
                    this.gfn_getMessage("alert", "msg.van_ds_sc_0500.view.excel.validation.text3");
                    if (this.div_search.cal_from.enable == true) this.div_search.cal_from.setFocus(true);
                    return(false);
                }
                //전표 - 상품 - 수수료의 형태로 엑셀 문서를 작성합니다.\n\n수수료가 없는 전표도 전표 헤더 및 상세 내역이 작성됩니다.
                this.gfn_getMessage("alert", "msg.van_ds_sc_0500.view.excel.validation.text2");
        	
        		//var fileName = "COMMISION_DETAIL.xls";//엑셀 파일 이름
        		
        		//엑셀명
        		var title = this.parent.sNm;
        		title = title.replace(/ /gi, '');
        		var fileName = title + "_상품_수수료상세_" + this.getDate() + ".xls";	
        		
        		fileName = encodeURI(encodeURI(fileName));
        				
        		//this.div_list.web_downExcelComDetail.set_url(application.gv_server_url+"rest/excel/downloadExcelRecadvSlpCommisionDetail?"+param+"&fileName="+fileName);
        		excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelRecadvSlpCommisionDetail?"+param+"&fileName="+fileName, this);
        	}
        	this.PopupDiv00.closePopup();
        }

        this.div_search_edt_na_bzplc_name_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.div_search_btn_popup_onclick(true);
        	}
        }

        this.div_list_grd_master_oncellclick = function(obj,e)
        {

        	this.grd_afterFnc1();

        }

        this.div_list_grd_detail_oncellclick = function(obj,e)
        {

        	this.grd_afterFnc2();

        }

        this.frm_VAN_DS_SC_0500_onkeydown = function(obj,e)
        {
        	var key = this.gfn_onkeydown(e);
        	
        	if(key=="F")
        	{
        		this.btn_search_onclick();
        	}
        	
        	if(key=="E")
        	{
        		this.fn_excel();
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
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("oninit", this.form_init, this);
            this.addEventHandler("onkeydown", this.frm_VAN_DS_SC_0500_onkeydown, this);
            this.div_search.rdo_is_na_all.addEventHandler("onitemclick", this.div_search_Radio01_onitemclick, this);
            this.div_search.rdo_is_na_all.addEventHandler("onitemchanged", this.div_search_rdo_is_na_all_onitemchanged, this);
            this.div_search.edt_na_bzplc_code.addEventHandler("onkeyup", this.div_search_edt_na_bzplc_code_onkeyup, this);
            this.div_search.edt_na_bzplc_name.addEventHandler("onkeyup", this.div_search_edt_na_bzplc_name_onkeyup, this);
            this.div_search.btn_popup.addEventHandler("onclick", this.div_search_btn_popup_onclick, this);
            this.btn_print.addEventHandler("onclick", this.btn_print_onclick, this);
            this.btn_print.addEventHandler("onmousemove", this.btn_print_onmousemove, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_search.addEventHandler("onmousemove", this.btn_search_onmousemove, this);
            this.div_list.addEventHandler("onsize", this.div_list_onsize, this);
            this.div_list.btn_divResize.addEventHandler("onclick", this.div_list_btn_divResize_onclick, this);
            this.div_list.grd_master.addEventHandler("oncellclick", this.div_list_grd_master_oncellclick, this);
            this.div_list.grd_detail.addEventHandler("oncellclick", this.div_list_grd_detail_oncellclick, this);
            this.div_list.btn_printD.addEventHandler("onclick", this.div_list_btn_printD_onclick, this);
            this.div_list.btn_gradD_excel.addEventHandler("onclick", this.div_list_btn_gradD_excel_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_excel.addEventHandler("onmousemove", this.btn_excel_onmousemove, this);
            this.PopupDiv00.ListBox02.addEventHandler("onitemclick", this.PopupDiv00_ListBox02_onitemclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0500.xfdl");
        this.loadPreloadList();
       
    };
}
)();
