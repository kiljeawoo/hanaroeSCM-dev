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
                this.set_name("OMG_DS_SC_311708");
                this.set_titletext("일반자재 구매공급계약서");
                this._setFormPosition(0,0,788,750);
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
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"1\"/><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"STANDARD\" type=\"STRING\" size=\"256\"/><Column id=\"COUNTRY\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"256\"/><Column id=\"BRAND\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"UPR\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"ETC4\" type=\"STRING\" size=\"256\"/><Column id=\"ETC5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"1\"/><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"STANDARD\" type=\"STRING\" size=\"256\"/><Column id=\"COUNTRY\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"256\"/><Column id=\"BRAND\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"UPR\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"ETC4\" type=\"STRING\" size=\"256\"/><Column id=\"ETC5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"1\"/><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"STANDARD\" type=\"STRING\" size=\"256\"/><Column id=\"COUNTRY\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"FS_RGM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CHGM\" type=\"STRING\" size=\"256\"/><Column id=\"BRAND\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"UPR\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/><Column id=\"ETC4\" type=\"STRING\" size=\"256\"/><Column id=\"ETC5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static06", "absolute", "16.88%", "538", null, "29", "1.02%", null, this);
            obj.set_taborder("261");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0", "511", "59.26%", "21", null, null, this);
            obj.set_taborder("249");
            obj.set_text("[붙임 2] 추가약정서 (장려금(율))");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("left middle");
            obj.style.set_padding("0 0 1 5");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "0", "10", "59.26%", "21", null, null, this);
            obj.set_taborder("78");
            obj.set_text("[일반자재 구매공급계약서]");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("left middle");
            obj.style.set_padding("0 0 1 5");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "0", "163", "59.26%", "21", null, null, this);
            obj.set_taborder("81");
            obj.set_text("[붙임 1] 일반자재 구매·공급 가격표");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("left middle");
            obj.style.set_padding("0 0 1 5");
            this.addChild(obj.name, obj);

            obj = new Grid("GridI", "absolute", "0%", "576", null, "150", "0.89%", null, this);
            obj.set_taborder("19");
            obj.set_binddataset("ds_ctEtcItemIList");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"49\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"삭제\"/><Cell col=\"1\" text=\"품명\"/><Cell col=\"2\" text=\"규격\"/><Cell col=\"3\" text=\"상품코드\"/><Cell col=\"4\" text=\"장려금(율)\"/><Cell col=\"5\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"none\" text=\"bind:ISCHECKED\" autosizecol=\"none\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"text\" text=\"bind:ITEM_NAME\" editlimit=\"190\" editlengthunit=\"ascii\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"text\" style=\"align:center middle;\" text=\"bind:STANDARD\" editlimit=\"190\" editlengthunit=\"ascii\"/><Cell col=\"3\" edittype=\"text\" text=\"bind:ITEM_CODE\" editlimit=\"190\" editlengthunit=\"ascii\"/><Cell col=\"4\" edittype=\"text\" editfilter=\"number\" text=\"bind:UPR\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"text\" text=\"bind:COUNTRY\" editlimit=\"190\" editlengthunit=\"ascii\" autosizecol=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addRowI", "absolute", "91.5%", "511", null, "21", "0.89%", null, this);
            obj.set_taborder("18");
            obj.set_text("행추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delRowI", "absolute", "83.12%", "511", null, "21", "9.26%", null, this);
            obj.set_taborder("17");
            obj.set_text("행삭제");
            this.addChild(obj.name, obj);

            obj = new Grid("GridA", "absolute", "0%", "213", null, "249", "1.02%", null, this);
            obj.set_taborder("16");
            obj.set_binddataset("ds_ctEtcItemAList");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"49\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"삭제\"/><Cell col=\"1\" text=\"공급 업체명\"/><Cell col=\"2\" text=\"품목명\"/><Cell col=\"3\" text=\"상품코드\"/><Cell col=\"4\" text=\"가격\"/><Cell col=\"5\" text=\"과세구분\"/><Cell col=\"6\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"none\" text=\"bind:ISCHECKED\" autosizecol=\"none\"/><Cell col=\"1\" edittype=\"text\" style=\"align:center middle;\" text=\"bind:COMPANY\" editlimit=\"190\" editlengthunit=\"ascii\" autosizecol=\"none\"/><Cell col=\"2\" edittype=\"text\" text=\"bind:ITEM_NAME\" editlimit=\"190\" editlengthunit=\"ascii\" autosizecol=\"none\"/><Cell col=\"3\" edittype=\"text\" text=\"bind:ITEM_CODE\" editlimit=\"190\" editlengthunit=\"ascii\"/><Cell col=\"4\" edittype=\"text\" text=\"bind:UPR\" editlimit=\"190\" editlengthunit=\"ascii\"/><Cell col=\"5\" edittype=\"text\" text=\"bind:STANDARD\" editlimit=\"190\" editlengthunit=\"ascii\"/><Cell col=\"6\" edittype=\"text\" text=\"bind:COUNTRY\" editlimit=\"190\" editlengthunit=\"ascii\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delRowA", "absolute", "83.12%", "163", null, "21", "9.26%", null, this);
            obj.set_taborder("14");
            obj.set_text("행삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addRowA", "absolute", "91.5%", "163", null, "21", "1.02%", null, this);
            obj.set_taborder("15");
            obj.set_text("행추가");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", null, "193", "207", "21", "1.02%", null, this);
            obj.set_taborder("160");
            obj.set_text("(단위 : 원/부가세 포함)");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_atch1_yn", "absolute", "250", "163", "111", "19", null, null, this);
            obj.set_taborder("247");
            obj.set_text("별지 첨부");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_atch2_yn", "absolute", "230", "511", "111", "19", null, null, this);
            obj.set_taborder("248");
            obj.set_text("작성");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "16.88%", "63", null, "29", "0.89%", null, this);
            obj.set_taborder("250");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "16.88%", "91", null, "29", "0.89%", null, this);
            obj.set_taborder("251");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0%", "91", null, "29", "82.99%", null, this);
            obj.set_taborder("252");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "0", "40", "59.26%", "21", null, null, this);
            obj.set_taborder("253");
            obj.set_text("대금지급");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "44.67%", "91", null, "29", "34.26%", null, this);
            obj.set_taborder("254");
            obj.set_text("예금주명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC05", "absolute", "17.39%", "95", null, "21", "57.61%", null, this);
            obj.set_taborder("255");
            obj.set_inputtype("number");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("30");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC06", "absolute", "66.12%", "95", null, "21", "8.88%", null, this);
            obj.set_taborder("256");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC04", "absolute", "17.39%", "67", null, "21", "57.61%", null, this);
            obj.set_taborder("257");
            obj.set_value("농협");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            obj.set_enable("false");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "0%", "63", null, "29", "82.99%", null, this);
            obj.set_taborder("258");
            obj.set_text("은행");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "0%", "538", null, "29", "82.99%", null, this);
            obj.set_taborder("259");
            obj.set_text("대상 농협");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC23", "absolute", "17.39%", "542", null, "21", "57.61%", null, this);
            obj.set_taborder("260");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "42.77%", "542", "52", "21", null, null, this);
            obj.set_taborder("262");
            obj.set_text("농협");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 788, 750, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("일반자재 구매공급계약서");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item3","edt_ETC05","value","ds_eltCtrwDtl01","ETC5");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edt_ETC06","value","ds_eltCtrwDtl01","ETC6");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_ETC04","value","ds_eltCtrwDtl01","ETC4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","chk_atch1_yn","value","ds_eltCtrwDtl01","ETC21");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","chk_atch2_yn","value","ds_eltCtrwDtl01","ETC22");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edt_ETC23","value","ds_eltCtrwDtl01","ETC23");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_311708.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_311708.xfdl", function() {
        //include "lib::comLib.xjs";

        var ELT_CODE = "168"; // 메인계약서코드
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
        		if (this.parent.ds_etcEltStylAmm.getColumn(i, "CTRW_KDC") == ELT_CODE) {
        			this.ds_etcEltStylAmm101.copyRow(0, this.parent.ds_etcEltStylAmm, i);
        		}
        	}

        	for (var i = 0; i < this.parent.ds_eltCtrwDtl.rowcount; i++) {
        		if (this.parent.ds_eltCtrwDtl.getColumn(i, "MN_CTRW_KDC") == ELT_CODE) {
        			fv_chk = 1 ;
        			
        			if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(i, "CTRW_STY_VER")) == "") {
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CTRW_STY_VER", this.ds_etcEltStylAmm101.getColumn(0, "CTRW_STY_VER")) ;		
        			}
        			if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(i, "CHG_SQNO")) == "") {
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CHG_SQNO", this.parent.ds_register.getColumn(0, "CHG_SQNO"));
        			}
        			
        			if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(i, "ETC4")) == "") {
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC4", "농협"); // 은행(농협만 가능)
        			}
        			
        			this.ds_eltCtrwDtl01.addRow();
        			this.ds_eltCtrwDtl01.copyRow(0, this.parent.ds_eltCtrwDtl, fv_position);
        			
        			this.fn_atch1_yn();
        			this.fn_atch2_yn();
        			
        			this.search_item_list();
        		}
        	}
        	
        	if (this.parent.ds_ctEtcItemList.rowcount > 0) {
        		for (var i = 0; i < this.parent.ds_ctEtcItemList.rowcount; i++) {
        			if (this.parent.ds_ctEtcItemList.getColumn(i, "ETC5") == "A") {
        				var row = this.ds_ctEtcItemAList.addRow();
        				this.ds_ctEtcItemAList.copyRow(row, this.parent.ds_ctEtcItemList, i)
        			}else if (this.parent.ds_ctEtcItemList.getColumn(i, "ETC5") == "I") {
        				var row = this.ds_ctEtcItemIList.addRow();
        				this.ds_ctEtcItemIList.copyRow(row, this.parent.ds_ctEtcItemList, i)
        			}
        		}
        	}
        	
        	if (fv_chk == 0) {
        		this.parent.ds_eltCtrwDtl.deleteAll();
        		fv_position = this.parent.ds_eltCtrwDtl.addRow();
        		
        		this.parent.ds_eltCtrwDtl.setColumn(fv_position, "MN_CTRW_KDC", ELT_CODE);
        		this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CTRW_STY_VER", this.ds_etcEltStylAmm101.getColumn(0, "CTRW_STY_VER"));
        		this.parent.ds_eltCtrwDtl.setColumn(fv_position, "CHG_SQNO" , this.parent.ds_register.getColumn(0, "CHG_SQNO"));
        		
        		this.ds_eltCtrwDtl01.addRow();
        		this.ds_eltCtrwDtl01.copyRow(0, this.parent.ds_eltCtrwDtl, fv_position);
        	}
        }

        /*
         * 편집값 세팅 
         */
        this.OMG_DS_SC_311301_ontextchanged = function(obj,e)
        {	
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC4" , this.edt_ETC04.value) ; // 은행
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC5" , this.edt_ETC05.value) ; // 계좌번호
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC6" , this.edt_ETC06.value) ; // 예금주명
        	
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC23" , this.edt_ETC23.value) ; // 추가약정서 농협
        }

        /* Validation Check */
        this.fn_validationCheck = function()
        {
            var strTitletext = "일반자재 구매공급계약서";
        	
            if (this.gfn_nullToEmpty(this.edt_ETC05.value) == "") {
        		alert("결제계좌 계좌번호를 입력해주세요.");
        		this.edt_ETC05.setFocus();
        		return false;
        	}
        	
            if (this.gfn_nullToEmpty(this.edt_ETC06.value) == "") {
        		alert("결제계좌 예금주명을 입력해주세요.");
        		this.edt_ETC06.setFocus();
        		return false;
        	}
        	
        	// [붙임 1] 일반자재 구매·공급 가격표
        	if (this.chk_atch1_yn.value == "0") {
        		if (this.ds_ctEtcItemAList.getRowCount() > 0) {
        			for (var i=0; i<this.ds_ctEtcItemAList.getRowCount(); i++) {
        				var c1 = this.ds_ctEtcItemAList.getColumn(i, "COMPANY"); // 공급업체명
        				var c2 = this.ds_ctEtcItemAList.getColumn(i, "ITEM_NAME"); // 품목명
        				var c3 = this.ds_ctEtcItemAList.getColumn(i, "ITEM_CODE"); // 상품코드
        				var c4 = this.ds_ctEtcItemAList.getColumn(i, "UPR"); // 가격
        				var c5 = this.ds_ctEtcItemAList.getColumn(i, "STANDARD"); // 과세구분
        				if (this.gfn_nullToEmpty(c1) == "" || this.gfn_nullToEmpty(c2) == "" || this.gfn_nullToEmpty(c3) == "" || this.gfn_nullToEmpty(c4) == "" || this.gfn_nullToEmpty(c5) == "") {
        					alert("일반자재 구매·공급 가격표에 입력되지 않은 행이 있습니다.\n해당 행을 입력하시거나 불필요한 경우 행삭제를 해주세요.");
        					return false;
        				}
        			}
        		} else {
        			alert("일반자재 구매·공급 가격표를 입력해주세요");
        			return false;
        		}
        	}
        	
        	// [붙임 2] 추가약정서
        	if (this.chk_atch2_yn.value == "1") {
        		if (this.gfn_nullToEmpty(this.edt_ETC23.value) == "") {
        			alert("추가약정서 대상 농협명을 입력해주세요.");
        			this.edt_ETC23.setFocus();
        			return false;
        		}
        		
        		if (this.ds_ctEtcItemIList.getRowCount() > 0) {
        			for (var i=0; i<this.ds_ctEtcItemIList.getRowCount(); i++) {
        				var c1 = this.ds_ctEtcItemIList.getColumn(i, "ITEM_NAME"); // 품명
        				var c2 = this.ds_ctEtcItemIList.getColumn(i, "STANDARD"); // 규격
        				var c3 = this.ds_ctEtcItemIList.getColumn(i, "ITEM_CODE"); // 상품코드
        				var c4 = this.ds_ctEtcItemIList.getColumn(i, "UPR"); // 장려금(율)
        				
        				if (this.gfn_nullToEmpty(c1) == "" || this.gfn_nullToEmpty(c2) == "" || this.gfn_nullToEmpty(c3) == "" || this.gfn_nullToEmpty(c4) == "") {
        					alert("추가약정서에 입력되지 않은 행이 있습니다.\n해당 행을 입력하시거나 불필요한 경우 행삭제를 해주세요.");
        					return false;
        				}
        			}
        		} else {
        			alert("추가약정서를 입력해주세요");
        			return false;
        		}
        	}
        	
        	return true;
        }

        /* 제품내역 행추가 */
        this.btn_addrowA_onclick = function(obj,e)
        {
        	var nRow = this.ds_ctEtcItemAList.addRow();
        	//ds_rsclist
        	this.ds_ctEtcItemAList.setColumn(nRow, "ISCHECKED", "0");
        	this.ds_ctEtcItemAList.setColumn(nRow, "ELT_CTRW_NO", "");
        	this.ds_ctEtcItemAList.setColumn(nRow, "CHG_SQNO", "001");
        	this.ds_ctEtcItemAList.setColumn(nRow, "ETC5", "A");
        	
        	this.ds_ctEtcItemAList.set_updatecontrol(false); //
        	this.ds_ctEtcItemAList.setRowType(nRow, Dataset.ROWTYPE_INSERT);
        	this.ds_ctEtcItemAList.set_updatecontrol(true); // 이걸 해주지 않으면 자동으로 바뀌지 않음
        }

        /* 제품내역 행삭제 */
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
        			}
        		}
        		if (updateDel) {
        			alert("계약서 작성시 입력한 기존 항목들은 화면에서 바로 행삭제가 되지 않으며, 계약서 수정시 오른쪽 체크박스를 선택한 항목들이 삭제됩니다.");
        		}
        	}
        }

        /* 원제내역 행추가 */
        this.btn_addrowI_onclick = function(obj,e)
        {
        	var nRow = this.ds_ctEtcItemIList.addRow();
        	//ds_rsclist
        	this.ds_ctEtcItemIList.setColumn(nRow, "ISCHECKED", "0");
        	this.ds_ctEtcItemIList.setColumn(nRow, "ELT_CTRW_NO", "");
        	this.ds_ctEtcItemIList.setColumn(nRow, "CHG_SQNO", "001");
        	this.ds_ctEtcItemIList.setColumn(nRow, "ETC5", "I");
        	
        	this.ds_ctEtcItemIList.set_updatecontrol(false); //
        	this.ds_ctEtcItemIList.setRowType(nRow, Dataset.ROWTYPE_INSERT);
        	this.ds_ctEtcItemIList.set_updatecontrol(true); // 이걸 해주지 않으면 자동으로 바뀌지 않음
        }

        
        /* 원제내역 행삭제 */
        this.btn_delrowI_onclick = function(obj,e)
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
        				var nRow = this.ds_ctEtcItemAList.addRow();
        				this.ds_ctEtcItemAList.setColumn(nRow, "ISCHECKED", "0");
        				this.ds_ctEtcItemAList.setColumn(nRow, "ELT_CTRW_NO", "");
        				this.ds_ctEtcItemAList.setColumn(nRow, "CHG_SQNO", "001" );
        				this.ds_ctEtcItemAList.setColumn(nRow, "ETC5", "A" );
        			} else {
        				// 제품내역 copy
        				this.ds_ctEtcItemList.filter("ETC5 == 'A'");
        				this.ds_ctEtcItemAList.copyData(ds_ctEtcItemList, true);
        				this.ds_ctEtcItemList.filter("");
        				
        				// 원제내역 copy
        				this.ds_ctEtcItemList.filter("ETC5 == 'I'");
        				this.ds_ctEtcItemIList.copyData(ds_ctEtcItemList, true);
        				this.ds_ctEtcItemList.filter("");			
        			}
        		}
        	}
        }

        // 제품내역 그리드 삭제 체크
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

        // 원제내역 그리드 삭제 체크
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

        // 붙임1 별지첨부여부
        this.chk_atch1_yn_onchanged = function(obj,e)
        {
        	this.fn_atch1_yn();
        }

        this.fn_atch1_yn = function()
        {
        	this.btn_delRowA.set_enable(this.chk_atch1_yn.value != "1");
        	this.btn_addRowA.set_enable(this.chk_atch1_yn.value != "1");
        	this.GridA.set_enable(this.chk_atch1_yn.value != "1");
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC21", this.chk_atch1_yn.value);
        	
        	if (this.chk_atch1_yn.value == "1") {
        		this.ds_ctEtcItemAList.clearData();
        	}
        }

        // 붙임2 약정서 작성여부
        this.chk_atch2_yn_onchanged = function(obj,e)
        {
        	this.fn_atch2_yn();
        }

        this.fn_atch2_yn = function()
        {
        	this.btn_delRowI.set_enable(this.chk_atch2_yn.value == "1");
        	this.btn_addRowI.set_enable(this.chk_atch2_yn.value == "1");
        	this.edt_ETC23.set_enable(this.chk_atch2_yn.value == "1");
        	this.GridI.set_enable(this.chk_atch2_yn.value == "1");
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC22", this.chk_atch2_yn.value);
        	
        	if (this.chk_atch2_yn.value == "0") {
        		this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC23" , this.edt_ETC23.value); // 농협
        		this.edt_ETC23.set_value("");
        		this.ds_ctEtcItemIList.clearData();
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.GridI.addEventHandler("oncellclick", this.GridI_oncellclick, this);
            this.btn_addRowI.addEventHandler("onclick", this.btn_addrowI_onclick, this);
            this.btn_delRowI.addEventHandler("onclick", this.btn_delrowI_onclick, this);
            this.GridA.addEventHandler("oncellclick", this.GridA_oncellclick, this);
            this.btn_delRowA.addEventHandler("onclick", this.btn_delrowA_onclick, this);
            this.btn_addRowA.addEventHandler("onclick", this.btn_addrowA_onclick, this);
            this.chk_atch1_yn.addEventHandler("onchanged", this.chk_atch1_yn_onchanged, this);
            this.chk_atch2_yn.addEventHandler("onchanged", this.chk_atch2_yn_onchanged, this);
            this.edt_ETC05.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC06.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC04.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC23.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);

        };

        this.loadIncludeScript("OMG_DS_SC_311708.xfdl");

       
    };
}
)();
