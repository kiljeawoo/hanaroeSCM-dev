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
                this.set_name("OMG_DS_SC_211301");
                this.set_titletext("물품구매(대행)공급계약서");
                this._setFormPosition(0,0,788,163);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_etcEltStylAmm101", this);
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

            obj = new Dataset("ds_eltCtrwDtl01", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호\"/><Column id=\"MN_CTRW_KDC\" type=\"STRING\" size=\"256\" sumtext=\"메인계약서종류코드\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_STY_VER\" type=\"STRING\" size=\"256\" sumtext=\"계약서양식버젼\"/><Column id=\"CNR_DT\" type=\"STRING\" size=\"256\" sumtext=\"검수일\"/><Column id=\"PSG_MM\" type=\"STRING\" size=\"256\" sumtext=\"경과분/월\"/><Column id=\"PSG_DD\" type=\"STRING\" size=\"256\" sumtext=\"경과분/일\"/><Column id=\"ETR_FEE\" type=\"STRING\" size=\"256\" sumtext=\"수탁수수료\"/><Column id=\"PHD_FEERT\" type=\"STRING\" size=\"256\" sumtext=\"물류수수료율\"/><Column id=\"LIG_PLTPE\" type=\"STRING\" size=\"256\" sumtext=\"주류파렛트당\"/><Column id=\"MEXP_DD\" type=\"STRING\" size=\"256\" sumtext=\"관리비일\"/><Column id=\"RT\" type=\"STRING\" size=\"256\" sumtext=\"마진율\"/><Column id=\"BLM_GRMY\" type=\"STRING\" size=\"256\" sumtext=\"하자보증금\"/><Column id=\"WRS_PRM_PY\" type=\"STRING\" size=\"256\" sumtext=\"상품대금 지금\"/><Column id=\"GRMY\" type=\"STRING\" size=\"256\" sumtext=\"보증금\"/><Column id=\"WRS_SPYAM\" type=\"STRING\" size=\"256\" sumtext=\"상품공급액\"/><Column id=\"CTR_CLO\" type=\"STRING\" size=\"256\" sumtext=\"계약해지\"/><Column id=\"SCTR_SJT\" type=\"STRING\" size=\"256\" sumtext=\"특약사항\"/><Column id=\"CTRW_FLNM\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일 이름\"/><Column id=\"CTRW_FL_PATHNM\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일전체경로\"/><Column id=\"CTRW_FL_SZE\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일크기\"/><Column id=\"APDFLNM\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일 이름\"/><Column id=\"APDFL_PATHNM\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일전체경로\"/><Column id=\"APDFL_SZE\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일크기\"/><Column id=\"SYS_FLNM\" type=\"STRING\" size=\"256\" sumtext=\"시스템 파일이름\"/><Column id=\"CTRW_TINM\" type=\"STRING\" size=\"256\" sumtext=\"제목\"/><Column id=\"CTRW_CNTN\" type=\"STRING\" size=\"256\" sumtext=\"계약서내용\"/><Column id=\"CTRW_SGNT\" type=\"STRING\" size=\"256\" sumtext=\"계약서서명\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static08", "absolute", "13.83%", "27", null, "29", "0%", null, this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "0", "27", null, "29", "86%", null, this);
            obj.set_taborder("8");
            obj.set_text("검수일로부터");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "13.83%", "55", null, "29", "0%", null, this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static59", "absolute", "30.96%", "27", null, "29", "55.08%", null, this);
            obj.set_taborder("10");
            obj.set_text("경과분");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_psgMm", "absolute", "45.3%", "31", null, "21", "44.67%", null, this);
            obj.set_taborder("1");
            obj.style.set_align("right middle");
            obj.set_maxlength("2");
            obj.set_inputtype("number");
            obj.set_lengthunit("ascii");
            this.addChild(obj.name, obj);

            obj = new Static("Static86", "absolute", "0", "2", "59.26%", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_text("물품구매(대행)공급계약서");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static75", "absolute", "0", "55", null, "29", "86%", null, this);
            obj.set_taborder("11");
            obj.set_text("수탁사업수수료");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static60", "absolute", "27.54%", "59", null, "21", "69.67%", null, this);
            obj.set_taborder("13");
            obj.set_text("%");
            this.addChild(obj.name, obj);

            obj = new Static("Static89", "absolute", "55.96%", "31", null, "21", "37%", null, this);
            obj.set_taborder("14");
            obj.set_text("월( )회");
            this.addChild(obj.name, obj);

            obj = new Static("Static91", "absolute", "27.54%", "31", null, "21", "69.67%", null, this);
            obj.set_taborder("15");
            obj.set_text("일");
            this.addChild(obj.name, obj);

            obj = new Static("Static92", "absolute", "85.41%", "31", null, "21", "11.8%", null, this);
            obj.set_taborder("16");
            obj.set_text("일");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_psgDd", "absolute", "63.58%", "31", null, "21", "30.08%", null, this);
            obj.set_taborder("2");
            obj.style.set_align("right middle");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static94", "absolute", "13.83%", "83", null, "80", "0%", null, this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "0", "83", null, "80", "86%", null, this);
            obj.set_taborder("17");
            obj.set_text("특약사항");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_sctrSjt", "absolute", "14.34%", "87", null, "72", "0.38%", null, this);
            obj.set_taborder("6");
            obj.set_wordwrap("char");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("2000");
            obj.set_imemode("none");
            this.addChild(obj.name, obj);

            obj = new Button("Button10", "absolute", null, "0", "76", "21", "15", null, this);
            obj.set_taborder("19");
            obj.set_text("계약서보기");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cnrDt", "absolute", "14.34%", "31", null, "21", "73.1%", null, this);
            obj.set_taborder("0");
            obj.style.set_align("right middle");
            obj.set_inputtype("number");
            obj.set_maxlength("2");
            obj.set_lengthunit("ascii");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "200", "0", "414", "27", null, null, this);
            obj.set_taborder("24");
            obj.set_text("27");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_psgDd00", "absolute", "70.69%", "31", null, "21", "22.97%", null, this);
            obj.set_taborder("3");
            obj.style.set_align("right middle");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("2");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_etrFee", "absolute", "14.34%", "59", null, "21", "73.1%", null, this);
            obj.set_taborder("5");
            obj.set_mask("!999.00");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_psgDd01", "absolute", "77.79%", "31", null, "21", "15.86%", null, this);
            obj.set_taborder("4");
            obj.style.set_align("right middle");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "88.45%", "31", null, "21", "-1.27%", null, this);
            obj.set_taborder("26");
            obj.set_text("(99 = 월 말일)");
            obj.style.set_color("blue");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 788, 163, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("물품구매(대행)공급계약서");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","edt_psgMm","value","ds_eltCtrwDtl01","PSG_MM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","txa_sctrSjt","value","ds_eltCtrwDtl01","SCTR_SJT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edt_cnrDt","value","ds_eltCtrwDtl01","CNR_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","mae_etrFee","value","ds_eltCtrwDtl01","ETR_FEE");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_211301.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_211301.xfdl", function() {
        //include "lib::comLib.xjs";

        var fv_position = 0; //위치값
        var fv_chk = 0; //데이터 체크

        // 1.물품구매(대형)공급계약서,101
        this.form_onload = function(obj,e)
        {
           this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	// 폼양식
        	for (var i=0; i<this.parent.ds_etcEltStylAmm.rowcount; i++) {
        		if (this.parent.ds_etcEltStylAmm.getColumn(i, "CTRW_KDC") == "101") {
        			this.ds_etcEltStylAmm101.copyRow(0, this.parent.ds_etcEltStylAmm, i);
        		}
        	}

        	this.parent.ds_eltCtrwDtl.set_enableevent(false);

        	for (var i=0; i<this.parent.ds_eltCtrwDtl.rowcount; i++) {
        		if (this.parent.ds_eltCtrwDtl.getColumn(i, "MN_CTRW_KDC") == "101") {
        			fv_chk = 1;

        			this.parent.ds_eltCtrwDtl.setColumn(i, "LIG_PLTPE", " "); //주류파렛트당
        			this.parent.ds_eltCtrwDtl.setColumn(i, "MEXP_DD", " "); //관리비일
        			this.parent.ds_eltCtrwDtl.setColumn(i, "PHD_FEERT", " "); //물류수수료율

        			this.parent.ds_eltCtrwDtl.setColumn(i, "BLM_GRMY", " "); //하자보증금
        			this.parent.ds_eltCtrwDtl.setColumn(i, "RT", " "); //마진율

        			this.parent.ds_eltCtrwDtl.setColumn(i, "WRS_PRM_PY", " "); //상품대금 지금
        			this.parent.ds_eltCtrwDtl.setColumn(i, "GRMY", " ");  //보증금
        			this.parent.ds_eltCtrwDtl.setColumn(i, "WRS_SPYAM", " "); //상품공급액
        			this.parent.ds_eltCtrwDtl.setColumn(i, "CTR_CLO", " "); //계약해지
        			this.parent.ds_eltCtrwDtl.setColumn(i, "PHD_FEERT1", " ");
        			this.parent.ds_eltCtrwDtl.setColumn(i, "PHD_FEERT2", " ");

        			this.parent.ds_eltCtrwDtl.setColumn(i, "ETC1", " ");
        			this.parent.ds_eltCtrwDtl.setColumn(i, "ETC2", " ");
        			this.parent.ds_eltCtrwDtl.setColumn(i, "ETC3", " ");

        //			this.parent.ds_eltCtrwDtl.setColumn(i, "CTRW_TINM", " ");  //계약서 제목
        // 			this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CNR_DT", "30" );
        //  		this.parent.ds_eltCtrwDtl.setColumn(fv_position, "PSG_MM", "1" );
        //  		this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETR_FEE", "2" );

        			if (this.parent.ds_eltCtrwDtl.getColumn(i, "CTRW_STY_VER") == "" ) {
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CTRW_STY_VER", this.ds_etcEltStylAmm101.getColumn(0, "CTRW_STY_VER"));
        			}
        			if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(i, "CHG_SQNO")) == "") {
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CHG_SQNO", this.parent.ds_register.getColumn(0, "CHG_SQNO"));
        			}

        			this.ds_eltCtrwDtl01.addRow();
        			this.ds_eltCtrwDtl01.copyRow(0, this.parent.ds_eltCtrwDtl, fv_position);

        			var cnr = this.gfn_nullToEmpty(this.ds_eltCtrwDtl01.getColumn(0, "CNR_DT"));
        			var th = this;
        			setTimeout(function() {
        				if (cnr == "") {
        					th.edt_cnrDt.set_value(30);
        					th.edt_psgMm.set_value(1);
        					th.edt_psgDd.set_value(99);
        					th.mae_etrFee.set_value(2.3);
        					th.parent.ds_eltCtrwDtl.setColumn(fv_position, "CNR_DT", 30); //검수일
        					th.parent.ds_eltCtrwDtl.setColumn(fv_position, "PSG_MM", 1); //경과분/월
        					th.parent.ds_eltCtrwDtl.setColumn(fv_position, "PSG_DD", 99); //경과분/일
        					th.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETR_FEE", 2.3); //수탁수수료
        				}
        			}, 500);

        			if (this.gfn_nullToEmpty(this.ds_eltCtrwDtl01.getColumn(0, "PSG_DD")) != "") {
        				var edt_psgDd = this.ds_eltCtrwDtl01.getColumn(0, "PSG_DD");

        				if (edt_psgDd =="초" || edt_psgDd =="말") {
        					this.edt_psgDd.set_value(edt_psgDd);
        					this.edt_psgDd00.set_value("");
        					this.edt_psgDd01.set_value("");
        				} else {
        					var edt_psgDd = edt_psgDd.split("|");

        					if (edt_psgDd.length == 3) {
        						this.edt_psgDd.set_value(edt_psgDd[0]);
        						this.edt_psgDd00.set_value(edt_psgDd[1]);
        						this.edt_psgDd01.set_value(edt_psgDd[2]);
        					} else if (edt_psgDd.length == 2) {
        						this.edt_psgDd.set_value(edt_psgDd[0]);
        						this.edt_psgDd00.set_value(edt_psgDd[1]);
        					} else if (edt_psgDd.length == 1) {
        						this.edt_psgDd.set_value(edt_psgDd[0]);
        					}
        				}
        			}
        		}
        	}

        	// 처음 작성할 때 초기 값 주기
        	this.parent.ds_eltCtrwDtl.set_enableevent(true);

        	if (fv_chk == 0) {
        		this.parent.ds_eltCtrwDtl.deleteAll();
          		var nRow = this.parent.ds_eltCtrwDtl.addRow();
        		fv_position = nRow;
        	//	this.parent.ds_evtAmPmiw.deleteAll();
        		this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CTRW_STY_VER", this.ds_etcEltStylAmm101.getColumn(0, "CTRW_STY_VER"));
        		this.parent.ds_eltCtrwDtl.setColumn(fv_position, "MN_CTRW_KDC", "101");
        		this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CHG_SQNO", this.parent.ds_register.getColumn(0, "CHG_SQNO"));
        		this.ds_eltCtrwDtl01.addRow();
        		this.ds_eltCtrwDtl01.copyRow(0, this.parent.ds_eltCtrwDtl, fv_position);
        	}
        }

        this.OMG_DS_SC_211301_ontextchanged = function(obj,e)
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
        	
         	/* 데이터 연계 항목 */
        	this.fn_syncInputData(obj);

        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CNR_DT", this.edt_cnrDt.value); //검수일
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "PSG_MM", this.edt_psgMm.value); //경과분/월
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETR_FEE", this.mae_etrFee.value); //수탁수수료
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "SCTR_SJT", this.txa_sctrSjt.value); //특약사항
        }

        // 데이터 항목 동기화
        this.fn_syncInputData = function(obj)
        {
        	// 부가계약서 선택 여부
        	var hasAdd1 = this.parent.ds_addEltCtrwDtl.findRow("ADD_CTRW_KDC", "201");
        	
        	if (obj.id == "edt_cnrDt") {
        		// 대급지급기일
        		if (hasAdd1 != -1) {
        			this.parent.ds_addEltCtrwDtl.setColumn(hasAdd1, "CNR_DT", obj.value);
        			this.parent.div_addCtrw01.ds_addEltCtrwDtl01.setColumn(0, "CNR_DT", obj.value);
        		}
        	} else if (obj.id == "edt_psgMm") {
        		// 경과분 월
        		if (hasAdd1 != -1) {
        			this.parent.ds_addEltCtrwDtl.setColumn(hasAdd1, "PSG_MM", obj.value);
        			this.parent.div_addCtrw01.ds_addEltCtrwDtl01.setColumn(0, "PSG_MM", obj.value);
        		}
        	} else if (obj.id == "edt_psgDd" || obj.id == "edt_psgDd00" || obj.id == "edt_psgDd01") {
        		// 업체지급기일		
        		var psgDd = this.fn_calcPsgDd();
        		this.ds_eltCtrwDtl01.setColumn(0, "PSG_DD", psgDd);
        		this.parent.ds_eltCtrwDtl.setColumn(fv_position, "PSG_DD", psgDd); //경과분/일
        		
        		if (hasAdd1 != -1) {		
        			if (obj.id == "edt_psgDd") {
        				this.parent.div_addCtrw01.edt_psgDd.set_value(obj.value);
        			} else if (obj.id == "edt_psgDd00") {
        				this.parent.div_addCtrw01.edt_psgDd00.set_value(obj.value);
        			} else if (obj.id == "edt_psgDd01") {
        				this.parent.div_addCtrw01.edt_psgDd01.set_value(obj.value);
        			}
        		
        			this.parent.ds_addEltCtrwDtl.setColumn(hasAdd1, "PSG_DD", psgDd);
        			this.parent.div_addCtrw01.ds_addEltCtrwDtl01.setColumn(0, "PSG_DD", psgDd);
        		}
        	}
        }

        this.fn_calcPsgDd = function()
        {
        	var psgDd = this.edt_psgDd.value;
        	if (!this.gfn_isNull(this.edt_psgDd00.value)) {
        		if (!this.gfn_isNull(psgDd)) {
        			psgDd += "|";
        		}
        		psgDd += this.edt_psgDd00.value
        	};
        	if (!this.gfn_isNull(this.edt_psgDd01.value)) {
        		if (!this.gfn_isNull(psgDd)) {
        			psgDd += "|";
        		}
        		psgDd += this.edt_psgDd01.value
        	};
        	return psgDd;
        }

        /* Validation Check */
        this.fn_validationCheck = function()
        {
        	var strTitletext = "물품구매(대행)공급계약서";

         	if (this.gfn_isNull(this.edt_cnrDt.value) && this.gfn_isNull(this.parent.ds_eltCtrwDtl.getColumn(fv_position, "CNR_DT"))) {
        		this.edt_cnrDt.setFocus();
         		this.alert(strTitletext + " 검수일자를 입력하세요.");
         		return false;
         	} else {
         	 	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CNR_DT", this.edt_cnrDt.value); //검수일
        	}

        	if (this.gfn_isNull(this.edt_psgMm.value) && this.gfn_isNull(this.parent.ds_eltCtrwDtl.getColumn(fv_position, "PSG_MM"))) {
        		this.edt_psgMm.setFocus();
        		this.alert(strTitletext + " 경과분 월( )회을 입력하세요.");
        		return false;
        	} else {
        		this.parent.ds_eltCtrwDtl.setColumn(fv_position, "PSG_MM", this.edt_psgMm.value);
        	}

        // 	var  IntEdtPsgMm =  nexacro.toNumber(this.edt_psgMm.value);
        //  	if (IntEdtPsgMm < 1 || IntEdtPsgMm > 10) {
        //
        // 		this.edt_psgMm.setFocus();
        // 		this.alert(strTitletext + " 경과분 월()회 을 정확하게  입력하세요.");
        // 		return false;
        // 	}
        	var psgnum=0;
        	if (!this.gfn_isNull(this.edt_psgDd.value)) {
        		psgnum +=1;
        	}
        	if (!this.gfn_isNull(this.edt_psgDd00.value)) {
        		psgnum +=1;
        	}
        	if (!this.gfn_isNull(this.edt_psgDd01.value)) {
        		psgnum +=1;
        	}
        	if (this.edt_psgMm.value=="1") {
        		if (psgnum != 1) {
        			alert(strTitletext +" 경과분 일은 1회 입력해야 합니다.");
        			return false;
        		}
        	} else if (this.edt_psgMm.value=="2") {
        		if (psgnum != 2) {
        			alert(strTitletext +" 경과분 일은 2회 입력해야 합니다.");
        			return false;
        		}
        	} else if (this.edt_psgMm.value=="3") {
        		if (psgnum != 3) {
        			alert(strTitletext +" 경과분 일은 3회 입력해야 합니다.");
        			return false;
        		}
        	} else {
        		this.edt_psgMm.setFocus();
        		alert(strTitletext +" 경과분은 최대 월 3회까지 입력 가능합니다");
        		return false;
        	}

        	if (this.gfn_isNull(this.edt_psgDd.value) && this.gfn_isNull(this.edt_psgDd00.value) && this.gfn_isNull(this.edt_psgDd01.value) && this.gfn_isNull(this.parent.ds_eltCtrwDtl.getColumn(fv_position, "PSG_DD"))) {
        		this.edt_psgDd.setFocus();
        		alert(strTitletext + " 경과분 일을 입력하세요.");
        		return false;
        	} else {
        		if (this.edt_psgDd.value == "말" ||  this.edt_psgDd00.value == "말" || this.edt_psgDd.value == "초" ||  this.edt_psgDd00.value == "초"
        			||  this.edt_psgDd01.value == "말" || this.edt_psgDd01.value == "초") {
        			this.parent.ds_eltCtrwDtl.setColumn(fv_position, "PSG_DD", this.edt_psgDd.value);
        		} else {
        			if (this.gfn_length(this.edt_psgDd.value) > 0) {
        				if (!this.gfn_isNum(this.edt_psgDd.value)) {
        					this.edt_psgDd.setFocus();
        					alert(strTitletext + " 경과분(첫번째) 일을 정확하게 입력하세요.");
        					return false;
        				}

        				/**
        				var  IntEdtPsgDd =  nexacro.toNumber(this.edt_psgDd.value);
        				if (IntEdtPsgDd < 1 || IntEdtPsgDd > 32) {

        					this.edt_psgDd.setFocus();
        					this.alert(strTitletext + " 경과분(첫번째) 일을 정확하게  입력하세요.");
        					return false;
        				}
        				**/
        			}
        			if (this.gfn_length(this.edt_psgDd00.value) > 0) {
        				if (!this.gfn_isNum(this.edt_psgDd00.value)) {
        					this.edt_psgDd00.setFocus();
        					alert(strTitletext + " 경과분(두번째) 일을 정확하게 입력하세요.");
        					return false;
        				}

        				/**
        				var  IntEdtPsgDd00 =  nexacro.toNumber(this.edt_psgDd00.value);
        				if (IntEdtPsgDd00 < 1 || IntEdtPsgDd00 > 32) {
        					this.edt_psgDd00.setFocus();
        					this.alert(strTitletext + " 경과분(두번째) 일을 정확하게  입력하세요.");
        					return false;
        				}
        				**/
        			}

        			if (this.gfn_length(this.edt_psgDd01.value) > 0) {
        				if (!this.gfn_isNum(this.edt_psgDd01.value)) {
        					this.edt_psgDd01.setFocus();
        					alert(strTitletext + " 경과분(세번째) 일을 정확하게  입력하세요.");
        					return false;
        				}

        				/**
        				var  IntEdtPsgDd00 =  nexacro.toNumber(this.edt_psgDd00.value);
        				if (IntEdtPsgDd00 < 1 || IntEdtPsgDd00 > 32) {
        					this.edt_psgDd00.setFocus();
        					this.alert(strTitletext + " 경과분(두번째) 일을 정확하게  입력하세요.");
        					return false;
        				}
        				**/
        			}
        			this.parent.ds_eltCtrwDtl.setColumn(fv_position, "PSG_DD", this.edt_psgDd.value);
        		}
        	}

        	if (this.gfn_isNull(this.mae_etrFee.value)) {
        		this.mae_etrFee.setFocus();
        		alert(strTitletext + " 수탁수수료를 입력하세요.");
        		return false;
        	}

        	var psgDd = "";

        	psgDd = this.edt_psgDd.value;

        	if (this.edt_psgDd00.value) {
        		if (psgDd !="") {
        			psgDd += "|";
        		}
        		psgDd += this.edt_psgDd00.value;
        	 }

        	if (this.edt_psgDd01.value) {
        		if (psgDd !="") {
        			psgDd += "|";
        		}
        		psgDd += this.edt_psgDd01.value;

        	}
        	this.ds_eltCtrwDtl01.setColumn(0,"PSG_DD", psgDd);
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "PSG_DD", psgDd); //경과분/일
        	
        	return true;
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.edt_psgMm.addEventHandler("ontextchanged", this.OMG_DS_SC_211301_ontextchanged, this);
            this.edt_psgMm.addEventHandler("onkillfocus", this.OMG_DS_SC_211301_ontextchanged, this);
            this.edt_psgDd.addEventHandler("ontextchanged", this.OMG_DS_SC_211301_ontextchanged, this);
            this.edt_psgDd.addEventHandler("onkillfocus", this.OMG_DS_SC_211301_ontextchanged, this);
            this.txa_sctrSjt.addEventHandler("ontextchanged", this.OMG_DS_SC_211301_ontextchanged, this);
            this.txa_sctrSjt.addEventHandler("onkillfocus", this.OMG_DS_SC_211301_ontextchanged, this);
            this.Button10.addEventHandler("onclick", this.Button10_onclick, this);
            this.edt_cnrDt.addEventHandler("ontextchanged", this.OMG_DS_SC_211301_ontextchanged, this);
            this.edt_cnrDt.addEventHandler("onkillfocus", this.OMG_DS_SC_211301_ontextchanged, this);
            this.edt_psgDd00.addEventHandler("ontextchanged", this.OMG_DS_SC_211301_ontextchanged, this);
            this.edt_psgDd00.addEventHandler("onkillfocus", this.OMG_DS_SC_211301_ontextchanged, this);
            this.mae_etrFee.addEventHandler("ontextchanged", this.OMG_DS_SC_211301_ontextchanged, this);
            this.mae_etrFee.addEventHandler("onkillfocus", this.OMG_DS_SC_211301_ontextchanged, this);
            this.edt_psgDd01.addEventHandler("ontextchanged", this.OMG_DS_SC_211301_ontextchanged, this);
            this.edt_psgDd01.addEventHandler("onkillfocus", this.OMG_DS_SC_211301_ontextchanged, this);

        };

        this.loadIncludeScript("OMG_DS_SC_211301.xfdl");

       
    };
}
)();
