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
                this.set_name("OMG_DS_SC_211323");
                this.set_titletext("납품업체종업원파견 약정서");
                this.set_scrollbars("none");
                this.set_visible("false");
                this._setFormPosition(0,0,788,576);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pmiwDtl04", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호\"/><Column id=\"PMIW_KDC\" type=\"STRING\" size=\"256\" sumtext=\"약정서종류코드\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_STY_VER\" type=\"STRING\" size=\"256\" sumtext=\"계약서양식버젼\"/><Column id=\"BUY_AM\" type=\"STRING\" size=\"256\" sumtext=\"구매금액\"/><Column id=\"EVT_TINM\" type=\"STRING\" size=\"256\" sumtext=\"행사제목\"/><Column id=\"EVT_PRD_ST_DT\" type=\"STRING\" size=\"256\" sumtext=\"행사기간 시작일자\"/><Column id=\"EVT_PRD_ED_DT\" type=\"STRING\" size=\"256\" sumtext=\"행사기간 종료일자\"/><Column id=\"CTRW_FLNM\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일 이름\"/><Column id=\"CTRW_FL_PATHNM\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일전체경로\"/><Column id=\"CTRW_FL_SZE\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일크기\"/><Column id=\"APDFLNM\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일 이름\"/><Column id=\"APDFL_PATHNM\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일전체경로\"/><Column id=\"APDFL_SZE\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일크기\"/><Column id=\"SYS_FLNM\" type=\"STRING\" size=\"256\" sumtext=\"시스템 파일이름\"/><Column id=\"CTRW_CNTN\" type=\"STRING\" size=\"256\" sumtext=\"계약서내용\"/><Column id=\"CTRW_SGNT\" type=\"STRING\" size=\"256\" sumtext=\"계약서서명\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dlvgCompEmpDspcPmiw", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호\"/><Column id=\"PMIW_KDC\" type=\"STRING\" size=\"256\" sumtext=\"약정서종류\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"DSPC_BASS\" type=\"STRING\" size=\"256\" sumtext=\"파견근거\"/><Column id=\"LBRCS_DRTCS_CNTN1\" type=\"STRING\" size=\"256\" sumtext=\"인건비직정비내용1\"/><Column id=\"LBRCS_DRTCS_CNTN2\" type=\"STRING\" size=\"256\" sumtext=\"인건비직정비내용2\"/><Column id=\"LBRCS_DRTCS_AM1\" type=\"STRING\" size=\"256\" sumtext=\"인건비직정비소요액1\"/><Column id=\"LBRCS_DRTCS_AM2\" type=\"STRING\" size=\"256\" sumtext=\"인건비직정비소요액2\"/><Column id=\"LBRCS_DRTCS_RMK1\" type=\"STRING\" size=\"256\" sumtext=\"인건비직정비비고1\"/><Column id=\"LBRCS_DRTCS_RMK2\" type=\"STRING\" size=\"256\" sumtext=\"인건비직정비비고2\"/><Column id=\"LBRCS_OHCS_CNTN1\" type=\"STRING\" size=\"256\" sumtext=\"인건비간접비내용1\"/><Column id=\"LBRCS_OHCS_CNTN2\" type=\"STRING\" size=\"256\" sumtext=\"인건비간접비내용2\"/><Column id=\"LBRCS_OHCS_CNTN3\" type=\"STRING\" size=\"256\" sumtext=\"인건비간접비내용3\"/><Column id=\"LBRCS_OHCS_AM1\" type=\"STRING\" size=\"256\" sumtext=\"인건비간접비소용액1\"/><Column id=\"LBRCS_OHCS_AM2\" type=\"STRING\" size=\"256\" sumtext=\"인건비간접비소용액2\"/><Column id=\"LBRCS_OHCS_AM3\" type=\"STRING\" size=\"256\" sumtext=\"인건비간접비소용액3\"/><Column id=\"LBRCS_OHCS_RMK1\" type=\"STRING\" size=\"256\" sumtext=\"인건비간접비비고1\"/><Column id=\"LBRCS_OHCS_RMK2\" type=\"STRING\" size=\"256\" sumtext=\"인건비간접비비고2\"/><Column id=\"LBRCS_OHCS_RMK3\" type=\"STRING\" size=\"256\" sumtext=\"인건비간접비비고3\"/><Column id=\"FI_BNF_CNTN1\" type=\"STRING\" size=\"256\" sumtext=\"복리후생비내용1\"/><Column id=\"FI_BNF_CNTN2\" type=\"STRING\" size=\"256\" sumtext=\"복리후생비내용2\"/><Column id=\"FI_BNF_CNTN3\" type=\"STRING\" size=\"256\" sumtext=\"복리후생비내용3\"/><Column id=\"FI_BNF_AM1\" type=\"STRING\" size=\"256\" sumtext=\"복리후생비소용액1\"/><Column id=\"FI_BNF_AM2\" type=\"STRING\" size=\"256\" sumtext=\"복리후생비소용액2\"/><Column id=\"FI_BNF_AM3\" type=\"STRING\" size=\"256\" sumtext=\"복리후생비소용액3\"/><Column id=\"FI_BNF_RMK1\" type=\"STRING\" size=\"256\" sumtext=\"복리후생비비고1\"/><Column id=\"FI_BNF_RMK2\" type=\"STRING\" size=\"256\" sumtext=\"복리후생비비고2\"/><Column id=\"FI_BNF_RMK3\" type=\"STRING\" size=\"256\" sumtext=\"복리후생비비고3\"/><Column id=\"ETC_TXPN_CNTN\" type=\"STRING\" size=\"256\" sumtext=\"기타제경비내용\"/><Column id=\"ETC_TXPN_AM\" type=\"STRING\" size=\"256\" sumtext=\"기타제경비소용액\"/><Column id=\"CTR_CHRR_RTO\" type=\"STRING\" size=\"256\" sumtext=\"계약담당자비율\"/><Column id=\"CTR_PATN_RTO\" type=\"STRING\" size=\"256\" sumtext=\"계약상대자비율\"/><Column id=\"ETC_TXPN_RMK\" type=\"STRING\" size=\"256\" sumtext=\"기타제경비비고\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_etcEltStylAmm304", this);
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

            obj = new Dataset("ds_dspcPerWrkPrdPmiw", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호\"/><Column id=\"PMIW_KDC\" type=\"STRING\" size=\"256\" sumtext=\"약정서종류\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\" sumtext=\"변경일련번호\"/><Column id=\"SQNO\" type=\"STRING\" size=\"256\" sumtext=\"일련번호\"/><Column id=\"STORNM\" type=\"STRING\" size=\"256\" sumtext=\"매장명\"/><Column id=\"DSPC_PER\" type=\"STRING\" size=\"256\" sumtext=\"파견인원\"/><Column id=\"WRK_ST_DT\" type=\"STRING\" size=\"256\" sumtext=\"근무기간시작일자\"/><Column id=\"WRK_ED_DT\" type=\"STRING\" size=\"256\" sumtext=\"근무기간종료일자\"/><Column id=\"WRK_ST_HR\" type=\"STRING\" size=\"256\" sumtext=\"근무시작시간\"/><Column id=\"WRK_ED_HR\" type=\"STRING\" size=\"256\" sumtext=\"근무종료시간\"/><Column id=\"RCS_ST_HR\" type=\"STRING\" size=\"256\" sumtext=\"휴게시작시간\"/><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"RCS_ED_HR\" type=\"STRING\" size=\"256\" sumtext=\"휴게종료시간\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static86", "absolute", "0", "0", "467", "21", null, null, this);
            obj.set_taborder("32");
            obj.set_text("납품업체종업원파견 약정서");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button10", "absolute", "710", "0", "78", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_text("계약서보기");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "15", "1812", "803", "20", null, null, this);
            obj.set_taborder("34");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "15", "2695", "803", "20", null, null, this);
            obj.set_taborder("35");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "200", "84", "414", "15", null, null, this);
            obj.set_taborder("36");
            obj.set_text("27");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "108", "27", null, "29", "0", null, this);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static107", "absolute", "0", "27", "110", "29", null, null, this);
            obj.set_taborder("38");
            obj.set_text("파견근거");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dspcBass", "absolute", "112", "31", "40", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_maxlength("1");
            obj.set_lengthunit("ascii");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "641", "119", null, "29", "0", null, this);
            obj.set_taborder("40");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "101", "147", "134", "57", null, null, this);
            obj.set_taborder("41");
            obj.set_text("직접비");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "101", "203", "134", "85", null, null, this);
            obj.set_taborder("42");
            obj.set_text("간접비");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", null, "98", "78", "21", "0", null, this);
            obj.set_taborder("43");
            obj.set_text("(단워 : 천원)");
            obj.set_cssclass("sta_WF_GridCount");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "234", "147", "205", "29", null, null, this);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "234", "175", "205", "29", null, null, this);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "437", "119", "205", "29", null, null, this);
            obj.set_taborder("39");
            obj.set_text("월 소요액");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "234", "203", "205", "29", null, null, this);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "0", "95", "430", "21", null, null, this);
            obj.set_taborder("47");
            obj.set_text("1. 계약담당자가 협력사원의 인건비 등 제반 비용");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "0", "370", "235", "29", null, null, this);
            obj.set_taborder("48");
            obj.set_text("기타 제경비 등");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "0", "147", "102", "141", null, null, this);
            obj.set_taborder("49");
            obj.set_text("인건비");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0", "119", "235", "29", null, null, this);
            obj.set_taborder("50");
            obj.set_text("구  분");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "234", "119", "204", "29", null, null, this);
            obj.set_taborder("51");
            obj.set_text("세부내역");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_LbrcsDrtcsCntn1", "absolute", "240", "151", "192", "21", null, null, this);
            obj.set_taborder("3");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("120");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_LbrcsDrtcsCntn2", "absolute", "240", "179", "192", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("120");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_LbrcsOhcsCntn1", "absolute", "240", "206", "192", "21", null, null, this);
            obj.set_taborder("9");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("120");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "437", "147", "206", "29", null, null, this);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "437", "175", "206", "29", null, null, this);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "437", "203", "206", "29", null, null, this);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_LbrcsDrtcsAm1", "absolute", "440", "151", "200", "21", null, null, this);
            obj.set_taborder("4");
            obj.set_mask("###,###,###,###");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_LbrcsDrtcsAm2", "absolute", "440", "179", "200", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_mask("###,###,###,###");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "641", "147", null, "29", "0%", null, this);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "641", "175", null, "29", "0%", null, this);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "641", "203", null, "29", "0%", null, this);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_LbrcsDrtcsRmk1", "absolute", "645", "151", null, "21", "0.76%", null, this);
            obj.set_taborder("5");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("250");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_LbrcsDrtcsRmk2", "absolute", "645", "179", null, "21", "0.76%", null, this);
            obj.set_taborder("8");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("250");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_LbrcsOhcsRmk1", "absolute", "645", "206", null, "21", "0.76%", null, this);
            obj.set_taborder("11");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("250");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_LbrcsOhcsAm1", "absolute", "440", "206", "200", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_mask("###,###,###,###");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "234", "231", "205", "29", null, null, this);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_LbrcsOhcsCntn2", "absolute", "240", "234", "192", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("120");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "437", "231", "206", "29", null, null, this);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "641", "231", null, "29", "0%", null, this);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_LbrcsOhcsRmk2", "absolute", "645", "234", null, "21", "0.76%", null, this);
            obj.set_taborder("14");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("250");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_LbrcsOhcsAm2", "absolute", "440", "234", "200", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_mask("###,###,###,###");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "234", "259", "205", "29", null, null, this);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_LbrcsOhcsCntn3", "absolute", "240", "262", "192", "21", null, null, this);
            obj.set_taborder("15");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("120");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "437", "259", "206", "29", null, null, this);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "641", "259", null, "29", "0%", null, this);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_LbrcsOhcsRmk3", "absolute", "645", "262", null, "21", "0.76%", null, this);
            obj.set_taborder("17");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("250");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_LbrcsOhcsAm3", "absolute", "440", "262", "200", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_mask("###,###,###,###");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "234", "287", "205", "29", null, null, this);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_FiBnfCntn1", "absolute", "240", "290", "192", "21", null, null, this);
            obj.set_taborder("18");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("120");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "437", "287", "206", "29", null, null, this);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "641", "287", null, "29", "0%", null, this);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_FiBnfRmk1", "absolute", "645", "290", null, "21", "0.76%", null, this);
            obj.set_taborder("20");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("250");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_FiBnfAm1", "absolute", "440", "290", "200", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_mask("###,###,###,###");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "234", "315", "205", "29", null, null, this);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_FiBnfCntn2", "absolute", "240", "318", "192", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("120");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "437", "315", "206", "29", null, null, this);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "641", "315", null, "29", "0%", null, this);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_FiBnfRmk2", "absolute", "645", "318", null, "21", "0.76%", null, this);
            obj.set_taborder("23");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("250");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_FiBnfAm2", "absolute", "440", "318", "200", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_mask("###,###,###,###");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "1", "287", "234", "84", null, null, this);
            obj.set_taborder("70");
            obj.set_text("복리후생비 등");
            obj.set_cssclass("sta_WF_Label_c");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "234", "342", "205", "29", null, null, this);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_FiBnfCntn3", "absolute", "240", "345", "192", "21", null, null, this);
            obj.set_taborder("24");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("120");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "437", "342", "206", "29", null, null, this);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "641", "342", null, "29", "0%", null, this);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_FiBnfRmk3", "absolute", "645", "345", null, "21", "0.76%", null, this);
            obj.set_taborder("26");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("250");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_FiBnfAm3", "absolute", "440", "345", "200", "21", null, null, this);
            obj.set_taborder("25");
            obj.set_mask("###,###,###,###");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "234", "370", "205", "29", null, null, this);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_EtcTxpnCntn", "absolute", "240", "373", "192", "21", null, null, this);
            obj.set_taborder("27");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("120");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "437", "370", "206", "29", null, null, this);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "641", "370", null, "29", "0%", null, this);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_Labelbg_R");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_EtcTxpnRmk", "absolute", "645", "373", null, "21", "0.76%", null, this);
            obj.set_taborder("29");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("250");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_EtcTxpnAm", "absolute", "440", "373", "200", "21", null, null, this);
            obj.set_taborder("28");
            obj.set_mask("###,###,###,###");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_dspcPerWrkPrd", "absolute", "0", "437", null, "139", "0", null, this);
            obj.set_taborder("77");
            obj.set_binddataset("ds_dspcPerWrkPrdPmiw");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"매장명\"/><Cell col=\"2\" text=\"파견인원\"/><Cell col=\"3\" colspan=\"2\" text=\"근무기간\"/><Cell col=\"5\" colspan=\"2\" text=\"근무시간\"/><Cell col=\"7\" colspan=\"2\" text=\"휴계시간\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:STORNM\" editlimit=\"64\" editlengthunit=\"ascii\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"mask\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DSPC_PER\" mask=\"####\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:WRK_ST_DT\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"date\" text=\"bind:WRK_ED_DT\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"mask\" text=\"bind:WRK_ST_HR\" mask=\"@@:@@\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"mask\" text=\"bind:WRK_ED_HR\" mask=\"@@:@@\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"mask\" text=\"bind:RCS_ST_HR\" mask=\"@@:@@\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"mask\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:RCS_ED_HR\" mask=\"@@:@@\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dspcPerWrkPrdPmiw_add", "absolute", null, "411", "53", "21", "55", null, this);
            obj.set_taborder("30");
            obj.set_text("행추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dspcPerWrkPrdPmiw_del", "absolute", null, "411", "53", "21", "0%", null, this);
            obj.set_taborder("31");
            obj.set_text("행삭제");
            this.addChild(obj.name, obj);

            obj = new Static("Static170", "absolute", "0", "413", "386", "21", null, null, this);
            obj.set_taborder("78");
            obj.set_text("2. 파견인원 및 근무기간, 근무시간, 휴게시간");
            this.addChild(obj.name, obj);

            obj = new Static("Static89", "absolute", "160", "31", "56", "21", null, null, this);
            obj.set_taborder("79");
            obj.set_text("항");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "108", "55", null, "29", "0", null, this);
            obj.set_taborder("81");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0", "55", "110", "29", null, null, this);
            obj.set_taborder("80");
            obj.set_text("계약담당자비율");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static60", "absolute", "214", "58", "14", "21", null, null, this);
            obj.set_taborder("82");
            obj.set_text("%");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "385", "55", "111", "29", null, null, this);
            obj.set_taborder("83");
            obj.set_text("계약상대자비율");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_ctrChrrRto", "absolute", "112", "59", "90", "21", null, null, this);
            obj.set_taborder("1");
            obj.set_limitbymask("both");
            obj.set_mask("###");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_ctrPatnRto", "absolute", "498", "59", "90", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_limitbymask("both");
            obj.set_mask("###");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "592", "58", "15", "21", null, null, this);
            obj.set_taborder("84");
            obj.set_text("%");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 788, 576, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("납품업체종업원파견 약정서");
            		p.set_scrollbars("none");
            		p.set_visible("false");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item20","edt_dspcBass","value","ds_dlvgCompEmpDspcPmiw","DSPC_BASS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edt_LbrcsDrtcsCntn1","value","ds_dlvgCompEmpDspcPmiw","LBRCS_DRTCS_CNTN1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_LbrcsDrtcsCntn2","value","ds_dlvgCompEmpDspcPmiw","LBRCS_DRTCS_CNTN2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_LbrcsOhcsCntn1","value","ds_dlvgCompEmpDspcPmiw","LBRCS_OHCS_CNTN1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","mae_LbrcsDrtcsAm1","value","ds_dlvgCompEmpDspcPmiw","LBRCS_DRTCS_AM1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","mae_LbrcsDrtcsAm2","value","ds_dlvgCompEmpDspcPmiw","LBRCS_DRTCS_AM2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edt_LbrcsDrtcsRmk1","value","ds_dlvgCompEmpDspcPmiw","LBRCS_DRTCS_RMK1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edt_LbrcsDrtcsRmk2","value","ds_dlvgCompEmpDspcPmiw","LBRCS_DRTCS_RMK2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edt_LbrcsOhcsRmk1","value","ds_dlvgCompEmpDspcPmiw","LBRCS_OHCS_RMK1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","mae_LbrcsOhcsAm1","value","ds_dlvgCompEmpDspcPmiw","LBRCS_OHCS_AM1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","edt_LbrcsOhcsCntn2","value","ds_dlvgCompEmpDspcPmiw","LBRCS_OHCS_CNTN2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","edt_LbrcsOhcsRmk2","value","ds_dlvgCompEmpDspcPmiw","LBRCS_OHCS_RMK2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","mae_LbrcsOhcsAm2","value","ds_dlvgCompEmpDspcPmiw","LBRCS_OHCS_AM2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","edt_LbrcsOhcsCntn3","value","ds_dlvgCompEmpDspcPmiw","LBRCS_OHCS_CNTN3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","edt_LbrcsOhcsRmk3","value","ds_dlvgCompEmpDspcPmiw","LBRCS_OHCS_RMK3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","mae_LbrcsOhcsAm3","value","ds_dlvgCompEmpDspcPmiw","LBRCS_OHCS_AM3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","edt_FiBnfCntn1","value","ds_dlvgCompEmpDspcPmiw","FI_BNF_CNTN1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","edt_FiBnfRmk1","value","ds_dlvgCompEmpDspcPmiw","FI_BNF_RMK1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","mae_FiBnfAm1","value","ds_dlvgCompEmpDspcPmiw","FI_BNF_AM1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","edt_FiBnfCntn2","value","ds_dlvgCompEmpDspcPmiw","FI_BNF_CNTN2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","edt_FiBnfRmk2","value","ds_dlvgCompEmpDspcPmiw","FI_BNF_RMK2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","mae_FiBnfAm2","value","ds_dlvgCompEmpDspcPmiw","FI_BNF_AM2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","edt_FiBnfCntn3","value","ds_dlvgCompEmpDspcPmiw","FI_BNF_CNTN3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","edt_FiBnfRmk3","value","ds_dlvgCompEmpDspcPmiw","FI_BNF_RMK3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","mae_FiBnfAm3","value","ds_dlvgCompEmpDspcPmiw","FI_BNF_AM3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","edt_EtcTxpnCntn","value","ds_dlvgCompEmpDspcPmiw","ETC_TXPN_CNTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","edt_EtcTxpnRmk","value","ds_dlvgCompEmpDspcPmiw","ETC_TXPN_RMK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","mae_EtcTxpnAm","value","ds_dlvgCompEmpDspcPmiw","ETC_TXPN_AM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","mae_ctrChrrRto","value","ds_dlvgCompEmpDspcPmiw","CTR_CHRR_RTO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","mae_ctrPatnRto","value","ds_dlvgCompEmpDspcPmiw","CTR_PATN_RTO");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_211323.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_211323.xfdl", function() {
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
        		if (this.parent.ds_etcEltStylAmm.getColumn(i, "CTRW_KDC") == "304") {
        			this.ds_etcEltStylAmm304.copyRow(0, this.parent.ds_etcEltStylAmm, i);
        		}
        	}

        	if (this.parent.ds_dlvgCompEmpDspcPmiw.rowcount > 0) {
        		this.ds_dlvgCompEmpDspcPmiw.copyData(this.parent.ds_dlvgCompEmpDspcPmiw);
        	} else {
        		this.ds_dlvgCompEmpDspcPmiw.addRow();
        		this.ds_dlvgCompEmpDspcPmiw.setColumn(0, "PMIW_KDC", "304");
        		this.ds_dlvgCompEmpDspcPmiw.setColumn(0, "CHG_SQNO", this.parent.ds_register.getColumn(0 , "CHG_SQNO"));
        		this.ds_dlvgCompEmpDspcPmiw.setColumn(0, "LBRCS_DRTCS_CNTN1", "기본급(000시간 기준)");
        		this.ds_dlvgCompEmpDspcPmiw.setColumn(0, "LBRCS_DRTCS_CNTN2", "시간의수당(00시간분)");
        		this.ds_dlvgCompEmpDspcPmiw.setColumn(0, "LBRCS_OHCS_CNTN1", "연차휴가비");
        		this.ds_dlvgCompEmpDspcPmiw.setColumn(0, "LBRCS_OHCS_CNTN2", "4대보험료");
        		this.ds_dlvgCompEmpDspcPmiw.setColumn(0, "LBRCS_OHCS_CNTN3", "퇴직급여충당금");
        		this.ds_dlvgCompEmpDspcPmiw.setColumn(0, "FI_BNF_CNTN1", "식비");
        		this.ds_dlvgCompEmpDspcPmiw.setColumn(0, "FI_BNF_CNTN2", "교통비");
        		this.ds_dlvgCompEmpDspcPmiw.setColumn(0, "FI_BNF_CNTN3", "기타실비");
        		this.ds_dlvgCompEmpDspcPmiw.setColumn(0, "ETC_TXPN_CNTN", "관련업무수행 부수비용");
        // 		this.ds_dlvgCompEmpDspcPmiw.setColumn(0, "CTR_CHRR_RTO", "50");
        // 		this.ds_dlvgCompEmpDspcPmiw.setColumn(0, "CTR_PATN_RTO", "60");

        		if (application.gv_serverType  ==  "LOCAL") {//개발
        			this.edt_dspcBass.set_value("1");
        			this.mae_LbrcsDrtcsAm1.set_value("11");
        			this.mae_LbrcsDrtcsAm2.set_value("22");

        			this.edt_LbrcsDrtcsRmk1.set_value("11_1");
        			this.edt_LbrcsDrtcsRmk2.set_value("22_2");

        			this.mae_LbrcsOhcsAm1.set_value("111");
        			this.mae_LbrcsOhcsAm2.set_value("222");
        			this.mae_LbrcsOhcsAm3.set_value("333");

        			this.edt_LbrcsOhcsRmk1.set_value("111_1");
        			this.edt_LbrcsOhcsRmk2.set_value("222_2");
        			this.edt_LbrcsOhcsRmk3.set_value("333_3");

        			this.mae_FiBnfAm1.set_value("1111");
        			this.mae_FiBnfAm2.set_value("2222");
        			this.mae_FiBnfAm3.set_value("3333");

        			this.edt_FiBnfRmk1.set_value("1111_1");
        			this.edt_FiBnfRmk2.set_value("2222_2");
        			this.edt_FiBnfRmk3.set_value("3333_3");

        			this.mae_EtcTxpnAm.set_value("11111");
        			this.edt_EtcTxpnRmk.set_value("11111_1");
        		}

        		this.parent.ds_dlvgCompEmpDspcPmiw.addRow();
        		this.parent.ds_dlvgCompEmpDspcPmiw.copyData(this.ds_dlvgCompEmpDspcPmiw);
        	}

        	if (this.parent.ds_dspcPerWrkPrdPmiw.rowcount  > 0) {
        		this.ds_dspcPerWrkPrdPmiw.addRow();
        		this.ds_dspcPerWrkPrdPmiw.copyData(this.parent.ds_dspcPerWrkPrdPmiw);
        	} else {
        		this.ds_dspcPerWrkPrdPmiw.addRow();
        		this.ds_dspcPerWrkPrdPmiw.setColumn(0, "PMIW_KDC", "304");
        		this.ds_dspcPerWrkPrdPmiw.setColumn(0, "CHG_SQNO", this.parent.ds_register.getColumn(0 , "CHG_SQNO"));

        		var toDay = this.gfn_today("yyyyMMdd");
        		this.chkDay = this.gfn_minusMonth(toDay, -1);

        		this.ds_dspcPerWrkPrdPmiw.setColumn(0, "WRK_ST_DT", toDay);
        		this.ds_dspcPerWrkPrdPmiw.setColumn(0, "WRK_ED_DT", this.chkDay);

        		if (application.gv_serverType  ==  "LOCAL") {//개발
        			this.ds_dspcPerWrkPrdPmiw.setColumn(0, "STORNM", "매장명");
        			this.ds_dspcPerWrkPrdPmiw.setColumn(0, "DSPC_PER", "25");
        			this.ds_dspcPerWrkPrdPmiw.setColumn(0, "WRK_ST_HR", "1212");
        			this.ds_dspcPerWrkPrdPmiw.setColumn(0, "WRK_ED_HR", "1414");
        			this.ds_dspcPerWrkPrdPmiw.setColumn(0, "RCS_ST_HR", "1212");
        			this.ds_dspcPerWrkPrdPmiw.setColumn(0, "RCS_ED_HR", "1414");
        		}
        	}

        	for (var i = 0; i < this.parent.ds_pmiwDtl.rowcount; i++) {
        		if (this.parent.ds_pmiwDtl.getColumn(i, "PMIW_KDC") == "304") {
        			fv_position = i;
        			fv_chk = 1;
        			this.ds_pmiwDtl04.addRow();
        			this.ds_pmiwDtl04.copyRow(0, this.parent.ds_pmiwDtl, fv_position);
        		}
        	}

        	if (fv_chk == 0) {
        		var toDay = this.gfn_today("yyyyMMdd");
        		chkDay = this.gfn_addMonth(toDay, 1);

        		var nRow = this.parent.ds_pmiwDtl.addRow();
        		fv_position = nRow;
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "PMIW_KDC", "304");
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "CHG_SQNO", this.parent.ds_register.getColumn(0, "CHG_SQNO"));
        		this.parent.ds_pmiwDtl.setColumn(fv_position, "CTRW_STY_VER", this.ds_etcEltStylAmm304.getColumn(0, "CTRW_STY_VER"));

        		this.ds_pmiwDtl04.addRow();
        		this.ds_pmiwDtl04.copyRow(0, this.parent.ds_pmiwDtl , fv_position);
        	}
        }

        this.ds_dlvgCompEmpDspcPmiw_oncolumnchanged = function(obj,e)
        {
        	this.parent.ds_lgqtTrFeePmiw.copyData(this.ds_lgqtTrFeePmiw);

        	for (var i = 0; i < this.ds_lgqtTrFeePmiw.rowcount; i++) {
        		this.parent.ds_dlvgCompEmpDspcPmiw.set_updatecontrol(false);
        		this.parent.ds_dlvgCompEmpDspcPmiw.setRowType(i, this.ds_dlvgCompEmpDspcPmiw.getRowType(i));
        		this.parent.ds_dlvgCompEmpDspcPmiw.set_updatecontrol(true);
        	}
        }

        this.fn_ds_pmiwDtl_update = function()
        {
        	for (var i = 0; i < this.ds_pmiwDtl04.rowcount; i++) {
        		this.parent.ds_pmiwDtl.set_updatecontrol(false);
        		this.parent.ds_pmiwDtl.setRowType(fv_position, this.ds_pmiwDtl04.getRowType(i));
        		this.parent.ds_pmiwDtl.set_updatecontrol(true);
        	}
        }

        /* Validation Check */
        this.fn_validationCheck = function()
        {
        	var strTitletext = "납품업체 종업원 파견 약정서";

        	if (this.gfn_isNull(this.edt_dspcBass.value)) {
        		this.edt_dspcBass.setFocus();
         		this.alert(strTitletext + " 파견 그거() 항을 입력하세요. ");
         		return false;
         	}

         	if (this.gfn_isNull(this.mae_ctrChrrRto.value)) {
        		this.mae_ctrChrrRto.setFocus();
         		this.alert(strTitletext + " 계약 담당자 비율 입력하세요. ");
         		return false;
         	}

         	if (this.gfn_isNull(this.mae_ctrPatnRto.value)) {
        		this.mae_ctrPatnRto.setFocus();
         		this.alert(strTitletext + " 계약 상대자 비율을 입력하세요. ");
         		return false;
         	}

         	if (this.gfn_isNull(this.edt_LbrcsDrtcsCntn1.value)) {
        		this.edt_LbrcsDrtcsCntn1.setFocus();
         		this.alert(strTitletext + "직정비 세부 내역1 을 입력하세요. ");
         		return false;
         	}

         	if (this.gfn_isNull(this.mae_LbrcsDrtcsAm1.value)) {
        		this.mae_LbrcsDrtcsAm1.setFocus();
         		this.alert(strTitletext + "직정비 월 소요액1 을 입력하세요. ");
         		return false;
         	}

         	if (this.gfn_isNull(this.edt_LbrcsDrtcsCntn2.value)) {
        		this.edt_LbrcsDrtcsCntn2.setFocus();
         		this.alert(strTitletext + "직정비 세부 내역2 을 입력하세요. ");
         		return false;
         	}

         	if (this.gfn_isNull(this.mae_LbrcsDrtcsAm2.value)) {
        		this.mae_LbrcsDrtcsAm2.setFocus();
         		this.alert(strTitletext + "직정비 월 소요액2 을 입력하세요. ");
         		return false;
         	}

         	if (this.gfn_isNull(this.edt_LbrcsOhcsCntn1.value)) {
        		this.edt_LbrcsOhcsCntn1.setFocus();
         		this.alert(strTitletext + "간접비 세부 내역1 을 입력하세요. ");
         		return false;
         	}

         	if (this.gfn_isNull(this.mae_LbrcsOhcsAm1.value)) {
        		this.mae_LbrcsOhcsAm1.setFocus();
         		this.alert(strTitletext + "간접비 월 소요액1 을 입력하세요. ");
         		return false;
         	}

         	if (this.gfn_isNull(this.edt_LbrcsOhcsCntn2.value)) {
        		this.edt_LbrcsOhcsCntn2.setFocus();
         		this.alert(strTitletext + "간접비 세부 내역2 을 입력하세요. ");
         		return false;
         	}

         	if (this.gfn_isNull(this.mae_LbrcsOhcsAm2.value)) {
        		this.mae_LbrcsOhcsAm2.setFocus();
         		this.alert(strTitletext + "간접비 월 소요액2 을 입력하세요. ");
         		return false;
         	}
         	if (this.gfn_isNull(this.edt_LbrcsOhcsCntn3.value)) {
        		this.edt_LbrcsOhcsCntn3.setFocus();
         		this.alert(strTitletext + "간접비 세부 내역3 을 입력하세요. ");
         		return false;
         	}

         	if (this.gfn_isNull(this.mae_LbrcsOhcsAm3.value)) {
        		this.mae_LbrcsOhcsAm3.setFocus();
         		this.alert(strTitletext + "간접비 월 소요액3 을 입력하세요. ");
         		return false;
         	}

         	if (this.gfn_isNull(this.edt_FiBnfCntn1.value)) {
        		this.edt_FiBnfCntn1.setFocus();
         		this.alert(strTitletext + "복리 후생비 세부 내역1 을 입력하세요. ");
         		return false;
         	}

         	if (this.gfn_isNull(this.mae_FiBnfAm1.value)) {
        		this.mae_FiBnfAm1.setFocus();
         		this.alert(strTitletext + "복리 후생비 월 소요액1 을 입력하세요. ");
         		return false;
         	}

         	if (this.gfn_isNull(this.edt_FiBnfCntn2.value)) {
        		this.edt_FiBnfCntn2.setFocus();
         		this.alert(strTitletext + "복리 후생비 세부 내역2 을 입력하세요. ");
         		return false;
         	}

         	if (this.gfn_isNull(this.mae_FiBnfAm2.value)) {
        		this.mae_FiBnfAm2.setFocus();
         		this.alert(strTitletext + "복리 후생비 월 소요액2 을 입력하세요. ");
         		return false;
         	}

         	if (this.gfn_isNull(this.edt_FiBnfCntn3.value)) {
        		this.edt_FiBnfCntn3.setFocus();
         		this.alert(strTitletext + "복리 후생비 세부 내역3 을 입력하세요. ");
         		return false;
         	}

         	if (this.gfn_isNull(this.mae_FiBnfAm3.value)) {
        		this.mae_FiBnfAm3.setFocus();
         		this.alert(strTitletext + "복리 후생비 월 소요액3 을 입력하세요. ");
         		return false;
         	}

         	if (this.gfn_isNull(this.edt_EtcTxpnCntn.value)) {
        		this.edt_EtcTxpnCntn.setFocus();
         		this.alert(strTitletext + "기타 제경비 세부 내역 을 입력하세요. ");
         		return false;
         	}

         	if (this.gfn_isNull(this.mae_EtcTxpnAm.value)) {
        		this.mae_EtcTxpnAm.setFocus();
         		this.alert(strTitletext + "기타 제경비 월 소요액 을 입력하세요. ");
         		return false;
         	}

        	this.parent.ds_pmiwDtl.setColumn(fv_position, "SCTR_SJT", this.txa_sctrSjt.value); //특약사항
        	return true;
        }

        this.btn_dspcPerWrkPrdPmiw_addRow_onclick = function(obj,e)
        {
        	this.ds_dspcPerWrkPrdPmiw.addRow();
        	var nRow = this.ds_dspcPerWrkPrdPmiw.rowcount -1;
        	this.ds_dspcPerWrkPrdPmiw.setColumn(nRow, "PMIW_KDC", "304");
        	this.ds_dspcPerWrkPrdPmiw.setColumn(nRow, "CHG_SQNO", this.parent.ds_register.getColumn(0 , "CHG_SQNO"));

        	var toDay = this.gfn_today("yyyyMMdd");
        	this.chkDay = this.gfn_minusMonth(toDay, -1);

        	this.ds_dspcPerWrkPrdPmiw.setColumn(nRow, "WRK_ST_DT", toDay);
        	this.ds_dspcPerWrkPrdPmiw.setColumn(nRow, "WRK_ED_DT", this.chkDay);

        	this.parent.ds_dspcPerWrkPrdPmiw.copyData(this.ds_dspcPerWrkPrdPmiw);
        	this.fn_ds_dspcPerWrkPrdPmiw_update();
        }

        this.btn_dspcPerWrkPrdPmiw_delRow_onclick = function(obj,e)
        {
        	for (var i = this.ds_dspcPerWrkPrdPmiw.rowcount; i > -1; i--) {
        		var nCheck = this.ds_dspcPerWrkPrdPmiw.getColumn(i, "ISCHECKED");

        		if (nCheck == 1) {
        			this.parent.ds_dspcPerWrkPrdPmiw.deleteRow(i);
        			this.ds_dspcPerWrkPrdPmiw.deleteRow(i);
        		}
        	}
        }

        this.ds_dspcPerWrkPrdPmiw_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		this.gfn_setGridCheckAll(obj, e);
        	}
        }

        this.fn_ds_dspcPerWrkPrdPmiw_update = function()
        {
        	for (var i = 0; i < this.ds_dspcPerWrkPrdPmiw.rowcount; i++) {
        		this.parent.ds_dspcPerWrkPrdPmiw.set_updatecontrol(false);
        		this.parent.ds_dspcPerWrkPrdPmiw.setRowType(i, this.ds_dspcPerWrkPrdPmiw.getRowType(i));
        		this.parent.ds_dspcPerWrkPrdPmiw.set_updatecontrol(true);
        	}

        	if (this.ds_dspcPerWrkPrdPmiw.rowcount == 0) {
        		for (var i = 0; i < this.parent.ds_dspcPerWrkPrdPmiw.rowcount; i++) {
        			this.parent.ds_dspcPerWrkPrdPmiw.set_updatecontrol(false);
        			this.parent.ds_dspcPerWrkPrdPmiw.setRowType(i, Dataset.ROWTYPE_DELETE);
        			this.parent.ds_dspcPerWrkPrdPmiw.set_updatecontrol(true);
        		}
        	}
        }

        this.OMG_DS_SC_211323_ontextchanged = function(obj,e)
        {
        	this.parent.ds_dlvgCompEmpDspcPmiw.setColumn(0, "DSPC_BASS", this.edt_dspcBass.value); //파견 근무 항
        	this.parent.ds_dlvgCompEmpDspcPmiw.setColumn(0, "LBRCS_DRTCS_CNTN1", this.edt_LbrcsDrtcsCntn1.value); //직접비 세부내역1
        	this.parent.ds_dlvgCompEmpDspcPmiw.setColumn(0, "LBRCS_DRTCS_CNTN2", this.edt_LbrcsDrtcsCntn2.value); //직접비 세부내역2
        	this.parent.ds_dlvgCompEmpDspcPmiw.setColumn(0, "LBRCS_DRTCS_AM1", this.mae_LbrcsDrtcsAm1.value); //직접비 월소요액1
        	this.parent.ds_dlvgCompEmpDspcPmiw.setColumn(0, "LBRCS_DRTCS_AM2", this.mae_LbrcsDrtcsAm2.value); //직접비 월소요액2
        	this.parent.ds_dlvgCompEmpDspcPmiw.setColumn(0, "LBRCS_DRTCS_RMK1", this.edt_LbrcsDrtcsRmk1.value); //직접비 비고1
        	this.parent.ds_dlvgCompEmpDspcPmiw.setColumn(0, "LBRCS_DRTCS_RMK2", this.edt_LbrcsDrtcsRmk2.value); //직접비 비고1

        	this.parent.ds_dlvgCompEmpDspcPmiw.setColumn(0, "LBRCS_OHCS_CNTN1", this.edt_LbrcsOhcsCntn1.value); //간접비 세부내역1
        	this.parent.ds_dlvgCompEmpDspcPmiw.setColumn(0, "LBRCS_OHCS_CNTN2", this.edt_LbrcsOhcsCntn2.value); //간접비 세부내역2
        	this.parent.ds_dlvgCompEmpDspcPmiw.setColumn(0, "LBRCS_OHCS_CNTN3", this.edt_LbrcsOhcsCntn3.value); //간접비 세부내역3

        	this.parent.ds_dlvgCompEmpDspcPmiw.setColumn(0, "LBRCS_OHCS_AM1", this.mae_LbrcsOhcsAm1.value); //간접비 월소용액1
        	this.parent.ds_dlvgCompEmpDspcPmiw.setColumn(0, "LBRCS_OHCS_AM2", this.mae_LbrcsOhcsAm2.value); //간접비 월소용액2
        	this.parent.ds_dlvgCompEmpDspcPmiw.setColumn(0, "LBRCS_OHCS_AM3", this.mae_LbrcsOhcsAm3.value); //간접비 월소용액3

        	this.parent.ds_dlvgCompEmpDspcPmiw.setColumn(0, "LBRCS_OHCS_RMK1", this.edt_LbrcsOhcsRmk1.value); //간접비 비고1
        	this.parent.ds_dlvgCompEmpDspcPmiw.setColumn(0, "LBRCS_OHCS_RMK2", this.edt_LbrcsOhcsRmk2.value); //간접비 비고2
        	this.parent.ds_dlvgCompEmpDspcPmiw.setColumn(0, "LBRCS_OHCS_RMK3", this.edt_LbrcsOhcsRmk3.value); //간접비 비고3

        	this.parent.ds_dlvgCompEmpDspcPmiw.setColumn(0, "FI_BNF_CNTN1", this.edt_FiBnfCntn1.value); //복리후생비 세부내역1
        	this.parent.ds_dlvgCompEmpDspcPmiw.setColumn(0, "FI_BNF_CNTN2", this.edt_FiBnfCntn2.value); //복리후생비 세부내역2
        	this.parent.ds_dlvgCompEmpDspcPmiw.setColumn(0, "FI_BNF_CNTN3", this.edt_FiBnfCntn3.value); //복리후생비 세부내역3

        	this.parent.ds_dlvgCompEmpDspcPmiw.setColumn(0, "FI_BNF_AM1", this.mae_FiBnfAm1.value); //복리후생비 월소용액1
        	this.parent.ds_dlvgCompEmpDspcPmiw.setColumn(0, "FI_BNF_AM2", this.mae_FiBnfAm2.value); //복리후생비 월소용액2
        	this.parent.ds_dlvgCompEmpDspcPmiw.setColumn(0, "FI_BNF_AM3", this.mae_FiBnfAm3.value); //복리후생비 월소용액3

        	this.parent.ds_dlvgCompEmpDspcPmiw.setColumn(0, "FI_BNF_RMK1", this.edt_FiBnfRmk1.value); //복리후생비 비고1
        	this.parent.ds_dlvgCompEmpDspcPmiw.setColumn(0, "FI_BNF_RMK2", this.edt_FiBnfRmk2.value); //복리후생비 비고2
        	this.parent.ds_dlvgCompEmpDspcPmiw.setColumn(0, "FI_BNF_RMK3", this.edt_FiBnfRmk3.value); //복리후생비 비고3

        	this.parent.ds_dlvgCompEmpDspcPmiw.setColumn(0, "ETC_TXPN_CNTN", this.edt_EtcTxpnCntn.value); //기타 제경비 등 세부내역
        	this.parent.ds_dlvgCompEmpDspcPmiw.setColumn(0, "ETC_TXPN_AM", this.mae_EtcTxpnAm.value); //기타 제경비 등 월 소용액
        	this.parent.ds_dlvgCompEmpDspcPmiw.setColumn(0, "ETC_TXPN_RMK", this.edt_EtcTxpnRmk.value); //기타 제경비 등 비고

        	this.parent.ds_dlvgCompEmpDspcPmiw.setColumn(0, "CTR_CHRR_RTO", this.mae_ctrChrrRto.value); //계약담당자 비율
        	this.parent.ds_dlvgCompEmpDspcPmiw.setColumn(0, "CTR_PATN_RTO", this.mae_ctrPatnRto.value); //계약 상대자 비율

        	this.fn_ds_dlvgCompEmpDspcPmiw_update();
        }

        this.fn_ds_dlvgCompEmpDspcPmiw_update = function()
        {
        	this.parent.ds_dlvgCompEmpDspcPmiw.set_updatecontrol(false);
        	this.parent.ds_dlvgCompEmpDspcPmiw.setRowType(0, this.ds_dlvgCompEmpDspcPmiw.getRowType(0));
        	this.parent.ds_dlvgCompEmpDspcPmiw.set_updatecontrol(true);
        }

        this.fn_checkImportant = function(obj,arrParam)
        {
        	var objGrid = obj;
        	var arrList = arrParam.split(",");

        	if (arrList.length == 0) return false;

        	var dsBind = this.gfn_getDataset(objGrid.binddataset);
        	if (dsBind != undefined) {
        		for (var iRow=0; iRow<dsBind.rowcount; iRow++) {
        			var iRowType = dsBind.getRowType(iRow);
        			if (iRowType == 8) continue;

        			for (var i=0; i<arrList.length; i++) {
        				var sColNm = arrList[i];
        				var iCellIdx = this.gfn_getCellIdx(objGrid, sColNm);
        				var sColVal = String(dsBind.getColumn(iRow, sColNm)).trim();
        				if (this.gfn_isNull(sColVal)) {
        					var bSucc = objGrid.setCellPos(iCellIdx);
        					return false;
        				}
        			}
        		}
        	}
        	return true;
        }

        this.ds_dspcPerWrkPrdPmiw_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "WRK_ST_HR") {
        		var WRK_ST_HR = this.ds_dspcPerWrkPrdPmiw.getColumn(this.ds_dspcPerWrkPrdPmiw.rowposition, "WRK_ST_HR");

        		if (WRK_ST_HR != "") {
        			WRK_ST_HR =    this.fn_Time(WRK_ST_HR , "근무 시간 시작 ");
        			if (WRK_ST_HR  == false) {
        				this.alert("근무 시간 시작 시간을 정확하게  입력하세요.");
        				return false;
        			} else {
        				this.ds_dspcPerWrkPrdPmiw.setColumn(this.ds_dspcPerWrkPrdPmiw.rowposition, "WRK_ST_HR", WRK_ST_HR);
        			}
        		}
        	}

        	if (e.columnid == "WRK_ED_HR") {
        		var WRK_ED_HR = this.ds_dspcPerWrkPrdPmiw.getColumn(this.ds_dspcPerWrkPrdPmiw.rowposition, "WRK_ED_HR");

        		if (WRK_ED_HR != "") {
        			WRK_ED_HR = this.fn_Time(WRK_ED_HR, "근무 시간 종료 ");
        			if (WRK_ED_HR == false) {
        				this.alert("근무 시간 종료 시간을 정확하게  입력하세요.");
        				return false;
        			} else {
        				this.ds_dspcPerWrkPrdPmiw.setColumn(this.ds_dspcPerWrkPrdPmiw.rowposition, "WRK_ED_HR", WRK_ED_HR);
        			}
        		}
        	}

        	if (e.columnid == "RCS_ST_HR") {
        		var RCS_ST_HR = this.ds_dspcPerWrkPrdPmiw.getColumn(this.ds_dspcPerWrkPrdPmiw.rowposition, "RCS_ST_HR");

        		if (RCS_ST_HR != "") {
        			RCS_ST_HR =    this.fn_Time(RCS_ST_HR , "휴계 시간 시작 ");
        			if (RCS_ST_HR  == false) {
        				this.alert("휴계 시간 시작 시간을 정확하게  입력하세요.");
        				return false;
        			} else {
        				this.ds_dspcPerWrkPrdPmiw.setColumn(this.ds_dspcPerWrkPrdPmiw.rowposition, "RCS_ST_HR", RCS_ST_HR);
        			}
        		}
        	}
        	 if (e.columnid == "RCS_ED_HR") {
        		var RCS_ED_HR = this.ds_dspcPerWrkPrdPmiw.getColumn(this.ds_dspcPerWrkPrdPmiw.rowposition, "RCS_ED_HR");

        		if (RCS_ED_HR != "") {
        			RCS_ED_HR =    this.fn_Time(RCS_ED_HR , "휴계 시간 종료 ");
        			if (RCS_ED_HR  == false) {
        				this.alert("휴계 시간 종료 시간을 정확하게  입력하세요.");
        				return false;
        			} else {
        				this.ds_dspcPerWrkPrdPmiw.setColumn(this.ds_dspcPerWrkPrdPmiw.rowposition, "RCS_ED_HR", RCS_ED_HR);
        			}
        		}
        	}

        	this.parent.ds_dspcPerWrkPrdPmiw.copyData(this.ds_dspcPerWrkPrdPmiw);
        	this.fn_ds_dspcPerWrkPrdPmiw_update();
        }

        this.fn_Time = function(varTime ,strTitletext)
        {
         	var wrkStHr1 = "0";
        	var wrkStHr2 = "0";
        	var wrkStHr3 = "0";
        	var wrkStHr4 = "0";

        	if (varTime.substr(0, 1) != " ") {
        		wrkStHr1 = varTime.substr(0, 1);
        	}

        	if (varTime.substr(1, 1) != " ") {
        		wrkStHr2 = varTime.substr(1, 1);
        		var wrkStHr=  nexacro.toNumber( wrkStHr1+wrkStHr2);
        		if (wrkStHr < 1 ||  wrkStHr > 24) {
        			this.alert(strTitletext + "시간을 정확하게  입력하세요.");
        			return false;
        		}
        	}

        	if (varTime.substr(2, 1) != " ") {
        		wrkStHr3 = varTime.substr(2, 1);
        	}

        	if (varTime.substr(3, 1) != " ") {
        		wrkStHr4 = varTime.substr(3, 1);
        		var wrkStHr=  nexacro.toNumber( wrkStHr3+wrkStHr4);

        		if (wrkStHr < 0 ||  wrkStHr > 59) {
        			this.alert(strTitletext + "시간을 정확하게  입력하세요.");
        			return false;
        		}
        	}
        	return wrkStHr1+wrkStHr2+wrkStHr3+wrkStHr4;
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_dspcPerWrkPrdPmiw.addEventHandler("oncolumnchanged", this.ds_dspcPerWrkPrdPmiw_oncolumnchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.edt_dspcBass.addEventHandler("ontextchanged", this.OMG_DS_SC_211323_ontextchanged, this);
            this.edt_LbrcsDrtcsCntn1.addEventHandler("ontextchanged", this.OMG_DS_SC_211323_ontextchanged, this);
            this.edt_LbrcsDrtcsCntn2.addEventHandler("ontextchanged", this.OMG_DS_SC_211323_ontextchanged, this);
            this.edt_LbrcsOhcsCntn1.addEventHandler("ontextchanged", this.OMG_DS_SC_211323_ontextchanged, this);
            this.mae_LbrcsDrtcsAm1.addEventHandler("ontextchanged", this.OMG_DS_SC_211323_ontextchanged, this);
            this.mae_LbrcsDrtcsAm2.addEventHandler("ontextchanged", this.OMG_DS_SC_211323_ontextchanged, this);
            this.edt_LbrcsDrtcsRmk1.addEventHandler("ontextchanged", this.OMG_DS_SC_211323_ontextchanged, this);
            this.edt_LbrcsDrtcsRmk2.addEventHandler("ontextchanged", this.OMG_DS_SC_211323_ontextchanged, this);
            this.edt_LbrcsOhcsRmk1.addEventHandler("ontextchanged", this.OMG_DS_SC_211323_ontextchanged, this);
            this.mae_LbrcsOhcsAm1.addEventHandler("ontextchanged", this.OMG_DS_SC_211323_ontextchanged, this);
            this.edt_LbrcsOhcsCntn2.addEventHandler("ontextchanged", this.OMG_DS_SC_211323_ontextchanged, this);
            this.edt_LbrcsOhcsRmk2.addEventHandler("ontextchanged", this.OMG_DS_SC_211323_ontextchanged, this);
            this.mae_LbrcsOhcsAm2.addEventHandler("ontextchanged", this.OMG_DS_SC_211323_ontextchanged, this);
            this.edt_LbrcsOhcsCntn3.addEventHandler("ontextchanged", this.OMG_DS_SC_211323_ontextchanged, this);
            this.edt_LbrcsOhcsRmk3.addEventHandler("ontextchanged", this.OMG_DS_SC_211323_ontextchanged, this);
            this.mae_LbrcsOhcsAm3.addEventHandler("ontextchanged", this.OMG_DS_SC_211323_ontextchanged, this);
            this.edt_FiBnfCntn1.addEventHandler("ontextchanged", this.OMG_DS_SC_211323_ontextchanged, this);
            this.edt_FiBnfRmk1.addEventHandler("ontextchanged", this.OMG_DS_SC_211323_ontextchanged, this);
            this.mae_FiBnfAm1.addEventHandler("ontextchanged", this.OMG_DS_SC_211323_ontextchanged, this);
            this.edt_FiBnfCntn2.addEventHandler("ontextchanged", this.OMG_DS_SC_211323_ontextchanged, this);
            this.edt_FiBnfRmk2.addEventHandler("ontextchanged", this.OMG_DS_SC_211323_ontextchanged, this);
            this.mae_FiBnfAm2.addEventHandler("ontextchanged", this.OMG_DS_SC_211323_ontextchanged, this);
            this.edt_FiBnfCntn3.addEventHandler("ontextchanged", this.OMG_DS_SC_211323_ontextchanged, this);
            this.edt_FiBnfRmk3.addEventHandler("ontextchanged", this.OMG_DS_SC_211323_ontextchanged, this);
            this.mae_FiBnfAm3.addEventHandler("ontextchanged", this.OMG_DS_SC_211323_ontextchanged, this);
            this.edt_EtcTxpnCntn.addEventHandler("ontextchanged", this.OMG_DS_SC_211323_ontextchanged, this);
            this.edt_EtcTxpnRmk.addEventHandler("ontextchanged", this.OMG_DS_SC_211323_ontextchanged, this);
            this.mae_EtcTxpnAm.addEventHandler("ontextchanged", this.OMG_DS_SC_211323_ontextchanged, this);
            this.grd_dspcPerWrkPrd.addEventHandler("onheadclick", this.ds_dspcPerWrkPrdPmiw_onheadclick, this);
            this.btn_dspcPerWrkPrdPmiw_add.addEventHandler("onclick", this.btn_dspcPerWrkPrdPmiw_addRow_onclick, this);
            this.btn_dspcPerWrkPrdPmiw_del.addEventHandler("onclick", this.btn_dspcPerWrkPrdPmiw_delRow_onclick, this);
            this.Static03.addEventHandler("onclick", this.Div06_Static04_onclick, this);
            this.mae_ctrChrrRto.addEventHandler("ontextchanged", this.OMG_DS_SC_211323_ontextchanged, this);
            this.mae_ctrPatnRto.addEventHandler("ontextchanged", this.OMG_DS_SC_211323_ontextchanged, this);

        };

        this.loadIncludeScript("OMG_DS_SC_211323.xfdl");

       
    };
}
)();
