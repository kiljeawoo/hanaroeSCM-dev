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
                this.set_name("OMG_DS_SC_6515");
                this.set_titletext("세금계산서 발행내역");
                this.set_scrollbars("autoboth");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
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

            obj = new Dataset("ds_result", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RN\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_MTALNM\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_MTALNM\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"BUY_CHRR_EMAIL1\" type=\"STRING\" size=\"256\"/><Column id=\"CRT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PBC_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SPRTT\" type=\"STRING\" size=\"256\"/><Column id=\"TXA_TT\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"SOAC_PBC_STSC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NTS_PRC_STSC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PBC_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"LATCNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static87", "absolute", "98.13%", "1", "15", "1195", null, null, this);
            obj.set_taborder("1");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "1.37%", "67", null, "20", "-25.9%", null, this);
            obj.set_taborder("8");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "2.86%", "697", null, "20", "-24.53%", null, this);
            obj.set_taborder("10");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static89", "absolute", "11", "9", null, "21", "76.59%", null, this);
            obj.set_taborder("13");
            obj.set_text("세금계산서 발행내역");
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

            obj = new Div("div_search", "absolute", "11", "39", null, "95", "15", null, this);
            obj.set_taborder("70");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "14", "10", null, "21", "656", null, this.div_search);
            obj.set_taborder("101");
            obj.set_text("검색기준");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "14", "36", null, "21", "656", null, this.div_search);
            obj.set_taborder("102");
            obj.set_text("검색기간");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "414", "10", null, "21", "256", null, this.div_search);
            obj.set_taborder("104");
            obj.set_text("매입/매출");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "14", "62", null, "21", "656", null, this.div_search);
            obj.set_taborder("109");
            obj.set_text("문서상태");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_to", "absolute", "224", "36", "97", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("120");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static04", "absolute", "382", "36", "11", "21", null, null, this.div_search);
            obj.set_taborder("121");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_from", "absolute", "116", "36", "97", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("122");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static03", "absolute", "414", "34", null, "21", "202", null, this.div_search);
            obj.set_taborder("123");
            obj.set_text("전자세금계산서ID");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_pbcSqno", "absolute", "546", "34", "199", "21", null, null, this.div_search);
            obj.set_taborder("124");
            this.div_search.addChild(obj.name, obj);
            obj = new CheckBox("chk_05", "absolute", "408", "62", "73", "21", null, null, this.div_search);
            obj.set_taborder("126");
            obj.set_text("반려");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_value("Y");
            this.div_search.addChild(obj.name, obj);
            obj = new CheckBox("chk_04", "absolute", "335", "62", "73", "21", null, null, this.div_search);
            obj.set_taborder("128");
            obj.set_text("승인취소");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_value("Y");
            this.div_search.addChild(obj.name, obj);
            obj = new CheckBox("chk_03", "absolute", "262", "62", "73", "21", null, null, this.div_search);
            obj.set_taborder("129");
            obj.set_text("승인");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_value("Y");
            this.div_search.addChild(obj.name, obj);
            obj = new CheckBox("chk_02", "absolute", "189", "62", "73", "21", null, null, this.div_search);
            obj.set_taborder("130");
            obj.set_text("개봉");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("Y");
            this.div_search.addChild(obj.name, obj);
            obj = new CheckBox("chk_01", "absolute", "116", "62", "73", "21", null, null, this.div_search);
            obj.set_taborder("131");
            obj.set_text("미개봉");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("Y");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_txType", "absolute", "547", "10", "171", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_txType_innerdataset = new Dataset("rdo_txType_innerdataset", this.div_search.rdo_txType);
            rdo_txType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">SALE</Col><Col id=\"datacolumn\">매출</Col></Row><Row><Col id=\"codecolumn\">BUY</Col><Col id=\"datacolumn\">매입</Col></Row></Rows>");
            obj.set_innerdataset(rdo_txType_innerdataset);
            obj.set_taborder("132");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_value("SALE");
            obj.set_index("0");
            obj = new CheckBox("chk_06", "absolute", "481", "62", null, "21", "219", null, this.div_search);
            obj.set_taborder("133");
            obj.set_text("발행");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_value("Y");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_dateType", "absolute", "115", "10", "22.12%", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_dateType_innerdataset = new Dataset("rdo_dateType_innerdataset", this.div_search.rdo_dateType);
            rdo_dateType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">CRT_DT</Col><Col id=\"datacolumn\">작성일자</Col></Row><Row><Col id=\"codecolumn\">PBC_DT</Col><Col id=\"datacolumn\">발행일자</Col></Row></Rows>");
            obj.set_innerdataset(rdo_dateType_innerdataset);
            obj.set_taborder("134");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");

            obj = new Edit("edt_MB_ID", "absolute", "12", "531", "17.43%", "21", null, null, this);
            obj.set_taborder("72");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_result", "absolute", "0%", "133", null, null, "15", "3", this);
            obj.set_taborder("71");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_txbilPbcBrkList", "absolute", "11", "26", null, null, "0", "24", this.div_result);
            obj.set_taborder("13");
            obj.set_binddataset("ds_result");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_scrollbars("autoboth");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"123\"/><Column size=\"123\"/><Column size=\"123\"/><Column size=\"123\"/><Column size=\"123\"/><Column size=\"80\"/><Column size=\"73\"/><Column size=\"89\"/><Column size=\"89\"/><Column size=\"89\"/><Column size=\"135\"/><Column size=\"123\"/><Column size=\"123\"/><Column size=\"125\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"번호\"/><Cell col=\"1\" colspan=\"2\" text=\"공급자\"/><Cell col=\"3\" colspan=\"3\" text=\"공급받는자\"/><Cell col=\"6\" rowspan=\"2\" text=\"작성일자\"/><Cell col=\"7\" rowspan=\"2\" text=\"발행일자\"/><Cell col=\"8\" rowspan=\"2\" text=\"공금가액\"/><Cell col=\"9\" rowspan=\"2\" text=\"세액\"/><Cell col=\"10\" rowspan=\"2\" text=\"합계금액\"/><Cell col=\"11\" rowspan=\"2\" text=\"품목\"/><Cell col=\"12\" rowspan=\"2\" text=\"문서상태\"/><Cell col=\"13\" rowspan=\"2\" text=\"국세청신고\"/><Cell col=\"14\" rowspan=\"2\" text=\"전자세금계산서ID\"/><Cell row=\"1\" col=\"1\" text=\"사업자번호\"/><Cell row=\"1\" col=\"2\" text=\"상호명\"/><Cell row=\"1\" col=\"3\" text=\"사업자번호\"/><Cell row=\"1\" col=\"4\" text=\"상호명\"/><Cell row=\"1\" col=\"5\" text=\"이메일\"/></Band><Band id=\"body\"><Cell text=\"bind:RN\"/><Cell col=\"1\" text=\"bind:SPLR_BZNO\" mask=\"###-##-#####\"/><Cell col=\"2\" style=\"align:left center;\" text=\"bind:SPLR_MTALNM\"/><Cell col=\"3\" style=\"align:center middle;\" text=\"bind:BUY_BZNO\" mask=\"###-##-##\"/><Cell col=\"4\" style=\"align:center middle;\" text=\"bind:BUY_MTALNM\"/><Cell col=\"5\" style=\"align:left middle;\" text=\"bind:BUY_CHRR_EMAIL1\"/><Cell col=\"6\" style=\"align:center middle;\" text=\"bind:CRT_DT\" mask=\"####-##-##\"/><Cell col=\"7\" style=\"align:center middle;\" text=\"bind:PBC_DT\" mask=\"####-##-##\"/><Cell col=\"8\" displaytype=\"number\" text=\"bind:SPRTT\"/><Cell col=\"9\" text=\"bind:TXA_TT\"/><Cell col=\"10\" displaytype=\"number\" text=\"bind:TOT_AM\"/><Cell col=\"11\" text=\"bind:LATCNM\"/><Cell col=\"12\" text=\"bind:SOAC_PBC_STSC_NM\"/><Cell col=\"13\" text=\"bind:SOAC_PBC_STSC_NM\"/><Cell col=\"14\" text=\"bind:PBC_SQNO\"/></Band></Format></Formats>");
            this.div_result.addChild(obj.name, obj);
            obj = new Button("Button75", "absolute", "46.07%", "0", "62", "12", null, null, this.div_result);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_result.addChild(obj.name, obj);

            obj = new Div("div_paging", "absolute", "226", null, "42.84%", "29", null, "0", this);
            obj.set_taborder("73");
            obj.style.set_align("center middle");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 95, this.div_search,
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
            		p.set_titletext("세금계산서 발행내역");
            		p.set_scrollbars("autoboth");

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
        this.addIncludeScript("OMG_DS_SC_6515.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_6515.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {   
           this.gfn_setInitForm(obj, e); //공통
           this.div_result.grd_txbilPbcBrkList.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        }

        this.fn_afterFormOnload = function()
        {
           //페이지 로딩후 실행부분   
           /*초기값세팅*/            
        }
         
        /*******************************************************************************
        	TAB호출시 호출되는 함수
        *******************************************************************************/
        this.fn_retriveUsrInfo = function (mb_id){				
        	
        	var initFrom = application.gv_today.substring(0,6)+"01" ;	
        	this.div_search.cal_from.set_value(initFrom);
            this.div_search.cal_to.set_value(application.gv_today);
        	this.edt_MB_ID.set_value(mb_id);	
        	//this.fn_paging(1);
        }
         
         
         /*조회*/
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_paging(1);// 처음조회시 1페이지를 조회한다.
        }

        /*******************************************************************************
        	페이징처리
        *******************************************************************************/
        this.fn_paging = function(vPageNum)
        { 	  	 
        	this.ds_pageVO.clearData();  
        	this.ds_result.clearData();     //Grid에 Binding된 Dataset명
        	
        	this.ds_pageVO.addRow(); 
        	
        	var vPageSize   = 20;	//Grid에 보여줄 Row수 선택
        	var vTotalCount = 0;	//전체건수. 화면조회후 리턴받아 사용 (구동시 갱신)
        	
         	this.ds_pageVO.setColumn(0,"CURRENT_PAGE",vPageNum); //현재 페이지
         	this.ds_pageVO.setColumn(0,"PAGE_SIZE",vPageSize);
         	this.ds_pageVO.setColumn(0,"TOTAL_ROW_COUNT",vTotalCount);
        	 
        	var argumentObj = "";
        	
        	this.fn_retrieveTxbilPbcBrkList();
        }

        /*******************************************************************************
        	조회메소드
        *******************************************************************************/
        this.fn_retrieveTxbilPbcBrkList = function()
        {
        	var sParams = "MB_ID="+this.gfn_nullToEmpty(this.edt_MB_ID.value)
        				+ " CHK_01="+this.gfn_nullToEmpty(this.div_search.chk_01.value)
        				+ " CHK_02="+this.gfn_nullToEmpty(this.div_search.chk_02.value)
        				+ " CHK_03="+this.gfn_nullToEmpty(this.div_search.chk_03.value)
        				+ " CHK_04="+this.gfn_nullToEmpty(this.div_search.chk_04.value)
        				+ " CHK_05="+this.gfn_nullToEmpty(this.div_search.chk_05.value)
        				+ " CHK_06="+this.gfn_nullToEmpty(this.div_search.chk_06.value)
        				+ " DATE_TYPE="+this.gfn_nullToEmpty(this.div_search.rdo_dateType.value)
        				+ " TX_TYPE="+this.gfn_nullToEmpty(this.div_search.rdo_txType.value)
        				+ " FROM="+this.gfn_nullToEmpty(this.div_search.cal_from.value)
        				+ " TO="+this.gfn_nullToEmpty(this.div_search.cal_to.value)
        				+ " PBC_SQNO="+this.gfn_nullToEmpty(this.div_search.edt_pbcSqno.value)
        				;
        	
        	var sSvcID        = "retrieveTxbilPbcBrkList";
        	var sURL          ="svc::rest/mg/mbcslt/retrieveTxbilPbcBrkList";
        	var sInDatasets   = "ds_pageVO=ds_pageVO";
        	var sOutDatasets  = "ds_result=ds_result ds_pageVO=ds_pageVO" ;	
        	var sArgument     = sParams;	
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /*******************************************************************************
        	콜백메소드
        *******************************************************************************/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        	var current_page = this.ds_pageVO.getColumn(0,"CURRENT_PAGE");
        	var page_size    = this.ds_pageVO.getColumn(0,"PAGE_SIZE");
        	var sTotal    	 = this.ds_pageVO.getColumn(0,"TOTAL_ROW_COUNT");	
        	
        	if(ErrorCode < 0){
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{	
        	 	if(svcID == "retrieveTxbilPbcBrkList"){
        			if(this.ds_result.rowcount == 0){
        				//this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        				this.div_result.div_paging.fn_pageSet(0, 0,"div_paging",current_page);
        			} else if(this.ds_result.rowcount > 0){
        				this.div_result.div_paging.fn_pageSet(sTotal, page_size,"div_paging",current_page);	
        			}
        	 	}else{
        			alert("서비스ID매핑이 잘못되었습니다.");
        	 	}	 	
        	}		  
        }
         
        this.div_result_Button75_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_result);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.div_result.Button75.addEventHandler("onclick", this.div_result_Button75_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_6515.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
