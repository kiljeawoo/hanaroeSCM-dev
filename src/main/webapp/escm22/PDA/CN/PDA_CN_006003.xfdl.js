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
                this.set_name("PDA_CN_006003");
                this.set_titletext("PDA공지사항 등록");
                this._setFormPosition(0,0,629,591);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("pda_mst", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NOTICE_SQNO\" type=\"bigdecimal\" size=\"10\"/><Column id=\"NOTICE_ST_DTM\" type=\"STRING\" size=\"10\"/><Column id=\"NOTICE_ED_DTM\" type=\"STRING\" size=\"10\"/><Column id=\"NOTICE_SUBJECT\" type=\"STRING\" size=\"200\"/><Column id=\"NOTICE_CNTN\" type=\"STRING\" size=\"4000\"/><Column id=\"PUSH_USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"PUSH_PRC_ST\" type=\"STRING\" size=\"1\"/><Column id=\"PUSH_SEND_DTM\" type=\"STRING\" size=\"14\"/><Column id=\"PUSH_SEND_RESULT\" type=\"STRING\" size=\"200\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"9\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"14\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"9\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"14\"/><Column id=\"NOTICE_MAX_SQNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static33", "absolute", "1.43%", "14", null, "21", "70.59%", null, this);
            obj.set_taborder("0");
            obj.set_text("공지사항 등록");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "1.59%", "34", null, "29", "85.69%", null, this);
            obj.set_taborder("1");
            obj.set_text("일렬번호");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_linespace("5");
            this.addChild(obj.name, obj);

            obj = new TextArea("notice_sqno", "absolute", "14.31%", "34", null, "29", "60.57%", null, this);
            obj.set_taborder("2");
            obj.getSetter("onclick").set("st_CNR_CMPL_ENO_onclick");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new TextArea("notice_subject", "absolute", "54.53%", "34", null, "29", "3.34%", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "39.43%", "34", null, "29", "45.31%", null, this);
            obj.set_taborder("4");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_linespace("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "1.59%", "417", null, "21", "82.51%", null, this);
            obj.set_taborder("5");
            obj.set_text("게시 기간");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_linespace("5");
            obj.style.set_align("middle");
            this.addChild(obj.name, obj);

            obj = new TextArea("notice_cntn", "absolute", "1.59%", "74", null, "335", "3.5%", null, this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new TextArea("notice_st_dtm", "absolute", "17.49%", "417", null, "21", "68.2%", null, this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "32.43%", "417", null, "21", "65.98%", null, this);
            obj.set_taborder("8");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new TextArea("notice_ed_dtm", "absolute", "34.34%", "417", null, "21", "51.35%", null, this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "1.59%", "450", null, "21", "82.51%", null, this);
            obj.set_taborder("10");
            obj.set_text("푸시사용여부");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_linespace("5");
            obj.style.set_align("middle");
            this.addChild(obj.name, obj);

            obj = new Radio("push_use_yn", "absolute", "19.55%", "449", null, "20", "47.06%", null, this);
            this.addChild(obj.name, obj);
            var push_use_yn_innerdataset = new Dataset("push_use_yn_innerdataset", this.push_use_yn);
            push_use_yn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"100\"/><Column id=\"datacolumn\" size=\"100\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">사용안함</Col></Row></Rows>");
            obj.set_innerdataset(push_use_yn_innerdataset);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("Y");
            obj.set_direction("vertical");
            obj.set_index("0");

            obj = new Static("Static02", "absolute", "51.83%", "449", null, "21", "32.11%", null, this);
            obj.set_taborder("12");
            obj.set_text("처리여부");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_linespace("5");
            obj.style.set_align("middle");
            this.addChild(obj.name, obj);

            obj = new Radio("push_prc_st", "absolute", "69.16%", "449", null, "20", "-1.91%", null, this);
            this.addChild(obj.name, obj);
            var push_prc_st_innerdataset = new Dataset("push_prc_st_innerdataset", this.push_prc_st);
            push_prc_st_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"100\"/><Column id=\"datacolumn\" size=\"100\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">처리</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미처리</Col></Row></Rows>");
            obj.set_innerdataset(push_prc_st_innerdataset);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("Y");
            obj.set_direction("vertical");
            obj.set_index("0");

            obj = new TextArea("push_send_result", "absolute", "67.73%", "470", null, "21", "3.5%", null, this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            obj.style.setStyleValue("background", "disabled", "yellow");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "51.83%", "470", null, "21", "32.27%", null, this);
            obj.set_taborder("15");
            obj.set_text("송신결과");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_linespace("5");
            obj.style.set_align("middle");
            this.addChild(obj.name, obj);

            obj = new TextArea("push_send_dtm", "absolute", "17.49%", "469", null, "21", "48.01%", null, this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            obj.style.setStyleValue("background", "disabled", "yellow");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "1.59%", "469", null, "21", "82.51%", null, this);
            obj.set_taborder("17");
            obj.set_text("송신일시");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_linespace("5");
            obj.style.set_align("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "1.59%", "490", null, "21", "82.51%", null, this);
            obj.set_taborder("18");
            obj.set_text("최초등록자");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_linespace("5");
            obj.style.set_align("middle");
            this.addChild(obj.name, obj);

            obj = new TextArea("fs_rgm", "absolute", "17.49%", "489", null, "21", "48.01%", null, this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "51.99%", "490", null, "21", "31.96%", null, this);
            obj.set_taborder("20");
            obj.set_text("최초등록일시");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_linespace("5");
            obj.style.set_align("middle");
            this.addChild(obj.name, obj);

            obj = new Static("fsrg_dtm", "absolute", "67.73%", "490", null, "21", "3.5%", null, this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("left middle");
            obj.set_text("(자동등록)");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("lschg_dtm", "absolute", "67.73%", "510", null, "21", "3.5%", null, this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_padding("0 0 0 0");
            obj.style.set_align("left");
            obj.set_text("(자동등록)");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "51.83%", "510", null, "21", "32.27%", null, this);
            obj.set_taborder("23");
            obj.set_text("최종변경일시");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_linespace("5");
            obj.style.set_align("middle");
            this.addChild(obj.name, obj);

            obj = new TextArea("ls_chgm", "absolute", "17.49%", "510", null, "21", "48.01%", null, this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "1.59%", "510", null, "21", "82.51%", null, this);
            obj.set_taborder("25");
            obj.set_text("최종변경자");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_linespace("5");
            obj.style.set_align("middle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", "36.09%", "548", null, "21", "55.17%", null, this);
            obj.set_taborder("26");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete", "absolute", "53.26%", "548", null, "21", "38%", null, this);
            obj.set_taborder("27");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 629, 591, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("PDA_CN_006003");
            		p.set_titletext("PDA공지사항 등록");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("PDA_CN_006003.xfdl", "lib::comLib.xjs");
        this.registerScript("PDA_CN_006003.xfdl", function(exports) {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        var btn_save_enable = false;
        //var NOTICE_MAX_SQNO = "";

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
           this.gfn_setInitForm(obj, e); //공통   
           this.notice_sqno.set_value(this.parent.NOTICE_MAX_SQNO); //textArea에 6001로 받아온 값 세팅   
        }

        this.fn_afterFormOnload = function()
        {
        }

        

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        /*콜백 함수*/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}
        	
            if(svcID == "insert") {
        		this.gfn_getMessage("alert", "result.message.save.success");
        		btn_save_enable = false;
        		this.close("SUCCESS");
        	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        /*추가등록 시 사용되는 Validation Check */
        /*추가등록 시 사용되는 Validation Check */
        this.fn_validationCheck = function() {

        	if (this.gfn_isNull(this.notice_st_dtm.value)) {
        		this.alert("시작일시를 입력해주세요");
        		this.notice_st_dtm.setFocus();
        		return false;
        	}
        	if (this.notice_st_dtm.value.length <= 9) {
        		this.alert("게시시작 기간을 확인해주세요(ex:yyyymmddss)");
        		this.notice_st_dtm.setFocus();
        		return false;
        	}
        	if (this.gfn_isNull(this.notice_ed_dtm.value)) {
        		this.alert("종료일시를 입력해주세요");
        		this.notice_ed_dtm.setFocus();
        		return false;
        	}
        	if (this.notice_ed_dtm.value.length <= 9) {
        		this.alert("게시종료 기간을 확인해주세요(ex:yyyymmddss)");
        		this.notice_ed_dtm.setFocus();
        		return false;
        	}	
        	if (this.gfn_isNull(this.notice_subject.value)) {
        		this.alert("제목을 입력해주세요");
        		this.notice_subject.setFocus();
        		return false;
        	}
        		if (this.gfn_isNull(this.notice_cntn.value)) {
        		this.alert("내용을 입력해주세요");
        		this.notice_cntn.setFocus();
        		return false;
        	}
        	
        	if (this.gfn_isNull(this.push_use_yn.value)) {
        		this.alert("PUSH 사용여부를 입력해주세요");
        		this.push_use_yn.setFocus();
        		return false;
        	}
        	
        	if (this.gfn_isNull(this.push_prc_st.value)) {
        		this.alert("PUSH 처리상태를 입력해주세요");
        		this.push_prc_st.setFocus();
        		return false;
        	}
        	
        	if (this.gfn_isNull(this.fs_rgm.value)) {
        		this.alert("최초등록자를 입력해주세요");
        		this.fs_rgm.setFocus();
        		return false;
        	}
        	if (this.gfn_isNull(this.ls_chgm.value)) {
        		this.alert("최종변경자를 입력해주세요");
        		this.ls_chgm.setFocus();
        		return false;
        	}
        	
        	return true;
        }

        

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
        this.btn_save_onclick = function(obj,e)
        {
        		if(this.fn_validationCheck()){
        		 	var sSvcID        = "insert";
        			var sURL          = "svc::rest/pda/insertpdaNotice";
        			var sInDatasets   = ""
        			var sOutDatasets  = "pda_mst=pda_mst";
        			var sArgument     = "NOTICE_MAX_SQNO="+ this.gfn_nullToEmpty(this.notice_sqno.value) +
        			                    " NOTICE_ST_DTM="+ this.gfn_nullToEmpty(this.notice_st_dtm.value) +
        								" NOTICE_ED_DTM=" + this.gfn_nullToEmpty(this.notice_ed_dtm.value) +
        								" NOTICE_SUBJECT=" + this.gfn_nullToEmpty(this.notice_subject.value) +
        								" NOTICE_CNTN=" + this.gfn_nullToEmpty(this.notice_cntn.value) +
        								" PUSH_USE_YN=" + this.gfn_nullToEmpty(this.push_use_yn.value) +
        								" PUSH_PRC_ST=" + this.gfn_nullToEmpty(this.push_prc_st.value) +
        								" PUSH_SEND_DTM=" + this.gfn_nullToEmpty(this.push_send_dtm.value) +
        								" PUSH_SEND_RESULT=" + this.gfn_nullToEmpty(this.push_send_result.value) +
        								" FS_RGM=" + this.gfn_nullToEmpty(this.fs_rgm.value) +
        								" FSRG_DTM=" + this.gfn_nullToEmpty(this.fsrg_dtm.value) +
        								" LS_CHGM=" + this.gfn_nullToEmpty(this.ls_chgm.value) +
        								" LSCHG_DTM=" + this.gfn_nullToEmpty(this.lschg_dtm.value);
        			var sCallbackFunc = "fn_callBack";
        			var sTranType     = "U"; // U:저장/삭제, S:조회
        				
        			if (!confirm("등록하시겠습니까?")) {
        				return;
        				}
        			
        			this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);			
        		}	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Static33.addEventHandler("onclick", this.Static33_onclick, this);
            this.Static00.addEventHandler("onclick", this.Static00_onclick, this);
            this.Static01.addEventHandler("onclick", this.Static00_onclick, this);
            this.Static02.addEventHandler("onclick", this.Static00_onclick, this);
            this.Static04.addEventHandler("onclick", this.Static00_onclick, this);
            this.Static03.addEventHandler("onclick", this.Static00_onclick, this);
            this.Static06.addEventHandler("onclick", this.Static00_onclick, this);
            this.Static07.addEventHandler("onclick", this.Static00_onclick, this);
            this.Static09.addEventHandler("onclick", this.Static00_onclick, this);
            this.Static08.addEventHandler("onclick", this.Static00_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.btn_delete.addEventHandler("onclick", this.btn_delete_onclick, this);

        };

        this.loadIncludeScript("PDA_CN_006003.xfdl", true);

       
    };
}
)();
