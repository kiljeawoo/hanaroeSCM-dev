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
                this.set_name("VAN_DS_SC_0370");
                this.set_titletext("미입고 패널티 조회");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Rcv_M", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_BZPLC\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"NA_TEAM_C\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"SLP_DT\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"NA_SLPNO\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"NA_CRC_CAN_DSC\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"BCLNTNM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"NA_DVY_PLASH_SLPNO\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CCLNTNM\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"CNR_DT\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"TRSLPNO\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"RPY_PLA_DT\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"GAM_AM\" type=\"bigdecimal\" size=\"8\" prop=\"\"/><Column id=\"BYNG_VAT\" type=\"bigdecimal\" size=\"8\" prop=\"\"/><Column id=\"TOT_GAM\" type=\"bigdecimal\" size=\"8\" prop=\"\"/><Column id=\"CHRG_TOT\" type=\"bigdecimal\" size=\"8\" prop=\"\"/><Column id=\"VCBT_AM\" type=\"bigdecimal\" size=\"8\" prop=\"\"/><Column id=\"VCBX_AM\" type=\"bigdecimal\" size=\"8\" prop=\"\"/><Column id=\"CBAM\" type=\"bigdecimal\" size=\"8\" prop=\"\"/><Column id=\"NA_TR_DSC\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"ROTS_CTR_DSC\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"MNGT_NA_TRPL_C\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"ACTL_BUYPL_NA_TRPL_C\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"COMP_FEE\" type=\"bigdecimal\" size=\"8\" prop=\"\"/><Column id=\"BYNG_SSDY\" type=\"bigdecimal\" size=\"8\" prop=\"\"/><Column id=\"ETR_AMN_FEE\" type=\"bigdecimal\" size=\"8\" prop=\"\"/><Column id=\"ETR_AMN_VAT\" type=\"bigdecimal\" size=\"8\" prop=\"\"/><Column id=\"SLGT_AMN_FEE\" type=\"bigdecimal\" size=\"8\" prop=\"\"/><Column id=\"PHD_FEE\" type=\"bigdecimal\" size=\"8\" prop=\"\"/><Column id=\"PHD_FEE_VAT\" type=\"bigdecimal\" size=\"8\" prop=\"\"/><Column id=\"TRP_SVC_CST\" type=\"bigdecimal\" size=\"8\" prop=\"\"/><Column id=\"TRP_SVCOS_VAT\" type=\"bigdecimal\" size=\"8\" prop=\"\"/><Column id=\"ETC_FEE\" type=\"bigdecimal\" size=\"8\" prop=\"\"/><Column id=\"ETC_FEE_VAT\" type=\"bigdecimal\" size=\"8\" prop=\"\"/><Column id=\"ADJ_NA_BZPLC\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"ADJ_NA_TRPL_C\" type=\"string\" size=\"32\" prop=\"\"/><Column id=\"FSRGMN_ENO\" type=\"string\" size=\"32\" prop=\"\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"string\" size=\"13\"/><Column id=\"name\" type=\"string\" size=\"13\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"name\">발주일자</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"name\">배송예정일자</Col></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">엑셀버튼명1</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">엑셀버튼명2</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">엑셀버튼명3</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"NAME\">엑셀버튼명4</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_centerNpayPnlt", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SPYPL_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"DVYAA_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"DVY_PLA_SQNO\" type=\"string\" size=\"32\"/><Column id=\"ODRPL_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"NA_WRS_C\" type=\"string\" size=\"32\"/><Column id=\"WRSNM\" type=\"string\" size=\"32\"/><Column id=\"ODR_DT\" type=\"string\" size=\"32\"/><Column id=\"DVY_PLA_DT\" type=\"string\" size=\"32\"/><Column id=\"ODR_QT\" type=\"float\" size=\"8\"/><Column id=\"BYNG_QT\" type=\"float\" size=\"8\"/><Column id=\"UN_STR_QT\" type=\"float\" size=\"8\"/><Column id=\"PNLT_RTO\" type=\"float\" size=\"8\"/><Column id=\"PNLT_AM\" type=\"float\" size=\"8\"/><Column id=\"SIMP_CNM\" type=\"string\" size=\"32\"/><Column id=\"CNF_YN\" type=\"string\" size=\"32\"/><Column id=\"CNF_DTM\" type=\"date\" size=\"6\"/><Column id=\"ODR_AM\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ODR_SLPNO\" type=\"string\" size=\"32\"/><Column id=\"NA_DVY_PLASH_SLPNO\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_uptate_cnf_yn", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SPYPL_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"DVYAA_NA_TRPL_C\" type=\"string\" size=\"32\"/><Column id=\"NA_DVY_PLASH_SLPNO\" type=\"string\" size=\"32\"/><Column id=\"DVY_PLA_SQNO\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div00", "absolute", null, "0", "379", "21", "158", null, this);
            obj.set_taborder("35");
            obj.set_text("Div00");
            obj.set_url("common::AuthorityWorkplace.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "95", "15", null, this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "61", "89", "21", null, null, this.div_search);
            obj.set_taborder("32");
            obj.set_text("적용일");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "10", "89", "21", null, null, this.div_search);
            obj.set_taborder("33");
            obj.set_text("발주번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "15", "35", "124", "21", null, null, this.div_search);
            obj.set_taborder("34");
            obj.set_text("배송예정서번호");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_date", "absolute", "121", "61", "123", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("45");
            obj.set_innerdataset("ds_date");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_value("1");
            obj.set_text("매출일");
            obj.set_index("0");
            obj = new Button("btn_odr_slpno", "absolute", "275", "10", "21", "21", null, null, this.div_search);
            obj.set_taborder("53");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static131", "absolute", "347", "61", "10", "21", null, null, this.div_search);
            obj.set_taborder("54");
            obj.set_text("~");
            this.div_search.addChild(obj.name, obj);
            obj = new Calendar("cal_from", "absolute", "246", "61", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("55");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Calendar("cal_to", "absolute", "357", "61", "100", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            obj.set_taborder("56");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new Static("Static14", "absolute", "121", "31", null, "5", "538", null, this.div_search);
            obj.set_taborder("57");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "120", "56", null, "5", "539", null, this.div_search);
            obj.set_taborder("58");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "122", "0", null, "10", "571", null, this.div_search);
            obj.set_taborder("60");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "121", "82", null, "10", "572", null, this.div_search);
            obj.set_taborder("61");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("btn_dvy_plash_slpno", "absolute", "275", "35", "21", "21", null, null, this.div_search);
            obj.set_taborder("63");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "427", "-2", "30", "95", null, null, this.div_search);
            obj.set_taborder("64");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "458", "10", "67", "21", null, null, this.div_search);
            obj.set_taborder("65");
            obj.set_text("발주처");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Button("Button02", "absolute", "683", "10", "21", "21", null, null, this.div_search);
            obj.set_taborder("67");
            obj.set_cssclass("btn_WF_Searchbtn");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "458", "35", "89", "21", null, null, this.div_search);
            obj.set_taborder("68");
            obj.set_text("구분");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Radio("rdo_confirm", "absolute", "529", "35", "200", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_confirm_innerdataset = new Dataset("rdo_confirm_innerdataset", this.div_search.rdo_confirm);
            rdo_confirm_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미확인</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">확인</Col></Row></Rows>");
            obj.set_innerdataset(rdo_confirm_innerdataset);
            obj.set_taborder("69");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_value("1");
            obj.set_index("0");
            obj = new MaskEdit("msk_odrpl_na_trpl_c", "absolute", "529", "10", "151", "21", null, null, this.div_search);
            obj.set_taborder("71");
            obj.set_mask("#########");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_odr_slpno", "absolute", "121", "10", "151", "21", null, null, this.div_search);
            obj.set_taborder("74");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_dvy_plash_slpno", "absolute", "121", "35", "151", "21", null, null, this.div_search);
            obj.set_taborder("75");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_dvy_plash_slpno00", "absolute", "300", "35", "151", "21", null, null, this.div_search);
            obj.set_taborder("76");
            obj.set_cssclass("WF_Essential");
            obj.set_enable("false");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "1", "30", null, "69", "977", null, this);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "83", "30", null, "69", "888", null, this);
            obj.set_taborder("8");
            obj.set_text("22");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "319", "30", null, "10", "594", null, this);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "319", "61", null, "5", "594", null, this);
            obj.set_taborder("10");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "410", "30", null, "69", "553", null, this);
            obj.set_taborder("11");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "319", "87", null, "10", "594", null, this);
            obj.set_taborder("12");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "788", "1", "15", "490", null, null, this);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "922", "21", "56", "8", null, null, this);
            obj.set_taborder("14");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
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

            obj = new Button("btn_print", "absolute", null, "0", "41", "21", "130", null, this);
            obj.set_taborder("21");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Div("div_list", "absolute", "0", "123", null, null, "15", "0", this);
            obj.set_taborder("0");
            obj.set_text("Div02");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Button("Button10", "absolute", "331", "0", null, "12", "330", null, this.div_list);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_master", "absolute", "0", "40", null, null, "1", "0", this.div_list);
            obj.set_taborder("24");
            obj.set_binddataset("ds_centerNpayPnlt");
            obj.set_summarytype("default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"110\"/><Column size=\"135\"/><Column size=\"152\"/><Column size=\"71\"/><Column size=\"102\"/><Column size=\"73\"/><Column size=\"74\"/><Column size=\"75\"/><Column size=\"76\"/><Column size=\"79\"/><Column size=\"78\"/><Column size=\"79\"/><Column size=\"132\"/><Column size=\"81\"/><Column size=\"169\"/><Column size=\"198\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"발주처\"/><Cell col=\"2\" text=\"상품코드\"/><Cell col=\"3\" text=\"상품명\"/><Cell col=\"4\" text=\"발주일자\"/><Cell col=\"5\" text=\"배송예정일자\"/><Cell col=\"6\" text=\"발주수량\"/><Cell col=\"7\" text=\"입고수량\"/><Cell col=\"8\" text=\"미입고수량\"/><Cell col=\"9\" text=\"패널티율\"/><Cell col=\"10\" text=\"패널티금액\"/><Cell col=\"11\" text=\"미납사유\"/><Cell col=\"12\" text=\"구분\"/><Cell col=\"13\" text=\"미납확인일자\"/><Cell col=\"14\" text=\"발주금액\"/><Cell col=\"15\" text=\"발주번호\"/><Cell col=\"16\" text=\"배송예정번호\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:ODRPL_NA_TRPL_C\"/><Cell col=\"2\" text=\"bind:NA_WRS_C\"/><Cell col=\"3\" text=\"bind:WRSNM\"/><Cell col=\"4\" displaytype=\"date\" text=\"bind:ODR_DT\" mask=\"yyyy-MM-dd\"/><Cell col=\"5\" displaytype=\"date\" text=\"bind:DVY_PLA_DT\" mask=\"yyyy-MM-dd\"/><Cell col=\"6\" text=\"bind:ODR_QT\"/><Cell col=\"7\" text=\"bind:BYNG_QT\"/><Cell col=\"8\" text=\"bind:UN_STR_QT\"/><Cell col=\"9\" text=\"bind:PNLT_RTO\"/><Cell col=\"10\" text=\"bind:PNLT_AM\"/><Cell col=\"11\" text=\"bind:SIMP_CNM\"/><Cell col=\"12\" displaytype=\"button\" edittype=\"button\" text=\"bind:CNF_YN\" expr=\"expr:CNF_YN == 'Y' ? '확인' : '미확인'\"/><Cell col=\"13\" displaytype=\"date\" text=\"bind:CNF_DTM\" mask=\"yyyy-MM-dd\"/><Cell col=\"14\" text=\"bind:ODR_AM\"/><Cell col=\"15\" text=\"bind:ODR_SLPNO\"/><Cell col=\"16\" text=\"bind:NA_DVY_PLASH_SLPNO\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "651", "0", null, "40", "2", null, this.div_list);
            obj.set_taborder("25");
            obj.set_text("40");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "613", "279", null, "69", "350", null, this.div_list);
            obj.set_taborder("29");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);

            obj = new Button("btn_excel", "absolute", null, "0", "53", "21", "75", null, this);
            obj.set_taborder("34");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_Group");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00", "absolute", "672", "60", "110", "87", null, null, this);
            obj.set_text("PopupDiv00");
            obj.style.set_background("azure");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new ListBox("ListBox02", "absolute", "0", "0", "110", "87", null, null, this.PopupDiv00);
            this.PopupDiv00.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_scrollbars("autovert");
            obj.set_innerdataset("@ds_excelBtnList");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");

            obj = new Div("Div01", "absolute", "0", "0", null, "36", "408", null, this);
            obj.set_taborder("36");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 95, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("3");
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
            		p.set_scrollbars("none");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 110, 87, this.PopupDiv00,
            	//-- Layout function
            	function(p) {
            		p.set_text("PopupDiv00");
            		p.style.set_background("azure");
            		p.set_visible("false");

            	}
            );
            this.PopupDiv00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("미입고 패널티 조회");

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
        };
        
        // User Script
        this.addIncludeScript("VAN_DS_SC_0370.xfdl", "lib::comLib.xjs");
        this.registerScript("VAN_DS_SC_0370.xfdl", function() {
        //include "lib::comLib.xjs";

        /* form load */
        this.form_onload = function(obj,e)
        {
        	
        	this.div_list.grd_master.set_nodatatext(this.gfn_getTextMessage("result.message.search.no.exist.data"));
        	
        	this.gfn_setInitForm(obj,e);
        	
        	//권한사업장 콤보박스 변경시 거래처코드 가져오기
        	this.Div00.setFunctionName("fn_afterCall");	
        }

        /* Form Init*/
        this.form_init = function(obj,e)
        {
        	//권한사업장 표시 여부(1:본사)
        	if(application.gv_mbcoType != '1'){
        		this.Div00.visible = false;
        	}	
        }

        //권한사업장 콤보박스 변경시 권한사업장 코드 가져옴
        this.fn_afterCall = function(sVal)
        {
        	trace("권한사업장 콤보박스 변경시 권한사업장 코드 가져옴 ->"+sVal);
        	
        	this.div_search.edt_dvy_plash_slpno00.set_value(sVal);
        	
        	//배송예정서 번호 에디트박스 값 초기화
        	this.div_search.edt_dvy_plash_slpno.set_value("");
        }

        
        /* 페이지 로딩후 실행부분 */
        this.fn_afterFormOnload = function()
        {		
        	this.div_search.cal_from.set_value(this.gfn_minusDate(this.gfn_today("yyyyMMdd"),7));	
        	this.div_search.cal_to.set_value(this.gfn_today("YYYYMMdd"));

        	this.fn_getNABizPlace(application.gv_glnCode);
        	
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
        	
        	return true;
        }

        /* search */
        this.btn_search_onclick = function(obj,e)
        {
        	this.ds_centerNpayPnlt.clearData();
        	
        	if(this.fn_validationCheck()){
        	
        		var trplC = '';
        		var chkAll = '';
        		
        		if(this.Div00.chk_all.value == true){
        			chkAll = 'Y'
        			trplC = application.gv_glnCode;
        		}else{
        			chkAll = 'N'
        			trplC = this.Div00.cbo_authorityWorkplace.value;
        		}
        	
        		var odr_slpno = this.gfn_nullToEmpty(this.div_search.edt_odr_slpno.value);  //발주번호
        		var odrpl_na_trpl_c = this.gfn_nullToEmpty(this.div_search.msk_odrpl_na_trpl_c.value);  //발주처
        		var dvy_plash_slpno = this.gfn_nullToEmpty(this.div_search.edt_dvy_plash_slpno.value);  //배송예정서번호
        		var confirm = this.gfn_nullToEmpty(this.div_search.rdo_confirm.value);  //구분(확인,미확인)
        		var dateCode = this.gfn_nullToEmpty(this.div_search.cbo_date.value);  //일자구분
        		var from_date = this.gfn_nullToEmpty(this.div_search.cal_from.value);  //조회시작일
        		var to_date = this.gfn_nullToEmpty(this.div_search.cal_to.value);  //조회종료일				
        				
        		param = "odr_slpno="+odr_slpno+
        				" odrpl_na_trpl_c="+odrpl_na_trpl_c+
        				" dvy_plash_slpno="+dvy_plash_slpno+
        				" confirm="+confirm+			
        				" dateCode="+dateCode+
        				" from_date="+from_date+
        				" to_date="+to_date+
        				" TRPL_C=" + trplC+
        				" CHK_ALL=" + chkAll;
        						
        		trace("##MASTER##PARAM##->"+param);
        		
        		var sSvcID        = "retrieveCenterNpayPnltList";//통신아이디
        		var sURL          = "svc::rest/delivery/retrieveCenterNpayPnltList";// 호출할 서버 페이지 주소
        		var sInDatasets   = "";//보내는데이터셋
        		var sOutDatasets  = "ds_centerNpayPnlt=ds_centerNpayPnlt";	//화면에서 받는 데이터셋=보낸이름(1대1 맵핑)
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
        		if(svcID == "retrieveCenterNpayPnltList"){
        			
        			//trace(this.ds_Rcv_M.saveXML());							
        							
        			if(this.ds_centerNpayPnlt.rowcount == 0){				
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");								
        			}else{							
        			}			
        		}else if(svcID == "getNABizPlace") {
        			
        			if(this.ds_NABizPlace.rowcount != 0){
        			if (this.ds_NABizPlace.insertRow(0) != -1){
        				this.ds_NABizPlace.setColumn(0,"NA_BZPLC","");
        				this.ds_NABizPlace.setColumn(0,"SHRT_BZPLNM","- 전체 -");
        				};
        			this.div_search.cbo_nacode.set_index(0);
        			}
        		}
        	}
        }

        this.div_list_grd_master_oncellclick = function(obj,e)
        {
        	//구분 컬럼의 버튼 눌렀을경우
        	if(e.col == 12 ){
        		
        		var cnf_yn = this.gfn_nullToEmpty(this.ds_centerNpayPnlt.getColumn(this.ds_centerNpayPnlt.rowposition,"CNF_YN"));	//공급업체확인여부
        		
        		if(cnf_yn == 'N'){
        			var spypl_na_trpl_c = this.gfn_nullToEmpty(this.ds_centerNpayPnlt.getColumn(this.ds_centerNpayPnlt.rowposition,"SPYPL_NA_TRPL_C"));	//공급처경제통합거래처코드
        			var dvyaa_na_trpl_c = this.gfn_nullToEmpty(this.ds_centerNpayPnlt.getColumn(this.ds_centerNpayPnlt.rowposition,"DVYAA_NA_TRPL_C"));  //배송지경제통합거래처코드
        			var na_dvy_plash_slpno = this.gfn_nullToEmpty(this.ds_centerNpayPnlt.getColumn(this.ds_centerNpayPnlt.rowposition,"NA_DVY_PLASH_SLPNO"));  //경제통합배송예정서전표번호
        			var dvy_pla_sqno = this.gfn_nullToEmpty(this.ds_centerNpayPnlt.getColumn(this.ds_centerNpayPnlt.rowposition,"DVY_PLA_SQNO"));  //배송예정일련번호
        			
        			//var cnf_cmeno = application.gv_glnCode; //확인자 번호
        			var cnf_cmeno = "2222"; //확인자 번호
        					
        			var oArg = {SPYPL_NA_TRPL_C_GRID:spypl_na_trpl_c, DVYAA_NA_TRPL_C_GRID:dvyaa_na_trpl_c, NA_DVY_PLASH_SLPNO_GRID:na_dvy_plash_slpno, DVY_PLA_SQNO_GRID:dvy_pla_sqno, CNF_CMENO_POP:cnf_cmeno};
        			var sOption = "autosize=true,title=false";
        			var sPopupCallBack = "fn_popupAfter";    
        			this.gfn_openPopup("VAN_DS_SC_0370","SCM.DELIVERY::VAN_DS_SC_0370_P00.xfdl",oArg,sOption,sPopupCallBack);
        		}else if (cnf_yn == 'Y'){
        			alert("확인이 완료된 건입니다.");
        		}
        		
        	}

        //e.row
         //alert(e.col);
         //alert(e.row);
         
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	//trace(" strId : " + strId + " strVal : " + strVal);
        }

        /*배송예정서 팝업 클릭시*/
        this.div_search_btn_dvy_plash_slpno_onclick = function(obj,e)
        {	
        	var param = "";

        	if(this.div_search.edt_dvy_plash_slpno00.value != null)
        	{ param = this.div_search.edt_dvy_plash_slpno00.value;
        	}
        	else
        	{
        	 param = application.gv_glnCode;
        	}
        	
        	//trace(param);
        	
        	var oArg = {AuthorityNo:param};
        	var sOption = "autosize=true,title=false";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("popId","SCM.DELIVERY::VAN_DS_SC_0370_P01.xfdl",oArg,sOption,sPopupCallBack);	  
        }

        /*발주번호 팝업 클릭시*/
        this.div_search_btn_odr_slpno_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"U"};
        	var sOption = "autosize=true,title=false";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("popId","SCM.ORDER::VAN_DS_SC_0100_P00.xfdl",oArg,sOption,sPopupCallBack);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_Rcv_M.addEventHandler("onrowposchanged", this.ds_Rcv_M_onrowposchanged, this);
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("oninit", this.form_init, this);
            this.div_search.cbo_date.addEventHandler("onitemchanged", this.Div01_Combo02_onitemchanged, this);
            this.div_search.btn_odr_slpno.addEventHandler("onclick", this.div_search_btn_odr_slpno_onclick, this);
            this.div_search.btn_dvy_plash_slpno.addEventHandler("onclick", this.div_search_btn_dvy_plash_slpno_onclick, this);
            this.div_search.Button02.addEventHandler("onclick", this.Div00_Button00_onclick, this);
            this.div_search.rdo_confirm.addEventHandler("onitemclick", this.div_search_Radio01_onitemclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.div_list.grd_master.addEventHandler("oncellclick", this.div_list_grd_master_oncellclick, this);
            this.btn_excel.addEventHandler("onclick", this.btn_excel_onclick, this);
            this.PopupDiv00.ListBox02.addEventHandler("onitemchanged", this.Div00_ListBox02_onitemchanged, this);
            this.PopupDiv00.ListBox02.addEventHandler("onitemclick", this.PopupDiv00_ListBox02_onitemclick, this);

        };

        this.loadIncludeScript("VAN_DS_SC_0370.xfdl");
        this.loadPreloadList();
       
    };
}
)();
