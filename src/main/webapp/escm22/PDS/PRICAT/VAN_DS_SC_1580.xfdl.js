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
                this.set_name("VAN_DS_SC_1580");
                this.set_titletext("사업장매입가격조회");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_txt_dsc", this);
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

            obj = new Dataset("ds_ctr_dsc", this);
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

            obj = new Dataset("ds_lvchof", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RN\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"CTR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"SPY_TPC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TXT_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"PRGR_C\" type=\"STRING\" size=\"256\"/><Column id=\"PGNM\" type=\"STRING\" size=\"256\"/><Column id=\"BYNG_UPR\" type=\"STRING\" size=\"256\"/><Column id=\"SEL_UPR\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_FEERT\" type=\"STRING\" size=\"256\"/><Column id=\"AMN_FEERT\" type=\"STRING\" size=\"256\"/><Column id=\"TROT_FEERT\" type=\"STRING\" size=\"256\"/><Column id=\"PHD_FEERT\" type=\"STRING\" size=\"256\"/><Column id=\"DDLY_PHD_FEERT\" type=\"STRING\" size=\"256\"/><Column id=\"PY_FDTCN\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_FBID_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHRG_BUYER_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CMENO\" type=\"STRING\" size=\"256\"/><Column id=\"RVO_PSB_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_PSB_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BOXPE_AQZ\" type=\"STRING\" size=\"256\"/><Column id=\"DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_pay", this);
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

            obj = new Dataset("ds_combo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"data\">[8801099000016] 대상에프앤에프(주)</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"data\">[8801099000023] 대상에프앤에프(주)동부지점</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">[8801099000030] 대상에프앤에프(주)서부지점</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">[8801099000047] 대상에프앤에프(주)남부지점(안양)</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"data\">[8801099000054] 대상에프앤에프(주)남부지점(강원)</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"data\">[8801099000061] 대상에프앤에프(주)대전지점</Col></Row><Row><Col id=\"code\">6</Col><Col id=\"data\">[8801099000078] 대상에프앤에프(주)광주지점</Col></Row><Row><Col id=\"code\">7</Col><Col id=\"data\">[8801099000085] 대상에프앤에프(주)대구지점</Col></Row><Row><Col id=\"code\">8</Col><Col id=\"data\">[8801099000092] 대상에프앤에프(주)부산지점</Col></Row><Row><Col id=\"code\">9</Col><Col id=\"data\">[8801099000108] 대상에프앤에프(주)신선지점</Col></Row><Row><Col id=\"code\">10</Col><Col id=\"data\">[8801099000115] 대상에프앤에프(주)지호상사</Col></Row><Row><Col id=\"code\">11</Col><Col id=\"data\">[8801099000122] 대상에프앤에프(주)청원유통</Col></Row><Row><Col id=\"code\">12</Col><Col id=\"data\">[8801099000139] 대상에프앤에프(주)승진상사</Col></Row><Row><Col id=\"code\">13</Col><Col id=\"data\">[8801099000146] 대상에프앤에프(주)여주대상</Col></Row><Row><Col id=\"code\">14</Col><Col id=\"data\">[8801099000153] 대상에프앤에프(주)청정원상사(위탁)</Col></Row><Row><Col id=\"code\">15</Col><Col id=\"data\">[8801099000160] 대상에프앤에프(주)대성상사</Col></Row><Row><Col id=\"code\">16</Col><Col id=\"data\">[8801099000177] 대상에프앤에프(주)대상위탁상사</Col></Row><Row><Col id=\"code\">17</Col><Col id=\"data\">[8801099000184] 대상에프앤에프(주)청정원상사(홍성)</Col></Row><Row><Col id=\"code\">18</Col><Col id=\"data\">[8801099000191] 대상에프앤에프(주)홍성위탁</Col></Row><Row><Col id=\"code\">19</Col><Col id=\"data\">[8801099000207] 대상에프앤에프(주)해송유통</Col></Row><Row><Col id=\"code\">20</Col><Col id=\"data\">[8801099000214] 대상에프앤에프(주)청정원태안위탁</Col></Row><Row><Col id=\"code\">21</Col><Col id=\"data\">[8801099000221] 대상에프앤에프(주)송암상사</Col></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"string\" size=\"32\"/><Column id=\"SHRT_BZPLNM\" type=\"string\" size=\"32\"/><Column id=\"BZPL_TPC\" type=\"string\" size=\"32\"/><Column id=\"BZPL_DTI_TPC\" type=\"string\" size=\"32\"/><Column id=\"BZPL_TPNM\" type=\"string\" size=\"32\"/><Column id=\"BZPL_DTI_TPNM\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"NA_BZPLC\">00</Col><Col id=\"SHRT_BZPLNM\">전체선택</Col></Row></Rows>");
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

            obj = new Dataset("ds_uptrpl", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"UP_NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"TRPL_ABR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_menu", "absolute", "0%", "0", null, "21", "50.56%", null, this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "145", "15", null, this);
            obj.set_taborder("6");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("sta_title00", "absolute", "15", "10", "67", "21", null, null, this.div_search);
            obj.set_taborder("69");
            obj.set_text("상품");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title02", "absolute", "15", "36", "67", "21", null, null, this.div_search);
            obj.set_taborder("70");
            obj.set_text("사업장");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title04", "absolute", "366", "36", "103", "21", null, null, this.div_search);
            obj.set_taborder("71");
            obj.set_text("공급업체본사");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_select_chk00", "absolute", "636", "10", "150", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_select_chk00_innerdataset = new Dataset("rdo_select_chk00_innerdataset", this.div_search.rdo_select_chk00);
            rdo_select_chk00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">상품코드</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">상품명</Col></Row></Rows>");
            obj.set_innerdataset(rdo_select_chk00_innerdataset);
            obj.set_taborder("72");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Static("sta_title05", "absolute", "366", "62", "103", "21", null, null, this.div_search);
            obj.set_taborder("73");
            obj.set_text("과세구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_txt_dsc00", "absolute", "469", "62", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("74");
            obj.set_innerdataset("@ds_txt_dsc");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_enable("true");
            obj = new Static("sta_title03", "absolute", "15", "62", "67", "21", null, null, this.div_search);
            obj.set_taborder("75");
            obj.set_text("가격군");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title01", "absolute", "350", "10", "10", "21", null, null, this.div_search);
            obj.set_taborder("76");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data02", "absolute", "366", "10", "110", "21", null, null, this.div_search);
            obj.set_taborder("77");
            obj.set_cssclass("WF_Essential");
            obj.set_maxlength("25");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data03", "absolute", "479", "10", "124", "21", null, null, this.div_search);
            obj.set_taborder("79");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data10", "absolute", "83", "15", "109", "21", null, null, this.div_search);
            obj.set_taborder("16");
            obj.set_inputtype("number");
            obj.set_maxlength("13");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data11", "absolute", "195", "15", "125", "21", null, null, this.div_search);
            obj.set_taborder("17");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup10", "absolute", "323", "15", "21", "21", null, null, this.div_search);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_Searchbtn");
            obj.set_enable("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup00", "absolute", "322", "10", "22", "21", null, null, this.div_search);
            obj.set_taborder("81");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup01", "absolute", "606", "10", "22", "21", null, null, this.div_search);
            obj.set_taborder("84");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new CheckBox("chk_option_yn00", "absolute", "82", "114", "149", "21", null, null, this.div_search);
            obj.set_taborder("85");
            obj.set_text("사후장려금 지급여부");
            obj.set_value("0");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data01", "absolute", "195", "10", "124", "21", null, null, this.div_search);
            obj.set_taborder("87");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title06", "absolute", "15", "114", "67", "21", null, null, this.div_search);
            obj.set_taborder("91");
            obj.set_text("여부");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title07", "absolute", "15", "88", "67", "21", null, null, this.div_search);
            obj.set_taborder("92");
            obj.set_text("조작일");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_fsrg00", "absolute", "82", "88", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("93");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("null");
            obj = new Static("Static08", "absolute", "188", "88", "10", "21", null, null, this.div_search);
            obj.set_taborder("94");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_fsrg01", "absolute", "202", "88", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("95");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new CheckBox("chk_option_yn01", "absolute", "231", "114", "135", "21", null, null, this.div_search);
            obj.set_taborder("99");
            obj.set_text("발주금지포함 여부");
            obj.set_value("1");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_search.addChild(obj.name, obj);
            obj = new CheckBox("chk_option_yn02", "absolute", "366", "114", "120", "21", null, null, this.div_search);
            obj.set_taborder("100");
            obj.set_text("삭제포함 여부");
            obj.set_value("0");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data00", "absolute", "82", "10", "110", "21", null, null, this.div_search);
            obj.set_taborder("104");
            obj.set_inputtype("number");
            obj.set_cssclass("WF_Essential");
            obj.set_maxlength("25");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_pay_list00", "absolute", "82", "62", "110", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("106");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_enable("true");
            obj.set_innerdataset("@ds_pay");
            obj = new Edit("edt_data04", "absolute", "469", "36", "100", "21", null, null, this.div_search);
            obj.set_taborder("107");
            obj.set_cssclass("WF_Essential");
            obj.style.set_font("8 Gulim");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data05", "absolute", "572", "36", "131", "21", null, null, this.div_search);
            obj.set_taborder("108");
            obj.set_cssclass("WF_Essential");
            obj.style.set_font("8 Gulim");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_daily_sel", "absolute", "315", "88", "315", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_daily_sel_innerdataset = new Dataset("rdo_daily_sel_innerdataset", this.div_search.rdo_daily_sel);
            rdo_daily_sel_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">등록일</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">변경일</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">삭제일</Col></Row></Rows>");
            obj.set_innerdataset(rdo_daily_sel_innerdataset);
            obj.set_taborder("109");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("2");
            obj.set_direction("vertical");
            obj.set_index("1");

            obj = new Div("div_list", "absolute", "0", "173", null, null, "15", "0", this);
            obj.set_taborder("7");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_main00", "absolute", "0", "42", null, null, "0", "0", this.div_list);
            obj.set_taborder("20");
            obj.set_binddataset("ds_lvchof");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"220\"/><Column size=\"220\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"260\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"28\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"물류센터\"/><Cell col=\"2\" rowspan=\"2\" text=\"상품\"/><Cell col=\"3\" rowspan=\"2\" text=\"매취/수탁\"/><Cell col=\"4\" rowspan=\"2\" text=\"다매가&#13;&#10;유형\"/><Cell col=\"5\" rowspan=\"2\" text=\"원가\"/><Cell col=\"6\" colspan=\"5\" text=\"수수료율(%)\"/><Cell col=\"11\" rowspan=\"2\" text=\"지급&#13;&#10;기일\"/><Cell col=\"12\" rowspan=\"2\" text=\"발주금지&#13;&#10;여부(가격)\"/><Cell col=\"13\" rowspan=\"2\" text=\"담당&#13;&#10;바이어\"/><Cell col=\"14\" rowspan=\"2\" text=\"등록/변경/삭제일자\"/><Cell col=\"15\" rowspan=\"2\" text=\"최종사용자\"/><Cell col=\"16\" rowspan=\"2\" text=\"수주&#13;&#10;여부(상품)\"/><Cell col=\"17\" rowspan=\"2\" text=\"발주금지&#13;&#10;여부(상품)\"/><Cell col=\"18\" rowspan=\"2\" text=\"박스당&#13;&#10;입수\"/><Cell row=\"1\" col=\"6\" text=\"업체\"/><Cell row=\"1\" col=\"7\" text=\"관리\"/><Cell row=\"1\" col=\"8\" text=\"환금\"/><Cell row=\"1\" col=\"9\" text=\"물류\"/><Cell row=\"1\" col=\"10\" text=\"직송\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:NA_BZPLC\"/><Cell col=\"2\" text=\"bind:NA_WRS_C\"/><Cell col=\"3\" rowspan=\"2\" text=\"bind:SPY_TPC_NM\"/><Cell col=\"4\" text=\"bind:PGNM\"/><Cell col=\"5\" rowspan=\"2\" displaytype=\"number\" text=\"bind:BYNG_UPR\" mask=\"#,##0\"/><Cell col=\"6\" rowspan=\"2\" text=\"bind:COMP_FEERT\"/><Cell col=\"7\" rowspan=\"2\" text=\"bind:AMN_FEERT\"/><Cell col=\"8\" rowspan=\"2\" text=\"bind:TROT_FEERT\"/><Cell col=\"9\" rowspan=\"2\" text=\"bind:PHD_FEERT\"/><Cell col=\"10\" rowspan=\"2\" text=\"bind:DDLY_PHD_FEERT\"/><Cell col=\"11\" rowspan=\"2\" text=\"bind:PY_FDTCN\"/><Cell col=\"12\" rowspan=\"2\" text=\"bind:ODR_FBID_YN\" expr=\"expr:ODR_FBID_YN=='1'?'여':'부'\"/><Cell col=\"13\" text=\"bind:BUYER_NM\"/><Cell col=\"14\" rowspan=\"2\" text=\"bind:DTM\"/><Cell col=\"15\" rowspan=\"2\" text=\"bind:LS_CMENO\"/><Cell col=\"16\" rowspan=\"2\" text=\"bind:RVO_PSB_YN\" expr=\"expr:RVO_PSB_YN=='1'?'여':'부'\"/><Cell col=\"17\" rowspan=\"2\" text=\"bind:ODR_PSB_YN\" expr=\"expr:ODR_PSB_YN=='1'?'여':'부'\"/><Cell col=\"18\" rowspan=\"2\" text=\"bind:BOXPE_AQZ\"/><Cell row=\"1\" col=\"1\" style=\"align:left;\" text=\"bind:NA_BZPLC_NM\"/><Cell row=\"1\" col=\"2\" style=\"align:left;\" text=\"bind:WRSNM\"/><Cell row=\"1\" col=\"4\" text=\"bind:PRGR_C\"/><Cell row=\"1\" col=\"13\" text=\"bind:CHRG_BUYER_ENO\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_toggle00", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new WebBrowser("web_downExcelM", "absolute", "78.3%", "10", null, "20", "16.88%", null, this.div_list);
            obj.set_taborder("23");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("11");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print00", "absolute", null, "0", "41", "21", "118", null, this);
            obj.set_taborder("12");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search00", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "203", null, this);
            obj.set_taborder("14");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear00", "absolute", null, "0", "53", "21", "161", null, this);
            obj.set_taborder("15");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 788, 145, this.div_search,
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
            		p.set_classname("VAN_DS_SC_1520");
            		p.set_titletext("사업장매입가격조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_edit.cbo_txt_dsc00","value","ds_txt_dsc","SIMP_CNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_edit.cbo_ctr_dsc00","value","ds_ctr_dsc","SIMP_CNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_edit.cbo_pay_list00","value","ds_pay","SIMP_CNM");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
            this._addPreloadList("fdl", "common::AuthorityWorkplace.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1580.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1580.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        };

        //공통코드 데이터셋 onload후 호출할 함수
        this.fn_afterFormOnload = function()
        {
        	var param = [ 
         		{code:"TXT_DSC", dsName:"ds_txt_dsc", selecttype:"A"}, 		// 0.과세구분코드
         		{code:"QSLPR_TPC", dsName:"ds_pay", selecttype:"A"} 		// 1.가격군코드
            ];
        	this.gfn_setCommonCode(param);
        	this.div_list.grd_main00.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	this.div_search.cbo_bzplc.set_index(0);
        	//this.fn_getNABizPlace(application.gv_glnCode);
        	this.div_search.cal_fsrg00.set_value('19000101');
        	this.div_search.cal_fsrg01.set_value(this.gfn_today('yyyyMMdd'));
        	//콤보에 최상단Row보이도록 설정
        	this.div_search.cbo_txt_dsc00.set_index(0);
        	this.div_search.cbo_pay_list00.set_index(0);
        	this.getUpTrpl_c();
        }

        //공급처 본사 조회 서비스
        this.getUpTrpl_c = function()
        {
        	var param = "glncode="+application.gv_glnCode;
        	
        	var sSvcID        = "initUpTrpl";//통신아이디
        	var sURL          = "svc::rest/pds/pricat/LifeGoods/getUpNatrpl";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_uptrpl=ds_uptrpl";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        //조회버튼
        this.btn_search00_onclick = function(obj,e)
        {
        	this.search(); //처음 조회 시 페이지를 확인한다.
        }
        //페이징 처리
        this.fn_paging = function(vPageNum)
        {
        // 	this.ds_pageVO.clearData();  
        // 	this.ds_lvchof.clearData();     //Grid에 Binding된 Dataset명	
        // 	
        // 	this.ds_pageVO.addRow(); 
        // 	
        // 	var vPageSize   = 10; 	//Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
        // 	var vTotalCount = 1; 	//전체건수. 화면조회후 리턴받아 사용
        //  	this.ds_pageVO.setColumn(0,"CURRENT_PAGE",vPageNum); //현재 페이지
        //  	this.ds_pageVO.setColumn(0,"PAGE_SIZE",vPageSize);
        //  	this.ds_pageVO.setColumn(0,"TOTAL_ROW_COUNT",vTotalCount);
        // 	 
        // 	var argumentObj = "";
        // 	
        // 	lsNowPage = vPageNum;//현재페이지 설정 
        // 	
        // 	this.search();
        }

        /* 페이지 숫자 위치 설정*/
        // this.div_list_onsize = function(obj:Div, e:nexacro.SizeEventInfo)
        // {	
        // 	var nLeft = (e.cx/2)-(this.div_list.div_page.width/2);
        // 	this.div_list.div_page.set_left(nLeft);
        // }

        this.search = function()
        {
        	var sto_code1 = this.gfn_nullToEmpty(this.div_search.edt_data00.value); 		// 1.From 상품코드
        	var sto_code2 = this.gfn_nullToEmpty(this.div_search.edt_data02.value); 		// 2.To 상품코드
        	var combo_ctr = '';//this.div_search.cbo_ctr_list00.value; 							// 3.발주처 콤보
        	var combo_pay = this.div_search.cbo_pay_list00.value; 							// 4.가격군 콤보
        	var combo_txt_dsc = this.div_search.cbo_txt_dsc00.value; 						// 5.과세구분 콤보
        	var date1 = this.gfn_nullToEmpty(this.div_search.cal_fsrg00.value); 			// 6.조작일시작
        	var date2 = this.gfn_nullToEmpty(this.div_search.cal_fsrg01.value); 			// 7.조작일 끝
        	var glncode = this.div_search.edt_data04.value;									// 8.공급처코드
        	var psb_yn = this.div_search.chk_option_yn01.value;								// 9.발주금지여부
        	var del_dtm = this.div_search.chk_option_yn02.value;							// 10.삭제포함여부
        	var bzplc = this.div_search.edt_bzplc.text;
        	var cbo_bzplc = this.div_search.cbo_bzplc.value;
        	var isBzplc = 'true';
        	if(this.validationchk(sto_code1,sto_code2,date1,date2) == false){
        		return false;
        	}
        	
        	var sVal = 	"sto_code="+sto_code1
        				+" sto_code2="+sto_code2
        				+" combo_ctr="+combo_ctr
        				+" combo_pay="+combo_pay
        				+" combo_txt_dsc="+combo_txt_dsc
        				+" fsrg_from="+date1
        				+" fsrg_to="+date2
        				+" fsrg_rdo="+this.div_search.rdo_daily_sel.value
        				+" TRPL_C="+this.getTrplCode()
        				+" glncode="+glncode
        				+" psb_yn="+psb_yn
        				+" del_dtm="+del_dtm
        				+" bzplc="+bzplc
        				+" cbo_bzplc="+cbo_bzplc
        				+" isBzplc="+isBzplc;
        	var sSvcID        = "p_search";//통신아이디
        	var sURL          = "svc::rest/pds/pricat/LifeGoods/retrieveLifeGoods";// 호출할 서버 페이지 주소
        	var sInDatasets   = "ds_pageVO=ds_pageVO";//보내는데이터셋
        	var sOutDatasets  = "ds_lvchof=ds_lvchof";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = sVal;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }
        /*
        this.fn_getNABizPlace = function(v_nacode)
        {
        	var trpl_c = v_nacode;
        	var search_type = "default";
        	
        	var param = "search_type="+search_type+
        				" splr_na_trpl_c="+trpl_c;
        	
        	var sSvcID        = "getNABizPlace";//통신아이디
        	var sURL          = "svc::rest/common/getNABizPlace";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_NABizPlace=data";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = param;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }
        */
        this.fn_callback = function(svcID,nCD,sMSG)//첫번째 인자값은 통신 ID
        {
        	if(nCD < 0){
        		this.gfn_getMessage("alert", sMSG);
        		return;
        	}else{
        		/*
        		if(svcID == "getNABizPlace"){
        			if (this.ds_NABizPlace.insertRow(0) != -1){
        				this.ds_NABizPlace.setColumn(0,"NA_BZPLC","00");
        				this.ds_NABizPlace.setColumn(0,"SHRT_BZPLNM","- 전체 -");
        			};
        			this.div_search.cbo_ctr_list00.set_index(0);
        		}
        		*/
        		if(svcID == "initUpTrpl"){
        			this.div_search.edt_data04.set_value(this.ds_uptrpl.getColumn(0,"UP_NA_TRPL_C"));
        			this.div_search.edt_data05.set_value(this.ds_uptrpl.getColumn(0,"TRPL_ABR_NM"));
        		}
        		//페이징 처리 보고
        		if(svcID == "p_search"){
        			var p_sum = 0;
        			if(this.div_list.grd_main00.rowcount > 0){
        			
        				var sTotal    = this.ds_pageVO.getColumn(0, "TOTAL_ROW_COUNT");
        				var sPagesize = this.ds_pageVO.getColumn(0, "PAGE_SIZE");
        				
        				this.div_list.div_page.fn_pageSet(sTotal, sPagesize,"grd_main00,div_page",lsNowPage);

        				p_sum = 100;
        				//합계대비의 합계  100으로 설정
        				this.div_list.grd_main00.setCellProperty("Summ",3,"text",p_sum);
        				
        				//현재페이지							
        				var sCurrentPage = this.ds_pageVO.getColumn(0, "CURRENT_PAGE")
        			}else{
        				this.div_list.div_page.fn_pageSet(0, 0,"grd_main00,div_page",lsNowPage);//페이징 설정				
        				
        				this.div_list.grd_main00.setCellProperty("Summ",1,"text",0);
        				this.div_list.grd_main00.setCellProperty("Summ",2,"text",0);
        				this.div_list.grd_main00.setCellProperty("Summ",3,"text",0);
        				this.div_list.grd_main00.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        			}
        		}
        	}
        }

        //조회 조건 숨김 여부 이벤트
        this.div_list_btn_toggle00_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        //Validation Check
        this.validationchk = function(sto_code1,sto_code2,date1,date2)
        {
        	if(this.div_search.rdo_select_chk00.value == 1){
        		if(sto_code1 != "" || sto_code2 != ""){
        			if(sto_code1.length < 8){
        				this.alert("상품코드(From)를 8자리 이상 입력하세요.");
        				return false;
        			}
        			if(sto_code2.length < 8){
        				this.alert("상품코드(To)를 8자리 이상 입력하세요.");
        				return false;
        			}
        		}
        	}

        // 	if(this.div_search.cbo_ctr_list00.value == "00"){
        // 		this.gfn_getMessage('alert','msg.van_ds_sc_1520.view.splr.select');
        // 		return false;
        // 	}
            return true;
        }
        //상품조회 FROM 팝업
        this.div_search_btn_popup00_onclick = function(params)
        {
        	if(params == true){	
        		if(this.gfn_nullToEmpty(this.div_search.edt_data00.value).length > 0 && this.gfn_nullToEmpty(this.div_search.edt_data00.value).length < 7){
        			this.gfn_getMessage('alert','msg.van_ds_sc_1530.view.wrsc.moredata');
        			return;
        		}
        		if(this.gfn_nullToEmpty(this.div_search.edt_data01.value).length == 1){
        			this.gfn_getMessage('alert','msg.van_ds_sc_1530.view.wrsnm.moredata');
        			return;
        		}
        	}
        	
        	var code = this.div_search.edt_data00.value;
        	var textname = this.div_search.edt_data01.value;
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
        	this.gfn_openPopup("wrs_c_from","POPUP::POPUP_SRC_WRS.xfdl",oArg,sOption,sPopupCallBack);	    	
        }
        //상품조회 TO 팝업
        this.div_search_btn_popup01_onclick = function(params)
        {
        	if(params == true){	
        		if(this.gfn_nullToEmpty(this.div_search.edt_data02.value).length > 0 && this.gfn_nullToEmpty(this.div_search.edt_data02.value).length < 7){
        			this.gfn_getMessage('alert','msg.van_ds_sc_1530.view.wrsc.moredata');
        			return;
        		}
        		if(this.gfn_nullToEmpty(this.div_search.edt_data03.value).length == 1){
        			this.gfn_getMessage('alert','msg.van_ds_sc_1530.view.wrsnm.moredata');
        			return;
        		}
        	}
        	
        	var code = this.div_search.edt_data02.value;
        	var textname = this.div_search.edt_data03.value;
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
        	this.gfn_openPopup("wrs_c_to","POPUP::POPUP_SRC_WRS.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	if(strVal != undefined){
        		var arrVal = strVal.split(",");
        		if(strId == "wrs_c_from"){
        			this.div_search.edt_data00.set_value(arrVal[0]);
        			this.div_search.edt_data01.set_value(arrVal[1]);
        			this.div_search.edt_data02.set_value(arrVal[0]);
        			this.div_search.edt_data03.set_value(arrVal[1]);
        		}
        		if(strId == "wrs_c_to"){
        			this.div_search.edt_data02.set_value(arrVal[0]);
        			this.div_search.edt_data03.set_value(arrVal[1]);
        		}
        	}
        }
        //엑셀 다운로드 버튼
        this.btn_excel_onclick = function(obj,e)
        {
        	var sto_code1 = this.gfn_nullToEmpty(this.div_search.edt_data00.value); 		// 1.From 상품코드
        	var sto_code2 = this.gfn_nullToEmpty(this.div_search.edt_data02.value); 		// 2.To 상품코드
        	var date1 = this.gfn_nullToEmpty(this.div_search.cal_fsrg00.value);
        	var date2 = this.gfn_nullToEmpty(this.div_search.cal_fsrg01.value); 
        	
        	if(this.validationchk(sto_code1,sto_code2,date1,date2) == false){
        		return false;
        	}

        	var params = "sto_code="+this.gfn_nullToEmpty(this.div_search.edt_data00.value)
        				+"&sto_code2="+this.gfn_nullToEmpty(this.div_search.edt_data02.value)
        				+"&combo_ctr="+''//this.div_search.cbo_ctr_list00.value
        				+"&combo_pay="+this.div_search.cbo_pay_list00.value
        				+"&combo_txt_dsc="+this.div_search.cbo_txt_dsc00.value
        				+"&fsrg_from="+this.gfn_nullToEmpty(this.div_search.cal_fsrg00.value)
        				+"&fsrg_to="+this.gfn_nullToEmpty(this.div_search.cal_fsrg01.value)
        				+"&fsrg_rdo="+this.div_search.rdo_daily_sel.value
        				+"&TRPL_C="+this.getTrplCode()
        				+"&psb_yn="+this.div_search.chk_option_yn01.value
        				+"&del_dtm="+this.div_search.chk_option_yn02.value
        				+"&bzplc="+this.div_search.edt_bzplc.text
        				+"&cbo_bzplc="+this.div_search.cbo_bzplc.value
        				+"&isBzplc=true";
        				
        	if(this.div_list.grd_main00.rowcount < 1){
        		params += "&glncode=''";
        	}else{
        		params += "&glncode="+this.div_search.edt_data04.value;
        	}
        	excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelLifeGoods?"+params, this);
        }

        this.btn_print00_onclick = function(obj,e)
        {
        	if(this.div_list.grd_main00.rowcount < 1){
        		this.gfn_getMessage('alert','result.message.search.no.exist.data');
        		return;
        	}
        	var from_bz = this.gfn_nullToEmpty(this.div_search.edt_data00.value);
        	var to_bz = this.gfn_nullToEmpty(this.div_search.edt_data02.value);
        	var ctr_val = '';//this.gfn_nullToEmpty(this.div_search.cbo_ctr_list00.value);
        	var pay_val = this.gfn_nullToEmpty(this.div_search.cbo_pay_list00.value);
        	var txt_dsc = this.div_search.cbo_txt_dsc00.value;
        	var date_from = this.gfn_nullToEmpty(this.div_search.cal_fsrg00.value);
        	var date_to = this.gfn_nullToEmpty(this.div_search.cal_fsrg01.value);
        	var bzplc = this.div_search.edt_bzplc.text;
        	var cbo_bzplc = this.div_search.cbo_bzplc.value;
        	var isBzplc = 'true';
        	
        	var titleForm = this.getTrplCodePrint() +
        					" ,상품(From):"+from_bz+" ,상품(To):"+to_bz+" ,사업장:"+bzplc+" ,가격군:"+pay_val+
        					" ,과세구분:"+txt_dsc+" ,조작일(From):"+date_from+" ,조작일(To):"+date_to
        					;
        	var ozParam = {
        		sId: 'VAN_DS_SC_1520',
        		sUrl: '/rest/oz/pds/pricat/LifeGoods/retrieveLifeGoods',
        		paramType: 'param',
        		sParam: {
        			TRPL_C_TEXT:titleForm,
        			sto_code:from_bz,
        			sto_code2:to_bz,
        			combo_ctr:ctr_val,
        			combo_pay:pay_val,
        			combo_txt_dsc:txt_dsc,
        			fsrg_from:date_from,
        			fsrg_to:date_to,
        			fsrg_rdo:this.div_search.rdo_daily_sel.value,
        			TRPL_C:this.getTrplCode(),
        			glncode:this.div_search.edt_data04.value,
        			psb_yn:this.div_search.chk_option_yn01.value,
        			del_dtm:this.div_search.chk_option_yn02.value,
        			bzplc:bzplc,
        			cbo_bzplc:cbo_bzplc,
        			isBzplc:isBzplc
        		}
        	};
        	
        	this.ozViewer(ozParam);	
        }

        this.btn_clear00_onclick = function(obj,e)
        {
        	this.reload();
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

        this.div_search_edt_data02_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.div_search_btn_popup01_onclick(true);
        	}
        }

        this.div_search_edt_data03_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.div_search_btn_popup01_onclick(true);
        	}
        }

        this.bzplc_onclick = function(obj,e){

        	var oArg = {form_id:"frm_van_ds_sc_1580"};
        	var sOption = "autosize=true,title=false";
        	var sPopupCallBack = "fn_popupAfter2";    
        	this.gfn_openPopup("popup","PDS.PRICAT::VAN_DS_SC_1580_POPUP.xfdl",oArg,sOption,sPopupCallBack);
        };

        this.fn_popupAfter2 = function(pId,str){
        	
        	this.div_search.cbo_bzplc.set_index(0);
        	this.div_search.edt_bzplc.set_value(str);
        };

        this.div_search_edt_data10_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.div_search_btn_popup10_onclick(true)
        	}
        }

        this.div_search_btn_popup10_onclick = function(params)
        {
        	var param = {
        				autoType:params,
        				searchCode:this.div_ .div_search.edt_data10.value,
        				searchText:this.div_search.edt_data11.value
        	};
        	if(typeof params == "boolean"){
        		if(!this.searPopValue(param)){return};
        	}

        	var oArg = {paramMode:"U", dsArg:this.Dataset00, autoPop:param};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter10";
        	this.gfn_openPopup("rvopl_trpl","POPUP::POPUP_SRC_RVOPL_TRPL.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.fn_popupAfter10 = function(strId,strVal)
        {
        	//팝업을 닫을 경우 값을 전달
        	if(strVal != undefined){
        		this.div_search.edt_data10.set_value(strVal.split(",")[0]);
        		this.div_search.edt_data11.set_value(strVal.split(",")[1]);
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("onsize", this.div_list_onsize, this);
            this.div_search.rdo_select_chk00.addEventHandler("onitemclick", this.Div00_Radio00_onitemclick, this);
            this.div_search.cbo_txt_dsc00.addEventHandler("onitemchanged", this.Div00_Combo02_onitemchanged, this);
            this.div_search.edt_data02.addEventHandler("onkeydown", this.div_search_edt_data02_onkeydown, this);
            this.div_search.edt_data03.addEventHandler("onkeydown", this.div_search_edt_data03_onkeydown, this);
            this.div_search.edt_data10.addEventHandler("onkeydown", this.div_search_edt_data10_onkeydown, this);
            this.div_search.edt_data11.addEventHandler("onkeydown", this.div_search_edt_data10_onkeydown, this);
            this.div_search.btn_popup10.addEventHandler("onclick", this.div_search_btn_popup10_onclick, this);
            this.div_search.btn_popup00.addEventHandler("onclick", this.div_search_btn_popup00_onclick, this);
            this.div_search.btn_popup01.addEventHandler("onclick", this.div_search_btn_popup01_onclick, this);
            this.div_search.chk_option_yn00.addEventHandler("onclick", this.Div00_CheckBox00_onclick, this);
            this.div_search.edt_data01.addEventHandler("onkeydown", this.div_search_edt_data01_onkeydown, this);
            this.div_search.chk_option_yn01.addEventHandler("onclick", this.Div00_CheckBox00_onclick, this);
            this.div_search.chk_option_yn02.addEventHandler("onclick", this.Div00_CheckBox00_onclick, this);
            this.div_search.edt_data00.addEventHandler("onkeydown", this.div_search_edt_data00_onkeydown, this);
            this.div_search.cbo_pay_list00.addEventHandler("onitemchanged", this.Div00_Combo02_onitemchanged, this);
            this.div_list.btn_toggle00.addEventHandler("onclick", this.div_list_btn_toggle00_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_print00.addEventHandler("onclick", this.btn_print00_onclick, this);
            this.btn_search00.addEventHandler("onclick", this.btn_search00_onclick, this);
            this.btn_clear00.addEventHandler("onclick", this.btn_clear00_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1580.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
