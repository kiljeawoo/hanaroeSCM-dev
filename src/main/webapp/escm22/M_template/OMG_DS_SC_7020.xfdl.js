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
                this.set_name("OMG_DS_SC_7020");
                this.set_classname("OMG_DS_SC_7022");
                this.set_titletext("수주내역등록");
                this._setFormPosition(0,0,540,1154);
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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">8801034056446</Col><Col id=\"Column1\">종가집국산무약콩나물 200g</Col><Col id=\"Column2\">0/10</Col><Col id=\"Column3\">961.00/961.00</Col></Row><Row><Col id=\"Column0\">8801034056446</Col><Col id=\"Column1\">종가집국산무약콩나물 200g</Col><Col id=\"Column2\">0/10</Col><Col id=\"Column3\">961.00/961.00</Col></Row><Row><Col id=\"Column0\">8801034056446</Col><Col id=\"Column1\">종가집국산무약콩나물 200g</Col><Col id=\"Column2\">0/10</Col><Col id=\"Column3\">961.00/961.00</Col></Row><Row><Col id=\"Column0\">8801034056446</Col><Col id=\"Column1\">종가집국산무약콩나물 200g</Col><Col id=\"Column2\">0/10</Col><Col id=\"Column3\">961.00/961.00</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static12", "absolute", "153", "553", "387", "64", null, null, this);
            obj.getSetter("taborder").set("27");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01", "absolute", "157", "558", "368", "54", null, null, this);
            obj.set_taborder("36");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "0", "54", "153", "122", null, null, this);
            obj.getSetter("taborder").set("0");
            obj.set_text("발주처");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "153", "54", "387", "122", null, null, this);
            obj.getSetter("taborder").set("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "157", "59", "368", "54", null, null, this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03", "absolute", "157", "117", "310", "54", null, null, this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "525", "54", "15", "93", null, null, this);
            obj.getSetter("taborder").set("4");
            obj.style.set_background("#00ffff33");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "471", "117", "54", "54", null, null, this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_SearchBtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "0", "175", "153", "64", null, null, this);
            obj.getSetter("taborder").set("7");
            obj.set_text("발주처팀");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "153", "175", "387", "64", null, null, this);
            obj.getSetter("taborder").set("8");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit06", "absolute", "157", "180", "368", "54", null, null, this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "238", "153", "64", null, null, this);
            obj.getSetter("taborder").set("10");
            obj.set_text("배송요청일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "153", "238", "387", "64", null, null, this);
            obj.getSetter("taborder").set("11");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0", "301", "153", "64", null, null, this);
            obj.getSetter("taborder").set("13");
            obj.set_text("발주상태");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "153", "301", "387", "64", null, null, this);
            obj.getSetter("taborder").set("14");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "157", "306", "368", "54", null, null, this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00", "absolute", "157", "243", "368", "54", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("16");
            obj.set_value("20150501");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static05", "absolute", "0", "364", "153", "64", null, null, this);
            obj.getSetter("taborder").set("17");
            obj.set_text("발주자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "153", "364", "387", "64", null, null, this);
            obj.getSetter("taborder").set("18");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "157", "369", "368", "54", null, null, this);
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "0", "427", "153", "64", null, null, this);
            obj.getSetter("taborder").set("20");
            obj.set_text("지역코드");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "153", "427", "387", "64", null, null, this);
            obj.getSetter("taborder").set("21");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04", "absolute", "157", "432", "368", "54", null, null, this);
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "490", "153", "64", null, null, this);
            obj.getSetter("taborder").set("23");
            obj.set_text("수주량");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "153", "490", "387", "64", null, null, this);
            obj.getSetter("taborder").set("24");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "0", "553", "153", "64", null, null, this);
            obj.getSetter("taborder").set("26");
            obj.set_text("BOX수량");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "0", "616", "153", "64", null, null, this);
            obj.getSetter("taborder").set("29");
            obj.set_text("수주금액");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "153", "616", "387", "64", null, null, this);
            obj.getSetter("taborder").set("30");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00", "absolute", "157", "495", "368", "54", null, null, this);
            obj.set_taborder("32");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "0", "679", "153", "64", null, null, this);
            obj.getSetter("taborder").set("33");
            obj.set_text("공병");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "153", "679", "387", "64", null, null, this);
            obj.getSetter("taborder").set("34");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02", "absolute", "157", "621", "368", "54", null, null, this);
            obj.set_taborder("37");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit03", "absolute", "157", "684", "368", "54", null, null, this);
            obj.set_taborder("38");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit09", "absolute", "157", "684", "368", "54", null, null, this);
            obj.set_taborder("35");
            this.addChild(obj.name, obj);

            obj = new Static("Static64", "absolute", "0", "743", "540", "58", null, null, this);
            obj.getSetter("taborder").set("39");
            obj.set_cssclass("sta_WF_Gridbg");
            this.addChild(obj.name, obj);

            obj = new Button("Button36", "absolute", "305", "748", "70", "48", null, null, this);
            obj.set_taborder("40");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_GridBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button37", "absolute", "380", "748", "70", "48", null, null, this);
            obj.set_taborder("41");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_GridBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button38", "absolute", "455", "748", "70", "48", null, null, this);
            obj.set_taborder("42");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_GridBtn");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid04", "absolute", "0", "801", "540", "352", null, null, this);
            obj.set_taborder("43");
            obj.set_binddataset("grd01");
            obj.set_useselcolor("true");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"57\"/><Column size=\"189\"/><Column size=\"290\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"50\" band=\"head\"/><Row size=\"63\"/><Row size=\"63\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"순번\"/><Cell col=\"1\" text=\"상품코드\"/><Cell col=\"2\" text=\"상품명\"/><Cell row=\"1\" col=\"1\" text=\"수주량/배송예정량\"/><Cell row=\"1\" col=\"2\" text=\"계약단가/납품단가\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column1\"/><Cell col=\"1\" displaytype=\"text\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column0\"/><Cell col=\"2\" displaytype=\"text\" style=\"align:left middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column1\" wordwrap=\"char\"/><Cell row=\"1\" col=\"1\" style=\"align:right middle;\" text=\"bind:Column2\"/><Cell row=\"1\" col=\"2\" style=\"align:right middle;\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static63", "absolute", "0", "0", "540", "55", null, null, this);
            obj.getSetter("taborder").set("44");
            obj.set_cssclass("sta_WF_CRUDbg");
            this.addChild(obj.name, obj);

            obj = new Button("Button39", "absolute", "359", "4", "91", "46", null, null, this);
            obj.set_taborder("45");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button40", "absolute", "455", "4", "70", "46", null, null, this);
            obj.set_taborder("46");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 540, 1154, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_7022");
            		p.set_titletext("수주내역등록");

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

        this.loadIncludeScript("OMG_DS_SC_7020.xfdl");

       
    };
}
)();
