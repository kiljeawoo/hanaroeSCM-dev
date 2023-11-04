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
                this.set_titletext("서비스운영회원 등록/수정");
                this._setFormPosition(0,0,700,172);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_member", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MB_PW\" type=\"STRING\" size=\"256\"/><Column id=\"USR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTH\" type=\"STRING\" size=\"256\"/><Column id=\"SEX_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"USR_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"USR_MPNO\" type=\"STRING\" size=\"256\"/><Column id=\"USR_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"SMS_RMS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_RMS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"ENT_PRG_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CHRG_BSNNM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"256\"/><Column id=\"PW_LSRG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MB_CV_DSC\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dupCheck", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_checkDbPW", this);
            obj._setContents("<ColumnInfo><Column id=\"COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COUNT\">99</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static38", "absolute", "126", "100", null, "29", "17", null, this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "126", "128", null, "29", "17", null, this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "126", "44", null, "29", "17", null, this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("upper_level1", "absolute", "126", "72", null, "29", "17", null, this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "15", "41", "21", "17", null, this);
            obj.set_taborder("13");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("text_title", "absolute", "17", "19", "231", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_text("서비스 운영 회원 등록/수정");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "17", "44", "110", "29", null, null, this);
            obj.set_taborder("15");
            obj.set_text("운영자ID");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "17", "72", "110", "29", null, null, this);
            obj.set_taborder("16");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "17", "100", "110", "29", null, null, this);
            obj.set_taborder("19");
            obj.set_text("연락처");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "17", "128", "110", "29", null, null, this);
            obj.set_taborder("20");
            obj.set_text("E-Mail");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "674", "157", "91", "15", null, null, this);
            obj.set_taborder("68");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "683", "-1", "17", "67", null, null, this);
            obj.set_taborder("70");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "674", "0", "91", "15", null, null, this);
            obj.set_taborder("71");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "99", "17", "67", null, null, this);
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

            obj = new Button("btn_dupCheck", "absolute", "281", "48", "65", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("중복확인");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "15", "43", "21", "59", null, this);
            obj.set_taborder("12");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_eMail", "absolute", "130", "132", "215", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("60");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_phone", "absolute", "130", "104", "62", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_phone_innerdataset = new Dataset("cbo_phone_innerdataset", this.cbo_phone);
            cbo_phone_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">02</Col></Row><Row><Col id=\"codecolumn\">031</Col><Col id=\"datacolumn\">011</Col></Row><Row><Col id=\"codecolumn\">051</Col><Col id=\"datacolumn\">051</Col></Row><Row><Col id=\"codecolumn\">053</Col><Col id=\"datacolumn\">053</Col></Row><Row><Col id=\"codecolumn\">032</Col><Col id=\"datacolumn\">032</Col></Row><Row><Col id=\"codecolumn\">062</Col><Col id=\"datacolumn\">062</Col></Row><Row><Col id=\"codecolumn\">042</Col><Col id=\"datacolumn\">042</Col></Row><Row><Col id=\"codecolumn\">052</Col><Col id=\"datacolumn\">052</Col></Row><Row><Col id=\"codecolumn\">044</Col><Col id=\"datacolumn\">044</Col></Row><Row><Col id=\"codecolumn\">031</Col><Col id=\"datacolumn\">031</Col></Row><Row><Col id=\"codecolumn\">033</Col><Col id=\"datacolumn\">033</Col></Row><Row><Col id=\"codecolumn\">043</Col><Col id=\"datacolumn\">043</Col></Row><Row><Col id=\"codecolumn\">041</Col><Col id=\"datacolumn\">041</Col></Row><Row><Col id=\"codecolumn\">063</Col><Col id=\"datacolumn\">063</Col></Row><Row><Col id=\"codecolumn\">061</Col><Col id=\"datacolumn\">061</Col></Row><Row><Col id=\"codecolumn\">054</Col><Col id=\"datacolumn\">054</Col></Row><Row><Col id=\"codecolumn\">055</Col><Col id=\"datacolumn\">055</Col></Row><Row><Col id=\"codecolumn\">064</Col><Col id=\"datacolumn\">064</Col></Row><Row><Col id=\"codecolumn\">010</Col><Col id=\"datacolumn\">010</Col></Row><Row><Col id=\"codecolumn\">011</Col><Col id=\"datacolumn\">011</Col></Row></Rows>");
            obj.set_innerdataset(cbo_phone_innerdataset);
            obj.set_taborder("5");
            obj.set_value("010");
            obj.set_text("010");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");

            obj = new Static("Static11", "absolute", "35.43%", "104", null, "21", "63.43%", null, this);
            obj.set_taborder("128");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "27.71%", "104", null, "21", "71.14%", null, this);
            obj.set_taborder("129");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_phone2", "absolute", "201", "104", "45", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.style.set_align("right middle");
            obj.set_autoskip("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_phone3", "absolute", "256", "104", "44", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "350", "72", "110", "29", null, null, this);
            obj.set_taborder("133");
            obj.set_text("비밀번호 확인");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "350", "44", "110", "29", null, null, this);
            obj.set_taborder("134");
            obj.set_text("운영자이름");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "350", "100", "110", "29", null, null, this);
            obj.set_taborder("135");
            obj.set_text("휴대폰");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mbPw2", "absolute", "463", "76", "215", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_password("true");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("16");
            obj.set_imemode("alpha");
            obj.set_inputtype("number,english,symbol,digit");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_oprrNm", "absolute", "463", "48", "215", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mbId", "absolute", "130", "48", "148", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_inputtype("number,english");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("9");
            obj.set_imemode("alpha");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mbPw", "absolute", "130", "76", "148", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_maxlength("16");
            obj.set_password("true");
            obj.set_lengthunit("utf8");
            obj.set_imemode("alpha");
            obj.set_inputtype("number,english,symbol,digit");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_cellPhone", "absolute", "463", "104", "62", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_cellPhone_innerdataset = new Dataset("cbo_cellPhone_innerdataset", this.cbo_cellPhone);
            cbo_cellPhone_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">010</Col><Col id=\"datacolumn\">010</Col></Row><Row><Col id=\"codecolumn\">011</Col><Col id=\"datacolumn\">011</Col></Row></Rows>");
            obj.set_innerdataset(cbo_cellPhone_innerdataset);
            obj.set_taborder("8");
            obj.set_value("010");
            obj.set_text("010");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");

            obj = new Static("Static02", "absolute", "83%", "104", null, "21", "15.86%", null, this);
            obj.set_taborder("142");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "75.29%", "104", null, "21", "23.57%", null, this);
            obj.set_taborder("143");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cellPhone2", "absolute", "536", "104", "44", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.style.set_align("right middle");
            obj.set_autoskip("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cellPhone3", "absolute", "591", "104", "44", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_checkDbPW", "absolute", "281", "76", "65", "21", null, null, this);
            obj.set_taborder("144");
            obj.set_text("수정하기");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 700, 172, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("서비스운영회원 등록/수정");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item3","edt_eMail","value","ds_member","USR_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","cbo_phone","value","ds_rc","CHRW_MPSVNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","edt_phone2","value","ds_rc","CHRW_MPHNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edt_phone3","value","ds_rc","CHRW_MPSQNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edt_mbPw2","value","ds_member","MB_PW");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_oprrNm","value","ds_member","USR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_mbId","value","ds_member","MB_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","cbo_cellPhone","value","ds_rc","CHRW_MPSVNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","edt_cellPhone2","value","ds_rc","CHRW_MPHNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","edt_cellPhone3","value","ds_rc","CHRW_MPSQNO");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_6211.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_6211.xfdl", function(exports) {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        this.id_confirm = false;
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
           try
           {
        		this.ds_member.assign(this.parent.dsArg);
        	
        		switch(this.getOwnerFrame().paramMode)
        		{
        			case "btn_reg": // 등록
        				this.edt_mbId.set_enable(true);
        				this.cbo_cellPhone.set_index(0);
        				this.cbo_phone.set_index(0)
        				break;
        				
        			case "btn_mod": //수정
        				this.id_confirm = true;
        				this.edt_mbId.set_enable(false);
        				this.edt_mbPw.set_enable(false);
        				this.edt_mbPw2.set_enable(false);
        				this.btn_checkDbPW.set_visible(true);
        				this.edt_mbPw.set_value(this.edt_mbPw2.value);
        				this.edt_mbPw2.set_value("");
        				//전화번호 나눠주기
        				this.fn_telNo(this.ds_member.getColumn(0, "USR_TELNO"), this.cbo_phone, this.edt_phone2, this.edt_phone3);
        				this.fn_telNo(this.ds_member.getColumn(0, "USR_MPNO"), this.cbo_cellPhone, this.edt_cellPhone2, this.edt_cellPhone3);
         				break;
        		}
           }
           catch(ex)
           {
        		trace("에러");
           }
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_insertSvcOperMb = function()
        {
        	var sSvcID        = "insertSvcOperMb";
        	var sURL          = "svc::rest/mg/insertSvcOperMb";
        	var sInDatasets   = "ds_member=ds_member";
        	var sOutDatasets  = "";	
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_updateSvcOperMb = function()
        {
        	var sSvcID        = "updateSvcOperMb";
        	var sURL          = "svc::rest/mg/updateSvcOperMb";
        	var sInDatasets   = "ds_member=ds_member";
        	var sOutDatasets  = "";	
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_dupCheck = function(obj,e)
        {
        	var sSvcID        = "getUupleID";
        	var sURL          = "svc::rest/mg/retrieveSvcOperMbList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_dupCheck=ds_memberList";	
        	var sArgument     = "MB_ID="+ this.gfn_nullToEmpty(this.edt_mbId.value);
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_checkDbPW = function()
        {
        	var sSvcID        = "checkDbPW";
        	var sURL          = "svc::rest/mg/checkDbPW";
        	var sInDatasets   = "";
        	var sOutDatasets  = "";	
        	var sArgument     = "MB_ID="+ this.gfn_nullToEmpty(this.edt_mbId.value) +
        						" MB_PW="+ this.gfn_nullToEmpty(this.edt_mbPw.value) +
        						" MB_PW2="+ this.gfn_nullToEmpty(this.edt_mbPw2.value);
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
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
        			case "insertSvcOperMb":
        				alert("저장되었습니다.");
        				this.close();
        				break;
        				
        			case "updateSvcOperMb":
        				alert("수정되었습니다.");
        				this.close();
        				break;
        			
        			case "retrieveOperationpMemberList":
        				break;
        			
        			case "getUupleID":
        				if( this.ds_dupCheck.rowcount > 0)
        				{
        					alert("중복된 아이디가 존재합니다.");
        				}
        				else
        				{
        					alert("사용가능합니다.");
        					this.id_confirm = true;
        				}
        				break;
        				
        			case "checkDbPW":
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
        		case "btn_dupCheck":
        			if(String(this.edt_mbId.value).length < 4)
        			{
        				alert("아이디는 4자 이상이어야 합니다.");
        				return ;
        			}
        			this.fn_dupCheck();
        			break;
        		
        		case "btn_close":
        			this.close();
        			break;
        			
        		case "btn_save":	
        			if(this.gfn_isNull(this.edt_mbId.value))
        			{
        				alert("아이디는 필수입력사항입니다.");
        				return;
        			}
        			if(this.id_confirm == false)
        			{
        				alert("아이디 중복확인을 해주십시오.");
        				return;
        			}
        			if(this.gfn_isNull(this.edt_oprrNm.value))
        			{
        				alert("운영자이름은 필수 입력사항입니다.");
        				return;
        			}
        			if(this.gfn_isNull(this.edt_mbPw.value))
        			{
        				alert("비밀번호는 필수 입력사항입니다.");
        				return;
        			}
        			
        			if(this.edt_mbPw.enable == true)
        			{
        				//비밀번호 일치 확인하기
        				if(!this.gfn_pwValidation(this.edt_mbPw.value)){
        					return false;
        				}
        				//비밀번호 일치 확인하기
        				if(this.fn_checkPw())
        				{
        					return;
        				}
        				
        				var regEmail = new RegExp(/^[\w\-]+@(?:(?:[\w\-]{2,}\.)+[a-zA-Z]{2,})$/);
        				if(!regEmail.test(this.edt_eMail.value))
        				{
        					alert("이메일 형식을 체크하여주세요.");
        					return;
        				}
        			}
        			
        			//전화번호에 값 합쳐주기
        			this.ds_member.setColumn(0, "USR_TELNO", this.gfn_nullToEmpty(this.cbo_phone.value) + this.gfn_nullToEmpty(this.edt_phone2.value) + this.gfn_nullToEmpty(this.edt_phone3.value) );
        			this.ds_member.setColumn(0, "USR_MPNO", this.gfn_nullToEmpty(this.cbo_cellPhone.value) + this.gfn_nullToEmpty(this.edt_cellPhone2.value) + this.gfn_nullToEmpty(this.edt_cellPhone3.value));
        			
        			var regPhone = new RegExp(/^\d{2,3}\d{3,4}\d{4}$/);
        			if(!regPhone.test(this.ds_member.getColumn(0, "USR_TELNO")))
        			{
        				alert("올바른 전화번호를 입력하여주세요.");
        				return;
        			}
        			var regCellPhone = new RegExp(/^((01[1|6|7|8|9])[1-9]+[0-9]{6,7})|(010[1-9][0-9]{7})$/);
        			if(!regCellPhone.test(this.ds_member.getColumn(0, "USR_MPNO")))
        			{
        				alert("올바른 핸드폰 번호를 입력하여주세요.");
        				return;
        			}
        			//아이디나 비밀번호 정규식 /^[a-z0-9_]{4,20}$/; 
        			this.ds_member.setColumn(0, "FS_RGM", application.gv_userId);
        			this.ds_member.setColumn(0, "LS_CHGM", application.gv_userId);
        			
        			switch(this.getOwnerFrame().paramMode)
        			{
        				case "btn_reg": // 등록
        					this.fn_insertSvcOperMb();
        					break;
        					
        				case "btn_mod": //수정
        // 					if(this.ds_member.getRowType(0) == 1)
        // 					{	
        // 						alert("변경사항이 없습니다.");
        // 						return;
        // 					}
        					this.fn_updateSvcOperMb();
        					break;
        			}
        			
        			break;
        			
        		case "btn_checkDbPW":
        			this.edt_mbPw.set_enable(true);
        			this.edt_mbPw2.set_enable(true);
        			this.edt_mbPw.set_value("");
        			this.edt_mbPw2.set_value("");
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
        		return true;
        	}
        	return false;
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
        this.edt_mbId_ontextchanged = function(obj,e)
        {
        	this.id_confirm = false;
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_close.addEventHandler("onclick", this.common_onclick, this);
            this.btn_dupCheck.addEventHandler("onclick", this.common_onclick, this);
            this.btn_save.addEventHandler("onclick", this.common_onclick, this);
            this.edt_mbId.addEventHandler("ontextchanged", this.edt_mbId_ontextchanged, this);
            this.cbo_cellPhone.addEventHandler("onitemchanged", this.cbo_cellPhone_onitemchanged, this);
            this.btn_checkDbPW.addEventHandler("onclick", this.common_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_6211.xfdl", true);

       
    };
}
)();
