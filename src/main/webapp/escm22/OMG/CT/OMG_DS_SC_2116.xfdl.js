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
                this.set_titletext("계약담당자 변경승인");
                this._setFormPosition(0,0,803,597);
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
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"MN_CTRW_KD\" type=\"STRING\" size=\"256\"/><Column id=\"MN_CTRW_KD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"MTALNM\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_DRUP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"COLB_COMP_SGNT_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_APV_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"STS\" type=\"STRING\" size=\"256\"/><Column id=\"STS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STS_CANCEL\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_REQ_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_ENO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_save", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"MN_CTRW_KD\" type=\"STRING\" size=\"256\"/><Column id=\"MN_CTRW_KD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"MTALNM\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_DRUP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"COLB_COMP_SGNT_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_APV_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"STS\" type=\"STRING\" size=\"256\"/><Column id=\"STS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STS_CANCEL\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_REQ_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_BUYER_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_BUYER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_NA_TRPL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_NA_TRPL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_elt", this);
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_BUYER_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_BUYER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_REQ_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_chiefCheck", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BIZ_NUMBER\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_authBranch", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"AUTH_CHECK\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "1", "55", null, null, "3", "-45", this);
            obj.set_taborder("4");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_rsclist", "absolute", "5", "9", null, null, "2.5%", "82", this.div_list);
            obj.set_taborder("36");
            obj.set_binddataset("ds_save");
            obj.set_autofittype("col");
            obj.set_scrollbars("fixedhorz");
            obj.set_scrollpixel("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"31\"/><Column size=\"40\"/><Column size=\"103\"/><Column size=\"85\"/><Column size=\"157\"/><Column size=\"141\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"130\"/><Column size=\"62\"/><Column size=\"68\"/><Column size=\"93\"/><Column size=\"98\"/><Column size=\"175\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"계약서번호\"/><Cell col=\"3\" text=\"계약담당자명\"/><Cell col=\"4\" text=\"계약담당자소속\"/><Cell col=\"5\" text=\"계약서종류\"/><Cell col=\"6\" text=\"거래처코드\"/><Cell col=\"7\" text=\"계약자상호\"/><Cell col=\"8\" text=\"계약시작일\"/><Cell col=\"9\" text=\"해지여부\"/><Cell col=\"10\" text=\"상태\"/><Cell col=\"11\" text=\"변경신청상태\"/><Cell col=\"12\" text=\"변경신청계약담당자\"/><Cell col=\"13\" text=\"변경신청계약담당자소속\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:ELT_CTRW_NO\"/><Cell col=\"3\" text=\"bind:BUYER_NM\"/><Cell col=\"4\" text=\"bind:BUYER_NA_TRPL_NM\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:MN_CTRW_KD_NM\"/><Cell col=\"6\" text=\"bind:NA_TRPL_C\"/><Cell col=\"7\" text=\"bind:MTALNM\"/><Cell col=\"8\" text=\"bind:CTR_DT\" mask=\"@@@@-@@-@@ @ @@@@-@@-@@\" combodisplay=\"display\"/><Cell col=\"9\" text=\"bind:STS_CANCEL\"/><Cell col=\"10\" text=\"bind:STS_NM\"/><Cell col=\"11\" text=\"bind:CHG_REQ_STAT\"/><Cell col=\"12\" text=\"bind:CHG_BUYER_NM\"/><Cell col=\"13\" text=\"bind:CHG_NA_TRPL_NM\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "36", "58", "21", "24", null, this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_approve", "absolute", null, "36", "49", "21", "87", null, this);
            obj.set_taborder("8");
            obj.set_text("승인");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_hold", "absolute", null, "36", "51", "21", "142", null, this);
            obj.set_taborder("9");
            obj.set_text("보류");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_text("Div02");
            		p.set_scrollbars("none");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 597, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_2116");
            		p.set_titletext("계약담당자 변경승인");

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
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_2116.xfdl", "lib::comLib.xjs");
        this.addIncludeScript("OMG_DS_SC_2116.xfdl", "lib::comElt.xjs");
        this.registerScript("OMG_DS_SC_2116.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comElt.xjs", null, exports); }	//include "lib::comElt.xjs";

        /* Form Load */
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj,e);
        	this.div_list.grd_rsclist.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));

        	// 권한획득 전 초기세팅 : N
        	// this.btn_approve.set_visible(false); // 승인버튼 감추기

        	/*
        	this.ds_chiefCheck.setColumn(0,"BIZ_NUMBER","");
        	// this.ds_authBranch.clearData();

            // 마스터 사용자 아이디 배열 추가
            var arrCtrwMasterUser = [
        		"K2000040", // 상품본부 박소연 과장 (200114)
        		"13400067", // 신지혜: 농산본부 담당자
        		"89104697", // 김승철: 본부장
        		"19380018", // 김병수: 대표이사 (200129)
        		"89109647", // 강인호: 옴니마케팅본부장 (200129)
        		"91102470", // 현종철: 마트지원본부장 (200129)
        		"89103251", // 이석희: 상품본부장 (200129)
        		"91110414", // 김문기: 농축산물류본부장 (200129)
        		"END"
        	];

            if (arrCtrwMasterUser.indexOf(application.gv_userId) < 0 ) {
        		this.fn_checkChief();   // 점장권한 체크
        		this.fn_checkBranch();  // 직매장여부 체크
            } else {
        		this.btn_hold.set_visible(true); // 보류버튼 보이기
        		this.btn_approve.set_visible(true);
            }
            */
        	this.gfn_checkEltAuth(obj, "eltCallback"); // 전자계약 권한체크(comElt.xjs)
        }

        /*
         * 전자계약 권한체크
         */
        this.eltCallback = function()
        {
        	if (!this.gfn_eltAvailable()) {
        		this.alert("하나로유통 직매장만 사용 가능한 메뉴 입니다.");
        		this.set_enable(false);
        	} else if (this.gfn_hasEltAuth("ELT_A2")) {
        		this.btn_hold.set_visible(true); // 보류버튼 보이기
        		this.btn_approve.set_visible(true);
        	}
        }

        //gfn_setCommonCode처리 후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        	//선택사항. 선언안하면 기본으로 설정됨. Width:140, displayrowcount:5
        }

        /*전자계약 조회*/
        this.btn_search_onclick = function(obj,e)
        {
        	this.search();
        }

        /*조회*/
        this.search = function()
        {
        	var login_id =application.gv_userId;
        	var param = "BUYER_ENO="+login_id
        				+" CHECK=1";

        	var sSvcID        = "search_m";//통신아이디
        	var sURL          = "svc::rest/ct/eltctrw/retrieveChgelt";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_save=ds_save";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
            // alert(svcID);
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID == "updateStat") {
        			alert("계약담당자이관 신청이 완료되었습니다.");
        			this.search();
        			this.search_m();
        		} else if (svcID == "updateBuyer") {
        			alert("계약담당자이관 승인이 완료되었습니다.");
        			this.search();
        		} else if (svcID == "updatecancelBuyer") {
        			alert("보류가 완료되었습니다.");
        			this.search();
        		} else if (svcID == "chiefCheck") {
        			// 점장인 경우 버튼 활성화.
        			if (this.ds_chiefCheck.getColumn(0, "BIZ_NUMBER") == application.gv_bizNumber) {
        				this.btn_hold.set_visible(true); // 보류버튼 보이기
        				this.btn_approve.set_visible(true);
        			}
        		} else if (svcID == "branchCheck") {
                    // 직매장이 아닌 사업장인 경우
        			if (application.gv_userType == "03" && this.ds_authBranch.getColumn(0, "AUTH_CHECK") != "Y" ) {
        				 alert("하나로유통 직매장만 사용 가능한 메뉴 입니다.");
        				 this.set_enable(false);
        			}
        		}
        	}
        }

        /*변경 취소*/
        this.btn_cancel = function()
        {
        	var count = this.ds_elt.getRowCount(); //변경할 전자계약 건수
        	if (confirm(count+"건의 계약서 계약담당자 변경 보류하시겠습니까?")) {
        		var sSvcID        = "updatecancelBuyer"; //통신아이디
        		var sURL          = "svc::rest/ct/eltctrw/EltupdateStat";// 호출할 서버 페이지 주소
        		var sInDatasets   = "ds_elt=ds_elt";//보내는데이터셋
        		var sOutDatasets  = "";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = "";// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회

        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        this.div_list_grd_rsclist_oncellclick = function(obj,e)
        {
        	var login_id =application.gv_userId;

        	if (e.cell == 0) {
        		if (this.ds_save.getColumn(e.row, "CHG_REQ_STAT") == "보류") {
        			alert("보류건 입니다");
        			this.ds_save.setColumn(e.row, "ISCHECKED", 0);
        		}
        	}
        }

        /*
         * 승인버튼 클릭시
         */
        this.btn_approve_onclick = function(obj,e)
        {
        	this.ds_elt.clearData();
        	var isRowChecked = '0';
        	var eltcheck = 0;
        	var saveCnt = this.ds_save.getRowCount();
        	var login_id = application.gv_userId;
        	var selectCnt = this.checkIndexCnt(this.div_list.grd_rsclist);

        	if (selectCnt == 0) {
        		this.alert(this.gfn_getTextMessage('msg.van_ds_sc_1850.alert.save3'));
        		return;
        	} else {
        		for (var i = 0; i < saveCnt ; i++) {
        			isRowChecked =  this.ds_save.getColumn(i, 'ISCHECKED');
        			if (isRowChecked == '1') {
        				var elt_no = this.ds_save.getColumn(i, 'ELT_CTRW_NO');
        				var CHG_SQNO = this.ds_save.getColumn(i, 'CHG_SQNO');
        				var buyerEno = this.ds_save.getColumn(i, 'BUYER_ENO');
        				this.ds_elt.addRow();
        				this.ds_elt.setColumn(eltcheck,"ELT_CTRW_NO",elt_no);
        				this.ds_elt.setColumn(eltcheck,"BUYER_ENO",buyerEno);
        				this.ds_elt.setColumn(eltcheck,"CHG_SQNO",CHG_SQNO);
        				eltcheck++;
        			}
        		}

        		/*변경 승인*/
        		// this.btn_approve = function()
        		var count = this.ds_elt.getRowCount(); //변경할 전자계약 건수
        		if (confirm(count+"건의 계약서 계약담당자 변경 승인하시겠습니까?")) {
        			var sSvcID        = "updateBuyer";//통신아이디
        			var sURL          = "svc::rest/ct/eltctrw/EltupdateBuyer";// 호출할 서버 페이지 주소
        			var sInDatasets   = "ds_elt=ds_elt";//보내는데이터셋
        			var sOutDatasets  = "";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        			var sArgument     = "";// 파라미터
        			var sCallbackFunc = "fn_callBack";//콜백
        			var sTranType     = "S"; // U:저장/삭제, S:조회

        			//API 호출
        			this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        		}
        	}
        }

        this.btn_hold_onclick = function(obj,e)
        {
        	var isRowChecked = '0';
        	var eltcheck = 0;
        	this.ds_elt.clearData();
        	var saveCnt = this.ds_save.getRowCount();
        	var login_id =application.gv_userId;
        	var selectCnt = this.checkIndexCnt(this.div_list.grd_rsclist);

        	if (selectCnt == 0) {
        		this.alert(this.gfn_getTextMessage('msg.van_ds_sc_1850.alert.save3'));
        		return;
        	} else {
        		for (var i = 0; i < saveCnt ; i++) {
        			isRowChecked =  this.ds_save.getColumn(i, 'ISCHECKED');
        			if (isRowChecked == '1') {
        				var elt_no = this.ds_save.getColumn(i, 'ELT_CTRW_NO');
        				this.ds_elt.addRow();
        				this.ds_elt.setColumn(eltcheck,"ELT_CTRW_NO",elt_no);
        				this.ds_elt.setColumn(eltcheck,"BUYER_ENO",login_id);
        				this.ds_elt.setColumn(eltcheck,"CHG_REQ_STAT","O");
        				eltcheck++;
        			}
        		}
        		this.btn_cancel();
        	}
        }

        this.div_list_grd_rsclist_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		this.gfn_setGridCheckAll(obj,e);
        	}
        }

        /*
         * 직매장 점장의 사업자번호 리스트 리턴
         */
        this.fn_checkChief = function()
        {
        	var sParams = "branch_dsc="+ "01"  // 대리점 구분 01 직매장
        				+ " mb_id=";
        	var sSvcID        = "chiefCheck";
        	var sURL          = "svc::rest/pt/checkStoreChief";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_chiefCheck=ds_chiefCheck";
        	var sArgument     =  sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /*
         * 직매장 로그인 시 Y/N 리턴
         */
        this.fn_checkBranch = function()
        {
        	var sParams = "branch_dsc="+ "01"  // 대리점 구분 01 직매장
        				+ " mb_id=";
        	var sSvcID        = "branchCheck";
        	var sURL          = "svc::rest/pt/checkBranch";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_authBranch=ds_authBranch";  //
        	var sArgument     =  sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_list.grd_rsclist.addEventHandler("oncellclick", this.div_list_grd_rsclist_oncellclick, this);
            this.div_list.grd_rsclist.addEventHandler("onheadclick", this.div_list_grd_rsclist_onheadclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_approve.addEventHandler("onclick", this.btn_approve_onclick, this);
            this.btn_hold.addEventHandler("onclick", this.btn_hold_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_2116.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
