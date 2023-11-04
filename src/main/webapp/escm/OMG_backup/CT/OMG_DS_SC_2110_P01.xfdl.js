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
                this.set_name("POPUP_RGN");
                this.set_cssclass("frm_WF_PopupBg");
                this.set_titletext("전자계약 해지 팝업");
                this._setFormPosition(0,0,563,272);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_in", this);
            obj._setContents("<ColumnInfo><Column id=\"TINM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_ok", "absolute", "225", "233", "54", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel", "absolute", "283", "233", "54", "29", null, null, this);
            obj.set_taborder("7");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "0", "29", "32", "0", null, this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("16");
            obj.set_text("전자계약서 해지");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "10", "95", "110", "122", null, null, this);
            obj.set_taborder("17");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "10", "67", "110", "29", null, null, this);
            obj.set_taborder("18");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "119", "67", null, "29", "5", null, this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "119", "95", null, "122", "5", null, this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_tinm", "absolute", "127", "71", null, "21", "13", null, this);
            obj.set_taborder("21");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("128");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_cntn01", "absolute", "127", "99", null, "114", "13", null, this);
            obj.set_taborder("22");
            obj.set_wordwrap("char");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("2048");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "5", "45", "301", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_text("통보내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 563, 272, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_cssclass("frm_WF_PopupBg");
            		p.set_titletext("전자계약 해지 팝업");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edt_tinm","value","ds_in","TINM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","txa_cntn01","value","ds_in","CNTN");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_2110_P01.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_2110_P01.xfdl", function() {
        //include "lib::comLib.xjs";

        this.eltCtrwNo = "";
        this.chgSqno = "";
        this.mnCtrwKd = "";

        this.form_onload = function(obj,e)
        {
        	this.eltCtrwNo = this.parent.eltCtrwNo;
        	this.chgSqno = this.parent.chgSqno;
        	this.mnCtrwKd = this.parent.mnCtrwKd;
        	
        	if (this.gfn_nullToEmpty(this.eltCtrwNo) == "" || this.gfn_nullToEmpty(this.chgSqno) == "" || this.gfn_nullToEmpty(this.mnCtrwKd) == "") {
        		this.alert("전자계약 정보가 누락되었습니다.\n다시 시도해주세요.");
        		this.close("N");
        	}
        }

        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close("N");
        }

        this.btn_ok_onclick = function(obj,e)
        {
        	this.updateCancelElt();
        }

        this.validationCheck = function()
        {
        	if (this.gfn_nullToEmpty(this.edt_tinm.value) == "") {
        		this.alert("제목을 입력해주세요.");
        		return false;
        	}
        	
        	if (this.gfn_nullToEmpty(this.txa_cntn01.value) == "") {
        		this.alert("내용을 입력해주세요.");
        		return false;
        	}
        	
        	return application.confirm("해당 전자계약서를 해지합니다.");
        }

        this.updateCancelElt = function()
        {
        	if (!this.validationCheck()) {
        		return;
        	}
        	
        	param = "elt_ctrw_no="+this.eltCtrwNo+" chg_sqno="+this.chgSqno + " ctrw_kdc=" + this.mnCtrwKd;

        	var sSvcID        = "cancel";
        	var sURL          = "svc::rest/ct/eltctrw/updateCancelElt";
        	var sInDatasets   = "ds_in=ds_in";
        	var sOutDatasets  = "";
        	var sArgument     = param;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U";

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", ErrorMsg);
        		return;
        	} else {
        		if (svcID == "cancel") {
        			this.gfn_getMessage("alert", "result.message.save.success");
        			this.close("Y");
        		}
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_ok.addEventHandler("onclick", this.btn_ok_onclick, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_cancel_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_cancel_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_2110_P01.xfdl");

       
    };
}
)();
