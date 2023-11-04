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
                this.set_name("frm_van_ds_sc_0210");
                this.set_titletext("예약행사집계현황");
                this._setFormPosition(0,0,803,1007);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pre_event_sumM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"TRPL_N\" type=\"STRING\" size=\"257\"/><Column id=\"TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_N\" type=\"STRING\" size=\"258\"/><Column id=\"RQ_QT\" type=\"STRING\" size=\"259\"/><Column id=\"DFN_QT\" type=\"STRING\" size=\"260\"/><Column id=\"DFN_RATE\" type=\"STRING\" size=\"261\"/><Column id=\"GOOD_PR\" type=\"STRING\" size=\"262\"/><Column id=\"BKG_EVT_YY\" type=\"STRING\" size=\"263\"/><Column id=\"BKG_EVT_NO\" type=\"STRING\" size=\"264\"/><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"265\"/><Column id=\"TRPL_VIEW\" type=\"STRING\" size=\"266\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pre_event_sumD", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_N\" type=\"STRING\" size=\"257\"/><Column id=\"UNIT\" type=\"STRING\" size=\"258\"/><Column id=\"WRS_STDNM\" type=\"STRING\" size=\"259\"/><Column id=\"GOOD_PR\" type=\"STRING\" size=\"260\"/><Column id=\"S_GOOD_PR\" type=\"STRING\" size=\"261\"/><Column id=\"DFN_QT\" type=\"STRING\" size=\"262\"/><Column id=\"BOXPE_AQZ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "147", "15", null, this);
            obj.set_taborder("103");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Edit("edt_bkg_evt_yy", "absolute", "118", "10", "75", "21", null, null, this.div_search);
            obj.set_taborder("21");
            obj.style.set_background("#fffde7ff");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_bkg_evt_no", "absolute", "195", "10", "82", "21", null, null, this.div_search);
            obj.set_taborder("22");
            obj.style.set_background("#fffde7ff");
            obj.set_maxlength("5");
            obj.set_inputtype("number");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_bkg_evtnm", "absolute", "279", "10", "143", "21", null, null, this.div_search);
            obj.set_taborder("23");
            obj.style.set_background("#fffde7ff");
            obj.set_maxlength("100");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("Button67", "absolute", "424", "10", "21", "21", null, null, this.div_search);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "15", "10", "103", "21", null, null, this.div_search);
            obj.set_taborder("25");
            obj.set_text("예약구매번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("popup_OdrPl00", "absolute", "424", "62", "21", "21", null, null, this.div_search);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_odrpl_na_trpl_n", "absolute", "279", "62", "143", "21", null, null, this.div_search);
            obj.set_taborder("29");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_odrpl_na_trpl_c", "absolute", "118", "62", "159", "21", null, null, this.div_search);
            obj.set_taborder("30");
            obj.set_maxlength("13");
            obj.set_inputtype("number");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "62", "103", "21", null, null, this.div_search);
            obj.set_taborder("31");
            obj.set_text("발주처");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("popup_OdrPl", "absolute", "424", "36", "21", "21", null, null, this.div_search);
            obj.set_taborder("32");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_rvopl_na_trpl_n", "absolute", "279", "36", "143", "21", null, null, this.div_search);
            obj.set_taborder("33");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_rvopl_na_trpl_c", "absolute", "118", "36", "159", "21", null, null, this.div_search);
            obj.set_taborder("34");
            obj.set_maxlength("13");
            obj.set_inputtype("number");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "15", "36", "103", "21", null, null, this.div_search);
            obj.set_taborder("35");
            obj.set_text("물류센터");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "15", "88", "103", "21", null, null, this.div_search);
            obj.set_taborder("36");
            obj.set_text("발주마감일");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_orr_ddl_dt", "absolute", "118", "88", "159", "21", null, null, this.div_search);
            obj.set_taborder("37");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "15", "114", "79", "21", null, null, this.div_search);
            obj.set_taborder("38");
            obj.set_text("마감상태");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_na_odr_st", "absolute", "118", "114", "75", "21", null, null, this.div_search);
            obj.set_taborder("39");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "307", "114", "102", "21", null, null, this.div_search);
            obj.set_taborder("40");
            obj.set_text("상품");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_wrsnm", "absolute", "548", "114", "179", "21", null, null, this.div_search);
            obj.set_taborder("41");
            obj.set_maxlength("50");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("popup_Rvopl", "absolute", "730", "114", "21", "21", null, null, this.div_search);
            obj.set_taborder("42");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_na_wrs_c", "absolute", "384", "114", "162", "21", null, null, this.div_search);
            obj.set_taborder("43");
            obj.set_maxlength("25");
            obj.set_inputtype("number");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "307", "88", "103", "21", null, null, this.div_search);
            obj.set_taborder("44");
            obj.set_text("조회구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_trpl", "absolute", "384", "88", "180", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_trpl_innerdataset = new Dataset("rdo_trpl_innerdataset", this.div_search.rdo_trpl);
            rdo_trpl_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">물류센터별</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">발주처별</Col></Row></Rows>");
            obj.set_innerdataset(rdo_trpl_innerdataset);
            obj.set_taborder("45");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");

            obj = new Static("Static09", "absolute", "1", "30", "15", "141", null, null, this);
            obj.set_taborder("102");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "320", "30", "103", "10", null, null, this);
            obj.set_taborder("100");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "539", null, this);
            obj.set_taborder("47");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "788", "0", "15", "490", null, null, this);
            obj.set_taborder("58");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "175", null, null, "15", "-2", this);
            obj.set_taborder("64");
            this.addChild(obj.name, obj);
            obj = new Button("Button10", "absolute", "365", "0", null, "12", "360", null, this.div_list);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_master", "absolute", "0", "37", null, "260", "0", null, this.div_list);
            obj.set_taborder("10");
            obj.set_binddataset("ds_pre_event_sumM");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"138\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"업체코드\"/><Cell col=\"2\" text=\"업체명\"/><Cell col=\"3\" text=\"팀\"/><Cell col=\"4\" text=\"예약발주BOX\"/><Cell col=\"5\" text=\"발주확정BOX\"/><Cell col=\"6\" text=\"구성비\"/><Cell col=\"7\" text=\"발주금액\"/><Cell col=\"8\" text=\"예약행사년도\"/><Cell col=\"9\" text=\"예약행사번호\"/><Cell col=\"10\" text=\"상품코드\"/><Cell col=\"11\" text=\"조회구분\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" style=\"align:center;\" text=\"bind:TRPL_C\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:TRPL_N\"/><Cell col=\"3\" text=\"bind:TEAM_N\"/><Cell col=\"4\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:RQ_QT\" mask=\"#,##0\"/><Cell col=\"5\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DFN_QT\" mask=\"#,##0\"/><Cell col=\"6\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DFN_RATE\" mask=\"#,##0\"/><Cell col=\"7\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:GOOD_PR\" mask=\"#,##0\"/><Cell col=\"8\" text=\"bind:BKG_EVT_YY\"/><Cell col=\"9\" text=\"bind:BKG_EVT_NO\"/><Cell col=\"10\" style=\"align:center;\" text=\"bind:NA_WRS_C\"/><Cell col=\"11\" text=\"bind:TRPL_VIEW\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" style=\"align:center;\" text=\"합계\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" displaytype=\"number\" expr=\"expr:dataset.getSum('RQ_QT');\" mask=\"#,##0\"/><Cell col=\"5\" displaytype=\"number\" expr=\"expr:dataset.getSum('DFN_QT');\" mask=\"#,##0\"/><Cell col=\"6\" displaytype=\"number\" expr=\"expr:dataset.getSum('DFN_RATE');\" mask=\"#,##0\"/><Cell col=\"7\" displaytype=\"number\" expr=\"expr:dataset.getSum('GOOD_PR');\" mask=\"#,##0\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_detail", "absolute", "0", "335", null, "468", "0", null, this.div_list);
            obj.set_taborder("11");
            obj.set_autofittype("none");
            obj.set_binddataset("ds_pre_event_sumD");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"163\"/><Column size=\"204\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"상품코드\"/><Cell col=\"2\" text=\"상품명\"/><Cell col=\"3\" text=\"단위\"/><Cell col=\"4\" text=\"입수\"/><Cell col=\"5\" text=\"계약단가\"/><Cell col=\"6\" text=\"총발주확정BOX\"/><Cell col=\"7\" text=\"확정발주금액\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" style=\"align:center;\" text=\"bind:NA_WRS_C\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:NA_WRS_N\"/><Cell col=\"3\" style=\"align:center;\" text=\"bind:WRS_STDNM\"/><Cell col=\"4\" style=\"align:center;\" text=\"bind:BOXPE_AQZ\"/><Cell col=\"5\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:GOOD_PR\" mask=\"#,##0\"/><Cell col=\"6\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DFN_QT\" mask=\"#,##0\"/><Cell col=\"7\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:S_GOOD_PR\" mask=\"#,##0\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" style=\"align:center;\" text=\"합계\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\" displaytype=\"number\" expr=\"expr:dataset.getSum('DFN_QT');\" mask=\"#,##0\"/><Cell col=\"7\" displaytype=\"number\" expr=\"expr:dataset.getSum('S_GOOD_PR');\" mask=\"#,##0\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "733", "1", "55", "15", null, null, this.div_list);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "758", "32", null, "5", "6", null, this.div_list);
            obj.set_taborder("14");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("Button05", "absolute", null, "11", "41", "21", "0", null, this.div_list);
            obj.set_taborder("15");
            obj.set_text("엑셀");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "741", "299", "55", "15", null, null, this.div_list);
            obj.set_taborder("16");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "766", "330", null, "5", "-2", null, this.div_list);
            obj.set_taborder("17");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", null, "309", "41", "21", "0", null, this.div_list);
            obj.set_taborder("18");
            obj.set_text("엑셀");
            this.div_list.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "118", null, this);
            obj.set_taborder("81");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("82");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("83");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "733", "21", "55", "8", null, null, this);
            obj.set_taborder("104");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "732", "21", "56", "8", null, null, this);
            obj.set_taborder("106");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "158", null, this);
            obj.set_taborder("110");
            obj.set_text("Div00");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "456", "165", "103", "10", null, null, this);
            obj.set_taborder("113");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web_downExcel", "absolute", "641", "22", "44", "14", null, null, this);
            obj.set_taborder("114");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 147, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("103");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 978, 503, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("64");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 1007, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("예약행사집계현황");

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
            this._addPreloadList("fdl", "common::AuthorityWorkplace.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_0210.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0210.xfdl", function(exports) {
        /*##################################################################################
         화면명	: 예약행사집계현황
         화면ID  	: VAN_DS_SC_0210
         작성자 	: swha
        ####################################################################################*/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        /* form load */
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e);
        	this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        	this.div_list.grd_detail.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        	//그리드클릭 이벤트 등록
        	this.div_list.grd_master.addEventHandler("oncellclick", this.grd_afterFnc, this);
        }

        /* form init*/
        this.form_init = function(obj,e)
        {
        	this.div_search.edt_bkg_evt_yy.set_value(this.gfn_today("yyyy"));
        	this.div_list.grd_master.setCellProperty("Head", 1, "text", "물류센터");
        	this.div_list.grd_master.setCellProperty("Head", 2, "text", "물류센터명");

        	//권한사업장 표시 여부(1:본사)
        	if (application.gv_mbcoType != '1') {
        		this.Div00.visible = false;
        	}
        }

        this.fn_afterFormload = function()
        {
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	if (this.gfn_isNull(strVal)) { return; }
        	var paramsArr = strVal.split(",");

        	if (strId == "VAN_DS_FN_0201") {//예약구매번호 조회
        		this.div_search.edt_bkg_evt_yy.set_value(paramsArr[0]);
        		this.div_search.edt_bkg_evt_no.set_value(paramsArr[1]);
        		this.div_search.edt_bkg_evtnm.set_value(paramsArr[2]);
        	} else if (strId == "POPUP_SRC_RVOPL_TRPL") {//물류센터 조회
        		this.div_search.edt_rvopl_na_trpl_c.set_value(paramsArr[0]);
        		this.div_search.edt_rvopl_na_trpl_n.set_value(paramsArr[1]);
        	} else if (strId == "VAN_DS_FN_0202") {//발주처조회
        		this.div_search.edt_odrpl_na_trpl_c.set_value(paramsArr[0]);
        		this.div_search.edt_odrpl_na_trpl_n.set_value(paramsArr[1]);
        	} else if (strId == "POPUP_SRC_WRS") {//상품조회
        		this.div_search.edt_na_wrs_c.set_value(paramsArr[0]);
        		this.div_search.edt_wrsnm.set_value(paramsArr[1]);
        	}
        }

        /* Validation Check */
        this.fn_validationCheck = function()
        {
        	/*
        	if (this.gfn_isNull(this.div_search.edt_BKG_EVT_YY.value)) {

        		this.alert('예약행사년도를 입력해 주세요');
        		return false;
        	}

        	if (this.gfn_isNull(this.div_search.edt_BKG_EVTNM.value)) {
        		this.alert('예약행사명을 선택해주세요');
        		return false;
        	}
        	*/

        	if (this.gfn_isNull(this.div_search.edt_bkg_evt_no.value)) {
        		this.alert('예약행사번호를 선택해주세요');
        		return false;
        	}
        	return true;
        }

        /* search */
        this.btn_search_onclick = function(obj,e)
        {
        	if (this.fn_validationCheck()) {
        		this.ds_pre_event_sumM.clearData();
        		this.ds_pre_event_sumD.clearData();

        		var bkg_evt_yy = this.gfn_nullToEmpty(this.div_search.edt_bkg_evt_yy.value);
        		var bkg_evt_no = this.gfn_nullToEmpty(this.div_search.edt_bkg_evt_no.value);
        		var orr_ddl_dt = this.gfn_nullToEmpty(this.div_search.edt_orr_ddl_dt.value);
        		var na_odr_st = this.gfn_nullToEmpty(this.div_search.edt_na_odr_st.value);
        		var rvopl_na_trpl_c = this.gfn_nullToEmpty(this.div_search.edt_rvopl_na_trpl_c.value);
        		var odrpl_na_trpl_c = this.gfn_nullToEmpty(this.div_search.edt_odrpl_na_trpl_c.value);
        		var na_was_c = this.gfn_nullToEmpty(this.div_search.edt_na_wrs_c.value);
        		var trpl_view = this.gfn_nullToEmpty(this.div_search.rdo_trpl.value);

        		var params =  "BKG_EVT_YY=" + bkg_evt_yy
        					+ " BKG_EVT_NO=" + bkg_evt_no
        					+ " ORR_DDL_DT=" + orr_ddl_dt
        					+ " NA_ODR_ST=" + na_odr_st
        					+ " RVOPL_NA_TRPL_C="+ rvopl_na_trpl_c
        					+ " ODRPL_NA_TRPL_C="+ odrpl_na_trpl_c
        					+ " TRPL_VIEW="+ trpl_view
        					+ " NA_WRS_C="+ na_was_c;

        		var sSvcID        = "retrievePreEventSumsM";//통신아이디
        		var sURL          = "svc::/rest/orders/retrievePreEventSums";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_pre_event_sumM=ds_PreEventSumsM";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = params;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백

        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, "S");
        	}
        }

        /* Event */
        this.grd_afterFnc = function(obj,e)
        {
        /*
        	if (e.reason == 51)
        	{
              this.ds_pre_event_sumM.set_enableevent(false);
              this.ds_pre_event_sumM.set_rowposition(-1);
              this.ds_pre_event_sumM.set_enableevent(true);
              return;
           }
        */

        	var params =  	 "BKG_EVT_YY=" + this.gfn_nullToEmpty(this.ds_pre_event_sumM.getColumn(this.ds_pre_event_sumM.rowposition, "BKG_EVT_YY"))
        					+ " BKG_EVT_NO=" + this.gfn_nullToEmpty(this.ds_pre_event_sumM.getColumn(this.ds_pre_event_sumM.rowposition, "BKG_EVT_NO"))
        					+ " NA_WRS_C=" + this.gfn_nullToEmpty(this.ds_pre_event_sumM.getColumn(this.ds_pre_event_sumM.rowposition, "NA_WRS_C"))
        					+ " TRPL_C=" + this.gfn_nullToEmpty(this.ds_pre_event_sumM.getColumn(this.ds_pre_event_sumM.rowposition, "TRPL_C"))
        					+ " TRPL_VIEW="+ this.gfn_nullToEmpty(this.ds_pre_event_sumM.getColumn(this.ds_pre_event_sumM.rowposition, "TRPL_VIEW"));

        
        	// trace("params : " + params);
        	var sSvcID        = "retrievePreEventSumD";//통신아이디
        	var sURL          = "svc::/rest/orders/retrievePreEventSumsDetail";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_pre_event_sumD=ds_PreEventSumD";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백

        	//API 콜
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, "S");
        }

        /* 조회 구분에 따른 Grid 변경*/
        this.div_search_rdo_trpl_onitemchanged = function(obj,e)
        {
        	if (this.div_search.rdo_trpl.value == '1') {
        		this.div_list.grd_master.setCellProperty("Head", 1, "text", "물류센터");
        		this.div_list.grd_master.setCellProperty("Head", 2, "text", "물류센터명");
        	} else {
        		this.div_list.grd_master.setCellProperty("Head", 1, "text", "발주처");
        		this.div_list.grd_master.setCellProperty("Head", 2, "text", "발주처명");
        	}
        }

        
        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID == "retrievePreEventSumsM") {
        			if (this.ds_pre_event_sumM.rowcount == 0) {
        				this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        			}
        		} else {
        			if (this.ds_pre_event_sumD.rowcount == 0) {
        				this.div_list.grd_detail.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        			}
        		}
        	}
        }

        this.btn_excel_onclick = function(obj,e)
        {
        	if (this.fn_validationCheck()) {
        		this.fn_excel("A");
        	}
        }

        this.fn_excel = function(flag)
        {
        	if (flag == "A") {
        		var bkg_evt_yy = this.gfn_nullToEmpty(this.div_search.edt_bkg_evt_yy.value);
        		var bkg_evt_no = this.gfn_nullToEmpty(this.div_search.edt_bkg_evt_no.value);
        		var orr_ddl_dt = this.gfn_nullToEmpty(this.div_search.edt_orr_ddl_dt.value);
        		var na_odr_st = this.gfn_nullToEmpty(this.div_search.edt_na_odr_st.value);
        		var rvopl_na_trpl_c = this.gfn_nullToEmpty(this.div_search.edt_rvopl_na_trpl_c.value);
        		var odrpl_na_trpl_c = this.gfn_nullToEmpty(this.div_search.edt_odrpl_na_trpl_c.value);
        		var na_was_c = this.gfn_nullToEmpty(this.div_search.edt_na_wrs_c.value);
        		var trpl_view = this.gfn_nullToEmpty(this.div_search.rdo_trpl.value);
        		//var trpl_c = this.
        		var fileName = "예약행사집계현황_마스터.xls";//파일명

        		var params =  "BKG_EVT_YY=" + bkg_evt_yy
        					+ "&BKG_EVT_NO=" + bkg_evt_no
        					+ "&ORR_DDL_DT=" + orr_ddl_dt
        					+ "&NA_ODR_ST=" + na_odr_st
        					+ "&RVOPL_NA_TRPL_C="+ rvopl_na_trpl_c
        					+ "&ODRPL_NA_TRPL_C="+ odrpl_na_trpl_c
        					+ "&TRPL_VIEW="+ trpl_view
        					+ "&NA_WRS_C="+ na_was_c
        					+ "&FILE_NAME="+fileName
        					+ "&SEPARATOR="+ flag;
        		params = encodeURI(encodeURI(params));
        		excelDownHandler(application.gv_server_url+"rest/excel/orders/downloadExcelPreEventSumsList?"+params, this);
        	} else if (flag == "B") {
        		var fileName = "예약행사집계현황_상세.xls"//파일명
        		var params =
        					"BKG_EVT_YY=" 	+ this.gfn_nullToEmpty(this.ds_pre_event_sumM.getColumn(this.ds_pre_event_sumM.rowposition, "BKG_EVT_YY"))
        					+ "&BKG_EVT_NO=" 	+ this.gfn_nullToEmpty(this.ds_pre_event_sumM.getColumn(this.ds_pre_event_sumM.rowposition, "BKG_EVT_NO"))
        					+ "&NA_WRS_C=" 		+ this.gfn_nullToEmpty(this.ds_pre_event_sumM.getColumn(this.ds_pre_event_sumM.rowposition, "NA_WRS_C"))
        					+ "&M_TRPL_C=" 		+ this.gfn_nullToEmpty(this.ds_pre_event_sumM.getColumn(this.ds_pre_event_sumM.rowposition, "TRPL_C"))
        					+ "&M_TEAM_C=" 		+ this.gfn_nullToEmpty(this.ds_pre_event_sumM.getColumn(this.ds_pre_event_sumM.rowposition, "TEAM_C"))
        					+ "&TRPL_VIEW="		+ this.gfn_nullToEmpty(this.ds_pre_event_sumM.getColumn(this.ds_pre_event_sumM.rowposition, "TRPL_VIEW"))
        					+ "&FILE_NAME="		+ fileName
        					+ "&SEPARATOR="		+ flag;

        		params = encodeURI(encodeURI(params));
        		excelDownHandler(application.gv_server_url+"rest/excel/orders/downloadExcelPreEventSumsList?"+params, this);
        	}
        }

        this.div_list_Button00_onclick = function(obj,e)
        {
        	if (this.fn_validationCheck()) {
        		this.fn_excel("B");
        	}
        }

        this.div_search_Button67_onclick = function(obj,e)
        {
        	this.fn_enterBkgEvtPopUp(0);
        }

        this.div_search_popup_OdrPl00_onclick = function(obj,e)
        {
        	this.fn_enterOdrplPopUp('0');
        }

        this.fn_enterOdrplPopUp = function(auto)
        {
        	var form_id = "VAN_DS_SC_0210";
        	var odrpl_na_trpl_c = this.gfn_nullToEmpty(this.div_search.edt_odrpl_na_trpl_c.value);
        	var odrpl_na_trpl_n = this.gfn_nullToEmpty(this.div_search.edt_odrpl_na_trpl_n.value);

        	if (auto == "1") {
        		if (this.gfn_isNull(this.div_search.edt_odrpl_na_trpl_c.value) && this.gfn_isNull(this.div_search.edt_odrpl_na_trpl_n.value)) {
        			alert("농협상업장 코드 또는 명을 입력해 주세요");
        			this.div_search.edt_odrpl_na_trpl_c.setFocus();
        			return false;
        		}
        	}
        	var oArg = {odrpl_na_trpl_c:odrpl_na_trpl_c, odrpl_na_trpl_n:odrpl_na_trpl_n, form_id:form_id, auto:auto};
        	var sOption = "autosize=true, titleText=false";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("VAN_DS_FN_0202", "SCM.EVENT::VAN_DS_FN_0202.xfdl", oArg, sOption, sPopupCallBack);
        }

        this.div_search_popup_Rvopl_onclick = function(obj,e)
        {
        	this.fn_enterWrsPopUp(0);
        }

        this.div_list_Button05_onclick = function(obj,e)
        {
        	if (this.fn_validationCheck()) {
        		this.fn_excel("A");
        	}
        }

        /* 출력버튼 */
        this.btn_print_onclick = function(obj,e)
        {
        	var bkg_evt_yy 			= this.gfn_nullToEmpty(this.div_search.edt_bkg_evt_yy.value);
        	var bkg_evt_no 			= this.gfn_nullToEmpty(this.div_search.edt_bkg_evt_no.value);
        	var rvopl_na_trpl_c		= this.gfn_nullToEmpty(this.div_search.edt_rvopl_na_trpl_c.value);
        	var odrpl_na_trpl_c 		= this.gfn_nullToEmpty(this.div_search.edt_odrpl_na_trpl_c.value);
        	var na_wrs_c 			= this.gfn_nullToEmpty(this.div_search.edt_na_wrs_c.value);
        	var trpl_view 			= this.gfn_nullToEmpty(this.div_search.rdo_trpl.value);
        	var trplC          		= this.getTrplCode();
        	var bkg_evtnm       		= this.gfn_nullToEmpty(this.div_search.edt_bkg_evtnm.value);//예약행사명
        	var orr_ddl_dt       	= this.gfn_nullToEmpty(this.div_search.edt_orr_ddl_dt.value);//발주마감일
        	var trpl_view_txt 		= this.gfn_nullToEmpty(this.div_search.rdo_trpl.text); //조회구분텍스트
        	var na_wrs_c_txt 		= "";
        	var srhRvoplTxt 			= "";
        	var srhOdrplTxt 			= "";

        	//상품코드
        	if (na_wrs_c == '') {
        		na_wrs_c_txt = 'all';
        	}

        	//물류센터
        	if (rvopl_na_trpl_c == '') {
        		srhRvoplTxt = 'all';
        	} else {
        		srhRvoplTxt = "[" + rvopl_na_trpl_c + "]" + this.div_search.edt_rvopl_na_trpl_n.value;
        	}

        	//발주처
        	if (odrpl_na_trpl_c == '') {
        		srhOdrplTxt = 'all';
        	} else {
        		srhOdrplTxt = "[" + odrpl_na_trpl_c + "]" + this.div_search.edt_odrpl_na_trpl_n.value;
        	}

        	var searchText =  this.getTrplCodePrint()
                          + ", 행사년번:" + bkg_evt_yy + "-" + bkg_evt_no + "-" + bkg_evtnm
                          + ", 발주마감일:" + orr_ddl_dt + "주문마감, 상품:" + ((na_wrs_c_txt == 'all')?'전체': na_wrs_c)
                          + ", 물류센터:" + ((srhRvoplTxt == 'all')?'전체': srhRvoplTxt)
                          + ", 발주처:" + ((srhOdrplTxt == 'all')?'전체': srhOdrplTxt)
                          + ", 조회구분:" + trpl_view_txt;

        	var ozParam = {
        		sId: 'VAN_DS_SC_0210', 
        		sUrl: '/rest/oz/orders/printPreEventSumsList', 
        		paramType: 'param', 
        		sParam:{
        			TRPL_C_TEXT:searchText, 
        			srhBkgEvtYy:bkg_evt_yy, 
        			srhBkgEvtNo:bkg_evt_no, 
        			srhNaWrsC:na_wrs_c, 
        			srhTrplView:trpl_view, 
        			srhRvoplNaTrplC:rvopl_na_trpl_c, 
        			srhOdrplNaTrplC:odrpl_na_trpl_c, 
        			TRPL_C:trplC, 
        		}
        	};
        	this.ozViewer(ozParam);
        }

        this.div_list_Button10_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        this.div_search_edt_bkg_evt_no_onkeydown = function(obj,e)
        {
        	if (e.keycode==13) {
        		this.fn_enterBkgEvtPopUp(1);
        	}
        }

        this.fn_enterBkgEvtPopUp = function(auto)
        {
        	var bkg_evt_yy 	= this.gfn_nullToEmpty(this.gfn_trim(this.div_search.edt_bkg_evt_yy.value));//예약행사년도
        	var bkg_evt_no 	= this.gfn_nullToEmpty(this.gfn_trim(this.div_search.edt_bkg_evt_no.value));//예약행사번호
        	var bkg_evtnm 	= this.gfn_nullToEmpty(this.gfn_trim(this.div_search.edt_bkg_evtnm.value));	//예약행사명

        	if (this.gfn_isNull(bkg_evt_no) && this.gfn_isNull(bkg_evtnm) && auto=="1") {
        		alert("예약행사번호 또는 명을 입력해 주세요");
        		this.div_search.edt_bkg_evt_no.setFocus();
        		return false;
        	}

        	var oArg = {bkg_evt_yy:bkg_evt_yy, bkg_evt_no:bkg_evt_no, bkg_evtnm:bkg_evtnm, auto:auto};
        	var sOption = "autosize=true, titleText=false";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("VAN_DS_FN_0201", "SCM.EVENT::VAN_DS_FN_0201.xfdl", oArg, sOption, sPopupCallBack);
        }

        this.div_search_edt_rvopl_na_trpl_c_onkeyup = function(obj,e)
        {
        	if (e.keycode==13) {
        		this.div_search_popup_OdrPl_onclick(true);
        	}
        }

        this.div_search_popup_OdrPl_onclick = function(param)
        {
        	var rvoplC = this.gfn_nullToEmpty(this.gfn_trim(this.div_search.edt_rvopl_na_trpl_c.value));//물류센터코드
        	var rvoplN = this.gfn_nullToEmpty(this.gfn_trim(this.div_search.edt_rvopl_na_trpl_n.value));//물류센터명

        	var param = {
        					autoType:param, 
        					searchCode:rvoplC, 
        					searchText:rvoplN
        				}

        	var oArg = {form_id:"VAN_DS_SC_0210", autoPop:param};
        	var sOption = "autosize=true, titleText=false";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("POPUP_SRC_RVOPL_TRPL", "POPUP::POPUP_SRC_RVOPL_TRPL.xfdl", oArg, sOption, sPopupCallBack);
        }

        this.div_search_edt_odrpl_na_trpl_c_onkeyup = function(obj,e)
        {
        	if (e.keycode==13) {
        		this.fn_enterOdrplPopUp('1');
        	}
        }

        this.div_search_edt_na_wrs_c_onkeyup = function(obj,e)
        {
        	if (e.keycode==13) {
        		this.fn_enterWrsPopUp(1);
        	}
        }

        this.fn_enterWrsPopUp = function(auto)
        {
        	var form_id = "VAN_DS_SC_0210";

        	var wrsnm = this.gfn_nullToEmpty(this.div_search.edt_wrsnm.value);
        	var naWrsC = this.gfn_nullToEmpty(this.div_search.edt_na_wrs_c.value);
        	if (auto == "1") {
        		if (this.gfn_isNull(wrsnm) && this.gfn_isNull(naWrsC)) {
        			alert("상품코드 또는 명을 입력해 주세요");
        			this.div_search.edt_na_wrs_c.setFocus();
        			return false;
        		}
        	}

        	//상품명 팝업
        	var oArg = {form_id:form_id, wrsnm:wrsnm, naWrsC:naWrsC, auto:auto};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("VAN_DS_FN_0203", "SCM.EVENT::VAN_DS_FN_0203.xfdl", oArg, sOption, sPopupCallBack);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("oninit", this.form_init, this);
            this.div_search.edt_bkg_evt_no.addEventHandler("onkeydown", this.div_search_edt_bkg_evt_no_onkeydown, this);
            this.div_search.edt_bkg_evtnm.addEventHandler("onkeydown", this.div_search_edt_bkg_evt_no_onkeydown, this);
            this.div_search.Button67.addEventHandler("onclick", this.div_search_Button67_onclick, this);
            this.div_search.popup_OdrPl00.addEventHandler("onclick", this.div_search_popup_OdrPl00_onclick, this);
            this.div_search.edt_odrpl_na_trpl_n.addEventHandler("onkeyup", this.div_search_edt_odrpl_na_trpl_c_onkeyup, this);
            this.div_search.edt_odrpl_na_trpl_c.addEventHandler("onkeyup", this.div_search_edt_odrpl_na_trpl_c_onkeyup, this);
            this.div_search.popup_OdrPl.addEventHandler("onclick", this.div_search_popup_OdrPl_onclick, this);
            this.div_search.edt_rvopl_na_trpl_n.addEventHandler("onkeyup", this.div_search_edt_rvopl_na_trpl_c_onkeyup, this);
            this.div_search.edt_rvopl_na_trpl_c.addEventHandler("onkeyup", this.div_search_edt_rvopl_na_trpl_c_onkeyup, this);
            this.div_search.Static18.addEventHandler("onclick", this.Div00_Static04_onclick, this);
            this.div_search.edt_wrsnm.addEventHandler("onkeyup", this.div_search_edt_na_wrs_c_onkeyup, this);
            this.div_search.popup_Rvopl.addEventHandler("onclick", this.div_search_popup_Rvopl_onclick, this);
            this.div_search.edt_na_wrs_c.addEventHandler("onkeyup", this.div_search_edt_na_wrs_c_onkeyup, this);
            this.div_search.rdo_trpl.addEventHandler("onitemchanged", this.div_search_rdo_trpl_onitemchanged, this);
            this.div_list.Button10.addEventHandler("onclick", this.div_list_Button10_onclick, this);
            this.div_list.grd_master.addEventHandler("oncellclick", this.fn_grid01_search, this);
            this.div_list.Button05.addEventHandler("onclick", this.div_list_Button05_onclick, this);
            this.div_list.Button00.addEventHandler("onclick", this.div_list_Button00_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_print.addEventHandler("onclick", this.btn_print_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0210.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
