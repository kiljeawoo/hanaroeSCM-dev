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
                this.set_name("M_main");
                this.set_classname("M_main");
                this.set_titletext("모바일메인");
                this._setFormPosition(0,0,540,847);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("st_info", "absolute", "0", "0", "540", "64", null, null, this);
            obj.getSetter("taborder").set("0");
            obj.set_cssclass("sta_MAIN_User");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "640", "22", "347", "21", null, null, this);
            obj.getSetter("taborder").set("2");
            obj.set_text("tree그리드 리스트에 상단 '공지사항' 텍스트 추가하기");
            obj.style.set_color("#999999ff");
            obj.style.set_font("10 Helvetica");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_recadv", "absolute", "618", "186", "540", "194", null, null, this);
            obj.set_taborder("5");
            obj.set_cssclass("div_MAIN_TodoListBg");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Div("div_recadvA", "absolute", "22", "17", "156", "165", null, null, this.div_recadv);
            obj.set_taborder("0");
            this.div_recadv.addChild(obj.name, obj);
            obj = new Static("st_recadvA", "absolute", "0", "0", "156", "165", null, null, this.div_recadv.div_recadvA);
            obj.getSetter("taborder").set("2");
            obj.set_text("12");
            obj.set_cssclass("sta_MAIN_TodoListCountBg");
            this.div_recadv.div_recadvA.addChild(obj.name, obj);
            obj = new Button("btn_recadvA", "absolute", "0", "0", "156", "165", null, null, this.div_recadv.div_recadvA);
            obj.set_taborder("3");
            obj.set_text("반품 미확인");
            obj.set_cssclass("btn_MAIN_TodoListCount");
            this.div_recadv.div_recadvA.addChild(obj.name, obj);
            obj = new Div("div_recadvB", "absolute", "192", "17", "156", "165", null, null, this.div_recadv);
            obj.set_taborder("1");
            this.div_recadv.addChild(obj.name, obj);
            obj = new Static("st_recadvB", "absolute", "0", "0", "156", "165", null, null, this.div_recadv.div_recadvB);
            obj.getSetter("taborder").set("2");
            obj.set_text("00");
            obj.set_cssclass("sta_MAIN_TodoListCountBg");
            this.div_recadv.div_recadvB.addChild(obj.name, obj);
            obj = new Button("btn_recadvB", "absolute", "0", "0", "156", "165", null, null, this.div_recadv.div_recadvB);
            obj.set_taborder("3");
            obj.set_text("반품확인서\r\n미작성");
            obj.set_cssclass("btn_MAIN_TodoListCount");
            this.div_recadv.div_recadvB.addChild(obj.name, obj);
            obj = new Div("div_recadvC", "absolute", "362", "17", "156", "165", null, null, this.div_recadv);
            obj.set_taborder("2");
            this.div_recadv.addChild(obj.name, obj);
            obj = new Static("st_recadvC", "absolute", "0", "0", "156", "165", null, null, this.div_recadv.div_recadvC);
            obj.getSetter("taborder").set("2");
            obj.set_text("07");
            obj.set_cssclass("sta_MAIN_TodoListCountBg");
            this.div_recadv.div_recadvC.addChild(obj.name, obj);
            obj = new Button("btn_recadvC", "absolute", "0", "0", "156", "165", null, null, this.div_recadv.div_recadvC);
            obj.set_taborder("3");
            obj.set_text("검수 미확인");
            obj.set_cssclass("btn_MAIN_TodoListCount");
            this.div_recadv.div_recadvC.addChild(obj.name, obj);

            obj = new Button("btn_tax", "absolute", "358", "64", "182", "77", null, null, this);
            obj.set_taborder("4");
            obj.set_text("세금계산서");
            obj.set_cssclass("btn_MAIN_TodoListTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_order", "absolute", "0", "64", "180", "77", null, null, this);
            obj.set_taborder("1");
            obj.set_text("수주관리");
            obj.set_cssclass("btn_MAIN_TodoListTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_recadv", "absolute", "179", "64", "180", "77", null, null, this);
            obj.set_taborder("3");
            obj.set_text("검수/반품");
            obj.set_cssclass("btn_MAIN_TodoListTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_menu", "absolute", "0", "329", "540", "518", null, null, this);
            obj.set_cssclass("grd_RF_RightMenu");
            obj.set_taborder("6");
            obj.set_binddataset("gds_mobileMenu");
            obj.set_autofittype("col");
            obj.set_treeusebutton("no");
            obj.set_treeuseline("false");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("false");
            obj.set_treeuseexpandkey("true");
            obj.set_treeinitstatus("collapse,null");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"188\"/></Columns><Rows><Row size=\"70\"/></Rows><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" style=\"line:0 none #808080ff ;background:EXPR(MENU_LEVEL=='0'?&quot;URL('theme://images/grd_RF_Menu_1dpth.png') stretch 42,0&quot;:&quot; URL('theme://images/grd_RF_menuBg.png') stretch 42,0&quot;);background2:EXPR(MENU_LEVEL=='0'?&quot;URL('theme://images/grd_RF_Menu_1dpth.png') stretch 42,0&quot;:&quot; URL('theme://images/grd_RF_menuBg.png') stretch 42,0&quot;);font:EXPR(MENU_LEVEL=='0'?&quot;bold 22 Helvetica&quot;:&quot;&quot;);selectbackground:EXPR(MENU_LEVEL=='0'?&quot;URL('theme://images/grd_RF_Menu_1dpth_S.png') stretch 42,0&quot;:&quot; URL('theme://images/grd_RF_menuBg_S.png') stretch 42,0&quot;);selectfont:EXPR(MENU_LEVEL=='0'?&quot;bold 22 Helvetica&quot;:&quot;&quot;);selectline:0 none #808080ff ;\" text=\"bind:MENU_NAME\" treelevel=\"bind:MENU_LEVEL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "640", "50", "159", "21", null, null, this);
            obj.getSetter("taborder").set("7");
            obj.set_text("버튼다시 배경 이미지");
            obj.set_visible("false");
            obj.style.set_color("#999999ff");
            obj.style.set_font("10 Helvetica");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "618", "95", "180", "77", null, null, this);
            obj.set_taborder("8");
            obj.set_text("수주관리");
            obj.set_cssclass("btn_MAIN_TodoListTitleS");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_order", "absolute", "0", "135", "540", "194", null, null, this);
            obj.set_taborder("9");
            obj.set_cssclass("div_MAIN_TodoListBg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            obj = new Div("div_orderA", "absolute", "109", "17", "156", "165", null, null, this.div_order);
            obj.set_taborder("3");
            this.div_order.addChild(obj.name, obj);
            obj = new Static("st_orderA", "absolute", "0", "0", "156", "165", null, null, this.div_order.div_orderA);
            obj.getSetter("taborder").set("4");
            obj.set_text("12");
            obj.set_cssclass("sta_MAIN_TodoListCountBg");
            this.div_order.div_orderA.addChild(obj.name, obj);
            obj = new Button("btn_orderA", "absolute", "0", "0", "156", "165", null, null, this.div_order.div_orderA);
            obj.set_taborder("5");
            obj.set_text("수주 미확인");
            obj.set_cssclass("btn_MAIN_TodoListCount");
            this.div_order.div_orderA.addChild(obj.name, obj);
            obj = new Div("div_orderB", "absolute", "279", "17", "156", "165", null, null, this.div_order);
            obj.set_taborder("4");
            this.div_order.addChild(obj.name, obj);
            obj = new Static("st_orderB", "absolute", "0", "0", "156", "165", null, null, this.div_order.div_orderB);
            obj.getSetter("taborder").set("4");
            obj.set_text("00");
            obj.set_cssclass("sta_MAIN_TodoListCountBg");
            this.div_order.div_orderB.addChild(obj.name, obj);
            obj = new Button("btn_orderB", "absolute", "0", "0", "156", "165", null, null, this.div_order.div_orderB);
            obj.set_taborder("5");
            obj.set_text("배송예정서\r\n미작성");
            obj.set_cssclass("btn_MAIN_TodoListCount");
            this.div_order.div_orderB.addChild(obj.name, obj);

            obj = new Div("div_tax", "absolute", "618", "401", "540", "194", null, null, this);
            obj.set_taborder("10");
            obj.set_cssclass("div_MAIN_TodoListBg");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Div("div_taxA", "absolute", "20.19%", "17", null, "165", "50.93%", null, this.div_tax);
            obj.set_taborder("5");
            this.div_tax.addChild(obj.name, obj);
            obj = new Static("st_taxA", "absolute", "0%", "0", null, "165", "0%", null, this.div_tax.div_taxA);
            obj.getSetter("taborder").set("6");
            obj.set_text("12");
            obj.set_cssclass("sta_MAIN_TodoListCountBg");
            this.div_tax.div_taxA.addChild(obj.name, obj);
            obj = new Button("btn_taxA", "absolute", "0%", "0", null, "165", "0%", null, this.div_tax.div_taxA);
            obj.set_taborder("7");
            obj.set_text("세금계산서\r\n역발행");
            obj.set_cssclass("btn_MAIN_TodoListCount");
            obj.set_wordwrap("none");
            this.div_tax.div_taxA.addChild(obj.name, obj);
            obj = new Div("div_taxB", "absolute", "51.67%", "17", null, "165", "19.44%", null, this.div_tax);
            obj.set_taborder("6");
            this.div_tax.addChild(obj.name, obj);
            obj = new Static("st_taxB", "absolute", "0%", "0", null, "165", "0%", null, this.div_tax.div_taxB);
            obj.getSetter("taborder").set("6");
            obj.set_text("00");
            obj.set_cssclass("sta_MAIN_TodoListCountBg");
            this.div_tax.div_taxB.addChild(obj.name, obj);
            obj = new Button("btn_taxB", "absolute", "0%", "0", null, "165", "0%", null, this.div_tax.div_taxB);
            obj.set_taborder("7");
            obj.set_text("세금계산서\r\n미승인");
            obj.set_cssclass("btn_MAIN_TodoListCount");
            this.div_tax.div_taxB.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 156, 165, this.div_recadv.div_recadvA,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");

            	}
            );
            this.div_recadv.div_recadvA.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 156, 165, this.div_recadv.div_recadvB,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");

            	}
            );
            this.div_recadv.div_recadvB.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 156, 165, this.div_recadv.div_recadvC,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");

            	}
            );
            this.div_recadv.div_recadvC.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 194, this.div_recadv,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.set_cssclass("div_MAIN_TodoListBg");
            		p.set_visible("false");

            	}
            );
            this.div_recadv.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 156, 165, this.div_order.div_orderA,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");

            	}
            );
            this.div_order.div_orderA.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 156, 165, this.div_order.div_orderB,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");

            	}
            );
            this.div_order.div_orderB.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 194, this.div_order,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("9");
            		p.set_cssclass("div_MAIN_TodoListBg");
            		p.set_visible("true");

            	}
            );
            this.div_order.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 165, this.div_tax.div_taxA,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");

            	}
            );
            this.div_tax.div_taxA.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 165, this.div_tax.div_taxB,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");

            	}
            );
            this.div_tax.div_taxB.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 194, this.div_tax,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("10");
            		p.set_cssclass("div_MAIN_TodoListBg");
            		p.set_visible("false");

            	}
            );
            this.div_tax.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 540, 847, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("M_main");
            		p.set_titletext("모바일메인");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("M_main.xfdl", "lib::comLib.xjs");
        this.registerScript("M_main.xfdl", function() {
        //include "lib::comLib.xjs";

        this.M_main_onload = function(obj,e)
        {
        	var userName = (application.gv_userName);
        	var companyName = (application.gv_companyName);
        	
        	this.st_info.set_text(userName +" "+ companyName + " <fc v='#ffffff'>님 접속하였습니다!</fc>");
        	
        	this.btn_order.set_cssclass("btn_MAIN_TodoListTitleS");
        }

        this.grd_menu_oncellclick = function(obj,e)
        {
        	//트리버튼의 영역이 눌렸을 경우는 로직을 타지 않도록 처리 함.	
        	if( e.canvasX < 26 ){ 
        		return; 
        	}
        	
        	//var objDs = this[obj.binddataset];
        	
        	var objDs = application.gds_mobileMenu;
        	
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
        	
        	if(nLv == 1){
        		
        		application.afrm_VFrameSet2.set_separatesize("*,0");
        		application.afrm_VFrameSet3.set_separatesize("64,71,*");
        		application.afrm_TopFrame.set_formurl("m_frame::M_topMenu.xfdl");
        		application.afrm_MTitleFrame.set_formurl("m_frame::M_titleMenu.xfdl");
        		application.afrm_WorkFrame.set_formurl("m_frame::M_workFrame.xfdl");
        		
        		var psMenuId = objDs.getColumn(objDs.rowposition,"MENU_ID");
        		this.gfn_MopenMenuId(psMenuId);
        	}
        }

        this.btn_order_onclick = function(obj,e)
        {
        	var nLeft = 0;
        	var nTop = 135;
        	this.div_order.move(nLeft, nTop);
        	this.div_order.bringToFront();
        	this.div_order.set_visible(true);
        	
        	this.div_recadv.bringToPrev();
        	this.div_recadv.set_visible(false);
        	
        	this.div_tax.bringToPrev();
        	this.div_tax.set_visible(false);
        	
        	this.btn_order.set_cssclass("btn_MAIN_TodoListTitleS");
        	this.btn_recadv.set_cssclass("btn_MAIN_TodoListTitle");
        	this.btn_tax.set_cssclass("btn_MAIN_TodoListTitle");
        }

        this.btn_recadv_onclick = function(obj,e)
        {
        	var nLeft = 0;
        	var nTop = 135;
        	this.div_recadv.move(nLeft, nTop);
        	this.div_recadv.bringToFront();
        	this.div_recadv.set_visible(true);
        	
        	this.div_order.bringToPrev();
        	this.div_order.set_visible(false);
        	
        	this.div_tax.bringToPrev();
        	this.div_tax.set_visible(false);
        	
        	this.btn_order.set_cssclass("btn_MAIN_TodoListTitle");
        	this.btn_recadv.set_cssclass("btn_MAIN_TodoListTitleS");
        	this.btn_tax.set_cssclass("btn_MAIN_TodoListTitle");
        }

        this.btn_tax_onclick = function(obj,e)
        {
        	var nLeft = 0;
        	var nTop = 135;
        	this.div_tax.move(nLeft, nTop);
        	this.div_tax.bringToFront();
        	this.div_tax.set_visible(true);
        	
        	this.div_recadv.bringToPrev();
        	this.div_recadv.set_visible(false);
        	
        	this.div_order.bringToPrev();
        	this.div_order.set_visible(false);
        	
        	this.btn_order.set_cssclass("btn_MAIN_TodoListTitle");
        	this.btn_recadv.set_cssclass("btn_MAIN_TodoListTitle");
        	this.btn_tax.set_cssclass("btn_MAIN_TodoListTitleS");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.M_main_onload, this);
            this.btn_tax.addEventHandler("onclick", this.btn_tax_onclick, this);
            this.btn_order.addEventHandler("onclick", this.btn_order_onclick, this);
            this.btn_recadv.addEventHandler("onclick", this.btn_recadv_onclick, this);
            this.grd_menu.addEventHandler("oncellclick", this.grd_menu_oncellclick, this);

        };

        this.loadIncludeScript("M_main.xfdl");

       
    };
}
)();
