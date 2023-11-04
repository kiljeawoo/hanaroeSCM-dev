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
                this.set_name("OMG_DS_SC_7230_P01");
                this.set_titletext("단말기사업장조회");
                this._setFormPosition(0,0,456,321);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_codeData", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"s_code\" type=\"string\" size=\"13\"/><Column id=\"s_name\" type=\"string\" size=\"13\"/></ColumnInfo><Rows><Row><Col id=\"s_code\">code</Col><Col id=\"s_name\">사업장 코드</Col></Row><Row><Col id=\"s_code\">name</Col><Col id=\"s_name\">사업장 명</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_search", "absolute", null, "15", "58", "21", "15", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "17", "44", null, "43", "17", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Edit("searchText", "absolute", "148", "10", "257", "21", null, null, this.div_search);
            obj.set_taborder("0");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("searchType", "absolute", "15", "10", "130", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("20");
            obj.set_codecolumn("s_code");
            obj.set_datacolumn("s_name");
            obj.set_innerdataset("@ds_searchType");
            obj.set_displayrowcount("-1");
            obj.set_value("code");
            obj.set_text("협력업체 명");
            obj.set_index("0");

            obj = new Grid("grd_rvopl", "absolute", "17", "102", null, "163", "17", null, this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_codeData");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"144\"/><Column size=\"278\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"사업장 코드\"/><Cell col=\"1\" text=\"사업장 명\"/></Band><Band id=\"body\"><Cell text=\"bind:NA_BZPLC\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:CLNTNM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok", "absolute", "329", "275", "54", "29", null, null, this);
            obj.set_taborder("3");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel", "absolute", "385", "275", "54", "29", null, null, this);
            obj.set_taborder("4");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "44", "17", "73", null, null, this);
            obj.set_taborder("8");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "439", "44", "17", "67", null, null, this);
            obj.set_taborder("9");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "363", "304", "91", "17", null, null, this);
            obj.set_taborder("10");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "363", "265", "91", "10", null, null, this);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "363", "36", "91", "8", null, null, this);
            obj.set_taborder("12");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "242", "0", "91", "15", null, null, this);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "363", "87", "76", "15", null, null, this);
            obj.set_taborder("14");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 456, 321, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("단말기사업장조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("PDA_CN_003004.xfdl", "lib::comLib.xjs");
        this.registerScript("PDA_CN_003004.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.objRtnArr = new Array(2); //팝업창 close시 전달할 값을 위한 배열 선언

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통 
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

        	this.objRtnArr[0] = this.ds_codeData.getColumn(this.ds_codeData.rowposition,"NA_BZPLC");
        	this.objRtnArr[1] = this.ds_codeData.getColumn(this.ds_codeData.rowposition,"CLNTNM");

        	this.close(this.objRtnArr.toString());
        	
        }

        this.btn_search_onclick = function(obj,e)
        {
        	this.div_search.searchText.updateToDataset();
        	
        	if(this.fn_validationCheck()){
        		var searchType = this.gfn_nullToEmpty(this.div_search.searchType.value); //검색조건
        		var searchText = this.gfn_nullToEmpty(this.div_search.searchText.value); //검색어
        		
        		var param = "searchType="+searchType+
        					" searchText="+searchText;
        					
        		var sSvcID        = "searchBZPLC";//통신아이디
        		var sURL          = "svc::rest/pda/searchBZPLC";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_codeData=ds_codeData";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = param;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);	
        	}
        }

        
        /* Validation Check */
        this.fn_validationCheck = function(){
        	var searchType = this.gfn_nullToEmpty(this.div_search.searchType.value); //검색조건
        	var searchText = this.gfn_nullToEmpty(this.div_search.searchText.value); //검색어
        	
        	if (searchType == "code") {
        		if (searchText == "" || this.gfn_length(searchText) < 8) {
        			this.alert('사업장코드는 8자이상이어야 합니다.');
        			return false;
        		}
        	}
        		
        	if (this.gfn_length(searchText) < 2) {
        		this.alert('검색어는 2자이상이어야 합니다.');
        		return false;
        	}
        	return true;
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        	// trace(this.ds_codeData.saveXML());
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", ErrorMsg);
        		return;
        	}else{
        		if(svcID == "searchBZPLC"){										
        			if(this.ds_codeData.rowcount == 0){				
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");								
        			}else{
        				this.grd_rvopl.setFocus();
        			}
        		}
        	}
        }

        this.searchText_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.btn_search_onclick();
        	}
        }

        this.grd_rvopl_oncelldblclick = function(obj,e)
        {
        	this.btn_ok.click();
        }

        this.grd_rvopl_onkeydown = function(obj,e)
        {
        	if(e.keycode =='13')
        	{
        		this.btn_ok.click();
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.div_search.searchText.addEventHandler("onkeydown", this.searchText_onkeydown, this);
            this.grd_rvopl.addEventHandler("oncelldblclick", this.grd_rvopl_oncelldblclick, this);
            this.grd_rvopl.addEventHandler("onkeydown", this.grd_rvopl_onkeydown, this);
            this.btn_ok.addEventHandler("onclick", this.btn_ok_onclick, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_cancel_onclick, this);

        };

        this.loadIncludeScript("PDA_CN_003004.xfdl", true);

       
    };
}
)();
