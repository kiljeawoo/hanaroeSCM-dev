﻿(function()
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
                this.set_name("OMG_DS_SC_8320");
                this.set_titletext("설문조사 질문등록");
                this.set_name("OMG_DS_SC_8320");
                this._setFormPosition(0,0,803,562);
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
            obj._setContents("<ColumnInfo><Column id=\"SRV_Q_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTION\" type=\"STRING\" size=\"256\"/><Column id=\"A_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BSN_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"BSN_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBTITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"APL_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"APL_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RMK_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRGMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CMENO\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_que", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">S</Col><Col id=\"value\">단답형</Col></Row><Row><Col id=\"code\">M</Col><Col id=\"value\">복수형</Col></Row><Row><Col id=\"code\">T</Col><Col id=\"value\">주관식</Col></Row><Row><Col id=\"code\">A</Col><Col id=\"value\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_survey_q", this);
            obj._setContents("<ColumnInfo><Column id=\"BSN_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_Q_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_Q_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTION\" type=\"STRING\" size=\"256\"/><Column id=\"A_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RMK_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("btn_search", "absolute", null, "20", "58", "21", "18", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "787", "0", "15", "490", null, null, this);
            obj.set_taborder("4");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "732", "12", "56", "8", null, null, this);
            obj.set_taborder("5");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "48", null, "43", "15", null, this);
            obj.set_taborder("6");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Edit("ed_title", "absolute", "67", "10", "637", "21", null, null, this.div_search);
            obj.set_taborder("11");
            obj.set_maxlength("30");
            obj.set_readonly("true");
            obj.style.set_background("beige");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "15", "10", "103", "21", null, null, this.div_search);
            obj.set_taborder("12");
            obj.set_text("설문 :");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 20 0 11");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "97", null, null, "15", "1", this);
            obj.set_taborder("0");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Combo("cbo_pageNum", "absolute", "701", "-38", "60", "21", null, null, this.div_list);
            this.div_list.addChild(obj.name, obj);
            var cbo_pageNum_innerdataset = new Dataset("cbo_pageNum_innerdataset", this.div_list.cbo_pageNum);
            cbo_pageNum_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row></Rows>");
            obj.set_innerdataset(cbo_pageNum_innerdataset);
            obj.set_taborder("8");
            obj.set_value("20");
            obj.set_text("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj = new Static("Static01", "absolute", "562", "-38", "139", "21", null, null, this.div_list);
            obj.set_taborder("9");
            obj.set_text("페이지당 게시물수");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 20 0 11");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_paging", "absolute", "28.55%", null, "338", "29", null, "-2", this.div_list);
            obj.set_taborder("6");
            obj.style.set_align("center middle");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_flag", "absolute", "346", "-25", null, "12", "364", null, this.div_list);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);

            obj = new Button("btn_insert", "absolute", null, "115", "41", "21", "127", null, this);
            obj.set_taborder("8");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cho", "absolute", null, "59", "41", "21", "27", null, this);
            obj.set_taborder("9");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_quplus", "absolute", null, "115", "51", "21", "72", null, this);
            obj.set_taborder("10");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_comncList", "absolute", "1", "141", null, null, "17", "33", this);
            obj.set_taborder("12");
            obj.set_binddataset("ds_survey_q");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_cssclass("subgrd");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"49\" band=\"left\"/><Column size=\"63\" band=\"left\"/><Column size=\"130\" band=\"left\"/><Column size=\"491\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"삭제\"/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\" text=\"답변 형식\"/><Cell col=\"3\" text=\"질문\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" text=\"bind:ISCHECKED\" editdisplay=\"display\"/><Cell col=\"1\" text=\"bind:SRV_Q_SEQ\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:A_TYPE\" combodataset=\"ds_que\" combocodecol=\"code\" combodatacol=\"value\" combodisplay=\"display\" tooltiptext=\"bind:A_TYPE\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"text\" style=\"controlbackground:#edf4faff;\" cssclass=\"bodyEssential\" text=\"bind:QUESTION\" editdisplay=\"display\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "168", "15", "73", "23", null, null, this);
            obj.set_taborder("13");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "242", "15", "73", "23", null, null, this);
            obj.set_taborder("14");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "316", "15", "73", "23", null, null, this);
            obj.set_taborder("15");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delrow", "absolute", null, "115", "51", "21", "17", null, this);
            obj.set_taborder("16");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 965, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 965, 444, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div02");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 562, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("설문조사 질문등록");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","divSearch.edt_menuId","value","ds_in","MENU_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divSearch.cbo_menuLevel","value","ds_in","MENU_LEVEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divSearch.edt_menuName","value","ds_in","MENU_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divSearch.edt_svcGroup","value","ds_in","SVC_GROUP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divSearch.edt_fileName","value","ds_in","FILE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divSearch.edt_fileType","value","ds_in","FILE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","divSearch.cbo_displayYn","value","ds_in","DISPLAY_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","divSearch.cbo_useYn","value","ds_in","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_8320.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_8320.xfdl", function() {
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
        this.form_onload = function(obj,e)
        {	
        	this.ds_survey.addRow();
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	this.fn_search_onclick();
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.fn_search_onclick = function(obj,e)
        {	
        	this.fn_retrieveSurveyList();
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/

        /* 조회-서비스 Call */ 
        this.fn_retrieveSurveyList = function()
        {		
        	this.ds_survey_q.clearData();
        	
        	var SRV_SEQ		= this.gfn_nullToEmpty(this.Edit00.value);			// 제목

        	var sParam        = "SRV_SEQ=" + SRV_SEQ;
        	var sSvcID        = "retrieveSurveyqueList";
        	var sURL          = "svc::rest/mg/survey/retrieveSurveyqueList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_survey_q=ds_survey_q";
        	var sArgument     = sParam;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        /* 콜백메소드 */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {		
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID == "insertSurveyque") {
        			this.fn_retrieveSurveyList();
        		} else if (svcID == "deleteSurveyque") {
        			alert("삭제가 완료되었습니다.");
        			this.fn_retrieveSurveyList();
        		} else if (svcID == "updateSurveyque") {
        			lert("수정이 완료되었습니다.");
        			this.fn_retrieveSurveyList();
        		}
        	}
        }

        /* 팝업호출확인하기 */
        this.fn_popupAfter = function(strId,strVal)
        {
        	if (this.gfn_isNull(strVal)) {
        		return;
        	}
        	switch(strId)
        	{
        		case "POPUP_SELECT_SRV" :
        			var strValNo = strVal.split('|');
        			this.div_search.ed_title.set_value(strValNo[0]);
        			this.Edit00.set_value(strValNo[1]);
        			this.Edit01.set_value(strValNo[2]);
        			this.Edit02.set_value(strValNo[3]);
        			
        			if (strValNo[6] == "002") {
        				this.ds_que.filter("code == 'S'");
        			} else {
        				this.ds_que.filter("");
        			}
        			
        			this.fn_search_onclick();
        	}
        }

        //설문조사 선택 (팝업창으로 설문 선택)
        this.btn_cho_onclick = function(obj,e)
        {
        	var oArg = {BSN_DSC:'ESCM', SRV_DSC:'001'};
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("POPUP_SELECT_SRV", "OMG.MG::OMG_DS_SC_8321.xfdl", oArg, sOption, sPopupCallBack);
        }

        //질문 행 추가
        this.btn_quplus_onclick = function(obj,e)
        {
        	this.ds_survey_q.addRow();
        }

        //질문 저장
        this.fn_insert_onclick = function()
        {
        	var sParams = "BSN_DSC="  + "ESCM"
        		+ " SRV_SEQ=" + this.gfn_nullToEmpty(this.Edit00.value)//설문순번
        		+ " ST_DT="+ this.gfn_nullToEmpty(this.Edit01.value)
        		+ " ED_DT="+ this.gfn_nullToEmpty(this.Edit02.value);

        	var dsParams 	  = "ds_survey_q=ds_survey_q";
        	var sSvcID        = "insertSurveyque";
        	var sURL          = "svc::rest/mg/survey/insertSurveyque";
        	var sInDatasets   = dsParams;
        	var sOutDatasets  = "";
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);		
        }

        //삭제버튼
        this.grd_comncList_oncellclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var chk = this.ds_survey_q.getColumn(e.row, "ISCHECKED");
        		if (chk == "1") {
        			this.ds_survey_q.setColumn(e.row, "ISCHECKED", "0");
        		} else {
        			this.ds_survey_q.setColumn(e.row, "ISCHECKED", "1");
        		}
        	}
        }

        // 행삭제
        this.btn_delrow_onclick = function(obj,e)
        {
        	var cnt = this.ds_survey_q.getRowCount();
        	if (cnt > 0) {
        		var updateDel = false;
        		for (var i=this.ds_survey_q.getRowCount()-1; i>=0; i--) {
        			if (this.ds_survey_q.getColumn(i, "ISCHECKED") == "1") {
        				if (this.gfn_nullToEmpty(this.ds_survey_q.getColumn(i, "SRV_Q_SEQ")) != "") {
        					updateDel = true;
        					continue;
        				}
        				this.ds_survey_q.deleteRow(i);
        			}
        		}
        		if (updateDel) {
        			this.alert("기존에 저장된 행 데이터는 저장 시 삭제됩니다.");
        		}
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.fn_search_onclick, this);
            this.div_search.ed_title.addEventHandler("oneditclick", this.div_search_edt_menuId_oneditclick, this);
            this.div_search.Static05.addEventHandler("onclick", this.div_search_Static05_onclick, this);
            this.div_list.Static01.addEventHandler("onclick", this.div_search_Static01_onclick, this);
            this.div_list.btn_flag.addEventHandler("onclick", this.btn_flag_onclick, this);
            this.btn_insert.addEventHandler("onclick", this.fn_insert_onclick, this);
            this.btn_cho.addEventHandler("onclick", this.btn_cho_onclick, this);
            this.btn_quplus.addEventHandler("onclick", this.btn_quplus_onclick, this);
            this.grd_comncList.addEventHandler("oncellclick", this.grd_comncList_oncellclick, this);
            this.btn_delrow.addEventHandler("onclick", this.btn_delrow_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_8320.xfdl");
        this.loadPreloadList();
       
    };
}
)();
