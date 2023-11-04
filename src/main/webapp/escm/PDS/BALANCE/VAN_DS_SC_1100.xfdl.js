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
                this.set_name("VAN_DS_SC_1100");
                this.set_titletext("일잔액원장조회");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_master_data", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_ADJPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"TRPL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"BZPL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BLB_DFC_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"SNS_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"DB_AM\" type=\"STRING\" size=\"256\"/><Column id=\"CR_AM\" type=\"STRING\" size=\"256\"/><Column id=\"BAC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sum", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_BLB_DFC_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"SNS_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"DB_AM\" type=\"STRING\" size=\"256\"/><Column id=\"CR_AM\" type=\"STRING\" size=\"256\"/><Column id=\"BAC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Plugin("Plugin00", "absolute", "29.23%", "4", null, "24", "65.9%", null, this);
            obj.setProperty("taborder", "1");
            obj.setProperty("classid", "{55D9860A-AB9C-44A1-BB74-75AF7F805333}");
            obj.setProperty("visible", "false");
            this.addChild(obj.name, obj);

            obj = new Div("div_menu", "absolute", "0", "0", "397", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "379", "21", "159", null, this);
            obj.set_taborder("4");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print00", "absolute", null, "0", "41", "21", "118", null, this);
            obj.set_taborder("5");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search00", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "69", "15", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Calendar("cal_today", "absolute", "106", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj = new Static("sta_title01", "absolute", "15", "36", "91", "21", null, null, this.div_search);
            obj.set_taborder("7");
            obj.set_text("사업장");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data00", "absolute", "230", "36", "120", "21", null, null, this.div_search);
            obj.set_taborder("4");
            obj.set_inputtype("number");
            obj.set_cssclass("WF_Essential");
            obj.set_readonly("false");
            obj.set_maxlength("13");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data01", "absolute", "352", "36", "200", "21", null, null, this.div_search);
            obj.set_taborder("5");
            obj.set_cssclass("WF_Essential");
            obj.set_readonly("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup00", "absolute", "554", "36", "21", "21", null, null, this.div_search);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_Searchbtn");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_store_chk00", "absolute", "106", "36", "124", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_store_chk00_innerdataset = new Dataset("rdo_store_chk00_innerdataset", this.div_search.rdo_store_chk00);
            rdo_store_chk00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">정산처</Col></Row></Rows>");
            obj.set_innerdataset(rdo_store_chk00_innerdataset);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj = new Static("Static09", "absolute", "0", "0", "15", "67", null, null, this.div_search);
            obj.set_taborder("8");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "108", "0", "103", "10", null, null, this.div_search);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "108", "31", "103", "5", null, null, this.div_search);
            obj.set_taborder("10");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "108", "57", "103", "10", null, null, this.div_search);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "760", "0", "30", "67", null, null, this.div_search);
            obj.set_taborder("12");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title02", "absolute", "342", "10", "103", "21", null, null, this.div_search);
            obj.set_taborder("13");
            obj.set_text("계통계약구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_rots_ctr", "absolute", "445", "10", "130", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_rots_ctr_innerdataset = new Dataset("cbo_rots_ctr_innerdataset", this.div_search.cbo_rots_ctr);
            cbo_rots_ctr_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">all</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">중앙본부계통계약</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">지역본부계통계약</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">시군지부계통계약</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">자체계약</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">본점계약</Col></Row></Rows>");
            obj.set_innerdataset(cbo_rots_ctr_innerdataset);
            obj.set_taborder("2");
            obj.set_text("전체");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("all");
            obj = new Static("sta_title03", "absolute", "15", "10", "91", "21", null, null, this.div_search);
            obj.set_taborder("14");
            obj.set_text("거래일자");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "97", null, null, "15", "50", this);
            obj.set_taborder("3");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("btn_toggle00", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_main", "absolute", "0", "42", null, null, "0", "0", this.div_list);
            obj.set_taborder("16");
            obj.set_binddataset("ds_master_data");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"130\"/><Column size=\"200\"/><Column size=\"130\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"본/지사코드\"/><Cell col=\"2\" text=\"본/지사\"/><Cell col=\"3\" text=\"정산처코드\"/><Cell col=\"4\" text=\"정산처\"/><Cell col=\"5\" text=\"정산처팀\"/><Cell col=\"6\" text=\"적요\"/><Cell col=\"7\" text=\"차변\"/><Cell col=\"8\" text=\"대변\"/><Cell col=\"9\" text=\"잔액\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"1\" text=\"bind:NA_ADJPL_C\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:TRPL_NM\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"3\" text=\"bind:NA_BZPLC\"/><Cell col=\"4\" style=\"align:left;\" text=\"bind:BZPL_NM\"/><Cell col=\"5\" style=\"align:left;\" text=\"bind:NA_TEAM_C\"/><Cell col=\"6\" text=\"bind:SNS_CNTN\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;color:EXPR(NA_BLB_DFC_DSC=='-'?'red':'back');color2:EXPR(NA_BLB_DFC_DSC=='-'?'red':'back');selectcolor:EXPR(NA_BLB_DFC_DSC=='-'?'red':'back');\" text=\"bind:DB_AM\" expr=\"expr:NA_BLB_DFC_DSC=='-'?''+DB_AM:DB_AM\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;color:EXPR(NA_BLB_DFC_DSC=='-'?'red':'back');color2:EXPR(NA_BLB_DFC_DSC=='-'?'red':'back');selectcolor:EXPR(NA_BLB_DFC_DSC=='-'?'red':'back');\" text=\"bind:CR_AM\" expr=\"expr:NA_BLB_DFC_DSC=='-'?''+CR_AM:CR_AM\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;color:EXPR(NA_BLB_DFC_DSC=='-'?'red':'back');color2:EXPR(NA_BLB_DFC_DSC=='-'?'red':'back');selectcolor:EXPR(NA_BLB_DFC_DSC=='-'?'red':'back');\" text=\"bind:BAC\" expr=\"expr:NA_BLB_DFC_DSC=='-'?''+BAC:BAC\"/></Band><Band id=\"summary\"><Cell rowspan=\"3\" colspan=\"6\" style=\"align:center;\" text=\"합계\"/><Cell col=\"6\" style=\"align:center;\" text=\"적자누계\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;color:red;color2:red;\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'DB_AM');\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;color:red;color2:red;\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'CR_AM');\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;color:red;color2:red;\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'BAC');\"/><Cell row=\"1\" col=\"6\" style=\"align:center;\" text=\"흑자누계\"/><Cell row=\"1\" col=\"7\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(1,'DB_AM');\"/><Cell row=\"1\" col=\"8\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(1,'CR_AM');\"/><Cell row=\"1\" col=\"9\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(1,'BAC');\"/><Cell row=\"2\" col=\"6\" style=\"align:center;\" text=\"누계잔액\"/><Cell row=\"2\" col=\"7\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(2,'DB_AM');\"/><Cell row=\"2\" col=\"8\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(2,'CR_AM');\"/><Cell row=\"2\" col=\"9\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(2,'BAC');\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);

            obj = new Button("btn_excel00", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("6");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", null, null, "40", "15", "5", this);
            obj.set_taborder("8");
            obj.set_text("일잔액원장조회 화면 <b v='true'>기능문의</b>는 <u v='true'>하나로eSCM고객센터(02-1522-1211)</u>로, <b v='true'>금액문의</b>는 <u v='true'>담당 바이어</u>에게로 부탁드립니다.");
            obj.set_wordwrap("char");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 69, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.set_text("Div02");
            		p.set_scrollbars("none");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1100");
            		p.set_titletext("일잔액원장조회");

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
            this._addPreloadList("fdl", "common::AuthorityWorkplace.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1100.xfdl", "lib::comLib.xjs");
        this.addIncludeScript("VAN_DS_SC_1100.xfdl", "lib::comTSToolKit.xjs");
        this.registerScript("VAN_DS_SC_1100.xfdl", function() {
        //include "lib::comLib.xjs";
        //include "lib::comTSToolKit.xjs";
        var sRtn = "";
        this.fn_checkPKI = function() {
        	return true;
        	
        	if(sRtn == "") {
        		sRtn = this.gfn_signTradeSign(this.Plugin00,application.gv_glnCode);
        		if(!sRtn) {
        			this.alert("인증서 서명이 필요합니다.");
        			return false;
        		} else {
        			return true;
        		}
        	}
        	return true;
        }

        this.form_onload = function(obj,e)
        {
           this.gfn_setInitForm(obj, e); //공통
           	var searchParam =
        	{
        		form: this,									
        		param:[
        		{									
        			edit: this.div_search.cal_today,
        			fnc: 'btn_search00_onclick'
        		},
        		{									
        			edit: this.div_search.edt_data00,
        			fnc: 'btn_search00_onclick'
        		}
        		]
        	};
        	this.addEventEnterSearch(searchParam);
        }

        this.fn_afterFormOnload = function()
        {
        	this.div_search.cal_today.set_value(this.gfn_minusDate(this.gfn_today("yyyyMMdd"),1));
        	this.div_list.grd_main.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        }

        
        //조회 조건 숨김 여부 이벤트
        this.div_list_btn_toggle00_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }
        //제조업체 팝업 조회(수요처)
        this.div_search_btn_popup00_onclick = function(params)
        {
        	var param = {
        				autoType:params,
        				searchCode:this.div_search.edt_data00.value,
        				searchText:this.div_search.edt_data01.value
        	};
        	if(typeof params == "boolean"){
        		if(!this.searPopValue(param)){return};
        	}

        	var oArg = {paramMode:"U", dsArg:this.Dataset00, autoPop:param};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("rvopl_trpl","POPUP::POPUP_SRC_RVOPL_TRPL.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	//팝업을 닫을 경우 값을 전달
        	if(strVal != undefined){
        		this.div_search.edt_data00.set_value(strVal.split(",")[0]);
        		this.div_search.edt_data01.set_value(strVal.split(",")[1]);
        	}
        }
        //조회
        this.btn_search00_onclick = function(obj,e)
        {	
        	if(!this.fn_checkPKI()) {
        		return;
        	}
        	
        	this.ds_master_data.clearData();
        	this.ds_sum.clearData();
        	var params = "TR_DT="+this.div_search.cal_today.value
        				 +" ROTS_CTR_DSC="+this.div_search.cbo_rots_ctr.value
        				 +" TRPL_C="+this.getTrplCode(); //2910001392852
        				 
        	var trpl = this.gfn_nullToEmpty(this.div_search.edt_data00.value);
        	if(this.div_search.rdo_store_chk00.value == 1){
        		params += " NA_BZPLC=all"
        	}else{
        		if(this.gfn_nullToEmpty(this.div_search.edt_data00.value).length < 8){
        			this.alert("사업장코드를 입력해주세요.");
        			return;
        		}
        		params += " NA_BZPLC="+this.gfn_nullToEmpty(this.div_search.edt_data00.value);
        	}
        	
        	var sSvcID        = "p_search";//통신아이디
        	var sURL          = "svc::rest/pds/balance/getBcdDayList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_master_data=DATASET ds_sum=DS_SUM";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        this.fn_callback = function(trId,errCode,errMsg)
        {	
        	if(errCode < 0){
        		this.gfn_getMessage("alert", errMsg);
        		return;
        	}
        	if(this.div_list.grd_main.rowcount > 0){
        		this.ds_master_data.set_rowposition(1);
        		this.ds_master_data.set_rowposition(0);
        	}else{
        		this.div_list.grd_main00.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	}
        }

        //엑셀 다운로드 버튼
        this.btn_excel00_onclick = function(obj,e)
        {
        	if(!this.fn_checkPKI()) {
        		return;
        	}
        	
        	this.fn_exceldown();
        }

        //필수 값 체크
        this.fn_validationCheck = function()
        {
        	if(this.div_list.grd_main.rowcount < 1){
        		this.gfn_getMessage("alert","result.message.search.no.exist.data");
        		return;
        	}
        	return true;
        }

        //엑셀다운로드
        this.fn_exceldown = function()
        {
        	var params = "TR_DT="+this.div_search.cal_today.value
        				 +"&ROTS_CTR_DSC="+this.div_search.cbo_rots_ctr.value
        				 +"&TRPL_C="+this.getTrplCode();
        	if(this.div_search.rdo_store_chk00.value == 1){
        		params += "&NA_BZPLC=all"
        	}else{
        		if(this.gfn_nullToEmpty(this.div_search.edt_data00.value).length < 8){
        			this.alert("사업장코드를 입력해주세요.");
        			return;
        		}
        		params += "&NA_BZPLC="+this.gfn_nullToEmpty(this.div_search.edt_data00.value);
        	}
        	excelDownHandler(application.gv_server_url+"rest/excel/pds/balance/getBcdDayList?"+params, this);
        	
        	//this.div_list.web_downExcelM.set_url(application.gv_server_url+"rest/excel/pds/balance/getBcdDayList?"+params);
        }

        //농협사업장 라디오버튼
        this.div_search_rdo_store_chk00_onitemchanged = function(obj,e)
        {
        	if(this.div_search.rdo_store_chk00.value == 1){
        		this.div_search.edt_data00.set_readonly(true);
        		//this.div_search.edt_data01.set_readonly(true);
        		this.div_search.btn_popup00.set_enable(false);
        	}else{
        		this.div_search.edt_data00.set_readonly(false);
        		//this.div_search.edt_data01.set_readonly(false);
        		this.div_search.btn_popup00.set_enable(true);
        	}
        }

        //페이지 초기화
        this.btn_clear00_onclick = function(obj,e)
        {
        	this.reload();
        }

        this.btn_print00_onclick = function(obj,e)
        {
        	if(!this.fn_checkPKI()) {
        		return;
        	}
        	
        	var bzplc = "all";	
        	if(this.div_search.rdo_store_chk00.value != 1){
        		if(this.gfn_nullToEmpty(this.div_search.edt_data00.value).length < 8){
        			this.alert("사업장코드를 입력해주세요.");
        			return;
        		}
        		bzplc=this.gfn_nullToEmpty(this.div_search.edt_data00.value);
        	}
        	
        	var searchText = "[거래일자]:"+this.div_search.cal_today.value+
        					 ", [계통계약구분]:"+this.div_search.cbo_rots_ctr.text+
        					 ", [사업장]:"+((bzplc == 'all')?'전체': this.div_search.edt_data00.value+','+this.div_search.edt_data01.value);
        	
        	trace(searchText);
        	
        	var ozParam = {
        		sId: 'VAN_DS_SC_1100',
        		sUrl: '/rest/oz/pds/balance/getBcdDayList',
        		paramType: 'param',
        		sParam:{
        			TRPL_C_TEXT:searchText,
        			TR_DT:this.gfn_nullToEmpty(this.div_search.cal_today.value),
        			ROTS_CTR_DSC:this.gfn_nullToEmpty(this.div_search.cbo_rots_ctr.value),
        			TRPL_C:this.getTrplCode(),
        			NA_BZPLC:bzplc
        		}
        	};
        	this.ozViewer(ozParam);
        }

        this.div_search_cal_today_canchange = function(obj,e)
        {
        	//alert(e.postvalue+", "+e.prevalue);
        }

        this.div_search_cal_today_onchanged = function(obj,e)
        {
        	//alert(e.postvalue+", "+e.prevalue);
        }

        this.div_search_edt_data00_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.div_search_btn_popup00_onclick(true)
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_print00.addEventHandler("onclick", this.btn_print00_onclick, this);
            this.btn_search00.addEventHandler("onclick", this.btn_search00_onclick, this);
            this.div_search.cal_today.addEventHandler("oneditclick", this.div_search_cal_today_oneditclick, this);
            this.div_search.cal_today.addEventHandler("onchanged", this.div_search_cal_today_onchanged, this);
            this.div_search.edt_data00.addEventHandler("onkeydown", this.div_search_edt_data00_onkeydown, this);
            this.div_search.edt_data01.addEventHandler("onkeydown", this.div_search_edt_data00_onkeydown, this);
            this.div_search.btn_popup00.addEventHandler("onclick", this.div_search_btn_popup00_onclick, this);
            this.div_search.rdo_store_chk00.addEventHandler("onitemchanged", this.div_search_rdo_store_chk00_onitemchanged, this);
            this.div_list.btn_toggle00.addEventHandler("onclick", this.div_list_btn_toggle00_onclick, this);
            this.btn_excel00.addEventHandler("onclick", this.btn_excel00_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1100.xfdl");
        this.loadPreloadList();
       
    };
}
)();
