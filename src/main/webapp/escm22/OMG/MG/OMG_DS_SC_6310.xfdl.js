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
                this.set_name("OMG_DS_SC_5060");
                this.set_titletext("메뉴관리조회");
                this._setFormPosition(0,0,803,490);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_menu", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"MENU_SQNO\" type=\"string\" size=\"32\"/><Column id=\"MENU_ID\" type=\"string\" size=\"32\"/><Column id=\"MENU_LVL\" type=\"string\" size=\"32\"/><Column id=\"MENU_MN\" type=\"string\" size=\"32\"/><Column id=\"MENU_PATH\" type=\"string\" size=\"32\"/><Column id=\"UP_MENU_ID\" type=\"string\" size=\"32\"/><Column id=\"SVC_GRPNM\" type=\"string\" size=\"32\"/><Column id=\"FLNM\" type=\"string\" size=\"32\"/><Column id=\"FL_KD\" type=\"string\" size=\"32\"/><Column id=\"SCRN_MRK_YN\" type=\"string\" size=\"32\"/><Column id=\"UYN\" type=\"STRING\" size=\"32\"/><Column id=\"BRO_UYN\" type=\"STRING\" size=\"256\"/><Column id=\"USR_TPC\" type=\"STRING\" size=\"32\"/><Column id=\"BL_UYN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_param", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MENU_SQNO\" type=\"string\" size=\"32\"/><Column id=\"MENU_ID\" type=\"string\" size=\"32\"/><Column id=\"MENU_LVL\" type=\"string\" size=\"32\"/><Column id=\"MENU_MN\" type=\"string\" size=\"32\"/><Column id=\"MENU_PATH\" type=\"string\" size=\"32\"/><Column id=\"UP_MENU_ID\" type=\"string\" size=\"32\"/><Column id=\"SVC_GRPNM\" type=\"string\" size=\"32\"/><Column id=\"FLNM\" type=\"string\" size=\"32\"/><Column id=\"FL_KD\" type=\"string\" size=\"32\"/><Column id=\"SCRN_MRK_YN\" type=\"string\" size=\"32\"/><Column id=\"UYN\" type=\"string\" size=\"32\"/><Column id=\"BRO_UYN\" type=\"STRING\" size=\"32\"/><Column id=\"USR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_admenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_SEQ\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SVC_GRPNM\" type=\"STRING\" size=\"32\"/><Column id=\"FLNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCRN_MRK_YN\" type=\"STRING\" size=\"32\"/><Column id=\"UYN\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("div_list", "absolute", "0", "123", null, null, "15", "0", this);
            obj.set_taborder("0");
            obj.set_text("Div02");
            this.addChild(obj.name, obj);
            obj = new Grid("grd_menuList", "fixed", "0", "71", null, null, "6", "3", this.div_list);
            obj.set_taborder("2");
            obj.set_binddataset("ds_menu");
            obj.set_tabstop("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"90\"/><Column size=\"200\"/><Column size=\"152\"/><Column size=\"111\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"62\"/><Column size=\"83\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"메뉴ID\"/><Cell col=\"1\" text=\"메뉴LEVEL\"/><Cell col=\"2\" text=\"메뉴이름\"/><Cell col=\"3\" text=\"메뉴 경로\"/><Cell col=\"4\" text=\"서비스그룹\"/><Cell col=\"5\" text=\"파일이름\"/><Cell col=\"6\" text=\"화면표시여부\"/><Cell col=\"7\" text=\"사용여부\"/><Cell col=\"8\" text=\"지사사용여부\"/><Cell col=\"9\" text=\"과금여부\"/><Cell col=\"10\" text=\"사용자 유형\"/></Band><Band id=\"body\"><Cell text=\"bind:MENU_ID\"/><Cell col=\"1\" text=\"bind:MENU_LVL\"/><Cell col=\"2\" style=\"align:left middle;\" text=\"bind:MENU_NM\"/><Cell col=\"3\" style=\"align:left middle;\" text=\"bind:MENU_PATH\"/><Cell col=\"4\" style=\"align:left middle;\" text=\"bind:SVC_GRPNM\"/><Cell col=\"5\" text=\"bind:FLNM\"/><Cell col=\"6\" text=\"bind:SCRN_MRK_YN\"/><Cell col=\"7\" text=\"bind:UYN\"/><Cell col=\"8\" text=\"bind:BRO_UYN\"/><Cell col=\"9\" text=\"expr:BL_UYN == 'Y' ? '여' : '부'\"/><Cell col=\"10\" text=\"bind:USR_TPC\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Grid("grd_admMenuList", "absolute", "0", "71", null, null, "12", "9", this.div_list);
            obj.set_taborder("8");
            obj.set_binddataset("ds_admenu");
            obj.set_useselcolor("true");
            obj.set_visible("false");
            obj.set_tabstop("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"90\"/><Column size=\"181\"/><Column size=\"238\"/><Column size=\"139\"/><Column size=\"155\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"메뉴ID\"/><Cell col=\"1\" text=\"메뉴LEVEL\"/><Cell col=\"2\" text=\"메뉴이름\"/><Cell col=\"3\" text=\"메뉴 경로\"/><Cell col=\"4\" text=\"서비스그룹\"/><Cell col=\"5\" text=\"파일 이름\"/><Cell col=\"6\" text=\"화면표시여부\"/><Cell col=\"7\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:MENU_ID\"/><Cell col=\"1\" text=\"bind:MENU_LVL\"/><Cell col=\"2\" style=\"align:left middle;\" text=\"bind:MENU_NM\"/><Cell col=\"3\" style=\"align:left middle;\" text=\"bind:MENU_PATH\"/><Cell col=\"4\" edittype=\"none\" style=\"align:left middle;\" text=\"bind:SVC_GRPNM\"/><Cell col=\"5\" text=\"bind:FLNM\"/><Cell col=\"6\" text=\"bind:SCRN_MRK_YN\"/><Cell col=\"7\" text=\"bind:UYN\"/></Band></Format></Formats>");
            this.div_list.addChild(obj.name, obj);
            obj = new Button("Button75", "absolute", "363", "29", null, "12", "362", null, this.div_list);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WFSA_SearchClose");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "922", "1", "56", "15", null, null, this.div_list);
            obj.set_taborder("5");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "922", "37", "56", "5", null, null, this.div_list);
            obj.set_taborder("6");
            obj.set_text("5");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_list.addChild(obj.name, obj);
            obj = new Static("rowCount", "absolute", null, "11", "268", "21", "5", null, this.div_list);
            obj.set_taborder("7");
            obj.set_usedecorate("true");
            obj.style.set_align("right middle");
            obj.set_visible("false");
            this.div_list.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", null, "0", "58", "21", "15", null, this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WFSA_Searchbtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert", "absolute", null, "0", "41", "21", "78", null, this);
            obj.set_taborder("37");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "0", "0", null, "21", "563", null, this);
            obj.set_taborder("68");
            obj.set_text("Div01");
            obj.set_url("common::location.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "788", "0", "15", "490", null, null, this);
            obj.set_taborder("71");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#00ffffb5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "732", "21", "56", "8", null, null, this);
            obj.set_taborder("72");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_search", "absolute", "0", "29", null, "124", "15", null, this);
            obj.set_taborder("85");
            obj.set_cssclass("div_WFSA_Searchbg");
            obj.set_enable("true");
            this.addChild(obj.name, obj);
            obj = new Edit("edt_menuId", "absolute", "118", "10", "140", "21", null, null, this.div_search);
            obj.set_taborder("76");
            obj.set_maxlength("8");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "10", "103", "21", null, null, this.div_search);
            obj.set_taborder("77");
            obj.set_text("메뉴ID");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "15", "38", "103", "21", null, null, this.div_search);
            obj.set_taborder("78");
            obj.set_text("서비스그룹");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("Edit01", "absolute", "306", "36", "0", "21", null, null, this.div_search);
            obj.set_taborder("79");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "288", "10", "105", "21", null, null, this.div_search);
            obj.set_taborder("82");
            obj.set_text("메뉴LEVEL");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "288", "38", "105", "21", null, null, this.div_search);
            obj.set_taborder("83");
            obj.set_text("파일이름");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "551", "10", "79", "21", null, null, this.div_search);
            obj.set_taborder("85");
            obj.set_text("메뉴이름");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "551", "37", "79", "21", null, null, this.div_search);
            obj.set_taborder("86");
            obj.set_text("파일종류");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_menuName", "absolute", "627", "10", "140", "21", null, null, this.div_search);
            obj.set_taborder("88");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "15", "66", "103", "21", null, null, this.div_search);
            obj.set_taborder("89");
            obj.set_text("화면표시여부");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("Edit04", "absolute", "306", "62", "0", "21", null, null, this.div_search);
            obj.set_taborder("90");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_displayYn", "absolute", "118", "64", "140", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_displayYn_innerdataset = new Dataset("cbo_displayYn_innerdataset", this.div_search.cbo_displayYn);
            cbo_displayYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">표시</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미표시</Col></Row></Rows>");
            obj.set_innerdataset(cbo_displayYn_innerdataset);
            obj.set_taborder("91");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("0");
            obj.set_text("전체");
            obj.set_index("0");
            obj = new Static("Static07", "absolute", "551", "64", "79", "21", null, null, this.div_search);
            obj.set_taborder("92");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_useYn", "absolute", "627", "64", "140", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_useYn_innerdataset = new Dataset("cbo_useYn_innerdataset", this.div_search.cbo_useYn);
            cbo_useYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(cbo_useYn_innerdataset);
            obj.set_taborder("93");
            obj.set_value("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_text("전체");
            obj.set_index("0");
            obj = new Edit("edt_svcGroup", "absolute", "118", "37", "140", "21", null, null, this.div_search);
            obj.set_taborder("94");
            this.div_search.addChild(obj.name, obj);
            obj = new Edit("edt_fileName", "absolute", "383", "37", "140", "21", null, null, this.div_search);
            obj.set_taborder("95");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_menuLevel", "absolute", "383", "10", "140", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_menuLevel_innerdataset = new Dataset("cbo_menuLevel_innerdataset", this.div_search.cbo_menuLevel);
            cbo_menuLevel_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">9</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">대메뉴</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">중메뉴</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">소메뉴</Col></Row></Rows>");
            obj.set_innerdataset(cbo_menuLevel_innerdataset);
            obj.set_taborder("96");
            obj.set_value("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_text("전체");
            obj.set_index("0");
            obj = new Edit("edt_fileType", "absolute", "627", "37", "140", "21", null, null, this.div_search);
            obj.set_taborder("97");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "288", "66", "105", "21", null, null, this.div_search);
            obj.set_taborder("98");
            obj.set_text("지사사용여부");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cbo_broYn", "absolute", "383", "64", "140", "21", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cbo_broYn_innerdataset = new Dataset("cbo_broYn_innerdataset", this.div_search.cbo_broYn);
            cbo_broYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(cbo_broYn_innerdataset);
            obj.set_taborder("99");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_text("전체");
            obj.set_index("0");
            obj = new Radio("rdo_useradmin", "absolute", "118", "91", "159", "29", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var rdo_useradmin_innerdataset = new Dataset("rdo_useradmin_innerdataset", this.div_search.rdo_useradmin);
            rdo_useradmin_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">사용자</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">관리자</Col></Row></Rows>");
            obj.set_innerdataset(rdo_useradmin_innerdataset);
            obj.set_taborder("100");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.style.set_textpadding("0 20 0 8");
            obj.set_enable("true");
            obj.set_index("0");
            obj = new Static("Static09", "absolute", "15", "94", "103", "21", null, null, this.div_search);
            obj.set_taborder("102");
            obj.set_text("사용자 여부");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "288", "94", "105", "21", null, null, this.div_search);
            obj.set_taborder("103");
            obj.set_text("사용자 유형");
            obj.set_cssclass("sta_WFSA_Label");
            this.div_search.addChild(obj.name, obj);
            obj = new Combo("cmb_usr_tpc", "absolute", "383", "89", "200", "25", null, null, this.div_search);
            this.div_search.addChild(obj.name, obj);
            var cmb_usr_tpc_innerdataset = new Dataset("cmb_usr_tpc_innerdataset", this.div_search.cmb_usr_tpc);
            cmb_usr_tpc_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">협력업체</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">본부</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">하나로마트</Col></Row><Row><Col id=\"codecolumn\">04</Col><Col id=\"datacolumn\">세금계산서전용</Col></Row><Row><Col id=\"codecolumn\">05</Col><Col id=\"datacolumn\">전자계약전용</Col></Row></Rows>");
            obj.set_innerdataset(cmb_usr_tpc_innerdataset);
            obj.set_taborder("104");
            obj.set_value("01");
            obj.set_text("협력업체");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displayrowcount("10");
            obj.style.set_cursor("hand");
            obj.set_index("0");

            obj = new Static("Static00", "absolute", "523", "31", "30", "67", null, null, this);
            obj.set_taborder("84");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "1", "30", "15", "67", null, null, this);
            obj.set_taborder("86");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "732", "153", "56", "41", null, null, this);
            obj.set_taborder("87");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "259", "29", "30", "67", null, null, this);
            obj.set_taborder("88");
            obj.set_text("30");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.div_list,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("0");
            		p.set_text("Div02");

            	}
            );
            this.div_list.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 124, this.div_search,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("85");
            		p.set_cssclass("div_WFSA_Searchbg");
            		p.set_enable("true");

            	}
            );
            this.div_search.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("메뉴관리조회");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","divSearch.edt_menuId","value","ds_in","MENU_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","divSearch.cbo_menuLevel","value","ds_in","MENU_LEVEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","divSearch.edt_menuName","value","ds_in","MENU_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","divSearch.edt_svcGroup","value","ds_in","SVC_GROUP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","divSearch.edt_fileName","value","ds_in","FILE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","divSearch.edt_fileType","value","ds_in","FILE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","divSearch.cbo_displayYn","value","ds_in","DISPLAY_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","divSearch.cbo_useYn","value","ds_in","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "common::location.xfdl");
        };
        
        // User Script
        this.addIncludeScript("OMG_DS_SC_6310.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_6310.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {   
           this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
           //페이지 로딩후 실행부분   
           /*초기값세팅*/   
           this.div_search.cbo_menuLevel.set_index(0);
           this.div_search.cbo_displayYn.set_index(0);
           this.div_search.cbo_useYn.set_index(0);
           this.div_search.cbo_broYn.set_index(0);
           
           /*조회 호출*/
           this.btn_search.click();  
        }

         /*조회*/
        this.btn_search_onclick = function(obj,e)
        {
        	if (this.div_search.rdo_useradmin.value == "1") {
        		//사용자 선택하고 조회했을 때
        		var sParams = "menu_id="+this.gfn_nullToEmpty(this.div_search.edt_menuId.value)
        				+ " menu_lvl="+this.gfn_nullToEmpty(this.div_search.cbo_menuLevel.value)
        				+ " menu_name="+this.gfn_nullToEmpty(this.div_search.edt_menuName.value)
        				+ " svc_group="+this.gfn_nullToEmpty(this.div_search.edt_svcGroup.value)
        				+ " flnm="+this.gfn_nullToEmpty(this.div_search.edt_fileName.value)
        				+ " fl_kd="+this.gfn_nullToEmpty(this.div_search.edt_fileType.value)
        				+ " scrn_mrk_yn="+this.gfn_nullToEmpty(this.div_search.cbo_displayYn.value)
        				+ " use_yn="+this.gfn_nullToEmpty(this.div_search.cbo_useYn.value) 
        				+ " bro_yn="+this.gfn_nullToEmpty(this.div_search.cbo_broYn.value) 
        				+ " usr_tpc="+this.div_search.cmb_usr_tpc.value  //01:협력업체 02:본부 03:하나로마트 04:세금계산서 전용
        				;

        		var sSvcID        = "menuList";
        		var sURL          ="svc::rest/mg/retrieveMenuList";	
        		var sInDatasets   = "";
        		var sOutDatasets  = "ds_menu=ds_menu";	
        		var sArgument     = sParams;
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        			
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	} else {
        		// 관리자로 선택하고 조회했을 때
        		var sParams = "menu_id="+this.gfn_nullToEmpty(this.div_search.edt_menuId.value)
        				+ " menu_lvl="+this.gfn_nullToEmpty(this.div_search.cbo_menuLevel.value)
        				+ " menu_name="+this.gfn_nullToEmpty(this.div_search.edt_menuName.value)
        				+ " svc_group="+this.gfn_nullToEmpty(this.div_search.edt_svcGroup.value)
        				+ " flnm="+this.gfn_nullToEmpty(this.div_search.edt_fileName.value)
        				+ " scrn_mrk_yn="+this.gfn_nullToEmpty(this.div_search.cbo_displayYn.value)
        				+ " use_yn="+this.gfn_nullToEmpty(this.div_search.cbo_useYn.value) 
        				;

        		var sSvcID        = "adminmenuList";
        		var sURL          ="svc::rest/mg/retrieveadminMenuList";	
        		var sInDatasets   = "";
        		var sOutDatasets  = "ds_admenu=ds_admenu";	
        		var sArgument     = sParams;
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "S"; // U:저장/삭제, S:조회
        			
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        /*등록*/
        this.btn_insert_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"U", dsArg:""};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("popId","OMG.MG::OMG_DS_SC_6311.xfdl",oArg,sOption,sPopupCallBack);	
        }

        /*팝업호출확인하기*/
        this.fn_popupAfter = function(strId,strVal)
        {	
        	this.btn_search.click();  
        }

         /*체크박스선택시 이벤트*/
        this.Div02_Grid01_onheadclick = function(obj,e)
        {
        	if (e.cell == 0) {
        		this.gfn_setGridCheckAll(obj,e);
        	}
        }

         /*콜백메소드*/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        	this.ds_menu.addColumn("CHK", "string");
        	for (var i = 0 ; i < this.ds_menu.rowcount; i++) {
        		this.ds_menu.setColumn(i,"CHK", 0);
        	}
        	
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	} else {
        		if (svcID == "menuList") {
        			if (this.ds_menu.rowcount == 0) {
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			}
        		} else {
        			if (this.ds_menu.rowcount == 0) {
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        			}
        		}
        	}	
        }

        this.div_search_rdo_useradmin_onitemchanged = function(obj,e)
        {
        	if (this.div_search.rdo_useradmin.value == "1") {    //사용자 선택시
        		this.div_search.cmb_usr_tpc.set_enable(true);   //사용자 유형 enable true
        		this.div_list.grd_menuList.set_visible(true);  //사용자 그리드 visible
        		this.div_list.grd_admMenuList.set_visible(false);
        	} else if(this.div_search.rdo_useradmin.value == "2") { // 관리자 선택시
        		this.div_search.cmb_usr_tpc.set_enable(false);	//사용자 유형 enable flase
        		this.div_list.grd_menuList.set_visible(false);  //관리자 그리드 visible
        		this.div_list.grd_admMenuList.set_visible(true);
        		this.btn_search_onclick();
        	}
        }

        /*그리드 클릭하여 해당 셀 수정*/
        this.div_list_grd_menuList_oncellclick = function(obj,e)
        {
        	this.ds_param.clearData();
        	this.ds_param.insertRow(0);				
        	this.ds_param.copyRow(0,this.ds_menu,e.row);		
        	
        	var oArg = {paramMode:"S", isAdmin:"N", dsArg:this.ds_param};				
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";  
        	this.gfn_openPopup("popId","OMG.MG::OMG_DS_SC_6311.xfdl",oArg,sOption,sPopupCallBack);	
        }

        this.div_list_grd_admMenuList_oncellclick = function(obj,e)
        {
        	this.ds_param.clearData();
        	this.ds_param.insertRow(0);				
        	this.ds_param.copyRow(0,this.ds_admenu,e.row);		
        	
        	var oArg = {paramMode:"S", isAdmin:"Y", dsArg:this.ds_param};				
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";  
        	this.gfn_openPopup("popId","OMG.MG::OMG_DS_SC_6311.xfdl",oArg,sOption,sPopupCallBack);	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.div_list.grd_menuList.addEventHandler("onheadclick", this.Div02_Grid01_onheadclick, this);
            this.div_list.grd_menuList.addEventHandler("oncellclick", this.div_list_grd_menuList_oncellclick, this);
            this.div_list.grd_admMenuList.addEventHandler("onheadclick", this.Div02_Grid01_onheadclick, this);
            this.div_list.grd_admMenuList.addEventHandler("oncellclick", this.div_list_grd_admMenuList_oncellclick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.btn_insert.addEventHandler("onclick", this.btn_insert_onclick, this);
            this.div_search.cbo_menuLevel.addEventHandler("onitemchanged", this.Div00_Combo00_onitemchanged, this);
            this.div_search.cbo_broYn.addEventHandler("onitemchanged", this.Div00_Combo00_onitemchanged, this);
            this.div_search.rdo_useradmin.addEventHandler("onitemchanged", this.div_search_rdo_useradmin_onitemchanged, this);
            this.div_search.cmb_usr_tpc.addEventHandler("onitemchanged", this.div_search_cmb_usr_tpc_onitemchanged, this);
            this.Static04.addEventHandler("onclick", this.Static04_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_6310.xfdl", true);
        this.loadPreloadList();
       
    };
}
)();
