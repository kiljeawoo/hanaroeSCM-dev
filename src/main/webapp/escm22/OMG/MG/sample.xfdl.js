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
                this.set_name("sample");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Edit("Edit00", "absolute", "25", "35", "69.14%", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_maxlength("65");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "52", "108", "11.72%", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("한글테스트");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("sample");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("sample.xfdl", "lib::comLib.xjs");
        this.registerScript("sample.xfdl", function(exports) {
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

        this.fn_afterFormOnload = function()
        {

               
        }

        ///rest/mg/test
        this.Button00_onclick = function(obj,e)
        {
        		var sParams = 
        					"test="+this.Edit00.value					
        				   ;
        							
        		var sSvcID        = "test";		
        		var sURL          = "svc::rest/mg/test";	
        		var sInDatasets   = "";
        		var sOutDatasets  = "";	
        		var sArgument     = sParams;
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "S"; // U:저장/삭제, S:조회			
        		trace("param>>>>>>>>>>>>>>>>>>>>>>>"+sParams);
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        

          /*콜백메소드*/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        	//저장시 사용되는 ds초기화	
        	trace("콜백");
        	 
        }

         
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("sample.xfdl", true);

       
    };
}
)();
