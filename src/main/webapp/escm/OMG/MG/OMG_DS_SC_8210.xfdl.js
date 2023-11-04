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
                this.set_name("OMG_DS_SC_8210");
                this.set_titletext("교육 리스트");
                this.set_name("OMG_DS_SC_6120");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_edu", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"STRING\" size=\"50\"/><Column id=\"ATTACHMENT\" type=\"STRING\" size=\"30\"/><Column id=\"TITLE\" type=\"STRING\" size=\"200\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"30\"/><Column id=\"EDU_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"SUBSCRIPTION_YN\" type=\"STRING\" size=\"8\"/><Column id=\"CNT\" type=\"STRING\" size=\"200\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"CBO_SIMP_TPC\" type=\"STRING\" size=\"32\"/><Column id=\"EDT_SIMP_TPC\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
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
            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "18", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WFSA_Searchbtn");
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

            obj = new Div("div_search", "absolute", "0", "29", null, "43", "15", null, this);
            obj.set_taborder("10");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "367", "12", "139", "21", null, null, this.div_search);
            obj.set_taborder("6");
            obj.set_text("페이지당 게시물수");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 20 0 11");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_pageNum", "absolute", "506", "12", "60", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_pageNum_innerdataset = new Dataset("cbo_pageNum_innerdataset", this.div_search.cbo_pageNum);
            cbo_pageNum_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row></Rows>");
            obj.set_innerdataset(cbo_pageNum_innerdataset);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("20");
            obj.set_index("-1");
            obj = new Edit("edt_simpTpc", "absolute", "105", "10", "140", "21", null, null, this.div_search);
            obj.set_taborder("11");
            obj.set_maxlength("30");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_simpTpc", "absolute", "15", "10", "85", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_simpTpc_innerdataset = new Dataset("cbo_simpTpc_innerdataset", this.div_search.cbo_simpTpc);
            cbo_simpTpc_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">제목</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">작성자</Col></Row></Rows>");
            obj.set_innerdataset(cbo_simpTpc_innerdataset);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("01");

            obj = new Div("div_list", "absolute", "0", "97", null, null, "15", "1", this);
            obj.set_taborder("0");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_comncList", "absolute", "0", "2", null, null, "0", "69", this.div_list);
            obj.set_taborder("2");
            obj.set_binddataset("ds_edu");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"50\"/><Column size=\"350\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"50\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"첨부\"/><Cell col=\"2\" text=\"제목\"/><Cell col=\"3\" text=\"작성자\"/><Cell col=\"4\" text=\"날짜\"/><Cell col=\"5\" text=\"등록가능여부\"/><Cell col=\"6\" text=\"조회수\"/></Band><Band id=\"body\"><Cell text=\"bind:SEQ\"/><Cell col=\"1\" text=\"bind:ATTACHMENT\"/><Cell col=\"2\" text=\"bind:TITLE\"/><Cell col=\"3\" text=\"bind:REG_NM\"/><Cell col=\"4\" displaytype=\"date\" text=\"bind:EDU_DATE\"/><Cell col=\"5\" text=\"bind:SUBSCRIPTION_YN\"/><Cell col=\"6\" text=\"bind:CNT\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_paging", "absolute", "28.55%", null, "338", "29", null, "-2", this.div_list);
            obj.set_taborder("6");
            obj.style.set_align("center middle");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_flag", "absolute", "346", "-25", null, "12", "364", null, this.div_list);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);

            obj = new Button("btn_flag", "absolute", "347", "72", null, "12", "363", null, this);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.addChild(obj.name, obj);

            obj = new Button("btn_subscription_search", "absolute", null, "0", "55", "21", "78", null, this);
            obj.set_taborder("15");
            obj.set_text("신청조회");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
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
            		p.set_titletext("교육 리스트");

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
        this.addIncludeScript("OMG_DS_SC_8210.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_8210.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        this.seq = "";

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	this.div_list.grd_comncList.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	
        	this.btn_search_onclick();
        }
         
        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

         /*조회버튼 이벤트*/
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
        	this.ds_pageVO.addRow();
        	
        	var vPageSize   = this.div_search.cbo_pageNum.value; // Grid에 보여줄 Row수 선택
        	var vTotalCount = 0;	// 전체건수. 화면조회후 리턴받아 사용 (구동시 갱신)
        	
         	this.ds_pageVO.setColumn(0,"CURRENT_PAGE",vPageNum); //현재 페이지
         	this.ds_pageVO.setColumn(0,"PAGE_SIZE",vPageSize);
         	this.ds_pageVO.setColumn(0,"TOTAL_ROW_COUNT",vTotalCount);
        	 
        	var argumentObj = "";
        	
        	this.fn_retrieveComnCList();
        } 

         /*조회-서비스 Call*/ 
        this.fn_retrieveComnCList = function()
        {
        	this.ds_param.clearData();
        	this.ds_param.addRow();
        	
        	this.ds_param.setColumn(0, "CBO_SIMP_TPC", this.gfn_nullToEmpty(this.div_search.cbo_simpTpc.value));
        	this.ds_param.setColumn(0, "EDT_SIMP_TPC", this.gfn_nullToEmpty(this.div_search.edt_simpTpc.value));
        	
        	var sSvcID        = "retrieveEducationList";
        	var sURL          = "svc::rest/mg/edu/retrieveEducationList";
        	var sInDatasets   = "ds_param=ds_param ds_pageVO=ds_pageVO";
        	var sOutDatasets  = "ds_edu=ds_edu ds_pageVO=ds_pageVO";
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

         /*팝업호출확인하기*/
        this.fn_popupAfter = function(strId,strVal)
        {	
        	this.btn_search.click();
        }

         /*그리드클릭*/
        this.grd_oncellclick = function(obj,e)
        {
        	if (this.gfn_isNull(this.ds_edu.getColumn(e.row, "SEQ"))) {
        		trace("seq is null.");
        		return;
        	}
        	
        	this.fn_openPopup(e.row); // 조회
        }

        this.fn_openPopup = function(nRow)
        {
        	var oArg = {seq:this.ds_edu.getColumn(nRow, "SEQ")};
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("OMG_DS_SC_8211", "OMG.MG::OMG_DS_SC_8211.xfdl", oArg, sOption, sPopupCallBack);
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	trace(" strId : " + strId + " strVal : " + strVal);
        	switch(strId)
        	{
        		case "OMG_DS_SC_8211":
        			 
        			 break;
        	}
        	
        }

         /*콜백메소드*/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {		
        	var current_page = this.ds_pageVO.getColumn(0, "CURRENT_PAGE");
        	var page_size    = this.ds_pageVO.getColumn(0,"PAGE_SIZE");
        	var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        	
        	trace("ErrorCode " + ErrorCode);
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        	 	if(svcID == "retrieveEducationList"){
        			
        	 		if(this.ds_edu.rowcount > 0)
        	 		{
        				this.seq = this.ds_edu.getColumn(0, "SEQ");
        				this.div_list.div_paging.fn_pageSet(sTotal, page_size, "div_paging", current_page);
        			}
        			else if(this.ds_edu.rowcount == 0)
        			{
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        	 			this.div_list.div_paging.fn_pageSet(0, 0, "div_paging", current_page);
        			}
        		}
        	}
        }

        this.btn_flag_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        this.fn_subscription_search = function(obj,e)
        {
        	var oArg = {};
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("OMG_DS_SC_8213", "OMG.MG::OMG_DS_SC_8213.xfdl", oArg, sOption, sPopupCallBack);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.div_search.Static01.addEventHandler("onclick", this.div_search_Static01_onclick, this);
            this.div_search.edt_simpTpc.addEventHandler("oneditclick", this.div_search_edt_menuId_oneditclick, this);
            this.div_list.grd_comncList.addEventHandler("oncellclick", this.grd_oncellclick, this);
            this.div_list.btn_flag.addEventHandler("onclick", this.btn_flag_onclick, this);
            this.btn_flag.addEventHandler("onclick", this.btn_flag_onclick, this);
            this.btn_subscription_search.addEventHandler("onclick", this.fn_subscription_search, this);

        };

        this.loadIncludeScript("OMG_DS_SC_8210.xfdl");
        this.loadPreloadList();
       
    };
}
)();
