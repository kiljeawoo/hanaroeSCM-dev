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
                this.set_name("OMG_DS_SC_211331");
                this.set_titletext("특약서(판촉사원의 파견)");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,788,300);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_sctrwPmtnEmpeDspcBrk", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호\"/><Column id=\"SCTRW_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"SQNO\" type=\"STRING\" size=\"256\" sumtext=\"일련번호\"/><Column id=\"STORNM1\" type=\"STRING\" size=\"256\" sumtext=\"점포명1\"/><Column id=\"PMTN_EMPE1\" type=\"STRING\" size=\"256\" sumtext=\"판촉사원1\"/><Column id=\"STORNM2\" type=\"STRING\" size=\"256\" sumtext=\"점포명2\"/><Column id=\"PMTN_EMPE2\" type=\"STRING\" size=\"256\" sumtext=\"판촉사원2\"/><Column id=\"STORNM3\" type=\"STRING\" size=\"256\" sumtext=\"점포명3\"/><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"PMTN_EMPE3\" type=\"STRING\" size=\"256\" sumtext=\"판촉사원3\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_etcEltStylAmm402", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CTRW_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_STY_VER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sctrwDtl02", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호\"/><Column id=\"SCTRW_KDC\" type=\"STRING\" size=\"256\" sumtext=\"특약서종류코드\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_STY_VER\" type=\"STRING\" size=\"256\" sumtext=\"계약서양식버젼\"/><Column id=\"VLD_PRD_ST_DT\" type=\"STRING\" size=\"256\" sumtext=\"유효기간 시작일자\"/><Column id=\"VLD_PRD_ED_DT\" type=\"STRING\" size=\"256\" sumtext=\"유효기간 종료일자\"/><Column id=\"DSPC_PRD_ST_DT\" type=\"STRING\" size=\"256\" sumtext=\"파견기간 시작일자\"/><Column id=\"DSPC_PRD_ED_DT\" type=\"STRING\" size=\"256\" sumtext=\"파견기간 종료일자\"/><Column id=\"WRK_ST_HR\" type=\"STRING\" size=\"256\" sumtext=\"근무시간 시작시간\"/><Column id=\"WRK_ED_HR\" type=\"STRING\" size=\"256\" sumtext=\"근무시간 종료시간\"/><Column id=\"EVT_PRD_ST_DT\" type=\"STRING\" size=\"256\" sumtext=\"행사기간 시작일자\"/><Column id=\"EVT_PRD_ED_DT\" type=\"STRING\" size=\"256\" sumtext=\"행사기간 종료일자\"/><Column id=\"CTRW_FLNM\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일 이름\"/><Column id=\"CTRW_FL_PATHNM\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일전체경로\"/><Column id=\"CTRW_FL_SZE\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일크기\"/><Column id=\"APDFLNM\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일 이름\"/><Column id=\"APDFL_PATHNM\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일전체경로\"/><Column id=\"APDFL_SZE\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일크기\"/><Column id=\"SYS_FLNM\" type=\"STRING\" size=\"256\" sumtext=\"시스템 파일이름\"/><Column id=\"CTRW_CNTN\" type=\"STRING\" size=\"256\" sumtext=\"계약서내용\"/><Column id=\"PY_NT\" type=\"STRING\" size=\"256\"/><Column id=\"SEL_SSDY_RTO\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_SPYAM\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_SGNT\" type=\"STRING\" size=\"256\" sumtext=\"계약서서명\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"SCTR_SJT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static172", "absolute", "0", "0", "467", "21", null, null, this);
            obj.set_taborder("717");
            obj.set_text("특약서(판촉사원의 파견)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button15", "absolute", "711", "0", "77", "21", null, null, this);
            obj.set_taborder("718");
            obj.set_text("계약서보기");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static174", "absolute", "0", "27", null, "29", "86%", null, this);
            obj.set_taborder("721");
            obj.set_text("파견기간");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static175", "absolute", "14%", "27", null, "29", "0%", null, this);
            obj.set_taborder("722");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static176", "absolute", "27.16%", "31", null, "21", "71.57%", null, this);
            obj.set_taborder("723");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_dspcPrdStDt", "absolute", "14.34%", "31", null, "21", "72.97%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Calendar("cal_dspcPrdEdDt", "absolute", "28.43%", "31", null, "21", "58.88%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static177", "absolute", "49.87%", "27", null, "29", "36.17%", null, this);
            obj.set_taborder("726");
            obj.set_text("근무시간");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static179", "absolute", "77.54%", "31", null, "21", "20.18%", null, this);
            obj.set_taborder("730");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Static("Static181", "absolute", "0", "71", "218", "21", null, null, this);
            obj.set_taborder("734");
            obj.set_text("1. 점포별 판촉사원 파견내역");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_wrkEdHr", "absolute", "79.19%", "31", null, "21", "7.99%", null, this);
            obj.set_taborder("3");
            obj.set_mask("##:##");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_wrkStHr", "absolute", "64.21%", "31", null, "21", "22.97%", null, this);
            obj.set_taborder("2");
            obj.set_type("string");
            obj.set_mask("##:##");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_sctrwPmtnEmpeDspcBrk", "absolute", "0", "92", null, null, "0%", "0", this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_sctrwPmtnEmpeDspcBrk");
            obj.set_scrollbars("autoboth");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"160\"/><Column size=\"97\"/><Column size=\"160\"/><Column size=\"97\"/><Column size=\"160\"/><Column size=\"97\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"점포명\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"mask\" text=\"판촉사원\" mask=\"######\"/><Cell col=\"3\" text=\"점포명\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"mask\" text=\"판촉사원\" mask=\"######\"/><Cell col=\"5\" text=\"점포명\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"mask\" text=\"판촉사원\" mask=\"######\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:STORNM1\" editlimit=\"50\" editlengthunit=\"ascii\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"mask\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:PMTN_EMPE1\" mask=\"###\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:STORNM2\" editlimit=\"50\" editlengthunit=\"ascii\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"mask\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:PMTN_EMPE2\" mask=\"###\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"text\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:STORNM3\" editlimit=\"50\" editlengthunit=\"ascii\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"mask\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:PMTN_EMPE3\" mask=\"###\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sctrwPmtnEmpeDspcBrk_add", "absolute", null, "66", "53", "21", "55", null, this);
            obj.set_taborder("4");
            obj.set_text("행추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sctrwPmtnEmpeDspcBrk_del", "absolute", null, "66", "53", "21", "0", null, this);
            obj.set_taborder("5");
            obj.set_text("행삭제");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "200", "0", "414", "27", null, null, this);
            obj.set_taborder("765");
            obj.set_text("27");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static94", "absolute", "13.83%", "215", null, "80", "0%", null, this);
            obj.set_taborder("766");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "0", "215", null, "80", "86.04%", null, this);
            obj.set_taborder("767");
            obj.set_text("특약사항");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_sctrSjt", "absolute", "14.34%", "219", null, "72", "0.38%", null, this);
            obj.set_taborder("6");
            obj.set_wordwrap("char");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("1998");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 788, 300, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("특약서(판촉사원의 파견)");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item2","mae_wrkStHr","value","ds_sctrwDtl02","WRK_ST_HR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","mae_wrkEdHr","value","ds_sctrwDtl02","WRK_ED_HR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","cal_dspcPrdStDt","value","ds_sctrwDtl02","DSPC_PRD_ST_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","cal_dspcPrdEdDt","value","ds_sctrwDtl02","DSPC_PRD_ED_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","txa_sctrSjt","value","ds_sctrwDtl02","SCTR_SJT");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_211331.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_211331.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        var fv_position = 0; //위치값
        var fv_chk = 0; //데이터 체크

        // SCTRW_KD_C
        // 1.특약서(마진율)
        // 2.특약서(판촉사원의 파견
        // 3.특약서(매장위치 및 면적
        // 4.특약서(매장의 철수 등)
        // 5.특약서(원산지 등)
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	// 폼양식
        	for (var i = 0; i < this.parent.ds_etcEltStylAmm.rowcount; i++) {
        		if (this.parent.ds_etcEltStylAmm.getColumn(i, "CTRW_KDC") == "402") {
        			this.ds_etcEltStylAmm402.copyRow(0, this.parent.ds_etcEltStylAmm, i);
        		}
        	}

        	for (var i = 0; i < this.parent.ds_sctrwDtl.rowcount; i++) {
        		if (this.parent.ds_sctrwDtl.getColumn(i, "SCTRW_KDC") == "402") {
        			fv_position = i;
        			fv_chk = 1;
        			this.ds_sctrwDtl02.addRow();
        			this.ds_sctrwDtl02.copyRow(0, this.parent.ds_sctrwDtl , fv_position);
        		}
         	}

        	if (fv_chk == 0) {
        		var toDay = this.gfn_today("yyyyMMdd");
        		chkDay = this.gfn_addMonth(toDay, 1);

        		var nRow = this.parent.ds_sctrwDtl.addRow();
        		fv_position = nRow;
        		this.parent.ds_sctrwDtl.setColumn(fv_position, "SCTRW_KDC", "402");
        		this.parent.ds_sctrwDtl.setColumn(fv_position, 	"CHG_SQNO", this.parent.ds_register.getColumn(0 , "CHG_SQNO"));
        		this.parent.ds_sctrwDtl.setColumn(fv_position, "CTRW_STY_VER", this.ds_etcEltStylAmm402.getColumn(0, "CTRW_STY_VER"));
        		this.parent.ds_sctrwDtl.setColumn(fv_position, "DSPC_PRD_ST_DT", toDay);
        		this.parent.ds_sctrwDtl.setColumn(fv_position, "DSPC_PRD_ED_DT", chkDay);
        		this.ds_sctrwDtl02.addRow();
        		this.ds_sctrwDtl02.copyRow(0, this.parent.ds_sctrwDtl, fv_position);
        	}

        	if (this.parent.ds_sctrwPmtnEmpeDspcBrk.rowcount  > 0) {
        		this.ds_sctrwPmtnEmpeDspcBrk.addRow();
        		this.ds_sctrwPmtnEmpeDspcBrk.copyData(this.parent.ds_sctrwPmtnEmpeDspcBrk);
        	} else {
        		this.ds_sctrwPmtnEmpeDspcBrk.addRow();
        		this.ds_sctrwPmtnEmpeDspcBrk.setColumn(0, "SCTRW_KDC", "402");
        		this.ds_sctrwPmtnEmpeDspcBrk.setColumn(0, "CHG_SQNO", this.parent.ds_register.getColumn(0 , "CHG_SQNO"));
        	}
        }

        this.Cal_onchanged = function(obj,e)
        {
        	obj.updateToDataset();
        	this.parent.ds_sctrwDtl.setColumn(fv_position, "DSPC_PRD_ST_DT", this.cal_dspcPrdStDt.value);
        	this.parent.ds_sctrwDtl.setColumn(fv_position, "DSPC_PRD_ED_DT", this.cal_dspcPrdEdDt.value);
        }

        this.OMG_DS_SC_211331_ontextchanged = function(obj,e)
        {
        // 	if (stringWrapper.toString().length !== 4) {
        // 		return false;
        // 	}

        // 	var time1 = "0";
        // 	var time2 = "0";
        // 	var time3 = "0";
        // 	var time4 = "0";
        //
        //  	if (!this.mae_wrkStHr.value.substr(0, 1) == "") {
        // 			time1 = this.mae_wrkStHr.value.substr(0, 1);
        //  	}
        //
        //  	if (!this.mae_wrkStHr.value.substr(1, 1) == "") {
        // 			time2 = this.mae_wrkStHr.value.substr(0, 1);
        //  	}
        //
        //  	if (!this.mae_wrkStHr.value.substr(2, 1) == "") {
        // 			time3 = this.mae_wrkStHr.value.substr(0, 1);
        //  	}
        //
        //  	if (!this.mae_wrkStHr.value.substr(3, 1) == "") {
        // 			time4 = this.mae_wrkStHr.value.substr(0, 1);
        //  	}
        //  this.mae_wrkStHr.set_value(time1+time2+time3+time4);

        	this.parent.ds_sctrwDtl.setColumn(fv_position, "WRK_ST_HR", this.mae_wrkStHr.value);
        	this.parent.ds_sctrwDtl.setColumn(fv_position, "WRK_ED_HR", this.mae_wrkEdHr.value);

        	//obj.updateToDataset();
        }

        this.ds_sctrwPmtnEmpeDspcBrk_oncolumnchanged = function(obj,e)
        {
        	this.parent.ds_sctrwPmtnEmpeDspcBrk.copyData(this.ds_sctrwPmtnEmpeDspcBrk);
        	this.fn_sctrwPmtnEmpeDspcBrk_update();
        }

        this.btn_sctrwPmtnEmpeDspcBrk_addRow_onclick = function(obj,e)
        {
        	this.ds_sctrwPmtnEmpeDspcBrk.addRow();
        	var nRow = this.ds_sctrwPmtnEmpeDspcBrk.rowcount -1;
        	this.ds_sctrwPmtnEmpeDspcBrk.setColumn(nRow, "SCTRW_KDC", "402");
        	this.ds_sctrwPmtnEmpeDspcBrk.setColumn(nRow, "CHG_SQNO", this.parent.ds_register.getColumn(0 , "CHG_SQNO"));
        	this.parent.ds_sctrwPmtnEmpeDspcBrk.copyData(this.ds_sctrwPmtnEmpeDspcBrk);
        	this.fn_sctrwPmtnEmpeDspcBrk_update();
        }

        this.btn_sctrwPmtnEmpeDspcBrk_delRow_onclick = function(obj,e)
        {
        	for (var i = this.ds_sctrwPmtnEmpeDspcBrk.rowcount; i > -1; i--) {
        		var nCheck = this.ds_sctrwPmtnEmpeDspcBrk.getColumn(i, "ISCHECKED");

        		if (nCheck == 1) {
        			this.parent.ds_sctrwPmtnEmpeDspcBrk.deleteRow(i);
        			this.ds_sctrwPmtnEmpeDspcBrk.deleteRow(i);
        		}
        	}
        }

        this.ds_sctrwPmtnEmpeDspcBrk_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		this.gfn_setGridCheckAll(obj, e);
        	}
        }

        this.fn_validationCheck = function()
        {
        	var strTitletext = "특약서(판촉사원의 파견)";

         	if (this.gfn_isNull(this.cal_dspcPrdStDt.value)) {
        		this.cal_dspcPrdStDt.setFocus();
         		this.alert(strTitletext + " 유효기간 시작일자를 입력하세요. ");
         		return false;
         	}

        	if (this.gfn_isNull(this.cal_dspcPrdEdDt.value)) {
        		this.cal_dspcPrdEdDt.setFocus();
        		this.alert(strTitletext + " 유효기간 종료일자을 입력하세요.");
        		return false;
        	} else {
        		var nStart = this.cal_dspcPrdStDt.value;
        		var nEnd   = this.cal_dspcPrdEdDt.value;

        		if (this.gfn_getDiffDay(nStart , nEnd) < 0) {
        			this.alert(strTitletext + "유효기간 종료일자를 다시 입력하세요. ");
        			return false;
        		}
         	}

         	var wrkStHr1 = "0";
        	var wrkStHr2 = "0";
        	var wrkStHr3 = "0";
        	var wrkStHr4 = "0";
        	var wrkStHr1 = "0";
        	var wrkStHr2 = "0";
        	var wrkStHr3 = "0";
        	var wrkStHr4 = "0";

        	//근무 시간 시작
        	if (this.gfn_isNull(this.mae_wrkStHr.value) == false) {
        		if (this.mae_wrkStHr.value.substr(0, 1) != " ") {
        			wrkStHr1 = this.mae_wrkStHr.value.substr(0, 1);
        		}

        		if (this.mae_wrkStHr.value.substr(1, 1) != " ") {
        			wrkStHr2 = this.mae_wrkStHr.value.substr(1, 1);
        			var wrkStHr=  nexacro.toNumber(  wrkStHr1+wrkStHr2);
        			if (wrkStHr < 1 ||  wrkStHr > 23) {
        				this.mae_wrkStHr.setFocus();
        				this.alert(strTitletext + " 근무 시간 시작 시간을 정확하게  입력하세요.");
        				return false;
        			}
        		}

        		if (this.mae_wrkStHr.value.substr(2, 1) != " ") {
        				wrkStHr3 = this.mae_wrkStHr.value.substr(2, 1);
        		}

        		if (this.mae_wrkStHr.value.substr(3, 1) != " ") {
        			wrkStHr4 = this.mae_wrkStHr.value.substr(3, 1);
        			var wrkStHr=  nexacro.toNumber(wrkStHr3+wrkStHr4);

        			if (wrkStHr < 0 ||  wrkStHr > 59) {
        				this.mae_wrkStHr.setFocus();
        				this.alert(strTitletext + " 근무 시간 시작 시간을 정확하게  입력하세요.");
        				return false;
        			}
        		}
         	} else {
         	    this.alert(strTitletext + " 근무 시간 시작 시간을 정확하게  입력하세요.");
        		return false;
         	}

        	this.mae_wrkStHr.set_value(wrkStHr1+wrkStHr2+wrkStHr3+wrkStHr4);

        	//근무 종료 시작
        	if (this.gfn_isNull(this.mae_wrkEdHr.value) == false) {
        		if (this.mae_wrkEdHr.value.substr(0, 1) != " ") {
        			wrkEdHr1 = this.mae_wrkEdHr.value.substr(0, 1);
        		}

        		if (this.mae_wrkEdHr.value.substr(1, 1) != " ") {
        			wrkEdHr2 = this.mae_wrkEdHr.value.substr(1, 1);
        			var wrkEdHr=  nexacro.toNumber(  wrkEdHr1+wrkEdHr2);
        			if (wrkEdHr < 1 ||  wrkEdHr > 23) {
        				this.mae_wrkEdHr.setFocus();
        				this.alert(strTitletext + " 근무 시간 종료 시간을 정확하게  입력하세요.");
        				return false;
        			}
        		}

        		if (this.mae_wrkEdHr.value.substr(2, 1) != " ") {
        			wrkEdHr3 = this.mae_wrkEdHr.value.substr(2, 1);
        		}

        		if (this.mae_wrkEdHr.value.substr(3, 1) != " ") {
        			wrkEdHr4 = this.mae_wrkEdHr.value.substr(3, 1);
        			var wrkEdHr=  nexacro.toNumber(  wrkEdHr3+wrkEdHr4);

        			if (wrkEdHr < 0 ||  wrkEdHr > 59) {
        				this.mae_wrkEdHr.setFocus();
        				this.alert(strTitletext + " 근무 시간 종료 분을 정확하게  입력하세요.");
        				return false;
        			}
        		}
        	} else {
         	    this.alert(strTitletext + " 근무 시간 종료 분을 정확하게  입력하세요.");
        		return false;
         	}

        	this.mae_wrkEdHr.set_value(wrkEdHr1+wrkEdHr2+wrkEdHr3+wrkEdHr4);

        	var wrkStHr = nexacro.toNumber(this.mae_wrkStHr.value);
        	var wrkEdHr = nexacro.toNumber(this.mae_wrkEdHr.value);
        	if (wrkStHr >= wrkEdHr) {
        		this.mae_wrkEdHr.setFocus();
        		this.alert(strTitletext + " 근무 종료 시간을 다시 입력하세요.");
        		return false;
        	}

        	if (this.gfn_isNull(this.mae_wrkStHr.value)) {
        		this.mae_wrkStHr.setFocus();
         		this.alert(strTitletext + " 근무 시작시간를 입력하세요. ");
         		return false;
         	}

        	if (this.gfn_isNull(this.mae_wrkEdHr.value)) {
        		this.mae_wrkEdHr.setFocus();
        		this.alert(strTitletext + " 근무 종료시간을 입력하세요.");
        		return false;
        	}

        	var strChk = this.gfn_checkImportant(this.grd_sctrwPmtnEmpeDspcBrk, "STORNM1, PMTN_EMPE1");
        	if (strChk == false) {
        		return false;
        	}

        	var strChk_STORNM2 = this.fn_checkImportant(this.grd_sctrwPmtnEmpeDspcBrk, "STORNM2");
        	var strChk_PMTN_EMPE2 = this.fn_checkImportant(this.grd_sctrwPmtnEmpeDspcBrk, "PMTN_EMPE2");

        	if (strChk_STORNM2 == true  || strChk_PMTN_EMPE2 == true) {
        		var strChk2 = this.gfn_checkImportant(this.grd_sctrwPmtnEmpeDspcBrk, "STORNM2, PMTN_EMPE2");
        		if (strChk2 == false) {
        			return false;
        		}
        	}

        	var strChk_STORNM3 = this.fn_checkImportant(this.grd_sctrwPmtnEmpeDspcBrk, "STORNM3");
        	var strChk_PMTN_EMPE3 = this.fn_checkImportant(this.grd_sctrwPmtnEmpeDspcBrk, "PMTN_EMPE3");

        	if (strChk_STORNM3 == true  || strChk_PMTN_EMPE3 == true) {
        		var strChk3 = this.gfn_checkImportant(this.grd_sctrwPmtnEmpeDspcBrk, "STORNM3, PMTN_EMPE3");
        		if (strChk3 == false) {
        			return false;
        		}
        	}

        	this.parent.ds_sctrwDtl.setColumn(fv_position, "SCTR_SJT", this.txa_sctrSjt.value); //특약사항
        	return true;
        }

        this.fn_checkImportant = function(obj,arrParam)
        {
        	var objGrid = obj;
        	var arrList = arrParam.split(",");

        	if (arrList.length == 0) return false;

        	var dsBind = this.gfn_getDataset(objGrid.binddataset);
        	if (dsBind != undefined) {
        		for ( var iRow=0; iRow<dsBind.rowcount; iRow++) {
        			var iRowType = dsBind.getRowType( iRow);
        			if (iRowType == 8) continue;

        			for (var i=0; i<arrList.length; i++) {
        				var sColNm = arrList[i];
        				var iCellIdx = this.gfn_getCellIdx( objGrid, sColNm);
        				var sColVal = String( dsBind.getColumn( iRow, sColNm)).trim();
        				if (this.gfn_isNull(sColVal)) {
        					var bSucc = objGrid.setCellPos(iCellIdx);
        					return false;
        				}
        			}
        		}
        	}
        	return true;
        }

        this.fn_sctrwPmtnEmpeDspcBrk_update = function()
        {
        	for (var i = 0; i < this.ds_sctrwPmtnEmpeDspcBrk.rowcount; i++) {
        		this.parent.ds_sctrwPmtnEmpeDspcBrk.set_updatecontrol(false);
        		this.parent.ds_sctrwPmtnEmpeDspcBrk.setRowType(i, this.ds_sctrwPmtnEmpeDspcBrk.getRowType(i));
        		this.parent.ds_sctrwPmtnEmpeDspcBrk.set_updatecontrol(true);
        	}

        	if (this.ds_sctrwPmtnEmpeDspcBrkrowcount == 0) {
        		for (var i = 0; i < this.parent.ds_sctrwPmtnEmpeDspcBrk.rowcount; i++) {
        			this.parent.ds_sctrwPmtnEmpeDspcBrk.set_updatecontrol(false);
        			this.parent.ds_sctrwPmtnEmpeDspcBrk.setRowType(i, Dataset.ROWTYPE_DELETE);
        			this.parent.ds_sctrwPmtnEmpeDspcBrk.set_updatecontrol(true);
        		}
        	}
        }

        this.Button15_onclick = function(obj,e)
        {
        	this.fn_validationCheck();
        }

        this.txatext_changed = function(obj,e)
        {
        	var text = this.txa_sctrSjt.value;
        	var lc = text.indexOf("^");
        	if (lc != -1) {
        		alert('^는 사용하실 수 없습니다.');
        		text = nexacro.replaceAll(text, "^", " ");
        		this.txa_sctrSjt.set_value(text);
        	}
        	this.parent.ds_sctrwDtl.setColumn(fv_position, "SCTR_SJT", this.txa_sctrSjt.value); //특약사항
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_sctrwPmtnEmpeDspcBrk.addEventHandler("oncolumnchanged", this.ds_sctrwPmtnEmpeDspcBrk_oncolumnchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.Static172.addEventHandler("onclick", this.Div02_Static172_onclick, this);
            this.Button15.addEventHandler("onclick", this.Button15_onclick, this);
            this.cal_dspcPrdStDt.addEventHandler("ontextchanged", this.OMG_DS_SC_211331_ontextchanged, this);
            this.cal_dspcPrdStDt.addEventHandler("onchanged", this.Cal_onchanged, this);
            this.cal_dspcPrdEdDt.addEventHandler("ontextchanged", this.OMG_DS_SC_211331_ontextchanged, this);
            this.cal_dspcPrdEdDt.addEventHandler("onchanged", this.Cal_onchanged, this);
            this.mae_wrkEdHr.addEventHandler("ontextchanged", this.OMG_DS_SC_211331_ontextchanged, this);
            this.mae_wrkEdHr.addEventHandler("onchanged", this.OMG_DS_SC_211331_onchanged, this);
            this.mae_wrkStHr.addEventHandler("ontextchanged", this.OMG_DS_SC_211331_ontextchanged, this);
            this.grd_sctrwPmtnEmpeDspcBrk.addEventHandler("onheadclick", this.ds_sctrwPmtnEmpeDspcBrk_onheadclick, this);
            this.btn_sctrwPmtnEmpeDspcBrk_add.addEventHandler("onclick", this.btn_sctrwPmtnEmpeDspcBrk_addRow_onclick, this);
            this.btn_sctrwPmtnEmpeDspcBrk_del.addEventHandler("onclick", this.btn_sctrwPmtnEmpeDspcBrk_delRow_onclick, this);
            this.txa_sctrSjt.addEventHandler("ontextchanged", this.txatext_changed, this);

        };

        this.loadIncludeScript("OMG_DS_SC_211331.xfdl", true);

       
    };
}
)();
