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
                this.set_name("OMG_DS_SC_7070");
                this.set_classname("OMG_DS_SC_7022");
                this.set_titletext("매입처벌 검수실적 조회");
                this._setFormPosition(0,0,540,692);
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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">성남유통센터(소매)</Col><Col id=\"Column1\">672,000</Col><Col id=\"Column2\">739,200</Col></Row><Row><Col id=\"Column0\">(주)농협유통양재점</Col><Col id=\"Column1\">323,880</Col><Col id=\"Column2\">356,268</Col></Row><Row><Col id=\"Column0\">(주)농협유통창동유통센터(소매)</Col><Col id=\"Column1\">726,200</Col><Col id=\"Column2\">798,820</Col></Row><Row><Col id=\"Column0\">성남유통센터(소매)</Col><Col id=\"Column1\">672,000</Col><Col id=\"Column2\">739,200</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "0", "356", "540", "335", null, null, this);
            obj.set_taborder("48");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "0", "0", "540", "95", null, null, this.Div01);
            obj.set_cssclass("grd_Wf_SumData");
            obj.set_taborder("0");
            obj.set_binddataset("da_grd");
            obj.set_scrollbars("none");
            obj.set_autofittype("col");
            obj.set_summarytype("top");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"230\"/><Column size=\"230\"/></Columns><Rows><Row size=\"47\" band=\"head\"/><Row size=\"63\"/><Row size=\"47\" band=\"summ\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" cssclass=\"grd_essential\" text=\"공급금액\"/><Cell col=\"2\" text=\"총공급금액\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/></Band><Band id=\"summary\"><Cell style=\"align:center middle;color:#ffffffff;color2:#ffffffff;\" text=\"합계\"/><Cell col=\"1\" text=\"1722080\" mask=\"#,###,###\"/><Cell col=\"2\" text=\"1894288\" mask=\"#,###,###\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);
            obj = new Grid("Grid04", "absolute", "0", "95", "540", "240", null, null, this.Div01);
            obj.set_taborder("1");
            obj.set_binddataset("grd01");
            obj.set_autofittype("col");
            obj.set_summarytype("top");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"260\"/><Column size=\"140\"/><Column size=\"140\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"63\"/></Rows><Band id=\"head\"><Cell text=\"매입처명\"/><Cell col=\"1\" text=\"공급금액\"/><Cell col=\"2\" text=\"총공급금액\"/></Band><Band id=\"body\"><Cell style=\"align:left middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column0\" wordwrap=\"char\"/><Cell col=\"1\" style=\"align:right middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column1\"/><Cell col=\"2\" style=\"align:right middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column1\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "0", "0", "540", "340", null, null, this);
            obj.set_taborder("44");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "15", "16", "162", "54", null, null, this.Div00);
            obj.getSetter("taborder").set("85");
            obj.set_text("일자구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("Button27", "absolute", "15", "271", "510", "49", null, null, this.Div00);
            obj.set_taborder("86");
            obj.set_text("조회");
            obj.set_cssclass("btn_WFSA_SearchBtn");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "78", "162", "54", null, null, this.Div00);
            obj.getSetter("taborder").set("87");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Calendar("Calendar01", "absolute", "176", "78", "171", "54", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("88");
            obj.set_value("20150501");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("Calendar02", "absolute", "354", "78", "171", "54", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("89");
            obj.set_value("20150501");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static01", "absolute", "15", "140", "162", "54", null, null, this.Div00);
            obj.getSetter("taborder").set("91");
            obj.set_text("거래구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "176", "140", "349", "54", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            var Combo00_innerdataset = new Dataset("Combo00_innerdataset", this.Div00.Combo00);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">가나다</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_taborder("92");
            obj.set_text("전체");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj.set_value("1");
            obj = new Static("Static03", "absolute", "15", "202", "162", "54", null, null, this.Div00);
            obj.getSetter("taborder").set("93");
            obj.set_text("계통계약구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Combo("Combo01", "absolute", "176", "202", "349", "54", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            var Combo01_innerdataset = new Dataset("Combo01_innerdataset", this.Div00.Combo01);
            Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">가나다</Col></Row></Rows>");
            obj.set_innerdataset(Combo01_innerdataset);
            obj.set_taborder("94");
            obj.set_text("전체");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj.set_value("1");
            obj = new Combo("Combo02", "absolute", "176", "16", "349", "54", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            var Combo02_innerdataset = new Dataset("Combo02_innerdataset", this.Div00.Combo02);
            Combo02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">매출일</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">매출일</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">매출일</Col></Row></Rows>");
            obj.set_innerdataset(Combo02_innerdataset);
            obj.set_taborder("97");
            obj.set_text("매출일");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj.set_value("1");

            obj = new Button("Button31", "absolute", "0", "340", "540", "16", null, null, this);
            obj.set_taborder("45");
            obj.set_cssclass("btn_WF_SearchControlBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 540, 335, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("48");
            		p.set_text("Div01");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 340, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("44");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 692, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_7022");
            		p.set_titletext("매입처벌 검수실적 조회");

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

        this.loadIncludeScript("OMG_DS_SC_7070.xfdl");

       
    };
}
)();
