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
                this.set_name("OMG_DS_SC_6810");
                this.set_titletext("로그인 이력 조회");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_result", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LGIN_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LGIN_IPADR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_param", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ENT_PRG_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_excel", this);
            obj._setContents("<ColumnInfo><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LGIN_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LGIN_IPADR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_result", "absolute", "0", "120", null, null, "15", "0", this);
            obj.set_taborder("4");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_mbApvrqrList00", "absolute", "1.4%", "56", null, null, "-0.38%", "30", this.div_result);
            obj.set_taborder("12");
            obj.set_binddataset("ds_excel");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회된 건수가 없습니다.");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"128\"/><Column size=\"150\"/><Column size=\"185\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"회원ID\"/><Cell col=\"1\" text=\"로그인 날짜\"/><Cell col=\"2\" text=\"로그인 IP\"/></Band><Band id=\"body\"><Cell style=\"align:center middle;\" text=\"bind:MB_ID\"/><Cell col=\"1\" style=\"align:center middle;\" text=\"bind:LGIN_DTM\" mask=\"####-##-##  ##:##:####\"/><Cell col=\"2\" style=\"align:center middle;\" text=\"bind:LGIN_IPADR\"/></Band></Format></Formats>");
            this.div_result.addChild(obj.name, obj);
            obj = new Grid("grd_mbApvrqrList", "absolute", "0.25%", "40", null, null, "0.51%", "46", this.div_result);
            obj.set_taborder("9");
            obj.set_binddataset("ds_result");
            obj.set_autosizingtype("none");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회된 건수가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"128\"/><Column size=\"163\"/><Column size=\"185\"/><Column size=\"146\"/><Column size=\"122\"/><Column size=\"124\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"회원ID\"/><Cell col=\"1\" text=\"로그인 날짜\"/><Cell col=\"2\" text=\"로그인 IP\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/></Band><Band id=\"body\"><Cell style=\"align:center middle;\" text=\"bind:MB_ID\"/><Cell col=\"1\" style=\"align:center middle;\" text=\"bind:LGIN_DTM\" mask=\"####-##-##  ##:##:####\"/><Cell col=\"2\" style=\"align:center middle;\" text=\"bind:LGIN_IPADR\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/></Band></Format></Formats>");
            this.div_result.addChild(obj.name, obj);
            obj = new Button("Button75", "absolute", "36.8%", "0", null, "12", "36.68%", null, this.div_result);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_result.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "91.91%", "120", null, "41", "2.49%", null, this);
            obj.set_taborder("0");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "98.38%", "0", null, "490", "0.12%", null, this);
            obj.set_taborder("6");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0%", "0", null, "21", "56.13%", null, this);
            obj.set_taborder("7");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "47", "21", "15", null, this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0%", "29", null, "91", "1.87%", null, this);
            obj.set_taborder("11");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "20", null, "21", "679", null, this.div_search);
            obj.set_taborder("12");
            obj.set_text("회원ID");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_MB_ID", "absolute", "106", "20", "120", "21", null, null, this.div_search);
            obj.set_taborder("18");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "15", "46", null, "21", "679", null, this.div_search);
            obj.set_taborder("27");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "256", "46", null, "21", "438", null, this.div_search);
            obj.set_taborder("32");
            obj.set_text("거래처코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_CLNTNM", "absolute", "106", "46", "120", "21", null, null, this.div_search);
            obj.set_taborder("41");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_NA_TRPL_C", "absolute", "347", "46", "120", "21", null, null, this.div_search);
            obj.set_taborder("42");
            obj.set_inputtype("number");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "256", "20", null, "21", "438", null, this.div_search);
            obj.set_taborder("43");
            obj.set_text("기준 월");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("cal_ym", "absolute", "348", "49", "119", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_dragscrolltype("both");
            obj.set_url("common::calendarMonth.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "68", null, this);
            obj.set_taborder("14");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_result,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_text("Div02");

            	}
            );
            this.div_result.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 91, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("11");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("로그인 이력 조회");

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
            this._addPreloadList("fdl", "common::calendarMonth.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_6810.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_6810.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {   
           this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {  
           /*조회 호출*/
        /*   this.btn_search.click();*/
         
        }
         
         
         /*조회*/
        this.btn_search_onclick = function(obj,e)
        {	
        	

        	if(this.gfn_isNull(this.div_search.edt_NA_TRPL_C.value)){
        		alert("거래처 코드를 입력하세요.");			
        		return false;
        	}

        	this.fn_search();// 처음조회시 1페이지를 조회한다.	

        }

        
        this.fn_search = function(vPageNum)
        { 	  
        	var calcal_ym = this.gfn_nullToEmpty(this.cal_ym._getValue()) ;

        	var sParam 		  =  "mb_id="			+this.gfn_nullToEmpty(this.div_search.edt_MB_ID.value) 
        						+ " cal_ym="		+calcal_ym
        						+ " clntnm="		+this.gfn_nullToEmpty(this.div_search.edt_CLNTNM.value) 
        						+ " na_trpl_c="		+this.gfn_nullToEmpty(this.div_search.edt_NA_TRPL_C.value)
        						;
        					
        	var sSvcID        = "loginlist";
        	var sURL          = "svc::rest/mg/login/loginrecordList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_result=ds_result";	
        	var sArgument     = sParam;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        
        /*팝업호출확인하기*/
        this.fn_popupAfter = function(strId,strVal)
        {	
        	this.btn_search.click();  
        }

        /*콜백메소드*/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{	
        		if(svcID == "loginlist"){	

        			if(this.ds_result.rowcount == 0){ 

        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");				
        			}else if(this.ds_result.rowcount > 0){
        				
        			}
        		}if(svcID == "excelloginlist"){
        		
        			if(this.ds_excel.rowcount == 0){
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");	
        			}
        			else if(this.ds_excel.rowcount > 0){
        				var today = this.gfn_today("yyyyMMdd");
        				
        				this.exportObj = new ExcelExportObject("Export00", this);
        				this.exportObj.addEventHandler("onsuccess" , this.fn_excelDownload_onsuccess , this);
        				this.exportObj.addEventHandler("onerror", this.fn_excelDownload_onerror, this);
        				
        				this.exportObj.set_exportfilename("LoginrecordList_" + today);
        				this.exportObj.set_exporturl(application.gv_server_url + "XExportImport");
        				this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.div_result.grd_mbApvrqrList00, "Sheet1!A1");
        				this.exportObj.exportData();
        			}
        			
        		}
        	}
        }
         

        /*엑셀 출력*/
        this.btn_excel_onclick = function(obj,e)
        {
        	if(this.gfn_isNull(this.div_search.edt_NA_TRPL_C.value)){
        		alert("거래처 코드를 입력하세요.");			
        	}

        	var calcal_ym = this.gfn_nullToEmpty(this.cal_ym._getValue()) ;

        	var sParam 		  =  "mb_id="			+this.gfn_nullToEmpty(this.div_search.edt_MB_ID.value) 
        						+ " cal_ym="		+calcal_ym
        						+ " clntnm="		+this.gfn_nullToEmpty(this.div_search.edt_CLNTNM.value) 
        						+ " na_trpl_c="		+this.gfn_nullToEmpty(this.div_search.edt_NA_TRPL_C.value)
        						;
        					
        	var sSvcID        = "excelloginlist";
        	var sURL          = "svc::rest/mg/login/ExcelloginrecordList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_excel=ds_excel";	
        	var sArgument     = sParam;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
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
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_result.grd_mbApvrqrList00.addEventHandler("oncellclick", this.div_result_grd_mbApvrqrList_oncellclick, this);
            this.div_result.grd_mbApvrqrList.addEventHandler("oncellclick", this.div_result_grd_mbApvrqrList_oncellclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_6810.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
