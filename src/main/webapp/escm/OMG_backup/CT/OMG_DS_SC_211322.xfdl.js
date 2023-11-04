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
                this.set_name("OMG_DS_SC_211322");
                this.set_titletext("대량거래수수료 약정서");
                this.set_scrollbars("none");
                this.set_visible("false");
                this._setFormPosition(0,0,788,246);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pmiwDtl03", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호\"/><Column id=\"PMIW_KDC\" type=\"STRING\" size=\"256\" sumtext=\"약정서종류코드\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_STY_VER\" type=\"STRING\" size=\"256\" sumtext=\"계약서양식버젼\"/><Column id=\"BUY_AM\" type=\"STRING\" size=\"256\" sumtext=\"구매금액\"/><Column id=\"EVT_TINM\" type=\"STRING\" size=\"256\" sumtext=\"행사제목\"/><Column id=\"EVT_PRD_ST_DT\" type=\"STRING\" size=\"256\" sumtext=\"행사기간 시작일자\"/><Column id=\"EVT_PRD_ED_DT\" type=\"STRING\" size=\"256\" sumtext=\"행사기간 종료일자\"/><Column id=\"CTRW_FLNM\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일 이름\"/><Column id=\"CTRW_FL_PATHNM\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일전체경로\"/><Column id=\"CTRW_FL_SZE\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일크기\"/><Column id=\"APDFLNM\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일 이름\"/><Column id=\"APDFL_PATHNM\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일전체경로\"/><Column id=\"APDFL_SZE\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일크기\"/><Column id=\"SYS_FLNM\" type=\"STRING\" size=\"256\" sumtext=\"시스템 파일이름\"/><Column id=\"CTRW_CNTN\" type=\"STRING\" size=\"256\" sumtext=\"계약서내용\"/><Column id=\"CTRW_SGNT\" type=\"STRING\" size=\"256\" sumtext=\"계약서서명\"/><Column id=\"SCTR_SJT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_lgqtTrFeePmiw", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호\"/><Column id=\"PMIW_KDC\" type=\"STRING\" size=\"256\" sumtext=\"약정서종류\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"FEERT_HMW_UNDR\" type=\"STRING\" size=\"256\" sumtext=\"수수료율 1억미만\"/><Column id=\"FEERT_HMW1_HMW2\" type=\"STRING\" size=\"256\" sumtext=\"수수료율 1/2억\"/><Column id=\"FEERT_HMW2_HMW3\" type=\"STRING\" size=\"256\" sumtext=\"수수료율 2/3억\"/><Column id=\"FEERT_HMW3_HMW5\" type=\"STRING\" size=\"256\" sumtext=\"수수료율 3/5억\"/><Column id=\"FEERT_HMW5_HMW10\" type=\"STRING\" size=\"256\" sumtext=\"수수료율 5/10억\"/><Column id=\"FEERT_HMW10_OVR\" type=\"STRING\" size=\"256\" sumtext=\"수수료율 10억이상\"/><Column id=\"FEERT_HMW_UNDR_TINM\" type=\"STRING\" size=\"256\"/><Column id=\"FEERT_HMW1_HMW2_TINM\" type=\"STRING\" size=\"256\"/><Column id=\"FEERT_HMW2_HMW3_TINM\" type=\"STRING\" size=\"256\"/><Column id=\"FEERT_HMW3_HMW5_TINM\" type=\"STRING\" size=\"256\"/><Column id=\"FEERT_HMW5_HMW10_TINM\" type=\"STRING\" size=\"256\"/><Column id=\"FEERT_HMW10_OVR_TINM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_etcEltStylAmm303", this);
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


            
            // UI Components Initialize
            obj = new Div("Div05", "absolute", "95.56%", "311", null, "30", "0%", null, this);
            obj.set_taborder("759");
            obj.set_text("%");
            obj.style.set_background("white");
            obj.style.set_border("1 none #808080ff");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div04", "absolute", "83.12%", "311", null, "30", "12.94%", null, this);
            obj.set_taborder("758");
            obj.set_text("%");
            obj.style.set_background("white");
            obj.style.set_border("1 none #808080ff");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static86", "absolute", "0", "0", "467", "21", null, null, this);
            obj.set_taborder("716");
            obj.set_text("대량거래수수료 약정서");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button10", "absolute", "710", "0", "78", "21", null, null, this);
            obj.set_taborder("717");
            obj.set_text("계약서보기");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "15", "1812", "803", "20", null, null, this);
            obj.set_taborder("725");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "15", "2695", "803", "20", null, null, this);
            obj.set_taborder("727");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "200", "52", "414", "15", null, null, this);
            obj.set_taborder("728");
            obj.set_text("27");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "13.83%", "27", null, "29", "0", null, this);
            obj.set_taborder("730");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static107", "absolute", "0", "27", null, "29", "86%", null, this);
            obj.set_taborder("733");
            obj.set_text("약정기간");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_evtPrdStDt", "absolute", "14.47%", "31", null, "21", "72.84%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static108", "absolute", "28.55%", "31", null, "21", "70.81%", null, this);
            obj.set_taborder("735");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_evtPrdEdDt", "absolute", "30.46%", "31", null, "21", "56.85%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static26", "absolute", "0", "67", null, "66", "76.27%", null, this);
            obj.set_taborder("736");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "23.6%", "67", null, "34", "0", null, this);
            obj.set_taborder("737");
            obj.set_text("구매금액");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center middle");
            this.addChild(obj.name, obj);

            obj = new Edit("mae_FeertHmwUndrTinm", "absolute", "23.6%", "100", "19.29%", "33", null, null, this);
            obj.set_taborder("2");
            obj.style.set_align("center middle");
            obj.set_enable("true");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("30");
            this.addChild(obj.name, obj);

            obj = new Edit("mae_FeertHmw3Hmw5Tinm", "absolute", "81.35%", "100", null, "33", "0", null, this);
            obj.set_taborder("5");
            obj.style.set_align("center middle");
            obj.set_enable("true");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("30");
            this.addChild(obj.name, obj);

            obj = new Edit("mae_FeertHmw5Hmw10Tinm", "absolute", "74.37%", "279", "12.82%", "32", null, null, this);
            obj.set_taborder("11");
            obj.style.set_align("center middle");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("mae_FeertHmw10OvrTinm", "absolute", "87.06%", "279", null, "32", "0", null, this);
            obj.set_taborder("12");
            obj.style.set_align("center middle");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("mae_FeertHmw2Hmw3Tinm", "absolute", "61.93%", "100", "19.67%", "33", null, null, this);
            obj.set_taborder("4");
            obj.style.set_align("center middle");
            obj.set_enable("true");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("30");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_FeertHmw5Hmw10", "absolute", "74.37%", "310", null, "32", "16.75%", null, this);
            obj.set_taborder("13");
            obj.set_mask("+999.00");
            obj.set_limitbymask("both");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_FeertHmw10Ovr", "absolute", "87.06%", "310", null, "32", "4.06%", null, this);
            obj.set_taborder("14");
            obj.set_mask("+999.00");
            obj.set_limitbymask("both");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("mae_FeertHmw1Hmw2Tinm", "absolute", "42.77%", "100", "19.42%", "33", null, null, this);
            obj.set_taborder("3");
            obj.style.set_align("center middle");
            obj.set_enable("true");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static94", "absolute", "13.83%", "161", null, "79", "0%", null, this);
            obj.set_taborder("751");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "0", "162", null, "78", "76.27%", null, this);
            obj.set_taborder("752");
            obj.set_text("특약사항");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("middle");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_sctrSjt", "absolute", "24.37%", "165", null, "72", "0.38%", null, this);
            obj.set_taborder("10");
            obj.set_wordwrap("char");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("1998");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "132", null, "31", "76.27%", null, this);
            obj.set_taborder("750");
            obj.set_text("수수료율");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_FeertHmwUndr", "absolute", "23.6%", "132", null, "31", "60.91%", null, this);
            obj.set_taborder("6");
            obj.set_mask("!999.00");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "58.25%", "132", null, "31", "37.82%", null, this);
            obj.set_taborder("755");
            obj.set_text("%");
            obj.style.set_background("white");
            obj.style.set_border("1 solid #bfbfbfff");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_FeertHmw1Hmw2", "absolute", "42.77%", "132", null, "31", "41.5%", null, this);
            obj.set_taborder("7");
            obj.set_mask("!999.00");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_FeertHmw3Hmw5", "absolute", "81.47%", "132", null, "31", "4.06%", null, this);
            obj.set_taborder("9");
            obj.set_mask("!999.00");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_FeertHmw2Hmw3", "absolute", "62.06%", "132", null, "31", "22.84%", null, this);
            obj.set_taborder("8");
            obj.set_mask("!999.00");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "39%", "132", null, "31", "57.11%", null, this);
            obj.set_taborder("754");
            obj.set_text("%");
            obj.style.set_background("white");
            obj.style.set_border("1 solid #bfbfbfff");
            obj.style.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "95.69%", "132", null, "31", "0%", null, this);
            obj.set_taborder("757");
            obj.set_text("%");
            obj.style.set_background("white");
            obj.style.set_border("1 solid #bfbfbfff");
            this.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "77%", "132", null, "31", "18.4%", null, this);
            obj.set_taborder("756");
            obj.set_text("%");
            obj.style.set_background("white");
            obj.style.set_border("1 solid #bfbfbfff");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 31, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("754");
            		p.set_text("%");
            		p.style.set_background("white");
            		p.style.set_border("1 solid #bfbfbfff");
            		p.style.set_color("black");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 788, 246, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("대량거래수수료 약정서");
            		p.set_scrollbars("none");
            		p.set_visible("false");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","cal_evtPrdStDt","value","ds_pmiwDtl03","EVT_PRD_ST_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","cal_evtPrdEdDt","value","ds_pmiwDtl03","EVT_PRD_ED_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","mae_FeertHmw1Hmw2Tinm","value","ds_lgqtTrFeePmiw","FEERT_HMW1_HMW2_TINM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","mae_FeertHmwUndrTinm","value","ds_lgqtTrFeePmiw","FEERT_HMW_UNDR_TINM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","mae_FeertHmw2Hmw3Tinm","value","ds_lgqtTrFeePmiw","FEERT_HMW2_HMW3_TINM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","mae_FeertHmw3Hmw5Tinm","value","ds_lgqtTrFeePmiw","FEERT_HMW3_HMW5_TINM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","mae_FeertHmw5Hmw10Tinm","value","ds_lgqtTrFeePmiw","FEERT_HMW5_HMW10_TINM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","mae_FeertHmw10OvrTinm","value","ds_lgqtTrFeePmiw","FEERT_HMW10_OVR_TINM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","mae_FeertHmwUndr","value","ds_lgqtTrFeePmiw","FEERT_HMW_UNDR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","mae_FeertHmw1Hmw2","value","ds_lgqtTrFeePmiw","FEERT_HMW1_HMW2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","mae_FeertHmw2Hmw3","value","ds_lgqtTrFeePmiw","FEERT_HMW2_HMW3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","mae_FeertHmw3Hmw5","value","ds_lgqtTrFeePmiw","FEERT_HMW3_HMW5");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","mae_FeertHmw5Hmw10","value","ds_lgqtTrFeePmiw","FEERT_HMW5_HMW10");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","mae_FeertHmw10Ovr","value","ds_lgqtTrFeePmiw","FEERT_HMW10_OVR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","txa_sctrSjt","value","ds_pmiwDtl03","SCTR_SJT");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_211322.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_211322.xfdl", function() {
        //include "lib::comLib.xjs";

        var fv_position = 0; //위치값
        var fv_chk = 0; //데이터 체크

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	if (this.parent.ds_lgqtTrFeePmiw.rowcount > 0) {
        		this.ds_lgqtTrFeePmiw.copyData(this.parent.ds_lgqtTrFeePmiw);
        	} else {
        		this.ds_lgqtTrFeePmiw.addRow();
        		this.ds_lgqtTrFeePmiw.setColumn(0, "PMIW_KDC", "303");
        		this.ds_lgqtTrFeePmiw.setColumn(0, "CHG_SQNO", this.parent.ds_register.getColumn(0 , "CHG_SQNO"));
        		this.ds_lgqtTrFeePmiw.setColumn(0, "FEERT_HMW_UNDR_TINM", "0.5~3억 미만");
        		this.ds_lgqtTrFeePmiw.setColumn(0, "FEERT_HMW1_HMW2_TINM", "3~5억 미만");
        		this.ds_lgqtTrFeePmiw.setColumn(0, "FEERT_HMW2_HMW3_TINM", "5~10억 미만");
        		this.ds_lgqtTrFeePmiw.setColumn(0, "FEERT_HMW3_HMW5_TINM", "10억 이상");
        		this.ds_lgqtTrFeePmiw.setColumn(0, "FEERT_HMW5_HMW10_TINM", " ");
        		this.ds_lgqtTrFeePmiw.setColumn(0, "FEERT_HMW10_OVR_TINM", " ");
        		this.ds_lgqtTrFeePmiw.setColumn(0, "FEERT_HMW_UNDR", "1");
        		this.ds_lgqtTrFeePmiw.setColumn(0, "FEERT_HMW1_HMW2", "1.5");
        		this.ds_lgqtTrFeePmiw.setColumn(0, "FEERT_HMW2_HMW3", "1.8");
        		this.ds_lgqtTrFeePmiw.setColumn(0, "FEERT_HMW3_HMW5", "2.0");
        		this.ds_lgqtTrFeePmiw.setColumn(0, "FEERT_HMW5_HMW10", " ");
        		this.ds_lgqtTrFeePmiw.setColumn(0, "FEERT_HMW10_OVR", " ");
        		this.parent.ds_lgqtTrFeePmiw.addRow();
        		this.parent.ds_lgqtTrFeePmiw.copyData(this.ds_lgqtTrFeePmiw);
        	}

        	// 폼양식
        	for (var i = 0; i < this.parent.ds_etcEltStylAmm.rowcount; i++) {
        		if (this.parent.ds_etcEltStylAmm.getColumn(i, "CTRW_KDC") == "303") {
        			this.ds_etcEltStylAmm303.copyRow(0, this.parent.ds_etcEltStylAmm, i);
        		}
        	}

        	for (var i = 0; i < this.parent.ds_pmiwDtl.rowcount; i++) {
        		if (this.parent.ds_pmiwDtl.getColumn(i, "PMIW_KDC") == "303") {
        			fv_position = i;
        			fv_chk = 1;
        			this.ds_pmiwDtl03.addRow();
        			this.ds_pmiwDtl03.copyRow(0, this.parent.ds_pmiwDtl, fv_position);
        		}
        	}

        	if (fv_chk == 0) {
        		var toDay = this.gfn_today("yyyyMMdd");
        		chkDay = this.gfn_addMonth(toDay, 1);
        		var toEndDay =  this.gfn_today("yyyy") + "1231";
        		var nRow = this.parent.ds_pmiwDtl.addRow();
        		fv_position = nRow;
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "PMIW_KDC", "303");
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "CHG_SQNO", this.parent.ds_register.getColumn(0 , "CHG_SQNO"));
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "CTRW_STY_VER", this.ds_etcEltStylAmm303.getColumn(0, "CTRW_STY_VER"));

        		this.parent.ds_pmiwDtl.setColumn(fv_position, "EVT_PRD_ST_DT", this.parent.cal_ctrStDt.value);
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "EVT_PRD_ED_DT", this.parent.cal_ctrEdDt.value);

        		this.ds_pmiwDtl03.addRow();
        		this.ds_pmiwDtl03.copyRow(0, this.parent.ds_pmiwDtl, fv_position);

        		//this.cal_evtPrdStDt.set_value(this.parent.cal_ctrStDt.value);
        		//this.cal_evtPrdStDt.set_value(this.parent.cal_ctrEdDt.value);
        	}
        }

        this.ds_lgqtTrFeePmiw_oncolumnchanged = function(obj,e)
        {
        	this.parent.ds_lgqtTrFeePmiw.copyData(this.ds_lgqtTrFeePmiw);

        	for (var i = 0; i < this.ds_lgqtTrFeePmiw.rowcount; i++) {
        		this.parent.ds_lgqtTrFeePmiw.set_updatecontrol(false);
        		this.parent.ds_lgqtTrFeePmiw.setRowType(i, this.ds_lgqtTrFeePmiw.getRowType(i));
        		this.parent.ds_lgqtTrFeePmiw.set_updatecontrol(true);
        	}
        }

        this.Cal_onchanged = function(obj,e)
        {
        	obj.updateToDataset();

        	this.parent.ds_pmiwDtl.setColumn(fv_position, "EVT_PRD_ST_DT", this.cal_evtPrdStDt.value); //약정기간 시작 일자
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "EVT_PRD_ED_DT", this.cal_evtPrdEdDt.value); //약정기간 종료 일자
        }

        this.fn_ds_pmiwDtl_update = function()
        {
        	for (var i = 0; i < this.ds_pmiwDtl03.rowcount; i++) {
        		this.parent.ds_pmiwDtl.set_updatecontrol(false);
        		this.parent.ds_pmiwDtl.setRowType(fv_position, this.ds_pmiwDtl03.getRowType(i));
        		this.parent.ds_pmiwDtl.set_updatecontrol(true);
        	}
        }

        /* Validation Check */
        this.fn_validationCheck = function()
        {
        	var strTitletext = "대량거래 수수료 약정서";

         	if (this.gfn_isNull(this.cal_evtPrdStDt.value)) {
        		this.cal_evtPrdStDt.setFocus();
         		this.alert(strTitletext + " 약정기간 시작 일자를 입력하세요.");
         		return false;
         	}

         	if (this.gfn_isNull(this.cal_evtPrdEdDt.value)) {
        		this.cal_evtPrdEdDt.setFocus();
         		this.alert(strTitletext + " 약정기간 종료 일자 를 입력하세요.");
         		return false;
         	} else {
        		var nStart = this.cal_evtPrdStDt.value;
        		var nEnd   = this.cal_evtPrdEdDt.value;

        		if (this.gfn_getDiffDay(nStart , nEnd) < 0) {
        			this.alert(strTitletext + "약정기간 종료일자를 다시 입력하세요.");
        			return false;
        		}
         	}
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "SCTR_SJT", this.txa_sctrSjt.value); //특약사항
        	return true;
        }

        this.OMG_DS_SC_211322_ontextchanged = function(obj,e)
        {
        	this.parent.ds_lgqtTrFeePmiw.setColumn(fv_position, "FEERT_HMW_UNDR_TINM", this.mae_FeertHmwUndrTinm.value); //PB계약서 제목
        	this.parent.ds_lgqtTrFeePmiw.setColumn(fv_position, "FEERT_HMW1_HMW2_TINM", this.mae_FeertHmw1Hmw2Tinm.value); //검수일
        	this.parent.ds_lgqtTrFeePmiw.setColumn(fv_position, "FEERT_HMW2_HMW3_TINM", this.mae_FeertHmw2Hmw3Tinm.value); //경과분 월
        	this.parent.ds_lgqtTrFeePmiw.setColumn(fv_position, "FEERT_HMW3_HMW5_TINM", this.mae_FeertHmw3Hmw5Tinm.value); //경과분 일

        	this.parent.ds_lgqtTrFeePmiw.setColumn(fv_position, "FEERT_HMW_UNDR", this.mae_FeertHmwUndr.value); //PB계약서 제목
        	this.parent.ds_lgqtTrFeePmiw.setColumn(fv_position, "FEERT_HMW1_HMW2", this.mae_FeertHmw1Hmw2.value); //검수일
        	this.parent.ds_lgqtTrFeePmiw.setColumn(fv_position, "FEERT_HMW2_HMW3", this.mae_FeertHmw2Hmw3.value); //경과분 월
        	this.parent.ds_lgqtTrFeePmiw.setColumn(fv_position, "FEERT_HMW3_HMW5", this.mae_FeertHmw3Hmw5.value); //경과분 일
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
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "SCTR_SJT", this.txa_sctrSjt.value); //특약사항
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_lgqtTrFeePmiw.addEventHandler("oncolumnchanged", this.ds_lgqtTrFeePmiw_oncolumnchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.cal_evtPrdStDt.addEventHandler("onchanged", this.Cal_onchanged, this);
            this.cal_evtPrdStDt.addEventHandler("ontextchanged", this.OMG_DS_SC_211321_ontextchanged, this);
            this.cal_evtPrdEdDt.addEventHandler("onchanged", this.Cal_onchanged, this);
            this.cal_evtPrdEdDt.addEventHandler("ontextchanged", this.OMG_DS_SC_211321_ontextchanged, this);
            this.mae_FeertHmwUndrTinm.addEventHandler("ontextchanged", this.OMG_DS_SC_211322_ontextchanged, this);
            this.mae_FeertHmw3Hmw5Tinm.addEventHandler("ontextchanged", this.OMG_DS_SC_211322_ontextchanged, this);
            this.mae_FeertHmw5Hmw10Tinm.addEventHandler("ontextchanged", this.OMG_DS_SC_211322_ontextchanged, this);
            this.mae_FeertHmw10OvrTinm.addEventHandler("ontextchanged", this.OMG_DS_SC_211322_ontextchanged, this);
            this.mae_FeertHmw2Hmw3Tinm.addEventHandler("ontextchanged", this.OMG_DS_SC_211322_ontextchanged, this);
            this.mae_FeertHmw5Hmw10.addEventHandler("ontextchanged", this.OMG_DS_SC_211322_ontextchanged, this);
            this.mae_FeertHmw10Ovr.addEventHandler("ontextchanged", this.OMG_DS_SC_211322_ontextchanged, this);
            this.mae_FeertHmw1Hmw2Tinm.addEventHandler("ontextchanged", this.OMG_DS_SC_211322_ontextchanged, this);
            this.txa_sctrSjt.addEventHandler("ontextchanged", this.txatext_changed, this);
            this.mae_FeertHmwUndr.addEventHandler("ontextchanged", this.OMG_DS_SC_211322_ontextchanged, this);
            this.mae_FeertHmwUndr.addEventHandler("oneditclick", this.mae_FeertHmwUndr_oneditclick, this);
            this.mae_FeertHmw1Hmw2.addEventHandler("ontextchanged", this.OMG_DS_SC_211322_ontextchanged, this);
            this.mae_FeertHmw3Hmw5.addEventHandler("ontextchanged", this.OMG_DS_SC_211322_ontextchanged, this);
            this.mae_FeertHmw2Hmw3.addEventHandler("ontextchanged", this.OMG_DS_SC_211322_ontextchanged, this);

        };

        this.loadIncludeScript("OMG_DS_SC_211322.xfdl");

       
    };
}
)();
