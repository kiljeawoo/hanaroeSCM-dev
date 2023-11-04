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
                this.set_name("OMG_DS_SC_211335");
                this.set_titletext("특약서(판매장려금 등) 표준");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,788,169);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_etcEltStylAmm407", this);
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

            obj = new Dataset("ds_sctrwDtl07", this);
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
            obj.set_taborder("5");
            obj.set_text("특약서(판매장려금 등) 표준");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button15", "absolute", "711", "0", "77", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_text("계약서보기");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static174", "absolute", "0", "27", null, "29", "86%", null, this);
            obj.set_taborder("7");
            obj.set_text("지급횟수");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static175", "absolute", "13.83%", "27", null, "29", "0%", null, this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static177", "absolute", "49.87%", "27", null, "29", "34.26%", null, this);
            obj.set_taborder("9");
            obj.set_text("판매장려금율(액)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "200", "0", "414", "27", null, null, this);
            obj.set_taborder("10");
            obj.set_text("27");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_pyNt", "absolute", "14.47%", "31", null, "21", "69.8%", null, this);
            obj.set_taborder("0");
            obj.set_mask("#");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "55", null, "29", "86%", null, this);
            obj.set_taborder("11");
            obj.set_text("상품공급액");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "13.83%", "55", null, "29", "0%", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "49.87%", "55", null, "29", "34.26%", null, this);
            obj.set_taborder("13");
            obj.set_text("유효기간");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_vldPrdEdDt", "absolute", "66.24%", "59", "120", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static03", "absolute", "37.94%", "60", "86", "21", null, null, this);
            obj.set_taborder("14");
            obj.set_text("% (부가세포함)");
            this.addChild(obj.name, obj);

            obj = new Static("Static60", "absolute", "30.84%", "32", "23", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_text("회");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_selSsdyRto", "absolute", "66.24%", "31", null, "21", "18.53%", null, this);
            obj.set_taborder("1");
            obj.set_mask("+999.00");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "82.87%", "31", "23", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_text("%");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_wrkSpyam", "absolute", "14.21%", "59", null, "21", "62.69%", null, this);
            obj.set_taborder("2");
            obj.style.set_align("left middle");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("12");
            this.addChild(obj.name, obj);

            obj = new Static("Static94", "absolute", "13.83%", "83", null, "80", "0%", null, this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "0", "83", null, "80", "86.04%", null, this);
            obj.set_taborder("21");
            obj.set_text("특약사항");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_sctrSjt", "absolute", "14.34%", "87", null, "72", "0.38%", null, this);
            obj.set_taborder("4");
            obj.set_wordwrap("char");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("1998");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 788, 169, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("특약서(판매장려금 등) 표준");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item7","edt_wrkSpyam","value","ds_sctrwDtl07","WRS_SPYAM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","cal_vldPrdEdDt","value","ds_sctrwDtl07","VLD_PRD_ED_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","mae_selSsdyRto","value","ds_sctrwDtl07","SEL_SSDY_RTO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","mae_pyNt","value","ds_sctrwDtl07","PY_NT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","txa_sctrSjt","value","ds_sctrwDtl07","SCTR_SJT");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_211336.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_211336.xfdl", function() {
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
        		if (this.parent.ds_etcEltStylAmm.getColumn(i, "CTRW_KDC") == "407") {
        			this.ds_etcEltStylAmm407.copyRow(0, this.parent.ds_etcEltStylAmm, i);
        		}
        	}

        	for (var i = 0; i < this.parent.ds_sctrwDtl.rowcount; i++) {
        		if (this.parent.ds_sctrwDtl.getColumn(i, "SCTRW_KDC") == "407") {
        			fv_position = i;
        			fv_chk = 1;
        			this.ds_sctrwDtl07.addRow();
        			this.ds_sctrwDtl07.copyRow(0, this.parent.ds_sctrwDtl, fv_position);

        			var wrkSpyam = this.ds_sctrwDtl07.getColumn(0, "WRS_SPYAM");
        			var wrkSpyam = wrkSpyam.split("|");

        			if (wrkSpyam.length == 2) {
        				this.mae_wrkSpyam.set_value(wrkSpyam[0]);
        				this.mae_wrkSpyam01.set_value(wrkSpyam[1]);
        			} else if (wrkSpyam.length == 1) {
        				this.mae_wrkSpyam.set_value(wrkSpyam[0]);
        			}
        		}
         	}

        	if (fv_chk == 0) {
        		var toDay = this.gfn_today("yyyyMMdd");
        		toDay = toDay.substr(0, 4) +"1231";
        		var nRow = this.parent.ds_sctrwDtl.addRow();
        		fv_position = nRow;
        		this.parent.ds_sctrwDtl.setColumn(fv_position, "SCTRW_KDC", "407");
        		this.parent.ds_sctrwDtl.setColumn(fv_position, 	"CHG_SQNO", this.parent.ds_register.getColumn(0 , "CHG_SQNO"));
        		this.parent.ds_sctrwDtl.setColumn(fv_position, "CTRW_STY_VER", this.ds_etcEltStylAmm407.getColumn(0, "CTRW_STY_VER"));
        		this.parent.ds_sctrwDtl.setColumn(fv_position, "VLD_PRD_ED_DT", toDay);
        		this.ds_sctrwDtl07.addRow();
        		this.ds_sctrwDtl07.copyRow(0, this.parent.ds_sctrwDtl, fv_position);
        	}
        }

        this.Cal_onchanged = function(obj,e)
        {
        	obj.updateToDataset();
        	this.parent.ds_sctrwDtl.setColumn(fv_position, "VLD_PRD_ED_DT", this.cal_vldPrdEdDt.value);
        }

        this.OMG_DS_SC_211337_ontextchanged = function(obj,e)
        {
        	this.parent.ds_sctrwDtl.setColumn(fv_position, "WRS_SPYAM", this.edt_wrkSpyam.value);
        	this.parent.ds_sctrwDtl.setColumn(fv_position, "PY_NT", this.mae_pyNt.value);
        	this.parent.ds_sctrwDtl.setColumn(fv_position, "SEL_SSDY_RTO", this.mae_selSsdyRto.value);
        }

        this.fn_validationCheck = function()
        {
        	var strTitletext = "특약서(판매장려금 등)";

        	if (this.gfn_isNull(this.mae_pyNt.value)) {
        		this.mae_pyNt.setFocus();
         		this.alert(strTitletext + " 지급횟수를 입력하세요. ");
         		return false;
         	}

         	if (this.gfn_isNull(this.mae_selSsdyRto.value)) {
        		this.mae_selSsdyRto.setFocus();
         		this.alert(strTitletext + " 판매장려금율(액)를 입력하세요. ");
         		return false;
         	}

        	if (this.gfn_isNull(this.mae_wrkSpyam.value) ==true && this.gfn_isNull(this.mae_wrkSpyam01.value) == true) {
        		this.mae_wrkSpyam.setFocus();
        		this.alert(strTitletext + " 상품공급액율을 입력하세요.");
        		return false;
        	}

        	//his.parent.ds_sctrwDtl.setColumn(fv_position, "SCTR_SJT", this.txa_sctrSjt.value); //특약사항
        	return true;
        }

        this.Button15_onclick = function(obj,e)
        {
        	this.fn_validationCheck();
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
            this.addEventHandler("onload", this.form_onload, this);
            this.Static172.addEventHandler("onclick", this.Div02_Static172_onclick, this);
            this.Button15.addEventHandler("onclick", this.Button15_onclick, this);
            this.mae_pyNt.addEventHandler("ontextchanged", this.OMG_DS_SC_211337_ontextchanged, this);
            this.cal_vldPrdEdDt.addEventHandler("onchanged", this.Cal_onchanged, this);
            this.cal_vldPrdEdDt.addEventHandler("ontextchanged", this.OMG_DS_SC_211337_ontextchanged, this);
            this.mae_selSsdyRto.addEventHandler("ontextchanged", this.OMG_DS_SC_211337_ontextchanged, this);
            this.edt_wrkSpyam.addEventHandler("ontextchanged", this.OMG_DS_SC_211337_ontextchanged, this);
            this.txa_sctrSjt.addEventHandler("ontextchanged", this.txatext_changed, this);

        };

        this.loadIncludeScript("OMG_DS_SC_211336.xfdl");

       
    };
}
)();
