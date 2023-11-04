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
                this.set_name("OMG_DS_SC_7040");
                this.set_classname("OMG_DS_SC_7022");
                this.set_titletext("행사상품 정보조회");
                this._setFormPosition(0,0,540,632);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("grd01", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">(주)농협유통</Col><Col id=\"Column1\">2015-05-06</Col><Col id=\"Column2\">270,789</Col><Col id=\"Column3\">(주)농협유통</Col><Col id=\"Column4\">2015-05-20</Col><Col id=\"Column5\">270,789</Col></Row><Row><Col id=\"Column0\">(주)농협유통</Col><Col id=\"Column1\">2015-05-06</Col><Col id=\"Column2\">388,550</Col><Col id=\"Column3\">(주)농협유통</Col><Col id=\"Column4\">2015-05-20</Col><Col id=\"Column5\">388,550</Col></Row><Row><Col id=\"Column0\">(주)농협유통</Col><Col id=\"Column1\">2015-05-06</Col><Col id=\"Column2\">270,789</Col><Col id=\"Column3\">(주)농협유통</Col><Col id=\"Column4\">2015-05-20</Col><Col id=\"Column5\">270,789</Col></Row><Row><Col id=\"Column0\">(주)농협유통</Col><Col id=\"Column1\">2015-05-06</Col><Col id=\"Column2\">388,550</Col><Col id=\"Column3\">(주)농협유통</Col><Col id=\"Column4\">2015-05-20</Col><Col id=\"Column5\">388,550</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "0", "232", "540", "400", null, null, this);
            obj.set_taborder("50");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);
            obj = new Static("Static65", "absolute", "0", "0", "540", "48", null, null, this.Div01);
            obj.getSetter("taborder").set("1");
            obj.set_cssclass("sta_WF_Gridbg");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static66", "absolute", "0", "5", "216", "38", null, null, this.Div01);
            obj.getSetter("taborder").set("0");
            obj.set_text("검색결과 <fc v='#fff44f'><fs v='17'>002</fs></fc>건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_GridCount01");
            this.Div01.addChild(obj.name, obj);
            obj = new Grid("Grid04", "absolute", "0", "48", "540", "352", null, null, this.Div01);
            obj.set_taborder("2");
            obj.set_binddataset("grd01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"239\"/><Column size=\"140\"/><Column size=\"160\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"50\" band=\"head\"/><Row size=\"63\"/><Row size=\"63\"/></Rows><Band id=\"head\"><Cell text=\"통합행사명\"/><Cell col=\"1\" text=\"행사시작일\"/><Cell col=\"2\" text=\"권장판매가\"/><Cell row=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"사업장명\"/><Cell row=\"1\" col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"행사종료일\"/><Cell row=\"1\" col=\"2\" text=\"행사원가\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:left middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column0\" wordwrap=\"char\"/><Cell col=\"1\" displaytype=\"text\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column1\"/><Cell col=\"2\" style=\"align:right middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column2\"/><Cell row=\"1\" style=\"align:left middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column3\" wordwrap=\"char\"/><Cell row=\"1\" col=\"1\" style=\"align: ;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column4\"/><Cell row=\"1\" col=\"2\" style=\"align:right middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column5\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "0", "0", "540", "216", null, null, this);
            obj.set_taborder("44");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "15", "16", "122", "54", null, null, this.Div00);
            obj.getSetter("taborder").set("85");
            obj.set_text("행사일자");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("Button27", "absolute", "15", "147", "510", "49", null, null, this.Div00);
            obj.set_taborder("86");
            obj.set_text("조회");
            obj.set_cssclass("btn_WFSA_SearchBtn");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "78", "162", "54", null, null, this.Div00);
            obj.getSetter("taborder").set("90");
            obj.set_text("행사상품코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit03", "absolute", "176", "78", "291", "54", null, null, this.Div00);
            obj.set_taborder("91");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "471", "78", "54", "54", null, null, this.Div00);
            obj.set_taborder("92");
            obj.set_cssclass("btn_WF_SearchBtn");
            this.Div00.addChild(obj.name, obj);
            obj = new Calendar("Calendar01", "absolute", "176", "16", "171", "54", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("93");
            obj.set_value("20150501");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("Calendar02", "absolute", "354", "16", "171", "54", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("94");
            obj.set_value("20150501");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Button("Button31", "absolute", "0", "216", "540", "16", null, null, this);
            obj.set_taborder("45");
            obj.set_cssclass("btn_WF_SearchControlBtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "525", "54", "15", "93", null, null, this);
            obj.getSetter("taborder").set("48");
            obj.set_visible("false");
            obj.style.set_background("#00ffff33");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "437", "196", "88", "20", null, null, this);
            obj.getSetter("taborder").set("49");
            obj.set_visible("false");
            obj.style.set_background("#00ffff33");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 540, 400, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("50");
            		p.set_text("Div01");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 216, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("44");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 632, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_7022");
            		p.set_titletext("행사상품 정보조회");

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

        this.loadIncludeScript("OMG_DS_SC_7040.xfdl");

       
    };
}
)();
