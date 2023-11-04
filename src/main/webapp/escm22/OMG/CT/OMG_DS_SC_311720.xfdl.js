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
                this.set_name("OMG_DS_SC_311720");
                this.set_titletext("농약 구매납품 추가약정서");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,784,250);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_etcItemList", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"1\"/><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"STANDARD\" type=\"STRING\" size=\"256\"/><Column id=\"COUNTRY\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"256\"/><Column id=\"BRAND\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"UPR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_etcEltStylAmm503", this);
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

            obj = new Dataset("ds_pmiwDtl09", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호\"/><Column id=\"PMIW_KDC\" type=\"STRING\" size=\"256\" sumtext=\"약정서종류코드\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_STY_VER\" type=\"STRING\" size=\"256\" sumtext=\"계약서양식버젼\"/><Column id=\"BUY_AM\" type=\"STRING\" size=\"256\" sumtext=\"구매금액\"/><Column id=\"EVT_TINM\" type=\"STRING\" size=\"256\" sumtext=\"행사제목\"/><Column id=\"EVT_PRD_ST_DT\" type=\"STRING\" size=\"256\" sumtext=\"행사기간 시작일자\"/><Column id=\"EVT_PRD_ED_DT\" type=\"STRING\" size=\"256\" sumtext=\"행사기간 종료일자\"/><Column id=\"CTRW_FLNM\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일 이름\"/><Column id=\"CTRW_FL_PATHNM\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일전체경로\"/><Column id=\"CTRW_FL_SZE\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일크기\"/><Column id=\"APDFLNM\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일 이름\"/><Column id=\"APDFL_PATHNM\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일전체경로\"/><Column id=\"APDFL_SZE\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일크기\"/><Column id=\"SYS_FLNM\" type=\"STRING\" size=\"256\" sumtext=\"시스템 파일이름\"/><Column id=\"CTRW_CNTN\" type=\"STRING\" size=\"256\" sumtext=\"계약서내용\"/><Column id=\"CTRW_SGNT\" type=\"STRING\" size=\"256\" sumtext=\"계약서서명\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETC4\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETC5\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETC6\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETC7\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETC8\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETC9\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETCA\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETCB\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETCC\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETCD\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETCE\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETCF\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETCG\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETCH\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"SCTR_SJT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dspcPerWrkPrdPmiw", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호\"/><Column id=\"PMIW_KDC\" type=\"STRING\" size=\"256\" sumtext=\"약정서종류\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\" sumtext=\"변경일련번호\"/><Column id=\"SQNO\" type=\"STRING\" size=\"256\" sumtext=\"일련번호\"/><Column id=\"STORNM\" type=\"STRING\" size=\"256\" sumtext=\"매장명\"/><Column id=\"DSPC_PER\" type=\"STRING\" size=\"256\" sumtext=\"파견인원\"/><Column id=\"WRK_ST_DT\" type=\"STRING\" size=\"256\" sumtext=\"근무기간시작일자\"/><Column id=\"WRK_ED_DT\" type=\"STRING\" size=\"256\" sumtext=\"근무기간종료일자\"/><Column id=\"WRK_ST_HR\" type=\"STRING\" size=\"256\" sumtext=\"근무시작시간\"/><Column id=\"WRK_ED_HR\" type=\"STRING\" size=\"256\" sumtext=\"근무종료시간\"/><Column id=\"RCS_ST_HR\" type=\"STRING\" size=\"256\" sumtext=\"휴게시작시간\"/><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"RCS_ED_HR\" type=\"STRING\" size=\"256\" sumtext=\"휴게종료시간\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"ETC4\" type=\"STRING\" size=\"256\"/><Column id=\"ETC5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static181", "absolute", "0", "54", "218", "21", null, null, this);
            obj.set_taborder("734");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_etcItemList", "absolute", "0", "75", null, "149", "0.51%", null, this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_dspcPerWrkPrdPmiw");
            obj.set_scrollbars("autoboth");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"180\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"140\"/><Column size=\"156\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"삭제\"/><Cell col=\"1\" text=\"상표명\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"mask\" text=\"규격\" mask=\"######\"/><Cell col=\"3\" text=\"상품코드\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"mask\" text=\"농협약정장려금률\" mask=\"######\"/><Cell col=\"5\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"none\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" edittype=\"text\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:ETC1\"/><Cell col=\"2\" edittype=\"text\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ETC2\"/><Cell col=\"3\" edittype=\"text\" editfilter=\"number\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:ETC3\"/><Cell col=\"4\" edittype=\"text\" editfilter=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ETC4\"/><Cell col=\"5\" edittype=\"text\" text=\"bind:ETC5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "200", "0", "414", "27", null, null, this);
            obj.set_taborder("765");
            obj.set_text("27");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "0", "46", "59.31%", "21", null, null, this);
            obj.set_taborder("771");
            obj.set_text("품목(상표)별 농협물량약정장려금률");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addRow", "absolute", "91.45%", "45", null, "21", "0.89%", null, this);
            obj.set_taborder("4");
            obj.set_text("행추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delRow", "absolute", "83.16%", "45", null, "21", "9.31%", null, this);
            obj.set_taborder("3");
            obj.set_text("행삭제");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "0", "10", "59.31%", "21", null, null, this);
            obj.set_taborder("779");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("left middle");
            obj.style.set_padding("0 0 1 5");
            obj.set_text("[농약 구매납품 추가약정서]");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 784, 250, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("농약 구매납품 추가약정서");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_311720.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_311720.xfdl", function(exports) {
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
        	for (var i = 0 ; i < this.parent.ds_etcEltStylAmm.rowcount; i++) {
        		if (this.parent.ds_etcEltStylAmm.getColumn(i, "CTRW_KDC") == "309") {
        			this.ds_etcEltStylAmm503.copyRow(0, this.parent.ds_etcEltStylAmm ,i);
        		}
        	}

        	for (var i = 0 ; i < this.parent.ds_pmiwDtl.rowcount; i++) {
        		if (this.parent.ds_pmiwDtl.getColumn(i, "PMIW_KDC") == "309") {
        			fv_position = i;
        			fv_chk = 1 ;
        			if (this.gfn_nullToEmpty(this.parent.ds_pmiwDtl.getColumn(i, "CTRW_STY_VER")) == "") {
        				this.parent.ds_pmiwDtl.setColumn(fv_position, "CTRW_STY_VER" , this.ds_etcEltStylAmm503.getColumn(0,"CTRW_STY_VER"));
        			}
        			if (this.gfn_nullToEmpty(this.parent.ds_pmiwDtl.getColumn(i, "CHG_SQNO")) == "") {
        				this.parent.ds_pmiwDtl.setColumn(fv_position, "CHG_SQNO" , this.parent.ds_register.getColumn(0 ,"CHG_SQNO"));
        			}
        			this.ds_pmiwDtl09.addRow();
        			this.ds_pmiwDtl09.copyRow(0, this.parent.ds_pmiwDtl, fv_position);
        		}
        	}

        	if (fv_chk == 0) {
        		var nRow = this.parent.ds_pmiwDtl.addRow();
        		fv_position = nRow;
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "PMIW_KDC", "309");
        		this.parent.ds_pmiwDtl.setColumn(fv_position,	"CHG_SQNO", this.parent.ds_register.getColumn(0, "CHG_SQNO"));
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "CTRW_STY_VER", this.ds_etcEltStylAmm503.getColumn(0, "CTRW_STY_VER"));
        		this.ds_pmiwDtl09.addRow();
        		this.ds_pmiwDtl09.copyRow(0, this.parent.ds_pmiwDtl, fv_position);
        	}
        	
        	if (this.parent.ds_dspcPerWrkPrdPmiw.rowcount > 0) {
        		this.ds_dspcPerWrkPrdPmiw.addRow();
        		this.ds_dspcPerWrkPrdPmiw.copyData(this.parent.ds_dspcPerWrkPrdPmiw);
        	} else {
        		this.ds_dspcPerWrkPrdPmiw.addRow();
        		this.ds_dspcPerWrkPrdPmiw.setColumn(0, "PMIW_KDC", "309");
        		this.ds_dspcPerWrkPrdPmiw.setColumn(0, "CHG_SQNO", this.parent.ds_register.getColumn(0 ,"CHG_SQNO"));
        	}
        }

        /* 납품 대상 상품 내역 행추가 */
        this.btn_addrow_onclick = function(obj,e)
        {
        	var nRow = this.ds_dspcPerWrkPrdPmiw.addRow();
        	this.ds_dspcPerWrkPrdPmiw.setColumn(nRow, "PMIW_KDC", "309");
        	this.ds_dspcPerWrkPrdPmiw.setColumn(nRow, "CHG_SQNO", this.parent.ds_register.getColumn(0, "CHG_SQNO"));
        	this.ds_dspcPerWrkPrdPmiw.set_updatecontrol(false); //
        	this.ds_dspcPerWrkPrdPmiw.setRowType(nRow, Dataset.ROWTYPE_INSERT);
        	this.ds_dspcPerWrkPrdPmiw.set_updatecontrol(true); // 이걸 해주지 않으면 자동으로 바뀌지 않음
        }

        /* 납품 대상 상품 내역 행삭제 */
        this.btn_delrow_onclick = function(obj,e)
        {
        	var cnt = this.ds_dspcPerWrkPrdPmiw.getRowCount();
        	if (cnt > 0) {
        		var updateDel = false;
        		for (var i=this.ds_dspcPerWrkPrdPmiw.getRowCount()-1; i>=0; i--) {
        			if (this.ds_dspcPerWrkPrdPmiw.getColumn(i, "ISCHECKED") == "1") {
        				if (this.gfn_nullToEmpty(this.ds_dspcPerWrkPrdPmiw.getColumn(i, "SQNO")) != "") {
        					updateDel = true;
        					continue;
        				}
        				this.ds_dspcPerWrkPrdPmiw.deleteRow(i);
        			}
        		}
        		if (updateDel) {
        			alert("계약서 작성 시 입력한 기존 항목들은 화면에서 바로 행삭제가 되지 않으며, 계약서 수정시 오른쪽 체크박스를 선택한 항목들이 삭제됩니다.");
        		}
        	}
        }

        // 판매상품리스트 그리드 삭제 체크
        this.Grid00_oncellclick = function(obj,e)
        {
        	if (e.col == 0) {
        		var chk = this.ds_dspcPerWrkPrdPmiw.getColumn(e.row, "ISCHECKED");
        		if (chk == "0") {
        			this.ds_dspcPerWrkPrdPmiw.setColumn(e.row, "ISCHECKED", "1");
        		} else {
        			this.ds_dspcPerWrkPrdPmiw.setColumn(e.row, "ISCHECKED", "0");
        		}
        	}
        }

        this.fn_validationCheck = function()
        {	
        	// [첨부1] 품목(상표)별 농협물량약정장려금률
        	if (this.ds_dspcPerWrkPrdPmiw.getRowCount() == 0) {
        		alert("작성된 품목(상표)별 농협물량약정장려금률 리스트가 없습니다.");
        		this.edt_ETC3.setFocus();
        		return false;
        	} else if (this.ds_dspcPerWrkPrdPmiw.getRowCount() > 0) {
        		for (var i=0; i<this.ds_dspcPerWrkPrdPmiw.getRowCount(); i++) {
        			var c1 = this.ds_dspcPerWrkPrdPmiw.getColumn(i, "ETC1");
        			var c2 = this.ds_dspcPerWrkPrdPmiw.getColumn(i, "ETC2");
        			var c3 = this.ds_dspcPerWrkPrdPmiw.getColumn(i, "ETC3");
        			var c4 = this.ds_dspcPerWrkPrdPmiw.getColumn(i, "ETC4");
        			
        			if (this.gfn_nullToEmpty(c1) == "" || this.gfn_nullToEmpty(c2) == "" || this.gfn_nullToEmpty(c3) == "" || this.gfn_nullToEmpty(c4) == "") {
        				alert("품목(상표)별 농협물량약정장려금률 입력값이 누락되었습니다. 비고를 제외한 나머지 항목은 필수값입니다.");
        				return false;
        			}
        		}
        	}
        	
        	return true;
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_dspcPerWrkPrdPmiw.addEventHandler("oncolumnchanged", this.ds_dspcPerWrkPrdPmiw_oncolumnchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.grd_etcItemList.addEventHandler("oncellclick", this.Grid00_oncellclick, this);
            this.btn_addRow.addEventHandler("onclick", this.btn_addrow_onclick, this);
            this.btn_delRow.addEventHandler("onclick", this.btn_delrow_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_311720.xfdl", true);

       
    };
}
)();
