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
                this.set_titletext("교육신청 조회/취소");
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
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"STRING\" size=\"32\"/><Column id=\"MSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY\" type=\"STRING\" size=\"32\"/><Column id=\"NAME\" type=\"STRING\" size=\"30\"/><Column id=\"POSITION\" type=\"STRING\" size=\"20\"/><Column id=\"TEL\" type=\"STRING\" size=\"150\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"100\"/><Column id=\"CALCEL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_param", this);
            obj._setContents("<ColumnInfo><Column id=\"EDU_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("ds_edu_excel", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"STRING\" size=\"32\"/><Column id=\"MSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY\" type=\"STRING\" size=\"32\"/><Column id=\"NAME\" type=\"STRING\" size=\"30\"/><Column id=\"POSITION\" type=\"STRING\" size=\"20\"/><Column id=\"TEL\" type=\"STRING\" size=\"150\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
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
            obj = new Static("Static00", "absolute", "550", "10", "103", "21", null, null, this.div_search);
            obj.set_taborder("17");
            obj.set_text("신청인");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 20 0 11");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edu_usr", "absolute", "607", "10", "140", "21", null, null, this.div_search);
            obj.set_taborder("18");
            obj.set_maxlength("30");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "270", "10", "103", "21", null, null, this.div_search);
            obj.set_taborder("19");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 20 0 11");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edu_comp", "absolute", "327", "10", "140", "21", null, null, this.div_search);
            obj.set_taborder("20");
            obj.set_maxlength("30");
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
            obj = new Grid("grd_excel", "absolute", "10", "12", null, null, "-10", "59", this.div_list);
            obj.set_taborder("11");
            obj.set_binddataset("ds_edu_excel");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"80\"/><Column size=\"271\"/><Column size=\"95\"/><Column size=\"134\"/><Column size=\"180\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"신청번호\"/><Cell col=\"2\" text=\"업체명\"/><Cell col=\"3\" text=\"신청자\"/><Cell col=\"4\" text=\"직급\"/><Cell col=\"5\" text=\"연락처\"/><Cell col=\"6\" text=\"이메일\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:MSEQ\"/><Cell col=\"2\" text=\"bind:COMPANY\"/><Cell col=\"3\" text=\"bind:NAME\"/><Cell col=\"4\" displaytype=\"normal\" text=\"bind:POSITION\"/><Cell col=\"5\" text=\"bind:TEL\"/><Cell col=\"6\" text=\"bind:EMAIL\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_comncList", "absolute", "0", "2", null, null, "0", "69", this.div_list);
            obj.set_taborder("8");
            obj.set_binddataset("ds_edu");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"80\"/><Column size=\"271\"/><Column size=\"95\"/><Column size=\"134\"/><Column size=\"180\"/><Column size=\"100\"/><Column size=\"82\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"신청번호\"/><Cell col=\"2\" text=\"업체명\"/><Cell col=\"3\" text=\"신청자\"/><Cell col=\"4\" text=\"직급\"/><Cell col=\"5\" text=\"연락처\"/><Cell col=\"6\" text=\"이메일\"/><Cell col=\"7\" text=\"취소\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:MSEQ\"/><Cell col=\"2\" text=\"bind:COMPANY\"/><Cell col=\"3\" text=\"bind:NAME\"/><Cell col=\"4\" displaytype=\"normal\" text=\"bind:POSITION\"/><Cell col=\"5\" text=\"bind:TEL\"/><Cell col=\"6\" text=\"bind:EMAIL\"/><Cell col=\"7\" displaytype=\"button\" text=\"bind:CANCEL\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);

            obj = new Button("btn_flag", "absolute", "347", "72", null, "12", "363", null, this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "78", null, this);
            obj.set_taborder("7");
            obj.set_text("엑셀");
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
            		p.set_titletext("교육신청 조회/취소");

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
        this.addIncludeScript("OMG_DS_SC_8112.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_8112.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

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
        	
        	this.fn_retrieveEducationMemberList();
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/

        this.fn_excel_onclick = function(obj,e)
        {
        	this.ds_param.clearData();
        	this.ds_param.addRow();
        	
        	this.ds_param.setColumn(0, "EDU_DATE", this.gfn_nullToEmpty(this.div_search.edu_date._getValue()));
        	this.ds_param.setColumn(0, "COMPANY", this.gfn_nullToEmpty(this.div_search.edu_comp.value));
        	this.ds_param.setColumn(0, "NAME", this.gfn_nullToEmpty(this.div_search.edu_usr.value));
        	
        	var sSvcID        = "educationMemberExcelDownload";
        	var sURL          = "svc::rest/mg/edu/educationMemberExcelDownload";
        	var sInDatasets   = "ds_param=ds_param";
        	var sOutDatasets  = "ds_edu_excel=ds_edu_excel";
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        this.fn_init_onclick = function(obj,e)
        {
        	this.div_search.edu_date._setValue(this.gfn_today("yyyyMM"));
        	this.div_search.edu_comp.set_value(null);
        	this.div_search.edu_usr.set_value(null);
        }

        /* 조회-서비스 Call */ 
        this.fn_retrieveEducationMemberList = function()
        {
        	this.ds_param.clearData();
        	this.ds_param.addRow();
        	
        	this.ds_param.setColumn(0, "EDU_DATE", this.gfn_nullToEmpty(this.div_search.edu_date._getValue()));
        	this.ds_param.setColumn(0, "COMPANY", this.gfn_nullToEmpty(this.div_search.edu_comp.value));
        	this.ds_param.setColumn(0, "NAME", this.gfn_nullToEmpty(this.div_search.edu_usr.value));
        	
        	var sSvcID        = "retrieveEducationMemberList";
        	var sURL          = "svc::rest/mg/edu/retrieveEducationMemberList";
        	var sInDatasets   = "ds_param=ds_param ds_pageVO=ds_pageVO";
        	var sOutDatasets  = "ds_edu=ds_edu ds_pageVO=ds_pageVO";
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        this.fn_cancel_onclick = function(obj,e)
        {
        	var rowPos = e.row;
        	var cellPos = e.cell;
        	
        	if (obj.getCellValue(rowPos, cellPos) == '취소') {
        		if (!application.confirm("취소하시겠습니까?")) {
        			return;
        		}
        		
        		var seq = this.ds_edu.getColumn(rowPos, "SEQ");
        		var mseq = this.ds_edu.getColumn(rowPos, "MSEQ");
        		
        		var sSvcID        = "cancelEducationMember";
        		var sURL          = "svc::rest/mg/edu/cancelEducationMember";
        		var sInDatasets   = "";
        		var sOutDatasets  = "";
        		var sArgument     = "seq=" + seq + " mseq=" + mseq;
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
        	 	if (svcID == "retrieveEducationMemberList") {
        	 		if (this.ds_edu.rowcount > 0) {
        				this.seq = this.ds_edu.getColumn(0, "SEQ");
        				this.div_list.div_paging.fn_pageSet(sTotal, page_size, "div_paging", current_page);
        			} else if(this.ds_edu.rowcount == 0) {
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        	 			this.div_list.div_paging.fn_pageSet(0, 0, "div_paging", current_page);
        			}
        		} else if (svcID == "educationMemberExcelDownload") {
        			if (this.ds_edu.rowcount > 0) {
        				var today = this.gfn_today("yyyyMMdd");
        				
        				this.exportObj = new ExcelExportObject("Export00", this);
        				this.exportObj.addEventHandler("onsuccess" , this.fn_excelDownload_onsuccess , this);
        				this.exportObj.addEventHandler("onerror", this.fn_excelDownload_onerror, this);
        				
        				this.exportObj.set_exportfilename("EducationMemberList_" + today);
        				this.exportObj.set_exporturl(application.gv_server_url + "XExportImport");
        				this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.div_list.grd_excel, "Sheet1!A1");
        				this.exportObj.exportData();
        			} else {
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			}
        		} else if (svcID == "cancelEducationMember") {
        			this.alert("취소가 완료되었습니다.");
        			this.fn_search_onclick();
        		}
        	}
        }

        // 엑셀 다운로드 성공
        this.fn_excelDownload_onsuccess = function(obj,e)
        {
        	trace("excel download : success");
        }
        // 엑셀 다운로드 실패
        this.fn_excelDownload_onerror = function(obj,e)
        {
        	trace("excel download : error");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.fn_search_onclick, this);
            this.div_search.edu_usr.addEventHandler("oneditclick", this.div_search_edt_menuId_oneditclick, this);
            this.div_search.edu_comp.addEventHandler("oneditclick", this.div_search_edt_menuId_oneditclick, this);
            this.div_list.btn_flag.addEventHandler("onclick", this.btn_flag_onclick, this);
            this.div_list.grd_excel.addEventHandler("oncellclick", this.fn_update_onclick, this);
            this.div_list.grd_comncList.addEventHandler("oncellclick", this.fn_cancel_onclick, this);
            this.btn_flag.addEventHandler("onclick", this.btn_flag_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.fn_excel_onclick, this);
            this.btn_init.addEventHandler("onclick", this.fn_init_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_8112.xfdl");
        this.loadPreloadList();
       
    };
}
)();
