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
                this.set_name("OMG_DS_SC_8332");
                this.set_classname("OMG_DS_SC_7022");
                this.set_titletext("반품예정상세(펼쳐졌을때)");
                this._setFormPosition(0,0,540,911);
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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">8809389180639</Col><Col id=\"Column1\">마이셰프 퓨어 스카이 프라이팬(30cm)</Col><Col id=\"Column2\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0", "748", "540", "163", null, null, this);
            obj.set_taborder("66");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Static("Static65", "absolute", "0", "0", "540", "48", null, null, this.Div00);
            obj.getSetter("taborder").set("1");
            obj.set_cssclass("sta_WF_Gridbg");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static66", "absolute", "0", "5", "244", "38", null, null, this.Div00);
            obj.getSetter("taborder").set("0");
            obj.set_text("반품예정상품");
            obj.set_cssclass("sta_WF_GridCount01");
            this.Div00.addChild(obj.name, obj);
            obj = new Grid("Grid04", "absolute", "0", "48", "540", "115", null, null, this.Div00);
            obj.set_taborder("2");
            obj.set_binddataset("grd01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"287\"/><Column size=\"100\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"63\"/></Rows><Band id=\"head\"><Cell text=\"상품코드\"/><Cell col=\"1\" text=\"상품명\"/><Cell col=\"2\" text=\"반품수량\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:right middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column1\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:right middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column2\"/><Cell col=\"2\" style=\"align:right middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "54", "173", "64", null, null, this);
            obj.getSetter("taborder").set("53");
            obj.set_text("반품의뢰처명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "173", "54", "367", "64", null, null, this);
            obj.getSetter("taborder").set("54");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("(주)농협대전유통(소매)");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0", "117", "173", "64", null, null, this);
            obj.getSetter("taborder").set("55");
            obj.set_text("반품등록일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "173", "117", "367", "64", null, null, this);
            obj.getSetter("taborder").set("56");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("2015-04-23");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "0", "180", "173", "64", null, null, this);
            obj.getSetter("taborder").set("59");
            obj.set_text("반품번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "173", "180", "367", "64", null, null, this);
            obj.getSetter("taborder").set("60");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("10001");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "243", "173", "64", null, null, this);
            obj.getSetter("taborder").set("61");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "173", "243", "367", "64", null, null, this);
            obj.getSetter("taborder").set("62");
            obj.set_text("승인확정");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "0", "306", "173", "64", null, null, this);
            obj.getSetter("taborder").set("63");
            obj.set_text("반품수량");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "173", "306", "367", "64", null, null, this);
            obj.getSetter("taborder").set("64");
            obj.set_text("37.00");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static63", "absolute", "0", "0", "540", "55", null, null, this);
            obj.getSetter("taborder").set("51");
            obj.set_cssclass("sta_WF_CRUDbg");
            obj.set_text("반품예정개요");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "371", "4", "154", "46", null, null, this);
            obj.set_taborder("67");
            obj.set_text("반품의뢰확인");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "0", "369", "173", "64", null, null, this);
            obj.getSetter("taborder").set("68");
            obj.set_text("반품금액");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "173", "369", "367", "64", null, null, this);
            obj.getSetter("taborder").set("69");
            obj.set_text("828,949.00");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "0", "432", "173", "64", null, null, this);
            obj.getSetter("taborder").set("70");
            obj.set_text("매입확정수량");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "173", "432", "367", "64", null, null, this);
            obj.getSetter("taborder").set("71");
            obj.set_text("37.00");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "0", "495", "173", "64", null, null, this);
            obj.getSetter("taborder").set("72");
            obj.set_text("매입확정금액");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "173", "495", "367", "64", null, null, this);
            obj.getSetter("taborder").set("73");
            obj.set_text("828,949.00");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "0", "558", "173", "64", null, null, this);
            obj.getSetter("taborder").set("74");
            obj.set_text("부가세액");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "173", "558", "367", "64", null, null, this);
            obj.getSetter("taborder").set("75");
            obj.set_text("75,359.00");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "0", "621", "173", "64", null, null, this);
            obj.getSetter("taborder").set("76");
            obj.set_text("매입전표일자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "173", "621", "367", "64", null, null, this);
            obj.getSetter("taborder").set("77");
            obj.set_text("2015-04-23");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "0", "684", "173", "64", null, null, this);
            obj.getSetter("taborder").set("78");
            obj.set_text("매입전표번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "173", "684", "367", "64", null, null, this);
            obj.getSetter("taborder").set("79");
            obj.set_text("10001");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 540, 163, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("66");
            		p.set_text("Div00");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 911, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_7022");
            		p.set_titletext("반품예정상세(펼쳐졌을때)");

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

        this.loadIncludeScript("OMG_DS_SC_8332.xfdl");

       
    };
}
)();
