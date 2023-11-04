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
                this.set_name("OMG_DS_SC_7010_02");
                this.set_classname("OMG_DS_SC_7022");
                this.set_titletext("수주내역상세");
                this._setFormPosition(0,0,540,804);
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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">142,162</Col><Col id=\"Column2\">12</Col><Col id=\"Column3\">11,847</Col><Col id=\"Column4\">개(EA)</Col><Col id=\"Column5\">4입</Col><Col id=\"Column6\">12</Col><Col id=\"Column7\">도루코페이XL스면도날4입</Col><Col id=\"Column8\">8801038116877</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">142,162</Col><Col id=\"Column2\">6</Col><Col id=\"Column3\">21,436</Col><Col id=\"Column4\">개(EA)</Col><Col id=\"Column5\">8입</Col><Col id=\"Column6\">12</Col><Col id=\"Column7\">도루코페이XL스면도날4입</Col><Col id=\"Column8\">8801038116877</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">142,162</Col><Col id=\"Column2\">10</Col><Col id=\"Column3\">11,847</Col><Col id=\"Column4\">개(EA)</Col><Col id=\"Column5\">4입</Col><Col id=\"Column6\">12</Col><Col id=\"Column7\">도루코페이XL스면도날4입</Col><Col id=\"Column8\">8801038116877</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">142,162</Col><Col id=\"Column2\">11</Col><Col id=\"Column3\">21,436</Col><Col id=\"Column4\">개(EA)</Col><Col id=\"Column5\">8입</Col><Col id=\"Column6\">12</Col><Col id=\"Column7\">도루코페이XL스면도날4입</Col><Col id=\"Column8\">8801038116877</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0", "403", "540", "401", null, null, this);
            obj.set_taborder("66");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Static("Static65", "absolute", "0", "0", "540", "48", null, null, this.Div00);
            obj.getSetter("taborder").set("1");
            obj.set_cssclass("sta_WF_Gridbg");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static66", "absolute", "0", "5", "244", "38", null, null, this.Div00);
            obj.getSetter("taborder").set("0");
            obj.set_text("수주내역상세");
            obj.set_cssclass("sta_WF_GridCount01");
            this.Div00.addChild(obj.name, obj);
            obj = new Grid("Grid04", "absolute", "0", "48", "540", "352", null, null, this.Div00);
            obj.set_taborder("2");
            obj.set_binddataset("grd01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"80\"/><Column size=\"112\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"50\" band=\"head\"/><Row size=\"63\"/><Row size=\"63\"/></Rows><Band id=\"head\"><Cell text=\"수주금액\"/><Cell col=\"1\" text=\"수주량\"/><Cell col=\"2\" text=\"단가\"/><Cell col=\"3\" text=\"단위\"/><Cell col=\"4\" text=\"규격\"/><Cell col=\"5\" text=\"입수\"/><Cell row=\"1\" colspan=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"상품명\"/><Cell row=\"1\" col=\"3\" colspan=\"3\" text=\"상품코드\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align:right middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column1\"/><Cell col=\"1\" displaytype=\"text\" style=\"align:right middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column2\"/><Cell col=\"2\" style=\"align:right middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column3\"/><Cell col=\"3\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column4\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column5\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column6\"/><Cell row=\"1\" colspan=\"3\" style=\"align:left middle;\" text=\"bind:Column7\"/><Cell row=\"1\" col=\"3\" colspan=\"3\" text=\"bind:Column8\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "54", "153", "64", null, null, this);
            obj.getSetter("taborder").set("53");
            obj.set_text("발주일자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "153", "54", "387", "64", null, null, this);
            obj.getSetter("taborder").set("54");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("2015-01-01");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0", "117", "153", "64", null, null, this);
            obj.getSetter("taborder").set("55");
            obj.set_text("발주번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "153", "117", "387", "64", null, null, this);
            obj.getSetter("taborder").set("56");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("10095");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "0", "180", "153", "64", null, null, this);
            obj.getSetter("taborder").set("59");
            obj.set_text("발주처명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "153", "180", "387", "64", null, null, this);
            obj.getSetter("taborder").set("60");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("(주)농협유통창동유통센터(소매)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "243", "153", "64", null, null, this);
            obj.getSetter("taborder").set("61");
            obj.set_text("수주량");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "153", "243", "387", "64", null, null, this);
            obj.getSetter("taborder").set("62");
            obj.set_text("18");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "0", "306", "153", "64", null, null, this);
            obj.getSetter("taborder").set("63");
            obj.set_text("수주금액");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "153", "306", "387", "64", null, null, this);
            obj.getSetter("taborder").set("64");
            obj.set_text("270,798");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Button("Button30", "absolute", "0", "370", "540", "33", null, null, this);
            obj.set_taborder("65");
            obj.set_text("추가정보 더보기");
            obj.set_cssclass("btn_WF_InputControlBtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static63", "absolute", "0", "0", "540", "55", null, null, this);
            obj.getSetter("taborder").set("51");
            obj.set_cssclass("sta_WF_CRUDbg");
            obj.set_text("수주내역개요");
            this.addChild(obj.name, obj);

            obj = new Button("Button39", "absolute", "350", "4", "175", "46", null, null, this);
            obj.set_taborder("52");
            obj.set_text("배송예정서 작성");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 540, 401, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("66");
            		p.set_text("Div00");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("OMG_DS_SC_7010_02.xfdl");

       
    };
}
)();
