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
                this.set_name("VAN_DS_SC_0520");
                this.set_titletext("검수실적_매입처별");
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
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_master", this);
            obj._setContents("<ColumnInfo><Column id=\"CCLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"BCLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"GAM_AM\" type=\"STRING\" size=\"256\"/><Column id=\"BYNG_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"VCBT_AM\" type=\"STRING\" size=\"256\"/><Column id=\"VCBX_AM\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_GAM\" type=\"STRING\" size=\"256\"/><Column id=\"CHRG_TOT\" type=\"STRING\" size=\"256\"/><Column id=\"CBAM\" type=\"STRING\" size=\"256\"/><Column id=\"ACTL_BUYPL_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"MNGT_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_FEE\" type=\"STRING\" size=\"256\"/><Column id=\"BYNG_SSDY\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_AMN_FEE\" type=\"STRING\" size=\"256\"/><Column id=\"ETR_AMN_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"SLGT_AMN_FEE\" type=\"STRING\" size=\"256\"/><Column id=\"PHD_FEE\" type=\"STRING\" size=\"256\"/><Column id=\"PHD_FEE_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"TRP_SVC_CST\" type=\"STRING\" size=\"256\"/><Column id=\"TRP_SVCOS_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_FEE\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_FEE_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"GWA_AM\" type=\"STRING\" size=\"256\"/><Column id=\"GWA_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"LIQ_GAM\" type=\"STRING\" size=\"256\"/><Column id=\"LIQ_VAT\" type=\"STRING\" size=\"256\"/><Column id=\"EXTX_AM\" type=\"STRING\" size=\"256\"/><Column id=\"SMA_AM\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">가나다라마바아자</Col><Col id=\"Column5\">ABC123456789</Col><Col id=\"Column6\">가나다라마바아자</Col><Col id=\"Column7\">가나다라마바아자</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">가나다라마바아자</Col><Col id=\"Column6\">가나다라마바아자</Col><Col id=\"Column7\">가나다라마바아자</Col><Col id=\"Column5\">ABC123456789</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">가나다라마바아자</Col><Col id=\"Column7\">가나다라마바아자</Col><Col id=\"Column6\">가나다라마바아자</Col><Col id=\"Column5\">ABC123456789</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">가나다라마바아자</Col><Col id=\"Column6\">가나다라마바아자</Col><Col id=\"Column7\">가나다라마바아자</Col><Col id=\"Column5\">ABC123456789</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">가나다라마바아자</Col><Col id=\"Column6\">가나다라마바아자</Col><Col id=\"Column7\">가나다라마바아자</Col><Col id=\"Column5\">ABC123456789</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">가나다라마바아자</Col><Col id=\"Column6\">가나다라마바아자</Col><Col id=\"Column7\">가나다라마바아자</Col><Col id=\"Column5\">ABC123456789</Col></Row><Row><Col id=\"Column0\">7</Col><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">가나다라마바아자</Col><Col id=\"Column6\">가나다라마바아자</Col><Col id=\"Column7\">가나다라마바아자</Col><Col id=\"Column5\">ABC123456789</Col></Row><Row><Col id=\"Column0\">8</Col><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">가나다라마바아자</Col><Col id=\"Column6\">가나다라마바아자</Col><Col id=\"Column7\">가나다라마바아자</Col><Col id=\"Column5\">ABC123456789</Col></Row><Row><Col id=\"Column0\">9</Col><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">가나다라마바아자</Col><Col id=\"Column6\">가나다라마바아자</Col><Col id=\"Column7\">가나다라마바아자</Col><Col id=\"Column5\">ABC123456789</Col></Row><Row><Col id=\"Column0\">10</Col><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">가나다라마바아자</Col><Col id=\"Column6\">가나다라마바아자</Col><Col id=\"Column7\">가나다라마바아자</Col><Col id=\"Column5\">ABC123456789</Col></Row><Row><Col id=\"Column0\">11</Col><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">가나다라마바아자</Col><Col id=\"Column6\">가나다라마바아자</Col><Col id=\"Column7\">가나다라마바아자</Col><Col id=\"Column5\">ABC123456789</Col></Row><Row><Col id=\"Column0\">12</Col><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">ABC123456789</Col><Col id=\"Column3\">ABC123456789</Col><Col id=\"Column4\">가나다라마바아자</Col><Col id=\"Column6\">가나다라마바아자</Col><Col id=\"Column7\">가나다라마바아자</Col><Col id=\"Column5\">ABC123456789</Col></Row><Row><Col id=\"Column0\">13</Col><Col id=\"Column2\">ABC123456789</Col></Row></Rows>");
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
            obj = new Div("Div01", "absolute", "0", "0", "397", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "161", null, this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "118", null, this);
            obj.set_taborder("2");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("3");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear00", "absolute", null, "0", "53", "21", "161", null, this);
            obj.set_taborder("5");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "95", "15", null, this);
            obj.set_taborder("6");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("sta_00", "absolute", "15", "36", "79", "21", null, null, this.div_search);
            obj.set_taborder("21");
            obj.set_text("사업장");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_01", "absolute", "15", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("23");
            obj.set_text("일자구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_03", "absolute", "439", "10", "103", "21", null, null, this.div_search);
            obj.set_taborder("24");
            obj.set_text("거래구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_sign_list", "absolute", "542", "10", "151", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_sign_list_innerdataset = new Dataset("cbo_sign_list_innerdataset", this.div_search.cbo_sign_list);
            cbo_sign_list_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">- 전체 -</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">매출정상</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">반품정상</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">매출정상 + 반품정정 + 반품취소</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">반품정상 + 매출정정 + 매출취소</Col></Row></Rows>");
            obj.set_innerdataset(cbo_sign_list_innerdataset);
            obj.set_taborder("26");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj = new Calendar("cal_from", "absolute", "187", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("27");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("cal_to", "absolute", "309", "10", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("28");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static04", "absolute", "293", "10", "10", "21", null, null, this.div_search);
            obj.set_taborder("29");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data00", "absolute", "94", "62", "110", "21", null, null, this.div_search);
            obj.set_taborder("30");
            obj.set_inputtype("number");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data01", "absolute", "207", "62", "131", "21", null, null, this.div_search);
            obj.set_taborder("31");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup00", "absolute", "341", "62", "21", "21", null, null, this.div_search);
            obj.set_taborder("32");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "232", "31", "103", "5", null, null, this.div_search);
            obj.set_taborder("37");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "233", "83", "103", "10", null, null, this.div_search);
            obj.set_taborder("38");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "233", "0", "103", "10", null, null, this.div_search);
            obj.set_taborder("40");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title05", "absolute", "439", "36", "103", "21", null, null, this.div_search);
            obj.set_taborder("41");
            obj.set_text("계통계약유형");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_cser_ctr", "absolute", "542", "36", "151", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("42");
            obj.set_innerdataset("@ds_cser_ctr_tpc");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj = new Combo("cbo_date_chk", "absolute", "94", "10", "90", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_date_chk_innerdataset = new Dataset("cbo_date_chk_innerdataset", this.div_search.cbo_date_chk);
            cbo_date_chk_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">매출일</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">검수일</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">지급예정일</Col></Row></Rows>");
            obj.set_innerdataset(cbo_date_chk_innerdataset);
            obj.set_taborder("43");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_text("매출일");
            obj = new Radio("rdo_cser_gubun", "absolute", "94", "36", "223", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_cser_gubun_innerdataset = new Dataset("rdo_cser_gubun_innerdataset", this.div_search.rdo_cser_gubun);
            rdo_cser_gubun_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">실매출처(마트)</Col></Row></Rows>");
            obj.set_innerdataset(rdo_cser_gubun_innerdataset);
            obj.set_taborder("44");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_value("1");
            obj = new Static("Static00", "absolute", "409", "16", "30", "50", null, null, this.div_search);
            obj.set_taborder("45");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "123", null, null, "15", "0", this);
            obj.set_taborder("7");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_master", "absolute", "0", "42", null, null, "0", "44", this.div_list);
            obj.set_taborder("15");
            obj.set_binddataset("ds_master");
            obj.set_useselcolor("false");
            obj.style.set_font("9 Gulim");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"본/지사명\"/><Cell col=\"2\" text=\"사업장명\"/><Cell col=\"3\" text=\"공급금액\"/><Cell col=\"4\" text=\"부가세\"/><Cell col=\"5\" text=\"공병금액\"/><Cell col=\"6\" text=\"공상자금액\"/><Cell col=\"7\" text=\"총공급금액\"/><Cell col=\"8\" text=\"총공제금액\"/><Cell col=\"9\" text=\"순공급금액\"/><Cell col=\"10\" text=\"과세공급\"/><Cell col=\"11\" text=\"과세부가세\"/><Cell col=\"12\" text=\"주류공급\"/><Cell col=\"13\" text=\"주류부가세\"/><Cell col=\"14\" text=\"면세금액\"/><Cell col=\"15\" text=\"영세금액\"/><Cell col=\"16\" text=\"본지사코드\"/><Cell col=\"17\" text=\"사업장코드\"/><Cell col=\"18\" text=\"업체수수료\"/><Cell col=\"19\" text=\"매입장려금\"/><Cell col=\"20\" text=\"관리수수료(R2)\"/><Cell col=\"21\" text=\"관리부가세(R2)\"/><Cell col=\"22\" text=\"관리수수료(R1)\"/><Cell col=\"23\" text=\"물류수수료\"/><Cell col=\"24\" text=\"물류부가세\"/><Cell col=\"25\" text=\"운송용역비\"/><Cell col=\"26\" text=\"운송부가세\"/><Cell col=\"27\" text=\"기타수수료\"/><Cell col=\"28\" text=\"기타수수료부가세\"/></Band><Band id=\"body\"><Cell text=\"bind:NO\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:ACTL_BUYPL_NA_TRPL_C_NM\"/><Cell col=\"2\" style=\"align:EXPR(MNGT_NA_TRPL_C_NM == '합계' ? 'center' : MNGT_NA_TRPL_C_NM== '소계' ? 'center' : 'left');font:EXPR(MNGT_NA_TRPL_C_NM == '합계' ? 'bold' : ');\" text=\"bind:MNGT_NA_TRPL_C_NM\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right;\" text=\"bind:GAM_AM\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BYNG_VAT\"/><Cell col=\"5\" displaytype=\"number\" style=\"align:right;\" text=\"bind:VCBT_AM\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right;\" text=\"bind:VCBX_AM\"/><Cell col=\"7\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TOT_GAM\"/><Cell col=\"8\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CHRG_TOT\"/><Cell col=\"9\" displaytype=\"number\" style=\"align:right;\" text=\"bind:CBAM\"/><Cell col=\"10\" displaytype=\"number\" style=\"align:right;\" text=\"bind:GWA_AM\"/><Cell col=\"11\" displaytype=\"number\" style=\"align:right;\" text=\"bind:GWA_VAT\"/><Cell col=\"12\" displaytype=\"number\" style=\"align:right;\" text=\"bind:LIQ_GAM\"/><Cell col=\"13\" displaytype=\"number\" style=\"align:right;\" text=\"bind:LIQ_VAT\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:right;\" text=\"bind:EXTX_AM\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SMA_AM\"/><Cell col=\"16\" expr=\"expr:ACTL_BUYPL_NA_TRPL_C.substr(0,13)\"/><Cell col=\"17\" text=\"bind:MNGT_NA_TRPL_C\"/><Cell col=\"18\" displaytype=\"number\" style=\"align:right;\" text=\"bind:COMP_FEE\"/><Cell col=\"19\" displaytype=\"number\" style=\"align:right;\" text=\"bind:BYNG_SSDY\"/><Cell col=\"20\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ETR_AMN_FEE\"/><Cell col=\"21\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ETR_AMN_VAT\"/><Cell col=\"22\" displaytype=\"number\" style=\"align:right;\" text=\"bind:SLGT_AMN_FEE\"/><Cell col=\"23\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PHD_FEE\"/><Cell col=\"24\" displaytype=\"number\" style=\"align:right;\" text=\"bind:PHD_FEE_VAT\"/><Cell col=\"25\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TRP_SVC_CST\"/><Cell col=\"26\" displaytype=\"number\" style=\"align:right;\" text=\"bind:TRP_SVCOS_VAT\"/><Cell col=\"27\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ETC_FEE\"/><Cell col=\"28\" displaytype=\"number\" style=\"align:right;\" text=\"bind:ETC_FEE_VAT\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_toggle00", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new WebBrowser("web_downExcelM", "absolute", "78.3%", "10", null, "20", "16.88%", null, this.div_list);
            obj.set_taborder("18");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 95, this.div_search,
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
            		p.set_taborder("7");
            		p.set_text("Div02");
            		p.set_scrollbars("none");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_0520");
            		p.set_titletext("검수실적_매입처별");

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
        this.addIncludeScript("VAN_DS_SC_0520.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0520.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

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
        	
        	this.div_search.cbo_sign_list.set_index(0);
        	this.div_search.cbo_cser_ctr.set_index(0); // 계통계약유형 combobox 초기값
        	
        	/*
        	this.div_search.cal_from.set_value(this.gfn_today("yyyyMM")+"01");
        	this.div_search.cal_to.set_value(this.gfn_today("yyyyMMdd"));
        	*/
        	this.div_search.cal_from.set_value(this.gfn_minusDate(this.gfn_today("yyyyMMdd"),7));	
        	this.div_search.cal_to.set_value(this.gfn_today("yyyyMMdd"));
        	
        	this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	this.ds_master.addEventHandler('onload', this.renderer, this);
        	
        }

        //초기화버튼
        this.btn_clear00_onclick = function(obj,e)
        {
        	this.reload();
        }

        //페이징 처리
        this.fn_paging = function(vPageNum)
        {
        	this.ds_pageVO.clearData();  
        	this.ds_wrs.clearData();     //Grid에 Binding된 Dataset명	
        	
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

        //수요처 조회
        this.div_search_btn_popup00_onclick = function(params)
        {
        	var code = this.div_search.edt_data00.value;		// 사업장 코드 Edit 박스
        	var textname = this.div_search.edt_data01.value;	// 사업장 명 Edit 박스
        	
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

        this.onchangeE = function()
        {
        	if(this.div_search.rdo_cser_gubun.value == 1)
        	{
        		this.div_search.edt_data00.set_enable(false);
        		this.div_search.edt_data01.set_enable(false);
        		this.div_search.btn_popup00.set_enable(false);
        	}else{
        		this.div_search.edt_data00.set_enable(true);
        		this.div_search.edt_data01.set_enable(true);
        		this.div_search.btn_popup00.set_enable(true);
        	}
        }

        //팝업 (매입처별실정상세)
        this.div_list_grd_master_oncellclick = function(obj,e)
        {
        	var grid = obj;
        	var ds = grid.getBindDataset();
        	var str = ds.getColumn(e.row,'MNGT_NA_TRPL_C_NM');
        	if(str == '합계' || str == '소계') return;
        	
        	//trace("--->"+this.ds_master.getColumn(this.ds_master.rowposition,"ACTL_BUYPL_NA_TRPL_C").substr(0,13));
        	
        	var param = {
        				date_chk:this.div_search.cbo_date_chk.value,	//일자구분
        				date_chk_nm:this.div_search.cbo_date_chk.text,	//일자구분명
        				fr_date:this.div_search.cal_from.value,			//시작일
        				to_date:this.div_search.cal_to.value,			//종료일
        				sign_list:this.div_search.cbo_sign_list.value,	//거래구분
        				sign_list_nm:this.div_search.cbo_sign_list.text,//거래구분명
        				ctr_tpc:this.div_search.cbo_cser_ctr.value,		//계통계약유형
        				ctr_tpc_nm:this.div_search.cbo_cser_ctr.text,	//계통계약유형명
        				bz_gubun:this.div_search.rdo_cser_gubun.value,	//농협사업장 전체
        				trpl_c:this.ds_master.getColumn(this.ds_master.rowposition,"ACTL_BUYPL_NA_TRPL_C").substr(0,13),	//공급처코드
        				trpl_c_nm:this.ds_master.getColumn(this.ds_master.rowposition,"ACTL_BUYPL_NA_TRPL_C_NM"),	//공급처명
        				bzplc:this.ds_master.getColumn(this.ds_master.rowposition,"MNGT_NA_TRPL_C"), 	//사업장코드
        				bznm:this.ds_master.getColumn(this.ds_master.rowposition,"MNGT_NA_TRPL_C_NM")	//사업장명
        	};

        	var oArg = {paramMode:"U", dsArg:this.Dataset00, searchD:param};
        	var sOption = "autosize=true, titleText=false";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("oclick_pop","SCM.RECADV::VAN_DS_SC_0521.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	if(strVal != undefined){
        		var arrVal = strVal.split(",");
        		if(strId == "wrs_rvopl"){
        			this.div_search.edt_data00.set_value(arrVal[0]);
        			this.div_search.edt_data01.set_value(arrVal[1]);
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
        	
        		if(this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value) > 35){
        			//기간을 35일 이내로 선택해 주세요
        			this.gfn_getMessage("alert", "validation.message.selectDateIn35Day");
        			return false;
        		}
        	}
        	return true;
        }

        //조회
        this.btn_search_onclick = function(obj,e)
        {
        	this.ds_master.clearData();
        	
        	if(!this.validation()){return};
        	
        	var date_chk = this.div_search.cbo_date_chk.value;	//일자구분
        	var fr_date = this.div_search.cal_from.value;		//시작일
        	var to_date = this.div_search.cal_to.value;			//종료일
        	var sign_list = this.div_search.cbo_sign_list.value;//거래구분
        	var ctr_tpc = this.div_search.cbo_cser_ctr.value;	//계통계약유형
        	var cser_gubun = this.div_search.rdo_cser_gubun.value;	//사업장 구분코드
        	var bzplc = this.gfn_nullToEmpty(this.div_search.edt_data00.value); //사업장코드
        	
        	var params = "search_date_type="+date_chk
        				+" from_date="+fr_date
        				+" to_date="+to_date
        				+" trade_type="+sign_list
        				+" rots_ctr_dsc="+ctr_tpc
        				+" is_na_all="+cser_gubun
        				+" na_bzplc="+bzplc
        				+" TRPL_C="+this.getTrplCode();
        				//+" TRPL_C="+"8801038000015";
        	
        	var sSvcID        = "p_search";//통신아이디
        	var sURL          = "svc::rest/recadv/retrieveRecadvSlpMasterList_NA_TRPL_C";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_master=ds_master";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        this.fn_callback = function(svcID,nCD,sMSG){
        	if(nCD < 0){
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID == "p_search"){			
        			/*
        			for(var i=0; i < this.ds_master.rowcount; i++)
        			{
        				//trace("for문");
        				//trace(this.ds_master.getColumn(i,"MNGT_NA_TRPL_C_NM"));
        				
        				if(this.ds_master.getColumn(i,"MNGT_NA_TRPL_C_NM")=='소계')
        				{trace("소계");}
        			}
        			*/
        		}
        	}
        }

        //엑셀 다운로드
        this.btn_excel_onclick = function(obj,e)
        {
        	var date_chk = this.div_search.cbo_date_chk.value;	//일자구분
        	var fr_date = this.div_search.cal_from.value;		//시작일
        	var to_date = this.div_search.cal_to.value;			//종료일
        	var sign_list = this.div_search.cbo_sign_list.value;//거래구분
        	var ctr_tpc = this.div_search.cbo_cser_ctr.value;	//계통계약유형
        	var cser_c = this.div_search.rdo_cser_gubun.value;	//사업장 구분코드
        	var bzplc = this.gfn_nullToEmpty(this.div_search.edt_data00.value); //실매출처코드

        	var params = "&search_date_type="+date_chk
        				+"&from_date="+fr_date
        				+"&to_date="+to_date
        				+"&trade_type="+sign_list
        				+"&rots_ctr_dsc="+ctr_tpc
        				+"&is_na_all="+cser_c
        				+"&na_bzplc="+bzplc
        				+"&TRPL_C="+this.getTrplCode()
        				//+"&TRPL_C="+"8801038000015"
        				+"&fileName=검수실적_매입처별_"+this.getDate()+".xls";
        					
        	params = encodeURI(encodeURI(params));
        	excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelRecadvSlp_NA_TRPL_C_M?"+params, this);	
        }

        //출력
        this.btn_print_onclick = function(obj,e)
        {
        	var date_chk = this.div_search.cbo_date_chk.value;	//일자구분
        	var fr_date = this.div_search.cal_from.value;		//시작일
        	var to_date = this.div_search.cal_to.value;			//종료일
        	var sign_list = this.div_search.cbo_sign_list.value;//거래구분
        	var ctr_tpc = this.div_search.cbo_cser_ctr.value;	//계통계약유형
        	var cser_c = this.div_search.rdo_cser_gubun.value;	//사업장 구분코드
        	var bzplc = this.gfn_nullToEmpty(this.div_search.edt_data00.value); //실매출처코드
        	
        	var titleForm = this.getTrplCodePrint()+" ,일자구분:"+date_chk+" ,시작일:"+fr_date+" ,종료일:"+to_date
        					+" ,거래구분:"+sign_list+" ,계약유형:"+ctr_tpc+" ,사업장구분코드:"+cser_c
        					+" ,사업장코드:"+bzplc;
        	
        	var ozParam = {
        		sId: 'VAN_DS_SC_0520',
        		sUrl: '/rest/oz/downloadRecadvSlp_NA_TRPL_C_M',
        		paramType: 'param',
        		sParam: {
        			TRPL_C_TEXT:titleForm,
        			searchDateType:date_chk,
        			fromDate:fr_date,
        			toDate:to_date,
        			tradeType:sign_list,
        			rotsCtrDsc:ctr_tpc,
        			isNaAll:cser_c,
        			naBzplc:bzplc,
        			TRPL_C:this.getTrplCode()
        		}
        	};
        	this.ozViewer(ozParam);
        }

        this.div_list_btn_toggle00_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        this.renderer = function(ds,e){

        	var grid = this.div_list.grd_master;
        	//var ds = grid.getBindDataset();
        	var colCount = ds.colcount;
        	
        	var _index = 1;
        	for(var i=0 ; i < ds.rowcount ; i++){
        		if(i == 0){ 
        			_index = 1;
        			ds.addColumn("NO", "string");
        		}
        		
        		var bzplcNm = ds.getColumn(i, 'MNGT_NA_TRPL_C_NM');
        		if(bzplcNm != '합계' && bzplcNm != '소계'){
        			ds.setColumn(i, 'NO', _index);
        			_index++;
        		}
        	}
        	
        	var colCnt = grid.getCellCount('Body');
        	var expr1 = "background:EXPR(MNGT_NA_TRPL_C_NM == '합계' ? '#FAF4C0' : MNGT_NA_TRPL_C_NM == '소계' ? '#D4F4FA' : '')";
        	var expr2 = "background2:EXPR(MNGT_NA_TRPL_C_NM == '합계' ? '#FAF4C0' : MNGT_NA_TRPL_C_NM == '소계' ? '#D4F4FA' : '')";
        	var expr3 = "font:EXPR(MNGT_NA_TRPL_C_NM == '합계' ? 'bold' : '')";
        	grid.set_enableredraw(false);
        	for(var i=0 ; i < colCnt ; i++){
        		grid.setCellProperty("Body", i, "style", expr1);
        		grid.setCellProperty("Body", i, "style", expr2);
        		grid.setCellProperty("Body", i, "style", expr3);
        	}
        	grid.set_enableredraw(true);
        };

        this.div_search_rdo_cser_gubun_onitemchanged = function(obj,e)
        {
        	//전체
        	if(this.div_search.rdo_cser_gubun.value=='1'){
        		this.div_search.edt_data00.set_value('');
        		this.div_search.edt_data01.set_value('');		
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_print.addEventHandler("onclick", this.btn_print_onclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_clear00.addEventHandler("onclick", this.btn_clear00_onclick, this);
            this.div_search.edt_data00.addEventHandler("onkeydown", this.div_search_edt_data00_onkeydown, this);
            this.div_search.edt_data01.addEventHandler("onkeydown", this.div_search_edt_data01_onkeydown, this);
            this.div_search.btn_popup00.addEventHandler("onclick", this.div_search_btn_popup00_onclick, this);
            this.div_search.cbo_date_chk.addEventHandler("onitemchanged", this.Div00_Combo02_onitemchanged, this);
            this.div_search.rdo_cser_gubun.addEventHandler("onitemchanged", this.div_search_rdo_cser_gubun_onitemchanged, this);
            this.div_list.grd_master.addEventHandler("oncellclick", this.div_list_grd_master_oncellclick, this);
            this.div_list.btn_toggle00.addEventHandler("onclick", this.div_list_btn_toggle00_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0520.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
