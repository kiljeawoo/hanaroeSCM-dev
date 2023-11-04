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
                this.set_name("OMG_DS_SC_8341_P01");
                this.set_titletext("모니터링 등록 팝업");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,767,350);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_file", this);
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

            obj = new Dataset("ds_survey", this);
            obj._setContents("<ColumnInfo><Column id=\"BSN_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBTITLE\" type=\"STRING\" size=\"256\"/><Column id=\"INTRO\" type=\"STRING\" size=\"256\"/><Column id=\"APL_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"APL_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RMK_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRGMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CMENO\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_DSC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_param", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SRV_A_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ANSWER\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TXT_COL_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"TXT_ROW_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_Q_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BSN_DSC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static40", "absolute", "126", "115", null, "195", "17", null, this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "126", "59", null, "29", "17", null, this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("upper_level1", "absolute", "126", "87", null, "29", "17", null, this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "34", "41", "21", "17", null, this);
            obj.set_taborder("10");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "17", "87", "110", "29", null, null, this);
            obj.set_taborder("13");
            obj.set_text("점검년월");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "17", "115", "110", "195", null, null, this);
            obj.set_taborder("17");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "34", "43", "21", "66", null, this);
            obj.set_taborder("9");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "126", "309", null, "29", "17", null, this);
            obj.set_taborder("148");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_title", "absolute", "130", "64", "440", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("128");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_subtitle", "absolute", "130", "91", "440", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_displaynulltext("예시) 2019년 1월 ~ 12월");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("128");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "17", "309", "110", "29", null, null, this);
            obj.set_taborder("160");
            obj.set_text("설문기간");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Calendar("SRV_ST_DT", "absolute", null, "313", "100", "21", "538", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.style.set_align("center middle");

            obj = new Calendar("SRV_ED_DT", "absolute", null, "313", "100", "21", "427", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.style.set_align("center middle");

            obj = new Static("st_char00", "absolute", null, "314", "12", "21", "525", null, this);
            obj.set_taborder("163");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Button("brn_cls", "absolute", "729", "0", "37", "32", null, null, this);
            obj.set_taborder("164");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "426", "35", "105", "22", null, null, this);
            obj.set_taborder("165");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new TextArea("ed_intro", "absolute", "131", "120", "609", "183", null, null, this);
            obj.set_taborder("2");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("500");
            obj.set_wordwrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("168");
            obj.set_text("모니터링 등록");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "17", "59", "110", "29", null, null, this);
            obj.set_taborder("171");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Radio("use_yn", "absolute", "513", "313", "158", "21", null, null, this);
            this.addChild(obj.name, obj);
            var use_yn_innerdataset = new Dataset("use_yn_innerdataset", this.use_yn);
            use_yn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">사용안함</Col></Row></Rows>");
            obj.set_innerdataset(use_yn_innerdataset);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_value("Y");
            obj.set_index("0");

            obj = new Static("Static01", "absolute", "400", "309", "110", "29", null, null, this);
            obj.set_taborder("146");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 767, 350, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("모니터링 등록 팝업");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","ed_title","value","ds_survey","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","ed_subtitle","value","ds_survey","SUBTITLE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","SRV_ST_DT","value","ds_survey","SRV_ST_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","SRV_ED_DT","value","ds_survey","SRV_ED_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","use_yn","value","ds_survey","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","ed_intro","value","ds_survey","INTRO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Edit00","value","ds_survey","SRV_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_8341_P01.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_8341_P01.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e) //공통
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function() //페이지 로딩후 실행부분
        {
        	var fv_paramMode = this.parent.paramMode;	
        	if (fv_paramMode == "S") { 
        		this.search();
        	} else {
        		this.ds_survey.addRow();
        	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        /*상세 조회*/
        this.search = function()
        {
        	var title = this.getOwnerFrame().title;	
        	var srv_seq = this.getOwnerFrame().srv_seq;
        	
        	var sParams = "TITLE=" + title
        				+" SRV_SEQ=" + srv_seq;
        	var sSvcID        = "retrievesurveyOne";
        	var sURL          = "svc::rest/pt/survey/retrievesurveyOne";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_survey=ds_survey";	
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /*저장버튼 액션정의*/
        this.btn_save_onclick = function(obj,e)
        {	
        	if (this.getOwnerFrame().paramMode== "U") { //등록			
        		this.insert();	
        	} else if (this.getOwnerFrame().paramMode== "S") {	 //수정
        		this.update();
        	}
        }

        /*수정*/
        this.update = function()
        {
        	if (confirm("모니터링을 수정하시겠습니까?")) {
        		this.ds_survey.setColumn(0,"SRV_SEQ", this.gfn_nullToEmpty(this.Edit00.value));
        		this.ds_survey.setColumn(0,"TITLE", this.gfn_nullToEmpty(this.ed_title.value));
        		this.ds_survey.setColumn(0,"SUBTITLE", this.gfn_nullToEmpty(this.ed_subtitle.value));
        		this.ds_survey.setColumn(0,"INTRO", this.gfn_nullToEmpty(this.ed_intro.value));
        // 		this.ds_survey.setColumn(0,"APL_ST_DT", this.gfn_nullToEmpty(this.APL_ST_DT.value));
        // 		this.ds_survey.setColumn(0,"APL_ED_DT", this.gfn_nullToEmpty(this.APL_ED_DT.value));
        // 		this.ds_survey.setColumn(0,"RMK_CNTN", this.gfn_nullToEmpty(this.ed_rmk.value));
        		this.ds_survey.setColumn(0,"SRV_ST_DT", this.gfn_nullToEmpty(this.SRV_ST_DT.value));
        		this.ds_survey.setColumn(0,"SRV_ED_DT", this.gfn_nullToEmpty(this.SRV_ED_DT.value));
        		this.ds_survey.setColumn(0,"USE_YN", this.gfn_nullToEmpty(this.use_yn.value));

        		var sSvcID        = "updateSurvey";
        		var sURL          = "svc::rest/pt/survey/updateSurvey";
        		var sInDatasets   = "ds_survey=ds_survey";
        		var sOutDatasets  = "";
        		var sArgument     = "";
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회
        				
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        /* 등록 */
        this.insert = function()
        {
        	if (this.fn_validationCheck()) {
        		if (confirm("모니터링을 등록하시겠습니까?")) {
        			this.ds_survey.setColumn(0,"SRV_DSC", "002");
        			this.ds_survey.setColumn(0,"TITLE", this.gfn_nullToEmpty(this.ed_title.value));
        			this.ds_survey.setColumn(0,"SUBTITLE", this.gfn_nullToEmpty(this.ed_subtitle.value));
        			this.ds_survey.setColumn(0,"INTRO", this.gfn_nullToEmpty(this.ed_intro.value));
        // 			this.ds_survey.setColumn(0,"APL_ST_DT", this.gfn_nullToEmpty(this.APL_ST_DT.value));
        // 			this.ds_survey.setColumn(0,"APL_ED_DT", this.gfn_nullToEmpty(this.APL_ED_DT.value));
        // 			this.ds_survey.setColumn(0,"RMK_CNTN", this.gfn_nullToEmpty(this.ed_rmk.value));
        			this.ds_survey.setColumn(0,"SRV_ST_DT", this.gfn_nullToEmpty(this.SRV_ST_DT.value));
        			this.ds_survey.setColumn(0,"SRV_ED_DT", this.gfn_nullToEmpty(this.SRV_ED_DT.value));
        			this.ds_survey.setColumn(0,"USE_YN", this.gfn_nullToEmpty(this.use_yn.value));
        			
        			var sSvcID        = "insertSurvey";
        			var sURL          = "svc::rest/pt/survey/insertSurvey";
        			var sInDatasets   = "ds_survey=ds_survey";
        			var sOutDatasets  = "";
        			var sArgument     = "";
        			var sCallbackFunc = "fn_callBack";
        			var sTranType     = "U"; // U:저장/삭제, S:조회
        			
        			this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        		}
        	}
        }

        /* 창닫기 버튼 이벤트 */
        this.fn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/

        /* 등록 및 수정시 사용되는 Validation Check */
        this.fn_validationCheck = function()
        {    
        	if (this.ed_title.value == '') {
        		alert('제목을 입력하세요.');
        		return;
        	}
        	if (this.ed_subtitle.value == '') {
        		alert('부제목을 입력하세요.');
        		return;
        	}
        	if (this.ed_intro.value == '') {
        		alert('내용을 입력하세요');
        		return;
        	}
        	if (this.SRV_ST_DT.value == '') {
        		alert('시작일을 입력하세요');
        		return;
        	}
        	if (this.SRV_ED_DT.value == '') {
        		alert('종료일을 입력하세요');
        		return;
        	}
        	if (this.use_yn.value == '') {
        		alert('사용여부를 입력하세요');
        		return;
        	}
            return true;
        }

        //callback메소드
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		if (ErrorCode == -2) {
        			this.alert("본부 사용자만 이용할 수 있습니다.");
        		} else {
        			this.gfn_getMessage("alert", "error.message.server.exception");
        		}
        		return;
        	} else {
        		if (svcID == "insertSurvey") {
        			if (ErrorCode == 0) {
        				this.gfn_getMessage("alert", "result.message.save.success");
        				this.close();
        			}
        		} else if (svcID == "updateSurvey") {
        			if (ErrorCode == 0) {
        				this.gfn_getMessage("alert", "result.message.save.success");
        				this.close();
        			}
        		}
        	}
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_file.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_close.addEventHandler("onclick", this.fn_close_onclick, this);
            this.Static07.addEventHandler("onclick", this.Static07_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.ed_subtitle.addEventHandler("oneditclick", this.ed_subtitle_oneditclick, this);
            this.SRV_ST_DT.addEventHandler("onchanged", this.Calendar_onchanged, this);
            this.SRV_ED_DT.addEventHandler("onchanged", this.Calendar_onchanged, this);
            this.brn_cls.addEventHandler("onclick", this.btn_close_onclick, this);
            this.use_yn.addEventHandler("onitemclick", this.Radio00_onitemclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_8341_P01.xfdl");

       
    };
}
)();
