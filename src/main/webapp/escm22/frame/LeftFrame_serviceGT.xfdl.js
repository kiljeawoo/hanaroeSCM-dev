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
                this.set_name("LeftFrame");
                this._setFormPosition(0,0,190,552);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_menu", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_menu", "absolute", "0", "0", "190", null, null, "0", this);
            obj.set_taborder("21");
            obj.style.set_background("transparent");
            this.addChild(obj.name, obj);
            obj = new Static("sta_menu", "absolute", "0%", "0", null, null, "0%", "0", this.div_menu);
            obj.set_taborder("1");
            obj.set_cssclass("sta_LF_MenuGrdBg");
            this.div_menu.addChild(obj.name, obj);
            obj = new Grid("grd_menu", "absolute", "0", "8", null, null, "6.84%", "12", this.div_menu);
            obj.set_cssclass("grd_LF_Menu");
            obj.set_taborder("0");
            obj.set_binddataset("ds_menu");
            obj.set_scrollbars("autovert");
            obj.set_treeuseline("false");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("collapse,all");
            obj.style.set_padding("0 5 0 10");
            obj.style.set_cursor("hand");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" style=\"cursor:hand; :focused {background:EXPR(lev=='0'?&quot;URL('theme://images/grd_LF_Menu_1dpth.png') repeat-x&quot;:&quot;&quot;);background2:EXPR(lev=='0'?&quot;URL('theme://images/grd_LF_Menu_1dpth.png') repeat-x&quot;:&quot;&quot;);color:EXPR(lev=='0'?&quot;#3a3a3a&quot;:&quot;&quot;);color2:EXPR(lev=='0'?&quot;#3a3a3a&quot;:&quot;&quot;);font:EXPR(lev=='0'?&quot;bold 9 Gulim&quot;:&quot;&quot;);selectbackground:EXPR(lev=='0'?&quot;URL('theme://images/grd_LF_Menu_S.png') stretch&quot;:&quot;&quot;);selectfont:EXPR(lev=='0'?&quot;bold 9 Gulim&quot;:&quot;&quot;);}\" text=\"bind:MENU_NAME\" treestartlevel=\"0\" treelevel=\"bind:MENU_LEVEL\" tooltiptext=\"bind:MENU_NAME\"/></Band></Format></Formats>");
            this.div_menu.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv_list", "absolute", "190", "37", "267", "344", null, null, this);
            obj.set_text("PopupDiv01");
            obj.set_cssclass("pdiv_WF_MenuList");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0%", "0", null, "30", "0%", null, this.pdiv_list);
            obj.set_taborder("4");
            obj.set_text("메뉴검색결과");
            obj.set_cssclass("sta_WF_Menulist");
            this.pdiv_list.addChild(obj.name, obj);
            obj = new Grid("grd_list", "absolute", "5.66%", "45", null, "251", "5.66%", null, this.pdiv_list);
            obj.set_cssclass("grd_WF_pdiv");
            obj.set_taborder("5");
            obj.set_binddataset("ds_find");
            obj.set_autofittype("col");
            obj.style.set_cursor("hand");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"187\"/></Columns><Rows><Row size=\"28\"/></Rows><Band id=\"body\"><Cell style=\"line: ;\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:MENU_NAME\"/></Band></Format></Formats>");
            this.pdiv_list.addChild(obj.name, obj);
            obj = new Button("btn_cancel", "absolute", "50.19%", "306", null, "21", "34.34%", null, this.pdiv_list);
            obj.set_taborder("6");
            obj.set_text("취소");
            obj.style.set_cursor("hand");
            this.pdiv_list.addChild(obj.name, obj);
            obj = new Button("btn_ok", "absolute", "33.96%", "306", null, "21", "50.57%", null, this.pdiv_list);
            obj.set_taborder("7");
            obj.set_text("확인");
            obj.style.set_cursor("hand");
            this.pdiv_list.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 190, 0, this.div_menu,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("21");
            		p.style.set_background("transparent");

            	}
            );
            this.div_menu.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 267, 344, this.pdiv_list,
            	//-- Layout function
            	function(p) {
            		p.set_text("PopupDiv01");
            		p.set_cssclass("pdiv_WF_MenuList");
            		p.set_visible("false");

            	}
            );
            this.pdiv_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 190, 552, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("LeftFrame");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("LeftFrame_serviceGT.xfdl", "lib::comLib.xjs");
        this.registerScript("LeftFrame_serviceGT.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.nCurRow = 0; 
        this.treeStatus = 0;

        this.form_onload = function(obj,e)
        {
        	this.ds_menu.copyData(application.gds_serviceGT);
        	this.ds_menu.filter("USE_YN!='N'");
        }

        this.grd_oncellclick = function(obj,e)
        {
        	//트리버튼의 영역이 눌렸을 경우는 로직을 타지 않도록 처리 함.	
        	if (e.canvasX < 26){  
        		return; 
        	}
        	
        	var objDs = this[obj.binddataset];

        	if (this.treeStatus == 1){
        		this.treeStatus = 0;
        		return;
        	}

        	var childRow = obj.getTreeChildRow(objDs.rowposition, 0, true);

        	// 자식 노드가 존재할 경우
        	if (childRow >= 0) {
        		var gridRow = obj.getTreeRow(objDs.rowposition);
        		if (obj.isTreeCollapsedRow(childRow, true)) {
        			obj.setTreeStatus(gridRow, true);
        		} else  {
        			obj.setTreeStatus(gridRow, false);
        		}
        	}
        	this.treeStatus = 0;
        	
        	var nLv = objDs.getColumn(objDs.rowposition,"MENU_LEVEL");
        	
        	if (nLv == 1) {
        		var psMenuId = objDs.getColumn(objDs.rowposition,"MENU_ID");
        		if (obj.name == "grd_menu") {
        			this.gfn_OpenMenuId(psMenuId, "", "GT");
        		} else {
        			this.gfn_OpenMenuId(psMenuId, "", "INFO");
        		}		
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_menu.grd_menu.addEventHandler("oncellclick", this.grd_oncellclick, this);
            this.pdiv_list.grd_list.addEventHandler("oncelldblclick", this.pdiv_list_grd_list_oncelldblclick, this);
            this.pdiv_list.btn_cancel.addEventHandler("onclick", this.pdiv_list_btn_cancel_onclick, this);
            this.pdiv_list.btn_ok.addEventHandler("onclick", this.pdiv_list_btn_ok_onclick, this);

        };

        this.loadIncludeScript("LeftFrame_serviceGT.xfdl", true);

       
    };
}
)();
