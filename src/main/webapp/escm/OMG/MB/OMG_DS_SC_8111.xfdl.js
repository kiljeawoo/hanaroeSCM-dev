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
                this.set_name("OMG_DS_SC_8111");
                this.set_classname("OMG_DS_SC_7022");
                this.set_titletext("수주내역상세");
                this._setFormPosition(0,0,540,804);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_detailB", "absolute", "0", "370", "540", null, null, "0", this);
            obj.set_taborder("66");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Static("Static65", "absolute", "0", "33", "540", "48", null, null, this.div_detailB);
            obj.getSetter("taborder").set("1");
            obj.set_cssclass("sta_WF_Gridbg");
            this.div_detailB.addChild(obj.name, obj);
            obj = new Static("Static66", "absolute", "0", "5", "244", "38", null, null, this.div_detailB);
            obj.getSetter("taborder").set("0");
            obj.set_text("수주내역상세");
            obj.set_cssclass("sta_WF_GridCount01");
            this.div_detailB.addChild(obj.name, obj);
            obj = new Grid("grd_detail", "absolute", "0", "81", "540", null, null, "0", this.div_detailB);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"80\"/><Column size=\"112\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"50\" band=\"head\"/><Row size=\"63\"/><Row size=\"63\"/></Rows><Band id=\"head\"><Cell text=\"수주금액\"/><Cell col=\"1\" text=\"수주량\"/><Cell col=\"2\" text=\"단가\"/><Cell col=\"3\" text=\"단위\"/><Cell col=\"4\" text=\"규격\"/><Cell col=\"5\" text=\"입수\"/><Cell row=\"1\" colspan=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"상품명\"/><Cell row=\"1\" col=\"3\" colspan=\"3\" text=\"상품코드\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:right middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column1\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:right middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column2\"/><Cell col=\"2\" style=\"align:right middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column3\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column4\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column5\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column6\"/><Cell row=\"1\" colspan=\"3\" style=\"align:left middle;\" text=\"bind:Column7\"/><Cell row=\"1\" col=\"3\" colspan=\"3\" text=\"bind:Column8\"/></Band></Format></Formats>");
            this.div_detailB.addChild(obj.name, obj);
            obj = new Button("btn_searchControl", "absolute", "0", "0", "540", "33", null, null, this.div_detailB);
            obj.set_taborder("3");
            obj.set_text("추가정보 더보기");
            obj.set_cssclass("btn_WF_InputControlBtn");
            this.div_detailB.addChild(obj.name, obj);

            obj = new Div("div_detailA", "absolute", "0", "-1", "540", "375", null, null, this);
            obj.set_taborder("67");
            this.addChild(obj.name, obj);
            obj = new Static("st_title", "absolute", "0", "0", "540", "55", null, null, this.div_detailA);
            obj.getSetter("taborder").set("1");
            obj.set_text("수주내역개요");
            obj.set_cssclass("sta_WF_CRUDbg");
            this.div_detailA.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "28.33%", "306", null, "64", "0%", null, this.div_detailA);
            obj.getSetter("taborder").set("2");
            obj.set_text("270,798");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div_detailA.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "0%", "306", null, "64", "71.67%", null, this.div_detailA);
            obj.getSetter("taborder").set("3");
            obj.set_text("수주금액");
            obj.set_cssclass("sta_WF_Label");
            this.div_detailA.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "28.33%", "243", null, "64", "0%", null, this.div_detailA);
            obj.getSetter("taborder").set("4");
            obj.set_text("18");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div_detailA.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0%", "243", null, "64", "71.67%", null, this.div_detailA);
            obj.getSetter("taborder").set("5");
            obj.set_text("수주량");
            obj.set_cssclass("sta_WF_Label");
            this.div_detailA.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "28.33%", "180", null, "64", "0%", null, this.div_detailA);
            obj.getSetter("taborder").set("6");
            obj.set_text("(주)농협유통창동유통센터(소매)");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div_detailA.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "0%", "180", null, "64", "71.67%", null, this.div_detailA);
            obj.getSetter("taborder").set("7");
            obj.set_text("발주처명");
            obj.set_cssclass("sta_WF_Label");
            this.div_detailA.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "28.33%", "117", null, "64", "0%", null, this.div_detailA);
            obj.getSetter("taborder").set("8");
            obj.set_text("10095");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div_detailA.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0%", "117", null, "64", "71.67%", null, this.div_detailA);
            obj.getSetter("taborder").set("9");
            obj.set_text("발주번호");
            obj.set_cssclass("sta_WF_Label");
            this.div_detailA.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "28.33%", "54", null, "64", "0%", null, this.div_detailA);
            obj.getSetter("taborder").set("10");
            obj.set_text("2015-01-01");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div_detailA.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0%", "54", null, "64", "71.67%", null, this.div_detailA);
            obj.getSetter("taborder").set("11");
            obj.set_text("발주일자");
            obj.set_cssclass("sta_WF_Label");
            this.div_detailA.addChild(obj.name, obj);
            obj = new Button("btn_create", "absolute", "349", "4", "176", "46", null, null, this.div_detailA);
            obj.set_taborder("0");
            obj.set_text("배송예정서 작성");
            obj.set_cssclass("btn_WF_CRUD");
            this.div_detailA.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 540, 0, this.div_detailB,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("66");
            		p.set_text("Div00");

            	}
            );
            this.div_detailB.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 375, this.div_detailA,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("67");

            	}
            );
            this.div_detailA.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 804, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_7022");
            		p.set_titletext("수주내역상세");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_8111.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_8111.xfdl", function() {
        //include "lib::comLib.xjs";

        this.div_detailB_btn_searchControl_onclick = function(obj,e)
        {
        	this.gfn_mobileSearchDivResize(obj, this.div_detailA, this.div_detailB);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_detailB.btn_searchControl.addEventHandler("onclick", this.div_detailB_btn_searchControl_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_8111.xfdl");

       
    };
}
)();
