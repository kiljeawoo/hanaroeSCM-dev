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
                this.set_name("OMG_DS_SC_211320");
                this.set_titletext("판매장려금 약정서");
                this.set_scrollbars("none");
                this._setFormPosition(0,0,788,330);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pmiwDtl01", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호\"/><Column id=\"PMIW_KDC\" type=\"STRING\" size=\"256\" sumtext=\"약정서종류코드\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_STY_VER\" type=\"STRING\" size=\"256\" sumtext=\"계약서양식버젼\"/><Column id=\"BUY_AM\" type=\"STRING\" size=\"256\" sumtext=\"구매금액\"/><Column id=\"EVT_TINM\" type=\"STRING\" size=\"256\" sumtext=\"행사제목\"/><Column id=\"EVT_PRD_ST_DT\" type=\"STRING\" size=\"256\" sumtext=\"행사기간 시작일자\"/><Column id=\"EVT_PRD_ED_DT\" type=\"STRING\" size=\"256\" sumtext=\"행사기간 종료일자\"/><Column id=\"CTRW_FLNM\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일 이름\"/><Column id=\"CTRW_FL_PATHNM\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일전체경로\"/><Column id=\"CTRW_FL_SZE\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일크기\"/><Column id=\"APDFLNM\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일 이름\"/><Column id=\"APDFL_PATHNM\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일전체경로\"/><Column id=\"APDFL_SZE\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일크기\"/><Column id=\"SYS_FLNM\" type=\"STRING\" size=\"256\" sumtext=\"시스템 파일이름\"/><Column id=\"CTRW_CNTN\" type=\"STRING\" size=\"256\" sumtext=\"계약서내용\"/><Column id=\"CTRW_SGNT\" type=\"STRING\" size=\"256\" sumtext=\"계약서서명\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETC4\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETC5\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETC6\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETC7\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETC8\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETC9\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETCA\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETCB\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETCC\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETCD\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETCE\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETCF\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETCG\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"ETCH\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"SCTR_SJT\" type=\"STRING\" size=\"256\"/><Column id=\"ETCI\" type=\"STRING\" size=\"256\"/><Column id=\"ETCJ\" type=\"STRING\" size=\"256\"/><Column id=\"ETCK\" type=\"STRING\" size=\"256\"/><Column id=\"ETCL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_etcEltStylAmm301", this);
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
            obj = new Static("Static09", "absolute", "13.83%", "55", null, "29", "0%", null, this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "13.83%", "194", null, "29", "0%", null, this);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "13.83%", "222", null, "29", "0%", null, this);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "13.83%", "27", null, "29", "0%", null, this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static86", "absolute", "0", "0", "467", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_text("판매장려금 약정서");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button10", "absolute", null, "0", "78", "21", "15", null, this);
            obj.set_taborder("18");
            obj.set_text("계약서보기");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "200", "0", "414", "27", null, null, this);
            obj.set_taborder("17");
            obj.set_text("27");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static107", "absolute", "0", "27", null, "29", "83.25%", null, this);
            obj.set_taborder("19");
            obj.set_text("약정기간");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_evtPrdStDt", "absolute", "17.39%", "31", null, "21", "69.92%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static108", "absolute", "31.47%", "31", null, "21", "66.5%", null, this);
            obj.set_taborder("61");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_evtPrdEdDt", "absolute", "34.39%", "31", null, "21", "52.92%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static01", "absolute", "116.24%", "55", null, "117", "-102.41%", null, this);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("v1", "absolute", "136.8%", "66", "90", "21", null, null, this);
            obj.set_taborder("40");
            obj.set_value("0~3");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "148.73%", "65", null, "21", "-50.51%", null, this);
            obj.set_taborder("62");
            obj.set_text("%");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("v2", "absolute", "136.8%", "91", "90", "21", null, null, this);
            obj.set_taborder("42");
            obj.set_value("3~6");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "148.73%", "90", null, "21", "-50.51%", null, this);
            obj.set_taborder("63");
            obj.set_text("%");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("v3", "absolute", "136.8%", "116", "90", "21", null, null, this);
            obj.set_taborder("44");
            obj.set_value("6~10");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "148.73%", "115", null, "21", "-50.51%", null, this);
            obj.set_taborder("64");
            obj.set_text("%");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("v4", "absolute", "136.8%", "141", "90", "21", null, null, this);
            obj.set_taborder("46");
            obj.set_value("10");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00", "absolute", "119.8%", "67", null, "94", "-36.04%", null, this);
            obj.set_taborder("35");
            obj.set_value("분기당 전년대비\r\n구매금액 신장률");
            obj.style.set_align("center middle");
            obj.set_enable("true");
            obj.set_enableevent("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01", "absolute", "154.31%", "66", null, "95", "-70.56%", null, this);
            obj.set_taborder("37");
            obj.set_value("분기별 구매금액\r\n수취율");
            obj.style.set_align("center middle");
            obj.set_enableevent("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("v5", "absolute", "171.32%", "65", "90", "21", null, null, this);
            obj.set_taborder("41");
            obj.set_value("0.7");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("v6", "absolute", "171.32%", "90", "90", "21", null, null, this);
            obj.set_taborder("43");
            obj.set_value("1.3");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("v7", "absolute", "171.32%", "115", "90", "21", null, null, this);
            obj.set_taborder("45");
            obj.set_value("1.7");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("v8", "absolute", "171.32%", "140", "90", "21", null, null, this);
            obj.set_taborder("47");
            obj.set_value("2.0");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "183.25%", "114", null, "21", "-85.03%", null, this);
            obj.set_taborder("68");
            obj.set_text("%");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "183.25%", "89", null, "21", "-85.03%", null, this);
            obj.set_taborder("67");
            obj.set_text("%");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "183.25%", "64", null, "21", "-85.03%", null, this);
            obj.set_taborder("66");
            obj.set_text("%");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "46.32%", "334", null, "29", "35.53%", null, this);
            obj.set_taborder("33");
            obj.set_text("신상품 구매금액율");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center");
            obj.set_enable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("v17", "absolute", "65.61%", "338", "90", "21", null, null, this);
            obj.set_taborder("39");
            obj.set_enable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static94", "absolute", "13.83%", "250", null, "80", "0%", null, this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_sctrSjt", "absolute", "17.39%", "254", null, "72", "0.38%", null, this);
            obj.set_taborder("15");
            obj.set_wordwrap("char");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("2000");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "807", "55", null, "118", "-19.16%", null, this);
            obj.set_taborder("34");
            obj.set_text("성과장려금\r\n결정기준");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_align("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "148.73%", "140", null, "21", "-50.51%", null, this);
            obj.set_taborder("65");
            obj.set_text("%");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "0%", "55", null, "29", "83.25%", null, this);
            obj.set_taborder("714");
            obj.set_text("신상품 입점 장려금율");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "34.01%", "60", null, "21", "64.21%", null, this);
            obj.set_taborder("54");
            obj.set_text("%");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_buyAm", "absolute", "17.39%", "59", null, "21", "66.62%", null, this);
            obj.set_taborder("2");
            obj.set_mask("!999.00");
            obj.set_limitbymask("both");
            obj.set_value("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "13.83%", "83", null, "29", "0%", null, this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "13.83%", "110", null, "29", "0%", null, this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "13.83%", "138", null, "29", "0%", null, this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "13.83%", "166", null, "29", "0%", null, this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "51.27%", "83", null, "168", "32.11%", null, this);
            obj.set_taborder("30");
            obj.set_text("매월 구매금액의\r\n수취율");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "34", "83", null, "168", "83.25%", null, this);
            obj.set_taborder("23");
            obj.set_text("공급업체별\r\nPOG 취급품목\r\n수");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "0", "250", null, "80", "83.25%", null, this);
            obj.set_taborder("31");
            obj.set_text("특약사항");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "34.01%", "88", null, "17", "57.23%", null, this);
            obj.set_taborder("48");
            obj.set_text("개인 경우");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "34.01%", "117", null, "17", "57.23%", null, this);
            obj.set_taborder("49");
            obj.set_text("개인 경우");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "34.01%", "144", null, "17", "57.23%", null, this);
            obj.set_taborder("50");
            obj.set_text("개인 경우");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "183.25%", "139", null, "21", "-85.03%", null, this);
            obj.set_taborder("69");
            obj.set_text("%");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "80.84%", "115", null, "21", "17.39%", null, this);
            obj.set_taborder("56");
            obj.set_text("%");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "80.84%", "143", null, "21", "17.39%", null, this);
            obj.set_taborder("57");
            obj.set_text("%");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "80.84%", "170", null, "21", "17.64%", null, this);
            obj.set_taborder("58");
            obj.set_text("%");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "80.84%", "87", null, "21", "17.39%", null, this);
            obj.set_taborder("55");
            obj.set_text("%");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("v13", "absolute", "68.91%", "87", null, "21", "19.67%", null, this);
            obj.set_taborder("4");
            obj.set_mask("!990.00");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("v14", "absolute", "68.91%", "114", null, "21", "19.67%", null, this);
            obj.set_taborder("6");
            obj.set_mask("!990.00");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("v15", "absolute", "68.91%", "141", null, "21", "19.67%", null, this);
            obj.set_taborder("8");
            obj.set_mask("!990.00");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("v16", "absolute", "68.91%", "170", null, "21", "19.67%", null, this);
            obj.set_taborder("10");
            obj.set_mask("!990.00");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Edit("v12", "absolute", "17.39%", "170", null, "21", "66.62%", null, this);
            obj.set_taborder("9");
            obj.style.set_align("right middle");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Edit("v9", "absolute", "17.39%", "86", null, "21", "66.62%", null, this);
            obj.set_taborder("3");
            obj.style.set_align("right middle");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Edit("v10", "absolute", "17.39%", "114", null, "21", "66.62%", null, this);
            obj.set_taborder("5");
            obj.style.set_align("right middle");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Edit("v11", "absolute", "17.39%", "142", null, "21", "66.62%", null, this);
            obj.set_taborder("7");
            obj.style.set_align("right middle");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "34.01%", "200", null, "17", "57.23%", null, this);
            obj.set_taborder("52");
            obj.set_text("개인 경우");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "34.01%", "228", null, "17", "54.44%", null, this);
            obj.set_taborder("53");
            obj.set_text("개 이상인 경우");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "80.84%", "199", null, "21", "17.39%", null, this);
            obj.set_taborder("59");
            obj.set_text("%");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "80.84%", "226", null, "21", "17.64%", null, this);
            obj.set_taborder("60");
            obj.set_text("%");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("v20", "absolute", "68.91%", "197", null, "21", "19.67%", null, this);
            obj.set_taborder("12");
            obj.set_mask("!990.00");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("v21", "absolute", "68.91%", "226", null, "21", "19.67%", null, this);
            obj.set_taborder("14");
            obj.set_mask("!990.00");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Edit("v19", "absolute", "17.39%", "226", null, "21", "66.62%", null, this);
            obj.set_taborder("13");
            obj.style.set_align("right middle");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Edit("v18", "absolute", "17.39%", "198", null, "21", "66.62%", null, this);
            obj.set_taborder("11");
            obj.style.set_align("right middle");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "34.01%", "172", null, "17", "57.23%", null, this);
            obj.set_taborder("51");
            obj.set_text("개인 경우");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "0", "83", "35", "168", null, null, this);
            obj.set_taborder("21");
            obj.set_text("매\r\n대\r\n진\r\n열\r\n장\r\n려\r\n금\r\n률");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 788, 330, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("판매장려금 약정서");
            		p.set_scrollbars("none");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","cal_evtPrdStDt","value","ds_pmiwDtl01","EVT_PRD_ST_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","cal_evtPrdEdDt","value","ds_pmiwDtl01","EVT_PRD_ED_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","mae_buyAm","value","ds_pmiwDtl01","BUY_AM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","v1","value","ds_pmiwDtl01","ETC1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","v2","value","ds_pmiwDtl01","ETC2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","v3","value","ds_pmiwDtl01","ETC3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","v4","value","ds_pmiwDtl01","ETC4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","v5","value","ds_pmiwDtl01","ETC5");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","v6","value","ds_pmiwDtl01","ETC6");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","v7","value","ds_pmiwDtl01","ETC7");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","v8","value","ds_pmiwDtl01","ETC8");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","v17","value","ds_pmiwDtl01","ETCH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","txa_sctrSjt","value","ds_pmiwDtl01","SCTR_SJT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","v12","value","ds_pmiwDtl01","ETCC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","v13","value","ds_pmiwDtl01","ETCD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","v14","value","ds_pmiwDtl01","ETCE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","v15","value","ds_pmiwDtl01","ETCF");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","v16","value","ds_pmiwDtl01","ETCG");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","v9","value","ds_pmiwDtl01","ETC9");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","v10","value","ds_pmiwDtl01","ETCA");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","v11","value","ds_pmiwDtl01","ETCB");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","v20","value","ds_pmiwDtl01","ETCK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","v21","value","ds_pmiwDtl01","ETCL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","v19","value","ds_pmiwDtl01","ETCJ");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","v18","value","ds_pmiwDtl01","ETCI");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_211320.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_211320.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        var fv_position = 0; //위치값
        var fv_chk = 0; //데이터 체크

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
        		if (this.parent.ds_etcEltStylAmm.getColumn(i, "CTRW_KDC") == "301") {
        			this.ds_etcEltStylAmm301.copyRow(0, this.parent.ds_etcEltStylAmm, i);
        		}
        	}

        	for (var i = 0; i < this.parent.ds_pmiwDtl.rowcount; i++) {
        		if (this.parent.ds_pmiwDtl.getColumn(i, "PMIW_KDC") == "301") {
        			fv_position = i;
        			fv_chk = 1;
        			this.ds_pmiwDtl01.addRow();
        			this.ds_pmiwDtl01.copyRow(0, this.parent.ds_pmiwDtl, fv_position);
        		}
        	}

        	if (fv_chk == 0) {
        		var nRow = this.parent.ds_pmiwDtl.addRow();
        		fv_position = nRow;
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "PMIW_KDC", "301");
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "CHG_SQNO", this.parent.ds_register.getColumn(0, "CHG_SQNO"));
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "CTRW_STY_VER", this.ds_etcEltStylAmm301.getColumn(0, "CTRW_STY_VER"));
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "EVT_PRD_ST_DT", this.parent.cal_ctrStDt.value);
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "EVT_PRD_ED_DT", this.parent.cal_ctrEdDt.value);

        		// 성과장려금 결정기준 (사용안함)
        		/*
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC1", "0~3");
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC2", "3~6");
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC3", "6~10");
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC4", "10");

        		this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC5", "0.7");
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC6", "1.3");
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC7", "1.7");
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC8", "2.0");
        		*/

        		//신상품 입점 장려금율
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "BUY_AM", "10");

        		//공급업체별 pog
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC9", "1~49");
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "ETCA", "50~84");
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "ETCB", "85~124");
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "ETCC", "125~164");
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "ETCI", "165~199"); // 신규
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "ETCJ", "200"); // 신규

        		this.parent.ds_pmiwDtl.setColumn(fv_position, "ETCD", "1.00");
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "ETCE", "1.30");
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "ETCF", "1.60");
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "ETCG", "1.90");
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "ETCK", "2.20"); // 신규
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "ETCL", "2.50"); // 신규

        		this.ds_pmiwDtl01.addRow();
        		this.ds_pmiwDtl01.copyRow(0, this.parent.ds_pmiwDtl, fv_position);

        		//this.cal_evtPrdStDt.set_value(this.parent.cal_ctrStDt.value);
        		//this.cal_evtPrdStDt.set_value(this.parent.cal_ctrEdDt.value);
        	}
        }

        /* Validation Check */
        this.fn_validationCheck = function()
        {
        	var strTitletext = "판매장려금 약정서";

         	if (this.gfn_isNull(this.mae_buyAm.value)) {
        		this.mae_buyAm.setFocus();
         		this.alert(strTitletext + " 신상품 입점 장려금율을 입력하세요.");
         		return false;
         	}

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
        	/*
        	if (this.gfn_isNull(this.v1.value)) {
        		this.v1.setFocus();
         		this.alert(strTitletext + " 결정기준을 입력하세요.");
         		return false;
         	}

         	if (this.gfn_isNull(this.v2.value)) {
        		this.v2.setFocus();
         		this.alert(strTitletext + " 결정기준을 입력하세요.");
         		return false;
         	}

         	if (this.gfn_isNull(this.v3.value)) {
        		this.v3.setFocus();
         		this.alert(strTitletext + " 결정기준을 입력하세요.");
         		return false;
         	}

         	if (this.gfn_isNull(this.v4.value)) {
        		this.v4.setFocus();
         		this.alert(strTitletext + " 결정기준을 입력하세요.");
         		return false;
         	}

         	if (this.gfn_isNull(this.v5.value)) {
        		this.v5.setFocus();
         		this.alert(strTitletext + " 결정기준을 입력하세요.");
         		return false;
         	}

         	if (this.gfn_isNull(this.v6.value)) {
        		this.v6.setFocus();
         		this.alert(strTitletext + " 결정기준을 입력하세요.");
         		return false;
         	}

         	if (this.gfn_isNull(this.v7.value)) {
        		this.v7.setFocus();
         		this.alert(strTitletext + " 결정기준을 입력하세요.");
         		return false;
         	}

         	if (this.gfn_isNull(this.v8.value)) {
        		this.v8.setFocus();
         		this.alert(strTitletext + " 결정기준을 입력하세요.");
         		return false;
         	}
         	*/

         	if (this.gfn_isNull(this.v9.value)) {
        		this.v9.setFocus();
         		this.alert(strTitletext + " 공급업체별 POG 취급품목 수를 입력하세요.");
         		return false;
         	}

         	if (this.gfn_isNull(this.v10.value)) {
        		this.v10.setFocus();
         		this.alert(strTitletext + " 공급업체별 POG 취급품목 수를 입력하세요.");
         		return false;
         	}

         	if (this.gfn_isNull(this.v11.value)) {
        		this.v11.setFocus();
         		this.alert(strTitletext + " 공급업체별 POG 취급품목 수를 입력하세요.");
         		return false;
         	}

         	if (this.gfn_isNull(this.v12.value)) {
        		this.v12.setFocus();
         		this.alert(strTitletext + " 공급업체별 POG 취급품목 수를 입력하세요.");
         		return false;
         	}

         	if (this.gfn_isNull(this.v18.value)) {
        		this.v18.setFocus();
         		this.alert(strTitletext + " 공급업체별 POG 취급품목 수를 입력하세요.");
         		return false;
         	}

         	if (this.gfn_isNull(this.v19.value)) {
        		this.v19.setFocus();
         		this.alert(strTitletext + " 공급업체별 POG 취급품목 수를 입력하세요.");
         		return false;
         	}

         	if (this.gfn_isNull(this.v13.value)) {
        		this.v13.setFocus();
         		this.alert(strTitletext + " 매월 구매금액의 수취율을 입력하세요.");
         		return false;
         	}

         	if (this.gfn_isNull(this.v14.value)) {
        		this.v14.setFocus();
         		this.alert(strTitletext + " 매월 구매금액의 수취율을 입력하세요.");
         		return false;
         	}

         	if (this.gfn_isNull(this.v15.value)) {
        		this.v15.setFocus();
         		this.alert(strTitletext + " 매월 구매금액의 수취율을 입력하세요.");
         		return false;
         	}

         	if (this.gfn_isNull(this.v16.value)) {
        		this.v16.setFocus();
         		this.alert(strTitletext + " 매월 구매금액의 수취율을 입력하세요.");
         		return false;
         	}

         	if (this.gfn_isNull(this.v20.value)) {
        		this.v20.setFocus();
         		this.alert(strTitletext + " 매월 구매금액의 수취율을 입력하세요.");
         		return false;
         	}

         	if (this.gfn_isNull(this.v21.value)) {
        		this.v21.setFocus();
         		this.alert(strTitletext + " 매월 구매금액의 수취율을 입력하세요.");
         		return false;
         	}

        // 	if (this.gfn_isNull(this.v17.value)) {
        // 		this.v17.setFocus();
        //  		this.alert(strTitletext + " POG정책 이행률을 입력하세요.");
        //  		return false;
        //  	}
        //
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "BUY_AM", this.mae_buyAm.value);
        	/*
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC1", this.v1.value);
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC2", this.v2.value);
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC3", this.v3.value);
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC4", this.v4.value);
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC5", this.v5.value);
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC6", this.v6.value);
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC7", this.v7.value);
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC8", this.v8.value);
        	*/
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETC9", this.v9.value);
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETCA", this.v10.value);
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETCB", this.v11.value);
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETCC", this.v12.value);
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETCD", this.v13.value);
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETCE", this.v14.value);
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETCF", this.v15.value);
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETCG", this.v16.value);
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETCH", this.v17.value);
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETCI", this.v18.value);
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETCJ", this.v19.value);
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETCK", this.v20.value);
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "ETCL", this.v21.value);
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "SCTR_SJT", this.txa_sctrSjt.value); //특약사항
        	return true;
        }

        this.Cal_onchanged = function(obj,e)
        {
        	obj.updateToDataset();
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "EVT_PRD_ST_DT", this.cal_evtPrdStDt.value); //행사기간 시작 일자
        	this.parent.ds_pmiwDtl.setColumn(fv_position, "EVT_PRD_ED_DT", this.cal_evtPrdEdDt.value); //행사기간 종료 일자
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
            this.addEventHandler("onload", this.form_onload, this);
            this.cal_evtPrdStDt.addEventHandler("onchanged", this.Cal_onchanged, this);
            this.cal_evtPrdStDt.addEventHandler("ontextchanged", this.OMG_DS_SC_211321_ontextchanged, this);
            this.cal_evtPrdEdDt.addEventHandler("onchanged", this.Cal_onchanged, this);
            this.cal_evtPrdEdDt.addEventHandler("ontextchanged", this.OMG_DS_SC_211321_ontextchanged, this);
            this.Static01.addEventHandler("onclick", this.Static01_onclick, this);
            this.TextArea00.addEventHandler("oneditclick", this.TextArea00_oneditclick, this);
            this.TextArea01.addEventHandler("oneditclick", this.TextArea00_oneditclick, this);
            this.Static18.addEventHandler("onclick", this.Div06_Static04_onclick, this);
            this.txa_sctrSjt.addEventHandler("ontextchanged", this.txatext_changed, this);
            this.Static00.addEventHandler("onclick", this.Div06_Static04_onclick, this);
            this.Static04.addEventHandler("onclick", this.Div06_Static04_onclick, this);
            this.Static26.addEventHandler("onclick", this.Div06_Static04_onclick, this);
            this.v12.addEventHandler("onkillfocus", this.fn_pogDataChanged, this);
            this.v12.addEventHandler("ontextchanged", this.fn_pogDataChanged, this);
            this.v9.addEventHandler("onkillfocus", this.fn_pogDataChanged, this);
            this.v9.addEventHandler("ontextchanged", this.fn_pogDataChanged, this);
            this.v10.addEventHandler("onkillfocus", this.fn_pogDataChanged, this);
            this.v10.addEventHandler("ontextchanged", this.fn_pogDataChanged, this);
            this.v11.addEventHandler("onkillfocus", this.fn_pogDataChanged, this);
            this.v11.addEventHandler("ontextchanged", this.fn_pogDataChanged, this);
            this.v19.addEventHandler("onkillfocus", this.fn_pogDataChanged, this);
            this.v19.addEventHandler("ontextchanged", this.fn_pogDataChanged, this);
            this.v18.addEventHandler("onkillfocus", this.fn_pogDataChanged, this);
            this.v18.addEventHandler("ontextchanged", this.fn_pogDataChanged, this);
            this.Static25.addEventHandler("onclick", this.Div06_Static04_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_211320.xfdl", true);

       
    };
}
)();
