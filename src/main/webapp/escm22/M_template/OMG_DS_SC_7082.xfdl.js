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
                this.set_name("OMG_DS_SC_7082");
                this.set_classname("OMG_DS_SC_7022");
                this.set_titletext("배송예정상품입력_반품상품상세");
                this._setFormPosition(0,0,540,938);
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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">2015-04-17-47245</Col><Col id=\"Column1\">2015-04-17</Col><Col id=\"Column2\">155,600</Col><Col id=\"Column3\">171,160</Col></Row><Row><Col id=\"Column0\">2015-04-51-42534</Col><Col id=\"Column1\">2015-04-21</Col><Col id=\"Column2\">570,600</Col><Col id=\"Column3\">627,660</Col></Row><Row><Col id=\"Column0\">2015-04-17-47245</Col><Col id=\"Column1\">2015-04-17</Col><Col id=\"Column2\">155,600</Col><Col id=\"Column3\">171,160</Col></Row><Row><Col id=\"Column0\">2015-04-51-42534</Col><Col id=\"Column1\">2015-04-17</Col><Col id=\"Column2\">570,600</Col><Col id=\"Column3\">627,660</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static01", "absolute", "0", "54", "133", "64", null, null, this);
            obj.getSetter("taborder").set("53");
            obj.set_text("상품코드");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "133", "54", "407", "64", null, null, this);
            obj.getSetter("taborder").set("54");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("8809389180639");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0", "117", "133", "64", null, null, this);
            obj.getSetter("taborder").set("55");
            obj.set_text("상품명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "133", "117", "407", "64", null, null, this);
            obj.getSetter("taborder").set("56");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("마이셰프 퓨어 스카이 프라이팬(30cm)");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "0", "180", "133", "64", null, null, this);
            obj.getSetter("taborder").set("59");
            obj.set_text("단위");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "133", "180", "407", "64", null, null, this);
            obj.getSetter("taborder").set("60");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("개(EA)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "243", "133", "64", null, null, this);
            obj.getSetter("taborder").set("61");
            obj.set_text("단가");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "133", "243", "407", "64", null, null, this);
            obj.getSetter("taborder").set("62");
            obj.set_text("21,758.00");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "0", "369", "133", "64", null, null, this);
            obj.getSetter("taborder").set("63");
            obj.set_text("반품금액");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "133", "369", "407", "64", null, null, this);
            obj.getSetter("taborder").set("64");
            obj.set_text("21,758.00");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "133", "432", "407", "64", null, null, this);
            obj.getSetter("taborder").set("66");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("1.00");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "133", "306", "407", "64", null, null, this);
            obj.getSetter("taborder").set("67");
            obj.set_text("1.00");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static63", "absolute", "0", "0", "540", "55", null, null, this);
            obj.getSetter("taborder").set("51");
            obj.set_cssclass("sta_WF_CRUDbg");
            obj.set_text("반품예정상품");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "0", "306", "133", "64", null, null, this);
            obj.getSetter("taborder").set("70");
            obj.set_text("반품수량");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "0", "432", "133", "64", null, null, this);
            obj.getSetter("taborder").set("71");
            obj.set_text("매입확정\r\n수량");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "133", "495", "407", "64", null, null, this);
            obj.getSetter("taborder").set("72");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("21,758.00");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "0", "495", "133", "64", null, null, this);
            obj.getSetter("taborder").set("73");
            obj.set_text("매입확정\r\n금액");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "0", "621", "133", "64", null, null, this);
            obj.getSetter("taborder").set("74");
            obj.set_text("환급\r\n수수료액");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "133", "621", "407", "64", null, null, this);
            obj.getSetter("taborder").set("75");
            obj.set_text("0.00");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "133", "684", "407", "64", null, null, this);
            obj.getSetter("taborder").set("76");
            obj.set_text("0.00");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "133", "558", "407", "64", null, null, this);
            obj.getSetter("taborder").set("77");
            obj.set_text("1,978.00");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "0", "558", "133", "64", null, null, this);
            obj.getSetter("taborder").set("78");
            obj.set_text("부가세액");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "0", "684", "133", "64", null, null, this);
            obj.getSetter("taborder").set("79");
            obj.set_text("물류\r\n수수료액");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "133", "747", "407", "64", null, null, this);
            obj.getSetter("taborder").set("80");
            obj.set_text("0.00");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "0", "747", "133", "64", null, null, this);
            obj.getSetter("taborder").set("81");
            obj.set_text("공병금액");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "133", "810", "407", "64", null, null, this);
            obj.getSetter("taborder").set("82");
            obj.set_text("31 상품하자(불량)");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "0", "810", "133", "64", null, null, this);
            obj.getSetter("taborder").set("83");
            obj.set_text("반품사유");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "0", "873", "133", "64", null, null, this);
            obj.getSetter("taborder").set("84");
            obj.set_text("조정단가");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "133", "873", "407", "64", null, null, this);
            obj.getSetter("taborder").set("85");
            obj.set_text("21,758.00");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 540, 938, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_7022");
            		p.set_titletext("배송예정상품입력_반품상품상세");

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

        this.loadIncludeScript("OMG_DS_SC_7082.xfdl");

       
    };
}
)();
