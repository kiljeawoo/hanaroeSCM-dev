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
                this.set_titletext("ImageViewer/GroupBox/PopupMenu/ProgressBar/Menu");
                this._setFormPosition(0,0,1008,820);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_menu", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"idx\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/><Column id=\"UserData\" type=\"STRING\" size=\"256\"/><Column id=\"Caption\" type=\"STRING\" size=\"256\"/><Column id=\"enable\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"lev\">0</Col><Col id=\"UserData\">PopupMenu01</Col><Col id=\"Caption\">PopupMenu01</Col><Col id=\"idx\">1000</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"UserData\">PopupMenu02</Col><Col id=\"Caption\">PopupMenu02</Col><Col id=\"lev\">0</Col><Col id=\"idx\">1001</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"UserData\">PopupMenu01</Col><Col id=\"Caption\">PopupMenu01</Col><Col id=\"lev\">1</Col><Col id=\"idx\">1002</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"UserData\">PopupMenu02</Col><Col id=\"Caption\">PopupMenu02</Col><Col id=\"lev\">1</Col><Col id=\"idx\">1003</Col><Col id=\"enable\">0</Col></Row><Row><Col id=\"UserData\">PopupMenu03</Col><Col id=\"Caption\">PopupMenu03</Col><Col id=\"lev\">1</Col><Col id=\"idx\">1004</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"UserData\">PopupMenu04</Col><Col id=\"Caption\">PopupMenu04</Col><Col id=\"lev\">1</Col><Col id=\"idx\">1005</Col><Col id=\"enable\">0</Col></Row><Row><Col id=\"UserData\">PopupMenu05</Col><Col id=\"Caption\">PopupMenu05</Col><Col id=\"lev\">1</Col><Col id=\"idx\">1006</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"UserData\">PopupMenu03</Col><Col id=\"Caption\">PopupMenu03</Col><Col id=\"lev\">0</Col><Col id=\"idx\">1007</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"UserData\">PopupMenu04</Col><Col id=\"Caption\">PopupMenu04</Col><Col id=\"lev\">0</Col><Col id=\"idx\">1008</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"UserData\">PopupMenu01</Col><Col id=\"Caption\">PopupMenu01</Col><Col id=\"lev\">1</Col><Col id=\"idx\">1009</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"UserData\">PopupMenu02</Col><Col id=\"Caption\">PopupMenu02</Col><Col id=\"lev\">1</Col><Col id=\"idx\">1010</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"UserData\">PopupMenu03</Col><Col id=\"Caption\">PopupMenu03</Col><Col id=\"lev\">1</Col><Col id=\"idx\">1011</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"UserData\">PopupMenu04</Col><Col id=\"Caption\">PopupMenu04</Col><Col id=\"lev\">1</Col><Col id=\"idx\">1012</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"UserData\">PopupMenu05</Col><Col id=\"Caption\">PopupMenu05</Col><Col id=\"lev\">0</Col><Col id=\"idx\">1013</Col><Col id=\"enable\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("menu", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("true");
            obj._setContents("<ColumnInfo><Column id=\"idx\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/><Column id=\"userdata\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"enable\" type=\"STRING\" size=\"256\"/><Column id=\"hotkey\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"idx\">1000</Col><Col id=\"lev\">0</Col><Col id=\"userdata\">기준정보</Col><Col id=\"caption\">기준정보</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"idx\">1001</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"userdata\">서브메뉴01</Col><Col id=\"caption\">서브메뉴01</Col></Row><Row><Col id=\"idx\">1002</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"userdata\">서브메뉴02</Col><Col id=\"caption\">서브메뉴02</Col></Row><Row><Col id=\"idx\">1003</Col><Col id=\"lev\">0</Col><Col id=\"userdata\">상품정보</Col><Col id=\"caption\">상품정보</Col><Col id=\"enable\">1</Col><Col id=\"hotkey\">Alt+K</Col></Row><Row><Col id=\"idx\">1004</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"userdata\">서브메뉴01</Col><Col id=\"caption\">서브메뉴01</Col></Row><Row><Col id=\"idx\">1005</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"userdata\">서브메뉴02</Col><Col id=\"caption\">서브메뉴02</Col></Row><Row><Col id=\"idx\">1006</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"userdata\">서브메뉴03</Col><Col id=\"caption\">서브메뉴03</Col></Row><Row><Col id=\"idx\">1007</Col><Col id=\"lev\">0</Col><Col id=\"userdata\">수주업무</Col><Col id=\"caption\">수주업무</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"userdata\">서브메뉴01</Col><Col id=\"caption\">서브메뉴01</Col><Col id=\"idx\">1008</Col></Row><Row><Col id=\"lev\">0</Col><Col id=\"userdata\">배송/반품</Col><Col id=\"caption\">배송/반품</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1009</Col></Row><Row><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"userdata\">서브메뉴01</Col><Col id=\"caption\">서브메뉴01</Col><Col id=\"idx\">1010</Col></Row><Row><Col id=\"lev\">0</Col><Col id=\"userdata\">실적정보</Col><Col id=\"caption\">실적정보</Col><Col id=\"enable\">0</Col><Col id=\"idx\">1011</Col></Row><Row><Col id=\"lev\">1</Col><Col id=\"enable\">0</Col><Col id=\"userdata\">서브메뉴01</Col><Col id=\"caption\">서브메뉴01</Col><Col id=\"idx\">1012</Col></Row><Row><Col id=\"lev\">1</Col><Col id=\"enable\">0</Col><Col id=\"userdata\">서브메뉴02</Col><Col id=\"caption\">서브메뉴02</Col><Col id=\"idx\">1013</Col></Row><Row><Col id=\"lev\">0</Col><Col id=\"userdata\">입찰정보</Col><Col id=\"caption\">입찰정보</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1014</Col><Col id=\"hotkey\">Alt+O</Col></Row><Row><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"userdata\">서브메뉴01</Col><Col id=\"caption\">서브메뉴01</Col><Col id=\"idx\">1015</Col></Row><Row><Col id=\"lev\">0</Col><Col id=\"userdata\">커뮤니티</Col><Col id=\"enable\">1</Col><Col id=\"caption\">커뮤니티</Col><Col id=\"idx\">1016</Col></Row><Row><Col id=\"enable\">1</Col><Col id=\"userdata\">서브메뉴01</Col><Col id=\"caption\">서브메뉴01</Col><Col id=\"idx\">1017</Col><Col id=\"lev\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static06", "absolute", "0", "735", null, "65", "0", null, this);
            obj.set_taborder("45");
            obj.set_cssclass("sta_TF_Bg");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar00", "absolute", "542", "528", "160", "8", null, null, this);
            obj.set_taborder("8");
            obj.set_pos("65");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar01", "absolute", "542", "546", "160", "8", null, null, this);
            obj.set_taborder("9");
            obj.set_pos("100");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar02", "absolute", "542", "596", "271", "8", null, null, this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "815", "590", "107", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_text("Progress Test");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar03", "absolute", "762", "546", "160", "8", null, null, this);
            obj.set_taborder("12");
            obj.set_pos("100");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar04", "absolute", "762", "528", "160", "8", null, null, this);
            obj.set_taborder("13");
            obj.set_pos("65");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00", "absolute", "542", "93", "205", "115", null, null, this);
            obj.set_text("GroupBox");
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox01", "absolute", "762", "93", "205", "115", null, null, this);
            obj.set_text("GroupBox");
            obj.set_taborder("15");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "30", "490", "100", "20", null, null, this);
            obj.set_taborder("20");
            obj.set_text("PopupMenu");
            this.addChild(obj.name, obj);

            obj = new PopupMenu("PopupMenu00", "absolute", "30", "511", "141", "105", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_innerdataset("ds_menu");
            obj.set_idcolumn("idx");
            obj.set_captioncolumn("Caption");
            obj.set_levelcolumn("lev");
            obj.set_userdatacolumn("UserData");
            obj.set_enablecolumn("enable");
            obj.set_checkboxcolumn("check");

            obj = new Static("Static02", "absolute", "503", "0", null, "30", "0", null, this);
            obj.set_taborder("21");
            obj.set_text("GroupBox");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "0", "0", "504", "30", null, null, this);
            obj.set_taborder("22");
            obj.set_text("ImageViewer");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00", "absolute", "230", "195", "118", "62", null, null, this);
            obj.set_taborder("24");
            obj.set_image("URL('img::img_sample.png')");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01", "absolute", "30", "315", "270", "73", null, null, this);
            obj.set_taborder("25");
            obj.set_image("URL('img::img_sample.png')");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "230", "172", "93", "18", null, null, this);
            obj.set_taborder("26");
            obj.set_text("stretch =<b v='true'> \"fit\"</b>");
            obj.set_cssclass("sta_GID_txt02");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "30", "292", "172", "18", null, null, this);
            obj.set_taborder("27");
            obj.set_text("stretch =<b v='true'> \"fixaspectratio\"</b>");
            obj.set_cssclass("sta_GID_txt02");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "542", "56", "62", "18", null, null, this);
            obj.set_taborder("28");
            obj.set_text("enabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "762", "56", "65", "18", null, null, this);
            obj.set_taborder("29");
            obj.set_text("disabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0", "424", "504", "30", null, null, this);
            obj.set_taborder("30");
            obj.set_text("PopupMenu");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "503", "424", null, "30", "0", null, this);
            obj.set_taborder("31");
            obj.set_text("ProgressBar");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "542", "490", "62", "18", null, null, this);
            obj.set_taborder("32");
            obj.set_text("enabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "762", "490", "65", "18", null, null, this);
            obj.set_taborder("33");
            obj.set_text("disabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static60", "absolute", "0", "663", null, "30", "0", null, this);
            obj.set_taborder("34");
            obj.set_text("Menu");
            obj.set_cssclass("sta_GID_Title");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer02", "absolute", "30", "79", "118", "62", null, null, this);
            obj.set_taborder("36");
            obj.set_text("ImageViewer02");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "30", "56", "62", "18", null, null, this);
            obj.set_taborder("37");
            obj.set_text("enabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer03", "absolute", "230", "79", "118", "62", null, null, this);
            obj.set_taborder("39");
            obj.set_text("ImageViewer02");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer04", "absolute", "30", "195", "118", "62", null, null, this);
            obj.set_taborder("40");
            obj.set_image("URL('img::img_sample.png')");
            obj.set_stretch("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "30", "172", "109", "18", null, null, this);
            obj.set_taborder("41");
            obj.set_text("stretch =<b v='true'> \"none\"</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "230", "56", "65", "18", null, null, this);
            obj.set_taborder("42");
            obj.set_text("disabled");
            obj.set_cssclass("sta_GID_txt02");
            this.addChild(obj.name, obj);

            obj = new Static("Static117", "absolute", "503", "0", "1", "664", null, null, this);
            obj.set_taborder("43");
            obj.set_cssclass("sta_GID_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "0", "735", "264", "65", null, null, this);
            obj.set_taborder("46");
            obj.set_cssclass("sta_TF_Logo");
            this.addChild(obj.name, obj);

            obj = new Menu("Menu01", "absolute", "192", "753", null, "46", "111", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("44");
            obj.set_innerdataset("@menu");
            obj.set_idcolumn("idx");
            obj.set_captioncolumn("caption");
            obj.set_levelcolumn("lev");
            obj.set_enablecolumn("enable");
            obj.set_hotkeycolumn("hotkey");
            obj.set_userdatacolumn("userdata");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1008, 820, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("guide02_new");
            		p.set_titletext("ImageViewer/GroupBox/PopupMenu/ProgressBar/Menu");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Guide_06.xfdl", function() {
        this.Button00_onclick = function(obj,e)
        {
        	var nX   = system.clientToScreenX(obj, 0);
            var nY   = system.clientToScreenY(obj, 21);
        	this.PopupMenu00.trackPopup(nX, nY);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.PopupMenu00.addEventHandler("onmenuclick", this.PopupMenu00_onmenuclick, this);

        };

        this.loadIncludeScript("Guide_06.xfdl");

       
    };
}
)();
