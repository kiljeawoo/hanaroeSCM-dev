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
                this.set_classname("pattern_01");
                this.set_titletext("상담신청내역상세");
                this._setFormPosition(0,0,803,557);
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
            obj._setContents("<ColumnInfo><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">111-22-00001</Col><Col id=\"Column4\">2015-01-01</Col><Col id=\"Column5\">신청</Col></Row><Row><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">111-22-00002</Col><Col id=\"Column4\">2015-01-02</Col><Col id=\"Column5\">보완</Col></Row><Row><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">111-22-00003</Col><Col id=\"Column4\">2015-01-03</Col><Col id=\"Column5\">재신청</Col></Row><Row><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">111-22-00004</Col><Col id=\"Column4\">2015-01-04</Col><Col id=\"Column5\">신청</Col></Row><Row><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">111-22-00005</Col><Col id=\"Column4\">2015-01-05</Col><Col id=\"Column5\">보완</Col></Row><Row><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">111-22-00006</Col><Col id=\"Column4\">2015-01-06</Col><Col id=\"Column5\">재신청</Col></Row><Row><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">111-22-00007</Col><Col id=\"Column4\">2015-01-07</Col><Col id=\"Column5\">신청</Col></Row><Row><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">111-22-00008</Col><Col id=\"Column4\">2015-01-08</Col><Col id=\"Column5\">보완</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Tab("Tab00", "absolute", "-0.12%", "0", null, "450", "0.25%", null, this);
            obj.set_taborder("12");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.Tab00);
            obj.set_url("OMG.BT::OMG_DS_SC_3110.xfdl");
            this.Tab00.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.Tab00);
            obj.set_text("tabpage2");
            obj.set_url("OMG.BT::OMG_DS_SC_3121.xfdl");
            this.Tab00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 557, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("상담신청내역상세");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "OMG.BT::OMG_DS_SC_3110.xfdl");
            this._addPreloadList("fdl", "OMG.BT::OMG_DS_SC_3121.xfdl");
        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("OMG_DS_SC_3211_copy.xfdl");
        this.loadPreloadList();
       
    };
}
)();
