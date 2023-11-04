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
                this.set_titletext("전자계약직매장권한관리");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"BIZ_NUMBER\" type=\"STRING\" size=\"32\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM2\" type=\"STRING\" size=\"200\"/><Column id=\"CHIEF_ENO\" type=\"STRING\" size=\"9\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"BIZ_NUMBER\" type=\"STRING\" size=\"32\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM2\" type=\"STRING\" size=\"200\"/><Column id=\"CHIEF_ENO\" type=\"STRING\" size=\"9\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_auth_excel", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"BIZ_NUMBER\" type=\"STRING\" size=\"32\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM2\" type=\"STRING\" size=\"200\"/><Column id=\"CHIEF_ENO\" type=\"STRING\" size=\"9\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "28", null, "69", "15", null, this);
            obj.set_taborder("5");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "16", "10", "118", "21", null, null, this.div_search);
            obj.set_taborder("44");
            obj.set_text("사업자 번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new MaskEdit("edt_bizNumeber", "absolute", "141", "10", "211", "21", null, null, this.div_search);
            obj.set_taborder("46");
            obj.getSetter("lengthunit").set("ascii");
            obj.getSetter("maxlength").set("50");
            obj.set_maskchar("_");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_clntim", "absolute", "141", "39", "211", "21", null, null, this.div_search);
            obj.set_taborder("47");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "16", "39", "118", "21", null, null, this.div_search);
            obj.set_taborder("48");
            obj.set_text("사업장명");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "390", "10", "118", "21", null, null, this.div_search);
            obj.set_taborder("49");
            obj.set_text("점장사번");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_chiefEno", "absolute", "483", "10", "121", "21", null, null, this.div_search);
            obj.set_taborder("50");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("20");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "390", "39", "118", "21", null, null, this.div_search);
            obj.set_taborder("51");
            obj.set_text("GLN");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_gln", "absolute", "483", "39", "211", "21", null, null, this.div_search);
            obj.set_taborder("52");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("7");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "787", "0", "15", "490", null, null, this);
            obj.set_taborder("8");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "96", null, null, "15", "10", this);
            obj.set_taborder("6");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Button("btn_flag", "absolute", "347", "0", null, "12", "363", null, this.div_list);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_main01", "absolute", "0", "42", null, null, "0", "0", this.div_list);
            obj.set_taborder("12");
            obj.set_binddataset("ds_auth");
            obj.set_autofittype("col");
            obj.set_formatid("basic");
            obj._setContents("<Formats><Format id=\"basic\"><Columns><Column size=\"38\"/><Column size=\"114\"/><Column size=\"185\"/><Column size=\"88\"/><Column size=\"100\"/><Column size=\"110\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"사업자번호\"/><Cell col=\"2\" text=\"대표 사업장명\"/><Cell col=\"3\" text=\"점장 사번\"/><Cell col=\"4\" text=\"점장명\"/><Cell col=\"5\" text=\"등록일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" text=\"bind:CHK\" autosizecol=\"none\"/><Cell col=\"1\" text=\"bind:BIZ_NUMBER\" mask=\"@@@-@@-@@@@@\"/><Cell col=\"2\" text=\"bind:CLNTNM\"/><Cell col=\"3\" style=\"color:expr:CHIEF_ENO == null ? &quot;#999999FF&quot; : &quot;&quot;;color2:expr:CHIEF_ENO == null ? &quot;#999999FF&quot; : &quot;&quot;;selectcolor:expr:CHIEF_ENO == null ? &quot;#999999FF&quot; : &quot;&quot;;\" text=\"expr:CHIEF_ENO != null ? CHIEF_ENO : &quot;&lt;점장 미등록&gt;&quot;\"/><Cell col=\"4\" style=\"color:expr:USR_NM == null ? &quot;#999999FF&quot; : &quot;&quot;;color2:expr:USR_NM == null ? &quot;#999999FF&quot; : &quot;&quot;;selectcolor:expr:USR_NM == null ? &quot;#999999FF&quot; : &quot;&quot;;\" text=\"expr:CHIEF_ENO != null &amp;&amp; USR_NM == null ? &quot;&lt;미가입&gt;&quot; : USR_NM\"/><Cell col=\"5\" text=\"bind:FSRG_DTM\" mask=\"@@@@-@@-@@\" calendardisplay=\"display\"/></Band></Format><Format id=\"detail\"><Columns><Column size=\"0\"/><Column size=\"114\"/><Column size=\"136\"/><Column size=\"185\"/><Column size=\"88\"/><Column size=\"100\"/><Column size=\"110\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" text=\"사업자번호\"/><Cell col=\"2\" text=\"관련 사업장코드\"/><Cell col=\"3\" text=\"사업장명\"/><Cell col=\"4\" text=\"점장 사번\"/><Cell col=\"5\" text=\"점장명\"/><Cell col=\"6\" text=\"등록일\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" style=\"background:#ffffffff;background2:#ffffffff;\" suppress=\"bind:BIZ_NUMBER\" suppressalign=\"middle\" autosizecol=\"none\"/><Cell col=\"1\" style=\"background:#ffffffff;background2:#ffffffff;\" text=\"bind:BIZ_NUMBER\" mask=\"@@@-@@-@@@@@\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"2\" text=\"bind:NA_TRPL_C\"/><Cell col=\"3\" text=\"bind:CLNTNM2\"/><Cell col=\"4\" style=\"background:#ffffffff;background2:#ffffffff;color:expr:CHIEF_ENO == null ? &quot;#999999FF&quot; : &quot;&quot;;color2:expr:CHIEF_ENO == null ? &quot;#999999FF&quot; : &quot;&quot;;selectcolor:expr:CHIEF_ENO == null ? &quot;#999999FF&quot; : &quot;&quot;;\" text=\"expr:CHIEF_ENO != null ? CHIEF_ENO : &quot;&lt;점장 미등록&gt;&quot;\" suppress=\"2\" suppressalign=\"middle\"/><Cell col=\"5\" style=\"background:#ffffffff;background2:#ffffffff;color:expr:USR_NM == null ? &quot;#999999FF&quot; : &quot;&quot;;color2:expr:USR_NM == null ? &quot;#999999FF&quot; : &quot;&quot;;selectcolor:expr:USR_NM == null ? &quot;#999999FF&quot; : &quot;&quot;;\" text=\"expr:CHIEF_ENO != null &amp;&amp; USR_NM == null ? &quot;&lt;미가입&gt;&quot; : USR_NM\" suppress=\"3\" suppressalign=\"middle\"/><Cell col=\"6\" style=\"background:#ffffffff;background2:#ffffffff;\" text=\"bind:FSRG_DTM\" mask=\"@@@@-@@-@@\" suppress=\"4\" suppressalign=\"middle\" calendardisplay=\"display\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_swap", "absolute", null, "16", "112", "21", "0", null, this.div_list);
            obj.set_taborder("13");
            obj.set_text("모든 사업장 보기");
            obj.set_cssclass("btn_WF_CRUD");
            this.div_list.addChild(obj.name, obj);

            obj = new Button("btn_delete", "absolute", null, "0", "45", "21", "75", null, this);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "732", "21", "56", "8", null, null, this);
            obj.set_taborder("11");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert", "absolute", null, "0", "41", "21", "165", null, this);
            obj.set_taborder("1");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_update", "absolute", null, "0", "41", "21", "122", null, this);
            obj.set_taborder("2");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "208", null, this);
            obj.set_taborder("0");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_excel", "absolute", "0", "513", null, "100", "15", null, this);
            obj.set_taborder("19");
            obj.set_binddataset("ds_auth_excel");
            obj.set_formatid("basic");
            obj.set_autofittype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"basic\"><Columns><Column size=\"0\"/><Column size=\"100\"/><Column size=\"207\"/><Column size=\"130\"/><Column size=\"299\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" style=\"font:bold 11 arial;linespace:12;\" text=\"사업자번호\"/><Cell col=\"2\" style=\"font:bold 11 arial;linespace:12;\" text=\"대표 사업장명\"/><Cell col=\"3\" style=\"font:bold 11 arial;linespace:12;\" text=\"관련 사업장코드\"/><Cell col=\"4\" style=\"font:bold 11 arial;linespace:12;\" text=\"사업장명\"/><Cell col=\"5\" style=\"font:bold 11 arial;linespace:12;\" text=\"점장 사번\"/><Cell col=\"6\" style=\"font:bold 11 arial;linespace:12;\" text=\"점장명\"/><Cell col=\"7\" style=\"font:bold 11 arial;linespace:12;\" text=\"등록일\"/></Band><Band id=\"body\" style=\"border:1 solid #d6d6d6ff ;\"><Cell displaytype=\"normal\" style=\"background:#ffffffff;background2:#ffffffff;\" suppress=\"bind:BIZ_NUMBER\" suppressalign=\"middle\" autosizecol=\"none\"/><Cell col=\"1\" style=\"background:#ffffffff;background2:#ffffffff;\" text=\"bind:BIZ_NUMBER\" mask=\"@@@-@@-@@@@@\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"2\" style=\"background:#ffffffff;background2:#ffffffff;\" text=\"bind:CLNTNM\" suppress=\"2\" suppressalign=\"middle\"/><Cell col=\"3\" text=\"bind:NA_TRPL_C\"/><Cell col=\"4\" text=\"bind:CLNTNM2\"/><Cell col=\"5\" style=\"background:#ffffffff;background2:#ffffffff;color:expr:CHIEF_ENO == null ? &quot;#999999FF&quot; : &quot;&quot;;color2:expr:CHIEF_ENO == null ? &quot;#999999FF&quot; : &quot;&quot;;selectcolor:expr:CHIEF_ENO == null ? &quot;#999999FF&quot; : &quot;&quot;;\" text=\"expr:CHIEF_ENO != null ? CHIEF_ENO : &quot;&lt;점장 미등록&gt;&quot;\" suppress=\"3\" suppressalign=\"middle\"/><Cell col=\"6\" style=\"background:#ffffffff;background2:#ffffffff;color:expr:USR_NM == null ? &quot;#999999FF&quot; : &quot;&quot;;color2:expr:USR_NM == null ? &quot;#999999FF&quot; : &quot;&quot;;selectcolor:expr:USR_NM == null ? &quot;#999999FF&quot; : &quot;&quot;;\" text=\"expr:CHIEF_ENO != null &amp;&amp; USR_NM == null ? &quot;&lt;미가입&gt;&quot; : USR_NM\" suppress=\"4\" suppressalign=\"middle\"/><Cell col=\"7\" style=\"background:#ffffffff;background2:#ffffffff;\" text=\"bind:FSRG_DTM\" mask=\"@@@@-@@-@@\" suppress=\"5\" suppressalign=\"middle\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 965, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 965, 444, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.set_text("Div02");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 800, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_5160");
            		p.set_titletext("전자계약직매장권한관리");
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
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_2214.xfdl", "lib::comLib.xjs");
        this.addIncludeScript("OMG_DS_SC_2214.xfdl", "lib::comElt.xjs");
        this.registerScript("OMG_DS_SC_2214.xfdl", function(exports) {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comElt.xjs", null, exports); }	//include "lib::comElt.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        this.gridMode = "basic";

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        	// 본부회원 메뉴 오픈 시 아래 if문 주석 해제
        // 	if (application.gv_userTPC != "admin") {
        // 		this.gfn_checkEltAuth(obj, "eltCallback"); // 전자계약 권한체크(comElt.xjs)
        // 	} else {
        		/*조회 호출*/
        		this.btn_search.click();
        // 	}
        }

        this.fn_afterFormOnload = function()
        {
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

         /*조회버튼 이벤트*/
        this.btn_search_onclick = function(obj,e)
        {
        	this.ds_auth.clearData();
        	
        	var params = "edtBizNumeber=" + this.gfn_nullToEmpty(this.div_search.edt_bizNumeber.value)	// 사업자번호 조회값
        			+ " edtClntim=" + this.gfn_nullToEmpty(this.div_search.edt_clntim.value)	// 협력업체명 조회값
        			+ " edtChiefEno=" + this.gfn_nullToEmpty(this.div_search.edt_chiefEno.value)	// 사원번호 조회값
        			+ " edtGln=" + this.gfn_nullToEmpty(this.div_search.edt_gln.value);	// 사원번호 조회값
        	
        	var sSvcID        = "retrieveEltctrwAuthList";
        	var sURL          = "svc::rest/ct/eltctrw/retrieveEltctrwAuthList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_auth=ds_auth";
        	var sArgument     = params;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_registerSvcDS(sSvcID, this.ds_auth, false);
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /*등록버튼 이벤트*/
        this.btn_insert_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"I", dsArg:this.ds_auth};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("popId","OMG.CT::OMG_DS_SC_2214_P01.xfdl",oArg,sOption,sPopupCallBack);
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
        		alert("하나만 선택해주시기 바랍니다.");
        		return;
        	} else if(checkCnt == 0) {
        		alert("수정해야할 데이터를 선택해 주시기 바랍니다.");
        		return;
        	} else {
        		this.ds_auth_temp.addRow();
        		this.ds_auth_temp.copyRow(0,this.ds_auth,position);
        		
        		var oArg = {paramMode:"U", dsArg:this.ds_auth_temp};
        		var sOption = "autosize=true";
        		var sPopupCallBack = "fn_popupAfter";
        		this.gfn_openPopup("popId","OMG.CT::OMG_DS_SC_2214_P01.xfdl",oArg,sOption,sPopupCallBack);
        	}
        }

        /*삭제버튼 이벤트*/
        this.btn_delete_onclick = function(obj,e)
        {
        	var checkCnt =0 ;	//선택된 체크박스 개수

        	this.ds_auth_temp.clearData();
        	// 체크된 행들을 순차적으로 ds_param에 적재한다.
        	for (var i = 0 ; i < this.ds_auth.rowcount; i++) {
        		if (this.ds_auth.getColumn(i, "CHK") =="1") {
        		  checkCnt = checkCnt +1;
        		  this.ds_auth_temp.insertRow(checkCnt-1);
        		  this.ds_auth_temp.copyRow(checkCnt-1,this.ds_auth,i);
        		}
        	}

        	if (checkCnt > 0) {
        		var cfm = this.confirm("삭제하시겠습니까?");
        		if (cfm) {
        			var sParams       = "";
        			var sSvcID        = "deleteEltctrwAuth";
        			var sURL          = "svc::rest/ct/eltctrw/deleteEltctrwAuth";
        			var sInDatasets   = "ds_auth=ds_auth_temp";
        			var sOutDatasets  = "";
        			var sArgument     = "";
        			var sCallbackFunc = "fn_callBack";
        			var sTranType     = "U"; // U:저장/삭제, S:조회

        			this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        		}
        	} else {
        		alert("삭제할 데이터를 선택해 주시기 바랍니다.");
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
        			this.ds_auth.setColumn(i, "CHK", 0);
        		}
        	}
        }

         /*상단 전체 선택/해제 체크박스 및 컬럼 정렬 이벤트*/
        this.div_list_grd_main01_onheadclick = function(obj,e)
        {	
        	if (this.gridMode == "basic") {
        		if (e.cell == 0) {
        			this.gfn_setGridCheckAll(obj,e);
        		} else {
        			this.gfn_gridSort(obj, e);
        		}
        	}
        }

         /*콜백메소드*/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	this.gfn_svcDsToggle(svcID, true);
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        	 	if (svcID == "retrieveEltctrwAuthList") {
        			this.fn_drawGrid();
        	 	} else if (svcID=="deleteEltctrwAuth") {
        	 		if (ErrorCode == 0) {
        	 			this.gfn_getMessage("alert", "result.message.save.success");
        	 			this.btn_search.click();
        	 		}
        	 	}
        	 }
        }

        this.list_empty_check = function(isEmpty) {
        	this.btn_update.set_enable(!isEmpty);
        	this.btn_delete.set_enable(!isEmpty);
        	this.btn_excel.set_enable(!isEmpty);
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

        this.div_list_btn_swap_onclick = function(obj,e)
        {
        	if (this.gridMode == "basic") {
        		this.gridMode = "detail";
        	} else {
        		this.gridMode = "basic";
        	}
        	this.fn_drawGrid();
        }

        this.fn_drawGrid = function()
        {
        	var sExpr = ""; 
        	if (this.gridMode == "detail") {
        		this.div_list.btn_swap.set_text("대표 사업장 보기");
        		this.btn_update.set_enable(false);
        		this.btn_delete.set_enable(false);
        	} else {
        		this.div_list.btn_swap.set_text("모든 사업장 보기");
        		sExpr = "rowidx==dataset.findRowExpr(\"BIZ_NUMBER=='\" + BIZ_NUMBER + \"'\")";
        		this.list_empty_check(this.ds_auth.rowcount == 0);
        	}
        	this.div_list.grd_main01.set_formatid(this.gridMode);
        	this.ds_auth.filter(sExpr); 
        }

        this.btn_excel_onclick = function(obj,e)
        {
        	this.ds_auth_excel.copyData(this.ds_auth);
        	var today = this.gfn_today("yyyyMMdd");

        	this.exportObj = new ExcelExportObject("Export00", this);
        	this.exportObj.addEventHandler("onsuccess" , this.fn_excelDownload_onsuccess , this);
        	this.exportObj.addEventHandler("onerror", this.fn_excelDownload_onerror, this);

        	this.exportObj.set_exportfilename("BzplcEltGrant"+today);
        	this.exportObj.set_exporturl(application.gv_server_url + "XExportImport");
        	this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.grd_excel, "직매장권한!A1", "", "", "merge", "", "", "", "both", "cellline");
        	this.exportObj.exportData();
        }

        // 엑셀 다운로드 성공
        this.fn_excelDownload_onsuccess = function(obj,e)
        {
        	//trace("excel download : success");
        	this.ds_auth_excel.clearData();
        }

        // 엑셀 다운로드 실패
        this.fn_excelDownload_onerror = function(obj,e)
        {
        	//trace("excel download : error");
        }

        this.div_search_onkeydown = function(obj,e)
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
            this.div_search.edt_bizNumeber.addEventHandler("onkeydown", this.div_search_onkeydown, this);
            this.div_search.edt_clntim.addEventHandler("onkeydown", this.div_search_onkeydown, this);
            this.div_search.edt_chiefEno.addEventHandler("onkeydown", this.div_search_onkeydown, this);
            this.div_search.edt_gln.addEventHandler("onkeydown", this.div_search_onkeydown, this);
            this.div_list.btn_flag.addEventHandler("onclick", this.btn_flag_onclick, this);
            this.div_list.grd_main01.addEventHandler("oncellclick", this.div_list_grd_main01_oncellclick, this);
            this.div_list.grd_main01.addEventHandler("onheadclick", this.div_list_grd_main01_onheadclick, this);
            this.div_list.btn_swap.addEventHandler("onclick", this.div_list_btn_swap_onclick, this);
            this.btn_delete.addEventHandler("onclick", this.btn_delete_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_insert.addEventHandler("onclick", this.btn_insert_onclick, this);
            this.btn_update.addEventHandler("onclick", this.btn_update_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.grd_excel.addEventHandler("oncellclick", this.div_list_grd_main01_oncellclick, this);
            this.grd_excel.addEventHandler("onheadclick", this.div_list_grd_main01_onheadclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_2214.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
