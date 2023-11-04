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
                this.set_name("OMG_DS_SC_6120");
                this.set_titletext("공통코드조회");
                this.set_name("OMG_DS_SC_6120");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NUMBER\" type=\"STRING\" size=\"32\"/><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"SIMP_TPC\" type=\"STRING\" size=\"30\"/><Column id=\"SIMP_C\" type=\"STRING\" size=\"20\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"150\"/><Column id=\"SIMP_C_EXPL\" type=\"STRING\" size=\"100\"/><Column id=\"SIMP_C_SORT_SQ\" type=\"INT\" size=\"18\"/><Column id=\"FSRG_DTM\" type=\"DATE\" size=\"30\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"16\"/><Column id=\"LSCHG_DTM\" type=\"DATE\" size=\"30\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"16\"/><Column id=\"UYN\" type=\"STRING\" size=\"1\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"NUMBER\" type=\"STRING\" size=\"32\"/><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"SIMP_TPC\" type=\"STRING\" size=\"30\"/><Column id=\"SIMP_C\" type=\"STRING\" size=\"20\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"150\"/><Column id=\"SIMP_C_EXPL\" type=\"STRING\" size=\"100\"/><Column id=\"SIMP_C_SORT_SQ\" type=\"INT\" size=\"18\"/><Column id=\"FSRG_DTM\" type=\"DATE\" size=\"30\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"16\"/><Column id=\"LSCHG_DTM\" type=\"DATE\" size=\"30\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"16\"/><Column id=\"UYN\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
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


            
            // UI Components Initialize
            obj = new Button("btn_update", "absolute", null, "0", "41", "21", "125", null, this);
            obj.set_taborder("2");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "18", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert", "absolute", null, "0", "41", "21", "168", null, this);
            obj.set_taborder("3");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("4");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "787", "0", "15", "490", null, null, this);
            obj.set_taborder("5");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "732", "21", "56", "8", null, null, this);
            obj.set_taborder("6");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "69", "15", null, this);
            obj.set_taborder("10");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Combo("cbo_select", "absolute", "324", "10", "92", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_select_innerdataset = new Dataset("cbo_select_innerdataset", this.div_search.cbo_select);
            cbo_select_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">단순코드</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">단순코드명</Col></Row></Rows>");
            obj.set_innerdataset(cbo_select_innerdataset);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("-1");
            obj = new Static("Static01", "absolute", "15", "36", "139", "21", null, null, this.div_search);
            obj.set_taborder("6");
            obj.set_text("페이지당 게시물수");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 20 0 11");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_pageNum", "absolute", "154", "36", "60", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_pageNum_innerdataset = new Dataset("cbo_pageNum_innerdataset", this.div_search.cbo_pageNum);
            cbo_pageNum_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row></Rows>");
            obj.set_innerdataset(cbo_pageNum_innerdataset);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("-1");
            obj = new Edit("edt_simpCCnm", "absolute", "419", "10", "140", "21", null, null, this.div_search);
            obj.set_taborder("8");
            obj.set_maxlength("150");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "589", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("9");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 20 0 11");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_useYn", "absolute", "668", "10", "105", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_useYn_innerdataset = new Dataset("cbo_useYn_innerdataset", this.div_search.cbo_useYn);
            cbo_useYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">사용안함</Col></Row></Rows>");
            obj.set_innerdataset(cbo_useYn_innerdataset);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("-1");
            obj = new Edit("edt_simpTpc", "absolute", "153", "10", "140", "21", null, null, this.div_search);
            obj.set_taborder("11");
            obj.set_maxlength("30");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "15", "10", "103", "21", null, null, this.div_search);
            obj.set_taborder("12");
            obj.set_text("단순유형코드");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 20 0 11");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_delete", "absolute", null, "0", "45", "21", "78", null, this);
            obj.set_taborder("13");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "80.82%", "29", null, "69", "15.44%", null, this);
            obj.set_taborder("14");
            obj.set_text("69");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "97", null, null, "15", "1", this);
            obj.set_taborder("0");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_comncList", "absolute", "0", "42", null, null, "0", "29", this.div_list);
            obj.set_taborder("2");
            obj.set_binddataset("ds_cc");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"100\"/><Column size=\"250\"/><Column size=\"280\"/><Column size=\"180\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\" text=\"단순유형코드\"/><Cell col=\"3\" text=\"단순코드\"/><Cell col=\"4\" text=\"단순코드명\"/><Cell col=\"5\" text=\"단순코드설명\"/><Cell col=\"6\" text=\"단순코드정렬순서\"/><Cell col=\"7\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:NUMBER\"/><Cell col=\"2\" text=\"bind:SIMP_TPC\"/><Cell col=\"3\" text=\"bind:SIMP_C\"/><Cell col=\"4\" text=\"bind:SIMP_CNM\"/><Cell col=\"5\" text=\"bind:SIMP_C_EXPL\"/><Cell col=\"6\" text=\"bind:SIMP_C_SORT_SQ\"/><Cell col=\"7\" text=\"bind:UYN\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "731", "1", "56", "41", null, null, this.div_list);
            obj.set_taborder("5");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_paging", "absolute", "28.55%", null, "338", "29", null, "-2", this.div_list);
            obj.set_taborder("6");
            obj.style.set_align("center middle");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_flag", "absolute", "347", "0", null, "12", "363", null, this.div_list);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 965, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("10");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 965, 444, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div02");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("공통코드조회");

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
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_6120.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_6120.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }
        this.fn_afterFormOnload = function()
        {
           //페이지 로딩후 실행부분
           /*초기값세팅*/   
           this.div_search.cbo_select.set_index(0);
           this.div_search.cbo_useYn.set_index(0);
           this.div_search.cbo_pageNum.set_index(0);
           
            /*조회 호출*/
           this.btn_search.click();  
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
         
         /*조회버튼 이벤트*/
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_paging(1);// 처음조회시 1페이지를 조회한다.
        }

         /*등록버튼 이벤트*/
        this.btn_insert_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"I", dsArg:this.ds_cc};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("popId","OMG.MG::OMG_DS_SC_6121.xfdl",oArg,sOption,sPopupCallBack);	
        }

        /*수정버튼 이벤트*/
        this.btn_update_onclick = function(obj,e)
        {
        	var checkCnt =0 ;	//선택된 체크박스 개수
        	var position =0 ;	//선택된 체크박스 위치
        	for(var i = 0 ; i < this.ds_cc.rowcount; i++){		
        		if(this.ds_cc.getColumn(i, "CHK") =="1"){
        			checkCnt = checkCnt +1;			
        			position = i;
        		}
        	}

        	if(checkCnt > 1){
        		alert("하나만 선택해주시기 바랍니다.");
        		this.ds_param.clearData();
        		return;
        	}else if(checkCnt == 0){
        		alert("수정해야할 데이터를 선택해 주시기 바랍니다.");
        		this.ds_param.clearData();
        		return;
        	}else{
        		this.ds_param.clearData();
        		this.ds_param.insertRow(0);
        		this.ds_param.copyRow(0,this.ds_cc,position);		

        		var oArg = {paramMode:"U", dsArg:this.ds_param};			
        		var sOption = "autosize=true";
        		var sPopupCallBack = "fn_popupAfter";    				
        		this.gfn_openPopup("popId","OMG.MG::OMG_DS_SC_6121.xfdl",oArg,sOption,sPopupCallBack);	
        	}
        }

        /*삭제버튼 이벤트*/
        this.btn_delete_onclick = function(obj,e)
        {
        	var checkCnt =0 ;	//선택된 체크박스 개수
        	
        	this.ds_param.clearData();
        	// 체크된 행들을 순차적으로 ds_param에 적재한다.
        	for(var i = 0 ; i < this.ds_cc.rowcount; i++){		
        		if(this.ds_cc.getColumn(i, "CHK") =="1"){
        		  checkCnt = checkCnt +1;
        		  this.ds_param.insertRow(checkCnt-1);
        		  this.ds_param.copyRow(checkCnt-1,this.ds_cc,i);
        		}	
        	}
        		
        	if(checkCnt > 0){
        		
        		var sParams       = "";
        		var sSvcID        = "delete";
        		var sURL          = "svc::rest/mg/deleteComnC"
        		var sInDatasets   = "ds_param=ds_param";
        		var sOutDatasets  = "";	
        		var sArgument     = "";
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회

        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        		
        	}else {
        		alert("삭제할 데이터를 선택해 주시기 바랍니다.");
        		this.ds_param.clearData();
        		return;
        	 } 
        	
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
         /*Paging 처리*/
        this.fn_paging = function(vPageNum)
        { 	  	 
        	this.ds_pageVO.clearData();  
        	this.ds_cc.clearData();     //Grid에 Binding된 Dataset명
        	
        	this.ds_pageVO.addRow(); 
        	
        	var vPageSize   = this.div_search.cbo_pageNum.value //Grid에 보여줄 Row수 선택
        	var vTotalCount = 0;	//전체건수. 화면조회후 리턴받아 사용 (구동시 갱신)
        	
         	this.ds_pageVO.setColumn(0,"CURRENT_PAGE",vPageNum); //현재 페이지
         	this.ds_pageVO.setColumn(0,"PAGE_SIZE",vPageSize);
         	this.ds_pageVO.setColumn(0,"TOTAL_ROW_COUNT",vTotalCount);
        	 
        	var argumentObj = "";
        	
        	this.fn_retrieveComnCList();
        } 
         

         /*조회-서비스 Call*/ 
        this.fn_retrieveComnCList = function()
        {
        	var sParams = "simp_tpc="+this.gfn_nullToEmpty(this.div_search.edt_simpTpc.value)
        				+ " selection="+this.gfn_nullToEmpty(this.div_search.cbo_select.value)
        				+ " simp_c_cnm="+this.gfn_nullToEmpty(this.div_search.edt_simpCCnm.value)
        				+ " use_y_n="+this.gfn_nullToEmpty(this.div_search.cbo_useYn.value);
        	
        	var sSvcID        = "retrieve";
        	var sURL          ="svc::rest/mg/retrieveComnCList";
        	var sInDatasets   = "ds_pageVO=ds_pageVO";
        	var sOutDatasets  = "ds_cc=ds_cc ds_pageVO=ds_pageVO";
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

         /*팝업호출확인하기*/
        this.fn_popupAfter = function(strId,strVal)
        {	
        	this.btn_search.click();
        }

         /*상단 체크박스 선택 시 전체선택 및 해제하는 이벤트*/
        this.Div02_Grid01_onheadclick = function(obj,e)
        {	
        	if(e.cell == 0) {
        		this.gfn_setGridCheckAll(obj,e);
        	}
        }

         /*콜백메소드*/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {		
        	var current_page = this.ds_pageVO.getColumn(0, "CURRENT_PAGE");
        	var page_size    = this.ds_pageVO.getColumn(0,"PAGE_SIZE");
        	var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        	
        	this.ds_cc.addColumn("CHK", "string");
        	this.ds_cc.addColumn("NUMBER", "string");
        	
        	for(var i = 0 ; i < this.ds_cc.rowcount; i++)
        	{
        		this.ds_cc.setColumn(i,"CHK",0);
        	 	this.ds_cc.setColumn(i,"NUMBER",(current_page-1)*(page_size)+(i+1));
        	}

        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        	 	if(svcID == "retrieve"){		
        	 		if(this.ds_cc.rowcount > 0)
        				{ 		
        					this.div_list.div_paging.fn_pageSet(sTotal, page_size,"div_paging",current_page);	
        				}	
        	 		else if(this.ds_cc.rowcount == 0){
        	 			this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        	 			this.div_list.div_paging.fn_pageSet(0, 0,"div_paging",current_page);
        	 		}
        	 	}
        	 	else if(svcID=="delete"){		
        	 		if(ErrorCode == 1){
        	 			this.gfn_getMessage("alert", "result.message.save.success");		
        	 			this.btn_search.click();
        	 			}
        	 	}
        	 	else{
        	 		if(this.ds_cc.rowcount == 0){
        	 			this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        	 		}
        	 	}
        	 }	

        }

        this.btn_flag_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_update.addEventHandler("onclick", this.btn_update_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_insert.addEventHandler("onclick", this.btn_insert_onclick, this);
            this.div_search.cbo_select.addEventHandler("onitemchanged", this.div_search_cbo_displayYn_onitemchanged, this);
            this.div_search.Static01.addEventHandler("onclick", this.div_search_Static01_onclick, this);
            this.div_search.cbo_pageNum.addEventHandler("onitemchanged", this.div_search_cbo_displayYn_onitemchanged, this);
            this.div_search.edt_simpCCnm.addEventHandler("oneditclick", this.div_search_edt_menuId00_oneditclick, this);
            this.div_search.cbo_useYn.addEventHandler("onitemchanged", this.div_search_cbo_displayYn_onitemchanged, this);
            this.div_search.edt_simpTpc.addEventHandler("oneditclick", this.div_search_edt_menuId_oneditclick, this);
            this.btn_delete.addEventHandler("onclick", this.btn_delete_onclick, this);
            this.Static05.addEventHandler("onclick", this.Static04_onclick, this);
            this.div_list.grd_comncList.addEventHandler("onheadclick", this.Div02_Grid01_onheadclick, this);
            this.div_list.btn_flag.addEventHandler("onclick", this.btn_flag_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_6120.xfdl");
        this.loadPreloadList();
       
    };
}
)();
