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
                this.set_titletext("세금계산서전용회원승인상세");
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
            obj._setContents("<ColumnInfo><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"BZNO1\" type=\"STRING\" size=\"256\"/><Column id=\"BZNO2\" type=\"STRING\" size=\"256\"/><Column id=\"BZNO3\" type=\"STRING\" size=\"256\"/><Column id=\"BRC_BZNO1\" type=\"STRING\" size=\"256\"/><Column id=\"BRC_BZNO2\" type=\"STRING\" size=\"256\"/><Column id=\"BRC_BZNO3\" type=\"STRING\" size=\"256\"/><Column id=\"REPMNM\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"FZIP\" type=\"STRING\" size=\"256\"/><Column id=\"ATEL\" type=\"STRING\" size=\"256\"/><Column id=\"HTEL\" type=\"STRING\" size=\"256\"/><Column id=\"STEL\" type=\"STRING\" size=\"256\"/><Column id=\"DONGUP\" type=\"STRING\" size=\"256\"/><Column id=\"DONGBW\" type=\"STRING\" size=\"256\"/><Column id=\"RZIP\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"USR_MPNO\" type=\"STRING\" size=\"256\"/><Column id=\"HP1\" type=\"STRING\" size=\"256\"/><Column id=\"HP2\" type=\"STRING\" size=\"256\"/><Column id=\"HP3\" type=\"STRING\" size=\"256\"/><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTH\" type=\"STRING\" size=\"256\"/><Column id=\"SEX_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"USR_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"SMS_RMS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_RMS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ENT_PRG_CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"ENT_PRG_STSC\" type=\"STRING\" size=\"256\"/><Column id=\"NA_MBCO_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"APV_MB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APV_DT\" type=\"STRING\" size=\"256\"/><Column id=\"HOFF_APV_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"32\"/><Column id=\"FILETYPE\" type=\"STRING\" size=\"32\"/><Column id=\"FILESIZE\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ORGFNAME\" type=\"STRING\" size=\"32\"/><Column id=\"SYSTEMFILENAME\" type=\"STRING\" size=\"32\"/><Column id=\"SEAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("Static87", "absolute", "97.87%", "1", null, "1092", "0%", null, this);
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

            obj = new Static("Static120", "absolute", "2.13%", "471", null, "29", "2.67%", null, this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static124", "absolute", "2.13%", "541", null, "29", "2.67%", null, this);
            obj.set_taborder("6");
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

            obj = new Static("Static89", "absolute", "2.13%", "123", null, "21", "66.27%", null, this);
            obj.set_taborder("13");
            obj.set_text("세금계산서전용회원 회사 정보");
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

            obj = new Radio("rdo_COMP_TPC", "absolute", "68.93%", "234", null, "21", "5.33%", null, this);
            this.addChild(obj.name, obj);
            var rdo_COMP_TPC_innerdataset = new Dataset("rdo_COMP_TPC_innerdataset", this.rdo_COMP_TPC);
            rdo_COMP_TPC_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1010</Col><Col id=\"datacolumn\">공급업체</Col></Row><Row><Col id=\"codecolumn\">1020</Col><Col id=\"datacolumn\">쿠폰관리</Col></Row></Rows>");
            obj.set_innerdataset(rdo_COMP_TPC_innerdataset);
            obj.set_taborder("31");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            obj.set_direction("vertical");
            obj.set_visible("false");

            obj = new Static("Static02", "absolute", "30.13%", "149", null, "21", "68.67%", null, this);
            obj.set_taborder("32");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static03", "absolute", "2.13%", "335", null, "21", "70.27%", null, this);
            obj.set_taborder("33");
            obj.set_text("세금계산서전용회원 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static107", "absolute", "2.13%", "360", null, "29", "2.67%", null, this);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static113", "absolute", "2.13%", "415", null, "29", "2.67%", null, this);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static115", "absolute", "2.13%", "443", null, "29", "2.67%", null, this);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static114", "absolute", "49.33%", "201", null, "29", "31.6%", null, this);
            obj.set_taborder("37");
            obj.set_text("대표전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "2.13%", "415", null, "29", "81.2%", null, this);
            obj.set_taborder("38");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static106", "absolute", "2.13%", "360", null, "29", "81.2%", null, this);
            obj.set_taborder("39");
            obj.set_text("회원ID");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static121", "absolute", "2.13%", "521", null, "21", "68.27%", null, this);
            obj.set_taborder("40");
            obj.set_text("세금계산서전용회원 권한정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_SMS_YN", "absolute", "19.47%", "477", null, "21", "72.4%", null, this);
            obj.set_taborder("43");
            obj.set_text("SMS");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_MAIL_YN", "absolute", "30.4%", "477", null, "21", "61.47%", null, this);
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

            obj = new Edit("edt_USR_EMAIL01", "absolute", "19.47%", "419", null, "21", "55.2%", null, this);
            obj.set_taborder("48");
            obj.set_maxlength("25");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_MB_ID", "absolute", "19.47%", "364", null, "21", "63.47%", null, this);
            obj.set_taborder("49");
            obj.set_inputtype("number,english");
            obj.set_readonly("true");
            obj.set_maxlength("9");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "49.33%", "360", null, "29", "31.6%", null, this);
            obj.set_taborder("52");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_USR_NM", "absolute", "68.93%", "364", null, "21", "3.2%", null, this);
            obj.set_taborder("53");
            obj.set_maxlength("16");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static116", "absolute", "2.13%", "443", null, "29", "81.2%", null, this);
            obj.set_taborder("54");
            obj.set_text("휴대전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static125", "absolute", "26.67%", "447", null, "21", "72.13%", null, this);
            obj.set_taborder("56");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_HP01", "absolute", "27.87%", "447", null, "21", "65.33%", null, this);
            obj.set_taborder("57");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static126", "absolute", "34.67%", "447", null, "21", "64.13%", null, this);
            obj.set_taborder("58");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_HP02", "absolute", "35.87%", "447", null, "21", "57.33%", null, this);
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

            obj = new Static("Static119", "absolute", "2.13%", "471", null, "29", "81.2%", null, this);
            obj.set_taborder("62");
            obj.set_text("수신 서비스");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_CLNTNM", "absolute", "19.47%", "177", null, "21", "55.2%", null, this);
            obj.set_taborder("63");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "2.13%", "541", null, "29", "81.2%", null, this);
            obj.set_taborder("64");
            obj.set_text("회원권한");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Div("Div03", "absolute", "1.47%", "593", null, "516", "0%", null, this);
            obj.set_taborder("66");
            obj.style.set_background("transparent");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            obj = new Radio("rdo_SVC_ID", "absolute", "4.47%", "491", null, "21", "80.38%", null, this.Div03);
            this.Div03.addChild(obj.name, obj);
            var rdo_SVC_ID_innerdataset = new Dataset("rdo_SVC_ID_innerdataset", this.Div03.rdo_SVC_ID);
            rdo_SVC_ID_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">22</Col><Col id=\"datacolumn\">종량제</Col></Row><Row><Col id=\"codecolumn\">21</Col><Col id=\"datacolumn\">정액제</Col></Row></Rows>");
            obj.set_innerdataset(rdo_SVC_ID_innerdataset);
            obj.set_taborder("382");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            obj.set_direction("vertical");
            obj.set_visible("false");
            obj = new CheckBox("cbk_SVC31", "absolute", "33.42%", "490", null, "21", "58.59%", null, this.Div03);
            obj.set_taborder("383");
            obj.set_text("BI조회");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.Div03.addChild(obj.name, obj);
            obj = new CheckBox("cbk_SVC32", "absolute", "43.57%", "490", null, "21", "46.14%", null, this.Div03);
            obj.set_taborder("384");
            obj.set_text("추이분석");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.Div03.addChild(obj.name, obj);
            obj = new CheckBox("cbk_SVC33", "absolute", "55.48%", "490", null, "21", "28.96%", null, this.Div03);
            obj.set_taborder("385");
            obj.set_text("시장분석(자사)");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.Div03.addChild(obj.name, obj);
            obj = new CheckBox("cbk_SVC34", "absolute", "71.99%", "490", null, "21", "9.61%", null, this.Div03);
            obj.set_taborder("386");
            obj.set_text("시장분석(경쟁사)");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "0.68%", "312", null, "29", "2.71%", null, this.Div03);
            obj.set_taborder("387");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "0.68%", "340", null, "29", "2.71%", null, this.Div03);
            obj.set_taborder("388");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static110", "absolute", "0.68%", "368", null, "29", "2.71%", null, this.Div03);
            obj.set_taborder("389");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "0.68%", "294", null, "21", "64.95%", null, this.Div03);
            obj.set_taborder("390");
            obj.set_text("세금계산서전용회원 납부정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "0.68%", "396", null, "29", "2.71%", null, this.Div03);
            obj.set_taborder("391");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static111", "absolute", "48.58%", "368", null, "29", "32.61%", null, this.Div03);
            obj.set_taborder("392");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_Label");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "48.58%", "396", null, "29", "32.61%", null, this.Div03);
            obj.set_taborder("393");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_Label");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "0.68%", "424", null, "29", "2.71%", null, this.Div03);
            obj.set_taborder("394");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "0.68%", "424", null, "29", "82.54%", null, this.Div03);
            obj.set_taborder("395");
            obj.set_text("통장사본");
            obj.set_cssclass("sta_WF_Label");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "0.68%", "312", null, "29", "82.54%", null, this.Div03);
            obj.set_taborder("396");
            obj.set_text("결제방식");
            obj.set_cssclass("sta_WF_Label");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static22", "absolute", "0.68%", "340", null, "29", "82.54%", null, this.Div03);
            obj.set_taborder("397");
            obj.set_text("희망출금일");
            obj.set_cssclass("sta_WF_Label");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static109", "absolute", "0.68%", "368", null, "29", "82.54%", null, this.Div03);
            obj.set_taborder("398");
            obj.set_text("예금주");
            obj.set_cssclass("sta_WF_Label");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static23", "absolute", "0.68%", "396", null, "29", "82.54%", null, this.Div03);
            obj.set_taborder("399");
            obj.set_text("거래은행");
            obj.set_cssclass("sta_WF_Label");
            this.Div03.addChild(obj.name, obj);
            obj = new Radio("rdo_STL_METH_DSC", "absolute", "18%", "317", null, "21", "20.84%", null, this.Div03);
            this.Div03.addChild(obj.name, obj);
            var rdo_STL_METH_DSC_innerdataset = new Dataset("rdo_STL_METH_DSC_innerdataset", this.Div03.rdo_STL_METH_DSC);
            rdo_STL_METH_DSC_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">농협자동이체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">자동이체</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">가상계좌</Col></Row></Rows>");
            obj.set_innerdataset(rdo_STL_METH_DSC_innerdataset);
            obj.set_taborder("400");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            obj.set_direction("vertical");
            obj = new Radio("rdo_HOP_DRW_DD", "absolute", "18%", "345", null, "21", "41.41%", null, this.Div03);
            this.Div03.addChild(obj.name, obj);
            var rdo_HOP_DRW_DD_innerdataset = new Dataset("rdo_HOP_DRW_DD_innerdataset", this.Div03.rdo_HOP_DRW_DD);
            rdo_HOP_DRW_DD_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">15</Col><Col id=\"datacolumn\">15일</Col></Row><Row><Col id=\"codecolumn\">25</Col><Col id=\"datacolumn\">25일</Col></Row></Rows>");
            obj.set_innerdataset(rdo_HOP_DRW_DD_innerdataset);
            obj.set_taborder("401");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            obj.set_direction("vertical");
            obj = new Edit("edt_DPRNM", "absolute", "18%", "372", null, "21", "69.55%", null, this.Div03);
            obj.set_taborder("402");
            obj.set_readonly("true");
            obj.set_maxlength("20");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div03.addChild(obj.name, obj);
            obj = new Edit("edt_AC_NO", "absolute", "67.79%", "400", null, "21", "4.06%", null, this.Div03);
            obj.set_taborder("403");
            obj.set_inputtype("number");
            obj.set_readonly("true");
            obj.set_maxlength("15");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static122", "absolute", "0.41%", "1", null, "20", "0.41%", null, this.Div03);
            obj.set_taborder("405");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.Div03.addChild(obj.name, obj);
            obj = new MaskEdit("mae_BZNO", "absolute", "67.79%", "372", null, "21", "17.05%", null, this.Div03);
            obj.set_taborder("406");
            obj.set_readonly("true");
            obj.set_type("string");
            obj.set_mask("###-##-#####");
            obj.set_cssclass("msk_WF_Readonly");
            obj.set_visible("true");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0.68%", "452", null, "29", "2.71%", null, this.Div03);
            obj.set_taborder("407");
            obj.set_cssclass("sta_WF_Labelbg");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static20", "absolute", "0.68%", "452", null, "29", "82.54%", null, this.Div03);
            obj.set_taborder("408");
            obj.set_text("사업자등록증 사본");
            obj.set_cssclass("sta_WF_Label");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("exist_BB_FLNM", "absolute", "18.4%", "429", null, "19", "8.93%", null, this.Div03);
            obj.set_taborder("409");
            obj.set_text("통장사본이 존재하지 않습니다.");
            obj.style.set_cursor("hand");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("exist_BZ_RGWRRT_FLNM", "absolute", "18.4%", "458", null, "19", "7.31%", null, this.Div03);
            obj.set_taborder("410");
            obj.set_text("사업자등록증 사본이 존재하지 않습니다.");
            obj.style.set_cursor("hand");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "1.07%", "-25", null, "20", "-0.53%", null, this.Div03);
            obj.set_taborder("411");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.Div03.addChild(obj.name, obj);
            obj = new Radio("rdo_PSCRP_DSC", "absolute", "31.39%", "374", null, "21", "55.48%", null, this.Div03);
            this.Div03.addChild(obj.name, obj);
            var rdo_PSCRP_DSC_innerdataset = new Dataset("rdo_PSCRP_DSC_innerdataset", this.Div03.rdo_PSCRP_DSC);
            rdo_PSCRP_DSC_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">개인</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">법인</Col></Row></Rows>");
            obj.set_innerdataset(rdo_PSCRP_DSC_innerdataset);
            obj.set_taborder("412");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            obj.set_direction("vertical");
            obj = new Calendar("mae_BRITH", "absolute", "67.79%", "372", null, "21", "17.05%", null, this.Div03);
            this.Div03.addChild(obj.name, obj);
            obj.set_taborder("413");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_Readonly");
            obj = new Edit("edt_AC_NO00", "absolute", "18%", "400", null, "21", "53.86%", null, this.Div03);
            obj.set_taborder("431");
            obj.set_inputtype("number");
            obj.set_readonly("true");
            obj.set_maxlength("15");
            obj.set_cssclass("edt_WF_Readonly");
            this.Div03.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0.68%", "273", null, "20", "0.81%", null, this.Div03);
            obj.set_taborder("432");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.Div03.addChild(obj.name, obj);
            obj = new Button("btn_BL_CHG_YN_HIST", "absolute", "28.82%", "293", "70", "21", null, null, this.Div03);
            obj.set_taborder("433");
            obj.set_text("수정이력");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static12", "absolute", "2.13%", "387", null, "29", "2.67%", null, this);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "2.13%", "387", null, "29", "81.2%", null, this);
            obj.set_taborder("68");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "49.33%", "387", null, "29", "31.6%", null, this);
            obj.set_taborder("69");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_SEX_DSC", "absolute", "68.93%", "392", null, "21", "5.33%", null, this);
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

            obj = new MaskEdit("edt_BIRTH", "absolute", "19.47%", "392", null, "21", "67.87%", null, this);
            obj.set_taborder("72");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "2.13%", "22", null, "21", "70.27%", null, this);
            obj.set_taborder("73");
            obj.set_text("세금계산서전용회원 가입처리");
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

            obj = new Static("Static15", "absolute", "0%", "3", null, "1096", "97.73%", null, this);
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

            obj = new Static("Static17", "absolute", "2.27%", "500", null, "20", "-34.27%", null, this);
            obj.set_taborder("82");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_BILLING_AUTH", "absolute", "146", "546", "12.27%", "21", null, null, this);
            obj.set_taborder("83");
            obj.set_text("빌링");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_CONTRACT_AUTH", "absolute", "478", "546", "12.27%", "21", null, null, this);
            obj.set_taborder("84");
            obj.set_text("전자계약");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_TAX_AUTH", "absolute", "227", "546", "12.27%", "21", null, null, this);
            obj.set_taborder("85");
            obj.set_text("세금계산서");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("N");
            obj.set_readonly("true");
            obj.set_enable("false");
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

            obj = new Edit("edt_HP00", "absolute", "19.47%", "447", null, "21", "73.73%", null, this);
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

            obj = new Static("Static01", "absolute", "2.13%", "570", null, "14", "-20.53%", null, this);
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

            obj = new Static("Static99", "absolute", "49.33%", "229", null, "29", "31.6%", null, this);
            obj.set_taborder("100");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "17", "641", "94", "29", null, null, this);
            obj.set_taborder("101");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_CLNTNM", "absolute", "111", "641", null, "29", "16", null, this);
            obj.set_taborder("102");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "17", "669", "94", "29", null, null, this);
            obj.set_taborder("103");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "111", "669", null, "29", "16", null, this);
            obj.set_taborder("104");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_B_BZN01_C", "absolute", "115", "673", "35", "21", null, null, this);
            obj.set_taborder("105");
            obj.set_inputtype("digit");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("3");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_B_BZN02_C", "absolute", "159", "673", "30", "21", null, null, this);
            obj.set_taborder("106");
            obj.set_inputtype("digit");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("2");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_B_BZN03_C", "absolute", "198", "673", "65", "21", null, null, this);
            obj.set_taborder("107");
            obj.set_inputtype("digit");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("5");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "152", "673", "9", "21", null, null, this);
            obj.set_taborder("108");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "191", "673", "9", "21", null, null, this);
            obj.set_taborder("109");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "17", "697", "94", "29", null, null, this);
            obj.set_taborder("110");
            obj.set_text("대표자명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "111", "697", null, "29", "16", null, this);
            obj.set_taborder("111");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_REPMNM_C", "absolute", "115", "701", "180", "21", null, null, this);
            obj.set_taborder("112");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "17", "725", "94", "29", null, null, this);
            obj.set_taborder("113");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "111", "725", null, "29", "16", null, this);
            obj.set_taborder("114");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ZIP_C", "absolute", "115", "729", "70", "21", null, null, this);
            obj.set_taborder("115");
            obj.set_inputtype("digit");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("6");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "17", "753", "94", "58", null, null, this);
            obj.set_taborder("116");
            obj.set_text("회사주소");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "111", "753", null, "58", "16", null, this);
            obj.set_taborder("117");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_DONGUP_C", "absolute", "115", "758", null, "21", "22", null, this);
            obj.set_taborder("118");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("300");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_DONGBW_C", "absolute", "115", "784", null, "21", "22", null, this);
            obj.set_taborder("119");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("100");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "17", "810", "94", "29", null, null, this);
            obj.set_taborder("120");
            obj.set_text("업태");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "111", "810", null, "29", "16", null, this);
            obj.set_taborder("121");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_BZTPNM_C", "absolute", "115", "814", null, "21", "22", null, this);
            obj.set_taborder("122");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "17", "838", "94", "29", null, null, this);
            obj.set_taborder("123");
            obj.set_text("종목");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "111", "838", null, "29", "16", null, this);
            obj.set_taborder("124");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_BZCCNM_C", "absolute", "115", "842", null, "21", "22", null, this);
            obj.set_taborder("125");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("60");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "32.67%", "729", null, "21", "49.47%", null, this);
            obj.set_taborder("126");
            obj.set_text("('-' 제외)");
            obj.style.set_color("gray");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_REPMNM00_C", "absolute", "115", "645", "180", "21", null, null, this);
            obj.set_taborder("127");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("50");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "16", "617", "135", "21", null, null, this);
            obj.set_taborder("128");
            obj.set_text("청구 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "367", "669", "126", "29", null, null, this);
            obj.set_taborder("129");
            obj.set_text("종사업자번호(선택)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_TX_BZN", "absolute", "497", "673", "65", "21", null, null, this);
            obj.set_taborder("130");
            obj.set_inputtype("digit");
            obj.set_readonly("true");
            obj.set_lengthunit("ascii");
            obj.set_maxlength("4");
            obj.set_cssclass("edt_WF_Readonly");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel", "absolute", "47.33%", "16", null, "21", "47.07%", null, this);
            obj.set_taborder("131");
            obj.set_text("해지");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_join", "absolute", "53.47%", "16", null, "21", "40.93%", null, this);
            obj.set_taborder("132");
            obj.set_text("재가입");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_change", "absolute", "28%", "16", null, "21", "60.67%", null, this);
            obj.set_taborder("133");
            obj.set_text("협력업체 변경");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_usr_tpc", "absolute", "306", "15", "30", "21", null, null, this);
            obj.set_taborder("134");
            obj.set_value("1");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_hoff", "absolute", "25.33%", "335", "70", "21", null, null, this);
            obj.set_taborder("135");
            obj.set_text("본사승인");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_AUTH_CHG_YN_HIST", "absolute", "28.8%", "520", "70", "21", null, null, this);
            obj.set_taborder("136");
            obj.set_text("수정이력");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 516, this.Div03,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("66");
            		p.style.set_background("transparent");
            		p.set_visible("true");

            	}
            );
            this.Div03.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 750, 516, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("세금계산서전용회원승인상세");
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
            obj = new BindItem("item6","rdo_COMP_TPC","value","ds_basicInfo","COMP_TPC");
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
            obj = new BindItem("item13","Div03.rdo_STL_METH_DSC","value","ds_payInfo","STL_METH_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","Div03.rdo_HOP_DRW_DD","value","ds_payInfo","HOP_DRW_DD");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","Div03.edt_DPRNM","value","ds_payInfo","DPRNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","Div03.rdo_PSCRP_DSC","value","ds_payInfo","PSCRP_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","Div03.mae_BZNO","value","ds_payInfo","DPR_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","Div03.edt_AC_NO","value","ds_payInfo","ACNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","Div03.mae_BRITH","value","ds_payInfo","DPR_NO");
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
            obj = new BindItem("item18","Div03.edt_AC_NO00","value","ds_payInfo","BNK_NM");
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
            obj = new BindItem("item40","edt_REPMNM_C","value","ds_branch_bzno","REPMNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item42","edt_ZIP_C","value","ds_branch_bzno","ZIP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item43","edt_DONGUP_C","value","ds_branch_bzno","DONGUP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item44","edt_DONGBW_C","value","ds_branch_bzno","DONGBW");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item45","edt_BZTPNM_C","value","ds_branch_bzno","BZTPNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item46","edt_BZCCNM_C","value","ds_branch_bzno","BZCCNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","edt_REPMNM00_C","value","ds_branch_bzno","CLNTNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item47","edt_TX_BZN","value","ds_branch_bzno","TX_REG");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_6412.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_6412.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        var nBasicBottom = nexacro.toNumber(this.Static124.top) + nexacro.toNumber(this.Static124.height);

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
        	if (confirm("정말로 [승인]하시겠습니까?\n확인 후에는 변경이 불가합니다.")) {
        		this.fn_approve("1");
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
        	if (confirm("정말로 [해지]하시겠습니까?\n확인 후에는 변경이 불가합니다.")) {
        		if (this.ds_basicInfo.getColumn(0,"ENT_PRG_STSC") == "1") {
        			this.fn_approve("5");
        		} else {
        			alert("가입완료인 상태에 해지가 가능합니다.");
        		}
        	}
        }

        //해지에서 재가입으로 변경
        // 0: 진행중, 1: 완료, 2:거절, 3:수정요청중, 4:수정요청거절, 5:해지
        this.btn_join_onclick = function(obj,e)
        {
        	if (this.gfn_isNull(this.edt_ENT_PRG_CNTN.value)) {
        		alert("가입처리내용을 입력해주시기 바랍니다.");
        	} else {
        		if (confirm("정말로 [재가입]하시겠습니까?\n확인 후에는 변경이 불가합니다.")) {
        			if (this.ds_basicInfo.getColumn(0,"ENT_PRG_STSC") == "5") {
        				this.fn_approve("1");
        			} else {
        				alert("해지상태인 경우에 재가입이 가능합니다.");
        			}
        		}
        	}
        }

        this.btn_reject_onclick = function(obj,e)
        {
        	if (confirm("정말로 [거절]하시겠습니까?\n확인 후에는 변경이 불가합니다.")) {
        		var status = "";
        		if (this.ds_basicInfo.getColumn(0,"ENT_PRG_STSC") == "0") {
        			status ="2";
        		} else if(this.ds_basicInfo.getColumn(0,"ENT_PRG_STSC") == "3") {
        			status ="4";
        		} else {
        			alert("값이 잘못되었습니다.");
        			return;
        		}
        		this.fn_approve(status);
        	}
        	return;
        }

        this.fn_approve = function(param)
        {
        	/*가입신청거절[2]이거나, 수정요청거절[4]일 경우, 강비처리 내용을 필수입니다.*/
        	if ((param =="2"  || param =="4" || param =="5" )&& this.gfn_isNull(this.edt_ENT_PRG_CNTN.value)) {
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
        	if (this.ds_basicInfo.getColumn(0, "NA_MBCO_DSC") != "1" && !confirm("본 아이디는 '지사' 아이디 입니다. 계속 진행하시겠습니까?")) {
        		return;
        	} else if (!confirm("[본사승인] 상태로 변경하시겠습니까?")) {
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
        	서비스ID에 따른 display
        ****************************************************/
        this.fn_userSvcDisplay = function()
        {
        	for (var i =0 ; i < this.ds_entSvc.rowcount ; i++) {
        		if (this.ds_entSvc.findRow("SVC_ID","21") >= 0 && this.ds_entSvc.getColumn(this.ds_entSvc.findRow("SVC_ID","21"),"RQ_DSC") =="1"
        			&& (this.ds_entSvc.getColumn(this.ds_entSvc.findRow("SVC_ID","21"),"ENT_PRG_STSC")!= "2" && this.ds_entSvc.getColumn(this.ds_entSvc.findRow("SVC_ID","21"),"ENT_PRG_STSC")!= "4")
        		) {
        			this.Div03.rdo_SVC_ID.set_value("21");
        		}
        		if(this.ds_entSvc.findRow("SVC_ID","22") >= 0 && this.ds_entSvc.getColumn(this.ds_entSvc.findRow("SVC_ID","22"),"RQ_DSC") =="1"
        			&& (this.ds_entSvc.getColumn(this.ds_entSvc.findRow("SVC_ID","22"),"ENT_PRG_STSC")!= "2" && this.ds_entSvc.getColumn(this.ds_entSvc.findRow("SVC_ID","22"),"ENT_PRG_STSC")!= "4")
        		) {
        			this.Div03.rdo_SVC_ID.set_value("22");
        		}

        		if (this.ds_entSvc.findRow("SVC_ID","31") >= 0 && this.ds_entSvc.getColumn(this.ds_entSvc.findRow("SVC_ID","31"),"RQ_DSC") =="1"
        			&& (this.ds_entSvc.getColumn(this.ds_entSvc.findRow("SVC_ID","31"),"ENT_PRG_STSC")!= "2" && this.ds_entSvc.getColumn(this.ds_entSvc.findRow("SVC_ID","31"),"ENT_PRG_STSC")!= "4")
        		) {
        			this.Div03.cbk_SVC31.set_value("Y");
        		} else {
        			this.Div03.cbk_SVC31.set_value("N");
        		}
        		if (this.ds_entSvc.findRow("SVC_ID","32") >= 0 && this.ds_entSvc.getColumn(this.ds_entSvc.findRow("SVC_ID","32"),"RQ_DSC") =="1"
        			&& (this.ds_entSvc.getColumn(this.ds_entSvc.findRow("SVC_ID","32"),"ENT_PRG_STSC")!= "2" && this.ds_entSvc.getColumn(this.ds_entSvc.findRow("SVC_ID","32"),"ENT_PRG_STSC")!= "4")
        		) {
        			this.Div03.cbk_SVC32.set_value("Y");
        		} else {
        			this.Div03.cbk_SVC32.set_value("N");
        		}
        		if (this.ds_entSvc.findRow("SVC_ID","33") >= 0 && this.ds_entSvc.getColumn(this.ds_entSvc.findRow("SVC_ID","33"),"RQ_DSC") =="1"
        			&& (this.ds_entSvc.getColumn(this.ds_entSvc.findRow("SVC_ID","33"),"ENT_PRG_STSC")!= "2" && this.ds_entSvc.getColumn(this.ds_entSvc.findRow("SVC_ID","33"),"ENT_PRG_STSC")!= "4")
        		) {
        			this.Div03.cbk_SVC33.set_value("Y");
        		} else {
        			this.Div03.cbk_SVC33.set_value("N");
        		}
        		if (this.ds_entSvc.findRow("SVC_ID","34") >= 0 && this.ds_entSvc.getColumn(this.ds_entSvc.findRow("SVC_ID","34"),"RQ_DSC") =="1"
        			&& (this.ds_entSvc.getColumn(this.ds_entSvc.findRow("SVC_ID","34"),"ENT_PRG_STSC")!= "2" && this.ds_entSvc.getColumn(this.ds_entSvc.findRow("SVC_ID","34"),"ENT_PRG_STSC")!= "4")
        		) {
        			this.Div03.cbk_SVC34.set_value("Y");
        		} else {
        			this.Div03.cbk_SVC34.set_value("N");
        		}
        	}
        }

        /***************************************************
        	사용권한에 따른 display
        ****************************************************/
        this.fn_userAuthDlsplay = function()
        {
        	for (var i =0; i < this.ds_userAuth.rowcount; i++) {
        		if (this.ds_userAuth.findRow("USR_AUTH_DSC","1") >= 0
        			&& this.ds_userAuth.getColumn(this.ds_userAuth.findRow("USR_AUTH_DSC","1"), "RQ_DSC") =="1"
        			&& (this.ds_userAuth.getColumn(this.ds_userAuth.findRow("USR_AUTH_DSC","1"), "ENT_PRG_STSC") != "2" && this.ds_userAuth.getColumn(this.ds_userAuth.findRow("USR_AUTH_DSC", "1"), "ENT_PRG_STSC") != "4")
        			) {
        			this.chk_BILLING_AUTH.set_value("Y");
        		} else {
        			this.chk_BILLING_AUTH.set_value("N");
        		}

        		if (this.ds_userAuth.findRow("USR_AUTH_DSC","2") >= 0
        			&& this.ds_userAuth.getColumn(this.ds_userAuth.findRow("USR_AUTH_DSC","2"), "RQ_DSC") =="1"
        			&& (this.ds_userAuth.getColumn(this.ds_userAuth.findRow("USR_AUTH_DSC","2"), "ENT_PRG_STSC") != "2" && this.ds_userAuth.getColumn(this.ds_userAuth.findRow("USR_AUTH_DSC","2"), "ENT_PRG_STSC") != "4")
        			) {
        			this.chk_CONTRACT_AUTH.set_value("Y");
        		} else {
        			this.chk_CONTRACT_AUTH.set_value("N");
        		}

        		if (this.ds_userAuth.findRow("USR_AUTH_DSC","3") >= 0
        			&& this.ds_userAuth.getColumn(this.ds_userAuth.findRow("USR_AUTH_DSC", "3"), "RQ_DSC") == "1"
        			&& (this.ds_userAuth.getColumn(this.ds_userAuth.findRow("USR_AUTH_DSC", "3"), "ENT_PRG_STSC") != "2" && this.ds_userAuth.getColumn(this.ds_userAuth.findRow("USR_AUTH_DSC", "3"), "ENT_PRG_STSC") != "4")
        			) {
        			this.chk_TAX_AUTH.set_value("Y");
        		} else {
        			this.chk_TAX_AUTH.set_value("N");
        		}
        	}
        	if (this.chk_BILLING_AUTH.value == "Y") {
        		if (this.ds_payInfo.getColumn(0,"PSCRP_DSC") == "1") {
        			this.Div03.Static111.set_text("생년월일");
        			this.Div03.mae_BRITH.set_visible(true);
        			this.Div03.mae_BZNO.set_visible(false);
        		} else if (this.ds_payInfo.getColumn(0,"PSCRP_DSC") == "2") {
        			this.Div03.Static111.set_text("사업자번호");
        			this.Div03.mae_BRITH.set_visible(false);
        			this.Div03.mae_BZNO.set_visible(true);
        		} else {
        			this.Div03.Static111.set_text("생년월일");
        			this.Div03.mae_BRITH.set_visible(true);
        			this.Div03.mae_BZNO.set_visible(false);
        			this.Div03.mae_BRITH.set_value("");
        		}

        		/*통장사본다운로드*/
        		if (!this.gfn_isNull(this.ds_payInfo.getColumn(0,"BB_FLNM"))) {
        			this.Div03.exist_BB_FLNM.set_text(this.ds_payInfo.getColumn(0,"BB_FLNM"));
        		}

        		/*사업자등록증다운로드*/
        		if (!this.gfn_isNull(this.ds_payInfo.getColumn(0,"BZ_RGWRRT_FLNM"))) {
        			this.Div03.exist_BZ_RGWRRT_FLNM.set_text(this.ds_payInfo.getColumn(0,"BZ_RGWRRT_FLNM"));
        		}
        		this.Div03.set_visible(true);
        		this.fn_userSvcDisplay();
        	} else {
        		this.Div03.set_visible(false);
        	}

        	if (this.chk_BILLING_AUTH.value == "Y" && this.chk_CONTRACT_AUTH.value == "N") {
        		this.Div03.set_visible(true);
        	}

        	this.resetScroll();
        }

        /***************************************************
        	파일다운로드
        ****************************************************/
        this.fn_downloandImg = function(type)
        {
        	this.ds_download.clearData();
        	this.ds_download.addRow();
        	this.ds_download.setColumn(0, "SEAL", "cmpyPay");
        	this.ds_download.setColumn(0, "CHK", "1");

        	if (type == "BB_FLNM") {
        		this.ds_download.setColumn(0,"SYSTEMFILENAME",this.ds_payInfo.getColumn(0,"BB_FL_TMPNM"));
        		this.ds_download.setColumn(0,"ORGFNAME",this.ds_payInfo.getColumn(0,"BB_FLNM"));
        	} else if (type == "BZ_RGWRRT_FLNM") {
        		this.ds_download.setColumn(0,"SYSTEMFILENAME",this.ds_payInfo.getColumn(0,"BZ_RGWRRT_FL_TMPNM"));
        		this.ds_download.setColumn(0,"ORGFNAME",this.ds_payInfo.getColumn(0,"BZ_RGWRRT_FLNM"));
        	}
        	this.gfn_callDownload(this.ds_download, "CHK", this.edt_NA_TRPL_C.value);
        }

        this.Div03_exist_BB_FLNM_onclick = function(obj,e)
        {
        	if (!this.gfn_isNull(this.ds_payInfo.getColumn(0,"BB_FLNM"))) {
        		this.fn_downloandImg("BB_FLNM");
        	} else {
        		alert("통장사본이 존재하지 않습니다.");
        	}
        }

        this.Div03_exist_BZ_RGWRRT_FLNM_onclick = function(obj,e)
        {
        	if (!this.gfn_isNull(this.ds_payInfo.getColumn(0,"BZ_RGWRRT_FLNM"))) {
        		this.fn_downloandImg("BZ_RGWRRT_FLNM");
        	} else {
        		alert("사업자등록증 사본이 존재하지 않습니다.");
        	}
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
        	if (ErrorCode < 0) {
        		this.gfn_getMessage("alert", "error.message.server.exception");
        	} else {
        		//trace(this.ds_basicInfo.saveXML());
        		//trace(this.ds_entSvc.saveXML());
        		//trace(this.ds_payInfo.saveXML());
        		//trace(this.ds_userAuth.saveXML());

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
        			
        			/*회원가입상태가 완료/수정요청/수정요청거절일 때만 본사승인버튼 표시(지사의 경우 업체 확인 후 본사승인)*/
        			if (this.ds_basicInfo.getColumn(0, "HOFF_APV_YN") != "Y") {
        				if (entPrgStsc == "1" || entPrgStsc == "3" || entPrgStsc == "4") {
        					this.btn_hoff.set_visible(true);
        				}
        			}

        			if (this.ds_basicInfo.rowcount >0) {
        				if (this.ds_basicInfo.getColumn(0, "NA_MBCO_DSC") != "1") {
        					this.edt_B_BZN01.set_visible(true);
        					this.edt_B_BZN02.set_visible(true);
        					this.edt_B_BZN03.set_visible(true);
        					this.Static23.set_visible(true);
        					this.Static21.set_visible(true);
        					this.Static22.set_visible(true);
        				}
        				
        				if (this.ds_basicInfo.getColumn(0, "AUTH_CHG_YN") == "Y") {
        					this.btn_AUTH_CHG_YN_HIST.set_visible(true);
        				} else {
        					this.btn_AUTH_CHG_YN_HIST.set_visible(false);
        				}
        				
        				if (this.ds_basicInfo.getColumn(0, "BL_CHG_YN") == "Y") {
        					this.Div03.btn_BL_CHG_YN_HIST.set_visible(true);
        				} else {
        					this.Div03.btn_BL_CHG_YN_HIST.set_visible(false);
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

        			//this.alert("rowcnt >>>> " + this.ds_userAuth.rowcount);
        			if (this.ds_userAuth.rowcount > 0) {
        				this.fn_userAuthDlsplay();
        			} else {
        				this.Div03.set_visible(false);
        				this.resetScroll();
        			}
        			this.resetScroll();
        		} else if (svcID=="updateMbApvrqr" || svcID=="updateMbHoffApvrqr" || svcID=="changeMbApvrqr") {
        			this.gfn_getMessage("alert", "result.message.save.success");
        			this.close();
        		}
        	}
        }

        this.btn_change_onclick = function(obj,e)
        {
        	if (this.gfn_isNull(this.edt_ENT_PRG_CNTN.value)) {
        		alert("가입처리내용을 입력해주시기 바랍니다.");
        	} else {
        		if (confirm("정말로 [협력업체 변경]하시겠습니까?\n확인 후에는 변경이 불가합니다.")) {
        			if(this.ds_basicInfo.getColumn(0,"ENT_PRG_STSC") == "1"){
        				var sParam 		  = "na_trpl_c=" + this.edt_NA_TRPL_C.value
        							  + " ent_prg_cntn='" + this.edt_ENT_PRG_CNTN.value + "'"
        							  + " mb_id=" + this.edt_MB_ID.value
        							  + " status=" + this.edt_usr_tpc.value;
        				var sSvcID        = "changeMbApvrqr";
        				var sURL          = "svc::rest/mg/usrinf/changeMbApvrqr";
        				var sInDatasets   = "";
        				var sOutDatasets  = "";
        				var sArgument     = sParam;
        				var sCallbackFunc = "fn_callBack";
        				var sTranType     = "U"; // U:저장/삭제, S:조회
        				this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        			} else {
        				alert("승인완료인 상태에 변경이 가능합니다.");
        			}
        		}
        	}
        }

        // 강제 본사승인
        this.btn_hoff_onclick = function(obj,e)
        {
        	this.fn_hoffApprove();
        }
        this.btn_AUTH_CHG_YN_HIST_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"S", dsArg:this.ds_basicInfo};
        	var sOption = "autosize=true, title=true";
        	var sPopupCallBack = "fn_hstpopupAfter";
        	this.gfn_openPopup("popId_AUTH_CHG", "OMG.MG::OMG_DS_SC_6411_P03.xfdl", oArg, sOption, sPopupCallBack);
        }

        this.btn_BL_CHG_YN_HIST_onclick = function(obj,e)
        {
        	var oArg = {paramMode:"S", dsArg:this.ds_basicInfo};
        	var sOption = "autosize=true, title=true";
        	var sPopupCallBack = "fn_hstpopupAfter";
        	this.gfn_openPopup("popId_BL_CHG", "OMG.MG::OMG_DS_SC_6411_P01.xfdl", oArg, sOption, sPopupCallBack);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.rdo_COMP_TPC.addEventHandler("onitemclick", this.Radio00_onitemclick, this);
            this.Static04.addEventHandler("onclick", this.Div05_Static03_onclick, this);
            this.Div03.rdo_SVC_ID.addEventHandler("onitemclick", this.Div03_rdo_SVC_ID_onitemclick, this);
            this.Div03.cbk_SVC31.addEventHandler("onclick", this.Div03_cbk_SVC31_onclick, this);
            this.Div03.cbk_SVC32.addEventHandler("onclick", this.Div03_cbk_SVC32_onclick, this);
            this.Div03.cbk_SVC33.addEventHandler("onclick", this.Div03_cbk_SVC33_onclick, this);
            this.Div03.cbk_SVC34.addEventHandler("onclick", this.Div03_cbk_SVC34_onclick, this);
            this.Div03.rdo_HOP_DRW_DD.addEventHandler("onitemclick", this.Div03_rdo_HOP_DRW_DD_onitemclick, this);
            this.Div03.exist_BB_FLNM.addEventHandler("onclick", this.Div03_exist_BB_FLNM_onclick, this);
            this.Div03.exist_BZ_RGWRRT_FLNM.addEventHandler("onclick", this.Div03_exist_BZ_RGWRRT_FLNM_onclick, this);
            this.Div03.rdo_PSCRP_DSC.addEventHandler("onitemchanged", this.PSCRP_DSC_onitemchanged, this);
            this.Div03.btn_BL_CHG_YN_HIST.addEventHandler("onclick", this.btn_BL_CHG_YN_HIST_onclick, this);
            this.Static10.addEventHandler("onclick", this.Div05_Static03_onclick, this);
            this.rdo_SEX_DSC.addEventHandler("onitemclick", this.Radio00_onitemclick, this);
            this.btn_approve.addEventHandler("onclick", this.btn_approve_onclick, this);
            this.btn_reject.addEventHandler("onclick", this.btn_reject_onclick, this);
            this.btn_close.addEventHandler("onclick", this.btn_close_onclick, this);
            this.btn_cancel.addEventHandler("onclick", this.btn_cancel_onclick, this);
            this.btn_join.addEventHandler("onclick", this.btn_join_onclick, this);
            this.btn_change.addEventHandler("onclick", this.btn_change_onclick, this);
            this.btn_hoff.addEventHandler("onclick", this.btn_hoff_onclick, this);
            this.btn_AUTH_CHG_YN_HIST.addEventHandler("onclick", this.btn_AUTH_CHG_YN_HIST_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_6412.xfdl", true);

       
    };
}
)();
