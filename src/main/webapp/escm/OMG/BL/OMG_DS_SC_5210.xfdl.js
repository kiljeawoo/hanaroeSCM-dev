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
                this.set_name("OMG_DS_SC_5210");
                this.set_titletext("이용료명세서");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_basic", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"BZNO\" type=\"STRING\" size=\"10\"/><Column id=\"REPMNM\" type=\"STRING\" size=\"50\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USR_MPNO\" type=\"STRING\" size=\"256\"/><Column id=\"ZIPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACNO_INF\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_result", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RMS_MM\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSING_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CONFIRM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LS_RQS_AM\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_AM\" type=\"STRING\" size=\"256\"/><Column id=\"RQS_BAC\" type=\"STRING\" size=\"256\"/><Column id=\"RV_AM\" type=\"STRING\" size=\"256\"/><Column id=\"RF_AM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static34", "absolute", "0", "29", "788", "29", null, null, this);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", null, "0", "15", null, "0", "0", this);
            obj.set_taborder("22");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("44");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "0", "29", "110", "29", null, null, this);
            obj.set_taborder("46");
            obj.set_text("사업장명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_CLNTNM", "absolute", "113", "33", "277", "21", null, null, this);
            obj.set_taborder("47");
            obj.set_readonly("true");
            obj.set_enable("true");
            obj.style.setStyleValue("border", "readonly", "1 solid #bfbfbfff");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "393", "29", "110", "29", null, null, this);
            obj.set_taborder("48");
            obj.set_text("거래처코드");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_NA_TRPL_C", "absolute", "506", "33", "278", "21", null, null, this);
            obj.set_taborder("49");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #bfbfbfff");
            obj.style.setStyleValue("border", "readonly", "1 solid #bfbfbfff");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "85", "788", "29", null, null, this);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "113", "788", "58", null, null, this);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "393", "85", "110", "29", null, null, this);
            obj.set_taborder("56");
            obj.set_text("담당자전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "0", "85", "110", "29", null, null, this);
            obj.set_taborder("57");
            obj.set_text("빌링담당자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_USR_NM", "absolute", "113", "89", "277", "21", null, null, this);
            obj.set_taborder("58");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #bfbfbfff");
            obj.style.setStyleValue("border", "readonly", "1 solid #bfbfbfff");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_USR_MPNO", "absolute", "506", "89", "278", "21", null, null, this);
            obj.set_taborder("59");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #bfbfbfff");
            obj.style.setStyleValue("border", "readonly", "1 solid #bfbfbfff");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static102", "absolute", "0", "113", "110", "58", null, null, this);
            obj.set_taborder("60");
            obj.set_text("회사주소");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ZIPCODE", "absolute", "113", "119", "671", "21", null, null, this);
            obj.set_taborder("61");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #bfbfbfff");
            obj.style.setStyleValue("border", "readonly", "1 solid #bfbfbfff");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ADDRESS", "absolute", "113", "144", "671", "21", null, null, this);
            obj.set_taborder("62");
            obj.set_readonly("true");
            obj.style.set_border("1 solid #bfbfbfff");
            obj.style.setStyleValue("border", "readonly", "1 solid #bfbfbfff");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_result", "absolute", "0", "191", "788", null, null, "29", this);
            obj.set_taborder("64");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_result");
            obj.set_useselcolor("false");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/><Column size=\"130\"/><Column size=\"70\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"청구월\"/><Cell col=\"1\" text=\"납부마감일\"/><Cell col=\"2\" text=\"확정여부\"/><Cell col=\"3\" text=\"청구금액\"/><Cell col=\"4\" text=\"납부금액\"/><Cell col=\"5\" text=\"미납금액\"/></Band><Band id=\"body\"><Cell text=\"bind:RMS_MM\" mask=\"####-##\"/><Cell col=\"1\" text=\"bind:CLOSING_DT\" mask=\"####-##-##\"/><Cell col=\"2\" expr=\"expr:(CONFIRM_YN == 'Y') ? '확정' : '미확정'\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right middle;padding:2 5 0 5;\" text=\"bind:LS_RQS_AM\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right middle;padding:2 5 0 5;\" text=\"bind:PAY_AM\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right center;padding:2 5 0 5;\" text=\"bind:RQS_BAC\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" style=\"align:center middle;\" text=\"합계\"/><Cell col=\"3\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(LS_RQS_AM)&quot;)\"/><Cell col=\"4\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(PAY_AM)&quot;)\"/><Cell col=\"5\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(LS_RQS_AM)&quot;)-dataset.getSum(&quot;nexacro.toNumber(PAY_AM)&quot;)\"/></Band></Format><Format id=\"format_copy\"></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web_downExcel", "absolute", "1024", "32", "125", "14", null, null, this);
            obj.set_taborder("65");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("66");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("67");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "57", "788", "29", null, null, this);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "393", "57", "110", "29", null, null, this);
            obj.set_taborder("69");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "0", "57", "110", "29", null, null, this);
            obj.set_taborder("70");
            obj.set_text("대표자명");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_REPMNM", "absolute", "113", "61", "277", "21", null, null, this);
            obj.set_taborder("72");
            obj.set_readonly("true");
            obj.set_visible("true");
            obj.style.set_border("1 solid #bfbfbfff");
            obj.style.setStyleValue("border", "readonly", "1 solid #bfbfbfff");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_B_BZNO", "absolute", "506", "61", "278", "21", null, null, this);
            obj.set_taborder("75");
            obj.set_readonly("true");
            obj.set_visible("true");
            obj.style.set_border("1 solid #bfbfbfff");
            obj.style.setStyleValue("border", "readonly", "1 solid #bfbfbfff");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_bzno", "absolute", null, "0", "132", "21", "118", null, this);
            obj.set_taborder("79");
            obj.set_text("지사 사업자번호 확인");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static138", "absolute", "0", null, "500", "21", null, "0", this);
            obj.set_taborder("80");
            obj.set_text("* 미확정된 청구월의 청구금액은 확정전까지 변경가능하니 참고용도로 활용하시기 바랍니다.");
            obj.set_cssclass("sta_WF_DescriptionE02");
            obj.style.set_padding("2 0 0 3");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "88", "21", "700", "8", null, null, this);
            obj.set_taborder("81");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "461", "292", "8", null, null, this);
            obj.set_taborder("82");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "88", "171", "700", "20", null, null, this);
            obj.set_taborder("83");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("이용료명세서");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item9","edt_ZIPCODE","value","ds_basic","ZIPCODE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","edt_ADDRESS","value","ds_basic","ADDRESS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edt_USR_NM","value","ds_basic","USR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edt_CLNTNM","value","ds_basic","CLNTNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_USR_MPNO","value","ds_basic","USR_MPNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edt_NA_TRPL_C","value","ds_basic","NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_REPMNM","value","ds_basic","REPMNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edt_B_BZNO","value","ds_basic","BZNO");
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
        this.addIncludeScript("OMG_DS_SC_5210.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_5210.xfdl", function() {
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); // 공통
        }

        this.fn_afterFormOnload = function()
        {
        	// 페이지 로딩후 실행부분
        	this.fn_retrieveUsAmScfw();
        	this.grd_result.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	
        	if ((application.gv_userType == '01' || application.gv_userType == '04') && application.gv_mbcoType == '2') { // 지사인 경우만
        		this.btn_bzno.set_visible(true); // 지사 사업자번호 확인 버튼
        	}
        }

        /***************************************************
        	이용요금조회 메소드
        ****************************************************/
        this.fn_retrieveUsAmScfw = function ()
        {
        	var toDay = this.gfn_today("yyyyMMdd");
        	this.chkDay = this.gfn_minusMonth(toDay, 1);
        	var sParam = "RMS_MM=" + this.chkDay.substring(0, 6);

        	var sSvcID        = "retrieveUsAmScfw";
        	var sURL          = "svc::rest/pt/myinf/retrieveUsAmScfw";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_basic=ds_basic ds_result=ds_result";
        	var sArgument     = sParam;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        /***************************************************
        	팝업호출 메소드
        ****************************************************/
        /* 지사 사업자번호 확인 팝업 */
        this.fn_openBznoConfirm = function()
        {
        	var oArg = {};
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("OMG_DS_SC_5119", "OMG.PT::OMG_DS_SC_5119.xfdl", oArg, sOption, sPopupCallBack);
        }
        this.fn_popupAfter = function(strId,strVal)
        {
        	if (strId == "OMG_DS_SC_5119" && strVal == "SUCCESS") {
        		this.ds_basic.clearData();
        		this.ds_result.clearData();
        		this.fn_retrieveUsAmScfw(); // reload
        	}
        }

        /***************************************************
        	callback메소드
        ****************************************************/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        //	trace("ds_result:" + this.ds_result.saveXML());

        	if (ErrorCode < 0) {
        		if (ErrorCode == -2) {
        			alert("해당 거래처코드에 빌링권한을 가지고 있는 회원이 존재하지 않습니다.");
        		} else {
        			this.gfn_getMessage("alert", "error.message.server.exception");
        		}
        		return;
        	}
        	
        	if (svcID == "retrieveUsAmScfw") {
        		if (this.ds_basic.rowcount == 0) {
        			this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			return;
        		}
        		
        		var BZNO = this.ds_basic.getColumn(0, "BZNO");
        		if (BZNO && BZNO.length == 10) {
        			var B_01 = BZNO.substring(0, 3); // 3자리
        			var B_02 = BZNO.substring(3, 5); // 2자리
        			var B_03 = BZNO.substring(5, 10); // 5자리
        			this.edt_B_BZNO.set_value(B_01 + "-" + B_02 + "-" + B_03);
        		}
        		
        		var ZIPCODE = this.ds_basic.getColumn(0, "ZIPCODE");
        		if (ZIPCODE && ZIPCODE.length == 6) {
        			var Z_01 = ZIPCODE.substring(0, 3); // 3자리
        			var Z_02 = ZIPCODE.substring(3, 6); // 3자리
        			this.edt_ZIPCODE.set_value(Z_01 + "-" + Z_02);
        		}
        		
        		if (this.ds_result.rowcount == 0) {
        			//this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			return;
        		}

        		// 입금금액으로 납부금액, 미납금액의 데이터셋을 변경한다
        		var tot_rv_am = this.gfn_nullToEmpty(this.ds_result.getColumn(0, "RV_AM"));
        		var tot_rf_am = this.gfn_nullToEmpty(this.ds_result.getColumn(0, "RF_AM"));
        		var tot_rq_am = tot_rv_am - tot_rf_am;	// 전체배분할 금액
        		var rq_am = 0;
        		var rv_am = 0;
        	//	trace("tot_rq_am:" + tot_rq_am + " tot_rv_am:" + tot_rv_am + " tot_rf_am:" + tot_rf_am);
        		for(var i = this.ds_result.rowcount - 1; i >= 0; i--)
        		{
        		//	if(this.ds_result.getColumn(i, "CONFIRM_YN") == 'N') continue;
        		//	trace("bf tot_rq_am:" + tot_rq_am + " rq_am:" + rq_am + " rv_am:" + rv_am);
        			rq_am = this.ds_result.getColumn(i, "LS_RQS_AM");
        			if(tot_rq_am - rq_am >= 0) rv_am = rq_am;
        			else rv_am = tot_rq_am;
        			tot_rq_am = tot_rq_am - rv_am;
        			this.ds_result.setColumn(i, "PAY_AM", rv_am);
        			this.ds_result.setColumn(i, "RQS_BAC", rq_am - rv_am);
        		//	trace("af tot_rq_am:" + tot_rq_am + " rq_am:" + rq_am + " rv_am:" + rv_am);
        		}
        	}
        }

        this.btn_bzno_onclick = function(obj,e)
        {
        	//this.fn_openBznoConfirm();
        	alert("내정보 > 회원정보변경 메뉴를 이용해주세요.");
        }

        this.btn_excel_onclick = function(obj,e)
        {
        	this.fn_excel();
        }
        this.fn_excel = function()
        {
        	var toDay = this.gfn_today("yyyyMMdd");
        	var fileName = "이용료명세서"+toDay+".xls";//엑셀 파일 이름
        	
        	var edt_CLNTNM = this.gfn_nullToEmpty(this.edt_CLNTNM.value);  //사업장명
        	var edt_NA_TRPL_C = this.gfn_nullToEmpty(this.edt_NA_TRPL_C.value);  //거래처코드
        	var edt_USR_NM = this.gfn_nullToEmpty(this.edt_USR_NM.value);  //빌링담당자
        	var edt_USR_MPNO = this.gfn_nullToEmpty(this.edt_USR_MPNO.value);  //담당자전화번호
        	var edt_ZIPCODE = this.gfn_nullToEmpty(this.edt_ZIPCODE.value);  //회사주소 우편번호
        	var edt_ADDRESS = this.gfn_nullToEmpty(this.edt_ADDRESS.value);  //회사주소 상세
        	
        	var toDay = this.gfn_today("yyyyMMdd");
           this.chkDay = this.gfn_minusMonth(toDay, 1);
           	var sParam =  "RMS_MM="+this.chkDay.substring(0,6);
        	
        	
        	param = "edt_CLNTNM="+edt_CLNTNM+
        			"&edt_NA_TRPL_C="+edt_NA_TRPL_C+
        			"&edt_USR_NM="+edt_USR_NM+
        			"&edt_USR_MPNO="+edt_USR_MPNO+
        			"&edt_ZIPCODE="+edt_ZIPCODE+
        			"&edt_ADDRESS="+edt_ADDRESS+
        			"&RMS_MM="+this.chkDay.substring(0,6)+
        			"&fileName="+fileName
        			;

        	param = encodeURI(encodeURI(param));
        //	this.web_downExcel.set_url(application.gv_server_url+"rest/excel/downloadExcelUsAmScfw?"+param);
        	excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelUsAmScfw?"+param, this);
        	
        }

        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_retrieveUsAmScfw();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_bzno.addEventHandler("onclick", this.btn_bzno_onclick, this);
            this.Static138.addEventHandler("onclick", this.Static138_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_5210.xfdl");
        this.loadPreloadList();
       
    };
}
)();
