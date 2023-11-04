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
                this.set_titletext("회원가입테스트");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,1056,387);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_USR_TP", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_C_EXPL\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_HP", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_C_EXPL\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static09", "absolute", "0", "76", "17", "73", null, null, this);
            obj.set_taborder("8");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "75", "99", "120", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_text("협력업체회원가입");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "205", "99", "120", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_text("본부회원가입");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "335", "99", "120", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_text("하나로마트회원가입");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "75", "142", "120", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_text("전환회원회원가입");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "206", "142", "120", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_text("미전환회원회원가입");
            this.addChild(obj.name, obj);

            obj = new Button("Button05", "absolute", "75", "185", "120", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_text("협력업체회원변경");
            this.addChild(obj.name, obj);

            obj = new Button("Button06", "absolute", "205", "185", "120", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_text("본부회원변경");
            this.addChild(obj.name, obj);

            obj = new Button("Button07", "absolute", "335", "185", "120", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_text("하나로마트회원변경");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_MB_ID", "absolute", "17.23%", "232", null, "21", "71.12%", null, this);
            obj.set_taborder("17");
            obj.set_value("do000015");
            obj.set_maxlength("9");
            this.addChild(obj.name, obj);

            obj = new Static("mb_id", "absolute", "8.14%", "231", null, "21", "80.49%", null, this);
            obj.set_taborder("18");
            obj.set_text("아이디");
            this.addChild(obj.name, obj);

            obj = new Button("bnt_idChk", "absolute", "30.3%", "232", null, "21", "58.33%", null, this);
            obj.set_taborder("19");
            obj.set_text("아이디체크");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1056, 387, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("회원가입테스트");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("popup02.xfdl", "lib::comLib.xjs");
        this.registerScript("popup02.xfdl", function() {
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
        	
        }

        /***************************************************
        	회원종류에 따른 화면 호출
        ****************************************************/
        this.fn_joinUser = function (url) {	

        	var oArg = {paramMode:"U", dsArg:""};	
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("popId",url,oArg,sOption,sPopupCallBack);
        }

        /*협력업체회원가입*/
        this.Button00_onclick = function(obj,e)
        {
        	this.fn_joinUser("OMG.PT::OMG_DS_SC_5110.xfdl");			
        }

        /*본부회원가입*/
        this.Button01_onclick = function(obj,e)
        {
        		this.fn_joinUser("OMG.PT::OMG_DS_SC_5111.xfdl");
        }

        this.Button02_onclick = function(obj,e)
        {
        		this.fn_joinUser("OMG.PT::OMG_DS_SC_5112.xfdl");
        }

        this.bnt_idChk_onclick = function(obj,e)
        {
        	
        /***************************************************
        	ID validation
        ****************************************************/

                
        	if(this.gfn_isNull(this.edt_MB_ID.value)){
        		alert("회원ID를 입력 하세요");	
        		this.edt_MB_ID.setFocus();
        		return false;
        	}  	  
        	  
            /*ID체크로직*/    		
        	var idReg = /^[[a-zA-Z]{2}[[a-zA-Z0-9+]{5,7}$/g;
        	if( !idReg.test(this.edt_MB_ID.value)){
        		alert("회원ID는 영문자 두자리로 시작하는 7-9자 영문자 또는 숫자이어야 합니다.\n 예) aa1478 ");
        		return false;
        	}
        	
        	var id_chk_num = this.edt_MB_ID.value.search(/[0-9]/g); 
        	var id_chk_eng = this.edt_MB_ID.value.search(/[a-z]/ig); 
        	if(id_chk_num < 0 || id_chk_eng < 0){ 
        		alert("회원ID는 숫자와 영문자를 혼용하여야 합니다.\n 예) aa1478 ");
        		return false;
        	}    
            alert("성공");
        	return true;

        
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);
            this.bnt_idChk.addEventHandler("onclick", this.bnt_idChk_onclick, this);

        };

        this.loadIncludeScript("popup02.xfdl");

       
    };
}
)();
