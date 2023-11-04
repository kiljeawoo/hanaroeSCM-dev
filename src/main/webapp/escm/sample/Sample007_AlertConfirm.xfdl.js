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
                this.set_name("Sample007_AlertConfirm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "6.45%", "203", null, "53", "78.91%", null, this);
            obj.set_taborder("0");
            obj.set_text("Alert");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "24.02%", "203", null, "53", "61.33%", null, this);
            obj.set_taborder("1");
            obj.set_text("Confirm");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "41.6%", "203", null, "53", "43.75%", null, this);
            obj.set_taborder("2");
            obj.set_text("{0} 포함");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "59.18%", "203", null, "53", "26.17%", null, this);
            obj.set_taborder("3");
            obj.set_text("줄바꿈");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "425", "358", "150", "53", null, null, this);
            obj.set_taborder("4");
            obj.set_text("Get Msg");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "126", "373", "271", "21", null, null, this);
            obj.set_taborder("5");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Sample007_AlertConfirm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("Sample007_AlertConfirm.xfdl", "lib::comLib.xjs");
        this.registerScript("Sample007_AlertConfirm.xfdl", function() {
        //include "lib::comLib.xjs";

        /****************************************************** 
        this.gfn_getMessage("구분값","코드값",인자1,인자2..)
        - 구분값: "confirm" /"alert" . 필수
        - 코드값: 해당메세지의 코드값. 필수
        - 인자: 메세지에 추가할 인자값. 예) {0}가 {1}을 하였습니다. 
         
         줄바꿈은 ';'을 삽입하여 처리한다.
         예) 8건의 오류가 발견되었습니다.;담당자 02)938-1234

        ******************************************************/

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj,e);
        }

        //alert
        this.Button00_onclick = function(obj,e)
        {
        	this.gfn_getMessage("alert","common.update.success");
        }

        //confirm  true/ false 리턴
        this.Button01_onclick = function(obj,e)
        {
        	var strRtn = this.gfn_getMessage("confirm","common.update.success");
        	
        	alert("strRtn > > "+strRtn);
        }

        //{0}...{n}
        this.Button02_onclick = function(obj,e)
        {
        	this.gfn_getMessage("alert","user.test.input","비밀번호 입력","확인");
        }

        //줄바꿈(개행처리). 메세지등록할때 ';'를 넣어준다.  예) 8건의 오류가 발견되었습니다.;담당자 02)938-1234 
        this.Button03_onclick = function(obj,e)
        {
        	this.gfn_getMessage("alert","common.test.success");
        }

        
        this.Button04_onclick = function(obj,e)
        {
        	var strRtn = this.gfn_getTextMessage("user.test.input","비밀번호 입력","확인");
        	
        	this.Edit00.set_value(strRtn);
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);
            this.Button03.addEventHandler("onclick", this.Button03_onclick, this);
            this.Button04.addEventHandler("onclick", this.Button04_onclick, this);

        };

        this.loadIncludeScript("Sample007_AlertConfirm.xfdl");

       
    };
}
)();
