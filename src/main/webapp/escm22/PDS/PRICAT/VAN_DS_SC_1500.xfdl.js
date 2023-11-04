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
                this.set_name("VAN_DS_SC_0200");
                this.set_titletext("상품 기준정보 조회");
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

            obj = new Dataset("ds_combo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">8801099000016</Col><Col id=\"data\">[8801099000016] 대상에프앤에프(주)</Col></Row><Row><Col id=\"code\">8801099000023</Col><Col id=\"data\">[8801099000023] 대상에프앤에프(주)동부지점</Col></Row><Row><Col id=\"code\">8801099000030</Col><Col id=\"data\">[8801099000030] 대상에프앤에프(주)서부지점</Col></Row><Row><Col id=\"code\">8801099000047</Col><Col id=\"data\">[8801099000047] 대상에프앤에프(주)남부지점(안양)</Col></Row><Row><Col id=\"code\">8801099000054</Col><Col id=\"data\">[8801099000054] 대상에프앤에프(주)남부지점(강원)</Col></Row><Row><Col id=\"code\">8801099000061</Col><Col id=\"data\">[8801099000061] 대상에프앤에프(주)대전지점</Col></Row><Row><Col id=\"code\">8801099000078</Col><Col id=\"data\">[8801099000078] 대상에프앤에프(주)광주지점</Col></Row><Row><Col id=\"code\">7</Col><Col id=\"data\">[8801099000085] 대상에프앤에프(주)대구지점</Col></Row><Row><Col id=\"code\">8</Col><Col id=\"data\">[8801099000092] 대상에프앤에프(주)부산지점</Col></Row><Row><Col id=\"code\">9</Col><Col id=\"data\">[8801099000108] 대상에프앤에프(주)신선지점</Col></Row><Row><Col id=\"code\">10</Col><Col id=\"data\">[8801099000115] 대상에프앤에프(주)지호상사</Col></Row><Row><Col id=\"code\">11</Col><Col id=\"data\">[8801099000122] 대상에프앤에프(주)청원유통</Col></Row><Row><Col id=\"code\">12</Col><Col id=\"data\">[8801099000139] 대상에프앤에프(주)승진상사</Col></Row><Row><Col id=\"code\">13</Col><Col id=\"data\">[8801099000146] 대상에프앤에프(주)여주대상</Col></Row><Row><Col id=\"code\">14</Col><Col id=\"data\">[8801099000153] 대상에프앤에프(주)청정원상사(위탁)</Col></Row><Row><Col id=\"code\">15</Col><Col id=\"data\">[8801099000160] 대상에프앤에프(주)대성상사</Col></Row><Row><Col id=\"code\">16</Col><Col id=\"data\">[8801099000177] 대상에프앤에프(주)대상위탁상사</Col></Row><Row><Col id=\"code\">17</Col><Col id=\"data\">[8801099000184] 대상에프앤에프(주)청정원상사(홍성)</Col></Row><Row><Col id=\"code\">18</Col><Col id=\"data\">[8801099000191] 대상에프앤에프(주)홍성위탁</Col></Row><Row><Col id=\"code\">19</Col><Col id=\"data\">[8801099000207] 대상에프앤에프(주)해송유통</Col></Row><Row><Col id=\"code\">20</Col><Col id=\"data\">[8801099000214] 대상에프앤에프(주)청정원태안위탁</Col></Row><Row><Col id=\"code\">21</Col><Col id=\"data\">[8801099000221] 대상에프앤에프(주)송암상사</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_wrs", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RN\" type=\"STRING\" size=\"25\"/><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"25\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"100\"/><Column id=\"WRS_STDNM\" type=\"STRING\" size=\"50\"/><Column id=\"TXT_DSC\" type=\"STRING\" size=\"10\"/><Column id=\"MFT_NA_TRPL_C\" type=\"STRING\" size=\"13\"/><Column id=\"MFT_NA_TRPL_NM\" type=\"STRING\" size=\"13\"/><Column id=\"NA_WRS_CLNM\" type=\"STRING\" size=\"50\"/><Column id=\"WRS_DSC\" type=\"STRING\" size=\"5\"/><Column id=\"FSRG_DTM\" type=\"STRING\" size=\"20\"/><Column id=\"LSCHG_DTM\" type=\"STRING\" size=\"20\"/></ColumnInfo>");
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


            
            // UI Components Initialize
            obj = new Div("div_menu", "absolute", "0", "0", "397", "21", null, null, this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search00", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("5");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "147", "15", null, this);
            obj.set_taborder("6");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("sta_title00", "absolute", "15", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("1");
            obj.set_text("상품코드");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title04", "absolute", "400", "62", "91", "21", null, null, this.div_search);
            obj.set_taborder("17");
            obj.set_text("상품구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_store_chk00", "absolute", "491", "62", "233", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_store_chk00_innerdataset = new Dataset("rdo_store_chk00_innerdataset", this.div_search.rdo_store_chk00);
            rdo_store_chk00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1차상품</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2차상품</Col></Row></Rows>");
            obj.set_innerdataset(rdo_store_chk00_innerdataset);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("0");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Static("sta_title05", "absolute", "400", "88", "91", "21", null, null, this.div_search);
            obj.set_taborder("19");
            obj.set_text("계약유형");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_wrs_list00", "absolute", "491", "88", "151", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("7");
            obj.set_innerdataset("@ds_cser_ctr_tpc");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_codecolumn("SIMP_C");
            obj.set_visible("true");
            obj.set_enable("true");
            obj.set_index("-1");
            obj = new Static("sta_title03", "absolute", "15", "62", "79", "21", null, null, this.div_search);
            obj.set_taborder("20");
            obj.set_text("코드구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title01", "absolute", "400", "10", "91", "21", null, null, this.div_search);
            obj.set_taborder("21");
            obj.set_text("상품분류");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data06", "absolute", "567", "10", "35", "21", null, null, this.div_search);
            obj.set_taborder("10");
            obj.set_cssclass("WF_Essential");
            obj.set_maxlength("3");
            obj.set_readonly("false");
            obj.set_visible("true");
            obj.set_inputtype("number");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup00", "absolute", "341", "10", "21", "21", null, null, this.div_search);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_Searchbtn");
            obj.set_enable("true");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data04", "absolute", "491", "10", "35", "21", null, null, this.div_search);
            obj.set_taborder("8");
            obj.set_cssclass("WF_Essential");
            obj.set_maxlength("3");
            obj.set_readonly("false");
            obj.set_inputtype("number");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data05", "absolute", "529", "10", "35", "21", null, null, this.div_search);
            obj.set_taborder("9");
            obj.set_cssclass("WF_Essential");
            obj.set_maxlength("3");
            obj.set_readonly("false");
            obj.set_visible("true");
            obj.set_inputtype("number");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup01", "absolute", "750", "10", "21", "21", null, null, this.div_search);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new CheckBox("chk_code_list00", "absolute", "94", "62", "147", "21", null, null, this.div_search);
            obj.set_taborder("3");
            obj.set_text("외부제조표준코드");
            obj.set_falsevalue("0");
            obj.set_value("1");
            obj.set_truevalue("1");
            this.div_search.addChild(obj.name, obj);
            obj = new CheckBox("chk_del_chk00", "absolute", "647", "88", "114", "21", null, null, this.div_search);
            obj.set_taborder("24");
            obj.set_text("삭제포함여부");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_value("1");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data01", "absolute", "207", "10", "131", "21", null, null, this.div_search);
            obj.set_taborder("2");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data07", "absolute", "605", "10", "35", "21", null, null, this.div_search);
            obj.set_taborder("11");
            obj.set_cssclass("WF_Essential");
            obj.set_maxlength("3");
            obj.set_readonly("false");
            obj.set_visible("true");
            obj.set_inputtype("number");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data08", "absolute", "643", "10", "104", "21", null, null, this.div_search);
            obj.set_taborder("12");
            obj.set_cssclass("WF_Essential");
            obj.set_maxlength("12");
            obj.set_inputtype("number");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data09", "absolute", "491", "36", "280", "21", null, null, this.div_search);
            obj.set_taborder("25");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title06", "absolute", "15", "114", "79", "21", null, null, this.div_search);
            obj.set_taborder("26");
            obj.set_text("등록일");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title07", "absolute", "400", "114", "91", "21", null, null, this.div_search);
            obj.set_taborder("27");
            obj.set_text("최종수정일");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_fsrg00", "absolute", "94", "114", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("sta_between00", "absolute", "199", "114", "10", "21", null, null, this.div_search);
            obj.set_taborder("28");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_fsrg01", "absolute", "214", "114", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("cal_lschg00", "absolute", "491", "114", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("15");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("sta_between01", "absolute", "596", "114", "10", "21", null, null, this.div_search);
            obj.set_taborder("29");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_lschg01", "absolute", "611", "114", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("16");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new CheckBox("chk_code_list02", "absolute", "205", "88", "56", "21", null, null, this.div_search);
            obj.set_taborder("5");
            obj.set_text("수량");
            obj.set_value("1");
            obj.set_falsevalue("0");
            obj.set_truevalue("3");
            this.div_search.addChild(obj.name, obj);
            obj = new CheckBox("chk_code_list01", "absolute", "241", "62", "135", "21", null, null, this.div_search);
            obj.set_taborder("4");
            obj.set_text("농협제조표준코드");
            obj.set_value("1");
            obj.set_falsevalue("0");
            obj.set_truevalue("2");
            this.div_search.addChild(obj.name, obj);
            obj = new CheckBox("chk_code_list03", "absolute", "261", "88", "89", "21", null, null, this.div_search);
            obj.set_taborder("6");
            obj.set_text("금액,중량");
            obj.set_value("4");
            obj.set_falsevalue("0");
            obj.set_truevalue("4");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "94", "88", "115", "21", null, null, this.div_search);
            obj.set_taborder("30");
            obj.set_text("농협비표준코드(");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data00", "absolute", "94", "10", "110", "21", null, null, this.div_search);
            obj.set_taborder("0");
            obj.set_cssclass("WF_Essential");
            obj.set_inputtype("number");
            obj.set_readonly("false");
            obj.set_maxlength("25");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "344", "88", "15", "21", null, null, this.div_search);
            obj.set_taborder("31");
            obj.set_text(")");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title02", "absolute", "15", "36", "79", "21", null, null, this.div_search);
            obj.set_taborder("32");
            obj.set_text("제조업체");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data02", "absolute", "94", "36", "110", "21", null, null, this.div_search);
            obj.set_taborder("33");
            obj.set_inputtype("number");
            obj.set_maxlength("25");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data03", "absolute", "207", "36", "131", "21", null, null, this.div_search);
            obj.set_taborder("34");
            obj.set_cssclass("WF_Essential");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup02", "absolute", "341", "36", "21", "21", null, null, this.div_search);
            obj.set_taborder("35");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new CheckBox("chk_late_chk", "absolute", "320", "113", "114", "21", null, null, this.div_search);
            obj.set_taborder("36");
            obj.set_text("최근");
            obj.set_value("0");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "175", null, null, "15", "0", this);
            obj.set_taborder("7");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_main00", "absolute", "0", "42", null, null, "0", "44", this.div_list);
            obj.set_taborder("12");
            obj.set_binddataset("ds_wrs");
            obj.set_autofittype("none");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"102\"/><Column size=\"180\"/><Column size=\"220\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"140\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"상품코드\"/><Cell col=\"2\" text=\"상품명\"/><Cell col=\"3\" text=\"규격\"/><Cell col=\"4\" text=\"과세구분\"/><Cell col=\"5\" text=\"제조업체코드\"/><Cell col=\"6\" text=\"제조사명\"/><Cell col=\"7\" text=\"분류\"/><Cell col=\"8\" text=\"상품구분\"/><Cell col=\"9\" text=\"등록일\"/><Cell col=\"10\" text=\"변경일\"/></Band><Band id=\"body\"><Cell text=\"bind:RN\"/><Cell col=\"1\" text=\"bind:NA_WRS_C\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:WRSNM\"/><Cell col=\"3\" text=\"bind:WRS_STDNM\"/><Cell col=\"4\" text=\"bind:TXT_DSC\" expr=\"expr:TXT_DSC=='1'?'과세':'면세'\"/><Cell col=\"5\" text=\"bind:MFT_NA_TRPL_C\"/><Cell col=\"6\" style=\"align:left;\" text=\"bind:MFT_NA_TRPL_NM\"/><Cell col=\"7\" text=\"bind:NA_WRS_CLNM\"/><Cell col=\"8\" text=\"bind:WRS_DSC\" expr=\"expr:WRS_DSC=='1'?'1차상품':'2차상품'\"/><Cell col=\"9\" text=\"bind:FSRG_DTM\"/><Cell col=\"10\" text=\"bind:LSCHG_DTM\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_toggle00", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Div("div_page", "absolute", "28.55%", null, "338", "44", null, "0", this.div_list);
            obj.set_taborder("21");
            obj.style.set_align("center");
            obj.set_visible("false");
            obj.set_url("common::pagingBTN.xfdl");
            this.div_list.addChild(obj.name, obj);
            obj = new WebBrowser("web_downExcelM", "absolute", "78.3%", "10", null, "20", "16.88%", null, this.div_list);
            obj.set_taborder("22");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);

            obj = new Div("div_auth", "absolute", null, "0", "431", "21", "203", null, this);
            obj.set_taborder("8");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print00", "absolute", null, "0", "41", "21", "118", null, this);
            obj.set_taborder("9");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear00", "absolute", null, "0", "53", "21", "161", null, this);
            obj.set_taborder("10");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 147, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 788, 317, this.div_list,
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
            		p.set_classname("VAN_DS_SC_0200");
            		p.set_titletext("상품 기준정보 조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Div00.Radio00","value","ds_check","");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","div_edit.Radio00","value","ds_wrs","WRS_DSC");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
            this._addPreloadList("fdl", "common::pagingBTN.xfdl");
            this._addPreloadList("fdl", "common::AuthorityWorkplace.xfdl");
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_1500.xfdl", "lib::comLib.xjs");
        this.addIncludeScript("VAN_DS_SC_1500.xfdl", "lib::comTran.xjs");
        this.registerScript("VAN_DS_SC_1500.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comTran.xjs", null, exports); }	//include "lib::comTran.xjs";

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
        	this.div_search.cbo_wrs_list00.set_index(0); // 계약유형 combobox 초기값
        	this.div_list.grd_main00.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        }

        //조회버튼
        this.btn_search00_onclick = function(obj,e)
        {
        	this.fn_paging(1); //처음 조회 시 페이지를 확인한다.
        }
        //페이징 처리
        this.fn_paging = function(vPageNum)
        {
        	this.ds_pageVO.clearData();  
        	this.ds_wrs.clearData();     //Grid에 Binding된 Dataset명	
        	
        	this.ds_pageVO.addRow(); 
        	
        	var vPageSize   = 20; 	//Grid에 보여줄 Row수, 화면에 따라 변경하여 사용
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

        
        // 조회
        this.search = function()
        {	

        	var lateChkVal = this.div_search.chk_late_chk.value;

        	var storesch = this.gfn_nullToEmpty(this.div_search.edt_data00.value); 	// 1.상품코드

        	/*
        	if(storesch.length < 7){
        	    alert("상품코드를 7자리 이상 입력하세요.");
        	    return false;
        	}
        	*/
        	
        	if(lateChkVal == '0') {
        		if(storesch.length < 7){
        			alert("상품코드를 7자리 이상 입력하세요.");
        			return false;
        		}
        	} 
        	
        	var storecode = this.gfn_nullToEmpty(this.div_search.edt_data08.value); // 2.상품분류코드
        	var wrs_dsc = this.div_search.rdo_store_chk00.value;					// 3.상품구분코드
        	var mngt_c = this.gfn_nullToEmpty(this.div_search.edt_data02.value);	// 4.공급처코드
        	
        	var storecode1 = this.gfn_nullToEmpty(this.div_search.edt_data04.value);
        	var storecode2 = this.gfn_nullToEmpty(this.div_search.edt_data05.value);
        	var storecode3 = this.gfn_nullToEmpty(this.div_search.edt_data06.value);
        	var storecode4 = this.gfn_nullToEmpty(this.div_search.edt_data07.value);
        	
        	
        	var date1 = this.gfn_nullToEmpty(this.div_search.cal_fsrg00.value); 	// 4.등록일 시작
        	var date2 = this.gfn_nullToEmpty(this.div_search.cal_fsrg01.value); 	// 5.등록일 끝
        	var date3 = this.gfn_nullToEmpty(this.div_search.cal_lschg00.value); 	// 6.최종수정일 시작
        	var date4 = this.gfn_nullToEmpty(this.div_search.cal_lschg01.value); 	// 7.최종수정일 끝

        	var wrs_c_dsc = this.div_search.chk_code_list00.value+","+				// 8.상품코드구분코드
        					this.div_search.chk_code_list01.value+","+
        					this.div_search.chk_code_list02.value+","+
        					this.div_search.chk_code_list03.value;
        	
        	var cser_ctr = this.div_search.cbo_wrs_list00.value;					// 9.계약유형
        	
        	/*
        	if(storesch == "" && storecode == "" && mngt_c == ""){
        		this.alert(this.gfn_getTextMessage('msg.van_ds_sc_1500.view.differ.data'));
        		return false;
        	}
        	*/
        	
        	if(lateChkVal == '0') {
        		if(storesch == "" && storecode == "" && mngt_c == ""){
        			this.alert(this.gfn_getTextMessage('msg.van_ds_sc_1500.view.differ.data'));
        			return false;
        		}
        	}

        	// 일자구분 Validation CHECK
        	if(date1 != "" && date2 != ""){
        		if(this.gfn_getDiffDay(this.div_search.cal_lschg00.value,this.div_search.cal_lschg01.value) < 0){
        			this.alert(this.gfn_getTextMessage('validation.message.fromDate.toDate.reConfirm'));
        			return false;
        		}
        	}else if(date1 > date2){
        		this.alert(this.gfn_getTextMessage('fsrg_dtm.name')+this.gfn_getTextMessage('validation.message.fromDate.toDate.reConfirm'));
        		return false;
        	}else if(date3 > date4){
        		this.alert(this.gfn_getTextMessage('lschg_dtm.name')+this.gfn_getTextMessage('validation.message.fromDate.toDate.reConfirm'));
        		return false;
        	}
        	
        	var params = "storesch="+storesch
        				 +" wrs_c_dsc="+wrs_c_dsc
        				 +" wrs_dsc="+wrs_dsc
        				 +" cser_ctr="+cser_ctr
        				 +" wrs_lclc="+storecode1
        				 +" wrs_mclc="+storecode2
        				 +" wrs_sclc="+storecode3
        				 +" wrs_dtcf_c="+storecode4
        				 +" fsrg_from="+date1
        				 +" fsrg_to="+date2
        				 +" lschg_from="+date3
        				 +" lschg_to="+date4
        				 +" mngt_c="+mngt_c
        				 +" TRPL_C="+this.getTrplCode()
        				 ;
        	
        	var sSvcID        = "p_search";//통신아이디
        	var sURL          = "svc::rest/pds/pricat/Product/retrievePricatStandards";// 호출할 서버 페이지 주소
        	var sInDatasets   = "ds_pageVO=ds_pageVO";//보내는데이터셋
        	var sOutDatasets  = "ds_wrs=ds_wrs ds_pageVO=ds_pageVO";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = params;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType = "S"; // U:저장/삭제, S:조회
        	
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        this.fn_callback = function(svcID,nCD,sMSG)//첫번째 인자값은 통신 ID
        {
        	if(nCD < 0){
        		this.gfn_getMessage("alert", sMSG);
        		return;
        	}else{
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

        //상품정보 팝업 조회
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
        	
        	var param = {
        				autoType:params,
        				searchCode:this.div_search.edt_data00.value,
        				searchText:this.div_search.edt_data01.value
        	};
        	if(typeof params == "boolean"){
        		if(!this.searPopValue(param)){return};
        	}
        	var oArg = {dsArg:this.Dataset00, autoPop:param};
        	var sOption = "autosize=true, titleText=false";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("wrs_c","POPUP::POPUP_SRC_WRS.xfdl",oArg,sOption,sPopupCallBack);	
        }
        //상품분류 팝업 조회
        this.div_search_btn_popup01_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"U", dsArg:this.Dataset00};
        	var sOption = "autosize=true, titleText=false";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("wrs_lclc","POPUP::POPUP_SRC_WRS_CLF.xfdl",oArg,sOption,sPopupCallBack);
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	if(strVal != undefined){
        		var arrVal = strVal.split(",");
        		if(strId == "wrs_c"){
        			this.div_search.edt_data00.set_value(arrVal[0]);
        			this.div_search.edt_data01.set_value(arrVal[1]);
        		}
        		if(strId == "wrs_lclc"){
        			this.div_search.edt_data04.set_value(arrVal[0]);
        			this.div_search.edt_data05.set_value(arrVal[1]);
        			this.div_search.edt_data06.set_value(arrVal[2]);
        			this.div_search.edt_data07.set_value(arrVal[3]);
        			this.div_search.edt_data08.set_value(arrVal[0]+arrVal[1]+arrVal[2]+arrVal[3]);
        			this.div_search.edt_data09.set_value(arrVal[4]+"/"+arrVal[5]+"/"+arrVal[6]+"/"+arrVal[7]);
        		}
        		if(strId == "bzplc_c"){
        			this.div_search.edt_data02.set_value(arrVal[0]);
        			this.div_search.edt_data03.set_value(arrVal[1]);
        		}
        	}
        }

        this.btn_print00_onclick = function(obj,e)
        {
        	if(this.div_list.grd_main00.rowcount < 1){
        		this.gfn_getMessage('alert','result.message.search.no.exist.data');
        		return;
        	}
        	var bz_code = this.gfn_nullToEmpty(this.div_search.edt_data00.value);
        	var lclc = this.gfn_nullToEmpty(this.div_search.edt_data08.value);
        	var mngt = this.gfn_nullToEmpty(this.div_search.edt_data02.value);
        	var cser_ctr_v = this.div_search.cbo_wrs_list00.value;
        	var sto_gubun = this.div_search.rdo_store_chk00.value;
        	var fs_from = this.gfn_nullToEmpty(this.div_search.cal_fsrg00.value);
        	var fs_to = this.gfn_nullToEmpty(this.div_search.cal_fsrg01.value);
        	var ls_from = this.gfn_nullToEmpty(this.div_search.cal_lschg00.value);
        	var ls_to = this.gfn_nullToEmpty(this.div_search.cal_lschg01.value);
        	
        	var titleForm = this.getTrplCodePrint()+" ,사업장:"+mngt+" ,상품코드:"+bz_code+" ,상품분류:"+lclc+" ,상품구분:"+sto_gubun
        					+" ,계약유형:"+cser_ctr_v+" ,등록일 ["+fs_from+" ~ "+fs_to+"]"
        					+" ,최종수정일 ["+ls_from+" ~ "+ls_to+"]"
        	;
        	
        	var ozParam = {
        		sId: 'VAN_DS_SC_1500',
        		sUrl: '/rest/oz/pds/pricat/Product/retrievePricatStandards',
        		paramType: 'param',
        		sParam: {
        			TRPL_C_TEXT:titleForm,
        			TRPL_C:this.getTrplCode(),
        			mngt_c:mngt,
        			storesch:bz_code,
        			wrs_c_dsc:this.div_search.chk_code_list00.value+","+
        					  this.div_search.chk_code_list01.value+","+
        					  this.div_search.chk_code_list02.value+","+
        					  this.div_search.chk_code_list03.value,
        			wrs_lclc:this.gfn_nullToEmpty(this.div_search.edt_data04.value),
        			wrs_mclc:this.gfn_nullToEmpty(this.div_search.edt_data05.value),
        			wrs_sclc:this.gfn_nullToEmpty(this.div_search.edt_data06.value),
        			wrs_dtcf_c:this.gfn_nullToEmpty(this.div_search.edt_data07.value),
        			wrs_dsc:sto_gubun,
        			cser_ctr:cser_ctr_v,
        			fsrg_from:fs_from,
        			fsrg_to:fs_to,
        			lschg_from:ls_from,
        			lschg_to:ls_to
        		}
        	};
        	this.ozViewer(ozParam);	
        }

        //엑셀 다운로드 버튼
        this.btn_excel_onclick = function(obj,e)
        {
        	var storesch = this.gfn_nullToEmpty(this.div_search.edt_data00.value); 	// 1.상품코드
        	var storecode = this.gfn_nullToEmpty(this.div_search.edt_data08.value); // 2.상품분류코드
        	var wrs_c_dsc = this.div_search.chk_code_list00.value+","+				// 3.상품코드구분코드
        					this.div_search.chk_code_list01.value+","+
        					this.div_search.chk_code_list02.value+","+
        					this.div_search.chk_code_list03.value;
        	var params = "storesch="+this.gfn_nullToEmpty(this.div_search.edt_data00.value)
        				 +"&TRPL_C="+this.getTrplCode()
        				 +"&mngt_c="+this.gfn_nullToEmpty(this.div_search.edt_data02.value)
        				 +"&wrs_c_dsc="+wrs_c_dsc
        				 +"&wrs_dsc="+this.div_search.rdo_store_chk00.value
        				 +"&wrs_lclc="+this.gfn_nullToEmpty(this.div_search.edt_data04.value)
        				 +"&wrs_mclc="+this.gfn_nullToEmpty(this.div_search.edt_data05.value)
        				 +"&wrs_sclc="+this.gfn_nullToEmpty(this.div_search.edt_data06.value)
        				 +"&wrs_dtcf_c="+this.gfn_nullToEmpty(this.div_search.edt_data07.value)
        				 +"&cser_ctr="+this.div_search.cbo_wrs_list00.value
        				 +"&fsrg_from="+this.gfn_nullToEmpty(this.div_search.cal_fsrg00.value)
        				 +"&fsrg_to="+this.gfn_nullToEmpty(this.div_search.cal_fsrg01.value)
        				 +"&lschg_from="+this.gfn_nullToEmpty(this.div_search.cal_lschg00.value)
        				 +"&lschg_to="+this.gfn_nullToEmpty(this.div_search.cal_lschg01.value);
        				 
        	if(this.div_list.grd_main00.rowcount < 1){
        		params += "&TRPL_C=null";
        	}else{
        		params += "&TRPL_C="+this.getTrplCode();	// 권한사업장코드
        	}
        	
        	excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelPricatStandards?"+params, this);
        }

        this.btn_clear00_onclick = function(obj,e)
        {
        	this.reload();
        }

        

        this.div_search_edt_data02_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.div_search_btn_popup02_onclick(true);
        	}
        }

        this.div_search_edt_data03_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.div_search_btn_popup02_onclick(true);
        	}
        }

        this.div_search_btn_popup02_onclick = function(params)
        {
        	if(params == true){	
        		if(this.gfn_nullToEmpty(this.div_search.edt_data02.value).length > 0 && this.gfn_nullToEmpty(this.div_search.edt_data02.value).length < 7){
        			this.gfn_getMessage('alert','msg.van_ds_sc_1302.view.text.between');
        			return;
        		}
        		if(this.gfn_nullToEmpty(this.div_search.edt_data03.value).length == 1){
        			this.gfn_getMessage('alert','msg.van_ds_sc_1302.view.input.bzplcnm');
        			return;
        		}
        	}
        	
        	var codes = this.gfn_nullToEmpty(this.div_search.edt_data02.value);
        	var texts = this.gfn_nullToEmpty(this.div_search.edt_data03.value);
        	
        	var param = {
        				autoType:params,
        				searchCode:codes,
        				searchText:texts
        	};
        	if(typeof params == "boolean"){
        		if(!this.searPopValue(param)){return};
        	}
        	var oArg = {dsArg:this.Dataset00, autoPop:param};
        	var sOption = "autosize=true, titleText=false";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("bzplc_c","POPUP::POPUP_SRC_SPYPL_TRPL.xfdl",oArg,sOption,sPopupCallBack);	
        }

        this.chk_late_chk_onchanged = function(obj,e)
        {
        	var lateChkVal = this.div_search.chk_late_chk.value;
        	
        	if(lateChkVal == '0') {
        		this.div_search.cal_fsrg00.set_value("");
        		this.div_search.cal_fsrg01.set_value("");
        		this.div_search.cal_fsrg00.set_cssclass("");
                this.div_search.cal_fsrg00.set_readonly(false); 
                this.div_search.cal_fsrg00.set_enable(true);
                this.div_search.cal_fsrg01.set_cssclass("");
                this.div_search.cal_fsrg01.set_readonly(false); 
                this.div_search.cal_fsrg01.set_enable(true);
        	} else {
        		this.div_search.edt_data00.set_value("");
        		this.div_search.edt_data01.set_value("");
        		this.div_search.cal_fsrg00.set_value(this.gfn_minusDate(this.gfn_today("yyyyMMdd"), 7));	
                this.div_search.cal_fsrg01.set_value(this.gfn_today("yyyyMMdd"));
                this.div_search.cal_fsrg00.set_cssclass("msk_WF_Readonly");
                this.div_search.cal_fsrg00.set_readonly(true); 
                this.div_search.cal_fsrg00.set_enable(false);
                this.div_search.cal_fsrg01.set_cssclass("msk_WF_Readonly");
                this.div_search.cal_fsrg01.set_readonly(true); 
                this.div_search.cal_fsrg01.set_enable(false);
        	}
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("onsize", this.div_list_onsize, this);
            this.btn_search00.addEventHandler("onclick", this.btn_search00_onclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.div_search.rdo_store_chk00.addEventHandler("onitemclick", this.Div00_Radio00_onitemclick, this);
            this.div_search.cbo_wrs_list00.addEventHandler("onitemchanged", this.Div00_Combo02_onitemchanged, this);
            this.div_search.btn_popup00.addEventHandler("onclick", this.div_search_btn_popup00_onclick, this);
            this.div_search.btn_popup01.addEventHandler("onclick", this.div_search_btn_popup01_onclick, this);
            this.div_search.chk_code_list00.addEventHandler("onclick", this.Div00_CheckBox00_onclick, this);
            this.div_search.edt_data01.addEventHandler("onkeydown", this.div_search_edt_data01_onkeydown, this);
            this.div_search.chk_code_list02.addEventHandler("onclick", this.Div00_CheckBox00_onclick, this);
            this.div_search.chk_code_list01.addEventHandler("onclick", this.Div00_CheckBox00_onclick, this);
            this.div_search.chk_code_list03.addEventHandler("onclick", this.Div00_CheckBox00_onclick, this);
            this.div_search.edt_data00.addEventHandler("onkeydown", this.div_search_edt_data00_onkeydown, this);
            this.div_search.edt_data02.addEventHandler("onkeydown", this.div_search_edt_data02_onkeydown, this);
            this.div_search.edt_data03.addEventHandler("onkeydown", this.div_search_edt_data03_onkeydown, this);
            this.div_search.btn_popup02.addEventHandler("onclick", this.div_search_btn_popup02_onclick, this);
            this.div_search.chk_late_chk.addEventHandler("onchanged", this.chk_late_chk_onchanged, this);
            this.div_list.btn_toggle00.addEventHandler("onclick", this.div_list_btn_toggle00_onclick, this);
            this.btn_print00.addEventHandler("onclick", this.btn_print00_onclick, this);
            this.btn_clear00.addEventHandler("onclick", this.btn_clear00_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1500.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
