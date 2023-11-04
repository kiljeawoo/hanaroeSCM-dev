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
                this.set_name("OMG_DS_SC_8421");
                this.set_classname("OMG_DS_SC_7022");
                this.set_titletext("상품/사업장별 판매정보 상세");
                this._setFormPosition(0,0,540,512);
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
            obj = new Grid("Grid04", "absolute", "0", "159", "540", "353", null, null, this);
            obj.set_taborder("51");
            obj.set_binddataset("grd01");
            obj.set_autofittype("col");
            obj.set_summarytype("top");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/><Column size=\"228\"/><Column size=\"130\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"50\" band=\"head\"/><Row size=\"63\"/><Row size=\"63\"/></Rows><Band id=\"head\"><Cell text=\"마트코드\"/><Cell col=\"1\" colspan=\"2\" text=\"마트명\"/><Cell row=\"1\" text=\"수량\"/><Cell row=\"1\" col=\"1\" text=\"금액(만원)\"/><Cell row=\"1\" col=\"2\" text=\"합계대비(%)\"/></Band><Band id=\"body\"><Cell style=\"align: ;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column0\"/><Cell col=\"1\" colspan=\"2\" style=\"align:left middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:Column1\"/><Cell row=\"1\" style=\"align:right middle;\"/><Cell row=\"1\" col=\"1\" style=\"align:right middle;\"/><Cell row=\"1\" col=\"2\" style=\"align:right middle;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "0", "64", "540", "95", null, null, this);
            obj.set_cssclass("grd_Wf_SumData");
            obj.set_taborder("52");
            obj.set_binddataset("da_grd");
            obj.set_scrollbars("none");
            obj.set_autofittype("col");
            obj.set_summarytype("top");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"95\"/><Column size=\"240\"/><Column size=\"125\"/></Columns><Rows><Row size=\"47\" band=\"head\"/><Row size=\"47\" band=\"summ\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"수량\"/><Cell col=\"2\" cssclass=\"grd_essential\" text=\"금액(만원)\"/><Cell col=\"3\" text=\"합계대비(%)\"/></Band><Band id=\"summary\"><Cell style=\"align:center middle;color:#ffffffff;color2:#ffffffff;\" text=\"합계\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0", "0", "153", "64", null, null, this);
            obj.getSetter("taborder").set("53");
            obj.set_text("상품정보");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "153", "0", "387", "64", null, null, this);
            obj.getSetter("taborder").set("54");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "157", "5", "368", "54", null, null, this);
            obj.set_taborder("55");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 540, 512, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_7022");
            		p.set_titletext("상품/사업장별 판매정보 상세");

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

        this.loadIncludeScript("OMG_DS_SC_8421.xfdl");

       
    };
}
)();
