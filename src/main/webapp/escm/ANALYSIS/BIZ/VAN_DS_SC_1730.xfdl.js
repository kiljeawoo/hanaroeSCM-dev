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
                this.set_name("VAN_DS_SC_1730");
                this.set_titletext("상품별 일평균 매출액 TOP10 조회");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_topSkuAverage", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RK\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT\" type=\"INT\" size=\"256\"/><Column id=\"QTY\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_month", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DATA_MONTH\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN_MONTH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
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

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "148", null, this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "43", "15", null, this);
            obj.set_taborder("7");
            obj.set_scrollbars("none");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("sta_searchType", "absolute", "14", "10", null, "21", "682", null, this.div_search);
            obj.set_taborder("23");
            obj.set_text("조회월");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_SELECT_MONTHLY", "absolute", "104", "10", "122", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("24");
            obj.set_codecolumn("COLUMN_MONTH");
            obj.set_datacolumn("DATA_MONTH");
            obj.set_innerdataset("@ds_month");
            obj.set_index("-1");

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "118", null, this);
            obj.set_taborder("9");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_chart", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("10");
            obj.set_text("챠트");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_list", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "71", null, null, "15", "0", this);
            obj.set_taborder("3");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_main", "absolute", "0", "42", null, null, "0", "0", this.div_list);
            obj.set_taborder("5");
            obj.set_binddataset("ds_topSkuAverage");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"150\"/><Column size=\"320\"/><Column size=\"150\"/><Column size=\"200\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순위\"/><Cell col=\"1\" text=\"상품코드\"/><Cell col=\"2\" text=\"상품명\"/><Cell col=\"3\" text=\"수량\"/><Cell col=\"4\" text=\"매출액(천원)\"/></Band><Band id=\"body\"><Cell text=\"bind:RK\"/><Cell col=\"1\" text=\"bind:CODE\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:NAME\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:QTY\" mask=\"#,##0\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AMOUNT\" mask=\"#,##0\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" style=\"align:center;\" text=\"합계\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('QTY')\" mask=\"#,###\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('AMOUNT')\" mask=\"#,###\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new WebBrowser("wb_chart", "absolute", "0", "42", null, null, "0", "0", this.div_list);
            obj.set_taborder("6");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_toggle00", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new WebBrowser("web_downExcelM", "absolute", "78.3%", "10", null, "20", "16.88%", null, this.div_list);
            obj.set_taborder("8");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_dateInfo", "absolute", null, "20", "200", "20", "5", null, this.div_list);
            obj.set_taborder("9");
            obj.style.set_align("right middle");
            this.div_list.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("7");
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
            		p.set_classname("VAN_DS_SC_1730");
            		p.set_titletext("상품별 일평균 매출액 TOP10 조회");

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
        this.addIncludeScript("VAN_DS_SC_1730.xfdl", 'lib::comLib.xjs');
        this.addIncludeScript("VAN_DS_SC_1730.xfdl", 'lib::comChart.xjs');
        this.registerScript("VAN_DS_SC_1730.xfdl", function() {
        //include 'lib::comLib.xjs';
        //include 'lib::comChart.xjs';

        var TRPL_C = 'TRPL_C'; 		 //거래처코드

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        };

        this.fn_afterFormOnload = function(){	
        		
        	this.div_list.grd_main.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));	
        	this.gridSortInit(this.div_list.grd_main);
        	this.chartBtnAddEvent();
        	this.initcombo();
        };
        //페이지 시작 시 콤보박스 조회
        this.initcombo = function(){
        	
        	//파라미터
        	var json = this.getParamJson(this.components);
        	json.SEPAR = "1";
        	json.TRPL_C = this.getTrplCode();	//거래처코드
        	var param = this.getParamJsonToString(json);

        	//트랜젝션 아이디
        	var trId = 'initcombo';
        	this.gfn_callService(
        						trId, 
        						'svc::rest/analysis/biz/Intelligence/retrieveTopSkuAverage', 
        						'', 
        						'ds_month=ds_month', 
        						param,
        						'fn_callback',
        						'S'
        						);
        }

        //조회
        this.search = function(trId){
        	
        	var trId = trId || 'list';
        	
        	//데이터셋 초기화
        	this.ds_topSkuAverage.clearData();
        	
        	//파라미터
        	var json = this.getParamJson(this.components, true);
        	json.SEPAR = "2"
        	json.TRPL_C = this.getTrplCode();	//거래처코드
        	var param = this.getParamJsonToString(json,true);
        		
        	this.gfn_callService(
        						trId, 
        						'svc::rest/analysis/biz/Intelligence/retrieveTopSkuAverage', 
        						'', 
        						'ds_topSkuAverage=ds_topSkuAverage', 
        						param,
        						'fn_callback',
        						'S'
        						);
        };

        this.fn_callback = function(trId,errCode,errMsg){
        	
        	if(errCode < 0){
        		this.gfn_getMessage("alert", errMsg);
        		return;
        	}else{
        		if(trId == "list" || trId == "init"){
        			if(this.div_list.grd_main.rowcount < 1){
        				this.div_list.grd_main.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));	
        			}
        			if(trId == "init") this.chartBtn();
        			var table = "IAS_SL_MM_AVG_WRS_C";
        			//최근 업데이트
        			var param = {
        				form: this,
        				table: table,
        				div: this.div_list.div_dateInfo
        			};
        			this.getInfoTableDt(param);
        		}
        		if(trId =="initcombo"){
        			this.div_search.cbo_SELECT_MONTHLY.set_index(0);
        			this.search('init');
        		}
        	}
        	
        };

        

        //챠트 정보 생성
        this.chartInfoProp = function(){

        	var webComp = this.div_list.wb_chart; //웹브라우저 
        	var ds = this.ds_topSkuAverage; //데이터셋
        	var grid = this.div_list.grd_main; //그리드
        	var btn = this.btn_chart; //버튼
        	var chartInfo = {
        						chartId: "topSkuAverage",
        						chartType: "PIE",
        						title: "상품별 일평균 매출액 TOP10",
        						subTitle: "(단위:천원)",
        						xAxis: "NAME",
        						yAxis: "AMOUNT", //프로퍼티명:TEXT
        						orderBy: "S:NAME",
        						displayName:"매출액"
        					};
        	
        	return {
        		webComp: webComp,
        		ds: ds,
        		grid: grid,
        		btn: btn,
        		chartInfo: chartInfo,
        		chartText: "챠트", //버튼 챠트 텍스트
        		listText: "목록",  //버튼 목록 텍스트
        		emptyText: "데이터가 없습니다."		
        	};	
        };

        //조회 조건 숨김 여부 이벤트
        this.div_list_btn_toggle00_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }
        //엑셀 다운로드 버튼
        this.btn_excel_onclick = function(obj,e)
        {
        	var params = "TRPL_C="+this.getTrplCode()
        				 +"&SELECT_MONTHLY="+this.div_search.cbo_SELECT_MONTHLY.value;
        				
        	//this.div_list.web_downExcelM.set_url(application.gv_server_url+"rest/excel/downloadExcelTopSkuAverage?"+params);
        	excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelTopSkuAverage?"+params, this);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_search.cbo_SELECT_MONTHLY.addEventHandler("onitemchanged", this.search, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_list.addEventHandler("onclick", this.search, this);
            this.div_list.btn_toggle00.addEventHandler("onclick", this.div_list_btn_toggle00_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1730.xfdl");
        this.loadPreloadList();
       
    };
}
)();
