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
                this.set_name("frm_VAN_DS_SC_1991");
                this.set_titletext("주별 카테고리판매정보");
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
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_SCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_DTCF_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_SCLFNM\" type=\"string\" size=\"32\"/><Column id=\"WRS_DTCFNM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"SL_QT\" type=\"float\" size=\"8\"/><Column id=\"SL_SKU_CNT\" type=\"float\" size=\"8\"/><Column id=\"REG_SKU_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_date", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "43", "15", null, this);
            obj.set_taborder("103");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "15", "10", "67", "21", null, null, this.div_search);
            obj.set_taborder("12");
            obj.set_text("조회월");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_date", "absolute", "77", "10", "200", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("46");
            obj.set_innerdataset("@ds_date");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj = new Static("Static00", "absolute", "307", "10", null, "21", "15.65%", null, this.div_search);
            obj.set_taborder("47");
            obj.set_text("※ 일주차는 월요일부터 일요일까지 입니다. ");
            obj.set_cssclass("sta_WFSA_Label");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"124\"/><Column size=\"134\"/><Column size=\"108\"/><Column size=\"112\"/><Column size=\"131\"/><Column size=\"76\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/><Row size=\"28\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"소분류명\"/><Cell col=\"1\" text=\"세분류명\"/><Cell col=\"2\" text=\"판매수량\"/><Cell col=\"3\" text=\"총SKU수\"/><Cell col=\"4\" text=\"등록SKU수\"/><Cell col=\"5\" text=\"다운로드\"/></Band><Band id=\"body\"><Cell text=\"bind:WRS_SCLFNM\"/><Cell col=\"1\" text=\"bind:WRS_DTCFNM\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SL_QT\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SL_SKU_CNT\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:REG_SKU_CNT\"/><Cell col=\"5\" displaytype=\"button\" style=\"align:CENTER;\" text=\"엑셀\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" displaytype=\"number\" expr=\"expr:dataset.getSum('SL_QT');\" mask=\"###,##0\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('SL_SKU_CNT');\" mask=\"###,##0\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('REG_SKU_CNT');\" mask=\"###,##0\"/><Cell col=\"5\" displaytype=\"number\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "733", "1", "55", "40", null, null, this.div_list);
            obj.set_taborder("13");
            obj.set_text("40");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_dateInfo", "absolute", null, "20", "200", "20", "5", null, this.div_list);
            obj.set_taborder("14");
            obj.style.set_align("right middle");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "60.91%", "17", null, "21", "-1.52%", null, this.div_list);
            obj.set_taborder("15");
            obj.set_text("각 행클릭시 등록SKU 세부내역이 팝업창으로 표시됩니다. ");
            obj.set_cssclass("sta_WFSA_Label");
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

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "116", null, this);
            obj.set_taborder("112");
            obj.set_text("Div00");
            obj.set_url("common::AuthorityWorkplace.xfdl");
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
            		p.set_titletext("주별 카테고리판매정보");

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
        this.addIncludeScript("VAN_DS_SC_1991.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1991.xfdl", function() {
        /*##################################################################################
         화면명	: 일자별정보
         화면ID  	: VAN_DS_SC_0800
         작성자 	: hroh
        ####################################################################################*/
        //include "lib::comLib.xjs";

        var chkDay;
        /* Form Load */
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj,e);
        	this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        }

        /* Form Init*/
        this.fn_afterFormOnload = function() //onload
        {	
        	///페이지 로딩후 실행부분
        	var toDay = this.gfn_today("yyyyMMdd");
        	//3년전
        	chkDay = Number(this.gfn_minusMonth(toDay, 36).substr(0, 6)); 
        	
        	trace("toDay---->"+toDay);
        	trace("chkDay---->"+chkDay);
        	
        	var initdate = this.gfn_today('yyyyMM');
        	
        	this.set_cbo_date();
        	
        	this.authChkDisable(); // 권한사업장 비활성화 체크
          
        }

        this.set_cbo_date = function(){
            var param = "" ;
        	var sSvcID        = "selectWeekList";                                              //통신아이디
        	var sURL          = "svc::rest/analysis/market/selectWeekList" ;  // 호출할 서버 페이지 주소
        	var sInDatasets   = "";             //보내는데이터셋
        	var sOutDatasets  = "ds_date=ds_date";	        //화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;          // 파라미터
        	var sCallbackFunc = "fn_callBack";  //콜백
        	var tranType = "S";                 // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);

        }
        /* Validation Check */
        this.fn_validationCheck = function(){

        
        	return true;
        }

        
        /* Search */
        this.btn_search_onclick = function(obj,e)
        {

        	if(this.fn_validationCheck()){
        	
        		this.ds_dataM.clearData();

        		var wk = this.div_search.cbo_date.value;
        		
        		//거래처코드
        		var trplC = this.getTrplCode();
        		
        		var params =  "SL_WK=" + wk 
        					+ " TRPL_C=" + trplC;					
        					
        		trace(">>>>>>> params : " +  params);
        					
        		var sSvcID        = "retrieveCatSalesMon";//통신아이디
        		var sURL          = "svc::rest/analysis/market/retrieveCatSalesWeek";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_dataM=ds_dataM";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
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
        		if(svcID == "selectWeekList"){			
                    // alert('callback : ' + svcID);
                    this.div_search.cbo_date.set_index(0);
        		}
        		

        	}
        }
        this.div_list_btn_divResize_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        this.btn_excel_onclick = function(obj,e)
        {
        	trace("application.gv_userAuth "  + application.gv_userAuth);
        	
        	if (application.gv_userAuth.indexOf("1") < 0) { // 빌링권한이 없는 경우
        		alert("빌링권한이 있는 사용자만 사용할 수 있습니다.");
        		return;
        	}

        	var trplC = this.getTrplCode(); //거래처코드
        	var wk = this.div_search.cbo_date.value;
        	
        	var title = this.getScreenName();
        	var fileName = '주별카테고리판매정보_' +  wk + '.xlsx';

        	var params =  "SL_WK=" + wk 
        	            + "&title=" + "주별카테고리판매정보"
        				+ "&TRPL_C=" + trplC
        				+ "&LCLC=" + ''
        				+ "&MCLC=" + ''
        				+ "&LCLC=" + ''
        				+ "&fileName=" + fileName;	

        	trace(">>>>>>> params : " +  params);
        	
        	params = encodeURI(encodeURI(params));

        	excelDownHandler(application.gv_server_url+"rest/excel/analysis/market/downloadCatSalesWeekExcel?"+params, this);
        }

        this.div_list_grd_master_onheadclick = function(obj,e)
        {
        	if(e.cell != 3){ //정렬기능 적용할 컬럼 지정
        		this.gfn_gridSort(obj,e);
        	}
        }

        this.form_init = function(obj,e)
        {
        	
        }

        // 세분류별 엑셀 다운로드
        this.div_list_grd_master_oncelldblclick = function(obj,e)
        {

        }

        this.div_list_grd_master_oncellclick = function(obj,e)
        {
            trace('currentcol' + obj.currentcol);
            
        	 // 엑셀 클릭시만 실행
        	
        	var WRS_DTCFNM = ''; 
        	var row = this.ds_dataM.rowposition;

        	var trplC = this.getTrplCode(); //거래처코드
        	var wk = this.div_search.cbo_date.value;
        	
        	var title = this.getScreenName();
        	trace(  this.ds_dataM.getColumn(row, 'WRS_DTCFNM'));
        	
            if(obj.currentcol == 5 ) {
            
        		trace("application.gv_userAuth "  + application.gv_userAuth);
        		
        		if (application.gv_userAuth.indexOf("1") < 0) { // 빌링권한이 없는 경우
        			alert("빌링권한이 있는 사용자만 사용할 수 있습니다.");
        			return;
        		}

        		var fileName = '주별카테고리판매정보_세분류별_' +  this.ds_dataM.getColumn(row, 'WRS_DTCFNM') + wk + '.xlsx';

        		var params =  "SL_WK=" + wk 
        					+ "&title=" + "주별카테고리판매정보"
        					+ "&TRPL_C=" + trplC
        					+ "&LCLC=" + this.ds_dataM.getColumn(row, 'NA_WRS_LCLC') 
        					+ "&MCLC=" + this.ds_dataM.getColumn(row, 'NA_WRS_MCLC') 
        					+ "&SCLC=" + this.ds_dataM.getColumn(row, 'NA_WRS_SCLC') 
        					+ "&DTCF_C=" + this.ds_dataM.getColumn(row, 'NA_WRS_DTCF_C') 
        					+ "&fileName=" + fileName;	

        		trace(">>>>>>> params : " +  params);

        		params = encodeURI(encodeURI(params));

        		excelDownHandler(application.gv_server_url+"rest/excel/analysis/market/downloadCatSalesWeekExcel?"+params, this);
        	}else   {  // 기타 칼럼클릭시 카테고리 내 등록관심상품 조히 
        	
        	     this.div_search_btn_popup00_onclick(true);
        	}
        }

        //상품정보 팝업 조회
        this.div_search_btn_popup00_onclick = function(params)
        {
        	var row = this.ds_dataM.rowposition;
        	
        	if(params == true){	

        	}
        	
        	var param = {
        				autoType:params,
        				LCLC   : this.ds_dataM.getColumn(row, 'NA_WRS_LCLC')   ,
        				MCLC   : this.ds_dataM.getColumn(row, 'NA_WRS_MCLC')   ,
        				SCLC   : this.ds_dataM.getColumn(row, 'NA_WRS_SCLC')   ,
        				DTCF_C : this.ds_dataM.getColumn(row, 'NA_WRS_DTCF_C')
        	};
        	

        	var oArg = {dsArg:this.Dataset00, autoPop:param};
        	var sOption = "autosize=true, titleText=false";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("wrs_c","ANALYSIS.MARKET::POPUP_CLS_INTE_WRS.xfdl",oArg,sOption,sPopupCallBack);	
        }
        this.div_search_Static00_onclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_dataM.addEventHandler("onrowposchanged", this.ds_event_priceM_onrowposchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("oninit", this.form_init, this);
            this.div_search.Static00.addEventHandler("onclick", this.div_search_Static00_onclick, this);
            this.div_list.btn_divResize.addEventHandler("onclick", this.div_list_btn_divResize_onclick, this);
            this.div_list.grd_master.addEventHandler("onheadclick", this.div_list_grd_master_onheadclick, this);
            this.div_list.grd_master.addEventHandler("oncellclick", this.div_list_grd_master_oncellclick, this);
            this.div_list.Static05.addEventHandler("onclick", this.div_list_Static05_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1991.xfdl");
        this.loadPreloadList();
       
    };
}
)();
