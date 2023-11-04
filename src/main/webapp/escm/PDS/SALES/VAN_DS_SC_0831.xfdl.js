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
                this.set_name("frm_van_ds_sc_0821");
                this.set_titletext("기간별 상품별/사업장별 - 상세");
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
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_C\" type=\"string\" size=\"32\"/><Column id=\"WRSNM\" type=\"string\" size=\"32\"/><Column id=\"SL_QT\" type=\"string\" size=\"32\"/><Column id=\"TOT_SLAM\" type=\"string\" size=\"32\"/><Column id=\"SHARE_SLAM\" type=\"float\" size=\"8\"/></ColumnInfo>");
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


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "15", "29", null, "43", "15", null, this);
            obj.set_taborder("114");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "15", "10", "127", "21", null, null, this.div_search);
            obj.set_taborder("0");
            obj.set_text("상품코드/상품명");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sic_trplCN", "absolute", "142", "10", "444", "21", null, null, this.div_search);
            obj.set_taborder("1");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_location", "absolute", "449", "10", "55", "21", null, null, this.div_search);
            obj.set_taborder("2");
            obj.set_text("지역");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_na_rgn_c", "absolute", "504", "10", "151", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_local");
            obj.set_codecolumn("NA_RGN_C");
            obj.set_datacolumn("RGN_CNM");

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

            obj = new Static("Static05", "absolute", "788", "0", "15", "699", null, null, this);
            obj.set_taborder("58");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
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

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("110");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "135", "62", "103", "10", null, null, this);
            obj.set_taborder("112");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "71", "788", null, null, "0", this);
            obj.set_taborder("111");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_master", "absolute", "15", "41", null, null, "0", "43", this.div_list);
            obj.set_taborder("38");
            obj.set_binddataset("ds_dataM");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"117\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"187\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"사업장코드\"/><Cell col=\"1\" text=\"사업장명\"/><Cell col=\"2\" text=\"수량\"/><Cell col=\"3\" text=\"점유율(%)\"/></Band><Band id=\"body\"><Cell text=\"bind:NA_BZPLC\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:CLNTNM\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SL_QT\" mask=\"###,##0\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SHARE_SLAM\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" style=\"align:center;\" text=\"합   계\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"expr:comp.parent.parent.ds_dataTotal.getColumn(0,'TOTAL_SL_QT')\" mask=\"###,##0\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" mask=\"###,##0\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "733", "1", "55", "40", null, null, this.div_list);
            obj.set_taborder("39");
            obj.set_text("40");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "732", "407", "55", "30", null, null, this.div_list);
            obj.set_taborder("40");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "697", "489", "91", "17", null, null, this.div_list);
            obj.set_taborder("58");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "697", "450", "91", "10", null, null, this.div_list);
            obj.set_taborder("59");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_divResize", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("60");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_page", "absolute", "229", null, "338", "44", null, "-1", this.div_list);
            obj.set_taborder("62");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_dateInfo", "absolute", null, "20", "200", "20", "5", null, this.div_list);
            obj.set_taborder("63");
            obj.style.set_align("right middle");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);

            obj = new WebBrowser("web_downExcel", "absolute", "556", "4", "41", "17", null, null, this);
            obj.set_taborder("115");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("116");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("114");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 978, 503, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("111");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("기간별 상품별/사업장별 - 상세");

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
        this.addIncludeScript("VAN_DS_SC_0831.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0831.xfdl", function() {
        /*##################################################################################
         화면명	: 기간별 점포별/상품별 정보조회 - 상세 (판매정보)
         화면ID  	: VAN_DS_SC_0821
         작성자 	: hroh
        ####################################################################################*/
        //include "lib::comLib.xjs";
        	
        var WRS_C;
        var WRSNM;
        var SRH_BY_DT_FR;
        var SRH_BY_DT_TO;
        var SRH_TRPL_C;
        /* Form Load */
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj,e);
        	
        	//그리드 노데이터 표시
        	this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        }

        this.fn_afterFormload = function(){
        	
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

        /* Form Init*/
        this.form_init = function(obj,e)
        {	
        	WRS_C = this.getOwnerFrame().WRS_C;//점포코드
        	WRSNM = this.getOwnerFrame().WRSNM;//점포명
        	SRH_BY_DT_FR = this.getOwnerFrame().SRH_BY_DT_FR;//검색시작일
        	SRH_BY_DT_TO = this.getOwnerFrame().SRH_BY_DT_TO;//검색종료일
        	SRH_TRPL_C = this.getOwnerFrame().SRH_TRPL_C;//거래처코드
        	
        	this.div_search.sic_trplCN.set_text(WRS_C + " / " + WRSNM);
        	
        	//지역코드 셋팅
        	this.fn_localList();
        	
        	this.fn_paging(1);// 처음조회시 1페이지를 조회한다.
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

        this.fn_search = function(){
        	
        	if(this.fn_validationCheck()){
        	
        		var na_rgn_c = this.gfn_nullToEmpty(this.div_search.cbo_na_rgn_c.value); //지역코드	

        		var params =  "WRS_C=" + WRS_C
        					+ " BY_DT_FR=" + SRH_BY_DT_FR
        					+ " BY_DT_TO=" + SRH_BY_DT_TO
        					+ " na_rgn_c=" + na_rgn_c
        					+ " TRPL_C=" + SRH_TRPL_C;
        				
        		trace(">>>>>>> params : " +  params);
        		
        		var sSvcID        = "retrieveSalesPeriodSkuSumDetailPgList";//통신아이디
        		var sURL          = "svc::/rest/pds/retrieveSalesPeriodSkuSumDetailPgList";// 호출할 서버 페이지 주소
        		var sInDatasets   = "ds_pageVO=ds_pageVO";//보내는데이터셋
        		var sOutDatasets  = "ds_dataM=ds_dataM ds_pageVO=ds_pageVO ds_dataTotal=ds_dataTotal";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = params;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회

        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        	}
        }	

        
        /* Validation Check */
        this.fn_validationCheck = function(){
        	
        	/* 지역을 선택하세요. 
        	if(this.gfn_isNull(this.div_search.cbo_na_rgn_c.value)){
        			this.alert(this.gfn_getTextMessage('validation.message.select.location'));
        			return;
        	}
        	*/
        	
        	return true;
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
        	}
        	
        	if(svcID == "retrieveSalesPeriodSkuSumDetailPgList"){		
        		var p_sum = 0;
        		if(this.ds_dataM.rowcount > 0){
        			var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        			var sPagesize = this.ds_pageVO.getColumn(0, "PAGE_SIZE");			

        			this.div_list.div_page.fn_pageSet(sTotal, sPagesize,"grd_master,div_page",lsNowPage);
        			
        			p_sum = 100;				
        			//합계대비의 합계  100으로 설정
        			this.div_list.grd_master.setCellProperty("Summ",2,"text",p_sum);
        			
        			//현재페이지							
        			var sCurrentPage = this.ds_pageVO.getColumn(0, "CURRENT_PAGE")
        			
        			//검색결과와 페이지
        			/*
        			this.div_list.sta_process.set_visible(true);
        			this.div_list.sta_process.set_text("검색결과 : " +sTotal+"건 페이지 : "+sCurrentPage+"/"+nexacro.round(sTotal/sPagesize));
        			*/
        			
        		}else{
        			
        			this.div_list.div_page.fn_pageSet(0, 0,"grd_master,div_page",lsNowPage);//페이징 설정				
        			
        			this.div_list.grd_master.setCellProperty("Summ",1,"text",0);
        			this.div_list.grd_master.setCellProperty("Summ",2,"text",0);
        			this.div_list.grd_master.setCellProperty("Summ",3,"text",0);
        		}
        	}else if(svcID == "retrieveRgnCList") {			
        			trace("지역코드 콜백");

        			if (this.ds_local.insertRow(0) != -1){
        				this.ds_local.setColumn(0,"NA_RGN_C","");
        				//this.ds_local.setColumn(0,"RGN_CNM",this.gfn_getTextMessage('validation.message.select.location'));
        				this.ds_local.setColumn(0,"RGN_CNM","- 전체 - ");
        				};
        			this.div_search.cbo_na_rgn_c.set_index(0);
        			
        		}
        	var param = {
        			form: this,
        			table: 'TB_SA_TD_WRS_SPYPL',
        			div: this.div_list.div_dateInfo
        		};
        		this.getInfoTableDt(param);	
        	
        }

        
        this.div_list_btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        /* 페이지 숫자 위치 설정*/
        this.div_list_onsize = function(obj,e)
        {	
        	trace("div_list_onsize");
        	var nLeft = (e.cx/2)-(this.div_list.div_page.width/2);
        	this.div_list.div_page.set_left(nLeft);
        }

        

        this.div_list_btn_divResize_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        this.btn_excel_onclick = function(obj,e)
        {	
        	var na_rgn_c = this.gfn_nullToEmpty(this.div_search.cbo_na_rgn_c.value); //지역코드	
        		
        	var title = '판매정보_상품/사업장별_상세';
        	title = title.replace(/ /gi, '');
        	var fileName = title + "_" + this.getDate() + ".xls";

        	var params =  "WRS_C=" + WRS_C
        				+ "&BY_DT_FR=" + SRH_BY_DT_FR
        				+ "&BY_DT_TO=" + SRH_BY_DT_TO
        				+ "&TRPL_C=" + SRH_TRPL_C
        				+ "&na_rgn_c=" + na_rgn_c
        				+ "&fileName=" + fileName;
        			
        	trace(">>>>>>> params : " +  params);
        	
        	params = encodeURI(encodeURI(params));
        	
        	//this.web_downExcel.set_url(application.gv_server_url+"rest/excel/downloadExcelSalesPeriodSkuSumDetailList?"+params);
        	excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelSalesPeriodSkuSumDetailList?"+params, this);
        }

        this.div_list_grd_master_onheadclick = function(obj,e)
        {
        	if(e.cell != 3){ //정렬기능 적용할 컬럼 지정
        		this.gfn_gridSort(obj,e);
        	}
        }

        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_paging(1);// 처음조회시 1페이지를 조회한다.
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_dataM.addEventHandler("onrowposchanged", this.ds_dataM_onrowposchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("oninit", this.form_init, this);
            this.div_search.sta_location.addEventHandler("onclick", this.div_search_sta_location_onclick, this);
            this.div_search.cbo_na_rgn_c.addEventHandler("onitemchanged", this.btnClick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.div_list.addEventHandler("onsize", this.div_list_onsize, this);
            this.div_list.grd_master.addEventHandler("oncellclick", this.fn_grid01_search, this);
            this.div_list.grd_master.addEventHandler("onheadclick", this.div_list_grd_master_onheadclick, this);
            this.div_list.btn_divResize.addEventHandler("onclick", this.div_list_btn_divResize_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0831.xfdl");
        this.loadPreloadList();
       
    };
}
)();
