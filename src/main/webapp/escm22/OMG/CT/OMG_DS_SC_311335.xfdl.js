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
                this.set_name("OMG_DS_SC_311335");
                this.set_titletext("특약서(판매수수료율)");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,788,650);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_sctrwNmlMrgnRt", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호\"/><Column id=\"SCTRW_KDC\" type=\"STRING\" size=\"256\" sumtext=\"특약서종류코드\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"SQNO\" type=\"STRING\" size=\"256\" sumtext=\"일련번호\"/><Column id=\"STORNM1\" type=\"STRING\" size=\"256\" sumtext=\"점포명\"/><Column id=\"NML_MRGN_RT\" type=\"STRING\" size=\"256\" sumtext=\"정상마진율\"/><Column id=\"EVT_MRGN_RT\" type=\"STRING\" size=\"256\" sumtext=\"행사마진율\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\" sumtext=\"비고\"/><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"NML_MRGN_RTM\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_MRGN_RTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sctrwCtrMrgnRt", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호\"/><Column id=\"SCTRW_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"SQNO\" type=\"STRING\" size=\"256\" sumtext=\"일련번호\"/><Column id=\"STORNM1\" type=\"STRING\" size=\"256\" sumtext=\"점포명\"/><Column id=\"DC_SEL_MRGN_RT10\" type=\"STRING\" size=\"256\" sumtext=\"할인판매마진율 10\"/><Column id=\"DC_SEL_MRGN_RT20\" type=\"STRING\" size=\"256\" sumtext=\"할인판매마진율 20\"/><Column id=\"DC_SEL_MRGN_RT30\" type=\"STRING\" size=\"256\" sumtext=\"할인판매마진율 30\"/><Column id=\"DC_SEL_MRGN_RT40\" type=\"STRING\" size=\"256\" sumtext=\"할인판매마진율 40\"/><Column id=\"DC_SEL_MRGN_RT50\" type=\"STRING\" size=\"256\" sumtext=\"할인판매마진율 50\"/><Column id=\"RMK\" type=\"STRING\" size=\"256\" sumtext=\"비고\"/><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_etcEltStylAmm401", this);
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

            obj = new Dataset("ds_sctrwDtl01", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호\"/><Column id=\"SCTRW_KDC\" type=\"STRING\" size=\"256\" sumtext=\"특약서종류코드\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_STY_VER\" type=\"STRING\" size=\"256\" sumtext=\"계약서양식버젼\"/><Column id=\"VLD_PRD_ST_DT\" type=\"STRING\" size=\"256\" sumtext=\"유효기간 시작일자\"/><Column id=\"VLD_PRD_ED_DT\" type=\"STRING\" size=\"256\" sumtext=\"유효기간 종료일자\"/><Column id=\"DSPC_PRD_ST_DT\" type=\"STRING\" size=\"256\" sumtext=\"파견기간 시작일자\"/><Column id=\"DSPC_PRD_ED_DT\" type=\"STRING\" size=\"256\" sumtext=\"파견기간 종료일자\"/><Column id=\"WRK_ST_HR\" type=\"STRING\" size=\"256\" sumtext=\"근무시간 시작시간\"/><Column id=\"WRK_ED_HR\" type=\"STRING\" size=\"256\" sumtext=\"근무시간 종료시간\"/><Column id=\"EVT_PRD_ST_DT\" type=\"STRING\" size=\"256\" sumtext=\"행사기간 시작일자\"/><Column id=\"EVT_PRD_ED_DT\" type=\"STRING\" size=\"256\" sumtext=\"행사기간 종료일자\"/><Column id=\"CTRW_FLNM\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일 이름\"/><Column id=\"CTRW_FL_PATHNM\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일전체경로\"/><Column id=\"CTRW_FL_SZE\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일크기\"/><Column id=\"APDFLNM\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일 이름\"/><Column id=\"APDFL_PATHNM\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일전체경로\"/><Column id=\"APDFL_SZE\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일크기\"/><Column id=\"SYS_FLNM\" type=\"STRING\" size=\"256\" sumtext=\"시스템 파일이름\"/><Column id=\"CTRW_CNTN\" type=\"STRING\" size=\"256\" sumtext=\"계약서내용\"/><Column id=\"PY_NT\" type=\"STRING\" size=\"256\"/><Column id=\"SEL_SSDY_RTO\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_SPYAM\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_SGNT\" type=\"STRING\" size=\"256\" sumtext=\"계약서서명\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"SCTR_SJT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static167", "absolute", "0", "27", null, "29", "86%", null, this);
            obj.set_taborder("708");
            obj.set_text("계약기간");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static168", "absolute", "13.83%", "27", null, "29", "0", null, this);
            obj.set_taborder("709");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static169", "absolute", "27.16%", "31", null, "21", "71.57%", null, this);
            obj.set_taborder("710");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_vldPrdStDt", "absolute", "14.34%", "31", null, "21", "72.97%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");

            obj = new Calendar("cal_vldPrdEdDt", "absolute", "28.43%", "31", null, "21", "58.88%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");

            obj = new Grid("grd_sctrwNmlMrgnRt", "absolute", "0", "127", null, "139", "0", null, this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_sctrwNmlMrgnRt");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"59\"/><Column size=\"258\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"161\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"삭제\"/><Cell col=\"1\" text=\"점포명\"/><Cell col=\"2\" text=\"정상판매수수료율(%)\"/><Cell col=\"3\" text=\"행사판매수수료율(%)\"/><Cell col=\"4\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:STORNM1\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"mask\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:NML_MRGN_RT\" mask=\"##\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"mask\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:EVT_MRGN_RT\" mask=\"##\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"text\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:RMK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_nmlMrgnRt_add", "absolute", null, "101", "53", "21", "55", null, this);
            obj.set_taborder("2");
            obj.set_text("행추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_nmlMrgnRt_del", "absolute", null, "101", "53", "21", "0%", null, this);
            obj.set_taborder("715");
            obj.set_text("행삭제");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_sctrwCtrMrgnRt", "absolute", "0", "342", null, "176", "0", null, this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_sctrwCtrMrgnRt");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"41\"/><Column size=\"169\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"100\"/></Columns><Rows><Row size=\"34\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"삭제\"/><Cell col=\"1\" rowspan=\"2\" text=\"점포명\"/><Cell col=\"2\" colspan=\"5\" text=\"할인판매 판매수수료율\"/><Cell col=\"7\" rowspan=\"2\" text=\"비고\"/><Cell row=\"1\" col=\"2\" text=\"10% 할인\"/><Cell row=\"1\" col=\"3\" text=\"20% 할인\"/><Cell row=\"1\" col=\"4\" text=\"30% 할인\"/><Cell row=\"1\" col=\"5\" text=\"40% 할인\"/><Cell row=\"1\" col=\"6\" text=\"50% 할인\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" style=\"align:center middle;padding:0 0 0 0;\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:STORNM1\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"mask\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DC_SEL_MRGN_RT10\" mask=\"##\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"mask\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DC_SEL_MRGN_RT20\" mask=\"##\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"mask\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DC_SEL_MRGN_RT30\" mask=\"##\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"mask\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DC_SEL_MRGN_RT40\" mask=\"##\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"mask\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DC_SEL_MRGN_RT50\" mask=\"##\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"text\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:RMK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ctrMrgnRt_add", "absolute", null, "316", "53", "21", "55", null, this);
            obj.set_taborder("4");
            obj.set_text("행추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ctrMrgnRt_del", "absolute", null, "316", "53", "21", "0%", null, this);
            obj.set_taborder("719");
            obj.set_text("행삭제");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "200", "0", "414", "27", null, null, this);
            obj.set_taborder("721");
            obj.set_text("27");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static94", "absolute", "13.83%", "560", null, "80", "0%", null, this);
            obj.set_taborder("722");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "0", "560", null, "80", "86.04%", null, this);
            obj.set_taborder("723");
            obj.set_text("특약사항");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_sctrSjt", "absolute", "14.34%", "564", null, "72", "0.38%", null, this);
            obj.set_taborder("724");
            obj.set_wordwrap("char");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("1998");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "0", "0", "59.26%", "21", null, null, this);
            obj.set_taborder("725");
            obj.set_text("[특약서(판매수수료율)]");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("left middle");
            obj.style.set_padding("0 0 1 5");
            this.addChild(obj.name, obj);

            obj = new Static("Static86", "absolute", "0", "73", "59.26%", "21", null, null, this);
            obj.set_taborder("726");
            obj.set_text("정상판매수수료율 및 행사판매수수료율");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "289", "68.02%", "21", null, null, this);
            obj.set_taborder("727");
            obj.set_text("유통업자와 납품업자 간 협의에 의하여 시행하는 할인판매 행사 시 판매수수료율");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "537", "68.02%", "21", null, null, this);
            obj.set_taborder("728");
            obj.set_text("기타");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC1", "absolute", "0%", "101", null, "21", "40%", null, this);
            obj.set_taborder("729");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC2", "absolute", "0%", "316", null, "21", "39.97%", null, this);
            obj.set_taborder("730");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_ETC3", "absolute", "60.91%", "101", "92", "21", null, null, this);
            obj.set_taborder("731");
            obj.set_text("해당없음");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_ETC4", "absolute", "60.91%", "316", "92", "21", null, null, this);
            obj.set_taborder("732");
            obj.set_text("해당없음");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 788, 650, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("특약서(판매수수료율)");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","cal_vldPrdStDt","value","ds_sctrwDtl01","VLD_PRD_ST_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","cal_vldPrdEdDt","value","ds_sctrwDtl01","VLD_PRD_ED_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","txa_sctrSjt","value","ds_sctrwDtl01","SCTR_SJT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","edt_ETC1","value","ds_sctrwDtl01","ETC1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_ETC2","value","ds_sctrwDtl01","ETC2");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_311335.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_311335.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        var fv_position = 0; //위치값
        var fv_chk = 0 ;  //데이터 체크

        this.form_onload = function(obj,e)
        {
           this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	// 폼양식
           for (var i = 0; i < this.parent.ds_etcEltStylAmm.rowcount; i++) {
        		if(this.parent.ds_etcEltStylAmm.getColumn(i, "CTRW_KDC") == "417"){
        			this.ds_etcEltStylAmm401.copyRow(0, this.parent.ds_etcEltStylAmm ,i);
        		}
        	}

        	for (var i = 0 ; i < this.parent.ds_sctrwDtl.rowcount; i++) {
        		if (this.parent.ds_sctrwDtl.getColumn(i, "SCTRW_KDC") == "417") {
        			fv_position = i;
        			fv_chk = 1 ;
        			if (this.gfn_nullToEmpty(this.parent.ds_sctrwDtl.getColumn(i, "CTRW_STY_VER")) == "") {
        				this.parent.ds_sctrwDtl.setColumn(fv_position, "CTRW_STY_VER" , this.ds_etcEltStylAmm401.getColumn(0,"CTRW_STY_VER"));
        			}
        			if (this.gfn_nullToEmpty(this.parent.ds_sctrwDtl.getColumn(i, "CHG_SQNO")) == "") {
        				this.parent.ds_sctrwDtl.setColumn(fv_position, "CHG_SQNO" , this.parent.ds_register.getColumn(0 ,"CHG_SQNO"));
        			}
        			this.ds_sctrwDtl01.addRow();
        			this.ds_sctrwDtl01.copyRow(0, this.parent.ds_sctrwDtl, fv_position);
        		}
        	}

        	if (fv_chk == 0) {
        		var toDay = this.gfn_today("yyyyMMdd");
        		chkDay = this.gfn_addMonth(toDay, 1);

        		var nRow = this.parent.ds_sctrwDtl.addRow();
        		fv_position = nRow;
        		this.parent.ds_sctrwDtl.setColumn(fv_position, "SCTRW_KDC", "417");
        		this.parent.ds_sctrwDtl.setColumn(fv_position, "CHG_SQNO", this.parent.ds_register.getColumn(0 ,"CHG_SQNO"));
        		this.parent.ds_sctrwDtl.setColumn(fv_position, "CTRW_STY_VER", this.ds_etcEltStylAmm401.getColumn(0,"CTRW_STY_VER"));
        		this.parent.ds_sctrwDtl.setColumn(fv_position, "VLD_PRD_ST_DT", this.parent.cal_ctrStDt.value);
        		this.parent.ds_sctrwDtl.setColumn(fv_position, "VLD_PRD_ED_DT", this.parent.cal_ctrEdDt.value);
        		this.ds_sctrwDtl01.addRow();
        		this.ds_sctrwDtl01.copyRow(0, this.parent.ds_sctrwDtl ,fv_position);
        	}

        	if (this.parent.ds_sctrwNmlMrgnRt.rowcount  > 0) {
        		this.ds_sctrwNmlMrgnRt.addRow();
        		this.ds_sctrwNmlMrgnRt.copyData(this.parent.ds_sctrwNmlMrgnRt);
        	} else {
        // 		this.ds_sctrwNmlMrgnRt.addRow();
        // 		this.ds_sctrwNmlMrgnRt.setColumn(0, "SCTRW_KDC", "417");
        // 		this.ds_sctrwNmlMrgnRt.setColumn(0, "CHG_SQNO", this.parent.ds_register.getColumn(0 ,"CHG_SQNO"));
        	}

        	if (this.parent.ds_sctrwCtrMrgnRt.rowcount  > 0) {
        		this.ds_sctrwCtrMrgnRt.addRow();
        		this.ds_sctrwCtrMrgnRt.copyData(this.parent.ds_sctrwCtrMrgnRt);
        	} else {
        // 		this.ds_sctrwCtrMrgnRt.addRow();
        // 		this.ds_sctrwCtrMrgnRt.setColumn(0, "SCTRW_KDC", "417");
        // 		this.ds_sctrwCtrMrgnRt.setColumn(0, "CHG_SQNO", this.parent.ds_register.getColumn(0 ,"CHG_SQNO"));
        	}
        }

        // 정상마진율 및  행사마진율 행추가
        this.btn_nmlMrgnRt_addRow_onclick = function(obj,e)
        {
        	var nRow = 	this.ds_sctrwNmlMrgnRt.addRow();
        	this.ds_sctrwNmlMrgnRt.setColumn(nRow, "SCTRW_KDC" , "417") ;
        	this.ds_sctrwNmlMrgnRt.setColumn(nRow, "CHG_SQNO" , this.parent.ds_register.getColumn(0 ,"CHG_SQNO" ) ) ;
        	this.parent.ds_sctrwNmlMrgnRt.copyData(this.ds_sctrwNmlMrgnRt);
        	this.fn_sctrwNmlMrgnRt_update();
        }

        // 정상마진율 및  행사마진율 행삭제
        this.btn_nmlMrgnRt_delRow_onclick = function(obj,e)
        {
        	for (var i = this.ds_sctrwNmlMrgnRt.rowcount ; i > -1; i--) {
        		var nCheck = this.ds_sctrwNmlMrgnRt.getColumn(i, "ISCHECKED");
        		if (nCheck == 1) {
        			this.parent.ds_sctrwNmlMrgnRt.deleteRow(i);
        			this.ds_sctrwNmlMrgnRt.deleteRow(i);
        		}
        	}
        }

        this.ds_sctrwNmlMrgnRt_onrowposchanged = function(obj,e)
        {
        	this.parent.ds_sctrwNmlMrgnRt.copyData(this.ds_sctrwNmlMrgnRt);
        	this.fn_sctrwNmlMrgnRt_update();
        }

        // 2. 계약담당자와 계약상대자 간 협의에 의하여 시행하는할인판매 행사 시 마진율 행추가
        this.btn_ctrMrgnRt_addRow_onclick = function(obj,e)
        {
        	var nRow = this.ds_sctrwCtrMrgnRt.addRow();
        	this.ds_sctrwCtrMrgnRt.setColumn(nRow, "SCTRW_KDC" , "417") ;
        	this.ds_sctrwCtrMrgnRt.setColumn(nRow, "CHG_SQNO" , this.parent.ds_register.getColumn(0 ,"CHG_SQNO" ) ) ;
        	this.parent.ds_sctrwCtrMrgnRt.copyData(this.ds_sctrwCtrMrgnRt);
        	this.fn_sctrwCtrMrgnRt_update();
        }

        // 2. 계약담당자와 계약상대자 간 협의에 의하여 시행하는할인판매 행사 시 마진율 행삭제
        this.btn_ctrMrgnRt_delRow_onclick = function(obj,e)
        {
        	for(var i = this.parent.ds_sctrwCtrMrgnRt.rowcount ; i > -1; i--) {
        		var nCheck = this.parent.ds_sctrwCtrMrgnRt.getColumn(i, "ISCHECKED");
        		if (nCheck == 1) {
        			this.parent.ds_sctrwCtrMrgnRt.deleteRow(i);
        			this.ds_sctrwCtrMrgnRt.deleteRow(i);
        		}
        	}
        }

        this.ds_sctrwCtrMrgnRt_onrowposchanged = function(obj,e)
        {
        	this.parent.ds_sctrwCtrMrgnRt.copyData(this.ds_sctrwCtrMrgnRt);
        	this.fn_sctrwCtrMrgnRt_update();
        }

        this.ds_sctrwNmlMrgnRt_oncolumnchanged = function(obj,e)
        {
        	this.parent.ds_sctrwNmlMrgnRt.copyData(this.ds_sctrwNmlMrgnRt);
        	this.fn_sctrwNmlMrgnRt_update();
        }

        this.ds_sctrwCtrMrgnRt_oncolumnchanged = function(obj,e)
        {
        	this.parent.ds_sctrwCtrMrgnRt.copyData(this.ds_sctrwCtrMrgnRt);
        	this.fn_sctrwCtrMrgnRt_update();
        }

        this.fn_sctrwNmlMrgnRt_update = function()
        {
        	for (var i = 0 ; i < this.ds_sctrwNmlMrgnRt.rowcount; i++) {
        		this.parent.ds_sctrwNmlMrgnRt.set_updatecontrol(false);
        		this.parent.ds_sctrwNmlMrgnRt.setRowType(i, this.ds_sctrwNmlMrgnRt.getRowType(i));
        		this.parent.ds_sctrwNmlMrgnRt.set_updatecontrol(true);
        	}

        	if (this.ds_sctrwNmlMrgnRt.rowcount == 0) {
        		for (var i = 0 ; i < this.parent.ds_sctrwNmlMrgnRt.rowcount; i++) {
        			this.parent.ds_sctrwNmlMrgnRt.set_updatecontrol(false);
        			this.parent.ds_sctrwNmlMrgnRt.setRowType(i, Dataset.ROWTYPE_DELETE);
        			this.parent.ds_sctrwNmlMrgnRt.set_updatecontrol(true);
        		}
        	}
        }

        this.fn_sctrwCtrMrgnRt_update = function()
        {
        	for (var i = 0 ; i < this.ds_sctrwCtrMrgnRt.rowcount; i++) {
        		this.parent.ds_sctrwCtrMrgnRt.set_updatecontrol(false);
        		this.parent.ds_sctrwCtrMrgnRt.setRowType(i, this.ds_sctrwCtrMrgnRt.getRowType(i));
        		this.parent.ds_sctrwCtrMrgnRt.set_updatecontrol(true);
        	}

        	if (this.ds_sctrwCtrMrgnRt.rowcount == 0) {
        		for (var i = 0 ; i < this.parent.ds_sctrwCtrMrgnRt.rowcount; i++) {
        			this.parent.ds_sctrwCtrMrgnRt.set_updatecontrol(false);
        			this.parent.ds_sctrwCtrMrgnRt.setRowType(i, Dataset.ROWTYPE_DELETE);
        			this.parent.ds_sctrwCtrMrgnRt.set_updatecontrol(true);
        		}
        	}
        }

        this.fn_validationCheck = function()
        {
        	var strTitletext = "특약서(판매수수료율)";
        	
         	if (this.chk_ETC3.value == "N") {
        		if (this.ds_sctrwNmlMrgnRt.getRowCount() == 0 && this.gfn_nullToEmpty(this.edt_ETC1.value) == "") {
        			alert("정상판매/행사판매수수료율을 직접 작성하거나 행추가 버튼을 눌러 1행 이상의 데이터를 입력해주세요.");
        			this.edt_ETC1.setFocus();
        			return false;
        		} else if (this.ds_sctrwNmlMrgnRt.getRowCount() > 0) {
        			for (var i=0; i<this.ds_sctrwNmlMrgnRt.getRowCount(); i++) {
        				var c1 = this.ds_sctrwNmlMrgnRt.getColumn(i, "STORNM1");
        				var c2 = this.ds_sctrwNmlMrgnRt.getColumn(i, "NML_MRGN_RT");
        				var c3 = this.ds_sctrwNmlMrgnRt.getColumn(i, "EVT_MRGN_RT");
        				
        				if (this.gfn_nullToEmpty(c1) == "" || this.gfn_nullToEmpty(c2) == "" || this.gfn_nullToEmpty(c3) == "") {
        					alert("정상판매/행사판매수수료율 리스트에 입력되지 않은 행이 있습니다.\n해당 행을 입력하시거나 불필요한 경우 행삭제를 해주세요.");
        					return false;
        				}
        			}
        		}
        	}
         	
         	if (this.chk_ETC4.value == "N") {
        		if (this.ds_sctrwCtrMrgnRt.getRowCount() == 0 && this.gfn_nullToEmpty(this.edt_ETC2.value) == "") {
        			alert("할인판매 행사 판매수수료율을 작성하거나 행추가 버튼을 눌러 1행 이상의 데이터를 입력해주세요.");
        			this.edt_ETC2.setFocus();
        			return false;
        		} else if (this.ds_sctrwCtrMrgnRt.getRowCount() > 0) {
        			for (var i=0; i<this.ds_sctrwCtrMrgnRt.getRowCount(); i++) {
        				var c1 = this.ds_sctrwCtrMrgnRt.getColumn(i, "STORNM1");
        				var c2 = this.ds_sctrwCtrMrgnRt.getColumn(i, "DC_SEL_MRGN_RT10");
        				var c3 = this.ds_sctrwCtrMrgnRt.getColumn(i, "DC_SEL_MRGN_RT20");
        				var c4 = this.ds_sctrwCtrMrgnRt.getColumn(i, "DC_SEL_MRGN_RT30");
        				var c5 = this.ds_sctrwCtrMrgnRt.getColumn(i, "DC_SEL_MRGN_RT40");
        				var c6 = this.ds_sctrwCtrMrgnRt.getColumn(i, "DC_SEL_MRGN_RT50");
        				
        				if (this.gfn_nullToEmpty(c1) == "" || this.gfn_nullToEmpty(c2) == "" || this.gfn_nullToEmpty(c3) == ""
        				|| this.gfn_nullToEmpty(c4) == "" || this.gfn_nullToEmpty(c5) == "" || this.gfn_nullToEmpty(c6) == "") {
        					alert("할인판매 행사 판매수수료율 리스트에 입력되지 않은 행이 있습니다.\n해당 행을 입력하시거나 불필요한 경우 행삭제를 해주세요.");
        					return false;
        				}
        			}
        		}
        	}

        	this.parent.ds_sctrwDtl.setColumn(fv_position, "ETC1", this.edt_ETC1.value);
        	this.parent.ds_sctrwDtl.setColumn(fv_position, "ETC2", this.edt_ETC2.value);
        	this.parent.ds_sctrwDtl.setColumn(fv_position, "SCTR_SJT" , this.txa_sctrSjt.value) ;         //특약사항
        	return true;
        }

        this.txatext_changed = function(obj,e)
        {
        	var text = this.txa_sctrSjt.value;
        	if(!this.gfn_isNull(text) ){
        		var lc = text.indexOf("^");
        		if(lc != -1 ){
        			alert('^는 사용하실 수 없습니다.');
        			text = nexacro.replaceAll(text,"^"," ");
        			this.txa_sctrSjt.set_value(text);
        		}
         	}
        	this.parent.ds_sctrwDtl.setColumn(fv_position, "SCTR_SJT" , this.txa_sctrSjt.value) ;         //특약사항
        }

        this.OMG_DS_SC_311301_ontextchanged = function(obj,e)
        {	
            this.parent.ds_sctrwDtl.setColumn(fv_position, "ETC1" , this.edt_ETC1.value) ; // 현금지급조건
        	this.parent.ds_sctrwDtl.setColumn(fv_position, "ETC2" , this.edt_ETC2.value) ; // 판매수수료율
        }

        this.chk_ETC_onchanged = function(obj,e)
        {
        	if (obj.id == "chk_ETC3") {
        		if (obj.value == "Y") {
        			this.parent.ds_sctrwDtl.setColumn(fv_position, "ETC1" , "해당없음") ; // 현금지급조건
        			this.edt_ETC1.set_value("해당없음");
        			this.edt_ETC1.set_enable(false);
        			this.btn_nmlMrgnRt_add.set_enable(false);
        			this.btn_nmlMrgnRt_del.set_enable(false);
        			this.ds_sctrwNmlMrgnRt.clearData();
        		} else {
        			this.parent.ds_sctrwDtl.setColumn(fv_position, "ETC1" , "") ; // 현금지급조건
        			this.edt_ETC1.set_value("");
        			this.edt_ETC1.set_enable(true);
        			this.btn_nmlMrgnRt_add.set_enable(true);
        			this.btn_nmlMrgnRt_del.set_enable(true);
        		}
        	} else if (obj.id == "chk_ETC4") {
        		if (obj.value == "Y") {
        			this.parent.ds_sctrwDtl.setColumn(fv_position, "ETC2" , "해당없음") ; // 판매수수료율
        			this.edt_ETC2.set_value("해당없음");
        			this.edt_ETC2.set_enable(false);
        			this.btn_ctrMrgnRt_add.set_enable(false);
        			this.btn_ctrMrgnRt_del.set_enable(false);
        			this.ds_sctrwCtrMrgnRt.clearData();
        		} else {
        			this.parent.ds_sctrwDtl.setColumn(fv_position, "ETC2" , "") ; // 판매수수료율
        			this.edt_ETC2.set_value("");
        			this.edt_ETC2.set_enable(true);
        			this.btn_ctrMrgnRt_add.set_enable(true);
        			this.btn_ctrMrgnRt_del.set_enable(true);
        		}
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_sctrwNmlMrgnRt.addEventHandler("oncolumnchanged", this.ds_sctrwNmlMrgnRt_oncolumnchanged, this);
            this.ds_sctrwCtrMrgnRt.addEventHandler("oncolumnchanged", this.ds_sctrwCtrMrgnRt_oncolumnchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_nmlMrgnRt_add.addEventHandler("onclick", this.btn_nmlMrgnRt_addRow_onclick, this);
            this.btn_nmlMrgnRt_del.addEventHandler("onclick", this.btn_nmlMrgnRt_delRow_onclick, this);
            this.btn_ctrMrgnRt_add.addEventHandler("onclick", this.btn_ctrMrgnRt_addRow_onclick, this);
            this.btn_ctrMrgnRt_del.addEventHandler("onclick", this.btn_ctrMrgnRt_delRow_onclick, this);
            this.txa_sctrSjt.addEventHandler("ontextchanged", this.txatext_changed, this);
            this.edt_ETC1.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC2.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.chk_ETC3.addEventHandler("onchanged", this.chk_ETC_onchanged, this);
            this.chk_ETC4.addEventHandler("onchanged", this.chk_ETC_onchanged, this);

        };

        this.loadIncludeScript("OMG_DS_SC_311335.xfdl", true);

       
    };
}
)();
