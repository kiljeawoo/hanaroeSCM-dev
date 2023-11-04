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
                this.set_name("OMG_DS_SC_3124");
                this.set_classname("pattern_01");
                this.set_titletext("상담신청이력");
                this._setFormPosition(0,0,803,383);
            }
            this.style.set_color("#999999ff");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_receive", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"STS\" type=\"string\" size=\"32\"/><Column id=\"TINM\" type=\"string\" size=\"32\"/><Column id=\"ST_DT\" type=\"string\" size=\"32\"/><Column id=\"CHRG_BUYER_NM\" type=\"string\" size=\"32\"/><Column id=\"RLTM_NTC_CHK\" type=\"string\" size=\"32\"/><Column id=\"CNTN\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_in", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"TINM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"RLTM_NTC_SMS\" type=\"STRING\" size=\"256\"/><Column id=\"CHRW_ATEL\" type=\"STRING\" size=\"256\"/><Column id=\"CHRW_HTEL\" type=\"STRING\" size=\"256\"/><Column id=\"CHRW_STEL\" type=\"STRING\" size=\"256\"/><Column id=\"RLTM_NTC_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"CHRR_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"CHRG_BUYER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_ATEL\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_HTEL\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_STEL\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_HDNGCN\" type=\"STRING\" size=\"256\"/><Column id=\"TMS_STS\" type=\"STRING\" size=\"256\"/><Column id=\"STS\" type=\"STRING\" size=\"256\"/><Column id=\"CSLT_RQ_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_close", "absolute", null, "0", "41", "21", "15", null, this);
            obj.set_taborder("133");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "788", "0", "15", "181", null, null, this);
            obj.getSetter("taborder").set("194");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "44", "301", "21", null, null, this);
            obj.getSetter("taborder").set("196");
            obj.set_text("상담신청이력");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "15", "21", "871", "20", null, null, this);
            obj.getSetter("taborder").set("198");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "0", "69", null, "123", "15", null, this);
            obj.set_taborder("200");
            obj.set_binddataset("ds_receive");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"373\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"0\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"날짜\"/><Cell col=\"3\" text=\"실시간 통지방법\"/><Cell col=\"4\" text=\"등록자\"/><Cell col=\"5\"/></Band><Band id=\"body\"><Cell text=\"bind:STS\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:TINM\"/><Cell col=\"2\" text=\"bind:ST_DT\"/><Cell col=\"3\" text=\"bind:RLTM_NTC_CHK\"/><Cell col=\"4\" text=\"bind:CHRG_BUYER_NM\"/><Cell col=\"5\" text=\"bind:CNTN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "0", "216", "301", "21", null, null, this);
            obj.getSetter("taborder").set("205");
            obj.set_text("통보내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "0", "241", "110", "122", null, null, this);
            obj.getSetter("taborder").set("207");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "109", "241", null, "122", "15", null, this);
            obj.getSetter("taborder").set("209");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_cntn", "absolute", "113", "245", "671", "114", null, null, this);
            obj.set_taborder("214");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("234");
            obj.set_url("common::location.xfdl");
            obj.set_text("Div01");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "11", "192", "871", "20", null, null, this);
            obj.getSetter("taborder").set("246");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "11", "363", "871", "20", null, null, this);
            obj.getSetter("taborder").set("247");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 383, this,
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
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_3124.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_3124.xfdl", function() {
        //include "lib::comLib.xjs";

        
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
        	var cslt_rq_no = this.gfn_nullToEmpty(this.parent.cslt_rq_no);  //상담신청번호
        	
        	param = " cslt_rq_no="+cslt_rq_no;

        	var sSvcID        = "search";
        	var sURL          = "svc::rest/businessTalk/retrieveCounselingList";
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
        	
        		if(ErrorCode > -1){
        			//alert("정상적으로 처리되었습니다.");
        			//this.close();
        		}
        		trace(this.ds_in.saveXML());
        		trace(this.ds_receive.saveXML());
        		
        		
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

        this.loadIncludeScript("OMG_DS_SC_3124.xfdl");
        this.loadPreloadList();
       
    };
}
)();
