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
                this.set_name("OMG_DS_SC_311706");
                this.set_titletext("농산물포장상자 구매공급계약서");
                this._setFormPosition(0,0,788,830);
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
            obj = new Static("Static00", "absolute", "16.88%", "63", null, "29", "0.89%", null, this);
            obj.set_taborder("173");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "16.88%", "91", null, "29", "0.89%", null, this);
            obj.set_taborder("183");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "0", "10", "59.26%", "21", null, null, this);
            obj.set_taborder("78");
            obj.set_text("[농산물포장상자 구매공급계약서]");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("left middle");
            obj.style.set_padding("0 0 1 5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0%", "91", null, "29", "82.99%", null, this);
            obj.set_taborder("175");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "0", "40", "59.26%", "21", null, null, this);
            obj.set_taborder("184");
            obj.set_text("대금지급");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "44.67%", "91", null, "29", "34.26%", null, this);
            obj.set_taborder("186");
            obj.set_text("예금주명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC05", "absolute", "17.39%", "95", null, "21", "57.61%", null, this);
            obj.set_taborder("4");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("30");
            obj.style.set_align("left middle");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC06", "absolute", "66.12%", "95", null, "21", "8.88%", null, this);
            obj.set_taborder("5");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC04", "absolute", "17.39%", "67", null, "21", "57.61%", null, this);
            obj.set_taborder("276");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            obj.style.set_align("left middle");
            obj.set_enable("false");
            obj.set_value("농협");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "0%", "63", null, "29", "82.99%", null, this);
            obj.set_taborder("279");
            obj.set_text("은행");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "0", "541", "59.26%", "21", null, null, this);
            obj.set_taborder("282");
            obj.set_text("[별첨 1] 농산물포장상자 구매공급추가약정서");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("left middle");
            obj.style.set_padding("0 0 1 5");
            this.addChild(obj.name, obj);

            obj = new Grid("GridA", "absolute", "0%", "571", null, "249", "1.02%", null, this);
            obj.set_taborder("283");
            obj.set_binddataset("ds_ctEtcItemAList");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"49\"/><Column size=\"233\"/><Column size=\"152\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"삭제\"/><Cell col=\"1\" rowspan=\"2\" text=\"상품명\"/><Cell col=\"2\" rowspan=\"2\" text=\"상품코드\"/><Cell col=\"3\" colspan=\"2\" text=\"장려금\"/><Cell col=\"5\" rowspan=\"2\" text=\"인정&#13;&#10;감모율(%)\"/><Cell row=\"1\" col=\"3\" text=\"율(%)\"/><Cell row=\"1\" col=\"4\" text=\"금(원)\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"none\" text=\"bind:ISCHECKED\" autosizecol=\"none\"/><Cell col=\"1\" edittype=\"text\" text=\"bind:ITEM_NAME\" editlimit=\"190\" editlengthunit=\"ascii\" autosizecol=\"none\"/><Cell col=\"2\" edittype=\"text\" editfilter=\"number\" text=\"bind:ITEM_CODE\" editlimit=\"190\" editlengthunit=\"ascii\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"text\" editfilter=\"number\" text=\"bind:QTY\" maskchar=\"_\" editlimit=\"6\" editlengthunit=\"ascii\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" text=\"bind:UPR\" mask=\"#,###\" editlimit=\"20\" editlengthunit=\"ascii\"/><Cell col=\"5\" edittype=\"text\" editfilter=\"number\" text=\"bind:BRAND\" editlimit=\"6\" editlengthunit=\"ascii\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delRowA", "absolute", "83.12%", "541", null, "21", "9.26%", null, this);
            obj.set_taborder("284");
            obj.set_text("행삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addRowA", "absolute", "91.5%", "541", null, "21", "1.02%", null, this);
            obj.set_taborder("285");
            obj.set_text("행추가");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0", "143", "59.26%", "21", null, null, this);
            obj.set_taborder("287");
            obj.set_text("[붙임 1] 골판지상자 품질검사 항목");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("left middle");
            obj.style.set_padding("0 0 1 5");
            this.addChild(obj.name, obj);

            obj = new Div("div_atch1", "absolute", "0%", "170", null, "373", "0.89%", null, this);
            obj.set_taborder("356");
            obj.set_enable("false");
            this.addChild(obj.name, obj);
            obj = new Static("Static54", "absolute", "22.49%", "28", null, "29", "46.23%", null, this.div_atch1);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static27", "absolute", "22.49%", "56", null, "29", "46.23%", null, this.div_atch1);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static29", "absolute", "22.49%", "84", null, "29", "46.23%", null, this.div_atch1);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static31", "absolute", "22.49%", "112", null, "29", "46.23%", null, this.div_atch1);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static33", "absolute", "22.49%", "140", null, "29", "46.23%", null, this.div_atch1);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static35", "absolute", "22.49%", "168", null, "29", "46.23%", null, this.div_atch1);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static37", "absolute", "22.49%", "196", null, "29", "46.23%", null, this.div_atch1);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static39", "absolute", "22.49%", "224", null, "29", "46.23%", null, this.div_atch1);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static41", "absolute", "22.49%", "252", null, "29", "46.23%", null, this.div_atch1);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static43", "absolute", "22.49%", "280", null, "29", "46.23%", null, this.div_atch1);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static45", "absolute", "22.49%", "308", null, "29", "46.23%", null, this.div_atch1);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "53.64%", "28", null, "29", "22.24%", null, this.div_atch1);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0%", "0", null, "29", "77.39%", null, this.div_atch1);
            obj.set_taborder("12");
            obj.set_text("항 목");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 0 2 0");
            obj.style.set_align("center middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "22.49%", "0", null, "29", "46.23%", null, this.div_atch1);
            obj.set_taborder("13");
            obj.set_text("품질기준");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 0 2 0");
            obj.style.set_align("center middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "53.64%", "0", null, "29", "22.24%", null, this.div_atch1);
            obj.set_taborder("14");
            obj.set_text("비 고");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 0 2 0");
            obj.style.set_align("center middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Edit("edt_ETC18", "absolute", "26.01%", "32", null, "21", "49.12%", null, this.div_atch1);
            obj.set_taborder("15");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            obj.style.set_align("left middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "0%", "28", null, "29", "77.39%", null, this.div_atch1);
            obj.set_taborder("16");
            obj.set_text("골조율");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 0 2 0");
            obj.style.set_align("center middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "0%", "56", null, "29", "77.39%", null, this.div_atch1);
            obj.set_taborder("17");
            obj.set_text("골형식");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 0 2 0");
            obj.style.set_align("center middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "0%", "84", null, "29", "77.39%", null, this.div_atch1);
            obj.set_taborder("18");
            obj.set_text("압축강도");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 0 2 0");
            obj.style.set_align("center middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "0%", "112", null, "29", "77.39%", null, this.div_atch1);
            obj.set_taborder("19");
            obj.set_text("파열강도");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 0 2 0");
            obj.style.set_align("center middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0%", "140", null, "29", "77.39%", null, this.div_atch1);
            obj.set_taborder("20");
            obj.set_text("발수도");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 0 2 0");
            obj.style.set_align("center middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "10.93%", "168", null, "29", "77.39%", null, this.div_atch1);
            obj.set_taborder("21");
            obj.set_text("인쇄지");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 0 2 0");
            obj.style.set_align("center middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "10.93%", "196", null, "29", "77.39%", null, this.div_atch1);
            obj.set_taborder("22");
            obj.set_text("표면지");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 0 2 0");
            obj.style.set_align("center middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "10.93%", "224", null, "29", "77.39%", null, this.div_atch1);
            obj.set_taborder("23");
            obj.set_text("골심지");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 0 2 0");
            obj.style.set_align("center middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "10.93%", "252", null, "29", "77.39%", null, this.div_atch1);
            obj.set_taborder("24");
            obj.set_text("중심지");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 0 2 0");
            obj.style.set_align("center middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static23", "absolute", "10.93%", "280", null, "29", "77.39%", null, this.div_atch1);
            obj.set_taborder("25");
            obj.set_text("골심지");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 0 2 0");
            obj.style.set_align("center middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static24", "absolute", "10.93%", "308", null, "29", "77.39%", null, this.div_atch1);
            obj.set_taborder("26");
            obj.set_text("이면지");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 0 2 0");
            obj.style.set_align("center middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static25", "absolute", "0%", "168", null, "169", "88.94%", null, this.div_atch1);
            obj.set_taborder("27");
            obj.set_text("발수도");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 0 2 0");
            obj.style.set_align("center middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Edit("edt_ETC21", "absolute", "54.27%", "32", null, "21", "22.99%", null, this.div_atch1);
            obj.set_taborder("28");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            obj.style.set_align("left middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static26", "absolute", "53.64%", "56", null, "29", "22.24%", null, this.div_atch1);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Edit("edt_ETC22", "absolute", "26.01%", "60", null, "21", "49.12%", null, this.div_atch1);
            obj.set_taborder("30");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            obj.style.set_align("left middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Edit("edt_ETC23", "absolute", "54.27%", "60", null, "21", "22.99%", null, this.div_atch1);
            obj.set_taborder("31");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            obj.style.set_align("left middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static28", "absolute", "53.64%", "84", null, "29", "22.24%", null, this.div_atch1);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Edit("edt_ETC24", "absolute", "26.01%", "88", null, "21", "49.12%", null, this.div_atch1);
            obj.set_taborder("33");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            obj.style.set_align("left middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Edit("edt_ETC25", "absolute", "54.27%", "88", null, "21", "22.99%", null, this.div_atch1);
            obj.set_taborder("34");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            obj.style.set_align("left middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static30", "absolute", "53.64%", "112", null, "29", "22.24%", null, this.div_atch1);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Edit("edt_ETC26", "absolute", "26.01%", "116", null, "21", "49.12%", null, this.div_atch1);
            obj.set_taborder("36");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            obj.style.set_align("left middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Edit("edt_ETC27", "absolute", "54.27%", "116", null, "21", "22.99%", null, this.div_atch1);
            obj.set_taborder("37");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            obj.style.set_align("left middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static32", "absolute", "53.64%", "140", null, "29", "22.24%", null, this.div_atch1);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Edit("edt_ETC28", "absolute", "26.01%", "144", null, "21", "49.12%", null, this.div_atch1);
            obj.set_taborder("39");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            obj.style.set_align("left middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Edit("edt_ETC29", "absolute", "54.27%", "144", null, "21", "22.99%", null, this.div_atch1);
            obj.set_taborder("40");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            obj.style.set_align("left middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static34", "absolute", "53.64%", "168", null, "29", "22.24%", null, this.div_atch1);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Edit("edt_ETC30", "absolute", "26.01%", "172", null, "21", "49.12%", null, this.div_atch1);
            obj.set_taborder("42");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            obj.style.set_align("left middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Edit("edt_ETC31", "absolute", "54.27%", "172", null, "21", "22.99%", null, this.div_atch1);
            obj.set_taborder("43");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            obj.style.set_align("left middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static36", "absolute", "53.64%", "196", null, "29", "22.24%", null, this.div_atch1);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Edit("edt_ETC32", "absolute", "26.01%", "200", null, "21", "49.12%", null, this.div_atch1);
            obj.set_taborder("45");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            obj.style.set_align("left middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Edit("edt_ETC33", "absolute", "54.27%", "200", null, "21", "22.99%", null, this.div_atch1);
            obj.set_taborder("46");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            obj.style.set_align("left middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static38", "absolute", "53.64%", "224", null, "29", "22.24%", null, this.div_atch1);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Edit("edt_ETC34", "absolute", "26.01%", "228", null, "21", "49.12%", null, this.div_atch1);
            obj.set_taborder("48");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            obj.style.set_align("left middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Edit("edt_ETC35", "absolute", "54.27%", "228", null, "21", "22.99%", null, this.div_atch1);
            obj.set_taborder("49");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            obj.style.set_align("left middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static40", "absolute", "53.64%", "252", null, "29", "22.24%", null, this.div_atch1);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Edit("edt_ETC36", "absolute", "26.01%", "256", null, "21", "49.12%", null, this.div_atch1);
            obj.set_taborder("51");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            obj.style.set_align("left middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Edit("edt_ETC37", "absolute", "54.27%", "256", null, "21", "22.99%", null, this.div_atch1);
            obj.set_taborder("52");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            obj.style.set_align("left middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static42", "absolute", "53.64%", "280", null, "29", "22.24%", null, this.div_atch1);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Edit("edt_ETC38", "absolute", "26.01%", "284", null, "21", "49.12%", null, this.div_atch1);
            obj.set_taborder("54");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            obj.style.set_align("left middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Edit("edt_ETC39", "absolute", "54.27%", "284", null, "21", "22.99%", null, this.div_atch1);
            obj.set_taborder("55");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            obj.style.set_align("left middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static44", "absolute", "53.64%", "308", null, "29", "22.24%", null, this.div_atch1);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Edit("edt_ETC40", "absolute", "26.01%", "312", null, "21", "49.12%", null, this.div_atch1);
            obj.set_taborder("57");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            obj.style.set_align("left middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Edit("edt_ETC41", "absolute", "54.27%", "312", null, "21", "22.99%", null, this.div_atch1);
            obj.set_taborder("58");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            obj.style.set_align("left middle");
            this.div_atch1.addChild(obj.name, obj);

            obj = new CheckBox("chk_atch1_yn", "absolute", "246", "143", "69", "21", null, null, this);
            obj.set_taborder("357");
            obj.set_text("작성");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 373, this.div_atch1,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("356");
            		p.set_enable("false");

            	}
            );
            this.div_atch1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 788, 830, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("농산물포장상자 구매공급계약서");

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
            obj = new BindItem("item0","Div00.edt_ETC18","value","ds_eltCtrwDtl01","ETC18");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Div00.edt_ETC21","value","ds_eltCtrwDtl01","ETC21");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Div00.edt_ETC22","value","ds_eltCtrwDtl01","ETC22");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Div00.edt_ETC23","value","ds_eltCtrwDtl01","ETC23");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Div00.edt_ETC24","value","ds_eltCtrwDtl01","ETC24");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Div00.edt_ETC25","value","ds_eltCtrwDtl01","ETC25");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Div00.edt_ETC26","value","ds_eltCtrwDtl01","ETC26");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Div00.edt_ETC27","value","ds_eltCtrwDtl01","ETC27");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Div00.edt_ETC28","value","ds_eltCtrwDtl01","ETC28");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","Div00.edt_ETC29","value","ds_eltCtrwDtl01","ETC29");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","Div00.edt_ETC30","value","ds_eltCtrwDtl01","ETC30");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","Div00.edt_ETC31","value","ds_eltCtrwDtl01","ETC31");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","Div00.edt_ETC32","value","ds_eltCtrwDtl01","ETC32");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","Div00.edt_ETC33","value","ds_eltCtrwDtl01","ETC33");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","Div00.edt_ETC34","value","ds_eltCtrwDtl01","ETC34");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","Div00.edt_ETC35","value","ds_eltCtrwDtl01","ETC35");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","Div00.edt_ETC36","value","ds_eltCtrwDtl01","ETC36");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","Div00.edt_ETC37","value","ds_eltCtrwDtl01","ETC37");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","Div00.edt_ETC38","value","ds_eltCtrwDtl01","ETC38");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","Div00.edt_ETC39","value","ds_eltCtrwDtl01","ETC39");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","Div00.edt_ETC40","value","ds_eltCtrwDtl01","ETC40");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","Div00.edt_ETC41","value","ds_eltCtrwDtl01","ETC41");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","chk_atch1_yn","value","ds_eltCtrwDtl01","ETC17");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_311706.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_311706.xfdl", function() {
        //include "lib::comLib.xjs";

        var ELT_CODE = "166"; // 메인계약서코드
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
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC4", this.edt_ETC04.value); // 은행
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC5", this.edt_ETC05.value); // 계좌번호
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC6", this.edt_ETC06.value); // 예금주명
        	
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC18", this.div_atch1.edt_ETC18.value); // 품질기준1
        	// 19,20은 금액(숫자)용
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC21", this.div_atch1.edt_ETC21.value); // 비고1
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC22", this.div_atch1.edt_ETC22.value); // 품질기준2
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC23", this.div_atch1.edt_ETC23.value); // 비고2
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC24", this.div_atch1.edt_ETC24.value); // 품질기준3
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC25", this.div_atch1.edt_ETC25.value); // 비고3
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC26", this.div_atch1.edt_ETC26.value); // 품질기준4
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC27", this.div_atch1.edt_ETC27.value); // 비고4
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC28", this.div_atch1.edt_ETC28.value); // 품질기준5
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC29", this.div_atch1.edt_ETC29.value); // 비고5
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC30", this.div_atch1.edt_ETC30.value); // 품질기준6
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC31", this.div_atch1.edt_ETC31.value); // 비고6
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC32", this.div_atch1.edt_ETC32.value); // 품질기준7
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC33", this.div_atch1.edt_ETC33.value); // 비고7
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC34", this.div_atch1.edt_ETC34.value); // 품질기준8
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC35", this.div_atch1.edt_ETC35.value); // 비고8
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC36", this.div_atch1.edt_ETC36.value); // 품질기준9
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC37", this.div_atch1.edt_ETC37.value); // 비고9
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC38", this.div_atch1.edt_ETC38.value); // 품질기준10
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC39", this.div_atch1.edt_ETC39.value); // 비고10
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC40", this.div_atch1.edt_ETC40.value); // 품질기준11
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC41", this.div_atch1.edt_ETC41.value); // 비고11
        }

        /* Validation Check */
        this.fn_validationCheck = function()
        {
            var strTitletext = "농산물포장상자 구매공급계약서";
            
            // 은행은 농협만 가능
        	
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
        	
        	// [붙임 1] 골판지상자 품질검사 항목(작성시만 확인)
        	if (this.chk_atch1_yn.value == "1") {
        		var atch1 = this.gfn_trim(this.div_atch1.edt_ETC18.value)
        			+ this.gfn_trim(this.div_atch1.edt_ETC21.value)
        			+ this.gfn_trim(this.div_atch1.edt_ETC22.value)
        			+ this.gfn_trim(this.div_atch1.edt_ETC23.value)
        			+ this.gfn_trim(this.div_atch1.edt_ETC24.value)
        			+ this.gfn_trim(this.div_atch1.edt_ETC25.value)
        			+ this.gfn_trim(this.div_atch1.edt_ETC26.value)
        			+ this.gfn_trim(this.div_atch1.edt_ETC27.value)
        			+ this.gfn_trim(this.div_atch1.edt_ETC28.value)
        			+ this.gfn_trim(this.div_atch1.edt_ETC29.value)
        			+ this.gfn_trim(this.div_atch1.edt_ETC30.value)
        			+ this.gfn_trim(this.div_atch1.edt_ETC31.value)
        			+ this.gfn_trim(this.div_atch1.edt_ETC32.value)
        			+ this.gfn_trim(this.div_atch1.edt_ETC33.value)
        			+ this.gfn_trim(this.div_atch1.edt_ETC34.value)
        			+ this.gfn_trim(this.div_atch1.edt_ETC35.value)
        			+ this.gfn_trim(this.div_atch1.edt_ETC36.value)
        			+ this.gfn_trim(this.div_atch1.edt_ETC37.value)
        			+ this.gfn_trim(this.div_atch1.edt_ETC38.value)
        			+ this.gfn_trim(this.div_atch1.edt_ETC39.value)
        			+ this.gfn_trim(this.div_atch1.edt_ETC40.value)
        			+ this.gfn_trim(this.div_atch1.edt_ETC41.value)
        		;
        		
        		if (this.gfn_isNull(atch1)) {
        			alert("[붙임1] 골판지상자 품질검사 항목이 작성되지 않았습니다. 최소 1가지 항목에 입력해주세요.\n작성하지 않으실경우 '작성' 체크박스를 해제 해주시기 바랍니다.");
        			return false;
        		}
        	}
        	
        	// [첨부1] 농산물포장상자 구매공급추가약정서
        	if (this.ds_ctEtcItemAList.getRowCount() > 0) {
        		for (var i=0; i<this.ds_ctEtcItemAList.getRowCount(); i++) {
        			var c1 = this.ds_ctEtcItemAList.getColumn(i, "ITEM_CODE"); // 상품코드
        			var c2 = this.ds_ctEtcItemAList.getColumn(i, "ITEM_NAME"); // 상품명
        			var c3 = this.ds_ctEtcItemAList.getColumn(i, "QTY"); // 장려금율
        			var c4 = this.ds_ctEtcItemAList.getColumn(i, "UPR"); // 장려금원
        			var c5 = this.ds_ctEtcItemAList.getColumn(i, "BRAND"); // 인정감모율
        			if (this.gfn_nullToEmpty(c1) == "" || this.gfn_nullToEmpty(c2) == "" || this.gfn_nullToEmpty(c3) == "" || this.gfn_nullToEmpty(c4) == "" || this.gfn_nullToEmpty(c5) == "") {
        				alert("구매공급추가약정서에 입력되지 않은 행이 있습니다.\n해당 행을 입력하시거나 불필요한 경우 행삭제를 해주세요.");
        				return false;
        			}
        		}
        	} else {
        		// 필수아님
        		// return false;
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

        
        /* 납품내역  조회*/
        this.search_item_list = function()
        {	
        	var eltCtrwNo  = this.parent.ds_register.getColumn(0, "ELT_CTRW_NO");    //전자계약서번호
        	var chgSqno    =  this.parent.ds_register.getColumn(0, "CHG_SQNO");   // 변경일련번호
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
        // 				var nRow = this.ds_ctEtcItemAList.addRow();
        // 				this.ds_ctEtcItemAList.setColumn(nRow, "ISCHECKED", "0");
        // 				this.ds_ctEtcItemAList.setColumn(nRow, "ELT_CTRW_NO", "");
        // 				this.ds_ctEtcItemAList.setColumn(nRow, "CHG_SQNO", "001" );
        // 				this.ds_ctEtcItemAList.setColumn(nRow, "ETC5", "A" );
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

        this.chk_atch1_yn_onchanged = function(obj,e)
        {
        	if (obj.value == "0") {
        		this.div_atch1.edt_ETC18.set_value(""); // 품질기준1
        		this.div_atch1.edt_ETC21.set_value(""); // 비고1
        		this.div_atch1.edt_ETC22.set_value(""); // 품질기준2
        		this.div_atch1.edt_ETC23.set_value(""); // 비고2
        		this.div_atch1.edt_ETC24.set_value(""); // 품질기준3
        		this.div_atch1.edt_ETC25.set_value(""); // 비고3
        		this.div_atch1.edt_ETC26.set_value(""); // 품질기준4
        		this.div_atch1.edt_ETC27.set_value(""); // 비고4
        		this.div_atch1.edt_ETC28.set_value(""); // 품질기준5
        		this.div_atch1.edt_ETC29.set_value(""); // 비고5
        		this.div_atch1.edt_ETC30.set_value(""); // 품질기준6
        		this.div_atch1.edt_ETC31.set_value(""); // 비고6
        		this.div_atch1.edt_ETC32.set_value(""); // 품질기준7
        		this.div_atch1.edt_ETC33.set_value(""); // 비고7
        		this.div_atch1.edt_ETC34.set_value(""); // 품질기준8
        		this.div_atch1.edt_ETC35.set_value(""); // 비고8
        		this.div_atch1.edt_ETC36.set_value(""); // 품질기준9
        		this.div_atch1.edt_ETC37.set_value(""); // 비고9
        		this.div_atch1.edt_ETC38.set_value(""); // 품질기준10
        		this.div_atch1.edt_ETC39.set_value(""); // 비고10
        		this.div_atch1.edt_ETC40.set_value(""); // 품질기준11
        		this.div_atch1.edt_ETC41.set_value(""); // 비고11
        		this.OMG_DS_SC_311301_ontextchanged();
        	}

        	this.div_atch1.set_enable(obj.value == "1");
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC17", this.chk_atch1_yn.value); // 첨부1 작성여부
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.edt_ETC05.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC06.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC04.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.GridA.addEventHandler("oncellclick", this.GridA_oncellclick, this);
            this.btn_delRowA.addEventHandler("onclick", this.btn_delrowA_onclick, this);
            this.btn_addRowA.addEventHandler("onclick", this.btn_addrowA_onclick, this);
            this.div_atch1.edt_ETC18.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.div_atch1.edt_ETC21.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.div_atch1.edt_ETC22.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.div_atch1.edt_ETC23.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.div_atch1.edt_ETC24.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.div_atch1.edt_ETC25.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.div_atch1.edt_ETC26.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.div_atch1.edt_ETC27.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.div_atch1.edt_ETC28.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.div_atch1.edt_ETC29.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.div_atch1.edt_ETC30.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.div_atch1.edt_ETC31.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.div_atch1.edt_ETC32.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.div_atch1.edt_ETC33.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.div_atch1.edt_ETC34.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.div_atch1.edt_ETC35.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.div_atch1.edt_ETC36.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.div_atch1.edt_ETC37.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.div_atch1.edt_ETC38.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.div_atch1.edt_ETC39.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.div_atch1.edt_ETC40.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.div_atch1.edt_ETC41.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.chk_atch1_yn.addEventHandler("onchanged", this.chk_atch1_yn_onchanged, this);

        };

        this.loadIncludeScript("OMG_DS_SC_311706.xfdl");

       
    };
}
)();
