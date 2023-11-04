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
                this.set_name("Sample016_multiCheckCombo");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,584,371);
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
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">테스트A</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">테스트B</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">테스트C</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"NAME\">테스트D</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"NAME\">테스트E</Col></Row><Row><Col id=\"CODE\">6</Col><Col id=\"NAME\">테스트F</Col></Row><Row><Col id=\"CODE\">7</Col><Col id=\"NAME\">테스트G</Col></Row><Row><Col id=\"CODE\">8</Col><Col id=\"NAME\">테스트H</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "339", "118", "120", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("_getValue");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "339", "158", "120", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_text("_clearValue");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "339", "198", "120", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_text("_enable");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "339", "240", "120", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_text("_readonly");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "339", "280", "120", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_text("_essential");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "120", "114", "140", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_url("common::multiCheckCombo.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "120", "8", "213", "85", null, null, this);
            obj.set_taborder("8");
            obj.set_text("Div의 url에 아래 Url입력\r\ncommon::multiCheckCombo.xfdl\r\n또는\r\n그냥 복사후 해당 화면 붙여넣기");
            obj.style.set_font("bold 10 arial");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 584, 371, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Sample016_multiCheckCombo");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::multiCheckCombo.xfdl");
        };
        
        // User Script
        this.addIncludeScript("Sample016_multiCheckCombo.xfdl", "lib::comLib.xjs");
        this.registerScript("Sample016_multiCheckCombo.xfdl", function() {
        //include "lib::comLib.xjs";
        /*

        Div는 풀경로로 선언해야 합니다.
        조회조건으로 사용하는 경우 Div으로 한번 감싸지므로 유의.
        예) this.div_search.div_combo.setFunctionName("fn_afterCall");

        */

        

        this.form_onload = function(obj,e)
        {
        	this.Div00.setFunctionName("fn_afterCall"); //후처리함수 선언
        	
        	//선택사항. 선언안하면 기본으로 설정됨. Width:140, displayrowcount:5
        	this.Div00._setWidth(140);                  //가로사이즈 설정(단, 140보다 작으면 기본사이즈인 140으로 설정됨)
        	this.Div00._setDisplayCount(9);            //보여줄 Row수. Combo의 displayrowcount와 동일.
        	
        	/*
        	_binddataset(innerdataset, codecolumn, datacolumn)
        	
        	Combo와 동일하게 innerdataset/codecolumn/datacolumn 설정
        	innerdataset: Dataset obj
        	codecolumn: innerdataset한 Dataset컬럼 중 Code값에 설정할 컬럼명
        	datacolumn: innerdataset한 Dataset컬럼 중 Name값에 설정할 컬럼명
        	*/
        	this.Div00._binddataset(this.Dataset00,"CODE","NAME");
        }

        this.fn_afterCall = function (sVal)
        {
        	trace(sVal.saveXML()); //Dataset으로 받음
        }

        this.Button00_onclick = function(obj,e)
        {
        	alert(this.Div00._getValue()); //Dataset으로 받음
        }

        this.Button02_onclick = function(obj,e)
        {
        	this.Div00._clearValue();
        }

        this.Button03_onclick = function(obj,e)
        {
        	this.Div00._enable(false); // true / false
        }
        this.Button01_onclick = function(obj,e)
        {
        	this.Div00._readonly(true); // true / false
        }

        this.Button04_onclick = function(obj,e)
        {
        	this.Div00._essential(true); // true / false
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);
            this.Button03.addEventHandler("onclick", this.Button03_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button04.addEventHandler("onclick", this.Button04_onclick, this);

        };

        this.loadIncludeScript("Sample016_multiCheckCombo.xfdl");
        this.loadPreloadList();
       
    };
}
)();
