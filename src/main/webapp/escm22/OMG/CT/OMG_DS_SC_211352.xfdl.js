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
                this._setFormPosition(0,0,784,248);
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
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호   \"/><Column id=\"ETC_CTRW_KDC\" type=\"STRING\" size=\"256\" sumtext=\"기타 계약서종류  \"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_STY_VER\" type=\"STRING\" size=\"256\" sumtext=\"계약서양식버젼   \"/><Column id=\"SQNO\" type=\"STRING\" size=\"256\" sumtext=\"순번\"/><Column id=\"ITEM_NAME\" type=\"STRING\" size=\"256\" sumtext=\"상품명\"/><Column id=\"STANDARD\" type=\"STRING\" size=\"256\" sumtext=\"규격\"/><Column id=\"ITEM_CODE\" type=\"STRING\" size=\"256\" sumtext=\"상품코드\"/><Column id=\"COUNTRY\" type=\"STRING\" size=\"256\" sumtext=\"원산지\"/><Column id=\"COMPANY\" type=\"STRING\" size=\"256\" sumtext=\"제조업체/즉석제조\"/><Column id=\"SCTR_SJT\" type=\"STRING\" size=\"256\" sumtext=\"특약사항\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호   \"/><Column id=\"ETC_CTRW_KDC\" type=\"STRING\" size=\"256\" sumtext=\"기타 계약서종류  \"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_STY_VER\" type=\"STRING\" size=\"256\" sumtext=\"계약서양식버젼   \"/><Column id=\"LBRCS\" type=\"STRING\" size=\"256\" sumtext=\"인건비\"/><Column id=\"LBRCS_CLCN_BASS\" type=\"STRING\" size=\"256\" sumtext=\"인건비 산출근거\"/><Column id=\"ETC\" type=\"STRING\" size=\"256\" sumtext=\"기타\"/><Column id=\"ETC_CLCN_BASS\" type=\"STRING\" size=\"256\" sumtext=\"기타 산출근거\"/><Column id=\"NED_SS\" type=\"STRING\" size=\"256\" sumtext=\"소용비용 계\"/><Column id=\"MSLAM\" type=\"STRING\" size=\"256\" sumtext=\"월매출액\"/><Column id=\"MSLAM_PFT\" type=\"STRING\" size=\"256\" sumtext=\"월매출액이익\"/><Column id=\"RLZ_XPC_PFT\" type=\"STRING\" size=\"256\" sumtext=\"실현예상이익\"/><Column id=\"SCTR_SJT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static172", "absolute", "0", "0", "467", "21", null, null, this);
            obj.set_taborder("717");
            obj.set_text("거래품목리스트");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button15", "absolute", "704", "0", "77", "21", null, null, this);
            obj.set_taborder("718");
            obj.set_text("계약서보기");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static181", "absolute", "0", "34", "218", "21", null, null, this);
            obj.set_taborder("734");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_etcItemList", "absolute", "0", "55", null, null, "0.51%", "88", this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_etcItemList");
            obj.set_scrollbars("autoboth");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"160\"/><Column size=\"97\"/><Column size=\"160\"/><Column size=\"97\"/><Column size=\"160\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상품명\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"mask\" text=\"규격(모델명)\" mask=\"######\"/><Cell col=\"3\" text=\"상품코드\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"mask\" text=\"원산지\" mask=\"######\"/><Cell col=\"5\" text=\"제조업체/즉석제조\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:STORNM1\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"mask\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:PMTN_EMPE1\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:STORNM2\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"mask\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:PMTN_EMPE2\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"text\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:STORNM3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sctrwPmtnEmpeDspcBrk_add", "absolute", null, "29", "53", "21", "59", null, this);
            obj.set_taborder("4");
            obj.set_text("행추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sctrwPmtnEmpeDspcBrk_del", "absolute", null, "29", "53", "21", "4", null, this);
            obj.set_taborder("764");
            obj.set_text("행삭제");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "200", "0", "414", "27", null, null, this);
            obj.set_taborder("765");
            obj.set_text("27");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static94", "absolute", "13.78%", "164", null, "80", "0.51%", null, this);
            obj.set_taborder("766");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "0", "164", null, "80", "86.1%", null, this);
            obj.set_taborder("767");
            obj.set_text("특약사항");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_sctrSjt", "absolute", "14.29%", "168", null, "72", "0.51%", null, this);
            obj.set_taborder("768");
            obj.set_wordwrap("char");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("1998");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 784, 248, this,
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

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_211352.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_211352.xfdl", function(exports) {
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
        		if (this.parent.ds_etcEltStylAmm.getColumn(i, "CTRW_KDC") == "503") {
        			this.ds_etcEltStylAmm503.copyRow(0, this.parent.ds_etcEltStylAmm, i);
        		}
        	}

        	for (var i = 0; i < this.parent.ds_etcEltCtrw.rowcount; i++) {
        		if (this.parent.ds_etcEltCtrw.getColumn(i, "ETC_CTRW_KDC") == "503") {
        			fv_position = i;
        			fv_chk = 1;
        			this.ds_etcEltCtrw03.addRow();
        			this.ds_etcEltCtrw03.copyRow(0, this.parent.ds_etcEltCtrw, fv_position);
        		}
         	}

        	if (fv_chk == 0) {
        		var toDay = this.gfn_today("yyyyMMdd");
        		chkDay = this.gfn_addMonth(toDay, 1);

        		var nRow = this.parent.ds_etcEltCtrw.addRow();
        		fv_position = nRow;
        		this.parent.ds_etcEltCtrw.setColumn(fv_position, "ETC_CTRW_KDC", "503");
        		this.parent.ds_etcEltCtrw.setColumn(fv_position, 	"CHG_SQNO", this.parent.ds_register.getColumn(0, "CHG_SQNO"));
        		this.parent.ds_etcEltCtrw.setColumn(fv_position, "CTRW_STY_VER", this.ds_etcEltStylAmm503.getColumn(0, "CTRW_STY_VER"));
        		this.ds_etcEltCtrw03.addRow();
        		this.ds_etcEltCtrw03.copyRow(0, this.parent.ds_etcEltCtrw, fv_position);
        	}

        	if (this.parent.ds_etcItemList.rowcount > 0) {
        		this.ds_etcItemList.addRow();
        		this.ds_etcItemList.copyData(this.parent.ds_etcItemList);
        	} else {
        		this.ds_etcItemList.addRow();
        		this.ds_etcItemList.setColumn(0, "ETC_CTRW_KDC", "503");
        		this.ds_etcItemList.setColumn(0, "CHG_SQNO", this.parent.ds_register.getColumn(0, "CHG_SQNO"));
        	}
        }

        this.OMG_DS_SC_211331_ontextchanged = function(obj,e)
        {

        }

        this.ds_etcItemList_oncolumnchanged = function(obj,e)
        {
        	this.parent.ds_etcItemList.copyData(this.ds_etcItemList);
        	this.fn_etcItemList_update();
        }

        this.btn_etcItemList_addRow_onclick = function(obj,e)
        {
        	this.ds_etcItemList.addRow();
        	var nRow = this.ds_etcItemList.rowcount -1;
        	this.ds_etcItemList.setColumn(nRow, "ETC_CTRW_KDC", "503");
        	this.ds_etcItemList.setColumn(nRow, "CHG_SQNO", this.parent.ds_register.getColumn(0 , "CHG_SQNO"));
        	this.parent.ds_etcItemList.copyData(this.ds_etcItemList);
        	this.fn_etcItemList_update();
        }

        this.btn_etcItemList_delRow_onclick = function(obj,e)
        {
        	for (var i = this.ds_etcItemList.rowcount; i > -1; i--) {
        		var nCheck = this.ds_etcItemList.getColumn(i, "ISCHECKED");

        		if (nCheck == 1) {
        			this.parent.ds_etcItemList.deleteRow(i);
        			this.ds_etcItemList.deleteRow(i);
        		}
        	}
        }

        this.ds_etcItemList_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		this.gfn_setGridCheckAll(obj, e);
        	}
        }

        this.fn_validationCheck = function()
        {
        	var strTitletext = "거래품목리스트";

         	for (var i = 0; i < this.ds_etcItemList.rowcount; i++) {
        		if (this.ds_etcItemList.getColumn(i, "ITEM_NAME") == '') {
        			alert('상품명을 입력해야 합니다.');
        			return;
        		}
        		if (this.ds_etcItemList.getColumn(i, "STANDARD") == '') {
        			alert('규격을 입력해야 합니다.');
        			return;
        		}
        		if (this.ds_etcItemList.getColumn(i, "ITEM_CODE") == '') {
        			alert('상품코드를 입력해야 합니다.');
        			return;
        		}
        		if (this.ds_etcItemList.getColumn(i, "COUNTRY") == '') {
        			alert('원산지를 입력해야 합니다.');
        			return;
        		}
        		if (this.ds_etcItemList.getColumn(i, "COMPANY") == '') {
        			alert('제조업체/즉석제조를 입력해야 합니다.');
        			return;
        		}
         	}

        	this.parent.ds_etcEltCtrw.setColumn(fv_position, "SCTR_SJT", this.txa_sctrSjt.value); //특약사항
        	return true;
        }

        this.fn_etcItemList_update = function()
        {
        	for (var i = 0; i < this.ds_etcItemList.rowcount; i++) {
        		this.parent.ds_etcItemList.set_updatecontrol(false);
        		this.parent.ds_etcItemList.setRowType(i, this.ds_etcItemList.getRowType(i));
        		this.parent.ds_etcItemList.set_updatecontrol(true);
        	}

        	if (this.ds_etcItemList == 0) {
        		for (var i = 0; i < this.parent.ds_etcItemList.rowcount; i++) {
        			this.parent.ds_etcItemList.set_updatecontrol(false);
        			this.parent.ds_etcItemList.setRowType(i, Dataset.ROWTYPE_DELETE);
        			this.parent.ds_etcItemList.set_updatecontrol(true);
        		}
        	}
        }

        this.Button15_onclick = function(obj,e)
        {
        	this.fn_validationCheck();
        }

        this.text_changed = function()
        {
        	this.parent.ds_etcEltCtrw.setColumn(fv_position, "SCTR_SJT", this.txa_sctrSjt.value); //특약사항
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
        	this.parent.ds_etcEltCtrw.setColumn(fv_position, "SCTR_SJT", this.txa_sctrSjt.value); //특약사항
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_etcItemList.addEventHandler("oncolumnchanged", this.ds_etcItemList_oncolumnchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.Static172.addEventHandler("onclick", this.Div02_Static172_onclick, this);
            this.Button15.addEventHandler("onclick", this.Button15_onclick, this);
            this.grd_etcItemList.addEventHandler("onheadclick", this.ds_etcItemList_onheadclick, this);
            this.btn_sctrwPmtnEmpeDspcBrk_add.addEventHandler("onclick", this.btn_etcItemList_addRow_onclick, this);
            this.btn_sctrwPmtnEmpeDspcBrk_del.addEventHandler("onclick", this.btn_etcItemList_delRow_onclick, this);
            this.txa_sctrSjt.addEventHandler("ontextchanged", this.txatext_changed, this);

        };

        this.loadIncludeScript("OMG_DS_SC_211352.xfdl", true);

       
    };
}
)();
