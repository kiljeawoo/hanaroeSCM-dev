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
                this.set_name("frm_search");
                this.set_titletext("ID/PW찾기");
                this._setFormPosition(0,0,405,331);
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
            obj._setContents("<ColumnInfo><Column id=\"MB_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MB_PW\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_hp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static04", "absolute", "242", "32", "91", "15", null, null, this);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "8", "75", "17", "73", null, null, this);
            obj.set_taborder("30");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", null, "32", "17", "111", "0", null, this);
            obj.set_taborder("31");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "284", null, "100", "15", null, "0", this);
            obj.set_taborder("35");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_search", "absolute", "17", "15", null, null, "17", "15", this);
            obj.set_taborder("38");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.style.set_showextrabutton("false");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.tab_search);
            obj.set_text("아이디찾기");
            this.tab_search.addChild(obj.name, obj);
            obj = new Div("div_search", "absolute", "0", "0", null, null, "0", "0", this.tab_search.tabpage1);
            obj.set_taborder("0");
            obj.set_scrollbars("none");
            this.tab_search.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "50", "72", "100", "25", null, null, this.tab_search.tabpage1.div_search);
            obj.set_taborder("2");
            obj.set_text("거래처코드");
            obj.style.set_font("10 Gulim");
            this.tab_search.tabpage1.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "50", "23", "100", "25", null, null, this.tab_search.tabpage1.div_search);
            obj.set_taborder("3");
            obj.set_text("사용자명");
            this.tab_search.tabpage1.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_USR_NM", "absolute", "170", "23", "140", "25", null, null, this.tab_search.tabpage1.div_search);
            obj.set_taborder("0");
            obj.set_imemode("hangul");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.tab_search.tabpage1.div_search.addChild(obj.name, obj);
            obj = new Button("btn_MB_ID", "absolute", "135", "170", "101", "31", null, null, this.tab_search.tabpage1.div_search);
            obj.set_taborder("4");
            obj.set_text("아이디찾기");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_color("ghostwhite");
            obj.style.set_font("bold 10 arial");
            obj.set_tabstop("false");
            this.tab_search.tabpage1.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_NA_TRPL_C", "absolute", "170", "72", "140", "25", null, null, this.tab_search.tabpage1.div_search);
            obj.set_taborder("1");
            obj.set_inputtype("digit");
            obj.set_maxlength("13");
            obj.set_lengthunit("ascii");
            this.tab_search.tabpage1.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "50", "121", "100", "25", null, null, this.tab_search.tabpage1.div_search);
            obj.set_taborder("5");
            obj.set_text("아이디");
            obj.style.set_font("10 Gulim");
            this.tab_search.tabpage1.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_MB_ID", "absolute", "170", "121", "140", "25", null, null, this.tab_search.tabpage1.div_search);
            this.tab_search.tabpage1.div_search.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_innerdataset("@ds_user");
            obj.set_codecolumn("MB_ID");
            obj.set_datacolumn("MB_ID");
            obj.set_tabstop("false");
            obj = new Tabpage("tabpage2", this.tab_search);
            obj.set_text("비밀번호찾기");
            this.tab_search.addChild(obj.name, obj);
            obj = new Div("div_search", "absolute", "0", "0", null, null, "0", "0", this.tab_search.tabpage2);
            obj.set_taborder("0");
            obj.set_scrollbars("none");
            this.tab_search.tabpage2.addChild(obj.name, obj);
            obj = new Button("btn_MB_PW", "absolute", "116", "219", "139", "31", null, null, this.tab_search.tabpage2.div_search);
            obj.set_taborder("2");
            obj.set_text("비밀번호초기화");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_font("bold 10 arial");
            obj.set_tabstop("false");
            this.tab_search.tabpage2.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "50", "56", "100", "25", null, null, this.tab_search.tabpage2.div_search);
            obj.set_taborder("6");
            obj.set_text("거래처코드");
            obj.style.set_font("10 Gulim");
            this.tab_search.tabpage2.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "50", "16", "100", "25", null, null, this.tab_search.tabpage2.div_search);
            obj.set_taborder("7");
            obj.set_text("회원ID");
            this.tab_search.tabpage2.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_MB_ID", "absolute", "170", "16", "140", "25", null, null, this.tab_search.tabpage2.div_search);
            obj.set_taborder("0");
            obj.set_imemode("alpha");
            obj.set_inputfilter("space");
            obj.set_maxlength("9");
            obj.set_lengthunit("ascii");
            this.tab_search.tabpage2.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_NA_TRPL_C", "absolute", "170", "56", "140", "25", null, null, this.tab_search.tabpage2.div_search);
            obj.set_taborder("1");
            obj.set_inputtype("digit");
            obj.set_maxlength("13");
            obj.set_lengthunit("ascii");
            this.tab_search.tabpage2.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "50", "136", "100", "25", null, null, this.tab_search.tabpage2.div_search);
            obj.set_taborder("10");
            obj.set_text("휴대전화번호");
            obj.style.set_font("10 Gulim");
            this.tab_search.tabpage2.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_USR_MPNO_1", "absolute", "170", "136", "51", "25", null, null, this.tab_search.tabpage2.div_search);
            this.tab_search.tabpage2.div_search.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_hp");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_index("-1");
            obj = new Static("Static04", "absolute", "221", "136", "10", "25", null, null, this.tab_search.tabpage2.div_search);
            obj.set_taborder("9");
            obj.set_text("-");
            this.tab_search.tabpage2.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_USR_MPNO_2", "absolute", "230", "136", "48", "25", null, null, this.tab_search.tabpage2.div_search);
            obj.set_taborder("4");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.set_lengthunit("ascii");
            this.tab_search.tabpage2.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "279", "136", "9", "25", null, null, this.tab_search.tabpage2.div_search);
            obj.set_taborder("11");
            obj.set_text("-");
            this.tab_search.tabpage2.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_USR_MPNO_3", "absolute", "287", "136", "48", "25", null, null, this.tab_search.tabpage2.div_search);
            obj.set_taborder("5");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            obj.set_lengthunit("ascii");
            this.tab_search.tabpage2.div_search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "50", "176", "100", "25", null, null, this.tab_search.tabpage2.div_search);
            obj.set_taborder("12");
            obj.set_text("인증번호");
            obj.style.set_font("10 Gulim");
            this.tab_search.tabpage2.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_CERT_NUM", "absolute", "170", "176", "72", "25", null, null, this.tab_search.tabpage2.div_search);
            obj.set_taborder("13");
            obj.set_maxlength("6");
            obj.set_inputtype("digit");
            obj.set_lengthunit("ascii");
            this.tab_search.tabpage2.div_search.addChild(obj.name, obj);
            obj = new Button("btn_sendSms_pw", "absolute", "246", "176", "89", "25", null, null, this.tab_search.tabpage2.div_search);
            obj.set_taborder("14");
            obj.set_text("인증번호전송");
            obj.set_tabstop("false");
            this.tab_search.tabpage2.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "50", "96", "100", "25", null, null, this.tab_search.tabpage2.div_search);
            obj.set_taborder("15");
            obj.set_text("생년월일");
            obj.style.set_font("10 Gulim");
            this.tab_search.tabpage2.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_BIRTH", "absolute", "170", "96", "80", "25", null, null, this.tab_search.tabpage2.div_search);
            obj.set_taborder("16");
            obj.set_inputtype("digit");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("8");
            this.tab_search.tabpage2.div_search.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "258", "96", "94", "25", null, null, this.tab_search.tabpage2.div_search);
            obj.set_taborder("17");
            obj.set_text("ex) 20160101");
            obj.style.set_font("10 Gulim");
            this.tab_search.tabpage2.div_search.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 286, 124, this.tab_search.tabpage1.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_scrollbars("none");

            	}
            );
            this.tab_search.tabpage1.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tab_search.tabpage1,
            	//-- Layout function
            	function(p) {
            		p.set_text("아이디찾기");

            	}
            );
            this.tab_search.tabpage1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 286, 124, this.tab_search.tabpage2.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_scrollbars("none");

            	}
            );
            this.tab_search.tabpage2.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.tab_search.tabpage2,
            	//-- Layout function
            	function(p) {
            		p.set_text("비밀번호찾기");

            	}
            );
            this.tab_search.tabpage2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 405, 331, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("ID/PW찾기");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Div00.edt_glnCode","value","ds_bbs","BBRD_TI");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Div00.Static13","text","ds_bbs","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div00.edt_email","value","ds_bbs","BBRD_TI");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Div00.Static02","text","ds_bbs","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_5120.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_5120.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";
         
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); // 공통
        }

        this.fn_afterFormOnload = function()
        {
        	// 공통코드 가져오기
        	var param = [
        		{ code: "HP", dsName: "ds_hp" } // 휴대전화번호
        	];
        	this.gfn_setPortalCommonCode(param);
        }

        // 공통코드 가져오기 - 콜백
        this.fn_commonAfterOnload = function()
        {
        	this.tab_search.tabpage2.div_search.cbo_USR_MPNO_1.set_index(this.ds_hp.findRow("SIMP_C", "010")); // 휴대전화번호 (기본값: 010)
        }

        /* 아이디찾기 */
        this.btn_MB_ID_onclick = function(obj,e)
        {
        	var Tap01 = this.tab_search.tabpage1.div_search;
        	
        	if (!Tap01.edt_USR_NM.value) {
        		alert("사용자명을 입력해 주세요.");
        		Tap01.edt_USR_NM.setFocus();
        		return;
        	} else if (!Tap01.edt_NA_TRPL_C.value) {
        		alert("거래처코드를 입력해 주세요.");
        		Tap01.edt_NA_TRPL_C.setFocus();
        		return;
        	}
        	
        	var param = "USR_NM=" + encodeURI(Tap01.edt_USR_NM.value)
        			+ " NA_TRPL_C=" + Tap01.edt_NA_TRPL_C.value;
        	
        	var sSvcID        = "getMbId";
        	var sURL          = "svc::rest/pt/usrinf/getMbId";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_user=ds_user";
        	var sArgument     = param;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /* 비밀번호찾기 > 인증번호전송 */
        this.btn_sendSms_pw_onclick = function(obj,e)
        {
        	var Tap02 = this.tab_search.tabpage2.div_search;
        	
        	if (!Tap02.edt_MB_ID.value) {
        		alert("회원ID를 입력해 주세요.");
        		Tap02.edt_MB_ID.setFocus();
        		return;
        	} else if (!Tap02.edt_NA_TRPL_C.value) {
        		alert("거래처코드를 입력해 주세요.");
        		Tap02.edt_NA_TRPL_C.setFocus();
        		return;
        	} else if (!Tap02.edt_BIRTH.value) {
        		alert("생년월일을 입력해 주세요.");
        		Tap02.edt_BIRTH.setFocus();
        		return;
        	} else if (!Tap02.edt_USR_MPNO_2.value) {
        		alert("휴대전화번호를 입력해 주세요.");
        		Tap02.edt_USR_MPNO_2.setFocus();
        		return;
        	} else if (!Tap02.edt_USR_MPNO_3.value) {
        		alert("휴대전화번호를 입력해 주세요.");
        		Tap02.edt_USR_MPNO_3.setFocus();
        		return;
        	} else {
        		var USR_MPNO = Tap02.cbo_USR_MPNO_1.value + "-" + Tap02.edt_USR_MPNO_2.value + "-" + Tap02.edt_USR_MPNO_3.value;
        		if (!/^(02|[0-9]{3}|0505)-[0-9]{3,4}-[0-9]{4}$/.test(USR_MPNO)) { // 전화번호 정규식 ("-" 포함)
        			alert("휴대전화번호 형식이 잘못되었습니다.");
        			Tap02.edt_USR_MPNO_3.setFocus();
        			return;
        		}
        	}
        	
        	var param = "MB_ID=" + Tap02.edt_MB_ID.value
        			+ " NA_TRPL_C=" + Tap02.edt_NA_TRPL_C.value
        			+ " BIRTH=" + Tap02.edt_BIRTH.value
        			+ " USR_MPNO=" + Tap02.cbo_USR_MPNO_1.value + Tap02.edt_USR_MPNO_2.value + Tap02.edt_USR_MPNO_3.value;
        	
        	var sSvcID        = "sendSmsPw";
        	var sURL          = "svc::rest/pt/sendSmsCertNumPw";
        	var sInDatasets   = "";
        	var sOutDatasets  = "";
        	var sArgument     =  param;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /* 비밀번호찾기 > 비밀번호초기화 */
        this.btn_MB_PW_onclick = function(obj,e)
        {
        	var Tap02 = this.tab_search.tabpage2.div_search;
        	
        	if (!Tap02.edt_MB_ID.value) {
        		alert("회원ID를 입력해 주세요.");
        		Tap02.edt_MB_ID.setFocus();
        		return;
        	} else if (!Tap02.edt_NA_TRPL_C.value) {
        		alert("거래처코드를 입력해 주세요.");
        		Tap02.edt_NA_TRPL_C.setFocus();
        		return;
        	} else if (!Tap02.edt_CERT_NUM.value || Tap02.edt_CERT_NUM.value.length != 6) {
        		alert("인증번호 6자리를 입력해 주세요.");
        		Tap02.edt_CERT_NUM.setFocus();
        		return;
        	}
        	
        	var param = "MB_ID=" + Tap02.edt_MB_ID.value
        			+ " NA_TRPL_C=" + Tap02.edt_NA_TRPL_C.value
        			+ " CERT_NUM=" + Tap02.edt_CERT_NUM.value;
        	
        	Tap02.edt_CERT_NUM.set_value(""); // 인증번호 삭제
        	
        	var sSvcID        = "sendMbPw";
        	var sURL          = "svc::rest/pt/usrinf/sendMbPw";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_user=ds_user";
        	var sArgument     = param;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /* 콜백메소드 */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		switch (ErrorCode) {
        			case -2: alert(ErrorMsg); break;
        			default: this.gfn_getMessage("alert", ErrorMsg);
        		}
        		return;
        	}
        	
        	if (svcID == "getMbId") {
        		if (this.ds_user.rowcount == 0) {
        			this.gfn_getMessage("alert", "error.message.noUser");
        			return;
        		}
        		this.tab_search.tabpage1.div_search.cbo_MB_ID.set_index(0);
        		alert("조회된 고객님의 아이디는 [" + this.ds_user.rowcount + "]개 입니다.");
        	} else if (svcID == "sendMbPw") {
        		alert("고객님의 비밀번호가 [" + this.ds_user.getColumn(0, "MB_PW") + "]으로 초기화 되었습니다.");
        	} else if (svcID == "sendSmsPw") {
        		this.tab_search.tabpage2.div_search.edt_CERT_NUM.set_value(""); // 인증번호 삭제
        		this.tab_search.tabpage2.div_search.edt_CERT_NUM.setFocus();
        		alert("고객님의 휴대전화번호로 인증번호가 전송되었습니다.");
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.tab_search.addEventHandler("onchanged", this.tab_search_onchanged, this);
            this.tab_search.tabpage1.addEventHandler("onclick", this.tab_search_tabpage1_onclick, this);
            this.tab_search.tabpage1.div_search.btn_MB_ID.addEventHandler("onclick", this.btn_MB_ID_onclick, this);
            this.tab_search.tabpage2.addEventHandler("onclick", this.tab_search_tabpage2_onclick, this);
            this.tab_search.tabpage2.div_search.btn_MB_PW.addEventHandler("onclick", this.btn_MB_PW_onclick, this);
            this.tab_search.tabpage2.div_search.btn_sendSms_pw.addEventHandler("onclick", this.btn_sendSms_pw_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_5120.xfdl", true);

       
    };
}
)();
