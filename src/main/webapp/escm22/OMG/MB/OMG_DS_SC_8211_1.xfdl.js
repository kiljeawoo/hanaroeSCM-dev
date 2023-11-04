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
                this.set_name("OMG_DS_SC_8211_1");
                this.set_classname("OMG_DS_SC_7022");
                this.set_titletext("배송상품상세");
                this._setFormPosition(0,0,510,945);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static16", "absolute", "20", "145", "165", "122", null, null, this);
            obj.getSetter("taborder").set("0");
            obj.set_text("상품");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "185", "145", "305", "122", null, null, this);
            obj.getSetter("taborder").set("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "189", "150", "286", "54", null, null, this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03", "absolute", "189", "208", "286", "54", null, null, this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "20", "266", "165", "64", null, null, this);
            obj.getSetter("taborder").set("7");
            obj.set_text("규격/단위");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "185", "266", "305", "64", null, null, this);
            obj.getSetter("taborder").set("8");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "20", "329", "165", "64", null, null, this);
            obj.getSetter("taborder").set("10");
            obj.set_text("BOX입수");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "185", "329", "305", "64", null, null, this);
            obj.getSetter("taborder").set("11");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "20", "392", "165", "64", null, null, this);
            obj.getSetter("taborder").set("13");
            obj.set_text("수주량/\r\n배송예정량");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "185", "392", "305", "64", null, null, this);
            obj.getSetter("taborder").set("14");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "20", "455", "165", "64", null, null, this);
            obj.getSetter("taborder").set("17");
            obj.set_text("계약단가/\r\n납품단가");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "185", "455", "305", "64", null, null, this);
            obj.getSetter("taborder").set("18");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "20", "518", "165", "64", null, null, this);
            obj.getSetter("taborder").set("20");
            obj.set_text("금액/부가세");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "185", "518", "305", "64", null, null, this);
            obj.getSetter("taborder").set("21");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "20", "581", "165", "64", null, null, this);
            obj.getSetter("taborder").set("23");
            obj.set_text("장려금/\r\n장려금율");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "185", "581", "305", "64", null, null, this);
            obj.getSetter("taborder").set("24");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static63", "absolute", "20", "91", "470", "55", null, null, this);
            obj.getSetter("taborder").set("44");
            obj.set_cssclass("sta_WF_CRUDbg");
            this.addChild(obj.name, obj);

            obj = new Button("Button40", "absolute", "405", "95", "70", "46", null, null, this);
            obj.set_taborder("46");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01", "absolute", "189", "460", "132", "54", null, null, this);
            obj.set_taborder("47");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "321", "460", "26", "54", null, null, this);
            obj.getSetter("taborder").set("48");
            obj.set_text("/");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02", "absolute", "347", "460", "128", "54", null, null, this);
            obj.set_taborder("49");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit03", "absolute", "189", "523", "132", "54", null, null, this);
            obj.set_taborder("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "321", "523", "26", "54", null, null, this);
            obj.getSetter("taborder").set("51");
            obj.set_text("/");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit04", "absolute", "347", "523", "128", "54", null, null, this);
            obj.set_taborder("52");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00", "absolute", "189", "586", "132", "54", null, null, this);
            obj.set_taborder("53");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "321", "586", "26", "54", null, null, this);
            obj.getSetter("taborder").set("54");
            obj.set_text("/");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit05", "absolute", "347", "586", "100", "54", null, null, this);
            obj.set_taborder("55");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit06", "absolute", "189", "397", "132", "54", null, null, this);
            obj.set_taborder("56");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "321", "397", "26", "54", null, null, this);
            obj.getSetter("taborder").set("57");
            obj.set_text("/");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit07", "absolute", "347", "397", "128", "54", null, null, this);
            obj.set_taborder("58");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit08", "absolute", "189", "334", "132", "54", null, null, this);
            obj.set_taborder("59");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "321", "271", "26", "54", null, null, this);
            obj.getSetter("taborder").set("60");
            obj.set_text("/");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit09", "absolute", "189", "271", "100", "54", null, null, this);
            obj.set_taborder("61");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit10", "absolute", "347", "271", "100", "54", null, null, this);
            obj.set_taborder("62");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "453", "586", "26", "54", null, null, this);
            obj.getSetter("taborder").set("63");
            obj.set_text("%");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "453", "271", "26", "54", null, null, this);
            obj.getSetter("taborder").set("64");
            obj.set_text("g");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "295", "271", "26", "54", null, null, this);
            obj.getSetter("taborder").set("65");
            obj.set_text("g");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "20", "644", "165", "281", null, null, this);
            obj.getSetter("taborder").set("66");
            obj.set_text("미납사유");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "185", "644", "305", "281", null, null, this);
            obj.getSetter("taborder").set("67");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "189", "649", "286", "54", null, null, this);
            this.addChild(obj.name, obj);
            var Combo00_innerdataset = new Dataset("Combo00_innerdataset", this.Combo00);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">직접입력</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">가나다</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">123</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_taborder("71");
            obj.set_text("직접입력");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj.set_value("1");

            obj = new TextArea("TextArea00", "absolute", "189", "707", "286", "213", null, null, this);
            obj.set_taborder("72");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "0", "0", "510", "71", null, null, this);
            obj.getSetter("taborder").set("73");
            obj.set_text("배송상품상세");
            obj.set_cssclass("sta_POP_Title");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "440", "0", "70", "70", null, null, this);
            obj.set_taborder("74");
            obj.set_cssclass("btn_POP_Closebtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "201", "925", "215", "20", null, null, this);
            obj.getSetter("taborder").set("75");
            obj.set_visible("false");
            obj.style.set_background("#dc143c33");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "475", "149", "15", "347", null, null, this);
            obj.getSetter("taborder").set("4");
            obj.style.set_background("#00ffff33");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 510, 945, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_7022");
            		p.set_titletext("배송상품상세");

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

        this.loadIncludeScript("OMG_DS_SC_8211_1.xfdl");

       
    };
}
)();
