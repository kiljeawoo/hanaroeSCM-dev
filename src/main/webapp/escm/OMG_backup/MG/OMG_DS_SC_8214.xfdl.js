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
                this.set_name("OMG_DS_SC_8212");
                this.set_visible("true");
                this.set_scrollbars("none");
                this.set_enable("true");
                this.set_titletext("교육신청 등록");
                this._setFormPosition(0,0,600,600);
            }
            this.style.set_border("2 solid #067394ff");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_usr_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EDU_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_hpNo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"30\" value=\"\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"30\" value=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new TextArea("txa_arr01", "absolute", "10", "95", "580", "187", null, null, this);
            obj.set_taborder("0");
            obj.set_tabstop("false");
            obj.set_scrollbars("autovert");
            obj.set_wordwrap("char");
            obj.set_readonly("true");
            obj.style.set_padding("5 5 5 5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "34", "64", "252", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_text("개인정보 활용 동의");
            obj.set_usedecorate("true");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_agr01", "absolute", "15", "64", "19", "21", null, null, this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "0", "0", "600", "43", null, null, this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "161", "9", "253", "21", null, null, this.Div02);
            obj.set_taborder("59");
            obj.set_text("하나로 eSCM 온라인 화상 사용자교육 신청");
            obj.style.set_font("bold 9 arial");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static107", "absolute", "10", "296", "290", "29", null, null, this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "10", "324", "290", "29", null, null, this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static113", "absolute", "10", "436", "290", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static115", "absolute", "10", "408", "290", "29", null, null, this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "10", "436", "80", "29", null, null, this);
            obj.set_taborder("8");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static109", "absolute", "10", "324", "80", "29", null, null, this);
            obj.set_taborder("9");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static106", "absolute", "10", "296", "80", "29", null, null, this);
            obj.set_taborder("10");
            obj.set_text("교육일시");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_USR_EMAIL01", "absolute", "98", "440", "82", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_imemode("alpha");
            obj.set_maxlength("25");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_USR_COMP", "absolute", "98", "328", "183", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_password("false");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("20");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_USR_EMAIL02", "absolute", "199", "440", "82", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_imemode("alpha");
            obj.set_maxlength("25");
            this.addChild(obj.name, obj);

            obj = new Static("Static134", "absolute", "185", "440", "13", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_text("@");
            this.addChild(obj.name, obj);

            obj = new Static("Static116", "absolute", "10", "408", "80", "29", null, null, this);
            obj.set_taborder("20");
            obj.set_text("연락처");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_HP", "absolute", "98", "412", "51", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("21");
            obj.set_innerdataset("ds_hpNo");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");

            obj = new Static("Static125", "absolute", "149", "412", "9", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_HP01", "absolute", "158", "412", "48", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static126", "absolute", "206", "412", "9", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_HP02", "absolute", "215", "412", "48", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "10", "352", "290", "29", null, null, this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "10", "352", "80", "29", null, null, this);
            obj.set_taborder("27");
            obj.set_text("참가자명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Calendar("edt_EDU_DT", "absolute", "98", "300", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("31");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");

            obj = new Edit("edt_USR_NM", "absolute", "98", "356", "183", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_maxlength("16");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "10", "380", "290", "29", null, null, this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "10", "380", "80", "29", null, null, this);
            obj.set_taborder("33");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_USR_POSITION", "absolute", "98", "384", "183", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_maxlength("16");
            this.addChild(obj.name, obj);

            obj = new Button("btn_subscription", "absolute", "265", "550", "70", "30", null, null, this);
            obj.set_taborder("35");
            obj.set_text("교육신청");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "10", "480", "580", "65", null, null, this);
            obj.set_taborder("36");
            obj.set_value("작성해 주신 이메일 주소로 온라인 회의방 URL을 보내드리니 이메일 주소를 정확하게 입력해 주세요.");
            obj.style.set_padding("0 0 0 10");
            obj.style.set_border("0 solid #bfbfbfff");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "615", "0", "600", "600", null, null, this);
            obj.set_taborder("56");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #bfbfbfff");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new TextArea("TextArea00", "absolute", "100", "50", "420", "100", null, null, this.Div00);
            obj.set_taborder("0");
            obj.set_value("하나로 eSCM 온라인 화상 사용자교육 신청");
            obj.style.set_border("0 solid #bfbfbfff");
            obj.style.set_align("center middle");
            obj.style.set_font("bold underline 15 굴림");
            this.Div00.addChild(obj.name, obj);
            obj = new TextArea("TextArea01", "absolute", "100", "150", "400", "300", null, null, this.Div00);
            obj.set_taborder("1");
            obj.set_value("교육신청이 완료되었습니다.\r\n감사합니다\r\n\r\n부득이하게 교육참여가 안될 경우\r\n고객센터 : 1522-1211 으로 연락주시면\r\n취소를 하실 수 있습니다.");
            obj.style.set_border("0 solid #bfbfbfff");
            obj.style.set_align("center middle");
            obj.style.set_font("13 Gulim");
            this.Div00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 600, 43, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 600, 600, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("56");
            		p.style.set_background("#ffffffff");
            		p.style.set_border("1 solid #bfbfbfff");
            		p.set_visible("false");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 600, 600, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_3212");
            		p.style.set_border("2 solid #067394ff");
            		p.set_visible("true");
            		p.set_scrollbars("none");
            		p.set_enable("true");
            		p.set_titletext("교육신청 등록");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_8214.xfdl", "lib::comLib.xjs");
        this.addIncludeScript("OMG_DS_SC_8214.xfdl", "lib::comPolicy.xjs");
        this.registerScript("OMG_DS_SC_8214.xfdl", function() {
        //include "lib::comLib.xjs"
        //include "lib::comPolicy.xjs";

        this.sScrollYn = "";

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); // 공통
        }

        this.fn_afterFormOnload = function()
        {
        	this.ds_usr_detail.clearData();
        	/*변경될 데이터*/
        	this.txa_arr01.set_value(this.policyPrivacy);

        	var param = [
        		{code:"HP", dsName:"ds_hpNo", selecttype:"N"}
        	];

        	this.gfn_setPortalCommonCode(param);

        	this.ds_usr_detail.addRow();
        	this.ds_usr_detail.setColumn(0, "SEQ", this.getOwnerFrame().SEQ);

        	this.cbo_HP.set_index(1);
        	this.edt_EDU_DT.set_value(this.getOwnerFrame().EDU_DT);
         	this.edt_USR_COMP.set_value(application.gv_companyName);
         	
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        	 	if (svcID == "insertEducationSubscription") {
        			this.Div00.set_left(0);
        			this.Div00.set_visible(true);
        		}
        	}
        }

        this.fn_subscription = function(obj,e)
        {
        	var eduDt = this.edt_EDU_DT.value;
        	var compNm = this.edt_USR_COMP.value;
        	var usrNm = this.edt_USR_NM.value;
        	var position = this.edt_USR_POSITION.value;
        	var telNo = this.cbo_HP.value + "-" + this.edt_HP01.value + "-" + this.edt_HP02.value;
        	var email = this.edt_USR_EMAIL01.value + "@" + this.edt_USR_EMAIL02.value;

        	if (!this.chk_agr01.value) {
        		this.alert("개인정보 활용 동의에 체크하셔야 합니다.");
        		return;
        	}
        	if (this.sScrollYn == "N") {
        		this.alert("개인정보 활용 동의를 끝까지 읽어 주시기 바랍니다.");
        		return;
        	}
        	if (this.gfn_isNull(compNm)) {
        		this.alert("회사명을 입력하셔야 합니다.");
        		return;
        	}
        	if (this.gfn_isNull(usrNm)) {
        		this.alert("신청자명을 입력하셔야 합니다.");
        		return;
        	}
        	if (this.gfn_isNull(position)) {
        		this.alert("직책을 입력하셔야 합니다.");
        		return;
        	}
        	if (this.gfn_isNull(this.edt_HP01.value)) {
        		this.alert("전화번호를 입력하셔야 합니다.");
        		return;
        	}
        	if (this.gfn_isNull(this.edt_HP02.value)) {
        		this.alert("전화번호를 입력하셔야 합니다.");
        		return;
        	}
        	if (this.gfn_isNull(telNo)) {
        		this.alert("전화번호를 입력하셔야 합니다.");
        		return;
        	}
        	if (this.gfn_isNull(email)) {
        		this.alert("이메일을 입력하셔야 합니다.");
        		return;
        	}
        	var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        	if (!regExp.test(email)) {
        		this.alert("잘못된 이메일 형식입니다.");
        		return;
        	}

        	this.ds_usr_detail.setColumn(0, "EDU_DATE", eduDt);
        	this.ds_usr_detail.setColumn(0, "COMPANY_NM", compNm);
        	this.ds_usr_detail.setColumn(0, "USER_NM", usrNm);
        	this.ds_usr_detail.setColumn(0, "POSITION", position);
        	this.ds_usr_detail.setColumn(0, "TEL_NO", telNo);
        	this.ds_usr_detail.setColumn(0, "EMAIL", email);
        	
        	var sSvcID        = "insertEducationSubscription";
        	var sURL          = "svc::rest/mg/edu/insertEducationSubscription";
        	var sInDatasets   = "ds_usr_detail=ds_usr_detail";
        	var sOutDatasets  = "";
        	var sArgument     = "gln=" + application.gv_glnCode;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets , sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.Div01_TextArea00_oneditclick = function(obj,e)
        {
        	if (this.txa_arr01.vscrollbar.max  == e.pos) {
        		this.sScrollYn = "Y";
        	} else {
        		this.sScrollYn = "N";
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.txa_arr01.addEventHandler("oneditclick", this.Div01_TextArea00_oneditclick, this);
            this.Static02.addEventHandler("onclick", this.Div01_Static01_onclick, this);
            this.Div02.Static00.addEventHandler("onclick", this.Div02_Static00_onclick, this);
            this.Static03.addEventHandler("onclick", this.Div05_Static03_onclick, this);
            this.Static10.addEventHandler("onclick", this.Div05_Static03_onclick, this);
            this.Static04.addEventHandler("onclick", this.Div05_Static03_onclick, this);
            this.btn_subscription.addEventHandler("onclick", this.fn_subscription, this);

        };

        this.loadIncludeScript("OMG_DS_SC_8214.xfdl");

       
    };
}
)();
