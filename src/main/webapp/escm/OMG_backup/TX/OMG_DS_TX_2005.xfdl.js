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
                this.set_name("OMG_DS_TX_2001");
                this.set_titletext("매출세금계산서(역발행)_IT경제부");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_tax", this);
            obj._setContents("<ColumnInfo><Column id=\"DT\" type=\"STRING\" size=\"256\"/><Column id=\"REGS_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_AMT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_condition", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STARTDT\" type=\"STRING\" size=\"256\"/><Column id=\"ENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"NTS_TMS_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_KD\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"CODE01\" type=\"STRING\" size=\"256\"/><Column id=\"CODE02\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"RPBC_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_CLNT_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"OCU_DSC\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"STARTDT\"/><Col id=\"ENDDT\"/><Col id=\"DT_TYPE\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "95", "15", null, this);
            obj.set_taborder("49");
            obj.set_scrollbars("none");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", "127", "21", null, null, this.div_search);
            obj.set_taborder("46");
            obj.set_text("일자");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_start", "absolute", "176", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("50");
            obj.set_value("20190101");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("false");
            obj = new Static("Static06", "absolute", "282", "10", "12", "21", null, null, this.div_search);
            obj.set_taborder("51");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_end", "absolute", "300", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("52");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj.set_readonly("false");
            obj = new Combo("cbo_dt", "absolute", "106", "10", "67", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_dt_innerdataset = new Dataset("cbo_dt_innerdataset", this.div_search.cbo_dt);
            cbo_dt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">발행일</Col></Row></Rows>");
            obj.set_innerdataset(cbo_dt_innerdataset);
            obj.set_taborder("54");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_text("발행일");
            obj.set_displayrowcount("1");
            obj.set_index("0");

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", null, "1", "15", "491", "0", null, this);
            obj.set_taborder("22");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Div("div_grd", "absolute", "0", "123", null, null, "15", "0", this);
            obj.set_taborder("39");
            this.addChild(obj.name, obj);
            obj = new Button("btn_flag", "absolute", "329", "0", null, "12", "332", null, this.div_grd);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_grd.addChild(obj.name, obj);
            obj = new Grid("grd_tax", "absolute", "0", "42", null, null, "0", "29", this.div_grd);
            obj.set_taborder("1");
            obj.set_binddataset("ds_tax");
            obj.set_autofittype("none");
            obj.set_enable("true");
            obj.set_cellsizingtype("col");
            obj.set_nodatatext("조회된 건수가 없습니다.");
            obj.set_summarytype("top");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"133\"/><Column size=\"135\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"122\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"현 시간\"/><Cell col=\"2\" text=\"발행 월\"/><Cell col=\"3\" text=\"유형 코드\"/><Cell col=\"4\" text=\"발행상태\"/><Cell col=\"5\" text=\"발행 수\"/><Cell col=\"6\" text=\"총 금액\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:DT\"/><Cell col=\"2\" text=\"bind:REGS_DATE\"/><Cell col=\"3\" text=\"bind:TXBIL_STSC\"/><Cell col=\"4\" text=\"bind:STATUS\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:COUNT\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TOT_AMT\"/></Band></Format><Format id=\"format_copy\"></Format></Formats>");
            this.div_grd.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("44");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "72", null, this);
            obj.set_taborder("47");
            obj.set_text("div_auth");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "170", "0", "120", "22", null, null, this);
            obj.set_taborder("50");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 95, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("49");
            		p.set_scrollbars("none");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 788, 367, this.div_grd,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("39");

            	}
            );
            this.div_grd.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("매출세금계산서(역발행)_IT경제부");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_search.cbo_dt","value","ds_condition","DT_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_search.cal_start","value","ds_condition","STARTDT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_search.cal_end","value","ds_condition","ENDDT");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
            this._addPreloadList("fdl", "common::AuthorityWorkplace.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_TX_2005.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_TX_2005.xfdl", function() {
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {   
        	this.div_search.cal_start.set_value("20190101");
        	this.div_search.cal_end.set_value(application.gv_today);
            this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {  
           /*조회 호출*/
           this.div_search.cbo_ENT_PRG_STSC.set_value("A");
           this.div_search.rdo_DT_YN.set_value("N");

        }

        //조회 
        this.btn_search_onclick = function()
        {
        			
        	var sSvcID        = "TaxbillListIT";
        	var sURL          = "svc::rest/tx/TaxbillListIT";
            var sInDatasets   = "ds_condition=ds_condition";
        	var sOutDatasets  = "ds_tax=ds_tax";	
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	

        	if(sSvcID=="TaxbillListIT" ){
        	    trace("TaxbillListIT 완료 " );
        	}
        }

        this.fn_retrieveTaxBillList = function()
        {

        
        		var sSvcID        = "TaxbillListIT";
        		var sURL          = "svc::rest/tx/retrieveTaxBillList";
        		var sInDatasets   = "ds_condition=ds_condition ds_pageVO=ds_pageVO";
        		var sOutDatasets  = "ds_tax=ds_tax ds_pageVO=ds_pageVO";	
        		var sArgument     = "";
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "S"; // U:저장/삭제, S:조회 
        		
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);

        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_search.cal_start.addEventHandler("onkeydown", this.Calendar_onkeydown, this);
            this.div_search.cal_start.addEventHandler("onchanged", this.Calendar_onchanged, this);
            this.div_search.cal_end.addEventHandler("onkeydown", this.Calendar_onkeydown, this);
            this.div_search.cal_end.addEventHandler("onchanged", this.Calendar_onchanged, this);
            this.div_search.cbo_dt.addEventHandler("onitemchanged", this.div_search_cbo_dt_onitemchanged, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.div_grd.btn_flag.addEventHandler("onclick", this.btn_flag_onclick, this);
            this.div_grd.grd_tax.addEventHandler("onheadclick", this.div_grd_grd_tax_onheadclick, this);
            this.div_grd.grd_tax.addEventHandler("oncelldblclick", this.div_grd_grd_tax_oncelldblclick, this);

        };

        this.loadIncludeScript("OMG_DS_TX_2005.xfdl");
        this.loadPreloadList();
       
    };
}
)();
