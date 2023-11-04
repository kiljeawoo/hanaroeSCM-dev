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
                this.set_name("OMG_DS_SC_7090");
                this.set_classname("OMG_DS_SC_7022");
                this.set_titletext("미납 패널티 조회");
                this._setFormPosition(0,0,540,748);
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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\">확인</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\">확인</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\">확인</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\">확인</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "0", "418", "540", "529", null, null, this);
            obj.set_taborder("52");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);
            obj = new Grid("Grid04", "absolute", "-1", "0", "540", "529", null, null, this.Div01);
            obj.set_taborder("0");
            obj.set_binddataset("grd01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"177\"/><Column size=\"120\"/><Column size=\"140\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"50\" band=\"head\"/><Row size=\"50\" band=\"head\"/><Row size=\"63\"/><Row size=\"63\"/><Row size=\"63\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"상품코드\"/><Cell col=\"2\" text=\"발주일자\"/><Cell col=\"3\" text=\"발주번호\"/><Cell row=\"1\" colspan=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"상품명\"/><Cell row=\"1\" col=\"2\" cssclass=\"Cellgrd_WF_Head\" text=\"배송예정일자\"/><Cell row=\"1\" col=\"3\" cssclass=\"Cellgrd_WF_Head\" text=\"배송예정서번호\"/><Cell row=\"2\" text=\"구분\"/><Cell row=\"2\" col=\"1\" text=\"패널티금액\"/><Cell row=\"2\" col=\"2\" cssclass=\"Cellgrd_WF_Head\" text=\"미납확인일자\"/><Cell row=\"2\" col=\"3\" cssclass=\"Cellgrd_WF_Head\" text=\"미입고수량\"/></Band><Band id=\"body\"><Cell colspan=\"2\" displaytype=\"text\" text=\"bind:Column1\"/><Cell col=\"2\" style=\"align: ;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column3\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_txt\"/><Cell row=\"1\" colspan=\"2\" style=\"align:left middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column4\" wordwrap=\"char\"/><Cell row=\"1\" col=\"2\" style=\"align: ;\" cssclass=\"Cellgrd_WF_txt\"/><Cell row=\"1\" col=\"3\" cssclass=\"Cellgrd_WF_txt\" wordwrap=\"char\"/><Cell row=\"2\" displaytype=\"button\" edittype=\"button\" text=\"bind:Column5\"/><Cell row=\"2\" col=\"1\" style=\"align:right middle;\"/><Cell row=\"2\" col=\"2\"/><Cell row=\"2\" col=\"3\" style=\"align:right middle;\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "0", "0", "540", "402", null, null, this);
            obj.set_taborder("44");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Button("Button27", "absolute", "15", "333", "510", "49", null, null, this.Div00);
            obj.set_taborder("86");
            obj.set_text("조회");
            obj.set_cssclass("btn_WFSA_SearchBtn");
            this.Div00.addChild(obj.name, obj);
            obj = new Calendar("Calendar01", "absolute", "157", "16", "174", "54", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("87");
            obj.set_value("20150501");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("Calendar02", "absolute", "351", "16", "174", "54", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("88");
            obj.set_value("20150501");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static00", "absolute", "15", "78", "142", "54", null, null, this.Div00);
            obj.getSetter("taborder").set("90");
            obj.set_text("발주번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "140", "142", "54", null, null, this.Div00);
            obj.getSetter("taborder").set("91");
            obj.set_text("발주처");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "15", "202", "142", "54", null, null, this.Div00);
            obj.getSetter("taborder").set("92");
            obj.set_text("베송예정서\r\n번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit10", "absolute", "157", "140", "310", "54", null, null, this.Div00);
            obj.set_taborder("93");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("Button67", "absolute", "471", "140", "54", "54", null, null, this.Div00);
            obj.set_taborder("94");
            obj.set_cssclass("btn_WF_SearchBtn");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "157", "78", "310", "54", null, null, this.Div00);
            obj.set_taborder("95");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "471", "78", "54", "54", null, null, this.Div00);
            obj.set_taborder("96");
            obj.set_cssclass("btn_WF_SearchBtn");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("Button01", "absolute", "471", "202", "54", "54", null, null, this.Div00);
            obj.set_taborder("97");
            obj.set_cssclass("btn_WF_SearchBtn");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "157", "202", "310", "54", null, null, this.Div00);
            obj.set_taborder("98");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "331", "16", "20", "54", null, null, this.Div00);
            obj.getSetter("taborder").set("99");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "15", "264", "142", "54", null, null, this.Div00);
            obj.getSetter("taborder").set("100");
            obj.set_text("구분");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_wordwrap("char");
            this.Div00.addChild(obj.name, obj);
            obj = new Radio("Radio00", "absolute", "157", "264", "369", "54", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            var Radio00_innerdataset = new Dataset("Radio00_innerdataset", this.Div00.Radio00);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">미확인</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">확인</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_taborder("101");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj.set_value("1");
            obj = new Combo("Combo00", "absolute", "15", "16", "135", "54", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            var Combo00_innerdataset = new Dataset("Combo00_innerdataset", this.Div00.Combo00);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">발주일자</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">배송예정일자</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미납확인일자</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_taborder("102");
            obj.set_text("발주일자");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj.set_value("1");

            obj = new Button("Button31", "absolute", "0", "402", "540", "16", null, null, this);
            obj.set_taborder("45");
            obj.set_cssclass("btn_WF_SearchControlBtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "418", "382", "91", "20", null, null, this);
            obj.getSetter("taborder").set("48");
            obj.style.set_background("#dc143c33");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "641", "30", "20", "67", null, null, this);
            obj.getSetter("taborder").set("49");
            obj.set_visible("false");
            obj.style.set_background("#dc143c33");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "525", "44", "15", "218", null, null, this);
            obj.getSetter("taborder").set("50");
            obj.set_visible("false");
            obj.style.set_background("#dc143c33");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "317", "318", "88", "15", null, null, this);
            obj.getSetter("taborder").set("51");
            obj.set_visible("false");
            obj.style.set_background("#dc143c33");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 540, 529, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("52");
            		p.set_text("Div01");

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
            obj = new Layout("default", "", 540, 748, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_7022");
            		p.set_titletext("미납 패널티 조회");

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

        this.loadIncludeScript("OMG_DS_SC_7090.xfdl");

       
    };
}
)();
