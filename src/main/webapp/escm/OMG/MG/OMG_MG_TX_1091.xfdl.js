﻿(function()
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
                this.set_name("OMG_MG_TX_1090");
                this.set_titletext("신고현황(농협,정발행)");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_rptPstt", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SOAC_PBC_STSC\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SPRTT_SUM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SPRTT_SUM01\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SPRTT_SUM023\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SPRTT_SUM00\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SPRTT_SUM02\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SPRTT_SUM03\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SPRTT_COUNT\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SPRTT_COUNT01\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SPRTT_COUNT023\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SPRTT_COUNT00\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SPRTT_COUNT02\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SPRTT_COUNT03\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_combo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_condition", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STARTDT\" type=\"STRING\" size=\"256\"/><Column id=\"ENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_NUMBER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"STARTDT\"/><Col id=\"ENDDT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "69", "15", null, this);
            obj.set_taborder("9");
            obj.set_scrollbars("none");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", "77", "21", null, null, this.div_search);
            obj.set_taborder("38");
            obj.set_text("작성일");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "36", "103", "21", null, null, this.div_search);
            obj.set_taborder("39");
            obj.set_text("공급받는자");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_suppliee", "absolute", "118", "36", "130", "21", null, null, this.div_search);
            obj.set_taborder("40");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup", "absolute", "251", "36", "21", "21", null, null, this.div_search);
            obj.set_taborder("49");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_suppliee2", "absolute", "275", "36", "142", "21", null, null, this.div_search);
            obj.set_taborder("50");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("cal_mon", "absolute", "118", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("51");
            obj.set_scrollbars("none");
            obj.set_url("common::calendarMonth.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "442", "36", "133", "21", null, null, this.div_search);
            obj.set_taborder("52");
            obj.set_text("사업자번호(공급자)");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_BizNo", "absolute", "589", "36", "182", "21", null, null, this.div_search);
            obj.set_taborder("53");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_grd", "absolute", "0", "97", null, null, "15", "0", this);
            obj.set_taborder("4");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            obj = new Button("btn_flag", "absolute", "329", "0", null, "12", "332", null, this.div_grd);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_grd.addChild(obj.name, obj);
            obj = new Button("btn_excel", "absolute", null, "16", "89", "21", "0", null, this.div_grd);
            obj.set_taborder("10");
            obj.set_text("엑셀다운로드");
            obj.set_visible("false");
            this.div_grd.addChild(obj.name, obj);
            obj = new Grid("grd_rptPstt", "absolute", "0", "42", null, null, "0", "0", this.div_grd);
            obj.set_taborder("11");
            obj.set_binddataset("ds_rptPstt");
            obj.set_selecttype("cell");
            obj.set_cellsizingtype("col");
            obj.set_summarytype("top");
            obj.set_useselcolor("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"75\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" colspan=\"2\" text=\"구분\"/><Cell col=\"2\" colspan=\"4\" text=\"일반\"/><Cell col=\"6\" colspan=\"4\" text=\"영세\"/><Cell col=\"10\" rowspan=\"2\" text=\"합계\"/><Cell row=\"1\" col=\"2\" text=\"세금계산서\"/><Cell row=\"1\" col=\"3\" text=\"수정세금계산서\"/><Cell row=\"1\" col=\"4\" text=\"계산서\"/><Cell row=\"1\" col=\"5\" text=\"수정계산서\"/><Cell row=\"1\" col=\"6\" text=\"세금계산서\"/><Cell row=\"1\" col=\"7\" text=\"수정세금계산서\"/><Cell row=\"1\" col=\"8\" text=\"계산서\"/><Cell row=\"1\" col=\"9\" text=\"수정계산서\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" displaytype=\"normal\" style=\"background:whitesmoke;background2:whitesmoke;\" text=\"bind:TITLE\"/><Cell col=\"1\" style=\"background:whitesmoke;background2:whitesmoke;\" text=\"건수\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:COUNT01\" tooltiptext=\"bind:COUNT01\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:COUNT02\" tooltiptext=\"bind:COUNT02\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:COUNT03\" tooltiptext=\"bind:COUNT03\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:COUNT04\" tooltiptext=\"bind:COUNT04\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:COUNT05\" tooltiptext=\"bind:COUNT05\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:COUNT06\" tooltiptext=\"bind:COUNT06\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:COUNT07\" tooltiptext=\"bind:COUNT07\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:COUNT08\" tooltiptext=\"bind:COUNT08\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:COUNT10\"/><Cell row=\"1\" col=\"1\" style=\"background:whitesmoke;background2:whitesmoke;\" text=\"합계액\"/><Cell row=\"1\" col=\"2\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SUM01\" tooltiptext=\"bind:SUM01\"/><Cell row=\"1\" col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SUM02\" tooltiptext=\"bind:SUM02\"/><Cell row=\"1\" col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SUM03\" tooltiptext=\"bind:SUM03\"/><Cell row=\"1\" col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SUM04\" tooltiptext=\"bind:SUM04\"/><Cell row=\"1\" col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SUM05\" tooltiptext=\"bind:SUM05\"/><Cell row=\"1\" col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SUM06\" tooltiptext=\"bind:SUM06\"/><Cell row=\"1\" col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SUM07\" tooltiptext=\"bind:SUM07\"/><Cell row=\"1\" col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SUM08\" tooltiptext=\"bind:SUM08\"/><Cell row=\"1\" col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SUM10\"/></Band></Format></Formats>");
            this.div_grd.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", null, "1", "15", "491", "0", null, this);
            obj.set_taborder("2");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "1", "30", "15", "67", null, null, this);
            obj.set_taborder("3");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("6");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("st_info", "absolute", "0", "117", "547", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_text("* 문서종류 : 기업(세금)계산서(회원/비회원), 개인(세금)계산서, 위수탁(세금)계산서(회원/비회원)");
            obj.set_cssclass("sta_WF_DescriptionE02");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 69, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("9");
            		p.set_scrollbars("none");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 788, 367, this.div_grd,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_visible("true");

            	}
            );
            this.div_grd.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("신고현황(농협,정발행)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item3","div_search.edt_suppliee2","value","ds_condition","NA_BZPLC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_search.edt_BizNo","value","ds_condition","SPLR_BZNO");
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
        this.addIncludeScript("OMG_MG_TX_1091.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_MG_TX_1091.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        this.flag = true;
        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
           //페이지 로딩후 실행부분
           var param = [  
         		{code:"TXBIL_STSC",   dsName:"ds_combo",   selecttype:"A"}
            ];
            
        	this.gfn_setPortalCommonCode(param);
        }

        //gfn_setCommonCode처리 후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        	trace("fn_commonAfterOnload");
        	this.div_grd.grd_rptPstt.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
            this.div_search.cal_mon._setValue(this.gfn_today("yyyyMMdd").substr(0,6));
            this.div_search.cal_mon.setFunctionName("fn_monthChanged");
            this.fn_monthChanged();
            this.fn_retrieveRptPsttNh();
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_retrieveRptPsttNh = function()
        {
        	var sSvcID        = "retrieveRptPsttNh";
        	var sURL          = "svc::rest/tx/retrieveRptPsttNh2";
        	var sInDatasets   = "ds_condition=ds_condition";
        	var sOutDatasets  = "ds_rptPstt=ds_rptPstt";	
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0) //에러
         	{
        		trace(">>>>>>>>>>>>>>> svcID ::" +  svcID + ",  ErrorCode :: " + ErrorCode + ",  ErrorMsg :: " + ErrorMsg);
         	}
         	else 
         	{
        		switch(svcID)
        		{
        			case "retrieveRptPsttNh":
        				trace("retrieveRptPsttNh");
        				break;
        		}
         	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.common_onclick = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_search":	
        			this.fn_retrieveRptPsttNh();
        			break;
        			
        		case "btn_excel": 
        			if(this.ds_rptPstt.rowcount < 1)
        			{
        				alert("조회내용이 없습니다.");
        				return;
        			}
        			this.gfn_exportExcel(this.div_grd.grd_rptPstt,"매출(세금)계산서조회");
        			break;
        			
        		case "btn_popup":
        			var oArg = {searchWord:this.div_search.edt_suppliee.value};
        			var sOption = "autosize=true,title=true";
        			var sPopupCallBack = "fn_popupAfter";    
        			this.gfn_openPopup("POPUP_BZPLC","OMG.TX::POPUP_BZPLC.xfdl",oArg,sOption,sPopupCallBack);
        			break;
        	}
        }

        
        this.div_search_edt_suppliee_onkeydown = function(obj,e)
        {
        	if(e.keycode == '13')
        	{
        		this.fn_retrieveRptPsttNh();
        	}
        }

        this.edt_suppliee_onkeydown = function(obj,e)
        {
        	if(e.keycode=='13')
        	{
        		this.div_search.btn_popup.click();
        	}
        }

        this.btn_flag_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_grd);
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_monthChanged = function()
        {
        	var period = "";
        	var sDate = this.gfn_firstDate(this.div_search.cal_mon._getValue()+ "15");
        	var eDate = this.gfn_lastDate(this.div_search.cal_mon._getValue() + "15");
        	
        	period += sDate.substr(0,4) + "-" + sDate.substr(4,2) + "-" +  sDate.substr(6,2);
        	period += " ~ ";
        	period += eDate.substr(0,4) + "-" + eDate.substr(4,2) + "-" +  eDate.substr(6,2);
        	
        	this.ds_condition.setColumn(0, "STARTDT", sDate);
        	this.ds_condition.setColumn(0, "ENDDT", eDate);
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	trace(" strId : " + strId + " strVal : " + strVal);
        	switch(strId)
        	{
        		case "POPUP_BZPLC":
        			if(!this.gfn_isNull(strVal))
        			{
        				var strValNo = strVal.split(',');
        				this.div_search.edt_suppliee.set_value(strValNo[1]);
        				this.div_search.edt_suppliee2.set_value(strValNo[0]);
        			}
        			break;
        	}
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_search.edt_suppliee.addEventHandler("onkeydown", this.edt_suppliee_onkeydown, this);
            this.div_search.edt_suppliee.addEventHandler("onchanged", this.div_search_edt_suppliee_onchanged, this);
            this.div_search.btn_popup.addEventHandler("onclick", this.common_onclick, this);
            this.div_search.edt_BizNo.addEventHandler("onkeydown", this.div_search_edt_NTS_TMS_SQNO_onkeydown, this);
            this.div_grd.btn_flag.addEventHandler("onclick", this.btn_flag_onclick, this);
            this.div_grd.btn_excel.addEventHandler("onclick", this.common_onclick, this);
            this.div_grd.grd_rptPstt.addEventHandler("oncellclick", this.div_grd_grd_tax_oncellclick, this);
            this.div_grd.grd_rptPstt.addEventHandler("onheadclick", this.div_grd_grd_tax_onheadclick, this);
            this.div_grd.grd_rptPstt.addEventHandler("oncelldblclick", this.div_grd_grd_tax_oncelldblclick, this);
            this.btn_search.addEventHandler("onclick", this.common_onclick, this);

        };

        this.loadIncludeScript("OMG_MG_TX_1091.xfdl");
        this.loadPreloadList();
       
    };
}
)();
