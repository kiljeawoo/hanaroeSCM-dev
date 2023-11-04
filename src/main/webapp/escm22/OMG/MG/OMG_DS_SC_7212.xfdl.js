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
                this.set_name("OMG_DS_SC_7112");
                this.set_titletext("MMS발송");
                this._setFormPosition(0,0,803,788);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_mms", this);
            obj._setContents("<ColumnInfo><Column id=\"RECEIVER\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MMS_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_uploadresult", this);
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
            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "79", "549", "708", "180", null, null, this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "79", "70", "708", "262", null, null, this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "79", "331", "708", "219", null, null, this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new ListBox("list_receiver", "absolute", "87", "167", "503", "157", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_innerdataset("@ds_mms");
            obj.set_datacolumn("RECEIVER");
            obj.set_scrollbars("autovert");
            obj.style.set_itemheight("23");
            obj.style.set_font("12 Gulim");

            obj = new Button("btn_remove", "absolute", "596", "167", "70", "26", null, null, this);
            obj.set_taborder("8");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_removeAll", "absolute", "596", "198", "70", "26", null, null, this);
            obj.set_taborder("9");
            obj.set_text("모두삭제");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "0", "331", "80", "219", null, null, this);
            obj.set_taborder("3");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "70", "80", "262", null, null, this);
            obj.set_taborder("10");
            obj.set_text("수신번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add", "absolute", "672", "138", "70", "20", null, null, this);
            obj.set_taborder("5");
            obj.set_text("업로드");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_subject", "absolute", "87", "105", "503", "26", null, null, this);
            obj.set_taborder("6");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("64");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_preview", "absolute", "88", "558", "504", "151", null, null, this);
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
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "0", "549", "80", "180", null, null, this);
            obj.set_taborder("17");
            obj.set_text("미리보기");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "596", "289", "170", "34", null, null, this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "610", "274", "66", "56", null, null, this);
            obj.set_taborder("18");
            obj.set_text("수신대상 :");
            this.addChild(obj.name, obj);

            obj = new Static("sta_recv", "absolute", "665", "274", "30", "56", null, null, this);
            obj.set_taborder("19");
            obj.style.set_align("right middle");
            obj.style.set_font("bold 9 Gulim");
            obj.set_text("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "609", "315", "146", "1", null, null, this);
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
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data00", "absolute", "87", "138", "503", "21", null, null, this);
            obj.set_taborder("28");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload00", "absolute", "594", "138", "72", "24", null, null, this);
            obj.set_taborder("29");
            obj.set_multiselect("true");
            obj.getSetter("timeout").set("0");
            obj.getSetter("retry").set("0");
            obj.getSetter("async").set("true");
            obj.getSetter("onload").set("FileUpload00_onload");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_content", "absolute", "86", "337", "506", "172", null, null, this);
            obj.set_taborder("30");
            obj.set_scrollbars("autovert");
            obj.set_wordwrap("char");
            obj.set_readonly("false");
            obj.set_enable("true");
            obj.style.set_padding("8 8 8 8");
            obj.style.set_background("#eeeeeeff");
            obj.style.set_border("0 solid #bfbfbfff");
            obj.style.set_color("#333333ff");
            obj.style.set_bordertype("round 5 5");
            obj.style.set_font("bold 9 Gulim");
            obj.style.setStyleValue("background", "readonly", "#ffffffff");
            obj.style.setStyleValue("border", "readonly", "1 solid #bfbfbfff");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("4000");
            this.addChild(obj.name, obj);

            obj = new Static("sta_byte_max", "absolute", "530", "513", "58", "15", null, null, this);
            obj.set_taborder("31");
            obj.set_text("/0  byte");
            this.addChild(obj.name, obj);

            obj = new Static("sta_byte", "absolute", "485", "513", "41", "15", null, null, this);
            obj.set_taborder("32");
            obj.set_text("0");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear00", "absolute", "682", "10", "50", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_reserved", "absolute", "87", "77", "85", "21", null, null, this);
            obj.set_taborder("35");
            obj.set_text("예약발송");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("dt_rsvDtm", "absolute", "170", "77", "127", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("34");
            obj.set_dateformat("yyyy-MM-dd HH:mm");
            obj.set_editformat("yyyy-MM-dd HH:mm");
            obj.set_enable("false");

            obj = new Static("Static10", "absolute", "0", "44", "80", "27", null, null, this);
            obj.set_taborder("36");
            obj.set_text("콜백번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "79", "44", "708", "27", null, null, this);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data01", "absolute", "87", "47", "138", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_value("15221211");
            obj.set_maxlength("15");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "240", "47", "384", "21", null, null, this);
            obj.set_taborder("39");
            obj.set_text("※ 기본 eSCM 고객센터(1522-1211), 숫자만 입력");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_bl_yn", "absolute", "597", "106", "169", "21", null, null, this);
            obj.set_taborder("40");
            obj.set_text("상품본부과금여부");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 788, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("MMS발송");

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
            obj = new BindItem("item8","edt_data00","value","ds_uploadresult","ORGFNAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","dt_rsvDtm","value","ds_block","BLOCK_ST_DTM");
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
        this.addIncludeScript("OMG_DS_SC_7212.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_7212.xfdl", function(exports) {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/

        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        var MAX_LENGTH = 4000; // MMS최대길이
        	
        this.form_onload = function(obj,e)
        {   
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function() // 페이지 로딩 후 실행 부분
        {
        	//var today = new Date();
        	//var d1 = this.gfn_today("yyyyMMdd") + String(today.getHours()).padLeft(2, "0") + String(today.getMinutes()).padLeft(2, "0");
        	//this.dt_rsvDtm.set_value(d1);
        	
        	// 수신자 수, 문자메시지 길이 수 제한 표시
        	this.sta_byte_max.set_text("/" + MAX_LENGTH + " byte");
        	this.txt_content.set_maxlength(MAX_LENGTH);
        	
        	this.edt_subject.setFocus();
        	
        	var fileParam = {
        		form:this,		
        		param:[{//필요없는 프로퍼티는 주석처리
        				fileObj: this.div_search.FileUpload00,
        				maxSize:10,											//허용할 파일 사이즈(MB)
        				maxLength:1,										//허용할 파일갯수
        				ext:['xls','xlsx'],									//허용할 확장자명
        				cancel_after:function(obj){							//파일선택후, 취소버튼 눌렀을때 실행할 함수명 또는 함수
        					this.form.div_search.txa_excel00.set_value(""); //this대신 this.form으로 접근		
        				},
        				valid_after_fail: 'FileUpload00_onerror',  			//파일검사 실패후 호출할 함수명 또는 함수
        				upload_after_succ: 'FileUpload00_onsuccess',    	//파일 업로드 성공후 호출할 함수명 또는 함수
        				upload_after_fail: 'FileUpload00_onerror'  	    	//파일 업로드 실패후 호출할 함수명 또는 함수
        			}]
        	};
        	this.gfn_addEventFileUpload(fileParam);
        }

        //UPLOAD
        this.FileUpload00_onitemchanged = function(obj,e)
        {
        	this.gfn_callUpload(obj);
        }

        this.FileUpload00_onsuccess = function(obj,e)
        {

        	if( e.datasets == null )
        	{
        		trace("업로드 실패");
        		//this.div_search.txa_excel00.set_value("업로드 실패");
        	} else {
        		trace("업로드 성공");
        		//this.div_search.txa_excel00.set_value("업로드 성공");
        		
        		this.ds_uploadresult.clear();
        		this.ds_uploadresult.copyData(e.datasets[0]);		
        	}	
        }

        this.FileUpload00_onerror = function(obj,e)
        {
        	trace("FileUpload00_onerror");
        	trace("e.errorcode: "+e.errorcode);
        	trace("e.errormsg: "+e.errormsg);
        }

        this.fn_validationCheck = function()
        {
        	if (this.ds_mms.getRowCount() == 0) {
        		this.alert('수신자를 등록바랍니다');
        		this.edt_subject.setFocus();
        		return false;
        	}
        	
        	if (this.gfn_isNull(this.txt_content.value)) {
        		this.alert('내용을 입력바랍니다');
        		this.txt_content.setFocus();
        		return false;
        	} else {
        		var len = this.gfn_lengthByte(this.txt_content.value);
        		if (len > MAX_LENGTH) { 
        			var errMsg = "내용을 " + MAX_LENGTH + " byte 이내로 입력바랍니다.";
        			this.alert(errMsg);
        			this.txt_content.setFocus();
        			return false;
        		}
        	}
        	
        	if (this.gfn_isNull(this.edt_subject.value)) {
        		this.alert('제목을 입력바랍니다');
        		this.edt_subject.setFocus();
        		return false;
        	}
        	
        	var mmsType = "발송";
        	var mmsTime = "";
        	if (this.chk_reserved.isChecked()) {
        		var today = new Date();
        		today.setMinutes(today.getMinutes()+5); // 예약발송시각이 현재시각보다  5분이상 차이나도록
        		var todayStr = this.gfn_today("yyyyMMdd") + String(today.getHours()).padLeft(2, "0") + String(today.getMinutes()).padLeft(2, "0") + "00000";
        		if (todayStr > this.dt_rsvDtm.value) {
        			this.alert('예약발송시각이 올바르지 않습니다.\n현재시간보다 5분이상 입력바랍니다.');
        			return false;
        		}
        		mmsType = "예약발송";
        		mmsTime = "\n발송시각 : "+this.gfn_left(this.dt_rsvDtm.value,14);
        	}
        	var mmsMsg = "MMS "+ this.ds_mms.getRowCount() + "건을 아래와 같이 " + mmsType + "합니다.";
        	mmsMsg += mmsTime;
        	mmsMsg += "\n\n\"" + this.txt_content.value + "\"";
        	
        	return application.confirm(mmsMsg);
        }

        this.fn_save_onclick = function(obj,e)
        {
        	if (this.fn_validationCheck()) {
        		var sVal =  "content="+nexacro.wrapQuote(this.gfn_nullToEmpty(this.txt_content.value))
        			+ " subject="  + nexacro.wrapQuote(this.gfn_nullToEmpty(this.edt_subject.value))
        			+ " reserved=" + this.chk_reserved.value
        			+ " callback=" + this.gfn_nullToEmpty(this.edt_data01.value)
        			+ " bl_yn="    + this.chk_bl_yn.value
        			+ " userId=MMS";
        		if (this.chk_reserved.isChecked()) {
        			sVal += " rsvdtm="+this.gfn_left(this.dt_rsvDtm.value,14);
        		}
        	
        		var sSvcID        = "sendMMS";
        		var sURL          = "svc::rest/mg/usrinf/saveSendMMSFile";
        		var sInDatasets   = "ds_mms=ds_mms";
        		var sOutDatasets  = "";
        		var sArgument     = sVal;
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회
        		
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {

        	if (ErrorCode < 0) {
        		if (ErrorCode == -1) {
        			//this.gfn_getMessage("alert", ErrorMsg);
        			this.alert(ErrorMsg);
        		} else {
        			this.alert(ErrorMsg);
        		}
        		return;
        	} else {
        		if(svcID == "sendMMS"){
        			this.ds_mms.clearData();
        			this.txt_content.set_value("");
        			this.txt_preview.set_value(null);
        			this.check_irregular_list();
        			//this.txt_content_onkeyup();
        			//this.alert(ErrorMsg + "건이 발송되었습니다.");
        			this.alert("발송되었습니다.");
        			this.reload();
        		}
        		
        		if(svcID=="p_upload"){
        			if(this.ds_mms.rowcount > 0){
        				if (ErrorCode == 1) {
        					this.alert(ErrorMsg);
        				}
        			}
        		
        			this.btn_save.set_enable(true);
        			this.check_irregular_list();
        			
        			alert('상품본부 과금 문자발송시 반드시 상품본부과금여부 체크바랍니다.');
        			
        		}
        	}
        }

        this.check_irregular_list = function()
        {
        	var regular = 0, irregular = 0;
        	if (this.ds_mms.getRowCount() > 0) {	
        		for (var i=0; i<this.ds_mms.rowcount; i++) {
        			var tel = this.ds_mms.getColumn(i, "MMS_NO");
        			var regex = new RegExp(/^01([0|1|6|7|8|9])(\d{7,8}$)/g);
        			if (regex.test(tel)) {
        				regular++;
        			} else {
        				//irregular++;
        			}
        		}
        	}
        	
        	if(regular > 0){
        		this.FileUpload00.set_enable(false);
        	}else{
        		this.FileUpload00.set_enable(true);
        	}
        	this.sta_recv.set_text(regular);
        	//if (regular + irregular >= MAX_SEND) { this.sta_recv.style.set_color("red"); }
        	//else { this.sta_recv.style.set_color("#333333ff"); }
        }

        // 전화번호 추가(버튼)
        this.btn_add_onclick = function(obj,e)
        {
        	if (this.gfn_isEmpty(this.edt_data00.value) == "") {
        		this.alert("파일을 선택해 주세요");
        		return false;
        	}
        	
        	var fileName	  = "dsName=ds_mms"
        					  +" systemFileName="+this.ds_uploadresult.getColumn(0,"SYSTEMFILENAME");
        	var sSvcID        = "p_upload";//통신아이디
        	
        	var sURL          = "svc::rest/mg/usrinf/uploadSendMMSFile";// 호출할 서버 페이지 주소
        	var sInDatasets   = "in_ds=ds_mms:A";//보내는데이터셋
        	var sOutDatasets  = "ds_mms=ds_mms";
        	var sArgument     = fileName;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var tranType 	  = "U"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);	
        }

        // 전화번호 삭제(선택)
        this.btn_remove_onclick = function(obj,e)
        {
        	var idx = this.list_receiver.getSelectedItems()[0];
        	if (idx >= 0 && this.ds_mms.getRowCount() > idx) {
        		this.ds_mms.deleteRow(idx);
        		this.check_irregular_list();
        	} else {
        		this.alert("선택된 대상이 없거나 목록이 비어있습니다.");
        	}
        }

        // 전화번호 삭제(전부)
        this.btn_removeAll_onclick = function(obj,e)
        {
        	this.ds_mms.clearData();
        	this.check_irregular_list();
        }

        this.txt_content_onkeyup = function(obj,e)
        {
        	var len = this.gfn_lengthByte(this.txt_content.value);
        	if (len < 0) { len = 0; }
        	if (len > MAX_LENGTH) { this.sta_byte.style.set_color("red"); }
        	else { this.sta_byte.style.set_color("#333333ff"); }
        	this.sta_byte.set_text(len);
        	
        	if(!this.gfn_isNull(this.txt_content.value)){
        		this.txt_preview.set_value(this.txt_content.value);
        	} else {
        		this.txt_preview.set_value("");
        	}
        }

        this.txt_content_onkillfocus = function(obj,e)
        {
        	this.txt_content.set_value(this.gfn_trim(this.txt_content.value));
        	this.txt_content_onkeyup(obj);	
        }

        this.btn_clear00_onclick = function(obj,e)
        {
        	this.reload();
        }

        this.chk_reserved_onchanged = function(obj,e)
        {
        	this.dt_rsvDtm.set_enable(obj.isChecked());
        	if (obj.isChecked()) {
        		var today = new Date();
        		today.setMinutes(today.getMinutes()+5);
        		var d1 = this.gfn_today("yyyyMMdd") + String(today.getHours()).padLeft(2, "0") + String(today.getMinutes()).padLeft(2, "0");
        		this.dt_rsvDtm.set_value(d1);
        	}
        }
        this.chk_bl_yn_onchanged = function(obj,e)
        {
        	alert('상품본부 과금 문자발송시 반드시 상품본부과금여부 체크바랍니다.');
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_remove.addEventHandler("onclick", this.btn_remove_onclick, this);
            this.btn_removeAll.addEventHandler("onclick", this.btn_removeAll_onclick, this);
            this.btn_add.addEventHandler("onclick", this.btn_add_onclick, this);
            this.btn_save.addEventHandler("onclick", this.fn_save_onclick, this);
            this.FileUpload00.addEventHandler("onsuccess", this.FileUpload00_onsuccess, this);
            this.FileUpload00.addEventHandler("onitemchanged", this.FileUpload00_onitemchanged, this);
            this.FileUpload00.addEventHandler("onerror", this.FileUpload00_onerror, this);
            this.txt_content.addEventHandler("onkeyup", this.txt_content_onkeyup, this);
            this.txt_content.addEventHandler("onkillfocus", this.txt_content_onkillfocus, this);
            this.btn_clear00.addEventHandler("onclick", this.btn_clear00_onclick, this);
            this.chk_reserved.addEventHandler("onchanged", this.chk_reserved_onchanged, this);

        };

        this.loadIncludeScript("OMG_DS_SC_7212.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
