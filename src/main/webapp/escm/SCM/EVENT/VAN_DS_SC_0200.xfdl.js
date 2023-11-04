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
                this.set_name("VAN_DS_SC_0200");
                this.set_titletext("예약행사수주현황");
                this._setFormPosition(0,0,803,1007);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pre_eventD", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_N\" type=\"STRING\" size=\"257\"/><Column id=\"UNIT\" type=\"STRING\" size=\"258\"/><Column id=\"BOXPE_AQZ\" type=\"STRING\" size=\"259\"/><Column id=\"TEST\" type=\"STRING\" size=\"260\"/><Column id=\"RQ_QT\" type=\"STRING\" size=\"261\"/><Column id=\"TOT_GOOD_PR\" type=\"STRING\" size=\"262\"/><Column id=\"RVOPL_NA_TRPL_C\" type=\"STRING\" size=\"263\"/><Column id=\"RVOPL_NA_TRPL_N\" type=\"STRING\" size=\"264\"/><Column id=\"RVOPL_NA_TEAM_C\" type=\"STRING\" size=\"265\"/><Column id=\"ODRPL_NA_TRPL_C\" type=\"STRING\" size=\"266\"/><Column id=\"ODRPL_NA_TEAM_C\" type=\"STRING\" size=\"267\"/><Column id=\"ODRPL_NA_TRPL_NM\" type=\"STRING\" size=\"266\"/><Column id=\"ODRPL_NA_TEAM_NM\" type=\"STRING\" size=\"267\"/><Column id=\"BKG_EVT_YY\" type=\"STRING\" size=\"268\"/><Column id=\"BKG_EVT_NO\" type=\"STRING\" size=\"269\"/><Column id=\"DFN_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_RQR_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pre_eventM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ODRPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TRPL_C\" type=\"STRING\" size=\"257\"/><Column id=\"ODRPL_NA_TEAM_C\" type=\"STRING\" size=\"258\"/><Column id=\"RQ_QT\" type=\"STRING\" size=\"259\"/><Column id=\"DFN_QT\" type=\"STRING\" size=\"260\"/><Column id=\"DFN_RATE\" type=\"STRING\" size=\"261\"/><Column id=\"TOT_GOOD_PR\" type=\"STRING\" size=\"262\"/><Column id=\"CTR_UPR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "117", "15", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "14", "36", "103", "21", null, null, this.div_search);
            obj.set_taborder("10");
            obj.set_text("발주마감일");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_orr_ddl_dt", "absolute", "117", "36", "159", "21", null, null, this.div_search);
            obj.set_taborder("4");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "474", "36", "79", "21", null, null, this.div_search);
            obj.set_taborder("11");
            obj.set_text("마감상태");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_na_odr_st", "absolute", "553", "36", "162", "21", null, null, this.div_search);
            obj.set_taborder("5");
            obj.set_enable("false");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "14", "62", "103", "21", null, null, this.div_search);
            obj.set_taborder("12");
            obj.set_text("농협사업장");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_odrpl_na_trpl_c", "absolute", "117", "62", "159", "21", null, null, this.div_search);
            obj.set_taborder("6");
            obj.set_inputtype("number");
            obj.set_maxlength("13");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_odrpl_na_trpl_n", "absolute", "278", "62", "193", "21", null, null, this.div_search);
            obj.set_taborder("7");
            obj.set_maxlength("100");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup01", "absolute", "474", "62", "21", "21", null, null, this.div_search);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "14", "88", "103", "21", null, null, this.div_search);
            obj.set_taborder("16");
            obj.set_text("상품");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_wrsnm", "absolute", "278", "88", "193", "21", null, null, this.div_search);
            obj.set_taborder("9");
            obj.set_maxlength("100");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup02", "absolute", "474", "88", "21", "21", null, null, this.div_search);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_na_wrs_c", "absolute", "117", "88", "159", "21", null, null, this.div_search);
            obj.set_taborder("8");
            obj.set_maxlength("25");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_bkg_evt_yy", "absolute", "117", "10", "75", "21", null, null, this.div_search);
            obj.set_taborder("0");
            obj.style.set_background("#fffde7ff");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_bkg_evt_no", "absolute", "194", "10", "82", "21", null, null, this.div_search);
            obj.set_taborder("1");
            obj.style.set_background("#fffde7ff");
            obj.set_maxlength("5");
            obj.set_inputtype("number");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_bkg_evtnm", "absolute", "278", "10", "193", "21", null, null, this.div_search);
            obj.set_taborder("2");
            obj.style.set_background("#fffde7ff");
            obj.set_maxlength("100");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup00", "absolute", "474", "10", "21", "21", null, null, this.div_search);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "14", "10", "103", "21", null, null, this.div_search);
            obj.set_taborder("25");
            obj.set_text("예약행사번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "539", null, this);
            obj.set_taborder("47");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "145", null, "860", "15", null, this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);
            obj = new Button("Button10", "absolute", "365", "0", null, "12", "360", null, this.div_list);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_master", "absolute", "0", "41", null, "288", "0", null, this.div_list);
            obj.set_taborder("2");
            obj.set_binddataset("ds_pre_eventM");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"145\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"144\"/><Column size=\"200\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"상품코드\"/><Cell col=\"2\" text=\"상품명\"/><Cell col=\"3\" text=\"단위\"/><Cell col=\"4\" text=\"입수\"/><Cell col=\"5\" text=\"계약단가\"/><Cell col=\"6\" text=\"발주량\"/><Cell col=\"7\" text=\"발주금액\"/><Cell col=\"8\" text=\"수주처코드\"/><Cell col=\"9\" text=\"수주처명\"/><Cell col=\"10\" text=\"수주처팀코드\"/><Cell col=\"11\" text=\"발주처코드\"/><Cell col=\"12\" text=\"발주처팀코드\"/><Cell col=\"13\" text=\"예약행사년도\"/><Cell col=\"14\" text=\"예약행사번호\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" style=\"align:center;\" text=\"bind:NA_WRS_C\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:NA_WRS_N\"/><Cell col=\"3\" text=\"bind:UNIT\"/><Cell col=\"4\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:BOXPE_AQZ\" mask=\"#,##0\"/><Cell col=\"5\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:CTR_UPR\" mask=\"#,##0\"/><Cell col=\"6\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:RQ_QT\" mask=\"#,##0\"/><Cell col=\"7\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:TOT_GOOD_PR\" mask=\"#,##0\"/><Cell col=\"8\" style=\"align:center;\" text=\"bind:RVOPL_NA_TRPL_C\"/><Cell col=\"9\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:RVOPL_NA_TRPL_N\"/><Cell col=\"10\" text=\"bind:RVOPL_NA_TEAM_C\"/><Cell col=\"11\" text=\"bind:ODRPL_NA_TRPL_C\"/><Cell col=\"12\" text=\"bind:ODRPL_NA_TEAM_C\"/><Cell col=\"13\" text=\"bind:BKG_EVT_YY\"/><Cell col=\"14\" text=\"bind:BKG_EVT_NO\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" style=\"align:center;\" text=\"합계\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\" displaytype=\"number\" expr=\"expr:dataset.getSum('RQ_QT');\" mask=\"#,##0\"/><Cell col=\"7\" displaytype=\"number\" expr=\"expr:dataset.getSum('TOT_GOOD_PR');\" mask=\"#,##0\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_detail", "absolute", "0", "369", null, "468", "0", null, this.div_list);
            obj.set_taborder("3");
            obj.set_autofittype("none");
            obj.set_binddataset("ds_pre_eventD");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"110\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"발주처코드\"/><Cell col=\"2\" text=\"발주처명\"/><Cell col=\"3\" text=\"팀\"/><Cell col=\"4\" text=\"배송요청일\"/><Cell col=\"5\" text=\"예약발주BOX\"/><Cell col=\"6\" text=\"발주확정BOX\"/><Cell col=\"7\" text=\"확정구성비\"/><Cell col=\"8\" text=\"확정발주금액\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" style=\"align:center;\" text=\"bind:ODRPL_NA_TRPL_C\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:ODRPL_NA_TRPL_NM\"/><Cell col=\"3\" style=\"align:center;\" text=\"bind:ODRPL_NA_TEAM_NM\"/><Cell col=\"4\" text=\"bind:DVY_RQR_DT\" mask=\"@@@@-@@-@@\"/><Cell col=\"5\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:RQ_QT\" mask=\"#,##0\"/><Cell col=\"6\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DFN_QT\" mask=\"#,##0\"/><Cell col=\"7\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DFN_RATE\" mask=\"0.00\"/><Cell col=\"8\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:TOT_GOOD_PR\" mask=\"#,##0\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" style=\"align:center;\" text=\"합계\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\" displaytype=\"number\" expr=\"expr:dataset.getSum('RQ_QT');\" mask=\"#,##0\"/><Cell col=\"6\" displaytype=\"number\" expr=\"expr:dataset.getSum('DFN_QT');\" mask=\"#,##0\"/><Cell col=\"7\" displaytype=\"number\" text=\"100\" mask=\"#,##0\"/><Cell col=\"8\" displaytype=\"number\" expr=\"expr:dataset.getSum('TOT_GOOD_PR');\" mask=\"#,##0\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_excel02", "absolute", null, "343", "41", "21", "0", null, this.div_list);
            obj.set_taborder("1");
            obj.set_text("엑셀");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_excel01", "absolute", null, "15", "41", "21", "0", null, this.div_list);
            obj.set_taborder("0");
            obj.set_text("엑셀");
            this.div_list.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "118", null, this);
            obj.set_taborder("1");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("2");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "158", null, this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web_downExcel", "absolute", "684", "25", "44", "14", null, null, this);
            obj.set_taborder("109");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 117, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 978, 503, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 1007, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("예약행사수주현황");

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
        this.addIncludeScript("VAN_DS_SC_0200.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0200.xfdl", function() {
        /*##################################################################################
         화면명	: 예약행사수주현황
         화면ID  	: VAN_DS_SC_0200
         작성자 	: swha
        ####################################################################################*/
        //include "lib::comLib.xjs";

        /* form load */
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e);
        	this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        	this.div_list.grd_detail.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        	this.div_list.grd_master.addEventHandler("oncellclick", this.grd_afterFnc, this);
        }

        /* form init*/
        this.form_init = function(obj,e)
        {
        	///페이지 로딩후 실행부분
        	this.div_search.edt_bkg_evt_yy.set_value(this.gfn_today("yyyy"));
        }

        /* Validation Check */
        this.fn_validationCheck = function()
        {
        	if (this.gfn_isNull(this.div_search.edt_bkg_evt_no.value)) {
        		this.alert('예약행사번호를 선택해주세요');
        		return false;
        	}

        	return true;
        }

        this.fn_search = function()
        {
        	var bkg_evt_yy = this.gfn_nullToEmpty(this.div_search.edt_bkg_evt_yy.value); // 예약행사년도
        	var bkg_evt_no = this.gfn_nullToEmpty(this.div_search.edt_bkg_evt_no.value); // 예약행사번호
        	var orr_ddl_dt = this.gfn_nullToEmpty(this.div_search.edt_orr_ddl_dt.value); // 발주마감일
        	var na_odr_st = this.gfn_nullToEmpty(this.div_search.edt_na_odr_st.value); // 마감상태
        	var odrpl_na_trpl_c = this.gfn_nullToEmpty(this.div_search.edt_odrpl_na_trpl_c.value); // 발주처코드
        	var na_was_c = this.gfn_nullToEmpty(this.div_search.edt_na_wrs_c.value); // 상품코드
        	var trplC = this.getTrplCode();
        	var params = "BKG_EVT_YY=" + bkg_evt_yy
        				+ " BKG_EVT_NO=" + bkg_evt_no
        				+ " ORR_DDL_DT=" + orr_ddl_dt
        				+ " NA_ODR_ST=" + na_odr_st
        				+ " ODRPL_NA_TRPL_C=" + odrpl_na_trpl_c
        				+ " NA_WRS_C=" + na_was_c
        				+ " TRPL_C=" + trplC;

        	var sSvcID = "retrievePreEventM";
        	var sURL = "svc::/rest/orders/retrievePreEvent";
        	var sInDatasets = "";
        	var sOutDatasets = "ds_pre_eventM=ds_PreEventM";
        	var sArgument = params;
        	var sCallbackFunc = "fn_callBack";

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, "S");
        }

        /* search */
        this.btn_search_onclick = function(obj,e)
        {
        	if (this.fn_validationCheck()) {
        		this.ds_pre_eventM.clearData();
        		this.ds_pre_eventD.clearData();
        		this.fn_search();
        	}
        }

        /* Event */
        this.grd_afterFnc = function(obj,e)
        {
        	var params = "BKG_EVT_YY=" + this.gfn_nullToEmpty(this.ds_pre_eventM.getColumn(this.ds_pre_eventM.rowposition, "BKG_EVT_YY"))
        				+ " BKG_EVT_NO=" + this.gfn_nullToEmpty(this.ds_pre_eventM.getColumn(this.ds_pre_eventM.rowposition, "BKG_EVT_NO"))
        				+ " NA_WRS_C=" + this.gfn_nullToEmpty(this.ds_pre_eventM.getColumn(this.ds_pre_eventM.rowposition, "NA_WRS_C"))
        				+ " RVOPL_NA_TRPL_C=" + this.gfn_nullToEmpty(this.ds_pre_eventM.getColumn(this.ds_pre_eventM.rowposition, "RVOPL_NA_TRPL_C"))
        				+ " RVOPL_NA_TEAM_C=" + this.gfn_nullToEmpty(this.ds_pre_eventM.getColumn(this.ds_pre_eventM.rowposition, "RVOPL_NA_TEAM_C"))
        				+ " ODRPL_NA_TRPL_C=" + this.gfn_nullToEmpty(this.div_search.edt_odrpl_na_trpl_c.value) // 발주처코드
        				+ " RQ_QT=" + this.gfn_nullToEmpty(this.ds_pre_eventM.getColumn(this.ds_pre_eventM.rowposition, "RQ_QT"));

        	var sSvcID = "retrievePreEventD";
        	var sURL = "svc::/rest/orders/retrievePreEventDetail";
        	var sInDatasets = "";
        	var sOutDatasets = "ds_pre_eventD=ds_PreEventD";
        	var sArgument = params;
        	var sCallbackFunc = "fn_callBack";

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets , sOutDatasets , sArgument , sCallbackFunc , "S");
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID == "retrievePreEventM") {
        			if (this.ds_pre_eventM.rowcount == 0) {
        				this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        			}
        		} else {
        			if (this.ds_pre_eventD.rowcount == 0) {
        				this.div_list.grd_detail.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        			}
        		}
        	}
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	if (this.gfn_isNull(strVal)) { return; }
        	var paramsArr = strVal.split(",");

        	if (strId == "VAN_DS_FN_0201") {
        		this.div_search.edt_bkg_evt_yy.set_value(paramsArr[0]);
        		this.div_search.edt_bkg_evt_no.set_value(paramsArr[1]);
        		this.div_search.edt_bkg_evtnm.set_value(paramsArr[2]);
        		this.div_search.edt_orr_ddl_dt.set_value(paramsArr[3]);
        		this.div_search.edt_na_odr_st.set_value(paramsArr[4]);
        	} else if (strId == "VAN_DS_FN_0202") {
        		this.div_search.edt_odrpl_na_trpl_c.set_value(paramsArr[0]);
        		this.div_search.edt_odrpl_na_trpl_n.set_value(paramsArr[1]);
        	} else if (strId == "VAN_DS_FN_0203") {
        		this.div_search.edt_na_wrs_c.set_value(paramsArr[0]);
        		this.div_search.edt_wrsnm.set_value(paramsArr[1]);
        	}
        }

        this.btn_excel_onclick = function(obj,e)
        {
        	if (this.fn_validationCheck()) {
        		this.fn_excel("A"); // 엑셀 기본
        	}
        }

        this.btn_excel01_onclick = function(obj,e)
        {
        	if (this.fn_validationCheck()) {
        		this.fn_excel("B"); // 마스터 엑셀
        	}
        }

        this.div_list_btn_excel02_onclick = function(obj,e)
        {
        	if (this.fn_validationCheck()) {
        		this.fn_excel("C"); // 디테일 엑셀
        	}
        }

        // 엑셀 다운로드
        this.fn_excel = function(flag)
        {
        	var bkg_evt_yy = this.gfn_nullToEmpty(this.div_search.edt_bkg_evt_yy.value); // 예약행사년도
        	var bkg_evt_no = this.gfn_nullToEmpty(this.div_search.edt_bkg_evt_no.value); // 예약행사번호
        // 	var orr_ddl_dt = this.gfn_nullToEmpty(this.div_search.edt_orr_ddl_dt.value); // 발주마감일
        // 	var na_odr_st = this.gfn_nullToEmpty(this.div_search.edt_na_odr_st.value); // 마감상태
        	var fileName = "예약행사수주현황.xlsx";
        	
        	var params = "BKG_EVT_YY=" + bkg_evt_yy
        					+ "&BKG_EVT_NO=" + bkg_evt_no
        // 					+ "&ORR_DDL_DT=" + orr_ddl_dt
        // 					+ "&NA_ODR_ST=" + na_odr_st
        					+ "&SEPARATOR=" + flag;
        	
        	if (flag == "A" || flag == "B") {
        		var odrpl_na_trpl_c = this.gfn_nullToEmpty(this.div_search.edt_odrpl_na_trpl_c.value); // 발주처코드
        		var na_was_c = this.gfn_nullToEmpty(this.div_search.edt_na_wrs_c.value); // 상품코드
        		var trplC = this.getTrplCode(); // 권한사업장
        		if (flag == "B") {
        			fileName = "예약행사수주현황_Master.xlsx";
        		}

        		params += "&ODRPL_NA_TRPL_C=" + odrpl_na_trpl_c
        					+ "&NA_WRS_C=" + na_was_c
        					+ "&TRPL_C=" + trplC;
        	} else if (flag == "C") {
        		fileName = "예약행사수주현황_Detail.xlsx";
        		var dsM = this.ds_pre_eventM;
        		var dsRow = this.ds_pre_eventM.rowposition;
        		
        		params += "&ODRPL_NA_TRPL_C=" + this.gfn_nullToEmpty(this.div_search.edt_odrpl_na_trpl_c.value) // 발주처코드
        					+ "&NA_WRS_C=" + this.gfn_nullToEmpty(dsM.getColumn(dsRow, "NA_WRS_C"))
        					+ "&RVOPL_NA_TRPL_C=" + this.gfn_nullToEmpty(dsM.getColumn(dsRow, "RVOPL_NA_TRPL_C"))
        					+ "&RQ_QT=" + this.gfn_nullToEmpty(dsM.getColumn(dsRow, "RQ_QT"));
        	} else {
        		return;
        	}

        	params += "&FILE_NAME=" + fileName;
        	params = encodeURI(encodeURI(params));
        	excelDownHandler(application.gv_server_url+"rest/excel/orders/downloadExcelMasterPreEvent?"+params, this);	
        }

        /* 출력 버튼 */
        this.btn_print_onclick = function(obj,e)
        {
        	var trplC = this.getTrplCode();
        	var bkg_evt_yy = this.gfn_nullToEmpty(this.div_search.edt_bkg_evt_yy.value); // 예약행사년도
        	var bkg_evt_no = this.gfn_nullToEmpty(this.div_search.edt_bkg_evt_no.value); // 예약행사번호
        	var bkg_evtnm = this.gfn_nullToEmpty(this.div_search.edt_bkg_evtnm.value); // 예약행사명
        	var odrpl_na_trpl_c = this.gfn_nullToEmpty(this.div_search.edt_odrpl_na_trpl_c.value); // 발주처코드
        	var orr_ddl_dt = this.gfn_nullToEmpty(this.div_search.edt_orr_ddl_dt.value); // 발주마감일
        	var na_wrs_c = this.gfn_nullToEmpty(this.div_search.edt_na_wrs_c.value); // 상품코드
        	var na_odr_st = this.gfn_nullToEmpty(this.div_search.edt_na_odr_st.value); // 마감상태

        	var odrpl_na_trpl_c_txt = "";
        	var na_wrs_c_txt = "";

        	if (odrpl_na_trpl_c == '') {
              odrpl_na_trpl_c_txt = 'all';
        	}

        	if (na_wrs_c == '') {
              na_wrs_c_txt = 'all';
        	}

        	var searchText = this.getTrplCodePrint()
        		+ ", 행사년번:" + bkg_evt_yy + "-" + bkg_evt_no + "-" + bkg_evtnm
        		+ ", 발주마감일:" + orr_ddl_dt + ", 발주처:" + ((odrpl_na_trpl_c_txt == 'all')?'전체': odrpl_na_trpl_c)
        		+ ", 상품:" + ((na_wrs_c_txt == 'all')?'전체': na_wrs_c);

           var ozParam = {
              sId: 'VAN_DS_SC_0200', 
              sUrl: '/rest/oz/orders/printPreEventListMaster', 
              paramType: 'param', 
              sParam:{
                 TRPL_C_TEXT:searchText,
                 bkg_evt_yy:bkg_evt_yy,
                 bkg_evt_no:bkg_evt_no,
                 odrpl_na_trpl_c:odrpl_na_trpl_c,
                 na_wrs_c:na_wrs_c,
                 TRPL_C:trplC,
                 orr_ddl_dt:orr_ddl_dt,
                 na_odr_st:na_odr_st
              }
           };
           this.ozViewer(ozParam);
        }

        this.div_list_Button10_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        //예약행사번호 조회
        this.fn_enterBkgEvtPopUp = function(auto)
        {
        	var bkg_evt_yy = this.gfn_nullToEmpty(this.gfn_trim(this.div_search.edt_bkg_evt_yy.value)); // 예약행사년도
        	var bkg_evt_no = this.gfn_nullToEmpty(this.gfn_trim(this.div_search.edt_bkg_evt_no.value)); // 예약행사번호
        	var bkg_evtnm = this.gfn_nullToEmpty(this.gfn_trim(this.div_search.edt_bkg_evtnm.value)); // 예약행사명

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

        
        this.div_search_btn_popup00_onclick = function(obj,e)
        {
        	this.fn_enterBkgEvtPopUp(0);
        }

        this.div_search_edt_bkg_evt_no_onkeydown = function(obj,e)
        {
        	if (e.keycode==13) {
        		this.fn_enterBkgEvtPopUp(1);
        	}
        }

        //농협사업장 팝업 조회
        this.div_search_btn_popup01_onclick = function(obj,e)
        {
        	this.fn_enterOdrplPopUp('0');
        }

        this.fn_enterOdrplPopUp = function(auto)
        {
        	var form_id = "VAN_DS_SC_0200";
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

        this.div_search_edt_odrpl_na_trpl_c_onkeydown = function(obj,e)
        {
        	if (e.keycode==13) {
        		this.fn_enterOdrplPopUp('1');
        	}
        }

        this.fn_enterWrsPopUp = function(auto) {
        	var form_id = "VAN_DS_SC_0200";

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

        this.div_search_btn_popup02_onclick = function(obj,e)
        {
        	this.fn_enterWrsPopUp(0);
        }

        
        this.div_search_edt_na_wrs_c_onkeydown = function(obj,e)
        {
        	if (e.keycode==13) {
        		this.fn_enterWrsPopUp(1);
        	}
        }

        this.VAN_DS_SC_0200_onkeydown = function(obj,e)
        {
        	var key = this.gfn_onkeydown(e);

        	if (key=="F") {
        		this.btn_search_onclick();
        	} else if (key=="E") {
        		this.btn_excel_onclick();
        	} else if (key=="P") {
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
            this.addEventHandler("onkeydown", this.VAN_DS_SC_0200_onkeydown, this);
            this.div_search.edt_odrpl_na_trpl_c.addEventHandler("onkeydown", this.div_search_edt_odrpl_na_trpl_c_onkeydown, this);
            this.div_search.edt_odrpl_na_trpl_n.addEventHandler("onkeydown", this.div_search_edt_odrpl_na_trpl_c_onkeydown, this);
            this.div_search.btn_popup01.addEventHandler("onclick", this.div_search_btn_popup01_onclick, this);
            this.div_search.Static18.addEventHandler("onclick", this.Div00_Static04_onclick, this);
            this.div_search.edt_wrsnm.addEventHandler("onkeydown", this.div_search_edt_na_wrs_c_onkeydown, this);
            this.div_search.btn_popup02.addEventHandler("onclick", this.div_search_btn_popup02_onclick, this);
            this.div_search.edt_na_wrs_c.addEventHandler("onkeydown", this.div_search_edt_na_wrs_c_onkeydown, this);
            this.div_search.edt_bkg_evt_no.addEventHandler("onkeydown", this.div_search_edt_bkg_evt_no_onkeydown, this);
            this.div_search.edt_bkg_evtnm.addEventHandler("onkeydown", this.div_search_edt_bkg_evt_no_onkeydown, this);
            this.div_search.btn_popup00.addEventHandler("onclick", this.div_search_btn_popup00_onclick, this);
            this.div_list.addEventHandler("onsize", this.div_list_onsize, this);
            this.div_list.Button10.addEventHandler("onclick", this.div_list_Button10_onclick, this);
            this.div_list.grd_master.addEventHandler("oncellclick", this.fn_grid01_search, this);
            this.div_list.btn_excel02.addEventHandler("onclick", this.div_list_btn_excel02_onclick, this);
            this.div_list.btn_excel01.addEventHandler("onclick", this.btn_excel01_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_excel.addEventHandler("onmousemove", this.btn_excel_onmousemove, this);
            this.btn_print.addEventHandler("onclick", this.btn_print_onclick, this);
            this.btn_print.addEventHandler("onmousemove", this.btn_print_onmousemove, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_search.addEventHandler("onmousemove", this.btn_search_onmousemove, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0200.xfdl");
        this.loadPreloadList();
       
    };
}
)();
