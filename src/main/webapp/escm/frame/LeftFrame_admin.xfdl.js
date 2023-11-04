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
            obj = new Dataset("mymenu", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">나의메뉴-업무화면01</Col><Col id=\"Column0\">URL('theme://images/ico_LF_treeitem.png')</Col></Row><Row><Col id=\"Column1\">나의메뉴-업무화면02</Col><Col id=\"Column0\">URL('theme://images/ico_LF_treeitem.png')</Col></Row><Row><Col id=\"Column1\">나의메뉴-업무화면03</Col><Col id=\"Column0\">URL('theme://images/ico_LF_treeitem.png')</Col></Row><Row><Col id=\"Column1\">나의메뉴-업무화면04</Col><Col id=\"Column0\">URL('theme://images/ico_LF_treeitem.png')</Col></Row><Row><Col id=\"Column1\">나의메뉴-업무화면05</Col><Col id=\"Column0\">URL('theme://images/ico_LF_treeitem.png')</Col></Row><Row><Col id=\"Column1\">나의메뉴-업무화면06</Col><Col id=\"Column0\">URL('theme://images/ico_LF_treeitem.png')</Col></Row><Row><Col id=\"Column1\">나의메뉴-업무화면07</Col><Col id=\"Column0\">URL('theme://images/ico_LF_treeitem.png')</Col></Row><Row><Col id=\"Column1\">나의메뉴-업무화면08</Col><Col id=\"Column0\">URL('theme://images/ico_LF_treeitem.png')</Col></Row><Row><Col id=\"Column1\">나의메뉴-업무화면09</Col><Col id=\"Column0\">URL('theme://images/ico_LF_treeitem.png')</Col></Row></Rows>");
            this.addChild(obj.name, obj);

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

            obj = new Dataset("ds_userInfoMenu", this);
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

            obj = new Dataset("ds_find", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_ID\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_LEVEL\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MENU_NAME\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SVC_GROUP\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"FILE_NAME\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"FILE_PATH\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"DISPLAY_YN\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_myMenu", "absolute", "0", "32", "190", null, null, "0", this);
            obj.set_taborder("22");
            obj.set_text("Div00");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            obj = new Static("sta_myMenu", "absolute", "0", "0", null, null, "0", "0", this.div_myMenu);
            obj.set_taborder("0");
            obj.set_cssclass("sta_LF_MenuGrdBg");
            obj.set_visible("true");
            this.div_myMenu.addChild(obj.name, obj);
            obj = new Grid("grd_myMenu", "absolute", "1", "10", null, null, "0", "0", this.div_myMenu);
            obj.set_cssclass("grd_LF_Menu");
            obj.set_taborder("1");
            obj.set_binddataset("gds_myMenu");
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"13\"/><Column size=\"23\"/><Column size=\"139\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell/><Cell col=\"1\" displaytype=\"image\" style=\"selectbackground: ;\" text=\"theme://images/ico_LF_treeitem.png\"/><Cell col=\"2\" style=\"padding:0 0 0 0;\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:MENU_NM\"/></Band></Format></Formats>");
            this.div_myMenu.addChild(obj.name, obj);

            obj = new Button("btn_myMenu", "absolute", "95", "0", "95", "32", null, null, this);
            obj.set_taborder("4");
            obj.set_text("My Menu");
            obj.set_cssclass("btn_LF_MyMenu");
            this.addChild(obj.name, obj);

            obj = new Button("btn_menuList", "absolute", "0", "0", "95", "32", null, null, this);
            obj.set_taborder("5");
            obj.set_text("상품정보");
            obj.set_cssclass("btn_LF_2DepthMenuS");
            this.addChild(obj.name, obj);

            obj = new Div("div_menu", "absolute", "0", "32", "190", null, null, "0", this);
            obj.set_taborder("21");
            obj.style.set_background("transparent");
            this.addChild(obj.name, obj);
            obj = new Static("sta_menu", "absolute", "0%", "36", null, null, "0%", "0", this.div_menu);
            obj.set_taborder("1");
            obj.set_cssclass("sta_LF_MenuGrdBg");
            this.div_menu.addChild(obj.name, obj);
            obj = new Static("sta_search", "absolute", "0%", "0", null, "36", "0", null, this.div_menu);
            obj.set_taborder("3");
            obj.set_cssclass("sta_LF_MenuBg");
            this.div_menu.addChild(obj.name, obj);
            obj = new Edit("edt_search", "absolute", "4", "8", "180", "21", null, null, this.div_menu);
            obj.set_taborder("4");
            obj.set_cssclass("edt_LF_Search");
            obj.style.set_padding("2 30 0 5");
            obj.set_autoselect("true");
            obj.set_imemode("hangul");
            this.div_menu.addChild(obj.name, obj);
            obj = new Button("btn_search", "absolute", "80.53%", "8", null, "21", "3.16%", null, this.div_menu);
            obj.set_taborder("2");
            obj.set_cssclass("btn_LF_Search");
            this.div_menu.addChild(obj.name, obj);
            obj = new Grid("grd_menu", "absolute", "0%", "46", null, null, "0%", "6", this.div_menu);
            obj.set_cssclass("grd_LF_Menu");
            obj.set_taborder("0");
            obj.set_binddataset("ds_menu");
            obj.set_scrollbars("autovert");
            obj.set_treeuseline("false");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("collapse,all");
            obj.style.set_cursor("hand");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" style=\"background: ; :focused {background:EXPR(lev=='0'?&quot;URL('theme://images/grd_LF_Menu_1dpth.png') repeat-x&quot;:&quot;&quot;);background2:EXPR(lev=='0'?&quot;URL('theme://images/grd_LF_Menu_1dpth.png') repeat-x&quot;:&quot;&quot;);color:EXPR(lev=='0'?&quot;#3a3a3a&quot;:&quot;&quot;);color2:EXPR(lev=='0'?&quot;#3a3a3a&quot;:&quot;&quot;);font:EXPR(lev=='0'?&quot;bold 9 Gulim&quot;:&quot;&quot;);selectbackground:EXPR(lev=='0'?&quot;URL('theme://images/grd_LF_Menu_S.png') stretch&quot;:&quot;&quot;);selectfont:EXPR(lev=='0'?&quot;bold 9 Gulim&quot;:&quot;&quot;);}\" text=\"bind:MENU_NAME\" treestartlevel=\"1\" treelevel=\"bind:MENU_LEVEL\" tooltiptext=\"bind:MENU_NAME\"/></Band></Format></Formats>");
            this.div_menu.addChild(obj.name, obj);
            obj = new Grid("grd_myInfo", "absolute", "0%", "46", null, null, "4.21%", "12", this.div_menu);
            obj.set_cssclass("grd_LF_Menu");
            obj.set_taborder("5");
            obj.set_binddataset("ds_userInfoMenu");
            obj.set_scrollbars("autovert");
            obj.set_treeuseline("false");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.style.set_cursor("hand");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" style=\"background: ; :focused {background:EXPR(lev=='0'?&quot;URL('theme://images/grd_LF_Menu_1dpth.png') repeat-x&quot;:&quot;&quot;);background2:EXPR(lev=='0'?&quot;URL('theme://images/grd_LF_Menu_1dpth.png') repeat-x&quot;:&quot;&quot;);color:EXPR(lev=='0'?&quot;#3a3a3a&quot;:&quot;&quot;);color2:EXPR(lev=='0'?&quot;#3a3a3a&quot;:&quot;&quot;);font:EXPR(lev=='0'?&quot;bold 9 Gulim&quot;:&quot;&quot;);selectbackground:EXPR(lev=='0'?&quot;URL('theme://images/grd_LF_Menu_S.png') stretch&quot;:&quot;&quot;);selectfont:EXPR(lev=='0'?&quot;bold 9 Gulim&quot;:&quot;&quot;);}\" text=\"bind:MENU_NAME\" treestartlevel=\"1\" treelevel=\"bind:MENU_LEVEL\" tooltiptext=\"bind:MENU_NAME\"/></Band></Format></Formats>");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"187\"/></Columns><Rows><Row size=\"28\"/></Rows><Band id=\"body\"><Cell style=\"line: ;\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:MENU_NAME\"/></Band></Format></Formats>");
            this.pdiv_list.addChild(obj.name, obj);
            obj = new Button("btn_cancel", "absolute", "50.19%", "306", null, "21", "34.34%", null, this.pdiv_list);
            obj.set_taborder("6");
            obj.set_text("취소");
            this.pdiv_list.addChild(obj.name, obj);
            obj = new Button("btn_ok", "absolute", "33.96%", "306", null, "21", "50.57%", null, this.pdiv_list);
            obj.set_taborder("7");
            obj.set_text("확인");
            this.pdiv_list.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 190, 0, this.div_myMenu,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("22");
            		p.set_text("Div00");
            		p.set_visible("true");

            	}
            );
            this.div_myMenu.addLayout(obj.name, obj);

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
        this.addIncludeScript("LeftFrame_admin.xfdl", "lib::comLib.xjs");
        this.registerScript("LeftFrame_admin.xfdl", function() {
        //include "lib::comLib.xjs";

        this.nCurRow = 0; 
        this.treeStatus = 0;

        this.form_onload = function(obj,e)
        {
        	this.ds_menu.copyData(application.gds_menu);
        	this.ds_userInfoMenu.copyData(application.gds_userInfoMenu);
        	this.ds_find.copyData(application.gds_menu);
        	
        	this.ds_userInfoMenu.filter("MENU_LEVEL >= 1 && DISPLAY_YN!='N'");
        }

        this.grd_oncellclick = function(obj,e)
        {
        	//트리버튼의 영역이 눌렸을 경우는 로직을 타지 않도록 처리 함.	
        	if( e.canvasX < 26 ){ 
        		return; 
        	}
        	
        	var objDs = this[obj.binddataset];

        	if (this.treeStatus == 1){
        		this.treeStatus = 0;
        		return;
        	}

        	var childRow = obj.getTreeChildRow(objDs.rowposition, 0, true);

        	// 자식 노드가 존재할 경우
        	if (childRow >= 0) 
        	{
        		var gridRow = obj.getTreeRow(objDs.rowposition);
        		if (obj.isTreeCollapsedRow(childRow, true)) 
        		{
        			obj.setTreeStatus(gridRow, true);
        		}
        		else 
        		{
        			obj.setTreeStatus(gridRow, false);
        		}
        	}
        	this.treeStatus = 0;
        	
        	var nLv = objDs.getColumn(objDs.rowposition,"MENU_LEVEL");
        	
        	if(nLv == 2){
        		var psMenuId = objDs.getColumn(objDs.rowposition,"MENU_ID");
        		if(obj.name == "grd_menu"){
        			this.gfn_OpenMenuId(psMenuId);
        		}else{
        			this.gfn_OpenMenuId(psMenuId,"","INFO");
        		}		
        	}

        }

        this.ds_menu_onrowposchanged = function(obj,e)
        {
        	if(e.reason == 51) {
              this.ds_menu.set_enableevent(false);
              this.ds_menu.set_rowposition(-1);
              this.ds_menu.set_enableevent(true);
              return;
        	}   	
           	
        	var psMenuId = obj.getColumn(e.newrow,"MENU_ID");
        	var psMenuLv = obj.getColumn(e.newrow,"MENU_LEVEL");
        		
        	if(psMenuLv == 2){
        		this.gfn_OpenMenuId(psMenuId);
        	}
        }

        this.btn_myMenu_onclick = function(obj,e)
        {
        	this.btn_myMenu.set_cssclass("btn_LF_MyMenuS");
        	this.btn_menuList.set_cssclass("btn_LF_2DepthMenu");
        	
        	this.div_menu.set_visible(false);
        	this.div_myMenu.set_visible(true);
        }

        this.btn_menuList_onclick = function(obj,e)
        {
        	this.btn_myMenu.set_cssclass("btn_LF_MyMenu");
        	this.btn_menuList.set_cssclass("btn_LF_2DepthMenuS");
        	
        	this.div_menu.set_visible(true);
        	this.div_myMenu.set_visible(false);
        }

        this.div_myMenu_grd_myMenu_oncellclick = function(obj,e)
        {
        	var sMenuId = application.gds_myMenu.getColumn(e.row,"MENU_ID");	
        	this.gfn_moveMenuId(sMenuId);
        }

        this.div_menu_btn_search_onclick = function(obj,e)
        {
        	this._gfn_findMenu();
        }

        this.pdiv_list_btn_cancel_onclick = function(obj,e)
        {
        	this.pdiv_list.closePopup();
        }

        this.pdiv_list_btn_ok_onclick = function(obj,e)
        {
        	var sMenuId = this.ds_find.getColumn(this.ds_find.rowposition, "MENU_ID");
        	this.gfn_OpenMenuId(sMenuId);
        	this.pdiv_list.closePopup();
        }

        this.pdiv_list_grd_list_oncelldblclick = function(obj,e)
        {
        	var sMenuId = this.ds_find.getColumn(this.ds_find.rowposition, "MENU_ID");
        	this.gfn_OpenMenuId(sMenuId);
        	this.pdiv_list.closePopup();
        }

        this.div_menu_edt_search_onkeydown = function(obj,e)
        {
        	if(e.keycode ==13) {
        		this._gfn_findMenu();
        	}
        }

        this._gfn_findMenu = function()
        {
        	var sText = this.div_menu.edt_search.value;
        	
        	if(this.gfn_isNull(sText)){
        		alert("검색할 메뉴명을 입력하세요.");
        		this.div_menu.edt_search.setFocus();
        		return;
        	}
        	
            var sFindCol = "MENU_NAME";	
            
        	var sFilter = "String(MENU_ID).valueOf() != 'undefined' && String(MENU_ID).length > 0 && String("+sFindCol+").toUpperCase().indexOf('" + sText.toUpperCase() + "') >= 0 && MENU_LEVEL==2";
        	
        	this.ds_find.filter(sFilter);
        	
        	if(this.ds_find.rowcount == 0) {
        		alert("검색결과가 없습니다.");
        		this.div_menu.edt_search.setFocus();
        		return;
        	}
        	
        	this.ds_find.set_rowposition(0);

        	var nX = system.clientToScreenX(this.div_menu.sta_search, 0) - system.clientToScreenX(application.mainframe, 0); 
        	var nY = system.clientToScreenY(this.div_menu.sta_search, parseInt(this.div_menu.sta_search.height)) - system.clientToScreenY(application.mainframe, 0); 
        		
        	var nRtn = this.pdiv_list.trackPopup(nX,nY);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_myMenu.grd_myMenu.addEventHandler("oncellclick", this.div_myMenu_grd_myMenu_oncellclick, this);
            this.btn_myMenu.addEventHandler("onclick", this.btn_myMenu_onclick, this);
            this.btn_menuList.addEventHandler("onclick", this.btn_menuList_onclick, this);
            this.div_menu.edt_search.addEventHandler("onkeydown", this.div_menu_edt_search_onkeydown, this);
            this.div_menu.btn_search.addEventHandler("onclick", this.div_menu_btn_search_onclick, this);
            this.div_menu.grd_menu.addEventHandler("oncellclick", this.grd_oncellclick, this);
            this.div_menu.grd_myInfo.addEventHandler("oncellclick", this.grd_oncellclick, this);
            this.pdiv_list.grd_list.addEventHandler("oncelldblclick", this.pdiv_list_grd_list_oncelldblclick, this);
            this.pdiv_list.btn_cancel.addEventHandler("onclick", this.pdiv_list_btn_cancel_onclick, this);
            this.pdiv_list.btn_ok.addEventHandler("onclick", this.pdiv_list_btn_ok_onclick, this);

        };

        this.loadIncludeScript("LeftFrame_admin.xfdl");

       
    };
}
)();
