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
                this.set_name("PDA_CN_010001");
                this.set_titletext("검수실적 조회");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_kpiMst", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DVY_PLA_YM\" type=\"STRING\" size=\"6\"/><Column id=\"BIZ_NUMBER\" type=\"STRING\" size=\"32\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"200\"/><Column id=\"PD_KPI_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"PD_KPI_GROUP_C\" type=\"STRING\" size=\"2\"/><Column id=\"DVY_CNT\" type=\"INT\"/><Column id=\"BY_CNT\" type=\"INT\"/><Column id=\"BY_PERCENT\" type=\"FLOAT\"/><Column id=\"RATING\" type=\"INT\"/><Column id=\"CLOSE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"SORT_NUM\" type=\"INT\" size=\"3\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_closeYn", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\" prop=\"\"/><Column id=\"DATA\" type=\"STRING\" size=\"32\" prop=\"\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"DATA\">미마감</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"DATA\">마감</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_kpiFlag", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\" prop=\"\"/><Column id=\"DATA\" type=\"STRING\" size=\"32\" prop=\"\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"DATA\">직영점</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"DATA\">계열사</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"DATA\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_groupNm", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"32\" prop=\"\"/><Column id=\"SIMP_C_EXPL\" type=\"STRING\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_kpiMstChg", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DVY_PLA_YM\" type=\"STRING\" size=\"6\"/><Column id=\"BIZ_NUMBER\" type=\"STRING\" size=\"32\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"200\"/><Column id=\"PD_KPI_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"PD_KPI_GROUP_C\" type=\"STRING\" size=\"2\"/><Column id=\"DVY_CNT\" type=\"INT\"/><Column id=\"BY_CNT\" type=\"INT\"/><Column id=\"BY_PERCENT\" type=\"FLOAT\"/><Column id=\"RATING\" type=\"INT\"/><Column id=\"SORT_NUM\" type=\"INT\" size=\"3\"/><Column id=\"CLOSE_YN\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "43", "15", null, this);
            obj.set_taborder("89");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "29.13%", "10", null, "21", "62%", null, this.div_search);
            obj.set_taborder("35");
            obj.set_text("직영계열");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_flag", "absolute", "38.42%", "10", null, "21", "40.08%", null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("36");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.style.set_font("9 Gulim");
            obj.set_innerdataset("@ds_kpiFlag");
            obj.set_index("0");
            obj = new Static("Static01", "absolute", "15", "10", "96", "21", null, null, this.div_search);
            obj.set_taborder("37");
            obj.set_text("배송예정월");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("cal_by_dt", "absolute", "13.49%", "10", null, "21", "73.79%", null, this.div_search);
            obj.set_taborder("38");
            obj.set_url("common::calendarMonth.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "63.23%", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("39");
            obj.set_text("구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cb_grpCd", "absolute", "70.74%", "10", null, "21", "18.07%", null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cb_grpCd_innerdataset = new Dataset("cb_grpCd_innerdataset", this.div_search.cb_grpCd);
            cb_grpCd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">가공생필</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">농산</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">축산</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">수산</Col></Row></Rows>");
            obj.set_innerdataset(cb_grpCd_innerdataset);
            obj.set_taborder("40");
            obj.set_value("1");
            obj.set_text("가공생필");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_align("left middle");
            obj.set_index("0");

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
            obj.set_binddataset("ds_kpiMst");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_summarytype("top");
            obj.set_treeusebutton("use");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseexpandkey("true");
            obj.set_treeuseimage("false");
            obj.set_treeuseline("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\" autosizerow=\"default\" autosizecol=\"limitmin\"/><Cell col=\"1\" text=\"배송예정월\"/><Cell col=\"2\" text=\"레벨\"/><Cell col=\"3\" text=\"그룹명\"/><Cell col=\"4\" text=\"구분\"/><Cell col=\"5\" text=\"사업장명\"/><Cell col=\"6\" text=\"배송예정서\"/><Cell col=\"7\" text=\"검수/매입\"/><Cell col=\"8\" text=\"확정률\"/><Cell col=\"9\" text=\"배점\"/><Cell col=\"10\" text=\"마감\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"text\" text=\"bind:SORT_NUM\" tooltiptext=\"bind:SORT_NUM\"/><Cell col=\"1\" text=\"bind:DVY_PLA_YM\" mask=\"@@@@-@@\" tooltiptext=\"bind:DVY_PLA_YM\"/><Cell col=\"2\" displaytype=\"number\" text=\"bind:LEV\" tooltiptext=\"bind:LEV\"/><Cell col=\"3\" displaytype=\"combo\" text=\"bind:PD_KPI_GROUP_C\" combodataset=\"ds_groupNm\" combocodecol=\"SIMP_C\" combodatacol=\"SIMP_CNM\" tooltiptext=\"bind:PD_KPI_GROUP_C\"/><Cell col=\"4\" displaytype=\"combo\" text=\"bind:PD_KPI_FLAG\" combodataset=\"ds_kpiFlag\" combocodecol=\"CODE\" combodatacol=\"DATA\" tooltiptext=\"bind:PD_KPI_FLAG\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:CLNTNM\" tooltiptext=\"bind:CLNTNM\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DVY_CNT\" tooltiptext=\"bind:DVY_CNT\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BY_CNT\" tooltiptext=\"bind:BY_CNT\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BY_PERCENT\" tooltiptext=\"bind:BY_PERCENT\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"expr:(CLOSE_YN=='0')?'normal':'none'\" style=\"align:right;\" text=\"bind:RATING\" tooltiptext=\"bind:RATING\"/><Cell col=\"10\" displaytype=\"combo\" text=\"bind:CLOSE_YN\" combodataset=\"ds_closeYn\" combocodecol=\"CODE\" combodatacol=\"DATA\" tooltiptext=\"bind:CLOSE_YN\"/></Band></Format></Formats>");
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

            obj = new Button("btn_save", "absolute", null, "0", "41", "21", "128", null, this);
            obj.set_taborder("90");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "0", "41", "21", "176", null, this);
            obj.set_taborder("91");
            obj.set_text("마감");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sort", "absolute", null, "0", "41", "21", "224", null, this);
            obj.set_taborder("92");
            obj.set_text("정렬");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
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
            		p.set_titletext("검수실적 조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item2","div_search.rdo_flag","value","ds_dataM","DVY_VHC_DSC");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::calendarMonth.xfdl");
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PDA_CN_010001.xfdl", "lib::comLib.xjs");
        this.registerScript("PDA_CN_010001.xfdl", function(exports) {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        var byDt = "";
        var authFlag = '0';

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        // Form Init: 페이지 호출 후 실행
        this.form_init = function(obj,e)
        {
        	// 페이지 로딩후 실행부분
        	var toDay = this.gfn_today("yyyyMMdd");	
        	this.div_search.cal_by_dt._setValue(this.gfn_firstDate(toDay).substr(0, 6));
        }

        // Form Onload: DataSet 로딩 후 실행
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통

        	//	로그인한 ID의 마감, 저장버튼 활성화 권한을 확인한다	
        	this.fn_getAuth();

            var param = [
        		{code:"PDA_KPI_GROUP"	, dsName:"ds_groupNm"		, selecttype:""}
            ];
            this.gfn_setPortalCommonCode(param); 
        }

        this.fn_afterFormOnload = function() //onload
        {

        }

        // gfn_setCommonCode, gfn_setPortalCommonCode처리 후 호출할 함수
        this.fn_commonAfterOnload= function()
        {

        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        // 콜백 함수
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        	var byDt = (this.div_search.cal_by_dt._getValue() + "").substr(0, 6);

        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        	}
        	else
        	{
        		if(svcID == "retrieveSmtPdaKpiMstList")
        		{
        		//	trace("ds_kpiMst:" + this.ds_kpiMst.saveXML());
        			if(this.ds_kpiMst.rowcount == 0)
        			{
        				this.Div02.Grd01.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        			}
        		}
        		else if(svcID == "getAuthSmtPdaKpiGroupChg")
        		{
        		//	trace("getAuthSmtPdaKpiGroupChg ErrorCode:" + ErrorCode);
        			if(ErrorCode == 1)
        			{
        				authFlag = '1';
        				this.btn_close.set_visible(true);
        				this.btn_save.set_visible(true);
        				this.btn_sort.set_visible(true);
        			}
        		}
        		else if(svcID == "closeSmtPdaKpiMst")
        		{
        			alert(byDt.substr(0, 4) + "년 " + byDt.substr(4, 2) + "월" + " 검수실적 마감을 완료하였습니다.");
        		}
        		
        		else if(svcID == "updateSmtPdaKpiMst")
        		{
        			alert(this.ds_kpiMstChg.getRowCount() + " 건을 저장했습니다.");
        		}
        		
        		else if(svcID == "sortSmtPdaKpiMst")
        		{
        			alert("순번이 저장 되었습니다.");
        			this.fn_search();
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

        this.btn_save_onclick = function(obj,e)
        {
        	this.ds_kpiMstChg.clearData();
        	for(var i = 0, length = this.ds_kpiMst.getRowCount(); i < length; i++)
        	{
        	//	if(this.ds_kpiMst.getRowType(i) == "2" || this.ds_kpiMst.getRowType(i) == "4")	// INSERT OR UPDATE
        	//	{
        			var nRow	= this.ds_kpiMstChg.addRow();
        			var bSucc	= this.ds_kpiMstChg.copyRow(nRow, this.ds_kpiMst, i);
        			this.ds_kpiMstChg.setColumn(nRow, "ROW_TYPE", this.ds_kpiMst.getRowType(i));
        	//	}
        	}

        	if(this.ds_kpiMstChg.getRowCount() > 0)
        	{
        		var ret = application.confirm(this.ds_kpiMstChg.getRowCount() + "건에 대해 저장하시겠습니까?", "저장확인", "QUESTION");
        		if (ret == false)
        		{
        			return;
        		}
        	}
        	else if(this.ds_kpiMstChg.getRowCount() == 0)
        	{
        		alert("저장할 내역이 없습니다");
        		return;
        	}

        	trace("ds_kpiMstChg:" + this.ds_kpiMstChg.saveXML());
        	var params	      = "";
        	var sSvcID        = "updateSmtPdaKpiMst"; 					// 통신아이디
        	var sURL          = "svc::rest/pda/updateSmtPdaKpiMst";		// 호출할 서버 페이지 주소
        	var sInDatasets   = "in_ds=ds_kpiMstChg:A";					// 보내는데이터셋
        	var sOutDatasets  = "";
        	var sArgument     = ""										// 파라미터
        	var sCallbackFunc = "fn_callBack";							// 콜백
        	var tranType 	  = "U";									// U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        // 엑셀 다운로드
        this.btn_excel_onclick = function(obj,e)
        {
        	var byDt = (this.div_search.cal_by_dt._getValue() + "").substr(0, 6);
        	var flag_cd	= this.div_search.rdo_flag.value;
        	var grp_dsc	= this.gfn_nullToEmpty(this.div_search.cb_grpCd.value);
        	if(flag_cd == '3')	flag_cd = "";

        	var param	=  "BY_DT=" 	+ byDt
        				+ "&FLAG_CD="	+ flag_cd
        				+ "&GRP_DSC="	+ grp_dsc
        				;

        	this.fn_excel(param);
        }

        this.fn_excel = function(param)
        {
        	trace("엑셀 다운로드 params >>> " + param);
        	excelDownHandler(application.gv_server_url + "rest/excel/pda/downloadExcelSmtPdaKpiMstList?" + param, this);
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/	
        // 검수실적 그룹관리 목록조회
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_search();
        }

        this.fn_search = function()
        {
        	var byDt = (this.div_search.cal_by_dt._getValue() + "").substr(0, 6);
        	var flag_cd	= this.div_search.rdo_flag.value;
        	var grp_dsc	= this.gfn_nullToEmpty(this.div_search.cb_grpCd.value);
        	if(flag_cd == '3')	flag_cd = "";

        	var param	=  "BY_DT="		+ byDt
        				+ " FLAG_CD="	+ flag_cd
        				+ " GRP_DSC="	+ grp_dsc
        				;

        	var sSvcID			= "retrieveSmtPdaKpiMstList";
        	var sURL			= "svc::rest/pda/retrieveSmtPdaKpiMstList";
        	var sInDatasets		= "";						// 보내는데이터셋
        	var sOutDatasets	= "ds_kpiMst=ds_kpiMst";	// 화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument		= param;
        	var sCallbackFunc	= "fn_callBack";
        	var sTranType		= "S";						// U:저장/삭제, S:조회

        //	trace("param:" + param);
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
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

        this.btn_close_onclick = function(obj,e)
        {
        	var byDt = (this.div_search.cal_by_dt._getValue() + "").substr(0, 6);
        	
        	if(this.ds_kpiMst.findRow("CLOSE_YN", '1') != -1)
        	{
        		alert(byDt.substr(0, 4) + "년 " + byDt.substr(4, 2) + "월" + " 검수실적은 이미 마감되었습니다.");
        		return;
        	}

        	var ret = application.confirm(byDt.substr(0, 4) + "년 " + byDt.substr(4, 2) + "월" + " 검수실적에 대해 마감하시겠습니까? 마감 진행 후에는 취소하실 수 없습니다!", "마감확인", "QUESTION");
        	if (ret == false)
        	{
        		return;
        	}

        	var param			= "BY_DT=" + byDt
        						+ " USER_ID=" + application.gv_userId
        						;
        	var sSvcID			= "closeSmtPdaKpiMst";
        	var sURL			= "svc::rest/pda/closeSmtPdaKpiMst";
        	var sInDatasets		= "in_ds=ds_kpiMst:A";
        	var sOutDatasets	= "";
        	var sArgument		= param;
        	var sCallbackFunc	= "fn_callBack";
        	var sTranType		= "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.btn_sort_onclick = function(obj,e)
        {
        	var param			= "";
        	var sSvcID			= "sortSmtPdaKpiMst";
        	var sURL			= "svc::rest/pda/sortSmtPdaKpiMst";
        	var sInDatasets		= "in_ds=ds_kpiMst:A";
        	var sOutDatasets	= "";
        	var sArgument		= "";
        	var sCallbackFunc	= "fn_callBack";
        	var sTranType		= "U"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	
        }
        this.rdo_flag_onitemchanged = function(obj,e)
        {
        	if(authFlag == '1')
        	{
        		if(this.div_search.rdo_flag.value == '3')
        		{
        			this.btn_close.set_visible(false);
        			this.btn_save.set_visible(false);
        			this.btn_sort.set_visible(false);
        		}
        		else
        		{
        			this.btn_close.set_visible(true);
        			this.btn_save.set_visible(true);
        			this.btn_sort.set_visible(true);
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("oninit", this.form_init, this);
            this.div_search.rdo_flag.addEventHandler("onitemchanged", this.rdo_flag_onitemchanged, this);
            this.Div02.Button75.addEventHandler("onclick", this.Div_Button75_onclick, this);
            this.btn_execl.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_sort.addEventHandler("onclick", this.btn_sort_onclick, this);

        };

        this.loadIncludeScript("PDA_CN_010001.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
