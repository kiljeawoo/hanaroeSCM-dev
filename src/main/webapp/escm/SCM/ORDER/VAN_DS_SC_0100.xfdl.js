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
                this.set_name("VAN_DS_SC_0100");
                this.set_titletext("수주등록");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dataM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ODR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"VAN_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"SHRT_BZPLNM\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"TEAMNM\" type=\"STRING\" size=\"256\"/><Column id=\"DVYAA_C\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_RQR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DDLY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_VHC_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"SPY_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"VHCNO\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_RQR_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"TEMP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ODR_AM\" type=\"INT\" size=\"256\"/><Column id=\"TOTAL_ODR_VAT\" type=\"INT\" size=\"256\"/><Column id=\"TOTAL_VCBT_AM\" type=\"INT\" size=\"256\"/><Column id=\"TOTAL_VCBX_AM\" type=\"INT\" size=\"256\"/><Column id=\"EMRG_ODR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GRS_SOJU_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DVYAA_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"DVYAA_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"HDN_ODRPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"HDN_ODRPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_CTR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"RVOPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"RVOPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_TR_REL_AMNNO\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_TR_REL_AMNNO\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"PRGR_C\" type=\"STRING\" size=\"256\"/><Column id=\"ACTL_SPYPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DVYAA_C\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dataD", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ODRPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_DSQNO\" type=\"STRING\" size=\"256\"/><Column id=\"VAN_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"BOXPE_AQZ\" type=\"INT\" size=\"256\"/><Column id=\"WRS_STDNM\" type=\"STRING\" size=\"256\"/><Column id=\"UNT_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_UNT_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_QT\" type=\"INT\" size=\"256\"/><Column id=\"ODR_PCS\" type=\"INT\" size=\"256\"/><Column id=\"ODR_VAT\" type=\"INT\" size=\"256\"/><Column id=\"ODR_AM\" type=\"INT\" size=\"256\"/><Column id=\"VCBT_AM\" type=\"INT\" size=\"256\"/><Column id=\"VCBX_AM\" type=\"INT\" size=\"256\"/><Column id=\"VCBT_UPR\" type=\"INT\" size=\"256\"/><Column id=\"VCBX_UPR\" type=\"INT\" size=\"256\"/><Column id=\"TXT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_SCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_DTCF_C\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"MIN_ODR_QT\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_ctr_tpc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"32\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\"/><Column id=\"SIMP_C_EXPL\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_bizDtYn", this);
            obj._setContents("<ColumnInfo><Column id=\"BIZDY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BIZDT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_buyer", this);
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_N\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_ENO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("sta_back_bar10", "absolute", "69", "334", null, "29", "15", null, this);
            obj.set_taborder("230");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar03", "absolute", "109", "125", null, "29", "15", null, this);
            obj.set_taborder("128");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "0", "41", "21", "14", null, this);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("div_menu", "absolute", "0", "0", null, "21", "406", null, this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar02", "absolute", "109", "97", null, "29", "15", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title01", "absolute", "0", "69", "110", "29", null, null, this);
            obj.set_taborder("5");
            obj.set_text("수주번호");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title04", "absolute", "0", "97", "110", "29", null, null, this);
            obj.set_taborder("6");
            obj.set_text("배송지");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar01", "absolute", "109", "69", null, "29", "15", null, this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title02", "absolute", "268", "69", "110", "29", null, null, this);
            obj.set_taborder("14");
            obj.set_text("발주처");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dvyaa_c", "absolute", "113", "101", "128", "21", null, null, this);
            obj.set_taborder("16");
            obj.set_readonly("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "113", "161", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("25");
            obj.set_text("[00] 미입력");
            obj.set_enable("false");

            obj = new Static("sta_back_bar05", "absolute", "109", "153", null, "29", "15", null, this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pagename01", "absolute", "0", "45", "135", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_text("Master 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title10", "absolute", "534", "153", "110", "29", null, null, this);
            obj.set_taborder("47");
            obj.set_text("임시저장");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title11", "absolute", "0", "153", "110", "29", null, null, this);
            obj.set_taborder("59");
            obj.set_text("수주총액");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_dvy_vhc_dsc", "absolute", "406", "49", "180", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_dvy_vhc_dsc_innerdataset = new Dataset("rdo_dvy_vhc_dsc_innerdataset", this.rdo_dvy_vhc_dsc);
            rdo_dvy_vhc_dsc_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">발주처</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">수주처</Col></Row></Rows>");
            obj.set_innerdataset(rdo_dvy_vhc_dsc_innerdataset);
            obj.set_taborder("65");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.style.set_font("9 Gulim");
            obj.set_value("2");
            obj.set_visible("false");
            obj.set_index("1");

            obj = new Grid("grd_master", "absolute", "1", "382", null, null, "15", "-2", this);
            obj.set_taborder("70");
            obj.set_binddataset("ds_dataD");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"250\"/><Column size=\"91\"/><Column size=\"70\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"0\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"28\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" text=\"발주처\"/><Cell col=\"2\" text=\"발주처팀코드\"/><Cell col=\"3\" text=\"발주일자\"/><Cell col=\"4\" text=\"발주전표번호\"/><Cell col=\"5\" text=\"VAN생성일련번호\"/><Cell col=\"6\" text=\"발주상세일련번호\"/><Cell col=\"7\" text=\"상품코드\"/><Cell col=\"8\" rowspan=\"2\" text=\"박스입수\"/><Cell col=\"9\" text=\"규격\"/><Cell col=\"10\" text=\"수주량\"/><Cell col=\"11\" text=\"수주부가세\"/><Cell col=\"12\" text=\"공병단가\"/><Cell col=\"13\" text=\"공상자단가\"/><Cell col=\"14\" rowspan=\"2\" text=\"삭제&#13;&#10;여부\"/><Cell row=\"1\" col=\"1\"/><Cell row=\"1\" col=\"2\"/><Cell row=\"1\" col=\"3\"/><Cell row=\"1\" col=\"4\"/><Cell row=\"1\" col=\"5\"/><Cell row=\"1\" col=\"6\"/><Cell row=\"1\" col=\"7\" text=\"상품명\"/><Cell row=\"1\" col=\"9\" text=\"단위\"/><Cell row=\"1\" col=\"10\" text=\"수주원가\"/><Cell row=\"1\" col=\"11\" text=\"수주금액\"/><Cell row=\"1\" col=\"12\" text=\"공병금액\"/><Cell row=\"1\" col=\"13\" text=\"공상자금액\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:ODRPL_NA_TRPL_C\"/><Cell col=\"2\" text=\"bind:ODRPL_NA_TEAM_C\"/><Cell col=\"3\" text=\"bind:ODR_DT\"/><Cell col=\"4\" text=\"bind:ODR_SLPNO\"/><Cell col=\"5\" text=\"bind:VAN_SEQ\"/><Cell col=\"6\" text=\"bind:ODR_DSQNO\"/><Cell col=\"7\" text=\"bind:NA_WRS_C\"/><Cell col=\"8\" rowspan=\"2\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:BOXPE_AQZ\" mask=\"#,##0\"/><Cell col=\"9\" text=\"bind:WRS_STDNM\"/><Cell col=\"10\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_QT\" mask=\"#,##0\"/><Cell col=\"11\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_VAT\" mask=\"#,##0\"/><Cell col=\"12\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:VCBT_UPR\" mask=\"#,##0\"/><Cell col=\"13\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:VCBX_UPR\" mask=\"#,##0\"/><Cell col=\"14\" rowspan=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:DEL_YN\"/><Cell row=\"1\" col=\"1\"/><Cell row=\"1\" col=\"2\"/><Cell row=\"1\" col=\"3\"/><Cell row=\"1\" col=\"4\"/><Cell row=\"1\" col=\"5\"/><Cell row=\"1\" col=\"6\"/><Cell row=\"1\" col=\"7\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:WRSNM\"/><Cell row=\"1\" col=\"9\" text=\"bind:NA_WRS_UNT_C\"/><Cell row=\"1\" col=\"10\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_PCS\" mask=\"#,##0\"/><Cell row=\"1\" col=\"11\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:ODR_AM\" mask=\"#,##0\"/><Cell row=\"1\" col=\"12\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:VCBT_AM\" mask=\"#,##0\"/><Cell row=\"1\" col=\"13\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:VCBX_AM\" mask=\"#,##0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pagename03", "absolute", "0", "199", "180", "21", null, null, this);
            obj.set_taborder("71");
            obj.set_text("Detail 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar08", "absolute", "69", "250", null, "29", "15", null, this);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar09", "absolute", "69", "278", null, "29", "15", null, this);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title18", "absolute", "0", "278", "82", "29", null, null, this);
            obj.set_taborder("81");
            obj.set_text("단위");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title15", "absolute", "180", "250", "75", "29", null, null, this);
            obj.set_taborder("86");
            obj.set_text("상품명");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar07", "absolute", "0", "222", null, "29", "15", null, this);
            obj.set_taborder("105");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_treatment00", "absolute", "7", "226", "110", "21", null, null, this);
            obj.set_taborder("106");
            obj.set_text("처리대상건수 :");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_grd_master_cnt", "absolute", "119", "226", "25", "21", null, null, this);
            obj.set_taborder("107");
            obj.set_text("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear", "absolute", "734", "226", "47", "21", null, null, this);
            obj.set_taborder("112");
            obj.set_text("CLEAR");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_rowUpdate", "absolute", "656", "226", "75", "21", null, null, this);
            obj.set_taborder("113");
            obj.set_text("행추가/수정");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_treat_count02", "absolute", "143", "226", "25", "21", null, null, this);
            obj.set_taborder("121");
            obj.set_text("건");
            this.addChild(obj.name, obj);

            obj = new Button("btn_init", "absolute", null, "0", "53", "21", "57", null, this);
            obj.set_taborder("125");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title06", "absolute", "268", "97", "110", "29", null, null, this);
            obj.set_taborder("126");
            obj.set_text("배송요청일자");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title24", "absolute", "0", "125", "110", "29", null, null, this);
            obj.set_taborder("131");
            obj.set_text("공급유형");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title25", "absolute", "534", "97", "110", "29", null, null, this);
            obj.set_taborder("132");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_spy_tpc", "absolute", "113", "129", "110", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_spy_tpc_innerdataset = new Dataset("cbo_spy_tpc_innerdataset", this.cbo_spy_tpc);
            cbo_spy_tpc_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">매취</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">수탁</Col></Row></Rows>");
            obj.set_innerdataset(cbo_spy_tpc_innerdataset);
            obj.set_taborder("133");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displaynulltext("[선택안됨]");
            obj.set_enable("false");
            obj.set_index("-1");

            obj = new CheckBox("chk_temp_yn", "absolute", "647", "159", "86", "19", null, null, this);
            obj.set_taborder("134");
            obj.set_text("임시저장");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.style.set_font("9 Gulim");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_van_seq", "absolute", "113", "73", "128", "21", null, null, this);
            obj.set_taborder("135");
            obj.set_enable("false");
            obj.set_cssclass("WF_Essential");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pup_van_seq", "absolute", "243", "73", "21", "21", null, null, this);
            obj.set_taborder("136");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_orpl_na_trpl_c", "absolute", "381", "73", "98", "21", null, null, this);
            obj.set_taborder("137");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            obj.set_maxlength("13");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_shrt_bzplnm", "absolute", "481", "73", "199", "21", null, null, this);
            obj.set_taborder("138");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popup05", "absolute", "682", "73", "21", "21", null, null, this);
            obj.set_taborder("139");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_teamnm", "absolute", "734", "73", "51", "21", null, null, this);
            obj.set_taborder("140");
            obj.set_maxlength("12");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_orpl_na_team_c", "absolute", "705", "73", "28", "21", null, null, this);
            obj.set_taborder("141");
            obj.set_maxlength("3");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_dvy_rqr_dt", "absolute", "381", "101", "98", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("142");
            obj.set_dateformat("yyyy-MM-dd");

            obj = new CheckBox("chk_ddly_yn", "absolute", "566", "50", "86", "19", null, null, this);
            obj.set_taborder("143");
            obj.set_text("직송여부");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.style.set_font("9 Gulim");
            obj.set_value("0");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_vhcno", "absolute", "647", "101", "98", "21", null, null, this);
            obj.set_taborder("144");
            obj.set_cssclass("WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "725", "182", "55", "20", null, null, this);
            obj.set_taborder("147");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_na_wrs_c", "absolute", "85", "254", "92", "21", null, null, this);
            obj.set_taborder("182");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_wrsnm", "absolute", "258", "254", "157", "21", null, null, this);
            obj.set_taborder("183");
            obj.set_maxlength("12");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00", "absolute", "441", "250", "77", "29", null, null, this);
            obj.set_taborder("184");
            obj.set_text("박스입수");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popup00", "absolute", "418", "254", "21", "21", null, null, this);
            obj.set_taborder("185");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title14", "absolute", "613", "250", "88", "29", null, null, this);
            obj.set_taborder("186");
            obj.set_text("규격");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title16", "absolute", "180", "278", "75", "29", null, null, this);
            obj.set_taborder("190");
            obj.set_text("수주량");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title17", "absolute", "441", "278", "77", "29", null, null, this);
            obj.set_taborder("193");
            obj.set_text("수주원가");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title19", "absolute", "613", "278", "88", "29", null, null, this);
            obj.set_taborder("194");
            obj.set_text("수주부과세");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_odr_pcs", "absolute", "521", "282", "85", "21", null, null, this);
            obj.set_taborder("195");
            obj.set_value("0");
            obj.set_mask("#,##0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_odr_vat", "absolute", "704", "282", "81", "21", null, null, this);
            obj.set_taborder("196");
            obj.set_value("0");
            obj.set_mask("#,##0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back_bar00", "absolute", "69", "306", null, "29", "15", null, this);
            obj.set_taborder("197");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title20", "absolute", "0", "306", "82", "29", null, null, this);
            obj.set_taborder("198");
            obj.set_text("수주금액");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_odr_am", "absolute", "85", "310", "92", "21", null, null, this);
            obj.set_taborder("206");
            obj.set_value("0");
            obj.set_mask("#,##0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_odr_qt", "absolute", "258", "282", "157", "21", null, null, this);
            obj.set_taborder("208");
            obj.set_mask("#,##0");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "720", "363", "55", "20", null, null, this);
            obj.set_taborder("210");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popup01", "absolute", "243", "101", "21", "21", null, null, this);
            obj.set_taborder("211");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_total_am", "absolute", "113", "157", "146", "21", null, null, this);
            obj.set_taborder("212");
            obj.set_value("0");
            obj.set_mask("#,##0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_total_vat", "absolute", "261", "157", "146", "21", null, null, this);
            obj.set_taborder("213");
            obj.set_value("0");
            obj.set_mask("#,##0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_wrs_stdnm", "absolute", "704", "254", "81", "21", null, null, this);
            obj.set_taborder("215");
            obj.set_maxlength("12");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_na_wrs_unt_c", "absolute", "85", "281", "92", "21", null, null, this);
            obj.set_taborder("216");
            obj.set_maxlength("12");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_boxpe_aqz", "absolute", "521", "254", "85", "21", null, null, this);
            obj.set_taborder("217");
            obj.set_value("0");
            obj.set_mask("#,##0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title08", "absolute", "180", "306", "75", "29", null, null, this);
            obj.set_taborder("227");
            obj.set_text("공병단가");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title12", "absolute", "441", "306", "77", "29", null, null, this);
            obj.set_taborder("228");
            obj.set_text("공병금액");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title22", "absolute", "613", "306", "88", "29", null, null, this);
            obj.set_taborder("229");
            obj.set_text("공상자단가");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title26", "absolute", "0", "334", "82", "29", null, null, this);
            obj.set_taborder("231");
            obj.set_text("공상자금액");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_vcbx_am", "absolute", "85", "338", "92", "21", null, null, this);
            obj.set_taborder("232");
            obj.set_value("0");
            obj.set_mask("#,##0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title13", "absolute", "0", "250", "82", "29", null, null, this);
            obj.set_taborder("236");
            obj.set_text("상품코드");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_vcbt_upr", "absolute", "258", "310", "157", "21", null, null, this);
            obj.set_taborder("237");
            obj.set_value("0");
            obj.set_mask("#,##0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_vcbt_am", "absolute", "521", "310", "85", "21", null, null, this);
            obj.set_taborder("238");
            obj.set_value("0");
            obj.set_mask("#,##0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_vcbx_upr", "absolute", "704", "310", "81", "21", null, null, this);
            obj.set_taborder("239");
            obj.set_value("0");
            obj.set_mask("#,##0");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_total_vcbt_am", "absolute", "109", "49", "146", "21", null, null, this);
            obj.set_taborder("240");
            obj.set_value("0");
            obj.set_mask("#,##0");
            obj.set_enable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_total_vcbx_am", "absolute", "256", "49", "146", "21", null, null, this);
            obj.set_taborder("241");
            obj.set_value("0");
            obj.set_mask("#,##0");
            obj.set_enable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dvyaa_na_trpl_c", "absolute", "109", "29", "98", "21", null, null, this);
            obj.set_taborder("242");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dvyaa_na_team_c", "absolute", "208", "29", "98", "21", null, null, this);
            obj.set_taborder("243");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prgr_c", "absolute", "306", "29", "98", "21", null, null, this);
            obj.set_taborder("244");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title03", "absolute", "268", "125", "110", "29", null, null, this);
            obj.set_taborder("245");
            obj.set_text("계약유형");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_cser_ctr_tpc", "absolute", "381", "129", "149", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("246");
            obj.set_innerdataset("ds_ctr_tpc");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_enable("false");

            obj = new Static("sta_title05", "absolute", "534", "125", "110", "29", null, null, this);
            obj.set_taborder("247");
            obj.set_text("지방소주여부");
            obj.set_cssclass("sta_WF_Label");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_grs_soju_yn", "absolute", "647", "130", "119", "19", null, null, this);
            obj.set_taborder("248");
            obj.set_text("지방수주여부");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_visible("true");
            obj.style.set_font("9 Gulim");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_txt_dsc", "absolute", "96", "205", "118", "18", null, null, this);
            obj.set_taborder("249");
            obj.set_visible("false");
            obj.set_displaynulltext("과세구분");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_min_odr_qt", "absolute", "330", "205", "118", "18", null, null, this);
            obj.set_taborder("250");
            obj.set_displaynulltext("최소발주수량");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_vcbt_na_wrs_c", "absolute", "213", "205", "118", "18", null, null, this);
            obj.set_taborder("251");
            obj.set_displaynulltext("공병상품코드");
            obj.set_cssclass("WF_Essential");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "108", null, this);
            obj.set_taborder("209");
            obj.set_text("div_auth");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_unt_c", "absolute", "448", "205", "86", "18", null, null, this);
            obj.set_taborder("252");
            obj.set_displaynulltext("단위코드");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1540");
            		p.set_titletext("수주등록");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edt_van_seq","value","ds_dataM","VAN_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edt_orpl_na_trpl_c","value","ds_dataM","ODRPL_NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_shrt_bzplnm","value","ds_dataM","SHRT_BZPLNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edt_orpl_na_team_c","value","ds_dataM","ODRPL_NA_TEAM_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_teamnm","value","ds_dataM","TEAMNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edt_dvyaa_c","value","ds_dataM","DVYAA_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","cal_dvy_rqr_dt","value","ds_dataM","DVY_RQR_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","chk_ddly_yn","value","ds_dataM","DDLY_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","rdo_dvy_vhc_dsc","value","ds_dataM","DVY_VHC_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","cbo_spy_tpc","value","ds_dataM","SPY_TPC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","edt_vhcno","value","ds_dataM","VHCNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","mae_total_am","value","ds_dataM","TOTAL_ODR_AM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","mae_total_vat","value","ds_dataM","TOTAL_ODR_VAT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","chk_temp_yn","value","ds_dataM","TEMP_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","mae_total_vcbt_am","value","ds_dataM","TOTAL_VCBT_AM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","mae_total_vcbx_am","value","ds_dataM","TOTAL_VCBX_AM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","edt_dvyaa_na_trpl_c","value","ds_dataM","DVYAA_NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","edt_dvyaa_na_team_c","value","ds_dataM","DVYAA_NA_TEAM_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","cbo_cser_ctr_tpc","value","ds_dataM","CSER_CTR_TPC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","chk_grs_soju_yn","value","ds_dataM","GRS_SOJU_YN");
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
        this.addIncludeScript("VAN_DS_SC_0100.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0100.xfdl", function() {
        //include "lib::comLib.xjs";
        /*##################################################################################
         화면명	: 수주등록
         화면ID  	: VAN_DS_SC_0100
         작성자 	: swha
         작성일자 : 2015.06.30
         변경내용 :    
        				2015.08.28
        				1. 삭제(긴급발주, 지방소주여부, 배송요청내용)
        				2. 배송차량구분은 수주처만 존재
        				
        				
        	
         배송요청일을 기준으로 팀별상품별가격군변경예약 테이블의 적용일자를 검색하여
         상품의 가격정보를 가져옴. 
        ####################################################################################*/
        /***************************************************************************************
        	code        : 호출할 공통코드
        	dsName      : 호출된 공통코드를 담을 Dataset
        	selecttype  : ComboBox 최상단에 추가할 문구( A: -전체-, S:-선택-, N: 빈칸)
        	 
        	selecttype은 추후 변경될 수 있음.
        	this.fn_commonAfterOnload를 화면에 선언하면 gfn_setCommonCode처리후 호출됨.
        *****************************************************************************************/
        var v_odrpl_na_trpl_c 			= "";
        var v_odrpl_na_team_c 			= "";
        var v_odr_dt 					= "";
        var v_odr_slpno 				= "";
        var v_van_seq 					= "";
        var v_na_wrs_lclc 				= "";
        var v_na_wrs_mclc				= "";
        var var_prgr_c					= "";
        var var_cser_na_usr_sys_kdc		= "";
        var var_na_wrs_lclc				= "";
        var var_na_wrs_mclc 			= "";
        var var_na_wrs_sclc 			= "";
        var var_na_wrs_dtcf_c 			= "";
        var var_min_odr_qt				= "";
        var var_vcbt_na_wrs_c			= "";
        var var_cser_ctr_tpc			= "";

        var dataDArr = new Array('NA_WRS_C'
        							,'WRSNM'
        							,'BOXPE_AQZ'
        							,'WRS_STDNM'
        							,'NA_WRS_UNT_C'
        							,'ODR_QT'
        							,'ODR_PCS'
        							,'ODR_VAT'
        							,'ODR_AM'
        							,'VCBT_AM'
        							,'VCBX_AM'
        							,'VCBT_UPR'
        							,'VCBX_UPR'
        							,'TXT_DSC'
        							,'VCBT_NA_WRS_C'
        							,'UNT_C'
        						);
        var wrsInfoArr = new Array('edt_na_wrs_c'
        						,'edt_wrsnm'
        						,'mae_boxpe_aqz'
        						,'edt_wrs_stdnm'
        						,'edt_na_wrs_unt_c'
        						,'mae_odr_qt'
        						,'mae_odr_pcs'
        						,'mae_odr_vat'
        						,'mae_odr_am'
        						,'mae_vcbt_am'
        						,'mae_vcbx_am'
        						,'mae_vcbt_upr'
        						,'mae_vcbx_upr'
        						,'edt_txt_dsc'
        						,'edt_vcbt_na_wrs_c'
        						,'edt_unt_c'
        						
        					);

        this.form_onload = function(obj,e) 
        {	

        	this.gfn_setInitForm(obj, e); //공통
        	this.authChkDisable();//권한사업장 체크박스 비활성화
        	this.grd_master.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	//그리드클릭 이벤트 등록
        	this.grd_master.addEventHandler("oncellclick", this.grd_afterFnc, this);
        	var param = [  
         		{code:"CTR_TPC",   dsName:"ds_ctr_tpc",   selecttype:"N"}//계약유형
            ];
        	this.gfn_setCommonCode(param);
        };

        this.fn_afterFormOnload = function(){	
        	var today = this.gfn_today('yyyyMMdd');
        	
        	//this.cal_dvy_rqr_dt.set_value(this.gfn_addDate(today, 1));
        	this.cal_dvy_rqr_dt.set_value(today);
        	this.edt_van_seq.set_enable(false);
        	this.ds_dataM.setColumn(0, 'TEMP_YN', 'N');
        	this.ds_dataM.setColumn(0, 'GRS_SOJU_YN', '0');
        	this.ds_dataM.setColumn(0, 'DDLY_YN', '0');
        	
        };

        this.btn_pup_van_seq_onclick = function(obj,e)
        {
        	var trplC = this.getTrplCode();//권한사업장
        	var oArg = {form_id:"VAN_DS_SC_0100", trplC:trplC};
        	var sOption = "autosize=true,title=false";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("vanSeqSrhPopup","SCM.ORDER::VAN_DS_SC_0100_P00.xfdl",oArg,sOption,sPopupCallBack);
        	//this.reload();
        	
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	//trace(" strId : " + strId + " strVal : " + strVal);
        		
        	if(strVal){
        		var paramsArr = strVal.split(",");
        	
        		if(strId == "vanSeqSrhPopup"){
        			
        			v_odrpl_na_trpl_c 	= paramsArr[0];
        			v_odrpl_na_team_c 	= paramsArr[1];
        			v_odr_dt 			= paramsArr[2];
        			v_odr_slpno 		= paramsArr[3];
        			v_van_seq 			= paramsArr[4];
        			/*
        			var rvopl_na_trpl_c = paramsArr[5];
        			alert(rvopl_na_trpl_c);
        			var ds_authority = this.div_auth.ds_authorityWorkplace;
        			for(var row; row < ds_authority.rowcount; row++){
        				if(ds_authority.getColumn(row, "NA_TRPL_C") == rvopl_na_trpl_c){
        					this.div_auth.cbo_authorityWorkplace.set_index(row);
        				}
        			}
        			*/
        			
        			
        			this.fn_search();
        		}
        		
        		if(strId == "wrsSearchPop"){
        		
        			var valueArr 			= strVal.split(",");
        			var na_wrs_c 			= valueArr[0];
        			var wrsnm 				= valueArr[1];
        			var boxpe_aqz 			= valueArr[2];
        			var wrs_stdnm 			= valueArr[3];
        			var na_wrs_std_unt_c 	= valueArr[4];
        			var odr_pcs 			= valueArr[5];
        			var odr_vat 			= valueArr[6];
        			var vcbt_upr 			= valueArr[7];
        			var vcbx_upr 			= valueArr[8];
        			var txt_dsc				= valueArr[9];
        			var_na_wrs_lclc 		= paramsArr[12];
        			var_na_wrs_mclc 		= paramsArr[13];
        			var_na_wrs_sclc 		= paramsArr[14];
        			var_na_wrs_dtcf_c 		= paramsArr[15];
        			var_min_odr_qt			= paramsArr[19];
        			var_vcbt_na_wrs_c		= paramsArr[21];
        			var unt_c	 	= valueArr[22];
        			
        			
        			
        			this.edt_na_wrs_c.set_value(na_wrs_c);
        			this.edt_wrsnm.set_value(wrsnm);
        			this.mae_boxpe_aqz.set_value(boxpe_aqz);
        			this.edt_wrs_stdnm.set_value(wrs_stdnm);
        			this.edt_na_wrs_unt_c.set_value(na_wrs_std_unt_c);
        			this.mae_odr_pcs.set_value(odr_pcs);
        			this.mae_odr_vat.set_value(odr_vat);
        			this.mae_vcbt_upr.set_value(vcbt_upr);
        			this.edt_txt_dsc.set_value(txt_dsc);
        			this.edt_vcbt_na_wrs_c.set_value(var_vcbt_na_wrs_c);
        			this.edt_unt_c.set_value(unt_c);
        			
        		}
        		
        		if(strId == "VAN_DS_SC_0100_P01"){
        			this.edt_dvyaa_c.set_value(paramsArr[0]);
        		}
        		
        		if(strId == "POPUP_TRNREL_ODRPL"){
        		
        			/*
        			if(//수주입력, 수정시 발주처가 변경된 경우 상품 리스트 삭제여부
        				!this.gfn_isNull(this.edt_orpl_na_trpl_c.value)
        				&&
        				this.gfn_nullToEmpty(this.edt_orpl_na_trpl_c) != this.gfn_nullToEmpty(this.ds_dataM.getColumn(0, "HDN_ODRPL_NA_TRPL_C"))
        				&&
        				this.gfn_nullToEmpty(this.edt_orpl_na_team_c) != this.gfn_nullToEmpty(this.ds_dataM.getColumn(0, "HDN_ODRPL_NA_TEAM_C"))
        			){
        				var strRtn = this.gfn_getMessage("confirm","msg.van_ds_sc_0100.confirm.detail.info.delete.yn");
        				if(strRtn){
        					this.ds_dataD.clearData();
        					this.sta_grd_master_cnt.set_text(this.ds_dataD.rowcount);
        				}
        			}
        			*/
        			
        			var valueArr = strVal.split(",");
        			this.edt_orpl_na_trpl_c.set_value(valueArr[0]);
        			this.edt_shrt_bzplnm.set_value(valueArr[1]);
        			this.edt_orpl_na_team_c.set_value(valueArr[2]);
        			this.edt_teamnm.set_value(valueArr[3]);
        			this.edt_prgr_c.set_value(valueArr[4]);
        			var_cser_ctr_tpc 		= valueArr[6];
        			var_prgr_c 				= valueArr[4];//가격군코드
        			var_cser_na_usr_sys_kdc = valueArr[5];//발주처시스템코드
        			
        			if ((this.gfn_trim(var_cser_na_usr_sys_kdc) =="52") || (this.gfn_trim(var_cser_na_usr_sys_kdc) =="54")) {	 
        				alert("발주처가 물류센터인 경우 수주등록 사용이 제한됩니다.");
        				this.reload();
        			}
        			v_na_wrs_lclc 			= valueArr[12];
        			v_na_wrs_mclc 			= valueArr[13];
        						
        			this.ds_dataM.setColumn(0, "ODRPL_NA_TRPL_C", valueArr[0]);
        			this.ds_dataM.setColumn(0, "ODRPL_NA_TEAM_C", valueArr[2]);
        			this.ds_dataM.setColumn(0, "CSER_CTR_TPC", valueArr[6]);
        			this.ds_dataM.setColumn(0, "SPY_TPC", valueArr[14]);
        			this.ds_dataM.setColumn(0, "NA_WRS_LCLC", valueArr[12]);
        			this.ds_dataM.setColumn(0, "NA_WRS_MCLC", valueArr[13]);
        			this.ds_dataM.setColumn(0, "MNGT_NA_TRPL_C", valueArr[7]);
        			this.ds_dataM.setColumn(0, "MNGT_NA_TEAM_C", valueArr[8]);
        			this.ds_dataM.setColumn(0, "MNGT_NA_TR_TPC", valueArr[9]);
        			
        			if(valueArr[6] == "4" || valueArr[6] == "5"){
        				/*자체계약*/
        				this.ds_dataM.setColumn(0, "MNGT_TR_REL_AMNNO", valueArr[18]);
        				this.ds_dataM.setColumn(0, "CSER_TR_REL_AMNNO", valueArr[19]);
        			}else{
        				/*계통계약*/
        				this.ds_dataM.setColumn(0, "MNGT_TR_REL_AMNNO", "0");
        				this.ds_dataM.setColumn(0, "CSER_TR_REL_AMNNO", valueArr[18]);
        			}
        			
        			this.ds_dataM.setColumn(0, "SPYPL_NA_TRPL_C", valueArr[15]);
        			this.ds_dataM.setColumn(0, "SPYPL_NA_TEAM_C", valueArr[16]);
        			this.ds_dataM.setColumn(0, "DVYAA_NA_TRPL_C", valueArr[0]);
        			this.ds_dataM.setColumn(0, "DVYAA_NA_TEAM_C", valueArr[2]);
        			this.ds_dataM.setColumn(0, "PRGR_C", valueArr[4]);
        			this.fn_getBizDt(valueArr[0], valueArr[2], this.gfn_nullToEmpty(this.getTrplCode()), '00', this.cal_dvy_rqr_dt.value);//리드타임일수
        			this.div_auth.set_enable(false);
        			this.btn_popup05.set_enable(false);
        			trace("발주처 조회 후 : " + this.ds_dataM.saveXML());
        		}
        	}
        }

        this.fn_getBizDt = function(trplO,teamO,trplR,teamR,dvy_pla_dt){
        	trace("배송요청일자 리드타임 적용 시작");
        	var params =   " trplO=" + trplO
        				 + " teamO=" + teamO
        				 + " trplR=" + trplR
        				 + " teamR=" + teamR
        				 + " dvy_pla_dt=" + dvy_pla_dt;
        	
        	trace("params : " + params);
        	var sSvcID        = "getBizDt";//통신아이디
        	var sURL          = "svc::/rest/scm/delivery/getBizDt";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_bizDtYn=ds_bizDtYn";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        

        /*Grid Init*/
        this.fn_init = function(){
        	this.ds_dataM.clearData(); //grid init
        	this.ds_dataD.clearData(); //grid init
        	this.btn_clear_onclick(); //wrs init
        }

        
        /* Search */
        this.fn_search = function(){
        	
        	this.fn_init();
        	
        	var van_seq = this.gfn_nullToEmpty(v_van_seq);
        	var odrpl_na_trpl_c = this.gfn_nullToEmpty(v_odrpl_na_trpl_c);
        	var odrpl_na_team_c = this.gfn_nullToEmpty(v_odrpl_na_team_c);
        	var odr_dt = this.gfn_nullToEmpty(v_odr_dt);
        	var odr_slpno = this.gfn_nullToEmpty(v_odr_slpno);
        	
        	
        	var params =  "van_seq=" + van_seq
        				 + " odrpl_na_trpl_c=" + odrpl_na_trpl_c
        				 + " odrpl_na_team_c=" + odrpl_na_team_c
        				 + " odr_dt=" + odr_dt
        				 + " odr_slpno=" + odr_slpno
        				 
        	
        	//trace("params : " + params);
        				
        	var sSvcID        = "getOrder";//통신아이디
        	var sURL          = "svc::/rest/scm/order/getOrder";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_dataM=ds_dataM ds_dataD=ds_dataD";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        
        /* user function */

        
        this.fn_rowUpdate = function(){
        	
        	for(var i = 0; i < dataDArr.length; i++){
        		if(wrsInfoArr[i] == "chk_del_yn"){
        			if(this.chk_del_yn.value != 'N'){
        				eval("this.ds_dataD.setColumn(this.ds_dataD.rowposition, '"+dataDArr[i]+"', '1')");
        			}else{
        				eval("this.ds_dataD.setColumn(this.ds_dataD.rowposition, '"+dataDArr[i]+"', '0')");
        			}
        		}else{
        			eval("this.ds_dataD.setColumn(this.ds_dataD.rowposition, '"+dataDArr[i]+"', this."+wrsInfoArr[i]+".value)");
        		}
        	}
        }

        this.fn_rowInsert = function(){
        	var row = this.ds_dataD.addRow();
        	this.ds_dataD.setColumn(row, "ODRPL_NA_TRPL_C", this.ds_dataM.getColumn(0,"ODRPL_NA_TRPL_C"));
        	this.ds_dataD.setColumn(row, "ODRPL_NA_TEAM_C", this.ds_dataM.getColumn(0,"ODRPL_NA_TEAM_C"));
        	this.ds_dataD.setColumn(row, "ODR_DT", this.ds_dataM.getColumn(0,"ODR_DT"));
        	this.ds_dataD.setColumn(row, "ODR_SLPNO", this.ds_dataM.getColumn(0,"ODR_SLPNO"));
        	
        	for(var i = 0; i < dataDArr.length; i++){
        		if(wrsInfoArr[i] != "chk_del_yn"){
        			eval("this.ds_dataD.setColumn("+ row +", '"+dataDArr[i]+"', this."+wrsInfoArr[i]+".value)");
        		}
        		
        	}
        	
        }

        this.fn_masterEnable = function(flag){
        	var idArr = new Array(
        								  'edt_dvyaa_c'
        								, 'cal_dvy_rqr_dt'
        								, 'chk_ddly_yn'
        								, 'rdo_dvy_vhc_dsc'
        								, 'edt_vhcno'
        								, 'chk_temp_yn'
        								, 'chk_grs_soju_yn'
        							);
        	for(i = 0; i < idArr.length; i++){
        		eval("this."+idArr[i] + ".set_enable("+flag+")");
        	}
        	this.grd_master.removeEventHandler();
        }

        this.fn_enable = function(flag){
        	this.fn_masterEnable(flag);
        	this.btn_rowUpdate.set_enable(flag);
        	this.btn_clear.set_enable(flag);
        	this.btn_save.set_enable(flag);
        	this.btn_pup_van_seq.set_enable(flag);
        	this.btn_popup01.set_enable(flag);
        	this.btn_popup00.set_enable(flag);
        }

        //권한사업장 활성여부
        this.fn_chkAuth = function(flag){
        	this.div_auth.set_enable(flag);
        }

        
        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {

        	if(ErrorCode < 0){
        		if(ErrorCode == -999) {
        			this.alert(ErrorMsg);
        		} else {
        			this.gfn_getMessage("alert", ErrorMsg);
        		}
        		return;
        	}else{
        		if(svcID == "getOrder"){
        			if(this.ds_dataM.rowcount == 0){
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			}else{
        				this.ds_dataM.setColumn(0, 'HDN_ODRPL_NA_TRPL_C', this.ds_dataM.getColumn(0, "ODRPL_NA_TRPL_C"));//이전 발주처값
        				this.ds_dataM.setColumn(0, 'HDN_ODRPL_NA_TEAM_C', this.ds_dataM.getColumn(0, "ODRPL_NA_TEAM_C"));//이전 발주처팀값
        				this.btn_popup05.set_enable(false);
        				/* SYSTEM CHECK */
        				if(this.gfn_isNull(this.ds_dataM.getColumn(0, "HDN_ODRPL_NA_TRPL_C")) || this.gfn_isNull(this.ds_dataM.getColumn(0, "HDN_ODRPL_NA_TEAM_C"))){
        					alert("수주정보의 발주처정보가 값이 존재하지 않습니다. 다시 조회바랍니다.");
        					this.reload();
        				}
        				
        				this.sta_grd_master_cnt.set_text(this.ds_dataD.rowcount);
        				var temp_yn = this.ds_dataM.getColumn(0, "TEMP_YN");//임시저장여부
        				if(temp_yn == 'N'){//완료
        					this.fn_enable(false);
        					this.ds_dataM.setColumn(0, "VAN_SEQ", this.ds_dataM.getColumn(0, "ODR_SLPNO"));					
        				}else{
        					this.fn_enable(true);
        				}
        				this.fn_chkAuth(false);
        			}
        		}
        		
        		if(svcID == "saveOrder"){
        			//this.gfn_getMessage("alert", "result.message.save.success");
        			this.alert(ErrorMsg);
        			if(!this.gfn_isNull(this.edt_van_seq.value)){//수정했을 경우
        				this.fn_search();
        				this.reload();
        			}else{
        				this.reload();
        			}
        		}
        		
        		if(svcID == "getBizDtYn"){
        					
        			if(ErrorCode == "99"){//저장 클릭한 경우
        				if(this.fn_validationCheck()){
        					this.fn_save();
        				}
        			}else{
        				this.fn_syncBizDtYn();//배송예정일자 변경시 조회
        			}
        		}
        		
        		if(svcID == "getBizDt"){
        			//발주서 조회 후 배송예정서 작성 시 리드타임 적용
        			trace("배송요청일자 리드타임 적용 완료");
        			this.cal_dvy_rqr_dt.set_value(this.ds_bizDtYn.getColumn(0, "BIZDT"));
        		}
        		
        		if(svcID == "getBuyer"){
        			var msg = "N:단가미등록(수) 상품입니다.\n"
        			+ " 해당 상품은 하나로마트분사 담당바이어에게 연락하시기 바랍니다.\n"
        			+ " 상품코드    : " + this.ds_buyer.getColumn(0, "NA_WRS_C") + "\n"
        			+ " 상품코드명 : " + this.ds_buyer.getColumn(0, "NA_WRS_N") + "\n";
        			alert(msg);
        		}
        	}
        }

        this.fn_syncBizDtYn = function(){
        		trace("bizdyYn : " + this.ds_bizDtYn.getColumn(0, "BIZDY_YN"));
        		if(this.ds_bizDtYn.getColumn(0, "BIZDY_YN") == "0"){
        			trace(this.ds_bizDtYn.saveXML());
        			bizdyYn = "0";
        			this.cal_dvy_rqr_dt.set_value(preValue);
        			var bizDt = this.ds_bizDtYn.getColumn(0, "BIZDT");
        			alert("해당 사업장의  배송가능일은 [ "+bizDt.substring(4, 6)+"/"+bizDt.substring(6, 8)+" ] 입니다.");
        		}else{
        			bizdyYn = "1";
        			trace("배송예정가능일자 가능");
        		}
        		
        		
        		if(bizdyYn == "1"){
        			var tempYn = this.gfn_nullToEmpty(this.ds_dataM.getColumn(0, "TEMP_YN"));
        			trace("TEMP_YN : " + tempYn);
        			if(((tempYn == '' || tempYn == "N") || tempYn == 'Y') && (postValue != preValue)){
        				if(this.gfn_isNull(this.edt_van_seq.value)){
        				
        					if(this.ds_dataD.rowcount > 0){
        						//최초작성
        						var isYn = application.confirm("신규 수주등록일 경우 배송요청일자가 변경되면 입력하신 상품은 삭제됩니다. 계속진행하시겠습니까?");
        						if(isYn){
        							this.ds_dataD.clearData();
        							this.fn_detail_clear();
        						}else{
        							trace("========= "+postValue);
        							trace("========= "+preValue);
        							this.cal_dvy_rqr_dt.set_value(preValue);
        						}
        					}
        					
        				}else{
        					//발주참조
        					odrpl_na_trpl_c = this.ds_dataM.getColumn(0, "ODRPL_NA_TRPL_C");
        					odrpl_na_team_c = this.ds_dataM.getColumn(0, "ODRPL_NA_TEAM_C");
        					odr_dt = this.ds_dataM.getColumn(0, "ODR_DT");
        					odr_slpno = this.ds_dataM.getColumn(0, "ODR_SLPNO");
        					van_seq = this.ds_dataM.getColumn(0, "VAN_SEQ");
        								
        					var params =   " odrpl_na_trpl_c=" + odrpl_na_trpl_c
        								 + " odrpl_na_team_c=" + odrpl_na_team_c
        								 + " odr_dt=" + odr_dt
        								 + " odr_slpno=" + odr_slpno
        								 + " van_seq=" + van_seq
        								 + " dvy_rqr_dt=" + postValue;
        					var isYn = application.confirm("배송요청일을 변경할 경우 단가정보를 리로드 합니다. 계속 진행하시겠습니까?");					
        					if(isYn){
        						var sSvcID        = "getOrderDetail";//통신아이디
        						var sURL          = "svc::/rest/scm/order/getOrderDetail";// 호출할 서버 페이지 주소
        						var sInDatasets   = "";//보내는데이터셋
        						var sOutDatasets  = "ds_dataD=ds_dataD";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        						var sArgument     = params;// 파라미터
        						var sCallbackFunc = "fn_callBack";//콜백
        						var sTranType     = "S"; // U:저장/삭제, S:조회
        						//API 호출
        						this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        					}else{
        						this.cal_dvy_rqr_dt.set_value(preValue);
        					}
        				}
        			}
        		}
        		this.sta_grd_master_cnt.set_text(this.ds_dataD.rowcount);
        }

        this.btn_init_onclick = function(obj,e)
        {
        	this.reload();
        }

        
        this.fParseFloat = function(txt){
            var tmpflt= 0.0;
            if ( !isNaN(txt) && typeof txt != 'string' ) return( parseFloat(txt,10) );
            if ( isNaN(txt) ) tmpflt = parseFloat(txt.delMask(),10);
            else tmpflt =  parseFloat(txt,10) ;
            if ( isNaN(tmpflt) ) return(0.0)
            else  return( tmpflt);
        }

        

        
        this.btn_rowUpdate_onclick = function(obj,e)
        {
        	
        	var odr_pcs	= this.fParseFloat(this.mae_odr_pcs.value);//수주단가
        	if(this.gfn_isNull(this.edt_wrsnm.value)){
        		this.alert("상품명을 선택해 주세요");
        		return false;
        	}
        	
        	if(this.gfn_isNull(this.mae_odr_qt.value)){
        		alert("수주량을 입력해 주세요");
        		return false;
        	}
        	
        	if(this.gfn_nullToEmpty(this.mae_odr_qt.value) == '0'){
        		alert("수주량을 입력해 주세요");
        		return false;
        	}
        	
        	var boxpe_aqz 	= this.gfn_nullToEmpty(this.mae_boxpe_aqz.value);
        	var odr_qt 		= this.gfn_nullToEmpty(this.mae_odr_qt.value);
        	
        	if ((this.gfn_trim(var_cser_na_usr_sys_kdc) =="52") || (this.gfn_trim(var_cser_na_usr_sys_kdc) =="54")) {	 
        		if((odr_qt % boxpe_aqz) != 0){
        			alert("박스입수의 정수배로 수주량을 입력하세요");
        			return false;
        		}
        	}
        	
        	if(this.fParseFloat(odr_pcs) <= 0){//단가가 없는 경우 바이어 호출
        		
        		var na_wrs_n		= "";
        		var na_wrs_c		= "";
        		var na_wrs_lclc 	= "";
        		var na_wrs_mclc 	= "";
        		var na_wrs_sclc 	= "";
        		var na_wrs_dtcf_c 	= "";
        			
        		var dsWrsCnt = 0;
        		for(var i=0; i < this.ds_dataD.rowcount; i++){
        			var ds_na_wrs_c = this.ds_dataD.getColumn(this.ds_dataD.rowposition, "NA_WRS_C");
        			if(this.edt_na_wrs_c.value == ds_na_wrs_c){
        				dsWrsCnt = dsWrsCnt + 1;
        			}
        		}
        		
        		if(dsWrsCnt > 0){
        			na_wrs_n		= this.ds_dataD.getColumn(this.ds_dataD.rowposition, "WRSNM");
        			na_wrs_c		= this.ds_dataD.getColumn(this.ds_dataD.rowposition, "NA_WRS_C");
        			na_wrs_lclc 	= this.ds_dataD.getColumn(this.ds_dataD.rowposition, "NA_WRS_LCLC");
        			na_wrs_mclc 	= this.ds_dataD.getColumn(this.ds_dataD.rowposition, "NA_WRS_MCLC");
        			na_wrs_sclc 	= this.ds_dataD.getColumn(this.ds_dataD.rowposition, "NA_WRS_SCLC");
        			na_wrs_dtcf_c 	= this.ds_dataD.getColumn(this.ds_dataD.rowposition, "NA_WRS_DTCF_C");
        		}else{
        			na_wrs_n = this.edt_wrsnm.value;
        			na_wrs_c = this.edt_na_wrs_c.value;
        			na_wrs_lclc 	= var_na_wrs_lclc;
        			na_wrs_mclc 	= var_na_wrs_mclc;
        			na_wrs_sclc 	= var_na_wrs_sclc;
        			na_wrs_dtcf_c 	= var_na_wrs_dtcf_c;
        		}
        		
        		
        		var params = "";
        		params = 	"na_wrs_lclc=" + na_wrs_lclc
        					 + " na_wrs_mclc=" + na_wrs_mclc
        					 + " na_wrs_sclc=" + na_wrs_sclc
        					 + " na_wrs_dtcf_c=" + na_wrs_dtcf_c
        					 + " na_wrs_n=" + na_wrs_n
        					 + " na_wrs_c=" + na_wrs_c;
        					 
        					
        		trace("getBuyer params : " + params);
        		var sSvcID        = "getBuyer";//통신아이디
        		var sURL          = "svc::/rest/scm/delivery/getBuyer";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_buyer=ds_buyer";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = params;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        		
        		return false;
        	}
        	
        	this.fn_isUpdate();
        	this.btn_clear_onclick();
            this.ds_dataD.set_enableevent(false);
            this.ds_dataD.set_rowposition(-1);
            this.ds_dataD.set_enableevent(true);
        }

        this.fn_isUpdate = function(){
        	
        	var duplicateRowCount = 0;
        	for(var i=0;i<this.grd_master.rowcount;i++){
        		var na_wrs_c = this.ds_dataD.getColumn(i,"NA_WRS_C");
        		if(na_wrs_c == this.edt_na_wrs_c.value){
        			++duplicateRowCount;
        			//var bok = application.confirm("[ "+this.edt_na_wrs_c.value+" / "+this.edt_wrsnm.value+" ] 는(은) 이미 등록된 자료입니다. 수정하시겠습니까 ?");
        			//if(bok == true){
        				this.fn_rowUpdate();
        			//}else{
        			//	return false;
        			//}
        		}
        	}
        	if(duplicateRowCount == 0){
        		this.fn_rowInsert();
        	}
        	
        	this.fn_sum();
        	this.sta_grd_master_cnt.set_text(this.ds_dataD.rowcount);
        }

        this.fn_sum = function(){
        	
        	var total_am = 0;
        	var total_vat = 0;
        	for(var i = 0; i < this.ds_dataD.rowcount; i++){
        		if(this.gfn_nullToEmpty(this.ds_dataD.getColumn(i, "DEL_YN")) != "1"){
        			total_am 	= total_am + this.gfn_getNum(this.gfn_toString(this.gfn_nullToEmpty(this.ds_dataD.getColumn(i, "ODR_AM"))));
        			total_vat 	= total_vat + this.gfn_getNum(this.gfn_toString(this.gfn_nullToEmpty(this.ds_dataD.getColumn(i, "ODR_VAT"))));
        		}
        		
        	}
        	this.ds_dataM.setColumn(0, "TOTAL_ODR_AM", total_am);
        	this.ds_dataM.setColumn(0, "TOTAL_ODR_VAT", total_vat);
        }

        this.grd_afterFnc = function(obj,e)
        {
        	if(e.cell != "14"){
        		this.edt_na_wrs_c.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"NA_WRS_C"));
        		this.edt_wrsnm.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"WRSNM"));
        		this.mae_boxpe_aqz.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"BOXPE_AQZ"));
        		this.edt_wrs_stdnm.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"WRS_STDNM"));
        		this.edt_na_wrs_unt_c.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"NA_WRS_UNT_C"));
        		this.mae_odr_qt.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"ODR_QT"));
        		this.mae_odr_pcs.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"ODR_PCS"));
        		this.mae_odr_vat.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"ODR_VAT"));
        		this.mae_odr_am.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"ODR_AM"));
        		this.mae_vcbt_upr.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"VCBT_UPR"));
        		this.mae_vcbt_am.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"VCBT_AM"));
        		this.mae_vcbx_upr.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"VCBX_UPR"));
        		this.mae_vcbx_am.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"VCBX_AM"));
        		this.edt_txt_dsc.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"TXT_DSC"));
        		this.edt_vcbt_na_wrs_c.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"VCBT_NA_WRS_C"));
        		this.edt_min_odr_qt.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"MIN_ODR_QT"));
        		this.edt_unt_c.set_value(this.ds_dataD.getColumn(this.ds_dataD.rowposition,"UNT_C"));
        	}else{
        		this.fn_sum();
        	} 
        	
        }

        

        this.btn_clear_onclick = function(obj,e)
        {
        	for(var i = 0; i < wrsInfoArr.length; i++){		
        		var obj = wrsInfoArr[i];
        		if(obj.indexOf('mae') > -1){
        			eval("this."+wrsInfoArr[i]+".set_value(0);");
        		}else if(obj.indexOf('edt') > -1){
        			eval("this."+wrsInfoArr[i]+".set_value('');");
        		}else if(obj.indexOf('chk') > -1){
        			eval("this."+wrsInfoArr[i]+".set_value('N');");
        		}
        	}
        }

        
        this.fn_validationCheck = function(){
        	
        	if(this.gfn_isNull(this.ds_dataM.getColumn(0, "NA_WRS_LCLC"))){
        		alert("상품대분류가 존재하지 않습니다. 발주처를 다시 검색해 주세요");
        		return false;
        	}
        	
        	if(this.gfn_isNull(this.ds_dataM.getColumn(0, "NA_WRS_MCLC"))){
        		alert("상품중분류가 존재하지 않습니다. 발주처를 다시 검색해 주세요");
        		return false;
        	}
        	
        	
        	if(this.gfn_isNull(this.edt_orpl_na_trpl_c.value)){
        		this.gfn_getMessage("alert","validation.message.needs.action","발주처", "입력");
        		return false;
        	}
        	
        	//if(this.gfn_isNull(this.edt_dvyaa_c.value)){
        	//	this.gfn_getMessage("alert","validation.message.needs.action","배송지", "선택");
        	//	return false;
        	//}
        	
        	if(this.gfn_isNull(this.cal_dvy_rqr_dt.value)){
        		this.gfn_getMessage("alert","validation.message.needs.action","배송요청일자", "입력");
        		return false;
        	}else{
        		var today = this.gfn_today('yyyyMMdd');
        		var dvy_rqr_dt = this.gfn_nullToEmpty(this.cal_dvy_rqr_dt.value);
        		
        		if(this.gfn_getDiffDay(today, dvy_rqr_dt) < 2){
        			alert("배송요청일자를 오늘 [ "+ today +" ] 이후로 입력해 주세요");
        			return false;
        		}
        	}
        		
        	
        	if(this.gfn_isNull(this.cbo_spy_tpc.value)){
        		this.gfn_getMessage("alert","validation.message.needs.action","공급유형", "선택");
        		return false;
        	}
        	
        	//if(this.gfn_isNull(this.edt_vhcno.value)){
        	//	this.gfn_getMessage("alert","validation.message.needs.action","차량번호", "입력");
        	//	return false;
        	//}
        		
        	
        	if(this.ds_dataD.rowcount == 0){
        		alert("상품정보를 입력해 주세요");
        		return false;
        	}
        	
        	var delItemCnt = 0;
        	for(var i = 0; i < this.ds_dataD.rowcount; i++){
        		if(this.ds_dataD.getColumn(i, "DEL_YN") == "1"){
        			++delItemCnt;
        		}
        	}
        	
        	if(this.ds_dataD.rowcount == delItemCnt){
        		alert("최소 1개 이상 상품을 등록하여야 합니다.");
        		return false;
        	}
        	
        	return true;
        }

        
        this.btn_save_onclick = function(obj,e)
        {
        	
        	 var dvy_rqr_dt = this.gfn_toString(this.cal_dvy_rqr_dt.value);
        	if(this.gfn_isNull(this.cal_dvy_rqr_dt.value)){
        		alert("배송요청일자를 입력해주세요");
        		return false;
        	}else{
        		var dvy_rqr_dt	= this.gfn_nullToEmpty(this.cal_dvy_rqr_dt.value);
        		this.fn_BizDtYn("2", "", dvy_rqr_dt);
        	}
        	
        }

        this.fn_save = function(){
        	var trplC = this.getTrplCode();//권한사업장
        	var params = "";
        	var dsParams = "";
        	
        	
        	
        	
        	var total_vcbt_am = 0;
        	var total_vcbx_am = 0;
        	for(var i = 0; i < this.ds_dataD.rowcount; i++){
        		total_vcbt_am = total_vcbt_am + this.ds_dataD.getColumn(i, "VCBT_AM");
        		total_vcbx_am = total_vcbx_am + this.ds_dataD.getColumn(i, "VCBX_AM");
        	}
        	
        	
        	this.ds_dataM.setColumn(0, "DVY_RQR_DT", this.cal_dvy_rqr_dt.value);
        	this.mae_total_vcbt_am.set_value(total_vcbt_am);
        	this.mae_total_vcbx_am.set_value(total_vcbx_am);
        	
        	params = "trplC="+trplC;
        	dsParams = "ds_dataM=ds_dataM:A ds_dataD=ds_dataD:A";
        	
        	trace("#################Save Params : " + params);
        	var sSvcID        = "saveOrder";//통신아이디
        	var sURL          = "svc::/rest/scm/order/saveOrder";// 호출할 서버 페이지 주소
        	var sInDatasets   = dsParams;//보내는데이터셋
        	var sOutDatasets  = "";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        
        this.mae_odr_qt_onkeyup = function(obj,e)
        {
        	var vcpt_upr = this.gfn_getNum(this.gfn_nullToEmpty(this.mae_vcbt_upr.value));
        	var vcpx_upr = this.gfn_getNum(this.gfn_nullToEmpty(this.mae_vcbx_upr.value));
        	var odr_qt = this.gfn_getNum(this.gfn_nullToEmpty(this.mae_odr_qt.value));
        	var odr_pcs = this.gfn_getNum(this.gfn_nullToEmpty(this.mae_odr_pcs.value));
        	this.mae_vcbt_am.set_value(vcpt_upr * odr_qt);
        	this.mae_vcbx_am.set_value(vcpx_upr * odr_qt);
        	this.mae_odr_am.set_value(odr_pcs * odr_qt);
        	this.detail_VatCalc();
        }

        //배송부가세 계산
        this.detail_VatCalc = function(){
        	var odr_am = this.gfn_nullToEmpty(this.mae_odr_qt.value) * this.gfn_nullToEmpty(this.mae_odr_pcs.value);
        	if (this.gfn_nullToEmpty(this.edt_txt_dsc.value) == '1' ) {
                var odr_vat = this.fCalVat02(odr_am, 10);
            }else{
        		var odr_vat = 0;
            }
            trace(">> 부가세 계산 : " + odr_vat);
            this.mae_odr_vat.set_value(odr_vat);
        }
        //배송부가세 계산
        this.fCalVat02 = function(odr_am,vatRat){
        	var lVat;
            var odr_am = this.fParseFloat(odr_am);
            vatRat = this.fParseFloat(vatRat);
            if ( vatRat ==0 || odr_am <= 10 ) return 0;
            lVat = Math.floor(odr_am/((100+vatRat)/vatRat));
            return lVat;
        }

        

        this.btn_popup00_onclick = function(obj,e)
        {	

        	
        	if(this.gfn_isNull(this.edt_orpl_na_trpl_c.value)){
        		alert("발주처를 먼저 선택해 주세요");
        		return false;
        	}
        	
        	if(this.gfn_isNull(this.cal_dvy_rqr_dt.value)){
        		alert("배송요청일을 선택해 주세요");
        		return false;
        	}else{
        		var trplC = this.getTrplCode();//권한사업장
        		var odrpl_na_trpl_c = this.gfn_nullToEmpty(this.edt_orpl_na_trpl_c.value);
        		var odrpl_na_team_c = this.gfn_nullToEmpty(this.ds_dataM.getColumn(0, "ODRPL_NA_TEAM_C"));
        		var var_cser_ctr_tpc = this.ds_dataM.getColumn(0, "CSER_CTR_TPC");
        		//상품명 팝업
        		var oArg = {form_id:"VAN_DS_SC_0300", odrpl_na_trpl_c:odrpl_na_trpl_c, ddly_yn:'0', prgr_c:var_prgr_c, odrpl_na_team_c:odrpl_na_team_c, chkDate:this.cal_dvy_rqr_dt.value, cser_ctr_tpc:var_cser_ctr_tpc, trplC:trplC};
        		var sOption = "autosize=true";
        		var sPopupCallBack = "fn_popupAfter";    
        		this.gfn_openPopup("wrsSearchPop","SCM.ORDER::VAN_DS_SC_0100_P02.xfdl",oArg,sOption,sPopupCallBack);
        	}
        }

        this.btn_popup05_onclick = function(obj,e)
        {
        	var trplC = this.getTrplCode();//권한사업장
        	var oArg = {form_id:"VAN_DS_SC_0100", trplC:trplC};
        	var sOption = "autosize=true,title=false";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("POPUP_TRNREL_ODRPL","POPUP::POPUP_TRNREL_ODRPL.xfdl",oArg,sOption,sPopupCallBack);
        	
        	/*
        	if(this.gfn_isNull(this.edt_orpl_na_trpl_c.value) == false){
        		if(application.confirm("발주처를 변경하시면 등록중인 데이터는 다시 입력하셔야 합니다.\n 계속 진행하시겠습니까?")){
        			var oArg = {form_id:"VAN_DS_SC_0100"};
        			var sOption = "autosize=true,title=false";
        			var sPopupCallBack = "fn_popupAfter";    
        			this.gfn_openPopup("POPUP_TRNREL_ODRPL","POPUP::POPUP_TRNREL_ODRPL.xfdl",oArg,sOption,sPopupCallBack);
        			this.reload();
        		}
        	}else{
        		var oArg = {form_id:"VAN_DS_SC_0100"};
        		var sOption = "autosize=true,title=false";
        		var sPopupCallBack = "fn_popupAfter";    
        		this.gfn_openPopup("POPUP_TRNREL_ODRPL","POPUP::POPUP_TRNREL_ODRPL.xfdl",oArg,sOption,sPopupCallBack);
        	}
        	*/
        }
        	

        this.btn_popup01_onclick = function(obj,e)
        {
        	if(this.gfn_isNull(this.edt_van_seq.value) && this.gfn_isNull(this.edt_orpl_na_trpl_c.value)){
        		alert("발주처를 먼저 선택해 주세요");
        		return false;
        	}
        	
        	var oArg = {form_id:"VAN_DS_SC_0300", odrpl_na_trpl_c:this.edt_orpl_na_trpl_c.value};
        	var sOption = "autosize=true,title=false";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("VAN_DS_SC_0100_P01","SCM.ORDER::VAN_DS_SC_0100_P01.xfdl",oArg,sOption,sPopupCallBack);
        	
        }

        this.btn_popup01_onclick = function(obj,e)
        {
        	if(this.gfn_isNull(this.edt_van_seq.value) && this.gfn_isNull(this.edt_orpl_na_trpl_c.value)){
        		alert("발주처를 먼저 선택해 주세요");
        		return false;
        	}
        	
         	
        	var oArg = {form_id:"VAN_DS_SC_0300", odrpl_na_trpl_c:this.edt_orpl_na_trpl_c.value};
        	var sOption = "autosize=true,title=false";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("VAN_DS_SC_0100_P01","SCM.ORDER::VAN_DS_SC_0100_P01.xfdl",oArg,sOption,sPopupCallBack);
        }

        

        this.grd_master_oncellclick = function(obj,e)
        {
        	this.grd_master.addEventHandler('oncellclick',this.delete_chk,this);
        }

        this.delete_chk = function(obj,e)
        {
        	if(e.cell == 14){
        		this.fn_sum();
        	}
        }

        var postValue;
        var preValue;
        this.cal_dvy_rqr_dt_onchanged = function(obj,e)
        {
        	if(this.gfn_isNull(this.edt_orpl_na_trpl_c.value)){
        		alert("발주처가 존재 하지 않습니다. ");
        		return false;
        	}
        	
        	
        	trace("post : " + e.postvalue);
        	trace("pre : " + e.prevalue);
        	postValue = e.postvalue;
        	preValue = e.prevalue;
        	this.fn_BizDtYn("1", preValue, postValue);
        }

        //휴일 체크
        this.fn_BizDtYn = function(chkPart,preDate,date){
        	var dvy_pla_dt 		= this.gfn_nullToEmpty(date);
        	var odrpl_na_trpl_c = this.gfn_nullToEmpty(this.edt_orpl_na_trpl_c.value);
        	var_chk_part = chkPart;
        	
        	
        	var trplO="";
        	var teamO="";
        	var trplR="";
        	var teamR="";
        	
        	if(
        			this.gfn_isNull(this.ds_dataM.getColumn(0, "ODRPL_NA_TRPL_C")) == false
        		&& 	this.gfn_isNull(this.ds_dataM.getColumn(0, "ODRPL_NA_TEAM_C")) == false
        		&& 	this.gfn_isNull(this.ds_dataM.getColumn(0, "RVOPL_NA_TRPL_C")) == false
        		&& 	this.gfn_isNull(this.ds_dataM.getColumn(0, "RVOPL_NA_TEAM_C")) == false
        	 ){
        		trplO = this.gfn_nullToEmpty(this.ds_dataM.getColumn(0, "ODRPL_NA_TRPL_C"));
        		teamO = this.gfn_nullToEmpty(this.ds_dataM.getColumn(0, "ODRPL_NA_TEAM_C"));
        		trplR = this.gfn_nullToEmpty(this.ds_dataM.getColumn(0, "RVOPL_NA_TRPL_C"));
        		teamR = this.gfn_nullToEmpty(this.ds_dataM.getColumn(0, "RVOPL_NA_TEAM_C"));
        	 }else{
        		trplO = this.gfn_nullToEmpty(this.edt_orpl_na_trpl_c.value);
        		teamO = this.gfn_nullToEmpty(this.edt_orpl_na_team_c.value);
        	 }
        	 
        	trace("trplO : " + trplO);
        	trace("teamO : " + teamO);
        	trace("trplR : " + trplR);
        	trace("teamR : " + teamR);
        	
        	var params = 	" dvy_pla_dt="+dvy_pla_dt 
        					+ " odrpl_na_trpl_c=" + odrpl_na_trpl_c 
        					+ " chkPart=" + chkPart
        					+ " trplO=" + trplO
        					+ " teamO=" + teamO
        					+ " trplR=" + trplR
        					+ " teamR=" + teamR;
        	trace("휴일 조회 : " + params);
        	
        	var sSvcID        = "getBizDtYn";//통신아이디
        	var sURL          = "svc::/rest/scm/delivery/getBizDtYn";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_bizDtYn=ds_bizDtYn";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.grd_master.addEventHandler("oncellclick", this.grd_master_oncellclick, this);
            this.btn_clear.addEventHandler("onclick", this.btn_clear_onclick, this);
            this.btn_rowUpdate.addEventHandler("onclick", this.btn_rowUpdate_onclick, this);
            this.btn_init.addEventHandler("onclick", this.btn_init_onclick, this);
            this.btn_pup_van_seq.addEventHandler("onclick", this.btn_pup_van_seq_onclick, this);
            this.btn_popup05.addEventHandler("onclick", this.btn_popup05_onclick, this);
            this.edt_orpl_na_team_c.addEventHandler("oneditclick", this.edt_orpl_na_team_c_oneditclick, this);
            this.cal_dvy_rqr_dt.addEventHandler("onchanged", this.cal_dvy_rqr_dt_onchanged, this);
            this.btn_popup00.addEventHandler("onclick", this.btn_popup00_onclick, this);
            this.mae_odr_qt.addEventHandler("onkeyup", this.mae_odr_qt_onkeyup, this);
            this.btn_popup01.addEventHandler("onclick", this.btn_popup01_onclick, this);
            this.edt_unt_c.addEventHandler("oneditclick", this.Edit00_oneditclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0100.xfdl");
        this.loadPreloadList();
       
    };
}
)();
