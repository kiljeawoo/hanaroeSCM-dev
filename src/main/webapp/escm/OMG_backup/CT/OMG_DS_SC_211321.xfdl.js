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
                this.set_name("OMG_DS_SC_211321");
                this.set_titletext("○○○행사 약정서");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,788,593);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pmiwDtl02", this);
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

            obj = new Dataset("ds_evtAmPmiw", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호\"/><Column id=\"PMIW_KDC\" type=\"STRING\" size=\"256\" sumtext=\"약정서종류\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_NM\" type=\"STRING\" size=\"256\" sumtext=\"행사명칭\"/><Column id=\"EVT_CNTN\" type=\"STRING\" size=\"256\" sumtext=\"행사내용\"/><Column id=\"EVT_PLCNM\" type=\"STRING\" size=\"256\" sumtext=\"행사장소\"/><Column id=\"EVT_WRS_NM\" type=\"STRING\" size=\"256\" sumtext=\"행사상품명\"/><Column id=\"EVT_RTO_CNTN\" type=\"STRING\" size=\"256\" sumtext=\"행사행사상품및행사율내용\"/><Column id=\"CTR_PATN_AM\" type=\"STRING\" size=\"256\" sumtext=\"계약상대자금액\"/><Column id=\"CTR_CHRR_AM\" type=\"STRING\" size=\"256\" sumtext=\"계약담당자금액\"/><Column id=\"AM_SS\" type=\"STRING\" size=\"256\" sumtext=\"금액계\"/><Column id=\"CTR_PATN_RTO\" type=\"STRING\" size=\"256\" sumtext=\"계약상대자비율\"/><Column id=\"CTR_CHRR_RTO\" type=\"STRING\" size=\"256\" sumtext=\"계약담당자비율\"/><Column id=\"RTO_SS\" type=\"STRING\" size=\"256\" sumtext=\"비율계\"/><Column id=\"CTR_PATN_ALOT_RTO\" type=\"STRING\" size=\"256\" sumtext=\"계약상대자비율\"/><Column id=\"ALL_XPC_PMTN_CST\" type=\"STRING\" size=\"256\" sumtext=\"전체 예상판촉비용\"/><Column id=\"CLCN_BASS\" type=\"STRING\" size=\"256\" sumtext=\"산출근거\"/><Column id=\"CTR_CHRR_ALOT_RTO\" type=\"STRING\" size=\"256\" sumtext=\"계약담당자비율\"/><Column id=\"ALOT_RTO_SS\" type=\"STRING\" size=\"256\" sumtext=\"비율(액수)계\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_etcEltStylAmm302", this);
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


            
            // UI Components Initialize
            obj = new Static("Static103", "absolute", "0", "0", "467", "21", null, null, this);
            obj.set_taborder("27");
            obj.set_text("○○○행사 약정서");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button07", "absolute", "711", "0", "77", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_text("체크");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static106", "absolute", "13.83%", "27", null, "29", "0", null, this);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static105", "absolute", "0", "27", null, "29", "86%", null, this);
            obj.set_taborder("29");
            obj.set_text("행사제목");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static107", "absolute", "49.87%", "27", null, "29", "38.07%", null, this);
            obj.set_taborder("31");
            obj.set_text("행사기간");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_evtTinm", "absolute", "14.34%", "31", null, "21", "52.41%", null, this);
            obj.set_taborder("0");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static108", "absolute", "76.27%", "31", null, "21", "23.1%", null, this);
            obj.set_taborder("32");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_evtPrdStDt", "absolute", "62.18%", "31", null, "21", "25.13%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static109", "absolute", "19.54%", "331", null, "29", "54.44%", null, this);
            obj.set_taborder("33");
            obj.set_text("계약상대자");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_evtPrdEdDt", "absolute", "78.17%", "31", null, "21", "9.14%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static111", "absolute", "71.32%", "331", null, "29", "0%", null, this);
            obj.set_taborder("35");
            obj.set_text("계");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static110", "absolute", "0", "331", null, "29", "80.33%", null, this);
            obj.set_taborder("34");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static115", "absolute", "19.54%", "359", null, "29", "54.44%", null, this);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static112", "absolute", "0", "359", null, "29", "80.33%", null, this);
            obj.set_taborder("36");
            obj.set_text("금액");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static116", "absolute", "19.54%", "387", null, "29", "54.44%", null, this);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static118", "absolute", "71.32%", "359", null, "29", "0%", null, this);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static113", "absolute", "0", "387", null, "29", "80.33%", null, this);
            obj.set_taborder("37");
            obj.set_text("비율");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static119", "absolute", "71.32%", "387", null, "29", "0%", null, this);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static122", "absolute", "0", "307", null, "21", "585", null, this);
            obj.set_taborder("45");
            obj.set_text("1. 판촉비용 부담");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_ctrPatnAm", "absolute", "20.43%", "363", null, "21", "55.71%", null, this);
            obj.set_taborder("10");
            obj.set_mask("###,###,###,###");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static94", "absolute", "13.83%", "167", null, "80", "0", null, this);
            obj.set_taborder("128");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_ctrPatnRto", "absolute", "20.43%", "391", null, "21", "55.71%", null, this);
            obj.set_taborder("12");
            obj.set_mask("!999.00");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "13.83%", "83", null, "29", "0", null, this);
            obj.set_taborder("94");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "13.83%", "111", null, "29", "0", null, this);
            obj.set_taborder("95");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "13.83%", "139", null, "29", "0", null, this);
            obj.set_taborder("96");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "200", "0", "414", "27", null, null, this);
            obj.set_taborder("92");
            obj.set_text("27");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "83", null, "29", "86%", null, this);
            obj.set_taborder("99");
            obj.set_text("행사내용");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "0", "111", null, "29", "86%", null, this);
            obj.set_taborder("100");
            obj.set_text("행사장소");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "0", "139", null, "29", "86%", null, this);
            obj.set_taborder("101");
            obj.set_text("행사 상품명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_evtCntn", "absolute", "14.34%", "87", null, "21", "0.76%", null, this);
            obj.set_taborder("4");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("250");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_evtPlcnm", "absolute", "14.34%", "115", null, "21", "0.76%", null, this);
            obj.set_taborder("5");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("250");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_evtWrsNm", "absolute", "14.34%", "143", null, "21", "0.76%", null, this);
            obj.set_taborder("6");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("250");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "45.43%", "331", null, "29", "28.55%", null, this);
            obj.set_taborder("103");
            obj.set_text("계약담당자");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "45.43%", "359", null, "29", "28.55%", null, this);
            obj.set_taborder("104");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "45.43%", "387", null, "29", "28.55%", null, this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_ctrChrrAm", "absolute", "46.32%", "363", null, "21", "29.82%", null, this);
            obj.set_taborder("11");
            obj.set_mask("###,###,###,###");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "167", null, "80", "86%", null, this);
            obj.set_taborder("102");
            obj.set_text("행사 상품 및\r\n행사율 내용                 ");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_ctrChrrRto", "absolute", "46.32%", "391", null, "21", "29.82%", null, this);
            obj.set_taborder("13");
            obj.set_mask("!999.00");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "19.54%", "451", null, "29", "54.44%", null, this);
            obj.set_taborder("110");
            obj.set_text("계약상대자");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "71.32%", "451", null, "29", "0.25%", null, this);
            obj.set_taborder("112");
            obj.set_text("계");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "0", "451", null, "29", "80.33%", null, this);
            obj.set_taborder("111");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "19.54%", "479", null, "29", "54.44%", null, this);
            obj.set_taborder("115");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "0", "479", null, "29", "80.33%", null, this);
            obj.set_taborder("113");
            obj.set_text("비율(액수)");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "71.32%", "479", null, "29", "0.25%", null, this);
            obj.set_taborder("117");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "0", "427", null, "21", "121", null, this);
            obj.set_taborder("119");
            obj.set_text("2.판촉비 분담비율(계약상대자 부담비율이 50%를 초과하면 안됨)");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_ctrPatnAlotRto", "absolute", "20.43%", "483", null, "21", "55.71%", null, this);
            obj.set_taborder("14");
            obj.set_mask("!999,999,999.99");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "45.43%", "451", null, "29", "28.55%", null, this);
            obj.set_taborder("124");
            obj.set_text("계약담당자");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "45.43%", "479", null, "29", "28.55%", null, this);
            obj.set_taborder("125");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_ctrChrrAlotRto", "absolute", "46.32%", "483", null, "21", "29.82%", null, this);
            obj.set_taborder("15");
            obj.set_mask("!999,999,999.99");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_evtRtoCntn", "absolute", "14.34%", "171", null, "72", "0.76%", null, this);
            obj.set_taborder("7");
            obj.set_wordwrap("char");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("1000");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_amSs", "absolute", "72.21%", "363", null, "21", "0.76%", null, this);
            obj.set_taborder("18");
            obj.set_mask("###,###,###,###");
            obj.set_limitbymask("both");
            obj.set_cssclass("msk_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "13.83%", "246", null, "29", "0", null, this);
            obj.set_taborder("140");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_rtoSs", "absolute", "72.21%", "391", null, "21", "0.76%", null, this);
            obj.set_taborder("19");
            obj.set_mask("+999.00");
            obj.set_limitbymask("both");
            obj.set_cssclass("msk_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "13.83%", "274", null, "29", "0", null, this);
            obj.set_taborder("141");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "13.83%", "55", null, "29", "0", null, this);
            obj.set_taborder("134");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "55", null, "29", "86%", null, this);
            obj.set_taborder("132");
            obj.set_text("행사명칭");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_evtNm", "absolute", "14.34%", "59", null, "21", "52.41%", null, this);
            obj.set_taborder("3");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("250");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_alotRtoSs", "absolute", "72.21%", "483", null, "21", "1.02%", null, this);
            obj.set_taborder("135");
            obj.set_mask("+999,999,999.99");
            obj.set_limitbymask("both");
            obj.set_cssclass("msk_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_allXpcPmtnCst", "absolute", "14.34%", "250", null, "21", "0.76%", null, this);
            obj.set_taborder("8");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("250");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_clcnBass", "absolute", "14.34%", "278", null, "21", "0.76%", null, this);
            obj.set_taborder("9");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("250");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "0", "274", null, "29", "86%", null, this);
            obj.set_taborder("138");
            obj.set_text("산출근거");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "0", "246", null, "29", "86%", null, this);
            obj.set_taborder("136");
            obj.set_text("전체예상판촉비용");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "13.83%", "507", null, "80", "0%", null, this);
            obj.set_taborder("142");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "0", "507", null, "80", "86.04%", null, this);
            obj.set_taborder("143");
            obj.set_text("특약사항");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_sctrSjt", "absolute", "14.34%", "511", null, "72", "0.63%", null, this);
            obj.set_taborder("16");
            obj.set_wordwrap("char");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("1998");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 788, 593, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("○○○행사 약정서");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edt_evtTinm","value","ds_pmiwDtl02","EVT_TINM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","cal_evtPrdStDt","value","ds_pmiwDtl02","EVT_PRD_ST_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","cal_evtPrdEdDt","value","ds_pmiwDtl02","EVT_PRD_ED_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","mae_ctrPatnAm","value","ds_evtAmPmiw","CTR_PATN_AM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","mae_ctrPatnRto","value","ds_evtAmPmiw","CTR_PATN_RTO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edt_evtCntn","value","ds_evtAmPmiw","EVT_CNTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_evtPlcnm","value","ds_evtAmPmiw","EVT_PLCNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edt_evtWrsNm","value","ds_evtAmPmiw","EVT_WRS_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","mae_ctrChrrAm","value","ds_evtAmPmiw","CTR_CHRR_AM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","mae_ctrChrrRto","value","ds_evtAmPmiw","CTR_CHRR_RTO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","mae_ctrPatnAlotRto","value","ds_evtAmPmiw","CTR_PATN_ALOT_RTO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","mae_ctrChrrAlotRto","value","ds_evtAmPmiw","CTR_CHRR_ALOT_RTO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","txa_evtRtoCntn","value","ds_evtAmPmiw","EVT_RTO_CNTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","mae_amSs","value","ds_evtAmPmiw","AM_SS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","mae_rtoSs","value","ds_evtAmPmiw","RTO_SS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","edt_evtNm","value","ds_evtAmPmiw","EVT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","mae_alotRtoSs","value","ds_evtAmPmiw","ALOT_RTO_SS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","edt_allXpcPmtnCst","value","ds_evtAmPmiw","ALL_XPC_PMTN_CST");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","edt_clcnBass","value","ds_evtAmPmiw","CLCN_BASS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","txa_sctrSjt","value","ds_pmiwDtl02","SCTR_SJT");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_211321.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_211321.xfdl", function() {
        //include"lib::comLib.xjs";

        var fv_position = 0; //위치값
        this.fv_chk = 0; //데이터 체크

        // 1.판매장력금 약정서
        // 2.ㅇㅇㅇ행사 약정서
        // 3.대량거래수수료 약정서
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	// 폼양식
        	for (var i = 0; i < this.parent.ds_etcEltStylAmm.rowcount; i++) {
        		if (this.parent.ds_etcEltStylAmm.getColumn(i, "CTRW_KDC") == "302") {
        			this.ds_etcEltStylAmm302.copyRow(0, this.parent.ds_etcEltStylAmm , i);
        		}
        	}

        	for (var i = 0; i < this.parent.ds_pmiwDtl.rowcount; i++) {
        		if (this.parent.ds_pmiwDtl.getColumn(i, "PMIW_KDC") == "302") {
        			fv_position = i;
        			this.fv_chk = 1;
        			this.ds_pmiwDtl02.addRow();
        			this.ds_pmiwDtl02.copyRow(0, this.parent.ds_pmiwDtl, fv_position);
        		}
         	}

         	if (this.parent.ds_evtAmPmiw.rowcount > 0) {
        		this.ds_evtAmPmiw.addRow();
        		this.ds_evtAmPmiw.copyData(this.parent.ds_evtAmPmiw);
        	} else {
        		this.ds_evtAmPmiw.addRow();
        		this.ds_evtAmPmiw.setColumn(0, "PMIW_KDC", "302");
        		//this.ds_evtAmPmiw.setColumn(0, "CTRW_STY_VER", this.ds_etcEltStylAmm302.getColumn(0, "CTRW_STY_VER"));
        		this.ds_evtAmPmiw.setColumn(0, "CHG_SQNO", this.parent.ds_register.getColumn(0 , "CHG_SQNO"));
        		this.parent.ds_evtAmPmiw.addRow();
        		this.parent.ds_evtAmPmiw.copyData(this.ds_evtAmPmiw);

        		if (application.gv_serverType =="LOCAL") {//개발
        			this.ds_evtAmPmiw.setColumn(0, "EVT_NM", "행사명칭");
        			this.ds_evtAmPmiw.setColumn(0, "EVT_CNTN", "행사내용");
        			this.ds_evtAmPmiw.setColumn(0, "EVT_PLCNM", "행사장소");
        			this.ds_evtAmPmiw.setColumn(0, "EVT_WRS_NM", "행사 상품명");
        			this.ds_evtAmPmiw.setColumn(0, "EVT_RTO_CNTN", "행사 상품 및 행사율");

        			this.ds_evtAmPmiw.setColumn(0, "CTR_PATN_AM", "7777");
        			this.ds_evtAmPmiw.setColumn(0, "CTR_CHRR_AM", "8888");

        			this.ds_evtAmPmiw.setColumn(0, "CTR_PATN_RTO", "5.22");
        			this.ds_evtAmPmiw.setColumn(0, "CTR_CHRR_RTO", "6.66");

        			this.ds_evtAmPmiw.setColumn(0, "CTR_PATN_ALOT_RTO", "4545455.22");
        			this.ds_evtAmPmiw.setColumn(0, "CTR_CHRR_ALOT_RTO", "8784154546.66");
        // 			this.ds_evtAmPmiw.setColumn(0, "ALL_XPC_PMTN_CST", "tset");
        // 			this.ds_evtAmPmiw.setColumn(0, "CLCN_BASS", "teset");
        			this.evtAmPmiw_ontextchanged();
        		}
        	}

        	if (this.fv_chk == 0) {
        		var toDay = this.gfn_today("yyyyMMdd");
        		chkDay = this.gfn_addMonth(toDay, 1);

        		var nRow = this.parent.ds_pmiwDtl.addRow();
        		fv_position = nRow;
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "PMIW_KDC", "302");
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "CHG_SQNO", this.parent.ds_register.getColumn(0 , "CHG_SQNO"));
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "CTRW_STY_VER", this.ds_etcEltStylAmm302.getColumn(0, "CTRW_STY_VER"));
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "EVT_PRD_ST_DT", toDay);
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "EVT_PRD_ED_DT", chkDay);
        		this.ds_pmiwDtl02.addRow();
        		this.ds_pmiwDtl02.copyRow(0, this.parent.ds_pmiwDtl , fv_position);
        	}
        }

        this.Cal_onchanged = function(obj,e)
        {
        	obj.updateToDataset();

        	this.parent.ds_pmiwDtl.setColumn(fv_position, "EVT_PRD_ST_DT", this.cal_evtPrdStDt.value); //행사기간 시작 일자
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "EVT_PRD_ED_DT", this.cal_evtPrdEdDt.value); //행사기간 종료 일자
        }

        this.OMG_DS_SC_211321_ontextchanged = function(obj,e)
        {
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "EVT_TINM", this.edt_evtTinm.value); //행사 제목
        }

        this.evtAmPmiw_ontextchanged = function(obj,e)
        {
        	var num01 = 0;
        	var num02 = 0;
        	var num03 = 0;
        	var num04 = 0;
        	var num05 = 0;
        	var num06 = 0;

        	if (this.mae_ctrPatnAm.value != undefined) {
        		num01 = nexacro.toNumber(this.mae_ctrPatnAm.value);
        	}
        	if (this.mae_ctrChrrAm.value != undefined) {
        		num02 = nexacro.toNumber(this.mae_ctrChrrAm.value);
        	}

        	this.mae_amSs.set_value(num01 + num02);

        	if (this.mae_ctrPatnRto.value != undefined) {
        		//num03 = nexacro.toNumber(this.mae_ctrPatnRto.value);
        		num03 = Number(this.mae_ctrPatnRto.value);
        	}
        	if (this.mae_ctrChrrRto.value != undefined) {
        		 //num04 = nexacro.toNumber(this.mae_ctrChrrRto.value);
        		 num04 = Number(this.mae_ctrChrrRto.value);
        	}

        	var sum = num03 + num04;

        	this.mae_rtoSs.set_value( (num03 +num04).toFixed(2));

        	if (this.mae_ctrPatnAlotRto.value != undefined) {
        		num05 = nexacro.toNumber(this.mae_ctrPatnAlotRto.value);
        	}
        	if (this.mae_ctrChrrAlotRto.value != undefined) {
        		num06 = nexacro.toNumber(this.mae_ctrChrrAlotRto.value);
            }

        	this.mae_alotRtoSs.set_value((num05 + num06).toFixed(2));

        	this.parent.ds_evtAmPmiw.setColumn(0, "EVT_NM", this.edt_evtNm.value); //행사명칭
        	this.parent.ds_evtAmPmiw.setColumn(0, "EVT_CNTN", this.edt_evtCntn.value); //행사내용
        	this.parent.ds_evtAmPmiw.setColumn(0, "EVT_PLCNM", this.edt_evtPlcnm.value); //행사장소
        	this.parent.ds_evtAmPmiw.setColumn(0, "EVT_WRS_NM", this.edt_evtWrsNm.value); //행사상품명
        	this.parent.ds_evtAmPmiw.setColumn(0, "EVT_RTO_CNTN", this.txa_evtRtoCntn.value); //행사상품 및 행사율 내용
        	this.parent.ds_evtAmPmiw.setColumn(0, "CTR_PATN_AM", this.mae_ctrPatnAm.value); //계약 상대자 금액
        	this.parent.ds_evtAmPmiw.setColumn(0, "CTR_CHRR_AM", this.mae_ctrChrrAm.value); //계약 담당자 금액
        	this.parent.ds_evtAmPmiw.setColumn(0, "AM_SS", this.mae_amSs.value); //금액 계
        	this.parent.ds_evtAmPmiw.setColumn(0, "CTR_PATN_RTO", this.mae_ctrPatnRto.value); //계약 상대자 비율
        	this.parent.ds_evtAmPmiw.setColumn(0, "CTR_CHRR_RTO", this.mae_ctrChrrRto.value); //계약 담당자 비율
        	this.parent.ds_evtAmPmiw.setColumn(0, "RTO_SS", this.mae_rtoSs.value); //비율 계
        	this.parent.ds_evtAmPmiw.setColumn(0, "CTR_PATN_ALOT_RTO", this.mae_ctrPatnAlotRto.value); //계약 상대자 비율(액수)
        	this.parent.ds_evtAmPmiw.setColumn(0, "CTR_CHRR_ALOT_RTO", this.mae_ctrChrrAlotRto.value); //계약 담당자 비율(액수)
        	this.parent.ds_evtAmPmiw.setColumn(0, "ALOT_RTO_SS", this.mae_alotRtoSs.value); //비율(액수) 계
        	this.parent.ds_evtAmPmiw.setColumn(0, "ALL_XPC_PMTN_CST", this.edt_allXpcPmtnCst.value); //계약 담당자 비율(액수)
        	this.parent.ds_evtAmPmiw.setColumn(0, "CLCN_BASS", this.edt_clcnBass.value); //비율(액수) 계

        // 	this.parent.ds_evtAmPmiw.copyData(this.ds_evtAmPmiw);
         	this.fn_ds_evtAmPmiw_update();
        }

        this.fn_ds_pmiwDtl_update = function()
        {
        	for (var i = 0; i < this.ds_pmiwDtl02.rowcount; i++) {
        		this.parent.ds_pmiwDtl.set_updatecontrol(false);
        		this.parent.ds_pmiwDtl.setRowType(fv_position, this.ds_pmiwDtl02.getRowType(i));
        		this.parent.ds_pmiwDtl.set_updatecontrol(true);
        	}
        }

        this.fn_ds_evtAmPmiw_update = function()
        {
        	for (var i = 0; i < this.ds_evtAmPmiw.rowcount; i++) {
        		this.parent.ds_evtAmPmiw.set_updatecontrol(false);
        		this.parent.ds_evtAmPmiw.setRowType(i, this.ds_evtAmPmiw.getRowType(i));
        		this.parent.ds_evtAmPmiw.set_updatecontrol(true);
        	}
        }

        /* Validation Check */
        this.fn_validationCheck = function()
        {
        	var strTitletext ="○○○행사 약정서";

        	if (this.gfn_isNull(this.edt_evtTinm.value)) {
        		this.edt_evtTinm.setFocus();
         		this.alert(strTitletext +" 행사 제목를 입력하세요.");
         		return false;
         	}

         	if (this.gfn_isNull(this.cal_evtPrdStDt.value)) {
        		this.cal_evtPrdStDt.setFocus();
         		this.alert(strTitletext +" 행사기간 시작 일자를 입력하세요.");
         		return false;
         	}

         	if (this.gfn_isNull(this.cal_evtPrdEdDt.value)) {
        		this.cal_evtPrdEdDt.setFocus();
         		this.alert(strTitletext +" 행사기간 종료 일자 를 입력하세요.");
         		return false;
         	} else {
        		var nStart = this.cal_evtPrdStDt.value;
        		var nEnd   = this.cal_evtPrdEdDt.value;

        		if (this.gfn_getDiffDay(nStart , nEnd) < 0) {
        			this.alert(strTitletext +"행사기간 종료일자를 다시 입력하세요.");
        			return false;
        		}
         	}

        	if (this.gfn_isNull(this.edt_evtNm.value)) {
        		this.edt_evtNm.setFocus();
         		this.alert(strTitletext +" 행사명칭을 입력하세요.");
         		return false;
         	}

        	if (this.gfn_isNull(this.edt_evtCntn.value)) {
        		this.edt_evtCntn.setFocus();
         		this.alert(strTitletext +" 행사내용을 입력하세요.");
         		return false;
         	}

         	if (this.gfn_isNull(this.edt_evtPlcnm.value)) {
        		this.edt_evtPlcnm.setFocus();
         		this.alert(strTitletext +" 행사 장소명을 입력하세요.");
         		return false;
         	}

         	if (this.gfn_isNull(this.edt_evtWrsNm.value)) {
        		this.edt_evtWrsNm.setFocus();
         		this.alert(strTitletext +" 행사 상품명을 입력하세요.");
         		return false;
         	}

         	 if (this.gfn_isNull(this.txa_evtRtoCntn.value)) {
        		this.txa_evtRtoCntn.setFocus();
         		this.alert(strTitletext +" 행사 상품 및 행사율 내용을 입력하세요.");
         		return false;
         	}

         	 if (this.gfn_isNull(this.edt_allXpcPmtnCst.value)) {
        		this.edt_allXpcPmtnCst.setFocus();
         		this.alert(strTitletext +"  전체 예상 판촉비용을 입력하세요.");
         		return false;
         	}

         	 if (this.gfn_isNull(this.edt_clcnBass.value)) {
        		this.edt_clcnBass.setFocus();
         		this.alert(strTitletext +" 산출 근거을 입력하세요.");
         		return false;
         	}

         	if (this.gfn_isNull(this.mae_ctrPatnAm.value)) {
        		this.mae_ctrPatnAm.setFocus();
         		this.alert(strTitletext +" 계약 상대자 금액을 입력하세요.");
         		return false;
         	}

         	if (this.gfn_isNull(this.mae_ctrChrrAm.value)) {
        		this.mae_ctrChrrAm.setFocus();
         		this.alert(strTitletext +" 계약 담당자 금액을 입력하세요.");
         		return false;
         	}

        	if (this.gfn_isNull(this.mae_ctrPatnRto.value)) {
        		this.mae_ctrPatnRto.setFocus();
         		this.alert(strTitletext +" 계약 상대자 비율을 입력하세요.");
         		return false;
         	}

         	if (this.gfn_isNull(this.mae_ctrChrrRto.value)) {
        		this.mae_ctrChrrRto.setFocus();
         		this.alert(strTitletext +" 계약 담당자 비율을 입력하세요.");
         		return false;
         	}

         	if (this.gfn_isNull(this.mae_ctrPatnAlotRto.value)) {
        		this.mae_ctrPatnAlotRto.setFocus();
         		this.alert(strTitletext +" 계약 상대자 비율(액수)을 입력하세요.");
         		return false;
         	}

         	if (this.gfn_isNull(this.mae_ctrChrrAlotRto.value)) {
        		this.mae_ctrChrrAlotRto.setFocus();
         		this.alert(strTitletext +" 계약 담당자 비율(액수)을 입력하세요.");
         		return false;
         	}

        	this.parent.ds_pmiwDtl.setColumn(fv_position, "SCTR_SJT", this.txa_sctrSjt.value); //특약사항
        	return true;
        }

        this.Button07_onclick = function(obj,e)
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
        			text = nexacro.replaceAll(text, "^", "");
        			this.txa_sctrSjt.set_value(text);
        		}
         	}
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "SCTR_SJT", this.txa_sctrSjt.value); //특약사항
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Button07.addEventHandler("onclick", this.Button07_onclick, this);
            this.edt_evtTinm.addEventHandler("ontextchanged", this.OMG_DS_SC_211321_ontextchanged, this);
            this.cal_evtPrdStDt.addEventHandler("ontextchanged", this.OMG_DS_SC_211321_ontextchanged, this);
            this.cal_evtPrdStDt.addEventHandler("onchanged", this.Cal_onchanged, this);
            this.cal_evtPrdEdDt.addEventHandler("ontextchanged", this.OMG_DS_SC_211321_ontextchanged, this);
            this.cal_evtPrdEdDt.addEventHandler("onchanged", this.Cal_onchanged, this);
            this.mae_ctrPatnAm.addEventHandler("ontextchanged", this.evtAmPmiw_ontextchanged, this);
            this.mae_ctrPatnRto.addEventHandler("ontextchanged", this.evtAmPmiw_ontextchanged, this);
            this.mae_ctrPatnRto.addEventHandler("oneditclick", this.mae_gvwNedam_oneditclick, this);
            this.edt_evtCntn.addEventHandler("ontextchanged", this.evtAmPmiw_ontextchanged, this);
            this.edt_evtPlcnm.addEventHandler("ontextchanged", this.evtAmPmiw_ontextchanged, this);
            this.edt_evtWrsNm.addEventHandler("ontextchanged", this.evtAmPmiw_ontextchanged, this);
            this.mae_ctrChrrAm.addEventHandler("ontextchanged", this.evtAmPmiw_ontextchanged, this);
            this.mae_ctrChrrRto.addEventHandler("ontextchanged", this.evtAmPmiw_ontextchanged, this);
            this.mae_ctrPatnAlotRto.addEventHandler("ontextchanged", this.evtAmPmiw_ontextchanged, this);
            this.mae_ctrChrrAlotRto.addEventHandler("ontextchanged", this.evtAmPmiw_ontextchanged, this);
            this.txa_evtRtoCntn.addEventHandler("ontextchanged", this.OMG_DS_SC_211304_ontextchanged, this);
            this.mae_amSs.addEventHandler("ontextchanged", this.evtAmPmiw_ontextchanged, this);
            this.mae_rtoSs.addEventHandler("ontextchanged", this.evtAmPmiw_ontextchanged, this);
            this.edt_evtNm.addEventHandler("ontextchanged", this.OMG_DS_SC_211321_ontextchanged, this);
            this.mae_alotRtoSs.addEventHandler("ontextchanged", this.evtAmPmiw_ontextchanged, this);
            this.edt_allXpcPmtnCst.addEventHandler("ontextchanged", this.evtAmPmiw_ontextchanged, this);
            this.edt_clcnBass.addEventHandler("ontextchanged", this.evtAmPmiw_ontextchanged, this);
            this.txa_sctrSjt.addEventHandler("ontextchanged", this.txatext_changed, this);

        };

        this.loadIncludeScript("OMG_DS_SC_211321.xfdl");

       
    };
}
)();
