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
                this.set_name("location");
                this._setFormPosition(0,0,240,21);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn_bookmarkS", "absolute", "0", "0", "15", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_BookmarkS");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_location", "absolute", "18", "0", null, "21", "15", null, this);
            obj.set_taborder("0");
            obj.set_text("제목");
            obj.set_usedecorate("false");
            obj.set_cssclass("sta_WF_Location");
            this.addChild(obj.name, obj);

            obj = new Button("btn_bookmark", "absolute", "0", "0", "15", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 240, 21, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("location");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("location.xfdl", "lib::comLib.xjs");
        this.registerScript("location.xfdl", function() {
        //include "lib::comLib.xjs";

        var nMenuID = "";
        this.form_onload = function(obj,e)
        {
        	if(!application.gv_quickviewmode){
        		try
        		{
        			this.sta_location.set_text(this.getOwnerFrame().arguments["FORM_NM"]);
        			this._gfn_myMenuCheck();
        		}
        		catch(e)
        		{
        		}
        		
        	}	
        }

        this._gfn_myMenuCheck = function()
        {
        	nMenuID  = this.getOwnerFrame().arguments["FORM_ID"];	
        	var nRow = application.gds_myMenu.findRow("MENU_ID", nMenuID);
        	
        	if(nRow != -1) {
        		this.btn_bookmarkS.set_visible(true);
        		this.btn_bookmark.set_visible(false);
        	}
        }

        this.btn_bookmark_onclick = function(obj,e)
        {
        	//등록
        	if(obj.cssclass == "btn_WF_Bookmark"){
        		this.gfn_addMyMenu();
        				
        	//해제
        	}else{
        		this.gfn_delMyMenu();
        	}
        }

        this.gfn_addMyMenu = function()
        {
        	var sSvcID        = "insertMyMenu";      
        	var sURL          = "svc::rest/pt/insertMyMenu";
        	var sInDatasets   = "";
        	var sOutDatasets  = "gds_myMenu=ds_myMenu";
        	var sArgument     = "menuId="+nMenuID;
        	var sCallbackFunc = "fn_callBackLocation";
        	var sTranType     = "U";         
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType)
        }

        this.gfn_delMyMenu = function()
        {
        	var sSvcID        = "deleteMyMenu";      
        	var sURL          = "svc::rest/pt/deleteMyMenu";
        	var sInDatasets   = "";
        	var sOutDatasets  = "gds_myMenu=ds_myMenu";
        	var sArgument     = "menuId="+nMenuID;
        	var sCallbackFunc = "fn_callBackLocation";
        	var sTranType     = "U";
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_callBackLocation = function(svcId,eCode,eMsg)
        {
        	if(eCode == 2)
        	{	
        		if(svcId == "insertMyMenu"){
        			alert("My Menu에 등록되었습니다.");
        			this.btn_bookmarkS.set_visible(true);
        			this.btn_bookmark.set_visible(false);
        		}else if(svcId == "deleteMyMenu"){
        			alert("My Menu에서 해제되었습니다.");
        			this.btn_bookmarkS.set_visible(false);
        			this.btn_bookmark.set_visible(true);
        		}
        	}
        	else if(eCode > -1){
        		
        		if(svcId == "insertMyMenu"){
        			alert("My Menu에 등록되었습니다.");
        			this.btn_bookmarkS.set_visible(true);
        			this.btn_bookmark.set_visible(false);
        		}else if(svcId == "deleteMyMenu"){
        			alert("My Menu에서 해제되었습니다.");
        			this.btn_bookmarkS.set_visible(false);
        			this.btn_bookmark.set_visible(true);
        		}
        	}
        }
        this.sta_location_onclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_bookmarkS.addEventHandler("onclick", this.btn_bookmark_onclick, this);
            this.sta_location.addEventHandler("onclick", this.sta_location_onclick, this);
            this.btn_bookmark.addEventHandler("onclick", this.btn_bookmark_onclick, this);

        };

        this.loadIncludeScript("location.xfdl");

       
    };
}
)();
