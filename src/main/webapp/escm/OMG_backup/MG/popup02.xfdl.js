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
                this.set_name("popup01");
                this.set_titletext("공통코드테스트");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,1056,387);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_USR_TP", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_C_EXPL\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_HP", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_C_EXPL\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static09", "absolute", "0", "76", "17", "73", null, null, this);
            obj.set_taborder("8");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "17", "76", null, "140", "646", null, this);
            obj.set_taborder("39");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "34", "123", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("40");
            obj.set_innerdataset("@ds_USR_TP");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");

            obj = new Combo("Combo01", "absolute", "218", "123", "150", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("41");
            obj.set_innerdataset("@ds_HP");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");

            obj = new Static("Static00", "absolute", "36", "98", "120", "21", null, null, this);
            obj.set_taborder("42");
            obj.set_text("ds_USR_TP");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "220", "98", "120", "21", null, null, this);
            obj.set_taborder("43");
            obj.set_text("ds_HP");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00", "absolute", "519", "167", "90", "100", null, null, this);
            obj.set_taborder("44");
            obj.set_image("URL('theme://images/ico_LF_treeitem.png')");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 140, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("39");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1056, 387, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("공통코드테스트");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("popup02.xfdl", "lib::comLib.xjs");
        this.registerScript("popup02.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	var param = [  
         		{code:"USR_TP",   dsName:"ds_USR_TP",   selecttype:"A"},
         		{code:"HP"	,     dsName:"ds_HP", selecttype:"N"}
            ];

        	this.gfn_setPortalCommonCode(param);
        	//this.gfn_setPortalCommonCode(param);  portal공통코드호출용
        }

        //gfn_setCommonCode처리 후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        	trace("fn_commonAfterOnload");
        	
        	//콤보에 최상단Row보이도록 설정
        	this.Combo00.set_index(0);
        	this.Combo01.set_index(0);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);

        };

        this.loadIncludeScript("popup02.xfdl");

       
    };
}
)();
