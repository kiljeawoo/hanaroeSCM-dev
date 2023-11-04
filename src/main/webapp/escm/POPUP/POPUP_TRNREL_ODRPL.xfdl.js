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
                this.set_name("popup01");
                this.set_titletext("거래관계 정보조회");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,740,452);
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
            obj._setContents("<ColumnInfo><Column id=\"CSER_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NA_TEAM_N\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"DONGUP\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_CTR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_CTR_TPC_N\" type=\"STRING\" size=\"256\"/><Column id=\"SPY_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"SPY_TPC_N\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_TR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TR_TPC_N\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NA_USR_SYS_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_NA_USR_SYS_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_STOP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_CLO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"NA_RGN_N\" type=\"STRING\" size=\"256\"/><Column id=\"PRGR_C\" type=\"STRING\" size=\"256\"/><Column id=\"LDTM_DDS\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_TR_REL_AMNNO\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_TR_REL_AMNNO\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_ADJPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_ADJPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"ACTL_SPYPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"PGNM\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_USR_SYS_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"ROTS_FLEX_PR_APL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BYNG_UPR_MOD_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cser_ctr_tpc", this);
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

            obj = new Dataset("ds_rgn_c00", this);
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

            obj = new Dataset("ds_rgn_c01", this);
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

            obj = new Dataset("ds_wrs_clfL", this);
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

            obj = new Dataset("ds_wrs_clfM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_MCLFNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dataTrpl", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CSER_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NA_TEAM_N\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"DONGUP\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_CTR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_CTR_TPC_N\" type=\"STRING\" size=\"256\"/><Column id=\"SPY_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"SPY_TPC_N\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_TR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TR_TPC_N\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NA_USR_SYS_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_NA_USR_SYS_KDC\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_STOP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_CLO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"NA_RGN_N\" type=\"STRING\" size=\"256\"/><Column id=\"PRGR_C\" type=\"STRING\" size=\"256\"/><Column id=\"LDTM_DDS\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_TR_REL_AMNNO\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_TR_REL_AMNNO\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_ADJPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_ADJPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Button("Button07", "absolute", null, "47", "53", "21", "77", null, this);
            obj.set_taborder("0");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "47", "58", "21", "17", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_master", "absolute", "17", "206", null, null, "17", "56", this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_dataM");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"120\"/><Column size=\"400\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"수요자코드\"/><Cell col=\"2\" text=\"수요자명\"/><Cell col=\"3\" text=\"계약유형\"/><Cell col=\"4\" text=\"공급처코드\"/><Cell col=\"5\" text=\"공급자명\"/><Cell col=\"6\" text=\"팀\"/><Cell col=\"7\" text=\"동이상주소\"/><Cell col=\"8\" text=\"팀\"/><Cell col=\"9\" text=\"공급유형\"/><Cell col=\"10\" text=\"주관사업장\"/><Cell col=\"11\" text=\"주관사업장명\"/><Cell col=\"12\" text=\"주관사업장팀\"/><Cell col=\"13\" text=\"주관사업유형\"/><Cell col=\"14\" text=\"대분류코드\"/><Cell col=\"15\" text=\"중분류코드\"/><Cell col=\"16\" text=\"수요자시스템\"/><Cell col=\"17\" text=\"공급자시스템\"/><Cell col=\"18\" text=\"계약시작일자\"/><Cell col=\"19\" text=\"계약종료일자\"/><Cell col=\"20\" text=\"계약중지일자\"/><Cell col=\"21\" text=\"계약해지일자\"/><Cell col=\"22\" text=\"지역코드\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" text=\"bind:CSER_NA_TRPL_C\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:CSER_NA_TRPL_N\"/><Cell col=\"3\" style=\"color:EXPR(CSER_CTR_TPC_N=='자체계약'?'':'red');color2:EXPR(CSER_CTR_TPC_N=='자체계약'?'':'red');selectcolor:EXPR(CSER_CTR_TPC_N=='자체계약'?'':'red');\" text=\"bind:CSER_CTR_TPC_N\"/><Cell col=\"4\" text=\"bind:SPLR_NA_TRPL_C\"/><Cell col=\"5\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:SPLR_NA_TRPL_N\"/><Cell col=\"6\" text=\"bind:SPLR_NA_TEAM_C\"/><Cell col=\"7\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:DONGUP\"/><Cell col=\"8\" text=\"bind:CSER_NA_TEAM_N\"/><Cell col=\"9\" text=\"bind:SPY_TPC_N\"/><Cell col=\"10\" text=\"bind:MNGT_NA_TRPL_C\"/><Cell col=\"11\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:MNGT_NA_TRPL_N\"/><Cell col=\"12\" text=\"bind:MNGT_NA_TEAM_C\"/><Cell col=\"13\" text=\"bind:MNGT_NA_TR_TPC_N\"/><Cell col=\"14\" text=\"bind:NA_WRS_LCLC\"/><Cell col=\"15\" text=\"bind:NA_WRS_MCLC\"/><Cell col=\"16\" text=\"bind:CSER_NA_USR_SYS_KDC\"/><Cell col=\"17\" text=\"bind:SPLR_NA_USR_SYS_KDC\"/><Cell col=\"18\" displaytype=\"date\" text=\"bind:CTR_ST_DT\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"19\" displaytype=\"date\" text=\"bind:CTR_ED_DT\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"20\" displaytype=\"date\" text=\"bind:CTR_STOP_DT\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"21\" displaytype=\"date\" text=\"bind:CTR_CLO_DT\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"22\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:NA_RGN_N\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button65", "absolute", "304", null, "54", "29", null, "17", this);
            obj.set_taborder("6");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancle", "absolute", "360", null, "54", "29", null, "17", this);
            obj.set_taborder("7");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Popup");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "74", "17", "73", null, null, this);
            obj.set_taborder("8");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "363", "435", "91", "17", null, null, this);
            obj.set_taborder("10");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "363", "396", "91", "10", null, null, this);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "242", "32", "30", "15", null, null, this);
            obj.set_taborder("13");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "363", "192", "76", "15", null, null, this);
            obj.set_taborder("14");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "699", "0", null, "32", "4", null, this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "243", "106", "91", "5", null, null, this);
            obj.set_taborder("38");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("39");
            obj.set_text("거래관계 정보조회");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "17", "76", null, "116", "17", null, this);
            obj.set_taborder("41");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "157", "0", "91", "10", null, null, this.div_search);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "-1", "31", "500", "5", null, null, this.div_search);
            obj.set_taborder("12");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "165", "104", "91", "10", null, null, this.div_search);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "2", "10", "132", "21", null, null, this.div_search);
            obj.set_taborder("14");
            obj.set_text("거래처검색조건");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_odrpl_type", "absolute", "134", "10", "158", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_odrpl_type_innerdataset = new Dataset("cbo_odrpl_type_innerdataset", this.div_search.cbo_odrpl_type);
            cbo_odrpl_type_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">code</Col><Col id=\"datacolumn\">거래처코드</Col></Row><Row><Col id=\"codecolumn\">name</Col><Col id=\"datacolumn\">거래처명</Col></Row></Rows>");
            obj.set_innerdataset(cbo_odrpl_type_innerdataset);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("data");
            obj.set_text("거래처명");
            obj.set_index("1");
            obj = new Static("Static01", "absolute", "2", "36", "132", "21", null, null, this.div_search);
            obj.set_taborder("16");
            obj.set_text("수요자계약유형");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_cser_ctr_tpc_type", "absolute", "134", "36", "158", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_cser_ctr_tpc_type_innerdataset = new Dataset("cbo_cser_ctr_tpc_type_innerdataset", this.div_search.cbo_cser_ctr_tpc_type);
            cbo_cser_ctr_tpc_type_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">00</Col><Col id=\"datacolumn\">-전체-</Col></Row><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">매취</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">수탁</Col></Row></Rows>");
            obj.set_innerdataset(cbo_cser_ctr_tpc_type_innerdataset);
            obj.set_taborder("17");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("00");
            obj.set_text("전체");
            obj.set_index("0");
            obj = new Static("Static02", "absolute", "7", "57", "500", "5", null, null, this.div_search);
            obj.set_taborder("18");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_mngt_na_tr_tpc_type", "absolute", "409", "36", "158", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_mngt_na_tr_tpc_type_innerdataset = new Dataset("cbo_mngt_na_tr_tpc_type_innerdataset", this.div_search.cbo_mngt_na_tr_tpc_type);
            cbo_mngt_na_tr_tpc_type_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">-전체-</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">해당없음</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">매취</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">수탁</Col></Row></Rows>");
            obj.set_innerdataset(cbo_mngt_na_tr_tpc_type_innerdataset);
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_text("-전체-");
            obj.set_index("0");
            obj = new Static("Static03", "absolute", "322", "36", "108", "21", null, null, this.div_search);
            obj.set_taborder("20");
            obj.set_text("주관거래유형");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_spy_tpc_type", "absolute", "134", "88", "158", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_spy_tpc_type_innerdataset = new Dataset("cbo_spy_tpc_type_innerdataset", this.div_search.cbo_spy_tpc_type);
            cbo_spy_tpc_type_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">00</Col><Col id=\"datacolumn\">-전체-</Col></Row><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">매취</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">수탁</Col></Row></Rows>");
            obj.set_innerdataset(cbo_spy_tpc_type_innerdataset);
            obj.set_taborder("21");
            obj.set_value("00");
            obj.set_text("전체");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj = new Static("Static04", "absolute", "3", "88", "132", "21", null, null, this.div_search);
            obj.set_taborder("22");
            obj.set_text("공급유형코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_wrs_lclc", "absolute", "409", "62", "158", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("23");
            obj.set_codecolumn("NA_WRS_LCLC");
            obj.set_datacolumn("WRS_LCLFNM");
            obj.set_innerdataset("@ds_wrs_clfL");
            obj = new Static("Static07", "absolute", "322", "62", "87", "21", null, null, this.div_search);
            obj.set_taborder("24");
            obj.set_text("대분류");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "3", "62", "132", "21", null, null, this.div_search);
            obj.set_taborder("25");
            obj.set_text("지역코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_wmc_loc_rgn_dsc", "absolute", "134", "62", "72", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("26");
            obj.set_innerdataset("ds_rgn_c00");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_index("-1");
            obj = new Combo("cbo_ht_lov_rgn_c", "absolute", "207", "62", "85", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("27");
            obj.set_innerdataset("ds_rgn_c01");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj = new Edit("edt_odrpl", "absolute", "294", "10", "152", "21", null, null, this.div_search);
            obj.set_taborder("28");
            obj.set_cssclass("WF_Essential");
            obj.set_imemode("hangul");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup05", "absolute", "447", "10", "21", "21", null, null, this.div_search);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "15", "83", "500", "5", null, null, this.div_search);
            obj.set_taborder("31");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "322", "88", "79", "21", null, null, this.div_search);
            obj.set_taborder("32");
            obj.set_text("중분류");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_wrs_mclc", "absolute", "409", "88", "158", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("33");
            obj.set_codecolumn("NA_WRS_MCLC");
            obj.set_datacolumn("WRS_MCLFNM");
            obj.set_value("00");
            obj.set_text("-전체-");
            obj.set_innerdataset("@ds_wrs_clfM");
            obj.set_index("0");

            obj = new Static("Static07", "absolute", "579", "68", "91", "8", null, null, this);
            obj.set_taborder("42");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "310", "115", "30", "15", null, null, this);
            obj.set_taborder("43");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "14", "51", "250", "21", null, null, this);
            obj.set_taborder("44");
            obj.set_text("*사업자번호로 검색시 팝업 버튼을 클릭하세요");
            obj.style.set_color("red");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 116, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("41");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 740, 452, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("거래관계 정보조회");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("POPUP_TRNREL_ODRPL.xfdl", "lib::comLib.xjs");
        this.registerScript("POPUP_TRNREL_ODRPL.xfdl", function() {
        //include "lib::comLib.xjs";
        /*##################################################################################
         화면ID  	: POP_TRNEL_ODRPL
         화면명	: 거래관계 정보조회
         작성자 	: swha
         작성일자 : 2015.08.26
        ####################################################################################*/
        /*
        	Option
        */
        var idx;//거래처코드, 명 구분 코드
        var form_id;
        var searchTxt;
        var trpl;
        var auto = 0;
        var DSTR_TER_YN;//신선여부

        this.form_onload = function(obj,e)
        {
        	this.grd_master.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        	this.gfn_setInitForm(obj, e); //공통
        	var param = [
         		{code:"RGN_C$"+encodeURIComponent("substr(simp_c,3,2) = '00'"),   dsName:"ds_rgn_c00",   selecttype:"A"}   //지역코드00
            ];
        	this.gfn_setCommonCode(param);

        	form_id = this.getOwnerFrame().form_id;

        	if (!this.gfn_isNull(this.getOwnerFrame().idx)) {
        		idx = this.getOwnerFrame().idx;
        	} else {
        		idx = 0;
        	}
        	if (!this.gfn_isNull(this.getOwnerFrame().tc)) {//직송일경우
        		searchTxt = this.getOwnerFrame().tc;
        	} else if (!this.gfn_isNull(this.getOwnerFrame().trplO)) {//일반일 경우
        		searchTxt = this.getOwnerFrame().trplO;
        	} else {
        		searchTxt = this.getOwnerFrame().trplON;
        	}

        	auto = this.getOwnerFrame().auto;
        	trpl = this.getOwnerFrame().trpl;

        	trace("auto : " + auto);
        	if (auto == "1") {
        		this.div_search.cbo_odrpl_type.set_index(idx);
        		this.div_search.edt_odrpl.set_value(searchTxt);
        		trace("search");
        		this.fn_search();
        	} else {
        		this.fn_wrsLcLcSet();//대분류 SET
        		this.div_search.cbo_wrs_mclc.set_enable(false);
        	}
        	DSTR_TER_YN = this.getOwnerFrame().DSTR_TER_YN;
        };

        this.fn_wrsLcLcSet = function()
        {
        	var sSvcID        = "retrieveWrsClfL";//통신아이디
        	var sURL          = "svc::/rest/scm/order/retrieveWrsClfL";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_wrs_clfL=ds_wrs_clfL";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = "";// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        this.fn_afterFormOnload = function()
        {
        	this.div_search.edt_odrpl.setFocus();
        };

        //공통코드 데이터셋 onload후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        	// trace("fn_commonAfterOnload");

        	this.div_search.cbo_wmc_loc_rgn_dsc.set_index(0);
        	this.div_search.cbo_odrpl_type.set_index(0);
        }

        //Search
        this.fn_search = function()
        {
        	this.ds_dataM.clearData();

        	var odrpl_type 			= "'"+this.gfn_nullToEmpty(this.div_search.cbo_odrpl_type.value)+"'";
        	var odrpl 				= "'"+this.gfn_nullToEmpty(this.div_search.edt_odrpl.value)+"'";
        	var cser_ctr_tpc_type 	= "'"+this.gfn_nullToEmpty(this.div_search.cbo_cser_ctr_tpc_type.value)+"'";
        	var mngt_na_tr_tpc_type = "'"+this.gfn_nullToEmpty(this.div_search.cbo_mngt_na_tr_tpc_type.value)+"'";
        	var wmc_loc_rgn_dsc 	= "'"+this.gfn_nullToEmpty(this.div_search.cbo_wmc_loc_rgn_dsc.value)+"'";
        	var ht_lov_rgn_c 		= "'"+this.gfn_nullToEmpty(this.div_search.cbo_ht_lov_rgn_c.value)+"'";
        	var wrs_lclc 			= "'"+this.gfn_nullToEmpty(this.div_search.cbo_wrs_lclc.value)+"'";
        	var wrs_mclc 			= "'"+this.gfn_nullToEmpty(this.div_search.cbo_wrs_mclc.value)+"'";
        	var spy_tpc_type 		= "'"+this.gfn_nullToEmpty(this.div_search.cbo_spy_tpc_type.value)+"'";
        	var trplC 				= "'"+this.gfn_nullToEmpty(this.getOwnerFrame().trplC)+"'";

        	//발주처코드가 6자리만 들어올 경우 앞에 8808983 을 강제로 붙혀준다.
        	if (this.gfn_nullToEmpty(this.div_search.cbo_odrpl_type.value) == 'code') {
        		if (this.gfn_nullToEmpty(this.div_search.edt_odrpl.value).length == 6) {
        			odrpl = "'"+'8808983' + this.gfn_nullToEmpty(this.div_search.edt_odrpl.value)+"'";
        		}
        	}

        	var params =  	  " odrpl_type=" 			+ odrpl_type
        					+ " odrpl=" 				+ odrpl
        					+ " cser_ctr_tpc_type=" 	+ cser_ctr_tpc_type
        					+ " mngt_na_tr_tpc_type=" 	+ mngt_na_tr_tpc_type
        					+ " wmc_loc_rgn_dsc=" 		+ wmc_loc_rgn_dsc
        					+ " ht_lov_rgn_c="			+ ht_lov_rgn_c
        					+ " wrs_lclc="				+ wrs_lclc
        					+ " wrs_mclc="				+ wrs_mclc
        					+ " spy_tpc_type="			+ spy_tpc_type
        					+ " trplC="					+ trplC;

        	//trace(">>>> search params : " + params);

        	var sSvcID        = "retrieveTrnrelOdrpl";//통신아이디
        	var sURL          = "svc::/rest/scm/order/retrieveTrnrelOdrpl";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_dataM=ds_dataM";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID == "retrieveWrsClfL") {
        			this.div_search.cbo_wrs_lclc.set_index(0);
        		}
        		if (svcID == "retrieveWrsClfM") {
        			this.div_search.cbo_wrs_mclc.set_index(0);
        		}
        		if (svcID == "retrieveTrnrelOdrpl") {
        			// trace("발주처 조회 : " + this.ds_dataM.saveXML());
        			if (this.ds_dataM.rowcount == 1) {
        				this.grd_master_oncellclick();
        			} else if (this.ds_dataM.rowcount == 0) {
        				this.grd_master.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        			} else {
        				this.grd_master.selectRow(0);
        				this.grd_master.setFocus();
        			}
        		}
        	}
        }

        //Close
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }

        //Event
        this.btn_search_onclick = function(obj,e)
        {
        	if (this.gfn_isNull(this.div_search.edt_odrpl.value)) {
        		alert("거래처검색조건 내용을 입력해 주세요");
        		this.div_search.edt_odrpl.setFocus();
        		return false;
        	}
        	this.fn_search();
        }

        this.fn_parentValueSet = function() //부모창 값 전달
        {
        	this.objRtnArr = new Array(26);
        	var cser_na_trpl_c 			= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "CSER_NA_TRPL_C"); //00
        	var cser_na_trpl_n 			= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "CSER_NA_TRPL_N"); //01
        	var cser_na_team_c 			= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "CSER_NA_TEAM_C");//02
        	var cser_na_team_n 			= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "CSER_NA_TEAM_N");//03
        	var prgr_c 					= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "PRGR_C");//04 가격군코드
        	var cser_na_usr_sys_kdc 	= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "CSER_NA_USR_SYS_KDC");//05 발주자시스템코드
        	var cser_ctr_tpc		 	= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "CSER_CTR_TPC");//06 수요자계약유형코드
        	var mngt_na_trpl_c		 	= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "MNGT_NA_TRPL_C");//07 주관거래처코드
        	var mngt_na_team_c		 	= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "MNGT_NA_TEAM_C");//08 주관거래처팀코드
        	var mngt_na_tr_tpc		 	= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "MNGT_NA_TR_TPC");//09 주관거래유형코드
        	var cser_adjpl_na_trpl_c 	= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "CSER_ADJPL_NA_TRPL_C");//10 수요처정산처코드
        	var cser_adjpl_na_team_c 	= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "CSER_ADJPL_NA_TEAM_C");//11 수요처정산처팀코드
        	var na_wrs_lclc				= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "NA_WRS_LCLC");//12 경제통합상품대분류
        	var na_wrs_mclc				= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "NA_WRS_MCLC");//13 경제통합상품대분류
        	var spy_tpc					= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "SPY_TPC");//14 공급유형코드
        	var splr_na_trpl_c			= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "SPLR_NA_TRPL_C");//15 공급거래처
        	var splr_na_team_c			= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "SPLR_NA_TEAM_C");//16 공급거래처팀
        	var ldtm_dds				= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "LDTM_DDS");//17 리드타임
        	var mngt_tr_rel_amnno		= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "MNGT_TR_REL_AMNNO");//18 주관거래관계관리번호
        	var cser_tr_rel_amnno		= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "CSER_TR_REL_AMNNO");//19 수요자거래관계관리번호
        	var actl_spypl_na_trpl_c	= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "ACTL_SPYPL_NA_TRPL_C");//20 수요자거래관계관리번호
        	var pgnm					= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "PGNM");//21 가격군명
        	//var ctrTpc					= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "CTR_TPC");//22 계약구분
        	var splr_na_usr_sys_kdc		= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "SPLR_NA_USR_SYS_KDC");//23 공급처시스템코드
        	var mngt_na_usr_sys_kdc		= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "MNGT_NA_USR_SYS_KDC");//24 주관처시스템코드
        	var rots_flex_pr_apl_yn		= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "ROTS_FLEX_PR_APL_YN");//25 탄력가격적용여부
        	var byng_upr_mod_yn			= this.ds_dataM.getColumn(this.ds_dataM.rowposition, "BYNG_UPR_MOD_YN");//26 매입단가적용여부

        	this.objRtnArr[0] = cser_na_trpl_c;
        	this.objRtnArr[1] = cser_na_trpl_n;
        	this.objRtnArr[2] = cser_na_team_c;
        	this.objRtnArr[3] = cser_na_team_n;
        	this.objRtnArr[4] = prgr_c;
        	this.objRtnArr[5] = cser_na_usr_sys_kdc;
        	this.objRtnArr[6] = cser_ctr_tpc;
        	this.objRtnArr[7] = mngt_na_trpl_c;
        	this.objRtnArr[8] = mngt_na_team_c;
        	this.objRtnArr[9] = mngt_na_tr_tpc;
        	this.objRtnArr[10] = cser_adjpl_na_trpl_c;
        	this.objRtnArr[11] = cser_adjpl_na_team_c;
        	this.objRtnArr[12] = na_wrs_lclc;
        	this.objRtnArr[13] = na_wrs_mclc;
        	this.objRtnArr[14] = spy_tpc;
        	this.objRtnArr[15] = splr_na_trpl_c;
        	this.objRtnArr[16] = splr_na_team_c;
        	this.objRtnArr[17] = ldtm_dds;
        	this.objRtnArr[18] = mngt_tr_rel_amnno;
        	this.objRtnArr[19] = cser_tr_rel_amnno;
        	this.objRtnArr[20] = actl_spypl_na_trpl_c;
        	this.objRtnArr[21] = pgnm;
        	//this.objRtnArr[22] = ctrTpc;
        	this.objRtnArr[23] = splr_na_usr_sys_kdc;
        	this.objRtnArr[24] = mngt_na_usr_sys_kdc;
        	this.objRtnArr[25] = rots_flex_pr_apl_yn;
        	this.objRtnArr[26] = byng_upr_mod_yn;

        	// 횡성저온 추가 220314
        	if (DSTR_TER_YN == "N" && (cser_na_trpl_c == "8808983322353" || cser_na_trpl_c == "8808983324562" || cser_na_trpl_c == "8808983325958" || cser_na_trpl_c == "8808983332277")) {
        		alert('선택하신 발주서 참조 배송예정서는 신선등록 화면에서 작성하셔야 합니다.');
        		return false;
        	}

        	//trace(this.objRtnArr.toString());
        	this.close(this.objRtnArr.toString());
        }

        this.grd_master_oncellclick = function(obj,e)
        {
        	this.fn_parentValueSet();
        }

        this.div_search_cbo_wmc_loc_rgn_dsc_onitemchanged = function(obj,e)
        {
        	var wmc_loc_rgn_dsc = this.div_search.cbo_wmc_loc_rgn_dsc.value;
        	var params = " wmc_loc_rgn_dsc="+wmc_loc_rgn_dsc;

        	var sSvcID        = "retrieveRgnC";//통신아이디
        	var sURL          = "svc::/rest/scm/order/retrieveRgnC";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_rgn_c01=ds_rgn_c01";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        	this.div_search.cbo_ht_lov_rgn_c.set_enable(true);
        }

        this.div_search_cbo_wrs_lclc_onitemchanged = function(obj,e)
        {
        	var na_wrs_lclc = this.gfn_nullToEmpty(this.div_search.cbo_wrs_lclc.value);
        	var params = " na_wrs_lclc=" + na_wrs_lclc;

        	if (na_wrs_lclc != 'all') {
        		this.div_search.cbo_wrs_mclc.set_enable(true);
        		var sSvcID    = "retrieveWrsClfM";//통신아이디
        		var sURL          = "svc::/rest/scm/order/retrieveWrsClfM";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_wrs_clfM=ds_wrs_clfM";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = params;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회

        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, sTranType);
        	} else {
        		this.ds_wrs_clfM.clearData();
        		this.div_search.cbo_wrs_mclc.set_enable(false);
        	}
        }

        this.btn_popup05_onclick = function(obj,e)
        {
        	var oArg = {form_id:"POPUP_TRNREL_ODRPL"};
        	var sOption = "autosize=true,title=false";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("retrieveBr","POPUP::POPUP_BR.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	// trace(" strId : " + strId + " strVal : " + strVal);
        	if (strId == "retrieveBr") {
        		this.div_search.edt_odrpl.set_value(strVal);
        	}
        }

        this.div_search_edt_odrpl_onkeydown = function(obj,e)
        {
        	if (e.keycode==13) {
        		//this.fn_search();
        		this.btn_search_onclick();
        	}
        }

        this.Button07_onclick = function(obj,e)
        {
        	this.reload();
        }

        this.grd_master_onkeydown = function(obj,e)
        {
        	if (e.keycode == "13") {
        		this.fn_parentValueSet();
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Button07.addEventHandler("onclick", this.Button07_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.grd_master.addEventHandler("oncellclick", this.grd_master_oncellclick, this);
            this.grd_master.addEventHandler("onenterdown", this.grd_master_onenterdown, this);
            this.grd_master.addEventHandler("onkeydown", this.grd_master_onkeydown, this);
            this.btn_cancle.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.div_search.cbo_odrpl_type.addEventHandler("onitemchanged", this.div_search_cbo_odrpl_type_onitemchanged, this);
            this.div_search.cbo_wrs_lclc.addEventHandler("onitemchanged", this.div_search_cbo_wrs_lclc_onitemchanged, this);
            this.div_search.cbo_wmc_loc_rgn_dsc.addEventHandler("onitemchanged", this.div_search_cbo_wmc_loc_rgn_dsc_onitemchanged, this);
            this.div_search.cbo_ht_lov_rgn_c.addEventHandler("onitemchanged", this.Div00_Combo01_onitemchanged, this);
            this.div_search.edt_odrpl.addEventHandler("onkeydown", this.div_search_edt_odrpl_onkeydown, this);
            this.div_search.edt_odrpl.addEventHandler("oneditclick", this.div_search_edt_odrpl_oneditclick, this);
            this.div_search.btn_popup05.addEventHandler("onclick", this.btn_popup05_onclick, this);

        };

        this.loadIncludeScript("POPUP_TRNREL_ODRPL.xfdl");

       
    };
}
)();
