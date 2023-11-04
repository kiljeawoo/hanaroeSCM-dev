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
                this.set_name("OMG_DS_SC_211314");
                this.set_titletext("선행물류센터 이용계약서");
                this._setFormPosition(0,0,788,143);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_etcEltStylAmm112", this);
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

            obj = new Dataset("ds_eltCtrwDtl12", this);
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
            obj.set_text("선행물류센터 이용계약서");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button10", "absolute", null, "0", "77", "21", "15", null, this);
            obj.set_taborder("11");
            obj.set_text("계약서보기");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "200", "0", "414", "27", null, null, this);
            obj.set_taborder("15");
            obj.set_text("27");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static94", "absolute", "13.83%", "54", null, "80", "0.13%", null, this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "0", "54", null, "80", "86.04%", null, this);
            obj.set_taborder("19");
            obj.set_text("특약사항");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_sctrSjt", "absolute", "14.34%", "57", null, "72", "0.38%", null, this);
            obj.set_taborder("2");
            obj.set_wordwrap("char");
            obj.set_visible("true");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("1998");
            this.addChild(obj.name, obj);

            obj = new Static("Static5", "absolute", "0", "26", null, "29", "86.04%", null, this);
            obj.set_taborder("24");
            obj.set_text("약정기간");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "13.83%", "26", null, "29", "0.13%", null, this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static108", "absolute", "27.41%", "30", null, "21", "70.56%", null, this);
            obj.set_taborder("22");
            obj.set_text("~");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_evtPrdEdDt", "absolute", "29.82%", "30", null, "21", "57.49%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Calendar("cal_evtPrdStDt", "absolute", "14.34%", "30", null, "21", "72.97%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 788, 143, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("선행물류센터 이용계약서");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item8","txa_sctrSjt","value","ds_eltCtrwDtl12","SCTR_SJT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","cal_evtPrdStDt","value","ds_eltCtrwDtl12","ETC1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","cal_evtPrdEdDt","value","ds_eltCtrwDtl12","ETC2");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_211314.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_211314.xfdl", function() {
        //include "lib::comLib.xjs";

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
        		if (this.parent.ds_etcEltStylAmm.getColumn(i, "CTRW_KDC") == "112") {
        			this.ds_etcEltStylAmm112.copyRow(0, this.parent.ds_etcEltStylAmm, i);
        		}
        	}

        	this.parent.ds_eltCtrwDtl.set_enableevent(false);

        	for (var i = 0; i < this.parent.ds_eltCtrwDtl.rowcount; i++) {
           		if (this.parent.ds_eltCtrwDtl.getColumn(i, "MN_CTRW_KDC") == "112") {
        			fv_position = i;
        			fv_chk = 1;

        			this.parent.ds_eltCtrwDtl.setColumn(i, "PHD_FEERT", " "); //물류수수료율
        			this.parent.ds_eltCtrwDtl.setColumn(i, "LIG_PLTPE", " "); //주류파렛트당
        			this.parent.ds_eltCtrwDtl.setColumn(i, "MEXP_DD", " "); //관리비일
        			this.parent.ds_eltCtrwDtl.setColumn(i, "ETR_FEE", " "); //관리비일

        			this.parent.ds_eltCtrwDtl.setColumn(i, "BLM_GRMY", " "); //하자보증금
        			this.parent.ds_eltCtrwDtl.setColumn(i, "RT", " "); //마진율
        			this.parent.ds_eltCtrwDtl.setColumn(i, "WRS_PRM_PY", " "); //상품대금 지금
        			this.parent.ds_eltCtrwDtl.setColumn(i, "GRMY", " "); //보증금
        			this.parent.ds_eltCtrwDtl.setColumn(i, "WRS_SPYAM", " "); //상품공급액
        			this.parent.ds_eltCtrwDtl.setColumn(i, "CTR_CLO", " "); //계약해지

        //			this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CTRW_TINM", "선행물류센터 이용계약서");

        			//초기값 주기
        			this.parent.ds_eltCtrwDtl.setColumn(i, "ETC1", this.parent.cal_ctrStDt.value);
        			this.parent.ds_eltCtrwDtl.setColumn(i, "ETC2", this.parent.cal_ctrEdDt.value);

        			if (this.parent.ds_eltCtrwDtl.getColumn(i, "CTRW_STY_VER") == "") {
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CTRW_STY_VER", this.ds_etcEltStylAmm112.getColumn(0, "CTRW_STY_VER"));
        			}
        			if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(i, "CHG_SQNO")) == "") {
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CHG_SQNO", this.parent.ds_register.getColumn(0 , "CHG_SQNO"));
        			}

        			this.ds_eltCtrwDtl12.addRow();
        			this.ds_eltCtrwDtl12.copyRow(0, this.parent.ds_eltCtrwDtl , fv_position);
        		} else {
        			fv_position = i;
        		}
        	}

        	if (fv_chk == 0) {
        		// 처음 생성할 때 여기 안옴
        		// 수정작업시에는 여기 안옴
        		this.parent.ds_eltCtrwDtl.deleteAll();
        		var nRow = this.parent.ds_eltCtrwDtl.addRow();
        		fv_position = nRow;
        		this.parent.ds_eltCtrwDtl.setColumn(fv_position, "MN_CTRW_KDC", "112");
        		this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CHG_SQNO", this.parent.ds_register.getColumn(0 , "CHG_SQNO"));
        		this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CTRW_STY_VER", this.ds_etcEltStylAmm112.getColumn(0, "CTRW_STY_VER"));
        		this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CTRW_TINM", "선행물류센터 이용계약서");
        		this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC1", this.parent.cal_ctrStDt.value);
        		this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC2", this.parent.cal_ctrEdDt.value);

        		this.ds_eltCtrwDtl12.addRow();
        		this.ds_eltCtrwDtl12.copyRow(0, this.parent.ds_eltCtrwDtl, fv_position);
        	}
        }

        this.OMG_DS_SC_211314_ontextchanged = function(obj,e)
        {
        	var text = this.txa_sctrSjt.value;
        	var lc = text.indexOf("^");
        	if (lc != -1) {
        		alert('^는 사용하실 수 없습니다.');
        		text = nexacro.replaceAll(text, "^", " ");
        		this.txa_sctrSjt.set_value(text);
        	}
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CTRW_TINM", this.edt_pbCtrwTinm.value); //PB계약서 제목
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CNR_DT", this.edt_cnrDt.value); //검수일
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "PSG_MM", this.edt_psgMm.value); //경과분 월
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "SCTR_SJT", this.txa_sctrSjt.value); //특약사항
        }

        
        /* Validation Check */
        this.fn_validationCheck = function()
        {
        	var strTitletext = "선행물류센터 이용계약서";

        	if (this.gfn_isNull(this.cal_evtPrdStDt.value)) {
        		this.cal_evtPrdStDt.setFocus();
         		this.alert(strTitletext + " 약정기간 시작 일자를 입력하세요. ");
         		return false;
         	}

         	if (this.gfn_isNull(this.cal_evtPrdEdDt.value)) {
        		this.cal_evtPrdEdDt.setFocus();
         		this.alert(strTitletext + " 약정기간 종료 일자 를 입력하세요. ");
         		return false;
         	} else {
        		var nStart = this.cal_evtPrdStDt.value;
        		var nEnd   = this.cal_evtPrdEdDt.value;

        		if (this.gfn_getDiffDay(nStart , nEnd) < 0) {
        			this.alert(strTitletext + "약정기간 종료 일자를 다시 입력하세요. ");
        			return false;
        		}
         	}

        //	this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "SCTR_SJT", this.txa_sctrSjt.value); //특약사항
        	return true;
        }

        this.Cal_onchanged = function(obj,e)
        {
        	obj.updateToDataset();

        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC1", this.cal_evtPrdStDt.value); //행사기간 시작 일자
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC2", this.cal_evtPrdEdDt.value); //행사기간 종료 일자
        }

        this.Button10_onclick = function(obj,e)
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
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "SCTR_SJT", this.txa_sctrSjt.value); //특약사항
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Button10.addEventHandler("onclick", this.Button10_onclick, this);
            this.txa_sctrSjt.addEventHandler("ontextchanged", this.txatext_changed, this);
            this.cal_evtPrdEdDt.addEventHandler("onchanged", this.Cal_onchanged, this);
            this.cal_evtPrdStDt.addEventHandler("onchanged", this.Cal_onchanged, this);

        };

        this.loadIncludeScript("OMG_DS_SC_211314.xfdl");

       
    };
}
)();
