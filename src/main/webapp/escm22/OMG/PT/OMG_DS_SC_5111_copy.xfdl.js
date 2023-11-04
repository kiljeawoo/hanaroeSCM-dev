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
                this.set_name("OMG_DS_SC_5111");
                this.set_classname("dddd");
                this.set_titletext("본부회원가입");
                this.set_scrollbars("autovert");
                this._setFormPosition(0,0,750,500);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_hpNo", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"30\" value=\"\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"30\" value=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_certNum", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CERT_NUM\" type=\"STRING\" size=\"30\" value=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_userInfo", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BZNO1\" type=\"STRING\" size=\"30\"/><Column id=\"BZNO2\" type=\"STRING\" size=\"30\"/><Column id=\"BZNO3\" type=\"STRING\" size=\"30\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"30\"/><Column id=\"COMP_TPC\" type=\"STRING\" size=\"30\"/><Column id=\"MB_ID\" type=\"STRING\" size=\"30\"/><Column id=\"MB_PW\" type=\"STRING\" size=\"256\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"30\"/><Column id=\"USR_TELNO\" type=\"STRING\" size=\"30\"/><Column id=\"USR_EMAIL01\" type=\"STRING\" size=\"30\"/><Column id=\"USR_EMAIL02\" type=\"STRING\" size=\"30\"/><Column id=\"SMS_RMS_YN\" type=\"STRING\" size=\"30\"/><Column id=\"EMAIL_RMS_YN\" type=\"STRING\" size=\"30\"/><Column id=\"USR_HP\" type=\"STRING\" size=\"30\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"30\"/><Column id=\"REPMNM\" type=\"STRING\" size=\"30\"/><Column id=\"DONGUP\" type=\"STRING\" size=\"30\"/><Column id=\"DONGBW\" type=\"STRING\" size=\"30\"/><Column id=\"FZIP\" type=\"STRING\" size=\"30\"/><Column id=\"RZIP\" type=\"STRING\" size=\"30\"/><Column id=\"TEL1\" type=\"STRING\" size=\"30\"/><Column id=\"TEL2\" type=\"STRING\" size=\"30\"/><Column id=\"TEL3\" type=\"STRING\" size=\"30\"/><Column id=\"HP1\" type=\"STRING\" size=\"30\"/><Column id=\"HP2\" type=\"STRING\" size=\"30\"/><Column id=\"HP3\" type=\"STRING\" size=\"30\"/><Column id=\"BIRTH\" type=\"STRING\" size=\"30\"/><Column id=\"SEX_DSC\" type=\"STRING\" size=\"30\"/><Column id=\"MB_CV_DSC\" type=\"STRING\" size=\"30\"/></ColumnInfo><Rows><Row><Col id=\"BZNO1\">104</Col><Col id=\"BZNO2\">86</Col><Col id=\"BZNO3\">59132</Col><Col id=\"NA_TRPL_C\">8808983000015</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_telNo", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMP_C\" type=\"STRING\" size=\"30\" value=\"\"/><Column id=\"SIMP_CNM\" type=\"STRING\" size=\"30\" value=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_svcAuth", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" type=\"STRING\" size=\"128\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_checkMbIdDup", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MB_ID_DUP_YN\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static90", "absolute", "18", "60", "717", "20", null, null, this);
            obj.getSetter("taborder").set("98");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static86", "absolute", "3", "0", "737", "15", null, null, this);
            obj.getSetter("taborder").set("0");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static87", "absolute", "728", "1", "17", "1195", null, null, this);
            obj.getSetter("taborder").set("1");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "753", "16", "711", "475", null, null, this);
            obj.set_taborder("95");
            obj.set_text("Div01");
            obj.style.set_background("white");
            this.addChild(obj.name, obj);
            obj = new TextArea("txa_arr01", "absolute", "17", "127", "677", "117", null, null, this.Div01);
            obj.set_taborder("0");
            obj.set_scrollbars("autovert");
            obj.set_wordwrap("char");
            obj.style.set_padding("5 5 5 5");
            obj.set_readonly("true");
            obj.set_enable("true");
            obj.set_autoselect("false");
            obj.set_tabstop("false");
            this.Div01.addChild(obj.name, obj);
            obj = new CheckBox("chk_agr01", "absolute", "675", "254", "19", "21", null, null, this.Div01);
            obj.set_taborder("1");
            this.Div01.addChild(obj.name, obj);
            obj = new TextArea("txa_arr02", "absolute", "17", "296", "677", "140", null, null, this.Div01);
            obj.set_taborder("2");
            obj.set_scrollbars("autovert");
            obj.set_wordwrap("char");
            obj.set_readonly("true");
            obj.style.set_padding("5 5 5 5");
            obj.set_tabstop("false");
            this.Div01.addChild(obj.name, obj);
            obj = new CheckBox("chk_agr02", "absolute", "675", "446", "19", "21", null, null, this.Div01);
            obj.set_taborder("3");
            this.Div01.addChild(obj.name, obj);
            obj = new Div("Div02", "absolute", "0", "0", "705", "43", null, null, this.Div01);
            obj.set_taborder("6");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "9", "107", "21", null, null, this.Div01.Div02);
            obj.getSetter("taborder").set("56");
            obj.set_text("약관동의");
            obj.style.set_font("bold 9 arial");
            this.Div01.Div02.addChild(obj.name, obj);
            obj = new Button("btn_notAgree", "absolute", "590", "9", "65", "21", null, null, this.Div01.Div02);
            obj.set_taborder("57");
            obj.set_text("동의안함");
            obj.set_cssclass("btn_WF_CRUD");
            this.Div01.Div02.addChild(obj.name, obj);
            obj = new Button("btn_agree", "absolute", "657", "9", "41", "21", null, null, this.Div01.Div02);
            obj.set_taborder("58");
            obj.set_text("동의");
            obj.set_cssclass("btn_WF_CRUD");
            this.Div01.Div02.addChild(obj.name, obj);
            obj = new TextArea("argee02", "absolute", "17", "64", null, "36", "17", null, this.Div01);
            obj.set_taborder("7");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "91", "66", "456", "30", null, null, this.Div01);
            obj.getSetter("taborder").set("8");
            obj.set_text("Static00");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);
            obj = new CheckBox("chk_allAgree", "absolute", "561", "72", "46", "21", null, null, this.Div01);
            obj.set_taborder("9");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "17", "106", "677", "21", null, null, this.Div01);
            obj.getSetter("taborder").set("10");
            obj.set_text("Static01");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "423", "254", "252", "21", null, null, this.Div01);
            obj.getSetter("taborder").set("11");
            obj.set_text("하나로eSCM 서비스 이용약관에 동의합니다.");
            obj.set_usedecorate("true");
            obj.style.set_color("red");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "17", "275", "677", "21", null, null, this.Div01);
            obj.getSetter("taborder").set("12");
            obj.set_text("Static03");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "351", "446", "321", "21", null, null, this.Div01);
            obj.getSetter("taborder").set("13");
            obj.set_text("하나로eSCM 서비스 개인정보 수집 및 이용에 동의합니다.");
            obj.set_usedecorate("true");
            obj.style.set_color("red");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("div_hiddenArea", "absolute", "4", "589", "484", "90", null, null, this);
            obj.set_taborder("99");
            obj.set_text("div_hiddenArea");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Edit("edt_randomNumber", "absolute", "15", "9", "138", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("16");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_sealVal", "absolute", "174", "9", "138", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("18");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_sealName", "absolute", "174", "41", "138", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("19");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_USR_TPC", "absolute", "320", "9", "138", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("20");
            obj.set_value("02");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_finalMbId", "absolute", "318", "41", "138", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("21");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_confirm", "absolute", "15", "38", "138", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("22");
            this.div_hiddenArea.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "18", "245", "717", "20", null, null, this);
            obj.getSetter("taborder").set("101");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("Div05", "absolute", "17", "16", "711", "503", null, null, this);
            obj.set_taborder("102");
            obj.set_text("Div01");
            obj.style.set_background("transparent");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Static("Static124", "absolute", "0", "466", "711", "29", null, null, this.Div05);
            obj.getSetter("taborder").set("118");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static91", "absolute", "0", "87", "711", "29", null, null, this.Div05);
            obj.getSetter("taborder").set("119");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new CheckBox("chk_CONTRACT_AUTH", "absolute", "215", "470", "90", "21", null, null, this.Div05);
            obj.set_taborder("120");
            obj.set_text("전자계약");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static103", "absolute", "0", "171", "711", "58", null, null, this.Div05);
            obj.getSetter("taborder").set("121");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static101", "absolute", "0", "143", "711", "29", null, null, this.Div05);
            obj.getSetter("taborder").set("122");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static95", "absolute", "0", "115", "711", "29", null, null, this.Div05);
            obj.getSetter("taborder").set("123");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Div("Div02", "absolute", "0", "-1", "711", "43", null, null, this.Div05);
            obj.set_taborder("124");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Button("btn_save", "absolute", "662", "9", "41", "21", null, null, this.Div05.Div02);
            obj.set_taborder("59");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.Div05.Div02.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "9", "143", "21", null, null, this.Div05.Div02);
            obj.getSetter("taborder").set("60");
            obj.set_text("본부 회원가입");
            obj.style.set_font("bold 9 arial");
            this.Div05.Div02.addChild(obj.name, obj);
            obj = new Static("Static89", "absolute", "0", "63", "135", "21", null, null, this.Div05);
            obj.getSetter("taborder").set("125");
            obj.set_text("회사 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static92", "absolute", "0", "87", "120", "29", null, null, this.Div05);
            obj.getSetter("taborder").set("126");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static94", "absolute", "0", "115", "120", "29", null, null, this.Div05);
            obj.getSetter("taborder").set("127");
            obj.set_text("사업장명");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static100", "absolute", "0", "143", "120", "29", null, null, this.Div05);
            obj.getSetter("taborder").set("128");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static102", "absolute", "0", "171", "120", "58", null, null, this.Div05);
            obj.getSetter("taborder").set("129");
            obj.set_text("회사주소");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static93", "absolute", "336", "87", "135", "29", null, null, this.Div05);
            obj.getSetter("taborder").set("130");
            obj.set_text("거래처코드");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static129", "absolute", "160", "91", "9", "21", null, null, this.Div05);
            obj.getSetter("taborder").set("131");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_BZNO02", "absolute", "167", "91", "30", "21", null, null, this.Div05);
            obj.set_taborder("132");
            obj.set_value("13");
            obj.set_maxlength("2");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_BZNO03", "absolute", "206", "91", "65", "21", null, null, this.Div05);
            obj.set_taborder("133");
            obj.set_value("73178");
            obj.set_maxlength("5");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_NA_TRPL_C", "absolute", "474", "91", "180", "21", null, null, this.Div05);
            obj.set_taborder("134");
            obj.set_value("2910003970997");
            obj.set_maxlength("13");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_RZIP", "absolute", "167", "147", "35", "21", null, null, this.Div05);
            obj.set_taborder("135");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static133", "absolute", "160", "146", "9", "21", null, null, this.Div05);
            obj.getSetter("taborder").set("136");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_FZIP", "absolute", "123", "147", "35", "21", null, null, this.Div05);
            obj.set_taborder("137");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_DONGBW", "absolute", "123", "177", "583", "21", null, null, this.Div05);
            obj.set_taborder("138");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_DONGUP", "absolute", "123", "202", "583", "21", null, null, this.Div05);
            obj.set_taborder("139");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "199", "91", "9", "21", null, null, this.Div05);
            obj.getSetter("taborder").set("140");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "249", "135", "21", null, null, this.Div05);
            obj.getSetter("taborder").set("141");
            obj.set_text("회원 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static107", "absolute", "0", "270", "711", "29", null, null, this.Div05);
            obj.getSetter("taborder").set("142");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "298", "711", "29", null, null, this.Div05);
            obj.getSetter("taborder").set("143");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static113", "absolute", "0", "354", "711", "29", null, null, this.Div05);
            obj.getSetter("taborder").set("144");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static115", "absolute", "0", "382", "711", "29", null, null, this.Div05);
            obj.getSetter("taborder").set("145");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static135", "absolute", "223", "448", "297", "21", null, null, this.Div05);
            obj.getSetter("taborder").set("146");
            obj.set_text("인증번호를 생성하여 등록된 휴대폰으로 전송합니다.");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static114", "absolute", "0", "382", "120", "29", null, null, this.Div05);
            obj.getSetter("taborder").set("147");
            obj.set_text("회원전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0", "354", "120", "29", null, null, this.Div05);
            obj.getSetter("taborder").set("148");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static109", "absolute", "0", "298", "120", "29", null, null, this.Div05);
            obj.getSetter("taborder").set("149");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static106", "absolute", "0", "270", "120", "29", null, null, this.Div05);
            obj.getSetter("taborder").set("150");
            obj.set_text("바이어개인번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new CheckBox("chk_TAX_AUTH", "absolute", "395", "470", "90", "21", null, null, this.Div05);
            obj.set_taborder("151");
            obj.set_text("세금계산서");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.Div05.addChild(obj.name, obj);
            obj = new CheckBox("chk_BILLING_AUTH", "absolute", "125", "470", "90", "21", null, null, this.Div05);
            obj.set_taborder("152");
            obj.set_text("웹하드");
            obj.set_value("Y");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_readonly("true");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static118", "absolute", "0", "410", "711", "58", null, null, this.Div05);
            obj.getSetter("taborder").set("153");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_confirmCertificate", "absolute", "123", "442", "89", "21", null, null, this.Div05);
            obj.set_taborder("154");
            obj.set_inputtype("number");
            obj.set_maxlength("6");
            this.Div05.addChild(obj.name, obj);
            obj = new Combo("cbo_TEL", "absolute", "123", "386", "51", "21", null, null, this.Div05);
            this.Div05.addChild(obj.name, obj);
            obj.set_taborder("155");
            obj.set_innerdataset("@ds_telNo");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj = new Edit("edt_TEL01", "absolute", "185", "386", "48", "21", null, null, this.Div05);
            obj.set_taborder("156");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_TEL02", "absolute", "242", "386", "48", "21", null, null, this.Div05);
            obj.set_taborder("157");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_USR_EMAIL01", "absolute", "123", "358", "122", "21", null, null, this.Div05);
            obj.set_taborder("158");
            obj.set_maxlength("25");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_MB_PW01", "absolute", "123", "302", "183", "21", null, null, this.Div05);
            obj.set_taborder("159");
            obj.set_password("true");
            obj.set_maxlength("16");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_MB_ID", "absolute", "123", "274", "122", "21", null, null, this.Div05);
            obj.set_taborder("160");
            obj.set_inputtype("number,english");
            obj.set_maxlength("9");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_USR_EMAIL02", "absolute", "264", "358", "122", "21", null, null, this.Div05);
            obj.set_taborder("161");
            obj.set_maxlength("25");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static134", "absolute", "250", "358", "13", "21", null, null, this.Div05);
            obj.getSetter("taborder").set("162");
            obj.set_text("@");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "336", "270", "135", "29", null, null, this.Div05);
            obj.getSetter("taborder").set("163");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static111", "absolute", "336", "298", "135", "29", null, null, this.Div05);
            obj.getSetter("taborder").set("164");
            obj.set_text("비밀번호 확인");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_USR_NM", "absolute", "474", "274", "180", "21", null, null, this.Div05);
            obj.set_taborder("165");
            obj.set_maxlength("16");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_MB_PW02", "absolute", "474", "302", "180", "21", null, null, this.Div05);
            obj.set_taborder("166");
            obj.set_password("true");
            obj.set_maxlength("16");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static116", "absolute", "336", "382", "135", "29", null, null, this.Div05);
            obj.getSetter("taborder").set("167");
            obj.set_text("휴대전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Combo("cbo_HP", "absolute", "474", "386", "51", "21", null, null, this.Div05);
            this.Div05.addChild(obj.name, obj);
            obj.set_taborder("168");
            obj.set_innerdataset("ds_hpNo");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj = new Static("Static125", "absolute", "525", "386", "9", "21", null, null, this.Div05);
            obj.getSetter("taborder").set("169");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_HP01", "absolute", "534", "386", "48", "21", null, null, this.Div05);
            obj.set_taborder("170");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static126", "absolute", "582", "386", "9", "21", null, null, this.Div05);
            obj.getSetter("taborder").set("171");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_HP02", "absolute", "591", "386", "48", "21", null, null, this.Div05);
            obj.set_taborder("172");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "177", "387", "9", "21", null, null, this.Div05);
            obj.getSetter("taborder").set("173");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "234", "387", "9", "21", null, null, this.Div05);
            obj.getSetter("taborder").set("174");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "0", "410", "120", "58", null, null, this.Div05);
            obj.getSetter("taborder").set("175");
            obj.set_text("휴대전화인증");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Button("btn_sendSms", "absolute", "123", "416", "89", "21", null, null, this.Div05);
            obj.set_taborder("176");
            obj.set_text("인증번호생성");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "223", "416", "297", "21", null, null, this.Div05);
            obj.getSetter("taborder").set("177");
            obj.set_text("인증번호를 생성하여 등록된 휴대폰으로 전송합니다.");
            this.Div05.addChild(obj.name, obj);
            obj = new Button("btn_certificate", "absolute", "221", "442", "41", "21", null, null, this.Div05);
            obj.set_taborder("178");
            obj.set_text("인증");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_CLNTNM", "absolute", "123", "119", "348", "21", null, null, this.Div05);
            obj.set_taborder("179");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "0", "466", "120", "29", null, null, this.Div05);
            obj.getSetter("taborder").set("180");
            obj.set_text("회원권한");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Button("btn_cert", "absolute", "661", "92", "41", "21", null, null, this.Div05);
            obj.set_taborder("183");
            obj.set_text("인증");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "0", "326", "711", "29", null, null, this.Div05);
            obj.getSetter("taborder").set("184");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "0", "326", "120", "29", null, null, this.Div05);
            obj.getSetter("taborder").set("185");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "336", "326", "135", "29", null, null, this.Div05);
            obj.getSetter("taborder").set("186");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Radio("rdo_SEX_DSC", "absolute", "477", "331", "183", "21", null, null, this.Div05);
            this.Div05.addChild(obj.name, obj);
            var rdo_SEX_DSC_innerdataset = new Dataset("rdo_SEX_DSC_innerdataset", this.Div05.rdo_SEX_DSC);
            rdo_SEX_DSC_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">남</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">여</Col></Row></Rows>");
            obj.set_innerdataset(rdo_SEX_DSC_innerdataset);
            obj.set_taborder("187");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj = new Button("btn_checkMbIdDup", "absolute", "248", "274", "65", "21", null, null, this.Div05);
            obj.set_taborder("188");
            obj.set_text("중복확인");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_BIRTH", "absolute", "123", "330", "183", "21", null, null, this.Div05);
            obj.set_taborder("189");
            obj.set_inputtype("number");
            obj.set_maxlength("8");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_BZNO01", "absolute", "123", "91", "35", "21", null, null, this.Div05);
            obj.set_taborder("190");
            obj.set_value("416");
            obj.set_maxlength("3");
            this.Div05.addChild(obj.name, obj);
            obj = new CheckBox("chk_BUSINESSTALK_AUTH", "absolute", "305", "470", "90", "21", null, null, this.Div05);
            obj.set_taborder("191");
            obj.set_text("계약상담");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.Div05.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 705, 43, this.Div01.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("6");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.Div01.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 711, 475, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("95");
            		p.set_text("Div01");
            		p.style.set_background("white");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 484, 90, this.div_hiddenArea,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("99");
            		p.set_text("div_hiddenArea");
            		p.set_visible("false");

            	}
            );
            this.div_hiddenArea.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 711, 43, this.Div05.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("124");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.Div05.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 711, 1139, this.Div05,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("102");
            		p.set_text("Div01");
            		p.style.set_background("transparent");
            		p.set_visible("false");

            	}
            );
            this.Div05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 750, 500, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("dddd");
            		p.set_titletext("본부회원가입");
            		p.set_scrollbars("autovert");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item3","Div05.edt_BZNO01","value","ds_userInfo","BZNO1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Div05.edt_BZNO02","value","ds_userInfo","BZNO2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Div05.edt_BZNO03","value","ds_userInfo","BZNO3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Div05.edt_NA_TRPL_C","value","ds_userInfo","NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","Div05.edt_RZIP","value","ds_userInfo","RZIP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","Div05.edt_FZIP","value","ds_userInfo","FZIP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div05.edt_DONGBW","value","ds_userInfo","DONGUP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Div05.edt_DONGUP","value","ds_userInfo","DONGBW");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","Div05.chk_TAX_AUTH","value","ds_userInfo","TAX_AUTH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","Div05.chk_CONTRACT_AUTH","value","ds_userInfo","CONTRACT_AUTH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","Div05.edt_MB_ID","value","ds_userInfo","MB_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","div_hidden.edt_USR_TPC","value","ds_userInfo","USR_TPC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Div05.edt_USR_NM","value","ds_userInfo","USR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Div05.edt_USR_EMAIL01","value","ds_userInfo","USR_EMAIL01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Div05.edt_USR_EMAIL02","value","ds_userInfo","USR_EMAIL02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","Div05.cbo_TEL","value","ds_userInfo","TEL1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","Div05.rdo_SEX_DSC","value","ds_userInfo","SEX_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","Div05.edt_TEL01","value","ds_userInfo","TEL2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","Div05.edt_TEL02","value","ds_userInfo","TEL3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","Div05.cbo_HP","value","ds_userInfo","HP1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","Div05.edt_HP01","value","ds_userInfo","HP2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","Div05.edt_HP02","value","ds_userInfo","HP3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","Div05.edt_MB_PW01","value","ds_userInfo","MB_PW");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","Div05.edt_BIRTH","value","ds_userInfo","BIRTH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Div05.edt_CLNTNM","value","ds_userInfo","CLNTNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Div05.chk_BUSINESSTALK_AUTH","value","ds_userInfo","CONTRACT_AUTH");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_5111_copy.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_5111_copy.xfdl", function() {
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {	
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {   	
        	//공통코드콤보가져오기	
        	var param = [   		
         		{code:"HP"	,     dsName:"ds_hpNo", selecttype:"N"},
         		{code:"TEL"	,     dsName:"ds_telNo", selecttype:"N"}
            ];
        	this.gfn_setPortalCommonCode(param);
        	this.Div01.Static00.set_text("하나로eSCM 서비스 이용약관, 개인정보 수집 및 이용에 <b v='true'><u v='true'>모두 동의</u></b>합니다.");
        	this.Div01.Static01.set_text("<b v='true'>[필수]하나로eSCM 서비스 이용약관</b>");
        	this.Div01.Static03.set_text("<b v='true'>[필수]하나로eSCM 서비스 개인정보 수집 및 이용동의</b>");
        	
        	/*변경될 데이터*/
        	this.Div01.txa_arr01.set_value("제 1조(목적)\n이 서비스 이용약관(이하 '약관'이라 합니다.)은 (주)농협하나로유통(이하 '회사'라 합니다.)가 제공하는"+
        								   " 서비스와 관련하여 회사와 이용 고객(또는 회원) 간에서비스의 이용 조건 및 절차, 회사 간의 권리, 의미 및 책임 사항 기타 필요한 사항을 규정함을 목적으로 합니다."
        								   );
        	this.Div01.txa_arr02.set_value("제1조 총칙\n"
        									+"제2조 개인정보의 수집항목 및 사용목적\n"
        									+"제3조 개인정보의 수집방법\n"
        									+"제4조 개인정보 자동수집장치의 설치, 운영 및 그 거부방법\n"
        	);
        		
        	this.Div01.set_visible(true);
        	this.Div05.set_visible(false);
        	
        	/*TEST*/
        	//this.Div01.set_visible(false);
        	//this.Div05.set_visible(true);
        }

        /**************************************************************
        회원인증
        ***************************************************************/
        this.btn_cert_onclick = function(obj,e)
        {
        	if(this.gfn_isNull(this.Div05.edt_BZNO01.value) || this.Div05.edt_BZNO01.getLength() !=3){		
        		alert("사업자번호를 확인해주세요.");
        		this.Div05.edt_BZNO01.setFocus();
        		return;
        	}
        	if(this.gfn_isNull(this.Div05.edt_BZNO02.value) || this.Div05.edt_BZNO02.getLength() !=2){		
        		alert("사업자번호를 확인해주세요.");
        		this.Div05.edt_BZNO02.setFocus();
        		return;
        	}
        	if(this.gfn_isNull(this.Div05.edt_BZNO03.value) || this.Div05.edt_BZNO03.getLength() !=5){
        		alert("사업자번호를 확인해주세요.");
        		this.Div05.edt_BZNO03.setFocus();
        		return;
        	}
        	if(this.gfn_isNull(this.Div05.edt_NA_TRPL_C.value) || this.Div05.edt_NA_TRPL_C.getLength() !=13){
        		alert("경제통합거래처코드를 확인해주세요.");
        		this.Div05.edt_NA_TRPL_C.setFocus();
        		return;
        	}
        	if(this.gfn_isNull(this.Div05.edt_MB_ID.value)){
        		alert("바이어개인번호를 확인해주세요.");
        		this.Div05.edt_MB_ID.setFocus();
        		return;
        	}
         
        	var param =   "bzNo1="+this.Div05.edt_BZNO01.value 
        				+" bzNo2="+this.Div05.edt_BZNO02.value				
        				+" bzNo3="+this.Div05.edt_BZNO03.value				
        				+" naTrplC="+this.Div05.edt_NA_TRPL_C.value				
        				+" usrTpc="+this.div_hiddenArea.edt_USR_TPC.value;
        	var sSvcID        = "certificateMb";
        	var sURL          = "svc::rest/pt/certificateMb";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_userInfo=ds_userInfo ds_svcAuth=ds_svcAuth";
        	var sArgument     =  param;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회	
        	 
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	
        }

        /***************************************************
        	callback메소드
        ****************************************************/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Div01.txa_arr01.addEventHandler("oneditclick", this.Div01_TextArea00_oneditclick, this);
            this.Div01.Div02.btn_notAgree.addEventHandler("onclick", this.Div01_Div02_btn_notAgree_onclick, this);
            this.Div01.Div02.btn_agree.addEventHandler("onclick", this.Div01_Div02_btn_agree_onclick, this);
            this.Div01.argee02.addEventHandler("oneditclick", this.Div01_TextArea00_oneditclick, this);
            this.Div01.chk_allAgree.addEventHandler("onclick", this.Div01_chk_allAgree_onclick, this);
            this.Div01.Static01.addEventHandler("onclick", this.Div01_Static01_onclick, this);
            this.Div01.Static02.addEventHandler("onclick", this.Div01_Static01_onclick, this);
            this.Div01.Static03.addEventHandler("onclick", this.Div01_Static01_onclick, this);
            this.Div01.Static04.addEventHandler("onclick", this.Div01_Static01_onclick, this);
            this.Div05.chk_CONTRACT_AUTH.addEventHandler("onchanged", this.CheckBox03_onchanged, this);
            this.Div05.Div02.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.Div05.Static03.addEventHandler("onclick", this.Div05_Static03_onclick, this);
            this.Div05.chk_BILLING_AUTH.addEventHandler("onchanged", this.CheckBox04_onchanged, this);
            this.Div05.btn_sendSms.addEventHandler("onclick", this.btn_sendSms_onclick, this);
            this.Div05.btn_certificate.addEventHandler("onclick", this.btn_certificate_onclick, this);
            this.Div05.btn_cert.addEventHandler("onclick", this.Div05_btn_cert_onclick, this);
            this.Div05.Static10.addEventHandler("onclick", this.Div05_Static03_onclick, this);
            this.Div05.rdo_SEX_DSC.addEventHandler("onitemclick", this.Radio00_onitemclick, this);
            this.Div05.btn_checkMbIdDup.addEventHandler("onclick", this.Div05_btn_checkMbIdDup_onclick, this);
            this.Div05.chk_BUSINESSTALK_AUTH.addEventHandler("onchanged", this.CheckBox03_onchanged, this);

        };

        this.loadIncludeScript("OMG_DS_SC_5111_copy.xfdl");

       
    };
}
)();
