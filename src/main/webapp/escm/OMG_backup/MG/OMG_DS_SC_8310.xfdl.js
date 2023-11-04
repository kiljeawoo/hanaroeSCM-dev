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
                this.set_name("OMG_DS_SC_8310");
                this.set_titletext("설문조사 리스트");
                this.set_name("OMG_DS_SC_8310");
                this._setFormPosition(0,0,803,501);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_param", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pageVO", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CURRENT_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CURRENT_PAGE\">0</Col><Col id=\"PAGE_SIZE\">0</Col><Col id=\"TOTAL_ROW_COUNT\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_survey", this);
            obj._setContents("<ColumnInfo><Column id=\"BSN_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBTITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"APL_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"APL_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RMK_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRGMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CMENO\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_DSC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_survey_q", this);
            obj._setContents("<ColumnInfo><Column id=\"BSN_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_Q_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_Q_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTION\" type=\"STRING\" size=\"256\"/><Column id=\"A_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RMK_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_que", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"value\">단답형</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"value\">복수형</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"value\">주관식</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"value\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_search", "absolute", null, "20", "58", "21", "18", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "787", "0", "15", "490", null, null, this);
            obj.set_taborder("4");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "732", "12", "56", "8", null, null, this);
            obj.set_taborder("5");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "48", null, "43", "15", null, this);
            obj.set_taborder("6");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Edit("ed_title", "absolute", "57", "10", "442", "21", null, null, this.div_search);
            obj.set_taborder("11");
            obj.set_maxlength("30");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "15", "10", "103", "21", null, null, this.div_search);
            obj.set_taborder("12");
            obj.set_text("제목");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 20 0 11");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_insert01", "absolute", null, "20", "41", "21", "81", null, this);
            obj.set_taborder("8");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_comncList", "absolute", "0", "100", null, null, "16", "53", this);
            obj.set_taborder("11");
            obj.set_binddataset("ds_survey");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"49\"/><Column size=\"400\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"시작일\"/><Cell col=\"3\" text=\"종료일\"/></Band><Band id=\"body\"><Cell text=\"bind:SRV_SEQ\"/><Cell col=\"1\" text=\"bind:TITLE\"/><Cell col=\"2\" displaytype=\"date\" text=\"bind:SRV_ST_DT\"/><Cell col=\"3\" displaytype=\"date\" text=\"bind:SRV_ED_DT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging", "absolute", "28.02%", null, "338", "29", null, "6", this);
            obj.set_taborder("18");
            obj.style.set_align("center middle");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 965, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 501, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("설문조사 리스트");

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
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_8310.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_8310.xfdl", function() {
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
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
            this.fn_search_onclick();
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.fn_search_onclick = function(obj,e)
        {	
        	this.fn_paging(1);// 처음조회시 1페이지를 조회한다.
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        /* Paging 처리 */
        this.fn_paging = function(vPageNum)
        {
        	this.ds_pageVO.clearData();
        	this.ds_pageVO.addRow();
        	
        	var vPageSize   = 20; // Grid에 보여줄 Row수 선택
        	var vTotalCount = 0;	// 전체건수. 화면조회후 리턴받아 사용 (구동시 갱신)
        	
         	this.ds_pageVO.setColumn(0,"CURRENT_PAGE",vPageNum); //현재 페이지
         	this.ds_pageVO.setColumn(0,"PAGE_SIZE",vPageSize);
         	this.ds_pageVO.setColumn(0,"TOTAL_ROW_COUNT",vTotalCount);
        	 
        	var argumentObj = "";
        	
        	this.fn_retrieveSurveyList();
        }

        /* 조회-서비스 Call */ 
        this.fn_retrieveSurveyList = function()
        {		
        	this.ds_survey.clearData();
        	
        	var title		= this.gfn_nullToEmpty(this.div_search.ed_title.value);			// 제목

        	var sParam        = "TITLE=" + title + " BSN_DSC=ESCM SRV_DSC=001"; // SRV_DSC 001 : 만족도 설문조사
        	var sSvcID        = "retrieveSurveyList";
        	var sURL          = "svc::rest/mg/survey/retrieveSurveyList";
        	var sInDatasets   = "ds_pageVO=ds_pageVO";
        	var sOutDatasets  = "ds_survey=ds_survey ds_pageVO=ds_pageVO";
        	var sArgument     = sParam;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        /* 콜백메소드 */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {		
        	var current_page = this.ds_pageVO.getColumn(0, "CURRENT_PAGE");
        	var page_size    = this.ds_pageVO.getColumn(0,"PAGE_SIZE");
        	var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        	
        	trace("ErrorCode " + ErrorCode);
        	
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        	 	if (svcID == "retrieveSurveyList") {
        	 		if (this.ds_survey.rowcount > 0) {
        				this.div_paging.fn_pageSet(sTotal, page_size, "div_paging", current_page);
        			} else if(this.ds_survey.rowcount == 0) {
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        	 			this.div_paging.fn_pageSet(0, 0, "div_paging", current_page);
        			}
        		}
        	}
        }

        this.fn_insert_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"U"};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("popId", "OMG.MG::OMG_DS_SC_8311.xfdl", oArg, sOption, sPopupCallBack);
        }

        /* 팝업호출확인하기 */
        this.fn_popupAfter = function(strId,strVal)
        {
        	switch(strId)
        	{
        		case "OMG_DS_SC_8311":
        			 this.fn_search_onclick();
        			 break;
        	}
        }

        /*상세조회*/
        this.grd_comncList_oncellclick = function(obj,e)
        {
        	var title = this.ds_survey.getColumn(e.row, "TITLE");
        	var srv_seq = this.ds_survey.getColumn(e.row, "SRV_SEQ");
        	
        	var oArg = {paramMode:"S", title:title , srv_seq:srv_seq};				
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";  
        	this.gfn_openPopup("OMG_DS_SC_8311", "OMG.MG::OMG_DS_SC_8311.xfdl",oArg,sOption,sPopupCallBack);	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.fn_search_onclick, this);
            this.div_search.ed_title.addEventHandler("oneditclick", this.div_search_edt_menuId_oneditclick, this);
            this.btn_insert01.addEventHandler("onclick", this.fn_insert_onclick, this);
            this.grd_comncList.addEventHandler("oncellclick", this.grd_comncList_oncellclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_8310.xfdl");
        this.loadPreloadList();
       
    };
}
)();
