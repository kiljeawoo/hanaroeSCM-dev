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
                this.set_name("OMG_DS_SC_013");
                this.set_classname("pattern_01");
                this.set_titletext("eSCM공지사항(보기)");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,741,441);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_bbs", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"BLBD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_TI\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"BLTN_ST_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"BLTN_ED_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CKNL_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_INQ_CN\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_RGMNM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRGMN\" type=\"STRING\" size=\"256\"/><Column id=\"LSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LSRGMN\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_CHG_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ISCHECKED\">1</Col><Col id=\"BLBD_ID\">가나다라마바</Col><Col id=\"BBRD_ID\">20150202</Col><Col id=\"BBRD_TI\">200243</Col><Col id=\"BBRD_CNTN\">가나다라마바아자</Col><Col id=\"BLTN_ST_DTM\">ABC123456789</Col><Col id=\"BLTN_ED_DTM\">가나다라마바아자</Col><Col id=\"CKNL_DSC\">가나다라마바아자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static20", "absolute", "17", "103", "110", "29", null, null, this);
            obj.getSetter("taborder").set("119");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "126", "103", null, "29", "18", null, this);
            obj.getSetter("taborder").set("120");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0%", "0", null, "32", "53.44%", null, this);
            obj.getSetter("taborder").set("102");
            obj.set_text("공지사항");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "94.74%", "0", null, "32", "0.27%", null, this);
            obj.set_taborder("103");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "993", "0", "15", "490", null, null, this);
            obj.getSetter("taborder").set("71");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0%", "76", null, "73", "97.71%", null, this);
            obj.getSetter("taborder").set("104");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "97.57%", "96", "17", "333", null, null, this);
            obj.getSetter("taborder").set("105");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "48.99%", "423", null, "17", "38.73%", null, this);
            obj.getSetter("taborder").set("106");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "48.99%", "384", null, "10", "38.73%", null, this);
            obj.getSetter("taborder").set("107");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok", "absolute", null, null, "54", "29", "17", "18", this);
            obj.set_taborder("108");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "242", "32", "91", "15", null, null, this);
            obj.getSetter("taborder").set("109");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "683", "39", null, "8", "17", null, this);
            obj.getSetter("taborder").set("110");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "572", "47", null, "29", "18", null, this);
            obj.getSetter("taborder").set("111");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "126", "47", "338", "29", null, null, this);
            obj.getSetter("taborder").set("112");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "17", "47", "110", "29", null, null, this);
            obj.getSetter("taborder").set("113");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "463", "47", "110", "29", null, null, this);
            obj.getSetter("taborder").set("114");
            obj.set_text("날짜");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "572", "75", null, "29", "18", null, this);
            obj.getSetter("taborder").set("115");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "17", "75", "110", "29", null, null, this);
            obj.getSetter("taborder").set("116");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "463", "75", "110", "29", null, null, this);
            obj.getSetter("taborder").set("117");
            obj.set_text("조회수");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "126", "75", "338", "29", null, null, this);
            obj.getSetter("taborder").set("118");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "17", "103", null, null, "18", "57", this);
            obj.getSetter("taborder").set("121");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01", "absolute", "33", "119", null, null, "33", "73", this);
            obj.set_taborder("122");
            obj.set_wordwrap("char");
            obj.set_readonly("true");
            obj.set_cssclass("txt_WF_file");
            obj.getSetter("mask").set("###,###");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 741, 441, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("eSCM공지사항(보기)");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item6","OMG_DS_SC_013","","ds_bbs","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","OMG_DS_SC_013","","ds_bbs","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Static13","text","ds_bbs","BBRD_TI");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Static19","text","ds_bbs","BBRD_RGMNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Static12","text","ds_bbs","LSRG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Static16","text","ds_bbs","CKNL_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Static21","text","ds_bbs","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","TextArea01","text","ds_bbs","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","TextArea01","value","ds_bbs","BBRD_CNTN");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_1641_P.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_1641_P.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        //this.objRtnArr = new Array(2); //팝업창 close시 전달할 값을 위한 배열 선언
        this.boardId = "";
        this.documentId = "";
        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.boardId = this.getOwnerFrame().boardId;
        	this.documentId = this.getOwnerFrame().documentId;
        	
        	this.fn_getBbsContent();
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_getBbsContent = function()
        {
        	var sSvcID        = "retrieveBbsContent";
        	var sURL          = "svc::rest/portal/retrieveBbsContent";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_bbs=ds_bbs";	
        	var sArgument     = "boardId="+ this.boardId +
        	                    " documentId=" + this.documentId;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
         	if(ErrorCode < 0) //에러
         	{
        		trace(">>>>>>>>>>>>>>> svcID ::" +  svcID + ",  ErrorCode :: " + ErrorCode + ",  ErrorMsg :: " + ErrorMsg);
         	}
         	else 
         	{
        		switch(svcID)
        		{
        			case "getBbsContent":
        				application.trace(this.ds_bbs.saveXML());
        				break;
        		}
         	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        
        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_ok.addEventHandler("onclick", this.btn_close_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_1641_P.xfdl");

       
    };
}
)();
