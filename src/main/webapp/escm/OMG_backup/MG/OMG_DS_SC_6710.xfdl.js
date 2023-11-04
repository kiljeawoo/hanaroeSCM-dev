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
                this.set_name("pattern_01");
                this.set_titletext("조직도 관리");
                this._setFormPosition(0,0,1000,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dep", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_ID\" type=\"STRING\" size=\"64\"/><Column id=\"DEPT_HIGH\" type=\"STRING\" size=\"64\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"128\"/><Column id=\"DEPT_SORT\" type=\"STRING\" size=\"32\"/><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"13\"/><Column id=\"DEPT_LEVEL\" type=\"STRING\" size=\"1\"/><Column id=\"LEVEL_ID\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_user", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"check\" type=\"INT\" size=\"3\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"64\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"64\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"64\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"128\"/><Column id=\"POS\" type=\"STRING\" size=\"128\"/><Column id=\"GRADE\" type=\"STRING\" size=\"128\"/><Column id=\"JOB\" type=\"STRING\" size=\"512\"/><Column id=\"PHONE\" type=\"STRING\" size=\"128\"/><Column id=\"MOBILE\" type=\"STRING\" size=\"128\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"128\"/><Column id=\"USER_SORT\" type=\"STRING\" size=\"32\"/><Column id=\"AUTH_TYPE_CD\" type=\"STRING\" size=\"10\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_param", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"64\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"64\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"64\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"128\"/><Column id=\"POS\" type=\"STRING\" size=\"128\"/><Column id=\"GRADE\" type=\"STRING\" size=\"128\"/><Column id=\"JOB\" type=\"STRING\" size=\"512\"/><Column id=\"PHONE\" type=\"STRING\" size=\"128\"/><Column id=\"MOBILE\" type=\"STRING\" size=\"128\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"128\"/><Column id=\"USER_SORT\" type=\"STRING\" size=\"32\"/><Column id=\"AUTH_TYPE_CD\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_select", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"64\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_usr_cnt", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_page", this);
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


            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("6");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "788", "-1", "15", "491", null, null, this);
            obj.set_taborder("5");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "0%", "7", null, null, "15", "10", this);
            obj.set_taborder("7");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Button("btn_update", "absolute", null, "0", "89", "21", "215", null, this.Div02);
            obj.set_taborder("70");
            obj.set_text("사용자 동기화");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.Div02.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "8", "46", "240", null, null, "0", this.Div02);
            obj.set_taborder("71");
            obj.set_binddataset("ds_dep");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"218\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"조직도\"/></Band><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" text=\"bind:DEPT_NAME\" treelevel=\"bind:DEPT_LEVEL\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);
            obj = new Tab("Tab00", "absolute", "263", "46", null, null, "0", "0", this.Div02);
            obj.set_taborder("72");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.style.set_showextrabutton("false");
            obj.style.set_border("1 solid #a6a6a6ff,0 none #808080ff");
            this.Div02.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.Div02.Tab00);
            obj.set_text("사용자 관리");
            this.Div02.Tab00.addChild(obj.name, obj);
            obj = new Grid("grid_user", "absolute", "0.14%", "1", null, null, "0%", "50", this.Div02.Tab00.tabpage1);
            obj.set_taborder("2");
            obj.set_binddataset("ds_user");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_nodatatext("부서 내 등록된 사용자가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"93\"/><Column size=\"102\"/><Column size=\"200\"/><Column size=\"77\"/><Column size=\"73\"/><Column size=\"94\"/><Column size=\"54\"/><Column size=\"68\"/><Column size=\"64\"/><Column size=\"106\"/><Column size=\"117\"/><Column size=\"58\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\" text=\"사업장번호\"/><Cell col=\"3\" text=\"사업자번호\"/><Cell col=\"4\" text=\"회사명\"/><Cell col=\"5\" text=\"아이디\"/><Cell col=\"6\" text=\"이름\"/><Cell col=\"7\" text=\"부서명\"/><Cell col=\"8\" text=\"직급\"/><Cell col=\"9\" text=\"직위\"/><Cell col=\"10\" text=\"전화번호\"/><Cell col=\"11\" text=\"휴대폰\"/><Cell col=\"12\" text=\"이메일\"/><Cell col=\"13\" text=\"정렬\"/><Cell col=\"14\" text=\"권한\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:check\"/><Cell col=\"1\" expr=\"expr:dataset.rowcount - currow\"/><Cell col=\"2\" text=\"bind:NA_TRPL_C\"/><Cell col=\"3\" text=\"bind:BZNO\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:CLNTNM\"/><Cell col=\"5\" text=\"bind:USER_ID\"/><Cell col=\"6\" text=\"bind:USER_NAME\"/><Cell col=\"7\" text=\"bind:DEPT_NAME\"/><Cell col=\"8\" text=\"bind:POS\"/><Cell col=\"9\" text=\"bind:GRADE\"/><Cell col=\"10\" text=\"bind:PHONE\"/><Cell col=\"11\" text=\"bind:MOBILE\"/><Cell col=\"12\" text=\"bind:EMAIL\"/><Cell col=\"13\" text=\"bind:USER_SORT\"/><Cell col=\"14\" text=\"bind:AUTH_TYPE_CD\"/></Band></Format></Formats>");
            this.Div02.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Div("div_page01", "absolute", "28.39%", null, "340", "30", null, "10", this.Div02.Tab00.tabpage1);
            obj.set_taborder("3");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.Div02.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.Div02.Tab00);
            obj.set_text("부서 관리");
            this.Div02.Tab00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "25", "130", "29", null, null, this.Div02.Tab00.tabpage2);
            obj.set_taborder("15");
            obj.set_text("부서 아이디");
            obj.set_cssclass("sta_WF_Label");
            this.Div02.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "53", "130", "29", null, null, this.Div02.Tab00.tabpage2);
            obj.set_taborder("16");
            obj.set_text("상위 부서 아이디");
            obj.set_cssclass("sta_WF_Label");
            this.Div02.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "81", "130", "29", null, null, this.Div02.Tab00.tabpage2);
            obj.set_taborder("17");
            obj.set_text("부 서 명");
            obj.set_cssclass("sta_WF_Label");
            this.Div02.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0", "137", "130", "29", null, null, this.Div02.Tab00.tabpage2);
            obj.set_taborder("18");
            obj.set_text("정 렬 순 서");
            obj.set_cssclass("sta_WF_Label");
            this.Div02.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "129", "25", null, "29", "0", null, this.Div02.Tab00.tabpage2);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div02.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "129", "53", null, "29", "0", null, this.Div02.Tab00.tabpage2);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div02.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "129", "81", null, "29", "0", null, this.Div02.Tab00.tabpage2);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div02.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "129", "137", null, "29", "0", null, this.Div02.Tab00.tabpage2);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div02.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Edit("edit_dept_id", "absolute", "133", "29", "166", "21", null, null, this.Div02.Tab00.tabpage2);
            obj.set_taborder("23");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div02.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Edit("edit_dept_high", "absolute", "133", "57", "166", "21", null, null, this.Div02.Tab00.tabpage2);
            obj.set_taborder("24");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div02.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Edit("edit_dept_name", "absolute", "133", "85", "166", "21", null, null, this.Div02.Tab00.tabpage2);
            obj.set_taborder("25");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div02.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Edit("edit_dept_sort", "absolute", "133", "141", "166", "21", null, null, this.Div02.Tab00.tabpage2);
            obj.set_taborder("26");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div02.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "128", "109", null, "29", "0", null, this.Div02.Tab00.tabpage2);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div02.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Edit("edit_nabzplc", "absolute", "132", "113", "167", "21", null, null, this.Div02.Tab00.tabpage2);
            obj.set_taborder("28");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div02.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "0", "109", "130", "29", null, null, this.Div02.Tab00.tabpage2);
            obj.set_taborder("29");
            obj.set_text("사업장 코드");
            obj.set_cssclass("sta_WF_Label");
            this.Div02.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Button("btn_insa_add", "absolute", null, "45", "53", "21", "112", null, this.Div02);
            obj.set_taborder("73");
            obj.set_text("등록");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("btn_del", "absolute", null, "45", "53", "21", "0", null, this.Div02);
            obj.set_taborder("74");
            obj.set_text("삭제");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("btn_chg", "absolute", null, "45", "53", "21", "56", null, this.Div02);
            obj.set_taborder("75");
            obj.set_text("수정");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("btn_add", "absolute", null, "45", "53", "21", "112", null, this.Div02);
            obj.set_taborder("76");
            obj.set_text("등록");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("btn_insa_chg", "absolute", null, "45", "53", "21", "56", null, this.Div02);
            obj.set_taborder("77");
            obj.set_text("수정");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("btn_insa_del", "absolute", null, "45", "53", "21", "0", null, this.Div02);
            obj.set_taborder("78");
            obj.set_text("삭제");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("btn_update_pic", "absolute", null, "0", "74", "21", "138", null, this.Div02);
            obj.set_taborder("79");
            obj.set_text("사진 동기화");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.Div02.addChild(obj.name, obj);
            obj = new Combo("cbo_emp", "absolute", "441", "46", "54", "21", null, null, this.Div02);
            this.Div02.addChild(obj.name, obj);
            var cbo_emp_innerdataset = new Dataset("cbo_emp_innerdataset", this.Div02.cbo_emp);
            cbo_emp_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">이름</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사번</Col></Row></Rows>");
            obj.set_innerdataset(cbo_emp_innerdataset);
            obj.set_taborder("80");
            obj.set_value("1");
            obj.set_text("이름");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_align("left middle");
            obj.set_index("0");
            obj = new Edit("edt_emp", "absolute", "498", "46", "105", "21", null, null, this.Div02);
            obj.set_taborder("81");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("btn_search", "absolute", "609", "46", "53", "21", null, null, this.Div02);
            obj.set_taborder("82");
            obj.set_text("검색");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("btn_sort", "absolute", "8", "18", "89", "21", null, null, this.Div02);
            obj.set_taborder("83");
            obj.set_text("부서 재정렬");
            obj.set_cssclass("btn_WF_CRUD");
            this.Div02.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Div02.Tab00.tabpage1,
            	//-- Layout function
            	function(p) {
            		p.set_text("사용자 관리");

            	}
            );
            this.Div02.Tab00.tabpage1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Div02.Tab00.tabpage2,
            	//-- Layout function
            	function(p) {
            		p.set_text("부서 관리");

            	}
            );
            this.Div02.Tab00.tabpage2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("7");
            		p.set_text("Div02");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1000, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("조직도 관리");

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
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_6710.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_6710.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        var rowposition = 0;
        var userposition = 0;
        var pop_dept = "";
        var lsNowPage;
        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        	this.Div02.btn_insa_add.set_visible(true);
        	this.Div02.btn_insa_chg.set_visible(true);
        	this.Div02.btn_insa_del.set_visible(true);
        	this.Div02.btn_add.set_visible(false);
        	this.Div02.btn_chg.set_visible(false);
        	this.Div02.btn_del.set_visible(false);
        	this.call_dept();

        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        /* 페이징 */
        this.fn_paging = function(vPageNum)
        {
        	var oDs = this.ds_page;
        	var oBindDs = this.ds_user;
        	var vPageSize = 20; //Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
        	var vTotalCount = 0; //전체건수. 화면조회후 리턴받아 사용

        	oBindDs.clearData(); //Grid에 Binding된 Dataset명
        	lsNowPage = vPageNum; //현재페이지 설정

         	this.ds_page.clearData();
        	this.ds_page.addRow();
        	this.ds_page.setColumn(0, "CURRENT_PAGE", vPageNum); //현재 페이지
         	this.ds_page.setColumn(0, "PAGE_SIZE", vPageSize);
         	this.ds_page.setColumn(0, "TOTAL_ROW_COUNT", vTotalCount);

        	this.Div02.Tab00.tabpage1.div_page01.fn_pageSet(vTotalCount, vPageSize, "grid_user,div_page01", lsNowPage);
        	this.fn_retrieveUser(rowposition);
        }

        /*콜백 함수*/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	this.gfn_svcDsToggle(svcID, true);
        	if (ErrorCode < 0) {
        		if (svcID == "SyncUserAmn" || svcID == "SyncPicture") {
        			this.alert(ErrorMsg);
        		} else {
        			this.gfn_getMessage("alert", "error.message.server.exception");
        		}
        		return;
        	} else {
        		if (svcID == "retrieveEmpeAmnList") {
        			if (pop_dept!="") {
        				this.gfn_selectTreePos(this.Div02.Grid00, "DEPT_ID", pop_dept);
        				pop_dept="";
        			}
        		} else if (svcID == "deleteEmpeAmn") {
        			rowposition = 0;
        			pop_dept="";
        			this.call_dept();
        			this.Div02.Grid00.set_treeinitstatus("collapse,null");
        			this.Div02.Tab00.tabpage2.edit_dept_id.set_value("");
        			this.Div02.Tab00.tabpage2.edit_dept_high.set_value("");
        			this.Div02.Tab00.tabpage2.edit_dept_name.set_value("");
        			this.Div02.Tab00.tabpage2.edit_dept_sort.set_value("");
        			this.Div02.Tab00.tabpage2.edit_nabzplc.set_value("");
        			this.ds_user.clearData();
        			alert("정상적으로 삭제되었습니다.");
        		} else if (svcID == "retrieveUserAmnList") {
        			if (this.ds_user.rowcount==0) {
        				//alert("조회 내용이 없습니다.");
        				this.Div02.Tab00.tabpage1.div_page01.fn_pageSet(0, 0, "grd_list,div_page01", lsNowPage);
        			} else {
        				var sTotal = this.ds_page.getColumn(0, "TOTAL_ROW_COUNT");
        				var sPagesize = this.ds_page.getColumn(0, "PAGE_SIZE");
        				this.Div02.Tab00.tabpage1.div_page01.fn_pageSet(sTotal, sPagesize, "grid_user,div_page01", lsNowPage);

        				this.ds_user.addColumn("check", "INT");
        				for (var i = 0; i<this.ds_user.rowcount; i++) {
        					this.ds_user.setColumn(i,"check",0);
        					if (this.ds_user.getColumn(i,"AUTH_TYPE_CD") == "1") {
        						this.ds_user.setColumn(i,"AUTH_TYPE_CD","일반");
        					} else if (this.ds_user.getColumn(i,"AUTH_TYPE_CD") == "2") {
        						this.ds_user.setColumn(i,"AUTH_TYPE_CD","팀");
        					} else if (this.ds_user.getColumn(i,"AUTH_TYPE_CD") == "3") {
        						this.ds_user.setColumn(i,"AUTH_TYPE_CD","부");
        					} else if (this.ds_user.getColumn(i,"AUTH_TYPE_CD") == "4") {
        						this.ds_user.setColumn(i,"AUTH_TYPE_CD","본부");
        					}
        				}
        			}
        		} else if (svcID == "SyncUserAmn" || svcID == "SyncPicture") {
        			if (ErrorCode==1) {
        				alert("동기화 성공하였습니다.");
        			} else if (ErrorCode==0) {
        				alert("동기화 실패하였습니다.");
        			}
        		} else if (svcID == "deleteUserAmn") {
        			this.call_user(rowposition);
        			alert("정상적으로 삭제되었습니다.");
        		} else if (svcID == "redefineDeptSort") {
        			alert("부서 정렬순서를 재정의 하였습니다.");
        			this.call_dept();
        		}
        	}
        }

        /*팝업 콜백 함수*/
        this.fn_popupAfter = function(strId,strVal)
        {
        	if (strVal!=null) {
        		if (strId == "dept_add") {
        			pop_dept = strVal;
        			this.call_dept();
        			this.Div02.Tab00.tabpage2.edit_dept_id.set_value("");
        			this.Div02.Tab00.tabpage2.edit_dept_high.set_value("");
        			this.Div02.Tab00.tabpage2.edit_dept_name.set_value("");
        			this.Div02.Tab00.tabpage2.edit_dept_sort.set_value("");
        			this.Div02.Tab00.tabpage2.edit_nabzplc.set_value("");
        		} else if (strId == "user_add") {
        			this.call_user(rowposition);
        		}
        	}
        }

        /*조직도 불러오기*/
        this.call_dept = function()
        {
        	var sParams = "";
        	var sSvcID        = "retrieveEmpeAmnList";
        	var sURL          = "svc::rest/mg/retrieveEmpeAmnList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_dep=ds_dep";
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        
        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
        this.Div02_Tab00_onchanged = function(obj,e)
        {
        	if (e.postindex==0) {
        		this.Div02.btn_insa_add.set_visible(true);
        		this.Div02.btn_insa_chg.set_visible(true);
        		this.Div02.btn_insa_del.set_visible(true);
        		this.Div02.btn_add.set_visible(false);
        		this.Div02.btn_chg.set_visible(false);
        		this.Div02.btn_del.set_visible(false);
        	} else if (e.postindex==1) {
        		this.Div02.btn_insa_add.set_visible(false);
        		this.Div02.btn_insa_chg.set_visible(false);
        		this.Div02.btn_insa_del.set_visible(false);
        		this.Div02.btn_add.set_visible(true);
        		this.Div02.btn_chg.set_visible(true);
        		this.Div02.btn_del.set_visible(true);
        	}
        }

        /* 부서 등록*/
        this.Div02_btn_add_onclick = function(obj,e)
        {
        	if (this.ds_dep.getColumn(rowposition, "DEPT_LEVEL") != "3") {
        		var oArg = {paramMode:"I", depthighid:this.Div02.Tab00.tabpage2.edit_dept_id.value
        					, deptlevel:this.ds_dep.getColumn(rowposition, "DEPT_LEVEL")};
        		var sOption = "autosize=true";
        		var sPopupCallBack = "fn_popupAfter";
        		this.gfn_openPopup("dept_add", "OMG.MG::OMG_DS_SC_6711.xfdl", oArg, sOption, sPopupCallBack);
        	} else if (this.ds_dep.getColumn(rowposition, "DEPT_LEVEL") == "3") {
        		alert("최하위 레벨입니다.");
        	}
        }

        /* 사용자 등록*/
        this.Div02_btn_insa_add_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"I", deptid:this.ds_dep.getColumn(rowposition,"DEPT_ID")
        				, deptname:this.ds_dep.getColumn(rowposition,"DEPT_NAME")};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("user_add","OMG.MG::OMG_DS_SC_6712.xfdl",oArg,sOption,sPopupCallBack);
        }

        /*
         * 조회버튼
         */
        this.Div02_btn_search_onclick = function(obj,e)
        {
            this.call_user(rowposition);
        }

        /* 조회*/
        this.Div02_Grid00_oncellclick = function(obj,e)
        {
        	this.Div02.Tab00.tabpage2.edit_dept_id.set_value(this.ds_dep.getColumn(e.row,"DEPT_ID"));
        	this.Div02.Tab00.tabpage2.edit_dept_high.set_value(this.ds_dep.getColumn(e.row,"DEPT_HIGH"));
        	this.Div02.Tab00.tabpage2.edit_dept_name.set_value(this.ds_dep.getColumn(e.row,"DEPT_NAME"));
        	this.Div02.Tab00.tabpage2.edit_dept_sort.set_value(this.ds_dep.getColumn(e.row,"DEPT_SORT"));
        	this.Div02.Tab00.tabpage2.edit_nabzplc.set_value(this.ds_dep.getColumn(e.row,"NA_BZPLC"));
        	rowposition = e.row;
        	this.call_user(rowposition);
        }

        /* 사용자 조회*/
        this.call_user = function(row)
        {
        	this.fn_paging(1);
        }

        this.fn_retrieveUser = function(row)
        {
        	var sParams = "dept_id="+this.gfn_nullToEmpty(this.ds_dep.getColumn(row, "DEPT_ID"))
        	                    + " srch_dsc=" + this.gfn_nullToEmpty(this.Div02.cbo_emp.value)
        	                    + " srch_txt=" + this.gfn_nullToEmpty(this.Div02.edt_emp.value)
        	                    ;

        	var sSvcID        = "retrieveUserAmnList";
        	var sURL          = "svc::rest/mg/retrieveUserAmnList";
        	var sInDatasets   = "ds_page=ds_page";
        	var sOutDatasets  = "ds_user=ds_user ds_usr_cnt=ds_usr_cnt ds_page=ds_pageVO";
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_registerSvcDS(sSvcID, this.ds_user, false);
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);

        	userposition=0;
        }

        

        /* 부서 수정*/
        this.Div02_btn_chg_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"U", deptid:this.Div02.Tab00.tabpage2.edit_dept_id.value
        				, depthighid:this.Div02.Tab00.tabpage2.edit_dept_high.value
        				, deptsort:this.Div02.Tab00.tabpage2.edit_dept_sort.value
        				, deptlevel:this.ds_dep.getColumn(rowposition, "DEPT_LEVEL")
        				, deptname:this.Div02.Tab00.tabpage2.edit_dept_name.value
        				, nabzplc:this.Div02.Tab00.tabpage2.edit_nabzplc.value};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("dept_add","OMG.MG::OMG_DS_SC_6711.xfdl",oArg,sOption,sPopupCallBack);
        }

        /* 사용자 수정*/
        this.Div02_btn_insa_chg_onclick = function(obj,e)
        {
        	this.ds_param.clearData();
        	this.ds_param.insertRow(0);
        	this.ds_param.copyRow(0, this.ds_user, userposition);
        	if (this.ds_param.getColumn(0,"AUTH_TYPE_CD") == "일반") {
        		this.ds_param.setColumn(0,"AUTH_TYPE_CD","1");
        	} else if (this.ds_param.getColumn(0,"AUTH_TYPE_CD") == "팀") {
        		this.ds_param.setColumn(0,"AUTH_TYPE_CD","2");
        	} else if (this.ds_param.getColumn(0,"AUTH_TYPE_CD") == "부") {
        		this.ds_param.setColumn(0,"AUTH_TYPE_CD","3");
        	} else if (this.ds_param.getColumn(0,"AUTH_TYPE_CD") == "본부") {
        		this.ds_param.setColumn(0,"AUTH_TYPE_CD","4");
        	}
        	var oArg = {paramMode:"U", dsArg:this.ds_param};
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("user_add","OMG.MG::OMG_DS_SC_6712.xfdl",oArg,sOption,sPopupCallBack);
        }

        /* 사용자 클릭*/
        this.ds_user_onrowposchanged = function(obj,e)
        {
        	userposition = e.newrow;
        }

        /* 부서 삭제*/
        this.Div02_btn_del_onclick = function(obj,e)
        {
        	var sParams = "deptid="+this.gfn_nullToEmpty(this.ds_dep.getColumn(rowposition,"DEPT_ID"));
        	var sSvcID        = "deleteEmpeAmn";
        	var sURL          = "svc::rest/mg/deleteEmpeAmn";
        	var sInDatasets   = "";
        	var sOutDatasets  = "";
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /* 사용자 삭제*/
        this.Div02_btn_insa_del_onclick = function(obj,e)
        {
        	var checkCnt = 0;
        	this.ds_select.clearData();
        	for (var i=0; i<this.ds_user.rowcount; i++) {
        		if (this.ds_user.getColumn(i, "check") == 1) {
        			this.ds_select.insertRow(checkCnt);
        			this.ds_select.copyRow(checkCnt++, this.ds_user, i);
        		}
        	}
        	if (checkCnt > 0) {
        		var sParams = "userid="+this.gfn_nullToEmpty(this.ds_user.getColumn(userposition,"USER_ID"));
        		var sSvcID        = "deleteUserAmn";
        		var sURL          = "svc::rest/mg/deleteUserAmn";
        		var sInDatasets   = "ds_select=ds_select";
        		var sOutDatasets  = "";
        		var sArgument     = sParams;
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	} else {
        		alert("사용자를 체크해 주세요.");
        	}
        }

        this.btn_update_onclick = function(obj,e)
        {
        	var sParams = "";
        	var sSvcID        = "SyncUserAmn";
        	var sURL          = "svc::rest/mg/SyncUserAmn";
        	var sInDatasets   = "";
        	var sOutDatasets  = "";
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.btn_sort_onclick = function(obj,e)
        {
        	if (this.confirm("부서 정렬순서를 상하관계에 맞춰 재정의 합니다.\n이 작업은 취소할 수 없습니다. 계속하시겠습니까?")) {
        		var sParams = "";
        		var sSvcID        = "redefineDeptSort";
        		var sURL          = "svc::rest/mg/nh/redefineHanaroTalkDeptSort";
        		var sInDatasets   = "";
        		var sOutDatasets  = "";
        		var sArgument     = sParams;
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        this.Div02_btn_update_pic_onclick = function(obj,e)
        {
        	var checkCnt = 0;
        	this.ds_select.clearData();
        	for (var i=0; i<this.ds_user.rowcount; i++) {
        		if (this.ds_user.getColumn(i, "check") == 1) {
        			this.ds_select.insertRow(checkCnt);
        			this.ds_select.copyRow(checkCnt++, this.ds_user, i);
        		}
        	}
        	if (checkCnt > 0) {
        		var sParams = "";
        		var sSvcID        = "SyncPicture";
        		var sURL          = "svc::rest/mg/SyncPicture";
        		var sInDatasets   = "ds_select=ds_select";
        		var sOutDatasets  = "";
        		var sArgument     = sParams;
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	} else {
        		alert("동기화할 사용자를 체크해 주세요.");
        	}
        }

        this.Div02_Tab00_tabpage1_grid_user_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		this.gfn_setGridCheckAll(obj,e);
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_user.addEventHandler("onrowposchanged", this.ds_user_onrowposchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.Div02.btn_update.addEventHandler("onclick", this.btn_update_onclick, this);
            this.Div02.Grid00.addEventHandler("oncellclick", this.Div02_Grid00_oncellclick, this);
            this.Div02.Tab00.addEventHandler("onchanged", this.Div02_Tab00_onchanged, this);
            this.Div02.Tab00.tabpage1.grid_user.addEventHandler("onheadclick", this.Div02_Tab00_tabpage1_grid_user_onheadclick, this);
            this.Div02.btn_insa_add.addEventHandler("onclick", this.Div02_btn_insa_add_onclick, this);
            this.Div02.btn_del.addEventHandler("onclick", this.Div02_btn_del_onclick, this);
            this.Div02.btn_chg.addEventHandler("onclick", this.Div02_btn_chg_onclick, this);
            this.Div02.btn_add.addEventHandler("onclick", this.Div02_btn_add_onclick, this);
            this.Div02.btn_insa_chg.addEventHandler("onclick", this.Div02_btn_insa_chg_onclick, this);
            this.Div02.btn_insa_del.addEventHandler("onclick", this.Div02_btn_insa_del_onclick, this);
            this.Div02.btn_update_pic.addEventHandler("onclick", this.Div02_btn_update_pic_onclick, this);
            this.Div02.cbo_emp.addEventHandler("onitemchanged", this.Div00_cbo_cal_onitemchanged, this);
            this.Div02.btn_search.addEventHandler("onclick", this.Div02_btn_search_onclick, this);
            this.Div02.btn_sort.addEventHandler("onclick", this.btn_sort_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_6710.xfdl");
        this.loadPreloadList();
       
    };
}
)();
