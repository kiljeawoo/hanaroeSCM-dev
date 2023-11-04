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
                this.set_name("Sample004_Transaction");
                this.set_classname("Sample004_Transaction");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list00", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"KEY\" type=\"INT\" size=\"32\"/><Column id=\"MESSAGE\" type=\"string\" size=\"32\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"KEY\">1</Col><Col id=\"MESSAGE\">a</Col><Col id=\"Column0\">ㄱ</Col></Row><Row><Col id=\"KEY\">2</Col><Col id=\"MESSAGE\">b</Col><Col id=\"Column0\">ㄴ</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_list01", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"KEY\" type=\"string\" size=\"32\"/><Column id=\"MESSAGE\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid00", "absolute", "2.93%", "102", null, "200", "26.27%", null, this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list00");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"KEY\"/><Cell col=\"1\" text=\"MESSAGE\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" text=\"bind:KEY\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" text=\"bind:MESSAGE\"/></Band><Band id=\"summary\"><Cell displaytype=\"text\" text=\"expr:comp.parent.ds_list00.getColumn(0,'MESSAGE')\"/><Cell col=\"1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "75.49%", "106", null, "21", "12.79%", null, this);
            obj.set_taborder("1");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "30", "324", null, "200", "269", null, this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_list01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"KEY\"/><Cell col=\"1\" disptype=\"normal\" text=\"MESSAGE\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:KEY\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:MESSAGE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Sample004_Transaction");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("test_Sample004_Transaction.xfdl", "lib::comLib.xjs");
        this.registerScript("test_Sample004_Transaction.xfdl", function() {
        //include "lib::comLib.xjs";

        this.Button00_onclick = function(obj,e)
        {
        	var sSvcID        = "getMenu";
        	var sURL          = "svc::rest/common/getMessageList";		// svc = http://localhost:8080/nhvan/
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_list00=message_list";
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_callBack = function(sId,eCode,eMsg)
        {
        	if(sId=="getAuthorityWorkplace"){
        		trace(this.ds_list01.saveXML());
        	}
        	//trace(this.ds_list00.saveXML());
        }

        this.ds_list00_onrowposchanged = function(obj,e)
        {
        	if(e.reason == 51) {
        		this.ds_list00.set_enableevent(false);
        		this.ds_list00.set_rowposition(-1);
        		this.ds_list00.set_enableevent(true);
        		return;
        	}
        	
        	this.fn_search();
        }

        this.fn_search = function()
        {
        	var strParam = "userKey=hurukku na_trpl_c=DDDDDDD" ;
        	
        	var sSvcID        = "getAuthorityWorkplace";
        	var sURL          = "svc::rest/common/getRightsBizPlace";		// svc = http://localhost:8080/nhvan/
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_list01=data";
        	var sArgument     = strParam;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_list00.addEventHandler("onrowposchanged", this.ds_list00_onrowposchanged, this);
            this.ds_list00.addEventHandler("onload", this.ds_list00_onload, this);
            this.ds_list00.addEventHandler("canrowposchange", this.ds_list00_canrowposchange, this);
            this.Grid00.addEventHandler("oncellclick", this.Grid00_oncellclick, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("test_Sample004_Transaction.xfdl");

       
    };
}
)();
