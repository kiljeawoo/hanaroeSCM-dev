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
                this.set_name("OMG_DS_SC_1210_01");
                this.set_titletext("진행결과보기 Tab (신청자)");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_sum", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"CSLT_RQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_CHRG_BSNNM\" type=\"STRING\" size=\"256\"/><Column id=\"CONM\" type=\"STRING\" size=\"256\"/><Column id=\"BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"CHRRNM\" type=\"STRING\" size=\"256\"/><Column id=\"CHRR_MPNO\" type=\"STRING\" size=\"256\"/><Column id=\"RQ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"STS\" type=\"STRING\" size=\"256\"/><Column id=\"STS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MAJ_LATC\" type=\"STRING\" size=\"256\"/><Column id=\"CSLT_DSC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"string\" size=\"13\"/><Column id=\"name\" type=\"string\" size=\"13\"/></ColumnInfo><Rows><Row><Col id=\"code\">101</Col><Col id=\"name\">마트상품부</Col></Row><Row><Col id=\"code\">201</Col><Col id=\"name\">[수산] 선어/활어</Col></Row><Row><Col id=\"code\">202</Col><Col id=\"name\">[수산] 건어/가공</Col></Row><Row><Col id=\"code\">203</Col><Col id=\"name\">[수산] 냉동</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Tab("tab_search", "absolute", "0", "-32", null, null, "2", "2", this);
            obj.set_taborder("12");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.style.set_padding("15 0 15 0");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.tab_search);
            obj.set_text("신청내역조회");
            obj.set_url("OMG.BT::OMG_DS_SC_1210.xfdl");
            this.tab_search.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.tab_search);
            obj.set_text("신청내역상세");
            obj.set_url("OMG.BT::OMG_DS_SC_1212.xfdl");
            this.tab_search.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("진행결과보기 Tab (신청자)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "OMG.BT::OMG_DS_SC_1210.xfdl");
            this._addPreloadList("fdl", "OMG.BT::OMG_DS_SC_1212.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_1210_01.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_1210_01.xfdl", function() {
        //include "lib::comLib.xjs";

        var fv_sts = "";
        var fv_dsc = "";
        var fv_maeBzno = "";
        var fv_edt_ChrrNm = "";
        var fv_chrr_mpno = "";

        this.OMG_DS_SC_1210_01_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj,e);
        	
        	var toDay = this.gfn_today("yyyyMMdd");
        	var chkDay = this.gfn_minusMonth(toDay, 1);
        	this.tab_search.tabpage1.div_search.cal_from.set_value(chkDay);
        	this.tab_search.tabpage1.div_search.cal_to.set_value(toDay);
        	
        	// 공통코드 가져오기
        	var param = [
        		{ code: "CTR_STS", dsName: "ds_ctrSts", selecttype: "" }
        	];
        	this.gfn_setPortalCommonCode(param);
        	
        	this.tab_search.tabpage1.div_search.div_ctrSts._binddataset(this.ds_ctrSts, "SIMP_C", "SIMP_CNM");
        	this.tab_search.tabpage1.div_search.div_ctrSts.setFunctionName("fn_afterCall"); // 후처리함수 선언
        	this.tab_search.tabpage1.div_search.div_ctrDsc._setWidth(180);
        	this.tab_search.tabpage1.div_search.div_ctrDsc._binddataset(this.ds_dsc, "code", "name");
        	this.tab_search.tabpage1.div_search.div_ctrDsc.setFunctionName("fn_afterDscCall"); // 후처리함수 선언
        	this.tab_search.tabpage1.div_list.Grid01.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        	
        	this.fn_openRequsetConfirm();
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

        this.fn_requestSum = function()
        {
        	if (!fv_maeBzno) {
        		this.fn_openRequsetConfirm();
        		return;
        	}

        	this.ds_sum.clearData();
        	
        	var maeBzno = this.gfn_nullToEmpty(fv_maeBzno); // 사업자등록번호
        	var edtChrrNm = this.gfn_nullToEmpty(fv_edt_ChrrNm); // 신청자
        	var chrr_mpno = this.gfn_nullToEmpty(fv_chrr_mpno); // 휴대폰
        	
        	var calFrom = this.gfn_nullToEmpty(this.tab_search.tabpage1.div_search.cal_from.value); // 조회시작일
        	var calTo = this.gfn_nullToEmpty(this.tab_search.tabpage1.div_search.cal_to.value); // 조회종료일
        	var edtBuyer = this.gfn_nullToEmpty(this.tab_search.tabpage1.div_search.edt_buyer.value); // 담당바이어
        	
        	var param = "mae_bzno=" + maeBzno
        			+ " edt_chrrNm='" + edtChrrNm + "'"
        			+ " chrr_mpno=" + chrr_mpno
        			+ " cal_from=" + calFrom
        			+ " cal_to=" + calTo
        			+ " cbo_sts=" + fv_sts
        			+ " cbo_dsc=" + fv_dsc
        			+ " edt_buyer=" + edtBuyer;
        	
        	var sSvcID        = "search";
        	var sURL          = "svc::/rest/bt/rqBrk/retrieveRqBrkList";
        	var sInDatasets   = ""
        	var sOutDatasets  = "ds_sum=ds_sum";
        	var sArgument     = param;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}
        	this.tab_search.tabpage1.ds_copy.copyData(this.ds_sum);
        }

        this.fn_validationCheck = function()
        {
        	var calFrom = this.tab_search.tabpage1.div_search.cal_from.value;
        	var calTo = this.tab_search.tabpage1.div_search.cal_to.value;
        	
        	if (this.gfn_isNull(calFrom)) {
        		this.gfn_getMessage("alert", "validation.message.fromDate.no.data");
        		return false;
        	}
        	if (this.gfn_isNull(calTo)) {
        		this.gfn_getMessage("alert", "validation.message.toDate.no.data");
        		return false;
        	}
        	if (this.gfn_getDiffDay(calFrom, calTo) < 0) {
        		this.gfn_getMessage("alert", "validation.message.fromDate.toDate.reConfirm");
        		return false;
        	}
        	
        	return true;
        }

        // 상담신청내역 조회
        this.tab_search.tabpage1.btn_search_onclick = function(obj,e)
        {
        	this.ds_copy.clearData();
        	this.parent.parent.ds_sum.clearData();
        	
        	if (this.parent.parent.fn_validationCheck()) {
        		this.parent.parent.fn_requestSum();
        	}
        }

        this.tab_search.tabpage1.btn_history_onclick = function(obj,e)
        {
        	var cslt_rq_no = null;
        	
        	for (var i = 0; i < this.ds_copy.rowcount; i++) {
        		if (this.ds_copy.getColumn(i, "ISCHECKED") == 1) {
        			cslt_rq_no = this.ds_copy.getColumn(i, "CSLT_RQ_NO");
        			
        			if (!this.gfn_isNull(cslt_rq_no)) {
        				var oArg = { paramMode: "S", dsArg: this.ds_copy, cslt_rq_no: cslt_rq_no };
        				var sOption = "autosize=true,title=true";
        				var sPopupCallBack = "fn_popupAfter";
        				this.gfn_openPopup("OMG_DS_SC_1130", "OMG.BT::OMG_DS_SC_1130.xfdl", oArg, sOption, sPopupCallBack);
        				break;
        			}
        		}
        	}
        	
        	if (this.gfn_isNull(cslt_rq_no)) {
        		alert("이력을 조회할 상담신청내역을 선택하세요.");
        	}
        }

        // 상담신청내역 상세 Cell Click 이동
        this.tab_search.tabpage1.div_list_Grid01_oncellclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		this.gfn_singleChk(obj, e);
        	} else {
        		// 상세 조회
        		if (this.parent.tabpage2.search) { // tabpage2가 이미 로딩되어 있으면, search()를 다시 호출해야 한다.
        			this.parent.tabpage2.reload(); // search() 대신 -> reload() 를 호출해야 버튼 등 보이기/숨기기 설정이 초기화된다.
        		}
        		this.parent.set_tabindex(1); // tabpage2 show
        	}
        }

        this.OMG_DS_SC_1210_01_onbeforeclose = function(obj,e)
        {
        	
        }

        // 상담신청내역확인 팝업
        this.fn_openRequsetConfirm = function()
        {
        	var oArg = {};
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("OMG_DS_SC_1211", "OMG.BT::OMG_DS_SC_1211.xfdl", oArg, sOption, sPopupCallBack);
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	if (strId == "OMG_DS_SC_1211" && strVal) {
        		var arrVal = strVal.split(",");
        		
        		fv_maeBzno = arrVal[0];
        		fv_edt_ChrrNm = decodeURIComponent(arrVal[1]);
        		fv_chrr_mpno = arrVal[2];
        		
        		this.fn_requestSum(); // 목록 조회
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.OMG_DS_SC_1210_01_onload, this);
            this.addEventHandler("onbeforeclose", this.OMG_DS_SC_1210_01_onbeforeclose, this);

        };

        this.loadIncludeScript("OMG_DS_SC_1210_01.xfdl");
        this.loadPreloadList();
       
    };
}
)();
