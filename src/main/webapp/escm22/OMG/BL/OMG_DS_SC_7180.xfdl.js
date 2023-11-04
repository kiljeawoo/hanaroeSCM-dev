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
                this.set_name("OMG_DS_SC_7180");
                this.set_titletext("상품본부문자발송내역");
                this._setFormPosition(0,0,799,694);
            }
            this.style.set_border("0 none #808080ff");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_result", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"D_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"MSM\" type=\"STRING\" size=\"256\"/><Column id=\"EC\" type=\"STRING\" size=\"256\"/><Column id=\"UTI\" type=\"STRING\" size=\"256\"/><Column id=\"OMMS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_resultSum", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MSMSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ECSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UTISUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"OMMSSUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SMSUPR\" type=\"STRING\" size=\"256\"/><Column id=\"LMSUPR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MSMSPPR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ECSPPR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UTISPPR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"OMMSSPPR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MSMTXA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ECTXA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UTITXA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"OMMSTXA\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MSMTT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ECTT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UTITT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"OMMSTT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SUMHAP\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SPPRHAP\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TXAHAP\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TTHAP\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_result", "absolute", "0", "71", null, null, "15", "0", this);
            obj.set_taborder("4");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Button("Button75", "absolute", "288", "0", null, "12", "287", null, this.div_result);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_result.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "0", "42", null, null, "0", "1", this.div_result);
            obj.set_taborder("14");
            obj.set_binddataset("ds_result");
            obj.set_nodatatext("조회된 건수가 없습니다.");
            obj.set_visible("false");
            obj.style.set_font("9 맑은 고딕");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"148\"/><Column size=\"148\"/><Column size=\"148\"/><Column size=\"148\"/><Column size=\"148\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"구분\"/><Cell col=\"1\" colspan=\"4\" text=\"㈜농협하나로유통 상품본부\"/><Cell row=\"1\" col=\"1\" text=\"역발행(SMS)\"/><Cell row=\"1\" col=\"2\" text=\"마트장비(SMS)\"/><Cell row=\"1\" col=\"3\" text=\"계약상담(LMS)\"/><Cell row=\"1\" col=\"4\" text=\"비정기 MMS\"/></Band><Band id=\"body\"><Cell text=\"bind:D_TYPE\" mask=\"@@@@-@@-@@\"/><Cell col=\"1\" displaytype=\"number\" style=\"align:right;\" text=\"expr:UTI == 0 ? &quot;-&quot; : UTI\" tooltiptext=\"bind:MSM\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"expr:MSM == 0 ? &quot;-&quot; : MSM\" tooltiptext=\"bind:EC\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:EC == 0 ? &quot;-&quot; : EC\" tooltiptext=\"bind:UTI\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"expr:OMMS == 0 ? &quot;-&quot; : OMMS\" tooltiptext=\"bind:OMMS\"/></Band><Band id=\"summary\"><Cell style=\"align:center;\" text=\"합계\"/><Cell col=\"1\" displaytype=\"number\" text=\"expr:dataset.getSum('UTI') == 0 ? &quot;-&quot; : dataset.getSum('UTI')\"/><Cell col=\"2\" displaytype=\"number\" text=\"expr:dataset.getSum('MSM') == 0 ? &quot;-&quot; : dataset.getSum('MSM')\"/><Cell col=\"3\" displaytype=\"number\" text=\"expr:dataset.getSum('EC') == 0 ? &quot;-&quot; : dataset.getSum('EC')\"/><Cell col=\"4\" displaytype=\"number\" text=\"expr:dataset.getSum('OMMS') == 0 ? &quot;-&quot; : dataset.getSum('OMMS')\"/></Band></Format></Formats>");
            this.div_result.addChild(obj.name, obj);
            obj = new Button("btn_swap", "absolute", null, "16", "112", "21", "0", null, this.div_result);
            obj.set_taborder("15");
            obj.set_text("세부통계 보기");
            obj.set_cssclass("btn_WF_CRUD");
            this.div_result.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "0", "42", null, null, "0", "1", this.div_result);
            obj.set_taborder("16");
            obj.set_binddataset("ds_resultSum");
            obj.style.set_font("9 맑은 고딕");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"56\"/><Column size=\"74\"/><Column size=\"60\"/><Column size=\"62\"/><Column size=\"53\"/><Column size=\"66\"/><Column size=\"52\"/><Column size=\"34\"/><Column size=\"65\"/><Column size=\"56\"/><Column size=\"63\"/><Column size=\"75\"/><Column size=\"55\"/></Columns><Rows><Row size=\"13\" band=\"head\"/><Row size=\"51\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"40\"/><Row size=\"40\"/><Row size=\"40\"/><Row size=\"40\"/><Row size=\"30\"/><Row size=\"30\"/><Row size=\"30\"/><Row size=\"30\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"14\"/><Cell row=\"1\" colspan=\"14\" style=\"font:bold underline 24 Arial;\" text=\"거  래  명  세  서\"/><Cell row=\"2\" colspan=\"14\"/><Cell row=\"3\" colspan=\"7\" style=\"background:#c0c0c0ff;\" text=\"공급자\"/><Cell row=\"3\" col=\"7\" colspan=\"7\" style=\"background:#c0c0c0ff;\" text=\"공급받는자\"/><Cell row=\"4\" colspan=\"2\" text=\"등록번호\"/><Cell row=\"4\" col=\"2\" colspan=\"4\" text=\"114-81-64826\"/><Cell row=\"4\" col=\"6\" rowspan=\"2\" text=\"직인&#13;&#10;생략\"/><Cell row=\"4\" col=\"7\" colspan=\"2\" text=\"등록번호\"/><Cell row=\"4\" col=\"9\" colspan=\"5\" text=\"825-85-02030\"/><Cell row=\"5\" colspan=\"2\" text=\"상   호\"/><Cell row=\"5\" col=\"2\" colspan=\"2\" text=\"주식회사 이썸테크\"/><Cell row=\"5\" col=\"4\" text=\"성명\"/><Cell row=\"5\" col=\"5\" text=\"곽화섭\"/><Cell row=\"5\" col=\"7\" colspan=\"2\" text=\"상   호\"/><Cell row=\"5\" col=\"9\" colspan=\"2\" text=\"마트상품부\"/><Cell row=\"5\" col=\"11\" text=\"성명\"/><Cell row=\"5\" col=\"12\" colspan=\"2\" text=\"김성광\"/><Cell row=\"6\" colspan=\"2\" text=\"주   소\"/><Cell row=\"6\" col=\"2\" colspan=\"5\" text=\"서울시 강남구 도산대로 24길 4,2층(논현동 ES힐스)\"/><Cell row=\"6\" col=\"7\" colspan=\"2\" text=\"주   소\"/><Cell row=\"6\" col=\"9\" colspan=\"5\" text=\"서울특별시 마포구 신촌로 66,9층(노고산동)\"/><Cell row=\"7\" colspan=\"2\" text=\"업   태\"/><Cell row=\"7\" col=\"2\" text=\"서비스\"/><Cell row=\"7\" col=\"3\" colspan=\"2\" text=\"종목\"/><Cell row=\"7\" col=\"5\" colspan=\"2\" text=\"소프트웨어 자문\"/><Cell row=\"7\" col=\"7\" colspan=\"2\" text=\"업   태\"/><Cell row=\"7\" col=\"9\" colspan=\"2\" text=\"도소매외\"/><Cell row=\"7\" col=\"11\" text=\"종목\"/><Cell row=\"7\" col=\"12\" colspan=\"2\" text=\"식잡외\"/><Cell row=\"8\" colspan=\"2\" text=\"비   고\"/><Cell row=\"8\" col=\"2\" colspan=\"12\" style=\"align:left;\"/><Cell row=\"9\" colspan=\"14\"/><Cell row=\"10\" colspan=\"2\" style=\"background:#c0c0c0ff;\" text=\"품목\"/><Cell row=\"10\" col=\"2\" style=\"background:#c0c0c0ff;\" text=\"규격\"/><Cell row=\"10\" col=\"3\" style=\"background:#c0c0c0ff;\" text=\"수량\"/><Cell row=\"10\" col=\"4\" style=\"background:#c0c0c0ff;\" text=\"단가\"/><Cell row=\"10\" col=\"5\" colspan=\"3\" style=\"background:#c0c0c0ff;\" text=\"공급가액\"/><Cell row=\"10\" col=\"8\" colspan=\"2\" style=\"background:#c0c0c0ff;\" text=\"세액\"/><Cell row=\"10\" col=\"10\" colspan=\"2\" style=\"background:#c0c0c0ff;\" text=\"합계금액\"/><Cell row=\"10\" col=\"12\" colspan=\"2\" style=\"background:#c0c0c0ff;\" text=\"비    고\"/></Band><Band id=\"body\"><Cell rowspan=\"4\" colspan=\"2\"/><Cell col=\"2\" text=\"SMS\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:UTISUM == 0 ? &quot;-&quot; : UTISUM\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SMSUPR\"/><Cell col=\"5\" colspan=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:UTISPPR == 0 ? &quot;-&quot; : UTISPPR\"/><Cell col=\"8\" colspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"expr:UTITXA == 0 ? &quot;-&quot; : UTITXA\"/><Cell col=\"10\" colspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"expr:UTITT == 0 ? &quot;-&quot; : UTITT\"/><Cell col=\"12\" colspan=\"2\" text=\"역발행세금계산서&#13;&#10;미승인\"/><Cell row=\"1\" col=\"2\" text=\"SMS\"/><Cell row=\"1\" col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:MSMSUM == 0 ? &quot;-&quot; : MSMSUM\"/><Cell row=\"1\" col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SMSUPR\"/><Cell row=\"1\" col=\"5\" colspan=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:MSMSPPR == 0 ? &quot;-&quot; : MSMSPPR\"/><Cell row=\"1\" col=\"8\" colspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"expr:MSMTXA == 0 ? &quot;-&quot; : MSMTXA\"/><Cell row=\"1\" col=\"10\" colspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"expr:MSMTT == 0 ? &quot;-&quot; : MSMTT\"/><Cell row=\"1\" col=\"12\" colspan=\"2\" text=\"마트장비 쇼핑몰\"/><Cell row=\"2\" col=\"2\" text=\"LMS\"/><Cell row=\"2\" col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:ECSUM == 0 ? &quot;-&quot; : ECSUM\"/><Cell row=\"2\" col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:LMSUPR\"/><Cell row=\"2\" col=\"5\" colspan=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:ECSPPR == 0 ? &quot;-&quot; : ECSPPR\"/><Cell row=\"2\" col=\"8\" colspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"expr:ECTXA == 0 ? &quot;-&quot; : ECTXA\"/><Cell row=\"2\" col=\"10\" colspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"expr:ECTT == 0 ? &quot;-&quot; : ECTT\"/><Cell row=\"2\" col=\"12\" colspan=\"2\" text=\"하나로eSCM 전자상담\"/><Cell row=\"3\" col=\"2\" text=\"LMS\"/><Cell row=\"3\" col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:OMMSSUM == 0 ? &quot;-&quot; : OMMSSUM\"/><Cell row=\"3\" col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:LMSUPR\"/><Cell row=\"3\" col=\"5\" colspan=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"expr:OMMSSPPR == 0 ? &quot;-&quot; : OMMSSPPR\"/><Cell row=\"3\" col=\"8\" colspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"expr:OMMSTXA == 0 ? &quot;-&quot; : OMMSTXA\"/><Cell row=\"3\" col=\"10\" colspan=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"expr:OMMSTT == 0 ? &quot;-&quot; : OMMSTT\"/><Cell row=\"3\" col=\"12\" colspan=\"2\" text=\"상품본부 비정기 MMS\"/><Cell row=\"4\" colspan=\"2\"/><Cell row=\"4\" col=\"2\"/><Cell row=\"4\" col=\"3\" displaytype=\"number\" style=\"align:right;\"/><Cell row=\"4\" col=\"4\" displaytype=\"number\" style=\"align:right;\"/><Cell row=\"4\" col=\"5\" colspan=\"3\" displaytype=\"number\" style=\"align:right;\"/><Cell row=\"4\" col=\"8\" colspan=\"2\" displaytype=\"number\" style=\"align:right;\"/><Cell row=\"4\" col=\"10\" colspan=\"2\" displaytype=\"number\" style=\"align:right;\"/><Cell row=\"4\" col=\"12\" colspan=\"2\"/><Cell row=\"5\" colspan=\"2\"/><Cell row=\"5\" col=\"2\"/><Cell row=\"5\" col=\"3\" displaytype=\"number\" style=\"align:right;\"/><Cell row=\"5\" col=\"4\" displaytype=\"number\" style=\"align:right;\"/><Cell row=\"5\" col=\"5\" colspan=\"3\" displaytype=\"number\" style=\"align:right;\"/><Cell row=\"5\" col=\"8\" colspan=\"2\" displaytype=\"number\" style=\"align:right;\"/><Cell row=\"5\" col=\"10\" colspan=\"2\" displaytype=\"number\" style=\"align:right;\"/><Cell row=\"5\" col=\"12\" colspan=\"2\"/><Cell row=\"6\" colspan=\"2\"/><Cell row=\"6\" col=\"2\"/><Cell row=\"6\" col=\"3\" displaytype=\"number\" style=\"align:right;\"/><Cell row=\"6\" col=\"4\" displaytype=\"number\" style=\"align:right;\"/><Cell row=\"6\" col=\"5\" colspan=\"3\" displaytype=\"number\" style=\"align:right;\"/><Cell row=\"6\" col=\"8\" colspan=\"2\" displaytype=\"number\" style=\"align:right;\"/><Cell row=\"6\" col=\"10\" colspan=\"2\" displaytype=\"number\" style=\"align:right;\"/><Cell row=\"6\" col=\"12\" colspan=\"2\"/><Cell row=\"7\" colspan=\"2\"/><Cell row=\"7\" col=\"2\"/><Cell row=\"7\" col=\"3\" displaytype=\"number\" style=\"align:right;\"/><Cell row=\"7\" col=\"4\" displaytype=\"number\" style=\"align:right;\"/><Cell row=\"7\" col=\"5\" colspan=\"3\" displaytype=\"number\" style=\"align:right;\"/><Cell row=\"7\" col=\"8\" colspan=\"2\" displaytype=\"number\" style=\"align:right;\"/><Cell row=\"7\" col=\"10\" colspan=\"2\" displaytype=\"number\" style=\"align:right;\"/><Cell row=\"7\" col=\"12\" colspan=\"2\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" style=\"align:center;background:lightgoldenrodyellow;\" text=\"합계\"/><Cell col=\"2\" style=\"background:lightgoldenrodyellow;\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;background:lightgoldenrodyellow;\" text=\"expr:dataset.getColumn(0, 'SUMHAP') == 0 ? &quot;-&quot; : dataset.getColumn(0, 'SUMHAP')\"/><Cell col=\"4\" style=\"background:lightgoldenrodyellow;\"/><Cell col=\"5\" colspan=\"3\" displaytype=\"number\" style=\"align:right;background:lightgoldenrodyellow;\" text=\"expr:dataset.getColumn(0, 'SPPRHAP') == 0 ? &quot;-&quot; : dataset.getColumn(0, 'SPPRHAP')\"/><Cell col=\"8\" colspan=\"2\" displaytype=\"number\" style=\"align:right;background:lightgoldenrodyellow;\" text=\"expr:dataset.getColumn(0, 'TXAHAP') == 0 ? &quot;-&quot; : dataset.getColumn(0, 'TXAHAP')\"/><Cell col=\"10\" colspan=\"2\" displaytype=\"number\" style=\"align:right;background:lightgoldenrodyellow;\" text=\"expr:dataset.getColumn(0, 'TTHAP') == 0 ? &quot;-&quot; : dataset.getColumn(0, 'TTHAP')\"/><Cell col=\"12\" colspan=\"2\" style=\"background:lightgoldenrodyellow;\"/></Band></Format></Formats>");
            this.div_result.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "447", null, this);
            obj.set_taborder("7");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "43", "15", null, this);
            obj.set_taborder("11");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "16", "10", null, "21", "678", null, this.div_search);
            obj.set_taborder("45");
            obj.set_text("조회월");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("cal_ym", "absolute", "82", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("49");
            obj.set_url("common::calendarMonth.xfdl");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "786", "0", null, "490", "-2", null, this);
            obj.set_taborder("16");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_update", "absolute", null, "0", "41", "21", "121", null, this);
            obj.set_taborder("18");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "45", "21", "74", null, this);
            obj.set_taborder("19");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "14", null, this);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_result,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_text("Div02");

            	}
            );
            this.div_result.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("11");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 799, 694, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("상품본부문자발송내역");
            		p.style.set_border("0 none #808080ff");

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
            this._addPreloadList("fdl", "common::calendarMonth.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_7180.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_7180.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {  
        	var toDay = this.gfn_today("yyyyMMdd");

        	this.div_search.cal_ym._setValue(this.gfn_firstDate(this.gfn_minusMonth(toDay,1)).substr(0, 6));

           this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {  
           /*조회 호출*/
        /*   this.btn_search.click();*/
         
        }
         
         
         /*조회*/
        this.btn_search_onclick = function(obj,e)
        {	
        	this.fn_search();

        }

        
        this.fn_search = function()
        { 	  
        	
        	var cal_ym = this.gfn_nullToEmpty(this.div_search.cal_ym._getValue()) ;
        	var sParam = "cal_ym=" + cal_ym;
        	var sSvcID        = "retrieveItemHofcTextBrklist";
        	var sURL          = "svc::rest/bl/retrieveItemHofcTextBrklist";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_result=ds_result";	
        	var sArgument     = sParam;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /*콜백메소드*/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{	
        		if(svcID == "retrieveItemHofcTextBrklist"){
        			
        			if(this.ds_result.rowcount == 0){
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");	
        			}
        			else if(this.ds_result.rowcount > 0){
        				this.fn_trpl();
        			}
        		}
        		if(svcID == "ExcelItemHofcTextBrklist"){
        			
        			if(this.ds_result.rowcount == 0){
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");	
        			}
        			else if(this.ds_result.rowcount > 0){
        				this.fn_trpl();
        				var cal_ym = this.gfn_nullToEmpty(this.div_search.cal_ym._getValue()) ;
        				var today = this.gfn_today("yyyyMMdd");
        				this.exportObj = new ExcelExportObject("Export00", this);
        				this.exportObj.addEventHandler("onsuccess" , this.fn_excelDownload_onsuccess , this);
        				this.exportObj.addEventHandler("onerror", this.fn_excelDownload_onerror, this);
        				
        				//"TRPL_MSG_SVC(" + cal_ym.substr(2, 2) + "." + cal_ym.substr(4, 2) + ")"
        				this.exportObj.set_exportfilename("TRPL_MSG_SVC(" + cal_ym.substr(2, 2) + "." + cal_ym.substr(4, 2) + ")");
        				this.exportObj.set_exporturl(application.gv_server_url + "XExportImport");

        				//nIndex = ExcelExportObject00.addExportItem(nexacro.ExportItemTypes.GRID,Grid00,"Sheet1!A1","allband","allrecord","suppress","onlyvalue","none","color","both");
        				//this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID,this.Grid00,"Sheet1!A1","allband","allrecord","suppress","allstyle","none","color", "both", "cellline");
        				//this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID,this.Grid01,"Sheet2!A10","allband","allrecord","suppress","onlyvalue","none","color","both");
        	
        				this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.div_result.Grid00, "거래명세서!A1","allband","allrecord","suppress","allstyle","none","color", "both", "cellline");
        				this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.div_result.Grid01, "세부통계!A1","allband","allrecord","suppress","onlyvalue","none","","both", "cellline");
        				this.exportObj.exportData();
        			}
        			
        		}
        	}
        }

        this.fn_trpl = function(){
        	this.btn_update.set_enable(true);
        	var cal_ym = this.gfn_nullToEmpty(this.div_search.cal_ym._getValue()) ;
        	var firstDate = cal_ym+"01";
        	var nLastDate = this.gfn_lastDateNum(firstDate);
        	var lastDate = cal_ym+nLastDate.toString();
        	
        	this.div_result.Grid00.setCellProperty("head", 31, "text","사용 기간 : "+firstDate.substr(0, 4)+"."+firstDate.substr(4, 2)+"."+firstDate.substr(6, 2)+" ~ "+lastDate.substr(0, 4)+"."+lastDate.substr(4, 2)+"."+lastDate.substr(6, 2));
        	this.div_result.Grid00.setCellProperty("body", 0, "text","메시징서비스\n("+firstDate.substr(0, 4)+"."+firstDate.substr(4, 2)+" 사용분)");
        	
        	this.ds_resultSum.clearData();
        	this.ds_resultSum.addRow();
        	
        	this.ds_resultSum.setColumn(0, "SMSUPR", "10.0");//SMS단가
        	this.ds_resultSum.setColumn(0, "LMSUPR", "23.6");//LMS단가
        	
        	//역발행세금계산서미승인 parseFloat(this.ds_rqbrk.getColumn(0, 'SPPR') * 0.1).toFixed(1)
        	this.ds_resultSum.setColumn(0, "UTISUM", this.ds_result.getSum('UTI')); //수량
        	this.ds_resultSum.setColumn(0, "UTISPPR", this.ds_resultSum.getColumn(0, 'UTISUM') * this.ds_resultSum.getColumn(0, 'SMSUPR'));//공급가액
        	this.ds_resultSum.setColumn(0, "UTITXA", parseFloat(this.ds_resultSum.getColumn(0, 'UTISPPR') * 0.1).toFixed(1));//세액
        	this.ds_resultSum.setColumn(0, "UTITT", this.ds_resultSum.getColumn(0, 'UTISPPR') + this.ds_resultSum.getColumn(0, 'UTITXA'));//합게금액
        	
        	//마트장비쇼핑몰
        	this.ds_resultSum.setColumn(0, "MSMSUM", this.ds_result.getSum('MSM'));//수량
        	this.ds_resultSum.setColumn(0, "MSMSPPR", this.ds_resultSum.getColumn(0, 'MSMSUM') * this.ds_resultSum.getColumn(0, 'SMSUPR'));//공급가액
        	this.ds_resultSum.setColumn(0, "MSMTXA", parseFloat(this.ds_resultSum.getColumn(0, 'MSMSPPR') * 0.1).toFixed(1));//세액
        	this.ds_resultSum.setColumn(0, "MSMTT", this.ds_resultSum.getColumn(0, 'MSMSPPR') + this.ds_resultSum.getColumn(0, 'MSMTXA'));//합게금액
        	
        	//하나로eSCM 전자상담
        	this.ds_resultSum.setColumn(0, "ECSUM", this.ds_result.getSum('EC'));//수량
        	this.ds_resultSum.setColumn(0, "ECSPPR", Math.floor(this.ds_resultSum.getColumn(0, 'ECSUM') * this.ds_resultSum.getColumn(0, 'LMSUPR') * 0.1) * 10);//공급가액
        	this.ds_resultSum.setColumn(0, "ECTXA", parseFloat(this.ds_resultSum.getColumn(0, 'ECSPPR') * 0.1).toFixed(1));//세액
        	this.ds_resultSum.setColumn(0, "ECTT", this.ds_resultSum.getColumn(0, 'ECSPPR') + this.ds_resultSum.getColumn(0, 'ECTXA'));//합게금액
        	
        	//상품본부 비정기 MMS
        	this.ds_resultSum.setColumn(0, "OMMSSUM", this.ds_result.getSum('OMMS'));//수량
        	this.ds_resultSum.setColumn(0, "OMMSSPPR", Math.floor(this.ds_resultSum.getColumn(0, 'OMMSSUM') * this.ds_resultSum.getColumn(0, 'LMSUPR') * 0.1) * 10);//공급가액
        	this.ds_resultSum.setColumn(0, "OMMSTXA", parseFloat(this.ds_resultSum.getColumn(0, 'OMMSSPPR') * 0.1).toFixed(1));//세액
        	this.ds_resultSum.setColumn(0, "OMMSTT", this.ds_resultSum.getColumn(0, 'OMMSSPPR') + this.ds_resultSum.getColumn(0, 'OMMSTXA'));//합게금액
        	
        	this.ds_resultSum.setColumn(0, "SUMHAP", this.ds_resultSum.getColumn(0, 'UTISUM')+this.ds_resultSum.getColumn(0, 'MSMSUM')+this.ds_resultSum.getColumn(0, 'ECSUM')+this.ds_resultSum.getColumn(0, 'OMMSSUM')); ////수량합계
        	this.ds_resultSum.setColumn(0, "SPPRHAP", this.ds_resultSum.getColumn(0, 'UTISPPR')+this.ds_resultSum.getColumn(0, 'MSMSPPR')+this.ds_resultSum.getColumn(0, 'ECSPPR')+this.ds_resultSum.getColumn(0, 'OMMSSPPR'));//공급가액합계
        	this.ds_resultSum.setColumn(0, "TXAHAP", this.ds_resultSum.getColumn(0, 'UTITXA')+this.ds_resultSum.getColumn(0, 'MSMTXA')+this.ds_resultSum.getColumn(0, 'ECTXA')+this.ds_resultSum.getColumn(0, 'OMMSTXA'));//세액합계
        	this.ds_resultSum.setColumn(0, "TTHAP", this.ds_resultSum.getColumn(0, 'UTITT')+this.ds_resultSum.getColumn(0, 'MSMTT')+this.ds_resultSum.getColumn(0, 'ECTT')+this.ds_resultSum.getColumn(0, 'OMMSTT'));//합계금액합계
        	
        	this.ds_resultSum.setColumn(0, "YM", this.div_search.cal_ym._getValue());//조회월
        	
        	this.div_result_Grid00_onsize();
        }

        /*엑셀 출력*/
        this.btn_excel_onclick = function(obj,e)
        {
        	if(this.gfn_isNull(this.div_search.cal_ym._getValue())){
         		alert("조회기준 날짜를 선택하세요");
         	}
        	else{
        			var calcal_ym = this.gfn_nullToEmpty(this.div_search.cal_ym._getValue()) ;
        			
        			var sParam = "cal_ym=" + calcal_ym;
        			var sSvcID        = "ExcelItemHofcTextBrklist";
        			var sURL          = "svc::rest/bl/retrieveItemHofcTextBrklist";
        			var sInDatasets   = "";
        			var sOutDatasets  = "ds_result=ds_result";	
        			var sArgument     = sParam;
        			var sCallbackFunc = "fn_callBack";
        			var sTranType     = "S"; // U:저장/삭제, S:조회
        			
        			this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        // 엑셀 다운로드 성공
        this.fn_excelDownload_onsuccess = function(obj,e)
        {
        	trace("excel download : success");
        }
        // 엑셀 다운로드 실패
        this.fn_excelDownload_onerror = function(obj,e)
        {
        	trace("excel download : error");
        }

        var gridMode = "basic";
        this.div_list_btn_swap_onclick = function(obj,e)
        {
        	if (gridMode == "basic") {
        		gridMode = "detail";
        	} else {
        		gridMode = "basic";
        	}
        	this.fn_drawGrid(gridMode);
        }

        this.fn_drawGrid = function(gridMode)
        {
        	if (gridMode == "detail") {
        	
        		this.div_result.btn_swap.set_text("거래명세서 보기");
        		this.div_result.Grid00.set_visible(false);
        		this.div_result.Grid01.set_visible(true);
        	} else {
        		this.div_result.btn_swap.set_text("세부통계 보기");
        		this.div_result.Grid00.set_visible(true);
        		this.div_result.Grid01.set_visible(false);
        	}
        }

        this.btn_update_onclick = function(obj,e)
        {
        		var oArg = {paramMode:"U", dsArg:this.ds_resultSum};
        		var sOption = "autosize=true";
        		var sPopupCallBack = "fn_popupAfter";
        		this.gfn_openPopup("popId","OMG.BL::OMG_DS_SC_7180_P01.xfdl",oArg,sOption,sPopupCallBack);
        }
        this.div_result_Grid00_onsize = function(obj,e)
        {
        	this.div_result.Grid00.setFormatColProperty(0, "size", 45);
        	this.div_result.Grid00.setFormatColProperty(1, "size", 56);
        	this.div_result.Grid00.setFormatColProperty(2, "size", 74);
        	this.div_result.Grid00.setFormatColProperty(3, "size", 60);
        	this.div_result.Grid00.setFormatColProperty(4, "size", 62);
        	this.div_result.Grid00.setFormatColProperty(5, "size", 53);
        	this.div_result.Grid00.setFormatColProperty(6, "size", 66);
        	this.div_result.Grid00.setFormatColProperty(7, "size", 52);
        	this.div_result.Grid00.setFormatColProperty(8, "size", 34);
        	this.div_result.Grid00.setFormatColProperty(9, "size", 65);
        	this.div_result.Grid00.setFormatColProperty(10, "size", 56);
        	this.div_result.Grid00.setFormatColProperty(11, "size", 63);
        	this.div_result.Grid00.setFormatColProperty(12, "size", 75);
        	this.div_result.Grid00.setFormatColProperty(13, "size", 55);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_result.btn_swap.addEventHandler("onclick", this.div_list_btn_swap_onclick, this);
            this.div_result.Grid00.addEventHandler("onsize", this.div_result_Grid00_onsize, this);
            this.btn_update.addEventHandler("onclick", this.btn_update_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_7180.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
