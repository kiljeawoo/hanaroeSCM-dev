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
                this.set_name("frm_VAN_DS_SC_1071");
                this.set_titletext("수수료 현황 상세");
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
            obj._setContents("<ColumnInfo><Column id=\"ROWNUMB\" type=\"string\" size=\"32\"/><Column id=\"BZPL_NM\" type=\"string\" size=\"32\"/><Column id=\"NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"FEERT\" type=\"string\" size=\"32\"/></ColumnInfo>");
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

            obj = new Dataset("ds_pageVO", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CURRENT_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dataTotal", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"TOTAL_SL_QT\" type=\"string\" size=\"8\"/><Column id=\"TOTAL_TOT_SLAM\" type=\"string\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "15", "29", null, "43", "15", null, this);
            obj.set_taborder("103");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("sta_location", "absolute", "521", "10", "55", "21", null, null, this.div_search);
            obj.set_taborder("48");
            obj.set_text("지역");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_na_rgn_c", "absolute", "576", "10", "151", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("49");
            obj.set_innerdataset("ds_local");
            obj.set_codecolumn("NA_RGN_C");
            obj.set_datacolumn("RGN_CNM");
            obj = new Static("sta_location00", "absolute", "15", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("50");
            obj.set_text("지사코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_location01", "absolute", "227", "10", "67", "21", null, null, this.div_search);
            obj.set_taborder("51");
            obj.set_text("지사명");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_trpl_c", "absolute", "94", "10", "103", "21", null, null, this.div_search);
            obj.set_taborder("52");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_trpl_name", "absolute", "294", "10", "197", "21", null, null, this.div_search);
            obj.set_taborder("53");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
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
            obj = new Grid("grd_master", "absolute", "15", "40", null, null, "0", "63", this.div_list);
            obj.set_taborder("10");
            obj.set_binddataset("ds_dataM");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"300\"/><Column size=\"140\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"사업장코드\"/><Cell col=\"2\" text=\"시업장명\"/><Cell col=\"3\" text=\"수수료(원)\"/></Band><Band id=\"body\"><Cell text=\"bind:ROWNUMB\"/><Cell col=\"1\" text=\"bind:NA_BZPLC\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:BZPL_NM\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:FEERT\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" displaytype=\"number\" style=\"align:center;\" text=\"합계\"/><Cell col=\"3\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_dataTotal.getColumn(0,'TOTAL_FEE')\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "733", "1", "55", "40", null, null, this.div_list);
            obj.set_taborder("13");
            obj.set_text("40");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_page", "absolute", "229", null, "338", "44", null, "19", this.div_list);
            obj.set_taborder("14");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
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
            		p.set_titletext("수수료 현황 상세");

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
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1071.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1071.xfdl", function(exports) {
        /*##################################################################################
         화면명	: 수수료 현황 상세
         화면ID  	: VAN_DS_SC_1071
         작성자 	: hroh
        ####################################################################################*/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        var chkDay;
        /* Form Load */
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj,e);
        }

        /* Form Init*/
        this.fn_afterFormOnload = function() //onload
        {	
        	this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	//지역코드 셋팅
        	this.fn_localList();
        		
        	this.fn_paging(1);// 처음조회시 1페이지를 조회한다.

        }

        /* 지역코드 가져오기*/
        this.fn_localList = function(){
        	
        	var sSvcID        = "retrieveRgnCList";//통신아이디
        	var sURL          = "svc::rest/pds/retrieveRgnCList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_local=ds_dataM";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = "";// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /* Validation Check */
        this.fn_validationCheck = function(){
        	
        	return true;
        }

        
        /* Search */
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_paging(1);// 처음조회시 1페이지를 조회한다.
        }

        this.fn_search = function(){
        	if(this.fn_validationCheck()){
        		this.ds_dataM.clearData();
        		
        		var BY_DT = this.getOwnerFrame().BY_DT;//매입월
        		var BRO_C = this.getOwnerFrame().BRO_C;//지사코드
        		var CLNTNM = this.getOwnerFrame().CLNTNM;//지사명

        		this.div_search.edt_trpl_c.set_value(BRO_C);
        		this.div_search.edt_trpl_name.set_value(CLNTNM);
        		
        		var NA_RGN_C = this.gfn_nullToEmpty(this.div_search.cbo_na_rgn_c.value); //지역코드
        		
        		var params =  "BY_DT=" + BY_DT 					
        					+ " BRO_C=" + BRO_C
        					+ " NA_RGN_C=" + NA_RGN_C;
        				
        		//trace(">>>>>>> params : " +  params);
        		
        		var sSvcID        = "retrieveFeeCurrentDetailList";//통신아이디
        		var sURL          = "svc::/rest/pds/recadv/retrieveFeeCurrentDetailList";// 호출할 서버 페이지 주소		
        		var sInDatasets   = "ds_pageVO=ds_pageVO";//보내는데이터셋
        		var sOutDatasets  = "ds_dataM=DATASET ds_pageVO=ds_pageVO ds_dataTotal=ds_dataTotal";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = params;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        			
        	}
        	
        	
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "retrieveFeeCurrentDetailList"){			
        			
        			if(this.ds_dataM.rowcount > 0){
        				var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        				var sPagesize = this.ds_pageVO.getColumn(0, "PAGE_SIZE");			

        				this.div_list.div_page.fn_pageSet(sTotal, sPagesize,"grd_master,div_page",lsNowPage);
        			
        			}else{
        				
        				this.div_list.div_page.fn_pageSet(0, 0,"grd_master,div_page",lsNowPage);//페이징 설정
        			}
        		}	
        		
        		if(svcID == "retrieveRgnCList") {
        			//지역코드
        			this.div_search.cbo_na_rgn_c.set_index(0);		
        		}
        	}
        }
        this.div_list_btn_divResize_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        /* 엑셀 버튼 클릭시*/
        this.btn_excel_onclick = function(obj,e)
        {

        	if(!this.fn_validationCheck()) return;
        	
        	var BY_DT = this.getOwnerFrame().BY_DT;//매입월
        	var BRO_C = this.getOwnerFrame().BRO_C;//지사코드
        		
        	var NA_RGN_C = this.gfn_nullToEmpty(this.div_search.cbo_na_rgn_c.value); //지역코드
        	
        	var title = '납품정보_수수료현황_상세';
        	title = title.replace(/ /gi, '');
        	var fileName = title + "_" + this.getDate() + ".xls";
        	
        	var params =  "BY_DT=" + BY_DT 					
        				+ "&BRO_C=" + BRO_C
        				+ "&NA_RGN_C=" + NA_RGN_C
        				+ "&fileName=" + fileName;
        			
        	//trace(">>>>>>> params : " +  params);	
        	
        	params = encodeURI(encodeURI(params));
        	
        	//this.web_downExcel.set_url(application.gv_server_url+"rest/excel/pds/recadv/retrieveFeeCurrentDetailExcel?"+params);
        	excelDownHandler(application.gv_server_url+"rest/excel/pds/recadv/retrieveFeeCurrentDetailExcel?"+params, this);
        }

        this.div_list_grd_master_onheadclick = function(obj,e)
        {
        	if(e.cell != 3){ //정렬기능 적용할 컬럼 지정
        		this.gfn_gridSort(obj,e);
        	}
        }

        /*-----------------------------------------------------------------------------------------*/
        // 페이징처리
        /*-----------------------------------------------------------------------------------------*/
        this.fn_paging = function(vPageNum)
        { 	
        	this.ds_pageVO.clearData();  
        	this.ds_dataM.clearData();     //Grid에 Binding된 Dataset명	
        	
        	this.ds_pageVO.addRow(); 
        	
        	var vPageSize   = 10; 	//Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
        	var vTotalCount = 1; 	//전체건수. 화면조회후 리턴받아 사용
         	this.ds_pageVO.setColumn(0,"CURRENT_PAGE",vPageNum); //현재 페이지
         	this.ds_pageVO.setColumn(0,"PAGE_SIZE",vPageSize);
         	this.ds_pageVO.setColumn(0,"TOTAL_ROW_COUNT",vTotalCount);
        	 
        	var argumentObj = "";
        	
        	lsNowPage = vPageNum;//현재페이지 설정 
        		
        	this.fn_search();
         
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_dataM.addEventHandler("onrowposchanged", this.ds_event_priceM_onrowposchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.div_search.sta_location.addEventHandler("onclick", this.div_search_sta_location_onclick, this);
            this.div_search.cbo_na_rgn_c.addEventHandler("onitemchanged", this.btnClick, this);
            this.div_search.sta_location00.addEventHandler("onclick", this.div_search_sta_location_onclick, this);
            this.div_search.sta_location01.addEventHandler("onclick", this.div_search_sta_location_onclick, this);
            this.div_list.btn_divResize.addEventHandler("onclick", this.div_list_btn_divResize_onclick, this);
            this.div_list.grd_master.addEventHandler("oncellclick", this.fn_grid01_search, this);
            this.div_list.grd_master.addEventHandler("onheadclick", this.div_list_grd_master_onheadclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1071.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
