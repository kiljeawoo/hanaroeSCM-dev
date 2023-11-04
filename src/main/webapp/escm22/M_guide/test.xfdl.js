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
                this.set_name("test");
                this.set_classname("test");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,1126);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new MaskEdit("MaskEdit00", "absolute", "341", "109", "210", "54", null, null, this);
            obj.set_taborder("0");
            obj.set_value("100000");
            obj.set_mask("###,###");
            obj.set_cssclass("msk_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "41", "109", "210", "54", null, null, this);
            obj.set_taborder("1");
            obj.set_value("농협유통eSCM");
            obj.set_tooltiptext("edit");
            obj.set_cssclass("edt_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "398", "285", "265", "54", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_displaynulltext("농협유통eSCM");
            obj.set_innerdataset("combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_displayrowcount("5");

            obj = new MaskEdit("MaskEdit01", "absolute", "714", "45", "265", "54", null, null, this);
            obj.set_taborder("3");
            obj.set_value("100000");
            obj.set_mask("###,###");
            obj.set_cssclass("msk_WF_Basic");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "714", "45", "46", "54", null, null, this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_SpinPrev");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "933", "45", "46", "54", null, null, this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_SpinNext");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00", "absolute", "41", "285", "250", "54", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_value("20150501");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Edit("Edit01", "absolute", "41", "45", "210", "54", null, null, this);
            obj.set_taborder("7");
            obj.set_value("농협유통eSCM");
            obj.set_tooltiptext("edit");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02", "absolute", "341", "45", "210", "54", null, null, this);
            obj.set_taborder("8");
            obj.set_value("100000");
            obj.set_mask("###,###");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01", "absolute", "398", "349", "265", "54", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_displaynulltext("농협유통eSCM");
            obj.set_innerdataset("combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_displayrowcount("5");
            obj.set_cssclass("cmb_WF_Essential");

            obj = new MaskEdit("MaskEdit03", "absolute", "714", "109", "265", "54", null, null, this);
            obj.set_taborder("10");
            obj.set_value("100000");
            obj.set_mask("###,###");
            obj.set_cssclass("spn_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "714", "109", "46", "54", null, null, this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_SpinPrevessential");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "933", "109", "46", "54", null, null, this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_WF_SpinNextessential");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01", "absolute", "41", "349", "250", "54", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.set_value("20150501");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Essential");

            obj = new Calendar("Calendar02", "absolute", "41", "413", "250", "54", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj.set_value("20150501");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Readonly");

            obj = new Combo("Combo02", "absolute", "398", "413", "265", "54", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_displaynulltext("농협유통eSCM");
            obj.set_innerdataset("combo");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column1");
            obj.set_displayrowcount("5");
            obj.set_cssclass("cmb_WF_Readonly");

            obj = new MaskEdit("MaskEdit04", "absolute", "714", "173", "265", "54", null, null, this);
            obj.set_taborder("16");
            obj.set_value("100000");
            obj.set_mask("###,###");
            obj.set_cssclass("spn_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "714", "173", "46", "54", null, null, this);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_SpinPrev");
            this.addChild(obj.name, obj);

            obj = new Button("Button05", "absolute", "933", "173", "46", "54", null, null, this);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_SpinNext");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit05", "absolute", "341", "173", "210", "54", null, null, this);
            obj.set_taborder("19");
            obj.set_value("100000");
            obj.set_mask("###,###");
            obj.set_cssclass("msk_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "41", "173", "210", "54", null, null, this);
            obj.set_taborder("20");
            obj.set_value("농협유통eSCM");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_tooltiptext("edit");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea03", "absolute", "41", "506", "240", "186", null, null, this);
            obj.set_taborder("24");
            obj.set_value("가나다라마바사\r\n가나다라마바사\r\n가나다라마바사\r\n가나다라마바사\r\n가나다라마바사");
            obj.getSetter("mask").set("###,###");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox00", "absolute", "758", "285", "201", "206", null, null, this);
            this.addChild(obj.name, obj);
            var ListBox00_innerdataset = new Dataset("ListBox00_innerdataset", this.ListBox00);
            ListBox00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">농협유통eSCM</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">농협유통eSCM</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">농협유통eSCM</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">농협유통eSCM</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">농협유통eSCM</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\"/></Row></Rows>");
            obj.set_innerdataset(ListBox00_innerdataset);
            obj.set_taborder("25");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new TextArea("TextArea00", "absolute", "41", "702", "240", "186", null, null, this);
            obj.set_taborder("26");
            obj.set_value("가나다라마바사\r\n가나다라마바사\r\n가나다라마바사\r\n가나다라마바사\r\n가나다라마바사");
            obj.getSetter("mask").set("###,###");
            obj.set_cssclass("txt_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea04", "absolute", "41", "898", "240", "186", null, null, this);
            obj.set_taborder("27");
            obj.set_value("가나다라마바사\r\n가나다라마바사\r\n가나다라마바사\r\n가나다라마바사\r\n가나다라마바사");
            obj.getSetter("mask").set("###,###");
            obj.set_cssclass("txt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox01", "absolute", "758", "501", "201", "206", null, null, this);
            this.addChild(obj.name, obj);
            var ListBox01_innerdataset = new Dataset("ListBox01_innerdataset", this.ListBox01);
            ListBox01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">농협유통eSCM</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">농협유통eSCM</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">농협유통eSCM</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">농협유통eSCM</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">농협유통eSCM</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\"/></Row></Rows>");
            obj.set_innerdataset(ListBox01_innerdataset);
            obj.set_taborder("28");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("lst_WF_Essential");

            obj = new ListBox("ListBox02", "absolute", "758", "717", "201", "206", null, null, this);
            this.addChild(obj.name, obj);
            var ListBox02_innerdataset = new Dataset("ListBox02_innerdataset", this.ListBox02);
            ListBox02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">농협유통eSCM</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">농협유통eSCM</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">농협유통eSCM</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">농협유통eSCM</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">농협유통eSCM</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\"/></Row></Rows>");
            obj.set_innerdataset(ListBox02_innerdataset);
            obj.set_taborder("29");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("lst_WF_Readonly");

            obj = new Div("Div00", "absolute", "355", "526", "283", "166", null, null, this);
            obj.set_taborder("30");
            obj.set_text("Div00");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "373", "735", "175", "124", null, null, this);
            obj.getSetter("taborder").set("31");
            obj.set_text("Static00");
            obj.set_cssclass("sta_WFSA_Searchbg");
            obj.style.set_background("URL('M_img::div_WFSA_Searchbg.png') stretch 7 50");
            this.addChild(obj.name, obj);

            obj = new Button("Button06", "absolute", "373", "891", "145", "80", null, null, this);
            obj.set_taborder("32");
            obj.set_text("Button06");
            obj.set_cssclass("btn_WFSA_Searchbg");
            this.addChild(obj.name, obj);

            obj = new Button("Button07", "absolute", "608", "862", "123", "89", null, null, this);
            obj.set_taborder("33");
            obj.set_text("Button07");
            obj.set_cssclass("btn_WF_InputControlBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 1126, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("test");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("test.xfdl", function() {

        this.ListBox00_onitemclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ListBox00.addEventHandler("onitemclick", this.ListBox00_onitemclick, this);
            this.ListBox01.addEventHandler("onitemclick", this.ListBox00_onitemclick, this);
            this.ListBox02.addEventHandler("onitemclick", this.ListBox00_onitemclick, this);

        };

        this.loadIncludeScript("test.xfdl");

       
    };
}
)();
