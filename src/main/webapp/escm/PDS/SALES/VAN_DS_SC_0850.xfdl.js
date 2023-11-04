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
                this.set_name("frm_van_ds_sc_0850");
                this.set_titletext("자료수신");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "788", "0", "15", "181", null, null, this);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "0", "21", "871", "40", null, null, this);
            obj.set_taborder("4");
            obj.set_text("40");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("5");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "56", null, this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "0", "180", "110", "29", null, null, this);
            obj.set_taborder("25");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "109", "180", null, "29", "15", null, this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "6", "156", "162", "21", null, null, this);
            obj.set_taborder("27");
            obj.set_text("일일자료");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_date_fr", "absolute", "118", "184", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("28");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Calendar("cal_date_to", "absolute", "228", "184", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("29");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static26", "absolute", "218", "184", "10", "21", null, null, this);
            obj.set_taborder("30");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "0", "176", "871", "5", null, null, this);
            obj.set_taborder("31");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "0", "207", "871", "40", null, null, this);
            obj.set_taborder("32");
            obj.set_text("40");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_part01", "absolute", "83", "156", "120", "21", null, null, this);
            obj.set_taborder("35");
            obj.set_cssclass("chk_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "0", "87", "110", "29", null, null, this);
            obj.set_taborder("36");
            obj.set_text("조회년월");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "109", "87", null, "29", "15", null, this);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "6", "61", "301", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_text("월별집계");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "-1", "82", "871", "5", null, null, this);
            obj.set_taborder("43");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_part00", "absolute", "83", "61", "120", "21", null, null, this);
            obj.set_taborder("45");
            obj.set_cssclass("chk_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "-1", "116", "871", "40", null, null, this);
            obj.set_taborder("46");
            obj.set_text("40");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "336", "87", "110", "29", null, null, this);
            obj.set_taborder("47");
            obj.set_text("선      택");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_chk03", "absolute", "454", "91", "319", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_chk03_innerdataset = new Dataset("rdo_chk03_innerdataset", this.rdo_chk03);
            rdo_chk03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">사업장별</Col></Row></Rows>");
            obj.set_innerdataset(rdo_chk03_innerdataset);
            obj.set_taborder("54");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");

            obj = new Static("Static17", "absolute", "218", "91", "10", "21", null, null, this);
            obj.set_taborder("41");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Div("cal_month_to", "absolute", "228", "91", "100", "21", null, null, this);
            obj.set_taborder("57");
            obj.set_url("common::calendarMonth.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("cal_month_fr", "absolute", "118", "91", "100", "21", null, null, this);
            obj.set_taborder("58");
            obj.set_url("common::calendarMonth.xfdl");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web_downExcel", "absolute", "685", "268", "61", "20", null, null, this);
            obj.set_taborder("59");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "15", null, this);
            obj.set_taborder("60");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_atl", "absolute", "352", "184", "120", "21", null, null, this);
            obj.set_taborder("61");
            obj.set_text("간선포함");
            obj.set_cssclass("chk_WF_Essential");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("자료수신");

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
            this._addPreloadList("fdl", "common::calendarMonth.xfdl");
            this._addPreloadList("fdl", "common::calendarMonth.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_0850.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0850.xfdl", function() {
        /*##################################################################################
         화면명	: 자료수신
         화면ID  	: VAN_DS_SC_1050
         작성자 	: swha
        ####################################################################################*/
        //include "lib::comLib.xjs";

        var fromDate;
        var toDate;

        /* Form Load */
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e);
        }

        /* Form Init*/
        this.form_init = function(obj,e)
        {
        	///페이지 로딩후 실행부분
        	var toDay = this.gfn_today("yyyyMMdd");
        	var month = this.gfn_today("YYYYMM");

        	//this.cal_month_fr._setValue(this.gfn_firstDate(toDay));
        	//this.cal_month_to._setValue(this.gfn_firstDate(toDay));

        	this.cal_month_fr._setValue(this.gfn_minusMonth(toDay, 1).substr(0, 6));
        	this.cal_month_to._setValue(this.gfn_minusMonth(toDay, 1).substr(0, 6));

        	/*
        	this.cal_date_fr.set_value(this.gfn_firstDate(toDay));
        	this.cal_date_to.set_value(this.gfn_lastDate(toDay));
        	*/

        	this.cal_date_fr.set_value(this.gfn_minusDate(toDay, 10));
        	this.cal_date_to.set_value(this.gfn_minusDate(toDay, 1));
        }

        /* Validation Check */
        this.fn_validationCheck = function()
        {
        	if (!this.chk_part00.isChecked() && !this.chk_part01.isChecked()) {
        		//월별집계, 일일자료 중 하나를 선택해 주세요.
        		this.gfn_getMessage("alert", "msg.van_ds_sc_0850.view.search.validation.select");
        		return false;
        	}

        	if (this.chk_part00.isChecked()) {
        		fromDate = this.gfn_nullToEmpty(this.cal_month_fr._getValue());
        		toDate = this.gfn_nullToEmpty(this.cal_month_to._getValue());

        		fromDate.concat("00");
        		toDate.concat("00");

        		///페이지 로딩후 실행부분
        		var toDay = this.gfn_today("yyyyMMdd");
        		chkDay = Number(this.gfn_minusMonth(toDay, 7).substr(0, 6));

        		// 시작일 종료일 확인
        		if (this.gfn_diffMonth(fromDate, toDate) < 0) {
        			this.gfn_getMessage("alert", "validation.message.fromDate.toDate.reConfirm");
        			return false;
        		}

        		//6개월 이내
        // 		if (Number(fromDate.toString().substr(0, 6)) - Number(chkDay) < 0) {
        // 			//최근 6개월까지 조회 가능합니다.
        // 			this.gfn_getMessage("alert", "msg.van_ds_sc_0850.view.search.validation.6month");
        // 			return false;
        // 		}

        		//6개월 이내
        // 		if (Number(toDate.toString().substr(0, 6)) - Number(chkDay) < 0) {
        // 			//최근 6개월까지 조회 가능합니다.
        // 			this.gfn_getMessage("alert", "msg.van_ds_sc_0850.view.search.validation.6month");
        // 			return false;
        // 		}
        	} else if (this.chk_part01.isChecked()) {
        		fromDate = this.gfn_nullToEmpty(this.cal_date_fr.value);
        		toDate = this.gfn_nullToEmpty(this.cal_date_to.value);

        		/*
        		if (this.gfn_getDiffDay(this.cal_date_fr.value, this.cal_date_to.value) > 31) {

        		//기간을 31일 이내로 선택해 주세요
        			this.gfn_getMessage("alert", "validation.message.selectDateIn31Day");
        			return false;
        		}
        		*/

        		if (this.gfn_getDiffDay(this.cal_date_fr.value, this.cal_date_to.value) > 10) {
        			//기간을 31일 이내로 선택해 주세요
        			alert("기간을 10일 이내로 선택해 주세요");
        			return false;
        		}

        		if (this.gfn_getDiffDay(fromDate, toDate) < 0) {
        			this.gfn_getMessage("alert", "validation.message.fromDate.toDate.reConfirm");
        			return false;
        		}
        	}

        	if (fromDate == '') {
        		this.gfn_getMessage("alert", "validation.message.fromDate.no.data");
        		return false;
        	}

        	if (toDate == '') {
        		this.gfn_getMessage("alert", "validation.message.toDate.no.data");
        		return false;
        	}

        	return true;
        }

        /* Excel */
        this.fn_exceldown = function()
        {
        	var chkPart = "";//집계구분 00 : 월별집계, 01 : 일일자료
        	var chkSelect = ""; //선택 1 : 사업장별 2: 상품별
        	var chkAtl = "0"; //간선포함여부  Y N

        	var excelName = "";

        	if (this.chk_part00.isChecked()) {
        		chkPart = "00";
        		chkSelect = this.rdo_chk03.value;
        		excelName = "월별집계";

        	} else if (this.chk_part01.isChecked()) {
        		chkPart = "01";
        		excelName = "일일자료";
        	}

        	if (this.chk_atl.isChecked()) {
        		chkAtl = "1"; // 간선포함여부
        	}

        	//권한사업장
        	var trplC = this.getTrplCode();

        	var title = '판매정보_'+this.parent.sNm+excelName;
        	title = title.replace(/ /gi, '');
        	var fileName = title + "_" + this.getDate() + ".xls";

        	var params =  "CHK_PART=" + chkPart
        				+ "&CHK_SELECT=" + chkSelect
        				+ "&CHK_ATL=" + chkAtl

        				+ "&TRPL_C=" + trplC
        				+ "&FROM_DATE=" + fromDate
        				+ "&TO_DATE=" + toDate
        				+ "&fileName=" + fileName;

        	params = encodeURI(encodeURI(params));
        	excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelSales?"+params, this);
        	//this.web_downExcel.set_url(application.gv_server_url+"rest/excel/downloadExcelSales?"+params);
        }

        /* Event */
        this.btn_excel_onclick = function(obj,e)
        {
        	if (this.fn_validationCheck()) {
        		this.fn_exceldown();
        	}
        }

        this.chk_onclick = function(obj,e)
        {
        	if (obj.name == 'chk_part00') {
        		this.chk_part01.set_value(false);
        	}

        	if (obj.name == 'chk_part01') {
        		this.chk_part00.set_value(false);
        	}
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID == "downloadStoreSumCSV") {

        		} else if (svcID == "saveAtlSalesData") {
        		    alert("집계가 완료되었습니다.");
        		}
        	}
        }

        this.chk_atl_onclick = function(obj,e)
        {
        	var isConfirm = false;

        	if (this.chk_atl.value) {
        	    isConfirm = confirm("다운로드 하시기 전 간선자료를 재집계하시겠습니까? \n 간선자료 집계시 시간이 다소 소요될 수 있습니다.");
        	}

        	if (isConfirm) {
        		if (!this.fn_validationCheck()) {
        			return false;
        		}

        	    //alert("간선자료 집계중");
        	    var trplC = this.getTrplCode();
        		var dsParams = "";

        		var params =  "TRPL_C=" + trplC
        					+ " FROM_DATE=" + fromDate
        					+ " TO_DATE=" + toDate
        					;

        		var sSvcID        = "saveAtlSalesData";//통신아이디
        		var sURL          = "svc::rest/pds/saveAtlSalesData";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = ""; //화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = params;// 파라미터
        		var sCallbackFunc = "fn_callBack"; //콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회

        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.form_init, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.chk_part01.addEventHandler("onclick", this.chk_onclick, this);
            this.chk_part00.addEventHandler("onclick", this.chk_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.chk_atl.addEventHandler("onclick", this.chk_atl_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0850.xfdl");
        this.loadPreloadList();
       
    };
}
)();
