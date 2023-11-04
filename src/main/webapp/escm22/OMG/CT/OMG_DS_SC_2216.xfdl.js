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
                this.set_name("OMG_DS_SC_2116");
                this.set_titletext("전자계약 첨부테이블 이동");
                this._setFormPosition(0,0,993,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_rsclist", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MN_CTRW_KD\" type=\"string\" size=\"32\"/><Column id=\"CTR_ED_DT\" type=\"string\" size=\"32\"/><Column id=\"ELT_CTRW_NO\" type=\"string\" size=\"32\"/><Column id=\"BUYER_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"CHG_SQNO\" type=\"string\" size=\"32\"/><Column id=\"STS_NM\" type=\"string\" size=\"32\"/><Column id=\"MN_CTRW_KD_NM\" type=\"string\" size=\"32\"/><Column id=\"CTR_ST_DT\" type=\"string\" size=\"32\"/><Column id=\"ISCHECKED\" type=\"string\" size=\"32\"/><Column id=\"MTALNM\" type=\"string\" size=\"32\"/><Column id=\"STS\" type=\"string\" size=\"32\"/><Column id=\"CTRW_DRUP_DT\" type=\"string\" size=\"32\"/><Column id=\"CTR_DT\" type=\"string\" size=\"32\"/><Column id=\"BUYER_NM\" type=\"string\" size=\"32\"/><Column id=\"APDFL_STS\" type=\"string\" size=\"32\"/><Column id=\"APDFL_CNT\" type=\"string\" size=\"32\"/><Column id=\"BUYER_ENO\" type=\"string\" size=\"32\"/><Column id=\"RN\" type=\"string\" size=\"32\"/><Column id=\"NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"BUYER_NA_TRPL_NM\" type=\"string\" size=\"32\"/><Column id=\"APDFL_SZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mnCtrwKd", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_C_EXPL\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pageVO01", this);
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

            obj = new Dataset("ds_result", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"TOTAL\" type=\"STRING\" size=\"256\"/><Column id=\"SUCCESS\" type=\"STRING\" size=\"256\"/><Column id=\"FAIL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "69", "15", null, this);
            obj.set_taborder("73");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "16", "10", "118", "21", null, null, this.div_search);
            obj.set_taborder("46");
            obj.set_text("메인계약서종류");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static131", "absolute", "242", "36", "10", "21", null, null, this.div_search);
            obj.set_taborder("50");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_from", "absolute", "141", "36", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("51");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("cal_to", "absolute", "252", "36", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("52");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static02", "absolute", "390", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("59");
            obj.set_text("이동대상");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("div_mnCtrwKd", "absolute", "141", "10", "211", "21", null, null, this.div_search);
            obj.set_taborder("62");
            obj.set_url("common::multiCheckCombo.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "16", "37", "118", "21", null, null, this.div_search);
            obj.set_taborder("74");
            obj.set_text("계약서 작성일");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "390", "37", "121", "21", null, null, this.div_search);
            obj.set_taborder("77");
            obj.set_text("계약담당사번");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_buyer", "absolute", "530", "37", "174", "21", null, null, this.div_search);
            obj.set_taborder("78");
            obj.style.set_padding("2 27 0 5");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_remove", "absolute", "683", "37", "21", "21", null, null, this.div_search);
            obj.set_taborder("79");
            obj.set_text("X");
            obj.style.set_background("#aaaaaaff");
            obj.style.set_border("0 none #ffffffff");
            obj.style.set_color("#ffffffff");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_sts", "absolute", "530", "10", "174", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_sts_innerdataset = new Dataset("cbo_sts_innerdataset", this.div_search.cbo_sts);
            cbo_sts_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">I</Col><Col id=\"datacolumn\">진행중→완료</Col></Row><Row><Col id=\"codecolumn\">C</Col><Col id=\"datacolumn\">완료→종료</Col></Row></Rows>");
            obj.set_innerdataset(cbo_sts_innerdataset);
            obj.set_taborder("80");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("I");
            obj.set_text("진행중→완료");

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "97", null, null, "15", "0", this);
            obj.set_taborder("69");
            this.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "-93", "228", "21", null, null, this.div_list);
            obj.set_taborder("2");
            obj.set_text("상담 신청 조회");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_rsclist", "absolute", "0", "41", null, null, "0", "50", this.div_list);
            obj.set_taborder("1");
            obj.set_binddataset("ds_rsclist");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"110\"/><Column size=\"202\"/><Column size=\"167\"/><Column size=\"106\"/><Column size=\"211\"/><Column size=\"70\"/><Column size=\"95\"/><Column size=\"95\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"계약서번호\"/><Cell col=\"2\" text=\"계약서종류\"/><Cell col=\"3\" text=\"계약기간\"/><Cell col=\"4\" text=\"상태\"/><Cell col=\"5\" text=\"첨부저장 테이블 (현재)\"/><Cell col=\"6\" text=\"첨부용량\"/><Cell col=\"7\" text=\"계약담당사번\"/><Cell col=\"8\" text=\"계약담당자명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"none\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"bind:ELT_CTRW_NO\"/><Cell col=\"2\" text=\"bind:MN_CTRW_KD_NM\"/><Cell col=\"3\" text=\"bind:CTR_DT\" mask=\"@@@@-@@-@@ @ @@@@-@@-@@\" calendardisplay=\"display\"/><Cell col=\"4\" text=\"bind:STS_NM\"/><Cell col=\"5\" text=\"expr:comp.parent.parent.getApdflPosition(APDFL_STS)\"/><Cell col=\"6\" text=\"expr:comp.parent.parent.getApdflSize(APDFL_SZE)\"/><Cell col=\"7\" text=\"bind:BUYER_ENO\"/><Cell col=\"8\" text=\"bind:BUYER_NM\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btu_div", "absolute", "46.83%", "0", "63", "12", null, null, this.div_list);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_page01", "absolute", "28.43%", null, "340", "30", null, "10", this.div_list);
            obj.set_taborder("15");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("79");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_move", "absolute", null, "0", "106", "21", "77", null, this);
            obj.set_taborder("97");
            obj.set_text("첨부파일이동");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 211, 21, this.div_search.div_mnCtrwKd,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("62");
            		p.set_url("common::multiCheckCombo.xfdl");

            	}
            );
            this.div_search.div_mnCtrwKd.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 69, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("73");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 978, 393, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("69");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("전자계약 첨부테이블 이동");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::multiCheckCombo.xfdl");
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_2216.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_2216.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.fv_sts = ""; //전자 계약서 상태값
        this.fv_stsNm = ""; //전자 계약서 상태값
        this.fv_mnCtrwKd = ""; //전자 계약서 종류
        this.fv_mnCtrwKdNm = ""; //전자 계약서 종류
        this.lastCond = ""; // 검색조건
        var lsNowPage;

        /* Form Load */
        this.OMG_DS_SC_2110_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e);

        	var param = [
               {code:"MN_CTRW_KD", dsName:"ds_mnCtrwKd", selecttype:""}
            ];

        	this.gfn_setPortalCommonCode(param);
        	var toDay = this.gfn_today("yyyyMMdd");
        	var chkDay = this.gfn_minusMonth(toDay, 2);

        	this.div_search.cal_from.set_value(chkDay);
        	this.div_search.cal_to.set_value(toDay);

        }

        this.fn_afterFormOnload = function()
        {	
        	this.div_list.grd_rsclist.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        }

        //gfn_setCommonCode처리 후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        	//선택사항. 선언안하면 기본으로 설정됨. Width:140, displayrowcount:5	
        	this.div_search.div_mnCtrwKd.setFunctionName("fn_afterCall"); //후처리함수 선언
        	this.div_search.div_mnCtrwKd._setWidth(250);
        	this.div_search.div_mnCtrwKd._setDisplayCount(5); //보여줄 Row수. Combo의 displayrowcount와 동일.
        	this.div_search.div_mnCtrwKd._binddataset(this.ds_mnCtrwKd, "SIMP_C", "SIMP_CNM");
        }

        //멀티 콤보  - > 메인 계약서 종류
        this.fn_afterCall = function(sVal)
        {
        	if (sVal.rowcount == 0) {
        		this.fv_mnCtrwKd = "";
        		this.fv_mnCtrwKdNm = "";
        	} else {
        		for (var i = 0 ; i < sVal.rowcount; i++) {
        			if (i == 0 ) {
        				this.fv_mnCtrwKd = sVal.getColumn(i, "SIMP_C");
        				this.fv_mnCtrwKdNm = sVal.getColumn(i, "SIMP_CNM");
        			} else {
        				this.fv_mnCtrwKd += "."+sVal.getColumn(i, "SIMP_C") ;
        				this.fv_mnCtrwKdNm += ","+sVal.getColumn(i, "SIMP_CNM") ;
        			}
        		}
        	}
        }

        /*전자계약 조회*/
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_paging(1);
        }

        /*조회*/
        this.search = function()
        {
        	if (this.fn_validationCheck()) {
        		var calFrom = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        		var calTo = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일
        		var buyer = this.gfn_nullToEmpty(this.div_search.edt_buyer.value); // 바이어사번
        		var cboSts = this.gfn_nullToEmpty(this.div_search.cbo_sts.value); // 조회대상

        		var param = "cal_from="+calFrom+
        				" cal_to="+calTo+
        				" buyer="+buyer+
        				" apdflsts="+cboSts+
        				" fv_mnCtrwKd="+this.fv_mnCtrwKd
        		;
        		
        		this.lastCond = calFrom + calTo + buyer + cboSts + this.fv_mnCtrwKd;

        		var sSvcID        = "search";//통신아이디
        		var sURL          = "svc::rest/ct/eltctrw/retrieveEltApdMoveTargetList";// 호출할 서버 페이지 주소
        		var sInDatasets   = "ds_pageVO01=ds_pageVO01";//보내는데이터셋
        		var sOutDatasets  = "ds_rsclist=ds_rsclist ds_pageVO01=ds_pageVO";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = param;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회

        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        /* 페이징 */
        this.fn_paging = function(vPageNum)
        {
        	var oDs = this.ds_pageVO01;
        	var oBindDs = this.ds_rsclist;
        	var vPageSize = 20; //Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
        	var vTotalCount = 0; //전체건수. 화면조회후 리턴받아 사용
        		
        	oBindDs.clearData(); //Grid에 Binding된 Dataset명
        	lsNowPage = vPageNum; //현재페이지 설정 
        	
         	this.ds_pageVO01.clearData();  
        	this.ds_pageVO01.addRow(); 
        	this.ds_pageVO01.setColumn(0, "CURRENT_PAGE", vPageNum); //현재 페이지
         	this.ds_pageVO01.setColumn(0, "PAGE_SIZE", vPageSize);
         	this.ds_pageVO01.setColumn(0, "TOTAL_ROW_COUNT", vTotalCount);
        	
        	this.div_list.div_page01.fn_pageSet(vTotalCount, vPageSize, "grd_rsclist,div_page01", lsNowPage);
        	this.search();
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID == "search") {
        			if (this.ds_rsclist.rowcount == 0) {
        				this.div_list.grd_rsclist.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        				this.div_list.div_page01.fn_pageSet(0, 0, "grd_rsclist,div_page01", lsNowPage);
        			}else{
        				var sTotal = this.ds_pageVO01.getColumn(0, "TOTAL_ROW_COUNT");
        				var sPagesize = this.ds_pageVO01.getColumn(0, "PAGE_SIZE");
        				this.div_list.div_page01.fn_pageSet(sTotal, sPagesize, "grd_rsclist,div_page01", lsNowPage);
        			}
        			this.fn_enableMoveBtn();
        			this.searchState = true;
        		} else if (svcID == "move") {
        			var t = this.ds_result.getColumn(0, "TOTAL");
        			var s = this.ds_result.getColumn(0, "SUCCESS");
        			var f = this.ds_result.getColumn(0, "FAIL");
        			var msg = "첨부파일 DB저장이 완료되었습니다";
        			msg += "\n- 대상 첨부파일 : " + t;
        			msg += "\n- 성공 : " + s;
        			msg += "\n- 실패 : " + f;
        			
        			this.alert(msg);
        			this.fn_paging(1);
        		}
        	}
        }

        /* Validation Check */
        this.fn_validationCheck = function()
        {
        	var calFrom = this.div_search.cal_from.value;
        	var calTo = this.div_search.cal_to.value;

        	if (this.gfn_isNull(calFrom)) {
        		this.gfn_getMessage("alert", "validation.message.fromDate.no.data");
        		return false;
        	}

        	if (this.gfn_isNull(calTo)) {
        		this.gfn_getMessage("alert", "validation.message.toDate.no.data");
        		return false;
        	}

        	if (this.gfn_getDiffDay(calFrom, calTo) < 0) {
        		this.gfn_getMessage("alert", "validation.message.fromData.toDate.confirm");
        		return false;
        	}
        	return true;
        }

        this.div_list_btu_div_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        // 첨부파일 위치(테이블 or 서버)
        this.getApdflPosition = function(pos)
        {
        	// expr:comp.parent.parent.getApdflPosition(APDFL_STS)
        	if (pos == "I") {
        		// CT_ELT_CTRW_DCM_APD_IN_PRG
        		return "CT_ELT_CTRW_DCM_APD_IN_PRG";
        	} else if (pos == "C") {
        		// CT_ELT_CTRW_DCM_APD_CPL
        		return "CT_ELT_CTRW_DCM_APD_CPL";
        	} else if (pos == "E") {
        		// CT_ELT_CTRW_DCM_APD_ED
        		return "CT_ELT_CTRW_DCM_APD_ED";
        	}
        	return "SERVER";
        }

        // 첨부용량 표시
        this.getApdflSize = function(sze)
        {
        	// expr:comp.parent.parent.getApdflSize(APDFL_SZE)
        	var s = this.gfn_getNum(sze);
        	if (this.gfn_isNum(s)) {
        		if (s >= 1073741824) {
        			var temp = s / 1073741824;
        			return temp.toFixed(2) + " GB";
        		} else if (s >= 1048576) {
        			var temp = s / 1048576;
        			return temp.toFixed(1) + " MB";
        		} else {
        			var temp = s / 1024;
        			return temp.toFixed(0) + " KB";
        		}
        	}
        	return "-";
        }

        this.btn_move_onclick = function(obj,e)
        {
        	var idx = this.ds_rsclist.findRow("ISCHECKED", "1");
        	if (this.ds_rsclist.rowcount == 0) {
        		alert('조회된 전자계약서가 없습니다.');
        		return;
        	} else if (idx == -1) {
        		this.alert("선택된 행이 없습니다.");
        		return;
        	}
        	
        	if (this.fn_validationCheck()) {
        		var calFrom = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        		var calTo = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일
        		var buyer = this.gfn_nullToEmpty(this.div_search.edt_buyer.value); // 바이어사번
        		var cboSts = this.gfn_nullToEmpty(this.div_search.cbo_sts.value); // 조회대상

        		var param = "cal_from="+calFrom+
        				" cal_to="+calTo+
        				" buyer="+buyer+
        				" apdflsts="+cboSts+
        				" fv_mnCtrwKd="+this.fv_mnCtrwKd
        		;
        		
        		// 검색조건 변경 확인
        		var cond = calFrom + calTo + buyer + cboSts + this.fv_mnCtrwKd;
        		if (this.lastCond != cond) {
        			alert('검색 조건이 변경되었습니다. 다시 조회해주세요.');
        			return;
        		} else {
        			var msg = "첨부파일 저장 테이블을 이동하시겠습니까?";
        			if (!this.confirm(msg)) {
        				return;
        			}
        		}
        		
        		var sSvcID        = "move";//통신아이디
        		var sURL          = "svc::rest/ct/eltctrw/moveEltApdflTable";// 호출할 서버 페이지 주소
        		var sInDatasets   = "ds_rsclist=ds_rsclist";//보내는데이터셋
        		var sOutDatasets  = "";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = param;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회

        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        this.div_list_grd_rsclist_oncellclick = function(obj,e)
        {
        	if (e.cell == 7 || e.cell == 8) {
        		var buyer = this.ds_rsclist.getColumn(e.row, "BUYER_ENO");
        		this.div_search.edt_buyer.set_value(buyer);
        	} else {
        		var cur = this.ds_rsclist.getColumn(e.row, "ISCHECKED");
        		this.ds_rsclist.setColumn(e.row, "ISCHECKED", cur == "1" ? "0" : "1");
        		this.fn_enableMoveBtn();
        	}
        }

        this.fn_enableMoveBtn = function()
        {
        	var enable = false;
        	if (this.ds_rsclist.rowcount > 0) {		
        		var idx = this.ds_rsclist.findRow("ISCHECKED", "1");
        		enable = idx != -1;
        	}
        	this.btn_move.set_enable(enable);
        }

        this.div_search_btn_remove_onclick = function(obj,e)
        {
        	this.div_search.edt_buyer.set_value("");
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.OMG_DS_SC_2110_onload, this);
            this.div_search.btn_remove.addEventHandler("onclick", this.div_search_btn_remove_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.div_list.grd_rsclist.addEventHandler("oncellclick", this.div_list_grd_rsclist_oncellclick, this);
            this.div_list.btu_div.addEventHandler("onclick", this.div_list_btu_div_onclick, this);
            this.btn_move.addEventHandler("onclick", this.btn_move_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_2216.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
