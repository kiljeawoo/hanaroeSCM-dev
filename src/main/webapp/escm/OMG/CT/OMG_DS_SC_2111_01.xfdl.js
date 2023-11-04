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
                this.set_name("OMG_DS_SC_2111_01");
                this.set_titletext("전자계약서신청상세 농협");
                this.set_scrollbars("autoboth");
                this._setFormPosition(0,0,902,600);
            }
            this.style.set_color("#999999ff");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_ctrwDsc", "absolute", "0", "0", "890", "1120", null, null, this);
            obj.set_taborder("254");
            obj.set_text("Div00");
            obj.style.set_background("transparent");
            obj.set_scrollbars("none");
            obj.set_url("OMG.CT::OMG_DS_SC_2111.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_ctrwBrk", "absolute", "910", "8", "890", null, null, "15", this);
            obj.set_taborder("255");
            obj.set_text("Div00");
            obj.style.set_background("white");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_chk", "absolute", "721", "16", "59", "15", null, null, this);
            obj.set_taborder("256");
            obj.set_visible("false");
            obj.set_value("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_CtrwChg", "absolute", "793", "16", "59", "15", null, null, this);
            obj.set_taborder("257");
            obj.set_value("0");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 902, 600, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("전자계약서신청상세 농협");
            		p.style.set_color("#999999ff");
            		p.set_scrollbars("autoboth");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "OMG.CT::OMG_DS_SC_2111.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_2111_01.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_2111_01.xfdl", function() {
        //include "lib::comLib.xjs";

        
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj,e);
        	
        //	   var ds_parent = this.parent.dsArg;
        //    var new_elt = this.gfn_nullToEmpty(this.parent.new_elt);  //상담신청번호
            var CtrwChg = this.gfn_nullToEmpty(this.parent.CTRW_CHG);  //상담신청번호
        //    trace("2111-01  CtrwChg :  " + CtrwChg)
            this.resetScroll() ;
        	this.edt_CtrwChg.set_value(CtrwChg) ; 
        	
        }

        this.OMG_DS_SC_2111_01_onbeforeclose = function(obj,e)
        {
               if(obj.name == e.fromreferenceobject.name) {
               
                    trace(this.div_ctrwDsc.visible)     
        			if(this.div_ctrwDsc.visible == false){
        				if(this.edt_CtrwChg.value != 2 ){
        //				trace("this.parent");
        					return ("화면을 완전히 벗어나게 됩니다. 그래도 종료하시겠습니까?");
        				}
        			}  
        	    
        	   }
        }
         
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("onbeforeclose", this.OMG_DS_SC_2111_01_onbeforeclose, this);

        };

        this.loadIncludeScript("OMG_DS_SC_2111_01.xfdl");
        this.loadPreloadList();
       
    };
}
)();
