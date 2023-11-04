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
                this.set_name("OMG_DS_SC_311715");
                this.set_titletext("무기질비료(일반) 구매납품 계약서");
                this._setFormPosition(0,0,788,770);
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


            
            // UI Components Initialize
            obj = new Static("Static11", "absolute", "16.88%", "133", null, "29", "0.89%", null, this);
            obj.set_taborder("183");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "0", "10", "59.26%", "21", null, null, this);
            obj.set_taborder("78");
            obj.set_text("[무기질비료(일반) 구매납품 계약서]");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("left middle");
            obj.style.set_padding("0 0 1 5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "0%", "133", null, "29", "82.99%", null, this);
            obj.set_taborder("175");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "0", "110", "59.26%", "21", null, null, this);
            obj.set_taborder("184");
            obj.set_text("대금지급");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "44.67%", "133", null, "29", "34.26%", null, this);
            obj.set_taborder("186");
            obj.set_text("예금주명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC05", "absolute", "17.39%", "137", null, "21", "57.61%", null, this);
            obj.set_taborder("4");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("30");
            obj.style.set_align("left middle");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ETC06", "absolute", "66.12%", "137", null, "21", "8.88%", null, this);
            obj.set_taborder("5");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            obj.style.set_align("left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "0", "196", "59.26%", "21", null, null, this);
            obj.set_taborder("282");
            obj.set_text("[붙임 1] 계약명세표");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("left middle");
            obj.style.set_padding("0 0 1 5");
            this.addChild(obj.name, obj);

            obj = new Grid("GridA", "absolute", "0%", "226", null, "249", "1.02%", null, this);
            obj.set_taborder("283");
            obj.set_binddataset("ds_ctEtcItemList");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"49\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"삭제\"/><Cell col=\"1\" text=\"비 종\"/><Cell col=\"2\" text=\"수 량\"/><Cell col=\"3\" text=\"단 가\"/><Cell col=\"4\" text=\"금 액\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"none\" text=\"bind:ISCHECKED\" autosizecol=\"none\"/><Cell col=\"1\" edittype=\"text\" text=\"bind:ITEM_NAME\" editlimit=\"190\" editlengthunit=\"ascii\" autosizecol=\"none\"/><Cell col=\"2\" edittype=\"text\" editfilter=\"number\" text=\"bind:QTY\" editlimit=\"190\" editlengthunit=\"ascii\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"text\" editfilter=\"number\" text=\"bind:UPR\" maskchar=\"_\" editlimit=\"6\" editlengthunit=\"ascii\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"text\" editfilter=\"number\" text=\"bind:COUNTRY\" mask=\"#,###\" editlimit=\"20\" editlengthunit=\"ascii\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delRowA", "absolute", "83.12%", "196", null, "21", "9.26%", null, this);
            obj.set_taborder("284");
            obj.set_text("행삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addRowA", "absolute", "91.5%", "196", null, "21", "1.02%", null, this);
            obj.set_taborder("285");
            obj.set_text("행추가");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "0", "502", "59.26%", "21", null, null, this);
            obj.set_taborder("287");
            obj.set_text("[붙임 3] BB비료 계약명세표");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("left middle");
            obj.style.set_padding("0 0 1 5");
            this.addChild(obj.name, obj);

            obj = new Div("div_atch1", "absolute", "0%", "529", null, "236", "0.89%", null, this);
            obj.set_taborder("356");
            this.addChild(obj.name, obj);
            obj = new Static("Static54", "absolute", "34.31%", "28", null, "29", "34.44%", null, this.div_atch1);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static27", "absolute", "34.31%", "56", null, "29", "34.44%", null, this.div_atch1);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static29", "absolute", "34.31%", "84", null, "29", "34.44%", null, this.div_atch1);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static31", "absolute", "34.31%", "112", null, "29", "34.44%", null, this.div_atch1);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static33", "absolute", "34.31%", "140", null, "29", "34.44%", null, this.div_atch1);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static35", "absolute", "34.31%", "168", null, "29", "34.44%", null, this.div_atch1);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static37", "absolute", "34.31%", "196", null, "29", "34.44%", null, this.div_atch1);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "65.43%", "28", null, "29", "10.5%", null, this.div_atch1);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            obj.set_text("N+P+MOP(염화가리)");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0%", "0", null, "29", "80.79%", null, this.div_atch1);
            obj.set_taborder("12");
            obj.set_text("비종별(유형)");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 0 2 0");
            obj.style.set_align("center middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "34.31%", "0", null, "29", "34.44%", null, this.div_atch1);
            obj.set_taborder("13");
            obj.set_text("단가(원/톤)");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 0 2 0");
            obj.style.set_align("center middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "65.43%", "0", null, "29", "10.5%", null, this.div_atch1);
            obj.set_taborder("14");
            obj.set_text("비 고");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 0 2 0");
            obj.style.set_align("center middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Edit("edt_ETC11", "absolute", "37.77%", "32", null, "21", "37.39%", null, this.div_atch1);
            obj.set_taborder("15");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            obj.style.set_align("left middle");
            obj.set_inputtype("number");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "19.08%", "28", null, "29", "65.56%", null, this.div_atch1);
            obj.set_taborder("20");
            obj.set_text("30%±5");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_padding("2 0 2 0");
            obj.style.set_align("center middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "19.08%", "56", null, "29", "65.56%", null, this.div_atch1);
            obj.set_taborder("21");
            obj.set_text("30%±5");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_padding("2 0 2 0");
            obj.style.set_align("center middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "19.08%", "84", null, "29", "65.56%", null, this.div_atch1);
            obj.set_taborder("22");
            obj.set_text("30%±5");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_padding("2 0 2 0");
            obj.style.set_align("center middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "19.08%", "112", null, "29", "65.56%", null, this.div_atch1);
            obj.set_taborder("23");
            obj.set_text("35%초과");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_padding("2 0 2 0");
            obj.style.set_align("center middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "19.08%", "140", null, "29", "65.56%", null, this.div_atch1);
            obj.set_taborder("24");
            obj.set_text("35%초과");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_padding("2 0 2 0");
            obj.style.set_align("center middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static23", "absolute", "19.08%", "168", null, "29", "65.56%", null, this.div_atch1);
            obj.set_taborder("25");
            obj.set_text("35%초과");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_padding("2 0 2 0");
            obj.style.set_align("center middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static24", "absolute", "19.08%", "196", null, "29", "65.56%", null, this.div_atch1);
            obj.set_taborder("26");
            obj.set_text("22%±3");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_padding("2 0 2 0");
            obj.style.set_align("center middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static26", "absolute", "65.43%", "56", null, "29", "10.5%", null, this.div_atch1);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            obj.set_text("N+P+SOP(황산가리)");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Edit("edt_ETC12", "absolute", "37.77%", "60", null, "21", "37.39%", null, this.div_atch1);
            obj.set_taborder("30");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            obj.style.set_align("left middle");
            obj.set_inputtype("number");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static28", "absolute", "65.43%", "84", null, "29", "10.5%", null, this.div_atch1);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            obj.set_text("N+P+SPM(설포마그)");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Edit("edt_ETC13", "absolute", "37.77%", "88", null, "21", "37.39%", null, this.div_atch1);
            obj.set_taborder("33");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            obj.style.set_align("left middle");
            obj.set_inputtype("number");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static30", "absolute", "65.43%", "112", null, "29", "10.5%", null, this.div_atch1);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            obj.set_text("N+P+MOP(염화가리)");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Edit("edt_ETC14", "absolute", "37.77%", "116", null, "21", "37.39%", null, this.div_atch1);
            obj.set_taborder("36");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            obj.style.set_align("left middle");
            obj.set_inputtype("number");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static32", "absolute", "65.43%", "140", null, "29", "10.5%", null, this.div_atch1);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            obj.set_text("N+P+SOP(황산가리)");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Edit("edt_ETC15", "absolute", "37.77%", "144", null, "21", "37.39%", null, this.div_atch1);
            obj.set_taborder("39");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            obj.style.set_align("left middle");
            obj.set_inputtype("number");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static34", "absolute", "65.43%", "168", null, "29", "10.5%", null, this.div_atch1);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            obj.set_text("N+P+SPM(설포마그)");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Edit("edt_ETC16", "absolute", "37.77%", "172", null, "21", "37.39%", null, this.div_atch1);
            obj.set_taborder("42");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            obj.style.set_align("left middle");
            obj.set_inputtype("number");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static36", "absolute", "65.43%", "196", null, "29", "10.5%", null, this.div_atch1);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            obj.style.set_align("center middle");
            obj.set_text("N+P+K+유기물 20%이상");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Edit("edt_ETC17", "absolute", "37.77%", "200", null, "21", "37.39%", null, this.div_atch1);
            obj.set_taborder("45");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("190");
            obj.style.set_align("left middle");
            obj.set_inputtype("number");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "19.08%", "0", null, "29", "65.56%", null, this.div_atch1);
            obj.set_taborder("58");
            obj.set_text("발수도");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_padding("2 0 2 0");
            obj.style.set_align("center middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0%", "28", null, "29", "80.79%", null, this.div_atch1);
            obj.set_taborder("59");
            obj.set_text("저BB");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_padding("2 0 2 0");
            obj.style.set_align("center middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0%", "56", null, "29", "80.79%", null, this.div_atch1);
            obj.set_taborder("60");
            obj.set_text("저BB(황산가리)");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_padding("2 0 2 0");
            obj.style.set_align("center middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "0%", "84", null, "29", "80.79%", null, this.div_atch1);
            obj.set_taborder("61");
            obj.set_text("저BB(썰포마그)");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_padding("2 0 2 0");
            obj.style.set_align("center middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "0%", "168", null, "29", "80.79%", null, this.div_atch1);
            obj.set_taborder("62");
            obj.set_text("고BB(썰포마그)");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_padding("2 0 2 0");
            obj.style.set_align("center middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "0%", "140", null, "29", "80.79%", null, this.div_atch1);
            obj.set_taborder("63");
            obj.set_text("고BB(황산가리)");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_padding("2 0 2 0");
            obj.style.set_align("center middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "0%", "112", null, "29", "80.79%", null, this.div_atch1);
            obj.set_taborder("64");
            obj.set_text("고BB");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_padding("2 0 2 0");
            obj.style.set_align("center middle");
            this.div_atch1.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "0%", "196", null, "29", "80.79%", null, this.div_atch1);
            obj.set_taborder("65");
            obj.set_text("저도유기BB");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_padding("2 0 2 0");
            obj.style.set_align("center middle");
            this.div_atch1.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "16.88%", "63", null, "29", "0.89%", null, this);
            obj.set_taborder("357");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.style.set_background("#ffffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "40", "59.26%", "21", null, null, this);
            obj.set_taborder("358");
            obj.set_text("계약연도");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "0%", "63", null, "29", "82.99%", null, this);
            obj.set_taborder("359");
            obj.set_text("계약연도");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_ETC01", "absolute", "17.39%", "67", null, "21", "71.07%", null, this);
            obj.set_taborder("360");
            obj.set_type("string");
            obj.set_mask("####");
            obj.set_limitbymask("both");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 236, this.div_atch1,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("356");

            	}
            );
            this.div_atch1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 788, 770, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("무기질비료(일반) 구매납품 계약서");

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
            obj = new BindItem("item2","div_atch1.edt_ETC11","value","ds_eltCtrwDtl01","ETC11");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","div_atch1.edt_ETC12","value","ds_eltCtrwDtl01","ETC12");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","div_atch1.edt_ETC13","value","ds_eltCtrwDtl01","ETC13");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","div_atch1.edt_ETC14","value","ds_eltCtrwDtl01","ETC14");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","div_atch1.edt_ETC15","value","ds_eltCtrwDtl01","ETC15");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","div_atch1.edt_ETC16","value","ds_eltCtrwDtl01","ETC16");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","div_atch1.edt_ETC17","value","ds_eltCtrwDtl01","ETC17");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_ETC01","value","ds_eltCtrwDtl01","ETC1");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_311715.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_311715.xfdl", function() {
        //include "lib::comLib.xjs";

        var ELT_CODE = "175"; // 메인계약서코드
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
        				this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC1", initdate); // 계약연도
        			}
        			
        			this.ds_eltCtrwDtl01.addRow();
        			this.ds_eltCtrwDtl01.copyRow(0, this.parent.ds_eltCtrwDtl, fv_position);
        			
        			this.search_item_list();
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
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC1", this.edt_ETC01.value); // 계약연도
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC5", this.edt_ETC05.value); // 계좌번호
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC6", this.edt_ETC06.value); // 예금주명
        	
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC11", this.div_atch1.edt_ETC11.value); // 비종1
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC12", this.div_atch1.edt_ETC12.value); // 비종2
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC13", this.div_atch1.edt_ETC13.value); // 비종3
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC14", this.div_atch1.edt_ETC14.value); // 비종4
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC15", this.div_atch1.edt_ETC15.value); // 비종5
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC16", this.div_atch1.edt_ETC16.value); // 비종6
        	this.parent.ds_eltCtrwDtl.setColumn(fv_position, "ETC17", this.div_atch1.edt_ETC17.value); // 비종7
        }

        /* Validation Check */
        this.fn_validationCheck = function()
        {
            var strTitletext = "무기질비료(일반) 구매납품 계약서";
            
            if (this.gfn_nullToEmpty(this.edt_ETC01.value) == "") {
        		alert("계약연도를 입력해주세요.");
        		this.edt_ETC01.setFocus();
        		return false;
        	}
        	
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
        	
        	// [붙임1] 계약명세표
        	if (this.ds_ctEtcItemList.getRowCount() > 0) {
        		for (var i=0; i<this.ds_ctEtcItemList.getRowCount(); i++) {
        			var c1 = this.ds_ctEtcItemList.getColumn(i, "ITEM_NAME"); // 비종
        			var c2 = this.ds_ctEtcItemList.getColumn(i, "QTY"); // 수량
        			var c3 = this.ds_ctEtcItemList.getColumn(i, "UPR"); // 단가
        			var c4 = this.ds_ctEtcItemList.getColumn(i, "COUNTRY"); // 금액
        			if (this.gfn_nullToEmpty(c1) == "" || this.gfn_nullToEmpty(c2) == "" || this.gfn_nullToEmpty(c3) == "" || this.gfn_nullToEmpty(c4) == "") {
        				alert("계약명세표에 입력되지 않은 행이 있습니다.\n해당 행을 입력하시거나 불필요한 경우 행삭제를 해주세요.");
        				return false;
        			}
        		}
        	} else {
        		alert("계약명세표를 입력해주세요");
        		return false;
        	}
        	
        	// [붙임3] BB비료 계약명세표
            if (this.gfn_nullToEmpty(this.div_atch1.edt_ETC11.value) == "") {
        		alert("BB비료 비종(저BB) 단가를 입력해주세요.");
        		this.div_atch1.edt_ETC11.setFocus();
        		return false;
        	}
            if (this.gfn_nullToEmpty(this.div_atch1.edt_ETC12.value) == "") {
        		alert("BB비료 비종(저BB(황산가리)) 단가를 입력해주세요.");
        		this.div_atch1.edt_ETC12.setFocus();
        		return false;
        	}
            if (this.gfn_nullToEmpty(this.div_atch1.edt_ETC13.value) == "") {
        		alert("BB비료 비종(저BB(썰포마그)) 단가를 입력해주세요.");
        		this.div_atch1.edt_ETC13.setFocus();
        		return false;
        	}
            if (this.gfn_nullToEmpty(this.div_atch1.edt_ETC14.value) == "") {
        		alert("BB비료 비종(고BB) 단가를 입력해주세요.");
        		this.div_atch1.edt_ETC14.setFocus();
        		return false;
        	}
            if (this.gfn_nullToEmpty(this.div_atch1.edt_ETC15.value) == "") {
        		alert("BB비료 비종(고BB(황산가리)) 단가를 입력해주세요.");
        		this.div_atch1.edt_ETC15.setFocus();
        		return false;
        	}
            if (this.gfn_nullToEmpty(this.div_atch1.edt_ETC16.value) == "") {
        		alert("BB비료 비종(고BB(썰포마그)) 단가를 입력해주세요.");
        		this.div_atch1.edt_ETC16.setFocus();
        		return false;
        	}
            if (this.gfn_nullToEmpty(this.div_atch1.edt_ETC17.value) == "") {
        		alert("BB비료 비종(저도유기BB) 단가를 입력해주세요.");
        		this.div_atch1.edt_ETC17.setFocus();
        		return false;
        	}
        	
        	return true;
        }

        /* 제품내역 행추가 */
        this.btn_addrowA_onclick = function(obj,e)
        {
        	var nRow = this.ds_ctEtcItemList.addRow();
        	//ds_rsclist
        	this.ds_ctEtcItemList.setColumn(nRow, "ISCHECKED", "0");
        	this.ds_ctEtcItemList.setColumn(nRow, "ELT_CTRW_NO", "");
        	this.ds_ctEtcItemList.setColumn(nRow, "CHG_SQNO", "001");
        	
        	this.ds_ctEtcItemList.set_updatecontrol(false); //
        	this.ds_ctEtcItemList.setRowType(nRow, Dataset.ROWTYPE_INSERT);
        	this.ds_ctEtcItemList.set_updatecontrol(true); // 이걸 해주지 않으면 자동으로 바뀌지 않음
        }

        /* 제품내역 행삭제 */
        this.btn_delrowA_onclick = function(obj,e)
        {
        	var cnt = this.ds_ctEtcItemList.getRowCount();
        	if (cnt > 0) {
        		var updateDel = false;
        		for (var i=this.ds_ctEtcItemList.getRowCount()-1; i>=0; i--) {
        			if (this.ds_ctEtcItemList.getColumn(i, "ISCHECKED") == "1") {
        				if (this.gfn_nullToEmpty(this.ds_ctEtcItemList.getColumn(i, "SQNO")) != "") {
        					updateDel = true;
        					continue;
        				}
        				this.ds_ctEtcItemList.deleteRow(i);
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
        		var chk = this.ds_ctEtcItemList.getColumn(e.row, "ISCHECKED");
        		if (chk == "0") {
        			this.ds_ctEtcItemList.setColumn(e.row, "ISCHECKED", "1");
        		} else {
        			this.ds_ctEtcItemList.setColumn(e.row, "ISCHECKED", "0");
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
         				var nRow = this.ds_ctEtcItemList.addRow();
         				this.ds_ctEtcItemList.setColumn(nRow, "ISCHECKED", "0");
         				this.ds_ctEtcItemList.setColumn(nRow, "ELT_CTRW_NO", "");
         				this.ds_ctEtcItemList.setColumn(nRow, "CHG_SQNO", "001" );
        			}
        		}
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.edt_ETC05.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC06.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.GridA.addEventHandler("oncellclick", this.GridA_oncellclick, this);
            this.btn_delRowA.addEventHandler("onclick", this.btn_delrowA_onclick, this);
            this.btn_addRowA.addEventHandler("onclick", this.btn_addrowA_onclick, this);
            this.div_atch1.edt_ETC11.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.div_atch1.edt_ETC12.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.div_atch1.edt_ETC13.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.div_atch1.edt_ETC14.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.div_atch1.edt_ETC15.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.div_atch1.edt_ETC16.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.div_atch1.edt_ETC17.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);
            this.edt_ETC01.addEventHandler("ontextchanged", this.OMG_DS_SC_311301_ontextchanged, this);

        };

        this.loadIncludeScript("OMG_DS_SC_311715.xfdl");

       
    };
}
)();
