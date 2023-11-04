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
                this.set_name("PDA_CN_002002");
                this.set_titletext("프로그램버전 등록");
                this.set_scrollbars("autoboth");
                this._setFormPosition(0,0,767,214);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("pda_program", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PGM_FL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_FL_VER\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_FL_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"RMK_CNTN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_confirm", "absolute", null, "15", "55", "21", "78", null, this);
            obj.set_taborder("133");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancle", "absolute", null, "15", "55", "21", "17", null, this);
            obj.set_taborder("151");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static1", "absolute", "17", "44", "134", "29", null, null, this);
            obj.set_taborder("228");
            obj.set_text("프로그램파일ID");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_linespace("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static3", "absolute", "17", "100", "134", "29", null, null, this);
            obj.set_taborder("189");
            obj.set_text("비고내용");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static124", "absolute", "150", "72", null, "29", "16", null, this);
            obj.set_taborder("234");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "17", "72", "134", "29", null, null, this);
            obj.set_taborder("235");
            obj.set_text("프로그램파일업로드");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload00", "absolute", "155", "76", null, "24", "285", null, this);
            obj.set_taborder("238");
            obj.getSetter("retry").set("0");
            obj.set_scrollbars("none");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "99", "17", "67", null, null, this);
            obj.set_taborder("239");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "17", "19", "135", "21", null, null, this);
            obj.set_taborder("240");
            obj.set_text("프로그램관리");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "673", "0", "91", "15", null, null, this);
            obj.set_taborder("241");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "150", "44", null, "29", "16", null, this);
            obj.set_taborder("242");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("PGM_FL_ID", "absolute", "157", "48", "256", "21", null, null, this);
            obj.set_taborder("243");
            obj.set_inputmode("upper");
            obj.set_inputfilter("comma,sign,symbol,digit,space");
            obj.set_inputtype("number,english");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("20");
            obj.set_cssclass("edt_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "150", "100", null, "29", "16", null, this);
            obj.set_taborder("244");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("RMK_CNTN", "absolute", "157", "104", "544", "21", null, null, this);
            obj.set_taborder("245");
            obj.set_inputtype("number,english,space");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("200");
            obj.set_cssclass("edt_WF_Essential");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 767, 214, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("프로그램버전 등록");
            		p.set_scrollbars("autoboth");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("PDA_CN_001002.xfdl", "lib::comLib.xjs");
        this.registerScript("PDA_CN_001002.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        var systemFileName = null;
        // this.bbsType = E_SCM;
        // this.noticeYn = 'N';
        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	//페이지 로딩후 실행부분
        	this.PGM_FL_ID.setFocus();
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_pdaProgramInsert = function()
        {
        	var PGM_FL_ID = this.gfn_nullToEmpty(this.PGM_FL_ID.value);       //프로그램파일ID    
        	var RMK_CNTN = this.gfn_nullToEmpty(this.RMK_CNTN.value);         //비고내용
        	
        	var param = "PGM_FL_ID=" + PGM_FL_ID
        				+ " systemFileName="+systemFileName
        				+ " RMK_CNTN="+RMK_CNTN;
        	
            var sSvcID        = "insert";
        	var sURL          = "svc::rest/pda/ProgramInsert";
        	var sInDatasets   = "pda_program=pda_program";
        	var sOutDatasets  = "";
        	var sArgument     = param;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
         	if(ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}
        	this.close("SUCCESS");
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.common_onclick = function(obj,e)
        {
             switch (obj.id) {
        		case "btn_confirm":
        		if(this.fn_checkValidation()){
        			this.fn_pdaProgramInsert();
        			}
        			break;
        			
        		case "btn_cancle":
        			this.close("FAIL");
        			break;
        	}
        }

        
        this.fn_checkValidation = function()
        {
        	if(this.gfn_isNull(this.PGM_FL_ID.value))
        	{
        		alert("프로그램ID를 입력해주세요");
        		return false;
        	}
        	if(this.gfn_isNull(systemFileName)  ) {
        			alert("첨부파일을 입력해주세요");
        			return false;
        		   }

        	return true;
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
        this.popup_FileUpload_onerror = function(obj,e)
        {
        	trace("FileUpload_onerror aaa");
        	trace("e.errorcode: "+e.errorcode);
        	trace("e.errormsg: "+e.errormsg);
        }
        this.popup_FileUpload_onitemchanged = function(obj,e)
        {
        	this.gfn_callUpload(obj);

        }

        this.popup_FileUpload_onsuccess = function(obj,e)
        {
        	if( e.datasets == null ){
        		trace("업로드 실패");
        	} else {				
        		systemFileName = e.datasets[0].getColumn(0,"SYSTEMFILENAME");
        		this.txt_content.set_readonly(true);
        	}	
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_confirm.addEventHandler("onclick", this.common_onclick, this);
            this.btn_cancle.addEventHandler("onclick", this.common_onclick, this);
            this.Static00.addEventHandler("onclick", this.Static00_onclick, this);
            this.FileUpload00.addEventHandler("onsuccess", this.popup_FileUpload_onsuccess, this);
            this.FileUpload00.addEventHandler("onerror", this.popup_FileUpload_onerror, this);
            this.FileUpload00.addEventHandler("onitemchanged", this.popup_FileUpload_onitemchanged, this);

        };

        this.loadIncludeScript("PDA_CN_001002.xfdl");

       
    };
}
)();
