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
                this.set_name("VAN_DS_SC_1402");
                this.set_titletext("거래처수정 신청내역 조회");
                this._setFormPosition(0,0,800,525);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_trpl_rq", this);
            obj._setContents("<ColumnInfo><Column id=\"FSRGMN_NA_TRPL_NM\" type=\"string\" size=\"32\"/><Column id=\"BUYER_ENO\" type=\"string\" size=\"32\"/><Column id=\"NA_C_RQ_NO\" type=\"string\" size=\"32\"/><Column id=\"RES_CODE\" type=\"string\" size=\"32\"/><Column id=\"GBN\" type=\"string\" size=\"32\"/><Column id=\"RN\" type=\"string\" size=\"32\"/><Column id=\"SYSTEMFILENAME\" type=\"string\" size=\"32\"/><Column id=\"CLNTNM\" type=\"string\" size=\"32\"/><Column id=\"FSRG_DTM\" type=\"string\" size=\"32\"/><Column id=\"TEL\" type=\"string\" size=\"32\"/><Column id=\"RES_DT\" type=\"string\" size=\"32\"/><Column id=\"BUYER_NM\" type=\"string\" size=\"32\"/><Column id=\"REQ_DT\" type=\"string\" size=\"32\"/><Column id=\"REQ_RESULT\" type=\"string\" size=\"32\"/><Column id=\"FSRGMN_ENO\" type=\"string\" size=\"32\"/><Column id=\"ADDR\" type=\"string\" size=\"32\"/><Column id=\"ATCH_CNT\" type=\"string\" size=\"32\"/><Column id=\"FAX\" type=\"string\" size=\"32\"/><Column id=\"FILE_SEQ\" type=\"string\" size=\"32\"/><Column id=\"NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"SEAL\" type=\"string\" size=\"32\"/><Column id=\"VAN_C_RQ_NO\" type=\"string\" size=\"32\"/><Column id=\"UP_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"TRPL_ABR_NM\" type=\"string\" size=\"32\"/><Column id=\"OLD_NEW_ADR_DSC\" type=\"string\" size=\"32\"/><Column id=\"ORGFNAME\" type=\"string\" size=\"32\"/><Column id=\"NA_MBCO_DSC\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"STDT\" type=\"STRING\" size=\"256\"/><Column id=\"EDDT\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_RDO\" type=\"STRING\" size=\"256\"/><Column id=\"WRS\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"RES_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"TRPL_RDO\" type=\"STRING\" size=\"256\"/><Column id=\"TRPL\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_RDO\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("ds_download", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"32\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"32\"/><Column id=\"FILESIZE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"32\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"32\"/><Column id=\"SEAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "787", "0", "15", "490", null, null, this);
            obj.set_taborder("4");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "80", "15", null, this);
            obj.set_taborder("6");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "379", "39", "100", "21", null, null, this.div_search);
            obj.set_taborder("17");
            obj.set_text("처리 바이어");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 20 0 11");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_buyerDsc", "absolute", "486", "39", "99", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_buyerDsc_innerdataset = new Dataset("cbo_buyerDsc_innerdataset", this.div_search.cbo_buyerDsc);
            cbo_buyerDsc_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">NAME</Col><Col id=\"datacolumn\">바이어명</Col></Row><Row><Col id=\"codecolumn\">ENO</Col><Col id=\"datacolumn\">사번</Col></Row></Rows>");
            obj.set_innerdataset(cbo_buyerDsc_innerdataset);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("ENO");
            obj.set_text("사번");
            obj = new Static("Static02", "absolute", "15", "10", "100", "21", null, null, this.div_search);
            obj.set_taborder("22");
            obj.set_text("신청기간");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("dt_stdt", "absolute", "118", "10", "99", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("30");
            obj.set_dateformat("yyyy-MM-dd");
            obj.style.set_align("center middle");
            obj.set_value("null");
            obj = new Static("Static01", "absolute", "379", "10", "100", "21", null, null, this.div_search);
            obj.set_taborder("34");
            obj.set_text("신청업체");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 20 0 11");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_corpDsc", "absolute", "486", "10", "99", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_corpDsc_innerdataset = new Dataset("cbo_corpDsc_innerdataset", this.div_search.cbo_corpDsc);
            cbo_corpDsc_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">GLN</Col><Col id=\"datacolumn\">GLN</Col></Row><Row><Col id=\"codecolumn\">NAME</Col><Col id=\"datacolumn\">업체명</Col></Row><Row><Col id=\"codecolumn\">CORP</Col><Col id=\"datacolumn\">사업자코드</Col></Row></Rows>");
            obj.set_innerdataset(cbo_corpDsc_innerdataset);
            obj.set_taborder("35");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("GLN");
            obj.set_text("GLN");
            obj = new Edit("edt_corp", "absolute", "589", "10", "140", "21", null, null, this.div_search);
            obj.set_taborder("36");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("dt_eddt", "absolute", "238", "10", "99", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("37");
            obj.set_dateformat("yyyy-MM-dd");
            obj.style.set_align("center middle");
            obj.set_value("null");
            obj = new Static("Static04", "absolute", "217", "10", "21", "21", null, null, this.div_search);
            obj.set_taborder("38");
            obj.set_text("~");
            obj.style.set_align("center");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "15", "39", "100", "21", null, null, this.div_search);
            obj.set_taborder("39");
            obj.set_text("처리결과");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 20 0 11");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_resDsc", "absolute", "118", "39", "120", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_resDsc_innerdataset = new Dataset("cbo_resDsc_innerdataset", this.div_search.cbo_resDsc);
            cbo_resDsc_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">all</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">승인</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">보완</Col></Row></Rows>");
            obj.set_innerdataset(cbo_resDsc_innerdataset);
            obj.set_taborder("40");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("all");
            obj.set_text("전체");
            obj = new Edit("edt_buyer", "absolute", "589", "39", "140", "21", null, null, this.div_search);
            obj.set_taborder("41");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "108", null, null, "15", "1", this);
            obj.set_taborder("9");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_comncList", "absolute", "0", "42", null, null, "0", "60", this.div_list);
            obj.set_taborder("8");
            obj.set_binddataset("ds_trpl_rq");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"62\"/><Column size=\"72\"/><Column size=\"135\"/><Column size=\"87\"/><Column size=\"103\"/><Column size=\"92\"/><Column size=\"299\"/><Column size=\"104\"/><Column size=\"91\"/><Column size=\"94\"/><Column size=\"84\"/><Column size=\"99\"/><Column size=\"87\"/><Column size=\"76\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"구분\"/><Cell col=\"1\" rowspan=\"2\" text=\"전송결과\"/><Cell col=\"2\" rowspan=\"2\" text=\"수정 대상 거래처코드\"/><Cell col=\"3\" rowspan=\"2\" text=\"신청일\"/><Cell col=\"4\" rowspan=\"2\" text=\"신청업체\"/><Cell col=\"5\" rowspan=\"2\" text=\"신청자\"/><Cell col=\"6\" colspan=\"4\" text=\"신청 정보 (변경한 값만 표시)\"/><Cell col=\"10\" rowspan=\"2\" text=\"처리일\"/><Cell col=\"11\" rowspan=\"2\" text=\"처리바이어\"/><Cell col=\"12\" rowspan=\"2\" text=\"처리결과\"/><Cell col=\"13\" rowspan=\"2\" text=\"비고\"/><Cell col=\"14\" rowspan=\"2\" text=\"첨부서류\"/><Cell row=\"1\" col=\"6\" text=\"주소\"/><Cell row=\"1\" col=\"7\" text=\"도로명 주소여부\"/><Cell row=\"1\" col=\"8\" text=\"전화번호\"/><Cell row=\"1\" col=\"9\" text=\"팩스번호\"/></Band><Band id=\"body\"><Cell text=\"bind:GBN\" autosizecol=\"none\"/><Cell col=\"1\" text=\"bind:RES_CODE\" autosizecol=\"none\"/><Cell col=\"2\" text=\"bind:NA_TRPL_C\"/><Cell col=\"3\" text=\"bind:REQ_DT\" autosizecol=\"none\"/><Cell col=\"4\" text=\"bind:FSRGMN_NA_TRPL_NM\" calendardisplaynulltype=\"none\" autosizecol=\"none\"/><Cell col=\"5\" text=\"bind:FSRGMN_ENO\" calendardisplaynulltype=\"none\" autosizecol=\"none\"/><Cell col=\"6\" text=\"bind:ADDR\"/><Cell col=\"7\" text=\"bind:OLD_NEW_ADR_DSC\"/><Cell col=\"8\" text=\"bind:TEL\"/><Cell col=\"9\" text=\"bind:FAX\"/><Cell col=\"10\" text=\"bind:RES_DT\"/><Cell col=\"11\" text=\"bind:BUYER_ENO\"/><Cell col=\"12\" text=\"bind:REQ_RESULT\"/><Cell col=\"13\"/><Cell col=\"14\" displaytype=\"expr:ATCH_CNT == &quot;0&quot; ? &quot;normal&quot; : &quot;button&quot;\" text=\"expr:ATCH_CNT == &quot;0&quot; ? &quot;미첨부&quot;: &quot;다운로드&quot;\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "731", "1", "56", "41", null, null, this.div_list);
            obj.set_taborder("9");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_flag", "absolute", "347", "0", null, "12", "363", null, this.div_list);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "732", "21", "56", "8", null, null, this);
            obj.set_taborder("11");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "18", null, this);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "117", null, this);
            obj.set_taborder("15");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete", "absolute", null, "0", "45", "21", "78", null, this);
            obj.set_taborder("14");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_page", "absolute", "228", null, "338", "44", null, "15", this);
            obj.set_taborder("16");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 965, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 965, 444, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("9");
            		p.set_text("Div02");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 800, 525, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_5160");
            		p.set_titletext("거래처수정 신청내역 조회");

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
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1402.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1402.xfdl", function(exports) {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        var lsNowPage;

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	if (application.gv_userType == "02") {
        		this.div_auth.set_visible(false);
        	}
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	//페이지 로딩후 실행부분
        	/*초기값세팅*/

            /*조회 호출*/
            var today = this.gfn_today('yyyyMMdd');
        	this.div_search.dt_stdt.set_value(this.gfn_addDate(today, -7));	
        	this.div_search.dt_eddt.set_value(today);
        	
        	this.btn_search.click();
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        //페이징 처리
        this.fn_paging = function(vPageNum)
        {
        	this.ds_trpl_rq.clearData(); //Grid에 Binding된 Dataset명
         	this.ds_pageVO.clearData();
        	this.ds_pageVO.addRow(); 
        	
        	var vPageSize = 15; //Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
        	var vTotalCount = 1; //전체건수. 화면조회후 리턴받아 사용
         	this.ds_pageVO.setColumn(0, "CURRENT_PAGE", vPageNum); //현재 페이지
         	this.ds_pageVO.setColumn(0, "PAGE_SIZE", vPageSize);
         	this.ds_pageVO.setColumn(0, "TOTAL_ROW_COUNT", vTotalCount);
        	
        	lsNowPage = vPageNum;//현재페이지 설정 
        	
        	this.search();
        }

         /*조회버튼 이벤트*/
        this.btn_search_onclick = function(obj,e)
        {	
        	this.fn_paging(1); //처음 조회 시 페이지를 확인한다.
        }

        this.search = function()
        {
        	var trplC = this.getTrplCode();
        	
        	var dt_stdt = this.gfn_nullToEmpty(this.div_search.dt_stdt.value);
        	var dt_eddt = this.gfn_nullToEmpty(this.div_search.dt_eddt.value);
        	var cbo_resDsc = this.gfn_nullToEmpty(this.div_search.cbo_resDsc.value);
        	var cbo_corpDsc = this.gfn_nullToEmpty(this.div_search.cbo_corpDsc.value);
        	var edt_corp = this.gfn_nullToEmpty(this.div_search.edt_corp.value);
        	var cbo_buyerDsc = this.gfn_nullToEmpty(this.div_search.cbo_buyerDsc.value);
        	var edt_buyer = this.gfn_nullToEmpty(this.div_search.edt_buyer.value);
        	
        	var params = " dt_stdt="+dt_stdt
        					+ " dt_eddt="+dt_eddt
        					+ " cbo_resDsc="+cbo_resDsc
        					+ " cbo_corpDsc="+cbo_corpDsc
        					+ " edt_corp="+edt_corp
        					+ " cbo_buyerDsc="+cbo_buyerDsc
        					+ " edt_buyer="+edt_buyer
        					+ " TRPL_C="+trplC;
        	
        	var sSvcID        = "reqList";
        	var sURL          ="svc::rest/pds/company/retrieveCompanyModReq";
        	var sInDatasets   = "ds_pageVO=ds_pageVO";
        	var sOutDatasets  = "ds_trpl_rq=ds_trpl_rq ds_pageVO=ds_pageVO";
        	var sArgument     = params;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
         /*콜백메소드*/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        	 	if (svcID == "reqList") {
        			if (this.div_list.grd_main.rowcount > 0) {
        				var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        				var sPagesize = this.ds_pageVO.getColumn(0, "PAGE_SIZE");
        				this.div_page.fn_pageSet(sTotal, sPagesize, "grd_comncList,div_page", lsNowPage);
        				//현재페이지
        				var sCurrentPage = this.ds_pageVO.getColumn(0, "CURRENT_PAGE");
        			} else {
        				this.div_page.fn_pageSet(0, 0, "grd_comncList,div_page", lsNowPage);//페이징 설정
        				this.grd_comncList.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        			}
        	 	}
        	 }
        }

        this.div_list_grd_comncList_oncellclick = function(obj,e)
        {
        	if (e.cell == 14 && e.clickitem == "control") {
        		//this.gfn_callDownload(this.ds_trpl_rq);
        		this.fn_atchDownload(e.row);
        	}
        }

        this.fn_atchDownload = function(row)
        {
        	this.ds_download.clearData();
        	this.ds_download.addRow();
        	this.ds_download.setColumn(0, "SEAL", "reqCmpy");
        	this.ds_download.setColumn(0, "CHK", "1");	
        	this.ds_download.setColumn(0, "SYSTEMFILENAME", this.ds_trpl_rq.getColumn(row, "SYSTEMFILENAME"));
        	this.ds_download.setColumn(0, "ORGFNAME", this.ds_trpl_rq.getColumn(row, "ORGFNAME"));
        	
        	this.gfn_callDownload(this.ds_download, "CHK", this.ds_trpl_rq.getColumn(row, "NA_TRPL_C"));
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_search.dt_stdt.addEventHandler("onchanged", this.Calendar_onchanged, this);
            this.div_search.cbo_corpDsc.addEventHandler("onitemchanged", this.div_search_cbo_displayYn_onitemchanged, this);
            this.div_search.dt_eddt.addEventHandler("onchanged", this.Calendar_onchanged, this);
            this.div_list.grd_comncList.addEventHandler("onheadclick", this.Div02_Grid01_onheadclick, this);
            this.div_list.grd_comncList.addEventHandler("oncellclick", this.div_list_grd_comncList_oncellclick, this);
            this.div_list.btn_flag.addEventHandler("onclick", this.btn_flag_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_delete.addEventHandler("onclick", this.btn_delete_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1402.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
