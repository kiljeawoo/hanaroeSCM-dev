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
                this.set_name("OMG_DS_SC_7120");
                this.set_classname("OMG_DS_SC_7022");
                this.set_titletext("상품별 물류센터 재고현황 조회");
                this._setFormPosition(0,0,540,680);
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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\"/><Col id=\"Column2\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "0", "232", "540", "448", null, null, this);
            obj.set_taborder("53");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "0", "0", "540", "95", null, null, this.Div01);
            obj.set_cssclass("grd_Wf_SumData");
            obj.set_taborder("0");
            obj.set_binddataset("da_grd");
            obj.set_scrollbars("none");
            obj.set_autofittype("col");
            obj.set_summarytype("top");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"120\"/><Column size=\"338\"/></Columns><Rows><Row size=\"47\" band=\"head\"/><Row size=\"47\" band=\"summ\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"재고수량\"/><Cell col=\"2\" cssclass=\"grd_essential\" text=\"재고금액(만원)\"/></Band><Band id=\"summary\"><Cell style=\"align:center middle;color:#ffffffff;color2:#ffffffff;\" text=\"합계\"/><Cell col=\"1\"/><Cell col=\"2\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);
            obj = new Grid("Grid04", "absolute", "0", "95", "540", "353", null, null, this.Div01);
            obj.set_taborder("1");
            obj.set_binddataset("grd01");
            obj.set_autofittype("col");
            obj.set_summarytype("top");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/><Column size=\"359\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"50\" band=\"head\"/><Row size=\"63\"/><Row size=\"63\"/></Rows><Band id=\"head\"><Cell text=\"상품코드\"/><Cell col=\"1\" text=\"상품명\"/><Cell row=\"1\" text=\"재고수량\"/><Cell row=\"1\" col=\"1\" text=\"금액(만원)\"/></Band><Band id=\"body\"><Cell style=\"align: ;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column0\"/><Cell col=\"1\" style=\"align:left middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column1\" wordwrap=\"char\"/><Cell row=\"1\" style=\"align:right middle;\"/><Cell row=\"1\" col=\"1\" style=\"align:right middle;\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "0", "0", "540", "216", null, null, this);
            obj.set_taborder("44");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "15", "16", "122", "54", null, null, this.Div00);
            obj.getSetter("taborder").set("85");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WFSA_Label");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("Button27", "absolute", "15", "147", "510", "49", null, null, this.Div00);
            obj.set_taborder("86");
            obj.set_text("조회");
            obj.set_cssclass("btn_WFSA_SearchBtn");
            this.Div00.addChild(obj.name, obj);
            obj = new Combo("Combo00", "absolute", "15", "78", "235", "54", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            var Combo00_innerdataset = new Dataset("Combo00_innerdataset", this.Div00.Combo00);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">거래처코드</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">가나다</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_taborder("92");
            obj.set_text("전체");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj.set_value("1");
            obj = new Edit("Edit00", "absolute", "257", "78", "268", "54", null, null, this.Div00);
            obj.set_taborder("96");
            this.Div00.addChild(obj.name, obj);
            obj = new Calendar("Calendar01", "absolute", "137", "16", "184", "54", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("97");
            obj.set_value("20150501");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("Calendar02", "absolute", "341", "16", "184", "54", null, null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            obj.set_taborder("98");
            obj.set_value("20150501");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static09", "absolute", "318", "16", "26", "54", null, null, this.Div00);
            obj.getSetter("taborder").set("99");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button31", "absolute", "0", "216", "540", "16", null, null, this);
            obj.set_taborder("45");
            obj.set_cssclass("btn_WF_SearchControlBtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 540, 448, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("53");
            		p.set_text("Div01");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 216, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("44");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 680, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_7022");
            		p.set_titletext("상품별 물류센터 재고현황 조회");

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

        this.loadIncludeScript("OMG_DS_SC_7120.xfdl");

       
    };
}
)();
