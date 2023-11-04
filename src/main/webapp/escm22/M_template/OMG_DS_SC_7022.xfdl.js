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
                this.set_name("OMG_DS_SC_7022");
                this.set_classname("OMG_DS_SC_7022");
                this.set_titletext("수주상품입력");
                this._setFormPosition(0,0,540,559);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static16", "absolute", "0", "54", "203", "122", null, null, this);
            obj.getSetter("taborder").set("0");
            obj.set_text("상품");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "203", "54", "337", "122", null, null, this);
            obj.getSetter("taborder").set("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "207", "59", "318", "54", null, null, this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03", "absolute", "207", "117", "318", "54", null, null, this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "525", "55", "15", "93", null, null, this);
            obj.getSetter("taborder").set("4");
            obj.style.set_background("#00ffff33");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "0", "175", "203", "64", null, null, this);
            obj.getSetter("taborder").set("7");
            obj.set_text("규격/단위");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "203", "175", "337", "64", null, null, this);
            obj.getSetter("taborder").set("8");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "238", "203", "64", null, null, this);
            obj.getSetter("taborder").set("10");
            obj.set_text("BOX입수");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "203", "238", "337", "64", null, null, this);
            obj.getSetter("taborder").set("11");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0", "301", "203", "64", null, null, this);
            obj.getSetter("taborder").set("13");
            obj.set_text("수주량/배송예정량");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "203", "301", "337", "64", null, null, this);
            obj.getSetter("taborder").set("14");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "0", "364", "203", "64", null, null, this);
            obj.getSetter("taborder").set("17");
            obj.set_text("계약단가/납품단가");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "203", "364", "337", "64", null, null, this);
            obj.getSetter("taborder").set("18");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "0", "427", "203", "64", null, null, this);
            obj.getSetter("taborder").set("20");
            obj.set_text("금액/부가세");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "203", "427", "337", "64", null, null, this);
            obj.getSetter("taborder").set("21");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "490", "203", "64", null, null, this);
            obj.getSetter("taborder").set("23");
            obj.set_text("장려금/장려금율");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "203", "490", "337", "64", null, null, this);
            obj.getSetter("taborder").set("24");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static63", "absolute", "0", "0", "540", "55", null, null, this);
            obj.getSetter("taborder").set("44");
            obj.set_cssclass("sta_WF_CRUDbg");
            this.addChild(obj.name, obj);

            obj = new Button("Button40", "absolute", "455", "4", "70", "46", null, null, this);
            obj.set_taborder("46");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button39", "absolute", "359", "4", "91", "46", null, null, this);
            obj.set_taborder("45");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01", "absolute", "207", "369", "146", "54", null, null, this);
            obj.set_taborder("47");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "353", "369", "26", "54", null, null, this);
            obj.getSetter("taborder").set("48");
            obj.set_text("/");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02", "absolute", "379", "369", "146", "54", null, null, this);
            obj.set_taborder("49");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit03", "absolute", "207", "432", "146", "54", null, null, this);
            obj.set_taborder("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "353", "432", "26", "54", null, null, this);
            obj.getSetter("taborder").set("51");
            obj.set_text("/");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit04", "absolute", "379", "432", "146", "54", null, null, this);
            obj.set_taborder("52");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00", "absolute", "207", "495", "146", "54", null, null, this);
            obj.set_taborder("53");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "353", "495", "26", "54", null, null, this);
            obj.getSetter("taborder").set("54");
            obj.set_text("/");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit05", "absolute", "379", "495", "114", "54", null, null, this);
            obj.set_taborder("55");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit06", "absolute", "207", "306", "146", "54", null, null, this);
            obj.set_taborder("56");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "353", "306", "26", "54", null, null, this);
            obj.getSetter("taborder").set("57");
            obj.set_text("/");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit07", "absolute", "379", "306", "146", "54", null, null, this);
            obj.set_taborder("58");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit08", "absolute", "207", "243", "146", "54", null, null, this);
            obj.set_taborder("59");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "353", "180", "26", "54", null, null, this);
            obj.getSetter("taborder").set("60");
            obj.set_text("/");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit09", "absolute", "207", "180", "114", "54", null, null, this);
            obj.set_taborder("61");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit10", "absolute", "379", "180", "114", "54", null, null, this);
            obj.set_taborder("62");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "499", "495", "26", "54", null, null, this);
            obj.getSetter("taborder").set("63");
            obj.set_text("%");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "499", "180", "26", "54", null, null, this);
            obj.getSetter("taborder").set("64");
            obj.set_text("g");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "327", "180", "26", "54", null, null, this);
            obj.getSetter("taborder").set("65");
            obj.set_text("g");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 540, 559, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_7022");
            		p.set_titletext("수주상품입력");

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

        this.loadIncludeScript("OMG_DS_SC_7022.xfdl");

       
    };
}
)();
