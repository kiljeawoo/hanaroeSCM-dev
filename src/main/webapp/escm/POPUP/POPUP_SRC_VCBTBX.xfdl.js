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
                this.set_name("popup01");
                this.set_cssclass("frm_WF_PopupBg");
                this.set_titletext("공병/공상자 정보 조회");
                this._setFormPosition(0,0,740,353);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_vcbtbx", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_STDNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_ATTNM\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_UPR\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_FEE\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_CLF\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_CLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_PAC\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows/>");
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

            obj = new Dataset("ds_vcbtbx_tpc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"13\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"13\"/></ColumnInfo>");
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
            obj = new Edit("searchText", "absolute", "278", "11", "160", "21", null, null, this.div_search);
            obj.set_taborder("18");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("searchType", "absolute", "185", "11", "91", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("20");
            obj.set_codecolumn("s_code");
            obj.set_datacolumn("s_name");
            obj.set_innerdataset("@ds_searchType");
            obj.set_text("상품명");
            obj.set_value("name");
            obj = new Combo("WRS_TPC", "absolute", "61", "11", "120", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("21");
            obj.set_innerdataset("@ds_vcbtbx_tpc");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_readonly("true");
            obj.set_index("-1");
            obj = new Static("Static00", "absolute", "5", "11", "50", "21", null, null, this.div_search);
            obj.set_taborder("22");
            obj.set_text("상품유형");
            this.div_search.addChild(obj.name, obj);

            obj = new Grid("grd_vcbtbx", "absolute", "17", "134", null, "163", "17", null, this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_vcbtbx");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"85\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"상품코드\"/><Cell col=\"1\" text=\"상품명\"/><Cell col=\"2\" text=\"상품규격명\"/><Cell col=\"3\" text=\"상품단위코드\"/><Cell col=\"4\" text=\"상품단위명\"/><Cell col=\"5\" cssclass=\"pack_price\" text=\"공병단가\"/><Cell col=\"6\" text=\"공병수수료\"/><Cell col=\"7\" text=\"상품분류코드\"/><Cell col=\"8\" text=\"상품분류명\"/><Cell col=\"9\" text=\"최초등록일시\"/></Band><Band id=\"body\"><Cell text=\"bind:NA_WRS_C\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:WRSNM\"/><Cell col=\"2\" text=\"bind:WRS_STDNM\"/><Cell col=\"3\" text=\"bind:NA_WRS_UNT_C\"/><Cell col=\"4\" text=\"bind:NA_WRS_ATTNM\"/><Cell col=\"5\" text=\"bind:VCBT_UPR\"/><Cell col=\"6\" text=\"bind:VCBT_FEE\"/><Cell col=\"7\" text=\"bind:WRS_CLF\"/><Cell col=\"8\" text=\"bind:WRS_CLFNM\"/><Cell col=\"9\" text=\"bind:FSRG_DTM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok", "absolute", "289", "307", "54", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel", "absolute", "345", "307", "54", "29", null, null, this);
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
            obj.set_text("공병/공상자 정보 조회");
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
            obj = new Layout("default", "", 740, 353, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_cssclass("frm_WF_PopupBg");
            		p.set_titletext("공병/공상자 정보 조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("POPUP_SRC_VCBTBX.xfdl", "lib::comLib.xjs");
        this.registerScript("POPUP_SRC_VCBTBX.xfdl", function() {
        //include "lib::comLib.xjs";

        this.objRtnArr = new Array(2); //팝업창 close시 전달할 값을 위한 배열 선언

        var autoPop = this.parent.autoPop;

        this.form_onload = function(obj,e)
        {
        	trace("paramMode : "+this.getOwnerFrame().paramMode);
        	trace("dsArg : "+this.parent.dsArg.rowcount);
        	var param = [  
        		{code:"WRS_TPC", dsName:"ds_vcbtbx_tpc", selecttype:"S"}
        	];
        	this.gfn_setCommonCode(param);
        	this.grd_vcbtbx.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));	
        	var searchParam =
        	{
        				form: this,									
        				param:[{									
        						edit: this.div_search.searchText,
        						fnc: 'btn_search_onclick'
        				}]
        	};
        	this.addEventEnterSearch(searchParam);
        	
        	
        	if(autoPop.comboType){
        		this.div_search.WRS_TPC.set_value(autoPop.comboType);
        	}
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

        this.fn_commonAfterOnload= function()
        {
        	this.edit_colnm(autoPop.comboType);
            this.div_search.WRS_TPC.set_index(0);
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
        	this.objRtnArr[0] = this.ds_vcbtbx.getColumn(this.ds_vcbtbx.rowposition,"NA_WRS_C");
        	this.objRtnArr[1] = this.ds_vcbtbx.getColumn(this.ds_vcbtbx.rowposition,"WRSNM");
        	console.log(this.objRtnArr);
        	this.close(this.objRtnArr.toString());
        }

        this.btn_search_onclick = function(obj,e)
        {
        	this.ds_vcbtbx.clearData();
        	
        	if(this.fn_validationCheck()){
        		var WRS_TPC = this.gfn_nullToEmpty(this.div_search.WRS_TPC.value); //상품유형
        		var searchType = this.gfn_nullToEmpty(this.div_search.searchType.value); //검색조건
        		var searchText = this.gfn_nullToEmpty(this.div_search.searchText.value); //검색어
        		
        		var param = "WRS_TPC='"+WRS_TPC+"' searchType='"+searchType+"' searchText='"+searchText+"'";
        					
        		trace("##MASTER##PARAM##->"+param);	
        		
        		var sSvcID        = "searchVCBTBX";//통신아이디
        		var sURL          = "svc::rest/popup/searchVCBTBX";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_vcbtbx=DATASET";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
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
        		if(svcID == "searchVCBTBX"){										
        			if(this.ds_vcbtbx.rowcount == 0){	
        				this.grd_vcbtbx.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));								
        			}else if(this.grd_vcbtbx.rowcount == 1){
        				if(autoPop.autoType == true){
        					this.grd_vcbtbx.selectRow(0);
        					this.btn_ok_onclick();
        				}
        			}else{
        				this.grd_vcbtbx.selectRow(0);
        				this.ds_vcbtbx.setFocus();
        			}		
        		}	
        	}
        }

        this.grd_vcbtbx_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.btn_ok_onclick();
        	}
        }

        this.div_search_WRS_TPC_onitemchanged = function(obj,e)
        {
        	this.edit_colnm(this.div_search.WRS_TPC.index);
        }

         // 아래로
        this.get_grid_cell = function (grid_nm,seq) {
        	console.log(grid_nm);
        	return document.getElementById(grid_nm.head.bandctrl._unique_id)
        		.getElementsByTagName("div")[0]
        		.getElementsByTagName("div")[0]
        		.getElementsByTagName("div")[0]
        		.getElementsByTagName("div")[0]
        		.getElementsByTagName("div")[0]
        		.getElementsByTagName("div")[seq * 3 - 1];
        }
        //아래로
        this.edit_colnm = function (simp_c) {
        	if(String(simp_c).match('([2-3]){1}')) {//상품유형(SIMP_C)의 범위를 선택하는 정규식.
        		this.get_grid_cell(this.grd_vcbtbx, 6).innerText
        			= this.ds_vcbtbx_tpc.getColumn(simp_c,"SIMP_CNM")+"단가";
        		this.get_grid_cell(this.grd_vcbtbx, 7).innerText
        			= this.ds_vcbtbx_tpc.getColumn(simp_c,"SIMP_CNM")+"수수료";
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.div_search.WRS_TPC.addEventHandler("onitemchanged", this.div_search_WRS_TPC_onitemchanged, this);
            this.grd_vcbtbx.addEventHandler("onkeydown", this.grd_vcbtbx_onkeydown, this);
            this.btn_ok.addEventHandler("onclick", this.btn_ok_onclick, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_cancel_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);

        };

        this.loadIncludeScript("POPUP_SRC_VCBTBX.xfdl");

       
    };
}
)();
