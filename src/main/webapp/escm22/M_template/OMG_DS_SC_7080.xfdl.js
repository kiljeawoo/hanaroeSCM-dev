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
                this.set_name("OMG_DS_SC_7080");
                this.set_classname("OMG_DS_SC_7022");
                this.set_titletext("반품예정정보조회");
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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">진안농협하나로마트</Col><Col id=\"Column1\">2015-05-06</Col><Col id=\"Column2\">10009</Col><Col id=\"Column3\">승인확정</Col><Col id=\"Column4\">39.00</Col></Row><Row><Col id=\"Column0\">(주)농협대전유통(소매)</Col><Col id=\"Column1\">2015-05-06</Col><Col id=\"Column2\">10007</Col><Col id=\"Column3\">반품확정</Col><Col id=\"Column4\">39.00</Col></Row><Row><Col id=\"Column0\">진안농협하나로마트</Col><Col id=\"Column1\">2015-05-06</Col><Col id=\"Column2\">10057</Col><Col id=\"Column3\">승인확정</Col><Col id=\"Column4\">26.00</Col></Row><Row><Col id=\"Column0\">(주)농협대전유통(소매)</Col><Col id=\"Column1\">2015-05-06</Col><Col id=\"Column2\">10009</Col><Col id=\"Column3\">반품확정</Col><Col id=\"Column4\">26.00</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "0", "232", "540", "352", null, null, this);
            obj.set_taborder("49");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);
            obj = new Grid("Grid04", "absolute", "0", "0", "540", "352", null, null, this.Div01);
            obj.set_taborder("0");
            obj.set_binddataset("grd01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"237\"/><Column size=\"150\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"50\" band=\"head\"/><Row size=\"63\"/><Row size=\"63\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"반품의뢰처명\"/><Cell col=\"2\" text=\"상태\"/><Cell row=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"반품등록일\"/><Cell row=\"1\" col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"반품번호\"/><Cell row=\"1\" col=\"2\" text=\"반품수량\"/></Band><Band id=\"body\"><Cell colspan=\"2\" displaytype=\"text\" style=\"align:left middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column0\" wordwrap=\"char\"/><Cell col=\"2\" style=\"align: ;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column3\"/><Cell row=\"1\" style=\"align: ;\" text=\"bind:Column1\"/><Cell row=\"1\" col=\"1\" style=\"align: ;\" text=\"bind:Column2\"/><Cell row=\"1\" col=\"2\" style=\"align:right middle;\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "0", "0", "540", "216", null, null, this);
            obj.set_taborder("44");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "15", "16", "122", "54", null, null, this.Div00);
            obj.getSetter("taborder").set("85");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("Button27", "absolute", "15", "147", "510", "49", null, null, this.Div00);
            obj.set_taborder("86");
            obj.set_text("조회");
            obj.set_cssclass("btn_WFSA_SearchBtn");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "78", "124", "54", null, null, this.Div00);
            obj.getSetter("taborder").set("90");
            obj.set_text("반품상태\r\n구분코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "137", "78", "388", "54", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            var Combo00_innerdataset = new Dataset("Combo00_innerdataset", this.Div00.Combo00);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택안됨</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">가나다</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_taborder("92");
            obj.set_text("[]선택안됨");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj.set_value("1");
            obj = new Calendar("Calendar01", "absolute", "137", "16", "184", "54", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("93");
            obj.set_value("20150501");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("Calendar02", "absolute", "341", "16", "184", "54", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("94");
            obj.set_value("20150501");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static09", "absolute", "318", "16", "26", "54", null, null, this.Div00);
            obj.getSetter("taborder").set("95");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button31", "absolute", "0", "216", "540", "16", null, null, this);
            obj.set_taborder("45");
            obj.set_cssclass("btn_WF_SearchControlBtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "435", "196", "91", "20", null, null, this);
            obj.getSetter("taborder").set("46");
            obj.set_visible("false");
            obj.style.set_background("#dc143c33");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "617", "56", "20", "41", null, null, this);
            obj.getSetter("taborder").set("47");
            obj.set_visible("false");
            obj.style.set_background("#dc143c33");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "525", "56", "15", "118", null, null, this);
            obj.getSetter("taborder").set("48");
            obj.set_visible("false");
            obj.style.set_background("#dc143c33");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 540, 352, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("49");
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
            obj = new Layout("default", "", 540, 570, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_7022");
            		p.set_titletext("반품예정정보조회");

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

        this.loadIncludeScript("OMG_DS_SC_7080.xfdl");

       
    };
}
)();
