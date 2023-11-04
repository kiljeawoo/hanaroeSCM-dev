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
                this.set_name("OMG_DS_SC_5160");
                this.set_titletext("전자계약권한관리");
                this.set_enable("true");
                this._setFormPosition(0,0,800,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_auth", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"ELT_AUTH_DSC_11\" type=\"STRING\" size=\"1\"/><Column id=\"ELT_AUTH_DSC_12\" type=\"STRING\" size=\"1\"/><Column id=\"ELT_AUTH_DSC_13\" type=\"STRING\" size=\"1\"/><Column id=\"ELT_AUTH_DSC_14\" type=\"STRING\" size=\"256\"/><Column id=\"ELT_AUTH_DSC_15\" type=\"STRING\" size=\"1\"/><Column id=\"ELT_AUTH_DSC_99\" type=\"STRING\" size=\"1\"/><Column id=\"ELT_AUTH_DSC_A1\" type=\"STRING\" size=\"1\"/><Column id=\"ELT_AUTH_DSC_A2\" type=\"STRING\" size=\"1\"/><Column id=\"ELT_AUTH_DSC_A3\" type=\"STRING\" size=\"1\"/><Column id=\"ELT_AUTH_DSC_A4\" type=\"STRING\" size=\"1\"/><Column id=\"ELT_AUTH_DSC_A5\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"USR_TPC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_auth_temp", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"ELT_AUTH_DSC_11\" type=\"STRING\" size=\"1\"/><Column id=\"ELT_AUTH_DSC_12\" type=\"STRING\" size=\"1\"/><Column id=\"ELT_AUTH_DSC_13\" type=\"STRING\" size=\"1\"/><Column id=\"ELT_AUTH_DSC_14\" type=\"STRING\" size=\"256\"/><Column id=\"ELT_AUTH_DSC_15\" type=\"STRING\" size=\"256\"/><Column id=\"ELT_AUTH_DSC_99\" type=\"STRING\" size=\"1\"/><Column id=\"ELT_AUTH_DSC_A1\" type=\"STRING\" size=\"1\"/><Column id=\"ELT_AUTH_DSC_A2\" type=\"STRING\" size=\"1\"/><Column id=\"ELT_AUTH_DSC_A3\" type=\"STRING\" size=\"1\"/><Column id=\"ELT_AUTH_DSC_A4\" type=\"STRING\" size=\"1\"/><Column id=\"ELT_AUTH_DSC_A5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_eltAuthDsc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_bzplc", this);
            obj._setContents("<ColumnInfo><Column id=\"BIZ_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"LIST_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_menuAuthDsc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">A1</Col><Col id=\"NAME\">계약체결 최종서명</Col></Row><Row><Col id=\"CODE\">A2</Col><Col id=\"NAME\">담당자 변경 승인</Col></Row><Row><Col id=\"CODE\">A3</Col><Col id=\"NAME\">전자계약 양식 관리</Col></Row><Row><Col id=\"CODE\">A4</Col><Col id=\"NAME\">필수서류 양식 관리</Col></Row></Rows>");
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

            obj = new Button("btn_delete", "absolute", null, "0", "45", "21", "75", null, this);
            obj.set_taborder("10");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "732", "21", "56", "8", null, null, this);
            obj.set_taborder("11");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert", "absolute", null, "0", "41", "21", "165", null, this);
            obj.set_taborder("12");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_update", "absolute", null, "0", "41", "21", "122", null, this);
            obj.set_taborder("14");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "69", "15", null, this);
            obj.set_taborder("15");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Combo("cbo_bzno", "absolute", "268", "10", "334", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("53");
            obj.set_codecolumn("BIZ_NUMBER");
            obj.set_datacolumn("LIST_NM");
            obj.set_innerdataset("@ds_bzplc");
            obj.set_visible("false");
            obj.set_index("-1");
            obj = new Static("Static02", "absolute", "15", "10", "100", "21", null, null, this.div_search);
            obj.set_taborder("44");
            obj.set_text("사용자 구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_title00", "absolute", "268", "10", "151", "21", null, null, this.div_search);
            obj.set_taborder("46");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("div_eltAuthDsc", "absolute", "115", "39", "150", "21", null, null, this.div_search);
            obj.set_taborder("48");
            obj.set_enable("true");
            obj.set_url("common::multiCheckCombo.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "39", "100", "21", null, null, this.div_search);
            obj.set_taborder("51");
            obj.set_text("계약서 권한");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_cond", "absolute", "115", "10", "150", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_cond_innerdataset = new Dataset("cbo_cond_innerdataset", this.div_search.cbo_cond);
            cbo_cond_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">사번</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">이름</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">GLN</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">사업자번호</Col></Row></Rows>");
            obj.set_innerdataset(cbo_cond_innerdataset);
            obj.set_taborder("52");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_text("사번");
            obj.set_index("0");
            obj = new Static("Static01", "absolute", "337", "39", "100", "21", null, null, this.div_search);
            obj.set_taborder("54");
            obj.set_text("메뉴 권한");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("div_menuAuthDsc", "absolute", "437", "39", "150", "21", null, null, this.div_search);
            obj.set_taborder("55");
            obj.set_visible("false");
            obj.set_url("common::multiCheckCombo.xfdl");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "97", null, null, "15", "10", this);
            obj.set_taborder("9");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
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
            obj = new Grid("grd_main01", "absolute", "0", "42", null, null, "0", "0", this.div_list);
            obj.set_taborder("15");
            obj.set_binddataset("ds_auth");
            obj.set_readonly("false");
            obj.set_autofittype("col");
            obj.set_enable("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"38\"/><Column size=\"80\"/><Column size=\"83\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" rowspan=\"2\" text=\"사번\"/><Cell col=\"2\" rowspan=\"2\" text=\"이름\"/><Cell col=\"3\" rowspan=\"2\" text=\"사업자번호\"/><Cell col=\"4\" rowspan=\"2\" text=\"GLN\"/><Cell col=\"5\" rowspan=\"2\" text=\"소속\"/><Cell col=\"6\" rowspan=\"2\" text=\"최고권한\"/><Cell col=\"7\" colspan=\"5\" text=\"전자계약 계약서 조회 권한\"/><Cell col=\"12\" colspan=\"5\" text=\"전자계약 메뉴 권한\"/><Cell row=\"1\" col=\"7\" text=\"마트상품부\"/><Cell row=\"1\" col=\"8\" text=\"공통\"/><Cell row=\"1\" col=\"9\" text=\"농산본부\"/><Cell row=\"1\" col=\"10\" text=\"테넌트\"/><Cell row=\"1\" col=\"11\" text=\"수산\"/><Cell row=\"1\" col=\"12\" text=\"계약체결 최종서명\"/><Cell row=\"1\" col=\"13\" text=\"담당자 변경 승인\"/><Cell row=\"1\" col=\"14\" text=\"전자계약 양식 관리\"/><Cell row=\"1\" col=\"15\" text=\"필수서류 양식 관리\"/><Cell row=\"1\" col=\"16\" text=\"파견 약정서 권한\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" text=\"bind:CHK\" autosizecol=\"none\"/><Cell col=\"1\" text=\"bind:MB_ID\"/><Cell col=\"2\" style=\"color:expr:USR_NM == null ? &quot;#999999FF&quot; : &quot;&quot;;color2:expr:USR_NM == null ? &quot;#999999FF&quot; : &quot;&quot;;selectcolor:expr:USR_NM == null ? &quot;#999999FF&quot; : &quot;&quot;;\" text=\"expr:USR_NM == null ? &quot;&lt;미가입&gt;&quot; : USR_NM\"/><Cell col=\"3\" text=\"bind:BIZ_NUMBER\" mask=\"@@@-@@-@@@@@\"/><Cell col=\"4\" text=\"bind:NA_TRPL_C\"/><Cell col=\"5\" text=\"bind:CLNTNM\"/><Cell col=\"6\" displaytype=\"checkbox\" text=\"bind:ELT_AUTH_DSC_99\"/><Cell col=\"7\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:ELT_AUTH_DSC_11\"/><Cell col=\"8\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:ELT_AUTH_DSC_12\"/><Cell col=\"9\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:ELT_AUTH_DSC_13\"/><Cell col=\"10\" displaytype=\"checkbox\" text=\"bind:ELT_AUTH_DSC_14\"/><Cell col=\"11\" displaytype=\"checkbox\" text=\"bind:ELT_AUTH_DSC_15\"/><Cell col=\"12\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:ELT_AUTH_DSC_A1\"/><Cell col=\"13\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:ELT_AUTH_DSC_A2\"/><Cell col=\"14\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:ELT_AUTH_DSC_A3\"/><Cell col=\"15\" displaytype=\"checkbox\" text=\"bind:ELT_AUTH_DSC_A4\"/><Cell col=\"16\" displaytype=\"checkbox\" edittype=\"none\" text=\"bind:ELT_AUTH_DSC_A5\"/></Band></Format><Format id=\"format_copy\"></Format></Formats>");
            this.div_list.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 965, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("15");
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
            obj = new Layout("default", "", 800, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_5160");
            		p.set_titletext("전자계약권한관리");
            		p.set_enable("true");

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
            this._addPreloadList("fdl", "common::multiCheckCombo.xfdl");
            this._addPreloadList("fdl", "common::multiCheckCombo.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_2213.xfdl", "lib::comLib.xjs");
        this.addIncludeScript("OMG_DS_SC_2213.xfdl", "lib::comElt.xjs");
        this.registerScript("OMG_DS_SC_2213.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";
        //include "lib::comElt.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        this.fv_eltAuthCd = ""; //전자계약 계약서 권한코드
        this.fv_eltAuthNm = ""; //전자계약 계약서 권한명
        this.fv_menuAuthCd = ""; //전자계약 메뉴 권한코드
        this.fv_menuAuthNm = ""; //전자계약 메뉴 권한명
        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        	this.getDS();			//데이터셋 가져오기
        		
        	// 본부회원 메뉴 오픈 시 아래 if문 주석 해제
        // 	if (application.gv_userTPC != "admin") {
        // 		this.gfn_checkEltAuth(obj, "eltCallback"); // 전자계약 권한체크(comElt.xjs)
        // 	} else {
        		
        // 	}
        }

        // 계약서 권한 데이터셋을 불러올 함수
        this.getDS = function()
        {
        	var sSvcID        = "getDS";
        	var sURL          = "svc::rest/ct/eltctrw/retrieveEltctrwBuyerAuthDSList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_eltAuthDsc=ds_eltAuthDsc ds_bzplc=ds_bzplc";
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        //멀티 콤보  - > 계약서 권한
        this.fn_afterCall = function(sVal)
        {	
        	if (sVal.rowcount == 0) {
        		this.fv_eltAuthCd = "";
        		this.fv_eltAuthNm = "";
        	} else {
        		for (var i = 0 ; i < sVal.rowcount; i++) {
        			if (i == 0) {
        				this.fv_eltAuthCd = sVal.getColumn(i, "CODE");
        				this.fv_eltAuthNm = sVal.getColumn(i, "NAME");
        			} else {
        				this.fv_eltAuthCd += "."+sVal.getColumn(i, "CODE") ;
        				this.fv_eltAuthNm += ","+sVal.getColumn(i, "NAME") ;
        			}
        		}
        	}
        }

        //멀티 콤보  - > 메뉴 권한
        this.fn_afterCallMenu = function(sVal)
        {	
        	if (sVal.rowcount == 0) {
        		this.fv_menuAuthCd = "";
        		this.fv_menuAuthNm = "";
        	} else {
        		for (var i = 0; i < sVal.rowcount; i++) {
        			if (i == 0) {
        				this.fv_menuAuthCd = sVal.getColumn(i, "CODE");
        				this.fv_menuAuthNm = sVal.getColumn(i, "NAME");
        			} else {
        				this.fv_menuAuthCd += "."+sVal.getColumn(i, "CODE") ;
        				this.fv_menuAuthNm += ","+sVal.getColumn(i, "NAME") ;
        			}
        		}
        	}
        }

        this.fn_afterFormOnload = function()
        {
        // 	this.div_search.div_menuAuthDsc.setFunctionName("fn_afterCallMenu"); //후처리함수 선언
        // 	this.div_search.div_menuAuthDsc._setWidth(180);                  //가로사이즈 설정(단, 140보다 작으면 기본사이즈인 140으로 설정됨)
        // 	this.div_search.div_menuAuthDsc._setDisplayCount(4);            //보여줄 Row수. Combo의 displayrowcount와 동일.
        // 	this.div_search.div_menuAuthDsc._binddataset(this.ds_menuAuthDsc,"CODE","NAME");
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

         /*조회버튼 이벤트*/
        this.btn_search_onclick = function(obj,e)
        {
        	if (this.fn_validationCheck()) {
         		this.ds_auth.clearData();
         		
         		var search;
         		if (this.div_search.cbo_cond.value == "4") {
        			search = this.div_search.cbo_bzno.value;
         		} else {
        			search = this.gfn_nullToEmpty(this.div_search.edt_title00.value);
         		}
         		
         		var authCd = this.fv_eltAuthCd;
        //  		if (!this.gfn_isNull(this.fv_eltAuthCd) && !this.gfn_isNull(this.fv_menuAuthCd)) {
        // 			authCd += ".";
        // 		}
        // 		authCd += this.fv_menuAuthCd;

        		var params = "proChk=" + this.div_search.cbo_cond.value
        			+ " edtNm=" + search
        			+ " fvEltAuthCd="+ authCd	// 전자계약 계약서 권한코드
        			;
        	
        		var sSvcID        = "retrieveEltctrwBuyerAuthList";
        		var sURL          = "svc::rest/ct/eltctrw/retrieveEltctrwBuyerAuthList";
        		var sInDatasets   = "";
        		var sOutDatasets  = "ds_auth=ds_auth";
        		var sArgument     = params;
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "S"; // U:저장/삭제, S:조회

        		this.gfn_registerSvcDS(sSvcID, this.ds_auth, false);
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        /* 등록 및 수정시 사용되는 Validation Check */
        this.fn_validationCheck = function()
        {
        	// 입력값 체크
        	var hasCond = false;
        	if (!this.gfn_isNull(this.div_search.edt_title00.value)) {
        		// this.div_search.edt_title00.setFocus();
        		hasCond = true;
        	}
        	
        	if (this.div_search.cbo_cond.value == "4" && !this.gfn_isNull(this.div_search.cbo_bzno.value)) {
        		hasCond = true;
        	}
        	
        	if (!this.gfn_isNull(this.fv_eltAuthCd)) {
        		hasCond = true;
        	}
        	
        	if (!this.gfn_isNull(this.fv_menuAuthCd)) {
        		hasCond = true;
        	}
        	
        	if (!hasCond) {
        		alert("최소 하나 이상의 검색 조건을 선택/입력해야 합니다");
        		return false;
        	}
            return true;
        }

         /*등록버튼 이벤트*/
        this.btn_insert_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"I", dsArg:this.ds_auth};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("popId","OMG.CT::OMG_DS_SC_2213_P01.xfdl",oArg,sOption,sPopupCallBack);
        }

        /*수정버튼 이벤트*/
        this.btn_update_onclick = function(obj,e)
        {
        	var checkCnt =0 ;	//선택된 체크박스 개수
        	var position =0 ;	//선택된 체크박스 위치
        	for (var i = 0 ; i < this.ds_auth.rowcount; i++) {
        		if (this.ds_auth.getColumn(i, "CHK") =="1") {
        			checkCnt = checkCnt +1;
        			position = i;
        		}
        	}

        	this.ds_auth_temp.clearData();
        	if (checkCnt > 1) {
        		alert("하나의 행만 선택해주시기 바랍니다.");
        		return;
        	} else if(checkCnt == 0) {
        		alert("수정할 행을 선택해주시기 바랍니다.");
        		return;
        	} else {
        		this.ds_auth_temp.addRow();
        		this.ds_auth_temp.copyRow(0,this.ds_auth,position);
        		
        		var oArg = {paramMode:"U", dsArg:this.ds_auth_temp};
        		var sOption = "autosize=true";
        		var sPopupCallBack = "fn_popupAfter";
        		this.gfn_openPopup("popId","OMG.CT::OMG_DS_SC_2213_P01.xfdl",oArg,sOption,sPopupCallBack);
        	}
        }

        /*삭제버튼 이벤트*/
        this.btn_delete_onclick = function(obj,e)
        {
        	var checkCnt =0 ;	//선택된 체크박스 개수

        	this.ds_auth_temp.clearData();
        	// 체크된 행들을 순차적으로 ds_param에 적재한다.
        	for (var i = 0 ; i < this.ds_auth.rowcount; i++) {
        		if(this.ds_auth.getColumn(i, "CHK") =="1"){
        		  checkCnt = checkCnt +1;
        		  this.ds_auth_temp.insertRow(checkCnt-1);
        		  this.ds_auth_temp.copyRow(checkCnt-1,this.ds_auth,i);
        		}
        	}

        	if (checkCnt > 0) {
        		var cfm = this.confirm("권한을 삭제하시겠습니까?");
        		if (cfm) {
        			var sParams       = "";
        			var sSvcID        = "deleteEltctrwBuyerAuth";
        			var sURL          = "svc::rest/ct/eltctrw/deleteEltctrwBuyerAuth";
        			var sInDatasets   = "ds_auth=ds_auth_temp";
        			var sOutDatasets  = "";
        			var sArgument     = "";
        			var sCallbackFunc = "fn_callBack";
        			var sTranType     = "U"; // U:저장/삭제, S:조회

        			this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        		}
        	} else {
        		alert("삭제할 행을 선택해주시기 바랍니다.");
        		this.ds_param.clearData();
        		return;
        	 }

        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        /*
         * 전자계약 권한체크
         */
        this.eltCallback = function()
        {
        	if (!this.gfn_hasEltAuth("ELT_99")) {
        		this.alert("최고권한 보유자만 사용 가능한 메뉴 입니다.");
        		this.set_enable(false);
        	} else {
        		/*조회 호출*/
        		this.btn_search.click();
        	}
        }

         /*팝업호출확인하기*/
        this.fn_popupAfter = function(strId,strVal)
        {
        	if (!this.gfn_isNull(strVal)) {
        		this.btn_search.click();
        	} else {
        		for (var i = 0 ; i < this.ds_auth.rowcount; i++) {
        			this.ds_auth.setColumn(i,"CHK",0);
        		}
        	}
        }

         /*상단 전체 선택/해제 체크박스 및 컬럼 정렬 이벤트*/
        this.div_list_grd_main01_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		this.gfn_setGridCheckAll(obj,e);
        	} else {
        		this.gfn_gridSort(obj, e);
        	}
        }

         /*콜백메소드*/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	for (var i = 0 ; i < this.ds_auth.rowcount; i++) {
        		this.ds_auth.setColumn(i,"CHK",0);
        	}
        	this.gfn_svcDsToggle(svcID, true);

        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        	 	if (svcID == "getDS") {
        			this.div_search.div_eltAuthDsc.setFunctionName("fn_afterCall"); //후처리함수 선언
        			this.div_search.div_eltAuthDsc._setWidth(180); //가로사이즈 설정(단, 140보다 작으면 기본사이즈인 140으로 설정됨)
        			this.div_search.div_eltAuthDsc._setDisplayCount(4); //보여줄 Row수. Combo의 displayrowcount와 동일.
        			this.div_search.div_eltAuthDsc._binddataset(this.ds_eltAuthDsc, "CODE", "NAME");
        			
        			this.div_search.cbo_bzno.set_value("8258502030"); // 변경 전 상품본부 사업자번호 1048659132
        	 	} else if (svcID == "retrieveEltctrwBuyerAuthList") {
        			this.list_empty_check(this.ds_auth.rowcount == 0);
        	 	} else if (svcID=="deleteEltctrwBuyerAuth") {
        	 		if (ErrorCode == 0) {
        	 			this.gfn_getMessage("alert", "result.message.save.success");
        	 			this.btn_search.click();
        	 		}
        	 	} else {
        			this.list_empty_check(this.ds_auth.rowcount == 0);
        	 	}
        	 }
        }

        this.list_empty_check = function(isEmpty) {
        	this.btn_delete.set_enable(!isEmpty);
        	this.btn_update.set_enable(!isEmpty);
        	if (isEmpty) {
        		this.div_list.grd_main01.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	}
        }

        this.btn_flag_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        this.div_list_grd_main01_oncellclick = function(obj,e)
        {
        	var chk = this.ds_auth.getColumn(e.row, "CHK");
        	if (chk == "0") {
        		this.ds_auth.setColumn(e.row, "CHK", "1");
        	} else {
        		this.ds_auth.setColumn(e.row, "CHK", "0");
        	}
        }

        this.div_search_cbo_cond_onitemchanged = function(obj,e)
        {
        	this.div_search.edt_title00.set_value("");
        	this.div_search.cbo_bzno.set_visible(obj.value == "4");
        	this.div_search.edt_title00.set_visible(obj.value != "4");
        }

        this.div_search_edt_title00_onkeydown = function(obj,e)
        {
        	if (e.keycode == '13') {
        		this.btn_search_onclick();
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_delete.addEventHandler("onclick", this.btn_delete_onclick, this);
            this.btn_insert.addEventHandler("onclick", this.btn_insert_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_update.addEventHandler("onclick", this.btn_update_onclick, this);
            this.div_search.edt_title00.addEventHandler("onkeydown", this.div_search_edt_title00_onkeydown, this);
            this.div_search.cbo_cond.addEventHandler("onitemchanged", this.div_search_cbo_cond_onitemchanged, this);
            this.div_list.btn_flag.addEventHandler("onclick", this.btn_flag_onclick, this);
            this.div_list.grd_main01.addEventHandler("oncellclick", this.div_list_grd_main01_oncellclick, this);
            this.div_list.grd_main01.addEventHandler("onheadclick", this.div_list_grd_main01_onheadclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_2213.xfdl");
        this.loadPreloadList();
       
    };
}
)();
