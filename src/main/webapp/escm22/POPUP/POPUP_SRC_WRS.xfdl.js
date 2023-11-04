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
                this.set_name("popup01");
                this.set_cssclass("frm_WF_PopupBg");
                this.set_titletext("상품 조회");
                this._setFormPosition(0,0,688,353);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_wrs", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"BOXPE_AQZ\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"VCBX_NA_WRS_C\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_searchType", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"s_code\" type=\"string\" size=\"13\"/><Column id=\"s_name\" type=\"string\" size=\"13\"/></ColumnInfo><Rows><Row><Col id=\"s_code\">name</Col><Col id=\"s_name\">상품명</Col></Row><Row><Col id=\"s_code\">code</Col><Col id=\"s_name\">상품코드</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_search", "absolute", null, "47", "58", "21", "17", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "17", "76", null, "43", "17", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Edit("searchText", "absolute", "138", "10", "257", "21", null, null, this.div_search);
            obj.set_taborder("18");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("searchType", "absolute", "5", "10", "130", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("20");
            obj.set_codecolumn("s_code");
            obj.set_datacolumn("s_name");
            obj.set_innerdataset("@ds_searchType");
            obj.set_text("상품명");
            obj.set_value("name");

            obj = new Grid("grd_wrs", "absolute", "17", "134", null, "163", "17", null, this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_wrs");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"200\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"상품코드\"/><Cell col=\"1\" text=\"상품명\"/><Cell col=\"2\" text=\"입수량\"/><Cell col=\"3\" text=\"면과세구분\"/><Cell col=\"4\" text=\"공병코드\"/><Cell col=\"5\" text=\"공상자코드\"/></Band><Band id=\"body\"><Cell text=\"bind:NA_WRS_C\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:WRSNM\"/><Cell col=\"2\" text=\"bind:BOXPE_AQZ\"/><Cell col=\"3\" text=\"bind:SIMP_CNM\"/><Cell col=\"4\" text=\"bind:VCBT_NA_WRS_C\"/><Cell col=\"5\" text=\"bind:VCBX_NA_WRS_C\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok", "absolute", "290", "307", "54", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel", "absolute", "346", "307", "54", "29", null, null, this);
            obj.set_taborder("7");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "76", "17", "73", null, null, this);
            obj.set_taborder("8");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "439", "76", "17", "67", null, null, this);
            obj.set_taborder("9");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "363", "336", "91", "17", null, null, this);
            obj.set_taborder("10");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "363", "297", "91", "10", null, null, this);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "363", "68", "91", "8", null, null, this);
            obj.set_taborder("12");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "242", "32", "91", "15", null, null, this);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "363", "119", "76", "15", null, null, this);
            obj.set_taborder("14");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "0", "37", "32", "0", null, this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("16");
            obj.set_text("상품 조회");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 688, 353, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_cssclass("frm_WF_PopupBg");
            		p.set_titletext("상품 조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("POPUP_SRC_WRS.xfdl", "lib::comLib.xjs");
        this.registerScript("POPUP_SRC_WRS.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.objRtnArr = new Array(2); //팝업창 close시 전달할 값을 위한 배열 선언

        var autoPop = this.parent.autoPop;

        this.form_onload = function(obj,e)
        {
        	//trace("paramMode : "+this.getOwnerFrame().paramMode);
        	//trace("dsArg : "+this.parent.dsArg.rowcount);
        	var searchParam =
        	{
        				form: this,									
        				param:[{									
        						edit: this.div_search.searchText,
        						fnc: 'btn_search_onclick'
        				}]
        	};
        	this.addEventEnterSearch(searchParam);
        	
        	if(autoPop.autoType){
        		if(autoPop.searchCode && autoPop.searchText){
        			this.div_search.searchType.set_value("code");
        			this.div_search.searchText.set_value(autoPop.searchCode);
        		}
        		if(autoPop.searchCode && !autoPop.searchText){
        			this.div_search.searchType.set_value("code");
        			this.div_search.searchText.set_value(autoPop.searchCode);
        		}
        		if(!autoPop.searchCode && autoPop.searchText){
        			this.div_search.searchType.set_value("name");
        			this.div_search.searchText.set_value(autoPop.searchText);
        		}
        		if(!autoPop.searchCode && !autoPop.searchText){
        			return;
        		}
        		this.btn_search_onclick();
        	}
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
        	this.objRtnArr[0] = this.ds_wrs.getColumn(this.ds_wrs.rowposition,"NA_WRS_C");
        	this.objRtnArr[1] = this.ds_wrs.getColumn(this.ds_wrs.rowposition,"WRSNM");
        	trace(this.objRtnArr.toString());
        	this.close(this.objRtnArr.toString());
        }

        this.btn_search_onclick = function(obj,e)
        {
        	this.ds_wrs.clearData();
        	
        	if(this.fn_validationCheck()){
        		var searchType = this.gfn_nullToEmpty(this.div_search.searchType.value); //검색조건
        		var searchText = this.gfn_nullToEmpty(this.div_search.searchText.value); //검색어
        		
        		var param = "searchType='"+searchType+"' searchText='"+searchText+"'";
        		
        		if (this.gfn_nullToEmpty(this.parent.autoPop.chkUsrTpc) == 'Y') {
        			param += " chkUsrTpc=Y";
        		}
        					
        		trace("##MASTER##PARAM##->"+param);	
        		
        		var sSvcID        = "searchWRS";//통신아이디
        		var sURL          = "svc::rest/popup/searchWRS";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_wrs=DATASET";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = param;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);	
        	}
        }

        
        /* Validation Check */
        this.fn_validationCheck = function(){
        	
        	if (this.gfn_length(this.div_search.searchText.value) < 2) {
        		this.alert('검색어는 2자이상이어야 합니다.');
        		return false;
        	}
        	return true;
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", ErrorMsg);
        		return;
        	}else{
        		if(svcID == "searchWRS"){
        			if(this.ds_wrs.rowcount == 0){
        				this.grd_wrs.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        			}else if(this.ds_wrs.rowcount == 1){
        				if(autoPop.autoType == true){
        					this.grd_wrs.selectRow(0);
        					this.btn_ok_onclick();
        				}
        			}else{
        				this.grd_wrs.selectRow(0);
        				this.ds_wrs.setFocus();
        			}		
        		}	
        	}
        }

        
        this.grd_wrs_oncellclick = function(obj,e)
        {
        	this.objRtnArr[0] = this.ds_wrs.getColumn(e.row,"NA_WRS_C");
        	this.objRtnArr[1] = this.ds_wrs.getColumn(e.row,"WRSNM");
        	trace(this.objRtnArr.toString());
        	this.close(this.objRtnArr.toString());
        }

        this.grd_wrs_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.btn_ok_onclick();
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.grd_wrs.addEventHandler("oncellclick", this.grd_wrs_oncellclick, this);
            this.grd_wrs.addEventHandler("onkeydown", this.grd_wrs_onkeydown, this);
            this.btn_ok.addEventHandler("onclick", this.btn_ok_onclick, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_cancel_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);

        };

        this.loadIncludeScript("POPUP_SRC_WRS.xfdl", true);

       
    };
}
)();
