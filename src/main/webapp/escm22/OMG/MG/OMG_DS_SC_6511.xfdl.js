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
                this.set_titletext("회원정보");
                this._setFormPosition(0,0,803,490);
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

            obj = new Dataset("ds_telNo", this);
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

            obj = new Dataset("ds_bankCode", this);
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

            obj = new Dataset("ds_usrInfo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BZNO01\" type=\"STRING\" size=\"256\"/><Column id=\"BZNO02\" type=\"STRING\" size=\"256\"/><Column id=\"BZNO03\" type=\"STRING\" size=\"256\"/><Column id=\"NA_TRPL_C\" type=\"STRING\" size=\"256\"/><Column id=\"REPMNM\" type=\"STRING\" size=\"256\"/><Column id=\"CLNTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ATEL\" type=\"STRING\" size=\"256\"/><Column id=\"HTEL\" type=\"STRING\" size=\"256\"/><Column id=\"STEL\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_RGNO\" type=\"STRING\" size=\"256\"/><Column id=\"HFAX\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_SQNO\" type=\"STRING\" size=\"256\"/><Column id=\"NA_MBCO_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_TPC\" type=\"STRING\" size=\"256\"/><Column id=\"FZIP\" type=\"STRING\" size=\"256\"/><Column id=\"RZIP\" type=\"STRING\" size=\"256\"/><Column id=\"DONGUP\" type=\"STRING\" size=\"256\"/><Column id=\"DONGBW\" type=\"STRING\" size=\"256\"/><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTH\" type=\"STRING\" size=\"256\"/><Column id=\"SEX_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USR_EMAIL01\" type=\"STRING\" size=\"256\"/><Column id=\"USR_EMAIL02\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO01\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO02\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO03\" type=\"STRING\" size=\"256\"/><Column id=\"MPNO01\" type=\"STRING\" size=\"256\"/><Column id=\"MPNO02\" type=\"STRING\" size=\"256\"/><Column id=\"MPNO03\" type=\"STRING\" size=\"256\"/><Column id=\"SMS_RMS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_RMS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MB_PW\" type=\"STRING\" size=\"256\"/><Column id=\"TR_STOP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USR_TPC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MB_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RQ_DSC\" type=\"STRING\" size=\"256\"/><Column id=\"ENT_PRG_STSC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_payInfo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"STL_METH_DSC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BNK_C\" type=\"STRING\" size=\"256\"/><Column id=\"ACNO\" type=\"STRING\" size=\"256\"/><Column id=\"BUILING_USR\" type=\"STRING\" size=\"256\"/><Column id=\"TAX_USR\" type=\"STRING\" size=\"256\"/><Column id=\"CANCEL_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"APPLY_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REAPPLY_DTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_svcInfo", this);
            obj.set_firefirstcount("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static12", "absolute", "1.49%", "707", null, "29", "1.87%", null, this);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static07", "absolute", "1.49%", "616", null, "29", "1.87%", null, this);
            obj.set_taborder("159");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "1.49%", "735", null, "29", "1.87%", null, this);
            obj.set_taborder("156");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static21", "absolute", "1.49%", "588", null, "29", "1.87%", null, this);
            obj.set_taborder("155");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static23", "absolute", "1.49%", "588", null, "29", "81.82%", null, this);
            obj.set_taborder("151");
            obj.set_text("해지일자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_CANCEL_DTM", "absolute", "18.56%", "592", null, "21", "68.74%", null, this);
            obj.set_taborder("152");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            this.addChild(obj.name, obj);

            obj = new Static("Static22", "absolute", "50.19%", "588", null, "29", "30.76%", null, this);
            obj.set_taborder("153");
            obj.set_text("재개시일자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_REAPPLY_DTM", "absolute", "69.74%", "592", null, "21", "17.56%", null, this);
            obj.set_taborder("154");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            this.addChild(obj.name, obj);

            obj = new Static("Static37", "absolute", "1.49%", "560", null, "29", "1.87%", null, this);
            obj.set_taborder("130");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static34", "absolute", "1.49%", "532", null, "29", "1.87%", null, this);
            obj.set_taborder("125");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static32", "absolute", "1.49%", "504", null, "29", "1.87%", null, this);
            obj.set_taborder("122");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static26", "absolute", "1.49%", "294", null, "29", "1.87%", null, this);
            obj.set_taborder("114");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static27", "absolute", "1.49%", "322", null, "29", "1.87%", null, this);
            obj.set_taborder("115");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static95", "absolute", "1.49%", "143", null, "29", "1.87%", null, this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static20", "absolute", "1.49%", "228", null, "29", "1.87%", null, this);
            obj.set_taborder("99");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static14", "absolute", "1.49%", "87", null, "29", "1.87%", null, this);
            obj.set_taborder("86");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static13", "absolute", "1.49%", "87", null, "29", "81.82%", null, this);
            obj.set_taborder("85");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "1.37%", "865", null, "20", "3.24%", null, this);
            obj.set_taborder("3");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static124", "absolute", "1.49%", "834", null, "29", "1.87%", null, this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static91", "absolute", "1.49%", "31", null, "29", "1.87%", null, this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_CONTRACT_AUTH", "absolute", "31.26%", "838", null, "21", "56.04%", null, this);
            obj.set_taborder("8");
            obj.set_text("전자계약");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static103", "absolute", "1.49%", "171", null, "58", "1.87%", null, this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static101", "absolute", "1.49%", "59", null, "29", "1.87%", null, this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static98", "absolute", "1.49%", "115", null, "29", "1.87%", null, this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static89", "absolute", "1.49%", "9", null, "21", "78.08%", null, this);
            obj.set_taborder("13");
            obj.set_text("회사 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static92", "absolute", "1.49%", "31", null, "29", "81.82%", null, this);
            obj.set_taborder("14");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static94", "absolute", "1.49%", "59", null, "29", "81.82%", null, this);
            obj.set_taborder("15");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static97", "absolute", "1.49%", "115", null, "29", "81.82%", null, this);
            obj.set_taborder("16");
            obj.set_text("본지사구분");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static100", "absolute", "1.49%", "143", null, "29", "81.82%", null, this);
            obj.set_taborder("17");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static102", "absolute", "1.49%", "171", null, "58", "81.82%", null, this);
            obj.set_taborder("18");
            obj.set_text("회사주소");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static93", "absolute", "50.19%", "31", null, "29", "30.76%", null, this);
            obj.set_taborder("19");
            obj.set_text("거래처코드");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static99", "absolute", "50.19%", "115", null, "29", "30.76%", null, this);
            obj.set_taborder("20");
            obj.set_text("업체유형");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_BZNO02", "absolute", "23.91%", "35", null, "21", "71.86%", null, this);
            obj.set_taborder("22");
            obj.set_readonly("true");
            obj.set_maxlength("2");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_BZNO03", "absolute", "28.52%", "35", null, "21", "62.27%", null, this);
            obj.set_taborder("23");
            obj.set_readonly("true");
            obj.set_maxlength("5");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_NA_TRPL_C", "absolute", "69.74%", "35", null, "21", "2.37%", null, this);
            obj.set_taborder("24");
            obj.set_readonly("false");
            obj.set_maxlength("13");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_DONGBW", "absolute", "18.56%", "177", null, "21", "4.11%", null, this);
            obj.set_taborder("29");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_DONGUP", "absolute", "18.56%", "202", null, "21", "4.11%", null, this);
            obj.set_taborder("30");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_COMP_TPC", "absolute", "18.56%", "119", null, "21", "55.79%", null, this);
            this.addChild(obj.name, obj);
            var rdo_COMP_TPC_innerdataset = new Dataset("rdo_COMP_TPC_innerdataset", this.rdo_COMP_TPC);
            rdo_COMP_TPC_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">본사</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">지사</Col></Row></Rows>");
            obj.set_innerdataset(rdo_COMP_TPC_innerdataset);
            obj.set_taborder("31");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            obj.set_direction("vertical");

            obj = new Static("Static03", "absolute", "1.49%", "485", null, "21", "79.58%", null, this);
            obj.set_taborder("33");
            obj.set_text("납부정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static107", "absolute", "1.49%", "679", null, "29", "1.87%", null, this);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static115", "absolute", "1.49%", "763", null, "29", "1.87%", null, this);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("Static114", "absolute", "50.19%", "143", null, "29", "30.76%", null, this);
            obj.set_taborder("37");
            obj.set_text("대표전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static04", "absolute", "1.49%", "735", null, "29", "81.82%", null, this);
            obj.set_taborder("38");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static106", "absolute", "1.49%", "679", null, "29", "81.82%", null, this);
            obj.set_taborder("39");
            obj.set_text("회원ID");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static121", "absolute", "1.49%", "814", null, "21", "79.58%", null, this);
            obj.set_taborder("40");
            obj.set_text("권한 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_TAX_AUTH", "absolute", "45.83%", "838", null, "21", "41.47%", null, this);
            obj.set_taborder("41");
            obj.set_text("세금계산서");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_BILLING_AUTH", "absolute", "18.56%", "838", null, "21", "73.23%", null, this);
            obj.set_taborder("42");
            obj.set_text("빌링");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_SMS_YN", "absolute", "18.56%", "767", null, "21", "73.23%", null, this);
            obj.set_taborder("43");
            obj.set_text("SMS");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_MAIL_YN", "absolute", "31.26%", "767", null, "21", "60.65%", null, this);
            obj.set_taborder("44");
            obj.set_text("메일");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_TEL", "absolute", "69.86%", "147", null, "21", "22.91%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("45");
            obj.set_readonly("true");
            obj.set_innerdataset("ds_telNo");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");

            obj = new Edit("edt_TEL01", "absolute", "77.46%", "147", null, "21", "15.82%", null, this);
            obj.set_taborder("46");
            obj.set_inputtype("number");
            obj.set_readonly("true");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_TEL02", "absolute", "84.68%", "147", null, "21", "8.47%", null, this);
            obj.set_taborder("47");
            obj.set_inputtype("number");
            obj.set_readonly("true");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_USR_EMAIL01", "absolute", "18.56%", "739", null, "21", "68.74%", null, this);
            obj.set_taborder("48");
            obj.set_maxlength("25");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_MB_ID", "absolute", "18.56%", "683", null, "21", "64.38%", null, this);
            obj.set_taborder("49");
            obj.set_inputtype("number,english");
            obj.set_readonly("true");
            obj.set_maxlength("9");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_USR_EMAIL02", "absolute", "33.37%", "739", null, "21", "52.43%", null, this);
            obj.set_taborder("50");
            obj.set_maxlength("25");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static134", "absolute", "31.63%", "739", null, "21", "66.63%", null, this);
            obj.set_taborder("51");
            obj.set_text("@");
            this.addChild(obj.name, obj);

            obj = new Static("Static05", "absolute", "50.19%", "707", null, "29", "30.76%", null, this);
            obj.set_taborder("52");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_USR_NM", "absolute", "69.61%", "711", null, "21", "2.49%", null, this);
            obj.set_taborder("53");
            obj.set_maxlength("16");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static116", "absolute", "50.19%", "763", null, "29", "30.76%", null, this);
            obj.set_taborder("54");
            obj.set_text("휴대전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_HP", "absolute", "69.61%", "767", null, "21", "23.16%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("55");
            obj.set_readonly("true");
            obj.set_innerdataset("@ds_hpNo");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");

            obj = new Edit("edt_HP01", "absolute", "77.21%", "767", null, "21", "15.94%", null, this);
            obj.set_taborder("57");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_HP02", "absolute", "84.43%", "767", null, "21", "8.72%", null, this);
            obj.set_taborder("59");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static119", "absolute", "1.49%", "763", null, "29", "81.82%", null, this);
            obj.set_taborder("62");
            obj.set_text("수신 서비스");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_CLNTNM", "absolute", "18.56%", "63", null, "21", "53.55%", null, this);
            obj.set_taborder("63");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static09", "absolute", "1.49%", "834", null, "29", "81.82%", null, this);
            obj.set_taborder("64");
            obj.set_text("회원권한");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static10", "absolute", "1.49%", "707", null, "29", "81.82%", null, this);
            obj.set_taborder("68");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static11", "absolute", "50.19%", "735", null, "29", "30.76%", null, this);
            obj.set_taborder("69");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_SEX_DSC", "absolute", "69.61%", "740", null, "21", "4.61%", null, this);
            this.addChild(obj.name, obj);
            var rdo_SEX_DSC_innerdataset = new Dataset("rdo_SEX_DSC_innerdataset", this.rdo_SEX_DSC);
            rdo_SEX_DSC_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">남</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">여</Col></Row></Rows>");
            obj.set_innerdataset(rdo_SEX_DSC_innerdataset);
            obj.set_taborder("70");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            obj.set_direction("vertical");

            obj = new Edit("edt_BZNO01", "absolute", "18.56%", "35", null, "21", "76.46%", null, this);
            obj.set_taborder("71");
            obj.set_readonly("true");
            obj.set_maxlength("3");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_BIRTH", "absolute", "18.56%", "712", null, "21", "68.74%", null, this);
            obj.set_taborder("72");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static17", "absolute", "1.49%", "468", null, "20", "-27.15%", null, this);
            obj.set_taborder("81");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static08", "absolute", "50.19%", "59", null, "29", "30.76%", null, this);
            obj.set_taborder("83");
            obj.set_text("대표자명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_REPMNM00", "absolute", "69.74%", "63", null, "21", "2.37%", null, this);
            obj.set_taborder("84");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static18", "absolute", "50.19%", "87", null, "29", "30.76%", null, this);
            obj.set_taborder("87");
            obj.set_text("팩스번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_FAX", "absolute", "69.86%", "91", null, "21", "22.91%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("91");
            obj.set_readonly("true");
            obj.set_innerdataset("@ds_telNo");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");
            obj.set_index("-1");

            obj = new Edit("edt_FAX1", "absolute", "77.46%", "91", null, "21", "15.69%", null, this);
            obj.set_taborder("92");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_FAX2", "absolute", "84.68%", "91", null, "21", "8.47%", null, this);
            obj.set_taborder("93");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_COMP_TPC00", "absolute", "69.86%", "119", null, "21", "2.86%", null, this);
            this.addChild(obj.name, obj);
            var rdo_COMP_TPC00_innerdataset = new Dataset("rdo_COMP_TPC00_innerdataset", this.rdo_COMP_TPC00);
            rdo_COMP_TPC00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1010</Col><Col id=\"datacolumn\">공급업체</Col></Row><Row><Col id=\"codecolumn\">1020</Col><Col id=\"datacolumn\">쿠폰관리</Col></Row><Row><Col id=\"codecolumn\">1030</Col><Col id=\"datacolumn\">위탁업체</Col></Row></Rows>");
            obj.set_innerdataset(rdo_COMP_TPC00_innerdataset);
            obj.set_taborder("94");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            obj.set_direction("vertical");
            obj.set_index("-1");

            obj = new Static("Static00", "absolute", "50.19%", "560", null, "29", "30.76%", null, this);
            obj.set_taborder("96");
            obj.set_text("개시일자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_CLNTNM00", "absolute", "18.56%", "232", null, "21", "53.55%", null, this);
            obj.set_taborder("97");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static19", "absolute", "1.49%", "228", null, "29", "81.82%", null, this);
            obj.set_taborder("98");
            obj.set_text("거래중지여부");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_APPLY_DTM", "absolute", "69.74%", "564", null, "21", "17.56%", null, this);
            obj.set_taborder("100");
            obj.set_type("string");
            obj.set_mask("####-##-##");
            this.addChild(obj.name, obj);

            obj = new Static("Static24", "absolute", "1.49%", "294", null, "29", "81.69%", null, this);
            obj.set_taborder("107");
            obj.set_text("부가정보 이용");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static25", "absolute", "1.49%", "322", null, "29", "81.69%", null, this);
            obj.set_taborder("108");
            obj.set_text("정보분석 이용");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new CheckBox("cbk_SVC31", "absolute", "18.56%", "327", "58", "21", null, null, this);
            obj.set_taborder("109");
            obj.set_text("BI조회");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("cbk_SVC32", "absolute", "31.13%", "327", "74", "21", null, null, this);
            obj.set_taborder("110");
            obj.set_text("추이분석");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_SVC_ID", "absolute", "18.56%", "299", null, "21", "56.79%", null, this);
            this.addChild(obj.name, obj);
            var rdo_SVC_ID_innerdataset = new Dataset("rdo_SVC_ID_innerdataset", this.rdo_SVC_ID);
            rdo_SVC_ID_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">22</Col><Col id=\"datacolumn\">종량제</Col></Row><Row><Col id=\"codecolumn\">21</Col><Col id=\"datacolumn\">정액제</Col></Row></Rows>");
            obj.set_innerdataset(rdo_SVC_ID_innerdataset);
            obj.set_taborder("111");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            obj.set_direction("vertical");

            obj = new CheckBox("cbk_SVC33", "absolute", "42.96%", "327", "112", "21", null, null, this);
            obj.set_taborder("112");
            obj.set_text("시장분석(자사)");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("cbk_SVC34", "absolute", "59.53%", "327", "132", "21", null, null, this);
            obj.set_taborder("113");
            obj.set_text("카테고리 시장분석");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static28", "absolute", "1.49%", "274", null, "21", "79.7%", null, this);
            obj.set_taborder("116");
            obj.set_text("서비스 이용");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static29", "absolute", "1.49%", "256", null, "20", "-27.9%", null, this);
            obj.set_taborder("117");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static31", "absolute", "1.49%", "504", null, "29", "81.82%", null, this);
            obj.set_taborder("121");
            obj.set_text("납부방식");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static33", "absolute", "1.49%", "532", null, "29", "81.82%", null, this);
            obj.set_taborder("123");
            obj.set_text("거래은행");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static35", "absolute", "50.19%", "504", null, "29", "30.76%", null, this);
            obj.set_taborder("126");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static36", "absolute", "1.49%", "560", null, "29", "81.82%", null, this);
            obj.set_taborder("128");
            obj.set_text("청구금액");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_BIRTH07", "absolute", "18.56%", "564", null, "21", "53.55%", null, this);
            obj.set_taborder("129");
            obj.set_type("number");
            obj.set_mask("#,##0");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static38", "absolute", "50.19%", "532", null, "29", "30.76%", null, this);
            obj.set_taborder("131");
            obj.set_text("납부금액");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edt_PAY_AMT", "absolute", "69.74%", "536", null, "21", "2.37%", null, this);
            obj.set_taborder("132");
            obj.set_type("number");
            obj.set_mask("#,##0");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_CLNTNM01", "absolute", "18.56%", "508", null, "21", "53.55%", null, this);
            obj.set_taborder("133");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_CLNTNM03", "absolute", "69.74%", "508", null, "21", "2.37%", null, this);
            obj.set_taborder("135");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static39", "absolute", "1.49%", "661", null, "21", "79.58%", null, this);
            obj.set_taborder("137");
            obj.set_text("회원 정보");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static40", "absolute", "1.49%", "645", null, "20", "-24.53%", null, this);
            obj.set_taborder("138");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static16", "absolute", "1.49%", "862", null, "21", "3.11%", null, this);
            obj.set_taborder("139");
            this.addChild(obj.name, obj);

            obj = new Static("Static41", "absolute", "1.37%", "792", null, "20", "-18.68%", null, this);
            obj.set_taborder("140");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static15", "absolute", "0%", "1", null, "1195", "98.51%", null, this);
            obj.set_taborder("141");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static87", "absolute", "98.13%", "1", null, "1195", "0%", null, this);
            obj.set_taborder("142");
            obj.set_text("17");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_HP00", "absolute", "18.56%", "91", "7.22%", "21", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("143");
            obj.set_readonly("true");
            obj.set_innerdataset("@ds_telNo");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");

            obj = new Edit("edt_HP00", "absolute", "26.15%", "91", "6.85%", "21", null, null, this);
            obj.set_taborder("144");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_HP03", "absolute", "33.37%", "91", "6.85%", "21", null, null, this);
            obj.set_taborder("145");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_HP06", "absolute", "18.56%", "147", null, "21", "74.6%", null, this);
            obj.set_taborder("146");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_HP07", "absolute", "25.78%", "147", null, "21", "67.37%", null, this);
            obj.set_taborder("147");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_usrChange", "absolute", null, "0", "77", "21", "15", null, this);
            obj.set_taborder("148");
            obj.set_text("업체ID전환");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_BANK", "absolute", "18.56%", "537", null, "21", "53.55%", null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("150");
            obj.set_readonly("true");
            obj.set_innerdataset("@ds_bankCode");
            obj.set_codecolumn("SIMP_C");
            obj.set_datacolumn("SIMP_CNM");

            obj = new Static("Static06", "absolute", "1.49%", "616", null, "29", "81.82%", null, this);
            obj.set_taborder("157");
            obj.set_text("빌링회원");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_TAX_USR", "absolute", "69.74%", "620", null, "21", "2.37%", null, this);
            obj.set_taborder("160");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static30", "absolute", "50.19%", "616", null, "29", "30.76%", null, this);
            obj.set_taborder("161");
            obj.set_text("세금계산서회원");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_BUILING_USR", "absolute", "18.56%", "620", null, "21", "53.55%", null, this);
            obj.set_taborder("162");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static122", "absolute", "16", "351", "717", "20", null, null, this);
            obj.set_taborder("164");
            obj.set_text("20");
            obj.set_visible("false");
            obj.style.set_background("#dc143c5b");
            this.addChild(obj.name, obj);

            obj = new Static("Static42", "absolute", "1.49%", "371", "155", "21", null, null, this);
            obj.set_taborder("165");
            obj.set_text("자사판매정보 제공동의");
            obj.set_cssclass("sta_WF_Subtitle");
            obj.style.set_background("transparent URL('theme://images/sta_WF_Subtitle.png') left middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static43", "absolute", "1.49%", "394", null, "74", "1.87%", null, this);
            obj.set_taborder("166");
            obj.set_cssclass("sta_WF_Labelbg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_contents02", "absolute", "2.86%", "398", "634", "21", null, null, this);
            obj.set_taborder("167");
            obj.set_text("판매상세정보를 이용하기 위해서는 자사판매정보 제공동의를 체크하셔야 이용이 가능합니다.");
            this.addChild(obj.name, obj);

            obj = new Static("sta_contents03", "absolute", "3.86%", "444", "634", "21", null, null, this);
            obj.set_taborder("168");
            obj.set_text("※ 제공동의 체크시 과금은 발생하지 않으며, 서비스 이용시(엑셀 다운로드) 과금이 SKU당 1,500원/월 부과됩니다.");
            this.addChild(obj.name, obj);

            obj = new CheckBox("cbk_SVC35", "absolute", "3.86%", "421", "173", "21", null, null, this);
            obj.set_taborder("163");
            obj.set_text("자사판매정보 제공동의");
            obj.set_value("N");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_napl_change", "absolute", null, "0", "112", "21", "100", null, this);
            obj.set_taborder("169");
            obj.set_text("거래처 코드 변경");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_tpc_change", "absolute", null, "0", "160", "21", "270", null, this);
            obj.set_taborder("170");
            obj.set_text("사용자 유형 변경");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_force", "absolute", null, "0", "20", "21", "433", null, this);
            obj.set_taborder("171");
            obj.set_readonly("true");
            obj.set_maxlength("3");
            obj.set_visible("false");
            obj.set_value("N");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static44", "absolute", "50.19%", "679", null, "29", "30.76%", null, this);
            obj.set_taborder("172");
            obj.set_text("회원유형");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_tpc", "absolute", "69.61%", "683", null, "21", "17.56%", null, this);
            this.addChild(obj.name, obj);
            var cbo_tpc_innerdataset = new Dataset("cbo_tpc_innerdataset", this.cbo_tpc);
            cbo_tpc_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">-회원유형-</Col></Row><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">협력업체</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">본부</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">사업장</Col></Row><Row><Col id=\"codecolumn\">04</Col><Col id=\"datacolumn\">세금계산서전용</Col></Row><Row><Col id=\"codecolumn\">05</Col><Col id=\"datacolumn\">전자계약전용</Col></Row><Row><Col id=\"codecolumn\">70</Col><Col id=\"datacolumn\">제주물류센터</Col></Row><Row><Col id=\"codecolumn\">80</Col><Col id=\"datacolumn\">농협IT전략부</Col></Row><Row><Col id=\"codecolumn\">81</Col><Col id=\"datacolumn\">농협몰</Col></Row></Rows>");
            obj.set_innerdataset(cbo_tpc_innerdataset);
            obj.set_taborder("173");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_text("-회원유형-");
            obj.set_readonly("true");
            obj.set_index("0");


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 803, 490, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("pattern_01");
            		p.set_titletext("회원정보");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item45","edt_TAX_USR","value","ds_payInfo","TAX_USR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item47","cbo_BANK","value","ds_payInfo","BNK_C");
            this.addChild(obj.name, obj);
            obj.bind();
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
            obj = new BindItem("item8","edt_BZNO02","value","ds_usrInfo","BZNO02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","edt_BZNO03","value","ds_usrInfo","BZNO03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","edt_NA_TRPL_C","value","ds_usrInfo","NA_TRPL_C");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","edt_DONGBW","value","ds_usrInfo","DONGUP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","edt_DONGUP","value","ds_usrInfo","DONGBW");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","rdo_COMP_TPC","value","ds_usrInfo","NA_MBCO_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","chk_SMS_YN","value","ds_usrInfo","SMS_RMS_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","chk_MAIL_YN","value","ds_usrInfo","EMAIL_RMS_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","cbo_TEL","value","ds_usrInfo","TELNO01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","edt_TEL01","value","ds_usrInfo","TELNO02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","edt_TEL02","value","ds_usrInfo","TELNO03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","edt_USR_EMAIL01","value","ds_usrInfo","USR_EMAIL01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","edt_MB_ID","value","ds_usrInfo","MB_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","edt_USR_EMAIL02","value","ds_usrInfo","USR_EMAIL02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","edt_USR_NM","value","ds_usrInfo","USR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","cbo_HP","value","ds_usrInfo","MPNO01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","edt_HP01","value","ds_usrInfo","MPNO02");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","edt_HP02","value","ds_usrInfo","MPNO03");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","edt_CLNTNM","value","ds_usrInfo","CLNTNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item20","rdo_SEX_DSC","value","ds_usrInfo","SEX_DSC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","edt_BZNO01","value","ds_usrInfo","BZNO01");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","edt_BIRTH","value","ds_usrInfo","BIRTH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","edt_REPMNM00","value","ds_usrInfo","REPMNM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item37","cbo_FAX","value","ds_usrInfo","FAX_RGNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item38","edt_FAX1","value","ds_usrInfo","HFAX");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item39","edt_FAX2","value","ds_usrInfo","FAX_SQNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","rdo_COMP_TPC00","value","ds_usrInfo","COMP_TPC");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item41","edt_CLNTNM00","value","ds_usrInfo","TR_STOP_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item40","edt_APPLY_DTM","value","ds_payInfo","APPLY_DTM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item48","edt_BIRTH07","value","ds_userInfo","BIRTH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item49","edt_PAY_AMT","value","ds_userInfo","BIRTH");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item44","edt_CLNTNM01","value","ds_payInfo","STL_METH_DSC_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item46","edt_CLNTNM03","value","ds_payInfo","ACNO");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item34","cbo_HP00","value","ds_usrInfo","ATEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item35","edt_HP00","value","ds_usrInfo","HTEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item36","edt_HP03","value","ds_usrInfo","STEL");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","edt_HP06","value","ds_usrInfo","FZIP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","edt_HP07","value","ds_usrInfo","RZIP");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item43","edt_CANCEL_DTM","value","ds_payInfo","CANCEL_DTM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item42","edt_REAPPLY_DTM","value","ds_payInfo","REAPPLY_DTM");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item51","edt_BUILING_USR","value","ds_payInfo","BUILING_USR");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item52","cbo_tpc","value","ds_usrInfo","USR_TPC");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("OMG_DS_SC_6511.xfdl", "lib::comLib.xjs");
        this.registerScript("OMG_DS_SC_6511.xfdl", function(exports) {
        if (this.executeIncludeScript) { this.executeIncludeScript("lib::comLib.xjs", null, exports); }	//include "lib::comLib.xjs";

        this.form_onload = function(obj,e)
        {
           this.gfn_setInitForm(obj, e); //공통
        }

        this.fn_afterFormOnload = function()
        {
           //페이지 로딩후 실행부분
           /* 초기값세팅 */
        	var param = [
         		{code:"HP"	,     dsName:"ds_hpNo", selecttype:"N"},
         		{code:"TEL"	,     dsName:"ds_telNo", selecttype:"N"},
         		{code:"BNK_C"	, dsName:"ds_bankCode", selecttype:"N"}
            ];
        	this.gfn_setPortalCommonCode(param);

        	/* selectBox처음 보여줄떄는 N로 보여주기 */
        	this.cbk_SVC31.set_value("N");
        	this.cbk_SVC32.set_value("N");
        	this.cbk_SVC33.set_value("N");
        	this.cbk_SVC34.set_value("N");
        	this.cbk_SVC35.set_value("N");
        	this.chk_BILLING_AUTH.set_value("N");
        	this.chk_CONTRACT_AUTH.set_value("N");
        	this.chk_TAX_AUTH.set_value("N");
        	this.chk_MAIL_YN.set_value("N");
        	this.chk_SMS_YN.set_value("N");
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        /*회원정보조회*/
        this.fn_clearDataSet = function ()
        {
        	this.ds_payInfo.clearData();
        	this.ds_svcInfo.clearData();
        	this.ds_usrAuth.clearData();
        	this.ds_usrInfo.clearData();
        	this.rdo_SVC_ID.set_value("");
        	this.cbk_SVC31.set_value("N");
        	this.cbk_SVC32.set_value("N");
        	this.cbk_SVC33.set_value("N");
        	this.cbk_SVC34.set_value("N");
        	this.cbk_SVC35.set_value("N");
        	this.chk_BILLING_AUTH.set_value("N");
        	this.chk_CONTRACT_AUTH.set_value("N");
        	this.chk_TAX_AUTH.set_value("N");
        	this.chk_MAIL_YN.set_value("N");
        	this.chk_SMS_YN.set_value("N");
        }

        /*회원정보조회*/
        this.fn_retriveUsrInfo = function (mb_id,usr_nm,na_trpl_c)
        {
        	if (this.gfn_isNull(mb_id)) {
        		this.gfn_getMessage("alert","validation.message.needs.action","회원ID", "입력");
        		return false;
        	}

        	var sParams = "MB_ID="+this.gfn_nullToEmpty(mb_id)
        				+ " USR_NM="+this.gfn_nullToEmpty(usr_nm)
        				+ " NA_TRPL_C="+this.gfn_nullToEmpty(na_trpl_c)
        				;
        	var sSvcID        = "retriveUsrInfo";
        	var sURL          = "svc::rest/mg/mbcslt/retrieveUsrInf";
        	var sInDatasets   = "";
        	var sOutDatasets  = "ds_usrInfo=ds_usrInfo ds_usrAuth=ds_usrAuth ds_payInfo=ds_payInfo ds_svcInfo=ds_svcInfo" ;
        	var sArgument     = sParams;
        	var sCallbackFunc = "fn_callBack";
        	var sTranType     = "S"; // U:저장/삭제, S:조회
        	this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        }

        /* 콜백메소드 */
        this.fn_callBack = function(svcID,ErrorCode,ErrorMsg)
        {
        	if (ErrorCode < 0) {
        		if (svcID == "changeTpc") {
        			this.edt_force.set_value("N");
        			if (ErrorCode == -2) {
        				this.alert(ErrorMsg);
        				return;
        			} else if (ErrorCode == -3) {
        				if (this.confirm("해당 사업장으로 가입 가능한 사번이 아닙니다.\n계속 진행하시겠습니까?")) {
        					this.edt_force.set_value("Y");
        					this.btn_tpc_change_onclick();
        				}
        			}
        		} else {		
        			if (ErrorCode == -2) {
        				this.gfn_getMessage("alert", "result.message.search.no.exist.data");
        				this.fn_clearDataSet();
        				return;
        			} else if (ErrorCode == -9) {
        				alert("등록되지 않은 거래처코드로 변경하실 수 없습니다.");
        				return;
        			} else {
        				this.gfn_getMessage("alert", "error.message.server.exception");
        				return;
        			}
        		}
        	} else {
        		if (svcID == "retriveUsrInfo") {
        			this.fn_setTpcChange();
        			
        			if (this.ds_usrAuth.rowcount >0) {
        				if (this.fn_svc_check(this.ds_usrAuth, "1")) {
        					this.chk_BILLING_AUTH.set_value("Y");
        				} else {
        					this.chk_BILLING_AUTH.set_value("N");
        				}			

        				if (this.fn_svc_check(this.ds_usrAuth, "2")) {
        					this.chk_CONTRACT_AUTH.set_value("Y");
        				} else {
        					this.chk_CONTRACT_AUTH.set_value("N");
        				}

        				if (this.fn_svc_check(this.ds_usrAuth, "3")) {
        					this.chk_TAX_AUTH.set_value("Y");
        				} else {
        					this.chk_TAX_AUTH.set_value("N");
        				}
        			} else {
        				this.chk_BILLING_AUTH.set_value("N");
        				this.chk_CONTRACT_AUTH.set_value("N");
        				this.chk_TAX_AUTH.set_value("N");
        			}

        			if (this.ds_svcInfo.rowcount >0) {
        				if (this.fn_svc_check(this.ds_svcInfo, "21")) {
        					this.rdo_SVC_ID.set_value("21");
        				}
        				if (this.fn_svc_check(this.ds_svcInfo, "22")) {
        					this.rdo_SVC_ID.set_value("22");
        				}

        				if (this.fn_svc_check(this.ds_svcInfo, "31")) {
        					this.cbk_SVC31.set_value("Y");
        				} else {
        					this.cbk_SVC31.set_value("N");
        				}
        				if (this.fn_svc_check(this.ds_svcInfo, "32")) {
        					this.cbk_SVC32.set_value("Y");
        				} else {
        					this.cbk_SVC32.set_value("N");
        				}
        				if (this.fn_svc_check(this.ds_svcInfo, "33")) {
        					this.cbk_SVC33.set_value("Y");
        				} else {
        					this.cbk_SVC33.set_value("N");
        				}
        				if (this.fn_svc_check(this.ds_svcInfo, "34")) {
        					this.cbk_SVC34.set_value("Y");
        				} else {
        					this.cbk_SVC34.set_value("N");
        				}
        				if (this.fn_svc_check(this.ds_svcInfo, "35")) {
        					this.cbk_SVC35.set_value("Y");
        				} else {
        					this.cbk_SVC35.set_value("N");
        				}
        			} else {
        				this.cbk_SVC31.set_value("N");
        				this.cbk_SVC32.set_value("N");
        				this.cbk_SVC33.set_value("N");
        				this.cbk_SVC34.set_value("N");
        				this.cbk_SVC35.set_value("N");
        			}

        			if (this.ds_payInfo.rowcount == 0) {
        				this.ds_payInfo.addRow();
        			}
        		} else if (svcID == "changeNa") {
        			this.gfn_getMessage("alert", "result.message.save.success");
        		} else if (svcID == "changeTpc") {
        			this.edt_force.set_value("N");
        			this.gfn_getMessage("alert", "result.message.save.success");
        			this.fn_retriveUsrInfo(this.ds_usrInfo.getColumn(0, "MB_ID"), this.ds_usrInfo.getColumn(0, "USR_NM"), this.ds_usrInfo.getColumn(0, "NA_TRPL_C"));
        		}
        	}
        }

        this.fn_svc_check = function(ds,svcId)
        {
        	var row = ds.findRow("SVC_ID", svcId);
        	if (row >= 0 && ds.getColumn(row, "RQ_DSC") == "1" && (ds.getColumn(row, "ENT_PRG_STSC") != "2" && ds.getColumn(row, "ENT_PRG_STSC") != "4")) {
        		return true;
        	}
        	return false;
        }

        /*업체ID전환*/
        this.btn_usrChange_onclick = function(obj,e)
        {
        	var id = this.edt_MB_ID.value;
        	var pw = this.ds_usrInfo.getColumn(0,"MB_PW");
        	application.setPrivateProfile("userid", id);
        	application.setPrivateProfile("userpw",pw);
        	nexacro._setCookie('userid',id,7);
        	nexacro._setCookie('userpw',pw,7);
        	this.gfn_callAdminSite(id, pw);
        }

        //거래처코드 변경
        this.btn_napl_change_onclick = function(obj,e)
        {
        	if (confirm("정말로 거래처 코드를 변경하시겠습니까?")) {
        		var orgval = this.ds_usrInfo.getOrgColumn(0, "NA_TRPL_C");
        		var sParam = "na_trpl_c=" + this.edt_NA_TRPL_C.value
        						+ " org_na_trpl_c=" + orgval
        						+ " mb_id=" + this.edt_MB_ID.value ;
        		var sSvcID        = "changeNa";
        		var sURL          = "svc::rest/mg/usrinf/changeNa";
        		var sInDatasets   = "";
        		var sOutDatasets  = "";
        		var sArgument     = sParam;
        		var sCallbackFunc = "fn_callBack";
        		var sTranType     = "U"; // U:저장/삭제, S:조회
        		this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        	}
        }

        this.fn_setTpcChange = function()
        {
        	var tpc = this.ds_usrInfo.getColumn(0, "USR_TPC");
        	this.btn_tpc_change.set_visible(tpc == "02" || tpc == "03");
        	this.edt_force.set_value("N");
        	
        	if (tpc == "02") {
        		this.btn_tpc_change.set_text("사용자 유형 변경[사업장]");
        	} else if (tpc == "03") {
        		this.btn_tpc_change.set_text("사용자 유형 변경[본부]");
        	}
        }

        this.btn_tpc_change_onclick = function(obj,e)
        {
        	var tpc = this.ds_usrInfo.getColumn(0, "USR_TPC");
        	if (tpc == "02" || tpc == "03") {
        		var msg;
        		if (tpc == "02") {
        			msg = "[본부 → 사업장]";
        		} else {
        			msg = "[사업장 → 본부]";
        		}
        	
        		if (this.edt_force.value == "Y" || confirm("가입 유형을 변경하시겠습니까?\n"+msg)) {
        			var orgval = this.ds_usrInfo.getOrgColumn(0, "NA_TRPL_C");
        			var sParam = "NA_TRPL_C=" + this.edt_NA_TRPL_C.value
        							+ " MB_ID=" + this.edt_MB_ID.value
        							+ " USR_TPC=" + tpc
        							+ " FORCE_YN=" + this.edt_force.value
        							;
        			var sSvcID        = "changeTpc";
        			var sURL          = "svc::rest/mg/usrinf/changeNhUsrTpc";
        			var sInDatasets   = "";
        			var sOutDatasets  = "";
        			var sArgument     = sParam;
        			var sCallbackFunc = "fn_callBack";
        			var sTranType     = "U"; // U:저장/삭제, S:조회
        			this.gfn_callService(sSvcID, sURL, sInDatasets ,sOutDatasets , sArgument , sCallbackFunc, sTranType);
        		}
        	} else {
        		this.alert("본부 또는 사업장 회원만 가능합니다");
        	}
        }
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.chk_CONTRACT_AUTH.addEventHandler("onchanged", this.CheckBox03_onchanged, this);
            this.rdo_COMP_TPC.addEventHandler("onitemclick", this.Radio00_onitemclick, this);
            this.Static04.addEventHandler("onclick", this.Div05_Static03_onclick, this);
            this.chk_BILLING_AUTH.addEventHandler("onchanged", this.CheckBox04_onchanged, this);
            this.Static10.addEventHandler("onclick", this.Div05_Static03_onclick, this);
            this.rdo_SEX_DSC.addEventHandler("onitemclick", this.Radio00_onitemclick, this);
            this.rdo_COMP_TPC00.addEventHandler("onitemclick", this.Radio00_onitemclick, this);
            this.rdo_SVC_ID.addEventHandler("onitemclick", this.rdo_SVC_ID_onitemclick, this);
            this.btn_usrChange.addEventHandler("onclick", this.btn_usrChange_onclick, this);
            this.btn_napl_change.addEventHandler("onclick", this.btn_napl_change_onclick, this);
            this.btn_tpc_change.addEventHandler("onclick", this.btn_tpc_change_onclick, this);

        };

        this.loadIncludeScript("OMG_DS_SC_6511.xfdl", true);

       
    };
}
)();
