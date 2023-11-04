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
                this.set_name("popup4");
                this._setFormPosition(0,0,1024,768);
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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column5\">2015-04-04</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\"/><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\"/><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">7</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">8</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("B001", "absolute", "5.37%", "33", null, "135", "78.71%", null, this);
            obj.set_taborder("0");
            obj.set_text("상품조회");
            this.addChild(obj.name, obj);

            obj = new Button("B002", "absolute", "25.78%", "33", null, "135", "58.3%", null, this);
            obj.set_taborder("1");
            obj.set_text("상품분류조회");
            this.addChild(obj.name, obj);

            obj = new Button("B003", "absolute", "5.37%", "201", null, "135", "78.71%", null, this);
            obj.set_taborder("2");
            obj.set_text("수요처조회");
            this.addChild(obj.name, obj);

            obj = new Button("B004", "absolute", "25.78%", "209", null, "135", "58.3%", null, this);
            obj.set_taborder("3");
            obj.set_text("공급처조회");
            this.addChild(obj.name, obj);

            obj = new Button("B005", "absolute", "5.47%", "377", null, "135", "78.61%", null, this);
            obj.set_taborder("4");
            obj.set_text("공병/공상자조회");
            this.addChild(obj.name, obj);

            obj = new Button("B006", "absolute", "25.78%", "377", null, "135", "58.3%", null, this);
            obj.set_taborder("5");
            obj.set_text("바이어조회");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "547", "71", "120", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_text("다운로드");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup4");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("Common_PopupTest.xfdl", "lib::comLib.xjs");
        this.registerScript("Common_PopupTest.xfdl", function() {
        //include "lib::comLib.xjs"

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj,e);
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	trace(" strId : " + strId + " strVal : " + strVal);
        }

        this.fn_afterFormOnload = function()
        {
        	trace("fn_afterFormOnload");
        }

        this.B001_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"U", dsArg:this.Dataset00};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("popId","POPUP::POPUP_SRC_WRS.xfdl",oArg,sOption,sPopupCallBack);	    	
        }

        this.B002_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"U", dsArg:this.Dataset00};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("popId","POPUP::POPUP_SRC_WRS_CLF.xfdl",oArg,sOption,sPopupCallBack);	    

        }

        this.B003_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"U", dsArg:this.Dataset00};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("popId","POPUP::POPUP_SRC_RVOPL_TRPL.xfdl",oArg,sOption,sPopupCallBack);	    
        	
        }

        this.B004_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"U", dsArg:this.Dataset00};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("popId","POPUP::POPUP_SRC_SPYPL_TRPL.xfdl",oArg,sOption,sPopupCallBack);	    
        	
        }

        this.B005_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"U", dsArg:this.Dataset00};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("popId","POPUP::POPUP_SRC_VCBTBX.xfdl",oArg,sOption,sPopupCallBack);	    
        	
        }

        
        this.B006_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"U", dsArg:this.Dataset00};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("popId","POPUP::POPUP_SRC_BUYER.xfdl",oArg,sOption,sPopupCallBack);	    
        }
        this.Button00_onclick = function(obj,e)
        {
        	var xhr = new XMLHttpRequest();
        	xhr.open("post","http://localhost:8080/nhvan/rest/sample/downloadExcel", true);
        	
        	xhr.onload=function() {
        		console.log(this.responseText);
        	};
        	xhr.send("userKey=hurukku");
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.B001.addEventHandler("onclick", this.B001_onclick, this);
            this.B002.addEventHandler("onclick", this.B002_onclick, this);
            this.B003.addEventHandler("onclick", this.B003_onclick, this);
            this.B004.addEventHandler("onclick", this.B004_onclick, this);
            this.B005.addEventHandler("onclick", this.B005_onclick, this);
            this.B006.addEventHandler("onclick", this.B006_onclick, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("Common_PopupTest.xfdl");

       
    };
}
)();
