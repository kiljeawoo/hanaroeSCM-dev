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
                this.set_name("Intro");
                this._setFormPosition(0,0,1008,617);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_bbs", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"BLBD_ID\" type=\"string\" size=\"32\"/><Column id=\"BBRD_ID\" type=\"string\" size=\"32\"/><Column id=\"BBRD_TI\" type=\"string\" size=\"32\"/><Column id=\"BBRD_CNTN\" type=\"string\" size=\"32\"/><Column id=\"BLTN_ST_DTM\" type=\"string\" size=\"32\"/><Column id=\"BLTN_ED_DTM\" type=\"string\" size=\"32\"/><Column id=\"CKNL_DSC\" type=\"string\" size=\"32\"/><Column id=\"BBRD_DEL_YN\" type=\"string\" size=\"32\"/><Column id=\"BBRD_INQ_CN\" type=\"string\" size=\"32\"/><Column id=\"BBRD_RGMNM\" type=\"string\" size=\"32\"/><Column id=\"FSRG_DTM\" type=\"string\" size=\"32\"/><Column id=\"FS_RGM\" type=\"string\" size=\"32\"/><Column id=\"LSCHG_DTM\" type=\"string\" size=\"32\"/><Column id=\"LS_CHGM\" type=\"string\" size=\"32\"/><Column id=\"PRET_BBRD_ID\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_login", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"userKey\" type=\"string\" size=\"32\"/><Column id=\"userID\" type=\"string\" size=\"32\"/><Column id=\"glnCode\" type=\"string\" size=\"32\"/><Column id=\"mbcoType\" type=\"string\" size=\"32\"/><Column id=\"companyName\" type=\"string\" size=\"32\"/><Column id=\"userName\" type=\"string\" size=\"32\"/><Column id=\"commanyType\" type=\"string\" size=\"32\"/><Column id=\"lastLoginDt\" type=\"datetime\" size=\"17\"/><Column id=\"userType\" type=\"string\" size=\"32\"/><Column id=\"firstLoginYn\" type=\"string\" size=\"32\"/><Column id=\"userCvDsc\" type=\"string\" size=\"32\"/><Column id=\"userStatus\" type=\"string\" size=\"32\"/><Column id=\"userAuth\" type=\"string\" size=\"32\"/><Column id=\"pwOverTermYn\" type=\"string\" size=\"32\"/><Column id=\"hoffApvYn\" type=\"string\" size=\"32\"/><Column id=\"naUsrSysKdc\" type=\"string\" size=\"32\"/><Column id=\"svcStatus\" type=\"string\" size=\"32\"/><Column id=\"changeElt\" type=\"STRING\" size=\"256\"/><Column id=\"changeMb\" type=\"STRING\" size=\"256\"/><Column id=\"bizNumber\" type=\"STRING\" size=\"256\"/><Column id=\"userSystemCode\" type=\"STRING\" size=\"256\"/><Column id=\"weakPwYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_USR_TPC", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"USR_TPC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_systemAuth", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_popup", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"FRAMENAME\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BBRD_PUP_SYS_FLNM\" type=\"string\" size=\"32\"/><Column id=\"BBRD_CNTN\" type=\"string\" size=\"32\"/><Column id=\"PICTURE\" type=\"BLOB\" size=\"256\"/><Column id=\"BBRD_NAMO_FLNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_popupOfanc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"FRAMENAME\" type=\"STRING\" size=\"256\"/><Column id=\"BBRD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BBRD_CNTN\" type=\"string\" size=\"32\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ENT_PRG_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Combo("cbo_new", "absolute", "21", "469", "143", "34", null, null, this);
            this.addChild(obj.name, obj);
            var cbo_new_innerdataset = new Dataset("cbo_new_innerdataset", this.cbo_new);
            cbo_new_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">상담신청등록</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">신청내역조회</Col></Row></Rows>");
            obj.set_innerdataset(cbo_new_innerdataset);
            obj.set_taborder("38");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_visible("true");
            obj.set_index("-1");

            obj = new Static("Static08", "absolute", "0", "0", null, "363", "0", null, this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_INTRO_Image");
            this.addChild(obj.name, obj);

            obj = new Div("div_login", "absolute", "0", "201", "336", "162", null, null, this);
            obj.set_taborder("1");
            obj.set_cssclass("div_IINTRO_LoginBg");
            this.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "30", "19", "259", "81", null, null, this.div_login);
            obj.set_taborder("6");
            obj.set_cssclass("sta_INTRO_LoginSystemName");
            this.div_login.addChild(obj.name, obj);
            obj = new Button("btn_join", "absolute", "30", "131", "58", "21", null, null, this.div_login);
            obj.set_taborder("4");
            obj.set_text("회원가입");
            obj.set_cssclass("btn_INTRO_IDPW");
            obj.style.set_font("bold underline 10 Gulim");
            obj.style.set_cursor("hand");
            this.div_login.addChild(obj.name, obj);
            obj = new Button("btn_find", "absolute", "98", "131", "74", "21", null, null, this.div_login);
            obj.set_taborder("5");
            obj.set_text("ID/PW찾기");
            obj.set_cssclass("btn_INTRO_IDPW");
            obj.style.set_font("bold underline 10 Gulim");
            obj.style.set_cursor("hand");
            this.div_login.addChild(obj.name, obj);
            obj = new Edit("edt_id", "absolute", "30", "78", "205", "25", null, null, this.div_login);
            obj.set_taborder("0");
            obj.set_cssclass("edt_INTRO_Login");
            obj.set_password("false");
            obj.set_autoselect("true");
            obj.set_imemode("alpha");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("9");
            this.div_login.addChild(obj.name, obj);
            obj = new Edit("edt_pw", "absolute", "30", "104", "205", "25", null, null, this.div_login);
            obj.set_taborder("1");
            obj.set_cssclass("edt_INTRO_Login");
            obj.set_password("true");
            obj.set_autoselect("true");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("16");
            obj.set_value("1234");
            this.div_login.addChild(obj.name, obj);
            obj = new Button("btn_login", "absolute", "240", "78", "66", "51", null, null, this.div_login);
            obj.set_taborder("2");
            obj.set_cssclass("btn_INTRO_Login");
            obj.style.set_cursor("hand");
            this.div_login.addChild(obj.name, obj);
            obj = new CheckBox("CheckBox00", "absolute", "240", "131", "74", "22", null, null, this.div_login);
            obj.set_taborder("3");
            obj.set_text("ID저장");
            obj.style.set_color("#e0ecf0ff");
            obj.style.set_font("bold 10 Gulim");
            obj.style.set_cursor("hand");
            this.div_login.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "671", "363", null, "156", "0", null, this);
            obj.set_taborder("13");
            obj.set_text("Div01");
            obj.set_cssclass("div_INTRO_ContentsBg02");
            obj.set_scrollbars("none");
            obj.style.set_border("0 solid #f7f8f9ff,1 solid #eef0f0ff,1 solid #eef0f0ff,1 solid #eef0f0ff");
            this.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "20", "13", "109", "23", null, null, this.Div01);
            obj.set_taborder("1");
            obj.set_cssclass("sta_INTRO_ContentsTitle02");
            this.Div01.addChild(obj.name, obj);
            obj = new Grid("grd_bbs", "absolute", "20", "44", "301", "102", null, null, this.Div01);
            obj.set_taborder("2");
            obj.set_cssclass("grd_INTRO_Notice");
            obj.set_binddataset("ds_bbs");
            obj.set_scrollbars("autovert");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"15\"/><Column size=\"190\"/><Column size=\"9\"/><Column size=\"80\"/></Columns><Rows><Row size=\"25\"/></Rows><Band id=\"body\"><Cell displaytype=\"image\" style=\"padding: ;\" text=\"URL('theme://images/grdIco_INTRO_Notice.png')\"/><Cell col=\"1\" style=\"padding:0 0 0 0; :mouseover {cursor:hand;}\" cssclass=\"Cellgrd_WF_AlignLeft\" text=\"bind:BBRD_TI\"/><Cell col=\"2\"/><Cell col=\"3\" displaytype=\"normal\" style=\"color:#8f8f8fff;color2:#8f8f8fff;selectcolor:#8f8f8fff;selectfont:9 Gulim;\" text=\"bind:FSRG_DTM\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div02", "absolute", "0", "363", "672", "156", null, null, this);
            obj.set_taborder("14");
            obj.set_text("Div02");
            obj.set_cssclass("div_INTRO_ContentsBg01");
            this.addChild(obj.name, obj);
            obj = new Button("btn_new", "absolute", "19", "113", "147", "38", null, null, this.Div02);
            obj.set_taborder("0");
            obj.set_cssclass("btn_INTRO_CS01");
            obj.style.set_cursor("hand");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("btn_into", "absolute", "170", "113", "147", "38", null, null, this.Div02);
            obj.set_taborder("1");
            obj.set_cssclass("btn_INTRO_CS02");
            obj.style.set_cursor("hand");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "335", "0", "1", "156", null, null, this.Div02);
            obj.set_taborder("3");
            obj.set_cssclass("sta_INTRO_ContentsLine");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("btn_01", "absolute", "353", "64", "65", "65", null, null, this.Div02);
            obj.set_taborder("4");
            obj.set_cssclass("btn_INTRO_Info01");
            obj.style.set_cursor("hand");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("btn_02", "absolute", "432", "64", "65", "65", null, null, this.Div02);
            obj.set_taborder("5");
            obj.set_cssclass("btn_INTRO_Info02");
            obj.style.set_cursor("hand");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("btn_03", "absolute", "511", "64", "65", "65", null, null, this.Div02);
            obj.set_taborder("6");
            obj.set_cssclass("btn_INTRO_Info03");
            obj.style.set_cursor("hand");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("btn_04", "absolute", "590", "64", "65", "65", null, null, this.Div02);
            obj.set_taborder("7");
            obj.set_cssclass("btn_INTRO_Info04");
            obj.style.set_cursor("hand");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "424", "67", "1", "58", null, null, this.Div02);
            obj.set_taborder("8");
            obj.set_cssclass("sta_INTRO_ContentsLine");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "503", "68", "1", "58", null, null, this.Div02);
            obj.set_taborder("9");
            obj.set_cssclass("sta_INTRO_ContentsLine");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "582", "68", "1", "58", null, null, this.Div02);
            obj.set_taborder("10");
            obj.set_cssclass("sta_INTRO_ContentsLine");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "356", "13", "109", "23", null, null, this.Div02);
            obj.set_taborder("11");
            obj.set_cssclass("sta_INTRO_ContentsTitle01");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "671", "0", "1", "156", null, null, this.Div02);
            obj.set_taborder("12");
            obj.set_cssclass("sta_INTRO_ContentsLine");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "13.69%", "20", null, "35", "53.72%", null, this.Div02);
            obj.set_taborder("13");
            obj.set_text("02) 1522 - 1211");
            obj.set_cssclass("sta_INTRO_CSNum");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "1.34%", "27", null, "53", "90.77%", null, this.Div02);
            obj.set_taborder("14");
            obj.set_cssclass("sta_INTRO_CSImage");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "10.71%", "55", null, "33", "71.13%", null, this.Div02);
            obj.set_taborder("15");
            obj.set_text("[평일] 09:00 ~ 18:00\r\n[점심] 12:00 ~ 13:00");
            obj.set_cssclass("sta_INTRO_CSTime");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("btn_remote", "absolute", "27.38%", "61", null, "25", "62.05%", null, this.Div02);
            obj.set_taborder("16");
            obj.set_cssclass("btn_INTRO_Remote");
            obj.style.set_cursor("hand");
            this.Div02.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "11.46%", "87", null, "21", "54.61%", null, this.Div02);
            obj.set_taborder("17");
            obj.set_text("* 하나로eSCM 카카오톡 ID : hanaroescm");
            obj.set_cssclass("sta_INTRO_CSTime");
            obj.style.set_color("#818181ff");
            obj.style.set_padding("2 0 0 3");
            obj.style.set_font("8 Dotum");
            this.Div02.addChild(obj.name, obj);
            obj = new Button("btn_sms", "absolute", "38.39%", "61", null, "25", "50.89%", null, this.Div02);
            obj.set_taborder("18");
            obj.set_cssclass("btn_INTRO_Remote");
            obj.style.set_background("URL('theme://images/btn_INTRO_SMS.png') center middle");
            obj.style.set_cursor("hand");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "1108", "270", "7", "40", null, null, this);
            obj.set_taborder("26");
            obj.set_visible("false");
            obj.style.set_background("#dc143c66");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "1062", "160", "21", "40", null, null, this);
            obj.set_taborder("2");
            obj.style.set_background("#dc143c66");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "0", "551", null, "66", "0", null, this);
            obj.set_taborder("29");
            obj.set_text("Div03");
            obj.set_scrollbars("none");
            obj.set_url("frame::main_bottom.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "1007", "0", null, "363", "0", null, this);
            obj.set_taborder("30");
            obj.set_cssclass("sta_INTRO_ImageBg");
            this.addChild(obj.name, obj);

            obj = new Div("div_join", "absolute", "340", "201", "338", "162", null, null, this);
            obj.set_taborder("39");
            obj.set_visible("false");
            obj.set_cssclass("div_WF_PopupBg");
            this.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "210", "32", "53", "15", null, null, this.div_join);
            obj.set_taborder("2");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_join.addChild(obj.name, obj);
            obj = new Button("btn_close", "absolute", "91.89%", "0", null, "32", "0%", null, this.div_join);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_PopupClose");
            obj.style.set_background("URL('theme://images/btn_WF_PopupClose.png') center middle");
            this.div_join.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "0%", "0", null, "32", "68.64%", null, this.div_join);
            obj.set_taborder("6");
            obj.set_text("가입유형");
            obj.set_cssclass("sta_WF_PopupTitle");
            this.div_join.addChild(obj.name, obj);
            obj = new Radio("rdo_userType1", "absolute", "58", "50", "76", "24", null, null, this.div_join);
            this.div_join.addChild(obj.name, obj);
            var rdo_userType1_innerdataset = new Dataset("rdo_userType1_innerdataset", this.div_join.rdo_userType1);
            rdo_userType1_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">협력업체</Col></Row></Rows>");
            obj.set_innerdataset(rdo_userType1_innerdataset);
            obj.set_taborder("7");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.style.set_background("transparent");
            obj.set_index("-1");
            obj = new Button("btn_cancel", "absolute", "170", "117", "54", "29", null, null, this.div_join);
            obj.set_taborder("8");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Popup");
            this.div_join.addChild(obj.name, obj);
            obj = new Button("btn_confirm", "absolute", "114", "117", "54", "29", null, null, this.div_join);
            obj.set_taborder("9");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Popup");
            this.div_join.addChild(obj.name, obj);
            obj = new Radio("rdo_userType2", "absolute", "136", "50", "45", "24", null, null, this.div_join);
            this.div_join.addChild(obj.name, obj);
            var rdo_userType2_innerdataset = new Dataset("rdo_userType2_innerdataset", this.div_join.rdo_userType2);
            rdo_userType2_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">본부</Col></Row></Rows>");
            obj.set_innerdataset(rdo_userType2_innerdataset);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.style.set_background("transparent");
            obj = new Radio("rdo_userType3", "absolute", "191", "50", "62", "24", null, null, this.div_join);
            this.div_join.addChild(obj.name, obj);
            var rdo_userType3_innerdataset = new Dataset("rdo_userType3_innerdataset", this.div_join.rdo_userType3);
            rdo_userType3_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">사업장</Col></Row></Rows>");
            obj.set_innerdataset(rdo_userType3_innerdataset);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.style.set_background("transparent");
            obj = new Radio("rdo_userType4", "absolute", "58", "84", "103", "24", null, null, this.div_join);
            this.div_join.addChild(obj.name, obj);
            var rdo_userType4_innerdataset = new Dataset("rdo_userType4_innerdataset", this.div_join.rdo_userType4);
            rdo_userType4_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">04</Col><Col id=\"datacolumn\">세금계산서전용</Col></Row></Rows>");
            obj.set_innerdataset(rdo_userType4_innerdataset);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.style.set_background("transparent");
            obj = new Static("Static07", "absolute", "0.59%", "35", null, "139", "89.64%", null, this.div_join);
            obj.set_taborder("15");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_join.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "89.64%", "35", null, "139", "0.59%", null, this.div_join);
            obj.set_taborder("16");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.div_join.addChild(obj.name, obj);
            obj = new Radio("rdo_userType5", "absolute", "191", "84", "109", "24", null, null, this.div_join);
            this.div_join.addChild(obj.name, obj);
            var rdo_userType5_innerdataset = new Dataset("rdo_userType5_innerdataset", this.div_join.rdo_userType5);
            rdo_userType5_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">81</Col><Col id=\"datacolumn\">농협몰</Col></Row></Rows>");
            obj.set_innerdataset(rdo_userType5_innerdataset);
            obj.set_taborder("17");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.style.set_background("transparent");

            obj = new WebBrowser("WebBrowser00", "absolute", "0%", "0", null, "0", "0%", null, this);
            obj.set_taborder("40");
            this.addChild(obj.name, obj);

            obj = new Div("div_slide", "absolute", "0", "520", "1008", "31", null, null, this);
            obj.set_taborder("41");
            obj.set_text("Div02");
            obj.style.set_background("white");
            obj.set_scrollbars("none");
            this.addChild(obj.name, obj);
            obj = new Div("Div00", "absolute", "4", "2", "1126", "29", null, null, this.div_slide);
            obj.set_taborder("4");
            obj.style.set_background("white");
            this.div_slide.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer00", "absolute", "16", "3", "174", "23", null, null, this.div_slide.Div00);
            obj.set_taborder("15");
            obj.style.set_background("URL('theme://images/utong_h2_type07.jpg') stretch");
            obj.style.set_border("0 solid #e5e5e5ff");
            obj.style.set_cursor("hand");
            this.div_slide.Div00.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer01", "absolute", "225", "3", "125", "23", null, null, this.div_slide.Div00);
            obj.set_taborder("16");
            obj.style.set_background("URL('theme://images/utong_h2_type03.jpg') stretch");
            obj.style.set_border("0 solid #e5e5e5ff");
            obj.style.set_cursor("hand");
            this.div_slide.Div00.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer02", "absolute", "384", "3", "205", "23", null, null, this.div_slide.Div00);
            obj.set_taborder("17");
            obj.style.set_background("URL('theme://images/utong_h2_type04.jpg') stretch");
            obj.style.set_border("0 solid #e5e5e5ff");
            obj.style.set_cursor("hand");
            this.div_slide.Div00.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer03", "absolute", "624", "3", "159", "23", null, null, this.div_slide.Div00);
            obj.set_taborder("18");
            obj.style.set_background("URL('theme://images/utong_h2_type05.jpg') stretch");
            obj.style.set_border("0 solid #e5e5e5ff");
            obj.style.set_cursor("hand");
            this.div_slide.Div00.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer04", "absolute", "816", "3", "165", "23", null, null, this.div_slide.Div00);
            obj.set_taborder("19");
            obj.style.set_background("URL('theme://images/utong_h2_type06.jpg') stretch");
            obj.style.set_border("0 solid #e5e5e5ff");
            obj.style.set_cursor("hand");
            this.div_slide.Div00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "208", "6", "1", "18", null, null, this.div_slide.Div00);
            obj.set_taborder("20");
            obj.set_cssclass("sta_INTRO_ContentsLine");
            this.div_slide.Div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "367", "6", "1", "18", null, null, this.div_slide.Div00);
            obj.set_taborder("21");
            obj.set_cssclass("sta_INTRO_ContentsLine");
            this.div_slide.Div00.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "607", "6", "1", "18", null, null, this.div_slide.Div00);
            obj.set_taborder("22");
            obj.set_cssclass("sta_INTRO_ContentsLine");
            this.div_slide.Div00.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "799", "6", "1", "18", null, null, this.div_slide.Div00);
            obj.set_taborder("23");
            obj.set_cssclass("sta_INTRO_ContentsLine");
            this.div_slide.Div00.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "1001", "6", "1", "18", null, null, this.div_slide.Div00);
            obj.set_taborder("24");
            obj.set_cssclass("sta_INTRO_ContentsLine");
            this.div_slide.Div00.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer05", "absolute", "1025", "3", "75", "23", null, null, this.div_slide.Div00);
            obj.set_taborder("25");
            obj.style.set_background("URL('theme://images/utong_h2_type08.jpg') stretch");
            obj.style.set_border("0 solid #e5e5e5ff");
            obj.style.set_cursor("hand");
            this.div_slide.Div00.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "1125", "6", "1", "18", null, null, this.div_slide.Div00);
            obj.set_taborder("26");
            obj.set_cssclass("sta_INTRO_ContentsLine");
            this.div_slide.Div00.addChild(obj.name, obj);
            obj = new Div("Div01", "absolute", "1130", "2", "1126", "29", null, null, this.div_slide);
            obj.set_taborder("6");
            obj.set_positionstep("1");
            obj.style.set_background("white");
            this.div_slide.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer00", "absolute", "16", "3", "171", "23", null, null, this.div_slide.Div01);
            obj.set_taborder("20");
            obj.style.set_background("URL('theme://images/utong_h2_type07.jpg') stretch");
            obj.style.set_border("0 solid #e5e5e5ff");
            obj.style.set_cursor("hand");
            this.div_slide.Div01.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer01", "absolute", "224", "3", "125", "23", null, null, this.div_slide.Div01);
            obj.set_taborder("21");
            obj.style.set_background("URL('theme://images/utong_h2_type03.jpg') stretch");
            obj.style.set_border("0 solid #e5e5e5ff");
            obj.style.set_cursor("hand");
            this.div_slide.Div01.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer02", "absolute", "383", "3", "207", "23", null, null, this.div_slide.Div01);
            obj.set_taborder("22");
            obj.style.set_background("URL('theme://images/utong_h2_type04.jpg') stretch");
            obj.style.set_border("0 solid #e5e5e5ff");
            obj.style.set_cursor("hand");
            this.div_slide.Div01.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer03", "absolute", "624", "3", "159", "23", null, null, this.div_slide.Div01);
            obj.set_taborder("23");
            obj.style.set_background("URL('theme://images/utong_h2_type05.jpg') stretch");
            obj.style.set_border("0 solid #e5e5e5ff");
            obj.style.set_cursor("hand");
            this.div_slide.Div01.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer04", "absolute", "815", "3", "166", "23", null, null, this.div_slide.Div01);
            obj.set_taborder("24");
            obj.style.set_background("URL('theme://images/utong_h2_type06.jpg') stretch");
            obj.style.set_border("0 solid #e5e5e5ff");
            obj.style.set_cursor("hand");
            this.div_slide.Div01.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "207", "6", "1", "18", null, null, this.div_slide.Div01);
            obj.set_taborder("25");
            obj.set_cssclass("sta_INTRO_ContentsLine");
            this.div_slide.Div01.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "367", "6", "1", "18", null, null, this.div_slide.Div01);
            obj.set_taborder("26");
            obj.set_cssclass("sta_INTRO_ContentsLine");
            this.div_slide.Div01.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "609", "6", "1", "18", null, null, this.div_slide.Div01);
            obj.set_taborder("27");
            obj.set_cssclass("sta_INTRO_ContentsLine");
            this.div_slide.Div01.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "801", "6", "1", "18", null, null, this.div_slide.Div01);
            obj.set_taborder("28");
            obj.set_cssclass("sta_INTRO_ContentsLine");
            this.div_slide.Div01.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "993", "6", "1", "18", null, null, this.div_slide.Div01);
            obj.set_taborder("29");
            obj.set_cssclass("sta_INTRO_ContentsLine");
            this.div_slide.Div01.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer05", "absolute", "1025", "3", "75", "23", null, null, this.div_slide.Div01);
            obj.set_taborder("30");
            obj.style.set_background("URL('theme://images/utong_h2_type08.jpg') stretch");
            obj.style.set_border("0 solid #e5e5e5ff");
            obj.style.set_cursor("hand");
            this.div_slide.Div01.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "1125", "6", "1", "18", null, null, this.div_slide.Div01);
            obj.set_taborder("31");
            obj.set_cssclass("sta_INTRO_ContentsLine");
            this.div_slide.Div01.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 336, 162, this.div_login,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_cssclass("div_IINTRO_LoginBg");

            	}
            );
            this.div_login.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 156, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("13");
            		p.set_text("Div01");
            		p.set_cssclass("div_INTRO_ContentsBg02");
            		p.set_scrollbars("none");
            		p.style.set_border("0 solid #f7f8f9ff,1 solid #eef0f0ff,1 solid #eef0f0ff,1 solid #eef0f0ff");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 672, 156, this.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("14");
            		p.set_text("Div02");
            		p.set_cssclass("div_INTRO_ContentsBg01");

            	}
            );
            this.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 338, 162, this.div_join,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("39");
            		p.set_visible("false");
            		p.set_cssclass("div_WF_PopupBg");

            	}
            );
            this.div_join.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1002, 29, this.div_slide.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.style.set_background("white");

            	}
            );
            this.div_slide.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1126, 29, this.div_slide.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.set_positionstep("1");
            		p.style.set_background("white");

            	}
            );
            this.div_slide.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1008, 33, this.div_slide,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("41");
            		p.set_text("Div02");
            		p.style.set_background("white");
            		p.set_scrollbars("none");

            	}
            );
            this.div_slide.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1008, 617, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Intro");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl", "frame::main_bottom.xfdl");
        };
        
        // User Script
        this.addIncludeScript("Intro_old.xfdl", "lib::comLib.xjs");
        this.registerScript("Intro_old.xfdl", function() {
        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        //include "lib::comLib.xjs";

        /************************************************************************************************
         * FORM 변수 선언 영역
        ************************************************************************************************/
        this.TRANS_YN = ""
        this.sId = "Intro.xfdl";
        this.nSecondPos = 0;
        this.nFirstPos = 0;
        this.nWidth = 0;

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.TRANS_YN = "";

        	trace("Intro In");
        	try
        	{
        		trace("nhUserId >>>> ");
        		trace(application.getPrivateProfile("nhUserId") + "<<<<");
        		
        		if(!this.gfn_isNull(application.getPrivateProfile("nhUserId")))
        		{
        			this.div_login.edt_id.set_value(application.getPrivateProfile("nhUserId"));
        			this.div_login.CheckBox00.set_value(true);
        		}
        		
        		if(!this.gfn_isNull(application.getPrivateProfile("userid")))
        		{	
        			application.afrm_VFrameSet0.set_separatesize("0,65,*");
        			application.afrm_HFrameSet0.set_separatesize("0,0,*");
        // 			
        			this.div_login.edt_id.set_value(application.getPrivateProfile("userid"));
        			this.div_login.edt_pw.set_value(application.getPrivateProfile("userpw"));
        			
        			this.TRANS_YN = "Y"
        			this.div_login.btn_login.click();
        		}
        	}
        	catch(e)
        	{
        		trace("userid >>>>>>>");
        		trace(nexacro._getCookie("userid") + "<<<<");
        		
        		if(!this.gfn_isNull(nexacro._getCookie("nhUserId")))
        		{
        			this.div_login.edt_id.set_value(nexacro._getCookie("nhUserId"));
        			this.div_login.CheckBox00.set_value(true);
        		}
        		
        		if(!this.gfn_isNull(nexacro._getCookie("userid")))
        		{	
        			application.afrm_VFrameSet0.set_separatesize("0,65,*");
        			application.afrm_HFrameSet0.set_separatesize("0,0,*");
        // 			
        			this.div_login.edt_id.set_value(nexacro._getCookie("userid"));
        			this.div_login.edt_pw.set_value(nexacro._getCookie("userpw"));
        			
        			this.TRANS_YN = "Y"
        			this.div_login.btn_login.click();
        		}
        	}
        	finally
        	{
        		application.setPrivateProfile("userid", "");
        		application.setPrivateProfile("userpw","");
        	}
        	
        	trace("before gfn_setInitForm");
        	this.gfn_setInitForm(obj, e); //공통
        	
        	//Message List 
        	this.fn_callMessageList();
        	this.div_login.edt_id.setFocus();
        }

        this.fn_afterFormOnload = function()
        {
        	trace("afterFormOnload");
        	this.fn_checkOpenWebSign();
        	
        	if(application.gds_session.rowcount > 0)
        	{
        		this.fn_callMenuList();
        		this.fn_callMymenu();
        		this.fn_callAuthorityWorkplace();
        		this.fn_callSystemAuth();
        	}
        	else
        	{
        		this.fn_retrieveBlbdOfancMainList();
        	}
        	
        	this.nSecondPos = nexacro.toNumber(this.div_slide.Div01.left);
        	this.nFirstPos  = nexacro.toNumber(this.div_slide.Div00.left);
        	this.nWidth = nexacro.toNumber(this.div_slide.Div00.width);
        	
        	this.Div02.btn_sms.set_visible(false); // 긴급SMS 버튼 숨김
        	
        	this.setTimer(1,100);
        	
        }

        /************************************************************************************************
         * TRANSACTION FUNCTION
        ************************************************************************************************/
        this.fn_retrieveBlbdOfancMainList = function()
        {
        	var sSvcID        = "retrieveBlbdOfancMainList";
        	var sURL          = "svc::rest/pt/blbd/retrieveBlbdOfancMainList";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_bbs=ds_bbs ds_popup=ds_popup ds_popupOfanc=ds_popupOfanc";	
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBackIntro";
        	var sTranType     = "S"; // U:수정/저장, S:조회
        	
        	application.set_usewaitcursor(false);
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_callBackIntro = function(svcID,ErrorCode,ErrorMsg)
        {	
        	trace("fn_callBackIntro");
        	application.set_usewaitcursor(true);	
         	if(ErrorCode < 0) //에러
         	{	
        		application.gv_userTPC = "";
        		switch(svcID)
        		{			
        			case "getUserType":
        				application.gv_userTPC = "";
        				switch(ErrorCode)
        				{
        					case -1:
        						this.gfn_getMessage("alert", "error.message.server.exception");
        						break;
        					case -2:	// 아이디와 비밀번호를 확인하세요.
        						this.gfn_getMessage("alert", "error.message.2001.badCredentials");
        						break;
        					case -5:
        						this.gfn_getMessage("alert", "error.message.2000.maxLoginTry");
        						break;
        				}
        				break;
        				// 아이디와 비밀번호를 확인하세요.
        				this.gfn_getMessage("alert", "error.message.2001.badCredentials");
        				break;
        			case "retrieveSession":
        				switch(ErrorCode)
        				{
        					case -2:	// 아이디와 비밀번호를 확인하세요.
        						this.gfn_getMessage("alert", "error.message.2001.badCredentials");
        						break;
        					case -3:
        						this.gfn_getMessage("alert", ErrorMsg);
        						break;	
        					case -1:
        						this.gfn_getMessage("alert", "error.message.server.exception");
        						break;
        					case -9:
        						var blockMsgs = ErrorMsg.split("||");
        						var blockMsg = "<" + blockMsgs[0] + ">\n\n" + blockMsgs[1] + "\n" + blockMsgs[2] + " ~ " + blockMsgs[3];
        						alert(blockMsg);
        						break;
        				}
        				break;
        			default:
        			
        				break;
        			
        		}
         	}
         	else 
         	{
        		switch(svcID)
        		{
        			case "getUserType":
        				
        				if(this.ds_USR_TPC.rowcount > 0){
        					if(this.div_login.CheckBox00.value == true)
        					{
        						//쿠키에 ID를 저장한다.
        						try
        						{
        							application.setPrivateProfile("nhUserId", this.div_login.edt_id.value);
        						}
        						catch(e)
        						{
        							nexacro._setCookie("nhUserId", this.div_login.edt_id.value);
        						}
        					}
        					else 
        					{
        						
        						//쿠키에 저장된 ID를 삭제한다.
        						try
        						{
        							application.setPrivateProfile("nhUserId", "");
        						}
        						catch(e)
        						{
        							nexacro._setCookie("nhUserId", "");
        						}
        					}

        					if(this.ds_USR_TPC.getColumn(0,"USR_TPC") == "99"){
        						application.gv_userTPC = "admin";
        						//this.fn_callAdminSite();
        					}else{
        					
        				
        						var EEdif = nexacro.toNumber("20151231") - nexacro.toNumber(this.gfn_today("yyyyMMdd"))   					
        										
        						if( EEdif > 0  && this.ds_USR_TPC.getColumn(0,"USR_TPC") == "01"){					
        							alert(" 정보분석 서비스 사용을 희망하지 않는 업체는 화면상단의 \n 내정보 > 회원정보변경 > 서비스 이용 > 정보분석 이용에서\n 선택한 서비스 체크해제 후 저장해주세요.\n 미 해지시 1월부터 과금반영 됩니다 ");
        						}
        							application.gv_userTPC = "user"
        						}
        						this.fn_callSession();
        					
        				}else{
        					alert("회원정보가 존재하지 않습니다.");
        				}
        				break;
        		
        			case "retrieveBlbdOfancMainList":
        				this.popup();
        				break;
        			
        			case "retrieveSession":
        				this.TRANS_YN = "";
        				if(this.ds_login.rowcount > 0){
        					this.fn_setGlobalVariable();
        							
        					this.fn_callMenuList();
        					this.fn_callMymenu();					
        					
        					if(application.gv_userTPC == "user"){
        						this.fn_callAuthorityWorkplace(); //권한사업장
        						this.fn_callSystemAuth();
        					}
        																	
        				}else{
        					alert("회원정보가 존재하지 않습니다.");
        				}
        				
        				break;
        			case "updateReststscout":
        			
        				alert("휴면계정상태에서 승인상태로 풀렸습니다. \n웹서비스의 정상 이용이 가능합니다.");
        				return;
        			case "retrieveMenuList":
        				if (!this.fn_userCheck()) {
        					return;
        				}
        				
        				application.afrm_TopFrame.set_formurl("");
        				application.afrm_LeftFrame.set_formurl("");
        				application.afrm_PotalFrame.set_formurl("");
        				
        				if(application.gv_userTPC == "admin"){
        					application.afrm_TopFrame.set_formurl("frame::TopFrame_portal_admin.xfdl");
        					application.afrm_LeftFrame.set_formurl("frame::LeftFrame_admin.xfdl");
        					application.afrm_PotalFrame.set_formurl("frame::Potal_admin.xfdl");
        				}else{
        					application.afrm_TopFrame.set_formurl("frame::TopFrame.xfdl");
        					application.afrm_LeftFrame.set_formurl("frame::LeftFrame.xfdl");
        					application.afrm_PotalFrame.set_formurl("frame::Potal.xfdl");
        				}
        				application.afrm_VFrameSet0.set_separatesize("0,65,*");
        				application.afrm_HFrameSet0.set_separatesize("0,0,*");
        				
        				var Sdif =  nexacro.toNumber(this.gfn_today("yyyyMMdd")) -nexacro.toNumber("20151204")   
        				var Edif = nexacro.toNumber("20160120") - nexacro.toNumber(this.gfn_today("yyyyMMdd"))   
        				var ASdif =  nexacro.toNumber(this.gfn_today("yyyyMMdd")) -nexacro.toNumber("20151227")   
        				var AEdif = nexacro.toNumber("20160120") - nexacro.toNumber(this.gfn_today("yyyyMMdd"))   
        				
        				if(application.gv_changeMb == "Y" && Sdif > 0  &&  Edif > 0 ){
        					
        					var bFlag = confirm("미전환 회원가입신청을 하지 않은 업체입니다. \n유예기간(2016년 01월 19일) 이후에는 로그인이 \n 불가합니다. \n 회원정보변경 페이지에서 가입신청을 해주세요.");
        										
        					if(bFlag){
        						application.afrm_HFrameSet0.set_separatesize("190,*,0");
        						
        						var moveMenuId ="";
        						if(application.gv_userType == "01"){
        							moveMenuId = "11001005";
        						}
        						this.gfn_moveMenuId(moveMenuId,"","INFO");
        						return;
        					}
        				}else if(application.gv_changeMb == "A" && ASdif > 0  &&  AEdif > 0 ){
        					
        					var bFlag = confirm("결제방식을 자동이체로 선택하신 경우에는 결제계좌의 \n 공인인증서로 전자서명을 하여 자동이체 동의를 해주셔야 \n 합니다(전자금융거래법 15조). \n 회원정보변경 페이지로 이동 후 저장버튼을 클릭하여 \n 전자서명을 해주시기 바랍니다.");
        										
        					if(bFlag){
        						application.afrm_HFrameSet0.set_separatesize("190,*,0");
        						
        						var moveMenuId ="";
        						if(application.gv_userType == "01"){
        							moveMenuId = "11001005";
        						}
        						this.gfn_moveMenuId(moveMenuId,"","INFO");
        						return;
        					}
        				}else if(application.gv_userStatus =="4" && Sdif > 0  &&  Edif > 0 ){
        					
        					var bFlag = confirm("서비스 회원 승인이 보류되었습니다. \n유예기간(2016년 01월 19일) 이후에는 로그인이 \n 불가합니다. \n회원정보변경으로 이동합니다.");
        										
        					if(bFlag){
        						application.afrm_HFrameSet0.set_separatesize("190,*,0");
        						var moveMenuId ="";
        						if(application.gv_userType == "01"){
        							moveMenuId = "11001005";
        						}
        						this.gfn_moveMenuId(moveMenuId,"","INFO");
        						return;
        					}
        				}
        				
        				if(application.gv_pwOverTermYn == "Y"){
        					
        					var bFlag = confirm("비밀번호 변경일자가 90일이 지났습니다.\n지금 비밀번호를 변경하시겠습니까?");
        										
        					if(bFlag){
        						application.afrm_HFrameSet0.set_separatesize("190,*,0");
        						var moveMenuId ="";
        						if(application.gv_userType == "01"){
        							moveMenuId = "11001008";
        						}else if (application.gv_userType =="02"){
        							moveMenuId = "21001008";
        						}else if (application.gv_userType =="03"){
        							moveMenuId = "31001008";
        						}else if (application.gv_userType =="81"){
        							moveMenuId = "62001003";
        						}
        						this.gfn_moveMenuId(moveMenuId,"","INFO");
        						return;
        					}
        				}

        				if(application.gv_changeElt == "Y"){
        					
        					alert("전자 계약서가 변경되었습니다. \n 확인 부탁드립니다. ");
        					
        				}
        				
        				if (application.gv_weakPwYn == "Y") {
        					alert("현재 비밀번호는 보안에 취약합니다.\n다른 비밀번호로 변경하시기 바랍니다.");
        					
        					application.afrm_HFrameSet0.set_separatesize("190,*,0");
        					var moveMenuId ="";
        					
        					if(application.gv_userType == "01"){
        						moveMenuId = "11001008";
        					}else if (application.gv_userType =="02"){
        						moveMenuId = "21001008";
        					}else if (application.gv_userType =="03"){
        						moveMenuId = "31001008";
        					}else if (application.gv_userType =="04"){
        						moveMenuId = "41001003";
        					}else if (application.gv_userType =="81"){
        						moveMenuId = "62001003";
        					}
        					
        					this.gfn_moveMenuId(moveMenuId,"","INFO");
        					return;
        				}
        				
        				break;
        				
        			case "retrieveMyMenuList":
        				break;
        				
        			case "getMessageList":
        				break;
        			case "retrieveSystemAuth":
        					application.gv_systemAuth = this.ds_systemAuth.getColumn(0,"CHECK_AUTH");					
        				break;
        			default:
        			
        				break;	
        	
        		}
         	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.btn_login_onclick = function(obj,e)
        {	

        
        	var sId = this.div_login.edt_id.value;
        	var sPW = this.div_login.edt_pw.value;
        	if(this.gfn_isNull(sId)){
        		alert("아이디를 입력하세요.");
        		this.div_login.edt_id.setFocus();
        		return;
        	}
        	
        	if(this.gfn_isNull(sPW)){
        		alert("비밀번호를 입력하세요.");
        		this.div_login.edt_pw.setFocus();
        		return;
        	}
        	
        	var sParam        = "MB_ID="+sId+" MB_PW="+sPW + " TRANS_YN="+ this.TRANS_YN;	
        	
        	application.gv_userTPC = "";
        	//User Type체크(일반/운영)
        	var sSvcID        = "getUserType";
        	var sURL          = "svc::rest/pt/getUserType";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_USR_TPC=ds_USR_TPC";
        	var sArgument     = sParam;
        	var sCallbackFunc = "fn_callBackIntro";
        	var sTranType     = "U"; // U:저장/삭제, S:조회
            
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_callSession = function()
        {
        	var sSId = this.div_login.edt_id.value;
        	var sSPW = this.div_login.edt_pw.value;

        	var sSParam;
        	
        	if(application.gv_userTPC == "admin"){
        		sSParam = "OPER_MB_ID="+sSId+" MB_PW="+sSPW+ " TRANS_YN="+ this.TRANS_YN;
        	}else{
        		sSParam = "MB_ID="+sSId+" MB_PW="+sSPW+ " TRANS_YN="+ this.TRANS_YN;
        	}
        	var sSvcID        = "retrieveSession";
        	var sURL          = "svc::rest/pt/retrieveSession";		// svc = http://localhost:8080/nhvan/
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_login=ds_session";
        	var sArgument     = sSParam;
        	var sCallbackFunc = "fn_callBackIntro";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_callMenuList = function()
        {
        	var sURL;
        	if(application.gv_userTPC == "admin"){
        		sURL = "svc::rest/mg/retrieveMenuListAll";
        	}else{
        		sURL = "svc::rest/mg/retrieveMenuList";
        	}
        	
        	var sGlnCode      = this.gfn_nvl(this.ds_login.getColumn(0,"glnCode"), application.gds_session.getColumn(0, "glnCode"));

        	var sSvcID        = "retrieveMenuList";
        			// svc = http://localhost:8080/nhvan/
        	var sInDatasets   = "";
        	var sOutDatasets  = "gds_menu=ds_menu gds_userInfoMenu=ds_my_menu";
        	var sArgument     = "glnCode="+sGlnCode;
        	var sCallbackFunc = "fn_callBackIntro";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this.fn_callMessageList = function()
        {
        	var sSvcID        = "getMessageList";
        	var sURL          = "svc::rest/common/getMessageList";		// svc = http://localhost:8080/nhvan/
        	var sInDatasets   = "";
        	var sOutDatasets  = "gds_msg=message_list";
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBackIntro";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType, true);
        	
        }

        this.fn_callAdminSite = function()
        {
        	var pId = this.div_login.edt_id.value;
        	var pPW = this.div_login.edt_pw.value;
        	this.WebBrowser00.set_url("javascript:window.open('http://121.156.58.242:8080/escm_admin/intro.html?gv_paramID="+pId+"&gv_paramPW="+pPW+"','popup','top=0px,left=0px,height=768px,width=1024px')"); 
        	
        	//크롬브라우저 때문에. 런타임에서는 오류남
        	var win = window.open("","_self");
        	win.close();
        }

        this.button_onclick = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_01":
        			this._gfn_callServiceInfo(10100000);
        			break;
        			
        		case "btn_02":
        			this._gfn_callServiceInfo(10200000);
        			break;
        			
        		case "btn_03":
        			this._gfn_callServiceInfo(30100000);
        			break;
        			
        		case "btn_04":
        			this._gfn_callServiceInfo(40100000);
        			break;
        		
        		case "btn_plus":
        			break;
        			
        		case "btn_join":
        			
        			//아이디 비번 초기화
        			this.div_login.edt_id.set_value("");
        			this.div_login.edt_pw.set_value("");
        		
        			this.fn_join();
        			break;
        			
        		case "btn_find":
        			this.fn_searchIdPw();
        			break;
        			
        		case "btn_remote":
        			window.open("http://939.co.kr/nhescm/");
        			break;
        		
        		case "btn_into":
        			this._gfn_callServiceInfo(20100000);
        			break;
        			
        		case "btn_more":
        			application.afrm_TopFrame.set_formurl("frame::TopFrame.xfdl");
        			application.afrm_LeftFrame.set_formurl("frame::LeftFrame.xfdl");
        			
        			application.afrm_VFrameSet0.set_separatesize("0,65,*");
        			
        			this.gfn_OpenMenuId("25005000","INFO");
        			application.afrm_PotalFrame.childFrame.fn_toDoList();	
        			break;
        		
        		case "btn_sms" :
        			this.fn_openSMS();
        			break;
        	}
        }

        this.grd_oncellclick = function(obj,e)
        {
        	var objDs = this.lookup(obj.binddataset);
        	switch(obj.name)
        	{	
        		case "grd_bbs":
        			this.fn_openBbsNotice(e.row);
        			break;
        	}
        	
        }

        /************************************************************************************************
         * 사용자 함수 영역
        ************************************************************************************************/
        this.fn_openSMS = function()
        {
        	var oArg = {};
        	var sOption = "autosize=true,title=true,modeless=true";
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("POP_SMS","POPUP::POPUP_SMS.xfdl",oArg,sOption,sPopupCallBack);	
        }

        this.fn_openBbsNotice = function(nRow)
        {
        	var oArg = {blbdId:this.ds_bbs.getColumn(nRow, "BLBD_ID"), bbrdId:this.ds_bbs.getColumn(nRow, "BBRD_ID")};
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";
        	
        	var view = "OMG_DS_SC_4111"; // 일반 게시판상세
        	if (this.ds_bbs.getColumn(nRow, "NAMO_YN") == "Y") {
        		view = "OMG_DS_SC_4115"; // 나모에디터 작성 게시판상세
        	}
        	this.gfn_openPopup(view,"OMG.PT::"+view+".xfdl",oArg,sOption,sPopupCallBack);	  
        	//this.gfn_openPopup("OMG_DS_SC_4111","OMG.PT::OMG_DS_SC_4111.xfdl",oArg,sOption,sPopupCallBack);	
        }

        
        this.fn_openRequestCheck = function()
        {
        	var oArg = {paramMode:"S"};
        	var sOption = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";        
        	this.gfn_openPopup("popId","OMG.BT::OMG_DS_SC_1111.xfdl",oArg,sOption,sPopupCallBack);	  
        }

        /*신규업체 계약상담 페이지 이동*/
        this.cbo_new_onitemchanged = function(obj,e)
        {
        	if(e.postvalue == 1){
        		this.fn_openRequestCheck();
        	}
        	if(e.postvalue == 2){
        		this.div_new.bringToFront();
        		this.div_new.set_visible(true);
        	}
        	var nIndex = -1;
        	obj.set_index(nIndex);
        }

        this.btn_new_onclick = function(obj,e)
        {
        	//this.cbo_new.dropdown();
        	application.afrm_TopFrame.set_formurl("");
        	application.afrm_PotalFrame.set_formurl("");
        	application.afrm_LeftFrame.set_formurl("frame::LeftFrame_serviceBT.xfdl");
        	application.afrm_TopFrame.set_formurl("frame::TopFrame_serviceBT.xfdl");
        	
        	application.afrm_VFrameSet0.set_separatesize("0,65,*");
        	application.afrm_HFrameSet0.set_separatesize("190,*,0");
        	application.afrm_VFrameSet1.set_separatesize("0,*");
        	
        	this.gfn_OpenMenuId("10100000","","BT"); 
        }

        this.fn_searchIdPw = function()
        {
        	var oArg           = "";
        	var sOption        = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("POP_IDPW","OMG.PT::OMG_DS_SC_5120.xfdl",oArg,sOption,sPopupCallBack);	    
        }

        this.fn_setGlobalVariable = function()
        {
        	trace(this.ds_login.saveXML);
        	application.gv_userKey         = this.gfn_nvl(this.ds_login.getColumn(0, "userKey"), "");
        	application.gv_userId          = this.gfn_nvl(this.ds_login.getColumn(0, "userID"), "");
        	application.gv_glnCode         = this.gfn_nvl(this.ds_login.getColumn(0, "glnCode"), "");
        	application.gv_mbcoType        = this.gfn_nvl(this.ds_login.getColumn(0, "mbcoType"), "");
        	application.gv_companyName     = this.gfn_nvl(this.ds_login.getColumn(0, "companyName"), "");
        	application.gv_userName        = this.gfn_nvl(this.ds_login.getColumn(0, "userName"), "");
        	application.gv_companyType     = this.gfn_nvl(this.ds_login.getColumn(0, "commanyType"), "");
        	application.gv_lastLoginDt     = this.gfn_nvl(this.ds_login.getColumn(0, "lastLoginDt"), "");
        	application.gv_userType        = this.gfn_nvl(this.ds_login.getColumn(0, "userType"), "");
        	application.gv_firstLoginYn    = this.gfn_nvl(this.ds_login.getColumn(0, "firstLoginYn"), "");
        	application.gv_userCvDsc       = this.gfn_nvl(this.ds_login.getColumn(0, "userCvDsc"), "");
        	application.gv_userStatus      = this.gfn_nvl(this.ds_login.getColumn(0, "userStatus"), "");
        	application.gv_userAuth        = this.gfn_nvl(this.ds_login.getColumn(0, "userAuth"), "");
        	application.gv_pwOverTermYn    = this.gfn_nvl(this.ds_login.getColumn(0, "pwOverTermYn"), "");
        	application.gv_hoffApvYn       = this.gfn_nvl(this.ds_login.getColumn(0, "hoffApvYn"), "");
        	application.gv_naUsrSysKdc     = this.gfn_nvl(this.ds_login.getColumn(0, "naUsrSysKdc"), "");
        	application.gv_svcStatus       = this.gfn_nvl(this.ds_login.getColumn(0, "svcStatus"), "");
        	application.gv_bizNumber       = this.gfn_nvl(this.ds_login.getColumn(0, "bizNumber"), "");
        	application.gv_changeMb        = this.gfn_nvl(this.ds_login.getColumn(0, "CHANGE_MB"), "");
        	application.gv_changeElt       = this.gfn_nvl(this.ds_login.getColumn(0, "CHANGE_ELT"), "");
        	application.gv_upGlnCode       = this.gfn_nvl(this.ds_login.getColumn(0, "upGlnCode"), "");
        	application.gv_billingUserID   = this.gfn_nvl(this.ds_login.getColumn(0, "billingUserID"), "");
        	application.gv_billingUserName = this.gfn_nvl(this.ds_login.getColumn(0, "billingUserName"), "");
        	application.gv_noAuthMenuGroup = this.gfn_nvl(this.ds_login.getColumn(0, "noAuthMenuGroup"), "");
        	application.gv_userSystemCode  = this.gfn_nvl(this.ds_login.getColumn(0, "userSystemCode"), "");
        	application.gv_weakPwYn        = this.gfn_nvl(this.ds_login.getColumn(0, "weakPwYn"), "");
        	application.gv_trplDtlTpc      = this.gfn_nvl(this.ds_login.getColumn(0, "trplDtlTpc"), "");
        }

        this.fn_callMymenu = function()
        {
           var sSvcID        = "retrieveMyMenuList";      
           var sURL          = "svc::rest/pt/retrieveMyMenuList";
           var sInDatasets   = "";
           var sOutDatasets  = "gds_myMenu=ds_myMenu";   
           var sArgument     = "";
           var sCallbackFunc = "fn_callBackIntro";
           var sTranType     = "S"; // U:저장/삭제, S:조회         
           this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType)
        }

        this.fn_callSystemAuth = function()
        {
           var sSvcID        = "retrieveSystemAuth";      
           var sURL          = "svc::rest/common/getCheckAuth";
           var sInDatasets   = "";
           var sOutDatasets  = "ds_systemAuth=data";   
           var sArgument     = "";
           var sCallbackFunc = "fn_callBackIntro";
           var sTranType     = "S"; // U:저장/삭제, S:조회         
           this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType)
        }

        this.fn_join = function()
        {
        	this.div_join.set_left(0);
        	this.div_join.set_visible(true);
        }

        this.fn_userCheck = function()
        {
        	/* 최초로그인이면서 전환회원이거나 미전환회원인 경우 */
        	if (application.gv_firstLoginYn == "Y" && (application.gv_userCvDsc == "1" || application.gv_userCvDsc == "2")) {
        		alert("최초로그인이면서 미전환회원인 경우, \n회원정보변경으로 이동합니다.");
        		this.fn_joinPopModify("trans");
        		return false;
        	}
        	
        	/* 가입진행상태 */
        	if (application.gv_userStatus == "0") {
        		alert("회원가입 승인 대기중입니다.\n긴급시 고객센터로 문의해 주시기 바랍니다.");
        		this.gfn_logout();
        		return false;
        	} else if (application.gv_userStatus == "2") {
        		alert("회원가입 승인이 보류되었습니다.\n회원정보변경으로 이동합니다.");
        		this.fn_joinPopModify("mod");
        		return false;
        	} else if (application.gv_userStatus == "5") {
        		alert("해지된 아이디입니다.\n로그인할 수 없습니다.");
        		this.gfn_logout();
        		return false;
        	} else if (application.gv_userStatus == "6") {
        		this.fn_restout();
        	}
        	
        	/* 본사승인여부 */
        	if (application.gv_hoffApvYn == "N") {
        		alert("본사 승인이 되지 않아 로그인할 수 없습니다.");
        		this.gfn_logout();
        		return false;
        	}
        	
        	/*
        	 * [주의] 마지막에 미납중지 여부를 검사를 해야한다.
        	 *   - GNL의 최초 가입회원이 승인 대기 및 보류 중인 경우, BL_COMP_SVC_AMN 에 데이터가 없기 때문.
        	 */
        	if (application.gv_svcStatus == "N") {
        		alert("거래처코드에 대한 서비스가 중지되어 로그인할 수 없습니다."
        			+ "\n"
        			+ "\n1. 서비스 이용료 미납 업체인 경우"
        			+ "\n    - 미납금액 입금완료 후 서비스 사용가능"
        			+ "\n      (중지된 업체의 미납금액은 자동이체로 출금되지 않습니다.)"
        			+ "\n"
        			+ "\n2. 이용료 세금계산서 발행실패 업체인 경우"
        			+ "\n    - 청구정보 수정 후 서비스 사용가능"
        			+ "\n      (폐업 신고된 사업자등록번호는 사용할 수 없습니다.)"
        			+ "\n"
        			+ "\n자세한 내용은 고객센터로 문의해 주시기 바랍니다."
        		);
        		this.gfn_logout();
        		return false;
        	}
        	
        	return true;
        }
        /*휴면계정 품*/
        this.fn_restout = function()
        {
            var id = this.gfn_nvl(this.ds_login.getColumn(0, "userID"), "");
            var name = this.gfn_nvl(this.ds_login.getColumn(0, "userName"), "");
            var ent_prg_stsc = this.gfn_nvl(this.ds_login.getColumn(0, "userStatus"), "");
        	this.ds_param.addRow();
        	this.ds_param.setColumn(0, "MB_ID", id);
        	this.ds_param.setColumn(0, "USR_NM", name);
        	this.ds_param.setColumn(0, "ENT_PRG_STSC", ent_prg_stsc);
        	
        	var sSvcID        = "updateReststscout";
        	var sURL          = "svc::rest/mg/usrinf/updateReststscout";
        	var sInDatasets   = "ds_param=ds_param";
        	var sOutDatasets  = "";
        	var sArgument     = "";
        	var sCallbackFunc = "fn_callBackIntro";
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }
        this.fn_joinPopModify = function(type)
        {
        	var oArg = {paramMode:"Y"};
        	var grp    = application.gds_userInfoMenu.getColumn(1,"SVC_GROUP");
        	var fileNm = application.gds_userInfoMenu.getColumn(1,"FILE_NAME");
        	var sUrl   = grp+"::"+fileNm+".xfdl";
        	
        	if(application.gv_userType == '01'){
        		sUrl ="OMG.PT::OMG_DS_SC_5114.xfdl";
        	} else if(application.gv_userType == '02'){
        		sUrl ="OMG.PT::OMG_DS_SC_5115.xfdl";
        	} else if(application.gv_userType == '03'){
        		sUrl ="OMG.PT::OMG_DS_SC_5116.xfdl";
        	} else if(application.gv_userType == '04'){
        		sUrl ="OMG.PT::OMG_DS_SC_5118.xfdl";
        	} else if(application.gv_userType == '81'){
        		sUrl ="OMG.PT::OMG_DS_SC_5170.xfdl";
        	}
        	
        	//전환회원 및 미전환회원인 경우 url은 고정값
        	if(type=='trans'){
        		sUrl ="OMG.PT::OMG_DS_SC_5113.xfdl";
        	}

        	var sOption        = "autosize=true,title=true";
        	var sPopupCallBack = "fn_popupAfter_joinPopModify"; 
        	this.gfn_openPopup("joinPopModify",sUrl,oArg,sOption,sPopupCallBack);
        }

        this.fn_popupAfter_joinPopModify = function()
        {
        	this.gfn_logout();	
        }
        /***************************************************
        	회원종류선택
        ****************************************************/
        this.btn_confirm_onclick = function(obj,e)
        {
        	var sVal = this.div_join.rdo_userType1.value;
        		sVal = sVal + this.div_join.rdo_userType2.value;
        		sVal = sVal + this.div_join.rdo_userType3.value;
        		sVal = sVal + this.div_join.rdo_userType4.value;
        		sVal = sVal + this.div_join.rdo_userType5.value;
        	
        	if (this.gfn_isNull(sVal)) {
        		alert("회원종류를 선택하세요.");
        		return;
        	}
        	
        	if (sVal == "01") {
        		this.fn_joinUser("OMG.PT::OMG_DS_SC_5110.xfdl");
        	} else if (sVal == "02") {
        		this.fn_joinUser("OMG.PT::OMG_DS_SC_5111.xfdl");
        	} else if (sVal == "03") {
        		this.fn_joinUser("OMG.PT::OMG_DS_SC_5112.xfdl");
        	} else if (sVal == "04") {
        		this.fn_joinUser("OMG.PT::OMG_DS_SC_5117.xfdl");// 세금계산서전용 추가
        	} else if (sVal == "81") {
        		this.fn_joinUser("OMG.PT::OMG_DS_SC_5170.xfdl");// AMARKET 추가
        	}
        }

        /***************************************************
        	회원종류에 따른 회원가입 화면 호출
        ****************************************************/
        this.fn_joinUser = function(url)
        {
        	this.btn_close_onclick();
        	
        	var oArg = {paramMode:"U", dsArg:""};
        	var sOption = "autosize=true,title=true";	
        	var sPopupCallBack = "fn_popupAfter";    
        	this.gfn_openPopup("popId",url,oArg,sOption,sPopupCallBack);	
        }

        /***************************************************
        	후처리
        ****************************************************/
        this.fn_popupAfter = function(strId,strVal)
        {
        	trace("fn_popupAfter");
        }

        this.btn_close_onclick = function(obj,e)
        {
        	this.div_join.set_visible(false);
        	for(var i=1; i<6; i++){
        		this.div_join.all["rdo_userType"+i].set_value("");
        	}
        }

        this.fn_changeUserType = function(obj,e)
        {
        	var sCode = obj.name.substr(12);
        	
        	for(var i=1; i<6; i++){
        		if(sCode == i) continue;
        		this.div_join.all["rdo_userType"+i].set_value("");
        	}
        }

        this.fn_callAuthorityWorkplace = function()
        {
        	var sSvcID        = "getAuthorityWorkplace";
        	var sURL          = "svc::rest/common/getRightsBizPlace";
        	var sInDatasets   = "";
        	var sOutDatasets  = "gds_authorityWorkplace=data";
        	var sArgument     = "";
        	var sCallbackFunc = "gfn_callBackReturn";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        this._gfn_callServiceInfo = function(nType)
        {
        // 	application.afrm_TopFrame.set_formurl("");
        // 	application.afrm_LeftFrame.set_formurl("");
        // 	application.afrm_PotalFrame.set_formurl("");
        // 	application.afrm_TopFrame.set_formurl("frame::TopFrame_serviceInfo.xfdl");
        // 	application.afrm_VFrameSet0.set_separatesize("0,65,*");
        // 	application.afrm_HFrameSet0.set_separatesize("0,*,0");
        // 	application.afrm_VFrameSet1.set_separatesize("0,*");
        // 	
        // 	this.gfn_OpenMenuId(nType,"","SERVICE");
        	this.gfn_openIntroMenu(nType);
        	
        }
        this.div_login_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.btn_login_onclick();
        	}
        }

        this.popup = function()
        {
        	this.url="";
        	this.bbrd_cntn = "N" ;
        	this.popup_W= 0 ;
        	this.popup_H= 0;
        	this.BlbdId="";
        	this.BbbdId="";
            this.systemFileName = "" ;
        	this.today = this.gfn_getClientTime("yyyyMMdd");
        	this.namo=""; // eSCM공지만
            
           // trace(this.ds_popup.saveXML());
            
            // eSCM공지
        	for(var i = 0 ; i < this.ds_popup.rowcount; i++){		
        	    this.framename = this.ds_popup.getColumn(i, "FRAMENAME")  ;
        	    this.bbrdId = this.ds_popup.getColumn(i, "BBRD_ID")  ;
        		this.bbrd_cntn = this.ds_popup.getColumn(i, "BBRD_CNTN")  ;
        		this.namo = this.ds_popup.getColumn(i, "BBRD_NAMO_FLNM"); // Namo file
        	    
        		if(this.ds_popup.getColumn(i, "BBRD_CNTN") == "N"  ){	
        			this.url = this.ds_popup.getColumn(i,"PICTURE");
        		}
        		
        		this.expire = application.getPrivateProfile(this.bbrdId); //this.framename
        		if(this.expire == undefined ){
        			application.setPrivateProfile(this.bbrdId, "N");
        			this.expire = "N";
        		}
        		//trace(this.bbrdId+"/expire:"+this.expire+"/today:"+this.today);
        		
        //  		if(application.getPrivateProfile(this.framename) != "Y"  ){
        		if (this.expire == "N" || this.expire < this.today) {
         			application.open(this.framename + this.bbrdId, "OMG.PT::OMG_DS_SC_9090.xfdl", this, {URL:this.url ,FRAME_NAME:this.framename,BBRD_CNTN:this.bbrd_cntn ,TYPE:this.type 	, BLBD_ID:this.BlbdId , BBRD_ID:this.bbrdId , SYSTEMFILENAME:this.systemFileName, MHT:this.namo}, "showtitlebar=false showstatusbar=true autosize=false", this.popup_W, this.popup_H , 600,640);
         			this.popup_W = this.popup_W  + 40;
        			this.popup_H= this.popup_H + 40;
         		}
        	} 		
        	
        	// 농협공지
        	for(var i = 0 ; i < this.ds_popupOfanc.rowcount; i++){
        	    this.framename = this.ds_popupOfanc.getColumn(i, "FRAMENAME")  ;
        		this.bbrd_cntn = this.ds_popupOfanc.getColumn(i, "BBRD_CNTN")  ;
        		this.bbrdId = this.ds_popup.getColumn(i, "BBRD_ID")  ;
        		
        		this.expire = application.getPrivateProfile(this.bbrdId); //this.framename
        		if(this.expire == undefined ){
        			application.setPrivateProfile(this.bbrdId, "N");
        			this.expire = "N";
        		}
        		//trace(this.bbrdId+"/expire:"+this.expire+"/today:"+this.today);

        //  		if(application.getPrivateProfile(this.framename) != "Y"  ){
        		if (this.expire == "N" || this.expire < this.today) {
         			application.open(this.framename + this.bbrdId, "OMG.PT::OMG_DS_SC_9090.xfdl", this, {URL:this.url ,FRAME_NAME:this.framename,BBRD_CNTN:this.bbrd_cntn ,TYPE:this.type 	, BLBD_ID:this.BlbdId , BBRD_ID:this.bbrdId , SYSTEMFILENAME:this.systemFileName}, "showtitlebar=false showstatusbar=true autosize=false", this.popup_W, this.popup_H , 600,640);

         			this.popup_W = this.popup_W  + 40 ;
        			this.popup_H= this.popup_H + 40;
         		}
        	}
        }

        this.fn_checkOpenWebSign = function()
        {	
        	var obj  = this.lookup("objWeb");
        	if(!this.gfn_isNull(obj))
        	{
        		obj.destroy();
        		obj = null;
        	}
        	
        	/******** 동적으로 WebBrowser 생성 ***********/
        	var objWeb = new WebBrowser("objWeb", "absolute", 0, 0, 100, 100, null, null);
        	this.addChild("objWeb", objWeb);
        	objWeb.show();
        	
        	objWeb.set_visible(false);
        	
        	objWeb.set_url(application.gv_serviceHtml_url + "escm/OpenWeb_PKI/pki/pki.html");
        	objWeb.setEventHandler("onloadcompleted", this.fn_onloadcompleted, this);
        	
        }

        this.fn_onloadcompleted = function(obj,e)
        {
        	obj.callMethod("checkInstall");
        }

        

        

        this.Intro_ontimer = function(obj,e)
        {
        	this.startSlide();
        }

        

        this.startSlide = function()
        {
        	var nLeft1 = this.div_slide.Div00.left - 1;
        	var nLeft2 = this.div_slide.Div01.left - 1;
        	
        	
        	this.div_slide.Div00.set_left(nLeft1);
        	this.div_slide.Div01.set_left(nLeft2);
        	
        	if (nLeft1 < this.nWidth * -1)
        	{
        		this.div_slide.Div00.set_left(this.nSecondPos + this.nFirstPos);
        	}
        	
        	if (nLeft2 < this.nWidth * -1)
        	{
        		this.div_slide.Div01.set_left(this.nSecondPos + this.nFirstPos);
        	}
        }

        this.ImageViewer_onmouseenter = function(obj,e)
        {
        	this.killTimer(1);
        }

        this.ImageViewer_onmouseleave = function(obj,e)
        {
        	this.setTimer(1,100);
        }

        this.ImageViewer_onclick = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "ImageViewer00"://하나로유통
        			window.open("http://www.nhhanaro.co.kr/mbshome/mbs/nahh002/index.do");
        			break;
        		case "ImageViewer01"://농협유통
        			window.open("http://www.nhhanaro.co.kr/mbshome/mbs/nahh003/index.do");
        			break;
        		case "ImageViewer02"://부산경남유통
        			window.open("http://www.nhhanaro.co.kr/mbshome/mbs/nahh004/index.do");
        			break;
        		case "ImageViewer03"://농협대전유통
        			window.open("http://www.nhhanaro.co.kr/mbshome/mbs/nahh005/index.do");
        			break;
        		case "ImageViewer04"://농협충북유통
        			window.open("http://www.nhhanaro.co.kr/mbshome/mbs/nahh006/index.do");
        			break;
        		case "ImageViewer05"://농협몰
        			window.open("http://www.nonghyupmall.com");
        			break;
        	}
        }

        this.div_login_edt_id_oneditclick = function(obj,e)
        {
        	
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("ontimer", this.Intro_ontimer, this);
            this.cbo_new.addEventHandler("onitemchanged", this.cbo_new_onitemchanged, this);
            this.div_login.btn_join.addEventHandler("onclick", this.button_onclick, this);
            this.div_login.btn_find.addEventHandler("onclick", this.button_onclick, this);
            this.div_login.edt_id.addEventHandler("onkeydown", this.div_login_onkeydown, this);
            this.div_login.edt_id.addEventHandler("oneditclick", this.div_login_edt_id_oneditclick, this);
            this.div_login.edt_pw.addEventHandler("onkeydown", this.div_login_onkeydown, this);
            this.div_login.btn_login.addEventHandler("onclick", this.btn_login_onclick, this);
            this.Div01.grd_bbs.addEventHandler("oncellclick", this.grd_oncellclick, this);
            this.Div02.btn_new.addEventHandler("onclick", this.btn_new_onclick, this);
            this.Div02.btn_into.addEventHandler("onclick", this.button_onclick, this);
            this.Div02.btn_01.addEventHandler("onclick", this.button_onclick, this);
            this.Div02.btn_02.addEventHandler("onclick", this.button_onclick, this);
            this.Div02.btn_03.addEventHandler("onclick", this.button_onclick, this);
            this.Div02.btn_04.addEventHandler("onclick", this.button_onclick, this);
            this.Div02.btn_remote.addEventHandler("onclick", this.button_onclick, this);
            this.Div02.btn_sms.addEventHandler("onclick", this.button_onclick, this);
            this.div_join.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.div_join.rdo_userType1.addEventHandler("onitemclick", this.fn_changeUserType, this);
            this.div_join.btn_cancel.addEventHandler("onclick", this.btn_close_onclick, this);
            this.div_join.btn_confirm.addEventHandler("onclick", this.btn_confirm_onclick, this);
            this.div_join.rdo_userType2.addEventHandler("onitemclick", this.fn_changeUserType, this);
            this.div_join.rdo_userType3.addEventHandler("onitemclick", this.fn_changeUserType, this);
            this.div_join.rdo_userType4.addEventHandler("onitemclick", this.fn_changeUserType, this);
            this.div_join.rdo_userType5.addEventHandler("onitemclick", this.fn_changeUserType, this);
            this.div_slide.Div00.ImageViewer00.addEventHandler("onclick", this.ImageViewer_onclick, this);
            this.div_slide.Div00.ImageViewer00.addEventHandler("onmouseenter", this.ImageViewer_onmouseenter, this);
            this.div_slide.Div00.ImageViewer00.addEventHandler("onmouseleave", this.ImageViewer_onmouseleave, this);
            this.div_slide.Div00.ImageViewer01.addEventHandler("onclick", this.ImageViewer_onclick, this);
            this.div_slide.Div00.ImageViewer01.addEventHandler("onmouseenter", this.ImageViewer_onmouseenter, this);
            this.div_slide.Div00.ImageViewer01.addEventHandler("onmouseleave", this.ImageViewer_onmouseleave, this);
            this.div_slide.Div00.ImageViewer02.addEventHandler("onclick", this.ImageViewer_onclick, this);
            this.div_slide.Div00.ImageViewer02.addEventHandler("onmouseenter", this.ImageViewer_onmouseenter, this);
            this.div_slide.Div00.ImageViewer02.addEventHandler("onmouseleave", this.ImageViewer_onmouseleave, this);
            this.div_slide.Div00.ImageViewer03.addEventHandler("onclick", this.ImageViewer_onclick, this);
            this.div_slide.Div00.ImageViewer03.addEventHandler("onmouseenter", this.ImageViewer_onmouseenter, this);
            this.div_slide.Div00.ImageViewer03.addEventHandler("onmouseleave", this.ImageViewer_onmouseleave, this);
            this.div_slide.Div00.ImageViewer04.addEventHandler("onclick", this.ImageViewer_onclick, this);
            this.div_slide.Div00.ImageViewer04.addEventHandler("onmouseenter", this.ImageViewer_onmouseenter, this);
            this.div_slide.Div00.ImageViewer04.addEventHandler("onmouseleave", this.ImageViewer_onmouseleave, this);
            this.div_slide.Div00.ImageViewer05.addEventHandler("onclick", this.ImageViewer_onclick, this);
            this.div_slide.Div00.ImageViewer05.addEventHandler("onmouseenter", this.ImageViewer_onmouseenter, this);
            this.div_slide.Div00.ImageViewer05.addEventHandler("onmouseleave", this.ImageViewer_onmouseleave, this);
            this.div_slide.Div01.ImageViewer00.addEventHandler("onclick", this.ImageViewer_onclick, this);
            this.div_slide.Div01.ImageViewer00.addEventHandler("onmouseenter", this.ImageViewer_onmouseenter, this);
            this.div_slide.Div01.ImageViewer00.addEventHandler("onmouseleave", this.ImageViewer_onmouseleave, this);
            this.div_slide.Div01.ImageViewer01.addEventHandler("onclick", this.ImageViewer_onclick, this);
            this.div_slide.Div01.ImageViewer01.addEventHandler("onmouseenter", this.ImageViewer_onmouseenter, this);
            this.div_slide.Div01.ImageViewer01.addEventHandler("onmouseleave", this.ImageViewer_onmouseleave, this);
            this.div_slide.Div01.ImageViewer02.addEventHandler("onclick", this.ImageViewer_onclick, this);
            this.div_slide.Div01.ImageViewer02.addEventHandler("onmouseenter", this.ImageViewer_onmouseenter, this);
            this.div_slide.Div01.ImageViewer02.addEventHandler("onmouseleave", this.ImageViewer_onmouseleave, this);
            this.div_slide.Div01.ImageViewer03.addEventHandler("onclick", this.ImageViewer_onclick, this);
            this.div_slide.Div01.ImageViewer03.addEventHandler("onmouseenter", this.ImageViewer_onmouseenter, this);
            this.div_slide.Div01.ImageViewer03.addEventHandler("onmouseleave", this.ImageViewer_onmouseleave, this);
            this.div_slide.Div01.ImageViewer04.addEventHandler("onclick", this.ImageViewer_onclick, this);
            this.div_slide.Div01.ImageViewer04.addEventHandler("onmouseenter", this.ImageViewer_onmouseenter, this);
            this.div_slide.Div01.ImageViewer04.addEventHandler("onmouseleave", this.ImageViewer_onmouseleave, this);
            this.div_slide.Div01.ImageViewer05.addEventHandler("onclick", this.ImageViewer_onclick, this);
            this.div_slide.Div01.ImageViewer05.addEventHandler("onmouseenter", this.ImageViewer_onmouseenter, this);
            this.div_slide.Div01.ImageViewer05.addEventHandler("onmouseleave", this.ImageViewer_onmouseleave, this);

        };

        this.loadIncludeScript("Intro_old.xfdl");
        this.loadPreloadList();
       
    };
}
)();
