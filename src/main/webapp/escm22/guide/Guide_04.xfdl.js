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
                this.set_name("guide02_new");
                this.set_titletext("Tab");
                this._setFormPosition(0,0,1008,800);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmb", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"lv\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"lv\">0</Col><Col id=\"data\">NEXACRO PACKAGE</Col></Row><Row><Col id=\"lv\">1</Col><Col id=\"data\">NEXACRO PACKAGE</Col></Row><Row><Col id=\"lv\">2</Col><Col id=\"data\">NEXACRO PACKAGE</Col></Row><Row><Col id=\"lv\">3</Col><Col id=\"data\">NEXACRO PACKAGE</Col></Row><Row><Col id=\"lv\">4</Col><Col id=\"data\">NEXACRO PACKAGE</Col></Row><Row><Col id=\"lv\">5</Col><Col id=\"data\">NEXACRO PACKAGE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Tab("Tab00", "absolute", "57", "79", "513", "209", null, null, this);
            obj.set_taborder("20");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.style.set_showextrabutton("false");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.Tab00);
            obj.set_text("탭페이지");
            this.Tab00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.Tab00);
            obj.set_text("tabpage2");
            this.Tab00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage3", this.Tab00);
            obj.set_text("tabpage3");
            this.Tab00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage4", this.Tab00);
            obj.set_text("tabpage4");
            this.Tab00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage5", this.Tab00);
            obj.set_text("tabpage5");
            this.Tab00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage6", this.Tab00);
            obj.set_text("tabpage6");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tab("Tab01", "absolute", "57", "388", "513", "137", null, null, this);
            obj.set_taborder("23");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.style.set_showextrabutton("true");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.Tab01);
            obj.set_text("tabpage1");
            this.Tab01.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.Tab01);
            obj.set_text("tabpage2");
            this.Tab01.addChild(obj.name, obj);
            obj = new Tabpage("tabpage3", this.Tab01);
            obj.set_text("tabpage3");
            this.Tab01.addChild(obj.name, obj);
            obj = new Tabpage("tabpage4", this.Tab01);
            obj.set_text("tabpage4");
            this.Tab01.addChild(obj.name, obj);
            obj = new Tabpage("tabpage5", this.Tab01);
            obj.set_text("tabpage5");
            this.Tab01.addChild(obj.name, obj);
            obj = new Tabpage("tabpage6", this.Tab01);
            obj.set_text("tabpage6");
            this.Tab01.addChild(obj.name, obj);
            obj = new Tabpage("tabpage7", this.Tab01);
            obj.set_text("tabpage7");
            this.Tab01.addChild(obj.name, obj);

            obj = new Tab("Tab02", "absolute", "57", "617", "505", "133", null, null, this);
            obj.set_taborder("25");
            obj.set_tabindex("0");
            obj.set_tabposition("bottom");
            obj.set_scrollbars("autoboth");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.Tab02);
            obj.set_text("tabpage1");
            this.Tab02.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.Tab02);
            obj.set_text("tabpage2");
            this.Tab02.addChild(obj.name, obj);
            obj = new Tabpage("tabpage3", this.Tab02);
            obj.set_text("tabpage3");
            this.Tab02.addChild(obj.name, obj);
            obj = new Tabpage("tabpage4", this.Tab02);
            obj.set_text("tabpage4");
            this.Tab02.addChild(obj.name, obj);
            obj = new Tabpage("tabpage5", this.Tab02);
            obj.set_text("tabpage5");
            this.Tab02.addChild(obj.name, obj);

            obj = new Tab("Tab04", "absolute", "678", "388", "241", "169", null, null, this);
            obj.set_taborder("28");
            obj.set_tabindex("0");
            obj.set_tabposition("right");
            obj.set_scrollbars("autoboth");
            obj.set_cssclass("tab_WF_right");
            obj.style.set_padding("0 0 0 0");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.Tab04);
            obj.set_text("tabpage1");
            this.Tab04.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.Tab04);
            obj.set_text("tabpage2");
            this.Tab04.addChild(obj.name, obj);
            obj = new Tabpage("tabpage3", this.Tab04);
            obj.set_text("tabpage3");
            this.Tab04.addChild(obj.name, obj);
            obj = new Tabpage("tabpage4", this.Tab04);
            obj.set_text("tabpage4");
            this.Tab04.addChild(obj.name, obj);
            obj = new Tabpage("tabpage5", this.Tab04);
            obj.set_text("tabpage5");
            this.Tab04.addChild(obj.name, obj);

            obj = new Tab("Tab03", "absolute", "678", "79", "233", "209", null, null, this);
            obj.set_taborder("29");
            obj.set_tabindex("0");
            obj.set_tabposition("left");
            obj.set_scrollbars("autoboth");
            obj.set_cssclass("tab_WF_left");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.Tab03);
            obj.set_text("tabpage1");
            this.Tab03.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.Tab03);
            obj.set_text("tabpage2");
            this.Tab03.addChild(obj.name, obj);
            obj = new Tabpage("tabpage3", this.Tab03);
            obj.set_text("tabpage3");
            this.Tab03.addChild(obj.name, obj);
            obj = new Tabpage("tabpage4", this.Tab03);
            obj.set_text("tabpage4");
            this.Tab03.addChild(obj.name, obj);
            obj = new Tabpage("tabpage5", this.Tab03);
            obj.set_text("tabpage5");
            this.Tab03.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "57", "365", "210", "18", null, null, this);
            obj.set_taborder("30");
            obj.set_text("showextrabutton = <b v='true'>true</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "57", "56", "210", "18", null, null, this);
            obj.set_taborder("31");
            obj.set_text("showextrabutton = <b v='true'>None</b>");
            obj.set_cssclass("sta_GID_txt02");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "57", "594", "210", "18", null, null, this);
            obj.set_taborder("32");
            obj.set_text("tabposition = <b v='true'>Bottom</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "677", "56", "182", "18", null, null, this);
            obj.set_taborder("33");
            obj.set_text("tabposition = <b v='true'>Left</b>");
            obj.set_cssclass("sta_GID_txt02");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "678", "365", "182", "18", null, null, this);
            obj.set_taborder("34");
            obj.set_text("tabposition = <b v='true'>Right</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static60", "absolute", "0", "0", null, "30", "0", null, this);
            obj.set_taborder("35");
            obj.set_text("Tab");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "57", "108", "513", "15", null, null, this);
            obj.set_taborder("36");
            obj.set_text("15px");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "57", "272", "513", "15", null, null, this);
            obj.set_taborder("37");
            obj.set_text("15px");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "418", "66", "19", "17", null, null, this);
            obj.set_taborder("39");
            obj.set_text("12");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "503", "86", "19", "17", null, null, this);
            obj.set_taborder("40");
            obj.set_text("29");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static73", "absolute", "492", "107", "10", "1", null, null, this);
            obj.set_taborder("41");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static74", "absolute", "492", "79", "10", "1", null, null, this);
            obj.set_taborder("42");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static75", "absolute", "497", "80", "1", "27", null, null, this);
            obj.set_taborder("43");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static76", "absolute", "419", "93", "11", "1", null, null, this);
            obj.set_taborder("44");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static77", "absolute", "419", "89", "1", "10", null, null, this);
            obj.set_taborder("45");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static78", "absolute", "429", "89", "1", "10", null, null, this);
            obj.set_taborder("46");
            obj.style.set_background("red");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1008, 800, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("guide02_new");
            		p.set_titletext("Tab");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("Guide_04.xfdl", true);

       
    };
}
)();
