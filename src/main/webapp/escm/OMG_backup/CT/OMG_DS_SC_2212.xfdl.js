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
                this.set_name("OMG_DS_SC_2110");
                this.set_titletext("계약서최종서명");
                this._setFormPosition(0,0,993,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_rsclist", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"MN_CTRW_KD\" type=\"STRING\" size=\"256\"/><Column id=\"MN_CTRW_KD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"MTALNM\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_DRUP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"COLB_COMP_SGNT_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_APV_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"STS\" type=\"STRING\" size=\"256\"/><Column id=\"STS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STS_CANCEL\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_NA_TRPL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_CHRR_MTALNM\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_CHRR_REPMN\" type=\"STRING\" size=\"256\"/><Column id=\"SEAL_OMIT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"MN_CTRW_DSN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sts", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_C_EXPL\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mnCtrwKd", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_C_EXPL\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_authCheck", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"AUTH_CHECK\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mnCtrwKdMC", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TYPE\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CD_M\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CD_D\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mnCtrwKdMC_Temp", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CD_TYPE\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CD_M\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CD_D\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_buyerCode", this);
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"32\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"32\"/><Column id=\"SIMP_C_EXPL\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_chiefCheck", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BIZ_NUMBER\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_authBranch", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"AUTH_CHECK\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_seal", this);
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_SEAL_FLNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_page", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CURRENT_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TOTAL_ROW_COUNT\">0</Col><Col id=\"PAGE_SIZE\">10</Col><Col id=\"CURRENT_PAGE\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_excel", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"MN_CTRW_KD\" type=\"STRING\" size=\"256\"/><Column id=\"MN_CTRW_KD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"MTALNM\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_DRUP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"COLB_COMP_SGNT_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_APV_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"STS\" type=\"STRING\" size=\"256\"/><Column id=\"STS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STS_CANCEL\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_NA_TRPL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_CHRR_MTALNM\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_CHRR_REPMN\" type=\"STRING\" size=\"256\"/><Column id=\"SEAL_OMIT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_BZNO\" type=\"STRING\" size=\"256\"/><Column id=\"MN_CTRW_DSN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "99", "15", null, this);
            obj.set_taborder("73");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "382", "10", "118", "21", null, null, this.div_search);
            obj.set_taborder("46");
            obj.set_text("메인계약서종류");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static131", "absolute", "242", "41", "10", "21", null, null, this.div_search);
            obj.set_taborder("50");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_from", "absolute", "141", "36", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("51");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("cal_to", "absolute", "252", "36", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("52");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static02", "absolute", "391", "40", "79", "21", null, null, this.div_search);
            obj.set_taborder("59");
            obj.set_text("계약상태");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_contDay", "absolute", "15", "36", "106", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_contDay_innerdataset = new Dataset("cbo_contDay_innerdataset", this.div_search.cbo_contDay);
            cbo_contDay_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">계약서변경일</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">계약시작일</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">계약만료일</Col></Row></Rows>");
            obj.set_innerdataset(cbo_contDay_innerdataset);
            obj.set_taborder("60");
            obj.set_value("0");
            obj.set_text("계약서변경일");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj = new Div("div_mnCtrwKd", "absolute", "507", "10", "211", "21", null, null, this.div_search);
            obj.set_taborder("62");
            obj.set_enable("false");
            obj.set_url("common::multiCheckCombo.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("div_sts", "absolute", "507", "40", "211", "21", null, null, this.div_search);
            obj.set_taborder("63");
            obj.set_visible("false");
            obj.set_url("common::multiCheckCombo.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "0", "0", "414", "20", null, null, this.div_search);
            obj.set_taborder("65");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_DT_YN", "absolute", "852", "67", "11.68%", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_DT_YN_innerdataset = new Dataset("rdo_DT_YN_innerdataset", this.div_search.rdo_DT_YN);
            rdo_DT_YN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">여</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">부</Col></Row></Rows>");
            obj.set_innerdataset(rdo_DT_YN_innerdataset);
            obj.set_taborder("66");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_visible("true");
            obj = new Edit("edt_userId", "absolute", "507", "67", "211", "21", null, null, this.div_search);
            obj.set_taborder("69");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_mail", "absolute", "739", "10", "156", "21", null, null, this.div_search);
            obj.set_taborder("76");
            obj.set_text("안내메일 내용 확인");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "739", "67", "113", "21", null, null, this.div_search);
            obj.set_taborder("70");
            obj.set_text("계약담당자 선택");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_kd", "absolute", "140", "68", "211", "21", null, null, this.div_search);
            obj.set_taborder("71");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_kd", "absolute", "15", "68", "106", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_kd_innerdataset = new Dataset("cbo_kd_innerdataset", this.div_search.cbo_kd);
            cbo_kd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">계약자상호</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">GLN 코드</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">-선택(협력업체)-</Col></Row></Rows>");
            obj.set_innerdataset(cbo_kd_innerdataset);
            obj.set_taborder("72");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("0");
            obj.set_text("-선택(협력업체)-");
            obj.set_index("2");
            obj = new Combo("cbo_mnCtrwKdM2", "absolute", "140", "7", "211", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("73");
            obj.set_innerdataset("ds_buyerCode");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj = new Static("Static04", "absolute", "15", "8", "118", "21", null, null, this.div_search);
            obj.set_taborder("74");
            obj.set_text("계약서 구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("buyer_kd", "absolute", "391", "68", "106", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var buyer_kd_innerdataset = new Dataset("buyer_kd_innerdataset", this.div_search.buyer_kd);
            buyer_kd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">사번</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">성명</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">소속GLN</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">-선택(계약담당자)-</Col></Row></Rows>");
            obj.set_innerdataset(buyer_kd_innerdataset);
            obj.set_taborder("75");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("0");
            obj.set_text("-선택(계약담당자)-");
            obj.set_index("2");

            obj = new Button("btn_history", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("11");
            obj.set_text("이력");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "922", "21", "56", "8", null, null, this);
            obj.set_taborder("56");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "978", "0", "15", "490", null, null, this);
            obj.set_taborder("57");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("79");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "142", "61", "103", "5", null, null, this);
            obj.set_taborder("82");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "141", "87", "103", "10", null, null, this);
            obj.set_taborder("83");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "118", null, this);
            obj.set_taborder("84");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "353", "71", "62", "14", null, null, this);
            obj.set_taborder("86");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_chk", "absolute", "1033", "0", "83", "15", null, null, this);
            obj.set_taborder("87");
            obj.set_value("0");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web_downExcel", "absolute", "1024", "32", "125", "14", null, null, this);
            obj.set_taborder("88");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "142", "118", "103", "10", null, null, this);
            obj.set_taborder("90");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file_add", "absolute", null, "94", "65", "21", "-277", null, this);
            obj.set_taborder("91");
            obj.set_text("파일 추가");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel", "absolute", null, "94", "41", "21", "-211", null, this);
            obj.set_taborder("92");
            obj.set_text("해지");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_aprv_all", "absolute", null, "0", "72", "21", "161", null, this);
            obj.set_taborder("93");
            obj.set_text("최종승인");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Plugin("Plugin00", "absolute", "12.49%", "6", null, "19", "74.12%", null, this);
            obj.setProperty("visible", "false");
            obj.setProperty("classid", "{55D9860A-AB9C-44A1-BB74-75AF7F805333}");
            obj.setProperty("taborder", "94");
            this.addChild(obj.name, obj);

            obj = new Plugin("TSXMLToolkit", "absolute", "265", "5", null, "21", "595", null, this);
            obj.setProperty("visible", "false");
            obj.setProperty("classid", "{BBC1A21F-05A2-44ED-B67E-E7C762F0BE23}");
            obj.setProperty("taborder", "95");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "126", null, null, "15", "0", this);
            obj.set_taborder("69");
            this.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "-93", "228", "21", null, null, this.div_list);
            obj.set_taborder("2");
            obj.set_text("상담 신청 조회");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_rsclist", "absolute", "0", "40", null, null, "0", "50", this.div_list);
            obj.set_taborder("1");
            obj.set_binddataset("ds_rsclist");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"40\"/><Column size=\"109\"/><Column size=\"208\"/><Column size=\"155\"/><Column size=\"102\"/><Column size=\"135\"/><Column size=\"200\"/><Column size=\"131\"/><Column size=\"167\"/><Column size=\"139\"/><Column size=\"134\"/><Column size=\"71\"/><Column size=\"106\"/><Column size=\"133\"/><Column size=\"108\"/><Column size=\"188\"/><Column size=\"125\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"계약서번호\"/><Cell col=\"3\" text=\"계약서종류\"/><Cell col=\"4\" text=\"법인명\"/><Cell col=\"5\" text=\"법인대표자명\"/><Cell col=\"6\" text=\"거래처코드\"/><Cell col=\"7\" text=\"계약자상호\"/><Cell col=\"8\" text=\"계약구분\"/><Cell col=\"9\" text=\"계약시작일\"/><Cell col=\"10\" text=\"협력업체 서명시간\"/><Cell col=\"11\" text=\"계약담당자 승인시간\"/><Cell col=\"12\" text=\"해지여부\"/><Cell col=\"13\" text=\"상태\"/><Cell col=\"14\" text=\"계약서 변경사항\"/><Cell col=\"15\" text=\"계약담당자명\"/><Cell col=\"16\" text=\"계약담당자소속\"/><Cell col=\"17\" text=\"계약담당사업자번호\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:ELT_CTRW_NO\"/><Cell col=\"3\" displaytype=\"normal\" text=\"bind:MN_CTRW_KD_NM\" combodataset=\"ds_contstyle\" combocodecol=\"code\" combodatacol=\"style\"/><Cell col=\"4\" text=\"bind:CTR_CHRR_MTALNM\"/><Cell col=\"5\" text=\"bind:CTR_CHRR_REPMN\"/><Cell col=\"6\" style=\"align:center;\" text=\"bind:NA_TRPL_C\"/><Cell col=\"7\" text=\"bind:MTALNM\"/><Cell col=\"8\" text=\"bind:MN_CTRW_DSN\"/><Cell col=\"9\" text=\"bind:CTR_DT\" mask=\"@@@@-@@-@@~@@@@-@@-@@\" calendardisplay=\"display\"/><Cell col=\"10\" displaytype=\"normal\" text=\"bind:COLB_COMP_SGNT_DTM\" mask=\"expr:COLB_COMP_SGNT_DTM == null ?'' : '@@@@-@@-@@ @@:@@:@@'\" maskchar=\" \" calendardisplay=\"display\"/><Cell col=\"11\" text=\"bind:BUYER_APV_DTM\" mask=\"expr:BUYER_APV_DTM == null ? '' : '@@@@-@@-@@ @@:@@:@@'\" maskchar=\" \" calendardisplay=\"display\"/><Cell col=\"12\" text=\"bind:STS_CANCEL\"/><Cell col=\"13\" text=\"expr:STS_EXP == 'Y' ? '지연계약서' : STS_NM\"/><Cell col=\"14\" text=\"bind:CHG_NM\"/><Cell col=\"15\" text=\"bind:BUYER_NM\"/><Cell col=\"16\" text=\"bind:BUYER_NA_TRPL_NM\"/><Cell col=\"17\" text=\"bind:BUYER_BZNO\" mask=\"###-##-#####\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btu_div", "absolute", "46.83%", "0", "63", "12", null, null, this.div_list);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_page01", "absolute", "28.43%", null, "340", "30", null, "10", this.div_list);
            obj.set_taborder("15");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list.addChild(obj.name, obj);

            obj = new Button("btn_grant", "absolute", null, "0", "103", "21", "250", null, this);
            obj.set_taborder("96");
            obj.set_text("사용자 권한관리");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00", "absolute", "1003", "130", "145", "44", null, null, this);
            obj.style.set_background("azure");
            this.addChild(obj.name, obj);
            obj = new ListBox("ListBox02", "absolute", "0", "0", "145", "44", null, null, this.PopupDiv00);
            this.PopupDiv00.addChild(obj.name, obj);
            var ListBox02_innerdataset = new Dataset("ListBox02_innerdataset", this.PopupDiv00.ListBox02);
            ListBox02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전자계약 권한관리</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">직매장 권한관리</Col></Row></Rows>");
            obj.set_innerdataset(ListBox02_innerdataset);
            obj.set_taborder("0");
            obj.set_scrollbars("autovert");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");

            obj = new Grid("grd_excel", "absolute", "-2", "526", null, null, "8", "-152", this);
            obj.set_taborder("97");
            obj.set_binddataset("ds_excel");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"109\"/><Column size=\"208\"/><Column size=\"135\"/><Column size=\"200\"/><Column size=\"167\"/><Column size=\"152\"/><Column size=\"163\"/><Column size=\"106\"/><Column size=\"133\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell style=\"font:bold 11 arial;linespace:12;\" text=\"바이어명\"/><Cell col=\"1\" style=\"font:bold 11 arial;linespace:12;\" text=\"계약서종류\"/><Cell col=\"2\" style=\"font:bold 11 arial;linespace:12;\" text=\"거래처코드\"/><Cell col=\"3\" style=\"font:bold 11 arial;linespace:12;\" text=\"계약자상호\"/><Cell col=\"4\" style=\"font:bold 11 arial;linespace:12;\" text=\"계약시작일\"/><Cell col=\"5\" style=\"font:bold 11 arial;linespace:12;\" text=\"협력업체 서명시간\"/><Cell col=\"6\" style=\"font:bold 11 arial;linespace:12;\" text=\"바이어 승인시간\"/><Cell col=\"7\" style=\"font:bold 11 arial;linespace:12;\" text=\"상태\"/><Cell col=\"8\" style=\"font:bold 11 arial;linespace:12;\" text=\"계약서 변경사항\"/></Band><Band id=\"body\"><Cell text=\"bind:BUYER_NM\"/><Cell col=\"1\" displaytype=\"normal\" text=\"bind:MN_CTRW_KD_NM\" combodataset=\"ds_contstyle\" combocodecol=\"code\" combodatacol=\"style\"/><Cell col=\"2\" style=\"align:center;\" text=\"bind:NA_TRPL_C\"/><Cell col=\"3\" text=\"bind:MTALNM\"/><Cell col=\"4\" text=\"bind:CTR_DT\" mask=\"@@@@-@@-@@~@@@@-@@-@@\" calendardisplay=\"display\"/><Cell col=\"5\" displaytype=\"normal\" text=\"bind:COLB_COMP_SGNT_DTM\" mask=\"expr:COLB_COMP_SGNT_DTM == null ?'' : '@@@@-@@-@@ @@:@@:@@'\" maskchar=\" \" calendardisplay=\"display\"/><Cell col=\"6\" text=\"bind:BUYER_APV_DTM\" mask=\"expr:BUYER_APV_DTM == null ? '' : '@@@@-@@-@@ @@:@@:@@'\" maskchar=\" \" calendardisplay=\"display\"/><Cell col=\"7\" text=\"expr:STS_EXP == 'Y' ? '지연계약서' : STS_NM\"/><Cell col=\"8\" text=\"bind:CHG_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_confirm", "absolute", null, "94", "81", "21", "-156", null, this);
            obj.set_taborder("98");
            obj.set_text("계약서 확인");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 211, 21, this.div_search.div_mnCtrwKd,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("62");
            		p.set_url("common::multiCheckCombo.xfdl");
            		p.set_enable("false");

            	}
            );
            this.div_search.div_mnCtrwKd.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 211, 21, this.div_search.div_sts,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("63");
            		p.set_url("common::multiCheckCombo.xfdl");
            		p.set_visible("false");

            	}
            );
            this.div_search.div_sts.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 99, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("73");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 978, 393, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("69");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 145, 45, this.PopupDiv00,
            	//-- Layout function
            	function(p) {
            		p.style.set_background("azure");

            	}
            );
            this.PopupDiv00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 993, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("계약서최종서명");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::multiCheckCombo.xfdl");
            this._addPreloadList("fdl", "common::multiCheckCombo.xfdl");
            this._addPreloadList("fdl", "common::location.xfdl");
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_2212.xfdl", "lib::comLib.xjs");
        this.addIncludeScript("OMG_DS_SC_2212.xfdl", "lib::comTSToolKit.xjs");
        this.addIncludeScript("OMG_DS_SC_2212.xfdl", "lib::comElt.xjs");
        this.registerScript("OMG_DS_SC_2212.xfdl", function() {
        //include "lib::comLib.xjs";
        //include "lib::comTSToolKit.xjs";
        //include "lib::comElt.xjs";

        this.chkDay ="";

        this.fv_sts = "9"; //전자 계약서 상태값
        this.fv_stsTemp = ""; //전자 계약서 상태값
        this.fv_stsNm = ""; //전자 계약서 상태값
        this.fv_stsNmTemp = ""; //전자 계약서 상태값
        this.fv_mnCtrwKd = ""; //전자 계약서 종류
        this.fv_mnCtrwKdTemp = ""; //전자 계약서 종류
        this.fv_mnCtrwKdNm = ""; //전자 계약서 종류
        this.fv_mnCtrwKdNmTemp = ""; //전자 계약서 종류
        this.isApprover = false; // 최종승인권자 여부

        var chkSeal = false;

        /* Form Load */
        this.OMG_DS_SC_2120_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj,e);

        	var param = [
        //        {code:"ELT_STS", dsName:"ds_sts", selecttype:""},
               {code:"MN_CTRW_KD", dsName:"ds_mnCtrwKd", selecttype:""}
            ];

        	this.gfn_setPortalCommonCode(param);
        	var toDay = this.gfn_today("yyyyMMdd");
        	this.chkDay = this.gfn_minusMonth(toDay, 1);

        	this.div_search.cal_from.set_value(this.chkDay);
        	this.div_search.cal_to.set_value(toDay);
        	this.div_search.edt_userId.set_value(application.gv_userId);
        	this.div_search.rdo_DT_YN.set_value("N");

        	// 권한획득 전 초기세팅(170927)
        	this.ds_authCheck.setColumn(0,"AUTH_CHECK","N");
        	this.btn_aprv_all.set_visible(false);

        	this.ds_chiefCheck.setColumn(0,"BIZ_NUMBER","");
        	// this.ds_authBranch.clearData();

        	this.div_list.grd_rsclist.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));

        	this.codeLoad();			// 바이어 구분하는 함수
        	this.getDS();				// 데이터셋 가져오기
        	//this.fn_checkChief();		// 점장 사업자번호 확인
        	//this.fn_checkBranch();	// 직매장여부 체크
        	this.gfn_checkEltAuth(obj, "eltCallback"); // 전자계약 권한체크(comElt.xjs)
        }

        /*
         * 전자계약 권한체크
         */
        this.eltCallback = function()
        {
        	if (!this.gfn_eltAvailable()) {
        		this.alert("하나로유통 직매장만 사용 가능한 메뉴 입니다.");
        		this.set_enable(false);
        	} else if (this.gfn_hasEltAuth("ELT_A1")) {
        		this.btn_aprv_all.set_visible(true);
        		this.isApprover = true;
        	}
        	/*
        	if (this.gfn_hasEltAuth("ELT_99")) {
        		this.btn_grant.set_visible(true);
        	}
        	*/
        }

        /*
         * 직매장 로그인 시 Y/N 리턴
         */
        this.fn_checkBranch = function()
        {
        	var sParams = "branch_dsc="+ "01"  // 대리점 구분 01 직매장
        				+ " mb_id=";
        	var sSvcID        = "branchCheck";
        	var sURL          = "svc::rest/pt/checkBranch";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_authBranch=ds_authBranch";
        	var sArgument     =  sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        //gfn_setCommonCode처리 후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        	//상태값  정의 -> 사용하는 상태값만 정의
        // 	for (var i = this.ds_sts.rowcount-1 ; 0 <= i ; i--) {
        // 		if (this.ds_sts.getColumn(i, "SIMP_C") == "6") {
        // 			this.ds_sts.deleteRow(i);
        // 		}
        // 		if (this.ds_sts.getColumn(i, "SIMP_C") == "7") {
        // 			this.ds_sts.deleteRow(i);
        // 		}
        // 		if (this.ds_sts.getColumn(i, "SIMP_C") == "5") {
        // 			this.ds_sts.deleteRow(i);
        // 		}
        // 	}

        // 	this.div_search.div_sts.setFunctionName("fn_afterCallSts"); //후처리함수 선언

        	// 선택사항. 선언안하면 기본으로 설정됨. Width:140, displayrowcount:5
        // 	this.div_search.div_sts._setWidth(180);                  //가로사이즈 설정(단, 140보다 작으면 기본사이즈인 140으로 설정됨)
        // 	this.div_search.div_sts._setDisplayCount(9);            //보여줄 Row수. Combo의 displayrowcount와 동일.
        // 	this.div_search.div_sts._binddataset(this.ds_sts,"SIMP_C","SIMP_CNM");

        // 	this.div_search.div_mnCtrwKd.setFunctionName("fn_afterCall"); //후처리함수 선언

        // 	// 선택사항. 선언안하면 기본으로 설정됨. Width:140, displayrowcount:5
        // 	this.div_search.div_mnCtrwKd._setWidth(250);                  //가로사이즈 설정(단, 140보다 작으면 기본사이즈인 140으로 설정됨)
        // 	this.div_search.div_mnCtrwKd._setDisplayCount(9);            //보여줄 Row수. Combo의 displayrowcount와 동일.

        // 	this.div_search.div_mnCtrwKd._binddataset(this.ds_mnCtrwKd,"SIMP_C","SIMP_CNM");

        	//콤보에 최상단Row보이도록 설정
        	//this.Combo01.set_index(0);

        	// 권한 확인(170927)
        	//this.fn_checkAuth();
        }

        /* 바이어 구분하기  */
        this.codeLoad = function()
        {
        	var sSvcID        = "codeLoad";
        	var sURL          = "svc::rest/ct/eltctrw/retrieveEltctrwCDList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_buyerCode=ds_buyerCode" ;
        	var sArgument     = "SIMP_TPC=ELT_DEPT_DSC";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        // 모든 계약서들의 데이터셋을 불러올 함수
        this.getDS = function()
        {
        	var params = "";
        	/*
        	if (!chkSeal) {
        		params = "SEAL=Y";
        		chkSeal = true;
        	}
        	*/

        	var sSvcID        = "getDS";
        	var sURL          = "svc::rest/ct/eltctrw/retrieveEltctrwDSList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_mnCtrwKdMC=ds_mnCtrwKdMC"; // ds_seal=ds_seal
        	var sArgument     = params;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        // 바이어 코드별 해당 데이터셋 뽑아오기
        this.fn_codeDSC = function(param1)
        {
        	var ctype;
        	var cdm;
        	var cdd;
        	var simpcnm;
        	
        	// 안내메일 확인버튼 표시(상품본부 한정)
        	this.div_search.btn_mail.set_visible(param1 == "11" || param1 == "15" );

        	for (var i = 0; i < this.ds_mnCtrwKdMC.rowcount; i++) {
        		cdm = this.ds_mnCtrwKdMC.getColumn(i, "CD_M");  /*Dataset 값을 가져옴. */
        		cdd = this.ds_mnCtrwKdMC.getColumn(i, "CD_D");
        		ctype = this.ds_mnCtrwKdMC.getColumn(i, "CD_TYPE");

        		if (cdm == param1 && ctype == 'MN_CTRW_KD') {
        			simpcnm = this.ds_mnCtrwKdMC.getColumn(i, "SIMP_CNM");

        			this.ds_mnCtrwKdMC_Temp.addRow();
        			this.ds_mnCtrwKdMC_Temp.setColumn(this.ds_mnCtrwKdMC_Temp.rowposition, "CD_TYPE", ctype); /*Dataset 에 값을 셋팅함 */
        			this.ds_mnCtrwKdMC_Temp.setColumn(this.ds_mnCtrwKdMC_Temp.rowposition, "CD_M", cdm);
        			this.ds_mnCtrwKdMC_Temp.setColumn(this.ds_mnCtrwKdMC_Temp.rowposition, "CD_D", cdd);
        			this.ds_mnCtrwKdMC_Temp.setColumn(this.ds_mnCtrwKdMC_Temp.rowposition, "SIMP_CNM", simpcnm);
        		}
        	}
        	var dsrow = this.ds_mnCtrwKdMC_Temp.rowcount; // 데이터셋의 크기
        	//	alert('줄 수 : ' + dsrow);

        	this.div_search.div_mnCtrwKd.setFunctionName("fn_afterCall"); //후처리함수 선언
        	this.div_search.div_mnCtrwKd._setWidth(250);
        	this.div_search.div_mnCtrwKd._setDisplayCount(dsrow);            //보여줄 Row수. Combo의 displayrowcount와 동일.
        	this.div_search.div_mnCtrwKd._binddataset(this.ds_mnCtrwKdMC_Temp,"CD_D","SIMP_CNM");
        }

        //멀티 콤보  - > 상태값
        this.fn_afterCallSts = function (sVal)
        {
        	if (sVal.rowcount == 0) {
        		this.fv_sts = "";
        		this.fv_stsNm = "";
        	} else {
        		for (var i = 0 ; i < sVal.rowcount; i++) {
        			if (i == 0) {
        				this.fv_sts = sVal.getColumn(i, "SIMP_C") ;
        				this.fv_stsNm = sVal.getColumn(i, "SIMP_CNM") ;
        			} else {
        				this.fv_sts += "."+sVal.getColumn(i, "SIMP_C") ;
        				this.fv_stsNm += ","+sVal.getColumn(i, "SIMP_CNM") ;
        			}
        		}
        	}
        }

        //멀티 콤보  - > 메인 계약서 종류
        this.fn_afterCall = function (sVal)
        {
        	if (sVal.rowcount == 0) {
        		this.fv_mnCtrwKd = "";
        		this.fv_mnCtrwKdNm = "";
        	} else {
        		for (var i = 0 ; i < sVal.rowcount; i++) {
        			if (i == 0) {
        				this.fv_mnCtrwKd = sVal.getColumn(i, "CD_D");
        				this.fv_mnCtrwKdNm = sVal.getColumn(i, "SIMP_CNM");
        			} else {
        				this.fv_mnCtrwKd += "."+sVal.getColumn(i, "CD_D") ;
        				this.fv_mnCtrwKdNm += ","+sVal.getColumn(i, "SIMP_CNM") ;
        			}
        		}
        	}
        }

        /* 페이징 */
        this.fn_paging = function(vPageNum)
        {
        	var oDs = this.ds_page;
        	var oBindDs = this.ds_rsclist;
        	var vPageSize = 20; //Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
        	var vTotalCount = 0; //전체건수. 화면조회후 리턴받아 사용

        	oBindDs.clearData(); //Grid에 Binding된 Dataset명
        	lsNowPage = vPageNum; //현재페이지 설정

         	this.ds_page.clearData();
        	this.ds_page.addRow();
        	this.ds_page.setColumn(0, "CURRENT_PAGE", vPageNum); //현재 페이지
         	this.ds_page.setColumn(0, "PAGE_SIZE", vPageSize);
         	this.ds_page.setColumn(0, "TOTAL_ROW_COUNT", vTotalCount);

        	this.div_list.div_page01.fn_pageSet(vTotalCount, vPageSize, "grd_rsclist,div_page01", lsNowPage);
        	this.search();
        }

        /*전자계약 조회*/
        this.btn_search_onclick = function(obj,e)
        {
        	//this.search();
        	this.fn_paging(1);
        }

        /*조회*/
        this.search = function()
        {
        	// 바이어 승인상태만 조회 : 9 바이어승인
        	if (this.fn_validationCheck()) {
        		var calFrom = this.gfn_nullToEmpty(this.div_search.cal_from.value);  //조회시작일
        		var calTo = this.gfn_nullToEmpty(this.div_search.cal_to.value);  //조회종료일
        		var cboContDay = this.gfn_nullToEmpty(this.div_search.cbo_contDay.value);  //계약시작0, 만료일1
        		var edtkd = this.gfn_nullToEmpty(this.div_search.edt_kd.value);  // 값 입력(계약자상호,  GLN 코드)
        		var cbokd = this.gfn_nullToEmpty(this.div_search.cbo_kd.value);  //계약자상호0,  GLN 코드1
        		var buyerkd = this.gfn_nullToEmpty(this.div_search.buyer_kd.value);  //1-사번,  2-이름
        		var buyerDsc = this.gfn_nullToEmpty(this.div_search.cbo_mnCtrwKdM2.value);	//11 상품본부 , 31 수산 , 32 축산
        		var buyerNm = "";
        		var buyerEno = "";
        		var buyerGln = ""; // 바이어 소속

        		// var edt_buyerA = this.gfn_nullToEmpty(this.div_search.edt_buyera.value);  //바이어소속0
        		// var edt_buyerB = this.gfn_nullToEmpty(this.div_search.edt_buyerb.value);  //바이어소속1
        	    // trace('asdsad : ' + this.gfn_nullToEmpty(this.div_search.div_mnCtrwKd.value));

        		param = "cbo_contDay="+cboContDay+
        				" cal_from="+calFrom+
        				" cal_to="+calTo+
        				" edtkd="+edtkd+
        				" cbokd="+cbokd+
        //				" buyerkd="+buyerkd+
        				" fv_sts="+this.fv_sts+
        				" apv_sts="+'99'+
        				" fv_mnCtrwKd="+this.fv_mnCtrwKd +
        				" buyerDsc="+buyerDsc
        				;

        		if (buyerkd == 2) {	//이름
        			buyerNm = this.gfn_nullToEmpty(this.div_search.edt_userId.value);
        		} else if (buyerkd == 1) {	//사번
        			buyerEno = this.gfn_nullToEmpty(this.div_search.edt_userId.value);
        		} else if (buyerkd == 3) {
        			buyerGln = this.gfn_nullToEmpty(this.div_search.edt_userId.value);
        		}
        		
        		// 바이어 아이디 설정
        		param += " buyerEno="+buyerEno+
        					   " buyerNm="+buyerNm+
        					   " buyerGln="+buyerGln;
        					   ;
        		
        		if (this.div_search.rdo_DT_YN.value == "Y") {
        			if (buyerkd == 0) {
        				alert('바이어 정보를 선택해 주세요');
        				return
        			} else {
        				if (this.div_search.edt_userId.value == null) {
        					alert('바이어 정보를 입력해 주세요');
        					return
        				}
        			}
        		}

        		var sSvcID        = "search";//통신아이디
        		var sURL          = "svc::rest/ct/eltctrw/retrieveEltCtrwList";// 호출할 서버 페이지 주소
        		var sInDatasets   = "ds_page=ds_page";//보내는데이터셋
        		var sOutDatasets  = "ds_rsclist=ds_rsclist ds_page=ds_pageVO";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = param;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회

        		//API 호출
        		this.gfn_registerSvcDS(sSvcID, this.ds_rsclist, false);
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}

        	this.fv_mnCtrwKdNmTemp = this.fv_mnCtrwKdNm ;
        	this.fv_stsNmTemp = this.fv_stsNm;
        	this.fv_mnCtrwKdTemp = this.fv_mnCtrwKd;
        	this.fv_stsTemp = this.fv_sts;

        // 	this.div_search.div_mnCtrwKd._clearValue();
        // 	this.fv_mnCtrwKd = "";
        // 	this.div_search.div_sts._clearValue();
        // 	this.fv_sts = "";
        	this.fv_stsNm = "";
        	this.fv_mnCtrwKdNm = "";
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	this.gfn_svcDsToggle(svcID, true);
        	
        	if (ErrorCode < 0) {
        		if (svcID == "aprv_all" && ErrorCode == -2) {
        			this.alert("등록된 직인 파일이 없습니다.\n기존에 작성된 전자계약 중 직인등록이 필요한 전자계약 건이 있습니다.");
        			return;
        		}
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID == "search") {
        			this.ds_rsclist.filter("STS_CANCEL != '해지'");
        			
        			if (this.ds_rsclist.rowcount == 0) {
        				this.div_list.div_page01.fn_pageSet(0, 0, "grd_rsclist,div_page01", lsNowPage);
        			} else {
        				var sTotal = this.ds_page.getColumn(0, "TOTAL_ROW_COUNT");
        				var sPagesize = this.ds_page.getColumn(0, "PAGE_SIZE");
        				this.div_list.div_page01.fn_pageSet(sTotal, sPagesize, "grd_rsclist,div_page01", lsNowPage);
        			}
        			
        			if (this.fn_checkMultiBznoUsr()) {
        				this.div_list.grd_rsclist.setFormatColProperty(17, "size", 125);
        			} else {
        				this.div_list.grd_rsclist.setFormatColProperty(17, "size", 0);
        			}
        		} else if (svcID == "codeLoad") {
        			this.ds_buyerCode.insertRow(0);
                    this.ds_buyerCode.setColumn(0,"SIMP_C","");
                    this.ds_buyerCode.setColumn(0,"SIMP_CNM","=========선택=========");
                    this.div_search.cbo_mnCtrwKdM2.set_index(0);
        		} else if (svcID == "cancel") {
        			this.gfn_getMessage("alert", "result.message.save.success");
        			this.search();
        		} else if (svcID == "aprv_all") {
        			this.gfn_getMessage("alert", "result.message.save.success");
        			this.search();
        		} else if (svcID == "authCheck") {
        			if (this.ds_authCheck.getColumn(0, "AUTH_CHECK") == "Y") {
        				this.btn_aprv_all.set_visible(true);
        				this.isApprover = true;
        			}
        		} else if (svcID == "chiefCheck") {
        			if (this.ds_chiefCheck.getColumn(0, "BIZ_NUMBER") == application.gv_bizNumber) {
        			    // 점장인 경우 버튼 활성화.
        				this.btn_aprv_all.set_visible(true);
        				this.isApprover = true;
        			}
        		} else if (svcID == "branchCheck") {
        			// 직매장이 아닌 사업장인 경우
        			if (application.gv_userType == "03" && this.ds_authBranch.getColumn(0, "AUTH_CHECK") != "Y") {
        				 alert("하나로유통 직매장만 사용 가능한 메뉴 입니다. ");
        				 this.set_enable(false);
        			}
        		} else if (svcID == "excelSearch") {
        			if (this.ds_excel.rowcount == 0) {
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");	
        			} else if (this.ds_excel.rowcount > 0) {
        				var today = this.gfn_today("yyyyMMdd");
        				
        				this.exportObj = new ExcelExportObject("Export00", this);
        				this.exportObj.addEventHandler("onsuccess" , this.fn_excelDownload_onsuccess , this);
        				this.exportObj.addEventHandler("onerror", this.fn_excelDownload_onerror, this);
        				
        				this.exportObj.set_exportfilename("excelElt"+today);
        				this.exportObj.set_exporturl(application.gv_server_url + "XExportImport");
        				//this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.grd_excel, "Sheet1!A1");
        			    this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.grd_excel, "전자계약조회!A1", "", "", "merge", "", "", "", "both", "cellline");
        				this.exportObj.exportData();
        			}
        		}
        	}
        }

        /* Validation Check */
        this.fn_validationCheck = function()
        {
        	var calFrom = this.div_search.cal_from.value;
        	var calTo = this.div_search.cal_to.value;
        	var buyer = this.div_search.cbo_mnCtrwKdM2.value;

        	if (this.gfn_isNull(buyer)) {
        		alert("계약서 구분을 지정해 주시기 바랍니다.");
        		return false;
        	}
        	if (this.gfn_isNull(calFrom)) {
        		this.gfn_getMessage("alert", "validation.message.fromDate.no.data");
        		return false;
        	}
        	if (this.gfn_isNull(calTo)) {
        		this.gfn_getMessage("alert", "validation.message.toDate.no.data");
        		return false;
        	}
        	if (this.gfn_getDiffDay(calFrom, calTo) < 0) {
        		this.gfn_getMessage("alert", "validation.message.fromData.toDate.confirm");
        		return false;
        	} else {
        		/*
        		if (this.gfn_getDiffDay(this.div_search.cal_YMD_FR.value,this.div_search.cal_YMD_TO.value) > 31) {
        			this.alert('기간을 31일 이내로 선택 하세요');
        			return false;
        		}
        		*/
        	}

        // 	if (Number(calFrom) - Number(chkDay) < 0) {
        // 		this.alert("최근 3개월까지 조회 가능합니다.");
        // 		return false;
        // 	}
        //
        // 	if (Number(calTo) - Number(chkDay) < 0) {
        // 		this.alert("최근 3개월까지 조회 가능합니다.");
        // 		return false;
        // 	}
        	return true;
        }

        this.fn_afterFormOnload = function()
        {
        //	trace("fn_afterFormOnload");
        }

        this.btn_history_onclick = function(obj,e)
        {
        	var elt_ctrw_no;

        	if (this.ds_rsclist.rowcount > 0) {
        		for (var i = 0; i < this.ds_rsclist.rowcount; i++) {
        			if (this.ds_rsclist.getColumn(i, "ISCHECKED") == "1") {
        				elt_ctrw_no = this.ds_rsclist.getColumn(i, "ELT_CTRW_NO");
        				if (!this.gfn_isNull(elt_ctrw_no)) {
        					var oArg = {paramMode:"S", dsArg:this.ds_rsclist, elt_ctrw_no:elt_ctrw_no};
        					var sOption = "autosize=true,title=true";
        					var sPopupCallBack = "fn_popupAfter";
        					this.gfn_openPopup("popId","OMG.CT::OMG_DS_SC_2114.xfdl",oArg,sOption,sPopupCallBack);
        				}
        			}
        		}
        		if (this.gfn_isNull(elt_ctrw_no)) {
        			alert("이력을 조회할 전자계약을 체크 하세요.");
        		}
        	} else {
        		alert("조회된 전자계약이 없습니다.");
        		return false;
        	}
        }

        this.div_rsclist_oncellclick = function(obj,e)
        {
        	if (e.cell==0) {
        		// this.gfn_singleChk(obj,e);
        	} else {
        		var elt_ctrw_no = this.ds_rsclist.getColumn(this.ds_rsclist.rowposition, "ELT_CTRW_NO");
        		var chg_sqno = this.ds_rsclist.getColumn(this.ds_rsclist.rowposition, "CHG_SQNO");
        		var bf_ctr_no = this.ds_rsclist.getColumn(this.ds_rsclist.rowposition, "BF_CTR_NO");
        		var bf_ctr_sqno = this.ds_rsclist.getColumn(this.ds_rsclist.rowposition, "BF_CTR_SQNO");
        		var sts = this.ds_rsclist.getColumn(this.ds_rsclist.rowposition, "STS");
        		var mode = this.isApprover ? "A" : "U";

        		// 팝업띄우기
        		var oArg = {paramMode:mode, dsArg:this.ds_rsclist, ELT_CTRW_NO:elt_ctrw_no, CHG_SQNO:chg_sqno, CTRW_CHG:"0", BF_CTR_NO:bf_ctr_no, BF_CTR_SQNO:bf_ctr_sqno};
        		var sOption = "autosize=true,title=true";
        		var sPopupCallBack = "fn_popupAfter";
        		this.gfn_openPopup("popId", "OMG.CT::OMG_DS_SC_2111.xfdl", oArg, sOption, sPopupCallBack);

        		this.ds_rsclist.setColumn(this.ds_rsclist.rowposition, "ISCHECKED", "0");
        	}
        }

        this.fn_popupAfter = function()
        {
        	this.search();
        }

        this.div_list_btu_div_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        this.btn_excel_onclick = function(obj,e)
        {
        	//this.gfn_exportExcel(this.div_list.grd_rsclist,"Excel");
        	this.fn_excel();
        }

        this.fn_excel = function()
        {
        	/*
        	var toDay = this.gfn_today("yyyyMMdd");
        	var fileName = "전자계약서조회"+toDay+".xls";//엑셀 파일 이름
        	var calFrom = this.gfn_nullToEmpty(this.div_search.cal_from.value);  //조회시작일
        	var calTo = this.gfn_nullToEmpty(this.div_search.cal_to.value);  //조회종료일
        	var cboContDay = this.gfn_nullToEmpty(this.div_search.cbo_contDay.value);  //계약시작0, 만료일1

        	var edtkd = this.gfn_nullToEmpty(this.div_search.edt_kd.value);  // 값 입력(계약자상호,  GLN 코드)
        	var cbokd = this.gfn_nullToEmpty(this.div_search.cbo_kd.value);  //계약자상호0,  GLN 코드1
        	var buyerDsc = this.gfn_nullToEmpty(this.div_search.cbo_mnCtrwKdM2.value);	//11 상품본부 , 31 수산 , 32 축산

        	param = "cbo_contDay="+cboContDay+
        			"&cal_from="+calFrom+
        			"&cal_to="+calTo+
        			"&edtkd="+edtkd+
        			"&cbokd="+cbokd+
        			"&fv_sts="+this.fv_stsTemp+
        			"&fv_stsNm="+this.fv_stsNmTemp+
        			"&fv_mnCtrwKd="+this.fv_mnCtrwKdTemp+
        			"&fv_mnCtrwKdNm="+this.fv_mnCtrwKdNmTemp+
        			"&buyerDsc="+buyerDsc+
        			"&fileName="+fileName+
        			"&buyerEno="+this.gfn_nullToEmpty(this.div_search.edt_userId.value)
        			 ;
        	
        	
        	param = encodeURI(encodeURI(param));
        	//this.web_downExcel.set_url(application.gv_server_url+"rest/excel/downloadExcelEltCtrw?"+param);
        	excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelEltCtrw?"+param, this);
        	*/
        	// 바이어 승인상태만 조회 : 9 바이어승인
        	if (this.fn_validationCheck()) {
        		var calFrom = this.gfn_nullToEmpty(this.div_search.cal_from.value);  //조회시작일
        		var calTo = this.gfn_nullToEmpty(this.div_search.cal_to.value);  //조회종료일
        		var cboContDay = this.gfn_nullToEmpty(this.div_search.cbo_contDay.value);  //계약시작0, 만료일1
        		var edtkd = this.gfn_nullToEmpty(this.div_search.edt_kd.value);  // 값 입력(계약자상호,  GLN 코드)
        		var cbokd = this.gfn_nullToEmpty(this.div_search.cbo_kd.value);  //계약자상호0,  GLN 코드1
        		var buyerkd = this.gfn_nullToEmpty(this.div_search.buyer_kd.value);  //1-사번,  2-이름
        		var buyerDsc = this.gfn_nullToEmpty(this.div_search.cbo_mnCtrwKdM2.value);	//11 상품본부 , 31 수산 , 32 축산
        		var buyerNm = "";
        		var buyerEno = "";

        		// var edt_buyerA = this.gfn_nullToEmpty(this.div_search.edt_buyera.value);  //바이어소속0
        		// var edt_buyerB = this.gfn_nullToEmpty(this.div_search.edt_buyerb.value);  //바이어소속1
        	    // trace('asdsad : ' + this.gfn_nullToEmpty(this.div_search.div_mnCtrwKd.value));

        		param = "cbo_contDay="+cboContDay+
        				" cal_from="+calFrom+
        				" cal_to="+calTo+
        				" edtkd="+edtkd+
        				" cbokd="+cbokd+
        //				" buyerkd="+buyerkd+
        				" fv_sts="+this.fv_sts+
        				" apv_sts="+'99'+
        				" fv_mnCtrwKd="+this.fv_mnCtrwKd +
        				" buyerDsc="+buyerDsc
        				;

        		if (buyerkd == 2) {	//이름
        			buyerNm = this.gfn_nullToEmpty(this.div_search.edt_userId.value);
        		} else if (buyerkd == 1) {	//사번
        			buyerEno = this.gfn_nullToEmpty(this.div_search.edt_userId.value);
        		}
        		
        		// 바이어 아이디 설정
        		param =param + " buyerEno="+buyerEno+
        					   " buyerNm="+buyerNm+
        					   " excel=Y";

        		if (this.div_search.rdo_DT_YN.value == "Y") {
        			if (buyerkd == 0) {
        				alert('바이어 정보를 선택해 주세요');
        				return
        			} else {
        				if (this.div_search.edt_userId.value == null) {
        					alert('바이어 정보를 입력해 주세요');
        					return
        				}
        			}
        		}

        		var sSvcID        = "excelSearch";//통신아이디
        		var sURL          = "svc::rest/ct/eltctrw/retrieveEltCtrwList";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_excel=ds_rsclist";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        		var sArgument     = param;// 파라미터
        		var sCallbackFunc = "fn_callBack";//콜백
        		var sTranType     = "S"; // U:저장/삭제, S:조회

        		//API 호출
        		this.gfn_registerSvcDS(sSvcID, this.ds_excel, false);
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        this.OMG_DS_SC_2110_onkeydown = function(obj,e)
        {
        	if (e.keycode==13) {
        		this.btn_search.click()
        	}
        }

        this.btn_confirm_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"S" };
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("popId","OMG.PT::OMG_DS_SC_9080.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.btn_flie_add_onclick = function(obj,e)
        {
        	var elt_ctrw_no = this.ds_rsclist.getColumn(this.ds_rsclist.rowposition, "ELT_CTRW_NO");
        	var sts = this.ds_rsclist.getColumn(this.ds_rsclist.rowposition, "STS");

        	if (sts != '9') {
        		alert('상태가 바이어승인일 경우에만 파일 첨부를 할 수 있습니다.');
        		return;
        	}

        	if (this.ds_rsclist.getColumn(this.ds_rsclist.rowposition, "ISCHECKED") == 0) {
        		alert("첨부할 계약서를 선택하세요.");
        		return;
        	}

        	var oArg = {ELT_CTRW_NO : elt_ctrw_no };
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("file_add","OMG.CT::popup02.xfdl",oArg,sOption,sPopupCallBack);
        }

        /* 해지(사용안함-완료계약서만 가능) */
        this.btn_cancel_onclick = function(obj,e)
        {
        	var chkCount = 0;
        	var rowposition = -1;
        	var buyerNm;
        	for (var i = 0; i < this.ds_rsclist.rowcount; i++) {
        		if (this.ds_rsclist.getColumn(i, "ISCHECKED") == "1") {
        			chkCount++;
        			rowposition = i;
        			buyerNm = this.ds_rsclist.getColumn(i, "BUYER_NM");
        		}
        	}

        	var loginNm =application.gv_userName; // 로그인 이름

        	if (chkCount == 0) {
        		alert('선택된 전자계약서가 없습니다.');
        		return;
        	} else if (chkCount > 1) {
        		alert('한 건의 전자계약서만 체크해주세요.');
        		return;
        	} else if (loginNm != buyerNm) {
        		alert("담당바이어만 계약서를 해지할 수 있습니다.");
        		return;
        	}

        	/*
        	if (!application.confirm("해당 전자계약서를 해지합니다.")) {
        		return;
        	}
        	*/

        	var elt_ctrw_no = this.ds_rsclist.getColumn(rowposition, "ELT_CTRW_NO");
        	var chg_sqno = this.ds_rsclist.getColumn(rowposition, "CHG_SQNO");
        	var ctrw_kdc = this.ds_rsclist.getColumn(rowposition, "MN_CTRW_KD");

        	var oArg = {eltCtrwNo:elt_ctrw_no, chgSqno:chg_sqno, mnCtrwKd:ctrw_kdc};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("cancelPopup", "OMG.CT::OMG_DS_SC_2110_P01.xfdl", oArg, sOption, sPopupCallBack);
        }

        this.div_list_grd_rsclist_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		//전체선택
        		this.gfn_setGridCheckAll(obj,e);
        	}
        }

        /* 테넌트 전자계약 승인권자 제한 */
        this.hasTennantEltAuth = function()
        {
        	var shortTerm  = "";
        	if (this.div_search.cbo_mnCtrwKdM2.value != "14") {
        		// 테넌트(14) 여부 확인
        		return true;
        	} else {
        		for (var i = 0; i < this.ds_rsclist.rowcount; i++) {
        			if (this.ds_rsclist.getColumn(i, "ISCHECKED") == "1") {
        				// 단기
        				if(this.ds_rsclist.getColumn(i, "MN_CTRW_KD") == '44' || this.ds_rsclist.getColumn(i, "MN_CTRW_KD") == '45'
        				 || this.ds_rsclist.getColumn(i, "MN_CTRW_KD") == '97'  || this.ds_rsclist.getColumn(i, "MN_CTRW_KD") == '98') {
        					shortTerm = '1';
        				} else {
        					shortTerm = '0';
        					break;
        				}
        			}
        		}
        		if (shortTerm == '1') {
        			return true;
        		} else {
        			if (application.gv_userId == "19380018") {
        				// 하나로유통 대표이사 확인
        				return true;
        			} else {
        				return false;
        			}
        		}
        	}
        	/*
        	else if (application.gv_userId == "19380018") {
        		// 하나로유통 대표이사 확인
        		return true;
        	}
        	*/
        	return false;
        }

        this.btn_aprv_all_onclick = function(obj,e)
        {
        	/*
        	if (!this.hasTennantEltAuth()) {
        		this.alert("전자계약(테넌트)의 단기 전자계약서 이외 전자계약서는 하나로유통 대표이사만 승인할 수 있습니다.");
        		return;
        	}
        	*/
        	
        	if (!this.hasSignEltAuth()) {
        		return;
        	}
        	
        	var sts, cancel;
        	var chkCount = 0;
        	var stsExpCount = 0;
        	if (this.ds_rsclist.rowcount > 0) {
        		var eltBzno = "";
        		for (var i = 0; i < this.ds_rsclist.rowcount; i++) {
        			sts = this.ds_rsclist.getColumn(i, "STS");
        			cancel = this.ds_rsclist.getColumn(i, "STS_CANCEL");
        			
                    /*
                     * 선택항목 상태체크: 현재는 승인건만 조회 되므로 선택항목 체크 갯수 체크임.
                     */
        			if (this.ds_rsclist.getColumn(i, "ISCHECKED") == "1") {
        				if (sts == "9" && cancel != "해지") {
        					// 바이어승인 체크상태 유지
        					chkCount = chkCount +1;
        					var stsExp = this.ds_rsclist.getColumn(i, "STS_EXP"); 
        					if (stsExp == "Y") {
        						stsExpCount = stsExpCount+1;
        						break;
        					}
        				} else {
        					// 바이어승인 상태 아닌경우 선택 해제
        					this.ds_rsclist.setColumn(i, "ISCHECKED", "0");
        				}
        				
        				// 복수 사업자번호 검사
        				var temp = this.ds_rsclist.getColumn(i, "BUYER_BZNO");
        				if (this.gfn_isNull(eltBzno)) {
        					eltBzno = temp;
        				} else if (eltBzno != temp) {
        					eltBzno = "";
        					break;
        				}
        			}
        		} //for .. 루프 종료

        		if (chkCount < 1) {
        		    alert('선택된 전자계약서가 없습니다.');
        		    return;
        		} else if (stsExpCount > 0) {
        			alert('지연계약서는 최종승인 할 수 없습니다.');
        		    return;
        		} else if (this.gfn_isNull(eltBzno)) {
        			alert("동일한 사업자번호를 사용하는 바이어의 계약서만 선택해주세요.");
        			return;
        		} else {
        			// alert('바이어 승인건만 전자서명 합니다.');
        		}
        		
        		this.aprv_ctrc(eltBzno); // 승인
        	} else {
        		alert("조회내역이 없습니다.");
        		return false;
        	}
        }

        /*
         * 일괄승인함수
         */
        this.aprv_ctrc = function(eltBzno)
        {
        	/*
        	 * obj : ActiveX PlugIn
        	 * sVal : 서명할 데이터
        	 * sBzno : 사용자 본인 인증시 필요한 데이터 - 본인확인 필요없을시 ""
        	 * callback : 서명 완료시 콜백받을 함수
        	 * id : 함수구분값
        	 */

        	var sts = 'A';  // 서명. 컨트롤러 하드코딩됨
        	var tinm = "승인완료";
        	var txa_cntn0 = "전자계약 승인완료 되었습니다.";

        	var sVal = application.gv_userKey;
        	var sBzno = application.gv_bizNumber;

        	// 각 사업장별로 최종승인 진행해야 함(사업장 사업자번호가 다르기 때문에)
        	if (this.fn_checkMultiBznoUsr() && !this.gfn_isNull(eltBzno)) {
        		sBzno = eltBzno;
        		this.alert("공인인증서 서명화면에서 사업자번호 " + this.gfn_getFormat(sBzno, "[@@@-@@-@@@@@]") + "의 인증서를 선택하여 진행하시기 바랍니다.");
        	}

        	this.gfn_signTradeSign(this.Plugin00, sVal, sBzno, "fn_signCallback", "signTradeSign");
        	// fn_signCallback 함수에서 컨트롤러 호출
        }

        // 서명 콜백
        this.fn_signCallback = function(rtnSignData,rtnSignId)
        {
        	if (rtnSignData == "ERROR") {
        		return false;
        	} else {
        		// this.fn_publish(rtnValue);
        		this.aprv_all(rtnSignData);
        	}
        }

        /*등록*/
        this.aprv_all = function(signData)
        {
        	var strMpNo = "";
            var strBuyerMpNo ="" ;
        	var params = 	"BUYER_SGNT=" + signData;
        	var sSvcID        = "aprv_all";
        	var sURL          = "svc::rest/ct/eltctrw/approveEltCtrwList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "ds_rsclist=ds_rsclist" ;
        	var sOutDatasets  = "";
        	var sArgument     = params;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /*
         * 최종서명권한 체크
         */
        this.fn_checkAuth = function()
        {
        	var sParams = "menu_id="+this.gfn_nullToEmpty(this.parent.parent.id)
        				+ " uyn=Y";
        	var sSvcID        = "authCheck";
        	var sURL          = "svc::rest/pt/dupCheckMemberAuth";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_authCheck=ds_authCheck";
        	var sArgument     =  sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.div_search_cbo_mnCtrwKdM2_onitemchanged = function(obj,e)
        {
        	this.ds_mnCtrwKdMC_Temp.clearData();
        	this.div_search.div_mnCtrwKd._clearValue();
        //	this.ds_mnCtrwKdMC_Temp.insertRow(0);

        	var buyerCD=this.div_search.cbo_mnCtrwKdM2.value;	//cd_m 값

        	if (buyerCD > 0) {
        		this.div_search.div_mnCtrwKd.set_enable(true);
        		this.fn_codeDSC(buyerCD);
        	} else {
         		this.div_search.div_mnCtrwKd.set_enable(false);
         	}
        }

        /*
         * 직매장 점장의 사업자번호 리스트 리턴
         */
        this.fn_checkChief = function()
        {
        	var sParams = "branch_dsc="+ "01"  // 대리점 구분 01 직매장
        				+ " mb_id=";
        	var sSvcID        = "chiefCheck";
        	var sURL          = "svc::rest/pt/checkStoreChief";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_chiefCheck=ds_chiefCheck";
        	var sArgument     =  sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /*
         * 두 개 이상의 공인인증서 사용하는 계정여부
         */
        this.fn_checkMultiBznoUsr = function()
        {
        	if (application.gv_userId == '95115014') {
        		// 95115014 송상헌 [20200219 추가]
        		// 153-85-00112 하나로마트 세종청사점
        		// 210-85-28989 하나로미니정부청사1호점(문구잡화점)
        		return true;
        	} else if (application.gv_userId == '94100741') {
        		// 94100741 강진우 [20220203 추가]
        		// 433-85-02087 농협마트사업호남지사(혼수)
        		return true;
        	}
        	return false;
        }

        this.btn_grant_onclick = function(obj,e)
        {
        	var nX = system.clientToScreenX(obj, 0) - system.clientToScreenX(application.mainframe, 0); 
        	var nY = system.clientToScreenY(obj, parseInt(obj.height)) - system.clientToScreenY(application.mainframe, 0); 
        	
        	this.PopupDiv00.trackPopup(nX, nY);	
        }

        this.PopupDiv00_ListBox02_onitemclick = function(obj,e)
        {
        // 운영자 화면만 우선사용
        /*
        	var menuId = "";
        	if (e.itemvalue == '1') {
        		menuId = "24003006";
        	} else {
        		menuId = "24003007";
        	}
        	
        	var objChildFrame = application.afrm_FrameSet[menuId];
        	if (objChildFrame != undefined) {
        		objChildFrame.setFocus();
        		return;
        	} else {
        		if (menuId == "24003006") {
        			this.gfn_OpenMenu("24003006", "전자계약 권한관리", "OMG.CT::OMG_DS_SC_2213.xfdl", "OMG_DS_SC_2213");
        		} else {
        			this.gfn_OpenMenu("24003007", "직매장 권한관리", "OMG.CT::OMG_DS_SC_2214.xfdl", "OMG_DS_SC_2214");
        		}
        	}
        */
        }
        this.div_search_btn_mail_onclick = function(obj,e)
        {
        	var oArg = "";
        	var sOption = "autosize=true,title=false";
        	var sPopupCallBack = "";
        	this.gfn_openPopup("mailId", "OMG.CT::OMG_DS_SC_2212_P01.xfdl", oArg, sOption, sPopupCallBack);
        }

        
        // 엑셀 다운로드 성공
        this.fn_excelDownload_onsuccess = function(obj,e)
        {
        	trace("excel download : success");
        }

        // 엑셀 다운로드 실패
        this.fn_excelDownload_onerror = function(obj,e)
        {
        	trace("excel download : error");
        }

        /* 전자계약 승인권자 제한 */
        this.hasSignEltAuth = function()
        {
        	if (this.div_search.cbo_mnCtrwKdM2.value == "15") {
        		if (application.gv_userId == "19380018") {
        			// 19380018 김병수
        			return true;
        		} else {
        			alert("전자계약(수산)의 전자계약서는 농협하나로유통 대표이사만 승인할 수 있습니다.");
        			return false;
        		}
        	}	
        	return true;	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.OMG_DS_SC_2120_onload, this);
            this.addEventHandler("onkeydown", this.OMG_DS_SC_2110_onkeydown, this);
            this.div_search.div_mnCtrwKd.addEventHandler("onclick", this.div_search_div_mnCtrwKd_onclick, this);
            this.div_search.btn_mail.addEventHandler("onclick", this.div_search_btn_mail_onclick, this);
            this.div_search.cbo_mnCtrwKdM2.addEventHandler("onitemchanged", this.div_search_cbo_mnCtrwKdM2_onitemchanged, this);
            this.btn_history.addEventHandler("onclick", this.btn_history_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_file_add.addEventHandler("onclick", this.btn_flie_add_onclick, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_cancel_onclick, this);
            this.btn_aprv_all.addEventHandler("onclick", this.btn_aprv_all_onclick, this);
            this.div_list.grd_rsclist.addEventHandler("oncellclick", this.div_rsclist_oncellclick, this);
            this.div_list.grd_rsclist.addEventHandler("onheadclick", this.div_list_grd_rsclist_onheadclick, this);
            this.div_list.btu_div.addEventHandler("onclick", this.div_list_btu_div_onclick, this);
            this.btn_grant.addEventHandler("onclick", this.btn_grant_onclick, this);
            this.PopupDiv00.ListBox02.addEventHandler("onitemclick", this.PopupDiv00_ListBox02_onitemclick, this);
            this.btn_confirm.addEventHandler("onclick", this.btn_confirm_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_2212.xfdl");
        this.loadPreloadList();
       
    };
}
)();
