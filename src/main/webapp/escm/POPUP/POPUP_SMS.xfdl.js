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
                this.set_name("popup01");
                this.set_titletext("고객응대SMS");
                this.set_scrollbars("none");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,261,316);
            }
            this.getSetter("layoutautofittype").set("none");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_searchR", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_SCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_DTCF_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_LCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_MCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_SCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_DTCFNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_ID_DSC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_selectL", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_LCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_ID_DSC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_selectM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_MCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_ID_DSC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_selectS", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_SCLC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_SCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_ID_DSC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_selectD", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_DTCF_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_DTCFNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_ID_DSC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static06", "absolute", "0", "0", null, "32", "0", null, this);
            obj.set_taborder("16");
            obj.set_text("고객응대SMS");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_send", "absolute", "167", "271", "54", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_text("보내기");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "148", "300", "91", "17", null, null, this);
            obj.set_taborder("10");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "148", "229", "91", "10", null, null, this);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "149", "32", "91", "15", null, null, this);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "0", "37", "32", "0", null, this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Div("div_searchR", "absolute", "17", "47", "235", "222", null, null, this);
            obj.set_taborder("17");
            obj.set_text("div_searchR");
            obj.set_scrollbars("autovert");
            this.addChild(obj.name, obj);
            obj = new TextArea("txt_content", "absolute", "0.78%", "9", "219", "176", null, null, this.div_searchR);
            obj.set_taborder("0");
            obj.set_maxlength("0");
            this.div_searchR.addChild(obj.name, obj);
            obj = new Edit("edt_telno", "absolute", "2", "190", "133", "29", null, null, this.div_searchR);
            obj.set_taborder("1");
            obj.set_inputtype("number");
            obj.set_displaynulltext("연락처를 입력하세요.");
            obj.set_maxlength("11");
            this.div_searchR.addChild(obj.name, obj);

            obj = new Static("sta_byte", "absolute", "65.13%", "239", null, "20", "27.97%", null, this);
            obj.set_taborder("18");
            obj.set_text("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "68.97%", "239", null, "20", "11.11%", null, this);
            obj.set_taborder("19");
            obj.set_text("/60 byte");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 235, 222, this.div_searchR,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("17");
            		p.set_text("div_searchR");
            		p.set_scrollbars("autovert");

            	}
            );
            this.div_searchR.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 261, 316, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("고객응대SMS");
            		p.set_scrollbars("none");
            		p.getSetter("layoutautofittype").set("none");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("POPUP_SMS.xfdl", "lib::comLib.xjs");
        this.registerScript("POPUP_SMS.xfdl", function() {
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
        	//trace("paramMode : "+this.getOwnerFrame().paramMode);
        	//trace("dsArg : "+this.parent.dsArg.rowcount);	
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        this.btn_ok_onclick = function(obj,e)
        {
        	var str = null;
        	
        	if (this.gfn_isNull(this.div_searchR.txt_content.value)) {
        		this.alert("내용을 입력하시기 바랍니다.");
        		this.div_searchR.txt_content.setFocus();
        		return;
        	}
        	
        	if (this.gfn_isNull(this.div_searchR.edt_telno.value)) {
        		this.alert("연락처를 입력하시기 바랍니다.");
        		this.div_searchR.edt_telno.setFocus();
        		return;
        	} else {
        		str = "[" + this.div_searchR.edt_telno.value + "]" + this.gfn_nullToEmpty(this.div_searchR.txt_content.value);
        	}
        	
        	if(this.gfn_lengthByte(str) > 60){
        		this.alert("60Byte 이상 입력하실 수 없습니다.");
        		return;
        	}
        	
        	if(application.confirm("SMS 전송하겠습니까?")){
        		trace("전송");
        		var params =  	"content='" + str + "'";
        		
        		var sSvcID        = "sendSms";//통신아이디
        		var sURL          = "svc::rest/pt/sendSMS";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = params;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "U"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}else{
        		this.div_searchR.txt_content.set_value('');
        		this.sta_byte.set_text('0');
        		return false;
        	}
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        	if(ErrorCode < 0) //에러
         	{
        		trace(">>>>>>>>>>>>>>> svcID ::" +  svcID + ",  ErrorCode :: " + ErrorCode + ",  ErrorMsg :: " + ErrorMsg);
        		switch(svcID)
        		{
        			case "sendSms":
        				alert(ErrorMsg);
        				this.div_searchR.txt_content.set_value('');
        				this.sta_byte.set_text('0');
        			break;
        		}
         	}
         	else 
         	{
        		switch(svcID)
        		{
        			case "sendSms":
        				alert("담당자에게 전송되었습니다.");
        				this.div_searchR.txt_content.set_value('');
        				this.sta_byte.set_text('0');
        				break;
        		}
         	}
        }

        this.div_searchR_TextArea00_onkeyup = function(obj,e)
        {
        	var str = null;
        	
        	if (this.gfn_isNull(this.div_searchR.edt_telno.value)) {
        		str = this.gfn_nullToEmpty(this.div_searchR.txt_content.value);
        	} else {
        		str = "[" + this.div_searchR.edt_telno.value + "]" + this.gfn_nullToEmpty(this.div_searchR.txt_content.value);
        	}
        	
        	if(e.keycode == 8){
        		this.sta_byte.set_text(this.gfn_lengthByte(str));
        	}else{
        		if(this.gfn_lengthByte(str) > -1){
        		trace(this.gfn_lengthByte(str));
        			if(this.gfn_lengthByte(str) > 60){
        				alert("60Byte 이상 입력하실수 없습니다.");
        				
        				if (this.gfn_lengthByte(this.div_searchR.txt_content.value) > 47) {
        					var byteLength = 0;
        					var tmp = this.div_searchR.txt_content.value;
        					var contents = null;
        					
        					for (var i = 0; i < tmp.length; i++){
        						if (byteLength <= 47) {
        							if (tmp.charCodeAt(i) > 127){
        								byteLength += 2;
        							} else {
        								byteLength += 1;
        							}
        							
        							contents = tmp.substring(0, i);
        						} else {
        							this.div_searchR.txt_content.set_value(contents);
        							
        							if (this.gfn_isNull(this.div_searchR.edt_telno.value)) {
        								str = this.gfn_nullToEmpty(this.div_searchR.txt_content.value);
        							} else {
        								str = "[" + this.div_searchR.edt_telno.value + "]" + this.gfn_nullToEmpty(this.div_searchR.txt_content.value);
        							}
        							
        							break;
        						}
        					}
        				}
        				
        				this.sta_byte.set_text(this.gfn_lengthByte(str));
        			}else{
        				this.sta_byte.set_text(this.gfn_lengthByte(str));
        			}
        		
        		}else{
        			this.sta_byte.set_text('0');
        		}
        	}
        }

        this.div_searchR_Edit00_onkeyup = function(obj,e)
        {
        	var str = null;
        	
        	if (this.gfn_isNull(this.div_searchR.edt_telno.value)) {
        		str = this.gfn_nullToEmpty(this.div_searchR.txt_content.value);
        	} else {
        		str = "[" + this.div_searchR.edt_telno.value + "]" + this.gfn_nullToEmpty(this.div_searchR.txt_content.value);
        	}
        	
        	if(e.keycode == 8){
        		this.sta_byte.set_text(this.gfn_lengthByte(str));
        	}else{
        		if(this.gfn_lengthByte(str) > -1){
        		trace(this.gfn_lengthByte(str));
        			if(this.gfn_lengthByte(str) > 60){
        				alert("60Byte 이상 입력하실수 없습니다.");
        				
        				if (this.gfn_lengthByte(this.div_searchR.txt_content.value) > 47) {
        					var byteLength = 0;
        					var tmp = this.div_searchR.txt_content.value;
        					var contents = null;
        					
        					for (var i = 0; i < tmp.length; i++){
        						if (byteLength <= 47) {
        							if (tmp.charCodeAt(i) > 127){
        								byteLength += 2;
        							} else {
        								byteLength += 1;
        							}
        							
        							contents = tmp.substring(0, i);
        						} else {
        							this.div_searchR.txt_content.set_value(contents);
        							
        							if (this.gfn_isNull(this.div_searchR.edt_telno.value)) {
        								str = this.gfn_nullToEmpty(this.div_searchR.txt_content.value);
        							} else {
        								str = "[" + this.div_searchR.edt_telno.value + "]" + this.gfn_nullToEmpty(this.div_searchR.txt_content.value);
        							}
        							
        							break;
        						}
        					}
        				}
        				
        				this.sta_byte.set_text(this.gfn_lengthByte(str));
        			}else{
        				this.sta_byte.set_text(this.gfn_lengthByte(str));
        			}
        		
        		}else{
        			this.sta_byte.set_text('0');
        		}
        	}	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_send.addEventHandler("onclick", this.btn_ok_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.div_searchR.txt_content.addEventHandler("onkeyup", this.div_searchR_TextArea00_onkeyup, this);
            this.div_searchR.edt_telno.addEventHandler("onkeyup", this.div_searchR_Edit00_onkeyup, this);

        };

        this.loadIncludeScript("POPUP_SMS.xfdl");

       
    };
}
)();
