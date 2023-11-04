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
                this.set_name("frm_van_ds_sc_0230");
                this.set_titletext("행사가격변동조회");
                this._setFormPosition(0,0,803,1007);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_event_priceM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EVT_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"EVTNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"SHRT_BZPLNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"TTEAMNM\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PRGR_C\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_event_priceD", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"발주처코드\" type=\"STRING\" size=\"256\"/><Column id=\"발주처명\" type=\"STRING\" size=\"256\"/><Column id=\"팀\" type=\"STRING\" size=\"256\"/><Column id=\"예약발주BOX\" type=\"STRING\" size=\"256\"/><Column id=\"발주확정BOX\" type=\"STRING\" size=\"256\"/><Column id=\"확정구성비\" type=\"STRING\" size=\"256\"/><Column id=\"확정발주금액\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "118", "15", null, this);
            obj.set_taborder("103");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "15", "36", "91", "21", null, null, this.div_search);
            obj.set_taborder("8");
            obj.set_text("행사일자");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "15", "61", "91", "21", null, null, this.div_search);
            obj.set_taborder("12");
            obj.set_text("사업장");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_na_pzplc", "absolute", "118", "62", "105", "21", null, null, this.div_search);
            obj.set_taborder("13");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_shrt_bzplnm", "absolute", "225", "62", "187", "21", null, null, this.div_search);
            obj.set_taborder("14");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup01", "absolute", "416", "62", "21", "21", null, null, this.div_search);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("25");
            obj.set_text("행사번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "16", "86", "103", "21", null, null, this.div_search);
            obj.set_taborder("32");
            obj.set_text("행사상품코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_date_type", "absolute", "118", "36", "105", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_date_type_innerdataset = new Dataset("cbo_date_type_innerdataset", this.div_search.cbo_date_type);
            cbo_date_type_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">시작일</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">종료일</Col></Row></Rows>");
            obj.set_innerdataset(cbo_date_type_innerdataset);
            obj.set_taborder("33");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displayrowcount("-1");
            obj.set_value("1");
            obj.set_text("시작일");
            obj.set_index("0");
            obj = new Calendar("cal_evt_st_dt", "absolute", "225", "36", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("34");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("cal_evt_et_dt", "absolute", "337", "36", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("35");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static04", "absolute", "327", "36", "10", "21", null, null, this.div_search);
            obj.set_taborder("36");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_na_wrs_c", "absolute", "118", "87", "105", "21", null, null, this.div_search);
            obj.set_taborder("37");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_wrsnm", "absolute", "225", "87", "187", "21", null, null, this.div_search);
            obj.set_taborder("38");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup02", "absolute", "416", "87", "21", "21", null, null, this.div_search);
            obj.set_taborder("39");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_evt_sqno", "absolute", "118", "10", "105", "21", null, null, this.div_search);
            obj.set_taborder("40");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_evtnm", "absolute", "225", "10", "187", "21", null, null, this.div_search);
            obj.set_taborder("41");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup00", "absolute", "416", "10", "21", "21", null, null, this.div_search);
            obj.set_taborder("42");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "1", "22", "15", "141", null, null, this);
            obj.set_taborder("102");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "333", "86", "103", "5", null, null, this);
            obj.set_taborder("90");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "308", "30", "103", "10", null, null, this);
            obj.set_taborder("100");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "224", "137", "103", "10", null, null, this);
            obj.set_taborder("101");
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

            obj = new Div("div_list", "absolute", "0", "146", null, null, "15", "19", this);
            obj.set_taborder("64");
            this.addChild(obj.name, obj);
            obj = new Button("Button10", "absolute", "365", "0", null, "12", "360", null, this.div_list);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_master", "absolute", "0", "41", null, "309", "0", null, this.div_list);
            obj.set_taborder("10");
            obj.set_binddataset("ds_event_priceM");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"250\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"97\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"행사번호\"/><Cell col=\"2\" text=\"통합행사명\"/><Cell col=\"3\" text=\"사업장코드\"/><Cell col=\"4\" text=\"사업장명\"/><Cell col=\"5\" text=\"팀코드\"/><Cell col=\"6\" text=\"팀명\"/><Cell col=\"7\" text=\"행사시작일\"/><Cell col=\"8\" text=\"행사종료일\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:EVT_SQNO\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:EVTNM\"/><Cell col=\"3\" text=\"bind:NA_BZPLC\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:SHRT_BZPLNM\"/><Cell col=\"5\" text=\"bind:NA_TEAM_C\"/><Cell col=\"6\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:TEANNM\"/><Cell col=\"7\" displaytype=\"date\" text=\"bind:EVT_ST_DT\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"date\" text=\"bind:EVT_ED_DT\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_detail", "absolute", "0", "370", null, "468", "0", null, this.div_list);
            obj.set_taborder("11");
            obj.set_autofittype("none");
            obj.set_binddataset("ds_event_priceD");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"260\"/><Column size=\"120\"/><Column size=\"0\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"상품코드\"/><Cell col=\"2\" text=\"상품명\"/><Cell col=\"3\" text=\"단축상품명\"/><Cell col=\"4\" text=\"행사원가\"/><Cell col=\"5\" text=\"권장판매가\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:NA_WRS_C\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:WRSNM\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:WRS_ABR_NM\"/><Cell col=\"4\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:EVT_PCS\" mask=\"#,##0\"/><Cell col=\"5\" text=\"bind:ECG_SEL_UPR\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "733", "1", "55", "40", null, null, this.div_list);
            obj.set_taborder("13");
            obj.set_text("40");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "741", "350", "55", "20", null, null, this.div_list);
            obj.set_taborder("16");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);

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

            obj = new Static("Static06", "absolute", "107", "61", "103", "5", null, null, this);
            obj.set_taborder("107");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "68", null, this);
            obj.set_taborder("109");
            obj.set_text("Div00");
            obj.set_visible("false");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "309", "111", "103", "5", null, null, this);
            obj.set_taborder("110");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 118, this.div_search,
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
            		p.set_titletext("행사가격변동조회");

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
        this.addIncludeScript("VAN_DS_SC_0230.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0230.xfdl", function() {
        /*##################################################################################
         화면명	: 행사가격조회
         화면ID  	: VAN_DS_SC_0230
         작성자 	: swha
        ####################################################################################*/
        //include "lib::comLib.xjs";

        /* Form Load */
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e);
        	this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        	this.div_list.grd_detail.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        	//그리드클릭 이벤트 등록
        	this.div_list.grd_master.addEventHandler("oncellclick", this.grd_afterFnc, this);
        }

        /* Form Init*/
        this.form_init = function(obj,e)
        {
        	///페이지 로딩후 실행부분
        	this.div_search.cal_evt_st_dt.set_value(this.gfn_today("yyyyMMdd"));
        	this.div_search.cal_evt_et_dt.set_value(this.gfn_addDate(this.gfn_today("yyyyMMdd"), 7));
        }

        this.fn_afterFormOnload = function() //onload
        {

        }

        /* Validation Check */
        this.fn_validationCheck = function()
        {
        	return true;
        }

        /* Search */
        this.btn_search_onclick = function(obj,e)
        {
        	//if (this.fn_validationCheck()) {
        	// if (true) {
        	this.ds_event_priceM.clearData();
        	this.ds_event_priceD.clearData();

        	var evtSqno = this.gfn_nullToEmpty(this.div_search.edt_evt_sqno.value);
        	var naWrsC = this.gfn_nullToEmpty(this.div_search.edt_na_wrs_c.value);
        	var dateType = this.gfn_nullToEmpty(this.div_search.cbo_date_type.value);
        	var evtStdt = this.gfn_nullToEmpty(this.div_search.cal_evt_st_dt.value);
        	var evtEtDt = this.gfn_nullToEmpty(this.div_search.cal_evt_et_dt.value);
        	var naPzplc = this.gfn_nullToEmpty(this.div_search.edt_na_pzplc.value);
        	var trplC 			= this.getTrplCode();

        	var params =  "EVT_SQNO=" + evtSqno
        				+ " NA_WRS_C=" + naWrsC
        				+ " DATE_TYPE=" + dateType
        				+ " EVT_ST_DT=" + evtStdt
        				+ " EVT_ET_DT="+ evtEtDt
        				+ " NA_PZPLC="+ naPzplc
        				+ " trplC="+trplC;

        	var sSvcID        = "retrieveEventPriceChange";//통신아이디
        	var sURL          = "svc::/rest/orders/retrieveEventPriceChange";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_event_priceM=ds_EventPriceM";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        	// }
        }

        /* Event */
        this.grd_afterFnc = function(obj,e)
        {
        	var NA_BZPLC = this.gfn_nullToEmpty(this.ds_event_priceM.getColumn(this.ds_event_priceM.rowposition, "NA_BZPLC"))
        	var EVT_SQNO = this.gfn_nullToEmpty(this.ds_event_priceM.getColumn(this.ds_event_priceM.rowposition, "EVT_SQNO"))
        	var PRGR_C = this.gfn_nullToEmpty(this.ds_event_priceM.getColumn(this.ds_event_priceM.rowposition, "PRGR_C"))

        	if (!this.gfn_isNull(NA_BZPLC)) {
        		var params =  " NA_BZPLC="+ NA_BZPLC
        					 +" EVT_SQNO="+EVT_SQNO
        					 +" PRGR_C="+PRGR_C;

        		var sSvcID        = "retrieveEventPriceChangeD";//통신아이디
        		var sURL          = "svc::/rest/orders/retrieveEventPriceChangeDetail";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_event_priceD=ds_EventPriceD";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = params;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회

        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets , sOutDatasets , sArgument , sCallbackFunc , sTranType);
        	}
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID == "retrieveEventPriceChange") {
        			if (this.ds_event_priceM.rowcount == 0) {
        				//this.div_list.grd_master.set_nodatatext("result.message.search.no.exist.data");
        			}
        		} else {
        			if (this.ds_event_priceD.rowcount == 0) {
        				//this.div_list.grd_detail.set_nodatatext("result.message.search.no.exist.data");
        				//this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			}
        		}
        	}
        }

        this.div_search_btn_popup00_onclick = function(obj,e)
        {
        	//권한사업장 코드
        	var trplC = this.getTrplCode();
        	var oArg = {form_id:"VAN_DS_SC_0230", trplC:trplC};
        	var sOption = "autosize=true, title=false";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("VAN_DS_FN_0206", "SCM.EVENT::VAN_DS_FN_0206.xfdl", oArg, sOption, sPopupCallBack);
        }

        //상품조회 팝업
        this.div_search_btn_popup02_onclick = function(obj,e)
        {
        	/*
        	var oArg = {form_id:"VAN_DS_SC_0230", trplC:this.getTrplCode()};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("searchWRS", "POPUP::POPUP_SRC_WRS.xfdl", oArg, sOption, sPopupCallBack);

        
        	var oArg = {form_id:"VAN_DS_SC_0300"};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("wrsSearchPop", "SCM.ORDER::VAN_DS_SC_0100_P02.xfdl", oArg, sOption, sPopupCallBack);
        	*/

        	this.fn_enterWrs();
        }

        //발주처조회 팝업
        this.div_search_btn_popup01_onclick = function(obj,e)
        {
        	this.fn_enterOdrpl('0');
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	if (this.gfn_isNull(strVal)) { return; }
        	var paramsArr = strVal.split(",");

        	if (strId == "wrsSearchPop") {//상품조회 팝업
        		this.div_search.edt_na_wrs_c.set_value(paramsArr[0]);
        		this.div_search.edt_wrsnm.set_value(paramsArr[1]);
        	} else if (strId == "VAN_DS_FN_0206") {//통합행사 조회 팝업
        		this.div_search.edt_evt_sqno.set_value(paramsArr[0]);
        		this.div_search.edt_evtnm.set_value(paramsArr[1]);
        	} else if (strId == "POPUP_TRNREL_ODRPL") {//사업장조회 팝업
        		this.div_search.edt_na_pzplc.set_value(paramsArr[0]);
        		this.div_search.edt_shrt_bzplnm.set_value(paramsArr[1]);
        	}
        	/*
        	if (strId == "VAN_DS_FN_0202") {// 사업장 조회
        		this.div_search.edt_na_pzplc.set_value(paramsArr[0]);
        		this.div_search.edt_shrt_bzplnm.set_value(paramsArr[1]);
        	}
        	*/
        }

        this.div_list_Button10_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        this.div_search_edt_evt_sqno_onkeyup = function(obj,e)
        {
        	if (e.keycode==13) {
        		this.fn_enterEvtSqno(1);
        	}
        }

        this.fn_enterEvtSqno = function(auto) {
        	var evt_sqno 	= this.gfn_nullToEmpty(this.div_search.edt_evt_sqno.value);
        	var evtnm 		= this.gfn_nullToEmpty(this.div_search.edt_evtnm.value);
        	if (auto == "1") {
        		if (this.gfn_isNull(evt_sqno) && this.gfn_isNull(evtnm)) {
        			alert("행사번호 또는 행사명을 입력해 주세요");
        			return false;
        		}
        	}

        	//권한사업장 코드
        	var trplC = this.getTrplCode();
        	var oArg = {form_id:"VAN_DS_SC_0230", trplC:trplC, auto:auto, evt_sqno:evt_sqno, evtnm:evtnm};
        	var sOption = "autosize=true, title=false";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("VAN_DS_FN_0206", "SCM.EVENT::VAN_DS_FN_0206.xfdl", oArg, sOption, sPopupCallBack);
        }

        this.div_search_edt_na_pzplc_onkeyup = function(obj,e)
        {
        	if (e.keycode == "13") {
        		this.fn_enterOdrpl('1');
        	}
        }

        this.fn_enterOdrpl = function(auto)
        {
        	var trplC = this.getTrplCode();//권한사업장
        	var trplO = this.gfn_nullToEmpty(this.div_search.edt_na_pzplc.value);
        	var trplON = this.gfn_nullToEmpty(this.div_search.edt_shrt_bzplnm.value);
        	var idx = "0";

        	if (auto == "1") {
        		if (this.gfn_length(trplO) < 7 && this.gfn_isNull(trplO) == false) {
        			alert("발주처 코드["+trplO+"] 6자리 이상 입력해 주세요");
        			return false;
        		} else if (this.gfn_length(trplON) < 4&& this.gfn_isNull(trplON) == false) {
        			alert("발주처명["+trplON+"] 3자리 이상 입력해 주세요");
        			return false;
        		} else if (this.gfn_isNull(trplO) && this.gfn_isNull(trplON)) {
        			alert("발주처코드나 명을 입력해 주세요");
        			return false;
        		} else {
        			if (this.gfn_length(trplO) > 0) {
        				idx = "0";
        			} else {
        				idx ="1";
        			}
        		}
        	}

        	var trplC = this.getTrplCode();//권한사업장
        	var oArg = {form_id:"VAN_DS_SC_0300", trplC:trplC, idx:idx, auto:auto, trplO:trplO, trplON:trplON};
        	var sOption = "autosize=true, title=false";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("POPUP_TRNREL_ODRPL", "POPUP::POPUP_TRNREL_ODRPL.xfdl", oArg, sOption, sPopupCallBack);
        }

        this.div_search_edt_na_wrs_c_onkeyup = function(obj,e)
        {
        	if (e.keycode == "13") {
        		this.fn_enterWrs(true);
        	}
        }

        this.fn_enterWrs = function(param)
        {
        	var params = {
                    autoType:param, 
                    searchCode:this.gfn_nullToEmpty(this.div_search.edt_na_wrs_c.value), 
                    searchText:this.gfn_nullToEmpty(this.div_search.edt_wrsnm.value)
        	}
        	if (typeof param == "boolean") {
              if (!this.searPopValue(params)) {return};
        	}

        	var oArg = {autoPop:params};
        	var sOption = "autosize=true, titleText=false";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("POPUP_SRC_WRS", "POPUP::POPUP_SRC_WRS.xfdl", oArg, sOption, sPopupCallBack);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("oninit", this.form_init, this);
            this.div_search.edt_na_pzplc.addEventHandler("onkeyup", this.div_search_edt_na_pzplc_onkeyup, this);
            this.div_search.edt_shrt_bzplnm.addEventHandler("onkeyup", this.div_search_edt_na_pzplc_onkeyup, this);
            this.div_search.btn_popup01.addEventHandler("onclick", this.div_search_btn_popup01_onclick, this);
            this.div_search.edt_na_wrs_c.addEventHandler("onkeyup", this.div_search_edt_na_wrs_c_onkeyup, this);
            this.div_search.edt_wrsnm.addEventHandler("onkeyup", this.div_search_edt_na_wrs_c_onkeyup, this);
            this.div_search.btn_popup02.addEventHandler("onclick", this.div_search_btn_popup02_onclick, this);
            this.div_search.edt_evt_sqno.addEventHandler("onkeyup", this.div_search_edt_evt_sqno_onkeyup, this);
            this.div_search.edt_evtnm.addEventHandler("onkeyup", this.div_search_edt_evt_sqno_onkeyup, this);
            this.div_search.btn_popup00.addEventHandler("onclick", this.div_search_btn_popup00_onclick, this);
            this.div_list.Button10.addEventHandler("onclick", this.div_list_Button10_onclick, this);
            this.div_list.grd_master.addEventHandler("oncellclick", this.fn_grid01_search, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0230.xfdl");
        this.loadPreloadList();
       
    };
}
)();
