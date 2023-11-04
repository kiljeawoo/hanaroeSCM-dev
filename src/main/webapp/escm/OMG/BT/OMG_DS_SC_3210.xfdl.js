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
                this.set_name("pattern_01");
                this.set_classname("pattern_01");
                this.set_titletext("상담신청내역조회");
                this._setFormPosition(0,0,993,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">가나다라마바</Col><Col id=\"Column4\">2015-01-01</Col><Col id=\"Column5\">신청</Col></Row><Row><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">가나다라마바</Col><Col id=\"Column4\">2015-01-02</Col><Col id=\"Column5\">보완</Col></Row><Row><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">가나다라마바</Col><Col id=\"Column4\">2015-01-03</Col><Col id=\"Column5\">재신청</Col></Row><Row><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">가나다라마바</Col><Col id=\"Column4\">2015-01-04</Col><Col id=\"Column5\">신청</Col></Row><Row><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">가나다라마바</Col><Col id=\"Column4\">2015-01-05</Col><Col id=\"Column5\">보완</Col></Row><Row><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">가나다라마바</Col><Col id=\"Column4\">2015-01-06</Col><Col id=\"Column5\">재신청</Col></Row><Row><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">가나다라마바</Col><Col id=\"Column4\">2015-01-07</Col><Col id=\"Column5\">신청</Col></Row><Row><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">가나다라마바</Col><Col id=\"Column4\">2015-01-08</Col><Col id=\"Column5\">보완</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", "0", "29", null, "69", "15", null, this);
            obj.set_taborder("73");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", "91", "21", null, null, this.Div00);
            obj.getSetter("taborder").set("38");
            obj.set_text("신청일자");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "36", "91", "21", null, null, this.Div00);
            obj.getSetter("taborder").set("39");
            obj.set_text("담당바이어");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "622", "10", "257", "21", null, null, this.Div00);
            obj.getSetter("taborder").set("44");
            obj.set_text("※ 신청, 보완, 재신청, 접수, 거절, 완료");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "359", "10", "91", "21", null, null, this.Div00);
            obj.getSetter("taborder").set("46");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Combo("Combo02", "absolute", "450", "10", "151", "21", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            var Combo02_innerdataset = new Dataset("Combo02_innerdataset", this.Div00.Combo02);
            Combo02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">신청</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">보완</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">재신청</Col></Row></Rows>");
            obj.set_innerdataset(Combo02_innerdataset);
            obj.set_taborder("48");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("0");
            obj.set_index("0");
            obj.set_text("전체");
            obj = new Edit("Edit04", "absolute", "106", "36", "175", "21", null, null, this.Div00);
            obj.set_taborder("49");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button08", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("11");
            obj.set_text("이력");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button09", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "922", "21", "56", "8", null, null, this);
            obj.getSetter("taborder").set("56");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "978", "0", "15", "490", null, null, this);
            obj.getSetter("taborder").set("57");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "0", "97", null, null, "15", "0", this);
            obj.set_taborder("69");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "-93", "228", "21", null, null, this.Div02);
            obj.getSetter("taborder").set("2");
            obj.set_text("상담 신청 조회");
            obj.set_cssclass("sta_WF_Subtitle");
            this.Div02.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "0", "42", null, "171", "0", null, this.Div02);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"신청자\"/><Cell col=\"1\" text=\"상품분류\"/><Cell col=\"2\" text=\"담당바이어\"/><Cell col=\"3\" text=\"신청일자\"/><Cell col=\"4\" text=\"진행상태\"/></Band><Band id=\"body\"><Cell text=\"bind:Column1\"/><Cell col=\"1\" text=\"bind:Column2\"/><Cell col=\"2\" text=\"bind:Column3\"/><Cell col=\"3\" text=\"bind:Column4\"/><Cell col=\"4\" text=\"bind:Column5\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("Button75", "absolute", "458", "0", null, "12", "457", null, this.Div02);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "922", "98", "56", "15", null, null, this);
            obj.getSetter("taborder").set("58");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "922", "134", "56", "5", null, null, this);
            obj.getSetter("taborder").set("70");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00", "absolute", "107", "40", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("75");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Calendar("Calendar01", "absolute", "218", "40", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("76");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static47", "absolute", "0", "0", "135", "21", null, null, this);
            obj.getSetter("taborder").set("77");
            obj.set_text("신청내역조회");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 69, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("73");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("69");
            		p.set_text("Div02");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("상담신청내역조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_3210.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_3210.xfdl", function() {
        //include "lib::comLib.xjs";

        this.Div02_Grid01_onheadclick = function(obj,e)
        {
        	if(e.cell == 0) {
        		this.gfn_setGridCheckAll(obj,e);
        	}
        }

        this.Static47_onclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div02.Grid01.addEventHandler("onheadclick", this.Div02_Grid01_onheadclick, this);
            this.Static47.addEventHandler("onclick", this.Static47_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_3210.xfdl");

       
    };
}
)();
