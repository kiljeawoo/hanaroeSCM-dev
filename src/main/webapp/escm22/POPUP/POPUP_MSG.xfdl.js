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
                this.set_name("POPUP_MSG");
                this.set_titletext("하나로 eSCM");
                this._setFormPosition(0,0,450,200);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dataM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NAAC_DSC_N\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"BZPL_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"BZPL_DTI_TPC_N\" type=\"STRING\" size=\"256\"/><Column id=\"BZPL_TPNM\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"NA_RGN_C\" type=\"STRING\" size=\"256\"/><Column id=\"RGN_CNM\" type=\"STRING\" size=\"256\"/><Column id=\"TEL\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZ_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZ_TPNM\" type=\"STRING\" size=\"256\"/><Column id=\"TR_STOP_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_cancel", "absolute", null, null, "80", "29", "140", "40", this);
            obj.set_taborder("10");
            obj.set_text("아니오");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok", "absolute", "140", null, "80", "29", null, "40", this);
            obj.set_taborder("11");
            obj.set_text("예");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk", "absolute", null, null, "105", "17", "10", "10", this);
            obj.set_taborder("12");
            obj.set_text("다시 보지 않기");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_popup_content", "absolute", "20", "15", null, null, "20", "80", this);
            obj.set_taborder("13");
            obj.set_wordwrap("char");
            obj.style.set_background("#fefefeff");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 450, 200, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("하나로 eSCM");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("POPUP_MSG.xfdl", "lib::comLib.xjs");
        this.registerScript("POPUP_MSG.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";
        /*##################################################################################
         화면명	: 팝업 메시지
         화면ID  	: POPUP_MSG
         작성자 	: khyoon
          작성일자 : 2018.09.12
        ####################################################################################*/
        var popupId; // 팝업ID, 다시 보지 않기 관리용(동일한 팝업 ID는 피해서 사용)
        var popupMsg; // 팝업 메시지
        var popupType; // 확인 버튼 눌렀을 때 처리방식
        var popupAction; // URL, MENU이동시 사용
        var popupTitle; // 팝업창 제목변경시 사용

        this.form_onload = function(obj,e) 
        {	
        	this.gfn_setInitForm(obj, e); //공통
        	
        	popupId = this.parent.pId;
        	popupType = this.parent.pType;
        	popupMsg = this.parent.pMsg;
        	popupAction = this.parent.pAction;
        	popupTitle = this.parent.pTitle; // Optional, Default "하나로 eSCM"
        	var chk = this.parent.pChk;
        	
        	if (!this.gfn_isNull(popupTitle)) {
        		this.set_titletext(popupTitle);
        	}
        	
        	if (this.gfn_nvl(chk, "Y") == "N") {
        		this.chk.set_visible(false);
        	}
        	
        	if (this.gfn_isNull(popupType) || (popupType != "TEXT" && popupType != "LINK" && popupType != "MENU")) {
        		popupType = "TEXT";
        	}
        	
        // 	popupType = "MENU";
        // 	popupAction = "01003001";
        	
        	if (popupType == "TEXT") {
        		this.btn_ok.set_left(185);
        		this.btn_ok.set_text("확인");
        		this.btn_cancel.set_visible(false);
        	}
        	this.sta_popup_content.set_text(popupMsg);
        	
        }

        this.fn_afterFormOnload = function()
        {
        }

        this.btn_ok_onclick = function(obj,e)
        {
        	if (popupType == "LINK") {
        		if (!this.gfn_isNull(popupAction) && (popupAction.indexOf("https:") == 0 || popupAction.indexOf("http:") == 0)) {
        			window.open(popupAction);
        		} else {
        			trace("올바르지 않은 URL입니다.");
        		}
        	} else if (popupType == "MENU") {
        		if (!this.gfn_isNull(popupAction)) {
        			this.gfn_moveMenuId(popupAction);
        		} else {
        			trace("메뉴ID가 입력되지 않았습니다.");
        		}
        	}
        	this.close();
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        this.div_chk_onchanged = function(obj,e)
        {
        	if(obj.value == 1)	{
        		application.setPrivateProfile("pp_"+popupId, "Y");
        		this.close();
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_ok.addEventHandler("onclick", this.btn_ok_onclick, this);
            this.chk.addEventHandler("onchanged", this.div_chk_onchanged, this);

        };

        this.loadIncludeScript("POPUP_MSG.xfdl", true);

       
    };
}
)();
