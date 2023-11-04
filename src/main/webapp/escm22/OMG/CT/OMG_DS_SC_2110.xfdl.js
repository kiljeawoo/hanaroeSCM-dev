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
                this.set_titletext("전자계약서조회 농협");
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
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"MN_CTRW_KD\" type=\"STRING\" size=\"256\"/><Column id=\"MN_CTRW_KD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"MTALNM\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_DRUP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"COLB_COMP_SGNT_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_APV_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"STS\" type=\"STRING\" size=\"256\"/><Column id=\"STS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STS_CANCEL\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_NA_TRPL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BF_CTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BF_CTR_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_CTR_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_CTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"STS_EXP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("ds_excel", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"ELT_CTRW_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"MN_CTRW_KD\" type=\"STRING\" size=\"256\"/><Column id=\"MN_CTRW_KD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"MTALNM\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CTRW_DRUP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"COLB_COMP_SGNT_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_APV_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"STS\" type=\"STRING\" size=\"256\"/><Column id=\"STS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STS_CANCEL\" type=\"STRING\" size=\"256\"/><Column id=\"CEO\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"DONG\" type=\"STRING\" size=\"256\"/><Column id=\"BF_CTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BF_CTR_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_CTR_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_CTR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"STS_EXP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_buyerCode", this);
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"32\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"32\"/><Column id=\"SIMP_C_EXPL\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
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

            obj = new Dataset("ds_excel_report", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MN_CTRW_KD_NM\" type=\"string\" size=\"32\"/><Column id=\"BUYER_NM\" type=\"string\" size=\"32\"/><Column id=\"BUYER_ENO\" type=\"string\" size=\"32\"/><Column id=\"MN_CTRW_KD\" type=\"string\" size=\"32\"/><Column id=\"ELT_CTRW_NO\" type=\"string\" size=\"32\"/><Column id=\"LA_AGNT\" type=\"string\" size=\"32\"/><Column id=\"CTR_CHRR_REPMN\" type=\"string\" size=\"32\"/><Column id=\"CTR_CHRR\" type=\"string\" size=\"32\"/><Column id=\"MTALNM\" type=\"string\" size=\"32\"/><Column id=\"MPNO\" type=\"string\" size=\"32\"/><Column id=\"BZNO\" type=\"string\" size=\"32\"/><Column id=\"ADDR\" type=\"string\" size=\"32\"/><Column id=\"CTRW_DRUP_DT\" type=\"string\" size=\"32\"/><Column id=\"CTR_ST_DT\" type=\"string\" size=\"32\"/><Column id=\"CTR_ED_DT\" type=\"string\" size=\"32\"/><Column id=\"PRVCY\" type=\"string\" size=\"32\"/><Column id=\"CLEAN\" type=\"string\" size=\"32\"/><Column id=\"CLEAN_YN\" type=\"string\" size=\"32\"/><Column id=\"LA_AGNT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LA_AGNT_ENO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dummy", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MN_CTRW_KD_NM\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
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

            obj = new Dataset("ds_form", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"string\" size=\"256\" prop=\"\"/><Column id=\"VALUE\" type=\"string\" size=\"256\" prop=\"\"/><Column id=\"MN_CTRW_KD\" type=\"STRING\" size=\"256\"/><Column id=\"MN_CTRW_KDNM\" type=\"STRING\" size=\"256\"/><Column id=\"UID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "99", "15", null, this);
            obj.set_taborder("73");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "16", "36", "118", "21", null, null, this.div_search);
            obj.set_taborder("46");
            obj.set_text("메인계약서종류");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_kd", "absolute", "503", "36", "175", "21", null, null, this.div_search);
            obj.set_taborder("49");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static131", "absolute", "242", "71", "10", "21", null, null, this.div_search);
            obj.set_taborder("50");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_from", "absolute", "141", "66", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("51");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("cal_to", "absolute", "252", "66", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("52");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static02", "absolute", "390", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("59");
            obj.set_text("계약상태");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_contDay", "absolute", "15", "66", "106", "21", null, null, this.div_search);
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
            obj = new Div("div_mnCtrwKd", "absolute", "141", "36", "211", "21", null, null, this.div_search);
            obj.set_taborder("62");
            obj.set_enable("false");
            obj.set_url("common::multiCheckCombo.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Div("div_sts", "absolute", "503", "10", "174", "21", null, null, this.div_search);
            obj.set_taborder("63");
            obj.set_url("common::multiCheckCombo.xfdl");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_kd", "absolute", "390", "36", "106", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_kd_innerdataset = new Dataset("cbo_kd_innerdataset", this.div_search.cbo_kd);
            cbo_kd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">계약자상호</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">GLN 코드</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">사업자 번호</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">-전체(협력업체)-</Col></Row></Rows>");
            obj.set_innerdataset(cbo_kd_innerdataset);
            obj.set_taborder("64");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("0");
            obj.set_text("-전체(협력업체)-");
            obj.set_index("3");
            obj = new Static("Static12", "absolute", "0", "0", "414", "20", null, null, this.div_search);
            obj.set_taborder("65");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_kd00", "absolute", "390", "69", "106", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_kd00_innerdataset = new Dataset("cbo_kd00_innerdataset", this.div_search.cbo_kd00);
            cbo_kd00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">계약담당자명</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">계약담당자사번</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">담당자소속GLN</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">-전체(계약담당자)-</Col></Row></Rows>");
            obj.set_innerdataset(cbo_kd00_innerdataset);
            obj.set_taborder("72");
            obj.set_value("0");
            obj.set_text("-전체(계약담당자)-");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("2");
            obj = new Edit("edt_userId", "absolute", "503", "69", "174", "21", null, null, this.div_search);
            obj.set_taborder("73");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "16", "12", "118", "21", null, null, this.div_search);
            obj.set_taborder("75");
            obj.set_text("계약서 구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_search_detail", "absolute", "718", "10", "153", "21", null, null, this.div_search);
            obj.set_taborder("76");
            obj.set_text("계약상세조회(엑셀용)");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_detail", "absolute", "865", "10", "92", "21", null, null, this.div_search);
            obj.set_taborder("77");
            obj.set_text("조회항목 선택");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_search_cnt", "absolute", "865", "31", "92", "21", null, null, this.div_search);
            obj.set_taborder("78");
            obj.set_text("( 100 건 )");
            obj.set_visible("false");
            obj.style.set_align("center middle");
            this.div_search.addChild(obj.name, obj);

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

            obj = new Div("div_list", "absolute", "0", "127", null, null, "15", "0", this);
            obj.set_taborder("69");
            this.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "-93", "228", "21", null, null, this.div_list);
            obj.set_taborder("2");
            obj.set_text("상담 신청 조회");
            obj.set_cssclass("sta_WF_Subtitle");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_rsclist", "absolute", "0", "41", null, null, "0", "50", this.div_list);
            obj.set_taborder("1");
            obj.set_binddataset("ds_rsclist");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"40\"/><Column size=\"110\"/><Column size=\"94\"/><Column size=\"153\"/><Column size=\"208\"/><Column size=\"135\"/><Column size=\"200\"/><Column size=\"167\"/><Column size=\"139\"/><Column size=\"134\"/><Column size=\"71\"/><Column size=\"106\"/><Column size=\"133\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"계약서번호\"/><Cell col=\"3\" text=\"계약담당자명\"/><Cell col=\"4\" text=\"계약담당자소속\"/><Cell col=\"5\" text=\"계약서종류\"/><Cell col=\"6\" text=\"거래처코드\"/><Cell col=\"7\" text=\"계약자상호\"/><Cell col=\"8\" text=\"계약기간\"/><Cell col=\"9\" text=\"협력업체 서명시간\"/><Cell col=\"10\" text=\"계약담당자 승인시간\"/><Cell col=\"11\" text=\"해지여부\"/><Cell col=\"12\" text=\"상태\"/><Cell col=\"13\" text=\"계약서 변경사항\"/><Cell col=\"14\" text=\"관련 계약서 건수\"/><Cell col=\"15\" text=\"관련 계약서 번호\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:ELT_CTRW_NO\"/><Cell col=\"3\" text=\"bind:BUYER_NM\"/><Cell col=\"4\" text=\"bind:BUYER_NA_TRPL_NM\"/><Cell col=\"5\" displaytype=\"normal\" text=\"bind:MN_CTRW_KD_NM\" combodataset=\"ds_contstyle\" combocodecol=\"code\" combodatacol=\"style\"/><Cell col=\"6\" style=\"align:center;\" text=\"bind:NA_TRPL_C\"/><Cell col=\"7\" text=\"bind:MTALNM\"/><Cell col=\"8\" text=\"bind:CTR_DT\" mask=\"@@@@-@@-@@ @ @@@@-@@-@@\" calendardisplay=\"display\"/><Cell col=\"9\" displaytype=\"normal\" text=\"bind:COLB_COMP_SGNT_DTM\" mask=\"expr:COLB_COMP_SGNT_DTM == null ?'' : '@@@@-@@-@@ @@:@@:@@'\" maskchar=\" \" calendardisplay=\"display\"/><Cell col=\"10\" text=\"bind:BUYER_APV_DTM\" mask=\"expr:BUYER_APV_DTM == null ? '' : '@@@@-@@-@@ @@:@@:@@'\" maskchar=\" \" calendardisplay=\"display\"/><Cell col=\"11\" text=\"bind:STS_CANCEL\"/><Cell col=\"12\" text=\"expr:STS_EXP == 'Y' ? '지연계약서' : STS_NM\"/><Cell col=\"13\" text=\"bind:CHG_NM\"/><Cell col=\"14\" text=\"expr:ATCH_CTR_CNT == '0' ? '없음' : ATCH_CTR_CNT + '건'\"/><Cell col=\"15\" displaytype=\"expr:ATCH_CTR_CNT &gt; '1' ? 'button' : 'normal'\" text=\"expr:ATCH_CTR_CNT == '0' ? '' : ATCH_CTR_CNT == '1' ? BF_CTR_NO != null ? BF_CTR_NO : ATCH_CTR_NO : '보기'\"/></Band></Format></Formats>");
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

            obj = new Button("btn_confirm", "absolute", null, "94", "81", "21", "-156", null, this);
            obj.set_taborder("89");
            obj.set_text("계약서 확인");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "142", "118", "103", "10", null, null, this);
            obj.set_taborder("90");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file_add", "absolute", null, "0", "65", "21", "161", null, this);
            obj.set_taborder("91");
            obj.set_text("파일 추가");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel", "absolute", null, "0", "41", "21", "228", null, this);
            obj.set_taborder("92");
            obj.set_text("해지");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "525", "118", "103", "10", null, null, this);
            obj.set_taborder("93");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "524", "87", "103", "10", null, null, this);
            obj.set_taborder("95");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_mnCtrwKdM2", "absolute", "142", "42", "211", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("96");
            obj.set_innerdataset("ds_buyerCode");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");

            obj = new Grid("grd_rsclist00", "absolute", "-2", "526", null, null, "8", "-152", this);
            obj.set_taborder("97");
            obj.set_binddataset("ds_excel");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"118\"/><Column size=\"109\"/><Column size=\"141\"/><Column size=\"208\"/><Column size=\"135\"/><Column size=\"200\"/><Column size=\"94\"/><Column size=\"144\"/><Column size=\"302\"/><Column size=\"167\"/><Column size=\"152\"/><Column size=\"163\"/><Column size=\"84\"/><Column size=\"106\"/><Column size=\"133\"/><Column size=\"130\"/><Column size=\"130\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell style=\"font:bold 11 arial;linespace:12;\" text=\"순번\"/><Cell col=\"1\" style=\"font:bold 11 arial;linespace:12;\" text=\"계약서번호\"/><Cell col=\"2\" style=\"font:bold 11 arial;linespace:12;\" text=\"계약담당자명\"/><Cell col=\"3\" style=\"font:bold 11 arial;linespace:12;\" text=\"계약담당자소속\"/><Cell col=\"4\" style=\"font:bold 11 arial;linespace:12;\" text=\"계약서종류\"/><Cell col=\"5\" style=\"font:bold 11 arial;linespace:12;\" text=\"거래처코드\"/><Cell col=\"6\" style=\"font:bold 11 arial;linespace:12;\" text=\"계약자상호\"/><Cell col=\"7\" style=\"font:bold 11 arial;linespace:12;\" text=\"대표자명\"/><Cell col=\"8\" style=\"font:bold 11 arial;linespace:12;\" text=\"전화번호\"/><Cell col=\"9\" style=\"font:bold 11 arial;linespace:12;\" text=\"회사주소\"/><Cell col=\"10\" style=\"font:bold 11 arial;linespace:12;\" text=\"계약기간\"/><Cell col=\"11\" style=\"font:bold 11 arial;linespace:12;\" text=\"협력업체 서명시간\"/><Cell col=\"12\" style=\"font:bold 11 arial;linespace:12;\" text=\"계약담당자 승인시간\"/><Cell col=\"13\" style=\"font:bold 11 arial;linespace:12;\" text=\"해지여부\"/><Cell col=\"14\" style=\"font:bold 11 arial;linespace:12;\" text=\"상태\"/><Cell col=\"15\" style=\"font:bold 11 arial;linespace:12;\" text=\"계약서 변경사항\"/><Cell col=\"16\" style=\"font:bold 11 arial;linespace:12;\" text=\"관련 계약서 건수\"/><Cell col=\"17\" style=\"font:bold 11 arial;linespace:12;\" text=\"관련 계약서 번호\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:ELT_CTRW_NO\"/><Cell col=\"2\" text=\"bind:BUYER_NM\"/><Cell col=\"3\" text=\"bind:BUYER_NA_TRPL_NM\"/><Cell col=\"4\" displaytype=\"normal\" text=\"bind:MN_CTRW_KD_NM\" combodataset=\"ds_contstyle\" combocodecol=\"code\" combodatacol=\"style\"/><Cell col=\"5\" style=\"align:center;\" text=\"bind:NA_TRPL_C\"/><Cell col=\"6\" text=\"bind:MTALNM\"/><Cell col=\"7\" text=\"bind:CEO\"/><Cell col=\"8\" text=\"bind:TELNO\"/><Cell col=\"9\" text=\"bind:DONG\"/><Cell col=\"10\" text=\"bind:CTR_DT\" mask=\"@@@@-@@-@@~@@@@-@@-@@\" calendardisplay=\"display\"/><Cell col=\"11\" displaytype=\"normal\" text=\"bind:COLB_COMP_SGNT_DTM\" mask=\"expr:COLB_COMP_SGNT_DTM == null ?'' : '@@@@-@@-@@ @@:@@:@@'\" maskchar=\" \" calendardisplay=\"display\"/><Cell col=\"12\" text=\"bind:BUYER_APV_DTM\" mask=\"expr:BUYER_APV_DTM == null ? '' : '@@@@-@@-@@ @@:@@:@@'\" maskchar=\" \" calendardisplay=\"display\"/><Cell col=\"13\" text=\"bind:STS_CANCEL\"/><Cell col=\"14\" text=\"expr:STS_EXP == 'Y' ? '지연계약서' : STS_NM\"/><Cell col=\"15\" text=\"bind:CHG_NM\"/><Cell col=\"16\" text=\"expr:ATCH_CTR_CNT == '0' ? '없음' : ATCH_CTR_CNT + '건'\"/><Cell col=\"17\" text=\"expr:ATCH_CTR_CNT == '0' ? '' : ATCH_CTR_CNT == '1' ? BF_CTR_NO != null ? BF_CTR_NO : ATCH_CTR_NO : ATCH_CTR_NO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete", "absolute", null, "0", "41", "21", "271", null, this);
            obj.set_taborder("98");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_rsclist01", "absolute", "0", "838", null, null, "8", "-464", this);
            obj.set_taborder("99");
            obj.set_binddataset("ds_excel_report");
            obj.set_visible("false");
            obj.set_scrollbars("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"185\"/><Column size=\"185\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"105\"/><Column size=\"155\"/><Column size=\"300\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"90\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"110\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell colspan=\"4\" text=\"계약담당자\"/><Cell col=\"4\" colspan=\"9\" text=\"계약체결 내용\"/><Cell col=\"13\" colspan=\"8\" text=\"계약업체 내용\"/><Cell col=\"21\" rowspan=\"2\" text=\"전자계약시스템\"/><Cell col=\"22\" rowspan=\"2\" text=\"전자계약서번호\"/><Cell row=\"1\" text=\"취급자 사번\"/><Cell row=\"1\" col=\"1\" text=\"취급자\"/><Cell row=\"1\" col=\"2\" text=\"전결권자 사번\"/><Cell row=\"1\" col=\"3\" text=\"전결권자\"/><Cell row=\"1\" col=\"4\" text=\"제휴계약명\"/><Cell row=\"1\" col=\"5\" text=\"종 별\"/><Cell row=\"1\" col=\"6\" text=\"준법계약 구분\"/><Cell row=\"1\" col=\"7\" text=\"준법계약 방법\"/><Cell row=\"1\" col=\"8\" text=\"계약일자\"/><Cell row=\"1\" col=\"9\" text=\"계약시작일자\"/><Cell row=\"1\" col=\"10\" text=\"계약종료일자\"/><Cell row=\"1\" col=\"11\" text=\"금액\"/><Cell row=\"1\" col=\"12\" text=\"기타금액\"/><Cell row=\"1\" col=\"13\" text=\"계약구분\"/><Cell row=\"1\" col=\"14\" text=\"사업자번호\"/><Cell row=\"1\" col=\"15\" text=\"계약업체\"/><Cell row=\"1\" col=\"16\" text=\"소재지\"/><Cell row=\"1\" col=\"17\" text=\"담당자명\"/><Cell row=\"1\" col=\"18\" text=\"담당자핸드폰\"/><Cell row=\"1\" col=\"19\" text=\"청렴계약&#13;&#10;이행각서\"/><Cell row=\"1\" col=\"20\" text=\"개인정보수집&#13;&#10;동의서징구\"/></Band><Band id=\"body\"><Cell text=\"bind:BUYER_ENO\"/><Cell col=\"1\" text=\"bind:BUYER_NM\"/><Cell col=\"2\" text=\"bind:LA_AGNT_ENO\"/><Cell col=\"3\" text=\"expr:LA_AGNT_NM != null ? LA_AGNT_NM : LA_AGNT != null ? LA_AGNT : CTR_CHRR_REPMN\"/><Cell col=\"4\" text=\"bind:MN_CTRW_KD_NM\"/><Cell col=\"5\" text=\"expr:(MN_CTRW_KD == '21' || MN_CTRW_KD == '92') ? '06' : '05'\"/><Cell col=\"6\" text=\"expr:(MN_CTRW_KD == '21' || MN_CTRW_KD == '92') ? '01' : '03'\"/><Cell col=\"7\" displaytype=\"normal\" text=\"10\"/><Cell col=\"8\" text=\"bind:CTRW_DRUP_DT\"/><Cell col=\"9\" text=\"bind:CTR_ST_DT\"/><Cell col=\"10\" text=\"bind:CTR_ED_DT\"/><Cell col=\"11\" text=\"0\"/><Cell col=\"12\" style=\"align:center;\" text=\"0\"/><Cell col=\"13\" text=\"1\"/><Cell col=\"14\" text=\"bind:BZNO\"/><Cell col=\"15\" text=\"bind:MTALNM\"/><Cell col=\"16\" text=\"bind:ADDR\"/><Cell col=\"17\" text=\"bind:CTR_CHRR\"/><Cell col=\"18\" text=\"bind:MPNO\" mask=\"expr:MPNO.length == 10 ? '@@@-@@@-@@@@' : '@@@-@@@@-@@@@'\" maskchar=\" \" calendardisplay=\"display\"/><Cell col=\"19\" displaytype=\"normal\" text=\"expr:CLEAN == 'Y' ? '여' : '부'\" maskchar=\" \"/><Cell col=\"20\" text=\"expr:PRVCY == 'Y' ? '여' : '부'\" maskchar=\" \"/><Cell col=\"21\" text=\"하나로eSCM\"/><Cell col=\"22\" text=\"bind:ELT_CTRW_NO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00", "absolute", "1003", "130", "145", "65", null, null, this);
            obj.style.set_background("azure");
            this.addChild(obj.name, obj);
            obj = new ListBox("ListBox02", "absolute", "0", "0", null, null, "0", "0", this.PopupDiv00);
            this.PopupDiv00.addChild(obj.name, obj);
            var ListBox02_innerdataset = new Dataset("ListBox02_innerdataset", this.PopupDiv00.ListBox02);
            ListBox02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">기본 조회 양식</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">체결보고용 양식</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">계약상세조회 양식</Col></Row></Rows>");
            obj.set_innerdataset(ListBox02_innerdataset);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_scrollbars("none");
            obj.set_index("-1");

            obj = new Grid("grd_rsclist02", "absolute", "0", "722", null, null, "8", "-348", this);
            obj.set_taborder("100");
            obj.set_binddataset("ds_dummy");
            obj.set_visible("false");
            obj.set_scrollbars("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"185\"/><Column size=\"185\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"105\"/><Column size=\"155\"/><Column size=\"300\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"90\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"110\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\" band=\"head\"/><Row size=\"50\"/><Row size=\"150\"/></Rows><Band id=\"head\" style=\"background:#ebebebff;cellline:1 solid #000000ff ;cellbackground:#ebebebff;cellbackground2:#ebebebff;\"><Cell colspan=\"4\" style=\"background:#ebebebff;background2:#ebebebff;\" text=\"계약담당자\"/><Cell col=\"4\" colspan=\"9\" style=\"background:#ebebebff;background2:#ebebebff;\" text=\"계약체결 내용\"/><Cell col=\"13\" colspan=\"8\" style=\"background:#ebebebff;background2:#ebebebff;\" text=\"계약업체 내용\"/><Cell col=\"21\" rowspan=\"2\" style=\"background:#ebebebff;background2:#ebebebff;\" text=\"전자계약시스템\"/><Cell col=\"22\" rowspan=\"2\" style=\"background:#ebebebff;background2:#ebebebff;\" text=\"전자계약서번호\"/><Cell row=\"1\" style=\"background:#ebebebff;background2:#ebebebff;\" text=\"취급자 사번\"/><Cell row=\"1\" col=\"1\" style=\"background:#ebebebff;background2:#ebebebff;\" text=\"취급자\"/><Cell row=\"1\" col=\"2\" style=\"background:#ebebebff;background2:#ebebebff;\" text=\"전결권자 사번\"/><Cell row=\"1\" col=\"3\" style=\"background:#ebebebff;background2:#ebebebff;\" text=\"전결권자\"/><Cell row=\"1\" col=\"4\" style=\"background:#ebebebff;background2:#ebebebff;\" text=\"제휴계약명\"/><Cell row=\"1\" col=\"5\" style=\"background:#ebebebff;background2:#ebebebff;\" text=\"종 별\"/><Cell row=\"1\" col=\"6\" style=\"background:#ebebebff;background2:#ebebebff;\" text=\"준법계약 구분\"/><Cell row=\"1\" col=\"7\" style=\"background:#ebebebff;background2:#ebebebff;\" text=\"준법계약 방법\"/><Cell row=\"1\" col=\"8\" style=\"background:#ebebebff;background2:#ebebebff;\" text=\"계약일자\"/><Cell row=\"1\" col=\"9\" style=\"background:#ebebebff;background2:#ebebebff;\" text=\"계약시작일자\"/><Cell row=\"1\" col=\"10\" style=\"background:#ebebebff;background2:#ebebebff;\" text=\"계약종료일자\"/><Cell row=\"1\" col=\"11\" style=\"background:#ebebebff;background2:#ebebebff;\" text=\"금액\"/><Cell row=\"1\" col=\"12\" style=\"background:#ebebebff;background2:#ebebebff;\" text=\"기타금액\"/><Cell row=\"1\" col=\"13\" style=\"background:#ebebebff;background2:#ebebebff;\" text=\"계약구분\"/><Cell row=\"1\" col=\"14\" style=\"background:#ebebebff;background2:#ebebebff;\" text=\"사업자번호\"/><Cell row=\"1\" col=\"15\" style=\"background:#ebebebff;background2:#ebebebff;\" text=\"계약업체\"/><Cell row=\"1\" col=\"16\" style=\"background:#ebebebff;background2:#ebebebff;\" text=\"소재지\"/><Cell row=\"1\" col=\"17\" style=\"background:#ebebebff;background2:#ebebebff;\" text=\"담당자명\"/><Cell row=\"1\" col=\"18\" style=\"background:#ebebebff;background2:#ebebebff;\" text=\"담당자핸드폰\"/><Cell row=\"1\" col=\"19\" style=\"background:#ebebebff;background2:#ebebebff;\" text=\"청렴계약&#13;&#10;이행각서\"/><Cell row=\"1\" col=\"20\" style=\"background:#ebebebff;background2:#ebebebff;\" text=\"개인정보수집&#13;&#10;동의서징구\"/></Band><Band id=\"body\" style=\"selectline:1 solid #000000ff ;cellline:1 solid #000000ff ;cellbackground2:#ffffffff;\"><Cell text=\"계약담당자 사번\"/><Cell col=\"1\" text=\"계약담당자 &gt;&#13;&#10;계약담당자성명\"/><Cell col=\"2\" text=\"전결권자 사번\"/><Cell col=\"3\" text=\"사업장정보 &gt; &#13;&#10;법률상 대리인 or 법인대표자명\"/><Cell col=\"4\" text=\"업체 정보 &gt; 메인계약서 종류\"/><Cell col=\"5\" text=\"&quot;05&quot; or &quot;06&quot;\"/><Cell col=\"6\" text=\"&quot;01&quot; or &quot;03&quot;\"/><Cell col=\"7\" displaytype=\"normal\" text=\"&quot;10&quot;\"/><Cell col=\"8\" text=\"업체정보 &gt;&#13;&#10;계약일자\"/><Cell col=\"9\" text=\"YYYYMMDD\"/><Cell col=\"10\" text=\"YYYYMMDD\"/><Cell col=\"11\" text=\"0\"/><Cell col=\"12\" style=\"align:center;\" text=\"0\"/><Cell col=\"13\" text=\"1\"/><Cell col=\"14\" text=\"사업자번호\"/><Cell col=\"15\" text=\"업체 정보 &gt;&#13;&#10;업체명\"/><Cell col=\"16\" text=\"업체 정보 &gt;&#13;&#10;회사주소 1, 2\"/><Cell col=\"17\" text=\"업체 담당자 &gt;&#13;&#10;담당자 이름\"/><Cell col=\"18\" text=\"업체 담당자 &gt;&#13;&#10;휴대전화번호\" maskchar=\" \" calendardisplay=\"display\"/><Cell col=\"19\" displaytype=\"normal\" text=\"'여' or '부'\" maskchar=\" \"/><Cell col=\"20\" text=\"'여' or '부'\" maskchar=\" \"/><Cell col=\"21\" text=\"&quot;하나로eSCM&quot;\"/><Cell col=\"22\" text=\"하나로eSCM&#13;&#10;전자계약서 번호\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"1\"/><Cell row=\"1\" col=\"2\"/><Cell row=\"1\" col=\"3\" style=\"align:left middle;\" text=\"법률상 대리인이 NULL일 경우&#13;&#10;법인대표자명\"/><Cell row=\"1\" col=\"4\"/><Cell row=\"1\" col=\"5\" style=\"align:left middle;\" text=\"1. 코드 &#13;&#10;01=공사 02=용역 03=구매 &#13;&#10;04=제조 05=단가 06=부동산 &#13;&#10;07=기타&#13;&#10;&#13;&#10;2. 임대차 거래계약서 , &#13;&#10;부속계약서(임대차)= 부동산(06)&#13;&#10;그 외 계약서 = 단가(05)&#13;&#10;를 기본값\"/><Cell row=\"1\" col=\"6\" style=\"align:left middle;\" text=\"1. 코드 &#13;&#10;01=일반계약&#13;&#10;02=유지보수계약&#13;&#10;03=단가계약&#13;&#10;&#13;&#10;2. 임대차 거래계약서 , &#13;&#10;부속계약서(임대차)= 부동산(01)&#13;&#10;그 외 계약서 = 단가(03)&#13;&#10;를 기본값\"/><Cell row=\"1\" col=\"7\" style=\"align:left middle;\" text=\"1. 코드&#13;&#10;07=일반경쟁입찰&#13;&#10;08=제한경쟁입찰&#13;&#10;09=지명경쟁입찰&#13;&#10;10=수의계약 &#13;&#10;11=기타\"/><Cell row=\"1\" col=\"8\"/><Cell row=\"1\" col=\"9\" text=\"ex) 20200423\"/><Cell row=\"1\" col=\"10\" text=\"ex) 20200423\"/><Cell row=\"1\" col=\"11\" text=\"단위(원)\"/><Cell row=\"1\" col=\"12\" text=\"단위(원)\"/><Cell row=\"1\" col=\"13\" text=\"0=탈락 1=계약\"/><Cell row=\"1\" col=\"14\" text=\"ex)1231212345\"/><Cell row=\"1\" col=\"15\"/><Cell row=\"1\" col=\"16\"/><Cell row=\"1\" col=\"17\"/><Cell row=\"1\" col=\"18\" text=\"ex)010-1111-2222\"/><Cell row=\"1\" col=\"19\"/><Cell row=\"1\" col=\"20\" style=\"align:left middle;\" text=\"상대업체 제출서류&#13;&#10;중 제출완료일시 여&#13;&#10;미제출일시 부\"/><Cell row=\"1\" col=\"21\"/><Cell row=\"1\" col=\"22\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_rsclist03", "absolute", "0", "687", null, null, "8", "-232", this);
            obj.set_taborder("101");
            obj.set_binddataset("ds_dummy");
            obj.set_scrollbars("none");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"35\"/></Rows><Band id=\"body\" style=\"cellline:1 none #808080ff ;cellbackground:#ebebebff;cellbackground2:#ffffffff;\"><Cell colspan=\"3\" style=\"align:left middle;background:#ebebebff;font:bold 16 Gulim;\" text=\"※ 도움말\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "665", "987", "21", null, null, this);
            obj.set_taborder("102");
            obj.set_text("체결보고 양식용 그리드 3개");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
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
            obj = new Layout("default", "", 0, 99, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("73");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 340, 30, this.div_list.div_page01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("15");
            		p.set_url("common::pagingBTN.xfdl");
            		p.style.set_align("center");
            		p.set_visible("false");

            	}
            );
            this.div_list.div_page01.addLayout(obj.name, obj);

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
            		p.set_titletext("전자계약서조회 농협");

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
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_2110.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_2110.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.chkDay ="";
        this.svTime = "";

        this.fv_sts = ""; //전자 계약서 상태값
        this.fv_stsTemp = ""; //전자 계약서 상태값
        this.fv_stsNm = ""; //전자 계약서 상태값
        this.fv_stsNmTemp = ""; //전자 계약서 상태값
        this.fv_mnCtrwKd = ""; //전자 계약서 종류
        this.fv_mnCtrwKdTemp = ""; //전자 계약서 종류
        this.fv_mnCtrwKdNm = ""; //전자 계약서 종류
        this.fv_mnCtrwKdNmTemp = ""; //전자 계약서 종류
        var lsNowPage;

        /* Form Load */
        this.OMG_DS_SC_2110_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj,e);

        	var param = [
               {code:"ELT_STS"           ,     dsName:"ds_sts", selecttype:""}
         /*      , {code:"MN_CTRW_KD"        ,     dsName:"ds_mnCtrwKd", selecttype:""} */
            ];

        	this.gfn_setPortalCommonCode(param);
        	var toDay = this.gfn_today("yyyyMMdd");
        	this.chkDay = this.gfn_minusMonth(toDay, 1);

        	this.div_search.cal_from.set_value(this.chkDay);
        	this.div_search.cal_to.set_value(toDay);
        	// this.div_search.edt_userId.set_value(application.gv_userId);

        	this.div_list.grd_rsclist.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));

        	if (this.div_search.cbo_kd00.value == 0) {
        		this.div_search.edt_userId.set_readonly(true);
        	}
        	if (this.div_search.cbo_kd.value == 0) {
        		this.div_search.edt_kd.set_readonly(true);
        	}

        	this.codeLoad();	//계약담당자 구분하는 함수
        	this.getDS();			//데이터셋 가져오기
        	this.fn_checkBranch();            // 직매장여부 체크
        }

        /**
         * 직매장 로그인 시 Y/N 리턴
         */
        this.fn_checkBranch = function()
        {
        	var sParams = "branch_dsc="+ "01"  // 대리점 구분 01 직매장
        				+ " mb_id=";
        	var sSvcID        = "branchCheck";
        	var sURL          = "svc::rest/pt/checkBranch";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_authBranch=ds_authBranch";  //
        	var sArgument     =  sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        //gfn_setCommonCode처리 후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        	//상태값  정의 -> 사용하는 상태값만 정의
        	for (var i = this.ds_sts.rowcount-1 ; 0 <= i ; i--) {
        		if (this.ds_sts.getColumn(i, "SIMP_C") == "5") {
        			this.ds_sts.deleteRow(i);
        		}
        		if (this.ds_sts.getColumn(i, "SIMP_C") == "6") {
        				this.ds_sts.deleteRow(i);
        		}
        		if (this.ds_sts.getColumn(i, "SIMP_C") == "7") {
        			this.ds_sts.deleteRow(i);
        		}
        	}

        	this.div_search.div_sts.setFunctionName("fn_afterCallSts"); //후처리함수 선언

        	//선택사항. 선언안하면 기본으로 설정됨. Width:140, displayrowcount:5
        	this.div_search.div_sts._setWidth(180);                  //가로사이즈 설정(단, 140보다 작으면 기본사이즈인 140으로 설정됨)
        	this.div_search.div_sts._setDisplayCount(9);            //보여줄 Row수. Combo의 displayrowcount와 동일.
        	this.div_search.div_sts._binddataset(this.ds_sts, "SIMP_C", "SIMP_CNM");

        //	this.div_search.div_mnCtrwKd.setFunctionName("fn_afterCall"); //후처리함수 선언

        	//선택사항. 선언안하면 기본으로 설정됨. Width:140, displayrowcount:5
        //	this.div_search.div_mnCtrwKd._setWidth(250);                  //가로사이즈 설정(단, 140보다 작으면 기본사이즈인 140으로 설정됨)
        //	this.div_search.div_mnCtrwKd._setDisplayCount(dsrow);            //보여줄 Row수. Combo의 displayrowcount와 동일.

        //	this.div_search.div_mnCtrwKd._binddataset(this.ds_mnCtrwKdMC_Temp,"SIMP_C","SIMP_CNM");

        	//콤보에 최상단Row보이도록 설정
        	//this.Combo01.set_index(0);
        }

        //멀티 콤보  - > 상태값
        this.fn_afterCallSts = function(sVal)
        {
        	if (sVal.rowcount == 0) {
        		this.fv_sts = "";
        		this.fv_stsNm = "";
        	} else {
        		for (var i = 0 ; i < sVal.rowcount; i++) {
        			if (i == 0 ) {
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
        this.fn_afterCall = function(sVal)
        {
        	if (sVal.rowcount == 0) {
        		this.fv_mnCtrwKd = "";
        		this.fv_mnCtrwKdNm = "";
        	} else {
        		for (var i = 0; i < sVal.rowcount; i++) {
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

        /* 계약담당자 구분하기  */
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
        	var sSvcID        = "getDS";
        	var sURL          = "svc::rest/ct/eltctrw/retrieveEltctrwDSList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_mnCtrwKdMC=ds_mnCtrwKdMC" ;
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        var dsrow;

        // 계약담당자 코드별 해당 데이터셋 뽑아오기
        this.fn_codeDSC = function(param1)
        {
        	var ctype;
        	var cdm;
        	var cdd;
        	var simpcnm;
        	dsrow = 0;
        	for (var i = 0; i < this.ds_mnCtrwKdMC.rowcount; i++) {
        		cdm = this.ds_mnCtrwKdMC.getColumn(i, "CD_M");  /*Dataset 값을 가져옴. */
        		cdd = this.ds_mnCtrwKdMC.getColumn(i, "CD_D");
        		ctype = this.ds_mnCtrwKdMC.getColumn(i, "CD_TYPE");

        		if (cdm == param1 && ctype == 'MN_CTRW_KD') {
        			simpcnm = this.ds_mnCtrwKdMC.getColumn(i, "SIMP_CNM");

        			this.ds_mnCtrwKdMC_Temp.addRow();
        			this.ds_mnCtrwKdMC_Temp.setColumn(this.ds_mnCtrwKdMC_Temp.rowposition, "CD_TYPE", ctype) /*Dataset 에 값을 셋팅함 */
        			this.ds_mnCtrwKdMC_Temp.setColumn(this.ds_mnCtrwKdMC_Temp.rowposition, "CD_M", cdm)
        			this.ds_mnCtrwKdMC_Temp.setColumn(this.ds_mnCtrwKdMC_Temp.rowposition, "CD_D", cdd)
        			this.ds_mnCtrwKdMC_Temp.setColumn(this.ds_mnCtrwKdMC_Temp.rowposition, "SIMP_CNM", simpcnm)
        		}
        	}
        	dsrow = this.ds_mnCtrwKdMC_Temp.rowcount; // 데이터셋의 크기

        	this.div_search.div_mnCtrwKd.setFunctionName("fn_afterCall"); //후처리함수 선언
        	this.div_search.div_mnCtrwKd._setWidth(250);
        	this.div_search.div_mnCtrwKd._setDisplayCount(dsrow);            //보여줄 Row수. Combo의 displayrowcount와 동일.
        	this.div_search.div_mnCtrwKd._binddataset(this.ds_mnCtrwKdMC_Temp,"CD_D","SIMP_CNM");
        }

        this.div_list_Grid01_oncellclick = function(obj,e)
        {
        	if (e.cell==0) {
        		this.gfn_singleChk(obj,e);
        	} else {
        		/*
        		var cslt_rq_no = this.ds_rsclist.getColumn(this.ds_rsclist.rowposition, "CSLT_RQ_NO");

        		var oArg = {paramMode:"U", dsArg:this.ds_rsclist, CSLT_RQ_NO:cslt_rq_no};
        		var sOption = "autosize=true,title=true";
        		var sPopupCallBack = "fn_popupAfter";
        		this.gfn_openPopup("popId","OMG.BT::OMG_DS_SC_3121.xfdl",oArg,sOption,sPopupCallBack);
        		*/
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
        	//this.ds_rsclist.clearData();
        	// this.search();
        	this.fn_paging(1);
        }

        /**
         * 검색조건 파라매터 생성
         * isWeb 웹뷰 여부
         * isReport 체결보고 여부
         */
        this.makeSearchParam = function(isWeb,isReport)
        {
        	var calFrom = this.gfn_nullToEmpty(this.div_search.cal_from.value); // 조회시작일
        	var calTo = this.gfn_nullToEmpty(this.div_search.cal_to.value); // 조회종료일
        	var cboContDay = this.gfn_nullToEmpty(this.div_search.cbo_contDay.value); // 계약시작0, 만료일1
        	var edtkd = this.gfn_nullToEmpty(this.div_search.edt_kd.value); // 값 입력(계약자상호,  GLN 코드)
        	var cbokd = this.gfn_nullToEmpty(this.div_search.cbo_kd.value); // 계약자상호1,  GLN 코드2 , 사업자번호3
        	var cbokd00 = this.gfn_nullToEmpty(this.div_search.cbo_kd00.value); // 계약담당자명1,  계약담당자사번2, 소속GLN3
        	var buyerDsc = this.gfn_nullToEmpty(this.cbo_mnCtrwKdM2.value); // 바이어 구분
        	var buyerNm = ""; // 바이어 명
        	var buyerEno = ""; // 바이어 사번
        	var buyerGln = ""; // 바이어 소속
        	if (cbokd00 == 1) {
        		buyerNm = this.gfn_nullToEmpty(this.div_search.edt_userId.value);
        	} else if (cbokd00 == 2) {
        		buyerEno = this.gfn_nullToEmpty(this.div_search.edt_userId.value);
        	} else if (cbokd00 == 3) {
        		buyerGln = this.gfn_nullToEmpty(this.div_search.edt_userId.value);
        	}
        	
        	var div = " "; // dataset;
        	if (isWeb) {
        		div = "&" // web
        	}
        	
        	var param = "cbo_contDay="+cboContDay;
        	param += div + "cal_from="+calFrom;
        	param += div + "cal_to="+calTo;
        	param += div + "edtkd="+edtkd;
        	param += div + "cbokd="+cbokd;
        	if (isReport) {
        		param += div + "fv_sts=A";
        	} else {
        		param += div + "fv_sts="+this.fv_sts;
        	}
        	param += div + "fv_mnCtrwKd="+this.fv_mnCtrwKd;
        	param += div + "buyerDsc="+buyerDsc;
        	param += div + "buyerEno="+buyerEno;
        	param += div + "buyerNm="+buyerNm;
        	param += div + "buyerGln="+buyerGln;
        				   
        	return param;
        }

        /*조회*/
        this.search = function()
        {
        	if (this.fn_validationCheck()) {
        		var param = this.makeSearchParam(false, false);

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

        	//this.div_search.div_mnCtrwKd._clearValue();
        	//this.fv_mnCtrwKd = "";
        	//this.div_search.div_sts._clearValue();
        	//this.fv_sts = "";
        	this.fv_stsNm = "";
        	this.fv_mnCtrwKdNm = "";
        }

        /*엑셀다운로드(체결보고)*/
        this.fn_excel_report = function()
        {
        	if (this.fn_validationCheck()) {
        		var param = this.makeSearchParam(false, true);

        		var sSvcID = "excelReport";
        		var sURL = "svc::rest/ct/eltctrw/downloadEltCtrwReport";
        		var sInDatasets = "";
        		var sOutDatasets = "ds_excel_report=ds_excel_report";
        		var sArgument = param;
        		var sCallbackFunc = "fn_callBack";
        		var sTranType = "S"; // U:저장/삭제, S:조회

        		//API 호출
        		this.gfn_registerSvcDS(sSvcID, this.ds_excel_report, false);
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}

        	this.fv_mnCtrwKdNmTemp = this.fv_mnCtrwKdNm ;
        	this.fv_stsNmTemp = this.fv_stsNm;
        	this.fv_mnCtrwKdTemp = this.fv_mnCtrwKd;
        	this.fv_stsTemp = this.fv_sts;
        	this.fv_stsNm = "";
        	this.fv_mnCtrwKdNm = "";
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	this.gfn_svcDsToggle(svcID, true);
        	
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID == "search") {
        			if (this.ds_rsclist.rowcount == 0) {
        				this.div_list.div_page01.fn_pageSet(0, 0, "grd_rsclist,div_page01", lsNowPage);
        			} else {
        				var sTotal = this.ds_page.getColumn(0, "TOTAL_ROW_COUNT");
        				var sPagesize = this.ds_page.getColumn(0, "PAGE_SIZE");
        				this.div_list.div_page01.fn_pageSet(sTotal, sPagesize, "grd_rsclist,div_page01", lsNowPage);
        			}
        		} else if (svcID == "codeLoad") {
        			this.ds_buyerCode.insertRow(0);
                    this.ds_buyerCode.setColumn(0,"SIMP_C","");
                    this.ds_buyerCode.setColumn(0,"SIMP_CNM","=========선택=========");
                    this.cbo_mnCtrwKdM2.set_index(0);
        		} else if (svcID == "cancel") {
        			this.gfn_getMessage("alert", "result.message.save.success");
        			this.search();
        		} else if (svcID == "excelEltCtrwList") {
        			if (this.ds_excel.rowcount == 0) {
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			} else if (this.ds_excel.rowcount > 0) {
        				this.exportObj = new ExcelExportObject("Export00", this);
        				this.exportObj.addEventHandler("onsuccess", this.fn_excelDownload_onsuccess, this);
        				this.exportObj.addEventHandler("onerror", this.fn_excelDownload_onerror, this);

        				this.exportObj.set_exportfilename("excelElt" + this.gfn_today("yyyyMMdd"));
        				this.exportObj.set_exporturl(application.gv_server_url + "XExportImport");
        				this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.grd_rsclist00, "전자계약조회!A1", "", "", "merge", "", "", "", "both", "cellline");
        				this.exportObj.exportData();
        			}
        		} else if (svcID == "branchCheck") {
                    // 직매장이 아닌 사업장인 경우
        			if (application.gv_userType == "03" && this.ds_authBranch.getColumn(0, "AUTH_CHECK") != "Y") {
        				 alert("하나로유통 직매장만 사용 가능한 메뉴 입니다. ");
        				 this.set_enable(false);
        			}
        		} else if (svcID == "deleteElt") {
        			alert("계약서가 삭제되었습니다.");
        			this.search();
        		} else if (svcID == "excelReport") {
        			if (this.ds_excel_report.rowcount == 0) {
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			} else if (this.ds_excel_report.rowcount > 0) {
        				this.exportObj = new ExcelExportObject("Export00", this);
        				this.exportObj.addEventHandler("onsuccess" , this.fn_excelDownload_onsuccess , this);
        				this.exportObj.addEventHandler("onerror", this.fn_excelDownload_onerror, this);

        				this.exportObj.set_exportfilename("eScmEltReport" + this.gfn_today("yyyyMMdd"));
        				this.exportObj.set_exporturl(application.gv_server_url + "XExportImport");
        				this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.grd_rsclist03, "전자계약체결보고!A1", "", "", "merge", "", "", "", "both", "cellline");
        				this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.grd_rsclist02, "전자계약체결보고!A2", "", "", "merge", "", "", "", "both", "cellline");
        				this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.grd_rsclist01, "전자계약체결보고!A8", "", "", "merge", "", "", "", "both", "cellline");
        				this.exportObj.exportData();
        			}
        		}
        	}
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

        /* Validation Check */
        this.fn_validationCheck = function()
        {
        	var calFrom = this.div_search.cal_from.value;
        	var calTo = this.div_search.cal_to.value;
        	var buyer = this.cbo_mnCtrwKdM2.value;
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
        		if(this.gfn_getDiffDay(this.div_search.cal_YMD_FR.value,this.div_search.cal_YMD_TO.value) > 31){
        			this.alert('기간을 31일 이내로 선택 하세요');
        			return false;
        		}
        		*/
        	}

        // 	if(Number(calFrom) - Number(chkDay) < 0){
        // 		this.alert("최근 3개월까지 조회 가능합니다.");
        // 		return false;
        // 	}
        //
        // 	if(Number(calTo) - Number(chkDay) < 0){
        // 		this.alert("최근 3개월까지 조회 가능합니다.");
        // 		return false;
        // 	}

        	return true;
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	if (strId == "cancelPopup") {
        		if (strVal == "Y") {
        			this.search();
        		}
        	} else if (strId == "relatedEltPop") {
        		return;
        	} else if (strId == "detailPopup") {
        		if (!this.gfn_isNull(strVal)) {
        			this.ds_form.loadXML(strVal);
        			if (this.ds_form.rowcount > 0) {
        				this.div_search.sta_search_cnt.set_text("( " + this.ds_form.rowcount + "건 )");
        			} else {
        				this.div_search.sta_search_cnt.set_text("");
        			}
        		}
        		return;
        	} else {
        		this.search();
        	}
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
        			if (this.ds_rsclist.getColumn(i, "ISCHECKED") == 1) {
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
        			alert("선택된 전자계약서가 없습니다.");
        		}
        	} else {
        		//alert("전자계약을 조회 하세요");
        		return false;
        	}
        }

        this.but_new_onclick = function(obj,e)
        {
        	var new_elt = "0";
        	//var oArg = {paramMode:"S", dsArg:new_elt:new_elt };
        	//var oArg = {paramMode:"S", dsArg:new_elt:new_elt };
        	var oArg = {paramMode:"S", dsArg:this.ds_copy, new_elt:new_elt};
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("popId","OMG.CT::OMG_DS_SC_2113.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.div_rsclist_oncellclick = function(obj,e)
        {	
        	if (e.cell==0) {
        		this.gfn_singleChk(obj,e);
        	} else if (e.cell == 15) {
        		var cnt = this.ds_rsclist.getColumn(this.ds_rsclist.rowposition, "ATCH_CTR_CNT");
        		if (cnt > 1) {
        			// 관련 계약서 건수가 2이상일 때 '보기' 버튼 처리
        			var elt_ctrw_no = this.ds_rsclist.getColumn(this.ds_rsclist.rowposition, "ELT_CTRW_NO");
        			var chg_sqno = this.ds_rsclist.getColumn(this.ds_rsclist.rowposition, "CHG_SQNO");
        			var bf_ctr_no = this.ds_rsclist.getColumn(this.ds_rsclist.rowposition, "BF_CTR_NO");
        			var bf_ctr_sqno = this.ds_rsclist.getColumn(this.ds_rsclist.rowposition, "BF_CTR_SQNO");

        			var oArg = {ELT_CTRW_NO:elt_ctrw_no ,CHG_SQNO:chg_sqno, BF_CTR_NO:bf_ctr_no, BF_CTR_SQNO:bf_ctr_sqno};

        			var sOption = "autosize=true,title=true";
        			var sPopupCallBack = "fn_popupAfter";
        			this.gfn_openPopup("relatedEltPop","POPUP::POPUP_ELT_RELATED.xfdl",oArg,sOption,sPopupCallBack);
        		}
        	} else {
        		//if(this.ds_rsclist.getColumn(this.ds_rsclist.rowposition, "STS_EXP") == "Y"){
        		//	alert("계약서 작성 중 계약기간일이 도래되어 업무가 중단되었습니다.\n업체 재협의 후 다시 작성하시기 바랍니다.\n본 계약서는 7 영업일 후 자동 삭제될 예정입니다.");
        		//}else{
        		
        			var elt_ctrw_no = this.ds_rsclist.getColumn(this.ds_rsclist.rowposition, "ELT_CTRW_NO");
        			var chg_sqno = this.ds_rsclist.getColumn(this.ds_rsclist.rowposition, "CHG_SQNO");
        			var bf_ctr_no = this.ds_rsclist.getColumn(this.ds_rsclist.rowposition, "BF_CTR_NO");
        			var bf_ctr_sqno = this.ds_rsclist.getColumn(this.ds_rsclist.rowposition, "BF_CTR_SQNO");
        			var sts = this.ds_rsclist.getColumn(this.ds_rsclist.rowposition, "STS");
        			
        			if (sts == "3") {
        				//재검토 요청상태일때  = 1
        				//전자 계약변경 대상 = 2
        				var CtrwChg = "1";
        				var oArg = {paramMode:"U", dsArg:this.ds_rsclist, ELT_CTRW_NO:elt_ctrw_no ,CHG_SQNO:chg_sqno ,CTRW_CHG:CtrwChg, BF_CTR_NO:bf_ctr_no, BF_CTR_SQNO:bf_ctr_sqno};

        				var sOption = "autosize=true,title=true";
        				var sPopupCallBack = "fn_popupAfter";
        				this.gfn_openPopup("popId","OMG.CT::OMG_DS_SC_2111_01.xfdl",oArg,sOption,sPopupCallBack);
        			} else {
        				var delFlag = this.fn_canDelElt(this.ds_rsclist.rowposition);
        				var CtrwChg = "0";
        				var oArg = {paramMode:"U", dsArg:this.ds_rsclist, ELT_CTRW_NO:elt_ctrw_no,CHG_SQNO:chg_sqno ,CTRW_CHG:CtrwChg, BF_CTR_NO:bf_ctr_no, BF_CTR_SQNO:bf_ctr_sqno, DEL_FLAG:delFlag};
        				var sOption = "autosize=true,title=true";
        				var sPopupCallBack = "fn_popupAfter";
        				this.gfn_openPopup("popId","OMG.CT::OMG_DS_SC_2111.xfdl",oArg,sOption,sPopupCallBack);
        			}
        		//}
        	}
        }

        this.div_list_btu_div_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        this.btn_excel_onclick = function(obj,e)
        {
        	//this.gfn_exportExcel(this.div_list.grd_rsclist,"Excel");

        	//this.fn_excel();
        	var nX = system.clientToScreenX(obj, 0) - system.clientToScreenX(application.mainframe, 0); 
        	var nY = system.clientToScreenY(obj, parseInt(obj.height)) - system.clientToScreenY(application.mainframe, 0); 
        	
        	this.PopupDiv00.trackPopup(nX, nY);	
        }

        this.PopupDiv00_ListBox02_onitemclick = function(obj,e)
        {
        	if (this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value) > 366) {
        		this.alert("서버부하를 방지하기 위해 엑셀 다운로드 시 검색기간은 최대 1년까지으로 제한됩니다.");
        		return;
        	}
        	
        	if (e.itemvalue == '1') {
        		this.fn_excel();
        	} else if (e.itemvalue == '2') {
        		this.fn_excel_report();
        	} else {
        		var schParam = this.makeSearchParam(true, false);
        		var buyerDsc = this.gfn_nullToEmpty(this.cbo_mnCtrwKdM2.value);
        		if (buyerDsc == "14") {
        			if (this.ds_form.rowcount == 0) {
        				this.alert("상세조회 항목이 선택되지 않았습니다.");
        				return;
        			}
        		
        			excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelReportEltDetail?" + schParam + "&xml=" + this.fn_makeDsToParam(), this);
        			/*
        			var strDownUrl = application.gv_server_url+"rest/excel/downloadExcelReportEltDetail?" + schParam + "&xml=" + this.fn_makeDsToParam();
        			if (this.gfn_isNull(this.wv_excel)) {
        				this.wv_excel = this.gfn_createWebBorwserComponent(this);
        			}
        			this.wv_excel.set_url(strDownUrl);
        			*/
        		} else {
        			this.alert("해당 양식은 계약서 구분이 '테넌트'일 경우에만 이용할 수 있습니다.");
        			return;
        		}
        	}
        }

        /**
         * 엑셀 상세조회 파라매터 생성
         */
        this.fn_makeDsToParam = function()
        {
        	var param = "";
        	for (var i=0; i<this.ds_form.rowcount; i++) {
        		var kd = this.ds_form.getColumn(i, "MN_CTRW_KD");
        		var kdNm = this.ds_form.getColumn(i, "MN_CTRW_KDNM");
        		var code = this.ds_form.getColumn(i, "CODE");
        		var value = this.ds_form.getColumn(i, "VALUE");
        		
        		if (this.gfn_isNull(kd)) { continue; }
        		if (param != "") { param += "|"; }
        		param += kd + "@" + kdNm + "@" + code + "@" + value;
        	}
        	
        	return encodeURIComponent(param);
        }

        this.fn_excel = function()
        {
        	if (this.fn_validationCheck()) {
        		var param = this.makeSearchParam(false, false);
        		param += " excel=Y";

        		var sSvcID        = "excelEltCtrwList";//통신아이디
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
        		this.btn_search.click();
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
        	var chkCount = 0;
        	var rowposition = -1;
        	var loginNm = application.gv_userName; // 로그인 이름
        	var buyerNm;
        	for (var i = 0; i < this.ds_rsclist.rowcount; i++) {
        		if (this.ds_rsclist.getColumn(i, "ISCHECKED") == "1") {
        			chkCount++;
        			rowposition = i;
        			buyerNm = this.ds_rsclist.getColumn(i, "BUYER_NM");
        		}
        	}

        	var sts = this.ds_rsclist.getColumn(rowposition, "STS");
        	if (chkCount == 0) {
        		alert('선택된 전자계약서가 없습니다.');
        		return;
        	} else if (chkCount > 1) {
        		alert('한 건의 전자계약서만 체크해주세요.');
        		return;
        	} else if (loginNm != buyerNm) {
        		alert("담당바이어만 파일 첨부를 할 수 있습니다.");
        		return;
        	} else if (sts != 'A') {
        		alert('상태가 완료일 경우에만 파일 첨부를 할 수 있습니다.');
        		return;
        	}

        	var elt_ctrw_no = this.ds_rsclist.getColumn(rowposition, "ELT_CTRW_NO");

        	var oArg = {ELT_CTRW_NO : elt_ctrw_no };
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("file_add","OMG.CT::popup02.xfdl",oArg,sOption,sPopupCallBack);
        }

        /*해지*/
        this.btn_cancel_onclick = function(obj,e)
        {
        	var chkCount = 0;
        	var rowposition = -1;
        	var loginNm = application.gv_userName; // 로그인 이름
        	var buyerNm;
        	for (var i = 0; i < this.ds_rsclist.rowcount; i++) {
        		if (this.ds_rsclist.getColumn(i, "ISCHECKED") == "1") {
        			chkCount++;
        			rowposition = i;
        			buyerNm = this.ds_rsclist.getColumn(i, "BUYER_NM");
        		}
        	}

        	var sts = this.ds_rsclist.getColumn(rowposition, "STS");
        	if (chkCount == 0) {
        		alert('선택된 전자계약서가 없습니다.');
        		return;
        	} else if (chkCount > 1) {
        		alert('한 건의 전자계약서만 체크해주세요.');
        		return;
        	} else if (loginNm != buyerNm) {
        		alert("담당바이어만 계약서를 해지할 수 있습니다.");
        		return;
        	} else if (sts != 'A') {
        		alert('상태가 완료일 경우에만 해지가 가능합니다.');
        		return;
        	}

        	var elt_ctrw_no = this.ds_rsclist.getColumn(rowposition, "ELT_CTRW_NO");
        	var chg_sqno = this.ds_rsclist.getColumn(rowposition, "CHG_SQNO");
        	var ctrw_kdc = this.ds_rsclist.getColumn(rowposition, "MN_CTRW_KD");

        	var oArg = {eltCtrwNo:elt_ctrw_no, chgSqno:chg_sqno, mnCtrwKd:ctrw_kdc};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("cancelPopup","OMG.CT::OMG_DS_SC_2110_P01.xfdl",oArg,sOption,sPopupCallBack);

        	/*
        	param = "elt_ctrw_no="+elt_ctrw_no+" chg_sqno="+chg_sqno + " ctrw_kdc=" + ctrw_kdc;

        	var sSvcID        = "cancel";//통신아이디
        	var sURL          = "svc::rest/ct/eltctrw/updateCancelElt";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_rsclist=ds_rsclist";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	*/
        }

        this.div_search_cbo_kd00_onitemchanged = function(obj,e)
        {
        	if (this.div_search.cbo_kd00.value == 0) {
        		this.div_search.edt_userId.set_value("");
        		this.div_search.edt_userId.set_readonly(true);
        	} else {
        		this.div_search.edt_userId.set_readonly(false);
        	}

        }

        this.div_search_cbo_kd_onitemchanged = function(obj,e)
        {
        	if (this.div_search.cbo_kd.value == 0) {
        		this.div_search.edt_kd.set_value("");
        		this.div_search.edt_kd.set_readonly(true);
        	} else {
        		this.div_search.edt_kd.set_readonly(false);
        	}
        }

        //계약담당자 구분
        this.cbo_mnCtrwKdM2_onitemchanged = function(obj,e)
        {
        	this.ds_mnCtrwKdMC_Temp.clearData();
        	this.div_search.div_mnCtrwKd._clearValue();
        //	this.ds_mnCtrwKdMC_Temp.insertRow(0);

        	var buyerCD=this.cbo_mnCtrwKdM2.value;	//cd_m 값

        	if (buyerCD > 0 ) {
        		this.div_search.div_mnCtrwKd.set_enable(true);
        		this.fn_codeDSC(buyerCD);
        		
        		this.div_search.sta_search_detail.set_visible(buyerCD == "14");
        		this.div_search.sta_search_cnt.set_visible(buyerCD == "14");
        		this.div_search.btn_detail.set_visible(buyerCD == "14");
        		if (buyerCD == "14") {
        			this.ds_form.clearData();
        			this.div_search.sta_search_cnt.set_text("");
        		}
        	} else {
         		this.div_search.div_mnCtrwKd.set_enable(false);
         	}
        }

        this.delPosition;
        this.fn_canDelElt = function(index)
        {
        	var chkCount = 0;
        	var rowposition = -1;
        	this.delPosition = -1;
        	
        	if (!this.gfn_isNull(index)) {
        		chkCount = 1;
        		rowposition = index;
        		this.delPosition = index;
        	} else {
        		for (var i = 0; i < this.ds_rsclist.rowcount; i++) {
        			if (this.ds_rsclist.getColumn(i, "ISCHECKED") == "1") {
        				chkCount++;
        				rowposition = i;
        				this.delPosition = i;
        			}
        		}
        	}
        	
        	var loginNm = application.gv_userName; // 로그인 이름
        	var buyerNm = this.ds_rsclist.getColumn(rowposition, "BUYER_NM");
        	var sts = this.ds_rsclist.getColumn(rowposition, "STS");
        	var stsNm = this.ds_rsclist.getColumn(rowposition, "STS_NM");
        	var msg = "";
        	var delFlag = "N";
        	
        	if (chkCount == 0) {
        		msg = '선택된 전자계약서가 없습니다.';
        		delFlag = "N";
        	} else if (chkCount > 1) {
        		msg = '한 건의 전자계약서만 체크해주세요.';
        		delFlag = "N";
        	} else if (loginNm != buyerNm) {
        		msg = '담당바이어만 계약서를 삭제할 수 있습니다.';
        		delFlag = "N";
        	} else if (sts != '1' || stsNm == "계약종료") {
        		msg = '[계약서작성] 상태가 아닌 계약서는 삭제할 수 없습니다.';
        		delFlag = "N";
        	} else {
        		var lschgm = this.ds_rsclist.getColumn(rowposition, "LS_CHGM");
        		if (this.gfn_length(application.gds_servertime.getColumn(0,"CURRENT_TIME")) != 12) {
        			this.svTime = this.gfn_getServerTime("yyyyMMddHHmm");
        		}
        		var last = this.gfn_getNum(this.ds_rsclist.getColumn(rowposition, "LSCHG_DTM"));
        		
        		if (application.gv_userId != lschgm) {
        			if ((this.svTime - last) > 9999) {
        				// 삭제 가능(24시간 경과)
        				msg = '계약 협력업체가 해당 계약서를 조회한 이력이 있습니다.\n정말 삭제하시겠습니까?';
        				delFlag = "C"; // 삭제가능, 주의
        			} else {
        				// 삭제 불가(24시간 미경과)
        				delFlag = "N";
        				var lschgdtm = this.ds_rsclist.getColumn(rowposition, "LSCHG_DTM");
        				msg = "현재 이 계약서는 삭제할 수 없습니다.\n(협력업체 최초 조회 후 24시간 경과 후 삭제 가능)"
        					+ "\n\n업체열람시각 : "
        					+ lschgdtm.substring(0,4) + "년 " +lschgdtm.substring(4,6) + "월 "
        					+ lschgdtm.substring(6,8) + "일 "
        					+ lschgdtm.substring(8,10) + "시 " + lschgdtm.substring(10,12) + "분";
        			}
        		} else {
        			// 삭제 가능(협력업체 미열람)
        			msg = '해당 계약서를 정말 삭제하시겠습니까?';
        			delFlag = "Y";
        		}
        	}
        	
        	if (this.gfn_isNull(index)) {
        		if (delFlag != "N") {
        			if (!this.confirm(msg)) {
        				delFlag = "N";
        				this.delPosition = -1;
        			}
        		} else {
        			this.alert(msg);
        			this.delPosition = -1;
        		}
        	}
        	return delFlag;
        }

        this.btn_delete_onclick = function(obj,e)
        {	
        	if (this.fn_canDelElt() != "N") {
        		var elt_ctrw_no = this.ds_rsclist.getColumn(this.delPosition, "ELT_CTRW_NO");
        		var chg_sqno = this.ds_rsclist.getColumn(this.delPosition, "CHG_SQNO");
        		var param = "eltCtrwNo=" + elt_ctrw_no + " chgSqno=" + chg_sqno;
        		
        		var sSvcID        = "deleteElt";
        		var sURL          = "svc::rest/ct/eltctrw/deleteEltCtrw";
        		var sInDatasets   = "";
        		var sOutDatasets  = "";
        		var sArgument     = param;
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U";

        		//API 호출
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        this.div_search_btn_detail_onclick = function(obj,e)
        {
        	var buyerDsc = this.gfn_nullToEmpty(this.cbo_mnCtrwKdM2.value);
        	if (buyerDsc == "14") {
        		var oArg = {BUYER_DSC:buyerDsc, XML:this.ds_form.saveXML()};
        		var sOption = "autosize=true";
        		var sPopupCallBack = "fn_popupAfter";
        		this.gfn_openPopup("detailPopup", "OMG.CT::OMG_DS_SC_2110_P02.xfdl", oArg, sOption, sPopupCallBack);
        	} else {
        		this.alert("해당 양식은 계약서 구분이 '테넌트'일 경우에만 이용할 수 있습니다.");
        		return;
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.OMG_DS_SC_2110_onload, this);
            this.addEventHandler("onkeydown", this.OMG_DS_SC_2110_onkeydown, this);
            this.div_search.cbo_kd.addEventHandler("onitemchanged", this.div_search_cbo_kd_onitemchanged, this);
            this.div_search.cbo_kd00.addEventHandler("onitemchanged", this.div_search_cbo_kd00_onitemchanged, this);
            this.div_search.btn_detail.addEventHandler("onclick", this.div_search_btn_detail_onclick, this);
            this.btn_history.addEventHandler("onclick", this.btn_history_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.div_list.grd_rsclist.addEventHandler("oncellclick", this.div_rsclist_oncellclick, this);
            this.div_list.btu_div.addEventHandler("onclick", this.div_list_btu_div_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_confirm.addEventHandler("onclick", this.btn_confirm_onclick, this);
            this.btn_file_add.addEventHandler("onclick", this.btn_flie_add_onclick, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_cancel_onclick, this);
            this.cbo_mnCtrwKdM2.addEventHandler("onitemchanged", this.cbo_mnCtrwKdM2_onitemchanged, this);
            this.btn_delete.addEventHandler("onclick", this.btn_delete_onclick, this);
            this.PopupDiv00.ListBox02.addEventHandler("onitemclick", this.PopupDiv00_ListBox02_onitemclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_2110.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
