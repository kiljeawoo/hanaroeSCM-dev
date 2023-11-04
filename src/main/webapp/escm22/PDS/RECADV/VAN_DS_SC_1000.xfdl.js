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
                this.set_name("VAN_DS_SC_1000");
                this.set_titletext("월간정보");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dataM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BY_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BY_QT\" type=\"INT\" size=\"256\"/><Column id=\"BY_AM\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "43", "15", null, this);
            obj.set_taborder("103");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "15", "11", "67", "21", null, null, this.div_search);
            obj.set_taborder("12");
            obj.set_text("조회월");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("cal_by_dt", "absolute", "80", "10", "100", "21", null, null, this.div_search);
            obj.set_taborder("45");
            obj.set_url("common::calendarMonth.xfdl");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "1", "22", "15", "141", null, null, this);
            obj.set_taborder("102");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "83", "30", "103", "10", null, null, this);
            obj.set_taborder("100");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "121", "62", "103", "10", null, null, this);
            obj.set_taborder("101");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "539", null, this);
            obj.set_taborder("47");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "788", "0", "15", "490", null, null, this);
            obj.set_taborder("58");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "71", null, null, "15", "12", this);
            obj.set_taborder("64");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("Button10", "absolute", "365", "0", null, "12", "360", null, this.div_list);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_master", "absolute", "0", "41", null, null, "0", "0", this.div_list);
            obj.set_taborder("10");
            obj.set_binddataset("ds_dataM");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"일자\"/><Cell col=\"1\" text=\"수량\"/><Cell col=\"2\" text=\"금액(천원)\"/></Band><Band id=\"body\"><Cell text=\"bind:BY_DT\" mask=\"####-##-##\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:BY_QT\" mask=\"#,##0\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:BY_AM\" mask=\"#,##0\"/></Band><Band id=\"summary\"><Cell style=\"align:center;\" text=\"합   계\"/><Cell col=\"1\" displaytype=\"number\" expr=\"expr:dataset.getSum('BY_QT');\" mask=\"#,##0\"/><Cell col=\"2\" displaytype=\"number\" expr=\"expr:dataset.getSum('BY_AM');\" mask=\"#,##0\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "733", "1", "55", "40", null, null, this.div_list);
            obj.set_taborder("13");
            obj.set_text("40");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "733", "21", "55", "8", null, null, this);
            obj.set_taborder("104");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "732", "21", "56", "8", null, null, this);
            obj.set_taborder("106");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "181", "28", "30", "44", null, null, this);
            obj.set_taborder("108");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "116", null, this);
            obj.set_taborder("109");
            obj.set_text("div_auth");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("110");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("111");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web_downExcel", "absolute", "684", "25", "44", "14", null, null, this);
            obj.set_taborder("112");
            obj.set_visible("false");
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
            obj = new Layout("default", "", 978, 503, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("64");
            		p.set_scrollbars("none");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("월간정보");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::calendarMonth.xfdl");
            this._addPreloadList("fdl", "common::location.xfdl");
            this._addPreloadList("fdl", "common::AuthorityWorkplace.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1000.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1000.xfdl", function(exports) {
        /*##################################################################################
         화면명	: 일자별정보
         화면ID  	: VAN_DS_SC_1000
         작성자 	: swha
        ####################################################################################*/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        var chkDay;
        /* Form Load */
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj,e);
        }

        this.fn_afterFormOnload = function(){	
        	
        	var toDay = this.gfn_today("yyyyMMdd");
        	//3년전
        	chkDay = Number(this.gfn_minusMonth(toDay, 7).substr(0, 6));
        	this.div_search.cal_by_dt._setValue(this.gfn_firstDate(toDay).substr(0, 6));
        	this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));

        }

        /* Validation Check */
        this.fn_validationCheck = function(){
        	
        	var byDt = this.div_search.cal_by_dt._getValue();
        	
        	if(this.gfn_isNull(byDt)){
        		this.gfn_getMessage("alert", "validation.message.selectDate.no.data");
        		return false;
        	}else{
        		if(Number(byDt.toString().substr(0, 6)) - Number(chkDay) < 0){
        			this.alert("최근 8개월까지 조회 가능합니다.");
        			return false;
        		}
        		
        	}
        	
        	return true;
        }

        this.fn_search = function(){
        	var byDt = this.gfn_nullToEmpty(this.div_search.cal_by_dt._getValue());
        		
        	//권한사업장 코드
        	var trplC = this.getTrplCode();
        	
        	var params =  "BY_DT=" + byDt 
        				+ " TRPL_C=" + trplC;
        				
        	var sSvcID        = "retrieveDailyStoreSum";//통신아이디
        	var sURL          = "svc::/rest/pds/retrieveDailyStoreSum";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_dataM=ds_dataM";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }
        /* Search */
        this.btn_search_onclick = function(obj,e)
        {
        	
        	this.ds_dataM.clearData();
        	
        	if(this.fn_validationCheck())
        		this.fn_search();	
        }

        /* Print */

        /* Excel */

        

        
        /* Event */

        

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "retrieveDailyStoreSum"){
        			trace(this.ds_dataM.saveXML());
        			if(this.ds_dataM.rowcount == 0){
        				this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        			}
        		}
        	}
        }

        this.div_list_Button10_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list)
        }

        this.btn_excel_onclick = function(obj,e)
        {
        	var byDt = this.gfn_nullToEmpty(this.div_search.cal_by_dt._getValue());
        		
        	//권한사업장 코드
        	var trplC = this.getTrplCode();
        	var fileName = this.getExcelFileName("납품정보_월간정보");
        	var params =  "BY_DT=" + byDt 
        				+ "&TRPL_C=" + trplC
        				+ "&fileName=" + fileName;
        					
        	this.web_downExcel.set_url(application.gv_server_url+"rest/excel/pds/downloadExcelDailyStoreSum?"+params);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_dataM.addEventHandler("onrowposchanged", this.ds_event_priceM_onrowposchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.div_list.Button10.addEventHandler("onclick", this.div_list_Button10_onclick, this);
            this.div_list.grd_master.addEventHandler("oncellclick", this.fn_grid01_search, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1000.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
