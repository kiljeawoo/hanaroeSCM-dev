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
                this.set_name("OMG_DS_SC_7240");
                this.set_titletext("미납 조회");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_npayInq", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RMS_TRPL_C\" type=\"STRING\" size=\"13\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"50\"/><Column id=\"NPAY_AM\" type=\"INT\" size=\"256\"/><Column id=\"RMS_FM\" type=\"STRING\" size=\"6\"/><Column id=\"RMS_TM\" type=\"STRING\" size=\"6\"/><Column id=\"LS_RQS_AM\" type=\"INT\" size=\"256\"/><Column id=\"RV_AM\" type=\"INT\" size=\"256\"/><Column id=\"RF_AM\" type=\"INT\" size=\"256\"/><Column id=\"STL_METH_DSC\" type=\"STRING\" size=\"1\"/><Column id=\"BNK_C\" type=\"STRING\" size=\"3\"/><Column id=\"ACNO\" type=\"STRING\" size=\"64\"/><Column id=\"SVC_ST\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_bnkC", this);
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

            obj = new Dataset("ds_methC", this);
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


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "69", "15", null, this);
            obj.set_taborder("89");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "35.75%", "10", null, "21", "54.71%", null, this.div_search);
            obj.set_taborder("31");
            obj.set_text("업체조회");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("Edit_comnum", "absolute", "44.27%", "10", null, "21", "46.82%", null, this.div_search);
            obj.set_taborder("32");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("Edit_comname", "absolute", "53.44%", "10", null, "21", "37.15%", null, this.div_search);
            obj.set_taborder("33");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_comname", "absolute", "63.1%", "10", null, "21", "34.22%", null, this.div_search);
            obj.set_taborder("34");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "67.05%", "10", null, "21", "21.63%", null, this.div_search);
            obj.set_taborder("35");
            obj.set_text("서비스상태");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_svcSt", "absolute", "77.1%", "10", null, "21", "0.89%", null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_svcSt_innerdataset = new Dataset("rdo_svcSt_innerdataset", this.div_search.rdo_svcSt);
            rdo_svcSt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">중지</Col></Row></Rows>");
            obj.set_innerdataset(rdo_svcSt_innerdataset);
            obj.set_taborder("36");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("2");
            obj.set_direction("vertical");
            obj.style.set_font("9 Gulim");
            obj.set_index("0");
            obj = new Static("Static05", "absolute", "15", "38", "72", "21", null, null, this.div_search);
            obj.set_taborder("37");
            obj.set_text("사용월");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "21.25%", "38", null, "21", "77.48%", null, this.div_search);
            obj.set_taborder("38");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("cal_fm_dt", "absolute", "8.27%", "38", null, "21", "79.01%", null, this.div_search);
            obj.set_taborder("39");
            obj.set_url("common::calendarMonth.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("cal_to_dt", "absolute", "22.52%", "38", null, "21", "64.76%", null, this.div_search);
            obj.set_taborder("40");
            obj.set_url("common::calendarMonth.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "15", "10", "89", "21", null, null, this.div_search);
            obj.set_taborder("41");
            obj.set_text("미수개월수");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_npayM", "absolute", "11.96%", "10", null, "21", "65.14%", null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_npayM_innerdataset = new Dataset("rdo_npayM_innerdataset", this.div_search.rdo_npayM);
            rdo_npayM_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1개월</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2개월</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">전체</Col></Row></Rows>");
            obj.set_innerdataset(rdo_npayM_innerdataset);
            obj.set_taborder("42");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("2");
            obj.set_direction("vertical");
            obj.style.set_font("9 Gulim");
            obj.set_index("1");

            obj = new Div("Div02", "absolute", "0", "97", null, null, "15", "1", this);
            obj.set_taborder("81");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "0", "42", null, null, "0", "1", this.Div02);
            obj.set_taborder("2");
            obj.set_binddataset("ds_npayInq");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_summarytype("top");
            obj.set_treeusebutton("use");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseexpandkey("true");
            obj.set_treeuseimage("false");
            obj.set_treeuseline("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"업체코드\"/><Cell col=\"2\" text=\"업체명\"/><Cell col=\"3\" text=\"레벨\"/><Cell col=\"4\" text=\"미납금액\"/><Cell col=\"5\" text=\"사용시작\"/><Cell col=\"6\" text=\"사용종료\"/><Cell col=\"7\" text=\"청구금액\"/><Cell col=\"8\" text=\"입금금액\"/><Cell col=\"9\" text=\"환불금액\"/><Cell col=\"10\" text=\"납부방법\"/><Cell col=\"11\" text=\"은행\"/><Cell col=\"12\" text=\"계좌번호\"/><Cell col=\"13\" text=\"중지/재개\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: ;\" expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:RMS_TRPL_C\" tooltiptext=\"bind:RMS_TRPL_C\"/><Cell col=\"2\" text=\"bind:CLNTNM\" tooltiptext=\"bind:CLNTNM\"/><Cell col=\"3\" displaytype=\"number\" text=\"bind:LEV\" tooltiptext=\"bind:LEV\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:NPAY_AM\" tooltiptext=\"bind:NPAY_AM\"/><Cell col=\"5\" text=\"bind:RMS_FM\" mask=\"@@@@-@@\" tooltiptext=\"bind:RMS_FM\"/><Cell col=\"6\" text=\"bind:RMS_TM\" mask=\"@@@@-@@\" tooltiptext=\"bind:RMS_TM\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:LS_RQS_AM\" tooltiptext=\"bind:LS_RQS_AM\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:RV_AM\" tooltiptext=\"bind:RV_AM\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:RF_AM\" tooltiptext=\"bind:RF_AM\"/><Cell col=\"10\" displaytype=\"combo\" style=\"align: ;\" text=\"bind:STL_METH_DSC\" combodataset=\"ds_methC\" combocodecol=\"SIMP_C\" combodatacol=\"SIMP_CNM\" tooltiptext=\"bind:STL_METH_DSC\"/><Cell col=\"11\" displaytype=\"combo\" style=\"align: ;\" text=\"bind:BNK_C\" combodataset=\"ds_bnkC\" combocodecol=\"SIMP_C\" combodatacol=\"SIMP_CNM\" tooltiptext=\"bind:BNK_C\"/><Cell col=\"12\" text=\"bind:ACNO\" tooltiptext=\"bind:ACNO\"/><Cell col=\"13\" displaytype=\"expr:SVC_ST==null?'none':'button'\" edittype=\"none\" style=\"cursor:hand;controlalign:center middle;controlbackground:EXPR(SVC_ST=='0'?&quot;URL('theme://images/btn_WF_CRUD.png') stretch 7,7&quot;:'red');controlcolor:#ffffffff; :focused {controlbackground:URL('theme://images/btn_WF_CRUD_P.png') stretch 7,7;} :mouseover {controlbackground:URL('theme://images/btn_WF_CRUD_O.png') stretch 7,7;}\" text=\"expr:SVC_ST=='0'?'재개':'중지'\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button75", "absolute", "347", "0", null, "12", "363", null, this.Div02);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("btn_execl", "absolute", null, "0", "41", "21", "75", null, this);
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

            obj = new WebBrowser("web_downExcel", "absolute", "80.07%", "21", null, "14", "14.45%", null, this);
            obj.set_taborder("90");
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
            		p.set_titletext("미납 조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_search.rdo_svcSt","value","ds_dataM","DVY_VHC_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","div_search.rdo_npayM","value","ds_dataM","DVY_VHC_DSC");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::calendarMonth.xfdl");
            this._addPreloadList("fdl", "common::calendarMonth.xfdl");
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_7240.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_7240.xfdl", function(exports) {
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
        	// 페이지 로딩후 실행부분
        	this.div_search.cal_fm_dt._setValue('201601');
        	var toDay = this.gfn_today("yyyyMMdd");	
        	this.div_search.cal_to_dt._setValue(toDay.substr(0, 6));
        }

        // Form Onload: DataSet 로딩 후 실행
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통

            var param = [
        		{code:"BNK_RF"		, dsName:"ds_bnkC"		, selecttype:""},
        		{code:"STL_METH_DSC", dsName:"ds_methC"		, selecttype:""}
            ];

        	this.gfn_setPortalCommonCode(param);
        }

        this.fn_afterFormOnload = function() //onload
        {

        }

        // gfn_setCommonCode, gfn_setPortalCommonCode처리 후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        	this.div_search.rdo_npayM.set_index(2);
        	this.div_search.rdo_svcSt.set_index(2);
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        // 콜백 함수
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}
        	else
        	{
        		if(svcID == "retrieveNpayInqList")
        		{
        		//	trace("this.ds_npayInq:" + this.ds_npayInq.saveXML());
        			if(this.ds_npayInq.rowcount == 0)
        			{
        				this.Div02.Grid01.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        			}
        		}
        	 	else if(svcID == "update_svc_st")
        	 	{
        	 		if(ErrorCode == 1)
        	 		{
        	 			this.gfn_getMessage("alert", "result.message.save.success");		
        	 			this.fn_search();
        	 		}
        	 	}
        	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        // 조회조건 영역 펼치기, 접기
        this.Div02_Button75_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.Div02);
        }

        // 엑셀 다운로드
        this.btn_excel_onclick = function(obj,e)
        {
        	var npayM	= this.div_search.rdo_npayM.value;
        	var trplC	= this.gfn_nullToEmpty(this.div_search.Edit_comnum.value);
        	var clntNm	= this.gfn_nullToEmpty(this.div_search.Edit_comname.value);
        	var svcSt	= this.div_search.rdo_svcSt.value;
        	var fromDt	= this.div_search.cal_fm_dt._getValue();
        	var toDt	= this.div_search.cal_to_dt._getValue();

        	var sParams	= "NPAYM="		+ npayM
        				+ "&TRPL_C="	+ trplC
        				+ "&CLNTNM="	+ clntNm
        				+ "&SVC_ST="	+ svcSt
        				+ "&FROM_DT="	+ fromDt
        				+ "&TO_DT="		+ toDt
        				;

        	this.fn_excel(sParams);
        }

        this.fn_excel = function(sParams)
        {
        		trace("엑셀 다운로드 params >>> " + sParams);
        		this.web_downExcel.set_url(application.gv_serverAdmin_url + "rest/excel/bl/downloadExcelNpayInq?" + sParams);
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/	
        // 미납 조회
        this.btn_search_onclick = function(obj,e)
        {	
        	this.fn_search();
        }

        this.fn_search = function()
        {
        	var npayM	= this.div_search.rdo_npayM.value;
        	var trplC	= this.gfn_nullToEmpty(this.div_search.Edit_comnum.value);
        	var clntNm	= this.gfn_nullToEmpty(this.div_search.Edit_comname.value);
        	var svcSt	= this.div_search.rdo_svcSt.value;
        	var fromDt	= this.div_search.cal_fm_dt._getValue();
        	var toDt	= this.div_search.cal_to_dt._getValue();
        	
        	var sParams	= "NPAYM="		+ npayM
        				+ " TRPL_C="	+ trplC
        				+ " CLNTNM="	+ clntNm
        				+ " SVC_ST="	+ svcSt
        				+ " FROM_DT="	+ fromDt
        				+ " TO_DT="		+ toDt
        				;
        	
        	var sSvcID			= "retrieveNpayInqList";
        	var sURL			= "svc::rest/bl/retrieveNpayInqList";
        	var sInDatasets		= "";
        	var sOutDatasets	= "ds_npayInq=ds_npayInq";
        	var sArgument		= sParams;
        	var sCallbackFunc	= "fn_callBack";
        	var sTranType		= "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        // 그리드 내부 셀 클릭
        this.Grid01_oncellclick = function(obj,e)
        {	
        //	trace("msg:" + application.gds_msg.saveXML());
        //	alert("cell:" + e.cell + " col:" + e.col + " row:" + e.row);
        	var vndr_code	= this.ds_npayInq.getColumn(e.row, "RMS_TRPL_C");
        	var rms_fm		= this.ds_npayInq.getColumn(e.row, "RMS_FM");
        	var rms_tm		= this.ds_npayInq.getColumn(e.row, "RMS_TM");
        	var ls_rqs_am	= this.ds_npayInq.getColumn(e.row, "LS_RQS_AM");
        	var rv_am		= this.ds_npayInq.getColumn(e.row, "RV_AM");
        	var rf_am		= this.ds_npayInq.getColumn(e.row, "RF_AM");
        	var svc_st		= this.ds_npayInq.getColumn(e.row, "SVC_ST");

        	// 청구입금 팝업조회
        	if (e.col == 7 || e.col == 8)
         	{
        		var oArg = {RMS_TRPL_C:vndr_code, RMS_FM:rms_fm, RMS_TM:rms_tm, LS_RQS_AM:ls_rqs_am, RV_AM:rv_am, RF_AM:rf_am};
        		var sOption = "autosize=true,title=true";
        		var sPopupCallBack = "fn_popupAfter";    
        		this.gfn_openPopup("rqrvSearchPopup","OMG.BL::OMG_DS_SC_7240_P01.xfdl",oArg,sOption,sPopupCallBack);
         	}
        	// 서비스 중지/재개
         	else if (e.col == 13 && svc_st != null)
        	{
        		var conf_msg = null;
        			 if (svc_st == '0') conf_msg = "confirm.message.restart.service";
        		else if (svc_st == '1') conf_msg = "confirm.message.stop.service";
        		var strRtn = this.gfn_getMessage("confirm", conf_msg, this.ds_npayInq.getColumn(e.row, "CLNTNM"));
        		if (strRtn == false) return;

        			 if (svc_st == '0') svc_st = '1';
        		else if (svc_st == '1') svc_st = '0';
        	//	trace(vndr_code, svc_st);

        		var sParams       = "NA_TRPL_C=" + vndr_code
        					      + " SVC_STSC=" + svc_st;
        		var sSvcID        = "update_svc_st";
        		var sURL          = "svc::rest/bl/updateCompSvnAmn"
        		var sInDatasets   = "";
        		var sOutDatasets  = "";
        		var sArgument     = sParams;
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회

        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        	// 서비스 중지/재개 이력조회
        	else if (e.col == 1 || e.col == 2)
        	{
        		var oArg = {NA_TRPL_C:vndr_code};
        		var sOption = "autosize=true";
        		var sPopupCallBack = "fn_popupAfter";
        		this.gfn_openPopup("svcHistPopup","OMG.BL::OMG_DS_SC_7241.xfdl",oArg,sOption,sPopupCallBack);
        	}
        }

        this.div_search_rdo_npayM_onitemchanged = function(obj,e)
        {
        	var npayM = this.div_search.rdo_npayM.value;
        	var toDay = this.gfn_today("yyyyMMdd");	

        	     if(npayM == '1') this.div_search.cal_to_dt._setValue(this.gfn_minusMonth(toDay, 2).substr(0, 6));
        	else if(npayM == '2') this.div_search.cal_to_dt._setValue(this.gfn_minusMonth(toDay, 3).substr(0, 6));
        	else if(npayM == '3') this.div_search.cal_to_dt._setValue(toDay.substr(0, 6));
        }

        // 업체 조회
        this.div_search_btn_comname_onclick = function(obj,e)
        {
        	var oArg = "";
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("trplSearchPopup","OMG.BL::OMG_DS_SC_7230_P01.xfdl",oArg,sOption,sPopupCallBack);
        }

        // 팝업작업 후 진행함수
        this.fn_popupAfter = function(strId,strVal)
        {
        	// trace(" strId : " + strId + " strVal : " + strVal);	
        	if(strId == "trplSearchPopup"){
        		if(strVal != ''){
        			var paramsArr = strVal.split(",");
        			this.div_search.Edit_comnum.set_value(paramsArr[0]);
        			this.div_search.Edit_comname.set_value(paramsArr[1]);
        		}
        	}
        	else if(strId == "svcHistPopup"){

        	}
        	else if(strId == "rqrvSearchPopup"){

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
            this.div_search.Static05.addEventHandler("onclick", this.div_search_Static05_onclick, this);
            this.div_search.Static02.addEventHandler("onclick", this.div_search_Static05_onclick, this);
            this.div_search.rdo_npayM.addEventHandler("onitemchanged", this.div_search_rdo_npayM_onitemchanged, this);
            this.Div02.Grid01.addEventHandler("onheadclick", this.Div02_Grid01_onheadclick, this);
            this.Div02.Grid01.addEventHandler("oncellclick", this.Grid01_oncellclick, this);
            this.Div02.Button75.addEventHandler("onclick", this.Div02_Button75_onclick, this);
            this.btn_execl.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_7240.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
