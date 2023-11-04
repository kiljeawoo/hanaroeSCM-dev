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
                this.set_name("OMG_DS_SC_7160_P02");
                this.set_cssclass("frm_WF_PopupBg");
                this.set_titletext("빌링검증 팝업");
                this._setFormPosition(0,0,456,353);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_verify", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/><Column id=\"RSLT\" type=\"STRING\" size=\"256\"/><Column id=\"DESC\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"DATA\">일배치누락</Col><Col id=\"RSLT\">R</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"DATA\">빌링권한누락</Col><Col id=\"RSLT\">R</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"DATA\">업체유형중복</Col><Col id=\"RSLT\">R</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rslt", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">R</Col><Col id=\"DATA\">미실행</Col></Row><Row><Col id=\"CODE\">P</Col><Col id=\"DATA\">실행중</Col></Row><Row><Col id=\"CODE\">S</Col><Col id=\"DATA\">성공</Col></Row><Row><Col id=\"CODE\">F</Col><Col id=\"DATA\">실패</Col></Row><Row><Col id=\"CODE\">E</Col><Col id=\"DATA\">제외</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_return", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MESG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "28", "40", "400", "80", null, null, this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("st02", "absolute", "17.86%", "41", null, "21", "17.14%", null, this.div_search);
            obj.set_taborder("2");
            obj.set_text("검증 후에 확정업무가 가능합니다");
            obj.style.set_color("darkblue");
            obj.style.set_align("center middle");
            obj.style.set_font("9 arial");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("st01", "absolute", "30.48%", "14", null, "21", "29.76%", null, this.div_search);
            obj.set_taborder("3");
            obj.set_text("검증월: 2015년 01월");
            obj.style.set_align("center middle");
            obj.style.set_font("12 arial");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_verify_start", "absolute", "73", "310", "110", "30", null, null, this);
            obj.set_taborder("6");
            obj.set_text("검증시작");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "419", "0", "37", "32", null, null, this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("16");
            obj.set_text("빌링검증 팝업");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_verify", "absolute", "28", "130", "400", "170", null, null, this);
            obj.set_taborder("17");
            obj.set_binddataset("ds_verify");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("none");
            obj.set_summarytype("default");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("false");
            obj.set_treeuseexpandkey("true");
            obj.set_enable("true");
            obj.set_useselcolor("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"45\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"제외\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"레벨\"/><Cell col=\"3\" text=\"제목\"/><Cell col=\"4\" text=\"결과\"/><Cell col=\"5\" text=\"상세\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHECK\" tooltiptext=\"bind:CHECK\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: ;\" expr=\"currow+1\"/><Cell col=\"2\" displaytype=\"number\" text=\"bind:LEV\" tooltiptext=\"bind:LEV\"/><Cell col=\"3\" style=\"align:left;\" text=\"bind:DATA\" tooltiptext=\"bind:DATA\"/><Cell col=\"4\" displaytype=\"combo\" style=\"background:EXPR(RSLT=='F'?'yellow':'blue');background2:EXPR(RSLT=='F'?'yellow':'blue');color:EXPR(RSLT=='F'?'red':'white');color2:EXPR(RSLT=='F'?'red':'white');\" text=\"bind:RSLT\" combodataset=\"ds_rslt\" combocodecol=\"CODE\" combodatacol=\"DATA\" tooltiptext=\"bind:RSLT\"/><Cell col=\"5\" displaytype=\"normal\" style=\"align:left;\" text=\"bind:DESC\" combodataset=\"ds_rslt\" combocodecol=\"CODE\" combodatacol=\"DATA\" tooltiptext=\"bind:DESC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel", "absolute", "195", "310", "110", "30", null, null, this);
            obj.set_taborder("18");
            obj.set_text("실행취소");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_verify_success", "absolute", "317", "310", "110", "30", null, null, this);
            obj.set_taborder("19");
            obj.set_text("검증성공");
            obj.set_cssclass("btn_WF_Popup");
            obj.set_enable("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 400, 80, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 456, 353, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup02");
            		p.set_cssclass("frm_WF_PopupBg");
            		p.set_titletext("빌링검증 팝업");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_7160_P02.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_7160_P02.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        var bilMonth	= "";
        this.objRtnArr	= new Array(2); //팝업창 close시 전달할 값을 위한 배열 선언

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_init = function(obj,e)
        {
        	
        }

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통 
        	bilMonth = this.getOwnerFrame().paramMode;
        	this.div_search.st01.set_text("검증월: " + bilMonth.substr(0, 4) + "년 " + bilMonth.substr(4, 2) + "월");
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        // 콜백 함수
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        //	trace("ds_return:" + this.ds_return.saveXML());
        //	ErrorMsg 값이 서버에서 넣어준 값이아닌 "error.message.server.exception" 으로 무조건 출력하므로
        //	불가피하게 데이터셋으로 값을 받아 넣어준다
        	ErrorMsg = this.ds_return.getColumn(0, "MESG");
        //	초기화
        	this.ds_return.clearData();
        //	trace("svcID:" + svcID + " ErrorCode:" + ErrorCode + " ErrorMsg:" + ErrorMsg);

        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}
        	else
        	{
        		if(svcID == "chkBillDlyScmUgqt")
        		{			
        			if(ErrorCode == 0)		// 검증오류없음
        			{
        				this.ds_verify.setColumn(0, "RSLT", "S");
        			}
        			else if(ErrorCode == 1)	// 검증오류발생
        			{
        				this.ds_verify.setColumn(0, "RSLT", "F");
        			}
        			this.ds_verify.setColumn(0, "DESC", ErrorMsg);
        			this.fn_verify_step02();
        		}
        		else if(svcID == "chkBillUsrAuth")
        		{
        			if(ErrorCode == 0)		// 검증오류없음
        			{
        				this.ds_verify.setColumn(1, "RSLT", "S");
        			}
        			else if(ErrorCode == 1)	// 검증오류발생
        			{
        				this.ds_verify.setColumn(1, "RSLT", "F");
        			}
        			this.ds_verify.setColumn(1, "DESC", ErrorMsg);
        			this.fn_verify_step03();
        		}
        		else if(svcID == "chkBillDupType")
        		{
        			if(ErrorCode == 0)		// 검증오류없음
        			{
        				this.ds_verify.setColumn(2, "RSLT", "S");
        			}
        			else if(ErrorCode == 1)	// 검증오류발생
        			{
        				this.ds_verify.setColumn(2, "RSLT", "F");
        			}
        			this.ds_verify.setColumn(2, "DESC", ErrorMsg);
        			this.fn_verify_result();
        		}
        	}
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        this.btn_verify_start_onclick = function(obj,e)
        {
        	this.fn_billing_verify();
        }

        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        }

        this.btn_verify_success_onclick = function(obj,e)
        {
        	this.opener.btn_cnf.set_enable(true);
        //	trace("bilMonth:" + bilMonth);
        	this.objRtnArr[0] = bilMonth;
        //	trace("objRtnArr:" + this.objRtnArr.toString());
        	this.close(this.objRtnArr.toString());
        }

        //	일배치누락 검증
        this.fn_verify_step01 = function()
        {
        	if(this.ds_verify.getColumn(0, "CHECK") == 1)
        	{	// 제외체크
        		this.ds_verify.setColumn(0, "RSLT", "E");
        		this.ds_verify.setColumn(0, "DESC", "검증제외");
        		this.fn_verify_step02();
        	}
        	else
        	{
        		this.ds_verify.setColumn(0, "RSLT", "P");

        		var param			= "BILL_MONTH="	+ bilMonth;
        		var sSvcID			= "chkBillDlyScmUgqt";
        		var sURL			= "svc::rest/bl/chkBillDlyScmUgqt";
        		var sInDatasets		= "";						// 보내는데이터셋
        		var sOutDatasets	= "ds_return=ds_return";	// 화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument		= param;
        		var sCallbackFunc	= "fn_callBack";
        		var sTranType		= "S";						// U:저장/삭제, S:조회

        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        //	빌링권한누락 검증
        this.fn_verify_step02 = function()
        {
        	if(this.ds_verify.getColumn(1, "CHECK") == 1)
        	{	// 제외체크
        		this.ds_verify.setColumn(1, "RSLT", "E");
        		this.ds_verify.setColumn(1, "DESC", "검증제외");
        		this.fn_verify_step03();
        	}
        	else
        	{
        		this.ds_verify.setColumn(1, "RSLT", "P");

        		var param			= "BILL_MONTH="	+ bilMonth;
        		var sSvcID			= "chkBillUsrAuth";
        		var sURL			= "svc::rest/bl/chkBillUsrAuth";
        		var sInDatasets		= "";						// 보내는데이터셋
        		var sOutDatasets	= "ds_return=ds_return";	// 화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument		= param;
        		var sCallbackFunc	= "fn_callBack";
        		var sTranType		= "S";						// U:저장/삭제, S:조회

        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);	
        	}
        }

        //	업체유형중복 검증
        this.fn_verify_step03 = function()
        {
        	if(this.ds_verify.getColumn(2, "CHECK") == 1)
        	{	// 제외체크
        		this.ds_verify.setColumn(2, "RSLT", "E");
        		this.ds_verify.setColumn(2, "DESC", "검증제외");
        		this.fn_verify_result();
        	}
        	else
        	{
        		this.ds_verify.setColumn(2, "RSLT", "P");

        		var param			= "";
        		var sSvcID			= "chkBillDupType";
        		var sURL			= "svc::rest/bl/chkBillDupType";
        		var sInDatasets		= "";						// 보내는데이터셋
        		var sOutDatasets	= "ds_return=ds_return";	// 화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument		= param;
        		var sCallbackFunc	= "fn_callBack";
        		var sTranType		= "S";						// U:저장/삭제, S:조회

        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        this.fn_verify_result = function()
        {
        	if(	(this.ds_verify.getColumn(0, "CHECK") == 1 || this.ds_verify.getColumn(0, "RSLT") == 'S') &&
        	    (this.ds_verify.getColumn(1, "CHECK") == 1 || this.ds_verify.getColumn(1, "RSLT") == 'S') &&
        	    (this.ds_verify.getColumn(2, "CHECK") == 1 || this.ds_verify.getColumn(2, "RSLT") == 'S') )
        	{
        		this.btn_verify_success.set_enable(true);
        	}
        }

        this.fn_billing_verify = function()
        {
        //	trace("CHECK:" + this.gfn_nullToEmpty(this.ds_verify.getColumn(0, "CHECK")));
        	this.fn_verify_step01();
        //	this.setTimer(1, 3000);
        }

        /*
        this.OMG_DS_SC_7160_P02_ontimer = function(obj:Form, e:nexacro.TimerEventInfo)
        {
        	if(e.timerid == 1)
        	{
        		this.killTimer(1);
        		this.ds_verify.setColumn(0, "RSLT", "S");
        		this.fn_verify_step02();
        		this.setTimer(2, 3000);
        	}
        	else if(e.timerid == 2)
        	{
        		this.killTimer(2);
        		this.ds_verify.setColumn(1, "RSLT", "F");
        		this.ds_verify.setColumn(1, "DESC", "2개 업체가 빌링권한이 누락되었습니다.");
        		this.fn_verify_step03();
        		this.setTimer(3, 3000);
        	}
        	else if(e.timerid == 3)
        	{
        		this.killTimer(3);
        		this.ds_verify.setColumn(2, "RSLT", "S");
        		this.fn_verify_step04();
        		this.setTimer(4, 3000);
        	}
        	else if(e.timerid == 4)
        	{
        		this.killTimer(4);
        		this.ds_verify.setColumn(3, "RSLT", "S");
        		this.btn_verify_success.set_enable(true);
        	}
        }
        */
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("oninit", this.form_init, this);
            this.btn_verify_start.addEventHandler("onclick", this.btn_verify_start_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.Static06.addEventHandler("onclick", this.Static06_onclick, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_cancel_onclick, this);
            this.btn_verify_success.addEventHandler("onclick", this.btn_verify_success_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_7160_P02.xfdl");

       
    };
}
)();
