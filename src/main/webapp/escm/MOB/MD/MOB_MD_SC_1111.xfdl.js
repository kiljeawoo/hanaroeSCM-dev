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
                this.set_name("MOB_MD_SC_1111");
                this.set_titletext("가격할인 사용자관리");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_mdUser", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"13\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"50\"/><Column id=\"USR_TPC\" type=\"STRING\" size=\"2\"/><Column id=\"MD_ID\" type=\"STRING\" size=\"9\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"50\"/><Column id=\"USR_MPNO\" type=\"STRING\" size=\"20\"/><Column id=\"MD_IMEI_NO\" type=\"STRING\" size=\"20\"/><Column id=\"MD_MNGR_CD\" type=\"STRING\" size=\"2\"/><Column id=\"MD_CHGR_CD\" type=\"STRING\" size=\"2\"/><Column id=\"MD_USE_CD\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CURRENT_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CURRENT_PAGE\">0</Col><Col id=\"PAGE_SIZE\">0</Col><Col id=\"TOTAL_ROW_COUNT\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_org", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">02</Col><Col id=\"DATA\">본부</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"DATA\">사업장</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mdAuth", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"13\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"50\"/><Column id=\"USR_TPC\" type=\"STRING\" size=\"2\"/><Column id=\"MD_ID\" type=\"STRING\" size=\"9\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"50\"/><Column id=\"USR_MPNO\" type=\"STRING\" size=\"20\"/><Column id=\"MD_IMEI_NO\" type=\"STRING\" size=\"20\"/><Column id=\"MD_MNGR_CD\" type=\"STRING\" size=\"2\"/><Column id=\"MD_CHGR_CD\" type=\"STRING\" size=\"2\"/><Column id=\"MD_USE_CD\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mdUser_up", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"13\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"50\"/><Column id=\"USR_TPC\" type=\"STRING\" size=\"2\"/><Column id=\"MD_ID\" type=\"STRING\" size=\"9\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"50\"/><Column id=\"USR_MPNO\" type=\"STRING\" size=\"20\"/><Column id=\"MD_IMEI_NO\" type=\"STRING\" size=\"20\"/><Column id=\"MD_MNGR_CD\" type=\"STRING\" size=\"2\"/><Column id=\"MD_CHGR_CD\" type=\"STRING\" size=\"2\"/><Column id=\"MD_USE_CD\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "69", "15", null, this);
            obj.set_taborder("89");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "2.16%", "10", null, "21", "86.9%", null, this.div_search);
            obj.set_taborder("31");
            obj.set_text("사업장조회");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("Edit_comnum", "absolute", "11.7%", "10", null, "21", "79.39%", null, this.div_search);
            obj.set_taborder("32");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("Edit_comname", "absolute", "20.87%", "10", null, "21", "69.72%", null, this.div_search);
            obj.set_taborder("33");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_comname", "absolute", "30.53%", "10", null, "21", "66.79%", null, this.div_search);
            obj.set_taborder("34");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "2.16%", "42", null, "21", "86.64%", null, this.div_search);
            obj.set_taborder("35");
            obj.set_text("관리유형");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_mgr", "absolute", "11.7%", "42", null, "21", "66.28%", null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_mgr_innerdataset = new Dataset("rdo_mgr_innerdataset", this.div_search.rdo_mgr);
            rdo_mgr_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">관리자</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">사용자</Col></Row></Rows>");
            obj.set_innerdataset(rdo_mgr_innerdataset);
            obj.set_taborder("36");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("2");
            obj.set_direction("vertical");
            obj.style.set_font("9 Gulim");
            obj.set_index("0");
            obj = new Static("Static04", "absolute", "35.5%", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("37");
            obj.set_text("개인번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_ID", "absolute", "45.67%", "10", "150", "21", null, null, this.div_search);
            obj.set_taborder("38");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "68.83%", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("39");
            obj.set_text("이름");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_NM", "absolute", "77.1%", "10", "150", "21", null, null, this.div_search);
            obj.set_taborder("40");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "35.5%", "42", null, "21", "53.31%", null, this.div_search);
            obj.set_taborder("41");
            obj.set_text("권한유형");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_cgr", "absolute", "45.67%", "42", null, "21", "32.32%", null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_cgr_innerdataset = new Dataset("rdo_cgr_innerdataset", this.div_search.rdo_cgr);
            rdo_cgr_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">책임자</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">담당자</Col></Row></Rows>");
            obj.set_innerdataset(rdo_cgr_innerdataset);
            obj.set_taborder("42");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("2");
            obj.set_direction("vertical");
            obj.style.set_font("9 Gulim");
            obj.set_index("0");
            obj = new Static("Static05", "absolute", "68.83%", "42", null, "21", "20.1%", null, this.div_search);
            obj.set_taborder("43");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_use", "absolute", "77.1%", "42", null, "21", "1.15%", null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_use_innerdataset = new Dataset("rdo_use_innerdataset", this.div_search.rdo_use);
            rdo_use_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">중지</Col></Row></Rows>");
            obj.set_innerdataset(rdo_use_innerdataset);
            obj.set_taborder("44");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("2");
            obj.set_direction("vertical");
            obj.style.set_font("9 Gulim");
            obj.set_index("0");

            obj = new Div("div_md", "absolute", "0", "97", null, null, "15", "1", this);
            obj.set_taborder("81");
            obj.set_text("div_md");
            this.addChild(obj.name, obj);
            obj = new Button("Button75", "absolute", "347", "0", null, "12", "363", null, this.div_md);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_md.addChild(obj.name, obj);
            obj = new Div("div_paging", "absolute", "226", null, "338", "29", null, "40", this.div_md);
            obj.set_taborder("4");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_md.addChild(obj.name, obj);
            obj = new Grid("grd_md", "absolute", "0", "42", null, null, "0", "66", this.div_md);
            obj.set_taborder("2");
            obj.set_binddataset("ds_mdUser");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_summarytype("top");
            obj.set_treeusebutton("use");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseexpandkey("true");
            obj.set_treeuseimage("false");
            obj.set_treeuseline("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"사업장코드\"/><Cell col=\"2\" text=\"사업장명\"/><Cell col=\"3\" text=\"레벨\"/><Cell col=\"4\" text=\"구분\"/><Cell col=\"5\" text=\"개인번호\"/><Cell col=\"6\" text=\"이름\"/><Cell col=\"7\" text=\"핸드폰번호\"/><Cell col=\"8\" text=\"고유번호\"/><Cell col=\"9\" text=\"매장관리자\"/><Cell col=\"10\" text=\"매장책임자\"/><Cell col=\"11\" text=\"사용/중지\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: ;\" expr=\"currow+1\"/><Cell col=\"1\" edittype=\"expr:comp.parent.parent.ds_mdAuth.getColumn(0, &quot;USR_TPC&quot;)=='02'||application.gv_userTPC == 'admin'?'normal':'none'\" text=\"bind:NA_TRPL_C\" tooltiptext=\"bind:NA_TRPL_C\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:CLNTNM\" tooltiptext=\"bind:CLNTNM\"/><Cell col=\"3\" displaytype=\"number\" text=\"bind:LEV\" tooltiptext=\"bind:LEV\"/><Cell col=\"4\" displaytype=\"combo\" style=\"align: ;\" text=\"bind:USR_TPC\" combodataset=\"ds_org\" combocodecol=\"CODE\" combodatacol=\"DATA\" tooltiptext=\"bind:USR_TPC\"/><Cell col=\"5\" displaytype=\"normal\" style=\"align: ;\" text=\"bind:MD_ID\" tooltiptext=\"bind:MD_ID\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" style=\"align: ;\" text=\"bind:USR_NM\" tooltiptext=\"bind:USR_NM\"/><Cell col=\"7\" displaytype=\"normal\" style=\"align: ;\" text=\"bind:USR_MPNO\" tooltiptext=\"bind:USR_MPNO\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"expr:comp.parent.parent.ds_mdAuth.getColumn(0, &quot;USR_TPC&quot;)=='02'||application.gv_userTPC=='admin'?'normal':'none'\" style=\"align: ;\" text=\"bind:MD_IMEI_NO\" tooltiptext=\"bind:MD_IMEI_NO\"/><Cell col=\"9\" displaytype=\"checkbox\" edittype=\"expr:comp.parent.parent.ds_mdAuth.getColumn(0, &quot;USR_TPC&quot;)=='02'||application.gv_userTPC=='admin'?'checkbox':'none'\" style=\"align: ;\" text=\"bind:MD_MNGR_CD\" tooltiptext=\"bind:MD_MNGR_CD\"/><Cell col=\"10\" displaytype=\"checkbox\" edittype=\"expr:comp.parent.parent.ds_mdAuth.getColumn(0, &quot;USR_TPC&quot;)=='02'||comp.parent.parent.ds_mdAuth.getColumn(0, &quot;MD_MNGR_CD&quot;)=='1'||application.gv_userTPC=='admin'?'checkbox':'none'\" text=\"bind:MD_CHGR_CD\" tooltiptext=\"bind:MD_CHGR_CD\"/><Cell col=\"11\" displaytype=\"checkbox\" edittype=\"expr:comp.parent.parent.ds_mdAuth.getColumn(0, &quot;USR_TPC&quot;)=='02'||comp.parent.parent.ds_mdAuth.getColumn(0, &quot;MD_MNGR_CD&quot;)=='1'||application.gv_userTPC=='admin'?'checkbox':'none'\" text=\"bind:MD_USE_CD\" tooltiptext=\"bind:MD_USE_CD\"/></Band></Format></Formats>");
            this.div_md.addChild(obj.name, obj);

            obj = new Button("btn_execl", "absolute", null, "0", "41", "21", "79", null, this);
            obj.set_taborder("11");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("68");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "788", "0", "15", "490", null, null, this);
            obj.set_taborder("71");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "732", "21", "56", "8", null, null, this);
            obj.set_taborder("72");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "732", "72", "56", "41", null, null, this);
            obj.set_taborder("87");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0.12%", "30", null, "42", "98.01%", null, this);
            obj.set_taborder("88");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_na_save", "absolute", null, "0", "41", "21", "126", null, this);
            obj.set_taborder("91");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 69, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("89");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 788, 420, this.div_md,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("81");
            		p.set_text("div_md");

            	}
            );
            this.div_md.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("가격할인 사용자관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_search.rdo_mgr","value","ds_dataM","DVY_VHC_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_search.rdo_cgr","value","ds_dataM","DVY_VHC_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_search.rdo_use","value","ds_dataM","DVY_VHC_DSC");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("MOB_MD_SC_1111.xfdl", "lib::comLib.xjs");
        this.registerScript("MOB_MD_SC_1111.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        // Form Init: 페이지 호출 후 실행
        this.form_init = function(obj,e)
        {

        }

        // Form Onload: DataSet 로딩 후 실행
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통

        //	시스템관리자가 아니면 사용자 인증 및 권한확인을 한다
        	if(application.gv_userTPC != "admin")
        	{
        		this.fn_getAuth();
        	}	
        }

        this.fn_afterFormOnload = function() //onload
        {

        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        /* Paging 처리 */
        this.fn_paging = function(vPageNum)
        {
        	this.ds_pageVO.clearData();
        	this.ds_mdUser.clearData(); // Grid에 Binding된 Dataset명

        	this.ds_pageVO.addRow();
        	
        	var vPageSize = 20; // Grid에 보여줄 Row수 선택
        	var vTotalCount = 0; // 전체건수. 화면조회후 리턴받아 사용 (구동시 갱신)
        	
        	this.ds_pageVO.setColumn(0, "CURRENT_PAGE", vPageNum); // 현재 페이지
        	this.ds_pageVO.setColumn(0, "PAGE_SIZE", vPageSize);
        	this.ds_pageVO.setColumn(0, "TOTAL_ROW_COUNT", vTotalCount);
        	
        	var argumentObj = "";
        	
        	this.fn_search();
        }

        // 사용자관리 탭화면 닫기
        this.close_tab_window = function()
        {
            var strFormId = '';	// 화면폼 아이디
        	     if(application.gv_userType == '03') strFormId = '39001001';
            else if(application.gv_userType == '02') strFormId = '29001001';
        	application.afrm_FrameSet.frames[strFormId].form.close();
        }

        this.fn_setAuth = function()
        {
        //	권한에 따른 가능 및 제약업무 설정
        //	trace("application.gv_glnCode:" + application.gv_glnCode);
        //	trace("application.gv_userType:" + application.gv_userType);

        	//	읽기전용 입력창 배경색
        	var	rdonly_bgcolor = "#999999ff";
        	//	조회조건 제약
        	//	사업장 사용자는 소속사업장의 정보만 조회가 가능하다
        	if(application.gv_userType == '03')
        	{
        		//	조회조건 사업장코드 고정 & 비활성화
        		this.div_search.Edit_comnum.set_value(application.gv_glnCode);
        		this.div_search.Edit_comnum.set_readonly(true);
        		this.div_search.Edit_comnum.style.set_background(rdonly_bgcolor);
        		//	조회조건 사업장명 고정 & 비활성화
        		this.div_search.Edit_comname.set_value(application.gv_companyName);
        		this.div_search.Edit_comname.set_readonly(true);
        		this.div_search.Edit_comname.style.set_background(rdonly_bgcolor);
        		//	사업장조회 버튼 비활성화
        		this.div_search.btn_comname.set_enable(false);
        	
        		//	매장 관리자가 아니면 개인번호와 이름은 고정 & 비활성화
        		trace("MD_MNGR_CD:" + this.ds_mdAuth.getColumn(0, "MD_MNGR_CD"));
        		if(this.ds_mdAuth.getColumn(0, "MD_MNGR_CD") == '0')
        		{
        			//	조회조건 개인번호 고정 & 비활성화
        			this.div_search.edt_ID.set_value(application.gv_userId);
        			this.div_search.edt_ID.set_readonly(true);
        			this.div_search.edt_ID.style.set_background(rdonly_bgcolor);
        			//	조회조건 이름 고정 & 비활성화
        			this.div_search.edt_NM.set_value(this.ds_mdAuth.getColumn(0, "USR_NM"));
        			this.div_search.edt_NM.set_readonly(true);
        			this.div_search.edt_NM.style.set_background(rdonly_bgcolor);
        		}
        	}
        }

        // 콜백 함수
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	var current_page = this.ds_pageVO.getColumn(0, "CURRENT_PAGE");
        	var page_size    = this.ds_pageVO.getColumn(0, "PAGE_SIZE");
        	var sTotal       = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");

        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        	}
        	else
        	{
        		if(svcID == "retrieveMdUsrAuth")
        		{
        			trace("this.ds_mdAuth:" + this.ds_mdAuth.saveXML());
        			if (this.ds_mdAuth.rowcount > 0)
        			{
        				if(this.ds_mdAuth.getColumn(0, "MD_USE_CD") == 0)
        				{
        					alert("사용중지된 가격할인 사용자입니다");
        					this.close_tab_window();
        				}
        				this.fn_setAuth();
        			}
        			else
        			{
        				alert("가격할인 사용자가 아닙니다");
        				this.close_tab_window();
        			}
        		}
        		else if(svcID == "retrieveMdUsrList")
        		{
        			trace("this.ds_mdUser:" + this.ds_mdUser.saveXML());
        			if (this.ds_mdUser.rowcount > 0) {
        				this.div_md.div_paging.fn_pageSet(sTotal, page_size, "div_paging", current_page);
        			} else {
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        				this.div_md.div_paging.fn_pageSet(0, 0, "div_paging", current_page);
        			}
        		}
        		else if(svcID == "updateMdUsr")
        		{
        			// 변경내역 저장 데이터셋 초기화
        			this.ds_mdUser_up.clearData();
        			this.fn_paging(1);
        		}
        	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        // 조회조건 영역 펼치기, 접기
        this.Div_Md_Button75_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_md);
        }

        this.btn_na_save_onclick = function(obj,e)
        {
        	for(var i = 0, length = this.ds_mdUser.getRowCount(); i < length; i++)
        	{
        		if(this.ds_mdUser.getRowType(i) == "4")	// UPDATE
        		{
        			var nRow = this.ds_mdUser_up.addRow();
        			var bSucc = this.ds_mdUser_up.copyRow(nRow, this.ds_mdUser, i);
        		}
        	}

        	if(this.ds_mdUser_up.getRowCount() > 0)
        	{
        		var ret = application.confirm(this.ds_mdUser_up.getRowCount() + "건에 대해 변경하시겠습니까?", "변경확인", "QUESTION");
        		if (ret == false)
        			{
        			this.reload();
        		}
        	}
        	else if(this.ds_mdUser_up.getRowCount() == 0)
        	{
        		alert("저장할 변경내역이 없습니다");
        		return;
        	}

        	trace("ds_mdUser_up:" + this.ds_mdUser_up.saveXML());
        	var params	      = "";
        	var sSvcID        = "updateMdUsr"; 					// 통신아이디
        	var sURL          = "svc::rest/mob/updateMdUsr";	// 호출할 서버 페이지 주소
        	var sInDatasets   = "in_ds=ds_mdUser_up:A";			// 보내는데이터셋
        	var sOutDatasets  = "";
        	var sArgument     = params							// 파라미터
        	var sCallbackFunc = "fn_callBack";					// 콜백
        	var tranType 	  = "U";							// U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        // 엑셀 다운로드
        this.btn_excel_onclick = function(obj,e)
        {
        	var trplC	= this.gfn_nullToEmpty(this.div_search.Edit_comnum.value);
        	var clntNm	= this.gfn_nullToEmpty(this.div_search.Edit_comname.value);
        	var md_id	= this.gfn_nullToEmpty(this.div_search.edt_ID.value);
        	var md_nm	= this.gfn_nullToEmpty(this.div_search.edt_NM.value);
        	var mgr_cd	= this.div_search.rdo_mgr.value;
        	var cgr_cd	= this.div_search.rdo_cgr.value;
        	var use_cd	= this.div_search.rdo_use.value;

        	var param	=  "TRPL_C="	+ trplC
        				+ "&CLNTNM="	+ clntNm
        				+ "&MD_ID="		+ md_id
        				+ "&MD_NM="		+ md_nm
        				+ "&MGR_CD="	+ mgr_cd
        				+ "&CGR_CD="	+ cgr_cd
        				+ "&USE_CD="	+ use_cd
        				;

        	this.fn_excel(param);
        }

        this.fn_excel = function(param)
        {
        		trace("엑셀 다운로드 params >>> " + param);
        	//	this.web_downExcel.set_url(application.gv_server_url + "rest/excel/mob/downloadExcelMdUsrList?" + param);
        	//	param = encodeURI(encodeURI(param));
        		excelDownHandler(application.gv_server_url + "rest/excel/mob/downloadExcelMdUsrList?" + param, this);
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/	
        // 가격할인 사용자 조회
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_paging(1);
        }

        this.fn_getAuth = function()
        {
        	var param	=  "MD_ID="		+ application.gv_userId;

        	var sSvcID			= "retrieveMdUsrAuth";
        	var sURL			= "svc::rest/mob/retrieveMdUsrAuth";
        	var sInDatasets		= "";									// 보내는데이터셋
        	var sOutDatasets	= "ds_mdAuth=ds_mdAuth";				// 화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument		= param;
        	var sCallbackFunc	= "fn_callBack";
        	var sTranType		= "S";									// U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_search = function()
        {
        	var trplC	= this.gfn_nullToEmpty(this.div_search.Edit_comnum.value);
        	var clntNm	= this.gfn_nullToEmpty(this.div_search.Edit_comname.value);
        	var md_id	= this.gfn_nullToEmpty(this.div_search.edt_ID.value);
        	var md_nm	= this.gfn_nullToEmpty(this.div_search.edt_NM.value);
        	var mgr_cd	= this.div_search.rdo_mgr.value;
        	var cgr_cd	= this.div_search.rdo_cgr.value;
        	var use_cd	= this.div_search.rdo_use.value;

        	var param	=  "TRPL_C="	+ trplC
        				+ " CLNTNM="	+ clntNm
        				+ " MD_ID="		+ md_id
        				+ " MD_NM="		+ md_nm
        				+ " MGR_CD="	+ mgr_cd
        				+ " CGR_CD="	+ cgr_cd
        				+ " USE_CD="	+ use_cd
        				;

        	var sSvcID			= "retrieveMdUsrList";
        	var sURL			= "svc::rest/mob/retrieveMdUsrList";
        	var sInDatasets		= "ds_pageVO=ds_pageVO";					// 보내는데이터셋
        	var sOutDatasets	= "ds_mdUser=ds_mdUser ds_pageVO=ds_pageVO";// 화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument		= param;
        	var sCallbackFunc	= "fn_callBack";
        	var sTranType		= "S";										// U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        // 업체 조회
        this.div_search_btn_comname_onclick = function(obj,e)
        {
        	var oArg = "";
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("trplSearchPopup","MOB.MD::MOB_MD_SC_1111_P01.xfdl",oArg,sOption,sPopupCallBack);
        }

        // 팝업작업 후 진행함수
        this.fn_popupAfter = function(strId,strVal)
        {
        //	trace(" strId : " + strId + " strVal : " + strVal);	
        	if(strId == "trplSearchPopup"){
        		if(strVal != ''){
        			var paramsArr = strVal.split(",");
        			this.div_search.Edit_comnum.set_value(paramsArr[0]);
        			this.div_search.Edit_comname.set_value(paramsArr[1]);
        		}
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("oninit", this.form_init, this);
            this.div_search.btn_comname.addEventHandler("onclick", this.div_search_btn_comname_onclick, this);
            this.div_search.Static01.addEventHandler("onclick", this.div_search_Static05_onclick, this);
            this.div_search.edt_ID.addEventHandler("onkeydown", this.edt_ACNO_onkeydown, this);
            this.div_search.edt_NM.addEventHandler("onkeydown", this.edt_ACNO_onkeydown, this);
            this.div_search.Static03.addEventHandler("onclick", this.div_search_Static05_onclick, this);
            this.div_search.Static05.addEventHandler("onclick", this.div_search_Static05_onclick, this);
            this.div_md.Button75.addEventHandler("onclick", this.Div_Md_Button75_onclick, this);
            this.btn_execl.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_na_save.addEventHandler("onclick", this.btn_na_save_onclick, this);

        };

        this.loadIncludeScript("MOB_MD_SC_1111.xfdl");
        this.loadPreloadList();
       
    };
}
)();
