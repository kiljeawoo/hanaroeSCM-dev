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
                this.set_titletext("로그인테스트");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,1056,387);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_session", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><ConstColumn id=\"userKey\" type=\"STRING\" size=\"30\" value=\"\"/><ConstColumn id=\"glnCode\" type=\"STRING\" size=\"30\" value=\"\"/><ConstColumn id=\"mbcoType\" type=\"STRING\" size=\"30\" value=\"\"/><ConstColumn id=\"companyName\" type=\"STRING\" size=\"30\" value=\"\"/><ConstColumn id=\"userName\" type=\"STRING\" size=\"30\" value=\"\"/><ConstColumn id=\"commanyType\" type=\"STRING\" size=\"30\" value=\"\"/><ConstColumn id=\"lastLoginDt\" type=\"STRING\" size=\"30\" value=\"\"/><ConstColumn id=\"userType\" type=\"STRING\" size=\"30\" value=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static09", "absolute", "0", "76", "17", "73", null, null, this);
            obj.set_taborder("8");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "17", "76", null, "276", "10", null, this);
            obj.set_taborder("39");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Edit("MB_ID", "absolute", "142", "56", "123", "21", null, null, this.Div00);
            obj.set_taborder("0");
            obj.set_value("do000015");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("MB_PW", "absolute", "142", "103", "123", "21", null, null, this.Div00);
            obj.set_taborder("1");
            obj.set_value("doru2015");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btn_login", "absolute", "272", "107", "54", "29", null, null, this.Div00);
            obj.set_taborder("2");
            obj.set_text("로그인");
            obj.set_cssclass("btn_WF_Popup");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "46", "55", "120", "21", null, null, this.Div00);
            obj.set_taborder("3");
            obj.set_text("아이디");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "46", "105", "120", "21", null, null, this.Div00);
            obj.set_taborder("4");
            obj.set_text("비밀번호");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("로그인테스트", "absolute", "23", "10", "167", "33", null, null, this.Div00);
            obj.set_taborder("5");
            obj.set_text("로그인테스트");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btn_login00", "absolute", "275", "56", "115", "29", null, null, this.Div00);
            obj.set_taborder("6");
            obj.set_text("메뉴목록조회");
            obj.set_cssclass("btn_WF_Popup");
            this.Div00.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "10", "155", "1004", "89", null, null, this.Div00);
            obj.set_taborder("7");
            obj.set_binddataset("ds_session");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"411\"/><Column size=\"133\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"userKey\"/><Cell col=\"1\" text=\"glnCode\"/><Cell col=\"2\" text=\"mbcoType\"/><Cell col=\"3\" text=\"companyName\"/><Cell col=\"4\" text=\"userName\"/><Cell col=\"5\" text=\"commanyType\"/><Cell col=\"6\" text=\"lastLoginDt\"/><Cell col=\"7\" text=\"userType\"/></Band><Band id=\"body\"><Cell text=\"bind:userKey\"/><Cell col=\"1\" text=\"bind:glnCode\"/><Cell col=\"2\" text=\"bind:mbcoType\"/><Cell col=\"3\" text=\"bind:companyName\"/><Cell col=\"4\" text=\"bind:userName\"/><Cell col=\"5\" text=\"bind:commanyType\"/><Cell col=\"6\" text=\"bind:lastLoginDt\"/><Cell col=\"7\" text=\"bind:userType\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btn_logout", "absolute", "336", "107", "54", "29", null, null, this.Div00);
            obj.set_taborder("8");
            obj.set_text("로그아웃");
            obj.set_cssclass("btn_WF_Popup");
            this.Div00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 276, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("39");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1056, 387, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("로그인테스트");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("popup01.xfdl", "lib::comLib.xjs");
        this.registerScript("popup01.xfdl", function() {
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
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {

               
        }

        
        this.Div00_btn_login_onclick = function(obj,e)
        {
        	var id = this.Div00.MB_ID.value;
        	var pw = this.Div00.MB_PW.value;

        		var sParams = 
        					"userKey="+application.gv_userId  
        					//+" MB_ID="+this.Div00.MB_ID.value
        					//+" MB_PW="+this.Div00.MB_PW.value
        					+" MB_ID=do000015 MB_PW=doru2015"
        					//+" MB_ID=do000015 MB_PW=doru2017"
        				   ;
        		
        					
        					
        		var sSvcID        = "retrieveSession";		
        		var sURL          = "svc::rest/pt/retrieveSession";	
        		var sInDatasets   = "";
        		var sOutDatasets  = "ds_session=ds_session";	
        		var sArgument     = sParams;
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "S"; // U:저장/삭제, S:조회			
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
         }
         

         
         
          /*콜백메소드*/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        	//저장시 사용되는 ds초기화	
        	trace(this.ds_session.saveXML());
        	
        	if(ErrorCode < 0){
        		if(svcID="retrieveSession" && ErrorCode == -2){
        			this.gfn_getMessage("alert", "error.message.2001.badCredentials");
        			return;
        		}		
        	}else{
        		this.gfn_getMessage("alert", "result.message.save.success");		
        	}	
        }

        /*메뉴목록*/
        this.fn_getMenuList = function(){
        	
        		alert(this.ds_session.getColumn(0,"glnCode"));
        		var sParams = 
        					"userKey="+this.ds_session.getColumn(0,"userKey")
        					+" glnCode="+this.ds_session.getColumn(0,"glnCode")					
        				   ;
        		
        		var sSvcID        = "retrieveMenuList";		
        		var sURL          = "svc::rest/mg/retrieveMenuList";	
        		var sInDatasets   = "";
        		var sOutDatasets  = "ds_menu=ds_menu";	
        		var sArgument     = sParams;
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "S"; // U:저장/삭제, S:조회			
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }
         

        
        this.Div00_btn_logout_onclick = function(obj,e)
        {
        	//alert(application.gv_userId);
        	var sParams = "userKey="+this.ds_session.getColumn(0,"userKey");
        					
        					
        		var sSvcID        = "logout";		
        		var sURL          = "svc::rest/pt/logout?"+sParams;	
        		var sInDatasets   = "";
        		var sOutDatasets  = "";	
        		var sArgument     = "";
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "S"; // U:저장/삭제, S:조회			
        		alert(sParams);
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Div00.btn_login.addEventHandler("onclick", this.Div00_btn_login_onclick, this);
            this.Div00.로그인테스트.addEventHandler("onclick", this.Div00_Static02_onclick, this);
            this.Div00.btn_login00.addEventHandler("onclick", this.fn_getMenuList, this);
            this.Div00.btn_logout.addEventHandler("onclick", this.Div00_btn_logout_onclick, this);

        };

        this.loadIncludeScript("popup01.xfdl");

       
    };
}
)();
