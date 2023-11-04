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
                this.set_name("OMG_DS_SC_7270");
                this.set_titletext("청구입금 보고서");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_rqsDepInq", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"13\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"50\"/><Column id=\"RMS_MM1\" type=\"STRING\" size=\"6\"/><Column id=\"RMS_MM2\" type=\"STRING\" size=\"6\"/><Column id=\"RMS_MM3\" type=\"STRING\" size=\"6\"/><Column id=\"RMS_MM4\" type=\"STRING\" size=\"6\"/><Column id=\"RMS_MM5\" type=\"STRING\" size=\"6\"/><Column id=\"RMS_MM6\" type=\"STRING\" size=\"6\"/><Column id=\"RMS_VALUE1\" type=\"INT\"/><Column id=\"RMS_VALUE2\" type=\"INT\"/><Column id=\"RMS_VALUE3\" type=\"INT\"/><Column id=\"RMS_VALUE4\" type=\"INT\"/><Column id=\"RMS_VALUE5\" type=\"INT\"/><Column id=\"RMS_VALUE6\" type=\"INT\"/><Column id=\"RMS_SUM\" type=\"INT\"/><Column id=\"DEP_MM1\" type=\"STRING\" size=\"6\"/><Column id=\"DEP_MM2\" type=\"STRING\" size=\"6\"/><Column id=\"DEP_MM3\" type=\"STRING\" size=\"6\"/><Column id=\"DEP_MM4\" type=\"STRING\" size=\"6\"/><Column id=\"DEP_MM5\" type=\"STRING\" size=\"6\"/><Column id=\"DEP_MM6\" type=\"STRING\" size=\"6\"/><Column id=\"DEP_VALUE1\" type=\"INT\"/><Column id=\"DEP_VALUE2\" type=\"INT\"/><Column id=\"DEP_VALUE3\" type=\"INT\"/><Column id=\"DEP_VALUE4\" type=\"INT\"/><Column id=\"DEP_VALUE5\" type=\"INT\"/><Column id=\"DEP_VALUE6\" type=\"INT\"/><Column id=\"DEP_SUM\" type=\"INT\"/><Column id=\"VIRTUAL\" type=\"INT\"/><Column id=\"CMS\" type=\"INT\"/><Column id=\"NO_BANKBOOK\" type=\"INT\"/><Column id=\"DEPOSIT_SUM\" type=\"INT\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_execl", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("11");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_Searchbtn");
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

            obj = new Static("Static03", "absolute", "732", "72", "56", "41", null, null, this);
            obj.set_taborder("87");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web_downExcel", "absolute", "80.07%", "21", null, "14", "14.45%", null, this);
            obj.set_taborder("104");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "0", "31", null, null, "15", "39", this);
            obj.set_taborder("105");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "0", "82", null, null, "0", "-33", this.Div02);
            obj.set_taborder("0");
            obj.set_binddataset("ds_rqsDepInq");
            obj.set_autoenter("none");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("none");
            obj.set_summarytype("top");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("false");
            obj.set_treeuseexpandkey("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"업체코드\"/><Cell col=\"2\" text=\"업체명\"/><Cell col=\"3\" displaytype=\"normal\" expr=\"dataset.getColumn(0,&quot;RMS_MM1&quot;)\"/><Cell col=\"4\" displaytype=\"normal\" expr=\"dataset.getColumn(0,&quot;RMS_MM2&quot;)\"/><Cell col=\"5\" displaytype=\"normal\" expr=\"dataset.getColumn(0,&quot;RMS_MM3&quot;)\"/><Cell col=\"6\" displaytype=\"normal\" expr=\"dataset.getColumn(0,&quot;RMS_MM4&quot;)\"/><Cell col=\"7\" displaytype=\"normal\" expr=\"dataset.getColumn(0,&quot;RMS_MM5&quot;)\"/><Cell col=\"8\" displaytype=\"normal\" expr=\"dataset.getColumn(0,&quot;RMS_MM6&quot;)\"/><Cell col=\"9\" text=\"청구합계\" tooltiptext=\"청구합계\"/><Cell col=\"10\" displaytype=\"normal\" text=\"가상계좌\" tooltiptext=\"가상계좌\"/><Cell col=\"11\" displaytype=\"normal\" text=\"자동이체\" tooltiptext=\"자동이체\"/><Cell col=\"12\" displaytype=\"normal\" text=\"무통장\" tooltiptext=\"무통장\"/><Cell col=\"13\" text=\"입금합계\" tooltiptext=\"입금합계\"/><Cell col=\"14\" displaytype=\"normal\" expr=\"dataset.getColumn(0,&quot;DEP_MM1&quot;)\"/><Cell col=\"15\" displaytype=\"normal\" expr=\"dataset.getColumn(0,&quot;DEP_MM2&quot;)\"/><Cell col=\"16\" displaytype=\"normal\" expr=\"dataset.getColumn(0,&quot;DEP_MM3&quot;)\"/><Cell col=\"17\" displaytype=\"normal\" expr=\"dataset.getColumn(0,&quot;DEP_MM4&quot;)\"/><Cell col=\"18\" displaytype=\"normal\" expr=\"dataset.getColumn(0,&quot;DEP_MM5&quot;)\"/><Cell col=\"19\" displaytype=\"normal\" expr=\"dataset.getColumn(0,&quot;DEP_MM6&quot;)\"/><Cell col=\"20\" displaytype=\"normal\" text=\"입금반영합계\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" style=\"align: ;\" expr=\"currow+1\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" text=\"bind:NA_TRPL_C\" tooltiptext=\"bind:NA_TRPL_C\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" text=\"bind:CLNTNM\" tooltiptext=\"bind:CLNTNM\"/><Cell col=\"3\" displaytype=\"number\" text=\"bind:RMS_VALUE1\" tooltiptext=\"bind:RMS_VALUE1\"/><Cell col=\"4\" displaytype=\"number\" text=\"bind:RMS_VALUE2\" tooltiptext=\"bind:RMS_VALUE2\"/><Cell col=\"5\" displaytype=\"number\" text=\"bind:RMS_VALUE3\" tooltiptext=\"bind:RMS_VALUE3\"/><Cell col=\"6\" displaytype=\"number\" text=\"bind:RMS_VALUE4\" tooltiptext=\"bind:RMS_VALUE4\"/><Cell col=\"7\" displaytype=\"number\" text=\"bind:RMS_VALUE5\" tooltiptext=\"bind:RMS_VALUE5\"/><Cell col=\"8\" displaytype=\"number\" text=\"bind:RMS_VALUE6\" tooltiptext=\"bind:RMS_VALUE6\"/><Cell col=\"9\" displaytype=\"number\" text=\"bind:RMS_SUM\" tooltiptext=\"bind:RMS_SUM\"/><Cell col=\"10\" displaytype=\"number\" text=\"bind:VIRTUAL\" tooltiptext=\"bind:VIRTUAL\"/><Cell col=\"11\" displaytype=\"number\" text=\"bind:CMS\" tooltiptext=\"bind:CMS\"/><Cell col=\"12\" displaytype=\"number\" text=\"bind:NO_BANKBOOK\" tooltiptext=\"bind:NO_BANKBOOK\"/><Cell col=\"13\" displaytype=\"number\" text=\"bind:DEPOSIT_SUM\" tooltiptext=\"bind:DEPOSIT_SUM\"/><Cell col=\"14\" displaytype=\"number\" text=\"bind:DEP_VALUE1\" tooltiptext=\"bind:DEP_VALUE1\"/><Cell col=\"15\" displaytype=\"number\" text=\"bind:DEP_VALUE2\" tooltiptext=\"bind:DEP_VALUE2\"/><Cell col=\"16\" displaytype=\"number\" text=\"bind:DEP_VALUE3\" tooltiptext=\"bind:DEP_VALUE3\"/><Cell col=\"17\" displaytype=\"number\" text=\"bind:DEP_VALUE4\" tooltiptext=\"bind:DEP_VALUE4\"/><Cell col=\"18\" displaytype=\"number\" text=\"bind:DEP_VALUE5\" tooltiptext=\"bind:DEP_VALUE5\"/><Cell col=\"19\" displaytype=\"number\" text=\"bind:DEP_VALUE6\" tooltiptext=\"bind:DEP_VALUE6\"/><Cell col=\"20\" displaytype=\"number\" expr=\"bind:DEP_SUM\" tooltiptext=\"bind:DEP_SUM\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" style=\"align:center middle;\" text=\"합계\"/><Cell col=\"2\" expr=\"dataset.getCountNF()\"/><Cell col=\"3\" displaytype=\"number\" expr=\"dataset.getSum(&quot;RMS_VALUE1&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;RMS_VALUE1&quot;)\"/><Cell col=\"4\" displaytype=\"number\" expr=\"dataset.getSum(&quot;RMS_VALUE2&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;RMS_VALUE2&quot;)\"/><Cell col=\"5\" displaytype=\"number\" expr=\"dataset.getSum(&quot;RMS_VALUE3&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;RMS_VALUE3&quot;)\"/><Cell col=\"6\" displaytype=\"number\" expr=\"dataset.getSum(&quot;RMS_VALUE4&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;RMS_VALUE4&quot;)\"/><Cell col=\"7\" displaytype=\"number\" expr=\"dataset.getSum(&quot;RMS_VALUE5&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;RMS_VALUE5&quot;)\"/><Cell col=\"8\" displaytype=\"number\" expr=\"dataset.getSum(&quot;RMS_VALUE6&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;RMS_VALUE6&quot;)\"/><Cell col=\"9\" displaytype=\"number\" expr=\"dataset.getSum(&quot;RMS_SUM&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;RMS_SUM&quot;)\"/><Cell col=\"10\" displaytype=\"number\" expr=\"dataset.getSum(&quot;VIRTUAL&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;VIRTUAL&quot;)\"/><Cell col=\"11\" displaytype=\"number\" expr=\"dataset.getSum(&quot;CMS&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;CMS&quot;)\"/><Cell col=\"12\" displaytype=\"number\" expr=\"dataset.getSum(&quot;NO_BANKBOOK&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;NO_BANKBOOK&quot;)\"/><Cell col=\"13\" displaytype=\"number\" expr=\"dataset.getSum(&quot;DEPOSIT_SUM&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;DEPOSIT_SUM&quot;)\"/><Cell col=\"14\" displaytype=\"number\" expr=\"dataset.getSum(&quot;DEP_VALUE1&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;DEP_VALUE1&quot;)\"/><Cell col=\"15\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;DEP_VALUE2&quot;)\" tooltiptext=\"expr:expr:dataset.getSum(&quot;DEP_VALUE2&quot;)\"/><Cell col=\"16\" displaytype=\"number\" expr=\"expr:dataset.getSum(&quot;DEP_VALUE3&quot;)\" tooltiptext=\"expr:expr:dataset.getSum(&quot;DEP_VALUE3&quot;)\"/><Cell col=\"17\" displaytype=\"number\" expr=\"dataset.getSum(&quot;DEP_VALUE4&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;DEP_VALUE4&quot;)\"/><Cell col=\"18\" displaytype=\"number\" expr=\"dataset.getSum(&quot;DEP_VALUE5&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;DEP_VALUE5&quot;)\"/><Cell col=\"19\" displaytype=\"number\" expr=\"dataset.getSum(&quot;DEP_VALUE6&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;DEP_VALUE6&quot;)\"/><Cell col=\"20\" displaytype=\"number\" expr=\"dataset.getSum(&quot;DEP_SUM&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;DEP_SUM&quot;)\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("105");
            		p.set_text("Div02");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("청구입금 보고서");

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
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_7270.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_7270.xfdl", function(exports) {
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
        // Form Onload: DataSet 로딩 후 실행
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        // gfn_setInitForm 처리 후 호출(CallBack)할 함수
        this.fn_afterFormOnload = function()
        {
           //페이지 로딩후 실행부분
        //	this.btn_search_onclick();
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        // 콜백 함수
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	trace("svcID:" + svcID + " ErrorCode:" + ErrorCode);
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}
        	else
        	{
        		if(svcID == "retrieveRqsDepInqList")
        		{
        			trace("this.ds_rqsDepInq:" + this.ds_rqsDepInq.saveXML());
        			if(this.ds_rqsDepInq.rowcount == 0)
        			{
        				this.Div02.Grid01.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        			}
        		}
        	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        // 청구입금 보고서 조회
        this.btn_search_onclick = function(obj,e)
        {
        	var sParams			= "";
        	this.fn_search(sParams);
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/	
        this.fn_search = function(sParams)
        {
        	var sSvcID			= "retrieveRqsDepInqList";
        	var sURL			= "svc::rest/bl/retrieveRqsDepInqList";
        	var sInDatasets		= "";
        	var sOutDatasets	= "ds_rqsDepInq=ds_rqsDepInq";
        	var sArgument		= sParams;
        	var sCallbackFunc	= "fn_callBack";
        	var sTranType		= "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.btn_excel_onclick = function(obj,e)
        {
        	var sParams			= "";
        	this.fn_excel(sParams);
        }

        this.fn_excel = function(sParams)
        {
        //	trace("엑셀 다운로드 params >>> " + sParams);
        	this.web_downExcel.set_url(application.gv_serverAdmin_url + "rest/excel/bl/downloadExcelRqsDepInqList?" + sParams);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_execl.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.Div02.Grid01.addEventHandler("oncellclick", this.Grid01_oncellclick, this);
            this.Div02.Grid01.addEventHandler("onheadclick", this.Div02_Grid01_onheadclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_7270.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
