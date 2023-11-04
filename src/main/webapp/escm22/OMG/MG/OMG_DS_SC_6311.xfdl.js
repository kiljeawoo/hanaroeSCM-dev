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
                this.set_name("OMG_DS_SC_5061");
                this.set_titletext("메뉴관리상세");
                this.set_cssclass("frm_WF_PopupBg");
                this._setFormPosition(0,0,872,415);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_in", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MENU_SQNO\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_PATH\" type=\"STRING\" size=\"32\"/><Column id=\"UP_MENU_ID\" type=\"STRING\" size=\"32\"/><Column id=\"SVC_GRPNM\" type=\"STRING\" size=\"32\"/><Column id=\"FLNM\" type=\"STRING\" size=\"32\"/><Column id=\"FL_KD\" type=\"STRING\" size=\"32\"/><Column id=\"SCRN_MRK_YN\" type=\"STRING\" size=\"32\"/><Column id=\"UYN\" type=\"STRING\" size=\"32\"/><Column id=\"BRO_UYN\" type=\"STRING\" size=\"32\"/><Column id=\"UPUP_MENU_ID\" type=\"STRING\" size=\"32\"/><Column id=\"USR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"ADMIN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BL_UYN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_dupCheck", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DUP_CHECK\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_lcMenu", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"string\" size=\"32\"/><Column id=\"MENU_NM\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_mcMenu", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"string\" size=\"32\"/><Column id=\"MENU_NM\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_param", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"UP_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_GRPNM\" type=\"STRING\" size=\"256\"/><Column id=\"FLNM\" type=\"STRING\" size=\"256\"/><Column id=\"FL_KD\" type=\"STRING\" size=\"256\"/><Column id=\"SCRN_MRK_YN\" type=\"STRING\" size=\"256\"/><Column id=\"UYN\" type=\"STRING\" size=\"256\"/><Column id=\"BRO_UYN\" type=\"STRING\" size=\"256\"/><Column id=\"UPUP_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USR_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"ADMIN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BL_UYN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_menuId", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_menuId00", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Edit("edt_isadmin", "absolute", "467", "380", "58", "28", null, null, this);
            obj.set_taborder("145");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_upMenu02", "absolute", "348", "380", "112", "28", null, null, this);
            obj.set_taborder("125");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_upMenu01", "absolute", "236", "380", "94", "28", null, null, this);
            obj.set_taborder("126");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_DupCheck", "absolute", "116", "380", "58", "28", null, null, this);
            obj.set_taborder("120");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_finalMenuId", "absolute", "56", "380", "58", "28", null, null, this);
            obj.set_taborder("119");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "126", "161", null, "29", "17", null, this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "126", "189", null, "29", "17", null, this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static54", "absolute", "126", "245", null, "29", "17", null, this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static57", "absolute", "126", "273", null, "29", "17", null, this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static58", "absolute", "126", "301", null, "29", "17", null, this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "126", "329", null, "29", "17", null, this);
            obj.set_taborder("79");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "126", "105", null, "29", "17", null, this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("upper_level1", "absolute", "126", "133", null, "29", "17", null, this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", null, "47", "41", "21", "13", null, this);
            obj.set_taborder("10");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("text_title", "absolute", "17", "51", "135", "21", null, null, this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.set_text("메뉴관리");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "17", "105", "110", "29", null, null, this);
            obj.set_taborder("12");
            obj.set_text("메뉴레벨");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "17", "133", "110", "29", null, null, this);
            obj.set_taborder("13");
            obj.set_text("상위메뉴");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "17", "161", "110", "29", null, null, this);
            obj.set_taborder("16");
            obj.set_text("메뉴ID");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static55", "absolute", "17", "273", "110", "29", null, null, this);
            obj.set_taborder("24");
            obj.set_text("파일종류");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_upperMenu01", "absolute", "130", "137", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("29");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_codecolumn("MENU_ID");
            obj.set_datacolumn("MENU_NM");
            obj.set_innerdataset("@ds_lcMenu");

            obj = new Static("Static00", "absolute", "750", "76", "17", "67", null, null, this);
            obj.set_taborder("70");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "673", "32", "91", "15", null, null, this);
            obj.set_taborder("71");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "0", "128", "17", "67", null, null, this);
            obj.set_taborder("72");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "674", "68", "91", "8", null, null, this);
            obj.set_taborder("73");
            obj.set_text("8");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "0", "0", "345", "32", null, null, this);
            obj.set_taborder("74");
            obj.set_text("메뉴관리");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.addChild(obj.name, obj);

            obj = new Button("brn_cls", "absolute", "825", "0", "37", "32", null, null, this);
            obj.set_taborder("75");
            obj.set_cssclass("btn_WF_PopupClose");
            this.addChild(obj.name, obj);

            obj = new Static("Static56", "absolute", "17", "301", "110", "29", null, null, this);
            obj.set_taborder("76");
            obj.set_text("메뉴경로");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "17", "329", "110", "29", null, null, this);
            obj.set_taborder("77");
            obj.set_text("화면표시여부");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "17", "357", "110", "29", null, null, this);
            obj.set_taborder("78");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_displyYn", "absolute", "130", "333", "158", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_displyYn_innerdataset = new Dataset("rdo_displyYn_innerdataset", this.rdo_displyYn);
            rdo_displyYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">여</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">부</Col></Row></Rows>");
            obj.set_innerdataset(rdo_displyYn_innerdataset);
            obj.set_taborder("81");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("N");
            obj.set_direction("vertical");
            obj.set_index("1");

            obj = new Button("btn_dupCheck", "absolute", "551", "165", "65", "21", null, null, this);
            obj.set_taborder("83");
            obj.set_text("중복확인");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_upperMenu02", "absolute", "263", "137", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("84");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_codecolumn("MENU_ID");
            obj.set_datacolumn("MENU_NM");
            obj.set_innerdataset("@ds_mcMenu");
            obj.set_index("-1");

            obj = new Static("Static17", "absolute", "259", "167", "9", "19", null, null, this);
            obj.set_taborder("86");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "404", "167", "9", "19", null, null, this);
            obj.set_taborder("87");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", null, "47", "43", "21", "55", null, this);
            obj.set_taborder("95");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_menuId01", "absolute", "130", "165", "122", "21", null, null, this);
            obj.set_readonly("true");
            obj.set_taborder("99");
            obj.set_maxlength("2");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_menuId02", "absolute", "273", "165", "123", "21", null, null, this);
            obj.set_readonly("true");
            obj.set_taborder("100");
            obj.set_maxlength("3");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_menuId03", "absolute", "419", "165", "122", "21", null, null, this);
            obj.set_readonly("true");
            obj.set_taborder("101");
            obj.set_maxlength("3");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fileType", "absolute", "130", "277", "122", "21", null, null, this);
            obj.set_taborder("104");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_menuName", "absolute", "130", "193", "122", "21", null, null, this);
            obj.set_taborder("106");
            obj.set_lengthunit("utf8");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_menuLevel", "absolute", "130", "109", "128", "21", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_menuLevel_innerdataset = new Dataset("cbo_menuLevel_innerdataset", this.cbo_menuLevel);
            cbo_menuLevel_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">대메뉴</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">중메뉴</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">소메뉴</Col></Row></Rows>");
            obj.set_innerdataset(cbo_menuLevel_innerdataset);
            obj.set_taborder("113");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("true");
            obj.set_value("0");

            obj = new Edit("edt_menuPath", "absolute", "130", "305", "449", "21", null, null, this);
            obj.set_taborder("114");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_clickDupBtn", "absolute", "176", "380", "58", "28", null, null, this);
            obj.set_taborder("121");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "126", "357", null, "29", "17", null, this);
            obj.set_taborder("122");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static46", "absolute", "17", "245", "110", "29", null, null, this);
            obj.set_taborder("123");
            obj.set_text("파일이름");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_fileName", "absolute", "130", "249", "266", "21", null, null, this);
            obj.set_taborder("124");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_useYn", "absolute", "130", "362", "158", "21", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_useYn_innerdataset = new Dataset("rdo_useYn_innerdataset", this.rdo_useYn);
            rdo_useYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">사용안함</Col></Row></Rows>");
            obj.set_innerdataset(rdo_useYn_innerdataset);
            obj.set_taborder("82");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("N");
            obj.set_direction("vertical");
            obj.set_index("1");

            obj = new Static("Static11", "absolute", "50.2%", "357", null, "29", "35.46%", null, this);
            obj.set_taborder("127");
            obj.set_text("자사사용여부");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_broUyn", "absolute", "64.93%", "362", null, "21", "14.47%", null, this);
            this.addChild(obj.name, obj);
            var rdo_broUyn_innerdataset = new Dataset("rdo_broUyn_innerdataset", this.rdo_broUyn);
            rdo_broUyn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">사용안함</Col></Row></Rows>");
            obj.set_innerdataset(rdo_broUyn_innerdataset);
            obj.set_taborder("128");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("N");
            obj.set_direction("vertical");
            obj.set_index("1");

            obj = new Static("Static24", "absolute", "17", "189", "110", "29", null, null, this);
            obj.set_taborder("131");
            obj.set_text("메뉴이름");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static53", "absolute", "16.43%", "217", null, "29", "2.22%", null, this);
            obj.set_taborder("134");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_svcGroup", "absolute", "130", "221", "122", "21", null, null, this);
            obj.set_taborder("135");
            this.addChild(obj.name, obj);

            obj = new Static("Static45", "absolute", "17", "217", "110", "29", null, null, this);
            obj.set_taborder("136");
            obj.set_text("서비스그룹");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "126", "77", null, "29", "17", null, this);
            obj.set_taborder("141");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "17", "77", "110", "29", null, null, this);
            obj.set_taborder("142");
            obj.set_text("사용자 여부");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "282", "77", "91", "29", null, null, this);
            obj.set_taborder("143");
            obj.set_text("사용자 유형");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_useradmin", "absolute", "136", "78", "159", "29", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_useradmin_innerdataset = new Dataset("rdo_useradmin_innerdataset", this.rdo_useradmin);
            rdo_useradmin_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">사용자</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">관리자</Col></Row></Rows>");
            obj.set_innerdataset(rdo_useradmin_innerdataset);
            obj.set_taborder("137");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("1");
            obj.set_direction("vertical");
            obj.style.set_textpadding("0 20 0 8");
            obj.set_index("0");

            obj = new Radio("rdo_usrTpc", "absolute", "381", "78", "539", "29", null, null, this);
            this.addChild(obj.name, obj);
            var rdo_usrTpc_innerdataset = new Dataset("rdo_usrTpc_innerdataset", this.rdo_usrTpc);
            rdo_usrTpc_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">협력업체</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">본부</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">하나로마트</Col></Row><Row><Col id=\"codecolumn\">04</Col><Col id=\"datacolumn\">세금계산서전용</Col></Row><Row><Col id=\"codecolumn\">05</Col><Col id=\"datacolumn\">전자계약전용</Col></Row></Rows>");
            obj.set_innerdataset(rdo_usrTpc_innerdataset);
            obj.set_enable("true");
            obj.set_taborder("144");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.style.set_textpadding("0 20 0 8");
            obj.set_value("01");
            obj.set_index("0");

            obj = new Radio("rdo_blUyn", "absolute", "64.93%", "334", null, "21", "14.47%", null, this);
            this.addChild(obj.name, obj);
            var rdo_blUyn_innerdataset = new Dataset("rdo_blUyn_innerdataset", this.rdo_blUyn);
            rdo_blUyn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">여</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">부</Col></Row></Rows>");
            obj.set_innerdataset(rdo_blUyn_innerdataset);
            obj.set_taborder("146");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("N");
            obj.set_direction("vertical");
            obj.set_index("1");

            obj = new Static("Static18", "absolute", "50.2%", "329", null, "29", "35.46%", null, this);
            obj.set_taborder("147");
            obj.set_text("과금메뉴여부");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 872, 415, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("popup01");
            		p.set_titletext("메뉴관리상세");
            		p.set_cssclass("frm_WF_PopupBg");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item3","edt_svcGroup","value","ds_in","SVC_GRPNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_fileName","value","ds_in","FLNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","edt_DupCheck","value","ds_dupCheck","DUP_CHECK");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_menuName","value","ds_in","MENU_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edt_fileType","value","ds_in","FL_KD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","rdo_displyYn","value","ds_in","SCRN_MRK_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","rdo_useYn","value","ds_in","UYN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edt_menuPath","value","ds_in","MENU_PATH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","cbo_menuLevel","value","ds_in","MENU_LVL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","rdo_broUyn","value","ds_in","BRO_UYN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","rdo_blUyn","value","ds_in","BL_UYN");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_6311.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_6311.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
           this.gfn_setInitForm(obj, e); //공통
        };

        this.fn_afterFormOnload = function()
        {
        	
             //페이지 로딩후 실행부분      
        	var fv_paramMode = this.getOwnerFrame().paramMode;		
        	
        	//중복체크 초기값세팅
        	this.edt_clickDupBtn.set_value("N");
        	this.edt_DupCheck.set_value("N");
        			
        	if(fv_paramMode == "S" ){	
        		this.cbo_menuLevel.set_readonly(true);
        		this.cbo_upperMenu01.set_readonly(true);
        		this.cbo_upperMenu02.set_readonly(true);
        		this.btn_dupCheck.set_visible(false);
        		
        		this.search();  
        	
        	}else if(fv_paramMode == "U"){		
        		this.cbo_menuLevel.set_index(0);	
        		this.edt_menuId01.set_readonly(false);
        		this.edt_isadmin.set_value("N");
        		this.edt_menuId02.set_value("000");
        		this.edt_menuId03.set_value("000");	
        		
        		/*대메뉴,중메뉴 콤보내용 전체 세팅*/
        		this.ds_mcMenu.insertRow(0);			
        		this.ds_mcMenu.setColumn(0,"MENU_NM","전체");
        		this.ds_mcMenu.setColumn(0,"MENU_ID","0");
        		this.cbo_upperMenu01.set_index(0);	
        		this.cbo_upperMenu02.set_index(0);
        	}
        }

         
         
        /*등록*/
        this.insert = function()
        {
        	if(this.rdo_useradmin.value == "1"){ //사용자 메뉴 등록
        		if(confirm("정말로 저장하시겠습니까?\n확인 후에는 변경이 불가합니다.")){
        			if(this.fn_validationCheck()){
        				
        				var sMenuId = this.gfn_nullToEmpty(this.edt_menuId01.value) + this.gfn_nullToEmpty(this.edt_menuId02.value) + this.gfn_nullToEmpty(this.edt_menuId03.value);			
        				var sUpperId ;
        				if(this.cbo_menuLevel.value =="1"){
        					sUpperId = this.cbo_upperMenu01.value;
        				}else if(this.cbo_menuLevel.value =="2"){
        					sUpperId = this.cbo_upperMenu02.value;
        				}else{
        					sUpperId = "";
        				}
        				this.ds_param.addRow();
        				this.ds_param.setColumn(0,"MENU_ID",sMenuId);
        				this.ds_param.setColumn(0,"MENU_LVL",this.gfn_nullToEmpty(this.cbo_menuLevel.value));
        				this.ds_param.setColumn(0,"MENU_NM",this.gfn_nullToEmpty(this.edt_menuName.value));
        				this.ds_param.setColumn(0,"MENU_PATH",this.gfn_nullToEmpty(this.edt_menuPath.value));
        				this.ds_param.setColumn(0,"UP_MENU_ID",sUpperId);
        				this.ds_param.setColumn(0,"SVC_GRPNM",this.gfn_nullToEmpty(this.edt_svcGroup.value));
        				this.ds_param.setColumn(0,"USR_TPC",this.gfn_nullToEmpty(this.rdo_usrTpc.value));
        				this.ds_param.setColumn(0,"FLNM",this.gfn_nullToEmpty(this.edt_fileName.value));
        				this.ds_param.setColumn(0,"FL_KD",this.gfn_nullToEmpty(this.edt_fileType.value));
        				this.ds_param.setColumn(0,"SCRN_MRK_YN",this.gfn_nullToEmpty(this.rdo_displyYn.value));
        				this.ds_param.setColumn(0,"UYN",this.gfn_nullToEmpty(this.rdo_useYn.value));
        				this.ds_param.setColumn(0,"BRO_UYN",this.gfn_nullToEmpty(this.rdo_broUyn.value));
        				this.ds_param.setColumn(0,"BL_UYN",this.gfn_nullToEmpty(this.rdo_blUyn.value));
        										
        				var sSvcID        = "insert";
        				var sURL          = "svc::rest/mg/insertMenu";
        				var sInDatasets   = "ds_param=ds_param";
        				var sOutDatasets  = "";	
        				var sArgument     = "";
        				var sCallbackFunc = "fn_callBack";
        				var sTranType     = "U"; // U:저장/삭제, S:조회
        				
        				this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        			}
        		}
        	}else{ //관리자 메뉴 등록
        		if(confirm("정말로 저장하시겠습니까?\n확인 후에는 변경이 불가합니다.")){
        			if(this.fn_validationCheck()){
        				
        				var sMenuId = this.gfn_nullToEmpty(this.edt_menuId01.value) + this.gfn_nullToEmpty(this.edt_menuId02.value) + this.gfn_nullToEmpty(this.edt_menuId03.value);			
        				var sUpperId ;
        				if(this.cbo_menuLevel.value =="1"){
        					sUpperId = this.cbo_upperMenu01.value;					
        				}else if(this.cbo_menuLevel.value =="2"){
        					sUpperId = this.cbo_upperMenu02.value;				
        				}else{
        					sUpperId = "";
        				}
        				this.ds_param.addRow();
        				this.ds_param.setColumn(0,"MENU_ID",sMenuId);
        				this.ds_param.setColumn(0,"MENU_LVL",this.gfn_nullToEmpty(this.cbo_menuLevel.value));
        				this.ds_param.setColumn(0,"MENU_NM",this.gfn_nullToEmpty(this.edt_menuName.value));
        				this.ds_param.setColumn(0,"MENU_PATH",this.gfn_nullToEmpty(this.edt_menuPath.value));
        				this.ds_param.setColumn(0,"UP_MENU_ID",sUpperId);
        				this.ds_param.setColumn(0,"SVC_GRPNM",this.gfn_nullToEmpty(this.edt_svcGroup.value));
        				this.ds_param.setColumn(0,"FLNM",this.gfn_nullToEmpty(this.edt_fileName.value));
        				this.ds_param.setColumn(0,"FL_KD",this.gfn_nullToEmpty(this.edt_fileType.value));
        				this.ds_param.setColumn(0,"SCRN_MRK_YN",this.gfn_nullToEmpty(this.rdo_displyYn.value));
        				this.ds_param.setColumn(0,"UYN",this.gfn_nullToEmpty(this.rdo_useYn.value));			
        						
        				var sSvcID        = "insertadmin";
        				var sURL          = "svc::rest/mg/insertadminMenu";
        				var sInDatasets   = "ds_param=ds_param";
        				var sOutDatasets  = "";	
        				var sArgument     = "";
        				var sCallbackFunc = "fn_callBack";
        				var sTranType     = "U"; // U:저장/삭제, S:조회
        				
        				this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        			}	
        		}
        	
        	}
        }

        

        /*수정*/
        this.update = function()
                {
        			if(confirm("정말로 수정하시겠습니까?\n확인 후에는 변경이 불가합니다.")){
        				if(this.fn_validationCheck()){
        						
        					var sMenuId = this.gfn_nullToEmpty(this.edt_menuId01.value) + this.gfn_nullToEmpty(this.edt_menuId02.value) + this.gfn_nullToEmpty(this.edt_menuId03.value);			
        					var sUpperId ;
        					
        					if(this.cbo_menuLevel.value =="2"){
        						sUpperId = this.cbo_upperMenu01.value;
        					}else if(this.cbo_menuLevel.value =="3"){
        						sUpperId = this.cbo_upperMenu02.value;
        					}else{
        						sUpperId = "";
        					}
        					if(this.gfn_nullToEmpty(this.edt_isadmin.value) == "N"){
        						var sParams = 				
        								   "menu_id="+sMenuId
        								+ " up_menu="+sUpperId
        								+ " menu_path="+nexacro.wrapQuote(this.gfn_nullToEmpty(this.edt_menuPath.value))
        								+ " menu_lvl="+ this.ds_in.getColumn(0,"MENU_LVL")
        								+ " menu_name="+nexacro.wrapQuote(this.gfn_nullToEmpty(this.edt_menuName.value))
        								+ " svc_group="+this.gfn_nullToEmpty(this.edt_svcGroup.value)
        								+ " flnm="+this.gfn_nullToEmpty(this.edt_fileName.value)
        								+ " fl_kd="+this.gfn_nullToEmpty(this.edt_fileType.value)
        								+ " scrn_mrk_yn="+this.gfn_nullToEmpty(this.rdo_displyYn.value)				
        								+ " use_yn="+this.gfn_nullToEmpty(this.rdo_useYn.value) 
        								+ " bro_yn="+this.gfn_nullToEmpty(this.rdo_broUyn.value)
        								+ " bl_yn="+this.gfn_nullToEmpty(this.rdo_blUyn.value)
        								+ " isadmin="+this.gfn_nullToEmpty(this.edt_isadmin.value) 
        								;
        						
        													
        						var sSvcID        = "update";
        						var sURL          = "svc::rest/mg/updateMenu?userKey="+application.gv_userId;
        						var sInDatasets   = "";
        						var sOutDatasets  = "";	
        						var sArgument     = sParams;
        						var sCallbackFunc = "fn_callBack";
        						var sTranType     = "U"; // U:저장/삭제, S:조회
        									
        						this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        					}else{
        						var sParams = 				
        								   "menu_id="+sMenuId
        								+ " up_menu="+sUpperId
        								+ " menu_path="+nexacro.wrapQuote(this.gfn_nullToEmpty(this.edt_menuPath.value))
        								+ " menu_lvl="+ this.ds_in.getColumn(0,"MENU_LVL")
        								+ " menu_name="+nexacro.wrapQuote(this.gfn_nullToEmpty(this.edt_menuName.value))
        								+ " svc_group="+this.gfn_nullToEmpty(this.edt_svcGroup.value)
        								+ " flnm="+this.gfn_nullToEmpty(this.edt_fileName.value)
        								+ " fl_kd="+this.gfn_nullToEmpty(this.edt_fileType.value)
        								+ " scrn_mrk_yn="+this.gfn_nullToEmpty(this.rdo_displyYn.value)				
        								+ " use_yn="+this.gfn_nullToEmpty(this.rdo_useYn.value)
        								+ " isadmin="+this.gfn_nullToEmpty(this.edt_isadmin.value)
        								;
        						
        													
        						var sSvcID        = "update";
        						var sURL          = "svc::rest/mg/updateadminMenu?userKey="+application.gv_userId;
        						var sInDatasets   = "";
        						var sOutDatasets  = "";	
        						var sArgument     = sParams;
        						var sCallbackFunc = "fn_callBack";
        						var sTranType     = "U"; // U:저장/삭제, S:조회
        									
        						this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        						}
        				}
        			}
        	}
         /*조회*/
        this.search = function()
        {	
        	var isAdmin = this.getOwnerFrame().isAdmin;
        	var ds_parent = this.parent.dsArg;		
        	this.ds_in.copyRow(0,ds_parent,0);
        	
        	var sSvcID        = "search";
        	var sURL          = "svc::rest/mg/retrieveMenu";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_in=ds_in";	
        	var sArgument     = "menuId=" + this.ds_in.getColumn(0,"MENU_ID") 
        					  + " isAdmin=" + isAdmin;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        
        /*화면 로딩시 호출되는 콤보 데이터셋정보
          초기로딩시 상위 대메뉴콤보만 가져오며, 메뉴레벨이 중메뉴 및 소메뉴일 경우, 그에 해당하는 메뉴를 가져온다.
        */

        /*중메뉴 선택시 대메뉴 나와야 함  sMenuLvl값 0 */
        this.fn_getUpperCommonCombo1 = function(){	
        	var sMenuLvl = "0";	
        	
        	var sParam 		  = "ds_lcMenu=ds_lcMenu codeKey=ds_lcMenu menu_lvl="+sMenuLvl
        						+" usr_tpc="+this.gfn_nullToEmpty(this.rdo_usrTpc.value)
        						+" isadmin="+this.gfn_nullToEmpty(this.edt_isadmin.value);		
        	var sSvcID        = "combo1";
        	var sURL          = "svc::rest/mg/getMenuCombo";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_lcMenu=ds_lcMenu";	
        	var sArgument     = sParam;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        

        

        
        /*소메뉴 선택시 upperMenu02에 중메뉴 나오게    */
        this.fn_getUpperCommonCombo2 = function()
        {	
        	var sMenuId = this.gfn_nullToEmpty(this.edt_upMenu01.value);	
        	if(this.cbo_upperMenu01.value == ""){
        		alert("상위메뉴 첫번째값을 선택해주시기 바랍니다.");						
        		this.cbo_upperMenu01.setFocus();
        		return;
        	}
        	
        		
        	var sParam 		  = "ds_mcMenu=ds_mcMenu codeKey=ds_mcMenu menu_lvl=1 upperId="+sMenuId
        						+" usr_tpc="+this.gfn_nullToEmpty(this.rdo_usrTpc.value)
        						+" isadmin="+this.gfn_nullToEmpty(this.edt_isadmin.value);	
        	var sSvcID        = "combo2";
        	var sURL          = "svc::rest/mg/getMenuCombo";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_mcMenu=ds_mcMenu";	
        	var sArgument     = sParam;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        		
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);		
        }

        
        /* Validation Check */
        this.fn_validationCheck = function(){

        	var menuId = this.edt_menuId01.value + this.edt_menuId02.value + this.edt_menuId03.value;
        	if(this.gfn_isNull(this.edt_menuId01.value)){	
        		this.alert('메뉴ID중 첫번째 값을 입력 하세요.');
        		this.edt_menuId01.setFocus();
        		return false;
        	}
        	
        	if(this.gfn_isNull(this.edt_menuId02.value)){
        		this.alert('메뉴ID중 두번째 값을 입력 하세요');
        		this.edt_menuId02.setFocus();
        		return false;
        	}	
        	
        	if(this.gfn_isNull(this.edt_menuId03.value)){
        		this.alert('메뉴ID중 세번째 값을 입력 하세요');
        		this.edt_menuId02.setFocus();
        		return false;
        	}				
        	if(this.gfn_isNull(this.edt_menuName.value)){
        		this.alert('메뉴이름을 입력 하세요');
        		this.edt_menuName.setFocus();
        		return false;
        	}
        	
        	/*등록시 validation check*/
        	if(this.getOwnerFrame().paramMode== "U"){		
        		if(this.edt_clickDupBtn.value !="Y"){
        			alert("메뉴ID 중복확인을 해주시기 바랍니다.");			
        			return;
        		}
        		if(this.edt_DupCheck.value !='Y'){
        			alert("동일한 메뉴ID가 존재 합니다.");
        			this.edt_clickDupBtn.set_value("N");
        			return;
        		}
        		if(this.edt_finalMenuId.value != menuId){
        			alert("메뉴ID가 변경되었습니다. 중복확인을 해주시기 바랍니다.");
        			this.edt_clickDupBtn.set_value("N");
        			return;
        		}
        		
        	}else if(this.getOwnerFrame().paramMode== "S"){		
        		if(this.ds_in.getOrgColumn(0,"MENU_ID") != (this.edt_menuId01.value+this.edt_menuId02.value+this.edt_menuId03.value)){
        			if(this.edt_clickDupBtn.value !="Y"){
        				alert("메뉴ID 중복확인을 해주시기 바랍니다.");			
        				return;
        			}
        			if(this.edt_DupCheck.value !='Y'){
        				alert("동일한 메뉴ID가 존재 합니다.");
        				this.edt_clickDupBtn.set_value("N");
        				return;
        			}
        		}
        		
        		
        	}
        	return true;
        }

        
        /*메뉴레벨에 따른 이벤트컨트롤*/
        this.fn_menuOnitemchanged = function(obj,e)
        {
        	this.edt_menuId01.set_value("00");
        	this.edt_menuId02.set_value("000");
        	this.edt_menuId02.set_value("000");
        	
        	
        	//레벨변경시 메뉴명,메뉴경로변경
        	if(this.getOwnerFrame().paramMode == "U"){
        		this.edt_menuName.set_value("");
        		this.edt_menuPath.set_value("");
        		
        		if(this.cbo_menuLevel.value == "0"){			// 대메뉴 선택 (상위메뉴 콤보 커서 안보이게)
        			this.cbo_upperMenu01.set_enable(false);
        			this.cbo_upperMenu02.set_enable(false);			
        			this.cbo_upperMenu01.set_index(-1);
        			this.cbo_upperMenu02.set_index(-1);
        			this.edt_menuId01.set_readonly(false);
        			this.edt_menuId02.set_value("000");
                	this.edt_menuId03.set_value("000");
        		} else if(this.cbo_menuLevel.value == "1"){		// 중메뉴 선택
        			this.cbo_upperMenu01.set_enable(true);
        			this.cbo_upperMenu02.set_enable(true);
        			this.edt_menuId01.set_readonly(false);
        			this.edt_menuId02.set_readonly(false);		
        			this.fn_getUpperCommonCombo1();
        			this.cbo_upperMenu02.set_readonly(true);
        		} else if(this.cbo_menuLevel.value == "2"){	// 소메뉴 선택
        			this.cbo_upperMenu01.set_readonly(false);
                	this.cbo_upperMenu02.set_readonly(false);
        			this.cbo_upperMenu01.set_enable(true);
        			this.cbo_upperMenu02.set_enable(true);
        			this.cbo_upperMenu01.set_index(0);
        			this.cbo_upperMenu02.set_index(0);
        			this.edt_menuId01.set_readonly(true);
        			this.edt_menuId02.set_readonly(true);
        			this.edt_menuId03.set_readonly(false);
        			this.fn_getUpperCommonCombo1();
        			//this.edt_upMenu01.set_value(this.edt_menuId01.value+this.edt_menuId02.value+this.edt_menuId03.value);
        			this.fn_getUpperCommonCombo2();

        		}
        	} else {
        		/*수정시 메뉴레벨변경불가*/
        		this.cbo_menuLevel.set_readonly(true);
        	}
        }

        
        /*창닫기*/
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }
         
          
        /*저장버튼 액션정의*/
        this.btn_save_onclick = function(obj,e)
        {	
        	if(this.getOwnerFrame().paramMode== "U"){ //등록			
        		this.insert();	
        	}else if(this.getOwnerFrame().paramMode== "S"){	 //수정
        	     this.update();
        	}
        }
          
         

         /*메뉴ID 중복체크 관리자 아이디 중복체크 사용자 아이디 중복체크*/ 
        this.fn_dupCheck = function(obj,e)
        {

        
        	if(this.gfn_isNull(this.edt_menuId01.value)){	
        		this.alert('메뉴ID중 첫번째 값을 입력 하세요.');
        		this.edt_menuId01.setFocus();
        		return false;
        	}
        	
        	if(this.gfn_isNull(this.edt_menuId02.value)){
        		this.alert('메뉴ID중 두번째 값을 입력 하세요');
        		this.edt_menuId02.setFocus();
        		return false;
        	}	
        	
        	if(this.gfn_isNull(this.edt_menuId03.value)){
        		this.alert('메뉴ID중 세번째 값을 입력 하세요');
        		this.edt_menuId02.setFocus();
        		return false;
        	}		
        	if(this.cbo_menuLevel.value=="1"){
        		if(this.edt_menuId02.getLength() != 3){
        			this.alert('메뉴ID중 두번째 값은 3자리여야합니다.');
        			this.edt_menuId02.setFocus();
        			return false;
        		}
        	}
        	
        	if(this.cbo_menuLevel.value=="2"){
        		if(this.edt_menuId03.getLength() != 3){
        			this.alert('메뉴ID중 세번째 값은 3자리여야합니다.');
        			this.edt_menuId03.setFocus();
        			return false;
        		}
        	}
        	
        	if(this.rdo_useradmin.value == "1"){ //사용자 아이디 중복체크
        		this.edt_clickDupBtn.set_value("Y");

        		var param = "menu_id="+this.edt_menuId01.value + this.edt_menuId02.value + this.edt_menuId03.value;
        		var sSvcID        = "dupCheck";
        		var sURL          = "svc::rest/mg/dupCheckMenuId";
        		var sInDatasets   = "";
        		var sOutDatasets  = "ds_dupCheck=ds_dupCheck";	
        		var sArgument     =  param;
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "S"; // U:저장/삭제, S:조회	
        		 
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        		}else{ //관리자 아이디 중복체크
        		
        		this.edt_clickDupBtn.set_value("Y");

        		var param = "menu_id="+this.edt_menuId01.value + this.edt_menuId02.value + this.edt_menuId03.value;
        		var sSvcID        = "admindupCheck";
        		var sURL          = "svc::rest/mg/admindupCheckMenuId";
        		var sInDatasets   = "";
        		var sOutDatasets  = "ds_dupCheck=ds_dupCheck";	
        		var sArgument     =  param;
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "S"; // U:저장/삭제, S:조회	
        		 
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        		}
        	
        }

        /*메뉴레벨에 따른 경로*/
        this.edt_menuName_onkillfocus = function(obj,e)
        {
        	var pMenuLvl ;
        		
        	if(this.cbo_menuLevel.text == "대메뉴"){		
        		this.edt_menuPath.set_value(this.gfn_nullToEmpty(this.edt_menuName.value));
        	}else if(this.cbo_menuLevel.text =="중메뉴"){		
        		this.edt_menuPath.set_value(this.cbo_upperMenu01.text+">"+this.gfn_nullToEmpty(this.edt_menuName.value));
        	}else if(this.cbo_menuLevel.text =="소메뉴"){		
        		this.edt_menuPath.set_value(this.cbo_upperMenu01.text+">"+this.cbo_upperMenu02.text+">"+this.gfn_nullToEmpty(this.edt_menuName.value));
        	}
        }

        
        /*상위메뉴1번째 선택시 입력되는 내용*/
        this.cbo_upperMenu01_onitemchanged = function(obj,e)
        {	
        	
        	this.cbo_upperMenu02.set_index(0);
        	//this.edt_menuId02.set_value("000");
        	this.edt_upMenu01.set_value(this.cbo_upperMenu01.value.substring(0,2) + this.edt_menuId02.value + this.edt_menuId03.value);
        	this.fn_getUpperCommonCombo2();
        	if(this.cbo_upperMenu01.value =="0"){		
        		this.edt_menuPath.set_value("");
        	}else{	
        		this.edt_menuId01.set_value(this.cbo_upperMenu01.value.substring(0,2));
        		this.edt_menuId01.set_readonly(true);
        		this.edt_menuPath.set_value(this.cbo_upperMenu01.text);
        	}

        	if(this.cbo_menuLevel.value =="1"){ //중메뉴일때만 해당

        		var menu_path = this.cbo_upperMenu01.text;
        		var menu_lvl  = this.ds_in.getColumn(0,"MENU_LVL");
        		var isAdmin = this.rdo_useradmin.value;
        		var sParams   = "menu_path=" + menu_path
        					  + " menu_lvl=" + menu_lvl 
        					  + " isAdmin="   + isAdmin
        					  + " usr_tpc=" +this.gfn_nullToEmpty(this.rdo_usrTpc.value)
        					  ;
        		var sSvcID        ="menuIdListMiddle";
        		var sURL          ="svc::rest/mg/menuIdListMiddle";	
        		var sInDatasets   ="";
        		var sOutDatasets  ="ds_menuId00=ds_menuId00";	
        		var sArgument     =sParams;
        		var sCallbackFunc ="fn_callBack";
        		var sTranType     ="S"; // U:저장/삭제, S:조회
        			
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}else{
        	
        	}

        }

        

        /*두번째 상위메뉴를 선택했을때의 이벤트*/
        this.cbo_upperMenu02_onitemchanged = function(obj,e)
        {	

        	this.edt_menuId02.set_value(this.cbo_upperMenu02.value.substring(2,5));
        	this.edt_menuId02.set_readonly(true);	
        	this.edt_menuPath.set_value(this.cbo_upperMenu01.text+">"+this.cbo_upperMenu02.text+">"+this.gfn_nullToEmpty(this.edt_menuName.value));
        	var menu_path = this.edt_menuPath.value;
        	var menu_lvl  = this.ds_in.getColumn(0,"MENU_LVL");
        	var isAdmin = this.rdo_useradmin.value;
        	
        	var sParams   = "menu_path=" + menu_path
        			      + " menu_lvl=" + menu_lvl 
        			      + " isAdmin="  + isAdmin
        			      + " usr_tpc=" +this.gfn_nullToEmpty(this.rdo_usrTpc.value)
        			      ;
        	var sSvcID        ="menuIdList";
        	var sURL          ="svc::rest/mg/menuIdList";	
        	var sInDatasets   ="";
        	var sOutDatasets  ="ds_menuId=ds_menuId";	
        	var sArgument     =sParams;
        	var sCallbackFunc ="fn_callBack";
        	var sTranType     ="S"; // U:저장/삭제, S:조회
        		
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);

        }

         
         
        //callback메소드
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        	
        	if(ErrorCode < 0){
        		this.gfn_getMessage("alert", "error.message.server.exception");
        		return;
        	}else{
        		if(svcID =="insert" || svcID == "insertadmin"){
        			if(this.ds_dupCheck.value =="N"){
        				this.gfn_getMessage("alert", "동일한 메뉴ID가 존재 합니다.");
        				this.edt_clickDupBtn.set_value("N");
        				return;
        			}else if(this.ds_dupCheck.value =="Y"){
        				this.gfn_getMessage("alert", "사용가능한 메뉴ID입니다.");
        			}			
        			if(ErrorCode == 1){
        				this.gfn_getMessage("alert", "result.message.save.success");		
        				this.close();
        			}		
        			
        		}else if(svcID=="menuIdList"){
        			var menuId = this.ds_menuId.getColumn(0,"MENU_ID");
        			var cut_menuid = menuId.substr(5,3);
        			this.edt_menuId03.set_value(cut_menuid);	
        		}else if(svcID=="menuIdListMiddle"){
        			var menuId = this.ds_menuId00.getColumn(0,"MENU_ID");
        			var cut_menuid = menuId.substr(2,3);
        			this.edt_menuId02.set_value(cut_menuid);	
        		}

        		else if(svcID=="update"){		
        			if(ErrorCode == 1){
        				this.gfn_getMessage("alert", "result.message.save.success");		
        				this.close();
        			}
        		}else if(svcID=="combo1"){			
        		
        			var nRow = this.ds_lcMenu.findRow("MENU_ID",this.edt_upMenu01.value);				
        			
        			this.ds_lcMenu.insertRow(0);			
        			this.ds_lcMenu.setColumn(0,"MENU_ID","9");
        			this.ds_lcMenu.setColumn(0,"MENU_NM","전체");			
        			
        			if(this.getOwnerFrame().paramMode== "U"){ //등록			
        				this.cbo_upperMenu01.set_index(0);			
        			}else if(this.getOwnerFrame().paramMode== "S"){	 //수정					
        				
        				if(this.cbo_menuLevel.value != 0){					
        					this.cbo_upperMenu01.set_index(nRow+1);		
        					this.cbo_upperMenu01.set_readonly(false);
        				}else{					
        					this.cbo_upperMenu01.set_index(0);		
        					this.cbo_upperMenu01.set_readonly(true);
        					this.edt_menuId01.set_readonly(false);
        					this.ds_mcMenu.insertRow(0);			
        					this.ds_mcMenu.setColumn(0,"MENU_ID","0");
        					this.ds_mcMenu.setColumn(0,"MENU_NM","전체");
        					this.cbo_upperMenu02.set_index(0);		
        				}
        			}								
        		}else if(svcID=="combo2"){		
        			var nRow = this.ds_mcMenu.findRow("MENU_ID",this.edt_upMenu02.value);		

        			this.ds_mcMenu.insertRow(0);			
        			this.ds_mcMenu.setColumn(0,"MENU_ID","0");
        			this.ds_mcMenu.setColumn(0,"MENU_NM","전체");
        				
        			if(this.getOwnerFrame().paramMode== "U"){ //등록			
        				this.cbo_upperMenu02.set_index(0);			
        			}else if(this.getOwnerFrame().paramMode== "S"){	 //수정
        				this.cbo_upperMenu02.set_index(nRow+1);	 
        				this.cbo_upperMenu02.set_readonly(false);
        				if(this.cbo_menuLevel.text == "소메뉴"){
        					this.edt_menuId03.set_readonly(false);
        				}
        			}			
        		}else if(svcID =="dupCheck" || svcID =="admindupCheck"){		
        			if(this.edt_DupCheck.value =="N"){
        				alert("동일한 메뉴ID가 존재 합니다.");		
        				this.edt_clickDupBtn.set_value("N");
        				return;
        			}else if(this.edt_DupCheck.value =="Y"){
        				alert("사용가능한 메뉴ID입니다.");				
        				this.edt_finalMenuId.set_value(this.edt_menuId01.value+this.edt_menuId02.value+this.edt_menuId03.value);
        			}else{
        				alert("정해지지 않은 값입니다.");				
        				return;
        			}
        		}else if(svcID == "search"){	
        			
        			
        			this.edt_isadmin.set_value(this.ds_in.getColumn(0,"ADMIN_YN"));
        			if(this.edt_isadmin.value == "Y"){
        				this.rdo_useradmin.set_value(2);
        				this.rdo_usrTpc.set_enable(false);
        				this.rdo_broUyn.set_enable(false);
        			}else{
        				this.rdo_useradmin.set_value(1);
        			}
        			
        			this.cbo_upperMenu01.set_enable(false);
        			this.cbo_upperMenu02.set_enable(false);
        			this.rdo_useradmin.set_readonly(true);
        			this.rdo_usrTpc.set_readonly(true);
        			
        			this.rdo_usrTpc.set_value(this.ds_in.getColumn(0,"USR_TPC"));
        			this.edt_menuId01.set_value(this.ds_in.getColumn(0,"MENU_ID").substring(0,2)); //ds_in에 있는 MENU_ID셋
        			this.edt_menuId02.set_value(this.ds_in.getColumn(0,"MENU_ID").substring(2,5));
        			this.edt_menuId03.set_value(this.ds_in.getColumn(0,"MENU_ID").substring(5,8));										
        			if(this.cbo_menuLevel.value =="1"){									
        				this.edt_upMenu01.set_value(this.ds_in.getColumn(0,"UP_MENU_ID").substring(0,2)+"000000");
        				this.fn_getUpperCommonCombo1();								
        			}else if(this.cbo_menuLevel.value=="2"){	//소메뉴 선택했을때							
        				this.edt_upMenu01.set_value(this.ds_in.getColumn(0,"UP_MENU_ID").substring(0,2)+"000000");
        				this.edt_upMenu02.set_value(this.ds_in.getColumn(0,"UP_MENU_ID"));
        				this.fn_getUpperCommonCombo1();
        				this.fn_getUpperCommonCombo2();
        				
        				var sMenuId= this.gfn_nullToEmpty(this.edt_upMenu02.value) ;				
        				var sParam 		  = "ds_mcMenu=ds_mcMenu codeKey=ds_mcMenu menu_lvl=2 upperId="+sMenuId;	
        				var sSvcID        = "combo2";
        				var sURL          = "svc::rest/mg/getMenuCombo";
        				var sInDatasets   = "";
        				var sOutDatasets  = "ds_mcMenu=ds_mcMenu";	
        				var sArgument     = sParam;
        				var sCallbackFunc = "fn_callBack";
        				var sTranType     = "S"; // U:저장/삭제, S:조회
        					
        				this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);		
        			}else{
        				this.fn_getUpperCommonCombo1();								
        			}						
        		}
        	}	
        }
         

        this.rdo_useradmin_onitemchanged = function(obj,e) //  사용자 여부에 따른 사용자 유형 선택
        {
        	this.edt_menuId01.set_value("00");
        	this.edt_menuId02.set_value("000");
        	this.edt_menuId03.set_value("000");
        	this.edt_menuName.set_value("");
        	this.edt_svcGroup.set_value("");
        	this.edt_fileName.set_value("");
        	this.edt_fileType.set_value("");
        	this.edt_menuPath.set_value("");
        	this.cbo_upperMenu01.set_index(0);
        	this.cbo_upperMenu02.set_index(0);
        	
        	if(this.rdo_useradmin.value == "1"){	
        		this.rdo_usrTpc.set_enable(true);
        		this.cbo_menuLevel.set_value("0");
        		this.cbo_upperMenu01.set_enable(false);
        		this.cbo_upperMenu02.set_enable(false);
        	} else if(this.rdo_useradmin.value == "2"){
        		this.edt_isadmin.set_value("Y");
        		this.rdo_usrTpc.set_enable(false);
        		this.cbo_menuLevel.set_value("0");
        		this.cbo_upperMenu01.set_enable(false);
        		this.cbo_upperMenu02.set_enable(false);
        	}
        }

        this.rdo_usrTpc_onitemchanged = function(obj,e)
        {
        	this.cbo_menuLevel.set_value("0");
        	this.edt_menuId01.set_value("00");
        	this.edt_menuId02.set_value("000");
        	this.edt_menuId03.set_value("000");
        	if(this.cbo_menuLevel.value == "0"){
        		this.cbo_upperMenu01.set_index(0);
        		this.cbo_upperMenu02.set_index(0);
        		this.cbo_upperMenu01.set_enable(false);
        		this.cbo_upperMenu01.set_enable(false);
        	}
        	
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.cbo_upperMenu01.addEventHandler("onitemchanged", this.cbo_upperMenu01_onitemchanged, this);
            this.Static06.addEventHandler("onclick", this.Static06_onclick, this);
            this.brn_cls.addEventHandler("onclick", this.btn_close_onclick, this);
            this.rdo_displyYn.addEventHandler("onitemclick", this.Radio01_onitemclick, this);
            this.btn_dupCheck.addEventHandler("onclick", this.fn_dupCheck, this);
            this.cbo_upperMenu02.addEventHandler("ondropdown", this.fn_getUpperCommonCombo2, this);
            this.cbo_upperMenu02.addEventHandler("onitemchanged", this.cbo_upperMenu02_onitemchanged, this);
            this.Static17.addEventHandler("onclick", this.Static16_onclick, this);
            this.Static16.addEventHandler("onclick", this.Static16_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.edt_menuName.addEventHandler("onkillfocus", this.edt_menuName_onkillfocus, this);
            this.cbo_menuLevel.addEventHandler("onitemchanged", this.fn_menuOnitemchanged, this);
            this.rdo_useYn.addEventHandler("onitemclick", this.Radio00_onitemclick, this);
            this.rdo_broUyn.addEventHandler("onitemclick", this.Radio00_onitemclick, this);
            this.rdo_useradmin.addEventHandler("onitemchanged", this.rdo_useradmin_onitemchanged, this);
            this.rdo_useradmin.addEventHandler("onitemclick", this.rdo_useradmin_onitemclick, this);
            this.rdo_usrTpc.addEventHandler("onitemchanged", this.rdo_usrTpc_onitemchanged, this);
            this.rdo_usrTpc.addEventHandler("onitemclick", this.rdo_usrTpc_onitemclick, this);
            this.rdo_blUyn.addEventHandler("onitemclick", this.Radio00_onitemclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_6311.xfdl", true);

       
    };
}
)();
