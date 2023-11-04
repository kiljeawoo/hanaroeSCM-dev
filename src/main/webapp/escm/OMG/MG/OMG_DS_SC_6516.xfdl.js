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
                this.set_name("OMG_DS_SC_6516");
                this.set_titletext("매출조회");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_master", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SL_DT\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"SL_QT\" type=\"STRING\" size=\"256\"/><Column id=\"SL_AM\" type=\"STRING\" size=\"256\"/><Column id=\"SL_WRS_CN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CURRENT_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CURRENT_PAGE\">0</Col><Col id=\"PAGE_SIZE\">0</Col><Col id=\"TOTAL_ROW_COUNT\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_detail", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RN\" type=\"STRING\" size=\"256\"/><Column id=\"SL_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SPY_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"SHRT_BZPLNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"SL_QT\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_SLAM\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_AMT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static87", "absolute", "98.13%", "1", "15", "1195", null, null, this);
            obj.set_taborder("1");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "2.86%", "697", null, "20", "-24.53%", null, this);
            obj.set_taborder("10");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static89", "absolute", "15", "9", null, "21", "76.09%", null, this);
            obj.set_taborder("13");
            obj.set_text("매출조회");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0%", "1", null, "1195", "98.51%", null, this);
            obj.set_taborder("66");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "5", "44", "21", "15", null, this);
            obj.set_taborder("67");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "11", "39", null, "40", "15", null, this);
            obj.set_taborder("70");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "1.94%", "10", null, "21", "84.99%", null, this.div_search);
            obj.set_taborder("102");
            obj.set_text("검색기간");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_to", "absolute", "28.72%", "10", null, "21", "58.86%", null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("120");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static04", "absolute", "27.43%", "10", null, "21", "71.28%", null, this.div_search);
            obj.set_taborder("121");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_from", "absolute", "15.01%", "10", null, "21", "72.57%", null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("122");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Div("div_result", "absolute", "0%", "77", null, null, "15", "2", this);
            obj.set_taborder("71");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_slInqList", "absolute", "11", "20", null, "152", "0", null, this.div_result);
            obj.set_taborder("13");
            obj.set_binddataset("ds_master");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"109\"/><Column size=\"147\"/><Column size=\"151\"/><Column size=\"147\"/><Column size=\"158\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"매출일자\"/><Cell col=\"1\" text=\"공급업체코드\"/><Cell col=\"2\" text=\"상품수\"/><Cell col=\"3\" text=\"매출 수량\"/><Cell col=\"4\" text=\"매출 합계\"/></Band><Band id=\"body\"><Cell text=\"bind:SL_DT\" mask=\"####-##-##\"/><Cell col=\"1\" style=\"align:center middle;\" text=\"bind:NA_TRPL_C\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:SL_WRS_CN\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:SL_QT\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:SL_AM\"/></Band><Band id=\"summary\"><Cell style=\"align:center;\" text=\"합계\"/><Cell col=\"1\"/><Cell col=\"2\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(SL_WRS_CN)&quot;)\"/><Cell col=\"3\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(SL_QT)&quot;)\"/><Cell col=\"4\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(SL_AM)&quot;)\"/></Band></Format></Formats>");
            this.div_result.addChild(obj.name, obj);
            obj = new Button("Button", "absolute", "46.07%", "0", "62", "12", null, null, this.div_result);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_result.addChild(obj.name, obj);
            obj = new Grid("grd_mbApvrqrList00", "absolute", "11", "189", null, null, "0", "32", this.div_result);
            obj.set_taborder("15");
            obj.set_binddataset("ds_detail");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"88\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"175\"/><Column size=\"158\"/><Column size=\"207\"/><Column size=\"96\"/><Column size=\"96\"/><Column size=\"96\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"매출일자\"/><Cell col=\"2\" text=\"공급업체코드\"/><Cell col=\"3\" text=\"사업장코드\"/><Cell col=\"4\" text=\"사업장명\"/><Cell col=\"5\" text=\"상품코드\"/><Cell col=\"6\" text=\"상품명\"/><Cell col=\"7\" text=\"매출수량\"/><Cell col=\"8\" text=\"매입단가\"/><Cell col=\"9\" text=\"매출합계\"/></Band><Band id=\"body\"><Cell text=\"bind:RN\"/><Cell col=\"1\" style=\"align:center middle;\" text=\"bind:SL_DT\" mask=\"####-##-##\"/><Cell col=\"2\" style=\"align:center middle;\" text=\"bind:SPY_NA_TRPL_C\"/><Cell col=\"3\" style=\"align:center middle;\" text=\"bind:NA_BZPLC\"/><Cell col=\"4\" style=\"align:left middle;\" text=\"bind:SHRT_BZPLNM\"/><Cell col=\"5\" style=\"align:center middle;\" text=\"bind:NA_WRS_C\"/><Cell col=\"6\" style=\"align:left middle;\" text=\"bind:WRSNM\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:SL_QT\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:TOT_SLAM\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:TOT_AMT\"/></Band></Format></Formats>");
            this.div_result.addChild(obj.name, obj);
            obj = new Div("div_paging", "absolute", "226", null, "44.42%", "29", null, "3", this.div_result);
            obj.set_taborder("16");
            obj.style.set_align("center middle");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_result.addChild(obj.name, obj);

            obj = new Edit("edt_NA_TRPL_C", "absolute", "24", "513", "17.43%", "21", null, null, this);
            obj.set_taborder("72");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 40, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("70");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_result,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("71");
            		p.set_text("Div02");

            	}
            );
            this.div_result.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("매출조회");

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
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_6516.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_6516.xfdl", function() {
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {   
           this.gfn_setInitForm(obj, e); //공통
           this.div_result.grd_slInqList.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
           this.div_result.grd_mbApvrqrList00.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        }

        this.fn_afterFormOnload = function()
        {
           //페이지 로딩후 실행부분   
           /*초기값세팅*/      
        }

        /*조회*/
        this.btn_search_onclick = function(obj,e)
        {
        	   this.fn_retriveUsrInfo(this.edt_NA_TRPL_C.value,"N");
        }

        /*******************************************************************************
        	TAB호출시 호출되는 함수
        *******************************************************************************/
        this.fn_retriveUsrInfo = function (na_trpl_c,initParam){	
        	
        	this.edt_NA_TRPL_C.set_value(na_trpl_c);	    	
            if(initParam == "Y"){	
        		this.div_search.cal_from.set_value(this.gfn_minusDate(application.gv_today,1));
        		this.div_search.cal_to.set_value(application.gv_today);	
            }
            else{    
        		if(nexacro.toNumber(this.div_search.cal_from.value) > nexacro.toNumber(this.div_search.cal_to.value)){
        			alert("조회시작일이 조회종료일보다 클 수는 없습니다.");
        			return ;
        		}    
        			
        		 if(nexacro.toNumber(this.div_search.cal_from.value) < nexacro.toNumber(this.gfn_minusMonth(String(this.div_search.cal_to.value),1))){
        			alert("조회 기간은 최대 한달입니다.");
        			return ;
        		}
            }
            
        	var sParams = "FROM="+this.gfn_nullToEmpty(this.div_search.cal_from.value)
        				+ " TO="+this.gfn_nullToEmpty(this.div_search.cal_to.value)				
        				+ " NA_TRPL_C="+this.gfn_nullToEmpty(na_trpl_c)				
        				;	
        	var sSvcID        = "retrieveSlInqList";
        	var sURL          = "svc::rest/mg/mbcslt/retrieveSlInqList";		 
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_master=ds_master" ;	
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";	
        	var sTranType     = "S"; // U:저장/삭제, S:조회		
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);  
        }
        /*******************************************************************************
        	master dataset 변경시 호출
        *******************************************************************************/
        this. fn_retrieveSlInqDetailList = function (){
        	
        	var sParams = "SL_DT="+this.gfn_nullToEmpty(this.ds_master.getColumn(this.ds_master.rowposition,"SL_DT"))				
        				+ " NA_TRPL_C="+this.gfn_nullToEmpty(this.ds_master.getColumn(this.ds_master.rowposition,"NA_TRPL_C"))				
        				;
        	
        	var sSvcID        = "retrieveSlInqDetailList";
        	var sURL          = "svc::rest/mg/mbcslt/retrieveSlInqDetailList";		 
        	var sInDatasets   = "ds_pageVO=ds_pageVO";
        	var sOutDatasets  = "ds_detail=ds_detail ds_pageVO=ds_pageVO" ;	
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";	
        	var sTranType     = "S"; // U:저장/삭제, S:조회			
        	trace(sParams);
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);  
        	
        }

        
        this.div_result_Button_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_result);
        }

        this.ds_master_onrowposchanged = function(obj,e)
        {
        	this.fn_paging(1);// 처음조회시 1페이지를 조회한다.
        }

        /*******************************************************************************
        	페이징처리
        *******************************************************************************/
        this.fn_paging = function(vPageNum)
        { 	  	 
        	this.ds_pageVO.clearData();  
        	this.ds_detail.clearData();     //Grid에 Binding된 Dataset명
        	
        	this.ds_pageVO.addRow(); 
        	
        	var vPageSize   = 20;	//Grid에 보여줄 Row수 선택
        	var vTotalCount = 0;	//전체건수. 화면조회후 리턴받아 사용 (구동시 갱신)
        	
         	this.ds_pageVO.setColumn(0,"CURRENT_PAGE",vPageNum); //현재 페이지
         	this.ds_pageVO.setColumn(0,"PAGE_SIZE",vPageSize);
         	this.ds_pageVO.setColumn(0,"TOTAL_ROW_COUNT",vTotalCount);
        	
        	var argumentObj = "";	
        	this.fn_retrieveSlInqDetailList();
        }
           
        /*******************************************************************************
        	콜백메소드
        *******************************************************************************/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "retrieveSlInqList"){			
        	 		if(this.ds_master.rowcount == 0){ 		
        		//		this.gfn_getMessage("alert", "result.message.search.no.exist.data");	 			
        			}		 		
        		}else if(svcID == "retrieveSlInqDetailList"){
        			var current_page = this.ds_pageVO.getColumn(0,"CURRENT_PAGE");
        			var page_size    = this.ds_pageVO.getColumn(0,"PAGE_SIZE");
        			var sTotal    	 = this.ds_pageVO.getColumn(0,"TOTAL_ROW_COUNT");	
        			
        			if(this.ds_detail.rowcount == 0){
        		//		this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        				this.div_result.div_paging.fn_pageSet(0, 0,"div_paging",current_page);
        			} else if(this.ds_detail.rowcount > 0){				
        				this.div_result.div_paging.fn_pageSet(sTotal, page_size,"div_paging",current_page);	
        			}
        		}
        	}	
        }
          
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_master.addEventHandler("onrowposchanged", this.ds_master_onrowposchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.div_result.Button.addEventHandler("onclick", this.div_result_Button_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_6516.xfdl");
        this.loadPreloadList();
       
    };
}
)();
