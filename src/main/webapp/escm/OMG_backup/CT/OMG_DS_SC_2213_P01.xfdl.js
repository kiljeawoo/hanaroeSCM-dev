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
                this.set_name("OMG_DS_SC_5161");
                this.set_titletext("전자계약권한등록/수정");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,767,283);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_svcAuth", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_AUTH_DSC\" type=\"STRING\" size=\"3\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_auth", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ELT_AUTH_DSC_11\" type=\"STRING\" size=\"1\"/><Column id=\"ELT_AUTH_DSC_12\" type=\"STRING\" size=\"1\"/><Column id=\"ELT_AUTH_DSC_13\" type=\"STRING\" size=\"1\"/><Column id=\"ELT_AUTH_DSC_14\" type=\"STRING\" size=\"1\"/><Column id=\"ELT_AUTH_DSC_15\" type=\"STRING\" size=\"256\"/><Column id=\"ELT_AUTH_DSC_99\" type=\"STRING\" size=\"1\"/><Column id=\"ELT_AUTH_DSC_A1\" type=\"STRING\" size=\"1\"/><Column id=\"ELT_AUTH_DSC_A2\" type=\"STRING\" size=\"1\"/><Column id=\"ELT_AUTH_DSC_A3\" type=\"STRING\" size=\"1\"/><Column id=\"ELT_AUTH_DSC_A4\" type=\"STRING\" size=\"1\"/><Column id=\"ELT_AUTH_DSC_A5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static12", "absolute", "126", "104", null, "172", "17", null, this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "47", "41", "21", "13", null, this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("text_title", "absolute", "17", "51", "153", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_text("전자계약권한등록/수정");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "388", "104", "115", "172", null, null, this);
            obj.set_taborder("2");
            obj.set_text("메뉴 권한");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "126", "76", null, "29", "17", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "750", "76", "17", "67", null, null, this);
            obj.set_taborder("5");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "673", "32", "91", "15", null, null, this);
            obj.set_taborder("6");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "99", "17", "67", null, null, this);
            obj.set_taborder("7");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "674", "68", "91", "8", null, null, this);
            obj.set_taborder("8");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("9");
            obj.set_text("전자계약권한관리");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Button("brn_cls", "absolute", "729", "0", "37", "32", null, null, this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "47", "43", "21", "55", null, this);
            obj.set_taborder("11");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "17", "76", "115", "29", null, null, this);
            obj.set_taborder("12");
            obj.set_text("사번");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "17", "104", "115", "172", null, null, this);
            obj.set_taborder("20");
            obj.set_text("계약서 조회 권한");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_MB_ID", "absolute", "144", "80", "151", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_maxlength("9");
            obj.set_lengthunit("ascii");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_CONTRACT_AUTH_11", "absolute", "145", "144", "120", "21", null, null, this);
            obj.set_taborder("36");
            obj.set_text("마트상품부");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_CONTRACT_AUTH_12", "absolute", "145", "170", "120", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_text("공통");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_CONTRACT_AUTH_13", "absolute", "145", "196", "120", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_text("농산본부");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_CONTRACT_AUTH_99", "absolute", "145", "110", "120", "21", null, null, this);
            obj.set_taborder("39");
            obj.set_text("최고권한");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_CONTRACT_AUTH_A1", "absolute", "515", "144", "150", "21", null, null, this);
            obj.set_taborder("40");
            obj.set_text("계약체결 최종서명 권한");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_CONTRACT_AUTH_A2", "absolute", "515", "170", "150", "21", null, null, this);
            obj.set_taborder("41");
            obj.set_text("담당자 변경 승인 권한");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_CONTRACT_AUTH_A3", "absolute", "515", "196", "150", "21", null, null, this);
            obj.set_taborder("42");
            obj.set_text("전자계약 양식 관리");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_CONTRACT_AUTH_A4", "absolute", "515", "222", "150", "21", null, null, this);
            obj.set_taborder("43");
            obj.set_text("필수서류 양식 관리");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_CONTRACT_AUTH_14", "absolute", "145", "222", "120", "21", null, null, this);
            obj.set_taborder("44");
            obj.set_text("테넌트");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_CONTRACT_AUTH_15", "absolute", "145", "248", "120", "21", null, null, this);
            obj.set_taborder("45");
            obj.set_text("수산");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_CONTRACT_AUTH_A5", "absolute", "515", "248", "150", "21", null, null, this);
            obj.set_taborder("46");
            obj.set_text("파견 약정서 권한");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 767, 283, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("전자계약권한등록/수정");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edt_MB_ID","value","ds_auth","MB_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","chk_CONTRACT_AUTH_11","value","ds_auth","ELT_AUTH_DSC_11");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","chk_CONTRACT_AUTH_12","value","ds_auth","ELT_AUTH_DSC_12");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","chk_CONTRACT_AUTH_13","value","ds_auth","ELT_AUTH_DSC_13");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","chk_CONTRACT_AUTH_99","value","ds_auth","ELT_AUTH_DSC_99");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","chk_CONTRACT_AUTH_A1","value","ds_auth","ELT_AUTH_DSC_A1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","chk_CONTRACT_AUTH_A2","value","ds_auth","ELT_AUTH_DSC_A2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","chk_CONTRACT_AUTH_A3","value","ds_auth","ELT_AUTH_DSC_A3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","chk_CONTRACT_AUTH_A4","value","ds_auth","ELT_AUTH_DSC_A4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","chk_CONTRACT_AUTH_14","value","ds_auth","ELT_AUTH_DSC_14");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","chk_CONTRACT_AUTH_15","value","ds_auth","ELT_AUTH_DSC_15");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","chk_CONTRACT_AUTH_A5","value","ds_auth","ELT_AUTH_DSC_A5");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_2213_P01.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_2213_P01.xfdl", function() {
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
        	var fv_paramMode = this.getOwnerFrame().paramMode;
        	
        	this.ds_auth.clearData();
        	this.ds_auth.addRow();
        	
        	if (application.gv_userTPC != "admin") {
        		this.chk_CONTRACT_AUTH_99.set_enable(false);
        	}
        	
        	// 체크박스로 선택된 row의 수정업데이트  모드일 경우 실행
        	if (fv_paramMode == "U") {
        		this.search();
        		this.chk_CONTRACT_AUTH_99_onclick();
        	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        /*저장 버튼 이벤트*/
        this.btn_save_onclick = function(obj,e)
        {
        	if (this.getOwnerFrame().paramMode== "I") { //추가등록
        		this.insert();
        	} else if (this.getOwnerFrame().paramMode== "U") {	 //수정업데이트
        	   this.update();
        	}
        }

        /*창닫기 버튼 이벤트*/
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/

        /* 등록 및 수정시 사용되는 Validation Check */
        this.fn_validationCheck = function(chk_CONTRACT_AUTH)
        {
        	// ID 체크
        	if (this.gfn_isNull(this.edt_MB_ID.value)) {
        		alert("회원ID를 입력 하세요.");	
        		this.edt_MB_ID.setFocus();
        		return false;
        	}
        	
        	// 권한체크(등록일 때만)
        	if (this.getOwnerFrame().paramMode== "I" && chk_CONTRACT_AUTH == "0") {
        		alert("권한을 체크 하세요.");	
        		this.edt_MB_ID.setFocus();
        		return false;
        	}
            return true;
        }

        /*추가등록*/
        this.insert = function()
        {
        	var chk_CONTRACT_AUTH = "0";
        	// 11: 마트상품부
        	if (this.chk_CONTRACT_AUTH_11.value == "1" && this.chk_CONTRACT_AUTH_11.enable) {
        		this.ds_svcAuth.addRow();
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "ELT_AUTH_DSC", "11");
        		chk_CONTRACT_AUTH = "1";
        	}
        	// 12: 공통
        	if (this.chk_CONTRACT_AUTH_12.value == "1" && this.chk_CONTRACT_AUTH_12.enable) {
        		this.ds_svcAuth.addRow();
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "ELT_AUTH_DSC", "12");
        		chk_CONTRACT_AUTH = "1";
        	}
        	// 13: 농산본부
        	if (this.chk_CONTRACT_AUTH_13.value == "1" && this.chk_CONTRACT_AUTH_13.enable) {
        		this.ds_svcAuth.addRow();
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "ELT_AUTH_DSC", "13");
        		chk_CONTRACT_AUTH = "1";
        	}
        	// 14: 테넌트
        	if (this.chk_CONTRACT_AUTH_14.value == "1" && this.chk_CONTRACT_AUTH_14.enable) {
        		this.ds_svcAuth.addRow();
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "ELT_AUTH_DSC", "14");
        		chk_CONTRACT_AUTH = "1";
        	}
        	// 15: 수산
        	if (this.chk_CONTRACT_AUTH_15.value == "1" && this.chk_CONTRACT_AUTH_15.enable) {
        		this.ds_svcAuth.addRow();
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "ELT_AUTH_DSC", "15");
        		chk_CONTRACT_AUTH = "1";
        	}
        	// 99: 최고권한
        	if (this.chk_CONTRACT_AUTH_99.value == "1" && this.chk_CONTRACT_AUTH_99.enable) {
        		this.ds_svcAuth.addRow();
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "ELT_AUTH_DSC", "99");
        		chk_CONTRACT_AUTH = "1";
        	}
        	// A1: 계약체결 최종서명 권한
        	if (this.chk_CONTRACT_AUTH_A1.value == "1" && this.chk_CONTRACT_AUTH_A1.enable) {
        		this.ds_svcAuth.addRow();
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "ELT_AUTH_DSC", "A1");
        		chk_CONTRACT_AUTH = "1";
        	}
        	// A2: 공통
        	if (this.chk_CONTRACT_AUTH_A2.value == "1" && this.chk_CONTRACT_AUTH_A2.enable) {
        		this.ds_svcAuth.addRow();
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "ELT_AUTH_DSC", "A2");
        		chk_CONTRACT_AUTH = "1";
        	}
        	// A3: 전자계약 양식 관리
        	if (this.chk_CONTRACT_AUTH_A3.value == "1" && this.chk_CONTRACT_AUTH_A3.enable) {
        		this.ds_svcAuth.addRow();
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "ELT_AUTH_DSC", "A3");
        		chk_CONTRACT_AUTH = "1";
        	}
        	// A4: 필수서류 양식 관리
        	if (this.chk_CONTRACT_AUTH_A4.value == "1" && this.chk_CONTRACT_AUTH_A4.enable) {
        		this.ds_svcAuth.addRow();
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "ELT_AUTH_DSC", "A4");
        		chk_CONTRACT_AUTH = "1";
        	}
        	// A5: 판촉사원 약정서 권한
        	if (this.chk_CONTRACT_AUTH_A5.value == "1" && this.chk_CONTRACT_AUTH_A5.enable) {
        		this.ds_svcAuth.addRow();
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "ELT_AUTH_DSC", "A5");
        		chk_CONTRACT_AUTH = "1";
        	}
        	
        	if (this.fn_validationCheck(chk_CONTRACT_AUTH)) {
         		this.ds_auth.setColumn(0, "MB_ID", this.gfn_nullToEmpty(this.edt_MB_ID.value));

        		var sSvcID        = "insertEltctrwBuyerAuth";
        		var sURL          = "svc::rest/ct/eltctrw/insertEltctrwBuyerAuth";
         		var sInDatasets   = "ds_auth=ds_auth ds_svcAuth=ds_svcAuth";
         		var sOutDatasets  = "";
         		var sArgument     = "";
         		var sCallbackFunc = "fn_callBack";
         		var sTranType     = "U"; // U:저장/삭제, S:조회

         		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

         /*전자계약권한조회 화면에서 체크박스 선택 후 수정버튼 클릭시 해당 row 정보 조회*/
        this.search = function()
        {
         	var ds_parent = this.parent.dsArg;
         	this.ds_auth.copyRow(0, ds_parent, 0);
        	this.edt_MB_ID.set_enable(false);
        }

        /*수정*/
        this.update = function()
        {
        	var chk_CONTRACT_AUTH = "0";
        	// 11: 마트상품부
        	if (this.chk_CONTRACT_AUTH_11.value == "1" && this.chk_CONTRACT_AUTH_11.enable) {
        		this.ds_svcAuth.addRow();
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "ELT_AUTH_DSC", "11");
        		chk_CONTRACT_AUTH = "1";
        	}
        	// 12: 공통
        	if (this.chk_CONTRACT_AUTH_12.value == "1" && this.chk_CONTRACT_AUTH_12.enable) {
        		this.ds_svcAuth.addRow();
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "ELT_AUTH_DSC", "12");
        		chk_CONTRACT_AUTH = "1";
        	}
        	// 13: 농산본부
        	if (this.chk_CONTRACT_AUTH_13.value == "1" && this.chk_CONTRACT_AUTH_13.enable) {
        		this.ds_svcAuth.addRow();
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "ELT_AUTH_DSC", "13");
        		chk_CONTRACT_AUTH = "1";
        	}
        	// 14: 테넌트
        	if (this.chk_CONTRACT_AUTH_14.value == "1" && this.chk_CONTRACT_AUTH_14.enable) {
        		this.ds_svcAuth.addRow();
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "ELT_AUTH_DSC", "14");
        		chk_CONTRACT_AUTH = "1";
        	}
        	// 15: 수산
        	if (this.chk_CONTRACT_AUTH_15.value == "1" && this.chk_CONTRACT_AUTH_15.enable) {
        		this.ds_svcAuth.addRow();
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "ELT_AUTH_DSC", "15");
        		chk_CONTRACT_AUTH = "1";
        	}
        	// 99: 최고권한
        	if (this.chk_CONTRACT_AUTH_99.value == "1" && this.chk_CONTRACT_AUTH_99.enable) {
        		this.ds_svcAuth.addRow();
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "ELT_AUTH_DSC", "99");
        		chk_CONTRACT_AUTH = "1";
        	}
        	// A1: 계약체결 최종서명 권한
        	if (this.chk_CONTRACT_AUTH_A1.value == "1" && this.chk_CONTRACT_AUTH_A1.enable) {
        		this.ds_svcAuth.addRow();
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "ELT_AUTH_DSC", "A1");
        		chk_CONTRACT_AUTH = "1";
        	}
        	// A2: 공통
        	if (this.chk_CONTRACT_AUTH_A2.value == "1" && this.chk_CONTRACT_AUTH_A2.enable) {
        		this.ds_svcAuth.addRow();
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "ELT_AUTH_DSC", "A2");
        		chk_CONTRACT_AUTH = "1";
        	}
        	// A3: 전자계약 양식 관리
        	if (this.chk_CONTRACT_AUTH_A3.value == "1" && this.chk_CONTRACT_AUTH_A3.enable) {
        		this.ds_svcAuth.addRow();
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "ELT_AUTH_DSC", "A3");
        		chk_CONTRACT_AUTH = "1";
        	}
        	// A4: 필수서류 양식 관리
        	if (this.chk_CONTRACT_AUTH_A4.value == "1" && this.chk_CONTRACT_AUTH_A4.enable) {
        		this.ds_svcAuth.addRow();
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "ELT_AUTH_DSC", "A4");
        		chk_CONTRACT_AUTH = "1";
        	}
        	// A5: 판촉사원 약정서 권한
        	if (this.chk_CONTRACT_AUTH_A5.value == "1" && this.chk_CONTRACT_AUTH_A5.enable) {
        		this.ds_svcAuth.addRow();
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "ELT_AUTH_DSC", "A5");
        		chk_CONTRACT_AUTH = "1";
        	}
        	
        	if (this.fn_validationCheck(chk_CONTRACT_AUTH)) {
        		this.ds_auth.setColumn(0, "MB_ID", this.gfn_nullToEmpty(this.edt_MB_ID.value));

        		var sSvcID        = "updateEltctrwBuyerAuth";
        		var sURL          = "svc::rest/ct/eltctrw/updateEltctrwBuyerAuth";
        		var sInDatasets   = "ds_auth=ds_auth ds_svcAuth=ds_svcAuth";
        		var sOutDatasets  = "";
        		var sArgument     = "";
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회

        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        //callback메소드
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID =="insertEltctrwBuyerAuth") {
        			if (ErrorCode == 0) {
        				this.gfn_getMessage("alert", "result.message.save.success");
        				this.close("I");
        			}
        		} else if (svcID=="updateEltctrwBuyerAuth") {
        			if (ErrorCode == 0) {
        				this.gfn_getMessage("alert", "result.message.save.success");
        				this.close("U");
        			}
        		}
        	}
        }

        // 99: 최고권한 클릭시 나머지 권한 enable false
        this.chk_CONTRACT_AUTH_99_onclick = function(obj,e)
        {
        	if (this.chk_CONTRACT_AUTH_99.value == "1") {
        		this.chk_CONTRACT_AUTH_11.set_enable(false);
        		this.chk_CONTRACT_AUTH_12.set_enable(false);
        		this.chk_CONTRACT_AUTH_13.set_enable(false);
        		this.chk_CONTRACT_AUTH_14.set_enable(false);
        		this.chk_CONTRACT_AUTH_A1.set_enable(false);
        		this.chk_CONTRACT_AUTH_A2.set_enable(false);
        		this.chk_CONTRACT_AUTH_A3.set_enable(false);
        		this.chk_CONTRACT_AUTH_A4.set_enable(false);
        	} else {
        		this.chk_CONTRACT_AUTH_11.set_enable(true);
        		this.chk_CONTRACT_AUTH_12.set_enable(true);
        		this.chk_CONTRACT_AUTH_13.set_enable(true);
        		this.chk_CONTRACT_AUTH_14.set_enable(true);
        		this.chk_CONTRACT_AUTH_A1.set_enable(true);
        		this.chk_CONTRACT_AUTH_A2.set_enable(true);
        		this.chk_CONTRACT_AUTH_A3.set_enable(true);
        		this.chk_CONTRACT_AUTH_A4.set_enable(true);
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.Static07.addEventHandler("onclick", this.Static07_onclick, this);
            this.Static06.addEventHandler("onclick", this.Static06_onclick, this);
            this.brn_cls.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.Static01.addEventHandler("onclick", this.Static07_onclick, this);
            this.chk_CONTRACT_AUTH_99.addEventHandler("onclick", this.chk_CONTRACT_AUTH_99_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_2213_P01.xfdl");

       
    };
}
)();
