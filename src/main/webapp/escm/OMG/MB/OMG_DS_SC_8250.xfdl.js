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
                this.set_name("OMG_DS_SC_8250");
                this.set_classname("OMG_DS_SC_7022");
                this.set_titletext("미납 패널티 조회");
                this._setFormPosition(0,0,540,748);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_uptate_cnf_yn", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SPYPL_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"DVYAA_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"NA_DVY_PLASH_SLPNO\" type=\"string\" size=\"32\"/><Column id=\"DVY_PLA_SQNO\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_Rcv_M", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"NA_TEAM_C\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SLP_DT\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"NA_SLPNO\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"NA_CRC_CAN_DSC\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"BCLNTNM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"NA_DVY_PLASH_SLPNO\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CCLNTNM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CNR_DT\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"TRSLPNO\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"RPY_PLA_DT\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"GAM_AM\" type=\"bigdecimal\" size=\"8\" prop=\"\"/><Column id=\"BYNG_VAT\" type=\"bigdecimal\" size=\"8\" prop=\"\"/><Column id=\"TOT_GAM\" type=\"bigdecimal\" size=\"8\" prop=\"\"/><Column id=\"CHRG_TOT\" type=\"bigdecimal\" size=\"8\" prop=\"\"/><Column id=\"VCBT_AM\" type=\"bigdecimal\" size=\"8\" prop=\"\"/><Column id=\"VCBX_AM\" type=\"bigdecimal\" size=\"8\" prop=\"\"/><Column id=\"CBAM\" type=\"bigdecimal\" size=\"8\" prop=\"\"/><Column id=\"NA_TR_DSC\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"ROTS_CTR_DSC\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MNGT_NA_TRPL_C\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"ACTL_BUYPL_NA_TRPL_C\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"COMP_FEE\" type=\"bigdecimal\" size=\"8\" prop=\"\"/><Column id=\"BYNG_SSDY\" type=\"bigdecimal\" size=\"8\" prop=\"\"/><Column id=\"ETR_AMN_FEE\" type=\"bigdecimal\" size=\"8\" prop=\"\"/><Column id=\"ETR_AMN_VAT\" type=\"bigdecimal\" size=\"8\" prop=\"\"/><Column id=\"SLGT_AMN_FEE\" type=\"bigdecimal\" size=\"8\" prop=\"\"/><Column id=\"PHD_FEE\" type=\"bigdecimal\" size=\"8\" prop=\"\"/><Column id=\"PHD_FEE_VAT\" type=\"bigdecimal\" size=\"8\" prop=\"\"/><Column id=\"TRP_SVC_CST\" type=\"bigdecimal\" size=\"8\" prop=\"\"/><Column id=\"TRP_SVCOS_VAT\" type=\"bigdecimal\" size=\"8\" prop=\"\"/><Column id=\"ETC_FEE\" type=\"bigdecimal\" size=\"8\" prop=\"\"/><Column id=\"ETC_FEE_VAT\" type=\"bigdecimal\" size=\"8\" prop=\"\"/><Column id=\"ADJ_NA_BZPLC\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"ADJ_NA_TRPL_C\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"FSRGMN_ENO\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_date", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"string\" size=\"13\"/><Column id=\"name\" type=\"string\" size=\"13\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"name\">발주일자</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"name\">배송예정일자</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_excelBtnList", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">엑셀버튼명1</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">엑셀버튼명2</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">엑셀버튼명3</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"NAME\">엑셀버튼명4</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_centerNpayPnlt", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SPYPL_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"DVYAA_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"DVY_PLA_SQNO\" type=\"string\" size=\"32\"/><Column id=\"ODRPL_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_C\" type=\"string\" size=\"32\"/><Column id=\"WRSNM\" type=\"string\" size=\"32\"/><Column id=\"ODR_DT\" type=\"string\" size=\"32\"/><Column id=\"DVY_PLA_DT\" type=\"string\" size=\"32\"/><Column id=\"ODR_QT\" type=\"float\" size=\"8\"/><Column id=\"BYNG_QT\" type=\"float\" size=\"8\"/><Column id=\"UN_STR_QT\" type=\"float\" size=\"8\"/><Column id=\"PNLT_RTO\" type=\"float\" size=\"8\"/><Column id=\"PNLT_AM\" type=\"float\" size=\"8\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\"/><Column id=\"CNF_YN\" type=\"string\" size=\"32\"/><Column id=\"CNF_DTM\" type=\"date\" size=\"6\"/><Column id=\"ODR_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ODR_SLPNO\" type=\"string\" size=\"32\"/><Column id=\"NA_DVY_PLASH_SLPNO\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dataS", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RVOPL_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"RVOPL_CLNTNM\" type=\"string\" size=\"32\"/><Column id=\"ODRPL_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"ODRPL_CLNTNM\" type=\"string\" size=\"32\"/><Column id=\"DVYAA_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"DVYAA_CLNTNM\" type=\"string\" size=\"32\"/><Column id=\"NA_DVY_PLASH_SLPNO\" type=\"string\" size=\"32\"/><Column id=\"DVY_AM\" type=\"float\" size=\"8\"/><Column id=\"DVY_PLA_DT\" type=\"string\" size=\"32\"/><Column id=\"CSER_CTR_TPC\" type=\"string\" size=\"32\"/><Column id=\"DVY_PLASH_STSC\" type=\"string\" size=\"32\"/><Column id=\"DVY_PLASH_UGAV_YN\" type=\"string\" size=\"32\"/><Column id=\"SPYPL_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"SPYPL_CLNTNM\" type=\"string\" size=\"32\"/><Column id=\"RMK_CNTN\" type=\"string\" size=\"32\"/><Column id=\"TEMP_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dataM", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ODRPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"SHRT_BZPLNM\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"TEAMNM\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"VAN_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_VHC_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"SPY_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_RQR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_QT\" type=\"INT\" size=\"256\"/><Column id=\"ODR_AM\" type=\"INT\" size=\"256\"/><Column id=\"DLVPNSHT_TEMP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_list", "absolute", "0", "402", null, null, "0", "0", this);
            obj.set_taborder("52");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_master", "absolute", "0", "16", null, null, "0", "0", this.div_list);
            obj.set_taborder("0");
            obj.set_binddataset("ds_centerNpayPnlt");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"177\"/><Column size=\"120\"/><Column size=\"140\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"50\" band=\"head\"/><Row size=\"50\" band=\"head\"/><Row size=\"60\"/><Row size=\"60\"/><Row size=\"60\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"상품코드\"/><Cell col=\"2\" text=\"발주일자\"/><Cell col=\"3\" text=\"발주번호\"/><Cell row=\"1\" colspan=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"상품명\"/><Cell row=\"1\" col=\"2\" cssclass=\"Cellgrd_WF_Head\" text=\"배송예정일자\"/><Cell row=\"1\" col=\"3\" cssclass=\"Cellgrd_WF_Head\" text=\"배송예정서번호\"/><Cell row=\"2\" text=\"구분\"/><Cell row=\"2\" col=\"1\" text=\"패널티금액\"/><Cell row=\"2\" col=\"2\" cssclass=\"Cellgrd_WF_Head\" text=\"미납확인일자\"/><Cell row=\"2\" col=\"3\" cssclass=\"Cellgrd_WF_Head\" text=\"미입고수량\"/></Band><Band id=\"body\"><Cell colspan=\"2\" displaytype=\"text\" text=\"bind:NA_WRS_C\"/><Cell col=\"2\" displaytype=\"date\" style=\"align: ;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:ODR_DT\" mask=\"yyyy-MM-dd\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:ODR_SLPNO\"/><Cell row=\"1\" colspan=\"2\" style=\"align:left middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:WRSNM\" wordwrap=\"char\"/><Cell row=\"1\" col=\"2\" displaytype=\"date\" style=\"align: ;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:DVY_PLA_DT\"/><Cell row=\"1\" col=\"3\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:NA_DVY_PLASH_SLPNO\" wordwrap=\"char\"/><Cell row=\"2\" displaytype=\"button\" edittype=\"button\" text=\"bind:CNF_YN\" expr=\"expr:CNF_YN == 'Y' ? '확인' : '미확인'\"/><Cell row=\"2\" col=\"1\" style=\"align:right middle;\" text=\"bind:PNLT_AM\"/><Cell row=\"2\" col=\"2\" displaytype=\"date\" text=\"bind:CNF_DTM\"/><Cell row=\"2\" col=\"3\" style=\"align:right middle;\" text=\"bind:UN_STR_QT\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_searchControl00", "absolute", "0", "0", null, "16", "0", null, this.div_list);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_SearchControlBtn");
            this.div_list.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "0", "540", "402", null, null, this);
            obj.set_taborder("44");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Button("btn_search", "absolute", "15", "333", "510", "49", null, null, this.div_search);
            obj.set_taborder("86");
            obj.set_text("조회");
            obj.set_cssclass("btn_WFSA_SearchBtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_from", "absolute", "157", "16", "174", "54", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("87");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj = new Calendar("cal_to", "absolute", "351", "16", "174", "54", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("88");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj = new Static("Static00", "absolute", "15", "78", "142", "54", null, null, this.div_search);
            obj.getSetter("taborder").set("90");
            obj.set_text("발주번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "140", "142", "54", null, null, this.div_search);
            obj.getSetter("taborder").set("91");
            obj.set_text("발주처");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "15", "202", "142", "54", null, null, this.div_search);
            obj.getSetter("taborder").set("92");
            obj.set_text("배송예정서\r\n번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_odrpl_na_trpl_c", "absolute", "157", "140", "310", "54", null, null, this.div_search);
            obj.set_taborder("93");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn__orpl_na_trpl_c", "absolute", "471", "140", "54", "54", null, null, this.div_search);
            obj.set_taborder("94");
            obj.set_cssclass("btn_WF_SearchBtn");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_odr_slpno", "absolute", "157", "78", "310", "54", null, null, this.div_search);
            obj.set_taborder("95");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_odr_slpno", "absolute", "471", "78", "54", "54", null, null, this.div_search);
            obj.set_taborder("96");
            obj.set_cssclass("btn_WF_SearchBtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_dvy_plash_slpno", "absolute", "471", "202", "54", "54", null, null, this.div_search);
            obj.set_taborder("97");
            obj.set_cssclass("btn_WF_SearchBtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_dvy_plash_slpno", "absolute", "157", "202", "310", "54", null, null, this.div_search);
            obj.set_taborder("98");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "331", "16", "20", "54", null, null, this.div_search);
            obj.getSetter("taborder").set("99");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "15", "264", "142", "54", null, null, this.div_search);
            obj.getSetter("taborder").set("100");
            obj.set_text("구분");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_wordwrap("char");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_confirm", "absolute", "157", "264", "369", "54", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_confirm_innerdataset = new Dataset("rdo_confirm_innerdataset", this.div_search.rdo_confirm);
            rdo_confirm_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">미확인</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">확인</Col></Row></Rows>");
            obj.set_innerdataset(rdo_confirm_innerdataset);
            obj.set_taborder("101");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj.set_value("1");
            obj = new Combo("cbo_date", "absolute", "15", "16", "135", "54", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("102");
            obj.set_innerdataset("@ds_date");
            obj.set_datacolumn("name");
            obj.set_codecolumn("code");

            obj = new Static("Static00", "absolute", "418", "382", "91", "20", null, null, this);
            obj.getSetter("taborder").set("48");
            obj.style.set_background("#dc143c33");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "525", "44", "15", "218", null, null, this);
            obj.getSetter("taborder").set("50");
            obj.set_visible("false");
            obj.style.set_background("#dc143c33");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "317", "318", "88", "15", null, null, this);
            obj.getSetter("taborder").set("51");
            obj.set_visible("false");
            obj.style.set_background("#dc143c33");
            this.addChild(obj.name, obj);

            obj = new Div("div_sche", "absolute", "1110", "0", "540", "1000", null, null, this);
            obj.set_taborder("53");
            obj.set_text("div_pup_van_seq");
            obj.style.set_background("white");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Div("div_search02", "absolute", "0%", "0", null, "154", "0%", null, this.div_sche);
            obj.set_taborder("9");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.div_sche.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "2.78%", "16", null, "54", "74.63%", null, this.div_sche.div_search02);
            obj.getSetter("taborder").set("101");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_sche.div_search02.addChild(obj.name, obj);
            obj = new Button("btn_searchSche", "absolute", "2.78%", "85", null, "49", "2.78%", null, this.div_sche.div_search02);
            obj.set_taborder("102");
            obj.set_text("조회");
            obj.set_cssclass("btn_WFSA_SearchBtn");
            this.div_sche.div_search02.addChild(obj.name, obj);
            obj = new Calendar("cal_sche_to", "absolute", "341", "16", null, "54", "15", null, this.div_sche.div_search02);
            this.div_sche.div_search02.addChild(obj.name, obj);
            obj.set_taborder("103");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static09", "absolute", "58.89%", "16", null, "54", "36.3%", null, this.div_sche.div_search02);
            obj.getSetter("taborder").set("104");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.div_sche.div_search02.addChild(obj.name, obj);
            obj = new Calendar("cal_sche_from", "absolute", "136", "16", null, "54", "219", null, this.div_sche.div_search02);
            this.div_sche.div_search02.addChild(obj.name, obj);
            obj.set_taborder("105");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static00", "absolute", "89.81%", "134", null, "20", "-6.3%", null, this.div_sche);
            obj.getSetter("taborder").set("11");
            obj.set_visible("false");
            obj.style.set_background("#dc143c33");
            this.div_sche.addChild(obj.name, obj);
            obj = new Div("div_master02", "absolute", "0", "154", "540", "846", null, null, this.div_sche);
            obj.set_taborder("12");
            this.div_sche.addChild(obj.name, obj);
            obj = new Static("Static66", "absolute", "0%", "5", null, "38", "60%", null, this.div_sche.div_master02);
            obj.getSetter("taborder").set("6");
            obj.set_text("검색결과 <fc v='#fff44f'><fs v='17'>002</fs></fc>건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_GridCount01");
            this.div_sche.div_master02.addChild(obj.name, obj);
            obj = new Static("Static65", "absolute", "0%", "15", null, "48", "0%", null, this.div_sche.div_master02);
            obj.getSetter("taborder").set("7");
            obj.set_cssclass("sta_WF_Gridbg");
            this.div_sche.div_master02.addChild(obj.name, obj);
            obj = new Grid("grd_sche", "absolute", "0%", "63", null, "782", "0%", null, this.div_sche.div_master02);
            obj.set_taborder("8");
            obj.set_binddataset("ds_dataS");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"300\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"63\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"발주번호\"/><Cell col=\"1\" text=\"발주처명\"/></Band><Band id=\"body\"><Cell style=\"align:center middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:ODRPL_NA_TRPL_C\" wordwrap=\"char\"/><Cell col=\"1\" style=\"align:center middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:ODRPL_CLNTNM\"/></Band></Format></Formats>");
            this.div_sche.div_master02.addChild(obj.name, obj);
            obj = new Button("btn_searchControl02", "absolute", "0", "0", "540", "16", null, null, this.div_sche.div_master02);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_SearchControlBtn");
            this.div_sche.div_master02.addChild(obj.name, obj);

            obj = new Div("div_order", "absolute", "554", "0", "540", "1000", null, null, this);
            obj.set_taborder("54");
            obj.set_text("div_pup_van_seq");
            obj.style.set_background("white");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Div("div_search01", "absolute", "0%", "0", null, "154", "0%", null, this.div_order);
            obj.set_taborder("9");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.div_order.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "2.78%", "16", null, "54", "74.63%", null, this.div_order.div_search01);
            obj.getSetter("taborder").set("101");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_order.div_search01.addChild(obj.name, obj);
            obj = new Button("btn_searchOrder", "absolute", "2.78%", "85", null, "49", "2.78%", null, this.div_order.div_search01);
            obj.set_taborder("102");
            obj.set_text("조회");
            obj.set_cssclass("btn_WFSA_SearchBtn");
            this.div_order.div_search01.addChild(obj.name, obj);
            obj = new Calendar("cal_order_to", "absolute", "341", "16", null, "54", "15", null, this.div_order.div_search01);
            this.div_order.div_search01.addChild(obj.name, obj);
            obj.set_taborder("103");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static09", "absolute", "58.89%", "16", null, "54", "36.3%", null, this.div_order.div_search01);
            obj.getSetter("taborder").set("104");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.div_order.div_search01.addChild(obj.name, obj);
            obj = new Calendar("cal_order_from", "absolute", "136", "16", null, "54", "219", null, this.div_order.div_search01);
            this.div_order.div_search01.addChild(obj.name, obj);
            obj.set_taborder("105");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static00", "absolute", "89.81%", "134", null, "20", "-6.3%", null, this.div_order);
            obj.getSetter("taborder").set("11");
            obj.set_visible("false");
            obj.style.set_background("#dc143c33");
            this.div_order.addChild(obj.name, obj);
            obj = new Div("div_master01", "absolute", "0", "154", "540", "846", null, null, this.div_order);
            obj.set_taborder("12");
            this.div_order.addChild(obj.name, obj);
            obj = new Static("Static66", "absolute", "0%", "5", null, "38", "60%", null, this.div_order.div_master01);
            obj.getSetter("taborder").set("6");
            obj.set_text("검색결과 <fc v='#fff44f'><fs v='17'>002</fs></fc>건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_GridCount01");
            this.div_order.div_master01.addChild(obj.name, obj);
            obj = new Static("Static65", "absolute", "0%", "16", null, "48", "0%", null, this.div_order.div_master01);
            obj.getSetter("taborder").set("7");
            obj.set_cssclass("sta_WF_Gridbg");
            this.div_order.div_master01.addChild(obj.name, obj);
            obj = new Grid("grd_order", "absolute", "0%", "64", null, "782", "0%", null, this.div_order.div_master01);
            obj.set_taborder("8");
            obj.set_binddataset("ds_dataM");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"300\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"63\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"발주번호\"/><Cell col=\"1\" text=\"발주처명\"/></Band><Band id=\"body\"><Cell style=\"align:center middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:ODR_SLPNO\" wordwrap=\"char\"/><Cell col=\"1\" style=\"align:center middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:SHRT_BZPLNM\"/></Band></Format></Formats>");
            this.div_order.div_master01.addChild(obj.name, obj);
            obj = new Button("btn_searchControl01", "absolute", "0", "0", "540", "16", null, null, this.div_order.div_master01);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_SearchControlBtn");
            this.div_order.div_master01.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("52");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 154, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("44");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 154, this.div_sche.div_search02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("9");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_sche.div_search02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 846, this.div_sche.div_master02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("12");

            	}
            );
            this.div_sche.div_master02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 1000, this.div_sche,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("53");
            		p.set_text("div_pup_van_seq");
            		p.style.set_background("white");
            		p.set_visible("false");

            	}
            );
            this.div_sche.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 154, this.div_order.div_search01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("9");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_order.div_search01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 846, this.div_order.div_master01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("12");

            	}
            );
            this.div_order.div_master01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 1000, this.div_order,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("54");
            		p.set_text("div_pup_van_seq");
            		p.style.set_background("white");
            		p.set_visible("false");

            	}
            );
            this.div_order.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 748, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_7022");
            		p.set_titletext("미납 패널티 조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_search.edt_odrpl_na_trpl_c","value","ds_dataM","ODRPL_NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_8250.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_8250.xfdl", function() {
        //include "lib::comLib.xjs";

        /* form load */
        this.form_onload = function(obj,e)
        {
        	this.div_list.grd_master.set_nodatatext("데이터가 없습니다.");
        	this.div_order.div_master01.grd_order.set_nodatatext("데이터가 없습니다.");
        	this.div_sche.div_master02.grd_sche.set_nodatatext("데이터가 없습니다.");
        	
        	//this.gfn_setInitForm(obj,e);
        	var today = this.gfn_today('yyyyMMdd');
        	
        	this.div_search.cal_from.set_value(this.gfn_minusDate(today,7));	
        	this.div_search.cal_to.set_value(today);
        	
        	this.div_order.div_search01.cal_order_from.set_value(this.gfn_minusDate(today, 1));
        	this.div_order.div_search01.cal_order_to.set_value(this.gfn_addDate(today, 7));
        	
        	this.div_sche.div_search02.cal_sche_from.set_value(this.gfn_minusDate(today, 1));
        	this.div_sche.div_search02.cal_sche_to.set_value(this.gfn_addDate(today, 7));
        }

        /* 페이지 로딩후 실행부분 */
        this.fn_afterFormOnload = function()
        {		
        	
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
        	
        	if(this.gfn_isNull(this.div_search.edt_odr_slpno.value)){
        		alert("발주번호를 선택해 주세요");
        		return false;
        	}
        	
        	if(this.gfn_isNull(this.div_search.edt_odrpl_na_trpl_c.value)){
        		alert("발주처를 선택해 주세요");
        		return false;
        	}
        	
        	if(this.gfn_isNull(this.div_search.edt_dvy_plash_slpno.value)){
        		alert("배송예정서 번호를 선택해 주세요");
        		return false;
        	}
        	
        	if(this.gfn_isNull(this.div_search.cbo_date.value)){
        		alert("조회 일자를 선택해 주세요");
        		return false;
        	}
        	
        	if(this.gfn_isNull(this.div_search.rdo_confirm.value)){
        		alert("조회 구분을 선택해 주세요");
        		return false;
        	}
        	
        	return true;
        }

        /* TODO 미입고패널티 메인조회 쿼리 없음*/
        this.div_search_btn_search_onclick = function(obj,e)
        {
        	this.ds_centerNpayPnlt.clearData();
        	/*
        	if(this.fn_validationCheck()){
        	
        		var odr_slpno = this.gfn_nullToEmpty(this.div_search.edt_odr_slpno.value);  //발주번호
        		var odrpl_na_trpl_c = this.gfn_nullToEmpty(this.div_search.edt_odrpl_na_trpl_c.value);  //발주처
        		var dvy_plash_slpno = this.gfn_nullToEmpty(this.div_search.edt_dvy_plash_slpno.value);  //배송예정서번호
        		var confirm = this.gfn_nullToEmpty(this.div_search.rdo_confirm.value);  //구분(확인,미확인)
        		var dateCode = this.gfn_nullToEmpty(this.div_search.cbo_date.value);  //일자구분
        		var from_date = this.gfn_nullToEmpty(this.div_search.cal_from.value);  //조회시작일
        		var to_date = this.gfn_nullToEmpty(this.div_search.cal_to.value);  //조회종료일				
        				
        		param = " odr_slpno="+odr_slpno+
        				" odrpl_na_trpl_c="+odrpl_na_trpl_c+
        				" dvy_plash_slpno="+dvy_plash_slpno+
        				" confirm="+confirm+			
        				" dateCode="+dateCode+
        				" from_date="+from_date+
        				" to_date="+to_date;
        						
        		trace("##MASTER##PARAM##->"+param);
        		
        		var sSvcID        = "retrieveCenterNpayPnltList";//통신아이디
        		var sURL          = "svc::rest/delivery/retrieveCenterNpayPnltList";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_centerNpayPnlt=ds_centerNpayPnlt";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = param;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        	*/
        	alert("개발중");
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", ErrorMsg);
        		return;
        	}else{
        		if(svcID == "retrieveCenterNpayPnltList"){
        			
        			//trace(this.ds_Rcv_M.saveXML());							
        							
        			if(this.ds_centerNpayPnlt.rowcount == 0){				
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");								
        			}else{							
        			}			
        		}else if(svcID == "retrieveVanSeq"){
        			if(this.ds_dataM.rowcount != 0){
        				//초기 클릭 안되어 있게 만듬
        				this.ds_dataM.set_enableevent(false);
        				this.ds_dataM.set_rowposition(-1);
        				this.ds_dataM.set_enableevent(true);
        			}else if(this.ds_dataM.rowcount == 0){
        				alert("조회결과가 없습니다.");
        			}
        		}else if(svcID == "retrieveOdDlvpnshtList"){
        			if(this.ds_dataS.rowcount != 0){
        				//초기 클릭 안되어 있게 만듬
        				this.ds_dataS.set_enableevent(false);
        				this.ds_dataS.set_rowposition(-1);
        				this.ds_dataS.set_enableevent(true);
        				trace(this.ds_dataS.saveXML());
        			}else if(this.ds_dataS.rowcount == 0){
        				alert("조회결과가 없습니다.");
        			}
        		}
        	}
        }

        this.div_list_grd_master_oncellclick = function(obj,e)
        {
        	//구분 컬럼의 버튼 눌렀을경우
        	if(e.col == 12 ){
        		
        		var cnf_yn = this.gfn_nullToEmpty(this.ds_centerNpayPnlt.getColumn(this.ds_centerNpayPnlt.rowposition,"CNF_YN"));	//공급업체확인여부
        		
        		if(cnf_yn == 'N'){
        			var spypl_na_trpl_c = this.gfn_nullToEmpty(this.ds_centerNpayPnlt.getColumn(this.ds_centerNpayPnlt.rowposition,"SPYPL_NA_TRPL_C"));	//공급처경제통합거래처코드
        			var dvyaa_na_trpl_c = this.gfn_nullToEmpty(this.ds_centerNpayPnlt.getColumn(this.ds_centerNpayPnlt.rowposition,"DVYAA_NA_TRPL_C"));  //배송지경제통합거래처코드
        			var na_dvy_plash_slpno = this.gfn_nullToEmpty(this.ds_centerNpayPnlt.getColumn(this.ds_centerNpayPnlt.rowposition,"NA_DVY_PLASH_SLPNO"));  //경제통합배송예정서전표번호
        			var dvy_pla_sqno = this.gfn_nullToEmpty(this.ds_centerNpayPnlt.getColumn(this.ds_centerNpayPnlt.rowposition,"DVY_PLA_SQNO"));  //배송예정일련번호
        			
        			//var cnf_cmeno = application.gv_glnCode; //확인자 번호
        			var cnf_cmeno = "2222"; //확인자 번호
        					
        			var oArg = {SPYPL_NA_TRPL_C_GRID:spypl_na_trpl_c, DVYAA_NA_TRPL_C_GRID:dvyaa_na_trpl_c, NA_DVY_PLASH_SLPNO_GRID:na_dvy_plash_slpno, DVY_PLA_SQNO_GRID:dvy_pla_sqno, CNF_CMENO_POP:cnf_cmeno};
        			var sOption = "autosize=true,title=false";
        			var sPopupCallBack = "fn_popupAfter";    
        			this.gfn_openPopup("popId","OMG.MB::OMG_DS_SC_8250P.xfdl",oArg,sOption,sPopupCallBack);
        		}else if (cnf_yn == 'Y'){
        			alert("확인이 완료된 건입니다.");
        		}
        		
        	}
        }

        /*발주번호 팝업*/
        this.div_search_btn_odr_slpno_onclick = function(obj,e)
        {
        		var nLeft = 0;
        		var nTop = 0;
        		this.div_order.move(nLeft, nTop);
        		this.div_order.bringToFront();
        		this.div_order.set_visible(true);
        		
        		this.gfn_callDetailMenu("div_order", "발주번호 조회", "미입고 패널티^배송예정서;직송등록^");
        }

        /*배송예정서 팝업*/
        this.div_search_btn_dvy_plash_slpno_onclick = function(obj,e)
        {
        	if(this.gfn_isNull(this.div_search.edt_odrpl_na_trpl_c.value)){
        		alert("발주처를 선택해 주세요");
        		return false;
        	}else{
        		var nLeft = 0;
        		var nTop = 0;
        		this.div_sche.move(nLeft, nTop);
        		this.div_sche.bringToFront();
        		this.div_sche.set_visible(true);
        	}
        	this.gfn_callDetailMenu("div_sche", "배송예정서번호 조회", "미입고 패널티^배송예정서;직송등록^");
        }

        this.div_sche_div_search02_btn_searchSche_onclick = function(obj,e)
        {
        	this.fn_searchSche();
        }

        this.div_order_div_search01_btn_searchOrder_onclick = function(obj,e)
        {
        	this.fn_searchOrder();
        }

        /*발주번호 조회*/
        this.fn_searchOrder = function(){
        	this.ds_dataM.clearData();
        	
        	var dvy_rqr_dt_fr = this.gfn_nullToEmpty(this.div_order.div_search01.cal_order_from.value);
        	var dvy_rqr_dt_to = this.gfn_nullToEmpty(this.div_order.div_search01.cal_order_to.value);
        	
        	//TODO: x 넣는이유? 모바일 기준은?
        	var dlvpnsht_temp_yn = "X";
        	
        	var params =  " dvy_rqr_dt_fr=" + dvy_rqr_dt_fr +
        				  " dlvpnsht_temp_yn=" + dlvpnsht_temp_yn +
        				  " dvy_rqr_dt_to=" + dvy_rqr_dt_to;
        	
        	trace(">>>> params : " + params);
        				
        	var sSvcID        = "retrieveVanSeq";//통신아이디
        	var sURL          = "svc::/rest/scm/order/retrieveVanSeq";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_dataM=ds_dataM";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        /*배송예정서 조회*/
        this.fn_searchSche = function(){
        	this.ds_dataS.clearData();
        	
        	var sche_from = this.gfn_nullToEmpty(this.div_sche.div_search02.cal_sche_from.value);
        	var sche_to = this.gfn_nullToEmpty(this.div_sche.div_search02.cal_sche_to.value);
        	
        	//var edt_odrpl_na_trpl_c = this.gfn_nullToEmpty(this.div_search.edt_odrpl_na_trpl_c.value);
        	/* TODO edt_odrpl_na_trpl_c 와 authorityNo 매칭 값이 db에 없을때 처리? */
        	var edt_odrpl_na_trpl_c = "8808983120140";
        	
        	var authorityNo = application.gv_glnCode;
        	var ddly_yn = "0";
        	
        	var params =  	" from_date=" + sche_from 
        					+ " to_date=" + sche_to					
        					+ " odrpl_na_trpl_c=" + edt_odrpl_na_trpl_c
        					+ " authorityNo=" + authorityNo
        					+ " ddly_yn=" + ddly_yn;
        	
        	
        	trace("params : " + params);	
        	
        	var sSvcID        = "retrieveOdDlvpnshtList";//통신아이디
        	var sURL          = "svc::/rest/delivery/retrieveOdDlvpnshtList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_dataS=ds_dataM";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        	
        }

        this.div_order_div_master01_grd_order_oncellclick = function(obj,e)
        {
        	this.div_order.bringToPrev();
        	this.div_order.set_visible(false);
        	
        	var odr_slpno = this.gfn_nullToEmpty(this.ds_dataM.getColumn(this.ds_dataM.rowposition, "ODR_SLPNO")); 		
        		
        	this.div_search.edt_odr_slpno.set_value(odr_slpno);
        	
        	//openMenu에 등록된 Division삭제
        	this.gfn_topMenuBackMobile();
        }

        this.div_sche_div_master02_grd_sche_oncellclick = function(obj,e)
        {
        	this.div_sche.bringToPrev();
        	this.div_sche.set_visible(false);
        	
        	var dvy_plash_slpno = this.gfn_nullToEmpty(this.ds_dataS.getColumn(this.ds_dataS.rowposition, "NA_DVY_PLASH_SLPNO"));
        		
        	this.div_search.edt_dvy_plash_slpno.set_value(dvy_plash_slpno);
        	
        	//openMenu에 등록된 Division삭제
        	this.gfn_topMenuBackMobile();
        }

        this.div_list_btn_searchControl00_onclick = function(obj,e)
        {
        	this.gfn_mobileSearchDivResize(obj, this.div_search, this.div_list);
        }

        this.div_order_div_master01_btn_searchControl01_onclick = function(obj,e)
        {
        	this.gfn_mobileSearchDivResize(obj, this.div_order.div_search01, this.div_order.div_master01);
        }

        this.div_sche_div_master02_btn_searchControl02_onclick = function(obj,e)
        {
        	this.gfn_mobileSearchDivResize(obj, this.div_sche.div_search02, this.div_sche.div_master02);
        }

        this.div_search_btn__orpl_na_trpl_c_onclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_Rcv_M.addEventHandler("onrowposchanged", this.ds_Rcv_M_onrowposchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.div_list.grd_master.addEventHandler("oncellclick", this.div_list_grd_master_oncellclick, this);
            this.div_list.btn_searchControl00.addEventHandler("onclick", this.div_list_btn_searchControl00_onclick, this);
            this.div_search.btn_search.addEventHandler("onclick", this.div_search_btn_search_onclick, this);
            this.div_search.btn__orpl_na_trpl_c.addEventHandler("onclick", this.div_search_btn__orpl_na_trpl_c_onclick, this);
            this.div_search.btn_odr_slpno.addEventHandler("onclick", this.div_search_btn_odr_slpno_onclick, this);
            this.div_search.btn_dvy_plash_slpno.addEventHandler("onclick", this.div_search_btn_dvy_plash_slpno_onclick, this);
            this.div_sche.div_search02.btn_searchSche.addEventHandler("onclick", this.div_sche_div_search02_btn_searchSche_onclick, this);
            this.div_sche.div_master02.grd_sche.addEventHandler("oncellclick", this.div_sche_div_master02_grd_sche_oncellclick, this);
            this.div_sche.div_master02.btn_searchControl02.addEventHandler("onclick", this.div_sche_div_master02_btn_searchControl02_onclick, this);
            this.div_order.div_search01.btn_searchOrder.addEventHandler("onclick", this.div_order_div_search01_btn_searchOrder_onclick, this);
            this.div_order.div_master01.grd_order.addEventHandler("oncellclick", this.div_order_div_master01_grd_order_oncellclick, this);
            this.div_order.div_master01.btn_searchControl01.addEventHandler("onclick", this.div_order_div_master01_btn_searchControl01_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_8250.xfdl");

       
    };
}
)();
