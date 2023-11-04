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
                this.set_titletext("사업장 조회");
                this._setFormPosition(0,0,437,353);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_bzplc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"TEAMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_search", "absolute", null, "47", "58", "21", "18", null, this);
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
            var searchType_innerdataset = new Dataset("searchType_innerdataset", this.div_search.searchType);
            searchType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">code</Col><Col id=\"datacolumn\">거래처코드</Col></Row><Row><Col id=\"codecolumn\">name</Col><Col id=\"datacolumn\">거래처명</Col></Row></Rows>");
            obj.set_innerdataset(searchType_innerdataset);
            obj.set_taborder("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("code");
            obj.set_text("거래처코드");

            obj = new Grid("grd_bzplc", "absolute", "17", "134", null, "163", "17", null, this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_bzplc");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"149\"/><Column size=\"242\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"거래처코드\"/><Cell col=\"1\" text=\"거래처명\"/></Band><Band id=\"body\"><Cell text=\"bind:NA_TRPL_C\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:CLNTNM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok", "absolute", "162", "307", "54", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel", "absolute", "218", "307", "54", "29", null, null, this);
            obj.set_taborder("7");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "0", "37", "32", "0", null, this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("16");
            obj.set_text("사업장 조회");
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
            obj = new Layout("default", "", 437, 353, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_cssclass("frm_WF_PopupBg");
            		p.set_titletext("사업장 조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_search.searchType","value","ds_searchType","");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("POPUP_SRC_BZPLC.xfdl", "lib::comLib.xjs");
        this.registerScript("POPUP_SRC_BZPLC.xfdl", function() {
        //include "lib::comLib.xjs";

        this.objRtnArr = new Array(2); //팝업창 close시 전달할 값을 위한 배열 선언
        var autoPop = this.parent.autoPop;

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	//엔터키 검색 이벤트 등록
        	var searchParam =
        	{
        		form: this,									//고정
        		param:[{									
        				edit: this.div_search.searchText,	//타겟 컴포넌트
        				fnc: 'btn_search_onclick'			//엔터키 눌렀을시 실행할 함수 이름
        		}]
        	};
        	this.addEventEnterSearch(searchParam);
        	
        	if (autoPop.autoType) {
        		if (autoPop.searchText) {
        			this.div_search.searchType.set_value("code");
        			this.div_search.searchText.set_value(autoPop.searchText);
        		}
        		if (!autoPop.searchText) {
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
        	this.objRtnArr[0] = this.ds_bzplc.getColumn(this.ds_bzplc.rowposition,"NA_TRPL_C");
        	this.objRtnArr[1] = this.ds_bzplc.getColumn(this.ds_bzplc.rowposition,"CLNTNM");
        	this.close(this.objRtnArr.toString());
        }

        this.btn_search_onclick = function(obj,e)
        {
        	this.ds_bzplc.clearData();
        	
        	if (this.fn_validationCheck()) {
        		var searchType = this.gfn_nullToEmpty(this.div_search.searchType.value); //검색조건
        		var searchText = this.gfn_nullToEmpty(this.div_search.searchText.value); //검색어
        		var param = "searchType='"+searchType+"' searchText='"+searchText+"'";
        		
        		var sSvcID        = "searchBzplc";//통신아이디
        		var sURL          = "svc::rest/popup/searchBzplc";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_bzplc=DATASET";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = param;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);	
        	}
        }

        /* Validation Check */
        this.fn_validationCheck = function()
        {	
        	if (this.gfn_length(this.div_search.searchText.value) < 2) {
        		this.alert('검색어는 2자이상이어야 합니다.');
        		return false;
        	}
        	return true;
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        	if(ErrorCode < 0) {
        		this.gfn_getMessage("alert", ErrorMsg);
        		return;
        	} else {
        		if (svcID == "searchBzplc") {
        			if (this.ds_bzplc.rowcount == 0) {
        				this.grd_bzplc.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));				
        			} else if (this.ds_bzplc.rowcount == 1) {
        				if (autoPop.autoType) {
        					this.grd_bzplc.selectRow(0);
        					this.btn_ok_onclick();
        				}
        			} else {
        				this.grd_bzplc.selectRow(0);
        				this.ds_bzplc.setFocus();
        			}
        		}
        	}
        }

        this.grd_bzplc_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.btn_ok_onclick();
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.grd_bzplc.addEventHandler("onkeydown", this.grd_rvopl_onkeydown, this);
            this.btn_ok.addEventHandler("onclick", this.btn_ok_onclick, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_cancel_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.Static06.addEventHandler("onclick", this.Static06_onclick, this);

        };

        this.loadIncludeScript("POPUP_SRC_BZPLC.xfdl");

       
    };
}
)();
