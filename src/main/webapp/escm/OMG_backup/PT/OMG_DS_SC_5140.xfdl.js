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
                this.set_name("frm_search");
                this.set_titletext("내메뉴");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,911,703);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_myMenu", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_my_menu", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static09", "absolute", "0", "76", "17", "73", null, null, this);
            obj.set_taborder("8");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "439", "32", "17", "111", null, null, this);
            obj.set_taborder("9");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "363", "265", "91", "17", null, null, this);
            obj.set_taborder("10");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "242", "32", "91", "15", null, null, this);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "363", "119", "76", "15", null, null, this);
            obj.set_taborder("14");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "419", "0", "37", "32", null, null, this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("16");
            obj.set_text("내메뉴조회");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "363", "68", "91", "8", null, null, this);
            obj.set_taborder("18");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "348", "209", "91", "17", null, null, this);
            obj.set_taborder("23");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "363", "226", "91", "10", null, null, this);
            obj.set_taborder("26");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", "16", "36", "172", "56", null, null, this);
            obj.set_taborder("27");
            obj.set_text("MyMenu");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "55", "143", "349", "112", null, null, this);
            obj.set_taborder("28");
            obj.set_binddataset("ds_myMenu");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"161\"/><Column size=\"148\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"MENU_ID\"/><Cell col=\"1\" text=\"MENU_NM\"/></Band><Band id=\"body\"><Cell text=\"bind:MENU_ID\"/><Cell col=\"1\" text=\"bind:MENU_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert", "absolute", "200", "36", "53", "56", null, null, this);
            obj.set_taborder("29");
            obj.set_text("add");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete", "absolute", "267", "37", "53", "56", null, null, this);
            obj.set_taborder("30");
            obj.set_text("delete");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "42", "265", "120", "21", null, null, this);
            obj.set_taborder("31");
            obj.set_text("로그인메뉴정보");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01", "absolute", "40", "310", "847", "190", null, null, this);
            obj.set_taborder("32");
            obj.set_binddataset("ds_menu");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"MENU_ID\"/><Cell col=\"1\" text=\"MENU_LEVEL\"/><Cell col=\"2\" text=\"MENU_NAME\"/><Cell col=\"3\" text=\"SVC_GROUP\"/><Cell col=\"4\" text=\"FILE_NAME\"/><Cell col=\"5\" text=\"FILE_TYPE\"/><Cell col=\"6\" text=\"MENU_PATH\"/><Cell col=\"7\" text=\"DISPLAY_YN\"/><Cell col=\"8\" text=\"USE_YN\"/></Band><Band id=\"body\"><Cell text=\"bind:MENU_ID\"/><Cell col=\"1\" text=\"bind:MENU_LEVEL\"/><Cell col=\"2\" text=\"bind:MENU_NAME\"/><Cell col=\"3\" text=\"bind:SVC_GROUP\"/><Cell col=\"4\" text=\"bind:FILE_NAME\"/><Cell col=\"5\" text=\"bind:FILE_TYPE\"/><Cell col=\"6\" text=\"bind:MENU_PATH\"/><Cell col=\"7\" text=\"bind:DISPLAY_YN\"/><Cell col=\"8\" text=\"bind:USE_YN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02", "absolute", "32", "549", "850", "147", null, null, this);
            obj.set_taborder("33");
            obj.set_binddataset("ds_my_menu");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"MENU_ID\"/><Cell col=\"1\" text=\"MENU_LEVEL\"/><Cell col=\"2\" text=\"MENU_NAME\"/><Cell col=\"3\" text=\"SVC_GROUP\"/><Cell col=\"4\" text=\"FILE_NAME\"/><Cell col=\"5\" text=\"FILE_TYPE\"/><Cell col=\"6\" text=\"MENU_PATH\"/><Cell col=\"7\" text=\"DISPLAY_YN\"/><Cell col=\"8\" text=\"USE_YN\"/></Band><Band id=\"body\"><Cell text=\"bind:MENU_ID\"/><Cell col=\"1\" text=\"bind:MENU_LEVEL\"/><Cell col=\"2\" text=\"bind:MENU_NAME\"/><Cell col=\"3\" text=\"bind:SVC_GROUP\"/><Cell col=\"4\" text=\"bind:FILE_NAME\"/><Cell col=\"5\" text=\"bind:FILE_TYPE\"/><Cell col=\"6\" text=\"bind:MENU_PATH\"/><Cell col=\"7\" text=\"bind:DISPLAY_YN\"/><Cell col=\"8\" text=\"bind:USE_YN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 911, 703, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("내메뉴");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Div00.edt_glnCode","value","ds_bbs","BBRD_TI");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Div00.Static13","text","ds_bbs","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div00.edt_email","value","ds_bbs","BBRD_TI");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Div00.Static02","text","ds_bbs","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_5140.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_5140.xfdl", function() {
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {   
           this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {   
        	/*결과값 초기화*/

        }
         
        /*창닫기*/
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        /*조회*/
        this.btn_search_onclick = function(obj,e)
        {	
        	var sSvcID        = "retrieveMyMenuList";		
        	var sURL          = "svc::rest/pt/retrieveMyMenuList?userKey="+application.gv_userKey;
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_myMenu=ds_myMenu";	
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회			
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        
        /*추가*/
        this.btn_insert_onclick = function(obj,e)
        {
        	var sSvcID        = "insertMyMenu";		
        	var sURL          = "svc::rest/pt/insertMyMenu?userKey="+application.gv_userKey;
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_myMenu=ds_myMenu";	
        	var sArgument     = "menuId=01000000";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회			
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /*삭제*/
        this.btn_delete_onclick = function(obj,e)
        {
        	var sSvcID        = "deleteMyMenu";		
        	var sURL          = "svc::rest/pt/deleteMyMenu?userKey="+application.gv_userKey;
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_myMenu=ds_myMenu";	
        	var sArgument     = "menuId=01000000";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회			
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        
        /*콜백메소드*/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        alert("ErrorCode::"+ErrorCode);
        	alert(this.ds_myMenu.saveXML());
        	if(ErrorCode < 0){	
        		/*NoData 일경우*/		
        		this.gfn_getMessage("alert", "error.message.server.exception");		
        		
        		return;			
        	}else{	 
        		
        	}	
        }
         
         
        this.Button00_onclick = function(obj,e)
        {
        	var sSvcID        = "test";		
        	var sURL          = "svc::rest/mg/retrieveMenuList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_menu=ds_menu ds_my_menu=ds_my_menu";	
        	var sArgument     = "menuId=01000000";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회			
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Static01.addEventHandler("onclick", this.Static01_onclick, this);
            this.Button01.addEventHandler("onclick", this.btn_close_onclick, this);
            this.Static08.addEventHandler("onclick", this.Static01_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_insert.addEventHandler("onclick", this.btn_insert_onclick, this);
            this.btn_delete.addEventHandler("onclick", this.btn_delete_onclick, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_5140.xfdl");

       
    };
}
)();
