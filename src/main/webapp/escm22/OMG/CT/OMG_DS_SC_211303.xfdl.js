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
                this.set_name("OMG_DS_SC_211303");
                this.set_titletext("물류센터 이용계약서(주류)");
                this._setFormPosition(0,0,788,195);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_etcEltStylAmm205", this);
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

            obj = new Dataset("ds_addEltCtrwDtl05", this);
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
            obj = new Static("Static11", "absolute", "13.83%", "83", null, "29", "0%", null, this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "115.23%", "139", null, "29", "-101.4%", null, this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "115.23%", "111", null, "29", "-101.4%", null, this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "13.83%", "55", null, "29", "0%", null, this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static94", "absolute", "13.83%", "111", null, "80", "0.13%", null, this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "13.83%", "27", null, "29", "0%", null, this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "0", "55", null, "29", "81%", null, this);
            obj.set_taborder("10");
            obj.set_text("주류파렛트 당");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static59", "absolute", "0%", "83", null, "29", "80.96%", null, this);
            obj.set_taborder("12");
            obj.set_text("주류파렛트 관리비");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static86", "absolute", "0", "2", "58.12%", "21", null, null, this);
            obj.set_taborder("5");
            obj.set_text("물류센터 이용계약서(주류)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static89", "absolute", "19.67%", "87", null, "21", "76.02%", null, this);
            obj.set_taborder("21");
            obj.set_text("익월");
            this.addChild(obj.name, obj);

            obj = new Static("Static91", "absolute", "38.71%", "59", null, "21", "48.35%", null, this);
            obj.set_taborder("20");
            obj.set_text("원 (부가세 제외)");
            this.addChild(obj.name, obj);

            obj = new Static("Static92", "absolute", "30.4%", "87", "24%", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_text("일까지 (휴일인 경우 전 영업일)");
            this.addChild(obj.name, obj);

            obj = new Button("Button10", "absolute", "698", "0", "75", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_text("계약서보기");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_ligPltpe", "absolute", "19.67%", "59", null, "21", "62%", null, this);
            obj.set_taborder("0");
            obj.set_mask("###,###,###,###");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "801", "76", "414", "27", null, null, this);
            obj.set_taborder("6");
            obj.set_text("공상자 추가시 폼 높이 250");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "0", "111", null, "80", "80.96%", null, this);
            obj.set_taborder("17");
            obj.set_text("특약사항");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_sctrSjt", "absolute", "19.67%", "115", null, "72", "0.51%", null, this);
            obj.set_taborder("2");
            obj.set_wordwrap("char");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("1998");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "27", null, "29", "81%", null, this);
            obj.set_taborder("8");
            obj.set_text("계약서 제목");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pbCtrwTinm", "absolute", "19.67%", "31", null, "21", "27.54%", null, this);
            obj.set_taborder("19");
            obj.set_value("물류센터 이용계약서(주류)");
            obj.set_maxlength("64");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "799", "111", null, "29", "-20.43%", null, this);
            obj.set_taborder("13");
            obj.set_text("공상자(P-BOX) 당");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "101.4%", "139", null, "29", "-20.43%", null, this);
            obj.set_taborder("15");
            obj.set_text("공상자(P-BOX) 관리비");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "140.1%", "115", null, "21", "-53.05%", null, this);
            obj.set_taborder("23");
            obj.set_text("원 (부가세 제외)");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_pboxprice", "absolute", "121.07%", "115", null, "21", "-39.34%", null, this);
            obj.set_taborder("3");
            obj.set_mask("###,###,###,###");
            obj.set_limitbymask("both");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "121.07%", "143", null, "21", "-25.38%", null, this);
            obj.set_taborder("24");
            obj.set_text("익월");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "131.85%", "143", "23.98%", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_text("일까지 (휴일인 경우 전 영업일)");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pboxday", "absolute", "125.38%", "143", null, "21", "-31.35%", null, this);
            obj.set_taborder("4");
            obj.set_maxlength("2");
            obj.style.set_align("right middle");
            obj.set_lengthunit("ascii");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mexpDd", "absolute", "24%", "87", null, "21", "70%", null, this);
            obj.set_taborder("1");
            obj.style.set_align("right middle");
            obj.set_maxlength("2");
            obj.set_lengthunit("ascii");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 788, 195, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("물류센터 이용계약서(주류)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","edt_mexpDd","value","ds_addEltCtrwDtl05","ETC2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","mae_ligPltpe","value","ds_addEltCtrwDtl05","ETC1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","txa_sctrSjt","value","ds_addEltCtrwDtl05","SCTR_SJT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_pbCtrwTinm","value","ds_addEltCtrwDtl05","PB_CTRW_TINM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","mae_pboxprice","value","ds_addEltCtrwDtl05","ETC3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edt_pboxday","value","ds_addEltCtrwDtl05","ETC4");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_211303.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_211303.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        var fv_position = 0; //위치값
        var fv_chk = 0; //데이터 체크

        this.form_onload = function(obj,e)
        {
           this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	for (var i = 0; i < this.parent.ds_etcEltStylAmm.rowcount; i++) {
        		if (this.parent.ds_etcEltStylAmm.getColumn(i, "CTRW_KDC") == "205") {
        			this.ds_etcEltStylAmm205.copyRow(0, this.parent.ds_etcEltStylAmm, i);
        		}
        	}

        	for (var i = 0; i < this.parent.ds_addEltCtrwDtl.rowcount; i++) {
        		if (this.parent.ds_addEltCtrwDtl.getColumn(i, "ADD_CTRW_KDC") == "205") {
        			fv_position = i;
        			fv_chk = 1;

        			this.parent.ds_addEltCtrwDtl.setColumn(i, "CNR_DT", " "); //검수일
        			this.parent.ds_addEltCtrwDtl.setColumn(i, "PSG_MM", " "); //경과분/월
        			this.parent.ds_addEltCtrwDtl.setColumn(i, "PSG_DD", " "); //경과분/일

        			if (this.parent.ds_addEltCtrwDtl.getColumn(i, "CTRW_STY_VER") == "") {
        				this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "CTRW_STY_VER", this.ds_etcEltStylAmm205.getColumn(0, "CTRW_STY_VER"));
        			}

        			this.ds_addEltCtrwDtl05.addRow();
        			this.ds_addEltCtrwDtl05.copyRow(0, this.parent.ds_addEltCtrwDtl , fv_position);
        		}
        	}

        	if (fv_chk == 0) {
        		var nRow = this.parent.ds_addEltCtrwDtl.addRow();
        		fv_position = nRow;
        		this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "ADD_CTRW_KDC", "205");
        		this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "CHG_SQNO", this.parent.ds_register.getColumn(0 , "CHG_SQNO"));
        		this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "CTRW_STY_VER", this.ds_etcEltStylAmm205.getColumn(0, "CTRW_STY_VER"));
        		this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "PB_CTRW_TINM", "물류센터 이용계약서(주류)");

        		this.ds_addEltCtrwDtl05.addRow();
        		this.ds_addEltCtrwDtl05.copyRow(0, this.parent.ds_addEltCtrwDtl , fv_position);
        		this.parent.position_chk();
        	}
        }

        this.OMG_DS_SC_211303_ontextchanged = function(obj,e)
        {
        	this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "ETC1", this.mae_ligPltpe.value); //주류파렛트당
        	this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "ETC2", this.edt_mexpDd.value); //관리비일
        // 	this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "ETC3", this.mae_pboxprice.value); //공상자(P-BOX) 당
        // 	this.parent.ds_addEltCtrwDtl.setColumn(fv_position, "ETC4", this.edt_pboxday.value); //공상자(P-BOX) 관리비일
        }

        /* Validation Check */
        this.fn_validationCheck = function()
        {
        	var strTitletext = "물품센터 이용계약서(주류)";

         	if (this.gfn_isNull(this.mae_ligPltpe.value)) {
        		this.mae_ligPltpe.setFocus();
         		this.alert(strTitletext + " 주류파렛트당 금액을 입력하세요. ");
         		return false;
         	}

        	if (this.gfn_isNull(this.edt_mexpDd.value)) {
        		this.edt_mexpDd.setFocus();
        		this.alert(strTitletext + " 관리비 일을 입력하세요.");
        		return false;
        	}
        	/*
         	if (this.gfn_isNull(this.mae_pboxprice.value)) {
        		this.mae_pboxprice.setFocus();
         		this.alert(strTitletext + " 공상자(P-BOX)당 금액을 입력하세요. ");
         		return false;
         	}

        	if (this.gfn_isNull(this.edt_pboxday.value)) {
        		this.edt_pboxday.setFocus();
        		this.alert(strTitletext + " 공상자(P-BOX) 관리비 일을 입력하세요.");
        		return false;
        	}
        	*/

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
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Static04.addEventHandler("onclick", this.Div01_Static04_onclick, this);
            this.Static59.addEventHandler("onclick", this.Div01_Static59_onclick, this);
            this.mae_ligPltpe.addEventHandler("ontextchanged", this.OMG_DS_SC_211303_ontextchanged, this);
            this.txa_sctrSjt.addEventHandler("ontextchanged", this.txatext_changed, this);
            this.Static00.addEventHandler("onclick", this.Div06_Static04_onclick, this);
            this.edt_pbCtrwTinm.addEventHandler("ontextchanged", this.OMG_DS_SC_211310_ontextchanged, this);
            this.Static02.addEventHandler("onclick", this.Div01_Static04_onclick, this);
            this.Static03.addEventHandler("onclick", this.Div01_Static59_onclick, this);
            this.mae_pboxprice.addEventHandler("ontextchanged", this.OMG_DS_SC_211303_ontextchanged, this);
            this.edt_pboxday.addEventHandler("ontextchanged", this.OMG_DS_SC_211303_ontextchanged, this);
            this.edt_mexpDd.addEventHandler("ontextchanged", this.OMG_DS_SC_211303_ontextchanged, this);

        };

        this.loadIncludeScript("OMG_DS_SC_211303.xfdl", true);

       
    };
}
)();
