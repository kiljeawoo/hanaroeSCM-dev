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
                this.set_name("Intro");
                this.set_visible("false");
                this._setFormPosition(0,0,1008,552);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_bbs", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BOARD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SKIN\" type=\"string\" size=\"32\"/><Column id=\"MOBILE_SKIN\" type=\"string\" size=\"32\"/><Column id=\"BOARD_TITLE\" type=\"string\" size=\"32\"/><Column id=\"BOARD_DESCRIPTION\" type=\"string\" size=\"32\"/><Column id=\"BOARD_AUTH\" type=\"string\" size=\"32\"/><Column id=\"FILES_YN\" type=\"string\" size=\"32\"/><Column id=\"CATEGORY_YN\" type=\"string\" size=\"32\"/><Column id=\"TYPE_CODE\" type=\"string\" size=\"32\"/><Column id=\"IF_INIT_REG_DT\" type=\"string\" size=\"32\"/><Column id=\"IF_INIT_REG_USER\" type=\"string\" size=\"32\"/><Column id=\"FIR_OFFICE_CODE\" type=\"string\" size=\"32\"/><Column id=\"INIT_REG_DT\" type=\"string\" size=\"32\"/><Column id=\"INIT_REG_USER\" type=\"string\" size=\"32\"/><Column id=\"LAST_CHG_DT\" type=\"string\" size=\"32\"/><Column id=\"LAST_CHG_USER\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_notice", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_CHG_DT\" type=\"string\" size=\"32\"/><Column id=\"LAST_CHG_USER\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_login", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"userKey\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"userID\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"glnCode\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"mbcoType\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"companyName\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"userName\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"commanyType\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"lastLoginDt\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"userType\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static08", "absolute", "0", "0", null, "330", "0", null, this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_ADMIN_Image");
            obj.style.set_background("URL('theme://images/sta_ADMIN_Image.jpg') left top");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "1149", "25", "21", "40", null, null, this);
            obj.set_taborder("2");
            obj.style.set_background("#dc143c66");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "0", "486", null, "66", "0", null, this);
            obj.set_taborder("29");
            obj.set_text("Div03");
            obj.set_url("frame::main_bottom.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "335", "330", "337", "156", null, null, this);
            obj.set_taborder("30");
            obj.set_text("Div00");
            obj.set_cssclass("div_INTRO_ContentsBg02");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "20", "13", "109", "23", null, null, this.Div00);
            obj.set_taborder("0");
            obj.set_cssclass("sta_PORTAL_ContentsTitle01");
            this.Div00.addChild(obj.name, obj);
            obj = new Grid("grd_notice", "absolute", "20", "44", "301", "102", null, null, this.Div00);
            obj.set_cssclass("grd_INTRO_Notice");
            obj.set_taborder("3");
            obj.set_binddataset("ds_notice");
            obj.set_scrollbars("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"15\"/><Column size=\"200\"/><Column size=\"9\"/><Column size=\"80\"/></Columns><Rows><Row size=\"25\"/></Rows><Band id=\"body\"><Cell displaytype=\"image\" style=\"padding: ;\" text=\"URL('theme://images/grdIco_INTRO_Notice.png')\"/><Cell col=\"1\" style=\"padding:0 0 0 0;\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:OFANC_TINM\"/><Cell col=\"2\"/><Cell col=\"3\" displaytype=\"date\" style=\"align: ;color:#8f8f8fff;color2:#8f8f8fff;selectcolor:#8f8f8fff;selectfont:9 Gulim;\" text=\"bind:BLTN_ST_DTM\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "0", "330", "336", "156", null, null, this);
            obj.set_taborder("14");
            obj.set_text("Div02");
            obj.set_cssclass("div_INTRO_ContentsBg01");
            this.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "335", "0", "1", "156", null, null, this.Div02);
            obj.set_taborder("15");
            obj.set_cssclass("sta_INTRO_ContentsLine");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "27.08%", "40", null, "35", "7.14%", null, this.Div02);
            obj.set_taborder("16");
            obj.set_text("9999 - 9999");
            obj.set_cssclass("sta_INTRO_CSNum");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "7.14%", "47", null, "53", "77.08%", null, this.Div02);
            obj.set_taborder("17");
            obj.set_cssclass("sta_INTRO_CSImage");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "27.38%", "75", null, "33", "36.31%", null, this.Div02);
            obj.set_taborder("18");
            obj.set_text("[평일] 09:00 ~ 18:00\r\n[점심] 12:00 ~ 13:00");
            obj.set_cssclass("sta_INTRO_CSTime");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("btn_remote", "absolute", "61.31%", "81", null, "25", "7.14%", null, this.Div02);
            obj.set_taborder("19");
            obj.set_cssclass("btn_INTRO_Remote");
            this.Div02.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "671", "330", null, "156", "0", null, this);
            obj.set_taborder("13");
            obj.set_text("Div01");
            obj.set_cssclass("div_INTRO_ContentsBg02");
            this.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "20", "13", "109", "23", null, null, this.Div01);
            obj.set_taborder("1");
            obj.set_cssclass("sta_PORTAL_ContentsTitle02");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "0", "0", "1", "154", null, null, this.Div01);
            obj.set_taborder("3");
            obj.set_cssclass("sta_INTRO_ContentsLine");
            this.Div01.addChild(obj.name, obj);
            obj = new Grid("grd_bbs", "absolute", "20", "44", "301", "102", null, null, this.Div01);
            obj.set_cssclass("grd_INTRO_Notice");
            obj.set_taborder("4");
            obj.set_binddataset("ds_bbs");
            obj.set_scrollbars("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"15\"/><Column size=\"200\"/><Column size=\"9\"/><Column size=\"80\"/></Columns><Rows><Row size=\"25\"/></Rows><Band id=\"body\"><Cell displaytype=\"image\" style=\"padding: ;\" text=\"URL('theme://images/grdIco_INTRO_Notice.png')\"/><Cell col=\"1\" style=\"padding:0 0 0 0;\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:BBRD_TI\"/><Cell col=\"2\"/><Cell col=\"3\" style=\"color:#8f8f8fff;color2:#8f8f8fff;selectcolor:#8f8f8fff;selectfont:9 Gulim;\" text=\"bind:FSRG_DTM\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "1111", "25", "8", "40", null, null, this);
            obj.set_taborder("26");
            obj.set_visible("false");
            obj.style.set_background("#dc143c66");
            this.addChild(obj.name, obj);

            obj = new Div("div_login", "absolute", "0", "168", "336", "162", null, null, this);
            obj.set_taborder("31");
            obj.set_cssclass("div_IINTRO_LoginBg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "30", "19", "259", "81", null, null, this.div_login);
            obj.set_taborder("6");
            obj.set_cssclass("sta_INTRO_LoginSystemName");
            this.div_login.addChild(obj.name, obj);
            obj = new Edit("edt_id", "absolute", "30", "78", "205", "25", null, null, this.div_login);
            obj.set_taborder("9");
            obj.set_cssclass("edt_INTRO_Login");
            obj.set_value("admin123");
            this.div_login.addChild(obj.name, obj);
            obj = new Edit("edt_pw", "absolute", "30", "104", "205", "25", null, null, this.div_login);
            obj.set_taborder("10");
            obj.set_password("true");
            obj.set_cssclass("edt_INTRO_Login");
            obj.set_value("1234");
            this.div_login.addChild(obj.name, obj);
            obj = new Button("btn_login", "absolute", "240", "78", "66", "51", null, null, this.div_login);
            obj.set_taborder("11");
            obj.set_cssclass("btn_INTRO_Login");
            this.div_login.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "1007", "0", null, "330", "0", null, this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_ADMIN_ImageBg");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 337, 156, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("30");
            		p.set_text("Div00");
            		p.set_cssclass("div_INTRO_ContentsBg02");
            		p.set_scrollbars("none");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 336, 156, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("14");
            		p.set_text("Div02");
            		p.set_cssclass("div_INTRO_ContentsBg01");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 156, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("13");
            		p.set_text("Div01");
            		p.set_cssclass("div_INTRO_ContentsBg02");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 336, 162, this.div_login,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("31");
            		p.set_cssclass("div_IINTRO_LoginBg");

            	}
            );
            this.div_login.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1008, 552, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Intro");
            		p.set_visible("false");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "frame::main_bottom.xfdl");
        };
        
        // User Script
        this.addIncludeScript("Intro_admin.xfdl", "lib::comLib.xjs");
        this.registerScript("Intro_admin.xfdl", function(exports) {
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
        	
        	this.btn_login_onclick();
        }

        this.fn_afterFormOnload = function()
        {
           ///페이지 로딩후 실행부분
            this.fn_retrieveBlbdOfancMainList();
           this.fn_retrieveNacfOfancMainList();
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_retrieveBlbdOfancMainList = function()
        {
        	var sSvcID        = "retrieveBlbdOfancMainList";
        	var sURL          = "svc::rest/pt/blbd/retrieveBlbdOfancMainList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_bbs=ds_bbs";	
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:���옣/�궘�젣, S:議고쉶
        	
        	application.set_usewaitcursor(false);
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        
        this.fn_retrieveNacfOfancMainList = function()
        {
        	var sSvcID        = "retrieveNacfOfancMainList";
        	var sURL          = "svc::rest/pt/blbd/retrieveNacfOfancMainList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_notice=ds_notice";	
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:���옣/�궘�젣, S:議고쉶
        	
        	application.set_usewaitcursor(false);
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_login = function(sId,sPW)
        {
        	var sParam        = "OPER_MB_ID="+sId+" MB_PW="+sPW;

        	var sSvcID        = "retrieveSession";
        	var sURL          = "svc::rest/pt/retrieveSession";		// svc = http://localhost:8080/nhvan/
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_login=ds_session";
        	var sArgument     = sParam;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);

        	//application.afrm_VFrameSet0.set_separatesize("0,65,*");
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        	application.set_usewaitcursor(true);
        	
        	if(ErrorCode < 0) //에러
         	{
        		//trace(">>>>>>>>>>>>>>> svcID ::" +  svcID + ",  ErrorCode :: " + ErrorCode + ",  ErrorMsg :: " + ErrorMsg);
        		if(svcID== "retrieveSession")
        		{
        				alert("회원정보가 존재하지 않습니다.");
        		}
         	}
         	else
         	{
        		//trace(">>>>>>>>>>>>>>> svcID ::" +  svcID + ",  ErrorCode :: " + ErrorCode + ",  ErrorMsg :: " + ErrorMsg);
        		switch(svcID)
        		{
        			case "retrieveBlbdOfancMainList":
        				break;
        			
        			case "retrieveNacfOfancMainList":
        				break;
        			
        			case "retrieveSession":
        		
        				if(this.ds_login.rowcount > 0){
        					this.fn_setGlobalVariable();
        					this.fn_callMenuList();
        					this.fn_callMymenu();
        				}else{
        					alert("회원정보가 존재하지 않습니다.");
        				}
        				break;
        				
        			case "retrieveMenuList":
        							
        				application.afrm_TopFrame.set_formurl("frame::TopFrame_portal_admin.xfdl");
        				application.afrm_LeftFrame.set_formurl("frame::LeftFrame.xfdl");
        				
        				application.afrm_VFrameSet0.set_separatesize("0,65,*");
        				break;
        		}
         	}
        }

        
        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.btn_login_onclick = function(obj,e)
        {
        	//var sId = this.div_login.edt_id.value;
        	//var sPW = this.div_login.edt_pw.value;
        	
        	//var sId = application.getPrivateProfile("user_id");
        	//var sPW = application.getPrivateProfile("user_pw");
        	
        	var sId = application.gv_paramID;
        	var sPW = application.gv_paramPW;
        	
        	trace(sId+"/"+sPW);
        		
        	if(this.gfn_isNull(sId)){
        		alert("아이디를 입력하세요.");
        		this.div_login.edt_id.setFocus();
        		return;
        	}
        	
        	if(this.gfn_isNull(sPW)){
        		alert("비밀번호를 입력하세요.");
        		this.div_login.edt_pw.setFocus();
        		return;
        	}
        	
        	this.fn_login(sId, sPW);
        }

        
        this.button_onclick = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_join":
        			this.alert("회원가입");
        			break;
        			
        		case "btn_find":
        			this.alert("ID/PW 찾기");
        			break;
        			
        		case "btn_remote":
        			this.alert("원격지원동");
        			break;
        			
        		case "btn_new":
        			this.alert("신규상담");
        			break;
        		
        		case "btn_into":
        			this.alert("가입안내");
        			break;
        		
        		case "btn_more":
        		case "btn_NHmore":	
        			this.alert("로그인이 필요합니다.");
        			break;
        		
        	}
        }

        
        this.grd_oncellclick = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "grd_notice":
        			this.fn_openNhNotice(e.row);
        			break;
        		case "grd_bbs":
        			this.fn_openBbsNotice(e.row);
        			break;
        	}
        }

        
        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_openNhNotice = function(nRow)
        {
        	var oArg = {noticeSeq:this.ds_notice.getColumn(nRow, "BBRD_SQNO")};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("popId","OMG.PT::OMG_DS_SC_4512.xfdl",oArg,sOption,sPopupCallBack);	
        }

        this.fn_openBbsNotice = function(nRow)
        {
        	var oArg = {boardId:this.ds_bbs.getColumn(nRow, "BLBD_ID"), documentId:this.ds_bbs.getColumn(nRow, "BBRD_ID")};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("popId","OMG.PT::OMG_DS_SC_4113.xfdl",oArg,sOption,sPopupCallBack);	
        }

        this.fn_setGlobalVariable = function()
        {
        	application.gv_userKey     = this.gfn_nvl(this.ds_login.getColumn(0,"userKey"));
        	application.gv_userId      = this.gfn_nvl(this.ds_login.getColumn(0,"userID"));
        	application.gv_glnCode     = this.gfn_nvl(this.ds_login.getColumn(0,"glnCode"));
        	application.gv_mbcoType    = this.gfn_nvl(this.ds_login.getColumn(0,"mbcoType"));
        	application.gv_companyName = this.gfn_nvl(this.ds_login.getColumn(0,"companyName"));
        	application.gv_userName    = this.gfn_nvl(this.ds_login.getColumn(0,"userName"));
        	application.gv_companyType = this.gfn_nvl(this.ds_login.getColumn(0,"commanyType"));
        	application.gv_lastLoginDt = this.gfn_nvl(this.ds_login.getColumn(0,"lastLoginDt"));
        	application.gv_userType    = this.gfn_nvl(this.ds_login.getColumn(0,"userType"));	
        }

        this.fn_callMymenu = function()
        {
           var sSvcID        = "retrieveMyMenuList";      
           var sURL          = "svc::rest/pt/retrieveMyMenuList";
           var sInDatasets   = "";
           var sOutDatasets  = "gds_myMenu=ds_myMenu";   
           var sArgument     = "";
           var sCallbackFunc = "fn_callBack";
           var sTranType     = "S"; // U:저장/삭제, S:조회         
           this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType)
        }

        this.fn_callMenuList = function()
        {
        	var sGlnCode      = this.ds_login.getColumn(0,"glnCode");

        	var sSvcID        = "retrieveMenuList";
        	var sURL          = "svc::rest/mg/retrieveMenuListAll";		// svc = http://localhost:8080/nhvan/
        	var sInDatasets   = "";
        	var sOutDatasets  = "gds_menu=ds_menu gds_userInfoMenu=ds_my_menu";
        	var sArgument     = "glnCode="+sGlnCode;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	application.set_usewaitcursor(false);
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("oninit", this.Intro_oninit, this);
            this.Div00.grd_notice.addEventHandler("oncellclick", this.grd_oncellclick, this);
            this.Div02.btn_remote.addEventHandler("onclick", this.button_onclick, this);
            this.Div01.grd_bbs.addEventHandler("oncellclick", this.grd_oncellclick, this);
            this.div_login.btn_login.addEventHandler("onclick", this.btn_login_onclick, this);

        };

        this.loadIncludeScript("Intro_admin.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
