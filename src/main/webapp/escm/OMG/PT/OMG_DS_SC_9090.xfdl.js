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
                this.set_name("OMG_DS_SC_9090");
                this.set_visible("true");
                this.set_scrollbars("none");
                this.set_enable("true");
                this.set_titletext("eSCM 공지 ");
                this._setFormPosition(0,0,600,640);
            }
            this.style.set_border("2 solid #067394ff");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_img", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PICTURE\" type=\"BLOB\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_chk", "absolute", "0", "605", null, "29", "15", null, this);
            obj.set_taborder("45");
            obj.set_text("Div00");
            obj.style.set_background("transparent");
            this.addChild(obj.name, obj);
            obj = new CheckBox("chk", "absolute", null, null, "130", "17", "0", "10", this.div_chk);
            obj.set_taborder("2");
            obj.set_text("일주일간 보지 않기");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_chk.addChild(obj.name, obj);

            obj = new TextArea("txt_content", "absolute", "0", "0", "600", "600", null, null, this);
            obj.set_taborder("48");
            obj.set_visible("false");
            obj.set_scrollbars("autoboth");
            obj.style.set_linespace("15");
            obj.style.set_background("transparent");
            obj.set_readonly("true");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Div("div_img", "absolute", "0", "0", "600", "600", null, null, this);
            obj.set_taborder("49");
            obj.set_text("Div00");
            obj.style.set_background("transparent");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            obj = new ImageViewer("imgView", "absolute", "0", "0", "600", "600", null, null, this.div_img);
            obj.set_taborder("0");
            obj.style.set_background("transparent");
            obj.style.set_border("1 solid #bfbfbfff");
            obj.set_visible("true");
            this.div_img.addChild(obj.name, obj);

            obj = new WebBrowser("wb_namo_prv", "absolute", "0", "0", "600", "600", null, null, this);
            obj.set_taborder("50");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 29, this.div_chk,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("45");
            		p.set_text("Div00");
            		p.style.set_background("transparent");

            	}
            );
            this.div_chk.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 600, 600, this.div_img,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("49");
            		p.set_text("Div00");
            		p.style.set_background("transparent");
            		p.set_visible("true");

            	}
            );
            this.div_img.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 600, 640, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_3212");
            		p.style.set_border("2 solid #067394ff");
            		p.set_visible("true");
            		p.set_scrollbars("none");
            		p.set_enable("true");
            		p.set_titletext("eSCM 공지 ");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","div_img.imgView","image","ds_img","PICTURE");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_9090.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_9090.xfdl", function() {
        //include "lib::comLib.xjs"

        this.framename = "";
        this.BlbdId  = "";
        this.BbrdId="";
        this.systemFileName = "";
        this.mhtFile = "";

        this.OMG_DS_SC_9090_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통

        	var url=this.parent.URL;
        	this.framename = this.parent.FRAME_NAME;
        	
        	// 등록 미리 보기 
        	this.BlbdId = this.parent.BLBD_ID;
        	this.BbrdId = this.parent.BBRD_ID;
        	
        	this.bbrd_cntn = this.parent.BBRD_CNTN;
        	this.mhtFile = this.parent.MHT;
        	
        	if(this.bbrd_cntn == "N"){
        		//이미지 팝업
        		this.div_img.set_visible(true);
        		this.txt_content.set_visible(false);
        		
        		var nRow  = this.ds_img.addRow();
        		this.ds_img.setColumn(nRow ,"PICTURE"  , url);
        		//이미지 로긴 할때 까지 대기 
        		this.setTimer(0,500)  ;
        	}else{
        		if (!this.gfn_isNull(this.mhtFile) && this.mhtFile != 'N') {
        			this.wb_namo_prv.set_visible(true);
        			// 나모 Html 로긴 할때 까지 대기
        			this.setTimer(0,500);
        		} else {
        			this.txt_content.set_visible(true);
        			this.txt_content.set_value(this.bbrd_cntn);
        			this.div_img.set_visible(false);
        		}
        	}
        }

        this.fn_popupAfter = function(strId,strVal)
        {

        }

        this.fn_afterFormOnload = function()
        {

        }

        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        }

        this.fn_search =  function()
        {
        	param = "BlbdId="+this.BlbdId 
        			+" BbrdId="+this.BbrdId
        			+" systemFileName="+this.systemFileName	;
        			
        	var sSvcID        = "search";//통신아이디
        	var sURL          = "svc::rest/pt/blbd/retrieveBlbdPopup";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_img=ds_img";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0){
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "search"){
        			if(this.ds_img.rowcount > 0){ 
        				this.setTimer(0,500)  ;
        			}else if(this.ds_img.rowcount == 0){
        				alert("조회된 건수가 없습니다");
        				return false;
        			}
        		}
        	}
        }

        this.btn_Close_onclick = function(obj,e)
        {
        	this.close();
        }

        this.div_chk_chk_onchanged = function(obj,e)
        {
        	if(this.div_chk.chk.value == 1)	{
        		//bSucc = application.setPrivateProfile(this.framename, "Y");
        		bSucc = application.setPrivateProfile(this.BbrdId, this.gfn_addDate(this.gfn_getClientTime("yyyyMMdd"), 7)); // 일주일간 보지 않기(d+7일)
        		this.close();
        	
        	}else{
        		//bSucc = application.setPrivateProfile(this.framename, "N");
        		bSucc = application.setPrivateProfile(this.BbrdId, "N");
        	}
        }

        this.OMG_DS_SC_9090_ontimer = function(obj,e)
        {
         	if(this.bbrd_cntn == "N"){
        		if(this.div_img.imgView.imageheight > 0)
        		{
        			this.killTimer(0);
        			
        			var	width = (this.div_img.imgView.imagewidth);
        			var height = (this.div_img.imgView.imageheight) ;
        		
        			//alert(width+ "/" +height)
        			this.div_img.imgView.set_width(width);
        			this.div_img.imgView.set_height(height);
        			this.div_img.resetScroll();
        		}
        	}else{
        		this.killTimer(0);
        		
        		var vHtml = this.wb_namo_prv.getProperty("document").getProperty("body");
        		this.xmlData = this.bbrd_cntn;
        		vHtml.setProperty("innerHTML", this.xmlData );
        	}		
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.OMG_DS_SC_9090_onload, this);
            this.addEventHandler("ontimer", this.OMG_DS_SC_9090_ontimer, this);
            this.div_chk.chk.addEventHandler("onchanged", this.div_chk_chk_onchanged, this);

        };

        this.loadIncludeScript("OMG_DS_SC_9090.xfdl");

       
    };
}
)();
