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
                this.set_name("POPUP_RGN");
                this.set_cssclass("frm_WF_PopupBg");
                this.set_titletext("지역코드 조회");
                this._setFormPosition(0,0,563,189);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_searchType", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"s_code\" type=\"string\" size=\"13\"/><Column id=\"s_name\" type=\"string\" size=\"13\"/></ColumnInfo><Rows><Row><Col id=\"s_code\">name</Col><Col id=\"s_name\">바이어명</Col></Row><Row><Col id=\"s_code\">code</Col><Col id=\"s_name\">바이어코드</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rgn_c00", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rgn_c01", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "17", "61", null, "43", "17", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WFSA_Searchbg");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Combo("cbo_wmc_loc_rgn_dsc", "absolute", "26", "11", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("@ds_rgn_c00");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj = new Combo("cbo_ht_lov_rgn_c", "absolute", "129", "11", "150", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_innerdataset("@ds_rgn_c01");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj = new Edit("searchText", "absolute", "285", "11", "200", "21", null, null, this.div_search);
            obj.set_taborder("2");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_ok", "absolute", "217", "138", "54", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel", "absolute", "273", "138", "54", "29", null, null, this);
            obj.set_taborder("7");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "0", "29", "32", "0", null, this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("16");
            obj.set_text("지역코드 조회");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_result1", "absolute", "335", "110", "104", "23", null, null, this);
            obj.set_taborder("17");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_result2", "absolute", "441", "110", "104", "23", null, null, this);
            obj.set_taborder("18");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_cssclass("div_WFSA_Searchbg");
            		p.set_scrollbars("none");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 563, 189, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_cssclass("frm_WF_PopupBg");
            		p.set_titletext("지역코드 조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("POPUP_RGN.xfdl", "lib::comLib.xjs");
        this.registerScript("POPUP_RGN.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
        	this.getRgnCode();
        }

        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        this.btn_ok_onclick = function(obj,e)
        {
        	var result = "";
        	result += this.edt_result1.value;
        	result += "@#" + this.edt_result2.value;
        	this.close(result);
        }

        //지역코드
        this.getRgnCode = function(){
        	var sSvcID        = "retrieveRgnCM";//통신아이디
        	var sURL          = "svc::/rest/common/getRgnCode";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_rgn_c00=ds_rgn_c00";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = "";// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        //상세지역코드
        this.div_search_cbo_wmc_loc_rgn_dsc_onitemchanged = function(obj,e)
        {
        	var wmc_loc_rgn_dsc = this.div_search.cbo_wmc_loc_rgn_dsc.value;
        	
        	var params = " simpC="+wmc_loc_rgn_dsc;
        	
        	var sSvcID        = "retrieveRgnC";//통신아이디
        	var sURL          = "svc::/rest/common/getRgnCodeD";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_rgn_c01=ds_rgn_c01";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        	this.div_search.cbo_ht_lov_rgn_c.set_enable(true);
        	
        	this.chg_preview();
        }

        this.div_search_cbo_ht_lov_rgn_c_onitemchanged = function(obj,e)
        {
        	this.chg_preview();
        }

        this.chg_preview = function(){
        	var rgn;
        	var rgnc;

        	if (this.div_search.cbo_wmc_loc_rgn_dsc.value == "") {
        		rgn = "";
        		rgnc = "";
        	} else {
        		rgn = this.div_search.cbo_wmc_loc_rgn_dsc.text;
        		rgnc = this.div_search.cbo_wmc_loc_rgn_dsc.value;
        	}

        	if (this.div_search.cbo_ht_lov_rgn_c.value != "" && this.div_search.cbo_ht_lov_rgn_c.text != "") {
        		rgn += "/" + this.div_search.cbo_ht_lov_rgn_c.text;
        		rgnc = this.div_search.cbo_ht_lov_rgn_c.value;
        	}
        	if (rgn != "") {
        		this.edt_result1.set_value(rgnc);
        		this.edt_result2.set_value(rgn);
        		rgn +="("+rgnc+")";
        	}
        	this.div_search.searchText.set_value(rgn);
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", ErrorMsg);
        		return;
        	} else {
        		if (svcID == "retrieveRgnCM") {
        			if (this.ds_rgn_c00.insertRow(0) != -1){
        				this.ds_rgn_c00.setColumn(0,"SIMP_C","");
        				this.ds_rgn_c00.setColumn(0,"SIMP_CNM","- 전체 -");
        			};
        			this.div_search.cbo_wmc_loc_rgn_dsc.set_index(0);
        		} else if (svcID == "retrieveRgnC") {
        			if (this.ds_rgn_c01.insertRow(0) != -1){
        				this.ds_rgn_c01.setColumn(0,"SIMP_C","");
        				this.ds_rgn_c01.setColumn(0,"SIMP_CNM","- 전체 -");
        			};
        			this.div_search.cbo_ht_lov_rgn_c.set_index(0);
        		}
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_search.cbo_wmc_loc_rgn_dsc.addEventHandler("onitemchanged", this.div_search_cbo_wmc_loc_rgn_dsc_onitemchanged, this);
            this.div_search.cbo_ht_lov_rgn_c.addEventHandler("onitemchanged", this.div_search_cbo_ht_lov_rgn_c_onitemchanged, this);
            this.btn_ok.addEventHandler("onclick", this.btn_ok_onclick, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_cancel_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);

        };

        this.loadIncludeScript("POPUP_RGN.xfdl", true);

       
    };
}
)();
