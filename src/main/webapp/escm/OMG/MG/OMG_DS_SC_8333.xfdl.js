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
                this.set_name("OMG_DS_SC_8333");
                this.set_titletext("판매속보 설문조사 팝업");
                this._setFormPosition(0,0,1128,1015);
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
            obj._setContents("<ColumnInfo><Column id=\"SRV_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_Q_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_A_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_TEXT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Edit("Edit01", "absolute", "514", "15", "73", "23", null, null, this);
            obj.set_taborder("15");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "430", "12", "73", "23", null, null, this);
            obj.set_taborder("16");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03", "absolute", "320", "15", "73", "23", null, null, this);
            obj.set_taborder("17");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "12", "122", "41", "568", null, this);
            obj.set_taborder("18");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.style.set_font("bold 11 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "8", "52", null, "46", "10", null, this);
            obj.set_taborder("19");
            obj.style.set_align("center middle");
            obj.style.set_font("13 HY견고딕");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "8", "102", null, "142", "10", null, this);
            obj.set_taborder("20");
            obj.style.set_font("10 맑은 고딕");
            obj.getSetter("titletext").set("판매속보 설문조사 팝업");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "8", "369", null, "33", "10", null, this);
            obj.set_taborder("21");
            obj.style.set_background("#f6f6f6ff");
            obj.style.set_align("center middle");
            obj.style.set_font("10 HY견고딕");
            this.addChild(obj.name, obj);

            obj = new Div("div_chk", "absolute", "0", "21", null, "29", "0", null, this);
            obj.set_taborder("22");
            obj.set_text("Div00");
            obj.style.set_background("transparent");
            this.addChild(obj.name, obj);
            obj = new CheckBox("chk", "absolute", null, null, "105", "17", "5.05%", "10", this.div_chk);
            obj.set_taborder("0");
            obj.set_text("오늘 보지 않기");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_chk.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "16", "240", "550", "39", null, null, this);
            obj.set_taborder("24");
            obj.set_text("현행");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "565", "240", "550", "39", null, null, this);
            obj.set_taborder("25");
            obj.set_text("판매속보");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "16", "278", "550", "74", null, null, this);
            obj.set_taborder("26");
            obj.set_text("농협 사업장의 전일까지의 POS 매출 확인");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "565", "278", "550", "74", null, null, this);
            obj.set_taborder("27");
            obj.set_text("1시간 단위로 당일 POS 매출 확인\r\n※ 매출 현황 제공 시간은 변동 가능성 있음");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "30", "887", "65", "24", null, null, this);
            obj.set_taborder("28");
            obj.set_text("사업장코드");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "30", "910", "65", "24", null, null, this);
            obj.set_taborder("32");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "94", "887", "60", "24", null, null, this);
            obj.set_taborder("33");
            obj.set_text("사업장명");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "94", "910", "60", "24", null, null, this);
            obj.set_taborder("34");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "153", "887", "30", "24", null, null, this);
            obj.set_taborder("35");
            obj.set_text("수량");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "153", "910", "30", "24", null, null, this);
            obj.set_taborder("36");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "182", "887", "30", "24", null, null, this);
            obj.set_taborder("37");
            obj.set_text("금액");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "182", "910", "30", "24", null, null, this);
            obj.set_taborder("38");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "415", "887", "65", "24", null, null, this);
            obj.set_taborder("39");
            obj.set_text("사업장코드");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "415", "910", "65", "24", null, null, this);
            obj.set_taborder("40");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "479", "887", "60", "24", null, null, this);
            obj.set_taborder("41");
            obj.set_text("사업장명");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "479", "910", "60", "24", null, null, this);
            obj.set_taborder("42");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "538", "887", "37", "24", null, null, this);
            obj.set_taborder("43");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_align("center middle");
            obj.set_text("08~09");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "538", "910", "37", "24", null, null, this);
            obj.set_taborder("44");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "574", "887", "37", "24", null, null, this);
            obj.set_taborder("45");
            obj.set_text("09~10");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "574", "910", "37", "24", null, null, this);
            obj.set_taborder("46");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "610", "887", "37", "24", null, null, this);
            obj.set_taborder("47");
            obj.set_text("10~11");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "646", "887", "37", "24", null, null, this);
            obj.set_taborder("48");
            obj.set_text("11~12");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "610", "910", "37", "24", null, null, this);
            obj.set_taborder("49");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "646", "910", "37", "24", null, null, this);
            obj.set_taborder("50");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "682", "887", "37", "24", null, null, this);
            obj.set_taborder("51");
            obj.set_text("합계");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "718", "887", "37", "24", null, null, this);
            obj.set_taborder("52");
            obj.set_text("금액");
            obj.style.set_border("1 solid #808080ff");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "682", "910", "37", "24", null, null, this);
            obj.set_taborder("53");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "718", "910", "37", "24", null, null, this);
            obj.set_taborder("54");
            obj.style.set_border("1 solid #808080ff");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 29, this.div_chk,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("22");
            		p.set_text("Div00");
            		p.style.set_background("transparent");

            	}
            );
            this.div_chk.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1128, 1015, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("OMG_DS_SC_8331");
            		p.style.set_border("2 solid #067394ff");
            		p.set_titletext("판매속보 설문조사 팝업");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_8333.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_8333.xfdl", function() {
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
        this.OMG_DS_SC_8333_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통

        	var url=this.getOwnerFrame().URL;
        	this.Edit01.set_value(this.getOwnerFrame().SRV_SEQ); 
        	this.Static00.set_text(this.getOwnerFrame().TITLE);			//설문 번호	
        	this.Static01.set_text(this.getOwnerFrame().INTRO);			//내용
        	this.Static02.set_text(this.getOwnerFrame().SUBTITLE);		//부제목
        			
        	this.btn_que_search_onclick();
        	//confirm("설문조사 기간입니다.")

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
        				//alert("질문조회 완료");
        				this.question();
        			}
        		}else if(svcID =="insertSurveyanswerUser"){
        			if (ErrorCode == 0) {
        				alert("정상적으로 저장되었습니다.")
        				this.close();
        			}
        		}
        	
        	}
        	
        }
        /*질문화면 뿌리기*/
        this.question = function()
        { 
        	var count = this.ds_survey_q.rowcount; 	 //질문 갯수
        	var anscount = this.ds_survey_a.rowcount; // 답변 총갯수
        	var bottom = 350;
        	
        	for(var i = 0 ; i < count; i++){
        		//조회해서 받아온 질문
        		var QUESTION= this.ds_survey_q.getColumn(i,"QUESTION");
        		var SRV_Q_SEQ = this.ds_survey_q.getColumn(i,"SRV_Q_SEQ")*1;
        		var A_TYPE = this.ds_survey_q.getColumn(i,"A_TYPE");
        		var left = 30;
        		var qseq = SRV_Q_SEQ; // 질문 번호
        		var q = i+1;
        		//질문
        		var objQue = new Static();  
        		objQue.init("survey_que"+qseq, "absolute", 15, bottom+50, 900, 30, null, null);
        		this.addChild("survey_que"+qseq, objQue); 
        		if(A_TYPE == "M"){
        			objQue.set_text(q + ". "+QUESTION + "   (중복응답 가능)");
        		}else{
        			objQue.set_text(q + ". "+QUESTION);
        		}
        		objQue.show();	
        		var quebottom = objQue.getOffsetBottom();
        		
        		//답변 위치확인용
        		var objDap = new Static();  
        		objDap.init("ed_dap"+i, "absolute", 15, quebottom+10, 50, 30, null, null);
        		this.addChild("ed_dap"+i, objDap); 
        		objDap.set_text("답변 :");
        		var px = objDap.getPixelTop();

        			
        		if( A_TYPE == "S") 		 //답변타입 : 단수 (라디오박스)
        		{
        			var dsResult = new Dataset; 
        			dsResult.addColumn( "value", "string" ); 
        			dsResult.addColumn( "code", "string" ); 
        			this.addChild("ds_radio"+qseq, dsResult); 
        			
        			var tmp = 0; // 답변의 갯수
        			var ttmp = 0; //조회한 답변에서 단답형의 윗번호
        			for (var k = 0; k < anscount; k++) {
                		var seq = this.ds_survey_a.getColumn(k,"SRV_Q_SEQ")*1;
                		var ans = this.ds_survey_a.getColumn(k,"ANSWER");
                		if(SRV_Q_SEQ == seq){
                			tmp++;
                		}else if (SRV_Q_SEQ > seq){
                			ttmp++;
                		}else if (SRV_Q_SEQ < seq){
                		
                		}
                	}
        			for(var j = ttmp ; j < ttmp+tmp; j++){
        				var ans = this.ds_survey_a.getColumn(j,"ANSWER"); // ans : 답변 내용
        				var input_type = this.ds_survey_a.getColumn(j,"INPUT_TYPE"); //라디오의 input_type
        				var col = this.ds_survey_a.getColumn(j,"TXT_COL_CNT"); //라디오의 input_type
        				var row = this.ds_survey_a.getColumn(j,"TXT_ROW_CNT"); //라디오의 input_type
        				if(input_type == "T"){
        					var objEdit = new TextArea();       
        					objEdit.init("ans_radio_text"+qseq, "absolute", 30, px , 300,30, null, null);
        					this.addChild("ans_radio_text"+qseq, objEdit); 
        					objEdit.style.set_border("1px solid #bfbfbfff");
        					objEdit.set_wordwrap("char");
        					objEdit.show();
        					bottom = objEdit.getOffsetBottom();
        				}
         				dsResult.addRow();
         				dsResult.setColumn(j-ttmp,"code",j-ttmp+1);
          				dsResult.setColumn(j-ttmp,"value",ans);
          				dsResult.getColumn(j-ttmp,"value");
        			}			
        			var objRadio = new Radio();  
        			objRadio.init("ans_radio"+qseq, "absolute", 30, px, 1150, 40, null,null);
        			this.addChild("ans_radio"+qseq, objRadio); 
        			objRadio.set_columncount(tmp);
        			objRadio.show(); 
        			objRadio.set_innerdataset("ds_radio"+qseq);
        			objRadio.set_codecolumn("code");
        			objRadio.set_datacolumn("value");
        			
         			bottom = objRadio.getOffsetBottom();
        			for(var j = ttmp ; j < ttmp+tmp; j++){ // input_type에 T(기타)형식이 있으면 텍스트창 옮김
        				var input_type = this.ds_survey_a.getColumn(j,"INPUT_TYPE");
        				if(input_type == "T"){
        					this["ans_radio_text"+qseq].move(795,bottom+10-15);
        					bottom = this["ans_radio_text"+qseq].getOffsetBottom();
        				}
        			}

        		}else if (A_TYPE == "M") // 답변타입 : 복수 (체크박스)
        		{
        			var moveLeft = 30;
        			for(var j = 0 ; j < anscount; j++){
        				if(SRV_Q_SEQ == this.ds_survey_a.getColumn(j,"SRV_Q_SEQ")){
        					var answer = this.ds_survey_a.getColumn(j,"ANSWER");
        					var srv_a_seq = this.ds_survey_a.getColumn(j,"SRV_A_SEQ"); //답변 번호
        					var TextLeft = 30;
        					var anslen = this.gfn_getByteLength(answer)*7;
        					
        					var objCheckBox = new CheckBox();  
        					objCheckBox.init("ans_CheckBox"+qseq+""+srv_a_seq, "absolute", left, px,anslen+30, 25, null, null);
        					this.addChild("ans_CheckBox"+qseq+""+srv_a_seq, objCheckBox); 
        					this.insertChild(1,"ans_CheckBox"+qseq+""+srv_a_seq, objCheckBox); 
        					objCheckBox.show();
        					objCheckBox.set_text(answer);
        					left = objCheckBox.getOffsetRight();
        					bottom = objCheckBox.getOffsetBottom();
        					if(objCheckBox.getOffsetRight() > 750){
        						objCheckBox.move(moveLeft,bottom+10);
        						moveLeft = objCheckBox.getOffsetRight();
        						TextLeft = objCheckBox.getOffsetRight();
        						bottom = objCheckBox.getOffsetBottom();

        					}
        					if(this.ds_survey_a.getColumn(j,"INPUT_TYPE") == "T"){
        						var col= this.ds_survey_a.getColumn(j,"TXT_COL_CNT");
        						var row = this.ds_survey_a.getColumn(j,"TXT_ROW_CNT");
        						this["ans_CheckBox"+qseq+""+srv_a_seq].move(30,bottom+10,anslen+30,25,null,null);
        						var etcright = this["ans_CheckBox"+qseq+""+srv_a_seq].getOffsetRight();
        						
        						var objTextArea = new Edit();      
        						objTextArea.init("ans_checkText"+qseq+""+srv_a_seq, "absolute",etcright, bottom+10 , col*100, 25*row, null, null);
        						this.addChild("ans_checkText"+qseq+""+srv_a_seq, objTextArea); 
        						objTextArea.style.set_border("1px solid #bfbfbfff");
        						objTextArea.show();
        						bottom = objTextArea.getOffsetBottom();
        					}
        					
        				}
        				
        			}
        		}else if (A_TYPE == "T") //답변타입 : 텍스트 (editText)
        		{
        			for(var j = 0 ; j < anscount; j++){
        				if(SRV_Q_SEQ == this.ds_survey_a.getColumn(j,"SRV_Q_SEQ")){
        					var col= this.ds_survey_a.getColumn(j,"TXT_COL_CNT");
        					var row = this.ds_survey_a.getColumn(j,"TXT_ROW_CNT");
        				}
        			}
        			
        			var objEdit = new TextArea();       
        			//objEdit.init("ans_edt"+qseq, "absolute", 30, px , 100*col,25*row, null, null);
        			objEdit.init("ans_edt"+qseq, "absolute", 30, px , 100*6,25*5, null, null);
        			this.addChild("ans_edt"+qseq, objEdit); 
        			objEdit.style.set_border("1px solid #bfbfbfff");
        			objEdit.set_wordwrap("char");
        			objEdit.show();
        			bottom = objEdit.getOffsetBottom();
        		}
        		
        	}
        	this.btn_save.move(30,bottom+100,null,null);
        	this.div_chk.move(0,bottom+160,null,null);
        	this.set_width(1150);
        	this.set_height(750);
        	
        	this["ans_radio1"].addEventHandler("onitemchanged", this.ans_radio1_onitemchanged, this);
        	this["ans_radio2"].addEventHandler("onitemchanged", this.ans_radio2_onitemchanged, this);
        	
        }
        /*설문조사 선택*/
        this.fn_search_onclick = function(obj,e)
        {
        	var oArg = {};
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("OMG_DS_SC_8321", "OMG.MG::OMG_DS_SC_8321.xfdl", oArg, sOption, sPopupCallBack);
        }

        /* 팝업호출확인하기 */
        this.fn_popupAfter = function(strId,strVal)
        {

        }

        /*질문 조회*/
        this.btn_que_search_onclick = function(obj,e)
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

        	if(this.fn_validationCheck()){
        		if(confirm("저장하시겠습니까?")){
        			var dsParams = "ds_ans_save=ds_ans_save:U";
        			
        			var sParam = "SRV_SEQ="+this.Edit01.value;
        				
        			var sSvcID        = "insertSurveyanswerUser";
        			var sURL          = "svc::rest/pt/survey/insertSurveyanswerUser";
        			var sInDatasets   = dsParams;
        			var sOutDatasets  = "";
        			var sArgument     = sParam;
        			var sCallbackFunc = "fn_callBack";
        			var sTranType     = "U"; // U:저장/삭제, S:조회
        			
        			this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        		}
        	}

        }

        this.fn_validationCheck = function() {

        	var ans_radio1Val = this["ans_radio1"].value;
        	var ans_radio1Text = this["ans_radio1"].text;
        	var ans_radio2Val = this["ans_radio2"].value;
        	var ans_radio2Text = this["ans_radio2"].text;
        	var ans_radio3Val = this["ans_radio3"].value;
        	var ans_radio3Text = this["ans_radio3"].text;
        	var ans_radio_text3Val = this["ans_radio_text3"].value;
        	var ans_radio_text3Text = this["ans_radio_text3"].text;
        	var ans_radio4Val = this["ans_radio4"].value;
        	var ans_radio4Text = this["ans_radio4"].text;
        	var ans_edt5Val = this["ans_edt5"].value;
        	var ans_edt5Text = this["ans_edt5"].text;
        	
        	if(ans_radio1Val == undefined || ans_radio1Val == ""){
        		this["ans_radio1"].setFocus();
        		alert("1번 문항 체크해주세요.");
        		this.ds_ans_save.clearData();
        		return false;
        	} 
        	
        	if(ans_radio1Val == "1"){
        		this.ds_ans_save.addRow();
        		this.ds_ans_save.setColumn(0,"INPUT_TEXT",ans_radio1Text);
        		this.ds_ans_save.setColumn(0,"SRV_SEQ",this.Edit01.value);
        		this.ds_ans_save.setColumn(0,"SRV_Q_SEQ","1");
        		this.ds_ans_save.setColumn(0,"SRV_A_SEQ",ans_radio1Val);
        		if(ans_radio2Val == undefined || ans_radio2Val == ""){
        			this["ans_radio2"].setFocus();
        			alert("2번 문항 체크해주세요.");
        			this.ds_ans_save.clearData();
        			return false;
        		} 
        		
        		if(ans_radio2Val == "1"){
        			this.ds_ans_save.addRow();
        			this.ds_ans_save.setColumn(1,"INPUT_TEXT",ans_radio2Text);
        			this.ds_ans_save.setColumn(1,"SRV_SEQ",this.Edit01.value);
        			this.ds_ans_save.setColumn(1,"SRV_Q_SEQ","2");
        			this.ds_ans_save.setColumn(1,"SRV_A_SEQ",ans_radio2Val);
        			if(ans_radio3Val == undefined || ans_radio3Val == ""){
        				this["ans_radio3"].setFocus();
        				alert("3번 문항 체크해주세요.");
        				this.ds_ans_save.clearData();
        				return false;
        			} 
        			
        			if(ans_radio3Val == "3"){
        				this.ds_ans_save.addRow();
        				if(ans_radio_text3Val == undefined || ans_radio_text3Val == ""){
        					this["ans_radio_text3"].setFocus();
        					alert("3번 문항 기타항목의 답을 적어주세요");
        					this.ds_ans_save.clearData();
        					return false;
        				} else {
        					this.ds_ans_save.addRow();
        					this.ds_ans_save.setColumn(2,"INPUT_TEXT",ans_radio_text3Text);
        					this.ds_ans_save.setColumn(2,"SRV_SEQ",this.Edit01.value);
        					this.ds_ans_save.setColumn(2,"SRV_Q_SEQ","3");
        					this.ds_ans_save.setColumn(2,"SRV_A_SEQ",ans_radio3Val);
        				}
        			} else {
        				this.ds_ans_save.addRow();
        				this.ds_ans_save.setColumn(2,"INPUT_TEXT",ans_radio3Text);
        				this.ds_ans_save.setColumn(2,"SRV_SEQ",this.Edit01.value);
        				this.ds_ans_save.setColumn(2,"SRV_Q_SEQ","3");
        				this.ds_ans_save.setColumn(2,"SRV_A_SEQ",ans_radio3Val);
        			}
        			
        			if(ans_radio4Val == undefined || ans_radio4Val == ""){
        				this["ans_radio4"].setFocus();
        				alert("4번 문항 체크해주세요.");
        				this.ds_ans_save.clearData();
        				return false;
        			} else {
        				this.ds_ans_save.addRow();
        				this.ds_ans_save.setColumn(3,"INPUT_TEXT",ans_radio4Text);
        				this.ds_ans_save.setColumn(3,"SRV_SEQ",this.Edit01.value);
        				this.ds_ans_save.setColumn(3,"SRV_Q_SEQ","4");
        				this.ds_ans_save.setColumn(3,"SRV_A_SEQ",ans_radio4Val);
        			}
        			
        			if(ans_edt5Val == undefined || ans_edt5Val == ""){
        				//this["ans_edt5"].setFocus();
        				//alert("5번 문항 주관식 답을 작성해주세요.");
        				//this.ds_ans_save.clearData();
        				//return false;
        			} else {
        				this.ds_ans_save.addRow();
        				this.ds_ans_save.setColumn(4,"INPUT_TEXT",ans_edt5Text);
        				this.ds_ans_save.setColumn(4,"SRV_SEQ",this.Edit01.value);
        				this.ds_ans_save.setColumn(4,"SRV_Q_SEQ","5");
        				this.ds_ans_save.setColumn(4,"SRV_A_SEQ","1");
        			}
        		} else {
        			this.ds_ans_save.addRow();
        			this.ds_ans_save.setColumn(1,"INPUT_TEXT",ans_radio2Text);
        			this.ds_ans_save.setColumn(1,"SRV_SEQ",this.Edit01.value);
        			this.ds_ans_save.setColumn(1,"SRV_Q_SEQ","2");
        			this.ds_ans_save.setColumn(1,"SRV_A_SEQ",ans_radio2Val);
        		}
        		
        	} else {
        		this.ds_ans_save.addRow();
        		this.ds_ans_save.setColumn(0,"INPUT_TEXT",ans_radio1Text);
        		this.ds_ans_save.setColumn(0,"SRV_SEQ",this.Edit01.value);
        		this.ds_ans_save.setColumn(0,"SRV_Q_SEQ","1");
        		this.ds_ans_save.setColumn(0,"SRV_A_SEQ",ans_radio1Val);
        	}
        	
        	return true;
        	
        }

        this.fn_validationCheck2 = function() {
        	var anscount = this.ds_survey_a.rowcount;
        	var ans_tmp = 0;
        	for(var i = 0 ; i < anscount; i++){ 	
        		if(this.ds_survey_a.getColumn(i,"A_TYPE") == "M" && this.ds_survey_a.getColumn(i,"INPUT_TYPE") == "T"  ) 	/* A_TYPE:M && INPUT_TYPE:T*/
        		{
        			var qseq = this.ds_survey_a.getColumn(i,"SRV_Q_SEQ");
        			var srv_a_seq = this.ds_survey_a.getColumn(i,"SRV_A_SEQ");
        			if(this["ans_checkText"+qseq+""+srv_a_seq].text != "" ){									/* 기타Text에 답 기재O*/
        				if(this["ans_CheckBox"+qseq+""+srv_a_seq].value){ 										/* 기타Check 체크O*/
        					this.ds_ans_save.addRow();							
        					this.ds_ans_save.setColumn(ans_tmp,"INPUT_TEXT",this["ans_checkText"+qseq+""+srv_a_seq].text);
        					this.ds_ans_save.setColumn(ans_tmp,"SRV_SEQ",this.Edit01.value);
        					this.ds_ans_save.setColumn(ans_tmp,"SRV_Q_SEQ",qseq);
        					this.ds_ans_save.setColumn(ans_tmp,"SRV_A_SEQ",srv_a_seq);
        					ans_tmp++;
        				}
        				else{																			        /* 기타Check 체크X */
        					alert("기타항목을 체크하고 작성해주세요");
        					this.ds_ans_save.clearData();
        					return false;
        				}
        			}
        		} 
        		if(this.ds_survey_a.getColumn(i,"A_TYPE") == "M"){ 					/*A_TYPE : M 복수형일때*/
        			var qseq = this.ds_survey_a.getColumn(i,"SRV_Q_SEQ");
        			var srv_a_seq = this.ds_survey_a.getColumn(i,"SRV_A_SEQ");
        			if(this["ans_CheckBox"+qseq+""+srv_a_seq].value){ 				/*체크박스에 체크되어있을때*/
        				if(this.ds_survey_a.getColumn(i,"INPUT_TYPE") == "T"){ 		/*A_TYPE : M && INPUT_TYPE : T*/
        					if(this["ans_checkText"+qseq+""+srv_a_seq].text ==""){	/*체크박스에 체크되어있고 답 기재X*/
        						alert("기타항목 답을 입력해주세요.");
        						this.ds_ans_save.clearData();
        						return false;
        					}
        				}else{ 														/*A_TYPE : M && INPUT_TYPE : C*/
        					this.ds_ans_save.addRow();
        					this.ds_ans_save.setColumn(ans_tmp,"INPUT_TEXT",this["ans_CheckBox"+qseq+""+srv_a_seq].text);
        					this.ds_ans_save.setColumn(ans_tmp,"SRV_SEQ",this.Edit01.value);
        					this.ds_ans_save.setColumn(ans_tmp,"SRV_Q_SEQ",qseq);
        					this.ds_ans_save.setColumn(ans_tmp,"SRV_A_SEQ",srv_a_seq);
        					ans_tmp++;
        				}
        			}
        		}else if(this.ds_survey_a.getColumn(i,"A_TYPE") == "T"){ 			/*A_TYPEL:T 주관식*/
        			var qseq = this.ds_survey_a.getColumn(i,"SRV_Q_SEQ");
        			var srv_a_seq = this.ds_survey_a.getColumn(i,"SRV_A_SEQ");
        				if(this["ans_edt"+qseq].text == ""){
        					alert("모든 주관식 답을 작성해주세요.");
        					this.ds_ans_save.clearData();
        					return false;
        				}else{
        					this.ds_ans_save.addRow();
        					this.ds_ans_save.setColumn(ans_tmp,"INPUT_TEXT",this["ans_edt"+qseq].text);
        					this.ds_ans_save.setColumn(ans_tmp,"SRV_SEQ",this.Edit01.value);
        					this.ds_ans_save.setColumn(ans_tmp,"SRV_Q_SEQ",qseq);
        					this.ds_ans_save.setColumn(ans_tmp,"SRV_A_SEQ",srv_a_seq);
        					ans_tmp++;
        				}
        		}else{		
        		}	
        	}	
        	var count = this.ds_survey_q.rowcount; 
        	for(var j=0;j< count;j++){
        		if(this.ds_survey_q.getColumn(j,"A_TYPE") == "S"){						/*A_TYPEL:T 단답형*/
        			var qseq = this.ds_survey_q.getColumn(j,"SRV_Q_SEQ");
        			if(this["ans_radio"+qseq].text == ""){
        				alert("모든 문항 체크해주세요.");
        				this.ds_ans_save.clearData();
        				return false;
        			}else{
        				var text = this["ans_radio"+qseq].text;
        				if(text.indexOf("기타") != -1){ //기타항목 체크했을때, 기타 텍스트 값이 저장됨
        					if(this["ans_radio_text"+qseq].text ==""){
        						alert("기타항목의 답을 적어주세요");
        						this.ds_ans_save.clearData();
        						return false;
        					}else{
        						this.ds_ans_save.addRow();
        						this.ds_ans_save.setColumn(ans_tmp,"INPUT_TEXT",this["ans_radio_text"+qseq].text);
        						this.ds_ans_save.setColumn(ans_tmp,"SRV_SEQ",this.Edit01.value);
        						this.ds_ans_save.setColumn(ans_tmp,"SRV_Q_SEQ",qseq);
        						this.ds_ans_save.setColumn(ans_tmp,"SRV_A_SEQ",this["ans_radio"+qseq].value);
        						ans_tmp++;
        					}
        				}else{
        					this.ds_ans_save.addRow();
        					this.ds_ans_save.setColumn(ans_tmp,"INPUT_TEXT",this["ans_radio"+qseq].text);
        					this.ds_ans_save.setColumn(ans_tmp,"SRV_SEQ",this.Edit01.value);
        					this.ds_ans_save.setColumn(ans_tmp,"SRV_Q_SEQ",qseq);
        					this.ds_ans_save.setColumn(ans_tmp,"SRV_A_SEQ",this["ans_radio"+qseq].value);
        					ans_tmp++;
        				}
        			}
        		}
        	}
        	var rowcount = this.ds_survey_a.rowcount;
        	var tmppp = 0;
        	/*복수형 답체크했는지 확인 루트 */
        	for(var i = 0; i< count; i++){
        		if(this.ds_survey_q.getColumn(i,"A_TYPE") == "M"){
        			var q_seq = this.ds_survey_q.getColumn(i,"SRV_Q_SEQ");
        			for(var j = 0; j < rowcount ; j++){
        				if(this.ds_survey_a.getColumn(j,"SRV_Q_SEQ") == q_seq){
        					var srv_a_seq = this.ds_survey_a.getColumn(j,"SRV_A_SEQ");
        					var qseq = this.ds_survey_a.getColumn(j,"SRV_Q_SEQ");
        					if(this["ans_CheckBox"+qseq+""+srv_a_seq].value == true){  //체크가 안되어있을때
        						tmppp++;
        					
        					}
        				}
        			}
        			if(tmppp == 0){
        				alert("모든 문항 체크해주세요.");
        				return false;
        			}
        			tmppp = 0;
        		}
        	}
        	return true;
        	
        	
        }

        

        this.OMG_DS_SC_8333_onactivate = function(obj,e)
        {
        /*	confirm("설문조사 기간입니다.");*/
        }

        
        this.div_chk_chk_onchanged = function(obj,e)
        {
        	var bSucc;
        	if(this.div_chk.chk.value == 1)	{
        		
        		//bSucc = application.setPrivateProfile(this.framename, "Y");
        		bSucc = application.setPrivateProfile(this.Edit01.value, this.gfn_getClientTime("yyyyMMdd")); // 하루 보지 않기(d+1일)
        		this.close();
        	
        	}else{
        		//bSucc = application.setPrivateProfile(this.framename, "N");
        		bSucc = application.setPrivateProfile(this.Edit01.value, "N");
        	}
        }

        
        this.ans_radio1_onitemchanged = function(obj,e)
        {
        	
        	var ans_radio1Val = this["ans_radio1"].value;
        	var ans_radio2Val = this["ans_radio2"].value;
        	
        	if(ans_radio1Val == "1") {
        	
        		if(ans_radio2Val == "1") {
        			this["ans_radio2"].set_enable("true");
        			this["ans_radio3"].set_enable("true");
        			this["ans_radio_text3"].set_enable("true");
        			this["ans_radio4"].set_enable("true");
        			this["ans_edt5"].set_enable("true");
        		} else if(ans_radio2Val == "2") {
        			this["ans_radio3"].set_value("");
        			this["ans_radio3"].set_cssclass("rdo_WF_Essential");
        			this["ans_radio3"].set_enable("false");
        			this["ans_radio_text3"].set_value("");
        			this["ans_radio_text3"].set_cssclass("rdo_WF_Essential");
        			this["ans_radio_text3"].set_enable("false");
        			this["ans_radio4"].set_value("");
        			this["ans_radio4"].set_cssclass("rdo_WF_Essential");
        			this["ans_radio4"].set_enable("false");
        			this["ans_edt5"].set_value("");
        			this["ans_edt5"].set_cssclass("rdo_WF_Essential");
        			this["ans_edt5"].set_enable("false");
        		} else {
        			this["ans_radio2"].set_enable("true");
        			this["ans_radio3"].set_enable("true");
        			this["ans_radio_text3"].set_enable("true");
        			this["ans_radio4"].set_enable("true");
        			this["ans_edt5"].set_enable("true");
        		}
        		
        	} else if(ans_radio1Val == "2") {
        		this["ans_radio2"].set_value("");
        		this["ans_radio2"].set_cssclass("rdo_WF_Essential");
        		this["ans_radio2"].set_enable("false");
        		this["ans_radio3"].set_value("");
        		this["ans_radio3"].set_cssclass("rdo_WF_Essential");
        		this["ans_radio3"].set_enable("false");
        		this["ans_radio_text3"].set_value("");
        		this["ans_radio_text3"].set_cssclass("rdo_WF_Essential");
        		this["ans_radio_text3"].set_enable("false");
        		this["ans_radio4"].set_value("");
        		this["ans_radio4"].set_cssclass("rdo_WF_Essential");
        		this["ans_radio4"].set_enable("false");
        		this["ans_edt5"].set_value("");
        		this["ans_edt5"].set_cssclass("rdo_WF_Essential");
        		this["ans_edt5"].set_enable("false");
        	}
        	
        }

        this.ans_radio2_onitemchanged = function(obj,e)
        {
        	
        	var ans_radio2Val = this["ans_radio2"].value;
        	
        	if(ans_radio2Val == "1") {
        		this["ans_radio3"].set_enable("true");
        		this["ans_radio_text3"].set_enable("true");
        		this["ans_radio4"].set_enable("true");
        		this["ans_edt5"].set_enable("true");
        	} else if(ans_radio2Val == "2") {
        		this["ans_radio3"].set_value("");
        		this["ans_radio3"].set_cssclass("rdo_WF_Essential");
        		this["ans_radio3"].set_enable("false");
        		this["ans_radio_text3"].set_value("");
        		this["ans_radio_text3"].set_cssclass("rdo_WF_Essential");
        		this["ans_radio_text3"].set_enable("false");
        		this["ans_radio4"].set_value("");
        		this["ans_radio4"].set_cssclass("rdo_WF_Essential");
        		this["ans_radio4"].set_enable("false");
        		this["ans_edt5"].set_value("");
        		this["ans_edt5"].set_cssclass("rdo_WF_Essential");
        		this["ans_edt5"].set_enable("false");
        	}
        	
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.OMG_DS_SC_8333_onload, this);
            this.addEventHandler("onactivate", this.OMG_DS_SC_8333_onactivate, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.div_chk.chk.addEventHandler("onchanged", this.div_chk_chk_onchanged, this);
            this.Static06.addEventHandler("onclick", this.Static06_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_8333.xfdl");

       
    };
}
)();
