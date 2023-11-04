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
                this.set_name("VAN_DS_SC_0360");
                this.set_titletext("업체별 미입고 현황 조회");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_phd_fclt_c", this);
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

            obj = new Dataset("ds_centerUnStr", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"SLPNO\" type=\"string\" size=\"32\"/><Column id=\"STR_PLA_DT\" type=\"string\" size=\"32\"/><Column id=\"NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"CLNTNM\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_C\" type=\"string\" size=\"32\"/><Column id=\"WRSNM\" type=\"string\" size=\"32\"/><Column id=\"PHD_FCLT_C\" type=\"string\" size=\"32\"/><Column id=\"INPD_QT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"BYNG_UPR\" type=\"float\" size=\"8\"/><Column id=\"ODR_QT\" type=\"float\" size=\"8\"/><Column id=\"ODR_UNT_QT\" type=\"float\" size=\"8\"/><Column id=\"ODR_SELPR\" type=\"bigdecimal\" size=\"8\"/><Column id=\"STR_CPL_QT\" type=\"float\" size=\"8\"/><Column id=\"STR_UNT_QT\" type=\"float\" size=\"8\"/><Column id=\"SELPR\" type=\"bigdecimal\" size=\"8\"/><Column id=\"NSTR_QT\" type=\"float\" size=\"8\"/><Column id=\"NSTR_UNT_QT\" type=\"float\" size=\"8\"/><Column id=\"NSTR_PR\" type=\"bigdecimal\" size=\"8\"/><Column id=\"IMPS_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"IMPSRT\" type=\"float\" size=\"8\"/><Column id=\"STR_STSC\" type=\"string\" size=\"32\"/><Column id=\"ODR_FBID_RSNC\" type=\"string\" size=\"32\"/><Column id=\"UN_STR_RSNC\" type=\"string\" size=\"32\"/><Column id=\"ROTS_SPY_PSB_DT\" type=\"string\" size=\"32\"/><Column id=\"BUYER_NM\" type=\"string\" size=\"32\"/><Column id=\"CNF_YN\" type=\"string\" size=\"32\"/><Column id=\"CNF_DTM\" type=\"datetime\" size=\"17\"/><Column id=\"NA_TEAM_C\" type=\"string\" size=\"32\"/><Column id=\"PRC_YN\" type=\"string\" size=\"32\"/><Column id=\"RSP_C_CNTN\" type=\"string\" size=\"32\"/></ColumnInfo>");
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

            obj = new Dataset("ds_un_str_rsnc", this);
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

            obj = new Dataset("ds_sum", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"TOTAL_ODR_QT\" type=\"string\" size=\"32\"/><Column id=\"TOTAL_ODR_UNT_QT\" type=\"string\" size=\"32\"/><Column id=\"TOTAL_ODR_SELPR\" type=\"string\" size=\"32\"/><Column id=\"TOTAL_STR_CPL_QT\" type=\"string\" size=\"32\"/><Column id=\"TOTAL_STR_UNT_QT\" type=\"string\" size=\"32\"/><Column id=\"TOTAL_SELPR\" type=\"string\" size=\"32\"/><Column id=\"TOTAL_NSTR_QT\" type=\"string\" size=\"32\"/><Column id=\"TOTAL_NSTR_UNT_QT\" type=\"string\" size=\"32\"/><Column id=\"TOTAL_NSTR_PR\" type=\"string\" size=\"32\"/><Column id=\"TOTAL_IMPS_AM\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "116", null, this);
            obj.set_taborder("42");
            obj.set_text("Div00");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "95", "15", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", "91", "21", null, null, this.div_search);
            obj.set_taborder("0");
            obj.set_text("검색 사업장");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "439", "10", "91", "21", null, null, this.div_search);
            obj.set_taborder("2");
            obj.set_text("입고예정일");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "15", "62", "79", "21", null, null, this.div_search);
            obj.set_taborder("3");
            obj.set_text("검색범위");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_search_area", "absolute", "105", "62", "210", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_search_area_innerdataset = new Dataset("rdo_search_area_innerdataset", this.div_search.rdo_search_area);
            rdo_search_area_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">상품</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">공급처</Col></Row></Rows>");
            obj.set_innerdataset(rdo_search_area_innerdataset);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_value("0");
            obj.set_index("0");
            obj = new Calendar("cal_from", "absolute", "530", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("27");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static131", "absolute", "630", "10", "10", "21", null, null, this.div_search);
            obj.set_taborder("28");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_to", "absolute", "640", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("29");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Combo("cbo_nacode", "absolute", "106", "10", "303", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("32");
            obj.set_text("-전체-");
            obj.set_innerdataset("ds_NABizPlace");
            obj.set_codecolumn("NA_BZPLC");
            obj.set_datacolumn("SHRT_BZPLNM");
            obj.set_displayrowcount("-1");
            obj.set_index("0");
            obj = new Edit("edt_code", "absolute", "315", "62", "116", "21", null, null, this.div_search);
            obj.set_taborder("34");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("false");
            obj.set_maxlength("25");
            obj.set_inputtype("number");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_name", "absolute", "434", "62", "282", "21", null, null, this.div_search);
            obj.set_taborder("35");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_WRS", "absolute", "719", "62", "21", "21", null, null, this.div_search);
            obj.set_taborder("36");
            obj.set_cssclass("btn_WF_Searchbtn");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "15", "36", "103", "21", null, null, this.div_search);
            obj.set_taborder("37");
            obj.set_text("물류기능");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_phd_fclt_c", "absolute", "106", "36", "91", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("38");
            obj.set_innerdataset("@ds_phd_fclt_c");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj = new Static("Static01", "absolute", "247", "36", "67", "21", null, null, this.div_search);
            obj.set_taborder("39");
            obj.set_text("부과율");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_impsrt", "absolute", "315", "36", "95", "19", null, null, this.div_search);
            obj.set_taborder("40");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "415", "36", "22", "18", null, null, this.div_search);
            obj.set_taborder("41");
            obj.set_text("%");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_SPYPL", "absolute", "719", "62", "21", "21", null, null, this.div_search);
            obj.set_taborder("42");
            obj.set_cssclass("btn_WF_Searchbtn");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "439", "36", "103", "21", null, null, this.div_search);
            obj.set_taborder("43");
            obj.set_text("미입고사유");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_un_str_rsnc", "absolute", "530", "36", "210", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("44");
            obj.set_innerdataset("@ds_un_str_rsnc");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");

            obj = new Div("div_list", "absolute", "0", "123", null, null, "15", "0", this);
            obj.set_taborder("36");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btn_divResize", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd", "absolute", "0", "51", null, null, "0", "39", this.div_list);
            obj.set_taborder("12");
            obj.set_binddataset("ds_centerUnStr");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"87\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"64\"/><Column size=\"97\"/><Column size=\"74\"/><Column size=\"74\"/><Column size=\"75\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"85\"/><Column size=\"86\"/><Column size=\"88\"/><Column size=\"183\"/><Column size=\"89\"/><Column size=\"90\"/><Column size=\"180\"/><Column size=\"100\"/><Column size=\"300\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"28\"/><Row size=\"28\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"입고예정일\"/><Cell col=\"2\" rowspan=\"2\" text=\"공급처코드\"/><Cell col=\"3\" rowspan=\"2\" text=\"공급처명\"/><Cell col=\"4\" rowspan=\"2\" text=\"상품코드\"/><Cell col=\"5\" rowspan=\"2\" text=\"상품명\"/><Cell col=\"6\" rowspan=\"2\" text=\"확인구분\"/><Cell col=\"7\" rowspan=\"2\" displaytype=\"normal\" text=\"미납확인일시\"/><Cell col=\"8\" rowspan=\"2\" text=\"물류기능\"/><Cell col=\"9\" rowspan=\"2\" text=\"입수\"/><Cell col=\"10\" rowspan=\"2\" text=\"단가\"/><Cell col=\"11\" colspan=\"3\" text=\"발주수량\"/><Cell col=\"14\" colspan=\"3\" text=\"입고수량\"/><Cell col=\"17\" colspan=\"3\" text=\"미입고수량\"/><Cell col=\"20\" rowspan=\"2\" text=\"부과대상금액\"/><Cell col=\"21\" rowspan=\"2\" text=\"부과율(%)\"/><Cell col=\"22\" rowspan=\"2\" text=\"입고상태\"/><Cell col=\"23\" rowspan=\"2\" text=\"취급상품정보 발주금지사유\"/><Cell col=\"24\" rowspan=\"2\" text=\"미입고사유\"/><Cell col=\"25\" rowspan=\"2\" text=\"공급가능일\"/><Cell col=\"26\" rowspan=\"2\" text=\"바이어명\"/><Cell col=\"27\" rowspan=\"2\" text=\"진행상태\"/><Cell col=\"28\" rowspan=\"2\" text=\"결과수신\"/><Cell row=\"1\" col=\"11\" text=\"낱개\"/><Cell row=\"1\" col=\"12\" text=\"발주수량(표시)\"/><Cell row=\"1\" col=\"13\" text=\"발주금액\"/><Cell row=\"1\" col=\"14\" text=\"낱개\"/><Cell row=\"1\" col=\"15\" text=\"입고수량(표시)\"/><Cell row=\"1\" col=\"16\" text=\"입고금액\"/><Cell row=\"1\" col=\"17\" text=\"낱개\"/><Cell row=\"1\" col=\"18\" text=\"미입고수량(표시)\"/><Cell row=\"1\" col=\"19\" text=\"미입고금액\"/></Band><Band id=\"body\"><Cell text=\"bind:RN\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:STR_PLA_DT\" mask=\"yyyy-MM-dd\"/><Cell col=\"2\" text=\"bind:NA_TRPL_C\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:CLNTNM\"/><Cell col=\"4\" text=\"bind:NA_WRS_C\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:WRSNM\"/><Cell col=\"6\" displaytype=\"button\" edittype=\"button\" text=\"expr:CNF_YN == 'Y' ? '확인' : '미확인'\"/><Cell col=\"7\" displaytype=\"date\" text=\"bind:CNF_DTM\" mask=\"yyyy-MM-dd HH\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" text=\"bind:PHD_FCLT_C\"/><Cell col=\"9\" text=\"bind:INPD_QT\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BYNG_UPR\" mask=\"#,###.00\"/><Cell col=\"11\" style=\"align:right;\" text=\"bind:ODR_QT\"/><Cell col=\"12\" style=\"align:right;\" text=\"bind:ODR_UNT_QT\"/><Cell col=\"13\" style=\"align:right;\" text=\"bind:ODR_SELPR\"/><Cell col=\"14\" style=\"align:right;\" text=\"bind:STR_CPL_QT\"/><Cell col=\"15\" style=\"align:right;\" text=\"bind:STR_UNT_QT\"/><Cell col=\"16\" style=\"align:right;\" text=\"bind:SELPR\"/><Cell col=\"17\" style=\"align:right;\" text=\"bind:NSTR_QT\"/><Cell col=\"18\" style=\"align:right;\" text=\"bind:NSTR_UNT_QT\"/><Cell col=\"19\" style=\"align:right;\" text=\"bind:NSTR_PR\"/><Cell col=\"20\" style=\"align:right;\" text=\"bind:IMPS_AM\"/><Cell col=\"21\" displaytype=\"number\" style=\"align:right;\" text=\"bind:IMPSRT\" mask=\"#,###.#0\"/><Cell col=\"22\" text=\"bind:STR_STSC\"/><Cell col=\"23\" style=\"align:left;\" text=\"bind:ODR_FBID_RSNC\"/><Cell col=\"24\" style=\"align:left;\" text=\"bind:UN_STR_RSNC\"/><Cell col=\"25\" text=\"bind:ROTS_SPY_PSB_DT\"/><Cell col=\"26\" text=\"bind:BUYER_NM\"/><Cell col=\"27\" text=\"expr:PRC_YN == 'Y' ? '성공' : PRC_YN == 'E' ? '에러' : '진행전'\"/><Cell col=\"28\" text=\"bind:RSP_C_CNTN\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\" style=\"align:center;\" text=\"총합\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'TOTAL_ODR_QT')\" mask=\"###,###\"/><Cell col=\"12\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'TOTAL_ODR_UNT_QT')\" mask=\"###,###\"/><Cell col=\"13\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'TOTAL_ODR_SELPR')\" mask=\"###,###\"/><Cell col=\"14\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'TOTAL_STR_CPL_QT')\" mask=\"###,###\"/><Cell col=\"15\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'TOTAL_STR_UNT_QT')\" mask=\"###,###\"/><Cell col=\"16\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'TOTAL_SELPR')\" mask=\"###,###\"/><Cell col=\"17\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'TOTAL_NSTR_QT')\" mask=\"###,###\"/><Cell col=\"18\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'TOTAL_NSTR_UNT_QT')\" mask=\"###,###\"/><Cell col=\"19\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'TOTAL_NSTR_PR')\" mask=\"###,###\"/><Cell col=\"20\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'TOTAL_IMPS_AM')\" mask=\"###,###\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/><Cell col=\"27\"/><Cell col=\"28\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0%", "15", null, "21", "76.69%", null, this.div_list);
            obj.set_taborder("13");
            obj.set_text("미입고 현황");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_page", "absolute", "28.55%", null, "338", "44", null, "5", this.div_list);
            obj.set_taborder("14");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("9");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "733", "21", "55", "8", null, null, this);
            obj.set_taborder("21");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "788", "0", "15", "491", null, null, this);
            obj.set_taborder("22");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "122", "30", "103", "10", null, null, this);
            obj.set_taborder("31");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "122", "61", "103", "5", null, null, this);
            obj.set_taborder("32");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "36", "408", null, this);
            obj.set_taborder("41");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web_downExcel", "absolute", "214", "8", "25", "14", null, null, this);
            obj.set_taborder("43");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 95, this.div_search,
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
            		p.set_taborder("36");
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
            		p.set_titletext("업체별 미입고 현황 조회");

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
        this.addIncludeScript("VAN_DS_SC_0360.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0360.xfdl", function() {
        //include "lib::comLib.xjs";

        /* form load */
        this.form_onload = function(obj,e)
        {	
        	this.gfn_setInitForm(obj,e);
        		
        	var param = [  
         		{code:"PHD_FCLT_C",   dsName:"ds_phd_fclt_c",   selecttype:"A"},
         		{code:"UN_STR_RSNC",   dsName:"ds_un_str_rsnc",   selecttype:"A"}
         		
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
        	trace("fn_commonAfterOnload");
        	
        	this.div_search.cbo_phd_fclt_c.set_index(0);
        	this.div_search.cbo_un_str_rsnc.set_index(0);

        }

        /* 페이지 로딩후 실행부분 */
        this.fn_afterFormOnload = function()
        {	
        	//그리드 nodata
        	this.div_list.grd.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	
        	this.div_search.cal_from.set_value(this.gfn_today("yyyyMMdd"));	
        	this.div_search.cal_to.set_value(this.gfn_today("yyyyMMdd"));

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
        			
        	if(this.div_search.rdo_search_area.value == 2){		
        		//상품코드를 입력해주세요
        		if(this.gfn_isEmpty(this.div_search.edt_code.value)==""){			
        			this.gfn_getMessage("alert", "validation.message.needs.action",this.gfn_getTextMessage("wrs.code"),this.gfn_getTextMessage("input.name"));
        			this.div_search.edt_code.setFocus(true);	
        			return false;
        		}
        	}
        	if(this.div_search.rdo_search_area.value == 1){		
        		//공급처코드를 입력해주세요
        		if(this.gfn_isEmpty(this.div_search.edt_code.value)==""){			
        			this.gfn_getMessage("alert", "validation.message.needs.action",this.gfn_getTextMessage("spypl.code"),this.gfn_getTextMessage("input.name"));
        			this.div_search.edt_code.setFocus(true);
        			return false;
        		}
        	}	
        	
        	
        	if(this.gfn_isNull(this.div_search.cbo_nacode.value)){
        		this.alert('검색사업장을 선택 하세요');
        		return false;
        	}
        		
        	return true;
        }

        /* search */
        this.btn_search_onclick = function(obj,e)
        {	
        	this.fn_paging(1);// 처음조회시 1페이지를 조회한다.		
        }

        this.fn_search = function(){
        	this.ds_centerUnStr.clearData();
        		
        	if(this.fn_validationCheck()){
        	
        	//권한사업장 코드
        	var trplC = this.getTrplCode();
        	
        	var na_bzplc = this.gfn_nullToEmpty(this.div_search.cbo_nacode.value); //검색사업장	
        	var from_date = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        	var to_date = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일	
        	var search_area = this.gfn_nullToEmpty(this.div_search.rdo_search_area.value); //검색범위
        	var code = this.gfn_nullToEmpty(this.div_search.edt_code.value); //코드(수요처 or 상품)
        	var phd_fclt_c = this.gfn_nullToEmpty(this.div_search.cbo_phd_fclt_c.value); //물류기능
        	var impsrt = this.gfn_nullToEmpty(this.div_search.edt_impsrt.value); //부과율	
        	var un_str_rsnc = this.gfn_nullToEmpty(this.div_search.cbo_un_str_rsnc.value); //미입고사유
        	
        	var param = " na_bzplc="+na_bzplc+
        				" from_date="+from_date+
        				" to_date="+to_date+				
        				" search_area="+search_area+
        				" code="+code+
        				" phd_fclt_c="+phd_fclt_c+
        				" impsrt="+impsrt+
        				" un_str_rsnc="+un_str_rsnc+
        				" TRPL_C=" + trplC;
        				
        	trace("##MASTER##PARAM##->"+param);
        	
        	var sSvcID        = "retrieveCenterUnStrList";//통신아이디
        	var sURL          = "svc::rest/delivery/retrieveCenterUnStrList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "ds_pageVO=ds_pageVO";//보내는데이터셋
        	var sOutDatasets  = "ds_centerUnStr=ds_centerUnStr ds_pageVO=ds_pageVO ds_sum=DS_SUM";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
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
        		if(svcID == "retrieveCenterUnStrList"){		

        			if(this.ds_centerUnStr.rowcount > 0){
        			
        				this.ds_centerUnStr.set_rowposition(1);
        				this.ds_centerUnStr.set_rowposition(0);
        				
        				// 페이지 셋팅
        				var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        				var sPagesize = this.ds_pageVO.getColumn(0, "PAGE_SIZE");
        				
        				trace("sTotal : " + sTotal);
        				trace("sPagesize : " + sPagesize);				

        				this.div_list.div_page.fn_pageSet(sTotal, sPagesize,"grd,div_page",lsNowPage);
        			}else{	
        				this.div_list.div_page.fn_pageSet(0, 0,"grd,div_page",lsNowPage);//페이징 설정
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
        				//this.ds_NABizPlace.setColumn(0,"SHRT_BZPLNM","- 전체 -");
        				};
        			this.div_search.cbo_nacode.set_index(0);
        			}
        		}
        	}
        }

        this.div_search_rdo_search_area_onitemchanged = function(obj,e)
        {
        	if(this.div_search.rdo_search_area.value == 0){
        		//전체
        		this.div_search.edt_code.set_visible(false);
        		this.div_search.edt_name.set_visible(false);
        		this.div_search.btn_WRS.set_visible(false);
        		this.div_search.btn_SPYPL.set_visible(false);
        		
        		this.div_search.edt_code.set_value("");
        		this.div_search.edt_name.set_value("");
        	}else if(this.div_search.rdo_search_area.value == 2){
        		//상품
        		this.div_search.edt_code.set_visible(true);
        		this.div_search.edt_name.set_visible(true);
        		this.div_search.btn_WRS.set_visible(true);
        		this.div_search.btn_SPYPL.set_visible(false);
        		
        		this.div_search.edt_code.set_value("");
        		this.div_search.edt_name.set_value("");
        	}else if(this.div_search.rdo_search_area.value == 1){
        		//공급처
        		this.div_search.edt_code.set_visible(true);
        		this.div_search.edt_name.set_visible(true);
        		this.div_search.btn_WRS.set_visible(false);
        		this.div_search.btn_SPYPL.set_visible(true);
        		
        		this.div_search.edt_code.set_value("");
        		this.div_search.edt_name.set_value("");
        	}	
        }

        this.div_list_grd_oncellclick = function(obj,e)
        {
        	//구분 컬럼의 버튼 눌렀을경우	
        	if(e.col == 6 ){
        		
        		var cnf_yn = this.gfn_nullToEmpty(this.ds_centerUnStr.getColumn(this.ds_centerUnStr.rowposition,"CNF_YN"));	//공급업체확인여부
        		
        		trace("공급업체확인여부 cnf_yn : ---->"+cnf_yn);
        		
        		if(cnf_yn == 'N' || this.gfn_isNull(cnf_yn)){
        			var NA_BZPLC = this.gfn_nullToEmpty(this.ds_centerUnStr.getColumn(this.ds_centerUnStr.rowposition,"NA_BZPLC"));
        			var STR_PLA_DT = this.gfn_nullToEmpty(this.ds_centerUnStr.getColumn(this.ds_centerUnStr.rowposition,"STR_PLA_DT"));
        			var SLPNO = this.gfn_nullToEmpty(this.ds_centerUnStr.getColumn(this.ds_centerUnStr.rowposition,"SLPNO"));
        			
        			var NA_TRPL_C = this.gfn_nullToEmpty(this.ds_centerUnStr.getColumn(this.ds_centerUnStr.rowposition,"NA_TRPL_C"));
        			var NA_WRS_C = this.gfn_nullToEmpty(this.ds_centerUnStr.getColumn(this.ds_centerUnStr.rowposition,"NA_WRS_C"));
        			var NA_TEAM_C = this.gfn_nullToEmpty(this.ds_centerUnStr.getColumn(this.ds_centerUnStr.rowposition,"NA_TEAM_C"));	
        								
        			var oArg = {NA_BZPLC_GRID:NA_BZPLC, STR_PLA_DT_GRID:STR_PLA_DT, SLPNO_GRID:SLPNO, NA_TRPL_C_GRID:NA_TRPL_C, NA_WRS_C_GRID:NA_WRS_C, NA_TEAM_C_GRID:NA_TEAM_C};
        			var sOption = "autosize=true,title=false";
        			var sPopupCallBack = "fn_popupAfter";    
        			this.gfn_openPopup("popId","SCM.DELIVERY::VAN_DS_SC_0360_P00.xfdl",oArg,sOption,sPopupCallBack);
        		}else if (cnf_yn == 'Y'){
        			//alert("확인이 완료된 건입니다.");
        		}
        		
        	}
        }

        this.div_list_btn_divResize_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        //공급처일경우 돋보기
        this.div_search_btn_SPYPL_onclick = function(params)
        {
        	var param = {
        				autoType:params,
        				searchCode:this.div_search.edt_code.value,
        				searchText:this.div_search.edt_name.value
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

        //상품일경우 돋보기
        this.div_search_btn_WRS_onclick = function(params)
        {
        	var param = {
        				autoType:params,
        				searchCode:this.div_search.edt_code.value,
        				searchText:this.div_search.edt_name.value
        	};
        	if(typeof params == "boolean"){
        		if(!this.searPopValue(param)){return};
        	}
        	
        	var oArg = {autoPop:param};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("POPUP_SRC_WRS","POPUP::POPUP_SRC_WRS.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.fn_popupAfter = function(strId,strVal)
        {	
        	trace(" strId : " + strId + " strVal : " + strVal);
        		
        	
        	if(strId == 'POPUP_SRC_RVOPL_TRPL' && strVal != null){
        		//공급처
        		var strValNo = strVal.split(',');
        		this.div_search.edt_code.set_value(strValNo[0]); //공급처코드
        		this.div_search.edt_name.set_value(strValNo[1]); //공급처명
        	}else if(strId == 'POPUP_SRC_WRS' && strVal != null){
        		//상품
        		var strValNo = strVal.split(',');
        		this.div_search.edt_code.set_value(strValNo[0]); //상품코드
        		this.div_search.edt_name.set_value(strValNo[1]); //상품명
        	}	
        }
        this.btn_excel_onclick = function(obj,e)
        {	
        	if(!this.fn_validationCheck()) return;
        	
        	//권한사업장 코드
        	var trplC = this.getTrplCode();
        	
        	var title = this.parent.sNm;
        	title = title.replace(/ /gi, '');
        	var fileName = title + "_" + this.getDate() + ".xls";
        	
        	var na_bzplc = this.gfn_nullToEmpty(this.div_search.cbo_nacode.value); //검색사업장	
        	var from_date = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        	var to_date = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일	
        	var search_area = this.gfn_nullToEmpty(this.div_search.rdo_search_area.value); //검색범위
        	var code = this.gfn_nullToEmpty(this.div_search.edt_code.value); //코드(수요처 or 상품)
        	var phd_fclt_c = this.gfn_nullToEmpty(this.div_search.cbo_phd_fclt_c.value); //물류기능
        	var impsrt = this.gfn_nullToEmpty(this.div_search.edt_impsrt.value); //부과율	
        	var un_str_rsnc = this.gfn_nullToEmpty(this.div_search.cbo_un_str_rsnc.value); //미입고사유
        	
        	var params = "na_bzplc="+na_bzplc+
        				"&from_date="+from_date+
        				"&to_date="+to_date+				
        				"&search_area="+search_area+
        				"&code="+code+
        				"&phd_fclt_c="+phd_fclt_c+
        				"&impsrt="+impsrt+
        				"&un_str_rsnc="+un_str_rsnc+
        				"&TRPL_C=" + trplC+
        				"&fileName=" + fileName;	
        					
        	trace(">>>>>>> excel params : " +  params);
        	
        	params = encodeURI(encodeURI(params));
        	
        	//this.web_downExcel.set_url(application.gv_server_url+"rest/excel/downloadExcelUnStrList?"+params);
        	excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelUnStrList?"+params, this);
        }

        /*-----------------------------------------------------------------------------------------*/
        // 페이징처리
        /*-----------------------------------------------------------------------------------------*/
        this.fn_paging = function(vPageNum)
        { 	  	 
        	this.ds_pageVO.clearData();  
        	this.ds_centerUnStr.clearData();     //Grid에 Binding된 Dataset명	
        	
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
        	
        	trace("div_list_onsize");
        	var nLeft = (e.cx/2)-(this.div_list.div_page.width/2);
        	this.div_list.div_page.set_left(nLeft);
        	
        }
        this.div_search_edt_code_onkeydown = function(obj,e)
        {
        	if(this.div_search.rdo_search_area.value == 0){
        		//전체
        	}else if(this.div_search.rdo_search_area.value == 2){
        		//상품
        		if(e.keycode == 13){
        			this.div_search_btn_WRS_onclick(true);
        		}
        	}else if(this.div_search.rdo_search_area.value == 1){
        		//공급처
        		if(e.keycode == 13){
        			this.div_search_btn_SPYPL_onclick(true);
        		}
        	}	
        }

        this.div_search_edt_name_onkeydown = function(obj,e)
        {
        	if(this.div_search.rdo_search_area.value == 0){
        		//전체
        	}else if(this.div_search.rdo_search_area.value == 2){
        		//상품
        		if(e.keycode == 13){
        			this.div_search_btn_WRS_onclick(true);
        		}
        	}else if(this.div_search.rdo_search_area.value == 1){
        		//공급처
        		if(e.keycode == 13){
        			this.div_search_btn_SPYPL_onclick(true);
        		}
        	}
        }

        this.VAN_DS_SC_0360_onkeydown = function(obj,e)
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
        }

        this.btn_search_onmousemove = function(obj,e)
        {
        	this.gfn_onmousemove(obj, "F");
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
            this.addEventHandler("onkeydown", this.VAN_DS_SC_0360_onkeydown, this);
            this.div_search.rdo_search_area.addEventHandler("onitemchanged", this.div_search_rdo_search_area_onitemchanged, this);
            this.div_search.edt_code.addEventHandler("onkeydown", this.div_search_edt_code_onkeydown, this);
            this.div_search.edt_name.addEventHandler("onkeydown", this.div_search_edt_name_onkeydown, this);
            this.div_search.btn_WRS.addEventHandler("onclick", this.div_search_btn_WRS_onclick, this);
            this.div_search.cbo_phd_fclt_c.addEventHandler("onitemchanged", this.div_search_cbo_PHD_DLR_DSC_onitemchanged, this);
            this.div_search.btn_SPYPL.addEventHandler("onclick", this.div_search_btn_SPYPL_onclick, this);
            this.div_search.cbo_un_str_rsnc.addEventHandler("onitemchanged", this.div_search_cbo_PHD_DLR_DSC_onitemchanged, this);
            this.div_list.addEventHandler("onsize", this.div_list_onsize, this);
            this.div_list.btn_divResize.addEventHandler("onclick", this.div_list_btn_divResize_onclick, this);
            this.div_list.grd.addEventHandler("oncellclick", this.div_list_grd_oncellclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_excel.addEventHandler("onmousemove", this.btn_excel_onmousemove, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_search.addEventHandler("onmousemove", this.btn_search_onmousemove, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0360.xfdl");
        this.loadPreloadList();
       
    };
}
)();
