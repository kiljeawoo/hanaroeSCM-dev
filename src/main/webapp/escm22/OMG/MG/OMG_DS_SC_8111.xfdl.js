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
                this.set_name("OMG_DS_SC_8111");
                this.set_titletext("교육신청 등록");
                this._setFormPosition(0,0,767,400);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_edu", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"STRING\" size=\"32\"/><Column id=\"TITLE\" type=\"STRING\" size=\"32\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"30\"/><Column id=\"EDU_DATE\" type=\"STRING\" size=\"20\"/><Column id=\"EDU_TIME\" type=\"STRING\" size=\"150\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"16\"/><Column id=\"FILEPATH\" type=\"STRING\" size=\"30\"/><Column id=\"FLIESIZE\" type=\"STRING\" size=\"16\"/><Column id=\"FSYSNAME\" type=\"STRING\" size=\"1\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_file", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"32\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"32\"/><Column id=\"FILESIZE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"32\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static38", "absolute", "126", "100", null, "29", "17", null, this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "126", "128", null, "195", "17", null, this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "126", "44", null, "29", "17", null, this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("upper_level1", "absolute", "126", "72", null, "29", "17", null, this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "15", "41", "21", "13", null, this);
            obj.set_taborder("10");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("text_title", "absolute", "17", "19", "135", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_text("교육신청등록/수정");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "17", "72", "110", "29", null, null, this);
            obj.set_taborder("13");
            obj.set_text("년/월");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "17", "100", "110", "29", null, null, this);
            obj.set_taborder("16");
            obj.set_text("시간");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "17", "128", "110", "195", null, null, this);
            obj.set_taborder("17");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "750", "44", "17", "67", null, null, this);
            obj.set_taborder("70");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "673", "0", "91", "15", null, null, this);
            obj.set_taborder("71");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "67", "17", "67", null, null, this);
            obj.set_taborder("72");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "674", "36", "91", "8", null, null, this);
            obj.set_taborder("73");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "15", "43", "21", "57", null, this);
            obj.set_taborder("95");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_title", "absolute", "130", "48", "186", "21", null, null, this);
            obj.set_taborder("106");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "17", "44", "110", "29", null, null, this);
            obj.set_taborder("127");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_time", "absolute", "130", "104", "186", "21", null, null, this);
            obj.set_taborder("129");
            this.addChild(obj.name, obj);

            obj = new TextArea("ed_content", "absolute", "130", "133", "610", "185", null, null, this);
            obj.set_taborder("130");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "17", "322", "110", "29", null, null, this);
            obj.set_taborder("138");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "126", "322", null, "29", "17", null, this);
            obj.set_taborder("139");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Radio("use_yn", "absolute", "130", "326", "158", "21", null, null, this);
            this.addChild(obj.name, obj);
            var use_yn_innerdataset = new Dataset("use_yn_innerdataset", this.use_yn);
            use_yn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">사용안함</Col></Row></Rows>");
            obj.set_innerdataset(use_yn_innerdataset);
            obj.set_taborder("140");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_value("Y");
            obj.set_index("0");

            obj = new Calendar("ed_date", "absolute", "16.95%", "76", null, "22", "68.71%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("141");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Static("Static01", "absolute", "17", "350", "110", "29", null, null, this);
            obj.set_taborder("142");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "126", "350", null, "29", "17", null, this);
            obj.set_taborder("143");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload", "absolute", "130", "354", null, "24", "565", null, this);
            obj.set_taborder("144");
            obj.getSetter("retry").set("0");
            obj.set_scrollbars("none");
            obj.set_multiselect("false");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_file", "absolute", "206", "354", "533", "21", null, null, this);
            obj.set_taborder("145");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 767, 400, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("교육신청 등록");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","ed_title","value","ds_edu","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","ed_date","value","ds_edu","EDU_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","ed_time","value","ds_edu","EDU_TIME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","ed_content","value","ds_edu","CONTENT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","use_yn","value","ds_edu","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_8111.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_8111.xfdl", function(exports) {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e) //공통
        {
           this.gfn_setInitForm(obj, e);
        }

        this.fn_afterFormOnload = function() //페이지 로딩후 실행부분
        {
        	this.ds_edu.addRow();
        	
        	var seq = this.getOwnerFrame().seq;
        	
        	if (this.gfn_isNull(seq)) {
        		this.ed_date.set_value(this.gfn_today("yyyyMMdd"));
        		this.use_yn.set_value("Y");
        	} else {
        		this.fn_search(seq);
        	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.fn_search = function (seq)
        {
        	var sSvcID        = "searchEdu";
        	var sURL          = "svc::rest/mg/edu/searchEdu";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_edu=ds_edu";
        	var sArgument     = "seq=" + seq;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /* 저장 버튼 이벤트 */
        this.fn_save_onclick = function(obj,e)
        {
        	if (!application.confirm("저장하시겠습니까?")) {
        		return;
        	}
        	
        	if (this.fn_validationCheck()) {
        		this.ds_edu.setColumn(0, "TITLE", this.gfn_nullToEmpty(this.ed_title.value));
        		this.ds_edu.setColumn(0, "CONTENT", this.gfn_nullToEmpty(this.ed_content.value));
        		this.ds_edu.setColumn(0, "EDU_DATE", this.gfn_nullToEmpty(this.ed_date.value));
        		this.ds_edu.setColumn(0, "EDU_TIME", this.gfn_nullToEmpty(this.ed_time.value));
        		
        		var sSvcID        = "insertEdu";
        		var sURL          = "svc::rest/mg/edu/insertEdu";
        		var sInDatasets   = "ds_edu=ds_edu";
        		var sOutDatasets  = "";
        		var sArgument     = "";
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회
        		
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        /* 창닫기 버튼 이벤트 */
        this.fn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/

        /* 등록 및 수정시 사용되는 Validation Check */
        this.fn_validationCheck = function(){
            
        	if (this.ed_title.value == '') {
        		alert('제목을 입력하세요.');
        		return;
        	}
        	
        	if (this.ed_time.value == '') {
        		alert('시간을 입력하세요.');
        		return;
        	}
        	
        	if (this.ed_content.value == '') {
        		alert('내용을 입력하세요');
        		return;
        	}
        	
            return true;
        }

        //callback메소드
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID == "insertEdu") {
        			if (ErrorCode == 0) {
        				this.gfn_getMessage("alert", "result.message.save.success");
        				this.close();
        			}
        		} else if (svcID == "searchEdu") {
        			this.ed_file.set_value(this.ds_edu.getColumn(0, "FILEPATH"));
        			
        			trace("search success!!");
        		}
        	}
        }

        this.div_pop_FileUpload_onfindclick = function(obj,e)
        {
        	if (this.gfn_isNull(this.txt_content.value) == false) {
        		if (application.confirm("내용을 삭제하고 팝업 이미지를 업로드 하겠습니다. ")  == false) {
        			this.ds_file.clearData();
        			this.txt_content.set_value(null);
        			return;
        		} else {
        //			this.txt_content.set_value(null);
        			return true;
        		}	
        	} else {
        		this.txt_content.set_value(null);
        		return true;
        	}
        }

        this.popup_FileUpload_onitemchanged = function(obj,e)
        {
        	this.gfn_callUpload(obj);
        }

        this.popup_FileUpload_onsuccess = function(obj,e)
        {
        	if (e.datasets == null) {
        		trace("업로드 실패");
        	} else {
        		this.ds_file.copyData(e.datasets[0]);
        		
        		if (this.ds_edu.rowcount < 0) {
        			this.ds_edu.addRow();
        		}
        		
        		this.ds_edu.setColumn(0, "FILENAME", this.ds_file.getColumn(0, "FILENAME"));
        		this.ds_edu.setColumn(0, "FILEPATH", this.ds_file.getColumn(0, "ORGFNAME"));
        		this.ds_edu.setColumn(0, "FILESIZE", this.ds_file.getColumn(0, "FILESIZE"));
        		this.ds_edu.setColumn(0, "FSYSNAME", this.ds_file.getColumn(0, "SYSTEMFILENAME"));
        		
        		this.ed_file.set_value(this.ds_file.getColumn(0, "ORGFNAME"));
        	}
        }

        this.popup_FileUpload_onerror = function(obj,e)
        {
        	trace("FileUpload_onerror !!");
        	trace("e.errorcode : " + e.errorcode);
        	trace("e.errormsg : " + e.errormsg);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_file.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_close.addEventHandler("onclick", this.fn_close_onclick, this);
            this.Static07.addEventHandler("onclick", this.Static07_onclick, this);
            this.btn_save.addEventHandler("onclick", this.fn_save_onclick, this);
            this.ed_title.addEventHandler("oneditclick", this.edt_simpTpc_oneditclick, this);
            this.use_yn.addEventHandler("onitemclick", this.Radio00_onitemclick, this);
            this.FileUpload.addEventHandler("onsuccess", this.popup_FileUpload_onsuccess, this);
            this.FileUpload.addEventHandler("onerror", this.popup_FileUpload_onerror, this);
            this.FileUpload.addEventHandler("onfindclick", this.div_pop_FileUpload_onfindclick, this);
            this.FileUpload.addEventHandler("onitemchanged", this.popup_FileUpload_onitemchanged, this);

        };

        this.loadIncludeScript("OMG_DS_SC_8111.xfdl", true);

       
    };
}
)();
