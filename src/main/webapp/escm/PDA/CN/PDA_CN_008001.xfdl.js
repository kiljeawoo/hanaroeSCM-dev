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
                this.set_name("PDA_CN_008001");
                this.set_titletext("검수실적제외 거래처관리");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_kpiExptTrpl", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"13\"/><Column id=\"STR_NM\" type=\"STRING\" size=\"50\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"13\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"50\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"ROW_TYPE\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
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

            obj = new Dataset("ds_kpiExptTrplChg", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"13\"/><Column id=\"STR_NM\" type=\"STRING\" size=\"50\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"13\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"50\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"ROW_TYPE\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_uploadresult", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"32\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"32\"/><Column id=\"FILESIZE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"32\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_excel_bind", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"String\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"String\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "69", "15", null, this);
            obj.set_taborder("89");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "34.73%", "10", null, "21", "54.33%", null, this.div_search);
            obj.set_taborder("31");
            obj.set_text("거래처조회");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("Edit_comnum", "absolute", "45.29%", "10", null, "21", "45.8%", null, this.div_search);
            obj.set_taborder("32");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("Edit_comname", "absolute", "54.45%", "10", null, "21", "36.13%", null, this.div_search);
            obj.set_taborder("33");
            obj.set_enable("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_comname", "absolute", "64.12%", "10", null, "21", "33.21%", null, this.div_search);
            obj.set_taborder("34");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "2.16%", "10", null, "21", "86.9%", null, this.div_search);
            obj.set_taborder("35");
            obj.set_text("사업장조회");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("Edit_comnum_str", "absolute", "11.7%", "10", null, "21", "79.39%", null, this.div_search);
            obj.set_taborder("36");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("Edit_comname_str", "absolute", "20.87%", "10", null, "21", "69.72%", null, this.div_search);
            obj.set_taborder("37");
            obj.set_enable("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_comname_str", "absolute", "30.53%", "10", null, "21", "66.79%", null, this.div_search);
            obj.set_taborder("38");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "68.83%", "10", null, "21", "20.1%", null, this.div_search);
            obj.set_taborder("39");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_use", "absolute", "77.1%", "10", null, "21", "1.15%", null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_use_innerdataset = new Dataset("rdo_use_innerdataset", this.div_search.rdo_use);
            rdo_use_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">중지</Col></Row></Rows>");
            obj.set_innerdataset(rdo_use_innerdataset);
            obj.set_taborder("40");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("2");
            obj.set_direction("vertical");
            obj.style.set_font("9 Gulim");
            obj.set_index("0");
            obj = new Edit("edt_data00", "absolute", "11.7%", "42", null, "21", "67%", null, this.div_search);
            obj.set_taborder("41");
            this.div_search.addChild(obj.name, obj);
            obj = new FileUpload("FileUpload00", "absolute", "32.95%", "42", "72", "21", null, null, this.div_search);
            obj.set_taborder("42");
            obj.set_multiselect("true");
            obj.getSetter("timeout").set("0");
            obj.getSetter("retry").set("0");
            obj.getSetter("async").set("true");
            obj.getSetter("onload").set("FileUpload00_onload");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "2.16%", "42", null, "21", "86.9%", null, this.div_search);
            obj.set_taborder("43");
            obj.set_text("파일명");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "61.58%", "42", null, "21", "30%", null, this.div_search);
            obj.set_taborder("44");
            obj.set_text("처리결과");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new TextArea("txa_excel00", "absolute", "70%", "42", null, "21", "2%", null, this.div_search);
            obj.set_taborder("45");
            obj.set_value("엑셀다운로드 후 사용하시기 바랍니다.");
            obj.set_readonly("true");
            obj.style.set_align("left middle");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_upload", "absolute", "43%", "42", "72", "21", null, null, this.div_search);
            obj.set_taborder("46");
            obj.set_text("업로드");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_sample", "absolute", "53.05%", "42", "72", "21", null, null, this.div_search);
            obj.set_taborder("47");
            obj.set_text("양식");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "0", "97", null, null, "15", "1", this);
            obj.set_taborder("81");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Button("Button75", "absolute", "347", "0", null, "12", "363", null, this.Div02);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.Div02.addChild(obj.name, obj);
            obj = new Grid("Grd01", "absolute", "0", "42", null, null, "0", "66", this.Div02);
            obj.set_taborder("2");
            obj.set_binddataset("ds_kpiExptTrpl");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_summarytype("top");
            obj.set_treeusebutton("use");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseexpandkey("true");
            obj.set_treeuseimage("false");
            obj.set_treeuseline("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"사업장코드\"/><Cell col=\"2\" text=\"사업장명\"/><Cell col=\"3\" text=\"거래처코드\"/><Cell col=\"4\" text=\"거래처명\"/><Cell col=\"5\" text=\"레벨\"/><Cell col=\"6\" text=\"사용/중지\"/><Cell col=\"7\" text=\"그룹구분\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" text=\"bind:RN\"/><Cell col=\"1\" edittype=\"expr:(dataset.getRowType(currow)==2||NA_BZPLC==null)?'normal':'none'\" text=\"bind:NA_BZPLC\" tooltiptext=\"bind:NA_BZPLC\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:STR_NM\" tooltiptext=\"bind:STR_NM\"/><Cell col=\"3\" edittype=\"expr:(dataset.getRowType(currow)==2||NA_TRPL_C==null)?'normal':'none'\" text=\"bind:NA_TRPL_C\" tooltiptext=\"bind:NA_TRPL_C\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:CLNTNM\" tooltiptext=\"bind:CLNTNM\"/><Cell col=\"5\" displaytype=\"number\" text=\"bind:LEV\" tooltiptext=\"bind:LEV\"/><Cell col=\"6\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:USE_YN\" tooltiptext=\"bind:USE_YN\"/><Cell col=\"7\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:GRP_DSC\" combodataset=\"ds_kpiFlag\" combocodecol=\"CODE\" combodatacol=\"DATA\" tooltiptext=\"bind:PD_KPI_FLAG\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);
            obj = new Div("div_paging", "absolute", "226", null, "338", "29", null, "40", this.Div02);
            obj.set_taborder("4");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("btn_execl", "absolute", null, "0", "41", "21", "80", null, this);
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

            obj = new Button("btn_save", "absolute", null, "0", "41", "21", "128", null, this);
            obj.set_taborder("91");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert", "absolute", null, "0", "41", "21", "176", null, this);
            obj.set_taborder("92");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear", "absolute", null, "0", "41", "21", "224", null, this);
            obj.set_taborder("93");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
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
            obj = new Layout("default", "", 788, 420, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("81");
            		p.set_text("Div02");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("검수실적제외 거래처관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item2","div_search.rdo_use","value","ds_dataM","DVY_VHC_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","div_search.edt_data00","value","ds_uploadresult","ORGFNAME");
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
        this.addIncludeScript("PDA_CN_008001.xfdl", "lib::comLib.xjs");
        this.registerScript("PDA_CN_008001.xfdl", function() {
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

        //	시스템관리자가 아니면 권한확인을 한다
        	if(application.gv_userTPC != "admin")
        	{
        	//	로그인한 ID가 추가, 저장버튼 활성화 권한을 확인한다	
        		this.fn_getAuth();
        	//	사업장 권한이면 검색조건의 사업장조회를 고정한다
        		if(application.gv_userType == '03')
        		{
        			//	읽기전용 입력창 배경색
        			var	rdonly_bgcolor = "#999999ff";
        			//	조회조건 사업장코드 고정 & 비활성화
        			this.div_search.Edit_comnum_str.set_value(application.gv_glnCode);
        			this.div_search.Edit_comnum_str.set_readonly(true);
        			this.div_search.Edit_comnum_str.style.set_background(rdonly_bgcolor);
        			//	조회조건 사업장명 고정 & 비활성화
        			this.div_search.Edit_comname_str.set_value(application.gv_companyName);
        			this.div_search.Edit_comname_str.set_readonly(true);
        			this.div_search.Edit_comname_str.style.set_background(rdonly_bgcolor);
        			//	사업장조회 버튼 비활성화
        			this.div_search.btn_comname_str.set_enable(false);
        		}
        	}
        }

        this.fn_afterFormOnload = function() //onload
        {
        	var fileParam = {
        		form:this,		
        		param:[{//필요없는 프로퍼티는 주석처리
        				fileObj: this.div_search.FileUpload00,
        				maxSize:10,											//허용할 파일 사이즈(MB)
        				maxLength:1,										//허용할 파일갯수
        				ext:['xls','xlsx'],									//허용할 확장자명
        				cancel_after:function(obj){							//파일선택후, 취소버튼 눌렀을때 실행할 함수명 또는 함수
        					this.form.div_search.txa_excel00.set_value(""); //this대신 this.form으로 접근		
        				},
        				valid_after_fail: 'FileUpload00_onerror',  			//파일검사 실패후 호출할 함수명 또는 함수
        				upload_after_succ: 'FileUpload00_onsuccess',    	//파일 업로드 성공후 호출할 함수명 또는 함수
        				upload_after_fail: 'FileUpload00_onerror'  	    	//파일 업로드 실패후 호출할 함수명 또는 함수
        			}]
        	};
        	this.gfn_addEventFileUpload(fileParam);
        	this.Div02.Grd01.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        }

        //UPLOAD
        this.FileUpload00_onitemchanged = function(obj,e)
        {
        	this.gfn_callUpload(obj);
        }

        this.FileUpload00_onsuccess = function(obj,e)
        {
        	if( e.datasets == null )
        	{
        		trace("업로드 실패");
        		this.div_search.txa_excel00.set_value("업로드 실패");
        	} else {
        		trace("업로드 성공");
        		this.div_search.txa_excel00.set_value("업로드 성공");
        		
        		this.ds_uploadresult.clear();
        		this.ds_uploadresult.copyData(e.datasets[0]);		
        	//	this.ds_uploadresult.addColumn("CHK", "string"); //멀티건 인경우 'CHK'컬럼추가
        	}	
        }

        this.FileUpload00_onerror = function(obj,e)
        {
        	trace("FileUpload00_onerror");
        	trace("e.errorcode: " + e.errorcode);
        	trace("e.errormsg: " + e.errormsg);
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        /* Paging 처리 */
        this.fn_paging = function(vPageNum)
        {
        	this.ds_pageVO.clearData();
        	this.ds_kpiExptTrpl.clearData(); // Grid에 Binding된 Dataset명

        	this.ds_pageVO.addRow();

        	var vPageSize = 20; // Grid에 보여줄 Row수 선택
        	var vTotalCount = 0; // 전체건수. 화면조회후 리턴받아 사용 (구동시 갱신)
        	
        	this.ds_pageVO.setColumn(0, "CURRENT_PAGE", vPageNum); // 현재 페이지
        	this.ds_pageVO.setColumn(0, "PAGE_SIZE", vPageSize);
        	this.ds_pageVO.setColumn(0, "TOTAL_ROW_COUNT", vTotalCount);

        	var argumentObj = "";

        	this.fn_search();
        }

        // 콜백 함수
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	var current_page = this.ds_pageVO.getColumn(0, "CURRENT_PAGE");
        	var page_size    = this.ds_pageVO.getColumn(0, "PAGE_SIZE");
        	var sTotal       = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");

        	if(ErrorCode < 0)
        	{
        		if(svcID == "uploadExcelSmtPdaKpiExptTrpl")
        		{
        			this.alert(ErrorMsg);
        		}
        		else this.gfn_getMessage("alert", "error.message.server.exception");
        	}
        	else
        	{
        		if(svcID == "retrieveSmtPdaKpiExptTrplList")
        		{
        		//	trace("ds_kpiGroup:" + this.ds_kpiGroup.saveXML());

        			if (this.ds_kpiExptTrpl.rowcount > 0)
        			{
        				this.Div02.div_paging.fn_pageSet(sTotal, page_size, "div_paging", current_page);
        			}
        			else if(this.ds_kpiExptTrpl.rowcount == 0)
        			{
        				this.Div02.Grd01.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        				this.Div02.div_paging.fn_pageSet(0, 0, "div_paging", current_page);
        			}
        		}
        		else if(svcID == "updateSmtPdaKpiExptTrpl")
        		{
        			if(ErrorCode == 0)
        			{
        				this.alert("변경내역을 반영 하였습니다.");
        				// 변경내역 저장 데이터셋 초기화
        				this.ds_kpiExptTrplChg.clearData();
        				this.fn_search();
        			}
        			else if(ErrorCode == 1)
        			{
        				this.alert(ErrorMsg + " 코드는 이미 등록되어 있습니다.");
        			}
        			else if(ErrorCode == 2)
        			{
        				this.alert(ErrorMsg + " 코드는 존재하지 않는 사업장코드 입니다.");
        			}

        		}
        		else if(svcID == "getAuthSmtPdaKpiGroupChg")
        		{
        		//	trace("getAuthSmtPdaKpiGroupChg ErrorCode:" + ErrorCode);
        			if(ErrorCode == 1)
        			{
        				this.btn_insert.set_visible(true);
        				this.btn_save.set_visible(true);
        				this.btn_clear.set_visible(true);
        				this.div_search.btn_upload.set_visible(true);
        				this.div_search.btn_sample.set_visible(true);
        			}
        		}
        		else if(svcID == "uploadExcelSmtPdaKpiExptTrpl")
        		{
        			var ret = application.confirm(this.ds_excel_bind.getRowCount() + "건에 대해 업로드하시겠습니까?", "업로드확인", "QUESTION");
        			if (ret == false)
        			{
        				return;
        			}
        			else
        			{
        				var params	      = "";
        				var sSvcID        = "updateSmtPdaKpiExptTrpl"; 					// 통신아이디
        				var sURL          = "svc::rest/pda/uploadExcelSaveSmtPdaKpiExptTrpl";	// 호출할 서버 페이지 주소
        				var sInDatasets   = "in_ds=ds_excel_bind";						// 보내는데이터셋
        				var sOutDatasets  = "";
        				var sArgument     = ""											// 파라미터
        				var sCallbackFunc = "fn_callBack";								// 콜백
        				var tranType 	  = "U";										// U:저장/삭제, S:조회

        				//API 호출
        				this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        			}
        		}
        	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        // 조회조건 영역 펼치기, 접기
        this.Div_Md_Button75_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.Div02);
        }

        this.btn_insert_onclick = function(obj,e)
        {
        	var rownum = this.ds_kpiExptTrpl.addRow();
        	// 초기값 설정
        	this.ds_kpiExptTrpl.setColumn(rownum, "USE_YN", '1');
        }

        this.btn_save_onclick = function(obj,e)
        {
        	this.ds_kpiExptTrplChg.clearData();
        	for(var i = 0, length = this.ds_kpiExptTrpl.getRowCount(); i < length; i++)
        	{
        		if(this.ds_kpiExptTrpl.getRowType(i) == "2" || this.ds_kpiExptTrpl.getRowType(i) == "4")	// INSERT OR UPDATE
        		{
        			var nRow	= this.ds_kpiExptTrplChg.addRow();
        			var bSucc	= this.ds_kpiExptTrplChg.copyRow(nRow, this.ds_kpiExptTrpl, i);
        			this.ds_kpiExptTrplChg.setColumn(nRow, "ROW_TYPE", this.ds_kpiExptTrpl.getRowType(i));
        		}
        	}

        	if(this.ds_kpiExptTrplChg.getRowCount() > 0)
        	{
        		var ret = application.confirm(this.ds_kpiExptTrplChg.getRowCount() + "건에 대해 변경하시겠습니까?", "변경확인", "QUESTION");
        		if (ret == false)
        		{
        			this.reload();
        		}
        	}
        	else if(this.ds_kpiExptTrplChg.getRowCount() == 0)
        	{
        		alert("저장할 변경내역이 없습니다");
        		return;
        	}

        	trace("ds_kpiExptTrplChg:" + this.ds_kpiExptTrplChg.saveXML());
        	var params	      = "";
        	var sSvcID        = "updateSmtPdaKpiExptTrpl"; 					// 통신아이디
        	var sURL          = "svc::rest/pda/updateSmtPdaKpiExptTrpl";	// 호출할 서버 페이지 주소
        	var sInDatasets   = "in_ds=ds_kpiExptTrplChg:A";				// 보내는데이터셋
        	var sOutDatasets  = "";
        	var sArgument     = ""											// 파라미터
        	var sCallbackFunc = "fn_callBack";								// 콜백
        	var tranType 	  = "U";										// U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        // 엑셀 다운로드
        this.btn_excel_onclick = function(obj,e)
        {
        	var bzplC	= this.gfn_nullToEmpty(this.div_search.Edit_comnum_str.value);
        	var strNm	= this.gfn_nullToEmpty(this.div_search.Edit_comname_str.value);
        	var trplC	= this.gfn_nullToEmpty(this.div_search.Edit_comnum.value);
        	var clntNm	= this.gfn_nullToEmpty(this.div_search.Edit_comname.value);
        	var use_cd	= this.div_search.rdo_use.value;
        	if(use_cd == '2')	use_cd = "";

        	var param	=  "BZPL_C="	+ bzplC
        				+ "&STR_NM="	+ strNm
        				+ "&TRPL_C="	+ trplC
        				+ "&CLNTNM="	+ clntNm
        				+ "&USE_CD="	+ use_cd
        				;

        	this.fn_excel(param);
        }

        this.fn_excel = function(param)
        {
        	trace("엑셀 다운로드 params >>> " + param);
        	excelDownHandler(application.gv_server_url + "rest/excel/pda/downloadExcelSmtPdaKpiExptTrplList?" + param, this);
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/	
        // 검수실적 그룹관리 목록조회
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_paging(1);
        }

        this.fn_getAuth = function()
        {
        	var param			=  "USR_ID="	+ application.gv_userId;

        	var sSvcID			= "getAuthSmtPdaKpiGroupChg";
        	var sURL			= "svc::rest/pda/getAuthSmtPdaKpiGroupChg";
        	var sInDatasets		= "";				// 보내는데이터셋
        	var sOutDatasets	= "";				// 화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument		= param;
        	var sCallbackFunc	= "fn_callBack";
        	var sTranType		= "S";				// U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_search = function()
        {
        	var bzplC	= this.gfn_nullToEmpty(this.div_search.Edit_comnum_str.value);
        	var strNm	= this.gfn_nullToEmpty(this.div_search.Edit_comname_str.value);
        	var trplC	= this.gfn_nullToEmpty(this.div_search.Edit_comnum.value);
        	var clntNm	= this.gfn_nullToEmpty(this.div_search.Edit_comname.value);
        	var use_cd	= this.div_search.rdo_use.value;
        	if(use_cd == '2')	use_cd = "";

        	var param	=  "BZPL_C="	+ bzplC
        				+ " STR_NM="	+ strNm
        				+ " TRPL_C="	+ trplC
        				+ " CLNTNM="	+ clntNm
        				+ " USE_CD="	+ use_cd
        				;

        	var sSvcID			= "retrieveSmtPdaKpiExptTrplList";
        	var sURL			= "svc::rest/pda/retrieveSmtPdaKpiExptTrplList";
        	var sInDatasets		= "ds_pageVO=ds_pageVO";								// 보내는데이터셋
        	var sOutDatasets	= "ds_kpiExptTrpl=ds_kpiExptTrpl ds_pageVO=ds_pageVO";	// 화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument		= param;
        	var sCallbackFunc	= "fn_callBack";
        	var sTranType		= "S";													// U:저장/삭제, S:조회

        	trace("param:" + param);
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

        this.div_search_btn_comname_str_onclick = function(obj,e)
        {
        	var oArg = "";
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("trplSearchPopup_str", "MOB.MD::MOB_MD_SC_1111_P01.xfdl", oArg, sOption, sPopupCallBack);
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
        	else if(strId == "trplSearchPopup_str")
        	{
        		if(strVal != '')
        		{
        			var paramsArr = strVal.split(",");
        			this.div_search.Edit_comnum_str.set_value(paramsArr[0]);
        			this.div_search.Edit_comname_str.set_value(paramsArr[1]);
        		}
        	}
        }

        // 초기화 버튼 클릭
        this.btn_clear_onclick = function(obj,e)
        {
        	this.reload();
        }

        // 업로드 버튼 클릭
        this.btn_file_onclick = function(obj,e)
        {
        	if (this.gfn_isEmpty(this.div_search.edt_data00.value) == ""){
        		this.alert("파일을 선택해 주세요");
        		return false;
        	}
        	var fileName	  = "dsName=ds_excel_bind"
        					  + " systemFileName=" + this.ds_uploadresult.getColumn(0,"SYSTEMFILENAME");
        	var sSvcID        = "uploadExcelSmtPdaKpiExptTrpl";//통신아이디	
        	var sURL          = "svc::rest/pda/uploadExcelSmtPdaKpiExptTrpl";// 호출할 서버 페이지 주소
        	var sInDatasets   = "in_ds=ds_excel_bind:A";//보내는데이터셋
        	var sOutDatasets  = "ds_excel_bind=ds_excel_bind";
        	var sArgument     = fileName;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var tranType 	  = "U"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        this.btn_sample_onclick = function(obj,e)
        {
        	var systemFileName ="expt_trpl_sample.xlsx";
        	var fileName = "expt_trpl_sample.xlsx";		//다운로드 할 파일 이름

        	var strDownUrl = application.gv_server_url + "rest/common/fileDownload?systemFileName=" + systemFileName + "&fileName=" + fileName + "&isSampleFile=Y";
        	var wbs_dw     = this.gfn_createWebBorwserComponent(this);

        	wbs_dw.set_url(strDownUrl);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("oninit", this.form_init, this);
            this.div_search.btn_comname.addEventHandler("onclick", this.div_search_btn_comname_onclick, this);
            this.div_search.btn_comname_str.addEventHandler("onclick", this.div_search_btn_comname_str_onclick, this);
            this.div_search.FileUpload00.addEventHandler("onsuccess", this.FileUpload00_onsuccess, this);
            this.div_search.FileUpload00.addEventHandler("onerror", this.FileUpload00_onerror, this);
            this.div_search.FileUpload00.addEventHandler("onitemchanged", this.FileUpload00_onitemchanged, this);
            this.div_search.btn_upload.addEventHandler("onclick", this.btn_file_onclick, this);
            this.div_search.btn_sample.addEventHandler("onclick", this.btn_sample_onclick, this);
            this.Div02.Button75.addEventHandler("onclick", this.Div_Md_Button75_onclick, this);
            this.btn_execl.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.btn_insert.addEventHandler("onclick", this.btn_insert_onclick, this);
            this.btn_clear.addEventHandler("onclick", this.btn_clear_onclick, this);

        };

        this.loadIncludeScript("PDA_CN_008001.xfdl");
        this.loadPreloadList();
       
    };
}
)();
