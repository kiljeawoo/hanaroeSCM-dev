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
                this.set_name("OMG_DS_SC_7070_02");
                this.set_classname("OMG_DS_SC_7022");
                this.set_titletext("매입처별 검수실적 상세");
                this._setFormPosition(0,0,540,931);
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
            obj = new Div("Div00", "absolute", "0", "528", "540", "401", null, null, this);
            obj.set_taborder("69");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Static("Static65", "absolute", "0", "0", "540", "48", null, null, this.Div00);
            obj.getSetter("taborder").set("1");
            obj.set_cssclass("sta_WF_Gridbg");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static66", "absolute", "0", "5", "244", "38", null, null, this.Div00);
            obj.getSetter("taborder").set("0");
            obj.set_text("메입처별 검수상세");
            obj.set_cssclass("sta_WF_GridCount01");
            this.Div00.addChild(obj.name, obj);
            obj = new Grid("Grid04", "absolute", "0", "48", "540", "353", null, null, this.Div00);
            obj.set_taborder("2");
            obj.set_binddataset("grd01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"288\"/><Column size=\"250\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"50\" band=\"head\"/><Row size=\"63\"/><Row size=\"63\"/></Rows><Band id=\"head\"><Cell text=\"매출일자-전표번호\"/><Cell col=\"1\" text=\"검수일자\"/><Cell row=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"공급금액\"/><Cell row=\"1\" col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"총공급금액\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: ;\" text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"text\" style=\"align: ;\" text=\"bind:Column1\"/><Cell row=\"1\" style=\"align:right middle;\" text=\"bind:Column2\"/><Cell row=\"1\" col=\"1\" style=\"align:right middle;\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "54", "193", "64", null, null, this);
            obj.getSetter("taborder").set("53");
            obj.set_text("일자구분");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "277", "54", "263", "64", null, null, this);
            obj.getSetter("taborder").set("54");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("2015-01-01 ~ 2015-04-23");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0", "117", "193", "64", null, null, this);
            obj.getSetter("taborder").set("55");
            obj.set_text("거래구분");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "193", "117", "347", "64", null, null, this);
            obj.getSetter("taborder").set("56");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("전체");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "0", "180", "193", "64", null, null, this);
            obj.getSetter("taborder").set("59");
            obj.set_text("계통계약구분");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "193", "180", "347", "64", null, null, this);
            obj.getSetter("taborder").set("60");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("(주)농협유통창동유통센터(소매)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "243", "193", "127", null, null, this);
            obj.getSetter("taborder").set("61");
            obj.set_text("협력업체");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "193", "243", "347", "64", null, null, this);
            obj.getSetter("taborder").set("62");
            obj.set_text("880898342003");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "0", "369", "193", "127", null, null, this);
            obj.getSetter("taborder").set("63");
            obj.set_text("사업장");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "193", "369", "347", "64", null, null, this);
            obj.getSetter("taborder").set("64");
            obj.set_text("880898342003");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "193", "432", "347", "64", null, null, this);
            obj.getSetter("taborder").set("66");
            obj.set_text("(주)농협유통창동유통센터(소매)");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "193", "306", "347", "64", null, null, this);
            obj.getSetter("taborder").set("67");
            obj.set_text("(주)도루코리빙");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "193", "54", "90", "64", null, null, this);
            obj.getSetter("taborder").set("68");
            obj.set_text("매출일");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static63", "absolute", "0", "0", "540", "55", null, null, this);
            obj.getSetter("taborder").set("51");
            obj.set_cssclass("sta_WF_CRUDbg");
            obj.set_text("매입처별 검수상세 개요");
            this.addChild(obj.name, obj);

            obj = new Button("Button30", "absolute", "0", "495", "540", "33", null, null, this);
            obj.set_taborder("65");
            obj.set_text("추가정보 더보기");
            obj.set_cssclass("btn_WF_InputControlBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 540, 401, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("69");
            		p.set_text("Div00");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 931, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_7022");
            		p.set_titletext("매입처별 검수실적 상세");

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

        this.loadIncludeScript("OMG_DS_SC_7070_02.xfdl");

       
    };
}
)();
