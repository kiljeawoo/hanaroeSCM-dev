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
                this.set_name("VAN_DS_SC_0921");
                this.set_titletext("기간별 사업장별/상품별 정보 상세");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_detail_store", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PHD_FCLT_C\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj = new Div("div_search", "absolute", "17", "76", null, "43", "17", null, this);
            obj.set_taborder("1");
            obj.set_scrollbars("none");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("sta_searchType00", "absolute", "15", "10", "140", "21", null, null, this.div_search);
            obj.set_taborder("45");
            obj.set_text("사업장코드/사업장명");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_searchType02", "absolute", "260", "10", "300", "21", null, null, this.div_search);
            obj.set_taborder("46");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "250", "10", "15", "21", null, null, this.div_search);
            obj.set_taborder("47");
            obj.set_text("/");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_searchType01", "absolute", "155", "10", "90", "21", null, null, this.div_search);
            obj.set_taborder("48");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "47", "41", "21", "17", null, this);
            obj.set_taborder("3");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web_downExcel", "absolute", "608", "58", "59", "18", null, null, this);
            obj.set_taborder("4");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", null, "32", "50", "15", "17", null, this);
            obj.set_taborder("5");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("10");
            obj.set_text("사업장별/상품별 상세 정보");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "766", "0", "37", "32", null, null, this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "17", "119", null, null, "17", "10", this);
            obj.set_taborder("16");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_main00", "absolute", "0", "40", null, null, "0", "46", this.div_list);
            obj.set_taborder("8");
            obj.set_binddataset("ds_detail_store");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/><Row size=\"28\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"상품코드\"/><Cell col=\"1\" text=\"상품명\"/><Cell col=\"2\" text=\"수량\"/><Cell col=\"3\" text=\"금액(천원)\"/><Cell col=\"4\" text=\"물류기능코드\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:CODE\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:NAME\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:QTY\" mask=\"#,##0\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AMOUNT\" mask=\"#,##0\"/><Cell col=\"4\" text=\"bind:PHD_FCLT_C\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" style=\"align:center;\" text=\"합계\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_page", "absolute", "28.87%", null, "338", "44", null, "0", this.div_list);
            obj.set_taborder("9");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "733", "0", "55", "40", null, null, this.div_list);
            obj.set_taborder("10");
            obj.set_text("40");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "683", "434", "91", "10", null, null, this);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancle", "absolute", "731", "444", "54", "29", null, null, this);
            obj.set_taborder("15");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "683", "473", "91", "17", null, null, this);
            obj.set_taborder("12");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok", "absolute", "675", "444", "54", "29", null, null, this);
            obj.set_taborder("13");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_scrollbars("none");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("16");
            		p.set_text("Div02");
            		p.set_scrollbars("none");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_0921");
            		p.set_titletext("기간별 사업장별/상품별 정보 상세");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_0921.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0921.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e) 
        {
        	this.gfn_setInitForm(obj, e); //공통
        };

        this.fn_afterFormOnload = function() //onload
        {
        	this.div_list.grd_main00.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        }

        this.form_init = function(obj,e)
        {	
        	this.fn_paging(1);// 처음조회시 1페이지를 조회한다.		
        }

        
        //페이징 처리
        this.fn_paging = function(vPageNum)
        {
        	this.ds_pageVO.clearData();  
        	this.ds_detail_store.clearData();     //Grid에 Binding된 Dataset명	
        	
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
        //조회
        this.search = function()
        {	
        	var position = this.parent.dsArg.rowposition;
        	this.div_search.sta_searchType01.set_text(this.parent.dsArg.getColumn(position,'CODE'));
        	this.div_search.sta_searchType02.set_text(this.parent.dsArg.getColumn(position,'NAME'));
        	
        	var json = this.getParamJson(this.components);
        	json.start_date=this.parent.sTartD;
        	json.centercode=this.parent.dsArg.getColumn(position,'CODE');
        	json.phd_c=$.trim(this.parent.dsArg.getColumn(position,'PHD_FCLT_C'));
        	json.TRPL_C=this.parent.pTrpl_c;
        	json.separator=2;
        	var params = this.getParamJsonToString(json);
        	
        	var sSvcID        = "p_search";//통신아이디
        	var sURL          = "svc::rest/pds/stock/Stock/retrievePeriodStoreSum";// 호출할 서버 페이지 주소
        	var sInDatasets   = "ds_pageVO=ds_pageVO";
        	var sOutDatasets  = "ds_detail_store=ds_detail_store ds_pageVO=ds_pageVO ds_dataTotal=ds_dataTotal";
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
        //엑셀
        this.btn_excel_onclick = function(obj,e)
        {
        	var position = this.parent.dsArg.rowposition;
        	var params = "&start_date="+this.parent.sTartD
        				 +"&TRPL_C="+this.parent.pTrpl_c
        				 +"&centercode="+this.div_search.sta_searchType01.text
        				 +"&phd_c="+$.trim(this.parent.dsArg.getColumn(position,'PHD_FCLT_C'))
        				 +"&fileName=기간별 사업장/상품디테일.xls";
        	
        	params = encodeURI(encodeURI(params));
        	excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelPeriodStoreSumDetail?"+params, this);
        	//this.web_downExcel.set_url(application.gv_server_url+"rest/excel/downloadExcelPeriodStoreSumDetail?"+params);
        }

        

        this.btn_ok_onclick = function(obj,e)
        {
        	this.close();
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("oninit", this.form_init, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.Button01.addEventHandler("onclick", this.btn_close_onclick, this);
            this.div_list.addEventHandler("onsize", this.div_list_onsize, this);
            this.btn_cancle.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_ok.addEventHandler("onclick", this.btn_ok_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0921.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
