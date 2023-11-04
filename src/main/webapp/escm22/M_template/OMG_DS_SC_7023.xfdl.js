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
                this.set_name("OMG_DS_SC_7023");
                this.set_classname("OMG_DS_SC_7022");
                this.set_titletext("유통취급상품조회");
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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">8801024056446</Col><Col id=\"Column1\">종가집국산무농약콩나물 200g</Col><Col id=\"Column2\">200g</Col><Col id=\"Column3\">면세</Col><Col id=\"Column4\">대상에프앤에프(주)</Col></Row><Row><Col id=\"Column0\">8801024056446</Col><Col id=\"Column1\">종가집 고단백국산콩두부 30g(농협전용)</Col><Col id=\"Column2\">300g</Col><Col id=\"Column3\">면세</Col><Col id=\"Column4\">협력업체명</Col></Row><Row><Col id=\"Column0\">8801024056446</Col><Col id=\"Column1\">종가집국산무농약콩나물 200g</Col><Col id=\"Column2\">400g</Col><Col id=\"Column3\">ㅍ</Col><Col id=\"Column4\">대상에프앤에프(주)</Col></Row><Row><Col id=\"Column0\">8801024056446</Col><Col id=\"Column1\">종가집 고단백국산콩두부 30g(농협전용)</Col><Col id=\"Column2\">500g</Col><Col id=\"Column3\">면세</Col><Col id=\"Column4\">협력업체명</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "0", "170", "540", "400", null, null, this);
            obj.set_taborder("49");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"95\"/><Column size=\"323\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"50\" band=\"head\"/><Row size=\"63\"/><Row size=\"63\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"상품코드\"/><Cell col=\"2\" text=\"상품명\"/><Cell row=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"규격\"/><Cell row=\"1\" col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"과세구분\"/><Cell row=\"1\" col=\"2\" text=\"협력업체명\"/></Band><Band id=\"body\"><Cell colspan=\"2\" displaytype=\"text\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column0\"/><Cell col=\"2\" style=\"align:left middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column1\" wordwrap=\"char\"/><Cell row=\"1\" style=\"align:right middle;\" text=\"bind:Column2\"/><Cell row=\"1\" col=\"1\" text=\"bind:Column3\"/><Cell row=\"1\" col=\"2\" displaytype=\"decoratetext\" style=\"align:left middle;\" text=\"bind:Column4\" wordwrap=\"char\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button31", "absolute", "0", "154", "540", "16", null, null, this);
            obj.set_taborder("45");
            obj.set_cssclass("btn_WF_SearchControlBtn");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "0", "0", "540", "154", null, null, this);
            obj.set_taborder("48");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Button("Button27", "absolute", "15", "85", "510", "49", null, null, this.Div00);
            obj.set_taborder("89");
            obj.set_text("조회");
            obj.set_cssclass("btn_WFSA_SearchBtn");
            this.Div00.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "15", "16", "245", "54", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            var Combo00_innerdataset = new Dataset("Combo00_innerdataset", this.Div00.Combo00);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">유통취급상품코드</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">001</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">002</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_taborder("90");
            obj.set_value("1");
            obj.set_text("거래처코드");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj = new Edit("Edit00", "absolute", "267", "16", "258", "54", null, null, this.Div00);
            obj.set_taborder("91");
            this.Div00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 540, 400, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("49");
            		p.set_text("Div01");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 154, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("48");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 570, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_7022");
            		p.set_titletext("유통취급상품조회");

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

        this.loadIncludeScript("OMG_DS_SC_7023.xfdl");

       
    };
}
)();
