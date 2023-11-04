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
                this.set_name("VAN_DS_SC_1530");
                this.set_titletext("상품 공급가격 이력");
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

            obj = new Dataset("ds_hsty", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TEAM_C\" type=\"STRING\" size=\"256\"/><Column id=\"PRGR_C\" type=\"STRING\" size=\"256\"/><Column id=\"NA_WRS_C\" type=\"STRING\" size=\"256\"/><Column id=\"WRSNM\" type=\"STRING\" size=\"256\"/><Column id=\"SPY_TPC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PGNM\" type=\"STRING\" size=\"256\"/><Column id=\"BYNG_UPR\" type=\"STRING\" size=\"256\"/><Column id=\"SEL_UPR\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_FEERT\" type=\"STRING\" size=\"256\"/><Column id=\"AMN_FEERT\" type=\"STRING\" size=\"256\"/><Column id=\"TROT_FEERT\" type=\"STRING\" size=\"256\"/><Column id=\"PHD_FEERT\" type=\"STRING\" size=\"256\"/><Column id=\"DDLY_PHD_FEERT\" type=\"STRING\" size=\"256\"/><Column id=\"PY_FDTCN\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_FBID_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_FBID_RSNC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHRG_BUYER_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"BUYER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FSRGMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"FSRGMN_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LS_CMENO\" type=\"STRING\" size=\"256\"/><Column id=\"LSCGMN_NA_BZPLC\" type=\"STRING\" size=\"256\"/><Column id=\"DLMN_ENO\" type=\"STRING\" size=\"256\"/><Column id=\"DLMN_NA_BZPLC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Dataset("ds_qslpr_tpc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"256\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_text("발주처");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("sta_title04", "absolute", "381", "36", "103", "21", null, null, this.div_search);
            obj.set_taborder("71");
            obj.set_text("공급업체본사");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_store_chk00", "absolute", "381", "10", "156", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_store_chk00_innerdataset = new Dataset("rdo_store_chk00_innerdataset", this.div_search.rdo_store_chk00);
            rdo_store_chk00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">상품코드</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">상품명</Col></Row></Rows>");
            obj.set_innerdataset(rdo_store_chk00_innerdataset);
            obj.set_taborder("72");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_index("0");
            obj = new Static("sta_title05", "absolute", "381", "62", "103", "21", null, null, this.div_search);
            obj.set_taborder("73");
            obj.set_text("과세구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_txt_dsc00", "absolute", "484", "62", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("74");
            obj.set_innerdataset("@ds_txt_dsc");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj = new Static("sta_title03", "absolute", "15", "62", "67", "21", null, null, this.div_search);
            obj.set_taborder("75");
            obj.set_text("가격군");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_popup00", "absolute", "329", "10", "22", "21", null, null, this.div_search);
            obj.set_taborder("81");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new CheckBox("CheckBox00", "absolute", "82", "114", "160", "21", null, null, this.div_search);
            obj.set_taborder("85");
            obj.set_text("사후장려금 지급여부");
            obj.set_value("0");
            obj.set_falsevalue("0");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data01", "absolute", "195", "10", "131", "21", null, null, this.div_search);
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
            obj = new Static("Static08", "absolute", "188", "88", "11", "21", null, null, this.div_search);
            obj.set_taborder("94");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_fsrg01", "absolute", "202", "88", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("95");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Edit("edt_data00", "absolute", "82", "10", "110", "21", null, null, this.div_search);
            obj.set_taborder("104");
            obj.set_inputtype("number");
            obj.set_cssclass("WF_Essential");
            obj.set_maxlength("25");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_ctr_list00", "absolute", "82", "36", "244", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("105");
            obj.set_innerdataset("@ds_NABizPlace");
            obj.set_codecolumn("NA_BZPLC");
            obj.set_datacolumn("SHRT_BZPLNM");
            obj = new Combo("cbo_pay_list00", "absolute", "82", "62", "110", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("106");
            obj.set_innerdataset("@ds_qslpr_tpc");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_enable("true");
            obj = new Edit("edt_data02", "absolute", "484", "36", "100", "21", null, null, this.div_search);
            obj.set_taborder("107");
            obj.set_cssclass("WF_Essential");
            obj.style.set_font("8 Gulim");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_data03", "absolute", "587", "36", "131", "21", null, null, this.div_search);
            obj.set_taborder("108");
            obj.set_cssclass("WF_Essential");
            obj.style.set_font("8 Gulim");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_store_chk01", "absolute", "315", "88", "247", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_store_chk01_innerdataset = new Dataset("rdo_store_chk01_innerdataset", this.div_search.rdo_store_chk01);
            rdo_store_chk01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">등록일</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">변경일</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">삭제일</Col></Row></Rows>");
            obj.set_innerdataset(rdo_store_chk01_innerdataset);
            obj.set_taborder("109");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("2");
            obj.set_direction("vertical");
            obj.set_index("1");

            obj = new Div("div_list", "absolute", "0", "173", null, null, "15", "0", this);
            obj.set_taborder("7");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_main00", "absolute", "0", "42", null, null, "0", "0", this.div_list);
            obj.set_taborder("20");
            obj.set_binddataset("ds_hsty");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"220\"/><Column size=\"220\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"260\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"28\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"물류센타\"/><Cell col=\"2\" rowspan=\"2\" text=\"상품\"/><Cell col=\"3\" rowspan=\"2\" text=\"적용일자\"/><Cell col=\"4\" rowspan=\"2\" text=\"매취/&#13;&#10;수탁\"/><Cell col=\"5\" rowspan=\"2\" text=\"가격군&#13;&#10;유형\"/><Cell col=\"6\" rowspan=\"2\" text=\"매입단가\"/><Cell col=\"7\" colspan=\"4\" text=\"수수료율(%)\"/><Cell col=\"11\" rowspan=\"2\" text=\"지급&#13;&#10;기일\"/><Cell col=\"12\" rowspan=\"2\" text=\"발주금지여부\"/><Cell col=\"13\" rowspan=\"2\" text=\"담당바이어\"/><Cell col=\"14\" rowspan=\"2\" text=\"등록/변경/삭제일자\"/><Cell col=\"15\" rowspan=\"2\" text=\"최종사용자\"/><Cell row=\"1\" col=\"7\" text=\"업체\"/><Cell row=\"1\" col=\"8\" text=\"관리\"/><Cell row=\"1\" col=\"9\" text=\"가격정책금\"/><Cell row=\"1\" col=\"10\" text=\"직송\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:NA_BZPLC\"/><Cell col=\"2\" text=\"bind:NA_WRS_C\"/><Cell col=\"3\" rowspan=\"2\" text=\"bind:APL_DT\"/><Cell col=\"4\" text=\"bind:PRGR_C\"/><Cell col=\"5\" rowspan=\"2\" text=\"bind:PGNM\"/><Cell col=\"6\" rowspan=\"2\" displaytype=\"number\" text=\"bind:BYNG_UPR\"/><Cell col=\"7\" rowspan=\"2\" text=\"bind:COMP_FEERT\"/><Cell col=\"8\" rowspan=\"2\" text=\"bind:AMN_FEERT\"/><Cell col=\"9\" rowspan=\"2\" text=\"bind:TROT_FEERT\"/><Cell col=\"10\" rowspan=\"2\" text=\"bind:DDLY_PHD_FEERT\"/><Cell col=\"11\" rowspan=\"2\" text=\"bind:PY_FDTCN\"/><Cell col=\"12\" rowspan=\"2\" text=\"bind:ODR_FBID_YN\" expr=\"expr:ODR_FBID_YN=='1'?'여':'부'\"/><Cell col=\"13\" rowspan=\"2\" text=\"bind:CHRG_BUYER_ENO\"/><Cell col=\"14\" rowspan=\"2\" text=\"bind:DTM\"/><Cell col=\"15\" rowspan=\"2\" text=\"bind:LS_CMENO\"/><Cell row=\"1\" col=\"1\" style=\"align:left;\" text=\"bind:NA_BZPLC_NM\"/><Cell row=\"1\" col=\"2\" style=\"align:left;\" text=\"bind:WRSNM\"/><Cell row=\"1\" col=\"4\" text=\"bind:SPY_TPC_NM\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("btn_toggle00", "absolute", "46.07%", "0", "62", "12", null, null, this.div_list);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);

            obj = new Button("btn_excel00", "absolute", null, "0", "41", "21", "75", null, this);
            obj.set_taborder("11");
            obj.set_text("엑셀");
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

            obj = new Button("btn_print00", "absolute", null, "0", "41", "21", "118", null, this);
            obj.set_taborder("15");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear00", "absolute", null, "0", "53", "21", "161", null, this);
            obj.set_taborder("16");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title01", "absolute", "1.74%", "187", null, "21", "10.46%", null, this);
            obj.set_taborder("17");
            obj.set_text("서버 부하문제로 전체조회시 조회건수를 10,000건으로 제한합니다. 10,000건 이상 조회시 문의바랍니다.");
            obj.set_cssclass("sta_WFSA_Label");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 145, this.div_search,
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
            		p.set_scrollbars("none");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("VAN_DS_SC_1520");
            		p.set_titletext("상품 공급가격 이력");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","div_edit.cbo_txt_dsc","value","ds_txt_dsc","SIMP_CNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","div_edit.cbo_pay","value","ds_pay","SIMP_CNM");
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
        this.addIncludeScript("VAN_DS_SC_1530.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_1530.xfdl", function(exports) {
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
         		{code:"QSLPR_TPC", dsName:"ds_qslpr_tpc", selecttype:"A"}	// 1.가격군
            ];
        	this.gfn_setCommonCode(param);
        	//콤보에 최상단Row보이도록 설정
        	this.div_search.cbo_pay_list00.set_index(0);
        	this.div_search.cbo_txt_dsc00.set_index(0);
        	this.div_search.cal_fsrg00.set_value('19000101');
        	this.div_search.cal_fsrg01.set_value(this.gfn_today('yyyyMMdd'));
        	this.fn_getNABizPlace(application.gv_glnCode);
        	this.div_list.grd_main00.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        	this.div_auth.chk_all.set_readonly(true);
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

        //조회
        this.btn_search00_onclick = function(obj,e)
        {
        	var sto_code = this.gfn_nullToEmpty(this.div_search.edt_data00.value); 			// 1.상품코드
        	var gubun = this.div_search.rdo_store_chk00.value;								// 2.구분
        	var combo_ctr = this.gfn_nullToEmpty(this.div_search.cbo_ctr_list00.value); 	// 3.발주처 콤보
        	var combo_pay = this.gfn_nullToEmpty(this.div_search.cbo_pay_list00.value); 	// 4.가격군 콤보
        	var combo_txt_dsc = this.gfn_nullToEmpty(this.div_search.cbo_txt_dsc00.value); 	// 5.과세구분 콤보
        	var date1 = this.gfn_nullToEmpty(this.div_search.cal_fsrg00.value); 			// 6.조작일시작
        	var date2 = this.gfn_nullToEmpty(this.div_search.cal_fsrg01.value); 			// 7.조작일 끝
        	var fromtordo = this.div_search.rdo_store_chk01.value;							// 8.조작일 라디오 버튼
        	var glncode = this.div_search.edt_data02.value;

        	if (!this.validationchk(date1, date2)) {
        		return;
        	}
        	var sVal = 	"sto_code="+sto_code
        				+" gubun="+gubun
        				+" combo_ctr="+combo_ctr
        				+" combo_pay="+combo_pay
        				+" combo_txt_dsc="+combo_txt_dsc
        				+" fsrg_from="+date1
        				+" fsrg_to="+date2
        				+" fromtordo="+fromtordo
        				+" glncode="+glncode
        				+" TRPL_C="+this.getTrplCode();
        	var sSvcID        = "p_search";//통신아이디
        	var sURL          = "svc::rest/pds/pricat/LifeGoods/retrieveLifeGoodsHistorys";// 호출할 서버 페이지 주소
        	var sInDatasets   = "";//보내는데이터셋
        	var sOutDatasets  = "ds_hsty=ds_hsty";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
        	var sArgument     = sVal;// 파라미터
        	var sCallbackFunc = "fn_callback";//콜백
        	var tranType = "S"; // U:저장/삭제, S:조회

        
        	//API 호출
        	this.gfn_callService(sSvcID, sURL, sInDatasets, sOutDatasets, sArgument, sCallbackFunc, tranType);
        }

        
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
        	this.gfn_callService(sSvcID, sURL, sInDatasets , sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        //Validation Check
        this.validationchk = function(date1,date2)
        {
        	// 상품명 조회일 때
        	if (this.div_search.rdo_store_chk00.value != 1) {
        		var wrsnm = this.div_search.edt_data01.value;
        		if (this.gfn_nullToEmpty(wrsnm) != "" && wrsnm.length < 2) {
        			this.alert(this.gfn_getTextMessage('msg.van_ds_sc_1530.view.wrsnm.moredata'));
        			return false;
        		}
        	}
        	if (date1 == "") {
        		this.alert(this.gfn_getTextMessage('validation.message.fromDate.no.data'));
        		return false;
        	} else if (date2 == "") {
        		this.alert(this.gfn_getTextMessage('validation.message.toDate.no.data'));
        		return false;
        	}
        	/*
        	// 발주처선택 메시지
        	if (this.div_search.cbo_ctr_list00.value == "00") {
        		this.gfn_getMessage('alert', 'msg.van_ds_sc_1520.view.splr.select');
        		return false;
        	}
        	*/

            return true;
        }

        this.fn_callback = function(svcID,nCD,sMSG)//첫번째 인자값은 통신 ID
        {
        	if (nCD < 0) {
        		this.gfn_getMessage("alert", sMSG);
        		return;
        	} else {
        		if (svcID == "initUpTrpl") {
        			this.div_search.edt_data02.set_value(this.ds_uptrpl.getColumn(0, "UP_NA_TRPL_C"));
        			this.div_search.edt_data03.set_value(this.ds_uptrpl.getColumn(0, "TRPL_ABR_NM"));
        		} else if (svcID == "p_search") {
        			if (this.div_list.grd_main00.rowcount < 1) {
        				this.div_list.grd_main00.set_nodatatext(this.gfn_getTextMessage('result.message.search.no.exist.data'));
        			}
        		} else if (svcID == "getNABizPlace") {
        			if (this.ds_NABizPlace.insertRow(0) != -1) {
        				this.ds_NABizPlace.setColumn(0, "NA_BZPLC", "00");
        				this.ds_NABizPlace.setColumn(0, "SHRT_BZPLNM", "- 전체 -");
        			};
        			this.div_search.cbo_ctr_list00.set_index(0);
        		}
        	}
        }

        //조회 조건 숨김 여부 이벤트
        this.div_list_btn_toggle00_onclick = function(obj,e)
        {
        	this.gfn_searchDivResize(obj, this.div_search, this.div_list);
        }

        //상품 조회
        this.div_search_btn_popup00_onclick = function(params)
        {
        	var param = {
        				autoType:params, 
        				searchCode:this.div_search.edt_data00.value, 
        				searchText:this.div_search.edt_data01.value
        	};
        	if (typeof params == "boolean") {
        		if (!this.searPopValue(param)) { return };
        	}
        	var oArg = {paramMode:"U", dsArg:this.Dataset00, autoPop:param};
        	var sOption = "autosize=true, titleText=false";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("wrs_c", "POPUP::POPUP_SRC_WRS.xfdl", oArg, sOption, sPopupCallBack);
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	var arrVal = strVal.split(",");
        	if (strId == "wrs_c") {
        		this.div_search.edt_data00.set_value(arrVal[0]);
        		this.div_search.edt_data01.set_value(arrVal[1]);
        	}
        }

        //엑셀 다운로드 버튼
        this.btn_excel_onclick = function(obj,e)
        {
        	var date1 = this.gfn_nullToEmpty(this.div_search.cal_fsrg00.value);
        	var date2 = this.gfn_nullToEmpty(this.div_search.cal_fsrg01.value);

        	if (!this.validationchk(date1, date2)) {
        		return;
        	}

        	try {

        	var params = "sto_code="+this.gfn_nullToEmpty(this.div_search.edt_data00.value)
        				+"&gubun="+this.div_search.rdo_store_chk00.value
        				+"&combo_ctr="+this.gfn_nullToEmpty(this.div_search.cbo_ctr_list00.value)
        				+"&combo_pay="+this.gfn_nullToEmpty(this.div_search.cbo_pay_list00.value)
        				+"&combo_txt_dsc="+this.gfn_nullToEmpty(this.div_search.cbo_txt_dsc00.value)
        				+"&fsrg_from="+date1
        				+"&fsrg_to="+date2
        				+"&fromtordo="+this.div_search.rdo_store_chk01.value
        				+"&TRPL_C="+this.getTrplCode();

        	if (this.div_list.grd_main00.rowcount < 1) {
        		params += "&glncode=''";
        	} else {
        		params += "&glncode="+this.div_search.edt_data02.value;
        	}
        	excelDownHandler(application.gv_server_url+"rest/excel/downloadExcelLifeGoodsHistorys?"+params, this);
        	} catch(e) {
        		trace(e);
        	}
        }

        this.btn_clear00_onclick = function(obj,e)
        {
        	this.reload();
        }
        //출력
        this.btn_print00_onclick = function(obj,e)
        {
        	if (this.div_list.grd_main00.rowcount < 1) {
        		this.gfn_getMessage('alert', 'result.message.search.no.exist.data');
        		return;
        	}
        	var bz_code = this.gfn_nullToEmpty(this.div_search.edt_data00.value);
        	var sto_gubun = this.div_search.rdo_store_chk00.value;
        	if (sto_gubun == "1") {
        		sto_gubun = "상품코드";
        	} else {
        		sto_gubun = "상품명"
        	}
        	var ctr_val = this.gfn_nullToEmpty(this.div_search.cbo_ctr_list00.value);
        	var pay_val = this.gfn_nullToEmpty(this.div_search.cbo_pay_list00.value);
        	var txt_dsc_val = this.gfn_nullToEmpty(this.div_search.cbo_txt_dsc00.value);
        	var date_from = this.gfn_nullToEmpty(this.div_search.cal_fsrg00.value);
        	var date_to = this.gfn_nullToEmpty(this.div_search.cal_fsrg01.value);

        	var titleForm = this.getTrplCodePrint() + ", 상품코드:"+bz_code+", 구분:"+sto_gubun+", 발주처:"+ctr_val+
        					", 가격군:"+pay_val+", 과세구분:"+txt_dsc_val+", 조작일(From):"+date_from+
        					", 조작일(To):"+date_to
        					;
        	var param = {
        		TRPL_C_TEXT:titleForm, 
        		sto_code:bz_code, 
        		gubun:this.div_search.rdo_store_chk00.value, 
        		combo_ctr:ctr_val, 
        		combo_pay:pay_val, 
        		combo_txt_dsc:txt_dsc_val, 
        		fsrg_from:date_from, 
        		fsrg_to:date_to, 
        		fromtordo:this.div_search.rdo_store_chk01.value, 
        		TRPL_C:this.getTrplCode(), 
        		glncode:this.div_search.edt_data02.value
        	};
        	var ozParam = {
        		sId: 'VAN_DS_SC_1530', 
        		sUrl: '/rest/oz/pds/pricat/LifeGoods/retrieveLifeGoodsHistorys', 
        		paramType: 'param', 
        		sParam: param
        	};
        	this.ozViewer(ozParam);
        }

        this.div_search_edt_data00_onkeydown = function(obj,e)
        {
        	if (e.keycode ==13) {
        		this.div_search_btn_popup00_onclick(true);
        	}
        }

        this.div_search_edt_data01_onkeydown = function(obj,e)
        {
        	if (e.keycode ==13) {
        		this.div_search_btn_popup00_onclick(true);
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_search.rdo_store_chk00.addEventHandler("onitemclick", this.Div00_Radio00_onitemclick, this);
            this.div_search.cbo_txt_dsc00.addEventHandler("onitemchanged", this.Div00_Combo02_onitemchanged, this);
            this.div_search.btn_popup00.addEventHandler("onclick", this.div_search_btn_popup00_onclick, this);
            this.div_search.CheckBox00.addEventHandler("onclick", this.Div00_CheckBox00_onclick, this);
            this.div_search.edt_data01.addEventHandler("onkeydown", this.div_search_edt_data01_onkeydown, this);
            this.div_search.edt_data00.addEventHandler("onkeydown", this.div_search_edt_data00_onkeydown, this);
            this.div_search.cbo_ctr_list00.addEventHandler("onitemchanged", this.Div00_Combo02_onitemchanged, this);
            this.div_search.cbo_pay_list00.addEventHandler("onitemchanged", this.Div00_Combo02_onitemchanged, this);
            this.div_search.rdo_store_chk01.addEventHandler("onitemclick", this.Div00_Radio00_onitemclick, this);
            this.div_list.btn_toggle00.addEventHandler("onclick", this.div_list_btn_toggle00_onclick, this);
            this.btn_excel00.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.btn_search00.addEventHandler("onclick", this.btn_search00_onclick, this);
            this.btn_print00.addEventHandler("onclick", this.btn_print00_onclick, this);
            this.btn_clear00.addEventHandler("onclick", this.btn_clear00_onclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_1530.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
