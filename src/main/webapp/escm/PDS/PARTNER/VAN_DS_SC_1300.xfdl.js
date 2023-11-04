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
                this.set_name("VAN_DS_SC_1302");
                this.set_titletext("자체 거래관계 등록");
                this._setFormPosition(0,0,803,780);
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
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_tr_stop_rsnc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_ctr_clo_rsnc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_accp_c", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rgd_amn_dsc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_py_ptm_dsc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_rel_prg_stsc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SIMP_C\"/><Col id=\"SIMP_CNM\"/></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_na_odr_fbid", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_na_rvo_fbid", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_na_pmi_sbj", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_str_fdt_bascd", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_ssdyrt_bascd", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_bz_meth_dsc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"RQR_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"RQR_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"RQR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TR_RQR_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_NA_TEAM_N\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_NA_TEAM_N\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_CTR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"BZ_METH_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_ADJPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_ADJPL_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_CTR_CHRRNM\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_CTR_CHRR_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"CSER_CTR_CHRR_MPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_HOFF_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_BNK_C\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_STL_ACNO\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_DPRNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_CTR_CHRRNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_CTR_CHRR_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"SPLR_CTR_CHRR_MPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SPY_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_STOP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_CLO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_CLO_RSNC\" type=\"STRING\" size=\"256\"/><Column id=\"TR_STOP_RSNC\" type=\"STRING\" size=\"256\"/><Column id=\"ROTS_FLEX_PR_APL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BYNG_UPR_MOD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NA_ODR_FBID_RSNC\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_FBID_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_BUYER_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"NA_RVO_FBID_RSNC\" type=\"STRING\" size=\"256\"/><Column id=\"RVO_FBID_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LDTM_DDS\" type=\"STRING\" size=\"256\"/><Column id=\"RGD_AMN_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_PMI_SBJ_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"STL_FDT_BASCD\" type=\"STRING\" size=\"256\"/><Column id=\"SSDYRT_BASCD\" type=\"STRING\" size=\"256\"/><Column id=\"SSDYRT\" type=\"STRING\" size=\"256\"/><Column id=\"SSDY_BAS_AM\" type=\"STRING\" size=\"256\"/><Column id=\"DDLY_SSDYRT\" type=\"STRING\" size=\"256\"/><Column id=\"SSDY_PY_PTM_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BKG_CHG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TR_REL_RG_RQR_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CMENO\" type=\"STRING\" size=\"256\"/><Column id=\"APVMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"APV_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"APV_NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"APV_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REJ_RSNCTT\" type=\"STRING\" size=\"256\"/><Column id=\"TR_REL_PRG_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RSP_C_CNTN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_RQR_NA_TRPL_C", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"UP_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"ATEL\" type=\"STRING\" size=\"256\"/><Column id=\"HTEL\" type=\"STRING\" size=\"256\"/><Column id=\"STEL\" type=\"STRING\" size=\"256\"/><Column id=\"MPSVNO\" type=\"STRING\" size=\"256\"/><Column id=\"MPHNO\" type=\"STRING\" size=\"256\"/><Column id=\"MPSQNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_CIF_INFO", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ATEL\" type=\"STRING\" size=\"256\"/><Column id=\"HTEL\" type=\"STRING\" size=\"256\"/><Column id=\"STEL\" type=\"STRING\" size=\"256\"/><Column id=\"MPSVNO\" type=\"STRING\" size=\"256\"/><Column id=\"MPHNO\" type=\"STRING\" size=\"256\"/><Column id=\"MPSQNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cser_adjpl_trpl", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">code</Col><Col id=\"data\">data</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_cser_adjpl_team", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">code</Col><Col id=\"data\">data</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_adjpl_na_trpl_c", this);
            obj._setContents("<ColumnInfo><Column id=\"ADJPL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TRPL_C\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static58", "absolute", "109", "636", null, "29", "15", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "109", "468", null, "29", "15", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static57", "absolute", "109", "608", null, "29", "15", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static53", "absolute", "109", "552", null, "29", "15", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "109", "524", null, "29", "15", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "109", "496", null, "29", "15", null, this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static50", "absolute", "109", "370", null, "29", "15", null, this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static49", "absolute", "109", "314", null, "29", "15", null, this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("8");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "109", "118", null, "29", "15", null, this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "109", "62", null, "29", "15", null, this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_RQR_NA_TRPL_C", "absolute", "113", "66", "240", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("11");
            obj.set_codecolumn("NA_TRPL_C");
            obj.set_datacolumn("CLNTNM");
            obj.set_innerdataset("@ds_RQR_NA_TRPL_C");

            obj = new Button("btn_clear00", "absolute", null, "0", "53", "21", "58", null, this);
            obj.set_taborder("12");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save00", "absolute", null, "0", "41", "21", "15", null, this);
            obj.set_taborder("13");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "62", "110", "29", null, null, this);
            obj.set_taborder("14");
            obj.set_text("거래처");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "0", "90", "110", "29", null, null, this);
            obj.set_taborder("15");
            obj.set_text("입력구분");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "0", "118", "110", "29", null, null, this);
            obj.set_taborder("16");
            obj.set_text("적용요청");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "109", "90", null, "29", "15", null, this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "488", "118", "85", "29", null, null, this);
            obj.set_taborder("18");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Button("btn_str_sch00", "absolute", "267", "94", "113", "21", null, null, this);
            obj.set_taborder("19");
            obj.set_text("요청거래관계검색");
            this.addChild(obj.name, obj);

            obj = new Static("Static47", "absolute", "0", "37", "135", "21", null, null, this);
            obj.set_taborder("20");
            obj.set_text("거래처 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_NA_RVO", "absolute", "113", "94", "151", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_NA_RVO_innerdataset = new Dataset("cbo_NA_RVO_innerdataset", this.cbo_NA_RVO);
            cbo_NA_RVO_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">공급받는자</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">공급자</Col></Row></Rows>");
            obj.set_innerdataset(cbo_NA_RVO_innerdataset);
            obj.set_taborder("21");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("0");
            obj.set_text("공급받는자");

            obj = new Static("Static02", "absolute", "389", "94", "307", "21", null, null, this);
            obj.set_taborder("22");
            obj.set_text("[거래처에서 공급하는 사업장을 입력합니다]");
            obj.set_cssclass("sta_WF_DescriptionE02");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_trpl_c00", "absolute", "116", "122", "196", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_trpl_c00_innerdataset = new Dataset("rdo_trpl_c00_innerdataset", this.rdo_trpl_c00);
            rdo_trpl_c00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">승인일반영</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">지정일반영</Col></Row></Rows>");
            obj.set_innerdataset(rdo_trpl_c00_innerdataset);
            obj.set_taborder("23");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");

            obj = new Static("Static03", "absolute", "687", "118", "70", "29", null, null, this);
            obj.set_taborder("24");
            obj.set_text("삭제");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_TR_REL_PRG_STSC", "absolute", "576", "122", "108", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("25");
            obj.set_text("[] 신규입력");
            obj.set_enable("true");
            obj.set_innerdataset("@ds_rel_prg_stsc");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_codecolumn("SIMP_C");
            obj.set_readonly("false");

            obj = new Static("Static06", "absolute", "0", "163", "184", "21", null, null, this);
            obj.set_taborder("26");
            obj.set_text("거래처 정보 [공급자]");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "109", "188", null, "29", "15", null, this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "0", "188", "110", "29", null, null, this);
            obj.set_taborder("28");
            obj.set_text("공급처정산처");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "356", "188", "110", "29", null, null, this);
            obj.set_taborder("29");
            obj.set_text("상위사업장");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "109", "216", null, "29", "15", null, this);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "0", "216", "110", "29", null, null, this);
            obj.set_taborder("31");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "488", "216", "110", "29", null, null, this);
            obj.set_taborder("32");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_SPLR_CTR_CHRRNM", "absolute", "113", "220", "128", "21", null, null, this);
            obj.set_taborder("33");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "244", "216", "69", "29", null, null, this);
            obj.set_taborder("34");
            obj.set_text("핸드폰");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_delete_yn00", "absolute", "763", "122", "24", "21", null, null, this);
            obj.set_taborder("35");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_tel_main00", "absolute", "316", "220", "51", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_tel_main00_innerdataset = new Dataset("cbo_tel_main00_innerdataset", this.cbo_tel_main00);
            cbo_tel_main00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">010</Col><Col id=\"datacolumn\">010</Col></Row><Row><Col id=\"codecolumn\">011</Col><Col id=\"datacolumn\">011</Col></Row><Row><Col id=\"codecolumn\">016</Col><Col id=\"datacolumn\">016</Col></Row><Row><Col id=\"codecolumn\">017</Col><Col id=\"datacolumn\">017</Col></Row><Row><Col id=\"codecolumn\">018</Col><Col id=\"datacolumn\">018</Col></Row><Row><Col id=\"codecolumn\">019</Col><Col id=\"datacolumn\">019</Col></Row></Rows>");
            obj.set_innerdataset(cbo_tel_main00_innerdataset);
            obj.set_taborder("36");
            obj.set_value("1");
            obj.set_text("010");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");

            obj = new Static("Static43", "absolute", "428", "220", "9", "21", null, null, this);
            obj.set_taborder("37");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "369", "220", "9", "21", null, null, this);
            obj.set_taborder("38");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_SPYPL_HOFF_NA_TRPL_C", "absolute", "469", "192", "129", "21", null, null, this);
            obj.set_taborder("39");
            obj.set_cssclass("WF_Readonly");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data01", "absolute", "601", "192", "183", "21", null, null, this);
            obj.set_taborder("40");
            obj.set_cssclass("WF_Readonly");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "0", "261", "184", "21", null, null, this);
            obj.set_taborder("41");
            obj.set_text("사업장 정보 [공급받는 자]");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "109", "286", null, "29", "15", null, this);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "0", "286", "110", "29", null, null, this);
            obj.set_taborder("43");
            obj.set_text("수요처사업장");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "0", "314", "110", "29", null, null, this);
            obj.set_taborder("44");
            obj.set_text("수요처정산처");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "109", "342", null, "29", "15", null, this);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "0", "342", "110", "29", null, null, this);
            obj.set_taborder("46");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "488", "342", "110", "29", null, null, this);
            obj.set_taborder("47");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_CSER_CTR_CHRRNM", "absolute", "113", "346", "128", "21", null, null, this);
            obj.set_taborder("63");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "244", "342", "69", "29", null, null, this);
            obj.set_taborder("48");
            obj.set_text("핸드폰");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static52", "absolute", "0", "370", "110", "29", null, null, this);
            obj.set_taborder("49");
            obj.set_text("바이어");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ODRPL_BUYER_ENO", "absolute", "113", "374", "90", "21", null, null, this);
            obj.set_taborder("50");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data08", "absolute", "206", "374", "172", "21", null, null, this);
            obj.set_taborder("51");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popup01", "absolute", "381", "374", "21", "21", null, null, this);
            obj.set_taborder("52");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static51", "absolute", "0", "415", "135", "21", null, null, this);
            obj.set_taborder("53");
            obj.set_text("추가정보");
            obj.set_cssclass("sta_WF_Subtitle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_CSER_NA_TEAM_NM", "absolute", "405", "290", "80", "21", null, null, this);
            obj.set_taborder("54");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_CSER_NA_TRPL_C", "absolute", "113", "290", "90", "21", null, null, this);
            obj.set_taborder("55");
            obj.set_cssclass("WF_Essential");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_data04", "absolute", "206", "290", "172", "21", null, null, this);
            obj.set_taborder("56");
            obj.set_cssclass("WF_Essential");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popup00", "absolute", "381", "290", "21", "21", null, null, this);
            obj.set_taborder("57");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_CSER_ADJPL_NA_TRPL_C", "absolute", "113", "318", "289", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("58");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("@ds_cser_adjpl_trpl");
            obj.set_readonly("true");

            obj = new Combo("cbo_CSER_ADJPL_NA_TEAM_C", "absolute", "405", "318", "245", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("59");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("@ds_cser_adjpl_team");
            obj.set_readonly("true");

            obj = new Static("Static04", "absolute", "0", "440", "110", "29", null, null, this);
            obj.set_taborder("60");
            obj.set_text("공급처은행");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "262", "468", "110", "29", null, null, this);
            obj.set_taborder("61");
            obj.set_text("계약유형");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "109", "440", null, "29", "15", null, this);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "524", "496", "110", "29", null, null, this);
            obj.set_taborder("64");
            obj.set_text("공급유형");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "0", "552", "110", "29", null, null, this);
            obj.set_taborder("71");
            obj.set_text("결제기일기준");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "0", "580", "110", "29", null, null, this);
            obj.set_taborder("72");
            obj.set_text("장려금률기준");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "262", "608", "110", "29", null, null, this);
            obj.set_taborder("73");
            obj.set_text("발주금지사유");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static54", "absolute", "109", "580", null, "29", "15", null, this);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static55", "absolute", "524", "636", "110", "29", null, null, this);
            obj.set_taborder("75");
            obj.set_text("수주금지사유");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_SPLR_BNK_C", "absolute", "113", "444", "146", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_SPLR_BNK_C_innerdataset = new Dataset("cbo_SPLR_BNK_C_innerdataset", this.cbo_SPLR_BNK_C);
            cbo_SPLR_BNK_C_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">00</Col><Col id=\"datacolumn\">[00] 미입력</Col></Row><Row><Col id=\"codecolumn\">11</Col><Col id=\"datacolumn\">[11] 농협중앙회</Col></Row><Row><Col id=\"codecolumn\">12</Col><Col id=\"datacolumn\">[12] 지역농협</Col></Row></Rows>");
            obj.set_innerdataset(cbo_SPLR_BNK_C_innerdataset);
            obj.set_taborder("76");
            obj.set_text("[11] 농협중앙회");
            obj.set_enable("true");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("11");
            obj.set_visible("true");
            obj.set_readonly("true");

            obj = new Combo("cbo_CSER_CTR_TPC", "absolute", "375", "472", "146", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("80");
            obj.set_text("[4] 자체계약");
            obj.set_enable("true");
            obj.set_innerdataset("@ds_cser_ctr_tpc");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_codecolumn("SIMP_C");
            obj.set_readonly("true");

            obj = new Combo("cbo_SPY_TPC", "absolute", "637", "500", "147", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("84");
            obj.set_innerdataset("@ds_spy_tpc");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_codecolumn("SIMP_C");
            obj.set_readonly("false");

            obj = new Combo("cbo_SSDYRT_BASCD", "absolute", "113", "584", "146", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("93");
            obj.set_text("[1] 율");
            obj.set_enable("true");
            obj.set_innerdataset("@ds_ssdyrt_bascd");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_codecolumn("SIMP_C");
            obj.set_readonly("true");

            obj = new Combo("cbo_STL_FDT_BASCD", "absolute", "113", "556", "146", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("89");
            obj.set_text("[1] 공급받는 자");
            obj.set_enable("true");
            obj.set_innerdataset("@ds_str_fdt_bascd");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_codecolumn("SIMP_C");
            obj.set_readonly("true");

            obj = new Combo("cbo_NA_RVO_FBID_RSNC", "absolute", "637", "640", "147", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("103");
            obj.set_text("[00] 해당없음");
            obj.set_enable("true");
            obj.set_innerdataset("@ds_na_rvo_fbid");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_codecolumn("SIMP_C");

            obj = new Combo("cbo_NA_ODR_FBID_RSNC", "absolute", "375", "612", "146", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("98");
            obj.set_text("[00] 해당없음");
            obj.set_enable("true");
            obj.set_innerdataset("@ds_na_odr_fbid");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_codecolumn("SIMP_C");

            obj = new Static("Static59", "absolute", "262", "440", "110", "29", null, null, this);
            obj.set_taborder("85");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static60", "absolute", "524", "468", "110", "29", null, null, this);
            obj.set_taborder("90");
            obj.set_text("계통탄력가격");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static61", "absolute", "0", "524", "110", "29", null, null, this);
            obj.set_taborder("94");
            obj.set_text("리드타임");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static62", "absolute", "262", "552", "110", "29", null, null, this);
            obj.set_taborder("99");
            obj.set_text("약정과목구분");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static63", "absolute", "262", "580", "110", "29", null, null, this);
            obj.set_taborder("104");
            obj.set_text("장려금율(%)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static64", "absolute", "524", "608", "110", "29", null, null, this);
            obj.set_taborder("112");
            obj.set_text("발주금지일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_ODR_FBID_DT", "absolute", "637", "612", "147", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("100");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new MaskEdit("mae_SSDYRT", "absolute", "375", "584", "146", "21", null, null, this);
            obj.set_taborder("95");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_NA_PMI_SBJ_DSC", "absolute", "375", "556", "146", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("91");
            obj.set_text("[930] 유통");
            obj.set_enable("true");
            obj.set_innerdataset("@ds_na_pmi_sbj");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_codecolumn("SIMP_C");
            obj.set_readonly("true");

            obj = new MaskEdit("mae_LDTM_DDS", "absolute", "113", "528", "146", "21", null, null, this);
            obj.set_taborder("86");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_ROTS_FLEX_PR_APL_YN", "absolute", "637", "472", "147", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_ROTS_FLEX_PR_APL_YN_innerdataset = new Dataset("cbo_ROTS_FLEX_PR_APL_YN_innerdataset", this.cbo_ROTS_FLEX_PR_APL_YN);
            cbo_ROTS_FLEX_PR_APL_YN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">[1] 적용</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">[0] 미적용</Col></Row></Rows>");
            obj.set_innerdataset(cbo_ROTS_FLEX_PR_APL_YN_innerdataset);
            obj.set_taborder("81");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Edit("edt_SPLR_STL_ACNO", "absolute", "375", "444", "146", "21", null, null, this);
            obj.set_taborder("77");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static67", "absolute", "524", "440", "110", "29", null, null, this);
            obj.set_taborder("113");
            obj.set_text("예금주");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static68", "absolute", "0", "496", "110", "29", null, null, this);
            obj.set_taborder("114");
            obj.set_text("매입단가수정");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static69", "absolute", "262", "524", "110", "29", null, null, this);
            obj.set_taborder("115");
            obj.set_text("계약시작일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static70", "absolute", "524", "552", "110", "29", null, null, this);
            obj.set_taborder("116");
            obj.set_text("장려금지급시점");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static71", "absolute", "524", "580", "110", "29", null, null, this);
            obj.set_taborder("117");
            obj.set_text("장려금기준금액");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static72", "absolute", "0", "636", "110", "29", null, null, this);
            obj.set_taborder("118");
            obj.set_text("거래중지사유");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_TR_STOP_RSNC", "absolute", "113", "640", "146", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("101");
            obj.set_text("[00] 해당없음");
            obj.set_enable("true");
            obj.set_innerdataset("@ds_tr_stop_rsnc");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_codecolumn("SIMP_C");
            obj.set_readonly("true");

            obj = new MaskEdit("mae_SSDY_BAS_AM", "absolute", "637", "584", "147", "21", null, null, this);
            obj.set_taborder("96");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_SSDY_PY_PTM_DSC", "absolute", "637", "556", "147", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("92");
            obj.set_text("[00] 해당없음");
            obj.set_innerdataset("@ds_py_ptm_dsc");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_codecolumn("SIMP_C");
            obj.set_enable("true");

            obj = new Calendar("cal_CTR_ST_DT", "absolute", "375", "528", "146", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("87");
            obj.set_cssclass("WF_Essential");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Combo("cbo_BYNG_UPR_MOD_YN", "absolute", "113", "500", "146", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_BYNG_UPR_MOD_YN_innerdataset = new Dataset("cbo_BYNG_UPR_MOD_YN_innerdataset", this.cbo_BYNG_UPR_MOD_YN);
            cbo_BYNG_UPR_MOD_YN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">[1] 적용</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">[0] 미적용</Col></Row></Rows>");
            obj.set_innerdataset(cbo_BYNG_UPR_MOD_YN_innerdataset);
            obj.set_taborder("82");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Edit("edt_SPLR_DPRNM", "absolute", "637", "444", "147", "21", null, null, this);
            obj.set_taborder("78");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static75", "absolute", "0", "468", "110", "29", null, null, this);
            obj.set_taborder("119");
            obj.set_text("사업방식구분");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static76", "absolute", "262", "496", "110", "29", null, null, this);
            obj.set_taborder("120");
            obj.set_text("반품관리구분");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static77", "absolute", "524", "524", "110", "29", null, null, this);
            obj.set_taborder("121");
            obj.set_text("계약종료일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static79", "absolute", "0", "608", "110", "29", null, null, this);
            obj.set_taborder("122");
            obj.set_text("직송장려금율 %");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static80", "absolute", "262", "636", "110", "29", null, null, this);
            obj.set_taborder("123");
            obj.set_text("거래중지일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_CTR_STOP_DT", "absolute", "375", "640", "146", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("102");

            obj = new MaskEdit("mae_DDLY_SSDYRT", "absolute", "113", "612", "146", "21", null, null, this);
            obj.set_taborder("97");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_CTR_ED_DT", "absolute", "637", "528", "147", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("88");
            obj.set_cssclass("WF_Essential");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");

            obj = new Combo("cbo_RGD_AMN_DSC", "absolute", "375", "500", "146", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("83");
            obj.set_innerdataset("@ds_rgd_amn_dsc");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_codecolumn("SIMP_C");

            obj = new Combo("cbo_BZ_METH_DSC", "absolute", "113", "472", "146", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("79");
            obj.set_text("[01] 매취");
            obj.set_enable("true");
            obj.set_innerdataset("@ds_bz_meth_dsc");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_codecolumn("SIMP_C");
            obj.set_readonly("true");

            obj = new Combo("cbo_SPLR_NA_TRPL_C", "absolute", "113", "192", "240", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("124");
            obj.set_codecolumn("TRPL_C");
            obj.set_datacolumn("ADJPL_NM");
            obj.set_readonly("true");
            obj.set_innerdataset("@ds_adjpl_na_trpl_c");
            obj.set_index("-1");

            obj = new Combo("cbo_tel_main02", "absolute", "316", "346", "51", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_tel_main02_innerdataset = new Dataset("cbo_tel_main02_innerdataset", this.cbo_tel_main02);
            cbo_tel_main02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">010</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">011</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">016</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">017</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">018</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">019</Col></Row></Rows>");
            obj.set_innerdataset(cbo_tel_main02_innerdataset);
            obj.set_taborder("65");
            obj.set_value("1");
            obj.set_text("010");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");

            obj = new Static("Static17", "absolute", "428", "346", "9", "21", null, null, this);
            obj.set_taborder("125");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "369", "346", "9", "21", null, null, this);
            obj.set_taborder("126");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_tel_main01", "absolute", "601", "220", "51", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_tel_main01_innerdataset = new Dataset("cbo_tel_main01_innerdataset", this.cbo_tel_main01);
            cbo_tel_main01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">02</Col></Row><Row><Col id=\"codecolumn\">031</Col><Col id=\"datacolumn\">031</Col></Row><Row><Col id=\"codecolumn\">032</Col><Col id=\"datacolumn\">032</Col></Row><Row><Col id=\"codecolumn\">033</Col><Col id=\"datacolumn\">033</Col></Row><Row><Col id=\"codecolumn\">041</Col><Col id=\"datacolumn\">041</Col></Row><Row><Col id=\"codecolumn\">042</Col><Col id=\"datacolumn\">042</Col></Row><Row><Col id=\"codecolumn\">043</Col><Col id=\"datacolumn\">043</Col></Row><Row><Col id=\"codecolumn\">051</Col><Col id=\"datacolumn\">051</Col></Row><Row><Col id=\"codecolumn\">052</Col><Col id=\"datacolumn\">052</Col></Row><Row><Col id=\"codecolumn\">053</Col><Col id=\"datacolumn\">053</Col></Row><Row><Col id=\"codecolumn\">054</Col><Col id=\"datacolumn\">054</Col></Row><Row><Col id=\"codecolumn\">055</Col><Col id=\"datacolumn\">055</Col></Row><Row><Col id=\"codecolumn\">061</Col><Col id=\"datacolumn\">061</Col></Row><Row><Col id=\"codecolumn\">062</Col><Col id=\"datacolumn\">062</Col></Row><Row><Col id=\"codecolumn\">063</Col><Col id=\"datacolumn\">063</Col></Row><Row><Col id=\"codecolumn\">064</Col><Col id=\"datacolumn\">064</Col></Row></Rows>");
            obj.set_innerdataset(cbo_tel_main01_innerdataset);
            obj.set_taborder("127");
            obj.set_value("1");
            obj.set_text("010");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");

            obj = new Static("Static31", "absolute", "713", "220", "9", "21", null, null, this);
            obj.set_taborder("128");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "654", "220", "9", "21", null, null, this);
            obj.set_taborder("129");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_tel_main03", "absolute", "601", "346", "51", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_tel_main03_innerdataset = new Dataset("cbo_tel_main03_innerdataset", this.cbo_tel_main03);
            cbo_tel_main03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">02</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">031</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">032</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">033</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">041</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">042</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">043</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">051</Col></Row><Row><Col id=\"codecolumn\">9</Col><Col id=\"datacolumn\">052</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">053</Col></Row><Row><Col id=\"codecolumn\">11</Col><Col id=\"datacolumn\">054</Col></Row><Row><Col id=\"codecolumn\">12</Col><Col id=\"datacolumn\">055</Col></Row><Row><Col id=\"codecolumn\">13</Col><Col id=\"datacolumn\">061</Col></Row><Row><Col id=\"codecolumn\">14</Col><Col id=\"datacolumn\">062</Col></Row><Row><Col id=\"codecolumn\">15</Col><Col id=\"datacolumn\">063</Col></Row><Row><Col id=\"codecolumn\">16</Col><Col id=\"datacolumn\">064</Col></Row></Rows>");
            obj.set_innerdataset(cbo_tel_main03_innerdataset);
            obj.set_taborder("68");
            obj.set_value("1");
            obj.set_text("010");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");

            obj = new Static("Static42", "absolute", "713", "346", "9", "21", null, null, this);
            obj.set_taborder("130");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static48", "absolute", "654", "346", "9", "21", null, null, this);
            obj.set_taborder("131");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_tel_number02", "absolute", "663", "220", "48", "21", null, null, this);
            obj.set_taborder("132");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_tel_number03", "absolute", "722", "220", "48", "21", null, null, this);
            obj.set_taborder("133");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_tel_number00", "absolute", "378", "220", "48", "21", null, null, this);
            obj.set_taborder("134");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_tel_number01", "absolute", "437", "220", "48", "21", null, null, this);
            obj.set_taborder("135");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_tel_number04", "absolute", "378", "346", "48", "21", null, null, this);
            obj.set_taborder("66");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_tel_number05", "absolute", "437", "346", "48", "21", null, null, this);
            obj.set_taborder("67");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_tel_number07", "absolute", "722", "346", "48", "21", null, null, this);
            obj.set_taborder("70");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_tel_number06", "absolute", "663", "346", "48", "21", null, null, this);
            obj.set_taborder("69");
            this.addChild(obj.name, obj);

            obj = new Static("Static85", "absolute", "0", "720", null, "29", "15", null, this);
            obj.set_taborder("136");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static84", "absolute", "109", "692", null, "29", "15", null, this);
            obj.set_taborder("137");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static83", "absolute", "109", "664", null, "29", "15", null, this);
            obj.set_taborder("138");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static56", "absolute", "0", "692", "110", "29", null, null, this);
            obj.set_taborder("139");
            obj.set_text("최초등록일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static65", "absolute", "0", "664", "110", "29", null, null, this);
            obj.set_taborder("140");
            obj.set_text("수주금지일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static66", "absolute", "262", "692", "110", "29", null, null, this);
            obj.set_taborder("141");
            obj.set_text("최종변경일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_RVO_FBID_DT", "absolute", "113", "668", "146", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("105");

            obj = new Static("Static73", "absolute", "262", "664", "110", "29", null, null, this);
            obj.set_taborder("142");
            obj.set_text("계약해지사유");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static74", "absolute", "524", "692", "110", "29", null, null, this);
            obj.set_taborder("143");
            obj.set_text("삭제일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_add_info08", "absolute", "637", "696", "147", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("110");
            obj.set_enable("true");
            obj.set_readonly("true");

            obj = new Combo("cbo_CTR_CLO_RSNC", "absolute", "375", "668", "146", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("106");
            obj.set_text("[00] 해당없음");
            obj.set_enable("true");
            obj.set_innerdataset("@ds_ctr_clo_rsnc");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_codecolumn("SIMP_C");
            obj.set_readonly("true");

            obj = new Static("Static81", "absolute", "524", "664", "110", "29", null, null, this);
            obj.set_taborder("144");
            obj.set_text("계약해지일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static82", "absolute", "0", "720", "110", "29", null, null, this);
            obj.set_taborder("145");
            obj.set_text("최종수정자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_CTR_CLO_DT", "absolute", "637", "668", "147", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("107");

            obj = new Edit("edt_LS_CMENO", "absolute", "113", "724", "146", "21", null, null, this);
            obj.set_taborder("111");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_RQR_DT", "absolute", "385", "122", "100", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("146");
            obj.set_visible("false");

            obj = new Static("sta_apply_name00", "absolute", "308", "121", "75", "23", null, null, this);
            obj.set_taborder("147");
            obj.set_text("[예약요청일]");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static78", "absolute", "0%", "751", null, "21", "44.33%", null, this);
            obj.set_taborder("148");
            obj.set_text("- 결제 계좌정보등록은 농협사업장으로 문의 바랍니다.");
            obj.set_cssclass("sta_WF_DescriptionE02");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_FSRG_DTM", "absolute", "113", "696", "146", "21", null, null, this);
            obj.set_taborder("108");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_LSCHG_DTM", "absolute", "375", "696", "146", "21", null, null, this);
            obj.set_taborder("109");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_RQR_NA_TEAM_C", "absolute", "39.1%", "32", null, "20", "49.19%", null, this);
            obj.set_taborder("149");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_RQR_DT", "absolute", "51.06%", "32", null, "20", "37.24%", null, this);
            obj.set_taborder("150");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_TR_RQR_SQNO", "absolute", "63.01%", "32", null, "20", "25.28%", null, this);
            obj.set_taborder("151");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_CSER_NA_TEAM_C", "absolute", "60.77%", "290", null, "21", "29.27%", null, this);
            obj.set_taborder("152");
            obj.set_enable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_RQR_NA_TRPL_CODE", "absolute", "27.15%", "32", null, "20", "61.15%", null, this);
            obj.set_taborder("153");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_RQR_DT_TODAY", "absolute", "51.06%", "8", null, "20", "37.24%", null, this);
            obj.set_taborder("154");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_INIT_DATA", "absolute", "63.01%", "8", null, "20", "25.28%", null, this);
            obj.set_taborder("155");
            obj.set_value("0");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 780, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1302");
            		p.set_titletext("자체 거래관계 등록");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","edt_CSER_NA_TRPL_C","value","ds_master_data","CSER_NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","cbo_BZ_METH_DSC","value","ds_master_data","BZ_METH_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edt_CSER_CTR_CHRRNM","value","ds_master_data","CSER_CTR_CHRRNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","cbo_SPLR_BNK_C","value","ds_master_data","SPLR_BNK_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","edt_SPLR_STL_ACNO","value","ds_master_data","SPLR_STL_ACNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","edt_SPLR_DPRNM","value","ds_master_data","SPLR_DPRNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","edt_SPLR_CTR_CHRRNM","value","ds_master_data","SPLR_CTR_CHRRNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","cbo_SPY_TPC","value","ds_master_data","SPY_TPC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","cal_CTR_ST_DT","value","ds_master_data","CTR_ST_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","cal_CTR_ED_DT","value","ds_master_data","CTR_ED_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","cal_CTR_CLO_DT","value","ds_master_data","CTR_CLO_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","cal_CTR_STOP_DT","value","ds_master_data","CTR_STOP_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","cbo_CTR_CLO_RSNC","value","ds_master_data","CTR_CLO_RSNC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","cbo_TR_STOP_RSNC","value","ds_master_data","TR_STOP_RSNC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","cbo_ROTS_FLEX_PR_APL_YN","value","ds_master_data","ROTS_FLEX_PR_APL_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","cbo_BYNG_UPR_MOD_YN","value","ds_master_data","BYNG_UPR_MOD_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","cbo_NA_ODR_FBID_RSNC","value","ds_master_data","NA_ODR_FBID_RSNC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","cal_ODR_FBID_DT","value","ds_master_data","ODR_FBID_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","cbo_NA_RVO_FBID_RSNC","value","ds_master_data","NA_RVO_FBID_RSNC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","cal_RVO_FBID_DT","value","ds_master_data","RVO_FBID_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","mae_LDTM_DDS","value","ds_master_data","LDTM_DDS");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","cbo_RGD_AMN_DSC","value","ds_master_data","RGD_AMN_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","cbo_NA_PMI_SBJ_DSC","value","ds_master_data","NA_PMI_SBJ_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","cbo_SSDYRT_BASCD","value","ds_master_data","SSDYRT_BASCD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","mae_SSDYRT","value","ds_master_data","SSDYRT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","mae_SSDY_BAS_AM","value","ds_master_data","SSDY_BAS_AM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","mae_DDLY_SSDYRT","value","ds_master_data","DDLY_SSDYRT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","cbo_SSDY_PY_PTM_DSC","value","ds_master_data","SSDY_PY_PTM_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","edt_FSRG_DTM","value","ds_master_data","FSRG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","edt_LSCHG_DTM","value","ds_master_data","LSCHG_DTM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","edt_LS_CMENO","value","ds_master_data","LS_CMENO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","cbo_STL_FDT_BASCD","value","ds_master_data","STL_FDT_BASCD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","cbo_TR_REL_PRG_STSC","value","ds_master_data","TR_REL_PRG_STSC");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1300.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1300.xfdl", function() {
        //include "lib::comLib.xjs";

        var TRPL_C = application.gv_glnCode; 		//로그인 사업장코드
        var TRPL_NM = application.gv_companyName; 	//로그인 사업장명
        var TRPL_UNM = application.gv_userName; 	//로그인 사용자

        this.form_onload = function(obj,e) 
        {
        	this.gfn_setInitForm(obj, e); //공통
        };

        var comboparam = [
        	{code:"CSER_CTR_TPC", dsName:"ds_cser_ctr_tpc", selecttype:"S"}, 	// 0.계약유형
        	{code:"SPY_TPC", dsName:"ds_spy_tpc", selecttype:"S"}, 				// 1.공급유형
        	{code:"TR_STOP_RSNC", dsName:"ds_tr_stop_rsnc", selecttype:"A"}, 	// 2.거래중지사유
        	{code:"CTR_CLO_RSNC", dsName:"ds_ctr_clo_rsnc", selecttype:"A"}, 	// 3.계약해지사유
        	{code:"ACCP_C", dsName:"ds_accp_c", selecttype:"S"}, 				// 4.발주처인수도코드
        	{code:"RGD_AMN_DSC", dsName:"ds_rgd_amn_dsc", selecttype:"S"}, 		// 5.반품관리구분코드
        	{code:"SSDY_PY_PTM_DSC", dsName:"ds_py_ptm_dsc", selecttype:"A"}, 	// 6.장려금지급시점구분코드
        	{code:"TR_REL_PRG_STSC", dsName:"ds_rel_prg_stsc", selecttype:"S"}, // 7.진행상태
        	{code:"NA_ODR_FBID_RSNC", dsName:"ds_na_odr_fbid", selecttype:"A"}, // 8.경제통합발주금지사유코드
        	{code:"NA_RVO_FBID_RSNC", dsName:"ds_na_rvo_fbid", selecttype:"A"}, // 9.경제통합수주금지사유코드
        	{code:"NA_PMI_SBJ_DSC", dsName:"ds_na_pmi_sbj", selecttype:"S"}, 	// 10.경제통합약정과목구분코드
        	{code:"STL_FDT_BASCD", dsName:"ds_str_fdt_bascd", selecttype:"S"}, 	// 11.결제기일기준코드
        	{code:"SSDYRT_BASCD", dsName:"ds_ssdyrt_bascd", selecttype:"S"}, 	// 12.장려금률기준코드
        	{code:"BZ_METH_DSC", dsName:"ds_bz_meth_dsc", selecttype:"S"} 		// 13.사업방식구분코드
        ];

        
        this.fn_afterFormOnload = function() //onload
        {
        	this.comboinit(comboparam);
        	
        	// 초기 콤보박스
        	this.cbo_CSER_CTR_TPC.set_value(4); 			// 계약유형
        	this.cbo_RGD_AMN_DSC.set_value(3); 				// 반품관리구분
        	this.cbo_STL_FDT_BASCD.set_value(1); 			// 결제기일기준
        	this.cbo_NA_PMI_SBJ_DSC.set_value(930);			// 약정과목구분
        	this.cbo_BZ_METH_DSC.set_value(1);				// 사업방식구분
        	this.cbo_SPY_TPC.set_value(1);					// 공급유형
        	this.cbo_TR_STOP_RSNC.set_value(00);			// 거래중지사유코드
        	this.cbo_CTR_CLO_RSNC.set_value(00);			// 계약해지사유코드
        	this.cbo_NA_ODR_FBID_RSNC.set_value(00);		// 발주금지사유코드
        	this.cbo_NA_RVO_FBID_RSNC.set_value(00);		// 수주금지사유코드
        	this.cbo_SSDY_PY_PTM_DSC.set_value(0);			// 장려금지급시점구분코드
        	this.cbo_SSDYRT_BASCD.set_value(1);
        	this.cbo_SPLR_BNK_C.set_value(11);
        	
        	this.cbo_ROTS_FLEX_PR_APL_YN.set_value(0);
        	this.cbo_BYNG_UPR_MOD_YN.set_value(0);
        	this.mae_LDTM_DDS.set_value("1");
        	var todays = this.gfn_today('yyyyMMdd');
        	this.cal_CTR_ST_DT.set_value(todays);			// 계약시작일
        	var plustodays = this.gfn_addDate(todays,365);
        	this.cal_CTR_ED_DT.set_value(plustodays);		// 계약종료일
        	this.edt_SPLR_CTR_CHRRNM.set_value(TRPL_UNM);	// 로그인 사용자명
        	this.edt_RQR_DT_TODAY.set_value(todays);
        	// 초기 설정
        	this.initdata();
        	
        }

        //전역변수로 변환한 데이터셋 값들을 입력
        this.comboinit = function(comboparam)
        {
        	var param = comboparam;
        	var sCode = "";
        	var sOutDs = "";

        	for (var idx in param) 
            {
        		var sCodeOrg   = param[idx].code;
        		var sOutDsOrg  = param[idx].dsName;
        		
        		var arrDsNm = new Array(2);
        		if(sCodeOrg.indexOf("$") != -1){
        			arrDsNm = sCodeOrg.split("$");
        		}else{
        			arrDsNm[0] = sCodeOrg;
        		}		
        		
        		if(idx == 0) {
        			sCode  = sCodeOrg;			
        			sOutDs = sOutDsOrg+"="+arrDsNm[0];		
        		}else{			
        			sCode += ","+sCodeOrg;
        			sOutDs += " "+sOutDsOrg+"="+arrDsNm[0];			
        		}	
        	}
        		
        	var paramList = "codeKeys="+sCode;
        	  
        	var sSvcID        = "getCodeList";//통신아이디
        	var sURL          = "svc::rest/common/getCodeList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = sOutDs;   //화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = paramList;// 파라미터
        	var sCallbackFunc = "combo_callback";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType, true);
        }

        this.combo_callback = function(svcID,nCD,sMSG)
        {	
        	if(nCD < 0){
        		this.alert('에러');
        		return;
        	}else{
        		this.gfn_setComboHead(comboparam);
        		var ds = this.ds_rel_prg_stsc;
        		var nRow = ds.addRow();
        		ds.setColumn(nRow,"SIMP_CNM","신규입력");
        		this.cbo_TR_REL_PRG_STSC.set_index(nRow);
        	}
        }

        // 화면 생성 시 초기 값 설정
        this.initdata = function()
        {
        	var params = "mbcoType="+application.gv_mbcoType	//로그인 정보
        				+" TRPL_C="+TRPL_C;
        	
        	var sSvcID        = "p_initdata";//통신아이디
        	var sURL          = "svc::rest/pds/partner/Trade/retrievePopData";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_RQR_NA_TRPL_C=ds_RQR_NA_TRPL_C";
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType 	  = "U"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        //공급자 정보 조회
        this.initcif = function()
        {
        	var params		  = "TRPL_C="+TRPL_C
        						+" separator=0";
        	var sSvcID        = "p_initcif";//통신아이디
        	var sURL          = "svc::rest/pds/partner/Trade/retrieveDirectTrade";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_CIF_INFO=ds_CIF_INFO";
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType 	  = "U"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        // 저장
        this.btn_save00_onclick = function(obj,e)
        {
        	var bOk = application.confirm('[자체 거래관계 (신규/변경) 요청] 등록을 하시겠습니까? \n\n\n※ 수요처 사업장의 승인을 득해야만 거래관계가 성립됩니다.');
        	if(bOk != true){return;}
        	
        	var json = this.getParamJson(this.components);
        	json.separator=1;
        	json.SPLR_CTR_CHRR_TELNO = this.cbo_tel_main01.text+"-"+this.mae_tel_number02.value+"-"+this.mae_tel_number03.value; // 공급자 집전화
        	json.SPLR_CTR_CHRR_MPNO = this.cbo_tel_main00.text+"-"+this.mae_tel_number00.value+"-"+this.mae_tel_number01.value; // 공급자 핸드폰
        	json.CSER_CTR_CHRR_TELNO = this.cbo_tel_main03.text+"-"+this.mae_tel_number06.value+"-"+this.mae_tel_number07.value; // 수요자 집전화	
        	json.CSER_CTR_CHRR_MPNO = this.cbo_tel_main02.text+"-"+this.mae_tel_number04.value+"-"+this.mae_tel_number05.value; // 수요자 핸드폰
        	var params = this.getParamJsonToString(json);
        	
        	var today = this.gfn_today("yyyy-MM-dd");
        	if (this.rdo_trpl_c00.value=="2") {
        		if(this.gfn_getDiffDay(this.cal_RQR_DT.value,today) >= 0){
        			alert('예약요청일자는 당일 이후로 설정하세요.');
        			return;
        		}
        	}
        	if (this.gfn_getDiffDay(this.cal_RQR_DT.value,today) > -7 && this.gfn_getDiffDay(this.cal_RQR_DT.value,today) != null) {
        		alert('예약요청일자는 당일부터 7일 이내로 설정하세요.');
        		return;
        	}
        	for(keys in json){
        		var values = json[keys];
        		if(!values){
        			if(keys == "CSER_NA_TRPL_C"){
        				this.alert('수요처 사업장 코드를 확인하세요.');
        				return;
        			}
        			if(keys == "CSER_CTR_CHRRNM"){
        				this.alert('수주처 담당자를 입력하세요.');
        				return;
        			}
        			if(keys == "SPY_TPC"){
        				this.alert('공급유형을 선택하세요.');
        				return;
        			}
        		}else if(values){
        			if(keys == "CSER_NA_TRPL_C"){
        				if(json["CSER_NA_TRPL_C"] == json["SPLR_NA_TRPL_C"]){
        					this.alert('공급처와 수요처가 동일합니다.');
        					return;
        				}	
        			}
        			if(json["CSER_CTR_TPC"] != 4){
        				this.alert('계약유형은 4.자체 만 입력가능합니다.');
        				return;
        			}
        		}
        	}
        	this.getParamJsonToDs("ds_master_datas", json, false);
        	var sSvcID        = "p_update";//통신아이디
        	var sURL          = "svc::rest/pds/partner/Trade/retrieveDirectTrade";// 호출할 서버 페이지 주소
        	var sInDatasets   = "ds_master_datas=ds_master_datas:A";//보내는데이터셋
        	var sOutDatasets  = "ds_master_data=ds_master_data";
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType 	  = "U"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        this.fn_callback = function(svcID,nCD,sMSG)
        {
        	if(svcID=="p_initdata" && sMSG=="success.init.combo")
        	{
        		this.cbo_RQR_NA_TRPL_C.set_index(0);
        		this.cbo_SPLR_NA_TRPL_C.set_index(0);
        		
        		this.ds_adjpl_na_trpl_c.addRow();
        		this.ds_adjpl_na_trpl_c.setColumn(0,"TRPL_C",this.ds_RQR_NA_TRPL_C.getColumn(0,"NA_TRPL_C"));
        		this.ds_adjpl_na_trpl_c.setColumn(0,"ADJPL_NM",this.ds_RQR_NA_TRPL_C.getColumn(0,"CLNTNM"));
        		this.cbo_SPLR_NA_TRPL_C.set_index(0);
        		this.initcif();
        	}
        	if(svcID=="p_initcif"){
        		this.edt_SPYPL_HOFF_NA_TRPL_C.set_value(this.ds_CIF_INFO.getColumn(0,"NA_TRPL_C"));
        		this.edt_data01.set_value(this.ds_CIF_INFO.getColumn(0,"CLNTNM"));
        		this.cbo_tel_main00.set_value(this.ds_CIF_INFO.getColumn(0,"MPSVNO"));
        		this.mae_tel_number00.set_value(this.ds_CIF_INFO.getColumn(0,"MPHNO"));
        		this.mae_tel_number01.set_value(this.ds_CIF_INFO.getColumn(0,"MPSQNO"));
        		this.cbo_tel_main01.set_value(this.ds_CIF_INFO.getColumn(0,"ATEL"));
        		this.mae_tel_number02.set_value(this.ds_CIF_INFO.getColumn(0,"HTEL"));
        		this.mae_tel_number03.set_value(this.ds_CIF_INFO.getColumn(0,"STEL"));
        	}
        	if(svcID=="p_update" && sMSG=="success.update.data")
        	{
        		this.alert(this.gfn_getTextMessage("result.message.save.success"));
        	}
        	if(svcID=="p_search" && sMSG=="success.search.data")
        	{
        		this.edt_INIT_DATA.set_value("1");
        		
        	}
        }

        //요청거래관계검색 팝업 창 호출
        this.btn_str_sch00_onclick = function(obj,e)
        {
        	var pop_trpl = this.cbo_RQR_NA_TRPL_C.value;
        	var pop_trplnm = this.cbo_RQR_NA_TRPL_C.text;
        	// trplc = 로그인 사업장코드 , trplnm = 로그인 사업장명
        	var oArg = {paramMode:"A", dsArg:this.ds_master_data, trplc:pop_trpl, trplnm:pop_trplnm};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "req_popupAfter";    
        	this.gfn_openPopup("popId","PDS.PARTNER::VAN_DS_SC_1301.xfdl",oArg,sOption,sPopupCallBack);	    
        }

        // 팝업창 그리드에서 값 선택 후
        this.req_popupAfter = function(strId,strVal)
        {	
        	if(strVal!=undefined){
        		var strarr = strVal.split(",");
        		this.edt_RQR_NA_TRPL_CODE.set_value(strarr[0]);			// 요청경제통합거래처코드
        		this.edt_RQR_NA_TEAM_C.set_value(strarr[1]);			// 요청경제통합팀코드
        		this.edt_RQR_DT.set_value(strarr[2]);					// 요청일자
        		this.edt_TR_RQR_SQNO.set_value(strarr[3]);				// 거래요청일련번호
        		
        		this.edt_CSER_NA_TRPL_C.set_value(strarr[4]);			// 수요처사업장
        		this.edt_data04.set_value(strarr[5]);					// 수요처사업장명
        		this.edt_CSER_NA_TEAM_NM.set_value(strarr[6]+' '+strarr[7]);
        		this.edt_CSER_NA_TEAM_C.set_value(strarr[6]);
        		
        		// 수요처정산처
        		this.ds_cser_adjpl_trpl.setColumn(0,"data","["+strarr[4]+"]"+strarr[5]);	
        		this.ds_cser_adjpl_trpl.setColumn(0,"code",strarr[4]);
        		this.cbo_CSER_ADJPL_NA_TRPL_C.set_value(strarr[4]);
        		this.ds_cser_adjpl_team.setColumn(0,"data","["+strarr[6]+"]"+strarr[7]);
        		this.ds_cser_adjpl_team.setColumn(0,"code",strarr[6]);
        		this.cbo_CSER_ADJPL_NA_TEAM_C.set_value(strarr[6]);
        		
        		var params ="separator="+3
        					+" RQR_NA_TRPL_C="+this.edt_RQR_NA_TRPL_CODE.value
        					+" RQR_NA_TEAM_C="+this.edt_RQR_NA_TEAM_C.value
        					+" RQR_DT="+this.edt_RQR_DT.value
        					+" TR_RQR_SQNO="+this.edt_TR_RQR_SQNO.value;
        		
        		var sSvcID        = "p_search";//통신아이디
        		var sURL          = "svc::rest/pds/partner/Trade/retrieveDirectTrade";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_master_data=ds_master_data";
        		var sArgument     = params;// 파라미터
        		var sCallbackFunc = "fn_callback";//콜백
        		var tranType 	  = "U"; // U:저장/삭제, S:조회
        		
        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        	}
        }

        //적용요청 메뉴의 예약요청일 visible 유무
        this.rdo_trpl_c00_onitemchanged = function(obj,e)
        {
        	//승인일반영
        	if(this.rdo_trpl_c00.value == 1){
        		this.sta_apply_name00.set_visible(false);
        		this.cal_RQR_DT.set_visible(false);
        	//지정일반영
        	}else if(this.rdo_trpl_c00.value == 2){
        		this.sta_apply_name00.set_visible(true);
        		this.cal_RQR_DT.set_visible(true);
        	}
        }
        //초기화 버튼
        this.btn_clear00_onclick = function(obj,e)
        {
        	this.reload();
        }
        //수요처사업장
        this.btn_popup00_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"U", dsArg:this.Dataset00, sepVal:'1300'};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("rvopl_trpl","PDS.PARTNER::VAN_DS_SC_1302.xfdl",oArg,sOption,sPopupCallBack);
        }
        //바이어
        this.btn_popup01_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"U", dsArg:this.Dataset00};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("src_buyer","POPUP::POPUP_SRC_BUYER.xfdl",oArg,sOption,sPopupCallBack);	
        }
        this.fn_popupAfter = function(strId,strVal)
        {
        	if(strVal != undefined){
        		var strarr = strVal.split(",");
        		if(strId == "rvopl_trpl"){
        			this.edt_CSER_NA_TRPL_C.set_value(strarr[0]);	//사업장코드
        			this.edt_data04.set_value(strarr[3]);			//사업장명
        			this.edt_CSER_NA_TEAM_C.set_value(strarr[9]);
        			this.edt_CSER_NA_TEAM_NM.set_value("["+strarr[9]+"]"+strarr[10]);
        			
        			this.cbo_NA_PMI_SBJ_DSC.set_value(249);
        			
        			// 수요처정산처
        			this.ds_cser_adjpl_trpl.addRow();
        			this.ds_cser_adjpl_trpl.setColumn(0,"data","["+strarr[0]+"]"+strarr[3]);
        			this.ds_cser_adjpl_trpl.setColumn(0,"code",strarr[0]);
        			this.cbo_CSER_ADJPL_NA_TRPL_C.set_value(strarr[0]);
        			this.ds_cser_adjpl_team.addRow();
        			this.ds_cser_adjpl_team.setColumn(0,"data","["+strarr[9]+"]"+strarr[10]);
        			this.ds_cser_adjpl_team.setColumn(0,"code",strarr[9]);
        			this.cbo_CSER_ADJPL_NA_TEAM_C.set_value(strarr[9]);
        		}
        		if(strId == "src_buyer"){
        			this.edt_ODRPL_BUYER_ENO.set_value(strarr[0]);
        			this.edt_data08.set_value(strarr[1]);
        		}
        	}
        }

        
        this.cbo_RQR_NA_TRPL_C_onitemchanged = function(obj,e)
        {
        	var ds_rqr = this.ds_RQR_NA_TRPL_C;
        	this.ds_adjpl_na_trpl_c.setColumn(0,"TRPL_C",this.ds_RQR_NA_TRPL_C.getColumn(this.cbo_RQR_NA_TRPL_C.index,"NA_TRPL_C"));
        	this.ds_adjpl_na_trpl_c.setColumn(0,"ADJPL_NM",this.ds_RQR_NA_TRPL_C.getColumn(this.cbo_RQR_NA_TRPL_C.index,"CLNTNM"));
        	this.cbo_SPLR_NA_TRPL_C.set_index(0);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.cbo_RQR_NA_TRPL_C.addEventHandler("onitemchanged", this.cbo_RQR_NA_TRPL_C_onitemchanged, this);
            this.btn_clear00.addEventHandler("onclick", this.btn_clear00_onclick, this);
            this.btn_save00.addEventHandler("onclick", this.btn_save00_onclick, this);
            this.btn_str_sch00.addEventHandler("onclick", this.btn_str_sch00_onclick, this);
            this.rdo_trpl_c00.addEventHandler("onitemchanged", this.rdo_trpl_c00_onitemchanged, this);
            this.btn_popup01.addEventHandler("onclick", this.btn_popup01_onclick, this);
            this.edt_CSER_NA_TRPL_C.addEventHandler("oneditclick", this.edt_data03_oneditclick, this);
            this.btn_popup00.addEventHandler("onclick", this.btn_popup00_onclick, this);
            this.cbo_tel_main02.addEventHandler("onitemchanged", this.cbo_tel_main02_onitemchanged, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1300.xfdl");
        this.loadPreloadList();
       
    };
}
)();
