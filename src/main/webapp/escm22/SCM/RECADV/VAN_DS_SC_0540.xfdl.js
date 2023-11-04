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
                this.set_name("VAN_DS_SC_0540");
                this.set_titletext("매입실적조회");
                this._setFormPosition(0,0,803,1007);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cser_ctr_tpc", this);
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_master", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_detail", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div01", "absolute", "0", "0", "397", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "118", null, this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("2");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "94", "15", null, this);
            obj.set_taborder("5");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "10", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("0");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "10", "36", "79", "21", null, null, this.div_search);
            obj.set_taborder("1");
            obj.set_text("사업장");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "10", "62", "79", "21", null, null, this.div_search);
            obj.set_taborder("2");
            obj.set_text("매입처");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "332", "10", "103", "21", null, null, this.div_search);
            obj.set_taborder("3");
            obj.set_text("계통계약구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "575", "10", "90", "21", null, null, this.div_search);
            obj.set_taborder("4");
            obj.set_text("전표번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "187", "10", "15", "21", null, null, this.div_search);
            obj.set_taborder("7");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_searchCode", "absolute", "323", "36", "116", "21", null, null, this.div_search);
            obj.set_taborder("10");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_searchSubCode", "absolute", "323", "62", "116", "21", null, null, this.div_search);
            obj.set_taborder("11");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_searchText", "absolute", "441", "36", "211", "21", null, null, this.div_search);
            obj.set_taborder("12");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_searchSubText", "absolute", "441", "62", "211", "21", null, null, this.div_search);
            obj.set_taborder("13");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup00", "absolute", "654", "36", "22", "21", null, null, this.div_search);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup01", "absolute", "654", "62", "22", "21", null, null, this.div_search);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_cser_tpc", "absolute", "435", "10", "110", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("19");
            obj.set_innerdataset("@ds_cser_ctr_tpc");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj = new Edit("edt_junpyo", "absolute", "665", "10", "110", "21", null, null, this.div_search);
            obj.set_taborder("20");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "55.22%", "82", null, "10", "31.68%", null, this.div_search);
            obj.set_taborder("21");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "51.15%", "57", null, "5", "35.75%", null, this.div_search);
            obj.set_taborder("22");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_from", "absolute", "81", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("23");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("cal_to", "absolute", "202", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("24");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Radio("rdo_cser_gubun", "absolute", "81", "36", "240", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_cser_gubun_innerdataset = new Dataset("rdo_cser_gubun_innerdataset", this.div_search.rdo_cser_gubun);
            rdo_cser_gubun_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">all</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">실매입처(마트)</Col></Row></Rows>");
            obj.set_innerdataset(rdo_cser_gubun_innerdataset);
            obj.set_taborder("25");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("all");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Radio("rdo_cser_gubun00", "absolute", "81", "62", "240", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_cser_gubun00_innerdataset = new Dataset("rdo_cser_gubun00_innerdataset", this.div_search.rdo_cser_gubun00);
            rdo_cser_gubun00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">all</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">매입처(공급업체)</Col></Row></Rows>");
            obj.set_innerdataset(rdo_cser_gubun00_innerdataset);
            obj.set_taborder("26");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("2");
            obj.set_direction("vertical");
            obj.set_index("1");
            obj = new Edit("edt_searchTeamCode", "absolute", "678", "36", "97", "21", null, null, this.div_search);
            obj.set_taborder("27");
            obj.set_visible("true");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_searchTeamCode00", "absolute", "678", "62", "97", "21", null, null, this.div_search);
            obj.set_taborder("28");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "122", null, null, "15", "0", this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_master", "absolute", "0", "42", null, "340", "0", null, this.div_list);
            obj.set_taborder("0");
            obj.set_binddataset("ds_master");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"190\"/><Column size=\"150\"/><Column size=\"190\"/><Column size=\"150\"/><Column size=\"190\"/><Column size=\"150\"/><Column size=\"190\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"170\"/><Column size=\"170\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"220\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"사업장코드\"/><Cell col=\"2\" text=\"팀코드\"/><Cell col=\"3\" text=\"전표일자\"/><Cell col=\"4\" text=\"전표번호\"/><Cell col=\"5\" text=\"창고코드\"/><Cell col=\"6\" text=\"거래구분코드\"/><Cell col=\"7\" text=\"검수일자\"/><Cell col=\"8\" text=\"원장 반영일자\"/><Cell col=\"9\" text=\"정산사업장코드\"/><Cell col=\"10\" text=\"정산사업장 경제통합팀코드\"/><Cell col=\"11\" text=\"매입처거래처코드\"/><Cell col=\"12\" text=\"매입처팀코드\"/><Cell col=\"13\" text=\"정산거래처코드\"/><Cell col=\"14\" text=\"정산팀코드\"/><Cell col=\"15\" text=\"실제매입처 거래처코드\"/><Cell col=\"16\" text=\"실제매입처 팀코드\"/><Cell col=\"17\" text=\"직송매입처 거래처코드\"/><Cell col=\"18\" text=\"직송매입처 팀코드\"/><Cell col=\"19\" text=\"출하자 거래처코드\"/><Cell col=\"20\" text=\"출하자 팀코드\"/><Cell col=\"21\" text=\"출하매출처 거래처코드\"/><Cell col=\"22\" text=\"출하매출처 팀코드\"/><Cell col=\"23\" text=\"흑자적자구분코드\"/><Cell col=\"24\" text=\"매입금액\"/><Cell col=\"25\" text=\"매입부가세\"/><Cell col=\"26\" text=\"판매예정금액\"/><Cell col=\"27\" text=\"과세공급금액\"/><Cell col=\"28\" text=\"부가세공급금액\"/><Cell col=\"29\" text=\"면세공급금액\"/><Cell col=\"30\" text=\"영세공급금액\"/><Cell col=\"31\" text=\"주류과세 공급금액\"/><Cell col=\"32\" text=\"주류부가세 공급금액\"/><Cell col=\"33\" text=\"공병금액\"/><Cell col=\"34\" text=\"공상자금액\"/><Cell col=\"35\" text=\"매입장려금\"/><Cell col=\"36\" text=\"결제유형구분코드\"/><Cell col=\"37\" text=\"외상매입금\"/><Cell col=\"38\" text=\"현금지급금액\"/><Cell col=\"39\" text=\"선급매입금액\"/><Cell col=\"40\" text=\"상환예정일자\"/><Cell col=\"41\" text=\"유통거래 대분류코드\"/><Cell col=\"42\" text=\"매입전표 구분코드\"/><Cell col=\"43\" text=\"매입참조 구분코드\"/><Cell col=\"44\" text=\"배송예정서 참조여부\"/><Cell col=\"45\" text=\"배송예정서전표번호\"/><Cell col=\"46\" text=\"거래근거번호\"/><Cell col=\"47\" text=\"원전표일자\"/><Cell col=\"48\" text=\"원전표 경제통합전표번호\"/><Cell col=\"49\" text=\"상대매출처 전표일자\"/><Cell col=\"50\" text=\"상대매출처 경제통합전표번호\"/><Cell col=\"51\" text=\"반품가격 처리구분코드\"/><Cell col=\"52\" text=\"직송여부\"/><Cell col=\"53\" text=\"사업방식 구분코드\"/><Cell col=\"54\" text=\"중앙회조합 구분코드\"/><Cell col=\"55\" text=\"내외부구분코드\"/><Cell col=\"56\" text=\"매입입력 단말기구분코드\"/><Cell col=\"57\" text=\"계통계약 구분코드\"/><Cell col=\"58\" text=\"거래발생구분코드\"/><Cell col=\"59\" text=\"하역비 발생여부\"/><Cell col=\"60\" text=\"사입품여부\"/><Cell col=\"61\" text=\"생체지육 구분코드\"/><Cell col=\"62\" text=\"지육구성 구분코드\"/><Cell col=\"63\" text=\"지육두수\"/><Cell col=\"64\" text=\"생체중량\"/><Cell col=\"65\" text=\"지육중량\"/><Cell col=\"66\" text=\"지육해체 총중량\"/><Cell col=\"67\" text=\"실제중량\"/><Cell col=\"68\" text=\"지육금액\"/><Cell col=\"69\" text=\"정정취소구분코드\"/><Cell col=\"70\" text=\"비고내용\"/><Cell col=\"71\" text=\"거래처리 일련번호\"/><Cell col=\"72\" text=\"소매유통 전환시스템구분코드\"/><Cell col=\"73\" text=\"삭제여부\"/><Cell col=\"74\" text=\"최초등록자 개인번호\"/><Cell col=\"75\" text=\"최초등록일시\"/><Cell col=\"76\" text=\"최종변경자 개인번호\"/><Cell col=\"77\" text=\"최종변경일시\"/><Cell col=\"78\" text=\"삭제자개인번호\"/><Cell col=\"79\" text=\"삭제일시\"/><Cell col=\"80\" text=\"검수구분금액\"/><Cell col=\"81\" text=\"자료전송여부\"/><Cell col=\"82\" text=\"상대거래구분코드\"/><Cell col=\"83\" text=\"수요자 거래관계관리번호\"/><Cell col=\"84\" text=\"주관 거래관계관리번호\"/><Cell col=\"85\" text=\"배송지 거래처코드\"/><Cell col=\"86\" text=\"배송지 경제통합팀코드\"/><Cell col=\"87\" text=\"0.이관요청 1.이관확정 2.이관취소\"/><Cell col=\"88\" text=\"배송지 거래처코드\"/><Cell col=\"89\" text=\"배송지 경제통합팀코드\"/><Cell col=\"90\" text=\"공병금액(상세)\"/><Cell col=\"91\" text=\"수수료합계\"/><Cell col=\"92\" text=\"배송예정금액\"/><Cell col=\"93\" text=\"매출금액\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:NA_BZPLC\"/><Cell col=\"2\" text=\"bind:NA_TEAM_C\"/><Cell col=\"3\" text=\"bind:SLP_DT\"/><Cell col=\"4\" text=\"bind:NA_SLPNO\"/><Cell col=\"5\" text=\"bind:WHSE_C\"/><Cell col=\"6\" expr=\"bind:NA_TR_DSC\"/><Cell col=\"7\" text=\"bind:CNR_DT\"/><Cell col=\"8\" text=\"bind:LED_RFL_DT\"/><Cell col=\"9\" text=\"bind:ADJ_NA_BZPLC\"/><Cell col=\"10\" text=\"bind:ADJ_BZPL_NA_TEAM_C\"/><Cell col=\"11\" text=\"bind:BUYPL_NA_TRPL_C\"/><Cell col=\"12\" text=\"bind:BUYPL_NA_TEAM_C\"/><Cell col=\"13\" text=\"bind:ADJ_NA_TRPL_C\"/><Cell col=\"14\" text=\"bind:ADJ_NA_TEAM_C\"/><Cell col=\"15\" text=\"bind:ACTL_BUYPL_NA_TRPL_C\"/><Cell col=\"16\" text=\"bind:ACTL_BUYPL_NA_TEAM_C\"/><Cell col=\"17\" text=\"bind:DDLY_BUYPL_NA_TRPL_C\"/><Cell col=\"18\" text=\"bind:DDLY_BUYPL_NA_TEAM_C\"/><Cell col=\"19\" text=\"bind:SOGMN_NA_TRPL_C\"/><Cell col=\"20\" text=\"bind:SOGMN_NA_TEAM_C\"/><Cell col=\"21\" text=\"bind:SOG_SLPL_NA_TRPL_C\"/><Cell col=\"22\" text=\"bind:SOG_SLPL_NA_TEAM_C\"/><Cell col=\"23\" text=\"bind:NA_BLB_DFC_DSC\"/><Cell col=\"24\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BYAM\" mask=\"###,##0\"/><Cell col=\"25\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BYNG_VAT\" mask=\"###,##0\"/><Cell col=\"26\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SEL_PLA_AM\" mask=\"###,##0\"/><Cell col=\"27\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TXT_SPY_AM\" mask=\"###,##0\"/><Cell col=\"28\" displaytype=\"number\" style=\"align:right;\" text=\"bind:VAT_SPY_AM\" mask=\"###,##0\"/><Cell col=\"29\" displaytype=\"number\" style=\"align:right;\" text=\"bind:EXTX_SPY_AM\" mask=\"###,##0\"/><Cell col=\"30\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SMA_SPY_AM\" mask=\"###,##0\"/><Cell col=\"31\" displaytype=\"number\" style=\"align:right;\" text=\"bind:LIQ_TXT_SPY_AM\" mask=\"###,##0\"/><Cell col=\"32\" displaytype=\"number\" style=\"align:right;\" text=\"bind:LIQ_VAT_SPY_AM\" mask=\"###,##0\"/><Cell col=\"33\" displaytype=\"number\" style=\"align:right;\" text=\"bind:VCBT_AM\" mask=\"###,##0\"/><Cell col=\"34\" displaytype=\"number\" style=\"align:right;\" text=\"bind:VCBX_AM\" mask=\"###,##0\"/><Cell col=\"35\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BYNG_SSDY\" mask=\"###,##0\"/><Cell col=\"36\" expr=\"expr:NA_STL_TP_DSC+' '+NA_STL_TP_DSC_NM\"/><Cell col=\"37\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CBAM\" mask=\"###,##0\"/><Cell col=\"38\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CSH_PY_AM\" mask=\"###,##0\"/><Cell col=\"39\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PPY_BYAM\" mask=\"###,##0\"/><Cell col=\"40\" text=\"bind:RPY_PLA_DT\"/><Cell col=\"41\" text=\"bind:DSTR_TR_LCLC\"/><Cell col=\"42\" text=\"bind:BYNG_SLP_DSC\"/><Cell col=\"43\" text=\"bind:BYNG_REF_DSC\"/><Cell col=\"44\" text=\"bind:DVY_PLASH_REF_YN\"/><Cell col=\"45\" text=\"bind:NA_DVY_PLASH_SLPNO\"/><Cell col=\"46\" text=\"bind:TR_BASS_NO\"/><Cell col=\"47\" text=\"bind:OSLIP_DT\"/><Cell col=\"48\" text=\"bind:OSLIP_NA_SLPNO\"/><Cell col=\"49\" text=\"bind:PATN_SLPL_SLP_DT\"/><Cell col=\"50\" text=\"bind:PATN_SLPL_NA_SLPNO\"/><Cell col=\"51\" text=\"bind:RGD_PR_PRC_DSC\"/><Cell col=\"52\" text=\"bind:DDLY_YN\"/><Cell col=\"53\" expr=\"expr:BZ_METH_DSC+' '+BZ_METH_DSC_NM\"/><Cell col=\"54\" text=\"bind:NAAC_DSC\"/><Cell col=\"55\" text=\"bind:INO_DSC\"/><Cell col=\"56\" text=\"bind:BYNG_INP_TRM_DSC\"/><Cell col=\"57\" text=\"bind:ROTS_CTR_DSC\"/><Cell col=\"58\" text=\"bind:NA_TR_OCU_DSC\"/><Cell col=\"59\" text=\"bind:STVCS_OCU_YN\"/><Cell col=\"60\" text=\"bind:PVRPD_YN\"/><Cell col=\"61\" text=\"bind:LBDY_BFC_DSC\"/><Cell col=\"62\" text=\"bind:BFC_CSTT_DSC\"/><Cell col=\"63\" text=\"bind:BFC_HDCN\"/><Cell col=\"64\" displaytype=\"number\" style=\"align:right;\" text=\"bind:LBDY_WT\" mask=\"###,##0\"/><Cell col=\"65\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BFC_WT\" mask=\"###,##0\"/><Cell col=\"66\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BFC_DMT_TOT_WT\" mask=\"###,##0\"/><Cell col=\"67\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ACTL_WT\" mask=\"###,##0\"/><Cell col=\"68\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BFC_AM\" mask=\"###,##0\"/><Cell col=\"69\" text=\"bind:NA_CRC_CAN_DSC\"/><Cell col=\"70\" text=\"bind:RMK_CNTN\"/><Cell col=\"71\" text=\"bind:TRPRC_SQNO\"/><Cell col=\"72\" text=\"bind:RTL_DSTR_CV_SYS_DSC\"/><Cell col=\"73\" text=\"bind:DEL_YN\"/><Cell col=\"74\" text=\"bind:FSRGMN_ENO\"/><Cell col=\"75\" text=\"bind:FSRG_DTM\"/><Cell col=\"76\" text=\"bind:LS_CMENO\"/><Cell col=\"77\" text=\"bind:LSCHG_DTM\"/><Cell col=\"78\" text=\"bind:DLMN_ENO\"/><Cell col=\"79\" text=\"bind:DEL_DTM\"/><Cell col=\"80\" text=\"bind:CNR_DS_AM\"/><Cell col=\"81\" text=\"bind:DATA_TMS_YN\"/><Cell col=\"82\" text=\"bind:PATN_NA_TR_DSC\"/><Cell col=\"83\" text=\"bind:CSER_TR_REL_AMNNO\"/><Cell col=\"84\" text=\"bind:MNGT_TR_REL_AMNNO\"/><Cell col=\"85\" text=\"bind:DVYAA_NA_TRPL_C\"/><Cell col=\"86\" text=\"bind:DVYAA_NA_TEAM_C\"/><Cell col=\"87\" text=\"bind:TRF_REF_DSC\"/><Cell col=\"88\" text=\"bind:DVYAA_NA_TRPL_C_NM\"/><Cell col=\"89\" text=\"bind:DVYAA_NA_TEAM_C_NM\"/><Cell col=\"90\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BYAM_BOT\" mask=\"###,##0\"/><Cell col=\"91\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SPY_AM_CST\" mask=\"###,##0\"/><Cell col=\"92\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AMOUNT\" mask=\"###,##0\"/><Cell col=\"93\" displaytype=\"number\" style=\"align:right;\" text=\"bind:AMOUNT2\" mask=\"###,##0\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_toggle00", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new WebBrowser("web_downExcelM", "absolute", "78.3%", "10", null, "20", "16.88%", null, this.div_list);
            obj.set_taborder("2");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_master00", "absolute", "0", "394", null, "468", "0", null, this.div_list);
            obj.set_taborder("3");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"전표 일련번호\"/><Cell col=\"2\" text=\"상품코드\"/><Cell col=\"3\" text=\"생산년도\"/><Cell col=\"4\" text=\"하위 팀코드\"/><Cell col=\"5\" text=\"출하자코드\"/><Cell col=\"6\" text=\"매입수량\"/><Cell col=\"7\" text=\"주문수량\"/><Cell col=\"8\" text=\"마스터 매입단가\"/><Cell col=\"9\" text=\"매입단가\"/><Cell col=\"10\" text=\"매입금액\"/><Cell col=\"11\" text=\"매입부가세\"/><Cell col=\"12\" text=\"판매예정단가\"/><Cell col=\"13\" text=\"판매예정금액\"/><Cell col=\"14\" text=\"공병금액\"/><Cell col=\"15\" text=\"외상매입금\"/><Cell col=\"16\" text=\"현금지급금액\"/><Cell col=\"17\" text=\"선급매입금액\"/><Cell col=\"18\" text=\"상환예정일자\"/><Cell col=\"19\" text=\"수익수수료\"/><Cell col=\"20\" text=\"비용수수료\"/><Cell col=\"21\" text=\"기타수수료\"/><Cell col=\"22\" text=\"재고관리 구분코드\"/><Cell col=\"23\" text=\"재고관리 상품코드\"/><Cell col=\"24\" text=\"상품단위코드\"/><Cell col=\"25\" text=\"내품수량\"/><Cell col=\"26\" text=\"반품사유코드\"/><Cell col=\"27\" text=\"대원장코드\"/><Cell col=\"28\" text=\"바이어개인번호\"/><Cell col=\"29\" text=\"주류여부\"/><Cell col=\"30\" text=\"과세구분코드\"/><Cell col=\"31\" text=\"세액공제 구분코드\"/><Cell col=\"32\" text=\"의제구분코드\"/><Cell col=\"33\" text=\"재고자산 구분코드\"/><Cell col=\"34\" text=\"공급유형 구분코드\"/><Cell col=\"35\" text=\"상품유형코드\"/><Cell col=\"36\" text=\"하역구분코드\"/><Cell col=\"37\" text=\"하역단위당단가\"/><Cell col=\"38\" text=\"하역비\"/><Cell col=\"39\" text=\"매입장려금\"/><Cell col=\"40\" text=\"매입장려금률\"/><Cell col=\"41\" text=\"GAP인증번호\"/><Cell col=\"42\" text=\"농산물 이력번호\"/><Cell col=\"43\" text=\"개체식별번호\"/><Cell col=\"44\" text=\"지육박스수량\"/><Cell col=\"45\" text=\"지육중량\"/><Cell col=\"46\" text=\"지육단가\"/><Cell col=\"47\" text=\"지육금액\"/><Cell col=\"48\" text=\"부산물금액\"/><Cell col=\"49\" text=\"비고내용\"/><Cell col=\"50\" text=\"삭제여부\"/><Cell col=\"51\" text=\"삭제자 개인번호\"/><Cell col=\"52\" text=\"삭제일시\"/><Cell col=\"53\" text=\"상품명\"/></Band><Band id=\"body\"><Cell text=\"bind:RN\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/><Cell col=\"27\"/><Cell col=\"28\"/><Cell col=\"29\"/><Cell col=\"30\"/><Cell col=\"31\"/><Cell col=\"32\"/><Cell col=\"33\"/><Cell col=\"34\"/><Cell col=\"35\"/><Cell col=\"36\"/><Cell col=\"37\"/><Cell col=\"38\"/><Cell col=\"39\"/><Cell col=\"40\"/><Cell col=\"41\"/><Cell col=\"42\"/><Cell col=\"43\"/><Cell col=\"44\"/><Cell col=\"45\"/><Cell col=\"46\"/><Cell col=\"47\"/><Cell col=\"48\"/><Cell col=\"49\"/><Cell col=\"50\"/><Cell col=\"51\"/><Cell col=\"52\"/><Cell col=\"53\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 94, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("5");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 1007, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_0540");
            		p.set_titletext("매입실적조회");

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
        this.addIncludeScript("VAN_DS_SC_0540.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0540.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        /* form load */
        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj,e);
        }

        //공통코드 데이터셋 onload후 호출할 함수
        this.fn_afterFormOnload = function()
        {
        	var param = [
        		{code:"CSER_CTR_TPC", dsName:"ds_cser_ctr_tpc", selecttype:"A"}
        	];
        	this.gfn_setCommonCode(param);
        	
        	//권한사업장 체크박스 Disable
        	this.authChkDisable();
        	
        	this.div_search.cal_from.set_value(this.gfn_minusDate(this.gfn_today("yyyyMMdd"),7));	
        	this.div_search.cal_to.set_value(this.gfn_today("yyyyMMdd"));
        	
        	this.div_search.cbo_cser_tpc.set_index(0);
        	this.div_search.edt_searchSubCode.set_value(application.gv_glnCode);
        }

        /*엑셀*/
        this.btn_print_onclick = function(obj,e)
        {
        	var from_date = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        	var to_date = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일	
        	var rots_ctr_dsc =this.gfn_nullToEmpty(this.div_search.cbo_cser_tpc.value); //계통계약구분
        	
        	var na_bzplc = "";
        	if(this.div_search.rdo_cser_gubun.value == 2)	
        	{
        		na_bzplc =  this.gfn_nullToEmpty(this.div_search.edt_searchCode.value);//실매입처(마트)
        	}else{
        		na_bzplc = "all";
        	}
        	
        	var na_slpno = this.gfn_nullToEmpty(this.div_search.edt_junpyo.value); //전표번호
        		
        	var buypl_na_trpl_c = "";
        	if(this.div_search.rdo_cser_gubun00.value == 2)	
        	{
        		buypl_na_trpl_c =  this.gfn_nullToEmpty(this.div_search.edt_searchSubCode.value);//매입처(공급업체)	
        	}else{
        		buypl_na_trpl_c = "all";
        	}
        	
        	var na_team_c = this.gfn_nullToEmpty(this.div_search.edt_searchTeamCode.value); //실매입처(마트) 팀코드
        	var buypl_na_team_c = this.gfn_nullToEmpty(this.div_search.edt_searchTeamCode00.value); //매입처(공급업체)팀코드

        	var params = "from_date="+from_date
        				 +"&to_date="+to_date
        				 +"&rots_ctr_dsc="+rots_ctr_dsc
        				 +"&na_bzplc="+na_bzplc
        				 +"&na_slpno="+na_slpno
        				 +"&buypl_na_trpl_c="+buypl_na_trpl_c
        				 +"&na_team_c="+na_team_c
        				 +"&buypl_na_team_c="+buypl_na_team_c
        				 +"&TRPL_C="+this.getTrplCode()
        				 +"&fileName=매입실적조회_"+this.getDate()+".xls";
        	
        	trace(params);
        	
        	params = encodeURI(encodeURI(params));	
        	excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelRetrieveRecadvResult?"+params, this);
        }

        this.div_list_btn_toggle00_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        this.validation = function()
        {
        	if(this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value) < 0){
        		this.gfn_getMessage('alert','validation.message.fromDate.toDate.reConfirm');
        		return false;
        	}
        	if(this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value) > 35){
        		this.gfn_getMessage('alert','validation.message.selectDateIn31Day');
        		return false;
        	}
        	return true;
        }

        this.btn_search_onclick = function(obj,e)
        {
        	this.ds_master.clearData();
        	
        	if(!this.validation()){
        		return;
        	}
        	
        	//권한사업장 코드
        	var trplC = this.getTrplCode();
        	
        	var from_date = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        	var to_date = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일	
        	var rots_ctr_dsc =this.gfn_nullToEmpty(this.div_search.cbo_cser_tpc.value); //계통계약구분
        	
        	var na_bzplc = "";
        	if(this.div_search.rdo_cser_gubun.value == 2)	
        	{
        		na_bzplc =  this.gfn_nullToEmpty(this.div_search.edt_searchCode.value);//실매입처(마트)
        	}else{
        		na_bzplc = "all";
        	}
        	
        	var na_slpno = this.gfn_nullToEmpty(this.div_search.edt_junpyo.value); //전표번호
        	
        	var buypl_na_trpl_c = "";
        	if(this.div_search.rdo_cser_gubun00.value == 2)	
        	{
        		buypl_na_trpl_c =  this.gfn_nullToEmpty(this.div_search.edt_searchSubCode.value);//매입처(공급업체)	
        	}else{
        		buypl_na_trpl_c = "all";
        	}
        	
        	var na_team_c = this.gfn_nullToEmpty(this.div_search.edt_searchTeamCode.value); //실매입처(마트) 팀코드
        	var buypl_na_team_c = this.gfn_nullToEmpty(this.div_search.edt_searchTeamCode00.value); //매입처(공급업체)팀코드
        	
        	var params = "from_date="+from_date
        				 +" to_date="+to_date
        				 +" rots_ctr_dsc="+rots_ctr_dsc
        				 +" na_bzplc="+na_bzplc
        				 +" na_slpno="+na_slpno
        				 +" buypl_na_trpl_c="+buypl_na_trpl_c
        				 +" na_team_c="+na_team_c
        				 +" buypl_na_team_c="+buypl_na_team_c
        				 +" TRPL_C="+this.getTrplCode();
        				 
        	trace(params);
        	
        	var sSvcID        = "retrieveRecadvResult";//통신아이디
        	var sURL          = "svc::rest/recadv/retrieveRecadvResult";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_master=ds_master";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
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
        		//if(){
        		
        		//}
        	}
        }

        this.div_search_edt_searchCode_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.div_search_btn_popup00_onclick(true);
        	}
        }

        this.div_search_edt_searchText_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.div_search_btn_popup00_onclick(true);
        	}
        }

        this.div_search_edt_searchSubCode_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.div_search_btn_popup01_onclick(true);
        	}
        }

        this.div_search_edt_searchSubText_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.div_search_btn_popup01_onclick(true);
        	}
        }

        this.fn_popupAfter = function(strID,strVal)
        {
        	if(strVal != undefined){
        		var arrVal = strVal.split(",");
        		if(strID == "m_propl"){
        			this.div_search.edt_searchCode.set_value(arrVal[0]);
        			this.div_search.edt_searchText.set_value(arrVal[1]);
        		}
        		if(strID == "d_propl"){
        			this.div_search.edt_searchSubCode.set_value(arrVal[0]);
        			this.div_search.edt_searchSubText.set_value(arrVal[1]);
        		}
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_excel.addEventHandler("onclick", this.btn_print_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.div_search.edt_searchCode.addEventHandler("onkeydown", this.div_search_edt_searchCode_onkeydown, this);
            this.div_search.edt_searchSubCode.addEventHandler("onkeydown", this.div_search_edt_searchSubCode_onkeydown, this);
            this.div_search.edt_searchText.addEventHandler("onkeydown", this.div_search_edt_searchText_onkeydown, this);
            this.div_search.edt_searchSubText.addEventHandler("onkeydown", this.div_search_edt_searchSubText_onkeydown, this);
            this.div_search.btn_popup00.addEventHandler("onclick", this.div_search_btn_popup00_onclick, this);
            this.div_search.btn_popup01.addEventHandler("onclick", this.div_search_btn_popup01_onclick, this);
            this.div_search.Static12.addEventHandler("onclick", this.div_search_Static12_onclick, this);
            this.div_search.Static06.addEventHandler("onclick", this.div_search_Static12_onclick, this);
            this.div_search.rdo_cser_gubun.addEventHandler("onitemchanged", this.div_search_rdo_cser_gubun_onitemchanged, this);
            this.div_search.rdo_cser_gubun00.addEventHandler("onitemchanged", this.div_search_rdo_cser_gubun_onitemchanged, this);
            this.div_search.edt_searchTeamCode.addEventHandler("onkeydown", this.div_search_edt_searchCode_onkeydown, this);
            this.div_search.edt_searchTeamCode00.addEventHandler("onkeydown", this.div_search_edt_searchCode_onkeydown, this);
            this.div_list.btn_toggle00.addEventHandler("onclick", this.div_list_btn_toggle00_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0540.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
