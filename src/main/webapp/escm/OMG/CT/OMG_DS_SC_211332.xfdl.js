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
                this.set_name("OMG_DS_SC_21132");
                this.set_titletext("특약서(매장위치 및 면적)");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,788,303);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_sctrwAllXpcPmtnCst", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호\"/><Column id=\"SCTRW_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"SQNO\" type=\"STRING\" size=\"256\" sumtext=\"일련번호\"/><Column id=\"STORNM1\" type=\"STRING\" size=\"256\" sumtext=\"점포명1\"/><Column id=\"STOR_LY1\" type=\"STRING\" size=\"256\" sumtext=\"점포층1\"/><Column id=\"SELA_AREA_M1\" type=\"STRING\" size=\"256\" sumtext=\"매장면적 미터1\"/><Column id=\"SELA_AREA_PCN1\" type=\"STRING\" size=\"256\" sumtext=\"매장면적 평수1\"/><Column id=\"STORNM2\" type=\"STRING\" size=\"256\" sumtext=\"점포명2\"/><Column id=\"STOR_LY2\" type=\"STRING\" size=\"256\" sumtext=\"점포층2\"/><Column id=\"SELA_AREA_M2\" type=\"STRING\" size=\"256\" sumtext=\"매장면적 미터2\"/><Column id=\"SELA_AREA_PCN2\" type=\"STRING\" size=\"256\" sumtext=\"매장면적 평수2\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_etcEltStylAmm403", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CTRW_KDC\" type=\"STRING\" size=\"5000\" sumtext=\"계약서내용\"/><Column id=\"CTRW_STY_VER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sctrwDtl03", this);
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
            obj = new Static("Static206", "absolute", "0", "2", "467", "21", null, null, this);
            obj.set_taborder("720");
            obj.set_text("특약서(매장위치 및 면적)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sctrwDtl03", "absolute", "710", "0", "78", "21", null, null, this);
            obj.set_taborder("721");
            obj.set_text("계약서보기");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static208", "absolute", "0", "27", null, "29", "86%", null, this);
            obj.set_taborder("724");
            obj.set_text("계약일자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static209", "absolute", "14%", "27", null, "29", "0", null, this);
            obj.set_taborder("725");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_vldPrdStDt", "absolute", "14.34%", "31", "98", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static215", "absolute", "0", "71", "218", "21", null, null, this);
            obj.set_taborder("730");
            obj.set_text("1. 매장위치 및 면적");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_sctrwAllXpcPmtnCst", "absolute", "0", "95", null, "121", "0%", null, this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_sctrwAllXpcPmtnCst");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"98\"/><Column size=\"98\"/><Column size=\"98\"/><Column size=\"100\"/><Column size=\"98\"/><Column size=\"98\"/><Column size=\"98\"/></Columns><Rows><Row size=\"34\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" colspan=\"2\" text=\"점포명\"/><Cell col=\"3\" colspan=\"2\" text=\"매장면적\"/><Cell col=\"5\" colspan=\"2\" text=\"점포명\"/><Cell col=\"7\" colspan=\"2\" text=\"매장면적\"/><Cell row=\"1\" col=\"1\" text=\"명\"/><Cell row=\"1\" col=\"2\" text=\"층\"/><Cell row=\"1\" col=\"3\" text=\"㎡\"/><Cell row=\"1\" col=\"4\" text=\"평\"/><Cell row=\"1\" col=\"5\" text=\"명\"/><Cell row=\"1\" col=\"6\" text=\"층\"/><Cell row=\"1\" col=\"7\" text=\"㎡\"/><Cell row=\"1\" col=\"8\" text=\"평\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:STORNM1\" editlimit=\"50\" editlengthunit=\"ascii\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"mask\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:STOR_LY1\" mask=\"####\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"mask\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:SELA_AREA_M1\" mask=\"####\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"mask\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:SELA_AREA_PCN1\" mask=\"####\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"text\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:STORNM2\" editlimit=\"50\" editlengthunit=\"ascii\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"mask\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:STOR_LY2\" mask=\"####\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"mask\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:SELA_AREA_M2\" mask=\"####\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"mask\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:SELA_AREA_PCN2\" mask=\"####\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sctrwAllXpcPmtnCst_add", "absolute", null, "68", "53", "21", "55", null, this);
            obj.set_taborder("1");
            obj.set_text("행추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sctrwAllXpcPmtnCst_del", "absolute", null, "68", "53", "21", "0%", null, this);
            obj.set_taborder("2");
            obj.set_text("행삭제");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "200", "0", "414", "27", null, null, this);
            obj.set_taborder("762");
            obj.set_text("27");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static94", "absolute", "13.83%", "215", null, "80", "0%", null, this);
            obj.set_taborder("763");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "0", "215", null, "80", "86.04%", null, this);
            obj.set_taborder("764");
            obj.set_text("특약사항");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_sctrSjt", "absolute", "14.34%", "219", null, "72", "0.38%", null, this);
            obj.set_taborder("4");
            obj.set_wordwrap("char");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("498");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 788, 303, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("특약서(매장위치 및 면적)");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","cal_vldPrdStDt","value","ds_sctrwDtl03","VLD_PRD_ST_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","txa_sctrSjt","value","ds_sctrwDtl03","SCTR_SJT");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_211332.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_211332.xfdl", function() {
        //include "lib::comLib.xjs";

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
        		if (this.parent.ds_etcEltStylAmm.getColumn(i, "CTRW_KDC") == "403") {
        			this.ds_etcEltStylAmm403.copyRow(0, this.parent.ds_etcEltStylAmm, i);
        		}
        	}

        	for (var i = 0; i < this.parent.ds_sctrwDtl.rowcount; i++) {
        		if (this.parent.ds_sctrwDtl.getColumn(i, "SCTRW_KDC") == "403") {
        			fv_position = i;
        			fv_chk = 1;
        			this.ds_sctrwDtl03.addRow();
        			this.ds_sctrwDtl03.copyRow(0, this.parent.ds_sctrwDtl, fv_position);

        		}
        	}

         	if (fv_chk == 0) {
        		var toDay = this.gfn_today("yyyyMMdd");
        		chkDay = this.gfn_addMonth(toDay, 1);

        		var nRow = this.parent.ds_sctrwDtl.addRow();
        		fv_position = nRow;
        		this.parent.ds_sctrwDtl.setColumn(fv_position, "SCTRW_KDC", "403");
        		this.parent.ds_sctrwDtl.setColumn(fv_position, "CHG_SQNO", this.parent.ds_register.getColumn(0, "CHG_SQNO"));
        		this.parent.ds_sctrwDtl.setColumn(fv_position, "CTRW_STY_VER", this.ds_etcEltStylAmm403.getColumn(0, "CTRW_STY_VER"));
        		this.parent.ds_sctrwDtl.setColumn(fv_position, "VLD_PRD_ST_DT", toDay);
        		this.ds_sctrwDtl03.addRow();
        		this.ds_sctrwDtl03.copyRow(0, this.parent.ds_sctrwDtl, fv_position);
        		//this.cal_vldPrdStDt.set_value(toDay);
        //		this.cal_evtPrdEdDt.set_value(chkDay);
        	}

        	if (this.parent.ds_sctrwAllXpcPmtnCst.rowcount  > 0) {
        		this.ds_sctrwAllXpcPmtnCst.addRow();
        		this.ds_sctrwAllXpcPmtnCst.copyData(this.parent.ds_sctrwAllXpcPmtnCst);
        	} else {
        		this.ds_sctrwAllXpcPmtnCst.addRow();
        		this.ds_sctrwAllXpcPmtnCst.setColumn(0, "SCTRW_KDC", "403");
        		this.ds_sctrwAllXpcPmtnCst.setColumn(0, "CHG_SQNO", this.parent.ds_register.getColumn(0 , "CHG_SQNO"));
        	}
        }

        this.Cal_onchanged = function(obj,e)
        {
        	obj.updateToDataset();
        	this.parent.ds_sctrwDtl.setColumn(fv_position, "VLD_PRD_ST_DT", this.cal_vldPrdStDt.value);
        }

        
        this.ds_sctrwAllXpcPmtnCst_oncolumnchanged = function(obj,e)
        {
        	this.parent.ds_sctrwAllXpcPmtnCst.copyData(this.ds_sctrwAllXpcPmtnCst);
        	this.fn_sctrwAllXpcPmtnCst_update();
        }

        this.btn_sctrwAllXpcPmtnCst_addRow_onclick = function(obj,e)
        {
        	this.ds_sctrwAllXpcPmtnCst.addRow();
        	var nRow = this.ds_sctrwAllXpcPmtnCst.rowcount-1;
        	this.ds_sctrwAllXpcPmtnCst.setColumn(nRow, "SCTRW_KDC", "403");
        	this.ds_sctrwAllXpcPmtnCst.setColumn(nRow, "CHG_SQNO", this.parent.ds_register.getColumn(0 , "CHG_SQNO"));
        	this.parent.ds_sctrwAllXpcPmtnCst.copyData(this.ds_sctrwAllXpcPmtnCst);
        	this.fn_sctrwAllXpcPmtnCst_update();
        }

        this.btn_sctrwAllXpcPmtnCst_delRow_onclick = function(obj,e)
        {
        	for (var i = this.ds_sctrwAllXpcPmtnCst.rowcount; i > -1; i--) {
        		var nCheck = this.ds_sctrwAllXpcPmtnCst.getColumn(i, "ISCHECKED");
        		if (nCheck == 1) {
        			this.parent.ds_sctrwAllXpcPmtnCst.deleteRow(i);
        			this.ds_sctrwAllXpcPmtnCst.deleteRow(i);
        		}
        	}
        }

        this.grd_sctrwAllXpcPmtnCst_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		this.gfn_setGridCheckAll(obj, e);
        	}
        }

        this.fn_validationCheck = function()
        {
        	var strTitletext = "특약서(매장위치 및 면적)";

         	if (this.gfn_isNull(this.cal_vldPrdStDt.value)) {
        		this.cal_vldPrdStDt.setFocus();
         		this.alert(strTitletext + " 계약일자를  입력하세요. ");
         		return false;
         	}

        	var strChk = this.gfn_checkImportant(this.grd_sctrwAllXpcPmtnCst, "STORNM1, STOR_LY1, SELA_AREA_M1, SELA_AREA_PCN1");
        	if (strChk == false) {
        		return false;
        	}

        	var strChk_STORNM2 = this.fn_checkImportant(this.grd_sctrwAllXpcPmtnCst, "STORNM2");
        	var strChk_STOR_LY2 = this.fn_checkImportant(this.grd_sctrwAllXpcPmtnCst, "STOR_LY2");
        	var strChk_SELA_AREA_M2 = this.fn_checkImportant(this.grd_sctrwAllXpcPmtnCst, "SELA_AREA_M2");
        	var strChk_SELA_AREA_PCN2 = this.fn_checkImportant(this.grd_sctrwAllXpcPmtnCst, "SELA_AREA_PCN2");

        	if (strChk_STORNM2 == true  || strChk_STOR_LY2 == true || strChk_SELA_AREA_M2 == true || strChk_SELA_AREA_PCN2 == true) {
        		var strChk2 = this.gfn_checkImportant(this.grd_sctrwAllXpcPmtnCst, "STORNM2, STOR_LY2, SELA_AREA_M2, SELA_AREA_PCN2");
        		if (strChk2 == false) {
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
        		for (var iRow=0; iRow<dsBind.rowcount; iRow++) {
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

        this.fn_sctrwAllXpcPmtnCst_update = function()
        {
        	for (var i = 0; i < this.ds_sctrwAllXpcPmtnCst.rowcount; i++) {
        		this.parent.ds_sctrwAllXpcPmtnCst.set_updatecontrol(false);
        		this.parent.ds_sctrwAllXpcPmtnCst.setRowType(i, this.ds_sctrwAllXpcPmtnCst.getRowType(i));
        		this.parent.ds_sctrwAllXpcPmtnCst.set_updatecontrol(true);
        	}

        	if (this.ds_sctrwAllXpcPmtnCst == 0) {
        		for (var i = 0; i < this.parent.ds_sctrwAllXpcPmtnCst.rowcount; i++) {
        			this.parent.ds_sctrwAllXpcPmtnCst.set_updatecontrol(false);
        			this.parent.ds_sctrwAllXpcPmtnCst.setRowType(i, Dataset.ROWTYPE_DELETE);
        			this.parent.ds_sctrwAllXpcPmtnCst.set_updatecontrol(true);
        		}
        	}
        }

        this.btn_sctrwDtl03_onclick = function(obj,e)
        {
        	this.fn_validationCheck();
        }

        //  평수 -> ㎡
        this.fn_cal = function(areaCalc)
        {
        	var cal = areaCalc;
        	cal = Math.round(cal * 3.305785 * 100) / 100;

        	return cal;
        }

        // ㎡ -> 평수
        this.fn_cal1 = function(areaCalc)
        {
        	var cal = areaCalc;
        	cal = Math.round(cal / 3.305785 * 100) / 100;
        	return cal;
        }

        this.txatext_changed = function(obj,e)
        {
        	var text = this.txa_sctrSjt.value;
        	if (!this.gfn_isNull(text)) {
        		var lc = text.indexOf("^");
        		if (lc != -1) {
        			alert('^는 사용하실 수 없습니다.');
        			text = nexacro.replaceAll(text, "^", " ");
        			this.txa_sctrSjt.set_value(text);
        		}
         	}
        	this.parent.ds_sctrwDtl.setColumn(fv_position, "SCTR_SJT", this.txa_sctrSjt.value); //특약사항
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_sctrwAllXpcPmtnCst.addEventHandler("oncolumnchanged", this.ds_sctrwAllXpcPmtnCst_oncolumnchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_sctrwDtl03.addEventHandler("onclick", this.btn_sctrwDtl03_onclick, this);
            this.cal_vldPrdStDt.addEventHandler("onchanged", this.Cal_onchanged, this);
            this.grd_sctrwAllXpcPmtnCst.addEventHandler("onheadclick", this.grd_sctrwAllXpcPmtnCst_onheadclick, this);
            this.btn_sctrwAllXpcPmtnCst_add.addEventHandler("onclick", this.btn_sctrwAllXpcPmtnCst_addRow_onclick, this);
            this.btn_sctrwAllXpcPmtnCst_del.addEventHandler("onclick", this.btn_sctrwAllXpcPmtnCst_delRow_onclick, this);
            this.txa_sctrSjt.addEventHandler("ontextchanged", this.txatext_changed, this);

        };

        this.loadIncludeScript("OMG_DS_SC_211332.xfdl");

       
    };
}
)();
