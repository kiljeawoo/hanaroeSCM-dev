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
                this.set_name("OMG_DS_SC_6610");
                this.set_titletext("고객응대정보");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "0", "0", "49.44%", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "788", "0", "1.87%", "490", null, null, this);
            obj.set_taborder("2");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "71", "98.13%", null, null, "0", this);
            obj.set_taborder("5");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_result", "absolute", "0", "42", "100%", null, null, "7", this.div_list);
            obj.set_taborder("8");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"91\"/><Column size=\"74\"/><Column size=\"96\"/><Column size=\"69\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"69\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"59\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"등록일자\"/><Cell col=\"1\" rowspan=\"2\" text=\"완료일자\"/><Cell col=\"2\" rowspan=\"2\" text=\"문의내용\"/><Cell col=\"3\" rowspan=\"2\" text=\"조치내용\"/><Cell col=\"4\" rowspan=\"2\" text=\"문의자\"/><Cell col=\"5\" rowspan=\"2\" text=\"연락처\"/><Cell col=\"6\" colspan=\"3\" text=\"처리중\"/><Cell col=\"9\" colspan=\"3\" text=\"처리완료\"/><Cell col=\"12\" rowspan=\"2\" text=\"최종&#13;&#10;처리상태\"/><Cell row=\"1\" col=\"6\" text=\"응대자\"/><Cell row=\"1\" col=\"7\" text=\"시작\"/><Cell row=\"1\" col=\"8\" text=\"종료\"/><Cell row=\"1\" col=\"9\" text=\"응대자\"/><Cell row=\"1\" col=\"10\" text=\"시작\"/><Cell row=\"1\" col=\"11\" text=\"종료\"/></Band><Band id=\"body\"><Cell mask=\"####-##-##\"/><Cell col=\"1\" style=\"align:right;\" mask=\"####-##-##\"/><Cell col=\"2\" style=\"align:right;\" text=\"bind:QTY\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\" mask=\"##:##\"/><Cell col=\"8\" mask=\"##:##\"/><Cell col=\"9\"/><Cell col=\"10\" mask=\"##:##\"/><Cell col=\"11\" mask=\"##:##\"/><Cell col=\"12\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_toggle00", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);

            obj = new Button("btn_search00", "absolute", null, "0", "57", "21", "15", null, this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", "98.13%", "43", null, null, this);
            obj.set_taborder("7");
            obj.set_scrollbars("none");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("sta_searchType", "absolute", "15", "10", "77", "21", null, null, this.div_search);
            obj.set_taborder("37");
            obj.set_text("등록일자");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_to", "absolute", "204", "10", "99", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("38");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static08", "absolute", "194", "10", "9", "21", null, null, this.div_search);
            obj.set_taborder("39");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_from", "absolute", "94", "10", "99", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("40");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("sta_status", "absolute", "334", "10", "77", "21", null, null, this.div_search);
            obj.set_taborder("41");
            obj.set_text("처리상태");
            obj.set_cssclass("sta_WFSA_Label");
            obj.getSetter("index").set("0");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_satus", "absolute", "413", "10", "99", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_satus_innerdataset = new Dataset("cbo_satus_innerdataset", this.div_search.cbo_satus);
            cbo_satus_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">처리중</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">처리완료</Col></Row></Rows>");
            obj.set_innerdataset(cbo_satus_innerdataset);
            obj.set_taborder("43");
            obj.set_value("0");
            obj.set_text("전체");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj = new Static("cbo_status00", "absolute", "543", "10", "77", "21", null, null, this.div_search);
            obj.set_taborder("44");
            obj.set_text("응대자");
            obj.set_cssclass("sta_WFSA_Label");
            obj.getSetter("index").set("0");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_rspId", "absolute", "622", "10", "99", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_rspId_innerdataset = new Dataset("cbo_rspId_innerdataset", this.div_search.cbo_rspId);
            cbo_rspId_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">처리중</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">처리완료</Col></Row></Rows>");
            obj.set_innerdataset(cbo_rspId_innerdataset);
            obj.set_taborder("45");
            obj.set_value("0");
            obj.set_text("전체");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");


            
            // Layout Functions
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
            obj = new Layout("default", "", 0, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("7");
            		p.set_scrollbars("none");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("고객응대정보");

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
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_6610.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_6610.xfdl", function() {
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {   
           this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
           //페이지 로딩후 실행부분   
           /*초기값세팅*/   
           
           /*조회 호출*/
           this.btn_search.click();  
        }
         
         
         /*조회*/
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_paging(1);// 처음조회시 1페이지를 조회한다.
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
         /*Paging 처리*/
        this.fn_paging = function(vPageNum)
        { 	  	 
        	this.ds_pageVO.clearData();
        	this.ds_mb.clearData();     //Grid에 Binding된 Dataset명
        	
        	this.ds_pageVO.addRow(); 
        	
        	var vPageSize   = this.div_search.cbo_pageNum.value; //Grid에 보여줄 Row수 선택
        	var vTotalCount = 0;	//전체건수. 화면조회후 리턴받아 사용 (구동시 갱신)
        	
         	this.ds_pageVO.setColumn(0,"CURRENT_PAGE",vPageNum); //현재 페이지
         	this.ds_pageVO.setColumn(0,"PAGE_SIZE",vPageSize);
         	this.ds_pageVO.setColumn(0,"TOTAL_ROW_COUNT",vTotalCount);
        	 
        	var argumentObj = "";
        	
        	this.fn_retrieveMbInqList();
        } 

        /*조회-서비스 Call*/ 
        this.fn_retrieveMbInqList = function()
        {
        	var sParams = "MB_ID="+this.gfn_nullToEmpty(this.div_search.edt_MB_ID.value)
        				+ " USR_NM="+this.gfn_nullToEmpty(this.div_search.edt_USR_NM.value)
        				+ " PAY_STS_C="+this.gfn_nullToEmpty(this.div_search.cbo_PAY_STS_C.value)
        				+ " NA_TRPL_C="+this.gfn_nullToEmpty(this.div_search.edt_NA_TRPL_C.value)
        				+ " CLNTNM="+this.gfn_nullToEmpty(this.div_search.edt_CLNTNM.value)
        				+ " PRC_STSC="+this.gfn_nullToEmpty(this.div_search.cbo_PRC_STSC.value)
        				;
        	
        	var sSvcID        = "mbList";
        	var sURL          ="svc::rest/mg/mbcslt/retrieveMbInqList";	
        	 
        	var sInDatasets   = "ds_pageVO=ds_pageVO";
        	var sOutDatasets  = "ds_mb=ds_mb ds_pageVO=ds_pageVO" ;	
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

        
         /*체크박스선택시 이벤트*/
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
        	
        	this.ds_mb.addColumn("CHK", "string");
        	this.ds_mb.addColumn("NUMBER", "string");
        	
        	for(var i = 0 ; i < this.ds_mb.rowcount; i++)
        	{
        		this.ds_mb.setColumn(i,"CHK",0);
        	 	//this.ds_mb.setColumn(i,"NUMBER",(current_page-1)*(page_size)+(i+1));
        		this.ds_mb.setColumn(i,"NUMBER",sTotal - (current_page-1) * page_size - i);
        	}
        	
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "mbList"){			
        	 		if(this.ds_mb.rowcount > 0)
        				{ 		
        					this.div_list.div_paging.fn_pageSet(sTotal, page_size,"div_paging",current_page);	
        				}	
        	 		else if(this.ds_mb.rowcount == 0){
        	 			this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        	 			this.div_list.div_paging.fn_pageSet(0, 0,"div_paging",current_page);
        	 		}
        		}else{
        			if(this.ds_mb.rowcount == 0){
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			}
        		}
        		this.resetScroll();	
        	}	
        }
         

        this.btn_MB_INF_onclick = function(obj,e)
        {
        	var checkCnt =0 ;	//선택된 체크박스 개수
        	var position =0 ;	//선택된 체크박스 위치
        	for(var i = 0 ; i < this.ds_mb.rowcount; i++){		
        		if(this.ds_mb.getColumn(i, "CHK") =="1"){
        			checkCnt = checkCnt +1;			
        			position = i;
        		}
        	}

        	if(checkCnt > 1){
        		alert("하나만 선택해주시기 바랍니다.");
        		this.ds_param.clearData();
        		return;
        	}else if(checkCnt == 0){
        		alert("회원정보를 보기 위한 회원을 선택해 주시기 바랍니다.");
        		this.ds_param.clearData();
        		return;
        	}else{
        		var mb_id = this.ds_mb.getColumn(this.ds_mb.rowposition, "MB_ID");
        		alert("MB_ID=" + mb_id);
        		var oArg = {paramMode:"U", dsArg:this.ds_mb, MB_ID:mb_id};
        		var sOption = "autosize=true,title=true";
        		var sPopupCallBack = "fn_popupAfter";       
        		//this.gfn_openPopup("popId","OMG.MG::OMG_DS_SC_6511.xfdl",oArg,sOption,sPopupCallBack);
        	}
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_list.btn_toggle00.addEventHandler("onclick", this.div_list_btn_toggle00_onclick, this);
            this.btn_search00.addEventHandler("onclick", this.search, this);
            this.div_search.cbo_satus.addEventHandler("onitemchanged", this.cbo_svc_onitemchanged, this);
            this.div_search.cbo_rspId.addEventHandler("onitemchanged", this.cbo_svc_onitemchanged, this);

        };

        this.loadIncludeScript("OMG_DS_SC_6610.xfdl");
        this.loadPreloadList();
       
    };
}
)();
