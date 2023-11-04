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
                this.set_name("OMG_DS_SC_311304");
                this.set_titletext("직매입거래계약서 (공통)");
                this._setFormPosition(0,0,788,790);
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


            
            // UI Components Initialize
            obj = new Static("Static03", "absolute", "16.75%", "222", null, "29", "0.89%", null, this);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "16.75%", "149", null, "29", "0.89%", null, this);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "16.75%", "76", null, "29", "0.89%", null, this);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static86", "absolute", "0", "50", "59.26%", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("계약기간");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "0", "76", null, "29", "75%", null, this);
            obj.set_taborder("42");
            obj.set_text("계약의 유효기간");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Calendar("edt_ETC17", "absolute", "25.38%", "80", null, "21", "62.44%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj.set_readonly("false");
            obj.set_enable("false");

            obj = new Static("Static131", "absolute", "37.82%", "80", null, "21", "61.04%", null, this);
            obj.set_taborder("44");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("edt_ETC18", "absolute", "38.96%", "80", null, "21", "48.73%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");
            obj.set_value("null");
            obj.set_readonly("false");

            obj = new Static("Static19", "absolute", "0", "10", "59.26%", "21", null, null, this);
            obj.set_taborder("78");
            obj.set_text("[직매입거래계약서]");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("left middle");
            obj.style.set_padding("0 0 1 5");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", "149", null, "29", "75%", null, this);
            obj.set_taborder("79");
            obj.set_text("현금지급조건");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "222", null, "29", "75%", null, this);
            obj.set_taborder("81");
            obj.set_text("미납금액의 비율 10%미만");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "50%", "222", null, "29", "25%", null, this);
            obj.set_taborder("83");
            obj.set_text("미납금액의 비율 10%이상");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "126", "59.26%", "21", null, null, this);
            obj.set_taborder("85");
            obj.set_text("납품대금 지금 및 감액금지");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "0", "200", "59.26%", "21", null, null, this);
            obj.set_taborder("86");
            obj.set_text("손해배상 - 지체상금비율 (발주금액 대비)");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static58", "absolute", "25.38%", "153", null, "21", "59.64%", null, this);
            obj.set_taborder("87");
            obj.set_text("매월말일 마감 후 익월");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_ETC10", "absolute", "41.24%", "153", null, "21", "54.19%", null, this);
            obj.set_taborder("2");
            obj.set_mask("90");
            obj.set_limitbymask("both");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "46.19%", "153", null, "21", "48.73%", null, this);
            obj.set_taborder("89");
            obj.set_text("일");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "25.38%", "226", null, "21", "65.99%", null, this);
            obj.set_taborder("90");
            obj.set_text("미납금액의");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "38.45%", "226", null, "21", "56.47%", null, this);
            obj.set_taborder("91");
            obj.set_text("%");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_ETC11", "absolute", "33.5%", "226", null, "21", "61.93%", null, this);
            obj.set_taborder("3");
            obj.set_mask("990");
            obj.set_limitbymask("both");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_ETC12", "absolute", "83.5%", "226", null, "21", "11.93%", null, this);
            obj.set_taborder("4");
            obj.set_mask("990");
            obj.set_limitbymask("both");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "88.45%", "226", null, "21", "6.47%", null, this);
            obj.set_taborder("94");
            obj.set_text("%");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "75.38%", "226", null, "21", "15.99%", null, this);
            obj.set_taborder("95");
            obj.set_text("미납금액의");
            this.addChild(obj.name, obj);

            obj = new Static("Static65", "absolute", "16.88%", "654", null, "129", "0.89%", null, this);
            obj.set_taborder("96");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static66", "absolute", "0%", "654", null, "129", "80.96%", null, this);
            obj.set_taborder("97");
            obj.set_text("기타특약사항");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new TextArea("edt_ETC51", "absolute", "19.67%", "659", null, "118", "1.78%", null, this);
            obj.set_taborder("14");
            obj.set_scrollbars("autovert");
            obj.set_wordwrap("char");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("1998");
            this.addChild(obj.name, obj);

            obj = new Static("Static62", "absolute", "16.88%", "542", null, "29", "0.89%", null, this);
            obj.set_taborder("124");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static72", "absolute", "16.88%", "598", null, "29", "0.89%", null, this);
            obj.set_taborder("125");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "16.88%", "570", null, "29", "0.89%", null, this);
            obj.set_taborder("126");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "0", "517", "59.26%", "21", null, null, this);
            obj.set_taborder("127");
            obj.set_text("매장의 위치 등");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "0", "476", "59.26%", "21", null, null, this);
            obj.set_taborder("128");
            obj.set_text("[첨부]");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("left middle");
            obj.style.set_padding("0 0 1 5");
            this.addChild(obj.name, obj);

            obj = new Static("Static64", "absolute", "0", "542", null, "29", "80.96%", null, this);
            obj.set_taborder("129");
            obj.set_text("점포명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC21", "absolute", "19.67%", "546", null, "21", "51.4%", null, this);
            obj.set_taborder("6");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC22", "absolute", "63.32%", "546", null, "21", "28.93%", null, this);
            obj.set_taborder("7");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static71", "absolute", "49.75%", "542", null, "29", "37.31%", null, this);
            obj.set_taborder("132");
            obj.set_text("운영층");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static73", "absolute", "0", "598", null, "29", "80.96%", null, this);
            obj.set_taborder("133");
            obj.set_text("매장 위치(첨부파일)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload", "absolute", "19.42%", "602", null, "24", "20.43%", null, this);
            obj.set_taborder("10");
            obj.getSetter("retry").set("0");
            obj.set_scrollbars("none");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static85", "absolute", "49.75%", "570", null, "29", "37.31%", null, this);
            obj.set_taborder("135");
            obj.set_text("매장 위치");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC24", "absolute", "63.32%", "574", null, "21", "5.58%", null, this);
            obj.set_taborder("9");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC23", "absolute", "19.67%", "574", null, "21", "51.4%", null, this);
            obj.set_taborder("8");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "0", "570", null, "29", "80.96%", null, this);
            obj.set_taborder("138");
            obj.set_text("영업시간");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "16.88%", "626", null, "29", "0.89%", null, this);
            obj.set_taborder("139");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "49.75%", "626", null, "29", "37.31%", null, this);
            obj.set_taborder("140");
            obj.set_text("판촉사원 수");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "0", "626", null, "29", "80.96%", null, this);
            obj.set_taborder("141");
            obj.set_text("매장면적");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "28.43%", "630", null, "21", "68.65%", null, this);
            obj.set_taborder("142");
            obj.set_text("㎡");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_ETC25", "absolute", "19.67%", "630", null, "21", "72.34%", null, this);
            obj.set_taborder("12");
            obj.set_mask("9990.00");
            obj.set_limitbymask("both");
            obj.style.set_align("right middle");
            obj.getSetter("inputtype").set("number");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "72.08%", "630", null, "21", "25%", null, this);
            obj.set_taborder("144");
            obj.set_text("명");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_ETC26", "absolute", "63.32%", "630", null, "21", "28.68%", null, this);
            obj.set_taborder("13");
            obj.set_mask("9990");
            obj.set_limitbymask("both");
            obj.style.set_align("right middle");
            obj.getSetter("inputtype").set("number");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delPlan", "absolute", "81.22%", "602", null, "21", "11.17%", null, this);
            obj.set_taborder("11");
            obj.set_text("변경");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "16.88%", "298", null, "129", "0.89%", null, this);
            obj.set_taborder("147");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "0%", "298", null, "129", "80.96%", null, this);
            obj.set_taborder("148");
            obj.set_text("기타특약사항");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new TextArea("edt_ETC52", "absolute", "19.67%", "303", null, "118", "1.78%", null, this);
            obj.set_taborder("5");
            obj.set_scrollbars("autovert");
            obj.set_wordwrap("char");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("1998");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "0", "276", "59.26%", "21", null, null, this);
            obj.set_taborder("150");
            obj.set_text("기타");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 788, 790, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("직매입거래계약서 (공통)");

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
            obj = new BindItem("item20","edt_ETC10","value","ds_eltCtrwDtl01","ETC10");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edt_ETC11","value","ds_eltCtrwDtl01","ETC11");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edt_ETC12","value","ds_eltCtrwDtl01","ETC12");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","edt_ETC51","value","ds_eltCtrwDtl01","ETC51");
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
            obj = new BindItem("item2","edt_ETC23","value","ds_eltCtrwDtl01","ETC23");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edt_ETC25","value","ds_eltCtrwDtl01","ETC25");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edt_ETC26","value","ds_eltCtrwDtl01","ETC26");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_ETC52","value","ds_eltCtrwDtl01","ETC52");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_311304.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_311304.xfdl", function() {
        //include "lib::comLib.xjs";

        var fv_position = 0; //위치값
        var fv_chk = 0 ;  //데이터 체크 

        this.form_onload = function(obj,e)
        {   
        	this.gfn_setInitForm(obj, e); //공통
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
        	
        	// 폼양식
        	for (var i = 0 ; i < this.parent.ds_etcEltStylAmm.rowcount; i++) {
        		if (this.parent.ds_etcEltStylAmm.getColumn(i, "CTRW_KDC") == "122") {
        			this.ds_etcEltStylAmm101.copyRow(0, this.parent.ds_etcEltStylAmm, i);
        		}
        	}
        	//trace(this.parent.ds_eltCtrwDtl.saveXML()) ;
        	this.parent.ds_eltCtrwDtl.set_enableevent(false);

        	for (var i = 0; i < this.parent.ds_eltCtrwDtl.rowcount; i++) {
        		if (this.parent.ds_eltCtrwDtl.getColumn(i, "MN_CTRW_KDC") == "122") {
        			fv_chk = 1 ;
        			
        			if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(i, "CTRW_STY_VER")) == "") {
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CTRW_STY_VER" , this.ds_etcEltStylAmm101.getColumn(0,"CTRW_STY_VER") ) ;		
        			}
        			if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(i, "CHG_SQNO")) == "") {
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CHG_SQNO" , this.parent.ds_register.getColumn(0 ,"CHG_SQNO"));
        			}
        			
        			this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC17", this.parent.cal_ctrStDt.value) ; // 계약 시작일
        			this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC18", this.parent.cal_ctrEdDt.value) ; // 계약 종료일
        						
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
         	
        	var text2 = this.edt_ETC51.value;
        	if (!this.gfn_isNull(text2)) {
        		var lc = text2.indexOf("^");
        		if (lc != -1 ) {
        			alert('^는 사용하실 수 없습니다.');
        			text2 = nexacro.replaceAll(text2,"^"," ");
        			this.edt_ETC51.set_value(text2);
        		}
         	}
         	
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC17" , this.edt_ETC17.value) ; // 계약유효 시작일
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC18" , this.edt_ETC18.value) ; // 계약유효 종료일
        	
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC10" , this.edt_ETC10.value) ; // 현금지급조건
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC11" , this.edt_ETC11.value) ; // 손해배상 10% 미만
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC12" , this.edt_ETC12.value) ; // 손해배상 10% 이상
        	
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC21" , this.edt_ETC21.value) ; // 점포명
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC22" , this.edt_ETC22.value) ; // 운영층
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC23" , this.edt_ETC23.value) ; // 영업시간
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC24" , this.edt_ETC24.value) ; // 매장위치(텍스트)
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC25" , this.edt_ETC25.value) ; // 매장면적
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC26" , this.edt_ETC26.value) ; // 판촉사원 수
        	
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC51" , this.edt_ETC51.value) ; // 기타특약사항(첨부)
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC52" , this.edt_ETC52.value) ; // 기타특약사항
        }

        /* Validation Check */
        this.fn_validationCheck = function()
        {
            var strTitletext = "직매입거래계약서";

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

            // 발주금액 대비 미납금액의 비율 손해배상 비율
            if (this.gfn_nullToEmpty(this.edt_ETC11.value) == "") {
        		alert("발주금액 대비 미납금액의 비율 10%미만 손해배상 비율을 입력해주세요.");
        		this.edt_ETC11.setFocus();
        		return false;
        	}
        	
        	// 판매대행 수수료
        	if (this.gfn_nullToEmpty(this.edt_ETC12.value) == "") {
        		alert("발주금액 대비 미납금액의 비율 10%이상 손해배상 비율을 입력해주세요.");
        		this.edt_ETC12.setFocus();
        		return false;
        	}
        	
        	// 직매입거래계약서 [첨부] 입력부분은 모든 값이 선택값임
        /*
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
        */
        	return true;
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
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_file.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.ds_uploadresult.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.edt_ETC10.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC10.addEventHandler("onkillfocus", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC11.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC11.addEventHandler("onkillfocus", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC12.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC12.addEventHandler("onkillfocus", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC51.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC21.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC21.addEventHandler("onkillfocus", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC22.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC22.addEventHandler("onkillfocus", this.OMG_DS_SC_311301_ontextchanged, this);
            this.FileUpload.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.edt_ETC24.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC24.addEventHandler("onkillfocus", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC23.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC23.addEventHandler("onkillfocus", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC25.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC25.addEventHandler("onkillfocus", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC26.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC26.addEventHandler("onkillfocus", this.OMG_DS_SC_311301_ontextchanged, this);
            this.btn_delPlan.addEventHandler("onclick", this.btn_delPlan_onclick, this);
            this.edt_ETC52.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC52.addEventHandler("onkillfocus", this.OMG_DS_SC_311301_ontextchanged, this);

        };

        this.loadIncludeScript("OMG_DS_SC_311304.xfdl");

       
    };
}
)();
