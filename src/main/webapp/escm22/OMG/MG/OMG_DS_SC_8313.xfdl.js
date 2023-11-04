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
                this.set_name("OMG_DS_SC_8313");
                this.set_titletext("설문조사 결과 주관식");
                this.set_name("OMG_DS_SC_8313");
                this._setFormPosition(0,0,802,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_survey", this);
            obj._setContents("<ColumnInfo><Column id=\"BSN_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBTITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"APL_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"APL_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RMK_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRGMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CMENO\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_survey_r2", this);
            obj._setContents("<ColumnInfo><Column id=\"USR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTION\" type=\"STRING\" size=\"256\"/><Column id=\"A_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_Q_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_A_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ANSWER\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_A_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_TEXT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Edit("Edit00", "absolute", "514", "15", "73", "23", null, null, this);
            obj.set_taborder("6");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "430", "12", "73", "23", null, null, this);
            obj.set_taborder("7");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "320", "15", "73", "23", null, null, this);
            obj.set_taborder("8");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_comncList2", "absolute", "0", "128", null, null, "19", "29", this);
            obj.set_taborder("9");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("both");
            obj.set_cssclass("subgrd");
            obj.set_binddataset("ds_survey_r2");
            obj.set_autosizingtype("row");
            obj.set_autosizebandtype("head");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"141\"/><Column size=\"70\"/><Column size=\"40\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"질문\"/><Cell col=\"1\" text=\"답변\"/><Cell col=\"2\" text=\"사용자ID\"/><Cell col=\"3\" text=\"사용자답변\"/></Band><Band id=\"body\"><Cell edittype=\"none\" text=\"bind:QUESTION\" wordwrap=\"char\" autosizerow=\"default\" autosizecol=\"default\"/><Cell col=\"1\" text=\"bind:ANSWER\"/><Cell col=\"2\" text=\"bind:USR_ID\"/><Cell col=\"3\" edittype=\"none\" text=\"bind:INPUT_TEXT\" wordwrap=\"char\" editacceptsenter=\"false\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_execl", "absolute", null, "20", "41", "21", "82", null, this);
            obj.set_taborder("10");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web_downExcel", "absolute", "78.05%", "25", null, "14", "16.46%", null, this);
            obj.set_taborder("11");
            obj.set_visible("false");
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
            		p.set_titletext("설문조사 결과 주관식");

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
        this.addIncludeScript("OMG_DS_SC_8313.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_8313.xfdl", function(exports) {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

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
        	this.fn_SurveyResult2();
        }

        // 엑셀 다운로드
        this.btn_excel_onclick = function(obj,e)
        {
        	var srv_seq	= this.gfn_nullToEmpty(this.Edit00.value);
        	
        	var sParam	= "SRV_SEQ="	+ srv_seq;

        	this.fn_excel(sParam);
        }

        this.fn_excel = function(sParam)
        {
        		trace("엑셀 다운로드 param >>> " + sParam);
        		this.web_downExcel.set_url(application.gv_serverAdmin_url + "rest/excel/mg/downloadExcelSurveyR2?" + sParam);
        }
        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
         
        /* 설문조사 답변 받아오기 */
        this.fn_SurveyResult2 = function()
        {		
        	this.ds_survey_r2.clearData();

        	var SRV_SEQ		= this.gfn_nullToEmpty(this.Edit00.value);			// 제목		//SRV_SEQ : 설문순번
        	var sParams = "BSN_DSC="  + "ESCM"
        			    + " SRV_SEQ=" + this.gfn_nullToEmpty(this.Edit00.value) ;
         
        	var sSvcID        = "SurveyResult2";		
        	var sURL          = "svc::rest/mg/survey/SurveyResult2";		
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_survey_r2=ds_survey_r2";		
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
        		if (svcID == "SurveyResult2") {
        			if (ErrorCode == 0) {
        				
        			}
        		}
        	}
        	
        }

        /* 팝업호출확인하기 */
        this.fn_popupAfter = function(strId,strVal)
        {
        	trace(" strId : " + strId + " strVal : " + strVal);
        	switch(strId)
        	{
        		case "OMG_DS_SC_8321":

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
        	var oArg = {};
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("OMG_DS_SC_8321", "OMG.MG::OMG_DS_SC_8321.xfdl", oArg, sOption, sPopupCallBack);
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
            this.btn_execl.addEventHandler("onclick", this.btn_excel_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_8313.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
