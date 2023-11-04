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
                this.set_name("OMG_DS_SC_5211");
                this.set_titletext("이용료명세 탭화면");
                this._setFormPosition(0,0,767,598);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_param", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RMS_MM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_RQS_AM\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_AM\" type=\"STRING\" size=\"256\"/><Column id=\"RQS_BAC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_naTrplc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_C_EXPL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static03", "absolute", "52", "21", "700", "8", null, null, this);
            obj.set_taborder("71");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00", "absolute", "0", "92", null, null, "15", "29", this);
            obj.set_taborder("76");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.style.set_showextrabutton("false");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.Tab00);
            obj.set_text("이용료청구내역");
            obj.set_url("OMG.BL::OMG_DS_SC_5212.xfdl");
            this.Tab00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.Tab00);
            obj.set_text("EDI서비스일별내역");
            obj.set_url("OMG.BL::OMG_DS_SC_5213.xfdl");
            obj.set_async("false");
            this.Tab00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage3", this.Tab00);
            obj.set_text("부가정보사용내역");
            obj.set_url("OMG.BL::OMG_DS_SC_5214.xfdl");
            obj.set_async("false");
            this.Tab00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage4", this.Tab00);
            obj.set_text("정보분석조회");
            obj.set_url("OMG.BL::OMG_DS_SC_5215.xfdl");
            obj.set_async("false");
            this.Tab00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage5", this.Tab00);
            obj.set_text("EDI서비스일별내역(WEB/EDI)");
            obj.set_url("OMG.BL::OMG_DS_SC_5216.xfdl");
            obj.set_async("false");
            this.Tab00.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("78");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "43", "15", null, this);
            obj.set_taborder("79");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "17", "10", "102", "21", null, null, this.div_search);
            obj.set_taborder("26");
            obj.set_text("이용료월");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "227", "10", "139", "21", null, null, this.div_search);
            obj.set_taborder("28");
            obj.set_text("대납업체거래처코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("combo_naTrplc", "absolute", "383", "10", "328", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("29");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_innerdataset("@ds_naTrplc");
            obj.set_index("-1");
            obj = new Div("div_rms_mm", "absolute", "95", "10", "108", "21", null, null, this.div_search);
            obj.set_taborder("30");
            obj.set_url("common::calendarMonth.xfdl");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("80");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web_downExcel", "absolute", "816", "24", "125", "14", null, null, this);
            obj.set_taborder("82");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print", "absolute", null, "0", "132", "21", "118", null, this);
            obj.set_taborder("83");
            obj.set_text("이용료청구내역 출력");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("83");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", null, "0", "15", null, "0", "0", this);
            obj.set_taborder("85");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "52", "72", "700", "20", null, null, this);
            obj.set_taborder("86");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static138", "absolute", "0", null, "500", "21", null, "0", this);
            obj.set_taborder("87");
            obj.set_text("* 미확정된 청구월의 청구금액은 확정전까지 변경가능하니 참고용도로 활용하시기 바랍니다.");
            obj.set_cssclass("sta_WF_DescriptionE02");
            obj.style.set_padding("2 0 0 3");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "569", "292", "8", null, null, this);
            obj.set_taborder("88");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 730, 443, this.Tab00.tabpage1,
            	//-- Layout function
            	function(p) {
            		p.set_text("이용료청구내역");
            		p.set_url("OMG.BL::OMG_DS_SC_5212.xfdl");

            	}
            );
            this.Tab00.tabpage1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("79");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 767, 598, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("이용료명세 탭화면");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "OMG.BL::OMG_DS_SC_5212.xfdl");
            this._addPreloadList("fdl", "OMG.BL::OMG_DS_SC_5213.xfdl");
            this._addPreloadList("fdl", "OMG.BL::OMG_DS_SC_5214.xfdl");
            this._addPreloadList("fdl", "OMG.BL::OMG_DS_SC_5215.xfdl");
            this._addPreloadList("fdl", "OMG.BL::OMG_DS_SC_5216.xfdl");
            this._addPreloadList("fdl", "common::location.xfdl");
            this._addPreloadList("fdl", "common::calendarMonth.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_5211.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_5211.xfdl", function(exports) {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e) // 공통
        {
        	this.gfn_setInitForm(obj, e);
        }

        this.fn_afterFormOnload = function()
        {
        	if (this.div_search.div_rms_mm._getValue()) {
        		return; // 각 탭이 로딩될 때마다 fn_afterFormOnload()가 호출되기 때문.
        	}
        	
        	var toDay = this.gfn_today("yyyyMMdd");
        	var chkDay = this.gfn_minusMonth(toDay, 1);
        	
        	this.div_search.div_rms_mm._setValue(chkDay.substring(0, 6));
        	this.div_search.div_rms_mm.setFunctionName("fn_search");
        	
        	this.fn_retrieveMmRqsBrkInit();
        }

        /***************************************************
        	이용요금조회 메소드
        ****************************************************/
        this.fn_retrieveMmRqsBrkInit = function()
        {
        	var sSvcID        = "retrieveMmRqsBrkInit";
        	var sURL          = "svc::rest/pt/myinf/retrieveMmRqsBrkInit";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_naTrplc=ds_naTrplc";
        	var sArgument     =  "";
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
        	
        	if (svcID == "retrieveMmRqsBrkInit") {
        		if (this.ds_naTrplc.rowcount == 0) {
        			this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			return;
        		}
        		
        		if (this.ds_naTrplc.rowcount > 1) {
        			this.ds_naTrplc.insertRow(0);
        			this.ds_naTrplc.setColumn(0, "SIMP_C", "A");
        			this.ds_naTrplc.setColumn(0, "SIMP_CNM", "전체");
        			this.ds_naTrplc.setColumn(0, "SIMP_C_EXPL", "A");
        			this.ds_naTrplc.setColumn(0, "PAY_COMP_NM", "");
        		}
        		
        		this.div_search.combo_naTrplc.set_index(0);
        		
        		this.fn_search();
        	}
        }

        /***************************************************
        	탭 내용 조회
        ****************************************************/
        this.fn_search = function()
        {
        	var RMS_MM = this.div_search.div_rms_mm._getValue();
        	var RMS_TRPL_C = this.div_search.combo_naTrplc.value;
        	
        	if (this.Tab00.tabindex == 0) {
        		this.Tab00.tabpage1.fn_retrieveMmRqsBrk(RMS_MM, RMS_TRPL_C);
        	} else if (this.Tab00.tabindex == 1) {
        		this.Tab00.tabpage2.fn_retrieveEdiSvcDtpBrk(RMS_MM, RMS_TRPL_C);
        	} else if (this.Tab00.tabindex == 2) {
        		this.Tab00.tabpage3.fn_retrieveAdinfDtpBrk(RMS_MM, RMS_TRPL_C);
        	} else if (this.Tab00.tabindex == 3) {
        		this.Tab00.tabpage4.fn_retrieveInfAnss(RMS_MM, RMS_TRPL_C);
        	} else if (this.Tab00.tabindex == 4) {
        		this.Tab00.tabpage5.fn_retrieveEdiSvcDtpBrk_LOC(RMS_MM, RMS_TRPL_C);
        	}
        }

        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_search();
        }

        this.OMG_DS_SC_5211_onkeydown = function(obj,e)
        {
        	if (this.btn_search.visible == true) {
        		if (e.keycode == 13) {
        			this.fn_search();
        		}
        	}
        }

        this.div_search_combo_naTrplc_onitemchanged = function(obj,e)
        {
        	this.fn_search();
        }

        /* 탭 변경 */
        this.Tab00_onchanged = function(obj,e)
        {
        	this.fn_search();
        }

        /***************************************************
        	이용료청구내역 출력
        ****************************************************/
        this.btn_print_onclick = function(obj,e)
        {
        	var ozParam = {
        		sId: 'OMG_DS_SC_5212',
        		sUrl: '/rest/oz/pt/myinf/retrieveMmRqsBrk',
        		paramType: 'param',
        		sParam: {
        			RMS_MM: this.div_search.div_rms_mm._getValue(),
        			RMS_TRPL_C: this.div_search.combo_naTrplc.value
        		}
        	};
        	this.ozViewer(ozParam);
        }

        /***************************************************
        	탭 엑셀 다운
        ****************************************************/
        this.btn_excel_onclick = function(obj,e)
        {
        	var toDay = this.gfn_today("yyyyMMdd");
        	var fileName = "_" + toDay + ".xls"; // 엑셀 파일 이름
        	
        	if (this.Tab00.tabindex == 0) {
        		fileName = "이용료청구내역" + fileName;
        	} else if (this.Tab00.tabindex == 1) {
        		fileName = "EDI서비스일별내역" + fileName;
        	} else if (this.Tab00.tabindex == 2) {
        		fileName = "부가정보사용내역" + fileName;
        	} else if (this.Tab00.tabindex == 3) {
        		fileName = "정보분석조회" + fileName;
        	} else if (this.Tab00.tabindex == 4) {
        		fileName = "EDI서비스일별내역(WEB_EDI)" + fileName; // file name에 "/" 사용못함.
        	}
        	
        	var param = "RMS_MM=" + this.div_search.div_rms_mm._getValue()
        			  + "&RMS_TRPL_C=" + this.div_search.combo_naTrplc.value
        			  + "&fileName=" + fileName;
        	
        	param = encodeURI(encodeURI(param));
        	
        	if (this.Tab00.tabindex == 0) {
        		excelDownHandler(application.gv_server_url + "rest/excel/downloadExcelMmRqsBrk?" + param, this);
        	} else if (this.Tab00.tabindex == 1) {
        		excelDownHandler(application.gv_server_url + "rest/excel/downloadExcelEdiSvcDtpBrkList?" + param, this);
        	} else if (this.Tab00.tabindex == 2) {
        		excelDownHandler(application.gv_server_url + "rest/excel/downloadExcelAdinfDtpBrkList?" + param, this);
        	} else if (this.Tab00.tabindex == 3) {
        		excelDownHandler(application.gv_server_url + "rest/excel/downloadExcelInfAnssList?" + param, this);
        	} else if (this.Tab00.tabindex == 4) {
        		excelDownHandler(application.gv_server_url + "rest/excel/downloadExcelEdiSvcDtpBrkList_LOC?" + param, this);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_naTrplc.addEventHandler("onrowposchanged", this.ds_naTrplc_onrowposchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("onkeydown", this.OMG_DS_SC_5211_onkeydown, this);
            this.Tab00.addEventHandler("onchanged", this.Tab00_onchanged, this);
            this.div_search.combo_naTrplc.addEventHandler("onitemchanged", this.div_search_combo_naTrplc_onitemchanged, this);
            this.div_search.div_rms_mm.addEventHandler("onkillfocus", this.div_search_div_rms_mm_onkillfocus, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_print.addEventHandler("onclick", this.btn_print_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.Static138.addEventHandler("onclick", this.Static138_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_5211.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
