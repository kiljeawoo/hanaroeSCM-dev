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
                this.set_name("OMG_DS_SC_6211");
                this.set_classname("popup01");
                this.set_titletext("농협인증서등록");
                this._setFormPosition(0,0,700,284);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_ctfc", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TEMNM\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_CHRRNM\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_CHRR_MPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_CHRRNM\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_CHRR_MPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SG_ATOA_FL_TMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"SG_ATOA_FLNM\" type=\"STRING\" size=\"256\"/><Column id=\"SG_PSN_KY_FL_TMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"SG_PSN_KY_FLNM\" type=\"STRING\" size=\"256\"/><Column id=\"PWIZE_ATOA_FL_TMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"PWIZE_ATOA_FLNM\" type=\"STRING\" size=\"256\"/><Column id=\"PWIZE_PSN_KY_FL_TMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"PWIZE_PSN_KY_FLNM\" type=\"STRING\" size=\"256\"/><Column id=\"ATOA_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ATOA_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"VLD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"256\"/><Column id=\"ATOA_PW\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NA_BZPLNM\">별이빛나는밤에</Col><Col id=\"MAIN_CHRRNM\">정담당</Col><Col id=\"SUB_CHRRNM\">부담당</Col><Col id=\"MAIN_CHRR_MPNO\"/><Col id=\"ATOA_PW\">1234</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_upload", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILESIZE\" type=\"STRING\" size=\"256\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static38", "absolute", "126", "100", null, "29", "17", null, this);
            obj.getSetter("taborder").set("18");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "126", "44", null, "29", "17", null, this);
            obj.getSetter("taborder").set("14");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("upper_level1", "absolute", "126", "72", null, "29", "17", null, this);
            obj.getSetter("taborder").set("15");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "15", "41", "21", "17", null, this);
            obj.set_taborder("10");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("text_title", "absolute", "17", "19", "231", "21", null, null, this);
            obj.getSetter("taborder").set("11");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_text("서비스 운영 회원 등록/수정");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "17", "44", "110", "29", null, null, this);
            obj.getSetter("taborder").set("12");
            obj.set_text("사업장코드");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "17", "72", "110", "57", null, null, this);
            obj.getSetter("taborder").set("13");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "674", null, "91", "15", null, "0", this);
            obj.getSetter("taborder").set("68");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "683", "-1", "17", "67", null, null, this);
            obj.getSetter("taborder").set("70");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "674", "0", "91", "15", null, null, this);
            obj.getSetter("taborder").set("71");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "99", "17", "67", null, null, this);
            obj.getSetter("taborder").set("72");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "674", "36", "91", "8", null, null, this);
            obj.getSetter("taborder").set("73");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.getSetter("taborder").set("74");
            obj.set_text("메뉴관리");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "15", "43", "21", "59", null, this);
            obj.set_taborder("95");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "350", "72", "100", "29", null, null, this);
            obj.getSetter("taborder").set("133");
            obj.set_text("휴대폰");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "350", "44", "110", "29", null, null, this);
            obj.getSetter("taborder").set("134");
            obj.set_text("사업장명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "350", "100", "100", "29", null, null, this);
            obj.getSetter("taborder").set("135");
            obj.set_text("휴대폰");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_NA_BZPLNM", "absolute", "463", "48", "215", "21", null, null, this);
            obj.set_taborder("138");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("50");
            obj.set_value("별이빛나는밤에");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_NA_BZPLC", "absolute", "130", "48", "215", "21", null, null, this);
            obj.set_taborder("139");
            obj.set_inputtype("number,english");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("9");
            obj.set_imemode("alpha");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_phone", "absolute", "463", "76", "62", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_phone_innerdataset = new Dataset("cbo_phone_innerdataset", this.cbo_phone);
            cbo_phone_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">010</Col><Col id=\"datacolumn\">010</Col></Row><Row><Col id=\"codecolumn\">011</Col><Col id=\"datacolumn\">011</Col></Row></Rows>");
            obj.set_innerdataset(cbo_phone_innerdataset);
            obj.set_taborder("141");
            obj.set_value("010");
            obj.set_text("010");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");

            obj = new Static("Static02", "absolute", "83%", "76", null, "21", "15.86%", null, this);
            obj.getSetter("taborder").set("142");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "75.29%", "76", null, "21", "23.57%", null, this);
            obj.getSetter("taborder").set("143");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_phone2", "absolute", "536", "76", "44", "21", null, null, this);
            obj.set_taborder("144");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.style.set_align("right middle");
            obj.set_value("1234");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_phone3", "absolute", "591", "76", "44", "21", null, null, this);
            obj.set_taborder("145");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.style.set_align("right middle");
            obj.set_value("4567");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "126", "128", null, "29", "17", null, this);
            obj.getSetter("taborder").set("146");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "126", "156", null, "29", "17", null, this);
            obj.getSetter("taborder").set("147");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "17", "128", "110", "29", null, null, this);
            obj.getSetter("taborder").set("148");
            obj.set_text("서명인증키");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "17", "156", "110", "29", null, null, this);
            obj.getSetter("taborder").set("149");
            obj.set_text("서명개인키");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "126", "240", null, "29", "17", null, this);
            obj.getSetter("taborder").set("162");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "17", "240", "110", "29", null, null, this);
            obj.getSetter("taborder").set("163");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mbPw", "absolute", "130", "244", "215", "21", null, null, this);
            obj.set_taborder("164");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("60");
            obj.set_value("1234");
            obj.set_password("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "350", "240", "110", "29", null, null, this);
            obj.getSetter("taborder").set("165");
            obj.set_text("비밀번호 확인");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_subPhone", "absolute", "463", "104", "62", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_subPhone_innerdataset = new Dataset("cbo_subPhone_innerdataset", this.cbo_subPhone);
            cbo_subPhone_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">010</Col><Col id=\"datacolumn\">010</Col></Row><Row><Col id=\"codecolumn\">011</Col><Col id=\"datacolumn\">011</Col></Row></Rows>");
            obj.set_innerdataset(cbo_subPhone_innerdataset);
            obj.set_taborder("169");
            obj.set_value("010");
            obj.set_text("010");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");

            obj = new Static("Static12", "absolute", "581", "104", null, "21", "111", null, this);
            obj.getSetter("taborder").set("170");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "527", "104", null, "21", "165", null, this);
            obj.getSetter("taborder").set("171");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_subPhone2", "absolute", "536", "104", "44", "21", null, null, this);
            obj.set_taborder("172");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.style.set_align("right middle");
            obj.set_value("1234");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_subPhone3", "absolute", "591", "104", "44", "21", null, null, this);
            obj.set_taborder("173");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.style.set_align("right middle");
            obj.set_value("1234");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "84", "72", "43", "29", null, null, this);
            obj.getSetter("taborder").set("174");
            obj.set_text("정");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "84", "100", "43", "29", null, null, this);
            obj.getSetter("taborder").set("175");
            obj.set_text("부");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_MAIN_CHRRNM", "absolute", "204", "76", "141", "21", null, null, this);
            obj.set_taborder("176");
            obj.set_imemode("hangul,full");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("20");
            obj.set_value("정담당");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_SUB_CHRRNM", "absolute", "204", "104", "141", "21", null, null, this);
            obj.set_taborder("177");
            obj.set_imemode("hangul");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("20");
            obj.set_value("부담당");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mbPw2", "absolute", "464", "244", "215", "21", null, null, this);
            obj.set_taborder("178");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("60");
            obj.set_value("1234");
            obj.set_password("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "124", "72", "70", "29", null, null, this);
            obj.getSetter("taborder").set("179");
            obj.set_text("이름");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "124", "100", "70", "29", null, null, this);
            obj.getSetter("taborder").set("180");
            obj.set_text("이름");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "126", "184", null, "29", "17", null, this);
            obj.getSetter("taborder").set("181");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "126", "212", null, "29", "17", null, this);
            obj.getSetter("taborder").set("182");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "17", "184", "110", "29", null, null, this);
            obj.getSetter("taborder").set("183");
            obj.set_text("암호화인증서");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "17", "212", "110", "29", null, null, this);
            obj.getSetter("taborder").set("184");
            obj.set_text("암호화개인키");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload01", "absolute", null, "132", "551", "21", "21", null, this);
            obj.set_taborder("189");
            obj.set_multiselect("true");
            obj.getSetter("timeout").set("0");
            obj.getSetter("retry").set("0");
            obj.getSetter("async").set("true");
            obj.set_index("0");
            obj.getSetter("onload").set("FileUpload00_onload");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload02", "absolute", null, "160", "551", "21", "21", null, this);
            obj.set_taborder("191");
            obj.set_multiselect("true");
            obj.getSetter("timeout").set("0");
            obj.getSetter("retry").set("0");
            obj.getSetter("async").set("true");
            obj.set_index("0");
            obj.getSetter("onload").set("FileUpload00_onload");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload03", "absolute", null, "188", "551", "21", "21", null, this);
            obj.set_taborder("192");
            obj.set_multiselect("true");
            obj.getSetter("timeout").set("0");
            obj.getSetter("retry").set("0");
            obj.getSetter("async").set("true");
            obj.set_index("0");
            obj.getSetter("onload").set("FileUpload00_onload");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload04", "absolute", null, "216", "551", "21", "21", null, this);
            obj.set_taborder("193");
            obj.set_multiselect("true");
            obj.getSetter("timeout").set("0");
            obj.getSetter("retry").set("0");
            obj.getSetter("async").set("true");
            obj.set_index("0");
            obj.getSetter("onload").set("FileUpload00_onload");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 700, 284, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("농협인증서등록");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item2","edt_NA_BZPLNM","value","ds_ctfc","NA_BZPLNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_NA_BZPLC","value","ds_ctfc","NA_BZPLC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","cbo_phone","value","ds_rc","CHRW_MPSVNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","edt_phone2","value","ds_rc","CHRW_MPHNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","edt_phone3","value","ds_rc","CHRW_MPSQNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","edt_mbPw","value","ds_ctfc","ATOA_PW");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","cbo_subPhone","value","ds_rc","CHRW_MPSVNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","edt_subPhone2","value","ds_rc","CHRW_MPHNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","edt_subPhone3","value","ds_rc","CHRW_MPSQNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edt_MAIN_CHRRNM","value","ds_member","MAIN_CHRRNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edt_SUB_CHRRNM","value","ds_member","SUB_CHRRNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","edt_mbPw2","value","ds_ctfc","");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_3420.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_3420.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        this.user = "";
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
        	this.user = this.getOwnerFrame().user;
        	this.edt_NA_BZPLC.set_value(nexacro.round(nexacro.toNumber(Math.random() * 10000000000000)));
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_insertCtfc = function()
        {
        	var sSvcID        = "insertCtfc";
        	var sURL          = "svc::rest/tx/insertCtfc";
        	var sInDatasets   = "ds_ctfc=ds_ctfc ds_upload=ds_upload";
        	var sOutDatasets  = "";	
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
         	if(ErrorCode < 0) //에러
         	{
        		trace(">>>>>>>>>>>>>>> svcID ::" +  svcID + ",  ErrorCode :: " + ErrorCode + ",  ErrorMsg :: " + ErrorMsg);
         	}
         	else 
         	{
        		switch(svcID)
        		{
        			case "insertCtfc":
        				alert("저장되었습니다.");		
        				break;
        		}
         	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.common_onclick = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_save":
        				if(this.fn_check())
        				{
        					this.fn_insertCtfc();
        				}
        				break;
        			
        			case "btn_close":
        				this.close();
        				break;
        	}			
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_checkPw = function()
        {
        	if(this.edt_mbPw.value != this.edt_mbPw2.value)
        	{
        		alert("비밀번호가 일치하지 않습니다.");
        		return false;
        	}
        	return true;
        }

        //전화 번호 타입 변경
        this.fn_telNo = function(strTelNo,strVal1,strVal2,strVal3)
        {
        	if(this.gfn_isNull(strTelNo)) return ;
        	
            if(strTelNo.length > 8 ){
              var RegPhonNum = ""; 

               //문자열 길이에 따른 값 처리
              if(strTelNo.length == 9 ) {
                 RegPhonNum = /([0-9]{2})([0-9]{3})([0-9]+)/; 
              } else if(strTelNo.length == 10){
                 if(strTelNo.substring(0,2)=="02"){
                    RegPhonNum = /([0-9]{2})([0-9]{4})([0-9]+)/; 
                 }else{
                    RegPhonNum = /([0-9]{3})([0-9]{3})([0-9]+)/;
                 }
              } else if(strTelNo.length > 10){ 
                 RegPhonNum = /([0-9]{3})([0-9]{4})([0-9]+)/; 
              }
        	  strTelNo = strTelNo.replace(RegPhonNum, "$1-$2-$3"); 

              var naTrplCVal = strTelNo.split("-");

                  strVal1.set_value(naTrplCVal[0]);
                  strVal2.set_value(naTrplCVal[1]);
                  strVal3.set_value(naTrplCVal[2]);
           }
        }

        
        this.fn_check = function()
        {
        	//전화번호에 값 합쳐주기
        	this.ds_ctfc.setColumn(0, "MAIN_CHRR_MPNO", this.gfn_nullToEmpty(this.cbo_phone.value) + this.gfn_nullToEmpty(this.edt_phone2.value) + this.gfn_nullToEmpty(this.edt_phone3.value) );
        	this.ds_ctfc.setColumn(0, "SUB_CHRR_MPNO", this.gfn_nullToEmpty(this.cbo_subPhone.value) + this.gfn_nullToEmpty(this.edt_subPhone2.value) + this.gfn_nullToEmpty(this.edt_subPhone2.value));
        	this.ds_ctfc.setColumn(0, "FS_RGM", application.gv_userId);
        	this.ds_ctfc.setColumn(0, "LS_CHGM", application.gv_userId);
        	
        	if(!this.fn_checkPw()) return false;

        	if(this.gfn_isNull(this.ds_ctfc.getColumn(0, "SG_ATOA_FLNM")))
        	{
        		alert("서명인증서파일을 업로드 해주십시오.");
        		return false;
        	}
        	
        	if(this.gfn_isNull(this.ds_ctfc.getColumn(0, "SG_PSN_KY_FLNM"))) 
        	{
        		alert("서명개인키파일을 업로드 해주십시오.");
        		return false;
        	}
        	
        	if(this.gfn_isNull(this.ds_ctfc.getColumn(0, "PWIZE_ATOA_FLNM"))) 
        	{
        		alert("암호화인증서파일을 업로드 해주십시오.");
        		return false;
        	}
        	
        	if(this.gfn_isNull(this.ds_ctfc.getColumn(0, "PWIZE_PSN_KY_FLNM"))) 
        	{
        		alert("암호화개인키파일을 업로드 해주십시오.");
        		return false;
        	}
        	
        	return true;
        }

        this.FileUpload_onerror = function(obj,e)
        {
        	trace(obj.name + "_onerror");
        	trace("e.errorcode: "+e.errorcode);
        	trace("e.errormsg: "+e.errormsg);
        }

        this.FileUpload_onitemchanged = function(obj,e)
        {
        	this.gfn_callUpload(obj);
        }

        this.FileUpload_onsuccess = function(obj,e)
        {
        	if( e.datasets == null )
        	{
        		trace("업로드 실패");
        	} else {
        		trace("업로드 성공");
        	
        		this.ds_upload.clear();
        		this.ds_upload.copyData(e.datasets[0]);		
        		
        		switch(obj.name)
        		{
        			case "FileUpload01"://서명인증키
        				this.ds_ctfc.setColumn(0, "SG_ATOA_FL_TMPNM", this.ds_upload.getColumn(0, "SYSTEMFILENAME"));
        				this.ds_ctfc.setColumn(0, "SG_ATOA_FLNM", this.ds_upload.getColumn(0, "ORGFNAME"));
        				break;
        				
        			case "FileUpload02"://서명개인키
        				this.ds_ctfc.setColumn(0, "SG_PSN_KY_FL_TMPNM", this.ds_upload.getColumn(0, "SYSTEMFILENAME"));
        				this.ds_ctfc.setColumn(0, "SG_PSN_KY_FLNM", this.ds_upload.getColumn(0, "ORGFNAME"));
        				break;
        				
        			case "FileUpload03"://암호화인증키
        				this.ds_ctfc.setColumn(0, "PWIZE_ATOA_FL_TMPNM", this.ds_upload.getColumn(0, "SYSTEMFILENAME"));
        				this.ds_ctfc.setColumn(0, "PWIZE_ATOA_FLNM", this.ds_upload.getColumn(0, "ORGFNAME"));
        				break;
        			
        			case "FileUpload04"://암호화개인키
        				this.ds_ctfc.setColumn(0, "PWIZE_PSN_KY_FL_TMPNM", this.ds_upload.getColumn(0, "SYSTEMFILENAME"));
        				this.ds_ctfc.setColumn(0, "PWIZE_PSN_KY_FLNM", this.ds_upload.getColumn(0, "ORGFNAME"));
        				break;
        		}
        	}	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_close.addEventHandler("onclick", this.common_onclick, this);
            this.Static06.addEventHandler("onclick", this.Static06_onclick, this);
            this.btn_save.addEventHandler("onclick", this.common_onclick, this);
            this.edt_NA_BZPLC.addEventHandler("ontextchanged", this.edt_mbId_ontextchanged, this);
            this.edt_MAIN_CHRRNM.addEventHandler("ontextchanged", this.edt_mbId_ontextchanged, this);
            this.edt_SUB_CHRRNM.addEventHandler("ontextchanged", this.edt_mbId_ontextchanged, this);
            this.FileUpload01.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload01.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload01.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.FileUpload02.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload02.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload02.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.FileUpload03.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload03.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload03.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.FileUpload04.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload04.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload04.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);

        };

        this.loadIncludeScript("OMG_DS_SC_3420.xfdl");

       
    };
}
)();
