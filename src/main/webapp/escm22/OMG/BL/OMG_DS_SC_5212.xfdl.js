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
                this.set_name("OMG_DS_SC_5212");
                this.set_titletext("이용료청구내역");
                this._setFormPosition(0,0,730,520);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_result", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SUP_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"DC_AM_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"VAT_AM_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_RQS_AM_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"EDI_UGQT_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"ADINF_UGQT_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"BASIC_RATE_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"EDI_UG_AM_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"ADINF_UG_AM_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"IA_BI_UG_AM_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"IA_PG_UG_AM_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"IA_MA_UG_AM_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"IA_CTGR_UG_AM_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"IA_BLBD_UG_AM_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"BLBD_UG_AM_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"DC_BF_UG_AM_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPPR_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"TXBIL_RPBC_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"SMS_UG_AM_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"LATE_AM_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"CTGR_SL_UGQT_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"CTGR_SL_UG_AM_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"XMLEDI_BASIC_RATE_SUM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static91", "absolute", "11", "20", "705", "29", null, null, this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static101", "absolute", "11", "48", "705", "29", null, null, this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static98", "absolute", "11", "76", "705", "29", null, null, this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static92", "absolute", "11", "20", "110", "29", null, null, this);
            obj.set_taborder("14");
            obj.set_text("사업장코드");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static94", "absolute", "11", "48", "110", "29", null, null, this);
            obj.set_taborder("15");
            obj.set_text("대납업체수");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "363", "20", "110", "29", null, null, this);
            obj.set_taborder("19");
            obj.set_text("사업장명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_NA_TRPL_C", "absolute", "124", "24", "236", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_readonly("true");
            obj.set_maxlength("5");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_CLNTNM", "absolute", "476", "24", "236", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "1.51%", "133", null, "20", "-20.68%", null, this);
            obj.set_taborder("117");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "1.51%", null, "719", "20", null, "0", this);
            obj.set_taborder("138");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "11", "153", "705", null, null, "20", this);
            obj.set_taborder("148");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_result");
            obj.set_useselcolor("false");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"서비스종류\"/><Cell col=\"1\" text=\"요금항목\"/><Cell col=\"2\" text=\"사용량\"/><Cell col=\"3\" text=\"금액(원)\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" text=\"기본료\"/><Cell col=\"1\" text=\"기본료\"/><Cell col=\"2\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right middle;padding:2 5 0 5;\" text=\"bind:BASIC_RATE_SUM\"/><Cell row=\"1\" col=\"1\" text=\"XML/EDI\"/><Cell row=\"1\" col=\"2\"/><Cell row=\"1\" col=\"3\" displaytype=\"number\" style=\"align:right middle;padding:2 5 0 5;\" text=\"bind:XMLEDI_BASIC_RATE_SUM\"/><Cell row=\"2\" text=\"SCM업무\"/><Cell row=\"2\" col=\"1\" text=\"EDI서비스\"/><Cell row=\"2\" col=\"2\" displaytype=\"number\" style=\"align:right middle;padding:2 5 0 5;\" text=\"bind:EDI_UGQT_SUM\"/><Cell row=\"2\" col=\"3\" displaytype=\"number\" style=\"align:right middle;padding:2 5 0 5;\" text=\"bind:EDI_UG_AM_SUM\"/><Cell row=\"3\" text=\"부가정보\"/><Cell row=\"3\" col=\"1\" text=\"부가정보\"/><Cell row=\"3\" col=\"2\" displaytype=\"number\" style=\"align:right middle;padding:2 5 0 5;\" text=\"bind:ADINF_UGQT_SUM\"/><Cell row=\"3\" col=\"3\" displaytype=\"number\" style=\"align:right middle;padding:2 5 0 5;\" text=\"bind:ADINF_UG_AM_SUM\"/><Cell row=\"4\" rowspan=\"5\" text=\"정보분석\"/><Cell row=\"4\" col=\"1\" text=\"BI조회\"/><Cell row=\"4\" col=\"2\"/><Cell row=\"4\" col=\"3\" displaytype=\"number\" style=\"align:right middle;padding:2 5 0 5;\" text=\"bind:IA_BI_UG_AM_SUM\"/><Cell row=\"5\" col=\"1\" text=\"추이분석\"/><Cell row=\"5\" col=\"2\"/><Cell row=\"5\" col=\"3\" displaytype=\"number\" style=\"align:right middle;padding:2 5 0 5;\" text=\"bind:IA_PG_UG_AM_SUM\"/><Cell row=\"6\" col=\"1\" text=\"시장분석(자사)\"/><Cell row=\"6\" col=\"2\"/><Cell row=\"6\" col=\"3\" displaytype=\"number\" style=\"align:right middle;padding:2 5 0 5;\" text=\"bind:IA_MA_UG_AM_SUM\"/><Cell row=\"7\" col=\"1\" text=\"카테고리 시장분석\"/><Cell row=\"7\" col=\"2\"/><Cell row=\"7\" col=\"3\" displaytype=\"number\" style=\"align:right middle;padding:2 5 0 5;\" text=\"bind:IA_CTGR_UG_AM_SUM\"/><Cell row=\"8\" col=\"1\" text=\"파일제공\"/><Cell row=\"8\" col=\"2\"/><Cell row=\"8\" col=\"3\" displaytype=\"number\" style=\"align:right middle;padding:2 5 0 5;\" text=\"bind:IA_BLBD_UG_AM_SUM\"/><Cell row=\"9\" text=\"판매상세정보\"/><Cell row=\"9\" col=\"1\" text=\"판매상세정보\"/><Cell row=\"9\" col=\"2\" displaytype=\"number\" style=\"align:right middle;padding:2 5 0 5;\" text=\"bind:CTGR_SL_UGQT_SUM\"/><Cell row=\"9\" col=\"3\" displaytype=\"number\" style=\"align:right middle;padding:2 5 0 5;\" text=\"bind:CTGR_SL_UG_AM_SUM\"/><Cell row=\"10\" text=\"세금계산서\"/><Cell row=\"10\" col=\"1\" text=\"발행건수\"/><Cell row=\"10\" col=\"2\" displaytype=\"number\" style=\"align:right middle;padding:2 5 0 5;\" text=\"bind:TXBIL_RPBC_CNT\"/><Cell row=\"10\" col=\"3\" style=\"align:right middle;padding:2 5 0 5;\" text=\"-\"/><Cell row=\"11\" rowspan=\"2\" text=\"기타\"/><Cell row=\"11\" col=\"1\" text=\"SMS\"/><Cell row=\"11\" col=\"2\"/><Cell row=\"11\" col=\"3\" displaytype=\"number\" style=\"align:right middle;padding:2 5 0 5;\" text=\"bind:SMS_UG_AM_SUM\"/><Cell row=\"12\" col=\"1\" text=\"연체료\"/><Cell row=\"12\" col=\"2\"/><Cell row=\"12\" col=\"3\" displaytype=\"number\" style=\"align:right middle;padding:2 5 0 5;\" text=\"bind:LATE_AM_SUM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "0", "1", "1.49%", "1195", null, null, this);
            obj.set_taborder("150");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_SUP_CNT", "absolute", "124", "52", "236", "21", null, null, this);
            obj.set_taborder("157");
            obj.set_mask("###,#");
            obj.set_limitbymask("none");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "11", "104", "705", "29", null, null, this);
            obj.set_taborder("159");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "11", "76", "110", "29", null, null, this);
            obj.set_taborder("160");
            obj.set_text("사용요금");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_DC_BF_UG_AM_SUM", "absolute", "124", "80", "236", "21", null, null, this);
            obj.set_taborder("161");
            obj.set_mask("###,#");
            obj.set_limitbymask("none");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "363", "76", "110", "29", null, null, this);
            obj.set_taborder("162");
            obj.set_text("공급가액");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_SPPR_SUM", "absolute", "476", "80", "236", "21", null, null, this);
            obj.set_taborder("163");
            obj.set_mask("###,#");
            obj.set_limitbymask("none");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_VAT_AM_SUM", "absolute", "476", "108", "236", "21", null, null, this);
            obj.set_taborder("164");
            obj.set_mask("###,#");
            obj.set_limitbymask("none");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static97", "absolute", "363", "104", "110", "29", null, null, this);
            obj.set_taborder("165");
            obj.set_text("부가세(VAT)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static99", "absolute", "363", "48", "110", "29", null, null, this);
            obj.set_taborder("20");
            obj.set_text("청구금액");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_LS_RQS_AM_SUM", "absolute", "476", "52", "236", "21", null, null, this);
            obj.set_taborder("155");
            obj.set_limitbymask("none");
            obj.set_mask("###,#");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "11", "104", "110", "29", null, null, this);
            obj.set_taborder("83");
            obj.set_text("할인금액");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_DC_AM_SUM", "absolute", "124", "109", "236", "21", null, null, this);
            obj.set_taborder("156");
            obj.set_mask("###,#");
            obj.set_limitbymask("none");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "2.6%", "0", null, "20", "-20.27%", null, this);
            obj.set_taborder("166");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static87", "absolute", null, "1", "14", "1195", "0", null, this);
            obj.set_taborder("167");
            obj.set_text("14");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 730, 520, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("이용료청구내역");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","divSearch.edt_menuId","value","ds_in","MENU_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divSearch.cbo_menuLevel","value","ds_in","MENU_LEVEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divSearch.edt_menuName","value","ds_in","MENU_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divSearch.edt_svcGroup","value","ds_in","SVC_GROUP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divSearch.edt_fileName","value","ds_in","FILE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divSearch.edt_fileType","value","ds_in","FILE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","divSearch.cbo_displayYn","value","ds_in","DISPLAY_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","divSearch.cbo_useYn","value","ds_in","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","edt_NA_TRPL_C","value","ds_result","TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","edt_CLNTNM","value","ds_result","CLNTNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","msk_LS_RQS_AM_SUM","value","ds_result","LS_RQS_AM_SUM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","msk_DC_AM_SUM","value","ds_result","DC_AM_SUM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","msk_SUP_CNT","value","ds_result","SUP_CNT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","msk_DC_BF_UG_AM_SUM","value","ds_result","DC_BF_UG_AM_SUM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","msk_VAT_AM_SUM","value","ds_result","VAT_AM_SUM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","msk_SPPR_SUM","value","ds_result","SPPR_SUM");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_5212.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_5212.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); // 공통
        }

        /***************************************************
        	이용요금조회 메소드
        ****************************************************/
        this.fn_retrieveMmRqsBrk = function(RMS_MM,RMS_TRPL_C)
        {
        	var sParam = "RMS_MM=" + RMS_MM
        			   + " RMS_TRPL_C=" + RMS_TRPL_C;
        	
        	var sSvcID        = "retrieveMmRqsBrk";
        	var sURL          = "svc::rest/pt/myinf/retrieveMmRqsBrk";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_result=ds_result";
        	var sArgument     = sParam;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }
         
        /***************************************************
        	callback메소드
        ****************************************************/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}
        	
        	if (svcID == "retrieveMmRqsBrk") {
        		if (this.ds_result.rowcount == 0) {
        			//this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			return;
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);

        };

        this.loadIncludeScript("OMG_DS_SC_5212.xfdl", true);

       
    };
}
)();
