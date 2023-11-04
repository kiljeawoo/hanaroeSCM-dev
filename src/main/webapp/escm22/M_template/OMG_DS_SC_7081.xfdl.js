﻿(function()
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
                this.set_name("OMG_DS_SC_7081");
                this.set_classname("OMG_DS_SC_7022");
                this.set_titletext("반품예정상세");
                this._setFormPosition(0,0,510,676);
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
            obj = new Div("Div00", "absolute", "20", "494", "540", "163", null, null, this);
            obj.set_taborder("66");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Static("Static65", "absolute", "0", "0", "470", "48", null, null, this.Div00);
            obj.getSetter("taborder").set("1");
            obj.set_cssclass("sta_WF_Gridbg");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static66", "absolute", "0", "5", "244", "38", null, null, this.Div00);
            obj.getSetter("taborder").set("0");
            obj.set_text("반품예정상품");
            obj.set_cssclass("sta_WF_GridCount01");
            this.Div00.addChild(obj.name, obj);
            obj = new Grid("Grid04", "absolute", "0", "48", "470", "114", null, null, this.Div00);
            obj.set_taborder("2");
            obj.set_binddataset("grd01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"227\"/><Column size=\"90\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"63\"/></Rows><Band id=\"head\"><Cell text=\"상품코드\"/><Cell col=\"1\" text=\"상품명\"/><Cell col=\"2\" text=\"반품수량\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: ;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column0\"/><Cell col=\"1\" style=\"align:left middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column1\" wordwrap=\"char\"/><Cell col=\"2\" style=\"align:right middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column2\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "20", "145", "173", "64", null, null, this);
            obj.getSetter("taborder").set("53");
            obj.set_text("반품의뢰처명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "193", "145", "297", "64", null, null, this);
            obj.getSetter("taborder").set("54");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("(주)농협대전유통(소매)");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "20", "208", "173", "64", null, null, this);
            obj.getSetter("taborder").set("55");
            obj.set_text("반품등록일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "193", "208", "297", "64", null, null, this);
            obj.getSetter("taborder").set("56");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("2015-04-23");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "20", "271", "173", "64", null, null, this);
            obj.getSetter("taborder").set("59");
            obj.set_text("반품번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "193", "271", "297", "64", null, null, this);
            obj.getSetter("taborder").set("60");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("10001");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "20", "334", "173", "64", null, null, this);
            obj.getSetter("taborder").set("61");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "193", "334", "297", "64", null, null, this);
            obj.getSetter("taborder").set("62");
            obj.set_text("승인확정");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "20", "397", "173", "64", null, null, this);
            obj.getSetter("taborder").set("63");
            obj.set_text("반품수량");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "193", "397", "297", "64", null, null, this);
            obj.getSetter("taborder").set("64");
            obj.set_text("37.00");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Button("Button30", "absolute", "20", "461", "470", "33", null, null, this);
            obj.set_taborder("65");
            obj.set_text("추가정보 더보기");
            obj.set_cssclass("btn_WF_InputControlBtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static63", "absolute", "20", "91", "470", "55", null, null, this);
            obj.getSetter("taborder").set("51");
            obj.set_cssclass("sta_WF_CRUDbg");
            obj.set_text("반품예정개요");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "321", "95", "154", "46", null, null, this);
            obj.set_taborder("67");
            obj.set_text("반품의뢰확인");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "0", "0", "510", "71", null, null, this);
            obj.getSetter("taborder").set("68");
            obj.set_text("반품상품상세");
            obj.set_cssclass("sta_POP_Title");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "440", "0", "70", "70", null, null, this);
            obj.set_taborder("69");
            obj.set_cssclass("btn_POP_Closebtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "153", "71", "215", "20", null, null, this);
            obj.getSetter("taborder").set("70");
            obj.set_visible("false");
            obj.style.set_background("#dc143c33");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "234", "656", "215", "20", null, null, this);
            obj.getSetter("taborder").set("71");
            obj.set_visible("false");
            obj.style.set_background("#dc143c33");
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
            obj = new Layout("default", "", 510, 676, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_7022");
            		p.set_titletext("반품예정상세");

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

        this.loadIncludeScript("OMG_DS_SC_7081.xfdl");

       
    };
}
)();
