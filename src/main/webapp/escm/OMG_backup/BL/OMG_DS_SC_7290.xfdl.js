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
                this.set_name("OMG_DS_SC_7290");
                this.set_titletext("미납 중지");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_nPayStop", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NS_CHK\" type=\"INT\" size=\"1\"/><Column id=\"NS_FLAG\" type=\"STRING\" size=\"10\"/><Column id=\"NS_TIME\" type=\"DATETIME\" size=\"20\"/><Column id=\"NS_TRPL_C\" type=\"STRING\" size=\"13\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"50\"/><Column id=\"NS_NPAY_AMT\" type=\"INT\" size=\"256\"/><Column id=\"NS_RCV_NM\" type=\"STRING\" size=\"50\"/><Column id=\"NS_RCV_NUM\" type=\"STRING\" size=\"20\"/><Column id=\"NS_STAT\" type=\"STRING\" size=\"10\"/><Column id=\"NS_RANK\" type=\"INT\" size=\"5\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_flag", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\" prop=\"\"/><Column id=\"DATA\" type=\"STRING\" size=\"32\" prop=\"\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"DATA\">SMS전송</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"DATA\">서비스중지</Col></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\" prop=\"\"/><Column id=\"DATA\" type=\"STRING\" size=\"32\" prop=\"\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"DATA\">대기</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"DATA\">전송성공</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"DATA\">중지완료</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"DATA\">전송실패</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"DATA\">전송진행</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"DATA\">번호중복</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelListDown", "absolute", null, "0", "41", "21", "78", null, this);
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
            obj = new Grid("grd_stop", "absolute", "0", "17", null, null, "0", "8", this.Div02);
            obj.set_taborder("2");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_summarytype("top");
            obj.set_binddataset("ds_nPayStop");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"선택\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"구분\"/><Cell col=\"3\" text=\"일자\"/><Cell col=\"4\" text=\"업체코드\"/><Cell col=\"5\" text=\"업체명\"/><Cell col=\"6\" text=\"미납금액\"/><Cell col=\"7\" text=\"상태\"/><Cell col=\"8\" text=\"수신자\"/><Cell col=\"9\" text=\"수신번호\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"expr:(NS_STAT!='0')?'none':'checkbox'\" style=\"align: ;\" text=\"bind:NS_CHK\" tooltiptext=\"bind:NS_CHK\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: ;\" expr=\"currow+1\"/><Cell col=\"2\" displaytype=\"combo\" text=\"bind:NS_FLAG\" combodataset=\"ds_flag\" combocodecol=\"CODE\" combodatacol=\"DATA\" tooltiptext=\"bind:NS_FLAG\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" text=\"bind:NS_TIME\" mask=\"expr:(NS_TIME==null)?'':'@@@@-@@-@@ @@:@@:@@'\" tooltiptext=\"bind:NS_TIME\"/><Cell col=\"4\" edittype=\"none\" editfilter=\"integer\" text=\"bind:NS_TRPL_C\" tooltiptext=\"bind:NS_TRPL_C\"/><Cell col=\"5\" style=\"align:left middle;\" text=\"bind:CLNTNM\" tooltiptext=\"bind:CLNTNM\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"none\" editfilter=\"integer\" style=\"align:right;\" text=\"bind:NS_NPAY_AMT\" tooltiptext=\"bind:NS_NPAY_AMT\"/><Cell col=\"7\" displaytype=\"combo\" text=\"bind:NS_STAT\" combodataset=\"ds_stat\" combocodecol=\"CODE\" combodatacol=\"DATA\" tooltiptext=\"bind:NS_STAT\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"none\" editfilter=\"none\" text=\"bind:NS_RCV_NM\" tooltiptext=\"bind:NS_RCV_NM\"/><Cell col=\"9\" displaytype=\"normal\" edittype=\"none\" text=\"bind:NS_RCV_NUM\" tooltiptext=\"bind:NS_RCV_NUM\"/></Band><Band id=\"summary\"><Cell celltype=\"none\" displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center middle;\" text=\"0\"/><Cell col=\"1\" style=\"align:center middle;\"/><Cell col=\"2\" style=\"align:center middle;\"/><Cell col=\"3\" style=\"align:center middle;\"/><Cell col=\"4\" expr=\"dataset.getCountNF()\" tooltiptext=\"expr:dataset.getCountNF()\"/><Cell col=\"5\"/><Cell col=\"6\" displaytype=\"number\" expr=\"dataset.getSum(&quot;NS_NPAY_AMT&quot;)\" tooltiptext=\"expr:dataset.getSum(&quot;NS_NPAY_AMT&quot;)\"/><Cell col=\"7\" expr=\"expr:dataset.getCaseCount(&quot;NS_STAT!='5'&quot;)\" tooltiptext=\"expr:dataset.getCaseCount(&quot;NS_STAT!='5'&quot;)\"/><Cell col=\"8\" displaytype=\"normal\"/><Cell col=\"9\" displaytype=\"normal\"/></Band></Format></Formats>");
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

            obj = new Button("btn_action", "absolute", null, "0", "41", "21", "126", null, this);
            obj.set_taborder("107");
            obj.set_text("전송");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "75", "15", null, this);
            obj.set_taborder("108");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "24.55%", "10", null, "21", "65.9%", null, this.div_search);
            obj.set_taborder("27");
            obj.set_text("업체조회");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("Edit_comnum", "absolute", "33.08%", "10", null, "21", "58.02%", null, this.div_search);
            obj.set_taborder("28");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("Edit_comname", "absolute", "42.24%", "10", null, "21", "48.35%", null, this.div_search);
            obj.set_taborder("29");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_comname", "absolute", "51.91%", "10", null, "21", "45.42%", null, this.div_search);
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
            obj = new Static("Static06", "absolute", "75.32%", "10", null, "21", "15.01%", null, this.div_search);
            obj.set_taborder("33");
            obj.set_text("수신번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "74.17%", "47", null, "21", "22.01%", null, this.div_search);
            obj.set_taborder("34");
            obj.set_text("구분");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_categ", "absolute", "78.63%", "47", null, "21", "1.4%", null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_categ_innerdataset = new Dataset("rdo_categ_innerdataset", this.div_search.rdo_categ);
            rdo_categ_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">SMS</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">서비스중지</Col></Row></Rows>");
            obj.set_innerdataset(rdo_categ_innerdataset);
            obj.set_taborder("35");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.style.set_font("9 Gulim");
            obj.set_index("0");
            obj = new Edit("Edit_phoneNum", "absolute", "84.61%", "10", null, "21", "2.67%", null, this.div_search);
            obj.set_taborder("36");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "57.12%", "10", null, "21", "34.86%", null, this.div_search);
            obj.set_taborder("37");
            obj.set_text("수신자");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("Edit_phoneNm", "absolute", "64.76%", "10", null, "21", "26.34%", null, this.div_search);
            obj.set_taborder("38");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "66.67%", "47", null, "21", "26.84%", null, this.div_search);
            obj.set_taborder("39");
            obj.set_text("77 bytes");
            this.div_search.addChild(obj.name, obj);
            obj = new TextArea("txt_msg", "absolute", "9.41%", "47", null, "21", "33.97%", null, this.div_search);
            obj.set_taborder("40");
            obj.set_value("하나로eSCM 이용료 미납으로 서비스 이용이 중지될 예정입니다.(10월12일중지예정)");
            obj.style.set_align("left middle");
            obj.style.set_font("8 arial");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "1.02%", "47", null, "21", "89.57%", null, this.div_search);
            obj.set_taborder("41");
            obj.set_text("전송내역");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);

            obj = new WebBrowser("web_downExcel", "absolute", "35.87%", "7", null, "14", "58.66%", null, this);
            obj.set_taborder("109");
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
            		p.set_titletext("미납 중지");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_search.rdo_categ","value","ds_dataM","DVY_VHC_DSC");
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
        this.addIncludeScript("OMG_DS_SC_7290.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_7290.xfdl", function() {
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
        }

        /* Form Onload: DataSet 로딩 후 실행 */
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        	this.div_search.txt_msg.set_value('하나로eSCM 이용료 미납으로 서비스 이용이 중지될 예정입니다.(' + toDay.substr(4, 2) + '월12일중지예정)');
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        /* 콜백 함수 */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        //	trace(this.ds_nPayStop.saveXML());
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}
        	else
        	{
        		if(svcID == "retrieveNPayStopList")
        		{
        			if(this.ds_nPayStop.rowcount == 0)
        			{
        				this.Div02.grd_stop.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        			}
        		}
        		else if(svcID == "actionNPayStop")
        		{
        			var rtMsg = "";
        			     if(this.div_search.rdo_categ.value == 1) rtMsg = "SMS전송이 완료되었습니다.";
        			else if(this.div_search.rdo_categ.value == 2) rtMsg = "서비스중지가 완료되었습니다.";
        			alert(rtMsg);
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
        this.btn_action_onclick = function(obj,e)
        {
        	var sParams			=  "SVC_ST="	+ this.div_search.rdo_categ.value
        						+ " TXT_MSG="	+ "'" + this.div_search.txt_msg.value + "'"
        						+ " USER_ID="	+ application.gv_userId
        						;
        //	trace("sParams:" + sParams);
        	this.fn_action(sParams);
        }

        this.fn_action = function(sParams)
        {
        	var sSvcID			= "actionNPayStop";
        	var sURL			= "svc::rest/bl/actionNPayStop";
        	var sInDatasets		= "ds_nPayStop=ds_nPayStop";
        	var sOutDatasets	= "";
        	var sArgument		= sParams;
        	var sCallbackFunc	= "fn_callBack";
        	var sTranType		= "U"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.btn_excelListDown_onclick = function(obj,e)
        {
        	var sParams			= "CAL_MON="	+ this.div_search.cal_month._getValue().substr(0, 6)
        						+ "&TRPL_C="	+ this.gfn_nullToEmpty(this.div_search.Edit_comnum.value)
        						+ "&CLNTNM="	+ this.gfn_nullToEmpty(this.div_search.Edit_comname.value)
        						+ "&SVC_ST="	+ this.div_search.rdo_categ.value
        						+ "&PHONE_NM="	+ this.gfn_nullToEmpty(this.div_search.Edit_phoneNm.value)
        						+ "&PHONE_NUM="	+ this.gfn_nullToEmpty(this.div_search.Edit_phoneNum.value)
        						;
        //	trace("sParams:" + sParams);
        	this.fn_excel(sParams);
        }

        this.fn_excel = function(sParams)
        {
        //	trace("엑셀 다운로드 params >>> " + sParams);
        	this.web_downExcel.set_url(application.gv_serverAdmin_url + "rest/excel/bl/downloadExcelNPayStopList?" + sParams);
        }

        this.btn_search_onclick = function(obj,e)
        {
        	var sParams			= "CAL_MON="	+ this.div_search.cal_month._getValue().substr(0, 6)
        						+ " TRPL_C="	+ this.gfn_nullToEmpty(this.div_search.Edit_comnum.value)
        						+ " CLNTNM="	+ this.gfn_nullToEmpty(this.div_search.Edit_comname.value)
        						+ " SVC_ST="	+ this.div_search.rdo_categ.value
        						+ " PHONE_NM="	+ this.gfn_nullToEmpty(this.div_search.Edit_phoneNm.value)
        						+ " PHONE_NUM="	+ this.gfn_nullToEmpty(this.div_search.Edit_phoneNum.value)
        						;
        //	trace("sParams:" + sParams);
        	this.fn_search(sParams);
        }

        this.fn_search = function(sParams)
        {
        	var sSvcID			= "retrieveNPayStopList";
        	var sURL			= "svc::rest/bl/retrieveNPayStopList";
        	var sInDatasets		= "";
        	var sOutDatasets	= "ds_nPayStop=ds_nPayStop";
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

        //	구분 RADIO 변경 시 동작함수
        this.fn_categ_onitemchanged = function(obj,e)
        {
        	var	rdonly_bgcolor = "#999999ff";
        	var	editable_bgcolor = "#ffffffff";

        	if(this.div_search.rdo_categ.value == '1')	// SMS
        	{
        		this.btn_action.set_text('전송');
        		this.div_search.Edit_phoneNm.set_readonly(false);
        		this.div_search.Edit_phoneNm.style.set_background(editable_bgcolor);
        		this.div_search.Edit_phoneNum.set_readonly(false);
        		this.div_search.Edit_phoneNum.style.set_background(editable_bgcolor);
        		this.div_search.txt_msg.set_readonly(false);
        		this.div_search.txt_msg.style.set_background(editable_bgcolor);
        		this.div_search.txt_msg.set_value('하나로eSCM 이용료 미납으로 서비스 이용이 중지될 예정입니다.(' + toDay.substr(4, 2) + '월12일중지예정)');
        	}
        	else if(this.div_search.rdo_categ.value == '2')	// 서비스중지
        	{
        		this.btn_action.set_text('중지');
        		this.div_search.Edit_phoneNm.set_readonly(true);
        		this.div_search.Edit_phoneNm.style.set_background(rdonly_bgcolor);
        		this.div_search.Edit_phoneNum.set_readonly(true);
        		this.div_search.Edit_phoneNum.style.set_background(rdonly_bgcolor);
        		this.div_search.txt_msg.set_readonly(true);
        		this.div_search.txt_msg.style.set_background(rdonly_bgcolor);
        	}
        }

        this.grd_stop_onsummclick = function(obj,e)
        {
        	if (e.col == 0)
        	{
        		if(this.Div02.grd_stop.getCellProperty("Summ", 0, "text") == "0")
        		{
        			this.Div02.grd_stop.setCellProperty("Summ", 0, "text", "1");
        			for(var i = 0, length = this.ds_nPayStop.getRowCount(); i < length; i++)
        			{
        				this.ds_nPayStop.setColumn(i, "NS_CHK", "1");
        			}
        		}
        		else if(this.Div02.grd_stop.getCellProperty("Summ", 0, "text") == "1")
        		{
        			this.Div02.grd_stop.setCellProperty("Summ", 0, "text", "0");
        			for(var i = 0, length = this.ds_nPayStop.getRowCount(); i < length; i++)
        			{
        				this.ds_nPayStop.setColumn(i, "NS_CHK", "0");
        			}
        		}
        	}
        }

        this.fn_getByteLength = function(s)
        {
        	if (s == null || s.length == 0)
        	{
        		return 0;
        	}
        	var size = 0;
        	for ( var i = 0; i < s.length; i++)
        	{
        		size += this.fn_charByteSize(s.charAt(i));
        	}
        	return size;
        }

        this.fn_charByteSize = function(ch)
        {
        	if (ch == null || ch.length == 0)
        	{
        		return 0;
        	}
        	var charCode = ch.charCodeAt(0);
        	if (charCode <= 0x00007F)
        	{
        		return 1;
        	}
        	else if (charCode <= 0x0007FF)
        	{
        		return 2;
        	}
        	else if (charCode <= 0x00FFFF)
        	{
        		return 2;
        	}
        	else
        	{
        		return 4;
        	}
        }

        this.div_search_txt_msg_onkeyup = function(obj,e)
        {
        	var msg_length = 0;
        	msg_length = this.fn_getByteLength(this.div_search.txt_msg.value);
        	this.div_search.Static03.set_text(msg_length + " bytes");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("oninit", this.form_init, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_excelListDown.addEventHandler("onclick", this.btn_excelListDown_onclick, this);
            this.Div02.grd_stop.addEventHandler("onsummclick", this.grd_stop_onsummclick, this);
            this.Div02.Button75.addEventHandler("onclick", this.Div02_Button75_onclick, this);
            this.btn_action.addEventHandler("onclick", this.btn_action_onclick, this);
            this.div_search.btn_comname.addEventHandler("onclick", this.div_search_btn_comname_onclick, this);
            this.div_search.Static06.addEventHandler("onclick", this.div_search_Static05_onclick, this);
            this.div_search.Static04.addEventHandler("onclick", this.div_search_Static05_onclick, this);
            this.div_search.rdo_categ.addEventHandler("onitemchanged", this.fn_categ_onitemchanged, this);
            this.div_search.Static01.addEventHandler("onclick", this.div_search_Static05_onclick, this);
            this.div_search.txt_msg.addEventHandler("onkeyup", this.div_search_txt_msg_onkeyup, this);

        };

        this.loadIncludeScript("OMG_DS_SC_7290.xfdl");
        this.loadPreloadList();
       
    };
}
)();
