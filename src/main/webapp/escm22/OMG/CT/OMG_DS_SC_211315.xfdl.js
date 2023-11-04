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
                this.set_name("OMG_DS_SC_211315");
                this.set_titletext("스마트유통시스템 이용신청서");
                this._setFormPosition(0,0,788,180);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_etcEltStylAmm113", this);
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

            obj = new Dataset("ds_eltCtrwDtl13", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호\"/><Column id=\"MN_CTRW_KDC\" type=\"STRING\" size=\"256\" sumtext=\"메인계약서종류코드\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_STY_VER\" type=\"STRING\" size=\"256\" sumtext=\"계약서양식버젼\"/><Column id=\"CNR_DT\" type=\"STRING\" size=\"256\" sumtext=\"검수일\"/><Column id=\"PSG_MM\" type=\"STRING\" size=\"256\" sumtext=\"경과분/월\"/><Column id=\"PSG_DD\" type=\"STRING\" size=\"256\" sumtext=\"경과분/일\"/><Column id=\"ETR_FEE\" type=\"STRING\" size=\"256\" sumtext=\"수탁수수료\"/><Column id=\"PHD_FEERT\" type=\"STRING\" size=\"256\" sumtext=\"물류수수료율\"/><Column id=\"LIG_PLTPE\" type=\"STRING\" size=\"256\" sumtext=\"주류파렛트당\"/><Column id=\"MEXP_DD\" type=\"STRING\" size=\"256\" sumtext=\"관리비일\"/><Column id=\"RT\" type=\"STRING\" size=\"256\" sumtext=\"마진율\"/><Column id=\"BLM_GRMY\" type=\"STRING\" size=\"256\" sumtext=\"하자보증금\"/><Column id=\"WRS_PRM_PY\" type=\"STRING\" size=\"256\" sumtext=\"상품대금 지금\"/><Column id=\"GRMY\" type=\"STRING\" size=\"256\" sumtext=\"보증금\"/><Column id=\"WRS_SPYAM\" type=\"STRING\" size=\"256\" sumtext=\"상품공급액\"/><Column id=\"CTR_CLO\" type=\"STRING\" size=\"256\" sumtext=\"계약해지\"/><Column id=\"SCTR_SJT\" type=\"STRING\" size=\"256\" sumtext=\"특약사항\"/><Column id=\"CTRW_FLNM\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일 이름\"/><Column id=\"CTRW_FL_PATHNM\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일전체경로\"/><Column id=\"CTRW_FL_SZE\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일크기\"/><Column id=\"APDFLNM\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일 이름\"/><Column id=\"APDFL_PATHNM\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일전체경로\"/><Column id=\"APDFL_SZE\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일크기\"/><Column id=\"SYS_FLNM\" type=\"STRING\" size=\"256\" sumtext=\"시스템 파일이름\"/><Column id=\"CTRW_TINM\" type=\"STRING\" size=\"256\" sumtext=\"제목\"/><Column id=\"CTRW_CNTN\" type=\"STRING\" size=\"256\" sumtext=\"계약서내용\"/><Column id=\"CTRW_SGNT\" type=\"STRING\" size=\"256\" sumtext=\"계약서서명\"/><Column id=\"BRAND_N\" type=\"STRING\" size=\"256\" sumtext=\"브랜드명\"/><Column id=\"RETURN_DATE\" type=\"STRING\" size=\"256\" sumtext=\"반품기간\"/><Column id=\"PHD_FEERT1\" type=\"STRING\" size=\"256\"/><Column id=\"PHD_FEERT2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"ETC4\" type=\"STRING\" size=\"256\"/><Column id=\"ETC5\" type=\"STRING\" size=\"256\"/><Column id=\"ETC6\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static86", "absolute", "0", "2", "467", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_text("스마트유통시스템 이용신청서");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static94", "absolute", "13.83%", "89", null, "80", "0.13%", null, this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_sctrSjt", "absolute", "14.34%", "92", null, "72", "0.38%", null, this);
            obj.set_taborder("2");
            obj.set_wordwrap("char");
            obj.set_visible("false");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("1998");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "13.83%", "33", null, "29", "0.13%", null, this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "13.83%", "61", null, "29", "0.13%", null, this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC2", "absolute", "14.34%", "65", "130", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("100");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_etc1_target", "absolute", "14.34%", "37", "477", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_etc1_target_innerdataset = new Dataset("rdo_etc1_target_innerdataset", this.rdo_etc1_target);
            rdo_etc1_target_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">농협중앙회 회원 및 준회원용</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">농협중앙회 및 계열사용</Col></Row></Rows>");
            obj.set_innerdataset(rdo_etc1_target_innerdataset);
            obj.set_taborder("25");
            obj.set_rowcount("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("-1");

            obj = new Static("Static02", "absolute", "0", "61", null, "29", "86.04%", null, this);
            obj.set_taborder("22");
            obj.set_text("환코드");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "0", "89", null, "80", "86.04%", null, this);
            obj.set_taborder("19");
            obj.set_text("특약사항");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "33", null, "29", "86.04%", null, this);
            obj.set_taborder("21");
            obj.set_text("용도");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 788, 180, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("스마트유통시스템 이용신청서");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item8","txa_sctrSjt","value","ds_eltCtrwDtl13","SCTR_SJT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","edt_ETC2","value","ds_eltCtrwDtl13","ETC2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","rdo_etc1_target","value","ds_eltCtrwDtl13","ETC18");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_211315.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_211315.xfdl", function(exports) {
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
        		if (this.parent.ds_etcEltStylAmm.getColumn(i, "CTRW_KDC") == "113") {
        			this.ds_etcEltStylAmm113.copyRow(0, this.parent.ds_etcEltStylAmm, i);
        		}
        	}

        	this.parent.ds_eltCtrwDtl.set_enableevent(false);

        	for (var i = 0; i < this.parent.ds_eltCtrwDtl.rowcount; i++) {
           		if (this.parent.ds_eltCtrwDtl.getColumn(i, "MN_CTRW_KDC") == "113") {
        			fv_position = i;
        			fv_chk = 1;

        			if (this.parent.ds_eltCtrwDtl.getColumn(i, "CTRW_STY_VER") == "") {
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CTRW_STY_VER", this.ds_etcEltStylAmm113.getColumn(0, "CTRW_STY_VER"));
        			}
        			if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(i, "CHG_SQNO")) == "") {
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CHG_SQNO", this.parent.ds_register.getColumn(0 , "CHG_SQNO"));
        			}

        			this.ds_eltCtrwDtl13.addRow();
        			this.ds_eltCtrwDtl13.copyRow(0, this.parent.ds_eltCtrwDtl, fv_position);
        		} else {
        			fv_position = i;
        		}
        	}

        	if (fv_chk == 0) {
        		this.parent.ds_eltCtrwDtl.deleteAll();
        		var nRow = this.parent.ds_eltCtrwDtl.addRow();
        		fv_position = nRow;
        		this.parent.ds_eltCtrwDtl.setColumn(fv_position, "MN_CTRW_KDC", "113");
        		this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CHG_SQNO", this.parent.ds_register.getColumn(0 , "CHG_SQNO"));
        		this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CTRW_STY_VER", this.ds_etcEltStylAmm113.getColumn(0, "CTRW_STY_VER"));

        		this.ds_eltCtrwDtl13.addRow();
        		this.ds_eltCtrwDtl13.copyRow(0, this.parent.ds_eltCtrwDtl, fv_position);
        	}
        }

        /* Validation Check */
        this.fn_validationCheck = function()
        {
        	if (this.gfn_nullToEmpty(this.rdo_etc1_target.value) == "") {
        		alert("[스마트유통시스템 이용신청서] 용도를 선택해주세요.");
        		this.rdo_etc1_target.setFocus();
        		return false;
        	}
        	if (this.gfn_nullToEmpty(this.edt_ETC2.value) == "") {
        		alert("[스마트유통시스템 이용신청서] 환코드를 입력해주세요.");
        		this.edt_ETC2.setFocus();
        		return false;
        	}
        	
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "SCTR_SJT", this.txa_sctrSjt.value); //특약사항
        	return true;
        }

        this.OMG_DS_SC_311301_ontextchanged = function(obj,e)
        {
        	if (obj.id == "txa_sctrSjt") {
        		var text = this.txa_sctrSjt.value;
        		if (!this.gfn_isNull(text)) {
        			var lc = text.indexOf("^");
        			if (lc != -1 ) {
        				alert('^는 사용하실 수 없습니다.');
        				text = nexacro.replaceAll(text,"^"," ");
        				this.txa_sctrSjt.set_value(text);
        			}
        		}
        	}
        	
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC1" , this.rdo_etc1_target.value) ; // 대상
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC2" , this.edt_ETC2.value) ; // 환코드
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "SCTR_SJT", this.txa_sctrSjt.value); //특약사항
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.txa_sctrSjt.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.txa_sctrSjt.addEventHandler("onkillfocus", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC2.addEventHandler("onkillfocus", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC2.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.rdo_etc1_target.addEventHandler("onitemchanged", this.OMG_DS_SC_311301_ontextchanged, this);

        };

        this.loadIncludeScript("OMG_DS_SC_211315.xfdl", true);

       
    };
}
)();
