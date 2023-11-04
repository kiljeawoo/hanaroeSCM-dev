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
                this.set_name("OMG_DS_SC_8331");
                this.set_classname("OMG_DS_SC_7022");
                this.set_titletext("반품예정상세");
                this._setFormPosition(0,0,510,676);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_retannRqtD", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_C\" type=\"string\" size=\"32\"/><Column id=\"WRSNM\" type=\"string\" size=\"32\"/><Column id=\"RGD_UPR\" type=\"float\" size=\"8\"/><Column id=\"RGD_QT\" type=\"float\" size=\"8\"/><Column id=\"RGD_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"BYNG_DFN_AM\" type=\"float\" size=\"8\"/><Column id=\"BYNG_DFN_QT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"RGD_VAT\" type=\"float\" size=\"8\"/><Column id=\"BYNG_DFN_TROT_FEE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"BYNG_DFN_PHD_FEE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"VCBT_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"NA_RGD_RSN_DSC\" type=\"string\" size=\"32\"/><Column id=\"AJ_UPR\" type=\"float\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static28", "absolute", "0", "0", "510", "71", null, null, this);
            obj.getSetter("taborder").set("68");
            obj.set_text("반품예정상품");
            obj.set_cssclass("sta_POP_Title");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "440", "0", "70", "70", null, null, this);
            obj.set_taborder("69");
            obj.set_cssclass("btn_POP_Closebtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "153", "71", "215", "20", null, null, this);
            obj.getSetter("taborder").set("70");
            obj.set_visible("false");
            obj.style.set_background("#dc143c33");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "234", "656", "215", "20", null, null, this);
            obj.getSetter("taborder").set("71");
            obj.set_visible("false");
            obj.style.set_background("#dc143c33");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_dList", "absolute", "2.35%", "89", null, "577", "2.16%", null, this);
            obj.set_taborder("72");
            obj.set_binddataset("ds_retannRqtD");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"227\"/><Column size=\"90\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"63\"/></Rows><Band id=\"head\"><Cell text=\"상품코드\"/><Cell col=\"1\" text=\"상품명\"/><Cell col=\"2\" text=\"반품수량\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" style=\"align: ;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:NA_WRS_C\"/><Cell col=\"1\" style=\"align:left middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:WRSNM\" wordwrap=\"char\"/><Cell col=\"2\" style=\"align:right middle;\" cssclass=\"Cellgrd_WF_txt\" text=\"bind:RGD_QT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 510, 676, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_7022");
            		p.set_titletext("반품예정상세");

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
            this.addEventHandler("onload", this.OMG_DS_SC_8331_onload, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_8331.xfdl");

       
    };
}
)();
