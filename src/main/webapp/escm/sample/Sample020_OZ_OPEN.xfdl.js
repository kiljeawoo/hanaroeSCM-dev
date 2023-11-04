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
                this.set_name("TEST_OZ_OPEN");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_test", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"aaa\" type=\"STRING\" size=\"256\"/><Column id=\"bbb\" type=\"STRING\" size=\"256\"/><Column id=\"ccc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"aaa\">0</Col><Col id=\"bbb\">123</Col><Col id=\"ccc\">456</Col></Row><Row><Col id=\"aaa\">0</Col><Col id=\"bbb\">dfas</Col><Col id=\"ccc\">ads</Col></Row><Row><Col id=\"aaa\">0</Col><Col id=\"bbb\">asd</Col><Col id=\"ccc\">asd</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "45.7%", "17", null, "21", "42.58%", null, this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00", "absolute", "40.14%", "67", null, "0", "0", null, this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "60.94%", "12", null, "24", "31.74%", null, this);
            obj.set_taborder("2");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser01", "absolute", "46.19%", "45", null, "200", "24.02%", null, this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_test", "absolute", "1.86%", "18", null, "235", "58.98%", null, this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_test");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"66\"/><Column size=\"91\"/><Column size=\"108\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"a\"/><Cell col=\"1\" text=\"b\"/><Cell col=\"2\" text=\"c\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" text=\"bind:aaa\"/><Cell col=\"1\" text=\"bind:bbb\"/><Cell col=\"2\" text=\"bind:ccc\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "49.9%", "268", null, "12", "41.11%", null, this);
            obj.set_taborder("5");
            obj.set_text("Button02");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("TEST_OZ_OPEN");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("Sample020_OZ_OPEN.xfdl", "lib::comLib.xjs");
        this.registerScript("Sample020_OZ_OPEN.xfdl", function() {
        //include "lib::comLib.xjs";

        
        this.testInit = function(){
        	this.grid_test.afterFnc = this.abc;
        	this.addEventSingleCheckbox(this.grid_test);
        };

        this.abc = function(result,row){
        trace('aaa> '+result);
        trace('row> '+row);

        };
        this.Button00_onclick = function(obj,e)
        {
        	this.WebBrowser00.set_url("javascript:window.open('http://www.naver.com','popup','top=0px,left=0px,height=600px,width=800px')"); 
        	//system.execBrowser('http://www.naver.com');
        };

        
        this.test11 = function(){
        	var v1 = this.WebBrowser01.getProperty("document");
        	var v = this.WebBrowser01.getProperty("document").getProperty("body");//.getProperty("innerHTML"); 	
        	var fnc = "<script>function abc(){alert('abc')}</script>";
        	v.setProperty('onload', 'abc()');
        	v.setProperty("innerHTML", fnc); 
        	return;

        	var tag = '';
        	
        	tag+= "var method = 'post';";
        	tag+= "var path = 'http://www.naver.com';";
        	tag+= "var name = 'ozForm';";
            tag+= "var form = document.createElement('form');";
            tag+= "form.setAttribute('name', name);";
            tag+= "form.setAttribute('method', method);";
            tag+= "form.setAttribute('action', path);";
        	tag+= "var hiddenField = document.createElement('input');";
        	tag+= "hiddenField.setAttribute('type', 'hidden');";
        	tag+= "hiddenField.setAttribute('name', 'param');";
        	tag+= "hiddenField.setAttribute('value', '1234');";
        	tag+= "form.appendChild(hiddenField);";
            tag+= "document.body.appendChild(form);";
            tag+= "document.ozForm.target = 'ozPopup';";
            //window.open('','ozPopup','top=0px,left=0px,height=600px,width=800px');
            tag+= "window.open('','ozPopup','width=300, height=400, menubar=no,status=yes,scrollbars=no');";
        	tag+= "document.ozForm.submit();";
        	this.WebBrowser00.set_url('javascript:'+tag);
        };
        this.Button02_onclick = function(obj,e)
        {
        	var a= this.checkColIndex(this.grid_test);
        	trace('chk> '+a);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.testInit, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.test11, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);

        };

        this.loadIncludeScript("Sample020_OZ_OPEN.xfdl");

       
    };
}
)();
