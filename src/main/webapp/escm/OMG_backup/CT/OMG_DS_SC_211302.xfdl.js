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
                this.set_name("OMG_DS_SC_211302");
                this.set_titletext("물류센터 이용계약서(일반)");
                this._setFormPosition(0,0,788,228);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_etcEltStylAmm204", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CTRW_KDC\" type=\"STRING\" size=\"256\" sumtext=\"계약서양식일련번호\"/><Column id=\"CTRW_STY_VER\" type=\"STRING\" size=\"256\" sumtext=\"계약서종류코드\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_addEltCtrwDtl04", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호\"/><Column id=\"ADD_CTRW_KDC\" type=\"STRING\" size=\"256\" sumtext=\"부가계약서종류코드\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_STY_VER\" type=\"STRING\" size=\"256\" sumtext=\"계약서양식버젼\"/><Column id=\"PB_CTRW_TINM\" type=\"STRING\" size=\"256\" sumtext=\"PB계약서 제목\"/><Column id=\"CNR_DT\" type=\"STRING\" size=\"256\" sumtext=\"검수일\"/><Column id=\"PSG_MM\" type=\"STRING\" size=\"256\" sumtext=\"경과분/월\"/><Column id=\"PSG_DD\" type=\"STRING\" size=\"256\" sumtext=\"경과분/일\"/><Column id=\"CTRW_FLNM\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일 이름\"/><Column id=\"CTRW_FL_PATHNM\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일전체경로\"/><Column id=\"CTRW_FL_SZE\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일크기\"/><Column id=\"APDFLNM\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일 이름\"/><Column id=\"APDFL_PATHNM\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일전체경로\"/><Column id=\"APDFL_SZE\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일크기\"/><Column id=\"SYS_FLNM\" type=\"STRING\" size=\"256\" sumtext=\"시스템 파일이름\"/><Column id=\"CTRW_TINM\" type=\"STRING\" size=\"256\" sumtext=\"계약서제목\"/><Column id=\"CTRW_CNTN\" type=\"STRING\" size=\"256\" sumtext=\"계약서내용\"/><Column id=\"CTRW_SGNT\" type=\"STRING\" size=\"256\" sumtext=\"계약서서명\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"SCTR_SJT\" type=\"STRING\" size=\"256\" sumtext=\"특약사항\"/><Column id=\"ETC4\" type=\"STRING\" size=\"256\" sumtext=\"물류수수료율\"/><Column id=\"ETC5\" type=\"STRING\" size=\"256\"/><Column id=\"ETC6\" type=\"STRING\" size=\"256\"/><Column id=\"ETC7\" type=\"STRING\" size=\"256\" sumtext=\"주류파렛트당\"/><Column id=\"ETC8\" type=\"STRING\" size=\"256\" sumtext=\"관리비일\"/><Column id=\"ETC9\" type=\"STRING\" size=\"256\"/><Column id=\"ETCA\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static86", "absolute", "0", "2", "58.12%", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_text("물류센터 이용계약서(일반)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button10", "absolute", null, "0", "76", "21", "15", null, this);
            obj.set_taborder("0");
            obj.set_text("계약서보기");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "200", "0", "414", "27", null, null, this);
            obj.set_taborder("9");
            obj.set_text("27");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static94", "absolute", "21.07%", "138", null, "82", "0%", null, this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_sctrSjt", "absolute", "23.35%", "143", null, "72", "0.63%", null, this);
            obj.set_taborder("7");
            obj.set_wordwrap("char");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("1998");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "0", "129", null, "91", "77.66%", null, this);
            obj.set_taborder("11");
            obj.set_text("특약사항");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "13.83%", "83", null, "29", "0%", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "83", null, "29", "77.66%", null, this);
            obj.set_taborder("13");
            obj.set_text("점별 통과상품(TC)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "37.31%", "83", null, "29", "46.32%", null, this);
            obj.set_taborder("14");
            obj.set_text("보관 출고상품(DC)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "68.27%", "83", null, "29", "14.34%", null, this);
            obj.set_taborder("15");
            obj.set_text("물류 대행상품(간선)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "fixed", "65.48%", "87", "23", "21", null, null, this);
            obj.set_taborder("17");
            obj.set_text("%");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "fixed", "97.59%", "87", "23", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_text("%");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_phdFeert00", "absolute", "23.35%", "87", null, "21", "66.24%", null, this);
            obj.set_taborder("2");
            obj.set_mask("!990.00");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_phdFeert01", "absolute", "54.44%", "87", null, "21", "35.15%", null, this);
            obj.set_taborder("3");
            obj.set_mask("!990.00");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_phdFeert02", "absolute", "86.42%", "87", null, "21", "3.17%", null, this);
            obj.set_taborder("4");
            obj.set_mask("!990.00");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "13.96%", "27", null, "29", "0%", null, this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pbCtrwTinm", "absolute", "22.72%", "31", null, "21", "24.37%", null, this);
            obj.set_taborder("1");
            obj.set_value("물류센터 이용계약서(일반)");
            obj.set_maxlength("64");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "0", "27", null, "29", "77.66%", null, this);
            obj.set_taborder("19");
            obj.set_text("계약서 제목");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "15.36%", "111", null, "29", "0%", null, this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0", "111", null, "29", "77.66%", null, this);
            obj.set_taborder("22");
            obj.set_text("2. 저온물류상품(냉장, 냉동)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "13.96%", "55", null, "29", "0%", null, this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "55", null, "29", "77.66%", null, this);
            obj.set_taborder("21");
            obj.set_text("1. 상온물류상품");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_COLD_PHD", "absolute", "23.35%", "115", null, "21", "66.24%", null, this);
            obj.set_taborder("5");
            obj.set_mask("!990.00");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "fixed", "34.52%", "115", "23", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_text("%");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "fixed", "34.52%", "88", "23", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_text("%");
            this.addChild(obj.name, obj);

            obj = new CheckBox("phd_Chk", "absolute", "39.47%", "117", null, "18", "57.11%", null, this);
            obj.set_taborder("6");
            obj.set_truevalue("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "43.4%", "116", null, "19", "43.02%", null, this);
            obj.set_taborder("26");
            obj.set_text("해당없음");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 788, 228, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("물류센터 이용계약서(일반)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item4","txa_sctrSjt","value","ds_addEltCtrwDtl04","SCTR_SJT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","mae_phdFeert00","value","ds_addEltCtrwDtl04","ETC1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","mae_phdFeert01","value","ds_addEltCtrwDtl04","ETC2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","mae_phdFeert02","value","ds_addEltCtrwDtl04","ETC3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edt_pbCtrwTinm","value","ds_addEltCtrwDtl04","PB_CTRW_TINM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","mae_COLD_PHD","value","ds_addEltCtrwDtl04","ETC4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","phd_Chk","value","ds_addEltCtrwDtl04","ETC5");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_211302.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_211302.xfdl", function() {
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
        		if (this.parent.ds_etcEltStylAmm.getColumn(i, "CTRW_KDC") == "204") {
        			this.ds_etcEltStylAmm204.copyRow(0, this.parent.ds_etcEltStylAmm, i);
        		}
        	}

        	for (var i = 0; i < this.parent.ds_addEltCtrwDtl.rowcount; i++) {
        		if (this.parent.ds_addEltCtrwDtl.getColumn(i, "ADD_CTRW_KDC") == "204") {
        			fv_position = i;
        			fv_chk = 1;
        			this.parent.ds_addEltCtrwDtl.setColumn(i, "CNR_DT", " "); //검수일
        			this.parent.ds_addEltCtrwDtl.setColumn(i, "PSG_MM", " "); //경과분/월
        			this.parent.ds_addEltCtrwDtl.setColumn(i, "PSG_DD", " "); //경과분/일

        			if (this.parent.ds_addEltCtrwDtl.getColumn(i, "CTRW_STY_VER") == "") {
        				this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "CTRW_STY_VER", this.ds_etcEltStylAmm204.getColumn(0, "CTRW_STY_VER"));
        			}

        			this.ds_addEltCtrwDtl04.addRow();
        			this.ds_addEltCtrwDtl04.copyRow(0, this.parent.ds_addEltCtrwDtl, fv_position);
        		}
        	}

        	if (fv_chk == 0) {
         		var nRow = this.parent.ds_addEltCtrwDtl.addRow();
        		fv_position = nRow;

        		this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "ADD_CTRW_KDC", "204");
        		this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "CHG_SQNO", this.parent.ds_register.getColumn(0, "CHG_SQNO"));
        		this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "CTRW_STY_VER", this.ds_etcEltStylAmm204.getColumn(0, "CTRW_STY_VER"));
        		this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "PB_CTRW_TINM", "물류센터 이용계약서(일반)");

        		this.ds_addEltCtrwDtl04.addRow();
        		this.ds_addEltCtrwDtl04.copyRow(0, this.parent.ds_addEltCtrwDtl, fv_position);

        		this.parent.position_chk();
        	}
        }

        this.OMG_DS_SC_211302_ontextchanged = function(obj,e)
        {
        	this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "ETC1", this.mae_phdFeert00.value); //물류수수료율
        	this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "ETC2", this.mae_phdFeert01.value);
        	this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "ETC3", this.mae_phdFeert02.value);
        	this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "ETC4", this.mae_COLD_PHD.value); //저온상품
        	this.phd_Chk_onchanged();
        }

        /* Validation Check */
        this.fn_validationCheck = function()
        {
        	var strTitletext = "물품센터 이용계약서(일반)";

         	if (this.gfn_isNull(this.mae_phdFeert00.value) && this.gfn_isNull(this.parent.ds_addEltCtrwDtl.getColumn(fv_position, "ETC1"))) {
        		this.mae_phdFeert00.setFocus();
         		this.alert(strTitletext + " 점별 통과상품율을 입력하세요.");
         		return false;
         	}
         	if (this.gfn_isNull(this.mae_phdFeert01.value) && this.gfn_isNull(this.parent.ds_addEltCtrwDtl.getColumn(fv_position, "ETC2"))) {
        		this.mae_phdFeert01.setFocus();
         		this.alert(strTitletext + " 보관 풀고상품율을 입력하세요.");
         		return false;
         	}
         	if (this.gfn_isNull(this.mae_phdFeert02.value) && this.gfn_isNull(this.parent.ds_addEltCtrwDtl.getColumn(fv_position, "ETC3"))) {
        		this.mae_phdFeert02.setFocus();
         		this.alert(strTitletext + " 물류 대행상품율을 입력하세요.");
         		return false;
         	}
         	if (this.phd_Chk.value == false) {
        		if (this.gfn_isNull(this.mae_COLD_PHD.value) && this.gfn_isNull(this.parent.ds_addEltCtrwDtl.getColumn(fv_position, "ETC4"))) {
        		this.mae_COLD_PHD.setFocus();
        		alert(strTitletext + " 저온 물류 상품의 값을 입력해 주시기 바랍니다.");
        		return false;
        		}
        	}

        	this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "ETC6", this.parent.cal_ctrStDt.value); //계약일자
        	this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "SCTR_SJT", this.txa_sctrSjt.value); //특약사항
        	return true;
        }

        this.txatext_changed = function(obj,e)
        {
        	var text = this.txa_sctrSjt.value;
        	var lc = text.indexOf("^");
        	if (lc != -1) {
        		alert('^는 사용하실 수 없습니다.');
        		text = nexacro.replaceAll(text, "^", " ");
        		this.txa_sctrSjt.set_value(text);
        	}
        	this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "SCTR_SJT", this.txa_sctrSjt.value); //특약사항
        }

        this.phd_Chk_onchanged = function(obj,e)
        {
        	if (this.phd_Chk.value == "1") {
        		this.mae_COLD_PHD.value = "";
        		this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "ETC4", ""); //저온상품
        		this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "ETC5", this.phd_Chk.value); //저온상품
        		this.mae_COLD_PHD.set_enable(false);
        	} else {
        		this.mae_COLD_PHD.set_enable(true);
        		this.phd_Chk.value = "0";
        		this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "ETC5", this.phd_Chk.value); //저온상품
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Button10.addEventHandler("onclick", this.Button10_onclick, this);
            this.txa_sctrSjt.addEventHandler("ontextchanged", this.txatext_changed, this);
            this.Static01.addEventHandler("onclick", this.Div06_Static04_onclick, this);
            this.Static09.addEventHandler("onclick", this.Div06_Static04_onclick, this);
            this.Static10.addEventHandler("onclick", this.Div06_Static04_onclick, this);
            this.mae_phdFeert00.addEventHandler("ontextchanged", this.OMG_DS_SC_211302_ontextchanged, this);
            this.mae_phdFeert00.addEventHandler("oneditclick", this.mae_phdFeert00_oneditclick, this);
            this.mae_phdFeert01.addEventHandler("ontextchanged", this.OMG_DS_SC_211302_ontextchanged, this);
            this.mae_phdFeert02.addEventHandler("ontextchanged", this.OMG_DS_SC_211302_ontextchanged, this);
            this.edt_pbCtrwTinm.addEventHandler("ontextchanged", this.OMG_DS_SC_211310_ontextchanged, this);
            this.Static04.addEventHandler("onclick", this.Div06_Static04_onclick, this);
            this.Static02.addEventHandler("onclick", this.Div06_Static04_onclick, this);
            this.mae_COLD_PHD.addEventHandler("ontextchanged", this.OMG_DS_SC_211302_ontextchanged, this);
            this.phd_Chk.addEventHandler("onchanged", this.phd_Chk_onchanged, this);

        };

        this.loadIncludeScript("OMG_DS_SC_211302.xfdl");

       
    };
}
)();
