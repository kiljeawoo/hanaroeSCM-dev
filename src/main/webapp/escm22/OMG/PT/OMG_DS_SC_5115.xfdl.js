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
                this.set_titletext("본부회원정보변경");
                this.set_scrollbars("autoboth");
                this._setFormPosition(0,0,750,512);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_hpNo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
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
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CERT_NUM\" type=\"STRING\" size=\"30\" value=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_svcAuth", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" type=\"STRING\" size=\"128\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_usrAuth", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" type=\"STRING\" size=\"128\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_basicInfo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BZNO1\" type=\"STRING\" size=\"30\"/><Column id=\"BZNO2\" type=\"STRING\" size=\"30\"/><Column id=\"BZNO3\" type=\"STRING\" size=\"30\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"30\"/><Column id=\"COMP_TPC\" type=\"STRING\" size=\"30\"/><Column id=\"MB_ID\" type=\"STRING\" size=\"30\"/><Column id=\"MB_PW\" type=\"STRING\" size=\"256\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"30\"/><Column id=\"USR_TELNO\" type=\"STRING\" size=\"30\"/><Column id=\"USR_EMAIL01\" type=\"STRING\" size=\"30\"/><Column id=\"USR_EMAIL02\" type=\"STRING\" size=\"30\"/><Column id=\"SMS_RMS_YN\" type=\"STRING\" size=\"30\"/><Column id=\"EMAIL_RMS_YN\" type=\"STRING\" size=\"30\"/><Column id=\"USR_HP\" type=\"STRING\" size=\"30\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"30\"/><Column id=\"REPMNM\" type=\"STRING\" size=\"30\"/><Column id=\"DONGUP\" type=\"STRING\" size=\"30\"/><Column id=\"DONGBW\" type=\"STRING\" size=\"30\"/><Column id=\"FZIP\" type=\"STRING\" size=\"30\"/><Column id=\"RZIP\" type=\"STRING\" size=\"30\"/><Column id=\"ATEL\" type=\"STRING\" size=\"30\"/><Column id=\"HTEL\" type=\"STRING\" size=\"30\"/><Column id=\"STEL\" type=\"STRING\" size=\"30\"/><Column id=\"USR_MPNO01\" type=\"STRING\" size=\"30\"/><Column id=\"USR_MPNO02\" type=\"STRING\" size=\"30\"/><Column id=\"USR_MPNO03\" type=\"STRING\" size=\"30\"/><Column id=\"BIRTH\" type=\"STRING\" size=\"30\"/><Column id=\"SEX_DSC\" type=\"STRING\" size=\"30\"/><Column id=\"USR_TPC\" type=\"STRING\" size=\"30\"/><Column id=\"CHRG_BSNNM\" type=\"STRING\" size=\"256\"/><Column id=\"ENT_PRG_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"ENT_PRG_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"USR_TELNO01\" type=\"STRING\" size=\"256\"/><Column id=\"USR_TELNO02\" type=\"STRING\" size=\"256\"/><Column id=\"USR_TELNO03\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static90", "absolute", "18", "60", "717", "20", null, null, this);
            obj.set_taborder("0");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static86", "absolute", "3", "0", "737", "15", null, null, this);
            obj.set_taborder("1");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static87", "absolute", "728", "1", "17", "1195", null, null, this);
            obj.set_taborder("2");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("div_hiddenArea", "absolute", "773", "500", "484", "90", null, null, this);
            obj.set_taborder("4");
            obj.set_text("div_hiddenArea");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Edit("edt_randomNumber", "absolute", "15", "9", "138", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("23");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_sealVal", "absolute", "174", "9", "138", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("24");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_sealName", "absolute", "174", "41", "138", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("25");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_USR_TPC", "absolute", "320", "9", "138", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("26");
            obj.set_value("02");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_finalMbId", "absolute", "318", "41", "138", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("27");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_confirm", "absolute", "15", "38", "138", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("28");
            this.div_hiddenArea.addChild(obj.name, obj);
            obj = new Edit("edt_ChgAuth", "absolute", "318", "65", "138", "21", null, null, this.div_hiddenArea);
            obj.set_taborder("29");
            this.div_hiddenArea.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "3", "245", "717", "20", null, null, this);
            obj.set_taborder("6");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Div("Div01", "absolute", "777", "16", "711", "453", null, null, this);
            obj.set_taborder("9");
            obj.style.set_background("white");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Div("Div02", "absolute", "0", "0", "711", "43", null, null, this.Div01);
            obj.set_taborder("1");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "9", "107", "21", null, null, this.Div01.Div02);
            obj.set_taborder("65");
            obj.set_text("비밀번호 재확인");
            obj.style.set_font("bold 9 arial");
            this.Div01.Div02.addChild(obj.name, obj);
            obj = new Button("btn_confirm", "absolute", "657", "9", "41", "21", null, null, this.Div01.Div02);
            obj.set_taborder("66");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_CRUD");
            this.Div01.Div02.addChild(obj.name, obj);
            obj = new ImageViewer("ImageViewer00", "absolute", "101", "131", "90", "100", null, null, this.Div01);
            obj.set_taborder("2");
            obj.set_image("URL('theme://images/img_PassWord.jpg')");
            obj.style.set_border("0 solid #bfbfbfff");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "209", "116", "292", "44", null, null, this.Div01);
            obj.set_taborder("3");
            obj.set_text("비밀번호 재확인");
            obj.set_usedecorate("true");
            obj.style.set_font("bold 24 Gulim");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "216", "198", "291", "21", null, null, this.Div01);
            obj.set_taborder("4");
            obj.set_text("본인 확인을 위해 한번 더 비밀번호를 입력해주세요.");
            obj.style.set_font("9 Gulim");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "216", "230", "291", "21", null, null, this.Div01);
            obj.set_taborder("5");
            obj.set_text("비밀번호는 타인에게 노출되지 않도록 주의해 주세요.");
            obj.style.set_font("9 Gulim");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "145", "293", "120", "21", null, null, this.Div01);
            obj.set_taborder("6");
            obj.set_text("회원ID");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "145", "333", "120", "21", null, null, this.Div01);
            obj.set_taborder("7");
            obj.set_text("비밀번호");
            this.Div01.addChild(obj.name, obj);
            obj = new Static("mb_id", "absolute", "265", "293", "140", "21", null, null, this.Div01);
            obj.set_taborder("8");
            this.Div01.addChild(obj.name, obj);
            obj = new Edit("edt_pw", "absolute", "265", "333", "140", "21", null, null, this.Div01);
            obj.set_taborder("0");
            obj.set_password("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div05", "absolute", "17", "16", "711", "610", null, null, this);
            obj.set_taborder("10");
            obj.style.set_background("transparent");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Static("Static19", "absolute", "0", "565", "711", "29", null, null, this.Div05);
            obj.set_taborder("83");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static91", "absolute", "0", "87", "711", "29", null, null, this.Div05);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static103", "absolute", "0", "171", "711", "58", null, null, this.Div05);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static101", "absolute", "0", "143", "711", "29", null, null, this.Div05);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static95", "absolute", "0", "115", "711", "29", null, null, this.Div05);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Div("Div02", "absolute", "0", "0", "711", "43", null, null, this.Div05);
            obj.set_taborder("40");
            obj.set_cssclass("div_WFSA_Searchbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Button("btn_save", "absolute", "659", "9", "41", "21", null, null, this.Div05.Div02);
            obj.set_taborder("63");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            this.Div05.Div02.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "15", "9", "143", "21", null, null, this.Div05.Div02);
            obj.set_taborder("64");
            obj.set_text("본부 회원정보변경");
            obj.style.set_font("bold 9 arial");
            this.Div05.Div02.addChild(obj.name, obj);
            obj = new Static("Static89", "absolute", "0", "63", "135", "21", null, null, this.Div05);
            obj.set_taborder("41");
            obj.set_text("회사 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static92", "absolute", "0", "87", "120", "29", null, null, this.Div05);
            obj.set_taborder("42");
            obj.set_text("사업장코드");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static94", "absolute", "0", "115", "120", "29", null, null, this.Div05);
            obj.set_taborder("43");
            obj.set_text("사업장명");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static100", "absolute", "0", "143", "120", "29", null, null, this.Div05);
            obj.set_taborder("44");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static102", "absolute", "0", "171", "120", "58", null, null, this.Div05);
            obj.set_taborder("45");
            obj.set_text("회사주소");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static93", "absolute", "336", "87", "135", "29", null, null, this.Div05);
            obj.set_taborder("46");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static129", "absolute", "512", "91", "9", "21", null, null, this.Div05);
            obj.set_taborder("47");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_BZNO02", "absolute", "519", "91", "30", "21", null, null, this.Div05);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_maxlength("2");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_BZNO03", "absolute", "558", "91", "65", "21", null, null, this.Div05);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_maxlength("5");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_NA_TRPL_C", "absolute", "123", "91", "122", "21", null, null, this.Div05);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_RZIP", "absolute", "167", "147", "35", "21", null, null, this.Div05);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static133", "absolute", "160", "146", "9", "21", null, null, this.Div05);
            obj.set_taborder("48");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_FZIP", "absolute", "123", "147", "35", "21", null, null, this.Div05);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_DONGBW", "absolute", "123", "177", "583", "21", null, null, this.Div05);
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_DONGUP", "absolute", "123", "202", "583", "21", null, null, this.Div05);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "551", "91", "9", "21", null, null, this.Div05);
            obj.set_taborder("49");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0", "246", "135", "21", null, null, this.Div05);
            obj.set_taborder("50");
            obj.set_text("회원 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static107", "absolute", "0", "269", "711", "29", null, null, this.Div05);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static113", "absolute", "0", "325", "711", "29", null, null, this.Div05);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static115", "absolute", "0", "353", "711", "29", null, null, this.Div05);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static120", "absolute", "0", "381", "711", "29", null, null, this.Div05);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static114", "absolute", "336", "115", "135", "29", null, null, this.Div05);
            obj.set_taborder("55");
            obj.set_text("회원전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0", "325", "120", "29", null, null, this.Div05);
            obj.set_taborder("56");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static106", "absolute", "0", "269", "120", "29", null, null, this.Div05);
            obj.set_taborder("57");
            obj.set_text("바이어개인번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_TEL01", "absolute", "532", "119", "48", "21", null, null, this.Div05);
            obj.set_taborder("6");
            obj.set_inputtype("number");
            obj.set_readonly("true");
            obj.set_maxlength("4");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_TEL02", "absolute", "589", "119", "48", "21", null, null, this.Div05);
            obj.set_taborder("7");
            obj.set_inputtype("number");
            obj.set_readonly("true");
            obj.set_maxlength("4");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_USR_EMAIL01", "absolute", "123", "329", "122", "21", null, null, this.Div05);
            obj.set_taborder("16");
            obj.set_maxlength("25");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_MB_ID", "absolute", "123", "273", "122", "21", null, null, this.Div05);
            obj.set_taborder("12");
            obj.set_inputtype("number,english");
            obj.set_readonly("true");
            obj.set_maxlength("9");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_USR_EMAIL02", "absolute", "264", "329", "122", "21", null, null, this.Div05);
            obj.set_taborder("17");
            obj.set_maxlength("25");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static134", "absolute", "250", "329", "13", "21", null, null, this.Div05);
            obj.set_taborder("59");
            obj.set_text("@");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static04", "absolute", "336", "269", "135", "29", null, null, this.Div05);
            obj.set_taborder("60");
            obj.set_text("바이어명");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_USR_NM", "absolute", "474", "273", "180", "21", null, null, this.Div05);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_maxlength("16");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static116", "absolute", "0", "353", "120", "29", null, null, this.Div05);
            obj.set_taborder("61");
            obj.set_text("휴대전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Combo("cbo_HP", "absolute", "123", "357", "51", "21", null, null, this.Div05);
            this.Div05.addChild(obj.name, obj);
            obj.set_taborder("18");
            obj.set_innerdataset("ds_hpNo");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj = new Static("Static125", "absolute", "174", "357", "9", "21", null, null, this.Div05);
            obj.set_taborder("62");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_HP01", "absolute", "183", "357", "48", "21", null, null, this.Div05);
            obj.set_taborder("19");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static126", "absolute", "231", "357", "9", "21", null, null, this.Div05);
            obj.set_taborder("63");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_HP02", "absolute", "240", "357", "48", "21", null, null, this.Div05);
            obj.set_taborder("20");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "523", "119", "9", "21", null, null, this.Div05);
            obj.set_taborder("64");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static06", "absolute", "580", "119", "9", "21", null, null, this.Div05);
            obj.set_taborder("65");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static119", "absolute", "0", "381", "120", "29", null, null, this.Div05);
            obj.set_taborder("66");
            obj.set_text("회원권한");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_CLNTNM", "absolute", "123", "119", "183", "21", null, null, this.Div05);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "0", "297", "711", "29", null, null, this.Div05);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "0", "297", "120", "29", null, null, this.Div05);
            obj.set_taborder("70");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "336", "297", "135", "29", null, null, this.Div05);
            obj.set_taborder("71");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Radio("rdo_SEX_DSC", "absolute", "477", "302", "183", "21", null, null, this.Div05);
            this.Div05.addChild(obj.name, obj);
            var rdo_SEX_DSC_innerdataset = new Dataset("rdo_SEX_DSC_innerdataset", this.Div05.rdo_SEX_DSC);
            rdo_SEX_DSC_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">남</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">여</Col></Row></Rows>");
            obj.set_innerdataset(rdo_SEX_DSC_innerdataset);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj = new Edit("edt_BZNO01", "absolute", "475", "91", "35", "21", null, null, this.Div05);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_maxlength("3");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new CheckBox("chk_WEBHARD_AUTH", "absolute", "125", "386", "174", "21", null, null, this.Div05);
            obj.set_taborder("21");
            obj.set_text("웹하드, 컨설팅, 마트장비");
            obj.set_value("Y");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_readonly("true");
            this.Div05.addChild(obj.name, obj);
            obj = new CheckBox("chk_CONTRACT_AUTH", "absolute", "307", "386", "90", "21", null, null, this.Div05);
            obj.set_taborder("22");
            obj.set_text("전자계약");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.Div05.addChild(obj.name, obj);
            obj = new CheckBox("chk_BUSINESS_TALK_AUTH", "absolute", "397", "386", "90", "21", null, null, this.Div05);
            obj.set_taborder("23");
            obj.set_text("계약상담");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.Div05.addChild(obj.name, obj);
            obj = new CheckBox("chk_TAX_AUTH", "absolute", "487", "386", "90", "21", null, null, this.Div05);
            obj.set_taborder("24");
            obj.set_text("세금계산서");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.Div05.addChild(obj.name, obj);
            obj = new Calendar("edt_BIRTH", "absolute", "123", "301", "110", "21", null, null, this.Div05);
            this.Div05.addChild(obj.name, obj);
            obj.set_taborder("14");
            obj.set_dateformat("yyyy-MM-dd");
            obj = new CheckBox("chk_PRICE", "absolute", "592", "386", "90", "21", null, null, this.Div05);
            obj.set_taborder("25");
            obj.set_text("모바일앱");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_TEL00", "absolute", "475", "119", "48", "21", null, null, this.Div05);
            obj.set_taborder("5");
            obj.set_inputtype("number");
            obj.set_readonly("true");
            obj.set_maxlength("4");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "0", "409", "711", "29", null, null, this.Div05);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "0", "409", "120", "29", null, null, this.Div05);
            obj.set_taborder("73");
            obj.set_text("담당업무");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_CHRG_BSNNM", "absolute", "123", "413", "583", "21", null, null, this.Div05);
            obj.set_taborder("26");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("76");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "336", "353", "135", "29", null, null, this.Div05);
            obj.set_taborder("362");
            obj.set_text("사무실전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_MP00", "absolute", "479", "357", "48", "21", null, null, this.Div05);
            obj.set_taborder("363");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static24", "absolute", "530", "357", "9", "21", null, null, this.Div05);
            obj.set_taborder("364");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_MP01", "absolute", "540", "357", "48", "21", null, null, this.Div05);
            obj.set_taborder("365");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static25", "absolute", "591", "357", "9", "21", null, null, this.Div05);
            obj.set_taborder("366");
            obj.set_text("-");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_MP02", "absolute", "600", "357", "48", "21", null, null, this.Div05);
            obj.set_taborder("367");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0", "537", "711", "29", null, null, this.Div05);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "0", "453", "203", "21", null, null, this.Div05);
            obj.set_taborder("75");
            obj.set_text("소속 및 회원유형 정보 변경");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "0", "509", "711", "29", null, null, this.Div05);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0", "509", "120", "29", null, null, this.Div05);
            obj.set_taborder("77");
            obj.set_text("변경 사업장코드");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_TO_BZPLC", "absolute", "123", "513", "96", "21", null, null, this.Div05);
            obj.set_taborder("27");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Button("btn_search", "absolute", "221", "513", "104", "21", null, null, this.Div05);
            obj.set_taborder("28");
            obj.set_text("소속사업장 조회");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "0", "537", "120", "29", null, null, this.Div05);
            obj.set_taborder("78");
            obj.set_text("변경 사무소");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static18", "absolute", "336", "509", "120", "29", null, null, this.Div05);
            obj.set_taborder("79");
            obj.set_text("변경 사업장명");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_TO_BZPLNM", "absolute", "459", "513", "180", "21", null, null, this.Div05);
            obj.set_taborder("29");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Button("btn_chg", "absolute", "123", "569", "52", "21", null, null, this.Div05);
            obj.set_taborder("32");
            obj.set_text("변경");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("sta_to_tpc", "absolute", "187", "569", "420", "21", null, null, this.Div05);
            obj.set_taborder("80");
            obj.set_text("소속사업장을 조회해주세요");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_TO_BZNO", "absolute", "641", "513", "15", "21", null, null, this.Div05);
            obj.set_taborder("81");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_TO_TPC", "absolute", "658", "513", "15", "21", null, null, this.Div05);
            obj.set_taborder("82");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_visible("false");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_TO_DEPT_ID", "absolute", "123", "541", "96", "21", null, null, this.Div05);
            obj.set_taborder("30");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            obj.set_visible("true");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "0", "565", "120", "29", null, null, this.Div05);
            obj.set_taborder("84");
            obj.set_text("소속 변경");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_TO_DEPT_NAME", "absolute", "221", "541", "207", "21", null, null, this.Div05);
            obj.set_taborder("31");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "0", "476", "711", "29", null, null, this.Div05);
            obj.set_taborder("85");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "0", "476", "120", "29", null, null, this.Div05);
            obj.set_taborder("86");
            obj.set_text("현 회원유형");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Static("Static26", "absolute", "336", "476", "120", "29", null, null, this.Div05);
            obj.set_taborder("87");
            obj.set_text("현 사무소 정보");
            obj.set_cssclass("sta_WF_Label");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_FR_TPC", "absolute", "123", "480", "122", "21", null, null, this.Div05);
            obj.set_taborder("88");
            obj.set_value("본부");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_FR_DEPT_ID", "absolute", "459", "480", "50", "21", null, null, this.Div05);
            obj.set_taborder("89");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);
            obj = new Edit("edt_FR_DEPT_NAME", "absolute", "511", "480", "195", "21", null, null, this.Div05);
            obj.set_taborder("90");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div05.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "772", "623", "716", "67", null, null, this);
            obj.set_taborder("11");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Static("Static118", "absolute", "0", "0", "711", "58", null, null, this.Div00);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Labelbg");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("edt_confirmCertificate", "absolute", "123", "32", "89", "21", null, null, this.Div00);
            obj.set_taborder("7");
            obj.set_inputtype("number");
            obj.set_maxlength("6");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "0", "0", "120", "58", null, null, this.Div00);
            obj.set_taborder("8");
            obj.set_text("휴대전화인증");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btn_sendSms", "absolute", "123", "6", "89", "21", null, null, this.Div00);
            obj.set_taborder("9");
            obj.set_text("인증번호생성");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "223", "6", "297", "21", null, null, this.Div00);
            obj.set_taborder("10");
            obj.set_text("인증번호를 생성하여 등록된 휴대폰으로 전송합니다.");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("btn_certificate", "absolute", "221", "32", "41", "21", null, null, this.Div00);
            obj.set_taborder("11");
            obj.set_text("인증");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 484, 90, this.div_hiddenArea,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");
            		p.set_text("div_hiddenArea");
            		p.set_visible("false");

            	}
            );
            this.div_hiddenArea.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 711, 43, this.Div01.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("1");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.Div01.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 711, 453, this.Div01,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("9");
            		p.style.set_background("white");
            		p.set_visible("false");

            	}
            );
            this.Div01.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 711, 43, this.Div05.Div02,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("40");
            		p.set_cssclass("div_WFSA_Searchbg");

            	}
            );
            this.Div05.Div02.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 711, 1139, this.Div05,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("10");
            		p.style.set_background("transparent");
            		p.set_visible("false");

            	}
            );
            this.Div05.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 716, 67, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("11");
            		p.set_visible("false");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 750, 512, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("dddd");
            		p.set_titletext("본부회원정보변경");
            		p.set_scrollbars("autoboth");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Div05.edt_CLNTNM","value","ds_basicInfo","CLNTNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Div05.edt_FZIP","value","ds_basicInfo","FZIP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Div05.edt_RZIP","value","ds_basicInfo","RZIP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Div05.edt_DONGBW","value","ds_basicInfo","DONGUP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Div05.edt_DONGUP","value","ds_basicInfo","DONGBW");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Div05.edt_USR_NM","value","ds_basicInfo","USR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Div05.edt_BZNO01","value","ds_basicInfo","BZNO1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Div05.edt_BZNO02","value","ds_basicInfo","BZNO2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Div05.edt_BZNO03","value","ds_basicInfo","BZNO3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Div05.edt_NA_TRPL_C","value","ds_basicInfo","NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Div05.edt_MB_ID","value","ds_basicInfo","MB_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","Div05.rdo_SEX_DSC","value","ds_basicInfo","SEX_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","Div05.edt_USR_EMAIL01","value","ds_basicInfo","USR_EMAIL01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","Div05.edt_USR_EMAIL02","value","ds_basicInfo","USR_EMAIL02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","Div05.edt_TEL01","value","ds_basicInfo","HTEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","Div05.edt_TEL02","value","ds_basicInfo","STEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","Div05.cbo_HP","value","ds_basicInfo","USR_MPNO01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","Div05.edt_HP01","value","ds_basicInfo","USR_MPNO02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","Div05.edt_HP02","value","ds_basicInfo","USR_MPNO03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Div05.edt_BIRTH","value","ds_basicInfo","BIRTH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","Div05.edt_TEL00","value","ds_basicInfo","ATEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Div05.edt_CHRG_BSNNM","value","ds_basicInfo","CHRG_BSNNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","Div05.edt_MP00","value","ds_basicInfo","USR_TELNO01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","Div05.edt_MP01","value","ds_basicInfo","USR_TELNO02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","Div05.edt_MP02","value","ds_basicInfo","USR_TELNO03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","Div05.edt_FR_DEPT_ID","value","ds_basicInfo","DEPT_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","Div05.edt_FR_DEPT_NAME","value","ds_basicInfo","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_5115.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_5115.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
        	this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
        	// trace("afterFormOnload");
        	// this.fn_checkOpenWebSign();

        	//공통코드콤보가져오기
        	var param = [
         		{code:"HP", dsName:"ds_hpNo", selecttype:"N"}
            ];
        	this.gfn_setPortalCommonCode(param);

        	this.Div01.mb_id.set_text("  " + application.gv_userId);
        	this.Div01.set_left(17);
        	this.Div01.set_visible(true); // 비밀번호 재확인
        	this.Div05.set_visible(false);
        	//this.Div05.set_height(nexacro.toNumber(this.Div05.Static09.top) + nexacro.toNumber(this.Div05.Static09.height) + 15); // 담당업무

        	this.Div01.edt_pw.setFocus(); // 비밀번호

        	if (application.gv_weakPwYn == "X") {
        		this.Div05.Div02.btn_save.set_enable(false);
        		this.Div05.Static13.style.set_color("#FF0000FF");
        	}
        }

        /*******************************************************************************************************************
         저장로직
        ********************************************************************************************************************/
        this.btn_save_onclick = function(obj,e)
        {
        	if (this.fn_validationCheck()) {
        		this.fn_setSvcAuth();

        		var sParams = "chgAuthYn="+this.div_hiddenArea.edt_ChgAuth.value
        					+ " mb_id="+this.gfn_nullToEmpty(this.Div05.edt_MB_ID.value);

        		var sSvcID        = "updateMB";
        		var sURL          = "svc::rest/pt/usrinf/updateMBNot01";
        		var sInDatasets   = "ds_basicInfo=ds_basicInfo ds_svcAuth=ds_svcAuth";
        		var sOutDatasets  = "";
        		var sArgument     = sParams;
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회

        		this.gfn_callService(sSvcID, sURL, sInDatasets , sOutDatasets , sArgument, sCallbackFunc, sTranType);
        	}
        }

        /*******************************************************************************************************************
         서비스 권한세팅 메소드
        ********************************************************************************************************************/
        this.fn_setSvcAuth = function ()
        {
        	var chgAuth = "N";
        	this.ds_svcAuth.clearData();

        	if (this.ds_usrAuth.findRow("USR_AUTH_DSC", "5") >=0 && this.Div05.chk_BUSINESS_TALK_AUTH.value == "N") {
        		this.ds_svcAuth.addRow();
        		this.ds_svcAuth.addColumn("SVC_ID", "string");
        		this.ds_svcAuth.addColumn("USR_AUTH_DSC", "string");
        		this.ds_svcAuth.addColumn("MB_ID", "string");
        		this.ds_svcAuth.addColumn("RQ_DSC", "string");
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "SVC_ID", "50");
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "USR_AUTH_DSC", "5");
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "MB_ID", this.Div05.edt_MB_ID.value);
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "RQ_DSC", "0");
        		chgAuth ="Y";
        	}
        	if (this.ds_usrAuth.findRow("USR_AUTH_DSC", "5") < 0 && this.Div05.chk_BUSINESS_TALK_AUTH.value == "Y") {
        		this.ds_svcAuth.addRow();
        		this.ds_svcAuth.addColumn("SVC_ID", "string");
        		this.ds_svcAuth.addColumn("USR_AUTH_DSC", "string");
        		this.ds_svcAuth.addColumn("MB_ID", "string");
        		this.ds_svcAuth.addColumn("RQ_DSC", "string");
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "SVC_ID", "50");
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "USR_AUTH_DSC", "5");
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "MB_ID", this.Div05.edt_MB_ID.value);
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "RQ_DSC", "1");
        		chgAuth ="Y";
        	}

        	if (this.ds_usrAuth.findRow("USR_AUTH_DSC", "6") >=0 && this.Div05.chk_CONTRACT_AUTH.value == "N") {
        		this.ds_svcAuth.addRow();
        		this.ds_svcAuth.addColumn("SVC_ID", "string");
        		this.ds_svcAuth.addColumn("USR_AUTH_DSC", "string");
        		this.ds_svcAuth.addColumn("MB_ID", "string");
        		this.ds_svcAuth.addColumn("RQ_DSC", "string");
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "SVC_ID", "61");
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "USR_AUTH_DSC", "6");
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "MB_ID", this.Div05.edt_MB_ID.value);
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "RQ_DSC", "0");
        		chgAuth ="Y";
        	}
        	if (this.ds_usrAuth.findRow("USR_AUTH_DSC", "6") < 0 && this.Div05.chk_CONTRACT_AUTH.value == "Y") {
        		this.ds_svcAuth.addRow();
        		this.ds_svcAuth.addColumn("SVC_ID", "string");
        		this.ds_svcAuth.addColumn("USR_AUTH_DSC", "string");
        		this.ds_svcAuth.addColumn("MB_ID", "string");
        		this.ds_svcAuth.addColumn("RQ_DSC", "string");
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "SVC_ID", "61");
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "USR_AUTH_DSC", "6");
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "MB_ID", this.Div05.edt_MB_ID.value);
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "RQ_DSC", "1");
        		chgAuth ="Y";
        	}

        	if (this.ds_usrAuth.findRow("USR_AUTH_DSC", "7") >=0 && this.Div05.chk_TAX_AUTH.value == "N") {
        		this.ds_svcAuth.addRow();
        		this.ds_svcAuth.addColumn("SVC_ID", "string");
        		this.ds_svcAuth.addColumn("USR_AUTH_DSC", "string");
        		this.ds_svcAuth.addColumn("MB_ID", "string");
        		this.ds_svcAuth.addColumn("RQ_DSC", "string");
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "SVC_ID", "41");
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "USR_AUTH_DSC", "7");
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "MB_ID", this.Div05.edt_MB_ID.value);
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "RQ_DSC", "0");
        		chgAuth ="Y";
        	}
        	if (this.ds_usrAuth.findRow("USR_AUTH_DSC", "7") < 0 && this.Div05.chk_TAX_AUTH.value == "Y") {
        		this.ds_svcAuth.addRow();
        		this.ds_svcAuth.addColumn("SVC_ID", "string");
        		this.ds_svcAuth.addColumn("USR_AUTH_DSC", "string");
        		this.ds_svcAuth.addColumn("MB_ID", "string");
        		this.ds_svcAuth.addColumn("RQ_DSC", "string");
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "SVC_ID", "41");
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "USR_AUTH_DSC", "7");
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "MB_ID", this.Div05.edt_MB_ID.value);
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "RQ_DSC", "1");
        		chgAuth ="Y";
        	}

        	//USR_AUTH_DSC : M 가격할인
        	if (this.ds_usrAuth.findRow("USR_AUTH_DSC", "M") >=0 && this.Div05.chk_PRICE.value == "N") {
        		this.ds_svcAuth.addRow();
        		this.ds_svcAuth.addColumn("SVC_ID", "string");
        		this.ds_svcAuth.addColumn("USR_AUTH_DSC", "string");
        		this.ds_svcAuth.addColumn("MB_ID", "string");
        		this.ds_svcAuth.addColumn("RQ_DSC", "string");
        		//this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "SVC_ID", "50");
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "USR_AUTH_DSC", "M");
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "MB_ID", this.Div05.edt_MB_ID.value);
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "RQ_DSC", "0");
        		chgAuth ="Y";
        	}
        	if (this.ds_usrAuth.findRow("USR_AUTH_DSC", "M") < 0 && this.Div05.chk_PRICE.value == "Y") {
        		this.ds_svcAuth.addRow();
        		this.ds_svcAuth.addColumn("SVC_ID", "string");
        		this.ds_svcAuth.addColumn("USR_AUTH_DSC", "string");
        		this.ds_svcAuth.addColumn("MB_ID", "string");
        		this.ds_svcAuth.addColumn("RQ_DSC", "string");
        		//this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "SVC_ID", "50");
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "USR_AUTH_DSC", "M");
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "MB_ID", this.Div05.edt_MB_ID.value);
        		this.ds_svcAuth.setColumn(this.ds_svcAuth.rowposition, "RQ_DSC", "1");
        		chgAuth ="Y";
        	}
        	this.div_hiddenArea.edt_ChgAuth.set_value(chgAuth);

        }

        
        /*******************************************************************************************************************
         validation검사
        ********************************************************************************************************************/
        this.fn_validationCheck = function() {

        	if (this.gfn_isNull(this.Div05.edt_USR_NM.value)) {
        		alert("사용자명을 입력 하세요.");
        		this.Div05.edt_USR_NM.setFocus();
        		return false;
        	}

        	if (this.gfn_isNull(this.Div05.edt_BIRTH.value)) {
        		alert("생년월일(yyyyMMdd)을 입력 하세요 ");
        		this.Div05.edt_BIRTH.setFocus();
        		return false;
        	} else if (this.Div05.edt_BIRTH.text.substring(0, 2)  == "00") {
        		alert("생년월일을 6자리로 입력시 생년월일은 8자리 형식(19600101)으로 입력하셔야 합니다");
        		this.Div05.edt_BIRTH.setFocus();
        		return false;
        	}

        	if (this.gfn_isNull(this.Div05.rdo_SEX_DSC.value)) {
        		alert("성별을 선택하세요.");
        		this.Div05.rdo_SEX_DSC.setFocus();
        		return false;
        	}
        	if (this.gfn_isNull(this.Div05.edt_USR_EMAIL01.value)) {
        		alert("이메일을 입력 하세요.");
        		this.Div05.edt_USR_EMAIL01.setFocus();
        		return false;
        	} else if (this.gfn_isNull(this.Div05.edt_USR_EMAIL02.value)) {
        		alert("이메일을 입력 하세요.");
        		this.Div05.edt_USR_EMAIL02.setFocus();
        		return false;
        	}

        	if (this.gfn_isNull(this.Div05.cbo_HP.value)) {
        		alert("휴대전화를 선택 하세요.");
        		this.Div05.cbo_HP.setFocus();
        		return false;
        	} else if (this.gfn_isNull(this.Div05.edt_HP01.value)) {
        		alert("휴대전화를 입력 하세요.");
        		this.Div05.edt_HP01.setFocus();
        		return false;
        	} else if (this.gfn_isNull(this.Div05.edt_HP02.value)) {
        		alert("휴대전화를 입력 하세요.");
        		this.Div05.edt_HP02.setFocus();
        		return false;
        	}
        	
        	if (this.gfn_isNull(this.Div05.edt_CHRG_BSNNM.value)) {
        		alert("담당업무를 입력 하세요.");
        		this.Div05.edt_CHRG_BSNNM.setFocus();
        		return false;
        	}
        	
        	if (!this.gfn_isDate(this.Div05.edt_BIRTH.value)) {
        		alert("회원정보의 생년월일 형식이 잘못되었습니다.");
        		return false;
        	}
        	
        	if (!this.gfn_checkEmail(this.Div05.edt_USR_EMAIL01.value+"@"+this.Div05.edt_USR_EMAIL02.value)) {
        		alert("이메일형식이 잘못되었습니다.");
        		return false;
        	}	
        	if(!this.gfn_isNull(this.Div05.edt_MP00.value) || !this.gfn_isNull(this.Div05.edt_MP01.value) || !this.gfn_isNull(this.Div05.edt_MP02.value)){
        		var USR_TELNO = this.Div05.edt_MP00.value + "-" + this.Div05.edt_MP01.value + "-" + this.Div05.edt_MP02.value;
        		//사무실 전화번호 정규식
        		var regExp = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}/;
        		if ( !regExp.test(USR_TELNO) ) {
        			alert("사무실전화번호 형식이 잘못되었습니다.");
        			this.Div05.edt_MP00.setFocus();
        			return;
        		}
        	}

        // 	if (this.ds_basicInfo.getOrgColumn(0, "USR_MPNO01") != this.Div05.cbo_HP.value || this.ds_basicInfo.getOrgColumn(0, "USR_MPNO02") != this.Div05.edt_HP01.value || this.ds_basicInfo.getOrgColumn(0, "USR_MPNO03") != this.Div05.edt_HP02.value) {
        // 		if (this.gfn_isNull(this.Div05.edt_confirmCertificate.value)) {
        // 			alert("인증번호를 입력 하세요.");
        // 			this.Div05.edt_confirmCertificate.setFocus();
        // 			return false;
        // 		}
        // 		if (this.div_hiddenArea.edt_confirm.value != "Y") {
        // 			alert("인증버튼으로 인증번호를 인증 하세요");
        // 			return false;
        // 		}
        // 	}

        	if (this.gfn_getNum(this.ds_basicInfo.getColumn(0, "TAX_AUTH_CNT")) < 2 && this.Div05.chk_TAX_AUTH.value =="N") {
        		alert("거래처 번호에 해당하는 세금계산서 권한을 가진 회원이 없습니다.\n 세금계산서 권한을 선택해주세요.");
        		return false;
        	}

        	return true;
        }

        
        /*******************************************************************************************************************
         인증번호생성 및 SMS전송
        ********************************************************************************************************************/
        this.btn_sendSms_onclick = function(obj,e)
        {
        	if (this.gfn_isNull(this.Div05.cbo_HP.value)) {
        		alert("휴대번호를 선택하세요.");
        		this.Div05.cbo_HP.setFocus();
        		return false;
        	}
        	if (this.gfn_isNull(this.Div05.edt_HP01.value)) {
        		alert("휴대번호를 입력하세요.");
        		this.Div05.edt_HP01.setFocus();
        		return false;
        	}
        	if (this.gfn_isNull(this.Div05.edt_HP02.value)) {
        		alert("휴대번호를 입력하세요.");
        		this.Div05.edt_HP02.setFocus();
        		return false;
        	}
        	if (this.gfn_isNull(this.Div05.edt_USR_NM.value)) {
        		alert("이름을 입력하세요.");
        		this.Div05.edt_USR_NM.setFocus();
        		return false;
        	}

        	var param = "hp="+this.Div05.cbo_HP.value+this.Div05.edt_HP01.value+this.Div05.edt_HP02.value
        				+" usrNM="+this.Div05.edt_USR_NM.value
        	;
        	var sSvcID        = "sendSms";
        	var sURL          = "svc::rest/pt/sendSms";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_certNum=ds_certNum";
        	var sArgument     =  param;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회

        	this.gfn_callService(sSvcID, sURL, sInDatasets , sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /*******************************************************************************************************************
         인증번호 확인
        ********************************************************************************************************************/
        this.btn_certificate_onclick = function(obj,e)
        {
        	this.div_hiddenArea.edt_confirm.set_value("Y");
        	if (this.gfn_isNull(this.Div05.edt_confirmCertificate.value)) {
        		alert("인증번호를 입력 하세요");
        		this.Div05.edt_confirmCertificate.setFocus();
        		return false;
        	}
        	if (this.div_hiddenArea.edt_randomNumber.value != this.Div05.edt_confirmCertificate.value) {
        		this.div_hiddenArea.edt_confirmCertificate.set_value("N");
        		alert("입력하신 인증번호를 확인하시기 바랍니다.");
        		return;
        	} else {
        		alert("정상 처리되었습니다.");
        	}
        }

        // 전화 번호 타입 변경
        this.fn_telNo = function(strTelNo,strVal1,strVal2,strVal3)
        {
        	if (strTelNo.length > 8) {
        		var RegPhonNum = ""; 
        		// 문자열 길이에 따른 값 처리
        		if (strTelNo.length == 9) {
        			RegPhonNum = /([0-9]{2})([0-9]{3})([0-9]+)/; 
        		} else if (strTelNo.length == 10) {
        			if (strTelNo.substring(0,2) == "02") {
        				RegPhonNum = /([0-9]{2})([0-9]{4})([0-9]+)/; 
        			} else {
        				RegPhonNum = /([0-9]{3})([0-9]{3})([0-9]+)/;
        			}
        		} else if (strTelNo.length > 10) {
        			RegPhonNum = /([0-9]{3})([0-9]{4})([0-9]+)/; 
        		}
        		strTelNo = strTelNo.replace(RegPhonNum, "$1-$2-$3"); 
        		var naTrplCVal = strTelNo.split("-");
        		strVal1.set_value(naTrplCVal[0]);
        		strVal2.set_value(naTrplCVal[1]);
        		strVal3.set_value(naTrplCVal[2]);
        	}
        }

        /*******************************************************************************************************************
         회원정보조회 메소드
        ********************************************************************************************************************/
        this.fn_retriveUsrInfo = function ()
        {
        	var sSvcID        = "retrieveMB";
        	var sURL          = "svc::rest/pt/usrinf/retrieveMB"
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_basicInfo=ds_basicInfo ds_usrAuth=ds_usrAuth";
        	var sArgument     =  "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	this.gfn_callService(sSvcID, sURL, sInDatasets , sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /*******************************************************************************************************************
         비밀번호조회 메소드
        ********************************************************************************************************************/
        this.Div01_Div02_btn_confirm_onclick = function(obj,e)
        {
        	if (this.gfn_isNull(this.Div01.edt_pw.value)) {
        		alert("비밀번호를 입력해주세요.");
        		this.Div01.edt_pw.setFocus();
        		return false;
        	}
        	var sSvcID        = "checkMBPW";
        	var sURL          = "svc::rest/pt/usrinf/checkMBPW"
        	var sInDatasets   = "";
        	var sOutDatasets  = "";
        	var sArgument     = "mbPw="+this.Div01.edt_pw.value;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	this.gfn_callService(sSvcID, sURL, sInDatasets , sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /*******************************************************************************************************************
         callback메소드
        ********************************************************************************************************************/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (svcID=="checkMBPW") {
        		if (ErrorCode < 0) {
        			if (ErrorCode == -2) {
        				alert(" 비밀번호를 다시 확인하세요. \n 비밀번호를 잘못입력 하셨습니다.");
        			} else {
        				this.gfn_getMessage("alert", "error.message.server.exception");
        			}
        		} else {
        			this.Div01.set_visible(false);
        			this.Div05.set_visible(true);

        			this.Div05.chk_BUSINESS_TALK_AUTH.set_value("N");
        			this.Div05.chk_CONTRACT_AUTH.set_value("N");
        			this.Div05.chk_TAX_AUTH.set_value("N");

        			//회원정보 호출
        			this.fn_retriveUsrInfo();
        		}
        	} else if (svcID=="retrieveMB") {
        		if (ErrorCode < 0) {
        			this.gfn_getMessage("alert", "error.message.server.exception");
        		} else {
        			/*서비스 권한체크*/
        			// trace(this.ds_usrAuth.saveXML());
        			for (var i=0; i< this.ds_usrAuth.rowcount; i++) {
        				if (this.ds_usrAuth.findRow("USR_AUTH_DSC", "5") >=0) {
        					this.Div05.chk_BUSINESS_TALK_AUTH.set_value("Y");
        				} else {
        					this.Div05.chk_BUSINESS_TALK_AUTH.set_value("N");
        				}

        				if (this.ds_usrAuth.findRow("USR_AUTH_DSC", "6") >=0) {
        					this.Div05.chk_CONTRACT_AUTH.set_value("Y");
        				} else {
        					this.Div05.chk_CONTRACT_AUTH.set_value("N");
        				}

        				if (this.ds_usrAuth.findRow("USR_AUTH_DSC", "7") >=0) {
        					this.Div05.chk_TAX_AUTH.set_value("Y");
        				} else {
        					this.Div05.chk_TAX_AUTH.set_value("N");
        				}
        				if (this.ds_usrAuth.findRow("USR_AUTH_DSC", "M") >=0) {
        					this.Div05.chk_PRICE.set_value("Y");
        				} else {
        					this.Div05.chk_PRICE.set_value("N");
        				}
        			}
        			if (this.ds_basicInfo.getColumn(0, "USR_TELNO")) {
        				// 핸드폰에서 전화 번호로 수정
        				var usr_telno = this.ds_basicInfo.getColumn(0, "USR_TELNO");
        				this.fn_telNo(usr_telno, this.Div05.edt_MP00, this.Div05.edt_MP01, this.Div05.edt_MP02);
        			}
        		}
        	} else if (svcID =="sendSms") {
        		if (ErrorCode < 0) {
        			this.gfn_getMessage("alert", "error.message.server.exception");
        		} else {
        			alert("고객님의 휴대전화로 인증번호가 발송되었습니다.");
        			this.div_hiddenArea.edt_randomNumber.set_value(this.ds_certNum.getColumn(0, "CERT_NUM"));
        			//alert("인증번호 ::"+this.div_hiddenArea.edt_randomNumber.value);
        		}
        	} else if (svcID =="updateMB") {
        		if (ErrorCode < 0) {
        			this.gfn_getMessage("alert", "error.message.server.exception");
        		} else {
        			alert("정상 처리 되었습니다.");
        			this.Div05.edt_confirmCertificate.set_value("");
        			this.div_hiddenArea.edt_confirm.set_value("");
        			this.fn_retriveUsrInfo();
        		}
        	} else if (svcID =="changeBzplc") {
        		if (ErrorCode < 0) {
        			this.gfn_getMessage("alert", "error.message.server.exception");
        		} else {
        			this.alert("소속사업장 및 회원유형이 변경되었습니다.\n자동 로그아웃되며, 재로그인 해주시기 바랍니다.");
        			this.gfn_logout();
        		}
        	}
        }

        this.Div01_edt_pw_onkeydown = function(obj,e)
        {
        	if (e.keycode == "13") {
        		this.Div01.Div02.btn_confirm.click();
        	}
        }

        /******** 공인인증서 서명 프로그램 설치 ***********/
        this.fn_checkOpenWebSign = function()
        {
        	var obj  = this.lookup("objWeb");
        	if (!this.gfn_isNull(obj))
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

        /******** 공인인증서 서명 프로그램 설치 ***********/
        this.Div05_btn_search_onclick = function(obj,e)
        {
        	var oArg = {DEPT_ID:this.ds_basicInfo.getColumn(0, "DEPT_ID")};
        	var sOption = "autosize=true";
        	var sPopupCallBack = "fn_popupAfter";
        	this.gfn_openPopup("popMyBzplc", "OMG.PT::OMG_DS_SC_5115_P01.xfdl", oArg, sOption, sPopupCallBack);
        }

        this.fn_popupAfter = function(strId,strVal)
        {
        	if (strId == "popMyBzplc") {
        		if (!this.gfn_isNull(strVal)) {
        			var temp = strVal.split("#");
        			var curGln = this.ds_basicInfo.getColumn(0, "NA_TRPL_C");
        			var curDept = this.gfn_nvl(this.ds_basicInfo.getColumn(0, "DEPT_ID"), '99999');

        			// GLN이 동일하면 회원유형 변경 유무 확인
        			if (this.gfn_nvl(temp[5], '99999') == curDept && temp[0] == curGln && temp[2] == "01") {
        				this.Div05.edt_TO_BZPLC.set_value("");
        				this.Div05.edt_TO_BZPLNM.set_value("");
        				this.Div05.edt_TO_BZNO.set_value("");
        				this.Div05.edt_TO_DEPT_ID.set_value("");
        				this.Div05.edt_TO_DEPT_NAME.set_value("");
        				this.Div05.sta_to_tpc.set_text("");
        				this.Div05.btn_chg.set_enable(false);
        				this.alert("현 소속정보와 동일하게 변경할 수 없습니다.");
        				return;
        			}

        			if (temp[2] != "01") {
        				this.Div05.edt_TO_TPC.set_value("03");
        			}
        			this.Div05.edt_TO_BZPLC.set_value(temp[0]);
        			this.Div05.edt_TO_BZPLNM.set_value(temp[1]);
        			this.Div05.edt_TO_BZNO.set_value(temp[4]);
        			if (temp[2] != "03") {
        				this.Div05.edt_TO_DEPT_ID.set_enable(true);
        				this.Div05.edt_TO_DEPT_NAME.set_enable(true);
        				this.Div05.edt_TO_DEPT_ID.set_value(temp[5]);
        				this.Div05.edt_TO_DEPT_NAME.set_value(temp[6]);
        			} else {
        				this.Div05.edt_TO_DEPT_ID.set_enable(false);
        				this.Div05.edt_TO_DEPT_NAME.set_enable(false);
        				this.Div05.edt_TO_DEPT_ID.set_value("");
        				this.Div05.edt_TO_DEPT_NAME.set_value("");
        			}
        			this.Div05.sta_to_tpc.set_text(temp[3]);
        			this.Div05.btn_chg.set_enable(true);
        		}
        	}
        }

        this.Div05_btn_chg_onclick = function(obj,e)
        {
        	var curGln = this.ds_basicInfo.getColumn(0, "NA_TRPL_C");
        	var curDept = this.ds_basicInfo.getColumn(0, "DEPT_ID");
        	var bzplc = this.gfn_nullToEmpty(this.Div05.edt_TO_BZPLC.value);
        	var bzno = this.gfn_nullToEmpty(this.Div05.edt_TO_BZNO.value);
        	var dept = this.gfn_nullToEmpty(this.Div05.edt_TO_DEPT_ID.value);
        	var deptNm = this.gfn_nullToEmpty(this.Div05.edt_TO_DEPT_NAME.value);

        	if (bzplc == curGln) {
        		bzplc = "";
        		bzno = "";
        	}
        	var tpc = this.gfn_nullToEmpty(this.Div05.edt_TO_TPC.value);

        	var msg = "아래와 같이 회원정보를 변경하시겠습니까?";
        	if (!this.gfn_isNull(bzplc)) {
        		msg += "\n ○ 소속사업장 : " + application.gv_companyName + " → " + this.Div05.edt_TO_BZPLNM.value;
        	}
        	if (!this.gfn_isNull(tpc) && application.gv_userType != tpc) {
        		msg += "\n ○ 회원유형 : " + (application.gv_userType == "02" ? "본부" : "사업장") + " → " + (tpc == "02" ? "본부" : "사업장");
        	}
        	if (this.gfn_nullToEmpty(curDept) != this.gfn_nullToEmpty(dept)) {
        		var from = "없음(범농협)";
        		var to = "없음(범농협)";
        		if (!this.gfn_isNull(curDept)) {
        			from = curDept + "(" + this.Div05.edt_FR_DEPT_NAME.value + ")";
        		}
        		if (!this.gfn_isNull(dept)) {
        			to = dept + "(" + deptNm + ")";
        		}
        		msg += "\n ○ 사무소 : " + from + " → " + to;
        	}

        	if (this.confirm(msg)) {
        		var sParams = "bzplc="+bzplc
        					+ " bzno="+bzno
        					+ " dept="+dept
        					+ " deptnm="+deptNm
        					+ " tpc="+tpc;

        		var sSvcID        = "changeBzplc";
        		var sURL          = "svc::rest/pt/usrinf/updateNhUsrBzplc";
        		var sInDatasets   = "";
        		var sOutDatasets  = "";
        		var sArgument     = sParams;
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회
        		this.gfn_callService(sSvcID, sURL, sInDatasets , sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Div01.Div02.btn_confirm.addEventHandler("onclick", this.Div01_Div02_btn_confirm_onclick, this);
            this.Div01.edt_pw.addEventHandler("onkeydown", this.Div01_edt_pw_onkeydown, this);
            this.Div05.Div02.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.Div05.Static03.addEventHandler("onclick", this.Div05_Static03_onclick, this);
            this.Div05.Static10.addEventHandler("onclick", this.Div05_Static03_onclick, this);
            this.Div05.rdo_SEX_DSC.addEventHandler("onitemclick", this.Radio00_onitemclick, this);
            this.Div05.chk_CONTRACT_AUTH.addEventHandler("onclick", this.Div05_chk_CONTRACT_AUTH_onclick, this);
            this.Div05.chk_BUSINESS_TALK_AUTH.addEventHandler("onclick", this.Div05_chk_BUSINESS_TALK_AUTH_onclick, this);
            this.Div05.chk_TAX_AUTH.addEventHandler("onclick", this.Div05_chk_TAX_AUTH_onclick, this);
            this.Div05.btn_search.addEventHandler("onclick", this.Div05_btn_search_onclick, this);
            this.Div05.btn_chg.addEventHandler("onclick", this.Div05_btn_chg_onclick, this);
            this.Div00.btn_sendSms.addEventHandler("onclick", this.btn_sendSms_onclick, this);
            this.Div00.btn_certificate.addEventHandler("onclick", this.btn_certificate_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_5115.xfdl", true);

       
    };
}
)();
