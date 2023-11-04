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
                this.set_name("POPUP_OMG_DS_SC_3130");
                this.set_titletext("수정세금계산서종류선택");
                this._setFormPosition(0,0,297,321);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_TRPL", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"REPMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"s_code\" type=\"string\" size=\"13\"/><Column id=\"s_name\" type=\"string\" size=\"13\"/></ColumnInfo><Rows><Row><Col id=\"s_code\">1</Col><Col id=\"s_name\">거래처명</Col></Row><Row><Col id=\"s_code\">2</Col><Col id=\"s_name\">사업자번호</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_modC", this);
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_ok", "absolute", null, null, "54", "29", "74", "17", this);
            obj.set_taborder("6");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel", "absolute", null, null, "54", "29", "17", "17", this);
            obj.set_taborder("7");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "44", "17", "73", null, null, this);
            obj.set_taborder("8");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", null, null, "91", "17", "11", "0", this);
            obj.set_taborder("10");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_modC", "absolute", "17", "15", null, null, "17", "56", this);
            this.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj.set_innerdataset("@ds_modC");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");

            obj = new Static("Static02", "absolute", null, null, "91", "10", "51", "46", this);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "171", "0", "91", "15", null, null, this);
            obj.set_taborder("16");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 297, 321, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("수정세금계산서종류선택");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("POPUP_OMG_DS_SC_3130.xfdl", "lib::comLib.xjs");
        this.registerScript("POPUP_OMG_DS_SC_3130.xfdl", function(exports) {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";
        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function(){

        	trace("fn_afterFormOnload");
        	var param = [  
         		{code:"MOD_C",   dsName:"ds_modC",   selecttype:"S"}
            ];
            this.gfn_setPortalCommonCode(param);   
        }

        this.fn_commonAfterOnload= function()
        {
        	this.ds_modC.deleteRow(0);
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        }

        this.btn_ok_onclick = function(obj,e)
        {
        	if(this.rdo_modC.index < 0)
        	{
        		alert("선택해주세요.");
        		return false;
        	}
        	this.close(this.rdo_modC.value);
        }

        this.btn_search_onclick = function(obj,e)
        {
        	if(this.fn_validationCheck()){
        		var searchType = this.gfn_nullToEmpty(this.div_search.searchType.value); //검색조건
        		var searchText = this.gfn_nullToEmpty(this.div_search.searchText.value); //검색어
        		
        		var param = "searchType="+searchType+
        					" searchText="+searchText;
        							
        		var sSvcID        = "retrieveTRPL";//통신아이디
        		var sURL          = "svc::rest/tx/retrieveTRPL";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_TRPL=ds_TRPL";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = param;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);	
        	}
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
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
        		if(svcID == "retrieveTRPL"){										
        			if(this.ds_TRPL.rowcount == 0){				
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");								
        			}else{							
        			}			
        		}	
        	}
        }

        this.div_search_searchText_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.btn_search.click();
        	}
        }

        this.grd_rvopl_oncelldblclick = function(obj,e)
        {
        	this.btn_ok.click();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_ok.addEventHandler("onclick", this.btn_ok_onclick, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_cancel_onclick, this);

        };

        this.loadIncludeScript("POPUP_OMG_DS_SC_3130.xfdl", true);

       
    };
}
)();
