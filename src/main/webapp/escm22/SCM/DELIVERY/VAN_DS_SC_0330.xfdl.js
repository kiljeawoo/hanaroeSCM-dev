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
                this.set_name("VAN_DS_SC_0330");
                this.set_titletext("배송예정 거래처별조회");
                this._setFormPosition(0,0,803,1007);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pageVO01", this);
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

            obj = new Dataset("ds_pageVO02", this);
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

            obj = new Dataset("ds_dataM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RN\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"RVOPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"RVOPL_NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"DVYAA_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"DVYAA_NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"NA_DVY_PLASH_SLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_PLA_DT\" type=\"DATE\" size=\"256\"/><Column id=\"DVY_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DVY_VAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CSER_CTR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"SPYPL_NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"FSRGMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_SSDY\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_SSDYRT\" type=\"STRING\" size=\"256\"/><Column id=\"BYAM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BYNG_QT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SLP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"NA_SLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TRPL_N\" type=\"STRING\" size=\"256\"/><Column id=\"DDLY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ODRPL_NA_TEAM_N\" type=\"STRING\" size=\"256\"/><Column id=\"STS_DVY_PLA_QT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"STS_DVY_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"STS_BYAM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"STS_BYNG_QT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GRS_SOJU_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_PLA_STS\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CMENO\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"SLPNO_RMS_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PBDDLY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_PLASH_CRT_DSC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"RN\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_SLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_DSQNO\" type=\"STRING\" size=\"256\"/><Column id=\"TXT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"PD_YY\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_WRS_UPR\" type=\"FLOAT\" size=\"256\"/><Column id=\"DVY_PLA_QT\" type=\"FLOAT\" size=\"256\"/><Column id=\"DVY_AM\" type=\"FLOAT\" size=\"256\"/><Column id=\"DVY_VAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DVY_VCBT_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DVY_SSDY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DVY_TROT_FEE\" type=\"FLOAT\" size=\"256\"/><Column id=\"DVY_PHD_FEE\" type=\"FLOAT\" size=\"256\"/><Column id=\"DVY_FAR_ASTCS\" type=\"FLOAT\" size=\"256\"/><Column id=\"BYNG_UPR\" type=\"FLOAT\" size=\"256\"/><Column id=\"BYNG_QT\" type=\"FLOAT\" size=\"256\"/><Column id=\"BYNG_WT\" type=\"FLOAT\" size=\"256\"/><Column id=\"BYAM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DVY_PLASH_STAC\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_SSDYRT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DVY_PLA_SQNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("ds_sum", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DVY_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DVY_VAT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"STS_DVY_PLA_QT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DVY_SSDY\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_SSDYRT\" type=\"STRING\" size=\"256\"/><Column id=\"BYNT_QT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BYAM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"STS_DVY_AM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"STS_BYNG_QT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"STS_BYAM\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_uploadresult", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"32\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"32\"/><Column id=\"FILESIZE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"32\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "119", "15", null, this);
            obj.set_taborder("30");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "15", "33", "115", "21", null, null, this.div_search);
            obj.set_taborder("59");
            obj.set_text("배송예정서번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "756", "-2", null, "69", "201", null, this.div_search);
            obj.set_taborder("60");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_dvy_plash_slpno", "absolute", "123", "33", "156", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_dvy_plash_slpno_innerdataset = new Dataset("rdo_dvy_plash_slpno_innerdataset", this.div_search.rdo_dvy_plash_slpno);
            rdo_dvy_plash_slpno_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">배송예정서</Col></Row></Rows>");
            obj.set_innerdataset(rdo_dvy_plash_slpno_innerdataset);
            obj.set_taborder("71");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.style.set_font("9 Gulim");
            obj.set_readonly("false");
            obj.set_enable("true");
            obj.set_index("0");
            obj = new Calendar("cal_dvy_pla_dt_from", "absolute", "123", "8", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("72");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static08", "absolute", "231", "8", "10", "21", null, null, this.div_search);
            obj.set_taborder("73");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_dvy_pla_dt_to", "absolute", "248", "8", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("74");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static02", "absolute", "15", "8", "103", "21", null, null, this.div_search);
            obj.set_taborder("82");
            obj.set_text("배송예정일자");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "283", "-1", null, "10", "355", null, this.div_search);
            obj.set_taborder("91");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "378", "8", "79", "21", null, null, this.div_search);
            obj.set_taborder("97");
            obj.set_text("계약유형");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_cser_ctr_tpc", "absolute", "448", "8", "126", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("98");
            obj.set_innerdataset("ds_ctr_tpc");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_enable("true");
            obj.set_index("-1");
            obj = new Edit("edt_na_dvy_plash_slpno", "absolute", "285", "33", "148", "21", null, null, this.div_search);
            obj.set_taborder("99");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_pup_deliveryNotice", "absolute", "434", "33", "21", "21", null, null, this.div_search);
            obj.set_taborder("100");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "603", "8", "79", "21", null, null, this.div_search);
            obj.set_taborder("101");
            obj.set_text("배송구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "15", "60", "103", "21", null, null, this.div_search);
            obj.set_taborder("103");
            obj.set_text("발주처");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_odrpl_na_trpl_c", "absolute", "123", "60", "140", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_odrpl_na_trpl_c_innerdataset = new Dataset("rdo_odrpl_na_trpl_c_innerdataset", this.div_search.rdo_odrpl_na_trpl_c);
            rdo_odrpl_na_trpl_c_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">발주처</Col></Row></Rows>");
            obj.set_innerdataset(rdo_odrpl_na_trpl_c_innerdataset);
            obj.set_taborder("104");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.style.set_font("9 Gulim");
            obj.set_index("0");
            obj = new Edit("edt_odrpl_na_trpl_c", "absolute", "253", "59", "122", "21", null, null, this.div_search);
            obj.set_taborder("105");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_odrpl_na_trpl_n", "absolute", "377", "59", "169", "21", null, null, this.div_search);
            obj.set_taborder("106");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_trplO", "absolute", "548", "59", "21", "21", null, null, this.div_search);
            obj.set_taborder("107");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "603", "59", "79", "21", null, null, this.div_search);
            obj.set_taborder("109");
            obj.set_text("정렬순서");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "605", "85", "103", "21", null, null, this.div_search);
            obj.set_taborder("110");
            obj.set_text("지방소주여부");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_grs_soju_yn", "absolute", "695", "85", "71", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_grs_soju_yn_innerdataset = new Dataset("cbo_grs_soju_yn_innerdataset", this.div_search.cbo_grs_soju_yn);
            cbo_grs_soju_yn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">all</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">[0] 부</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">[1] 여</Col></Row></Rows>");
            obj.set_innerdataset(cbo_grs_soju_yn_innerdataset);
            obj.set_taborder("111");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("all");
            obj.set_text("전체");
            obj.set_index("0");
            obj = new Static("sta_title_fileName", "absolute", "16", "87", "99", "21", null, null, this.div_search);
            obj.set_taborder("110");
            obj.set_text("직인파일");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "771", "-1", "15", "145", null, null, this.div_search);
            obj.set_taborder("134");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new FileUpload("FileUpload00", "absolute", "123", "87", "280", "21", null, null, this.div_search);
            obj.set_taborder("135");
            obj.set_multiselect("true");
            obj.getSetter("timeout").set("0");
            obj.getSetter("retry").set("0");
            obj.getSetter("async").set("true");
            obj.getSetter("onload").set("FileUpload00_onload");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("Button01", "absolute", "457", "33", "65", "21", null, null, this.div_search);
            obj.set_taborder("125");
            obj.set_text("다운로드");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title_fileName00", "absolute", "603", "34", "57", "21", null, null, this.div_search);
            obj.set_taborder("136");
            obj.set_text("상태");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("rdo_ddly_yn", "absolute", "669", "8", "98", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_ddly_yn_innerdataset = new Dataset("rdo_ddly_yn_innerdataset", this.div_search.rdo_ddly_yn);
            rdo_ddly_yn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">일반</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">직송</Col></Row></Rows>");
            obj.set_innerdataset(rdo_ddly_yn_innerdataset);
            obj.set_taborder("140");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("2");
            obj.set_text("전체");
            obj.set_index("0");
            obj = new Combo("rdo_sort", "absolute", "669", "59", "98", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_sort_innerdataset = new Dataset("rdo_sort_innerdataset", this.div_search.rdo_sort);
            rdo_sort_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">예정서번호</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">배송예정일</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">발주처</Col></Row></Rows>");
            obj.set_innerdataset(rdo_sort_innerdataset);
            obj.set_taborder("141");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("2");
            obj.set_text("배송예정일");
            obj.set_index("1");
            obj = new Static("Static16", "absolute", "348", "-2", "30", "184", null, null, this.div_search);
            obj.set_taborder("143");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("rdo_dvy_pla_sts", "absolute", "669", "33", "98", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_dvy_pla_sts_innerdataset = new Dataset("rdo_dvy_pla_sts_innerdataset", this.div_search.rdo_dvy_pla_sts);
            rdo_dvy_pla_sts_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">all</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">00</Col><Col id=\"datacolumn\">전송중</Col></Row><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">배송예정</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">검수</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">매입</Col></Row><Row><Col id=\"codecolumn\">04</Col><Col id=\"datacolumn\">인수거절</Col></Row><Row><Col id=\"codecolumn\">05</Col><Col id=\"datacolumn\">삭제</Col></Row><Row><Col id=\"codecolumn\">06</Col><Col id=\"datacolumn\">취소</Col></Row><Row><Col id=\"codecolumn\">07</Col><Col id=\"datacolumn\">미매입</Col></Row></Rows>");
            obj.set_innerdataset(rdo_dvy_pla_sts_innerdataset);
            obj.set_taborder("146");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_text("전체");
            obj.set_index("0");
            obj = new Static("Static03", "absolute", "211", "108", null, "10", "427", null, this.div_search);
            obj.set_taborder("147");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "147", null, null, "15", "39", this);
            obj.set_taborder("0");
            obj.set_text("Div02");
            obj.set_scrollbars("autoboth");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            obj = new Button("Button10", "absolute", "331", "0", null, "12", "330", null, this.div_list);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "936", "-1", null, "15", "2", null, this.div_list);
            obj.set_taborder("32");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "936", "35", null, "5", "2", null, this.div_list);
            obj.set_taborder("34");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "733", "1", "55", "15", null, null, this.div_list);
            obj.set_taborder("44");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_page02", "absolute", "9.9%", null, "338", "44", null, "-108", this.div_list);
            obj.set_taborder("41");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_detail", "absolute", "0", "333", null, "473", "0", null, this.div_list);
            obj.set_taborder("45");
            obj.set_binddataset("ds_dataD");
            obj.set_useselcolor("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"39\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"28\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"상품코드\"/><Cell col=\"2\" text=\"상품명\"/><Cell col=\"3\" text=\"발주전표번호&#13;&#10;일련번호\"/><Cell col=\"4\" text=\"과세구분\"/><Cell col=\"5\" text=\"생산년도\"/><Cell col=\"6\" text=\"배송상품단가\"/><Cell col=\"7\" text=\"배송예정수량\"/><Cell col=\"8\" text=\"배송금액\"/><Cell col=\"9\" text=\"배송부가세\"/><Cell col=\"10\" text=\"배송공병금액\"/><Cell col=\"11\" text=\"배송장려금\"/><Cell col=\"12\" text=\"배송환급수수료\"/><Cell col=\"13\" text=\"배송물류수수료\"/><Cell col=\"14\" text=\"배송운임보조비\"/><Cell col=\"15\" text=\"매입확정단가\"/><Cell col=\"16\" text=\"매입확정수량\"/><Cell col=\"17\" text=\"매입확정중량\"/><Cell col=\"18\" text=\"매입확정금액\"/><Cell col=\"19\" text=\"배송예정서상태코드\"/><Cell col=\"20\" text=\"배송장려금율\"/></Band><Band id=\"body\"><Cell text=\"bind:DVY_PLA_SQNO\"/><Cell col=\"1\" text=\"bind:NA_WRS_C\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:WRSNM\"/><Cell col=\"3\" text=\"expr:ODR_SLPNO.indexOf('--') == -1 ? ODR_SLPNO : ''\"/><Cell col=\"4\" text=\"bind:TXT_DSC\"/><Cell col=\"5\" text=\"bind:PD_YY\"/><Cell col=\"6\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DVY_WRS_UPR\" mask=\"#,##0.99\"/><Cell col=\"7\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DVY_PLA_QT\" mask=\"#,##0\"/><Cell col=\"8\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DVY_AM\" mask=\"#,##0\"/><Cell col=\"9\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DVY_VAT\" mask=\"#,##0\"/><Cell col=\"10\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DVY_VCBT_AM\" mask=\"#,##0\"/><Cell col=\"11\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DVY_SSDY\" mask=\"#,##0\"/><Cell col=\"12\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DVY_TROT_FEE\" mask=\"#,##0\"/><Cell col=\"13\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DVY_PHD_FEE\" mask=\"#,##0\"/><Cell col=\"14\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DVY_FAR_ASTCS\" mask=\"#,##0\"/><Cell col=\"15\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:BYNG_UPR\" mask=\"#,##0\"/><Cell col=\"16\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:BYNG_QT\" mask=\"#,##0\"/><Cell col=\"17\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:BYNG_WT\"/><Cell col=\"18\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:BYAM\" mask=\"#,##0\"/><Cell col=\"19\" text=\"bind:DVY_PLASH_STAC\"/><Cell col=\"20\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DVY_SSDYRT\" mask=\"#,##0\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" style=\"align:center;\" text=\"합계\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\" displaytype=\"number\" expr=\"expr:dataset.getSum('DVY_PLA_QT')\" mask=\"#,##0\"/><Cell col=\"8\" displaytype=\"number\" expr=\"expr:dataset.getSum('DVY_AM')\" mask=\"#,##0\"/><Cell col=\"9\" displaytype=\"number\" expr=\"expr:dataset.getSum('DVY_VAT')\" mask=\"#,##0\"/><Cell col=\"10\" displaytype=\"number\" expr=\"expr:dataset.getSum('DVY_VCBT_AM')\" mask=\"#,##0\"/><Cell col=\"11\" displaytype=\"number\" expr=\"expr:dataset.getSum('DVY_SSDY')\" mask=\"#,##0\"/><Cell col=\"12\" displaytype=\"number\" expr=\"expr:dataset.getSum('DVY_TROT_FEE')\" mask=\"#,##0\"/><Cell col=\"13\" displaytype=\"number\" expr=\"expr:dataset.getSum('DVY_PHD_FEE')\" mask=\"#,##0\"/><Cell col=\"14\" displaytype=\"number\" expr=\"expr:dataset.getSum('DVY_FAR_ASTCS')\" mask=\"#,##0\"/><Cell col=\"15\" displaytype=\"number\" expr=\"expr:dataset.getSum('BYNG_UPR')\" mask=\"#,##0\"/><Cell col=\"16\" displaytype=\"number\" expr=\"expr:dataset.getSum('BYNG_QT')\" mask=\"#,##0\"/><Cell col=\"17\" displaytype=\"number\" expr=\"expr:dataset.getSum('BYNG_WT')\" mask=\"#,##0\"/><Cell col=\"18\" displaytype=\"number\" expr=\"expr:dataset.getSum('BYAM')\" mask=\"#,##0\"/><Cell col=\"19\"/><Cell col=\"20\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_page01", "absolute", "28.55%", "289", "338", "44", null, null, this.div_list);
            obj.set_taborder("46");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_master", "absolute", "0", "42", null, "247", "0", null, this.div_list);
            obj.set_taborder("47");
            obj.set_binddataset("ds_dataM");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"39\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"133\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"250\"/><Column size=\"140\"/><Column size=\"73\"/><Column size=\"84\"/><Column size=\"92\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"90\"/><Column size=\"99\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"수주처\"/><Cell col=\"2\" text=\"수주처명\"/><Cell col=\"3\" text=\"배송지\"/><Cell col=\"4\" text=\"배송지명\"/><Cell col=\"5\" text=\"배송예정서번호\"/><Cell col=\"6\" text=\"배송예정일\"/><Cell col=\"7\" text=\"배송예정금액\"/><Cell col=\"8\" text=\"부가세\"/><Cell col=\"9\" text=\"전표상태\"/><Cell col=\"10\" text=\"수요자계약유형\"/><Cell col=\"11\" text=\"최초등록자\"/><Cell col=\"12\" text=\"최종변경자\"/><Cell col=\"13\" text=\"배송장려금\"/><Cell col=\"14\" text=\"배송장려금율\"/><Cell col=\"15\" text=\"매입확정수량\"/><Cell col=\"16\" text=\"매입확정금액\"/><Cell col=\"17\" text=\"매입전표일자\"/><Cell col=\"18\" text=\"매입전표번호\"/><Cell col=\"19\" text=\"발주처\"/><Cell col=\"20\" text=\"발주처명\"/><Cell col=\"21\" text=\"발주팀\"/><Cell col=\"22\" text=\"직송여부\"/><Cell col=\"23\" text=\"PB직송구분\"/><Cell col=\"24\" text=\"혁신점포구분\"/><Cell col=\"25\" text=\"배송예정수량\"/><Cell col=\"26\" text=\"배송예정금액\"/><Cell col=\"27\" text=\"매입수량\"/><Cell col=\"28\" text=\"매입금액\"/><Cell col=\"29\" text=\"최초등록일시\"/><Cell col=\"30\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:RN\"/><Cell col=\"1\" text=\"bind:RVOPL_NA_TRPL_C\"/><Cell col=\"2\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:RVOPL_NA_TRPL_N\"/><Cell col=\"3\" text=\"bind:DVYAA_NA_TRPL_C\"/><Cell col=\"4\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:DVYAA_NA_TRPL_N\"/><Cell col=\"5\" text=\"bind:NA_DVY_PLASH_SLPNO\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:DVY_PLA_DT\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DVY_AM\" mask=\"#,##0\"/><Cell col=\"8\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DVY_VAT\" mask=\"#,##0\"/><Cell col=\"9\" text=\"bind:DVY_PLA_STS\"/><Cell col=\"10\" text=\"bind:CSER_CTR_TPC\"/><Cell col=\"11\" text=\"bind:FSRGMN_ENO\"/><Cell col=\"12\" text=\"bind:LS_CMENO\"/><Cell col=\"13\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DVY_SSDY\" mask=\"#,##0\"/><Cell col=\"14\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:DVY_SSDYRT\"/><Cell col=\"15\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:BYNG_QT\" mask=\"#,##0\"/><Cell col=\"16\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:BYAM\" mask=\"#,##0\"/><Cell col=\"17\" displaytype=\"date\" text=\"bind:SLP_DT\" mask=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"18\" text=\"bind:NA_SLPNO\"/><Cell col=\"19\" text=\"bind:ODRPL_NA_TRPL_C\"/><Cell col=\"20\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:ODRPL_NA_TRPL_N\"/><Cell col=\"21\" text=\"bind:ODRPL_NA_TEAM_N\"/><Cell col=\"22\" expr=\"expr:DDLY_YN == '1' ? '직송' : '일반'\"/><Cell col=\"23\" expr=\"expr:PBDDLY_YN == '1' ? 'PB직송' : '일반'\"/><Cell col=\"24\" expr=\"expr:DVY_PLASH_CRT_DSC == '002' ? '혁신' : '일반'\"/><Cell col=\"25\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:STS_DVY_PLA_QT\" mask=\"#,##0\"/><Cell col=\"26\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:STS_DVY_AM\" mask=\"#,##0\"/><Cell col=\"27\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:STS_BYNG_QT\" mask=\"#,##0\"/><Cell col=\"28\" displaytype=\"number\" cssclass=\"Cellgrd_WF_AlignRight\" text=\"bind:STS_BYAM\" mask=\"#,##0\"/><Cell col=\"29\" text=\"bind:SLPNO_RMS_DTM\"/><Cell col=\"30\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" style=\"align:center;\" text=\"합계\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'DVY_AM')\" mask=\"#,##0\"/><Cell col=\"8\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'DVY_VAT')\" mask=\"#,##0\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'DVY_SSDY')\" mask=\"#,##0\"/><Cell col=\"14\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'DVY_SSDYRT')\" mask=\"#,##0\"/><Cell col=\"15\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'BYNG_QT')\" mask=\"#,##0\"/><Cell col=\"16\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'BYAM')\" mask=\"#,##0\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'STS_DVY_PLA_QT')\" mask=\"#,##0\"/><Cell col=\"26\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'STS_DVY_AM')\" mask=\"#,##0\"/><Cell col=\"27\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'STS_BYNG_QT')\" mask=\"#,##0\"/><Cell col=\"28\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'STS_BYAM')\" mask=\"#,##0\"/><Cell col=\"29\"/><Cell col=\"30\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "638", "37", null, "5", "0", null, this.div_list);
            obj.set_taborder("48");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_excel02", "absolute", null, "16", "41", "21", "0", null, this.div_list);
            obj.set_taborder("49");
            obj.set_text("엑셀");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_master_print", "absolute", null, "16", "50", "21", "43", null, this.div_list);
            obj.set_taborder("50");
            obj.set_text("출력");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "302", null, "5", "-8", null, this.div_list);
            obj.set_taborder("51");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_excel03", "absolute", null, "307", "41", "22", "0", null, this.div_list);
            obj.set_taborder("52");
            obj.set_text("엑셀");
            this.div_list.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", "397", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "1", "30", null, "69", "977", null, this);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "85", "30", null, "69", "886", null, this);
            obj.set_taborder("8");
            obj.set_text("22");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "788", "0", "15", "490", null, null, this);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "923", "308", null, "15", "15", null, this);
            obj.set_taborder("15");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "923", "344", null, "5", "15", null, this);
            obj.set_taborder("16");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("41");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", null, "5", "5", "11", "215", null, this);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_Vdash");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "341", null, this);
            obj.set_taborder("47");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "369", null, this);
            obj.set_taborder("49");
            obj.set_text("div_auth");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print", "absolute", null, "0", "41", "21", "231", null, this);
            obj.set_taborder("50");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel01", "absolute", null, "0", "65", "21", "274", null, this);
            obj.set_taborder("51");
            obj.set_text("엑셀상세");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_tr_print", "absolute", null, "0", "101", "21", "128", null, this);
            obj.set_taborder("52");
            obj.set_text("거래명세서출력");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web_downExcel", "absolute", "472", "21", "44", "14", null, null, this);
            obj.set_taborder("53");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("ozType", "absolute", "816", "75", "44", "16", null, null, this);
            obj.set_taborder("54");
            obj.set_visible("false");
            obj.set_value("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dum_print", "absolute", null, "0", "51", "21", "75", null, this);
            obj.set_taborder("55");
            obj.set_text("덤상품");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 119, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("30");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 338, 44, this.div_list.div_page02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("41");
            		p.set_url("common::pagingBTN.xfdl");
            		p.style.set_align("center");
            		p.set_visible("false");

            	}
            );
            this.div_list.div_page02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 978, 800, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div02");
            		p.set_scrollbars("autoboth");
            		p.set_visible("true");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 1007, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("배송예정 거래처별조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
            this._addPreloadList("fdl", "common::location.xfdl");
            this._addPreloadList("fdl", "common::AuthorityWorkplace.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_0330.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0330.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";
        /*##################################################################################
         화면ID 	: VAN_DS_SC_0330
         화면명	: 배송예정거래처별조회
         작성자	: swha
         작성일자	: 2015.08.26

         1. 실제배송금액 및 부가세 확인필요(컬럼 존재 하지 않음)
         2. PRC_YN = 'R' AND TEMP_YN = 'N'
        ####################################################################################*/
        /***************************************************************************************
        	code        : 호출할 공통코드
        	dsName      : 호출된 공통코드를 담을 Dataset
        	selecttype  : ComboBox 최상단에 추가할 문구( A: -전체-, S:-선택-, N: 빈칸)

        	selecttype은 추후 변경될 수 있음.
        	this.fn_commonAfterOnload를 화면에 선언하면 gfn_setCommonCode처리후 호출됨.
        *****************************************************************************************/
        /* form load */
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e);

        	var ozParam = {
        				form:this, 						//공통
        				ozBtn:this.btn_tr_print, 		//출력버튼
        				ozFnc:'btn_tr_print_onclick'	//오즈실행 함수명
        			  };
            this.addOzBtnAdd(ozParam);

        	var fileParam = {
        		form:this, 
        		param:[{
        				fileObj: this.div_search.FileUpload00, 
        				maxSize:1, 										//허용할 파일 사이즈(MB)
        				maxLength:1, 									//허용할 파일갯수
        				ext:['jpg', 'jpeg', 'png', 'gif'], 					//허용할 확장자명
        				//valid_after_fail: 'FileUpload00_onerror', 	//파일검사 실패후 호출할 함수이름
        				upload_after_succ: 'FileUpload00_onsuccess'    	//파일 업로드 성공후 호출할 함수이름
        				//upload_after_fail: 'FileUpload00_onerror'  	//파일 업로드 실패후 호출할 함수이름

        			}]
        	};
        	this.gfn_addEventFileUpload(fileParam);

        	var param = [
         		{code:"CSER_CTR_TPC", dsName:"ds_ctr_tpc", selecttype:"A"}
            ];
        	this.gfn_setCommonCode(param);
        }

        /* Form Init*/
        this.form_init = function(obj,e)
        {

        }

        //UPLOAD
        /*
        this.FileUpload00_onitemchanged = function(obj:FileUpload, e:nexacro.FileUploadItemChangeEventInfo)
        {
        	this.gfn_callUpload(obj);
        }
        */

        this.FileUpload00_onsuccess = function(obj,e)
        {
        	this.ds_uploadresult.clear();
        	this.ds_uploadresult.copyData(e.datasets[0]);
        	this.ds_uploadresult.addColumn("CHK", "string"); //멀티건 인경우 'CHK'컬럼추가
        }

        /*
        this.FileUpload00_onerror = function(obj:FileUpload, e:nexacro.FileUploadErrorEventInfo)
        {
        	trace("FileUpload00_onerror");
        	trace("e.errorcode: "+e.errorcode);
        	trace("e.errormsg: "+e.errormsg);
        }
        */

        //공통코드 데이터셋 onload후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        	this.div_search.cbo_cser_ctr_tpc.set_index(0);
        }

        /* 페이지 로딩후 실행부분 */
        this.fn_afterFormOnload = function()
        {
        	var param = {
        		form: this, 										//공통(필수)
        		m_grd: this.div_list.grd_master, 				//마스터 그리드
        		m_pageDiv: this.div_list.div_page01, 		    //마스터 페이지DIV
        		m_afterFnc: this.grd_afterFnc, 					//마스터 그리드 클릭이벤트
        		d_grd: this.div_list.grd_detail, 				//디테일 그리드
        		d_pageDiv: this.div_list.div_page02		    //디테일 페이지DIV
        	};

        	param.m_pageDiv.addPageEvent(param);

        	//그리드클릭 이벤트 등록
        	//this.div_list.grd_master.addEventHandler("oncellclick", this.grd_afterFnc, this);

        	//그리드 nodata
        	this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	this.div_list.grd_detail.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));

        	var today = this.gfn_today('yyyyMMdd');
        	this.div_search.cal_dvy_pla_dt_from.set_value(this.gfn_addDate(today, -1));
        	this.div_search.cal_dvy_pla_dt_to.set_value(this.gfn_addDate(today, 7));
        	//this.div_search.cal_dvy_pla_dt_from.set_value(this.gfn_minusDate(this.gfn_today("YYYYMMdd"), 5));
        	//this.div_search.cal_dvy_pla_dt_to.set_value(this.gfn_lastDate(this.gfn_today("YYYYMMdd")));
        }

        /* search */
        this.fn_searchFir = function()
        {
        	//권한사업장 코드
        	var trplC = this.getTrplCode();
        	var params	      = "systemFileName="+this.ds_uploadresult.getColumn(0, "SYSTEMFILENAME");
        	var dvy_plash_slpno_rdo = this.gfn_nullToEmpty(this.div_search.rdo_dvy_plash_slpno.value);//배송예정서번호 구분
        	var na_dvy_plash_slpno	= this.gfn_nullToEmpty(this.div_search.edt_na_dvy_plash_slpno.value);//배송예정서번호
        	var odrpl_na_trpl_rdo	= this.gfn_nullToEmpty(this.div_search.rdo_odrpl_na_trpl_c.value);//발주처구분
        	var odrpl_na_trpl_c		= this.gfn_nullToEmpty(this.div_search.edt_odrpl_na_trpl_c.value);//발주처코
        	var dvy_pla_dt_from		= this.gfn_nullToEmpty(this.div_search.cal_dvy_pla_dt_from.value);//배송예정일자 from
        	var dvy_pla_dt_to		= this.gfn_nullToEmpty(this.div_search.cal_dvy_pla_dt_to.value);//배송예정일자 to
        	var cser_ctr_tpc		= this.gfn_nullToEmpty(this.div_search.cbo_cser_ctr_tpc.value);//계약유형
        	var dvy_pla_sts_rdo		= this.gfn_nullToEmpty(this.div_search.rdo_dvy_pla_sts.value);//배송예정서상태
        	var ddly_yn				= this.gfn_nullToEmpty(this.div_search.rdo_ddly_yn.value);//배송구분
        	var sort				= this.gfn_nullToEmpty(this.div_search.rdo_sort.value);//정렬기준
        	var grs_soju_yn			= this.gfn_nullToEmpty(this.div_search.cbo_grs_soju_yn.value);//지방소주여부

        	// trace("SystemFileName="+this.ds_uploadresult.getColumn(0, "SYSTEMFILENAME"));
        	var params = 	" dvy_plash_slpno_rdo="+dvy_plash_slpno_rdo
        					+" na_dvy_plash_slpno="+na_dvy_plash_slpno
        					+" odrpl_na_trpl_rdo="+odrpl_na_trpl_rdo
        					+" odrpl_na_trpl_c="+odrpl_na_trpl_c
        					+" dvy_pla_dt_from="+dvy_pla_dt_from
        					+" dvy_pla_dt_to="+dvy_pla_dt_to
        					+" cser_ctr_tpc="+cser_ctr_tpc
        					+" dvy_pla_sts_rdo="+dvy_pla_sts_rdo
        					+" ddly_yn="+ddly_yn
        					+" sort="+sort
        					+" ngrs_soju_yn="+grs_soju_yn
        					+" TRPL_C="+trplC
        					+" systemFileName="+this.ds_uploadresult.getColumn(0, "SYSTEMFILENAME");

        	// trace("##params >> " + params);

        	var sSvcID        = "retrieveDeliveryTradingPatnersM";//통신아이디
        	var sURL          = "svc::rest/scm/delivery/retrieveDeliveryTradingPatnersM";// 호출할 서버 페이지 주소
        	var sInDatasets   = "ds_pageVO01=ds_pageVO01";//보내는데이터셋
        	var sOutDatasets  = "ds_dataM=ds_dataM ds_pageVO01=ds_pageVO01 ds_sum=ds_sum";//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets , sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.btn_search_onclick = function(obj,e)
        {
        	this.ds_dataM.clearData();
        	this.ds_dataD.clearData();
        	this.ds_sum.clearData();
        	this.div_list.div_page02.set_visible(false);
        	if (this.fn_validationCheck()) {
        		this.fn_paging(1, "div_page01");
        	}
        }

        /* Validation Check */
        this.fn_validationCheck = function()
        {
        	if (this.gfn_nullToEmpty(this.div_search.rdo_dvy_plash_slpno.value) == "2" && this.gfn_isNull(this.div_search.edt_na_dvy_plash_slpno.value)) {
        		alert("배송예정서를 선택해 주세요");
        		return false;
        	}

        	if (this.gfn_nullToEmpty(this.div_search.rdo_odrpl_na_trpl_c.value) == "2" && this.gfn_isNull(this.div_search.edt_odrpl_na_trpl_c.value)) {
        		alert("발주처를 선택해 주세요");
        		return false;
        	}

            if (this.gfn_isNull(this.div_search.cal_dvy_pla_dt_from.value)) {
        		alert("조회기간(부터)를 확인하세요.");
        		return false;
            }

            if (this.gfn_isNull(this.div_search.cal_dvy_pla_dt_to.value)) {
        		alert("조회기간(까지)를 확인하세요.");
        		return false;
            }

        	if (this.gfn_getDiffDay(this.div_search.cal_dvy_pla_dt_from.value, this.div_search.cal_dvy_pla_dt_to.value) < 0) {
        		//조회 시작일과 종료일을 다시 확인해 주세요
        		this.gfn_getMessage("alert", "validation.message.fromDate.toDate.reConfirm");
        		return false;
        	} else {
        		if (this.gfn_getDiffDay(this.div_search.cal_dvy_pla_dt_from.value, this.div_search.cal_dvy_pla_dt_to.value) > 31) {

        		//기간을 31일 이내로 선택해 주세요
        		//this.gfn_getMessage("alert", "validation.message.selectDateIn31Day");
        		//return false;
        		}
        	}
        	return true;
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", ErrorMsg);
        		return;
        	} else {
        		if (svcID == "retrieveDeliveryTradingPatnersM") {
        			if (this.ds_dataM.rowcount > 0) {
        				this.ds_dataM.set_enableevent(false);
        				this.ds_dataM.set_rowposition(-1);
        				this.ds_dataM.set_enableevent(true);
        				var sTotal    = this.ds_pageVO01.getColumn(0, "TOTAL_ROW_COUNT");
        				var sPagesize = this.ds_pageVO01.getColumn(0, "PAGE_SIZE");
        				this.div_list.div_page01.fn_pageSet(sTotal, sPagesize, "grd_master, div_page01", lsNowPage);
        			} else {
        				this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        				this.div_list.div_page01.fn_pageSet(0, 0, "grd_master, div_page01", lsNowPage);//페이징 설정
        			}
        			this.ds_dataD.clearData();
        		} else if (svcID == "retrieveDeliveryTradingPatnersD") {
        			if (this.ds_dataD.rowcount > 0) {
        				//var sTotal    = this.ds_pageVO02.getColumn(0, "TOTAL_ROW_COUNT");
        				//var sPagesize = this.ds_pageVO02.getColumn(0, "PAGE_SIZE");
        				//this.div_list.div_page02.fn_pageSet(sTotal, sPagesize, "grd_detail, div_page02", lsNowPage);
        			} else {
        				this.div_list.grd_detail.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        				//this.div_list.div_page02.fn_pageSet(0, 0, "grd_detail, div_page02", lsNowPage);//페이징 설정
        			}
        		}
        	}
        }

        this.btn_excel_onclick = function(obj,e)
        {
        	this.fn_excel("A");
        }

        this.fn_excel = function(flag)
        {
        	var trplC = this.getTrplCode();

        	var dvy_plash_slpno_rdo = this.gfn_nullToEmpty(this.div_search.rdo_dvy_plash_slpno.value);//배송예정서번호 구분
        	var na_dvy_plash_slpno	= this.gfn_nullToEmpty(this.div_search.edt_na_dvy_plash_slpno.value);//배송예정서번호
        	var odrpl_na_trpl_rdo	= this.gfn_nullToEmpty(this.div_search.rdo_odrpl_na_trpl_c.value);//발주처구분
        	var odrpl_na_trpl_c		= this.gfn_nullToEmpty(this.div_search.edt_odrpl_na_trpl_c.value);//발주처코
        	var dvy_pla_dt_from		= this.gfn_nullToEmpty(this.div_search.cal_dvy_pla_dt_from.value);//배송예정일자 from
        	var dvy_pla_dt_to		= this.gfn_nullToEmpty(this.div_search.cal_dvy_pla_dt_to.value);//배송예정일자 to
        	var cser_ctr_tpc		= this.gfn_nullToEmpty(this.div_search.cbo_cser_ctr_tpc.value);//계약유형
        	var dvy_pla_sts_rdo		= this.gfn_nullToEmpty(this.div_search.rdo_dvy_pla_sts.value);//배송예정서상태
        	var ddly_yn				= this.gfn_nullToEmpty(this.div_search.rdo_ddly_yn.value);//배송구분
        	var sort				= this.gfn_nullToEmpty(this.div_search.rdo_sort.value);//정렬기준
        	var grs_soju_yn			= this.gfn_nullToEmpty(this.div_search.cbo_grs_soju_yn.value);//지방소주여부

        	if (this.fn_validationCheck()) {
        		if (flag == "A") {//상단엑셀
        			//var file_name = "배송예정거래처별조회.xls";
        			var file_name = this.getExcelFileName();
        			var params = 	"dvy_plash_slpno_rdo="	+ dvy_plash_slpno_rdo
        							+"&na_dvy_plash_slpno="	+ na_dvy_plash_slpno
        							+"&odrpl_na_trpl_rdo="	+ odrpl_na_trpl_rdo
        							+"&odrpl_na_trpl_c="	+ odrpl_na_trpl_c
        							+"&dvy_pla_dt_from="	+ dvy_pla_dt_from
        							+"&dvy_pla_dt_to="		+ dvy_pla_dt_to
        							+"&cser_ctr_tpc="		+ cser_ctr_tpc
        							+"&dvy_pla_sts_rdo="	+ dvy_pla_sts_rdo
        							+"&ddly_yn="			+ ddly_yn
        							+"&sort="				+ sort
        							+"&ngrs_soju_yn="		+ grs_soju_yn
        							+"&FILE_NAME="			+ file_name
        							+"&TRPL_C="				+ trplC;
        			// trace(">>>>>>> excel params : " +  params);
        			excelDownHandler(application.gv_server_url+"rest/excel/scm/delivery/downloadExcelDeliveryTradingPatners?"+params, this);
        		} else if (flag == "B") {//Master Grid Excel
        			var file_name = "배송예정거래처별조회_GRD_Master.xls";
        			var params = 	"dvy_plash_slpno_rdo="	+ dvy_plash_slpno_rdo
        							+"&na_dvy_plash_slpno="	+ na_dvy_plash_slpno
        							+"&odrpl_na_trpl_rdo="	+ odrpl_na_trpl_rdo
        							+"&odrpl_na_trpl_c="	+ odrpl_na_trpl_c
        							+"&dvy_pla_dt_from="	+ dvy_pla_dt_from
        							+"&dvy_pla_dt_to="		+ dvy_pla_dt_to
        							+"&cser_ctr_tpc="		+ cser_ctr_tpc
        							+"&dvy_pla_sts_rdo="	+ dvy_pla_sts_rdo
        							+"&ddly_yn="			+ ddly_yn
        							+"&sort="				+ sort
        							+"&ngrs_soju_yn="		+ grs_soju_yn
        							+"&FILE_NAME="			+ file_name
        							+"&TRPL_C="				+ trplC;
        			// trace(">>>>>>> excel params : " +  params);
        			//this.web_downExcel.set_url(application.gv_server_url+"rest/excel/scm/delivery/downloadExcelDeliveryTradingPatnersM?"+params);
        			excelDownHandler(application.gv_server_url+"rest/excel/scm/delivery/downloadExcelDeliveryTradingPatnersM?"+params, this);
        		} else if (flag == "C") {//Detail Grid Excel
        			if (this.ds_dataM.rowposition == -1) {
        				alert("배송예정서를 선택해 주세요");
        				return false;
        			}

        			var spypl_na_trpl_c = this.gfn_nullToEmpty(this.ds_dataM.getColumn(this.ds_dataM.rowposition, "SPYPL_NA_TRPL_C"));
        			var dvyaa_na_trpl_c = this.gfn_nullToEmpty(this.ds_dataM.getColumn(this.ds_dataM.rowposition, "DVYAA_NA_TRPL_C"));
        			var na_dvy_plash_slpno = this.gfn_nullToEmpty(this.ds_dataM.getColumn(this.ds_dataM.rowposition, "NA_DVY_PLASH_SLPNO"));
        			var dvy_pla_dt = this.gfn_nullToEmpty(this.ds_dataM.getColumn(this.ds_dataM.rowposition, "DVY_PLA_DT"));
        			var sort				= this.gfn_nullToEmpty(this.div_search.rdo_sort.value);//정렬기준
        			var slpDt = this.gfn_nullToEmpty(this.ds_dataM.getColumn(this.ds_dataM.rowposition, "SLP_DT"));
        			var naSlpno = this.gfn_nullToEmpty(this.ds_dataM.getColumn(this.ds_dataM.rowposition, "NA_SLPNO"));
        			var params = 	"spypl_na_trpl_c="+spypl_na_trpl_c			+
        							"&dvyaa_na_trpl_c="+dvyaa_na_trpl_c			+
        							"&na_dvy_plash_slpno="+na_dvy_plash_slpno	+
        							"&dvy_pla_dt="+dvy_pla_dt	+
        							"&sort="+sort								+
        							"&slpDt="+slpDt								+
        							"&naSlpno="+naSlpno;

        			excelDownHandler(application.gv_server_url+"rest/excel/scm/delivery/downloadExcelDeliveryTradingPatnersD?"+params, this);
        			/*
        			var g_spypl_na_trpl_c 		= this.gfn_nullToEmpty(this.ds_dataM.getColumn(this.ds_dataM.rowposition, "SPYPL_NA_TRPL_C"));
        			var g_dvyaa_na_trpl_c 		= this.gfn_nullToEmpty(this.ds_dataM.getColumn(this.ds_dataM.rowposition, "DVYAA_NA_TRPL_C"));
        			var g_na_dvy_plash_slpno 	= this.gfn_nullToEmpty(this.ds_dataM.getColumn(this.ds_dataM.rowposition, "NA_DVY_PLASH_SLPNO"));

        			var file_name = "배송예정거래처별조회Grid Detail.xls";
        			var params = 	"dvy_plash_slpno_rdo="		+ dvy_plash_slpno_rdo
        							+"&na_dvy_plash_slpno="		+ na_dvy_plash_slpno
        							+"&odrpl_na_trpl_rdo="		+ odrpl_na_trpl_rdo
        							+"&odrpl_na_trpl_c="		+ odrpl_na_trpl_c
        							+"&dvy_pla_dt_from="		+ dvy_pla_dt_from
        							+"&dvy_pla_dt_to="			+ dvy_pla_dt_to
        							+"&cser_ctr_tpc="			+ cser_ctr_tpc
        							+"&dvy_pla_sts_rdo="		+ dvy_pla_sts_rdo
        							+"&ddly_yn="				+ ddly_yn
        							+"&sort="					+ sort
        							+"&ngrs_soju_yn="			+ grs_soju_yn
        							+"&FILE_NAME="				+ file_name
        							+"&g_spypl_na_trpl_c="		+ g_spypl_na_trpl_c
        							+"&g_dvyaa_na_trpl_c="		+ g_dvyaa_na_trpl_c
        							+"&g_na_dvy_plash_slpno="	+ g_na_dvy_plash_slpno
        							+"&TRPL_C="					+ trplC;

        			trace(">>>>>>> excel params : " +  params);
        			//this.web_downExcel.set_url(application.gv_server_url+"rest/excel/scm/delivery/downloadExcelDeliveryTradingPatnersM?"+params);
        			excelDownHandler(application.gv_server_url+"rest/excel/scm/delivery/downloadExcelDeliveryTradingPatnersM?"+params, this);
        			*/
        		} else if (flag == "D") {
        			var file_name = "배송예정거래처별조회Detail.xls";
        			var params = 	"dvy_plash_slpno_rdo="	+ dvy_plash_slpno_rdo
        							+"&na_dvy_plash_slpno="	+ na_dvy_plash_slpno
        							+"&odrpl_na_trpl_rdo="	+ odrpl_na_trpl_rdo
        							+"&odrpl_na_trpl_c="	+ odrpl_na_trpl_c
        							+"&dvy_pla_dt_from="	+ dvy_pla_dt_from
        							+"&dvy_pla_dt_to="		+ dvy_pla_dt_to
        							+"&cser_ctr_tpc="		+ cser_ctr_tpc
        							+"&dvy_pla_sts_rdo="	+ dvy_pla_sts_rdo
        							+"&ddly_yn="			+ ddly_yn
        							+"&sort="				+ sort
        							+"&ngrs_soju_yn="		+ grs_soju_yn
        							+"&FILE_NAME="			+ file_name
        							+"&TRPL_C="				+ trplC;
        			// trace(">>>>>>> excel params : " +  params);
        			//this.web_downExcel.set_url(application.gv_server_url+"rest/excel/scm/delivery/downloadExcelDetailDeliveryTradingPatners?"+params);
        			excelDownHandler(application.gv_server_url+"rest/excel/scm/delivery/downloadExcelDetailDeliveryTradingPatners?"+params, this);
        		} else if (flag == "E") {
        			var file_name = "배송예정거래처별조회_다운로드.xls";
        			var params = 	"dvy_plash_slpno_rdo="	+ dvy_plash_slpno_rdo
        							+"&na_dvy_plash_slpno="	+ na_dvy_plash_slpno
        							+"&odrpl_na_trpl_rdo="	+ odrpl_na_trpl_rdo
        							+"&odrpl_na_trpl_c="	+ odrpl_na_trpl_c
        							+"&dvy_pla_dt_from="	+ dvy_pla_dt_from
        							+"&dvy_pla_dt_to="		+ dvy_pla_dt_to
        							+"&cser_ctr_tpc="		+ cser_ctr_tpc
        							+"&dvy_pla_sts_rdo="	+ dvy_pla_sts_rdo
        							+"&ddly_yn="			+ ddly_yn
        							+"&sort="				+ sort
        							+"&ngrs_soju_yn="		+ grs_soju_yn
        							+"&FILE_NAME="			+ file_name;
        			// trace(">>>>>>> excel params : " +  params);
        			//this.web_downExcel.set_url(application.gv_server_url+"rest/excel/scm/delivery/downloadExcelDeliveryTradingPatnersE?"+params);
        			excelDownHandler(application.gv_server_url+"rest/excel/scm/delivery/downloadExcelDeliveryTradingPatnersE?"+params, this);
        		}
        	}
        }

        this.div_list_btn_divResize_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	if (this.gfn_isNull(strVal)) { return; }
        	var paramsArr = strVal.split(",");
        	if (strId == "POPUP_TRNREL_ODRPL") {
        		this.div_search.edt_odrpl_na_trpl_c.set_value(paramsArr[0]);
        		this.div_search.edt_odrpl_na_trpl_n.set_value(paramsArr[1]);
        	}

        	if (strId == "VAN_DS_SC_0370_P01") {
        		this.div_search.edt_na_dvy_plash_slpno.set_value(paramsArr[0]);
        	}
        }

        /*-----------------------------------------------------------------------------------------*/
        // 페이징처리
        /*-----------------------------------------------------------------------------------------*/
        this.fn_paging = function(vPageNum,objDivNm)
        {
        	var oDs, oBindDs;
        	var searchLevel;
        	if (this.gfn_isNull(objDivNm)) {
        		objDivNm = "div_page";
        	}

        	if (objDivNm == "div_page01") {
        		oDs     = this.ds_pageVO01;
        		oBindDs = this.ds_dataM;
        		searchLevel = "F";//첫번째 그리드
        	} else {
        		oDs     = this.ds_pageVO02;
        		oBindDs = this.ds_dataD;
        		searchLevel = "S";//두번째 그리드
        	}

        	oDs.clearData();
        	oBindDs.clearData(); //Grid에 Binding된 Dataset명

        	oDs.addRow();

        	var vPageSize   = 10; 	//Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
        	var vTotalCount = 0; 	//전체건수. 화면조회후 리턴받아 사용

         	oDs.setColumn(0, "CURRENT_PAGE", vPageNum); //현재 페이지
         	oDs.setColumn(0, "PAGE_SIZE", vPageSize);
         	oDs.setColumn(0, "TOTAL_ROW_COUNT", vTotalCount);

        	var argumentObj = "";

        	lsNowPage = vPageNum;//현재페이지 설정

        	if (searchLevel == "F") {
        		//oDs.fn_pageSet(vTotalCount, vPageSize, objDivNm, lsNowPage);
        		this.fn_searchFir();
        	} else {
        		//oDs.fn_pageSet(vTotalCount, vPageSize, objDivNm, lsNowPage);
        		this.fn_searchScd();
        	}
        }

        this.fn_searchScd = function()
        {
        	var spypl_na_trpl_c = this.gfn_nullToEmpty(this.ds_dataM.getColumn(this.ds_dataM.rowposition, "SPYPL_NA_TRPL_C"));
        	var dvyaa_na_trpl_c = this.gfn_nullToEmpty(this.ds_dataM.getColumn(this.ds_dataM.rowposition, "DVYAA_NA_TRPL_C"));
        	var na_dvy_plash_slpno = this.gfn_nullToEmpty(this.ds_dataM.getColumn(this.ds_dataM.rowposition, "NA_DVY_PLASH_SLPNO"));
        	var sort				= this.gfn_nullToEmpty(this.div_search.rdo_sort.value); //정렬기준
        	var slpDt = this.gfn_nullToEmpty(this.ds_dataM.getColumn(this.ds_dataM.rowposition, "SLP_DT"));
        	var naSlpno = this.gfn_nullToEmpty(this.ds_dataM.getColumn(this.ds_dataM.rowposition, "NA_SLPNO"));
        	var dvy_pla_dt = this.gfn_nullToEmpty(this.ds_dataM.getColumn(this.ds_dataM.rowposition, "DVY_PLA_DT"));

        	var params = "spypl_na_trpl_c="+spypl_na_trpl_c			+
        				" dvyaa_na_trpl_c="+dvyaa_na_trpl_c			+
        				" na_dvy_plash_slpno="+na_dvy_plash_slpno	+
        				" dvy_pla_dt="+dvy_pla_dt	+
        				" sort="+sort								;
        				//" slpDt="+slpDt							;
        				//" naSlpno="+naSlpno;

        	// trace("##PARAM##->"+params);

        	var sSvcID        = "retrieveDeliveryTradingPatnersD";//통신아이디
        	var sURL          = "svc::rest/scm/delivery/retrieveDeliveryTradingPatnersD";// 호출할 서버 페이지 주소
        	var sInDatasets   = "ds_pageVO02=ds_pageVO02";//보내는데이터셋
        	var sOutDatasets  = "ds_dataD=ds_dataD ds_pageVO02=ds_pageVO02";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets , sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        
        this.grd_afterFnc = function(obj,e)
        {
        /*
        	if (e.reason == 51)
        	{
        		this.ds_dataD.set_enableevent(false);
        		this.ds_dataD.set_rowposition(-1);
        		this.ds_dataD.set_enableevent(true);
        		return;
        	}
        */
        	this.div_list.div_page02.set_visible(false);
        	this.fn_paging(1, "div_page02");
        }

        this.Div00_onsize = function(obj,e)
        {
        	var nLeft = (e.cx/2)-(this.div_list.div_page01.width/2);
        	this.div_list.div_page01.set_left(nLeft);

        	var nLeft = (e.cx/2)-(this.div_list.div_page02.width/2);
        	this.div_list.div_page02.set_left(nLeft);
        }

        this.div_list_btn_excel02_onclick = function(obj,e)
        {
        	this.fn_excel("B");
        }

        this.div_list_btn_excel03_onclick = function(obj,e)
        {
        	this.fn_excel("C");
        }

        this.btn_excel01_onclick = function(obj,e)
        {
        	this.fn_excel("D");
        }

        this.fn_getPrintParam = function()
        {
        	var trplC = this.getTrplCode();
        	var dvy_plash_slpno_rdo = this.gfn_nullToEmpty(this.div_search.rdo_dvy_plash_slpno.value);//배송예정서번호 구분
        	var na_dvy_plash_slpno	= this.gfn_nullToEmpty(this.div_search.edt_na_dvy_plash_slpno.value);//배송예정서번호
        	var odrpl_na_trpl_rdo	= this.gfn_nullToEmpty(this.div_search.rdo_odrpl_na_trpl_c.value);//발주처구분
        	var odrpl_na_trpl_c		= this.gfn_nullToEmpty(this.div_search.edt_odrpl_na_trpl_c.value);//발주처코
        	var dvy_pla_dt_from		= this.gfn_nullToEmpty(this.div_search.cal_dvy_pla_dt_from.value);//배송예정일자 from
        	var dvy_pla_dt_to		= this.gfn_nullToEmpty(this.div_search.cal_dvy_pla_dt_to.value);//배송예정일자 to
        	var cser_ctr_tpc		= this.gfn_nullToEmpty(this.div_search.cbo_cser_ctr_tpc.value);//계약유형
        	var dvy_pla_sts_rdo		= this.gfn_nullToEmpty(this.div_search.rdo_dvy_pla_sts.value);//배송예정서상태
        	var ddly_yn				= this.gfn_nullToEmpty(this.div_search.rdo_ddly_yn.value);//배송구분
        	var sort				= this.gfn_nullToEmpty(this.div_search.rdo_sort.value);//정렬기준
        	var grs_soju_yn			= this.gfn_nullToEmpty(this.div_search.cbo_grs_soju_yn.value);//지방소주여부
        	var sFileName			= this.gfn_nullToEmpty(this.ds_uploadresult.getColumn(0, "SYSTEMFILENAME")) //직인파일;
        	var ozType 				= this.ozType.value;
        	var searchText = "배송예정일자 ["+dvy_pla_dt_from+" ~ "+dvy_pla_dt_to+"]";

        	// trace(searchText);

        	var param = {
        		TRPL_C_TEXT:searchText, 
        		dvy_plash_slpno_rdo:dvy_plash_slpno_rdo, 
        		na_dvy_plash_slpno:na_dvy_plash_slpno, 
        		odrpl_na_trpl_rdo:odrpl_na_trpl_rdo, 
        		odrpl_na_trpl_c:odrpl_na_trpl_c, 
        		dvy_pla_dt_from:dvy_pla_dt_from, 
        		dvy_pla_dt_to:dvy_pla_dt_to, 
        		cser_ctr_tpc:cser_ctr_tpc, 
        		dvy_pla_sts_rdo:dvy_pla_sts_rdo, 
        		ddly_yn:ddly_yn, 
        		sort:sort, 
        		ngrs_soju_yn:grs_soju_yn, 
        		TRPL_C:trplC, 
        		systemFileName:sFileName, 
        		ozType:ozType
        	};

        	return param;
        }

        this.btn_print_onclick = function(obj,e)
        {
        	var ozParam = {
        		sId: 'VAN_DS_SC_0330', 
        		sUrl: '/rest/oz/scm/delivery/printDeliveryTradingPatners01', 
        		paramType: 'param', 
        		sParam: this.fn_getPrintParam()
        	};
        	this.ozViewer(ozParam);
        }

        this.div_list_btn_master_print_onclick = function(obj,e)
        {
        	var ozParam = {
        		sId: 'VAN_DS_SC_0330_M', 
        		sUrl: '/rest/oz/scm/delivery/printDeliveryTradingPatners02', 
        		paramType: 'param', 
        		sParam: this.fn_getPrintParam()
        	};
        	this.ozViewer(ozParam);
        }

        this.btn_tr_print_onclick = function(obj,e)
        {
        	var ozParam = {
        		sId: 'VAN_DS_SC_0300', 
        		sUrl: '/rest/oz/delivery/printDeliveryNoticeOrders', 
        		paramType: 'param', 
        		sParam: this.fn_getPrintParam()
        	};
        	// trace("거래명세표 출력");
        	this.ozType.set_value('1');
        	this.ozViewer(ozParam);
        }

        this.div_search_btn_trplO_onclick = function(obj,e)
        {
        	var oArg = {form_id:"VAN_DS_SC_0330", trplC:this.getTrplCode()};
        	var sOption = "autosize=true, title=false";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("POPUP_TRNREL_ODRPL", "POPUP::POPUP_TRNREL_ODRPL.xfdl", oArg, sOption, sPopupCallBack);
        }

        this.div_search_btn_pup_deliveryNotice_onclick = function(obj,e)
        {
        	var oArg = {form_id:"VAN_DS_SC_0330", trplC:this.getTrplCode(), temp_yn:'N', sts:'all'};
        	var sOption = "autosize=true, title=false";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("VAN_DS_SC_0370_P01", "SCM.DELIVERY::VAN_DS_SC_0370_P01.xfdl", oArg, sOption, sPopupCallBack);
        }

        this.div_search_Button01_onclick = function(obj,e)
        {
        	this.fn_excel("C");
        }

        this.div_search_edt_odrpl_na_trpl_c_onkeyup = function(obj,e)
        {
        	if (e.keycode == '13') {
        		var trplO = this.gfn_nullToEmpty(this.div_search.edt_odrpl_na_trpl_c.value);
        		if (this.gfn_length(trplO) < 6) {
        			alert("발주처 코드["+trplO+"] 6자리 이상 입력해 주세요");
        			return false;
        		}

        		if (trplO.length == 6) {
        			trplO = '8808983' + trplO;
        		}

        		var idx = "0";
        		var trplC = this.getTrplCode();//권한사업장
        		var oArg = {form_id:"VAN_DS_SC_0300", trplC:trplC, idx:idx, auto:"1", trplO:trplO};
        		var sOption = "autosize=true, title=false";
        		var sPopupCallBack = "fn_popupAfter";
        		this.gfn_openPopup("POPUP_TRNREL_ODRPL", "POPUP::POPUP_TRNREL_ODRPL.xfdl", oArg, sOption, sPopupCallBack);
        	}
        }

        this.div_search_edt_odrpl_na_trpl_n_onkeyup = function(obj,e)
        {
        	if (e.keycode == "13") {
        		var trplON = this.gfn_nullToEmpty(this.div_search.edt_odrpl_na_trpl_n.value);
        		if (this.gfn_length(trplON) < 3) {
        			alert("발주처명["+trplON+"] 3자리 이상 입력해 주세요");
        			return false;
        		}

        		var idx = "1";
        		var trplC = this.getTrplCode();//권한사업장
        		var oArg = {form_id:"VAN_DS_SC_0300", trplC:trplC, idx:idx, auto:"1", trplON:trplON};
        		var sOption = "autosize=true, title=false";
        		var sPopupCallBack = "fn_popupAfter";
        		this.gfn_openPopup("POPUP_TRNREL_ODRPL", "POPUP::POPUP_TRNREL_ODRPL.xfdl", oArg, sOption, sPopupCallBack);
        	}
        }

        this.btn_dum_print_onclick = function(obj,e)
        {
        	var ozParam = {
        		sId: 'VAN_DS_SC_0303', 
        		sUrl: '/rest/oz/delivery/printDeliveryNoticeOrdersDum', 
        		paramType: 'param', 
        		sParam: this.fn_getPrintParam()
        	};
        	// trace("덤상품 거래명세표 출력");
        	this.ozType.set_value('1');
        	this.ozViewer(ozParam);
        }

        this.VAN_DS_SC_0330_onkeydown = function(obj,e)
        {
        	var key = this.gfn_onkeydown(e);

        	if (key == "F") {
        		this.btn_search_onclick();
        	} else if (key == "E") {
        		this.btn_excel_onclick();
        	} else if (key == "P") {
        		this.btn_print_onclick();
        	}
        }

        this.btn_search_onmousemove = function(obj,e)
        {
        	this.gfn_onmousemove(obj, "F");
        }

        this.btn_print_onmousemove = function(obj,e)
        {
        	this.gfn_onmousemove(obj, "P");
        }

        this.btn_excel_onmousemove = function(obj,e)
        {
        	this.gfn_onmousemove(obj, "E");
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("oninit", this.form_init, this);
            this.addEventHandler("onkeydown", this.VAN_DS_SC_0330_onkeydown, this);
            this.div_search.btn_pup_deliveryNotice.addEventHandler("onclick", this.div_search_btn_pup_deliveryNotice_onclick, this);
            this.div_search.edt_odrpl_na_trpl_c.addEventHandler("onkeyup", this.div_search_edt_odrpl_na_trpl_c_onkeyup, this);
            this.div_search.edt_odrpl_na_trpl_n.addEventHandler("onkeyup", this.div_search_edt_odrpl_na_trpl_n_onkeyup, this);
            this.div_search.btn_trplO.addEventHandler("onclick", this.div_search_btn_trplO_onclick, this);
            this.div_search.Button01.addEventHandler("onclick", this.div_search_Button01_onclick, this);
            this.div_list.addEventHandler("onsize", this.Div00_onsize, this);
            this.div_list.Button10.addEventHandler("onclick", this.div_list_btn_divResize_onclick, this);
            this.div_list.grd_master.addEventHandler("onselectchanged", this.div_list_Grid00_onselectchanged, this);
            this.div_list.btn_excel02.addEventHandler("onclick", this.div_list_btn_excel02_onclick, this);
            this.div_list.btn_master_print.addEventHandler("onclick", this.div_list_btn_master_print_onclick, this);
            this.div_list.btn_excel03.addEventHandler("onclick", this.div_search_Button01_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_search.addEventHandler("onmousemove", this.btn_search_onmousemove, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_excel.addEventHandler("onmousemove", this.btn_excel_onmousemove, this);
            this.btn_print.addEventHandler("onclick", this.btn_print_onclick, this);
            this.btn_print.addEventHandler("onmousemove", this.btn_print_onmousemove, this);
            this.btn_excel01.addEventHandler("onclick", this.btn_excel01_onclick, this);
            this.btn_tr_print.addEventHandler("onclick", this.btn_tr_print_onclick, this);
            this.btn_dum_print.addEventHandler("onclick", this.btn_dum_print_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0330.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
