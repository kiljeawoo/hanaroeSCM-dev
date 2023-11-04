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
                this.set_name("OMG_DS_SC_7300");
                this.set_titletext("자동이체 신청관리");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmsList", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"TR_CHK\" type=\"INT\" size=\"1\"/><Column id=\"TR_DT\" type=\"STRING\" size=\"8\"/><Column id=\"TR_SEQ\" type=\"INT\" size=\"6\"/><Column id=\"PRC_ST\" type=\"STRING\" size=\"1\"/><Column id=\"ERROR_CD\" type=\"STRING\" size=\"4\"/><Column id=\"CTMNO\" type=\"STRING\" size=\"20\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"20\"/><Column id=\"BANK_CD\" type=\"STRING\" size=\"3\"/><Column id=\"ACCT_NO\" type=\"STRING\" size=\"64\"/><Column id=\"TR_AMT\" type=\"BIGDECIMAL\" size=\"13\"/><Column id=\"SEND_DATETIME\" type=\"STRING\" size=\"14\"/><Column id=\"RECV_DATETIME\" type=\"STRING\" size=\"14\"/></ColumnInfo>");
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

            obj = new Dataset("ds_stat", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\" prop=\"\"/><Column id=\"DATA\" type=\"STRING\" size=\"32\" prop=\"\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">A</Col><Col id=\"DATA\">전체</Col></Row><Row><Col id=\"CODE\">C</Col><Col id=\"DATA\">생성</Col></Row><Row><Col id=\"CODE\">R</Col><Col id=\"DATA\">접수</Col></Row><Row><Col id=\"CODE\">T</Col><Col id=\"DATA\">처리중</Col></Row><Row><Col id=\"CODE\">S</Col><Col id=\"DATA\">전송</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"DATA\">정상</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"DATA\">오류</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_errC", this);
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
            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "17", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelListDown", "absolute", null, "0", "41", "21", "86", null, this);
            obj.set_taborder("37");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
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

            obj = new Div("Div02", "absolute", "0", "102", null, null, "15", "-1", this);
            obj.set_taborder("81");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_cmsList", "absolute", "0", "17", null, null, "0", "8", this.Div02);
            obj.set_taborder("2");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_summarytype("top");
            obj.set_binddataset("ds_cmsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"선택\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"이체일자\"/><Cell col=\"3\" text=\"일련번호\"/><Cell col=\"4\" text=\"업체코드\"/><Cell col=\"5\" text=\"업체명\"/><Cell col=\"6\" text=\"은행\"/><Cell col=\"7\" text=\"계좌번호\"/><Cell col=\"8\" text=\"이체금액\"/><Cell col=\"9\" text=\"상태\"/><Cell col=\"10\" text=\"오류\"/><Cell col=\"11\" text=\"오류상세\"/><Cell col=\"12\" text=\"전송일\"/><Cell col=\"13\" text=\"수신일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"expr:(PRC_ST=='R')?'checkbox':'none'\" style=\"align: ;\" text=\"bind:TR_CHK\" tooltiptext=\"bind:TR_CHK\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: ;\" expr=\"currow+1\"/><Cell col=\"2\" displaytype=\"text\" text=\"bind:TR_DT\" mask=\"@@@@-@@-@@\" tooltiptext=\"bind:TR_DT\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" text=\"bind:TR_SEQ\" tooltiptext=\"bind:TR_SEQ\"/><Cell col=\"4\" edittype=\"none\" editfilter=\"none\" text=\"bind:CTMNO\" tooltiptext=\"bind:CTMNO\"/><Cell col=\"5\" style=\"align:left middle;\" text=\"bind:CLNTNM\" tooltiptext=\"bind:CLNTNM\"/><Cell col=\"6\" displaytype=\"combo\" edittype=\"expr:(PRC_ST=='R')?'combo':'none'\" editfilter=\"none\" style=\"align: ;\" text=\"bind:BANK_CD\" combodataset=\"ds_bnkC\" combocodecol=\"SIMP_C\" combodatacol=\"SIMP_CNM\" tooltiptext=\"bind:BANK_CD\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"expr:(PRC_ST=='R')?'normal':'none'\" text=\"bind:ACCT_NO\" tooltiptext=\"bind:ACCT_NO\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"expr:(PRC_ST=='R')?'normal':'none'\" editfilter=\"integer\" style=\"align:right;\" text=\"bind:TR_AMT\" tooltiptext=\"bind:TR_AMT\"/><Cell col=\"9\" displaytype=\"combo\" edittype=\"none\" text=\"bind:PRC_ST\" combodataset=\"ds_stat\" combocodecol=\"CODE\" combodatacol=\"DATA\" tooltiptext=\"bind:PRC_ST\"/><Cell col=\"10\" displaytype=\"combo\" edittype=\"none\" text=\"bind:ERROR_CD\" combodataset=\"ds_errC\" combocodecol=\"SIMP_C\" combodatacol=\"SIMP_CNM\" tooltiptext=\"bind:ERROR_CD\"/><Cell col=\"11\" displaytype=\"combo\" edittype=\"none\" text=\"bind:ERROR_CD\" combodataset=\"ds_errC\" combocodecol=\"SIMP_C\" combodatacol=\"SIMP_C_EXPL\" tooltiptext=\"bind:ERROR_CD\"/><Cell col=\"12\" displaytype=\"text\" edittype=\"none\" text=\"bind:SEND_DATETIME\" mask=\"expr:(SEND_DATETIME==null)?'':'@@@@-@@-@@ @@:@@:@@'\" tooltiptext=\"bind:SEND_DATETIME\"/><Cell col=\"13\" displaytype=\"text\" edittype=\"none\" text=\"bind:RECV_DATETIME\" mask=\"expr:(RECV_DATETIME==null)?'':'@@@@-@@-@@ @@:@@:@@'\" tooltiptext=\"bind:RECV_DATETIME\"/></Band><Band id=\"summary\"><Cell celltype=\"none\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center middle;\" text=\"0\"/><Cell col=\"1\" style=\"align:center middle;\"/><Cell col=\"2\" style=\"align:center middle;\"/><Cell col=\"3\" style=\"align:center middle;\"/><Cell col=\"4\" expr=\"dataset.getCountNF()\" tooltiptext=\"expr:dataset.getCountNF()\"/><Cell col=\"5\"/><Cell col=\"6\" displaytype=\"normal\"/><Cell col=\"7\"/><Cell col=\"8\" displaytype=\"number\" expr=\"dataset.getSum(&quot;TR_AMT&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;TR_AMT&quot;)\"/><Cell col=\"9\" displaytype=\"normal\"/><Cell col=\"10\" displaytype=\"normal\"/><Cell col=\"11\" displaytype=\"normal\"/><Cell col=\"12\" displaytype=\"normal\"/><Cell col=\"13\" displaytype=\"normal\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button75", "absolute", "347", "0", null, "12", "363", null, this.Div02);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WFSA_SearchClose");
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

            obj = new Button("btn_action", "absolute", null, "0", "41", "21", "190", null, this);
            obj.set_taborder("107");
            obj.set_text("신청");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "75", "15", null, this);
            obj.set_taborder("108");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "44.91%", "10", null, "21", "45.55%", null, this.div_search);
            obj.set_taborder("27");
            obj.set_text("업체조회");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("Edit_comnum", "absolute", "53.44%", "10", null, "21", "37.66%", null, this.div_search);
            obj.set_taborder("28");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("Edit_comname", "absolute", "62.6%", "10", null, "21", "27.99%", null, this.div_search);
            obj.set_taborder("29");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_comname", "absolute", "72.26%", "10", null, "21", "25.06%", null, this.div_search);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "0.89%", "10", null, "21", "90.59%", null, this.div_search);
            obj.set_taborder("31");
            obj.set_text("조회월");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("cal_month", "absolute", "9.41%", "10", null, "21", "77.86%", null, this.div_search);
            obj.set_taborder("32");
            obj.set_url("common::calendarMonth.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_rnd", "absolute", "32.44%", "10", null, "21", "55.22%", null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_rnd_innerdataset = new Dataset("rdo_rnd_innerdataset", this.div_search.rdo_rnd);
            rdo_rnd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2</Col></Row></Rows>");
            obj.set_innerdataset(rdo_rnd_innerdataset);
            obj.set_taborder("33");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.style.set_font("9 Gulim");
            obj.set_index("0");
            obj = new Static("Static04", "absolute", "23.92%", "10", null, "21", "68.58%", null, this.div_search);
            obj.set_taborder("34");
            obj.set_text("회 차");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cb_stat", "absolute", "85.88%", "10", null, "21", "2.42%", null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("35");
            obj.set_innerdataset("@ds_stat");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.style.set_align("left middle");
            obj.set_value("A");
            obj.set_text("전체");
            obj.set_index("0");
            obj = new Static("Static01", "absolute", "77.86%", "10", null, "21", "14.63%", null, this.div_search);
            obj.set_taborder("36");
            obj.set_text("상 태");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("st_count", "absolute", "44.91%", "42", null, "21", "2.42%", null, this.div_search);
            obj.set_taborder("37");
            obj.set_text("건수 :");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_result", "absolute", null, "0", "41", "21", "138", null, this);
            obj.set_taborder("109");
            obj.set_text("결과");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web_downExcel", "absolute", "35.87%", "7", null, "14", "58.66%", null, this);
            obj.set_taborder("110");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
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
            obj = new Layout("default", "", 0, 75, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("108");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("자동이체 신청관리");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_search.rdo_rnd","value","ds_dataM","DVY_VHC_DSC");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
            this._addPreloadList("fdl", "common::calendarMonth.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_7300.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_7300.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        var toDay = "";

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        /* Form Init: 페이지 호출 후 실행 */
        this.form_init = function(obj,e)
        {
        	toDay = this.gfn_today("yyyyMMdd");	
        	this.div_search.cal_month._setValue(this.gfn_firstDate(toDay).substr(0, 6));
        	this.div_search.st_count.set_visible(false);
        }

        /* Form Onload: DataSet 로딩 후 실행 */
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
            var param = [ 
        		{code:"BNK_C"				, dsName:"ds_bnkC"		, selecttype:"A"},
        		{code:"KIBNET_CMS_ERROR_CD"	, dsName:"ds_errC"		, selecttype:""}
            ];

        	this.gfn_setPortalCommonCode(param); 
        }

        this.fn_afterFormOnload = function() //onload
        {

        }

        // gfn_setCommonCode, gfn_setPortalCommonCode처리 후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        //	trace(this.ds_errC.saveXML());
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        /* 콜백 함수 */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        //	trace(this.ds_cmsList.saveXML());
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}
        	else
        	{
        		if(svcID == "retrieveCmsReqList")
        		{
        			if(this.ds_cmsList.rowcount == 0)
        			{
        				this.Div02.grd_stop.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        			}
        			this.fn_getTotalCount();
        		}
        		else if(svcID == "actionCmsTransfer")
        		{
        			alert("자동이체 신청을 완료하였습니다.");
        			this.btn_search_onclick();
        		}
        	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        /* 조회조건 영역 펼치기, 접기 */
        this.Div02_Button75_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.Div02);
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_verify = function()
        {
        //	당월신청여부 검사
        	if (toDay.substr(0, 6) != this.div_search.cal_month._getValue().substr(0, 6))
        	{
        		alert("조회월이 당월인 내역에 대해서만 신청가능합니다.");
        		return false;
        	}

        	if(this.ds_cmsList.rowcount == 0 || this.ds_cmsList.findRow("TR_CHK", 1) == -1)
        	{
        		alert("자동이체 신청할 내역이 없습니다.");
        		return false;
        	}

        	if(this.gfn_nullToEmpty(this.div_search.Edit_comnum.value) != '' || this.gfn_nullToEmpty(this.div_search.Edit_comname.value) != '')
        	{
        		alert("특정업체에 대해서만 자동이체를 신청할 수 없습니다. 일괄신청만 가능합니다.");
        		return false;
        	}

        //	기신청여부 검사
        	var nRow = this.ds_cmsList.findRowExpr("PRC_ST != 'C'");
        //	trace("nRow:" + nRow);
        	if (nRow != -1)
        	{
        		alert(toDay.substr(0, 4) + "년 " + toDay.substr(4, 2) + "월 " + this.div_search.rdo_rnd.value + " 차 자동이체는 이미 신청되었습니다.");
        		return false;
        	}
        	
        	return true;
        }

        this.btn_action_onclick = function(obj,e)
        {
        	if(!this.fn_verify())
        	{
        		return;
        	}

        	var sParams			=  "ROUND="		+ this.div_search.rdo_rnd.value
        						+ " USER_ID="	+ application.gv_userId
        						;
        	trace("sParams:" + sParams);
        	this.fn_action(sParams);
        }

        this.fn_action = function(sParams)
        {
        	var sSvcID			= "actionCmsTransfer";
        	var sURL			= "svc::rest/bl/actionCmsTransfer";
        	var sInDatasets		= "ds_cmsList=ds_cmsList";
        	var sOutDatasets	= "";
        	var sArgument		= sParams;
        	var sCallbackFunc	= "fn_callBack";
        	var sTranType		= "U"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.btn_result_onclick = function(obj,e)
        {
        	var sParams			= "CAL_MON="	+ this.div_search.cal_month._getValue().substr(0, 6)
        						+ "&ROUND="		+ this.div_search.rdo_rnd.value
        						;
        //	trace("sParams:" + sParams);
        	this.fn_result(sParams);
        }

        this.fn_result = function(sParams)
        {
        //	trace("엑셀 다운로드 params >>> " + sParams);
        	this.web_downExcel.set_url(application.gv_serverAdmin_url + "rest/excel/bl/downloadExcelCmsResultList?" + sParams);
        }

        this.btn_excelListDown_onclick = function(obj,e)
        {
        	var sParams			= "CAL_MON="	+ this.div_search.cal_month._getValue().substr(0, 6)
        						+ "&ROUND="		+ this.div_search.rdo_rnd.value
        						+ "&TRPL_C="	+ this.gfn_nullToEmpty(this.div_search.Edit_comnum.value)
        						+ "&CLNTNM="	+ this.gfn_nullToEmpty(this.div_search.Edit_comname.value)
        						+ "&STAT="		+ this.div_search.cb_stat.value
        						;
        //	trace("sParams:" + sParams);
        	this.fn_excel(sParams);
        }

        this.fn_excel = function(sParams)
        {
        //	trace("엑셀 다운로드 params >>> " + sParams);
        	this.web_downExcel.set_url(application.gv_serverAdmin_url + "rest/excel/bl/downloadExcelCmsReqList?" + sParams);
        }

        this.btn_search_onclick = function(obj,e)
        {
        	var sParams			= "CAL_MON="	+ this.div_search.cal_month._getValue().substr(0, 6)
        						+ " ROUND="		+ this.div_search.rdo_rnd.value
        						+ " TRPL_C="	+ this.gfn_nullToEmpty(this.div_search.Edit_comnum.value)
        						+ " CLNTNM="	+ this.gfn_nullToEmpty(this.div_search.Edit_comname.value)
        						+ " STAT="		+ this.div_search.cb_stat.value
        						;
        //	trace("sParams:" + sParams);
        	this.fn_search(sParams);
        }

        this.fn_search = function(sParams)
        {
        	var sSvcID			= "retrieveCmsReqList";
        	var sURL			= "svc::rest/bl/retrieveCmsReqList";
        	var sInDatasets		= "";
        	var sOutDatasets	= "ds_cmsList=ds_cmsList";
        	var sArgument		= sParams;
        	var sCallbackFunc	= "fn_callBack";
        	var sTranType		= "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        // 업체 조회
        this.div_search_btn_comname_onclick = function(obj,e)
        {
        	var oArg			= "";
        	var sOption			= "autosize=true,title=true";
        	var sPopupCallBack	= "fn_popupAfter";
        	this.gfn_openPopup("trplSearchPopup", "OMG.BL::OMG_DS_SC_7230_P01.xfdl", oArg, sOption, sPopupCallBack);
        }

        // 팝업작업 후 진행함수
        this.fn_popupAfter = function(strId,strVal)
        {
        //	trace(" strId : " + strId + " strVal : " + strVal);
        	if(strVal != '')
        	{
        		var paramsArr = strVal.split(",");
        		if(strId == "trplSearchPopup")
        		{
        			this.div_search.Edit_comnum.set_value(paramsArr[0]);
        			this.div_search.Edit_comname.set_value(paramsArr[1]);
        		}
        	}
        }

        this.grd_cms_onsummclick = function(obj,e)
        {
        	if (e.col == 0)
        	{
        		if(this.Div02.grd_cmsList.getCellProperty("Summ", 0, "text") == "0")
        		{
        			this.Div02.grd_cmsList.setCellProperty("Summ", 0, "text", "1");
        			for(var i = 0, length = this.ds_cmsList.getRowCount(); i < length; i++)
        			{
        				this.ds_cmsList.setColumn(i, "TR_CHK", "1");
        			}
        		}
        		else if(this.Div02.grd_cmsList.getCellProperty("Summ", 0, "text") == "1")
        		{
        			this.Div02.grd_cmsList.setCellProperty("Summ", 0, "text", "0");
        			for(var i = 0, length = this.ds_cmsList.getRowCount(); i < length; i++)
        			{
        				this.ds_cmsList.setColumn(i, "TR_CHK", "0");
        			}
        		}
        	}
        }

        this.fn_getTotalCount = function()
        {
        	this.div_search.st_count.set_visible(true);
        	var txt_msg = "";
        	txt_msg += "   전체:" + this.ds_cmsList.rowcount;
        	txt_msg += "\t 생성:" + this.ds_cmsList.getCaseCount("PRC_ST == 'C'");
        	txt_msg += "\t 접수:" + this.ds_cmsList.getCaseCount("PRC_ST == 'R'");
        	txt_msg += "\t 전송:" + this.ds_cmsList.getCaseCount("PRC_ST == 'S'");
        	txt_msg += "\t 정상:" + this.ds_cmsList.getCaseCount("PRC_ST == 'Y'");
        	txt_msg += "\t 오류:" + this.ds_cmsList.getCaseCount("PRC_ST == 'N'");
        	this.div_search.st_count.set_text(txt_msg);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("oninit", this.form_init, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_excelListDown.addEventHandler("onclick", this.btn_excelListDown_onclick, this);
            this.Div02.grd_cmsList.addEventHandler("onsummclick", this.grd_cms_onsummclick, this);
            this.Div02.Button75.addEventHandler("onclick", this.Div02_Button75_onclick, this);
            this.btn_action.addEventHandler("onclick", this.btn_action_onclick, this);
            this.div_search.btn_comname.addEventHandler("onclick", this.div_search_btn_comname_onclick, this);
            this.div_search.rdo_rnd.addEventHandler("onitemchanged", this.fn_categ_onitemchanged, this);
            this.div_search.rdo_rnd.addEventHandler("onitemclick", this.div_search_rdo_categ_onitemclick, this);
            this.div_search.Static04.addEventHandler("onclick", this.div_search_Static05_onclick, this);
            this.div_search.Static01.addEventHandler("onclick", this.div_search_Static05_onclick, this);
            this.btn_result.addEventHandler("onclick", this.btn_result_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_7300.xfdl");
        this.loadPreloadList();
       
    };
}
)();
