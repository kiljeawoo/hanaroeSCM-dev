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
                this.set_name("VAN_DS_SC_1330");
                this.set_titletext("거래관계 조회");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cser_ctr_tpc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_spy_tpc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_master_data", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CSER_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NA_TEAM_N\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_NA_TEAM_N\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_CTR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_CTR_TPNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPY_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"SPY_TPNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_LCLCNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_MCLCNM\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TEAM_N\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TR_TPNM\" type=\"STRING\" size=\"256\"/><Column id=\"BZ_METH_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BZ_METH_DSC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NA_USR_SYS_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NA_USR_SYS_KDC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NAAC_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NAAC_DSC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_NA_USR_SYS_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_NA_USR_SYS_KDC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_NAAC_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_NAAC_DSC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_ADJPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_ADJPL_NA_TRPL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_ADJPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_ADJPL_NA_TEAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_CTR_CHRRNM\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_CTR_CHRR_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_CTR_CHRR_MPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_ADJPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_ADJPL_NA_TRPL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_ADJPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_ADJPL_NA_TEAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_HOFF_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_HOFF_NA_TRPL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_BNK_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_BNK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_STL_ACNO\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_DPRNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_CTR_CHRRNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_CTR_CHRR_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_CTR_CHRR_MPNO\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_STOP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_CLO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_CLO_RSNC\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_CLO_RSNNM\" type=\"STRING\" size=\"256\"/><Column id=\"TR_STOP_RSNC\" type=\"STRING\" size=\"256\"/><Column id=\"TR_STOP_RSNNM\" type=\"STRING\" size=\"256\"/><Column id=\"PRGR_C\" type=\"STRING\" size=\"256\"/><Column id=\"PGNM\" type=\"STRING\" size=\"256\"/><Column id=\"ROTS_FLEX_PR_APL_Y\" type=\"STRING\" size=\"256\"/><Column id=\"NA_ODR_FBID_RSNC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_ODR_FBID_RSNNM\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_FBID_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_BUYER_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"NA_RVO_FBID_RSNC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_RVO_FBID_RSNNM\" type=\"STRING\" size=\"256\"/><Column id=\"RVO_FBID_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RVOPL_BUYER_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"LDTM_DDS\" type=\"STRING\" size=\"256\"/><Column id=\"RGD_AMN_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"RGD_AMN_DSNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_PMI_SBJ_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_PMI_SBJ_DSNM\" type=\"STRING\" size=\"256\"/><Column id=\"STL_FDT_BASCD\" type=\"STRING\" size=\"256\"/><Column id=\"STL_FDT_BASCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SSDYRT_BASCD\" type=\"STRING\" size=\"256\"/><Column id=\"SSDYRT_BASCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SSDYRT\" type=\"STRING\" size=\"256\"/><Column id=\"SSDY_BAS_AM\" type=\"STRING\" size=\"256\"/><Column id=\"DDLY_SSDYRT\" type=\"STRING\" size=\"256\"/><Column id=\"SSDY_PY_PTM_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"SSDY_PY_PTM_DSNM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CMENO\" type=\"STRING\" size=\"256\"/><Column id=\"BYNG_UPR_MOD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PY_FDTCN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_selectL", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_LCLFNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_selectM", this);
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_MCLFNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_ID_DSC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "0", "0", "397", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search00", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("2");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "121", "15", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("sta_00", "absolute", "15", "36", "91", "21", null, null, this.div_search);
            obj.set_taborder("32");
            obj.set_text("수요사업장");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_01", "absolute", "15", "10", "91", "21", null, null, this.div_search);
            obj.set_taborder("34");
            obj.set_text("조회구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_kind_chk00", "absolute", "106", "10", "228", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_kind_chk00_innerdataset = new Dataset("rdo_kind_chk00_innerdataset", this.div_search.rdo_kind_chk00);
            rdo_kind_chk00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1.공급자</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2.공급받는자</Col></Row></Rows>");
            obj.set_innerdataset(rdo_kind_chk00_innerdataset);
            obj.set_taborder("36");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("2");
            obj.set_direction("vertical");
            obj.set_index("1");
            obj = new Edit("edt_data00", "absolute", "106", "36", "100", "21", null, null, this.div_search);
            obj.set_taborder("41");
            obj.set_inputtype("number");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data01", "absolute", "209", "36", "131", "21", null, null, this.div_search);
            obj.set_taborder("42");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup00", "absolute", "343", "36", "21", "21", null, null, this.div_search);
            obj.set_taborder("43");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data02", "absolute", "367", "36", "55", "21", null, null, this.div_search);
            obj.set_taborder("47");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_comment00", "absolute", "343", "10", "383", "21", null, null, this.div_search);
            obj.set_taborder("48");
            obj.set_text("권한사업장 기준으로 공급받는자(수요자) 거래관계조회");
            obj.style.set_color("red");
            obj.style.set_font("9 arial");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_02", "absolute", "15", "62", "91", "21", null, null, this.div_search);
            obj.set_taborder("49");
            obj.set_text("계약유형");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_select_chk00", "absolute", "106", "62", "234", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("50");
            obj.set_innerdataset("@ds_cser_ctr_tpc");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_codecolumn("SIMP_C");
            obj = new Combo("cbo_select_chk01", "absolute", "543", "62", "234", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("51");
            obj.set_innerdataset("@ds_spy_tpc");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_codecolumn("SIMP_C");
            obj = new Static("sta_03", "absolute", "452", "62", "91", "21", null, null, this.div_search);
            obj.set_taborder("52");
            obj.set_text("공급유형");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_04", "absolute", "15", "88", "91", "21", null, null, this.div_search);
            obj.set_taborder("54");
            obj.set_text("상품대분류");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_select_chk03", "absolute", "543", "88", "234", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("55");
            obj.set_codecolumn("NA_WRS_MCLC");
            obj.set_datacolumn("WRS_MCLFNM");
            obj.set_innerdataset("@ds_selectM");
            obj.set_value("000");
            obj.set_text("전체선택");
            obj = new Static("sta_05", "absolute", "452", "88", "91", "21", null, null, this.div_search);
            obj.set_taborder("56");
            obj.set_text("상품중분류");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_comment01", "absolute", "343", "10", "383", "21", null, null, this.div_search);
            obj.set_taborder("57");
            obj.style.set_color("red");
            obj.style.set_font("9 arial");
            obj.set_text("권한사업장 기준으로 공급자 거래관계 조회");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "422", "35", "30", "67", null, null, this.div_search);
            obj.set_taborder("58");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "224", "109", "103", "10", null, null, this.div_search);
            obj.set_taborder("59");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "224", "83", "103", "5", null, null, this.div_search);
            obj.set_taborder("60");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "224", "57", "103", "5", null, null, this.div_search);
            obj.set_taborder("61");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_06", "absolute", "15", "36", "91", "21", null, null, this.div_search);
            obj.set_taborder("62");
            obj.set_text("공급사업장");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_select_chk02", "absolute", "106", "88", "234", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("53");
            obj.set_datacolumn("WRS_LCLFNM");
            obj.set_codecolumn("NA_WRS_LCLC");
            obj.set_innerdataset("@ds_selectL");
            obj = new Edit("edt_data03", "absolute", "367", "36", "55", "21", null, null, this.div_search);
            obj.set_taborder("63");
            obj.set_enable("false");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "149", null, null, "15", "0", this);
            obj.set_taborder("4");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_main00", "absolute", "0", "40", null, null, "0", "0", this.div_list);
            obj.set_taborder("13");
            obj.set_binddataset("ds_master_data");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"140\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" colspan=\"4\" text=\"수요처\"/><Cell col=\"5\" colspan=\"4\" text=\"공급처\"/><Cell col=\"9\" colspan=\"2\" text=\"계약유형\"/><Cell col=\"11\" colspan=\"2\" text=\"공급유형\"/><Cell col=\"13\" colspan=\"2\" text=\"상품대분류\"/><Cell col=\"15\" colspan=\"2\" text=\"상품중분류\"/><Cell col=\"17\" colspan=\"4\" text=\"주관처\"/><Cell col=\"21\" colspan=\"2\" text=\"주관유형\"/><Cell col=\"23\" colspan=\"2\" text=\"가격군\"/><Cell row=\"1\" col=\"1\" text=\"거래처코드\"/><Cell row=\"1\" col=\"2\" text=\"거래처명\"/><Cell row=\"1\" col=\"3\" text=\"팀\"/><Cell row=\"1\" col=\"4\" text=\"팀명\"/><Cell row=\"1\" col=\"5\" text=\"거래처코드\"/><Cell row=\"1\" col=\"6\" text=\"거래처명\"/><Cell row=\"1\" col=\"7\" text=\"팀\"/><Cell row=\"1\" col=\"8\" text=\"팀명\"/><Cell row=\"1\" col=\"9\" text=\"코드\"/><Cell row=\"1\" col=\"10\" text=\"명칭\"/><Cell row=\"1\" col=\"11\" text=\"코드\"/><Cell row=\"1\" col=\"12\" text=\"명칭\"/><Cell row=\"1\" col=\"13\" text=\"코드\"/><Cell row=\"1\" col=\"14\" text=\"명칭\"/><Cell row=\"1\" col=\"15\" text=\"코드\"/><Cell row=\"1\" col=\"16\" text=\"명칭\"/><Cell row=\"1\" col=\"17\" text=\"거래처코드\"/><Cell row=\"1\" col=\"18\" text=\"거래처명\"/><Cell row=\"1\" col=\"19\" text=\"팀\"/><Cell row=\"1\" col=\"20\" text=\"팀명\"/><Cell row=\"1\" col=\"21\" text=\"코드\"/><Cell row=\"1\" col=\"22\" text=\"명칭\"/><Cell row=\"1\" col=\"23\" text=\"코드\"/><Cell row=\"1\" col=\"24\" text=\"명칭\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CSER_NA_TRPL_C\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:CSER_NA_TRPL_N\"/><Cell col=\"3\" text=\"bind:CSER_NA_TEAM_C\"/><Cell col=\"4\" text=\"bind:CSER_NA_TEAM_N\"/><Cell col=\"5\" text=\"bind:SPLR_NA_TRPL_C\"/><Cell col=\"6\" style=\"align:left;\" text=\"bind:SPLR_NA_TRPL_N\"/><Cell col=\"7\" text=\"bind:SPLR_NA_TEAM_C\"/><Cell col=\"8\" text=\"bind:SPLR_NA_TEAM_N\"/><Cell col=\"9\" text=\"bind:CSER_CTR_TPC\"/><Cell col=\"10\" text=\"bind:CSER_CTR_TPNM\"/><Cell col=\"11\" text=\"bind:SPY_TPC\"/><Cell col=\"12\" text=\"bind:SPY_TPNM\"/><Cell col=\"13\" text=\"bind:NA_WRS_LCLC\"/><Cell col=\"14\" text=\"bind:WRS_LCLCNM\"/><Cell col=\"15\" text=\"bind:NA_WRS_MCLC\"/><Cell col=\"16\" text=\"bind:WRS_MCLCNM\"/><Cell col=\"17\" text=\"bind:MNGT_NA_TRPL_C\"/><Cell col=\"18\" style=\"align:left;\" text=\"bind:MNGT_NA_TRPL_N\"/><Cell col=\"19\" text=\"bind:MNGT_NA_TEAM_C\"/><Cell col=\"20\" text=\"bind:MNGT_NA_TEAM_N\"/><Cell col=\"21\" text=\"bind:MNGT_NA_TR_TPC\"/><Cell col=\"22\" text=\"bind:MNGT_NA_TR_TPNM\"/><Cell col=\"23\" text=\"bind:PRGR_C\"/><Cell col=\"24\" text=\"bind:PGNM\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_toggle00", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new WebBrowser("web_downExcelM", "absolute", "78.3%", "10", null, "20", "16.88%", null, this.div_list);
            obj.set_taborder("15");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);

            obj = new Combo("cbo_team_c", "absolute", null, "0", "77", "21", "174", null, this);
            this.addChild(obj.name, obj);
            var cbo_team_c_innerdataset = new Dataset("cbo_team_c_innerdataset", this.cbo_team_c);
            cbo_team_c_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">00</Col><Col id=\"datacolumn\">팀없음</Col></Row></Rows>");
            obj.set_innerdataset(cbo_team_c_innerdataset);
            obj.set_taborder("6");
            obj.set_text("팀없음");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("00");
            obj.set_visible("true");

            obj = new Button("btn_clear00", "absolute", null, "0", "54", "21", "118", null, this);
            obj.set_taborder("7");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "240", null, this);
            obj.set_taborder("5");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 121, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_text("Div02");
            		p.set_scrollbars("none");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1330");
            		p.set_titletext("거래관계 조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
            this._addPreloadList("fdl", "common::AuthorityWorkplace.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1330.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1330.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e) 
        {
        	this.gfn_setInitForm(obj, e); //공통
        };

        this.fn_afterFormOnload = function() //onload
        {
        	var param = [
         		{code:"CSER_CTR_TPC", dsName:"ds_cser_ctr_tpc", selecttype:"A"}, 	// 0.계약유형
         		{code:"SPY_TPC", dsName:"ds_spy_tpc", selecttype:"A"}				// 1.공급유형
         		];
        	this.gfn_setCommonCode(param);
        	
        	this.div_search.cbo_select_chk00.set_value('all');
        	this.div_search.cbo_select_chk01.set_value('all');
        	this.div_list.grd_main00.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	
        	this.div_list.grd_main00.addEventHandler("oncellclick", this.grd_afterFnc, this);
        	this.div_auth.chk_all.set_readonly(true);
        	this.ds_selectM.addRow();
        	this.ds_selectM.setColumn(0,"NA_WRS_MCLC","000");
        	this.ds_selectM.setColumn(0,"WRS_MCLFNM","전체선택");
        	this.div_search.cbo_select_chk03.set_index(0);
        	this.comboWRS("L", "", "", "");
        }

        //대분류 변경 시
        this.div_search_cbo_select_chk02_onitemchanged = function(obj,e)
        {
        	var lclcindex = this.div_search.cbo_select_chk02.index;
        	var NA_WRS_LCLC = this.ds_selectL.getColumn(lclcindex,"NA_WRS_LCLC");
        	this.comboWRS("M", NA_WRS_LCLC, "", "");
        }

        
        //초기에 대분류 코드 찾기
        this.comboWRS = function(level,NA_WRS_LCLC,NA_WRS_MCLC,NA_WRS_SCLC)
        {
        	var param = "searchMode=select"+
                				" level="+level+
                				" NA_WRS_LCLC="+NA_WRS_LCLC+
        						" NA_WRS_MCLC="+NA_WRS_MCLC+
        						" NA_WRS_SCLC="+NA_WRS_SCLC;
        	
        	var sSvcID	= "selectWRSPopUp_selectL";
        	if(level == "M") {
        		sSvcID  = "selectWRSPopUp_selectM";
        	}
        	var sURL          = "svc::rest/popup/selectWRSPopUp";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_selectL=DATASET";
        	if(level == "M") {
        		sOutDatasets  = "ds_selectM=DATASET";
        	}
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
            this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        //조회 버튼 클릭
        this.btn_search00_onclick = function(obj,e)
        {
        	
        	var params= "rdochoose="+this.div_search.rdo_kind_chk00.value			// 조회구분
        				+" TRPL_C="+this.getTrplCode()								// 수요사업장
        				+" inputTRPL_C="+this.gfn_nullToEmpty(this.div_search.edt_data00.value)	// 입력사업장
        				+" inputTEAM="+this.gfn_nullToEmpty(this.div_search.edt_data03.value)	// 입력사업장 (팀코드)
        				+" combochk1="+this.div_search.cbo_select_chk00.value		// 계약유형
        				+" combochk2="+this.div_search.cbo_select_chk01.value		// 공급유형
        				+" combochk3="+this.div_search.cbo_select_chk02.value		// 상품대분류
        				+" combochk4="+this.div_search.cbo_select_chk03.value;		// 상품중분류
        	
        	var sSvcID        = "p_search";//통신아이디
        	var sURL          = "svc::rest/pds/partner/Trade/retrieveTrades";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_master_data=ds_master_data";
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType 	  = "U"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        this.fn_callback = function(svcID,nCD,sMSG)
        {
        	if(nCD < 0)
        	{
        		this.gfn_getMessage("alert", sMSG);
        		return;
        	}else{
        		if(svcID == "p_search"){
        			if(this.div_list.grd_main00.rowcount < 1){
        				this.gfn_getMessage('alert','result.message.search.no.exist.data');
        			}
        		}
        		if(svcID == "selectWRSPopUp_selectL"){
        			var ds = this.ds_selectL;
        			var nRow = ds.addRow();
        			ds.setColumn(nRow,"WRS_LCLFNM","전체선택");
        			ds.setColumn(nRow,"NA_WRS_LCLC","000");
        			this.div_search.cbo_select_chk02.set_index(nRow);
        		}
        		if(svcID == "selectWRSPopUp_selectM"){
         			var ds = this.ds_selectM;
         			if(ds.rowcount == 0){
        				var nRow = ds.addRow();
        				ds.setColumn(nRow,"WRS_MCLFNM","전체선택");
        				ds.setColumn(nRow,"NA_WRS_MCLC","000");
        				this.div_search.cbo_select_chk03.set_index(nRow);
        				return;
         			}
         			for(var b=0; b<ds.rowcount; b++){
        				if(ds.getColumn(b,"NA_WRS_MCLC") == "000"){
        					ds.setColumn(b,"WRS_MCLFNM","전체선택");
        					this.div_search.cbo_select_chk03.set_index(b);
        				}
         			}
        		}
        	}
        }

        
        //조회구분 라디오버튼 클릭 시 변경
        this.div_search_rdo_kind_chk00_onitemchanged = function(obj,e)
        {
        	
        	var rdochk = this.div_search.rdo_kind_chk00.value;
        	
        	if(rdochk == 1){
        		this.div_search.sta_comment00.set_visible(false);
        		this.div_search.sta_comment01.set_visible(true);
        		this.div_search.sta_00.set_visible(false);
        		this.div_search.sta_06.set_visible(true);
        	}else if(rdochk == 2){
        		this.div_search.sta_comment00.set_visible(true);
        		this.div_search.sta_comment01.set_visible(false);
        		this.div_search.sta_00.set_visible(true);
        		this.div_search.sta_06.set_visible(false);
        	}
        }

        //그리드 클릭 시 상세 조회 데이터
        this.grd_afterFnc = function()
        {
        	var oArg = {paramMode:"A", dsArg:this.ds_master_data};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("detail_page","PDS.PARTNER::VAN_DS_SC_1331.xfdl",oArg,sOption,sPopupCallBack);	    
        }

        //거래처 팝업 조회 
        this.div_search_btn_popup00_onclick = function(params)
        {
        	var code = this.div_search.edt_data00.value;
        	var textname = this.div_search.edt_data01.value;
        	var param = {
        				autoType:params,
        				searchCode:code,
        				searchText:textname
        	};
        	if(typeof params == "boolean"){
        		if(!this.searPopValue(param)){return};
        	}
        	var oArg = {paramMode:"U" , sepVal:"1330", autoPop:param};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("src_rvopl","PDS.PARTNER::VAN_DS_SC_1302.xfdl",oArg,sOption,sPopupCallBack);	  
        }

        //팝업 닫은 후 실행
        this.fn_popupAfter = function(strId,strVal)
        {
        	if(strVal != undefined){
        		if(strId == "src_rvopl"){
        			this.div_search.edt_data00.set_value(strVal.split(",")[0]); 	//팝업 창 데이터 선택(사업장코드)
        			this.div_search.edt_data01.set_value(strVal.split(",")[3]);		//팝업 창 데이터 선택(사업장명)
        			this.div_search.edt_data02.set_value(strVal.split(",")[10]);	//팀명
        			this.div_search.edt_data03.set_value(strVal.split(",")[9]);		//팀코드
        		}
        		if(strId == "detail_page"){
        			
        		}
        	}
        }
        //초기화
        this.btn_clear00_onclick = function(obj,e)
        {
        	this.reload();
        }

        //엑셀 다운로드
        this.btn_excel_onclick = function(obj,e)
        {
        	var params= "rdochoose="+this.div_search.rdo_kind_chk00.value			// 조회구분
        				+"&TRPL_C="+this.getTrplCode()								// 수요사업장
        				+"&inputTRPL_C="+this.gfn_nullToEmpty(this.div_search.edt_data00.value)	// 입력사업장
        				+"&inputTEAM="+this.gfn_nullToEmpty(this.div_search.edt_data03.value)	// 입력사업장 (팀코드)
        				+"&combochk1="+this.div_search.cbo_select_chk00.value		// 계약유형
        				+"&combochk2="+this.div_search.cbo_select_chk01.value		// 공급유형
        				+"&combochk3="+this.div_search.cbo_select_chk02.value		// 상품대분류
        				+"&combochk4="+this.div_search.cbo_select_chk03.value;		// 상품중분류
        	
        	//this.div_list.web_downExcelM.set_url(application.gv_server_url+"rest/excel/downloadExcelTrades?"+params);
        	excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelTrades?"+params, this);
        }

        this.div_list_btn_toggle00_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        
        this.div_search_edt_data00_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.div_search_btn_popup00_onclick(true);
        	}
        }

        this.div_search_edt_data01_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.div_search_btn_popup00_onclick(true);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search00.addEventHandler("onclick", this.btn_search00_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.div_search.rdo_kind_chk00.addEventHandler("onitemchanged", this.div_search_rdo_kind_chk00_onitemchanged, this);
            this.div_search.edt_data00.addEventHandler("onkeydown", this.div_search_edt_data00_onkeydown, this);
            this.div_search.edt_data01.addEventHandler("onkeydown", this.div_search_edt_data01_onkeydown, this);
            this.div_search.btn_popup00.addEventHandler("onclick", this.div_search_btn_popup00_onclick, this);
            this.div_search.cbo_select_chk02.addEventHandler("onitemchanged", this.div_search_cbo_select_chk02_onitemchanged, this);
            this.div_list.btn_toggle00.addEventHandler("onclick", this.div_list_btn_toggle00_onclick, this);
            this.btn_clear00.addEventHandler("onclick", this.btn_clear00_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1330.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
