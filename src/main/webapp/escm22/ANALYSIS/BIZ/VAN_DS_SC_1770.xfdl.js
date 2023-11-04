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
                this.set_name("VAN_DS_SC_1770");
                this.set_titletext("소분류 판매순위 TOP10");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_topDivision", this);
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


            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "0", "0", "397", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "71", null, null, "15", "0", this);
            obj.set_taborder("2");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_main", "absolute", "0", "2", null, null, "0", "7", this.div_list);
            obj.set_taborder("7");
            obj.set_binddataset("ds_topDivision");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"150\"/><Column size=\"320\"/><Column size=\"150\"/><Column size=\"200\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순위\"/><Cell col=\"1\" text=\"소분류코드\"/><Cell col=\"2\" text=\"소분류명\"/><Cell col=\"3\" text=\"수량\"/><Cell col=\"4\" text=\"매출액(천원)\"/></Band><Band id=\"body\"><Cell text=\"bind:RK\"/><Cell col=\"1\" text=\"bind:CODE\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:NAME\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:QTY\" mask=\"#,##0\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AMOUNT\" mask=\"#,##0\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" style=\"align:center;\" text=\"합계\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('QTY')\" mask=\"#,###\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('AMOUNT')\" mask=\"#,###\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new WebBrowser("wb_chart", "absolute", "0", "2", null, null, "0", "7", this.div_list);
            obj.set_taborder("8");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new WebBrowser("web_downExcelM", "absolute", "617", "10", null, "20", "133", null, this.div_list);
            obj.set_taborder("9");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "148", null, this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "118", null, this);
            obj.set_taborder("6");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_chart", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("7");
            obj.set_text("챠트");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_list", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_dateInfo", "absolute", null, "50", "200", "20", "20", null, this);
            obj.set_taborder("9");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.set_text("Div02");
            		p.set_scrollbars("none");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1770");
            		p.set_titletext("소분류 판매순위 TOP10");

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
        this.addIncludeScript("VAN_DS_SC_1770.xfdl", 'lib::comLib.xjs');
        this.addIncludeScript("VAN_DS_SC_1770.xfdl", 'lib::comChart.xjs');
        this.registerScript("VAN_DS_SC_1770.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript('lib::comLib.xjs', null, exports); }	//include 'lib::comLib.xjs';
        if (this.executeIncludeScript) { this.executeIncludeScript('lib::comChart.xjs', null, exports); }	//include 'lib::comChart.xjs';

        var TRPL_C = 'TRPL_C'; 		 //거래처코드

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        };

        this.fn_afterFormOnload = function(){
        		
        	this.div_list.grd_main.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));	
        	this.gridSortInit(this.div_list.grd_main);
        	this.chartBtnAddEvent();
        	this.search('init');
        };

        //조회
        this.search = function(trId){

        	var trId = trId || 'list';
        	
        	//데이터셋 초기화
        	this.ds_topDivision.clearData();
        	
        	//파라미터
        	var json = this.getParamJson(this.components, false);
        	json.TRPL_C = this.getTrplCode();	//거래처코드
        	var param = this.getParamJsonToString(json);
        	
        	this.gfn_callService(
        						trId,
        						'svc::rest/analysis/biz/Intelligence/retrieveTopDivision', 
        						'', 
        						'ds_topDivision=ds_topDivision', 
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
        			var table = "IAS_SL_MM_CLS";
        			//최근 업데이트
        			var param = {
        				form: this,
        				table: table,
        				div: this.div_dateInfo
        			};
        			this.getInfoTableDt(param);
        		}
        	}
        };

        

        //챠트 정보 생성
        this.chartInfoProp = function(){

        	var webComp = this.div_list.wb_chart; //웹브라우저 
        	var ds = this.ds_topDivision; //데이터셋
        	var grid = this.div_list.grd_main; //그리드
        	var btn = this.btn_chart; //버튼
        	var chartInfo = {
        						chartId: "topStore",
        						chartType: "PIE",
        						title: "소분류별 판매순위 TOP10",
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

        //엑셀 다운로드 버튼
        this.btn_excel_onclick = function(obj,e)
        {
        	var params = "TRPL_C="+this.getTrplCode();
        				
        	//this.div_list.web_downExcelM.set_url(application.gv_server_url+"rest/excel/downloadExcelTopDivision?"+params);
        	excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelTopDivision?"+params, this);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_list.addEventHandler("onclick", this.search, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1770.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
