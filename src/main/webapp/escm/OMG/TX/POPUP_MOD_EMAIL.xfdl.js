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
                this.set_name("POPUP_MOD_EMAIL");
                this.set_titletext("이메일 주소변경");
                this._setFormPosition(0,0,361,118);
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
            obj = new Static("Static36", "absolute", "126", "40", null, "29", "17", null, this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

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

            obj = new Static("Static37", "absolute", "17", "40", "110", "29", null, null, this);
            obj.set_taborder("17");
            obj.set_text("변경할 eMail");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_email", "absolute", "130", "44", "210", "21", null, null, this);
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "17", "15", "255", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_text("이메일 주소 변경");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 361, 118, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("이메일 주소변경");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("POPUP_MOD_EMAIL.xfdl", "lib::comLib.xjs");
        this.registerScript("POPUP_MOD_EMAIL.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";
        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.pbc_sqno  = "";

        this.form_onload = function(obj,e)
        {
        	this.pbc_sqno = this.getOwnerFrame().pbcSqno;
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function(){

        	trace("fn_afterFormOnload");
        	
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
        	var regEmail = new RegExp(/^[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{2,5}$/);
        	var eMail = this.edt_email.value;
        	
        	if(!this.gfn_isNull(eMail))
        	{
        		if(eMail.match(regEmail) == null)
        		{
        			alert("이메일주소를 올바르게 입력하여 주십시오");
        			return false;
        		}
        	}
        	else
        	{
        		return; 
        	}
        	
        	this.fn_updateEmailAddr();
        }

        this.fn_updateEmailAddr = function()
        {
        	var sSvcID        = "updateEmailAddr";//통신아이디
        	var sURL          = "svc::rest/tx/updateEmailAddr";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = "email=" + this.edt_email.value 
        						+ " PBC_SQNO=" + this.pbc_sqno ;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);	
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", ErrorMsg);
        		return;
        	}else{
        		if(svcID == "updateEmailAddr")
        		{		
        			this.close("SUCC");	
        		}	
        	}
        }

        this.edt_email_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.btn_ok.click();
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_ok.addEventHandler("onclick", this.btn_ok_onclick, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_cancel_onclick, this);
            this.edt_email.addEventHandler("onkeydown", this.edt_email_onkeydown, this);

        };

        this.loadIncludeScript("POPUP_MOD_EMAIL.xfdl");

       
    };
}
)();
