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
                this.set_name("OMG_DS_SC_311702");
                this.set_titletext("농약 구매·납품 계약서");
                this._setFormPosition(0,0,788,960);
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


            
            // UI Components Initialize
            obj = new Static("Static20", "absolute", "16.88%", "918", null, "29", "0.89%", null, this);
            obj.set_taborder("254");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static54", "absolute", "16.88%", "890", null, "29", "0.89%", null, this);
            obj.set_taborder("268");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "16.88%", "127", null, "29", "0.89%", null, this);
            obj.set_taborder("173");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "16.88%", "155", null, "29", "0.89%", null, this);
            obj.set_taborder("183");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "16.88%", "303", null, "29", "0.89%", null, this);
            obj.set_taborder("243");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "16.88%", "331", null, "29", "0.89%", null, this);
            obj.set_taborder("245");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "16.88%", "214", null, "29", "0.89%", null, this);
            obj.set_taborder("232");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "16.88%", "421", null, "29", "0.89%", null, this);
            obj.set_taborder("225");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "16.88%", "275", null, "29", "0.89%", null, this);
            obj.set_taborder("214");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "16.88%", "393", null, "29", "0.89%", null, this);
            obj.set_taborder("201");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "16.88%", "62", null, "29", "0.89%", null, this);
            obj.set_taborder("162");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "16.88%", "449", null, "29", "0.89%", null, this);
            obj.set_taborder("204");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static86", "absolute", "0", "40", "59.26%", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_text("계약금액");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "0", "10", "59.26%", "21", null, null, this);
            obj.set_taborder("78");
            obj.set_text("[농약 구매·납품 계약서]");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("left middle");
            obj.style.set_padding("0 0 1 5");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "0", "515", "59.26%", "21", null, null, this);
            obj.set_taborder("81");
            obj.set_text("[붙임 1] 계통농약 구매·납품 계약명세표");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("left middle");
            obj.style.set_padding("0 0 1 5");
            this.addChild(obj.name, obj);

            obj = new Grid("GridA", "absolute", "0%", "565", null, "249", "1.02%", null, this);
            obj.set_taborder("16");
            obj.set_binddataset("ds_ctEtcItemAList");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"49\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"삭제\"/><Cell col=\"1\" text=\"회사\"/><Cell col=\"2\" text=\"상품코드\"/><Cell col=\"3\" text=\"상표명\"/><Cell col=\"4\" text=\"규격\"/><Cell col=\"5\" text=\"박스당수량\"/><Cell col=\"6\" text=\"납품단가\"/><Cell col=\"7\" text=\"수량\"/><Cell col=\"8\" text=\"금액\"/><Cell col=\"9\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"none\" text=\"bind:ISCHECKED\" autosizecol=\"none\"/><Cell col=\"1\" edittype=\"text\" style=\"align:center middle;\" text=\"bind:BRAND\" editlimit=\"190\" editlengthunit=\"ascii\" autosizecol=\"none\"/><Cell col=\"2\" edittype=\"text\" editfilter=\"number\" text=\"bind:ITEM_CODE\" autosizecol=\"none\"/><Cell col=\"3\" edittype=\"text\" text=\"bind:ITEM_NAME\" editlimit=\"190\" editlengthunit=\"ascii\"/><Cell col=\"4\" edittype=\"text\" editfilter=\"number\" text=\"bind:STANDARD\"/><Cell col=\"5\" edittype=\"text\" editfilter=\"number\" text=\"bind:COMPANY\"/><Cell col=\"6\" edittype=\"text\" editfilter=\"number\" text=\"bind:UPR\"/><Cell col=\"7\" edittype=\"text\" editfilter=\"number\" text=\"bind:QTY\"/><Cell col=\"8\" edittype=\"text\" editfilter=\"number\" text=\"bind:COUNTRY\"/><Cell col=\"9\" edittype=\"text\" text=\"bind:ETC1\" editlimit=\"190\" editlengthunit=\"ascii\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delRowA", "absolute", "83.12%", "515", null, "21", "9.26%", null, this);
            obj.set_taborder("14");
            obj.set_text("행삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addRowA", "absolute", "91.5%", "515", null, "21", "1.02%", null, this);
            obj.set_taborder("15");
            obj.set_text("행추가");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", null, "545", "207", "21", "1.02%", null, this);
            obj.set_taborder("160");
            obj.set_text("(단위 : 병/봉, 원, %)");
            obj.style.set_align("right middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "0%", "62", null, "29", "82.99%", null, this);
            obj.set_taborder("165");
            obj.set_text("계약수량");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_ETC01", "absolute", "17.39%", "66", null, "21", "77.41%", null, this);
            obj.set_taborder("0");
            obj.set_mask("90");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "22.97%", "66", null, "21", "67.01%", null, this);
            obj.set_taborder("170");
            obj.set_text("% 범위 이내");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "44.67%", "127", null, "29", "34.26%", null, this);
            obj.set_taborder("174");
            obj.set_text("지급일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0%", "155", null, "29", "82.99%", null, this);
            obj.set_taborder("175");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "0%", "127", null, "29", "82.99%", null, this);
            obj.set_taborder("176");
            obj.set_text("지급대상");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Calendar("edt_ETC03", "absolute", "17.39%", "131", null, "21", "70.43%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static07", "absolute", "23.98%", "159", null, "21", "56.85%", null, this);
            obj.set_taborder("181");
            obj.set_text("개월분의 관리비 상당액");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "0", "104", "59.26%", "21", null, null, this);
            obj.set_taborder("184");
            obj.set_text("대금지급");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "44.67%", "155", null, "29", "34.26%", null, this);
            obj.set_taborder("186");
            obj.set_text("예금주명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC05", "absolute", "17.39%", "159", null, "21", "57.61%", null, this);
            obj.set_taborder("4");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("30");
            obj.style.set_align("left middle");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC06", "absolute", "66.12%", "159", null, "21", "8.88%", null, this);
            obj.set_taborder("5");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "0%", "393", null, "29", "82.99%", null, this);
            obj.set_taborder("192");
            obj.set_text("생산물배상책임보험");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "0%", "449", null, "29", "82.99%", null, this);
            obj.set_taborder("208");
            obj.set_text("참여제한");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "0", "253", "59.26%", "21", null, null, this);
            obj.set_taborder("211");
            obj.set_text("약효보증기간 경과농약처리");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "0%", "275", null, "85", "82.99%", null, this);
            obj.set_taborder("212");
            obj.set_text("현금정산");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_ETC09", "absolute", "24.37%", "279", null, "21", "68.91%", null, this);
            obj.set_taborder("8");
            obj.set_mask("9999");
            obj.set_limitbymask("integer");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "17.64%", "279", null, "21", "74.37%", null, this);
            obj.set_taborder("216");
            obj.set_text("공급년도");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "1", "369", "59.26%", "21", null, null, this);
            obj.set_taborder("217");
            obj.set_text("제품사용에 따른 피해보상 및 손해배상예정액");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "17.64%", "452", null, "21", "52.66%", null, this);
            obj.set_taborder("218");
            obj.set_text("공정거래위원회의 의결이 있는 날로부터");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "51.52%", "452", null, "21", "42.01%", null, this);
            obj.set_taborder("220");
            obj.set_text("년 이내");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "0%", "421", null, "29", "82.99%", null, this);
            obj.set_taborder("221");
            obj.set_text("손해배상액");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_ETC13", "absolute", "24.11%", "426", null, "21", "70.69%", null, this);
            obj.set_taborder("12");
            obj.set_mask("90");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "30.33%", "426", null, "21", "67.77%", null, this);
            obj.set_taborder("223");
            obj.set_text("%");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "17.64%", "426", null, "21", "74.87%", null, this);
            obj.set_taborder("224");
            obj.set_text("납품액의");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_ETC14", "absolute", "45.69%", "453", null, "21", "49.11%", null, this);
            obj.set_taborder("13");
            obj.set_mask("90");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_ETC12", "absolute", "17.64%", "397", null, "21", "77.16%", null, this);
            obj.set_taborder("11");
            obj.set_mask("90");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "23.48%", "396", null, "21", "68.78%", null, this);
            obj.set_taborder("228");
            obj.set_text("억원 이상");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "192", "59.26%", "21", null, null, this);
            obj.set_taborder("229");
            obj.set_text("지체상금");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "0%", "214", null, "29", "82.99%", null, this);
            obj.set_taborder("230");
            obj.set_text("물픔대금");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "25.38%", "218", null, "21", "71.07%", null, this);
            obj.set_taborder("231");
            obj.set_text("분의");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_ETC07", "absolute", "17.39%", "218", null, "21", "75.13%", null, this);
            obj.set_taborder("6");
            obj.set_mask("9,990");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_ETC08", "absolute", "29.19%", "218", null, "21", "63.2%", null, this);
            obj.set_taborder("7");
            obj.set_mask("9,990.0");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "31.6%", "279", null, "21", "7.61%", null, this);
            obj.set_taborder("235");
            obj.set_text("년 이전 공급분은 판매장려금을 차감하여 정산");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_ETC9_2", "absolute", "17.64%", "307", null, "21", "75.63%", null, this);
            obj.set_taborder("236");
            obj.set_type("string");
            obj.set_mask("9999");
            obj.set_limitbymask("integer");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "24.87%", "307", null, "21", "69.42%", null, this);
            obj.set_taborder("237");
            obj.set_text("년부터");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "37.06%", "307", null, "21", "4.19%", null, this);
            obj.set_taborder("238");
            obj.set_text("년까지 공급분은 지역농협에 기 지급한 계통이용장려금을 차감한 공급단가로 정산");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_ETC10", "absolute", "29.82%", "307", null, "21", "63.45%", null, this);
            obj.set_taborder("9");
            obj.set_type("string");
            obj.set_mask("9999");
            obj.set_limitbymask("integer");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "24.87%", "335", null, "21", "5.84%", null, this);
            obj.set_taborder("240");
            obj.set_text("년 이후 공급분은 공급단가로 정산");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_ETC11", "absolute", "17.64%", "335", null, "21", "75.63%", null, this);
            obj.set_taborder("10");
            obj.set_type("string");
            obj.set_mask("9999");
            obj.set_limitbymask("integer");
            this.addChild(obj.name, obj);

            obj = new Calendar("edt_ETC04", "absolute", "66.12%", "131", null, "21", "21.7%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("247");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new Static("Static41", "absolute", "30.2%", "131", null, "21", "59.77%", null, this);
            obj.set_taborder("248");
            obj.set_text("까지 매입분");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0", "838", "59.26%", "21", null, null, this);
            obj.set_taborder("249");
            obj.set_text("[붙임 2] 농약 구매납품 추가약정서");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("left middle");
            obj.style.set_padding("0 0 1 5");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "800", "864", "59.26%", "21", null, null, this);
            obj.set_taborder("250");
            obj.set_text("원제내역");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("GridI", "absolute", "101.52%", "888", null, "150", "-100.63%", null, this);
            obj.set_taborder("251");
            obj.set_binddataset("ds_ctEtcItemIList");
            obj.set_autoenter("select");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"49\"/><Column size=\"300\"/><Column size=\"250\"/><Column size=\"90\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"삭제\"/><Cell col=\"1\" text=\"원제명\"/><Cell col=\"2\" text=\"규격\"/><Cell col=\"3\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"none\" text=\"bind:ISCHECKED\" autosizecol=\"none\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"text\" text=\"bind:ITEM_NAME\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"text\" style=\"align:center middle;\" text=\"bind:STANDARD\" editlimit=\"190\" editlengthunit=\"ascii\" autosizecol=\"none\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"text\" text=\"bind:BRAND\" autosizecol=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addRowI", "absolute", "193.02%", "863", null, "21", "-100.63%", null, this);
            obj.set_taborder("252");
            obj.set_text("행추가");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delRowI", "absolute", "184.64%", "863", null, "21", "-92.26%", null, this);
            obj.set_taborder("253");
            obj.set_text("행삭제");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "0%", "890", null, "57", "82.99%", null, this);
            obj.set_taborder("256");
            obj.set_text("납품총액");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "1", "866", "59.26%", "21", null, null, this);
            obj.set_taborder("258");
            obj.set_text("예약구매장려금");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_ETC17", "absolute", "33.88%", "922", null, "21", "60.91%", null, this);
            obj.set_taborder("262");
            obj.set_mask("90.09");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "39.34%", "922", null, "21", "58.76%", null, this);
            obj.set_taborder("263");
            obj.set_text("%");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_ETC15", "absolute", "17.64%", "894", null, "21", "77.16%", null, this);
            obj.set_taborder("266");
            obj.set_mask("90");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static53", "absolute", "23.48%", "893", null, "21", "65.99%", null, this);
            obj.set_taborder("267");
            obj.set_text("%미만 납품시");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_ETC16", "absolute", "33.88%", "894", null, "21", "60.91%", null, this);
            obj.set_taborder("269");
            obj.set_mask("90.09");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "39.34%", "894", null, "21", "58.76%", null, this);
            obj.set_taborder("270");
            obj.set_text("%");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_ETC15_2", "absolute", "17.64%", "922", null, "21", "77.16%", null, this);
            obj.set_taborder("271");
            obj.set_mask("90");
            obj.set_limitbymask("both");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "23.48%", "922", null, "21", "65.99%", null, this);
            obj.set_taborder("272");
            obj.set_text("%이상 납품시");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 788, 960, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("농약 구매·납품 계약서");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item28","edt_ETC01","value","ds_eltCtrwDtl01","ETC1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edt_ETC03","value","ds_eltCtrwDtl01","ETC3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","edt_ETC04","value","ds_eltCtrwDtl01","ETC4");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edt_ETC05","value","ds_eltCtrwDtl01","ETC5");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","edt_ETC08","value","ds_eltCtrwDtl01","ETC8");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","edt_ETC12","value","ds_eltCtrwDtl01","ETC12");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","edt_ETC14","value","ds_eltCtrwDtl01","ETC14");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_ETC11","value","ds_eltCtrwDtl01","ETC11");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edt_ETC06","value","ds_eltCtrwDtl01","ETC6");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edt_ETC07","value","ds_eltCtrwDtl01","ETC7");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","edt_ETC8_2","value","ds_eltCtrwDtl01","ETC9");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","edt_ETC09","value","ds_eltCtrwDtl01","ETC9");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","edt_ETC10","value","ds_eltCtrwDtl01","ETC10");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_ETC03","value","ds_eltCtrwDtl01","ETC3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","edt_ETC9_2","value","ds_eltCtrwDtl01","ETC9");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","edt_ETC13","value","ds_eltCtrwDtl01","ETC13");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","edt_ETC17","value","ds_eltCtrwDtl01","ETC17");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","edt_ETC15","value","ds_eltCtrwDtl01","ETC15");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","edt_ETC16","value","ds_eltCtrwDtl01","ETC16");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","edt_ETC15_2","value","ds_eltCtrwDtl01","ETC15");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_311702.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_311702.xfdl", function() {
        //include "lib::comLib.xjs";

        var ELT_CODE = "162"; // 메인계약서코드
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
        			
        			if (this.gfn_nullToEmpty(this.parent.ds_eltCtrwDtl.getColumn(i, "ETC1")) == "") {
        				var initdate = this.gfn_today('yyyy');
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC1", "10"); // 계약수량
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC3", initdate + "1130"); // 대금지급일(매입분)
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC4", initdate + "1213"); // 대금지급일(지급일)
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC7", "1000"); // 지체상금 ####분의 1.5
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC8", "1.5"); // 지체상금 1000분의 ##
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC9", "2016"); // 현금지급 공급년도 ##이전
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC10", "2019"); // 현금지급 공급년도 ETC9부터 ##까지
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC11", "2020"); // 현금지급 공급년도 ##이후
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC12", "1"); // 생산물배상책임보험
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC13", "10"); // 손해배상액
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC14", "2"); // 참여제한
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC15", "50"); // 붙임2 납품총액 기준 %
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC16", "2"); // 붙임2 %미만
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC17", "2.7"); // 붙임2 %이상
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
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC1", this.edt_ETC01.value); // 계약수량
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC3", this.edt_ETC03.value); // 지급대상
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC4", this.edt_ETC04.value); // 지급일
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC5", this.edt_ETC05.value); // 계좌번호
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC6", this.edt_ETC06.value); // 예금주명
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC7", this.edt_ETC07.value); // 지체상금(분모)
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC8", this.edt_ETC08.value); // 지체상금(분자)
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC9", this.edt_ETC09.value); // 현금정산 공급년도(이전)
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC10", this.edt_ETC10.value); // 현금정산 공급년도(부터~까지)
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC11", this.edt_ETC11.value); // 현금정산 공급년도(이후)
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC12", this.edt_ETC12.value); // 생산물배상책임보험
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC13", this.edt_ETC13.value); // 손해배상액
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC14", this.edt_ETC14.value); // 참여제한
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC15", this.edt_ETC15.value); // 납품총액 ##%미만, ##%이상
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC16", this.edt_ETC16.value); // 장려금(미만)
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC17", this.edt_ETC17.value); // 장려금(이상)
        }

        /* Validation Check */
        this.fn_validationCheck = function()
        {
            var strTitletext = "농약 구매·납품 계약서";
            
            if (this.gfn_nullToEmpty(this.edt_ETC01.value) == "") {
        		alert("계약수량을 입력해주세요.");
        		this.edt_ETC01.setFocus();
        		return false;
        	}
        	
            if (this.gfn_nullToEmpty(this.edt_ETC03.value) == "") {
        		alert("지급대상일 입력해주세요.");
        		this.edt_ETC03.setFocus();
        		return false;
        	}
        	
            if (this.gfn_nullToEmpty(this.edt_ETC04.value) == "") {
        		alert("대금지급일을 입력해주세요.");
        		this.edt_ETC04.setFocus();
        		return false;
        	}
        	
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
        	
            if (this.gfn_nullToEmpty(this.edt_ETC07.value) == "") {
        		alert("지체상금을 입력해주세요.");
        		this.edt_ETC07.setFocus();
        		return false;
        	} else if (Number(this.edt_ETC07.value) == 0) {
        		alert("지체상금에 0을 입력할 수 없습니다.");
        		this.edt_ETC07.setFocus();
        		return false;
        	}
        	
            if (this.gfn_nullToEmpty(this.edt_ETC08.value) == "") {
        		alert("지체상금을 입력해주세요.");
        		this.edt_ETC08.setFocus();
        		return false;
        	} else if (Number(this.edt_ETC08.value) == 0) {
        		alert("지체상금에 0을 입력할 수 없습니다.");
        		this.edt_ETC08.setFocus();
        		return false;
        	} else if (Number(this.edt_ETC08.value) > Number(this.edt_ETC07.value)) {
        		alert("지체상금 범위("+this.edt_ETC07.value+"이내)를 벗어났습니다.");
        		this.edt_ETC08.setFocus();
        		return false;
        	}
        	
            if (this.gfn_nullToEmpty(this.edt_ETC09.value) == "") {
        		alert("약효보증기간 경과농약처리 공급년도(이전)를 입력해주세요.");
        		this.edt_ETC09.setFocus();
        		return false;
        	}
        	
            if (this.gfn_nullToEmpty(this.edt_ETC10.value) == "") {
        		alert("약효보증기간 경과농약처리 공급년도(부터~까지)를 입력해주세요.");
        		this.edt_ETC10.setFocus();
        		return false;
        	} else if (Number(this.edt_ETC09.value) >= Number(this.edt_ETC10.value)) {
        		alert("약효보증기간 경과농약처리 공급년도(부터~까지) 값은 '이전' 공급년도보다 커야합니다.");
        		this.edt_ETC10.setFocus();
        		return false;
        	}
        	
            if (this.gfn_nullToEmpty(this.edt_ETC11.value) == "") {
        		alert("약효보증기간 경과농약처리 공급년도(이후)를 입력해주세요.");
        		this.edt_ETC11.setFocus();
        		return false;
        	} else if (Number(this.edt_ETC10.value) >= Number(this.edt_ETC11.value)) {
        		alert("약효보증기간 경과농약처리 공급년도(이후) 값은 '부터~가지' 공급년도보다 커야합니다.");
        		this.edt_ETC11.setFocus();
        		return false;
        	}
        	
            if (this.gfn_nullToEmpty(this.edt_ETC12.value) == "" || Number(this.edt_ETC12.value) == 0) {
        		alert("생산물배상책임보험 금액을 입력해주세요.");
        		this.edt_ETC12.setFocus();
        		return false;
        	}
        	
            if (this.gfn_nullToEmpty(this.edt_ETC13.value) == "" || Number(this.edt_ETC13.value) == 0) {
        		alert("손해배상액을 입력해주세요.");
        		this.edt_ETC13.setFocus();
        		return false;
        	}
        	
            if (this.gfn_nullToEmpty(this.edt_ETC14.value) == "" || Number(this.edt_ETC14.value) == 0) {
        		alert("참여제한 기간을 입력해주세요.");
        		this.edt_ETC14.setFocus();
        		return false;
        	}
        	
        	// [첨부1] 제품내역
        	if (this.ds_ctEtcItemAList.getRowCount() > 0) {
        		for (var i=0; i<this.ds_ctEtcItemAList.getRowCount(); i++) {
        			var c1 = this.ds_ctEtcItemAList.getColumn(i, "BRAND"); // 회사
        			var c2 = this.ds_ctEtcItemAList.getColumn(i, "ITEM_CODE"); // 상품코드
        			var c3 = this.ds_ctEtcItemAList.getColumn(i, "ITEM_NAME"); // 상표명
        			var c4 = this.ds_ctEtcItemAList.getColumn(i, "STANDARD"); // 규격
        			var c5 = this.ds_ctEtcItemAList.getColumn(i, "COMPANY"); // 박스당수량
        			var c6 = this.ds_ctEtcItemAList.getColumn(i, "UPR"); // 납품단가
        			var c7 = this.ds_ctEtcItemAList.getColumn(i, "QTY"); // 수량
        			var c8 = this.ds_ctEtcItemAList.getColumn(i, "COUNTRY"); // 금액
        			if (this.gfn_nullToEmpty(c1) == "" || this.gfn_nullToEmpty(c2) == "" || this.gfn_nullToEmpty(c3) == "" || this.gfn_nullToEmpty(c4) == "" || this.gfn_nullToEmpty(c5) == "" || this.gfn_nullToEmpty(c6) == "" || this.gfn_nullToEmpty(c7) == "" || this.gfn_nullToEmpty(c8) == "") {
        				alert("계약명세표에 입력되지 않은 행이 있습니다.\n해당 행을 입력하시거나 불필요한 경우 행삭제를 해주세요.");
        				return false;
        			}
        		}
        	} else {
        		alert("계약명세표를 입력해주세요");
        		return false;
        	}
        	
            if (this.gfn_nullToEmpty(this.edt_ETC15.value) == "" || Number(this.edt_ETC15.value) == 0) {
        		alert("[붙임2] 예약구매장려금 납품총액 기준값을 입력해주세요.");
        		this.edt_ETC15.setFocus();
        		return false;
        	}
        	
        	if (this.gfn_nullToEmpty(this.edt_ETC16.value) == "" || Number(this.edt_ETC16.value) == 0) {
        		alert("[붙임2] 예약구매장려금 장려금(미만)을 입력해주세요.");
        		this.edt_ETC16.setFocus();
        		return false;
        	}
        	
        	if (this.gfn_nullToEmpty(this.edt_ETC17.value) == "" || Number(this.edt_ETC17.value) == 0) {
        		alert("[붙임2] 예약구매장려금 장려금(이상)을 입력해주세요.");
        		this.edt_ETC17.setFocus();
        		return false;
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
        				this.ds_ctEtcItemAList.setColumn(nRow, "CHG_SQNO", "001");
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
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.GridA.addEventHandler("oncellclick", this.GridA_oncellclick, this);
            this.btn_delRowA.addEventHandler("onclick", this.btn_delrowA_onclick, this);
            this.btn_addRowA.addEventHandler("onclick", this.btn_addrowA_onclick, this);
            this.edt_ETC01.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC03.addEventHandler("onchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC05.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC06.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC09.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC13.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC14.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC12.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC07.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC08.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC9_2.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC10.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC11.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC04.addEventHandler("onchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.GridI.addEventHandler("oncellclick", this.GridI_oncellclick, this);
            this.btn_addRowI.addEventHandler("onclick", this.btn_addrowI_onclick, this);
            this.btn_delRowI.addEventHandler("onclick", this.btn_delrowI_onclick, this);
            this.edt_ETC17.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC15.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC16.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC15_2.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);

        };

        this.loadIncludeScript("OMG_DS_SC_311702.xfdl");

       
    };
}
)();
