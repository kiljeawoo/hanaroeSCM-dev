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
                this.set_name("PDA_CN_012001");
                this.set_titletext("스마트PDA오류조회");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_byngErr", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CLNTNM\" type=\"STRING\" size=\"200\"/><Column id=\"TEAMNM\" type=\"STRING\" size=\"20\"/><Column id=\"ODR_DT\" type=\"STRING\" size=\"8\"/><Column id=\"TR_BASS_NO\" type=\"STRING\" size=\"17\"/><Column id=\"BUYPL_NA_TRPL_C\" type=\"STRING\" size=\"100\"/><Column id=\"CNR_STS_DSC\" type=\"STRING\" size=\"10\"/><Column id=\"RSP_C_CNTN\" type=\"STRING\" size=\"1000\"/></ColumnInfo>");
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

            obj = new Dataset("ds_type", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\" prop=\"\"/><Column id=\"DATA\" type=\"STRING\" size=\"32\" prop=\"\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"DATA\">전체</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"DATA\">매입</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"DATA\">검수</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "43", "15", null, this);
            obj.set_taborder("89");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "2.16%", "10", null, "21", "86.9%", null, this.div_search);
            obj.set_taborder("31");
            obj.set_text("사업장조회");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("Edit_comnum", "absolute", "12.72%", "10", null, "21", "78.37%", null, this.div_search);
            obj.set_taborder("32");
            obj.set_displaynulltext("사업장코드");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("Edit_comname", "absolute", "21.88%", "10", null, "21", "68.7%", null, this.div_search);
            obj.set_taborder("33");
            obj.set_enable("true");
            obj.set_displaynulltext("사업장명");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_comname", "absolute", "31.55%", "10", null, "21", "65.78%", null, this.div_search);
            obj.set_taborder("34");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "34.48%", "10", "84", "21", null, null, this.div_search);
            obj.set_taborder("37");
            obj.set_text("검수일");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_from", "absolute", "43.38%", "10", null, "21", "44.27%", null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("38");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("cal_to", "absolute", "57.25%", "10", null, "21", "30.28%", null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("39");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Radio("rdo_type", "absolute", "78.12%", "10", null, "21", "0.38%", null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("40");
            obj.set_innerdataset("@ds_type");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.set_value("0");
            obj.set_direction("vertical");
            obj.style.set_font("9 Gulim");
            obj.set_index("0");
            obj = new Static("Static03", "absolute", "69.85%", "10", null, "21", "19.08%", null, this.div_search);
            obj.set_taborder("41");
            obj.set_text("구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "0", "71", null, null, "15", "1", this);
            obj.set_taborder("81");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Button("Button75", "absolute", "347", "0", null, "12", "363", null, this.Div02);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.Div02.addChild(obj.name, obj);
            obj = new Grid("Grd01", "absolute", "0", "42", null, null, "0", "66", this.Div02);
            obj.set_taborder("2");
            obj.set_binddataset("ds_byngErr");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_summarytype("top");
            obj.set_treeusebutton("use");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseexpandkey("true");
            obj.set_treeuseimage("false");
            obj.set_treeuseline("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"160\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"400\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"사업장명\"/><Cell col=\"2\" text=\"레벨\"/><Cell col=\"3\" text=\"팀명\"/><Cell col=\"4\" text=\"배송예정일\"/><Cell col=\"5\" text=\"전표번호\"/><Cell col=\"6\" text=\"공급처코드\"/><Cell col=\"7\" text=\"구분\"/><Cell col=\"8\" text=\"오류메시지\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" text=\"bind:RN\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:CLNTNM\" tooltiptext=\"bind:CLNTNM\"/><Cell col=\"2\" displaytype=\"number\" text=\"bind:LEV\" tooltiptext=\"bind:LEV\"/><Cell col=\"3\" text=\"bind:TEAMNM\" tooltiptext=\"bind:TEAMNM\"/><Cell col=\"4\" text=\"bind:ODR_DT\" tooltiptext=\"bind:ODR_DT\"/><Cell col=\"5\" text=\"bind:TR_BASS_NO\" tooltiptext=\"bind:TR_BASS_NO\"/><Cell col=\"6\" text=\"bind:BUYPL_NA_TRPL_C\" tooltiptext=\"bind:BUYPL_NA_TRPL_C\"/><Cell col=\"7\" displaytype=\"normal\" text=\"bind:CNR_STS_DSC\" tooltiptext=\"bind:CNR_STS_DSC\"/><Cell col=\"8\" displaytype=\"normal\" text=\"bind:RSP_C_CNTN\" tooltiptext=\"bind:RSP_C_CNTN\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);
            obj = new Div("div_paging", "absolute", "226", null, "338", "29", null, "40", this.Div02);
            obj.set_taborder("4");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.Div02.addChild(obj.name, obj);

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


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_search,
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
            		p.set_titletext("스마트PDA오류조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item2","div_search.rdo_type","value","ds_dataM","DVY_VHC_DSC");
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
        this.addIncludeScript("PDA_CN_012001.xfdl", "lib::comLib.xjs");
        this.registerScript("PDA_CN_012001.xfdl", function(exports) {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        // Form Init: 페이지 호출 후 실행
        this.form_init = function(obj,e)
        {
        	var toDay = this.gfn_today("yyyyMMdd");
        	this.div_search.cal_from.set_value(this.gfn_firstDate(toDay));
        	this.div_search.cal_to.set_value(toDay);
        }
         
        // Form Onload: DataSet 로딩 후 실행
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통

        	//	사업장 권한이면 검색조건의 사업장조회를 고정한다
        	if(application.gv_userType == '03')
        	{
        		//	읽기전용 입력창 배경색
        		var	rdonly_bgcolor = "#999999ff";
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
        	this.ds_byngErr.clearData(); // Grid에 Binding된 Dataset명
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
        		this.gfn_getMessage("alert", "error.message.server.exception");
        	}
        	else
        	{
        		if(svcID == "retrieveSmtPdaByngErrList")
        		{
        		//	trace("ds_byngErr:" + this.ds_byngErr.saveXML());
        			if (this.ds_byngErr.rowcount > 0)
        			{
        				this.Div02.div_paging.fn_pageSet(sTotal, page_size, "div_paging", current_page);
        			}
        			else if(this.ds_byngErr.rowcount == 0)
        			{
        				this.Div02.Grd01.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        				this.Div02.div_paging.fn_pageSet(0, 0, "div_paging", current_page);
        			}
        		}
        	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        // 조회조건 영역 펼치기, 접기
        this.Div_Button75_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.Div02);
        }

        // 엑셀 다운로드
        this.btn_excel_onclick = function(obj,e)
        {
        	var bzplC	= this.gfn_nullToEmpty(this.div_search.Edit_comnum.value);
        	var clntNm	= this.gfn_nullToEmpty(this.div_search.Edit_comname.value);
        	var fromDt	= this.div_search.cal_from.value;
        	var toDt	= this.div_search.cal_to.value;
        	var type_cd	= this.div_search.rdo_type.value;
        	if(type_cd == '0')	type_cd = "";

        	var param	= "BZPL_C=" 	+ bzplC
        				+ "&CLNTNM="	+ clntNm
        				+ "&FROM_DT="	+ fromDt
        				+ "&TO_DT="		+ toDt
        				+ "&TYPE_CD="	+ type_cd
        				;

        	this.fn_excel(param);
        }

        this.fn_excel = function(param)
        {
        //	trace("엑셀 다운로드 params >>> " + param);
        	excelDownHandler(application.gv_server_url + "rest/excel/pda/downloadExcelSmtPdaByngErrList?" + param, this);
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/	
        // 검수실적 그룹관리 목록조회
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_paging(1);
        }

        this.fn_search = function()
        {
        	var bzplC	= this.gfn_nullToEmpty(this.div_search.Edit_comnum.value);
        	var clntNm	= this.gfn_nullToEmpty(this.div_search.Edit_comname.value);
        	var fromDt	= this.div_search.cal_from.value;
        	var toDt	= this.div_search.cal_to.value;
        	var type_cd	= this.div_search.rdo_type.value;
        	if(type_cd == '0')	type_cd = "";

        	var param	=  "BZPL_C="	+ bzplC
        				+ " CLNTNM="	+ clntNm
        				+ " FROM_DT="	+ fromDt
        				+ " TO_DT="		+ toDt
        				+ " TYPE_CD="	+ type_cd
        				;

        	var sSvcID			= "retrieveSmtPdaByngErrList";
        	var sURL			= "svc::rest/pda/retrieveSmtPdaByngErrList";
        	var sInDatasets		= "ds_pageVO=ds_pageVO";						// 보내는데이터셋
        	var sOutDatasets	= "ds_byngErr=ds_byngErr ds_pageVO=ds_pageVO";	// 화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument		= param;
        	var sCallbackFunc	= "fn_callBack";
        	var sTranType		= "S";							// U:저장/삭제, S:조회

        //	trace("param:" + param);
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
            this.div_search.Static02.addEventHandler("onclick", this.div_search_Static05_onclick, this);
            this.div_search.cal_from.addEventHandler("oneditclick", this.div_search_cal_from_oneditclick, this);
            this.Div02.Button75.addEventHandler("onclick", this.Div_Button75_onclick, this);
            this.btn_execl.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);

        };

        this.loadIncludeScript("PDA_CN_012001.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
