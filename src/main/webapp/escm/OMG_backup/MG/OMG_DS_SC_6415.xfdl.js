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
                this.set_name("pattern_01");
                this.set_titletext("전자계약전용회원승인상세");
                this.set_scrollbars("autovert");
                this._setFormPosition(0,0,750,516);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_basicInfo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"BZNO1\" type=\"STRING\" size=\"256\"/><Column id=\"BZNO2\" type=\"STRING\" size=\"256\"/><Column id=\"BZNO3\" type=\"STRING\" size=\"256\"/><Column id=\"BRC_BZNO1\" type=\"STRING\" size=\"256\"/><Column id=\"BRC_BZNO2\" type=\"STRING\" size=\"256\"/><Column id=\"BRC_BZNO3\" type=\"STRING\" size=\"256\"/><Column id=\"REPMNM\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"FZIP\" type=\"STRING\" size=\"256\"/><Column id=\"ATEL\" type=\"STRING\" size=\"256\"/><Column id=\"HTEL\" type=\"STRING\" size=\"256\"/><Column id=\"STEL\" type=\"STRING\" size=\"256\"/><Column id=\"DONGUP\" type=\"STRING\" size=\"256\"/><Column id=\"DONGBW\" type=\"STRING\" size=\"256\"/><Column id=\"RZIP\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"USR_MPNO\" type=\"STRING\" size=\"256\"/><Column id=\"HP1\" type=\"STRING\" size=\"256\"/><Column id=\"HP2\" type=\"STRING\" size=\"256\"/><Column id=\"HP3\" type=\"STRING\" size=\"256\"/><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTH\" type=\"STRING\" size=\"256\"/><Column id=\"SEX_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"USR_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"SMS_RMS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_RMS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ENT_PRG_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"ENT_PRG_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_MBCO_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"APV_MB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APV_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_download", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"32\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"32\"/><Column id=\"FILESIZE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"32\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_userAuth", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"USR_AUTH_DSC\" type=\"STRING\" size=\"128\"/><Column id=\"RQ_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"ENT_PRG_STSC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_entSvc", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" type=\"STRING\" size=\"128\"/><Column id=\"RQ_DSC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MB_ID\">honggu34</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_payInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"STL_METH_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"HOP_DRW_DD\" type=\"STRING\" size=\"256\"/><Column id=\"DPRNM\" type=\"STRING\" size=\"256\"/><Column id=\"PSCRP_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"DPR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BNK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACNO\" type=\"STRING\" size=\"256\"/><Column id=\"BB_FLNM\" type=\"STRING\" size=\"256\"/><Column id=\"BB_FL_TMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"BZ_RGWRRT_FLNM\" type=\"STRING\" size=\"256\"/><Column id=\"BZ_RGWRRT_FL_TMPNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_branch_bzno", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"BZNO\" type=\"STRING\" size=\"10\"/><Column id=\"REPMNM\" type=\"STRING\" size=\"50\"/><Column id=\"ZIP\" type=\"STRING\" size=\"6\"/><Column id=\"DONGUP\" type=\"STRING\" size=\"300\"/><Column id=\"DONGBW\" type=\"STRING\" size=\"100\"/><Column id=\"BZCCNM\" type=\"STRING\" size=\"60\"/><Column id=\"BZTPNM\" type=\"STRING\" size=\"50\"/><Column id=\"TX_REG\" type=\"STRING\" size=\"4\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static19", "absolute", "16", "75", "95.2%", "29", null, null, this);
            obj.set_taborder("88");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static86", "absolute", "-0.13%", "0", null, "15", "2.13%", null, this);
            obj.set_taborder("0");
            obj.set_text("15");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static87", "absolute", "97.87%", "1", null, "517", "0%", null, this);
            obj.set_taborder("1");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "2%", "315", null, "20", "-35.2%", null, this);
            obj.set_taborder("2");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "2.13%", "47", null, "29", "2.67%", null, this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static120", "absolute", "2.13%", "466", null, "29", "2.67%", null, this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static91", "absolute", "2.13%", "145", null, "29", "2.67%", null, this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static103", "absolute", "2.13%", "257", null, "58", "2.67%", null, this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static101", "absolute", "2.13%", "229", null, "29", "2.67%", null, this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static98", "absolute", "2.13%", "201", null, "29", "2.67%", null, this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static95", "absolute", "2.13%", "173", null, "29", "2.67%", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static89", "absolute", "2.13%", "123", null, "21", "78.93%", null, this);
            obj.set_taborder("13");
            obj.set_text("회사 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static92", "absolute", "2.13%", "145", null, "29", "81.2%", null, this);
            obj.set_taborder("14");
            obj.set_text("본사 사업자번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static94", "absolute", "2.13%", "173", null, "29", "81.2%", null, this);
            obj.set_taborder("15");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static97", "absolute", "2.13%", "201", null, "29", "81.2%", null, this);
            obj.set_taborder("16");
            obj.set_text("대표자명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static100", "absolute", "2.13%", "229", null, "29", "81.2%", null, this);
            obj.set_taborder("17");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static102", "absolute", "2.13%", "257", null, "58", "81.2%", null, this);
            obj.set_taborder("18");
            obj.set_text("회사주소");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "49.33%", "173", null, "29", "31.6%", null, this);
            obj.set_taborder("19");
            obj.set_text("거래처코드");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static99", "absolute", "49.33%", "229", null, "29", "31.6%", null, this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static129", "absolute", "24.67%", "149", null, "21", "74.13%", null, this);
            obj.set_taborder("21");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_BZNO02", "absolute", "25.6%", "149", null, "21", "70.13%", null, this);
            obj.set_taborder("22");
            obj.set_readonly("true");
            obj.set_maxlength("2");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_BZNO03", "absolute", "31.07%", "149", null, "21", "59.73%", null, this);
            obj.set_taborder("23");
            obj.set_readonly("true");
            obj.set_maxlength("5");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_NA_TRPL_C", "absolute", "68.93%", "177", null, "21", "3.2%", null, this);
            obj.set_taborder("24");
            obj.set_readonly("true");
            obj.set_maxlength("13");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_REPMNM", "absolute", "19.47%", "205", null, "21", "55.2%", null, this);
            obj.set_taborder("25");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_RZIP", "absolute", "25.6%", "233", null, "21", "69.47%", null, this);
            obj.set_taborder("26");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static133", "absolute", "24.67%", "232", null, "21", "74.13%", null, this);
            obj.set_taborder("27");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_FZIP", "absolute", "19.47%", "233", null, "21", "75.6%", null, this);
            obj.set_taborder("28");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_DONGBW", "absolute", "19.47%", "263", null, "21", "3.2%", null, this);
            obj.set_taborder("29");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_DONGUP", "absolute", "19.47%", "288", null, "21", "3.2%", null, this);
            obj.set_taborder("30");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "30.13%", "149", null, "21", "68.67%", null, this);
            obj.set_taborder("32");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "2.13%", "337", null, "21", "78.93%", null, this);
            obj.set_taborder("33");
            obj.set_text("회원 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static107", "absolute", "2.13%", "355", null, "29", "2.67%", null, this);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static113", "absolute", "2.13%", "410", null, "29", "2.67%", null, this);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static115", "absolute", "2.13%", "438", null, "29", "2.67%", null, this);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static114", "absolute", "49.33%", "201", null, "29", "31.6%", null, this);
            obj.set_taborder("37");
            obj.set_text("대표전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "2.13%", "410", null, "29", "81.2%", null, this);
            obj.set_taborder("38");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static106", "absolute", "2.13%", "355", null, "29", "81.2%", null, this);
            obj.set_taborder("39");
            obj.set_text("회원ID");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_SMS_YN", "absolute", "19.47%", "472", null, "21", "72.4%", null, this);
            obj.set_taborder("43");
            obj.set_text("SMS");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_MAIL_YN", "absolute", "30.4%", "472", null, "21", "61.47%", null, this);
            obj.set_taborder("44");
            obj.set_text("메일");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_TEL01", "absolute", "77.2%", "205", null, "21", "16%", null, this);
            obj.set_taborder("46");
            obj.set_inputtype("number");
            obj.set_readonly("true");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_TEL02", "absolute", "85.2%", "205", null, "21", "8%", null, this);
            obj.set_taborder("47");
            obj.set_inputtype("number");
            obj.set_readonly("true");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_USR_EMAIL01", "absolute", "19.47%", "414", null, "21", "55.2%", null, this);
            obj.set_taborder("48");
            obj.set_maxlength("25");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_MB_ID", "absolute", "19.47%", "359", null, "21", "63.47%", null, this);
            obj.set_taborder("49");
            obj.set_inputtype("number,english");
            obj.set_readonly("true");
            obj.set_maxlength("9");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "49.33%", "355", null, "29", "31.6%", null, this);
            obj.set_taborder("52");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_USR_NM", "absolute", "68.93%", "359", null, "21", "3.2%", null, this);
            obj.set_taborder("53");
            obj.set_maxlength("16");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static116", "absolute", "2.13%", "438", null, "29", "81.2%", null, this);
            obj.set_taborder("54");
            obj.set_text("휴대전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static125", "absolute", "26.67%", "442", null, "21", "72.13%", null, this);
            obj.set_taborder("56");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_HP01", "absolute", "27.87%", "442", null, "21", "65.33%", null, this);
            obj.set_taborder("57");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static126", "absolute", "34.67%", "442", null, "21", "64.13%", null, this);
            obj.set_taborder("58");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_HP02", "absolute", "35.87%", "442", null, "21", "57.33%", null, this);
            obj.set_taborder("59");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static06", "absolute", "76%", "205", null, "21", "22.8%", null, this);
            obj.set_taborder("60");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "84%", "205", null, "21", "14.8%", null, this);
            obj.set_taborder("61");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static119", "absolute", "2.13%", "466", null, "29", "81.2%", null, this);
            obj.set_taborder("62");
            obj.set_text("수신 서비스");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_CLNTNM", "absolute", "19.47%", "177", null, "21", "55.2%", null, this);
            obj.set_taborder("63");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "2.13%", "382", null, "29", "2.67%", null, this);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "2.13%", "382", null, "29", "81.2%", null, this);
            obj.set_taborder("68");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "49.33%", "382", null, "29", "31.6%", null, this);
            obj.set_taborder("69");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_SEX_DSC", "absolute", "68.93%", "387", null, "21", "5.33%", null, this);
            this.addChild(obj.name, obj);
            var rdo_SEX_DSC_innerdataset = new Dataset("rdo_SEX_DSC_innerdataset", this.rdo_SEX_DSC);
            rdo_SEX_DSC_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">남</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">여</Col></Row></Rows>");
            obj.set_innerdataset(rdo_SEX_DSC_innerdataset);
            obj.set_taborder("70");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            obj.set_direction("vertical");

            obj = new Edit("edt_BZNO01", "absolute", "19.47%", "149", null, "21", "75.6%", null, this);
            obj.set_taborder("71");
            obj.set_readonly("true");
            obj.set_maxlength("3");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_BIRTH", "absolute", "19.47%", "387", null, "21", "67.87%", null, this);
            obj.set_taborder("72");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "2.13%", "22", null, "21", "78.93%", null, this);
            obj.set_taborder("73");
            obj.set_text("가입 처리");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ENT_PRG_CNTN", "absolute", "19.47%", "51", null, "21", "3.2%", null, this);
            obj.set_taborder("74");
            obj.set_readonly("true");
            obj.set_lengthunit("utf8");
            obj.set_maxlength("200");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "2.13%", "47", null, "29", "81.2%", null, this);
            obj.set_taborder("75");
            obj.set_text("가입처리내용");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Button("btn_approve", "absolute", "79.73%", "16", null, "21", "14.67%", null, this);
            obj.set_taborder("76");
            obj.set_text("승인");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reject", "absolute", "86%", "16", null, "21", "8.67%", null, this);
            obj.set_taborder("77");
            obj.set_text("거절");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close", "absolute", "91.87%", "16", null, "21", "2.27%", null, this);
            obj.set_taborder("78");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "0%", "3", null, "512", "97.73%", null, this);
            obj.set_taborder("80");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "1.33%", "104", null, "20", "-32.53%", null, this);
            obj.set_taborder("81");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "2.27%", "495", null, "20", "-34.93%", null, this);
            obj.set_taborder("82");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "2.13%", "75", null, "29", "81.2%", null, this);
            obj.set_taborder("86");
            obj.set_text("가입처리승인자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_APV_MB_ID", "absolute", "19.47%", "79", null, "21", "55.2%", null, this);
            obj.set_taborder("87");
            obj.set_maxlength("65");
            obj.style.set_font("9 Gulim");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_TEL00", "absolute", "68.93%", "205", null, "21", "24.27%", null, this);
            obj.set_taborder("89");
            obj.set_inputtype("number");
            obj.set_readonly("true");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_HP00", "absolute", "19.47%", "442", null, "21", "73.73%", null, this);
            obj.set_taborder("90");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "49.33%", "75", null, "29", "31.6%", null, this);
            obj.set_taborder("91");
            obj.set_text("가입승인일자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "2.13%", "565", null, "14", "-20.93%", null, this);
            obj.set_taborder("3");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_BIRTH00", "absolute", "68.93%", "79", null, "21", "18.4%", null, this);
            obj.set_taborder("93");
            obj.set_readonly("true");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "74.27%", "149", null, "21", "24.53%", null, this);
            obj.set_taborder("94");
            obj.set_text("-");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_B_BZN02", "absolute", "75.2%", "149", null, "21", "20.53%", null, this);
            obj.set_taborder("95");
            obj.set_readonly("true");
            obj.set_maxlength("2");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_B_BZN03", "absolute", "80.67%", "149", null, "21", "10.13%", null, this);
            obj.set_taborder("96");
            obj.set_readonly("true");
            obj.set_maxlength("5");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "79.73%", "149", null, "21", "19.07%", null, this);
            obj.set_taborder("97");
            obj.set_text("-");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_B_BZN01", "absolute", "69.07%", "149", null, "21", "26%", null, this);
            obj.set_taborder("98");
            obj.set_readonly("true");
            obj.set_maxlength("3");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "49.33%", "145", null, "29", "31.6%", null, this);
            obj.set_taborder("99");
            obj.set_text("지사 사업자번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_join", "absolute", "50.8%", "16", null, "21", "43.6%", null, this);
            obj.set_taborder("129");
            obj.set_text("재가입");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel", "absolute", "44.67%", "16", null, "21", "49.73%", null, this);
            obj.set_taborder("130");
            obj.set_text("해지");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_usr_tpc", "absolute", "211", "17", "30", "21", null, null, this);
            obj.set_taborder("132");
            obj.set_value("2");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_hoff", "absolute", "13.33%", "335", "70", "21", null, null, this);
            obj.set_taborder("133");
            obj.set_text("본사승인");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 750, 516, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("전자계약전용회원승인상세");
            		p.set_scrollbars("autovert");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","edt_BZNO02","value","ds_basicInfo","BZNO2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","edt_BZNO03","value","ds_basicInfo","BZNO3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","edt_NA_TRPL_C","value","ds_basicInfo","NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","edt_REPMNM","value","ds_basicInfo","REPMNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","edt_RZIP","value","ds_basicInfo","RZIP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","edt_FZIP","value","ds_basicInfo","FZIP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","edt_DONGBW","value","ds_basicInfo","DONGUP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","edt_DONGUP","value","ds_basicInfo","DONGBW");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","chk_SMS_YN","value","ds_basicInfo","SMS_RMS_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","chk_MAIL_YN","value","ds_basicInfo","EMAIL_RMS_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","edt_TEL01","value","ds_basicInfo","HTEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","edt_TEL02","value","ds_basicInfo","STEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","edt_USR_EMAIL01","value","ds_basicInfo","USR_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","edt_MB_ID","value","ds_basicInfo","MB_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","edt_USR_NM","value","ds_basicInfo","USR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","edt_HP01","value","ds_basicInfo","HP2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","edt_HP02","value","ds_basicInfo","HP3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","edt_CLNTNM","value","ds_basicInfo","CLNTNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","rdo_SEX_DSC","value","ds_basicInfo","SEX_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","edt_BZNO01","value","ds_basicInfo","BZNO1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","edt_BIRTH","value","ds_basicInfo","BIRTH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","edt_ENT_PRG_CNTN","value","ds_basicInfo","ENT_PRG_CNTN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","edt_CLNTNM","tooltiptext","ds_basicInfo","CLNTNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","edt_APV_MB_ID","value","ds_basicInfo","APV_MB_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","edt_TEL00","value","ds_basicInfo","ATEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","edt_HP00","value","ds_basicInfo","HP1");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","edt_USR_EMAIL01","tooltiptext","ds_basicInfo","USR_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","edt_BIRTH00","value","ds_basicInfo","APV_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","edt_B_BZN02","value","ds_basicInfo","BRC_BZNO2");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item38","edt_B_BZN03","value","ds_basicInfo","BRC_BZNO3");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","edt_B_BZN01","value","ds_basicInfo","BRC_BZNO1");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_6415.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_6415.xfdl", function() {
        //include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {	
        	
        	this.gfn_setInitForm(obj, e); //공통
        }

        
        this.fn_afterFormOnload = function()
        {	 
        	//페이지 로딩후 실행부분      		
        	this.ds_param.copyData(this.parent.dsArg);	
        	var sSvcID        = "retrieveMbApvrqr";
        	var sURL          = "svc::rest/mg/usrinf/retrieveMbApvrqr";
        	var sInDatasets   = "ds_param=ds_param";
        	var sOutDatasets  = "ds_basicInfo=ds_basicInfo ds_userAuth=ds_userAuth ds_entSvc=ds_entSvc ds_payInfo=ds_payInfo ds_branch_bzno=ds_branch_bzno";
        	var sArgument     =  "";
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회		 

        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	
        }

        /***************************************************
        	승인 및 거절
        ****************************************************/
        this.btn_approve_onclick = function(obj,e)
        {
        	if(confirm("정말로 [승인]하시겠습니까?\n확인 후에는 변경이 불가합니다."))
        	{
        		this.fn_approve("1");
        	}
        	return;
        }

        this.btn_reject_onclick = function(obj,e)
        {	
        	if(confirm("정말로 [거절]하시겠습니까?\n확인 후에는 변경이 불가합니다."))
        	{		
        		var status = "";
        		if(this.ds_basicInfo.getColumn(0,"ENT_PRG_STSC") == "0"){
        			status ="2";
        		}else if(this.ds_basicInfo.getColumn(0,"ENT_PRG_STSC") == "3"){
        			status ="4";
        		}else{
        			alert("값이 잘못되었습니다.");
        			return;
        		}
        		this.fn_approve(status);
        	}
        	return;
        }

        /***************************************************
        	가입 	---> 	해지 (1 >> 5)
        	해지	--->	가입 (5 >> 1)
        ****************************************************/
        //가입에서 해지로 변경
        // 0: 진행중, 1: 완료, 2:거절, 3:수정요청중, 4:수정요청거절, 5:해지
        this.btn_cancel_onclick = function(obj,e) 
        {	
        	if(application.confirm("정말로 [해지]하시겠습니까?\n확인 후에는 변경이 불가합니다.")){
        		if(this.ds_basicInfo.getColumn(0,"ENT_PRG_STSC") == "1"){
        			this.fn_approve("5");
        		}else{
        			alert("가입완료인 상태에 해지가 가능합니다.");
        		}
        	}
        	
        }
        //해지에서 가입으로 변경
        // 0: 진행중, 1: 완료, 2:거절, 3:수정요청중, 4:수정요청거절, 5:해지
        this.btn_join_onclick = function(obj,e)
        {
        	if(this.gfn_isNull(this.edt_ENT_PRG_CNTN.value)){
        		alert("가입처리내용을 입력해주시기 바랍니다.");
        	}else{

        		if(confirm("정말로 [재가입]하시겠습니까?\n확인 후에는 변경이 불가합니다.")){
        			if(this.ds_basicInfo.getColumn(0,"ENT_PRG_STSC") == "5"){
        				this.fn_approve("1");
        			}else{
        				alert("해지상태인 경우에 재가입이 가능합니다.");
        			}
        		}
        	}
        }

        

        this.fn_approve = function(param){

        	/*가입신청거절[2]이거나, 수정요청거절[4]일 경우, 가입처리 내용을 필수입니다.*/
        	if((param =="2"  || param =="4" || param =="5")&& this.gfn_isNull(this.edt_ENT_PRG_CNTN.value)){
        		alert("가입처리내용을 입력해주시기 바랍니다.");
        		this.edt_ENT_PRG_CNTN.setFocus();
        		return;
        	}	
        	var sParam 		  = "status=" +param  
        				 	 + " ent_prg_cntn='" + this.edt_ENT_PRG_CNTN.value + "'" 
        				 	 + " mb_id=" + this.edt_MB_ID.value
        				 	 + " na_trpl_c=" + this.edt_NA_TRPL_C.value ;
        						  
        	var sSvcID        = "updateMbApvrqr";
        	var sURL          = "svc::rest/mg/usrinf/updateMbApvrqr";
        	var sInDatasets   = "ds_basicInfo=ds_basicInfo ds_userAuth=ds_userAuth ds_entSvc=ds_entSvc ds_payInfo=ds_payInfo";
        	var sOutDatasets  = "";
        	var sArgument     = sParam;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회		 	
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	
        // 	trace("ds_entSvc" + this.ds_entSvc.saveXML());
        // 	trace("ds_basicInfo" + this.ds_basicInfo.saveXML());
        	
        }

        /*
         * 강제 본사승인
         */
        this.fn_hoffApprove = function()
        {
        	if (!confirm("[본사승인] 상태로 변경하시겠습니까?")) {
        		return;
        	}
        	var sParam = "mb_id=" + this.edt_MB_ID.value
        				 + " na_trpl_c=" + this.edt_NA_TRPL_C.value
        				 + " hoff_yn=Y";

        	var sSvcID        = "updateMbHoffApvrqr";
        	var sURL          = "svc::rest/mg/usrinf/updateMbHoffApvrqr";
        	var sInDatasets   = "";
        	var sOutDatasets  = "";
        	var sArgument     = sParam;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "U"; // U:저장/삭제, S:조회
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /***************************************************
        	창닫기
        ****************************************************/
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        }
        /***************************************************
        	callback메소드
        ****************************************************/
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0 ) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        	} else {
        		if (svcID == "retrieveMbApvrqr") {
        			// trace("ds_basicInfo"  + this.ds_basicInfo.saveXML());
        			var entPrgStsc = this.ds_basicInfo.getColumn(0, "ENT_PRG_STSC");

        			/*회원가입상태가 완료/가입신청거절/수정요청거절 인경우, 내용입력 및 승인 거절버튼 보여주지 않음*/
        			if (entPrgStsc == "1" || entPrgStsc == "2" || entPrgStsc == "4" || entPrgStsc == "5") {
        				this.edt_ENT_PRG_CNTN.set_readonly(false);
        				this.btn_approve.set_visible(false);
        				this.btn_reject.set_visible(false);
        			} else {
        				this.edt_ENT_PRG_CNTN.set_value("");
        				this.edt_ENT_PRG_CNTN.set_readonly(false);
        				this.btn_approve.set_visible(true);
        				this.btn_reject.set_visible(true);
        			}
        			
        			/*본사이면서 본사승인상태가 아니고, 회원가입상태가 완료/수정요청/수정요청거절일 때만 본사승인버튼 표시*/
        			if (this.ds_basicInfo.getColumn(0, "HOFF_APV_YN") != "Y" && this.ds_basicInfo.getColumn(0, "NA_MBCO_DSC") == "1") {
        				if (entPrgStsc == "1" || entPrgStsc == "3" || entPrgStsc == "4") {
        					this.btn_hoff.set_visible(true);
        				}
        			}
        					
        			if (this.ds_basicInfo.rowcount >0) {
        				if(this.ds_basicInfo.getColumn(0,"NA_MBCO_DSC" ) != "1" ){
        					this.edt_B_BZN01.set_visible(true);
        					this.edt_B_BZN02.set_visible(true);
        					this.edt_B_BZN03.set_visible(true);
        					this.Static23.set_visible(true);
        					this.Static21.set_visible(true);
        					this.Static22.set_visible(true);
        				}
        			}	
        			
        			if (this.ds_branch_bzno.rowcount > 0) {
        				var BZNO = this.ds_branch_bzno.getColumn(0, "BZNO");
        				if (BZNO && BZNO.length == 10) {
        					this.edt_B_BZN01_C.set_value(BZNO.substring(0, 3)); // 3자리
        					this.edt_B_BZN02_C.set_value(BZNO.substring(3, 5)); // 2자리
        					this.edt_B_BZN03_C.set_value(BZNO.substring(5, 10)); // 5자리
        				}
        			}
        			this.resetScroll();			
        		} else if (svcID="updateMbApvrqr" || svcID=="updateMbHoffApvrqr") {
        			this.gfn_getMessage("alert", "result.message.save.success");		
        			this.close(); 
        		}
        	}
        }

        // 강제 본사승인
        this.btn_hoff_onclick = function(obj,e)
        {
        	this.fn_hoffApprove();
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Static04.addEventHandler("onclick", this.Div05_Static03_onclick, this);
            this.Static10.addEventHandler("onclick", this.Div05_Static03_onclick, this);
            this.rdo_SEX_DSC.addEventHandler("onitemclick", this.Radio00_onitemclick, this);
            this.btn_approve.addEventHandler("onclick", this.btn_approve_onclick, this);
            this.btn_reject.addEventHandler("onclick", this.btn_reject_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_join.addEventHandler("onclick", this.btn_join_onclick, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_cancel_onclick, this);
            this.btn_hoff.addEventHandler("onclick", this.btn_hoff_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_6415.xfdl");

       
    };
}
)();
