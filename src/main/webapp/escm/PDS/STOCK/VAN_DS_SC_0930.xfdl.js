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
                this.set_name("VAN_DS_SC_0930");
                this.set_titletext("기간별 상품별/사업장별 정보");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_daily_store", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT\" type=\"INT\" size=\"256\"/><Column id=\"QTY\" type=\"INT\" size=\"256\"/><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CURRENT_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TOTAL_ROW_COUNT\">0</Col><Col id=\"PAGE_SIZE\">10</Col><Col id=\"CURRENT_PAGE\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dataTotal", this);
            obj._setContents("<ColumnInfo><Column id=\"TOTAL_SL_QT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_TOT_SLAM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("0");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", "397", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "43", "15", null, this);
            obj.set_taborder("3");
            obj.set_scrollbars("none");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("sta_searchType", "absolute", "15", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("41");
            obj.set_text("조회일");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "202", "10", "10", "21", null, null, this.div_search);
            obj.set_taborder("44");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_start_date", "absolute", "94", "10", "102", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("45");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj = new Calendar("cal_end_date", "absolute", "218", "10", "102", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("46");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj = new Static("sta_start_date", "absolute", "375", "10", "71", "21", null, null, this.div_search);
            obj.set_taborder("47");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_end_date", "absolute", "446", "10", "71", "21", null, null, this.div_search);
            obj.set_taborder("48");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "105", null, this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "71", null, null, "15", "0", this);
            obj.set_taborder("5");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_main00", "absolute", "0", "42", null, null, "0", "44", this.div_list);
            obj.set_taborder("3");
            obj.set_binddataset("ds_daily_store");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/><Row size=\"28\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"상품코드\"/><Cell col=\"1\" text=\"상품명\"/><Cell col=\"2\" text=\"재고수량\"/><Cell col=\"3\" text=\"재고금액\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:CODE\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:NAME\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:QTY\" mask=\"#,##0\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AMOUNT\" mask=\"#,##0\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" style=\"align:center;\" text=\"합계\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"expr:comp.parent.parent.ds_dataTotal.getColumn(0,'TOTAL_SL_QT')\" mask=\"#,##0\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('AMOUNT');\" mask=\"#,##0\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_toggle00", "absolute", "363", "0", null, "12", "362", null, this.div_list);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_page", "absolute", "28.55%", null, "338", "44", null, "0", this.div_list);
            obj.set_taborder("5");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list.addChild(obj.name, obj);
            obj = new WebBrowser("web_downExcelM", "absolute", "78.3%", "10", null, "20", "16.88%", null, this.div_list);
            obj.set_taborder("6");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);

            obj = new Button("btn_search00", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.set_scrollbars("none");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.set_text("Div02");
            		p.set_scrollbars("none");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_0930");
            		p.set_titletext("기간별 상품별/사업장별 정보");

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
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_0930.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0930.xfdl", function() {
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e) 
        {
        	this.gfn_setInitForm(obj, e); //공통
        };

        this.fn_afterFormOnload = function() //onload
        {
        	// 초기 날짜를 입력
        	var initmonth = this.gfn_minusDate(this.gfn_today('yyyyMMdd'),7); // 해당 PC의 오늘 날짜 + 01
        	var initdate = this.gfn_today('yyyyMMdd');
        	this.div_search.cal_start_date.set_value(initmonth);
        	this.div_search.cal_end_date.set_value(initdate);
        	this.div_list.grd_main00.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        }
        //조회버튼
        this.btn_search00_onclick = function(obj,e)
        {
        	this.fn_paging(1); //처음 조회 시 페이지를 확인한다.
        }

        //페이징 처리
        this.fn_paging = function(vPageNum)
        {
        	this.ds_pageVO.clearData();  
        	this.ds_daily_store.clearData();     //Grid에 Binding된 Dataset명	
        	
        	this.ds_pageVO.addRow(); 
        	
        	var vPageSize   = 10; 	//Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
        	var vTotalCount = 1; 	//전체건수. 화면조회후 리턴받아 사용
         	this.ds_pageVO.setColumn(0,"CURRENT_PAGE",vPageNum); //현재 페이지
         	this.ds_pageVO.setColumn(0,"PAGE_SIZE",vPageSize);
         	this.ds_pageVO.setColumn(0,"TOTAL_ROW_COUNT",vTotalCount);
        	 
        	var argumentObj = "";
        	
        	lsNowPage = vPageNum;//현재페이지 설정 
        	
        	this.search();
        }

        /* 페이지 숫자 위치 설정*/
        this.div_list_onsize = function(obj,e)
        {	
        	var nLeft = (e.cx/2)-(this.div_list.div_page.width/2);
        	this.div_list.div_page.set_left(nLeft);
        }

        this.search = function()
        {
        	// 날짜 유무 체크
        	if(this.gfn_getDiffDay(this.div_search.cal_start_date.value,this.div_search.cal_end_date.value) < 0){
        		this.alert(this.gfn_getTextMessage('validation.message.fromDate.toDate.reConfirm'));
        		return false;
        	}else{
        		if(this.gfn_getDiffDay(this.div_search.cal_start_date.value,this.div_search.cal_end_date.value) > 31){
        			this.alert(this.gfn_getTextMessage('validation.message.selectDateIn31Day'));
        			return false;
        		}
        	}
        	var position = this.ds_daily_store.rowposition;
        	var json = this.getParamJson(this.components);
        	json.TRPL_C=this.getTrplCode(); // (콤보박스,체크박스)
        	json.start_date=this.div_search.cal_start_date.value;
        	json.end_date=this.div_search.cal_end_date.value;
        	json.centercode=this.ds_daily_store.getColumn(position,'CODE');
        	json.separator=1;
        	var params = this.getParamJsonToString(json);
        	
        	this.div_search.sta_start_date.set_text(this.div_search.cal_start_date.value);
        	this.div_search.sta_end_date.set_text(this.div_search.cal_end_date.value);
        					
        	var sSvcID        = "p_search";//통신아이디
        	var sURL          = "svc::rest/pds/stock/Stock/retrievePeriodSkuSum";// 호출할 서버 페이지 주소
        	var sInDatasets   = "ds_pageVO=ds_pageVO";
        	var sOutDatasets  = "ds_daily_store=ds_daily_store ds_pageVO=ds_pageVO ds_dataTotal=ds_dataTotal";
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType = "U"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);

        }

        this.fn_callback = function(svcID,nCD,sMSG)
        {
        	if(nCD < 0)
        	{
        		this.gfn_getMessage("alert", sMSG);
        		return;
        	}else{
        		//페이징 처리 보고
        		if(svcID == "p_search"){
        			this.div_list.grd_main00.setCellProperty("Summ",1,"text",this.ds_dataTotal.getColumn(0,"TOTAL_SL_QT"));
        			this.div_list.grd_main00.setCellProperty("Summ",2,"text",this.ds_dataTotal.getColumn(0,"TOTAL_TOT_SLAM"));
        			
        			var p_sum = 0;
        			if(this.div_list.grd_main00.rowcount > 0){
        				var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        				var sPagesize = this.ds_pageVO.getColumn(0, "PAGE_SIZE");
        				
        				this.div_list.div_page.fn_pageSet(sTotal, sPagesize,"grd_main00,div_page",lsNowPage);

        				p_sum = 100;
        				//합계대비의 합계  100으로 설정
        				this.div_list.grd_main00.setCellProperty("Summ",3,"text",p_sum);
        				
        				//현재페이지							
        				var sCurrentPage = this.ds_pageVO.getColumn(0, "CURRENT_PAGE")
        			}else{
        				this.div_list.div_page.fn_pageSet(0, 0,"grd_main00,div_page",lsNowPage);//페이징 설정				
        				
        				this.div_list.grd_main00.setCellProperty("Summ",1,"text",0);
        				this.div_list.grd_main00.setCellProperty("Summ",2,"text",0);
        				this.div_list.grd_main00.setCellProperty("Summ",3,"text",0);
        				
        				this.div_list.grd_main00.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        			}
        		}
        	}
        }

        this.div_list_btn_toggle00_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        this.div_list_grd_main00_oncellclick = function(obj,e)
        {
        	var popTrpl_c = this.getTrplCode();	//권한사업장
        	
        	var oArg = {paramMode:"U", pTrpl_c:popTrpl_c, dsArg:this.ds_daily_store, sTartD:this.div_search.sta_start_date.text, eNdD:this.div_search.sta_end_date.text };
        	var sOption = "autosize=true, titleText=false";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("detailstock","PDS.STOCK::VAN_DS_SC_0931.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	trace('ID : '+strId);
        }

        //엑셀 다운로드
        this.btn_excel_onclick = function(obj,e)
        {
        	var params = "TRPL_C="+this.getTrplCode()
        				 +"&start_date="+this.div_search.cal_start_date.value
        				 +"&end_date="+this.div_search.cal_end_date.value
        				 +"&fileName=기간별 상품/사업장.xls";
        				 
        	params = encodeURI(encodeURI(params));
        	excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelPeriodSkuSum?"+params, this);
        	//this.div_list.web_downExcelM.set_url(application.gv_server_url+"rest/excel/downloadExcelPeriodSkuSum?"+params);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("onsize", this.div_list_onsize, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.div_list.grd_main00.addEventHandler("oncellclick", this.div_list_grd_main00_oncellclick, this);
            this.div_list.btn_toggle00.addEventHandler("onclick", this.div_list_btn_toggle00_onclick, this);
            this.btn_search00.addEventHandler("onclick", this.btn_search00_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0930.xfdl");
        this.loadPreloadList();
       
    };
}
)();
