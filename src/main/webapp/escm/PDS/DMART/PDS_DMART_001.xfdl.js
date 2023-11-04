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
                this.set_name("frm_PDS_DMART_001");
                this.set_titletext("월별 카테고리판매정보");
                this._setFormPosition(0,0,803,523);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dmart_req", this);
            obj._setContents("<ColumnInfo><Column id=\"REQ_TM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_STAT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DOC\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DOC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"SRCH_DAY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SRCH_DAY_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SRCH_FM_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SRCH_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RSLT_DOC_FMT\" type=\"STRING\" size=\"256\"/><Column id=\"RSLT_DOC_FMT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BATCH_ST_TM\" type=\"STRING\" size=\"256\"/><Column id=\"BATCH_ED_TM\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_DT\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_EDI_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"BATCH_INST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SMS_SEND_TM\" type=\"STRING\" size=\"256\"/><Column id=\"DN_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "43", "15", null, this);
            obj.set_taborder("103");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "15", "10", "67", "21", null, null, this.div_search);
            obj.set_taborder("12");
            obj.set_text("신청일");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_date_fr", "absolute", "70", "8", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("46");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static26", "absolute", "170", "8", "10", "21", null, null, this.div_search);
            obj.set_taborder("48");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_date_to", "absolute", "180", "8", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("49");
            obj.set_dateformat("yyyy-MM-dd");

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

            obj = new Div("div_list", "absolute", "0", "71", null, null, "15", "5", this);
            obj.set_taborder("64");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btn_divResize", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_dmart_req", "absolute", "0", "40", null, null, "0", "67", this.div_list);
            obj.set_taborder("10");
            obj.set_binddataset("ds_dmart_req");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"112\"/><Column size=\"74\"/><Column size=\"60\"/><Column size=\"104\"/><Column size=\"100\"/><Column size=\"56\"/><Column size=\"79\"/><Column size=\"71\"/><Column size=\"66\"/><Column size=\"63\"/><Column size=\"47\"/><Column size=\"124\"/><Column size=\"96\"/><Column size=\"71\"/><Column size=\"47\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"신청일\"/><Cell col=\"1\" text=\"신청ID\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"파일명\"/><Cell col=\"4\" text=\"신청문서\"/><Cell col=\"5\" text=\"문서유형\"/><Cell col=\"6\" text=\"권한사업장\"/><Cell col=\"7\" text=\"조회기준일\"/><Cell col=\"8\" text=\"시작일\"/><Cell col=\"9\" text=\"종료일\"/><Cell col=\"10\" text=\"포맷\"/><Cell col=\"11\" text=\"생성시간\"/><Cell col=\"12\" text=\"다운로드횟수\"/><Cell col=\"13\" text=\"삭제일\"/><Cell col=\"14\" text=\"취소\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" text=\"bind:REQ_TM\" mask=\"@@@@-@@-@@ @@:@@:@@\"/><Cell col=\"1\" text=\"bind:REQ_ID\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:center;\" text=\"bind:REQ_STAT_NM\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:left;color:blue;\" text=\"bind:FILE_PATH\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:center;\" text=\"bind:REQ_DOC\"/><Cell col=\"5\" displaytype=\"normal\" style=\"align:CENTER;\" text=\"bind:DOC_TYPE_NM\"/><Cell col=\"6\" text=\"bind:REQ_TRPL_C\"/><Cell col=\"7\" text=\"bind:SRCH_DAY_TYPE_NM\"/><Cell col=\"8\" text=\"bind:SRCH_FM_DT\" mask=\"@@@@-@@-@@\"/><Cell col=\"9\" text=\"bind:SRCH_ED_DT\" mask=\"@@@@-@@-@@\"/><Cell col=\"10\" text=\"bind:RSLT_DOC_FMT_NM\"/><Cell col=\"11\" text=\"bind:BATCH_ED_TM\"/><Cell col=\"12\" text=\"bind:DN_CNT\"/><Cell col=\"13\" text=\"bind:DEL_DT\" mask=\"expr:(DEL_DT==null)?'':'@@@@-@@-@@'\"/><Cell col=\"14\" displaytype=\"button\" text=\"취소\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "733", "1", "55", "40", null, null, this.div_list);
            obj.set_taborder("13");
            obj.set_text("40");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_page", "absolute", "28.3%", null, "338", "44", null, "18", this.div_list);
            obj.set_taborder("14");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "409", "15", null, "21", "0", null, this.div_list);
            obj.set_taborder("15");
            obj.set_text("생성된 파일은 생성일로부터 31일 동안 보관 후 자동삭제됩니다.");
            obj.style.set_color("#0000ffff");
            obj.style.set_align("right middle");
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

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("111");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "196", null, this);
            obj.set_visible("false");
            obj.set_taborder("112");
            obj.set_text("Div00");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "0", "41", "21", "76", null, this);
            obj.set_taborder("114");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web_downExcel", "absolute", "512", "42", "44", "14", null, null, this);
            obj.set_taborder("115");
            obj.set_visible("false");
            obj.style.set_opacity("80");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "120", null, this);
            obj.set_taborder("116");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
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
            obj = new Layout("default", "", 803, 523, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("월별 카테고리판매정보");

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
            this._addPreloadList("fdl", "common::AuthorityWorkplace.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PDS_DMART_001.xfdl", "lib::comLib.xjs");
        this.registerScript("PDS_DMART_001.xfdl", function() {
        /*##################################################################################
         화면명	: 데이터마트신청조회
         화면ID  	: PDS_DMART_001.xfdl
         작성자 	: 최영신
        ####################################################################################*/
        //include "lib::comLib.xjs";

        var chkDay;
        /* Form Load */
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj,e);
        	this.div_list.grd_dmart_req.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        }

        /* Form Init*/
        this.fn_afterFormOnload = function() //onload
        {	

        	///페이지 로딩후 실행부분
        	var toDay = this.gfn_today("yyyyMMdd");
        	var initdate = this.gfn_today('yyyyMM');

        	var numAllowdMonths = 1; // 6개월 전까지 : 조회가능 기간을 6개월 전 으로 줄임
        	chkDay = this.gfn_minusMonth(toDay, numAllowdMonths); 
        	
        	trace("toDay---->"+toDay);
        	trace("chkDay---->"+chkDay);
        	

        	this.div_search.cal_date_fr._setValue(chkDay);
        	this.div_search.cal_date_to._setValue(toDay);
        	 
            this.authChkDisable(); // 권한사업장 비활성화 체크
        	//this.set_cbo_date();
          
        }

        /* Validation Check */
        this.fn_validationCheck = function(){

        		var cal_date_fr = this.div_search.cal_date_fr.value;
        		var cal_date_to = this.div_search.cal_date_to.value;
        		
        		if(cal_date_fr > cal_date_to ) {
        		
        			alert('종료일이 시작일보다 이전날짜 입니다.');
        			
        			return false;
        		}
        		
        	return true;
        }

        
        /* Search */
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_paging(1); //처음 조회 시 페이지를 확인한다.
        	

            
        	
        }
        //페이징 처리
        this.fn_paging = function(vPageNum)
        {
        	this.ds_pageVO.clearData();  
        	this.ds_dmart_req.clearData();     //Grid에 Binding된 Dataset명	
        	
        	this.ds_pageVO.addRow(); 
        	
        	var vPageSize   = 20; 	//Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
        	var vTotalCount = 1; 	//전체건수. 화면조회후 리턴받아 사용
         	this.ds_pageVO.setColumn(0,"CURRENT_PAGE",vPageNum); //현재 페이지
         	this.ds_pageVO.setColumn(0,"PAGE_SIZE",vPageSize);
         	this.ds_pageVO.setColumn(0,"TOTAL_ROW_COUNT",vTotalCount);
        	 
        	var argumentObj = "";
        	
        	lsNowPage = vPageNum;//현재페이지 설정 
        	
            this.fn_search();
        }

        
        this.fn_search = function(){
        trace('재조회');
        	if(this.fn_validationCheck() == true){
        	
        		this.ds_dmart_req.clearData();
        		
        		var cal_date_fr = this.div_search.cal_date_fr.value;
        		var cal_date_to = this.div_search.cal_date_to.value;
        		
        		//거래처코드
        		var trplC = this.getTrplCode();
        		
        		var params =    " date_fr=" + cal_date_fr 
        		              + " date_to=" + cal_date_to
        		              + " NA_TRPL_C=" + trplC
        		            ;					
        					
        		trace(">>>>>>> params : " +  params);
        					
        		var sSvcID        = "getDmartReqList";//통신아이디
        		var sURL          = "svc::rest/dmart/getDmartReqList";// 호출할 서버 페이지 주소
        		var sInDatasets   = "ds_pageVO=ds_pageVO";//보내는데이터셋
        		var sOutDatasets  = "ds_dmart_req=ds_dmart_req ds_pageVO=ds_pageVO";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
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
        		if(svcID == "getDmartReqList"){			
        trace("callback: getDmartReqList");
        			var p_sum = 0;
        			if(this.div_list.grd_dmart_req.rowcount > 0){
        				var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        				var sPagesize = this.ds_pageVO.getColumn(0, "PAGE_SIZE");
        				
        				this.div_list.div_page.fn_pageSet(sTotal, sPagesize,"grd_dmart_req,div_page",lsNowPage);

        				p_sum = 100;				
        				//합계대비의 합계  100으로 설정
        				this.div_list.grd_dmart_req.setCellProperty("Summ",3,"text",p_sum);
        				
        				//현재페이지							
        				var sCurrentPage = this.ds_pageVO.getColumn(0, "CURRENT_PAGE")
        			}else{
        				this.div_list.div_page.fn_pageSet(0, 0,"grd_dmart_req,div_page",lsNowPage);//페이징 설정				
        				
        				this.div_list.grd_dmart_req.setCellProperty("Summ",1,"text",0);
        				this.div_list.grd_dmart_req.setCellProperty("Summ",2,"text",0);
        				this.div_list.grd_dmart_req.setCellProperty("Summ",3,"text",0);
        				this.div_list.grd_dmart_req.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        			}

                    
        		}else if(svcID == "cancelDmartReq"){
        			
        			alert("정상적으로 취소되었습니다.");
        		    this.fn_search();
        		}
        		
        	}
        }

        
        this.form_init = function(obj,e)
        {
        	
        }

        
        /*
         * 등록팝업
         */
        this.btn_popup01_onclick = function(obj,e)
        {

        	trace("application.gv_userAuth "  + application.gv_userAuth);
        	
        	if (application.gv_userAuth.indexOf("1") < 0) { // 빌링권한이 없는 경우
        		alert("빌링권한이 있는 사용자만 저장할 수 있습니다.");
        		return;
        	}
        	
        	var param = "";
        	var trplC = this.getTrplCode();//권한사업장

        	var oArg = {AuthorityNo:param, temp_yn:'', trplC:trplC, writeType:0};  //writeType : 등록0 수정1 
        	var sOption = "autosize=true,title=false";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("deliveryNoticePopup","PDS.DMART::PDS_DMART_001_P01.xfdl",oArg,sOption,sPopupCallBack);
        }

        
        /*
         * 취소버튼 클릭시
         */
        this.div_list_grd_dmart_req_oncellclick = function(obj,e)
        {
        	trace(obj.getCellPos());
        	
        	if(obj.getCellPos() == '3'){
        	
        	    // 파일명 칼럼 클릭
        	    if(this.ds_dmart_req.getColumn(e.row,  "REQ_STAT" ) == "3" ){
        	        // 생성상태일 때만 다운로드
        			if(confirm("다운로드 하시겠습니까?") == true){
        			
        				this.fn_down();
        				this.fn_paging(1);
        			}
        	    
        	    }
        	    

        	}else if(obj.getCellPos() == '13'){
        	    // 취소칼럼 클릭시
        	    if(this.ds_dmart_req.getColumn(e.row,  "REQ_STAT" ) != "1" ){
        	        alert("신청상태만 취소할 수 있습니다.");
        	        return false;
        	    }
        	    
        	    if(confirm("취소하시겠습니까?") == true){
        	    
        	        this.fn_cancel();
        	    }
        	}
        } // click

        // cancel
        this.fn_cancel = function(){

        		var params =    "REQ_TM=" + this.ds_dmart_req.getColumn(this.ds_dmart_req.rowposition, "REQ_TM")
        		              + " REQ_ID=" + this.ds_dmart_req.getColumn(this.ds_dmart_req.rowposition, "REQ_ID")
        		            ;
        					
        		trace(">>>>>>> params : " +  params);
        					
        		var sSvcID        = "cancelDmartReq";//통신아이디
        		var sURL          = "svc::rest/dmart/cancelDmartReq";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_dmart_req=ds_dmart_req";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = params;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        			

        }

        /*
         * 생성파일 다운로드
         */
         /*
        this.fn_down = function(){
        	var systemFileName = this.ds_dmart_req.getColumn(this.ds_dmart_req.rowposition, "FILE_PATH"); //
        	var fileName = systemFileName;
        	
        	var strDownUrl = application.gv_server_url+"rest/common/fileDownload?systemFileName="+systemFileName+"&fileName="+fileName+"&isSealType=dmart";
        	var wbs_dw     = this.gfn_createWebBorwserComponent(this);
        	
        	wbs_dw.set_url(strDownUrl);

        } // fn_down
        */

        this.fn_down = function(){

                var REQ_TM    = this.ds_dmart_req.getColumn(this.ds_dmart_req.rowposition, "REQ_TM");
                var REQ_ID    = this.ds_dmart_req.getColumn(this.ds_dmart_req.rowposition, "REQ_ID");
                var FILE_PATH = this.ds_dmart_req.getColumn(this.ds_dmart_req.rowposition, "FILE_PATH");

        		var systemFileName = FILE_PATH; //
        		var fileName = systemFileName;
        		
        		var strDownUrl = application.gv_server_url+"rest/dmart/fileDownload?systemFileName="+systemFileName+"&fileName="+fileName+"&REQ_TM="+REQ_TM+"&REQ_ID="+REQ_ID;
        		var wbs_dw     = this.gfn_createWebBorwserComponent(this);
        		
        		wbs_dw.set_url(strDownUrl);
                
        			/*
        				var systemFileName = this.ds_dmart_req.getColumn(this.ds_dmart_req.rowposition, "FILE_PATH"); //
        				var fileName = systemFileName;
        				
        				var strDownUrl = application.gv_server_url+"rest/common/fileDownload?systemFileName="+systemFileName+"&fileName="+fileName+"&isSealType=dmart";
        				var wbs_dw     = this.gfn_createWebBorwserComponent(this);
        				
        				wbs_dw.set_url(strDownUrl);
        			*/
        } // fn_down

        
        this.div_list_btn_divResize_onclick = function(obj,e)
        {
        	//this.gfn_searchDivResize(obj, this.div_search, this.btn_divResize);
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        //엑셀 다운로드 버튼
        this.btn_excel_onclick = function(obj,e)
        {
        	if(this.fn_validationCheck() == true){
        		
        		var cal_date_fr = this.div_search.cal_date_fr.value;
        		var cal_date_to = this.div_search.cal_date_to.value;
        		
        		//거래처코드
        		var trplC = this.getTrplCode();
        		
        		var params =    "date_fr=" + cal_date_fr 
        		              + "&date_to=" + cal_date_to
        		              + "&NA_TRPL_C=" + trplC
        		            ;					
        					
        		trace(">>>>>>> params : " +  params);
                
                params = encodeURI(encodeURI(params));
                
                
                trace(">>>>>>> application.gv_server_url : " +  application.gv_server_url);
        		//API 호출
        	    excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelDmartReqList?"+params, this);
        	}	

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("oninit", this.form_init, this);
            this.div_list.btn_divResize.addEventHandler("onclick", this.div_list_btn_divResize_onclick, this);
            this.div_list.grd_dmart_req.addEventHandler("oncellclick", this.div_list_grd_dmart_req_oncellclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_popup01_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);

        };

        this.loadIncludeScript("PDS_DMART_001.xfdl");
        this.loadPreloadList();
       
    };
}
)();
