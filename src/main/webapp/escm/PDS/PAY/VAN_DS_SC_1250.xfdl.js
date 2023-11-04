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
                this.set_name("VAN_DS_SC_1250");
                this.set_titletext("기타당좌자산 회수내역");
                this._setFormPosition(0,0,803,1030);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
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

            obj = new Dataset("ds_date", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"string\" size=\"13\"/><Column id=\"name\" type=\"string\" size=\"13\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"name\">회수일기준</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"name\">회수예정일기준</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_can_type", this);
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

            obj = new Dataset("ds_NABizPlace", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"SHRT_BZPLNM\" type=\"string\" size=\"32\"/><Column id=\"BZPL_TPC\" type=\"string\" size=\"32\"/><Column id=\"BZPL_DTI_TPC\" type=\"string\" size=\"32\"/><Column id=\"BZPL_TPNM\" type=\"string\" size=\"32\"/><Column id=\"BZPL_DTI_TPNM\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_etcCaAsetM", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"NA_TEAM_C\" type=\"string\" size=\"32\"/><Column id=\"SLP_DT\" type=\"string\" size=\"32\"/><Column id=\"NA_SLPNO\" type=\"string\" size=\"32\"/><Column id=\"NA_TR_DSC\" type=\"string\" size=\"32\"/><Column id=\"NA_CRC_CAN_DSC\" type=\"string\" size=\"32\"/><Column id=\"NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"SHRT_CLNTNM\" type=\"string\" size=\"32\"/><Column id=\"ETC_CA_ASET_RTU_QT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"RTU_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"RTU_FEE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"RTU_FEE_VAT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"OSLIP_DT\" type=\"string\" size=\"32\"/><Column id=\"OSLIP_NA_SLPNO\" type=\"string\" size=\"32\"/><Column id=\"WDR_PLA_DT\" type=\"date\" size=\"6\"/><Column id=\"RMK_CNTN\" type=\"string\" size=\"32\"/><Column id=\"VHC_TYPE\" type=\"string\" size=\"32\"/><Column id=\"VHC_NO\" type=\"string\" size=\"32\"/><Column id=\"UPYAM_OCU_YN\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_etcCaAsetD", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_WRS_C\" type=\"string\" size=\"32\"/><Column id=\"WRSNM\" type=\"string\" size=\"32\"/><Column id=\"VCBT_RTU_QT\" type=\"float\" size=\"8\"/><Column id=\"VCBT_UPR\" type=\"float\" size=\"8\"/><Column id=\"RTU_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"RTU_FEE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"RTU_FEE_VAT\" type=\"bigdecimal\" size=\"8\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CURRENT_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"ETC_CA_ASET_RTU_QT\" type=\"string\" size=\"32\"/><Column id=\"RTU_AM\" type=\"string\" size=\"32\"/><Column id=\"RTU_FEE\" type=\"string\" size=\"32\"/><Column id=\"RTU_FEE_VAT\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "118", null, this);
            obj.set_taborder("38");
            obj.set_text("Div00");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "788", "0", "15", "490", null, null, this);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "732", "21", "56", "8", null, null, this);
            obj.set_taborder("14");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("23");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "95", "15", null, this);
            obj.set_taborder("32");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "15", "62", "120", "21", null, null, this.div_search);
            obj.set_taborder("77");
            obj.set_text("거래구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "36", "91", "21", null, null, this.div_search);
            obj.set_taborder("64");
            obj.set_text("일자구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "10", "91", "21", null, null, this.div_search);
            obj.set_taborder("65");
            obj.set_text("사업장");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "411", "0", null, "95", "536", null, this.div_search);
            obj.set_taborder("80");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_trade_type", "absolute", "106", "62", "250", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_trade_type_innerdataset = new Dataset("rdo_trade_type_innerdataset", this.div_search.rdo_trade_type);
            rdo_trade_type_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">반환</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">회수</Col></Row></Rows>");
            obj.set_innerdataset(rdo_trade_type_innerdataset);
            obj.set_taborder("83");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("0");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.set_index("0");
            obj = new Static("Static09", "absolute", "484", "36", "100", "21", null, null, this.div_search);
            obj.set_taborder("84");
            obj.set_text("전표번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "106", "83", null, "5", "790", null, this.div_search);
            obj.set_taborder("85");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_serach_type", "absolute", "599", "62", "149", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_serach_type_innerdataset = new Dataset("cbo_serach_type_innerdataset", this.div_search.cbo_serach_type);
            cbo_serach_type_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">거래처코드</Col></Row></Rows>");
            obj.set_innerdataset(cbo_serach_type_innerdataset);
            obj.set_taborder("86");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("3");
            obj.set_text("거래처코드");
            obj.set_enable("false");
            obj.set_index("0");
            obj = new Static("Static11", "absolute", "484", "62", "91", "21", null, null, this.div_search);
            obj.set_taborder("87");
            obj.set_text("조회구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new MaskEdit("edt_slpno01", "absolute", "599", "36", "70", "21", null, null, this.div_search);
            obj.set_taborder("88");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new MaskEdit("edt_slpno02", "absolute", "678", "36", "70", "21", null, null, this.div_search);
            obj.set_taborder("89");
            obj.set_type("string");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static120", "absolute", "669", "36", "9", "21", null, null, this.div_search);
            obj.set_taborder("90");
            obj.set_text("-");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "106", "109", null, "10", "790", null, this.div_search);
            obj.set_taborder("91");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_date", "absolute", "106", "36", "135", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("92");
            obj.set_innerdataset("ds_date");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_index("-1");
            obj = new Calendar("cal_from", "absolute", "244", "36", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("93");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static131", "absolute", "344", "36", "10", "21", null, null, this.div_search);
            obj.set_taborder("94");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_to", "absolute", "354", "36", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("95");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static02", "absolute", "484", "10", "120", "21", null, null, this.div_search);
            obj.set_taborder("96");
            obj.set_text("정정취소구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_can_type", "absolute", "599", "10", "149", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("97");
            obj.set_innerdataset("ds_can_type");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj = new Combo("cbo_nacode", "absolute", "106", "10", "348", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("98");
            obj.set_innerdataset("ds_NABizPlace");
            obj.set_codecolumn("NA_BZPLC");
            obj.set_datacolumn("SHRT_BZPLNM");
            obj.set_displayrowcount("20");
            obj.set_index("-1");

            obj = new Static("Static13", "absolute", "199", "30", null, "10", "494", null, this);
            obj.set_taborder("33");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "199", "61", null, "5", "494", null, this);
            obj.set_taborder("34");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "1", "30", null, "95", "977", null, this);
            obj.set_taborder("36");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "36", "408", null, this);
            obj.set_taborder("37");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "123", null, null, "15", "50", this);
            obj.set_taborder("0");
            obj.set_text("Div02");
            obj.set_scrollbars("autoboth");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_master", "absolute", "0", "42", null, "305", "0", null, this.div_list);
            obj.set_taborder("24");
            obj.set_binddataset("ds_etcCaAsetM");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"28\"/><Row size=\"28\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"전표일자\"/><Cell col=\"2\" text=\"전표번호\"/><Cell col=\"3\" text=\"거래구분코드\"/><Cell col=\"4\" text=\"정정취소구분코드\"/><Cell col=\"5\" text=\"거래처코드\"/><Cell col=\"6\" text=\"단축사업장명\"/><Cell col=\"7\" text=\"기타당좌자산&#13;&#10; 반환수량\"/><Cell col=\"8\" text=\"반환금액\"/><Cell col=\"9\" text=\"반환수수료\"/><Cell col=\"10\" text=\"반환수수료&#13;&#10; 부가세\"/><Cell col=\"11\" text=\"원전표일자\"/><Cell col=\"12\" text=\"원전표번호\"/><Cell col=\"13\" text=\"회수예정일\"/><Cell col=\"14\" text=\"비고\"/><Cell col=\"15\" text=\"차량구분\"/><Cell col=\"16\" text=\"차량코드\"/></Band><Band id=\"body\"><Cell text=\"bind:RN\"/><Cell col=\"1\" text=\"bind:SLP_DT\"/><Cell col=\"2\" text=\"bind:NA_SLPNO\"/><Cell col=\"3\" text=\"bind:NA_TR_DSC\"/><Cell col=\"4\" text=\"bind:NA_CRC_CAN_DSC\"/><Cell col=\"5\" text=\"bind:NA_TRPL_C\"/><Cell col=\"6\" style=\"align:left;\" text=\"bind:SHRT_CLNTNM\"/><Cell col=\"7\" style=\"align:right;\" text=\"bind:ETC_CA_ASET_RTU_QT\"/><Cell col=\"8\" style=\"align:right;\" text=\"bind:RTU_AM\"/><Cell col=\"9\" style=\"align:right;\" text=\"bind:RTU_FEE\"/><Cell col=\"10\" style=\"align:right;\" text=\"bind:RTU_FEE_VAT\"/><Cell col=\"11\" text=\"bind:OSLIP_DT\"/><Cell col=\"12\" style=\"align:left;\" text=\"bind:OSLIP_NA_SLPNO\"/><Cell col=\"13\" text=\"bind:WDR_PLA_DT\"/><Cell col=\"14\" text=\"bind:RMK_CNTN\"/><Cell col=\"15\" text=\"bind:VHC_TYPE\"/><Cell col=\"16\" text=\"bind:VHC_NO\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'ETC_CA_ASET_RTU_QT')\" mask=\"###,###\"/><Cell col=\"8\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'RTU_AM')\" mask=\"###,###\"/><Cell col=\"9\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'RTU_FEE')\" mask=\"###,###\"/><Cell col=\"10\" displaytype=\"number\" expr=\"expr:comp.parent.parent.ds_sum.getColumn(0,'RTU_FEE_VAT')\" mask=\"###,###\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_detail", "absolute", "0", "390", null, "468", "0", null, this.div_list);
            obj.set_taborder("26");
            obj.set_binddataset("ds_etcCaAsetD");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"300\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/><Row size=\"28\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"상품코드\"/><Cell col=\"2\" text=\"상품명\"/><Cell col=\"3\" text=\"반환수량\"/><Cell col=\"4\" text=\"수수료단가\"/><Cell col=\"5\" text=\"반환금액\"/><Cell col=\"6\" text=\"반환수수료\"/><Cell col=\"7\" text=\"반환수수료부가세\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:NA_WRS_C\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:WRSNM\"/><Cell col=\"3\" style=\"align:right;\" text=\"bind:VCBT_RTU_QT\"/><Cell col=\"4\" style=\"align:right;\" text=\"bind:VCBT_UPR\"/><Cell col=\"5\" style=\"align:right;\" text=\"bind:RTU_AM\"/><Cell col=\"6\" style=\"align:right;\" text=\"bind:RTU_FEE\"/><Cell col=\"7\" style=\"align:right;\" text=\"bind:RTU_FEE_VAT\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\" displaytype=\"number\" expr=\"expr:dataset.getSum('VCBT_RTU_QT')\" mask=\"###,###\"/><Cell col=\"4\"/><Cell col=\"5\" displaytype=\"number\" expr=\"expr:dataset.getSum('RTU_AM')\" mask=\"###,###\"/><Cell col=\"6\" displaytype=\"number\" expr=\"expr:dataset.getSum('RTU_FEE')\" mask=\"###,###\"/><Cell col=\"7\" displaytype=\"number\" expr=\"expr:dataset.getSum('RTU_FEE_VAT')\" mask=\"###,###\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_gradD_excel", "absolute", null, "364", "41", "21", "0", null, this.div_list);
            obj.set_taborder("31");
            obj.set_text("엑셀");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "936", "-1", null, "15", "2", null, this.div_list);
            obj.set_taborder("32");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_gradM_excel", "absolute", null, "16", "41", "21", "0", null, this.div_list);
            obj.set_taborder("33");
            obj.set_text("엑셀");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "936", "35", null, "5", "2", null, this.div_list);
            obj.set_taborder("34");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "675", "1", null, "15", "-7", null, this.div_list);
            obj.set_taborder("36");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "668", "385", null, "5", "0", null, this.div_list);
            obj.set_taborder("37");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_divResize", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new WebBrowser("web_downExcelM", "absolute", "600", "19", "44", "12", null, null, this.div_list);
            obj.set_taborder("38");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new WebBrowser("web_downExcelD", "absolute", "591", "360", "57", "21", null, null, this.div_list);
            obj.set_taborder("39");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_page", "absolute", "28.55%", "346", "338", "44", null, null, this.div_list);
            obj.set_taborder("40");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "0", null, null, "40", "15", "5", this);
            obj.set_taborder("39");
            obj.set_text("기타당좌자산회수내역 화면 <b v='true'>기능문의</b>는 <u v='true'>하나로eSCM고객센터(02-1522-1211)</u>로, <b v='true'>금액문의</b>는 <u v='true'>담당 바이어</u>에게로 부탁드립니다.");
            obj.set_wordwrap("char");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 95, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("32");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 978, 800, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div02");
            		p.set_scrollbars("autoboth");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 1030, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("기타당좌자산 회수내역");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::AuthorityWorkplace.xfdl");
            this._addPreloadList("fdl", "common::location.xfdl");
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1250.xfdl", "lib::comLib.xjs");
        this.addIncludeScript("VAN_DS_SC_1250.xfdl", "lib::comEsum.xjs");
        this.registerScript("VAN_DS_SC_1250.xfdl", function() {
        //include "lib::comLib.xjs";
        //include "lib::comEsum.xjs";

        /* form load */
        this.form_onload = function(obj,e)
        {	
        	this.gfn_setInitForm(obj,e);
        		
        	var param = [  
         		{code:"NA_CRC_CAN_DSC",   dsName:"ds_can_type",   selecttype:"A"}
            ];

        	this.gfn_setCommonCode(param);
        	
        	this.fn_getNABizPlace(application.gv_glnCode,"default");	
        }

        //권한사업장 콤보박스 변경시 농협사업장 조회
        this.fn_afterCall = function(sVal)
        {
        	//this.fn_getNABizPlace(sVal);
        }

        //공통코드 데이터셋 onload후 호출할 함수
        this.fn_commonAfterOnload= function()
        {
        	trace("fn_commonAfterOnload");
        	
        	this.div_search.cbo_can_type.set_index(0);
        	this.div_search.cbo_date.set_index(0);	

        }

        /* 페이지 로딩후 실행부분 */
        this.fn_afterFormOnload = function()
        {	
        	//그리드클릭 이벤트 등록
        	this.div_list.grd_master.addEventHandler("oncellclick", this.grd_afterFnc, this);
        	//그리드 nodata
        	this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	this.div_list.grd_detail.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	
        	//권한사업장 체크 안보이게
        	//this.authChkDisable();
        	
        	this.div_search.cal_from.set_value(this.gfn_minusDate(this.gfn_today("yyyyMMdd"),7));	
        	this.div_search.cal_to.set_value(this.gfn_today("yyyyMMdd"));
        	
        	//권한사업장 콤보박스 변경시 농협사업장 조회
        	this.div_auth.setFunctionName("fn_afterCall");
        	
        }

        //권한사업장 콤보박스 변경시 농협사업장 조회
        this.fn_afterCall = function(sVal)
        {
        	//this.fn_getNABizPlace(sVal,"added");
        }

        /*농협사업장 조회*/
        this.fn_getNABizPlace = function(v_nacode,search_type){
        	
        	var nacode = v_nacode;	
        	
        	var param = "search_type="+search_type+
        				" splr_na_trpl_c="+nacode;
        	
        	trace("##### fn_getNABizPlace PARAM ################"+param);
        		
        	var sSvcID        = "getNABizPlace";//통신아이디
        	var sURL          = "svc::rest/common/getNABizPlace";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_NABizPlace=data";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);

        }

        /* Validation Check */
        this.fn_validationCheck = function(){

        	if(this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value) < 0){
        	
        		//조회 시작일과 종료일을 다시 확인해 주세요
        		this.gfn_getMessage("alert", "validation.message.fromDate.toDate.reConfirm");
        		return false;
        	}else{
        		if(this.gfn_getDiffDay(this.div_search.cal_from.value,this.div_search.cal_to.value) > 31){

        		//기간을 31일 이내로 선택해 주세요
        		this.gfn_getMessage("alert", "validation.message.selectDateIn31Day");
        		return false;
        		}
        	}
        	
        	/*
        	if(this.gfn_isNull(this.div_search.cbo_nacode.value)){
        		//농협사업장을 선택 하세요.
        		this.gfn_getMessage("alert", "validation.message.select.nacode");
        		return false;
        	}
        	*/
        	return true;
        }

        /* search */
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_paging(1);// 처음조회시 1페이지를 조회한다.			
        }

        this.fn_search = function(){
        	this.ds_etcCaAsetM.clearData();
        	this.ds_etcCaAsetD.clearData();
        	
        	/* 자동 파라미터 넘기는 예제
        	var json = this.getParamJson(this.components, true);
        	json.all
        	
        	if(json.all == true){
        		json.all = 'Y'
        	}else{
        		json.all = 'N'
        	}
        	
        	var p = this.getParamJsonToString(json);
        	*/
        	
        	if(this.fn_validationCheck()){
        	
        	//권한사업장 코드
        	var trplC = this.getTrplCode();
        	
        	var search_date_type = this.gfn_nullToEmpty(this.div_search.cbo_date.value); //일자구분
        	var from_date = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        	var to_date = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일
        	var can_type =this.gfn_nullToEmpty(this.div_search.cbo_can_type.value); //정정취소구분
        	var trade_type = this.gfn_nullToEmpty(this.div_search.rdo_trade_type.value); //거래구분
        	//var upyam_ocu_yn = this.gfn_nullToEmpty(this.div_search.cbo_upyam_ocu_yn.value); //미수금계정여부	
        	var na_bzplc = this.gfn_nullToEmpty(this.div_search.cbo_nacode.value); //농협사업장
        	var serach_type = this.gfn_nullToEmpty(this.div_search.cbo_serach_type.value); //조회구분	
        	var edt_slpno = this.gfn_nullToEmpty(this.div_search.edt_slpno01.value+this.div_search.edt_slpno02.value); //전표번호
        	
        	upyam_ocu_yn = "";
        	
        	var param = " search_date_type="+search_date_type+
        				" from_date="+from_date+
        				" to_date="+to_date+
        				" can_type="+can_type+
        				" trade_type="+trade_type+
        				" upyam_ocu_yn="+upyam_ocu_yn+
        				" na_bzplc="+na_bzplc+
        				" serach_type="+serach_type+
        				" edt_slpno="+edt_slpno+
        				" TRPL_C=" + trplC;
        				
        	trace("##MASTER##PARAM##->"+param);
        	
        	
        	var sSvcID        = "retrieveEtcCaAsetMasterList";//통신아이디
        	var sURL          = "svc::rest/payment/retrieveEtcCaAsetMasterList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "ds_pageVO=ds_pageVO";//보내는데이터셋
        	var sOutDatasets  = "ds_etcCaAsetM=ds_paymentEtcCaAsetM ds_pageVO=ds_pageVO ds_sum=DS_SUM";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	
        	}
        }

        /* Call Back */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if(ErrorCode < 0)
        	{
        		this.gfn_getMessage("alert", ErrorMsg);
        		return;
        	}else{
        		if(svcID == "retrieveEtcCaAsetMasterList"){

        			if(this.ds_etcCaAsetM.rowcount > 0){
        					
        				this.ds_etcCaAsetM.set_rowposition(1);
        				this.ds_etcCaAsetM.set_rowposition(0);
        				
        				// 페이지 셋팅
        				var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        				var sPagesize = this.ds_pageVO.getColumn(0, "PAGE_SIZE");				

        				this.div_list.div_page.fn_pageSet(sTotal, sPagesize,"grd_master,div_page",lsNowPage);
        			}else{	
        				this.div_list.div_page.fn_pageSet(0, 0,"grd_master,div_page",lsNowPage);//페이징 설정
        			}
        		}else if(svcID == "retrieveAffSsdyDetailList") {
        			if(this.ds_paymentAffSsdyD.rowcount == 0){				
        				//this.gfn_getMessage("alert", "result.message.search.no.exist.data");								
        			}
        		}else if(svcID == "getNABizPlace") {
        			
        			if(this.ds_NABizPlace.rowcount != 0){
        			
        			//구매본부코드 제거
        			if (this.ds_NABizPlace.getColumn(i,0) == '8808983000015'){					
        				this.ds_NABizPlace.deleteRow(i);					
        			}
        	
        			for (var i=0; i < this.ds_NABizPlace.rowcount ;i++)			
        			{					
        				this.ds_NABizPlace.setColumn(i,"SHRT_BZPLNM","["+this.ds_NABizPlace.getColumn(i,0)+"] "+this.ds_NABizPlace.getColumn(i,1));
        			}
        				
        			if (this.ds_NABizPlace.insertRow(0) != -1){
        				this.ds_NABizPlace.setColumn(0,"NA_BZPLC","");
        				this.ds_NABizPlace.setColumn(0,"SHRT_BZPLNM","- 전체 -");
        				};
        			this.div_search.cbo_nacode.set_index(0);
        			}
        		}
        	}
        }

        this.div_search_cbo_nacode_onitemchanged = function(obj,e)
        {
        	//this.div_search.edt_nacode00.set_value(this.div_search.cbo_nacode.value);
        	//this.div_search.edt_nacode01.set_value(this.div_search.cbo_nacode.text);
        }

        this.grd_afterFnc = function(obj,e)
        {
        /*
        	if(e.reason == 51)
        	{		
        		this.ds_etcCaAsetM.set_enableevent(false);
        		this.ds_etcCaAsetM.set_rowposition(-1);
        		this.ds_etcCaAsetM.set_enableevent(true);
        		return;
        	}
        */
        	var na_bzplc = this.gfn_nullToEmpty(this.ds_etcCaAsetM.getColumn(this.ds_etcCaAsetM.rowposition,"NA_BZPLC"));	//경제통합사업장코드
        	var na_team_c = this.gfn_nullToEmpty(this.ds_etcCaAsetM.getColumn(this.ds_etcCaAsetM.rowposition,"NA_TEAM_C"));	//경제통합팀코드
        	var slp_dt = this.gfn_nullToEmpty(this.ds_etcCaAsetM.getColumn(this.ds_etcCaAsetM.rowposition,"SLP_DT"));	//전표일자
            var na_slpno = this.gfn_nullToEmpty(this.ds_etcCaAsetM.getColumn(this.ds_etcCaAsetM.rowposition,"NA_SLPNO"));  //경제통합 전표번호    
        				
        	param = "na_bzplc="+na_bzplc+
        			" na_team_c="+na_team_c+
        			" slp_dt="+slp_dt+
        			" na_slpno="+na_slpno
        			;
        	
        	trace("##DETAIL##PARAM##->"+param);
        	
        	var sSvcID        = "retrieveEtcCaAsetDetailList";//통신아이디
        	var sURL          = "svc::rest/payment/retrieveEtcCaAsetDetailList";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_etcCaAsetD=ds_paymentEtcCaAsetD";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callBack";//콜백
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc , "S");
        }

        this.div_list_btn_divResize_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        /* 마스터 그리드 엑셀 다운로드*/
        this.div_list_btn_gradM_excel_onclick = function(obj,e)
        {
        	this.fn_excel();
        }

        this.fn_excel = function(){
        	
        	
        	if(!this.fn_validationCheck()) return;
        	
        	//권한사업장 코드
        	var trplC = this.getTrplCode();
        	
        	var search_date_type = this.gfn_nullToEmpty(this.div_search.cbo_date.value); //일자구분
        	var from_date = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        	var to_date = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일
        	var can_type =this.gfn_nullToEmpty(this.div_search.cbo_can_type.value); //정정취소구분
        	var trade_type = this.gfn_nullToEmpty(this.div_search.rdo_trade_type.value); //거래구분
        	//var upyam_ocu_yn = this.gfn_nullToEmpty(this.div_search.cbo_upyam_ocu_yn.value); //미수금계정여부	
        	var na_bzplc = this.gfn_nullToEmpty(this.div_search.cbo_nacode.value); //농협사업장
        	var serach_type = this.gfn_nullToEmpty(this.div_search.cbo_serach_type.value); //조회구분	
        	var edt_slpno = this.gfn_nullToEmpty(this.div_search.edt_slpno01.value+this.div_search.edt_slpno02.value); //전표번호
        	
        	upyam_ocu_yn = "";
        	
        	//엑셀명
        	var title = this.parent.sNm;
        	title = title.replace(/ /gi, '');
        	var fileName = title + "_기준정보_" + this.getDate() + ".xls";	
        		
        	var param = "search_date_type="+search_date_type+
        				"&from_date="+from_date+
        				"&to_date="+to_date+
        				"&can_type="+can_type+
        				"&trade_type="+trade_type+
        				"&upyam_ocu_yn="+upyam_ocu_yn+
        				"&na_bzplc="+na_bzplc+
        				"&serach_type="+serach_type+
        				"&edt_slpno="+edt_slpno+
        				"&TRPL_C=" + trplC+
        				"&fileName="+fileName;			
        			
        	trace("##MASTER##PARAM##->"+param);
        	
        	param = encodeURI(encodeURI(param));

        	//this.div_list.web_downExcelM.set_url(application.gv_server_url+"rest/excel/downloadExcelEtcCaAsetMaster?"+param);
        	excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelEtcCaAsetMaster?"+param, this);
        }

        /* 맨 위 엑셀 버튼*/
        this.btn_excel_onclick = function(obj,e)
        {
        	this.fn_excel();
        }

        /* 디테일 그리드 엑셀 다운로드 */

        this.div_list_btn_gradD_excel_onclick = function(obj,e)
        {
        	//권한사업장 코드
        	var trplC = this.getTrplCode();
        	
        	var search_date_type = this.gfn_nullToEmpty(this.div_search.cbo_date.value); //일자구분
        	var from_date = this.gfn_nullToEmpty(this.div_search.cal_from.value); //조회시작일
        	var to_date = this.gfn_nullToEmpty(this.div_search.cal_to.value); //조회종료일
        	var can_type =this.gfn_nullToEmpty(this.div_search.cbo_can_type.value); //정정취소구분
        	var trade_type = this.gfn_nullToEmpty(this.div_search.rdo_trade_type.value); //거래구분
        	//var upyam_ocu_yn = this.gfn_nullToEmpty(this.div_search.cbo_upyam_ocu_yn.value); //미수금계정여부	
        	var na_bzplc = this.gfn_nullToEmpty(this.div_search.cbo_nacode.value); //농협사업장
        	var serach_type = this.gfn_nullToEmpty(this.div_search.cbo_serach_type.value); //조회구분	
        	var edt_slpno = this.gfn_nullToEmpty(this.div_search.edt_slpno01.value+this.div_search.edt_slpno02.value); //전표번호
        	
        	upyam_ocu_yn = "";
        	
        	//엑셀명
        	var title = this.parent.sNm;
        	title = title.replace(/ /gi, '');
        	var fileName = title + "_상세정보_" + this.getDate() + ".xls";
        		
        	var param = "search_date_type="+search_date_type+
        				"&from_date="+from_date+
        				"&to_date="+to_date+
        				"&can_type="+can_type+
        				"&trade_type="+trade_type+
        				"&upyam_ocu_yn="+upyam_ocu_yn+
        				"&na_bzplc="+na_bzplc+
        				"&serach_type="+serach_type+
        				"&edt_slpno="+edt_slpno+
        				"&TRPL_C=" + trplC+
        				"&fileName="+fileName;
        	
        	var na_bzplcD = this.gfn_nullToEmpty(this.ds_etcCaAsetM.getColumn(this.ds_etcCaAsetM.rowposition,"NA_BZPLC"));	//경제통합사업장코드
        	var na_team_c = this.gfn_nullToEmpty(this.ds_etcCaAsetM.getColumn(this.ds_etcCaAsetM.rowposition,"NA_TEAM_C"));	//경제통합팀코드
        	var slp_dt = this.gfn_nullToEmpty(this.ds_etcCaAsetM.getColumn(this.ds_etcCaAsetM.rowposition,"SLP_DT"));	//전표일자
            var na_slpno = this.gfn_nullToEmpty(this.ds_etcCaAsetM.getColumn(this.ds_etcCaAsetM.rowposition,"NA_SLPNO"));  //경제통합 전표번호    
        				
        	param2 = "&na_bzplcD="+na_bzplcD+
        			"&na_team_c="+na_team_c+
        			"&slp_dt="+slp_dt+
        			"&na_slpno="+na_slpno
        			;
        			
        	trace("##DETAIL##PARAM##->"+param+param2);
        	
        	param = encodeURI(encodeURI(param));
        	param2 = encodeURI(encodeURI(param2));

        	//this.div_list.web_downExcelD.set_url(application.gv_server_url+"rest/excel/downloadExcelEtcCaAsetDetail?"+param+param2);
        	excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelEtcCaAsetDetail?"+param+param2, this);
        	
        	
        }

        
        /* 최상단 엑셀(상세) 버튼*/
        this.btn_excelDetail_onclick = function(obj,e)
        {
        	var param = '';
        	
        	this.div_list.web_downExcelD.set_url(application.gv_server_url+"rest/excel/downloadExcelEtcCaAsetD?"+param);
        }

        /*-----------------------------------------------------------------------------------------*/
        // 페이징처리
        /*-----------------------------------------------------------------------------------------*/
        this.fn_paging = function(vPageNum)
        { 	  	 
        	this.ds_pageVO.clearData();  
        	this.ds_etcCaAsetM.clearData();     //Grid에 Binding된 Dataset명	
        	
        	this.ds_pageVO.addRow(); 
        	
        	var vPageSize   = 5; 	//Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
        	var vTotalCount = 1; 	//전체건수. 화면조회후 리턴받아 사용
         	this.ds_pageVO.setColumn(0,"CURRENT_PAGE",vPageNum); //현재 페이지
         	this.ds_pageVO.setColumn(0,"PAGE_SIZE",vPageSize);
         	this.ds_pageVO.setColumn(0,"TOTAL_ROW_COUNT",vTotalCount);
        	 
        	var argumentObj = "";
        	
        	lsNowPage = vPageNum;//현재페이지 설정 
        	
        	this.fn_search();
         
        }

        

        this.div_list_onsize = function(obj,e)
        {
        	/* 페이지 숫자 위치 설정*/
        	
        	trace("div_list_onsize");
        	var nLeft = (e.cx/2)-(this.div_list.div_page.width/2);
        	this.div_list.div_page.set_left(nLeft);
        	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit", this.form_init, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.div_search.cbo_date.addEventHandler("onitemchanged", this.Div01_Combo02_onitemchanged, this);
            this.div_search.cbo_nacode.addEventHandler("onitemchanged", this.div_search_cbo_nacode_onitemchanged, this);
            this.div_list.addEventHandler("onsize", this.div_list_onsize, this);
            this.div_list.btn_gradD_excel.addEventHandler("onclick", this.div_list_btn_gradD_excel_onclick, this);
            this.div_list.btn_gradM_excel.addEventHandler("onclick", this.div_list_btn_gradM_excel_onclick, this);
            this.div_list.btn_divResize.addEventHandler("onclick", this.div_list_btn_divResize_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1250.xfdl");
        this.loadPreloadList();
       
    };
}
)();
