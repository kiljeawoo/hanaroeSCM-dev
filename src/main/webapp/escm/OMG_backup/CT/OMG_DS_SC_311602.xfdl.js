﻿(function()
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
                this.set_name("OMG_DS_SC_311601");
                this.set_titletext("특약매입 거래계약서(수산)");
                this._setFormPosition(0,0,788,1037);
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

            obj = new Dataset("ds_ctEtcItemIList", this);
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

            obj = new Dataset("ds_ctEtcItemAList", this);
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


            
            // UI Components Initialize
            obj = new Static("Static21", "absolute", "16.75%", "66", null, "29", "0.89%", null, this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static86", "absolute", "0", "40", "59.26%", "21", null, null, this);
            obj.set_taborder("6");
            obj.set_text("계약기간");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "0", "66", null, "29", "80.96%", null, this);
            obj.set_taborder("8");
            obj.set_text("계약의 유효기간");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Calendar("edt_ETC17", "absolute", "19.42%", "70", null, "21", "68.4%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj.set_readonly("false");
            obj.set_enable("false");

            obj = new Static("Static131", "absolute", "31.85%", "70", null, "21", "67.01%", null, this);
            obj.set_taborder("9");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("edt_ETC18", "absolute", "32.99%", "70", null, "21", "54.7%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");
            obj.set_value("null");
            obj.set_readonly("false");

            obj = new Static("Static03", "absolute", "0", "250", "59.26%", "21", null, null, this);
            obj.set_taborder("10");
            obj.set_text("납품장소");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "0", "10", "59.26%", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_text("[특약매입거래계약서]");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("left middle");
            obj.style.set_padding("0 0 1 5");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "0", "190", "59.26%", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_text("[첨부] 상품 납품 장소 등");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("left middle");
            obj.style.set_padding("0 0 1 5");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "0", "586", "59.26%", "21", null, null, this);
            obj.set_taborder("13");
            obj.set_text("납품 대상 상품 내역");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static65", "absolute", "16.88%", "901", null, "129", "0.89%", null, this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Grid("GridI", "absolute", "0%", "610", null, "249", "0.89%", null, this);
            obj.set_taborder("15");
            obj.set_binddataset("ds_ctEtcItemIList");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"210\"/><Column size=\"275\"/><Column size=\"105\"/><Column size=\"186\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"직영점명\"/><Cell col=\"1\" text=\"상품품목\"/><Cell col=\"2\" text=\"수량\"/><Cell col=\"3\" text=\"단가(VAT포함)\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"bind:BRAND\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" style=\"align:center middle;\" text=\"bind:ITEM_NAME\" editlimit=\"190\" editlengthunit=\"ascii\" autosizecol=\"none\"/><Cell col=\"2\" edittype=\"text\" text=\"bind:QTY\" autosizecol=\"none\"/><Cell col=\"3\" edittype=\"text\" style=\"align:center;\" text=\"bind:UPR\" editlimit=\"190\" editlengthunit=\"ascii\" autosizecol=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new TextArea("edt_ETC52", "absolute", "19.67%", "906", null, "118", "1.78%", null, this);
            obj.set_taborder("5");
            obj.set_scrollbars("autovert");
            obj.set_wordwrap("char");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("1998");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0%", "901", null, "129", "80.96%", null, this);
            obj.set_taborder("16");
            obj.set_text("기타특약사항");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Grid("GridA", "absolute", "0%", "273", null, "249", "1.02%", null, this);
            obj.set_taborder("17");
            obj.set_binddataset("ds_ctEtcItemAList");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"49\"/><Column size=\"200\"/><Column size=\"265\"/><Column size=\"90\"/><Column size=\"172\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"삭제\"/><Cell col=\"1\" text=\"직영점명\"/><Cell col=\"2\" text=\"사업장 주소\"/><Cell col=\"3\" text=\"매장면적(㎡)\"/><Cell col=\"4\" text=\"도면첨부\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"none\" text=\"bind:ISCHECKED\" autosizecol=\"none\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" style=\"align:center middle;\" text=\"bind:BRAND\" editlimit=\"190\" editlengthunit=\"ascii\" autosizecol=\"none\"/><Cell col=\"2\" edittype=\"text\" text=\"bind:ITEM_NAME\" autosizecol=\"none\"/><Cell col=\"3\" celltype=\"none\" edittype=\"text\" editfilter=\"number\" text=\"bind:STANDARD\" editlimitbymask=\"both\"/><Cell col=\"4\" text=\"bind:QTY\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "16.88%", "531", null, "29", "1.02%", null, this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC22", "absolute", "19.67%", "535", null, "21", "49.24%", null, this);
            obj.set_taborder("21");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "0", "531", null, "29", "80.96%", null, this);
            obj.set_taborder("22");
            obj.set_text("납품기일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0", "878", "59.26%", "21", null, null, this);
            obj.set_taborder("23");
            obj.set_text("특약사항 등");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC21", "absolute", "10.91%", "250", null, "21", "39.85%", null, this);
            obj.set_taborder("2");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload01", "absolute", "83.76%", "248", null, "21", "10.41%", null, this);
            obj.set_taborder("24");
            obj.getSetter("retry").set("0");
            obj.set_visible("true");
            obj.style.set_buttonsize("10");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_fileDel", "absolute", "90.36%", "248", null, "21", "0.89%", null, this);
            obj.set_taborder("25");
            obj.set_text("도면삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_fileUp", "absolute", "80.84%", "248", null, "21", "10.41%", null, this);
            obj.set_taborder("26");
            obj.set_text("도면추가");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "16.75%", "141", null, "29", "1.02%", null, this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "0", "141", null, "29", "80.96%", null, this);
            obj.set_taborder("28");
            obj.set_text("마진율");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "32.36%", "145", null, "21", "62.56%", null, this);
            obj.set_taborder("29");
            obj.set_text("%");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "0", "115", "59.26%", "21", null, null, this);
            obj.set_taborder("35");
            obj.set_text("마진율 등");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_RT", "absolute", "19.42%", "145", null, "21", "68.4%", null, this);
            obj.set_taborder("36");
            obj.set_limitbymask("both");
            obj.style.set_align("right middle");
            obj.set_mask("990.90");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addRowA", "absolute", "10.91%", "220", null, "21", "76.9%", null, this);
            obj.set_taborder("19");
            obj.set_text("직영점 추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delRowA", "absolute", "23.86%", "220", null, "21", "63.83%", null, this);
            obj.set_taborder("18");
            obj.set_text("직영점 삭제");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "0", "220", "10.41%", "21", null, null, this);
            obj.set_taborder("41");
            obj.set_text("직영점");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 788, 1037, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("특약매입 거래계약서(수산)");

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
            obj = new BindItem("item18","edt_ETC52","value","ds_eltCtrwDtl01","ETC52");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edt_ETC22","value","ds_eltCtrwDtl01","ETC22");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","edt_ETC21","value","ds_eltCtrwDtl01","ETC21");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_RT","value","ds_eltCtrwDtl01","RT");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_311602.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_311602.xfdl", function() {
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
        	
        	// 폼양식
        	for (var i = 0 ; i < this.parent.ds_etcEltStylAmm.rowcount; i++) {
        		if (this.parent.ds_etcEltStylAmm.getColumn(i, "CTRW_KDC") == "152") {
        			this.ds_etcEltStylAmm101.copyRow(0, this.parent.ds_etcEltStylAmm, i);
        		}
        	}
        	
        	//trace(this.parent.ds_eltCtrwDtl.saveXML()) ;
        	this.parent.ds_eltCtrwDtl.set_enableevent(false);

        	for (var i = 0; i < this.parent.ds_eltCtrwDtl.rowcount; i++) {
        		if (this.parent.ds_eltCtrwDtl.getColumn(i, "MN_CTRW_KDC") == "152") {
        			fv_chk = 1 ;
        			
        			if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(i, "CTRW_STY_VER")) == "") {
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CTRW_STY_VER" , this.ds_etcEltStylAmm101.getColumn(0,"CTRW_STY_VER") ) ;		
        			}
        			if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(i, "CHG_SQNO")) == "") {
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CHG_SQNO" , this.parent.ds_register.getColumn(0 ,"CHG_SQNO"));
        			}
        			if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(i, "ETC22")) == "") {
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC22", '"계약담당자"가 지정한 일자'); // 납품기일 기본값
        			}
        			this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC17", this.parent.cal_ctrStDt.value) ; // 계약 시작일
        			this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC18", this.parent.cal_ctrEdDt.value) ; // 계약 종료일
        						
        	        //this.ds_eltCtrwDtl01.set_updatecontrol(true); // 이걸 해주지 않으면 자동으로 바뀌지 않음
        			this.ds_eltCtrwDtl01.addRow();
        			this.ds_eltCtrwDtl01.copyRow(0, this.parent.ds_eltCtrwDtl, fv_position);
        			
        			this.search_item_list();
        			
        			// alert(this.ds_eltCtrwDtl01.saveXML());
        			this.parent.ds_eltCtrwDtl.set_enableevent(true);
        		}
        	}
        	
        	if(this.parent.ds_ctEtcItemList.rowcount > 0) {
        		for (var i = 0; i < this.parent.ds_ctEtcItemList.rowcount; i++) {
        			if (this.parent.ds_ctEtcItemList.getColumn(i, "ITEM_CODE") == "A") {
        				var row = this.ds_ctEtcItemAList.addRow();
        				this.ds_ctEtcItemAList.copyRow(row, this.parent.ds_ctEtcItemList, i)
        			}else if (this.parent.ds_ctEtcItemList.getColumn(i, "ITEM_CODE") == "I") {
        				var row = this.ds_ctEtcItemIList.addRow();
        				this.ds_ctEtcItemIList.copyRow(row, this.parent.ds_ctEtcItemList, i)
        			}
        		}
        	}
        }

        
        /*
         * 편집값 세팅 
         */
        this.OMG_DS_SC_311602_ontextchanged = function(obj,e)
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
        	
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC17" , this.edt_ETC17.value) ; // 계약유효 시작일
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC18" , this.edt_ETC18.value) ; // 계약유효 종료일
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "RT" , this.edt_RT.value) ; // 마진율
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC21" , this.edt_ETC21.value) ; // [첨부1] 납품장소
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC22" , this.edt_ETC22.value) ; // [첨부1] 납품기일
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC52" , this.edt_ETC52.value) ; // [첨부1] 기타특약사항
        }

        /* Validation Check */
        this.fn_validationCheck = function()
        {
            var strTitletext = "특약매입거래계약서";
        	
        	// 마진율
        	if (this.gfn_nullToEmpty(this.edt_RT.value) == "") {
        		alert("마진율을 입력해주세요.");
        		this.edt_RT.setFocus();
        		return false;
        	}
        	
        	// [첨부1] 납품기일
        	if (this.gfn_nullToEmpty(this.edt_ETC21.value) == "") {
        		alert("납품장소를 입력해주세요.");
        		this.edt_ETC21.setFocus();
        		return false;
        	}
        	
        	// [첨부1] 납품  장소 내역
        	if (this.ds_ctEtcItemAList.getRowCount() > 0) {
        		for (var i=0; i<this.ds_ctEtcItemAList.getRowCount(); i++) {
        			var c1 = this.ds_ctEtcItemAList.getColumn(i, "BRAND");
        			var c2 = this.ds_ctEtcItemAList.getColumn(i, "ITEM_NAME");
        			var c3 = this.ds_ctEtcItemAList.getColumn(i, "STANDARD");
        			var c4 = this.ds_ctEtcItemAList.getColumn(i, "QTY");
        			if (this.gfn_nullToEmpty(c1) == "" || this.gfn_nullToEmpty(c2) == "" || this.gfn_nullToEmpty(c3) == "" || this.gfn_nullToEmpty(c4) == "") {
        				alert("납품 장소 리스트에 입력되지 않은 행이 있습니다.\n해당 행을 입력하시거나 불필요한 경우 행삭제를 해주세요.");
        				return false;
        			}
        		}
        	}else{
        		alert("납품 장소 리스트를 입력해주세요");
        		return false;
        	}
        	

        	// [첨부1] 납품기일
        	if (this.gfn_nullToEmpty(this.edt_ETC22.value) == "") {
        		alert("납품기일을 입력해주세요.");
        		this.edt_ETC22.setFocus();
        		return false;
        	}
        	
        	// [첨부1] 납품 대상 상품 내역
        	if (this.ds_ctEtcItemIList.getRowCount() > 0) {
        		for (var i=0; i<this.ds_ctEtcItemIList.getRowCount(); i++) {
        				var c1 = this.ds_ctEtcItemIList.getColumn(i, "BRAND");
        				var c2 = this.ds_ctEtcItemIList.getColumn(i, "ITEM_NAME");
        				var c3 = this.ds_ctEtcItemIList.getColumn(i, "QTY");
        				var c4 = this.ds_ctEtcItemIList.getColumn(i, "UPR");
        			
        			if (this.gfn_nullToEmpty(c1) == "" || this.gfn_nullToEmpty(c2) == "" || this.gfn_nullToEmpty(c3) == "" || this.gfn_nullToEmpty(c4) == "") {
        				alert("납품 대상 상품 리스트에 입력되지 않은 행이 있습니다.\n해당 행을 입력하시거나 불필요한 경우 행삭제를 해주세요.");
        				return false;
        			}
        		}
        	}else{
        		alert("납품  대상 상품 리스트를 입력해주세요");
        		return false;
        	}
        	
        	return true;
        }

        /* 납품 장소 내역 행추가 */
        this.btn_addrowA_onclick = function(obj,e)
        {
        	var nRow_A = this.ds_ctEtcItemAList.addRow();
        	//ds_rsclist
        	this.ds_ctEtcItemAList.setColumn(nRow_A, "ISCHECKED", "0");
        	this.ds_ctEtcItemAList.setColumn(nRow_A, "ELT_CTRW_NO", "");
        	this.ds_ctEtcItemAList.setColumn(nRow_A, "CHG_SQNO", "001" );
        	this.ds_ctEtcItemAList.setColumn(nRow_A, "ITEM_CODE", "A" );
        	
        	this.ds_ctEtcItemAList.set_updatecontrol(false); //
        	this.ds_ctEtcItemAList.setRowType(nRow_A, Dataset.ROWTYPE_INSERT);
        	this.ds_ctEtcItemAList.set_updatecontrol(true); // 이걸 해주지 않으면 자동으로 바뀌지 않음
        	
        	var nRow_I = this.ds_ctEtcItemIList.addRow();
        	
        	this.ds_ctEtcItemIList.setColumn(nRow_I, "ISCHECKED", "0");
        	this.ds_ctEtcItemIList.setColumn(nRow_I, "ELT_CTRW_NO", "");
        	this.ds_ctEtcItemIList.setColumn(nRow_I, "CHG_SQNO", "001" );
        	this.ds_ctEtcItemIList.setColumn(nRow_I, "ITEM_CODE", "I" );
        	this.ds_ctEtcItemIList.setColumn(nRow_I, "QTY", '"계약담당자"의 발주량에 따름');
        	this.ds_ctEtcItemIList.setColumn(nRow_I, "UPR", "상호 협의 단가" );
        				
        	this.ds_ctEtcItemIList.set_updatecontrol(false); //
        	this.ds_ctEtcItemIList.setRowType(nRow_I, Dataset.ROWTYPE_INSERT);
        	this.ds_ctEtcItemIList.set_updatecontrol(true); // 이걸 해주지 않으면 자동으로 바뀌지 않음
        }

        /* 납품 장소 내역 행삭제 */
        this.btn_delrowA_onclick = function(obj,e)
        {
        	var cnt = this.ds_ctEtcItemAList.getRowCount();
        	if (cnt > 0) {
        		var updateDel = false;
        		for (var i=this.ds_ctEtcItemAList.getRowCount()-1; i>=0; i--) {
        			if (this.ds_ctEtcItemAList.getColumn(i, "ISCHECKED") == "1") {
        				if (this.gfn_nullToEmpty(this.ds_ctEtcItemAList.getColumn(i, "SQNO")) != "") {
        					updateDel = true;
        					continue;
        				}
        				this.ds_ctEtcItemAList.deleteRow(i);
        				this.ds_ctEtcItemIList.deleteRow(i);
        			}	
        		}
        		if (updateDel) {
        			alert("계약서 작성시 입력한 기존 항목들은 화면에서 바로 행삭제가 되지 않으며, 계약서 수정시 오른쪽 체크박스를 선택한 항목들이 삭제됩니다.");
        		}
        	}
        }

        
        /* 납품 대상 상품 내역 행추가 */
        /*
        this.btn_addrowI_onclick = function(obj:Button,  e:nexacro.ClickEventInfo)
        {
        	var nRow = this.ds_ctEtcItemIList.addRow();
        	//ds_rsclist
        	this.ds_ctEtcItemIList.setColumn(nRow, "ISCHECKED", "0");
        	this.ds_ctEtcItemIList.setColumn(nRow, "ELT_CTRW_NO", "");
        	this.ds_ctEtcItemIList.setColumn(nRow, "CHG_SQNO", "001" );
        	this.ds_ctEtcItemIList.setColumn(nRow, "ITEM_CODE", "I" );
        	
        	this.ds_ctEtcItemIList.set_updatecontrol(false); //
        	this.ds_ctEtcItemIList.setRowType(nRow, Dataset.ROWTYPE_INSERT);
        	this.ds_ctEtcItemIList.set_updatecontrol(true); // 이걸 해주지 않으면 자동으로 바뀌지 않음
        }
        *

        /* 납품 대상 상품 내역 행삭제 */
        /*
        this.btn_delrowI_onclick = function(obj:Button,  e:nexacro.ClickEventInfo)
        {
        	var cnt = this.ds_ctEtcItemIList.getRowCount();
        	if (cnt > 0) {
        		var updateDel = false;
        		for (var i=this.ds_ctEtcItemIList.getRowCount()-1; i>=0; i--) {
        			if (this.ds_ctEtcItemIList.getColumn(i, "ISCHECKED") == "1") {
        				if (this.gfn_nullToEmpty(this.ds_ctEtcItemIList.getColumn(i, "SQNO")) != "") {
        					updateDel = true;
        					continue;
        				}
        				this.ds_ctEtcItemIList.deleteRow(i);
        			}
        		}
        		if (updateDel) {
        			alert("계약서 작성시 입력한 기존 항목들은 화면에서 바로 행삭제가 되지 않으며, 계약서 수정시 오른쪽 체크박스를 선택한 항목들이 삭제됩니다.");
        		}
        	}
        }
        */

        /* 납품내역  조회*/
        this.search_item_list = function()
        {	
        	var eltCtrwNo  = this.parent.ds_register.getColumn(0 ,"ELT_CTRW_NO");    //전자계약서번호
        	var chgSqno    =  this.parent.ds_register.getColumn(0 ,"CHG_SQNO");   // 변경일련번호
        	//var ctrwStyVer = this.ds_ctEtcItemList.getColumn(curRow, "CTRW_STY_VER");  
        	
        	param = " eltCtrwNo=" + eltCtrwNo +
        			" chgSqno=" + chgSqno
        			;
        			
        	var sSvcID        = "searchItemList";//통신아이디
        	var sURL          = "svc::rest/ct/eltctrw/retrievetEtcItemList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_ctEtcItemList=ds_ctEtcItemList";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        //callback메소드
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID == "searchItemList") {
        			if (this.ds_ctEtcItemList.rowcount == 0) {
        				/*
        				var nRow = this.ds_ctEtcItemIList.addRow();
        				this.ds_ctEtcItemIList.setColumn(nRow, "ISCHECKED", "0");
        				this.ds_ctEtcItemIList.setColumn(nRow, "ELT_CTRW_NO", "");
        				this.ds_ctEtcItemIList.setColumn(nRow, "CHG_SQNO", "001" );
        				this.ds_ctEtcItemIList.setColumn(nRow, "BRAND", "");
        				this.ds_ctEtcItemIList.setColumn(nRow, "ITEM_NAME", "");
        				this.ds_ctEtcItemIList.setColumn(nRow, "QTY", '"계약담당자"의 발주량에 따름');
        				this.ds_ctEtcItemIList.setColumn(nRow, "UPR", "상호 협의 단가" );
        				this.ds_ctEtcItemIList.setColumn(nRow, "ITEM_CODE", "I" );
        				*/
        			}else{
        				//납품 장소 내역 copy
        				this.ds_ctEtcItemList.filter("ITEM_CODE == 'I'");
        				this.ds_ctEtcItemAList.copyData(ds_ctEtcItemList,true);
        				this.ds_ctEtcItemList.filter("");
        				//납품 대상 상품 내역 copy
        				this.ds_ctEtcItemList.filter("BRAND == 'I'");
        				this.ds_ctEtcItemIList.copyData(ds_ctEtcItemList,true);
        				this.ds_ctEtcItemList.filter("");			
        			}
        		}
        	}
        }

        // 납품 장소 그리드 삭제 체크
        this.GridA_oncellclick = function(obj,e)
        {
        	if (e.col == 0) {
        		var chk = this.ds_ctEtcItemAList.getColumn(e.row, "ISCHECKED");
        		if (chk == "0") {
        			this.ds_ctEtcItemAList.setColumn(e.row, "ISCHECKED", "1");
        		} else {
        			this.ds_ctEtcItemAList.setColumn(e.row, "ISCHECKED", "0");
        		}
        	}
        }

        // 납품 대상 상품  그리드 삭제 체크
        this.GridI_oncellclick = function(obj,e)
        {
        	if (e.col == 0) {
        		var chk = this.ds_ctEtcItemIList.getColumn(e.row, "ISCHECKED");
        		if (chk == "0") {
        			this.ds_ctEtcItemIList.setColumn(e.row, "ISCHECKED", "1");
        		} else {
        			this.ds_ctEtcItemIList.setColumn(e.row, "ISCHECKED", "0");
        		}
        	}
        }

        this.FileUpload01_onitemchanged = function(obj,e)
        {
        	this.gfn_callUpload(obj);
        }

        this.FileUpload01_onlbuttondown = function(obj,e)
        {
        	var row = 0;
        	for(var i = this.ds_ctEtcItemAList.getRowCount()-1; i >= 0; i--) {
        		var nCheck = 0;
        		nCheck = this.ds_ctEtcItemAList.getColumn(i, "ISCHECKED");
        		if(nCheck == 1){
        			row += 1;
        		}
        	}
        }

        this.FileUpload01_onsuccess = function(obj,e)
        {
        	if (e.datasets == null) {
        		trace("업로드 실패");
        	} else {
        		trace("업로드 성공");
        		
        		this.ds_uploadresult.clear();
        		this.ds_uploadresult.copyData(e.datasets[0]);
        		
        		var orgName = this.ds_uploadresult.getColumn(0,"ORGFNAME");
        		var sysName = this.ds_uploadresult.getColumn(0,"SYSTEMFILENAME");
        		var fSize = this.ds_uploadresult.getColumn(0,"FILESIZE");
        		var objVal = orgName;
        		var sfilterList = "jpg,jpeg,png";
        		var size = 3;
        		
        		objVal = objVal.substr(objVal.lastIndexOf(".")+1).toLowerCase();
        	
        		var nRtn = sfilterList.indexOf(objVal);
        		
        		if(nRtn == -1){
        			this.ds_uploadresult.clear();
        			this.FileUpload01.deleteItem(0);
        			this.FileUpload01.appendItem();
        			alert("지원하지 않는 파일 형식입니다.\n(지원파일: "+sfilterList+")");
        			return;
        		}
        		
        		if(nexacro.toNumber(fSize) > nexacro.toNumber(1048576 *size)){
        			this.ds_uploadresult.clear();
        			this.FileUpload01.deleteItem(0);
        			this.FileUpload01.appendItem();
        			alert("파일사이즈 큽니다\n(지원최대사이즈: "+size+"MB)" );
        			return;
        		}
        		
        		this.ds_ctEtcItemAList.setColumn(this.ds_ctEtcItemAList.rowposition,"QTY",orgName);
        		this.ds_ctEtcItemAList.setColumn(this.ds_ctEtcItemAList.rowposition,"UPR",sysName);
        		
        		// 업로드 성공 시 포커스 자동 이동
        		this.ds_uploadresult.clear();
        		this.FileUpload01.deleteItem(0);
        		this.FileUpload01.appendItem();
        		var row = this.ds_ctEtcItemAList.findRowExpr("QTY  == null", null);
        		if (row != -1) {
        			//this.div_ntc.grd_file.selectRow(row);
        			this.ds_ctEtcItemAList.set_rowposition(row);
        		}
        	}
        }

        this.btn_fileDel_onclick = function(obj,e)
        {
        	if (this.ds_ctEtcItemAList.getColumn(this.ds_ctEtcItemAList.rowposition, "ISCHECKED") && this.ds_ctEtcItemAList.getColumn(this.ds_ctEtcItemAList.rowposition, "ISCHECKED") == 0) {
        		alert(" 삭제할 직영점행을 선택하세요.");
        	} else {
        		for (var i = this.ds_ctEtcItemAList.getRowCount()-1; i >= 0; i--) {
        			if (this.ds_ctEtcItemAList.getColumn(i,"ISCHECKED") == 1) {
        				this.ds_ctEtcItemAList.setColumn(i,"QTY","");
        				this.ds_ctEtcItemAList.setColumn(i,"UPR","");
        				this.ds_ctEtcItemAList.setColumn(i,"ISCHECKED", "0");
        			}
        		}
        	}
        }

        this.btn_fileUp_onclick = function(obj,e)
        {	
        	var findButtons = this.FileUpload01.filefindbuttons;
        	var id = findButtons.get_id(0);
        	var item = findButtons.get_item(id);

        	//파일찾기 버튼 클릭 
        	item.click(); 
        }

        this.ds_ctEtcItemAList_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "BRAND") {
        		this.ds_ctEtcItemIList.setColumn(e.row, "BRAND", this.ds_ctEtcItemAList.getColumn(e.row, "BRAND") );
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_file.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.ds_uploadresult.addEventHandler("onload", this.ds_uploadresult_onload, this);
            this.ds_ctEtcItemAList.addEventHandler("oncolumnchanged", this.ds_ctEtcItemAList_oncolumnchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.GridI.addEventHandler("oncellclick", this.GridI_oncellclick, this);
            this.edt_ETC52.addEventHandler("ontextchanged", this.OMG_DS_SC_311602_ontextchanged, this);
            this.GridA.addEventHandler("oncellclick", this.GridA_oncellclick, this);
            this.edt_ETC22.addEventHandler("ontextchanged", this.OMG_DS_SC_311602_ontextchanged, this);
            this.edt_ETC21.addEventHandler("ontextchanged", this.OMG_DS_SC_311602_ontextchanged, this);
            this.FileUpload01.addEventHandler("onlbuttondown", this.FileUpload01_onlbuttondown, this);
            this.FileUpload01.addEventHandler("onsuccess", this.FileUpload01_onsuccess, this);
            this.FileUpload01.addEventHandler("onitemchanged", this.FileUpload01_onitemchanged, this);
            this.btn_fileDel.addEventHandler("onclick", this.btn_fileDel_onclick, this);
            this.btn_fileUp.addEventHandler("onclick", this.btn_fileUp_onclick, this);
            this.edt_RT.addEventHandler("ontextchanged", this.OMG_DS_SC_311602_ontextchanged, this);
            this.btn_addRowA.addEventHandler("onclick", this.btn_addrowA_onclick, this);
            this.btn_delRowA.addEventHandler("onclick", this.btn_delrowA_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_311602.xfdl");

       
    };
}
)();