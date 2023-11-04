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
                this.set_name("OMG_DS_SC_7250");
                this.set_titletext("과납 조회");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_opayInq", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RV_TRPL_C\" type=\"STRING\" size=\"13\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"50\"/><Column id=\"RV_DT\" type=\"STRING\" size=\"10\"/><Column id=\"RV_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"RV_AM\" type=\"INT\" size=\"256\"/><Column id=\"RQS_BAC\" type=\"INT\" size=\"256\"/><Column id=\"OVR_PAY_AM\" type=\"INT\" size=\"256\"/><Column id=\"OVR_PAY_C\" type=\"STRING\" size=\"256\"/><Column id=\"OVR_PAY_N\" type=\"INT\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_opayInq_1row", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RV_TRPL_C\" type=\"STRING\" size=\"13\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"50\"/><Column id=\"RV_DT\" type=\"STRING\" size=\"10\"/><Column id=\"RV_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"RV_AM\" type=\"INT\" size=\"256\"/><Column id=\"RQS_BAC\" type=\"INT\" size=\"256\"/><Column id=\"OVR_PAY_AM\" type=\"INT\" size=\"256\"/><Column id=\"OVR_PAY_C\" type=\"STRING\" size=\"256\"/><Column id=\"OVR_PAY_N\" type=\"INT\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mipDsc", this);
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

            obj = new Div("div_search", "absolute", "0", "29", null, "43", "15", null, this);
            obj.set_taborder("103");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "35.75%", "10", null, "21", "54.71%", null, this.div_search);
            obj.set_taborder("16");
            obj.set_text("업체조회");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("Edit_comnum", "absolute", "44.27%", "10", null, "21", "46.82%", null, this.div_search);
            obj.set_taborder("17");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("Edit_comname", "absolute", "53.44%", "10", null, "21", "37.15%", null, this.div_search);
            obj.set_taborder("18");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_comname", "absolute", "63.1%", "10", null, "21", "34.22%", null, this.div_search);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "67.05%", "10", null, "21", "21.63%", null, this.div_search);
            obj.set_taborder("23");
            obj.set_text("처리상태");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_rslt", "absolute", "77.1%", "10", null, "21", "0%", null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_rslt_innerdataset = new Dataset("rdo_rslt_innerdataset", this.div_search.rdo_rslt);
            rdo_rslt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">미처리</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">처리</Col></Row></Rows>");
            obj.set_innerdataset(rdo_rslt_innerdataset);
            obj.set_taborder("24");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("2");
            obj.set_direction("vertical");
            obj.style.set_font("9 Gulim");
            obj.set_index("1");
            obj = new Static("Static05", "absolute", "1.91%", "10", null, "21", "89.06%", null, this.div_search);
            obj.set_taborder("25");
            obj.set_text("입금일");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_from", "absolute", "8.78%", "10", null, "21", "78.88%", null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("26");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static08", "absolute", "21.37%", "10", null, "21", "77.35%", null, this.div_search);
            obj.set_taborder("27");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_to", "absolute", "22.65%", "10", null, "21", "64.89%", null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("28");
            obj.set_dateformat("yyyy-MM-dd");

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

            obj = new Div("Div02", "absolute", "0", "71", null, null, "15", "-1", this);
            obj.set_taborder("81");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Button("Button75", "absolute", "363", "0", null, "12", "362", null, this.Div02);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.Div02.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "0", "42", null, null, "0", "1", this.Div02);
            obj.set_taborder("2");
            obj.set_binddataset("ds_opayInq");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_summarytype("top");
            obj.set_treeusebutton("use");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseexpandkey("true");
            obj.set_treeuseimage("false");
            obj.set_treeuseline("true");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"업체코드\"/><Cell col=\"2\" text=\"업체명\"/><Cell col=\"3\" text=\"레벨\"/><Cell col=\"4\" text=\"입금일\"/><Cell col=\"5\" text=\"입금액\"/><Cell col=\"6\" text=\"청구잔액\"/><Cell col=\"7\" text=\"과납금\"/><Cell col=\"8\" text=\"업무선택\"/><Cell col=\"9\" text=\"적용\"/><Cell col=\"10\" text=\"적용일\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" style=\"align: ;\" expr=\"currow+1\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:RV_TRPL_C\" tooltiptext=\"bind:RV_TRPL_C\"/><Cell col=\"2\" displaytype=\"text\" text=\"bind:CLNTNM\" tooltiptext=\"bind:CLNTNM\"/><Cell col=\"3\" displaytype=\"number\" text=\"bind:LEV\" tooltiptext=\"bind:LEV\"/><Cell col=\"4\" displaytype=\"date\" text=\"bind:RV_DT\" mask=\"@@@@-@@-@@\" tooltiptext=\"bind:RV_DT\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:RV_AM\" tooltiptext=\"bind:RV_AM\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:RQS_BAC\" tooltiptext=\"bind:RQS_BAC\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:OVR_PAY_AM\" tooltiptext=\"bind:OVR_PAY_AM\"/><Cell col=\"8\" displaytype=\"combo\" edittype=\"expr:OVR_PAY_N==0?'combo':'none'\" style=\"align: ;\" text=\"bind:OVR_PAY_C\" editdisplay=\"edit\" combodataset=\"ds_mipDsc\" combocodecol=\"SIMP_C\" combodatacol=\"SIMP_CNM\" combodisplay=\"expr:OVR_PAY_N==0?'display':'edit'\" tooltiptext=\"bind:OVR_PAY_C\"/><Cell col=\"9\" displaytype=\"expr:OVR_PAY_N==0?'button':'none'\" style=\"align: ;\" text=\"적용\" tooltiptext=\"적용\"/><Cell col=\"10\" displaytype=\"expr:LSCHG_DTM==null?'none':'date'\" style=\"align: ;\" text=\"bind:LSCHG_DTM\" mask=\"@@@@-@@-@@\" tooltiptext=\"bind:LSCHG_DTM\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" style=\"align:center middle;\" text=\"합계\"/><Cell col=\"2\"/><Cell col=\"3\" displaytype=\"number\" expr=\"dataset.getSum(&quot;RQS_BAC&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;RQS_BAC&quot;)\"/><Cell col=\"4\"/><Cell col=\"5\" displaytype=\"number\" expr=\"dataset.getSum(&quot;RV_AM&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;RV_AM&quot;)\"/><Cell col=\"6\" displaytype=\"number\" expr=\"dataset.getSum(&quot;RQS_BAC&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;RQS_BAC&quot;)\"/><Cell col=\"7\" displaytype=\"number\" expr=\"dataset.getSum(&quot;OVR_PAY_AM&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;OVR_PAY_AM&quot;)\"/><Cell col=\"8\" displaytype=\"number\"/><Cell col=\"9\" displaytype=\"number\"/><Cell col=\"10\" displaytype=\"number\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);

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
            obj.set_taborder("104");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("103");
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
            		p.set_titletext("과납 조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_search.rdo_rslt","value","ds_dataM","DVY_VHC_DSC");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_7250.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_7250.xfdl", function(exports) {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        this.clickDateRow = 0; // 적용 버튼 클릭 시, 작업위치를 유지하기 위한 값

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
        	this.ds_opayInq_1row.addRow();

            var param = [  
        		{code:"MIP_DSC"		, dsName:"ds_mipDsc"	, selecttype:""}
            ];

        	this.gfn_setPortalCommonCode(param); 
        }

        // gfn_setCommonCode, gfn_setPortalCommonCode처리 후 호출할 함수
        this.fn_commonAfterOnload = function()
        {
        	var bSucc = this.ds_mipDsc.deleteRow(2);
        //	trace("ds_mipDsc:" + this.ds_mipDsc.saveXML());
        }

        // gfn_setInitForm 처리 후 호출(CallBack)할 함수
        this.fn_afterFormOnload = function()
        {
           //페이지 로딩후 실행부분
           	this.btn_search_onclick();
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
        		if(svcID == "retrieveOvrPayInqList")
        		{
        		//	trace("this.ds_opayInq:" + this.ds_opayInq.saveXML());
        			if(this.ds_opayInq.rowcount == 0)
        			{
        				this.alert("데이터가 없습니다.");
        			}
        			else
        			{
        				this.Div02.Grid01.selectRow(this.clickDateRow); // 작업위치 선택
        			}
        		}
        		else if(svcID == "saveOvrPayC")
        		{
        	 		if(ErrorCode == 1)
        	 		{
        	 			this.gfn_getMessage("alert", "result.message.save.success");
        	 			this.fn_search();
        	 		}
        	 		else if(ErrorCode == 2)
        	 		{
        	 			this.gfn_getMessage("alert", "result.message.ovrpay.no.exist.rqs.brk");
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

        // 업무선택 저장
        this.btn_save_onclick = function(obj,e)
        {
        	trace("ds_opayInq_1row:" + this.ds_opayInq_1row.saveXML());
        	var params	      = "";
        	var sSvcID        = "saveOvrPayC";					// 통신아이디
        	var sURL          = "svc::rest/bl/saveOvrPayC";		// 호출할 서버 페이지 주소
        	var sInDatasets   = "in_ds=ds_opayInq_1row:A";		// 보내는데이터셋
        	var sOutDatasets  = "";
        	var sArgument     = params;							// 파라미터
        	var sCallbackFunc = "fn_callBack";					// 콜백
        	var tranType 	  = "U";							// U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        // 엑셀 다운로드
        this.btn_excel_onclick = function(obj,e)
        {
        	var fromDt			= this.div_search.cal_from.value;
        	var toDt			= this.div_search.cal_to.value;
        	var trplC			= this.gfn_nullToEmpty(this.div_search.Edit_comnum.value);
        	var clntNm			= this.gfn_nullToEmpty(this.div_search.Edit_comname.value);
        	var rslt			= this.div_search.rdo_rslt.value;
        	var sParams			= "FROM_DT=" + fromDt
        						+ "&TO_DT=" + toDt
        						+ "&TRPL_C=" + trplC
        						+ "&CLNTNM=" + clntNm
        						+ "&RSLT=" + rslt
        						;

        	this.fn_excel(sParams);
        }

        this.fn_excel = function(sParams)
        {
        		trace("엑셀 다운로드 params >>> " + sParams);
        		this.web_downExcel.set_url(application.gv_serverAdmin_url + "rest/excel/bl/downloadExcelOvrPayInq?" + sParams);
        }

        // 과납 조회
        this.btn_search_onclick = function(obj,e)
        {
        	this.clickDateRow = 0; // 작업위치 초기화
        	
        	this.fn_search();
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/	
        this.fn_search = function()
        {
        	var fromDt	= this.div_search.cal_from.value;
        	var toDt	= this.div_search.cal_to.value;
        	var trplC	= this.gfn_nullToEmpty(this.div_search.Edit_comnum.value);
        	var clntNm	= this.gfn_nullToEmpty(this.div_search.Edit_comname.value);
        	var rslt	= this.div_search.rdo_rslt.value;
        	var sParams	= "FROM_DT=" + fromDt
        				+ " TO_DT=" + toDt
        				+ " TRPL_C=" + trplC
        				+ " CLNTNM=" + clntNm
        				+ " RSLT=" + rslt;
        	
        	var sSvcID			= "retrieveOvrPayInqList";
        	var sURL			= "svc::rest/bl/retrieveOvrPayInqList";
        	var sInDatasets		= "";
        	var sOutDatasets	= "ds_opayInq=ds_opayInq";
        	var sArgument		= sParams;
        	var sCallbackFunc	= "fn_callBack";
        	var sTranType		= "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        // 그리드 내부 셀 클릭
        this.Grid01_oncellclick = function(obj,e)
        {
        	this.clickDateRow = e.row; // 작업위치 저장
        	
        //	alert("cell:" + e.cell + " col:" + e.col + " row:" + e.row);
        	var opay_null = this.ds_opayInq.getColumn(e.row, "OVR_PAY_N");
         	if (e.col == 9 && opay_null == 0)
         	{
        	//	1줄만 복사하여 서버에 넘겨준다
        		var bSucc = this.ds_opayInq_1row.copyRow(0, this.ds_opayInq, e.row);
        	//	trace("bSucc:" + bSucc);
        	//	trace("ds_opayInq_1row:" + this.ds_opayInq_1row.saveXML());
        		this.btn_save_onclick();
         	}
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
        	if(strVal != ''){
        		var paramsArr = strVal.split(",");
        	
        		if(strId == "trplSearchPopup"){
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
            this.btn_execl.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.div_search.btn_comname.addEventHandler("onclick", this.div_search_btn_comname_onclick, this);
            this.div_search.Static01.addEventHandler("onclick", this.div_search_Static05_onclick, this);
            this.div_search.Static05.addEventHandler("onclick", this.div_search_Static05_onclick, this);
            this.div_search.cal_from.addEventHandler("oneditclick", this.div_search_cal_from_oneditclick, this);
            this.Div02.Button75.addEventHandler("onclick", this.Div02_Button75_onclick, this);
            this.Div02.Grid01.addEventHandler("onheadclick", this.Div02_Grid01_onheadclick, this);
            this.Div02.Grid01.addEventHandler("oncellclick", this.Grid01_oncellclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_7250.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
