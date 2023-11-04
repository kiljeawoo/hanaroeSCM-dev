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
                this.set_name("VAN_DS_SC_1560");
                this.set_titletext("신규상품 등록내역 조회");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_main_req", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RN\" type=\"STRING\" size=\"256\"/><Column id=\"VAN_C_RQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NA_C_RQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NA_C_RQ_OBJ_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_C_RQ_OBJ_DSC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CTCPL_TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"RQ_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"APV_RQ_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"FSRGMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"FSRGMN_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"RQ_NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_C_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_ABR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_ENM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_SCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_DTCF_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_STDNM\" type=\"STRING\" size=\"256\"/><Column id=\"TXT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"SMA_APL_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"LIQ_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_WRS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MFT_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"WHT\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_UNT_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_PAK_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_BRAN_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_CSTD_METC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_DSTR_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_UZC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_IPO_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_QT\" type=\"STRING\" size=\"256\"/><Column id=\"VCBX_NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_DTL_EXPL\" type=\"STRING\" size=\"256\"/><Column id=\"BSC_UNT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BOXPE_AQZ\" type=\"STRING\" size=\"256\"/><Column id=\"RFID_UYN\" type=\"STRING\" size=\"256\"/><Column id=\"FOMNM\" type=\"STRING\" size=\"256\"/><Column id=\"SLGT_ETR_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"DSTR_TER_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DSTR_TER_MRK_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_MODIFY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TEMP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"CNF_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"CNF_DMT\" type=\"STRING\" size=\"256\"/><Column id=\"CNF_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RSP_C_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"NA_C_RQ_REJ_RSNC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_C_RQ_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"EDI_IF_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_SZE_SEX_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_QLT_GRDC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_PROENV_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"GAP_ATTC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_NACF_QLT_ATTC_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_PDAA_C\" type=\"STRING\" size=\"256\"/><Column id=\"ACHMI_LATCNM\" type=\"STRING\" size=\"256\"/><Column id=\"ACHMI_IGRQT\" type=\"STRING\" size=\"256\"/><Column id=\"FTLZ_PHAC_IGRDRT\" type=\"STRING\" size=\"256\"/><Column id=\"FTLZ_NTRG_IGRDRT\" type=\"STRING\" size=\"256\"/><Column id=\"FTLZ_KLM_IGRDRT\" type=\"STRING\" size=\"256\"/><Column id=\"FMACH_PATS_CLF_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NUMN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GEN_LON_LMT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_LON_LMT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_STD_UNT_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_SGRT\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_SDL_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_AHL_CN\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_STD_THKN\" type=\"STRING\" size=\"256\"/><Column id=\"CICL_WRS_STD_DMTR_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CICL_WRS_STD_DPTH_CN\" type=\"STRING\" size=\"256\"/><Column id=\"FED_PD_METC\" type=\"STRING\" size=\"256\"/><Column id=\"SNUM_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"CVS_QT\" type=\"STRING\" size=\"256\"/><Column id=\"CVS_NA_WRS_UNT_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_FL_CN\" type=\"STRING\" size=\"256\"/><Column id=\"KNET_WRS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TR_STOP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TR_STOP_RSNC\" type=\"STRING\" size=\"256\"/><Column id=\"FMACH_FOMNM\" type=\"STRING\" size=\"256\"/><Column id=\"BOXPE_DLVG_UPR\" type=\"STRING\" size=\"256\"/><Column id=\"SLAM_PER_FEERT\" type=\"STRING\" size=\"256\"/><Column id=\"PMTN_SPT_PERS\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_TRT_CMBR_CN\" type=\"STRING\" size=\"256\"/><Column id=\"ASP_SL_CNAM\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_sub_req", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_C_RQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RQ_NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_C_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_ABR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_ENM\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_LCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_MCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_SCLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_DTCF_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_STDNM\" type=\"STRING\" size=\"256\"/><Column id=\"TXT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"SMA_APL_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"LIQ_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_WRS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MFT_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"WHT\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_UNT_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_PAK_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_SZE_SEX_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_QLT_GRDC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_BRAN_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_PROENV_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"GAP_ATTC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_NACF_QLT_ATTC_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_CSTD_METC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_DSTR_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_UZC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_IPO_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_PDAA_C\" type=\"STRING\" size=\"256\"/><Column id=\"VLD_PRD_CN\" type=\"STRING\" size=\"256\"/><Column id=\"VLD_PRD_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_STD_UNT_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_HGHT\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_LEN_LEN\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_WDTH_LEN\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_SGRT\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_SDL_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_AHL_CN\" type=\"STRING\" size=\"256\"/><Column id=\"MTRL_STD_THKN\" type=\"STRING\" size=\"256\"/><Column id=\"CICL_WRS_STD_DMTR_CN\" type=\"STRING\" size=\"256\"/><Column id=\"CICL_WRS_STD_DPTH_CN\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_QT\" type=\"STRING\" size=\"256\"/><Column id=\"VCBX_NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"CVS_QT\" type=\"STRING\" size=\"256\"/><Column id=\"CVS_NA_WRS_UNT_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_DTL_EXPL\" type=\"STRING\" size=\"256\"/><Column id=\"BSC_UNT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"BOXPE_AQZ\" type=\"STRING\" size=\"256\"/><Column id=\"WRS_FL_CN\" type=\"STRING\" size=\"256\"/><Column id=\"KNET_WRS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RFID_UYN\" type=\"STRING\" size=\"256\"/><Column id=\"TR_STOP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TR_STOP_RSNC\" type=\"STRING\" size=\"256\"/><Column id=\"FOMNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pageVO", this);
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


            
            // UI Components Initialize
            obj = new Div("div_menu", "absolute", "0", "0", "323", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "160", null, this);
            obj.set_taborder("1");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search00", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("3");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "69", "15", null, this);
            obj.set_taborder("6");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", "127", "21", null, null, this.div_search);
            obj.set_taborder("12");
            obj.set_text("상품코드 조회구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "36", "127", "21", null, null, this.div_search);
            obj.set_taborder("13");
            obj.set_text("물류센터코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "475", "36", "79", "21", null, null, this.div_search);
            obj.set_taborder("14");
            obj.set_text("적용일자");
            obj.set_cssclass("sta_WFSA_Label");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_store_chk00", "absolute", "142", "10", "160", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_store_chk00_innerdataset = new Dataset("rdo_store_chk00_innerdataset", this.div_search.rdo_store_chk00);
            rdo_store_chk00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">상품코드</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">상품명</Col></Row></Rows>");
            obj.set_innerdataset(rdo_store_chk00_innerdataset);
            obj.set_taborder("17");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Edit("edt_data00", "absolute", "302", "10", "143", "21", null, null, this.div_search);
            obj.set_taborder("18");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data01", "absolute", "342", "36", "103", "21", null, null, this.div_search);
            obj.set_taborder("19");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_center_code00", "absolute", "142", "36", "197", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_center_code00_innerdataset = new Dataset("cbo_center_code00_innerdataset", this.div_search.cbo_center_code00);
            cbo_center_code00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">[]선택안됨</Col></Row><Row><Col id=\"codecolumn\">8808983000015</Col><Col id=\"datacolumn\">[8808983000015]㈜농협하나로유통</Col></Row></Rows>");
            obj.set_innerdataset(cbo_center_code00_innerdataset);
            obj.set_taborder("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj = new Calendar("cal_fsrg00", "absolute", "554", "36", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("21");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj.set_visible("false");
            obj = new Calendar("cal_fsrg01", "absolute", "675", "36", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("22");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_visible("false");
            obj = new Static("Static04", "absolute", "660", "36", "10", "21", null, null, this.div_search);
            obj.set_taborder("23");
            obj.set_text("~");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_sep_value", "absolute", "554", "10", "221", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_sep_value_innerdataset = new Dataset("rdo_sep_value_innerdataset", this.div_search.rdo_sep_value);
            rdo_sep_value_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">일반등록</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">일괄(EXCEL)</Col></Row></Rows>");
            obj.set_innerdataset(rdo_sep_value_innerdataset);
            obj.set_taborder("24");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_value("1");
            obj = new Static("Static03", "absolute", "475", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("25");
            obj.set_text("참조구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "97", null, null, "15", "-90", this);
            obj.set_taborder("5");
            obj.set_text("<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<UxFormClipBoard version=\"1.5\">\r\n  <Dataset id=\"ds_pageVO\" firefirstcount=\"0\" firenextcount=\"0\" useclientlayout=\"false\" updatecontrol=\"true\" enableevent=\"true\" loadkeymode=\"keep\" loadfiltermode=\"keep\" reversesubsum=\"false\">\r\n    <ColumnInfo>\r\n      <Column id=\"CURRENT_PAGE\" type=\"STRING\" size=\"256\"/>\r\n      <Column id=\"PAGE_SIZE\" type=\"STRING\" size=\"256\"/>\r\n      <Column id=\"TOTAL_ROW_COUNT\" type=\"STRING\" size=\"256\"/>\r\n    </ColumnInfo>\r\n    <Rows>\r\n      <Row>\r\n        <Col id=\"TOTAL_ROW_COUNT\">0</Col>\r\n        <Col id=\"PAGE_SIZE\">10</Col>\r\n        <Col id=\"CURRENT_PAGE\">1</Col>\r\n      </Row>\r\n    </Rows>\r\n  </Dataset>\r\n</UxFormClipBoard>\r\n");
            this.addChild(obj.name, obj);
            obj = new Button("btn_toggle00", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_main", "absolute", "0", "42", null, "220", "0", null, this.div_list);
            obj.set_taborder("4");
            obj.set_visible("true");
            obj.set_binddataset("ds_main_req");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"코드신청번호\"/><Cell col=\"2\" rowspan=\"2\" text=\"코드신청&#13;&#10;상태코드\"/><Cell col=\"3\" rowspan=\"2\" text=\"코드신청&#13;&#10;대상구분코드\"/><Cell col=\"4\" rowspan=\"2\" text=\"연락처&#13;&#10;전화번호\"/><Cell col=\"5\" rowspan=\"2\" text=\"접수일시\"/><Cell col=\"6\" rowspan=\"2\" text=\"접수자&#13;&#10;개인번호\"/><Cell col=\"7\" rowspan=\"2\" text=\"접수자&#13;&#10;사업장코드\"/><Cell col=\"8\" rowspan=\"2\" text=\"처리일시\"/><Cell col=\"9\" rowspan=\"2\" text=\"처리자&#13;&#10;개인번호\"/><Cell col=\"10\" rowspan=\"2\" text=\"승인/&#13;&#10;거절자명\"/><Cell col=\"11\" rowspan=\"2\" text=\"신청거절&#13;&#10;사유코드\"/><Cell col=\"12\" rowspan=\"2\" text=\"신청내용\"/><Cell col=\"13\" rowspan=\"2\" text=\"처리내용\"/><Cell col=\"14\" rowspan=\"2\" text=\"승인신청&#13;&#10;사업장코드\"/><Cell col=\"15\" rowspan=\"2\" text=\"삭제여부\"/><Cell col=\"16\" rowspan=\"2\" text=\"최초등록일시\"/><Cell col=\"17\" rowspan=\"2\" text=\"최초등록자&#13;&#10;개인번호\"/><Cell col=\"18\" rowspan=\"2\" text=\"최초등록자&#13;&#10;사업장코드\"/><Cell col=\"19\" rowspan=\"2\" text=\"최종변경일시\"/><Cell col=\"20\" rowspan=\"2\" text=\"최종변경자&#13;&#10;개인번호\"/><Cell col=\"21\" rowspan=\"2\" text=\"최종변경자&#13;&#10;사업장코드\"/><Cell col=\"22\" rowspan=\"2\" text=\"자체상품&#13;&#10;신청사유코드\"/><Cell col=\"23\" rowspan=\"2\" text=\"바이어접수일시\"/><Cell col=\"24\" rowspan=\"2\" text=\"바이어&#13;&#10;접수자&#13;&#10;개인번호\"/><Cell col=\"25\" rowspan=\"2\" text=\"바이어&#13;&#10;접수자&#13;&#10;사업장코드\"/><Cell col=\"26\" rowspan=\"2\" text=\"바이어&#13;&#10;처리일시\"/><Cell col=\"27\" rowspan=\"2\" text=\"바이어&#13;&#10;처리자&#13;&#10;개인번호\"/><Cell col=\"28\" rowspan=\"2\" text=\"바이어&#13;&#10;처리자&#13;&#10;사업장코드\"/><Cell col=\"29\" rowspan=\"2\" text=\"개당&#13;&#10;납품단가\"/><Cell col=\"30\" rowspan=\"2\" text=\"박스당&#13;&#10;납품단가\"/><Cell col=\"31\" rowspan=\"2\" text=\"매출액당&#13;&#10;수수료율\"/><Cell col=\"32\" rowspan=\"2\" text=\"판촉지원&#13;&#10;인원수\"/><Cell col=\"33\" rowspan=\"2\" text=\"상품취급&#13;&#10;경쟁점수\"/><Cell col=\"34\" rowspan=\"2\" text=\"추정매출&#13;&#10;기여금\"/><Cell col=\"35\" rowspan=\"2\" text=\"대체삭제&#13;&#10;상품코드\"/><Cell col=\"36\" rowspan=\"2\" text=\"계통상품&#13;&#10;확인여부\"/><Cell col=\"37\" rowspan=\"2\" text=\"납품거래처명\"/><Cell col=\"38\" rowspan=\"2\" text=\"납품거래처&#13;&#10;전화번호\"/></Band><Band id=\"body\"><Cell text=\"bind:RN\"/><Cell col=\"1\" text=\"bind:NA_C_RQ_NO\"/><Cell col=\"2\" text=\"bind:NA_C_RQ_STSC\"/><Cell col=\"3\" text=\"bind:NA_C_RQ_OBJ_DSC_NM\"/><Cell col=\"4\" text=\"bind:CTCPL_TELNO\"/><Cell col=\"5\" text=\"bind:CNF_DMT\"/><Cell col=\"6\" text=\"bind:FSRGMN_ENO\"/><Cell col=\"7\" text=\"bind:FSRGMN_NA_BZPLC\"/><Cell col=\"8\" text=\"bind:CNF_DMT\"/><Cell col=\"9\" text=\"bind:CNF_ENO\"/><Cell col=\"10\" text=\"bind:CNF_NAME\"/><Cell col=\"11\" text=\"bind:NA_C_RQ_REJ_RSNC\"/><Cell col=\"12\" text=\"bind:RQ_CNTN\"/><Cell col=\"13\"/><Cell col=\"14\" text=\"bind:APV_RQ_NA_BZPLC\"/><Cell col=\"15\" text=\"bind:DEL_YN\"/><Cell col=\"16\" text=\"bind:FSRG_DTM\"/><Cell col=\"17\" text=\"bind:FSRGMN_ENO\"/><Cell col=\"18\" text=\"bind:FSRGMN_NA_BZPLC\"/><Cell col=\"19\" text=\"bind:LSCHG_DTM\"/><Cell col=\"20\" text=\"bind:LS_CMENO\"/><Cell col=\"21\" text=\"bind:LSCGMN_NA_BZPLC\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/><Cell col=\"27\"/><Cell col=\"28\"/><Cell col=\"29\"/><Cell col=\"30\" text=\"bind:BOXPE_DLVG_UPR\"/><Cell col=\"31\" text=\"bind:SLAM_PER_FEERT\"/><Cell col=\"32\" text=\"bind:PMTN_SPT_PERS\"/><Cell col=\"33\" text=\"bind:WRS_TRT_CMBR_CN\"/><Cell col=\"34\" text=\"bind:ASP_SL_CNAM\"/><Cell col=\"35\"/><Cell col=\"36\"/><Cell col=\"37\"/><Cell col=\"38\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_detail", "absolute", "0", "307", null, null, "0", "0", this.div_list);
            obj.set_taborder("5");
            obj.set_binddataset("ds_sub_req");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"90\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"코드신청번호\"/><Cell col=\"2\" rowspan=\"2\" text=\"신청상품코드\"/><Cell col=\"3\" rowspan=\"2\" text=\"상품코드\"/><Cell col=\"4\" rowspan=\"2\" text=\"상품코드&#13;&#10;구분코드\"/><Cell col=\"5\" rowspan=\"2\" text=\"상품&#13;&#10;구분코드\"/><Cell col=\"6\" rowspan=\"2\" text=\"상품명\"/><Cell col=\"7\" rowspan=\"2\" text=\"상품약어명\"/><Cell col=\"8\" rowspan=\"2\" text=\"상품영문명\"/><Cell col=\"9\" rowspan=\"2\" text=\"상품유형코드\"/><Cell col=\"10\" rowspan=\"2\" text=\"상품&#13;&#10;대분류코드\"/><Cell col=\"11\" rowspan=\"2\" text=\"상품&#13;&#10;중분류코드\"/><Cell col=\"12\" rowspan=\"2\" text=\"상품&#13;&#10;소분류코드\"/><Cell col=\"13\" rowspan=\"2\" text=\"상품&#13;&#10;세분류코드\"/><Cell col=\"14\" rowspan=\"2\" text=\"상품규격명\"/><Cell col=\"15\" rowspan=\"2\" text=\"과세&#13;&#10;구분코드\"/><Cell col=\"16\" rowspan=\"2\" text=\"영세적용&#13;&#10;유형코드\"/><Cell col=\"17\" rowspan=\"2\" text=\"주류여부\"/><Cell col=\"18\" rowspan=\"2\" text=\"공동&#13;&#10;상품여부\"/><Cell col=\"19\" rowspan=\"2\" text=\"제조&#13;&#10;거래처코드\"/><Cell col=\"20\" rowspan=\"2\" text=\"단량\"/><Cell col=\"21\" rowspan=\"2\" text=\"상품&#13;&#10;단위코드\"/><Cell col=\"22\" rowspan=\"2\" text=\"상품&#13;&#10;포장코드\"/><Cell col=\"23\" rowspan=\"2\" text=\"상품&#13;&#10;크기성별코드\"/><Cell col=\"24\" rowspan=\"2\" text=\"상품&#13;&#10;품질등급코드\"/><Cell col=\"25\" rowspan=\"2\" text=\"상품&#13;&#10;브랜드코드\"/><Cell col=\"26\" rowspan=\"2\" text=\"상품&#13;&#10;친환경구분코드\"/><Cell col=\"27\" rowspan=\"2\" text=\"GAP&#13;&#10;인증여부\"/><Cell col=\"28\" rowspan=\"2\" text=\"상품&#13;&#10;농협품질인증코드\"/><Cell col=\"29\" rowspan=\"2\" text=\"상품&#13;&#10;보관방식코드\"/><Cell col=\"30\" rowspan=\"2\" text=\"상품&#13;&#10;유통상태코드\"/><Cell col=\"31\" rowspan=\"2\" text=\"상품&#13;&#10;용도코드\"/><Cell col=\"32\" rowspan=\"2\" text=\"상품&#13;&#10;수입구분코드\"/><Cell col=\"33\" rowspan=\"2\" text=\"상품&#13;&#10;산지코드\"/><Cell col=\"34\" rowspan=\"2\" text=\"유효&#13;&#10;기간수\"/><Cell col=\"35\" rowspan=\"2\" text=\"유효기간&#13;&#10;구분코드\"/><Cell col=\"36\" rowspan=\"2\" text=\"농약품목명\"/><Cell col=\"37\" rowspan=\"2\" text=\"농약성분량\"/><Cell col=\"38\" rowspan=\"2\" text=\"비료인산성분비\"/><Cell col=\"39\" rowspan=\"2\" text=\"비료질소성분비\"/><Cell col=\"40\" rowspan=\"2\" text=\"비료칼륨성분비\"/><Cell col=\"41\" rowspan=\"2\" text=\"농기계부품&#13;&#10;분류구분코드\"/><Cell col=\"42\" rowspan=\"2\" text=\"본체여부\"/><Cell col=\"43\" rowspan=\"2\" text=\"일반융자&#13;&#10;한도금액\"/><Cell col=\"44\" rowspan=\"2\" text=\"공동융자&#13;&#10;한도금액\"/><Cell col=\"45\" rowspan=\"2\" text=\"상품&#13;&#10;규격단위코드\"/><Cell col=\"46\" rowspan=\"2\" text=\"상품높이\"/><Cell col=\"47\" rowspan=\"2\" text=\"상품&#13;&#10;세로길이\"/><Cell col=\"48\" rowspan=\"2\" text=\"상품&#13;&#10;가로길이\"/><Cell col=\"49\" rowspan=\"2\" text=\"상품&#13;&#10;비중률\"/><Cell col=\"50\" rowspan=\"2\" text=\"상품&#13;&#10;외쌍겹구분코드\"/><Cell col=\"51\" rowspan=\"2\" text=\"상품&#13;&#10;유공개수\"/><Cell col=\"52\" rowspan=\"2\" text=\"자재&#13;&#10;규격두께\"/><Cell col=\"53\" rowspan=\"2\" text=\"원형&#13;&#10;상품규격지름수\"/><Cell col=\"54\" rowspan=\"2\" text=\"원형&#13;&#10;상품규격깊이수\"/><Cell col=\"55\" rowspan=\"2\" text=\"공병&#13;&#10;상품코드\"/><Cell col=\"56\" rowspan=\"2\" text=\"공병수량\"/><Cell col=\"57\" rowspan=\"2\" text=\"공상자&#13;&#10;상품코드\"/><Cell col=\"58\" rowspan=\"2\" text=\"사료생산&#13;&#10;방식코드\"/><Cell col=\"59\" rowspan=\"2\" text=\"찾기번호내용\"/><Cell col=\"60\" rowspan=\"2\" text=\"환산수량\"/><Cell col=\"61\" rowspan=\"2\" text=\"환산상품&#13;&#10;단위코드\"/><Cell col=\"62\" rowspan=\"2\" text=\"상품&#13;&#10;상세설명\"/><Cell col=\"63\" rowspan=\"2\" text=\"기본단위&#13;&#10;구분코드\"/><Cell col=\"64\" rowspan=\"2\" text=\"박스당입수\"/><Cell col=\"65\" rowspan=\"2\" text=\"상품파일개수\"/><Cell col=\"66\" rowspan=\"2\" text=\"코리안넷&#13;&#10;상품번호\"/><Cell col=\"67\" rowspan=\"2\" text=\"RFID&#13;&#10;사용여부\"/><Cell col=\"68\" rowspan=\"2\" text=\"거래중지여부\"/><Cell col=\"69\" rowspan=\"2\" text=\"거래중지&#13;&#10;사유코드\"/><Cell col=\"70\" rowspan=\"2\" text=\"농기계형식명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:NA_C_RQ_NO\"/><Cell col=\"2\" text=\"bind:RQ_NA_WRS_C\"/><Cell col=\"3\" text=\"bind:NA_WRS_C\"/><Cell col=\"4\" text=\"bind:WRS_C_DSC\"/><Cell col=\"5\" text=\"bind:WRS_DSC\"/><Cell col=\"6\" text=\"bind:WRSNM\"/><Cell col=\"7\" text=\"bind:WRS_ABR_NM\"/><Cell col=\"8\" text=\"bind:WRS_ENM\"/><Cell col=\"9\" text=\"bind:WRS_TPC\"/><Cell col=\"10\" text=\"bind:NA_WRS_LCLC\"/><Cell col=\"11\" text=\"bind:NA_WRS_MCLC\"/><Cell col=\"12\" text=\"bind:NA_WRS_SCLC\"/><Cell col=\"13\" text=\"bind:NA_WRS_DTCF_C\"/><Cell col=\"14\" text=\"bind:WRS_STDNM\"/><Cell col=\"15\" text=\"bind:TXT_DSC\"/><Cell col=\"16\" text=\"bind:SMA_APL_TPC\"/><Cell col=\"17\" text=\"bind:LIQ_YN\" expr=\"expr:LIQ_YN=='1'?'여':'부'\"/><Cell col=\"18\" text=\"bind:COMM_WRS_YN\" expr=\"expr:COMM_WRS_YN=='1'?'여':'부'\"/><Cell col=\"19\" text=\"bind:MFT_NA_TRPL_C\"/><Cell col=\"20\" text=\"bind:WHT\"/><Cell col=\"21\" text=\"bind:NA_WRS_UNT_C\"/><Cell col=\"22\" text=\"bind:NA_WRS_PAK_C\"/><Cell col=\"23\" text=\"bind:NA_WRS_SZE_SEX_C\"/><Cell col=\"24\" text=\"bind:NA_WRS_QLT_GRDC\"/><Cell col=\"25\" text=\"bind:NA_WRS_BRAN_C\"/><Cell col=\"26\" text=\"bind:NA_WRS_PROENV_DSC\"/><Cell col=\"27\" text=\"bind:GAP_ATTC_YN\"/><Cell col=\"28\" text=\"bind:NA_WRS_NACF_QLT_ATTC_C\"/><Cell col=\"29\" text=\"bind:NA_WRS_CSTD_METC\"/><Cell col=\"30\" text=\"bind:NA_WRS_DSTR_STSC\"/><Cell col=\"31\" text=\"bind:NA_WRS_UZC\"/><Cell col=\"32\" text=\"bind:NA_WRS_IPO_DSC\" expr=\"expr:NA_WRS_IPO_DSC=='1'?'여':'부'\"/><Cell col=\"33\" text=\"bind:NA_WRS_PDAA_C\"/><Cell col=\"34\" text=\"bind:VLD_PRD_CN\"/><Cell col=\"35\" text=\"bind:VLD_PRD_DSC\"/><Cell col=\"36\"/><Cell col=\"37\"/><Cell col=\"38\"/><Cell col=\"39\"/><Cell col=\"40\"/><Cell col=\"41\"/><Cell col=\"42\"/><Cell col=\"43\"/><Cell col=\"44\"/><Cell col=\"45\" text=\"bind:NA_WRS_STD_UNT_C\"/><Cell col=\"46\" text=\"bind:WRS_HGHT\"/><Cell col=\"47\" text=\"bind:WRS_LEN_LEN\"/><Cell col=\"48\" text=\"bind:WRS_WDTH_LEN\"/><Cell col=\"49\" text=\"bind:WRS_SGRT\"/><Cell col=\"50\" text=\"bind:WRS_SDL_DSC\"/><Cell col=\"51\" text=\"bind:WRS_AHL_CN\"/><Cell col=\"52\" text=\"bind:MTRL_STD_THKN\"/><Cell col=\"53\" text=\"bind:CICL_WRS_STD_DMTR_CN\"/><Cell col=\"54\" text=\"bind:CICL_WRS_STD_DPTH_CN\"/><Cell col=\"55\" text=\"bind:VCBT_NA_WRS_C\"/><Cell col=\"56\" text=\"bind:VCBT_QT\"/><Cell col=\"57\" text=\"bind:VCBX_NA_WRS_C\"/><Cell col=\"58\"/><Cell col=\"59\"/><Cell col=\"60\" text=\"bind:CVS_QT\"/><Cell col=\"61\" text=\"bind:CVS_NA_WRS_UNT_C\"/><Cell col=\"62\" text=\"bind:WRS_DTL_EXPL\"/><Cell col=\"63\" text=\"bind:BSC_UNT_DSC\"/><Cell col=\"64\" text=\"bind:BOXPE_AQZ\"/><Cell col=\"65\" text=\"bind:WRS_FL_CN\"/><Cell col=\"66\" text=\"bind:KNET_WRS_NO\"/><Cell col=\"67\" text=\"bind:RFID_UYN\"/><Cell col=\"68\" text=\"bind:TR_STOP_YN\"/><Cell col=\"69\" text=\"bind:TR_STOP_RSNC\"/><Cell col=\"70\" text=\"bind:FOMNM\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_page", "absolute", "28.55%", "262", "338", "44", null, null, this.div_list);
            obj.set_taborder("6");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_excel01", "absolute", null, "273", "41", "21", "0", null, this.div_list);
            obj.set_taborder("7");
            obj.set_text("엑셀");
            this.div_list.addChild(obj.name, obj);
            obj = new WebBrowser("web_downExcelM", "absolute", "78.3%", "10", null, "20", "16.88%", null, this.div_list);
            obj.set_taborder("8");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);

            obj = new Button("btn_clear00", "absolute", null, "0", "53", "21", "118", null, this);
            obj.set_taborder("7");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 69, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.set_text("<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<UxFormClipBoard version=\"1.5\">\r\n  <Dataset id=\"ds_pageVO\" firefirstcount=\"0\" firenextcount=\"0\" useclientlayout=\"false\" updatecontrol=\"true\" enableevent=\"true\" loadkeymode=\"keep\" loadfiltermode=\"keep\" reversesubsum=\"false\">\r\n    <ColumnInfo>\r\n      <Column id=\"CURRENT_PAGE\" type=\"STRING\" size=\"256\"/>\r\n      <Column id=\"PAGE_SIZE\" type=\"STRING\" size=\"256\"/>\r\n      <Column id=\"TOTAL_ROW_COUNT\" type=\"STRING\" size=\"256\"/>\r\n    </ColumnInfo>\r\n    <Rows>\r\n      <Row>\r\n        <Col id=\"TOTAL_ROW_COUNT\">0</Col>\r\n        <Col id=\"PAGE_SIZE\">10</Col>\r\n        <Col id=\"CURRENT_PAGE\">1</Col>\r\n      </Row>\r\n    </Rows>\r\n  </Dataset>\r\n</UxFormClipBoard>\r\n");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1560");
            		p.set_titletext("신규상품 등록내역 조회");

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
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1560.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1560.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e) 
        {
        	this.gfn_setInitForm(obj, e); //공통
        };

        this.fn_afterFormOnload = function() //onload
        {
        	this.div_search.cbo_center_code00.set_value("");
        	var todays = this.gfn_today('yyyyMMdd');
        	this.div_search.cal_fsrg00.set_value(todays);
        	this.div_search.cal_fsrg01.set_value(todays);
        	this.div_list.grd_main.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	this.div_list.grd_detail.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	//그리드클릭 이벤트 등록
        	this.div_list.grd_main.addEventHandler("oncellclick", this.grd_afterFnc, this);
        }
        //조회버튼
        this.btn_search00_onclick = function(obj,e)
        {
        	this.fn_paging(1); //처음 조회 시 페이지를 확인한다.
        }
        //페이징 처리
        this.fn_paging = function(vPageNum)
        {
        	this.ds_main_req.clearData();     //Grid에 Binding된 Dataset명	
        	this.ds_sub_req.clearData();
        	
        	this.ds_pageVO.addRow(); 
        	
        	var vPageSize   = 10; 	//Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
        	var vTotalCount = 1; 	//전체건수. 화면조회후 리턴받아 사용
         	this.ds_pageVO.setColumn(0,"CURRENT_PAGE",vPageNum); //현재 페이지
         	this.ds_pageVO.setColumn(0,"PAGE_SIZE",vPageSize);
         	this.ds_pageVO.setColumn(0,"TOTAL_ROW_COUNT",vTotalCount);
        	 
        	var argumentObj = "";
        	
        	lsNowPage = vPageNum;//현재페이지 설정 
        	
        	this.search();
        }

        /* 페이지 숫자 위치 설정*/
        this.div_list_onsize = function(obj,e)
        {
        	var nLeft = (e.cx/2)-(this.div_list.div_page.width/2);
        	this.div_list.div_page.set_left(nLeft);
        }

        //조회
        this.search = function()
        {
        	if(this.dayCheck()==false)return false;

        	var param = "store_edt="+this.gfn_nullToEmpty(this.div_search.edt_data00.value) // 상품코드 조회구분 input
        				+" store_radio="+this.div_search.rdo_store_chk00.value				// 상품코드 조회구분 radio
        				+" center_code="+this.div_search.cbo_center_code00.value			// 물류센터코드 선택값
        				+" start_day="+this.div_search.cal_fsrg00.value						// 적용일자 시작
        				+" end_day="+this.div_search.cal_fsrg01.value						// 적용일자 끝
        				+" TRPL_C="+this.getTrplCode()										// 사업장코드
        				+" kindval=1"
        				+" gubun="+this.div_search.rdo_sep_value.value;						// 참조구분
        	var sSvcID        = "p_search";//통신아이디
        	var sURL          = "svc::rest/pds/pricat/Product/retrieveReturnNewGoods";// 호출할 서버 페이지 주소
        	var sInDatasets   = "ds_pageVO=ds_pageVO";//보내는데이터셋
        	var sOutDatasets  = "ds_main_req=ds_main_req ds_pageVO=ds_pageVO";
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType 	  = "U"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        // 메인 그리드 클릭 시 디테일 그리드를 조회
        this.grd_afterFnc = function(obj,e)
        {
        	
        	var rowposition = this.ds_main_req.rowposition;
        	var params = "";
        	if(this.div_search.rdo_sep_value.value == "1"){
        		params = "VAN_C="+this.ds_main_req.getColumn(rowposition,"VAN_C_RQ_NO")
        				+" RQ_TRPL="+this.ds_main_req.getColumn(rowposition,"RQ_NA_WRS_C")
        				+" gubun="+this.div_search.rdo_sep_value.value			//구분자
        				+" kindval=2";
        	}else{
        		params = "VAN_C="+this.ds_main_req.getColumn(rowposition,"NA_C_RQ_NO")
        				+" gubun="+this.div_search.rdo_sep_value.value			//구분자
        				+" kindval=2";
        	}
        	var sSvcID        = "p_search_sub";//통신아이디
        	var sURL          = "svc::rest/pds/pricat/Product/retrieveReturnNewGoods";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_sub_req=ds_sub_req";
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType 	  = "U"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        this.fn_callback = function(svcID,nCD,sMSG)
        {
        	if(nCD < 0){
        		this.gfn_getMessage("alert", sMSG);
        		return;
        	}else{
        		//페이징 처리 보고
        		if(svcID == "p_search"){
        			var p_sum = 0;
        			if(this.div_list.grd_main.rowcount > 0){
        				var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        				var sPagesize = this.ds_pageVO.getColumn(0, "PAGE_SIZE");
        				
        				this.div_list.div_page.fn_pageSet(sTotal, sPagesize,"grd_main,div_page",lsNowPage);
        								
        				trace(this.div_list.grd_main.rowcount);
        				p_sum = 100;				
        				//합계대비의 합계  100으로 설정
        				this.div_list.grd_main.setCellProperty("Summ",3,"text",p_sum);
        				
        				//현재페이지							
        				var sCurrentPage = this.ds_pageVO.getColumn(0, "CURRENT_PAGE")
        			}else{
        				this.div_list.div_page.fn_pageSet(0, 0,"grd_main,div_page",lsNowPage);//페이징 설정				
        				
        				this.div_list.grd_main.setCellProperty("Summ",1,"text",0);
        				this.div_list.grd_main.setCellProperty("Summ",2,"text",0);
        				this.div_list.grd_main.setCellProperty("Summ",3,"text",0);
        				this.div_list.grd_main.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        			}
        		}
        		if(svcID == "p_search_sub" && sMSG == "success.data.newgoods"){
        			if(this.div_search.rdo_sep_value.value == "2"){
        				
        			}
        		}
        	}
        }

        // 적용일자 숨김 여부
        this.div_search_rdo_sep_value_onitemchanged = function(obj,e)
        {
        	if(this.div_search.rdo_sep_value.value == "1"){
        		this.div_search.Static02.set_visible(false);
        		this.div_search.cal_fsrg00.set_visible(false);
        		this.div_search.Static04.set_visible(false);
        		this.div_search.cal_fsrg01.set_visible(false);
        	}else{
        		this.div_search.Static02.set_visible(true);
        		this.div_search.cal_fsrg00.set_visible(true);
        		this.div_search.Static04.set_visible(true);
        		this.div_search.cal_fsrg01.set_visible(true);
        	}
        }

        //물류센터코드
        this.div_search_cbo_center_code00_onitemchanged = function(obj,e)
        {
        	var combo = this.div_search.cbo_center_code00.value;
        	if(this.div_search.cbo_center_code00.value != 0){
        		this.div_search.edt_data01.set_value(combo);
        	}else{
        		this.div_search.edt_data01.set_value("");
        	}
        }

        //적용일자 값 체크
        this.dayCheck = function(){
        	var date1 = this.div_search.cal_fsrg00.value;
        	var date2 = this.div_search.cal_fsrg01.value;
        	
        	if(date1 != "" && date2 != ""){
        		if(this.gfn_getDiffDay(this.div_search.cal_fsrg00.value,this.div_search.cal_fsrg01.value) < 0){
        			this.gfn_getMessage("alert",'validation.message.fromDate.toDate.reConfirm.');
        			return false;
        		}else{
        			if(this.gfn_getDiffDay(this.div_search.cal_fsrg00.value,this.div_search.cal_fsrg01.value) > 31){
        				this.gfn_getMessage("alert",'validation.message.selectDateIn31Day');
        				return false;
        			}
        		}
        	}else if(date1 != "" && date2 == ""){
        		this.alert(this.gfn_getMessage("alert",'msg.van_ds_sc_1510.view.transaction.history')+' ['+date1+' - '+date2+']');
        		return false;
        	}else if(date1 == "" && date2 != ""){
        		this.alert(this.gfn_getMessage("alert",'msg.van_ds_sc_1510.view.transaction.history')+' ['+date1+' - '+date2+']');
        		return false;
        	}
        }

        //조회 조건 숨김 여부 이벤트
        this.div_list_btn_toggle00_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        //마스터 엑셀 다운로드
        this.btn_excel_onclick = function(obj,e)
        {
        	this.fn_exceldown(1);
        }
        //디테일 엑셀 다운로드
        this.div_list_btn_excel01_onclick = function(obj,e)
        {
        	this.fn_exceldown(2);
        }

        //엑셀다운로드
        this.fn_exceldown = function(val)
        {
        	if(val == 1){
        		var params = "store_edt="+this.gfn_nullToEmpty(this.div_search.edt_data00.value)// 상품코드 조회구분 input
        					+"&store_radio="+this.div_search.rdo_store_chk00.value				// 상품코드 조회구분 radio
        					+"&center_code="+this.div_search.cbo_center_code00.value			// 물류센터코드 선택값
        					+"&start_day="+this.div_search.cal_fsrg00.value						// 적용일자 시작
        					+"&end_day="+this.div_search.cal_fsrg01.value						// 적용일자 끝
        					+"&TRPL_C="+this.getTrplCode()	 									// 사업장코드
        					+"&gubun="+this.div_search.rdo_sep_value.value;
        		//this.div_list.web_downExcelM.set_url(application.gv_server_url+"rest/excel/downloadExcelMasterSearchNewGoods?"+params);
        		excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelMasterSearchNewGoods?"+params, this);
        	}else if(val == 2){
        		var rowposition = this.ds_main_req.rowposition;
        	var params = "";
        		if(this.div_search.rdo_sep_value.value == "1"){
        			params = "VAN_C="+this.ds_main_req.getColumn(rowposition,"VAN_C_RQ_NO")
        					+"&RQ_TRPL="+this.ds_main_req.getColumn(rowposition,"RQ_NA_WRS_C")
        					+"&gubun="+this.div_search.rdo_sep_value.value;			//구분자
        		}else{
        			params = "VAN_C="+this.ds_main_req.getColumn(rowposition,"NA_C_RQ_NO")
        					+"&gubun="+this.div_search.rdo_sep_value.value;			//구분자
        		}
        		//this.div_list.web_downExcelM.set_url(application.gv_server_url+"rest/excel/downloadExcelDetailSearchNewGoods?"+params);
        		excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelDetailSearchNewGoods?"+params, this);
        	}	
        }

        this.btn_clear00_onclick = function(obj,e)
        {
        	this.reload();
        }

        
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("onsize", this.div_list_onsize, this);
            this.btn_search00.addEventHandler("onclick", this.btn_search00_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.div_search.cbo_center_code00.addEventHandler("onitemchanged", this.div_search_cbo_center_code00_onitemchanged, this);
            this.div_search.rdo_sep_value.addEventHandler("onitemchanged", this.div_search_rdo_sep_value_onitemchanged, this);
            this.div_list.btn_toggle00.addEventHandler("onclick", this.div_list_btn_toggle00_onclick, this);
            this.div_list.btn_excel01.addEventHandler("onclick", this.div_list_btn_excel01_onclick, this);
            this.btn_clear00.addEventHandler("onclick", this.btn_clear00_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1560.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
