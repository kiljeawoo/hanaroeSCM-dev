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
                this.set_name("OMG_DS_SC_211341");
                this.set_titletext("품질보증 협정서");
                this._setFormPosition(0,0,788,116);
            }
            this.style.set_background("#ffffffff");

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_etcEltStylAmm502", this);
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

            obj = new Dataset("ds_etcEltCtrw02", this);
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
            obj = new Static("Static12", "absolute", "200", "0", "414", "27", null, null, this);
            obj.set_taborder("0");
            obj.set_text("27");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("Button06", "absolute", "711", "0", "77", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_text("계약서보기");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static70", "absolute", "0", "2", "467", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_text("품질보증 협정서");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static94", "absolute", "13.83%", "27", null, "80", "0%", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "0", "27", null, "80", "86.04%", null, this);
            obj.set_taborder("5");
            obj.set_text("특약사항");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_sctrSjt", "absolute", "14.34%", "31", null, "72", "0.38%", null, this);
            obj.set_taborder("6");
            obj.set_wordwrap("char");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("1998");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 788, 116, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("품질보증 협정서");
            		p.style.set_background("#ffffffff");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item4","txa_sctrSjt","value","ds_etcEltCtrw02","SCTR_SJT");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_211341.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_211341.xfdl", function(exports) {
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
        		if (this.parent.ds_etcEltStylAmm.getColumn(i, "CTRW_KDC") == "502") {
        			this.ds_etcEltStylAmm502.copyRow(0, this.parent.ds_etcEltStylAmm, i);
        		}
        	}

        	for (var i = 0; i < this.parent.ds_etcEltCtrw.rowcount; i++) {
        		if (this.parent.ds_etcEltCtrw.getColumn(i, "ETC_CTRW_KDC") == "502") {
        			fv_position = i;
        			fv_chk = 1;
        			this.ds_etcEltCtrw02.addRow();
        			this.ds_etcEltCtrw02.copyRow(0, this.parent.ds_etcEltCtrw, fv_position);
        		}
        	}

        	if (fv_chk == 0) {
        		var nRow = this.parent.ds_etcEltCtrw.addRow();
        		fv_position = nRow;
        		this.parent.ds_etcEltCtrw.setColumn(fv_position, "ETC_CTRW_KDC", "502");
        		this.parent.ds_etcEltCtrw.setColumn(fv_position, "CHG_SQNO", this.parent.ds_register.getColumn(0 , "CHG_SQNO"));
        		this.parent.ds_etcEltCtrw.setColumn(fv_position, "CTRW_STY_VER", this.ds_etcEltStylAmm502.getColumn(0, "CTRW_STY_VER"));
        		this.ds_etcEltCtrw02.addRow();
        		this.ds_etcEltCtrw02.copyRow(0, this.parent.ds_etcEltCtrw , fv_position);
        	}
        }

        this.OMG_DS_SC_211310_ontextchanged = function(obj,e)
        {
        	this.parent.mae_bzNoF.set_value(this.edi01.value);

        	obj.updateToDataset();
        	this.parent.ds_addEltCtrwDtl.copyData(this.ds_addEltCtrwDtl01);

        	//this.div_addCtrw01.ds_addEltCtrwDtl01.copyData(this.ds_addEltCtrwDtl);
        	//this.div_addCtrw01.ds_addEltCtrwDtl01.copyData(this.ds_addEltCtrwDtl);
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
            this.txa_sctrSjt.addEventHandler("ontextchanged", this.txatext_changed, this);

        };

        this.loadIncludeScript("OMG_DS_SC_211341.xfdl", true);

       
    };
}
)();
