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
                this.set_name("PDA_CN_001003");
                this.set_cssclass("sta_WF_PopupTitle");
                this.set_titletext("프로그램버전 상세");
                this._setFormPosition(0,0,767,214);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("pda_pmst", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PGM_FL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_FL_VER\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_FL_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"RMK_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_delete", "absolute", null, "15", "55", "21", "78", null, this);
            obj.set_taborder("4");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_init", "absolute", null, "15", "55", "21", "17", null, this);
            obj.set_taborder("3");
            obj.set_text("다운로드");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "17", "72", "134", "29", null, null, this);
            obj.set_taborder("12");
            obj.set_text("프로그램파일경로");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "17", "100", "134", "29", null, null, this);
            obj.set_taborder("30");
            obj.set_text("등록자ID");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "383", "100", "134", "29", null, null, this);
            obj.set_taborder("32");
            obj.set_text("등록일시");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "17", "128", "134", "30", null, null, this);
            obj.set_taborder("51");
            obj.set_text("비고내용");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_linespace("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "17", "44", "134", "29", null, null, this);
            obj.set_taborder("53");
            obj.set_text("프로그램파일ID");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "383", "44", "134", "29", null, null, this);
            obj.set_taborder("55");
            obj.set_text("프로그램파일버전");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_linespace("5");
            this.addChild(obj.name, obj);

            obj = new Static("filtext", "absolute", "150", "128", "601", "30", null, null, this);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("filuser", "absolute", "150", "100", "234", "29", null, null, this);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("filpath", "absolute", "150", "72", "601", "29", null, null, this);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "17", "19", "135", "21", null, null, this);
            obj.set_taborder("62");
            obj.set_text("프로그램관리");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "99", "17", "67", null, null, this);
            obj.set_taborder("63");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "673", "0", "91", "15", null, null, this);
            obj.set_taborder("64");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "150", "44", "234", "29", null, null, this);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("flId", "absolute", "156", "48", "171", "21", null, null, this);
            obj.set_taborder("67");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("left middle");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "516", "44", "235", "29", null, null, this);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("filv", "absolute", "522", "48", "166", "21", null, null, this);
            obj.set_taborder("69");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("left middle");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "516", "100", "235", "29", null, null, this);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("fildate", "absolute", "522", "104", "187", "21", null, null, this);
            obj.set_taborder("71");
            obj.set_readonly("true");
            obj.set_type("string");
            obj.set_mask("####-##-## ##:##:##");
            obj.style.set_border("0 solid #bfbfbfff");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 767, 214, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popupPda");
            		p.set_cssclass("sta_WF_PopupTitle");
            		p.set_titletext("프로그램버전 상세");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","filpath","text","pda_pmst","PGM_FL_PATH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","filtext","text","pda_pmst","RMK_CNTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","filuser","text","pda_pmst","REG_USR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","flId","value","pda_pmst","PGM_FL_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","filv","value","pda_pmst","PGM_FL_VER");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","fildate","value","pda_pmst","REG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("PDA_CN_001003.xfdl", "lib::comLib.xjs");
        this.registerScript("PDA_CN_001003.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        var PGM_FL_ID = "";
        var PGM_FL_VER = "";
        var PGM_FL_PATH = '';
        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        	this.PGM_FL_ID = this.parent.PGM_FL_ID;
        	this.PGM_FL_VER = this.parent.PGM_FL_VER;
        	this.PGM_FL_PATH = this.parent.PGM_FL_PATH;
        	this.fn_pdaProgramDetail();
        	if(application.gv_userTPC == "admin"){
        		this.btn_delete.set_visible(true);
        	}
        }

        this.fn_afterFormOnload = function()
        {
        	//페이지 로딩후 실행부분
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_deletePdaDetail = function(status)
        {       
            var sSvcID        = "delete";
        	var sURL          = "svc::rest/pda/deletePdaDetail";
        	var sInDatasets   = "pda_pmst=pda_pmst";
        	var sOutDatasets  = "";
        	var sArgument     = "PGM_FL_ID="+ this.PGM_FL_ID +
        	                    " PGM_FL_VER=" + this.PGM_FL_VER; 
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_pdaProgramDetail = function()
        {
        	var sSvcID        = "detail";
        	var sURL          = "svc::rest/pda/ProgramDetail";
        	var sInDatasets   = "";
        	var sOutDatasets  = "pda_pmst=pda_pmst";	
        	var sArgument     = "PGM_FL_ID="+ this.PGM_FL_ID +
        	                    " PGM_FL_VER=" + this.PGM_FL_VER;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /* 콜백메소드 */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}
        	
        	if(svcID == "detail"){
        		if(this.pda_pmst.rowcount == 0){
        			this.grd_master.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));	
        			alert("데이터가 없습니다.");
        			this.close();
        			return;
        		}
        	} else if(svcID == "delete"){
        		alert("삭제되었습니다.");
        		this.close("SUCCESS");
        	} 
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.common_onclick = function(obj,e)
        {
        	var sSystemFileNm = this.PGM_FL_PATH;
        	var sFileName = encodeURIComponent(encodeURIComponent(this.PGM_FL_ID));
        	
        	var server_url = (application.gv_userTPC == "admin") ? application.gv_serverAdmin_url : application.gv_server_url;
        	var url = server_url + "rest/pda/fileDownload"
        			+ "?systemFileName=" + sSystemFileNm
        			+ "&fileName=" + sFileName;
        	
        	this.fileDownHandler(url, this);
        	
        	/*var _form = this;
        	
        	_form.setWaitCursor();
            
            $.fileDownload(_url, {
        		successCallback: function (url) {
        			_form.setWaitCursor(false);
        		},
        		failCallback: function (responseHtml) {
        			_form.setWaitCursor(false);
        			alert("파일 다운로드를 실패하였습니다.\n관리자에게 문의하세요.");
        		},
        		httpMethod: "POST",
        		data: ''
        	});*/
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/

        

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_delete.addEventHandler("onclick", this.fn_deletePdaDetail, this);
            this.btn_init.addEventHandler("onclick", this.common_onclick, this);

        };

        this.loadIncludeScript("PDA_CN_001003.xfdl");

       
    };
}
)();
