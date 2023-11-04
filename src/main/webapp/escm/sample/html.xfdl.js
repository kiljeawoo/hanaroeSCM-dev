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
                this.set_name("html");
                this.set_titletext("New Form");
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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">&lt;table class=&quot;tbl_schedule03&quot;&gt;&lt;tr&gt;&lt;th style=&quot;width:25%&quot;&gt;시간&lt;/th&gt;&lt;th style=&quot;width:25%&quot;&gt;&lt;span class=&quot;course1&quot;&gt;중식&lt;/span&gt;&lt;/th&gt;&lt;th style=&quot;width:25%&quot;&gt;&lt;span class=&quot;course2&quot;&gt;석식&lt;/span&gt;&lt;/th&gt;&lt;th style=&quot;width:25%&quot;&gt;기타&lt;/th&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td class=&quot;menu1&quot;&gt;월요일&lt;br/&gt;(7월 1일)&lt;/td&gt;&lt;td&gt;쌀밥&lt;br /&gt;근대된장국&lt;br /&gt;비엔나볶음&lt;br /&gt;스크렘블에그&lt;br /&gt;고추지무침&lt;br /&gt;배추김치&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("Dataset01", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button00", "absolute", "36.33%", "44", null, "57", "55.47%", null, this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00", "absolute", "7.71%", "120", null, "258", "55.47%", null, this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "47.66%", "252", null, "57", "44.14%", null, this);
            obj.set_taborder("2");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "88.28%", "44", null, "57", "3.52%", null, this);
            obj.set_taborder("3");
            obj.set_text("Button02");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser01", "absolute", "59.77%", "120", null, "258", "3.42%", null, this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("html");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("html.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
         var str_html = "";
        	str_html += "<html>\n";
        	str_html += "<head>\n";
        	str_html += "<title>타이틀</title>\n";
        	str_html += "<meta content='text/html; charset=euc-kr' http-equiv=Content-Type>\n";
        	str_html += "<style type='text/css'> p, td, li {font-family:굴림체, arial; font-size:10pt; margin-top:5px;margin-bottom:5px;} body{margin:10px 10px 10px 10px; line-height:1.2; font-family:굴림체, arial; font-size:10pt;}</style>\n";
        	str_html += "<meta name=GENERATOR content=ActiveSquare>\n";
        	str_html += "</head>\n";
        	str_html += "<body>\n";
        	str_html += "<p>P TAG TEST</p>\n";
        	str_html += "<p>P TAG TEST</p>\n";
        	str_html += "<p>P TAG TEST</p>\n";
        	str_html += "</body>\n";
        	str_html += "</html>\n"; 
        trace(this.Dataset00.saveXML());
        var ccc = this.Dataset00.getColumn(0,"Column0");
        this.WebBrowser00.callMethod();
        var v1 = this.WebBrowser00.getProperty("document");
        var v2 = this.WebBrowser00.getProperty( "document").getProperty("body");
        var v3 = this.WebBrowser00.getProperty( "document").getProperty("body").getProperty("innerHTML");
        v2.setProperty( "innerHTML", ccc);
        v1.setProperty( "body", v2 );
        this.WebBrowser00.setProperty( "document", v1 );
        }

        this.Button01_onclick = function(obj,e)
        {
        	//var aaa =this.WebBrowser00.getProperty( "document").getProperty("body").getProperty("innerHTML"); 
        	var aaa =this.WebBrowser00.getProperty( "document").getProperty("body").getProperty("innerHTML");
        	this.Dataset01.setColumn(0,"Column0",aaa);
        	trace(this.Dataset01.saveXML());
        }

        this.Button02_onclick = function(obj,e)
        {
        	var bbb = this.Dataset01.getColumn(0,"Column0");
        	
        	this.WebBrowser01.callMethod();
        	var v1 = this.WebBrowser01.getProperty("document");
        	var v2 = this.WebBrowser01.getProperty( "document").getProperty("body");
        	var v3 = this.WebBrowser01.getProperty( "document").getProperty("body").getProperty("innerHTML");
        	v2.setProperty( "innerHTML", bbb);
        	v1.setProperty( "body", v2 );
        	this.WebBrowser01.setProperty( "document", v1 );
        	
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);

        };

        this.loadIncludeScript("html.xfdl");

       
    };
}
)();
