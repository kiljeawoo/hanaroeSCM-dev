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
                this.set_name("frm_van_ds_sc_0822");
                this.set_titletext("기간별 사업장별/상품별(간선)");
                this._setFormPosition(0,0,803,515);
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
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"CLNTNM\" type=\"string\" size=\"32\"/><Column id=\"SL_QT\" type=\"BIGDECIMAL\" size=\"8\"/><Column id=\"TOT_SLAM\" type=\"BIGDECIMAL\" size=\"8\"/><Column id=\"SRH_BY_DT_FR\" type=\"string\" size=\"32\"/><Column id=\"SRH_BY_DT_TO\" type=\"string\" size=\"32\"/><Column id=\"SRH_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"SHARE_SLAM\" type=\"float\" size=\"8\"/><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"TOTAL_SL_QT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"TOTAL_SL_AM\" type=\"float\" size=\"8\"/></ColumnInfo>");
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
            obj = new Div("div_list", "absolute", "0", "71", null, null, "15", "0", this);
            obj.set_taborder("111");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btn_divResize", "absolute", "46.07%", "25", "62", "12", null, null, this.div_list);
            obj.set_taborder("37");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_master", "absolute", "0", "65", null, null, "0", "30", this.div_list);
            obj.set_taborder("38");
            obj.set_binddataset("ds_dataM");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"170\"/><Column size=\"100\"/><Column size=\"170\"/><Column size=\"60\"/><Column size=\"90\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"사업장코드\"/><Cell col=\"1\" text=\"사업장명\"/><Cell col=\"2\" text=\"상품코드\"/><Cell col=\"3\" text=\"상품명\"/><Cell col=\"4\" text=\"수량\"/><Cell col=\"5\" text=\"금액\"/><Cell col=\"6\" text=\"점유율(%)\"/></Band><Band id=\"body\"><Cell style=\"background2: ;\" text=\"bind:NA_BZPLC\"/><Cell col=\"1\" style=\"align:left;background2: ;\" text=\"bind:CLNTNM\"/><Cell col=\"2\" style=\"background2: ;\" text=\"bind:NA_WRS_C\"/><Cell col=\"3\" style=\"align:left;background2: ;\" text=\"bind:WRSNM\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:SL_QT\" mask=\"###,##0\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:TOT_SLAM\" mask=\"###,##0\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;background2: ;\" text=\"bind:SHARE_SLAM\"/></Band><Band id=\"summary\"><Cell colspan=\"4\" style=\"align:center;\" text=\"합   계\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;SL_QT&quot;)\" mask=\"###,##0\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"expr:dataset.getSum(&quot;TOT_SLAM&quot;)\" mask=\"###,##0\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" mask=\"###,##0\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "733", "26", "55", "40", null, null, this.div_list);
            obj.set_taborder("39");
            obj.set_text("40");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "732", null, "55", "30", null, "0", this.div_list);
            obj.set_taborder("40");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_dateInfo", "absolute", null, "40", "200", "20", "5", null, this.div_list);
            obj.set_taborder("43");
            obj.style.set_align("right middle");
            this.div_list.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "68", "15", null, this);
            obj.set_taborder("103");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "15", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("12");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_by_dt_fr", "absolute", "94", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("45");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("cal_by_dt_to", "absolute", "204", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("46");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static04", "absolute", "194", "10", "10", "21", null, null, this.div_search);
            obj.set_taborder("47");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_location", "absolute", "334", "10", "55", "21", null, null, this.div_search);
            obj.set_taborder("48");
            obj.set_text("지역");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_na_rgn_c", "absolute", "389", "10", "151", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("49");
            obj.set_innerdataset("@ds_local");
            obj.set_codecolumn("NA_RGN_C");
            obj.set_datacolumn("RGN_CNM");
            obj = new Static("Static00", "absolute", "15", "37", "103", "21", null, null, this.div_search);
            obj.set_taborder("50");
            obj.set_text("발주처");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_odrpl_na_trpl_c", "absolute", "94", "36", "122", "21", null, null, this.div_search);
            obj.set_taborder("51");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_odrpl_na_trpl_n", "absolute", "218", "36", "169", "21", null, null, this.div_search);
            obj.set_taborder("52");
            obj.set_cssclass("WF_Essential");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_trplO", "absolute", "389", "36", "21", "21", null, null, this.div_search);
            obj.set_taborder("53");
            obj.set_cssclass("btn_WF_Searchbtn");
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

            obj = new Static("Static12", "absolute", "135", "87", "103", "10", null, null, this);
            obj.set_taborder("101");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "-14", "5", null, "21", "553", null, this);
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

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "76", null, this);
            obj.set_taborder("109");
            obj.set_text("Div00");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web_downExcel", "absolute", "646", "41", "54", "17", null, null, this);
            obj.set_taborder("112");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel_extra", "absolute", null, "40", "78", "21", "20", null, this);
            obj.set_taborder("113");
            obj.set_text("엑셀(간선)");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 978, 503, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("111");
            		p.set_scrollbars("none");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 68, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("103");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 515, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("기간별 사업장별/상품별(간선)");

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
        this.addIncludeScript("VAN_DS_SC_0822.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0822.xfdl", function(exports) {
        /*##################################################################################
         화면명	: 기간별 점포별/상품별 정보조회 (판매정보, 간선해제)
         화면ID  	: VAN_DS_SC_0822
         작성자 	: hroh
        ####################################################################################*/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        var chkDay;
        /* Form Load */
        this.form_onload = function(obj,e)
        {	
        	this.gfn_setInitForm(obj,e);
        	//그리드 노데이터 표시
        	this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        }

        
        /* Form Init*/
        this.form_init = function(obj,e)
        {	
        	///페이지 로딩후 실행부분
        	var toDay = this.gfn_today("yyyyMMdd");	
        	
        	this.div_search.cal_by_dt_fr.set_value(this.gfn_minusDate(toDay,7));
        	this.div_search.cal_by_dt_to.set_value(this.gfn_minusDate(toDay,1));
        	
        	//지역코드 셋팅
        	this.fn_localList();

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
        		if(this.gfn_getDiffDay(byDtFr,byDtTo) > 31){
        			//기간을 31일 이내로 선택해 주세요
        			this.gfn_getMessage("alert", "validation.message.selectDateIn31Day");
        			return false;
        		}
        	}
        	
        	
        	/* 지역을 선택하세요. 
        	if(this.gfn_isNull(this.div_search.cbo_na_rgn_c.value)){
        			this.alert(this.gfn_getTextMessage('validation.message.select.location'));
        			return;
        	}
        	*/
        	
        	/*
        	if(Number(byDtFr) - Number(chkDay) < 0){
        		this.alert("최근 3개월까지 조회 가능합니다.");
        		return false;
        	}
        	
        	if(Number(byDtTo) - Number(chkDay) < 0){
        		this.alert("최근 3개월까지 조회 가능합니다.");
        		return false;
        	}
        	*/
        	
        	return true;
        }

        
        /* Search */
        this.btn_search_onclick = function(obj,e)
        {
        	if (!application.confirm("물류센터 자료를 조회하여 시간이 다소 소요될 수 있습니다.\n계속하시겠습니까?")) {
        		return;
        	}
        	this.fn_paging(1);// 처음조회시 1페이지를 조회한다.	

        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}	

        	if(svcID == "retrieveSalesPeriodStoreSumTrunkList"){
        		var p_sum = 0;
        		//최근 업데이트
        		var param = {
        			form: this,
        			table: 'IAS_SL_DD_BZPLC',
        			div: this.div_list.div_dateInfo
        		};
        		this.getInfoTableDt(param);
        			
        		if(this.ds_dataM.rowcount > 0){
        //			var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        //			var sPagesize = this.ds_pageVO.getColumn(0, "PAGE_SIZE");
        			
        			//trace("sTotal : " + sTotal);
        			//trace("sPagesize : " + sPagesize);
        			//trace("lsNowPage: "+lsNowPage);
        //			this.div_list.div_page.fn_pageSet(sTotal, sPagesize,"grd_master,div_page",lsNowPage);
        							
        // 			trace(this.div_list.grd_master.rowcount);			
        			p_sum = 100;				
        			//합계대비의 합계  100으로 설정
        			this.div_list.grd_master.setCellProperty("Summ",1,"text",this.ds_dataM.getSum("SL_QT"));
        			this.div_list.grd_master.setCellProperty("Summ",2,"text",this.ds_dataM.getSum("TOT_SLAM"));
        			this.div_list.grd_master.setCellProperty("Summ",3,"text",p_sum);
        			
        			//현재페이지							
        //			var sCurrentPage = this.ds_pageVO.getColumn(0, "CURRENT_PAGE")
        			
        			//검색결과와 페이지
        			/*
        			this.div_list.sta_process.set_visible(true);
        			this.div_list.sta_process.set_text("검색결과 : " +sTotal+"건 페이지 : "+sCurrentPage+"/"+nexacro.round(sTotal/sPagesize));
        			*/
        			
        			//페이징 숫자
        // 			trace("11-->"+this.ds_dataTotal.getColumn(0,"TOTAL_SL_QT"));
        // 			trace("22-->"+this.ds_dataTotal.getColumn(0,"TOTAL_SL_AM"));
        			
        //			this.div_list.grd_master.setCellProperty("Summ",1,"text",this.ds_dataTotal.getColumn(0,"TOTAL_SL_QT"));
        //			this.div_list.grd_master.setCellProperty("Summ",2,"text",this.ds_dataTotal.getColumn(0,"TOTAL_SL_AM"));			
        			
        		}else{
        			//this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        //			this.div_list.div_page.fn_pageSet(0, 0,"grd_master,div_page",lsNowPage);//페이징 설정				
        			
        			this.div_list.grd_master.setCellProperty("Summ",1,"text",0);
        			this.div_list.grd_master.setCellProperty("Summ",2,"text",0);
        			this.div_list.grd_master.setCellProperty("Summ",3,"text",0);
        		}	
        	}else if(svcID == "retrieveRgnCList") {			
        			//trace("지역코드 콜백");	

        			if (this.ds_local.insertRow(0) != -1){
        				this.ds_local.setColumn(0,"NA_RGN_C","");
        				//this.ds_local.setColumn(0,"RGN_CNM",this.gfn_getTextMessage('validation.message.select.location'));
        				this.ds_local.setColumn(0,"RGN_CNM","- 전체 - ");
        				};
        			this.div_search.cbo_na_rgn_c.set_index(0);
        			
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

        this.fn_search = function(){
        	//그리드 데이터셋 초기화
        	this.fn_gridInit();
        	
        	this.div_list.grd_master.setCellProperty("Summ",1,"text","0");
        	this.div_list.grd_master.setCellProperty("Summ",2,"text","0");
        	this.div_list.grd_master.setCellProperty("Summ",3,"text","0");
        	
        	if(this.fn_validationCheck()){
        		
        		var trplC = this.getTrplCode();
        		
        		var byDtFr = this.gfn_nullToEmpty(this.div_search.cal_by_dt_fr.value);
        		var byDtTo = this.gfn_nullToEmpty(this.div_search.cal_by_dt_to.value);
        		var na_rgn_c = this.gfn_nullToEmpty(this.div_search.cbo_na_rgn_c.value); //지역코드				
        		var odrpl_na_trpl_c	= this.gfn_nullToEmpty(this.div_search.edt_odrpl_na_trpl_c.value);//발주처 코드
        		
        		if (this.gfn_isNull(na_rgn_c) && this.gfn_isNull(odrpl_na_trpl_c)) {
        			this.alert("지역 또는 발주처를 입력해주세요.");
        			return;
        		}
        		
        		var params =  "BY_DT_FR=" + byDtFr 
        					+ " BY_DT_TO=" + byDtTo					
        					+ " na_rgn_c=" + na_rgn_c
        					+ " odrpl_na_trpl_c=" + odrpl_na_trpl_c
        					+ " TRPL_C=" + trplC;
        					
        		//trace(">>>>>>> params : " +  params);
        					
        		var sSvcID        = "retrieveSalesPeriodStoreSumTrunkList";//통신아이디
        		var sURL          = "svc::/rest/pds/retrieveSalesPeriodStoreSumTrunkList";// 호출할 서버 페이지 주소
        		var sInDatasets   = "ds_pageVO=ds_pageVO";//보내는데이터셋
        		var sOutDatasets  = "ds_dataM=ds_dataM ds_pageVO=ds_pageVO ds_dataTotal=ds_dataTotal";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = params;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회		
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        	}
        }

        /* 그리드 내 데이터셋 초기화*/
        this.fn_gridInit = function(){
        	this.ds_dataM.clearData();
        	//this.ds_dataTotal.clearData();	
        }

        /* 페이지 숫자 위치 설정*/
        this.div_list_onsize = function(obj,e)
        {	
        	//trace("div_list_onsize");
        //	var nLeft = (e.cx/2)-(this.div_list.div_page.width/2);
        //	this.div_list.div_page.set_left(nLeft);
        }

        this.div_list_btn_divResize_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        this.div_list_grd_master_onheadclick = function(obj,e)
        {
        	if(e.cell != 6){ //정렬기능 적용할 컬럼 지정
        		this.gfn_gridSort(obj,e);
        	}
        }

        //사업장조회 버튼
        this.div_search_btn_trplO_onclick = function(obj,e)
        {
        	var oArg = {form_id:"VAN_DS_SC_0822", trplC:this.getTrplCode()};
        	var sOption = "autosize=true,title=false";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("POPUP_TRNREL_ODRPL","POPUP::POPUP_TRNREL_ODRPL.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.fn_popupAfter = function(strId,strVal)
        {	
        	
        	//trace(" strId : " + strId + " strVal : " + strVal);
        	var paramsArr = strVal.split(",");
        	if(strId == "POPUP_TRNREL_ODRPL"){
        		this.div_search.edt_odrpl_na_trpl_c.set_value(paramsArr[0]);
        		this.div_search.edt_odrpl_na_trpl_n.set_value(paramsArr[1]);
        	}
        	
        }

        this.div_search_btn_excel_extra_onclick = function(obj,e)
        {
        	var trplC = this.getTrplCode();			
        	var byDtFr = this.gfn_nullToEmpty(this.div_search.cal_by_dt_fr.value);
        	var byDtTo = this.gfn_nullToEmpty(this.div_search.cal_by_dt_to.value);
        	var na_rgn_c = this.gfn_nullToEmpty(this.div_search.cbo_na_rgn_c.value); //지역코드
        	var odrpl_na_trpl_c	= this.gfn_nullToEmpty(this.div_search.edt_odrpl_na_trpl_c.value);//발주처 코드
        	
        	if (this.gfn_isNull(na_rgn_c) && this.gfn_isNull(odrpl_na_trpl_c)) {
        		this.alert("지역 또는 발주처를 입력해주세요.");
        		return;
        	}
        	
        	if (!application.confirm("간선상품은 물류센터 자료를 조회하여 시간이 다소 소요될 수 있습니다.\n계속하시겠습니까?")) {
        		return;
        	}
        		
        	//var title = '판매정보_'+this.parent.sNm;
        	//title = title.replace(/ /gi, '');
        	//var fileName = title + "_" + this.getDate() + ".xls";
        	
        	var params =  "BY_DT_FR=" + byDtFr 
        				+ "&BY_DT_TO=" + byDtTo					
        				+ "&TRPL_C=" + trplC
        				+ "&na_rgn_c=" + na_rgn_c
        				+ "&odrpl_na_trpl_c=" + odrpl_na_trpl_c
        				//+ "&fileName=" + fileName
        				;
        			
        	//trace(">>>>>>> params : " +  params);
        	
        	params = encodeURI(encodeURI(params));
        	
        	//this.web_downExcel.set_url(application.gv_server_url+"rest/excel/downloadExcelSalesPeriodStoreSumList?"+params);
        	//excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelSalesPeriodStoreSumTrunkList?"+params, this);	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("oninit", this.form_init, this);
            this.div_list.addEventHandler("onsize", this.div_list_onsize, this);
            this.div_list.btn_divResize.addEventHandler("onclick", this.div_list_btn_divResize_onclick, this);
            this.div_list.grd_master.addEventHandler("onheadclick", this.div_list_grd_master_onheadclick, this);
            this.div_search.sta_location.addEventHandler("onclick", this.div_search_sta_location_onclick, this);
            this.div_search.cbo_na_rgn_c.addEventHandler("onitemchanged", this.btnClick, this);
            this.div_search.edt_odrpl_na_trpl_c.addEventHandler("onkeyup", this.div_search_edt_odrpl_na_trpl_c_onkeyup, this);
            this.div_search.edt_odrpl_na_trpl_n.addEventHandler("onkeyup", this.div_search_edt_odrpl_na_trpl_n_onkeyup, this);
            this.div_search.btn_trplO.addEventHandler("onclick", this.div_search_btn_trplO_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_excel_extra.addEventHandler("onclick", this.div_search_btn_excel_extra_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0822.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
