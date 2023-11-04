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
                this.set_name("OMG_DS_SC_1212");
                this.set_titletext("상담신청상세 (신청자)");
                this._setFormPosition(0,0,803,589);
            }
            this.style.set_color("#999999ff");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_in", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_receive", this);
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_hp", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_C_EXPL\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_ctrSts", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_C_EXPL\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_save", "absolute", null, "0", "41", "21", "82", null, this);
            obj.set_taborder("132");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "0", "65", "21", "15", null, this);
            obj.set_taborder("133");
            obj.set_text("이전화면");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "15", "41", "110", "29", null, null, this);
            obj.set_taborder("146");
            obj.set_text("입력결과");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "15", "69", "110", "29", null, null, this);
            obj.set_taborder("147");
            obj.set_text("전송상태");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "124", "41", null, "29", "15", null, this);
            obj.set_taborder("152");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "124", "69", null, "29", "15", null, this);
            obj.set_taborder("153");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_tmsSts", "absolute", "131", "73", "160", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("160");
            obj.set_direction("vertical");
            obj.set_cssclass("rdo_WF_Essential");
            obj.set_innerdataset("@ds_ctrSts");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_codecolumn("SIMP_C");
            obj.set_enable("false");
            obj.set_index("-1");

            obj = new Button("btn_popup", "absolute", null, "114", "65", "21", "15", null, this);
            obj.set_taborder("183");
            obj.set_text("신청내역");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "521", "73", null, "21", "19", null, this);
            obj.set_taborder("188");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "788", "0", "15", "589", null, null, this);
            obj.set_taborder("194");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            obj.set_text("15");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "15", "114", "301", "21", null, null, this);
            obj.set_taborder("196");
            obj.set_text("수신내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "15", "21", "871", "20", null, null, this);
            obj.set_taborder("198");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "15", "138", null, "123", "15", null, this);
            obj.set_taborder("200");
            obj.set_binddataset("ds_receive");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"365\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"0\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"진행상태\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"날짜\"/><Cell col=\"3\" text=\"실시간 통지방법\"/><Cell col=\"4\" text=\"등록자\"/><Cell col=\"5\"/></Band><Band id=\"body\"><Cell text=\"bind:STS_NM\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:TINM\" tooltiptext=\"bind:TINM\"/><Cell col=\"2\" text=\"bind:RQ_DT\" mask=\"####-##-##\"/><Cell col=\"3\" text=\"bind:RLTM_NTC_CHK\"/><Cell col=\"4\" text=\"bind:RGM\"/><Cell col=\"5\" text=\"bind:CNTN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "15", "272", "110", "78", null, null, this);
            obj.set_taborder("202");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "124", "272", null, "78", "15", null, this);
            obj.set_taborder("203");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_cntn", "absolute", "128", "276", null, "70", "19", null, this);
            obj.set_taborder("204");
            obj.set_wordwrap("char");
            obj.set_readonly("true");
            obj.style.set_border("0 solid #bfbfbfff");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "15", "366", "301", "21", null, null, this);
            obj.set_taborder("205");
            obj.set_text("통보내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "15", "390", "110", "29", null, null, this);
            obj.set_taborder("206");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "15", "418", "110", "122", null, null, this);
            obj.set_taborder("207");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "124", "390", null, "29", "15", null, this);
            obj.set_taborder("208");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "124", "418", null, "122", "15", null, this);
            obj.set_taborder("209");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_tinm", "absolute", "128", "394", null, "21", "19", null, this);
            obj.set_taborder("213");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("128");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_cntn01", "absolute", "128", "422", null, "114", "19", null, this);
            obj.set_taborder("214");
            obj.set_wordwrap("char");
            obj.style.set_padding("2 5 0 5");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("2048");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "15", "539", "110", "29", null, null, this);
            obj.set_taborder("217");
            obj.set_text("담당바이어");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "124", "539", null, "29", "15", null, this);
            obj.set_taborder("218");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "704", "539", "10", "29", null, null, this);
            obj.set_taborder("219");
            obj.set_text("연락처");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_buyerAtel", "absolute", "721", "543", "10", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("222");
            obj.set_innerdataset("@ds_hp");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_codecolumn("SIMP_C");
            obj.set_readonly("true");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.set_visible("false");
            obj.set_index("-1");

            obj = new Static("Static09", "absolute", "753", "543", "9", "21", null, null, this);
            obj.set_taborder("223");
            obj.set_text("-");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "734", "543", "9", "21", null, null, this);
            obj.set_taborder("224");
            obj.set_text("-");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "408", "69", "110", "29", null, null, this);
            obj.set_taborder("156");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_sum00", "absolute", "128", "46", "86", "21", null, null, this);
            obj.set_taborder("235");
            obj.set_displaynulltext("0");
            obj.style.setStyleValue("align", "disabled", "right middle");
            obj.set_readonly("true");
            obj.set_cssclass("msk_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "220", "46", "28", "21", null, null, this);
            obj.set_taborder("236");
            obj.set_text("점");
            this.addChild(obj.name, obj);

            obj = new Edit("etd_buyerHtel", "absolute", "743", "543", "10", "21", null, null, this);
            obj.set_taborder("244");
            obj.set_maxlength("4");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("etd_buyerStel", "absolute", "762", "543", "10", "21", null, null, this);
            obj.set_taborder("245");
            obj.set_maxlength("4");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_send", "absolute", null, "366", "65", "21", "15", null, this);
            obj.set_taborder("246");
            obj.set_text("발송");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "1.49%", "569", null, "20", "1.87%", null, this);
            obj.set_taborder("247");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_buyerNm", "absolute", "128", "543", "277", "21", null, null, this);
            obj.set_taborder("248");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Button("btn_bookmark", "absolute", "15", "0", "15", "21", null, null, this);
            obj.set_taborder("249");
            obj.set_cssclass("btn_WF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Static("sta_location", "absolute", "33", "0", "185", "21", null, null, this);
            obj.set_taborder("250");
            obj.set_text("진행결과보기 > 상세");
            obj.set_cssclass("sta_WF_Location");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "15", "98", "871", "20", null, null, this);
            obj.set_taborder("251");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "15", "350", "871", "20", null, null, this);
            obj.set_taborder("252");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "413", "539", "110", "29", null, null, this);
            obj.set_taborder("253");
            obj.set_text("연락처");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("etd_buyerOAtel", "absolute", "527", "543", "48", "21", null, null, this);
            obj.set_taborder("254");
            obj.set_readonly("true");
            obj.set_maxlength("4");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "578", "543", "9", "21", null, null, this);
            obj.set_taborder("255");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Edit("etd_buyerOHtel", "absolute", "589", "543", "48", "21", null, null, this);
            obj.set_taborder("256");
            obj.set_readonly("true");
            obj.set_maxlength("4");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "640", "543", "9", "21", null, null, this);
            obj.set_taborder("257");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Edit("etd_buyerOStel", "absolute", "650", "543", "48", "21", null, null, this);
            obj.set_taborder("258");
            obj.set_readonly("true");
            obj.set_maxlength("4");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 589, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("상담신청상세 (신청자)");
            		p.style.set_color("#999999ff");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item8","edt_buyerNm","value","ds_in","BUYER_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","mae_sum00","value","ds_in","EVL_HDNGCN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","Edit01","value","ds_in","STS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_1212.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_1212.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); // 공통
        	
        	// 공통코드 가져오기
        	var param = [
        		{ code: "HP", dsName: "ds_hp" }, // 휴대전화번호
        		{ code: "CTR_STS", dsName: "ds_ctrSts" } // 진행상태
        	];
        	this.gfn_setPortalCommonCode(param);
        	
        	this.search();
        }

        // 공통코드 가져오기 - 콜백
        this.fn_commonAfterOnload = function()
        {
        	//this.cbo_buyerAtel.set_index(this.ds_hp.findRow("SIMP_C", "010")); // 휴대전화번호 (기본값: 010)
        	
        	// 진행상태 라디오 값 설정 (1: 신청, 2: 보완, 3: 재신청, 4: 접수, 5: 거절, 6: 완료)
        	for (var i = this.ds_ctrSts.rowcount - 1; 0 <= i; i--) {
        		if ("1246".indexOf(this.ds_ctrSts.getColumn(i, "SIMP_C")) > -1) {
        			this.ds_ctrSts.deleteRow(i);
        		}
        	}
        	//this.rdo_tmsSts.set_index(0);
        }

        // 상세 조회
        this.search = function()
        {
        	var CSLT_RQ_NO = this.gfn_isEmpty(this.parent.tabpage1.ds_copy.getColumn(this.parent.tabpage1.ds_copy.rowposition, "CSLT_RQ_NO"));
        	
        	var sParams = " CSLT_RQ_NO=" + CSLT_RQ_NO;
        	
        	var sSvcID        = "search";
        	var sURL          = "svc::rest/bt/rqBrk/retrieveRqBrkDscList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_in=ds_in ds_receive=ds_receive";
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}
        	
        	if (svcID == "update") {
        		alert("정상적으로 처리되었습니다.");
        		this.parent.parent.fn_requestSum(); // 목록 조회
        		this.btn_close_onclick();
        	} else if (svcID == "send") {
        		alert("통보내역이 발송되었습니다.");
        		this.reload(); // 상세 새로고침
        	} else if (svcID == "search") {
        		if (this.ds_in.rowcount == 0) {
        			this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			return;
        		}
        		
        		// 바이어 전화번호 세팅(기본 사무소, 부 핸드폰)
        		var buyerTel;
        		if (!this.gfn_isNull(this.ds_in.getColumn(0,"BUYER_OFFICE_TELNO"))) {
        			buyerTel = this.ds_in.getColumn(0, "BUYER_OFFICE_TELNO");
        		} else {
        			buyerTel = this.ds_in.getColumn(0, "BUYER_MPNO");
        		}
        		this.fn_telNo(buyerTel, this.etd_buyerOAtel, this.etd_buyerOHtel, this.etd_buyerOStel);
        		
        		// 상담 정보
        		var sts = this.ds_in.getColumn(0, "STS"); // 진행상태 (1: 신청, 2: 보완, 3: 재신청, 4: 접수, 5: 거절, 6: 완료)
        		var BUYER_ENO = this.ds_in.getColumn(0, "BUYER_ENO"); // 담당바이어ID
        		
        		if (!this.gfn_isNull(BUYER_ENO)) { // 담당자가 배정된 경우
        			if (sts == "2") { // 보완 상태인 경우
        				this.btn_save.set_visible(true); // 저장 가능
        				this.rdo_tmsSts.set_enable(true);
        			}
        			if (sts != "5") { // 거절 상태가 아닌 경우
        				this.btn_send.set_visible(true); // 통보내역 발송 가능
        			}
        		}
        	}
        }

        this.btn_save_onclick = function(obj,e)
        {
        	this.update();
        }

        // 저장
        this.update = function()
        {
        	if (!this.fn_validationCheck()) {
        		return;
        	} else if (!confirm("저장하시겠습니까?")) {
        		return;
        	}
        	
        	var buyer_mpno = this.gfn_nullToEmpty(this.cbo_buyerAtel.value)
        					+ this.gfn_nullToEmpty(this.etd_buyerHtel.value)
        					+ this.gfn_nullToEmpty(this.etd_buyerStel.value);
        	
        	var sParams = " CSLT_RQ_NO=" + this.ds_in.getColumn(0, "CSLT_RQ_NO")
        				+ " STS=" + this.rdo_tmsSts.value
        				+ " TINM=" + encodeURIComponent(this.edt_tinm.value) // encode
        				+ " CNTN=" + encodeURIComponent(this.txa_cntn01.value); // encode
        	
        	var sSvcID        = "update";
        	var sURL          = "svc::rest/bt/rqBrk/saveRqBrkNtc";
        	var sInDatasets   = "";
        	var sOutDatasets  = "";	
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        this.fn_validationCheck = function()
        {
        	if (this.gfn_isNull(this.rdo_tmsSts.value)) {
        		alert("전송상태를 선택하세요.");
        		return false;
        	}
        	
        	if (this.gfn_isNull(this.edt_tinm.value)) {
        		alert("통보내역 제목을 입력하세요.");
        		this.edt_tinm.setFocus();
        		return false;
        	}
        	
        	if (this.gfn_isNull(this.txa_cntn01.value)) {
        		alert("통보내역 내용을 입력하세요.");
        		this.txa_cntn01.setFocus();
        		return false;
        	}
        	
        	return true;
        }

        this.fn_validationCheck_send = function()
        {
        	if (this.gfn_isNull(this.edt_tinm.value)) {
        		alert("통보내역 제목을 입력하세요.");
        		this.edt_tinm.setFocus();
        		return false;
        	}
        	
        	if (this.gfn_isNull(this.txa_cntn01.value)) {
        		alert("통보내역 내용을 입력하세요.");
        		this.txa_cntn01.setFocus();
        		return false;
        	}
        	
        	return true;
        }

        // 수신내역 클릭 시, 내용 출력
        this.ds_receive_onrowposchanged = function(obj,e)
        {
        	this.txa_cntn.set_value(obj.getColumn(e.newrow, "CNTN"));
        }

        // 신청내역
        this.btn_popup_onclick = function(obj,e)
        {
        	var CSLT_RQ_NO = this.ds_in.getColumn(0, "CSLT_RQ_NO");
        	var CSLT_DSC = this.ds_in.getColumn(0, "CSLT_DSC");
        	var oArg = { paramMode: "S", CSLT_RQ_NO: CSLT_RQ_NO , CSLT_DSC: CSLT_DSC};
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";
        	if (CSLT_DSC == "101") {
        		this.gfn_openPopup("OMG_DS_SC_1113", "OMG.BT::OMG_DS_SC_1113.xfdl", oArg, sOption, sPopupCallBack);
        	} else if (CSLT_DSC == "102") {
        		this.gfn_openPopup("OMG_DS_SC_1114", "OMG.BT::OMG_DS_SC_1114.xfdl", oArg, sOption, sPopupCallBack);
        	} else if (CSLT_DSC == "201" || CSLT_DSC == "202" || CSLT_DSC == "203") {
        		this.gfn_openPopup("OMG_DS_SC_2113", "OMG.BT::OMG_DS_SC_2113.xfdl", oArg, sOption, sPopupCallBack);
        	}
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	/*if (strId == "OMG_DS_SC_1113" && strVal == "SUCCESS") {
        		this.reload(); // 상세 새로고침
        	}*/
        }

        // 상담신청내역 목록 화면
        this.btn_close_onclick = function(obj,e)
        {
        	this.parent.set_tabindex(0); // tabpage1 show
        	
        	this.ds_in.clearData();
        	this.ds_receive.clearData();
        }

        // 전화 번호 타입 변경
        this.fn_telNo = function(strTelNo,strVal1,strVal2,strVal3)
        {
        	if (strTelNo.length > 8) {
        		var RegPhonNum = ""; 
        		
        		// 문자열 길이에 따른 값 처리
        		if (strTelNo.length == 9) {
        			RegPhonNum = /([0-9]{2})([0-9]{3})([0-9]+)/; 
        		} else if (strTelNo.length == 10) {
        			if (strTelNo.substring(0,2) == "02") {
        				RegPhonNum = /([0-9]{2})([0-9]{4})([0-9]+)/; 
        			} else {
        				RegPhonNum = /([0-9]{3})([0-9]{3})([0-9]+)/;
        			}
        		} else if (strTelNo.length > 10) {
        			RegPhonNum = /([0-9]{3})([0-9]{4})([0-9]+)/; 
        		}
        		
        		strTelNo = strTelNo.replace(RegPhonNum, "$1-$2-$3"); 
        		
        		var naTrplCVal = strTelNo.split("-");
        		
        		strVal1.set_value(naTrplCVal[0]);
        		strVal2.set_value(naTrplCVal[1]);
        		strVal3.set_value(naTrplCVal[2]);
        	}
        }

        // 발송
        this.btn_send_onclick = function(obj,e)
        {
        	if (!this.fn_validationCheck_send()) {
        		return;
        	}
        	if (!confirm("발송하시겠습니까?")) {
        		return;
        	}
        	
        	var sParams = " CSLT_RQ_NO=" + this.ds_in.getColumn(0, "CSLT_RQ_NO")
        				+ " TINM=" + encodeURIComponent(this.edt_tinm.value) // encode
        				+ " CNTN=" + encodeURIComponent(this.txa_cntn01.value); // encode
        	
        	var sSvcID        = "send";
        	var sURL          = "svc::rest/bt/rqBrk/saveRqBrkSend";
        	var sInDatasets   = "";
        	var sOutDatasets  = "";
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_receive.addEventHandler("onrowposchanged", this.ds_receive_onrowposchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_popup.addEventHandler("onclick", this.btn_popup_onclick, this);
            this.btn_send.addEventHandler("onclick", this.btn_send_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_1212.xfdl", true);

       
    };
}
)();
