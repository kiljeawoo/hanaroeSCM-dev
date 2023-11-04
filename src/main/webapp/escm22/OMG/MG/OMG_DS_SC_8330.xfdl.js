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
                this.set_name("OMG_DS_SC_8310");
                this.set_titletext("사용자 설문조사");
                this.set_name("OMG_DS_SC_8310");
                this.set_scrollbars("alwaysvert");
                this._setFormPosition(0,0,803,501);
            }

            
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
            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("8");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "5", "48", null, "43", "10", null, this);
            obj.set_taborder("9");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "430", "-38", "73", "23", null, null, this.div_search);
            obj.set_taborder("16");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("Edit02", "absolute", "320", "-35", "73", "23", null, null, this.div_search);
            obj.set_taborder("17");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "514", "-35", "73", "23", null, null, this.div_search);
            obj.set_taborder("15");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("ed_title", "absolute", "57", "10", "442", "21", null, null, this.div_search);
            obj.set_taborder("13");
            obj.set_maxlength("30");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "15", "10", "103", "21", null, null, this.div_search);
            obj.set_taborder("14");
            obj.set_text("제목");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 20 0 11");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_search", "absolute", null, "10", "96", "21", "6", null, this.div_search);
            obj.set_taborder("18");
            obj.set_text("설문조사 선택");
            obj.set_cssclass("btn_WF_CRUD");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_que_search", "absolute", null, "102", "58", "21", "18", null, this);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

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

            obj = new Button("btn_save", "absolute", null, "102", "54", "21", "83", null, this);
            obj.set_taborder("18");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "8", "127", null, "46", "10", null, this);
            obj.set_taborder("19");
            obj.style.set_align("center middle");
            obj.style.set_font("13 HY견고딕");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "8", "177", null, "142", "10", null, this);
            obj.set_taborder("20");
            obj.style.set_align("center middle");
            obj.style.set_font("10 맑은 고딕");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "8", "324", null, "33", "10", null, this);
            obj.set_taborder("21");
            obj.style.set_background("#f6f6f6ff");
            obj.style.set_align("center middle");
            obj.style.set_font("10 HY견고딕");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 965, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("9");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 501, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("사용자 설문조사");
            		p.set_scrollbars("alwaysvert");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_8330.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_8330.xfdl", function(exports) {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
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
        			}
        		}
        	
        	}
        	
        }
        /*질문화면 뿌리기*/
        this.question = function()
        { 
        	var count = this.ds_survey_q.rowcount; 	 //질문 갯수
        	var anscount = this.ds_survey_a.rowcount; // 답변 총갯수
        	
        	var SRV_Q_SEQ= this.ds_survey_a.getColumn(0,"SRV_Q_SEQ");
        	var ANSWER= this.ds_survey_a.getColumn(0,"ANSWER");
        	var SRV_A_SEQ= this.ds_survey_a.getColumn(0,"SRV_A_SEQ");
        	var INPUT_TYPE= this.ds_survey_a.getColumn(0,"INPUT_TYPE");
        	var TXT_COL_CNT= this.ds_survey_a.getColumn(0,"TXT_COL_CNT");
        	var TXT_ROW_CNT= this.ds_survey_a.getColumn(0,"TXT_ROW_CNT");
        	var bottom = 350;
        	
        	
        	for(var i = 0 ; i < count; i++){
        		//조회해서 받아온 질문
        		var QUESTION= this.ds_survey_q.getColumn(i,"QUESTION");
        		var SRV_Q_SEQ = this.ds_survey_q.getColumn(i,"SRV_Q_SEQ");
        		var A_TYPE = this.ds_survey_q.getColumn(i,"A_TYPE");
        		var left = 30;
        		var qseq = i+1; // 질문 번호
        		
        		//질문
        		var objQue = new Static();  
        		objQue.init("survey_que"+qseq, "absolute", 15, bottom+50, 900, 30, null, null);
        		this.addChild("survey_que"+qseq, objQue); 
        		if(A_TYPE == "M"){
        			objQue.set_text(SRV_Q_SEQ + ". "+QUESTION + "   (중복응답 가능)");
        		}else{
        			objQue.set_text(SRV_Q_SEQ + ". "+QUESTION);
        		}
        		objQue.show();	
        		var quebottom = objQue.getOffsetBottom();
        		
        		//답변 위치확인용
        		var objDap = new Static();  
        		objDap.init("ed_dap"+i, "absolute", 15, quebottom+10, 50, 30, null, null);
        		this.addChild("ed_dap"+i, objDap); 
        		objDap.set_text("답변 :");
        		//objDap.show();
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
        				var seq = this.ds_survey_a.getColumn(k,"SRV_Q_SEQ");
        				if(SRV_Q_SEQ == seq){
        					tmp++;
        				} else {
        					if (SRV_Q_SEQ > seq) {
        						ttmp++;
        					}
        				}
        			}
        			for(var j = ttmp ; j < ttmp+tmp; j++){
        				var ans = this.ds_survey_a.getColumn(j,"ANSWER");
         				dsResult.addRow();
         				dsResult.setColumn(j-ttmp,"code",j-ttmp+1);
          				dsResult.setColumn(j-ttmp,"value",ans);
          				dsResult.getColumn(j-ttmp,"value");
        			}			
        			var objRadio = new Radio();  
        			objRadio.init("ans_radio"+qseq, "absolute", 30, px, 800, 40, null,null);
        			this.addChild("ans_radio"+qseq, objRadio); 
        			objRadio.set_columncount(tmp);
        			objRadio.show(); 
        			objRadio.set_innerdataset("ds_radio"+qseq);
        			objRadio.set_codecolumn("code");
        			objRadio.set_datacolumn("value");
        		
         			bottom = objRadio.getOffsetBottom();

        
        		}else if (A_TYPE == "M") // 답변타입 : 복수 (체크박스)
        		{
        			var moveLeft = 30;
        			for(var j = 0 ; j < anscount; j++){
        				
        				if(SRV_Q_SEQ == this.ds_survey_a.getColumn(j,"SRV_Q_SEQ")){
        					var answer = this.ds_survey_a.getColumn(j,"ANSWER");
        					var srv_a_seq = this.ds_survey_a.getColumn(j,"SRV_A_SEQ"); //답변 번호
        					var TextLeft = 30;
        //					this.TextArea00.set_value(answer);
        // 					alert(this.TextArea00.scrollbar.style.scrollbarsize());
        //					alert(this.TextArea00.hscrollbar.width);
        					var anslen = this.gfn_getByteLength(answer)*7;
        					
        					var objCheckBox = new CheckBox();  
        					objCheckBox.init("ans_CheckBox"+qseq+""+srv_a_seq, "absolute", left, px,anslen+30, 25, null, null);
        					this.addChild("ans_CheckBox"+qseq+""+srv_a_seq, objCheckBox); 
        					this.insertChild(1,"ans_CheckBox"+qseq+""+srv_a_seq, objCheckBox); 
        					objCheckBox.show();
        					objCheckBox.set_text(answer);
        					left = objCheckBox.getOffsetRight();
        					bottom = objCheckBox.getOffsetBottom();
        					if(objCheckBox.getOffsetRight() > 1000){
        						objCheckBox.move(moveLeft,bottom+10);
        						moveLeft = objCheckBox.getOffsetRight();
        						TextLeft = objCheckBox.getOffsetRight();
        						bottom = objCheckBox.getOffsetBottom();

        					}
        					if(this.ds_survey_a.getColumn(j,"INPUT_TYPE") == "T"){
        						this["ans_CheckBox"+qseq+""+srv_a_seq].move(30,bottom+10,anslen+30,25,null,null);
        						var etcright = this["ans_CheckBox"+qseq+""+srv_a_seq].getOffsetRight();
        						
        						var objTextArea = new TextArea();      
        						objTextArea.init("ans_checkText"+qseq+""+srv_a_seq, "absolute",etcright, bottom+10 , 300, 25, null, null);
        						this.addChild("ans_checkText"+qseq+""+srv_a_seq, objTextArea); 
        						objTextArea.style.set_border("1px solid #bfbfbfff");
        						objTextArea.show();
        						bottom = objTextArea.getOffsetBottom();
        					}
        					
        				}
        				
        			}
        		}else if (A_TYPE == "T") //답변타입 : 텍스트 (editText)
        		{
        			var objEdit = new TextArea();       
        			objEdit.init("ans_edt"+qseq, "absolute", 30, px , 800,300, null, null);
        			this.addChild("ans_edt"+qseq, objEdit); 
        			objEdit.style.set_border("1px solid #bfbfbfff");
        			objEdit.show();
        			bottom = objEdit.getOffsetBottom();
        		}
        		
        	}
        	TextLeft = 30;
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
        	trace(" strId : " + strId + " strVal : " + strVal);
        	switch(strId)
        	{
        		case "OMG_DS_SC_8321":

        			var strValNo = strVal.split('|');
        			this.div_search.ed_title.set_value(strValNo[0]);  //설문 제목
        			this.Static00.set_text(strValNo[0]);			  //제목
        			this.Edit01.set_value(strValNo[1]); 			  //설문 번호
        			this.Edit02.set_value(strValNo[2]);				  //설문 시작일 
        			this.Edit03.set_value(strValNo[3]);				  //설문 종료일 	
        			this.Static01.set_text(strValNo[4]);			  //비고
        			this.Static02.set_text(strValNo[5]);			//부제목
        			
        			this.btn_que_search_onclick();
        	}	
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

        		var dsParams = "ds_ans_save=ds_ans_save:U";
        			
        		var sSvcID        = "insertSurveyanswerUser";
        		var sURL          = "svc::rest/pt/survey/insertSurveyanswerUser";
        		var sInDatasets   = dsParams;
        		var sOutDatasets  = "";
        		var sArgument     = "";
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회
        		
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}

        }
        this.fn_validationCheck = function() {
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
        				alert("단답형 문제를 체크해주세요");
        				this.ds_ans_save.clearData();
        				return false;
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
        	for(var r = 0; r<ans_tmp ; r++ ){		
        		alert(this.ds_ans_save.getColumn(r,"SRV_SEQ"));		
        		alert(this.ds_ans_save.getColumn(r,"INPUT_TEXT"));		
        	
        	}
        	return true;
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_search.ed_title.addEventHandler("oneditclick", this.div_search_edt_menuId_oneditclick, this);
            this.div_search.btn_search.addEventHandler("onclick", this.fn_search_onclick, this);
            this.btn_que_search.addEventHandler("onclick", this.btn_que_search_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_8330.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
