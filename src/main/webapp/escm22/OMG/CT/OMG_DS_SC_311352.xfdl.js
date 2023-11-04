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
                this.set_name("OMG_DS_SC_211352");
                this.set_titletext("거래품목리스트");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,784,400);
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

            obj = new Dataset("ds_etcEltCtrw03", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호   \"/><Column id=\"ETC_CTRW_KDC\" type=\"STRING\" size=\"256\" sumtext=\"기타 계약서종류  \"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_STY_VER\" type=\"STRING\" size=\"256\" sumtext=\"계약서양식버젼   \"/><Column id=\"LBRCS\" type=\"STRING\" size=\"256\" sumtext=\"인건비\"/><Column id=\"LBRCS_CLCN_BASS\" type=\"STRING\" size=\"256\" sumtext=\"인건비 산출근거\"/><Column id=\"ETC\" type=\"STRING\" size=\"256\" sumtext=\"기타\"/><Column id=\"ETC_CLCN_BASS\" type=\"STRING\" size=\"256\" sumtext=\"기타 산출근거\"/><Column id=\"NED_SS\" type=\"STRING\" size=\"256\" sumtext=\"소용비용 계\"/><Column id=\"MSLAM\" type=\"STRING\" size=\"256\" sumtext=\"월매출액\"/><Column id=\"MSLAM_PFT\" type=\"STRING\" size=\"256\" sumtext=\"월매출액이익\"/><Column id=\"RLZ_XPC_PFT\" type=\"STRING\" size=\"256\" sumtext=\"실현예상이익\"/><Column id=\"SCTR_SJT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"ETC4\" type=\"STRING\" size=\"256\"/><Column id=\"ETC5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static181", "absolute", "0", "139", "218", "21", null, null, this);
            obj.set_taborder("734");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_etcItemList", "absolute", "0", "160", null, "149", "0.51%", null, this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_etcItemList");
            obj.set_scrollbars("autoboth");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"160\"/><Column size=\"276\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"삭제\"/><Cell col=\"1\" text=\"브랜드명\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"mask\" text=\"상품품목\" mask=\"######\"/><Cell col=\"3\" text=\"수량\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"mask\" text=\"단가\" mask=\"######\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"none\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" edittype=\"text\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:BRAND\"/><Cell col=\"2\" edittype=\"text\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ITEM_NAME\"/><Cell col=\"3\" edittype=\"text\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:QTY\"/><Cell col=\"4\" edittype=\"text\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:UPR\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "200", "0", "414", "27", null, null, this);
            obj.set_taborder("765");
            obj.set_text("27");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static94", "absolute", "13.78%", "314", null, "80", "0.51%", null, this);
            obj.set_taborder("766");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "0", "314", null, "80", "86.1%", null, this);
            obj.set_taborder("767");
            obj.set_text("특약사항");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_sctrSjt", "absolute", "14.29%", "318", null, "72", "0.51%", null, this);
            obj.set_taborder("5");
            obj.set_wordwrap("char");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("1998");
            this.addChild(obj.name, obj);

            obj = new Static("Static62", "absolute", "16.84%", "76", null, "29", "0.89%", null, this);
            obj.set_taborder("769");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0", "51", "59.31%", "21", null, null, this);
            obj.set_taborder("770");
            obj.set_text("납품장소 및 납품기일");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "0", "131", "59.31%", "21", null, null, this);
            obj.set_taborder("771");
            obj.set_text("납품 대상 상품 내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static64", "absolute", "0", "76", null, "29", "80.99%", null, this);
            obj.set_taborder("772");
            obj.set_text("납품장소");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC1", "absolute", "19.64%", "80", null, "21", "51.4%", null, this);
            obj.set_taborder("0");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC2", "absolute", "63.27%", "80", null, "21", "5.61%", null, this);
            obj.set_taborder("1");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            this.addChild(obj.name, obj);

            obj = new Static("Static71", "absolute", "49.74%", "76", null, "29", "37.37%", null, this);
            obj.set_taborder("775");
            obj.set_text("납품기일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addRow", "absolute", "91.45%", "130", null, "21", "0.89%", null, this);
            obj.set_taborder("4");
            obj.set_text("행추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delRow", "absolute", "83.16%", "130", null, "21", "9.31%", null, this);
            obj.set_taborder("3");
            obj.set_text("행삭제");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC3", "absolute", "18.37%", "130", null, "21", "32.4%", null, this);
            obj.set_taborder("2");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "0", "10", "59.31%", "21", null, null, this);
            obj.set_taborder("779");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("left middle");
            obj.style.set_padding("0 0 1 5");
            obj.set_text("[거래품목리스트]");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 784, 400, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("거래품목리스트");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item4","txa_sctrSjt","value","ds_etcEltCtrw03","SCTR_SJT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","edt_ETC1","value","ds_etcEltCtrw03","ETC1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","edt_ETC2","value","ds_etcEltCtrw03","ETC2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","edt_ETC3","value","ds_etcEltCtrw03","ETC3");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_311352.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_311352.xfdl", function(exports) {
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
        		if (this.parent.ds_etcEltStylAmm.getColumn(i, "CTRW_KDC") == "503") {
        			this.ds_etcEltStylAmm503.copyRow(0, this.parent.ds_etcEltStylAmm ,i);
        		}
        	}

        	for (var i = 0 ; i < this.parent.ds_etcEltCtrw.rowcount; i++) {
        		if (this.parent.ds_etcEltCtrw.getColumn(i, "ETC_CTRW_KDC") =="503") {
        			fv_position = i;
        			fv_chk = 1;
        			if (this.gfn_nullToEmpty(this.parent.ds_etcEltCtrw.getColumn(i, "CTRW_STY_VER")) == "") {
        				this.parent.ds_etcEltCtrw.setColumn(fv_position, "CTRW_STY_VER" , this.ds_etcEltStylAmm503.getColumn(0,"CTRW_STY_VER"));
        			}
        			if (this.gfn_nullToEmpty(this.parent.ds_etcEltCtrw.getColumn(i, "CHG_SQNO")) == "") {
        				this.parent.ds_etcEltCtrw.setColumn(fv_position, "CHG_SQNO" , this.parent.ds_register.getColumn(0 ,"CHG_SQNO"));
        			}
        			this.ds_etcEltCtrw03.addRow();
        			this.ds_etcEltCtrw03.copyRow(0, this.parent.ds_etcEltCtrw ,fv_position);
        		}
         	}

        	if (fv_chk == 0 ) {
        		var toDay = this.gfn_today("yyyyMMdd");
        		chkDay = this.gfn_addMonth(toDay, 1);

        		var nRow = this.parent.ds_etcEltCtrw.addRow();
        		fv_position = nRow;
        		this.parent.ds_etcEltCtrw.setColumn(fv_position, "ETC_CTRW_KDC", "503");
        		this.parent.ds_etcEltCtrw.setColumn(fv_position,	"CHG_SQNO", this.parent.ds_register.getColumn(0, "CHG_SQNO"));
        		this.parent.ds_etcEltCtrw.setColumn(fv_position, "CTRW_STY_VER", this.ds_etcEltStylAmm503.getColumn(0, "CTRW_STY_VER"));
        		this.ds_etcEltCtrw03.addRow();
        		this.ds_etcEltCtrw03.copyRow(0, this.parent.ds_etcEltCtrw ,fv_position);
        	}

        	if (this.parent.ds_ctEtcItemList.rowcount > 0) {
        		this.ds_etcItemList.addRow();
        		this.ds_etcItemList.copyData(this.parent.ds_ctEtcItemList);
        	} else {
        		this.ds_etcItemList.addRow();
        		this.ds_etcItemList.setColumn(0, "ETC_CTRW_KDC", "503");
        		this.ds_etcItemList.setColumn(0, "CHG_SQNO", this.parent.ds_register.getColumn(0 ,"CHG_SQNO"));
        	}
        }

        /* 납품 대상 상품 내역 행추가 */
        this.btn_addrow_onclick = function(obj,e)
        {
        	var nRow = this.ds_etcItemList.addRow();
        	
        	//ds_rsclist
        	this.ds_etcItemList.setColumn(nRow, "ISCHECKED", "0");
        	this.ds_etcItemList.setColumn(nRow, "ELT_CTRW_NO", "");
        	this.ds_etcItemList.setColumn(nRow, "CHG_SQNO", "001" );
        	//this.ds_etcItemList.setColumn(nRow, "SQNO", 	this.ds_etcItemList.rowcount );
        	
        	this.ds_etcItemList.set_updatecontrol(false); //
        	this.ds_etcItemList.setRowType(nRow, Dataset.ROWTYPE_INSERT);
        	this.ds_etcItemList.set_updatecontrol(true); // 이걸 해주지 않으면 자동으로 바뀌지 않음
        }

        /* 납품 대상 상품 내역 행삭제 */
        this.btn_delrow_onclick = function(obj,e)
        {
        	var cnt = this.ds_etcItemList.getRowCount();
        	if (cnt > 0) {
        		var updateDel = false;
        		for (var i=this.ds_etcItemList.getRowCount()-1; i>=0; i--) {
        			if (this.ds_etcItemList.getColumn(i, "ISCHECKED") == "1") {
        				if (this.gfn_nullToEmpty(this.ds_etcItemList.getColumn(i, "SQNO")) != "") {
        					updateDel = true;
        					continue;
        				}
        				this.ds_etcItemList.deleteRow(i);
        			}
        		}
        		if (updateDel) {
        			alert("계약서 작성시 입력한 기존 항목들은 화면에서 바로 행삭제가 되지 않으며, 계약서 수정시 오른쪽 체크박스를 선택한 항목들이 삭제됩니다.");
        		}
        	}
        }

        // 판매상품리스트 그리드 삭제 체크
        this.Grid00_oncellclick = function(obj,e)
        {
        	if (e.col == 0) {
        		var chk = this.ds_etcItemList.getColumn(e.row, "ISCHECKED");
        		if (chk == "0") {
        			this.ds_etcItemList.setColumn(e.row, "ISCHECKED", "1");
        		} else {
        			this.ds_etcItemList.setColumn(e.row, "ISCHECKED", "0");
        		}
        	}
        }

        this.fn_validationCheck = function()
        {
        	var strTitletext = "거래품목리스트";
         	
        	// [첨부1] 납품장소
        	if (this.gfn_nullToEmpty(this.edt_ETC1.value) == "") {
        		alert("납품장소를 입력해주세요.");
        		this.edt_ETC21.setFocus();
        		return false;
        	}

        	// [첨부1] 납품기일
        	if (this.gfn_nullToEmpty(this.edt_ETC2.value) == "") {
        		alert("납품기일을 입력해주세요.");
        		this.edt_ETC22.setFocus();
        		return false;
        	}
        	
        	// [첨부1] 납품 대상 상품 내역
        	if (this.ds_etcItemList.getRowCount() == 0 && this.gfn_nullToEmpty(this.edt_ETC3.value) == "") {
        		alert("납품 대상 상품 리스트를 작성하거나 납품 대상 상품 내역을 입력해주세요.");
        		this.edt_ETC3.setFocus();
        		return false;
        	} else if (this.ds_etcItemList.getRowCount() > 0) {
        		for (var i=0; i<this.ds_etcItemList.getRowCount(); i++) {
        			var c1 = this.ds_etcItemList.getColumn(i, "BRAND");
        			var c2 = this.ds_etcItemList.getColumn(i, "ITEM_NAME");
        			var c3 = this.ds_etcItemList.getColumn(i, "QTY");
        			var c4 = this.ds_etcItemList.getColumn(i, "UPR");
        			
        			if (this.gfn_nullToEmpty(c1) == "" || this.gfn_nullToEmpty(c2) == "" || this.gfn_nullToEmpty(c3) == "" || this.gfn_nullToEmpty(c4) == "") {
        				alert("납품 대상 상품 리스트에 입력되지 않은 행이 있습니다.\n해당 행을 입력하시거나 불필요한 경우 행삭제를 해주세요.");
        				return false;
        			}
        		}
        	}
         	
        	this.parent.ds_etcEltCtrw.setColumn(fv_position, "SCTR_SJT" , this.txa_sctrSjt.value);         //특약사항
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
        	this.parent.ds_etcEltCtrw.setColumn(fv_position, "SCTR_SJT" , this.txa_sctrSjt.value) ;         //특약사항
        }

        this.OMG_DS_SC_311301_ontextchanged = function(obj,e)
        {
        	this.parent.ds_etcEltCtrw.setColumn(fv_position, "ETC1", this.edt_ETC1.value);
        	this.parent.ds_etcEltCtrw.setColumn(fv_position, "ETC2", this.edt_ETC2.value);
        	this.parent.ds_etcEltCtrw.setColumn(fv_position, "ETC3", this.edt_ETC3.value);
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.grd_etcItemList.addEventHandler("oncellclick", this.Grid00_oncellclick, this);
            this.txa_sctrSjt.addEventHandler("ontextchanged", this.txatext_changed, this);
            this.txa_sctrSjt.addEventHandler("onkillfocus", this.txatext_changed, this);
            this.edt_ETC1.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC1.addEventHandler("onkillfocus", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC2.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC2.addEventHandler("onkillfocus", this.OMG_DS_SC_311301_ontextchanged, this);
            this.btn_addRow.addEventHandler("onclick", this.btn_addrow_onclick, this);
            this.btn_delRow.addEventHandler("onclick", this.btn_delrow_onclick, this);
            this.edt_ETC3.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC3.addEventHandler("onkillfocus", this.OMG_DS_SC_311301_ontextchanged, this);

        };

        this.loadIncludeScript("OMG_DS_SC_311352.xfdl", true);

       
    };
}
)();
