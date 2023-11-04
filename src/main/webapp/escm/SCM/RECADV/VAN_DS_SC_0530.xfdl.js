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
                this.set_name("VAN_DS_SC_0530");
                this.set_titletext("검수실적_상품별");
                this._setFormPosition(0,0,803,1007);
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

            obj = new Dataset("Dataset00", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column5\">2015-04-04</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\"/><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\"/><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">7</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row><Row><Col id=\"Column0\">8</Col><Col id=\"Column1\">경제통합공급처모드</Col><Col id=\"Column2\">2015-01-01</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">ABC123456789</Col><Col id=\"Column6\">1234-567-890</Col><Col id=\"Column7\">1234-567-890</Col><Col id=\"Column5\">2015-04-04</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_master", this);
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_STDNM\" type=\"STRING\" size=\"256\"/><Column id=\"TXT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"DANGA\" type=\"STRING\" size=\"256\"/><Column id=\"BYNG_QT\" type=\"STRING\" size=\"256\"/><Column id=\"GAM_AM\" type=\"STRING\" size=\"256\"/><Column id=\"BYNG_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_GAM\" type=\"STRING\" size=\"256\"/><Column id=\"CHRG_TOT\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_FEE\" type=\"STRING\" size=\"256\"/><Column id=\"BYNG_SSDY\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_AMN_FEE\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_AMN_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"SLGT_AMN_FEE\" type=\"STRING\" size=\"256\"/><Column id=\"PHD_FEE\" type=\"STRING\" size=\"256\"/><Column id=\"PHD_FEE_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"TRP_SVC_CST\" type=\"STRING\" size=\"256\"/><Column id=\"TRP_SVCOS_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_FEE\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_FEE_VAT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"ACTL_BUYPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"BYNG_QT\" type=\"STRING\" size=\"256\"/><Column id=\"GAM_AM\" type=\"STRING\" size=\"256\"/><Column id=\"BYNG_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_GAM\" type=\"STRING\" size=\"256\"/><Column id=\"CHRG_TOT\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_FEE\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_AMN_FEE\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_AMN_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"SLGT_AMN_FEE\" type=\"STRING\" size=\"256\"/><Column id=\"PHD_FEE\" type=\"STRING\" size=\"256\"/><Column id=\"PHD_FEE_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"TRP_SVC_CST\" type=\"STRING\" size=\"256\"/><Column id=\"TRP_SVCOS_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_FEE\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_FEE_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"BYNG_SSDY\" type=\"STRING\" size=\"256\"/><Column id=\"DANGA\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_detail2", this);
            obj._setContents("<ColumnInfo><Column id=\"NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"SLP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"NA_SLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"ACTL_BUYPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CCLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"TRSLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"CNR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"RPY_PLA_DT\" type=\"STRING\" size=\"256\"/><Column id=\"NA_DVY_PLASH_SLPNO\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"BCLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SPY_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"ROTS_CTR_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"SLP_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"PD_YY\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_ABR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_STDNM\" type=\"STRING\" size=\"256\"/><Column id=\"TXT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BYNG_WT\" type=\"STRING\" size=\"256\"/><Column id=\"INPD_QT\" type=\"STRING\" size=\"256\"/><Column id=\"BYNG_UPR\" type=\"STRING\" size=\"256\"/><Column id=\"BYNG_QT\" type=\"STRING\" size=\"256\"/><Column id=\"GAM_AM\" type=\"STRING\" size=\"256\"/><Column id=\"BYNG_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"BYAM\" type=\"STRING\" size=\"256\"/><Column id=\"FEE_ACG_ACCC\" type=\"STRING\" size=\"256\"/><Column id=\"ACCNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPY_AM\" type=\"STRING\" size=\"256\"/><Column id=\"TXT_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"NA_FEE_C\" type=\"STRING\" size=\"256\"/><Column id=\"FEENM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TR_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TR_DSC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_CRC_CAN_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_CRC_CAN_DSC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRGMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"PBDDLY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DVY_PLASH_CRT_DSC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_excelBtnList", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">상품별합계</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">상품_전표합계</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">전표_상품_수수료</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"NAME\">전표_상품_수수료(간략)</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_detail2_SUM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BYNG_QT\" type=\"string\" size=\"32\"/><Column id=\"GAM_AM\" type=\"string\" size=\"32\"/><Column id=\"BYNG_VAT\" type=\"string\" size=\"32\"/><Column id=\"BYAM\" type=\"string\" size=\"32\"/><Column id=\"SPY_AM\" type=\"string\" size=\"32\"/><Column id=\"TXT_VAT\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_search", "absolute", "0", "29", null, "121", "15", null, this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("sta_00", "absolute", "15", "36", "79", "21", null, null, this.div_search);
            obj.set_taborder("46");
            obj.set_text("상품코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_01", "absolute", "15", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("47");
            obj.set_text("일자구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_03", "absolute", "15", "88", "79", "21", null, null, this.div_search);
            obj.set_taborder("48");
            obj.set_text("거래구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_sign_list", "absolute", "94", "88", "151", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_sign_list_innerdataset = new Dataset("cbo_sign_list_innerdataset", this.div_search.cbo_sign_list);
            cbo_sign_list_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">매출정상</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">반품정상</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">매출정상 + 반품정정 + 반품취소</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">반품정상 + 매출정정 + 매출취소</Col></Row></Rows>");
            obj.set_innerdataset(cbo_sign_list_innerdataset);
            obj.set_taborder("49");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj = new Calendar("cal_from", "absolute", "187", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("50");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("cal_to", "absolute", "309", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("51");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static04", "absolute", "293", "10", "10", "21", null, null, this.div_search);
            obj.set_taborder("52");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data00", "absolute", "317", "36", "110", "21", null, null, this.div_search);
            obj.set_taborder("53");
            obj.set_inputtype("number");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data01", "absolute", "430", "36", "131", "21", null, null, this.div_search);
            obj.set_taborder("54");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup00", "absolute", "564", "36", "21", "21", null, null, this.div_search);
            obj.set_taborder("55");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "232", "31", "103", "5", null, null, this.div_search);
            obj.set_taborder("56");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "233", "109", "103", "10", null, null, this.div_search);
            obj.set_taborder("57");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "233", "0", "103", "10", null, null, this.div_search);
            obj.set_taborder("58");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title05", "absolute", "439", "88", "103", "21", null, null, this.div_search);
            obj.set_taborder("59");
            obj.set_text("계통계약유형");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_cser_ctr", "absolute", "542", "88", "151", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("60");
            obj.set_innerdataset("ds_cser_ctr_tpc");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj = new Combo("cbo_date_chk", "absolute", "94", "10", "90", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_date_chk_innerdataset = new Dataset("cbo_date_chk_innerdataset", this.div_search.cbo_date_chk);
            cbo_date_chk_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">매출일</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">검수일</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">지급예정일</Col></Row></Rows>");
            obj.set_innerdataset(cbo_date_chk_innerdataset);
            obj.set_taborder("61");
            obj.set_value("1");
            obj.set_text("매출일");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj = new Radio("rdo_wrs_gubun", "absolute", "94", "36", "223", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_wrs_gubun_innerdataset = new Dataset("rdo_wrs_gubun_innerdataset", this.div_search.rdo_wrs_gubun);
            rdo_wrs_gubun_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">상품코드</Col></Row></Rows>");
            obj.set_innerdataset(rdo_wrs_gubun_innerdataset);
            obj.set_taborder("62");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Static("Static02", "absolute", "232", "57", "103", "5", null, null, this.div_search);
            obj.set_taborder("64");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_02", "absolute", "15", "62", "79", "21", null, null, this.div_search);
            obj.set_taborder("65");
            obj.set_text("사업장");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_cser_gubun", "absolute", "94", "62", "223", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_cser_gubun_innerdataset = new Dataset("rdo_cser_gubun_innerdataset", this.div_search.rdo_cser_gubun);
            rdo_cser_gubun_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">실매입처(마트)</Col></Row></Rows>");
            obj.set_innerdataset(rdo_cser_gubun_innerdataset);
            obj.set_taborder("66");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Edit("edt_data02", "absolute", "317", "62", "110", "21", null, null, this.div_search);
            obj.set_taborder("67");
            obj.set_inputtype("number");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data03", "absolute", "430", "62", "131", "21", null, null, this.div_search);
            obj.set_taborder("68");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "232", "83", "103", "5", null, null, this.div_search);
            obj.set_taborder("69");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup01", "absolute", "564", "62", "21", "21", null, null, this.div_search);
            obj.set_taborder("70");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "597", "62", "400", "21", null, null, this.div_search);
            obj.set_taborder("71");
            obj.set_text("※ 공급금액 및 총공급금액에 공병, 공상자 금액이 포함되어있습니다 ※");
            obj.style.set_color("red");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "149", null, null, "15", "0", this);
            obj.set_taborder("1");
            obj.set_text("Div02");
            obj.set_scrollbars("autoboth");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_master", "absolute", "0", "42", null, "267", "0", null, this.div_list);
            obj.set_taborder("19");
            obj.set_binddataset("ds_master");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"상품코드\"/><Cell col=\"2\" text=\"상품명\"/><Cell col=\"3\" text=\"규격\"/><Cell col=\"4\" text=\"면과세\"/><Cell col=\"5\" text=\"단가(계산)\"/><Cell col=\"6\" text=\"매입수량\"/><Cell col=\"7\" text=\"공급금액\"/><Cell col=\"8\" text=\"부가세\"/><Cell col=\"9\" text=\"총공급금액\"/><Cell col=\"10\" text=\"총공제금액\"/><Cell col=\"11\" text=\"업체별수수료\"/><Cell col=\"12\" text=\"매입장려금\"/><Cell col=\"13\" text=\"수탁관리수수료\"/><Cell col=\"14\" text=\"수탁관리부가세\"/><Cell col=\"15\" text=\"매취관리수수료\"/><Cell col=\"16\" text=\"물류수수료\"/><Cell col=\"17\" text=\"물류부가세\"/><Cell col=\"18\" text=\"운송용역비\"/><Cell col=\"19\" text=\"운송부가세\"/><Cell col=\"20\" text=\"기타수수료\"/><Cell col=\"21\" text=\"기타수수료부가세\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:NA_WRS_C\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:WRSNM\"/><Cell col=\"3\" text=\"bind:WRS_STDNM\"/><Cell col=\"4\" text=\"bind:TXT_DSC\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DANGA\" mask=\"#,##0.99\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BYNG_QT\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:GAM_AM\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BYNG_VAT\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TOT_GAM\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CHRG_TOT\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:COMP_FEE\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BYNG_SSDY\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ETR_AMN_FEE\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ETR_AMN_VAT\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SLGT_AMN_FEE\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PHD_FEE\"/><Cell col=\"17\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PHD_FEE_VAT\"/><Cell col=\"18\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TRP_SVC_CST\"/><Cell col=\"19\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TRP_SVCOS_VAT\"/><Cell col=\"20\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ETC_FEE\"/><Cell col=\"21\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ETC_FEE_VAT\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" style=\"align:center;\" text=\"합계\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BYNG_QT');\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('GAM_AM');\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BYNG_VAT');\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('TOT_GAM');\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('CHRG_TOT');\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('COMP_FEE');\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('BYNG_SSDY');\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('ETR_AMN_FEE');\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('ETR_AMN_VAT');\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('SLGT_AMN_FEE');\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('PHD_FEE');\"/><Cell col=\"17\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('PHD_FEE_VAT');\"/><Cell col=\"18\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('TRP_SVC_CST');\"/><Cell col=\"19\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('TRP_SVCOS_VAT');\"/><Cell col=\"20\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('ETC_FEE');\"/><Cell col=\"21\" displaytype=\"number\" style=\"align:right;\" expr=\"expr:dataset.getSum('ETC_FEE_VAT');\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_toggle00", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new WebBrowser("web_downExcelM", "absolute", "78.3%", "10", null, "20", "16.88%", null, this.div_list);
            obj.set_taborder("21");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_detailM", "absolute", "0", "318", null, "200", "0", null, this.div_list);
            obj.set_taborder("22");
            obj.set_binddataset("ds_detail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"실매입처\"/><Cell col=\"2\" text=\"실매입처명\"/><Cell col=\"3\" text=\"매입수량\"/><Cell col=\"4\" text=\"공급금액\"/><Cell col=\"5\" text=\"부가세\"/><Cell col=\"6\" text=\"총공급금액\"/><Cell col=\"7\" text=\"총공제금액\"/><Cell col=\"8\" text=\"업체수수료\"/><Cell col=\"9\" text=\"수탁관리수수료\"/><Cell col=\"10\" text=\"수탁관리부가세\"/><Cell col=\"11\" text=\"매취관리수수료\"/><Cell col=\"12\" text=\"물류수수료\"/><Cell col=\"13\" text=\"물류수수료부가세\"/><Cell col=\"14\" text=\"운송용역비용\"/><Cell col=\"15\" text=\"운송용역비부가세\"/><Cell col=\"16\" text=\"기타수수료\"/><Cell col=\"17\" text=\"기타수수료부가세\"/><Cell col=\"18\" text=\"매입장려금\"/><Cell col=\"19\" text=\"단가(계산)\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:ACTL_BUYPL_NA_TRPL_C\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:CLNTNM\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BYNG_QT\" mask=\"###,##0.00\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:GAM_AM\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BYNG_VAT\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TOT_GAM\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CHRG_TOT\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:COMP_FEE\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ETR_AMN_FEE\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ETR_AMN_VAT\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SLGT_AMN_FEE\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PHD_FEE\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PHD_FEE_VAT\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TRP_SVC_CST\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TRP_SVCOS_VAT\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ETC_FEE\"/><Cell col=\"17\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ETC_FEE_VAT\"/><Cell col=\"18\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BYNG_SSDY\"/><Cell col=\"19\" displaytype=\"number\" style=\"align:right;\" text=\"bind:DANGA\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_detailD", "absolute", "0", "530", null, "300", "0", null, this.div_list);
            obj.set_taborder("23");
            obj.set_binddataset("ds_detail2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"152\"/><Column size=\"64\"/><Column size=\"84\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"거래처코드\"/><Cell col=\"2\" text=\"거래처명\"/><Cell col=\"3\" text=\"매출일-전표번호\"/><Cell col=\"4\" text=\"검수일자\"/><Cell col=\"5\" text=\"지급예정일\"/><Cell col=\"6\" text=\"배송예정번호\"/><Cell col=\"7\" text=\"혁신구분\"/><Cell col=\"8\" text=\"PB직송여부\"/><Cell col=\"9\" text=\"실매입사업장코드\"/><Cell col=\"10\" text=\"실매입사업장명\"/><Cell col=\"11\" text=\"경제통합사업장코드\"/><Cell col=\"12\" text=\"사업장명\"/><Cell col=\"13\" text=\"공급유형\"/><Cell col=\"14\" text=\"계통계약구분\"/><Cell col=\"15\" text=\"전표일련번호\"/><Cell col=\"16\" text=\"경제통합상품코드\"/><Cell col=\"17\" text=\"생산년도\"/><Cell col=\"18\" text=\"상품명\"/><Cell col=\"19\" text=\"상품규격명\"/><Cell col=\"20\" text=\"과세구분코드명\"/><Cell col=\"21\" text=\"입고중량\"/><Cell col=\"22\" text=\"내품수량\"/><Cell col=\"23\" text=\"매입단가\"/><Cell col=\"24\" text=\"매입수량\"/><Cell col=\"25\" text=\"공급금액\"/><Cell col=\"26\" text=\"매입부가세\"/><Cell col=\"27\" text=\"매입금액\"/><Cell col=\"28\" text=\"수수료회계계정코드\"/><Cell col=\"29\" text=\"수수료회계계정명\"/><Cell col=\"30\" text=\"수수료\"/><Cell col=\"31\" text=\"수수료부가세\"/><Cell col=\"32\" text=\"수수료코드\"/><Cell col=\"33\" text=\"수수료명\"/><Cell col=\"34\" text=\"거래구분코드\"/><Cell col=\"35\" text=\"거래구분명\"/><Cell col=\"36\" text=\"정정취소구분\"/><Cell col=\"37\" text=\"정정취소구분명\"/><Cell col=\"38\" text=\"배송예정서작성자\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:ACTL_BUYPL_NA_TRPL_C\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:CCLNTNM\"/><Cell col=\"3\" text=\"bind:TRSLPNO\"/><Cell col=\"4\" displaytype=\"date\" text=\"bind:CNR_DT\" mask=\"yyyy-MM-dd\"/><Cell col=\"5\" displaytype=\"date\" text=\"bind:RPY_PLA_DT\" mask=\"yyyy-MM-dd\"/><Cell col=\"6\" text=\"bind:NA_DVY_PLASH_SLPNO\"/><Cell col=\"7\" text=\"bind:DVY_PLASH_CRT_DSC\"/><Cell col=\"8\" text=\"bind:PBDDLY_YN\"/><Cell col=\"9\" text=\"bind:MNGT_NA_TRPL_C\"/><Cell col=\"10\" style=\"align:left;\" text=\"bind:BCLNTNM\"/><Cell col=\"11\" text=\"bind:NA_BZPLC\"/><Cell col=\"12\" style=\"align:left;\" text=\"bind:NA_BZPLC_NM\"/><Cell col=\"13\" text=\"bind:SPY_TPC\"/><Cell col=\"14\" text=\"bind:ROTS_CTR_DSC\"/><Cell col=\"15\" text=\"bind:SLP_SQNO\"/><Cell col=\"16\" text=\"bind:NA_WRS_C\"/><Cell col=\"17\" text=\"bind:PD_YY\"/><Cell col=\"18\" style=\"align:left;\" text=\"bind:WRS_ABR_NM\"/><Cell col=\"19\" text=\"bind:WRS_STDNM\"/><Cell col=\"20\" text=\"bind:TXT_DSC\"/><Cell col=\"21\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BYNG_WT\" mask=\"###,##0.00\"/><Cell col=\"22\" displaytype=\"number\" style=\"align:right;\" text=\"bind:INPD_QT\"/><Cell col=\"23\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BYNG_UPR\" mask=\"###,##0.00\"/><Cell col=\"24\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BYNG_QT\" mask=\"###,##0.00\"/><Cell col=\"25\" displaytype=\"number\" style=\"align:right;\" text=\"bind:GAM_AM\" mask=\"###,##0\"/><Cell col=\"26\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BYNG_VAT\" mask=\"###,##0\"/><Cell col=\"27\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BYAM\" mask=\"###,##0\"/><Cell col=\"28\" text=\"bind:FEE_ACG_ACCC\"/><Cell col=\"29\" text=\"bind:ACCNM\"/><Cell col=\"30\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SPY_AM\" mask=\"###,##0\"/><Cell col=\"31\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TXT_VAT\" mask=\"###,##0\"/><Cell col=\"32\" text=\"bind:NA_FEE_C\"/><Cell col=\"33\" text=\"bind:FEENM\"/><Cell col=\"34\" text=\"bind:NA_TR_DSC\"/><Cell col=\"35\" text=\"bind:NA_TR_DSC_NM\"/><Cell col=\"36\" text=\"bind:NA_CRC_CAN_DSC\"/><Cell col=\"37\" text=\"bind:NA_CRC_CAN_DSC_NM\"/><Cell col=\"38\" text=\"bind:FSRGMN_ENO\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\" displaytype=\"number\" style=\"align:right;\" mask=\"###,##0\"/><Cell col=\"25\" displaytype=\"number\" style=\"align:right;\" mask=\"###,##0\"/><Cell col=\"26\" displaytype=\"number\" style=\"align:right;\" mask=\"###,##0\"/><Cell col=\"27\" displaytype=\"number\" style=\"align:right;\" mask=\"###,##0\"/><Cell col=\"28\"/><Cell col=\"29\"/><Cell col=\"30\" displaytype=\"number\" style=\"align:right;\" mask=\"###,##0\"/><Cell col=\"31\" displaytype=\"number\" style=\"align:right;\" mask=\"###,##0\"/><Cell col=\"32\"/><Cell col=\"33\"/><Cell col=\"34\"/><Cell col=\"35\"/><Cell col=\"36\"/><Cell col=\"37\"/><Cell col=\"38\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", "397", "21", null, null, this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "173", null, this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear00", "absolute", null, "0", "53", "21", "173", null, this);
            obj.set_taborder("4");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("6");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "53", "21", "118", null, this);
            obj.set_taborder("8");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_Group");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00", "absolute", "608", "60", "165", "88", null, null, this);
            obj.set_text("PopupDiv00");
            obj.style.set_background("azure");
            this.addChild(obj.name, obj);
            obj = new ListBox("ListBox02", "absolute", "0", "0", "145", "50", null, null, this.PopupDiv00);
            this.PopupDiv00.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_scrollbars("autovert");
            obj.set_innerdataset("ds_excelBtnList");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj = new ListBox("ListBox00", "absolute", "0", "0", "165", "88", null, null, this.PopupDiv00);
            this.PopupDiv00.addChild(obj.name, obj);
            obj.set_taborder("1");
            obj.set_scrollbars("autovert");
            obj.set_innerdataset("@ds_excelBtnList");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_index("-1");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 121, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_text("Div02");
            		p.set_scrollbars("autoboth");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 165, 88, this.PopupDiv00,
            	//-- Layout function
            	function(p) {
            		p.set_text("PopupDiv00");
            		p.style.set_background("azure");

            	}
            );
            this.PopupDiv00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 1007, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_0530");
            		p.set_titletext("검수실적_상품별");

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
        this.addIncludeScript("VAN_DS_SC_0530.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0530.xfdl", function() {
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
           this.gfn_setInitForm(obj, e); //공통
        };
        this.fn_afterFormOnload = function()
        {
        	var param = [
        		{code:"CSER_CTR_TPC", dsName:"ds_cser_ctr_tpc", selecttype:"A"}
        	];
        	this.gfn_setCommonCode(param);
        	this.div_search.cbo_sign_list.set_index(0);	// 거래구분
        	this.div_search.cbo_cser_ctr.set_index(0);	// 계통계약유형
        	
        	/*
        	this.div_search.cal_from.set_value(this.gfn_today("yyyyMM")+"01");
        	this.div_search.cal_to.set_value(this.gfn_today("yyyyMMdd"));
        	*/
        	
        	this.div_search.cal_from.set_value(this.gfn_minusDate(this.gfn_today("yyyyMMdd"),7));	
        	this.div_search.cal_to.set_value(this.gfn_today("yyyyMMdd"));
        	
        	this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	this.div_list.grd_detailM.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	this.div_list.grd_detailD.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        }

        //초기화
        this.btn_clear00_onclick = function(obj,e)
        {
        	this.reload();
        }

        this.div_search_edt_data00_onkeydown = function(obj,e)
        {
        	var code = this.gfn_nullToEmpty(this.div_search.edt_data00.value);	
        	
        	if(code != null){
        		this.div_search.rdo_wrs_gubun.set_value(2);
        	}
        	
        	if(e.keycode == 13){
        		this.div_search_btn_popup00_onclick(true);
        	}
        }

        this.div_search_edt_data01_onkeydown = function(obj,e)
        {
        	var code = this.gfn_nullToEmpty(this.div_search.edt_data01.value);	
        	
        	if(code != null){
        		this.div_search.rdo_wrs_gubun.set_value(2);
        	}
        	
        	if(e.keycode == 13){
        		this.div_search_btn_popup00_onclick(true);
        	}
        }

        this.div_search_btn_popup00_onclick = function(params)
        {	
        	var code = this.div_search.edt_data00.value;		// 상품 코드 Edit 박스
        	var textname = this.div_search.edt_data01.value;	// 상품 명 Edit 박스
        	
        	var param = {
        				autoType:params,
        				searchCode:code,
        				searchText:textname
        	};
        	if(typeof params == "boolean"){
        		if(!this.searPopValue(param)){return};
        	}
        	
        	var oArg = {paramMode:"U", dsArg:this.Dataset00, autoPop:param};
        	var sOption = "autosize=true, titleText=false";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("src_wrs","POPUP::POPUP_SRC_WRS.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.div_search_edt_data02_onkeydown = function(obj,e)
        {
        	var code = this.gfn_nullToEmpty(this.div_search.edt_data02.value);	
        	
        	if(code != null){
        		this.div_search.rdo_cser_gubun.set_value(2);
        	}	
        	
        	if(e.keycode == 13){
        		this.div_search_btn_popup01_onclick(true);
        	}
        }

        this.div_search_edt_data03_onkeydown = function(obj,e)
        {
        	var code = this.gfn_nullToEmpty(this.div_search.edt_data03.value);	
        	
        	if(code != null){
        		this.div_search.rdo_cser_gubun.set_value(2);
        	}
        	
        	if(e.keycode == 13){
        		this.div_search_btn_popup01_onclick(true);
        	}
        }

        //수요처 조회
        this.div_search_btn_popup01_onclick = function(params)
        {
        	var code = this.div_search.edt_data02.value;		// 사업장 코드 Edit 박스
        	var textname = this.div_search.edt_data03.value;	// 사업장 명 Edit 박스
        	
        	var param = {
        				autoType:params,
        				searchCode:code,
        				searchText:textname
        	};
        	if(typeof params == "boolean"){
        		if(!this.searPopValue(param)){return};
        	}
        	var oArg = {paramMode:"U", dsArg:this.Dataset00, autoPop:param};
        	var sOption = "autosize=true, titleText=false";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("wrs_rvopl","POPUP::POPUP_SRC_RVOPL_TRPL.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	if(strVal != undefined){
        		var arrVal = strVal.split(",");
        		if(strId == "src_wrs"){
        			this.div_search.edt_data00.set_value(arrVal[0]);
        			this.div_search.edt_data01.set_value(arrVal[1]);
        		}
        		if(strId == "wrs_rvopl"){
        			this.div_search.edt_data02.set_value(arrVal[0]);
        			this.div_search.edt_data03.set_value(arrVal[1]);
        		}
        	}	
        }

        //조회 조건 검색
        this.validation = function()
        {
        	var cal_from = this.div_search.cal_from.value;	//시작일자
        	var cal_to = this.div_search.cal_to.value;		//종료일자
        	
        	if(this.gfn_nullToEmpty(cal_from) == "" || this.gfn_nullToEmpty(cal_to) == ""){
        		this.alert("조회기간을 선택해 주세요");
        		return false;
        	}
        	
        	if(this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value) < 0){
        	
        		//조회 시작일과 종료일을 다시 확인해 주세요
        		this.gfn_getMessage("alert", "validation.message.fromDate.toDate.reConfirm");
        		return false;
        	}else{
        		var tmpChk = this.div_auth.chk_all.value;
        		var tmpCnt = this.getAuthComp().combo.getInnerDataset().getRowCount();
        		if(application.gv_mbcoType == '1' && tmpCnt == 1){
        			if(this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value) > 366){
        				//기간을 35일 이내로 선택해 주세요
        				//this.gfn_getMessage("alert", "validation.message.selectDateIn35Day");
        				alert("조회 기간을 1년 이하로 설정해주세요.");
        				return false;
        			}
        		}else if(application.gv_mbcoType == '2'){
        			if(this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value) > 90){
        				//기간을 35일 이내로 선택해 주세요
        				//this.gfn_getMessage("alert", "validation.message.selectDateIn35Day");
        				alert("조회 기간을 90일 이하로 설정해주세요.");
        				return false;
        			}
        		}else if(application.gv_mbcoType == '1' && tmpChk == true){
        			if(this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value) > 35){
        				//기간을 35일 이내로 선택해 주세요
        				//this.gfn_getMessage("alert", "validation.message.selectDateIn35Day");
        				alert("조회 기간을 35일 이하로 설정해주세요.");
        				return false;
        			}
        		}else{
        			if(this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value) > 90){
        				//기간을 35일 이내로 선택해 주세요
        				//this.gfn_getMessage("alert", "validation.message.selectDateIn35Day");
        				alert("조회 기간을 90일 이하로 설정해주세요.");
        				return false;
        			}
        		}
        	}
        	return true;
        }

        this.btn_search_onclick = function(obj,e)
        {	
        	this.ds_master.clearData();
        	this.ds_detail.clearData();
        	this.ds_detail2.clearData();
        	
        	if(!this.validation()){return};
        	
        	var date_chk = this.div_search.cbo_date_chk.value;					//일자구분
        	var fr_date = this.div_search.cal_from.value;						//시작일
        	var to_date = this.div_search.cal_to.value;							//종료일
        	var sign_list = this.div_search.cbo_sign_list.value;				//거래구분
        	var ctr_tpc = this.div_search.cbo_cser_ctr.value;					//계통계약유형
        	var wrs_gubun = this.div_search.rdo_wrs_gubun.value;				//상품 구분코드
        	var wrs_c = this.gfn_nullToEmpty(this.div_search.edt_data00.value);	//상품코드
        	var cser_gubun = this.div_search.rdo_cser_gubun.value;				//사업장 구분코드
        	var bzplc = this.gfn_nullToEmpty(this.div_search.edt_data02.value); //사업장코드
        	
        	var params = "search_date_type="+date_chk
        				+" from_date="+fr_date
        				+" to_date="+to_date
        				+" trade_type="+sign_list
        				+" rots_ctr_dsc="+ctr_tpc
        				+" wrs_code="+wrs_c
        				+" is_na_all="+cser_gubun
        				+" na_bzplc="+bzplc
        				+" TRPL_C="+this.getTrplCode();
        	
        	var sSvcID        = "master_page";//통신아이디
        	var sURL          = "svc::rest/recadv/retrieveRecadvSlpMasterList_WRS";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_master=ds_master";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        //두번째 그리드 값
        this.div_list_grd_master_oncellclick = function(obj,e)
        {
        	this.ds_detail.clearData();
        	this.ds_detail2.clearData();
        	
        	if(!this.validation()){return};
        	
        	var rowp = this.ds_master.rowposition;
        	
        	var date_chk = this.div_search.cbo_date_chk.value;					//일자구분
        	var fr_date = this.div_search.cal_from.value;						//시작일
        	var to_date = this.div_search.cal_to.value;							//종료일
        	var sign_list = this.div_search.cbo_sign_list.value;				//거래구분
        	var ctr_tpc = this.div_search.cbo_cser_ctr.value;					//계통계약유형
        	var wrs_gubun = this.div_search.rdo_wrs_gubun.value;				//상품 구분코드
        	var cser_gubun = this.div_search.rdo_cser_gubun.value;				//사업장 구분코드
        	var bzplc = this.gfn_nullToEmpty(this.div_search.edt_data02.value); //사업장코드
        	
        	var params = "search_date_type="+date_chk
        				+" from_date="+fr_date
        				+" to_date="+to_date
        				+" trade_type="+sign_list
        				+" rots_ctr_dsc="+ctr_tpc
        				+" wrs_code="+this.ds_master.getColumn(rowp,"NA_WRS_C")
        				+" is_na_all="+cser_gubun
        				+" na_bzplc="+bzplc
        				+" TRPL_C="+this.getTrplCode();
        	
        	var sSvcID        = "detailM_page";//통신아이디
        	var sURL          = "svc::rest/recadv/retrieveRecadvSlpDetailList_WRS";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_detail=ds_detail";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        //세번째 그리드 
        this.div_list_grd_detailM_oncellclick = function(obj,e)
        {
        	this.ds_detail2.clearData();	
        	
        	if(!this.validation()){return};
        	var rowm = this.ds_master.rowposition;
        	var rowd = this.ds_detail.rowposition;
        	
        	var date_chk = this.div_search.cbo_date_chk.value;					//일자구분
        	var fr_date = this.div_search.cal_from.value;						//시작일
        	var to_date = this.div_search.cal_to.value;							//종료일
        	var sign_list = this.div_search.cbo_sign_list.value;				//거래구분
        	var ctr_tpc = this.div_search.cbo_cser_ctr.value;					//계통계약유형
        	var wrs_gubun = this.div_search.rdo_wrs_gubun.value;				//상품 구분코드
        	var cser_gubun = this.div_search.rdo_cser_gubun.value;				//사업장 구분코드
        	
        	var params = "search_date_type="+date_chk
        				+" from_date="+fr_date
        				+" to_date="+to_date
        				+" trade_type="+sign_list
        				+" is_na_all="+cser_gubun
        				+" na_bzplc="+this.ds_detail.getColumn(rowd,"ACTL_BUYPL_NA_TRPL_C")
        				+" rots_ctr_dsc="+ctr_tpc
        				+" wrs_code="+this.ds_master.getColumn(rowm,"NA_WRS_C")
        				+" MNGT_NA_TRPL_C="+this.ds_detail.getColumn(rowd,"ACTL_BUYPL_NA_TRPL_C")
        				+" TRPL_C="+this.getTrplCode();
        	
        	var sSvcID        = "detailD_page";//통신아이디
        	var sURL          = "svc::rest/recadv/retrieveRecadvSlpDetail2List_WRS";		//호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_detail2=ds_detail2 ds_detail2_SUM=ds_detail2_SUM";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        this.fn_callback = function(svcID,nCD,sMSG)
        {
        	if(nCD < 0){
        		this.gfn_getMessage("alert", sMSG);
        		return;
        	}else{
        		
        		if(svcID == "master_page"){			
        		}
        		
        		if(svcID == "detailD_page"){			
        			
        			if(this.ds_detail2.rowcount > 0){			
        			
        			var BYNG_QT = this.ds_detail2_SUM.getColumn(0,"BYNG_QT");
        			var GAM_AM = this.ds_detail2_SUM.getColumn(0,"GAM_AM");
        			var BYNG_VAT = this.ds_detail2_SUM.getColumn(0,"BYNG_VAT");
        			var BYAM = this.ds_detail2_SUM.getColumn(0,"BYAM");			
        			var SPY_AM = this.ds_detail2_SUM.getColumn(0,"SPY_AM");
        			var TXT_VAT = this.ds_detail2_SUM.getColumn(0,"TXT_VAT");
        			
        			this.div_list.grd_detailD.setCellProperty("Summ",24,"text",BYNG_QT);								
        			this.div_list.grd_detailD.setCellProperty("Summ",25,"text",GAM_AM);
        			this.div_list.grd_detailD.setCellProperty("Summ",26,"text",BYNG_VAT);
        			this.div_list.grd_detailD.setCellProperty("Summ",27,"text",BYAM);
        			this.div_list.grd_detailD.setCellProperty("Summ",30,"text",SPY_AM);	
        			this.div_list.grd_detailD.setCellProperty("Summ",31,"text",TXT_VAT);	
        			}
        		}
        		
        		
        		
        	}
        }

        
        //엑셀 상세 다운로드
        this.PopupDiv00_ListBox02_onitemclick = function(obj,e)
        {
        	if(!this.validation()){return}; //달력 value 체크
        	
        	var date_chk = this.div_search.cbo_date_chk.value;					//일자구분
        	var fr_date = this.div_search.cal_from.value;						//시작일
        	var to_date = this.div_search.cal_to.value;							//종료일
        	var sign_list = this.div_search.cbo_sign_list.value;				//거래구분
        	var ctr_tpc = this.div_search.cbo_cser_ctr.value;					//계통계약유형
        	var wrs_gubun = this.div_search.rdo_wrs_gubun.value;				//상품 구분코드
        	var wrs_c = this.gfn_nullToEmpty(this.div_search.edt_data00.value);	//상품코드
        	var cser_gubun = this.div_search.rdo_cser_gubun.value;				//사업장 구분코드
        	var bzplc = this.gfn_nullToEmpty(this.div_search.edt_data02.value); //사업장코드
        	
        	var params = "&search_date_type="+date_chk
        				+"&from_date="+fr_date
        				+"&to_date="+to_date
        				+"&trade_type="+sign_list
        				+"&rots_ctr_dsc="+ctr_tpc
        				+"&is_na_all="+cser_gubun
        				+"&TRPL_C="+this.getTrplCode();
        	var fileName = "";
        	
        	
        	if(e.itemvalue == '1'){
        		params += "&wrs_code="+wrs_c
        				 +"&na_bzplc="+bzplc;
        		fileName = "실적_상품별합계_"+this.getDate()+".xls";
        		fileName = encodeURI(encodeURI(fileName));
        		excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelRecadvSlpMasterList_WRS?"+params+"&fileName="+fileName, this);
        	}else if(e.itemvalue == '2'){
        		var rowp = this.ds_master.rowposition;
        		params += "&wrs_code="+this.gfn_nullToEmpty(this.ds_master.getColumn(rowp,"NA_WRS_C"))
        				 +"&na_bzplc="+bzplc;
        		trace(params);
        		fileName = "상품_전표합계_"+this.getDate()+".xls";
        		fileName = encodeURI(encodeURI(fileName));
        		excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelRecadvSlpDetailList_WRS?"+params+"&fileName="+fileName, this);
        	}else if(e.itemvalue == '3'){
        		/*
        		var rowm = this.ds_master.rowposition;
        		var rowd = this.ds_detail.rowposition;
        		params += "&wrs_code="+this.gfn_nullToEmpty(this.ds_master.getColumn(rowm,"NA_WRS_C"))
        				 +"&na_bzplc="+this.gfn_nullToEmpty(this.ds_detail.getColumn(rowd,"ACTL_BUYPL_NA_TRPL_C"));
        		*/
        		
        		//if (this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value) > 11) {
        		//Excel 상품내역 전환시 실적자료가 많은 관계로 조회 일자 기간을 11일 이내로 선택하셔야 합니다.
        		//	this.gfn_getMessage("alert", "msg.van_ds_sc_0500.view.excel.validation.text1");
        			
                //    if (this.div_search.cal_from.enable == true) this.div_search.cal_from.setFocus(true);
                //    return(false);
        		//}
        		
        		params += "&wrs_code="+wrs_c
        				+"&na_bzplc="+bzplc;
        		fileName = "전표_상품_수수료_"+this.getDate()+".xls";
        		params = encodeURI(encodeURI(params));
        		fileName = encodeURI(encodeURI(fileName));
        		excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelRecadvSlpDetail2List_WRS?"+params+"&fileName="+fileName, this);
        	}else if(e.itemvalue == '4'){

        		params += "&wrs_code="+wrs_c
        				+"&na_bzplc="+bzplc;
        		fileName = "전표_상품_수수료(간략)_"+this.getDate()+".xls";
        		params = encodeURI(encodeURI(params));
        		fileName = encodeURI(encodeURI(fileName));
        		excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelRecadvSlpDetail3List_WRS?"+params+"&fileName="+fileName, this);
        	}
        	this.PopupDiv00.closePopup();
        }

        this.btn_print_onclick = function(obj,e)
        {
        	var date_chk = this.div_search.cbo_date_chk.value;					//일자구분
        	var fr_date = this.div_search.cal_from.value;						//시작일
        	var to_date = this.div_search.cal_to.value;							//종료일
        	var sign_list = this.div_search.cbo_sign_list.value;				//거래구분
        	var ctr_tpc = this.div_search.cbo_cser_ctr.value;					//계통계약유형
        	var wrs_gubun = this.div_search.rdo_wrs_gubun.value;				//상품 구분코드
        	var wrs_c = this.gfn_nullToEmpty(this.div_search.edt_data00.value);	//상품코드
        	var cser_gubun = this.div_search.rdo_cser_gubun.value;				//사업장 구분코드
        	var bzplc = this.gfn_nullToEmpty(this.div_search.edt_data02.value); //사업장코드
        	
        	//var titleForm = this.getTrplCodePrint()+" ,일자구분:"+date_chk+" ,시작일:"+fr_date+" ,종료일:"+to_date
        	//				+" ,거래구분:"+sign_list+" ,계약유형:"+ctr_tpc+" ,상품구분코드:"+wrs_gubun
        	//				+",상품코드:"+wrs_c+" ,사업장구분코드:"+cser_gubun+" ,사업장코드:"+bzplc; 
        						
        						
        	var ozParam = {
        		sId: 'VAN_DS_SC_0530',
        		sUrl: '/rest/oz/printRecadvSlpMasterList_WRS',
        		paramType: 'param',
        		sParam: {
        			TRPL_C_TEXT:this.getTrplCodePrint(),
        			bzplc:bzplc,
        			wrs_gubun:wrs_gubun,
        			searchDateType:date_chk,
        			fromDate:fr_date,
        			toDate:to_date,
        			tradeType:sign_list,
        			rotsCtrDsc:ctr_tpc,
        			isNaAll:cser_gubun,
        			naBzplc:bzplc,
        			wrs_code:wrs_c,
        			TRPL_C:this.getTrplCode()
        		}
        	};
        	this.ozViewer(ozParam);
        	
        }

        this.div_list_btn_toggle00_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        //엑셀 PopDIV 호출
        this.btn_excel_onclick = function(obj,e)
        {
        	var nX = system.clientToScreenX(obj, 0) - system.clientToScreenX(application.mainframe, 0); 
        	var nY = system.clientToScreenY(obj, parseInt(obj.height)) - system.clientToScreenY(application.mainframe, 0); 
        	
        	this.PopupDiv00.trackPopup(nX, nY);	
        }

        this.div_search_rdo_wrs_gubun_onitemchanged = function(obj,e)
        {
        	//전체
        	if(this.div_search.rdo_wrs_gubun.value=='1'){
        		this.div_search.edt_data00.set_value('');
        		this.div_search.edt_data01.set_value('');		
        	}
        }

        this.div_search_rdo_cser_gubun_onitemchanged = function(obj,e)
        {
        	//전체
        	if(this.div_search.rdo_cser_gubun.value=='1'){
        		this.div_search.edt_data02.set_value('');
        		this.div_search.edt_data03.set_value('');		
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_search.edt_data00.addEventHandler("onkeydown", this.div_search_edt_data00_onkeydown, this);
            this.div_search.edt_data01.addEventHandler("onkeydown", this.div_search_edt_data01_onkeydown, this);
            this.div_search.btn_popup00.addEventHandler("onclick", this.div_search_btn_popup00_onclick, this);
            this.div_search.cbo_cser_ctr.addEventHandler("onitemchanged", this.Div00_Combo02_onitemchanged, this);
            this.div_search.cbo_date_chk.addEventHandler("onitemchanged", this.Div00_Combo02_onitemchanged, this);
            this.div_search.rdo_wrs_gubun.addEventHandler("onitemchanged", this.div_search_rdo_wrs_gubun_onitemchanged, this);
            this.div_search.rdo_cser_gubun.addEventHandler("onitemchanged", this.div_search_rdo_cser_gubun_onitemchanged, this);
            this.div_search.edt_data02.addEventHandler("onkeydown", this.div_search_edt_data02_onkeydown, this);
            this.div_search.edt_data03.addEventHandler("onkeydown", this.div_search_edt_data03_onkeydown, this);
            this.div_search.btn_popup01.addEventHandler("onclick", this.div_search_btn_popup01_onclick, this);
            this.div_list.grd_master.addEventHandler("oncellclick", this.div_list_grd_master_oncellclick, this);
            this.div_list.btn_toggle00.addEventHandler("onclick", this.div_list_btn_toggle00_onclick, this);
            this.div_list.grd_detailM.addEventHandler("oncellclick", this.div_list_grd_detailM_oncellclick, this);
            this.div_list.grd_detailD.addEventHandler("oncellclick", this.div_list_grd_detailD_oncellclick, this);
            this.btn_clear00.addEventHandler("onclick", this.btn_clear00_onclick, this);
            this.btn_print.addEventHandler("onclick", this.btn_print_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.PopupDiv00.ListBox02.addEventHandler("onitemclick", this.PopupDiv00_ListBox02_onitemclick, this);
            this.PopupDiv00.ListBox00.addEventHandler("onitemclick", this.PopupDiv00_ListBox02_onitemclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0530.xfdl");
        this.loadPreloadList();
       
    };
}
)();
