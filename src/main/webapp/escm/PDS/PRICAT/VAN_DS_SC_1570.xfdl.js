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
                this.set_name("VAN_DS_SC_1570");
                this.set_titletext("물류센터결품내역 등록");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Bzplc", this);
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"SHRT_BZPLNM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPL_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"BZPL_DTI_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"BZPL_TPNM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPL_DTI_TPNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_master", this);
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLCNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_STDNM\" type=\"STRING\" size=\"256\"/><Column id=\"APL_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_QT\" type=\"STRING\" size=\"256\"/><Column id=\"STR_QT\" type=\"STRING\" size=\"256\"/><Column id=\"UN_STR_QT\" type=\"STRING\" size=\"256\"/><Column id=\"UN_STR_RSNC\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_DSQNO\" type=\"STRING\" size=\"256\"/><Column id=\"RMK_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"ROTS_SPY_PSB_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_AM\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_FBID_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_SPYPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_NA_TRPL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CMENO\" type=\"STRING\" size=\"256\"/><Column id=\"CTCPL_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"RQ_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"UN_STR_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_DS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_un_str_rsnc", this);
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_menu", "absolute", "0", "0", "397", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "233", null, this);
            obj.set_taborder("1");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear00", "absolute", null, "0", "53", "21", "118", null, this);
            obj.set_taborder("2");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pagename00", "absolute", "0", "33", "135", "21", null, null, this);
            obj.set_taborder("7");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pagename01", "absolute", "0", "121", "135", "21", null, null, this);
            obj.set_taborder("8");
            obj.set_text("입력정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00", "absolute", "0", "58", "126", "29", null, null, this);
            obj.set_taborder("10");
            obj.set_text("상품코드 조회구분");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "125", "58", null, "29", "15", null, this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data00", "absolute", "303", "62", "151", "21", null, null, this);
            obj.set_taborder("12");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title01", "absolute", "0", "86", "126", "29", null, null, this);
            obj.set_taborder("13");
            obj.set_text("물류센터코드");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_wrs_gubun", "absolute", "132", "62", "171", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_wrs_gubun_innerdataset = new Dataset("rdo_wrs_gubun_innerdataset", this.rdo_wrs_gubun);
            rdo_wrs_gubun_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">상품코드</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">상품명</Col></Row></Rows>");
            obj.set_innerdataset(rdo_wrs_gubun_innerdataset);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_value("1");

            obj = new Static("sta_title02", "absolute", "457", "58", "110", "29", null, null, this);
            obj.set_taborder("19");
            obj.set_text("적용일자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "125", "86", null, "29", "15", null, this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_bzpl_list", "absolute", "129", "90", "171", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("9");
            obj.set_innerdataset("@ds_Bzplc");
            obj.set_datacolumn("SHRT_BZPLNM");
            obj.set_codecolumn("NA_BZPLC");

            obj = new Edit("edt_data02", "absolute", "303", "90", "151", "21", null, null, this);
            obj.set_taborder("21");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title03", "absolute", "457", "86", "110", "29", null, null, this);
            obj.set_taborder("22");
            obj.set_text("참조구분");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title04", "absolute", "0", "173", "126", "29", null, null, this);
            obj.set_taborder("23");
            obj.set_text("상품코드");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "125", "173", null, "29", "15", null, this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title05", "absolute", "0", "201", "126", "29", null, null, this);
            obj.set_taborder("25");
            obj.set_text("발주 수량");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "125", "201", null, "29", "15", null, this);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title06", "absolute", "448", "173", "110", "61", null, null, this);
            obj.set_taborder("26");
            obj.set_text("발주일자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "125", "229", null, "29", "15", null, this);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title08", "absolute", "0", "229", "126", "29", null, null, this);
            obj.set_taborder("30");
            obj.set_text("발주 부가세");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title09", "absolute", "0", "257", "126", "29", null, null, this);
            obj.set_taborder("31");
            obj.set_text("연락처 전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "125", "257", null, "29", "15", null, this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data03", "absolute", "129", "177", "110", "21", null, null, this);
            obj.set_taborder("33");
            obj.set_inputtype("number");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data04", "absolute", "242", "177", "131", "21", null, null, this);
            obj.set_taborder("34");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popup01", "absolute", "376", "177", "21", "21", null, null, this);
            obj.set_taborder("35");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data06", "absolute", "129", "205", "100", "21", null, null, this);
            obj.set_taborder("36");
            obj.set_inputtype("number");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title10", "absolute", "232", "201", "110", "29", null, null, this);
            obj.set_taborder("37");
            obj.set_text("입고수량");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data07", "absolute", "345", "205", "100", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_inputtype("number");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_balju", "absolute", "573", "90", "82", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_balju_innerdataset = new Dataset("rdo_balju_innerdataset", this.rdo_balju);
            rdo_balju_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">발주전표</Col></Row></Rows>");
            obj.set_innerdataset(rdo_balju_innerdataset);
            obj.set_taborder("39");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");

            obj = new Calendar("cal_search_date", "absolute", "570", "62", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("40");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Edit("edt_data01", "absolute", "673", "62", "60", "21", null, null, this);
            obj.set_taborder("41");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popup00", "absolute", "736", "62", "21", "21", null, null, this);
            obj.set_taborder("42");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_balju_date", "absolute", "561", "177", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("43");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Edit("edt_data05", "absolute", "664", "177", "60", "21", null, null, this);
            obj.set_taborder("44");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popup02", "absolute", "727", "177", "21", "21", null, null, this);
            obj.set_taborder("45");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_balju_all", "absolute", "566", "205", "105", "21", null, null, this);
            obj.set_taborder("46");
            obj.set_text("발주전표전체");
            obj.set_falsevalue("1");
            obj.set_truevalue("0");
            obj.set_value("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data08", "absolute", "561", "233", "100", "21", null, null, this);
            obj.set_taborder("48");
            obj.set_inputtype("number");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data09", "absolute", "129", "233", "100", "21", null, null, this);
            obj.set_taborder("49");
            obj.set_inputtype("number");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            obj.set_value("0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title11", "absolute", "232", "229", "110", "29", null, null, this);
            obj.set_taborder("50");
            obj.set_text("발주 금액");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data10", "absolute", "345", "233", "100", "21", null, null, this);
            obj.set_taborder("51");
            obj.set_inputtype("number");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            obj.set_value("0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data11", "absolute", "129", "261", "100", "21", null, null, this);
            obj.set_taborder("52");
            obj.set_inputtype("number");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title12", "absolute", "232", "257", "110", "29", null, null, this);
            obj.set_taborder("53");
            obj.set_text("신청내용");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data12", "absolute", "345", "261", "316", "21", null, null, this);
            obj.set_taborder("54");
            obj.set_cssclass("WF_Essential");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_delete", "absolute", "713", "233", "65", "21", null, null, this);
            obj.set_taborder("56");
            obj.set_text("삭제");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title14", "absolute", "0", "285", "126", "58", null, null, this);
            obj.set_taborder("57");
            obj.set_text("미입고 사유");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "125", "285", null, "58", "15", null, this);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_str_rsnc", "absolute", "129", "290", "118", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("59");
            obj.set_innerdataset("@ds_un_str_rsnc");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_codecolumn("SIMP_C");

            obj = new Edit("edt_data13", "absolute", "129", "317", "316", "21", null, null, this);
            obj.set_taborder("60");
            obj.set_cssclass("WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title15", "absolute", "448", "285", "110", "58", null, null, this);
            obj.set_taborder("61");
            obj.set_text("공급가능일자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_psb_dt", "absolute", "561", "304", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("62");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Grid("grd_master", "absolute", "0", "346", null, null, "15", "1", this);
            obj.set_taborder("63");
            obj.set_binddataset("ds_master");
            obj.set_scrollbars("autoboth");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"28\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"일련&#13;&#10;번호\"/><Cell col=\"1\" text=\"물류센타\"/><Cell col=\"2\" text=\"상품\"/><Cell col=\"3\" text=\"상품규격\"/><Cell col=\"4\" text=\"적용일자\"/><Cell col=\"5\" text=\"발주수량\"/><Cell col=\"6\" text=\"입고수량\"/><Cell col=\"7\" text=\"미입고수량\"/><Cell col=\"8\" text=\"미입고사유코드\"/><Cell col=\"9\" text=\"미입고 사유\"/><Cell col=\"10\" text=\"공급가능일자\"/><Cell col=\"11\" text=\"발주일자\"/><Cell col=\"12\" text=\"발주번호\"/><Cell col=\"13\" text=\"발주전표일련번호\"/><Cell col=\"14\" text=\"발주금액\"/><Cell col=\"15\" text=\"발주부가세\"/><Cell col=\"16\" text=\"발주금지&#13;&#10;여부\"/><Cell col=\"17\" text=\"거래처코드\"/><Cell col=\"18\" text=\"등록/변경/삭제일자\"/><Cell col=\"19\" text=\"최종사용자\"/><Cell col=\"20\" text=\"연락처&#13;&#10;전화번호\"/><Cell col=\"21\" text=\"신청내용\"/><Cell col=\"22\" text=\"삭제여부\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:NA_BZPLC\"/><Cell col=\"2\" text=\"bind:NA_WRS_C\"/><Cell col=\"3\" rowspan=\"2\" text=\"bind:WRS_STDNM\"/><Cell col=\"4\" rowspan=\"2\" text=\"bind:APL_DT\"/><Cell col=\"5\" rowspan=\"2\" text=\"bind:ODR_QT\"/><Cell col=\"6\" rowspan=\"2\" text=\"bind:STR_QT\"/><Cell col=\"7\" rowspan=\"2\" text=\"bind:UN_STR_QT\"/><Cell col=\"8\" rowspan=\"2\" text=\"bind:UN_STR_RSNC\"/><Cell col=\"9\" rowspan=\"2\" text=\"bind:RMK_CNTN\"/><Cell col=\"10\" rowspan=\"2\" text=\"bind:ROTS_SPY_PSB_DT\"/><Cell col=\"11\" rowspan=\"2\" text=\"bind:ODR_DT\"/><Cell col=\"12\" rowspan=\"2\" text=\"bind:ODR_SLPNO\"/><Cell col=\"13\" rowspan=\"2\" text=\"bind:ODR_DSQNO\"/><Cell col=\"14\" rowspan=\"2\" text=\"bind:ODR_AM\"/><Cell col=\"15\" rowspan=\"2\" text=\"bind:ODR_VAT\"/><Cell col=\"16\" rowspan=\"2\" text=\"bind:ODR_FBID_YN\" expr=\"expr:ODR_FBID_YN=='1'?'여':'부'\"/><Cell col=\"17\" text=\"bind:SPYPL_NA_TRPL_C\"/><Cell col=\"18\" rowspan=\"2\" text=\"bind:DTM\"/><Cell col=\"19\" rowspan=\"2\" text=\"bind:LS_CMENO\"/><Cell col=\"20\" rowspan=\"2\" text=\"bind:CTCPL_TELNO\"/><Cell col=\"21\" rowspan=\"2\" text=\"bind:RQ_CNTN\"/><Cell col=\"22\" rowspan=\"2\" text=\"bind:DEL_YN\" expr=\"expr:DEL_YN=='1'?'여':'부'\"/><Cell row=\"1\" col=\"1\" text=\"bind:BZPLCNM\"/><Cell row=\"1\" col=\"2\" text=\"bind:WRSNM\"/><Cell row=\"1\" col=\"17\" text=\"bind:SPYPL_NA_TRPL_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "0", "145", null, "29", "15", null, this);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "12", "149", "95", "21", null, null, this);
            obj.set_taborder("66");
            obj.set_text("처리대상건수 : ");
            this.addChild(obj.name, obj);

            obj = new Static("sta_count", "absolute", "103", "149", "22", "21", null, null, this);
            obj.set_taborder("67");
            obj.set_text("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "127", "149", "22", "21", null, null, this);
            obj.set_taborder("68");
            obj.set_text("건");
            this.addChild(obj.name, obj);

            obj = new Button("btn_row_update", "absolute", null, "149", "89", "21", "90", null, this);
            obj.set_taborder("69");
            obj.set_text("행추가/수정");
            this.addChild(obj.name, obj);

            obj = new Button("btn_row_clear", "absolute", null, "149", "67", "21", "20", null, this);
            obj.set_taborder("70");
            obj.set_text("CLEAR");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data14", "absolute", "751", "177", "33", "21", null, null, this);
            obj.set_taborder("71");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_wrs_std", "absolute", "400", "177", "45", "21", null, null, this);
            obj.set_taborder("72");
            obj.set_inputtype("number");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_kind", "absolute", "591", "149", "22", "21", null, null, this);
            obj.set_taborder("73");
            obj.set_text("0");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_dtm", "absolute", "235", "149", "114", "21", null, null, this);
            obj.set_taborder("74");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_trpl_c", "absolute", "363", "149", "114", "21", null, null, this);
            obj.set_taborder("75");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cmeno", "absolute", "459", "149", "114", "21", null, null, this);
            obj.set_taborder("76");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_trpl_nm", "absolute", "435", "149", "114", "21", null, null, this);
            obj.set_taborder("77");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title13", "absolute", "448", "229", "110", "29", null, null, this);
            obj.set_taborder("78");
            obj.set_text("미입고수량");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down01", "absolute", null, "0", "65", "21", "173", null, this);
            obj.set_taborder("79");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1570");
            		p.set_titletext("물류센터결품내역 등록");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edt_data00","value","ds_infodata","NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edt_data02","value","ds_infodata","NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_data01","value","ds_infodata","NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edt_data05","value","ds_infodata","NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_data14","value","ds_infodata","NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
            this._addPreloadList("fdl", "common::AuthorityWorkplace.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1570.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1570.xfdl", function() {
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
           this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	var param = [
        		{code:"UN_STR_RSNC", dsName:"ds_un_str_rsnc", selecttype:"S"}
        	];
        	this.gfn_setCommonCode(param);

        	this.grd_master.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	this.cbo_str_rsnc.set_index(0);
        	this.cal_search_date.set_value(this.gfn_minusDate(this.gfn_today('yyyyMMdd'),1));
        	this.cal_balju_date.set_value(this.gfn_today('yyyyMMdd'));
        	this.div_auth.cbo_authorityWorkplace.addEventHandler('onitemchanged',this.trplChange,this);
        	this.div_auth.chk_all.set_visible(false);
        	this.getBzpl();

        	this.edt_data13.set_enable(false);
        	this.edt_data13.set_value("");
        }

        this.trplChange = function()
        {
        	this.getBzpl();
        }

        //물류센터 조회
        this.getBzpl = function()
        {
        	var params = "TRPL_C="+this.getTrplCode();
        	
        	var sSvcID        = "getBzpl_code";//통신아이디
        	var sURL          = "svc::rest/pds/stock/getBZPLCode";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_Bzplc=ds_Bzplc";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        this.fn_callback = function(svcID,nCD,sMSG)
        {
        	if(nCD < 0){
        		this.gfn_getMessage('alert',sMSG);
        		return;
        	}else{
        		if(svcID == "getBzpl_code"){
        			if (this.ds_Bzplc.insertRow(0) != -1){
        				this.ds_Bzplc.setColumn(0,"NA_BZPLC","");
        				this.ds_Bzplc.setColumn(0,"SHRT_BZPLNM","- 선택안됨 -");
        			};
        			this.cbo_bzpl_list.set_index(0);
        		}
        		
        		if(svcID == "inser_goodlog"){
        			this.gfn_getMessage('alert','result.message.save.success');
        			this.reload();
        		}
        		
        		if(svcID == "p_trtgoodlog"){
        			if(this.ds_master.rowcount == 0) {
        				this.alert('조회된 결품등록내역이 없습니다.');
        			}
        		}
        		
        		if(svcID == "getWRSforShortageList"){
        			trace("getWRSforShortageList="+this.ds_master.rowcount);
        		}
        		
        	}
        }

        //물류센터코드 변경 이벤트
        this.cbo_bzpl_list_onitemchanged = function(obj,e)
        {
        	this.edt_data02.set_value(this.cbo_bzpl_list.value);
        }

        //결품등록내역 조회
        this.div_search_btn_popup00_onclick = function(obj,e)
        {
        	if(this.gfn_nullToEmpty(this.edt_data02.value).length <= 0){
        		this.gfn_getMessage('alert','msg.van_ds_sc_1540.view.simple.text7');
        		return;
        	}
        	if(this.gfn_nullToEmpty(this.cal_search_date.text) == ""){
        		this.alert('발주일자를 입력하세요.');
        		return;
        	}
        	if(this.cbo_bzpl_list.value == ""){
        		this.alert("물류센터코드를 선택하세요.");
        		return;
        	}
        	
        	
        	var trplc = this.div_auth.cbo_authorityWorkplace.value;
        	if(this.div_auth.cbo_authorityWorkplace.value == undefined){
        		trplc = application.gv_glnCode;
        	}
        	var bzplc_c = this.cbo_bzpl_list.value;
        	
        	var oArg = {paramMode:"U", trpl_c:trplc , mbzplc_c:bzplc_c, apldate:this.cal_search_date.text.replace(/-/gi,'')};
        	var sOption = "autosize=true, titleText=false";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("or_order","PDS.PRICAT::VAN_DS_SC_1571.xfdl",oArg,sOption,sPopupCallBack);
        }

        //물류상품 정보 조회 팝업
        this.div_search_btn_popup01_onclick = function(obj,e)
        {
        	if(this.cbo_bzpl_list.value == ""){
        		this.alert("물류센터코드를 선택하세요.");
        		return;
        	}

        	var trpl_c = this.div_auth.cbo_authorityWorkplace.value;
        	if(trpl_c == undefined){
        		trpl_c = application.gv_glnCode;
        	}
        	var bzplc_c = this.cbo_bzpl_list.value;
        	var wrs_c = this.edt_data03.value;
        	
        	var oArg = {paramMode:"U", mtrpl_c:trpl_c, mbzplc_c:bzplc_c, wrsc:wrs_c};
        	var sOption = "autosize=true, titleText=false";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("trtwrs","PDS.PRICAT::VAN_DS_SC_1572.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.btn_popup02_onclick = function(obj,e)
        {
        	
        	if(this.cbo_bzpl_list.value == ""){
        		this.alert("물류센터코드를 선택하세요.");
        		return;
        	}
        	if(this.gfn_nullToEmpty(this.cal_balju_date.text).length < 10){
        		this.alert("발주일자를 선택하세요");
        		return;
        	}
        	var trpl_c = this.div_auth.cbo_authorityWorkplace.value;
        	if(trpl_c == undefined){
        		trpl_c = application.gv_glnCode;
        	}
        	var bzplc_c = this.cbo_bzpl_list.value;
        	
        	var chk_balju_all = this.chk_balju_all.value;
        	
        	var wrs_c = this.gfn_nullToEmpty(this.edt_data03.value);
        	var balju_date = this.cal_balju_date.text;
        	
        	var oArg = {paramMode:"U", mtrpl_c:trpl_c, mbzplc_c:bzplc_c, wrs_c:wrs_c, balju_d:balju_date, isall:chk_balju_all};
        	var sOption = "autosize=true, titleText=false";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("trtbalju","PDS.PRICAT::VAN_DS_SC_1573.xfdl",oArg,sOption,sPopupCallBack);	
        }

        this.fn_popupAfter = function(svcID,strVal)
        {
        	if(strVal != undefined){
        		var arrVal = strVal.split(",");
        		if(svcID == "or_order"){
        			this.cal_search_date.set_value(arrVal[0]);
        			this.edt_data01.set_value(arrVal[1]);
        		}
        		if(svcID == "trtwrs"){
        			this.edt_data03.set_value(arrVal[0]);
        			this.edt_data04.set_value(arrVal[1]);
        			this.edt_wrs_std.set_value(arrVal[2]);	//상품규격
        			this.sta_dtm.set_text(arrVal[3]);		//날짜
        			this.sta_trpl_c.set_text(arrVal[4]);
        			this.sta_trpl_nm.set_text(arrVal[5]);
        			this.sta_cmeno.set_text(arrVal[6]);		//최종사용자
        			
        			this.rdo_wrs_gubun.set_enable(false);
        			this.edt_data00.set_enable(false);
        			this.cal_search_date.set_enable(false);
        			this.edt_data01.set_enable(false);
        			this.btn_popup00.set_enable(false);
        		}
        		if(svcID == "trtbalju"){
        			if(this.chk_balju_all.value == '1') {
        				this.edt_data05.set_value(arrVal[0]); //전표번호
        				this.edt_data14.set_value(arrVal[9]); //발주일련번호
        				this.edt_data03.set_value(arrVal[2]); //상품코드
        				this.edt_data04.set_value(arrVal[3]); //상품명
        				this.edt_wrs_std.set_value(arrVal[4]); //상품규격
        				this.edt_data06.set_value(arrVal[5]); //발주수량
        				this.edt_data08.set_value(arrVal[5]); //미입고수량
        				this.edt_data09.set_value(arrVal[6]); //발주부가세
        				this.edt_data10.set_value(arrVal[7]); //발주금액
        				this.cal_balju_date.set_value(arrVal[8]); //발주일자
        				this.edt_data11.set_value(arrVal[10]); //발주일자
        				this.div_search_btn_popup01_onclick();
        			} else {
        				var trpl_c = this.div_auth.cbo_authorityWorkplace.value;
        				if(trpl_c == undefined){
        					trpl_c = application.gv_glnCode;
        				}
        				this.getWRSforShortageList(trpl_c, arrVal[0], this.cbo_bzpl_list.value, arrVal[8]);
        			}
        		}
        	}
        }

        this.btn_row_update_onclick = function(obj,e)
        {
        	if(!this.validation()){
        		return;
        	}
        	if(this.sta_kind.text == "0"){
        	
        		var aRow = this.ds_master.addRow();
        		this.ds_master.setColumn(aRow,"NA_BZPLC",this.cbo_bzpl_list.value);
        		this.ds_master.setColumn(aRow,"BZPLCNM",this.cbo_bzpl_list.text);
        		this.ds_master.setColumn(aRow,"APL_DT",this.gfn_today('yyyyMMdd'));
        		this.ds_master.setColumn(aRow,"NA_WRS_C",this.edt_data03.value);
        		this.ds_master.setColumn(aRow,"WRSNM",this.edt_data04.value);
        		this.ds_master.setColumn(aRow,"WRS_STDNM",this.edt_wrs_std.value);		//상품규격
        		this.ds_master.setColumn(aRow,"ODR_QT",this.edt_data06.value);			//발주수량
        		this.ds_master.setColumn(aRow,"STR_QT",this.edt_data07.value);			//입고수량
        		this.ds_master.setColumn(aRow,"UN_STR_QT",this.edt_data08.value);		//미입고수량
        		this.ds_master.setColumn(aRow,"UN_STR_RSNC",this.cbo_str_rsnc.value);	//미입고사유코드
        		this.ds_master.setColumn(aRow,"RMK_CNTN",this.edt_data13.value);		 //미입고사유 수기입력
        		
        		this.ds_master.setColumn(aRow,"ROTS_SPY_PSB_DT",this.cal_psb_dt.value);	//공급가능일자
        		this.ds_master.setColumn(aRow,"ODR_DT",this.cal_balju_date.value);		//발주일자
        		this.ds_master.setColumn(aRow,"ODR_SLPNO",this.edt_data05.value);		//발주전표번호
        		this.ds_master.setColumn(aRow,"ODR_DSQNO",this.edt_data14.value);		//발주상세일련번호
        		this.ds_master.setColumn(aRow,"ODR_AM",this.edt_data10.value);			//발주금액
        		this.ds_master.setColumn(aRow,"ODR_VAT",this.edt_data09.value);			//발주부가세
        		this.ds_master.setColumn(aRow,"ODR_FBID_YN","0");		//발주금지여부
        		this.ds_master.setColumn(aRow,"SPYPL_NA_TRPL_C",this.sta_trpl_c.text);	//거래처코드
        		this.ds_master.setColumn(aRow,"NA_SPYPL_C",this.sta_trpl_c.text);	//거래처코드
        		this.ds_master.setColumn(aRow,"SPYPL_NA_TRPL_NM",this.sta_trpl_nm.text);//거래처명
        		this.ds_master.setColumn(aRow,"DTM",this.sta_dtm.text);					//날짜
        		this.ds_master.setColumn(aRow,"LS_CMENO",this.sta_cmeno.text);			//최종사용자
        		this.ds_master.setColumn(aRow,"CTCPL_TELNO",this.edt_data11.value);		//전화번호
        		this.ds_master.setColumn(aRow,"RQ_CNTN",this.edt_data12.value);			//신청내용

        		
        		this.ds_master.setColumn(aRow,"DEL_YN",this.chk_delete.value);
        		
        		this.sta_count.set_text(this.ds_master.rowcount);
        		
        		this.btn_row_clear_onclick();
        	}else{
        		var aRow = this.ds_master.rowposition;
        		
        		this.ds_master.setColumn(aRow,"NA_BZPLC",this.cbo_bzpl_list.value);
        		this.ds_master.setColumn(aRow,"BZPLCNM",this.cbo_bzpl_list.text);
        		//this.ds_master.setColumn(aRow,"APL_DT",this.cal_search_date.value);
        		this.ds_master.setColumn(aRow,"NA_WRS_C",this.edt_data03.value);
        		this.ds_master.setColumn(aRow,"WRSNM",this.edt_data04.value);
        		this.ds_master.setColumn(aRow,"WRS_STDNM",this.edt_wrs_std.value);		//상품규격
        		this.ds_master.setColumn(aRow,"ODR_QT",this.edt_data06.value);			//발주수량
        		this.ds_master.setColumn(aRow,"STR_QT",this.edt_data07.value);			//입고수량
        		this.ds_master.setColumn(aRow,"UN_STR_QT",this.edt_data08.value);		//미입고수량
        		this.ds_master.setColumn(aRow,"UN_STR_RSNC",this.cbo_str_rsnc.value);	//미입고사유코드
        		this.ds_master.setColumn(aRow,"RMK_CNTN",this.edt_data13.value);		//미입고사유

        		this.ds_master.setColumn(aRow,"ROTS_SPY_PSB_DT",this.cal_psb_dt.value);	//공급가능일자
        		this.ds_master.setColumn(aRow,"ODR_DT",this.cal_balju_date.value);		//발주일자
        		this.ds_master.setColumn(aRow,"ODR_SLPNO",this.edt_data05.value);		//발주전표번호
        		this.ds_master.setColumn(aRow,"ODR_DSQNO",this.edt_data14.value);		//발주상세일련번호
        		this.ds_master.setColumn(aRow,"ODR_AM",this.edt_data10.value);			//발주금액
        		this.ds_master.setColumn(aRow,"ODR_VAT",this.edt_data09.value);			//발주부가세
        		this.ds_master.setColumn(aRow,"ODR_FBID_YN","0");		//발주금지여부
        		this.ds_master.setColumn(aRow,"SPYPL_NA_TRPL_C",this.sta_trpl_c.text);	//거래처코드
        		this.ds_master.setColumn(aRow,"NA_SPYPL_C",this.sta_trpl_c.text);	    //거래처코드
        		this.ds_master.setColumn(aRow,"SPYPL_NA_TRPL_NM",this.sta_trpl_nm.text);//거래처명
        		this.ds_master.setColumn(aRow,"DTM",this.sta_dtm.text);					//날짜
        		this.ds_master.setColumn(aRow,"LS_CMENO",this.sta_cmeno.text);			//최종사용자
        		this.ds_master.setColumn(aRow,"CTCPL_TELNO",this.edt_data11.value);		//전화번호
        		this.ds_master.setColumn(aRow,"RQ_CNTN",this.edt_data12.value);			//신청내용

        		this.ds_master.setColumn(aRow,"DEL_YN",this.chk_delete.value);
        		this.sta_kind.set_text("0");
        		this.btn_row_clear_onclick();
        	}
        }

        this.validation = function()
        {
        	if(this.gfn_nullToEmpty(this.edt_data02.value).length <= 0){
        		this.gfn_getMessage('alert','msg.van_ds_sc_1540.view.simple.text7');
        		return false;
        	}
        	if(this.gfn_nullToEmpty(this.edt_data03.value) == "" && this.gfn_nullToEmpty(this.edt_data05.value) == ""){
        		this.alert('자료입력 후 행추가/수정 처리하세요.');
        		return false;
        	}
        	if(this.gfn_nullToEmpty(this.edt_data04.value) == ""){
        		this.alert('상품명을 입력하세요.');
        		return false;
        	}
            if(  this.gfn_nullToEmpty(this.cbo_str_rsnc.value) == "" ){
        		this.alert("미입고사유코드를 선택하세요.");
        		return;
            
            }
            
            if(  
                   this.gfn_nullToEmpty(this.cbo_str_rsnc.value) == "08"
                   &&
                   this.gfn_nullToEmpty(this.edt_data13.value) == ""
             ){
        		this.alert("기타 미입고사유를 입력하세요.");
        		return;
            
            }
        	return true;
        }

        
        //초기화
        this.btn_clear00_onclick = function(obj,e)
        {
        	this.reload();
        }

        //입고수량 입력
        this.edt_data07_onkeyup = function(obj,e)
        {
        	if(parseInt(this.edt_data06.value) < parseInt(this.gfn_nvl(this.edt_data07.value, "0"))){
        		this.alert('입고수량이 발주수량보다 클 수 없습니다.');
        		this.edt_data07.set_value("0");
        		return;
        	}
        	this.edt_data08.set_value(parseInt(this.edt_data06.value) - parseInt(this.gfn_nvl(this.edt_data07.value, "0")));
        }

        this.edt_data07_onkillfocus = function(obj,e)
        {
        	if (this.gfn_nullToEmpty(this.edt_data07.value) == "") {
        		this.edt_data07.set_value("0");
        	}
        }

        //미입고수량 입력
        this.edt_data08_onkeyup = function(obj,e)
        {
        	this.edt_data07.set_value(parseInt(this.edt_data06.value) - parseInt(this.gfn_nvl(this.edt_data08.value, "0")));
        }

        this.edt_data08_onkillfocus = function(obj,e)
        {
        	if (this.gfn_nullToEmpty(this.edt_data08.value) == "") {
        		this.edt_data08.set_value("0");
        	}
        }

        this.btn_save_onclick = function(obj,e)
        {

            
            //this.edt_data13.value
            
        	var params = "TRPL_C="+this.getTrplCode();
        	
        	var sSvcID        = "inser_goodlog";//통신아이디
        	var sURL          = "svc::rest/pds/pricat/insertShortageOrder";// 호출할 서버 페이지 주소
        	var sInDatasets   = "in_ds=ds_master:A";//보내는데이터셋
        	var sOutDatasets  = "";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        	
        }

        this.grd_master_oncellclick = function(obj,e)
        {
        	this.sta_kind.set_text("1");
        	if(this.sta_kind.text == "1"){
        		var aRow = this.ds_master.rowposition;
        		
        		this.cbo_bzpl_list.set_value(this.ds_master.getColumn(aRow,"NA_BZPLC"));
        		this.edt_data03.set_value(this.ds_master.getColumn(aRow,"NA_WRS_C"));
        		this.edt_data04.set_value(this.ds_master.getColumn(aRow,"WRSNM"));
        		this.edt_wrs_std.set_value(this.ds_master.getColumn(aRow,"WRS_STDNM"));	//상품규격
        		this.edt_data06.set_value(this.ds_master.getColumn(aRow,"ODR_QT"));		//발주수량
        		this.edt_data07.set_value(this.ds_master.getColumn(aRow,"STR_QT"));		//입고수량
        		this.edt_data08.set_value(this.ds_master.getColumn(aRow,"UN_STR_QT"));	//미입고수량
        		this.cbo_str_rsnc.set_value(this.ds_master.getColumn(aRow,"UN_STR_RSNC"));	//미입고사유코드
        		this.cal_psb_dt.set_value(this.ds_master.getColumn(aRow,"ROTS_SPY_PSB_DT"));	//공급가능일자
        		this.cal_balju_date.set_value(this.ds_master.getColumn(aRow,"ODR_DT"));	//발주일자
        		this.edt_data05.set_value(this.ds_master.getColumn(aRow,"ODR_SLPNO"));	//발주전표번호
        		this.edt_data14.set_value(this.ds_master.getColumn(aRow,"ODR_DSQNO"));	//발주일련번호
        		this.edt_data13.set_value(this.ds_master.getColumn(aRow,"RMK_CNTN"));	//비고(미입고사유활용)
        		
        		this.edt_data10.set_value(this.ds_master.getColumn(aRow,"ODR_AM"));		//발주금액
        		this.edt_data09.set_value(this.ds_master.getColumn(aRow,"ODR_VAT"));	//발주부가세
        		this.edt_data07.set_value(this.ds_master.getColumn(aRow,"ODR_FBID_YN"));//발주금지여부
        		this.sta_trpl_c.set_text(this.ds_master.getColumn(aRow,"SPYPL_NA_TRPL_C"));	//거래처코드
        		this.sta_trpl_nm.set_text(this.ds_master.getColumn(aRow,"SPYPL_NA_TRPL_NM"));//거래처명
        		this.sta_dtm.set_text(this.ds_master.getColumn(aRow,"DTM"));			//날짜
        		this.sta_cmeno.set_text(this.ds_master.getColumn(aRow,"LS_CMENO"));		//최종사용자
        		this.edt_data11.set_value(this.ds_master.getColumn(aRow,"CTCPL_TELNO"));//전화번호
        		this.edt_data12.set_value(this.ds_master.getColumn(aRow,"RQ_CNTN"));	//신청내용

        		this.chk_delete.set_value(this.ds_master.getColumn(aRow,"DEL_YN"));	// 삭제여부
        	}
        }

        //입력정보 초기화 버튼
        this.btn_row_clear_onclick = function(obj,e)
        {
        	this.edt_data03.set_value("");
        	this.edt_data04.set_value("");
        	this.edt_wrs_std.set_value("");
        	this.cal_balju_date.set_value(this.gfn_today('yyyyMMdd'));
        	this.edt_data05.set_value("");
        	this.edt_data14.set_value("");
        	this.edt_data06.set_value("");
        	this.edt_data07.set_value("");
        	this.edt_data08.set_value("");
        	this.edt_data09.set_value("");
        	this.edt_data10.set_value("");
        	this.chk_delete.set_value("0");
        	this.edt_data11.set_value("");
        	this.edt_data12.set_value("");
        	this.cbo_str_rsnc.set_value("");
        	this.edt_data13.set_value("");
        	this.cal_psb_dt.set_value("");
        	this.sta_kind.set_text("0");
        }

        this.edt_data03_oneditclick = function(obj,e)
        {
        	if(this.cbo_bzpl_list.value == ""){
        		this.alert("물류센터코드를 선택하세요.");
        		return;
        	}
        }

        
        this.getWRSforShortageList = function(SPYPL_NA_TRPL_C,ODR_SLPNO,NA_BZPLC,ODR_DT)
        {
        	
        	var params = "SPYPL_NA_TRPL_C="+SPYPL_NA_TRPL_C
        				+" ODR_SLPNO="+ODR_SLPNO
        				+" NA_BZPLC="+NA_BZPLC
        				+" ODR_DT="+ODR_DT
        	;
        	
        	var sSvcID        = "getWRSforShortageList";//통신아이디
        	var sURL          = "svc::rest/pds/pricat/getWRSforShortageList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_master=ds_master";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        this.btn_search_onclick = function(obj,e)
        {
        	if(this.cbo_bzpl_list.value == ""){
        		this.alert("물류센터코드를 선택하세요.");
        		return;
        	}
        	if(this.gfn_nullToEmpty(this.edt_data01.value) == ""){
        		this.alert("등록하신 전표를 먼저 선택하고 조회 하세요.");
        		return;
        	}
        	
        	var params = "NA_BZPLC="+this.cbo_bzpl_list.value
        				+" APL_DT="+this.cal_search_date.value
        				+" WRS_GUBUN="+this.rdo_wrs_gubun.value
        				+" WRS_SEARCH="+this.gfn_nullToEmpty(this.edt_data00.value)
        				+" ODR_SLPNO="+this.edt_data01.value
        				+" TRPL_C="+this.gfn_nullToEmpty(this.getTrplCode())
        	;
        	
        	var sSvcID        = "p_trtgoodlog";//통신아이디
        	var sURL          = "svc::rest/pds/pricat/getShortageOrder";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_master=ds_master";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        this.btn_down01_onclick = function(obj,e)
        {
        	var params = "TRPL_C="+this.getTrplCode()
        				+"&ODRPL_NA_TRPL_C="+this.cbo_bzpl_list.value		
        				+"&ODR_DT="+this.gfn_nullToEmpty(this.cal_search_date.value)	
        	;
        	excelDownHandler(application.gv_server_url+"rest/excel/getShortagedOrdersFile?"+params, this);	
        }

        this.cbo_str_rsnc_onitemchanged = function(obj,e)
        {
           // alert(this.edt_data13.readonly);
        	if(this.gfn_nullToEmpty(this.cbo_str_rsnc.value) != "08" ){
        	   // 미입고 사유코드 기타가 아닐경우 기타 미입고 사유 텍스트 비활성화
        	    this.edt_data13.set_enable(false);
        	    this.edt_data13.set_value("");
        	
        	} else {
        	    this.edt_data13.set_enable(true);
        	}
        }
        this.VAN_DS_SC_1570_onkeydown = function(obj,e)
        {
        	var key = this.gfn_onkeydown(e);
        	
        	if(key=="F")
        	{	
        		this.btn_search_onclick();
        	}
        	
        	if(key=="S")
        	{
        		this.btn_save_onclick();
        	}
        }

        this.btn_search_onmousemove = function(obj,e)
        {
        	this.gfn_onmousemove(obj, "F");
        }

        this.btn_save_onmousemove = function(obj,e)
        {
        	this.gfn_onmousemove(obj, "S");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("onkeydown", this.VAN_DS_SC_1570_onkeydown, this);
            this.btn_clear00.addEventHandler("onclick", this.btn_clear00_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_search.addEventHandler("onmousemove", this.btn_search_onmousemove, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.btn_save.addEventHandler("onmousemove", this.btn_save_onmousemove, this);
            this.edt_data00.addEventHandler("oneditclick", this.edt_GLN_oneditclick, this);
            this.cbo_bzpl_list.addEventHandler("onitemchanged", this.cbo_bzpl_list_onitemchanged, this);
            this.edt_data03.addEventHandler("oneditclick", this.edt_data03_oneditclick, this);
            this.edt_data04.addEventHandler("onkeydown", this.div_search_edt_data01_onkeydown, this);
            this.btn_popup01.addEventHandler("onclick", this.div_search_btn_popup01_onclick, this);
            this.edt_data07.addEventHandler("onkeyup", this.edt_data07_onkeyup, this);
            this.edt_data07.addEventHandler("onkillfocus", this.edt_data07_onkillfocus, this);
            this.edt_data01.addEventHandler("oneditclick", this.edt_GLN_oneditclick, this);
            this.btn_popup00.addEventHandler("onclick", this.div_search_btn_popup00_onclick, this);
            this.edt_data05.addEventHandler("oneditclick", this.edt_GLN_oneditclick, this);
            this.btn_popup02.addEventHandler("onclick", this.btn_popup02_onclick, this);
            this.edt_data08.addEventHandler("onkeyup", this.edt_data08_onkeyup, this);
            this.edt_data08.addEventHandler("onkillfocus", this.edt_data08_onkillfocus, this);
            this.edt_data09.addEventHandler("onkeydown", this.div_search_edt_data00_onkeydown, this);
            this.edt_data10.addEventHandler("onkeydown", this.div_search_edt_data00_onkeydown, this);
            this.edt_data11.addEventHandler("onkeydown", this.div_search_edt_data00_onkeydown, this);
            this.cbo_str_rsnc.addEventHandler("onitemchanged", this.cbo_str_rsnc_onitemchanged, this);
            this.edt_data13.addEventHandler("onkeydown", this.div_search_edt_data00_onkeydown, this);
            this.grd_master.addEventHandler("oncellclick", this.grd_master_oncellclick, this);
            this.btn_row_update.addEventHandler("onclick", this.btn_row_update_onclick, this);
            this.btn_row_clear.addEventHandler("onclick", this.btn_row_clear_onclick, this);
            this.edt_data14.addEventHandler("oneditclick", this.edt_GLN_oneditclick, this);
            this.edt_wrs_std.addEventHandler("onkeydown", this.div_search_edt_data00_onkeydown, this);
            this.btn_down01.addEventHandler("onclick", this.btn_down01_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1570.xfdl");
        this.loadPreloadList();
       
    };
}
)();
