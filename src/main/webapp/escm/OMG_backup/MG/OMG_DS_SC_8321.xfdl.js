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
                this.set_name("OMG_DS_SC_8321");
                this.set_titletext("설문조사 선택");
                this._setFormPosition(0,0,767,526);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_survey", this);
            obj._setContents("<ColumnInfo><Column id=\"BSN_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBTITLE\" type=\"STRING\" size=\"256\"/><Column id=\"INTRO\" type=\"STRING\" size=\"256\"/><Column id=\"APL_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"APL_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RMK_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRGMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CMENO\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj = new Button("btn_close", "absolute", null, "15", "41", "21", "13", null, this);
            obj.set_taborder("10");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("text_title", "absolute", "17", "19", "135", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_text("설문 선택");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "750", "44", "17", "67", null, null, this);
            obj.set_taborder("70");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "673", "0", "91", "15", null, null, this);
            obj.set_taborder("71");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "67", "17", "67", null, null, this);
            obj.set_taborder("72");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "674", "36", "91", "8", null, null, this);
            obj.set_taborder("73");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_comncList", "absolute", "1", "134", null, null, "15", "44", this);
            obj.set_taborder("96");
            obj.set_binddataset("ds_survey");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"51\"/><Column size=\"137\"/><Column size=\"313\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"63\"/><Column size=\"56\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"설문유형\"/><Cell col=\"2\" text=\"제목\"/><Cell col=\"3\" text=\"시작일\"/><Cell col=\"4\" text=\"종료일\"/><Cell col=\"5\" text=\"사용여부\"/><Cell col=\"6\" displaytype=\"normal\" text=\"선택\"/></Band><Band id=\"body\"><Cell text=\"bind:SRV_SEQ\"/><Cell col=\"1\" text=\"expr:comp.parent.fn_displaySurveyDsc(SRV_DSC)\"/><Cell col=\"2\" text=\"bind:TITLE\"/><Cell col=\"3\" displaytype=\"date\" text=\"bind:SRV_ST_DT\"/><Cell col=\"4\" displaytype=\"date\" text=\"bind:SRV_ED_DT\"/><Cell col=\"5\" text=\"expr:USE_YN == 'Y' ? '사용' : '사용안함'\"/><Cell col=\"6\" displaytype=\"button\" edittype=\"button\" text=\"선택\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "43", null, "43", "15", null, this);
            obj.set_taborder("97");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Edit("ed_title", "absolute", "57", "10", "442", "21", null, null, this.div_search);
            obj.set_taborder("13");
            obj.set_maxlength("30");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "15", "10", "103", "21", null, null, this.div_search);
            obj.set_taborder("14");
            obj.set_text("제목");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 20 0 11");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_paging", "absolute", "28.55%", null, "338", "29", null, "-2", this);
            obj.set_taborder("98");
            obj.style.set_align("center middle");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "527", "55", "139", "21", null, null, this);
            obj.set_taborder("99");
            obj.set_text("페이지당 게시물수");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_visible("false");
            obj.style.set_padding("0 20 0 11");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_pageNum", "absolute", "673", "55", "60", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_pageNum_innerdataset = new Dataset("cbo_pageNum_innerdataset", this.cbo_pageNum);
            cbo_pageNum_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row></Rows>");
            obj.set_innerdataset(cbo_pageNum_innerdataset);
            obj.set_taborder("100");
            obj.set_value("20");
            obj.set_text("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_visible("false");
            obj.set_index("0");

            obj = new Button("btn_search", "absolute", null, "54", "58", "21", "32", null, this);
            obj.set_taborder("101");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 965, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("97");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 767, 526, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("설문조사 선택");

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
        this.addIncludeScript("OMG_DS_SC_8321.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_8321.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        this.bsnDsc;
        this.srvDsc;

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e) //공통
        {
        	this.gfn_setInitForm(obj, e); //공통
        	this.fn_paging(1);
        }

        this.fn_afterFormOnload = function() //페이지 로딩후 실행부분
        {
        	this.bsnDsc = this.parent.BSN_DSC;
        	this.srvDsc = this.parent.SRV_DSC;
        	
        	if (this.gfn_isNull(this.bsnDsc)) {
        		this.bsnDsc = "ESCM";
        	}
        	if (this.gfn_isNull(this.srvDsc)) {
        		this.srvDsc = "001";
        	}
        }

        /* Paging 처리 */
        this.fn_paging = function(vPageNum)
        {
        	this.ds_pageVO.clearData();
        	this.ds_pageVO.addRow();
        	
        	var vPageSize   = this.cbo_pageNum.value; // Grid에 보여줄 Row수 선택
        	var vTotalCount = 0;	// 전체건수. 화면조회후 리턴받아 사용 (구동시 갱신)
        	
         	this.ds_pageVO.setColumn(0,"CURRENT_PAGE",vPageNum); //현재 페이지
         	this.ds_pageVO.setColumn(0,"PAGE_SIZE",vPageSize);
         	this.ds_pageVO.setColumn(0,"TOTAL_ROW_COUNT",vTotalCount);
        	 
        	var argumentObj = "";
        	
        	this.fn_retrieveSurveyList();
        }

        /* 조회-서비스 Call */ 
        this.fn_retrieveSurveyList = function()
        {		
        	this.ds_survey.clearData();
        	
        	var title		= this.gfn_nullToEmpty(this.div_search.ed_title.value);				// 제목

        	var sParam        = "TITLE=" + title + " BSN_DSC=" + this.bsnDsc +" SRV_DSC="+this.srvDsc;
        	var sSvcID        = "retrieveSurveyList";
        	var sURL          = "svc::rest/mg/survey/retrieveSurveyList";
        	var sInDatasets   = "ds_pageVO=ds_pageVO";
        	var sOutDatasets  = "ds_survey=ds_survey ds_pageVO=ds_pageVO";
        	var sArgument     = sParam;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        
        /* 창닫기 버튼 이벤트 */
        this.fn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        

        //callback메소드
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
        	 	if (svcID == "retrieveSurveyList") {
        	 		if (this.ds_survey.rowcount > 0) {
        				this.div_paging.fn_pageSet(sTotal, page_size, "div_paging", current_page);
        			} else if(this.ds_survey.rowcount == 0) {
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        	 			this.div_paging.fn_pageSet(0, 0, "div_paging", current_page);
        			}
        		}
        	}
        }

        
        this.fn_search_onclick = function(obj,e)
        {
        	this.fn_paging(1);
        }

        //그리드 클릭
        this.grd_comncList_oncellclick = function(obj,e)
        {
        	if(e.cell == 6){
        		var title = this.ds_survey.getColumn(e.row,"TITLE"); // idx 0
        		var srv_seq = this.ds_survey.getColumn(e.row,"SRV_SEQ"); // idx 1
        		var SRV_ST_DT = this.ds_survey.getColumn(e.row,"SRV_ST_DT"); // idx 2
        		var SRV_ED_DT = this.ds_survey.getColumn(e.row,"SRV_ED_DT"); // idx 3
        		var INTRO = this.ds_survey.getColumn(e.row,"INTRO"); // idx 4
        		var SUBTITLE = this.ds_survey.getColumn(e.row,"SUBTITLE"); // idx 5
        		var SRV_DSC = this.ds_survey.getColumn(e.row,"SRV_DSC"); // idx 6
        		this.close(title + "|" + srv_seq + "|" + SRV_ST_DT + "|" + SRV_ED_DT + "|" + INTRO + "|" +SUBTITLE + "|" +SRV_DSC);
        	}
        }

        this.fn_displaySurveyDsc = function(dsc)
        {
        	// expr:comp.parent.fn_displaySurveyDsc(SRV_DSC)
        	if (dsc == "002") {
        		return "혁신점포 모니터링";
        	}
        	return "만족도 설문조사";
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_close.addEventHandler("onclick", this.fn_close_onclick, this);
            this.grd_comncList.addEventHandler("oncellclick", this.grd_comncList_oncellclick, this);
            this.div_search.ed_title.addEventHandler("oneditclick", this.div_search_edt_menuId_oneditclick, this);
            this.Static01.addEventHandler("onclick", this.div_search_Static01_onclick, this);
            this.btn_search.addEventHandler("onclick", this.fn_search_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_8321.xfdl");
        this.loadPreloadList();
       
    };
}
)();
