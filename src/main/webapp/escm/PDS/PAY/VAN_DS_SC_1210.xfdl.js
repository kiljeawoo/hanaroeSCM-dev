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
                this.set_name("frm_VAN_DS_SC_1210");
                this.set_titletext("외상매출 회수내역");
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
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"32\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\"/><Column id=\"SIMP_C_EXPL\" type=\"string\" size=\"32\"/></ColumnInfo>");
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

            obj = new Dataset("ds_dataM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_ADJPL_NM\" type=\"string\" size=\"32\"/><Column id=\"DLAY_ITR\" type=\"string\" size=\"32\"/><Column id=\"OCU_NA_TR_DSC\" type=\"string\" size=\"32\"/><Column id=\"PY_DT\" type=\"string\" size=\"32\"/><Column id=\"TRPL_NA_TEAM_C\" type=\"string\" size=\"32\"/><Column id=\"NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"NA_CRC_CAN_DSC\" type=\"string\" size=\"32\"/><Column id=\"TR_DT\" type=\"string\" size=\"32\"/><Column id=\"DLAYPZ\" type=\"string\" size=\"32\"/><Column id=\"ADJ_BZPL_NA_TEAM_C\" type=\"string\" size=\"32\"/><Column id=\"PY_NA_SLPNO\" type=\"string\" size=\"32\"/><Column id=\"OFS_AM\" type=\"string\" size=\"32\"/><Column id=\"SSDY_PY_AM\" type=\"string\" size=\"32\"/><Column id=\"NA_TR_DSC\" type=\"string\" size=\"32\"/><Column id=\"SLP_DT\" type=\"string\" size=\"32\"/><Column id=\"BYNG_DC_AM\" type=\"string\" size=\"32\"/><Column id=\"BZ_METH_DSC\" type=\"string\" size=\"32\"/><Column id=\"PY_PLA_DT\" type=\"string\" size=\"32\"/><Column id=\"PPY_ITR\" type=\"string\" size=\"32\"/><Column id=\"DLAY_INT_RDU_AM\" type=\"string\" size=\"32\"/><Column id=\"DLAY_INT_PY_AM\" type=\"string\" size=\"32\"/><Column id=\"PY_PRN\" type=\"string\" size=\"32\"/><Column id=\"PY_RQT_DSC\" type=\"string\" size=\"32\"/><Column id=\"PY_PRC_PLA_NA_SLPNO\" type=\"string\" size=\"32\"/><Column id=\"NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"BNK_C\" type=\"string\" size=\"32\"/><Column id=\"PY_STL_DSC\" type=\"string\" size=\"32\"/><Column id=\"BYNG_DC_VAT\" type=\"string\" size=\"32\"/><Column id=\"NA_TEAM_C\" type=\"string\" size=\"32\"/><Column id=\"NA_BLB_DFC_DSC\" type=\"string\" size=\"32\"/><Column id=\"NA_SLPNO\" type=\"string\" size=\"32\"/><Column id=\"TRPL_NA_TEAM_NM\" type=\"string\" size=\"32\"/><Column id=\"OCU_NA_SLPNO\" type=\"string\" size=\"32\"/><Column id=\"ADJPL_NA_TEAM_C\" type=\"string\" size=\"32\"/><Column id=\"ADJ_NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"PPY_DDS\" type=\"string\" size=\"32\"/><Column id=\"IVSAM\" type=\"string\" size=\"32\"/><Column id=\"STL_ACNO\" type=\"string\" size=\"32\"/><Column id=\"PY_PRC_PLA_DT\" type=\"string\" size=\"32\"/><Column id=\"RMK_CNTN\" type=\"string\" size=\"32\"/><Column id=\"NA_BZPL_NM\" type=\"string\" size=\"32\"/><Column id=\"DPRNM\" type=\"string\" size=\"32\"/><Column id=\"NA_ADJPL_C\" type=\"string\" size=\"32\"/><Column id=\"ADJ_NA_BZPL_NM\" type=\"string\" size=\"32\"/><Column id=\"ROTS_CTR_DSC\" type=\"string\" size=\"32\"/><Column id=\"INT_RCKN_DT\" type=\"string\" size=\"32\"/><Column id=\"NA_TRPL_NM\" type=\"string\" size=\"32\"/><Column id=\"ADJPL_NA_TEAM_NM\" type=\"string\" size=\"32\"/></ColumnInfo>");
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

            obj = new Dataset("ds_sum", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"OFS_AM\" type=\"string\" size=\"32\"/><Column id=\"PY_PRN\" type=\"string\" size=\"32\"/><Column id=\"DLAY_ITR\" type=\"string\" size=\"32\"/><Column id=\"SSDY_PY_AM\" type=\"string\" size=\"32\"/><Column id=\"BYNG_DC_VAT\" type=\"string\" size=\"32\"/><Column id=\"BYNG_DC_AM\" type=\"string\" size=\"32\"/><Column id=\"PPY_ITR\" type=\"string\" size=\"32\"/><Column id=\"DLAY_INT_RDU_AM\" type=\"string\" size=\"32\"/><Column id=\"PPY_DDS\" type=\"string\" size=\"32\"/><Column id=\"DLAY_INT_PY_AM\" type=\"string\" size=\"32\"/><Column id=\"IVSAM\" type=\"string\" size=\"32\"/><Column id=\"DLAYPZ\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "203", null, this);
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

            obj = new Div("div_search", "absolute", "0", "29", null, "69", "15", null, this);
            obj.set_taborder("39");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("128");
            obj.set_text("지급일자");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "36", "91", "21", null, null, this.div_search);
            obj.set_taborder("145");
            obj.set_text("사업장");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_from", "absolute", "106", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("146");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("sta_date", "absolute", "206", "10", "10", "21", null, null, this.div_search);
            obj.set_taborder("147");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_to", "absolute", "216", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("148");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Radio("rdo_is_na_all", "absolute", "106", "36", "209", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_is_na_all_innerdataset = new Dataset("rdo_is_na_all_innerdataset", this.div_search.rdo_is_na_all);
            rdo_is_na_all_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">all</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">정산처</Col></Row></Rows>");
            obj.set_innerdataset(rdo_is_na_all_innerdataset);
            obj.set_taborder("149");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("all");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Edit("edt_na_bzplc_code", "absolute", "315", "36", "100", "21", null, null, this.div_search);
            obj.set_taborder("150");
            obj.set_cssclass("WF_Essential");
            obj.set_inputtype("number");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_na_bzplc_name", "absolute", "418", "36", "151", "21", null, null, this.div_search);
            obj.set_taborder("151");
            obj.set_cssclass("WF_Essential");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup", "absolute", "572", "36", "21", "21", null, null, this.div_search);
            obj.set_taborder("152");
            obj.set_cssclass("btn_WF_Searchbtn");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "346", "10", "103", "21", null, null, this.div_search);
            obj.set_taborder("153");
            obj.set_text("계통계약구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_contract_type", "absolute", "449", "10", "144", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("154");
            obj.set_innerdataset("@ds_contract_type");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");

            obj = new Div("div_list", "absolute", "0", "97", null, null, "15", "50", this);
            obj.set_taborder("38");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btn_divResize", "absolute", "331", "0", null, "12", "330", null, this.div_list);
            obj.set_taborder("45");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd", "absolute", "0", "40", null, null, "0", "0", this.div_list);
            obj.set_taborder("46");
            obj.set_binddataset("ds_dataM");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"149\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"121\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"28\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" text=\"지급일자\"/><Cell col=\"2\" text=\"공급처(정산)\"/><Cell col=\"3\" text=\"사업장(정산)\"/><Cell col=\"4\" rowspan=\"2\" text=\"전표번호\"/><Cell col=\"5\" text=\"지급처리예정일자\"/><Cell col=\"6\" text=\"거래일자\"/><Cell col=\"7\" text=\"지급원금\"/><Cell col=\"8\" text=\"매입할인금액\"/><Cell col=\"9\" text=\"상계금액\"/><Cell col=\"10\" text=\"지체상금\"/><Cell col=\"11\" text=\"지체이자감면금액\"/><Cell col=\"12\" text=\"선지급일수\"/><Cell col=\"13\" text=\"지체금리\"/><Cell col=\"14\" text=\"결제계좌번호\"/><Cell col=\"15\" text=\"원전표일자\"/><Cell col=\"16\" text=\"계통계약구분\"/><Cell row=\"1\" col=\"1\" text=\"정정취소\"/><Cell row=\"1\" col=\"2\" text=\"공급처(매출)\"/><Cell row=\"1\" col=\"3\" text=\"사업장(매입)\"/><Cell row=\"1\" col=\"5\" text=\"지급처리예정전표\"/><Cell row=\"1\" col=\"6\" text=\"발생경제통합전표\"/><Cell row=\"1\" col=\"7\" text=\"자체이자지급금액\"/><Cell row=\"1\" col=\"8\" text=\"매입할인부가세\"/><Cell row=\"1\" col=\"9\" text=\"장려금지급금액\"/><Cell row=\"1\" col=\"10\" text=\"출자금\"/><Cell row=\"1\" col=\"11\" text=\"지급결제구분코드\"/><Cell row=\"1\" col=\"12\" text=\"선지급금리\"/><Cell row=\"1\" col=\"13\" text=\"이자기산일자\"/><Cell row=\"1\" col=\"14\" text=\"계리전표일련번호\"/><Cell row=\"1\" col=\"15\" text=\"원전표번호\"/><Cell row=\"1\" col=\"16\" text=\"비고내용\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" expr=\"expr:comp.parent.parent.dateForm(PY_DT)\"/><Cell col=\"2\" text=\"bind:NA_ADJPL_NM\"/><Cell col=\"3\" text=\"bind:NA_BZPL_NM\"/><Cell col=\"4\" rowspan=\"2\" text=\"bind:PY_NA_SLPNO\"/><Cell col=\"5\" displaytype=\"normal\" expr=\"expr:comp.parent.parent.dateForm(PY_PRC_PLA_DT)\"/><Cell col=\"6\" displaytype=\"normal\" text=\"bind:TR_DT\" expr=\"expr:comp.parent.parent.dateForm(TR_DT)\"/><Cell col=\"7\" displaytype=\"number\" text=\"bind:PY_PRN\" mask=\"#,##0\"/><Cell col=\"8\" displaytype=\"number\" text=\"bind:BYNG_DC_AM\" mask=\"#,##0\"/><Cell col=\"9\" displaytype=\"number\" text=\"bind:OFS_AM\" mask=\"#,##0\"/><Cell col=\"10\" displaytype=\"number\" text=\"bind:DLAYPZ\" mask=\"#,##0\"/><Cell col=\"11\" displaytype=\"number\" text=\"bind:DLAY_INT_RDU_AM\" mask=\"#,##0\"/><Cell col=\"12\" text=\"bind:PPY_DDS\"/><Cell col=\"13\" displaytype=\"number\" text=\"bind:DLAY_ITR\" mask=\"#,##0\"/><Cell col=\"14\" style=\"align:center;\" text=\"bind:STL_ACNO\"/><Cell col=\"15\" text=\"bind:OSLIP_DT\"/><Cell col=\"16\" text=\"bind:ROTS_CTR_DSC\"/><Cell row=\"1\" col=\"1\" text=\"bind:NA_CRC_CAN_DSC\"/><Cell row=\"1\" col=\"2\" text=\"bind:NA_TRPL_NM\"/><Cell row=\"1\" col=\"3\" text=\"bind:ADJ_NA_BZPL_NM\"/><Cell row=\"1\" col=\"5\" text=\"bind:PY_PRC_PLA_NA_SLPNO\"/><Cell row=\"1\" col=\"6\" text=\"bind:OCU_NA_SLPNO\"/><Cell row=\"1\" col=\"7\" displaytype=\"number\" text=\"bind:DLAY_INT_PY_AM\" mask=\"#,##0\"/><Cell row=\"1\" col=\"8\" displaytype=\"number\" text=\"bind:BYNG_DC_VAT\" mask=\"#,##0\"/><Cell row=\"1\" col=\"9\" displaytype=\"number\" text=\"bind:SSDY_PY_AM\" mask=\"#,##0\"/><Cell row=\"1\" col=\"10\" displaytype=\"number\" text=\"bind:IVSAM\" mask=\"#,##0\"/><Cell row=\"1\" col=\"11\" text=\"bind:PY_STL_DSC\"/><Cell row=\"1\" col=\"12\" text=\"bind:PPY_ITR\"/><Cell row=\"1\" col=\"13\" displaytype=\"normal\" expr=\"expr:comp.parent.parent.dateForm(INT_RCKN_DT)\"/><Cell row=\"1\" col=\"14\" text=\"bind:PATN_NA_SLPNO\"/><Cell row=\"1\" col=\"15\" text=\"bind:OGN_NA_SLPNO\"/><Cell row=\"1\" col=\"16\" text=\"bind:RMK_CNTN\"/></Band><Band id=\"summary\"><Cell rowspan=\"2\" colspan=\"7\" style=\"align:center;\" text=\"합계\"/><Cell col=\"7\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'PY_PRN')\" mask=\"###,###\"/><Cell col=\"8\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'BYNG_DC_AM')\"/><Cell col=\"9\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'OFS_AM')\"/><Cell col=\"10\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'DLAYPZ')\"/><Cell col=\"11\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'DLAY_INT_RDU_AM')\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell row=\"1\" col=\"7\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'DLAY_INT_PY_AM')\"/><Cell row=\"1\" col=\"8\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'BYNG_DC_VAT')\"/><Cell row=\"1\" col=\"9\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'SSDY_PY_AM')\"/><Cell row=\"1\" col=\"10\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'IVSAM')\"/><Cell row=\"1\" col=\"11\"/><Cell row=\"1\" col=\"12\"/><Cell row=\"1\" col=\"13\"/><Cell row=\"1\" col=\"14\"/><Cell row=\"1\" col=\"15\"/><Cell row=\"1\" col=\"16\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "936", "-1", null, "15", "2", null, this.div_list);
            obj.set_taborder("47");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "936", "35", null, "5", "2", null, this.div_list);
            obj.set_taborder("49");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new WebBrowser("web_downExcelM", "absolute", "588", "14", "35", "14", null, null, this.div_list);
            obj.set_taborder("50");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "118", null, this);
            obj.set_taborder("40");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("41");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear00", "absolute", null, "0", "53", "21", "161", null, this);
            obj.set_taborder("42");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", null, null, "40", "15", "5", this);
            obj.set_taborder("43");
            obj.set_text("외상매출회수내역 화면 <b v='true'>기능문의</b>는 <u v='true'>하나로eSCM고객센터(02-1522-1211)</u>로, <b v='true'>금액문의</b>는 <u v='true'>담당 바이어</u>에게로 부탁드립니다.");
            obj.set_wordwrap("char");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 69, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("39");
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
            		p.set_titletext("외상매출 회수내역");

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
        this.addIncludeScript("VAN_DS_SC_1210.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1210.xfdl", function() {
        //include "lib::comLib.xjs";

        /* form load */
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj,e);
        	
        	var param = [  
         		{code:"CSER_CTR_TPC",   dsName:"ds_contract_type",   selecttype:"A"} 		
            ];

        	this.gfn_setCommonCode(param);
        	
           	var searchParam =
        	{
        		form: this,									
        		param:[
        		{									
        			edit: this.div_search.cal_from,
        			fnc: 'btn_search_onclick'
        		},
        		{									
        			edit: this.div_search.cal_to,
        			fnc: 'btn_search_onclick'
        		}
        		]
        	};
        	this.addEventEnterSearch(searchParam);		
        }

        /* Form Init*/
        this.form_init = function(obj,e)
        {
        }

        //공통코드 데이터셋 onload후 호출할 함수
        this.fn_commonAfterOnload= function()
        {	
        	this.div_search.cbo_contract_type.set_index(0);
        }

        /* 페이지 로딩후 실행부분 */
        this.fn_afterFormOnload = function()
        {	
        	//그리드 nodata
        	this.div_list.grd.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	
        	this.div_search.cal_from.set_value(this.gfn_today("yyyyMMdd"));	
        	this.div_search.cal_to.set_value(this.gfn_today("yyyyMMdd"));
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
        	
        	return true;
        }

        /* search */
        this.btn_search_onclick = function(obj,e)
        {
        	this.ds_dataM.clearData();
        	this.ds_sum.clearData();
        	
        	if(this.fn_validationCheck()){
        	
        	//권한사업장 코드
        	var trplC = this.getTrplCode();
        	
        	var START_DATE = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        	var END_DATE = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일	
        	var ROTS_CTR_DSC = this.gfn_nullToEmpty(this.div_search.cbo_contract_type.value); //계통계약구분
        	var ADJ_NA_BZPLC = "";
        	if (this.div_search.rdo_is_na_all.value == "2") {
        		ADJ_NA_BZPLC = this.gfn_nullToEmpty(this.div_search.edt_na_bzplc_code.value); //정산처
        	}
        	
        	var param ="START_DATE="+START_DATE+
        				" END_DATE="+END_DATE+
        				" ROTS_CTR_DSC="+ROTS_CTR_DSC+
        				" ADJ_NA_BZPLC="+ADJ_NA_BZPLC+
        				" TRPL_C=" + trplC;
        				
        	trace("##MASTER##PARAM##->"+param);	
        			
        	var sSvcID        = "getCreditSaleList";//통신아이디
        	var sURL          = "svc::rest/pds/pay/getCreditSaleList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_dataM=DATASET ds_sum=DS_SUM";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
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
        		if(svcID == "getCreditSaleList"){
        			
        			this.ds_dataM.set_rowposition(1);
        			this.ds_dataM.set_rowposition(0);
        			
        			if(this.ds_dataM.rowcount == 0){				
        				//this.gfn_getMessage("alert", "result.message.search.no.exist.data");								
        			}
        		}
        	}
        }

        this.div_list_btn_divResize_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        this.div_search_edt_data00_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.div_search_btn_popup00_onclick(true);
        	}
        }

        //제조업체 팝업 조회(수요처)
        this.div_search_btn_popup00_onclick = function(params)
        {
        	var param = {
        				autoType:params,
        				searchCode:this.div_search.edt_na_bzplc_code.value,
        				searchText:this.div_search.edt_na_bzplc_name.value
        	};
        	if(typeof params == "boolean"){
        		if(!this.searPopValue(param)){return};
        	}

        	var oArg = {paramMode:"U", dsArg:this.Dataset00, autoPop:param};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("rvopl_trpl","POPUP::POPUP_SRC_RVOPL_TRPL.xfdl",oArg,sOption,sPopupCallBack);
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
        	if(strId == "rvopl_trpl" && strVal != null){
        		var strValNo = strVal.split(',');
        		this.div_search.edt_na_bzplc_code.set_value(strValNo[0]);
        		this.div_search.edt_na_bzplc_name.set_value(strValNo[1]);
        	}
        }

        this.div_search_rdo_is_na_all_onitemchanged = function(obj,e)
        {	
        	if(this.div_search.rdo_is_na_all.value=='all'){	
        		this.div_search.edt_na_bzplc_code.set_readonly(true);
        		this.div_search.edt_na_bzplc_name.set_readonly(true);
        		this.div_search.btn_popup.set_enable(false);
        	} else {		
        		this.div_search.edt_na_bzplc_code.set_readonly(false);
        		this.div_search.edt_na_bzplc_name.set_readonly(false);
        		this.div_search.btn_popup.set_enable(true);		
        	}	
        }

        this.div_search_edt_na_bzplc_code_onkeyup = function(obj,e)
        {
        	this.div_search.rdo_is_na_all.set_value(2); //농협사업장 라디오 박스 변경
        }

        
        /* 엑셀 다운로드 */
        this.btn_excel_onclick = function(obj,e)
        {
        	//권한사업장 코드
        	var trplC = this.getTrplCode();
        		
        	var START_DATE = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        	var END_DATE = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일	
        	var ROTS_CTR_DSC = this.gfn_nullToEmpty(this.div_search.cbo_contract_type.value); //계통계약구분
        	var ADJ_NA_BZPLC = "";
        	if (this.div_search.rdo_is_na_all.value == "2") {
        		ADJ_NA_BZPLC = this.gfn_nullToEmpty(this.div_search.edt_na_bzplc_code.value); //정산처
        	}
        	
        	var fileName = "VAN_DS_SC_1210.xls";//엑셀 파일 이름
        		
        	var param ="START_DATE="+START_DATE+
        				"&END_DATE="+END_DATE+
        				"&ROTS_CTR_DSC="+ROTS_CTR_DSC+
        				"&ADJ_NA_BZPLC="+ADJ_NA_BZPLC+
        				"&TRPL_C=" + trplC
        				"&fileName="+fileName;
        				
        	trace("##MASTER##PARAM##->"+param);

        	//this.div_list.web_downExcelM.set_url(application.gv_server_url+"rest/excel/pds/pay/getCreditSaleList?"+param);
        	excelDownHandler(application.gv_server_url+"rest/excel/pds/pay/getCreditSaleList?"+param, this);
        }

        
        this.btn_print_onclick = function(obj,e)
        {
        	//권한사업장 코드
        	var trplC = this.getTrplCode();
        		
        	var START_DATE = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        	var END_DATE = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일	
        	var ROTS_CTR_DSC = this.gfn_nullToEmpty(this.div_search.cbo_contract_type.value); //계통계약구분
        	var ADJ_NA_BZPLC = "";
        	if (this.div_search.rdo_is_na_all.value == "2") {
        		ADJ_NA_BZPLC = this.gfn_nullToEmpty(this.div_search.edt_na_bzplc_code.value); //정산처
        	}
        	
        	var searchText = "[지급일자]:"+START_DATE+" "+END_DATE+
        				 ", [계통계약구분]:"+this.div_search.cbo_contract_type.text+
        				 ", [사업장]:"+((ADJ_NA_BZPLC == "")?'전체': this.div_search.edt_na_bzplc_code.value+','+this.div_search.edt_na_bzplc_name.value);

        	trace(searchText);

        	var ozParam = {
        		sId: 'VAN_DS_SC_1210',
        		sUrl: '/rest/oz/pds/pay/getCreditSaleList',
        		paramType: 'param',
        		sParam:{
        			TRPL_C_TEXT:searchText,
        			START_DATE:START_DATE,
        			END_DATE:END_DATE,
        			ROTS_CTR_DSC:ROTS_CTR_DSC,
        			ADJ_NA_BZPLC:ADJ_NA_BZPLC,
        			TRPL_C:trplC,
        		}
        	};
        	this.ozViewer(ozParam);
        }

        this.div_search_btn_popup_onclick = function(obj,e)
        {
        	this.div_search_btn_popup00_onclick(true);
        }

        this.dateForm = function(obj)
        {
        	var rval = obj.substr(0,4)+"-"+obj.substr(4,2)+"-"+obj.substr(6,2);
        	return rval;
        }

        this.btn_clear00_onclick = function(obj,e)
        {
        	this.reload();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.form_init, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.div_search.rdo_is_na_all.addEventHandler("onitemclick", this.div_search_Radio01_onitemclick, this);
            this.div_search.rdo_is_na_all.addEventHandler("onitemchanged", this.div_search_rdo_is_na_all_onitemchanged, this);
            this.div_search.edt_na_bzplc_code.addEventHandler("onkeydown", this.div_search_edt_data00_onkeydown, this);
            this.div_search.edt_na_bzplc_name.addEventHandler("onkeydown", this.div_search_edt_data00_onkeydown, this);
            this.div_search.btn_popup.addEventHandler("onclick", this.div_search_btn_popup00_onclick, this);
            this.div_list.btn_divResize.addEventHandler("onclick", this.div_list_btn_divResize_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_print.addEventHandler("onclick", this.btn_print_onclick, this);
            this.btn_clear00.addEventHandler("onclick", this.btn_clear00_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1210.xfdl");
        this.loadPreloadList();
       
    };
}
)();
