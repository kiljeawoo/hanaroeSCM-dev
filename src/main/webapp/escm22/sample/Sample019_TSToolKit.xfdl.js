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
                this.set_titletext("New Form");
                this._setFormPosition(0,0,709,697);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col></Row><Row><Col id=\"Column0\">1</Col></Row><Row><Col id=\"Column0\">2</Col></Row><Row><Col id=\"Column0\">3</Col></Row><Row><Col id=\"Column0\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Plugin("Plugin00", "absolute", "0.71%", "9", null, "24", "79.69%", null, this);
            obj.setProperty("taborder", "3");
            obj.setProperty("classid", "{55D9860A-AB9C-44A1-BB74-75AF7F805333}");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "68.41%", "250", null, "21", "19.89%", null, this);
            obj.set_taborder("5");
            obj.set_text("서명하기");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "68.41%", "464", null, "21", "19.89%", null, this);
            obj.set_taborder("9");
            obj.set_text("검증하기");
            this.addChild(obj.name, obj);

            obj = new TextArea("plainText", "absolute", "6.49%", "100", null, "140", "19.89%", null, this);
            obj.set_taborder("10");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new TextArea("plainText00", "absolute", "6.49%", "308", null, "140", "19.89%", null, this);
            obj.set_taborder("11");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new TextArea("plainText01", "absolute", "6.49%", "500", null, "140", "19.89%", null, this);
            obj.set_taborder("12");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "68.41%", "656", null, "21", "19.89%", null, this);
            obj.set_taborder("13");
            obj.set_text("화면지우기");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "374", "60", "191", "27", null, null, this);
            obj.set_taborder("14");
            obj.set_value("1234567890");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "260", "56", "92", "28", null, null, this);
            obj.set_taborder("15");
            obj.set_text("사업자번호 : ");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 709, 697, this,
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
        this.addIncludeScript("Sample019_TSToolKit.xfdl", "lib::comLib.xjs");
        this.addIncludeScript("Sample019_TSToolKit.xfdl", "lib::comTSToolKit.xjs");
        this.registerScript("Sample019_TSToolKit.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comTSToolKit.xjs", null, exports); }	//include "lib::comTSToolKit.xjs";

        this.test_onload = function(obj,e)
        {
        }

        var rtnSign = "";
        //서명하기
        this.Button01_onclick = function(obj,e)
        {
        	var plainText = this.plainText.value;
        	//var sRtn = this.gfn_signTradeSign(this.Plugin00,plainText,this.Edit00.value);
        	//obj : ActiveX PlugIn
        	//sVal : 서명할 데이터
        	//sBzno : 사용자 본인 인증시 필요한 데이터 - 본인확인 필요없을시 ""
        	//callback : 서명 완료시 콜백받을 함수 
        	//id : 함수구분값 
        	//this.gfn_signTradeSign = function(obj, sVal, sBzno, callback, id)
        	this.gfn_signTradeSign(this.Plugin00,plainText,this.Edit00.value,"fn_signCallback", "screenId");
        	
        	
        }

        //callback함수 (서명된데이터||"ERROR", "화면구분값")
        this.fn_signCallback = function(rtnValue,id)
        {
        	if(rtnValue == "ERROR")
        	{
        		alert("전자서명시 오류가 있습니다.");
        	}
        	else
        	{
        		switch(id)
        		{
        			case "screenId":
        				alert("성공하였습니다.");
        				this.plainText00.set_value(rtnValue);
        				break;
        		}
        	}
        	
        }

        //검증하기
        this.Button00_onclick = function(obj,e)
        {
        	var plainText = this.plainText00.value;
        	var sRtn = this.gfn_verifyTradeSign(this.Plugin00,plainText);
        	
        	this.plainText01.set_value(sRtn);
        }

        this.Button02_onclick = function(obj,e)
        {
        	this.reload();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.test_onload, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);

        };

        this.loadIncludeScript("Sample019_TSToolKit.xfdl", true);

       
    };
}
)();
