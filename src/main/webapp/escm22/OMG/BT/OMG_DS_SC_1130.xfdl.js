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
                this.set_name("OMG_DS_SC_1130");
                this.set_titletext("상담신청이력");
                this._setFormPosition(0,0,803,493);
            }
            this.style.set_color("#999999ff");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_receive", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "788", "0", "15", "181", null, null, this);
            obj.set_taborder("194");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "15", "16", "301", "21", null, null, this);
            obj.set_taborder("196");
            obj.set_text("상담신청이력");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "15", "0", "871", "20", null, null, this);
            obj.set_taborder("198");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_receive", "absolute", "15", "40", null, "301", "15", null, this);
            obj.set_taborder("200");
            obj.set_binddataset("ds_receive");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"373\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"진행상태\"/><Cell col=\"1\" rowspan=\"2\" text=\"제목\"/><Cell col=\"2\" rowspan=\"2\" text=\"날짜\"/><Cell col=\"3\" rowspan=\"2\" text=\"등록자\"/><Cell col=\"4\"/><Cell col=\"5\" colspan=\"4\" text=\"문자\"/><Cell col=\"9\" colspan=\"4\" text=\"이메일\"/><Cell row=\"1\" col=\"4\"/><Cell row=\"1\" col=\"5\" text=\"사용여부\"/><Cell row=\"1\" col=\"6\" text=\"전달시간\"/><Cell row=\"1\" col=\"7\" text=\"수신시간\"/><Cell row=\"1\" col=\"8\" text=\"전송상태\"/><Cell row=\"1\" col=\"9\" text=\"사용여부\"/><Cell row=\"1\" col=\"10\" text=\"전달시간\"/><Cell row=\"1\" col=\"11\" text=\"수신시간\"/><Cell row=\"1\" col=\"12\" text=\"전송상태\"/></Band><Band id=\"body\"><Cell text=\"bind:STS_NM\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:TINM\" tooltiptext=\"bind:TINM\"/><Cell col=\"2\" text=\"bind:RQ_DT\" mask=\"####-##-##\"/><Cell col=\"3\" text=\"bind:CHRG_BUYER_NM\"/><Cell col=\"4\" text=\"bind:CNTN\"/><Cell col=\"5\" text=\"bind:RLTM_NTC_SMS\"/><Cell col=\"6\" displaytype=\"expr:SMS_SEND_DATE==null?'none':'text'\" text=\"bind:SMS_SEND_DATE\" mask=\"@@@@-@@-@@ @@:@@:@@\"/><Cell col=\"7\" displaytype=\"expr:SMS_READ_TIME==null?'none':'text'\" text=\"bind:SMS_READ_TIME\" mask=\"@@@@-@@-@@ @@:@@:@@\" calendardisplaynulltype=\"default\"/><Cell col=\"8\" text=\"bind:SMS_STS\"/><Cell col=\"9\" text=\"bind:RLTM_NTC_SMS\"/><Cell col=\"10\" displaytype=\"expr:EMAIL_SEND_DATE==null?'none':'text'\" text=\"bind:EMAIL_SEND_DATE\" mask=\"@@@@-@@-@@ @@:@@:@@\"/><Cell col=\"11\" displaytype=\"expr:EMAIL_READ_DATE==null?'none':'text'\" text=\"bind:EMAIL_READ_DATE\" mask=\"@@@@-@@-@@ @@:@@:@@\"/><Cell col=\"12\" text=\"bind:EMAIL_STS\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "15", "351", "110", "122", null, null, this);
            obj.set_taborder("207");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "124", "351", null, "122", "15", null, this);
            obj.set_taborder("209");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_cntn", "absolute", "129", "355", "654", "114", null, null, this);
            obj.set_taborder("214");
            obj.set_wordwrap("char");
            obj.set_readonly("true");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("0 solid #bfbfbfff");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "11", "473", "871", "20", null, null, this);
            obj.set_taborder("247");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 493, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("상담신청이력");
            		p.style.set_color("#999999ff");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","txa_cntn","value","ds_receive","CNTN");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_1130.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_1130.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {   
           this.gfn_setInitForm(obj, e); // 공통
        }

        this.fn_afterFormOnload = function()
        {
        	this.search();
        }

        // 조회
        this.search = function()
        {
        	var param = "cslt_rq_no=" + this.gfn_nullToEmpty(this.parent.cslt_rq_no); // 상담신청번호
        	
        	var sSvcID        = "search";
        	var sURL          = "svc::rest/bt/rq/retrieveCsltRqHstList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_receive=ds_receive";
        	var sArgument     = param;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		this.close();
        		return;
        	}
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        this.ds_receive_onrowposchanged = function(obj,e)
        {
        	this.txa_cntn.set_value(obj.getColumn(e.newrow, "CNTN"));
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_receive.addEventHandler("onrowposchanged", this.ds_receive_onrowposchanged, this);
            this.addEventHandler("onload", this.form_onload, this);

        };

        this.loadIncludeScript("OMG_DS_SC_1130.xfdl", true);

       
    };
}
)();
