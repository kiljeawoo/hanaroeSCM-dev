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
                this.set_name("Sample023_SelectTreePos");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("grd", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Lev\" type=\"STRING\" size=\"256\"/><Column id=\"Column\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Lev\">0</Col><Col id=\"Column\">1 depth title 01</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">2 depth title 01</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 01</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 02</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 03</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 04</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 05</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">2 depth title 01</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 01</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 02</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 03</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 04</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 05</Col></Row><Row><Col id=\"Lev\">0</Col><Col id=\"Column\">1 depth title 02</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">2 depth title 01</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 01</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 02</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 03</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 04</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 05</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">2 depth title 01</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 01</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 02</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 03</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 04</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 05</Col></Row><Row><Col id=\"Lev\">0</Col><Col id=\"Column\">3 depth title 01</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">2 depth title 01</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">1 depth title 03</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 02</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 03</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 04</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 05</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">2 depth title 01</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 01</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 02</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 03</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 04</Col></Row><Row><Col id=\"Lev\">2</Col><Col id=\"Column\">3 depth title 05</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid03", "absolute", "7.71%", "85", null, "227", "72.17%", null, this);
            obj.set_taborder("0");
            obj.set_binddataset("grd");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"188\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"Grid Tree\"/></Band><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" text=\"bind:Column\" treelevel=\"bind:Lev\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "7.71%", "61", null, "21", "84.86%", null, this);
            obj.set_taborder("1");
            obj.set_text("Tree Grid");
            obj.set_cssclass("sta_WFSA_Label");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "31.25%", "91", null, "21", "54.79%", null, this);
            obj.set_taborder("2");
            obj.set_text("1 depth title 03 선택");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Sample023_SelectTreePos");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("Sample023_SelectTreePos.xfdl", "lib::comLib.xjs");
        this.registerScript("Sample023_SelectTreePos.xfdl", function() {
        //include "lib::comLib.xjs";

        this.Button00_onclick = function(obj,e)
        {	
        	this.gfn_selectTreePos(this.Grid03, "Column", "1 depth title 03");
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("Sample023_SelectTreePos.xfdl");

       
    };
}
)();
