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
                this.set_name("OMG_DS_SC_8213");
                this.set_titletext("교육신청 조회");
                this.set_scrollbars("autoboth");
                this._setFormPosition(0,0,500,300);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_edu_dt", this);
            obj._setContents("<ColumnInfo><Column id=\"EDU_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_my_edu", this);
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_edu", this);
            obj._setContents("<ColumnInfo><Column id=\"gln\" type=\"STRING\" size=\"256\"/><Column id=\"eduDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "126", "44", null, "29", "17", null, this);
            obj.set_taborder("163");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("st_content", "absolute", "17", "72", null, null, "17", "15", this);
            obj.set_taborder("147");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_content", "absolute", "30", "83", null, null, "30", "30", this);
            obj.set_taborder("148");
            obj.set_wordwrap("char");
            obj.set_readonly("true");
            obj.set_cssclass("txt_WF_file");
            obj.getSetter("mask").set("###,###");
            obj.style.set_background("#ffffff00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_subscription_search", "absolute", null, "15", "41", "21", "17", null, this);
            obj.set_taborder("161");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_edu_dt", "absolute", "187", "48", "135", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("164");
            obj.set_value("null");
            obj.set_innerdataset("@ds_edu_dt");
            obj.set_codecolumn("EDU_DATE");
            obj.set_datacolumn("EDU_DATE");
            obj.set_index("0");

            obj = new Edit("edt_gln", "absolute", "325", "48", "30", "21", null, null, this);
            obj.set_taborder("165");
            obj.set_maxlength("13");
            obj.set_visible("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "17", "44", "160", "29", null, null, this);
            obj.set_taborder("141");
            obj.set_text("교육일자 선택");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 500, 300, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("교육신청 조회");
            		p.set_scrollbars("autoboth");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item12","txt_content","text","ds_notice","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","txt_content","value","ds_notice","OFANC_CNTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","OMG_DS_SC_1641","","ds_notice","");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_8213.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_8213.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        this.seq = "";

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); // 공통
        }

        this.fn_afterFormOnload = function()
        {
        	// 페이지 로딩후 실행부분
        	try {
        		this.seq = this.parent.seq;
        	} catch(e) {
        		// trace("부모화면 필요");
        	}

        	this.fn_retrieveEducationDate();
        	this.edt_gln.set_value(application.gv_glnCode);
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_retrieveEducationDate = function()
        {
        	var sSvcID        = "retrieveEducationDate";
        	var sURL          = "svc::rest/mg/edu/retrieveEducationDate";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_edu_dt=ds_edu_dt";
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets , sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_retrieveMyEducation = function()
        {
        	if (this.gfn_isNull(this.cbo_edu_dt.value) || this.cbo_edu_dt.value == "null") {
        		this.alert("교육일자를 선택하셔야 합니다.");
        		return;
        	}
        	if (this.gfn_isNull(this.edt_gln.value)) {
        		this.alert("신청업체코드를 입력하셔야 합니다.");
        		return;
        	}

        	this.ds_edu.addRow();
        	this.ds_edu.setColumn(0, "eduDt", this.cbo_edu_dt.value);
        	this.ds_edu.setColumn(0, "gln", this.edt_gln.value);

        	var sSvcID        = "retrieveMyEducation";
        	var sURL          = "svc::rest/mg/edu/retrieveMyEducation";
        	var sInDatasets   = "ds_edu=ds_edu";
        	var sOutDatasets  = "ds_my_edu=ds_my_edu";
        	var sArgument     = "eduDt=" + this.cbo_edu_dt.value;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets , sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
         	if (ErrorCode < 0) { //에러
        		// trace(">>>>>>>>>>>>>>> svcID ::" +  svcID + ", ErrorCode :: " + ErrorCode + ", ErrorMsg :: " + ErrorMsg);
         	} else {
        		switch(svcID) {
        			case "retrieveMyEducation":
        				 var name = null;

        				 for (var i = 0; i < this.ds_my_edu.rowcount; i++) {
        					if (this.gfn_isNull(name)) {
        						name = this.ds_my_edu.getColumn(i, "NAME");
        					} else {
        						name = name + ", " + this.ds_my_edu.getColumn(i, "NAME");
        					}
        				 }

        				 if (!this.gfn_isNull(name)) {
        					this.txt_content.set_value(name + " 님은 교육대상 입니다.");
        				 } else {
        					this.txt_content.set_value("교육대상자가 없습니다.");
        				 }

        				 break;
        			case "retrieveEducationDate":
        				if (this.ds_edu_dt.rowcount > 0) {
        					this.cbo_edu_dt.set_index(0);
        				}
        		}
         	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_subscription_search.addEventHandler("onclick", this.fn_retrieveMyEducation, this);

        };

        this.loadIncludeScript("OMG_DS_SC_8213.xfdl");

       
    };
}
)();
