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
                this.set_name("Sample009_ExcelGroup");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">엑셀버튼명1</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">엑셀버튼명2</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">엑셀버튼명3</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"NAME\">엑셀버튼명4</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button94", "absolute", "103", "93", "53", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_Group");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00", "absolute", "102", "140", "110", "87", null, null, this);
            obj.set_text("PopupDiv00");
            obj.style.set_background("azure");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new ListBox("ListBox02", "absolute", "0", "0", "110", "87", null, null, this.PopupDiv00);
            this.PopupDiv00.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_scrollbars("autovert");
            obj.set_innerdataset("@ds_list");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 110, 87, this.PopupDiv00,
            	//-- Layout function
            	function(p) {
            		p.set_text("PopupDiv00");
            		p.style.set_background("azure");
            		p.set_visible("false");

            	}
            );
            this.PopupDiv00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Sample009_ExcelGroup");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Sample009_ExcelGroupButton.xfdl", function(exports) {

        //Popupdiv위에 ListBox을 올리고 Dataset을 bind한다
        //(스크롤 발생하지 않도록 필요에 따라 Popupdiv/ListBox 사이즈 조절한다)

        //Popupdiv 호출
        this.Button94_onclick = function(obj,e)
        {
        	var nX = system.clientToScreenX(obj, 0) - system.clientToScreenX(application.mainframe, 0); 
        	var nY = system.clientToScreenY(obj, parseInt(obj.height)) - system.clientToScreenY(application.mainframe, 0); 
        	
        	this.PopupDiv00.trackPopup(nX, nY);
        }

        //ListBox 선택값 확인후, Popupdiv close
        this.Div00_ListBox02_onitemchanged = function(obj,e)
        {
        	trace(e.postvalue);
        	this.PopupDiv00.closePopup();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button94.addEventHandler("onclick", this.Button94_onclick, this);
            this.PopupDiv00.ListBox02.addEventHandler("onitemchanged", this.Div00_ListBox02_onitemchanged, this);

        };

        this.loadIncludeScript("Sample009_ExcelGroupButton.xfdl", true);

       
    };
}
)();
