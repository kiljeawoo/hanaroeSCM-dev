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
                this.set_name("OMG_DS_SC_311504");
                this.set_titletext("단기 임대차거래계약서(테넌트)");
                this._setFormPosition(0,0,788,748);
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
            obj = new Static("Static14", "absolute", "15.74%", "75", null, "29", "0.89%", null, this);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "15.74%", "169", null, "29", "0.89%", null, this);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "0", "169", null, "29", "82.99%", null, this);
            obj.set_taborder("19");
            obj.set_text("임대차목적물의 표시 ");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "16.88%", "197", null, "29", "0.89%", null, this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static59", "absolute", "44.29%", "197", null, "29", "41.75%", null, this);
            obj.set_taborder("20");
            obj.set_text("공유면적");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_ETC15", "absolute", "58.63%", "201", null, "21", "31.35%", null, this);
            obj.set_taborder("4");
            obj.style.set_align("right middle");
            obj.getSetter("inputtype").set("number");
            obj.set_value("0");
            obj.getSetter("inputfilter").set("dot,comma,sign");
            obj.getSetter("maxlength").set("6");
            obj.set_mask("9990.0");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static86", "absolute", "0", "116", "59.26%", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_text("매장의임대차");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static75", "absolute", "0", "197", null, "29", "82.99%", null, this);
            obj.set_taborder("21");
            obj.set_text("점유면적");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static60", "absolute", "27.54%", "201", null, "21", "69.67%", null, this);
            obj.set_taborder("23");
            obj.set_text("㎡");
            this.addChild(obj.name, obj);

            obj = new Static("Static89", "absolute", "68.78%", "201", null, "21", "27.92%", null, this);
            obj.set_taborder("24");
            obj.set_text("㎡");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "73.35%", "197", null, "29", "11.68%", null, this);
            obj.set_taborder("25");
            obj.set_text("계");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_ETC16", "absolute", "88.71%", "201", null, "21", "3.3%", null, this);
            obj.set_taborder("26");
            obj.getSetter("inputtype").set("number");
            obj.style.set_align("right middle");
            obj.set_value("0");
            obj.set_mask("+99990.0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "97.08%", "200", null, "21", "0.51%", null, this);
            obj.set_taborder("27");
            obj.set_text("㎡");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "16.75%", "224", null, "29", "0.89%", null, this);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "0", "224", null, "29", "82.99%", null, this);
            obj.set_taborder("29");
            obj.set_text("임대차기간");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Calendar("edt_ETC17", "absolute", "17.39%", "228", null, "21", "70.43%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("30");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj.set_readonly("false");
            obj.set_enable("false");

            obj = new Static("Static131", "absolute", "29.82%", "228", null, "21", "69.04%", null, this);
            obj.set_taborder("31");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("edt_ETC18", "absolute", "30.96%", "228", null, "21", "56.73%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("32");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");
            obj.set_value("null");
            obj.set_readonly("false");

            obj = new Static("Static32", "absolute", "16.88%", "280", null, "29", "0.89%", null, this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "0", "280", null, "29", "82.99%", null, this);
            obj.set_taborder("33");
            obj.set_text("업종");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "16.88%", "348", null, "29", "0.89%", null, this);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "44.67%", "348", null, "29", "34.26%", null, this);
            obj.set_taborder("35");
            obj.set_text("월 임대료연체료율");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "0%", "348", null, "29", "82.99%", null, this);
            obj.set_taborder("36");
            obj.set_text("월 임대료 납부기일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "0", "10", "59.26%", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_text("[단기 임대차거래계약서]");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("left middle");
            obj.style.set_padding("0 0 1 5");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "16.88%", "468", null, "29", "0.89%", null, this);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "0", "468", null, "29", "82.99%", null, this);
            obj.set_taborder("39");
            obj.set_text("판매상품");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "0", "418", "59.26%", "21", null, null, this);
            obj.set_taborder("40");
            obj.set_text("[별지 1]");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("left middle");
            obj.style.set_padding("0 0 1 5");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC42", "absolute", "17.39%", "472", null, "21", "16.24%", null, this);
            obj.set_taborder("11");
            obj.style.set_align("left middle");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "16.75%", "496", null, "29", "0.89%", null, this);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "496", null, "29", "82.99%", null, this);
            obj.set_taborder("42");
            obj.set_text("브랜드명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "0", "569", "59.26%", "21", null, null, this);
            obj.set_taborder("43");
            obj.set_text("매장의 위치 등");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static62", "absolute", "16.88%", "588", null, "29", "0.89%", null, this);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static64", "absolute", "0", "588", null, "29", "80.96%", null, this);
            obj.set_taborder("45");
            obj.set_text("점포명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC46", "absolute", "19.67%", "592", null, "21", "51.4%", null, this);
            obj.set_taborder("46");
            obj.style.set_align("left middle");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static69", "absolute", "0", "538", "59.26%", "21", null, null, this);
            obj.set_taborder("47");
            obj.set_text("[별지 2]");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("left middle");
            obj.style.set_padding("0 0 1 5");
            this.addChild(obj.name, obj);

            obj = new Static("Static70", "absolute", "16.88%", "616", null, "29", "0.89%", null, this);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC47", "absolute", "63.45%", "592", null, "21", "28.81%", null, this);
            obj.set_taborder("13");
            obj.style.set_align("right middle");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            this.addChild(obj.name, obj);

            obj = new Static("Static71", "absolute", "49.75%", "588", null, "29", "37.31%", null, this);
            obj.set_taborder("49");
            obj.set_text("운영층");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static72", "absolute", "16.88%", "644", null, "29", "0.89%", null, this);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static73", "absolute", "0", "644", null, "29", "80.96%", null, this);
            obj.set_taborder("51");
            obj.set_text("매장 위치(첨부파일)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static65", "absolute", "16.88%", "672", null, "69", "0.89%", null, this);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static66", "absolute", "0%", "672", null, "69", "80.96%", null, this);
            obj.set_taborder("53");
            obj.set_text("기타특약사항");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static76", "absolute", "0", "616", null, "29", "80.96%", null, this);
            obj.set_taborder("54");
            obj.set_text("매장 위치");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static67", "absolute", "0", "321", "59.26%", "21", null, null, this);
            obj.set_taborder("55");
            obj.set_text("임대보증금");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Button("btu_zip", "absolute", "32.11%", "145", null, "21", "65.36%", null, this);
            obj.set_taborder("56");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static98", "absolute", "23.48%", "145", null, "21", "75.38%", null, this);
            obj.set_taborder("57");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static79", "absolute", "15.74%", "141", null, "29", "0.89%", null, this);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static80", "absolute", "0", "141", null, "29", "82.99%", null, this);
            obj.set_taborder("60");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Button("btn_zip00", "absolute", "33.38%", "145", null, "21", "64.09%", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC13", "absolute", "44.67%", "173", null, "21", "4.19%", null, this);
            obj.set_taborder("2");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC22", "absolute", "17.39%", "284", null, "21", "57.61%", null, this);
            obj.set_taborder("6");
            obj.style.set_align("left middle");
            obj.set_maxlength("190");
            obj.set_lengthunit("ascii");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC41", "absolute", "17.39%", "499", null, "21", "16.24%", null, this);
            obj.set_taborder("12");
            obj.set_maxlength("190");
            obj.set_lengthunit("ascii");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_ETC14", "absolute", "17.39%", "201", null, "21", "72.59%", null, this);
            obj.set_taborder("3");
            obj.getSetter("inputtype").set("number");
            obj.style.set_align("right middle");
            obj.set_value("0");
            obj.getSetter("inputfilter").set("dot,comma,sign");
            obj.getSetter("maxlength").set("6");
            obj.set_mask("9990.0");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC10", "absolute", "17.39%", "145", null, "21", "75%", null, this);
            obj.set_taborder("73");
            obj.style.set_align("right middle");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC11", "absolute", "25.51%", "145", null, "21", "66.88%", null, this);
            obj.set_taborder("84");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("right middle");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC12", "absolute", "17.39%", "173", null, "21", "55.71%", null, this);
            obj.set_taborder("61");
            obj.set_cssclass("edt_WF_Readonly");
            obj.style.set_align("left middle");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload", "absolute", "19.67%", "648", null, "24", "159", null, this);
            obj.set_taborder("15");
            obj.getSetter("retry").set("0");
            obj.set_scrollbars("none");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_ETC33", "absolute", "69.04%", "353", null, "21", "25.76%", null, this);
            obj.set_taborder("9");
            obj.set_mask("990.0");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "75.25%", "353", null, "21", "22.84%", null, this);
            obj.set_taborder("62");
            obj.set_text("%");
            this.addChild(obj.name, obj);

            obj = new Static("Static63", "absolute", "71.83%", "592", null, "21", "25%", null, this);
            obj.set_taborder("63");
            obj.set_text("층");
            this.addChild(obj.name, obj);

            obj = new Static("Static68", "absolute", "17.64%", "353", null, "21", "78.43%", null, this);
            obj.set_taborder("64");
            obj.set_text("익월");
            this.addChild(obj.name, obj);

            obj = new Static("Static81", "absolute", "28.17%", "353", null, "21", "59.77%", null, this);
            obj.set_taborder("65");
            obj.set_text("일까지 납부");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_ETC32", "absolute", "21.7%", "353", null, "21", "72.46%", null, this);
            obj.set_taborder("8");
            obj.style.set_align("right middle");
            obj.set_mask("90");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static83", "absolute", "66.75%", "353", null, "21", "31.35%", null, this);
            obj.set_taborder("66");
            obj.set_text("연");
            this.addChild(obj.name, obj);

            obj = new TextArea("edt_ETC52", "absolute", "19.67%", "677", null, "58", "5.46%", null, this);
            obj.set_taborder("16");
            obj.set_scrollbars("autovert");
            obj.set_wordwrap("char");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("2000");
            this.addChild(obj.name, obj);

            obj = new Static("Static87", "absolute", "36.8%", "353", null, "21", "50.63%", null, this);
            obj.set_taborder("67");
            obj.set_text("99 = '말'로 표시");
            obj.style.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delPlan", "absolute", "81.22%", "648", null, "21", "11.17%", null, this);
            obj.set_taborder("68");
            obj.set_text("변경");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0", "449", "59.26%", "21", null, null, this);
            obj.set_taborder("69");
            obj.set_text("판매상품 내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "75", null, "29", "82.99%", null, this);
            obj.set_taborder("70");
            obj.set_text("계약사업장 선택");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "0", "50", "59.26%", "21", null, null, this);
            obj.set_taborder("71");
            obj.set_text("계약사업장");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_ETC8", "absolute", "17.39%", "79", "247", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("@ds_branch");
            obj.set_codecolumn("BIZ_NUMBER");
            obj.set_datacolumn("CLNTNM");

            obj = new Edit("edt_ETC9", "absolute", "48.98%", "79", "30", "21", null, null, this);
            obj.set_taborder("74");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_visible("false");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "0%", "376", null, "29", "82.99%", null, this);
            obj.set_taborder("75");
            obj.set_text("상품판매대금 지급일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "44.29%", "280", null, "29", "45.81%", null, this);
            obj.set_taborder("76");
            obj.set_text("매장명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC23", "absolute", "54.57%", "284", null, "21", "27.54%", null, this);
            obj.set_taborder("7");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC48", "absolute", "19.67%", "620", null, "21", "49.24%", null, this);
            obj.set_taborder("14");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "0", "252", null, "29", "82.99%", null, this);
            obj.set_taborder("77");
            obj.set_text("월임대료");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "16.88%", "252", null, "29", "0.89%", null, this);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "17.77%", "256", null, "21", "67.26%", null, this);
            obj.set_taborder("79");
            obj.set_text("월 매출액의");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_ETC21", "absolute", "26.9%", "255", null, "21", "67.89%", null, this);
            obj.set_taborder("5");
            obj.set_mask("990.0");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "33.63%", "255", null, "21", "63.83%", null, this);
            obj.set_taborder("80");
            obj.set_text("%");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "16.88%", "376", null, "29", "0.89%", null, this);
            obj.set_taborder("81");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static58", "absolute", "17.77%", "380", null, "21", "67.26%", null, this);
            obj.set_taborder("82");
            obj.set_text("판매마감일로부터");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_ETC34", "absolute", "32.23%", "380", null, "21", "63.2%", null, this);
            obj.set_taborder("10");
            obj.set_mask("990");
            obj.set_limitbymask("both");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "37.56%", "380", null, "21", "57.36%", null, this);
            obj.set_taborder("83");
            obj.set_text("일 이내");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 788, 748, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("단기 임대차거래계약서(테넌트)");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item14","edt_ETC48","value","ds_eltCtrwDtl01","ETC48");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edt_ETC15","value","ds_eltCtrwDtl01","ETC15");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","edt_ETC16","value","ds_eltCtrwDtl01","ETC16");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","edt_ETC17","value","ds_eltCtrwDtl01","ETC17");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","edt_ETC18","value","ds_eltCtrwDtl01","ETC18");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","edt_ETC46","value","ds_eltCtrwDtl01","ETC46");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","edt_ETC47","value","ds_eltCtrwDtl01","ETC47");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","edt_ETC22","value","ds_eltCtrwDtl01","ETC22");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edt_ETC41","value","ds_eltCtrwDtl01","ETC41");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edt_ETC14","value","ds_eltCtrwDtl01","ETC14");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edt_ETC10","value","ds_eltCtrwDtl01","ETC10");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","edt_ETC11","value","ds_eltCtrwDtl01","ETC11");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","edt_ETC12","value","ds_eltCtrwDtl01","ETC12");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","edt_ETC13","value","ds_eltCtrwDtl01","ETC13");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","edt_ETC33","value","ds_eltCtrwDtl01","ETC33");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edt_ETC32","value","ds_eltCtrwDtl01","ETC32");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","edt_ETC52","value","ds_eltCtrwDtl01","ETC52");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","cbo_ETC8","value","ds_eltCtrwDtl01","ETC8");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","edt_ETC9","value","ds_eltCtrwDtl01","ETC9");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","edt_ETC23","value","ds_eltCtrwDtl01","ETC23");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","edt_ETC21","value","ds_eltCtrwDtl01","ETC21");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","edt_ETC34","value","ds_eltCtrwDtl01","ETC34");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_ETC42","value","ds_eltCtrwDtl01","ETC42");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_311504.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_311504.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        var fv_position = 0; //위치값
        var fv_chk = 0;  //데이터 체크

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
        	for (var i = 0; i < this.parent.ds_etcEltStylAmm.rowcount; i++) {
        		if (this.parent.ds_etcEltStylAmm.getColumn(i, "CTRW_KDC") == "144") {
        			this.ds_etcEltStylAmm101.copyRow(0, this.parent.ds_etcEltStylAmm, i);
        		}
        	}
        	//this.parent.ds_eltCtrwDtl.set_enableevent(false);

        	for (var i = 0; i < this.parent.ds_eltCtrwDtl.rowcount; i++) {
        		if (this.parent.ds_eltCtrwDtl.getColumn(i, "MN_CTRW_KDC") == "144") {
        			fv_chk = 1 ;

        			if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(i, "CTRW_STY_VER")) == "") {
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CTRW_STY_VER" , this.ds_etcEltStylAmm101.getColumn(0,"CTRW_STY_VER") ) ;
        			}
        			if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(i, "CHG_SQNO")) == "") {
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CHG_SQNO" , this.parent.ds_register.getColumn(0 ,"CHG_SQNO"));
        			}

        			this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC17", this.parent.cal_ctrStDt.value); // 임대차기간 시작일
        			this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC18", this.parent.cal_ctrEdDt.value); // 임대차기간 종료일
        			if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(fv_position, "ETC8")) == "") {
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC8", "0000000000"); // 계약사업장코드(테넌트)
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC9", "본부통합"); // 계약사업장명(테넌트)
        			}

        			this.ds_eltCtrwDtl01.addRow();
        			this.ds_eltCtrwDtl01.copyRow(0, this.parent.ds_eltCtrwDtl, fv_position);

        			if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(fv_position, "ETC49")) != "") {
        				this.FileUpload.set_enable(false); // 수정시에 기본 비활성
        				this.btn_delPlan.set_visible(true);
        			}
        		}
        	}

        	if (fv_chk == 0) {
        		this.parent.ds_eltCtrwDtl.deleteAll();
        		var nRow = this.parent.ds_eltCtrwDtl.addRow();
        		fv_position = nRow;

        		this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CTRW_STY_VER", this.ds_etcEltStylAmm101.getColumn(0, "CTRW_STY_VER"));
        		this.parent.ds_eltCtrwDtl.setColumn(fv_position, "MN_CTRW_KDC", "144");
        		this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CHG_SQNO" , this.parent.ds_register.getColumn(0 ,"CHG_SQNO"));
        		this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC17", this.parent.cal_ctrStDt.value) ; // 임대차기간 시작일
        		this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC18", this.parent.cal_ctrEdDt.value) ; // 임대차기간 종료일

        		this.ds_eltCtrwDtl01.addRow();
        		this.ds_eltCtrwDtl01.copyRow(0, this.parent.ds_eltCtrwDtl ,fv_position);
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

        	// this.ds_eltCtrwDtl01.set_updatecontrol(false);

        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC8"  , this.cbo_ETC8.value) ; // 계약사업장코드(테넌트)
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC9"  , this.edt_ETC9.value) ; // 계약사업장명(테넌트)
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC10" , this.edt_ETC10.value) ; // 우편번호1
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC11" , this.edt_ETC11.value) ; // 우편번호2
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC12" , this.edt_ETC12.value) ; // 주소1
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC13" , this.edt_ETC13.value) ; // 주소2
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC14" , this.edt_ETC14.value) ; // 점유면적
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC15" , this.edt_ETC15.value) ; // 공유면적
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC16" , this.edt_ETC16.value) ; // 면적 계
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC17" , this.edt_ETC17.value) ; // 임대차기간 시작일
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC18" , this.edt_ETC18.value) ; // 임대차기간 종료일
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC21" , this.edt_ETC21.value) ; // 월임대료 %
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC22" , this.edt_ETC22.value) ; // 업종
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC23" , this.edt_ETC23.value) ; // 매장명
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC32" , this.edt_ETC32.value) ; // 임대료 납부일
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC33" , this.edt_ETC33.value) ; // 임대료 연체료율
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC34" , this.edt_ETC34.value) ; // 판매대금 지급일	제9조
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC41" , this.edt_ETC41.value) ; // 브랜드명
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC42" , this.edt_ETC42.value) ; // 판매상품
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC46" , this.edt_ETC46.value) ; // 점포명
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC47" , this.edt_ETC47.value) ; // 운영층
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC48" , this.edt_ETC48.value) ; // 매장위치: 텍스트
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC52" , this.edt_ETC52.value) ; // 기타특약사항
        }

        /* Validation Check */
        this.fn_validationCheck = function()
        {
            var strTitletext = "단기 임대차거래계약서(테넌트)";

        	// 계약사업장
        	if (this.gfn_nullToEmpty(this.cbo_ETC8.value) == "") {
        		alert("계약사업장을 선택해주세요.");
        		this.cbo_ETC8.setFocus();
        		return false;
        	}

            // 임대차 목적물의 표시 (주소)
            if (this.gfn_nullToEmpty(this.edt_ETC10.value) == "") {
        		alert("임대차 목적물의 표시 주소를 입력해주세요.");
        		this.edt_ETC10.setFocus();
        		return false;
        	} else if (this.gfn_nullToEmpty(this.edt_ETC13.value) == "") {
        		alert("임대차 목적물의 표시 상세주소를 입력해주세요.");
        		this.edt_ETC13.setFocus();
        		return false;
        	}

        	// 점유면적
        	if (this.gfn_nullToEmpty(this.edt_ETC14.value) == "") {
        		alert("점유면적을 입력해주세요.");
        		this.edt_ETC14.setFocus();
        		return false;
        	}

        	// 공유면적
        	if (this.gfn_nullToEmpty(this.edt_ETC15.value) == "") {
        		alert("공유면적을 입력해주세요.");
        		this.edt_ETC15.setFocus();
        		return false;
        	}

        	// 임대차기간시작
        	if (this.gfn_nullToEmpty(this.edt_ETC17.value) == "") {
        		alert("임대차기간 시작날짜를 입력해주세요.");
        		this.edt_ETC17.setFocus();
        		return false;
        	}

        	// 임대차기간종료
        	if (this.gfn_nullToEmpty(this.edt_ETC18.value) == "") {
        		alert("임대차기간 종료날짜를 입력해주세요.");
        		this.edt_ETC18.setFocus();
        		return false;
        	}
        	
        	if (this.cbo_ETC8.value != "0000000000" && this.gfn_getDiffDay(this.edt_ETC17.value,this.edt_ETC18.value) > 180) {
        		alert("임대차기간를 180일 이내로 지정해주세요.");
        		return false;
        	}
        	
        	// 월매출액
        	if (this.gfn_nullToEmpty(this.edt_ETC21.value) == "") {
        		alert("월 매출액 비율을 입력해주세요.");
        		this.edt_ETC21.setFocus();
        		return false;
        	}

        	// 업종
        	if (this.gfn_nullToEmpty(this.edt_ETC22.value) == "") {
        		alert("업종을 입력해주세요.");
        		this.edt_ETC22.setFocus();
        		return false;
        	}
        	
        	// 매장명
        	if (this.gfn_nullToEmpty(this.edt_ETC23.value) == "") {
        		alert("매장명을 입력해주세요.");
        		this.edt_ETC23.setFocus();
        		return false;
        	}
        	
        	// 월임대료납부기일(1~31, 99)
        	if (this.gfn_nullToEmpty(this.edt_ETC32.value) == "") {
        		alert("월 임대료 납부기일을 입력해주세요.");
        		this.edt_ETC32.setFocus();
        		return false;
        	} else {
        		var num = this.gfn_getNum(this.edt_ETC32.value);
        		if (num != 99 && (num < 1 || num > 31)) {
        			alert("월 임대료 납부기일은 1~31일 또는 99(말일)를 입력해주세요.");
        			this.edt_ETC32.setFocus();
        			return false;
        		}
        	}
        	
        	// 월임대료연체료율
        	if (this.gfn_nullToEmpty(this.edt_ETC33.value) == "") {
        		alert("월 임대료 연체료율을 입력해주세요.");
        		this.edt_ETC33.setFocus();
        		return false;
        	} else if (nexacro.toNumber(this.edt_ETC33.value) >15.5) {
        		alert("월 임대료 연체료율을 15.5% 이내로 입력해주세요.");
        		//this.ds_eltCtrwDtl01.setColumn(0,"ETC34",  "");
        		this.edt_ETC33.set_value("");
        		this.edt_ETC33.setFocus();
        		return false;
        	}

        	// 상품판매대금 지급일 40일 이내
        	if (this.gfn_nullToEmpty(this.edt_ETC34.value) == "") {
        		alert("상품판매대금 지급일을 입력해주세요.");
        		this.edt_ETC34.setFocus();
        		return false;
        	} else if (this.gfn_getNum(this.edt_ETC34.value) > 40) {
        		alert("상품판매대금 지급일은 40일 이하로 입력해주세요.");
        		//this.ds_eltCtrwDtl01.setColumn(0,"ETC34",  "");
        		this.edt_ETC34.set_value("");
        		this.edt_ETC34.setFocus();
        		return false;
        	}
        	
        	// 판매상품
        	if (this.gfn_nullToEmpty(this.edt_ETC42.value) == "") {
        		alert("판매상품를 입력해주세요.");
        		this.edt_ETC42.setFocus();
        		return false;
        	}
        	
        	// 브랜드명
        	if (this.gfn_nullToEmpty(this.edt_ETC41.value) == "") {
        		alert("브랜드명를 입력해주세요.");
        		this.edt_ETC41.setFocus();
        		return false;
        	}
        	
        	// 운영층
        	if (this.gfn_nullToEmpty(this.edt_ETC47.value) == "") {
        		alert("운영층을 입력해주세요.");
        		this.edt_ETC47.setFocus();
        		return false;
        	}

        	// 매장위치
        	if (this.gfn_nullToEmpty(this.edt_ETC48.value) == "") {
        		alert("매장위치를 입력해주세요.");
        		this.edt_ETC48.setFocus();
        		return false;
        	}

        	// 매장위치(첨부파일)
        	if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(fv_position, "ETC49")) == "") {
        		alert("매장위치 첨부파일을 등록해주세요.");
        		return false;
        	}

        	return true;
        }

        /*
         * 주소검색
         *
         */
        this.btn_zip00_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"S", dsArg:this.ds_eltCtrwDtl01, new_elt:this.new_elt};
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";

        	this.gfn_openPopup("zipCode","OMG.PT::OMG_DS_SC_9010.xfdl",oArg,sOption,sPopupCallBack);
        	//this.gfn_openPopup("zipCode","common::AddressDaum.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	if (strId == "naTrplC") {
        		this.fn_naTrplC(strVal);
        	} else if (strId == "zipCode") {
        		// trace("우편번호 정보 : " + strVal);
        		this.fn_addr(strVal);
        	} else if (strId == "chrrSearch") {
        		this.fn_chrr(strVal);
        	}
        }

        //주소 리턴 값
        this.fn_addr = function(strVal)
        {
        	//trace("주소 테스트") ;
        	//trace(strVal);
        	//this.ds_eltCtrwDtl01.set_updatecontrol(true); // 이걸 해주지 않으면 자동으로 바뀌지 않음

        	var fn_addr = strVal.split(",");

        	 for (var i=0; i<fn_addr.length; i++) {
        		var fn_addr1 = fn_addr[i].split("#");
        		if (fn_addr1[0] == "FZIP") {
        			// 앞자리우편번호
        			this.ds_eltCtrwDtl01.setColumn(0, "ETC10",  fn_addr1[1]) ;
        			this.edt_ETC10.set_value(fn_addr1[1]);
        		}else if (fn_addr1[0] == "RZIP") {
        			// 뒷자리우편번호
        			this.ds_eltCtrwDtl01.setColumn(0, "ETC11",  fn_addr1[1]) ;
        			this.edt_ETC11.set_value(fn_addr1[1]);
        		}else if (fn_addr1[0] == "ZIP_SQNO") {
        			// 우편번호일련번호
        			// this.ds_eltCtrwDtl01.setColumn(0,"ZIP_SQNO",  fn_addr1[1]) ;
        		}else if (fn_addr1[0] == "DONGUP") {
        			// 동이상주소
        			this.ds_eltCtrwDtl01.setColumn(0, "ETC12",  fn_addr1[1]) ;
        			this.edt_ETC12.set_value(fn_addr1[1]);
        		} else if (fn_addr1[0] == "DONGBW") {
        			// 동이하주소
        			// this.ds_eltCtrwDtl01.setColumn(0, "ETC12",  fn_addr1[1]) ;
        		}
        	}
        }

        //callback메소드
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID == "searchItemList") {
        		}
        	}
        }

        this.FileUpload_onerror = function(obj,e)
        {
        // 	trace("FileUpload_onerror");
        // 	trace("e.errorcode: "+e.errorcode);
        // 	trace("e.errormsg: "+e.errormsg);
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
        	if (e.datasets == null) {
        		// trace("업로드 실패");
        	} else {
        		this.ds_uploadresult.copyData(e.datasets[0]);
        		this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC49", this.ds_uploadresult.getColumn(0, "ORGFNAME")); // 매장위치: 첨부파일명
        	    this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC50", this.ds_uploadresult.getColumn(0, "SYSTEMFILENAME")); // 매장위치: 시스템파일명
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

        // 동기화 항목 킬 포커스
        this.edt_ETC40_onkillfocus = function(obj,e)
        {
        	this.fn_syncInputData(obj);
        }

        // 데이터 항목 동기화
        this.fn_syncInputData = function(obj)
        {
        	
        	// 면적 합산
        	if (obj.id == "edt_ETC14" || obj.id == "edt_ETC15") {
        		var et14 = this.gfn_isNum(this.edt_ETC14.value) ? parseFloat(this.edt_ETC14.value) : 0;
        		var et15 = this.gfn_isNum(this.edt_ETC15.value) ? parseFloat(this.edt_ETC15.value) : 0;
        		var et16Sum = et14 + et15;
        		this.edt_ETC16.set_value(et16Sum);
        		this.edt_ETC51.set_value(et16Sum);
        		this.ds_eltCtrwDtl01.setColumn(0,"ETC16", et16Sum);
        		this.ds_eltCtrwDtl01.setColumn(0,"ETC51", et16Sum);
            }
            
            // 매장명 연계
            if (obj.id == "edt_ETC23") {
        		this.edt_ETC46.set_value(obj.value);
        		this.ds_eltCtrwDtl01.setColumn(0,"ETC46",  obj.value);
            }
        }
        this.Static42_onclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_file.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.ds_uploadresult.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.Static14.addEventHandler("onclick", this.Static42_onclick, this);
            this.edt_ETC15.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC15.addEventHandler("onkillfocus", this.edt_ETC40_onkillfocus, this);
            this.Static89.addEventHandler("onclick", this.Static89_onclick, this);
            this.edt_ETC16.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC42.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC46.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC47.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC47.addEventHandler("onkillfocus", this.edt_ETC40_onkillfocus, this);
            this.btu_zip.addEventHandler("onclick", this.btu_zip_onclick, this);
            this.Static79.addEventHandler("onclick", this.Static42_onclick, this);
            this.btn_zip00.addEventHandler("onclick", this.btn_zip00_onclick, this);
            this.edt_ETC22.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC41.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC14.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC14.addEventHandler("onkillfocus", this.edt_ETC40_onkillfocus, this);
            this.edt_ETC10.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC11.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC12.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.FileUpload.addEventHandler("onsuccess", this.FileUpload_onsuccess, this);
            this.FileUpload.addEventHandler("onerror", this.FileUpload_onerror, this);
            this.FileUpload.addEventHandler("onitemchanged", this.FileUpload_onitemchanged, this);
            this.edt_ETC33.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.Static63.addEventHandler("onclick", this.Static89_onclick, this);
            this.edt_ETC32.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC52.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.btn_delPlan.addEventHandler("onclick", this.btn_delPlan_onclick, this);
            this.cbo_ETC8.addEventHandler("onitemchanged", this.cbo_ETC8_onitemchanged, this);
            this.edt_ETC9.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC23.addEventHandler("onkillfocus", this.edt_ETC40_onkillfocus, this);
            this.edt_ETC23.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC48.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC21.addEventHandler("onkillfocus", this.edt_ETC40_onkillfocus, this);
            this.edt_ETC21.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC34.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);

        };

        this.loadIncludeScript("OMG_DS_SC_311504.xfdl", true);

       
    };
}
)();
