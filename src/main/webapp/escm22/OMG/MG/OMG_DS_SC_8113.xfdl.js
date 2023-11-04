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
                this.set_name("OMG_DS_SC_8111");
                this.set_titletext("교육신청 블랙리스트 조회");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_edu", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_CNM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DEL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_param", this);
            obj._setContents("<ColumnInfo><Column id=\"EDU_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"GLN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_taborder("0");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "787", "0", "15", "490", null, null, this);
            obj.set_taborder("2");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "732", "21", "56", "8", null, null, this);
            obj.set_taborder("3");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "43", "15", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "15", "10", "103", "21", null, null, this.div_search);
            obj.set_taborder("16");
            obj.set_text("일정");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 20 0 11");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "285", "10", "123", "21", null, null, this.div_search);
            obj.set_taborder("19");
            obj.set_text("업체코드 (GLN)");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 20 0 11");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edu_gln", "absolute", "397", "10", "140", "21", null, null, this.div_search);
            obj.set_taborder("20");
            obj.set_maxlength("13");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("edu_date", "absolute", "57", "10", "109", "21", null, null, this.div_search);
            obj.set_taborder("23");
            obj.set_url("common::calendarMonth.xfdl");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "97", null, null, "15", "1", this);
            obj.set_taborder("5");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Div("div_paging", "absolute", "28.59%", null, "338", "29", null, "-2", this.div_list);
            obj.set_taborder("9");
            obj.style.set_align("center middle");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_flag", "absolute", "346", "-25", null, "12", "364", null, this.div_list);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_comncList", "absolute", "0", "2", null, null, "0", "69", this.div_list);
            obj.set_taborder("8");
            obj.set_binddataset("ds_edu");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"271\"/><Column size=\"95\"/><Column size=\"100\"/><Column size=\"82\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"업체명\"/><Cell col=\"2\" text=\"등록자\"/><Cell col=\"3\" text=\"등록일\"/><Cell col=\"4\" text=\"삭제\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:NA_TRPL_CNM\"/><Cell col=\"2\" text=\"bind:REG_NM\"/><Cell col=\"3\" displaytype=\"date\" text=\"bind:REG_DATE\"/><Cell col=\"4\" displaytype=\"button\" text=\"bind:DEL\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);

            obj = new Button("btn_flag", "absolute", "347", "72", null, "12", "363", null, this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert", "absolute", null, "0", "41", "21", "78", null, this);
            obj.set_taborder("7");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_init", "absolute", null, "0", "51", "21", "121", null, this);
            obj.set_taborder("8");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 965, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 965, 444, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.set_text("Div02");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("교육신청 블랙리스트 조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item4","edt_simpTpc00","value","ds_in","SIMP_TPC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edu_date","value","ds_edu","EDU_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","ed_file","value","ds_edu","FILENAME");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
            this._addPreloadList("fdl", "common::calendarMonth.xfdl");
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_8113.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_8113.xfdl", function(exports) {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e) //공통
        {
           this.gfn_setInitForm(obj, e);
        }

        this.fn_afterFormOnload = function() //페이지 로딩후 실행부분
        {
        	this.div_search.edu_date._setValue(this.gfn_today("yyyyMM"));
        	this.fn_search_onclick();
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/	

        this.fn_search_onclick = function(obj,e)
        {
        	this.fn_paging(1);// 처음조회시 1페이지를 조회한다.
        }

        /* Paging 처리 */
        this.fn_paging = function(vPageNum)
        {
        	this.ds_pageVO.clearData();
        	this.ds_pageVO.addRow();
        	
        	var vPageSize   = 20; // Grid에 보여줄 Row수 선택
        	var vTotalCount = 0;	// 전체건수. 화면조회후 리턴받아 사용 (구동시 갱신)
        	
         	this.ds_pageVO.setColumn(0,"CURRENT_PAGE",vPageNum); //현재 페이지
         	this.ds_pageVO.setColumn(0,"PAGE_SIZE",vPageSize);
         	this.ds_pageVO.setColumn(0,"TOTAL_ROW_COUNT",vTotalCount);
        	
        	var argumentObj = "";
        	
        	this.fn_retrieveEducationBlackList();
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/

        this.fn_init_onclick = function(obj,e)
        {
        	this.div_search.edu_date._setValue(this.gfn_today("yyyyMM"));
        	this.div_search.edu_gln.set_value(null);
        }

        /* 조회-서비스 Call */ 
        this.fn_retrieveEducationBlackList = function()
        {
        	this.ds_param.clearData();
        	this.ds_param.addRow();
        	
        	this.ds_param.setColumn(0, "EDU_DATE", this.gfn_nullToEmpty(this.div_search.edu_date._getValue()));
        	this.ds_param.setColumn(0, "GLN", this.gfn_nullToEmpty(this.div_search.edu_gln.value));
        	
        	var sSvcID        = "retrieveEducationBlackList";
        	var sURL          = "svc::rest/mg/edu/retrieveEducationBlackList";
        	var sInDatasets   = "ds_param=ds_param ds_pageVO=ds_pageVO";
        	var sOutDatasets  = "ds_edu=ds_edu ds_pageVO=ds_pageVO";
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        this.fn_delete_onclick = function(obj,e)
        {
        	var rowPos = e.row;
        	var cellPos = e.cell;
        	
        	if (obj.getCellValue(rowPos, cellPos) == '삭제') {
        		if (!application.confirm("삭제하시겠습니까?")) {
        			return;
        		}
        		
        		var seq = this.ds_edu.getColumn(rowPos, "SEQ");
        		var gln = this.ds_edu.getColumn(rowPos, "NA_TRPL_C");
        		
        		var sSvcID        = "deleteEducationBlackList";
        		var sURL          = "svc::rest/mg/edu/deleteEducationBlackList";
        		var sInDatasets   = "";
        		var sOutDatasets  = "";
        		var sArgument     = "seq=" + seq + " gln=" + gln;
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회
        		
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        	}
        }

        /* 콜백메소드 */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {		
        	var current_page = this.ds_pageVO.getColumn(0, "CURRENT_PAGE");
        	var page_size    = this.ds_pageVO.getColumn(0,"PAGE_SIZE");
        	var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        	
        	trace("ErrorCode " + ErrorCode);
        	
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        	 	if (svcID == "fn_retrieveEducationBlackList") {
        	 		if (this.ds_edu.rowcount > 0) {
        				
        			}
        		} else if (svcID == "deleteEducationMember") {
        			this.alert("삭제가 완료되었습니다.");
        			this.fn_search_onclick();
        		}
        	}
        }

        /* 블랙리스트 등록 */
        this.fn_insert_onclick = function(obj,e)
        {
        	var oArg = {};
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("OMG_DS_SC_8114", "OMG.MG::OMG_DS_SC_8114.xfdl", oArg, sOption, sPopupCallBack);
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	trace(" strId : " + strId + " strVal : " + strVal);
        	this.fn_search_onclick();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.fn_search_onclick, this);
            this.div_search.edu_gln.addEventHandler("oneditclick", this.div_search_edt_menuId_oneditclick, this);
            this.div_list.btn_flag.addEventHandler("onclick", this.btn_flag_onclick, this);
            this.div_list.grd_comncList.addEventHandler("oncellclick", this.fn_delete_onclick, this);
            this.btn_flag.addEventHandler("onclick", this.btn_flag_onclick, this);
            this.btn_insert.addEventHandler("onclick", this.fn_insert_onclick, this);
            this.btn_init.addEventHandler("onclick", this.fn_init_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_8113.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
