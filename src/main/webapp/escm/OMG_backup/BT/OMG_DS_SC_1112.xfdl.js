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
                this.set_name("OMG_DS_SC_1112");
                this.set_titletext("상담신청상세");
                this._setFormPosition(0,0,803,642);
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

            obj = new Dataset("ds_mon", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"codecolumn\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"datacolumn\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">-선택-</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\"> 1 개월</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\"> 2 개월</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\"> 3 개월</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\"> 4 개월</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\"> 5 개월</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\"> 6 개월</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\"> 7 개월</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\"> 8 개월</Col></Row><Row><Col id=\"codecolumn\">9</Col><Col id=\"datacolumn\"> 9 개월</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10 개월</Col></Row><Row><Col id=\"codecolumn\">11</Col><Col id=\"datacolumn\">11 개월</Col></Row><Row><Col id=\"codecolumn\">12</Col><Col id=\"datacolumn\">12 개월</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_save", "absolute", null, "15", "41", "21", "15", null, this);
            obj.set_taborder("132");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "15", "44", "110", "29", null, null, this);
            obj.set_taborder("146");
            obj.set_text("입력결과");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "15", "72", "110", "29", null, null, this);
            obj.set_taborder("147");
            obj.set_text("전송상태");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "124", "44", "664", "29", null, null, this);
            obj.set_taborder("152");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "124", "72", "664", "29", null, null, this);
            obj.set_taborder("153");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_tmsSts", "absolute", "132", "76", "277", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("160");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_direction("vertical");
            obj.set_cssclass("rdo_WF_Essential");
            obj.set_innerdataset("@ds_ctrSts");
            obj.set_enable("false");
            obj.set_index("-1");

            obj = new Button("btn_popup", "absolute", null, "148", "65", "21", "15", null, this);
            obj.set_taborder("183");
            obj.set_text("신청내역");
            this.addChild(obj.name, obj);

            obj = new Edit("edt", "absolute", "529", "48", "215", "21", null, null, this);
            obj.set_taborder("188");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "788", "27", "15", "900", null, null, this);
            obj.set_taborder("194");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "17", "149", "301", "21", null, null, this);
            obj.set_taborder("196");
            obj.set_text("수신내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "15", "0", "788", "15", null, null, this);
            obj.set_taborder("198");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_receive", "absolute", "15", "174", null, "123", "15", null, this);
            obj.set_taborder("200");
            obj.set_binddataset("ds_receive");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"373\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"0\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"진행상태\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"날짜\"/><Cell col=\"3\" text=\"실시간 통지방법\"/><Cell col=\"4\" text=\"등록자\"/><Cell col=\"5\"/></Band><Band id=\"body\"><Cell text=\"bind:STS_NM\"/><Cell col=\"1\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:TINM\" tooltiptext=\"bind:TINM\"/><Cell col=\"2\" text=\"bind:RQ_DT\" mask=\"####-##-##\"/><Cell col=\"3\" text=\"bind:RLTM_NTC_CHK\"/><Cell col=\"4\" text=\"bind:RGM\"/><Cell col=\"5\" text=\"bind:CNTN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "15", "307", "110", "78", null, null, this);
            obj.set_taborder("202");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "124", "307", "664", "78", null, null, this);
            obj.set_taborder("203");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_cntn", "absolute", "129", "311", "655", "70", null, null, this);
            obj.set_taborder("204");
            obj.set_wordwrap("char");
            obj.style.set_background("#ffffffff");
            obj.style.setStyleValue("background", "disabled", "#ecececff");
            obj.style.setStyleValue("border", "readonly", "0 solid #bfbfbfff");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "17", "401", "301", "21", null, null, this);
            obj.set_taborder("205");
            obj.set_text("통보내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "15", "426", "110", "29", null, null, this);
            obj.set_taborder("206");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "15", "454", "110", "122", null, null, this);
            obj.set_taborder("207");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "124", "426", "664", "29", null, null, this);
            obj.set_taborder("208");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "124", "454", "664", "122", null, null, this);
            obj.set_taborder("209");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_tinm", "absolute", "128", "430", "656", "21", null, null, this);
            obj.set_taborder("213");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("64");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_cntn01", "absolute", "128", "458", "656", "114", null, null, this);
            obj.set_taborder("214");
            obj.set_wordwrap("char");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("2048");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "15", "575", "110", "29", null, null, this);
            obj.set_taborder("215");
            obj.set_text("실시간통지");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "124", "575", "664", "29", null, null, this);
            obj.set_taborder("216");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "15", "603", "110", "29", null, null, this);
            obj.set_taborder("217");
            obj.set_text("담당바이어");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "124", "603", "664", "29", null, null, this);
            obj.set_taborder("218");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "423", "603", "110", "29", null, null, this);
            obj.set_taborder("219");
            obj.set_text("연락처");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "648", "607", "9", "21", null, null, this);
            obj.set_taborder("223");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "589", "607", "9", "21", null, null, this);
            obj.set_taborder("224");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_buyerNm", "absolute", "128", "607", "292", "21", null, null, this);
            obj.set_taborder("227");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_rltmNtcSms", "absolute", "141", "579", "54", "21", null, null, this);
            obj.set_taborder("230");
            obj.set_text("SMS");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_value("1");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_rltmNtcEmail", "absolute", "430", "579", "66", "21", null, null, this);
            obj.set_taborder("231");
            obj.set_text("E-Mail");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_chrrEmail", "absolute", "495", "579", "250", "21", null, null, this);
            obj.set_taborder("233");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "416", "44", "110", "29", null, null, this);
            obj.set_taborder("156");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_sum00", "absolute", "130", "49", "86", "21", null, null, this);
            obj.set_taborder("235");
            obj.set_displaynulltext("0");
            obj.set_readonly("true");
            obj.set_cssclass("msk_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "222", "49", "28", "21", null, null, this);
            obj.set_taborder("236");
            obj.set_text("점");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_chrrMpsvno", "absolute", "198", "579", "51", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("241");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_innerdataset("@ds_hp");
            obj.set_readonly("true");
            obj.set_cssclass("cmb_WF_Readonly");
            obj.set_index("-1");

            obj = new Static("Static03", "absolute", "251", "580", "9", "21", null, null, this);
            obj.set_taborder("242");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "310", "580", "9", "21", null, null, this);
            obj.set_taborder("243");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Edit("etd_buyerHtel", "absolute", "598", "607", "48", "21", null, null, this);
            obj.set_taborder("244");
            obj.set_maxlength("4");
            obj.set_enable("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("etd_buyerStel", "absolute", "657", "607", "48", "21", null, null, this);
            obj.set_taborder("245");
            obj.set_maxlength("4");
            obj.set_enable("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "0", "35", "15", "900", null, null, this);
            obj.set_taborder("247");
            obj.set_visible("false");
            obj.style.set_background("#00ffff66");
            this.addChild(obj.name, obj);

            obj = new Button("btn_send", "absolute", null, "400", "65", "21", "15", null, this);
            obj.set_taborder("251");
            obj.set_text("발송");
            obj.set_enable("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "664", "36", null, "8", "36", null, this);
            obj.set_taborder("253");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "416", "72", "110", "29", null, null, this);
            obj.set_taborder("255");
            obj.set_text("거절기간(개월)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "608", "75", "176", "21", null, null, this);
            obj.set_taborder("256");
            obj.set_text("(거절일 부터 계약상담 불가)");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_mon", "absolute", "529", "77", "71", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("258");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_innerdataset("@ds_mon");
            obj.set_enable("false");
            obj.set_index("-1");

            obj = new Button("btn_cncl_rjct", "absolute", null, "15", "73", "21", "60", null, this);
            obj.set_taborder("259");
            obj.set_text("거절취소");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("mae_chrrMphno", "absolute", "260", "579", "48", "21", null, null, this);
            obj.set_taborder("260");
            obj.set_readonly("true");
            obj.set_maxlength("4");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Edit("mae_chrrMpsqno", "absolute", "319", "579", "48", "21", null, null, this);
            obj.set_taborder("261");
            obj.set_readonly("true");
            obj.set_maxlength("4");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dft", "absolute", null, "400", "100", "21", "86", null, this);
            obj.set_taborder("262");
            obj.set_text("기본멘트 입력");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("etd_buyerOAtel", "absolute", "538", "607", "48", "21", null, null, this);
            obj.set_taborder("263");
            obj.set_readonly("true");
            obj.set_maxlength("4");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 642, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("상담신청상세");
            		p.style.set_color("#999999ff");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item7","edt_chrrEmail","value","ds_in","CHRR_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","edt_buyerNm","value","ds_in","BUYER_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","mae_sum00","value","ds_in","EVL_HDNGCN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","edt","value","ds_in","STS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_1112.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_1112.xfdl", function() {
        //include "lib::comLib.xjs";

        
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
        	//this.cbo_chrrMpsvno.set_index(0);
        	
        	this.cbo_mon.set_index(0);
        	
        	// 진행상태 라디오 값 설정 (1: 신청, 2: 보완, 3: 재신청, 4: 접수, 5: 거절, 6: 완료)
        	for (var i = this.ds_ctrSts.rowcount - 1; 0 <= i; i--) {
        		if ("13".indexOf(this.ds_ctrSts.getColumn(i, "SIMP_C")) > -1) {
        			this.ds_ctrSts.deleteRow(i);
        		}
        	}
        	//this.rdo_tmsSts.set_index(0);
        }

        // 상세 조회
        this.search = function()
        {
        	var fv_CSLT_RQ_NO = this.gfn_isEmpty(this.getOwnerFrame().CSLT_RQ_NO);
        	
        	var sSvcID        = "search";
        	var sURL          = "svc::rest/bt/rq/retrieveCsltRqDscList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_in=ds_in ds_receive=ds_receive";
        	var sArgument     = "cslt_rq_no=" + fv_CSLT_RQ_NO;
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
        		this.gfn_getMessage("alert", "result.message.save.success");
        		this.close("SUCCESS");
        		return;
        	} else if (svcID == "send") {
        		alert("통보내역이 발송되었습니다.");
        		this.reload(); // 상세 새로고침
        		return;
        	} else if(svcID == "search") {
        		if (this.ds_in.rowcount == 0) {
        			this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			return;
        		}
        		
        		var chrr_mpno = this.ds_in.getColumn(0, "CHRR_MPNO");
        		if (chrr_mpno) {
         			this.fn_telNo(chrr_mpno, this.cbo_chrrMpsvno, this.mae_chrrMphno, this.mae_chrrMpsqno);
         		}
         		
         		var buyer_mpno;
        		if (!this.gfn_isNull(this.ds_in.getColumn(0,"BUYER_OFFICE_TELNO"))) {
        			buyer_mpno = this.ds_in.getColumn(0, "BUYER_OFFICE_TELNO");
        		} else {
        			buyer_mpno = this.ds_in.getColumn(0, "BUYER_MPNO");
        		}
         		
        		if (buyer_mpno) {
         			this.fn_telNo(buyer_mpno, this.etd_buyerOAtel, this.etd_buyerHtel, this.etd_buyerStel);
         		}
         		
        		var sts =  this.ds_in.getColumn(0, "STS"); // 진행상태 (1: 신청, 2: 보완, 3: 재신청, 4: 접수, 5: 거절, 6: 완료)
        		var BUYER_ENO = this.ds_in.getColumn(0, "BUYER_ENO"); // 담당바이어ID
        		
        		if (BUYER_ENO && BUYER_ENO == application.gv_userId) { // 담당바이어인 경우
        			// 저장 버튼 표시, 전송상태 활성화
        			this.btn_save.set_visible(true);
        			this.rdo_tmsSts.set_enable(true);
        			this.btn_dft.set_visible(true);
        			
        			// 발송 버튼 표시 (최초 답변은 반드시 저장을 통해 진행상태를 변경해야 함)
        			if (sts != "1") { // 신청 상태가 아닌 경우
        				this.btn_send.set_visible(true);
        			}
        			
        			if (sts == "5") { // 거절 상태인 경우
        				this.btn_cncl_rjct.set_visible(true);
        			}
        		}
        		
        		// 진행상태 라디오 값 설정 - 현재상태 제거
        		for (var i = this.ds_ctrSts.rowcount - 1; 0 <= i; i--) {
        			if (sts == this.ds_ctrSts.getColumn(i, "SIMP_C")) {
        				this.ds_ctrSts.deleteRow(i);
        			}
        		}
        		
        		if (BUYER_ENO && BUYER_ENO == application.gv_userId) { // 담당자가 배정됐고, 로그인 사용자가 담당바이어인 경우
        			if (sts == "1" || sts == "3" || sts == "4") { // 신청, 재신청, 접수 상태인 경우
        				this.btn_save.set_visible(true); // 저장 가능
        				this.rdo_tmsSts.set_enable(true);
        			}
        			if (sts != "1") { // 신청 상태가 아닌 경우 (최초 답변 시, 반드시 진행상태를 변경해야 함)
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
            var sts = this.rdo_tmsSts.value; 
            var mon = this.cbo_mon.value;
            
        	if (sts != '5') {
        		mon = '0';
        	}
        	if (!this.fn_validationCheck()) {
        		return;
        	}
        	if (!confirm("저장하시겠습니까?")) {
        		return;
        	}

        	var sParams = " CSLT_RQ_NO=" + this.ds_in.getColumn(0, "CSLT_RQ_NO")
        				+ " STS=" + this.rdo_tmsSts.value
        				+ " TINM=" + encodeURIComponent(this.edt_tinm.value) // encode
        				+ " CNTN=" + encodeURIComponent(this.txa_cntn01.value) // encode
        				+ " rltm_ntc_sms=" + this.chk_rltmNtcSms.value
        				+ " rltm_ntc_email=" + this.chk_rltmNtcEmail.value
        				+ " MON=" + mon 			
        				+ " REJECT_ALLOW=" + "N" 	
        				;  
        	
        	var sSvcID        = "update";
        	var sURL          = "svc::rest/bt/rq/saveCsltRqNtc";
        	var sInDatasets   = "";
        	var sOutDatasets  = "";
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        this.fn_validationCheck = function()
        {
            var sts = this.rdo_tmsSts.value; 
            var mon = this.cbo_mon.value;
         
        	if (this.gfn_isNull(this.rdo_tmsSts.value)) {
        		alert("전송 상태를 선택하세요.");
        		return false;
        	}
        	
        	// 거절일 경우.  거절기간 선택. 
        	if (sts == '5') {
        		if (mon == '0' || mon == '' || mon == 'undefined') {
        	        alert("거절 처리시 거절 기간을 선택하세요.");
        	        return false;
        		}
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

        this.fn_validationCheck_Send = function()
        {
        	if (this.gfn_isNull(this.edt_tinm.value)) {
        		alert("통보내역 제목을 입력하세요.");
        		this.edt_tinm.setFocus();
        		return false;
        	} else if (this.gfn_isNull(this.txa_cntn01.value)) {
        		alert("통보내역 내용을 입력하세요.");
        		this.txa_cntn01.setFocus();
        		return false;
        	}
        	
        	return true;
        }

        this.ds_receive_onrowposchanged = function(obj,e)
        {
        	this.txa_cntn.set_value(obj.getColumn(e.newrow, "CNTN"));
        }

        this.btn_popup_onclick = function(obj,e)
        {
        	var cslt_rq_no = this.ds_in.getColumn(0, "CSLT_RQ_NO");
        	var cslt_dsc = this.ds_in.getColumn(0, "CSLT_DSC");
        	var oArg = { paramMode: "S", CSLT_RQ_NO: cslt_rq_no , CSLT_DSC: cslt_dsc};
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter"; 
        	if (cslt_dsc == "101") {
        		this.gfn_openPopup("OMG_DS_SC_1113", "OMG.BT::OMG_DS_SC_1113.xfdl", oArg, sOption, sPopupCallBack);
        	} else if (cslt_dsc == "102") {
        		this.gfn_openPopup("OMG_DS_SC_1114", "OMG.BT::OMG_DS_SC_1114.xfdl", oArg, sOption, sPopupCallBack);
        	} else if (cslt_dsc == "201" || cslt_dsc == "202" || cslt_dsc == "203") {
        		this.gfn_openPopup("OMG_DS_SC_2113", "OMG.BT::OMG_DS_SC_2113.xfdl", oArg, sOption, sPopupCallBack);
        	}
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	if (strVal == "SUCCESS") {
        		this.reload(); // 상세 새로고침
        	}
        }

        //전화 번호 타입 변경
        this.fn_telNo = function(strTelNo,strVal1,strVal2,strVal3)
        {
        	if (strTelNo.length > 8) {
        		var RegPhonNum = ""; 

        		//문자열 길이에 따른 값 처리
        		if (strTelNo.length == 9) {
        			RegPhonNum = /([0-9]{2})([0-9]{3})([0-9]+)/; 
        		} else if (strTelNo.length == 10) {
        			if (strTelNo.substring(0, 2) == "02") {
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

        this.btn_send_onclick = function(obj,e)
        {
        	if (!this.fn_validationCheck_Send()) {
        		return;
        	} else if (!confirm("발송하시겠습니까?")) {
        		return;
        	}
        	
        	var sParams = " CSLT_RQ_NO=" + this.ds_in.getColumn(0, "CSLT_RQ_NO")
        				+ " TINM=" + encodeURIComponent(this.edt_tinm.value) // encode
        				+ " CNTN=" + encodeURIComponent(this.txa_cntn01.value) // encode
        				+ " rltm_ntc_sms=" + this.chk_rltmNtcSms.value
        				+ " rltm_ntc_email=" + this.chk_rltmNtcEmail.value;
        	
        	var sSvcID        = "send";
        	var sURL          = "svc::rest/bt/rq/saveCsltRqSend";
        	var sInDatasets   = "";
        	var sOutDatasets  = "";
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        this.btn_send_default_onclick = function(obj,e)
        {
        	var cntn = "안녕하십니까. 농협경제지주 마트상품부 MD ㅇㅇㅇ입니다.\n";
        	cntn += "먼저 저희 하나로마트에 대한 관심에 깊이 감사드립니다.\n";
        	cntn += "<<주요내용입력>>\n";
        	cntn += "귀사의 무궁한 발전을 기원합니다.\n";
        	cntn += "감사합니다.";
        	
        	this.txa_cntn01.set_value(cntn);
        }

        this.rdo_tmsSts_onitemchanged = function(obj,e)
        {
            var sts = this.rdo_tmsSts.value;
        	// alert(sts);
        	
        	/*
        	 * 거절일 경우.  거절기간 선택.
        	 */
        	 if (sts == '5') {
        		this.cbo_mon.set_enable(true);
        	 } else {
        	    this.cbo_mon.set_enable(false);
        	 }
        }

        this.btn_cncl_rjct_onclick = function(obj,e)
        {
            var sts =  this.ds_in.getColumn(0, "STS"); // 진행상태 (1: 신청, 2: 보완, 3: 재신청, 4: 접수, 5: 거절, 6: 완료)
            var mon = 0;
            
        	if (sts != '5') {
        		alert('거절상태만 취소가능합니다.');
        		return; 
        	}

        	if (!confirm("저장하시겠습니까?")) {
        		return;
        	}

        	var sParams = " CSLT_RQ_NO=" + this.ds_in.getColumn(0, "CSLT_RQ_NO")
        				+ " STS=" + '5'
        				+ " TINM=" + encodeURIComponent("거절 해제") // encode
        				+ " CNTN=" + encodeURIComponent("거절 업체 재등록 허용") // encode
        				+ " rltm_ntc_sms=" + this.chk_rltmNtcSms.value
        				+ " rltm_ntc_email=" + this.chk_rltmNtcEmail.value
        				+ " MON=" + mon
        				+ " REJECT_ALLOW=" + "Y"
        				;  
        	
        	var sSvcID        = "update";
        	var sURL          = "svc::rest/bt/rq/saveCsltRqNtc";
        	var sInDatasets   = "";
        	var sOutDatasets  = "";
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        this.btn_dft_onclick = function(obj,e)
        {
        	this.txa_cntn01.set_value("안녕하십니까. 농협경제지주 마트상품부 MD ㅇㅇㅇ입니다.\n먼저 저희 하나로마트에 대한 관심에 깊이 감사드립니다.\n<<주요내용입력>>\n귀사의 무궁한 발전을 기원합니다.\n감사합니다.");
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_receive.addEventHandler("onrowposchanged", this.ds_receive_onrowposchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.rdo_tmsSts.addEventHandler("onitemchanged", this.rdo_tmsSts_onitemchanged, this);
            this.btn_popup.addEventHandler("onclick", this.btn_popup_onclick, this);
            this.cbo_chrrMpsvno.addEventHandler("onitemchanged", this.Combo00_onitemchanged, this);
            this.btn_send.addEventHandler("onclick", this.btn_send_onclick, this);
            this.Static10.addEventHandler("onclick", this.Static10_onclick, this);
            this.btn_cncl_rjct.addEventHandler("onclick", this.btn_cncl_rjct_onclick, this);
            this.btn_dft.addEventHandler("onclick", this.btn_dft_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_1112.xfdl");

       
    };
}
)();
