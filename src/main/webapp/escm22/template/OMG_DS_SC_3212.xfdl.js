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
                this.set_name("OMG_DS_SC_3212");
                this.set_titletext("신청내역  intro화면");
                this._setFormPosition(0,0,350,188);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div03", "absolute", "0", "0", "350", "188", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Div03");
            obj.set_cssclass("div_WF_MenuList");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0", "0", "348", "30", null, null, this.Div03);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Menulist");
            this.Div03.addChild(obj.name, obj);
            obj = new Button("Button13", "absolute", "153", "150", "41", "21", null, null, this.Div03);
            obj.set_taborder("5");
            obj.set_text("확인");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "14", "45", "110", "29", null, null, this.Div03);
            obj.set_taborder("6");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static28", "absolute", "123", "45", "210", "29", null, null, this.Div03);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "14", "73", "110", "29", null, null, this.Div03);
            obj.set_taborder("8");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_Label");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "123", "73", "210", "29", null, null, this.Div03);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div03.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "127", "77", "202", "21", null, null, this.Div03);
            obj.set_taborder("10");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "14", "101", "110", "29", null, null, this.Div03);
            obj.set_taborder("11");
            obj.set_text("휴대폰");
            obj.set_cssclass("sta_WF_Label");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "123", "101", "210", "29", null, null, this.Div03);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div03.addChild(obj.name, obj);
            obj = new Combo("Combo08", "absolute", "127", "105", "51", "21", null, null, this.Div03);
            this.Div03.addChild(obj.name, obj);
            var Combo08_innerdataset = new Dataset("Combo08_innerdataset", this.Div03.Combo08);
            Combo08_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">010</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">011</Col></Row></Rows>");
            obj.set_innerdataset(Combo08_innerdataset);
            obj.set_taborder("13");
            obj.set_value("1");
            obj.set_text("010");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj = new Static("Static09", "absolute", "239", "105", "9", "21", null, null, this.Div03);
            obj.set_taborder("14");
            obj.set_text("-");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static40", "absolute", "180", "105", "9", "21", null, null, this.Div03);
            obj.set_taborder("15");
            obj.set_text("-");
            this.Div03.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit14", "absolute", "189", "105", "48", "21", null, null, this.Div03);
            obj.set_taborder("16");
            obj.set_value("1234");
            this.Div03.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit15", "absolute", "248", "105", "48", "21", null, null, this.Div03);
            obj.set_taborder("17");
            obj.set_value("1234");
            this.Div03.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit09", "absolute", "127", "49", "70", "21", null, null, this.Div03);
            obj.set_taborder("18");
            this.Div03.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit10", "absolute", "208", "49", "70", "21", null, null, this.Div03);
            obj.set_taborder("19");
            obj.set_type("string");
            obj.set_mask("#######");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static120", "absolute", "199", "49", "9", "21", null, null, this.Div03);
            obj.set_taborder("20");
            obj.set_text("-");
            this.Div03.addChild(obj.name, obj);
            obj = new Button("Button01", "absolute", "311", "0", "37", "30", null, null, this.Div03);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_PopupClose");
            this.Div03.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 350, 188, this.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div03");
            		p.set_cssclass("div_WF_MenuList");

            	}
            );
            this.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 350, 188, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_3212");
            		p.set_titletext("신청내역  intro화면");

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

        this.loadIncludeScript("OMG_DS_SC_3212.xfdl", true);

       
    };
}
)();
