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
                this.set_name("OMG_DS_SC_8311");
                this.set_classname("OMG_DS_SC_7022");
                this.set_titletext("전표별 검수실적 상품상세");
                this._setFormPosition(0,0,540,355);
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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">8801038564173</Col><Col id=\"Column2\">도루코페이스쉐이빙폼210ml</Col><Col id=\"Column3\">[1] 과세</Col><Col id=\"Column4\">99,792</Col><Col id=\"Column5\">4,158</Col><Col id=\"Column6\">24</Col><Col id=\"Column7\">90,720</Col><Col id=\"Column8\">9,072</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">8801038564173</Col><Col id=\"Column2\">도루코페이스XL면도날8입</Col><Col id=\"Column3\">[1] 과세</Col><Col id=\"Column4\">99,792</Col><Col id=\"Column5\">21,433</Col><Col id=\"Column6\">12</Col><Col id=\"Column7\">90,720</Col><Col id=\"Column8\">9,072</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">8801038564173</Col><Col id=\"Column2\">도루코페이스쉐이빙폼210ml</Col><Col id=\"Column3\">[1] 과세</Col><Col id=\"Column4\">257,268</Col><Col id=\"Column5\">4,158</Col><Col id=\"Column6\">6</Col><Col id=\"Column7\">233,888</Col><Col id=\"Column8\">23,222</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">8801038564173</Col><Col id=\"Column2\">도루코페이스XL면도날...</Col><Col id=\"Column3\">[1] 과세</Col><Col id=\"Column4\">257,268</Col><Col id=\"Column5\">4,158</Col><Col id=\"Column6\">10</Col><Col id=\"Column7\">233,888</Col><Col id=\"Column8\">23,222</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid04", "absolute", "0", "0", "540", "352", null, null, this);
            obj.set_taborder("0");
            obj.set_binddataset("grd01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"154\"/><Column size=\"100\"/><Column size=\"85\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"50\" band=\"head\"/><Row size=\"63\"/><Row size=\"63\"/></Rows><Band id=\"head\"><Cell cssclass=\"Cellgrd_WF_Head\" text=\"경제통합상품코드\"/><Cell col=\"1\" colspan=\"3\" cssclass=\"Cellgrd_WF_Head\" text=\"상품명\"/><Cell col=\"4\" text=\"과세구분\"/><Cell row=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"총공급금액\"/><Cell row=\"1\" col=\"1\" displaytype=\"normal\" edittype=\"none\" cssclass=\"Cellgrd_WF_Head\" text=\"매입단가\"/><Cell row=\"1\" col=\"2\" displaytype=\"normal\" edittype=\"none\" cssclass=\"Cellgrd_WF_Head\" text=\"매입수량\"/><Cell row=\"1\" col=\"3\" cssclass=\"Cellgrd_WF_Head\" text=\"공급금액\"/><Cell row=\"1\" col=\"4\" cssclass=\"Cellgrd_WF_Head\" text=\"매입부가세\"/></Band><Band id=\"body\"><Cell cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column1\"/><Cell col=\"1\" colspan=\"3\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column2\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column3\"/><Cell row=\"1\" style=\"align:right middle;\" text=\"bind:Column4\"/><Cell row=\"1\" col=\"1\" style=\"align:right middle;\" text=\"bind:Column5\"/><Cell row=\"1\" col=\"2\" text=\"bind:Column6\"/><Cell row=\"1\" col=\"3\" style=\"align:right middle;\" text=\"bind:Column7\"/><Cell row=\"1\" col=\"4\" style=\"align:right middle;\" text=\"bind:Column8\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 540, 355, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_7022");
            		p.set_titletext("전표별 검수실적 상품상세");

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

        this.loadIncludeScript("OMG_DS_SC_8311.xfdl");

       
    };
}
)();
