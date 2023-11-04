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
                this.set_name("OMG_DS_SC_7150");
                this.set_classname("pattern_01");
                this.set_titletext("청구내역 조회");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_rqbrk", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RMS_MM\" type=\"STRING\" size=\"6\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"50\"/><Column id=\"DC_BF_UG_AM\" type=\"INT\" size=\"256\"/><Column id=\"DC_AM\" type=\"FLOAT\" size=\"256\"/><Column id=\"SPPR\" type=\"INT\" size=\"256\"/><Column id=\"VAT_AM\" type=\"INT\" size=\"256\"/><Column id=\"LS_RQS_AM\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_cnf", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("11");
            obj.set_text("확정");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_create", "absolute", null, "0", "41", "21", "118", null, this);
            obj.set_taborder("37");
            obj.set_text("생성");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("68");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "43", "15", null, this);
            obj.set_taborder("103");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "15", "10", "67", "21", null, null, this.div_search);
            obj.getSetter("taborder").set("12");
            obj.set_text("조회월");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("cal_by_dt", "absolute", "10.43%", "10", null, "21", "76.84%", null, this.div_search);
            obj.set_taborder("13");
            obj.set_url("common::calendarMonth.xfdl");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "788", "0", "15", "490", null, null, this);
            obj.getSetter("taborder").set("71");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "732", "21", "56", "8", null, null, this);
            obj.getSetter("taborder").set("72");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "0", "71", null, null, "15", "-1", this);
            obj.set_taborder("81");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Button("Button75", "absolute", "363", "0", null, "12", "362", null, this.Div02);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.Div02.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "0", "42", null, null, "0", "1", this.Div02);
            obj.set_taborder("2");
            obj.set_binddataset("ds_rqbrk");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_summarytype("top");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"청구월\"/><Cell col=\"2\" text=\"업체명\"/><Cell col=\"3\" text=\"사용료\"/><Cell col=\"4\" text=\"할인\"/><Cell col=\"5\" text=\"공급가\"/><Cell col=\"6\" text=\"부가세\"/><Cell col=\"7\" text=\"청구액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: ;\" expr=\"currow+1\"/><Cell col=\"1\" displaytype=\"normal\" text=\"bind:RMS_MM\" mask=\"@@@@-@@\" tooltiptext=\"bind:RMS_MM\"/><Cell col=\"2\" text=\"bind:CLNTNM\" tooltiptext=\"bind:CLNTNM\"/><Cell col=\"3\" displaytype=\"number\" text=\"bind:DC_BF_UG_AM\" tooltiptext=\"bind:DC_BF_UG_AM\"/><Cell col=\"4\" displaytype=\"number\" text=\"bind:DC_AM\" tooltiptext=\"bind:DC_AM\"/><Cell col=\"5\" displaytype=\"number\" text=\"bind:SPPR\" tooltiptext=\"bind:SPPR\"/><Cell col=\"6\" displaytype=\"number\" text=\"bind:VAT_AM\" tooltiptext=\"bind:VAT_AM\"/><Cell col=\"7\" displaytype=\"number\" text=\"bind:LS_RQS_AM\" tooltiptext=\"bind:LS_RQS_AM\"/></Band><Band id=\"summary\"><Cell text=\"합계\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\" displaytype=\"number\" expr=\"dataset.getSum(&quot;DC_BF_UG_AM&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;DC_BF_UG_AM&quot;)\"/><Cell col=\"4\" displaytype=\"number\" expr=\"dataset.getSum(&quot;DC_AM&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;DC_AM&quot;)\"/><Cell col=\"5\" displaytype=\"number\" expr=\"dataset.getSum(&quot;SPPR&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;SPPR&quot;)\"/><Cell col=\"6\" displaytype=\"number\" expr=\"dataset.getSum(&quot;VAT_AM&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;VAT_AM&quot;)\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:center;\" expr=\"dataset.getSum(&quot;LS_RQS_AM&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;LS_RQS_AM&quot;)\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "922", "1", "56", "15", null, null, this.Div02);
            obj.getSetter("taborder").set("5");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "922", "37", "56", "5", null, null, this.Div02);
            obj.getSetter("taborder").set("6");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "732", "72", "56", "41", null, null, this);
            obj.getSetter("taborder").set("87");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0.12%", "30", null, "42", "98.01%", null, this);
            obj.getSetter("taborder").set("88");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("103");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("81");
            		p.set_text("Div02");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("청구내역 조회");

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
        this.addIncludeScript("OMG_DS_SC_7150.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_7150.xfdl", function() {
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

        /* Form Init */
        this.form_init = function(obj,e)
        {	
        	// 페이지 로딩후 실행부분
        	var toDay = this.gfn_today("yyyyMMdd");	
        	this.div_search.cal_by_dt._setValue(this.gfn_firstDate(toDay).substr(0, 6));
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        /* 콜백 함수 */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        	// trace(this.ds_rqbrk.saveXML());

        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "retrieveUgfeRqBrkList"){
        			if(this.ds_rqbrk.rowcount==0)
        			{
        				this.alert("데이터가 없습니다.");
        			}
        		}
        		else if(svcID == "createUgfeRqBrk"){
        			if(ErrorCode == 0) alert("빌링생성을 완료하였습니다.");
        			else if(ErrorCode != 0) alert("빌링생성을 실패하였습니다.(Cause:" + ErrorMsg + ")");
        		}
        	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/	

        /* 빌링 생성 */
        this.btn_create_onclick = function(obj,e)
        {
        	var byDt = (this.div_search.cal_by_dt._getValue() + "").substr(0, 6);
        	var strRtn = this.gfn_getMessage("confirm", "confirm.message.create.billing", byDt.substr(0, 4) + "년 " + byDt.substr(5, 6) + "월");
        	if (strRtn == false) return;

        	var sParams			= "BY_DT=" + byDt
        						+ " USER_ID=" + application.gv_userId
        						;
        	var sSvcID			= "createUgfeRqBrk";
        	var sURL			= "svc::rest/bl/createUgfeRqBrk";
        	var sInDatasets		= "";
        	var sOutDatasets	= "";
        	var sArgument		= sParams;
        	var sCallbackFunc	= "fn_callBack";
        	var sTranType		= "S"; // U:저장/삭제, S:조회
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /* 빌링 확정 */
        this.btn_confirm_onclick = function(obj,e)
        {
        	var byDt = (this.div_search.cal_by_dt._getValue() + "").substr(0, 6);
        	var strRtn = this.gfn_getMessage("confirm", "confirm.message.confirm.billing", byDt.substr(0, 4) + "년 " + byDt.substr(5, 6) + "월");
        	if (strRtn == false) return;

        	var sParams			= "BY_DT=" + byDt
        						+ " USER_ID=" + application.gv_userId
        						;
        	var sSvcID			= "confirmUgfeRqBrk";
        	var sURL			= "svc::rest/bl/confirmUgfeRqBrk";
        	var sInDatasets		= "";
        	var sOutDatasets	= "";
        	var sArgument		= sParams;
        	var sCallbackFunc	= "fn_callBack";
        	var sTranType		= "S"; // U:저장/삭제, S:조회
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /* 청구내역 조회 */
        this.btn_search_onclick = function(obj,e)
        {
        	var byDt = (this.div_search.cal_by_dt._getValue() + "").substr(0, 6);
        	var sParams			= "BY_DT=" + byDt;
        	var sSvcID			= "retrieveUgfeRqBrkList";
        	var sURL			= "svc::rest/bl/retrieveUgfeRqBrkList";
        	var sInDatasets		= "";
        	var sOutDatasets	= "ds_rqbrk=ds_rqbrk";
        	var sArgument		= sParams;
        	var sCallbackFunc	= "fn_callBack";
        	var sTranType		= "S"; // U:저장/삭제, S:조회
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.Div02_Button75_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.Div02);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("oninit", this.form_init, this);
            this.btn_cnf.addEventHandler("onclick", this.btn_confirm_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_create.addEventHandler("onclick", this.btn_create_onclick, this);
            this.Div02.Button75.addEventHandler("onclick", this.Div02_Button75_onclick, this);
            this.Div02.Grid01.addEventHandler("onheadclick", this.Div02_Grid01_onheadclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_7150.xfdl");
        this.loadPreloadList();
       
    };
}
)();
