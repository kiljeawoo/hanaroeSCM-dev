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
                this.set_name("OMG_DS_SC_7111");
                this.set_titletext("SMS발송");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_sms", this);
            obj._setContents("<ColumnInfo><Column id=\"receiver\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "79", "330", "708", "138", null, null, this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "79", "40", "708", "233", null, null, this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "2.86%", "697", null, "20", "-24.53%", null, this);
            obj.set_taborder("0");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "79", "272", "708", "59", null, null, this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new ListBox("list_receiver", "absolute", "87", "79", "503", "185", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_innerdataset("@ds_sms");
            obj.set_datacolumn("receiver");
            obj.set_scrollbars("autovert");
            obj.style.set_itemheight("23");
            obj.style.set_font("12 Gulim");

            obj = new Button("btn_remove", "absolute", "596", "79", "65", "26", null, null, this);
            obj.set_taborder("8");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_removeAll", "absolute", "596", "115", "65", "26", null, null, this);
            obj.set_taborder("9");
            obj.set_text("모두삭제");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "0", "272", "80", "59", null, null, this);
            obj.set_taborder("3");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "40", "80", "233", null, null, this);
            obj.set_taborder("10");
            obj.set_text("수신번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add", "absolute", "596", "45", "65", "26", null, null, this);
            obj.set_taborder("5");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_receiver", "absolute", "87", "45", "503", "26", null, null, this);
            obj.set_taborder("6");
            obj.set_displaynulltext("콤마(,)로 구분하여 한 번에 여러 건을 입력할 수 있습니다.");
            obj.set_inputtype("number,comma");
            obj.set_inputfilter("dot,sign,symbol,alpha,space");
            this.addChild(obj.name, obj);

            obj = new Static("sta_byte", "absolute", "691", "309", "25", "15", null, null, this);
            obj.set_taborder("12");
            obj.set_text("0");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_byte_max", "absolute", "717", "309", "50", "15", null, null, this);
            obj.set_taborder("13");
            obj.set_text("/0 byte");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_msg", "absolute", "87", "279", "682", "26", null, null, this);
            obj.set_taborder("14");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("64");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_preview", "absolute", "141", "351", "176", "95", null, null, this);
            obj.set_taborder("15");
            obj.set_readonly("true");
            obj.set_wordwrap("char");
            obj.set_scrollbars("autovert");
            obj.style.set_padding("8 8 8 8");
            obj.style.set_background("#eeeeeeff");
            obj.style.set_border("0 solid #bfbfbfff");
            obj.style.set_color("#333333ff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("bold 9 Gulim");
            obj.set_enable("false");
            obj.set_displaynulltext("[하나로eSCM]");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "0", "330", "80", "138", null, null, this);
            obj.set_taborder("17");
            obj.set_text("미리보기");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "597", "190", "170", "74", null, null, this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "610", "193", "66", "24", null, null, this);
            obj.set_taborder("18");
            obj.set_text("수신대상 :");
            this.addChild(obj.name, obj);

            obj = new Static("sta_recv", "absolute", "667", "193", "30", "24", null, null, this);
            obj.set_taborder("19");
            obj.style.set_align("right middle");
            obj.style.set_font("bold 9 Gulim");
            obj.set_text("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "610", "221", "66", "24", null, null, this);
            obj.set_taborder("20");
            obj.set_text("휴대전화 :");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mobile", "absolute", "667", "221", "30", "24", null, null, this);
            obj.set_taborder("21");
            obj.set_text("0");
            obj.style.set_align("right middle");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "610", "239", "66", "24", null, null, this);
            obj.set_taborder("22");
            obj.set_text("그 외      :");
            this.addChild(obj.name, obj);

            obj = new Static("sta_tel", "absolute", "667", "239", "30", "24", null, null, this);
            obj.set_taborder("23");
            obj.set_text("0");
            obj.style.set_align("right middle");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_recv_max", "absolute", "705", "193", "30", "24", null, null, this);
            obj.set_taborder("24");
            obj.set_text("/ 0");
            obj.style.set_font("bold 9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "609", "219", "146", "1", null, null, this);
            obj.set_taborder("25");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "787", "0", "15", "490", null, null, this);
            obj.set_taborder("27");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", "738", "10", "50", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("보내기");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("SMS발송");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","divSearch.edt_menuId","value","ds_in","MENU_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divSearch.cbo_menuLevel","value","ds_in","MENU_LEVEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divSearch.edt_menuName","value","ds_in","MENU_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divSearch.edt_svcGroup","value","ds_in","SVC_GROUP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divSearch.edt_fileName","value","ds_in","FILE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divSearch.edt_fileType","value","ds_in","FILE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","divSearch.cbo_displayYn","value","ds_in","DISPLAY_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","divSearch.cbo_useYn","value","ds_in","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_7211.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_7211.xfdl", function(exports) {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/

        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        var MAX_LENGTH = 74; // SMS최대길이
        var MAX_SEND = 20; // 수신자 지정 최대 수
        	
        this.form_onload = function(obj,e)
        {   
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function() // 페이지 로딩 후 실행 부분
        {
        	// 수신자 수, 문자메시지 길이 수 제한 표시
        	this.sta_recv_max.set_text("/ " + MAX_SEND);
        	this.sta_byte_max.set_text("/" + MAX_LENGTH + " byte");
        	this.edt_msg.set_maxlength(MAX_LENGTH);
        	
        	this.edt_receiver.setFocus();
        }

        this.fn_validationCheck = function()
        {
        	if (this.ds_sms.getRowCount() == 0) {
        		this.alert('수신자를 등록바랍니다');
        		this.edt_receiver.setFocus();
        		return false;
        	}
        	
        	if (this.gfn_isNull(this.edt_msg.value)) {
        		this.alert('내용을 입력바랍니다');
        		this.edt_msg.setFocus();
        		return false;
        	}
        	
        	return application.confirm("SMS "+ this.ds_sms.getRowCount() + "건을 아래와 같이 발송합니다.\n\"[하나로eSCM] " + this.edt_msg.value + "\"");
        }

        this.fn_save_onclick = function(obj,e)
        {
        	if (this.fn_validationCheck()) {
        		var sSvcID        = "sendSMS";
        		var sURL          = "svc::rest/mg/usrinf/sendSMS";
        		var sInDatasets   = "ds_sms=ds_sms";
        		var sOutDatasets  = "";
        		var sArgument     = "content=" + nexacro.wrapQuote("[하나로eSCM] " + this.gfn_nullToEmpty(this.edt_msg.value));
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회
        		
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {

        	if (ErrorCode < 0) {
        		if (ErrorCode == -1) {
        			this.gfn_getMessage("alert", ErrorMsg);
        		} else {
        			this.alert(ErrorMsg);
        		}
        		return;
        	} else {
        		if(svcID == "sendSMS"){
        			this.ds_sms.clearData();
        			this.edt_msg.set_value("");
        			this.txt_preview.set_value(null);
        			this.check_irregular_list();
        			this.edt_msg_onkeyup();
        			//this.alert(ErrorMsg + "건이 발송되었습니다.");
        			this.alert("발송되었습니다.");
        		}
        	}
        }

        this.check_irregular_list = function()
        {
        	var regular = 0, irregular = 0;
        	if (this.ds_sms.getRowCount() > 0) {	
        		for (var i=0; i<this.ds_sms.getRowCount(); i++) {
        			var tel = this.ds_sms.getColumn(i, "receiver");
        			var regex = new RegExp(/^01([0|1|6|7|8|9])(\d{7,8}$)/g);
        			if (regex.test(tel)) {
        				regular++;
        			} else {
        				irregular++;
        			}
        		}
        	}
        	this.sta_recv.set_text(regular + irregular);
        	if (regular + irregular >= MAX_SEND) { this.sta_recv.style.set_color("red"); }
        	else { this.sta_recv.style.set_color("#333333ff"); }
        	this.sta_mobile.set_text(regular);
        	this.sta_tel.set_text(irregular);
        }

        // 전화번호 추가(버튼)
        this.btn_add_onclick = function(obj,e)
        {
        	if (!this.gfn_isNull(this.edt_receiver.value)) {
        		var list = this.edt_receiver.value.split(",");
        		var dupYn = false;
        		for (var i in list) {
        			if (this.ds_sms.getRowCount() < MAX_SEND) { // 수신자 수 제한(MAX_SEND값으로 조절)
        				var tel = list[i].replace(/[^0-9]/g,""); // 숫자만 입력
        				if (!this.gfn_isNull(tel)) {
        					var dup = this.ds_sms.findRow("receiver", tel); // 중복된 번호 입력 방지
        					if (dup == -1) {
        						var pos = this.ds_sms.addRow();
        						this.ds_sms.setColumn(pos, "receiver", tel);
        					} else {
        						dupYn = true;
        					}
        				}
        			} else {
        				this.alert(MAX_SEND + "건을 초과할 수 없습니다.");
        				break;
        			}
        		}
        		if (dupYn) { this.alert("중복된 번호가 제외되었습니다."); }
        		
        		this.edt_receiver.set_value("");
        		this.edt_receiver.setFocus();
        		this.check_irregular_list();
        	}
        }

        // 전화번호 추가(엔터입력)
        this.edt_receiver_onkeyup = function(obj,e)
        {
        	if (e.keycode == "13") {
        		this.btn_add_onclick();
        	}
        }

        // 전화번호 삭제(선택)
        this.btn_remove_onclick = function(obj,e)
        {
        	var idx = this.list_receiver.getSelectedItems()[0];
        	if (idx >= 0 && this.ds_sms.getRowCount() > idx) {
        		this.ds_sms.deleteRow(idx);
        		this.check_irregular_list();
        	} else {
        		this.alert("선택된 대상이 없거나 목록이 비어있습니다.");
        	}
        }

        // 전화번호 삭제(전부)
        this.btn_removeAll_onclick = function(obj,e)
        {
        	this.ds_sms.clearData();
        	this.check_irregular_list();
        }

        this.edt_msg_onkeyup = function(obj,e)
        {
        	var len = this.gfn_lengthByte(this.edt_msg.value);
        	if (len < 0) { len = 0; }
        	if (len > this.MAX_LENGTH) { this.sta_byte.style.set_color("red"); }
        	else { this.sta_byte.style.set_color("#333333ff"); }
        	this.sta_byte.set_text(len);
        	
        	if(!this.gfn_isNull(this.edt_msg.value)){
        		this.txt_preview.set_value("[하나로eSCM] " + this.edt_msg.value);
        	} else {
        		this.txt_preview.set_value("[하나로eSCM]");
        	}
        }
        this.edt_msg_onkillfocus = function(obj,e)
        {	
        	this.edt_msg.set_value(this.gfn_trim(this.edt_msg.value));
        	this.edt_msg_onkeyup(obj);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_remove.addEventHandler("onclick", this.btn_remove_onclick, this);
            this.btn_removeAll.addEventHandler("onclick", this.btn_removeAll_onclick, this);
            this.btn_add.addEventHandler("onclick", this.btn_add_onclick, this);
            this.edt_receiver.addEventHandler("onkeyup", this.edt_receiver_onkeyup, this);
            this.edt_msg.addEventHandler("onkeyup", this.edt_msg_onkeyup, this);
            this.edt_msg.addEventHandler("onkillfocus", this.edt_msg_onkillfocus, this);
            this.btn_save.addEventHandler("onclick", this.fn_save_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_7211.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
