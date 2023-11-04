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
                this.set_name("OMG_DS_SC_8343");
                this.set_titletext("모니터링 결과");
                this.set_name("OMG_DS_SC_8312");
                this._setFormPosition(0,0,802,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_survey", this);
            obj._setContents("<ColumnInfo><Column id=\"BSN_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBTITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"APL_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"APL_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RMK_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRGMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CMENO\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_survey_r1", this);
            obj._setContents("<ColumnInfo><Column id=\"SRV_Q_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTION\" type=\"STRING\" size=\"256\"/><Column id=\"CNT1\" type=\"STRING\" size=\"256\"/><Column id=\"CNT2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_survey_excel", this);
            obj._setContents("<ColumnInfo><Column id=\"USR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTION\" type=\"STRING\" size=\"256\"/><Column id=\"ANSWER\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC_N\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_search", "absolute", null, "20", "58", "21", "18", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "787", "0", "15", "490", null, null, this);
            obj.set_taborder("2");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "732", "12", "56", "8", null, null, this);
            obj.set_taborder("3");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "48", null, "43", "15", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Edit("ed_title", "absolute", "67", "10", "637", "21", null, null, this.div_search);
            obj.set_taborder("11");
            obj.set_maxlength("30");
            obj.set_readonly("true");
            obj.style.set_background("beige");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "15", "10", "103", "21", null, null, this.div_search);
            obj.set_taborder("12");
            obj.set_text("설문 :");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 20 0 11");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_cho", "absolute", null, "59", "41", "21", "27", null, this);
            obj.set_taborder("5");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "473", "15", "73", "23", null, null, this);
            obj.set_taborder("6");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "397", "15", "73", "23", null, null, this);
            obj.set_taborder("7");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "320", "15", "73", "23", null, null, this);
            obj.set_taborder("8");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_comncList", "absolute", "0", "128", null, null, "15", "29", this);
            obj.set_cssclass("subgrd");
            obj.set_taborder("10");
            obj.set_binddataset("ds_survey_r1");
            obj.set_autofittype("col");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"305\"/><Column size=\"87\"/><Column size=\"77\"/><Column size=\"100\" band=\"right\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"질문번호\"/><Cell col=\"1\" text=\"질문\"/><Cell col=\"2\" text=\"있음\"/><Cell col=\"3\" text=\"없음\"/><Cell col=\"4\" text=\"상세내용\"/></Band><Band id=\"body\"><Cell text=\"bind:SRV_Q_SEQ\"/><Cell col=\"1\" style=\"align:left middle;\" text=\"bind:QUESTION\" wordwrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"2\" text=\"bind:CNT1\" wordwrap=\"char\"/><Cell col=\"3\" text=\"bind:CNT2\"/><Cell col=\"4\" displaytype=\"button\" style=\"padding:3 10 3 10;\" text=\"보기\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_execl", "absolute", null, "20", "41", "21", "82", null, this);
            obj.set_taborder("11");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web_downExcel", "absolute", "78.05%", "25", null, "14", "16.46%", null, this);
            obj.set_taborder("12");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_excel", "absolute", "-2", "526", null, null, "8", "-152", this);
            obj.set_taborder("13");
            obj.set_binddataset("ds_survey_excel");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"180\"/><Column size=\"500\"/><Column size=\"96\"/><Column size=\"300\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell style=\"font:bold 11 arial;linespace:12;\" text=\"업체GLN\"/><Cell col=\"1\" style=\"font:bold 11 arial;linespace:12;\" text=\"업체명\"/><Cell col=\"2\" style=\"font:bold 11 arial;linespace:12;\" text=\"질문\"/><Cell col=\"3\" style=\"font:bold 11 arial;linespace:12;\" text=\"선택\"/><Cell col=\"4\" style=\"font:bold 11 arial;linespace:12;\" text=\"업체 응답내용\"/></Band><Band id=\"body\"><Cell style=\"line:1 solid #808080ff ;font:10 arial;selectline:1 solid #808080ff ;\" text=\"bind:NA_TRPL_C\"/><Cell col=\"1\" style=\"line:1 solid #808080ff ;font:10 arial;selectline:1 solid #808080ff ;\" text=\"bind:NA_TRPL_N\"/><Cell col=\"2\" style=\"line:1 solid #808080ff ;font:10 arial;selectline:1 solid #808080ff ;\" text=\"bind:QUESTION\"/><Cell col=\"3\" style=\"line:1 solid #808080ff ;font:10 arial;selectline:1 solid #808080ff ;\" text=\"bind:ANSWER\"/><Cell col=\"4\" style=\"line:1 solid #808080ff ;font:10 arial;selectline:1 solid #808080ff ;\" text=\"bind:NA_BZPLC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 965, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 802, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("모니터링 결과");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","divSearch.edt_menuId","value","ds_in","MENU_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divSearch.cbo_menuLevel","value","ds_in","MENU_LEVEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divSearch.edt_menuName","value","ds_in","MENU_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divSearch.edt_svcGroup","value","ds_in","SVC_GROUP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divSearch.edt_fileName","value","ds_in","FILE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divSearch.edt_fileType","value","ds_in","FILE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","divSearch.cbo_displayYn","value","ds_in","DISPLAY_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","divSearch.cbo_useYn","value","ds_in","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_8343.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_8343.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {	
        	/*this.ds_survey.addRow();*/
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	//this.fn_search_onclick();
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.fn_search_onclick = function(obj,e)
        {	
        	this.fn_SurveyResult();
        }

        // 엑셀 다운로드
        this.btn_excel_onclick = function(obj,e)
        {
        	var srv_seq = this.gfn_nullToEmpty(this.Edit00.value);
        	if (srv_seq == "") {
        		this.alert("선택된 모니터링 설문조사가 없습니다");
        		return;
        	}
        	this.fn_excelResult();
        // 	var sParam	= "SRV_SEQ="	+ srv_seq;
        // 	excelDownHandler(application.gv_server_url+"rest/excel/pt/retrieveMonitorResultExcel?"+sParam, this);
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
         
        /* 설문조사 답변 받아오기 */
        this.fn_SurveyResult = function()
        {		
        	this.ds_survey_r1.clearData();

        	var SRV_SEQ = this.gfn_nullToEmpty(this.Edit00.value);			// 제목		//SRV_SEQ : 설문순번
        	if (SRV_SEQ == "") {
        		this.alert("선택된 모니터링 설문조사가 없습니다");
        		return;
        	}
        	var sParams = "BSN_DSC="  + "ESCM"
        			    + " SRV_SEQ=" + this.gfn_nullToEmpty(this.Edit00.value) ;
         
        	var sSvcID        = "retrieveMonitorResult";		
        	var sURL          = "svc::rest/pt/survey/retrieveMonitorResult";		
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_survey_r1=ds_survey_r1";		
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        /* 설문조사 답변 엑셀 다운로드 */
        this.fn_excelResult = function()
        {		
        	this.ds_survey_excel.clearData();

        	var SRV_SEQ = this.gfn_nullToEmpty(this.Edit00.value);			// 제목		//SRV_SEQ : 설문순번
        	if (SRV_SEQ == "") {
        		this.alert("선택된 모니터링 설문조사가 없습니다");
        		return;
        	}
        	var sParams = "SRV_SEQ=" + this.gfn_nullToEmpty(this.Edit00.value) ;
         
        	var sSvcID        = "excelResult";		
        	var sURL          = "svc::rest/excel/pt/retrieveMonitorResultExcel";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_survey_excel=ds_survey_excel";		
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        /* 콜백메소드 */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {		
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID == "retrieveMonitorResult") {
        		} else if (svcID == "excelResult") {
        			if (this.ds_survey_excel.rowcount == 0) {
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			} else if (this.ds_survey_excel.rowcount > 0) {
        				var today = this.gfn_today("yyyyMMdd");

        				this.exportObj = new ExcelExportObject("Export00", this);
        				this.exportObj.addEventHandler("onsuccess" , this.fn_excelDownload_onsuccess , this);
        				this.exportObj.addEventHandler("onerror", this.fn_excelDownload_onerror, this);

        				this.exportObj.set_exportfilename("excelMonitoring"+today);
        				this.exportObj.set_exporturl(application.gv_server_url + "XExportImport");
        				this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.grd_excel, "Sheet1!A1");
        				this.exportObj.exportData();
        			}
        		}
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

        /* 팝업호출확인하기 */
        this.fn_popupAfter = function(strId,strVal)
        {
        	switch(strId) {
        		case "POPUP_SELECT_SRV":
        			var strValNo = strVal.split('|');
        			this.div_search.ed_title.set_value(strValNo[0]);
        			this.Edit00.set_value(strValNo[1]);
        			this.Edit01.set_value(strValNo[2]);
        			this.Edit02.set_value(strValNo[3]);
        			
        			this.fn_search_onclick();
        	}
        }

        //설문조사 선택 (팝업창으로 설문 선택)
        this.btn_cho_onclick = function(obj,e)
        {	
        	var oArg = {BSN_DSC:'ESCM', SRV_DSC:'002'};
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("POPUP_SELECT_SRV", "OMG.MG::OMG_DS_SC_8321.xfdl", oArg, sOption, sPopupCallBack);
        }

        this.grd_comncList_oncellclick = function(obj,e)
        {
        	if (e.cell == 4) {
        		var SRV_SEQ		= this.gfn_nullToEmpty(this.Edit00.value);
        		var SRV_Q_SEQ		= this.ds_survey_r1.getColumn(e.row, "SRV_Q_SEQ");
        		var QUESTION		= this.ds_survey_r1.getColumn(e.row, "QUESTION");
        		
        		var oArg = {SRV_SEQ:SRV_SEQ, SRV_Q_SEQ:SRV_Q_SEQ, Q:QUESTION};
        		var sOption = "autosize=true,title=true";
        		var sPopupCallBack = "fn_popupAfter";
        		this.gfn_openPopup("POPUP_QUESTION_DETAIL", "OMG.PT::OMG_DS_SC_8343_P01.xfdl", oArg, sOption, sPopupCallBack);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.fn_search_onclick, this);
            this.div_search.ed_title.addEventHandler("oneditclick", this.div_search_edt_menuId_oneditclick, this);
            this.div_search.Static05.addEventHandler("onclick", this.div_search_Static05_onclick, this);
            this.btn_cho.addEventHandler("onclick", this.btn_cho_onclick, this);
            this.grd_comncList.addEventHandler("oncellclick", this.grd_comncList_oncellclick, this);
            this.btn_execl.addEventHandler("onclick", this.btn_excel_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_8343.xfdl");
        this.loadPreloadList();
       
    };
}
)();
