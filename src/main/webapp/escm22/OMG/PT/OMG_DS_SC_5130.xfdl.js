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
                this.set_name("OMG_DS_SC_5130");
                this.set_titletext("비밀번호변경");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static10", "absolute", "5.98%", "312", null, "29", "5.98%", null, this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0%", "0", null, "21", "70.11%", null, this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "98.01%", "0", null, "490", "0.12%", null, this);
            obj.set_taborder("4");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "91.16%", "21", null, "8", "1.87%", null, this);
            obj.set_taborder("5");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "30.01%", "104", null, "44", "23.16%", null, this);
            obj.set_taborder("6");
            obj.set_text("주기적인(90일) 비밀번호 변경을 통해");
            obj.set_usedecorate("true");
            obj.style.set_font("bold 15 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "30.01%", "150", null, "44", "23.16%", null, this);
            obj.set_taborder("7");
            obj.set_text("개인정보를 안전하게 보호하세요.");
            obj.set_usedecorate("true");
            obj.style.set_font("bold 15 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static118", "absolute", "5.98%", "340", null, "29", "5.98%", null, this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static115", "absolute", "5.98%", "284", null, "29", "5.98%", null, this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static113", "absolute", "5.98%", "256", null, "29", "5.98%", null, this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "5.98%", "340", null, "29", "79.08%", null, this);
            obj.set_taborder("11");
            obj.set_text("비밀번호생성규칙");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static114", "absolute", "5.98%", "284", null, "29", "79.08%", null, this);
            obj.set_taborder("12");
            obj.set_text("신규비밀번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "5.98%", "256", null, "29", "79.08%", null, this);
            obj.set_taborder("13");
            obj.set_text("기존비밀번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_new_pw01", "absolute", "21.3%", "288", null, "21", "59.03%", null, this);
            obj.set_taborder("2");
            obj.set_password("true");
            obj.set_maxlength("16");
            obj.set_lengthunit("utf8");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00", "absolute", "13.82%", "89", null, "127", "72.23%", null, this);
            obj.set_taborder("14");
            obj.set_image("URL('theme://images/img_PassWord.jpg')");
            obj.style.set_border("0 solid #bfbfbfff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", "92.9%", "0", null, "21", "1.99%", null, this);
            obj.set_taborder("15");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_new_pw02", "absolute", "21.3%", "316", null, "21", "59.03%", null, this);
            obj.set_taborder("3");
            obj.set_password("true");
            obj.set_maxlength("16");
            obj.set_lengthunit("utf8");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "5.98%", "312", null, "29", "79.08%", null, this);
            obj.set_taborder("16");
            obj.set_text("신규비밀번호확인");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pw", "absolute", "21.3%", "260", null, "21", "59.03%", null, this);
            obj.set_taborder("0");
            obj.set_password("true");
            obj.set_maxlength("16");
            this.addChild(obj.name, obj);

            obj = new Static("sta_text", "absolute", "21.67%", "344", null, "21", "6.97%", null, this);
            obj.set_taborder("18");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("비밀번호변경");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_5130.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_5130.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {   
           this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {   
        	/*결과값 초기화*/
        	this.sta_text.set_text("8~16자리 영문,숫자의 조합으로 이루어져야합니다.");
        // 						  +"- 연속되는 영문 대/소문자, 숫자는 보안을 위하여 금지합니다.\n"
        // 						  +"- 같은 영문 대/소문자 3자 이상은 피해서 만들어주세요.");
        }
         
         
        /***************************************************
        	비밀번호조회 메소드
        ****************************************************/
        this.btn_save_onclick = function(obj,e)
        {
        		
        	if(this.gfn_isNull(this.edt_pw.value)){
        		alert("비밀번호를 입력해주세요.");		
        		this.edt_pw.setFocus();
        		return false;
        	}		
        	if(this.gfn_isNull(this.edt_new_pw01.value)){
        		alert("신규 비밀번호를 입력해주세요.");		
        		this.edt_new_pw01.setFocus();
        		return false;
        	}		
        	if(this.gfn_isNull(this.edt_new_pw02.value)){
        		alert("신규 비밀번호 확인을 입력해주세요.");		
        		this.edt_new_pw02.setFocus();
        		return false;
        	}
        	
        	if(this.edt_new_pw01.value != this.edt_new_pw02.value){
        		alert("신규 비밀번호와 신규 비밀번호 확인 값이 동일하지 않습니다.");		
        		this.edt_new_pw01.setFocus();
        		return false;
        	}
        	if(!this.gfn_pwValidation(this.edt_new_pw01.value)){
        		return false;
        	}
        			
        	
        	var sSvcID        = "changePW";
        	var sURL          = "svc::rest/pt/changePW";
        	var sInDatasets   = "";
        	var sOutDatasets  = "";
        	var sArgument     = "pw="+this.edt_pw.value+" new_pw="+this.edt_new_pw01.value;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회		 
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        } 

        /*콜백메소드*/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        	if(ErrorCode ==-1){				
        		this.gfn_getMessage("alert", "error.message.server.exception");	// 서버 API 실행중 오류가 발생하였습니다. 관리자에 문의하세요.
        	}else if(ErrorCode ==-2) {	 
        		this.gfn_getMessage("alert", "error.message.noUserPw");			// 비밀번호가 잘못되었습니다.		
        	}else if (ErrorCode ==0){
        		this.gfn_getMessage("alert", "result.message.savePw.success");	// 비밀번호가 정상적으로 변경되었습니다. 재 로그인해주시기 바랍니다.
        		this.gfn_logout();	
        	}
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Static04.addEventHandler("onclick", this.Div05_Static03_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_5130.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
