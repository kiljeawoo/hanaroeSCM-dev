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
                this.set_name("VAN_DS_SC_0610");
                this.set_titletext("반품입고확인등록");
                this._setFormPosition(0,0,803,490);
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

            obj = new Dataset("ds_rgd_amn_dsc", this);
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

            obj = new Dataset("ds_retannCnf", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"AJ_DT\" type=\"string\" size=\"32\"/><Column id=\"AJMN_ENO\" type=\"string\" size=\"32\"/><Column id=\"DML_CODE\" type=\"string\" size=\"32\"/><Column id=\"NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"NA_TEAM_C\" type=\"string\" size=\"32\"/><Column id=\"RGD_RG_DT\" type=\"string\" size=\"32\"/><Column id=\"RGD_PLA_NO\" type=\"string\" size=\"32\"/><Column id=\"RGD_SQNO\" type=\"bigdecimal\" size=\"8\"/><Column id=\"NA_WRS_C\" type=\"string\" size=\"32\"/><Column id=\"WRSNM\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_UNT_C\" type=\"string\" size=\"32\"/><Column id=\"BOXPE_AQZ\" type=\"int\" size=\"4\"/><Column id=\"RGD_UPR\" type=\"float\" size=\"8\"/><Column id=\"AJ_UPR\" type=\"float\" size=\"8\"/><Column id=\"RGD_AM\" type=\"float\" size=\"8\"/><Column id=\"RGD_QT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"RGD_VAT\" type=\"float\" size=\"8\"/><Column id=\"BOX_QT\" type=\"float\" size=\"8\"/><Column id=\"PD_YY\" type=\"string\" size=\"32\"/><Column id=\"NA_RGD_RSN_DSC\" type=\"string\" size=\"32\"/><Column id=\"NA_RGD_RSN_DSC_NAME\" type=\"string\" size=\"32\"/><Column id=\"RMK_CNTN\" type=\"string\" size=\"32\"/><Column id=\"BYNG_DFN_TROT_FEE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"dsRowType\" type=\"int\" size=\"4\"/><Column id=\"NA_RGD_STS_DSC\" type=\"string\" size=\"4\"/><Column id=\"ADD_NA_RGD_STS_DSC\" type=\"string\" size=\"4\"/></ColumnInfo>");
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

            obj = new Dataset("ds_confirm", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"string\" size=\"32\"/><Column id=\"name\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"code\">no</Col><Col id=\"name\">-선택-</Col></Row><Row><Col id=\"name\">승인확정</Col><Col id=\"code\">04</Col></Row><Row><Col id=\"code\">06</Col><Col id=\"name\">승인거절</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "28", null, "121", "15", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", "120", "21", null, null, this.div_search);
            obj.set_taborder("127");
            obj.set_text("본/지사");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "36", "120", "21", null, null, this.div_search);
            obj.set_taborder("128");
            obj.set_text("반품요청일");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "517", "10", "120", "21", null, null, this.div_search);
            obj.set_taborder("129");
            obj.set_text("반품의뢰처유형");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "517", "63", "120", "21", null, null, this.div_search);
            obj.set_taborder("130");
            obj.set_text("거래구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_yn_aply_somae", "absolute", "644", "10", "126", "21", null, null, this.div_search);
            obj.set_taborder("131");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "15", "62", "120", "21", null, null, this.div_search);
            obj.set_taborder("132");
            obj.set_text("반품의뢰처");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "517", "88", "127", "21", null, null, this.div_search);
            obj.set_taborder("133");
            obj.set_text("반품상태구분코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "15", "88", "127", "21", null, null, this.div_search);
            obj.set_taborder("134");
            obj.set_text("반품관리구분코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "145", "0", null, "10", "750", null, this.div_search);
            obj.set_taborder("135");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "145", "31", null, "5", "750", null, this.div_search);
            obj.set_taborder("136");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "145", "57", null, "5", "750", null, this.div_search);
            obj.set_taborder("137");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "145", "109", null, "10", "750", null, this.div_search);
            obj.set_taborder("138");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "146", "83", null, "5", "749", null, this.div_search);
            obj.set_taborder("139");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_rgd_amn_dsc", "absolute", "142", "88", "124", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("144");
            obj.set_innerdataset("@ds_rgd_amn_dsc");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_index("-1");
            obj = new Button("btn_mbco", "absolute", "488", "10", "21", "21", null, null, this.div_search);
            obj.set_taborder("147");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "432", "62", "21", "21", null, null, this.div_search);
            obj.set_taborder("150");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_rgd_pla_no", "absolute", "644", "36", "102", "21", null, null, this.div_search);
            obj.set_taborder("152");
            obj.set_inputtype("number");
            obj.set_maxlength("5");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_rgd_pla_no", "absolute", "749", "36", "21", "21", null, null, this.div_search);
            obj.set_taborder("153");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "517", "36", "127", "21", null, null, this.div_search);
            obj.set_taborder("154");
            obj.set_text("반품요청번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_search_date", "absolute", "142", "36", "124", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("155");
            obj.set_cssclass("WF_Essential");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj = new Combo("cbo_na_rgd_sts_dsc", "absolute", "644", "88", "126", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("156");
            obj.set_innerdataset("ds_na_rgd_sts_dsc");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_index("-1");
            obj = new Combo("cbo_tr_dsc", "absolute", "644", "63", "126", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("157");
            obj.set_innerdataset("ds_contract_type");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj = new Edit("edt_rgd_rqt_name", "absolute", "269", "62", "160", "21", null, null, this.div_search);
            obj.set_taborder("160");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_mbco_name", "absolute", "269", "10", "216", "21", null, null, this.div_search);
            obj.set_taborder("163");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("mae_rgd_rqt_team_code", "absolute", "456", "62", "53", "21", null, null, this.div_search);
            obj.set_taborder("164");
            obj.set_enable("false");
            obj.style.setStyleValue("align", "disabled", "right middle");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("mae_rgd_rqt_code", "absolute", "142", "62", "124", "21", null, null, this.div_search);
            obj.set_taborder("165");
            obj.set_enable("false");
            obj.set_maxlength("13");
            obj.set_inputtype("number");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("mae_mbco_code", "absolute", "142", "10", "124", "21", null, null, this.div_search);
            obj.set_taborder("166");
            obj.set_maxlength("13");
            obj.set_inputtype("number");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "646", "29", null, "10", "267", null, this);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "647", "60", null, "5", "266", null, this);
            obj.set_taborder("10");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "923", "149", null, "15", "15", null, this);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "645", "112", null, "5", "268", null, this);
            obj.set_taborder("17");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "922", "304", null, "40", "15", null, this);
            obj.set_taborder("18");
            obj.set_text("40");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("24");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "36", "408", null, this);
            obj.set_taborder("26");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "148", null, null, "15", "0", this);
            obj.set_taborder("0");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "924", "37", null, "5", "0", null, this.div_list);
            obj.set_taborder("176");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_divResize", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("179");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_master", "absolute", "0", "41", null, null, "0", "49", this.div_list);
            obj.set_taborder("212");
            obj.set_binddataset("ds_retannCnf");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"123\"/><Column size=\"210\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"106\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"180\"/><Column size=\"180\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"상품코드\"/><Cell col=\"2\" text=\"상품명\"/><Cell col=\"3\" text=\"단위\"/><Cell col=\"4\" text=\"입수\"/><Cell col=\"5\" text=\"단가\"/><Cell col=\"6\" text=\"조정단가\"/><Cell col=\"7\" text=\"반품상태\"/><Cell col=\"8\" text=\"반품수량\"/><Cell col=\"9\" text=\"반품금액\"/><Cell col=\"10\" text=\"부가세액\"/><Cell col=\"11\" text=\"박스수량\"/><Cell col=\"12\" text=\"생산년도\"/><Cell col=\"13\" text=\"반품사유\"/><Cell col=\"14\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:NA_WRS_C\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:WRSNM\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:NA_WRS_UNT_C\" mask=\"###,###\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BOXPE_AQZ\" mask=\"###,###\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RGD_UPR\" mask=\"#,##0.99\" editlimitbymask=\"none\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"expr:NA_RGD_STS_DSC == '승인대기' ? 'text' : 'none'\" editfilter=\"none\" style=\"align:right;\" text=\"bind:AJ_UPR\" mask=\"#,##0.99\" editdisplay=\"display\" editlimitbymask=\"none\"/><Cell col=\"7\" text=\"bind:NA_RGD_STS_DSC\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RGD_QT\" mask=\"###,###\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RGD_AM\" mask=\"###,###\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:RGD_VAT\" mask=\"###,###\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BOX_QT\" mask=\"###,###\"/><Cell col=\"12\" text=\"bind:PD_YY\"/><Cell col=\"13\" style=\"align:left;\" text=\"bind:NA_RGD_RSN_DSC_NAME\"/><Cell col=\"14\" style=\"align:left;\" text=\"bind:RMK_CNTN\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("edt_hidden_na_rgd_sts_dsc", "absolute", "247", "14", "48", "21", null, null, this.div_list);
            obj.set_taborder("226");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Edit("edt_hidden_chk_function", "absolute", "195", "14", "48", "21", null, null, this.div_list);
            obj.set_taborder("227");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_page", "absolute", "28.55%", null, "338", "44", null, "5", this.div_list);
            obj.set_taborder("228");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_confirmN", "absolute", null, "16", "65", "21", "0", null, this.div_list);
            obj.set_taborder("229");
            obj.set_text("승인거절");
            obj.set_enable("true");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_confirmY", "absolute", null, "16", "65", "21", "67", null, this.div_list);
            obj.set_taborder("230");
            obj.set_text("승인확정");
            obj.set_enable("true");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 121, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
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
            		p.set_titletext("반품입고확인등록");

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
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_0610.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0610.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        			
        var dataDArr = new Array('NA_WRS_C'
        							,'WRSNM'
        							,'NA_WRS_UNT_C'
        							,'BOXPE_AQZ'
        							,'RGD_UPR'
        							,'AJ_UPR'							
        							,'RGD_QT'
        							,'RGD_AM'
        							,'RGD_VAT'
        							,'BOX_QT'
        							,'PD_YY'							
        							,'NA_RGD_RSN_DSC_NAME'
        							,'RMK_CNTN'
        						);

        			

        var retannCnfInfoArr = new Array('edt_rgd_sqno'
        						,'edt_na_wrs_c'
        						,'edt_wrsnm'
        						,'edt_na_wrs_unt_c'
        						,'edt_boxpe_aqz'
        						,'mae_rgd_upr'
        						,'mae_aj_upr'
        						,'mae_rgd_qt'
        						,'mae_rgd_am'
        						,'mae_rgd_vat'
        						,'mae_box_qt'
        						,'edt_pd_yy'
        						,'edt_na_rgd_rsn_dsc'
        						,'edt_rmk_cntn'
        					);
        								
        var retannCnfInfoArr2 = new Array('edt_na_wrs_c'
        						,'edt_wrsnm'
        						,'edt_na_wrs_unt_c'
        						,'edt_boxpe_aqz'
        						,'mae_rgd_upr'
        						,'mae_aj_upr'
        						,'mae_rgd_qt'
        						,'mae_rgd_am'
        						,'mae_rgd_vat'
        						,'mae_box_qt'
        						,'edt_pd_yy'
        						,'edt_na_rgd_rsn_dsc'
        						,'edt_rmk_cntn'
        					);
        					
        /* form load */
        this.form_onload = function(obj,e)
        {	
        	this.gfn_setInitForm(obj,e);
        	
        	var param = [
        		{code:"CSER_CTR_TPC",   dsName:"ds_contract_type", selecttype:"S"},
        		{code:"RGD_AMN_DSC",   dsName:"ds_rgd_amn_dsc", selecttype:"S"},
         		{code:"NA_RGD_STS_DSC",   dsName:"ds_na_rgd_sts_dsc", selecttype:"S"}
            ];

        	this.gfn_setCommonCode(param);
        	
        }

        this.form_init = function(obj,e)
        {
        	
        	//처리대상건수
        	//this.div_list.sta_processingNumber.set_text(this.gfn_setRowCount(this.ds_retannCnf.rowcount));
        	
        	
        	//본/지사 코드/명 
        	//로그인 값에서 가져와야함 임의적으로 셋팅
        	//application.gv_glnCode = "8808983300108"
        	//application.gv_companyName = "(주)대상에프엔에프"
        	
        	this.ds_retannCnf.clearData();
        	
        	//승인확인/거절 버튼 안보이게 함
        	this.div_list.btn_confirmY.set_visible(false);
        	this.div_list.btn_confirmN.set_visible(false);

        	//승인확정/승인거절버튼 색깔 리셋
        	this.div_list.btn_confirmY.set_cssclass("");
        	this.div_list.btn_confirmN.set_cssclass("");
        	
        	
        	this.div_search.mae_mbco_code.set_value(application.gv_glnCode);
        	this.div_search.edt_mbco_name.set_value(application.gv_companyName);
        	
        	//반품요청번호 돋보기 버튼 클릭했는지 여부의 초기화
        	this.div_list.edt_hidden_chk_function.set_value("false");
        	
        	
        	this.div_search.edt_yn_aply_somae.set_value("");//반품의뢰처유형
        	this.div_search.edt_rgd_pla_no.set_value(""); //반품요청번호	
        	this.div_search.mae_rgd_rqt_code.set_value(""); //반품의뢰처코드
        	this.div_search.edt_rgd_rqt_name.set_value(""); //반품의뢰처코드
        	this.div_search.mae_rgd_rqt_team_code.set_value(""); //반품의뢰처코드	
        	this.div_search.cbo_tr_dsc.set_value(""); //거래구분
        	this.div_search.cbo_rgd_amn_dsc.set_value(""); //반품관리구분코드
        	this.div_search.cbo_na_rgd_sts_dsc.set_value(""); //반품상태구분코드
        	
        	
        	
        }

        //공통코드 데이터셋 onload후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        	trace("fn_commonAfterOnload");
        	
        	this.div_search.cbo_tr_dsc.set_index(0);  //거래부분 콤보박스 첫번째항목 선택
        	this.div_search.cbo_na_rgd_sts_dsc.set_index(0); //반품상태구분 콤보박스 첫번째항목 선택
        	this.div_search.cbo_rgd_amn_dsc.set_index(0); //반품관리구분 콤보박스 첫번째항목 선택
        	
        }

        /* 페이지 로딩후 실행부분 */
        this.fn_afterFormOnload = function()
        {	
        	this.btnDisable(this.btn_save);

        	this.div_search.cal_search_date.set_value(this.gfn_today("yyyyMMdd"));	
        	
        	//그리드 nodata
        	this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));	
        	//그리드클릭 이벤트 등록
        	this.div_list.grd_master.addEventHandler("oncellclick", this.grd_afterFnc, this);
        	
        	if(application.gv_mbcoType == 1){
        		//본사		
        		this.div_search.btn_mbco.set_visible(true);
        		
        		this.div_search.mae_mbco_code.set_enable(true);	
        		this.div_search.edt_mbco_name.set_enable(true);
        		this.div_search.btn_mbco.set_enable(true);
        		
        	}else{
        		//지사		
        		this.div_search.btn_mbco.set_visible(false);
        		
        		this.div_search.mae_mbco_code.set_enable(false);	
        		this.div_search.edt_mbco_name.set_enable(false);		
        	}
        	
        }

        /* Validation Check */
        this.fn_validationCheck = function(){
        	
        	//trace(this.gfn_isDate8(this.div_search.cal_search_date.value));
        	
        	//반품요청번호를 입력하세요.
        	if(this.gfn_isEmpty(this.div_search.edt_rgd_pla_no.value) == ""){	
        		this.gfn_getMessage("alert", "msg.van_ds_sc_0610.view.search.validation.rgdplano");
        		return false;		
        	}
        	
        	//반품요청번호를 다시 조회 하세요.
        	if( this.div_list.edt_hidden_chk_function.value == "false" ) {
                 this.gfn_getMessage("alert", "msg.van_ds_sc_0610.view.search.validation.rgdplano.popupYN");
                 return false;
            }
        	
        	if(!this.gfn_isEmpty(this.div_search.cbo_na_rgd_sts_dsc.value)){
        		
        		alert("반품상태구분코드를 선택하세요.");
        		return false;
        	}
        	
        	/*
        	if(!this.gfn_isDate8(this.div_search.cal_search_date.value)){
        		
        		//반품예정일자를 확인하세요
        		this.gfn_getMessage("alert", "msg.van_ds_sc_0610.view.search.validation.searchdate");
        		return false;
        	}
        	
        	
        	if(!this.gfn_isDate8(this.div_search.cal_search_date.value)){
        		
        		//반품예정일자를 확인하세요
        		this.gfn_getMessage("alert", "msg.van_ds_sc_0610.view.search.validation.searchdate");
        		return false;
        	}
        	
        		
        	//사용자의 반품처정보에 오류가 있습니다. 사용자정보를 확인하세요.
        	if(this.gfn_isEmpty(this.div_search.mae_mbco_code.value) == ""){		
        		this.gfn_getMessage("alert", "msg.van_ds_sc_0610.view.search.validation.usr");
        		return false;
        	}
        		
        	//반품의뢰처를 확인하세요.
        	if(this.gfn_isEmpty(this.div_search.mae_rgd_rqt_code.value) == "" && this.gfn_isEmpty(this.div_search.edt_rgd_rqt_name.value) == ""){		
        		this.gfn_getMessage("alert", "msg.van_ds_sc_0610.view.search.validation.rgdrqt");
        	return false;		
        	}	
        	
        	//반품관리 구분코드가 반품불가인 경우에는 반품이 불가합니다.
        	if(this.div_search.cbo_rgd_amn_dsc.value == "1"){	
        		this.gfn_getMessage("alert", "msg.van_ds_sc_0610.view.search.validation.rgdamndsc");
        		return false;		
        	}
        	*/
        	
        	return true;
        }

        /* 저장시 Check */
        this.fn_SaveCheck = function(){

        	//반품관리 구분코드가 반품불가인 경우에는 반품이 불가합니다.
        	if(this.div_search.cbo_rgd_amn_dsc.value == "1"){	
        		this.gfn_getMessage("alert", "msg.van_ds_sc_0610.view.search.validation.rgdamndsc");
        		return false;	
        	}
        	
        	/*반품상태구분코드가 02(승인대기)가 아닐 경우 조회만 가능*/
        	/*
        	if(this.div_search.cbo_na_rgd_sts_dsc.value == "03"){	
        		//반품상태구분코드를 확인하세요. [반품확인] 상태입니다.
        		this.gfn_getMessage("alert", "msg.van_ds_sc_0610.view.search.validation.nargdstsdsc03");
        		return false;	
        	}else if(this.div_search.cbo_na_rgd_sts_dsc.value == "05"){
        		//반품상태구분코드를 확인하세요. [반품확정] 상태입니다.
        		this.gfn_getMessage("alert", "msg.van_ds_sc_0610.view.search.validation.nargdstsdsc05");
        		return false;
        	}else if(this.div_search.cbo_na_rgd_sts_dsc.value == "06"){
        		//반품상태구분코드를 확인하세요. [승인거절] 상태입니다.
        		this.gfn_getMessage("alert", "msg.van_ds_sc_0610.view.search.validation.nargdstsdsc06");
        		return false;
        	}
        	*/
        	
        	/*반품상태구분코드가 02(승인대기)가 아닐 경우 조회만 가능*/
        	if(this.div_search.cbo_na_rgd_sts_dsc.value != "02"){
        		//반품상태구분코드가 승인대기가 아닐 경우 조회만 가능합니다. 반품상태구분코드를 변경해주세요.
        		this.gfn_getMessage("alert", "msg.van_ds_sc_0610.view.search.validation.nargdstsdsc");
        		return false;		
        	}
        	
        	//히든값 - 반품상태구분코드가 02(승인대기)이 아닐 경우 조회만 가능
        	if(this.div_list.edt_hidden_na_rgd_sts_dsc.value != "02"){
        		//반품상태구분코드가 반품예정이 아닐 경우 조회만 가능합니다. 반품상태구분코드를 변경해주세요.
        		this.gfn_getMessage("alert", "msg.van_ds_sc_0610.view.search.validation.nargdstsdsc");	
        		return false;		
        	}
        	
        	
        	//승인대기시에 승인확인을 안했을 경우 저장이 안됨.
        	if(this.ds_retannCnf.rowcount > 0){
        		
        		for (var i=0; i < this.ds_retannCnf.rowcount ;i++)			
        		{				
        			if (this.ds_retannCnf.getColumn(i,"ADD_NA_RGD_STS_DSC") == 'no'){					
        				//승인확정/거절 버튼 선택을 해주세요.
        				this.gfn_getMessage("alert", "msg.van_ds_sc_0610.view.search.validation.confirm");					
        				return;
        			}			
        			//this.ds_retannCnf.setColumn(i,"NA_RGD_STS_DSC",this.ds_retannCnf.getColumn(i,"ADD_NA_RGD_STS_DSC")); //승인확인의 값을 반품상태에 넣음.
        			trace(this.ds_retannCnf.getColumn(i,"ADD_NA_RGD_STS_DSC"));
        		}
        	}
        	
        	//저장하시겠습니까?
        	if(this.gfn_getMessage("confirm", "msg.isSave")){
        		return true;
        	};
        	
        }

        /*Grid Init*/
        this.fn_init = function(){
        	this.ds_retannCnf.clearData();
        	//this.btn_clear_onclick(); //입력정보 init
        }

        /* search */
        this.fn_search = function(){
        	this.fn_init();
        		
        	if(this.fn_validationCheck()){
        		
        		
        		var mbco_code = this.gfn_nullToEmpty(this.div_search.mae_mbco_code.value); //본/지사코드
        		var yn_aply_somae = this.gfn_nullToEmpty(this.div_search.edt_yn_aply_somae.value); //반품의뢰처유형		
        		var search_date = this.gfn_nullToEmpty(this.div_search.cal_search_date.value); //반품요청일
        		var rgd_pla_no = this.gfn_nullToEmpty(this.div_search.edt_rgd_pla_no.value); //반품요청번호
        		var rgd_rqt_code = this.gfn_nullToEmpty(this.div_search.mae_rgd_rqt_code.value); //반품의뢰처코드
        		var tr_dsc = this.gfn_nullToEmpty(this.div_search.cbo_tr_dsc.value); //거래구분
        		var rgd_amn_dsc = this.gfn_nullToEmpty(this.div_search.cbo_rgd_amn_dsc.value); //반품관리구분코드
        		var na_rgd_sts_dsc = this.gfn_nullToEmpty(this.div_search.cbo_na_rgd_sts_dsc.value); //반품상태구분코드
        				
        		//테스트 데이터
        		from_date = "20150504"
        		to_date = "20150504"		
        		
        		var param = " mbco_code="+mbco_code+
        					" yn_aply_somae="+yn_aply_somae+
        					" search_date="+search_date+
        					" rgd_pla_no="+rgd_pla_no+
        					" rgd_rqt_code="+rgd_rqt_code+
        					" tr_dsc="+tr_dsc+
        					" rgd_amn_dsc="+rgd_amn_dsc+
        					" na_rgd_sts_dsc="+na_rgd_sts_dsc;
        					
        		trace("##MASTER##PARAM##->"+param);	
        		
        		var sSvcID        = "retrieveCnfList";//통신아이디
        		var sURL          = "svc::rest/retann/retrieveCnfList";// 호출할 서버 페이지 주소
        		var sInDatasets   = "ds_pageVO=ds_pageVO";//보내는데이터셋
        		var sOutDatasets  = "ds_retannCnf=ds_retannCnf ds_pageVO=ds_pageVO";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = param;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        		
        		/* 자동 파라미터 */		
        		/*
        		var json = this.getParamJson(this.components, true);
        		json.all
        		
        		if(json.all == true){
        			json.all = 'Y'
        		}else{
        			json.all = 'N'
        		}	
        		var s = this.getParam(this.div_search, true);
        		*/	
        	}
        }

        
        /* 조회 버튼 클릭시*/
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_paging(1);// 처음조회시 1페이지를 조회한다.	
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", ErrorMsg);
        		return;
        	}else{
        		if(svcID == "retrieveCnfList"){										
        			//처리대상건수
        			//this.div_list.sta_processingNumber.set_text(this.gfn_setRowCount(this.ds_retannCnf.rowcount));			
        			//반품상태구분코드 히든값
        			var hidden_na_rgd_sts_dsc = this.div_list.edt_hidden_na_rgd_sts_dsc.set_value(this.div_search.cbo_na_rgd_sts_dsc.value);
        			
        			//trace(this.ds_retannCnf.saveXML());
        			//this.div_search.cbo_na_rgd_sts_dsc.set_index(0); //반품상태구분 콤보박스 첫번째항목 선택
        			
        			this.div_list.btn_confirmY.set_visible(false);
        			this.div_list.btn_confirmN.set_visible(false);
        					
        			if(this.ds_retannCnf.rowcount > 0){
        							
        				// 승인상태컬럼 활성화/비활성화
        				if(this.ds_retannCnf.getColumn(0, "NA_RGD_STS_DSC")=="승인대기"){
        					
        					//this.div_list.grd_master.setRealColSize(8, 0)
        					
        					//승인확정/승인거절버튼 색깔 리셋
        					this.div_list.btn_confirmY.set_cssclass("");
        					this.div_list.btn_confirmN.set_cssclass("");
        	
        					//승인확인/거절 버튼 보이게 함
        					this.div_list.btn_confirmY.set_visible(true);
        					this.div_list.btn_confirmN.set_visible(true);
        				}else{
        				
        					//승인확정/승인거절버튼 색깔 리셋
        					this.div_list.btn_confirmY.set_cssclass("");
        					this.div_list.btn_confirmN.set_cssclass("");
        					
        					//승인확인/거절 버튼 안보이게 함
        					this.div_list.btn_confirmY.set_visible(false);
        					this.div_list.btn_confirmN.set_visible(false);
        				}
        				
        			
        				// 페이지 셋팅
        				var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        				var sPagesize = this.ds_pageVO.getColumn(0, "PAGE_SIZE");				

        				this.div_list.div_page.fn_pageSet(sTotal, sPagesize,"grd_master,div_page",lsNowPage);
        				
        				//this.form_init();
        			}else{	
        				this.div_list.div_page.fn_pageSet(0, 0,"grd_master,div_page",lsNowPage);//페이징 설정
        			}
        		}
        		
        		if(svcID == "saveCnf"){
        			this.gfn_getMessage("alert", "result.message.save.success");
        			//this.fn_search();
        			//초기화
        			this.form_init();
        		}
        	}
        }

        /*반품요청번호 돋보기 클릭시*/
        this.div_search_btn_rgd_pla_no_onclick = function(params)
        {	
        	
        	if(params == true){
        		if(!this.gfn_isEmpty(this.div_search.edt_rgd_pla_no.value)){
        			
        			alert("반품요청번호를 입력해주세요.");
        			return false;
        		}
        	}
        	if(!this.gfn_isEmpty(this.div_search.mae_mbco_code.value)){
        		
        		alert("본/지사코드를 입력해주세요.");
        		return false;
        	}
        	if(!this.gfn_isEmpty(this.div_search.cal_search_date.value)){
        	
        	alert("반품요청일을 입력해주세요.");
        	return false;
        	}
        	
        	var mbco_code = this.gfn_nullToEmpty(this.div_search.mae_mbco_code.value); //본/지사코드
        	var rgd_pla_no = this.gfn_nullToEmpty(this.div_search.edt_rgd_pla_no.value); //반품요청번호
        	var search_date = this.gfn_nullToEmpty(this.div_search.cal_search_date.value); //반품요청일
        	
        	var param = {
                    autoType:params,
                    searchCode:mbco_code,
                    searchText:rgd_pla_no,
                    p_rgd_pla_no:rgd_pla_no,
                    p_mbco_code:mbco_code,
                    search_date:search_date
        	};
        	
        	//var oArg = {p_rgd_pla_no:rgd_pla_no,p_mbco_code:mbco_code};
        	var oArg = {autoPop:param};
        	var sOption = "autosize=true,title=false";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("VAN_DS_SC_0610_P00","SCM.RETANN::VAN_DS_SC_0610_P00.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.grd_afterFnc = function(obj,e)
        {
        /*
        	if(e.reason == 51)
        	{      
              this.ds_retannCnf.set_enableevent(false);
              this.ds_retannCnf.set_rowposition(-1);
              this.ds_retannCnf.set_enableevent(true);
              return;
           }
        */   
           
           /*
        	this.div_list.edt_rgd_sqno.set_value(this.ds_retannCnf.getColumn(this.ds_retannCnf.rowposition,"RGD_SQNO"));
           	this.div_list.edt_na_wrs_c.set_value(this.ds_retannCnf.getColumn(this.ds_retannCnf.rowposition,"NA_WRS_C"));
        	this.div_list.edt_wrsnm.set_value(this.ds_retannCnf.getColumn(this.ds_retannCnf.rowposition,"WRSNM"));	
        	this.div_list.edt_na_wrs_unt_c.set_value(this.ds_retannCnf.getColumn(this.ds_retannCnf.rowposition,"NA_WRS_UNT_C"));	
        	this.div_list.edt_boxpe_aqz.set_value(this.ds_retannCnf.getColumn(this.ds_retannCnf.rowposition,"BOXPE_AQZ"));	
        	this.div_list.mae_rgd_upr.set_value(this.ds_retannCnf.getColumn(this.ds_retannCnf.rowposition,"RGD_UPR"));	
        	this.div_list.mae_aj_upr.set_value(this.ds_retannCnf.getColumn(this.ds_retannCnf.rowposition,"AJ_UPR"));	
        	this.div_list.mae_rgd_qt.set_value(this.ds_retannCnf.getColumn(this.ds_retannCnf.rowposition,"RGD_QT"));
        	this.div_list.mae_rgd_am.set_value(this.ds_retannCnf.getColumn(this.ds_retannCnf.rowposition,"RGD_AM"));
        	this.div_list.mae_rgd_vat.set_value(this.ds_retannCnf.getColumn(this.ds_retannCnf.rowposition,"RGD_VAT"));
        	this.div_list.mae_box_qt.set_value(this.ds_retannCnf.getColumn(this.ds_retannCnf.rowposition,"BOX_QT")); 
        	this.div_list.edt_pd_yy.set_value(this.ds_retannCnf.getColumn(this.ds_retannCnf.rowposition,"PD_YY")); 
        	this.div_list.edt_na_rgd_rsn_dsc.set_value(this.ds_retannCnf.getColumn(this.ds_retannCnf.rowposition,"NA_RGD_RSN_DSC_NAME")); 
        	this.div_list.edt_rmk_cntn.set_value(this.ds_retannCnf.getColumn(this.ds_retannCnf.rowposition,"RMK_CNTN")); 
        	*/
           
        }

        /*입력정보 박스 초기화*/
        /*
        this.btn_clear_onclick = function(obj:Button,  e:nexacro.ClickEventInfo)
        {
        	for(var i = 0; i < retannCnfInfoArr.length; i++){		
        		var obj = retannCnfInfoArr[i];
        		if(obj.indexOf('mae') > -1){
        			eval("this.div_list."+retannCnfInfoArr[i]+".set_value(0);");
        		}else if(obj.indexOf('edt') > -1){
        			eval("this.div_list."+retannCnfInfoArr[i]+".set_value('');");
        		}else if(obj.indexOf('chk') > -1){
        			eval("this.div_list."+retannCnfInfoArr[i]+".set_value('N');");
        		}
        	}
        }
        */

        /*행추가/삭제 버튼 눌렀을때*/
        this.div_list_btn_rowUpdate_onclick = function(obj,e)
        {
        	this.fn_isUpdate();
        }

        this.fn_isUpdate = function(){
        	var duplicateRowCount = 0;
        	for(var i=0;i<this.div_list.grd_master.rowcount;i++){
        		var na_wrs_c = this.ds_retannCnf.getColumn(i,"NA_WRS_C");
        		var rgd_sqno = this.ds_retannCnf.getColumn(i,"RGD_SQNO");
        		if(rgd_sqno == this.div_list.edt_rgd_sqno.value && na_wrs_c == this.div_list.edt_na_wrs_c.value){
        			++duplicateRowCount;
        			//var bok = application.confirm("[ "+this.div_list.edt_na_wrs_c.value+" / "+this.div_list.edt_wrsnm.value+" ] 는(은) 이미 등록된 자료입니다. 수정하시겠습니까 ?");
        			//수정하시겠습니까?
        			var bok = this.gfn_getMessage("alert", "msg.isUpdate");
        			if(bok == true){
        				this.fn_rowUpdate();
        			}else{
        				return false;
        			}
        		}
        	}
        	
        	/*
        	if(duplicateRowCount == 0){
        		this.fn_rowInsert();
        	}
        	*/
        }

        this.fn_rowUpdate = function(){
        	
        	for(var i = 0; i < dataDArr.length; i++){
        		eval("this.ds_retannCnf.setColumn(this.ds_retannCnf.rowposition, '"+dataDArr[i]+"', this.div_list."+retannCnfInfoArr2[i]+".value)");
        	}
        }

        /* 저장 버튼 클릭 시*/
        this.btn_save_onclick = function(obj,e)
        {
        	if(this.fn_SaveCheck()){
        	
        		trace("저장버튼");
        		
        		var dsParams = "ds_retannCnf=ds_retannCnf:A";
        		
        		/*
        		if(this.gfn_dsIsUpdated(this.ds_retannCnf)){
        			dsParams = dsParams + " ds_retannCnf=ds_retannCnf:U";
        		}
        		*/
        		//trace("################### dsParams : " + dsParams);			
        		
        		var sSvcID        = "saveCnf";//통신아이디
        		var sURL          = "svc::/rest/retann/saveCnf";// 호출할 서버 페이지 주소
        		var sInDatasets   = dsParams;//보내는데이터셋
        		var sOutDatasets  = "";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = "";// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        	}
        }

        this.div_list_btn_divResize_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        
        this.div_search_btn_rgd_onclick = function(params)
        {
        	var mbco_code = this.gfn_nullToEmpty(this.div_search.mae_mbco_code.value); //본/지사코드
        	var mbco_name = this.gfn_nullToEmpty(this.div_search.edt_mbco_name.value); //본/지사코드명
        	//var mbco_name = '';
        	
        	var param = {
                    autoType:params,
                    searchCode:mbco_code,
                    searchText:mbco_name,
        	};
        	
        	if(typeof params == "boolean"){
        		
        		if(!this.searPopValue(param)){return};
              
           };
        	
        	//var oArg = {code:mbco_code, name:mbco_name};
        	var oArg = {autoPop:param};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter_VAN_DS_SC_0600_P00";    
        	//this.gfn_openPopup("POPUP_SRC_SPYPL_TRPL","POPUP::POPUP_SRC_SPYPL_TRPL.xfdl",oArg,sOption,sPopupCallBack);
        	this.gfn_openPopup("VAN_DS_SC_0600_P00","SCM.RETANN::VAN_DS_SC_0600_P00.xfdl",oArg,sOption,sPopupCallBack);
        }

        /* 본/지사 돋보기 클릭시*/
        this.div_search_btn_mbco_onclick = function(obj,e)
        {
        	this.div_search_btn_rgd_onclick();
        }

        this.fn_popupAfter_VAN_DS_SC_0600_P00 = function(strId,strVal)
        {
        	if(strVal != null && strVal.length > 0){
        		var strValNo = strVal.split(',');
        		this.div_search.mae_mbco_code.set_value(strValNo[0]); //공급처코드
        		this.div_search.edt_mbco_name.set_value(strValNo[1]); //공급처명
        	}
        }

        
        this.fn_popupAfter = function(strId,strVal)
        {	
        	
        	trace(" strId : " + strId + " strVal : " + strVal);		
        	if(strVal != null && strVal.length > 0){
        	//반품 요청번호 팝업
        		var strValNo = strVal.split(',');
        		this.div_search.mae_rgd_rqt_code.set_value(strValNo[0]); 
        		this.div_search.edt_rgd_rqt_name.set_value(strValNo[1]); 
        		this.div_search.mae_rgd_rqt_team_code.set_value(strValNo[2]); 
        		this.div_search.cal_search_date.set_value(strValNo[3]); 
        		this.div_search.edt_rgd_pla_no.set_value(strValNo[4]);
        		this.div_search.cbo_tr_dsc.set_text(strValNo[5]);
        		this.div_search.cbo_rgd_amn_dsc.set_text(strValNo[6]);
        		this.div_search.cbo_na_rgd_sts_dsc.set_text(strValNo[7]);
        		this.div_list.edt_hidden_chk_function.set_value(strValNo[8]);	
        	}
        }

        /*-----------------------------------------------------------------------------------------*/
        // 페이징처리
        /*-----------------------------------------------------------------------------------------*/
        this.fn_paging = function(vPageNum)
        { 	  	 
        	this.ds_pageVO.clearData();  
        	this.ds_retannCnf.clearData();     //Grid에 Binding된 Dataset명	
        	
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

        // 승인확인 버튼 눌럿을 경우 : 04
        this.div_list_btn_confirmY_onclick = function(obj,e)
        {
        	this.div_list.btn_confirmY.set_enable(true);
        	//this.div_list.btn_confirmN.set_enable(false);
        	
        	//this.div_list.btn_confirmY.setStyleValue("btn_confirmY","cssclass","btn_WF_CRUD");
        	
        	this.div_list.btn_confirmY.set_cssclass("btn_WF_CRUD");
        	this.div_list.btn_confirmN.set_cssclass("");
        	
        	
        	if(this.ds_retannCnf.rowcount > 0){			
        		for (var i=0; i < this.ds_retannCnf.rowcount ;i++){
        			this.ds_retannCnf.setColumn(i,"ADD_NA_RGD_STS_DSC","04");
        		}
        	}
        	
        }

        
        // 승인거절 버튼 눌럿을 경우 : 06
        this.div_list_btn_confirmN_onclick = function(obj,e)
        {
        	//this.div_list.btn_confirmY.set_enable(false);
        	this.div_list.btn_confirmN.set_enable(true);
        	
        	this.div_list.btn_confirmY.set_cssclass("");
        	this.div_list.btn_confirmN.set_cssclass("btn_WF_CRUD");
        	
        	if(this.ds_retannCnf.rowcount > 0){			
        		for (var i=0; i < this.ds_retannCnf.rowcount ;i++){
        			this.ds_retannCnf.setColumn(i ,"ADD_NA_RGD_STS_DSC","06");
        		}
        	}
        }

        /*반품의뢰처 팝업 클릭*/
        this.div_search_Button00_onclick = function(obj,e)
        {
        	//수요처
        	var oArg = {paramMode:"U", dsArg:this.Dataset00};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter_SRC_RVOPL_TRPL";    
        	this.gfn_openPopup("POPUP_SRC_RVOPL_TRPL","POPUP::POPUP_SRC_RVOPL_TRPL.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.fn_popupAfter_SRC_RVOPL_TRPL = function(strId,strVal)
        {	
        	
        	trace(" strId : " + strId + " strVal : " + strVal);		
        	if(strVal != null && strVal.length > 0){	
        		var strValNo = strVal.split(',');
        		this.div_search.mae_rgd_rqt_code.set_value(strValNo[0]); //수요처코드
        		this.div_search.edt_rgd_rqt_name.set_value(strValNo[1]); //수요처명
        	}
        }

        
        this.div_search_mae_mbco_code_onkeydown = function(obj,e)
        {
        	if(e.keycode==13)
        	{	
        		this.div_search_btn_rgd_onclick(true);
        	};
        }

        
        this.div_search_edt_mbco_name_onkeydown = function(obj,e)
        {
        	if(e.keycode==13)
        	{	
        		this.div_search_btn_rgd_onclick(true);
        	};
        }

        /*반품요청번호 텍스트 입력후 엔터*/
        this.div_search_edt_rgd_pla_no_onkeydown = function(obj,e)
        {
        	if(e.keycode==13)
        	{	
        		this.div_search_btn_rgd_pla_no_onclick(true);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.form_init, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.div_search.btn_mbco.addEventHandler("onclick", this.div_search_btn_mbco_onclick, this);
            this.div_search.Button00.addEventHandler("onclick", this.div_search_Button00_onclick, this);
            this.div_search.edt_rgd_pla_no.addEventHandler("onkeydown", this.div_search_edt_rgd_pla_no_onkeydown, this);
            this.div_search.btn_rgd_pla_no.addEventHandler("onclick", this.div_search_btn_rgd_pla_no_onclick, this);
            this.div_search.cbo_tr_dsc.addEventHandler("onitemchanged", this.div_search_cbo_contract_type_onitemchanged, this);
            this.div_search.edt_mbco_name.addEventHandler("onkeydown", this.div_search_edt_mbco_name_onkeydown, this);
            this.div_search.mae_mbco_code.addEventHandler("onkeydown", this.div_search_mae_mbco_code_onkeydown, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.div_list.btn_divResize.addEventHandler("onclick", this.div_list_btn_divResize_onclick, this);
            this.div_list.btn_confirmN.addEventHandler("onclick", this.div_list_btn_confirmN_onclick, this);
            this.div_list.btn_confirmY.addEventHandler("onclick", this.div_list_btn_confirmY_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0610.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
