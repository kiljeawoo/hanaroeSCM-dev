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
                this.set_name("test");
                this.set_classname("test");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Edit("mb_id", "absolute", "61", "243", "140", "21", null, null, this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_checkID", "absolute", "212", "243", "120", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("회원ID검증");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("test");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("test.xfdl", "lib::comLib.xjs");
        this.registerScript("test.xfdl", function() {
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
        	ID validation
        ****************************************************/
        this.btn_checkID_onclick = function(obj,e){
                
                alert(111);
        	if(this.gfn_isNull(this.mb_id.value)){
        		alert("회원ID를 입력 하세요");	
        		this.user.setFocus();
        		return false;
        	}  	  
        	  
            /*ID체크로직*/    	
        	var idReg = /^[A-z]{2}[a-z0-9+]{5,7}$/g;
        	if( !idReg.test(this.mb_id.value)){
        		alert("회원ID는 영문자 두자리로 시작하는 7-9자 영문자 또는 숫자이어야 합니다.\n 예) aa14784 ");
        		return false;
        	}
        	
        	var id_chk_num = this.mb_id.value.search(/[0-9]/g); 
        	var id_chk_eng = this.mb_id.value.search(/[a-z]/ig); 
        	if(id_chk_num < 0 || id_chk_eng < 0){ 
        		alert("회원ID는 숫자와 영문자를 혼용하여야 합니다.\n 예) aa1478 ");
        		return false;
        	}    
            
        	return true;
         }
         
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_checkID.addEventHandler("onclick", this.btn_checkID_onclick, this);

        };

        this.loadIncludeScript("test.xfdl");

       
    };
}
)();
