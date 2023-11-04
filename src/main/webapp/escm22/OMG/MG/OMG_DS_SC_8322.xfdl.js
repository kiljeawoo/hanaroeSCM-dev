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
                this.set_name("OMG_DS_SC_8322");
                this.set_titletext("설문조사 답변등록 ");
                this.set_name("OMG_DS_SC_8322");
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
            obj._setContents("<ColumnInfo><Column id=\"SRV_A_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ANSWER\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TXT_COL_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"TXT_ROW_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_Q_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BSN_DSC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"BSN_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_Q_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_Q_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTION\" type=\"STRING\" size=\"256\"/><Column id=\"A_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RMK_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_survey_a", this);
            obj._setContents("<ColumnInfo><Column id=\"BSN_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_Q_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_A_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SRV_A_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ANSWER\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TXT_COL_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"TXT_ROW_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRGMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CMENO\" type=\"STRING\" size=\"256\"/><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_ans", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">C</Col><Col id=\"value\">선택형</Col></Row><Row><Col id=\"code\">T</Col><Col id=\"value\">텍스트</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "787", "0", "15", "490", null, null, this);
            obj.set_taborder("3");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "732", "12", "56", "8", null, null, this);
            obj.set_taborder("4");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "48", null, "43", "15", null, this);
            obj.set_taborder("5");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Edit("ed_title", "absolute", "67", "10", "642", "21", null, null, this.div_search);
            obj.set_taborder("11");
            obj.set_maxlength("30");
            obj.set_readonly("true");
            obj.style.set_background("beige");
            obj.style.set_font("9 Gulim,HY견고딕");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "15", "10", "103", "21", null, null, this.div_search);
            obj.set_taborder("12");
            obj.set_text("설문 :");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 20 0 11");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "10", "43", null, null, "5", "252", this);
            obj.set_taborder("1");
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
            obj = new Static("Static01", "absolute", "487", "-38", "139", "21", null, null, this.div_list);
            obj.set_taborder("9");
            obj.set_text("페이지당 게시물수");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 20 0 11");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_flag", "absolute", "346", "-25", null, "12", "364", null, this.div_list);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);

            obj = new Button("btn_cho", "absolute", null, "59", "41", "21", "27", null, this);
            obj.set_taborder("6");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "145", "15", "73", "23", null, null, this);
            obj.set_taborder("10");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "226", "15", "73", "23", null, null, this);
            obj.set_taborder("11");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02", "absolute", "307", "15", "73", "23", null, null, this);
            obj.set_taborder("12");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03", "absolute", "388", "15", "73", "23", null, null, this);
            obj.set_taborder("15");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert", "absolute", null, "321", "44", "22", "131", null, this);
            obj.set_taborder("13");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_que", "absolute", "64", "321", "501", "22", null, null, this);
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.style.set_background("beige");
            obj.style.set_font("9 Gulim,HY견고딕");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_comncList00", "absolute", "0", "347", null, null, "18", "17", this);
            obj.set_cssclass("subgrd");
            obj.set_taborder("0");
            obj.set_binddataset("ds_survey_a");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"45\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"130\" band=\"left\"/><Column size=\"450\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"삭제\"/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\" text=\"행수\"/><Cell col=\"3\" text=\"열수\"/><Cell col=\"4\" text=\"답변 형식\"/><Cell col=\"5\" text=\"답변\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"none\" editdisplay=\"edit\"/><Cell col=\"1\" text=\"bind:SRV_A_NUM\"/><Cell col=\"2\" edittype=\"text\" editfilter=\"number\" text=\"bind:TXT_COL_CNT\" editdisplay=\"display\" combodisplay=\"edit\"/><Cell col=\"3\" edittype=\"text\" editfilter=\"number\" text=\"bind:TXT_ROW_CNT\" editdisplay=\"display\" combodisplay=\"edit\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:INPUT_TYPE\" combodataset=\"ds_ans\" combocodecol=\"code\" combodatacol=\"value\" combodisplay=\"display\" tooltiptext=\"bind:INPUT_TYPE\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"text\" style=\"controlbackground:#edf4faff;\" cssclass=\"bodyEssential\" text=\"bind:ANSWER\" editdisplay=\"display\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "5", "322", "103", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_text("질문 :");
            obj.set_cssclass("sta_WFSA_Label");
            obj.style.set_padding("0 20 0 11");
            this.addChild(obj.name, obj);

            obj = new Button("btn_quplus", "absolute", null, "321", "51", "22", "74", null, this);
            obj.set_taborder("7");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_select", "absolute", null, "321", "44", "22", "181", null, this);
            obj.set_taborder("16");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_update", "absolute", null, "288", "44", "22", "41", null, this);
            obj.set_taborder("17");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_view", "absolute", null, "19", "57", "22", "16", null, this);
            obj.set_taborder("18");
            obj.set_text("미리보기");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04", "absolute", "469", "15", "73", "23", null, null, this);
            obj.set_taborder("19");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05", "absolute", "550", "15", "73", "23", null, null, this);
            obj.set_taborder("20");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "-7", "43", "795", "259", null, null, this);
            obj.set_taborder("21");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_comncList", "absolute", "11", "66", null, null, "13", "47", this.Div00);
            obj.set_taborder("0");
            obj.set_binddataset("ds_survey_q");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"63\" band=\"left\"/><Column size=\"130\" band=\"left\"/><Column size=\"515\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"답변 형식\"/><Cell col=\"2\" text=\"질문\"/></Band><Band id=\"body\"><Cell text=\"bind:SRV_Q_SEQ\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"none\" text=\"bind:A_TYPE\" combodataset=\"ds_que\" combocodecol=\"code\" combodatacol=\"value\" combodisplay=\"edit\" tooltiptext=\"bind:A_TYPE\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" style=\"controlbackground:#edf4faff;\" cssclass=\"bodyEssential\" text=\"bind:QUESTION\" editdisplay=\"edit\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_delrow", "absolute", null, "321", "51", "22", "18", null, this);
            obj.set_taborder("22");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit06", "absolute", "631", "15", "73", "23", null, null, this);
            obj.set_taborder("23");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 965, 43, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 965, 444, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_text("Div02");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 795, 259, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("21");
            		p.set_text("Div00");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 562, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("설문조사 답변등록 ");

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
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_8322.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_8322.xfdl", function(exports) {
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
        	this.ds_survey.addRow();
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        //	this.fn_search_onclick();
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.fn_search_onclick = function(obj,e)
        {	
        	this.fn_retrieveSurveyList();// 처음조회시 1페이지를 조회한다.
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/

        /*질문 조회*/ 
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
        		if (svcID == "insertSurveyans") {
        			if (ErrorCode == 0) {
        				this.gfn_getMessage("alert", "result.message.save.success");
        				this.fn_answerList();
        			}
        		} else if (svcID == "deleteSurveyans") {
        			if (ErrorCode == 0) {
        				alert("삭제가 완료되었습니다.");
        				this.fn_answerList();
        			}
        		} else if (svcID == "updateSurveyans") {
        			if (ErrorCode == 0) {
        				alert("수정이 완료되었습니다.");
        				this.fn_answerList();
        			}
        		}
        	}
        }

        /* 팝업호출확인하기 */
        this.fn_popupAfter = function(strId,strVal)
        {
        	if (this.gfn_isNull(strVal)) {
        		return;
        	}
        	if (strId == "POPUP_SELECT_SRV") {
        		var strValNo = strVal.split('|');
        		this.div_search.ed_title.set_value(strValNo[0]);
        		this.Edit00.set_value(strValNo[1]);
        		this.Edit01.set_value(strValNo[2]);
        		this.Edit02.set_value(strValNo[3]);
        		this.Edit04.set_value(strValNo[4]);
        		this.Edit05.set_value(strValNo[5]);
        		this.Edit06.set_value(strValNo[6]);
        		
        		if (strValNo[6] == "002") {
        			this.ds_ans.filter("code == 'C'");
        		} else {
        			this.ds_ans.filter("");
        		}
        		
        		this.fn_retrieveSurveyList();
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
        	// 혁신점포 공급업체 모니터링의 경우 있음, 없음 고정시키도록 함
        	if (this.Edit06.value == "002") {
        		if (this.ds_survey_a.rowcount >= 2) {
        			this.alert("혁신점포 공급업체 모니터링(설문조사) 질문의 답변은 ");
        			return;
        		}
        		
        		while (this.ds_survey_a.rowcount < 2) {
        			var row = this.ds_survey_a.addRow();
        			this.ds_survey_a.setColumn(row, "INPUT_TYPE", "C");
        			this.ds_survey_a.setColumn(row, "ANSWER", row == 0 ? "있음" : "없음");
        		}
        	} else {
        		this.ds_survey_a.addRow();
        	}
        }

        /*답변 등록*/
        this.btn_insert_onclick = function(obj,e)
        {
        	if (!this.fn_validation()) {
        		return;
        	}
        	
        	var sParams = "BSN_DSC="  + "ESCM"
        			+ " SRV_SEQ=" + this.gfn_nullToEmpty(this.Edit00.value)  //설문순번
        			+ " SRV_Q_SEQ="+ this.gfn_nullToEmpty(this.Edit03.value) //질문순번
        			 ; 
        	var dsParams = "ds_survey_a=ds_survey_a";
        	
        	var sSvcID        = "insertSurveyans";
        	var sURL          = "svc::rest/mg/survey/insertSurveyans";
        	var sInDatasets   = dsParams;
        	var sOutDatasets  = "";
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /*질문 선택*/
        this.grd_comncList_oncellclick = function(obj,e)
        {
        	var quetitle = this.ds_survey_q.getColumn(e.row,"QUESTION");
        	var SRV_Q_SEQ = this.ds_survey_q.getColumn(e.row,"SRV_Q_SEQ");
        	this.ed_que.set_value(quetitle);
        	this.Edit03.set_value(SRV_Q_SEQ);
        	this.fn_answerList();
        }

        /*답변 조회*/
        this.fn_answerList = function()
        {
        	this.ds_survey_a.clearData();
        	
        	var SRV_SEQ		= this.gfn_nullToEmpty(this.Edit00.value);	
        	var SRV_Q_SEQ	= this.gfn_nullToEmpty(this.Edit03.value);	// 제목

        	var sParam        = "SRV_SEQ=" + SRV_SEQ
        					 +  " SRV_Q_SEQ=" + SRV_Q_SEQ;
        	var sSvcID        = "retrieveSurveyansList";
        	var sURL          = "svc::rest/mg/survey/retrieveSurveyansList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_survey_a=ds_survey_a";
        	var sArgument     = sParam;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        //삭제 클릭
        this.grd_comncList00_oncellclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		var chk = this.ds_survey_a.getColumn(e.row, "ISCHECKED");
        		if (chk == "1") {
        			this.ds_survey_a.setColumn(e.row, "ISCHECKED", "0");
        		} else {
        			this.ds_survey_a.setColumn(e.row, "ISCHECKED", "1");
        		}
        	}
        }
        /*답변 조회*/
        this.btn_select_onclick = function(obj,e)
        {
        	this.fn_answerList();
        }

        /*답변 수정*/
        this.btn_update_onclick = function(obj,e)
        {
        	if (!this.fn_validation()) {
        		return;
        	}

        	for (var i = 0 , length = this.ds_survey_a.getRowCount(); i < length; i++) {
        		if (this.ds_survey_a.getColumn(i,"INPUT_TYPE") != this.ds_survey_a.getOrgColumn(i,"INPUT_TYPE") 
        		|| this.ds_survey_a.getColumn(i,"ANSWER") != this.ds_survey_a.getOrgColumn(i,"ANSWER")
        		|| this.ds_survey_a.getColumn(i,"TXT_COL_CNT") != this.ds_survey_a.getOrgColumn(i,"TXT_COL_CNT")
        		|| this.ds_survey_a.getColumn(i,"TXT_ROW_CNT") != this.ds_survey_a.getOrgColumn(i,"TXT_ROW_CNT")) //기존 데이터랑 다르면 update
        		{
        				var SRV_A_NUM = this.ds_survey_a.getColumn(i,"SRV_A_NUM");
        				var INPUT_TYPE = this.ds_survey_a.getColumn(i,"INPUT_TYPE");
        				var ANSWER = this.ds_survey_a.getColumn(i,"ANSWER");
        				var TXT_COL_CNT = this.ds_survey_a.getColumn(i,"TXT_COL_CNT");
        				var TXT_ROW_CNT = this.ds_survey_a.getColumn(i,"TXT_ROW_CNT");
        				var SRV_SEQ = this.gfn_nullToEmpty(this.Edit00.value);
        				var SRV_Q_SEQ = this.gfn_nullToEmpty(this.Edit03.value);
        				var BSN_DSC = "ESCM";
        				
        				this.ds_param.clearData();
        				this.ds_param.addRow();	
        				this.ds_param.setColumn(0,"SRV_A_NUM",SRV_A_NUM);
        				this.ds_param.setColumn(0,"INPUT_TYPE",INPUT_TYPE);
        				this.ds_param.setColumn(0,"ANSWER",ANSWER);
        				this.ds_param.setColumn(0,"TXT_COL_CNT",TXT_COL_CNT);
        				this.ds_param.setColumn(0,"TXT_ROW_CNT",TXT_ROW_CNT);
        				this.ds_param.setColumn(0,"SRV_SEQ",SRV_SEQ);
        				this.ds_param.setColumn(0,"SRV_Q_SEQ",SRV_Q_SEQ);
        				this.ds_param.setColumn(0,"BSN_DSC",BSN_DSC);
        				
        				var dsParams = "ds_param=ds_param:U";
        				var sSvcID        = "updateSurveyans";
        				var sURL          = "svc::rest/mg/survey/updateSurveyans";
        				var sInDatasets   = dsParams;
        				var sOutDatasets  = "";
        				var sArgument     = "";
        				var sCallbackFunc = "fn_callBack";
        				var sTranType     = "U"; // U:저장/삭제, S:조회
        				this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        		}
        	}
        }

        // 입력값 검증
        this.fn_validation = function()
        {
        	if (this.ds_survey_a.getRowCount() > 0) {
        		for (var i=0; i<this.ds_survey_a.getRowCount(); i++) {
        			var c1 = this.ds_survey_a.getColumn(i, "INPUT_TYPE");
        			var c2 = this.ds_survey_a.getColumn(i, "ANSWER");
        			
        			if (this.gfn_nullToEmpty(c1) == "" || this.gfn_nullToEmpty(c2) == "") {
        				alert("답변형식과 답변은 필수입력항목입니다.");
        				return false;
        			}
        		}
        	}
        	return true;
        }

        /*미리보기*/
        this.btn_view_onclick = function(obj,e)
        {
        	this.url="";
        	this.popup_W= 0 ;
        	this.popup_H= 0;
        	this.BlbdId="";
        	this.framename = "popu0p"; 
        	 
        	var TITLE = this.div_search.ed_title.value;
        	var SUBTITLE = this.Edit05.value;
        	var INTRO = this.Edit04.value;
        	var SRV_SEQ = this.Edit00.value;
        	application.open(this.framename, "OMG.MG::OMG_DS_SC_8331.xfdl", this,{URL:this.url,TITLE:this.TITLE,SUBTITLE:this.SUBTITLE,INTRO:this.INTRO,SRV_SEQ:this.SRV_SEQ}, "showtitlebar=false showstatusbar=true autosize=false resizable=true", this.popup_W, this.popup_H ,700, 740);
        	this.popup_W = this.popup_W  + 40 ;
        	this.popup_H= this.popup_H + 40;	
        }

        // 행삭제
        this.btn_delrow_onclick = function(obj,e)
        {
        	var cnt = this.ds_survey_a.getRowCount();
        	if (cnt > 0) {
        		var updateDel = false;
        		for (var i=this.ds_survey_a.getRowCount()-1; i>=0; i--) {
        			if (this.ds_survey_a.getColumn(i, "ISCHECKED") == "1") {
        				if (this.gfn_nullToEmpty(this.ds_survey_a.getColumn(i, "SRV_A_SEQ")) != "") {
        					updateDel = true;
        					continue;
        				}
        				this.ds_survey_a.deleteRow(i);
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
            this.div_search.ed_title.addEventHandler("oneditclick", this.div_search_edt_menuId_oneditclick, this);
            this.div_search.Static05.addEventHandler("onclick", this.div_search_Static05_onclick, this);
            this.div_list.Static01.addEventHandler("onclick", this.div_search_Static01_onclick, this);
            this.div_list.btn_flag.addEventHandler("onclick", this.btn_flag_onclick, this);
            this.btn_cho.addEventHandler("onclick", this.btn_cho_onclick, this);
            this.btn_insert.addEventHandler("onclick", this.btn_insert_onclick, this);
            this.grd_comncList00.addEventHandler("oncellclick", this.grd_comncList00_oncellclick, this);
            this.Static00.addEventHandler("onclick", this.div_search_Static05_onclick, this);
            this.btn_quplus.addEventHandler("onclick", this.btn_quplus_onclick, this);
            this.btn_select.addEventHandler("onclick", this.btn_select_onclick, this);
            this.btn_update.addEventHandler("onclick", this.btn_update_onclick, this);
            this.btn_view.addEventHandler("onclick", this.btn_view_onclick, this);
            this.Div00.grd_comncList.addEventHandler("oncellclick", this.grd_comncList_oncellclick, this);
            this.btn_delrow.addEventHandler("onclick", this.btn_delrow_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_8322.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
