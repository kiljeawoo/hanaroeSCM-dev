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
                this.set_name("PDA_CN_002001");
                this.set_titletext("프로그램버전조회(목록)");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dataTotal", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PGM_FL_ID\" type=\"bigdecimal\" size=\"8\"/><Column id=\"PGM_FL_VER\" type=\"bigdecimal\" size=\"8\"/><Column id=\"PGM_FL_PATH\" type=\"bigdecimal\" size=\"8\"/><Column id=\"RMK_CNTN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"REG_USR_ID\" type=\"bigdecimal\" size=\"8\"/><Column id=\"REG_DTM\" type=\"bigdecimal\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_condition", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CONDITION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert", "absolute", null, "0", "41", "21", "83", null, this);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_text("등록");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("11");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "788", "0", "15", "490", null, null, this);
            obj.set_taborder("12");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "732", "21", "56", "8", null, null, this);
            obj.set_taborder("13");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "67", "15", null, this);
            obj.set_taborder("14");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "15", "23", "122", "21", null, null, this.div_search);
            obj.set_taborder("23");
            obj.set_text("조회구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_pgm_fl_ver", "absolute", "79", "23", "97", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_pgm_fl_ver_innerdataset = new Dataset("cbo_pgm_fl_ver_innerdataset", this.div_search.cbo_pgm_fl_ver);
            cbo_pgm_fl_ver_innerdataset._setContents("<ColumnInfo><Column id=\"cc_pgm_fl_ver\" size=\"256\"/><Column id=\"dc_pgm_fl_ver\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cc_pgm_fl_ver\">1</Col><Col id=\"dc_pgm_fl_ver\">최종버전</Col></Row><Row><Col id=\"cc_pgm_fl_ver\">2</Col><Col id=\"dc_pgm_fl_ver\">이력</Col></Row></Rows>");
            obj.set_innerdataset(cbo_pgm_fl_ver_innerdataset);
            obj.set_taborder("74");
            obj.set_codecolumn("cc_pgm_fl_ver");
            obj.set_datacolumn("dc_pgm_fl_ver");
            obj.set_displayrowcount("4");
            obj.set_index("0");
            obj = new Static("Static04", "absolute", "201", "23", "105", "21", null, null, this.div_search);
            obj.set_taborder("24");
            obj.set_text("프로그램ID");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("pgm_fl_id", "absolute", "276", "23", "189", "21", null, null, this.div_search);
            obj.set_taborder("31");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_pda", "absolute", "0", "104", null, null, "15", "-8", this);
            obj.set_taborder("20");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Div("div_paging", "absolute", "226", null, "338", "29", null, "6", this.div_pda);
            obj.set_taborder("14");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_pda.addChild(obj.name, obj);
            obj = new Grid("grd_pda", "absolute", "0", "11", null, null, "0", "34", this.div_pda);
            obj.set_taborder("13");
            obj.set_binddataset("ds_dataTotal");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("false");
            obj.set_treeinitstatus("expand,all");
            obj.style.set_background("#ffffffff URL('theme://images/B_btn_Titlebar_close_O.png')");
            obj.set_nodatatext("조회된 건수가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"164\"/><Column size=\"134\"/><Column size=\"201\"/><Column size=\"135\"/><Column size=\"123\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"프로그램파일ID\"/><Cell col=\"2\" text=\"프로그램파일버전\"/><Cell col=\"3\" text=\"프로그램파일경로\"/><Cell col=\"4\" text=\"비고내용\"/><Cell col=\"5\" text=\"등록자ID\"/><Cell col=\"6\" text=\"등록일시\"/></Band><Band id=\"body\"><Cell text=\"bind:RN\"/><Cell col=\"1\" text=\"bind:PGM_FL_ID\"/><Cell col=\"2\" text=\"bind:PGM_FL_VER\"/><Cell col=\"3\" text=\"bind:PGM_FL_PATH\"/><Cell col=\"4\" text=\"bind:RMK_CNTN\"/><Cell col=\"5\" text=\"bind:REG_USR_ID\"/><Cell col=\"6\" text=\"bind:REG_DTM\" mask=\"####-##-## ##:##:##\"/></Band></Format><Format id=\"format_copy\"></Format></Formats>");
            this.div_pda.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 788, 99, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("14");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 788, 419, this.div_pda,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("20");
            		p.set_text("Div02");

            	}
            );
            this.div_pda.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("프로그램버전조회(목록)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","div_search.cbo_pgm_fl_ver","value","ds_condition","CONDITION");
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
        this.addIncludeScript("PDA_CN_001001.xfdl", "lib::comLib.xjs");
        this.registerScript("PDA_CN_001001.xfdl", function(exports) {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        this.menuId = "";
        this.blbdId = "";
        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
            if(application.gv_userTPC == "admin")
            this.btn_insert.set_visible(true);
        }

        /* 페이지 로딩 후 실행부분 */
        this.fn_afterFormOnload = function()
        {
           //페이지 로딩후 실행부분
            this.div_pda.grd_pda.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	//this.div_search.fsrg_dtm.set_value(this.gfn_today("yyyyMMdd"));
        	
        	/* 조회 호출 */
        	this.btn_search.click();
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        /* Paging 처리 */
        this.fn_paging = function(vPageNum)
        {
        	this.ds_pageVO.clearData();
        	this.ds_dataTotal.clearData(); // Grid에 Binding된 Dataset명
        	
        	this.ds_pageVO.addRow();
        	
        	var vPageSize = 20; // Grid에 보여줄 Row수 선택
        	var vTotalCount = 0; // 전체건수. 화면조회후 리턴받아 사용 (구동시 갱신)
        	
        	this.ds_pageVO.setColumn(0, "CURRENT_PAGE", vPageNum); // 현재 페이지
        	this.ds_pageVO.setColumn(0, "PAGE_SIZE", vPageSize);
        	this.ds_pageVO.setColumn(0, "TOTAL_ROW_COUNT", vTotalCount);
        	
        	var argumentObj = "";
        	
        	this.fn_selectMstList();
        }

        /* 조회-서비스 Call */
        this.fn_selectMstList = function()
        {
        //	this.ds_dataTotal.clearData();
        		
        	var pgm_fl_ver = this.gfn_nullToEmpty(this.div_search.cbo_pgm_fl_ver.value); //최종버전MAJOR
        	var pgm_fl_id = this.gfn_nullToEmpty(this.div_search.pgm_fl_id.value); //최초등록일시
        	
        	var param = "pgm_fl_ver=" + pgm_fl_ver+				
        				" pgm_fl_id="+pgm_fl_id;
        	
        	var sSvcID        = "retrieve";//통신아이디
        	var sURL          = "svc::rest/pda/ProgramList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "ds_pageVO=ds_pageVO"; //보내는데이터셋
        	var sOutDatasets  = "ds_dataTotal=ds_dataTotal ds_pageVO=ds_pageVO";//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /* 콜백메소드 */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	var current_page = this.ds_pageVO.getColumn(0, "CURRENT_PAGE");
        	var page_size    = this.ds_pageVO.getColumn(0, "PAGE_SIZE");
        	var sTotal       = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        	
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}
        	
        	if (svcID == "retrieve") {
        		if (this.ds_dataTotal.rowcount > 0) {
        			this.div_pda.div_paging.fn_pageSet(sTotal, page_size, "div_paging", current_page);
        		} else {
        			this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			this.div_pda.div_paging.fn_pageSet(0, 0, "div_paging", current_page);
        		}
        	} else if (svcID == "insert") {
        		if (ErrorCode == 1) {
        			this.gfn_getMessage("alert", "result.message.save.success");
        			this.btn_search.click();
        		}
        	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.btn_onclick = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_search":	
        // 			this.ds_dataTotal.clearData();
        // 			this.fn_selectMstList();
        			this.fn_paging(1); // 처음조회시 1페이지를 조회한다.
        			break;
        			
        		case "btn_insert":
        			this.fn_openPdaInsert();
        			break;
        	}
        }

        this.grd_oncellclick = function(obj,e)
        {
        	this.fn_openPdaDetail(e.row);
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_openPdaDetail = function(nRow)
        {	
        	var oArg = {PGM_FL_ID:this.ds_dataTotal.getColumn(nRow, "PGM_FL_ID"), PGM_FL_VER:this.ds_dataTotal.getColumn(nRow, "PGM_FL_VER"), PGM_FL_PATH:this.ds_dataTotal.getColumn(nRow, "PGM_FL_PATH")};
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("PDA_CN_001003","PDA.CN::PDA_CN_001003.xfdl",oArg,sOption,sPopupCallBack);	  
        }

        this.fn_openPdaInsert = function()
        {
        	var oArg = {FNL_VER_MAJ:this.FNL_VER_MAJ, FNL_VER_MAJ:null, writeType:0};//writeType : 등록0수정1답글2
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("PDA_CN_001002","PDA.CN::PDA_CN_001002.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	if(strVal == "SUCCESS") {
        		trace(" strId : " + strId + " strVal : " + strVal);
        		this.fn_selectMstList();
        	}
        }
        this.div_search_pgm_fl_id_onkeydown = function(obj,e)
        {
        	if(e.keycode == '13')
        	{
        		this.btn_search.click();
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.btn_onclick, this);
            this.btn_insert.addEventHandler("onclick", this.btn_onclick, this);
            this.div_search.cbo_pgm_fl_ver.addEventHandler("onitemchanged", this.div_search_cbo_cnr_sts_dsc_onitemchanged, this);
            this.div_search.pgm_fl_id.addEventHandler("onkeydown", this.div_search_pgm_fl_id_onkeydown, this);
            this.div_pda.grd_pda.addEventHandler("oncellclick", this.grd_oncellclick, this);

        };

        this.loadIncludeScript("PDA_CN_001001.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
