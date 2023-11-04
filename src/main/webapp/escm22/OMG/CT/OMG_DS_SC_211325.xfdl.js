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
                this.set_name("OMG_DS_SC_211325");
                this.set_titletext("상품공급추가약정서(특약매입)");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,788,580);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pmiwNmlMrgnRt", this);
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

            obj = new Dataset("ds_pmiwCtrMrgnRt", this);
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

            obj = new Dataset("ds_etcEltStylAmm", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CTRW_KDC\" type=\"STRING\" size=\"256\" sumtext=\"계약서양식일련번호\"/><Column id=\"CTRW_STY_VER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pmiwDtl", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호\"/><Column id=\"PMIW_KDC\" type=\"STRING\" size=\"256\" sumtext=\"약정서종류코드\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_STY_VER\" type=\"STRING\" size=\"256\" sumtext=\"계약서양식버젼\"/><Column id=\"BUY_AM\" type=\"STRING\" size=\"256\" sumtext=\"구매금액\"/><Column id=\"EVT_TINM\" type=\"STRING\" size=\"256\" sumtext=\"행사제목\"/><Column id=\"EVT_PRD_ST_DT\" type=\"STRING\" size=\"256\" sumtext=\"행사기간 시작일자\"/><Column id=\"EVT_PRD_ED_DT\" type=\"STRING\" size=\"256\" sumtext=\"행사기간 종료일자\"/><Column id=\"CTRW_FLNM\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일 이름\"/><Column id=\"CTRW_FL_PATHNM\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일전체경로\"/><Column id=\"CTRW_FL_SZE\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일크기\"/><Column id=\"APDFLNM\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일 이름\"/><Column id=\"APDFL_PATHNM\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일전체경로\"/><Column id=\"APDFL_SZE\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일크기\"/><Column id=\"SYS_FLNM\" type=\"STRING\" size=\"256\" sumtext=\"시스템 파일이름\"/><Column id=\"CTRW_CNTN\" type=\"STRING\" size=\"256\" sumtext=\"계약서내용\"/><Column id=\"CTRW_SGNT\" type=\"STRING\" size=\"256\" sumtext=\"계약서서명\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETC4\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETC5\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"SCTR_SJT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static25", "absolute", "140", "542", null, "29", "0", null, this);
            obj.set_taborder("735");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "108", "474", null, "29", "0", null, this);
            obj.set_taborder("731");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static164", "absolute", "0", "43", "467", "21", null, null, this);
            obj.set_taborder("704");
            obj.set_text("정상판매수수료율 및 행사판매수수료율");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_pmiwNmlMrgnRt", "absolute", "0", "67", null, "139", "0", null, this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_pmiwNmlMrgnRt");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"200\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"정상판매수수료율(%)\"/><Cell col=\"2\" text=\"행사판매수수료율(%)\"/><Cell col=\"3\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"mask\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:NML_MRGN_RT\" mask=\"##\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"mask\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:EVT_MRGN_RT\" mask=\"##\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:RMK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_nmlMrgnRt_add", "absolute", null, "41", "53", "21", "55", null, this);
            obj.set_taborder("4");
            obj.set_text("행추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_nmlMrgnRt_del", "absolute", null, "41", "53", "21", "0%", null, this);
            obj.set_taborder("715");
            obj.set_text("행삭제");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_pmiwCtrMrgnRt", "absolute", "0", "257", null, "176", "0", null, this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_pmiwCtrMrgnRt");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"100\"/></Columns><Rows><Row size=\"34\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" colspan=\"5\" text=\"할인판매 판매수수료율\"/><Cell col=\"6\" rowspan=\"2\" text=\"비고\"/><Cell row=\"1\" col=\"1\" text=\"10% 할인\"/><Cell row=\"1\" col=\"2\" text=\"20% 할인\"/><Cell row=\"1\" col=\"3\" text=\"30% 할인\"/><Cell row=\"1\" col=\"4\" text=\"40% 할인\"/><Cell row=\"1\" col=\"5\" text=\"50% 할인\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" displaytype=\"number\" edittype=\"mask\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DC_SEL_MRGN_RT10\" mask=\"##\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"mask\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DC_SEL_MRGN_RT20\" mask=\"##\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"mask\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DC_SEL_MRGN_RT30\" mask=\"##\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"mask\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DC_SEL_MRGN_RT40\" mask=\"##\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"mask\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DC_SEL_MRGN_RT50\" mask=\"##\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"text\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:RMK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ctrMrgnRt_add", "absolute", null, "231", "53", "21", "55", null, this);
            obj.set_taborder("5");
            obj.set_text("행추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ctrMrgnRt_del", "absolute", null, "231", "53", "21", "0%", null, this);
            obj.set_taborder("719");
            obj.set_text("행삭제");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "0", "0", "59.26%", "21", null, null, this);
            obj.set_taborder("725");
            obj.set_text("[상품공급 추가 약정서(특약매입)]");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("left middle");
            obj.style.set_padding("0 0 1 5");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "231", "546", "21", null, null, this);
            obj.set_taborder("726");
            obj.set_text("\"구매자\"와 \"공급자\"간 협의에 의하여 시행하는 할인판매 행사 시 판매수수료율");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "448", "546", "21", null, null, this);
            obj.set_taborder("728");
            obj.set_text("판매수수료율");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_ETC1", "absolute", "276", "478", "47", "21", null, null, this);
            obj.set_taborder("2");
            obj.getSetter("lengthunit").set("ascii");
            obj.getSetter("maxlength").set("200");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "0", "474", "132", "29", null, null, this);
            obj.set_taborder("730");
            obj.set_text("수수료 변경기한");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "0", "542", "237", "29", null, null, this);
            obj.set_taborder("736");
            obj.set_text("하자보증보험증권의 금액 또는 보증금");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_ETC2", "absolute", "463", "546", "36", "21", null, null, this);
            obj.set_taborder("3");
            obj.getSetter("lengthunit").set("ascii");
            obj.getSetter("maxlength").set("20");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "502", "546", "40", "21", null, null, this);
            obj.set_taborder("738");
            obj.set_text("%");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "239", "546", "228", "21", null, null, this);
            obj.set_taborder("739");
            obj.set_text("계약종료일 직전 월의 판매된 상품대금의");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "0", "519", "59.26%", "21", null, null, this);
            obj.set_taborder("740");
            obj.set_text("사후 고객관리를 위한 조치");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "328", "478", "53", "21", null, null, this);
            obj.set_taborder("741");
            obj.set_text("개월 전");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "135", "478", "138", "21", null, null, this);
            obj.set_taborder("742");
            obj.set_text("계약기간의 만료일로부터");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 788, 580, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("상품공급추가약정서(특약매입)");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item3","edt_ETC1","value","ds_pmiwDtl","ETC1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edt_ETC2","value","ds_pmiwDtl","ETC2");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_211325.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_211325.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        var fv_position = 0; //위치값
        var fv_chk = 0; //데이터 체크

        this.form_onload = function(obj,e)
        {
           this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	// 폼양식
        	for (var i = 0; i < this.parent.ds_etcEltStylAmm.rowcount; i++) {
        		if (this.parent.ds_etcEltStylAmm.getColumn(i, "CTRW_KDC") == "309") {
        			this.ds_etcEltStylAmm.copyRow(0, this.parent.ds_etcEltStylAmm, i);
        		}
        	}

        	// 수정화면 일 때
        	for (var i = 0; i < this.parent.ds_pmiwDtl.rowcount; i++) {
        		if (this.parent.ds_pmiwDtl.getColumn(i, "PMIW_KDC") == "309") {
        			fv_position = i;
        			fv_chk = 1;
        			this.ds_pmiwDtl.addRow();
        			this.ds_pmiwDtl.copyRow(0, this.parent.ds_pmiwDtl, fv_position);
        		}
        	}

        	if (fv_chk == 0) {
        		var nRow = this.parent.ds_pmiwDtl.addRow();
        		fv_position = nRow;

        		this.parent.ds_pmiwDtl.setColumn(fv_position, "PMIW_KDC", "309");
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "CHG_SQNO", this.parent.ds_register.getColumn(0, "CHG_SQNO"));
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "CTRW_STY_VER", this.ds_etcEltStylAmm.getColumn(0, "CTRW_STY_VER"));

        		this.ds_pmiwDtl.addRow();
        		this.ds_pmiwDtl.copyRow(0, this.parent.ds_pmiwDtl, fv_position);
        	}
        }

        /* Validation Check */
        this.fn_validationCheck = function()
        {
        	var strTitletext = "[상품공급 추가 약정서(특약매입)]";

        	// 판매수수료율 변경기한
        	if (this.gfn_isNull(this.edt_ETC1.value)) {
         		this.alert("판매수수료율 변경기한을 입력해주세요.");
        		this.edt_ETC1.setFocus();
         		return false;
         	}

        	// 판매수수료율 변경기한
        	if (this.gfn_isNull(this.edt_ETC2.value)) {
        		this.alert("하자보증보험증권 가입 또는 보증금 예치 금액 비율을 입력해주세요.");
        		this.edt_ETC2.setFocus();
         		return false;
         	}

        	// 정상판매수수료율 및 행사판매수수료율
        	if (this.ds_pmiwNmlMrgnRt.getRowCount() == 0) {
        		alert("정상판매수수료율 및 행사판매수수료율을 입력해주세요.");
        		return false;
        	} else if (this.ds_pmiwNmlMrgnRt.getRowCount() > 0) {
        		for (var i=0; i<this.ds_pmiwNmlMrgnRt.getRowCount(); i++) {
        			var c1 = this.ds_pmiwNmlMrgnRt.getColumn(i, "NML_MRGN_RT");
        			var c2 = this.ds_pmiwNmlMrgnRt.getColumn(i, "EVT_MRGN_RT");

        			if (this.gfn_nullToEmpty(c1) == "" || this.gfn_nullToEmpty(c2) == "") {
        				alert("정상판매수수료율 및 행사판매수수료율 리스트에 입력되지 않은 행이 있습니다.\n해당 행을 입력하시거나 불필요한 경우 행삭제를 해주세요.");
        				return false;
        			}
        		}
        	}

        	// "구매자"와 "공급자"간 협의에 의하여 시행하는 할인판매 행사 시 판매수수료율
        	if (this.ds_pmiwCtrMrgnRt.getRowCount() == 0) {
        		alert('"구매자"와 "공급자"간 협의에 의하여 시행하는 할인판매 행사 시 판매수수료율을 입력해주세요.');
        		return false;
        	} else if (this.ds_pmiwCtrMrgnRt.getRowCount() > 0) {
        		for (var i=0; i<this.ds_pmiwCtrMrgnRt.getRowCount(); i++) {
        			var c1 = this.ds_pmiwCtrMrgnRt.getColumn(i, "DC_SEL_MRGN_RT10");
        			var c2 = this.ds_pmiwCtrMrgnRt.getColumn(i, "DC_SEL_MRGN_RT20");
        			var c3 = this.ds_pmiwCtrMrgnRt.getColumn(i, "DC_SEL_MRGN_RT30");
        			var c4 = this.ds_pmiwCtrMrgnRt.getColumn(i, "DC_SEL_MRGN_RT40");
        			var c5 = this.ds_pmiwCtrMrgnRt.getColumn(i, "DC_SEL_MRGN_RT50");

        			if (this.gfn_nullToEmpty(c1) == "" || this.gfn_nullToEmpty(c2) == "" || this.gfn_nullToEmpty(c3) == "" || this.gfn_nullToEmpty(c4) == "" || this.gfn_nullToEmpty(c5) == "") {
        				alert('"구매자"와 "공급자"간 협의에 의하여 시행하는 할인판매 행사 시 판매수수료율 리스트에 입력되지 않은 행이 있습니다.\n해당 행을 입력하시거나 불필요한 경우 행삭제를 해주세요.');
        				return false;
        			}
        		}
        	}

        	return true;
        }

        this.OMG_DS_SC_211324_ontextchanged = function(obj,e)
        {
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC1", this.edt_ETC1.value);
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC2", this.edt_ETC2.value);
        }

        /* 정상판매수수료율 및 행사판매수수료율 행추가 */
        this.btn_nmlMrgnRt_addrow_onclick = function(obj,e)
        {
        	var nRow = this.ds_pmiwNmlMrgnRt.addRow();

        	//ds_rsclist
        	this.ds_pmiwNmlMrgnRt.setColumn(nRow, "ISCHECKED", "0");
        	this.ds_pmiwNmlMrgnRt.setColumn(nRow, "ELT_CTRW_NO", "");
        	this.ds_pmiwNmlMrgnRt.setColumn(nRow, "CHG_SQNO", "001");

        	this.ds_pmiwNmlMrgnRt.set_updatecontrol(false); //
        	this.ds_pmiwNmlMrgnRt.setRowType(nRow, Dataset.ROWTYPE_INSERT);
        	this.ds_pmiwNmlMrgnRt.set_updatecontrol(true); // 이걸 해주지 않으면 자동으로 바뀌지 않음
        }

        /* 정상판매수수료율 및 행사판매수수료율 행삭제 */
        this.btn_nmlMrgnRt_delrow_onclick = function(obj,e)
        {
        	var cnt = this.ds_pmiwNmlMrgnRt.getRowCount();
        	if (cnt > 0) {
        		var updateDel = false;
        		for (var i=this.ds_pmiwNmlMrgnRt.getRowCount()-1; i>=0; i--) {
        			if (this.ds_pmiwNmlMrgnRt.getColumn(i, "ISCHECKED") == "1") {
        				if (this.gfn_nullToEmpty(this.ds_pmiwNmlMrgnRt.getColumn(i, "SQNO")) != "") {
        					updateDel = true;
        					continue;
        				}
        				this.ds_pmiwNmlMrgnRt.deleteRow(i);
        			}
        		}
        		if (updateDel) {
        			alert("계약서 작성시 입력한 기존 항목들은 화면에서 바로 행삭제가 되지 않으며, 계약서 수정시 오른쪽 체크박스를 선택한 항목들이 삭제됩니다.");
        		}
        	}
        }

        /* "구매자"와 "공급자"간 협의에 의하여 시행하는 할인판매 행사 시 판매수수료율 행추가 */
        this.btn_ctrMrgnRt_addrow_onclick = function(obj,e)
        {
        	var nRow = this.ds_pmiwCtrMrgnRt.addRow();

        	//ds_rsclist
        	this.ds_pmiwCtrMrgnRt.setColumn(nRow, "ISCHECKED", "0");
        	this.ds_pmiwCtrMrgnRt.setColumn(nRow, "ELT_CTRW_NO", "");
        	this.ds_pmiwCtrMrgnRt.setColumn(nRow, "CHG_SQNO", "001");

        	this.ds_pmiwCtrMrgnRt.set_updatecontrol(false); //
        	this.ds_pmiwCtrMrgnRt.setRowType(nRow, Dataset.ROWTYPE_INSERT);
        	this.ds_pmiwCtrMrgnRt.set_updatecontrol(true); // 이걸 해주지 않으면 자동으로 바뀌지 않음
        }

        /* "구매자"와 "공급자"간 협의에 의하여 시행하는 할인판매 행사 시 판매수수료율 행삭제 */
        this.btn_ctrMrgnRt_delrow_onclick = function(obj,e)
        {
        	var cnt = this.ds_pmiwCtrMrgnRt.getRowCount();
        	if (cnt > 0) {
        		var updateDel = false;
        		for (var i=this.ds_pmiwCtrMrgnRt.getRowCount()-1; i>=0; i--) {
        			if (this.ds_pmiwCtrMrgnRt.getColumn(i, "ISCHECKED") == "1") {
        				if (this.gfn_nullToEmpty(this.ds_pmiwCtrMrgnRt.getColumn(i, "SQNO")) != "") {
        					updateDel = true;
        					continue;
        				}
        				this.ds_pmiwCtrMrgnRt.deleteRow(i);
        			}
        		}
        		if (updateDel) {
        			alert("계약서 작성시 입력한 기존 항목들은 화면에서 바로 행삭제가 되지 않으며, 계약서 수정시 오른쪽 체크박스를 선택한 항목들이 삭제됩니다.");
        		}
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_pmiwNmlMrgnRt.addEventHandler("oncolumnchanged", this.ds_sctrwNmlMrgnRt_oncolumnchanged, this);
            this.ds_pmiwCtrMrgnRt.addEventHandler("oncolumnchanged", this.ds_sctrwCtrMrgnRt_oncolumnchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.grd_pmiwNmlMrgnRt.addEventHandler("onheadclick", this.grd_nmlMrgnRt_onheadclick, this);
            this.btn_nmlMrgnRt_add.addEventHandler("onclick", this.btn_nmlMrgnRt_addrow_onclick, this);
            this.btn_nmlMrgnRt_del.addEventHandler("onclick", this.btn_nmlMrgnRt_delrow_onclick, this);
            this.grd_pmiwCtrMrgnRt.addEventHandler("onheadclick", this.grd_ctrMrgnRt_onheadclick, this);
            this.btn_ctrMrgnRt_add.addEventHandler("onclick", this.btn_ctrMrgnRt_addrow_onclick, this);
            this.btn_ctrMrgnRt_del.addEventHandler("onclick", this.btn_ctrMrgnRt_delrow_onclick, this);
            this.edt_ETC1.addEventHandler("onkillfocus", this.OMG_DS_SC_211324_ontextchanged, this);
            this.edt_ETC1.addEventHandler("ontextchanged", this.OMG_DS_SC_211324_ontextchanged, this);
            this.edt_ETC2.addEventHandler("onkillfocus", this.OMG_DS_SC_211324_ontextchanged, this);
            this.edt_ETC2.addEventHandler("ontextchanged", this.OMG_DS_SC_211324_ontextchanged, this);

        };

        this.loadIncludeScript("OMG_DS_SC_211325.xfdl", true);

       
    };
}
)();
