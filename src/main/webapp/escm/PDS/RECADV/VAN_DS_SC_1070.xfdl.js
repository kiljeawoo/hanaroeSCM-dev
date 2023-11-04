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
                this.set_name("frm_VAN_DS_SC_1070");
                this.set_titletext("수수료 현황");
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
            obj._setContents("<ColumnInfo><Column id=\"ROWNUMB\" type=\"string\" size=\"32\"/><Column id=\"CLNTNM\" type=\"string\" size=\"32\"/><Column id=\"NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"FEERT\" type=\"string\" size=\"32\"/><Column id=\"BY_DT\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_local", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_RGN_C\" type=\"string\" size=\"32\"/><Column id=\"RGN_CNM\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sum", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"FEERT\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "43", "15", null, this);
            obj.set_taborder("103");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "15", "10", "67", "21", null, null, this.div_search);
            obj.set_taborder("12");
            obj.set_text("매입월");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("cal_by_dt", "absolute", "82", "10", "100", "21", null, null, this.div_search);
            obj.set_taborder("45");
            obj.set_url("common::calendarMonth.xfdl");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "1", "22", "15", "141", null, null, this);
            obj.set_taborder("102");
            obj.set_text("15");
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

            obj = new Div("div_list", "absolute", "0", "71", null, null, "15", "0", this);
            obj.set_taborder("64");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btn_divResize", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_master", "absolute", "0", "40", null, null, "0", "0", this.div_list);
            obj.set_taborder("10");
            obj.set_binddataset("ds_dataM");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"300\"/><Column size=\"140\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"지사코드\"/><Cell col=\"2\" text=\"지사명\"/><Cell col=\"3\" text=\"수수료(원)\"/></Band><Band id=\"body\"><Cell text=\"bind:ROWNUMB\"/><Cell col=\"1\" text=\"bind:NA_TRPL_C\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:CLNTNM\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:FEERT\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" displaytype=\"number\" style=\"align:center;\" text=\"합계\"/><Cell col=\"3\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'FEERT')\"/></Band></Format></Formats>");
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
            obj.set_taborder("113");
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
            		p.set_titletext("수수료 현황");

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
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1070.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1070.xfdl", function() {
        /*##################################################################################
         화면명	: 일자별정보
         화면ID  	: VAN_DS_SC_1070
         작성자 	: hroh
        ####################################################################################*/
        //include "lib::comLib.xjs";

        var chkDay;
        /* Form Load */
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj,e);
        }

        /* Form Init*/
        this.fn_afterFormOnload = function() //onload
        {	
        	///페이지 로딩후 실행부분
        	var toDay = this.gfn_today("yyyyMMdd");
        	
        	trace("toDay->"+toDay);
        	
        	this.div_search.cal_by_dt._setValue(toDay.substr(0, 6));	
        	
        	this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	//그리드클릭 이벤트 등록
        	this.div_list.grd_master.addEventHandler("oncellclick", this.grd_afterFnc, this);
          
        }

        /* Validation Check */
        this.fn_validationCheck = function(){
        	
        	var byDt = this.div_search.cal_by_dt._getValue();
        	
        	trace("byDt-->"+byDt)
        		
        	if(this.gfn_isDate6(byDt) == false){
        		this.gfn_getMessage("alert", "validation.message.selectDate.no.data");
        		return false;
        	}	
        	return true;
        }

        
        /* Search */
        this.btn_search_onclick = function(obj,e)
        {	
        	if(this.fn_validationCheck()){
        		this.ds_dataM.clearData();
        		
        		var byDt = (this.div_search.cal_by_dt._getValue() + "").substr(0, 6); //매입월	
        		
        		var params =  "BY_DT=" + byDt;					
        		
        		//trace(">>>>>>> params : " +  params);
        			
        		var sSvcID        = "retrieveFeeCurrentList";//통신아이디
        		var sURL          = "svc::/rest/pds/recadv/retrieveFeeCurrentList";// 호출할 서버 페이지 주소		
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_dataM=DATASET ds_sum=DS_SUM";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = params;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        			
        	}		
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
        		if(svcID == "retrieveFeeCurrentList"){			
        		
        			//this.ds_dataM.set_rowposition(1);
        			this.ds_dataM.set_rowposition(0);
        			this.ds_dataM.set_rowposition(-1);
        			
        			
        			if(this.ds_dataM.rowcount > 0){
        			}else{
        			}
        		}
        		
        		if(svcID == "downloadExcelSalesDailyStoreSumList"){
        		}
        	}
        }
        this.div_list_btn_divResize_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        /* 엑셀버튼 클릭 시*/
        this.btn_excel_onclick = function(obj,e)
        {
        	if(!this.fn_validationCheck()) return;
        	
        	var byDt = (this.div_search.cal_by_dt._getValue() + "").substr(0, 6);	
        	
        	var title = this.parent.sNm;
        	title = title.replace(/ /gi, '');
        	var fileName = title + "_" + this.getDate() + ".xls";
        	
        	var params =  "BY_DT=" + byDt
        				+ "&fileName=" + fileName;				
        			
        	//trace(">>>>>>> params : " +  params);
        	
        	params = encodeURI(encodeURI(params));
        	
        	//this.web_downExcel.set_url(application.gv_server_url+"rest/excel/pds/recadv/printRetrieveFeeCurrentList?"+params);
        	excelDownHandler(application.gv_server_url+"rest/excel/pds/recadv/printRetrieveFeeCurrentList?"+params, this);
        }

        this.div_list_grd_master_onheadclick = function(obj,e)
        {
        	if(e.cell != 3){ //정렬기능 적용할 컬럼 지정
        		this.gfn_gridSort(obj,e);
        	}
        }

        /* Event 클릭시 상세 페이지*/
        this.grd_afterFnc = function(obj,e)
        {
        /*
        	if(e.reason == 51)
        	{		
        		this.ds_dataM.set_enableevent(false);
        		this.ds_dataM.set_rowposition(-1);
        		this.ds_dataM.set_enableevent(true);
        		return;
        	}
        */
        	
        	var BY_DT = this.gfn_nullToEmpty(this.ds_dataM.getColumn(this.ds_dataM.rowposition,"BY_DT"));	//매입월
            var BRO_C = this.gfn_nullToEmpty(this.ds_dataM.getColumn(this.ds_dataM.rowposition,"NA_TRPL_C"));  //지사코드    
            var CLNTNM = this.gfn_nullToEmpty(this.ds_dataM.getColumn(this.ds_dataM.rowposition,"CLNTNM"));	//지사명    
            
        	var oArg = {BY_DT:BY_DT, BRO_C:BRO_C, CLNTNM:CLNTNM};
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "";
        	this.gfn_openPopup("VAN_DS_SC_1071","PDS.RECADV::VAN_DS_SC_1071.xfdl",oArg,sOption,sPopupCallBack);
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_list.btn_divResize.addEventHandler("onclick", this.div_list_btn_divResize_onclick, this);
            this.div_list.grd_master.addEventHandler("onheadclick", this.div_list_grd_master_onheadclick, this);
            this.div_list.grd_master.addEventHandler("oncellclick", this.div_list_grd_master_oncellclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1070.xfdl");
        this.loadPreloadList();
       
    };
}
)();
