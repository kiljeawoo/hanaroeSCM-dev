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
                this.set_name("frm_van_ds_sc_0220");
                this.set_titletext("예약행사진행현황");
                this._setFormPosition(0,0,803,1007);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pre_event_procM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BKG_EVT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BKG_EVTNM\" type=\"STRING\" size=\"257\"/><Column id=\"BKG_EVT_WRS_CND_DSC\" type=\"STRING\" size=\"258\"/><Column id=\"ORR_DT\" type=\"STRING\" size=\"259\"/><Column id=\"DVY_DT\" type=\"STRING\" size=\"260\"/><Column id=\"PRG_STSC_NM\" type=\"STRING\" size=\"261\"/><Column id=\"BKG_EVT_YY\" type=\"STRING\" size=\"262\"/><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"263\"/><Column id=\"ODRPL_NA_TRPL_C\" type=\"STRING\" size=\"264\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pre_event_procD", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ODRPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TRPL_N\" type=\"STRING\" size=\"257\"/><Column id=\"ODRPL_NA_TEAM_C\" type=\"STRING\" size=\"258\"/><Column id=\"WRS_CNT\" type=\"STRING\" size=\"259\"/><Column id=\"RQ_QT\" type=\"STRING\" size=\"260\"/><Column id=\"DFN_QT\" type=\"STRING\" size=\"261\"/><Column id=\"DV_QT\" type=\"STRING\" size=\"262\"/><Column id=\"DD_QT\" type=\"STRING\" size=\"263\"/><Column id=\"ER_QT\" type=\"STRING\" size=\"264\"/><Column id=\"DL_QT\" type=\"STRING\" size=\"265\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "94", "15", null, this);
            obj.set_taborder("103");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "15", "62", "103", "21", null, null, this.div_search);
            obj.set_taborder("16");
            obj.set_text("상품");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_wrsnm", "absolute", "278", "62", "143", "21", null, null, this.div_search);
            obj.set_taborder("18");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("popup_Rvopl", "absolute", "425", "62", "21", "21", null, null, this.div_search);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_na_wrs_c", "absolute", "118", "62", "158", "21", null, null, this.div_search);
            obj.set_taborder("20");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_bkg_evt_yy_fr", "absolute", "118", "10", "75", "21", null, null, this.div_search);
            obj.set_taborder("21");
            obj.style.set_background("#fffde7ff");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_bkg_evt_no_fr", "absolute", "195", "10", "82", "21", null, null, this.div_search);
            obj.set_taborder("22");
            obj.style.set_background("#fffde7ff");
            obj.set_maxlength("5");
            obj.set_inputtype("number");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_bkg_evtnm_fr", "absolute", "279", "10", "143", "21", null, null, this.div_search);
            obj.set_taborder("23");
            obj.style.set_background("#fffde7ff");
            obj.set_maxlength("50");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("Button67", "absolute", "425", "10", "21", "21", null, null, this.div_search);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "15", "10", "103", "21", null, null, this.div_search);
            obj.set_taborder("25");
            obj.set_text("예약구매번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "36", "103", "21", null, null, this.div_search);
            obj.set_taborder("28");
            obj.set_text("발주처");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_odrpl_na_trpl_c", "absolute", "118", "36", "158", "21", null, null, this.div_search);
            obj.set_taborder("29");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_odrpl_na_trpl_n", "absolute", "278", "36", "143", "21", null, null, this.div_search);
            obj.set_taborder("30");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("popup_OdrPl00", "absolute", "425", "36", "21", "21", null, null, this.div_search);
            obj.set_taborder("31");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static131", "absolute", "447", "10", "10", "21", null, null, this.div_search);
            obj.set_taborder("32");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_bkg_evt_yy_to", "absolute", "457", "10", "75", "21", null, null, this.div_search);
            obj.set_taborder("33");
            obj.style.set_background("#fffde7ff");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_bkg_evt_no_to", "absolute", "534", "10", "82", "21", null, null, this.div_search);
            obj.set_taborder("34");
            obj.style.set_background("#fffde7ff");
            obj.set_maxlength("5");
            obj.set_inputtype("number");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_bkg_evtnm_to", "absolute", "618", "10", "143", "21", null, null, this.div_search);
            obj.set_taborder("35");
            obj.style.set_background("#fffde7ff");
            obj.set_maxlength("50");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "764", "10", "21", "21", null, null, this.div_search);
            obj.set_taborder("36");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "1", "30", "15", "141", null, null, this);
            obj.set_taborder("102");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "320", "61", "103", "5", null, null, this);
            obj.set_taborder("99");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "320", "30", "103", "10", null, null, this);
            obj.set_taborder("100");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "224", "113", "103", "10", null, null, this);
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

            obj = new Div("div_list", "absolute", "0", "122", null, null, "15", "5", this);
            obj.set_taborder("64");
            this.addChild(obj.name, obj);
            obj = new Button("Button10", "absolute", "365", "0", null, "12", "360", null, this.div_list);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_master", "absolute", "0", "40", null, "334", "0", null, this.div_list);
            obj.set_taborder("10");
            obj.set_binddataset("ds_pre_event_procM");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"179\"/><Column size=\"207\"/><Column size=\"121\"/><Column size=\"166\"/><Column size=\"166\"/><Column size=\"156\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"예약행사번호\"/><Cell col=\"2\" text=\"예약행사명\"/><Cell col=\"3\" text=\"상품구분\"/><Cell col=\"4\" text=\"발주기간\"/><Cell col=\"5\" text=\"배송기간\"/><Cell col=\"6\" text=\"진행상태\"/><Cell col=\"7\" text=\"예약행사년도\"/><Cell col=\"8\" text=\"상품코드\"/><Cell col=\"9\" text=\"발주처코드\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" style=\"align:center;\" expr=\"expr:BKG_EVT_YY+'-'+BKG_EVT_NO\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:BKG_EVTNM\"/><Cell col=\"3\" cssclass=\"center\" text=\"bind:BKG_EVT_WRS_CND_DSC\"/><Cell col=\"4\" displaytype=\"normal\" cssclass=\"center\" text=\"bind:ORR_DT\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"normal\" style=\"align:center;\" text=\"bind:DVY_DT\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" style=\"align:center;\" text=\"bind:PRG_STSC_NM\"/><Cell col=\"7\" text=\"bind:BKG_EVT_YY\"/><Cell col=\"8\" text=\"bind:NA_WRS_C\"/><Cell col=\"9\" text=\"bind:ODRPL_NA_TRPL_C\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_detail", "absolute", "0", "393", null, "468", "0", null, this.div_list);
            obj.set_taborder("11");
            obj.set_autofittype("none");
            obj.set_binddataset("ds_pre_event_procD");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"161\"/><Column size=\"167\"/><Column size=\"161\"/><Column size=\"110\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"발주처\"/><Cell col=\"2\" text=\"발주처명\"/><Cell col=\"3\" text=\"발주처팀\"/><Cell col=\"4\" text=\"상품건수\"/><Cell col=\"5\" text=\"예약주문BOX\"/><Cell col=\"6\" text=\"발주조정BOX\"/><Cell col=\"7\" text=\"마감/분배BOX\"/><Cell col=\"8\" text=\"발주생성BOX\"/><Cell col=\"9\" text=\"발주오류BOX\"/><Cell col=\"10\" text=\"삭제처리BOX\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" style=\"align:center;\" text=\"bind:ODRPL_NA_TRPL_C\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:ODRPL_NA_TRPL_N\"/><Cell col=\"3\" style=\"align:center;\" text=\"bind:ODRPL_NA_TEAM_C\"/><Cell col=\"4\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:WRS_CNT\" mask=\"#,##0\"/><Cell col=\"5\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:RQ_QT\" mask=\"#,##0\"/><Cell col=\"6\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DFN_QT\" mask=\"#,##0\"/><Cell col=\"7\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DV_QT\" mask=\"#,##0\"/><Cell col=\"8\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DD_QT\" mask=\"#,##0\"/><Cell col=\"9\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ER_QT\" mask=\"#,##0\"/><Cell col=\"10\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DL_QT\" mask=\"#,##0\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" style=\"align:center;\" text=\"합계\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" displaytype=\"number\" expr=\"expr:dataset.getSum('WRS_CNT');\" mask=\"#,##0\"/><Cell col=\"5\" displaytype=\"number\" expr=\"expr:dataset.getSum('RQ_QT');\" mask=\"#,##0\"/><Cell col=\"6\" displaytype=\"number\" expr=\"expr:dataset.getSum('DFN_QT');\" mask=\"#,##0\"/><Cell col=\"7\" displaytype=\"number\" expr=\"expr:dataset.getSum('DV_QT');\" mask=\"#,##0\"/><Cell col=\"8\" displaytype=\"number\" expr=\"expr:dataset.getSum('DD_QT');\" mask=\"#,##0\"/><Cell col=\"9\" displaytype=\"number\" expr=\"expr:dataset.getSum('RE_QT');\" mask=\"#,##0\"/><Cell col=\"10\" displaytype=\"number\" expr=\"expr:dataset.getSum('DL_QT');\" mask=\"#,##0\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "733", "1", "55", "40", null, null, this.div_list);
            obj.set_taborder("13");
            obj.set_text("40");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "733", "373", "55", "20", null, null, this.div_list);
            obj.set_taborder("14");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
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

            obj = new Static("Static02", "absolute", "327", "87", "103", "5", null, null, this);
            obj.set_taborder("109");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "379", "21", "158", null, this);
            obj.set_taborder("110");
            obj.set_text("Div00");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web_downExcel", "absolute", "641", "22", "44", "14", null, null, this);
            obj.set_taborder("111");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 94, this.div_search,
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
            		p.set_titletext("예약행사진행현황");

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
        this.addIncludeScript("VAN_DS_SC_0220.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0220.xfdl", function(exports) {
        /*##################################################################################
         화면명	: 예약행사진행현황
         화면ID  	: VAN_DS_SC_0220
         작성자 	: swha
        ####################################################################################*/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        /* Form Load */
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e);
        	this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        	this.div_list.grd_detail.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        	//그리드클릭 이벤트 등록
        	this.div_list.grd_master.addEventHandler("oncellclick", this.grd_afterFnc, this);
        }

        /* Form Init */
        this.form_init = function(obj,e)
        {
        	this.div_search.edt_bkg_evt_yy_fr.set_value(this.gfn_today("yyyy"));
        	this.div_search.edt_bkg_evt_yy_to.set_value(this.gfn_today("yyyy"));

        	//권한사업장 표시 여부(1:본사)
        	if (application.gv_mbcoType != '1') {
        		this.Div00.visible = false;
        	}
        }

        /* Validation Check */
        this.fn_validationCheck = function()
        {
        	if (this.gfn_isNull(this.div_search.edt_bkg_evt_no_fr.value)) {
        		this.alert('예약행사번호를 선택해주세요');
        		return false;
        	}

        	if (this.gfn_isNull(this.div_search.edt_bkg_evt_no_to.value)) {
        		this.alert('예약행사번호를 선택해주세요');
        		return false;
        	}

        	return true;
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	if (this.gfn_isNull(strVal)) { return; }
        	var paramsArr = strVal.split(",");

        	if (strId == "VAN_DS_FN_0201_fr") {//예약구매번호 조회
        		this.div_search.edt_bkg_evt_yy_fr.set_value(paramsArr[0]);
        		this.div_search.edt_bkg_evt_no_fr.set_value(paramsArr[1]);
        		this.div_search.edt_bkg_evtnm_fr.set_value(paramsArr[2]);
        	} else if (strId == "VAN_DS_FN_0201_to") {//예약구매번호 조회
        		this.div_search.edt_bkg_evt_yy_to.set_value(paramsArr[0]);
        		this.div_search.edt_bkg_evt_no_to.set_value(paramsArr[1]);
        		this.div_search.edt_bkg_evtnm_to.set_value(paramsArr[2]);
        	} else if (strId == "VAN_DS_FN_0202") {//발주처조회
        		this.div_search.edt_odrpl_na_trpl_c.set_value(paramsArr[0]);
        		this.div_search.edt_odrpl_na_trpl_n.set_value(paramsArr[1]);
        	} else if (strId == "POPUP_SRC_WRS") {//상품조회
        		this.div_search.edt_na_wrs_c.set_value(paramsArr[0]);
        		this.div_search.edt_wrsnm.set_value(paramsArr[1]);
        	}
        }

        /* Search */
        this.btn_search_onclick = function(obj,e)
        {
        	if (this.fn_validationCheck()) {
        		this.ds_pre_event_procM.clearData();
        		this.ds_pre_event_procD.clearData();
        		
        		var bkg_evt_yy 		= this.gfn_nullToEmpty(this.div_search.edt_bkg_evt_yy_fr.value);
        		var bkg_evt_no_fr 	= this.gfn_nullToEmpty(this.div_search.edt_bkg_evt_no_fr.value);
        		var bkg_evt_no_to 	= this.gfn_nullToEmpty(this.div_search.edt_bkg_evt_no_to.value);
        		var odrpl_na_trpl_c = this.gfn_nullToEmpty(this.div_search.edt_odrpl_na_trpl_c.value);
        		var na_was_c 		= this.gfn_nullToEmpty(this.div_search.edt_na_wrs_c.value);

        		var params =  "BKG_EVT_YY=" + bkg_evt_yy
        					+ " BKG_EVT_NO_FR=" + bkg_evt_no_fr
        					+ " BKG_EVT_NO_TO=" + bkg_evt_no_to
        					+ " ODRPL_NA_TRPL_C="+ odrpl_na_trpl_c
        					+ " NA_WRS_C="+ na_was_c;

        		var sSvcID        = "retrievePreEventProcM";//통신아이디
        		var sURL          = "svc::/rest/orders/retrievePreEventProcess";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_pre_event_procM=ds_PreEventProcM";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
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
        	if (e.reason == 51) {
        	  this.ds_event_priceM.set_rowposition(-1);
        	  return;
        	}
        */

        	var params =  	  "BKG_EVT_YY="			+ this.gfn_nullToEmpty(this.ds_pre_event_procM.getColumn(this.ds_pre_event_procM.rowposition, "BKG_EVT_YY"))
        					+ " BKG_EVT_NO=" 		+ this.gfn_nullToEmpty(this.ds_pre_event_procM.getColumn(this.ds_pre_event_procM.rowposition, "BKG_EVT_NO"))
        					+ " NA_WRS_C=" 			+ this.gfn_nullToEmpty(this.div_search.edt_na_wrs_c.value)
        					+ " ODRPL_NA_TRPL_C=" 	+ this.gfn_nullToEmpty(this.div_search.edt_odrpl_na_trpl_c.value);

        	var sSvcID        = "retrievePreEventProcD";//통신아이디
        	var sURL          = "svc::/rest/orders/retrievePreEventProcessDetail";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_pre_event_procD=ds_PreEventProcD";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, "S");
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID == "retrievePreEventProcM") {
        			if (this.ds_pre_event_procM.rowcount == 0) {
        				this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        			}
        		} else {
        			if (this.ds_pre_event_procD.rowcount == 0) {
        				this.div_list.grd_detail.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        			}
        		}
        	}
        }

        this.fn_excel = function(flag)
        {
        	var fileName = "예약행사진행현황.xls"//파일명
        	if (flag == "A") {
        		var bkg_evt_yy 		= this.gfn_nullToEmpty(this.div_search.edt_bkg_evt_yy_fr.value);
        		var bkg_evt_no_fr 	= this.gfn_nullToEmpty(this.div_search.edt_bkg_evt_no_fr.value);
        		var bkg_evt_no_to 	= this.gfn_nullToEmpty(this.div_search.edt_bkg_evt_no_to.value);
        		var odrpl_na_trpl_c = this.gfn_nullToEmpty(this.div_search.edt_odrpl_na_trpl_c.value);
        		var na_was_c 		= this.gfn_nullToEmpty(this.div_search.edt_na_wrs_c.value);

        		var params =  "BKG_EVT_YY=" + bkg_evt_yy
        					+ "&BKG_EVT_NO_FR=" + bkg_evt_no_fr
        					+ "&BKG_EVT_NO_TO=" + bkg_evt_no_to
        					+ "&ODRPL_NA_TRPL_C="+ odrpl_na_trpl_c
        					+ "&NA_WRS_C="+ na_was_c
        					+ "&FILE_NAME="+fileName;

        		params = encodeURI(encodeURI(params));
        		this.web_downExcel.set_url(application.gv_server_url+"rest/excel/orders/downloadExcelPreEventProcList?"+params);
        	}
        }

        this.div_search_popup_Rvopl_onclick = function(obj,e)
        {
        	this.fn_enterWrs();
        }

        this.btn_excel_onclick = function(obj,e)
        {
        	if (this.fn_validationCheck()) {
        		this.fn_excel("A");
        	}
        }

        this.div_search_Button67_onclick = function(obj,e)
        {
        	this.fn_enterBkgEvtPopUp(0, 'fr');
        }

        this.div_search_Button00_onclick = function(obj,e)
        {
        	this.fn_enterBkgEvtPopUp(0, 'to');
        }

        this.div_search_popup_OdrPl00_onclick = function(obj,e)
        {
        	this.fn_enterOdrplPopUp('0');
        }

        this.fn_enterOdrplPopUp = function(auto)
        {
        	var form_id = "VAN_DS_SC_0220";
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

        /* 출력 버튼*/
        this.btn_print_onclick = function(obj,e)
        {
        	var bkg_evt_yy       = this.gfn_nullToEmpty(this.div_search.edt_bkg_evt_yy_fr.value);
        	var bkg_evt_no_fr    = this.gfn_nullToEmpty(this.div_search.edt_bkg_evt_no_fr.value);
        	var bkg_evt_no_to    = this.gfn_nullToEmpty(this.div_search.edt_bkg_evt_no_to.value);
        	var odrpl_na_trpl_c = this.gfn_nullToEmpty(this.div_search.edt_odrpl_na_trpl_c.value);
        	var na_wrs_c       = this.gfn_nullToEmpty(this.div_search.edt_na_wrs_c.value);
        	var trplC          = this.getTrplCode();

        	var bkg_evt_no_fr_txt = this.gfn_nullToEmpty(this.div_search.edt_bkg_evt_no_fr.value);//시작예약행사명
        	var bkg_evt_no_to_txt = this.gfn_nullToEmpty(this.div_search.edt_bkg_evt_no_to.value);//종료예약행사명

        	var odrpl_na_trpl_c_txt = "";
        	var na_wrs_c_txt = "";

        	if (odrpl_na_trpl_c == '') {
        		odrpl_na_trpl_c_txt = 'all';
        	}

        	if (na_wrs_c == '') {
        		na_wrs_c_txt = 'all';
        	}

        	var searchText = this.getTrplCodePrint()
                            + ", 행사년번:" + bkg_evt_yy + "-" + bkg_evt_no_fr + "-" + bkg_evt_no_fr_txt + "~"
        					+  bkg_evt_yy + "-" + bkg_evt_no_to + "-" + bkg_evt_no_to_txt
        					+ ", 상품:" + ((na_wrs_c_txt == 'all')?'전체': na_wrs_c)
        					+", 발주처:" + ((odrpl_na_trpl_c_txt == 'all')?'전체': odrpl_na_trpl_c);

        	var ozParam = {
        		sId: 'VAN_DS_SC_0220', 
        		sUrl: '/rest/oz/orders/printPreEventProcList', 
        		paramType: 'param', 
        		sParam:{
        			TRPL_C_TEXT:searchText, 
        			srhBkgEvtYy:bkg_evt_yy, 
        			srhBkgEvtNoFr:bkg_evt_no_fr, 
        			srhBkgEvtNoTo:bkg_evt_no_to, 
        			srhOdrplNaTrplC:odrpl_na_trpl_c, 
        			srhNaWrsC:na_wrs_c, 
        			TRPL_C:trplC, 
        		}
        	};
        	this.ozViewer(ozParam);
        }
        this.div_list_Button10_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        this.div_search_edt_bkg_evt_no_fr_onkeyup = function(obj,e)
        {
        	if (e.keycode==13) {
        		this.fn_enterBkgEvtPopUp(1, 'fr');
        	}
        }

        this.fn_enterBkgEvtPopUp = function(auto,gubun)
        {
        	var bkg_evt_yy 	= "";
        	var bkg_evt_no 	= "";
        	var bkg_evtnm	= "";
        	if (gubun == 'fr') {
        		var bkg_evt_yy 	= this.gfn_nullToEmpty(this.gfn_trim(this.div_search.edt_bkg_evt_yy_fr.value));//예약행사년도
        		var bkg_evt_no 	= this.gfn_nullToEmpty(this.gfn_trim(this.div_search.edt_bkg_evt_no_fr.value));//예약행사번호
        		var bkg_evtnm 	= this.gfn_nullToEmpty(this.gfn_trim(this.div_search.edt_bkg_evtnm_fr.value));//예약행사명
        	} else {
        		var bkg_evt_yy 	= this.gfn_nullToEmpty(this.gfn_trim(this.div_search.edt_bkg_evt_yy_to.value));//예약행사년도
        		var bkg_evt_no 	= this.gfn_nullToEmpty(this.gfn_trim(this.div_search.edt_bkg_evt_no_to.value));//예약행사번호
        		var bkg_evtnm 	= this.gfn_nullToEmpty(this.gfn_trim(this.div_search.edt_bkg_evtnm_to.value));//예약행사명
        	}

        	if (this.gfn_isNull(bkg_evt_no) && this.gfn_isNull(bkg_evtnm) && auto=="1") {
        		alert("예약행사번호 또는 명을 입력해 주세요");
        		if (gubun == 'fr') {
        			this.div_search.edt_bkg_evt_no_fr.setFocus();
        		} else {
        			this.div_search.edt_bkg_evt_no_to.setFocus();
        		}
        		return false;
        	}

        
        	var oArg = {bkg_evt_yy:bkg_evt_yy, bkg_evt_no:bkg_evt_no, bkg_evtnm:bkg_evtnm, auto:auto};
        	var sOption = "autosize=true, titleText=false";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("VAN_DS_FN_0201_"+gubun, "SCM.EVENT::VAN_DS_FN_0201.xfdl", oArg, sOption, sPopupCallBack);
        }

        this.div_search_edt_bkg_evt_no_to_onkeyup = function(obj,e)
        {
        	if (e.keycode==13) {
        		this.fn_enterBkgEvtPopUp(1, 'to');
        	}
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
            this.div_search.Static18.addEventHandler("onclick", this.Div00_Static04_onclick, this);
            this.div_search.edt_wrsnm.addEventHandler("onkeyup", this.div_search_edt_na_wrs_c_onkeyup, this);
            this.div_search.popup_Rvopl.addEventHandler("onclick", this.div_search_popup_Rvopl_onclick, this);
            this.div_search.edt_na_wrs_c.addEventHandler("onkeyup", this.div_search_edt_na_wrs_c_onkeyup, this);
            this.div_search.edt_bkg_evt_no_fr.addEventHandler("onkeyup", this.div_search_edt_bkg_evt_no_fr_onkeyup, this);
            this.div_search.edt_bkg_evtnm_fr.addEventHandler("onkeyup", this.div_search_edt_bkg_evt_no_fr_onkeyup, this);
            this.div_search.Button67.addEventHandler("onclick", this.div_search_Button67_onclick, this);
            this.div_search.edt_odrpl_na_trpl_c.addEventHandler("onkeyup", this.div_search_edt_odrpl_na_trpl_c_onkeyup, this);
            this.div_search.edt_odrpl_na_trpl_n.addEventHandler("onkeyup", this.div_search_edt_odrpl_na_trpl_c_onkeyup, this);
            this.div_search.popup_OdrPl00.addEventHandler("onclick", this.div_search_popup_OdrPl00_onclick, this);
            this.div_search.edt_bkg_evt_no_to.addEventHandler("onkeyup", this.div_search_edt_bkg_evt_no_to_onkeyup, this);
            this.div_search.edt_bkg_evtnm_to.addEventHandler("onkeyup", this.div_search_edt_bkg_evt_no_to_onkeyup, this);
            this.div_search.Button00.addEventHandler("onclick", this.div_search_Button00_onclick, this);
            this.div_list.Button10.addEventHandler("onclick", this.div_list_Button10_onclick, this);
            this.div_list.grd_master.addEventHandler("oncellclick", this.fn_grid01_search, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_print.addEventHandler("onclick", this.btn_print_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0220.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
