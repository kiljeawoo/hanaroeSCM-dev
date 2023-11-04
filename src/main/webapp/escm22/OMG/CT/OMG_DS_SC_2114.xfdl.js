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
                this.set_name("OMG_DS_SC_2114");
                this.set_titletext("계약서 변경 이력 상세");
                this._setFormPosition(0,0,803,483);
            }
            this.style.set_color("#999999ff");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_in", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"TINM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"RLTM_NTC_SMS\" type=\"STRING\" size=\"256\"/><Column id=\"CHRW_ATEL\" type=\"STRING\" size=\"256\"/><Column id=\"CHRW_HTEL\" type=\"STRING\" size=\"256\"/><Column id=\"CHRW_STEL\" type=\"STRING\" size=\"256\"/><Column id=\"RLTM_NTC_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"CHRR_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"CHRG_BUYER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_ATEL\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_HTEL\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_STEL\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNGCN\" type=\"STRING\" size=\"256\"/><Column id=\"TMS_STS\" type=\"STRING\" size=\"256\"/><Column id=\"STS\" type=\"STRING\" size=\"256\"/><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_receive", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MN_CTRW_KDNM\" type=\"STRING\" size=\"256\"/><Column id=\"STS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TINM\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CHRG_BUYER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"RLTM_NTC_SMS\" type=\"STRING\" size=\"256\"/><Column id=\"SMS_SEND_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SMS_READ_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SMS_STS\" type=\"STRING\" size=\"256\"/><Column id=\"RLTM_NTC_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_SEND_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_READ_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_close", "absolute", null, "0", "41", "21", "15", null, this);
            obj.set_taborder("133");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "788", "0", "15", "181", null, null, this);
            obj.set_taborder("194");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "15", "44", "301", "21", null, null, this);
            obj.set_taborder("196");
            obj.set_text("상담신청이력");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "15", "21", "871", "20", null, null, this);
            obj.set_taborder("198");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "15", "316", "301", "21", null, null, this);
            obj.set_taborder("205");
            obj.set_text("통보내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "15", "341", "110", "122", null, null, this);
            obj.set_taborder("207");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "125", "341", null, "122", "16", null, this);
            obj.set_taborder("209");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_cntn", "absolute", "129", "345", "654", "114", null, null, this);
            obj.set_taborder("214");
            obj.set_wordwrap("char");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "11", "292", "871", "20", null, null, this);
            obj.set_taborder("246");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "11", "463", "871", "20", null, null, this);
            obj.set_taborder("247");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "15", "69", null, "223", "15", null, this);
            obj.set_taborder("248");
            obj.set_binddataset("ds_receive");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"373\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"126\"/><Column size=\"123\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"122\"/><Column size=\"129\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"상태\"/><Cell col=\"1\" rowspan=\"2\" text=\"제목\"/><Cell col=\"2\" rowspan=\"2\" text=\"담당계약담당자\"/><Cell col=\"3\" rowspan=\"2\" text=\"신청날짜\"/><Cell col=\"4\" rowspan=\"2\" text=\"등록자\"/><Cell col=\"5\"/><Cell col=\"6\" colspan=\"4\" text=\"문자\"/><Cell col=\"10\" colspan=\"4\" text=\"이메일\"/><Cell row=\"1\" col=\"5\"/><Cell row=\"1\" col=\"6\" text=\"사용여부\"/><Cell row=\"1\" col=\"7\" text=\"전달시간\"/><Cell row=\"1\" col=\"8\" text=\"수신시간\"/><Cell row=\"1\" col=\"9\" text=\"전송상태\"/><Cell row=\"1\" col=\"10\" text=\"사용여부\"/><Cell row=\"1\" col=\"11\" text=\"전달시간\"/><Cell row=\"1\" col=\"12\" text=\"수신시간\"/><Cell row=\"1\" col=\"13\" text=\"전송상태\"/></Band><Band id=\"body\"><Cell edittype=\"none\" text=\"bind:STS_NM\"/><Cell col=\"1\" edittype=\"none\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:TINM\"/><Cell col=\"2\" text=\"bind:BUYER_NM\"/><Cell col=\"3\" edittype=\"none\" text=\"bind:ST_DT\" mask=\"####-##-##\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" edittype=\"none\" text=\"bind:CHRG_BUYER_NM\"/><Cell col=\"5\" edittype=\"none\" text=\"bind:CNTN\"/><Cell col=\"6\" edittype=\"none\" text=\"bind:RLTM_NTC_SMS\"/><Cell col=\"7\" displaytype=\"expr:SMS_SEND_DATE==null?'none':'text'\" edittype=\"none\" text=\"bind:SMS_SEND_DATE\" mask=\"@@@@-@@-@@ @@:@@:@@\" calendardisplay=\"edit\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" displaytype=\"expr:SMS_READ_TIME==null?'none':'text'\" edittype=\"none\" text=\"bind:SMS_READ_DATE\" mask=\"@@@@-@@-@@ @@:@@:@@\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" edittype=\"none\" text=\"bind:SMS_STS\"/><Cell col=\"10\" edittype=\"none\" text=\"bind:RLTM_NTC_EMAIL\"/><Cell col=\"11\" displaytype=\"expr:EMAIL_SEND_DATE==null?'none':'text'\" edittype=\"none\" text=\"bind:EMAIL_SEND_DATE\" mask=\"@@@@-@@-@@ @@:@@:@@\" calendardisplaynulltype=\"none\"/><Cell col=\"12\" displaytype=\"expr:EMAIL_READ_DATE==null?'none':'text'\" edittype=\"none\" text=\"bind:EMAIL_READ_DATE\" mask=\"@@@@-@@-@@ @@:@@:@@\" calendardisplaynulltype=\"none\"/><Cell col=\"13\" edittype=\"none\" text=\"bind:EMAIL_STS\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 483, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("계약서 변경 이력 상세");
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
        this.addIncludeScript("OMG_DS_SC_2114.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_2114.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        
        this.form_onload = function(obj,e)
        {   
           this.gfn_setInitForm(obj, e); //공통
           
        }

        
        this.fn_afterFormOnload = function()
        {
        	//*조회 호출*/
        	this.search();
        	
        }

         /*조회*/
        this.search = function()
        {	
        	var ds_parent = this.parent.dsArg;
        	var elt_ctrw_no = this.gfn_nullToEmpty(this.parent.elt_ctrw_no);  //상담신청번호
        	
        	param = " elt_ctrw_no="+elt_ctrw_no;

        	var sSvcID        = "search";
        	var sURL          = "svc::rest/ct/eltctrw/retrieveCtrwChgHstDscList";
        	var sInDatasets   = "ds_param=ds_param";
        	var sOutDatasets  = "ds_in=ds_in ds_receive=ds_receive";	
        	var sArgument     = param;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        //callback메소드
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {		
        	//trace("ErrorCode" + ErrorCode);
        		if(ErrorCode > -1){
        		//	alert("정상적으로 처리되었습니다.");
        			//this.close();
        		}
        // 		trace(this.ds_in.saveXML());
        // 		trace(this.ds_receive.saveXML());
        		
        		
        }

         /*닫기*/
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        this.ds_receive_onrowposchanged = function(obj,e)
        {
        	
        	this.txa_cntn.set_value(obj.getColumn(e.newrow ,"CNTN")  ) 

        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_receive.addEventHandler("onrowposchanged", this.ds_receive_onrowposchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_2114.xfdl", true);

       
    };
}
)();
