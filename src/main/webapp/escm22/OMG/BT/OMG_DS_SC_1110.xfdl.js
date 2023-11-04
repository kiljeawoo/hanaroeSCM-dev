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
                this.set_name("OMG_DS_SC_1110");
                this.set_titletext("상담신청조회");
                this._setFormPosition(0,0,993,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_rclist", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"CSLT_RQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_CHRG_BSNNM\" type=\"STRING\" size=\"256\"/><Column id=\"CONM\" type=\"STRING\" size=\"256\"/><Column id=\"BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"RQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"STS\" type=\"STRING\" size=\"256\"/><Column id=\"STS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MAJ_LATC\" type=\"STRING\" size=\"256\"/><Column id=\"REJECT_ALLOW\" type=\"STRING\" size=\"256\"/><Column id=\"REJECT_MONTH\" type=\"STRING\" size=\"256\"/><Column id=\"CSLT_DSC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_ctrSts", this);
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

            obj = new Dataset("ds_dsc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"string\" size=\"13\"/><Column id=\"name\" type=\"string\" size=\"13\"/></ColumnInfo><Rows><Row><Col id=\"code\">101.102</Col><Col id=\"name\">마트상품부</Col></Row><Row><Col id=\"code\">201</Col><Col id=\"name\">[수산] 선어/활어</Col></Row><Row><Col id=\"code\">202</Col><Col id=\"name\">[수산] 건어/가공</Col></Row><Row><Col id=\"code\">203</Col><Col id=\"name\">[수산] 냉동</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "69", "15", null, this);
            obj.set_taborder("73");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("38");
            obj.set_text("신청일자");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "36", "79", "21", null, null, this.div_search);
            obj.set_taborder("39");
            obj.set_text("신청회사");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_comp", "absolute", "94", "36", "151", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_comp_innerdataset = new Dataset("cbo_comp_innerdataset", this.div_search.cbo_comp);
            cbo_comp_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">사업자번호</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">업체명</Col></Row></Rows>");
            obj.set_innerdataset(cbo_comp_innerdataset);
            obj.set_taborder("41");
            obj.set_text("사업자번호");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_index("0");
            obj = new Static("Static03", "absolute", "452", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("46");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_comp", "absolute", "248", "36", "175", "21", null, null, this.div_search);
            obj.set_taborder("49");
            obj.set_inputfilter("symbol");
            obj.set_inputtype("full,digit,alpha");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static131", "absolute", "195", "10", "10", "21", null, null, this.div_search);
            obj.set_taborder("50");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_from", "absolute", "94", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("51");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("cal_to", "absolute", "205", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("52");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Div("div_ctrSts", "absolute", "531", "10", "140", "21", null, null, this.div_search);
            obj.set_taborder("53");
            obj.set_url("common::multiCheckCombo.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "422", "24", "30", "45", null, null, this.div_search);
            obj.set_taborder("54");
            obj.set_visible("false");
            obj.style.set_background("#0000ff33");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "452", "36", "97", "21", null, null, this.div_search);
            obj.set_taborder("55");
            obj.set_text("담당바이어");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_buyer", "absolute", "531", "36", "175", "21", null, null, this.div_search);
            obj.set_taborder("56");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "739", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("57");
            obj.set_text("신청항목");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "706", "24", "30", "45", null, null, this.div_search);
            obj.set_taborder("59");
            obj.set_visible("false");
            obj.style.set_background("#0000ff33");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("div_ctrDsc", "absolute", "818", "10", "180", "21", null, null, this.div_search);
            obj.set_taborder("61");
            obj.set_url("common::multiCheckCombo.xfdl");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_history", "absolute", null, "0", "41", "21", "79", null, this);
            obj.set_taborder("11");
            obj.set_text("이력");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "922", "21", "56", "8", null, null, this);
            obj.set_taborder("56");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "978", "0", "15", "490", null, null, this);
            obj.set_taborder("57");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "97", null, null, "15", "0", this);
            obj.set_taborder("69");
            this.addChild(obj.name, obj);
            obj = new Grid("grd", "absolute", "0", "41", null, null, "0", "0", this.div_list);
            obj.set_taborder("1");
            obj.set_binddataset("ds_rclist");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"108\"/><Column size=\"108\"/><Column size=\"83\"/><Column size=\"150\"/><Column size=\"96\"/><Column size=\"77\"/><Column size=\"58\"/><Column size=\"295\"/><Column size=\"62\"/><Column size=\"57\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상담신청항목\"/><Cell col=\"2\" text=\"상담신청번호\"/><Cell col=\"3\" text=\"담당바이어\"/><Cell col=\"4\" text=\"업체명\"/><Cell col=\"5\" text=\"사업자등록번호\"/><Cell col=\"6\" text=\"신청일자\"/><Cell col=\"7\" text=\"진행상태\"/><Cell col=\"8\" text=\"주력품목\"/><Cell col=\"9\" text=\"거절기간\"/><Cell col=\"10\" text=\"거절해제\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" text=\"bind:CSLT_DSC\" expr=\"expr:CSLT_DSC == '201' ? '[수산] 선어/활어' : CSLT_DSC == '202' ? '[수산] 건어/가공' : CSLT_DSC == '203' ? '[수산] 냉동' : '마트상품부'\"/><Cell col=\"2\" text=\"bind:CSLT_RQ_NO\"/><Cell col=\"3\" style=\"color:EXPR(BUYER_NM=='담당자배정중'?'red':'black');color2:EXPR(BUYER_NM=='담당자배정중'?'red':'black');selectcolor:EXPR(BUYER_NM=='담당자배정중'?'red':'black');\" text=\"bind:BUYER_NM\"/><Cell col=\"4\" text=\"bind:CONM\"/><Cell col=\"5\" text=\"bind:BZNO\" mask=\"###-##-#####\"/><Cell col=\"6\" text=\"bind:RQ_DT\" mask=\"####-##-##\"/><Cell col=\"7\" displaytype=\"normal\" text=\"bind:STS_NM\" combodataset=\"bind:STS\"/><Cell col=\"8\" text=\"bind:MAJ_LATC\" tooltiptext=\"bind:MAJ_LATC\"/><Cell col=\"9\" text=\"bind:REJECT_MONTH\"/><Cell col=\"10\" text=\"bind:REJECT_ALLOW\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btu_div", "absolute", "46.83%", "0", "63", "12", null, null, this.div_list);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "306", "28", "30", "45", null, null, this);
            obj.set_taborder("78");
            obj.style.set_background("#0000ff33");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("79");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print", "absolute", null, "0", "41", "21", "126", null, this);
            obj.set_taborder("80");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
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
            obj = new Layout("default", "", 0, 0, this.div_list,
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
            		p.set_titletext("상담신청조회");

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
            this._addPreloadList("fdl", "common::multiCheckCombo.xfdl");
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_1110.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_1110.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        var fv_sts = "";
        var fv_dsc = "";

        this.OMG_DS_SC_1110_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj,e);
        	
        	var toDay = this.gfn_today("yyyyMMdd");
        	var chkDay = this.gfn_minusMonth(toDay, 1);
        	this.div_search.cal_from.set_value(chkDay);
        	this.div_search.cal_to.set_value(toDay);
        	
        	// 공통코드 가져오기
        	var param = [
        		{ code: "CTR_STS", dsName: "ds_ctrSts", selecttype: "" }
        	];
        	this.gfn_setPortalCommonCode(param);
        	
        	this.div_search.div_ctrSts._binddataset(this.ds_ctrSts, "SIMP_C", "SIMP_CNM");
        	this.div_search.div_ctrSts.setFunctionName("fn_afterCall"); //후처리함수 선언
        	this.div_search.div_ctrDsc._setWidth(180);
        	this.div_search.div_ctrDsc._binddataset(this.ds_dsc, "code", "name");
        	this.div_search.div_ctrDsc.setFunctionName("fn_afterDscCall"); //후처리함수 선언
        	
        	this.div_list.grd.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        	
        }

        // 멀티콤보 -> 상태종류
        this.fn_afterCall = function(sVal)
        {
        	fv_sts = ""; // 초기화
        	
        	for (var i = 0; i < sVal.rowcount; i++) {
        		if (fv_sts) fv_sts += ".";
        		fv_sts += sVal.getColumn(i, "SIMP_C");
        	}
        }

        // 신청항목 멀티콤보 -> 상태종류
        this.fn_afterDscCall = function(sVal)
        {
        	fv_dsc = ""; // 초기화
        	
        	for (var i = 0; i < sVal.rowcount; i++) {
        		if (fv_dsc) fv_dsc += ".";
        		fv_dsc += sVal.getColumn(i, "code");
        	}
        }

        this.div_list_Grid01_oncellclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		this.gfn_singleChk(obj, e);
        	} else {
        		var cslt_rq_no = this.ds_rclist.getColumn(this.ds_rclist.rowposition, "CSLT_RQ_NO");
        		
        		var oArg = { paramMode: "U", dsArg: this.ds_rsclist, CSLT_RQ_NO: cslt_rq_no };
        		var sOption = "autosize=true,title=true";
        		var sPopupCallBack = "fn_popupAfter";
        		this.gfn_openPopup("OMG_DS_SC_1112", "OMG.BT::OMG_DS_SC_1112.xfdl", oArg, sOption, sPopupCallBack);
        	}
        }

        this.btn_search_onclick = function(obj,e)
        {
        	this.search();  
        }

        this.search = function()
        {
        	if (!this.fn_validationCheck()) {
        		return;
        	}
        	
        	this.ds_rclist.clearData();
        	
        	var calFrom = this.gfn_nullToEmpty(this.div_search.cal_from.value);		// 조회시작일
        	var calTo = this.gfn_nullToEmpty(this.div_search.cal_to.value);			// 조회종료일
        	var cboComp = this.gfn_nullToEmpty(this.div_search.cbo_comp.value);		// 사업자번호, 업체명 선택
        	var edtComp = this.gfn_nullToEmpty(this.div_search.edt_comp.value);		// 사업자번호, 업체명 입력값
        	var edtBuyer = this.gfn_nullToEmpty(this.div_search.edt_buyer.value);	// 담당바이어
        	
        	var param = "cal_from=" + calFrom
        			+ " cal_to=" + calTo
        			+ " cbo_sts=" + fv_sts
        			+ " cbo_dsc=" + fv_dsc
        			+ " cbo_comp=" + cboComp
        			+ " edt_comp=" + encodeURIComponent(edtComp) // encode
        			+ " edt_buyer=" + encodeURIComponent(edtBuyer); // encode
        	
        	var sSvcID        = "search";
        	var sURL          = "svc::rest/bt/rq/retrieveCsltRqList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_rclist=ds_rclist";
        	var sArgument     = param;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}
        	
        	if (svcID == "retrievePeriodSum") {
        		if (this.ds_rclist.rowcount == 0) {
        			this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			return;
        		}
        	}
        }

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

        this.fn_popupAfter = function(strId,strVal)
        {
        	if (strId == "OMG_DS_SC_1112" && strVal == "SUCCESS") {
        		this.search(); // 조회
        	}
        }

        this.btn_history_onclick = function(obj,e)
        {
        	var cslt_rq_no = null;
        	
        	for(var i = 0; i < this.ds_rclist.rowcount; i++){
        		if (this.ds_rclist.getColumn(i, "ISCHECKED") == 1) {
        			cslt_rq_no = this.ds_rclist.getColumn(i, "CSLT_RQ_NO");
        			
        			if (!this.gfn_isNull(cslt_rq_no)) {
        				var oArg = { paramMode: "S", dsArg: this.ds_rclist, cslt_rq_no:cslt_rq_no };
        				var sOption = "autosize=true,title=true";
        				var sPopupCallBack = "fn_popupAfter";
        				this.gfn_openPopup("OMG_DS_SC_1130", "OMG.BT::OMG_DS_SC_1130.xfdl", oArg, sOption, sPopupCallBack);
        			}
        		}
        	}
        	
        	if (this.gfn_isNull(cslt_rq_no)) {
        		alert("이력을 조회할 상담신청내역을 선택하세요");
        	}
        }

        this.btu_div_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        this.OMG_DS_SC_1110_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.btn_search.click();
        	}
        }
        /*리포트 출력*/
        this.btn_print_onclick = function(obj,e)
        {
        	this.div_search.div_ctrSts.setFunctionName("fn_afterCall"); 
        	
        	var calFrom = this.gfn_nullToEmpty(this.div_search.cal_from.value);		// 조회시작일
        	var calTo = this.gfn_nullToEmpty(this.div_search.cal_to.value);			// 조회종료일
        	var cbo_sts = fv_sts;
        	var cboComp = this.gfn_nullToEmpty(this.div_search.cbo_comp.value);		// 사업자번호, 업체명 선택
        	var edt_comp = this.gfn_nullToEmpty(this.div_search.edt_comp.value);		// 사업자번호, 업체명 입력값
        	var edt_buyer = this.gfn_nullToEmpty(this.div_search.edt_buyer.value);	// 담당바이어
        	
        	var param = {
        					CAL_FROM:calFrom,
        					CAL_TO:calTo,
        					CBO_STS:cbo_sts,
        					CBO_COMP:cboComp,
        					EDT_COMP:edt_comp,
        					EDT_BUYER:edt_buyer
        				}
        	var ozParam = {
                 sId: 'OMG_DS_SC_1110',
                 sUrl: '/rest/oz/bt/rq/retrieveCsltRqList',
                 paramType: 'param',
                 sParam: param
              };
              
            this.ozViewer(ozParam ,"ozViewerPotal");
        	
        }

        
        /*
         * 거절취소
         */
        this.btn_cncl_rjct_onclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.OMG_DS_SC_1110_onload, this);
            this.addEventHandler("onkeydown", this.OMG_DS_SC_1110_onkeydown, this);
            this.div_search.Static02.addEventHandler("onclick", this.Static00_onclick, this);
            this.div_search.Static06.addEventHandler("onclick", this.Static00_onclick, this);
            this.btn_history.addEventHandler("onclick", this.btn_history_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.div_list.grd.addEventHandler("oncellclick", this.div_list_Grid01_oncellclick, this);
            this.div_list.btu_div.addEventHandler("onclick", this.btu_div_onclick, this);
            this.Static00.addEventHandler("onclick", this.Static00_onclick, this);
            this.btn_print.addEventHandler("onclick", this.btn_print_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_1110.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
