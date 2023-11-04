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
                this.set_titletext("사용자 등록/수정");
                this._setFormPosition(0,0,764,526);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_user", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"64\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"64\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"64\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"128\"/><Column id=\"POS\" type=\"STRING\" size=\"128\"/><Column id=\"GRADE\" type=\"STRING\" size=\"128\"/><Column id=\"JOB\" type=\"STRING\" size=\"512\"/><Column id=\"PHONE\" type=\"STRING\" size=\"128\"/><Column id=\"MOBILE\" type=\"STRING\" size=\"128\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"128\"/><Column id=\"USER_SORT\" type=\"STRING\" size=\"32\"/><Column id=\"PIC_FL_NM\" type=\"STRING\" size=\"100\"/><Column id=\"PIC_FL_TMP_NM\" type=\"STRING\" size=\"50\"/><Column id=\"PICTURE\" type=\"BLOB\" size=\"256\"/><Column id=\"AUTH_TYPE_CD\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_picture", this);
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

            obj = new Dataset("ds_userchk", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"64\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_save", "absolute", null, "15", "41", "21", "56", null, this);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close2", "absolute", null, "15", "41", "21", "13", null, this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "17", "15", "135", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_text("사용자 등록/수정");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 1 14");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "17", "231", "134", "29", null, null, this);
            obj.set_taborder("3");
            obj.set_text("사용자 아이디");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "17", "259", "134", "29", null, null, this);
            obj.set_taborder("4");
            obj.set_text("부 서 명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "150", "231", null, "29", "17", null, this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "150", "259", null, "29", "17", null, this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "673", "0", "91", "15", null, null, this);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "46", "17", "67", null, null, this);
            obj.set_taborder("8");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_user_id", "absolute", "154", "235", "206", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_cssclass("edt_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "150", "287", null, "29", "17", null, this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_username", "absolute", "154", "291", "206", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_cssclass("edt_WF_Essential");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_deptname", "absolute", "154", "263", "206", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "17", "287", "134", "29", null, null, this);
            obj.set_taborder("21");
            obj.set_text("사용자 이름");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "17", "343", "134", "29", null, null, this);
            obj.set_taborder("22");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "150", "343", null, "29", "17", null, this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_grade", "absolute", "154", "347", "206", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_readonly("false");
            obj.set_cssclass("edt_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Button("btn_usernamechk", "absolute", "363", "235", "54", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_text("중복확인");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "150", "315", null, "29", "17", null, this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_pos", "absolute", "154", "319", "206", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_readonly("false");
            obj.set_cssclass("edt_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "17", "315", "134", "29", null, null, this);
            obj.set_taborder("26");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "17", "371", "135", "106", null, null, this);
            obj.set_taborder("27");
            obj.set_text("담당업무");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "150", "371", null, "106", "17", null, this);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_job", "absolute", "154", "375", null, "98", "21", null, this);
            obj.set_taborder("16");
            obj.style.set_align("left top");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "17", "476", "134", "29", null, null, this);
            obj.set_taborder("30");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "150", "476", null, "29", "17", null, this);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_phone", "absolute", "154", "480", "206", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_cssclass("edt_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "17", "504", "134", "29", null, null, this);
            obj.set_taborder("32");
            obj.set_text("휴대폰");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "150", "504", null, "29", "17", null, this);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_mobile", "absolute", "154", "508", "206", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            obj.set_value("010");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "17", "532", "134", "29", null, null, this);
            obj.set_taborder("34");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "150", "532", null, "29", "17", null, this);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_email", "absolute", "154", "536", "206", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            obj.set_value("@");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "17", "560", "134", "29", null, null, this);
            obj.set_taborder("36");
            obj.set_text("정렬순서");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "150", "560", null, "29", "17", null, this);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_sort", "absolute", "154", "564", "206", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_cssclass("edt_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "17", "46", "134", "158", null, null, this);
            obj.set_taborder("38");
            obj.set_text("사진");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "150", "46", null, "158", "17", null, this);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "150", "203", null, "29", "17", null, this);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "17", "203", "134", "29", null, null, this);
            obj.set_taborder("41");
            obj.set_text("사진 등록");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("image00", "absolute", "154", "52", "140", "146", null, null, this);
            obj.set_taborder("42");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload_picture", "absolute", "360", "207", "57", "21", null, null, this);
            obj.set_taborder("43");
            obj.getSetter("retry").set("0");
            obj.set_scrollbars("autoboth");
            obj.style.set_buttonsize("54");
            obj.style.set_buttontext("사진등록");
            obj.style.set_align("center middle");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_picturename", "absolute", "154", "207", "206", "21", null, null, this);
            obj.set_taborder("44");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "150", "588", null, "29", "17", null, this);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "17", "588", "134", "29", null, null, this);
            obj.set_taborder("46");
            obj.set_text("사용자 권한");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Radio("radio_auth", "absolute", "155", "591", "365", "23", null, null, this);
            this.addChild(obj.name, obj);
            var radio_auth_innerdataset = new Dataset("radio_auth_innerdataset", this.radio_auth);
            radio_auth_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">일반사용자</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">팀관리자</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">부관리자</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">본부관리자</Col></Row></Rows>");
            obj.set_innerdataset(radio_auth_innerdataset);
            obj.set_taborder("47");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_cssclass("rdo_WF_Essentia");
            obj.set_index("0");

            obj = new Static("Static29", "absolute", "300", "178", "140", "21", null, null, this);
            obj.set_taborder("48");
            obj.set_text("(※200KB 이하만 가능)");
            this.addChild(obj.name, obj);

            obj = new Button("btn_comname", "absolute", "363", "263", "21", "21", null, null, this);
            obj.set_taborder("49");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "364", "566", "139", "21", null, null, this);
            obj.set_taborder("50");
            obj.set_text("(※숫자만 입력 가능)");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reset", "absolute", null, "235", "100", "21", "21", null, this);
            obj.set_taborder("51");
            obj.set_text("비밀번호 초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 764, 526, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("사용자 등록/수정");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","image00","image","ds_user","PICTURE");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_6712.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_6712.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        var btn_save_enable = false;
        var dept_id = "";
        var save_exec = false;
        var paraMode = "";
        var picsuc = false;
        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        	paraMode = this.getOwnerFrame().paramMode;
        	if (paraMode == "I") {
        		this.edit_deptname.set_value(this.getOwnerFrame().deptname);
        		dept_id = this.getOwnerFrame().deptid;
        	} else if (paraMode == "U") {
        		this.ds_user.clearData();
        		this.ds_user.insertRow(0);
        		this.ds_user.copyRow(0, this.parent.dsArg, 0);
        		
        		this.btn_usernamechk.set_visible("false");
        		this.edit_user_id.set_readonly("true");
        		this.edit_user_id.set_cssclass("edt_WF_Readonly");
        		btn_save_enable = true;
        		
        		this.edit_user_id.set_value(this.ds_user.getColumn(0,"USER_ID"));
        		dept_id = this.ds_user.getColumn(0,"DEPT_ID");
        		this.edit_username.set_value(this.ds_user.getColumn(0,"USER_NAME"));
        		this.edit_deptname.set_value(this.ds_user.getColumn(0,"DEPT_NAME"));
        		this.edit_pos.set_value(this.ds_user.getColumn(0,"POS"));
        		this.edit_grade.set_value(this.ds_user.getColumn(0,"GRADE"));
        		this.edit_job.set_value(this.ds_user.getColumn(0,"JOB"));
        		this.edit_phone.set_value(this.ds_user.getColumn(0,"PHONE"));
        		//this.edit_mobile.set_value(this.ds_user.getColumn(0,"MOBILE"));
        		//this.edit_email.set_value(this.ds_user.getColumn(0,"EMAIL"));
        		this.edit_sort.set_value(this.ds_user.getColumn(0,"USER_SORT"));
        		this.radio_auth.set_value(this.ds_user.getColumn(0, "AUTH_TYPE_CD"));
        		this.call_pic();
        	}
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        /*콜백 함수*/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        	if (ErrorCode < 0 && svcID != "retrievePicture") {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID == "checkUserAmnid") {
        			if (this.ds_userchk.rowcount == 0) {
        				this.alert("사용 가능합니다.");
        				btn_save_enable = true;
        			} else {
        				this.alert("이미 사용중입니다.");
        			}
        		} else if (svcID == "insertUserAmn") {
        			this.gfn_getMessage("alert", "result.message.save.success");
        			btn_save_enable = false;
        			save_exec = true;
        			this.call_pic();
        		} else if (svcID == "updateUserAmn") {
        			this.gfn_getMessage("alert", "result.message.save.success");
        			save_exec = true;
        			this.call_pic();
        		} else if (svcID == "retrievePicture") {
        			this.edit_picturename.set_value(this.ds_user.getColumn(0,"PIC_FL_NM"));
        		} else if (svcID == "resetPwd") {
        			this.alert("초기화 되었습니다");
        		}
        	}	
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        /*추가등록 시 사용되는 Validation Check */
        this.fn_validationCheck = function()
        {
        	if (this.gfn_isNull(this.edit_user_id.value)) {
        		this.alert("사용자 아이디를 입력해주세요");
        		this.edit_user_id.setFocus();
        		return false;
        	}
        	
        	if (this.gfn_isNull(this.edit_username.value)) {
        		this.alert("사용자 이름을 입력해주세요");
        		this.edit_username.setFocus();
        		return false;
        	}
        	
        	if (this.gfn_isNull(this.edit_pos.value)) {
        		this.alert("직급을 입력해주세요");
        		this.edit_pos.setFocus();
        		return false;
        	}
        	
        	if (this.gfn_isNull(this.edit_grade.value)) {
        		this.alert("직위를 입력해주세요");
        		this.edit_grade.setFocus();
        		return false;
        	}
        	
        	if (this.gfn_isNull(this.edit_phone.value)) {
        		this.alert("전화번호를 입력해주세요");
        		this.edit_phone.setFocus();
        		return false;
        	}
        	
        	if (this.gfn_isNull(this.edit_mobile.value)) {
        		this.alert("핸드폰 번호를 입력해주세요");
        		this.edit_mobile.setFocus();
        		return false;
        	}
        	
        	if (this.gfn_isNull(this.edit_email.value)) {
        		this.alert("이메일을 입력해주세요");
        		this.edit_email.setFocus();
        		return false;
        	}
        	
        	if (this.gfn_isNull(this.edit_sort.value)) {
        		this.alert("정렬순서를 입력해주세요");
        		this.edit_sort.setFocus();
        		return false;
        	}
        	
        	return true;
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
        /* 그림 조회*/
        this.call_pic = function()
        {
        	var sParams = "user_id="+this.gfn_nullToEmpty(this.edit_user_id.value);
        	var sSvcID        = "retrievePicture";
        	var sURL          = "svc::rest/mg/retrievePicture";	
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_user=ds_user";	
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회  
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        /*닫기*/
        this.btn_close_onclick = function(obj,e)
        {
        	if (save_exec) {
        		this.close(dept_id);
        	} else {
        		this.close();
        	}
        }

        /*저장*/
        this.btn_save_onclick = function(obj,e)
        {
        	if (btn_save_enable) {
        		if (this.fn_validationCheck()) {
        			this.ds_user.insertRow();
        			this.ds_user.setColumn(0,"USER_ID",this.edit_user_id.value);
        			this.ds_user.setColumn(0,"DEPT_ID",dept_id);
        			this.ds_user.setColumn(0,"USER_NAME",this.edit_username.value);
        			this.ds_user.setColumn(0,"DEPT_NAME",this.edit_deptname.value);
        			this.ds_user.setColumn(0,"POS",this.edit_pos.value);
        			this.ds_user.setColumn(0,"GRADE",this.edit_grade.value);
        			this.ds_user.setColumn(0,"JOB",this.edit_job.value);
        			this.ds_user.setColumn(0,"PHONE",this.edit_phone.value);
        			this.ds_user.setColumn(0,"MOBILE",this.edit_mobile.value);
        			this.ds_user.setColumn(0,"EMAIL",this.edit_email.value);
        			this.ds_user.setColumn(0,"USER_SORT",this.edit_sort.value);
        			this.ds_user.setColumn(0,"AUTH_TYPE_CD",this.radio_auth.value);
        			if (picsuc) {
        				this.ds_user.setColumn(0,"PIC_FL_NM",this.ds_picture.getColumn(0,"ORGFNAME"));
        				this.ds_user.setColumn(0,"PIC_FL_TMP_NM",this.ds_picture.getColumn(0,"SYSTEMFILENAME"));
        			}					
        			// alert("현재 파라모드 값 : " + paraMode);
        			if (paraMode == "I") {
        				var sParams = "";
        				var sSvcID        = "insertUserAmn";
        				var sURL          = "svc::rest/mg/insertUserAmn";	
        				var sInDatasets   = "ds_user=ds_user";
        				var sOutDatasets  = "";	
        				var sArgument     = sParams;
        				var sCallbackFunc = "fn_callBack";
        				var sTranType     = "U"; // U:저장/삭제, S:조회			
        				
        				this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        				btn_save_enable = false;
        			} else if (paraMode == "U") {
        				var sParams = "";
        				var sSvcID        = "updateUserAmn";
        				var sURL          = "svc::rest/mg/updateUserAmn";	
        				var sInDatasets   = "ds_user=ds_user";
        				var sOutDatasets  = "";	
        				var sArgument     = sParams;
        				var sCallbackFunc = "fn_callBack";
        				var sTranType     = "U"; // U:저장/삭제, S:조회			
        				
        				this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        			}
        		}
         	}
         	else {
         		this.alert("중복확인을 해주세요.");
         	}
        }

        this.edit_user_id_ontextchange = function(obj,e)
        {
        	btn_save_enable = false;
        }

        /*사용자 아이디 중복체크*/
        this.btn_usernamechk_onclick = function(obj,e)
        {
        	if (this.gfn_isNull(this.edit_user_id.value)) {
        		this.alert("사용자 아이디를 입력해주세요");
        		this.edit_user_id.setFocus();
        		return false;
        	}
        	
        	var sParams = "user_id="+this.gfn_nullToEmpty(this.edit_user_id.value);
        	var sSvcID        = "checkUserAmnid";
        	var sURL          = "svc::rest/mg/checkUserAmnid";	
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_userchk=ds_userchk";	
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회  
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.FileUpload_picture_onerror = function(obj,e)
        {
        	trace("FileUpload00_onerror");
        	trace("e.errorcode: "+e.errorcode);
        	trace("e.errormsg: "+e.errormsg);
        }

        this.FileUpload_picture_onsuccess = function(obj,e)
        {
        	if (e.datasets != null) {
        		this.ds_picture.clear();
        		this.ds_picture.copyData(e.datasets[0]);
        		if (this.ds_picture.getColumn(0,'FILESIZE') <= 204800) {
        			this.edit_picturename.set_value(this.ds_picture.getColumn(0,'ORGFNAME'));
        			picsuc=true;
        		} else {
        			alert("200KB 이하 사진을 사용해주세요.");
        		}
        	}
        }

        /*사진 첨부등록*/
        this.FileUpload_picture_onitemchanged = function(obj,e)
        {
        	this.gfn_callUpload(obj);
        //	this.image00.set_image("file://"+e.newvalue);
        }

        this.btn_comname_onclick = function(obj,e)
        {
        	var oArg = {dept_id:dept_id};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_compopupAfter";    
        	this.gfn_openPopup("deptSearchPopup","OMG.MG::OMG_DS_SC_6712_P01.xfdl",oArg,sOption,sPopupCallBack);
        }

        /*부서조회 팝업콜백 함수*/
        this.fn_compopupAfter = function(strId,strVal)
        {
        	if (strVal != '') {
        		var paramsArr = strVal.split(",");
        	
        		if (strId == "deptSearchPopup") {
        			dept_id = paramsArr[0];
        			this.edit_deptname.set_value(paramsArr[1]);
        		}
        	}
        }

        /*
         * 비밀번호 초기화
         * 주의) 초기화 기능은 운영서버 기능이니 개발서버에서 누르지 않도록 주의
         */
        this.btn_reset_onclick = function(obj,e)
        {
        	var usrId = this.ds_user.getColumn(0,"USER_ID");
        	if (this.gfn_isNull(usrId)) {
        		alert("사용자ID를 확인할 수 없습니다.");
        		return;
        	}
        	
        	if (this.confirm("["+usrId+"] 사용자의 비밀번호를 초기화 하시겠습니까?\n초기화 후 비밀번호는 '1234'로 변경됩니다.")) {
        		var sSvcID        = "resetPwd";
        		var sURL          = "svc::rest/mg/resetHanaroTalkPwd";	
        		var sInDatasets   = "";
        		var sOutDatasets  = "";	
        		var sArgument     = "USERID=" + usrId;
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회  
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_picture.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.btn_close2.addEventHandler("onclick", this.btn_close_onclick, this);
            this.edit_user_id.addEventHandler("ontextchange", this.edit_user_id_ontextchange, this);
            this.edit_deptname.addEventHandler("ontextchanged", this.edit_deptname_ontextchanged, this);
            this.btn_usernamechk.addEventHandler("onclick", this.btn_usernamechk_onclick, this);
            this.FileUpload_picture.addEventHandler("onerror", this.FileUpload_picture_onerror, this);
            this.FileUpload_picture.addEventHandler("onsuccess", this.FileUpload_picture_onsuccess, this);
            this.FileUpload_picture.addEventHandler("onitemchanged", this.FileUpload_picture_onitemchanged, this);
            this.edit_picturename.addEventHandler("ontextchange", this.edit_user_id_ontextchange, this);
            this.btn_comname.addEventHandler("onclick", this.btn_comname_onclick, this);
            this.btn_reset.addEventHandler("onclick", this.btn_reset_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_6712.xfdl");

       
    };
}
)();
