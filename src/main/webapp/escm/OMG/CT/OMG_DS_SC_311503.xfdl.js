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
                this.set_name("OMG_DS_SC_311503");
                this.set_titletext("특약매입거래계약서(테넌트)");
                this._setFormPosition(0,0,788,890);
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
            obj._setContents("<ColumnInfo><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\" sumtext=\"전자계약서번호\"/><Column id=\"MN_CTRW_KDC\" type=\"STRING\" size=\"256\" sumtext=\"메인계약서종류코드\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_STY_VER\" type=\"STRING\" size=\"256\" sumtext=\"계약서양식버젼\"/><Column id=\"CNR_DT\" type=\"STRING\" size=\"256\" sumtext=\"검수일\"/><Column id=\"PSG_MM\" type=\"STRING\" size=\"256\" sumtext=\"경과분/월\"/><Column id=\"PSG_DD\" type=\"STRING\" size=\"256\" sumtext=\"경과분/일\"/><Column id=\"ETR_FEE\" type=\"STRING\" size=\"256\" sumtext=\"수탁수수료\"/><Column id=\"PHD_FEERT\" type=\"STRING\" size=\"256\" sumtext=\"물류수수료율\"/><Column id=\"LIG_PLTPE\" type=\"STRING\" size=\"256\" sumtext=\"주류파렛트당\"/><Column id=\"MEXP_DD\" type=\"STRING\" size=\"256\" sumtext=\"관리비일\"/><Column id=\"RT\" type=\"STRING\" size=\"256\" sumtext=\"마진율\"/><Column id=\"BLM_GRMY\" type=\"STRING\" size=\"256\" sumtext=\"하자보증금\"/><Column id=\"WRS_PRM_PY\" type=\"STRING\" size=\"256\" sumtext=\"상품대금 지금\"/><Column id=\"GRMY\" type=\"STRING\" size=\"256\" sumtext=\"보증금\"/><Column id=\"WRS_SPYAM\" type=\"STRING\" size=\"256\" sumtext=\"상품공급액\"/><Column id=\"CTR_CLO\" type=\"STRING\" size=\"256\" sumtext=\"계약해지\"/><Column id=\"SCTR_SJT\" type=\"STRING\" size=\"256\" sumtext=\"특약사항\"/><Column id=\"CTRW_FLNM\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일 이름\"/><Column id=\"CTRW_FL_PATHNM\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일전체경로\"/><Column id=\"CTRW_FL_SZE\" type=\"STRING\" size=\"256\" sumtext=\"계약서 파일크기\"/><Column id=\"APDFLNM\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일 이름\"/><Column id=\"APDFL_PATHNM\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일전체경로\"/><Column id=\"APDFL_SZE\" type=\"STRING\" size=\"256\" sumtext=\"첨부파일크기\"/><Column id=\"SYS_FLNM\" type=\"STRING\" size=\"256\" sumtext=\"시스템 파일이름\"/><Column id=\"CTRW_TINM\" type=\"STRING\" size=\"256\" sumtext=\"제목\"/><Column id=\"CTRW_CNTN\" type=\"STRING\" size=\"256\" sumtext=\"계약서내용\"/><Column id=\"CTRW_SGNT\" type=\"STRING\" size=\"256\" sumtext=\"계약서서명\"/><Column id=\"BRAND_N\" type=\"STRING\" size=\"256\" sumtext=\"브랜드명\"/><Column id=\"RETURN_DATE\" type=\"STRING\" size=\"256\" sumtext=\"반품기간\"/><Column id=\"PHD_FEERT1\" type=\"STRING\" size=\"256\"/><Column id=\"PHD_FEERT2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"ETC4\" type=\"STRING\" size=\"256\"/><Column id=\"ETC5\" type=\"STRING\" size=\"256\"/><Column id=\"ETC6\" type=\"STRING\" size=\"256\"/><Column id=\"ETC7\" type=\"STRING\" size=\"256\"/><Column id=\"ETC8\" type=\"STRING\" size=\"256\"/><Column id=\"ETC9\" type=\"STRING\" size=\"256\"/><Column id=\"ETCA\" type=\"STRING\" size=\"256\"/><Column id=\"ETC10\" type=\"STRING\" size=\"256\" sumtext=\"우편번호1\"/><Column id=\"ETC11\" type=\"STRING\" size=\"256\" sumtext=\"우편번호2\"/><Column id=\"ETC12\" type=\"STRING\" size=\"256\" sumtext=\"주소1\"/><Column id=\"ETC13\" type=\"STRING\" size=\"256\" sumtext=\"주소2\"/><Column id=\"ETC14\" type=\"STRING\" size=\"256\" sumtext=\"점유면적\"/><Column id=\"ETC15\" type=\"STRING\" size=\"256\" sumtext=\"공유면적\"/><Column id=\"ETC16\" type=\"STRING\" size=\"256\" sumtext=\"면적 계\"/><Column id=\"ETC17\" type=\"STRING\" size=\"256\" sumtext=\"임대차기간 시작일\"/><Column id=\"ETC18\" type=\"STRING\" size=\"256\" sumtext=\"임대차기간 종료일\"/><Column id=\"ETC19\" type=\"STRING\" size=\"256\" sumtext=\"임대보증금\"/><Column id=\"ETC20\" type=\"STRING\" size=\"256\" sumtext=\"월임대료 금액\"/><Column id=\"ETC21\" type=\"STRING\" size=\"256\" sumtext=\"월임대료 %\"/><Column id=\"ETC22\" type=\"STRING\" size=\"256\" sumtext=\"업종\"/><Column id=\"ETC23\" type=\"STRING\" size=\"256\" sumtext=\"매장명\"/><Column id=\"ETC24\" type=\"STRING\" size=\"256\" sumtext=\"주요판매상품1 4000 바이트\"/><Column id=\"ETC25\" type=\"STRING\" size=\"256\" sumtext=\"주요판매상품2 4000 바이트\"/><Column id=\"ETC26\" type=\"STRING\" size=\"256\" sumtext=\"주요판매상품3 4000 바이트\"/><Column id=\"ETC27\" type=\"STRING\" size=\"256\" sumtext=\"주요판매상품4 4000 바이트\"/><Column id=\"ETC28\" type=\"STRING\" size=\"256\" sumtext=\"주요판매상품5 4000 바이트\"/><Column id=\"ETC29\" type=\"STRING\" size=\"256\" sumtext=\"임대보증금 납부일자\"/><Column id=\"ETC30\" type=\"STRING\" size=\"256\" sumtext=\"임대보증금 연체료율\"/><Column id=\"ETC31\" type=\"STRING\" size=\"256\" sumtext=\"보증금 공제\"/><Column id=\"ETC32\" type=\"STRING\" size=\"256\" sumtext=\"임대료 납부일\"/><Column id=\"ETC33\" type=\"STRING\" size=\"256\" sumtext=\"임대료 연체료율\"/><Column id=\"ETC34\" type=\"STRING\" size=\"256\" sumtext=\"판매대금 지급일\"/><Column id=\"ETC35\" type=\"STRING\" size=\"256\" sumtext=\"관리비 및 시설 이용료 납부\"/><Column id=\"ETC36\" type=\"STRING\" size=\"256\" sumtext=\"비밀유지기간\"/><Column id=\"ETC37\" type=\"STRING\" size=\"256\" sumtext=\"임대보증금\"/><Column id=\"ETC38\" type=\"STRING\" size=\"256\" sumtext=\"지연이자\"/><Column id=\"ETC39\" type=\"STRING\" size=\"256\" sumtext=\"임대료 위약벌\"/><Column id=\"ETC40\" type=\"STRING\" size=\"256\"/><Column id=\"ETC41\" type=\"STRING\" size=\"256\"/><Column id=\"ETC42\" type=\"STRING\" size=\"256\"/><Column id=\"ETC43\" type=\"STRING\" size=\"256\"/><Column id=\"ETC44\" type=\"STRING\" size=\"256\"/><Column id=\"ETC45\" type=\"STRING\" size=\"256\"/><Column id=\"ETC46\" type=\"STRING\" size=\"256\"/><Column id=\"ETC47\" type=\"STRING\" size=\"256\"/><Column id=\"ETC48\" type=\"STRING\" size=\"256\"/><Column id=\"ETC49\" type=\"STRING\" size=\"256\"/><Column id=\"ETC50\" type=\"STRING\" size=\"256\"/><Column id=\"ETC51\" type=\"STRING\" size=\"256\"/><Column id=\"ETC52\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_ctEtcItemList", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"1\"/><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"STANDARD\" type=\"STRING\" size=\"256\"/><Column id=\"COUNTRY\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"256\"/><Column id=\"BRAND\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"UPR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_file", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"32\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"32\"/><Column id=\"FILESIZE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"32\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_uploadresult", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"32\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"32\"/><Column id=\"FILESIZE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"32\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_branch", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BIZ_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static25", "absolute", "17.77%", "378", null, "29", "0%", null, this);
            obj.set_taborder("167");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "17.77%", "310", null, "29", "0%", null, this);
            obj.set_taborder("160");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static62", "absolute", "16.88%", "659", null, "29", "0.89%", null, this);
            obj.set_taborder("87");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static72", "absolute", "16.88%", "715", null, "29", "0.89%", null, this);
            obj.set_taborder("93");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "16.88%", "687", null, "29", "0.89%", null, this);
            obj.set_taborder("132");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "16.75%", "144", null, "29", "0.89%", null, this);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static86", "absolute", "0", "121", "59.26%", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("계약기간");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "0", "144", null, "29", "70.05%", null, this);
            obj.set_taborder("42");
            obj.set_text("계약의 유효기간");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Calendar("edt_ETC17", "absolute", "30.33%", "148", null, "21", "57.49%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj.set_readonly("false");
            obj.set_enable("false");

            obj = new Static("Static131", "absolute", "42.77%", "148", null, "21", "56.09%", null, this);
            obj.set_taborder("44");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("edt_ETC18", "absolute", "43.91%", "148", null, "21", "43.78%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");
            obj.set_value("null");
            obj.set_readonly("false");

            obj = new Static("Static03", "absolute", "0", "634", "59.26%", "21", null, null, this);
            obj.set_taborder("77");
            obj.set_text("매장의 위치 등");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "0", "10", "59.26%", "21", null, null, this);
            obj.set_taborder("78");
            obj.set_text("[특약매입거래계약서]");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("left middle");
            obj.style.set_padding("0 0 1 5");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "0", "593", "59.26%", "21", null, null, this);
            obj.set_taborder("81");
            obj.set_text("[첨부]");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("left middle");
            obj.style.set_padding("0 0 1 5");
            this.addChild(obj.name, obj);

            obj = new Static("Static64", "absolute", "0", "659", null, "29", "80.96%", null, this);
            obj.set_taborder("88");
            obj.set_text("점포명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC21", "absolute", "19.67%", "663", null, "21", "51.4%", null, this);
            obj.set_taborder("8");
            obj.style.set_align("left middle");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC22", "absolute", "63.32%", "663", null, "21", "28.93%", null, this);
            obj.set_taborder("9");
            obj.style.set_align("right middle");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            this.addChild(obj.name, obj);

            obj = new Static("Static71", "absolute", "49.75%", "659", null, "29", "37.31%", null, this);
            obj.set_taborder("92");
            obj.set_text("운영층");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static73", "absolute", "0", "715", null, "29", "80.96%", null, this);
            obj.set_taborder("94");
            obj.set_text("매장 위치(첨부파일)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static65", "absolute", "16.88%", "771", null, "111", "0.89%", null, this);
            obj.set_taborder("95");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static66", "absolute", "0%", "771", null, "111", "80.96%", null, this);
            obj.set_taborder("96");
            obj.set_text("기타특약사항");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload", "absolute", "19.42%", "719", null, "24", "20.43%", null, this);
            obj.set_taborder("12");
            obj.getSetter("retry").set("0");
            obj.set_scrollbars("none");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static85", "absolute", "49.75%", "687", null, "29", "37.31%", null, this);
            obj.set_taborder("129");
            obj.set_text("매장 위치");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC24", "absolute", "63.32%", "691", null, "21", "5.58%", null, this);
            obj.set_taborder("11");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            this.addChild(obj.name, obj);

            obj = new TextArea("edt_ETC52", "absolute", "19.67%", "776", null, "100", "1.78%", null, this);
            obj.set_taborder("18");
            obj.set_scrollbars("autovert");
            obj.set_wordwrap("char");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("1998");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC23", "absolute", "19.67%", "691", null, "21", "51.4%", null, this);
            obj.set_taborder("10");
            obj.style.set_align("left middle");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "0", "687", null, "29", "80.96%", null, this);
            obj.set_taborder("137");
            obj.set_text("영업시간");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "16.88%", "743", null, "29", "0.89%", null, this);
            obj.set_taborder("138");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "49.75%", "743", null, "29", "37.31%", null, this);
            obj.set_taborder("139");
            obj.set_text("판촉사원 수");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "0", "743", null, "29", "80.96%", null, this);
            obj.set_taborder("142");
            obj.set_text("매장면적");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "28.43%", "747", null, "21", "68.65%", null, this);
            obj.set_taborder("143");
            obj.set_text("㎡");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_ETC25", "absolute", "19.67%", "747", null, "21", "72.34%", null, this);
            obj.set_taborder("13");
            obj.set_mask("9990.00");
            obj.set_limitbymask("both");
            obj.style.set_align("right middle");
            obj.getSetter("inputtype").set("number");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "72.08%", "747", null, "21", "25%", null, this);
            obj.set_taborder("145");
            obj.set_text("명");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_ETC26", "absolute", "63.32%", "747", null, "21", "28.68%", null, this);
            obj.set_taborder("14");
            obj.set_mask("9990");
            obj.set_limitbymask("both");
            obj.style.set_align("right middle");
            obj.getSetter("inputtype").set("number");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delPlan", "absolute", "81.22%", "719", null, "21", "11.17%", null, this);
            obj.set_taborder("149");
            obj.set_text("변경");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "17.77%", "215", null, "29", "0%", null, this);
            obj.set_taborder("150");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "0", "215", null, "29", "70.05%", null, this);
            obj.set_taborder("151");
            obj.set_text("현금지급조건");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "0", "192", "59.26%", "21", null, null, this);
            obj.set_taborder("152");
            obj.set_text("납품대금 지금 및 감액금지 등");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "30.33%", "219", null, "21", "54.7%", null, this);
            obj.set_taborder("153");
            obj.set_text("매월말일 마감 후 익월");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_ETC10", "absolute", "46.19%", "219", null, "21", "49.24%", null, this);
            obj.set_taborder("2");
            obj.set_mask("990");
            obj.set_limitbymask("both");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "51.14%", "219", null, "21", "43.78%", null, this);
            obj.set_taborder("155");
            obj.set_text("일");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "310", null, "29", "70.05%", null, this);
            obj.set_taborder("156");
            obj.set_text("마진율");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "35.28%", "314", null, "21", "59.64%", null, this);
            obj.set_taborder("159");
            obj.set_text("%");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC12", "absolute", "30.33%", "314", null, "21", "65.1%", null, this);
            obj.set_taborder("4");
            obj.style.set_align("right middle");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("20");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "50%", "310", null, "29", "21.32%", null, this);
            obj.set_taborder("161");
            obj.set_text("부가가치세의 세율");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "79.06%", "314", null, "21", "9.26%", null, this);
            obj.set_taborder("162");
            obj.set_text("마진율의 10%인");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "95.3%", "314", null, "21", "2.28%", null, this);
            obj.set_taborder("163");
            obj.set_text("%");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC13", "absolute", "90.48%", "314", null, "21", "4.95%", null, this);
            obj.set_taborder("5");
            obj.style.set_align("right middle");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("20");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "0", "260", "59.26%", "21", null, null, this);
            obj.set_taborder("165");
            obj.set_text("판매수수료율 등");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "0", "378", null, "29", "70.05%", null, this);
            obj.set_taborder("166");
            obj.set_text("하자보증보험증권의 금액 또는 보증금");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC14", "absolute", "58.76%", "382", null, "21", "36.68%", null, this);
            obj.set_taborder("6");
            obj.style.set_align("right middle");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("20");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "63.71%", "382", null, "21", "31.22%", null, this);
            obj.set_taborder("169");
            obj.set_text("%");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "30.33%", "382", null, "21", "40.74%", null, this);
            obj.set_taborder("170");
            obj.set_text("계약종료일 직전 월의 판매된 상품대금의");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "17.77%", "282", null, "29", "0%", null, this);
            obj.set_taborder("171");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "0", "282", null, "29", "70.05%", null, this);
            obj.set_taborder("172");
            obj.set_text("판매대금 공제가능 판매수익");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC11", "absolute", "43.78%", "286", null, "21", "51.65%", null, this);
            obj.set_taborder("3");
            obj.style.set_align("right middle");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("20");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "48.86%", "286", null, "21", "36.93%", null, this);
            obj.set_taborder("174");
            obj.set_text("%의 판매수수료율");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "30.33%", "286", null, "21", "55.96%", null, this);
            obj.set_taborder("175");
            obj.set_text("상품의 판매대금 X");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "0", "355", "59.26%", "21", null, null, this);
            obj.set_taborder("176");
            obj.set_text("사후 고객관리를 위한 조치");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "16.88%", "451", null, "111", "0.89%", null, this);
            obj.set_taborder("177");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "0%", "451", null, "111", "80.96%", null, this);
            obj.set_taborder("178");
            obj.set_text("기타특약사항");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new TextArea("edt_ETC51", "absolute", "19.67%", "456", null, "100", "1.78%", null, this);
            obj.set_taborder("7");
            obj.set_scrollbars("autovert");
            obj.set_wordwrap("char");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("1998");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "0", "429", "59.26%", "21", null, null, this);
            obj.set_taborder("180");
            obj.set_text("기타");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "15.74%", "75", null, "29", "0.89%", null, this);
            obj.set_taborder("181");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "0", "75", null, "29", "82.99%", null, this);
            obj.set_taborder("182");
            obj.set_text("계약사업장 선택");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "0", "50", "59.26%", "21", null, null, this);
            obj.set_taborder("183");
            obj.set_text("계약사업장");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_ETC8", "absolute", "17.39%", "79", "247", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("184");
            obj.set_innerdataset("@ds_branch");
            obj.set_codecolumn("BIZ_NUMBER");
            obj.set_datacolumn("CLNTNM");

            obj = new Edit("edt_ETC9", "absolute", "48.98%", "79", "30", "21", null, null, this);
            obj.set_taborder("185");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_visible("false");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 788, 890, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("특약매입거래계약서(테넌트)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item15","edt_ETC17","value","ds_eltCtrwDtl01","ETC17");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","edt_ETC18","value","ds_eltCtrwDtl01","ETC18");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","edt_ETC21","value","ds_eltCtrwDtl01","ETC21");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","edt_ETC22","value","ds_eltCtrwDtl01","ETC22");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","edt_ETC24","value","ds_eltCtrwDtl01","ETC24");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","edt_ETC52","value","ds_eltCtrwDtl01","ETC52");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edt_ETC23","value","ds_eltCtrwDtl01","ETC23");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edt_ETC25","value","ds_eltCtrwDtl01","ETC25");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edt_ETC26","value","ds_eltCtrwDtl01","ETC26");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_ETC10","value","ds_eltCtrwDtl01","ETC10");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edt_ETC12","value","ds_eltCtrwDtl01","ETC12");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_ETC13","value","ds_eltCtrwDtl01","ETC13");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edt_ETC14","value","ds_eltCtrwDtl01","ETC14");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","edt_ETC11","value","ds_eltCtrwDtl01","ETC11");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","edt_ETC51","value","ds_eltCtrwDtl01","ETC51");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","cbo_ETC8","value","ds_eltCtrwDtl01","ETC8");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","edt_ETC9","value","ds_eltCtrwDtl01","ETC9");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_311503.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_311503.xfdl", function() {
        //include "lib::comLib.xjs";

        var fv_position = 0; //위치값
        var fv_chk = 0 ;  //데이터 체크 

        this.form_onload = function(obj,e)
        {   
        	this.gfn_setInitForm(obj, e); //공통
        	//this.ds_eltCtrwDtl01.addRow();
        }

        this.fn_afterFormOnload = function()
        {
        	// 파일업로드 설정
        	var fileParam = {
        		form:this,
        		param:[{
        				fileObj: this.FileUpload,
        				maxSize:3,						//허용할 파일 사이즈(MB)
        				maxLength:1,					//허용할 파일갯수
        				ext:['jpg','jpeg','png'],		//허용할 확장자명
        				upload_after_succ: 'FileUpload_onsuccess'    	//파일 업로드 성공후 호출할 함수이름
        			}]
        	};
        	this.gfn_addEventFileUpload(fileParam);
        	this.ds_branch.copyData(this.parent.ds_branch, true); // 계약사업장 목록
        	
        	// 폼양식
        	for (var i = 0 ; i < this.parent.ds_etcEltStylAmm.rowcount; i++) {
        		if (this.parent.ds_etcEltStylAmm.getColumn(i, "CTRW_KDC") == "143") {
        			this.ds_etcEltStylAmm101.copyRow(0, this.parent.ds_etcEltStylAmm, i);
        		}
        	}
        	//trace(this.parent.ds_eltCtrwDtl.saveXML()) ;
        	this.parent.ds_eltCtrwDtl.set_enableevent(false);

        	for (var i = 0; i < this.parent.ds_eltCtrwDtl.rowcount; i++) {
        		if (this.parent.ds_eltCtrwDtl.getColumn(i, "MN_CTRW_KDC") == "143") {
        			fv_chk = 1 ;
        			
        			if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(i, "CTRW_STY_VER")) == "") {
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CTRW_STY_VER" , this.ds_etcEltStylAmm101.getColumn(0,"CTRW_STY_VER") ) ;		
        			}
        			if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(i, "CHG_SQNO")) == "") {
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CHG_SQNO" , this.parent.ds_register.getColumn(0 ,"CHG_SQNO"));
        			}
        			
        			this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC17", this.parent.cal_ctrStDt.value) ; // 계약 시작일
        			this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC18", this.parent.cal_ctrEdDt.value) ; // 계약 종료일
        			if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(fv_position, "ETC8")) == "") {
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC8", "0000000000"); // 계약사업장코드(테넌트)
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC9", "본부통합"); // 계약사업장명(테넌트)
        			}
        						
        	        //this.ds_eltCtrwDtl01.set_updatecontrol(true); // 이걸 해주지 않으면 자동으로 바뀌지 않음
        			this.ds_eltCtrwDtl01.addRow();
        			this.ds_eltCtrwDtl01.copyRow(0, this.parent.ds_eltCtrwDtl, fv_position);
        						
        			if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(fv_position, "ETC49")) != "") {
        				this.FileUpload.set_enable(false); // 수정시에 기본 비활성
        				this.btn_delPlan.set_visible(true);
        			}
        			
        			// alert(this.ds_eltCtrwDtl01.saveXML());
        			this.parent.ds_eltCtrwDtl.set_enableevent(true);
        		}
        	}
        }

        /*
         * 편집값 세팅 
         */
        this.OMG_DS_SC_311301_ontextchanged = function(obj,e)
        {
        	if (obj.id == "edt_ETC52") {
        		// 꺽쇠 사용 방지
        		var text = this.edt_ETC52.value;
        		if (!this.gfn_isNull(text)) {
        			var lc = text.indexOf("^");
        			if (lc != -1 ) {
        				alert('^는 사용하실 수 없습니다.');
        				text = nexacro.replaceAll(text,"^"," ");
        				this.edt_ETC52.set_value(text);
        			}
        		}
        	} else if (obj.id == "edt_ETC51") {
        		// 꺽쇠 사용 방지
        		var text2 = this.edt_ETC51.value;
        		if (!this.gfn_isNull(text2)) {
        			var lc = text2.indexOf("^");
        			if (lc != -1 ) {
        				alert('^는 사용하실 수 없습니다.');
        				text2 = nexacro.replaceAll(text2,"^"," ");
        				this.edt_ETC51.set_value(text2);
        			}
        		}
        	} else if (obj.id == "edt_ETC11") {
        		// 마진율, 부가세율 자동입력
        		if (this.gfn_isNum(this.edt_ETC11.value)) {
        			var temp = parseFloat(this.edt_ETC11.value);
        			this.edt_ETC12.set_value(nexacro.round(temp / 1.1, 2));
        			this.edt_ETC13.set_value(nexacro.round(temp / 1.1 * 0.1, 2));
        		}
         	}

        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC8"  , this.cbo_ETC8.value) ; // 계약사업장코드(테넌트)
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC9"  , this.edt_ETC9.value) ; // 계약사업장명(테넌트)
            this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC10" , this.edt_ETC10.value) ; // 현금지급조건
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC11" , this.edt_ETC11.value) ; // 판매수수료율
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC12" , this.edt_ETC12.value) ; // 마진율
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC13" , this.edt_ETC13.value) ; // 부가세율
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC14" , this.edt_ETC14.value) ; // 보험증권 또는 보증금
        	
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC17" , this.edt_ETC17.value) ; // 계약유효 시작일
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC18" , this.edt_ETC18.value) ; // 계약유효 종료일
        	
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC21" , this.edt_ETC21.value) ; // 점포명
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC22" , this.edt_ETC22.value) ; // 운영층
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC23" , this.edt_ETC23.value) ; // 영업시간
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC24" , this.edt_ETC24.value) ; // 매장위치(텍스트)
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC25" , this.edt_ETC25.value) ; // 매장면적
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC26" , this.edt_ETC26.value) ; // 판촉사원 수
        	
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC51" , this.edt_ETC51.value) ; // 기타특약사항
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC52" , this.edt_ETC52.value) ; // 기타특약사항(첨부)
        }

        /* Validation Check */
        this.fn_validationCheck = function()
        {
            var strTitletext = "특약매입거래계약서(테넌트)";
            
        	// 계약사업장
        	if (this.gfn_nullToEmpty(this.cbo_ETC8.value) == "") {
        		alert("계약사업장을 선택해주세요.");
        		this.cbo_ETC8.setFocus();
        		return false;
        	}
        	
            // 현금지급조건
            if (this.gfn_nullToEmpty(this.edt_ETC10.value) == "") {
        		alert("현금지급조건을 입력해주세요.");
        		this.edt_ETC10.setFocus();
        		return false;
        	} else if (this.gfn_getNum(this.edt_ETC10.value) < 1 || this.gfn_getNum(this.edt_ETC10.value) > 31) {
        		alert("현금지급조건은 1~31일 이내로 입력해주세요.");
        		this.edt_ETC10.set_value("");
        		this.edt_ETC10.setFocus();
        		return false;
        	}
        	
        	// 판매수수료율
        	if (this.gfn_nullToEmpty(this.edt_ETC11.value) == "") {
        		alert("판매수수료율를 입력해주세요.");
        		this.edt_ETC11.setFocus();
        		return false;
        	}
        	
        	// 마진율
        	if (this.gfn_nullToEmpty(this.edt_ETC12.value) == "") {
        		alert("마진율을 입력해주세요. ");
        		this.edt_ETC12.setFocus();
        		return false;
        	}

        	// 부가가치세의 세율
        	if (this.gfn_nullToEmpty(this.edt_ETC13.value) == "") {
        		alert("부가가치세의 세율을 입력해주세요. ");
        		this.edt_ETC13.setFocus();
        		return false;
        	}
        	
        	// 하자보증보험증권 가입/보증금 예치
        	if (this.gfn_nullToEmpty(this.edt_ETC14.value) == "") {
        		alert("하자보증보험증권 가입 또는 보증금 예치 금액 비율을 입력해주세요.");
        		this.edt_ETC14.setFocus();
        		return false;
        	}

        	// 계약 유효기간 시작
        	if (this.gfn_nullToEmpty(this.edt_ETC17.value) == "") {
        		alert("계약 유효기간 시작날짜를 입력해주세요.");
        		this.edt_ETC17.setFocus();
        		return false;
        	}

        	// 계약 유효기간 종료
        	if (this.gfn_nullToEmpty(this.edt_ETC18.value) == "") {
        		alert("계약 유효기간  종료날짜를 입력해주세요.");
        		this.edt_ETC18.setFocus();
        		return false;
        	}

        	// 점포명
        	if (this.gfn_nullToEmpty(this.edt_ETC21.value) == "") {
        		alert("점포명을 입력해주세요.");
        		this.edt_ETC21.setFocus();
        		return false;
        	}

        	// 운영층
        	if (this.gfn_nullToEmpty(this.edt_ETC22.value) == "") {
        		alert("운영층을 입력해주세요.");
        		this.edt_ETC22.setFocus();
        		return false;
        	}

        	// 영업시간
        	if (this.gfn_nullToEmpty(this.edt_ETC23.value) == "") {
        		alert("영업시간을 입력해주세요.");
        		this.edt_ETC23.setFocus();
        		return false;
        	}

        	// 매장위치(텍스트)
        	if (this.gfn_nullToEmpty(this.edt_ETC24.value) == "") {
        		alert("매장위치를 입력해주세요.");
        		this.edt_ETC24.setFocus();
        		return false;
        	}

        	// 매장면적
        	if (this.gfn_nullToEmpty(this.edt_ETC25.value) == "") {
        		alert("매장면적을 입력해주세요.");
        		this.edt_ETC25.setFocus();
        		return false;
        	}

        	// 판촉사원 수
        	if (this.gfn_nullToEmpty(this.edt_ETC26.value) == "") {
        		alert("판촉사원 수를 입력해주세요.");
        		this.edt_ETC26.setFocus();
        		return false;
        	}
        	
        	// 매장위치(첨부파일)
        	if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(fv_position, "ETC49")) == "") {
        		alert("매장위치 첨부파일을 등록해주세요.");
        		return false;
        	}
        	
        	return true;
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	if (strId == "naTrplC") {
        		this.fn_naTrplC(strVal);
        	} else if (strId == "chrrSearch") {
        		this.fn_chrr(strVal);
        	}
        }

        this.FileUpload_onerror = function(obj,e)
        {
        	trace("FileUpload_onerror");
        	trace("e.errorcode: "+e.errorcode);
        	trace("e.errormsg: "+e.errormsg);	
        }

        this.FileUpload_onitemchanged = function(obj,e)
        {
            // alert("FileUpload_onitemchanged");   
        	this.gfn_callUpload(obj);
        }

        /*
         * 업로드처리이벤트 
         */
        this.FileUpload_onsuccess = function(obj,e)
        {
        	if( e.datasets == null ){
        		trace("업로드 실패");
        	} else {		
        		this.ds_uploadresult.copyData(e.datasets[0]);					
        		this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC49" , this.ds_uploadresult.getColumn(0,"ORGFNAME")) ;             // 매장위치: 첨부파일명   
        	    this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC50" , this.ds_uploadresult.getColumn(0,"SYSTEMFILENAME")) ;       // 매장위치:  시스템파일명
        	}	
        }

        // 도면 삭제
        this.btn_delPlan_onclick = function(obj,e)
        {
        	if (confirm("첨부파일을 변경하시겠습니까?")) {
        		this.FileUpload.set_enable(true);
        		this.FileUpload.deleteItem(0);
        		this.FileUpload.appendItem();
        		this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC49", ""); // 매장위치: 첨부파일명   
        	    this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC50", ""); // 매장위치: 시스템파일명
        	}
        }

        // 계약사업장 선택
        this.cbo_ETC8_onitemchanged = function(obj,e)
        {
        	this.edt_ETC9.set_value(e.posttext);
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC8", e.postvalue) ; // 계약사업장코드(테넌트)
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC9", e.posttext) ; // 계약사업장명(테넌트)
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_file.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.ds_uploadresult.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.edt_ETC21.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC21.addEventHandler("onkillfocus", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC22.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC22.addEventHandler("onkillfocus", this.OMG_DS_SC_311301_ontextchanged, this);
            this.FileUpload.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.edt_ETC24.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC24.addEventHandler("onkillfocus", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC52.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC52.addEventHandler("onkillfocus", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC23.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC23.addEventHandler("onkillfocus", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC25.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC25.addEventHandler("onkillfocus", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC26.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC26.addEventHandler("onkillfocus", this.OMG_DS_SC_311301_ontextchanged, this);
            this.btn_delPlan.addEventHandler("onclick", this.btn_delPlan_onclick, this);
            this.edt_ETC10.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC10.addEventHandler("onkillfocus", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC12.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC12.addEventHandler("onkillfocus", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC13.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC13.addEventHandler("onkillfocus", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC14.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC14.addEventHandler("onkillfocus", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC11.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC11.addEventHandler("onkillfocus", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC51.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC51.addEventHandler("onkillfocus", this.OMG_DS_SC_311301_ontextchanged, this);
            this.Static36.addEventHandler("onclick", this.Static42_onclick, this);
            this.cbo_ETC8.addEventHandler("onitemchanged", this.cbo_ETC8_onitemchanged, this);
            this.edt_ETC9.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);

        };

        this.loadIncludeScript("OMG_DS_SC_311503.xfdl");

       
    };
}
)();
