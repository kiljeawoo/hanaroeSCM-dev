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
                this.set_name("OMG_DS_SC_7320");
                this.set_titletext("대손관리");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_bdList", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BD_CHK\" type=\"INT\" size=\"1\"/><Column id=\"RMS_TRPL_C\" type=\"STRING\" size=\"13\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"20\"/><Column id=\"RMS_MM\" type=\"STRING\" size=\"6\"/><Column id=\"LS_RQS_AM\" type=\"BIGDECIMAL\" size=\"10\"/><Column id=\"BAD_DEBT_AM\" type=\"BIGDECIMAL\" size=\"10\"/><Column id=\"BD_RV_AM\" type=\"BIGDECIMAL\" size=\"10\"/><Column id=\"SD_YN\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "17", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelListDown", "absolute", null, "0", "41", "21", "86", null, this);
            obj.set_taborder("37");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("68");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "788", "0", "15", "490", null, null, this);
            obj.set_taborder("71");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "732", "21", "56", "8", null, null, this);
            obj.set_taborder("72");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "0", "102", null, null, "15", "-1", this);
            obj.set_taborder("81");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_bdList", "absolute", "0", "17", null, null, "0", "8", this.Div02);
            obj.set_taborder("2");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_summarytype("top");
            obj.set_binddataset("ds_bdList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"선택\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"업체코드\"/><Cell col=\"3\" text=\"업체명\"/><Cell col=\"4\" text=\"청구월\"/><Cell col=\"5\" text=\"청구금액\"/><Cell col=\"6\" text=\"대손금액\"/><Cell col=\"7\" text=\"대손입금액(합산)\"/><Cell col=\"8\" text=\"폐업여부\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align: ;\" text=\"bind:BD_CHK\" tooltiptext=\"bind:BD_CHK\"/><Cell col=\"1\" expr=\"currow+1\"/><Cell col=\"2\" edittype=\"none\" editfilter=\"none\" text=\"bind:RMS_TRPL_C\" tooltiptext=\"bind:RMS_TRPL_C\"/><Cell col=\"3\" style=\"align:left middle;\" text=\"bind:CLNTNM\" tooltiptext=\"bind:CLNTNM\"/><Cell col=\"4\" displaytype=\"normal\" editfilter=\"none\" style=\"align: ;\" text=\"bind:RMS_MM\" mask=\"@@@@-@@\" tooltiptext=\"bind:RMS_MM\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:LS_RQS_AM\" tooltiptext=\"bind:LS_RQS_AM\"/><Cell col=\"6\" displaytype=\"number\" editfilter=\"none\" style=\"align:right;\" text=\"bind:BAD_DEBT_AM\" tooltiptext=\"bind:BAD_DEBT_AM\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BD_RV_AM\" tooltiptext=\"bind:BD_RV_AM\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"none\" text=\"bind:SD_YN\" tooltiptext=\"bind:SD_YN\"/></Band><Band id=\"summary\"><Cell celltype=\"none\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center middle;\" text=\"0\"/><Cell col=\"1\"/><Cell col=\"2\" displaytype=\"number\" expr=\"dataset.getCountNF()\" tooltiptext=\"expr:dataset.getCountNF()\"/><Cell col=\"3\"/><Cell col=\"4\" displaytype=\"normal\"/><Cell col=\"5\" displaytype=\"number\" expr=\"dataset.getSum(&quot;LS_RQS_AM&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;LS_RQS_AM&quot;)\"/><Cell col=\"6\" displaytype=\"number\" expr=\"dataset.getSum(&quot;BAD_DEBT_AM&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;BAD_DEBT_AM&quot;)\"/><Cell col=\"7\" displaytype=\"number\" expr=\"dataset.getSum(&quot;BD_RV_AM&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;BD_RV_AM&quot;)\"/><Cell col=\"8\" displaytype=\"normal\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button75", "absolute", "347", "0", null, "12", "363", null, this.Div02);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "732", "72", "56", "41", null, null, this);
            obj.set_taborder("87");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0.12%", "30", null, "42", "98.01%", null, this);
            obj.set_taborder("88");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_creation", "absolute", null, "0", "41", "21", "190", null, this);
            obj.set_taborder("107");
            obj.set_text("생성");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "75", "15", null, this);
            obj.set_taborder("108");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "34.73%", "10", null, "21", "55.73%", null, this.div_search);
            obj.set_taborder("27");
            obj.set_text("업체조회");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("Edit_comnum", "absolute", "43.26%", "10", null, "21", "47.84%", null, this.div_search);
            obj.set_taborder("28");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("Edit_comname", "absolute", "52.42%", "10", null, "21", "38.17%", null, this.div_search);
            obj.set_taborder("29");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_comname", "absolute", "62.09%", "10", null, "21", "35.24%", null, this.div_search);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "0.89%", "10", null, "21", "90.59%", null, this.div_search);
            obj.set_taborder("31");
            obj.set_text("청구월");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("cal_month", "absolute", "9.41%", "10", null, "21", "77.86%", null, this.div_search);
            obj.set_taborder("32");
            obj.set_url("common::calendarMonth.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new CheckBox("chk_month_all", "absolute", "25.06%", "10", null, "21", "66.92%", null, this.div_search);
            obj.set_taborder("33");
            obj.set_text("이전월");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_action", "absolute", null, "0", "41", "21", "138", null, this);
            obj.set_taborder("109");
            obj.set_text("대손");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web_downExcel", "absolute", "35.87%", "7", null, "14", "58.66%", null, this);
            obj.set_taborder("110");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 788, 420, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("81");
            		p.set_text("Div02");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 75, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("108");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("대손관리");

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
        this.addIncludeScript("OMG_DS_SC_7320.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_7320.xfdl", function(exports) {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        var	listFlag = 0;
        var	month_all;

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        /* Form Init: 페이지 호출 후 실행 */
        this.form_init = function(obj,e)
        {
        	var	toDay	= this.gfn_today("yyyyMMdd");
        	var	fDay	= this.gfn_firstDate(toDay);
        	var	rMon	= this.gfn_addMonth(fDay, -6).substr(0, 6);
        	this.div_search.cal_month._setValue(rMon);
        }

        /* Form Onload: DataSet 로딩 후 실행 */
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        /* 콜백 함수 */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        //	trace(this.ds_bdList.saveXML());
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}
        	else
        	{
        		if(svcID == "retrieveBadDebtReqList")
        		{
        			if(this.ds_bdList.rowcount == 0)
        			{
        				this.Div02.grd_bdList.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        			}
        			listFlag = 1;
        		}
        		else if(svcID == "creationBadDebt")
        		{
        			if(this.ds_bdList.rowcount == 0)
        			{
        				this.Div02.grd_bdList.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        			}
        			else
        			{
        				this.Div02.grd_bdList.setCellProperty("Summ", 0, "text", "1");
        			}	
        			listFlag = 2;
        		}
        		else if(svcID == "actionBadDebt")
        		{
        			alert("대손처리를 완료하였습니다.");
        		//	this.btn_search_onclick();
        		}
        	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        /* 조회조건 영역 펼치기, 접기 */
        this.Div02_Button75_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.Div02);
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
        this.btn_creation_onclick = function(obj,e)
        {
        	var sParams			= "CAL_MON="	+ this.div_search.cal_month._getValue().substr(0, 6)
        						;
        //	trace("sParams:" + sParams);
        	this.fn_creation(sParams);
        }

        this.fn_creation = function(sParams)
        {
        	var sSvcID			= "creationBadDebt";
        	var sURL			= "svc::rest/bl/creationBadDebt";
        	var sInDatasets		= "";
        	var sOutDatasets	= "ds_bdList=ds_bdList";
        	var sArgument		= sParams
        	var sCallbackFunc	= "fn_callBack";
        	var sTranType		= "U";	// U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.btn_action_onclick = function(obj,e)
        {
        	var sSvcID			= "actionBadDebt";
        	var sURL			= "svc::rest/bl/actionBadDebt";
        	var sInDatasets		= "ds_bdList=ds_bdList";
        	var sOutDatasets	= "";
        	var sArgument		= "";
        	var sCallbackFunc	= "fn_callBack";
        	var sTranType		= "U";	// U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.btn_excelListDown_onclick = function(obj,e)
        {
        	if(this.div_search.chk_month_all.value == true)	month_all = "1";
        	else month_all = "0";

        	var sParams			= "CAL_MON="	+ this.div_search.cal_month._getValue().substr(0, 6)
        						+ "&TRPL_C="	+ this.gfn_nullToEmpty(this.div_search.Edit_comnum.value)
        						+ "&CLNTNM="	+ this.gfn_nullToEmpty(this.div_search.Edit_comname.value)
        						+ "&MONTH_ALL="	+ month_all
        						+ "&LIST_FLAG="	+ listFlag
        						;
        //	trace("sParams:" + sParams);
        	this.fn_excel(sParams);
        }

        this.fn_excel = function(sParams)
        {
        //	trace("엑셀 다운로드 params >>> " + sParams);
        	this.web_downExcel.set_url(application.gv_serverAdmin_url + "rest/excel/bl/downloadExcelBadDebtReqList?" + sParams);
        }

        this.btn_search_onclick = function(obj,e)
        {
        	if(this.div_search.chk_month_all.value == true)	month_all = "1";
        	else month_all = "0";

        	var sParams			= "CAL_MON="	+ this.div_search.cal_month._getValue().substr(0, 6)
        						+ " TRPL_C="	+ this.gfn_nullToEmpty(this.div_search.Edit_comnum.value)
        						+ " CLNTNM="	+ this.gfn_nullToEmpty(this.div_search.Edit_comname.value)
        						+ " MONTH_ALL="	+ month_all
        						;
        //	trace("sParams:" + sParams);
        	this.fn_search(sParams);
        }

        this.fn_search = function(sParams)
        {
        	var sSvcID			= "retrieveBadDebtReqList";
        	var sURL			= "svc::rest/bl/retrieveBadDebtReqList";
        	var sInDatasets		= "";
        	var sOutDatasets	= "ds_bdList=ds_bdList";
        	var sArgument		= sParams;
        	var sCallbackFunc	= "fn_callBack";
        	var sTranType		= "S";	// U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        //	업체 조회
        this.div_search_btn_comname_onclick = function(obj,e)
        {
        	var oArg			= "";
        	var sOption			= "autosize=true,title=true";
        	var sPopupCallBack	= "fn_popupAfter";
        	this.gfn_openPopup("trplSearchPopup", "OMG.BL::OMG_DS_SC_7230_P01.xfdl", oArg, sOption, sPopupCallBack);
        }

        //	팝업작업 후 진행함수
        this.fn_popupAfter = function(strId,strVal)
        {
        //	trace(" strId : " + strId + " strVal : " + strVal);
        	if(strVal != '')
        	{
        		var paramsArr = strVal.split(",");
        		if(strId == "trplSearchPopup")
        		{
        			this.div_search.Edit_comnum.set_value(paramsArr[0]);
        			this.div_search.Edit_comname.set_value(paramsArr[1]);
        		}
        	}
        }

        this.grd_bd_onsummclick = function(obj,e)
        {
        	if (e.col == 0)
        	{
        		if(this.Div02.grd_bdList.getCellProperty("Summ", 0, "text") == "0")
        		{
        			this.Div02.grd_bdList.setCellProperty("Summ", 0, "text", "1");
        			for(var i = 0, length = this.ds_bdList.getRowCount(); i < length; i++)
        			{
        				this.ds_bdList.setColumn(i, "BD_CHK", "1");
        			}
        		}
        		else if(this.Div02.grd_bdList.getCellProperty("Summ", 0, "text") == "1")
        		{
        			this.Div02.grd_bdList.setCellProperty("Summ", 0, "text", "0");
        			for(var i = 0, length = this.ds_bdList.getRowCount(); i < length; i++)
        			{
        				this.ds_bdList.setColumn(i, "BD_CHK", "0");
        			}
        		}
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("oninit", this.form_init, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_excelListDown.addEventHandler("onclick", this.btn_excelListDown_onclick, this);
            this.Div02.grd_bdList.addEventHandler("onsummclick", this.grd_bd_onsummclick, this);
            this.Div02.Button75.addEventHandler("onclick", this.Div02_Button75_onclick, this);
            this.btn_creation.addEventHandler("onclick", this.btn_creation_onclick, this);
            this.div_search.btn_comname.addEventHandler("onclick", this.div_search_btn_comname_onclick, this);
            this.btn_action.addEventHandler("onclick", this.btn_action_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_7320.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
