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
                this.set_name("OMG_DS_SC_6313_P01");
                this.set_titletext("서비스통제등록/수정");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,767,542);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
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
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"string\" size=\"32\"/><Column id=\"MENU_NM\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_ctrl", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"1\"/><Column id=\"CTRL_NO\" type=\"string\" size=\"12\"/><Column id=\"CTRL_TI\" type=\"string\" size=\"250\"/><Column id=\"CTRL_ST_DT\" type=\"STRING\" size=\"30\"/><Column id=\"CTRL_ED_DT\" type=\"string\" size=\"30\"/><Column id=\"CTRL_CNTN\" type=\"string\" size=\"250\"/><Column id=\"CTRL_ACTION\" type=\"STRING\" size=\"16\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"16\"/><Column id=\"BSN_DSC\" type=\"STRING\" size=\"16\"/><Column id=\"CTRL_STATE\" type=\"STRING\" size=\"1\"/><Column id=\"UYN\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_ctrl_menu", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"string\" size=\"32\"/><Column id=\"MENU_NM\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_close", "absolute", null, "47", "41", "21", "13", null, this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("text_title", "absolute", "17", "51", "153", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_text("서비스통제등록/수정");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "17", "132", "110", "29", null, null, this);
            obj.set_taborder("2");
            obj.set_text("차단내용");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "126", "132", null, "29", "17", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Labelbg");
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
            obj.set_text("서비스통제관리");
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

            obj = new Static("Static04", "absolute", "17", "76", "110", "29", null, null, this);
            obj.set_taborder("12");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "17", "188", "110", "29", null, null, this);
            obj.set_taborder("15");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "126", "188", null, "29", "17", null, this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_useYn", "absolute", "131", "192", "158", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_useYn_innerdataset = new Dataset("rdo_useYn_innerdataset", this.rdo_useYn);
            rdo_useYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">사용안함</Col></Row></Rows>");
            obj.set_innerdataset(rdo_useYn_innerdataset);
            obj.set_taborder("17");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("Y");
            obj.set_direction("vertical");
            obj.set_index("0");

            obj = new Static("Static01", "absolute", "17", "104", "110", "29", null, null, this);
            obj.set_taborder("20");
            obj.set_text("업무구분");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "126", "104", null, "29", "17", null, this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "282", "104", "91", "29", null, null, this);
            obj.set_taborder("22");
            obj.set_text("차단일시");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ctrlTi", "absolute", "131", "80", "414", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_maxlength("250");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_bsnDsc", "absolute", "131", "108", "146", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_bsnDsc_innerdataset = new Dataset("cbo_bsnDsc_innerdataset", this.cbo_bsnDsc);
            cbo_bsnDsc_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">ESCM</Col><Col id=\"datacolumn\">ESCM</Col></Row><Row><Col id=\"codecolumn\">CONSULT</Col><Col id=\"datacolumn\">CONSULT</Col></Row><Row><Col id=\"codecolumn\">TAX</Col><Col id=\"datacolumn\">TAX</Col></Row><Row><Col id=\"codecolumn\">MDS</Col><Col id=\"datacolumn\">MDS</Col></Row></Rows>");
            obj.set_innerdataset(cbo_bsnDsc_innerdataset);
            obj.set_taborder("24");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("ESCM");
            obj.set_text("ESCM");
            obj.set_readonly("true");
            obj.set_cssclass("cmb_WF_Readonly");

            obj = new Calendar("dt_ctrlStDtm", "absolute", "377", "108", "127", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("25");
            obj.set_dateformat("yyyy-MM-dd HH:mm");
            obj.set_value("null");
            obj.set_editformat("yyyy-MM-dd HH:mm");

            obj = new Calendar("dt_ctrlEdDtm", "absolute", "533", "108", "127", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("26");
            obj.set_dateformat("yyyy-MM-dd HH:mm");
            obj.set_value("null");
            obj.set_editformat("yyyy-MM-dd HH:mm");

            obj = new Static("Static11", "absolute", "511", "108", "15", "21", null, null, this);
            obj.set_taborder("27");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ctrlCntn", "absolute", "131", "136", "529", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_maxlength("250");
            this.addChild(obj.name, obj);

            obj = new Div("div_menu", "absolute", "17", "216", null, null, "17", "17", this);
            obj.set_taborder("29");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "0", "0", "110", "29", null, null, this.div_menu);
            obj.set_taborder("0");
            obj.set_text("사용자 유형");
            obj.set_cssclass("sta_WF_Label");
            this.div_menu.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "109", "0", null, "29", "0", null, this.div_menu);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_menu.addChild(obj.name, obj);
            obj = new Radio("rdo_usrTpc", "absolute", "114", "4", "472", "21", null, null, this.div_menu);
            this.div_menu.addChild(obj.name, obj);
            var rdo_usrTpc_innerdataset = new Dataset("rdo_usrTpc_innerdataset", this.div_menu.rdo_usrTpc);
            rdo_usrTpc_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">협력업체</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">본부</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">하나로마트</Col></Row><Row><Col id=\"codecolumn\">04</Col><Col id=\"datacolumn\">세금계산서전용</Col></Row></Rows>");
            obj.set_innerdataset(rdo_usrTpc_innerdataset);
            obj.set_taborder("2");
            obj.set_rowcount("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("horizontal");
            obj = new Static("Static18", "absolute", "0", "28", "110", "29", null, null, this.div_menu);
            obj.set_taborder("3");
            obj.set_text("상위메뉴 선택");
            obj.set_cssclass("sta_WF_Label");
            this.div_menu.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "109", "28", null, "29", "0", null, this.div_menu);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_menu.addChild(obj.name, obj);
            obj = new Combo("cbo_level0", "absolute", "114", "32", "185", "21", null, null, this.div_menu);
            this.div_menu.addChild(obj.name, obj);
            obj.set_taborder("5");
            obj.set_value("0");
            obj.set_text("대메뉴");
            obj.set_innerdataset("ds_menu0");
            obj.set_codecolumn("MENU_ID");
            obj.set_datacolumn("MENU_NM");
            obj.set_enable("false");
            obj.set_index("0");
            obj = new Combo("cbo_level1", "absolute", "310", "32", "185", "21", null, null, this.div_menu);
            this.div_menu.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_value("0");
            obj.set_text("중메뉴");
            obj.set_innerdataset("ds_menu1");
            obj.set_codecolumn("MENU_ID");
            obj.set_datacolumn("MENU_NM");
            obj.set_enable("false");
            obj.set_index("0");
            obj = new Static("Static21", "absolute", "0", "56", "110", null, null, "0", this.div_menu);
            obj.set_taborder("7");
            obj.set_text("하위메뉴 선택");
            obj.set_cssclass("sta_WF_Label");
            this.div_menu.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "109", "56", null, null, "0", "0", this.div_menu);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_Labelbg");
            this.div_menu.addChild(obj.name, obj);
            obj = new ListBox("list_menu2", "absolute", "114", "61", "278", "240", null, null, this.div_menu);
            this.div_menu.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_innerdataset("@ds_menu2");
            obj.set_codecolumn("MENU_ID");
            obj.set_datacolumn("MENU_NM");
            obj.set_multiselect("true");
            obj = new ListBox("list_insert", "absolute", "450", "61", "278", "240", null, null, this.div_menu);
            this.div_menu.addChild(obj.name, obj);
            obj.set_taborder("10");
            obj.set_multiselect("true");
            obj.set_innerdataset("@ds_ctrl_menu");
            obj.set_datacolumn("MENU_NM");
            obj.set_codecolumn("MENU_ID");
            obj = new Button("btn_menu_all", "absolute", "406", "107", "30", "30", null, null, this.div_menu);
            obj.set_taborder("11");
            obj.set_text(">>");
            this.div_menu.addChild(obj.name, obj);
            obj = new Button("btn_menu_insert", "absolute", "406", "142", "30", "30", null, null, this.div_menu);
            obj.set_taborder("12");
            obj.set_text(">");
            this.div_menu.addChild(obj.name, obj);
            obj = new Button("btn_menu_remove", "absolute", "406", "187", "30", "30", null, null, this.div_menu);
            obj.set_taborder("13");
            obj.set_text("<");
            this.div_menu.addChild(obj.name, obj);
            obj = new Button("btn_menu_clear", "absolute", "406", "222", "30", "30", null, null, this.div_menu);
            obj.set_taborder("14");
            obj.set_text("<<");
            this.div_menu.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "17", "160", "110", "29", null, null, this);
            obj.set_taborder("30");
            obj.set_text("프로그램");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "126", "160", null, "29", "17", null, this);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "282", "160", "91", "29", null, null, this);
            obj.set_taborder("32");
            obj.set_text("통제기능");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_action_c", "absolute", "447", "165", "60", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("작성");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_action_r", "absolute", "517", "165", "60", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("조회");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_action_u", "absolute", "587", "165", "60", "21", null, null, this);
            obj.set_taborder("35");
            obj.set_text("수정");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_action_d", "absolute", "657", "165", "60", "21", null, null, this);
            obj.set_taborder("36");
            obj.set_text("삭제");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_action_a", "absolute", "377", "165", "60", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_text("접근");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pgm_id", "absolute", "131", "164", "146", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_maxlength("250");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete", "absolute", null, "47", "43", "21", "99", null, this);
            obj.set_taborder("39");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_menu,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("29");
            		p.set_text("Div00");

            	}
            );
            this.div_menu.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 767, 542, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("서비스통제등록/수정");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edt_ctrlTi","value","ds_block","BLOCK_TI");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","cbo_bsnDsc","value","ds_block","BSN_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","dt_ctrlStDtm","value","ds_block","BLOCK_ST_DTM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","dt_ctrlEdDtm","value","ds_block","BLOCK_ED_DTM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_ctrlCntn","value","ds_block","BLOCK_CNTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","rdo_useYn","value","ds_block","UYN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edt_pgm_id","value","ds_block","BLOCK_TI");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_6313_P01.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_6313_P01.xfdl", function() {
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
        	
        	this.ds_ctrl.clearData();
        	this.ds_ctrl.addRow();
        	
        	// 체크박스로 선택된 row의 수정업데이트  모드일 경우 실행
        	if(fv_paramMode == "U"){
        		this.cbo_bsnDsc.set_enable(false);
        		this.btn_delete.set_visible(true);
        		this.search();
            } else {
         		var today = new Date();		
        		var d1 = this.gfn_today("yyyyMMdd") + String(today.getHours()).padLeft(2, "0") + String(today.getMinutes()).padLeft(2, "0");
        		today.setHours(today.getHours()+1);
        		var d2 = this.gfn_today("yyyyMMdd") + String(today.getHours()).padLeft(2, "0") + String(today.getMinutes()).padLeft(2, "0");
        		
        		this.dt_ctrlStDtm.set_value(d1);
        		this.dt_ctrlEdDtm.set_value(d2);
        		this.rdo_useYn.set_index(0);
        		this.cbo_bsnDsc.set_index(0);
        		this.edt_ctrlTi.setFocus();
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

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/

        /* 등록 및 수정시 사용되는 Validation Check */
        this.fn_validationCheck = function(){
        	// 입력값 체크
        	if(this.gfn_isNull(this.edt_ctrlTi.value)){
        		this.alert('제목을 입력바랍니다.');
        		this.edt_ctrlTi.setFocus();
        		return false;
        	}
        	if(this.gfn_isNull(this.edt_ctrlCntn.value)){
        		this.alert('통제사유를 입력바랍니다.');
        		this.edt_ctrlCntn.setFocus();
        		return false;
        	}
        	
        	var stDtm = this.gfn_nullToEmpty(this.dt_ctrlStDtm.value);
        	var edDtm = this.gfn_nullToEmpty(this.dt_ctrlEdDtm.value);
        	
        	if(this.gfn_isNull(stDtm) || this.gfn_isNull(edDtm)) {
        		this.alert('통제일시를 입력바랍니다.');
        		return false;
        	}
        	
        	if(stDtm >= edDtm) {
        		this.alert('통제종료일시가 올바르지 않습니다.');
        		this.dt_ctrlEdDtm.setFocus();
        		return false;
        	}	
        	
        	if (this.getCtrlActionFlag() == "") {
        		this.alert('통제기능을 최소 1개이상 선택바랍니다.');
        		return false;
        	}
        	
        	// 사용여부가 '사용'일 때 통제일시에 현시간이 포함되어 있으면 추가 확인(등록 즉시 적용되는 경우)
        	if (this.gfn_nullToEmpty(this.rdo_useYn.value) == 'Y') {
        		var today = new Date();
        		var todayStr = this.gfn_today("yyyyMMdd") + String(today.getHours()).padLeft(2, "0") + String(today.getMinutes()).padLeft(2, "0") + "00000";
        		if (stDtm < todayStr && todayStr < edDtm && !application.confirm("입력한 통제일시에 현재 시간이 포함되어 있습니다. 저장하시겠습니까?")) {
        			return false;
        		}
        	}
        	
            return true;
        }

        /*추가등록*/
        this.insert = function()
        {
        	if(this.fn_validationCheck()){
        		this.ds_ctrl.setColumn(0, "CTRL_TI", this.gfn_nullToEmpty(this.edt_ctrlTi.value));
        		this.ds_ctrl.setColumn(0, "CTRL_ST_DT", this.gfn_nullToEmpty(this.dt_ctrlStDtm.value));
        		this.ds_ctrl.setColumn(0, "CTRL_ED_DT", this.gfn_nullToEmpty(this.dt_ctrlEdDtm.value));
        		this.ds_ctrl.setColumn(0, "CTRL_CNTN", this.gfn_nullToEmpty(this.edt_ctrlCntn.value));
        		this.ds_ctrl.setColumn(0, "BSN_DSC", this.gfn_nullToEmpty(this.cbo_bsnDsc.value));
        		this.ds_ctrl.setColumn(0, "UYN", this.gfn_nullToEmpty(this.rdo_useYn.value));
        		this.ds_ctrl.setColumn(0, "CTRL_ACTION", this.getCtrlActionFlag());
        		this.ds_ctrl.setColumn(0, "PGM_ID", this.gfn_nullToEmpty(this.edt_pgm_id.value));

        		var sSvcID        = "insert";
        		var sURL          = "svc::rest/mg/insertCtrlServcie";

        		var sInDatasets   = "ds_ctrl=ds_ctrl";
        		var sOutDatasets  = "";
        		var sArgument     = "";
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회

        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

         /*공통코드조회 화면에서 체크박스 선택 후 수정버튼 클릭시 해당 row 정보 조회*/
        this.search = function()
        {
         	var ds_parent = this.parent.dsArg;
         	this.ds_ctrl.copyRow(0,ds_parent,0);
        }

        /*수정*/
        this.update = function()
        {
        	if(this.fn_validationCheck()){
        		this.ds_ctrl.setColumn(0, "CTRL_TI", this.gfn_nullToEmpty(this.edt_ctrlTi.value));
        		this.ds_ctrl.setColumn(0, "CTRL_ST_DTM", this.gfn_nullToEmpty(this.dt_ctrlStDtm.value));
        		this.ds_ctrl.setColumn(0, "CTRL_ED_DTM", this.gfn_nullToEmpty(this.dt_ctrlEdDtm.value));
        		this.ds_ctrl.setColumn(0, "CTRL_CNTN", this.gfn_nullToEmpty(this.edt_ctrlCntn.value));
        		this.ds_ctrl.setColumn(0, "BSN_DSC", this.gfn_nullToEmpty(this.cbo_bsnDsc.value));
        		// BSN_DSC 업무구분은 변경 불가
        		this.ds_ctrl.setColumn(0, "UYN", this.gfn_nullToEmpty(this.rdo_useYn.value));
        		this.ds_ctrl.setColumn(0, "CTRL_ACTION", this.getCtrlActionFlag());
        		this.ds_ctrl.setColumn(0, "PGM_ID", this.gfn_nullToEmpty(this.edt_pgm_id.value));

        		var sSvcID        = "update";
        		var sURL          = "svc::rest/mg/updateCtrlService";
        		var sInDatasets   = "ds_ctrl=ds_ctrl";
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
        		}else if(svcID=="combo0") {
        			this.ds_menu0.insertRow(0);
        			this.ds_menu0.setColumn(0,"MENU_ID","0");
        			this.ds_menu0.setColumn(0,"MENU_NM","대메뉴");
        			this.div_menu.cbo_level0.set_enable(true);
        		}else if(svcID=="combo1") {
        			this.ds_menu1.insertRow(0);
        			this.ds_menu1.setColumn(0,"MENU_ID","0");
        			this.ds_menu1.setColumn(0,"MENU_NM","중메뉴");
        			this.div_menu.cbo_level1.set_enable(true);
        		}
        	}
        }
        this.rdo_usrTpc_onitemchanged = function(obj,e)
        {
        	this.div_menu.cbo_level0.set_value("0");
        	this.div_menu.cbo_level1.set_index(0);
        	this.div_menu.cbo_level1.set_enable(false);
        	this.ds_menu2.clear();
        	this.fn_getUpperCommonCombo(0);
        }

        
        /*중메뉴 선택시 대메뉴 나와야 함  sMenuLvl값 0 */
        this.fn_getUpperCommonCombo = function(sMenuLvl,upperId){	
        	var codeKey = "ds_menu"+sMenuLvl;
        	var sParam = "codeKey="+codeKey+" menu_lvl="+sMenuLvl
        						+" usr_tpc="+this.gfn_nullToEmpty(this.div_menu.rdo_usrTpc.value)
        						+" isadmin=N";
        	
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
        	this.div_menu.cbo_level1.set_index(0);
        	this.div_menu.cbo_level1.set_enable(false);
        	this.ds_menu2.clear();
        	if(this.div_menu.cbo_level0.value !="0"){
        		var upperId = this.ds_menu0.getColumn(e.postindex, "MENU_ID");
        		this.fn_getUpperCommonCombo(1, upperId);
        	}
        }

        /* 중메뉴 선택 */
        this.cbo_level1_onitemchanged = function(obj,e)
        {
        	this.ds_menu2.clear();
        	if(this.div_menu.cbo_level1.value !="0"){
        		var upperId = this.ds_menu1.getColumn(e.postindex, "MENU_ID");
        		this.fn_getUpperCommonCombo(2, upperId);
        	}
        }

        
        this.div_menu_btn_menu_onclick = function(obj,e)
        {
        	if (obj.id == 'btn_menu_all') {
        		for(var i = 0; i < this.ds_menu2.getRowCount(); i++) {
        			var mId = this.ds_menu2.getColumn(i, "MENU_ID");
        			
        			var existRow = this.ds_ctrl_menu.findRow("MENU_ID", mId);
        			if (existRow == -1) {
        				this.ds_ctrl_menu.addRow();
        				this.ds_ctrl_menu.copyRow(this.ds_ctrl_menu.getRowCount()-1, this.ds_menu2, i);
        			}
        		}
        	} else if (obj.id == 'btn_menu_insert') {
        		for(var i = 0; i < this.div_menu.list_menu2.getSelectedCount(); i++) {
        			var idx = this.div_menu.list_menu2.getSelectedItems()[i];
        			var mId = this.ds_menu2.getColumn(idx, "MENU_ID");
        			
        			var existRow = this.ds_ctrl_menu.findRow("MENU_ID", mId);
        			if (existRow == -1) {
        				this.ds_ctrl_menu.addRow();
        				this.ds_ctrl_menu.copyRow(this.ds_ctrl_menu.getRowCount()-1, this.ds_menu2, this.div_menu.list_menu2.getSelectedItems()[i]);
        			}
        		}
        	} else if (obj.id == 'btn_menu_remove') {
        		trace(this.div_menu.list_insert.getSelectedCount());
        		for(var i = this.div_menu.list_insert.getSelectedCount()-1; i >= 0; i--) {
        			var idx = this.div_menu.list_insert.getSelectedItems()[i];
        			this.ds_ctrl_menu.deleteRow(idx);
        		}
        	} else if (obj.id == 'btn_menu_clear') {
        		this.ds_ctrl_menu.clearData();
        	}
        }

        this.cbo_bsnDsc_onitemchanged = function(obj,e)
        {
        	if (this.cbo_bsnDsc.value == "ESCM") {
        		this.div_menu.set_visible(true);
        		this.set_height(542); // form height
        		this.parent.set_height(542); // popup height
        	} else {
        		this.div_menu.set_visible(false);
        		this.set_height(233); // form height
        		this.parent.set_height(233); // popup height
        		this.div_menu.cbo_level0.set_enable(false);
        		this.div_menu.cbo_level1.set_enable(false);
        		this.ds_menu0.clear();
        		this.ds_menu1.clear();
        		this.ds_menu2.clear();
        		this.ds_ctrl_menu.clearData();
        	}
        }

        /* 통제기능 플래그 값 */
        this.getCtrlActionFlag = function() {
        	var flag = "";
        	if (this.chk_action_c.value) { flag += "C"; }
        	if (this.chk_action_r.value) { flag += "R"; }
        	if (this.chk_action_u.value) { flag += "U"; }
        	if (this.chk_action_d.value) { flag += "D"; }
        	if (this.chk_action_a.value) { flag += "A"; }
        	return flag;
        }

        this.chk_action_a_onchanged = function(obj,e)
        {
        	if (obj.value) {
        		this.chk_action_c.set_value(false);
        		this.chk_action_r.set_value(false);
        		this.chk_action_u.set_value(false);
        		this.chk_action_d.set_value(false);
        		this.chk_action_c.set_enable(false);
        		this.chk_action_r.set_enable(false);
        		this.chk_action_u.set_enable(false);
        		this.chk_action_d.set_enable(false);		
        	} else {
        		this.chk_action_c.set_enable(true);
        		this.chk_action_r.set_enable(true);
        		this.chk_action_u.set_enable(true);
        		this.chk_action_d.set_enable(true);				
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
            this.cbo_bsnDsc.addEventHandler("onitemchanged", this.cbo_bsnDsc_onitemchanged, this);
            this.div_menu.rdo_usrTpc.addEventHandler("onitemchanged", this.rdo_usrTpc_onitemchanged, this);
            this.div_menu.cbo_level0.addEventHandler("onitemchanged", this.cbo_level0_onitemchanged, this);
            this.div_menu.cbo_level1.addEventHandler("onitemchanged", this.cbo_level1_onitemchanged, this);
            this.div_menu.btn_menu_all.addEventHandler("onclick", this.div_menu_btn_menu_onclick, this);
            this.div_menu.btn_menu_insert.addEventHandler("onclick", this.div_menu_btn_menu_onclick, this);
            this.div_menu.btn_menu_remove.addEventHandler("onclick", this.div_menu_btn_menu_onclick, this);
            this.div_menu.btn_menu_clear.addEventHandler("onclick", this.div_menu_btn_menu_onclick, this);
            this.Static14.addEventHandler("onclick", this.Static07_onclick, this);
            this.chk_action_a.addEventHandler("onchanged", this.chk_action_a_onchanged, this);
            this.btn_delete.addEventHandler("onclick", this.btn_delete_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_6313_P01.xfdl");

       
    };
}
)();
