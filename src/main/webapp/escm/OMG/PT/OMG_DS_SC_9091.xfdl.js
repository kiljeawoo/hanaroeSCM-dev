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
                this.set_name("OMG_DS_SC_9091");
                this.set_visible("true");
                this.set_scrollbars("none");
                this.set_enable("true");
                this.set_titletext("eSCM 공지 ");
                this._setFormPosition(0,0,600,600);
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
            obj = new Div("div_img", "absolute", "0", "0", "600", "600", null, null, this);
            obj.set_taborder("49");
            obj.set_text("Div00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new ImageViewer("imgView", "absolute", "0", "0", "600", "600", null, null, this.div_img);
            obj.set_taborder("0");
            obj.style.set_border("1 solid #bfbfbfff");
            this.div_img.addChild(obj.name, obj);

            obj = new TextArea("txt_content", "absolute", "0", "0", "600", "600", null, null, this);
            obj.set_taborder("50");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 600, 600, this.div_img,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("49");
            		p.set_text("Div00");
            		p.set_visible("false");

            	}
            );
            this.div_img.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 600, 600, this,
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
            obj = new BindItem("item0","div_img.imgView","image","ds_img","PICTURE");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_9091.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_9091.xfdl", function() {
        //include "lib::comLib.xjs"

        this.framename = "";
        this.BlbdId  = "";
        this.BbrdId="";
        this.systemFileName = "";

        this.OMG_DS_SC_9091_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통

        	var url=this.getOwnerFrame().URL;
        	this.framename = this.getOwnerFrame().FRAME_NAME;

        	// 등록 미리 보기
        	this.BlbdId = this.getOwnerFrame().BLBD_ID;
        	application.setPrivateProfile(this.framename, "N");
        	this.bbrd_cntn = this.getOwnerFrame().BBRD_CNTN;
        	
        	if (this.BlbdId == "201506090001") {
        		if (this.gfn_isNull(this.getOwnerFrame().BBRD_CNTN) == false) {
        			//이미지 글씨 팝업
        			this.div_img.set_visible(false);
        			this.txt_content.set_visible(true);
        			this.txt_content.set_value(this.bbrd_cntn);
        		} else {
        			if (this.gfn_isNull(this.getOwnerFrame().BBRD_ID) == false) {
        				this.BbrdId= this.getOwnerFrame().BBRD_ID;
        			}

        		   if (this.gfn_isNull(this.getOwnerFrame().SYSTEMFILENAME) == false) {
        				this.systemFileName = this.getOwnerFrame().SYSTEMFILENAME;
        		   }

        		   this.div_img.set_visible(true);
        		   this.txt_content.set_visible(false);
        		   this.fn_search();
        		}
        	}
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
        	this.gfn_callService(sSvcID, sURL, sInDatasets , sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID == "search") {
        			if (this.ds_img.rowcount > 0) {
        				this.setTimer(0, 500) ;
        			} else if (this.ds_img.rowcount == 0) {
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

        this.OMG_DS_SC_9091_ontimer = function(obj,e) {
         	if (this.div_img.imgView.imageheight > 0) {
         		this.killTimer(0);
         		var	width = (this.div_img.imgView.imagewidth);
         		var height = (this.div_img.imgView.imageheight);

         		this.div_img.imgView.set_width(width);
         		this.div_img.imgView.set_height(height);
         		this.div_img.resetScroll();
         	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.OMG_DS_SC_9091_onload, this);
            this.addEventHandler("ontimer", this.OMG_DS_SC_9091_ontimer, this);

        };

        this.loadIncludeScript("OMG_DS_SC_9091.xfdl");

       
    };
}
)();
