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
                this.set_name("SelectGLN");
                this._setFormPosition(0,0,200,30);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_bzplc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"CLNTNM\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static01", "absolute", null, "5", "5", "11", "6", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Vdash");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_bzplc", "absolute", "0", "0", null, "30", "29", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("WF_Essential");
            obj.set_displaynulltext("사업장코드 입력 + ENTER");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "30", "30", "0", null, this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 200, 30, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("AuthorityWorkplace");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("SelectGLN.xfdl", "lib::comLib.xjs");
        this.registerScript("SelectGLN.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	try {
        		this.parent.parent.fn_callParent();
        	} catch(e) {}
        }

        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_openSearchPopup(false);
        }

        this.fn_openSearchPopup = function(auto)
        {
        	var params = {
        		autoType:auto,
        		searchText:this.gfn_nullToEmpty(this.edt_bzplc.value)
        	}

        	var oArg = {autoPop:params};
        	var sOption = "autosize=true, titleText=false";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("POPUP_BZPLC","POPUP::POPUP_SRC_BZPLC.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	if (strVal != undefined) {
        		var valueArr = strVal.split(",");	
        		if (strId == "POPUP_BZPLC") {
        			var na_trpl_c = valueArr[0];
        			var clntnm = valueArr[1];
        			this.edt_bzplc.set_value(na_trpl_c + " (" + clntnm + ")");
        			this.ds_bzplc.clearData();
        			this.ds_bzplc.addRow();
        			this.ds_bzplc.setColumn(0, "NA_TRPL_C", na_trpl_c);
        			this.ds_bzplc.setColumn(0, "CLNTNM", clntnm);
        		}
        	}
        }

        this.edt_bzplc_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.fn_openSearchPopup(true);
        	}
        }

        this.fn_getSelectedGln = function()
        {
        	if (this.ds_bzplc.rowcount == 0) {
        		return null;
        	}
        	return this.ds_bzplc.getColumn(0, "NA_TRPL_C");
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_bzplc.addEventHandler("onload", this.ds_authorityWorkplace_onload, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.edt_bzplc.addEventHandler("onkeydown", this.edt_bzplc_onkeydown, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);

        };

        this.loadIncludeScript("SelectGLN.xfdl", true);

       
    };
}
)();
