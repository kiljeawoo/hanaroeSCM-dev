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
                this.set_name("VAN_DS_SC_910");
                this.set_titletext("기간별 정보");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_daily_total", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"YMD\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT\" type=\"INT\" size=\"256\"/><Column id=\"QTY\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("0");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", "397", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "788", "0", "15", "490", null, null, this);
            obj.set_taborder("2");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "43", "15", null, this);
            obj.set_taborder("5");
            obj.set_scrollbars("none");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("sta_searchType", "absolute", "15", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("27");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "202", "10", "10", "21", null, null, this.div_search);
            obj.set_taborder("32");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_start_date", "absolute", "94", "10", "102", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("33");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj = new Calendar("cal_end_date", "absolute", "218", "10", "102", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("34");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "105", null, this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "71", null, null, "15", "0", this);
            obj.set_taborder("3");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_main00", "absolute", "0", "42", null, null, "0", "7", this.div_list);
            obj.set_taborder("0");
            obj.set_binddataset("ds_daily_total");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회된 데이터가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/><Row size=\"28\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"일자\"/><Cell col=\"1\" text=\"수량\"/><Cell col=\"2\" text=\"금액(천원)\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:YMD\" mask=\"@@@@-@@-@@\"/><Cell col=\"1\" style=\"align:right;\" text=\"bind:QTY\"/><Cell col=\"2\" style=\"align:right;\" text=\"bind:AMOUNT\"/></Band><Band id=\"summary\"><Cell style=\"align:center;\" text=\"합계\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('QTY');\" mask=\"#,###\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('AMOUNT');\" mask=\"#,###\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_toggle00", "absolute", "363", "0", null, "12", "362", null, this.div_list);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new WebBrowser("web_downExcelM", "absolute", "78.3%", "10", null, "20", "16.88%", null, this.div_list);
            obj.set_taborder("2");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);

            obj = new Button("btn_search00", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.set_scrollbars("none");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.set_text("Div02");
            		p.set_scrollbars("none");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_910");
            		p.set_titletext("기간별 정보");

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
        this.addIncludeScript("VAN_DS_SC_0910.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0910.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e) 
        {
        	this.gfn_setInitForm(obj, e); //공통
        };

        this.fn_afterFormOnload = function() //onload
        {
        	// 초기 날짜를 입력
        	var initmonth = this.gfn_today('yyyyMM')+'01'; // 해당 PC의 오늘 날짜 + 01
        	var initdate = this.gfn_today('yyyyMMdd');
        	this.div_search.cal_start_date.set_value(initmonth);
        	this.div_search.cal_end_date.set_value(initdate);
        	this.div_list.grd_main00.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	this.search();
        };

        this.search = function()
        {
        	// 날짜 유무 체크
        	if(this.gfn_getDiffDay(this.div_search.cal_start_date.value,this.div_search.cal_end_date.value) < 0){
        		this.alert(this.gfn_getTextMessage('validation.message.fromDate.toDate.reConfirm'));
        		return false;
        	}else{
        		if(this.gfn_getDiffDay(this.div_search.cal_start_date.value,this.div_search.cal_end_date.value) > 31){
        			this.alert(this.gfn_getTextMessage('validation.message.selectDateIn31Day'));
        			return false;
        		}
        	}
        	
        	var params = "start_date="+this.div_search.cal_start_date.value		// 조회기간 시작
         				 +" end_date="+this.div_search.cal_end_date.value		// 조회기간 종료
         				 +" TRPL_C="+this.getTrplCode();						// 권한사업장코드
         				 
        	var sSvcID        = "p_search";//통신아이디
        	var sURL          = "svc::rest/pds/stock/Stock/retrievePeriodSum";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_daily_total=ds_daily_total";
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType = "U"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        this.fn_callback = function(svcID,nCD,sMSG)
        {
        	if(nCD < 0){
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID =="p_search"){
        			if(this.ds_daily_total.rowcount < 1){
        				this.div_list.grd_main00.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        			}
        		}
        	}
        }

        //조회 조건 숨김 여부 이벤트
        this.div_list_btn_toggle00_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        //엑셀다운로드
        this.btn_excel_onclick = function(obj,e)
        {
        	this.fn_exceldown();
        }

        //엑셀 다운로드
        this.fn_exceldown = function()
        {
        	var params = "start_date="+this.div_search.cal_start_date.value
         				 +"&end_date="+this.div_search.cal_end_date.value
         				 +"&TRPL_C="+this.getTrplCode();
        	excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelPeriodSum?"+params, this);
        	//this.div_list.web_downExcelM.set_url(application.gv_server_url+"rest/excel/downloadExcelPeriodSum?"+params);
        	
        }

        	
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.div_list.btn_toggle00.addEventHandler("onclick", this.div_list_btn_toggle00_onclick, this);
            this.btn_search00.addEventHandler("onclick", this.search, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0910.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
