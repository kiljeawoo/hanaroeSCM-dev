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
                this.set_name("OMG_DS_SC_3121");
                this.set_titletext("상담신청상세");
                this._setFormPosition(0,0,803,597);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button06", "absolute", null, "0", "41", "21", "58", null, this);
            obj.set_taborder("132");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button08", "absolute", null, "0", "41", "21", "15", null, this);
            obj.set_taborder("133");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "0", "41", "110", "29", null, null, this);
            obj.set_taborder("146");
            obj.set_text("입력결과");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "0", "69", "110", "29", null, null, this);
            obj.set_taborder("147");
            obj.set_text("전송상태");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "109", "41", null, "29", "15", null, this);
            obj.set_taborder("152");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "109", "69", null, "29", "15", null, this);
            obj.set_taborder("153");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01", "absolute", "117", "73", "308", "21", null, null, this);
            this.addChild(obj.name, obj);
            var Radio01_innerdataset = new Dataset("Radio01_innerdataset", this.Radio01);
            Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">거절</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">보완요청</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">접수</Col></Row></Rows>");
            obj.set_innerdataset(Radio01_innerdataset);
            obj.set_taborder("160");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");

            obj = new Button("Button01", "absolute", null, "113", "65", "21", "15", null, this);
            obj.set_taborder("183");
            obj.set_text("신청내역");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "521", "73", "263", "21", null, null, this);
            obj.set_taborder("188");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "788", "0", "15", "181", null, null, this);
            obj.set_taborder("194");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "113", "45", "671", "21", null, null, this);
            obj.set_taborder("195");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "114", "301", "21", null, null, this);
            obj.set_taborder("196");
            obj.set_text("수신내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "15", "21", "871", "20", null, null, this);
            obj.set_taborder("198");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "0", "139", null, "123", "15", null, this);
            obj.set_taborder("200");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"373\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"날짜\"/><Cell col=\"3\" text=\"실시간 통지방법\"/><Cell col=\"4\" text=\"등록자\"/></Band><Band id=\"body\"><Cell text=\"bind:Column2\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:Column5\"/><Cell col=\"2\" text=\"bind:Column6\"/><Cell col=\"3\" text=\"bind:Column7\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "0", "272", "110", "78", null, null, this);
            obj.set_taborder("202");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "109", "272", null, "78", "15", null, this);
            obj.set_taborder("203");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "113", "276", "671", "70", null, null, this);
            obj.set_taborder("204");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "0", "366", "301", "21", null, null, this);
            obj.set_taborder("205");
            obj.set_text("통보내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "0", "391", "110", "29", null, null, this);
            obj.set_taborder("206");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "0", "419", "110", "122", null, null, this);
            obj.set_taborder("207");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "109", "391", null, "29", "15", null, this);
            obj.set_taborder("208");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "109", "419", null, "122", "15", null, this);
            obj.set_taborder("209");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit08", "absolute", "113", "395", "671", "21", null, null, this);
            obj.set_taborder("213");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01", "absolute", "113", "423", "671", "114", null, null, this);
            obj.set_taborder("214");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "0", "540", "110", "29", null, null, this);
            obj.set_taborder("215");
            obj.set_text("실시간통지");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "109", "540", null, "29", "15", null, this);
            obj.set_taborder("216");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "0", "568", "110", "29", null, null, this);
            obj.set_taborder("217");
            obj.set_text("담당바이어");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "109", "568", null, "29", "15", null, this);
            obj.set_taborder("218");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "408", "568", "110", "29", null, null, this);
            obj.set_taborder("219");
            obj.set_text("연락처");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo08", "absolute", "521", "572", "51", "21", null, null, this);
            this.addChild(obj.name, obj);
            var Combo08_innerdataset = new Dataset("Combo08_innerdataset", this.Combo08);
            Combo08_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">010</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">011</Col></Row></Rows>");
            obj.set_innerdataset(Combo08_innerdataset);
            obj.set_taborder("222");
            obj.set_value("1");
            obj.set_text("010");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");

            obj = new Static("Static09", "absolute", "633", "572", "9", "21", null, null, this);
            obj.set_taborder("223");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "574", "572", "9", "21", null, null, this);
            obj.set_taborder("224");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit14", "absolute", "583", "572", "48", "21", null, null, this);
            obj.set_taborder("225");
            obj.set_value("1234");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit15", "absolute", "642", "572", "48", "21", null, null, this);
            obj.set_taborder("226");
            obj.set_value("1234");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "113", "572", "292", "21", null, null, this);
            obj.set_taborder("227");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00", "absolute", "117", "544", "54", "21", null, null, this);
            obj.set_taborder("230");
            obj.set_text("SMS");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01", "absolute", "415", "544", "66", "21", null, null, this);
            obj.set_taborder("231");
            obj.set_text("E-Mail");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03", "absolute", "171", "544", "234", "21", null, null, this);
            obj.set_taborder("232");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04", "absolute", "480", "544", "250", "21", null, null, this);
            obj.set_taborder("233");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("234");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "408", "69", "110", "29", null, null, this);
            obj.set_taborder("156");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 597, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("상담신청상세");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("OMG_DS_SC_3121.xfdl");
        this.loadPreloadList();
       
    };
}
)();
