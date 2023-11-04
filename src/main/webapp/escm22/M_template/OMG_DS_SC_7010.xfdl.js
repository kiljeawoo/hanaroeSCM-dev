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
                this.set_name("OMG_DS_SC_7010");
                this.set_classname("OMG_DS_SC_7022");
                this.set_titletext("수주내역조회");
                this._setFormPosition(0,0,540,570);
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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2015-05-06</Col><Col id=\"Column2\">10009</Col><Col id=\"Column3\">18</Col><Col id=\"Column4\">(주)농협유통창동유통센터(소매)</Col><Col id=\"Column5\">270,789</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">2015-05-06</Col><Col id=\"Column2\">10007</Col><Col id=\"Column3\">104</Col><Col id=\"Column4\">(주)농협유통창동유통센터(소매)</Col><Col id=\"Column5\">388,550</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">2015-05-06</Col><Col id=\"Column2\">10057</Col><Col id=\"Column3\">32</Col><Col id=\"Column4\">(주)농협유통창동유통센터(소매)</Col><Col id=\"Column5\">270,789</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">2015-05-06</Col><Col id=\"Column2\">10009</Col><Col id=\"Column3\">11</Col><Col id=\"Column4\">(주)농협유통창동유통센터(소매)</Col><Col id=\"Column5\">388,550</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "0", "170", "540", "400", null, null, this);
            obj.set_taborder("51");
            this.addChild(obj.name, obj);
            obj = new Static("Static65", "absolute", "0", "0", "540", "48", null, null, this.Div01);
            obj.getSetter("taborder").set("1");
            obj.set_cssclass("sta_WF_Gridbg");
            this.Div01.addChild(obj.name, obj);
            obj = new Grid("Grid04", "absolute", "0", "48", "540", "352", null, null, this.Div01);
            obj.set_taborder("2");
            obj.set_binddataset("grd01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"207\"/><Column size=\"180\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"50\" band=\"head\"/><Row size=\"63\"/><Row size=\"63\"/></Rows><Band id=\"head\"><Cell text=\"발주일자\"/><Cell col=\"1\" text=\"발주번호\"/><Cell col=\"2\" text=\"수주량\"/><Cell row=\"1\" colspan=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"발주처명\"/><Cell row=\"1\" col=\"2\" text=\"수주금액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" text=\"bind:Column1\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:Column2\"/><Cell col=\"2\" style=\"align:right middle;\" text=\"bind:Column3\"/><Cell row=\"1\" colspan=\"2\" style=\"align:left middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column4\" wordwrap=\"char\"/><Cell row=\"1\" col=\"2\" style=\"align:right middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column5\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static66", "absolute", "0", "5", "216", "38", null, null, this.Div01);
            obj.getSetter("taborder").set("0");
            obj.set_text("검색결과 <fc v='#fff44f'><fs v='17'>002</fs></fc>건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_GridCount01");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "0", "0", "540", "154", null, null, this);
            obj.set_taborder("44");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "15", "16", "122", "54", null, null, this.Div00);
            obj.getSetter("taborder").set("85");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("Button27", "absolute", "15", "85", "510", "49", null, null, this.Div00);
            obj.set_taborder("86");
            obj.set_text("조회");
            obj.set_cssclass("btn_WFSA_SearchBtn");
            this.Div00.addChild(obj.name, obj);
            obj = new Calendar("Calendar01", "absolute", "137", "16", "184", "54", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("87");
            obj.set_value("20150501");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("Calendar02", "absolute", "341", "16", "184", "54", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("88");
            obj.set_value("20150501");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static09", "absolute", "318", "16", "26", "54", null, null, this.Div00);
            obj.getSetter("taborder").set("89");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button31", "absolute", "0", "154", "540", "16", null, null, this);
            obj.set_taborder("45");
            obj.set_cssclass("btn_WF_SearchControlBtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "485", "134", "91", "20", null, null, this);
            obj.getSetter("taborder").set("48");
            obj.style.set_background("#dc143c33");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 540, 400, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("51");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 154, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("44");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 570, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_7022");
            		p.set_titletext("수주내역조회");

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

        this.loadIncludeScript("OMG_DS_SC_7010.xfdl");

       
    };
}
)();
