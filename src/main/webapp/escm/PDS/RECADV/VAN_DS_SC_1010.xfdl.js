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
                this.set_name("VAN_DS_SC_1010");
                this.set_titletext("기간별정보");
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
            obj = new Static("Static05", "absolute", "15", "11", "79", "21", null, null, this.div_search);
            obj.set_taborder("12");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_by_dt_fr", "absolute", "94", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("45");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("cal_by_dt_to", "absolute", "205", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("46");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static04", "absolute", "195", "10", "10", "21", null, null, this.div_search);
            obj.set_taborder("47");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "1", "22", "15", "141", null, null, this);
            obj.set_taborder("102");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "97", "30", "103", "10", null, null, this);
            obj.set_taborder("100");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "135", "62", "103", "10", null, null, this);
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
            obj = new Grid("grd_master", "absolute", "0", "40", null, null, "0", "0", this.div_list);
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

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("83");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

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

            obj = new Static("Static16", "absolute", "302", "28", "30", "44", null, null, this);
            obj.set_taborder("108");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "116", null, this);
            obj.set_taborder("109");
            obj.set_text("Div00");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("110");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web_downExcel", "absolute", "684", "25", "44", "14", null, null, this);
            obj.set_taborder("111");
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
            		p.set_titletext("기간별정보");

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
            this._addPreloadList("fdl", "common::AuthorityWorkplace.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1010.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1010.xfdl", function() {
        /*##################################################################################
         화면명	: 기간별정보
         화면ID  	: VAN_DS_SC_1010
         작성자 	: swha
        ####################################################################################*/
        //include "lib::comLib.xjs";

        

        /* Form Load */
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj,e);
        }

        /* Form Init*/
        this.fn_afterFormOnload = function(){
        	///페이지 로딩후 실행부분
        	var toDay = this.gfn_today("yyyyMMdd");
        	this.div_search.cal_by_dt_fr.set_value(this.gfn_firstDate(toDay));
        	this.div_search.cal_by_dt_to.set_value(this.gfn_lastDate(toDay));
        	this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        }

        /* Validation Check */
        this.fn_validationCheck = function(){
        	
        	
        	var byDtFr = this.div_search.cal_by_dt_fr.value;
        	var byDtTo = this.div_search.cal_by_dt_to.value;	
        	if(this.gfn_isNull(byDtFr)){
        		this.gfn_getMessage("alert", "validation.message.fromDate.no.data");
        		return false;
        	}
        	
        	if(this.gfn_isNull(byDtTo)){		
        		this.gfn_getMessage("alert", "validation.message.toDate.no.data");
        		return false;
        	}
        	if(this.gfn_getDiffDay(byDtFr,byDtTo) < 0){
        		this.gfn_getMessage("alert", "validation.message.fromDate.toDate.reConfirm");
        		return false;
        	}else{
        		/*
        		if(this.gfn_getDiffDay(this.div_search.cal_YMD_FR.value,this.div_search.cal_YMD_TO.value) > 31){
        			this.alert('기간을 31일 이내로 선택 하세요');
        			return false;
        		}
        		*/	
        	}
        	
        	var preMonth = this.getTodayStr(0, -3, 0);
        	
        	if(byDtFr < preMonth){
        		this.alert("최근 3개월까지 조회 가능합니다.");
        		return false;
        	}
        	return true;
        }

        this.fn_search = function(){
        		//권한사업장 코드
        		var trplC = this.getTrplCode();
        		
        		var byDtFr = this.gfn_nullToEmpty(this.div_search.cal_by_dt_fr.value);
        		var byDtTo = this.gfn_nullToEmpty(this.div_search.cal_by_dt_to.value);
        		
        		
        		

        		var params =  "BY_DT_FR=" + byDtFr 
        					+ " BY_DT_TO=" + byDtTo
        					+ " TRPL_C=" + trplC;
        					
        					
        		var sSvcID        = "retrievePeriodSum";//통신아이디
        		var sURL          = "svc::/rest/pds/retrievePeriodSum";// 호출할 서버 페이지 주소
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
        		if(svcID == "retrievePeriodSum"){
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
        	
        	var byDtFr = this.gfn_nullToEmpty(this.div_search.cal_by_dt_fr.value);
        	var byDtTo = this.gfn_nullToEmpty(this.div_search.cal_by_dt_to.value);
        	
        	//권한사업장 코드
        	var trplC = this.getTrplCode();
        	var fileName = this.getExcelFileName("납부정보_기간별정보");
        	//권한사업장 코드
        	var trplC = this.getTrplCode();
        	
        	var params =  "BY_DT_FR=" + byDtFr 
        				+ "&BY_DT_TO=" + byDtTo
        				+ "&TRPL_C=" + trplC
        				+ "&fileName=" + fileName;
        				
        	this.web_downExcel.set_url(application.gv_server_url+"rest/excel/pds/downloadExcelPeriodSum?"+params);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_dataM.addEventHandler("onrowposchanged", this.ds_event_priceM_onrowposchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.div_list.Button10.addEventHandler("onclick", this.div_list_Button10_onclick, this);
            this.div_list.grd_master.addEventHandler("oncellclick", this.fn_grid01_search, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1010.xfdl");
        this.loadPreloadList();
       
    };
}
)();
