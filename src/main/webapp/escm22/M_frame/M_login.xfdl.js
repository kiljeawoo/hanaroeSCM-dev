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
                this.set_name("M_login");
                this.set_classname("M_login");
                this.set_titletext("모바일 로그인");
                this.set_visible("true");
                this._setFormPosition(0,0,540,922);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_login", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"userKey\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"userID\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"glnCode\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"mbcoType\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"companyName\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"userName\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"commanyType\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"lastLoginDt\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"userType\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_menu", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAY_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">01000000</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_NAME\">수주</Col><Col id=\"SVC_GROUP\"/><Col id=\"FILE_NAME\"/><Col id=\"DISPLAY_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">01001001</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">수주내역조회</Col><Col id=\"SVC_GROUP\">OMG.MB</Col><Col id=\"FILE_NAME\">OMG_DS_SC_8010</Col><Col id=\"DISPLAY_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">01001002</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">수주내역상세</Col><Col id=\"SVC_GROUP\">OMG.MB</Col><Col id=\"FILE_NAME\">OMG_DS_SC_8011</Col><Col id=\"DISPLAY_YN\">N</Col></Row><Row><Col id=\"MENU_ID\">02000000</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_NAME\">배송</Col><Col id=\"SVC_GROUP\"/><Col id=\"FILE_NAME\"/><Col id=\"DISPLAY_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">02001001</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">배송예정서 일반등록</Col><Col id=\"SVC_GROUP\">OMG.MB</Col><Col id=\"FILE_NAME\">OMG_DS_SC_8020</Col><Col id=\"DISPLAY_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">02001002</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">배송상품상세</Col><Col id=\"SVC_GROUP\">OMG.MB</Col><Col id=\"FILE_NAME\">OMG_DS_SC_8021</Col><Col id=\"DISPLAY_YN\">N</Col></Row><Row><Col id=\"MENU_ID\">02001003</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">배송예정 직송등록</Col><Col id=\"SVC_GROUP\">OMG.MB</Col><Col id=\"FILE_NAME\">OMG_DS_SC_8030</Col><Col id=\"DISPLAY_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">02001004</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">배송상품상세</Col><Col id=\"SVC_GROUP\">OMG.MB</Col><Col id=\"FILE_NAME\">OMG_DS_SC_8031</Col><Col id=\"DISPLAY_YN\">N</Col></Row><Row><Col id=\"MENU_ID\">02002001</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">배송예정 거래처별 조회</Col><Col id=\"SVC_GROUP\">OMG.MB</Col><Col id=\"FILE_NAME\">OMG_DS_SC_8040</Col><Col id=\"DISPLAY_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">02003001</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">배송예정 상품별 조회</Col><Col id=\"SVC_GROUP\">OMG.MB</Col><Col id=\"FILE_NAME\">OMG_DS_SC_8050</Col><Col id=\"DISPLAY_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">02004001</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">미입고 패널티 조회</Col><Col id=\"SVC_GROUP\">OMG.MB</Col><Col id=\"FILE_NAME\">OMG_DS_SC_8060</Col><Col id=\"DISPLAY_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">02005001</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">배송응답서</Col><Col id=\"SVC_GROUP\">OMG.MB</Col><Col id=\"FILE_NAME\">OMG_DS_SC_8070</Col><Col id=\"DISPLAY_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">03000000</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_NAME\">검수</Col><Col id=\"SVC_GROUP\"/><Col id=\"FILE_NAME\"/><Col id=\"DISPLAY_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">03001001</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">검수실적_전표별 조회</Col><Col id=\"SVC_GROUP\">OMG.MB</Col><Col id=\"FILE_NAME\">OMG_DS_SC_8080</Col><Col id=\"DISPLAY_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">03001002</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">검수실적_전표별 상품상세</Col><Col id=\"SVC_GROUP\">OMG.MB</Col><Col id=\"FILE_NAME\">OMG_DS_SC_8081</Col><Col id=\"DISPLAY_YN\">N</Col></Row><Row><Col id=\"MENU_ID\">03002001</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">검수실적_직송분 조회</Col><Col id=\"SVC_GROUP\">OMG.MB</Col><Col id=\"FILE_NAME\">OMG_DS_SC_8090</Col><Col id=\"DISPLAY_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">03002002</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">검수실적_직송분 상품상세</Col><Col id=\"SVC_GROUP\">OMG.MB</Col><Col id=\"FILE_NAME\">OMG_DS_SC_8091</Col><Col id=\"DISPLAY_YN\">N</Col></Row><Row><Col id=\"MENU_ID\">03003001</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">반입입고 의뢰 조회</Col><Col id=\"SVC_GROUP\">OMG.MB</Col><Col id=\"FILE_NAME\">OMG_DS_SC_8100</Col><Col id=\"DISPLAY_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">03003002</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">반품입고 상품상세</Col><Col id=\"SVC_GROUP\">OMG.MB</Col><Col id=\"FILE_NAME\">OMG_DS_SC_8101</Col><Col id=\"DISPLAY_YN\">N</Col></Row><Row><Col id=\"MENU_ID\">04000000</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_NAME\">판매</Col><Col id=\"SVC_GROUP\"/><Col id=\"FILE_NAME\"/><Col id=\"DISPLAY_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">04001001</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">마트별/상품별 판매정보</Col><Col id=\"SVC_GROUP\">OMG.MB</Col><Col id=\"FILE_NAME\">OMG_DS_SC_8110</Col><Col id=\"DISPLAY_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">04001002</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">마트별/상품별 판매정보 상세</Col><Col id=\"SVC_GROUP\">OMG.MB</Col><Col id=\"FILE_NAME\">OMG_DS_SC_8111</Col><Col id=\"DISPLAY_YN\">N</Col></Row><Row><Col id=\"MENU_ID\">04002001</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">상품별/마트별 판매정보</Col><Col id=\"SVC_GROUP\">OMG.MB</Col><Col id=\"FILE_NAME\">OMG_DS_SC_8120</Col><Col id=\"DISPLAY_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">04002002</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">상품별/마트별 판매정보 상세</Col><Col id=\"SVC_GROUP\">OMG.MB</Col><Col id=\"FILE_NAME\">OMG_DS_SC_8121</Col><Col id=\"DISPLAY_YN\">N</Col></Row><Row><Col id=\"MENU_ID\">05000000</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_NAME\">재고</Col><Col id=\"SVC_GROUP\"/><Col id=\"FILE_NAME\"/><Col id=\"DISPLAY_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">05001001</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">마트별/상품별 재고정보</Col><Col id=\"SVC_GROUP\">OMG.MB</Col><Col id=\"FILE_NAME\">OMG_DS_SC_8130</Col><Col id=\"DISPLAY_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">05001002</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">마트별/상품별 재고정보 상세</Col><Col id=\"SVC_GROUP\">OMG.MB</Col><Col id=\"FILE_NAME\">OMG_DS_SC_8131</Col><Col id=\"DISPLAY_YN\">N</Col></Row><Row><Col id=\"MENU_ID\">05002001</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">상품별/마트별 판매정보</Col><Col id=\"SVC_GROUP\">OMG.MB</Col><Col id=\"FILE_NAME\">OMG_DS_SC_8140</Col><Col id=\"DISPLAY_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">05002002</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">상품별/마트별 판매정보 상세</Col><Col id=\"SVC_GROUP\">OMG.MB</Col><Col id=\"FILE_NAME\">OMG_DS_SC_8141</Col><Col id=\"DISPLAY_YN\">N</Col></Row><Row><Col id=\"MENU_ID\">06000000</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_NAME\">회계</Col><Col id=\"SVC_GROUP\"/><Col id=\"FILE_NAME\"/><Col id=\"DISPLAY_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">06001001</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">전자세금계산서 조회</Col><Col id=\"SVC_GROUP\">OMG.MB</Col><Col id=\"FILE_NAME\">OMG_DS_SC_8150</Col><Col id=\"DISPLAY_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">06002001</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">일잔액장조회</Col><Col id=\"SVC_GROUP\">OMG.MB</Col><Col id=\"FILE_NAME\">OMG_DS_SC_8160</Col><Col id=\"DISPLAY_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">06003001</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">월잔액장조회</Col><Col id=\"SVC_GROUP\">OMG.MB</Col><Col id=\"FILE_NAME\">OMG_DS_SC_8170</Col><Col id=\"DISPLAY_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">07000000</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_NAME\">커뮤니티</Col><Col id=\"SVC_GROUP\"/><Col id=\"FILE_NAME\"/><Col id=\"DISPLAY_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">07001001</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">공지사항</Col><Col id=\"SVC_GROUP\">OMG.MB</Col><Col id=\"FILE_NAME\">OMG_DS_SC_8180</Col><Col id=\"DISPLAY_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">07002001</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">설정</Col><Col id=\"SVC_GROUP\">OMG.MB</Col><Col id=\"FILE_NAME\">OMG_DS_SC_8190</Col><Col id=\"DISPLAY_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">07003001</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">알림</Col><Col id=\"SVC_GROUP\">OMG.MB</Col><Col id=\"FILE_NAME\">OMG_DS_SC_8200</Col><Col id=\"DISPLAY_YN\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "0", "0", "540", "922", null, null, this);
            obj.getSetter("taborder").set("2");
            obj.set_cssclass("sta_LOGIN_Image");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_id", "absolute", "40", "187", "460", "64", null, null, this);
            obj.set_taborder("0");
            obj.set_cssclass("edt_LOGIN_IDPW");
            obj.set_value("do000015");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pw", "absolute", "40", "260", "460", "64", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("edt_LOGIN_IDPW");
            obj.set_password("true");
            obj.set_value("doru2015");
            this.addChild(obj.name, obj);

            obj = new Button("btn_login", "absolute", "40", "401", "460", "78", null, null, this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_LOGIN_Login");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_saveID", "absolute", "40", "324", "226", "64", null, null, this);
            obj.set_taborder("4");
            obj.set_text("아이디 저장");
            obj.set_cssclass("chk_LOGIN_IDPW");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_autoLogin", "absolute", "265", "324", "210", "64", null, null, this);
            obj.set_taborder("5");
            obj.set_text("자동로그인");
            obj.set_cssclass("chk_LOGIN_IDPW");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 540, 922, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("M_login");
            		p.set_titletext("모바일 로그인");
            		p.set_visible("true");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("M_login.xfdl", "lib::comLib.xjs");
        this.registerScript("M_login.xfdl", function() {
        //include "lib::comLib.xjs";

        this.M_login_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        	
        	this.edt_id.set_value("");
        	this.edt_pw.set_value("");
        	
        	this.edt_id.set_value(application.getPrivateProfile("userid"));
        	this.chk_saveID.set_value(application.getPrivateProfile("chkIDsave"));
        	this.chk_autoLogin.set_value(application.getPrivateProfile("chkAutoLogin"));
        	
        	if(this.chk_autoLogin.value == true){
        		this.edt_pw.set_value(application.getPrivateProfile("userpw"));
        		this.btn_login_onclick();
        		return;
        	}
        	
        	//자동로그인이 아닌 경우, 로그인화면을 보여준다
        	//this.set_visible(true);
        }

        this.btn_login_onclick = function(obj,e)
        {
        	var sId = this.edt_id.value;
        	var sPW = this.edt_pw.value;
        	
        	if(this.gfn_isNull(sId)){
        		alert("아이디를 입력하세요.");
        		this.edt_id.setFocus();
        		return;
        	}
        	
        	if(this.gfn_isNull(sPW)){
        		alert("비밀번호를 입력하세요.");
        		this.edt_pw.setFocus();
        		return;
        	}
        	
         	this.fn_localSave();
        	
        	var sParam        = "MB_ID="+sId+" MB_PW="+sPW;

        	var sSvcID        = "retrieveSession";
        	var sURL          = "svc::rest/pt/retrieveSession";		// svc = http://localhost:8080/nhvan/
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_login=ds_session";
        	var sArgument     = sParam;
        	var sCallbackFunc = "fn_callBackIntro";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_localSave = function()
        {
        	// 아이디저장 체크 시 아이디 저장
        	if ( this.chk_saveID.value == true) {
        		application.setPrivateProfile("userid",this.edt_id.value);
        		application.setPrivateProfile("chkIDsave",true);		
        	}else{
        		application.setPrivateProfile("userid","");
        		application.setPrivateProfile("chkIDsave",false);
        	}
        	
        	if ( this.chk_autoLogin.value == true) {
        		application.setPrivateProfile("chkAutoLogin",true);
        		application.setPrivateProfile("userpw",this.edt_pw.value);
        	}else{
        		application.setPrivateProfile("chkAutoLogin",false);
        		application.setPrivateProfile("userpw","");
        	}	
        }

        this.fn_callBackIntro = function(svcID,ErrorCode,ErrorMsg)
        {	
        	application.set_usewaitcursor(true);
        	
         	if(ErrorCode < 0) //에러
         	{
        		switch(svcID)
        		{			
        			case "retrieveSession":
        				alert("회원정보가 존재하지 않습니다.");
        				break;
        			
        			default:
        			
        				break;
        			
        		}
         	}else 
         	{
        		switch(svcID)
        		{
        			case "retrieveSession":
        		
        				if(this.ds_login.rowcount > 0){
        					this.fn_setGlobalVariable();
        					//this.fn_callMenuList();
        					//this.fn_callMymenu();
        					//this.go("m_frame::M_workFrame.xfdl");
        				}else{
        					alert("회원정보가 존재하지 않습니다.");
        					return;
        				}
        				
        				application.afrm_VFrameSet0.set_separatesize("0,*");
        				application.afrm_VFrameSet1.set_separatesize("75,*");
        				application.afrm_VFrameSet2.set_separatesize("0,*");
        				
        				application.afrm_HomeFrame.set_formurl("m_frame::M_main.xfdl");				
        				application.afrm_TitleFrame.set_formurl("m_frame::M_topFrame.xfdl");
        				break;
        				
        			default:
        			
        				break;	
        	
        		}
         	}
        }

        this.fn_setGlobalVariable = function()
        {
        	application.gv_userKey     = this.ds_login.getColumn(0,"userKey");
        	application.gv_userId      = this.ds_login.getColumn(0,"userID");
        	application.gv_glnCode     = this.ds_login.getColumn(0,"glnCode");
        	application.gv_mbcoType    = this.ds_login.getColumn(0,"mbcoType");
        	application.gv_companyName = this.ds_login.getColumn(0,"companyName");
        	application.gv_userName    = this.ds_login.getColumn(0,"userName");
        	application.gv_companyType = this.ds_login.getColumn(0,"commanyType");
        	application.gv_lastLoginDt = this.ds_login.getColumn(0,"lastLoginDt");
        	application.gv_userType    = this.ds_login.getColumn(0,"userType");
        }

        this.fn_callMenuList = function()
        {
        	application.gds_menu.copyData(this.ds_menu);
        }

        this.chk_saveID_onchanged = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.M_login_onload, this);
            this.btn_login.addEventHandler("onclick", this.btn_login_onclick, this);
            this.chk_saveID.addEventHandler("onchanged", this.chk_saveID_onchanged, this);

        };

        this.loadIncludeScript("M_login.xfdl");

       
    };
}
)();
