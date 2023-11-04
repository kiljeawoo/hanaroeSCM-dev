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
                this.set_name("M_rightFrame");
                this.set_classname("M_rightFrame");
                this._setFormPosition(0,0,370,922);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("grd", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Lev\" type=\"STRING\" size=\"256\"/><Column id=\"Column\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Lev\">0</Col><Col id=\"Column\">수주관리</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">SubMenu01</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">SubMenu02</Col></Row><Row><Col id=\"Lev\">0</Col><Col id=\"Column\">검수/반품</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">SubMenu01</Col></Row><Row><Col id=\"Lev\">0</Col><Col id=\"Column\">판매정보</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">상품기본정보조회</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">상품상세조회</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">생활물자공급가격조회</Col></Row><Row><Col id=\"Lev\">0</Col><Col id=\"Column\">재고정보</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">SubMenu01</Col></Row><Row><Col id=\"Lev\">0</Col><Col id=\"Column\">세금계산서</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">SubMenu01</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">SubMenu02</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_menu", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Lev\" type=\"STRING\" size=\"256\"/><Column id=\"Column\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Lev\">0</Col><Col id=\"Column\">커뮤니티</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">공지사항</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">설정</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">알림</Col></Row><Row><Col id=\"Lev\">0</Col><Col id=\"Column\">수주관리</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">수주내역 조회</Col></Row><Row><Col id=\"Lev\">0</Col><Col id=\"Column\">배송</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">배송예정서 일반등록</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">배송예정서 직송등록</Col></Row><Row><Col id=\"Column\">배송예정 거래처별 조회</Col><Col id=\"Lev\">1</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">배송예정 상품별 조회</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">미입고 패널티 조회</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">배송응답서</Col></Row><Row><Col id=\"Lev\">0</Col><Col id=\"Column\">검수/반품</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">검수실적 전표별 조회</Col></Row><Row><Col id=\"Column\">검수실적 직송분 조회</Col><Col id=\"Lev\">1</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">반품입고 의뢰 조회</Col></Row><Row><Col id=\"Lev\">0</Col><Col id=\"Column\">판매정보</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">마트별/상품별 판매정보</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">상품별/마트별 판매정보</Col></Row><Row><Col id=\"Lev\">0</Col><Col id=\"Column\">재고정보</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">마트별/상품별 재고정보</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">상품별/마트별 판매정보</Col></Row><Row><Col id=\"Lev\">0</Col><Col id=\"Column\">세금계산서</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">전자세금계산서 조회</Col></Row><Row><Col id=\"Column\">일잔액장 조회</Col><Col id=\"Lev\">1</Col></Row><Row><Col id=\"Lev\">1</Col><Col id=\"Column\">월잔액장 조회</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static01", "absolute", "0", "806", "370", "116", null, null, this);
            obj.getSetter("taborder").set("5");
            obj.set_cssclass("sta_RF_MenuBtmBg");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "210", "827", "65", "65", null, null, this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_RF_LogoutBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "285", "827", "65", "65", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_RF_SettingBtn");
            this.addChild(obj.name, obj);

            obj = new Static("st_mRightInfo", "absolute", "0", "0", "370", "74", null, null, this);
            obj.getSetter("taborder").set("3");
            obj.set_cssclass("sta_RF_User");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "306", "0", "64", "74", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_RF_CloseBtn");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_rMenu", "absolute", "0", "74", "370", "732", null, null, this);
            obj.set_taborder("4");
            obj.set_binddataset("gds_mobileMenu");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("collapse,null");
            obj.set_cssclass("grd_RF_RightMenu");
            obj.set_treeuseimage("false");
            obj.set_treeusebutton("no");
            obj.set_treeuseline("false");
            obj.set_treeuseexpandkey("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"188\"/></Columns><Rows><Row size=\"70\"/></Rows><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" style=\"line:0 solid #808080ff ;background:EXPR(MENU_LEVEL=='0'?&quot;URL('theme://images/grd_RF_Menu_1dpth.png') stretch 42,0&quot;:&quot; URL('theme://images/grd_RF_menuBg.png') stretch 42,0&quot;);background2:EXPR(MENU_LEVEL=='0'?&quot;URL('theme://images/grd_RF_Menu_1dpth.png') stretch 42,0&quot;:&quot; URL('theme://images/grd_RF_menuBg.png') stretch 42,0&quot;);font:EXPR(MENU_LEVEL=='0'?&quot;bold 22 Helvetica&quot;:&quot;&quot;);selectbackground:EXPR(MENU_LEVEL=='0'?&quot;URL('theme://images/grd_RF_Menu_1dpth_S.png') stretch 42,0&quot;:&quot;URL('theme://images/grd_RF_menuBg_S.png') stretch 42,0&quot;);selectfont:EXPR(MENU_LEVEL=='0'?&quot;bold 22 Helvetica&quot;:&quot;&quot;);selectline:0 solid #808080ff ;\" text=\"bind:MENU_NAME\" treelevel=\"bind:MENU_LEVEL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 370, 922, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("M_rightFrame");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("M_rightFrame.xfdl", "lib::comLib.xjs");
        this.registerScript("M_rightFrame.xfdl", function() {
        //include "lib::comLib.xjs";

        this.M_rightFrame_onload = function(obj,e)
        {
        	var userName = application.gv_userName;
        	var companyName = application.gv_companyName;
        	
        	//this.st_mRightInfo.set_text(userName +" "+ companyName + " <fc v='#ffffff'>님</fc>");
        	this.st_mRightInfo.set_text(userName+" <fc v='#ffffff'>님</fc>");
        }

        this.btn_close_onclick = function(obj,e)
        {
        	//this.parent.div_popupMenu.set_visible(false);
        	this.grd_rMenu.set_treeinitstatus("collapse,null");
        	this.parent.pdiv_popupMenu.closePopup();
        }

        this.grd_rMenu_oncellclick = function(obj,e)
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
        		
        		this.grd_rMenu.set_treeinitstatus("collapse,null");
        		this.parent.pdiv_popupMenu.closePopup();
        	}
        	
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_menu.addEventHandler("onrowposchanged", this.ds_menu_onrowposchanged, this);
            this.addEventHandler("onload", this.M_rightFrame_onload, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.grd_rMenu.addEventHandler("oncellclick", this.grd_rMenu_oncellclick, this);

        };

        this.loadIncludeScript("M_rightFrame.xfdl");

       
    };
}
)();
