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
                this.set_name("VAN_DS_SC_1630");
                this.set_titletext("쿠폰대금 조회");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_main", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ADJPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"PMNY_ADJ_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_QT\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_AM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_FEE\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_FEE_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"DIV_CPN_FEE\" type=\"STRING\" size=\"256\"/><Column id=\"DIV_CPN_FEE_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"COMPLETE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_menu", "absolute", "0", "0", "323", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "73", "15", null, this);
            obj.set_taborder("14");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "13", "10", "106", "21", null, null, this.div_search);
            obj.set_taborder("17");
            obj.set_text("주관업체");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("CPN_PBC_NA_TRPL_C", "absolute", "102", "10", "134", "21", null, null, this.div_search);
            obj.set_taborder("18");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("CLNTNM", "absolute", "244", "10", "170", "21", null, null, this.div_search);
            obj.set_taborder("19");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "449", "11", "106", "21", null, null, this.div_search);
            obj.set_taborder("17");
            obj.set_text("기준월");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("ADJ_YM", "absolute", "508", "11", "106", "21", null, null, this.div_search);
            obj.set_taborder("8");
            obj.set_url("common::calendarMonth.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static99", "absolute", "13", "40", "106", "21", null, null, this.div_search);
            obj.set_taborder("17");
            obj.set_text("사업장");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_is_na_all", "absolute", "110", "40", "161", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_is_na_all_innerdataset = new Dataset("rdo_is_na_all_innerdataset", this.div_search.rdo_is_na_all);
            rdo_is_na_all_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">all</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">one</Col><Col id=\"datacolumn\">정산처</Col></Row></Rows>");
            obj.set_innerdataset(rdo_is_na_all_innerdataset);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("all");
            obj.set_direction("vertical");
            obj = new Edit("ADJPL_NA_TRPL_C", "absolute", "294", "40", "132", "21", null, null, this.div_search);
            obj.set_taborder("19");
            obj.set_readonly("true");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("NA_BZPLC_NM", "absolute", "434", "40", "152", "21", null, null, this.div_search);
            obj.set_taborder("20");
            obj.set_readonly("true");
            obj.set_cssclass("WF_Essential");
            obj.style.set_background("#ffffffff");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup", "absolute", "595", "40", "21", "21", null, null, this.div_search);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_Searchbtn");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("15");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "101", null, null, "15", "2", this);
            obj.set_taborder("17");
            obj.set_text("div_list");
            this.addChild(obj.name, obj);
            obj = new Button("btn_toggle00", "absolute", "46.07%", "0", null, "12", "45.94%", null, this.div_list);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_main", "absolute", "0", "27", null, null, "0", "21", this.div_list);
            obj.set_taborder("5");
            obj.set_binddataset("ds_main");
            obj.set_nodatatext("조회된 데이터가 없습니다.");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"141\"/><Column size=\"227\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"106\"/><Column size=\"106\"/><Column size=\"106\"/><Column size=\"106\"/><Column size=\"72\"/><Column size=\"76\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"순번\" wordwrap=\"char\"/><Cell col=\"1\" displaytype=\"text\" text=\"정산처코드\" wordwrap=\"char\"/><Cell col=\"2\" displaytype=\"text\" text=\"정산처\" wordwrap=\"char\"/><Cell col=\"3\" displaytype=\"text\" text=\"발생구분\" wordwrap=\"char\"/><Cell col=\"4\" displaytype=\"text\" text=\"수량\" wordwrap=\"char\"/><Cell col=\"5\" displaytype=\"text\" text=\"쿠폰금액\" wordwrap=\"char\"/><Cell col=\"6\" displaytype=\"text\" text=\"수수료\" wordwrap=\"char\"/><Cell col=\"7\" displaytype=\"text\" text=\"수수료부가세\" wordwrap=\"char\"/><Cell col=\"8\" displaytype=\"text\" text=\"기흥수수료\" wordwrap=\"char\"/><Cell col=\"9\" displaytype=\"text\" text=\"기흥수수료부가세\" wordwrap=\"char\"/><Cell col=\"10\" text=\"회수등록완료여부\" wordwrap=\"char\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:ADJPL_NA_TRPL_C\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:CLNTNM\"/><Cell col=\"3\" text=\"bind:PMNY_ADJ_DSC\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CPN_QT\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CPN_AM\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CPN_FEE\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CPN_FEE_VAT\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DIV_CPN_FEE\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DIV_CPN_FEE_VAT\"/><Cell col=\"10\" text=\"bind:COMPLETE_YN\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 73, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("14");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("17");
            		p.set_text("div_list");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1550");
            		p.set_titletext("쿠폰대금 조회");

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
            this._addPreloadList("fdl", "common::calendarMonth.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1630.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1630.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e) 
        {
        	this.gfn_setInitForm(obj, e); //공통
        };

        this.fn_afterFormOnload = function() //onload
        {
        	this.div_list.grd_main.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        	this.div_search.CPN_PBC_NA_TRPL_C.set_value(application.gv_glnCode);
        	this.div_search.CLNTNM.set_value(application.gv_companyName);
        	
        	var todays = this.gfn_today('yyyyMM');
        	this.div_search.ADJ_YM._setValue(todays);
        }

        this.div_search_rdo_is_na_all_onitemchanged = function(obj,e)
        {
        	if (e.postvalue =='one') {
        		this.div_search.btn_popup.set_enable(true);
        	} else {
        		this.div_search.btn_popup.set_enable(false);
        	}
        }

        this.div_search_btn_popup_onclick = function(obj,e)
        {
        	var oArg = "";
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("popId","POPUP::POPUP_SRC_RVOPL_TRPL.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	var strArray = strVal.split(',');
        	this.div_search.ADJPL_NA_TRPL_C.set_value(strArray[0]);
        	this.div_search.NA_BZPLC_NM.set_value(strArray[1]);
        	trace(" strId : " + strId + " strVal : " + strVal);
        }

        //조회 조건 숨김 여부 이벤트
        this.div_list_btn_toggle00_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        this.btn_search_onclick = function(obj,e)
        {
        	this.ds_main.clearData();
        	
        	var na_bizcode = this.div_search.ADJPL_NA_TRPL_C.value;
        	if (na_bizcode == null || this.div_search.rdo_is_na_all.value == 'all') {
        		trace('all');
        		na_bizcode = 'all';
        	}
        	
        	var params = "ADJPL_NA_TRPL_C="+na_bizcode
        				+" CPN_PBC_NA_TRPL_C="+this.div_search.CPN_PBC_NA_TRPL_C.value
        				+" ADJ_YM="+this.div_search.ADJ_YM._getValue();
        	
        	trace(params);				
        	
        	var sSvcID        = "getCouponSaleResultUploadList";//통신아이디
        	var sURL          = "svc::rest/pds/coupon/getCouponSaleResultUploadList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_main=DATASET";
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType 	  = "U"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);	
        }

        this.fn_callback = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		alert(ErrorMsg);
        		return;
        	}
        	
        	if (svcID == "getCouponSaleResultUploadList") {
        		if (this.ds_main.rowcount == 0) {
        			this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			return;
        		}
        	}
        }

        this.btn_excel_onclick = function(obj,e)
        {
        	var na_bizcode = this.div_search.ADJPL_NA_TRPL_C.value;
        	if (na_bizcode == null || this.div_search.rdo_is_na_all.value == 'all') {
        		trace('all');
        		na_bizcode = 'all';
        	}
        	
        	var params = "ADJPL_NA_TRPL_C=" + na_bizcode
        				+ "&CPN_PBC_NA_TRPL_C=" + this.div_search.CPN_PBC_NA_TRPL_C.value
        				+ "&ADJ_YM=" + this.div_search.ADJ_YM._getValue();
        	
        	var strDownUrl = application.gv_server_url + "rest/excel/pds/coupon/getCouponSaleResultUploadList?" + params;
        	excelDownHandler(strDownUrl, this);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_search.Static00.addEventHandler("onclick", this.div_search_Static01_onclick, this);
            this.div_search.rdo_is_na_all.addEventHandler("onitemchanged", this.div_search_rdo_is_na_all_onitemchanged, this);
            this.div_search.ADJPL_NA_TRPL_C.addEventHandler("onkeyup", this.div_search_edt_na_bzplc_code_onkeyup, this);
            this.div_search.btn_popup.addEventHandler("onclick", this.div_search_btn_popup_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.div_list.btn_toggle00.addEventHandler("onclick", this.div_list_btn_toggle00_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1630.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
