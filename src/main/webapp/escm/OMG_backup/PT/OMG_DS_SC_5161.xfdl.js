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
                this.set_titletext("회원권한등록/수정");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,767,253);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_in", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"MB_ID\" type=\"string\" size=\"16\"/><Column id=\"MENU_ID\" type=\"string\" size=\"8\"/><Column id=\"MENU_NM\" type=\"string\" size=\"50\"/><Column id=\"MENU_PATH\" type=\"STRING\" size=\"100\"/><Column id=\"UYN\" type=\"STRING\" size=\"1\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_authCheck", this);
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

            obj = new Dataset("ds_finalValue", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"FINAL_MB_ID\" type=\"STRING\" size=\"16\"/><Column id=\"FINAL_MENU_ID\" type=\"STRING\" size=\"8\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_clickDupBtn", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CLICK_DUP_BTN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_in_backup", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"MB_ID\" type=\"string\" size=\"16\"/><Column id=\"MENU_ID\" type=\"string\" size=\"8\"/><Column id=\"MENU_NM\" type=\"string\" size=\"50\"/><Column id=\"MENU_PATH\" type=\"STRING\" size=\"100\"/><Column id=\"UYN\" type=\"STRING\" size=\"1\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_menu0", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"string\" size=\"32\"/><Column id=\"MENU_NM\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">0</Col><Col id=\"MENU_NM\">대메뉴</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_menu1", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"string\" size=\"32\"/><Column id=\"MENU_NM\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">0</Col><Col id=\"MENU_NM\">중메뉴</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_menu2", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"string\" size=\"32\"/><Column id=\"MENU_NM\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">0</Col><Col id=\"MENU_NM\">소메뉴</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static08", "absolute", "126", "76", null, "29", "17", null, this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("upper_level1", "absolute", "126", "132", null, "58", "17", null, this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "47", "41", "21", "13", null, this);
            obj.set_taborder("10");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("text_title", "absolute", "17", "51", "135", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_text("회원권한등록/수정");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "17", "132", "110", "58", null, null, this);
            obj.set_taborder("13");
            obj.set_text("메뉴 선택");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "750", "76", "17", "67", null, null, this);
            obj.set_taborder("70");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "673", "32", "91", "15", null, null, this);
            obj.set_taborder("71");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "99", "17", "67", null, null, this);
            obj.set_taborder("72");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "674", "68", "91", "8", null, null, this);
            obj.set_taborder("73");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("74");
            obj.set_text("회원권한관리");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Button("brn_cls", "absolute", "729", "0", "37", "32", null, null, this);
            obj.set_taborder("75");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "47", "43", "21", "55", null, this);
            obj.set_taborder("95");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mbId", "absolute", "130", "80", "186", "21", null, null, this);
            obj.set_taborder("106");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "17", "76", "110", "29", null, null, this);
            obj.set_taborder("127");
            obj.set_text("회원ID");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_menuId", "absolute", "130", "164", "186", "21", null, null, this);
            obj.set_taborder("128");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dupCheck", "absolute", "326", "164", "65", "21", null, null, this);
            obj.set_taborder("131");
            obj.set_text("중복확인");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "17", "189", "110", "29", null, null, this);
            obj.set_taborder("138");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "126", "189", null, "29", "17", null, this);
            obj.set_taborder("139");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_useYn", "absolute", "130", "193", "158", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_useYn_innerdataset = new Dataset("rdo_useYn_innerdataset", this.rdo_useYn);
            rdo_useYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">사용안함</Col></Row></Rows>");
            obj.set_innerdataset(rdo_useYn_innerdataset);
            obj.set_taborder("140");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("Y");
            obj.set_direction("vertical");
            obj.set_index("0");

            obj = new Combo("cbo_level0", "absolute", "130", "137", "185", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("141");
            obj.set_text("대메뉴");
            obj.set_innerdataset("@ds_menu0");
            obj.set_codecolumn("MENU_ID");
            obj.set_datacolumn("MENU_NM");
            obj.set_enable("false");

            obj = new Combo("cbo_level1", "absolute", "326", "137", "185", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("142");
            obj.set_text("중메뉴");
            obj.set_innerdataset("@ds_menu1");
            obj.set_codecolumn("MENU_ID");
            obj.set_datacolumn("MENU_NM");
            obj.set_enable("false");

            obj = new Combo("cbo_level2", "absolute", "522", "137", "185", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("143");
            obj.set_text("소메뉴");
            obj.set_innerdataset("@ds_menu2");
            obj.set_codecolumn("MENU_ID");
            obj.set_datacolumn("MENU_NM");
            obj.set_enable("false");

            obj = new Static("sta_menupath", "absolute", "130", "137", "553", "21", null, null, this);
            obj.set_taborder("155");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "17", "104", "110", "29", null, null, this);
            obj.set_taborder("157");
            obj.set_text("사용자 여부");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("upper_level00", "absolute", "126", "104", null, "29", "17", null, this);
            obj.set_taborder("158");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_useradmin", "absolute", "130", "104", "159", "29", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_useradmin_innerdataset = new Dataset("rdo_useradmin_innerdataset", this.rdo_useradmin);
            rdo_useradmin_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">사용자</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">관리자</Col></Row></Rows>");
            obj.set_innerdataset(rdo_useradmin_innerdataset);
            obj.set_taborder("159");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.style.set_textpadding("0 20 0 8");

            obj = new Static("Static19", "absolute", "282", "104", "91", "29", null, null, this);
            obj.set_taborder("160");
            obj.set_text("사용자 유형");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_usrTpc", "absolute", "377", "104", "386", "29", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_usrTpc_innerdataset = new Dataset("rdo_usrTpc_innerdataset", this.rdo_usrTpc);
            rdo_usrTpc_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">협력업체</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">본부</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">하나로마트</Col></Row><Row><Col id=\"codecolumn\">04</Col><Col id=\"datacolumn\">세금계산서전용</Col></Row></Rows>");
            obj.set_innerdataset(rdo_usrTpc_innerdataset);
            obj.set_enable("false");
            obj.set_taborder("161");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.style.set_textpadding("0 20 0 8");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 767, 253, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("회원권한등록/수정");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edt_mbId","value","ds_in","MB_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edt_menuId","value","ds_in","MENU_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_simpTpc00","value","ds_in","SIMP_TPC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","rdo_useYn","value","ds_in","UYN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","sta_menupath","text","ds_in","MENU_PATH");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_5161.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_5161.xfdl", function() {
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

        	//중복체크 초기값세팅
        	this.ds_clickDupBtn.setColumn(0,"CLICK_DUP_BTN","N"); // 중복체크의 수행여부 판별
        	this.ds_authCheck.setColumn(0,"AUTH_CHECK","N"); // 중복체크 결과 초기 셋팅

        	this.rdo_useYn.set_index(0);

        	// 체크박스로 선택된 row의 수정업데이트  모드일 경우 실행
        	if(fv_paramMode == "U"){
        		this.edt_mbId.set_readonly(true);
        		this.edt_menuId.set_readonly(true);
        		this.rdo_useradmin.set_enable(false);
        		this.sta_menupath.set_visible(true);
        		this.btn_dupCheck.set_visible(false);
        		this.cbo_level0.set_visible(false);
        		this.cbo_level1.set_visible(false);
        		this.cbo_level2.set_visible(false);
        		
        		this.search();
                }
        	// 새로운 row를 추가등록할 경우 실행
        	else if(fv_paramMode == "I"){
        		}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        /*저장 버튼 이벤트*/
        this.btn_save_onclick = function(obj,e)
        {
        	if(this.getOwnerFrame().paramMode== "I"){ //추가등록
        		this.insert();
        	}else if(this.getOwnerFrame().paramMode== "U"){	 //수정업데이트
        	    this.update();
        	}
        }

        /*창닫기 버튼 이벤트*/
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        /*중복확인 버튼 이벤트*/
        this.fn_dupCheck = function(obj,e)
        {
        	if(this.gfn_isNull(this.edt_mbId.value)){
        		this.alert('회원ID를 입력바랍니다.');
        		this.edt_mbId.setFocus();
        		return false;
        	}

        	if(this.gfn_isNull(this.edt_menuId.value)){
        		this.alert('메뉴를 선택해주시기 바랍니다.');
        		this.edt_menuId.setFocus();
        		return false;
        	}

        	this.ds_clickDupBtn.setColumn(0,"CLICK_DUP_BTN","Y");

        	var sParams = "mb_id="+this.gfn_nullToEmpty(this.edt_mbId.value)
        				+ " menu_id="+this.gfn_nullToEmpty(this.edt_menuId.value);
        	var sSvcID        = "dupCheck";
        	var sURL          = "svc::rest/pt/dupCheckMemberAuth";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_authCheck=ds_authCheck";
        	var sArgument     =  sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/

        /* 등록 및 수정시 사용되는 Validation Check */
        this.fn_validationCheck = function(){

        	var mbId = this.edt_mbId.value;
        	var menuId = this.edt_menuId.value;

        	//유형코드와 단순코드는 필수값이다.
        	if(this.gfn_isNull(this.edt_mbId.value)){
        		this.alert('회원ID를 입력바랍니다.');
        		this.edt_mbId.setFocus();
        		return false;
        	}
        	if(this.gfn_isNull(this.edt_menuId.value)){
        		this.alert('메뉴를 선택해주시기 바랍니다.');
        		this.edt_menuId.setFocus();
        		return false;
        	}

            /*등록시 validation check*/
        	if(this.getOwnerFrame().paramMode== "I"){
        		//중복확인을 하지 않고 저장하면 중복확인이 필수인 것을 알린다.
        		if(this.ds_clickDupBtn.getColumn(0,"CLICK_DUP_BTN") == "N"){
        			alert("중복확인을 해주시기 바랍니다.");
        			return;
        		}
        		//중복확인을 한 후 단순코드, 유형코드를 변경하면 아래와 같이 처리한다.
        		if(this.ds_finalValue.getColumn(0, "FINAL_MB_ID") != mbId || this.ds_finalValue.getColumn(0, "FINAL_MENU_ID") != menuId){
        			alert("입력정보가 변경되었습니다. 다시 한 번 중복확인을 해주시기 바랍니다.");
        			this.ds_clickDupBtn.setColumn(0,"CLICK_DUP_BTN","N");
        			return;
        		}
        	}

            return true;
        }

        /*  사용자 여부에 따른 사용자 유형 선택 */
        this.rdo_useradmin_onitemchanged = function(obj,e)
        {
        	this.cbo_level0.set_value("0");
        	this.cbo_level0.set_enable(false);
        	this.cbo_level1.set_index(0);
        	this.cbo_level2.set_index(0);
        	this.cbo_level1.set_enable(false);
        	this.cbo_level2.set_enable(false);
        	this.edt_menuId.set_value("");
        	if(this.rdo_useradmin.value == "N"){
        		this.rdo_usrTpc.set_enable(true);
        	} else if(this.rdo_useradmin.value == "Y"){
        		this.rdo_usrTpc.set_enable(false);
        		this.rdo_usrTpc.set_value("");
        		this.fn_getUpperCommonCombo(0);
        	}
        }

        /*  사용자 유형 선택 */
        this.rdo_usrTpc_onitemchanged = function(obj,e)
        {
        	this.cbo_level0.set_value("0");
        	this.cbo_level1.set_index(0);
        	this.cbo_level2.set_index(0);
        	this.cbo_level1.set_enable(false);
        	this.cbo_level2.set_enable(false);
        	this.edt_menuId.set_value("");
        	this.fn_getUpperCommonCombo(0);
        }

        /*중메뉴 선택시 대메뉴 나와야 함  sMenuLvl값 0 */
        this.fn_getUpperCommonCombo = function(sMenuLvl,upperId){	
        	var codeKey = "ds_menu"+sMenuLvl;
        	var sParam 		  = "codeKey="+codeKey+" menu_lvl="+sMenuLvl
        						+" usr_tpc="+this.gfn_nullToEmpty(this.rdo_usrTpc.value)
        						+" isadmin="+this.gfn_nullToEmpty(this.rdo_useradmin.value);
        	
        	if (!this.gfn_isNull(upperId)) {
        		sParam += " upperId="+upperId;
        	}

        	var sSvcID        = "combo"+sMenuLvl;
        	var sURL          = "svc::rest/mg/getMenuCombo";
        	var sInDatasets   = "";
        	var sOutDatasets  = codeKey+"="+codeKey;
        	var sArgument     = sParam;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /* 대메뉴 선택 */
        this.cbo_level0_onitemchanged = function(obj,e)
        {
        	this.cbo_level1.set_index(0);
        	this.cbo_level2.set_index(0);
        	this.cbo_level1.set_enable(false);
        	this.cbo_level2.set_enable(false);
        	this.edt_menuId.set_value("");
        	if(this.cbo_level0.value !="0"){
        		var upperId = this.ds_menu0.getColumn(e.postindex, "MENU_ID");
        		this.fn_getUpperCommonCombo(1, upperId);
        	}
        }

        /* 중메뉴 선택 */
        this.cbo_level1_onitemchanged = function(obj,e)
        {
        	this.cbo_level2.set_index(0);
        	this.cbo_level2.set_enable(false);
        	this.edt_menuId.set_value("");
        	if(this.cbo_level1.value !="0"){
        		var upperId = this.ds_menu1.getColumn(e.postindex, "MENU_ID");
        		this.fn_getUpperCommonCombo(2, upperId);
        	}
        }

        /* 소메뉴 선택 */
        this.cbo_level2_onitemchanged = function(obj,e)
        {
        	if (e.postindex == 0) {
        		this.edt_menuId.set_value("");
        		return;
        	}
        	var menuId = this.ds_menu2.getColumn(e.postindex, "MENU_ID");
        	this.edt_menuId.set_value(menuId);
        }

        /*추가등록*/
        this.insert = function()
        {
        	if(this.fn_validationCheck()){

        		var sParams = "mb_id="+this.gfn_nullToEmpty(this.edt_mbId.value)
        				+ " menu_id="+this.gfn_nullToEmpty(this.edt_menuId.value)
                        + " use_yn="+this.gfn_nullToEmpty(this.rdo_useYn.value);

        		var sSvcID        = "insert";
        		var sURL          = "svc::rest/pt/insertMemberAuth";

        		var sInDatasets   = "";
        		var sOutDatasets  = "";
        		var sArgument     = sParams;
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회

        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

         /*공통코드조회 화면에서 체크박스 선택 후 수정버튼 클릭시 해당 row 정보 조회*/
        this.search = function()
        {
        	var ds_parent = this.parent.dsArg;
        	this.ds_in.copyRow(0,ds_parent,0);
        	this.ds_in_backup.copyRow(0,ds_parent,0);
        }

        /*수정*/
        this.update = function()
        {
        	if(this.fn_validationCheck()){

        		var sParams = "use_yn="+this.gfn_nullToEmpty(this.rdo_useYn.value);

        		var sSvcID        = "update";
        		var sURL          = "svc::rest/pt/updateMemberAuth";
        		var sInDatasets   = "ds_in=ds_in";
        		var sOutDatasets  = "";
        		var sArgument     = sParams;
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회

        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        //callback메소드
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {

        	if(ErrorCode < 0){
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID =="insert"){
        			if(ErrorCode == 1){
        				this.gfn_getMessage("alert", "result.message.save.success");
        				this.close();
        			}
        		}else if(svcID=="update"){
        			if(ErrorCode == 1){
        				this.gfn_getMessage("alert", "result.message.save.success");
        				this.close();
        				}
        		}else if(svcID =="dupCheck"){
        			if(this.ds_authCheck.getColumn(0, "AUTH_CHECK") == "Y"){
        				alert("동일한 회원 권한이 존재 합니다.");
        				this.ds_clickDupBtn.setColumn(0,"CLICK_DUP_BTN","N");
        				return;
        			}else if(this.ds_authCheck.getColumn(0, "AUTH_CHECK") == "N"){
        				alert("등록가능한 권한입니다.");
        				// 중복검사 결과가 유효하다면 해당 값을 final value에 저장.
        				this.ds_finalValue.setColumn(0,"FINAL_MB_ID",this.edt_mbId.value);
        				this.ds_finalValue.setColumn(0,"FINAL_MENU_ID",this.edt_menuId.value);
        			}else{
        				alert("정해지지 않은 값입니다.");
        				return;
        			}
        		}else if(svcID=="combo0") {
        			this.ds_menu0.insertRow(0);
        			this.ds_menu0.setColumn(0,"MENU_ID","0");
        			this.ds_menu0.setColumn(0,"MENU_NM","대메뉴");
        			this.cbo_level0.set_enable(true);
        		}else if(svcID=="combo1") {
        			this.ds_menu1.insertRow(0);
        			this.ds_menu1.setColumn(0,"MENU_ID","0");
        			this.ds_menu1.setColumn(0,"MENU_NM","중메뉴");
        			this.cbo_level1.set_enable(true);
        		}else if(svcID=="combo2") {
        			this.ds_menu2.insertRow(0);
        			this.ds_menu2.setColumn(0,"MENU_ID","0");
        			this.ds_menu2.setColumn(0,"MENU_NM","소메뉴");
        			this.cbo_level2.set_enable(true);
        		}
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
            this.edt_mbId.addEventHandler("oneditclick", this.edt_simpTpc_oneditclick, this);
            this.edt_menuId.addEventHandler("oneditclick", this.edt_simpC_oneditclick, this);
            this.btn_dupCheck.addEventHandler("onclick", this.fn_dupCheck, this);
            this.rdo_useYn.addEventHandler("onitemclick", this.Radio00_onitemclick, this);
            this.cbo_level0.addEventHandler("onitemchanged", this.cbo_level0_onitemchanged, this);
            this.cbo_level1.addEventHandler("onitemchanged", this.cbo_level1_onitemchanged, this);
            this.cbo_level2.addEventHandler("onitemchanged", this.cbo_level2_onitemchanged, this);
            this.Static01.addEventHandler("onclick", this.Static07_onclick, this);
            this.rdo_useradmin.addEventHandler("onitemchanged", this.rdo_useradmin_onitemchanged, this);
            this.rdo_usrTpc.addEventHandler("onitemchanged", this.rdo_usrTpc_onitemchanged, this);

        };

        this.loadIncludeScript("OMG_DS_SC_5161.xfdl");

       
    };
}
)();
