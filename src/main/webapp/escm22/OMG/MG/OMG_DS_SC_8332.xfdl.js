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
                this.set_name("OMG_DS_SC_8332");
                this.set_titletext("혁신점포 공급업체 모니터링 등록");
                this._setFormPosition(0,0,1000,740);
            }
            this.style.set_border("2 solid #067394ff");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_param", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pageVO", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CURRENT_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CURRENT_PAGE\">0</Col><Col id=\"PAGE_SIZE\">0</Col><Col id=\"TOTAL_ROW_COUNT\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_survey", this);
            obj._setContents("<ColumnInfo><Column id=\"BSN_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBTITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"APL_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"APL_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RMK_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRGMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CMENO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_survey_q", this);
            obj._setContents("<ColumnInfo><Column id=\"BSN_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_Q_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_Q_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTION\" type=\"STRING\" size=\"256\"/><Column id=\"A_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RMK_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_que", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"value\">단답형</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"value\">복수형</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"value\">주관식</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"value\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_survey_a", this);
            obj._setContents("<ColumnInfo><Column id=\"SRV_Q_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_A_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ANSWER\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TXT_COL_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"TXT_ROW_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_ans_save", this);
            obj._setContents("<ColumnInfo><Column id=\"SRV_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_Q_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_A_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_GLN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static13", "absolute", "10", "119", "150", "29", null, null, this);
            obj.set_taborder("33");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "1017", "7", "73", "23", null, null, this);
            obj.set_taborder("15");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "1017", "32", "73", "23", null, null, this);
            obj.set_taborder("16");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03", "absolute", "1017", "57", "73", "23", null, null, this);
            obj.set_taborder("17");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "10", "120", "40", "10", null, this);
            obj.set_taborder("18");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_font("bold 11 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Div("div_monitor", "absolute", "10", "315", null, null, "10", "10", this);
            obj.set_taborder("30");
            obj.set_scrollbars("autovert");
            this.addChild(obj.name, obj);
            obj = new Static("sta_sample_no", "absolute", "0", "0", "40", "56", null, null, this.div_monitor);
            obj.set_taborder("0");
            obj.set_text("99");
            obj.set_visible("false");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 15 맑은 고딕,Gulim");
            this.div_monitor.addChild(obj.name, obj);
            obj = new Static("sta_sample_q", "absolute", "40", "0", null, "56", "400", null, this.div_monitor);
            obj.set_taborder("1");
            obj.set_text("질문내용");
            obj.set_visible("false");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("left middle");
            obj.style.set_font("bold 12 맑은 고딕,Gulim");
            obj.set_wordwrap("char");
            this.div_monitor.addChild(obj.name, obj);
            obj = new Radio("rdo_sample", "absolute", null, "0", "130", "56", "250", null, this.div_monitor);
            this.div_monitor.addChild(obj.name, obj);
            var rdo_sample_innerdataset = new Dataset("rdo_sample_innerdataset", this.div_monitor.rdo_sample);
            rdo_sample_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">있음</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">없음</Col></Row></Rows>");
            obj.set_innerdataset(rdo_sample_innerdataset);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            obj.set_visible("false");
            obj.style.set_textpadding("0 0 3 5");
            obj.style.set_font("12 맑은 고딕,Gulim");

            obj = new Div("div_sub", "absolute", "10", "60", null, "36", "10", null, this);
            obj.set_taborder("32");
            obj.style.set_background("#f6f6f6ff");
            obj.style.set_border("2 solid #808080ff,0 none #808080ff,1 solid #ddddddff,0 none #808080ff");
            this.addChild(obj.name, obj);
            obj = new Static("text_title", "absolute", "5", "3", "97", "28", null, null, this.div_sub);
            obj.set_taborder("0");
            obj.set_text("점검년월 :");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_padding("0 0 0 14");
            obj.style.set_font("bold 12 맑은 고딕, Gulim");
            this.div_sub.addChild(obj.name, obj);
            obj = new Static("sta_subtitle", "absolute", "105", "3", null, "28", "10", null, this.div_sub);
            obj.set_taborder("1");
            obj.style.set_padding("0 0 0 14");
            obj.style.set_font("bold 12 맑은 고딕, Gulim");
            obj.set_text("2019.01 ~ 2019.12");
            this.div_sub.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "150", "119", null, "29", "10", null, this);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Div("div_cntn", "absolute", "10", "111", null, "160", "10", null, this);
            obj.set_taborder("35");
            obj.style.set_background("#f6f6f6ff");
            obj.style.set_border("2 solid #808080ff,0 none #808080ff,1 solid #ddddddff,0 none #808080ff");
            this.addChild(obj.name, obj);
            obj = new Static("text_title", "absolute", "5", "50", "97", "60", null, null, this.div_cntn);
            obj.set_taborder("4");
            obj.set_text("설문\r\n안내문구");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_linespace("0");
            obj.style.set_padding("0 0 0 14");
            obj.style.set_font("bold 12 맑은 고딕, Gulim");
            this.div_cntn.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "105", "53", null, null, "10", "10", this.div_cntn);
            obj.set_taborder("5");
            obj.style.set_background("white");
            obj.style.set_border("1 solid #ddddddff");
            obj.style.set_padding("3 3 3 3");
            obj.style.set_align("left top");
            obj.style.set_font("11 맑은 고딕");
            obj.set_wordwrap("char");
            this.div_cntn.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "105", "3", null, "40", "10", null, this.div_cntn);
            obj.set_taborder("6");
            obj.style.set_align("center middle");
            obj.style.set_font("bold 13 맑은 고딕");
            this.div_cntn.addChild(obj.name, obj);

            obj = new Div("div_cntn00", "absolute", "10", "279", null, "36", "10", null, this);
            obj.set_taborder("36");
            obj.style.set_background("#f6f6f6ff");
            obj.style.set_border("2 solid #808080ff,0 none #808080ff,1 solid #ddddddff,0 none #808080ff");
            this.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0", "3", null, "28", "400", null, this.div_cntn00);
            obj.set_taborder("3");
            obj.set_text("점검항목");
            obj.style.set_align("center");
            obj.style.set_font("bold 12 맑은 고딕, Gulim");
            this.div_cntn00.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", null, "3", "130", "28", "250", null, this.div_cntn00);
            obj.set_taborder("4");
            obj.set_text("점검결과");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_align("center");
            obj.style.set_font("bold 12 맑은 고딕, Gulim");
            this.div_cntn00.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", null, "3", "230", "28", "0", null, this.div_cntn00);
            obj.set_taborder("5");
            obj.set_text("세부내용");
            obj.style.set_border("0 none #808080ff");
            obj.style.set_align("center");
            obj.style.set_font("bold 12 맑은 고딕, Gulim");
            this.div_cntn00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_monitor,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("30");
            		p.set_scrollbars("autovert");

            	}
            );
            this.div_monitor.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 36, this.div_sub,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("32");
            		p.style.set_background("#f6f6f6ff");
            		p.style.set_border("2 solid #808080ff,0 none #808080ff,1 solid #ddddddff,0 none #808080ff");

            	}
            );
            this.div_sub.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 160, this.div_cntn,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("35");
            		p.style.set_background("#f6f6f6ff");
            		p.style.set_border("2 solid #808080ff,0 none #808080ff,1 solid #ddddddff,0 none #808080ff");

            	}
            );
            this.div_cntn.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 36, this.div_cntn00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("36");
            		p.style.set_background("#f6f6f6ff");
            		p.style.set_border("2 solid #808080ff,0 none #808080ff,1 solid #ddddddff,0 none #808080ff");

            	}
            );
            this.div_cntn00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1000, 740, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_8331");
            		p.style.set_border("2 solid #067394ff");
            		p.set_titletext("혁신점포 공급업체 모니터링 등록");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_8332.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_8332.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.OMG_DS_SC_8331_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통

        	this.Edit01.set_value(this.getOwnerFrame().SRV_SEQ); // 설문 번호
        	this.div_cntn.Static00.set_text(this.getOwnerFrame().TITLE); // 제목
        	this.div_cntn.Static01.set_text(this.getOwnerFrame().INTRO); // 내용
        	this.div_sub.sta_subtitle.set_text(this.getOwnerFrame().SUBTITLE); // 점검연월
        	if (this.gfn_nullToEmpty(this.parent.TEST) == "Y" || application.gv_userType == '02') {
        		this.btn_save.set_enable(false);
        		this.btn_save.set_text("미리보기 중");
        	}

        	this.fn_searchSurvey();
        }

        this.fn_afterFormOnload = function()
        {

        }

        /* 콜백메소드 */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID == "retrieveSurveyqueList") {
        			if (ErrorCode == 0) {
        				this.question();
        			}
        		} else if (svcID =="insertSurveyanswerUser") {
        			if (ErrorCode == 0) {
        				this.alert("정상적으로 저장되었습니다.")
        				this.close();
        			}
        		}
        	}
        }

        /*
         * 질문 글자수에 따른 높이 계산
         * 기준 : bold 12 맑은 고딕,Gulim
         */
        this.fn_getRowHeight = function(str)
        {
        	var len = this.gfn_lengthByte(str);
        	var BASE = 28;
        	
        	if (len < 138) {
        		return BASE*2;
        	} else if (len < 210) {
        		return BASE*3;
        	} else if (len < 282) {
        		return BASE*4; // 컬럼길이상 여기까지
        	} else {
        		return BASE*5; // 예비
        	}
        }

        /*질문화면 뿌리기*/
        this.question = function()
        {	
        	var queCnt = this.ds_survey_q.rowcount; // 질문 갯수
        	var ansTotalCnt = this.ds_survey_a.rowcount; // 답변 총갯수
        	var bottom = 0; // 컴포넌트 시작 위치
        	var spacing = 0;
        	
        	this.setWaitCursor(true);
        	this.objCnt = queCnt;
        	this.callCnt = 0;

        	for (var i = 0; i < queCnt; i++) {
        		var QUESTION= this.ds_survey_q.getColumn(i, "QUESTION");
        		var SRV_Q_SEQ = this.ds_survey_q.getColumn(i, "SRV_Q_SEQ") * 1;
        		var A_TYPE = this.ds_survey_q.getColumn(i, "A_TYPE");
        		var qseq = SRV_Q_SEQ; // 질문 번호(index)
        		var q = i + 1; // 질문 넘버링 (1,2,3...)
        		var qH = this.fn_getRowHeight(QUESTION);

        		// init param : left top width height right bottom
        		
        		// 질문BG
        		if (q % 2 == 0) {
        			var objQueBg = new Static();
        			objQueBg.init("survey_bg"+qseq, "absolute", 0, bottom, null, qH, 0, null);
        			objQueBg.style.set_background("#f0f0f0ff");
        			this.div_monitor.addChild("survey_bg"+qseq, objQueBg);
        			objQueBg.show();
        		}
        		
        		// 질문번호
        		var objQueNo = new Static();
        		objQueNo.init("survey_no"+qseq, "absolute", 0, bottom, 40, qH, null, null);
        		objQueNo.style.set_font("bold 15 맑은 고딕,Gulim");
        		objQueNo.style.set_padding(0);
        		this.div_monitor.addChild("survey_no"+qseq, objQueNo);
        		objQueNo.style.set_align("center middle");
        		objQueNo.set_text(q);
        		objQueNo.show();
        		
        		// 질문내용
        		var objQue = new Static();
        		objQue.init("survey_que"+qseq, "absolute", 40, bottom, null, qH, 400, null);
        		objQue.style.set_font("bold 12 맑은 고딕,Gulim");
        		objQue.style.set_padding(0);
        		this.div_monitor.addChild("survey_que"+qseq, objQue);
        		objQue.set_wordwrap("char");
        		objQue.style.set_align("left middle");
        		objQue.set_text(QUESTION);
        		objQue.show();

        		if (A_TYPE == "S") { 		 //답변타입 : 단수 (라디오박스)
        			var dsResult = new Dataset;
        			dsResult.addColumn("value", "string");
        			dsResult.addColumn("code", "string");
        			this.div_monitor.addChild("ds_radio"+qseq, dsResult);

        			var ansCnt = 0; // 각 질문의 답변 갯수
        			var ttmp = 0; // 조회한 답변에서 단답형의 윗번호
        			
        			this.ds_survey_a.filter("SRV_Q_SEQ == " + SRV_Q_SEQ);
        			ansCnt = this.ds_survey_a.rowcount;
        			
        			for (var k = 0; k < ansCnt; k++) {
        				var ansSeq = this.ds_survey_a.getColumn(k, "SRV_A_SEQ"); // ans : 답변 내용
        				var ans = this.ds_survey_a.getColumn(k, "ANSWER"); // ans : 답변 내용
        				var input_type = this.ds_survey_a.getColumn(k, "INPUT_TYPE"); //라디오의 input_type
        				var col = this.ds_survey_a.getColumn(k, "TXT_COL_CNT"); //라디오의 input_type
        				var row = this.ds_survey_a.getColumn(k, "TXT_ROW_CNT"); //라디오의 input_type
         				dsResult.addRow();
         				dsResult.setColumn(k, "code", ansSeq);
          				dsResult.setColumn(k, "value", ans);
        			}
        			
        			// 라디오 선택(있음, 없음)
        			var objRadio = new Radio();
        			objRadio.init("ans_radio"+qseq, "absolute", null, bottom, 130, qH, 250, null);
        			objRadio.style.set_font("12 맑은 고딕,Gulim");
        			this.div_monitor.addChild("ans_radio"+qseq, objRadio);
        			objRadio.set_columncount(ansCnt);
        			objRadio.show();
        			objRadio.set_innerdataset("ds_radio"+qseq);
        			objRadio.set_codecolumn("code");
        			objRadio.set_datacolumn("value");
        			objRadio.addEventHandler("onitemchanged", this.fn_changed_radio, this);
         			
        			// 사업장 선택
         			/*
        			var objDiv = new Div();
        			objDiv.init("ans_gln"+qseq, "absolute", null, bottom+(qH/2)-15, 230, 30, 0, null);
        			this.div_monitor.addChild("ans_gln"+qseq, objDiv);
        			objDiv.set_url("common::SelectGLN.xfdl");
        			objDiv.set_visible(false);
        			objDiv.show();
        			*/
        			var objEdt = new Edit();
        			objEdt.init("ans_edt"+qseq, "absolute", null, bottom+(qH/2)-15, 230, 30, 0, null);
        			objEdt.style.set_font("12 맑은 고딕,Gulim");
        			this.div_monitor.addChild("ans_edt"+qseq, objEdt);
        			objEdt.set_displaynulltext("해당 사업장 및 세부내용");
        			objEdt.set_lengthunit("ascii");
        			objEdt.set_maxlength(1024);
        			objEdt.set_visible(false);
        			objEdt.show();
        			
        			// 구분선
        			var objSep = new Static();
        			objSep.init("survey_sep"+qseq, "absolute", 0, bottom+qH, null, 1, 0, null);
        			objSep.style.set_background("#ddddddff");
        			this.div_monitor.addChild("survey_sep"+qseq, objSep);
        			objSep.show();
        			
         			bottom = objSep.getOffsetBottom()+spacing;
        		}
        	}
        	
        	this.div_monitor.resetScroll();
        	this.setWaitCursor(false);
        }

        /*질문 조회*/
        this.fn_searchSurvey = function()
        {
        	var SRV_SEQ		= this.gfn_nullToEmpty(this.Edit01.value);			// 설문 번호

        	var sParam        = "SRV_SEQ=" + SRV_SEQ;
        	var sSvcID        = "retrieveSurveyqueList";
        	var sURL          = "svc::rest/pt/survey/retrieveSurveyqueList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_survey_q=ds_survey_q ds_survey_a=ds_survey_a";
        	var sArgument     = sParam;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        /*설문조사 저장*/
        this.btn_save_onclick = function(obj,e)
        {
        	if (this.fn_validationCheck()) {
        		if (confirm("저장하시겠습니까?")) {
        			var dsParams = "ds_ans_save=ds_ans_save:U";
        			var sParam = "SRV_SEQ="+this.Edit01.value;

        			var sSvcID        = "insertSurveyanswerUser";
        			var sURL          = "svc::rest/pt/survey/insertSurveyanswerUser";
        			var sInDatasets   = dsParams;
        			var sOutDatasets  = "";
        			var sArgument     = sParam;
        			var sCallbackFunc = "fn_callBack";
        			var sTranType     = "U"; // U:저장/삭제, S:조회

        			this.gfn_callService(sSvcID, sURL, sInDatasets , sOutDatasets , sArgument , sCallbackFunc, sTranType);
        		}
        	}
        }

        this.fn_validationCheck = function()
        {
        	this.ds_ans_save.clearData();
        	var ansTotalCnt = this.ds_survey_a.rowcount;
        	var ans_tmp = 0;
        	
        	var count = this.ds_survey_q.rowcount;
        	for (var j=0;j< count;j++) {
        		if (this.ds_survey_q.getColumn(j, "A_TYPE") == "S") {
        			var qseq = this.ds_survey_q.getColumn(j, "SRV_Q_SEQ");
        			var rdoAnswer = this.div_monitor["ans_radio"+qseq].value;
        			var glnAnswer;
        			if (rdoAnswer == "1") {
        				// glnAnswer = this.div_monitor["ans_gln"+qseq].fn_getSelectedGln(); // 사업장 선택
        				glnAnswer = this.div_monitor["ans_edt"+qseq].value;
        			} else {
        				glnAnswer = "없음";
        			}
        			
        			if (rdoAnswer == "") {
        				alert("모든 문항 체크해주세요.");
        				return false;
        			} else if (rdoAnswer == "1" && this.gfn_isNull(glnAnswer)) {
        				alert('질문의 대한 응답으로 "있음"을 선택했을 경우 해당 사업장을 검색하여 선택해주시기 바랍니다.');
        				return false;
        			} else {
        				this.ds_ans_save.addRow();
        				this.ds_ans_save.setColumn(ans_tmp, "SRV_SEQ", this.Edit01.value);
        				this.ds_ans_save.setColumn(ans_tmp, "SRV_Q_SEQ", qseq);
        				this.ds_ans_save.setColumn(ans_tmp, "SRV_A_SEQ", rdoAnswer);
        				this.ds_ans_save.setColumn(ans_tmp, "INPUT_TEXT", glnAnswer);
        				ans_tmp++;
        			}
        		}
        	}
        	return true;
        }

        this.fn_changed_radio = function(obj,e)
        {
        	// var divGln = this.div_monitor[obj.id.replace("ans_radio", "ans_gln")]; // 사업장선택
        	var divGln = this.div_monitor[obj.id.replace("ans_radio", "ans_edt")]; // 사업장 입력
        	if (obj.value == "1") {
        		// 있음
        		divGln.set_visible(true);
        	} else if (obj.value == "2") {
        		// 없음
        		divGln.set_visible(false);
        	}
        }

        this.objCnt = 0;
        this.callCnt = 0;
        this.fn_callParent = function()
        {
        	this.callCnt++;
        	if (this.callCnt >= this.objCnt) {
        		this.setWaitCursor(false);
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.OMG_DS_SC_8331_onload, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_8332.xfdl");

       
    };
}
)();
